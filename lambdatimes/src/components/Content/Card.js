import React from 'react';
import propTypes from "prop-types";

const Card = props => {
  return (
    <div className="card">
      <div className="headline">{props.card.headline}</div>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt="cardImg" />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: propTypes.object.isRequired,
  card: propTypes.shape({
    headline: propTypes.string.isRequired,
    tab: propTypes.string.isRequired,
    img: propTypes.string.isRequired,
    author: propTypes.string.isRequired
  }).isRequired,
}
export default Card;
