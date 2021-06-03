import React, { ChangeEvent } from "react";

interface FormProps {
  addIme(note: string): void;
}

export const CheckoutFormInput: React.FC<FormProps> = ({ addIme: addIme }) => {
  const [ime, setIme] = React.useState("");

  const updateIme = (event: ChangeEvent<HTMLInputElement>) => {
    setIme(event.target.value);
  };

  const onAddImeClick = () => {
    addIme(ime);
    setIme("");
  };

  return (
    <div>
      <input
        onChange={updateIme}
        value={ime}
        type="text"
        name="ime"
        placeholder="Ime"
      />
      <button onClick={onAddImeClick}>Add name</button>
    </div>
  );
};