import ServiceCheckbox from "./ServiceCheckbox";

type ServiceKey = 
  | "multiVendorEcommerce"
  | "singleVendorEcommerce" 
  | "landingPage"
  | "aiIntegratedWebsite"
  | "realEstateWebsite"
  | "portfolioWebsite"
  | "businessWebsite"
  | "blogCmsWebsite"
  | "iosApp"
  | "androidApp"
  | "crossPlatformApp"
  | "progressiveWebApp";

interface ServicesSectionProps {
  selectedServices: Record<ServiceKey, boolean>;
  toggleService: (service: ServiceKey) => void;
}

export default function ServicesSection({ selectedServices, toggleService }: ServicesSectionProps) {
  return (
    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-red-400 text-xl">🎯</span>
        </div>
        <h2 className="text-2xl font-bold">Select Your Services</h2>
      </div>

      <p className="text-gray-400 mb-8">
        Choose the services you need for your project
      </p>

      {/* Web Development */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-blue-400 text-xl">🌐</span>
          <h3 className="text-xl font-semibold">Web Development</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ServiceCheckbox
            label="Multi-vendor Ecommerce"
            checked={selectedServices.multiVendorEcommerce}
            onChange={() => toggleService("multiVendorEcommerce")}
          />
          <ServiceCheckbox
            label="Single Vendor Ecommerce"
            checked={selectedServices.singleVendorEcommerce}
            onChange={() => toggleService("singleVendorEcommerce")}
          />
          <ServiceCheckbox
            label="Landing Page"
            checked={selectedServices.landingPage}
            onChange={() => toggleService("landingPage")}
          />
          <ServiceCheckbox
            label="AI Integrated Website"
            checked={selectedServices.aiIntegratedWebsite}
            onChange={() => toggleService("aiIntegratedWebsite")}
          />
          <ServiceCheckbox
            label="Real Estate Website"
            checked={selectedServices.realEstateWebsite}
            onChange={() => toggleService("realEstateWebsite")}
          />
          <ServiceCheckbox
            label="Portfolio Website"
            checked={selectedServices.portfolioWebsite}
            onChange={() => toggleService("portfolioWebsite")}
          />
          <ServiceCheckbox
            label="Business Website"
            checked={selectedServices.businessWebsite}
            onChange={() => toggleService("businessWebsite")}
          />
          <ServiceCheckbox
            label="Blog/CMS Website"
            checked={selectedServices.blogCmsWebsite}
            onChange={() => toggleService("blogCmsWebsite")}
          />
        </div>
      </div>

      {/* Mobile Development */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-purple-400 text-xl">📱</span>
          <h3 className="text-xl font-semibold">Mobile Development</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <ServiceCheckbox
            label="iOS App"
            checked={selectedServices.iosApp}
            onChange={() => toggleService("iosApp")}
          />
          <ServiceCheckbox
            label="Android App"
            checked={selectedServices.androidApp}
            onChange={() => toggleService("androidApp")}
          />
          <ServiceCheckbox
            label="Cross-Platform App"
            checked={selectedServices.crossPlatformApp}
            onChange={() => toggleService("crossPlatformApp")}
          />
          <ServiceCheckbox
            label="Progressive Web App"
            checked={selectedServices.progressiveWebApp}
            onChange={() => toggleService("progressiveWebApp")}
          />
        </div>
      </div>
    </div>
  );
}
