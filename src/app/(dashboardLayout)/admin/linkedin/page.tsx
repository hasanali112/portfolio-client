"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Plus } from "lucide-react";
import LinkedInConnectionForm from "./_components/LinkedInConnectionForm";
import EditLinkedInConnectionForm from "./_components/EditLinkedInConnectionForm";
import LinkedInConnectionTable from "./_components/LinkedInConnectionTable";
import LinkedInConnectionDetails from "./_components/LinkedInConnectionDetails";
import CustomPagination from "../_components/CustomPegination/CustomPegination";
import {
  useGetLinkedInConnections,
  useDeleteLinkedInConnection,
} from "@/hooks/useLinkedInConnections";

export interface LinkedInConnection {
  _id?: string;
  name: string;
  designation: string;
  email: string;
  phoneNumber?: string;
  website?: string;
  link: string;
  reqStatus: "pending" | "accepted" | "declined" | "withdrawn";
  dmStatus: "not_sent" | "sent" | "replied" | "no_response";
  dmSentDate?: string;
  outreachStatus?: "not_started" | "in_progress" | "completed" | "paused";
  outreachDate?: string;
  createdAt?: string;
  updatedAt?: string;
}

function LinkedInPageContent() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [editingConnection, setEditingConnection] =
    useState<LinkedInConnection | null>(null);
  const [viewingConnection, setViewingConnection] =
    useState<LinkedInConnection | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();
  
  const searchTerm = searchParams.get('search') || '';
  const reqStatusFilter = searchParams.get('reqStatus') || '';
  const dmStatusFilter = searchParams.get('dmStatus') || '';

  const { data: connectionsData, isLoading } = useGetLinkedInConnections({
    page: searchParams.get('page') ? parseInt(searchParams.get('page')!) : undefined,
    limit: searchParams.get('limit') ? parseInt(searchParams.get('limit')!) : undefined,
    search: searchTerm || undefined,
    reqStatus: reqStatusFilter || undefined,
    dmStatus: dmStatusFilter || undefined,
  });
  const deleteConnectionMutation = useDeleteLinkedInConnection();

  const connections = connectionsData?.data || [];
  const meta = connectionsData?.meta || { page: 1, totalPage: 1 };

  const updateURL = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`?${params.toString()}`);
  };

  const handleViewDetails = (connection: LinkedInConnection) => {
    setViewingConnection(connection);
    setIsDetailsOpen(true);
  };

  const handleEdit = (connection: LinkedInConnection) => {
    setEditingConnection(connection);
    setIsEditFormOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this connection?")) {
      deleteConnectionMutation.mutate(id);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
  };

  const handleEditFormClose = () => {
    setIsEditFormOpen(false);
    setEditingConnection(null);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">LinkedIn Connections</h1>
        <button
          onClick={() => setIsFormOpen(true)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>Add Connection</span>
        </button>
      </div>

      <div className="mb-6 bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-800 p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Search</label>
            <input
              type="text"
              placeholder="Search by name, email, or designation..."
              value={searchTerm}
              onChange={(e) => updateURL('search', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Request Status</label>
            <select
              value={reqStatusFilter}
              onChange={(e) => updateURL('reqStatus', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="pending">Pending</option>
              <option value="accepted">Accepted</option>
              <option value="declined">Declined</option>
              <option value="withdrawn">Withdrawn</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">DM Status</label>
            <select
              value={dmStatusFilter}
              onChange={(e) => updateURL('dmStatus', e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
            >
              <option value="">All Status</option>
              <option value="not_sent">Not Sent</option>
              <option value="sent">Sent</option>
              <option value="replied">Replied</option>
              <option value="no_response">No Response</option>
            </select>
          </div>
        </div>
      </div>

      <LinkedInConnectionTable
        connections={connections}
        loading={isLoading}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onViewDetails={handleViewDetails}
      />

      <CustomPagination 
        totalPages={meta.totalPage} 
        currentPage={meta.page} 
      />

      <LinkedInConnectionForm
        isOpen={isFormOpen}
        onClose={handleFormClose}
      />

      <EditLinkedInConnectionForm
        isOpen={isEditFormOpen}
        onClose={handleEditFormClose}
        connection={editingConnection}
      />

      <LinkedInConnectionDetails
        isOpen={isDetailsOpen}
        onClose={() => setIsDetailsOpen(false)}
        connection={viewingConnection}
      />
    </div>
  );
}

export default function LinkedInPage() {
  return (
    <Suspense fallback={<div className="p-6 text-white">Loading...</div>}>
      <LinkedInPageContent />
    </Suspense>
  );
}
