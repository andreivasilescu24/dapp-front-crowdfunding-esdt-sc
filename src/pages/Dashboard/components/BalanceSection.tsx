import { useGetAccount } from "@multiversx/sdk-dapp/hooks";
import { FormatAmount } from "@multiversx/sdk-dapp/UI";

export const BalanceSection = () => {
  const { balance } = useGetAccount();

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-lg bg-white border-4 border-BLACK-400 shadow-sm">
      <h2 className="text-lg font-medium text-BLACK-600 mb-2">Balance</h2>
      <FormatAmount
        value={balance}
        showLabel={true}
        egldLabel={"xEGLD"}
        className="text-sm text-BLACK-700"
      />
    </div>
  );
};
