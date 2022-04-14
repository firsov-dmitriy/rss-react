import React, { Component } from 'react';
import { dataChatacters } from '../types';
import './modal.css';
interface ModalProps extends dataChatacters {
  modalTriger: boolean;
  getCloseEvent: (eve: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onShow: boolean;
}
interface ModalState {
  modalTriger: boolean;
}
export default class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
  }
  componentDidUpdate(prev: ModalProps) {
    if (this.props.onShow) {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '25px';
    } else {
      document.body.style.overflow = '';
      document.body.style.marginRight = '';
    }
  }
  render() {
    return (
      <div
        style={this.props.onShow ? { display: 'block' } : { display: 'none' }}
        className="modal "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                About
              </h5>
              <button
                onClick={(eve) => this.props.getCloseEvent(eve)}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">
              <img src={this.props.image} alt={this.props.name} />
              <h1>Name: {this.props.name}</h1>
              <p>Gender: {this.props.gender}</p>
              <p>Status: {this.props.status}</p>
              {/* <p>Episode: {this.props.episode}</p> */}
              <p>Type: {this.props.type}</p>
              <p>Species: {this.props.species}</p>
              <p>location: {this.props.location?.name}</p>
              <p>origin: {this.props.origin?.name}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(eve) => this.props.getCloseEvent(eve)}
                data-bs-dismiss="modal"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
