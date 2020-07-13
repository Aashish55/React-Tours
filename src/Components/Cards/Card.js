import React from 'react';
import './Card.css';



const Card = ( props )=>{

    console.log(props.imageName)
    return (
        <div className='Card'>
            <div className='image' style={{ backgroundImage:`url(${props.imageName})` }}></div>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    );

}

export default Card;