import { LoginCard } from "./LoginCard";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-8">
        <h1 className="text-2xl font-bold">Left Column</h1>
      </div>
      <div className="flex items-center justify-center bg-gray-200 rounded-lg p-8">
        <LoginCard />
      </div>
    </div>
  );
}
