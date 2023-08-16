
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import HorizontalTimeline from 'react-horizontal-timeline';
import { styled } from 'styled-components';

const TimelineWrapper = styled.div`
    width: 100%;
    position: relative;
    top: 100;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, -50%);
    
    li{
      color:white;
      width: auto !important;
    }
    .button-forward, .button-back{
      width: 34px !important;
    }
    .card{
      background-color: rgba(185, 175, 144, 0.84);
      padding: 20px;
    }
`

const Timeline = ({currentValue}) => {
  const [value, setValue] = useState(0);
  const [previous, setPrevious] = useState(0);
  const router = useRouter()

  const VALUES = ["7 May 1765","27 July 1778","17 December 1781", "24 June 1779", "28 August 1793", "14 February 1797", "21 October 1805"]
    const description = [
      "Launch. 1765",
      "First battle of Ushant. 1778",
     "Second battle of Ushant. 1781 ",
      "Siege of Gibraltar. 1779",
      "Siege of Toulon. 1793",
      "Battle of Cape St. Vincent. 1797",
      "Battle of Trafalgar. 1805",
    ];

    const shortDescription = [
      " The HMS Victory was ordered by the British Admiralty to be built as a 100-gun first-rate ship of the line. The ship, designed by naval architect Sir Thomas Slade, began construction at the Chatham Dockyard.",
      "Battle of Ushan, otherwise known as the First Battle of Ushant, was fought during the American Revolutionary War between the French and the British.",
      "December 12th  1781, a French convoy sailing from Brest to the East and West indie with reinforcements and stores, encounters a British squadron commanded by Rear Admiral Richard Kempenfelt in the HMS Victory with orders to intercept the French convoy.",
      "The Siege of Gibraltar took place during the American Revolutionary War and lasted from 1779 to 1783.",
      "Toulon, a port city on the Mediterranean coast, was a significant naval stronghold, housing the entire French Mediterranean Fleet.",
      "The Battle of Cape St. Vincent, which occurred on 14th of February 1797, was a significant naval engagement during the French Revolutionary Wars.",
      "At daylight on the 21st the Franco-Spanish fleet, consisting of 33 sails of the line under Admiral Villeneuve and Admiral Gravina (Spanish) came in sight of the British fleet about 20 miles west of Cape Trafalgar."
    ]

    useEffect(() => {
      currentValue(value)
    }, [value, currentValue])

    const routing = () => {
      switch (value) {
      case 0:
          window.location.href = '/chatham'
          break;
      case 1:
          window.location.href = '/ushant'
          break;
      case 2:
        window.location.href = '/ushant-second'
        break;
      case 3:
          window.location.href = '/gibraltar'
          break;
      case 4:
          window.location.href = '/toulon'
          break;
      case 5:
          window.location.href = '/cape-st-vincent'
          break;
      case 6:
          window.location.href = '/trafalgar'
          break;
      default:
        break;
    }
  }
  
      return (
        <TimelineWrapper className='relative justify-center' >
            <div style={{
                width: "60%",
                height: "100px",
                margin: "0 auto"
            }}>
                <HorizontalTimeline
                    styles={{ outline: "#FFFFFF", foreground: "#19295C",}}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }}
                    values={VALUES}
                />
            </div>
            <div onClick={() => {
              routing()
            }} className="card  absolute cursor-pointer text-left text-xl md:left-0 md:w-full xl:-top-96 xl:left-24 xl:w-72 2xl:left-72	"><h3 className="fontBold mb-3 uppercase" >{description[value]}</h3>
              <p className='text-sm'>{shortDescription[value]}</p>
              <p className='fontBold mt-5 text-sm'>Click to learn more</p>
            </div>
        </TimelineWrapper>
      )
};

export default Timeline;
