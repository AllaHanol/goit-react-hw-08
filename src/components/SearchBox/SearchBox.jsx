import css from './SearchBox.module.css';
import {useId} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setFilterValue,selectFilterValue} from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
 const  filterValue = useSelector(selectFilterValue);

const searchInputId = useId();
// const setFilterValue = useSelector(selectFilterValue);
  const handleFilter = (value) => {
    dispatch(setFilterValue(value));
   
  };
  return (
  
    <input className={css.search}
      id={searchInputId} 
      type="text" 
      value={filterValue} 
      onChange={(e) => handleFilter(e.target.value) } 
      placeholder="Search contacts" />
  );
};

export default SearchBox;

