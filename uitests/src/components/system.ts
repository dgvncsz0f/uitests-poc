// -*- mode: typescript; typescript-indent-level: 2; -*-

export function delay(delayInMillis: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => { resolve() }, delayInMillis)
  });
}

export function getEnv(key: string): string {
  const value = process.env[key];
  if (value === undefined) {
    throw new Error(`missing env var: ${key}`);
  }
  return value;
}
