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

export default class WeirdCalculator {
  constructor(base)
  {
    super(base);
  }

  power(exponent)
  {
    return super.power(2)*exponent;
  }
}

const weirdCalculator = new WeirdCalculator(3);
console.log(weirdCalculator.power(2));
