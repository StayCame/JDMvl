import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Container from '../../common/Container';
import Button from '../../common/Button';
import GlassCard from '../../common/GlassCard';
import { theme } from '../../../styles/theme';
import { useFavorites } from '../../../hooks/useFavorites';

// ===== СТИЛИ =====
const PageWrapper = styled.div`
  padding: 120px 0 60px;
  min-height: 60vh;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 100px 0 40px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 80px 0 30px;
  }
`;

const BackLink = styled.a`
  display: inline-block;
  color: ${theme.colors.text.secondary};
  margin-bottom: 24px;
  cursor: pointer;
  transition: color ${theme.transitions.default};

  &:hover {
    color: ${theme.colors.text.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 16px;
  }
`;

const TwoColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 24px;
  }
`;

// ===== ГАЛЕРЕЯ =====
const GalleryWrapper = styled.div`
  .main-image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: ${theme.borderRadius.lg};
    margin-bottom: 16px;
    background: ${theme.colors.background.card};

    @media (max-width: ${theme.breakpoints.sm}) {
      border-radius: ${theme.borderRadius.md};
      margin-bottom: 12px;
    }
  }

  .thumbnails {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;

    img {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: cover;
      border-radius: ${theme.borderRadius.md};
      cursor: pointer;
      transition: all ${theme.transitions.default};
      border: 2px solid transparent;

      &:hover {
        border-color: ${theme.colors.accent.primary};
        transform: scale(1.02);
      }

      &.active {
        border-color: ${theme.colors.accent.primary};
      }
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      grid-template-columns: repeat(3, 1fr);
      gap: 8px;

      img {
        border-radius: ${theme.borderRadius.sm};
      }
    }
  }
`;

// ===== АУКЦИОННЫЙ ЛИСТ =====
const AuctionSheet = styled(GlassCard)`
  margin: 24px 0;
  padding: 24px;
  background: ${theme.colors.background.card};

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 16px 0;
    padding: 16px;
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 12px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
    }
  }

  .document {
    background: rgba(255, 255, 255, 0.03);
    padding: 16px;
    border-radius: ${theme.borderRadius.md};
    border: 1px solid ${theme.colors.glass.border};
    font-family: monospace;
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.text.secondary};
    line-height: 1.8;
    white-space: pre-wrap;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 12px;
      font-size: ${theme.fontSizes.xs};
    }
  }
`;

// ===== ХАРАКТЕРИСТИКИ =====
const SpecsTable = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px 32px;
  margin: 16px 0 24px;

  .spec-item {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid ${theme.colors.glass.border};

    .label {
      color: ${theme.colors.text.secondary};
    }

    .value {
      font-weight: 500;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 4px;
    margin: 12px 0 16px;

    .spec-item {
      padding: 6px 0;
      font-size: ${theme.fontSizes.sm};
    }
  }
`;

// ===== КАЛЬКУЛЯТОР =====
const Calculator = styled(GlassCard)`
  margin: 24px 0;
  padding: 24px;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 16px 0;
    padding: 16px;
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 16px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 12px;
    }
  }

  .calc-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid ${theme.colors.glass.border};

    .label {
      color: ${theme.colors.text.secondary};
    }

    .value {
      font-weight: 500;
    }

    .total {
      color: ${theme.colors.accent.primary};
      font-size: ${theme.fontSizes.xl};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 6px 0;
      font-size: ${theme.fontSizes.sm};
    }
  }

  .total-row {
    margin-top: 12px;
    padding-top: 12px;
    border-top: 2px solid ${theme.colors.accent.primary};
    font-size: ${theme.fontSizes.xl};

    .value {
      color: ${theme.colors.accent.primary};
      font-weight: 700;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      margin-top: 8px;
      padding-top: 8px;
      font-size: ${theme.fontSizes.lg};
    }
  }
`;

