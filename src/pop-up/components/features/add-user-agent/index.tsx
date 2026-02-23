import { Field } from '@ui/atoms/field';
import { InputGroup, InputGroupButton, InputGroupInput } from '@ui/atoms/input-group';

import useAddUserAgent from '@/pop-up/hooks/use-add-ua';
import { AppMessageSender } from '@/shared/messages';

function AddUserAgent() {
  const { value, handleUpdateValue } = useAddUserAgent();
  const messageSender = new AppMessageSender();

  return (
    <Field className="gap-2 p-4">
      <InputGroup>
        <InputGroupInput
          className="text-xs"
          id="inline-end-input"
          type="text"
          placeholder="Enter value"
          onChange={(e) => handleUpdateValue(e.target.value)}
        />
        <InputGroupButton
          variant="default"
          size="xs"
          disabled={!value}
          className="mr-[8px] cursor-pointer bg-active hover:bg-active/75"
          onClick={() => {
            messageSender.sendMessage('ADD_USER_AGENT', {
              userAgent: value,
            });
          }}
        >
          Add
        </InputGroupButton>
      </InputGroup>
    </Field>
  );
}

export default AddUserAgent;
