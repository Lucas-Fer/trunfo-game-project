import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      <section>
        <h1>Filtro de busca</h1>
        <input
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
          disabled={ checkboxDisable }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito raro</option>
        </select>

        <label htmlFor="filterInput">
          <input
            type="checkbox"
            id="filterInput"
            data-testid="trunfo-filter"
            onClick={ handleCheckboxFilter }
          />
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
