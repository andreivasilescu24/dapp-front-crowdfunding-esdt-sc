import { useGetLoginInfo } from "@multiversx/sdk-dapp/hooks";

export const NativeAuthSection = () => {
  const { tokenLogin } = useGetLoginInfo();

  return (
    <div className="w-1/2 flex flex-col p-6 rounded-lg bg-white border-4 border-BLACK-400 shadow-sm mt-2">
      <h2 className="text-lg font-medium text-BLACK-600 mb-2">Native Auth Token</h2>
      <div
        contentEditable="false"
        className="overflow-auto break-words p-2 border border-gray-300 rounded text-sm text-BLACK-700"
        role="textbox"
        aria-multiline="true"
      >
        {tokenLogin?.nativeAuthToken}
      </div>
    </div>
  );
};
