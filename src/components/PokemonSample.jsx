import classes from './PokemonSample.module.css';

export default function PokemonSample () {

  return (
    <div className={classes.sampleContainer}>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt=""
        />
      </figure>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png"
          alt=""
        />
      </figure>
      <figure>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
          alt=""
        />
      </figure>
    </div>
  );
}
