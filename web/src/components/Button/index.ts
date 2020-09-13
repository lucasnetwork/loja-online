import styled, { css } from 'styled-components';

interface ButtonProps {
  save?: boolean;
}

export default styled.button.attrs({
  type: 'button',
})<ButtonProps>`
  background: blue;
  width: 143px;
  height: 33px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  border-radius: 20px;
  ${({ save }) =>
    save &&
    css`
      background: ${({ theme }) => theme.backColors.save};
    `}
`;
