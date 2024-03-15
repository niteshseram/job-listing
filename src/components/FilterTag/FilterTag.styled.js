import styled from "styled-components";

export const TagContainer = styled.div`
  border-radius: 0.25rem;
  background-color: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  display: flex;
  align-items: center;
`;

export const TagContent = styled.div`
  padding: 0.531rem 0.563rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.85rem;
  line-height: 100%;
`;

export const TagButton = styled.button`
  width: 32px;
  height: 32px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.primary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral400};
  }
`;
