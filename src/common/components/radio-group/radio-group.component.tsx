import { RadioInput } from '@app/common/components/radio-input/radio-input.component';
import { forwardRef } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

interface RadioGroupProps extends ControllerRenderProps<any, any> {
  options: {
    label: string;
    value: string;
  }[];
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, name, onChange, value }, ref) => {
    return (
      <div ref={ref}>
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
    );
  }
);
