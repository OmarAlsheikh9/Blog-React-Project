import { TOKEN_KEY, USER_KEY } from './constants';

export function formatPostDate(dateString) {
  const date = new Date(dateString);
  const now = Date.now();
  const seconds = Math.floor((now - date.getTime()) / 1000);

  const units = [
    { limit: 60, divisor: 1, unit: 'second' },
    { limit: 3600, divisor: 60, unit: 'minute' },
    { limit: 86400, divisor: 3600, unit: 'hour' },
    { limit: 604800, divisor: 86400, unit: 'day' },
  ];

  const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  for (const { limit, divisor, unit } of units) {
    if (seconds < limit) {
      const value = Math.floor(seconds / divisor);
      return formatter.format(-value, unit);
    }
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export const getRelativeTime = formatPostDate;

export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function getUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function clearAuth() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
}

export function isPostOwner(currentUser, postUserId) {
  if (!currentUser?.id) return false;
  return String(currentUser.id) === String(postUserId);
}
