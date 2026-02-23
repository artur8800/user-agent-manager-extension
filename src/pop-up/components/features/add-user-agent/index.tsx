import { Field, FieldDescription } from '@ui/atoms/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@ui/atoms/input-group';

function AddUserAgent() {
  return (
    <div className="p-4">
      <Field className="max-w-sm">
        <InputGroup>
          <InputGroupInput id="inline-end-input" type="text" placeholder="Enter value" />
          <InputGroupAddon align="inline-end">t</InputGroupAddon>
        </InputGroup>
        <FieldDescription>Icon positioned at the end.</FieldDescription>
      </Field>
    </div>
  );
}

export default AddUserAgent;
