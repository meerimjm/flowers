import './Header.css';
import Menu from '../Menu/Menu';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import {Link} from 'react-router-dom'
import { BsCart4 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


function Header() {
  return (
    <header className="Header">
      <div className="container">
        <div className="Head flex">
          <Logo />
          <Menu />
          

          <div className="Buttons flex">
            <Button>Login</Button>
            <Button>Sign In</Button>
          </div>

          <FaRegHeart />

          
          <Link to="/cart" className="Cart_ic">
          <BsCart4 className='cart' />
            <span>10</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;