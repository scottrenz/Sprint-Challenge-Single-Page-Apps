import React from 'react'

import LocationsList from './LocationsList'

export default function CharacterCard (props /* add props */ ) {
let liView = {
  marginLeft: '10px' 
};

return (<span>
       
    <div>
    <img alt='' style={{width: '400px',marginLeft: '20px',marginBottom: '0',borderRadius: '10px 10px 0 0'}} src={props.image} />
    <div style={{width: '400px',marginLeft: '20px',marginTop: '0',border: 'thin solid grey',borderRadius: '0 0 10px 10px',borderTop: '0'}}>
    <h2 style={{marginLeft: '20px'}}> {props.name}</h2>
    <li  style={liView} >Origin: {props.origin}</li>
    <li  style={liView} >Species: {props.species}</li>
    <li  style={liView} >Gender: {props.gender}</li>
    <li  style={liView} >Status: {props.status}</li>
    <li  style={liView} >Episodes: {props.episodes}</li>
{ (props.url === '') &&  <div>
 <h3 style={{marginLeft: '40px'}}>Location:</h3>
<div style={{marginLeft: '60px'}}>{props.location}</div></div>}
{ (props.url !== '') &&
<LocationsList locaUrl={props.url} />}
</div>
    </div>
    </span>
    )
}
