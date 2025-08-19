import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import InputField from './InputField';

describe('InputField', () => {
  it('renders with label and placeholder', () => {
    render(<InputField label="Email" placeholder="Enter your email" id="email" />);
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  it('calls onChange when typing', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<InputField label="Email" id="email" onChange={handleChange} />);
    const input = screen.getByLabelText('Email');
    await user.type(input, 'test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(
      <InputField
        label="Email"
        id="email"
        invalid
        errorMessage="Invalid email"
      />
    );
    expect(screen.getByText('Invalid email')).toBeInTheDocument();
  });

  it('disables input when disabled prop is true', () => {
    render(<InputField label="Email" id="email" disabled />);
    expect(screen.getByLabelText('Email')).toBeDisabled();
  });

  it('shows loading state', () => {
    render(<InputField label="Email" id="email" loading />);
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });
});
