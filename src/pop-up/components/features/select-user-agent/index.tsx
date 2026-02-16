import { Checkbox } from '@/pop-up/components/ui/atoms/checkbox';

function SelectUserAgent({ id }: { id: string }) {
  return <Checkbox id={id} onCheckedChange={(checked) => console.log('THIS IS CHECKBOX ID', id, checked)} />;
}

export default SelectUserAgent;
