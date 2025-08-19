import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import InputField from './InputField';

const meta: Meta<typeof InputField> = {
  title: 'Components/InputField',
  component: InputField,
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div className="w-80 p-4"><Story /></div>],
};

export default meta;
type Story = StoryObj<typeof InputField>;

const InteractiveWrapper = (args: any) => {
  const [value, setValue] = useState(args.value || '');
  return (
    <InputField
      {...args}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export const Default: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    helperText: 'We\'ll never share your email.',
  },
};

export const Password: Story = {
  render: InteractiveWrapper,
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    helperText: 'Must be at least 8 characters',
  },
};

export const WithError: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    invalid: true,
    errorMessage: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Disabled Input',
    placeholder: 'This is disabled',
    disabled: true,
    value: 'Cannot edit this',
  },
};

export const Loading: Story = {
  render: InteractiveWrapper,
  args: {
    label: 'Loading Input',
    placeholder: 'Loading...',
    loading: true,
  },
};
