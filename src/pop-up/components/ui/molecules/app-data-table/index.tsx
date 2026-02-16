import { concatStrings } from '@/shared/utils';
import SelectUserAgent from '@/pop-up/components/features/select-user-agent';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/pop-up/components/ui/atoms/table';
import AppTooltip from '@/pop-up/components/ui/molecules/app-tooltip';
import UserAgentItem from '@/types/ua';

function AppDataTable({ data }: { data: UserAgentItem[] }) {
  return (
    <div className="p-4">
      <Table className="text-xs table-fixed overflow-hidden">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px] font-bold">-</TableHead>
            <TableHead className="w-[40px] font-bold">#</TableHead>
            <TableHead className="w-[100px] font-bold">Browser</TableHead>
            <TableHead className="w-[80px] font-bold">Device</TableHead>
            <TableHead className="w-[80px] font-bold">OS</TableHead>
            <TableHead className="w-[290px]">User-Agent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-small">
                <span>{index + 1}</span>
              </TableCell>
              <TableCell className="font-small">
                <SelectUserAgent />
              </TableCell>
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
                  truncateTextClass="max-w-[290px] truncate inline-block text-ellipsis cursor-pointer"
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
