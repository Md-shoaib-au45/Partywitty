import React from 'react';

const Card = ({ title, stars, text, imageUrl }) => {
  return (
    <div style={{ width: '300px', height: '350px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
      <img src={imageUrl} alt={`Image for ${title}`} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      <h2 style={{ textAlign: 'center', margin: '10px 0' }}>{title}</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
        {Array.from({ length: stars }).map((_, index) => (
          <span key={index} role="img" aria-label="star" style={{ fontSize: '24px', color: 'gold' }}>
            ⭐
          </span>
        ))}
      </div>
      <p style={{ textAlign: 'center', margin: '0 10px' }}>{text}</p>
    </div>
  );
};

const FourCards = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Card
        title="Card 1"
        stars={4}
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        imageUrl="https://placekitten.com/300/180"
      />
      <Card
        title="Card 2"
        stars={3}
        text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageUrl="https://placekitten.com/300/180"
      />
      <Card
        title="Card 3"
        stars={5}
        text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
        imageUrl="https://placekitten.com/300/180"
      />
      <Card
        title="Card 4"
        stars={4}
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageUrl="https://placekitten.com/300/180"
      />
        <Card
        title="Card 4"
        stars={4}
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageUrl="https://placekitten.com/300/180"
      />
        <Card
        title="Card 4"
        stars={4}
        text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        imageUrl="https://placekitten.com/300/180"
      />
    </div>
  );
};

export default FourCards;
