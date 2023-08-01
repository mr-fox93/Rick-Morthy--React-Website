import "./App.css";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import CharactersCard from "./componets/CharactersCard";
import styled from "styled-components";
import { Pagination } from "semantic-ui-react";
import { Input, Select, Button } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 60px;
`;

const fetchCharacters = async (page, search, status) => {
  const res = await axios.get(
    `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}`
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
  return { characters, totalPages: res.data.info.pages };
};

const statusOptions = [
  { key: "a", text: "All", value: " " },
  { key: "b", text: "Alive", value: "alive" },
  { key: "c", text: "Dead", value: "dead" },
];

function MainPage() {
  const [page, setPage] = useState(1);
  const [inputPage, setInputPage] = useState(page);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState(" ");

  const { data, isLoading } = useQuery(
    ["characters", page, search, status],
    () => fetchCharacters(page, search, status),
    {
      keepPreviousData: true,
    }
  );

  const characters = data ? data.characters : [];
  const totalPages = data ? data.totalPages : 1;

  const handleGoToPage = () => {
    if (inputPage > totalPages) {
      alert("Page not exist");
      setPage(Number(1));
      setInputPage(Number(1));
    } else {
      setPage(Number(inputPage));
    }
  };

  const handlePageChange = (_, { activePage }) => {
    setPage(activePage);
    setInputPage(activePage);
  };

  const handleSearch = (_, { value }) => {
    setSearch(value);
    setPage(1);
    setInputPage(1);
  };

  const handleStatusChange = (_, { value }) => {
    setStatus(value);
    setPage(1);
    setInputPage(1);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "25px",
          marginBottom: "25px",
          gap: "10px",
        }}
      >
        <Select
          placeholder="Select status"
          options={statusOptions}
          value={status}
          onChange={handleStatusChange}
        />
        <Input
          value={search}
          onChange={handleSearch}
          placeholder="Search character..."
          icon="search"
        />
        <Pagination
          activePage={page}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          disabled={isLoading}
        />
        <Input
          value={inputPage}
          onChange={(e, { value }) => setInputPage(value)}
          placeholder="Page number"
        />
        <Button color="blue" onClick={handleGoToPage}>
          Go to
        </Button>
      </div>
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
