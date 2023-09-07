import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './UserCard.css';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';
import { addfavouritePeople, removefavouritePeople } from '../../redux/SearchData';


export const UserCard = (props) => {
    const {state} = props;
    const dispatch = useDispatch();
    const favourites = useSelector(state => state.data.favourites);
    const [isFavourite, setIsFavourite] = useState(favourites.includes(state.id));
    useEffect(() => {
      setIsFavourite(favourites.includes(state.id));
    }, [state.id, favourites]);

    const addFav = () => {
        if (!isFavourite){
            dispatch(addfavouritePeople(state.id))
            setIsFavourite(true)
           }
           else {
            dispatch(removefavouritePeople(state.id))
            setIsFavourite(false)
           }
    }
  return (
    <div className="user-card">
      <div className="user-details">
        <h1>{state.firstName} {state.lastName}</h1>
        <h2>{state.title}</h2>
        <p>{state.bio}</p>
      </div>
        <div>
          {!isFavourite ?  <AiOutlineHeart className="heart-icon" onClick={addFav}/> : <AiTwotoneHeart className="heart-icon" onClick={addFav}/>}
        </div>
    </div>
  )
}
