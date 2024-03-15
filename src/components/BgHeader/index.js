import { DesktopBgHeaderImage, MobileBgHeaderImage } from "./BgHeader.styled";

export default function BgHeader() {
  return (
    <>
      <DesktopBgHeaderImage src="./bg-header-desktop.svg" alt="header banner" />
      <MobileBgHeaderImage src="./bg-header-mobile.svg" alt="header banner" />
    </>
  );
}
