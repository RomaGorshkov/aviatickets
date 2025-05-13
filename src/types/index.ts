export interface Flights {
  id: string;
  airline: string;
  from: string;
  to: string;
  departureTime: string;
  arrivalTime: string;
  price: number;
  terminal: string;
  gate: string;
  tickets: FlightTicket;
}

interface FlightTicket {
  total: number;
  remaining: number;
}
