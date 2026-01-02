import { Star, GitFork, X } from 'lucide-react';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import { useState } from 'react';
import { Dropdown } from '../../../shared/components/ui/Dropdown';
import { ProjectCard, Project } from '../components/ProjectCard';

interface BrowsePageProps {
  onProjectClick?: (id: string) => void;
}

export function BrowsePage({ onProjectClick }: BrowsePageProps) {
  const { theme } = useTheme();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({
    languages: '',
    ecosystems: '',
    categories: '',
    tags: ''
  });
  const [selectedFilters, setSelectedFilters] = useState<{ [key: string]: string[] }>({
    languages: [],
    ecosystems: [],
    categories: [],
    tags: []
  });

  // Filter options data
  const filterOptions = {
    languages: [
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'Go' },
      { name: 'Rust' },
      { name: 'Java' }
    ],
    ecosystems: [
      { name: 'React' },
      { name: 'Vue.js' },
      { name: 'Angular' },
      { name: 'Svelte' },
      { name: 'Next.js' }
    ],
    categories: [
      { name: 'Frontend' },
      { name: 'Backend' },
      { name: 'Full Stack' },
      { name: 'DevOps' },
      { name: 'Mobile' }
    ],
    tags: [
      { name: 'Good first issues' },
      { name: 'Open issues' },
      { name: 'Help wanted' },
      { name: 'Bug' },
      { name: 'Feature' },
      { name: 'Documentation' }
    ]
  };

  const toggleFilter = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }));
  };

  const clearFilter = (filterType: string, value: string) => {
    setSelectedFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].filter(v => v !== value)
    }));
  };

  const getFilteredOptions = (filterType: string) => {
    const searchTerm = searchTerms[filterType].toLowerCase();
    return filterOptions[filterType as keyof typeof filterOptions].filter((option: any) =>
      option.name.toLowerCase().includes(searchTerm)
    );
  };

  const allProjects: Project[] = [
    {
      id: 1,
      name: 'React Ecosystem',
      icon: '⚛️',
      stars: '4.9M',
      forks: '2.6M',
      contributors: 45,
      openIssues: 12,
      prs: 0,
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
      contributors: 78,
      openIssues: 20,
      prs: 0,
      description: 'The React framework for production with server-side rendering and static generation.',
      tags: ['Frontend'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 3,
      name: 'Vue.js',
      icon: 'V',
      stars: '214K',
      forks: '36K',
      contributors: 94,
      openIssues: 8,
      prs: 0,
      description: 'Progressive JavaScript framework for building user interfaces and SPA.',
      tags: ['Framework'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 4,
      name: 'Angular',
      icon: 'A',
      stars: '93.5K',
      forks: '24K',
      contributors: 120,
      openIssues: 35,
      prs: 0,
      description: 'A platform and framework for building single-page client applications.',
      tags: ['Frontend', 'TypeScript'],
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 5,
      name: 'Svelte',
      icon: 'S',
      stars: '76K',
      forks: '4K',
      contributors: 298,
      openIssues: 10,
      prs: 0,
      description: 'Cybernetically enhanced web apps with a radical new approach.',
      tags: ['Framework'],
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 6,
      name: 'Express.js',
      icon: 'E',
      stars: '64K',
      forks: '15K',
      contributors: 152,
      openIssues: 15,
      prs: 0,
      description: 'Fast, unopinionated, minimalist web framework for Node.js.',
      tags: ['Backend', 'JavaScript'],
      color: 'from-gray-600 to-gray-800',
    },
    {
      id: 7,
      name: 'Django',
      icon: 'D',
      stars: '76K',
      forks: '31K',
      contributors: 615,
      openIssues: 26,
      prs: 0,
      description: 'High-level Python web framework that encourages rapid development.',
      tags: ['Backend', 'Python'],
      color: 'from-green-600 to-green-800',
    },
    {
      id: 8,
      name: 'Golang',
      icon: 'G',
      stars: '118K',
      forks: '17K',
      contributors: 96,
      openIssues: 22,
      prs: 0,
      description: 'An open-source programming language for building simple, secure software.',
      tags: ['Language'],
      color: 'from-cyan-500 to-blue-600',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Active Filters Display */}
      {Object.values(selectedFilters).some(arr => arr.length > 0) && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(selectedFilters).map(([filterType, values]) =>
            values.map(value => (
              <span
                key={`${filterType}-${value}`}
                className={`px-3.5 py-2 rounded-[10px] text-[13px] font-semibold border-[1.5px] flex items-center gap-2 transition-all hover:scale-105 shadow-lg ${
                  theme === 'dark'
                    ? 'bg-[#a17932] border-[#c9983a] text-white'
                    : 'bg-[#b8872f] border-[#a17932] text-white'
                }`}
              >
                {value}
                <button
                  onClick={() => clearFilter(filterType, value)}
                  className="hover:text-red-200 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </span>
            ))
          )}
        </div>
      )}

      {/* Filters */}
      <div className="flex items-center flex-wrap gap-3">
        {['languages', 'ecosystems', 'categories', 'tags'].map((filterType) => (
          <Dropdown
            key={filterType}
            filterType={filterType}
            options={filterOptions[filterType as keyof typeof filterOptions]}
            selectedValues={selectedFilters[filterType]}
            onToggle={(value) => toggleFilter(filterType, value)}
            searchValue={searchTerms[filterType]}
            onSearchChange={(value) => setSearchTerms(prev => ({ ...prev, [filterType]: value }))}
            isOpen={openDropdown === filterType}
            onToggleOpen={() => setOpenDropdown(openDropdown === filterType ? null : filterType)}
            onClose={() => setOpenDropdown(null)}
          />
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {allProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={onProjectClick}
          />
        ))}
      </div>
    </div>
  );
}