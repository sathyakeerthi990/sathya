import React from 'react';
import { DoctorCard } from '../components/DoctorCard';
import type { Doctor } from '../types';

const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: 12,
    education: 'MD - Johns Hopkins University',
    availability: 'Mon-Fri, 9AM-5PM'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: 15,
    education: 'MD - Stanford University',
    availability: 'Mon-Thu, 10AM-6PM'
  },
  {
    id: '3',
    name: 'Dr. Emily Martinez',
    specialty: 'Pediatrics',
    imageUrl: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    experience: 8,
    education: 'MD - Harvard Medical School',
    availability: 'Tue-Sat, 9AM-5PM'
  }
];

export function Doctors() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Specialists</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {doctors.map((doctor) => (
          <DoctorCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}