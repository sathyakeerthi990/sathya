import React from 'react';
import { specialties } from '../data/specialties';

interface SpecialtySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

export function SpecialtySelector({ value, onChange }: SpecialtySelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">Specialty</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
      >
        <option value="">All Specialties</option>
        {specialties.map(specialty => (
          <option key={specialty.id} value={specialty.id}>
            {specialty.name}
          </option>
        ))}
      </select>
    </div>
  );
}