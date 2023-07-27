import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import CharactersCard from "./componets/CharactersCard";
import styled from "styled-components";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

const fetchCharacters = async (page, search) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}`
  );
  const characters = res.data.results.map((character) => {
    return {
      page: res.data.info.pages,
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

function MainPage() {
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(page);
  const [search, setSearch] = useState("");

  const { data, isLoading } = useQuery(
    ["characters", page, search],
    () => fetchCharacters(page, search),
    {
      keepPreviousData: true,
    }
  );

  const characters = data ? data : [];

  const handleGoToPage = () => {
    if (inputPage >= 43) {
      alert("Page not egsist");
      setPage(Number(1));
      setInputPage(Number(1));
    } else {
      setPage(Number(inputPage));
    }
  };

  const handlePageChange = (_, value) => {
    setPage(value);
    setInputPage(value);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPage(1);
    setInputPage(1);
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        marginTop="25px"
        marginBottom="25px"
        gap="10px"
      >
        <TextField
          value={search}
          onChange={handleSearch}
          variant="outlined"
          size="small"
          label="Search character"
          sx={{
            width: "200px",
          }}
        />{" "}
        <Pagination
          count={characters[0] ? characters[0].page : 1}
          variant="outlined"
          shape="rounded"
          size="large"
          page={page}
          onChange={handlePageChange}
          disabled={isLoading}
        />
        <TextField
          value={inputPage}
          onChange={(e) => setInputPage(e.target.value)}
          variant="outlined"
          size="small"
          label="Page number"
          sx={{
            width: "135px",
          }}
        />
        <Button onClick={handleGoToPage} variant="outlined" size="large">
          Go to
        </Button>
      </Box>
      <Wrapper>
        {characters.map((character) => (
          <CharactersCard key={character.id} character={character} />
        ))}
      </Wrapper>
    </>
  );
}

export default MainPage;

/*
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

*/
