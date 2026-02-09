import { CalendarCogIcon } from "@/components/ui/calendar-cog";

const AppEmptyTasks = () => {
  return (
    <div className="flex-col h-full w-full">
      <div className="flex flex-col animate-fade-in items-center justify-center rounded-md border-2 border-dashed border-muted p-4">
        <div className="w-full text-center">
          <CalendarCogIcon
            className="mx-auto h-12 w-12 text-muted-foreground"
            size={56}
          />
        </div>
        <div className="text-center">
          <p className="mt-1 text-sm text-muted-foreground">Create test</p>
        </div>
      </div>
    </div>
  );
};

export default AppEmptyTasks;
