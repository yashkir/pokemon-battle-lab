import React from 'react';
import './Fighter.css';

function Fighter(props) {
  return (
    <div className='Fighter'>
      <h3>{props.fighter.name}</h3>
      <img
        src={props.fighter.image}
        width="250px"
        height="250px"
        alt="placeholder"
        crossOrigin="anonymous"
      />
      <div> HP: {props.fighter.hp} </div>
      <div> ATK: {props.fighter.atk} </div>
      <div> DEF: {props.fighter.def} </div>
      <button onClick={() => props.handleAttack(props.fighter.id, props.fighter.targetId)}>Attack</button>
      <button>Defend</button>
    </div>
  )
}

export default Fighter;
