import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";
import TermsModal from '../components/TermsModal';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [popup, setPopup] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        emailjs.send(
            'service_efz21ae',
            'template_zwxp3gf',
            { ...formData },
            '8SZOf_V9kdV6mSbQC'
        )
        .then((_result) => {
            setPopup("Mesajul dumneavoastră a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.");
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: ''
            });
            setTimeout(() => setPopup(''), 4000);
        }, (_error) => {
            setPopup("A apărut o eroare la trimiterea mesajului. Vă rugăm să încercați din nou mai târziu.");
            setTimeout(() => setPopup(''), 4000);
        });
    };

    const [isTermsModalOpen, setTermsModalOpen] = useState(false);
    const openTermsModal = () => setTermsModalOpen(true);
    const closeTermsModal = () => setTermsModalOpen(false);

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
                <div className="privacy-container">
                    <input type="checkbox" name="privacy" onChange={handleChange} required />
                    <span className="privacy-text">
                        Am citit si sunt de acord cu <a className="terms" onClick={openTermsModal}>Politica de confidentialitate</a>
                    </span>
                </div>
                <button type="submit">Trimite!</button>
            </form>
            <TermsModal isOpen={isTermsModalOpen} onClose={closeTermsModal} />
            {popup && <div className="popup">{popup}</div>}
        </div>
    );
};

export default Contact;