import { stat } from 'fs/promises';
import React, { Component } from 'react';

type SearchBarState = {
  value: string;
};
type SearchBarProps = {
  name?: string;
};
export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      value: '',
    };
  }
  getValue(eve: React.ChangeEvent<HTMLInputElement>) {
    this.setState(() => {
      console.log(eve.target);

      return { value: eve.target.value };
    });
  }

  render() {
    console.log(this.state.value);

    return (
      <div>
        <input
          type="text"
          onChange={(eve) => this.getValue(eve)}
          placeholder="Search something"
          className="form-control"
        />
      </div>
    );
  }
}
