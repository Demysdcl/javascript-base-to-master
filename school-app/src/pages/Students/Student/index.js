/* eslint-disable jsx-a11y/label-has-associated-control */
import ModalContainer from '@/components/ModalContainer';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { StudentContainer } from '../styled';

export default function Student({ student, show }) {
  const [changedStudent, setChangedStudent] = useState(student);

  const handleChange = (attrib, value) => {
    const newStudent = { ...changedStudent };
    newStudent[attrib] = value;
    setChangedStudent(newStudent);
  };

  return (
    <ModalContainer show={show}>
      <StudentContainer>
        <header>New Student</header>
        <body>
          <label>
            Firstname:
            <input
              type="text"
              value={student.firstname}
              onChange={(e) => handleChange('firstname', e.target.value)}
            />
          </label>
          <label>
            Lastname:
            <input
              type="text"
              value={student.lastname}
              onChange={(e) => handleChange('lastname', e.target.value)}
            />
          </label>
          <label>
            Age:
            <input
              type="text"
              value={student.age}
              onChange={(e) => handleChange('age', e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={student.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={student.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={student.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
          <label>
            Name:
            <input
              type="text"
              value={student.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </label>
        </body>
      </StudentContainer>
    </ModalContainer>
  );
}

Student.defaultProps = {
  student: {
    firstname: '',
    lastname: '',
    email: '',
    height: 0,
    weight: 0,
    age: 0,
  },
};

Student.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  student: PropTypes.object,
  show: PropTypes.bool.isRequired,
};
