import Hero from '../components/Hero';
import './Results.css';

const Results : React.FC = () => {
    return (
        <>
            <Hero
                backgroundImage='./images/rezultate.jpg'
                heading="Join B&amp;B Team"
                subheading="Devin-o acum un atlet de top și alătură-te echipei noastre!"
                buttonText="Înscrie-te acum!"
                buttonLink=".#contact" 
            />
            <div className="results-page">
                <h1>Rezultate</h1>
                <p>Rezultatele sportivilor noștri sunt o dovadă a dedicației și muncii lor. Iată câteva dintre cele mai recente realizări:</p>
                <div className="players" >
                    <div className="player">
                        <h2>Sportiv 1</h2>
                    </div>
                    <div className="player">
                        <h2>Sportiv 2</h2>
                    </div>
                    <div className="player">
                        <h2>Sportiv 3</h2>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Results;