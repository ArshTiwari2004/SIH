import React from 'react';
import ChartCard from '../components/report/Chartcard';
import { researchData } from '../data/dummyData';

function ResearchPublications() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Research & Publications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <ChartCard title="Research Contributions" data={researchData} />
        {/* Add more charts here as needed */}
      </div>
    </div>
  );
}

export default ResearchPublications;
