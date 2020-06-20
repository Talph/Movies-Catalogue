import React from 'react';

import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
        <img src={`https:robohash.org/${props.monster.id}?set=set2`} alt="monster"/>
        <h2> {props.monster.name}</h2>
         <h3>{props.monster.email}</h3>
    </div>
)