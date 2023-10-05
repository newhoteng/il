import React from 'react';

function HomePage() {
  const PageStyle = {
    height: 'calc(100vh - 60px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '3rem',
    color: '#aeadad',
    textAlign: 'center',
  };
  return (
    <main style={PageStyle}>
      <h5>This is the home page</h5>
    </main>
  );
}

export default HomePage;
