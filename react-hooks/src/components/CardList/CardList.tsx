import React, { Component } from 'react';
import Card from '../Card/Card';
import { dataChatacters } from '../../types/types';
import './cardList.css';

interface CardListProps {
  data: dataChatacters[];

  valueSerch: string;
  getIdCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
export default class CardList extends Component<CardListProps> {
  constructor(props: CardListProps | Readonly<CardListProps>) {
    super(props);
  }

  render() {
    return (
      <div className="card-list__container">
        {this.props.data.map((char, id) => (
          <Card
            getIdCard={this.props.getIdCard}
            dataId={id}
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
