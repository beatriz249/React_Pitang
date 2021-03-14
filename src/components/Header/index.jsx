import React from 'react';

// eslint-disable-next-line react/prop-types
export default function Header({ title, subtitle, children }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      <p>
        {' '}
        <b>Header Field</b>
      </p>
      {children}
    </div>
  );
}
