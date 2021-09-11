import React from 'react'


const countries = (props) => {
const {flag, name, capital, demonym, region, population} = props;

    return (  
        <div>
            <img src={flag} alt={name} style={{'width':'500px', 'height':'300px'}}/>
            <h1>{name}</h1>
            <h2>{capital}</h2>
            <p>{demonym}</p>
            <p>{region}</p>
            <p>{population}</p>
        </div>
    );
}
 
export default countries;