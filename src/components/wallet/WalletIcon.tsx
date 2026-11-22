import Svg, { Circle, Path, Rect } from 'react-native-svg';
import type { IconName } from '../../types/wallet';
import { walletTheme } from '../../theme/wallet';

interface WalletIconProps {
  name: IconName;
  size?: number;
  color?: string;
}
const paths: Partial<Record<IconName, string>> = {
  users:
    'M16 21v-3a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v3M16 4a4 4 0 0 1 0 8m5 9v-3a4 4 0 0 0-3-4M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z',
  tuition: 'm1 9 11-6 11 6-11 6L1 9Zm4 3v6l7 4 7-4v-6m4-3v9m-2 0h2v4h-2v-4Z',
  repeat: 'M4 7h14l-3-3m3 3-3 3M20 17H6l3-3m-3 3 3 3M4 7v7m16 3v-7',
  arrow: 'M5 12h14m-6-6 6 6-6 6',

  headphones:
    'M5 13v-2a7 7 0 0 1 14 0v2M5 12H3v7h4v-7H5m14 0h2v7h-4v-7h2M17 20h-5',
  bolt: 'M14 2 5 14h6l-1 8 9-13h-6l1-7Z',
  eye: 'M2 12s3-6 10-6 10 6 10 6-3 6-10 6S2 12 2 12Z',
  eyeOff:
    'M3 3 21 21M9 6.4A13 13 0 0 1 12 6c7 0 10 6 10 6a17 17 0 0 1-4 4M6 7.5A19 19 0 0 0 2 12s3 6 10 6c1 0 2-.1 3-.5',
  copy: 'M9 4h9a2 2 0 0 1 2 2v10M6 7h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2Z',
  scan: 'M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5M7 7h3v3H7V7Zm7 0h3v3h-3V7ZM7 14h3v3H7v-3Zm7 0h3v3h-3v-3ZM2 12h20',
  rupee: 'M7 5h11M7 9h11M8 5c8 0 8 8 0 8l8 7',
  transfer: 'M4 7h16m-4-4 4 4-4 4M20 17H4m4-4-4 4 4 4',
  history: 'M3 10a9 9 0 1 1 1 7M3 4v6h6M10 7h5m-5 3h5m-5-3c5 0 5 6 0 6l4 4',
  statistics: 'M5 19v-6m5 6V5m5 14V9m5 10v-9',
  bill: 'M6 3h8l5 5v13H6V3Zm8 0v6h5',
  card: 'M3 9h18M3 13h18',
  chevron: 'm9 5 7 7-7 7',
  home: 'm3 10 9-7 9 7v11h-6v-7H9v7H3V10Z',
  wallet: 'M4 7h16v14H4V7Zm3 0V4h10v3m-1 7h4M8 4V2m4 2V2m4 2V2',
  trophy:
    'M7 3h10v7a5 5 0 0 1-10 0V3Zm0 2H3v4c0 3 2 4 5 4m9-8h4v4c0 3-2 4-5 4M12 15v5m-5 1h10',
  heart: 'M12 21 3.5 12.5C-3 5 7 0 12 7c5-7 15-2 8.5 5.5L12 21Z',
  close: 'm6 6 12 12M6 18 18 6',
};
export function WalletIcon({
  name,
  size = 24,
  color = walletTheme.muted,
}: WalletIconProps) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] && (
        <Path d={paths[name]} fill={name === 'bolt' ? color : 'none'} />
      )}
      {name === 'card' && <Rect x={3} y={5} width={18} height={14} rx={2} />}
      {name === 'eye' && <Circle cx={12} cy={12} r={3} />}
      {name === 'more' &&
        [5, 12, 19].map(cx => (
          <Circle key={cx} cx={cx} cy={12} r={1.4} fill={color} />
        ))}
    </Svg>
  );
}
