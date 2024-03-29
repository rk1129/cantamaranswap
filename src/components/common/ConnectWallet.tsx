import React from "react";
import { AppConfig, showConnect, UserSession } from "@stacks/connect";

const appConfig = new AppConfig(["store_write", "publish_data"]);

export const userSession = new UserSession({ appConfig });

const ConnectWallet = () => {
  const address = userSession.loadUserData().profile.stxAddress
    .mainnet as string;
  const isAuthenticated = userSession.isUserSignedIn();

  const authenticate = () => {
    if (isAuthenticated === false)
      showConnect({
        appDetails: {
          name: "Stacks React Starter",
          icon: window.location.origin + "/logo512.png",
        },
        redirectTo: "/",
        onFinish: () => {
          window.location.reload();
        },
        userSession,
      });
  };

  return (
    <button
      className="bg-[rgba(255,255,255,0.1)] px-6 py-3 rounded-full text-base font-light leading-6 border-special-black border-[1px] dark:border-none"
      type="button"
      onClick={authenticate}
    >
      {isAuthenticated
        ? `${address.slice(0, 5)}...${address.slice(-3)}`
        : "Connect Wallet"}
    </button>
  );
};

export default ConnectWallet;
