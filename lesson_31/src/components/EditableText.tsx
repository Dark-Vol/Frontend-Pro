import { useState, useEffect } from 'react';

interface EditableTextProps {
  text: string;
  onChange: (newText: string) => void;
}

export const EditableText: React.FC<EditableTextProps> = ({ text, onChange }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(text);

  useEffect(() => {
    setValue(text);
  }, [text]);

  const save = () => {
    if (value.trim() && value !== text) onChange(value.trim());
    setEditing(false);
  };

  if (editing) {
    return (
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        onBlur={save}
        onKeyDown={e => e.key === 'Enter' && save()}
        autoFocus
      />
    );
  }

  return <span onDoubleClick={() => setEditing(true)}>{text}</span>;
};
