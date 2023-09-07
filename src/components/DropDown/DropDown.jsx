import './DropDown.css';
import DropDownItem from './DropDownItem';

const DropDown = (props) => {
    const {data, value} = props;
  return (
    <ul className='drop-down-container'>
        {data && data.filter(item => {
            const searchTerm = value.toLowerCase()
            const firstName = item.firstName.toLowerCase();
            const lastName = item.lastName.toLowerCase();
            return searchTerm && (firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm));
        })
        .slice(0,10)
        .map(item => {
           return <DropDownItem key={item.id} item={item}/>
        })}
    </ul>
  )
}

export default DropDown;
