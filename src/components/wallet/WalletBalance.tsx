import { WalletText as Text } from './WalletText';
import { StyleSheet, View } from 'react-native';
import { walletTheme as theme } from '../../theme/wallet';

interface WalletBalanceProps {
  balance: number;
  currency: string;
  visible: boolean;
  onToggle: () => void;
}
export function WalletBalance({
  balance,
  currency,
  visible,
}: WalletBalanceProps) {
  return (
    <View style={styles.balance}>
      <Text style={styles.caption}>Combined Wallet Balance</Text>
      <Text
        accessibilityLabel={
          visible ? `Wallet balance ${balance} rupees` : 'Balance hidden'
        }
        style={styles.amount}
      >
        {currency} {visible ? balance.toLocaleString('en-IN') : '••,•••'}
      </Text>
      <Text style={styles.status}>Wallet &amp; Card Active</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  balance: { height: 202, alignItems: 'center', paddingTop: 61 },
  caption: { fontSize: 14, color: theme.muted },
  amount: {
    marginTop: 14,
    fontSize: 46,
    lineHeight: 58,
    fontWeight: '700',
    color: theme.text,
    letterSpacing: 1,
  },
  status: { color: theme.green, fontSize: 14, marginTop: 8 },
  visibility: {
    position: 'absolute',
    right: 24,
    bottom: 10,
    backgroundColor: 'transparent',
    borderColor: '#3b245b',
  },
});
