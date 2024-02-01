'use client';
import React from 'react';

function Censored({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);
  // const handleClick = (e) => {
  //   e.preventDefault();
  //   setIsCensored(!isCensored);
  // };

  return (
    <button
      onClick={() => setIsCensored(!isCensored)}
      className={isCensored ? 'censored' : ''}
    >
      {children}
    </button>
  );
}

export default Censored;
