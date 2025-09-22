import React from "react";
import Image from "next/image";
import { Edit, Trash2, Eye, DollarSign, Clock } from "lucide-react";

interface ServicesListProps {
  services: any[];
  onEdit: (service: any) => void;
  onDelete: (id: string) => void;
  onViewDetail: (service: any) => void;
  isLoading: boolean;
}

const ServicesList: React.FC<ServicesListProps> = ({ services, onEdit, onDelete, onViewDetail, isLoading }) => {
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

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Service</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Pricing</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Duration</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-800">
            {services.map((service: any) => (
              <tr key={service._id} className="hover:bg-gray-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    {service.serviceIcon && (
                      <Image 
                        src={service.serviceIcon} 
                        alt={service.serviceName}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-lg object-cover"
                      />
                    )}
                    <div>
                      <div className="text-sm font-medium text-white">{service.serviceName}</div>
                      <div className="text-xs text-gray-400 mt-1">{service.category}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white flex items-center gap-1">
                    <DollarSign className="w-4 h-4 text-gray-400" />
                    {service.pricing.type === 'Custom' ? 'Custom' : 
                     service.pricing.amount ? `${service.pricing.amount} ${service.pricing.currency}` : 'Contact'}
                    {service.pricing.period && (
                      <span className="text-xs text-gray-400 ml-1">/{service.pricing.period}</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-white flex items-center gap-1">
                    <Clock className="w-4 h-4 text-gray-400" />
                    {service.duration}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex gap-1 flex-wrap">
                    {service.featured && (
                      <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Featured</span>
                    )}
                    {service.popular && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Popular</span>
                    )}
                    {!service.isActive && (
                      <span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">Inactive</span>
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => onViewDetail(service)}
                      className="text-gray-400 hover:text-green-400 transition-colors"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onEdit(service)}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      title="Edit Service"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => onDelete(service._id)}
                      className="text-gray-400 hover:text-red-400 transition-colors"
                      title="Delete Service"
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

export default ServicesList;
