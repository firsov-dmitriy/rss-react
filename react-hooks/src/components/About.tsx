import React, { Component } from 'react';
type AboutState = {
  name: string;
  surName: string;
  age: number;
};
type AbouthProps = {
  text?: string;
};
export default class About extends Component<AbouthProps, AboutState> {
  constructor(props: AbouthProps) {
    super(props);
    this.state = {
      name: 'Dmitriy',
      surName: 'Firov',
      age: 23,
    };
  }
  render() {
    const name = this.state.name;
    const surName = this.state.surName;
    const age = this.state.age;

    return (
      <div className="about">
        <h1 className="about_title">
          {' '}
          Hello me name is {name} {surName}
        </h1>
        <p className="about_text"> I am make this app</p>
      </div>
    );
  }
}
