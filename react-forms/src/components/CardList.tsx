import React, { Component } from 'react';
import Card from './Card';
import { personType } from './types';

export default class CardList extends Component {
  render() {
    return (
      <div style={{ display: 'flex' }}>
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}
