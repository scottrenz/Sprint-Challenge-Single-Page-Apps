import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const myFunction = function (element,ix,arr) {
    return arr.length;
  }

let divView = styled.div `
  margin: 1.25rem;
`;

let counter = 0
const [charList,setChar] = useState({results: []})
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`https://rickandmortyapi.com/api/character/`)
       .then(response => {
setChar({results: response.data.results}) ;
if (times % 3 === 0) {
  setTimes(counter + 1);
}
      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);
      return <section className='character-list grid-view'>

      <h3>Characters:

      <div style={{  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}}>
      {charList.results.map((star,ix,arr) => (
            <CharacterCard
            name={arr[ix].name}
            gender={arr[ix].gender}
            image={arr[ix].image}
            location={arr[ix].location.name}
            url={arr[ix].location.url}
            origin={arr[ix].origin.name}
             species={arr[ix].species}
             status={arr[ix].status}
             episodes={arr[ix].episode.map(myFunction)[0]}
             key={arr[ix].name} className={divView}>
            </CharacterCard>
      ))}
      </div>
        </h3>
    </section>
}
