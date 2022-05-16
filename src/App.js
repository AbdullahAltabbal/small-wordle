import { useEffect, useState } from "react";
import Wordle from "./components/Wordle";

import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1em;
  border-bottom: 2px dotted white;
  background-color: hsl(226, 41%, 27%);
  color: white;

  h1 {
    letter-spacing: 10px;
  }
`;

const Main = styled.div``;

function App() {
  const [solution, setSolution] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/solution")
      .then((res) => res.json())
      .then((json) => {
        const randomSolution = json[Math.floor(Math.random() * json.length)];
        setSolution(randomSolution.word);
      });
  }, [setSolution]);
  return (
    <Wrapper>
      <Header>
        <h1>Wordle</h1>
      </Header>
      <Main>{solution && <Wordle solution={solution} />}</Main>
    </Wrapper>
  );
}

export default App;
