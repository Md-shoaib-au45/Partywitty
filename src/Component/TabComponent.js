import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box sx={{ p: 3 }}>
        <Typography>{children}</Typography>
      </Box>
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function CombinedTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="menu" {...a11yProps(0)} />
          <Tab label="offer" {...a11yProps(1)} />
          <Tab label="event" {...a11yProps(2)} />
          <Tab label="review" {...a11yProps(3)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
      <div>
            <h2>Offers</h2>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
          </div>        <h2>Menu Content</h2>
        {/* Add your Menu content here */}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
      <div>
            <h2>Offers</h2>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
          </div>        <h2>Offer Content</h2>
        {/* Add your Offer content here */}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
      <div>
            <h2>Offers</h2>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
          </div>        <h2>Event Content</h2>
        {/* Add your Event content here */}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        {/* Review Content */}
        <h2>Review Content</h2>
        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
          {/* First card with star rating */}
          <div className="review-card">
            <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        {/* Second card with people icon, comment, and name */}
        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
          <div className="review-card">
            <div>
              <img src="people-icon.png" alt="People Icon" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            </div>
            <div>
              <p>John Doe</p>
              <p>Great experience! Will come again.</p>
            </div>
          </div>
        </div>

        {/* Write review button */}
        <button style={{ marginBottom: '15px' }}>Write a Review</button>

        {/* Third card with ratings for various aspects */}
        <div className="review-card">
          <p>Food: ⭐⭐⭐⭐</p>
          <p>Ambience: ⭐⭐⭐⭐⭐</p>
          <p>Hygiene: ⭐⭐⭐⭐⭐</p>
          <p>Pricing: ⭐⭐⭐⭐</p>
          <p>Service: ⭐⭐⭐⭐⭐</p>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
