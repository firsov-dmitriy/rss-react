import React, { Component } from 'react';
import CardPerson from './CardPerson';

import './form.css';
import Persona from './Persona';
import { dirtyType, personType, selectType } from './types';

interface FormState {
  errorValue: { data: string; name: string; secName: string };

  buttDisable: boolean;
  dirty: dirtyType;
  validation: boolean | undefined;
  onSubmit: boolean | undefined;
}

class Form extends Component<object, FormState> {
  nameRef: React.RefObject<HTMLInputElement>;
  secNameRef: React.RefObject<HTMLInputElement>;
  dateRef: React.RefObject<HTMLInputElement>;
  promRef: React.RefObject<HTMLInputElement>;
  imgRef: React.RefObject<HTMLInputElement> | undefined;
  person: personType;
  formRef: React.RefObject<HTMLFormElement>;
  select: [selectType, selectType, selectType];
  buttRef: React.RefObject<HTMLButtonElement>;
  checkedRef: React.RefObject<HTMLInputElement>;
  list: personType[];

  constructor(props: object) {
    super(props);
    this.state = {
      validation: false,
      errorValue: {
        data: 'date is empty or you are under 6  years',
        name: 'Name is empty',
        secName: 'Second name is empty',
      },

      buttDisable: true,
      dirty: {
        name: false,
        secName: false,
        date: false,
        processing: false,
      },
      onSubmit: false,
    };

    this.select = [
      { id: 1, city: 'Kuiv' },
      { id: 2, city: 'Kharkov' },
      { id: 3, city: 'Lviv' },
    ];

    this.checkedRef = React.createRef();
    this.nameRef = React.createRef();
    this.secNameRef = React.createRef();
    this.dateRef = React.createRef();
    this.promRef = React.createRef();
    this.imgRef = React.createRef();
    this.formRef = React.createRef();
    this.buttRef = React.createRef();

    this.person = {
      name: '',
      secName: '',
      date: '',
      prom: false,
      url: '',
      select: '',
      checked: false,
    };
    this.list = [];
  }

  onBlurSelect(eve: React.FocusEvent<HTMLSelectElement, Element>) {
    if (+eve.target.value != 0) {
      this.person.select = eve.target.value;
    } else {
      this.person.select = '';
    }
  }
  onSubmit(eve: React.FormEvent<HTMLFormElement>) {
    eve.preventDefault();

    this.setState({
      validation: true && this.person.checked,
      onSubmit: true,
    });

    this.formRef.current?.reset();
  }

  componentDidUpdate(prev: FormState) {
    if (this.state.onSubmit) {
      const person = new Persona(this.person);
      this.list.push(person);
      this.setState({
        onSubmit: false,
      });
    }
  }

  onBlur(eve: React.FocusEvent<HTMLInputElement, Element>) {
    const person = this.person;
    switch (eve.target.name) {
      case 'name':
        if (+eve.target.value.replace(/\s+/g, '') === 0) {
          this.setState({
            dirty: {
              name: true,
              secName: this.state.dirty.secName,
              date: this.state.dirty.date,
              processing: this.state.dirty.processing,
            },
          });
        } else {
          this.person.name = eve.target.value.replace(/\s+/g, '');

          this.setState({
            dirty: {
              name: false,
              secName: this.state.dirty.secName,
              date: this.state.dirty.date,
              processing: this.state.dirty.processing,
            },
          });
        }

        break;
      case 'secName':
        if (+eve.target.value.replace(/\s+/g, '') === 0) {
          this.setState({
            dirty: {
              name: this.state.dirty.name,
              secName: true,
              date: this.state.dirty.date,
              processing: this.state.dirty.processing,
            },
          });
        } else {
          this.person.secName = eve.target.value.replace(/\s+/g, '');
          this.setState({
            dirty: {
              name: this.state.dirty.name,
              secName: false,
              date: this.state.dirty.date,
              processing: this.state.dirty.processing,
            },
          });
        }
        break;
      case 'file':
        eve.preventDefault();

        if (window.FileReader) {
          const reader = new FileReader();
          const file = eve.target.files![0];
          if (file && file.type.match('image.*')) {
            reader.readAsDataURL(file);
            reader.onload = () => {
              this.person.url = reader.result?.toString();
            };
            if (reader.error) {
              console.error(reader.error);
            }
          }
        }

        break;

      case 'date':
        const dateNow = new Date();
        const date = eve.target.valueAsDate?.getFullYear()
          ? eve.target.valueAsDate.getFullYear()
          : 0;

        if (date !== 0 && date <= dateNow.getFullYear() - 6) {
          this.person.date = date.toString();
          this.setState({
            dirty: {
              name: this.state.dirty.name,
              secName: this.state.dirty.secName,
              date: false,
              processing: this.state.dirty.processing,
            },
          });
        } else {
          this.setState({
            dirty: {
              name: this.state.dirty.name,
              secName: this.state.dirty.secName,
              date: true,
              processing: this.state.dirty.processing,
            },
          });
        }
        break;
      case 'promo':
        this.person.prom = this.promRef.current?.checked;

        break;
      case 'processing':
        this.person.checked = this.checkedRef.current?.checked;

        break;

      default:
        break;
    }
    this.setState({
      buttDisable: !Boolean(
        person.name && person.secName && person.select && person.date && person.url
      ),
    });
  }

