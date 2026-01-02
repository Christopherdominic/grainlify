import { useState } from 'react';
import { useTheme } from '../../../shared/contexts/ThemeContext';
import { Shield, Globe, Clock, Target, Plus, Sparkles } from 'lucide-react';
import { Modal, ModalFooter, ModalButton, ModalInput, ModalSelect } from '../../../shared/components/ui/Modal';

export function AdminPage() {
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
    console.log('Admin - Add Ecosystem:', formData);
    setShowAddModal(false);
    // Reset form
    setFormData({
      name: '',
      description: '',
      status: 'active',
      websiteUrl: ''
    });
  };

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      <div className={`backdrop-blur-[40px] bg-gradient-to-br rounded-[28px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-10 transition-all overflow-hidden relative ${
        theme === 'dark'
          ? 'from-white/[0.08] to-white/[0.04] border-white/10'
          : 'from-white/[0.15] to-white/[0.08] border-white/20'
      }`}>
        {/* Decorative gradient */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-[#c9983a]/20 to-transparent rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-[12px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] shadow-[0_6px_20px_rgba(162,121,44,0.35)] border border-white/10">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h1 className={`text-[36px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>Admin Panel</h1>
              </div>
              <p className={`text-[16px] max-w-3xl transition-colors ${
                theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
              }`}>
                Manage ecosystems, review requests, and oversee platform operations.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className={`px-4 py-2 rounded-[12px] backdrop-blur-[20px] border transition-colors ${
                theme === 'dark'
                  ? 'bg-white/[0.08] border-white/15 text-[#d4d4d4]'
                  : 'bg-white/[0.15] border-white/25 text-[#7a6b5a]'
              }`}>
                <span className="text-[13px] font-medium">Admin Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ecosystem Management Section */}
      <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
        theme === 'dark'
          ? 'bg-white/[0.08] border-white/10'
          : 'bg-white/[0.15] border-white/20'
      }`}>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className={`text-[24px] font-bold mb-2 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>Ecosystem Management</h2>
            <p className={`text-[14px] transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>Add, edit, or remove ecosystems from the platform</p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="group px-6 py-3.5 bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white rounded-[16px] font-semibold text-[14px] shadow-[0_6px_20px_rgba(162,121,44,0.35)] hover:shadow-[0_10px_30px_rgba(162,121,44,0.5)] transition-all flex items-center gap-2.5 border border-white/10 hover:scale-105"
          >
            <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
            Add New Ecosystem
            <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className={`backdrop-blur-[30px] rounded-[16px] border p-5 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.06] border-white/10'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-[12px] mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Total Ecosystems</p>
                <p className={`text-[28px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>9</p>
              </div>
              <div className="p-3 rounded-[12px] bg-gradient-to-br from-[#c9983a]/20 to-[#a67c2e]/10 border border-[#c9983a]/20">
                <Globe className="w-6 h-6 text-[#c9983a]" />
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-[30px] rounded-[16px] border p-5 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.06] border-white/10'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-[12px] mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Pending Requests</p>
                <p className={`text-[28px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>3</p>
              </div>
              <div className="p-3 rounded-[12px] bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-500/20">
                <Clock className="w-6 h-6 text-blue-500" />
              </div>
            </div>
          </div>

          <div className={`backdrop-blur-[30px] rounded-[16px] border p-5 transition-colors ${
            theme === 'dark'
              ? 'bg-white/[0.06] border-white/10'
              : 'bg-white/[0.12] border-white/20'
          }`}>
            <div className="flex items-center justify-between">
              <div>
                <p className={`text-[12px] mb-1 transition-colors ${
                  theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
                }`}>Active Projects</p>
                <p className={`text-[28px] font-bold transition-colors ${
                  theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
                }`}>4,420</p>
              </div>
              <div className="p-3 rounded-[12px] bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/20">
                <Target className="w-6 h-6 text-green-500" />
              </div>
            </div>
          </div>
        </div>

        {/* Info Message */}
        <div className={`backdrop-blur-[30px] rounded-[16px] border p-5 flex items-start gap-4 transition-colors ${
          theme === 'dark'
            ? 'bg-white/[0.06] border-white/10'
            : 'bg-white/[0.12] border-white/20'
        }`}>
          <div className="p-2 rounded-[10px] bg-gradient-to-br from-[#c9983a]/20 to-[#a67c2e]/10 border border-[#c9983a]/20">
            <Sparkles className="w-5 h-5 text-[#c9983a]" />
          </div>
          <div>
            <p className={`text-[14px] font-medium mb-1 transition-colors ${
              theme === 'dark' ? 'text-[#f5f5f5]' : 'text-[#2d2820]'
            }`}>Ecosystem Management Tips</p>
            <p className={`text-[13px] leading-relaxed transition-colors ${
              theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
            }`}>
              Add ecosystems with accurate descriptions and valid website URLs. Review user requests regularly to maintain platform quality.
            </p>
          </div>
        </div>
      </div>

      {/* Add Ecosystem Modal */}
      <Modal
        isOpen={showAddModal}
        onClose={() => setShowAddModal(false)}
        title="Add New Ecosystem"
        width="lg"
      >
        <p className={`text-[14px] mb-6 transition-colors ${
          theme === 'dark' ? 'text-[#d4d4d4]' : 'text-[#7a6b5a]'
        }`}>Create a new ecosystem entry for the platform</p>

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
              <Plus className="w-4 h-4" />
              Add Ecosystem
            </ModalButton>
          </ModalFooter>
        </form>
      </Modal>
    </div>
  );
}