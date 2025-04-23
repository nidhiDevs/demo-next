import React from 'react'; // ✅ Required for JSX to work
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import Headercm from './Headercm';

describe('Headercm', () => {
  test('renders the header text', () => {
    render(<Headercm />);
    expect(screen.getByText('Header Component')).toBeInTheDocument();
  });
});