import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Form } from "react-bootstrap";

interface Props {
  data: string[];
  onChange: (value: string) => void;
}

export const Autocomplete = ({ data, onChange }: Props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dataFiltered, setDataFiltered] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const inputCurrent = inputRef.current;
    const changeFocusOut = () => {
      setTimeout(() => {
        setIsFocused(false);
      }, 100);
    };

    inputCurrent?.addEventListener("focusout", changeFocusOut);
    return () => {
      inputCurrent?.removeEventListener("focusout", changeFocusOut);
    };
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setDataFiltered(data.slice(0, 50));
    }
  }, [data]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredData = data
      .filter((name) => name.toLowerCase().includes(value.toLowerCase()))
      .slice(0, 50);
    setDataFiltered(filteredData);
  };

  const handleSelectOne = (name: string) => {
    setInputValue(name);
    onChange(name);
  }

  return (
    <div className="w-100 m-auto position-relative">
      <Form.Control
        ref={inputRef}
        placeholder="Buscar pokemon"
        onFocus={() => setIsFocused(true)}
        value={inputValue}
        onChange={handleInputChange}
      />
      {isFocused && (
        <div className="bg-white border p-1 w-100 rounded overflow-scroll position-absolute top-100 mt-1 autocomplete-modal">
          {!dataFiltered.length ? (
            <div className="d-flex justify-content-center">
              <h3 className="p-5">Pokemon no existe</h3>
            </div>
          ) : (
            dataFiltered.map((name, index) => (
              <p
                key={`${name}-${index}`}
                onClick={() => handleSelectOne(name)}
                className="cursor-pointer hover-item m-0 p-1"
              >
                {name}
              </p>
            ))
          )}
        </div>
      )}
    </div>
  );
};
