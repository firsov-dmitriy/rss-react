import React, { Component } from 'react';
import { dataChatacters } from '../types';
import './modal.css';
interface ModalProps extends dataChatacters {
  modalTriger: boolean;
  getCloseEvent: () => void;
  onShow: boolean;
}
interface ModalState {
  modalTriger: boolean;
}
export default class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
  }

  render() {
    return (
      <div
        onClick={(e) => e.currentTarget === e.target && this.props.getCloseEvent()}
        style={this.props.onShow ? { display: 'block' } : { display: 'none' }}
        className="modal modal-info"
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
                About {this.props.name}
              </h5>
              <button
                onClick={(eve) => this.props.getCloseEvent()}
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body" style={{ display: 'flex', justifyContent: 'space-around' }}>
              <img className="modal-body_image" src={this.props.image} alt={this.props.name} />
              <div className="info">
                <p>Gender: {this.props.gender}</p>
                <p>Status: {this.props.status}</p>
                <p>Type: {this.props.type}</p>
                <p>Species: {this.props.species}</p>
                <p>location: {this.props.location?.name}</p>
                <p>Origin: {this.props.origin?.name}</p>
              </div>

              {/* <p>Episode: {this.props.episode}</p> */}
              <div className="info"></div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(eve) => this.props.getCloseEvent()}
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
