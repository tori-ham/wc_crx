import * as React from "react";
import styled from "styled-components";
import wallet_logo from "../assets/walletconnect-banner.png";

const SWalletLogoWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const SWalletLogo = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background: url(${wallet_logo}) no-repeat;
  background-position: center;
`;

const WalletLogo = () => (
    <SWalletLogoWrapper>
        <SWalletLogo />
    </SWalletLogoWrapper>
);

export default WalletLogo;
