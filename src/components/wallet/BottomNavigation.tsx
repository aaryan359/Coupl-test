import { Pressable, StyleSheet, View, useWindowDimensions } from 'react-native';
import type { NavigationId, NavigationItem } from '../../types/wallet';
import { GradientSurface } from './GradientSurface';
import { WalletIcon } from './WalletIcon';
interface BottomNavigationProps {
  items: readonly NavigationItem[];
  selectedId: NavigationId;
  bottomInset: number;
  onSelect: (item: NavigationItem) => void;
}
export function BottomNavigation({
  items,
  selectedId,
  bottomInset,
  onSelect,
}: BottomNavigationProps) {
  const { width } = useWindowDimensions();
  const scale = Math.min(width / 424, 1.3);
  return (
    <View style={[styles.container, { height: 64 * scale + bottomInset }]}>
      <View
        accessibilityRole="tablist"
        style={[styles.bar, { transform: [{ scale }] }]}
      >
        <GradientSurface
          radial
          colors={['#1e073b', '#000000']}
          style={styles.glow}
        />
        {items.map(item => (
          <Pressable
            key={item.id}
            accessibilityRole="tab"
            accessibilityLabel={item.label}
            accessibilityState={{ selected: selectedId === item.id }}
            onPress={() => onSelect(item)}
            style={styles.tab}
          >
            <WalletIcon
              name={item.icon}
              size={20}
              color={selectedId === item.id ? '#b798e1' : '#767779'}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { backgroundColor: '#000000' },
  bar: {
    transformOrigin: 'top left',
    flexDirection: 'row',
    backgroundColor: '#040406',
    width: 424,
    height: 54,
    paddingTop: 8,
    paddingHorizontal: 44,
  },
  glow: { position: 'absolute', left: 5, bottom: -15, width: 140, height: 70 },
  tab: {
    flex: 1,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
