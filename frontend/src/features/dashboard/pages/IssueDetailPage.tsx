import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Filter, X, ChevronDown, MessageSquare, Users, Clock, Award, Code, Eye, Star, CheckCircle, ExternalLink } from 'lucide-react';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import { Modal, ModalFooter, ModalButton } from '../../../shared/components/ui/Modal';

interface IssueDetailPageProps {
  issueId?: string;
  onClose: () => void;
}

export function IssueDetailPage({ issueId, onClose }: IssueDetailPageProps) {
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<'applications' | 'discussions'>('applications');
  const [selectedIssueInList, setSelectedIssueInList] = useState(issueId || '1234');
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    status: [] as string[],
    applicants: [] as string[],
    assignee: [] as string[],
    stale: [] as string[],
    categories: [] as string[],
    languages: [] as string[],
    labels: [] as string[],
  });
  const [labelSearch, setLabelSearch] = useState('');

  // Mock data for issues list
  const issuesList = [
    {
      id: '1234',
      number: '#133',
      title: 'Add Comprehensive Test Coverage for Scheduling Module',
      repository: 'stellopay-core',
      applicants: 1,
      tags: ['good first issue', 'onlydust-wave', 'smart-contract', 'soroban', 'test'],
      author: { name: 'Jagadeeshitw', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop' },
      timeAgo: '3 months ago',
    },
    {
      id: '1235',
      number: '#77',
      title: 'Add Invoice Expiration and Auto-cancellation Features',
      repository: 'stellopay-core',
      applicants: 2,
      tags: ['enhancement', 'backend'],
      author: { name: 'developer', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
      timeAgo: '2 months ago',
    },
    {
      id: '1236',
      number: '#92',
      title: 'Implement Real-time Notification System',
      repository: 'stellopay-frontend',
      applicants: 3,
      tags: ['feature', 'frontend'],
      author: { name: 'alexdev', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop' },
      timeAgo: '1 month ago',
    },
    {
      id: '1237',
      number: '#64',
      title: 'Fix Payment Gateway Integration Issues',
      repository: 'stellopay-core',
      applicants: 1,
      tags: ['bug', 'payment'],
      author: { name: 'sarah_coder', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
      timeAgo: '3 weeks ago',
    },
    {
      id: '1238',
      number: '#118',
      title: 'Add Multi-language Support for Dashboard',
      repository: 'stellopay-frontend',
      applicants: 4,
      tags: ['enhancement', 'i18n'],
      author: { name: 'michaelw', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop' },
      timeAgo: '2 weeks ago',
    },
  ];

  const selectedIssue = issuesList.find(i => i.id === selectedIssueInList) || issuesList[0];

  // Mock data for the selected issue
  const issueData = {
    contributions: 165,
    rewards: 4,
    projectsContributed: 48,
    projectsLead: 3,
    applications: [
      {
        id: '1',
        author: { 
          name: 'Jagadeeshitw', 
          avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        },
        message: 'Hi @Jagadeeshitw I can handle this task. Kindly assign. Highly recommended by {Onlydust} (https://www.onlydust.com/) for strong commitment and contributions!',
        timeAgo: '3 months ago',
        isAssigned: true,
      },
    ],
  };

  const isDark = theme === 'dark';

  return (
    <div className="flex gap-6 h-[calc(100vh-120px)]">
      {/* Left Sidebar - Issues List */}
      <div className="w-[450px] flex-shrink-0 flex flex-col h-full space-y-4">
        {/* Filter Row */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Filter Dropdown */}
          <div className={`flex-1 backdrop-blur-[40px] rounded-[16px] border px-4 py-2.5 transition-colors ${
            isDark
              ? 'bg-white/[0.12] border-white/20'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="flex items-center justify-between">
              <span className={`text-[15px] font-semibold transition-colors ${
                isDark ? 'text-[#2d2820]' : 'text-[#2d2820]'
              }`}>
                All
              </span>
              <ChevronDown className={`w-3.5 h-3.5 transition-colors ${
                isDark ? 'text-[#2d2820]' : 'text-[#2d2820]'
              }`} />
            </div>
          </div>

          {/* Filter Button with Badge */}
          <button 
            onClick={() => setIsFilterModalOpen(true)}
            className={`relative p-3 rounded-[16px] backdrop-blur-[40px] border hover:bg-white/[0.15] transition-all ${
            isDark
              ? 'bg-white/[0.12] border-white/20'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-[#e8c571] to-[#c9983a] rounded-full text-[12px] font-bold text-white flex items-center justify-center">
              {selectedFilters.status.length + selectedFilters.applicants.length + selectedFilters.assignee.length + selectedFilters.stale.length + selectedFilters.categories.length + selectedFilters.languages.length + selectedFilters.labels.length}
            </div>
            <Filter className={`w-4 h-4 transition-colors ${
              isDark ? 'text-[#2d2820]' : 'text-[#2d2820]'
            }`} />
          </button>
        </div>

        {/* Search */}
        <div className={`backdrop-blur-[40px] rounded-[16px] border p-3 transition-colors flex-shrink-0 ${
          isDark
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={`flex-shrink-0 ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="m11 11 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search"
              className={`flex-1 bg-transparent border-none outline-none text-[13px] placeholder:text-[13px] transition-colors ${
                isDark
                  ? 'text-[#f5f5f5] placeholder-[#d4d4d4]'
                  : 'text-[#2d2820] placeholder-[#7a6b5a]'
              }`}
            />
          </div>
        </div>

        {/* Issues List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-custom">
          {issuesList.map((issue) => (
            <button
              key={issue.id}
              onClick={() => setSelectedIssueInList(issue.id)}
              className={`w-full p-3 rounded-[16px] backdrop-blur-[40px] border transition-all text-left ${
                selectedIssueInList === issue.id
                  ? 'border-[#c9983a] bg-[#c9983a]/10'
                  : isDark
                    ? 'bg-white/[0.12] border-white/20 hover:bg-white/[0.15]'
                    : 'bg-white/[0.12] border-white/20 hover:bg-white/[0.15]'
              }`}
            >
              {/* Issue Header */}
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#c9983a] to-[#d4af37] flex items-center justify-center">
                    <span className="text-[10px] font-bold text-white">O</span>
                  </div>
                  <span className={`text-[13px] font-bold transition-colors ${
                    isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                  }`}>{issue.number}</span>
                </div>
                <div 
                  className="p-1.5 rounded-[6px] hover:bg-white/[0.1] transition-all cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className={isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}>
                    <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>

              {/* Issue Title */}
              <h3 className={`text-[14px] font-bold mb-2 line-clamp-2 transition-colors ${
                isDark ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
              }`}>
                {issue.title}
              </h3>

              {/* Repository and Applicants */}
              <div className="flex items-center gap-3 mb-2">
                <span className={`text-[11px] transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                  {issue.repository}
                </span>
                <div className="flex items-center gap-1">
                  <Users className={`w-3 h-3 transition-colors ${isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'}`} />
                  <span className={`text-[11px] font-semibold transition-colors ${isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'}`}>{issue.applicants} applicant{issue.applicants > 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-2">
                <img 
                  src={issue.author.avatar} 
                  alt={issue.author.name}
                  className="w-5 h-5 rounded-full border border-[#c9983a]/30"
                />
                <span className={`text-[11px] font-semibold transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                  {issue.author.name}
                </span>
                <span className={`text-[11px] transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                  {issue.timeAgo}
                </span>
              </div>
            </button>
          ))}

          {/* Issues Count */}
          <div className={`text-center py-2 text-[12px] font-semibold transition-colors ${
            isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
          }`}>
            {issuesList.length} issues
          </div>
        </div>
      </div>

      {/* Main Content - Issue Detail */}
      <div className="flex-1 overflow-y-auto scrollbar-custom">
        <div className={`backdrop-blur-[40px] rounded-[24px] border p-8 transition-colors ${
          isDark
            ? 'bg-white/[0.12] border-white/20'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`text-[24px] font-bold transition-colors ${
                  isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                }`}>{selectedIssue.number}</span>
                <h1 className={`text-[24px] font-bold transition-colors ${
                  isDark ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>
                  {selectedIssue.title}
                </h1>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`flex items-center gap-2 px-3 py-1.5 rounded-[8px] border transition-colors ${
                  isDark 
                    ? 'bg-[#c9983a]/20 border-[#c9983a]/30' 
                    : 'bg-[#8b6f3a]/15 border-[#8b6f3a]/30'
                }`}>
                  <Star className={`w-4 h-4 transition-colors ${
                    isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                  }`} />
                  <span className={`text-[12px] font-bold transition-colors ${
                    isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                  }`}>{selectedIssue.author.name}</span>
                </div>
                <span className={`text-[13px] transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                  opened {selectedIssue.timeAgo}
                </span>
                <a
                  href="#"
                  className={`flex items-center gap-1 text-[13px] font-semibold hover:underline transition-colors ${
                    isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                  }`}
                >
                  View on GitHub
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {selectedIssue.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-3 py-1.5 rounded-[8px] text-[12px] font-bold backdrop-blur-[20px] border border-white/25 transition-colors ${
                      isDark ? 'bg-white/[0.08] text-[#d4d4d4]' : 'bg-white/[0.08] text-[#4a3f2f]'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className={`p-2 rounded-[10px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all ${
                isDark ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
              }`}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 mb-6 border-b border-white/20 pb-4">
            <button
              onClick={() => setActiveTab('applications')}
              className={`px-4 py-2 rounded-t-[10px] text-[14px] font-semibold transition-all ${
                activeTab === 'applications'
                  ? 'bg-[#c9983a] text-white'
                  : isDark
                    ? 'text-[#d4d4d4] hover:bg-white/[0.05]'
                    : 'text-[#7a6b5a] hover:bg-white/[0.05]'
              }`}
            >
              Applications
            </button>
            <button
              onClick={() => setActiveTab('discussions')}
              className={`px-4 py-2 rounded-t-[10px] text-[14px] font-semibold transition-all ${
                activeTab === 'discussions'
                  ? 'bg-[#c9983a] text-white'
                  : isDark
                    ? 'text-[#d4d4d4] hover:bg-white/[0.05]'
                    : 'text-[#7a6b5a] hover:bg-white/[0.05]'
              }`}
            >
              Discussions
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className={`p-6 rounded-[16px] backdrop-blur-[25px] border border-white/25 ${
              isDark ? 'bg-white/[0.08]' : 'bg-white/[0.08]'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Award className={`w-5 h-5 transition-colors ${
                  isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                }`} />
                <span className={`text-[32px] font-bold transition-colors ${
                  isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                }`}>{issueData.contributions}</span>
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wide transition-colors ${
                isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>
                CONTRIBUTIONS
              </span>
            </div>

            <div className={`p-6 rounded-[16px] backdrop-blur-[25px] border border-white/25 ${
              isDark ? 'bg-white/[0.08]' : 'bg-white/[0.08]'
            }`}>
              <div className="flex items-center gap-2 mb-2">
                <Award className={`w-5 h-5 transition-colors ${
                  isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                }`} />
                <span className={`text-[32px] font-bold transition-colors ${
                  isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                }`}>{issueData.rewards}</span>
              </div>
              <span className={`text-[11px] font-bold uppercase tracking-wide transition-colors ${
                isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>
                REWARDS
              </span>
            </div>
          </div>

          {/* Project Stats */}
          <div className="flex items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Users className={`w-4 h-4 transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
              <span className={`text-[13px] transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                Contributor on{' '}
                <span className={`font-bold transition-colors ${isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'}`}>
                  {issueData.projectsContributed}
                </span>
                {' '}projects
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className={`w-4 h-4 transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`} />
              <span className={`text-[13px] transition-colors ${isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'}`}>
                Lead{' '}
                <span className={`font-bold transition-colors ${isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'}`}>
                  {issueData.projectsLead}
                </span>
                {' '}projects
              </span>
            </div>
          </div>

          {/* Applications/Discussions Content */}
          {activeTab === 'applications' && (
            <div className="space-y-4">
              {issueData.applications.map((application) => (
                <div
                  key={application.id}
                  className={`p-6 rounded-[16px] backdrop-blur-[25px] border border-white/25 ${
                    isDark ? 'bg-white/[0.08]' : 'bg-white/[0.08]'
                  }`}
                >
                  <p className={`text-[14px] leading-relaxed mb-6 transition-colors ${
                    isDark ? 'text-[#d4d4d4]' : 'text-[#4a3f2f]'
                  }`}>
                    {application.message}
                  </p>

                  {/* Assigned Status */}
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-[10px] border transition-colors ${
                      isDark 
                        ? 'bg-[#c9983a]/20 border-[#c9983a]/30' 
                        : 'bg-[#8b6f3a]/15 border-[#8b6f3a]/30'
                    }`}>
                      <CheckCircle className={`w-4 h-4 transition-colors ${
                        isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                      }`} />
                      <span className={`text-[13px] font-bold transition-colors ${
                        isDark ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
                      }`}>Assigned</span>
                    </div>
                    <button className={`px-4 py-2 rounded-[10px] backdrop-blur-[20px] border border-white/25 hover:bg-white/[0.2] transition-all text-[13px] font-semibold ${
                      isDark ? 'bg-white/[0.08] text-[#f5f5f5]' : 'bg-white/[0.08] text-[#2d2820]'
                    }`}>
                      Unassign
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'discussions' && (
            <div className={`p-8 rounded-[16px] backdrop-blur-[25px] border border-white/25 text-center ${
              isDark ? 'bg-white/[0.08]' : 'bg-white/[0.08]'
            }`}>
              <MessageSquare className={`w-12 h-12 mx-auto mb-4 transition-colors ${
                isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`} />
              <p className={`text-[14px] transition-colors ${
                isDark ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>
                No discussions yet
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="All Filters"
        icon={<Filter className="w-5 h-5 text-white" />}
        width="md"
        maxHeight={true}
      >
        {/* Filter Content */}
        <div className="space-y-5">
          {/* Status & Applicants - Two Column */}
          <div className="grid grid-cols-2 gap-4">
            {/* Status */}
            <div>
              <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
                isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
              }`}>Status</h3>
              <div className="flex gap-2">
                {['Open', 'Close'].map((status) => (
                  <button
                    key={status}
                    onClick={() => {
                      const lowerStatus = status.toLowerCase();
                      if (selectedFilters.status.includes(lowerStatus)) {
                        setSelectedFilters(prev => ({
                          ...prev,
                          status: prev.status.filter(s => s !== lowerStatus)
                        }));
                      } else {
                        setSelectedFilters(prev => ({
                          ...prev,
                          status: [...prev.status, lowerStatus]
                        }));
                      }
                    }}
                    className={`flex-1 px-3 py-2 rounded-[10px] text-[13px] font-semibold transition-all border ${
                      selectedFilters.status.includes(status.toLowerCase())
                        ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                        : isDark
                          ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                          : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* Applicants */}
            <div>
              <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
                isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
              }`}>Applicants</h3>
              <div className="flex gap-2">
                {['Yes', 'No'].map((applicant) => (
                  <button
                    key={applicant}
                    onClick={() => {
                      const lowerApplicant = applicant.toLowerCase();
                      if (selectedFilters.applicants.includes(lowerApplicant)) {
                        setSelectedFilters(prev => ({
                          ...prev,
                          applicants: prev.applicants.filter(a => a !== lowerApplicant)
                        }));
                      } else {
                        setSelectedFilters(prev => ({
                          ...prev,
                          applicants: [...prev.applicants, lowerApplicant]
                        }));
                      }
                    }}
                    className={`flex-1 px-3 py-2 rounded-[10px] text-[13px] font-semibold transition-all border ${
                      selectedFilters.applicants.includes(applicant.toLowerCase())
                        ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                        : isDark
                          ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                          : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                    }`}
                  >
                    {applicant}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Assignee & Stale - Two Column */}
          <div className="grid grid-cols-2 gap-4">
            {/* Assignee */}
            <div>
              <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
                isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
              }`}>Assignee</h3>
              <div className="flex gap-2">
                {['Yes', 'No'].map((assignee) => (
                  <button
                    key={assignee}
                    onClick={() => {
                      const lowerAssignee = assignee.toLowerCase();
                      if (selectedFilters.assignee.includes(lowerAssignee)) {
                        setSelectedFilters(prev => ({
                          ...prev,
                          assignee: prev.assignee.filter(a => a !== lowerAssignee)
                        }));
                      } else {
                        setSelectedFilters(prev => ({
                          ...prev,
                          assignee: [...prev.assignee, lowerAssignee]
                        }));
                      }
                    }}
                    className={`flex-1 px-3 py-2 rounded-[10px] text-[13px] font-semibold transition-all border ${
                      selectedFilters.assignee.includes(assignee.toLowerCase())
                        ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                        : isDark
                          ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                          : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                    }`}
                  >
                    {assignee}
                  </button>
                ))}
              </div>
            </div>

            {/* Stale */}
            <div>
              <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
                isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
              }`}>Stale</h3>
              <div className="flex gap-2">
                {['Yes', 'No'].map((stale) => (
                  <button
                    key={stale}
                    onClick={() => {
                      const lowerStale = stale.toLowerCase();
                      if (selectedFilters.stale.includes(lowerStale)) {
                        setSelectedFilters(prev => ({
                          ...prev,
                          stale: prev.stale.filter(s => s !== lowerStale)
                        }));
                      } else {
                        setSelectedFilters(prev => ({
                          ...prev,
                          stale: [...prev.stale, lowerStale]
                        }));
                      }
                    }}
                    className={`flex-1 px-3 py-2 rounded-[10px] text-[13px] font-semibold transition-all border ${
                      selectedFilters.stale.includes(stale.toLowerCase())
                        ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                        : isDark
                          ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                          : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                    }`}
                  >
                    {stale}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
              isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
            }`}>Categories</h3>
            <div className="flex flex-wrap gap-2">
              {['Blockchain & Cryptocurrencies', 'Cryptography', 'Stellar', 'Web Development'].map((category) => (
                <button
                  key={category}
                  onClick={() => {
                    const lowerCategory = category.toLowerCase();
                    if (selectedFilters.categories.includes(lowerCategory)) {
                      setSelectedFilters(prev => ({
                        ...prev,
                        categories: prev.categories.filter(c => c !== lowerCategory)
                      }));
                    } else {
                      setSelectedFilters(prev => ({
                        ...prev,
                        categories: [...prev.categories, lowerCategory]
                      }));
                    }
                  }}
                  className={`px-3 py-1.5 rounded-[10px] text-[13px] font-semibold transition-all border ${
                    selectedFilters.categories.includes(category.toLowerCase())
                      ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                      : isDark
                        ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                        : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
              isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
            }`}>Languages</h3>
            <div className="flex flex-wrap gap-2">
              {['JavaScript', 'Makefile', 'Rust', 'Shell', 'TypeScript'].map((language) => (
                <button
                  key={language}
                  onClick={() => {
                    const lowerLanguage = language.toLowerCase();
                    if (selectedFilters.languages.includes(lowerLanguage)) {
                      setSelectedFilters(prev => ({
                        ...prev,
                        languages: prev.languages.filter(l => l !== lowerLanguage)
                      }));
                    } else {
                      setSelectedFilters(prev => ({
                        ...prev,
                        languages: [...prev.languages, lowerLanguage]
                      }));
                    }
                  }}
                  className={`px-3 py-1.5 rounded-[10px] text-[13px] font-semibold transition-all border ${
                    selectedFilters.languages.includes(language.toLowerCase())
                      ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                      : isDark
                        ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                        : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>
          </div>

          {/* Labels */}
          <div>
            <h3 className={`text-[13px] font-semibold mb-2.5 transition-colors ${
              isDark ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
            }`}>Labels</h3>
            
            {/* Search Bar */}
            <div className={`mb-3 px-3 py-2 rounded-[10px] border transition-colors ${
              isDark
                ? 'bg-white/[0.08] border-white/15'
                : 'bg-white/[0.15] border-white/25'
            }`}>
              <div className="flex items-center gap-2">
                <Search className={`w-4 h-4 flex-shrink-0 ${isDark ? 'text-[#b8a898]' : 'text-[#7a6b5a]'}`} />
                <input
                  type="text"
                  placeholder="Search"
                  value={labelSearch}
                  onChange={(e) => setLabelSearch(e.target.value)}
                  className={`flex-1 bg-transparent border-none outline-none text-[13px] placeholder:text-[13px] transition-colors ${
                    isDark
                      ? 'text-[#e8dfd0] placeholder-[#b8a898]/60'
                      : 'text-[#2d2820] placeholder-[#7a6b5a]/60'
                  }`}
                />
              </div>
            </div>

            {/* Label Pills */}
            <div className="flex flex-wrap gap-2">
              {['bug', 'Difficulty: easy', 'documentation'].filter(label => label.toLowerCase().includes(labelSearch.toLowerCase())).map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    const lowerLabel = label.toLowerCase();
                    if (selectedFilters.labels.includes(lowerLabel)) {
                      setSelectedFilters(prev => ({
                        ...prev,
                        labels: prev.labels.filter(l => l !== lowerLabel)
                      }));
                    } else {
                      setSelectedFilters(prev => ({
                        ...prev,
                        labels: [...prev.labels, lowerLabel]
                      }));
                    }
                  }}
                  className={`px-3 py-1.5 rounded-[10px] text-[13px] font-semibold transition-all border ${
                    selectedFilters.labels.includes(label.toLowerCase())
                      ? 'bg-[#c9983a]/20 border-[#c9983a] text-[#c9983a]'
                      : isDark
                        ? 'bg-white/[0.08] border-white/15 text-[#e8dfd0] hover:bg-white/[0.12]'
                        : 'bg-white/[0.15] border-white/25 text-[#7a6b5a] hover:bg-white/[0.2]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <ModalFooter>
          <button
            onClick={() => {
              setSelectedFilters({
                status: [],
                applicants: [],
                assignee: [],
                stale: [],
                categories: [],
                languages: [],
                labels: [],
              });
              setLabelSearch('');
            }}
            className={`px-5 py-2.5 rounded-[12px] text-[13px] font-semibold transition-all hover:scale-[1.02] ${
              isDark
                ? 'text-[#e8dfd0] hover:bg-white/[0.05]'
                : 'text-[#7a6b5a] hover:bg-white/[0.1]'
            }`}
          >
            Clear filters
          </button>
          <ModalButton variant="primary" onClick={() => setIsFilterModalOpen(false)}>
            Apply
          </ModalButton>
        </ModalFooter>
      </Modal>
    </div>
  );
}
