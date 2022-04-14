import React, { Component } from 'react';
import serviceMorty from '../service/service';
import CardList from './CardList/CardList';
import Modal from './Modal/Modal';
import { dataChatacters } from './types';
interface MainPageState {
  data: dataChatacters[];
  modalTriger: boolean;
  idCharacters: number | null | string;
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
      idCharacters: 0,
    };
    this._isMounted = false;
    this.api = new serviceMorty();
    this.onShowModalCard = this.onShowModalCard.bind(this);
    this.getCloseEvent = this.getCloseEvent.bind(this);
    this.unpackingCharacters = this.unpackingCharacters.bind(this);
    this.getIdCard = this.getIdCard.bind(this);
  }
  getCharacter(valueSerch: string) {
    this.api.getCharacter(valueSerch).then((data) => {
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
    this.state.modalTriger;
  }
  componentDidMount() {
    this._isMounted = true;

    this._isMounted &&
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
  getCloseEvent(eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    this.setState({
      modalTriger: false,
    });
  }
  getIdCard(eve: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    this.setState({
      idCharacters: eve.currentTarget.getAttribute('data-id'),
    });
  }
  unpackingCharacters(id: number | string) {
    return this.state.data[+id];
  }

  componentWillUnmount() {
    this._isMounted = false;

    this._isMounted &&
      this.api.getDataCharacters(`https://rickandmortyapi.com/api/character`).then((data) => {
        this._isMounted &&
          this.setState({
            data: data.results,
          });
      });

    this._isMounted = false;
  }
  render() {
    const char = this.unpackingCharacters(this.state.idCharacters + '');

    return (
      <>
        <CardList
          getIdCard={this.getIdCard}
          onShowModalCard={(eve) => this.onShowModalCard(eve)}
          data={this.state.data}
          valueSerch={this.props.valueSerch}
        />
        {this.state.modalTriger && (
          <Modal
            name={char.name}
            status={char.status}
            image={char.image}
            gender={char.gender}
            species={char.species}
            location={char.location}
            episode={char.episode}
            origin={char.origin}
            type={char.type}
            modalTriger={this.state.modalTriger}
            getCloseEvent={this.getCloseEvent}
            onShow={this.state.modalTriger}
          />
        )}
      </>
    );
  }
}
