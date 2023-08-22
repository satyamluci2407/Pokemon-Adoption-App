import classes from './Instructions.module.css';

export default function Instructions () {

  return (
    <div className={classes.instructions}>
      <h2>Instructions</h2>
      <ol>
        <li>Go to the Pokémon menu option to browse all Pokémon.</li>
        <li>To select a pokémon for adoption click on the `Adopt` button.</li>
        <li>Go to the Checkout menu option to see the pokémon you have selected and click on the `Submit Adoption` button to complete the adoption.</li>
        <li>That's it! You should be able to see your adopted pokémon by clicking the Adoptions menu option.</li>
      </ol>
    </div>
  );
}
