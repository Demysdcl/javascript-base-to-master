import axios from '@/services/axios';
import { setLoading } from '@/store/modules/loading/actions';
import { Container } from '@/styles/GlobalStyle';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProfilePicture, StudentContainer } from './styled';

export default function Students() {
  const [students, setStudents] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getStudents() {
      dispatch(setLoading(true));
      const studentsRequest = await axios.get('/students');
      setStudents(studentsRequest.data);
      dispatch(setLoading(false));
    }
    getStudents();
  }, []);

  return (
    <Container>
      <h1>Students</h1>

      <StudentContainer>
        {students.map((student) => (
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
              <FaWindowClose size={16} onClick={() => alert('excluir')} />
            </div>
          </ProfilePicture>
        ))}
      </StudentContainer>
    </Container>
  );
}
