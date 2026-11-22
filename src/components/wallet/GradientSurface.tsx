import type { ReactNode } from 'react';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, {
  Defs,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';

interface GradientSurfaceProps {
  children?: ReactNode;
  colors: readonly [string, string, ...string[]];
  style?: StyleProp<ViewStyle>;
  radial?: boolean;
}
export function GradientSurface({
  children,
  colors,
  style,
  radial = false,
}: GradientSurfaceProps) {
  const Gradient = radial ? RadialGradient : LinearGradient;
  return (
    <View style={[styles.surface, style]}>
      <View pointerEvents="none" style={StyleSheet.absoluteFill}>
        <Svg width="100%" height="100%">
          <Defs>
            <Gradient
              id="surface"
              {...(radial
                ? { cx: '50%', cy: '42%', rx: '85%', ry: '55%' }
                : { x1: '0%', y1: '0%', x2: '100%', y2: '65%' })}
            >
              {colors.map((color, index) => (
                <Stop
                  key={`${color}-${index}`}
                  offset={`${(index / (colors.length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
            </Gradient>
          </Defs>
          <Rect width="100%" height="100%" fill="url(#surface)" />
        </Svg>
      </View>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({ surface: { overflow: 'hidden' } });
