import {useState} from 'react';

const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toogleValue = () => {
    setValue(!value);
  };
  return [value, toogleValue];
}

export default useToggle;