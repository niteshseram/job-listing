import styled from "styled-components";
import { device } from "../../Devices";

export const CardContainer = styled.div`
  background-color: white;
  border-radius: 0.313rem;
  padding: 2rem 2.5rem;
  box-shadow: 0 15px 20px -5px #0d718215;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  ${({ isFeatured, theme }) =>
    isFeatured &&
    `
    border-left: 5px solid ${theme.colors.primary};
  `}
  position: relative;

  @media ${device.sm} {
    padding: 2rem 1.5rem 1.5rem 1.5rem;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const JobLogo = styled.img`
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  @media ${device.sm} {
    width: 3rem;
    height: 3rem;
    position: absolute;
    top: 0;
    transform: translateY(-1.5rem);
  }
`;

export const JobDetails = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const JobInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const HeadingInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const CompanyName = styled.p`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ChipWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Chip = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.375rem 0.5rem;
  color: #fff;
  font-weight: 700;
  font-size: 0.75rem;
  line-height: 100%;
  border-radius: 0.75rem;
`;

export const NewChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const FeaturedChip = styled(Chip)`
  background-color: ${({ theme }) => theme.colors.neutral400};
`;

export const JobTitle = styled.h1`
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 100%;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral400};
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  @media ${device.sm} {
    font-size: 1rem;
  }
`;

export const JobMetaData = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  color: ${({ theme }) => theme.colors.neutral300};
  font-weight: 500;
`;

export const Divider = styled.div`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral300};
`;

export const TagsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: center;

  @media ${device.sm} {
    width: 100%;
    padding-top: 1rem;
    border-top: ${({ theme }) => `1px solid ${theme.colors.neutral300}`};
  }
`;

export const Tag = styled.button`
  font-family: inherit;
  font-size: 0.85rem;
  border-radius: 0.25rem;
  padding: 0.531rem 0.563rem;
  border: none;
  cursor: pointer;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.neutral200};
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
  }
`;
