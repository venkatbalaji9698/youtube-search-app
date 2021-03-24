import React, { useState } from 'react';

import Dropdown from '../../components/dropdown';
import CustomCarousel from '../../components/carousel';

import './index.scss'

const CardsPage = ({ history }) => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className="cards">
      <div className="cards_back">
        <p onClick={() => history.goBack()}>BACK</p>
      </div>
      <div className="cards__tab-list">
        <p className={`cards__tab${activeTab === 1 ? ' active' : ''}`} onClick={() => setActiveTab(1)}>Tab1</p>
        <p className={`cards__tab${activeTab === 2 ? ' active' : ''}`} onClick={() => setActiveTab(2)}>Tab2</p>
        <p className="cards__dropdown-wrapper">
          <Dropdown />
        </p>
      </div>
      <div className="cards_carousel-wrapper">
        <CustomCarousel />
      </div>
    </div >
  );
}

export default CardsPage;
