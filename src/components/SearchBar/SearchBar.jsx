import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';

export default function SearchBar() {
  
  const onClickHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form>
        <input type='text' placeholder='Enter the name to search' className='search-bar'/>
        <button className="input-submit" type="submit" onClick={(e) => onClickHandler(e)}>
          <FiSearch />
        </button>
    </form>
  )
}
