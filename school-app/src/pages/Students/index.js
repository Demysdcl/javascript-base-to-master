import axios from '@/services/axios';
import { Container } from '@/styles/GlobalStyle';
import React, { useEffect, useState } from 'react';
import { FaEdit, FaUserCircle, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ProfilePicture, StudentContainer } from './styled';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function getStudents() {
      const studentsRequest = await axios.get('/students');
      setStudents(studentsRequest.data);
    }
    getStudents();
  }, []);

  return (
    <Container>
      <h1>Students</h1>

      <StudentContainer>
        {students.map((student) => (
          <ProfilePicture>
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