import React from 'react';
import { useSelector } from 'react-redux';
import ModalContainer from '../ModalContainer';

export default function Loader() {
  const isLoading = useSelector((state) => state.loading);

  return (
    <>
      <ModalContainer show={isLoading} zIndex={10}>
        <span>Loading...</span>
      </ModalContainer>
    </>
  );
}
