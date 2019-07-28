import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EpisodeCard from './EpisodeCard'
import {GridView} from '../myStyle';

export default function EpisodesList(props) {
  // TODO: Add useState to track data from useEffect

let counter = 0
const [episList,setEpis] = useState({results: []})
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    let c = localStorage.getItem('episPageCount')
    c = isNaN(c) ? 0 : c
    c = parseInt(c,10)
    localStorage.setItem('episPageCount', ((c % 2) + 1));
    
    axios
       .get(`https://rickandmortyapi.com/api/episode?page=${c}`)
       .then(response => {
setEpis({results: response.data.results}) ;
if (times % 1 === 0) {
  setTimes(counter + 1);
}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);
      return <section className='character-list grid-view'>

      <h3>Episode:
<GridView>
       {episList.results.map((star,ix,arr) => (
            <EpisodeCard
            name={arr[ix].name}
            air_date={arr[ix].air_date}
            episode={arr[ix].episode}
             key={arr[ix].name} >
             </EpisodeCard>
       ))}
       </GridView>
        </h3>
    </section>

}
