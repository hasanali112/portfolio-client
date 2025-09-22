"use client";
import React from "react";
import { X, DollarSign, Clock, Star, Eye } from "lucide-react";
import Image from "next/image";
import { IService } from "@/types/service";

interface ServiceDetailModalProps {
  service: IService;
  onClose: () => void;
}

const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">{service.serviceName}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.serviceIcon && (
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Service Icon</h3>
                <Image 
                  src={service.serviceIcon} 
                  alt={service.serviceName}
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-lg object-cover"
                />
              </div>
            )}
            {service.serviceImage && (
              <div>
                <h3 className="text-sm font-medium text-gray-300 mb-2">Service Image</h3>
                <Image 
                  src={service.serviceImage} 
                  alt={service.serviceName}
                  width={200}
                  height={120}
                  className="w-48 h-32 rounded-lg object-cover"
                />
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Category</h3>
              <p className="text-white">{service.category}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Duration</h3>
              <div className="flex items-center gap-1 text-white">
                <Clock className="w-4 h-4 text-gray-400" />
                {service.duration}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Pricing</h3>
              <div className="flex items-center gap-1 text-white">
                <DollarSign className="w-4 h-4 text-gray-400" />
                {service.pricing.type === 'Custom' ? 'Custom' : 
                 service.pricing.amount ? `${service.pricing.amount} ${service.pricing.currency}` : 'Contact'}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Description</h3>
            <p className="text-white">{service.description}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Short Description</h3>
            <p className="text-white">{service.shortDescription}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Features</h3>
              <ul className="text-white space-y-1">
                {service.features?.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-gray-300 mb-2">Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {service.technologies?.map((tech, index) => (
                  <span key={index} className="px-2 py-1 bg-gray-800 text-white rounded text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-300 mb-2">Status</h3>
            <div className="flex gap-2">
              {service.featured && (
                <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm flex items-center gap-1">
                  <Star className="w-3 h-3" /> Featured
                </span>
              )}
              {service.popular && (
                <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-sm flex items-center gap-1">
                  <Eye className="w-3 h-3" /> Popular
                </span>
              )}
              <span className={`px-2 py-1 rounded text-sm ${
                service.isActive 
                  ? 'bg-green-500/20 text-green-400' 
                  : 'bg-red-500/20 text-red-400'
              }`}>
                {service.isActive ? 'Active' : 'Inactive'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailModal;
