// Write your Character component here
import React from 'react';
import { Card, CardImg, CardTitle, CardText, CardSubtitle } from 'reactstrap';


const Character = props => {
  return (
    <Card>
      <CardImg src={props.character.image}></CardImg>
      <CardTitle>{props.character.name}</CardTitle>
      <CardSubtitle>{props.character.status}</CardSubtitle>
      <CardSubtitle>{props.character.species}</CardSubtitle>
      <CardSubtitle>{props.character.gender}</CardSubtitle>
      <CardSubtitle>{props.character.origin.name}</CardSubtitle>
    </Card>
  );
}


export default Character;