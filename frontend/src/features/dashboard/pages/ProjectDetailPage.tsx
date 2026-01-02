import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ExternalLink, Copy, ThumbsUp, ThumbsDown, GitPullRequest, CircleDot, ArrowLeft } from 'lucide-react';
import { useTheme } from '../../../shared/contexts/ThemeContext';

interface ProjectDetailPageProps {
  onBack?: () => void;
  onIssueClick?: (id: string) => void;
  projectId?: string;
  onClose?: () => void;
}

export function ProjectDetailPage({ onBack, onIssueClick, projectId: propProjectId, onClose }: ProjectDetailPageProps) {
  const { theme } = useTheme();
  const { projectId: paramProjectId } = useParams<{ projectId: string }>();
  const projectId = propProjectId || paramProjectId;
  const [activeIssueTab, setActiveIssueTab] = useState('all');
  const [copiedLink, setCopiedLink] = useState(false);

  // Mock project data - in a real app, this would come from an API
  const project = {
    id: projectId,
    name: 'Vue.js',
    tagline: 'Progressive JavaScript framework for building user interfaces',
    logo: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=400&fit=crop',
    githubUrl: 'https://github.com/vuejs/core',
    websiteUrl: 'https://vuejs.org',
    description: 'Vue.js is a progressive JavaScript framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects.',
    languages: [
      { name: 'TypeScript', percentage: 85 },
      { name: 'JavaScript', percentage: 15 },
    ],
    ecosystems: ['Web'],
    categories: ['Frontend'],
    maintainers: [
      { id: '1', name: 'octocat', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
    ],
    contributors: [
      { id: '1', name: 'octocat', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
      { id: '2', name: 'developer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
      { id: '3', name: 'contributor1', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
    ],
    totalContributors: 6,
  };

  const issues = [
    {
      id: '1234',
      title: 'Add support for new React hooks',
      tags: ['enhancement', 'good first issue'],
      timeAgo: '7 days ago',
      author: { name: 'octocat', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
      repository: 'react-project',
    },
    {
      id: '1235',
      title: 'Improve documentation for API endpoints',
      tags: ['documentation'],
      timeAgo: '5 days ago',
      author: { name: 'developer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
      repository: 'react-project',
    },
    {
      id: '1236',
      title: 'Fix memory leak in component lifecycle',
      tags: ['bug'],
      timeAgo: '3 days ago',
      author: { name: 'bugreporter', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
      repository: 'react-project',
    },
  ];

  const issueTabs = [
    { id: 'all', label: 'All issues', count: 14 },
    { id: 'enhancement', label: 'enhancement', count: 5 },
    { id: 'bug', label: 'bug', count: 3 },
    { id: 'documentation', label: 'documentation', count: 2 },
    { id: 'good-first-issue', label: 'good first issue', count: 4 },
  ];

  const recentActivity = [
    {
      type: 'pr',
      number: '1234',
      title: 'Add support for new React hooks',
      date: '31 Dec.',
    },
    {
      type: 'pr',
      number: '5678',
      title: 'Fix memory leak in component lifecycle',
      date: '01 Jan.',
    },
    {
      type: 'review',
      title: 'Review: Improve type safety in API client',
      date: '22 Dec.',
    },
  ];

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="flex gap-6 h-full">
      {/* Left Sidebar */}
      <div className="w-[280px] flex-shrink-0 space-y-6">
        {/* Project Logo */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="aspect-square rounded-[20px] overflow-hidden bg-gradient-to-br from-[#c9983a]/20 to-[#d4af37]/10">
            <img 
              src={project.logo} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Community */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Community</h3>
          <div className="flex flex-col gap-2">
            <a
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all text-[13px] font-semibold ${
                theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all text-[13px] font-semibold ${
                theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
              }`}
            >
              <ExternalLink className="w-4 h-4" />
              Website
            </a>
          </div>
        </div>

        {/* Languages */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Languages</h3>
          <div className="space-y-3">
            {project.languages.map((lang, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[13px] font-semibold transition-colors ${
                    theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                  }`}>{lang.name}</span>
                  <span className="text-[12px] font-bold text-[#c9983a]">{lang.percentage}%</span>
                </div>
                <div className="h-2 rounded-full backdrop-blur-[15px] bg-white/[0.08] border border-white/15 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#c9983a] to-[#d4af37] rounded-full transition-all duration-500"
                    style={{ width: `${lang.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ecosystems */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Ecosystems</h3>
          <div className="flex flex-wrap gap-2">
            {project.ecosystems.map((eco, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold backdrop-blur-[20px] border border-white/25 transition-colors ${
                  theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                }`}
              >
                W {eco}
              </span>
            ))}
          </div>
        </div>

        {/* Categories */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Categories</h3>
          <div className="flex flex-wrap gap-2">
            {project.categories.map((cat, idx) => (
              <span
                key={idx}
                className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold backdrop-blur-[20px] border border-white/25 transition-colors ${
                  theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* Maintainers */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Maintainers</h3>
          <div className="space-y-3">
            {project.maintainers.map((maintainer) => (
              <div key={maintainer.id} className="flex items-center gap-3">
                <img 
                  src={maintainer.avatar} 
                  alt={maintainer.name}
                  className="w-8 h-8 rounded-full border-2 border-[#c9983a]/30"
                />
                <span className={`text-[13px] font-semibold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{maintainer.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contributors */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-6 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h3 className={`text-[16px] font-bold mb-4 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Contributors</h3>
          <div className="flex items-center gap-2 mb-3">
            <div className="flex -space-x-2">
              {project.contributors.slice(0, 3).map((contributor) => (
                <img 
                  key={contributor.id}
                  src={contributor.avatar} 
                  alt={contributor.name}
                  className="w-8 h-8 rounded-full border-2 border-[#c9983a]/30"
                />
              ))}
            </div>
          </div>
          <p className={`text-[12px] transition-colors ${
            theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
          }`}>
            {project.contributors.slice(0, 2).map(c => c.name).join(', ')} and {project.totalContributors - 2} others
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-6 overflow-y-auto">
        {/* Back Button */}
        {(onBack || onClose) && (
          <button
            onClick={onBack || onClose}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-[12px] backdrop-blur-[40px] border hover:bg-white/[0.2] transition-all ${
              theme === 'dark'
                ? 'bg-white/[0.12] border-white/20 text-[#f5f5f5]'
                : 'bg-white/[0.12] border-white/20 text-[#2d2820]'
            }`}
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-semibold text-[14px]">Back to Browse</span>
          </button>
        )}

        {/* Header */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className={`text-[32px] font-bold mb-2 transition-colors ${
                theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
              }`}>{project.name}</h1>
              <p className={`text-[15px] transition-colors ${
                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>{project.tagline}</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => window.open(project.githubUrl, '_blank')}
                className={`p-3 rounded-[12px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all ${
                  theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                }`}
              >
                <ExternalLink className="w-5 h-5" />
              </button>
              <button
                onClick={handleCopyLink}
                className={`p-3 rounded-[12px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all ${
                  theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                }`}
              >
                <Copy className={`w-5 h-5 ${copiedLink ? 'text-[#c9983a]' : ''}`} />
              </button>
              <button className="px-6 py-3 rounded-[14px] bg-gradient-to-br from-[#c9983a] to-[#d4af37] text-white font-bold text-[14px] hover:opacity-90 transition-all">
                Contribute now
              </button>
            </div>
          </div>
        </div>

        {/* Overview */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="flex items-center justify-between mb-6">
            <h2 className={`text-[18px] font-bold flex items-center gap-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>
              <span className="text-[#c9983a]">✦</span>
              Overview by OnlyDust
            </h2>
            <div className="flex items-center gap-2">
              <button className={`p-2 rounded-[10px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all ${
                theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
              }`}>
                <ThumbsUp className="w-4 h-4" />
              </button>
              <button className={`p-2 rounded-[10px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all ${
                theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
              }`}>
                <ThumbsDown className="w-4 h-4" />
              </button>
            </div>
          </div>
          <p className={`text-[15px] leading-relaxed transition-colors ${
            theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#4a3f2f]'
          }`}>
            {project.description}
          </p>
        </div>

        {/* Issues */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h2 className={`text-[18px] font-bold mb-6 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Issues</h2>

          {/* Issue Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            {issueTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveIssueTab(tab.id)}
                className={`px-4 py-2 rounded-[10px] text-[13px] font-semibold transition-all ${
                  activeIssueTab === tab.id
                    ? 'bg-[#c9983a] text-white'
                    : `backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] ${
                        theme === 'dark' ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                      }`
                }`}
              >
                {tab.label} ({tab.count})
              </button>
            ))}
          </div>

          {/* Issue List */}
          <div className="space-y-4">
            {issues.map((issue) => (
              <div
                key={issue.id}
                className={`p-6 rounded-[16px] backdrop-blur-[25px] border border-white/25 hover:bg-white/[0.15] transition-all cursor-pointer ${
                  theme === 'dark' ? 'bg-white/[0.08]' : 'bg-white/[0.08]'
                }`}
                onClick={() => onIssueClick && onIssueClick(issue.id)}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start gap-3 flex-1">
                    <CircleDot className="w-5 h-5 text-[#4ade80] flex-shrink-0 mt-0.5" />
                    <h3 className={`text-[15px] font-bold transition-colors ${
                      theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                    }`}>{issue.title}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between ml-8">
                  <div className="flex items-center gap-2">
                    {issue.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 rounded-[6px] text-[11px] font-bold backdrop-blur-[20px] border border-white/20 transition-colors ${
                          theme === 'dark' ? 'bg-white/[0.1] text-[#d4d4d4]' : 'bg-white/[0.1] text-[#4a3f2f]'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-[12px] transition-colors ${
                      theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                    }`}>{issue.timeAgo}</span>
                    <div className="flex items-center gap-2">
                      <img 
                        src={issue.author.avatar} 
                        alt={issue.author.name}
                        className="w-5 h-5 rounded-full border border-[#c9983a]/30"
                      />
                      <span className={`text-[12px] font-semibold transition-colors ${
                        theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                      }`}>By {issue.author.name}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-[6px] text-[11px] font-bold backdrop-blur-[20px] border border-white/20 transition-colors ${
                      theme === 'dark' ? 'bg-white/[0.1] text-[#d4d4d4]' : 'bg-white/[0.1] text-[#4a3f2f]'
                    }`}>
                      📦 {issue.repository}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-8 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <h2 className={`text-[18px] font-bold mb-6 transition-colors ${
            theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
          }`}>Recent Activity</h2>
          <div className="space-y-3">
            {recentActivity.map((activity, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between p-4 rounded-[12px] backdrop-blur-[20px] border border-white/20 hover:bg-white/[0.15] transition-all ${
                  theme === 'dark' ? 'bg-white/[0.05]' : 'bg-white/[0.05]'
                }`}
              >
                <div className="flex items-center gap-3">
                  {activity.type === 'pr' && (
                    <>
                      <div className="px-2 py-1 rounded-[6px] bg-[#4ade80]/20 border border-[#4ade80]/30">
                        <span className="text-[11px] font-bold text-[#4ade80]">#{activity.number}</span>
                      </div>
                      <span className={`text-[14px] font-semibold transition-colors ${
                        theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                      }`}>{activity.title}</span>
                    </>
                  )}
                  {activity.type === 'review' && (
                    <span className={`text-[14px] font-semibold transition-colors ${
                      theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                    }`}>{activity.title}</span>
                  )}
                </div>
                <span className={`text-[13px] transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>{activity.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}