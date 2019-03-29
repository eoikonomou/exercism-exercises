export class PhoneNumber {
  constructor(num) {
    this.num = num;
  }

  isAreaCodeInvalid(phoneNumber) {
    return ['0', '1'].includes(phoneNumber[0]);
  }

  isExchangeCodeInvalid(phoneNumber) {
    return ['0', '1'].includes(phoneNumber[3]);
  }

  number() {
    if (/[a-zA-Z]/g.test(this.num)) {
      return null;
    }
    const phoneNumber = this.num.match(/\d/g);
    if ([10, 11].includes(phoneNumber.length)) {
      if (phoneNumber.length === 11) {
        const code = phoneNumber.splice(0, 1)[0];
        if (code !== '1' || this.isAreaCodeInvalid(phoneNumber) || this.isExchangeCodeInvalid(phoneNumber)) {
          return null;
        }
        return phoneNumber.join('');
      }
      if (this.isAreaCodeInvalid(phoneNumber) || this.isExchangeCodeInvalid(phoneNumber)) {
        if (this.num === '+1 (223) 456-7890') console.log('something is invalid');
        return null;
      }
      return phoneNumber.join('');
    }
    return null;
  }
}
