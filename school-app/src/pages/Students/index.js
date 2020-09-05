import ConfirmDialog from '@/components/ConfirmDialog';
import axios from '@/services/axios';
import { setLoading } from '@/store/modules/loading/actions';
import { Container } from '@/styles/GlobalStyle';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import Student from './Student';
import { NewStudent, ProfilePicture, StudentContainer, Title } from './styled';

export default function Students() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);
  const [index, setIndex] = useState(-1);
  const [showDialog, setShowDialog] = useState(false);

  const newStudent = {
    id: null,
    firstname: '',
    lastname: '',
    email: '',
    height: 0,
    weight: 0,
    age: 0,
  };

  const [editStudent, setEditStudent] = useState(newStudent);

  const handleEdit = (student) => {
    setEditStudent(student);
    setShowDialog(true);
  };

  const handleCreate = () => {
    setEditStudent(newStudent);
    setShowDialog(true);
  };

  async function getStudents() {
    try {
      dispatch(setLoading(true));
      const studentsRequest = await axios.get('/students');
      setStudents(studentsRequest.data);
      dispatch(setLoading(false));
    } catch (error) {
      toast.error(error.message);
      dispatch(setLoading(false));
    }
  }

  useEffect(() => {
    if (!showDialog) {
      getStudents();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showDialog]);

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirmation = (studentId, idx) => {
    setId(studentId);
    setIndex(idx);
    setShow(true);
  };

  const handleDelete = async () => {
    try {
      setShow(false);
      dispatch(setLoading(true));
      await axios.delete(`/students/${id}`);
      const updatedList = students;
      updatedList.splice(index, 1);
      setStudents([...updatedList]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setShow(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <ConfirmDialog
        show={show}
        message="Do you really want to delete this student?"
        yesFunction={() => handleDelete()}
        noFunction={() => {
          setShow(false);
        }}
      />

      <Student
        show={showDialog}
        setShow={setShowDialog}
        student={editStudent}
      />

      {isLoggedIn && (
        <Title>
          Students
          <NewStudent onClick={() => handleCreate()}>
            <strong>+</strong>
          </NewStudent>
        </Title>
      )}

      <StudentContainer>
        {students.map((student, idx) => (
          <ProfilePicture key={student.id}>
            {student.Photos.length ? (
              <img alt={student.firstname} src={student.Photos[0].url} />
            ) : (
              <FaUserCircle size={36} />
            )}
            <span>{student.firstname}</span>
            <span>{student.email}</span>
            {isLoggedIn && (
              <div>
                <FaEdit size={16} onClick={() => handleEdit(student)} />

                <FaWindowClose
                  size={16}
                  onClick={() => handleConfirmation(student.id, idx)}
                />
              </div>
            )}
          </ProfilePicture>
        ))}
      </StudentContainer>
    </Container>
  );
}
