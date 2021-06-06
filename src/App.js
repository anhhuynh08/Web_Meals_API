import './App.css';
import Form from './components/Form';
import Meals from './components/Meals';
import React, { Component } from 'react';

// const API_KEY = "1";
class App extends Component {
  state = {
    meals: []
  };

  getMeals = async (e) => {
    const mealName = e.target.elements.mealName.value;
    e.preventDefault();
    // const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${mealName}`);
    const api_call = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`);
    const data = await api_call.json();
    this.setState({ meals: data.meals });
    console.log(this.state.meals);
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h2>Meals api</h2>
          <Form getMeals={this.getMeals} />
          <Meals meals={this.state.meals} />
        </div>

      </div>
    );
  }
}

export default App;
