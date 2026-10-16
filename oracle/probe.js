const isValid = (isbn) => {
  isbn = isbn.replace(/-/g, '');

  const isbnFormat = /^[0-9]{9}(X|\d)$/g;
  if (!isbnFormat.test(isbn)) {
    return false;
  }

  const isbnLength = 10;
  const sumOfProducts = [...isbn]
    .map((digit) => (digit === 'X' ? 10 : Number(digit)))
    .map((digit, index) => digit * (isbnLength - index))
    .reduce((sum, value) => sum + value, 0);
  return sumOfProducts % 11 === 0;
};

const __in = ["3-598-21508-8", "3-598-21508-9", "3-598-21507-X", "3-598-21507-A", "3-598-P1581-X", "3-598-2X507-9", "3-598-21508-96", "3598215088", "359821507X", "359821507", "00", "3-598-21507", "3-598-21515-X", "134456729", "3132P34035", "3598P215088"];
const __out = [];
for (const x of __in) {
  try { __out.push({ok: true, v: isValid(x)}); }
  catch (e) { __out.push({ok: false, e: String(e).slice(0, 40)}); }
}
console.log(JSON.stringify({out: __out}));
