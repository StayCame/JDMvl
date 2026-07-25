import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
// Заменили div на main для соблюдения семантической структуры
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

const Title = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  margin-bottom: 48px;
`;

// Заменили div на нумерованный список ol для правильной семантики пошагового процесса
const Timeline = styled.ol`
  position: relative;
  padding-left: 40px;
  margin: 0;
  list-style: none;

  &::before {
    content: '';
    position: absolute;
    left: 14px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${theme.colors.accent.primary};
    opacity: 0.3;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: 24px;
  }
`;

const Step = styled(motion.li)`
  position: relative;
  margin-bottom: 32px;
  padding-left: 20px;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: ${theme.colors.accent.primary};
    border: 3px solid ${theme.colors.background.primary};
    box-shadow: 0 0 0 2px ${theme.colors.accent.primary};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding-left: 12px;
    &::before {
      left: -18px;
      width: 12px;
      height: 12px;
    }
  }
`;

const StepCard = styled(GlassCard)`
  padding: 20px 24px;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(6px);
  }

  /* Повысили уровень заголовка до h2 для соблюдения иерархии (H1 -> H2) */
  h2 {
    font-size: ${theme.fontSizes.lg};
    color: ${theme.colors.text.primary};
    margin-bottom: 4px;
    font-weight: 600;
  }

  .meta {
    font-size: ${theme.fontSizes.sm};
    color: ${theme.colors.text.secondary};
    margin-bottom: 6px;
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.md};
    line-height: 1.6;
  }
`;

const steps = [
    { title: 'Поиск авто', meta: '1–7 дней', desc: 'Выбор автомобиля на аукционе или через наш каталог. Подбор под ваш бюджет и предпочтения.' },
    { title: 'Выкуп и диагностика', meta: '1–3 дня', desc: 'Покупка лота, проверка в Японии, получение аукционного листа.' },
    { title: 'Отправка морем', meta: '10–14 дней', desc: 'Контейнерная перевозка из Японии во Владивосток. Страхование и отслеживание.' },
    { title: 'Таможенное оформление', meta: '3–7 дней', desc: 'Растаможка, подача документов, получение СБКТС и ЭПТС.' },
    { title: 'Выдача авто', meta: '1 день', desc: 'Вы забираете автомобиль с нашего склада или мы доставляем его по России.' }
];

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const ProcessMap = () => {
    // Микроразметка Schema.org (Тип HowTo для пошаговой временной шкалы)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Карта процесса покупки авто из Японии',
        'description': 'Наглядная временная шкала и сроки всех этапов покупки и доставки автомобиля из Японии.',
        'step': steps.map((step, idx) => ({
            '@type': 'HowToStep',
            'position': idx + 1,
            'name': step.title,
            'text': `${step.desc} (Сроки: ${step.meta})`
        }))
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Карта процесса — этапы и сроки покупки авто из Японии | JDMVL</title>
                <meta
                    name="description"
                    content="Наглядная временная шкала и сроки всех этапов привоза автомобиля из Японии: от подбора и аукциона до таможни и получения."
                />
                <link rel="canonical" href="https://staycame.github.io/gletabrow-/process-map" />

                {/* Open Graph */}
                <meta property="og:title" content="Карта процесса — этапы и сроки покупки авто из Японии | JDMVL" />
                <meta
                    property="og:description"
                    content="Наглядная временная шкала и сроки всех этапов привоза автомобиля из Японии: от подбора и аукциона до таможни и получения."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/gletabrow-/process-map" />
                <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Карта процесса</Title>
                    <Subtitle>Наглядная временная шкала всех этапов покупки</Subtitle>

                    <Timeline>
                        {steps.map((step, idx) => (
                            <Step
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <StepCard>
                                    <h2>{step.title}</h2>
                                    <div className="meta">⏳ {step.meta}</div>
                                    <p>{step.desc}</p>
                                </StepCard>
                            </Step>
                        ))}
                    </Timeline>
                </Container>
            </PageWrapper>
        </>
    );
};

export default ProcessMap;