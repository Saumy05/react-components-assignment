import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DataTable from './DataTable';
import { Column } from '../../types';

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

const sampleUsers: User[] = [
  {
    id: 1,
    name: 'Arjun Sharma',
    email: 'arjun.sharma@example.com',
    role: 'Senior Developer',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: 2,
    name: 'Priya Patel',
    email: 'priya.patel@example.com',
    role: 'UI Designer',
    status: 'active',
    createdAt: '2024-02-10',
  },
  {
    id: 3,
    name: 'Rohit Gupta',
    email: 'rohit.gupta@example.com',
    role: 'Product Manager',
    status: 'active',
    createdAt: '2024-01-22',
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    role: 'QA Engineer',
    status: 'inactive',
    createdAt: '2024-03-05',
  },
  {
    id: 5,
    name: 'Vikash Kumar',
    email: 'vikash.kumar@example.com',
    role: 'DevOps Engineer',
    status: 'active',
    createdAt: '2024-02-18',
  },
];

const columns: Column<User>[] = [
  {
    key: 'id',
    title: 'Employee ID',
    dataIndex: 'id',
    sortable: true,
  },
  {
    key: 'name',
    title: 'Full Name',
    dataIndex: 'name',
    sortable: true,
  },
  {
    key: 'email',
    title: 'Email Address',
    dataIndex: 'email',
    sortable: true,
  },
  {
    key: 'role',
    title: 'Job Role',
    dataIndex: 'role',
    sortable: true,
  },
  {
    key: 'status',
    title: 'Status',
    dataIndex: 'status',
    sortable: true,
    render: (status: User['status']) => (
      <span
        className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
          status === 'active'
            ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
            : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
        }`}
      >
        {status}
      </span>
    ),
  },
  {
    key: 'createdAt',
    title: 'Joining Date',
    dataIndex: 'createdAt',
    sortable: true,
  },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive employee management table with sorting and selection capabilities.'
      }
    }
  },
  argTypes: {
    loading: { control: 'boolean' },
    selectable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  args: {
    data: sampleUsers,
    columns: columns,
  },
};

export const WithSelection: Story = {
  args: {
    data: sampleUsers,
    columns: columns,
    selectable: true,
    onRowSelect: (selectedRows) => {
      console.log('Selected employees:', selectedRows);
    },
  },
};

export const Loading: Story = {
  args: {
    data: [],
    columns: columns,
    loading: true,
  },
};

export const EmptyState: Story = {
  args: {
    data: [],
    columns: columns,
    loading: false,
  },
};

export const SmallTeam: Story = {
  args: {
    data: sampleUsers.slice(0, 2),
    columns: columns,
    selectable: true,
  },
};
