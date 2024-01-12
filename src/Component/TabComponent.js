import React, { useState } from 'react';
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

function ReservationCard() {
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedPeople, setSelectedPeople] = useState('');
  const [kidsOption, setKidsOption] = useState('');

  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handlePeopleChange = (people) => {
    setSelectedPeople(people);
  };

  const handleKidsOptionChange = (option) => {
    setKidsOption(option);
  };

  return (
    <div style={{ width: '400px', height: '500px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
      <h2>Reserve Your Table</h2>

      <div>
        <p>What day:</p>
        <div>
          <label>
            <input type="checkbox" onChange={() => handleDayChange('today')} checked={selectedDay === 'today'} />
            Today
          </label>
          <label>
            <input type="checkbox" onChange={() => handleDayChange('tomorrow')} checked={selectedDay === 'tomorrow'} />
            Tomorrow
          </label>
          <label>
            <input type="checkbox" onChange={() => handleDayChange('saturday')} checked={selectedDay === 'saturday'} />
            Saturday
          </label>
        </div>
      </div>

      <div>
        <p>What time:</p>
        <div>
          <label>
            <input type="checkbox" onChange={() => handleTimeChange('3:00')} checked={selectedTime === '3:00'} />
            3:00
          </label>
          <label>
            <input type="checkbox" onChange={() => handleTimeChange('4:00')} checked={selectedTime === '4:00'} />
            4:00
          </label>
          <label>
            <input type="checkbox" onChange={() => handleTimeChange('5:00')} checked={selectedTime === '5:00'} />
            5:00
          </label>
        </div>
      </div>

      <div>
        <p>How many people:</p>
        <div>
          <label>
            <input type="checkbox" onChange={() => handlePeopleChange('1')} checked={selectedPeople === '1'} />
            1
          </label>
          <label>
            <input type="checkbox" onChange={() => handlePeopleChange('2')} checked={selectedPeople === '2'} />
            2
          </label>
          <label>
            <input type="checkbox" onChange={() => handlePeopleChange('3')} checked={selectedPeople === '3'} />
            3
          </label>
          <label>
            <input type="checkbox" onChange={() => handlePeopleChange('4')} checked={selectedPeople === '4'} />
            4
          </label>
        </div>
      </div>

      <div>
        <p>Kids:</p>
        <div>
          <label>
            <input type="checkbox" onChange={() => handleKidsOptionChange('yes')} checked={kidsOption === 'yes'} />
            Yes
          </label>
          <label>
            <input type="checkbox" onChange={() => handleKidsOptionChange('no')} checked={kidsOption === 'no'} />
            No
          </label>
        </div>
      </div>
    </div>
  );
}

export default function CombinedTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        <Tab label="Menu" />
        <Tab label="Offer" />
        <Tab label="Event" />
        <Tab label="Review" />
      </Tabs>

      <CustomTabPanel value={value} index={0}>
        {/* Content for "Menu" tab */}
        <h2>Menu Content</h2>
        <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
               </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/* Content for "Offer" tab */}
        <h2>Offer Content</h2>
        <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        {/* Content for "Event" tab */}
        <h2>Event Content</h2>
        <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>20% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF</p>
            </div>
            <div className="offer-card" style={{ width: '300px', height: '300px', border: '1px solid #ccc', borderRadius: '10px', overflow: 'hidden', margin: '10px' }}>
              <p>50% OFF - Use Carrot</p>
            </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        {/* Content for "Review" tab */}
        <h2>Review Content</h2>
        <div style={{ borderBottom: '1px solid #ccc', marginBottom: '15px' }}>
          <div className="review-card">
            <p>Rating: ⭐⭐⭐⭐⭐</p>
          </div>
        </div>

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

        <button style={{ marginBottom: '15px' }}>Write a Review</button>

        <div className="review-card">
          <p>Food: ⭐⭐⭐⭐</p>
          <p>Ambience: ⭐⭐⭐⭐⭐</p>
          <p>Hygiene: ⭐⭐⭐⭐⭐</p>
          <p>Pricing: ⭐⭐⭐⭐</p>
          <p>Service: ⭐⭐⭐⭐⭐</p>
        </div>
      </CustomTabPanel>

      {/* Right-side Reservation Card */}
      <ReservationCard />
    </Box>
  );
}
