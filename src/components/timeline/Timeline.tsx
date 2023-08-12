
import { useState } from 'react';
import { Chrono } from 'react-chrono';
import { styled } from 'styled-components';

const TimelineWrapper = styled.div`
    height: 300px;
    width: 80%;
        position: absolute;
    top: 90%;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
`

const Timeline = () => {
   
 
    const items = [{
        title: "7 may 1765",
        cardTitle: "Launch",
      }, {
        title: "27 july 1778",
        cardTitle: "First battle of Ushant",
      }, {
        title: "17 december 1781",
        cardTitle: "Second battle of Ushant",
      }, {
        title: "24 june 1779",
        cardTitle: "Siege of Gibraltar"
      },
      {
        title: "28 august 1793",
        cardTitle: "Siege of Toulon"
      }, {
        title: "14 february 1797",
        cardTitle: "Battle of Cape St. Vincent"
      }, {
        title: "21 october 1805",
        cardTitle:"Battle of Trafalgar"
      }, {
        title: "september 1808",
        cardTitle: "Baltic campaign"
      } ];
  
      return (
        <TimelineWrapper className='grow justify-center' >
          <Chrono slideShow className="mb-24"  slideItemDuration={4500} cardPositionHorizontal="TOP"
            slideShowType="reveal" mode="HORIZONTAL" items={items} >
                <a href="www.google.com">
                    <div className='mb-5'> <p>test</p></div>
                </a>
               
            </Chrono>
        </TimelineWrapper>
      )
};

export default Timeline;
