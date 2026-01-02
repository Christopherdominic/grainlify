import { GitPullRequest, Circle } from 'lucide-react';
import { useTheme } from '../../../../shared/contexts/ThemeContext';
import { Activity } from '../../types';

interface ActivityItemProps {
  activity: Activity;
  index: number;
}

export function ActivityItem({ activity, index }: ActivityItemProps) {
  const { theme } = useTheme();
  return (
    <div
      className={`backdrop-blur-[25px] rounded-[14px] border p-4 hover:border-[#c9983a]/30 hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 group/item cursor-pointer ${
        theme === 'dark'
          ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12]'
          : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.22]'
      }`}
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left: Icon + Number + Title */}
        <div className="flex items-start gap-3 flex-1 min-w-0">
          {/* Type Icon */}
          <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 shadow-[0_3px_12px_rgba(0,0,0,0.2)] ${
            activity.type === 'pr' 
              ? 'bg-[#d4af37]/50' 
              : 'bg-[#c9983a]/50'
          }`}>
            {activity.type === 'pr' ? (
              <GitPullRequest className="w-4 h-4 text-white" strokeWidth={3} />
            ) : (
              <Circle className="w-4 h-4 text-white fill-white" strokeWidth={0} />
            )}
          </div>

          {/* Number Badge */}
          <div className={`px-2.5 py-1 rounded-[6px] shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex-shrink-0 ${
            activity.type === 'pr' 
              ? 'bg-[#d4af37]/50' 
              : 'bg-[#c9983a]/50'
          }`}>
            <span className="text-[13px] font-bold text-white">
              #{activity.number}
            </span>
          </div>

          {/* Title and Label */}
          <div className="flex-1 min-w-0 pt-0.5">
            <h3 className={`text-[14px] font-medium transition-colors mb-1.5 line-clamp-1 ${
              theme === 'dark'
                ? 'text-[#e8dfd0] group-hover/item:text-[#f5ede0]'
                : 'text-[#2d2820] group-hover/item:text-[#4a3f2f]'
            }`}>
              {activity.title}
            </h3>
            
            <div className="flex items-center gap-3">
              {activity.label && (
                <span className="inline-flex px-2.5 py-1 rounded-[6px] bg-gradient-to-br from-[#c9983a]/25 to-[#d4af37]/20 border border-[#c9983a]/40 text-[11px] font-semibold text-[#c9983a] shadow-[0_2px_8px_rgba(201,152,58,0.2)]">
                  {activity.label}
                </span>
              )}
              <span className={`text-[12px] font-medium transition-colors ${
                theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
              }`}>
                {activity.timeAgo}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Review Button */}
        <button className="px-4 py-2 rounded-[10px] backdrop-blur-[25px] bg-gradient-to-br from-[#c9983a]/25 to-[#d4af37]/20 border border-[#c9983a]/40 text-[13px] font-semibold text-[#c9983a] hover:from-[#c9983a]/35 hover:to-[#d4af37]/30 hover:scale-105 hover:shadow-[0_4px_16px_rgba(201,152,58,0.3)] transition-all duration-200 whitespace-nowrap flex-shrink-0">
          Review
        </button>
      </div>
    </div>
  );
}