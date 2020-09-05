/* eslint-disable jsx-a11y/label-has-associated-control */
import LabelInput from '@/components/LabelInput';
import ModalContainer from '@/components/ModalContainer';
import axios from '@/services/axios';
import { setLoading } from '@/store/modules/loading/actions';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { ProfilePicture, StudentContainer } from './styled';

export default function Student({ student, show, setShow }) {
  const [changedStudent, setChangedStudent] = useState(student);

  useEffect(() => {
    setChangedStudent(student);
  }, [student]);

  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      dispatch(setLoading(true));

      if (student.id) {
        const { data } = await axios.put(
          `/students/${student.id}`,
          changedStudent,
        );
        toast.success(`Student ${data.firstname} was edited successfully`);
      } else {
        const { data } = await axios.post('/students', changedStudent);
        toast.success(`Student ${data.firstname} was created successfully`);
      }
    } catch (error) {
      const errors = get(error, 'response.data.errors', [error.message]);
      errors.forEach((item) => {
        toast.error(item);
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <ModalContainer show={show}>
      <StudentContainer>
        <header>{student.id ? 'Edit Student' : 'New Student'}</header>

        {student.id && (
          <ProfilePicture>
            {student.Photos.length ? (
              <img src={student.Photos[0].url} alt={student.firstname} />
            ) : (
              <FaUserCircle size={180} />
            )}
            <span>
              <FaEdit size={18} />
            </span>
          </ProfilePicture>
        )}

        <section className="body-student">
          <LabelInput
            placeholder="First name"
            value={changedStudent}
            setValue={setChangedStudent}
            field="firstname"
          />
          <LabelInput
            placeholder="Last name"
            value={changedStudent}
            setValue={setChangedStudent}
            field="lastname"
          />
          <LabelInput
            placeholder="E-mail"
            value={changedStudent}
            setValue={setChangedStudent}
            field="email"
            type="email"
          />
          <LabelInput
            placeholder="Age"
            value={changedStudent}
            setValue={setChangedStudent}
            field="age"
            type="number"
          />
          <LabelInput
            placeholder="Height"
            value={changedStudent}
            setValue={setChangedStudent}
            field="height"
            type="number"
          />
          <LabelInput
            placeholder="Weight"
            value={changedStudent}
            setValue={setChangedStudent}
            field="weight"
            type="number"
          />
        </section>
        <footer>
          <button type="button" onClick={() => setShow(!show)}>
            Close
          </button>
          <button type="button" onClick={() => handleSave()}>
            Save
          </button>
        </footer>
      </StudentContainer>
    </ModalContainer>
  );
}

Student.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  student: PropTypes.object.isRequired,
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
};
