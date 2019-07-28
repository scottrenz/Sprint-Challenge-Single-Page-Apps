import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LocationsCard from './LocationsCard'
import {GridView,H310} from '../myStyle';

export default function LocationsList(props) {
  // TODO: Add useState to track data from useEffect

  const myFunction = function (element,ix,arr) {
    return arr.length;
  }
  
let counter = 0
let url = props.locaUrl
const [locaList,setLoca] = useState()
const [times, setTimes] = React.useState(0);
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
       .get(`${url}`)
       .then(response => {
setLoca(response.data) ;
if (times % 3 === 0) {
  setTimes(counter + 1);
}

      })
        .catch(error => {
          console.error(error);

        });
      },[times,counter,url]);
      return <section className='character-list grid-view'>

      <H310>Location:

      <GridView>
      { (locaList === undefined) &&  <div>unknown</div>}

   { (locaList !== undefined) &&       <LocationsCard
            name={(locaList.name !== undefined) ? locaList.name : ''}
            created={locaList.created}
            dimension={locaList.dimension}
            type={locaList.type}
            residents={locaList.residents.map(myFunction)[0]}

            // residents={locaList.residents}
             >
            </LocationsCard>}
      </GridView>
        </H310>
    </section>

}
