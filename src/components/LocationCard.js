import React from 'react'
import {Li,DivCardLoca,H2Card} from '../myStyle';
export default function LocationCard (props) {
  // image={image}

  return (<span>
       
    <DivCardLoca>
    <H2Card> {props.name}</H2Card>
    <Li>Created: {props.created}</Li>
    <Li>Dimension: {props.dimension}</Li>
    <Li>Type: {props.type}</Li>
    <Li>Residents: {(!props.residents) ? '0' : props.residents}</Li>
    </DivCardLoca>
    </span>
    )
}
