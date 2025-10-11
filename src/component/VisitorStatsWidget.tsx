'use client';

import { useState, useEffect } from 'react';
import { Card, CardBody } from '@nextui-org/react';
import { getVisitorStats } from '@/hooks/useVisitorTracking';

interface VisitorStats {
  totalVisitors: number;
  todayVisitors: number;
  uniqueVisitors: number;
}

export default function VisitorStatsWidget() {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getVisitorStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch visitor stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    
    // Refresh every 5 minutes
    const interval = setInterval(fetchStats, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <Card>
        <CardBody className="p-4">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-1/2"></div>
          </div>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <CardBody className="p-4">
          <div className="text-sm opacity-90">Total Visitors</div>
          <div className="text-2xl font-bold">{stats?.totalVisitors || 0}</div>
        </CardBody>
      </Card>

      <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
        <CardBody className="p-4">
          <div className="text-sm opacity-90">Today</div>
          <div className="text-2xl font-bold">{stats?.todayVisitors || 0}</div>
        </CardBody>
      </Card>

      <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
        <CardBody className="p-4">
          <div className="text-sm opacity-90">Unique</div>
          <div className="text-2xl font-bold">{stats?.uniqueVisitors || 0}</div>
        </CardBody>
      </Card>
    </div>
  );
}
