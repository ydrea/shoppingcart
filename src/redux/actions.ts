 
export type Action = { type: "ADD"; payload: string };

export const addIme = (ime: string): Action => ({
  type: "ADD",
  payload: ime,
});