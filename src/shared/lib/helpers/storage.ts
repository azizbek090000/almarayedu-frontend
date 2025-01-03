export const setItem = <Value>(key: string, value: Value): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = <Value>(key: string): Value | null => {
  const item: string | null = localStorage.getItem(key);

  if (item === null) return null;

  try {
    return JSON.parse(item) as Value;
  } catch {
    return item as Value;
  }
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export const getSession = <Value>(): Value | null => {
  const session = getItem("session");
  if (!session) return null;

  return session as Value;
};

export const setSession = <Value>(session: Value): void => {
  if (session) {
    setItem("session", session);
  } else {
    removeItem("session");
  }
};
