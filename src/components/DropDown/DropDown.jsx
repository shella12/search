import React from 'react'
import DropDownItem from './DropDownItem';

const DropDown = (props) => {
    const {data, value} = props;
  return (
    <ul>
        {data && data.filter(item => {
            const searchTerm = value.toLowerCase()
            const firstName = item.firstName.toLowerCase();
            const lastName = item.lastName.toLowerCase();
            return searchTerm && (firstName.startsWith(searchTerm) || lastName.startsWith(searchTerm));
        })
        .map(item => {
           return <DropDownItem key={item.id} item={item}/>
        })}
    </ul>
  )
}

export default DropDown;
