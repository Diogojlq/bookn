"use client";

import { useState } from "react";
import Header from "../components/Header";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");

  const timeSlots = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const services = [
    { id: 1, name: "Consultation", duration: "30 min", price: "$50" },
    { id: 2, name: "Haircut", duration: "45 min", price: "$75" },
    { id: 3, name: "Styling", duration: "60 min", price: "$100" },
    { id: 4, name: "Treatment", duration: "90 min", price: "$150" },
  ];

  const handleSchedule = () => {
    if (selectedDate && selectedTime) {
      alert(`Agendamento confirmado para ${selectedDate} às ${selectedTime}`);
    } else {
      alert("Por favor, selecione uma data e horário");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-2">
            Agende seu Horário
          </h1>
          <p className="text-muted-foreground text-lg">
            Escolha um serviço, data e horário que melhor se adequa a você
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Serviços */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Serviços
            </h2>
            <div className="space-y-3">
              {services.map((service) => (
                <Card
                  key={service.id}
                  className="p-4 cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors border border-border"
                >
                  <h3 className="font-semibold text-foreground">
                    {service.name}
                  </h3>
                  <div className="flex justify-between items-center mt-2 text-sm text-muted-foreground">
                    <span>{service.duration}</span>
                    <span className="font-bold text-foreground">
                      {service.price}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Agendamento */}
          <div className="lg:col-span-2">
            <Card className="p-8 border border-border">
              <div className="space-y-8">
                {/* Data */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    Data
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                {/* Horários */}
                <div>
                  <label className="block text-lg font-semibold text-foreground mb-3">
                    Horário Disponível
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 px-3 rounded-lg font-medium transition-colors ${
                          selectedTime === time
                            ? "bg-primary text-primary-foreground"
                            : "border border-border text-foreground hover:bg-accent hover:text-accent-foreground"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Resumo */}
                <div className="bg-muted/50 p-6 rounded-lg border border-border">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Resumo do Agendamento
                  </h3>
                  <div className="space-y-2 text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Data:</span>
                      <span className="text-foreground font-medium">
                        {selectedDate || "Não selecionada"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Horário:</span>
                      <span className="text-foreground font-medium">
                        {selectedTime || "Não selecionado"}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Botão */}
                <Button
                  onClick={handleSchedule}
                  className="w-full py-3 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors rounded-lg"
                >
                  Confirmar Agendamento
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
