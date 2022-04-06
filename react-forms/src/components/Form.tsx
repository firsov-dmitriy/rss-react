import React, { Component } from 'react';
import CardPerson from './CardPerson';
import './form.css';
interface FormState {
  correctValue: boolean;
  errorValue: object;
}
class Form extends Component<object, FormState> {
  nameRef: React.RefObject<HTMLInputElement>;
  secNameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  constructor(props: object) {
    super(props);
    this.state = {
      correctValue: false,

      errorValue: {
        date: 'Not correct date',
      },
    };
    this.nameRef = React.createRef();
    this.secNameRef = React.createRef();
    this.dateRef = React.createRef();
  }
  render() {
    const person = {
      name: this.nameRef.current?.value,
      secName: this.secNameRef.current,
      dob: this.dateRef.current,
    };
    setInterval(() => {
      console.log(person);
    }, 2000);
    const dob = Date();
    return (
      <>
        <form>
          <div className="container-input">
            <div className="mb-3 form__item">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" ref={this.nameRef} />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3 form__item">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Second Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputPassword1"
                ref={this.secNameRef}
              />
            </div>
          </div>

          <div className="mb-3 form__item">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth
            </label>
            <input type="date" className="form-control" ref={this.dateRef} />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
              Notice of promotions
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
              Consent to data processing{' '}
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="card_person">
          <CardPerson name="Dima" secName="Firsov" promotion={true} DOB={dob} dataProssc={true} />
        </div>
      </>
    );
  }
}

export default Form;
