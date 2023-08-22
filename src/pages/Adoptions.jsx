import { useSelector } from "react-redux";
import { selectAdopted } from "../store/userSlice";
import PokemonList from "../components/PokemonList";
import PageTitle from "../components/ui/PageTitle";


export default function Adoptions () {

  const adopted = useSelector(selectAdopted);

  return (
    <>
      <PageTitle>Your companions!</PageTitle>
      {adopted.length > 0 && <PokemonList pokemon={adopted}/>}
      {adopted.length === 0 && <p style={{textAlign: 'center'}}>No adopted pokémon yet</p>}
    </>
  );
}
