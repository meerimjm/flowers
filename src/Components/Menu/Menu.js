import './Menu.css';
import {Link} from 'react-router-dom'

function Menu() {
  return (
    <nav className='Menu'>
      <ul className='flex'>
        <li>
          <Link className='menu_li' to="/">Home</Link>
        </li>
        <li>
          <Link className='menu_li' to="/about">About</Link>
        </li>
        <li>
          <Link className='menu_li' to="/delivery">Delivery</Link>
        </li>
        <li>
          <Link className='menu_li' to="/contacts">Contacts</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;