export const PASSEIO_PRECO_UNICO = 150.00; // R$ 150,00 por participante
export const HORARIO_UNICO_SAIDA = "05:30 AM (Nascer do Sol no Mar)";
export const LOCAL_ENCONTRO_OFICIAL = "Guarderia Surf Club - R. Francisco Otaviano, 42 - Copacabana, Rio de Janeiro - RJ";

export function calculateBookingTotal(personsCount: number, pricePerPerson: number = PASSEIO_PRECO_UNICO): number {
  const validQty = Math.max(1, Math.floor(personsCount || 1));
  return Number((validQty * pricePerPerson).toFixed(2));
}

export function formatCurrencyBR(value: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value);
}

export function isCancellationRefundable(bookingDateStr: string, currentDate: Date = new Date()): boolean {
  const bookingDate = new Date(bookingDateStr);
  if (isNaN(bookingDate.getTime())) return false;
  const diffMs = bookingDate.getTime() - currentDate.getTime();
  const diffHours = diffMs / (1000 * 60 * 60);
  return diffHours >= 48; // Regra RN-003: 48 horas de antecedencia
}

export function generateReservationCode(): string {
  const rand = Math.floor(10000 + Math.random() * 90000);
  return `SR-${rand}`;
}
