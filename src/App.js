import React, { Component } from 'react';
import { SearchField } from './components/search-field/search-field.component';
import { Table } from './components/table/table.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      rates: [],
      searchField: ''
    }
  }

  componentDidMount() {
    const endpoint = 'https://api.exchangeratesapi.io/latest';

    fetch(endpoint)
      .then(response => response.json())
      .then(data => this.setState({ rates: Object.entries(data.rates) }));
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { rates, searchField } = this.state;
    const filteredRates = rates.filter(rate => rate[0].toLowerCase().includes(searchField.toLowerCase()));
    const date = new Date().toJSON().slice(0,10).replace(/-/g,'/');

    return (
      <div className="App">
        <h1>Exchange Rates Against Euro</h1>
        <h4>Date: { date }</h4>
        <SearchField
          placeholder="search your rate"
          handleChange={ this.handleChange }
        />
        <Table rates={ filteredRates }/>
      </div>
    );
  }
}

export default App;
