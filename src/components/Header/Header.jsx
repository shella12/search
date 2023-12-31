import { NavLink } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="App-header">
    <a href='https://torre.ai' className='logo'>Torre<span className='yellow'>.ai</span><span className='grey small'>alpha</span></a> 
    <NavLink to="/favorites" className="fav-link">My Favorites</NavLink>  
    </header>
  )
}
