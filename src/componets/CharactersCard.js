import styled from "styled-components";
import React from "react";
import { statusColor } from "../statusColor";

const Card = styled.div`
  width: 360px;
  height: 520px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
  overflow: auto;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Image = styled.img`
  width: auto;
  height: 250px;
  object-fit: cover;
  width: 100%;
  overflow: hidden;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const InfoGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 0.8;
`;

const Status = styled.div`
  background-color: ${({ status }) => statusColor(status)};
  width: 70px;
  height: 15px;
  border-radius: 6px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0.2rem;
  color: white;
  font-weight: bold;
`;

const CharactersCard = ({ character }) => {
  return (
    <>
      <Card>
        <Image src={character.image} alt={character.name} />
        <Info>
          <Header>
            <h1>{character.name}</h1>
            <Status status={character.status}>{character.status}</Status>
          </Header>

          <InfoGroup>
            <p>
              <b>Location:</b> {character.location}
            </p>
            <p>
              <b>Gender:</b> {character.gender}
            </p>
          </InfoGroup>
          <InfoGroup>
            <p>
              <b>Origin:</b> {character.origin}
            </p>
            <p>
              <b>Species:</b> {character.species}
            </p>
          </InfoGroup>
        </Info>
      </Card>
    </>
  );
};

export default CharactersCard;
