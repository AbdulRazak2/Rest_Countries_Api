
import Filters from 'components/Filters/Filters';
import { Wrapper, CardsList, StyledLoading } from './SearchPage.styles';
import useCountries from 'Providers/CountriesProvider';
import { useState } from 'react';
import { ReactComponent as Icon } from 'assets/loadingIcon.svg';

const SearchPage = () => {
    const { countries, state } = useCountries();
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    
  return (
    <Wrapper>
      <Filters 
      
      />
       </Wrapper>
       );
};