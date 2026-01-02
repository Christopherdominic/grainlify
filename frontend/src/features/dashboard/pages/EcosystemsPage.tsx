import { useState } from 'react';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import { Search, Globe, Plus, ArrowUpRight, Sparkles } from 'lucide-react';
import { Modal, ModalFooter, ModalButton, ModalInput, ModalSelect } from '../../../shared/components/ui/Modal';

interface EcosystemsPageProps {
  onEcosystemClick: (id: string, name: string) => void;
}

export function EcosystemsPage({ onEcosystemClick }: EcosystemsPageProps) {
  const { theme } = useTheme();
  const [showAddModal, setShowAddModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    status: 'active',
    websiteUrl: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form data:', formData);
    setShowAddModal(false);
    // Reset form
    setFormData({
      name: '',
      description: '',
      status: 'active',
      websiteUrl: ''
    });
  };

  const [showRequestModal, setShowRequestModal] = useState(false);
  const [requestData, setRequestData] = useState({
    userName: '',
    userEmail: '',
    ecosystemName: '',
    reason: '',
    additionalInfo: ''
  });

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle request submission
    console.log('Request data:', requestData);
    setShowRequestModal(false);
    // Reset form
    setRequestData({
      userName: '',
      userEmail: '',
      ecosystemName: '',
      reason: '',
      additionalInfo: ''
    });
  };

  const ecosystems = [
    {
      id: 1,
      letter: 'W',
      name: 'Web3 Ecosystem',
      projects: 420,
      contributors: 38,
      description: 'Projects building decentralized protocols, tooling, and on-chain value',
      languages: [
        { name: 'Rust', percentage: 31, color: '#CE422B' },
        { name: 'TypeScript', percentage: 27, color: '#3178C6' },
      ],
      color: 'from-purple-600 to-blue-600',
    },
    {
      id: 2,
      letter: 'A',
      name: 'AI & ML Ecosystem',
      projects: 310,
      contributors: 22,
      description: 'Frameworks and tooling for machine learning and AI development',
      languages: [
        { name: 'Python', percentage: 48, color: '#3776AB' },
        { name: 'C++', percentage: 21, color: '#00599C' },
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 3,
      letter: 'B',
      name: 'Blockchain Infrastructure',
      projects: 560,
      contributors: 45,
      description: 'Core blockchain infrastructures, consensus mechanisms, and network protocols',
      languages: [
        { name: 'Go', percentage: 38, color: '#00ADD8' },
        { name: 'Rust', percentage: 29, color: '#CE422B' },
      ],
      color: 'from-indigo-600 to-purple-600',
    },
    {
      id: 4,
      letter: 'D',
      name: 'Developer Tools',
      projects: 720,
      contributors: 68,
      description: 'Essential tools and libraries for modern software development',
      languages: [
        { name: 'JavaScript', percentage: 42, color: '#F7DF1E' },
        { name: 'TypeScript', percentage: 35, color: '#3178C6' },
      ],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 5,
      letter: 'C',
      name: 'Cloud-Native',
      projects: 650,
      contributors: 52,
      description: 'Container orchestration, microservices, and cloud infrastructure solutions',
      languages: [
        { name: 'Go', percentage: 51, color: '#00ADD8' },
        { name: 'Java', percentage: 18, color: '#007396' },
      ],
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 6,
      letter: 'S',
      name: 'Security & Privacy',
      projects: 390,
      contributors: 28,
      description: 'Cybersecurity tools, encryption libraries, and privacy-preserving technologies',
      languages: [
        { name: 'C', percentage: 34, color: '#555555' },
        { name: 'Rust', percentage: 28, color: '#CE422B' },
      ],
      color: 'from-red-600 to-pink-600',
    },
    {
      id: 7,
      letter: 'D',
      name: 'Data Science',
      projects: 490,
      contributors: 35,
      description: 'Data engineering, analytics, and visualization tools for insights',
      languages: [
        { name: 'Python', percentage: 56, color: '#3776AB' },
        { name: 'R', percentage: 22, color: '#276DC3' },
      ],
      color: 'from-cyan-600 to-blue-700',
    },
    {
      id: 8,
      letter: 'M',
      name: 'Mobile Development',
      projects: 640,
      contributors: 41,
      description: 'Frameworks and tools for iOS, Android, and cross-platform mobile apps',
      languages: [
        { name: 'Swift', percentage: 36, color: '#FA7343' },
        { name: 'Kotlin', percentage: 31, color: '#7F52FF' },
      ],
      color: 'from-pink-500 to-rose-500',
    },
    {
      id: 9,
      letter: 'G',
      name: 'Gaming & Game Engines',
      projects: 420,
      contributors: 33,
      description: 'Game development frameworks, engines, and gaming infrastructure',
      languages: [
        { name: 'C++', percentage: 44, color: '#00599C' },
        { name: 'C#', percentage: 28, color: '#239120' },
      ],
      color: 'from-violet-600 to-purple-700',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className={`backdrop-blur-[40px] bg-gradient-to-br rounded-[28px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-10 transition-colors ${
        theme === 'dark'
          ? 'from-white/[0.08] to-white/[0.04] border-white/10'
          : 'from-white/[0.15] to-white/[0.08] border-white/20'
      }`}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h1 className={`text-[36px] font-bold mb-3 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>Explore Ecosystems</h1>
            <p className={`text-[16px] max-w-3xl transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              Discover a wide range of projects shaping the future of open source, each driving revolutionary change.
            </p>
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#c9983a] to-[#a67c2e] flex items-center justify-center shadow-[0_8px_24px_rgba(162,121,44,0.3)] border border-white/15">
            <Globe className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 z-10 pointer-events-none transition-colors ${
          theme === 'dark' ? 'text-[#c9983a]' : 'text-[#8b6f3a]'
        }`} />
        <input
          type="text"
          placeholder="Search ecosystems..."
          className={`w-full pl-12 pr-4 py-3.5 rounded-[14px] backdrop-blur-[30px] border focus:outline-none transition-all text-[14px] shadow-[inset_0px_0px_4px_0px_rgba(0,0,0,0.12)] relative ${
            theme === 'dark'
              ? 'bg-white/[0.08] border-white/15 text-[#f5f5f5] placeholder-[#d4d4d4] focus:bg-white/[0.12] focus:border-[#c9983a]/30'
              : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a] focus:bg-white/[0.2] focus:border-[#c9983a]/30'
          }`}
        />
      </div>

      {/* Ecosystems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {ecosystems.map((ecosystem) => (
          <div
            key={ecosystem.id}
            onClick={() => onEcosystemClick(ecosystem.id, ecosystem.name)}
            className={`backdrop-blur-[30px] rounded-[20px] border p-6 transition-all cursor-pointer group ${
              theme === 'dark'
                ? 'bg-white/[0.08] border-white/10 hover:bg-white/[0.12] hover:shadow-[0_8px_24px_rgba(201,152,58,0.15)]'
                : 'bg-white/[0.15] border-white/25 hover:bg-white/[0.2] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)]'
            }`}
          >
            {/* Header with Icon */}
            <div className="flex items-start justify-between mb-5">
              <div className={`w-14 h-14 rounded-[14px] bg-gradient-to-br ${ecosystem.color} flex items-center justify-center shadow-lg border border-white/20`}>
                <span className="text-white text-[24px] font-bold">{ecosystem.letter}</span>
              </div>
            </div>

            {/* Title */}
            <h3 className={`text-[18px] font-bold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>{ecosystem.name}</h3>

            {/* Stats */}
            <div className="flex items-center gap-6 mb-4">
              <div>
                <div className={`text-[11px] mb-0.5 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Projects</div>
                <div className={`text-[20px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{ecosystem.projects}</div>
              </div>
              <div>
                <div className={`text-[11px] mb-0.5 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Contributors</div>
                <div className={`text-[20px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>{ecosystem.contributors}</div>
              </div>
            </div>

            {/* Description */}
            <p className={`text-[13px] mb-5 leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              {ecosystem.description}
            </p>

            {/* Languages */}
            <div className="flex items-center gap-3">
              {ecosystem.languages.map((lang, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <div 
                    className="w-2.5 h-2.5 rounded-full shadow-sm" 
                    style={{ backgroundColor: lang.color }}
                  />
                  <span className={`text-[11px] transition-colors ${
                    theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                  }`}>{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Request Ecosystem Section */}
      <div className={`backdrop-blur-[40px] bg-gradient-to-br rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-10 transition-all overflow-hidden relative ${
        theme === 'dark'
          ? 'from-white/[0.08] to-white/[0.04] border-white/10'
          : 'from-white/[0.15] to-white/[0.08] border-white/20'
      }`}>
        {/* Decorative gradient circles */}
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br from-[#c9983a]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-gradient-to-br from-[#c9983a]/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#c9983a] to-[#a67c2e] shadow-[0_8px_24px_rgba(162,121,44,0.4)] mb-6 border border-white/15">
              <Sparkles className="w-10 h-10 text-white" />
            </div>
            
            <h3 className={`text-[28px] font-bold mb-4 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>Missing Your Ecosystem?</h3>
            
            <p className={`text-[16px] mb-6 leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              Don't see your ecosystem in the list? No worries! Request the admin to add it to our platform.
            </p>
            
            <button
              onClick={() => setShowRequestModal(true)}
              className="group px-8 py-4 bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white rounded-[16px] font-semibold text-[15px] shadow-[0_6px_20px_rgba(162,121,44,0.35)] hover:shadow-[0_10px_30px_rgba(162,121,44,0.5)] transition-all flex items-center gap-3 mx-auto border border-white/10 hover:scale-105"
            >
              <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
              Request Ecosystem Addition
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Add Ecosystem Modal (Admin Only) */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Ecosystem"
        width="md"
      >
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <ModalInput
              label="Ecosystem Name"
              value={formData.name}
              onChange={(value) => setFormData({ ...formData, name: value })}
              placeholder="e.g., Web3 Ecosystem"
              required
            />

            <ModalInput
              label="Description"
              value={formData.description}
              onChange={(value) => setFormData({ ...formData, description: value })}
              placeholder="Describe the ecosystem..."
              rows={4}
              required
            />

            <ModalSelect
              label="Status"
              value={formData.status}
              onChange={(value) => setFormData({ ...formData, status: value })}
              options={[
                { value: 'active', label: 'Active' },
                { value: 'inactive', label: 'Inactive' }
              ]}
            />

            <ModalInput
              label="Website URL"
              type="url"
              value={formData.websiteUrl}
              onChange={(value) => setFormData({ ...formData, websiteUrl: value })}
              placeholder="https://example.com"
              required
            />
          </div>

          <ModalFooter>
            <ModalButton onClick={() => setShowAddModal(false)}>
              Cancel
            </ModalButton>
            <ModalButton type="submit" variant="primary">
              Add Ecosystem
            </ModalButton>
          </ModalFooter>
        </form>
      </Modal>

      {/* Request Ecosystem Modal */}
      <Modal
        isOpen={showRequestModal}
        onClose={() => setShowRequestModal(false)}
        title="Request Ecosystem Addition"
        icon={<Sparkles className="w-6 h-6 text-white" />}
        width="lg"
        maxHeight
      >
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
        }`}>Fill out the form below and we'll review your request</p>

        <form onSubmit={handleRequestSubmit}>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <ModalInput
                label="Your Name"
                value={requestData.userName}
                onChange={(value) => setRequestData({ ...requestData, userName: value })}
                placeholder="John Doe"
                required
              />

              <ModalInput
                label="Your Email"
                type="email"
                value={requestData.userEmail}
                onChange={(value) => setRequestData({ ...requestData, userEmail: value })}
                placeholder="john@example.com"
                required
              />
            </div>

            <ModalInput
              label="Ecosystem Name"
              value={requestData.ecosystemName}
              onChange={(value) => setRequestData({ ...requestData, ecosystemName: value })}
              placeholder="e.g., Web3 Ecosystem"
              required
            />

            <ModalInput
              label="Why do you want this ecosystem added?"
              value={requestData.reason}
              onChange={(value) => setRequestData({ ...requestData, reason: value })}
              placeholder="Tell us why this ecosystem would be valuable to the community..."
              rows={4}
              required
            />

            <ModalInput
              label="Additional Information (Optional)"
              value={requestData.additionalInfo}
              onChange={(value) => setRequestData({ ...requestData, additionalInfo: value })}
              placeholder="Any other details you'd like to share..."
              rows={3}
            />
          </div>

          <ModalFooter>
            <ModalButton onClick={() => setShowRequestModal(false)}>
              Cancel
            </ModalButton>
            <ModalButton type="submit" variant="primary">
              <Sparkles className="w-4 h-4" />
              Submit Request
            </ModalButton>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}