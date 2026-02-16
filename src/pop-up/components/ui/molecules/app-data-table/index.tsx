import { concatStrings } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/pop-up/components/ui/atoms/table';
import AppTooltip from '@/pop-up/components/ui/molecules/app-tooltip';
import UserAgentItem from '@/types/ua';

function AppDataTable({ data }: { data: UserAgentItem[] }) {
  console.log('Rendering AppDataTable with data:', data);

  return (
    <div className="p-4">
      <Table className="text-xs table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Browser</TableHead>
            <TableHead className="w-[80px]">Device</TableHead>
            <TableHead className="w-[100px]">OS</TableHead>
            <TableHead className="w-[360px]">User-Agent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-small">
                <span>{concatStrings(item.browser?.name)}</span>
              </TableCell>
              <TableCell>
                <span>{concatStrings(item.device?.model)}</span>
              </TableCell>
              <TableCell>
                <span>{concatStrings(item.os?.version, item.os?.name)}</span>
              </TableCell>
              <TableCell className="text-left">
                <AppTooltip
                  originalText={item.ua}
                  truncateTextClass="max-w-[330px] truncate inline-block text-ellipsis cursor-pointer"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppDataTable;
