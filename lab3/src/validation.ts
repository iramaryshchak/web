// Класс для валідації імейлу та року
export class Validation {
  static isValidYear(year: string): boolean {
    const yearPattern = /^\d{4}$/;
    return yearPattern.test(year);
  }

  static isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
}
