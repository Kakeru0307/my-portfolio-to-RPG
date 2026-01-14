import { useState } from 'react';

type FormValues = {
  name: string;
  email: string;
  mainPurpose: string;
  description: string;
};

export const useMailSend = () => {
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    mainPurpose: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!values.name || !values.email || !values.description) {
      alert('必須項目を入力してください');
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch('/api/mailSend', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          mainPurpose: values.mainPurpose,
          description: values.description,
        }),
      });

      if (res.ok) {
        alert('送信しました！');
        setValues({ name: '', email: '', mainPurpose: '', description: '' });
      } else {
        alert('送信エラー');
      }
    } catch (e) {
      alert('通信エラー');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    handleChange,
    handleSubmit,
    isSubmitting,
  };
};
