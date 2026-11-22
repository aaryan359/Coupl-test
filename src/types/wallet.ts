export type IconName =
  | 'users'
  | 'tuition'
  | 'repeat'
  | 'arrow'
  | 'headphones'
  | 'bolt'
  | 'eye'
  | 'eyeOff'
  | 'copy'
  | 'scan'
  | 'rupee'
  | 'transfer'
  | 'history'
  | 'statistics'
  | 'bill'
  | 'card'
  | 'more'
  | 'chevron'
  | 'home'
  | 'wallet'
  | 'trophy'
  | 'heart'
  | 'close';
export interface WalletProfile {
  primaryName: string;
  initials: string;
}
export interface PaymentCard {
  holderInitials: string;
  label: string;
  number: string;
  expiry: string;
  cvv: string;
}
export type WalletActionId =
  | 'scan'
  | 'add'
  | 'transfer'
  | 'history'
  | 'statistics'
  | 'bills'
  | 'payee'
  | 'tuition'
  | 'autopay';
export type NavigationId =
  | 'home'
  | 'wallet'
  | 'history'
  | 'rewards'
  | 'favorites';
export interface WalletAction {
  id: WalletActionId;
  label: string;
  icon: IconName;
  isNew?: boolean;
}
export interface NavigationItem {
  id: NavigationId;
  label: string;
  icon: IconName;
}
export interface WalletData {
  profile: WalletProfile;
  balance: number;
  currency: string;
  card: PaymentCard;
  budgetPercent: number;
}
