import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import CharactersCard from "./componets/CharactersCard";
import styled from "styled-components";
import Navbar from "./componets/Navbar";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

const fetchCharacters = async (page) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}`
  );
  const characters = res.data.results.map((character) => {
    return {
      id: character.id ? character.id : "No data",
      name: character.name ? character.name : "No data",
      status: character.status ? character.status : "No data",
      species: character.species ? character.species : "No data",
      gender: character.gender ? character.gender : "No data",
      origin: character.origin.name ? character.origin.name : "No data",
      location: character.location.name ? character.location.name : "No data",
      image: character.image ? character.image : "No data",
    };
  });
  return characters;
};

function App() {
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(page); // New state for input value

  const { data, isLoading } = useQuery(
    ["characters", page],
    () => fetchCharacters(page),
    {
      keepPreviousData: true,
    }
  );

  const characters = data ? data : [];

  const handlePrevPage = () => {
    if (page > 1) {
      let newPage = page - 1;
      setPage(newPage);
      setInputPage(newPage);
    }
  };

  const handleNextPage = () => {
    let newPage = page + 1;
    setPage(newPage);
    setInputPage(newPage);
  };

  const handleGoToPage = () => {
    setPage(Number(inputPage));
  };

  return (
    <>
      <div>
        <button disabled={isLoading || page >= 42} onClick={handleNextPage}>
          Next
        </button>
        <button disabled={isLoading || page === 1} onClick={handlePrevPage}>
          Prev
        </button>
        <input
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
        />
        <button onClick={handleGoToPage}>Go to</button>
      </div>
      <Wrapper>
        {characters.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </Wrapper>
    </>
  );
}

export default App;
