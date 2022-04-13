import React, { Component } from 'react';
import Card from '../Card/Card';
import { dataChatacters } from '../types';
import './cardList.css';
interface CardListProps {
  data: dataChatacters[];
  datePage2: string;
  valueSerch: string;
}
export default class CardList extends Component<CardListProps> {
  constructor(props: CardListProps | Readonly<CardListProps>) {
    super(props);
  }
  sortView(value: string, char: dataChatacters) {
    const valueLow = value.toLowerCase();
    const charLow = char.name.toLowerCase();

    if (valueLow == charLow.slice(0, valueLow.length)) {
      return <Card key={char.id} name={char.name} url={char.image} status={char.status} />;
    }
  }
  render() {
    console.log(this.props.datePage2);

    return (
      <div className="card-list__container">
        {this.props.data.map((char) => {
          if (!this.props.valueSerch) {
            return <Card key={char.id} name={char.name} url={char.image} status={char.status} />;
          } else {
            return this.sortView(this.props.valueSerch, char);
          }
        })}
      </div>
    );
  }
}
