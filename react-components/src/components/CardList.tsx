import React, { Component } from 'react';
import Card from './Card';

export default class CardList extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <h2>Список карточек</h2>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
