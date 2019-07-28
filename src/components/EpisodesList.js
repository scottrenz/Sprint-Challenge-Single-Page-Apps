import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import EpisodeCard from './EpisodeCard'
import useEpisPage from "./useEpisPage";

export default function EpisodesList(props) {
  // TODO: Add useState to track data from useEffect

let divView = styled.div `
  margin: 1.25rem;
`;

let counter = 0
const [episPage, setEpisPage] = useEpisPage(1)
const [episList,setEpis] = useState({results: []})
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`https://rickandmortyapi.com/api/episode?page=${episPage}`)
       .then(response => {
setEpis({results: response.data.results}) ;
if (times % 1 === 0) {
  setTimes(counter + 1);
  setEpisPage((episPage === 2) ? 1 : episPage + 1 )

}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter,episPage,setEpisPage]);
      return <section className='character-list grid-view'>

      <h3>Episode:
<div style={{  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly'
}}>
       {episList.results.map((star,ix,arr) => (
            <EpisodeCard
            name={arr[ix].name}
            air_date={arr[ix].air_date}
            episode={arr[ix].episode}
             key={arr[ix].name} className={divView}>
             </EpisodeCard>
       ))}
       </div>
        </h3>
    </section>

}
