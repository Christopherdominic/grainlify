import { useState } from 'react';
import { Plus, Trash2, Wallet, Copy, CheckCircle2, Star } from 'lucide-react';
import { useTheme } from '../../../../shared/contexts/ThemeContext';
import { PaymentMethod, EcosystemType, CryptoType } from '../../types';

interface PaymentMethodsTabProps {
  paymentMethods: PaymentMethod[];
  onAddPaymentMethod: (method: PaymentMethod) => void;
  onRemovePaymentMethod: (id: number) => void;
  onSetDefault: (id: number) => void;
}

export function PaymentMethodsTab({ 
  paymentMethods, 
  onAddPaymentMethod, 
  onRemovePaymentMethod,
  onSetDefault 
}: PaymentMethodsTabProps) {
  const { theme } = useTheme();
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedEcosystem, setSelectedEcosystem] = useState<EcosystemType>('ethereum');
  const [selectedCrypto, setSelectedCrypto] = useState<CryptoType>('usdc');
  const [walletAddress, setWalletAddress] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  // Get available crypto types based on selected ecosystem
  const getAvailableCryptos = (ecosystem: EcosystemType): CryptoType[] => {
    switch (ecosystem) {
      case 'ethereum':
        return ['usdc', 'usdt', 'eth'];
      case 'starknet':
        return ['usdc', 'usdt', 'strk'];
      case 'stellar':
        return ['usdc', 'usdt', 'xlm'];
      default:
        return ['usdc', 'usdt'];
    }
  };

  const handleEcosystemChange = (ecosystem: EcosystemType) => {
    setSelectedEcosystem(ecosystem);
    // Reset crypto to first available option
    const availableCryptos = getAvailableCryptos(ecosystem);
    setSelectedCrypto(availableCryptos[0]);
  };

  const handleAddPaymentMethod = () => {
    if (!walletAddress.trim()) return;

    const newMethod: PaymentMethod = {
      id: Date.now(),
      ecosystem: selectedEcosystem,
      cryptoType: selectedCrypto,
      walletAddress: walletAddress,
      isDefault: paymentMethods.length === 0, // First one is default
      createdAt: new Date().toISOString(),
    };

    onAddPaymentMethod(newMethod);
    setShowAddModal(false);
    setWalletAddress('');
    setSelectedEcosystem('ethereum');
    setSelectedCrypto('usdc');
  };

  const handleCopyAddress = (id: number, address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getEcosystemIcon = (ecosystem: EcosystemType) => {
    const colors = {
      ethereum: 'from-[#627EEA] to-[#4B5ECC]',
      starknet: 'from-[#EC796B] to-[#D96657]',
      stellar: 'from-[#14B6E7] to-[#0E8FB8]',
    };
    return colors[ecosystem];
  };

  const getCryptoLabel = (crypto: CryptoType) => {
    return crypto.toUpperCase();
  };

  return (
    <div className={`backdrop-blur-[40px] rounded-[24px] border shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-8 transition-colors ${
      theme === 'dark'
        ? 'bg-[#2d2820]/[0.4] border-white/10'
        : 'bg-white/[0.12] border-white/20'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className={`text-[20px] font-bold mb-2 transition-colors ${
            theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
          }`}>Payment Methods</h3>
          <p className={`text-[14px] transition-colors ${
            theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
          }`}>
            We support crypto payments only. Add your wallet addresses for USDC, USDT, ETH, and other tokens.
          </p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="px-5 py-3 rounded-[14px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[14px] shadow-[0_6px_24px_rgba(162,121,44,0.4)] hover:shadow-[0_8px_28px_rgba(162,121,44,0.5)] transition-all border border-white/10 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Wallet
        </button>
      </div>

      {/* Payment Methods List */}
      {paymentMethods.length > 0 ? (
        <div className="space-y-4">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              className={`p-6 rounded-[18px] backdrop-blur-[25px] border transition-all ${
                theme === 'dark'
                  ? 'bg-white/[0.08] border-white/15 hover:bg-white/[0.12]'
                  : 'bg-white/[0.08] border-white/15 hover:bg-white/[0.15]'
              } ${method.isDefault ? 'ring-2 ring-[#c9983a]/30' : ''}`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  {/* Ecosystem Icon */}
                  <div className={`w-12 h-12 rounded-[14px] bg-gradient-to-br ${getEcosystemIcon(method.ecosystem)} flex items-center justify-center flex-shrink-0`}>
                    <Wallet className="w-6 h-6 text-white" />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h4 className={`text-[16px] font-bold transition-colors ${
                        theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
                      }`}>
                        {getCryptoLabel(method.cryptoType)} on {method.ecosystem.charAt(0).toUpperCase() + method.ecosystem.slice(1)}
                      </h4>
                      {method.isDefault && (
                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#c9983a]/20 border border-[#c9983a]/30">
                          <Star className="w-3 h-3 text-[#c9983a] fill-[#c9983a]" />
                          <span className="text-[11px] font-semibold text-[#c9983a]">Default</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Wallet Address */}
                    <div className="flex items-center gap-2 mb-2">
                      <code className={`text-[13px] font-mono truncate transition-colors ${
                        theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
                      }`}>
                        {method.walletAddress}
                      </code>
                      <button
                        onClick={() => handleCopyAddress(method.id, method.walletAddress)}
                        className={`p-1.5 rounded-[8px] transition-all ${
                          theme === 'dark'
                            ? 'hover:bg-white/[0.15]'
                            : 'hover:bg-white/[0.2]'
                        }`}
                      >
                        {copiedId === method.id ? (
                          <CheckCircle2 className="w-4 h-4 text-[#22c55e]" />
                        ) : (
                          <Copy className={`w-4 h-4 transition-colors ${
                            theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
                          }`} />
                        )}
                      </button>
                    </div>

                    <p className={`text-[12px] transition-colors ${
                      theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#9a8b7a]'
                    }`}>
                      Added {new Date(method.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  {!method.isDefault && (
                    <button
                      onClick={() => onSetDefault(method.id)}
                      className={`px-4 py-2 rounded-[10px] text-[13px] font-medium transition-all ${
                        theme === 'dark'
                          ? 'bg-white/[0.08] border border-white/15 text-[#d4c5b0] hover:bg-white/[0.12]'
                          : 'bg-white/[0.15] border border-white/25 text-[#2d2820] hover:bg-white/[0.2]'
                      }`}
                    >
                      Set Default
                    </button>
                  )}
                  <button
                    onClick={() => onRemovePaymentMethod(method.id)}
                    className={`p-2.5 rounded-[10px] transition-all ${
                      theme === 'dark'
                        ? 'hover:bg-[#dc2626]/20 text-[#ef4444]'
                        : 'hover:bg-[#dc2626]/10 text-[#dc2626]'
                    }`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
            theme === 'dark' ? 'bg-white/[0.08]' : 'bg-white/[0.15]'
          }`}>
            <Wallet className={`w-8 h-8 ${
              theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
            }`} />
          </div>
          <p className={`text-[14px] mb-2 transition-colors ${
            theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
          }`}>
            No payment methods added yet
          </p>
          <p className={`text-[13px] transition-colors ${
            theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#9a8b7a]'
          }`}>
            Add your crypto wallet to receive payments
          </p>
        </div>
      )}

      {/* Add Payment Method Modal */}
      {showAddModal && (
        <>
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={() => setShowAddModal(false)} />
          
          <div className={`fixed top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-[101] p-8 max-h-[90vh] overflow-y-auto ${
            theme === 'dark'
              ? 'bg-[#3a3228] border-2 border-white/30'
              : 'bg-[#d4c5b0] border-2 border-white/40'
          }`}>
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-[20px] font-bold transition-colors ${
                theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
              }`}>Add Payment Method</h3>
              <button 
                onClick={() => setShowAddModal(false)} 
                className={`w-8 h-8 rounded-[10px] border flex items-center justify-center transition-all ${
                  theme === 'dark'
                    ? 'bg-white/[0.08] hover:bg-white/[0.15] border-white/20'
                    : 'bg-white/30 hover:bg-white/50 border-white/40'
                }`}
              >
                <Plus className={`w-4 h-4 rotate-45 ${
                  theme === 'dark' ? 'text-[#b8a898]' : 'text-[#7a6b5a]'
                }`} />
              </button>
            </div>

            <div className="space-y-5">
              {/* Ecosystem Selection */}
              <div>
                <label className={`block text-[14px] font-semibold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  Select Ecosystem
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {(['ethereum', 'starknet', 'stellar'] as EcosystemType[]).map((ecosystem) => (
                    <button
                      key={ecosystem}
                      onClick={() => handleEcosystemChange(ecosystem)}
                      className={`p-4 rounded-[14px] backdrop-blur-[25px] border-2 transition-all ${
                        selectedEcosystem === ecosystem
                          ? 'border-[#c9983a] bg-[#c9983a]/10'
                          : theme === 'dark'
                            ? 'border-white/15 bg-white/[0.08] hover:bg-white/[0.12]'
                            : 'border-white/25 bg-white/[0.15] hover:bg-white/[0.2]'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-[10px] bg-gradient-to-br ${getEcosystemIcon(ecosystem)} mx-auto mb-2 flex items-center justify-center`}>
                        <Wallet className="w-5 h-5 text-white" />
                      </div>
                      <p className={`text-[13px] font-semibold capitalize transition-colors ${
                        theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
                      }`}>
                        {ecosystem}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Crypto Type Selection */}
              <div>
                <label className={`block text-[14px] font-semibold mb-3 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  Select Token
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {getAvailableCryptos(selectedEcosystem).map((crypto) => (
                    <button
                      key={crypto}
                      onClick={() => setSelectedCrypto(crypto)}
                      className={`px-4 py-3 rounded-[12px] backdrop-blur-[25px] border-2 transition-all ${
                        selectedCrypto === crypto
                          ? 'border-[#c9983a] bg-[#c9983a]/10'
                          : theme === 'dark'
                            ? 'border-white/15 bg-white/[0.08] hover:bg-white/[0.12]'
                            : 'border-white/25 bg-white/[0.15] hover:bg-white/[0.2]'
                      }`}
                    >
                      <p className={`text-[14px] font-bold transition-colors ${
                        theme === 'dark' ? 'text-[#e8dfd0]' : 'text-[#2d2820]'
                      }`}>
                        {getCryptoLabel(crypto)}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Wallet Address Input */}
              <div>
                <label className={`block text-[14px] font-semibold mb-2 transition-colors ${
                  theme === 'dark' ? 'text-[#f5efe5]' : 'text-[#2d2820]'
                }`}>
                  Wallet Address
                </label>
                <input
                  type="text"
                  value={walletAddress}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  placeholder={`Enter your ${getCryptoLabel(selectedCrypto)} wallet address`}
                  className={`w-full px-4 py-3 rounded-[14px] backdrop-blur-[30px] border focus:outline-none text-[14px] font-mono transition-all ${
                    theme === 'dark'
                      ? 'bg-[#3d342c]/[0.4] border-white/15 text-[#f5efe5] placeholder-[#8a7e70]/50 focus:border-[#c9983a]/40'
                      : 'bg-white/[0.15] border-white/25 text-[#2d2820] placeholder-[#7a6b5a]/50 focus:bg-white/[0.2] focus:border-[#c9983a]/40'
                  }`}
                />
                <p className={`text-[12px] mt-2 transition-colors ${
                  theme === 'dark' ? 'text-[#8a7e70]' : 'text-[#9a8b7a]'
                }`}>
                  Make sure this address is correct. Payments sent to wrong addresses cannot be recovered.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className={`flex-1 px-6 py-3 rounded-[12px] backdrop-blur-[30px] border font-medium text-[14px] transition-all ${
                  theme === 'dark'
                    ? 'bg-white/[0.08] border-white/20 text-[#d4c5b0] hover:bg-white/[0.12]'
                    : 'bg-white/[0.2] border-white/30 text-[#2d2820] hover:bg-white/[0.25]'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleAddPaymentMethod}
                disabled={!walletAddress.trim()}
                className="flex-1 px-6 py-3 rounded-[12px] bg-gradient-to-br from-[#c9983a] to-[#a67c2e] text-white font-semibold text-[14px] shadow-[0_4px_16px_rgba(162,121,44,0.3)] hover:shadow-[0_6px_20px_rgba(162,121,44,0.4)] transition-all border border-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Add Wallet
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}