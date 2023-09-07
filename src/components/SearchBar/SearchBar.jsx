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
  
  useEffect(() => {
   dispatch(getData());
  },[dispatch]);

  if(isLoading){
    return <div className="loader"></div>
  }
  
  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }
 

  return (
    <div className='search-container'>
    <form>
        <input type='text' placeholder='Enter the name to search' value = {value} className='search-bar' onChange={onChangeHandler}/>
          <FiSearch className="input-submit"/>
    </form>
    <DropDown data={data} value={value}/>
    </div>
  )
}
