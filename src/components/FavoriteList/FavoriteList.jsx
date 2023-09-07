import { useSelector } from "react-redux";
import { UserCard } from "../UserCard/UserCard";

const FavoriteList = (props) => {
    const {userId} = props;
    const data = useSelector(state => state.data.data);
    const User =  data && data.filter(item => item.id === userId)
  return (
    <li>
    <UserCard state={User[0]}/>
    </li>
  )
}

export default FavoriteList;
