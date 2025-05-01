import React, { useState } from 'react';
import "./Contact.css";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <div className="contact">
            <h2>Contactează-ne</h2>
            <p>Ia legătura cu noi pentru a afla mai multe despre serviciile noastre</p>
            <form onSubmit={sendEmail}>
                <label>
                    Nume si Prenume:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>
                    Numar de telefon:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label>
                    Mesaj:
                    <textarea name="message" value={formData.message} onChange={handleChange} required />
                </label>
                <button type="submit">
                    <a>Trimite!</a>
                </button>
            </form>
        </div>
    );
};

export default Contact;