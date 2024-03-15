import styled from "styled-components";
import { device } from "../../Devices";

export const BgImage = styled.img`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const DesktopBgHeaderImage = styled(BgImage)`
  @media ${device.sm} {
    display: none;
  }
`;

export const MobileBgHeaderImage = styled(BgImage)`
  display: none;
  @media ${device.sm} {
    display: block;
  }
`;
