export default class Calculator {
  constructor(base)
  {
    this.base = base;
  }

  power(exponent)
  {
    return Math.pow(this.base, exponent);
  }
}

export default class WeirdCalculator extends Calculator {
  constructor(base)
  {
    super(base);
  }

  power(weirdExponent)
  {
    return super.power(2) * weirdExponent;
  }
}

const weirdCalculator = new WeirdCalculator(3);
console.log(weirdCalculator.power(2));
