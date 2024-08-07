import { useWallet } from "@aptos-labs/wallet-adapter-react";
import { Button } from "@headlessui/react";
import { truncateAddress } from "@sdk/utils/misc";
import { translationFunction } from "context/language-context";
import { useWalletModal } from "context/wallet-context/WalletModalContext";
import { useMemo, useState, type PropsWithChildren } from "react";
import { useScramble } from "use-scramble";
import OuterConnectText from "./OuterConnectText";
import Arrow from "@icons/Arrow";
import { useThemeContext } from "context";

export interface ConnectWalletProps extends PropsWithChildren<{ className?: string }> {
  mobile?: boolean;
  onClick?: () => void;
}

const CONNECT_WALLET = "Connect Wallet";

export const ButtonWithConnectWalletFallback: React.FC<ConnectWalletProps> = ({
  mobile,
  children,
  className,
  onClick,
}) => {
  const { connected, account } = useWallet();
  const { connectWallet } = useWalletModal();
  const { t } = translationFunction();
  const { theme } = useThemeContext();

  const [enabled, setEnabled] = useState(false);

  const text = useMemo(() => {
    if (connected) {
      if (account) {
        // If there's no button text provided, we just show the truncated address.
        // Keep in mind this only shows if no children are passed to the component.
        return truncateAddress(account.address);
      } else {
        return t("Connected");
      }
    }
    return t(CONNECT_WALLET);
  }, [connected, account, t]);

  const width = useMemo(() => {
    return `${text.length}ch`;
  }, [text]);

  const { ref, replay } = useScramble({
    text,
    overdrive: false,
    speed: 0.5,
    ignore: [" "],
    onAnimationStart: () => setEnabled(false),
    onAnimationEnd: () => setEnabled(true),
  });

  const handleReplay = () => {
    if (enabled) {
      replay();
    }
  };

  // Right now this is only used for mobile, because the desktop version is handled by the WalletDropdownMenu
  // component. We leave the functionality for non-mobile here anyway in case we want to use it in the future.
  return (
    <>
      {!connected || !children ? (
        <Button
          className={className + (mobile ? " px-[9px]" : "")}
          onClick={(e) => {
            e.preventDefault();
            onClick ? onClick() : connectWallet();
            handleReplay();
          }}
          onMouseOver={handleReplay}
          style={{ borderBottom: `1px dashed ${theme.colors.darkGray}` }}
        >
          <div className="flex flex-row text-ec-blue text-2xl justify-between">
            <div className="flex flex-row">
              <OuterConnectText side="left" connected={connected} mobile={mobile} />
              <div className={!mobile ? "" : "text-black text-[32px] leading-[40px]"}>
                <span
                  className="uppercase whitespace-nowrap text-overflow-ellipsis overflow-hidden"
                  style={{ width, maxWidth: width }}
                  ref={ref}
                />
              </div>
              <OuterConnectText side="right" connected={connected} mobile={mobile} />
            </div>
            <Arrow width={18} className="fill-black" />
          </div>
        </Button>
      ) : (
        children
      )}
    </>
  );
};

export default ButtonWithConnectWalletFallback;
