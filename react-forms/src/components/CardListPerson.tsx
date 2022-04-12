import React, { Component } from 'react';
import Card from './Card';
import CardPerson from './CardPerson';
import Persona from './Persona';

export default class CardListPerson extends Component<Persona> {
  listState: Persona[];

  constructor(props: Persona) {
    super(props);
    this.listState = [this.props];
  }

  componentDidUpdate(prev: Persona) {
    if (this.props.buttonWork !== prev.buttonWork) {
      this.listState.push(this.props);
    }
  }

  render() {
    this.componentDidUpdate(this.props);
    return (
      <>
        {this.listState.map(
          (
            el: {
              name: string | undefined;
              secName: string | undefined;
              date: string | undefined;
              select: string | undefined;
              url: string | undefined;
            },
            id: React.Key | null | undefined
          ) => (
            <CardPerson
              key={Date.now()}
              name={el.name}
              secName={el.secName}
              DOB={el.date}
              city={el.select}
              url={el.url}
            />
          )
        )}
      </>
    );
  }
}
