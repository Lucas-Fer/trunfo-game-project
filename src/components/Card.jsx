import React, { Component } from 'react';
import PropType from 'prop-types';

import '../Styles/Cards.css'

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardCreate,
      onRemoveCard,
      index,
    } = this.props;
    return (
      <div id="main-section-preview">
      <section id="section-preview">
        
        <h3 id="cardNamePreview" data-testid="name-card">
          {cardName}
        </h3>

          <img
          id="card-image-preview"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />

        <span data-testid="description-card">
          {cardDescription}
        </span>

        <span data-testid="attr1-card">
          {cardAttr1}
        </span>

        <span data-testid="attr2-card">
          {cardAttr2}
        </span>

        <span data-testid="attr3-card">
          {cardAttr3}
        </span>

        <span data-testid="rare-card">
          {cardRare}
        </span>

        {
          cardTrunfo
            ? <span data-testid="trunfo-card">Super Trunfo</span> : null
        }

        <span>
          {cardCreate
            ? (
              <button
                onClick={ () => onRemoveCard(index) }
                type="button"
                data-testid="delete-button"
              >
                Excluir

              </button>
            ) : null}
        </span>
        </section>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  cardCreate: PropType.bool.isRequired,
  onRemoveCard: PropType.func.isRequired,
  index: PropType.number.isRequired,
};
