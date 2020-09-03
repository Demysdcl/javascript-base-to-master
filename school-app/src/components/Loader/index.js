import React from 'react';
import { useSelector } from 'react-redux';
import { Container } from './styled';

export default function Loader() {
  const isLoading = useSelector((state) => state.loading);

  if (!isLoading) return <></>;

  return (
    <>
      <Container>
        <div>
          <span>Loading...</span>
        </div>
      </Container>
    </>
  );
}
