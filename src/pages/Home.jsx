import PokemonSample from "../components/PokemonSample";
import Instructions from "../components/Instructions";
import PageTitle from "../components/ui/PageTitle";


export default function Home () {

  return (
    <>
      <PageTitle>Welcome to Pokémon Adopter!</PageTitle>
      <PokemonSample />
      <Instructions />
    </>
  );
}
