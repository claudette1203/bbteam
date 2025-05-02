import React from 'react';
import './TermsModal.css';

type TermsModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

const termsData = [
    {
        title: "1. Informații generale",
        clauses: [
            "1.1. Aceste Termeni și Condiții guvernează accesul și utilizarea site-ului web al Asociației Clubul Sportiv de Atletism B&B Team.",
            "1.2. Prin accesarea și utilizarea site-ului, utilizatorii acceptă acești Termeni și Condiții."
        ]
    },
    {
        title: "2. Utilizarea formularului de contact",
        clauses: [
            "2.1. Formularul de contact permite utilizatorilor să transmită numele, prenumele, numărul de telefon, adresa de email și mesajul dorit către Asociație.",
            "2.2. Datele furnizate vor fi utilizate exclusiv în scopul răspunsului la solicitări și nu vor fi divulgate către terți fără consimțământul utilizatorului, cu excepția cazurilor prevăzute de lege.",
            "2.3. Utilizatorii declară că datele furnizate sunt exacte și conforme realității."
        ]
    },
    {
        title: "3. Protecția datelor cu caracter personal",
        clauses: [
            "3.1. Prelucrarea datelor se realizează în conformitate cu Regulamentul (UE) 2016/679 (GDPR) și legislația națională aplicabilă.",
            "3.2. Datele vor fi păstrate pe durata necesară răspunsului la solicitări și șterse ulterior, cu excepția cazurilor în care Asociația are obligația legală de a le reține.",
            "3.3. Utilizatorii au dreptul de acces, rectificare, ștergere, opoziție și portabilitate a datelor, exercitabile printr-o cerere scrisă la adresa de email [Email]."
        ]
    },
    {
        title: "4. Proprietatea intelectuală",
        clauses: [
            "4.1. Conținutul site-ului, inclusiv texte, imagini, logo și design, este proprietatea Asociației sau terților și este protejat prin legea drepturilor de autor.",
            "4.2. Orice reproducere, distribuire sau modificare a conținutului fără acordul expres al Asociației este interzisă."
        ]
    },
    {
        title: "5. Limitarea răspunderii",
        clauses: [
            "5.1. Asociația nu răspunde pentru daune directe sau indirecte cauzate de utilizarea site-ului sau de imposibilitatea accesării acestuia.",
            "5.2. Asociația nu garantează că site-ul va funcționa fără erori sau întreruperi."
        ]
    },
    {
        title: "6. Link-uri către terți",
        clauses: [
            "6.1. Site-ul poate conține link-uri către site-uri gestionate de terți. Asociația nu își asumă responsabilitatea pentru conținutul acestor site-uri.",
            "6.2. Accesarea link-urilor se face pe răspunderea utilizatorului."
        ]
    },
    {
        title: "7. Modificarea Termenilor și Condițiilor",
        clauses: [
            "7.1. Asociația își rezervă dreptul de a modifica acești Termeni și Condiții în orice moment.",
            "7.2. Orice modificare va fi comunicată prin actualizarea termenilor pe site și va intra în vigoare de la data publicării."
        ]
    },
    {
        title: "8. Legea aplicabilă și jurisdicție",
        clauses: [
            "8.1. Acești Termeni și Condiții sunt guvernați de legea din România.",
            "8.2. Orice litigiu va fi soluționat de instanțele competente din România."
        ]
    }
];


const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Terms and Conditions</h2>
                {termsData.map((section, index) => (
                    <div key={index}>
                        <h3>{section.title}</h3>
                        {section.clauses.map((clause, idx) => (
                            <p key={idx}>{clause}</p>
                        ))}
                    </div>
                ))}
            <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default TermsModal;
