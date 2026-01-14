import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function mailSend(request, response) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, mainPurpose, description } = request.body;

  if (!name || !email || !mainPurpose || !description) {
    return response.status(400).json({ error: '必須項目が不足しています' });
  }

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['Kake2437@gmail.com'],
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

    return response.status(200).json(data);
  } catch (error) {
    console.error('Resend Error:', error);
    return response.status(500).json({ error: 'メール送信に失敗しました' });
  }
}
