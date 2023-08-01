import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "./context/globalcontext";
import CharactersCard from "./componets/CharactersCard";
import { Button } from "semantic-ui-react";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const Favorite = () => {
  const { favorite, setFavorite } = useContext(GlobalContext);

  const deleteAllCharacters = () => {
    setFavorite([]);
  };

  return favorite.length === 0 ? (
    <h1 style={{ textAlign: "center" }}>
      Nothing here, add character to favorite.
    </h1>
  ) : (
    <>
      <ButtonWrapper>
        <Button color="blue" onClick={deleteAllCharacters}>
          Delete All
        </Button>
      </ButtonWrapper>
      <Wrapper>
        {favorite.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </Wrapper>
    </>
  );
};

export default Favorite;
