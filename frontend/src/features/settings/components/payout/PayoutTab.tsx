import { useState, useEffect } from 'react';
import { Info } from 'lucide-react';
import { payoutProjectsData } from '../../data/payoutProjectsData';
import { SkeletonLoader } from '../shared/SkeletonLoader';
import { useTheme } from '../../../../shared/contexts/ThemeContext';

export function PayoutTab() {
  const { theme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="space-y-6">
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h2 className={`text-[28px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
        }`}>Payout preferences</h2>
        <p className={`text-[14px] mb-8 transition-colors ${
          theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
        }`}>
          Connect your billing profile to the projects you contribute to for receiving rewards.
        </p>

        {isLoading ? (
          // Loading State
          <div className="space-y-4">
            <SkeletonLoader className="h-[300px] w-full" />
          </div>
        ) : (
          <>
            {/* Project List */}
            <div className="space-y-4 mb-6">
              {/* Header Row */}
              <div className="grid grid-cols-2 gap-4 pb-3 border-b border-white/10">
                <div className={`text-[13px] font-semibold transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>Project</div>
                <div className={`text-[13px] font-semibold transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>Billing profile</div>
              </div>

              {/* Project Rows */}
              {payoutProjectsData.map((project) => (
                <div key={project.id} className="grid grid-cols-2 gap-4 items-center py-4 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c9983a]/20 to-[#a67c2e]/20 flex items-center justify-center border border-[#c9983a]/30">
                      <span className={`text-[14px] font-bold transition-colors ${
                        theme === 'dark' ? 'text-[#d4c5b0]' : 'text-[#2d2820]'
                      }`}>{project.initial}</span>
                    </div>
                    <span className={`text-[15px] font-medium transition-colors ${
                      theme === 'dark' ? 'text-[#d4c5b0]' : 'text-[#2d2820]'
                    }`}>{project.name}</span>
                  </div>
                  <div className="flex items-center">
                    <select className={`w-full max-w-[300px] px-4 py-2.5 rounded-[12px] backdrop-blur-[30px] border text-[14px] focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all ${
                      theme === 'dark'
                        ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5]'
                        : 'bg-white/[0.15] border-white/25 text-[#2d2820]'
                    }`}>
                      <option value="">Select billing profile</option>
                      <option value="default">Default Profile</option>
                      <option value="personal">Personal Profile</option>
                      <option value="business">Business Profile</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Message */}
            <div className={`flex items-start gap-2 p-4 rounded-[14px] backdrop-blur-[30px] border transition-colors ${
              theme === 'dark'
                ? 'bg-[#3d342c]/[0.3] border-white/10'
                : 'bg-white/[0.08] border-white/15'
            }`}>
              <Info className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
              <p className={`text-[13px] transition-colors ${
                theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
              }`}>
                Only projects for which you have already received rewards will appear here.
              </p>
            </div>
          </>
        )}
      </div>

      {/* Save Button */}
      {!isLoading && (
        <div className="flex justify-end">
          <button className="px-8 py-3 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[15px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all border border-white/10">
            Save
          </button>
        </div>
      )}
    </div>
  );
}