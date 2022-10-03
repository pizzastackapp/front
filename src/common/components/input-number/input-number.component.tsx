import { forwardRef, useId, useState } from 'react';
import { ReactComponent as ExclamationCircleSolid } from '@app/assets/icons/exclamation-circle-solid.svg';
import { ReactComponent as Minus16Icon } from '@app/assets/icons/minus-16.svg';
import { ReactComponent as Plus16Icon } from '@app/assets/icons/plus-16.svg';
import { useInputNumberClasses } from '@app/common/components/input-number/use-input-number-classes';
import {
  InputNumberProps,
  InputNumberSize,
} from '@app/common/components/input-number/input-number.types';

export const InputNumber = forwardRef<HTMLInputElement, InputNumberProps>(
  (
    {
      label,
      error,
      fullWidth,
      setValue,
      value,
      size = InputNumberSize.base,
      onBlur,
      hideErrorMessage = false,
      ...props
    },
    ref
  ) => {
    const inputId = useId();

    const [isFocused, setIsFocused] = useState(false);
    const handleFocus = () => {
      setIsFocused(true);
    };

    const {
      inputClasses,
      inputWrapperClasses,
      buttonIconsClasses,
      buttonPlusClasses,
      buttonMinusClasses,
      errorMarkClasses,
    } = useInputNumberClasses(
      isFocused,
      size,
      error,
      fullWidth,
      hideErrorMessage
    );

    const handleBlur = (event: React.FocusEvent<HTMLInputElement, Element>) => {
      setIsFocused(false);

      if (onBlur) {
        onBlur(event);
      }
    };

    const onHandleDecrement = () => {
      if (setValue && value) {
        setValue(value - 1);
      }
    };

    const onHandleIncrement = () => {
      if (setValue && value) {
        setValue(value + 1);
      }
    };

    return (
      <div>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          {label}
        </label>
        <div className={inputWrapperClasses}>
          <button className={buttonMinusClasses} onClick={onHandleDecrement}>
            <Minus16Icon className={buttonIconsClasses} />
          </button>
          <input
            id={inputId}
            className={inputClasses}
            ref={ref}
            type="number"
            value={value ?? 0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          {error && <ExclamationCircleSolid className={errorMarkClasses} />}
          <button className={buttonPlusClasses} onClick={onHandleIncrement}>
            <Plus16Icon className={buttonIconsClasses} />
          </button>
        </div>
        {!hideErrorMessage && (
          <span
            className="block text-sm text-red-600 mt-2"
            dangerouslySetInnerHTML={{ __html: error || '&nbsp;' }}
          />
        )}
      </div>
    );
  }
);
