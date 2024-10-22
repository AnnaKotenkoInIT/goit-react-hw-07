import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import s from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div className={s.searchBox}>
      <label htmlFor="search" className={s.label}>
        Find contacts by name
      </label>

      <input
        className={s.input}
        type="text"
        name="search"
        id="search"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
