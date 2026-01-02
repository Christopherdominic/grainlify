import { useTheme } from '../../../shared/contexts/ThemeContext';
import { Heart, Star, GitFork, ArrowUpRight, Target, Zap } from 'lucide-react';
import { LanguageIcon } from '../../../shared/components/LanguageIcon';
import { IssueCard } from '../../../shared/components/ui/IssueCard';
import { useState } from 'react';
import { IssueDetailPage } from './IssueDetailPage';
import { ProjectDetailPage } from './ProjectDetailPage';

export function DiscoverPage() {
  const { theme } = useTheme();
  const [selectedIssueId, setSelectedIssueId] = useState<string | null>(null);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const projects = [
    {
      id: 1,
      name: 'React Ecosystem',
      icon: '⚛️',
      stars: '4.9M',
      forks: '2.6M',
      issues: 650,
      description: 'A modern React ecosystem for building user interfaces with enhanced UI/UX modules.',
      tags: ['TypeScript', 'good first issue'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      name: 'Nextjs Framework',
      icon: '▲',
      stars: '120K',
      forks: '24K',
      issues: 480,
      description: 'The React framework for production with server-side rendering.',
      tags: ['Frontend'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'Vue.js',
      icon: 'V',
      stars: '214K',
      forks: '36K',
      issues: 552,
      description: 'Progressive JavaScript framework for building user interfaces.',
      tags: ['Framework'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      name: 'TypeScript',
      icon: 'TS',
      stars: '95K',
      forks: '12K',
      issues: 325,
      description: 'TypeScript is a superset of JavaScript that adds static types.',
      tags: ['TypeScript', 'Language'],
      color: 'from-blue-600 to-blue-700',
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      icon: '🎨',
      stars: '78K',
      forks: '4K',
      issues: 142,
      description: 'A utility-first CSS framework for rapid UI development.',
      tags: ['CSS', 'Design'],
      color: 'from-teal-500 to-cyan-600',
    },
    {
      id: 6,
      name: 'Node.js',
      icon: '🟢',
      stars: '102K',
      forks: '28K',
      issues: 875,
      description: 'JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
      tags: ['Backend', 'JavaScript'],
      color: 'from-green-600 to-green-700',
    },
    {
      id: 7,
      name: 'Webpack',
      icon: '📦',
      stars: '64K',
      forks: '8.7K',
      issues: 456,
      description: 'A static module bundler for modern JavaScript applications.',
      tags: ['Build Tool'],
      color: 'from-indigo-500 to-blue-600',
    },
    {
      id: 8,
      name: 'GraphQL',
      icon: '◆',
      stars: '14K',
      forks: '1.3K',
      issues: 98,
      description: 'A query language for APIs and a runtime for fulfilling queries.',
      tags: ['API', 'Backend'],
      color: 'from-pink-500 to-rose-500',
    },
  ];

  // If an issue is selected, show the detail page instead
  if (selectedIssueId) {
    return (
      <IssueDetailPage
        issueId={selectedIssueId}
        onClose={() => setSelectedIssueId(null)}
      />
    );
  }

  // If a project is selected, show the detail page instead
  if (selectedProjectId) {
    return (
      <ProjectDetailPage
        projectId={selectedProjectId}
        onClose={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className={`backdrop-blur-[40px] rounded-[28px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-12 text-center transition-colors ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-white/[0.08] to-white/[0.04] border-white/10'
          : 'bg-gradient-to-br from-white/[0.15] to-white/[0.08] border-white/20'
      }`}>
        <h1 className={`text-[36px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
        }`}>
          Get matched to your next
        </h1>
        <h2 className="text-[42px] font-bold bg-gradient-to-r from-[#c9983a] via-[#a67c2e] to-[#8b7355] bg-clip-text text-transparent mb-6">
          Open source contributions!
        </h2>
        <p className={`text-[16px] mb-8 max-w-2xl mx-auto transition-colors ${
          theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
        }`}>
          Get recommendations based on your profile and past contributions.
        </p>
        <button className="px-8 py-4 rounded-[16px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[16px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all inline-flex items-center space-x-2 border border-white/10">
          <span>You didn't link your wallet (1/3)</span>
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>

      {/* Embark on ODQuest */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-gradient-to-br from-white/[0.1] to-white/[0.06] border-white/15'
          : 'bg-gradient-to-br from-white/[0.18] to-white/[0.12] border-white/25'
      }`}>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className={`text-[28px] font-bold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>
              Embark on an <span className="text-[#c9983a]">ODQuest</span>
            </h3>
            <p className={`text-[16px] mb-6 transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              Learn about the ecosystem onboarding quest and track your progress directly on our onboarding Quest
            </p>
            <button className="px-6 py-3 rounded-[14px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[14px] shadow-[0_6px_20px_rgba(162,121,44,0.35)] hover:shadow-[0_8px_24px_rgba(162,121,44,0.4)] transition-all border border-white/10">
              Let's go
            </button>
          </div>
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-[0_8px_24px_rgba(162,121,44,0.3)] border border-white/15">
            <Target className="w-12 h-12 text-white" />
          </div>
        </div>
      </div>

      {/* Recommended Projects */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-white/[0.08] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <div className="flex items-center space-x-3 mb-2">
          <Zap className="w-6 h-6 text-[#c9983a] drop-shadow-sm" />
          <h3 className={`text-[24px] font-bold transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>
            Recommended Projects ({projects.length})
          </h3>
        </div>
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
        }`}>
          Finding best suited your interests and expertise
        </p>

        <div className="flex gap-6 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProjectId(String(project.id))}
              className={`backdrop-blur-[30px] rounded-[20px] border p-6 transition-all cursor-pointer flex-shrink-0 w-[320px] ${
                theme === 'dark'
                  ? 'bg-white/[0.08] border-white/15 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                  : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${project.color} flex items-center justify-center shadow-md text-2xl`}>
                  {project.icon}
                </div>
                <button className="text-[#c9983a] hover:text-[#a67c2e] transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <h4 className={`text-[18px] font-bold mb-2 transition-colors ${
                theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
              }`}>{project.name}</h4>
              <p className={`text-[13px] mb-4 line-clamp-2 transition-colors ${
                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>{project.description}</p>

              <div className={`flex items-center space-x-4 text-[13px] mb-4 transition-colors ${
                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>
                <div className="flex items-center space-x-1">
                  <Star className="w-3.5 h-3.5 text-[#c9983a]" />
                  <span>{project.stars}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <GitFork className="w-3.5 h-3.5 text-[#c9983a]" />
                  <span>{project.forks}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-[10px] border text-[12px] font-semibold shadow-[0_2px_8px_rgba(201,152,58,0.15)] ${
                      theme === 'dark'
                        ? 'bg-[#c9983a]/15 border-[#c9983a]/30 text-[#f5c563]'
                        : 'bg-[#c9983a]/20 border-[#c9983a]/35 text-[#8b6f3a]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Issues */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-white/[0.08] border-white/10'
          : 'bg-white/[0.12] border-white/20'
      }`}>
        <h3 className={`text-[24px] font-bold mb-2 transition-colors ${
          theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
        }`}>Recommended Issues</h3>
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
        }`}>
          Issues that match your interests and expertise
        </p>

        <div className="flex gap-4 overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-1"
              title="Add support for new React hooks"
              description="Implement support for the latest React hooks in the library"
              language="TypeScript"
              daysLeft="7 days left"
              variant="recommended"
              primaryTag="good first issue"
              onClick={() => setSelectedIssueId('rec-1')}
            />
          </div>

          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-2"
              title="Fix memory leak in server components"
              description="Resolve memory leak issue in SSR implementation"
              language="JavaScript"
              daysLeft="3 days left"
              variant="recommended"
              primaryTag="bug"
              onClick={() => setSelectedIssueId('rec-2')}
            />
          </div>

          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-3"
              title="Improve TypeScript type definitions"
              description="Add better type definitions for the core API methods"
              language="TypeScript"
              daysLeft="5 days left"
              variant="recommended"
              primaryTag="enhancement"
              onClick={() => setSelectedIssueId('rec-3')}
            />
          </div>

          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-4"
              title="Add dark mode support"
              description="Implement dark mode toggle with theme persistence"
              language="CSS"
              daysLeft="10 days left"
              variant="recommended"
              primaryTag="feature"
              onClick={() => setSelectedIssueId('rec-4')}
            />
          </div>

          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-5"
              title="Optimize bundle size"
              description="Reduce the main bundle size by implementing code splitting"
              language="JavaScript"
              daysLeft="2 days left"
              variant="recommended"
              primaryTag="performance"
              onClick={() => setSelectedIssueId('rec-5')}
            />
          </div>

          <div className="flex-shrink-0 w-[480px]">
            <IssueCard
              id="rec-6"
              title="Add accessibility features"
              description="Improve keyboard navigation and screen reader support"
              language="TypeScript"
              daysLeft="8 days left"
              variant="recommended"
              primaryTag="a11y"
              onClick={() => setSelectedIssueId('rec-6')}
            />
          </div>
        </div>
      </div>
    </div>
  );
}