import React, { Component } from 'react';
import PropType from 'prop-types';
import '../Styles/Form.css'
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
        <h1 className="title">Crie sua carta</h1>
        <label htmlFor="cardName">
          <p className="labelText">Nome</p>
          <input
            placeholder="[Obrigatório!] Digite o nome da carta"
            type="text"
            data-testid="name-input"
            name="cardName"
            id="cardName"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardDescription">
          <p className="labelText">Descrição:</p>
          <textarea
            placeholder="[Obrigatório!] Digite uma descrição"
            data-testid="description-input"
            name="cardDescription"
            id="cardDescription"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardAttr1" className="attr-box">
          <p className="labelText" id="ataque">Ataque</p>
          <input
            type="number"
            data-testid="attr1-input"
            name="cardAttr1"
            className="cardAttr"
            id="cardAttr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardAttr2" className="attr-box">
          <p className="labelText" id="defesa">Defesa</p>
          <input
            type="number"
            data-testid="attr2-input"
            name="cardAttr2"
            className="cardAttr"
            id="cardAttr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardAttr3" className="attr-box">
          <p className="labelText" id="vida">Vida</p>
          <input
            type="number"
            data-testid="attr3-input"
            name="cardAttr3"
            className="cardAttr"
            id="cardAttr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
            max="90"
            min="0"
          />
        </label>

        <label htmlFor="cardImage">
          <p className="labelText">URL da imagem</p>
          <input
            placeholder="[Obrigatório!] Link da imagem"
            type="text"
            data-testid="image-input"
            name="cardImage"
            id="cardImage"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="cardRare">
          <p className="labelText">Raridade</p>
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
            <label htmlFor="cardTrunfo" id="labelTrunfo">
              <input
                type="checkbox"
                data-testid="trunfo-input"
                name="cardTrunfo"
                id="cardTrunfo"
                checked={ cardTrunfo }
                onChange={ onInputChange }
              />
              <p className="labelText">Super trunfo?</p>
            </label>
          )
        }

        <button
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
          type="submit"
          id="btn-save"
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
