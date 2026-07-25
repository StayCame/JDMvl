import { Link } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import Button from '../../common/Button';
import GlassCard from '../../common/GlassCard';
import { useFavorites } from '../../../hooks/useFavorites';

// ===== СТИЛИ =====
const PageWrapper = styled.div`
  padding-top: 80px;

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-top: 70px;
  }
`;

const Header = styled.div`
  padding: 40px 0 20px;
  border-bottom: 1px solid ${theme.colors.glass.border};
  margin-bottom: 32px;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 30px 0 16px;
    margin-bottom: 24px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 0 12px;
    margin-bottom: 20px;
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

// ===== ФИЛЬТРЫ =====
const FiltersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: ${theme.colors.background.card};
  border-radius: ${theme.borderRadius.lg};
  border: 1px solid ${theme.colors.glass.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    margin-bottom: 24px;
  }
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 140px;

  label {
    font-size: ${theme.fontSizes.xs};
    color: ${theme.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  select,
  input {
    padding: 8px 12px;
    border-radius: ${theme.borderRadius.sm};
    border: 1px solid ${theme.colors.glass.border};
    background: rgba(255, 255, 255, 0.05);
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.sm};
    outline: none;

    &:focus {
      border-color: ${theme.colors.accent.primary};
    }
  }

  input[type="number"] {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    min-width: unset;
  }
`;

// ===== СЕТКА КАРТОЧЕК =====
const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 30px;
  }
`;

// ===== КАРТОЧКА АВТО =====
const CarCard = styled(GlassCard)`
  position: relative;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.hover};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;

    @media (max-width: ${theme.breakpoints.sm}) {
      height: 160px;
    }
  }

  .info {
    padding: 16px 20px 20px;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 12px 16px 16px;
    }
  }

  .title {
    font-weight: 600;
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 4px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
    }
  }

  .details {
    display: flex;
    gap: 16px;
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 8px;
    flex-wrap: wrap;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.xs};
      gap: 12px;
    }
  }

  .price {
    font-weight: 600;
    color: ${theme.colors.accent.primary};
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 12px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 8px;
    }
  }
`;

// ===== ПАГИНАЦИЯ =====
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 6px;
    margin-top: 24px;
  }
`;

const PageButton = styled.button<{ active?: boolean }>`
  padding: 8px 16px;
  border-radius: ${theme.borderRadius.sm};
  border: 1px solid ${({ active }) =>
        active ? theme.colors.accent.primary : theme.colors.glass.border};
  background: ${({ active }) =>
        active ? theme.colors.accent.primary : 'transparent'};
  color: ${({ active }) =>
        active ? '#fff' : theme.colors.text.secondary};
  cursor: pointer;
  transition: all ${theme.transitions.default};

  &:hover {
    border-color: ${theme.colors.accent.primary};
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 6px 12px;
    font-size: ${theme.fontSizes.sm};
  }
`;

// ===== СОСТОЯНИЯ =====
const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: ${theme.colors.text.secondary};
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${theme.colors.text.secondary};

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: 8px;
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 40px 16px;

    h3 {
      font-size: ${theme.fontSizes.xl};
    }
  }
