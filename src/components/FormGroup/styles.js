import styled from 'styled-components';

export const Container = styled.div`
  & + & {
    margin-top: 16px;
  }

  small {
    font-size: 12px;
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.danger.main};
  }
`;

export const ButtonContainer = styled.div`
    margin-top: 24px;

    button {
      width: 100%;
    }
`;
