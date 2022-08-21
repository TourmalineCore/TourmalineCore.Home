import clsx from 'clsx';
import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

interface InputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  isError?: boolean;
}

function Input({
  id, label, description, isError = false, className, ...props
}: InputProps): JSX.Element {
  return (
    <div className={clsx('input', className, {
      'input--is-error': isError,
    })}
    >
      <div className="input__box">
        <input id={id} placeholder=" " className="input__control" {...props} />
        <label htmlFor={id} className="input__label">{label}</label>
      </div>
      {description && <div className="input__description">{description}</div>}
    </div>
  );
}

export default Input;
