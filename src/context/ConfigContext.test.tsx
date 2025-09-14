import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { ConfigProvider, useConfig } from './ConfigContext';

// Test component that uses the config context
const TestComponent = () => {
  const config = useConfig();
  return (
    <div>
      <div data-testid="app-version">{config.appVersion}</div>
      <div data-testid="config-exists">{config ? 'config-loaded' : 'no-config'}</div>
    </div>
  );
};

describe('ConfigContext', () => {
  test('should provide app version from global variable', () => {
    render(
      <ConfigProvider>
        <TestComponent />
      </ConfigProvider>
    );

    const versionElement = screen.getByTestId('app-version');
    expect(versionElement.textContent).toBe('1.0.0');
  });

  test('should provide config object through context', () => {
    render(
      <ConfigProvider>
        <TestComponent />
      </ConfigProvider>
    );

    const configElement = screen.getByTestId('config-exists');
    expect(configElement.textContent).toBe('config-loaded');
  });

  test('should create ConfigProvider component successfully', () => {
    const { container } = render(
      <ConfigProvider>
        <div data-testid="child">test child</div>
      </ConfigProvider>
    );

    expect(screen.getByTestId('child')).toBeTruthy();
    expect(container.firstChild).toBeTruthy();
  });
});
