import React, { Component } from 'react';
import './modal.css';
interface ModalProps {
  modalTriger: boolean;
}
interface ModalState {
  modalTriger: boolean;
}
export default class Modal extends Component<ModalProps, ModalState> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      modalTriger: false,
    };
  }
  showModal() {
    this.setState({
      modalTriger: true,
    });
    const modal = document.querySelector('.modal');
    modal?.classList.add('show');
  }

  closeModal(eve: React.MouseEvent<HTMLButtonElement>) {
    this.setState({
      modalTriger: false,
    });
    const modal = document.querySelector('.modal');
    modal?.classList.remove('show');
  }

  render() {
    console.log(this.state.modalTriger, this.props.modalTriger);
    const active = this.props.modalTriger;
    return (
      <div
        style={active ? { display: 'block' } : { display: 'none' }}
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
                Заголовок модального окна
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Закрыть"
              ></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(eve) => this.closeModal(eve)}
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
