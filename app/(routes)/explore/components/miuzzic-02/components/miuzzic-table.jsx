import { useCallback} from "react";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  User,
 
} from "@nextui-org/react";

import { Pause, Play } from "lucide-react";

import { columns, users } from "@/lib/data";

export default function MiuziccTable({ setNotifications }) {
  
  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "full", src: user.avatar }}
            description={user.email}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "season":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">{cellValue}</p>
            <p className="text-bold text-sm capitalize text-default-400">
              {user.title}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="relative flex items-center">
            <span className="text-lg cursor-pointer active:opacity-50">
              <Play
                onClick={() =>
                  setNotifications((prev) => [
                    ...prev,
                    { text: `Now playing ${user.title}`, id: Math.random() },
                  ])
                }
              />
            </span>
          </div>
        );
      default:
        return cellValue;
    }
  }, [setNotifications]);

  return (
    <>
    
      <Table
        radius="none"
        hideHeader="true"
        shadow="none"
        isStriped="true"
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </>
  );
}
