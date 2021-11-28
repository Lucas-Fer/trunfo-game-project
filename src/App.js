import React from 'react';

import Form from './components/Form';
import Card from './components/Card';
import FilterCards from './components/FilterCards';

import './Styles/App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      arraySave: [],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      cardCreate: false,
      isSaveButtonDisabled: true,
      searchInput: '',
      rarity: '',
      trunfoFiltered: '',
      checkboxDisable: false,
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.isvalid = this.isvalid.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.onRemoveCard = this.onRemoveCard.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.isvalid());
  }

  handleCheckBox = () => {
    const { hasTrunfo } = this.state;
    if (hasTrunfo) this.setState({ checkedButtonDisable: true });
  };

  onSaveButtonClick(event) {
    event.preventDefault();

    const { cardTrunfo } = this.state;

    if (cardTrunfo) this.setState({ hasTrunfo: true });

    this.setState((previous) => ({
      arraySave: [...previous.arraySave, { ...previous }],
    }), () => {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardImage: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardRare: 'normal',
        cardCreate: true,
        isSaveButtonDisabled: true,
        cardTrunfo: false,
      });
    });
  }

  onRemoveCard(cardIndex) {
    const { arraySave } = this.state;
    const indexArrraySave = arraySave[cardIndex];

    if (indexArrraySave.cardTrunfo) this.setState({ hasTrunfo: false });

    const filteredArr = arraySave.filter((_, index) => index !== cardIndex);
    this.setState({ arraySave: filteredArr });
  }

  searchCard = ({ target }) => {
    const { value } = target;
    this.setState({ searchInput: value });
  };

  handleSelect = ({ target }) => {
    const { value } = target;
    if (value === 'todas') {
      this.setState({ rarity: '' });
    } else { this.setState({ rarity: value }); }
  };

  handleCheckboxFilter = ({ target }) => {
    const { arraySave } = this.state;
    const getTrunfo = arraySave.find((element) => element.hasTrunfo);
    if (getTrunfo) this.setState({ trunfoFiltered: getTrunfo.cardName });
    const { checked } = target;
    if (checked) this.setState({ checkboxDisable: checked });
    else { this.setState({ checkboxDisable: false }); }
  };

  isvalid() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    const arrayVerification = [];
    const att1InNumber = Number(cardAttr1);
    const att2InNumber = Number(cardAttr2);
    const att3InNumber = Number(cardAttr3);

    const maxTotalAtt = 210;
    const maxAtt = 90;

    arrayVerification.push(
      cardName.length > 0
      && cardDescription.length > 0
      && cardImage.length > 0
      && cardRare.length > 0
      && att1InNumber >= 0 && att1InNumber <= maxAtt
      && att2InNumber >= 0 && att2InNumber <= maxAtt
      && att3InNumber >= 0 && att3InNumber <= maxAtt
      && att1InNumber + att2InNumber + att3InNumber <= maxTotalAtt,
    );

    if (arrayVerification.every((condition) => condition === true)) {
      this
        .setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  }

  render() {
    const {
      state: {
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
        arraySave,
        cardCreate,
        searchInput,
        rarity,
        checkboxDisable,
      },
      onInputChange,
      onSaveButtonClick,
      onRemoveCard,
      searchCard,
      handleSelect,
      handleCheckboxFilter,
    } = this;
    return (
      <main>
        <h1 id="title">Super Trunfo: The Witcher </h1>
        <section className="main-content">
          
          <div id="form-content">
            <Form
              cardName={cardName}
              cardDescription={cardDescription}
              cardAttr1={cardAttr1}
              cardAttr2={cardAttr2}
              cardAttr3={cardAttr3}
              cardImage={cardImage}
              cardRare={cardRare}
              cardTrunfo={cardTrunfo}
              hasTrunfo={hasTrunfo}
              isSaveButtonDisabled={isSaveButtonDisabled}
              onInputChange={onInputChange}
              onSaveButtonClick={onSaveButtonClick}
            />
          </div>
          <div id="preview-content">
            <h1>Pré-visualização</h1>
            <Card
              cardName={cardName}
              cardDescription={cardDescription}
              cardAttr1={cardAttr1}
              cardAttr2={cardAttr2}
              cardAttr3={cardAttr3}
              cardImage={cardImage}
              cardRare={cardRare}
              cardTrunfo={cardTrunfo}
              key="preview"
              index={0}
              cardCreate={false}
              onRemoveCard={onRemoveCard}
            />
          </div>
        </section>

        <div id="section-search">
          <FilterCards
            handleSelect={handleSelect}
            searchCard={searchCard}
            searchInput={searchInput}
            rarity={rarity}
            handleCheckboxFilter={handleCheckboxFilter}
            checkboxDisable={checkboxDisable}
          />

          <div>
            {arraySave
              .filter((inputFilter) => (inputFilter.cardName.includes(searchInput)))
              .filter((element) => {
                if (checkboxDisable) return element.cardTrunfo;
                if (rarity === '') return element.cardRare.includes(rarity);
                if (rarity !== '') return element.cardRare === rarity;
                return true;
              })
              .map((element, index) => (
                <div id="span-content" key={index}>
                  <Card
                    cardName={element.cardName}
                    cardDescription={element.cardDescription}
                    cardAttr1={element.cardAttr1}
                    cardAttr2={element.cardAttr2}
                    cardAttr3={element.cardAttr3}
                    cardImage={element.cardImage}
                    cardRare={element.cardRare}
                    cardTrunfo={element.cardTrunfo}
                    cardCreate={cardCreate}
                    onRemoveCard={onRemoveCard}
                    key={index}
                    index={index}
                  />
                </div>
              ))}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
