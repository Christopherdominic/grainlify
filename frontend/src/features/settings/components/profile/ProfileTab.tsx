import { Github, User, Upload, Link as LinkIcon } from 'lucide-react';
import { useTheme } from '../../../../shared/contexts/ThemeContext';

export function ProfileTab() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h2 className={`text-[28px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
        }`}>Profile</h2>
        <p className={`text-[14px] transition-colors ${
          theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
        }`}>You can edit all your information here.</p>
      </div>

      {/* GitHub Account Section */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h3 className={`text-[20px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
        }`}>GitHub account</h3>
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
        }`}>
          To change your username or email, edit your account on Github, then resync your account.
        </p>

        <div className={`flex items-center justify-between p-4 rounded-[16px] backdrop-blur-[30px] border transition-colors ${
          theme === 'dark'
            ? 'bg-[#3d342c]/[0.4] border-white/15'
            : 'bg-white/[0.15] border-white/25'
        }`}>
          <span className={`text-[15px] font-medium transition-colors ${
            theme === 'dark' ? 'text-[#d4c5b0]' : 'text-[#2d2820]'
          }`}>undefined / undefined</span>
          <div className="flex items-center gap-3">
            <button className={`px-5 py-2.5 rounded-[12px] backdrop-blur-[30px] border font-medium text-[14px] hover:bg-white/[0.25] transition-all flex items-center gap-2 ${
              theme === 'dark'
                ? 'bg-[#3d342c]/[0.5] border-white/20 text-[#d4c5b0]'
                : 'bg-white/[0.2] border-white/30 text-[#2d2820]'
            }`}>
              <Github className="w-4 h-4" />
              Resync
            </button>
            <button className="px-5 py-2.5 rounded-[12px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-medium text-[14px] shadow-[0_4px_16px_rgba(162,121,44,0.3)] hover:shadow-[0_6px_20px_rgba(162,121,44,0.4)] transition-all border border-white/10">
              Edit
            </button>
          </div>
        </div>
      </div>

      {/* Profile Picture */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h3 className={`text-[16px] font-bold mb-1 transition-colors ${
          theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
        }`}>Profile Picture</h3>
        <p className={`text-[13px] mb-5 transition-colors ${
          theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
        }`}>SVG, PNG, JPG or GIF</p>

        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-md border border-white/15">
            <User className="w-8 h-8 text-white" />
          </div>
          <button className={`px-5 py-2.5 rounded-[12px] backdrop-blur-[30px] border font-medium text-[14px] hover:bg-white/[0.2] transition-all flex items-center gap-2 ${
            theme === 'dark'
              ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#d4c5b0]'
              : 'bg-white/[0.15] border-white/25 text-[#2d2820]'
          }`}>
            <Upload className="w-4 h-4" />
            Update
          </button>
        </div>
      </div>

      {/* Personal Information */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>First Name</label>
            <input
              type="text"
              placeholder="Enter your first name"
              className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                theme === 'dark'
                  ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                  : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
              }`}
            />
          </div>

          {/* Last Name */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Last Name</label>
            <input
              type="text"
              placeholder="Enter your last name"
              className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                theme === 'dark'
                  ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                  : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
              }`}
            />
          </div>

          {/* Location */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Location</label>
            <input
              type="text"
              placeholder="Enter your location"
              className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                theme === 'dark'
                  ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                  : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
              }`}
            />
          </div>

          {/* Website */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Website</label>
            <input
              type="text"
              placeholder="Enter your website"
              className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                theme === 'dark'
                  ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                  : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
              }`}
            />
          </div>
        </div>

        {/* Bio */}
        <div className="mt-6">
          <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
            theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
          }`}>Bio</label>
          <textarea
            placeholder="Enter your bio"
            rows={4}
            className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] resize-none ${
              theme === 'dark'
                ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
            }`}
          />
        </div>
      </div>

      {/* Contact Information */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-[#2d2820]/[0.4] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h3 className={`text-[20px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
        }`}>Contact Information</h3>
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
        }`}>
          Please enter only your social networks handle (no links, no @ needed).
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Telegram */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Telegram</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your telegram handle"
                className={`w-full px-4 py-3 pr-10 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                  theme === 'dark'
                    ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                    : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
                }`}
              />
              <LinkIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
            </div>
          </div>

          {/* LinkedIn */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>LinkedIn</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your linkedin handle"
                className={`w-full px-4 py-3 pr-10 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                  theme === 'dark'
                    ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                    : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
                }`}
              />
              <LinkIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
            </div>
          </div>

          {/* WhatsApp */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>WhatsApp</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your whatsApp handle"
                className={`w-full px-4 py-3 pr-10 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                  theme === 'dark'
                    ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                    : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
                }`}
              />
              <LinkIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
            </div>
          </div>

          {/* Twitter */}
          <div>
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Twitter</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your twitter handle"
                className={`w-full px-4 py-3 pr-10 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                  theme === 'dark'
                    ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                    : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
                }`}
              />
              <LinkIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
            </div>
          </div>

          {/* Discord - Full Width */}
          <div className="md:col-span-2">
            <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
            }`}>Discord</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Enter your discord handle"
                className={`w-full px-4 py-3 pr-10 rounded-[14px] backdrop-blur-[30px] border focus:outline-none focus:bg-white/[0.2] focus:border-[#c9983a]/30 transition-all text-[14px] ${
                  theme === 'dark'
                    ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]'
                    : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]'
                }`}
              />
              <LinkIcon className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${
                theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#7a6b5a]'
              }`} />
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button className="px-8 py-3 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[15px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all border border-white/10">
          Save
        </button>
      </div>
    </div>
  );
}