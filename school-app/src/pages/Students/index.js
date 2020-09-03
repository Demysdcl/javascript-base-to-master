import axios from '@/services/axios';
import { setLoading } from '@/store/modules/loading/actions';
import { Container } from '@/styles/GlobalStyle';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfilePicture, StudentContainer } from './styled';

export default function Students() {
  const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
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
    getStudents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (id, index) => {
    try {
      dispatch(setLoading(true));
      await axios.delete(`/students/${id}`);
      const updatedList = students;
      updatedList.splice(index, 1);

      setStudents([...updatedList]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <Container>
      <h1>Students</h1>

      <StudentContainer>
        {students.map((student, index) => (
          <ProfilePicture key={student.id}>
            {student.Photos.length ? (
              <img alt={student.firstname} src={student.Photos[0].url} />
            ) : (
              <FaUserCircle size={36} />
            )}
            <span>{student.firstname}</span>
            <span>{student.email}</span>
            <div>
              <Link to={`/student/${student.id}/edit`}>
                <FaEdit size={16} />
              </Link>
              <FaWindowClose
                size={16}
                onClick={() => handleDelete(student.id, index)}
              />
            </div>
          </ProfilePicture>
        ))}
      </StudentContainer>
    </Container>
  );
}
