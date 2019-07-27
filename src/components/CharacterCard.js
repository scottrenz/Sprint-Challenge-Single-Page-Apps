import React from 'react'
import styled from 'styled-components'

import LocationsList from './LocationsList'

export default function CharacterCard (props /* add props */ ) {
  let divView = styled.div `
  border: thin solid black; 
`;

// let divView = styled.div `
// display: flex;
// border: 0.5rem outset pink;
// outline: 0.5rem solid khaki;
// box-shadow: 0 0 0 2rem skyblue;
// border-radius: 12px;
// font: bold 1rem sans-serif;
// margin: 2rem;
// padding: 1rem;
// outline-offset: 0.5rem;`;

return (<span>
       
    <div>
    <img style={{width: '400px',marginLeft: '20px',marginBottom: '0',borderRadius: '10px 10px 0 0'}} src={props.image} />
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '0 0 10px 10px',borderTop: '0'}}>
    <h2 style={{marginLeft: '20px'}}> {props.name}</h2>
    {/* <li>Location: {props.location}</li> */}
    <li>Origin: {props.origin}</li>
    <li>Species: {props.species}</li>
    <li>Gender: {props.gender}</li>
    <li>Status: {props.status}</li>
    <LocationsList locaUrl={props.url} />
</div>
    {/* <li></li> */}
    </div>
    </span>
    )
}
