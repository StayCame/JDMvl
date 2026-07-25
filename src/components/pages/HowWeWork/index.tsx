import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// Семантическая обёртка main вместо div
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
  max-width: 700px;
`;

// Превратили в нумерованный список ol для правильной семантики
const StepsWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 32px;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StepItem = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  gap: 24px;
  align-items: start;

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const StepNumber = styled.div`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['5xl']};
  font-weight: 700;
  color: ${theme.colors.accent.primary};
  opacity: 0.3;
  text-align: center;
`;

const StepContent = styled(GlassCard)`
  padding: 24px 28px;
  transition: transform 0.3s;

  &:hover {
    transform: translateX(6px);
  }

  /* Изменили h3 на h2 для соблюдения иерархии заголовков (H1 -> H2) */
  h2 {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 6px;
    color: ${theme.colors.text.primary};
    font-weight: 600;
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    font-size: ${theme.fontSizes.md};
  }
`;

const steps = [
    {
        id: 1,
        title: 'Выбор авто на аукционе',
        desc: 'Вы ищете подходящий автомобиль на японских аукционах или доверяете подбор нам. Мы помогаем анализировать аукционные листы, проверяем историю и состояние авто.'
    },
    {
        id: 2,
        title: 'Выкуп и проверка в Японии',
        desc: 'После вашего решения мы выкупаем лот, проводим полную диагностику на месте в Японии, проверяем кузов, двигатель, ходовую часть и все узлы.'
    },
    {
        id: 3,
        title: 'Доставка морем во Владивосток',
        desc: 'Отправляем автомобиль в контейнере или на пароме. Страхуем груз, отслеживаем маршрут, держим вас в курсе статуса доставки (10–14 дней).'
    },
    {
        id: 4,
        title: 'Таможенное оформление',
        desc: 'Готовим все документы: СБКТС, ЭПТС, диагностическую карту. Рассчитываем пошлины и сборы, помогаем растаможить авто и поставить на учёт.'
    },
    {
        id: 5,
        title: 'Получение автомобиля',
        desc: 'Вы забираете авто с нашего склада во Владивостоке или мы доставляем его по России. Передаём полный пакет документов и даём рекомендации по обслуживанию.'
    }
];

const HowWeWork = () => {
    // Специфическая микроразметка HowTo (Инструкция / Пошаговый процесс)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        'name': 'Как происходит процесс импорта авто из Японии во Владивосток',
        'description': 'От выбора авто до получения ключей. Прозрачный процесс импорта из Японии.',
        'step': steps.map((step) => ({
            '@type': 'HowToStep',
            'position': step.id,
            'name': step.title,
            'text': step.desc
        }))
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Как мы работаем — этапы импорта авто | JDMVL</title>
                <meta
                    name="description"
                    content="От выбора авто до получения ключей. Прозрачный процесс импорта из Японии."
                />
                <link rel="canonical" href="https://staycame.github.io/gletabrow-/how-we-work" />

                {/* Open Graph */}
                <meta property="og:title" content="Как мы работаем — этапы импорта авто | JDMVL" />
                <meta
                    property="og:description"
                    content="От выбора авто до получения ключей. Прозрачный процесс импорта из Японии."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/gletabrow-/how-we-work" />
                <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Как мы работаем</Title>
                    <Subtitle>Прозрачный и понятный процесс от выбора авто до ключей</Subtitle>

                    <StepsWrapper>
                        {steps.map((step, index) => (
                            <motion.li
                                key={step.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <StepItem>
                                    <StepNumber aria-hidden="true">0{step.id}</StepNumber>
                                    <StepContent>
                                        <h2>{step.title}</h2>
                                        <p>{step.desc}</p>
                                    </StepContent>
                                </StepItem>
                            </motion.li>
                        ))}
                    </StepsWrapper>
                </Container>
            </PageWrapper>
        </>
    );
};

export default HowWeWork;