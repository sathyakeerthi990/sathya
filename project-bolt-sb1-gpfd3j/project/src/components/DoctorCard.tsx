import React from 'react';
import { User } from 'lucide-react';
import type { Doctor } from '../types';

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-w-16 aspect-h-9">
        {doctor.imageUrl ? (
          <img 
            src={doctor.imageUrl} 
            alt={doctor.name} 
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
            <User className="h-20 w-20 text-gray-400" />
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{doctor.name}</h3>
        <p className="text-blue-600 font-medium">{doctor.specialty}</p>
        <div className="mt-2 text-sm text-gray-600">
          <p>Experience: {doctor.experience} years</p>
          <p>Education: {doctor.education}</p>
          <p>Availability: {doctor.availability}</p>
        </div>
        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Book Appointment
        </button>
      </div>
    </div>
  );
}