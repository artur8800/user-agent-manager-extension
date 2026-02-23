import { useState } from 'react';

function useAddUserAgent() {
  const [value, setValue] = useState<string>('');

  const handleUpdateValue = (value: string) => setValue(value);

  return {
    value,
    handleUpdateValue,
  };
}

export default useAddUserAgent;
