import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../Styles/FilterCards.css'

export default class FilterCards extends Component {
  render() {
    const {
      searchCard,
      searchInput,
      rarity,
      handleSelect,
      handleCheckboxFilter,
      checkboxDisable,
    } = this.props;
    return (
      <section id="main-search">
        <h1 style={{ color: '#444955'}}>Busque no seu baralho</h1>
        <input
          id="cardNameSearch"
          placeholder="Nome da carta"
          data-testid="name-filter"
          type="text"
          onChange={ searchCard }
          value={ searchInput }
          disabled={ checkboxDisable }
        />

        <select
          onChange={ handleSelect }
          data-testid="rare-filter"
          value={ rarity }
          disabled={checkboxDisable}
          id="cardDescriptionSearch"
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <label id="label-search" htmlFor="filterInput">
          <input
            type="checkbox"
            id="filterInput"
            data-testid="trunfo-filter"
            onClick={ handleCheckboxFilter }
          />
          <p>Carta Trunfo</p>
        </label>
      </section>
    );
  }
}

FilterCards.propTypes = {
  searchCard: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleCheckboxFilter: PropTypes.func.isRequired,
  rarity: PropTypes.string.isRequired,
  searchInput: PropTypes.string.isRequired,
  checkboxDisable: PropTypes.bool.isRequired,
};