`;

// ===== ДАННЫЕ (заглушка) =====
const MOCK_CARS = [
    {
        id: 1,
        name: 'Toyota Crown',
        year: 2020,
        mileage: '45 000 км',
        grade: '4.5 BB',
        price: '2 800 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '2.0L Turbo',
        drive: 'Задний',
    },
    {
        id: 2,
        name: 'Nissan Skyline',
        year: 2019,
        mileage: '32 000 км',
        grade: '4.0 B',
        price: '3 200 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '3.0L V6',
        drive: 'Полный',
    },
    {
        id: 3,
        name: 'Lexus LS',
        year: 2021,
        mileage: '18 000 км',
        grade: '5.0 A',
        price: '5 500 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '3.5L V6',
        drive: 'Задний',
    },
    {
        id: 4,
        name: 'Subaru WRX',
        year: 2018,
        mileage: '56 000 км',
        grade: '4.0 B',
        price: '2 100 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '2.5L Turbo',
        drive: 'Полный',
    },
    {
        id: 5,
        name: 'Toyota Supra',
        year: 2022,
        mileage: '12 000 км',
        grade: '4.5 A',
        price: '4 800 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '3.0L V6',
        drive: 'Задний',
    },
    {
        id: 6,
        name: 'Mitsubishi Lancer Evo',
        year: 2017,
        mileage: '68 000 км',
        grade: '3.5 B',
        price: '1 900 000 ¥',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
        engine: '2.0L Turbo',
        drive: 'Полный',
    },
];

const ITEMS_PER_PAGE = 6;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Catalog = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [filters, setFilters] = useState({
        brand: '',
        yearFrom: '',
        yearTo: '',
        priceFrom: '',
        priceTo: '',
        grade: '',
        drive: '',
    });
    const [isLoading] = useState(false);
    const { toggleFavorite, isFavorite } = useFavorites();

    const filteredCars = MOCK_CARS.filter((car) => {
        if (filters.brand && !car.name.toLowerCase().includes(filters.brand.toLowerCase())) return false;
        if (filters.yearFrom && car.year < Number(filters.yearFrom)) return false;
        if (filters.yearTo && car.year > Number(filters.yearTo)) return false;
        if (filters.grade && !car.grade.includes(filters.grade)) return false;
        return true;
    });

    const totalPages = Math.ceil(filteredCars.length / ITEMS_PER_PAGE);
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const currentCars = filteredCars.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilterChange = (key: string, value: string) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    const renderPagination = () => {
        const pages = [];
        for (let i = 1; i <= totalPages; i++) {
            pages.push(
                <PageButton key={i} active={i === currentPage} onClick={() => setCurrentPage(i)}>
                    {i}
                </PageButton>
            );
        }
        return pages;
    };

    // SEO-данные
    const pageTitle = 'Каталог автомобилей с японских аукционов | JDMVL';
    const pageDescription = 'Автомобили с японских аукционов во Владивостоке. Toyota, Nissan, Lexus, Subaru и другие JDM-модели. Доставка под ключ, честные цены.';
    const canonicalUrl = 'https://staycame.github.io/JDMvl/catalog';

    return (
        <>
            <Helmet>
                <title>{pageTitle}</title>
                <meta name="description" content={pageDescription} />
                <meta name="keywords" content="каталог авто, японские аукционы, JDM, Toyota, Nissan, Lexus, Subaru, Владивосток" />
                <link rel="canonical" href={canonicalUrl} />
                <meta property="og:title" content={pageTitle} />
                <meta property="og:description" content={pageDescription} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={canonicalUrl} />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />
                <meta property="og:locale" content="ru_RU" />

                {/* Микроразметка ItemList для списка автомобилей */}
                <script type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Автомобили с японских аукционов",
                            "description": "${pageDescription}",
                            "url": "${canonicalUrl}",
                            "numberOfItems": ${filteredCars.length},
                            "itemListElement": [
                                ${filteredCars.map((car, index) => `
                                    {
                                        "@type": "ListItem",
                                        "position": ${index + 1},
                                        "url": "https://staycame.github.io/JDMvl/catalog/${car.id}",
                                        "name": "${car.name} (${car.year})"
                                    }
                                `).join(',')}
                            ]
                        }
                    `}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Header>
                        <Title>Автомобили с японских аукционов</Title>
                        <Subtitle>
                            {filteredCars.length} автомобилей в каталоге
                        </Subtitle>
                    </Header>

                    {/* ФИЛЬТРЫ */}
                    <FiltersWrapper>
                        <FilterGroup>
                            <label>Марка / Модель</label>
                            <input
                                type="text"
                                placeholder="Например, Toyota"
                                value={filters.brand}
                                onChange={(e) => handleFilterChange('brand', e.target.value)}
                            />
                        </FilterGroup>

                        <FilterGroup>
                            <label>Год от</label>
                            <input
                                type="number"
                                placeholder="2015"
                                value={filters.yearFrom}
                                onChange={(e) => handleFilterChange('yearFrom', e.target.value)}
                            />
                        </FilterGroup>

                        <FilterGroup>
                            <label>Год до</label>
                            <input
                                type="number"
                                placeholder="2025"
                                value={filters.yearTo}
                                onChange={(e) => handleFilterChange('yearTo', e.target.value)}
                            />
                        </FilterGroup>

                        <FilterGroup>
                            <label>Оценка</label>
                            <select
                                value={filters.grade}
                                onChange={(e) => handleFilterChange('grade', e.target.value)}
                            >
                                <option value="">Любая</option>
                                <option value="5.0">5.0 A</option>
                                <option value="4.5">4.5</option>
                                <option value="4.0">4.0</option>
                                <option value="3.5">3.5</option>
                            </select>
                        </FilterGroup>
                    </FiltersWrapper>

                    {/* КАРТОЧКИ */}
                    {isLoading ? (
                        <LoadingWrapper>Загрузка...</LoadingWrapper>
                    ) : currentCars.length === 0 ? (
                        <EmptyState>
                            <h3>Ничего не найдено</h3>
                            <p>Попробуйте изменить параметры фильтрации</p>
                        </EmptyState>
                    ) : (
                        <>
                            <CarGrid>
                                <AnimatePresence>
                                    {currentCars.map((car) => (
                                        <motion.div
                                            key={car.id}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -20 }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <Link to={`/catalog/${car.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <CarCard>
                                                    <img src={car.img} alt={car.name} />
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            e.stopPropagation();
                                                            toggleFavorite(car.id);
                                                        }}
                                                        style={{
                                                            position: 'absolute',
                                                            top: '12px',
                                                            right: '12px',
                                                            background: 'none',
                                                            border: 'none',
                                                            cursor: 'pointer',
                                                            fontSize: '24px',
                                                            color: isFavorite(car.id) ? '#DC143C' : '#98989D',
                                                            transition: 'color 0.3s, transform 0.2s',
                                                            zIndex: 2,
                                                            transform: isFavorite(car.id) ? 'scale(1.1)' : 'scale(1)',
                                                            textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                                                        }}
                                                        aria-label={isFavorite(car.id) ? 'Убрать из избранного' : 'Добавить в избранное'}
                                                    >
                                                        {isFavorite(car.id) ? '❤️' : '🤍'}
                                                    </button>
                                                    <div className="info">
                                                        <div className="title">{car.name}</div>
                                                        <div className="details">
                                                            <span>{car.year}</span>
                                                            <span>{car.mileage}</span>
                                                            <span>Оценка: {car.grade}</span>
                                                        </div>
                                                        <div className="price">{car.price}</div>
                                                        <Button
                                                            variant="secondary"
                                                            size="sm"
                                                            style={{ width: '100%' }}
                                                        >
                                                            Подробнее
                                                        </Button>
                                                    </div>
                                                </CarCard>
                                            </Link>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </CarGrid>

                            {totalPages > 1 && (
                                <PaginationWrapper>{renderPagination()}</PaginationWrapper>
                            )}
                        </>
                    )}
                </Container>
            </PageWrapper>
        </>
    );
};

export default Catalog;