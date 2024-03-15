import styled from "styled-components";
import { device } from "../../Devices";

export const ListingContainer = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: 4.75rem auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  @media ${device.sm} {
    margin: 0;
    padding: 3.5rem 1.5rem;
  }
`;

export const ListingContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media ${device.sm} {
    gap: 2.5rem;
  }
`;

export const Tag = styled.div`
  border-radius: 0.25rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.primary};
`;

export const TagContent = styled.div`
  padding: 0.531rem 0.563rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.primary};
`;
