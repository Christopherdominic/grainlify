import { Eye, FileText, GitPullRequest, GitMerge } from 'lucide-react';
import { useTheme } from '../../../../shared/contexts/ThemeContext';
import { StatsCard } from './StatsCard';
import { ActivityItem } from './ActivityItem';
import { ApplicationsChart } from './ApplicationsChart';
import { StatCard, Activity, ChartDataPoint } from '../../types';

export function DashboardTab() {
  const { theme } = useTheme();
  // Stats data
  const stats: StatCard[] = [
    {
      id: 1,
      title: 'Repository Views',
      subtitle: 'Last 7 days',
      value: 0,
      change: -100,
      icon: Eye,
    },
    {
      id: 2,
      title: 'Issue Views',
      subtitle: 'Last 7 days',
      value: 0,
      change: -100,
      icon: FileText,
    },
    {
      id: 3,
      title: 'Issue Applications',
      subtitle: 'Last 7 days',
      value: 0,
      change: 0,
      icon: FileText,
    },
    {
      id: 4,
      title: 'Pull Requests Opened',
      subtitle: 'Last 7 days',
      value: 1,
      change: 100,
      icon: GitPullRequest,
    },
    {
      id: 5,
      title: 'Pull Requests Merged',
      subtitle: 'Last 7 days',
      value: 1,
      change: 100,
      icon: GitMerge,
    },
  ];

  // Last activity data
  const activities: Activity[] = [
    {
      id: 1,
      type: 'pr',
      number: 734,
      title: 'Fix React Server Components CVE vulnerabilities',
      label: null,
      timeAgo: '2 days ago',
    },
    {
      id: 2,
      type: 'issue',
      number: 77,
      title: 'Add Invoice Expiration and Auto-Processing',
      label: '1 new applicant',
      timeAgo: '3 months ago',
    },
    {
      id: 3,
      type: 'pr',
      number: 120,
      title: 'Clean Up Cargo Build Warnings #50',
      label: null,
      timeAgo: '3 months ago',
    },
    {
      id: 4,
      type: 'pr',
      number: 119,
      title: 'Add Investor KYC and Verification System',
      label: null,
      timeAgo: '3 months ago',
    },
    {
      id: 5,
      type: 'issue',
      number: 158,
      title: 'Feat: Add Comprehensive Error Recovery and Circuit Breaker Patterns (#110)',
      label: null,
      timeAgo: '5 months ago',
    },
  ];

  // Applications history chart data
  const chartData: ChartDataPoint[] = [
    { month: 'May', applications: 12, merged: 0 },
    { month: 'Jun', applications: 18, merged: 0 },
    { month: 'Jul', applications: 45, merged: 0 },
    { month: 'Aug', applications: 32, merged: 0 },
    { month: 'Sep', applications: 38, merged: 8 },
    { month: 'Oct', applications: 28, merged: 12 },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-5 gap-5">
        {stats.map((stat, idx) => (
          <StatsCard key={stat.id} stat={stat} index={idx} />
        ))}
      </div>

      {/* Main Content: Last Activity & Applications History */}
      <div className="grid grid-cols-2 gap-6">
        {/* Last Activity */}
        <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 relative overflow-hidden group/activity transition-colors ${
          theme === 'dark'
            ? 'bg-[#2d2820]/[0.4] border-white/10'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          {/* Background Glow */}
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#c9983a]/8 to-transparent rounded-full blur-3xl pointer-events-none group-hover/activity:scale-125 transition-transform duration-1000" />
          
          <div className="relative">
            <h2 className={`text-[20px] font-bold mb-6 transition-colors ${
              theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
            }`}>Last activity</h2>

            {/* Activity List */}
            <div className="space-y-3">
              {activities.map((activity, idx) => (
                <ActivityItem key={activity.id} activity={activity} index={idx} />
              ))}
            </div>
          </div>
        </div>

        {/* Applications History */}
        <ApplicationsChart data={chartData} />
      </div>
    </>
  );
}