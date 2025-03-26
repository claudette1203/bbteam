import './SportPop.css';

interface SportProps {
    id: number;
    name: string;
    shortDescription: string;
    description: string;
    image: string;
    active: boolean;
}

const SportPop: React.FC<SportProps> = ({ name, description, image}) => {
    return (
        <div className="sport-pop">
            <img src={image} alt={name} />
            <div className="details">
                <h1>{name}</h1>
                <p>{description}</p>
                <button onClick={() => window.location.href = '/contact'}>înscrie-te acum!</button>
            </div>
        </div>
    );
};

export default SportPop;