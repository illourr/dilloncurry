function getDigits(num: number): number[] {
  if (!Number.isSafeInteger(num)) {
    throw new RangeError("Value is not a safe integer!");
  }

  if (num === 0) {
    return [0];
  }

  const digits = [];
  let absNum = Math.abs(num);
  while (absNum > 0) {
    // get the digits
    const digit = absNum % 10;

    // save the digit
    digits.unshift(Number(digit));

    // remove the digit
    absNum = Math.floor(absNum / 10);
  }
  return digits;
}

function getDigitsBigInt(num: bigint): number[] {
  if (num === 0n) {
    return [0];
  }

  const digits = [];
  let tempNum = num;
  while (tempNum > 0n) {
    // get the digits
    const digit = tempNum % 10n;

    // save the digit
    digits.unshift(Number(digit));

    // remove the digit
    tempNum = tempNum / 10n;
  }
  return digits;
}

export { getDigits, getDigitsBigInt };
