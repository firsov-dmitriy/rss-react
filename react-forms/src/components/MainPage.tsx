import React, { Component } from 'react';
import serviceMorty from '../service/service';
import CardList from './CardList/CardList';
import Modal from './Modal/Modal';
import { dataChatacters } from './types';
interface MainPageState {
  data: dataChatacters[];
  modalTriger: boolean;
}
interface MainPageProps {
  valueSerch: string;
  submit: boolean;
}

export default class MainPage extends Component<MainPageProps, MainPageState> {
  _isMounted: boolean;
  api: serviceMorty;
  constructor(props: MainPageProps) {
    super(props);
    this.state = {
      data: [],
      modalTriger: false,
    };
    this._isMounted = false;
    this.api = new serviceMorty();
    this.onShowModalCard = this.onShowModalCard.bind(this);
  }
  getCharacter(valueSerch: string) {
    this.api.getCharacter(valueSerch).then((data) => {
      console.log(data);

      this.setState({
        data: data.results,
      });
    });
  }
  componentDidUpdate(prev: MainPageProps) {
    if (this.props.submit !== prev.submit) {
      this.getCharacter(this.props.valueSerch);
    }
  }
  onShowModalCard(eve: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({
      modalTriger: true,
    });
  }
  componentDidMount() {
    this._isMounted = true;

    this.api.getDataCharacters(`https://rickandmortyapi.com/api/character`).then((data) => {
      this._isMounted &&
        this.setState({
          data: data.results,
        });
    });
  }
  showModal(modalTriger: boolean) {
    if (modalTriger) {
    }
  }

  componentWillUnmount() {
    console.log('mount');
    this._isMounted = false;
    this.api.getDataCharacters(`https://rickandmortyapi.com/api/character`).then((data) => {
      this._isMounted &&
        this.setState({
          data: data.results,
        });
    });
    this.setState({});
  }
  render() {
    this.props.submit;
    return (
      <>
        <CardList
          onShowModalCard={this.onShowModalCard}
          data={this.state.data}
          valueSerch={this.props.valueSerch}
        />
        <Modal modalTriger={this.state.modalTriger} />
      </>
    );
  }
}
