import { Tooltip, TooltipContent, TooltipTrigger } from '@/pop-up/components/ui/atoms/tooltip';

function AppTooltip({ originalText, truncateTextClass }: { originalText: string; truncateTextClass?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className={truncateTextClass}>{originalText}</span>
      </TooltipTrigger>
      <TooltipContent align="center" className="max-w-xs text-center">
        <p>{originalText}</p>
      </TooltipContent>
    </Tooltip>
  );
}

export default AppTooltip;
