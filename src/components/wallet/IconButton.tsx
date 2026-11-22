import {
  Pressable,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import type { IconName } from '../../types/wallet';
import { WalletIcon } from './WalletIcon';
import { walletTheme } from '../../theme/wallet';

interface IconButtonProps {
  icon: IconName;
  label: string;
  onPress: () => void;
  color?: string;
  style?: StyleProp<ViewStyle>;
}
export function IconButton({
  icon,
  label,
  onPress,
  color,
  style,
}: IconButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      hitSlop={6}
      style={({ pressed }) => [styles.button, style, pressed && styles.pressed]}
    >
      <WalletIcon name={icon} color={color} size={22} />
    </Pressable>
  );
}
const styles = StyleSheet.create({
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: walletTheme.border,
    backgroundColor: '#130c29',
  },
  pressed: { opacity: 0.55 },
});
