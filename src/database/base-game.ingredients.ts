import { type IngredientType } from '../types'

export const baseGameIngredients: IngredientType[] = [
  {
    name: 'Aleta larga abacea',
    effects: {
      first: 'Debilidad a la escarcha',
      second: 'Reforzar discreción',
      third: 'Debilidad al Veneno',
      fourth: 'Reforzar Restauración'
    },
    weight: '0.5',
    price: '15',
    description: 'Ríos, Arroyos, Barriles de Pescado',
    addedBy: 'Skyrim'
  },
  {
    name: 'Garras de Oso',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar Salud',
      third: 'Reforzar a una mano',
      fourth: 'Dañar Regeneración Mágica'
    },
    weight: '0.1',
    price: '2',
    description: 'Oso de Cueva, Oso Polar',
    addedBy: 'Skyrim'
  },
  {
    name: 'Abeja',
    effects: {
      first: 'Restaurar aguante',
      second: 'Disminuir aguante',
      third: 'Regenerar aguante',
      fourth: 'Debilidad a la descarga'
    },
    weight: '0.1',
    price: '3',
    description: 'Colmena',
    addedBy: 'Skyrim'
  },
  {
    name: 'Envoltorio de Colmena',
    effects: {
      first: 'Resistencia al veneno',
      second: 'Reforzar armadura ligera',
      third: 'Reforzar discreción',
      fourth: 'Reforzar destrucción'
    },
    weight: '1',
    price: '5',
    description: 'Colmena',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cenizas de Berit (Idéntico a Polvo de Hueso)',
    effects: {
      first: 'Dañar Aguante',
      second: 'Resistencia a la escarcha',
      third: 'Reforzar Conjuración',
      fourth: 'Disminuir Aguante'
    },
    weight: '0.5',
    price: '5',
    description: 'Objeto de Misión dado por Thadgeir',
    addedBy: 'Skyrim'
  },
  {
    name: 'Corona sangrante',
    effects: {
      first: 'Debilidad al Fuego',
      second: 'Reforzar Bloqueo',
      third: 'Debilidad al Veneno',
      fourth: 'Resistencia a la Magia'
    },
    weight: '0.3',
    price: '10',
    description: 'Racimos de Hongos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ranúnculo Encorvado',
    effects: {
      first: 'Dañar Aguante',
      second: 'Frenesí',
      third: 'Restaurar Salud',
      fourth: 'Reforzar Herrería'
    },
    weight: '0.2',
    price: '12',
    description: 'Cuevas y áreas oscuras',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ala de Mariposa Azul',
    effects: {
      first: 'Dañar Aguante',
      second: 'Reforzar Conjuración',
      third: 'Dañar Regeneración Mágica',
      fourth: 'Reforzar Encantamiento'
    },
    weight: '0.1',
    price: '2',
    description: 'Mariposa Azul',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ala de Dardo Azul',
    effects: {
      first: 'Resistencia a la descarga',
      second: 'Reforzar robo',
      third: 'Restaurar salud',
      fourth: 'Miedo'
    },
    weight: '0.1',
    price: '1',
    description: 'Volando sobre el agua',
    addedBy: 'Skyrim'
  },
  {
    name: 'Flor azul de montaña',
    effects: {
      first: 'Restaurar salud',
      second: 'Reforzar conjuración',
      third: 'Reforzar salud',
      fourth: 'Dañar regeneración mágica'
    },
    weight: '0.1',
    price: '2',
    description: 'Matas de Flores de Montaña',
    addedBy: 'Skyrim'
  },
  {
    name: 'Polvo de huesos',
    effects: {
      first: 'Dañar Aguante',
      second: 'Resistencia al Fuego',
      third: 'Reforzar Conjuración',
      fourth: 'Disminuir Aguante'
    },
    weight: '0.5',
    price: '5',
    description: 'Esqueletos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Corazón de Espino',
    effects: {
      first: 'Restaurar Magia',
      second: 'Reforzar Bloqueo',
      third: 'Parálisis',
      fourth: 'Reforzar Magia'
    },
    weight: '0.5',
    price: '20',
    description: 'Lideres Renegados',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ala de mariposa',
    effects: {
      first: 'Restaurar Salud',
      second: 'Reforzar Elocuencia',
      third: 'Daño al aguante duradero',
      fourth: 'Dañar Magia'
    },
    weight: '0.1',
    price: '3',
    description: 'Mariposa monarca',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz canina',
    effects: {
      first: 'Dañar aguante',
      second: 'Reforzar a una mano',
      third: 'Reforzar puntería',
      fourth: 'Parálisis'
    },
    weight: '0.1',
    price: '5',
    description: 'Cerca de áreas rocosas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Piel Chamuscada de Skeever',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Curar Enfermedad',
      third: 'Resistencia al Veneno',
      fourth: 'Restaurar Salud'
    },
    weight: '0.5',
    price: '1',
    description: 'Encontrado cocinando en hogueras',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevos de Cauro',
    effects: {
      first: 'Debilidad al Veneno',
      second: 'Reforzar Aguante',
      third: 'Dañar Magia',
      fourth: 'Invisibilidad'
    },
    weight: '0.2',
    price: '10',
    description: 'Cuevas de los Falmer',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevo de Gallina',
    effects: {
      first: 'Resistencia a la Magia',
      second: 'Dañar Regeneración Mágica',
      third: 'Respiración acuática',
      fourth: 'Daño al aguante duradero'
    },
    weight: '0.5',
    price: '2',
    description: 'Nido de Gallina',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz trepadora',
    effects: {
      first: 'Restaurar Magia',
      second: 'Dañar Regeneración de Aguante',
      third: 'Reforzar Capacidad de Carga',
      fourth: 'Debilidad a la Magia'
    },
    weight: '0.2',
    price: '1',
    description: 'Cráteres Volcánicos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz de nirn carmesí',
    effects: {
      first: 'Dañar Salud',
      second: 'Dañar Aguante',
      third: 'Invisibilidad',
      fourth: 'Resistencia a la Magia'
    },
    weight: '0.2',
    price: '10',
    description: 'Límite Sombrío',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cola de Espada Cyrodílica',
    effects: {
      first: 'Dañar Aguante',
      second: 'Reforzar Restauración',
      third: 'Miedo',
      fourth: 'Disminuir Salud'
    },
    weight: '0.3',
    price: '15',
    description: 'Ríos, Arroyos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Corazón de daedra',
    effects: {
      first: 'Restaurar Salud',
      second: 'Dañar Regeneración de Aguante',
      third: 'Dañar magia',
      fourth: 'Miedo'
    },
    weight: '0.5',
    price: '250',
    description: 'Daedra',
    addedBy: 'Skyrim'
  },
  {
    name: 'Campanilla de la muerte',
    effects: {
      first: 'Dañar Salud',
      second: 'Disminuir Aguante',
      third: 'Ralentizar',
      fourth: 'Debilidad al Veneno'
    },
    weight: '0.1',
    price: '4',
    description: 'Salvaje, en parterres',
    addedBy: 'Skyrim'
  },
  {
    name: 'Lengua de Dragón',
    effects: {
      first: 'Resistencia al fuego',
      second: 'Reforzar elocuencia',
      third: 'Reforzar ilusión',
      fourth: 'Reforzar a dos manos'
    },
    weight: '0.1',
    price: '5',
    description: 'Planta con flores similares al ingrediente',
    addedBy: 'Skyrim'
  },
  {
    name: 'Aceite enano',
    effects: {
      first: 'Debilidad a la magia',
      second: 'Reforzar ilusión',
      third: 'Regenerar magia',
      fourth: 'Restaurar magia'
    },
    weight: '0.3',
    price: '15',
    description: 'Ruinas Dwemer',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ectoplasma',
    effects: {
      first: 'Restaurar magia',
      second: 'Reforzar destrucción',
      third: 'Reforzar magia',
      fourth: 'Dañar salud'
    },
    weight: '0.1',
    price: '25',
    description: 'Criaturas fantasmales',
    addedBy: 'Skyrim'
  },
  {
    name: 'Oreja de Elfo',
    effects: {
      first: 'Restaurar Magia',
      second: 'Reforzar puntería',
      third: 'Debilidad a la escarcha',
      fourth: 'Resistencia al Fuego'
    },
    weight: '0.1',
    price: '10',
    description: 'Planta colgante',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ojo de Gato Sable',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Disminuir Salud',
      third: 'Dañar Magia',
      fourth: 'Restaurar Salud'
    },
    weight: '0.1',
    price: '2',
    description: 'Gato Sable, Gato Sable de las Nieves',
    addedBy: 'Skyrim'
  },
  {
    name: 'Oreja de Falmer',
    effects: {
      first: 'Dañar salud',
      second: 'Frenesí',
      third: 'Resistencia al veneno',
      fourth: 'Reforzar abrir cerraduras'
    },
    weight: '0.2',
    price: '10',
    description: 'Falmer',
    addedBy: 'Skyrim'
  },
  {
    name: 'Sales de Fuego',
    effects: {
      first: 'Debilidad a la escarcha',
      second: 'Resistencia al fuego',
      third: 'Restaurar magia',
      fourth: 'Regenerar magia'
    },
    weight: '0.3',
    price: '50',
    description: 'Atronach de las llamas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Amanita Muscaria',
    effects: {
      first: 'Resistencia al fuego',
      second: 'Reforzar a dos manos',
      third: 'Frenesí',
      fourth: 'Regenerar aguante'
    },
    weight: '0.1',
    price: '2',
    description: 'Crecimientos fúngicos y alrededor de cuevas.',
    addedBy: 'Skyrim'
  },
  {
    name: 'Mirriam de escarcha',
    effects: {
      first: 'Resistencia a la escarcha',
      second: 'Reforzar discreción',
      third: 'Disminuir magia',
      fourth: 'Dañar regeneración de aguante'
    },
    weight: '0.1',
    price: '1',
    description: 'Colgado en casas y negocios',
    addedBy: 'Skyrim'
  },
  {
    name: 'Sales de escarcha',
    effects: {
      first: 'Debilidad al fuego',
      second: 'Resistencia a la escarcha',
      third: 'Restaurar magia',
      fourth: 'Reforzar conjuración'
    },
    weight: '0.3',
    price: '100',
    description: 'Atronach de la escarcha',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ajo',
    effects: {
      first: 'Resistencia al Veneno',
      second: 'Reforzar Aguante',
      third: 'Regenerar Magia',
      fourth: 'Regenerar Salud'
    },
    weight: '0.3',
    price: '1',
    description: 'Crece en granjas y salvaje, colgado en interiores',
    addedBy: 'Skyrim'
  },
  {
    name: 'Liquen Gigante',
    effects: {
      first: 'Debilidad a la descarga',
      second: 'Disminuir Salud',
      third: 'Debilidad al Veneno',
      fourth: 'Restaurar Magia'
    },
    weight: '0.3',
    price: '5',
    description: 'Pantanos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Dedo del gigante',
    effects: {
      first: 'Dañar Aguante',
      second: 'Reforzar Salud',
      third: 'Reforzar Capacidad de Carga',
      fourth: 'Dañar Regeneración de Aguante'
    },
    weight: '1',
    price: '20',
    description: 'Gigantes',
    addedBy: 'Skyrim'
  },
  {
    name: 'Polvo Brillante',
    effects: {
      first: 'Dañar Magia',
      second: 'Dañar Regeneración Mágica',
      third: 'Reforzar Destrucción',
      fourth: 'Resistencia a la descarga'
    },
    weight: '0.5',
    price: '20',
    description: 'Wispmother',
    addedBy: 'Skyrim'
  },
  {
    name: 'Seta Brillante',
    effects: {
      first: 'Resistencia a la descarga',
      second: 'Reforzar Destrucción',
      third: 'Reforzar Herrería',
      fourth: 'Reforzar Salud'
    },
    weight: '0.2',
    price: '5',
    description: 'Paredes de cuevas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Semilla de hierba',
    effects: {
      first: 'Resistencia al Veneno',
      second: 'Disminuir Magia',
      third: 'Reforzar Alteración',
      fourth: 'Restaurar Magia'
    },
    weight: '0.1',
    price: '1',
    description: 'Tundra',
    addedBy: 'Skyrim'
  },
  {
    name: 'Garra de Bruja Cuervo',
    effects: {
      first: 'Resistencia a la Magia',
      second: 'Daño a la magia duradero',
      third: 'Reforzar Encantamiento',
      fourth: 'Reforzar Elocuencia'
    },
    weight: '0.3',
    price: '20',
    description: 'Bruja Cuervo',
    addedBy: 'Skyrim'
  },
  {
    name: 'Plumas de bruja cuervo',
    effects: {
      first: 'Dañar magia',
      second: 'Reforzar conjuración',
      third: 'Frenesí',
      fourth: 'Debilidad a la descarga'
    },
    weight: '0.1',
    price: '20',
    description: 'Bruja Cuervo',
    addedBy: 'Skyrim'
  },
  {
    name: 'Musgo Colgante',
    effects: {
      first: 'Dañar Magia',
      second: 'Reforzar Salud',
      third: 'Dañar Regeneración Mágica',
      fourth: 'Reforzar a una mano'
    },
    weight: '0.3',
    price: '1',
    description: 'Areas boscosas, en ruinas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Pico de Halcón',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Resistencia a la escarcha',
      third: 'Reforzar Capacidad de Carga',
      fourth: 'Resistencia a la descarga'
    },
    weight: '0.3',
    price: '15',
    description: 'Halcón',
    addedBy: 'Skyrim'
  },
  {
    name: 'Pluma de Halcón',
    effects: {
      first: 'Curar Enfermedad',
      second: 'Reforzar Armadura Ligera',
      third: 'Reforzar a una mano',
      fourth: 'Reforzar discreción'
    },
    weight: '0.1',
    price: '15',
    description: 'Halcón',
    addedBy: 'Skyrim'
  },
  {
    name: 'Carpa de hist',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar Magia',
      third: 'Dañar Regeneración de Aguante',
      fourth: 'Respiración acuática'
    },
    weight: '0.3',
    price: '6',
    description: 'Ríos y arroyos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Panal',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar Bloqueo',
      third: 'Reforzar Armadura Ligera',
      fourth: 'Disminuir Aguante'
    },
    weight: '1',
    price: '5',
    description: 'Colmena',
    addedBy: 'Skyrim'
  },
  {
    name: 'Carne humana',
    effects: {
      first: 'Dañar Salud',
      second: 'Parálisis',
      third: 'Restaurar Magia',
      fourth: 'Reforzar discreción'
    },
    weight: '0.3',
    price: '1',
    description: 'Falmer',
    addedBy: 'Skyrim'
  },
  {
    name: 'Corazón humano',
    effects: {
      first: 'Dañar Salud',
      second: 'Dañar Magia',
      third: 'Dañar Regeneración Mágica',
      fourth: 'Frenesí'
    },
    weight: '1',
    price: '0',
    description: 'Falmer',
    addedBy: 'Skyrim'
  },
  {
    name: 'Dientes de Espectro del Hielo',
    effects: {
      first: 'Debilidad a la escarcha',
      second: 'Reforzar armadura pesada',
      third: 'Invisibilidad',
      fourth: 'Debilidad al Fuego'
    },
    weight: '0.3',
    price: '30',
    description: 'Espectro de Hielo',
    addedBy: 'Skyrim'
  },
  {
    name: 'Heces de diablillo',
    effects: {
      first: 'Dañar Salud',
      second: 'Daño a la salud duradero',
      third: 'Parálisis',
      fourth: 'Restaurar Salud'
    },
    weight: '0.3',
    price: '0',
    description: 'Crecimientos fungicos dentro y alrededor de cuevas y mazmorras',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz de Jarrin',
    effects: {
      first: 'Dañar Salud',
      second: 'Dañar Magia',
      third: 'Dañar Aguante',
      fourth: 'Dañar Regeneración Mágica'
    },
    weight: '0.5',
    price: '10',
    description: 'Misión de la Hermandad Oscura',
    addedBy: 'Skyrim'
  },
  {
    name: 'Uvas de jazbay',
    effects: {
      first: 'Debilidad a la Magia',
      second: 'Reforzar Magia',
      third: 'Regenerar Magia',
      fourth: 'Disminuir Salud'
    },
    weight: '0.2',
    price: '1',
    description: 'Cráteres Volcánicos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Frutos de enebro',
    effects: {
      first: 'Debilidad al Fuego',
      second: 'Reforzar puntería',
      third: 'Regenerar Salud',
      fourth: 'Dañar Regeneración de Aguante'
    },
    weight: '0.1',
    price: '1',
    description: 'Arboles de Enebro',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cornamenta Grande',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar Aguante',
      third: 'Ralentizar',
      fourth: 'Dañar Regeneración de Aguante'
    },
    weight: '0.1',
    price: '2',
    description: 'Ciervo, Alce',
    addedBy: 'Skyrim'
  },
  {
    name: 'Lavanda',
    effects: {
      first: 'Resistencia a la Magia',
      second: 'Reforzar Aguante',
      third: 'Disminuir Magia',
      fourth: 'Reforzar Conjuración'
    },
    weight: '0.1',
    price: '1',
    description: 'Matorrales al aire libre',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ala de Actias Luna',
    effects: {
      first: 'Dañar Magia',
      second: 'Reforzar Armadura Ligera',
      third: 'Regenerar Salud',
      fourth: 'Invisibilidad'
    },
    weight: '0.1',
    price: '5',
    description: 'Actias Luna',
    addedBy: 'Skyrim'
  },
  {
    name: 'Azúcar Lunar',
    effects: {
      first: 'Debilidad al Fuego',
      second: 'Resistencia a la escarcha',
      third: 'Restaurar Magia',
      fourth: 'Regenerar Magia'
    },
    weight: '0.3',
    price: '50',
    description: 'Caravanas Khajitas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Mora Tapinella',
    effects: {
      first: 'Restaurar Magia',
      second: 'Daño a la salud duradero',
      third: 'Regenerar Aguante',
      fourth: 'Reforzar Ilusión'
    },
    weight: '0.3',
    price: '4',
    description: 'Arboles muertos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Quitina de cangrejo del barro',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Curar Enfermedad',
      third: 'Resistencia al Veneno',
      fourth: 'Resistencia al Fuego'
    },
    weight: '0.3',
    price: '2',
    description: 'Cangrejo de barro',
    addedBy: 'Skyrim'
  },
  {
    name: 'Putrefacción de Namira',
    effects: {
      first: 'Dañar Magia',
      second: 'Reforzar Abrir Cerraduras',
      third: 'Miedo',
      fourth: 'Regenerar Salud'
    },
    weight: '0.3',
    price: '0',
    description: 'Cuevas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Belladama',
    effects: {
      first: 'Dañar salud',
      second: 'Dañar regeneración mágica',
      third: 'Daño al aguante duradero',
      fourth: 'Reforzar destrucción'
    },
    weight: '0.1',
    price: '8',
    description: 'Cementerios, áreas de no muertos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz de Nirn',
    effects: {
      first: 'Dañar salud',
      second: 'Dañar aguante',
      third: 'Invisibilidad',
      fourth: 'Resistencia a la magia'
    },
    weight: '0.2',
    price: '10',
    description: 'Cerca de agua',
    addedBy: 'Skyrim'
  },
  {
    name: 'Percebe Nórdico',
    effects: {
      first: 'Dañar magia',
      second: 'Respiración acuática',
      third: 'Regenerar salud',
      fourth: 'Reforzar robo'
    },
    weight: '0.2',
    price: '5',
    description: 'Bajo el agua, o en rocas al lado del mar',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ala de dardo naranja',
    effects: {
      first: 'Restaurar aguante',
      second: 'Disminuir magia',
      third: 'Reforzar robo',
      fourth: 'Daño a la salud duradero'
    },
    weight: '0.1',
    price: '1',
    description: 'Volando sobre el agua',
    addedBy: 'Skyrim'
  },
  {
    name: 'Perla',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar Bloqueo',
      third: 'Restaurar Magia',
      fourth: 'Resistencia a la descarga'
    },
    weight: '0.1',
    price: '2',
    description: 'Almejas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevo de zorzal',
    effects: {
      first: 'Restaurar aguante',
      second: 'Reforzar abrir cerraduras',
      third: 'Debilidad al veneno',
      fourth: 'Resistencia a la descarga'
    },
    weight: '0.5',
    price: '2',
    description: 'Nidos en los bosques',
    addedBy: 'Skyrim'
  },
  {
    name: 'Colmillo de mamut molido',
    effects: {
      first: 'Restaurar aguante',
      second: 'Reforzar discreción',
      third: 'Debilidad al fuego',
      fourth: 'Miedo'
    },
    weight: '0.1',
    price: '2',
    description: 'Campamentos de gigantes',
    addedBy: 'Skyrim'
  },
  {
    name: 'Flor púrpura de montaña',
    effects: {
      first: 'Restaurar aguante',
      second: 'Reforzar discreción',
      third: 'Daño a la magia duradero',
      fourth: 'Resistencia a la escarcha'
    },
    weight: '0.1',
    price: '2',
    description: 'Matojos de Flores de Montaña',
    addedBy: 'Skyrim'
  },
  {
    name: 'Flor roja de montaña',
    effects: {
      first: 'Restaurar Magia',
      second: 'Disminuir Magia',
      third: 'Reforzar Magia',
      fourth: 'Dañar Salud'
    },
    weight: '0.1',
    price: '2',
    description: 'Matojos de Flores de Montaña',
    addedBy: 'Skyrim'
  },
  {
    name: 'Betty de río',
    effects: {
      first: 'Dañar salud',
      second: 'Reforzar Alteración',
      third: 'Ralentizar',
      fourth: 'Reforzar Capacidad de Carga'
    },
    weight: '0.3',
    price: '15',
    description: 'Ríos y arroyos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevo de acantiza minero',
    effects: {
      first: 'Restaurar Salud',
      second: 'Reforzar a una mano',
      third: 'Dañar Aguante',
      fourth: 'Debilidad a la Magia'
    },
    weight: '0.5',
    price: '2',
    description: 'Rock Warbler Nest',
    addedBy: 'Skyrim'
  },
  {
    name: 'Diente de Gato Sable',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar armadura pesada',
      third: 'Reforzar Herrería',
      fourth: 'Debilidad al Veneno'
    },
    weight: '0.1',
    price: '2',
    description: 'Gato Sable, Gato Sable de las Nieves',
    addedBy: 'Skyrim'
  },
  {
    name: 'Montón de Sal',
    effects: {
      first: 'Debilidad a la Magia',
      second: 'Reforzar Restauración',
      third: 'Ralentizar',
      fourth: 'Regenerar Magia'
    },
    weight: '0.2',
    price: '2',
    description: 'Mercaderes, contenedores, cerca de lugares de cocina',
    addedBy: 'Skyrim'
  },
  {
    name: 'Foliota escamosa',
    effects: {
      first: 'Debilidad a la Magia',
      second: 'Reforzar Ilusión',
      third: 'Regenerar Aguante',
      fourth: 'Reforzar Capacidad de Carga'
    },
    weight: '0.3',
    price: '4',
    description: 'Abedules muertos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Perca de Lomo Plateado',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Dañar Regeneración Mágica',
      third: 'Disminuir Salud',
      fourth: 'Resistencia a la escarcha'
    },
    weight: '0.3',
    price: '15',
    description: 'Ríos, arroyos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cola de Skeever',
    effects: {
      first: 'Dañar Regeneración de Aguante',
      second: 'Disminuir Salud',
      third: 'Dañar Salud',
      fourth: 'Reforzar Armadura Ligera'
    },
    weight: '0.2',
    price: '3',
    description: 'Skeever',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevo de Pez Asesino',
    effects: {
      first: 'Resistencia al Veneno',
      second: 'Reforzar Robo',
      third: 'Daño a la salud duradero',
      fourth: 'Reforzar Aguante'
    },
    weight: '0.2',
    price: '3',
    description: 'Bajo el agua',
    addedBy: 'Skyrim'
  },
  {
    name: 'Escamas de Pez Asesino',
    effects: {
      first: 'Resistencia a la escarcha',
      second: 'Daño a la salud duradero',
      third: 'Reforzar armadura pesada',
      fourth: 'Reforzar bloqueo'
    },
    weight: '0.1',
    price: '3',
    description: 'Pez Asesino',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cornamenta Pequeña',
    effects: {
      first: 'Debilidad al Veneno',
      second: 'Reforzar Restauración',
      third: 'Daño al aguante duradero',
      fourth: 'Dañar Salud'
    },
    weight: '0.1',
    price: '2',
    description: 'Alce',
    addedBy: 'Skyrim'
  },
  {
    name: 'Perla Pequeña',
    effects: {
      first: 'Restaurar Aguante',
      second: 'Reforzar a una mano',
      third: 'Reforzar Restauración',
      fourth: 'Resistencia a la escarcha'
    },
    weight: '0.1',
    price: '2',
    description: 'Almejas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Sinforicarpos',
    effects: {
      first: 'Resistencia al Fuego',
      second: 'Reforzar Encantamiento',
      third: 'Resistencia a la escarcha',
      fourth: 'Resistencia a la descarga'
    },
    weight: '0.1',
    price: '4',
    description: 'Arbusto Sinforicarpo',
    addedBy: 'Skyrim'
  },
  {
    name: 'Huevo de araña',
    effects: {
      first: 'Dañar Aguante',
      second: 'Dañar Regeneración Mágica',
      third: 'Reforzar Abrir Cerraduras',
      fourth: 'Reforzar puntería'
    },
    weight: '0.2',
    price: '5',
    description: 'Nidos de Arañas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Savia de Spriggan',
    effects: {
      first: 'Dañar Regeneración Mágica',
      second: 'Reforzar Encantamiento',
      third: 'Reforzar Herrería',
      fourth: 'Reforzar Alteración'
    },
    weight: '0.2',
    price: '5',
    description: 'Spriggan',
    addedBy: 'Skyrim'
  },
  {
    name: 'Vaina Fúngica del Pantano',
    effects: {
      first: 'Resistencia a la descarga',
      second: 'Daño a la magia duradero',
      third: 'Parálisis',
      fourth: 'Restaurar salud'
    },
    weight: '0.5',
    price: '3',
    description: 'Pantanos',
    addedBy: 'Skyrim'
  },
  {
    name: 'Raíz nudosa',
    effects: {
      first: 'Debilidad a la magia',
      second: 'Reforzar ilusión',
      third: 'Regenerar magia',
      fourth: 'Restaurar magia'
    },
    weight: '0.5',
    price: '15',
    description: 'Spriggan',
    addedBy: 'Skyrim'
  },
  {
    name: 'Ramita de Cardo',
    effects: {
      first: 'Resistencia a la escarcha',
      second: 'Disminuir aguante',
      third: 'Resistencia al veneno',
      fourth: 'Reforzar armadura pesada'
    },
    weight: '0.1',
    price: '1',
    description: 'Planta de Cardo',
    addedBy: 'Skyrim'
  },
  {
    name: 'Tórax de Luciérnaga',
    effects: {
      first: 'Restaurar aguante',
      second: 'Daño a la magia duradero',
      third: 'Debilidad a la magia',
      fourth: 'Reforzar aguante'
    },
    weight: '0.1',
    price: '1',
    description: 'Luciérnagas (por la noche)',
    addedBy: 'Skyrim'
  },
  {
    name: 'Grasa de trol',
    effects: {
      first: 'Resistencia al veneno',
      second: 'Reforzar a dos manos',
      third: 'Frenesí',
      fourth: 'Dañar salud'
    },
    weight: '1',
    price: '15',
    description: 'Trol, Trol de la escarcha',
    addedBy: 'Skyrim'
  },
  {
    name: 'Cardo Lanudo',
    effects: {
      first: 'Resistencia a la magia',
      second: 'Reforzar magia',
      third: 'Reforzar bloqueo',
      fourth: 'Reforzar Elocuencia'
    },
    weight: '0.1',
    price: '1',
    description: 'Montañas altas, bajo el nivel de nieve',
    addedBy: 'Skyrim'
  },
  {
    name: 'Polvo de Vampiro',
    effects: {
      first: 'Invisibilidad',
      second: 'Restaurar Magia',
      third: 'Regenerar Salud',
      fourth: 'Curar Enfermedad'
    },
    weight: '0.2',
    price: '25',
    description: 'Vampiro, La Mano de Plata',
    addedBy: 'Skyrim'
  },
  {
    name: 'Sales de Vacio',
    effects: {
      first: 'Debilidad a la descarga',
      second: 'Resistencia a la Magia',
      third: 'Dañar Salud',
      fourth: 'Reforzar Magia'
    },
    weight: '0.2',
    price: '125',
    description: 'Atronach de la tormenta',
    addedBy: 'Skyrim'
  },
  {
    name: 'Trigo',
    effects: {
      first: 'Restaurar salud',
      second: 'Reforzar salud',
      third: 'Dañar regeneración de aguante',
      fourth: 'Daño a la magia duradero'
    },
    weight: '0.1',
    price: '5',
    description: 'Granjas, contenedores',
    addedBy: 'Skyrim'
  },
  {
    name: 'Champiñón',
    effects: {
      first: 'Debilidad a la escarcha',
      second: 'Reforzar armadura pesada',
      third: 'Restaurar magia',
      fourth: 'Disminuir magia'
    },
    weight: '0.3',
    price: '0',
    description: 'Crecimientos fúngicos en cuevas y sus entradas',
    addedBy: 'Skyrim'
  },
  {
    name: 'Enseres de fuego fatuo',
    effects: {
      first: 'Restaurar aguante',
      second: 'Reforzar destrucción',
      third: 'Reforzar capacidad de carga',
      fourth: 'Resistencia a la magia'
    },
    weight: '0.1',
    price: '2',
    description: 'Madre Fatua',
    addedBy: 'Skyrim'
  }
]
