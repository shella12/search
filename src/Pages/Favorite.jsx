import React from 'react'
import { useSelector } from 'react-redux';
import FavoriteList from '../components/FavoriteList/FavoriteList';

const Favorite = () => {
    const favourites = useSelector(state => state.data.favourites);
  return (
    <ul>
        {favourites.length !== 0? favourites.map(item => < FavoriteList key={item} userId={item}/>)
            : <p className='empty-text'>No favorites added</p>}
    </ul>
  )
}

export default Favorite;