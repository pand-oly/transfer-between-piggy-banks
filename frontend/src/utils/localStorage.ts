export function setLocalData(key: string, data: string): void {
  localStorage.setItem(key, data);
}

export function removeLocalData(key: string): void {
  localStorage.removeItem(key);
}

export function getLocalData(key: string): string | null {
  const localStorageItem = localStorage.getItem(key);
  return localStorageItem;
}

export const getLocalDataUser = getLocalData('user');
export const getLocalDataToken = getLocalData('token');

export function clearLocalData(): void {
  localStorage.clear();
}
