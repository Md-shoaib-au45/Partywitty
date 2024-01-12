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
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
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
        {/* Menu Content */}
        <h2>Menu Content</h2>
        <div className="event-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>Event 1</p>
            </div>
            <div className="event-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>Event 2</p>
            </div>
            <div className="event-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>Event 3</p>
            </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/* Offer Content */}
        <h2>Offer Content</h2>
        <div className="event-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>Event 1</p>
            </div>
            <div className="event-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>Event 2</p>
            </div>      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {/* Event Content */}
        <h2>Event Content</h2>
        {/* Add your Event content here */}
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        {/* Review Content */}
        <h2>Review Content</h2>
        {/* Add your Review content here */}
      </CustomTabPanel>
    </Box>
  );
}
