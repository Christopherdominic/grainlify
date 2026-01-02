import { Circle, AlertCircle, CircleX } from 'lucide-react';
import { BillingProfile } from '../../types';
import { useTheme } from '../../../../shared/contexts/ThemeContext';

interface BillingProfileCardProps {
  profile: BillingProfile;
  onClick: () => void;
}

export function BillingProfileCard({ profile, onClick }: BillingProfileCardProps) {
  const { theme } = useTheme();

  const getStatusBadge = () => {
    switch (profile.status) {
      case 'verified':
        return (
          <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-green-500/10 border border-green-500/30">
            <Circle className="w-4 h-4 text-green-600 fill-green-600" />
            <span className="text-[13px] font-medium text-green-700">Verified</span>
          </div>
        );
      case 'missing-verification':
        return (
          <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#d97706]/10 border border-[#d97706]/30">
            <AlertCircle className="w-4 h-4 text-[#d97706]" />
            <span className="text-[13px] font-medium text-[#d97706]">Missing Verification</span>
          </div>
        );
      case 'limit-reached':
        return (
          <div className="flex items-center gap-2 px-4 py-2 rounded-[12px] bg-[#dc2626]/10 border border-[#dc2626]/30">
            <CircleX className="w-4 h-4 text-[#dc2626]" />
            <span className="text-[13px] font-medium text-[#dc2626]">Individual Limit Reached</span>
          </div>
        );
    }
  };

  const getTypeLabel = () => {
    if (profile.type === 'organization') return 'Company';
    return profile.type.replace('-', ' ');
  };

  return (
    <div
      onClick={onClick}
      className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 hover:border-[#c9983a]/30 transition-all cursor-pointer group ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10 hover:bg-[#2d2820]/[0.5]'
          : 'bg-white/[0.12] border-white/20 hover:bg-white/[0.16]'
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className={`text-[20px] font-bold mb-1 group-hover:text-[#c9983a] transition-colors ${
            theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
          }`}>
            {profile.name}
          </h3>
          <p className={`text-[14px] capitalize transition-colors ${
            theme === 'dark' ? 'text-[#c5b5a2]' : 'text-[#6b5d4d]'
          }`}>{getTypeLabel()}</p>
        </div>
      </div>
      {getStatusBadge()}
    </div>
  );
}