import React from 'react'
import {Li,H320} from '../myStyle';

export default function LocationsCard (props) {
  // image={image}

  return (<span>
       
    <div>
      <H320> {props.name}</H320>
    <Li>Created: {props.created}</Li>
    <Li>Dimension: {props.dimension}</Li>
    <Li>Type: {props.type}</Li>
    <Li>Residents: {props.residents}</Li>
    </div>
    </span>
    )
}
