import React, { Component } from 'react';
import CardPerson from './CardPerson';
import Persona from './Persona';

export default class CardListPerson extends Component<Persona> {
  listState: Persona[];
  constructor(props: Persona) {
    super(props);
    this.listState = [this.props];
  }
  componentDidUpdate(prev: Persona) {
    if (this.props.url !== prev.url) {
      this.listState.push(this.props);
    }
  }
  render() {
    this.componentDidUpdate(this.props);
    return (
      <div style={{ display: 'flex' }}>
        {this.listState.map((el, id) => (
          <CardPerson
            key={id}
            name={el.name}
            secName={el.secName}
            DOB={el.date}
            city={el.select}
            url={el.url}
          />
        ))}
      </div>
    );
  }
}
