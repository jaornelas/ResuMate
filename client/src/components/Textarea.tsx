import React from 'react';

interface TextareaProps {
    placeholder: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    required?: boolean;
}

const Textarea: React.FC<TextareaProps> = ({ placeholder, value, onChange, required }) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
            className="textarea"
        />
    );
};

export default Textarea;