import { describe, it, expect } from 'vitest';
import {
  calculateBookingTotal,
  formatCurrencyBR,
  isCancellationRefundable,
  PASSEIO_PRECO_UNICO
} from './bookingUtils';

describe('Booking Utilities (Sunrise SUP - Guarderia Surf Club)', () => {
  it('deve calcular o total da reserva multiplicando participantes por R$ 150', () => {
    expect(calculateBookingTotal(1)).toBe(150.00);
    expect(calculateBookingTotal(2)).toBe(300.00);
    expect(calculateBookingTotal(4)).toBe(600.00);
  });

  it('deve formatar valores em moeda BRL corretamente', () => {
    expect(formatCurrencyBR(150)).toContain('150,00');
  });

  it('RN-003: deve permitir cancelamento com reembolso integral apenas com 48h de antecedencia', () => {
    const now = new Date('2026-09-05T10:00:00Z');
    const valid48hDate = '2026-09-08T10:00:00Z'; // > 48h
    const invalidDate = '2026-09-06T10:00:00Z'; // < 48h

    expect(isCancellationRefundable(valid48hDate, now)).toBe(true);
    expect(isCancellationRefundable(invalidDate, now)).toBe(false);
  });
});
