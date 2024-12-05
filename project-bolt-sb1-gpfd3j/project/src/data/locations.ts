export const countries = [
  { id: 'in', name: 'India', type: 'country', parentId: null },
  { id: 'us', name: 'United States', type: 'country', parentId: null }
];

export const states = [
  { id: 'in-mh', name: 'Maharashtra', type: 'state', parentId: 'in' },
  { id: 'in-dl', name: 'Delhi', type: 'state', parentId: 'in' },
  { id: 'us-ny', name: 'New York', type: 'state', parentId: 'us' },
  { id: 'us-ca', name: 'California', type: 'state', parentId: 'us' }
];

export const districts = [
  { id: 'in-mh-mu', name: 'Mumbai', type: 'district', parentId: 'in-mh' },
  { id: 'in-mh-pu', name: 'Pune', type: 'district', parentId: 'in-mh' },
  { id: 'us-ny-ny', name: 'New York City', type: 'district', parentId: 'us-ny' }
];

export const localities = [
  { id: 'in-mh-mu-an', name: 'Andheri', type: 'local', parentId: 'in-mh-mu' },
  { id: 'in-mh-mu-bk', name: 'Bandra Kurla', type: 'local', parentId: 'in-mh-mu' },
  { id: 'us-ny-ny-ma', name: 'Manhattan', type: 'local', parentId: 'us-ny-ny' }
];