import styled from 'styled-components';

export default styled.header`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.backColors.primary};
  width: 100%;
  height: 200px;
  padding: 50px;
  justify-content: space-between;
  svg {
    cursor: pointer;
  }
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.title};
  color: ${({ theme }) => theme.fontColors.secondary};
`;
