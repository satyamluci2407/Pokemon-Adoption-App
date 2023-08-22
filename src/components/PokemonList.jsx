import PokemonCard from "./PokemonCard";
import classes from './PokemonList.module.css';


export default function PokemonList ({pokemon}) {

  const list = pokemon.map((item) => <PokemonCard key={item.id} {...item}/>);

  return (
    <>
      <div className={classes.listContainer}>
        <div className={classes.pokeGrid}>
          {list}
        </div>
      </div>
    </>
  );
}
