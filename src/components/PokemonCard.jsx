import { useDispatch, useSelector } from "react-redux";
import { cartItemAdded, selectIsInCart, selectIsAdopted } from "../store/userSlice";
import classes from './PokemonCard.module.css';

export default function PokemonCard ({id, name, sprite, types}) {

  const isInCart = useSelector((state) => selectIsInCart(state, id));
  const isAdopted = useSelector((state) => selectIsAdopted(state, id));
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartItemAdded({id, name, sprite, types}));
  }

  return (
    <div className={classes.card}>
      <figure><img src={sprite} alt="pokemon"/></figure>
      <div className={classes.cardBody}>
        <p>#{id}</p>
        <h2 className={classes.name}>{name}</h2>
        <div className={classes.types}>
          <span className={classes[types[0]]}>{types[0]}</span> {types[1] && <span className={classes[types[1]]}>{types[1]}</span>}
        </div>
        {!isAdopted && <button className={classes.adoptBtn} onClick={addToCartHandler} disabled={isInCart} >{isInCart ? "In cart" : "Add to cart"}</button>}
      </div>
    </div>
  );
}
