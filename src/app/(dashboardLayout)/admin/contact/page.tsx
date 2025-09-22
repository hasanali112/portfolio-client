"use client";
import React, { useState } from "react";
import { Mail, MessageSquare, Archive, CheckCircle, Settings } from "lucide-react";
import ContactsList from "../_components/contact/ContactsList";
import ContactDetailModal from "../_components/contact/ContactDetailModal";
import ContactInfoForm from "../_components/contact/ContactInfoForm";
import { useGetContacts, useMarkAsRead, useMarkAsReplied, useArchiveContact, useDeleteContact, useGetContactInfo, useCreateContactInfo, useUpdateContactInfo } from "@/hooks/useContacts";
import { IContact, IContactInfo } from "@/types/contact";

const ContactPage = () => {
  const [viewingContact, setViewingContact] = useState<IContact | undefined>();
  const [showContactInfo, setShowContactInfo] = useState(false);

  const { data: contactsData, isLoading } = useGetContacts();
  const { data: contactInfoData } = useGetContactInfo();
  const markAsReadMutation = useMarkAsRead();
  const markAsRepliedMutation = useMarkAsReplied();
  const archiveMutation = useArchiveContact();
  const deleteMutation = useDeleteContact();
  const createContactInfoMutation = useCreateContactInfo();
  const updateContactInfoMutation = useUpdateContactInfo();

  const contacts = contactsData?.data || [];
  const contactInfo = contactInfoData?.data;

  const unreadCount = contacts.filter((c: IContact) => c.status === 'unread').length;
  const readCount = contacts.filter((c: IContact) => c.status === 'read').length;
  const repliedCount = contacts.filter((c: IContact) => c.status === 'replied').length;

  const handleViewDetail = (contact: IContact) => {
    setViewingContact(contact);
  };

  const handleMarkAsRead = (id: string) => {
    markAsReadMutation.mutate(id);
  };

  const handleMarkAsReplied = (id: string) => {
    markAsRepliedMutation.mutate(id);
  };

  const handleArchive = (id: string) => {
    if (confirm("Are you sure you want to archive this contact?")) {
      archiveMutation.mutate(id);
    }
  };

  const handleDelete = (id: string) => {
    if (confirm("Are you sure you want to delete this contact?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleContactInfoSubmit = (data: IContactInfo) => {
    if (contactInfo?._id) {
      updateContactInfoMutation.mutate({ id: contactInfo._id, data });
    } else {
      createContactInfoMutation.mutate(data);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Contact Management</h1>
          <p className="text-gray-400">Manage contact messages and information.</p>
        </div>
        <button 
          onClick={() => setShowContactInfo(!showContactInfo)}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all duration-200"
        >
          <Settings className="w-4 h-4" />
          <span>{showContactInfo ? 'Hide' : 'Manage'} Contact Info</span>
        </button>
      </div>

      {showContactInfo && (
        <ContactInfoForm
          contactInfo={contactInfo}
          onSubmit={handleContactInfoSubmit}
          isLoading={createContactInfoMutation.isPending || updateContactInfoMutation.isPending}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Total Messages</p>
              <p className="text-2xl font-bold text-white">{contacts.length}</p>
            </div>
            <Mail className="w-8 h-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Unread</p>
              <p className="text-2xl font-bold text-red-400">{unreadCount}</p>
            </div>
            <MessageSquare className="w-8 h-8 text-red-500" />
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Read</p>
              <p className="text-2xl font-bold text-yellow-400">{readCount}</p>
            </div>
            <Archive className="w-8 h-8 text-yellow-500" />
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-400 text-sm">Replied</p>
              <p className="text-2xl font-bold text-green-400">{repliedCount}</p>
            </div>
            <CheckCircle className="w-8 h-8 text-green-500" />
          </div>
        </div>
      </div>

      <ContactsList
        contacts={contacts}
        onViewDetail={handleViewDetail}
        onMarkAsRead={handleMarkAsRead}
        onMarkAsReplied={handleMarkAsReplied}
        onArchive={handleArchive}
        onDelete={handleDelete}
        isLoading={isLoading}
      />

      {viewingContact && (
        <ContactDetailModal
          contact={viewingContact}
          onClose={() => setViewingContact(undefined)}
        />
      )}
    </div>
  );
};

export default ContactPage;
