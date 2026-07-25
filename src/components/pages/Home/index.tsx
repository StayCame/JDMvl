import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import Button from '../../common/Button';
import GlassCard from '../../common/GlassCard';
import PriceCalculator from '../../common/PriceCalculator';

// ===== СТИЛИ =====

const Section = styled.section`
  padding: 80px 0;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 60px 0;
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: 0.04em;
  color: ${theme.colors.text.primary};

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto 48px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 32px;
  }
`;

// ===== HERO =====
const HeroWrapper = styled.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 20px 80px;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 100px 16px 60px;
    min-height: 80vh;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 10px;
`;

const HeroTitle = styled(motion.h1)`
  font-family: ${theme.fonts.heading};
  font-weight: 700;
  font-size: ${theme.fontSizes['5xl']};
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: ${theme.colors.accent.primary};
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto 40px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
    padding: 0 10px;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 12px;

    button {
      width: 100%;
      max-width: 300px;
    }
  }
`;

// ===== СТЕПЫ =====
const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const StepCard = styled(GlassCard)`
  text-align: center;
  padding: 32px 20px;

  .step-number {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['3xl']};
    font-weight: 700;
    color: ${theme.colors.accent.primary};
    opacity: 0.3;
    margin-bottom: 12px;
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 8px;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
  }
`;

// ===== СТАТИСТИКА =====
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const StatItem = styled(motion.div)`
  .number {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['5xl']};
    font-weight: 700;
    color: ${theme.colors.accent.primary};
    margin-bottom: 4px;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }

  .label {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.md};
  }
`;

// ===== АВТОМОБИЛИ =====
const CarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const CarCard = styled(GlassCard)`
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .info {
    padding: 16px 20px 20px;
  }

  .title {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};
    margin-bottom: 4px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 8px;
  }

  .price {
    font-weight: 600;
    color: ${theme.colors.accent.primary};
    font-size: ${theme.fontSizes.lg};
  }
