import '@testing-library/jest-dom';

// Mock the global __APP_VERSION__ variable for all tests
Object.defineProperty(globalThis, '__APP_VERSION__', {
  value: '1.0.0',
  writable: true,
});
