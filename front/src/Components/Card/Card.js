import React from 'react';

const Card = (props) => {
    return (
        <div className="feature-item">
        <img
          src={`${props.icon}`}
          alt="icon"
          className="feature-icon"
        />
        <h3 className="feature-item-title">{props.title}</h3>
        <p>
        {props.text}
        </p>
      </div>
    );
};

export default Card;