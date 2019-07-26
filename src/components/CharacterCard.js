import React from 'react'

export default function CharacterCard (props /* add props */ ) {
  return (<span>
       
    <div style={{display:'flex;'}}><h2> {props.name}</h2>
    <li>Location: {props.location}</li>
    <li>Origin: {props.origin}</li>
    <li>Species: {props.species}</li>
    <li>Gender: {props.gender}</li>
    <li>Status: {props.status}</li>
    <li></li>
    </div>
    </span>
    )
}
