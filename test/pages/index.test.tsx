import React from 'react';

import { render } from '@testing-library/react';
import Home from 'pages';

describe('test page index', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  const renderPage = () => {
    return render(<Home />);
  };

  it('should render without crashing', () => {
    expect(renderPage()).toBeTruthy();
  });
});
