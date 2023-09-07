import { useNavigate } from 'react-router-dom';
import './DropDown.css';
import DropDownItem from './DropDownItem';

const DropDown = (props) => {
    const {data, value} = props;
    const navigate = useNavigate();
    const onClickHandler = (value) => {
      const dt = data.filter(item => value === item.id)
      if(dt !== []) {
        navigate("/user/" + dt[0].id, { state: dt[0] });
      }
    }
  return (
    <ul className='drop-down-container'>
        {data && data.filter(item => {
            const searchTerm = value.toLowerCase()
            const firstName = item.firstName.toLowerCase();
            const lastName = item.lastName.toLowerCase();
            const fullName = `${firstName} ${lastName}`;
            return searchTerm && (fullName.startsWith(searchTerm) || firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm));
        })
        .slice(0,10)
        .map(item => {
           return <DropDownItem key={item.id} item={item} onClickHandler={onClickHandler}/>
        })}
    </ul>
  )
}

export default DropDown;
