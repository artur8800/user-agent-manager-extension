import { Field, FieldDescription, FieldLabel } from '@ui/atoms/field';
import { InputGroup, InputGroupAddon, InputGroupInput } from '@ui/atoms/input-group';

function AddUserAgent() {
  return (
    <Field className="max-w-sm">
      <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
      <InputGroup>
        <InputGroupInput id="inline-end-input" type="password" placeholder="Enter password" />
        <InputGroupAddon align="inline-end">t</InputGroupAddon>
      </InputGroup>
      <FieldDescription>Icon positioned at the end.</FieldDescription>
    </Field>
  );
}

export default AddUserAgent;
