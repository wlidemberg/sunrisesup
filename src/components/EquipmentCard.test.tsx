import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { EquipmentCard } from './EquipmentCard';
import { Equipment } from '../types';

describe('EquipmentCard Component (Vitest)', () => {
  const mockEquipment: Equipment = {
    id: 'sup-001',
    name: 'Prancha All-Round Sunrise Explorer 10.6',
    category: 'rental',
    level: 'iniciante',
    price: 60,
    priceUnit: 'hora',
    rating: 4.9,
    reviewsCount: 128,
    image: 'https://example.com/sup.jpg',
    description: 'Prancha ultra-estável ideal para remadas ao amanhecer.',
    features: ['Deck antiderrapante EVA', 'Remo de carbono ajustavel'],
    maxCapacitySlot: 10,
    availableStock: 8,
    includedSafetyGear: true
  };

  it('deve renderizar o nome, categoria, preco e badge de seguranca (RN-004)', () => {
    const handleBooking = vi.fn();
    const handleCart = vi.fn();

    render(
      <EquipmentCard
        equipment={mockEquipment}
        onSelectBooking={handleBooking}
        onAddToCart={handleCart}
      />
    );

    expect(screen.getByText('Prancha All-Round Sunrise Explorer 10.6')).toBeInTheDocument();
    expect(screen.getByText(/Colete Homologado & Leash Inclusos/i)).toBeInTheDocument();
    expect(screen.getByText('R$ 60')).toBeInTheDocument();
  });

  it('deve chamar onSelectBooking ao clicar no botao de agendar', () => {
    const handleBooking = vi.fn();
    const handleCart = vi.fn();

    render(
      <EquipmentCard
        equipment={mockEquipment}
        onSelectBooking={handleBooking}
        onAddToCart={handleCart}
      />
    );

    const bookingButton = screen.getByRole('button', { name: /Reservar/i });
    fireEvent.click(bookingButton);

    expect(handleBooking).toHaveBeenCalledWith(mockEquipment, 1);
  });
});
