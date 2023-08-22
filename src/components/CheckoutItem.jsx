import { useDispatch } from 'react-redux';
import { cartItemRemoved } from '../store/userSlice';
import classes from './CheckoutItem.module.css';

export default function CheckoutItem({id, name, sprite, types}) {

  const dispatch = useDispatch();

  const removeItemHandler = () => {
    dispatch(cartItemRemoved(id));
  }

  return (
    <div className={classes.itemCard}>
      <figure><img src={sprite} alt="pokemon" /></figure>
      <div className={classes.itemDescription}>
        <p>#{id} {name}</p>
        <div className={classes.types}>
          <span className={classes[types[0]]}>{types[0]}</span> {types[1] && <span className={classes[types[1]]}>{types[1]}</span>}
        </div>
      </div>
      <button className={classes.removeBtn} onClick={removeItemHandler}>Remove</button>
    </div>
  );
}
