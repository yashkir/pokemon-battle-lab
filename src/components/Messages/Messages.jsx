import React from 'react';
import './Messages.css';

function Messages(props) {
  return (
    <div className="Messages">
      {props.messages.slice(0, 5).map(message => <li>{message}</li>)}
    </div>
  )
}

export default Messages
