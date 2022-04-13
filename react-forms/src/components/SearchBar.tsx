import React, { Component } from 'react';

type SearchBarState = {
  value: string;
};
type SearchBarProps = {
  name?: string;
  getValue: (value: string) => void;
  onSubmit: (submit: React.FormEvent<HTMLFormElement>) => void;
};
export default class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      value: '',
    };
  }
  getValue(eve: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: eve.target.value });
  }
  componentWillUnmount() {
    localStorage.setItem('searchText', this.state.value);
  }
  handlerSubmit(eve: React.FormEvent<HTMLFormElement>) {
    eve.preventDefault();
    console.log('State', +this.state.value);
  }

  render() {
    return (
      <>
        <form className="d-flex" onSubmit={(eve) => this.props.onSubmit(eve)}>
          <input
            data-testid="PostContent"
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(eve) => this.props.getValue(eve.target.value.toString())}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </>
    );
  }
}
