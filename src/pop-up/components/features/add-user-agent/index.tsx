import { Field } from '@ui/atoms/field';
import { InputGroup, InputGroupButton, InputGroupInput } from '@ui/atoms/input-group';
import { useUnit } from 'effector-react';
import { toast } from 'sonner';

import useAddUserAgent from '@/pop-up/hooks/use-add-ua';
import { addDefaultData } from '@/pop-up/store';
import { AppMessageSender } from '@/shared/messages';

const TOAST_SUCCESS_TEXT = 'Data has been added successfully!';

function AddUserAgent() {
  const onUpdateUaList = useUnit(addDefaultData);
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
            messageSender
              .sendMessage('ADD_USER_AGENT', {
                userAgent: value,
              })
              .then((response) => {
                if (response) {
                  onUpdateUaList(response);

                  toast.success(TOAST_SUCCESS_TEXT, {
                    position: 'top-center',
                  });
                }
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
