import { WalletText as Text } from './WalletText';
import { Pressable, StyleSheet, View } from 'react-native';
import type { WalletAction } from '../../types/wallet';
import { NewBadge } from './NewBadge';
import { WalletIcon } from './WalletIcon';

interface ActionGridProps {
  actions: readonly WalletAction[];
  onAction: (action: WalletAction) => void;
}

export function ActionGrid({ actions, onAction }: ActionGridProps) {
  return (
    <View style={styles.panel}>
      {actions.map(action => (
        <Pressable
          key={action.id}
          accessibilityRole="button"
          accessibilityLabel={action.label}
          onPress={() => onAction(action)}
          style={({ pressed }) => [styles.action, pressed && styles.pressed]}
        >
          <View style={styles.icon}>
            <WalletIcon name={action.icon} size={23} />
          </View>
          {action.isNew && <NewBadge />}
          <Text style={styles.label}>{action.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}
const styles = StyleSheet.create({
  panel: {
    height: 230,
    borderWidth: 1,
    borderColor: '#4180d0',
    borderRadius: 33,
    paddingVertical: 22,
    paddingHorizontal: 9,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 18,
    backgroundColor: '#0e0a2b',
  },
  action: { width: '25%', alignItems: 'center', gap: 8, paddingVertical: 8 },
  icon: {
    width: 42,
    height: 42,
    backgroundColor: '#130e26',
    borderRadius: 21,
    borderWidth: 1,
    borderColor: '#282037',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: { color: '#b8afc9', fontSize: 14, letterSpacing: 0.2 },
  pressed: { opacity: 0.5 },
});
