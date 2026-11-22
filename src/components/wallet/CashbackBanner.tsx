import { WalletText as Text } from './WalletText';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { GradientSurface } from './GradientSurface';
import { WalletIcon } from './WalletIcon';
interface CashbackBannerProps {
  onPress: () => void;
}
export function CashbackBanner({ onPress }: CashbackBannerProps) {
  const [width, setWidth] = useState(392);
  const [page, setPage] = useState(0);
  const bannerWidth = width - 28;
  return (
    <View
      style={styles.wrapper}
      onLayout={event => setWidth(event.nativeEvent.layout.width)}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={bannerWidth + 14}
        decelerationRate="fast"
        style={styles.carousel}
        contentContainerStyle={styles.slides}
        onMomentumScrollEnd={event =>
          setPage(
            Math.round(event.nativeEvent.contentOffset.x / (bannerWidth + 14)),
          )
        }
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Paying online today? Earn up to 1% cashback"
          onPress={onPress}
          style={{ width: bannerWidth }}
        >
          <GradientSurface
            colors={['#2911a4', '#5a158d', '#73176f']}
            style={styles.banner}
          >
            <View style={styles.cashback}>
              <Text style={styles.upto}>UPTO</Text>
              <Text style={styles.rate}>1%</Text>
              <Text style={styles.back}>BACK</Text>
            </View>
            <View style={styles.copy}>
              <Text style={styles.title}>Paying online today?</Text>
              <Text style={styles.subtitle}>
                Use Coupl Card &amp; earn upto 1% cashback
              </Text>
            </View>
            <View style={styles.arrow}>
              <WalletIcon name="arrow" size={19} color="#f2e1ff" />
            </View>
          </GradientSurface>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Cashback details"
          onPress={onPress}
          style={{ width: bannerWidth }}
        >
          <GradientSurface
            colors={['#2625b7', '#5531ad']}
            style={styles.banner}
          >
            <View style={styles.offerRing}>
              <Text style={styles.offerRate}>1%</Text>
            </View>
            <Text style={styles.title}>Cashback on your Coupl Card</Text>
          </GradientSurface>
        </Pressable>
      </ScrollView>
      <View style={styles.pagination}>
        {[0, 1].map(index => (
          <View
            key={index}
            style={[styles.dot, page === index && styles.active]}
          />
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  wrapper: { marginTop: 18 },
  carousel: { marginRight: -16 },
  slides: { gap: 14, paddingRight: 44 },
  banner: {
    height: 60,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 13,
    gap: 12,
  },
  cashback: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#32d786',
    alignItems: 'center',
    justifyContent: 'center',
  },
  upto: { fontSize: 5, fontWeight: '800', color: '#075e46', lineHeight: 6 },
  rate: { fontSize: 13, fontWeight: '900', color: '#075e46', lineHeight: 14 },
  back: { fontSize: 5, fontWeight: '800', color: '#075e46', lineHeight: 6 },
  copy: { flex: 1, gap: 2 },
  title: { fontSize: 16, color: '#f5efff', fontWeight: '600' },
  subtitle: { fontSize: 12, color: '#cbb5ed' },
  arrow: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ffffff12',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
    marginTop: 8,
  },
  dot: { width: 4, height: 4, borderRadius: 2, backgroundColor: '#29213f' },
  active: { backgroundColor: '#6960dc' },
  offerRing: {
    width: 46,
    height: 46,
    borderRadius: 23,
    borderWidth: 3,
    borderColor: '#7595ee',
    alignItems: 'center',
    justifyContent: 'center',
  },
  offerRate: { color: '#9cbbff', fontSize: 16, fontWeight: '700' },
});
