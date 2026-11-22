import type { NavigationItem, WalletAction, WalletData } from '../types/wallet';

export const wallet: WalletData = {
  profile: { primaryName: 'Aryan Meena', initials: 'AM' },
  balance: 0,
  currency: '₹',
  card: {
    holderInitials: 'AM',
    label: 'RUPAY PLATINUM COUPL CARD',
    number: '6083 6231 0069 5002',
    expiry: '10/31',
    cvv: '138',
  },
  budgetPercent: 0,
};
export const walletActions: readonly WalletAction[] = [
  { id: 'scan', label: 'Scan & Pay', icon: 'scan', isNew: true },
  { id: 'add', label: 'Add Money', icon: 'rupee' },
  { id: 'payee', label: 'UPI Payee', icon: 'users', isNew: true },
  { id: 'transfer', label: 'IMPS', icon: 'transfer' },
  { id: 'statistics', label: 'Statistics', icon: 'statistics' },
  { id: 'bills', label: 'Bills', icon: 'bill' },
  { id: 'tuition', label: 'Tuition', icon: 'tuition' },
  { id: 'autopay', label: 'Auto Pay', icon: 'repeat' },
];
export const navigationItems: readonly NavigationItem[] = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'wallet', label: 'Wallet', icon: 'wallet' },
  { id: 'favorites', label: 'Favorites', icon: 'heart' },
  { id: 'history', label: 'History', icon: 'history' },
  { id: 'rewards', label: 'Rewards', icon: 'trophy' },
];
