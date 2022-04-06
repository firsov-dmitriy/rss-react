import React, { Component } from 'react';
interface CardProps {
  name?: string;
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

  render() {
    return (
      <div className="card mt-3" style={{ width: '33%' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfe2gRmY2DDfOeZm5LXgrLZqy5V0eXqrscYA&usqp=CAU"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">Титульник</h5>
          <p className="card-text">Описание</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Имя автора</li>
          <li className="list-group-item">Дата создания</li>
          <li className="list-group-item">Дата публикации</li>
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
