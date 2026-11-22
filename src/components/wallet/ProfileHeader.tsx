import { WalletText as Text } from './WalletText';
import { StyleSheet, View } from 'react-native';
import type { WalletProfile } from '../../types/wallet';
import { walletTheme as theme } from '../../theme/wallet';
import { IconButton } from './IconButton';

interface ProfileHeaderProps {
  profile: WalletProfile;
  onSupport: () => void;
  onQuickAccess: () => void;
}
export function ProfileHeader({
  profile,
  onSupport,
  onQuickAccess,
}: ProfileHeaderProps) {
  return (
    <View style={styles.header}>
      <View style={styles.avatar}>
        <Text style={styles.initials}>{profile.initials}</Text>
      </View>
      <View style={styles.names}>
        <Text style={styles.name}>{profile.primaryName}</Text>
      </View>
      <IconButton
        icon="headphones"
        color="#f5efff"
        label="Contact support"
        onPress={onSupport}
        style={styles.support}
      />
      <IconButton
        icon="bolt"
        label="Quick access"
        onPress={onQuickAccess}
        color="#8350ed"
        style={styles.quick}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 24,
    gap: 14,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#303a96',
  },
  initials: { color: theme.text, fontSize: 16, fontWeight: '500' },
  names: { flex: 1, gap: 2 },
  name: { fontSize: 18, fontWeight: '500', color: theme.text },
  support: {
    borderWidth: 0,
    backgroundColor: '#02010a',
    width: 38,
    height: 38,
  },
  quick: { backgroundColor: '#070313', borderColor: '#2a184b' },
});
