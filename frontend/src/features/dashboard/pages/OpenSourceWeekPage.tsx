import { useTheme } from '../../../shared/contexts/ThemeContext';
import { Calendar, CircleDot, Clock } from 'lucide-react';

interface OpenSourceWeekPageProps {
  onEventClick: (id: number, name: string) => void;
}

export function OpenSourceWeekPage({ onEventClick }: OpenSourceWeekPageProps) {
  const { theme } = useTheme();
  const events = [
    {
      id: 1,
      title: 'Open-Source Week Demo',
      contributors: 320,
      applicants: 'NaN/140',
      projects: 0,
      duration: '7 days',
      startDate: '20 Dec 2025',
      startTime: '10:30AM UTC',
      endDate: '3 Jan 2026',
      endTime: '10:30AM UTC',
      location: 'Worldwide',
      status: 'Upcoming soon',
    },
    {
      id: 2,
      title: 'Open-Source Week Summer Edition',
      contributors: 320,
      applicants: 'NaN/140',
      projects: 0,
      duration: '10 days',
      startDate: '30 Dec 2025',
      startTime: '10:30AM UTC',
      endDate: '8 Jan 2026',
      endTime: '10:30AM UTC',
      location: 'Worldwide',
      status: 'Running soon',
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: 'Open-Source Week',
      subtitle: 'Spring Edition',
      contributors: 320,
      applicants: 'NaN/140',
      projects: 0,
      startDate: '28 Oct 2025',
      startTime: '10:30AM UTC',
      endDate: '4 Nov 2025',
      endTime: '10:30AM UTC',
    },
    {
      id: 4,
      title: 'Open-Source Week',
      subtitle: 'Winter Edition',
      contributors: 320,
      applicants: 'NaN/140',
      projects: 0,
      startDate: '23 Aug 2025',
      startTime: '10:30AM UTC',
      endDate: '5 Sep 2025',
      endTime: '10:30AM UTC',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className={`text-[32px] font-bold mb-2 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Open-Source Week</h1>
          <p className={`text-[16px] transition-colors ${
            theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
          }`}>
            Gear-round Hack is a week for developers with focus on rewarding.
          </p>
        </div>
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-[0_8px_24px_rgba(162,121,44,0.3)] border border-white/15">
          <Calendar className="w-10 h-10 text-white" />
        </div>
      </div>

      {/* Main Events */}
      <div className="space-y-5">
        {events.map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event.id, event.title)}
            className={`backdrop-blur-[40px] rounded-[24px] border p-8 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
            }`}
          >
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-md border border-white/10">
                  <Calendar className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className={`text-[22px] font-bold mb-2 transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>{event.title}</h3>
                  <span className={`px-3 py-1.5 rounded-[10px] text-[12px] font-semibold ${
                    theme === 'dark'
                      ? 'bg-green-500/30 border border-green-500/50 text-green-300'
                      : 'bg-green-500/20 border border-green-600/30 text-green-800'
                  }`}>
                    {event.status}
                  </span>
                </div>
              </div>
              <button className="px-6 py-3 bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white rounded-[14px] font-semibold text-[14px] shadow-[0_6px_20px_rgba(162,121,44,0.35)] hover:shadow-[0_8px_24px_rgba(162,121,44,0.4)] transition-all border border-white/10">
                Join the Open-Source Week
              </button>
            </div>

            <div className="grid grid-cols-4 gap-8 mb-6">
              <div>
                <div className={`text-[12px] mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Contributors</div>
                <div className={`text-[28px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.contributors}</div>
              </div>
              <div>
                <div className={`text-[12px] mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Applicants</div>
                <div className={`text-[28px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.applicants}</div>
              </div>
              <div>
                <div className={`text-[12px] mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Projects</div>
                <div className={`text-[28px] font-bold flex items-center space-x-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>
                  <CircleDot className="w-6 h-6 text-[#c9983a]" />
                  <span>{event.projects}</span>
                </div>
              </div>
              <div>
                <div className={`text-[12px] mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Left</div>
                <div className={`text-[28px] font-bold flex items-center space-x-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>
                  <Clock className="w-6 h-6 text-[#c9983a]" />
                  <span>{event.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-white/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className={`text-[12px] mb-1 transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>Start date</div>
                  <div className={`text-[15px] font-semibold transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>{event.startDate}</div>
                  <div className={`text-[12px] transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>{event.startTime}</div>
                </div>
                <div>
                  <div className={`text-[12px] mb-1 transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>End date</div>
                  <div className={`text-[15px] font-semibold transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>{event.endDate}</div>
                  <div className={`text-[12px] transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>{event.endTime}</div>
                </div>
              </div>
              <div>
                <div className={`text-[12px] mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Location</div>
                <div className={`text-[15px] font-semibold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {pastEvents.map((event) => (
          <div
            key={event.id}
            onClick={() => onEventClick(event.id, `${event.title} ${event.subtitle || ''}`)}
            className={`backdrop-blur-[40px] rounded-[20px] border p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)] transition-all cursor-pointer ${
              theme === 'dark'
                ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
            }`}
          >
            <div className="flex items-start space-x-3 mb-5">
              <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-md border border-white/10">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className={`text-[18px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.title}</h4>
                <h5 className={`text-[14px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>{event.subtitle}</h5>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-5">
              <div>
                <div className={`text-[16px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.contributors}</div>
                <div className={`text-[11px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Contributors</div>
              </div>
              <div>
                <div className={`text-[16px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.applicants}</div>
                <div className={`text-[11px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Applicants</div>
              </div>
              <div>
                <div className={`text-[16px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{event.projects}</div>
                <div className={`text-[11px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Projects</div>
              </div>
            </div>

            <div className={`flex items-center justify-between text-[12px] pt-4 border-t border-white/10 transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              <div>
                <div className="mb-0.5">{event.startDate}</div>
                <div className={theme === 'dark' ? 'text-[#b8a898]' : 'text-[#8b7a6a]'}>{event.startTime}</div>
              </div>
              <div className="text-right">
                <div className="mb-0.5">{event.endDate}</div>
                <div className={theme === 'dark' ? 'text-[#b8a898]' : 'text-[#8b7a6a]'}>{event.endTime}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}