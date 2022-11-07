import clsx from 'clsx';
import { ComponentProps, forwardRef, useId } from 'react';
import { ReactComponent as ExclamationCircleSolid } from '@app/assets/icons/exclamation-circle-solid.svg';

interface TextAreaProps {
  onChange?: ComponentProps<'textarea'>['onChange'];
  onBlur?: ComponentProps<'textarea'>['onBlur'];
  value?: ComponentProps<'textarea'>['value'];
  name?: ComponentProps<'textarea'>['name'];
  disabled?: ComponentProps<'textarea'>['disabled'];
  label: string;
  placeholder: string;
  error?: string;
  fullWidth?: boolean;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, error, fullWidth, ...props }, ref) => {
    const inputId = useId();

    const inputClasses = clsx(
      'border shadow-sm bg-white rounded-md pl-3 pr-8 py-2 text-sm placeholder-gray-400 mb-2 outline-none transition-all resize-none disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed',
      {
        'border-gray-300': !error,
        'text-red-900 border-red-300 focus:border-red-500': error,
        'w-full': fullWidth,
      }
    );

    const inputWrapperClasses = clsx('relative inline-block', {
      'w-full': fullWidth,
    });

    return (
      <div>
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-900 mb-1"
        >
          {label}
        </label>
        <div className={inputWrapperClasses}>
          <textarea
            id={inputId}
            className={inputClasses}
            ref={ref}
            rows={7}
            {...props}
          />
          {error && (
            <ExclamationCircleSolid className="h-4 w-4 absolute right-3 top-2.75 child-path:fill-red-500" />
          )}
        </div>
        <span
          className="block text-sm text-red-600"
          dangerouslySetInnerHTML={{ __html: error || '&nbsp;' }}
        />
      </div>
    );
  }
);
