import { LoginCard } from "./LoginCard";

export default function Hero() {
  return (
    <section className="min-h-screen px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        <div className="flex flex-col gap-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Agendamentos simples e automáticos
          </h1>

          <p className="text-lg text-sky-100 max-w-xl mx-auto md:mx-0">
            Crie links de agendamento, sincronize com seu calendário
            e elimine trocas infinitas de mensagens.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-white text-sky-700 rounded-md font-medium">
              Start for free
            </button>

            <button className="px-6 py-3 border border-white text-white rounded-md">
              See a demo
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <LoginCard />
        </div>

      </div>
    </section>
  );
}
