import React, { Component } from 'react';
import PropType from 'prop-types';

export default class Form extends Component {
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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <h1>Crie sua carta</h1>
        <label htmlFor="cardName">
          <p>Nome:</p>
          <input
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          <p>Descrição:</p>
          <textarea
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1">
          <p>Atributo 1</p>
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardAttr2">
          <p>Atributo 2</p>
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardAttr3">
          <p>Atributo 3</p>
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardImage">
          <p>URL da imagem</p>
          <input
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          <p>Raridade</p>
          <select
            data-testid="rare-input"
            id="cardRare"
            name="cardRare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>

        {
          hasTrunfo === true ? <p>Você já tem um Super Trunfo em seu baralho</p> : (
            <label htmlFor="cardTrunfo">
              <p>Super trunfo?</p>
              <input
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
            </label>
          )
        }

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          data-testid="save-button"
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropType.string.isRequired,
  cardDescription: PropType.string.isRequired,
  cardAttr1: PropType.string.isRequired,
  cardAttr2: PropType.string.isRequired,
  cardAttr3: PropType.string.isRequired,
  cardImage: PropType.string.isRequired,
  cardRare: PropType.string.isRequired,
  cardTrunfo: PropType.bool.isRequired,
  hasTrunfo: PropType.bool.isRequired,
  isSaveButtonDisabled: PropType.bool.isRequired,
  onInputChange: PropType.func.isRequired,
  onSaveButtonClick: PropType.func.isRequired,
};
