import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  & > strong {
    font-size: 24px;
  }

  & > a {
    border-radius: 4px;
    border: 2px solid ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: none;
    padding: 8px 16px;
    font-weight: 600;
    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
      background-color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`;
