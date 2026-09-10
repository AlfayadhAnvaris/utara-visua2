// Package pricing tiers for Utara Visua
export const packages = [
  {
    id: 1,
    name: 'PAKET 1',
    tagline: 'Mulai dari sini',
    price: 'Hubungi Kami',
    highlight: false,
    color: 'white',
    features: [
      { label: 'Design', included: true },
      { label: 'Soft File (JPG/PNG)', included: true },
      { label: 'Cetak', included: false },
      { label: 'Frame', included: false },
    ],
    description: 'Cocok untuk kamu yang baru mulai membangun visual brand. Dapatkan desain profesional dalam format digital siap upload.',
  },
  {
    id: 2,
    name: 'PAKET 2',
    tagline: 'Paling Populer',
    price: 'Hubungi Kami',
    highlight: true,
    color: 'red',
    features: [
      { label: 'Design', included: true },
      { label: 'Soft File (JPG/PNG)', included: true },
      { label: 'Cetak', included: true },
      { label: 'Frame', included: false },
    ],
    description: 'Solusi terlengkap untuk promosi fisik dan digital. Desain siap cetak dengan kualitas print premium.',
  },
  {
    id: 3,
    name: 'PAKET 3',
    tagline: 'All-in-One',
    price: 'Hubungi Kami',
    highlight: false,
    color: 'blue',
    features: [
      { label: 'Design', included: true },
      { label: 'Soft File (JPG/PNG)', included: true },
      { label: 'Cetak', included: true },
      { label: 'Frame', included: true },
    ],
    description: 'Paket premium paling lengkap. Termasuk frame siap display — perfect untuk cafe, toko, dan event.',
  },
];
