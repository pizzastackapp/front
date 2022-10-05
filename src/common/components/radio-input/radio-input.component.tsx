import { ComponentProps, FC, useId } from 'react';

interface RadioInputProps {
  value: ComponentProps<'input'>['value'];
  label: string;
  name: string;
  defaultChecked?: ComponentProps<'input'>['defaultChecked'];
  onChange?: ComponentProps<'input'>['onChange'];
}

export const RadioInput: FC<RadioInputProps> = ({ label, ...props }) => {
  const radioId = useId();

  return (
    <div>
      <input type="radio" id={radioId} className="hidden peer" {...props} />
      <label
        htmlFor={radioId}
        className="relative before:content-[''] before:w-4 before:h-4 before:rounded-full before:border before:inline-block before:mr-3 before:bg-white before:border-gray-300 before:box-border before:peer-checked:border-amber-400 before:peer-checked:border-5 before:transition-all before:top-0.5 before:relative"
      >
        {label}
      </label>
    </div>
  );
};
