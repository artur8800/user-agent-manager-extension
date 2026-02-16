import { concatStrings } from '@/lib/utils';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/pop-up/components/ui/atoms/table';
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
          {[data[0]].map((item) => (
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
                <span className="truncate text-ellipsis max-w-[330px] inline-block">{item.ua}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default AppDataTable;
