

import "./App.css";
import React, { useState, useEffect } from 'react';
import Header from "./Component/Header";
import Screen from "./Component/Screen";
import Text from "./Component/Text";
import VideoCard from "./Component/Videocard";
import TabComponent from"./Component/TabComponent"

function App() {


  return (
    <div className="App" >
      <Header/>
      <Screen/>
      <Text/>
      <VideoCard/>
      <TabComponent/>

    </div>
  );
}

export default App;