`;

// ===== О КОМПАНИИ =====
const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;

    .image {
      order: -1;
    }
  }

  .text {
    h3 {
      font-size: ${theme.fontSizes['2xl']};
      margin-bottom: 16px;
    }

    p {
      color: ${theme.colors.text.secondary};
      line-height: 1.8;
    }
  }

  .image {
    img {
      width: 100%;
      border-radius: ${theme.borderRadius.xl};
      box-shadow: ${theme.shadows.card};
    }
  }
`;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Home = () => {
  const cars = [
    {
      id: 1,
      name: 'Toyota Crown',
      year: 2020,
      grade: '4.5 BB',
      price: '2 800 000 ¥',
      img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
      id: 2,
      name: 'Nissan Skyline',
      year: 2019,
      grade: '4.0 B',
      price: '3 200 000 ¥',
      img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
      id: 3,
      name: 'Lexus LS',
      year: 2021,
      grade: '5.0 A',
      price: '5 500 000 ¥',
      img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
    {
      id: 4,
      name: 'Subaru WRX',
      year: 2018,
      grade: '4.0 B',
      price: '2 100 000 ¥',
      img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80',
    },
  ];

  // Данные для микроразметки организации/автодилера (Schema.org)
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AutoDealer',
    'name': 'JDMVL',
    'description': 'Прямой импорт авто и запчастей из Японии во Владивосток. Доставка под ключ.',
    'url': 'https://staycame.github.io/gletabrow-/',
    'logo': 'https://staycame.github.io/gletabrow-/logo.png',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Владивосток',
      'addressCountry': 'RU'
    },
    'priceRange': '¥¥¥'
  };

  return (
    <main>
      {/* SEO Мета-теги и Микроразметка */}
      <Helmet>
        <title>JDMVL — Японский импорт авто и запчастей во Владивостоке</title>
        <meta
          name="description"
          content="Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток. Честные цены без скрытых комиссий."
        />
        <link rel="canonical" href="https://staycame.github.io/gletabrow-/" />

        {/* Open Graph */}
        <meta property="og:title" content="JDMVL — Японский импорт авто и запчастей во Владивостоке" />
        <meta
          property="og:description"
          content="Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staycame.github.io/gletabrow-/" />
        <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />

        {/* JSON-LD Schema.org */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* HERO SECTION */}
      <HeroWrapper>
        <video autoPlay loop muted playsInline>
          <source src="/video/vladivostok-night.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>

        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Япония. <br />
            <span>Безупречность.</span> Владивосток.
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Доставляем автомобили и запчасти с аукционов Японии под ключ. Честная цена без скрытых
            комиссий.
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button>Смотреть аукционные лоты</Button>
            <Button variant="outline">Консультация в WhatsApp</Button>
          </HeroButtons>
        </HeroContent>
      </HeroWrapper>

      {/* КАК МЫ РАБОТАЕМ */}
      <Section>
        <Container>
          <SectionTitle>Как мы работаем</SectionTitle>
          <SectionSubtitle>Четыре простых шага от выбора авто до получения ключей</SectionSubtitle>
          <StepsGrid>
            <StepCard as="article">
              <div className="step-number">01</div>
              <h3>Выбор на аукционе</h3>
              <p>Вы находите подходящий лот на японском аукционе</p>
            </StepCard>
            <StepCard as="article">
              <div className="step-number">02</div>
              <h3>Выкуп и проверка</h3>
              <p>Мы выкупаем автомобиль и проводим полную диагностику</p>
            </StepCard>
            <StepCard as="article">
              <div className="step-number">03</div>
              <h3>Доставка морем</h3>
              <p>Безопасная отправка во Владивосток в контейнере</p>
            </StepCard>
            <StepCard as="article">
              <div className="step-number">04</div>
              <h3>Таможня и выдача</h3>
              <p>Полное оформление документов, вы получаете авто</p>
            </StepCard>
          </StepsGrid>
        </Container>
      </Section>

      {/* ПРЕИМУЩЕСТВА */}
      <Section style={{ background: theme.colors.background.card }}>
        <Container>
          <StatsGrid>
            <StatItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="number">5000+</div>
              <div className="label">Доставленных авто</div>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="number">98%</div>
              <div className="label">Клиентов возвращаются</div>
            </StatItem>
            <StatItem
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="number">14 дней</div>
              <div className="label">Средний срок доставки</div>
            </StatItem>
          </StatsGrid>
        </Container>
      </Section>

      {/* ПРЯМОЙ ДОСТУП К АУКЦИОНАМ */}
      <Section>
        <Container>
          <SectionTitle>Прямой доступ к аукционам</SectionTitle>
          <SectionSubtitle>Актуальные лоты с японских аукционов</SectionSubtitle>
          <CarGrid>
            {cars.map((car) => (
              <CarCard key={car.id} as="article">
                <img
                  src={car.img}
                  alt={`${car.name} ${car.year} года с аукциона Японии`}
                  loading="lazy"
                />
                <div className="info">
                  <div className="title">{car.name}</div>
                  <div className="details">
                    <span>{car.year}</span>
                    <span>Оценка: {car.grade}</span>
                  </div>
                  <div className="price">{car.price}</div>
                  <Button
                    variant="secondary"
                    size="sm"
                    style={{ marginTop: '12px', width: '100%' }}
                  >
                    Подробнее
                  </Button>
                </div>
              </CarCard>
            ))}
          </CarGrid>
          <div style={{ textAlign: 'center' }}>
            <Button variant="outline">Смотреть все лоты</Button>
          </div>
        </Container>
      </Section>

      {/* КАЛЬКУЛЯТОР */}
      <Section style={{ background: theme.colors.background.card }}>
        <Container>
          <PriceCalculator />
        </Container>
      </Section>

      {/* О КОМПАНИИ */}
      <Section>
        <Container>
          <AboutGrid>
            <div className="text">
              <h3>Почему выбирают нас</h3>
              <p>
                Мы не продаём автомобили. Мы обеспечиваем вам прямой доступ к японским аукционам,
                беря на себя все риски, логистику и бюрократию. Ваша задача — выбрать, наша —
                доставить в идеальном состоянии.
              </p>
              <p style={{ marginTop: '16px' }}>
                Более 5000 довольных клиентов во Владивостоке и по всей России подтверждают нашу
                репутацию.
              </p>
            </div>
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80"
                alt="Склад и автостоянка JDMVL во Владивостоке"
                loading="lazy"
              />
            </div>
          </AboutGrid>
        </Container>
      </Section>
    </main>
  );
};

export default Home;