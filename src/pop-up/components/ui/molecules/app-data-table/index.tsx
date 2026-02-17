import SelectUserAgent from '@/pop-up/components/features/select-user-agent';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/pop-up/components/ui/atoms/table';
import AppTooltip from '@/pop-up/components/ui/molecules/app-tooltip';
import { concatStrings } from '@/shared/utils';
import UserAgentItem from '@/types/ua';

function AppDataTable({ data }: { data: UserAgentItem[] }) {
  return (
    <div className="p-4  overflow-x-hidden [&>div]:overflow-x-hidden [&>div]:border [&>div]:border-solid [&>div]:border-primary/20 [&>div]:rounded-sm">
      <Table className="text-xs overflow-x-hidden  table-fixed">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[40px] font-bold">#</TableHead>
            <TableHead className="w-[60px] font-bold">Active</TableHead>
            <TableHead className="w-[200px] font-bold">Device</TableHead>
            <TableHead className="w-[360px]">User-Agent</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="overflow-y-auto max-h-[300px] block w-[668px]">
          {data.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell className="font-small w-[40px]">
                <span>{index + 1}</span>
              </TableCell>
              <TableCell className="font-small w-[60px]">
                <SelectUserAgent id={item.id} isSelected={item.isActive} />
              </TableCell>
              <TableCell className="font-small w-[200px]">
                <span>
                  {concatStrings(' / ', item.browser?.name, item.device?.model, item.os?.name, item.os?.version)}
                </span>
              </TableCell>
              <TableCell className="text-left w-[350px]">
                <AppTooltip
                  originalText={item.ua}
                  truncateTextClass="max-w-[350px] line-clamp-2 text-ellipsis cursor-pointer break-all"
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
