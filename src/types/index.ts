export type PageTab = 'home' | 'sobre' | 'comotrabalhamos' | 'reserva' | 'contato';

export interface BookingReservation {
  id: string;
  selectedDate: string;
  personsCount: number;
  pricePerPerson: number;
  totalPrice: number;
  customerName: string;
  customerPhone: string;
  status: 'confirmada' | 'pendente' | 'cancelada';
  createdAt: string;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
