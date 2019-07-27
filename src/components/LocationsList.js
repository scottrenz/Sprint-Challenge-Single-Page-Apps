import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import LocationsCard from './LocationsCard'

export default function LocationsList(props) {
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
// console.log('location list props',props)
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
let url = props.locaUrl
// console.log('props locaUrl',url)
// const [charList,setChar] = useState({response: []})
const [charList,setChar] = useState({results: []})
const [locaList,setLoca] = useState()
const [times, setTimes] = React.useState(0);
// const [charList,setChar] = useState({results: []})
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`${url}`)
       .then(response => {
// console.log('location list response',response)
// results = response.data['results']
setLoca(response.data) ;
//  console.log('locaList',locaList)
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

      <h3>Location:

      <div className={gridView}>
   { (locaList !== undefined) &&       <LocationsCard
            name={(locaList.name !== undefined) ? locaList.name : ''}
            created={locaList.created}
            dimension={locaList.dimension}
            type={locaList.type}
            residents={locaList.residents}
             >
            </LocationsCard>}
      </div>
        </h3>
    </section>

}
