
import Filters from 'components/Filters/Filters';
import { Wrapper, CardsList, StyledLoading } from './SearchPage.styles';
import useCountries from 'Providers/CountriesProvider';
import { useState } from 'react';
import { ReactComponent as Icon } from 'assets/loadingIcon.svg';

const SearchPage = () => {
    const { countries, state } = useCountries();
    const [selectedValue, setSelectedValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    function handleSelectedItemChange({ selectedItem }) {
        setSelectedValue(selectedItem);
      }
    
  return (
    <Wrapper>
      <Filters 
       selectedValue={selectedValue}
       handleSelectedItemChange={handleSelectedItemChange}
       inputValue={inputValue}
       setInputValue={setInputValue}
      />
       </Wrapper>
       );
};
export default SearchPage;