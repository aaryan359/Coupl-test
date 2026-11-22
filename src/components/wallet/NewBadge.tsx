import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { WalletText } from './WalletText';

export function NewBadge() {
  return (
    <View style={styles.badge}>
      <Svg
        width={50}
        height={14}
        viewBox="0 0 50 14"
        style={StyleSheet.absoluteFill}
      >
        <Path d="M0 0H50L46 7 50 14H0L4 7Z" fill="#2521ff" />
      </Svg>
      <WalletText style={styles.text}>New</WalletText>
    </View>
  );
}
const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 48,
    width: 50,
    height: 14,
    alignItems: 'center',
    zIndex: 2,
  },
  text: {
    fontSize: 10,
    lineHeight: 14,
    color: '#ffffff',
    fontWeight: '600',
    letterSpacing: 1,
  },
});
