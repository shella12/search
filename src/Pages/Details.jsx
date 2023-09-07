import { useLocation } from 'react-router-dom';
import { UserCard } from '../components/UserCard/UserCard';

 const Details = () => {
    const { state } = useLocation();
  return (
    <>
     <UserCard state={state} />  
    </>
  )
}

export default Details;
