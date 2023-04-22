import React from 'react';

/**
 * Représente une carte de fonctionnalité
 * @param {Object} props - Les propriétés de la carte
 * @param {string} props.icon - L'URL de l'icône de la carte
 * @param {string} props.title - Le titre de la carte
 * @param {string} props.text - Le texte de la carte
 * @returns {JSX.Element} - La carte de fonctionnalité sous forme de JSX
 */
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