const Form = styled(GlassCard)`
  margin: 24px 0;
  padding: 24px;

  @media (max-width: ${theme.breakpoints.sm}) {
    margin: 16px 0;
    padding: 16px;
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 16px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.md};
      margin-bottom: 12px;
    }
  }

  .form-row {
    margin-bottom: 16px;

    @media (max-width: ${theme.breakpoints.sm}) {
      margin-bottom: 12px;
    }

    label {
      display: block;
      color: ${theme.colors.text.secondary};
      font-size: ${theme.fontSizes.sm};
      margin-bottom: 4px;

      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.fontSizes.xs};
      }
    }

    input,
    textarea {
      width: 100%;
      padding: 10px 14px;
      border-radius: ${theme.borderRadius.md};
      border: 1px solid ${theme.colors.glass.border};
      background: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.text.primary};
      font-size: ${theme.fontSizes.md};
      outline: none;
      resize: vertical;
      font-family: inherit;

      &:focus {
        border-color: ${theme.colors.accent.primary};
      }

      @media (max-width: ${theme.breakpoints.sm}) {
        padding: 8px 12px;
        font-size: ${theme.fontSizes.sm};
      }
    }

    textarea {
      min-height: 80px;

      @media (max-width: ${theme.breakpoints.sm}) {
        min-height: 60px;
      }
    }
  }
`;