  render() {
    return (
      <>
        <form ref={this.formRef} onSubmit={(eve) => this.onSubmit(eve)}>
          <div className="container-input">
            <div className="mb-3 form__item">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              {this.state.dirty.name && this.state.errorValue.name && (
                <div style={{ color: 'red' }}>{this.state.errorValue.name}</div>
              )}
              <input
                name="name"
                onBlur={(eve) => this.onBlur(eve)}
                className="form-control form-name"
                ref={this.nameRef}
              />
              <div id="emailHelp" className="form-text"></div>
            </div>
            <div className="mb-3 form__item">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Second Name
              </label>
              {this.state.dirty.secName && this.state.errorValue && (
                <div style={{ color: 'red' }}>{this.state.errorValue.secName}</div>
              )}
              <input
                onBlur={(eve) => this.onBlur(eve)}
                type="text"
                name="secName"
                className="form-control form-second__name"
                ref={this.secNameRef}
              />
            </div>
          </div>
          <div className="mb-3 form__item">
            <label htmlFor="exampleInputEmail1" className="form-label">
              File
            </label>
            <input
              onBlur={(eve) => this.onBlur(eve)}
              type="file"
              name="file"
              className="form-control form-file"
              accept="image/*"
              ref={this.imgRef}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>

          <div className="mb-3 form__item">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of Birth
            </label>
            {this.state.dirty.date && this.state.errorValue.data && (
              <div style={{ color: 'red' }}>{this.state.errorValue.data}</div>
            )}
            <input
              type="date"
              onBlur={(eve) => this.onBlur(eve)}
              name="date"
              className="form-control form-date"
              ref={this.dateRef}
            />
            <div id="emailHelp" className="form-text"></div>
          </div>
          <select className="form-select" onBlur={(eve) => this.onBlurSelect(eve)}>
            <option value="0">Choose city</option>
            {this.select.map((sel) => (
              <option key={sel.id} value={sel.city}>
                {sel.city}
              </option>
            ))}
          </select>

          <div className="form-check form-switch">
            <input
              onBlur={(eve) => this.onBlur(eve)}
              name="promo"
              className="form-check-input form-prom"
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
              onBlur={(eve) => this.onBlur(eve)}
              ref={this.checkedRef}
              name="processing"
              className="form-check-input form-prossec"
              type="checkbox"
              value=""
              id="flexCheckIndeterminate"
            />
            <label className="form-check-label" htmlFor="flexCheckIndeterminate">
              Consent to data processing{' '}
            </label>
          </div>
          <button
            type="submit"
            ref={this.buttRef}
            disabled={this.state.buttDisable}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <h3>Card Person</h3>
        <section className="card_person">
          {this.state.validation &&
            this.list.map((person, id) => (
              <CardPerson
                key={id}
                name={person.name}
                secName={person.secName}
                DOB={person.date}
                city={person.select}
                url={person.url}
              />
            ))}
        </section>
      </>
    );
  }
}

export default Form;