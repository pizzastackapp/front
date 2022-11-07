import { RadioInput } from '@app/common/components/radio-input/radio-input.component';
import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface RadioGroupProps extends ControllerRenderProps<any, any> {
  options: {
    label: string;
    value: string;
  }[];
  label?: string;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, name, onChange, value, label }, ref) => {
    return (
      <div ref={ref} className="pb-6">
        <div className="text-sm text-gray-900 font-medium mb-3">{label}</div>
        <div>
          {options.map((option) => (
            <RadioInput
              key={`radio-input-${name}-${option.value}`}
              {...option}
              name={name}
              onChange={onChange}
              defaultChecked={option.value === value}
            />
          ))}
        </div>
      </div>
    );
  }
);
