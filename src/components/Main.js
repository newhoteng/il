import React from 'react';

function MainPage() {
  const PageStyle = {
    height: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#aeadad',
  };
  return (
    <main style={PageStyle}>This is the homepage</main>
  );
}

export default MainPage;
