import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-bottom: 16px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.gray['200-opacity-20']};

  & > strong {
    font-size: 24px;
    color: ${({ theme }) => theme.colors.gray[900]}
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
