import React from 'react';

import './tabBar.scss';
import { HomeButton } from './components/homeButton';

export const TabBar: React.FC = () => (
  <div className='tab__wrapper'>
    <div className='tab__bar'>1</div>
    <div className='tab__bar'>
      <div>
        <HomeButton />
      </div>
      <div>
        <svg width='0' height='0'>
          <defs>
            <clipPath id='myCurve' clipPathUnits='objectBoundingBox'>
              <path
                d='M 0,1
              L 0,0
              L 1,0
              L 1,1
              C .65 .4, .35 .4, 0 1
              Z'
              />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
    <div className='tab__bar'>3</div>
  </div>
);
