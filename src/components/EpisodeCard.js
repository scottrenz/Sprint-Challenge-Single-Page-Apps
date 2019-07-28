import React from 'react'
import {DivCardLoca,H2Card,Li} from '../myStyle';

export default function EpisodeCard (props) {
  // image={image}
  
  return (<span>
       
     <DivCardLoca>
      <H2Card> {props.name}</H2Card>
    <Li>Air Date: {props.air_date}</Li>
    <Li>Episode: {props.episode}</Li>
    </DivCardLoca>
    </span>
    )
}
