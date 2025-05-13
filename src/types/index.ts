export interface Flights {
  id: string;
  airlane: string;
  from: string;
  to: string;
  depatureTime: string;
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
