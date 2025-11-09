import type { InputHTMLAttributes } from 'react';

import inputStyles from './PrimaryInput.module.scss';

interface PrimaryInputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
    htmlId: string;
    'aria-label': string;

    isValid: boolean;

    errorText?: string;

    className?: string;
}
export default function PrimaryInput({
    htmlId,

    isValid,
    errorText,

    className,

    ...attributes
}: PrimaryInputProps) {
    return (
        <div className={inputStyles['primary-input-block']}>
            <input
                {...attributes}
                id={htmlId}
                aria-invalid={!isValid}
                type='text'
                className={`${inputStyles['primary-input']} ${className ?? ''}`}
            />

            {!isValid && errorText && (
                <label htmlFor={htmlId} className={inputStyles['error-label']}>
                    <svg width={16} height={16} color='var(--error-color)'>
                        <use href='#error-icon' />
                    </svg>

                    <p className={inputStyles['error-text']}>{errorText}</p>
                </label>
            )}
        </div>
    );
}
