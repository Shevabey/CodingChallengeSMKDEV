// Fungsi untuk menghitung tip berdasarkan nilai tagihan
function calculateTip(billAmount) {
  // Pernyataan if/else
  if (billAmount >= 50 && billAmount <= 300) {
    return billAmount * 0.15;
  } else {
    return billAmount * 0.2;
  }
}

// Data uji
const bills = [275, 40, 430];

// Menghitung dan menampilkan tip serta total nilai untuk setiap tagihan
bills.forEach((bill) => {
  const tip = calculateTip(bill);
  const total = bill + tip;
  console.log(`Tagihannya ${bill}, tipnya ${tip}, dan total nilainya ${total}`);
});

// Sama dengan operator ternary
function calculateTipTernary(billAmount) {
  // Operator ternary
  const tipPercentage = billAmount >= 50 && billAmount <= 300 ? 0.15 : 0.2;
  return billAmount * tipPercentage;
}

// Menghitung dan menampilkan tip serta total nilai untuk setiap tagihan dengan operator ternary
bills.forEach((bill) => {
  const tip = calculateTipTernary(bill);
  const total = bill + tip;
  console.log(`Tagihannya ${bill}, tipnya ${tip}, dan total nilainya ${total}`);
});
