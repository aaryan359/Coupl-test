import { useState } from 'react';
import {
  Modal,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ActionGrid } from '../components/wallet/ActionGrid';
import { BottomNavigation } from '../components/wallet/BottomNavigation';
import { GradientSurface } from '../components/wallet/GradientSurface';
import { IconButton } from '../components/wallet/IconButton';
import { CashbackBanner } from '../components/wallet/CashbackBanner';
import { PaymentCard } from '../components/wallet/PaymentCard';
import { ProfileHeader } from '../components/wallet/ProfileHeader';
import { WalletBalance } from '../components/wallet/WalletBalance';
import { navigationItems, wallet, walletActions } from '../data/wallet';
import { walletTheme as theme } from '../theme/wallet';

import type {
  NavigationId,
  NavigationItem,
  WalletAction,
  WalletActionId,
} from '../types/wallet';

interface DetailSheet {
  title: string;
  description: string;
}

const actionDetails: Record<WalletActionId, string> = {
  scan: 'QR payments are coming soon.',
  add: 'Adding money to your wallet is coming soon.',
  transfer: 'IMPS transfers are coming soon.',
  payee: 'Your saved UPI payees will appear here.',
  history: 'No transactions yet.',
  statistics: 'You have used 0% of your budget.',
  bills: 'No upcoming bills.',
  tuition: 'Tuition payments are coming soon.',
  autopay: 'Your recurring payments will appear here.',
};

function Home() {
  const insets = useSafeAreaInsets();
  const { width } = useWindowDimensions();
  const layoutScale = Math.min(width / 424, 1.3);
  const [balanceVisible, setBalanceVisible] = useState(true);
  const [cardDetailsVisible, setCardDetailsVisible] = useState(true);
  const [selectedTab, setSelectedTab] = useState<NavigationId>('home');
  const [sheet, setSheet] = useState<DetailSheet | null>(null);

  const handleAction = (action: WalletAction) => {
    setSheet({
      title: action.label,
      description:
        actionDetails[action.id] ?? 'Your wallet settings will appear here.',
    });
  };
  const handleTab = (item: NavigationItem) => {
    setSelectedTab(item.id);
    if (item.id === 'home') {
      return;
    }
    const descriptions: Record<Exclude<NavigationId, 'home'>, string> = {
      wallet: 'Your shared wallet is active. Combined balance: ₹0.',
      history: 'No transactions yet. Your shared activity will appear here.',
      rewards: 'Your rewards and achievements will appear here.',
      favorites: 'Your saved favorites will appear here.',
    };
    setSheet({ title: item.label, description: descriptions[item.id] });
  };
  const closeSheet = () => {
    setSheet(null);
    setSelectedTab('home');
  };

  return (
    <View style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingTop: Math.max(insets.top, 44 * layoutScale) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <GradientSurface
          colors={['#2c1656', '#05031b']}
          radial
          style={styles.heroGlow}
        />
        <View
          style={[
            styles.canvas,
            { height: 794 * layoutScale, width: 424 * layoutScale },
          ]}
        >
          <View style={[styles.main, { transform: [{ scale: layoutScale }] }]}>
            <ProfileHeader
              profile={wallet.profile}
              onSupport={() =>
                setSheet({
                  title: 'Support',
                  description: 'Support is currently unavailable.',
                })
              }
              onQuickAccess={() =>
                setSheet({
                  title: 'Quick access',
                  description:
                    'Choose an action from your wallet: Scan & Pay, Add Money, or Transfer.',
                })
              }
            />
            <WalletBalance
              balance={wallet.balance}
              currency={wallet.currency}
              visible={balanceVisible}
              onToggle={() => setBalanceVisible(previous => !previous)}
            />
            <PaymentCard
              card={wallet.card}
              budgetPercent={wallet.budgetPercent}
              detailsVisible={cardDetailsVisible}
              balanceVisible={balanceVisible}
              onToggleBalance={() => setBalanceVisible(previous => !previous)}
              onToggleDetails={() =>
                setCardDetailsVisible(previous => !previous)
              }
            />
            <ActionGrid actions={walletActions} onAction={handleAction} />
            <CashbackBanner
              onPress={() =>
                setSheet({
                  title: 'Cashback on your Coupl Card',
                  description:
                    'Use your Coupl Card for online payments and earn up to 1% cashback.',
                })
              }
            />
          </View>
        </View>
      </ScrollView>
      <BottomNavigation
        items={navigationItems}
        selectedId={selectedTab}
        bottomInset={insets.bottom}
        onSelect={handleTab}
      />
      <Modal
        visible={sheet !== null}
        transparent
        animationType="slide"
        onRequestClose={closeSheet}
      >
        <View style={styles.modal}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close details"
            onPress={closeSheet}
            style={StyleSheet.absoluteFill}
          />
          <View
            accessibilityViewIsModal
            style={[
              styles.sheet,
              { paddingBottom: Math.max(insets.bottom, 24) },
            ]}
          >
            <View style={styles.sheetHeader}>
              <Text style={styles.sheetTitle}>{sheet?.title}</Text>
              <IconButton icon="close" label="Close" onPress={closeSheet} />
            </View>
            <Text style={styles.sheetDescription}>{sheet?.description}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.background },
  scroll: { flex: 1 },
  content: { flexGrow: 1, position: 'relative' },
  heroGlow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 520 * 1.1,
  },
  canvas: { alignSelf: 'center' },
  main: {
    width: 424,
    paddingHorizontal: 16,
    transformOrigin: 'top left',
  },
  modal: { flex: 1, justifyContent: 'flex-end', backgroundColor: '#00000099' },
  sheet: {
    backgroundColor: '#160e2b',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
    borderWidth: 1,
    borderColor: theme.border,
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 16,
  },
  sheetTitle: { color: theme.text, fontSize: 22, fontWeight: '600', flex: 1 },
  sheetDescription: {
    color: '#b8afc9',
    fontSize: 15,
    lineHeight: 24,
    marginTop: 18,
    marginBottom: 20,
  },
});
export default Home;
