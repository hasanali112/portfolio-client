import VisitorDashboard from '@/component/VisitorDashboard';

export default function VisitorsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Visitor Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Track and analyze your portfolio visitors
        </p>
      </div>
      
      <VisitorDashboard />
    </div>
  );
}
