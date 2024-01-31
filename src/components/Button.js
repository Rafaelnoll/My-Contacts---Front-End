import styled from 'styled-components';

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 4px 10px 0px #0000000A;
  background-color: ${({ theme }) => theme.colors.primary.main};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.primary.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }
`;