// ===== ЗАГОЛОВОК С СЕРДЕЧКОМ =====
const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;

  h1 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['3xl']};
    margin: 0;
    line-height: 1.2;
  }

  .favorite-btn {
    background: none;
    border: none;
    font-size: 32px;
    cursor: pointer;
    transition: transform 0.3s, color 0.3s;
    color: ${theme.colors.text.secondary};
    padding: 4px;
    line-height: 1;

    &:hover {
      transform: scale(1.2);
    }

    &.active {
      color: #DC143C;
      transform: scale(1.1);
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    h1 {
      font-size: ${theme.fontSizes['2xl']};
    }

    .favorite-btn {
      font-size: 28px;
    }
  }
`;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const CarDetail = () => {
  const { id } = useParams();
  const [activeImage, setActiveImage] = useState(0);
  const { toggleFavorite, isFavorite } = useFavorites();

  // Временные данные (заглушка)
  const car = {
    id: id || '1',
    name: 'Toyota Crown',
    year: 2020,
    grade: '4.5 BB',
    price: '2 800 000 ¥',
    img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80',
    ],
    specs: [
      { label: 'Марка', value: 'Toyota' },
      { label: 'Модель', value: 'Crown' },
      { label: 'Год', value: '2020' },
      { label: 'Пробег', value: '45 000 км' },
      { label: 'Двигатель', value: '2.5 L Hybrid' },
      { label: 'Коробка', value: 'Автомат' },
      { label: 'Привод', value: 'Задний' },
      { label: 'Оценка', value: '4.5 BB' },
    ],
    auctionSheet: `Аукционный лист № A-2024-001
Лот: 12345
Марка: TOYOTA
Модель: CROWN
Год: 2020
Пробег: 45 000 км
Оценка: 4.5 BB
Комментарий: Отличное состояние, без ДТП.`,
  };

  const carId = parseInt(id || '1', 10);
  const isFav = isFavorite(carId);

  // Данные для SEO
  const pageTitle = `${car.name} — ${car.year} год, ${car.grade} | JDMVL`;
  const pageDescription = `${car.name}, ${car.year} года, оценка ${car.grade}. Пробег ${car.specs.find(s => s.label === 'Пробег')?.value || 'не указан'}, двигатель ${car.specs.find(s => s.label === 'Двигатель')?.value || ''}. Купить авто из Японии под ключ во Владивостоке.`;
  const canonicalUrl = `https://staycame.github.io/JDMvl/catalog/${car.id}`;

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${car.name}, JDM, японский импорт, аукцион, ${car.year}, Владивосток, купить авто`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={car.images[0]} />
        <meta property="og:locale" content="ru_RU" />

        {/* Микроразметка для товара */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "${car.name}",
              "description": "${pageDescription.replace(/"/g, '\\"')}",
              "image": "${car.images[0]}",
              "brand": {
                "@type": "Brand",
                "name": "${car.specs.find(s => s.label === 'Марка')?.value || ''}"
              },
              "model": "${car.specs.find(s => s.label === 'Модель')?.value || ''}",
              "year": ${car.year},
              "vehicleEngine": {
                "@type": "EngineSpecification",
                "engineDisplacement": "${car.specs.find(s => s.label === 'Двигатель')?.value || ''}"
              },
              "mileageFromOdometer": {
                "@type": "QuantitativeValue",
                "value": "${car.specs.find(s => s.label === 'Пробег')?.value || ''}",
                "unitCode": "KMT"
              },
              "offers": {
                "@type": "Offer",
                "price": "${car.price.replace(/[^0-9]/g, '')}",
                "priceCurrency": "JPY",
                "availability": "https://schema.org/InStock",
                "seller": {
                  "@type": "Organization",
                  "name": "JDMVL"
                }
              }
            }
          `}
        </script>
      </Helmet>

      <PageWrapper>
        <Container>
          <BackLink onClick={() => window.history.back()}>← Назад к списку</BackLink>

          <TwoColumns>
            {/* ЛЕВАЯ КОЛОНКА — ГАЛЕРЕЯ */}
            <GalleryWrapper>
              <img
                className="main-image"
                src={car.images[activeImage]}
                alt={car.name}
              />
              <div className="thumbnails">
                {car.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${car.name} — фото ${index + 1}`}
                    className={index === activeImage ? 'active' : ''}
                    onClick={() => setActiveImage(index)}
                  />
                ))}
              </div>
            </GalleryWrapper>

            {/* ПРАВАЯ КОЛОНКА — ИНФОРМАЦИЯ */}
            <div>
              <TitleRow>
                <h1>{car.name}</h1>
                <button
                  className={`favorite-btn ${isFav ? 'active' : ''}`}
                  onClick={() => toggleFavorite(carId)}
                  aria-label={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
                >
                  {isFav ? '❤️' : '🤍'}
                </button>
              </TitleRow>

              <div style={{ display: 'flex', gap: '16px', margin: '8px 0 16px', flexWrap: 'wrap' }}>
                <span style={{ color: theme.colors.text.secondary }}>{car.year}</span>
                <span style={{ color: theme.colors.accent.primary }}>Оценка: {car.grade}</span>
                <span style={{ fontWeight: 600, fontSize: theme.fontSizes.xl }}>
                  {car.price}
                </span>
              </div>

              {/* ХАРАКТЕРИСТИКИ */}
              <SpecsTable>
                {car.specs.map((spec, idx) => (
                  <div key={idx} className="spec-item">
                    <span className="label">{spec.label}</span>
                    <span className="value">{spec.value}</span>
                  </div>
                ))}
              </SpecsTable>

              {/* АУКЦИОННЫЙ ЛИСТ */}
              <AuctionSheet>
                <h3>📄 Аукционный лист</h3>
                <div className="document">{car.auctionSheet}</div>
                <Button variant="outline" size="sm" style={{ marginTop: '12px' }}>
                  Скачать оригинал PDF
                </Button>
              </AuctionSheet>

              {/* КАЛЬКУЛЯТОР СТОИМОСТИ */}
              <Calculator>
                <h3>💰 Калькулятор полной стоимости</h3>
                <div className="calc-row">
                  <span className="label">Цена авто (в Японии)</span>
                  <span className="value">{car.price}</span>
                </div>
                <div className="calc-row">
                  <span className="label">Доставка морем</span>
                  <span className="value">250 000 ₽</span>
                </div>
                <div className="calc-row">
                  <span className="label">Таможенные пошлины</span>
                  <span className="value">350 000 ₽</span>
                </div>
                <div className="calc-row">
                  <span className="label">СБКТС / ЭПТС</span>
                  <span className="value">50 000 ₽</span>
                </div>
                <div className="total-row">
                  <span>Итого во Владивостоке</span>
                  <span className="value">≈ 4 200 000 ₽</span>
                </div>
                <Button style={{ marginTop: '16px', width: '100%' }}>
                  Оставить заявку
                </Button>
              </Calculator>

              {/* ФОРМА ЗАЯВКИ */}
              <Form>
                <h3>📩 Хотите купить этот автомобиль?</h3>
                <p style={{ color: theme.colors.text.secondary, marginBottom: '16px' }}>
                  Оставьте заявку, мы проверим его для вас и свяжемся в течение часа.
                </p>
                <div className="form-row">
                  <label>Ваше имя</label>
                  <input type="text" placeholder="Иван Иванов" />
                </div>
                <div className="form-row">
                  <label>Телефон</label>
                  <input type="tel" placeholder="+7 (900) 123-45-67" />
                </div>
                <div className="form-row">
                  <label>Комментарий</label>
                  <textarea placeholder="Дополнительные пожелания..." />
                </div>
                <Button style={{ width: '100%' }}>Отправить заявку</Button>
              </Form>
            </div>
          </TwoColumns>
        </Container>
      </PageWrapper>
    </>
  );
};

export default CarDetail;