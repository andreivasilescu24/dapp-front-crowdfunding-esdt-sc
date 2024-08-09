import React from 'react';
import { useNavigate } from "react-router-dom";
import {
  ExtensionLoginButton,
  ExtensionLoginButtonPropsType,
  LedgerLoginButton,
  LedgerLoginButtonPropsType,
  OperaWalletLoginButtonPropsType,
  WalletConnectLoginButton,
  WalletConnectLoginButtonPropsType,
  WebWalletLoginButton,
  WebWalletLoginButtonPropsType,
} from "@multiversx/sdk-dapp/UI";

import fundal2 from './fundal2.png';

type CommonPropsType =
  | OperaWalletLoginButtonPropsType
  | ExtensionLoginButtonPropsType
  | WebWalletLoginButtonPropsType
  | LedgerLoginButtonPropsType
  | WalletConnectLoginButtonPropsType;

export const Unlock = () => {
  const navigate = useNavigate();
  const commonProps: CommonPropsType = {
    callbackRoute: "/dashboard",
    nativeAuth: true,
    onLoginRedirect: () => {
      navigate("/dashboard");
    },
  };

  return (
    <div
      className="h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(${fundal2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        className="flex flex-col p-6 items-center justify-center gap-4 rounded-xl bg-[#f6f8fa] bg-opacity-90"
        data-testid="unlockPage"
      >
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-2xl">Login</h2>
          <p className="text-center text-gray-400">Choose a login method</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <WalletConnectLoginButton
            loginButtonText="xPortal App"
            {...commonProps}
            className="custom-teal-button"
          />
          <LedgerLoginButton
          
            loginButtonText="Ledger"
            {...commonProps}
            className="custom-teal-button"
          />
          <ExtensionLoginButton
            loginButtonText="DeFi Wallet"
            {...commonProps}
            className="custom-teal-button"
          />

          
          <WebWalletLoginButton
            {...commonProps}
            className="custom-teal-button"
          />
        </div>
      </div>
    </div>
  );
};
