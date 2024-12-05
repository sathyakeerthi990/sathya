import React, { useState } from 'react';
import { LocationSelector } from '../components/LocationSelector';
import { SpecialtySelector } from '../components/SpecialtySelector';
import { DoctorCard } from '../components/DoctorCard';
import { SearchFilters } from '../types';
import { HealthConcerns } from '../components/HealthConcerns';

export function DoctorSearch() {
  const [filters, setFilters] = useState<SearchFilters>({
    country: '',
    state: '',
    district: '',
    locality: '',
    specialty: ''
  });

  const handleFilterChange = (field: string, value: string) => {
    setFilters(prev => {
      const newFilters = { ...prev, [field]: value };
      
      // Reset dependent fields
      if (field === 'country') {
        newFilters.state = '';
        newFilters.district = '';
        newFilters.locality = '';
      } else if (field === 'state') {
        newFilters.district = '';
        newFilters.locality = '';
      } else if (field === 'district') {
        newFilters.locality = '';
      }
      
      return newFilters;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Filters Section */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Find Doctors</h2>
            <LocationSelector 
              filters={filters} 
              onChange={handleFilterChange} 
            />
            <div className="mt-4">
              <SpecialtySelector
                value={filters.specialty}
                onChange={(value) => handleFilterChange('specialty', value)}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3 space-y-8">
          {/* Doctor Results */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">Available Doctors</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {/* We'll populate this with filtered doctors */}
            </div>
          </div>

          {/* Health Concerns Section */}
          <HealthConcerns />
        </div>
      </div>
    </div>
  );
}