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
  const [photo, setPhoto] = useState('');
  const [filePhoto, setFilePhoto] = useState(null);

  useEffect(() => {
    setChangedStudent(student);
    setPhoto('');
    setFilePhoto(null);
    if (student.Photos && student.Photos.length > 0) {
      setPhoto(student.Photos[0].url);
    }
  }, [student]);

  const initialStudent = {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    height: '',
    weight: '',
    age: '',
    Photos: [],
  };

  const dispatch = useDispatch();

  const handleSave = async () => {
    try {
      dispatch(setLoading(true));
      let savedStudent;
      if (student.id) {
        const { data } = await axios.put(
          `/students/${student.id}`,
          changedStudent,
        );
        savedStudent = data;
        toast.success(
          `Student ${savedStudent.firstname} was edited successfully`,
        );
      } else {
        const { data } = await axios.post('/students', changedStudent);
        savedStudent = data;
        toast.success(
          `Student ${savedStudent.firstname} was created successfully`,
        );
        setChangedStudent(initialStudent);
      }

      if (filePhoto) {
        const formData = new FormData();
        formData.append('studentId', savedStudent.id);
        formData.append('photo', filePhoto);
        await axios.post('/photos', formData);
        setPhoto('');
      }

      if (student.id) {
        setShow(false);
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

  const handlePhoto = (e) => {
    const newPhoto = e.target.files[0];
    const photoUrl = URL.createObjectURL(newPhoto);
    setPhoto(photoUrl);
    setFilePhoto(newPhoto);
  };

  return (
    <ModalContainer show={show}>
      <StudentContainer>
        <header>{student.id ? 'Edit Student' : 'New Student'}</header>

        <ProfilePicture>
          {photo ? (
            <img src={photo} alt={student.firstname} />
          ) : (
            <FaUserCircle size={180} />
          )}
          <label htmlFor="photo">
            <input
              id="photo"
              type="file"
              accept="image/jpeg, image/jpg, image/png, image/git"
              onChange={handlePhoto}
            />
            <FaEdit size={18} />
          </label>
        </ProfilePicture>

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
