import { WalletText as Text } from './WalletText';
import { StyleSheet, View } from 'react-native';
import type { PaymentCard as PaymentCardData } from '../../types/wallet';
import { GradientSurface } from './GradientSurface';
import { IconButton } from './IconButton';
import { CardTexture } from './CardTexture';
import { walletTheme as theme } from '../../theme/wallet';
interface PaymentCardProps {
  card: PaymentCardData;
  budgetPercent: number;
  detailsVisible: boolean;
  balanceVisible: boolean;
  onToggleBalance: () => void;
  onToggleDetails: () => void;
}
export function PaymentCard({
  card,
  budgetPercent,
  detailsVisible,
  balanceVisible,
  onToggleBalance,
  onToggleDetails,
}: PaymentCardProps) {
  return (
    <View>
      <GradientSurface
        colors={['#551d68', '#192751', '#283b9d']}
        style={styles.card}
      >
        <CardTexture />
        <View style={styles.cardHeader}>
          <View style={styles.avatar}>
            <Text style={styles.initials}>{card.holderInitials}</Text>
          </View>
          <Text style={styles.cardLabel}>{card.label}</Text>
        </View>
        <View style={styles.details}>
          <View style={styles.number}>
            <Text
              selectable
              numberOfLines={1}
              adjustsFontSizeToFit
              style={styles.value}
            >
              {detailsVisible ? card.number : '•••• •••• •••• 5002'}
            </Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.fieldValue}>{card.expiry}</Text>
            <Text style={styles.label}>Exp.</Text>
          </View>
          <View style={styles.field}>
            <Text style={styles.value}>
              {detailsVisible ? card.cvv : '•••'}
            </Text>
            <Text style={styles.label}>CVV</Text>
          </View>
        </View>
        <Text style={styles.numberLabel}>Card No.</Text>
      </GradientSurface>
      <View style={styles.controls}>
        <IconButton
          icon={balanceVisible ? 'eye' : 'eyeOff'}
          label={balanceVisible ? 'Hide balance' : 'Show balance'}
          onPress={onToggleBalance}
          style={styles.control}
        />
        <IconButton
          icon="copy"
          label={detailsVisible ? 'Hide card details' : 'Show card details'}
          onPress={onToggleDetails}
          style={styles.control}
        />
      </View>
      <View style={styles.budget}>
        <Text style={styles.budgetLabel}>Budget</Text>
        <View
          accessibilityRole="progressbar"
          accessibilityValue={{ min: 0, max: 100, now: budgetPercent }}
          style={styles.track}
        >
          <View style={[styles.fill, { width: `${budgetPercent}%` }]} />
        </View>
        <Text style={styles.percent}>{budgetPercent}%</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 185,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    paddingHorizontal: 26,
    paddingTop: 25,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff08',
  },
  initials: { color: theme.text, fontWeight: '600', fontSize: 16 },
  cardLabel: { color: '#f1e9fa', fontSize: 11, flexShrink: 1 },
  details: { flexDirection: 'row', marginTop: 14, alignItems: 'flex-start' },
  number: { width: 192 },
  field: {
    borderLeftWidth: 1,
    borderLeftColor: '#ffffff1c',
    paddingLeft: 12,
    marginRight: 12,
  },
  value: {
    fontSize: 17,
    letterSpacing: 0.6,
    color: '#ffffff',
    fontWeight: '500',
  },
  fieldValue: { fontSize: 16, letterSpacing: 0.2, color: '#f4edff' },
  label: { color: '#aaa5c5', fontSize: 14, marginTop: 4 },
  numberLabel: {
    color: '#aaa5c5',
    fontSize: 14,
    position: 'absolute',
    left: 26,
    top: 100,
  },
  controls: {
    position: 'absolute',
    right: 10,
    top: -45,
    width: 46,
    height: 101,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#58506a',
    backgroundColor: '#0d0b28ed',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 2,
  },
  control: {
    width: 40,
    height: 40,
    borderColor: '#24213c',
    backgroundColor: 'transparent',
  },
  budget: {
    height: 64,
    marginTop: -45,
    borderTopLeftRadius: 34,
    borderTopRightRadius: 34,
    borderTopWidth: 2,
    borderTopColor: '#9968fc',
    backgroundColor: '#07031e',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 11,
    paddingTop: 1,
  },
  budgetLabel: { color: '#9872ed', fontSize: 16 },
  track: {
    width: 166,
    height: 8,
    backgroundColor: '#242037',
    overflow: 'hidden',
  },
  fill: { height: '100%', backgroundColor: '#9467ef' },
  percent: { color: '#9872ed', fontSize: 18, fontWeight: '600' },
});
