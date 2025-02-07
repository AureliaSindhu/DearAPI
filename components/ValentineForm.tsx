"use client";

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';

const ValentineForm: React.FC = () => {
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!recipient || !message) {
      setError('Please fill in all fields.');
      return;
    }
    setError(null);
    const res = await fetch('/api/letters', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ recipient, message })
    });
    if (res.ok) {
      const data = await res.json();
      router.push(`/letter/${data.id}`);
    } else {
      const errData = await res.json();
      setError(errData.error || 'Something went wrong');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'inline-block',
        textAlign: 'left',
        padding: '2rem',
        background: '#fff0f0',
        borderRadius: '10px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px'
      }}
    >
      <div style={{ marginBottom: '1rem' }}>
        <label>To:</label>
        <br />
        <input
          type="text"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          placeholder="Enter your partner's name"
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc'
          }}
        />
      </div>
      <div style={{ marginBottom: '1rem' }}>
        <label>Message:</label>
        <br />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your lovely message"
          style={{
            width: '100%',
            padding: '0.5rem',
            borderRadius: '5px',
            border: '1px solid #ccc',
            height: '100px'
          }}
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button
        type="submit"
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#ff5c5c',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Generate Letter
      </button>
    </form>
  );
};

export default ValentineForm;
