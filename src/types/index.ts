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

export interface Equipment {
  id: string;
  name: string;
  category: 'rental' | 'lesson' | 'product';
  level: 'iniciante' | 'intermediario' | 'avancado' | 'all';
  price: number;
  priceUnit: string;
  rating: number;
  reviewsCount: number;
  image: string;
  description: string;
  features: string[];
  maxCapacitySlot: number;
  availableStock: number;
  includedSafetyGear: boolean;
}

export interface BookingSlot {
  id: string;
  time: string;
  isSunrise: boolean;
  availableCount: number;
}
