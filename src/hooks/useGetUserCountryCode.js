import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import { userCountryCodeSelector } from 'redux/user/user-selectors';
import { countryCode } from 'redux/user/user-slice';

export const useGetUserCountryCode = () => {
  const userCountryCode = useSelector(userCountryCodeSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userCountryCode) {
      async function fetchCountryCode() {
        try {
          const { data } = await axios.get(process.env.REACT_APP_IP_URL);
          dispatch(countryCode(data.location.country.code));
        } catch (error) {
          console.error(error);
        }
      }
      fetchCountryCode();
    }
  }, [dispatch, userCountryCode]);

  return [userCountryCode];
};
