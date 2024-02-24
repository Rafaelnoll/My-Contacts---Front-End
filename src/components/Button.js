import styled from 'styled-components';

export default styled.button`
  height: 52px;
  padding: 0 16px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  box-shadow: 0px 4px 10px 0px #0000000A;
  background-color: ${({ theme, danger }) => (danger ? theme.colors.danger.dark : theme.colors.primary.dark)};
  transition: background-color 0.2s ease-in;

  &:hover {
    background-color: ${({ theme, danger }) => (danger ? theme.colors.danger.main : theme.colors.primary.main)};
  }

  &:active {
    background-color: ${({ theme, danger }) => (danger ? theme.colors.danger.light : theme.colors.primary.light)};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[200]};
    cursor: not-allowed;
  }
`;
