import { useEffect, useState } from "react";
import getAllCharacters from "../helpers/getFecthData";

function App() {

  const [characterList, setCharacterList] = useState([]);

  const getListCharacter = async() => {
    const data = await getAllCharacters();
    setCharacterList(data);
    console.log(characterList);
  } 

  useEffect(() => {
    getListCharacter();
  }, [])

  return (
    <h1 >
      HOLA MUNDO!
    </h1>
  );
}

export default App;
