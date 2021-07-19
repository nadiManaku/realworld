import React from 'react';
import { IPerfomance } from '../pages/TestDataPerformance';

interface IDefaultValue {
  items: IPerfomance | {};
  setItems: (item: IPerfomance) => void;
};

const defaultValue: IDefaultValue = {
  items: {},
  setItems: () => {
    /* no-op */
  },
};

const AppContext = React.createContext(defaultValue);

export default AppContext;