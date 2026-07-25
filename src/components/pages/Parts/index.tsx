import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import Button from '../../common/Button';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
// Заменили div на main для семантической структуры
const PageWrapper = styled.main`
  padding: 120px 0 60px;
  min-height: 60vh;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 100px 0 40px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 80px 0 30px;
  }
`;

const Header = styled.header`
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-bottom: 24px;
  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 8px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
  }
`;

// ===== ПОИСК =====
const SearchWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin: 24px 0 32px;
  flex-wrap: wrap;
  background: ${theme.colors.background.card};
  padding: 20px 24px;
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.glass.border};

  input {
    flex: 1;
    padding: 12px 18px;
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.glass.border};
    background: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.md};
    outline: none;
    min-width: 200px;

    &:focus {
      border-color: ${theme.colors.accent.primary};
    }

    &::placeholder {
      color: ${theme.colors.text.secondary};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      min-width: unset;
      font-size: ${theme.fontSizes.sm};
      padding: 10px 14px;
    }
  }

  button {
    flex-shrink: 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    padding: 16px;
    gap: 12px;
    margin: 16px 0 24px;

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;

// ===== КАТЕГОРИИ =====
const CategoriesWrapper = styled.nav`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 8px;
    margin-bottom: 24px;
    justify-content: center;
  }
`;

const CategoryButton = styled.button<{ active: boolean }>`
  padding: 8px 20px;
  border-radius: ${theme.borderRadius.full};
  border: 1px solid ${({ active }) =>
        active ? theme.colors.accent.primary : theme.colors.glass.border};
  background: ${({ active }) =>
        active ? theme.colors.accent.primary : 'transparent'};
  color: ${({ active }) =>
        active ? '#fff' : theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${theme.transitions.default};
  font-size: ${theme.fontSizes.sm};
  font-weight: 500;

  &:hover {
    border-color: ${theme.colors.accent.primary};
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.xs};
    padding: 6px 14px;
  }
`;

// ===== СЕТКА ЗАПЧАСТЕЙ =====
const PartsGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 30px;
  }
`;

const PartCard = styled(GlassCard)`
  padding: 0;
  overflow: hidden;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.hover};
  }

  .image {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: block;
    background: ${theme.colors.background.card};
  }

  .info {
    padding: 16px 20px 20px;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 12px 16px 16px;
    }
  }

  /* Повысили уровень заголовка до h2 для правильной семантической иерархии */
  h2.name {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
    margin-bottom: 4px;
    color: ${theme.colors.text.primary};

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.sm};
    }
  }

  .details {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 8px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.xs};
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }

  .status {
    display: inline-block;
    padding: 2px 10px;
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.fontSizes.xs};
    font-weight: 600;

    &.in-stock {
      background: rgba(48, 209, 88, 0.2);
      color: ${theme.colors.status.success};
    }

    &.on-order {
      background: rgba(255, 159, 10, 0.2);
      color: ${theme.colors.status.warning};
    }

    &.sold {
      background: rgba(255, 69, 58, 0.2);
      color: ${theme.colors.status.error};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 10px;
      padding: 2px 8px;
    }
  }

  .price {
    font-weight: 600;
    color: ${theme.colors.accent.primary};
    font-size: ${theme.fontSizes.lg};
    margin: 8px 0 12px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
      margin: 6px 0 10px;
    }
  }
`;

// ===== СОСТОЯНИЯ =====
const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${theme.colors.text.secondary};

  h2 {
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: 8px;
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 16px;

    h2 {
      font-size: ${theme.fontSizes.xl};
    }
  }
`;

// ===== ДАННЫЕ =====
const CATEGORIES = ['Все', 'Двигатели', 'Коробки передач', 'Кузовные детали', 'Тюнинг', 'Электрика'];

