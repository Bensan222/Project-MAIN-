"use client";

import { Fragment, useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationNext,
} from "@/components/ui/pagination";
import { SuspectTableRes } from "@/hooks/api/get-suspects";
import { useDeleteSuspect } from "@/hooks/api/delete-suspect";
import { useDebounce } from "@/hooks/use-debounce";
import {
  getPaginationRowModel,
  getFilteredRowModel,
  getCoreRowModel,
  PaginationState,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { columns } from "./columns";

type SuspectTableProps = {
  data: SuspectTableRes;
};
export function SuspectTable({ data }: SuspectTableProps) {
  const { mutate: deleteSuspect } = useDeleteSuspect();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery);

  const tableItems = data.suspects ?? [];

  const initialPagination = useMemo<PaginationState>(
    () => ({
      pageIndex: data.page ?? 0,
      pageSize: data.limit ?? 10,
    }),
    [],
  );

  // Create a table instance
  const table = useReactTable({
    data: data.suspects,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setSearchQuery,
    initialState: {
      pagination: initialPagination,
    },
    state: {
      globalFilter: searchQuery,
    },
  });

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Suspect Data</h1>
        <div className="flex gap-2">
          <Input
            type="search"
            placeholder="Search by name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Button onClick={handleAddNew}>Add New Suspect</Button>
        </div>
      </div>
      <div className="overflow-auto border rounded-lg">
        <Table>
          <TableHeader>
            <TableRow>
              {table.getHeaderGroups().map((headerGroup) => (
                <Fragment key={headerGroup.id}>
                  {headerGroup.headers.map(
                    (header) =>
                      !header.isPlaceholder && (
                        <TableHead key={header.id}>
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                        </TableHead>
                      ),
                  )}
                </Fragment>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-between items-center mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious onClick={handlePreviousPage} />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">{currentPage}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
