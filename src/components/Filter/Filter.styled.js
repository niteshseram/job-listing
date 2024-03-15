import styled from "styled-components";

export const FilterContainer = styled.div`
  background-color: white;
  border-radius: 0.313rem;
  padding: 1.25rem 2.5rem;
  box-shadow: 0 15px 20px -5px #0d718215;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  margin-top: -7.5rem;
  z-index: 2;
`;

export const FilterTagsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const ClearButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.neutral300};
  border: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.primary};
  }
`;
