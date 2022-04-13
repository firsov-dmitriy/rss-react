import React, { Component } from 'react';
import serviceMorty from '../service/service';
import CardList from './CardList/CardList';
import { dataChatacters } from './types';
interface MainPageState {
  data: dataChatacters[];
  dataPage2: string;
}
interface MainPageProps {
  valueSerch: string;
}

export default class MainPage extends Component<MainPageProps, MainPageState> {
  _isMounted: boolean;
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      data: [],
      dataPage2: '',
    };
    this._isMounted = false;
  }

  componentDidMount() {
    const api = new serviceMorty();
    this._isMounted = true;

    api.getCharacter(this.props.valueSerch).then((data) => {
      this._isMounted &&
        this.setState({
          data: data.results,
          dataPage2: data.info.next,
        });
    });
  }
  componentWillUnmount() {
    const api = new serviceMorty();
    this._isMounted = false;
    api.getCharacter('https://rickandmortyapi.com/api/character?page=2').then((data) => {
      this._isMounted &&
        this.setState({
          data: data.results,
        });
    });
  }
  render() {
    return (
      <>
        <CardList
          datePage2={this.state.dataPage2}
          data={this.state.data}
          valueSerch={this.props.valueSerch}
        />
      </>
    );
  }
}
