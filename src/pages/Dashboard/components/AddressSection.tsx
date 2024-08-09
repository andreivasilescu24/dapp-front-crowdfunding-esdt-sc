import { useGetAccount } from "@multiversx/sdk-dapp/hooks";

export const AddressSection = () => {
  const { address } = useGetAccount();

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-lg bg-white border-4 border-BLACK-400 shadow-sm">
      <h2 className="text-lg font-medium text-BLACK-600 mb-2">Address</h2>
      <span className="text-sm text-BLACK-700 break-all">{address}</span>
    </div>
  );
};
