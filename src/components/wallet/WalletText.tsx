import { Text, type TextProps } from 'react-native';

/** Keeps the reference typography consistent with the scaled wallet canvas. */
export function WalletText(props: TextProps) {
  return <Text allowFontScaling={false} {...props} />;
}
