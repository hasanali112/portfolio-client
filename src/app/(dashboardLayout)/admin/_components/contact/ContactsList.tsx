import React from "react";
import { Eye, Mail, Phone, Archive, Trash2, CheckCircle, Reply } from "lucide-react";
import { IContact } from "@/types/contact";

interface ContactsListProps {
  contacts: IContact[];
  onViewDetail: (contact: IContact) => void;
  onMarkAsRead: (id: string) => void;
  onMarkAsReplied: (id: string) => void;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
  isLoading: boolean;
}

const ContactsList: React.FC<ContactsListProps> = ({ 
  contacts, onViewDetail, onMarkAsRead, onMarkAsReplied, onArchive, onDelete, isLoading 
}) => {
  if (isLoading) {
    return (
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 text-center">
        <div className="animate-pulse space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-16 bg-gray-700 rounded"></div>
          ))}
        </div>
      </div>
    );
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'unread': return 'bg-red-500/20 text-red-400';
      case 'read': return 'bg-yellow-500/20 text-yellow-400';
      case 'replied': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-500/20 text-red-400';
      case 'medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Subject</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Priority</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {contacts.map((contact: IContact) => (
              <tr key={contact._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-white">{contact.name}</div>
                    <div className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <Mail className="w-3 h-3" />
                      {contact.email}
                    </div>
                    {contact.phone && (
                      <div className="text-xs text-gray-400 flex items-center gap-1">
                        <Phone className="w-3 h-3" />
                        {contact.phone}
                      </div>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">{contact.subject}</div>
                  <div className="text-xs text-gray-400 mt-1 truncate max-w-xs">
                    {contact.message}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs capitalize ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded text-xs capitalize ${getPriorityColor(contact.priority)}`}>
                    {contact.priority}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white">
                    {new Date(contact.createdAt!).toLocaleDateString()}
                  </div>
                  <div className="text-xs text-gray-400">
                    {new Date(contact.createdAt!).toLocaleTimeString()}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(contact)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    {contact.status === 'unread' && (
                      <button 
                        onClick={() => onMarkAsRead(contact._id!)}
                        className="text-gray-400 hover:text-yellow-400 transition-colors"
                        title="Mark as Read"
                      >
                        <CheckCircle className="w-4 h-4" />
                      </button>
                    )}
                    {contact.status !== 'replied' && (
                      <button 
                        onClick={() => onMarkAsReplied(contact._id!)}
                        className="text-gray-400 hover:text-green-400 transition-colors"
                        title="Mark as Replied"
                      >
                        <Reply className="w-4 h-4" />
                      </button>
                    )}
                    <button 
                      onClick={() => onArchive(contact._id!)}
                      className="text-gray-400 hover:text-orange-400 transition-colors"
                      title="Archive"
                    >
                      <Archive className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(contact._id!)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactsList;
