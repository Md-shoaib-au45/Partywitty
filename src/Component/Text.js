import React from 'react';

const Text = () => {
  const containerStyle = {
    textAlign: 'center',
    marginTop: '50px',
  };

  const h1Style = {
    fontSize: '2em',
    marginBottom: '10px',
  };

  const h2Style = {
    fontSize: '1.5em',
    marginBottom: '10px',
  };

  const h3Style = {
    fontSize: '1.2em',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px',
    margin: '5px',
    fontSize: '1em',
  };

  return (
    <div style={containerStyle}>
      <h1 style={h1Style}>Load the Drinks</h1>
      <h2 style={h2Style}>Location: Rajouri Garden Main Market</h2>
      <h3 style={h3Style}>Timings: [Your Timings]</h3>
      <button style={buttonStyle}>Get direction</button>
      <button style={buttonStyle}>Add favorite</button>
      <button style={buttonStyle}>Share</button>
    </div>
  );
};

export default Text;
