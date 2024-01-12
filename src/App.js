

import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./Component/Header";
import Screen from "./Component/Screen";
import Text from "./Component/Text";
import VideoCard from "./Component/Videocard";
import TabComponent from"./Component/TabComponent"
import FourCards from "./Component/FourCard";
import FourCards1 from "./Component/FourCard1";
import Banner from "./Component/Banner";


function App() {


  return (
    <div className="App" >
      <Header/>
      <Screen/>
      <Text/>
      <VideoCard/>
      <TabComponent/>
      <FourCards/>
      <FourCards1/>
      <Banner/>


    </div>
  );
}

export default App;