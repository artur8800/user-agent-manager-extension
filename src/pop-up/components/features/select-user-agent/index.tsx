import { useEffect } from 'react';
import { useUnit } from 'effector-react';

import { Checkbox } from '@/pop-up/components/ui/atoms/checkbox';
import { $activeUserAgent, selectUserAgent } from '@/pop-up/store';

function SelectUserAgent({ id, isSelected }: { id: string; isSelected: boolean }) {
  const [onSelectUa, currentActive] = useUnit([selectUserAgent, $activeUserAgent]);

  useEffect(() => {
    console.log('Current active user agent:', currentActive);
  }, [currentActive]);

  return <Checkbox id={id} checked={isSelected} onCheckedChange={() => onSelectUa(id)} />;
}

export default SelectUserAgent;
