import { Item, ItemActions, ItemContent, ItemMedia, ItemTitle } from '@/pop-up/components/ui/atoms/item';
import { Button } from '@/pop-up/components/ui/atoms/button';
import { BadgeAlertIcon } from '@/pop-up/components/ui/atoms/badge-alert';

function AppUaInfo({ buttonCallback }: { buttonCallback?: () => void }) {
  return (
    <Item className="flex-col absolute-vertical-center ">
      <div className="flex items-center">
        <ItemMedia variant="icon" className="bg-warning h-10 w-10 [&_svg:not([class*='size-'])]:size-6">
          <BadgeAlertIcon />
        </ItemMedia>
      </div>

      <ItemContent className="text-center">
        <ItemTitle>The default browser User-Agent is being used</ItemTitle>
      </ItemContent>
      <ItemActions>
        <Button onClick={buttonCallback}>Choose user agent</Button>
      </ItemActions>
    </Item>
  );
}

export default AppUaInfo;
