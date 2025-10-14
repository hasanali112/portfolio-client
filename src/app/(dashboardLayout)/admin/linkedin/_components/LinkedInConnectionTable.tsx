"use client";

import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Button,
  Spinner,
} from "@nextui-org/react";
import { Edit, Trash2, ExternalLink, Eye } from "lucide-react";
import { LinkedInConnection } from "../page";

interface LinkedInConnectionTableProps {
  connections: LinkedInConnection[];
  loading: boolean;
  onEdit: (connection: LinkedInConnection) => void;
  onDelete: (id: string) => void;
  onViewDetails: (connection: LinkedInConnection) => void;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "accepted":
    case "replied":
      return "success";
    case "pending":
    case "sent":
      return "warning";
    case "declined":
    case "no_response":
      return "danger";
    case "withdrawn":
    case "not_sent":
      return "default";
    default:
      return "default";
  }
};

const formatStatus = (status: string) => {
  return status.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
};

export default function LinkedInConnectionTable({
  connections,
  loading,
  onEdit,
  onDelete,
  onViewDetails,
}: LinkedInConnectionTableProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 overflow-hidden">
      <Table
        aria-label="LinkedIn connections table"
        classNames={{
          wrapper: "bg-transparent shadow-none",
          th: "bg-gray-800/50 text-gray-300 border-b border-gray-700",
          td: "text-gray-300 border-b border-gray-800/50",
        }}
      >
        <TableHeader>
          <TableColumn>SL</TableColumn>
          <TableColumn>NAME</TableColumn>
          <TableColumn>DESIGNATION</TableColumn>
          <TableColumn>EMAIL</TableColumn>
          <TableColumn>PHONE</TableColumn>
          <TableColumn>WEBSITE</TableColumn>
          <TableColumn>LINKEDIN</TableColumn>
          <TableColumn>REQUEST STATUS</TableColumn>
          <TableColumn>DM STATUS</TableColumn>
          <TableColumn>Send Date</TableColumn>
          <TableColumn>ACTIONS</TableColumn>
        </TableHeader>
        <TableBody emptyContent="No connections found">
          {connections.map((connection, index) => (
            <TableRow key={connection._id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{connection.name}</span>
                </div>
              </TableCell>
              <TableCell>{connection.designation}</TableCell>
              <TableCell>{connection.email}</TableCell>
              <TableCell>{connection.phoneNumber || "N/A"}</TableCell>
              <TableCell>
                {connection.website ? (
                  <a
                    href={connection.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    {connection.website.length > 20
                      ? connection.website.substring(0, 20) + "..."
                      : connection.website}
                  </a>
                ) : (
                  "N/A"
                )}
              </TableCell>
              <TableCell>
                <Button
                  isIconOnly
                  size="sm"
                  variant="light"
                  onPress={() => window.open(connection.link, "_blank")}
                  className="text-blue-400 hover:text-blue-300"
                >
                  <ExternalLink size={16} />
                </Button>
              </TableCell>
              <TableCell>
                <Chip
                  color={getStatusColor(connection.reqStatus)}
                  variant="flat"
                  size="sm"
                >
                  {formatStatus(connection.reqStatus)}
                </Chip>
              </TableCell>
              <TableCell>
                <Chip
                  color={getStatusColor(connection.dmStatus)}
                  variant="flat"
                  size="sm"
                >
                  {formatStatus(connection.dmStatus)}
                </Chip>
              </TableCell>
              <TableCell>
                {new Date(connection.createdAt!).toLocaleDateString()}
              </TableCell>
              <TableCell>
                <div className="flex gap-2">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    onPress={() => onViewDetails(connection)}
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <Eye size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="text-yellow-400 hover:text-yellow-300"
                    onPress={() => onEdit(connection)}
                  >
                    <Edit size={16} />
                  </Button>
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    color="danger"
                    onPress={() => onDelete(connection._id!)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
