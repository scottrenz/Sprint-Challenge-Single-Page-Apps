import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import LocationCard from './LocationCard'

export default function LocationList(props) {
  // TODO: Add useState to track data from useEffect
let gridView = styled.div `
  display: flex;
  flexWrap: wrap;
  justifyContent: space-evenly;
`;

let divView = styled.div `
  margin: 1.25rem;
`;

let counter = 0
let url = props.locaUrl
const [locaList,setLoca] = useState({results: []})
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`https://rickandmortyapi.com/api/location/`)
       .then(response => {
setLoca({results: response.data.results}) ;
if (times % 3 === 0) {
  setTimes(counter + 1);
}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);
      return <section className='character-list grid-view'>

      <h3>Location:

<div style={{  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}}>
       {locaList.results.map((star,ix,arr) => (
            <LocationCard
            name={arr[ix].name}
            created={arr[ix].created}
            dimension={arr[ix].dimension}
            location={arr[ix].name}
            type={arr[ix].type}
            residents={arr[ix].residents}
             key={arr[ix].name} className={divView}>
             </LocationCard>
       ))}
       </div>
        </h3>
    </section>

}
