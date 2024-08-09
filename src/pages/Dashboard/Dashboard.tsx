
import { BalanceSection } from "./components/BalanceSection";
import { AddressSection } from "./components/AddressSection";
import { TransactionSection } from "./components/TransactionSection";
import { NativeAuthSection } from "./components/NativeAuthSection";

import fundal3 from './fundal3.png';

export const Dashboard = () => {
  return (
    <div
      className="h-screen flex flex-col items-center py-4 text-3xl font-bold text-center"
      style={{
        backgroundImage: `url(${fundal3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h2 className="text-white mb-4">Dashboard</h2>
      <AddressSection />
      <BalanceSection />
      <TransactionSection />
      <NativeAuthSection />
    </div>
  );
};
