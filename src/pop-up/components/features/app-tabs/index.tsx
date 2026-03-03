import { Tabs, TabsList, TabsTrigger } from '@ui/atoms/tabs';

import { TabItem } from '@/types/ui';

type AppTabsProps = {
  tabsData: TabItem[];
  handleTabChange: () => TabItem;
};

function AppTabs({ tabsData }: AppTabsProps) {
  return (
    <Tabs defaultValue={tabsData[0].value as string}>
      <TabsList>
        {tabsData.map((item) => (
          <TabsTrigger key={item.id} value={item.value} onClick={() => item}>
            {item.value}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}

export default AppTabs;
