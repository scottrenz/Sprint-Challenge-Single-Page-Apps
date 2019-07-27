import React from 'react'
import LocationsList from './LocationsList'

export default function CharacterCard (props /* add props */ ) {
  return (<span>
       
    <div style={{display:'flex;'}}><h2> {props.name}</h2>
    <img src={props.image} />
    {/* <li>Location: {props.location}</li> */}
    <li>Origin: {props.origin}</li>
    <li>Species: {props.species}</li>
    <li>Gender: {props.gender}</li>
    <li>Status: {props.status}</li>
    <LocationsList locaUrl={props.url} />

    <li></li>
    </div>
    </span>
    )
}
