import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import CharacterCard from './CharacterCard'

export default function CharacterList() {
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
// const [charList,setChar] = useState({response: []})
const [charList,setChar] = useState({results: []})
const [locaList,SetLoca] = useState({loction: []})
const [times, setTimes] = React.useState(0);
// const [charList,setChar] = useState({results: []})
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`https://rickandmortyapi.com/api/character/`)
       .then(response => {
// console.log('response.data',response.data)
// results = response.data['results']
setChar({results: response.data.results}) ;
// console.log('charList',charList)
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

      <h3><h2>Characters:</h2>

      <div className={gridView}>
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
             key={arr[ix].name} className={divView}>


            </CharacterCard>
      ))}
      </div>
        </h3>
    </section>
}
