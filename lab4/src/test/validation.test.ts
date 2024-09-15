import { expect } from 'chai';
import { Validation } from '../validation';

describe('Validation', () => {
  describe('isValidYear', () => {
    it('should return true for valid years', () => {
      expect(Validation.isValidYear('2021')).to.be.true;
      expect(Validation.isValidYear('1999')).to.be.true;
    });

    it('should return false for invalid years', () => {
      expect(Validation.isValidYear('abcd')).to.be.false;
      expect(Validation.isValidYear('20')).to.be.false;
      expect(Validation.isValidYear('')).to.be.false;
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(Validation.isValidEmail('test@example.com')).to.be.true;
      expect(Validation.isValidEmail('user.name+tag+sorting@example.com')).to.be
        .true;
    });

    it('should return false for invalid emails', () => {
      expect(Validation.isValidEmail('plainaddress')).to.be.false;
      expect(Validation.isValidEmail('@missingusername.com')).to.be.false;
      expect(Validation.isValidEmail('username@.com')).to.be.false;
    });
  });
});
