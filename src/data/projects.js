// Project portfolio data for Utara Visua
// Replace image paths with real project assets when available

import torsbreakImg from '../assets/projects/torsbreak.png';
import galleriKulitImg from '../assets/projects/galleri_kulit.png';
import cafePromoImg from '../assets/projects/cafe_promo.png';
import hiringPosterImg from '../assets/projects/hiring_poster.png';
import fashionEventImg from '../assets/projects/fashion_event.png';

export const projects = [
  {
    id: 1,
    title: 'TORSBREAK — Pre Order Vol. 2',
    client: 'Torsbreak Clothing',
    category: 'Fashion',
    tag: 'FASHION',
    tagColor: 'red',
    image: torsbreakImg,
    description:
      'Desain poster pre-order koleksi Vol. 2 untuk brand streetwear lokal Torsbreak. Visual minimalis dengan estetika zine underground — hitam putih, tipografi bold, dan komposisi yang kuat untuk mendorong konversi penjualan.',
    deliverables: ['Poster Digital', 'Story IG', 'Feed IG'],
    year: '2024',
  },
  {
    id: 2,
    title: 'Galleri Kulit Adareis — Brand Poster',
    client: 'Galleri Kulit Adareis',
    category: 'Fashion',
    tag: 'FASHION',
    tagColor: 'red',
    image: galleriKulitImg,
    description:
      'Visual promosi untuk toko produk kulit handmade. Pendekatan desain vintage illustration dengan warna earthy tone — menonjolkan kesan artisan, kualitas, dan keaslian produk kulit premium.',
    deliverables: ['Poster Digital', 'Flyer Promosi', 'Feed IG'],
    year: '2024',
  },
  {
    id: 3,
    title: 'Discover the Taste — Cafe Promo',
    client: 'Rahasia Coffee & Kitchen',
    category: 'F&B',
    tag: 'FOOD & BEV',
    tagColor: 'blue',
    image: cafePromoImg,
    description:
      'Kampanye promosi bulanan untuk cafe lokal di Malang. Desain berfokus pada food photography yang vibrant dengan tipografi energetik untuk menarik segmen muda yang aktif di media sosial.',
    deliverables: ['Poster Event', 'Story IG', 'Banner Digital'],
    year: '2024',
  },
  {
    id: 4,
    title: 'We Are Hiring — Recruitment Poster',
    client: 'Staple.co',
    category: 'Brand',
    tag: 'BRANDING',
    tagColor: 'white',
    image: hiringPosterImg,
    description:
      'Desain poster rekrutmen untuk brand streetwear Staple.co. Menggunakan visual yang bold dan eye-catching dengan skema warna hitam-kuning khas streetwear untuk menarik kandidat yang sesuai dengan kultur brand.',
    deliverables: ['Poster Digital', 'Feed IG', 'Soft File'],
    year: '2024',
  },
  {
    id: 5,
    title: 'Fashion Week — Event Visual',
    client: 'Kolektif Muda',
    category: 'Event',
    tag: 'EVENT',
    tagColor: 'blue',
    image: fashionEventImg,
    description:
      'Visual untuk event fashion lokal "Kolektif Muda". Desain dengan estetika modern dan bold yang merepresentasikan semangat kreator lokal, menggunakan warna-warna vibrant untuk menarik perhatian audience.',
    deliverables: ['Key Visual', 'Poster Event', 'Story Series', 'Feed IG'],
    year: '2025',
  },
];

export const categories = ['Semua', 'Fashion', 'F&B', 'Event', 'Brand'];
