import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import CardPerson from './CardPerson';
import ErrorForm from './ErrorForm';
import { personType } from './types';

const FormNow = () => {
  const [dataPerson, setDataPerson] = useState<personType[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm<personType>({ mode: 'onBlur' });
  const onSubmit = (data: personType) => {
    const imgRef = data.image[0];
    const reader = new FileReader();
    reader.readAsDataURL(imgRef);

    reader.onload = () => {
      setDataPerson((prev: personType[]) => [...prev, { ...data, url: reader.result?.toString() }]);
      reset();
    };
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container-input">
          <div className="mb-3 form__item">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>

            <input
              {...register('name', { required: 'Name shold be longer 2 ', minLength: 2 })}
              className="form-control form-name"
            />
            {errors?.name && <ErrorForm>{errors?.name?.message}</ErrorForm>}
            <div id="emailHelp" className="form-text"></div>
          </div>
          <div className="mb-3 form__item">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Second Name
            </label>

            <input
              {...register('secName', { required: 'Second name shold be longer 2', minLength: 2 })}
              className="form-control form-second__name"
            />
            {errors?.secName && <ErrorForm>{errors?.secName?.message}</ErrorForm>}
          </div>
        </div>
        <div className="mb-3 form__item">
          <label htmlFor="exampleInputEmail1" className="form-label">
            File
          </label>
          <input
            type="file"
            {...register('image', { required: 'You shold downdload image' })}
            className="form-control form-file"
            accept="image/*"
          />
          {errors?.image && <ErrorForm>{errors?.image?.message}</ErrorForm>}
          <div id="emailHelp" className="form-text"></div>
        </div>

        <div className="mb-3 form__item">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Date of Birth
          </label>

          <input
            type="date"
            {...register('date', { required: 'Please tell me your date of birth' })}
            name="date"
            className="form-control form-date"
          />
          {errors?.date && <ErrorForm>{errors?.date?.message}</ErrorForm>}

          <div id="emailHelp" className="form-text"></div>
        </div>
        <label htmlFor="city" className="form_label">
          Plese select city
        </label>
        <select {...register('select')} className="form-select">
          <option value="0">Choose city</option>
          <option value="Kiev">Kiev</option>
          <option value="Kharkiv">Kharkiv</option>
          <option value="Lviv">Lviv</option>
        </select>

        <div className="form-check form-switch">
          <input
            {...register('promo')}
            className="form-check-input form-prom"
            type="checkbox"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Notice of promotions
          </label>
        </div>
        <div className="form-check">
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Consent to data processing{' '}
          </label>
          <input
            {...register('checked', { required: true })}
            className="form-check-input form-prossec"
            type="checkbox"
            id="flexCheckIndeterminate"
          />
          {errors?.checked && <ErrorForm>{errors?.checked?.message}</ErrorForm>}
        </div>
        <button type="submit" disabled={!isDirty || !isValid} className="btn btn-primary">
          Submit
        </button>
      </form>
      <h3>Card Person</h3>
      <section className="card_person d-flex">
        {dataPerson.map((person, id) => (
          <CardPerson
            key={id}
            name={person.name}
            secName={person.secName}
            DOB={person.date}
            city={person.select}
            url={person.url}
          ></CardPerson>
        ))}
      </section>
    </>
  );
};

export default FormNow;
