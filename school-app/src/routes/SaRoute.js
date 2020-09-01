import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function SaRoute({ component: Component, isClosed, ...props }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { prevPath: props.location.pathname },
        }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...props} component={Component} />;
}

SaRoute.defaultProps = {
  isClosed: false,
};

SaRoute.propTypes = {
  component: PropTypes.oneOfType(PropTypes.element, PropTypes.func).isRequired,
  isClosed: PropTypes.bool,
};
