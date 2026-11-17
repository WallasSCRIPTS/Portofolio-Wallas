import deepImpactImg from '../assets/img/deep-impact.jpg'
import noireImg from '../assets/img/noire.jpg'
import oneOneImg from '../assets/img/one-one.jpg'
import cairoImg from '../assets/img/cairo.jpg'
import concreteImg from '../assets/img/concrete.jpg'
import floraImg from '../assets/img/flora.jpg'

export const projects = [
  {
    id: 'deep-impact',
    index: '01',
    title: 'Deep Impact',
    kicker: 'Experimento digital',
    category: 'Direção de arte · WebGL',
    year: '2026',
    image: deepImpactImg,
    alt: 'Nebulosa azul e laranja brilhando no espaço profundo',
    description:
      'Um experimento audiovisual que traduz a energia de uma explosão cósmica em uma experiência navegável. Shaders, tipografia e sound design trabalham juntos para criar uma sensação de escala e movimento.',
    role: 'Direção de arte, motion e desenvolvimento',
    tags: ['WebGL', 'Motion', 'Sound design'],
    featured: true,
  },
  {
    id: 'noire',
    index: '02',
    title: 'Noire',
    kicker: 'Série editorial',
    category: 'Direção de arte · Fotografia',
    year: '2025',
    image: noireImg,
    alt: 'Retrato em preto e branco de um homem com olhar direto',
    description:
      'Uma série editorial em preto e branco sobre presença e silêncio. O contraste duro, os enquadramentos fechados e a tipografia condensada constroem uma atmosfera cinematográfica.',
    role: 'Direção de arte e tratamento de imagem',
    tags: ['Art direction', 'Photography', 'Editorial'],
  },
  {
    id: 'one-one',
    index: '03',
    title: '1:1',
    kicker: 'Lançamento automotivo',
    category: 'Landing page · Motion',
    year: '2025',
    image: oneOneImg,
    alt: 'Carro esportivo branco fotografado de frente em uma rua à noite',
    description:
      'Landing page de lançamento para uma coleção automotiva. Um grid assimétrico, tipografia de impacto e microinterações precisas criam a sensação de velocidade e exclusividade.',
    role: 'UI/UX, direção de arte e front-end',
    tags: ['UI/UX', 'Landing page', 'Motion'],
  },
  {
    id: 'cairo',
    index: '04',
    title: 'Cairo Nights',
    kicker: 'Sistema de identidade',
    category: 'Branding · 3D',
    year: '2024',
    image: cairoImg,
    alt: 'Pirâmide do Egito sob um céu azul com nuvens',
    description:
      'Identidade visual para uma noite temática inspirada no Egito. Simbolismo, padronagens e peças digitais se combinam em um sistema gráfico que mistura o antigo e o contemporâneo.',
    role: 'Identidade visual, direção de arte e 3D',
    tags: ['Branding', '3D', 'Graphic design'],
  },
  {
    id: 'concrete',
    index: '05',
    title: 'Concrete',
    kicker: 'Website institucional',
    category: 'Website · Desenvolvimento',
    year: '2024',
    image: concreteImg,
    alt: 'Arranha-céus de vidro vistos de baixo em um dia nublado',
    description:
      'Site institucional para um estúdio de arquitetura. A estrutura modular, a fotografia em grande escala e a navegação fluida deixam o trabalho — e não a interface — no centro da experiência.',
    role: 'Design de interface e desenvolvimento',
    tags: ['Website', 'Development', 'UI/UX'],
  },
  {
    id: 'flora',
    index: '06',
    title: 'Flora',
    kicker: 'Identidade botânica',
    category: 'Branding · Embalagem',
    year: '2023',
    image: floraImg,
    alt: 'Flores amarelas e brancas contra um céu azul intenso',
    description:
      'Identidade visual para uma marca botânica de pequenos lotes. Uma paleta vibrante, embalagens táteis e uma direção de arte solar aproximam o produto de quem busca cor no cotidiano.',
    role: 'Identidade visual, embalagem e direção de arte',
    tags: ['Branding', 'Packaging', 'Art direction'],
  },
]

export const services = [
  {
    index: '01',
    title: 'Direção de Arte',
    description:
      'Identidade visual, sistemas e direção criativa para marcas que querem ser lembradas.',
    tags: ['Branding', 'Art direction', 'Editorial'],
  },
  {
    index: '02',
    title: 'Interfaces Digitais',
    description:
      'Sites, landing pages e produtos digitais com foco em estética, clareza e performance.',
    tags: ['UI/UX', 'Web design', 'Design systems'],
  },
  {
    index: '03',
    title: 'Motion & 3D',
    description:
      'Animações, experimentos visuais e peças em 3D que dão vida à sua marca.',
    tags: ['Motion', '3D', 'WebGL'],
  },
  {
    index: '04',
    title: 'Desenvolvimento',
    description:
      'Front-end sob medida, com código limpo e atenção obsessiva aos detalhes.',
    tags: ['React', 'Vite', 'CSS'],
  },
]

export const socials = [
  { label: 'GitHub', short: 'GH', href: 'https://github.com/WallasSCRIPTS' },
  { label: 'Instagram', short: 'IG', href: 'https://instagram.com/wallasscripts' },
  { label: 'LinkedIn', short: 'LI', href: 'https://linkedin.com/in/wallasscripts' },
]

export const contactEmail = 'contato@wallas.dev'
