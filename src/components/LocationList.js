import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationCard from './LocationCard'
import {GridView} from '../myStyle';

export default function LocationList(props) {
  // TODO: Add useState to track data from useEffect

  const myFunction = function (element,ix,arr) {
    return arr.length;
  }

let counter = 0
const [locaList,setLoca] = useState({results: []})
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!


    let c = localStorage.getItem('locaPageCount')
    c = isNaN(c) ? 0 : c
    c = parseInt(c,10)
    localStorage.setItem('locaPageCount', ((c % 4) + 1 ));
    axios({
      method: 'get',
      url: `https://rickandmortyapi.com/api/location?page=${c}`,
      responseType: 'json'    })
    // axios
    //    .get(`https://rickandmortyapi.com/api/location/`)
       .then(response => {
         
  setLoca(
{results:    ( response.data.results)}) ;
if (times % 1 === 0) {
  setTimes(counter + 1);
}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter]);
      return <section className='character-list grid-view'>

      <h3>Location:

<GridView>
  {locaList.results.map((star,ix,arr) => (
            <LocationCard
            name={arr[ix].name}
            created={arr[ix].created}
            dimension={arr[ix].dimension}
            location={arr[ix].name}
            type={arr[ix].type}
            residents={arr[ix].residents.map(myFunction)[0]}
            key={arr[ix].name} >
             </LocationCard>
       ))}
       </GridView>
        </h3>
    </section>

}
