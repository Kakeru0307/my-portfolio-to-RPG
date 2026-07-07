import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

import { saveContact } from '../lib/repositories/contacts';

const resend = new Resend(process.env.RESEND_API_KEY);

type ContactBody = {
  name?: string;
  email?: string;
  mainPurpose?: string;
  description?: string;
};

export default async function mailSend(
  request: VercelRequest,
  response: VercelResponse
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, mainPurpose, description } =
    request.body as ContactBody;

  if (!name || !email || !mainPurpose || !description) {
    return response.status(400).json({ error: '必須項目が不足しています' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['kake2437@gmail.com'],
      subject: `【お問い合わせ】${mainPurpose || '件名なし'} (${name}様)`,
      html: `
        <h2>ポートフォリオからお問い合わせがありました</h2>
        <p><strong>お名前:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>件名:</strong> ${mainPurpose}</p>
        <hr />
        <h3>詳細メッセージ:</h3>
        <p style="white-space: pre-wrap;">${description}</p>
      `,
    });

    try {
      await saveContact({ name, email, mainPurpose, description });
    } catch (dbError) {
      console.error('Contact DB save error:', dbError);
    }

    return response.status(200).json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return response.status(500).json({ error: 'メール送信に失敗しました' });
  }
}
