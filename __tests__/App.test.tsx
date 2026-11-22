import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import App from '../App';
import { WalletBalance } from '../src/components/wallet/WalletBalance';
import { PaymentCard } from '../src/components/wallet/PaymentCard';

jest.mock(
  'react-native-safe-area-context',
  () => require('react-native-safe-area-context/jest/mock').default,
);

let renderer: ReactTestRenderer.ReactTestRenderer;
beforeEach(async () => {
  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(<App />);
  });
});
afterEach(async () => {
  await ReactTestRenderer.act(() => renderer.unmount());
});

test('renders the Home wallet with the reference balance and card', () => {
  expect(renderer.root.findByType(WalletBalance).props.balance).toBe(0);
  expect(renderer.root.findByType(PaymentCard).props.card.number).toBe(
    '6083 6231 0069 5002',
  );
});

test('hides and restores the wallet balance', async () => {
  await ReactTestRenderer.act(() =>
    renderer.root.findByType(WalletBalance).props.onToggle(),
  );
  expect(renderer.root.findByType(WalletBalance).props.visible).toBe(false);
  await ReactTestRenderer.act(() =>
    renderer.root.findByType(WalletBalance).props.onToggle(),
  );
  expect(renderer.root.findByType(WalletBalance).props.visible).toBe(true);
});

test('hides the card number and CVV', async () => {
  await ReactTestRenderer.act(() =>
    renderer.root.findByType(PaymentCard).props.onToggleDetails(),
  );
  expect(renderer.root.findByType(PaymentCard).props.detailsVisible).toBe(
    false,
  );
});
