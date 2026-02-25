import { Field } from '@ui/atoms/field';
import { InputGroup, InputGroupButton, InputGroupInput } from '@ui/atoms/input-group';
import { useUnit } from 'effector-react';

import useAddUserAgent from '@/pop-up/hooks/use-add-ua';
import { addUserAgentFx } from '@/pop-up/store';
import { wait } from '@/shared/utils';

function AddUserAgent() {
  const { value, handleUpdateValue } = useAddUserAgent();
  const addUserAgent = useUnit(addUserAgentFx);

  return (
    <Field className="gap-2 p-4">
      <InputGroup>
        <InputGroupInput
          className="text-xs"
          id="inline-end-input"
          type="text"
          placeholder="Enter value"
          onChange={(e) => handleUpdateValue(e.target.value)}
          value={value}
        />
        <InputGroupButton
          variant="default"
          size="xs"
          disabled={!value}
          className="mr-[8px] cursor-pointer bg-active hover:bg-active/75"
          onClick={() => {
            addUserAgent(value);
            wait(500).then(() => handleUpdateValue(''));
          }}
        >
          Add
        </InputGroupButton>
      </InputGroup>
    </Field>
  );
}

export default AddUserAgent;
