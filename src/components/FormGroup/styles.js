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

  .form-item {
    position: relative;

    & .loader {
      position: absolute;
      right: 16px;
      top:20px;
    }
  }
`;

export const ButtonContainer = styled.div`
    margin-top: 24px;

    button {
      width: 100%;
    }
`;
