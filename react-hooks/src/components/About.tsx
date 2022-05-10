import React, { FC, useContext, useState } from 'react';

type AboutState = {
  name: string;
  surName: string;
  age: number;
};

const About: FC = () => {
  const [person, setPerson] = useState<AboutState>({ name: 'Dmitriy', surName: 'Firsov', age: 23 });

  return (
    <div className="about">
      <h1 className="about_title">
        Hello me name is {person.name}
        {person.surName}
      </h1>
      <p className="about_text"> I am make this app</p>
    </div>
  );
};
export default About;
