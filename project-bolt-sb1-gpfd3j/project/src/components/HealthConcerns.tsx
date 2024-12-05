import React from 'react';
import { MedicalConcern } from '../types';

const commonConcerns: MedicalConcern[] = [
  {
    id: '1',
    symptom: 'Persistent Headache',
    possibleCauses: ['Tension', 'Migraine', 'Dehydration', 'Eye strain'],
    whenToSeekHelp: [
      'Headache is severe or sudden',
      'Accompanied by fever',
      'Causes vision problems'
    ],
    commonMisconceptions: [
      'All headaches are migraines',
      'Headaches always need medication'
    ],
    relatedSpecialties: ['neuro']
  },
  {
    id: '2',
    symptom: 'Chest Pain',
    possibleCauses: ['Anxiety', 'Muscle strain', 'Heartburn', 'Heart problems'],
    whenToSeekHelp: [
      'Pain is severe or crushing',
      'Accompanied by shortness of breath',
      'Radiates to arm or jaw'
    ],
    commonMisconceptions: [
      'All chest pain is heart-related',
      'Young people cannot have heart problems'
    ],
    relatedSpecialties: ['cardio']
  }
];

export function HealthConcerns() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Common Health Concerns</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {commonConcerns.map(concern => (
          <div key={concern.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {concern.symptom}
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700">Possible Causes:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {concern.possibleCauses.map((cause, index) => (
                    <li key={index}>{cause}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">When to Seek Help:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {concern.whenToSeekHelp.map((help, index) => (
                    <li key={index}>{help}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-medium text-gray-700">Common Misconceptions:</h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {concern.commonMisconceptions.map((misconception, index) => (
                    <li key={index}>{misconception}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}