
// import HeaderCartButton from './HeaderCartButton';
// import mealsImage from '../../assets/meals.jpg'
import classes from './Header.module.css'

const Header =(props) => {
  return (
    
<header className={classes.header}>
    <h1>Shopper's Stop</h1>
 <button className={classes.button}>Cart</button>
</header>
 
    
  )
}

export default Header
