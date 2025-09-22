"use client";
import React from "react";
import { X, Mail, Phone, Calendar, Tag } from "lucide-react";
import { IContact } from "@/types/contact";

interface ContactDetailModalProps {
  contact: IContact;
  onClose: () => void;
}

const ContactDetailModal: React.FC<ContactDetailModalProps> = ({ contact, onClose }) => {
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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">Contact Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Contact Information</h3>
              <div className="space-y-2">
                <div className="text-white font-medium">{contact.name}</div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Mail className="w-4 h-4" />
                  {contact.email}
                </div>
                {contact.phone && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Phone className="w-4 h-4" />
                    {contact.phone}
                  </div>
                )}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Status & Priority</h3>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <span className={`px-2 py-1 rounded text-xs capitalize ${getStatusColor(contact.status)}`}>
                    {contact.status}
                  </span>
                  <span className={`px-2 py-1 rounded text-xs capitalize ${getPriorityColor(contact.priority)}`}>
                    {contact.priority}
                  </span>
                </div>
                <div className="text-sm text-gray-400 capitalize">
                  Source: {contact.source}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Subject</h3>
            <p className="text-white">{contact.subject}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Message</h3>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-white whitespace-pre-wrap">{contact.message}</p>
            </div>
          </div>

          {contact.tags && contact.tags.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {contact.tags.map((tag, index) => (
                  <span key={index} className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded text-sm flex items-center gap-1">
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {contact.notes && (
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Notes</h3>
              <div className="bg-gray-800 rounded-lg p-4">
                <p className="text-white whitespace-pre-wrap">{contact.notes}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-800">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Received</h3>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                {new Date(contact.createdAt!).toLocaleString()}
              </div>
            </div>
            {contact.repliedAt && (
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Replied</h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(contact.repliedAt).toLocaleString()}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetailModal;
