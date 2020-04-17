// Write your Character component here
import React from 'react';
import { Card, CardImg, CardTitle, CardSubtitle, Badge } from 'reactstrap';


const Character = props => {
  return (
    <Card>
      <CardImg src={props.character.image}></CardImg>
      <CardTitle className="text-center font-weight-bolder" >{props.character.name}</CardTitle>
      <div>
        <Badge>Status:</Badge> <CardSubtitle>{props.character.status}</CardSubtitle>
      </div>
      <div>
        <Badge>Species:</Badge> <CardSubtitle>{props.character.species}</CardSubtitle>
      </div>
      <div>
        <Badge>Gender:</Badge> <CardSubtitle>{props.character.gender}</CardSubtitle>
      </div>
      <div>
        <Badge>Origin:</Badge> <CardSubtitle>{props.character.origin.name}</CardSubtitle>
      </div>
    </Card>
  );
}


export default Character;