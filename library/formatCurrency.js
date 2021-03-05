export default function formatCurrency(amount) {
  return !amount ? "" : `${amount.toFixed(2)} €`;
}
