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
      The home page is under construction.
      <br />
      Check out the product page.
    </main>
  );
}

export default HomePage;
