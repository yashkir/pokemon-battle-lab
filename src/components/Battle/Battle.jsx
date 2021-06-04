import React from 'react';
import './Battle.css';
import Fighter from '../Fighter/Fighter.jsx'
import Messages from '../Messages/Messages.jsx'

class Battle extends React.Component {
  state = {
    messages: ['Welcome'],
    warriors: [
      {
        id: 1,
        name: 'Player',
        image: 'https://cdn.dribbble.com/users/1053295/screenshots/3064381/face_5.jpg',
        hp: 100,
        atk: 10,
        def: 2,
        targetId: 2,
      },
      {
        id: 2,
        name: 'Enemy',
        image: 'https://media.istockphoto.com/photos/portrait-of-a-viking-warrior-picture-id1207246252',
        hp: 100,
        atk: 5,
        def: 2,
        targetId: 1,
      },
    ]
  }

  handleAttack = (attackerId, targetId) => {
    this.setState(state => {
      let attacker = state.warriors.find(warrior => warrior.id === attackerId);
      let target = state.warriors.find(warrior => warrior.id === targetId);

      let damage = attacker.atk - target.def;

      let newTarget = {...target, hp: target.hp - damage};
      let newWarriors = state.warriors.map(warrior => warrior.id === targetId ? newTarget : warrior);
      let newMessages = [`${attacker.name} struck ${target.name} for ${damage} damage!`, ...this.state.messages];

      return {
        warriors: newWarriors,
        messages: newMessages,
      };

    });
  }

  render() {
    return (
      <div className='Battle'>
        <h1>Battle</h1>
        <hr />
        <div className="Battle-cards">
          <Fighter
            fighter={this.state.warriors[0]} 
            handleAttack={this.handleAttack}
          />
          <Fighter
            fighter={this.state.warriors[1]} 
            handleAttack={this.handleAttack}
          />
        </div>
        <Messages messages={this.state.messages} />
      </div>
    )
  };
}

export default Battle
