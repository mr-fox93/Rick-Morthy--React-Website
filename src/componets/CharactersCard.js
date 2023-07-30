import styled from "styled-components";
import React, { useContext } from "react";
import { statusColor } from "../statusColor";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { GlobalContext } from "../context/globalcontext";

const Card = styled.div`
  width: 360px;
  height: 570px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  transition: all 0.3s ease;
  overflow: auto;
  background-color: #f0ffff;

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
  height: 20px;
  border-radius: 6px;
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 0.3rem;
  color: white;
  font-weight: bold;
`;

const CharactersCard = ({ character }) => {
  const { favorite, setFavorite, isFavorite, setIsFavorite } =
    useContext(GlobalContext);
  return (
    <Card>
      <Image src={character.image} alt={character.name} />
      <Info>
        <Header>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1>{character.name}</h1>
            <IconButton
              onClick={() => {
                setFavorite([...favorite, character]);
              }}
            >
              <FavoriteIcon />
            </IconButton>
          </div>
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
  );
};

export default CharactersCard;
