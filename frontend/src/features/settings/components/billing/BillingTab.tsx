import { useState } from 'react';
import { Plus, X, Loader2, AlertCircle, Info } from 'lucide-react';
import { BillingProfile, BillingProfileType, BillingProfileStatus, ProfileDetailTabType, PaymentMethod, Invoice } from '../../types';
import { initialBillingProfiles } from '../../data/billingProfilesData';
import { sampleInvoices } from '../../data/invoicesData';
import { BillingProfileCard } from './BillingProfileCard';
import { PaymentMethodsTab } from './PaymentMethodsTab';
import { InvoicesTab } from './InvoicesTab';
import { SkeletonLoader } from '../shared/SkeletonLoader';
import { useTheme } from '../../../../shared/contexts/ThemeContext';

export function BillingTab() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [profiles, setProfiles] = useState<BillingProfile[]>(initialBillingProfiles);
  const [selectedProfile, setSelectedProfile] = useState<BillingProfile | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [profileType, setProfileType] = useState<BillingProfileType>('individual');
  const [detailTab, setDetailTab] = useState<ProfileDetailTabType>('general');
  const [isVerifying, setIsVerifying] = useState(false);

  const handleCreateProfile = () => {
    if (!profileName.trim()) return;

    const newProfile: BillingProfile = {
      id: Date.now(),
      name: profileName,
      type: profileType,
      status: 'missing-verification',
    };

    setProfiles([...profiles, newProfile]);
    setShowModal(false);
    setProfileName('');
    setProfileType('individual');
  };

  const handleVerifyKYC = () => {
    if (!selectedProfile) return;

    setIsVerifying(true);

    setTimeout(() => {
      const updatedProfiles = profiles.map(profile => {
        if (profile.id === selectedProfile.id) {
          return {
            ...profile,
            status: 'verified' as BillingProfileStatus,
            firstName: 'Alex',
            lastName: 'Johnson',
            address: '321 Verified Lane',
            city: 'Los Angeles',
            postalCode: '90001',
            country: 'United States',
            taxId: '555-66-7777'
          };
        }
        return profile;
      });

      setProfiles(updatedProfiles);
      setSelectedProfile(updatedProfiles.find(p => p.id === selectedProfile.id) || null);
      setIsVerifying(false);
    }, 2000);
  };

  // Payment methods handlers
  const handleAddPaymentMethod = (method: PaymentMethod) => {
    if (!selectedProfile) return;

    const updatedProfile = {
      ...selectedProfile,
      paymentMethods: [...(selectedProfile.paymentMethods || []), method],
    };

    const updatedProfiles = profiles.map(p => 
      p.id === selectedProfile.id ? updatedProfile : p
    );

    setProfiles(updatedProfiles);
    setSelectedProfile(updatedProfile);
  };

  const handleRemovePaymentMethod = (methodId: number) => {
    if (!selectedProfile) return;

    const updatedProfile = {
      ...selectedProfile,
      paymentMethods: (selectedProfile.paymentMethods || []).filter(m => m.id !== methodId),
    };

    const updatedProfiles = profiles.map(p => 
      p.id === selectedProfile.id ? updatedProfile : p
    );

    setProfiles(updatedProfiles);
    setSelectedProfile(updatedProfile);
  };

  const handleSetDefaultPaymentMethod = (methodId: number) => {
    if (!selectedProfile) return;

    const updatedProfile = {
      ...selectedProfile,
      paymentMethods: (selectedProfile.paymentMethods || []).map(m => ({
        ...m,
        isDefault: m.id === methodId,
      })),
    };

    const updatedProfiles = profiles.map(p => 
      p.id === selectedProfile.id ? updatedProfile : p
    );

    setProfiles(updatedProfiles);
    setSelectedProfile(updatedProfile);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SkeletonLoader className="h-[180px]" />
        <SkeletonLoader className="h-[180px]" />
        <SkeletonLoader className="h-[180px]" />
      </div>
    );
  }

  if (selectedProfile) {
    // Profile Detail View
    return (
      <div className="space-y-6">
        {/* Back Button */}
        <button
          onClick={() => setSelectedProfile(null)}
          className={`flex items-center gap-2 hover:text-[#c9983a] transition-colors ${
            theme === 'dark' ? 'text-[#d4c5b0]' : 'text-[#2d2820]'
          }`}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="text-[15px] font-medium">Back to billing profiles</span>
        </button>

        {/* Profile Header */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-[#2d2820]/[0.4] border-white/10'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className={`text-[28px] font-bold mb-2 transition-colors ${
                theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
              }`}>{selectedProfile.name}</h2>
              <p className={`text-[14px] capitalize transition-colors ${
                theme === 'dark' ? 'text-[#c5b5a2]' : 'text-[#6b5d4d]'
              }`}>
                {selectedProfile.type === 'organization' ? 'Company' : selectedProfile.type.replace('-', ' ')}
              </p>
              <p className={`text-[13px] mt-2 transition-colors ${
                theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
              }`}>
                As an individual, when you reach the annual reward amount limited by your tax residency you'll need to create a dedicated entity.
              </p>
            </div>
            
            {/* Reward Limit */}
            <div className="text-right">
              <div className={`text-[24px] font-bold transition-colors ${
                theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
              }`}>5000.00 USD</div>
              <div className={`text-[13px] transition-colors ${
                theme === 'dark' ? 'text-[#c5b5a2]' : 'text-[#6b5d4d]'
              }`}>left</div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setDetailTab('general')}
              className={`px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all ${
                detailTab === 'general'
                  ? 'bg-[#a2792c] text-white shadow-[0_4px_16px_rgba(162,121,44,0.25)]'
                  : theme === 'dark'
                    ? 'text-[#d4c5b0] hover:bg-white/[0.1]'
                    : 'text-[#6b5d4d] hover:bg-white/[0.1]'
              }`}
            >
              General Information
            </button>
            <button
              onClick={() => setDetailTab('payment')}
              className={`px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all ${
                detailTab === 'payment'
                  ? 'bg-[#a2792c] text-white shadow-[0_4px_16px_rgba(162,121,44,0.25)]'
                  : theme === 'dark'
                    ? 'text-[#d4c5b0] hover:bg-white/[0.1]'
                    : 'text-[#6b5d4d] hover:bg-white/[0.1]'
              }`}
            >
              Payment Methods
            </button>
            <button
              onClick={() => setDetailTab('invoices')}
              className={`px-5 py-2.5 rounded-[12px] text-[14px] font-medium transition-all ${
                detailTab === 'invoices'
                  ? 'bg-[#a2792c] text-white shadow-[0_4px_16px_rgba(162,121,44,0.25)]'
                  : theme === 'dark'
                    ? 'text-[#d4c5b0] hover:bg-white/[0.1]'
                    : 'text-[#6b5d4d] hover:bg-white/[0.1]'
              }`}
            >
              Invoices
            </button>
          </div>
        </div>

        {/* General Information Tab */}
        {detailTab === 'general' && (
          <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
            theme === 'dark'
              ? 'bg-[#2d2820]/[0.4] border-white/10'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-[20px] font-bold transition-colors ${
                theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
              }`}>General Information</h3>
              
              {/* Status Badge */}
              {selectedProfile.status === 'missing-verification' && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#d97706]/10 border border-[#d97706]/30">
                  <AlertCircle className="w-4 h-4 text-[#d97706]" />
                  <span className="text-[13px] font-medium text-[#d97706]">Missing Verification</span>
                </div>
              )}
              
              {selectedProfile.status === 'limit-reached' && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#dc2626]/10 border border-[#dc2626]/30">
                  <AlertCircle className="w-4 h-4 text-[#dc2626]" />
                  <span className="text-[13px] font-medium text-[#dc2626]">Individual Limit Reached</span>
                </div>
              )}
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  {selectedProfile.type === 'organization' ? 'Company Name' : 'First Name'}
                </label>
                <input
                  type="text"
                  value={selectedProfile.firstName || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* Last Name */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  {selectedProfile.type === 'organization' ? 'Legal Form' : 'Last Name'}
                </label>
                <input
                  type="text"
                  value={selectedProfile.lastName || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* Address */}
              <div className="md:col-span-2">
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>Address</label>
                <input
                  type="text"
                  value={selectedProfile.address || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* City */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>City</label>
                <input
                  type="text"
                  value={selectedProfile.city || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* Postal Code */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>Postal Code</label>
                <input
                  type="text"
                  value={selectedProfile.postalCode || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* Country */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>Country</label>
                <input
                  type="text"
                  value={selectedProfile.country || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>

              {/* Tax ID */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  {selectedProfile.type === 'organization' ? 'Company ID Number' : 'Tax ID'}
                </label>
                <input
                  type="text"
                  value={selectedProfile.taxId || ''}
                  placeholder={selectedProfile.status === 'verified' ? '' : 'Will be filled after KYC'}
                  readOnly
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] transition-colors ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50'
                  }`}
                />
              </div>
            </div>

            {/* Verify KYC Button */}
            {selectedProfile.status === 'missing-verification' && (
              <div className="mt-8 flex items-center gap-4">
                <button
                  onClick={handleVerifyKYC}
                  disabled={isVerifying}
                  className="px-8 py-3 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[15px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {isVerifying ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Verifying KYC...
                    </>
                  ) : (
                    'Verify KYC'
                  )}
                </button>
                {isVerifying && (
                  <span className={`text-[14px] transition-colors ${
                    theme === 'dark' ? 'text-[#c5b5a2]' : 'text-[#6b5d4d]'
                  }`}>Please wait while we verify your identity...</span>
                )}
              </div>
            )}

            {/* Info Message for Verified Profiles */}
            {selectedProfile.status === 'verified' && (
              <div className="mt-6 flex items-start gap-2 p-4 rounded-[14px] backdrop-blur-[30px] bg-[#c9983a]/10 border border-[#c9983a]/20">
                <Info className="w-5 h-5 text-[#c9983a] flex-shrink-0 mt-0.5" />
                <p className={`text-[13px] transition-colors ${
                  theme === 'dark' ? 'text-[#c5b5a2]' : 'text-[#6b5d4d]'
                }`}>
                  This profile has been verified. All information is populated from your government ID.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Payment Methods Tab */}
        {detailTab === 'payment' && (
          <PaymentMethodsTab
            paymentMethods={selectedProfile.paymentMethods || []}
            onAddPaymentMethod={handleAddPaymentMethod}
            onRemovePaymentMethod={handleRemovePaymentMethod}
            onSetDefault={handleSetDefaultPaymentMethod}
          />
        )}

        {/* Invoices Tab */}
        {detailTab === 'invoices' && (
          <InvoicesTab invoices={sampleInvoices} />
        )}
      </div>
    );
  }

  // Profile List View
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-[28px] font-bold mb-2 transition-colors ${
            theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
          }`}>Billing Profiles</h2>
          <p className={`text-[14px] transition-colors ${
            theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
          }`}>Manage your billing profiles and payment information.</p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="px-6 py-3 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[15px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all border border-white/10 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          New Profile
        </button>
      </div>

      {/* Profile Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {profiles.map((profile) => (
          <BillingProfileCard
            key={profile.id}
            profile={profile}
            onClick={() => setSelectedProfile(profile)}
          />
        ))}
      </div>

      {/* Create Profile Modal */}
      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={() => setShowModal(false)} />
          
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-[#d4c5b0] rounded-[24px] border-2 border-white/40 shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-[101] p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[20px] font-bold text-[#2d2820]">Create Billing Profile</h3>
              <button onClick={() => setShowModal(false)} className="w-8 h-8 rounded-[10px] bg-white/30 hover:bg-white/50 border border-white/40 flex items-center justify-center transition-all">
                <X className="w-4 h-4 text-[#7a6b5a]" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-[14px] font-semibold text-[#2d2820] mb-2">Profile Name</label>
                <input
                  type="text"
                  value={profileName}
                  onChange={(e) => setProfileName(e.target.value)}
                  placeholder="Enter profile name"
                  className="w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] bg-white/[0.15] border border-white/25 text-[#2d2820] placeholder-[#7a6b5a] focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px]"
                />
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#2d2820] mb-2">Profile Type</label>
                <select
                  value={profileType}
                  onChange={(e) => setProfileType(e.target.value as BillingProfileType)}
                  className="w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] bg-white/[0.15] border border-white/25 text-[#2d2820] focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px]"
                >
                  <option value="individual">Individual</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="organization">Organization</option>
                </select>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="flex-1 px-6 py-3 rounded-[12px] backdrop-blur-[30px] bg-white/[0.2] border border-white/30 text-[#2d2820] font-medium text-[14px] hover:bg-white/[0.25] transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleCreateProfile}
                className="flex-1 px-6 py-3 rounded-[12px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[14px] shadow-[0_4px_16px_rgba(162,121,44,0.3)] hover:shadow-[0_6px_20px_rgba(162,121,44,0.4)] transition-all border border-white/10"
              >
                Create
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}