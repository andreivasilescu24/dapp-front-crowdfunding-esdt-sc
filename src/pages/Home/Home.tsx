
import fundal from './fundal1.png';

export const HomePage = () => {
  return (
    <div
      className="h-screen text-white text-3xl font-bold text-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${fundal})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-5xl md:text-6xl lg:text-5xl px-4 py-2 bg-black bg-opacity-50 rounded-md">
        Please connect your wallet
      </h1>
    </div>
  );
};
