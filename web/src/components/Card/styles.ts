import styled from 'styled-components';

export default styled.article`
  width: 343px;
  height: 409px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.backColors.secondary};
`;

export const Title = styled.h4`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  text-transform: uppercase;
  font-weight: bold;
`;

export const Price = styled.p`
  color: ${({ theme }) => theme.fontColors.secondary};
  font-size: ${({ theme }) => theme.fontSizes.text};
  text-transform: uppercase;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Image = styled.img`
  flex: 1;
  width: 100%;
  margin: 40px 0;
`;
