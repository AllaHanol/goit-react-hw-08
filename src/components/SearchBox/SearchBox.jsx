import css from './SearchBox.module.css';
import {useId} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {setFilterValue,selectFilterValue} from '../../redux/filters/slice';

const SearchBox = () => {
  const dispatch = useDispatch();
 const  filterValue = useSelector(selectFilterValue);

const searchInputId = useId();
// const setFilterValue = useSelector(selectFilterValue);
  const handleFilter = (event) => {
    const value = event.target.value;
    dispatch(setFilterValue(value));
   
  };
  return (
  
    <input className={css.search}
      id={searchInputId} type="text" value={filterValue} onChange={(e) => handleFilter(e.target.value) } placeholder="Search contacts" />
  );
};

export default SearchBox;



// import { useDispatch, useSelector } from "react-redux";

// import { selectFilter, setFilterValue } from "../../redux/filters/slice";

// import css from "./SearchBox.module.css";

// function SearchBox() {
//   const dispatch = useDispatch();
//   const filterValue = useSelector(selectFilter);

//   const handleFilter = (event) => {
//     const value = event.target.value;
//     dispatch(setFilterValue(value));
//   };

//   return (
//     <label className={css.searchWrapper}>
//       <span className={css.label}>Find contacts by name</span>
//       <input
//         className={css.searchBar}
//         type="text"
//         name="searchBar"
//         placeholder="type..."
//         value={filterValue}
//         onChange={handleFilter}
//       />
//     </label>
//   );
// }

// export default SearchBox;