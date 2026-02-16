import { Tooltip, TooltipContent, TooltipTrigger } from '@/pop-up/components/ui/atoms/tooltip';

function AppTooltip({ originalText, truncateTextClass }: { originalText: string; truncateTextClass?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger className={truncateTextClass}>{originalText}</TooltipTrigger>
      <TooltipContent>
        <p>{originalText}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default AppTooltip;
