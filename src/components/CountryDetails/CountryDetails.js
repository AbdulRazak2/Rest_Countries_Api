mport Card from 'components/Card/Card';

import Filters from 'components/Filters/Filters';
import { Wrapper, CardsList, StyledLoading } from './SearchPage.styles';
import useCountries from 'Providers/CountriesProvider';
import { useState } from 'react';
import { ReactComponent as Icon } from 'assets/loadingIcon.svg';