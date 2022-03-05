import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' ;
import {faSearch} from '@fortawesome/free-solid-svg-icons';
import {useSelect} from 'downshift';
import {Wrapper, DropdownMenu, InputField, MenuItem, OptionWrapper, StyledButton } from './Filters.styles';

const items = ['','Africa', 'America', 'Asia', 'Europe', 'Oceania'];

const Filters = ({ selectedItem: selectedValue, handleSelecetedItemChange, inputValue, setInputValue }) => {
    const { isOpen, selectedItem, getToggleButtonProps, getMenuProps, highlightedIndex, getItemProps} = useSelect({
        items,
        selectedItem: selectedValue,
        onSelectedItemChange: handleSelecetedItemChange,
    })
}