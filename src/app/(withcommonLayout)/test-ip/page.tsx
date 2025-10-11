'use client';

import { useState, useEffect } from 'react';

export default function TestIPPage() {
  const [ipData, setIpData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getIP = async () => {
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        setIpData(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    getIP();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">IP Detection Test</h1>
        
        <div className="bg-gray-800 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Real IP Address:</h2>
          
          {loading ? (
            <div className="animate-pulse">
              <div className="h-8 bg-gray-700 rounded w-48"></div>
            </div>
          ) : (
            <div className="text-2xl font-mono text-blue-400">
              {ipData?.ip || 'Could not detect IP'}
            </div>
          )}
          
          <div className="mt-6 text-sm text-gray-400">
            <p>This IP will be tracked when you visit other pages.</p>
            <p>Check your admin dashboard to see visitor records.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
