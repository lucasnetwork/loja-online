import styled from 'styled-components';

export default styled.article`
  display: flex;
  width: 100%;
  margin-top: 40px;
  .values {
    margin-left: 38px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  padding-bottom: 50px;
  border-bottom: 1px solid #eee;
`;

export const Value = styled.p`
  font-size: 30px;
`;

export const Image = styled.img`
  width: 158px;
  height: 158px;
`;
