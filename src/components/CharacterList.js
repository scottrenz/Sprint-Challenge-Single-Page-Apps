import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard'
import {GridView} from '../myStyle';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const myFunction = function (element,ix,arr) {
    return arr.length;
  }

  let counter = 0
const [charList,setChar] = useState({results: []})
const [times, setTimes] = React.useState(0);
// const isMounted = useIsMounted();
useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!

    let c = localStorage.getItem('charPageCount')
    c = isNaN(c) ? 1 : c
    c = parseInt(c,10)
    localStorage.setItem('charPageCount', (c + 1 ));
      axios
    
    // .get(`https://rick-and-morty-learning-api.herokuapp.com/api/`)
    .get(`https://rickandmortyapi.com/api/character?page=${c % 26}`)
      .then(response => {
        // if (isMounted.value) {
        setChar({results: response.data.results});
        // }
  
if (times % 1 === 0) {
  setTimes(counter + 1);
  
}
      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);

return <section className='character-list grid-view'>

      <h3>Characters:

<GridView>
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
              >
            </CharacterCard>
      ))}
      </GridView>
        </h3>
    </section>
}
