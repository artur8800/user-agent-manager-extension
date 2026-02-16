import { Spinner } from '@/pop-up/components/ui/atoms/spinner';

function AppSpinner() {
  return (
    <div className="p-4 absolute-vertical-center flex align-items-center justify-center">
      <Spinner className="w-10 h-10" />
    </div>
  );
}

export default AppSpinner;
