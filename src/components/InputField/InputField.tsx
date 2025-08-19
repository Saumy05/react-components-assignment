import React, { useState, useRef } from 'react';
import { Eye, EyeOff, X, Loader2 } from 'lucide-react';
import { InputFieldProps } from '../../types';

const InputField: React.FC<InputFieldProps> = ({
  value = '',
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  type = 'text',
  showClearButton = false,
  loading = false,
  className = '',
  id,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const isPassword = type === 'password';
  const hasError = invalid || !!errorMessage;
  const hasValue = value.length > 0;

  const sizeStyles = {
    sm: { input: 'px-3 py-1.5 text-sm', label: 'text-sm', icon: 'w-4 h-4' },
    md: { input: 'px-4 py-2.5 text-base', label: 'text-sm', icon: 'w-5 h-5' },
    lg: { input: 'px-4 py-3 text-lg', label: 'text-base', icon: 'w-5 h-5' },
  };

  const variantStyles = {
    filled: {
      base: 'bg-gray-100 border-0 border-b-2 rounded-t-lg',
      normal: 'border-gray-300',
      focus: 'border-blue-500 bg-gray-50',
      error: 'border-red-500 bg-red-50',
    },
    outlined: {
      base: 'bg-transparent border-2 rounded-lg',
      normal: 'border-gray-300',
      focus: 'border-blue-500',
      error: 'border-red-500',
    },
    ghost: {
      base: 'bg-transparent border-0 border-b-2 rounded-none',
      normal: 'border-gray-200',
      focus: 'border-blue-500',
      error: 'border-red-500',
    },
  };

  const currentSize = sizeStyles[size];
  const currentVariant = variantStyles[variant];

  const inputClasses = [
    'w-full transition-all duration-200 outline-none text-gray-900 placeholder-gray-400',
    currentVariant.base,
    currentSize.input,
    disabled ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-sm',
    hasError ? currentVariant.error : isFocused ? currentVariant.focus : currentVariant.normal,
    className,
  ].join(' ');

  const labelClasses = [
    'block font-medium mb-1 transition-colors duration-200',
    currentSize.label,
    hasError ? 'text-red-600' : 'text-gray-700',
    disabled && 'opacity-50',
  ].join(' ');

  const handleClear = () => {
    if (onChange && inputRef.current) {
      const event = { target: { value: '' } } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
      inputRef.current.focus();
    }
  };

  return (
    <div className="w-full">
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      
      <div className="relative">
        <input
          id={id}
          ref={inputRef}
          type={isPassword ? (showPassword ? 'text' : 'password') : type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={inputClasses}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          aria-invalid={hasError}
          {...props}
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
          {loading && <Loader2 className={`${currentSize.icon} text-gray-400 animate-spin`} />}
          
          {showClearButton && hasValue && !disabled && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              <X className={currentSize.icon} />
            </button>
          )}
          
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
              tabIndex={-1}
            >
              {showPassword ? <EyeOff className={currentSize.icon} /> : <Eye className={currentSize.icon} />}
            </button>
          )}
        </div>
      </div>

      {(helperText || errorMessage) && (
        <div className={`mt-1 text-sm ${hasError ? 'text-red-600' : 'text-gray-500'}`}>
          {errorMessage || helperText}
        </div>
      )}
    </div>
  );
};

export default InputField;
