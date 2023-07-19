import styled from "styled-components";
import React from "react";

const Card = styled.div`
  width: auto;
  height: auto;
  border: 1px solid black;
  border-radius: 6px;
  padding: 0.5rem;
`;

const CharactersCard = ({ character }) => {
  return (
    <>
      <Card>
        <img src={character.image} alt={character.name} />
        <h1>{character.name}</h1>
        <p>{character.location}</p>
        <p>{character.gender}</p>
        <p>{character.origin}</p>
        <p>{character.species}</p>
        <p>{character.status}</p>
      </Card>
    </>
  );
};

export default CharactersCard;
