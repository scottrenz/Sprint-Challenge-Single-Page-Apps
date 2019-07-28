import React from 'react'

import LocationsList from './LocationsList'
import {Li,DivCardChar,H2Card,Img,H3Card,Div60,DivView} from '../myStyle';

export default function CharacterCard (props /* add props */ ) {

return (<span>
       
    <DivView>
    <Img alt='' src={props.image} />
    <DivCardChar>
    <H2Card> {props.name}</H2Card>
    <Li>Origin: {props.origin}</Li>
    <Li>Species: {props.species}</Li>
    <Li>Gender: {props.gender}</Li>
    <Li>Status: {props.status}</Li>
    <Li>Episodes: {props.episodes}</Li>
{ (props.url === '') &&  <div>
 <H3Card>Location:</H3Card>
<Div60>{props.location}</Div60></div>}
{ (props.url !== '') &&
<LocationsList locaUrl={props.url} />}
</DivCardChar>
    </DivView>
    </span>
    )
}
