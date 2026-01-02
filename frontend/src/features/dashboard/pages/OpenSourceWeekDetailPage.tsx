import { useTheme } from '../../../shared/contexts/ThemeContext';
import { ArrowLeft, Calendar, MapPin, ExternalLink, Star, GitFork } from 'lucide-react';
import { useState } from 'react';

interface OpenSourceWeekDetailPageProps {
  eventId: string;
  eventName: string;
  onBack: () => void;
}

export function OpenSourceWeekDetailPage({ eventId, eventName, onBack }: OpenSourceWeekDetailPageProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState(0);
  const [isRegistered, setIsRegistered] = useState(false);

  // Mock data - in real app, this would be fetched based on eventId
  const eventDetails = {
    id: eventId,
    name: eventName,
    icon: 'OSW',
    iconBg: 'from-blue-500 to-purple-600',
    startDate: '26 Dec. 2025',
    startTime: '9:30AM GMT+5:30',
    endDate: '9 Jan. 2026',
    endTime: '9:30AM GMT+5:30',
    location: 'Worldwide',
    registered: 320,
    availableIssues: 48,
    totalIssues: 140,
    projects: 5,
    endsIn: '7 days',
    tabs: ['Overview', 'Projects', 'My applications'],
    links: [
      { name: 'Discord', url: 'discord.gg' },
      { name: 'GitHub', url: 'github.com' },
      { name: 'Twitter', url: 'twitter.com' },
    ],
    description: 'A mock hackathon showcasing featured OSS projects and contributions.',
    guidelines: [
      'To keep things fair and spam-free, we\'re limiting applications to 10 issues at a time.',
      'Pick wisely – Only apply if you can actually solve it.',
      'Add a personal touch – A quick comment on why you\'re interested makes a difference. It helps maintainers see you\'re the right fit.',
      'You get credits back – If an issue is assigned to someone else or you make a PR, your counter drops. Sent 10 applications? If 1 issue is taken, boom—you\'re back at 9, meaning you can apply for another.',
      'TL;DR: Be thoughtful, show your motivation, and keep an eye on your application count. Let\'s keep it clean and high-quality.'
    ],
    events: [
      {
        date: 'JAN\n16',
        title: 'Closing Ceremony & Awards',
        description: 'Celebrate contributions and winners',
        time: '16 Jan. 2026 - 9AM (GMT+5:30)',
        status: 'Watch Live'
      },
      {
        date: 'JAN\n9',
        title: 'Mid-Event Check-In',
        description: 'Progress updates and Q&A session',
        time: '9 Jan. 2026 - 9AM (GMT+5:30)',
        status: 'Watch Live'
      },
      {
        date: 'JAN\n4',
        title: 'Workshop: Getting Started',
        description: 'Learn how to contribute effectively',
        time: '4 Jan. 2026 - 9AM (GMT+5:30)',
        status: 'Watch Live'
      }
    ]
  };

  const projects = [
    {
      id: 1,
      name: 'Marketplace',
      description: 'A decentralized marketplace for digital assets and NFTs',
      logo: '🏪',
      stars: 1234,
      forks: 567,
      language: 'TypeScript',
      languageColor: '#3178c6',
      availableIssues: 12,
      totalIssues: 45
    },
    {
      id: 2,
      name: 'Cairo VM',
      description: 'Virtual machine for Cairo smart contracts',
      logo: '⚡',
      stars: 2891,
      forks: 432,
      language: 'Rust',
      languageColor: '#dea584',
      availableIssues: 8,
      totalIssues: 23
    },
    {
      id: 3,
      name: 'Starknet.js',
      description: 'JavaScript library for Starknet',
      logo: '📚',
      stars: 987,
      forks: 234,
      language: 'JavaScript',
      languageColor: '#f7df1e',
      availableIssues: 15,
      totalIssues: 38
    },
    {
      id: 4,
      name: 'Smart Contracts',
      description: 'Collection of audited smart contracts',
      logo: '📝',
      stars: 1567,
      forks: 678,
      language: 'Solidity',
      languageColor: '#363636',
      availableIssues: 7,
      totalIssues: 19
    },
    {
      id: 5,
      name: 'Frontend SDK',
      description: 'React SDK for building dApps',
      logo: '⚛️',
      stars: 3421,
      forks: 891,
      language: 'TypeScript',
      languageColor: '#3178c6',
      availableIssues: 6,
      totalIssues: 15
    }
  ];

  const successfulApplications = [
    {
      id: 1,
      projectName: 'Marketplace',
      projectLogo: '🏪',
      issueTitle: 'Add support for bulk NFT minting',
      issueNumber: '#234',
      difficulty: 'Medium',
      reward: '500 USD',
      assignedDate: '2 days ago',
      status: 'assigned'
    },
    {
      id: 2,
      projectName: 'Cairo VM',
      projectLogo: '⚡',
      issueTitle: 'Optimize memory allocation in VM runtime',
      issueNumber: '#156',
      difficulty: 'Hard',
      reward: '1200 USD',
      assignedDate: '1 week ago',
      status: 'assigned'
    }
  ];

  const pendingApplications = [
    {
      id: 3,
      projectName: 'Starknet.js',
      projectLogo: '📚',
      issueTitle: 'Update documentation for v6.0',
      issueNumber: '#89',
      difficulty: 'Easy',
      reward: '150 USD',
      appliedDate: '3 hours ago',
      status: 'pending'
    },
    {
      id: 4,
      projectName: 'Smart Contracts',
      projectLogo: '📝',
      issueTitle: 'Add comprehensive unit tests',
      issueNumber: '#445',
      difficulty: 'Medium',
      reward: '400 USD',
      appliedDate: '1 day ago',
      status: 'pending'
    },
    {
      id: 5,
      projectName: 'Frontend SDK',
      projectLogo: '⚛️',
      issueTitle: 'Implement dark mode support',
      issueNumber: '#678',
      difficulty: 'Easy',
      reward: '200 USD',
      appliedDate: '2 days ago',
      status: 'pending'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Back Button and Sign In Button - Same Row */}
      <div className="flex items-center justify-between">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-4 py-2 rounded-[12px] backdrop-blur-[30px] border transition-all ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10 text-[#f5f5f5] hover:bg-white/[0.12]'
              : 'bg-white/[0.15] border-white/25 text-[#2d2820] hover:bg-white/[0.2]'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-[14px] font-medium">Back to Open-Source Week</span>
        </button>

        <button 
          onClick={() => setIsRegistered(true)}
          className="px-6 py-3 bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white rounded-[14px] font-semibold text-[14px] shadow-[0_6px_20px_rgba(162,121,44,0.35)] hover:shadow-[0_10px_30px_rgba(162,121,44,0.5)] transition-all border border-white/10"
        >
          Sign in or register
        </button>
      </div>

      {/* Main Grid - 2:4 Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-6">
        {/* Left Column - 2 columns width */}
        <div className="lg:col-span-2 space-y-6">
          {/* Event Icon and Title */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-12 h-12 rounded-[12px] bg-gradient-to-br ${eventDetails.iconBg} flex items-center justify-center shadow-lg border border-white/20`}>
                <span className="text-white text-[16px] font-bold">{eventDetails.icon}</span>
              </div>
              <h1 className={`text-[18px] font-bold transition-colors ${
                theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
              }`}>{eventDetails.name}</h1>
            </div>
          </div>

          {/* Date Section */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            <h3 className={`text-[11px] font-semibold mb-4 uppercase transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>Date</h3>
            <div className="space-y-4">
              <div>
                <div className={`text-[16px] font-bold mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{eventDetails.startDate}</div>
                <div className={`text-[12px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>{eventDetails.startTime}</div>
              </div>
              <div className={`h-px ${theme === 'dark' ? 'bg-white/10' : 'bg-black/10'}`}></div>
              <div>
                <div className={`text-[16px] font-bold mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{eventDetails.endDate}</div>
                <div className={`text-[12px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>{eventDetails.endTime}</div>
              </div>
            </div>
          </div>

          {/* Location Section */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            <h3 className={`text-[11px] font-semibold mb-3 uppercase transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>Location</h3>
            <div className={`text-[16px] font-medium transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>{eventDetails.location}</div>
          </div>

          {/* Links Section */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            <h3 className={`text-[11px] font-semibold mb-4 uppercase transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>Links</h3>
            <div className="space-y-3">
              {eventDetails.links.map((link, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className={`text-[14px] font-medium transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>{link.name}</span>
                  <a
                    href={`https://${link.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-1 text-[12px] transition-colors hover:underline ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}
                  >
                    <span>{link.url}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Events Timeline */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-[11px] font-semibold uppercase transition-colors ${
                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>Events</h3>
              <button className={`flex items-center gap-1 text-[11px] font-medium transition-colors ${
                theme === 'dark' ? 'text-[#c9983a] hover:text-[#d4a84f]' : 'text-[#8b6f3a] hover:text-[#6d5530]'
              }`}>
                <Calendar className="w-3 h-3" />
                All events
              </button>
            </div>
            <div className="space-y-4">
              {eventDetails.events.map((event, index) => (
                <div key={index} className="flex gap-3">
                  <div className={`w-10 h-10 rounded-[8px] flex items-center justify-center text-center flex-shrink-0 backdrop-blur-[30px] border ${
                    theme === 'dark'
                      ? 'bg-white/[0.05] border-white/10 text-[#f5f5f5]'
                      : 'bg-white/[0.1] border-white/25 text-[#2d2820]'
                  }`}>
                    <span className="text-[9px] font-bold leading-tight whitespace-pre-line">{event.date}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className={`text-[13px] font-semibold mb-0.5 transition-colors ${
                      theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                    }`}>{event.title}</h4>
                    <p className={`text-[11px] mb-0.5 transition-colors ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}>{event.description}</p>
                    <p className={`text-[10px] mb-1 transition-colors ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}>{event.time}</p>
                    <button className={`text-[10px] font-medium transition-colors ${
                      theme === 'dark' ? 'text-[#c9983a] hover:text-[#d4a84f]' : 'text-[#8b6f3a] hover:text-[#6d5530]'
                    }`}>{event.status}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - 4 columns width */}
        <div className="lg:col-span-4 space-y-6">
          {/* Tabs */}
          <div className={`backdrop-blur-[40px] rounded-[20px] border p-1 transition-colors flex gap-2 ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/10'
              : 'bg-white/[0.15] border-white/25'
          }`}>
            {eventDetails.tabs.map((tab, index) => (
              <button
                key={index}
                className={`flex-1 px-4 py-2.5 rounded-[14px] text-[13px] font-medium transition-all ${
                  index === activeTab
                    ? 'bg-[#c9983a] text-white shadow-lg'
                    : theme === 'dark'
                      ? 'text-[#d4d4d4] hover:bg-white/[0.05]'
                      : 'text-[#7a6b5a] hover:bg-white/[0.1]'
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Content - Tab Content */}
          {activeTab === 0 && (
            <div className={`backdrop-blur-[40px] rounded-[20px] border-2 p-8 transition-colors ${
              theme === 'dark'
                ? 'bg-white/[0.05] border-blue-500/40'
                : 'bg-white/[0.1] border-blue-500/40'
            }`}>
              <h2 className={`text-[18px] font-bold mb-6 transition-colors ${
                theme === 'dark' ? 'text-[#4a9eff]' : 'text-[#2563eb]'
              }`}>Heads up, builders! Application limits & best practices</h2>

              <div className="space-y-4">
                {eventDetails.guidelines.map((guideline, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="flex-shrink-0 mt-0.5">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className={`text-[13px] leading-relaxed transition-colors ${
                      theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                    }`}>
                      {guideline.includes('–') ? (
                        <>
                          <span className="font-medium">{guideline.split('–')[0].trim()}</span>
                          <span className={theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}>
                            {' '}– {guideline.split('–')[1].trim()}
                          </span>
                        </>
                      ) : (
                        guideline
                      )}
                    </p>
                  </div>
                ))}
              </div>

              <div className={`mt-6 p-4 rounded-[14px] backdrop-blur-[30px] border ${
                theme === 'dark'
                  ? 'bg-white/[0.05] border-white/10'
                  : 'bg-white/[0.1] border-white/25'
              }`}>
                <p className={`text-[13px] leading-relaxed transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>
                  {eventDetails.description}
                </p>
              </div>
            </div>
          )}

          {/* Projects Tab */}
          {activeTab === 1 && (
            <div className="relative">
              {!isRegistered && (
                <div className="relative">
                  {/* Blurred Projects Background */}
                  <div className="filter blur-[12px] pointer-events-none select-none">
                    <div className="space-y-4">
                      {projects.slice(0, 3).map((project) => (
                        <div
                          key={project.id}
                          className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-colors ${
                            theme === 'dark'
                              ? 'bg-white/[0.08] border-white/10'
                              : 'bg-white/[0.15] border-white/25'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="text-[32px]">{project.logo}</div>
                            <div className="flex-1">
                              <h3 className={`text-[16px] font-bold mb-1 ${theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'}`}>
                                {project.name}
                              </h3>
                              <p className={`text-[13px] mb-3 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                                {project.description}
                              </p>
                              <div className="flex items-center gap-4 text-[12px]">
                                <div className="flex items-center gap-1">
                                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.languageColor }}></div>
                                  <span className={theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}>{project.language}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Star className={`w-3 h-3 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
                                  <span className={theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}>{project.stars}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <GitFork className={`w-3 h-3 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
                                  <span className={theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}>{project.forks}</span>
                                </div>
                              </div>
                            </div>
                            <div className={`px-3 py-1.5 rounded-[8px] ${
                              theme === 'dark' ? 'bg-[#c9983a]/20 text-[#c9983a]' : 'bg-[#8b6f3a]/20 text-[#8b6f3a]'
                            } text-[11px] font-medium`}>
                              {project.availableIssues}/{project.totalIssues} issues
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Overlay Message */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`backdrop-blur-[40px] rounded-[20px] border px-8 py-6 text-center shadow-lg transition-colors ${
                      theme === 'dark'
                        ? 'bg-white/[0.12] border-white/20'
                        : 'bg-white/[0.25] border-white/30'
                    }`}>
                      <p className={`text-[16px] font-semibold transition-colors ${
                        theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                      }`}>
                        Register now to access the full project list.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {isRegistered && (
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-all cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                          : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
                      }`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="text-[32px]">{project.logo}</div>
                        <div className="flex-1">
                          <h3 className={`text-[16px] font-bold mb-1 transition-colors ${
                            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                          }`}>
                            {project.name}
                          </h3>
                          <p className={`text-[13px] mb-3 transition-colors ${
                            theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                          }`}>
                            {project.description}
                          </p>
                          <div className="flex items-center gap-4 text-[12px]">
                            <div className="flex items-center gap-1">
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: project.languageColor }}></div>
                              <span className={`transition-colors ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>{project.language}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className={`w-3 h-3 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
                              <span className={`transition-colors ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>{project.stars}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <GitFork className={`w-3 h-3 ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
                              <span className={`transition-colors ${theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>{project.forks}</span>
                            </div>
                          </div>
                        </div>
                        <div className={`px-3 py-1.5 rounded-[8px] text-[11px] font-medium transition-colors ${
                          theme === 'dark' ? 'bg-[#c9983a]/20 text-[#c9983a]' : 'bg-[#8b6f3a]/20 text-[#8b6f3a]'
                        }`}>
                          {project.availableIssues}/{project.totalIssues} issues
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* My Applications Tab */}
          {activeTab === 2 && (
            <div className="space-y-8">
              {/* Successful Applications Section */}
              <div>
                <div className="mb-4">
                  <h2 className={`text-[20px] font-bold mb-1 transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>Successful applications</h2>
                  <p className={`text-[13px] transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>You have been assigned to these issues, time to get to work!</p>
                </div>

                {!isRegistered ? (
                  <div className={`backdrop-blur-[40px] rounded-[20px] border p-8 text-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/[0.08] border-white/10'
                      : 'bg-white/[0.15] border-white/25'
                  }`}>
                    <p className={`text-[14px] transition-colors ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}>Error loading applications</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {successfulApplications.map((application) => (
                      <div
                        key={application.id}
                        className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-all cursor-pointer ${
                          theme === 'dark'
                            ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                            : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-[32px]">{application.projectLogo}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className={`text-[16px] font-bold transition-colors ${
                                theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                              }`}>
                                {application.projectName}
                              </h3>
                              <span className={`text-[13px] transition-colors ${
                                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                              }`}>{application.issueNumber}</span>
                            </div>
                            <p className={`text-[14px] mb-3 transition-colors ${
                              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                            }`}>
                              {application.issueTitle}
                            </p>
                            <div className="flex items-center gap-4 text-[12px]">
                              <div className={`px-2 py-1 rounded-[6px] ${
                                application.difficulty === 'Easy' 
                                  ? 'bg-green-500/20 text-green-400'
                                  : application.difficulty === 'Medium'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-red-500/20 text-red-400'
                              }`}>
                                {application.difficulty}
                              </div>
                              <div className="flex items-center gap-1">
                                <span className={`transition-colors ${
                                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                                }`}>💰 {application.reward}</span>
                              </div>
                              <div className={`transition-colors ${
                                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                              }`}>
                                Assigned {application.assignedDate}
                              </div>
                            </div>
                          </div>
                          <div className={`px-4 py-2 rounded-[10px] text-[12px] font-semibold ${
                            theme === 'dark' 
                              ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                              : 'bg-green-500/20 text-green-600 border border-green-500/30'
                          }`}>
                            Assigned
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Applications Under Review Section */}
              <div>
                <div className="mb-4">
                  <h2 className={`text-[20px] font-bold mb-1 transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>Applications under review</h2>
                  <p className={`text-[13px] transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>These issues are not assigned to a contributor yet.</p>
                </div>

                {!isRegistered ? (
                  <div className={`backdrop-blur-[40px] rounded-[20px] border p-8 text-center transition-colors ${
                    theme === 'dark'
                      ? 'bg-white/[0.08] border-white/10'
                      : 'bg-white/[0.15] border-white/25'
                  }`}>
                    <p className={`text-[14px] transition-colors ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}>Error loading applications</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {pendingApplications.map((application) => (
                      <div
                        key={application.id}
                        className={`backdrop-blur-[40px] rounded-[20px] border p-6 transition-all cursor-pointer ${
                          theme === 'dark'
                            ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                            : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.12)]'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-[32px]">{application.projectLogo}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className={`text-[16px] font-bold transition-colors ${
                                theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                              }`}>
                                {application.projectName}
                              </h3>
                              <span className={`text-[13px] transition-colors ${
                                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                              }`}>{application.issueNumber}</span>
                            </div>
                            <p className={`text-[14px] mb-3 transition-colors ${
                              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                            }`}>
                              {application.issueTitle}
                            </p>
                            <div className="flex items-center gap-4 text-[12px]">
                              <div className={`px-2 py-1 rounded-[6px] ${
                                application.difficulty === 'Easy' 
                                  ? 'bg-green-500/20 text-green-400'
                                  : application.difficulty === 'Medium'
                                    ? 'bg-yellow-500/20 text-yellow-400'
                                    : 'bg-red-500/20 text-red-400'
                              }`}>
                                {application.difficulty}
                              </div>
                              <div className="flex items-center gap-1">
                                <span className={`transition-colors ${
                                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                                }`}>💰 {application.reward}</span>
                              </div>
                              <div className={`transition-colors ${
                                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                              }`}>
                                Applied {application.appliedDate}
                              </div>
                            </div>
                          </div>
                          <div className={`px-4 py-2 rounded-[10px] text-[12px] font-semibold ${
                            theme === 'dark' 
                              ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' 
                              : 'bg-yellow-500/20 text-yellow-600 border border-yellow-500/30'
                          }`}>
                            Pending
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}