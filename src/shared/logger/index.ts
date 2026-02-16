class AppLogger {
  static log(...args: unknown[]) {
    if (import.meta.env.DEV) {
      console.log(...args);
    }
  }

  static error(...args: unknown[]) {
    console.error(...args);
  }
}

export default AppLogger;
