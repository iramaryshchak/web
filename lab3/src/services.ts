// Класс для роботи з localStorage
export class StorageService {
  save(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  load<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  clear(): void {
    localStorage.clear();
  }
}
