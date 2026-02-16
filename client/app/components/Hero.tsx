import { LoginCard } from "./LoginCard";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
      <div className="flex items-center justify-center rounded-lg p-8">
        <h1 className="text-4xl font-bold">The better way to keep track of your appointments</h1>
      </div>
      <div className="flex items-center justify-center rounded-lg p-8">
        <LoginCard />
      </div>
    </div>
  );
}
