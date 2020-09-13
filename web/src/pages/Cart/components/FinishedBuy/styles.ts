import styled from 'styled-components';
import Button from '~/components/Button';
import { Value } from '~/components/ProductCart/styles';

export default styled.div`
  position: fixed;
  bottom: 15px;
  right: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 337px;
  height: 194px;
  border-radius: 10px;
  padding: 17px;
  background: ${({ theme }) => theme.backColors.secondary};
`;

export const Text = styled(Value)`
  color: ${({ theme }) => theme.fontColors.secondary};
`;

export const ButtonSave = styled(Button)`
  width: 256px;
  height: 57px;
`;
