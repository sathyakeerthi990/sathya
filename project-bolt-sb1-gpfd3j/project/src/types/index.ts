export interface Location {
  id: string;
  name: string;
  type: 'country' | 'state' | 'district' | 'local';
  parentId: string | null;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
  experience: number;
  education: string;
  availability: string;
  locationId: string;
  address: string;
  rating: number;
  consultationFee: number;
}

export interface MedicalConcern {
  id: string;
  symptom: string;
  possibleCauses: string[];
  whenToSeekHelp: string[];
  commonMisconceptions: string[];
  relatedSpecialties: string[];
}

export interface User {
  email: string;
  password: string;
}

export interface SearchFilters {
  country: string;
  state: string;
  district: string;
  locality: string;
  specialty: string;
}