import { useState, useRef, useEffect, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash.debounce';

import { searchQuery } from 'redux/music/music-slice';
import { searchQuerySelector } from 'redux/music/music-selectors';
import { textFoundNormalize } from 'utils';
import { SearchIcon } from 'icons';
import s from './SearchBar.module.scss';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const location = useLocation();
  const stateQuery = useSelector(searchQuerySelector);
  const inputEl = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const debouncedQuery = useRef(
    debounce(query => {
      const normalizedQuery = textFoundNormalize(query);
      if (normalizedQuery) {
        dispatch(searchQuery(normalizedQuery));
      }
    }, 300)
  );

  useEffect(() => {
    debouncedQuery.current(query);
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      debouncedQuery.current.cancel();
    };
  }, [query]);

  useEffect(() => {
    if (query && query.toLocaleLowerCase() !== stateQuery && location.pathname !== '/search') {
      navigate('/search');
    }
  }, [location.pathname, navigate, query, stateQuery]);

  const handleKeyDown = useCallback(
    e => {
      if (e.code === 'Enter') {
        if (query && location.pathname !== '/search') {
          navigate('/search');
        }
        setTimeout(() => setQuery(''), 310);
        document.removeEventListener('keydown', handleKeyDown);
      }
    },
    [location.pathname, navigate, query]
  );

  useEffect(() => {
    if (query) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown, query]);

  const handleChange = e => {
    setQuery(e.target.value.trimStart());
  };

  const handleInputReset = () => {
    if (query && location.pathname !== '/search') {
      navigate('/search');
    }
    setTimeout(() => setQuery(''), 310);
  };

  const handleBlur = () => {
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleAutoFocus = () => {
    inputEl.current.focus();
    document.addEventListener('keydown', handleKeyDown);
  };

  return (
    <div className={s.searchInput} onMouseEnter={handleAutoFocus}>
      <SearchIcon onClick={handleInputReset} />
      <input
        type="text"
        name="search"
        value={query}
        placeholder="Search.."
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        ref={inputEl}
      />
    </div>
  );
};

export default SearchBar;
