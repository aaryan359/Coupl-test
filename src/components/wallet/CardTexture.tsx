import { StyleSheet, View } from 'react-native';
import Svg, { Circle, Defs, Pattern, Rect } from 'react-native-svg';
const random = (seed: number) => {
  const value = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return value - Math.floor(value);
};
const grains = Array.from({ length: 180 }, (_, index) => ({
  x: random(index + 1) * 40,
  y: random(index + 1000) * 40,
  opacity: 0.04 + random(index + 2000) * 0.12,
}));
export function CardTexture() {
  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Svg width="100%" height="100%">
        <Defs>
          <Pattern
            id="grain"
            width={40}
            height={40}
            patternUnits="userSpaceOnUse"
          >
            {grains.map((grain, index) => (
              <Circle
                key={index}
                cx={grain.x}
                cy={grain.y}
                r={0.28}
                fill={index % 2 ? '#ffffff' : '#000000'}
                opacity={grain.opacity}
              />
            ))}
          </Pattern>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#grain)" />
      </Svg>
    </View>
  );
}
