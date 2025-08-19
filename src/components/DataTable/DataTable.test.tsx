import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import DataTable from './DataTable';

const mockEmployees = [
  { id: 1, name: 'Arjun Sharma', email: 'arjun.sharma@company.com', role: 'Developer' },
  { id: 2, name: 'Priya Patel', email: 'priya.patel@company.com', role: 'Designer' },
];

const mockColumns = [
  { key: 'id', title: 'ID', dataIndex: 'id' as const, sortable: true },
  { key: 'name', title: 'Name', dataIndex: 'name' as const, sortable: true },
  { key: 'email', title: 'Email', dataIndex: 'email' as const },
  { key: 'role', title: 'Role', dataIndex: 'role' as const },
];

describe('DataTable', () => {
  it('renders table with employee data', () => {
    render(<DataTable data={mockEmployees} columns={mockColumns} />);
    expect(screen.getByText('Arjun Sharma')).toBeInTheDocument();
    expect(screen.getByText('Priya Patel')).toBeInTheDocument();
    expect(screen.getByText('arjun.sharma@company.com')).toBeInTheDocument();
  });

  it('shows loading state', () => {
    render(<DataTable data={[]} columns={mockColumns} loading />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
    const spinner = document.querySelector('.animate-spin');
    expect(spinner).toBeInTheDocument();
  });

  it('shows empty state when no employees', () => {
    render(<DataTable data={[]} columns={mockColumns} />);
    expect(screen.getByText('No data available')).toBeInTheDocument();
    expect(screen.getByText('There are no items to display in this table.')).toBeInTheDocument();
  });

  it('renders selection checkboxes when selectable', () => {
    render(
      <DataTable
        data={mockEmployees}
        columns={mockColumns}
        selectable
      />
    );
    
    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(3); // 1 select all + 2 rows
  });

  it('handles column sorting', async () => {
    const user = userEvent.setup();
    render(<DataTable data={mockEmployees} columns={mockColumns} />);
    
    const nameHeader = screen.getByText('Name');
    await user.click(nameHeader);
    
    expect(screen.getByText('Arjun Sharma')).toBeInTheDocument();
    expect(screen.getByText('Priya Patel')).toBeInTheDocument();
  });
});
