import React from 'react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: React.ReactNode;
  required?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({ label, icon, required, ...props }) => (
  <label className="grid gap-1 font-semibold text-gray-700">
    <span className="flex items-center gap-2">{icon}{label}{required && '*'}</span>
    <input
      className="border border-gray-300 rounded px-3 py-2 font-sans focus:border-primary focus:outline-none focus:shadow-sm bg-white"
      required={required}
      {...props}
    />
  </label>
);

export default InputField;