import React, { Component } from 'react';
import Card from './Card';
import CardList from './CardList';
import SearchBar from './SearchBar';

export default class MainPage extends Component {
  render() {
    return (
      <div>
        <CardList />
      </div>
    );
  }
}
