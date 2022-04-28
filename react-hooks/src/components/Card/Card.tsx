import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { dataChatacters } from '../../types/types';
import './card.css';
interface CardProps extends dataChatacters {
  dataId: number;
  // onShowModalCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  getIdCard: (eve: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

interface CardState {
  cardLike: number;
}
export default class Card extends Component<CardProps, CardState> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      cardLike: 0,
    };
  }

  likeAdd = () => {
    this.setState({
      cardLike: this.state.cardLike + 1,
    });
  };
  openCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  render() {
    return (
      <div
        data-id={this.props.dataId}
        className="card mt-3"
        onClick={(e) => {
          this.openCard(e);
        }}
      >
        <div
        // onClick={($event) => {
        //   this.props.onShowModalCard($event);
        // }}
        >
          <Link to={`/card/${this.props.dataId}`}>
            <img src={this.props.image} className="card-img-top" />
          </Link>

          <div className="card-body">
            <h5 className="card-title">{this.props.name}</h5>
            <p className="card-text">{this.props.status}</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"></li>
            <li className="list-group-item">Дата публикации</li>
          </ul>
        </div>
        <div className="card-doby"></div>

        <div
          style={{ width: '75%' }}
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn  "
            onClick={() => {
              this.setState({
                cardLike: this.state.cardLike + 1,
              });
            }}
          >
            <span>
              <img
                src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-like-notifications-justicon-lineal-color-justicon.png"
                alt="like"
                style={{ width: '30px' }}
              />
            </span>
          </button>
          <button
            type="button"
            className="btn "
            onClick={() => {
              this.setState({
                cardLike: this.state.cardLike - 1,
              });
            }}
          >
            <span>
              <img
                src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/000000/external-dislike-feedback-those-icons-lineal-color-those-icons.png"
                alt="dislike"
                style={{ width: '30px' }}
              />
            </span>
          </button>
        </div>
        <h4 className="card-like  "> Like: {this.state.cardLike}</h4>
      </div>
    );
  }
}
// function onShowModalCard(eve: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
//   throw new Error('Function not implemented.');
// }
