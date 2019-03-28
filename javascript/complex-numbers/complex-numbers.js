export class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  add(complexNumber) {
    return new ComplexNumber(this.real + complexNumber.real, this.imag + complexNumber.imag);
  }

  sub(complexNumber) {
    return new ComplexNumber(this.real - complexNumber.real, this.imag - complexNumber.imag);
  }

  mul(complexNumber) {
    return new ComplexNumber(
      (this.real * complexNumber.real) - (this.imag * complexNumber.imag),
      (this.imag * complexNumber.real) + (this.real * complexNumber.imag)
    );
  }

  div(complexNumber) {
    return new ComplexNumber(
      (this.real * complexNumber.real + this.imag * complexNumber.imag) / (Math.pow(complexNumber.real, 2) + Math.pow(complexNumber.imag, 2)),
      (this.imag * complexNumber.real - this.real * complexNumber.imag) / (Math.pow(complexNumber.real, 2) + Math.pow(complexNumber.imag, 2))
    );
  }

  get abs() {
    return Math.sqrt(Math.pow(this.real, 2) + Math.pow(this.imag, 2));
  }

  get conj() {
    // + 0 is used to handle -0 value
    return new ComplexNumber(this.real, -1 * this.imag + 0);
  }

  get exp() {
    return new ComplexNumber(
      Math.pow(Math.E, this.real) * Math.cos(this.imag),
      Math.pow(Math.E, this.real) * Math.sin(this.imag)
    );
  }
}
