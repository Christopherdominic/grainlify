import { BillingProfile } from '../types';

export const initialBillingProfiles: BillingProfile[] = [
  { 
    id: 1, 
    name: 'My Personal Profile', 
    type: 'individual', 
    status: 'verified',
    firstName: 'John',
    lastName: 'Doe',
    address: '123 Main Street',
    city: 'New York',
    postalCode: '10001',
    country: 'United States',
    taxId: '123-45-6789'
  },
  { 
    id: 2, 
    name: 'Company Billing Profile', 
    type: 'organization', 
    status: 'verified',
    firstName: 'Tech Corp',
    lastName: 'Inc.',
    address: '456 Business Ave',
    city: 'San Francisco',
    postalCode: '94102',
    country: 'United States',
    taxId: '98-7654321'
  },
  { 
    id: 3, 
    name: 'Self-Employed Profile', 
    type: 'self-employed', 
    status: 'verified',
    firstName: 'Jane',
    lastName: 'Smith',
    address: '789 Work Street',
    city: 'Austin',
    postalCode: '78701',
    country: 'United States',
    taxId: '456-78-9012'
  },
  { 
    id: 4, 
    name: 'Individual Profile - Needs Verification', 
    type: 'individual', 
    status: 'missing-verification' 
  },
  { 
    id: 5, 
    name: 'Individual Profile - Limit Reached', 
    type: 'individual', 
    status: 'limit-reached' 
  },
];
