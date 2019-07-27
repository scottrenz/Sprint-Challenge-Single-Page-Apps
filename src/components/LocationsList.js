import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components'
import LocationsCard from './LocationsCard'

export default function LocationsList(props) {
  // TODO: Add useState to track data from useEffect

  const myFunction = function (element,ix,arr) {
    return arr.length;
  }
  
  let gridView = styled.div `
  display: flex;
  flexWrap: wrap;
  justifyContent: space-evenly;
`;

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

      <h3 style={{marginLeft: '10px'}}>Location:

      <div className={gridView}>
   { (locaList !== undefined) &&       <LocationsCard
            name={(locaList.name !== undefined) ? locaList.name : ''}
            created={locaList.created}
            dimension={locaList.dimension}
            type={locaList.type}
            residents={locaList.residents.map(myFunction)[0]}

            // residents={locaList.residents}
             >
            </LocationsCard>}
      </div>
        </h3>
    </section>

}
