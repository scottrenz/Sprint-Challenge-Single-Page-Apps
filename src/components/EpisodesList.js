import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import EpisodeCard from './EpisodeCard'

export default function EpisodesList(props) {
  // TODO: Add useState to track data from useEffect
// {id: 1, name: "Rick Sanchez", status: "Alive", species: "Human", type: "", url: "https://rickandmortyapi.com/api/character/1"}
// 
// const [movie, setMovie] = useState({});
// const [star, setStar] = useState({stars: []});

// let gridView = {
//   display: 'flex',
//   flexWrap: 'wrap',
//   justifyContent: 'space-evenly',
// }
// console.log('epistion list props',props)
let gridView = styled.div `
  display: flex;
  flexWrap: wrap;
  justifyContent: space-evenly;
`;

let divView = styled.div `
  margin: 1.25rem;
`;

// const Div = styled.div`

//   display: block;
//   margin: 100px;
//   flexDiretion: column;
//   justifyContent: space-around;
// `;

let counter = 0
let url = props.episUrl
// console.log('props episUrl',url)
// const [charList,setChar] = useState({response: []})
const [charList,setChar] = useState({results: []})
const [episList,setepis] = useState({results: []})
const [times, setTimes] = React.useState(0);
// const [charList,setChar] = useState({results: []})
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`https://rickandmortyapi.com/api/episode/`)
       .then(response => {
// console.log('new epistion list response',response)
// results = response.data['results']
setepis({results: response.data.results}) ;
// console.log('new episodes list response',episList)
//  console.log('episList',episList)
// console.log('results in char list',charList['results'])
// console.log('results name in char list',charList['results'][0])
// console.log('star',star)
if (times % 3 === 0) {
  setTimes(counter + 1);
}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);
      return <section className='character-list grid-view'>

      <h3>Episode:

      {/* <div className={gridView}>
   { (episList !== undefined) &&       <epistionCard
            name={(episList.name !== undefined) ? episList.name : ''}
            created={episList.created}
            dimension={episList.dimension}
            type={episList.type}
            residents={episList.residents}
             >
            </epistionCard>}
      </div> */}



       <div className={gridView}>
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
