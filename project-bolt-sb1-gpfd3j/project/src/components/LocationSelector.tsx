import React from 'react';
import { countries, states, districts, localities } from '../data/locations';

interface LocationSelectorProps {
  filters: {
    country: string;
    state: string;
    district: string;
    locality: string;
  };
  onChange: (field: string, value: string) => void;
}

export function LocationSelector({ filters, onChange }: LocationSelectorProps) {
  const filteredStates = states.filter(state => 
    !filters.country || state.parentId === filters.country
  );
  
  const filteredDistricts = districts.filter(district => 
    !filters.state || district.parentId === filters.state
  );
  
  const filteredLocalities = localities.filter(locality => 
    !filters.district || locality.parentId === filters.district
  );

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Country</label>
        <select
          value={filters.country}
          onChange={(e) => onChange('country', e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Country</option>
          {countries.map(country => (
            <option key={country.id} value={country.id}>{country.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">State</label>
        <select
          value={filters.state}
          onChange={(e) => onChange('state', e.target.value)}
          disabled={!filters.country}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select State</option>
          {filteredStates.map(state => (
            <option key={state.id} value={state.id}>{state.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">District</label>
        <select
          value={filters.district}
          onChange={(e) => onChange('district', e.target.value)}
          disabled={!filters.state}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select District</option>
          {filteredDistricts.map(district => (
            <option key={district.id} value={district.id}>{district.name}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Locality</label>
        <select
          value={filters.locality}
          onChange={(e) => onChange('locality', e.target.value)}
          disabled={!filters.district}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          <option value="">Select Locality</option>
          {filteredLocalities.map(locality => (
            <option key={locality.id} value={locality.id}>{locality.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}