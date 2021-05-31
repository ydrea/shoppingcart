import styled from "styled-components";

export const InputField = styled.div`
  background-color: ${props => props.theme.colors.white};
  border-radius: 8px;
  padding: 18px 283px 17px 19px;
  display: flex;
  align-items: center;
  border: 1px solid ${props => props.theme.colors.lightGrey};
`;
export const OdaberiVrstuKorisnika = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  flex: 1;
  align-self: stretch;
  font-family: ${props =>
    props.theme.fonts.livvic18SemiBold.family};
  font-size: ${props =>
    props.theme.fonts.livvic18SemiBold.size};
  font-weight: ${props =>
    props.theme.fonts.livvic18SemiBold.weight};
  line-height: ${props =>
    props.theme.fonts.livvic18SemiBold.lineHeight};
`;

import React from "react";
import {
  InputField,
  OdaberiVrstuKorisnika
} from "./InputField.style";

const InputFieldComponent = () => {
  return (
    <InputField>
      <OdaberiVrstuKorisnika>
        Odaberi vrstu korisnika
      </OdaberiVrstuKorisnika>
    </InputField>
  );
};

export default InputFieldComponent;