const MOCK_PARTS = [
    {
        id: 1,
        name: 'Двигатель 2JZ-GTE',
        category: 'Двигатели',
        vin: 'JZA80-123456',
        article: '2JZ-001',
        price: '450 000 ₽',
        rawPrice: 450000,
        status: 'in-stock',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
        id: 2,
        name: 'Коробка A340E',
        category: 'Коробки передач',
        vin: 'JZA80-123456',
        article: 'A340-002',
        price: '120 000 ₽',
        rawPrice: 120000,
        status: 'on-order',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
        id: 3,
        name: 'Капот (оригинал)',
        category: 'Кузовные детали',
        vin: 'JZA80-123456',
        article: 'CAP-003',
        price: '85 000 ₽',
        rawPrice: 85000,
        status: 'in-stock',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
        id: 4,
        name: 'Турбокит Garrett GTX',
        category: 'Тюнинг',
        vin: '',
        article: 'GTX-004',
        price: '320 000 ₽',
        rawPrice: 320000,
        status: 'in-stock',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
        id: 5,
        name: 'Блок управления ECU',
        category: 'Электрика',
        vin: 'JZA80-123456',
        article: 'ECU-005',
        price: '65 000 ₽',
        rawPrice: 65000,
        status: 'on-order',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
        id: 6,
        name: 'Двигатель 1JZ-GTE',
        category: 'Двигатели',
        vin: 'JZX90-654321',
        article: '1JZ-006',
        price: '380 000 ₽',
        rawPrice: 380000,
        status: 'sold',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
];

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Parts = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Все');

    const filteredParts = MOCK_PARTS.filter((part) => {
        const matchesSearch =
            part.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            part.article.toLowerCase().includes(searchQuery.toLowerCase()) ||
            part.vin.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory =
            activeCategory === 'Все' || part.category === activeCategory;

        return matchesSearch && matchesCategory;
    });

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
    };

    // Внедрение структурированных данных Schema.org (ItemList + Product)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        'name': 'Автозапчасти из Японии — каталог JDMVL',
        'description': 'Оригинальные и контрактные автозапчасти из Японии во Владивостоке.',
        'url': 'https://staycame.github.io/JDMvl/parts',
        'numberOfItems': MOCK_PARTS.length,
        'itemListElement': MOCK_PARTS.map((part, index) => ({
            '@type': 'ListItem',
            'position': index + 1,
            'item': {
                '@type': 'Product',
                'name': part.name,
                'image': part.img,
                'description': `Автозапчасть ${part.name}. Артикул: ${part.article || 'н/д'}, VIN: ${part.vin || 'н/д'}`,
                'sku': part.article || `PART-${part.id}`,
                'offers': {
                    '@type': 'Offer',
                    'priceCurrency': 'RUB',
                    'price': part.rawPrice,
                    'availability':
                        part.status === 'in-stock'
                            ? 'https://schema.org/InStock'
                            : part.status === 'on-order'
                                ? 'https://schema.org/PreOrder'
                                : 'https://schema.org/OutOfStock'
                }
            }
        }))
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Автозапчасти из Японии — каталог | JDMVL</title>
                <meta
                    name="description"
                    content="Оригинальные и контрактные автозапчасти из Японии во Владивостоке. Поиск по VIN, артикулу и названию."
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/parts" />

                {/* Open Graph */}
                <meta property="og:title" content="Автозапчасти из Японии — каталог | JDMVL" />
                <meta
                    property="og:description"
                    content="Оригинальные и контрактные автозапчасти из Японии во Владивостоке. Поиск по VIN, артикулу и названию."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/parts" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />

                {/* Микроразметка Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Header>
                        <Title>Автозапчасти</Title>
                        <Subtitle>
                            Оригинальные и контрактные запчасти из Японии
                        </Subtitle>
                    </Header>

                    {/* ПОИСК */}
                    <form onSubmit={handleSearch} role="search" aria-label="Поиск автозапчастей">
                        <SearchWrapper>
                            <input
                                type="text"
                                aria-label="Поисковый запрос"
                                placeholder="Поиск по VIN, артикулу или названию..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                            <Button type="submit" size="sm">
                                Найти
                            </Button>
                        </SearchWrapper>
                    </form>

                    {/* КАТЕГОРИИ */}
                    <CategoriesWrapper aria-label="Фильтр по категориям запчастей">
                        {CATEGORIES.map((cat) => (
                            <CategoryButton
                                key={cat}
                                type="button"
                                active={activeCategory === cat}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </CategoryButton>
                        ))}
                    </CategoriesWrapper>

                    {/* РЕЗУЛЬТАТЫ */}
                    <AnimatePresence>
                        {filteredParts.length === 0 ? (
                            <EmptyState>
                                <h2>Ничего не найдено</h2>
                                <p>Попробуйте изменить поисковый запрос или выберите другую категорию</p>
                            </EmptyState>
                        ) : (
                            <PartsGrid>
                                {filteredParts.map((part) => (
                                    <motion.div
                                        key={part.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <PartCard as="article">
                                            <img
                                                className="image"
                                                src={part.img}
                                                alt={`Запчасть ${part.name}`}
                                                loading="lazy"
                                            />
                                            <div className="info">
                                                <h2 className="name">{part.name}</h2>
                                                <div className="details">
                                                    {part.article && <span>Арт.: {part.article}</span>}
                                                    {part.vin && <span>VIN: {part.vin}</span>}
                                                </div>
                                                <div>
                                                    <span className={`status ${part.status}`}>
                                                        {part.status === 'in-stock' && 'В наличии'}
                                                        {part.status === 'on-order' && 'Под заказ'}
                                                        {part.status === 'sold' && 'Продано'}
                                                    </span>
                                                </div>
                                                <div className="price">{part.price}</div>
                                                <Button
                                                    variant="secondary"
                                                    size="sm"
                                                    style={{ width: '100%' }}
                                                    disabled={part.status === 'sold'}
                                                >
                                                    {part.status === 'sold' ? 'Нет в наличии' : 'Заказать'}
                                                </Button>
                                            </div>
                                        </PartCard>
                                    </motion.div>
                                ))}
                            </PartsGrid>
                        )}
                    </AnimatePresence>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Parts;