import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { adoptionSubmitted, selectCartItems } from "../store/userSlice";
import CheckoutItem from "./CheckoutItem";
import classes from './Cart.module.css';


export default function Cart() {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const itemsList = cartItems.map((item) => <CheckoutItem key={item.id} {...item} />);

  const submitHandler = () => {
    dispatch(adoptionSubmitted());
    navigate('/adoptions');
  }


  return (
    <div className={classes.container}>
      {itemsList}
      {itemsList.length > 0 &&
        <div className={classes.submitSection}>
          <button className={classes.submitBtn} onClick={submitHandler}>Submit adoption</button>
        </div>
      }
      {itemsList.length === 0 && <p>No items in cart</p>}
    </div>
  );
}
