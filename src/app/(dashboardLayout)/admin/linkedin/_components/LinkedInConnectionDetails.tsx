'use client';

import { X, ExternalLink, MessageCircle, Users } from 'lucide-react';
import { LinkedInConnection } from '../page';
import { useSendDM, useStartOutreach } from '@/hooks/useLinkedInConnections';

interface LinkedInConnectionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  connection: LinkedInConnection | null;
}

export default function LinkedInConnectionDetails({
  isOpen,
  onClose,
  connection,
}: LinkedInConnectionDetailsProps) {
  const sendDMMutation = useSendDM();
  const startOutreachMutation = useStartOutreach();

  if (!isOpen || !connection) return null;

  const calculateDaysAgo = (dateString: string) => {
    const createdDate = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - createdDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const daysAgo = calculateDaysAgo(connection.createdAt!);

  const handleSendDM = () => {
    sendDMMutation.mutate(connection._id!, {
      onSuccess: () => {
        // Update local state to reflect changes immediately
        connection.dmStatus = 'sent';
        connection.dmSentDate = new Date().toISOString();
      }
    });
  };

  const handleStartOutreach = () => {
    startOutreachMutation.mutate(connection._id!, {
      onSuccess: () => {
        // Update local state to reflect changes immediately
        connection.outreachStatus = 'in_progress';
        connection.outreachDate = new Date().toISOString();
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 border border-gray-800 rounded-xl w-full max-w-2xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-bold text-white">Connection Details</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Header Section */}
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-700">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
              {connection.name.charAt(0)}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{connection.name}</h3>
              <p className="text-gray-300">{connection.designation}</p>
              <p className="text-sm text-gray-400 mt-1">Day {daysAgo} - Added {daysAgo === 0 ? 'today' : `${daysAgo} days ago`}</p>
              <div className="flex gap-2 mt-2">
                <span className={`px-2 py-1 rounded text-xs ${
                  connection.reqStatus === 'accepted' ? 'bg-green-500/20 text-green-400' :
                  connection.reqStatus === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {connection.reqStatus.toUpperCase()}
                </span>
                <span className={`px-2 py-1 rounded text-xs ${
                  connection.dmStatus === 'replied' ? 'bg-green-500/20 text-green-400' :
                  connection.dmStatus === 'sent' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {connection.dmStatus.replace('_', ' ').toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-gray-300 text-sm">@</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white">{connection.email}</p>
                </div>
              </div>

              {connection.phoneNumber && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-300 text-sm">📞</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">{connection.phoneNumber}</p>
                  </div>
                </div>
              )}

              {connection.website && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <span className="text-gray-300 text-sm">🌐</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Website</p>
                    <a href={connection.website} target="_blank" className="text-blue-400 hover:underline">
                      {connection.website}
                    </a>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">in</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">LinkedIn Profile</p>
                  <a href={connection.link} target="_blank" className="text-blue-400 hover:underline flex items-center gap-1">
                    View Profile <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-3">Timeline</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Connection Added</p>
                    <p className="text-white text-sm">
                      {new Date(connection.createdAt!).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Last Updated</p>
                    <p className="text-white text-sm">
                      {new Date(connection.updatedAt!).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400 text-sm">DM Date</p>
                    <p className="text-white text-sm">
                      {connection.dmSentDate 
                        ? new Date(connection.dmSentDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : 'Not yet'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-gray-400 text-sm">Outreach Date</p>
                    <p className="text-white text-sm">
                      {connection.outreachDate 
                        ? new Date(connection.outreachDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })
                        : 'Not yet'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end p-6 border-t border-gray-800 gap-3">
          <button
            onClick={handleSendDM}
            disabled={sendDMMutation.isPending || connection.dmStatus === 'sent'}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            <MessageCircle size={16} />
            {sendDMMutation.isPending ? 'Sending...' : 'Send DM'}
          </button>
          
          <button
            onClick={handleStartOutreach}
            disabled={startOutreachMutation.isPending}
            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200 disabled:opacity-50 flex items-center gap-2"
          >
            <Users size={16} />
            {startOutreachMutation.isPending ? 'Starting...' : 'Start Outreach'}
          </button>
          
          <button
            onClick={onClose}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
