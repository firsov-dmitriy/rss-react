import React, { Component } from 'react';
interface CardPersonProps {
  name: string | undefined;
  secName: string | undefined;
  DOB: string | undefined;
  promotion?: boolean;
  url?: string;
  city: string | undefined;
}
interface CardPersonState {
  cardLike: number;
}
export default class CardPerson extends Component<CardPersonProps, CardPersonState> {
  constructor(props: CardPersonProps) {
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

  render() {
    return (
      <div className="card mt-3" style={{ width: '33%' }}>
        <img src={this.props.url} className="card-img-top" style={{ height: '200px' }} />
        <div className="card-body">
          <h5 className="card-title">
            My name: {this.props.name} {this.props.secName}
          </h5>
          <p className="card-text"> I am from: {this.props.city}</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">year of birth {this.props.DOB}</li>
        </ul>
        <div className="card-doby">
          <div className="btn-group" role="group" aria-label="Basic mixed styles example">
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
              className="btn btn-danger"
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
            <h4> Like: {this.state.cardLike}</h4>
          </div>
        </div>
      </div>
    );
  }
}
