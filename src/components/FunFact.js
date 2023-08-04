import React from 'react';
import heroImage from '../assests/hero-image.jpg'; 


const FunFact = (props) => {
    // Initialize fact state variable
    const [fact, setFact] = React.useState('');
    // Needs to be in a seperate function
    const getFact = async () => {
        // Make the API request
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
            "method": "GET"
        });
        const json = await response.json();
        const newFact = json.text;
        // Set as a state variable
        setFact(newFact);
        return () => null;
    };
    // Hook on to useEffect
    React.useEffect(() => {

        getFact();

    }, []);
    return (
        <>
        <p id='funfact'> <span id='fun'> Fun fact: </span>{fact}</p>
        <div id='heroimg'>
            <img  src={heroImage} alt="Hero Image" className="img-fluid cover" />
            </div>
        </>
    )
};
export default FunFact;