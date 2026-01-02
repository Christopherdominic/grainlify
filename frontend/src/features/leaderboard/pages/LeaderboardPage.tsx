import { useState, useEffect } from 'react';
import { LeaderboardType, FilterType, Petal } from '../types';
import { leaderboardData, projectsData } from '../data/leaderboardData';
import { FallingPetals } from '../components/FallingPetals';
import { LeaderboardTypeToggle } from '../components/LeaderboardTypeToggle';
import { LeaderboardHero } from '../components/LeaderboardHero';
import { ContributorsPodium } from '../components/ContributorsPodium';
import { ProjectsPodium } from '../components/ProjectsPodium';
import { FiltersSection } from '../components/FiltersSection';
import { ContributorsTable } from '../components/ContributorsTable';
import { ProjectsTable } from '../components/ProjectsTable';
import { LeaderboardStyles } from '../components/LeaderboardStyles';

export function LeaderboardPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('overall');
  const [leaderboardType, setLeaderboardType] = useState<LeaderboardType>('contributors');
  const [showEcosystemDropdown, setShowEcosystemDropdown] = useState(false);
  const [selectedEcosystem, setSelectedEcosystem] = useState('All Ecosystems');
  const [petals, setPetals] = useState<Petal[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate falling petals on mount
  useEffect(() => {
    const generatePetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 30; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 5,
          duration: 8 + Math.random() * 6,
          rotation: Math.random() * 360,
          size: 0.6 + Math.random() * 0.8,
        });
      }
      setPetals(newPetals);
    };

    generatePetals();
    setTimeout(() => setIsLoaded(true), 100);

    // Regenerate petals every 15 seconds for continuous effect
    const interval = setInterval(generatePetals, 15000);
    return () => clearInterval(interval);
  }, []);

  const contributorTopThree = leaderboardData.slice(0, 3);
  const projectTopThree = projectsData.slice(0, 3);

  return (
    <div className="space-y-6 relative">
      {/* Falling Golden Petals - Full Page */}
      <FallingPetals petals={petals} />

      {/* Leaderboard Type Toggle - Floating Above Everything */}
      <LeaderboardTypeToggle
        leaderboardType={leaderboardType}
        onToggle={setLeaderboardType}
        isLoaded={isLoaded}
      />

      {/* Hero Header Section */}
      <LeaderboardHero leaderboardType={leaderboardType} isLoaded={isLoaded}>
        {/* Top 3 Podium - Contributors */}
        {leaderboardType === 'contributors' && (
          <ContributorsPodium topThree={contributorTopThree} isLoaded={isLoaded} />
        )}

        {/* Top 3 Podium - Projects */}
        {leaderboardType === 'projects' && (
          <ProjectsPodium topThree={projectTopThree} isLoaded={isLoaded} />
        )}
      </LeaderboardHero>

      {/* Filters Section */}
      <FiltersSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        selectedEcosystem={selectedEcosystem}
        onEcosystemChange={setSelectedEcosystem}
        showDropdown={showEcosystemDropdown}
        onToggleDropdown={() => setShowEcosystemDropdown(!showEcosystemDropdown)}
        isLoaded={isLoaded}
      />

      {/* Leaderboard Table - Contributors */}
      {leaderboardType === 'contributors' && (
        <ContributorsTable
          data={leaderboardData}
          activeFilter={activeFilter}
          isLoaded={isLoaded}
        />
      )}

      {/* Leaderboard Table - Projects */}
      {leaderboardType === 'projects' && (
        <ProjectsTable
          data={projectsData}
          activeFilter={activeFilter}
          isLoaded={isLoaded}
        />
      )}

      {/* CSS Animations */}
      <LeaderboardStyles />
    </div>
  );
}
