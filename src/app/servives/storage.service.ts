import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() { }

  exist(key): boolean {
    return localStorage.getItem(key) !== null;
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }

  save(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

}
