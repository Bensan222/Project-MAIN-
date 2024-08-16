import { Suspect } from "@prisma/client";
import { createColumnHelper } from "@tanstack/react-table";

// This is a helper function that will help us create columns.
const columnHelper = createColumnHelper<Suspect>();

export const columns = [
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("address", {
    header: "Address",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("stateOfOrigin", {
    header: "State of Origin",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("nationality", {
    header: "Nationality",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("gender", {
    header: "Gender",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("age", {
    header: "Age",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("phoneNumber", {
    header: "Phone Number",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("crimeCommitted", {
    header: "Crime Committed",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("penalty", {
    header: "Penalty",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("incidentLocation", {
    header: "Incident Location",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("reportedTime", {
    header: "Reported Time",
    cell: (info) => new Date(info.getValue()).toLocaleString(), // Format the date
  }),
  columnHelper.accessor("dateOfArrest", {
    header: "Date of Arrest",
    cell: (info) => new Date(info.getValue()).toLocaleString(), // Format the date
  }),
  columnHelper.accessor("arrestedBy", {
    header: "Arrested By",
    cell: (info) => info.getValue(),
  }),
];
