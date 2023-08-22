import { Suspense } from "react";
import {
  useLoaderData,
  useNavigation,
  defer,
  Await
} from "react-router-dom";
import PokemonList from "../components/PokemonList";
import PageControl from "../components/PageControl";
import PageTitle from "../components/ui/PageTitle";
import Loading from "../components/ui/Loading";


export default function Pokemon() {

  const pokemon = useLoaderData();

  const navigation = useNavigation();


  return (
    <>
      <PageTitle>Browse all pokémon</PageTitle>
      {navigation.state === 'loading' && <Loading />}
      {navigation.state === 'idle' &&
        <Suspense fallback={<Loading />}>
          <Await resolve={pokemon.batch}>
            {(pokemon) =>
              <PokemonList
                pokemon={pokemon}
              />
            }
          </Await>
          <PageControl maxPage={84}/>
        </Suspense>
      }
    </>
  );
}

export async function loader({ request }) {

  const RESULTS_LIMIT = 12;

  const currentURL = new URL(request.url);

  let page = parseInt(currentURL.searchParams.get("page"));

  if (!Number.isInteger(page) || page < 1 || page > 84) {
    page = 1;
  }

  const offset = RESULTS_LIMIT * (page - 1);

  return defer({batch: getPokemonBatch(offset, RESULTS_LIMIT)});

}

async function getPokemonBatch(offset, RESULTS_LIMIT) {

  const detailArray = Array(RESULTS_LIMIT);

  for (let i = 0; i < RESULTS_LIMIT; ++i) {

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1 + offset}/`);

    if (res.ok) {
      detailArray[i] = await res.json();
    } else {
      detailArray[i] = {id: 0, name: 'Not found', types: [{type: {name: 'normal'}}]};
    }

  }

  const pokemonBatch = Array(RESULTS_LIMIT);

  for (let i = 0; i < RESULTS_LIMIT; ++i) {

    const id = detailArray[i].id;

    const name = detailArray[i].name;

    const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    const types = detailArray[i].types.map((item) => {
      return item.type.name;
    });


    pokemonBatch[i] = {
      id,
      name,
      sprite,
      types,
    };

  } 

  return pokemonBatch;

} 


