import { FiSearch } from 'react-icons/fi';
import './SearchBar.css';
import DropDown from '../DropDown/DropDown';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../redux/SearchData';

export default function SearchBar() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const data= useSelector((state) => state.data.data);
  const isLoading = useSelector((state) => state.data.loading);
  // const favourites= useSelector((state) => state.data.favourites);
  useEffect(() => {
   dispatch(getData());
  },[dispatch]);

  if(isLoading){
    return <div className="loader"></div>
  }
  
  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }
  const onClickHandler = (event) => {
    event.preventDefault();
    // call api here
  }

  return (
    <>
    <form>
        <input type='text' placeholder='Enter the name to search' value = {value} className='search-bar' onChange={onChangeHandler}/>
        <button className="input-submit" type="submit" onClick={(e) => onClickHandler(e)}>
          <FiSearch />
        </button>
    </form>
    <DropDown data={data} value={value}/>
    </>
  )
}
