import { stat } from 'fs';
import React, { Component } from 'react';
import CardPerson from './CardPerson';
import './form.css';
interface FormState {
  correctValue: boolean;
  errorValue: { data: string };
  file: string | File;
  imagePrevieUrl: string | ArrayBuffer | null;
  buttDisable: boolean;
}
interface personType {
  name: string | undefined;
  secName: string | undefined;
  date: string | undefined;
  prom: boolean | undefined;
  url: string | undefined;
}
class Form extends Component<object, FormState> {
  nameRef: React.RefObject<HTMLInputElement>;
  secNameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  promRef: React.RefObject<HTMLInputElement>;
  imgRef: React.RefObject<HTMLInputElement> | undefined;
  fileUrl: string | undefined;

  constructor(props: object) {
    super(props);
    this.state = {
      correctValue: false,

      errorValue: {
        data: 'Error date',
      },
      file: '',
      imagePrevieUrl: '',
      buttDisable: false,
    };
    this.nameRef = React.createRef();
    this.secNameRef = React.createRef();
    this.dateRef = React.createRef();
    this.promRef = React.createRef();
    this.imgRef = React.createRef();
    this.fileUrl = '';
  }
  chekedDate(dateref: React.RefObject<HTMLInputElement>) {
    const date = Date.parse(dateref.current?.value ? dateref.current.value : '');
    const dateNow = new Date().toString();
    console.log(date >= +dateNow);

    if (date >= +dateNow) {
      console.log(date >= +dateNow);

      return <h1>{this.state.errorValue.data}</h1>;
    } else {
      return <h1>OK</h1>;
    }
  }

  chekedCorrect(date: string | undefined) {
    let res = 1;
    const nowDate = new Date();
    const dateCheck = Date.parse(date ? date : 'Error');
    if (!dateCheck || nowDate.getFullYear() >= +new Date(+dateCheck)) {
      console.log(this.state.errorValue.data);
    } else {
      res *= 1;
    }
    console.log(res);
  }
  _handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }
  handlerCreatCardPerson(perosn: personType) {
    this.chekedCorrect(perosn.date);
    return perosn;
  }
  _handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files![0];
    let result;
    reader.onloadend = () => {
      this.fileUrl = reader.result?.toString();
    };

    reader.readAsDataURL(file);
  }

  createPerson = (
    name: React.RefObject<HTMLInputElement>,
    secName: React.RefObject<HTMLInputElement>,
    date: React.RefObject<HTMLInputElement>,
    prom: React.RefObject<HTMLInputElement>,
    img: string | undefined
  ) => {
    const person = {
      name: name.current?.value,
      secName: secName.current?.value,
      date: date.current?.value,
      prom: prom.current?.checked,
      url: img,
    };
    return person;
  };

  render() {
    const name = this.nameRef;
    const secName = this.secNameRef;
    const date = this.dateRef;
    const prom = this.promRef;
    const img = this.imgRef;
    const url = this.fileUrl;

    setInterval(() => {
      return console.log(
        this.handlerCreatCardPerson(this.createPerson(name, secName, date, prom, url))
      );
    }, 2000);

    return (
      <>
        <form
          onSubmit={(e) => {
            this._handleSubmit(e);
          }}
        >
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
              File
            </label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={(e) => this._handleImageChange(e)}
              ref={this.imgRef}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3 form__item">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth
            </label>
            {this.chekedDate(date)}
            <input type="date" className="form-control" ref={this.dateRef} />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown link
            </a>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckDefault"
              ref={this.promRef}
            />
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
          <button type="submit" disabled={!this.state.buttDisable} className="btn btn-primary">
            Submit
          </button>
        </form>
        <div className="card_person">
          <CardPerson
            name="Dima"
            secName="Firsov"
            promotion={true}
            DOB={Date.now().toString()}
            dataProssc={true}
          />
        </div>
      </>
    );
  }
}

export default Form;
