import React, { Component } from 'react';
import Card from '../Card/Card';
import { dataChatacters } from '../types';
import './cardList.css';
interface CardListProps {
  data: dataChatacters[];
  onShowModalCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  valueSerch: string;
}
export default class CardList extends Component<CardListProps> {
  constructor(props: CardListProps | Readonly<CardListProps>) {
    super(props);
  }

  render() {
    return (
      <div className="card-list__container">
        {this.props.data.map((char) => (
          <Card
            onShowModalCard={this.props.onShowModalCard}
            key={char.id}
            name={char.name}
            image={char.image}
            status={char.status}
          />
        ))}
      </div>
    );
  }
}
