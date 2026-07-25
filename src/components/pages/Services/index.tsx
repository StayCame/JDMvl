import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  max-width: 600px;
  margin-bottom: 48px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 24px;
  }
`;

// ===== АККОРДЕОН =====
const AccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 12px;
  }
`;

const AccordionItem = styled(GlassCard)`
  padding: 0;
  overflow: hidden;
  transition: all ${theme.transitions.default};

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const AccordionHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: transparent;
  cursor: pointer;
  user-select: none;

  .icon {
    font-size: 28px;
    width: 40px;
    text-align: center;
    color: ${theme.colors.accent.primary};
    flex-shrink: 0;
  }

  /* Заменили span на h2 для создания правильной иерархии заголовков */
  h2.title {
    font-weight: 600;
    font-size: ${theme.fontSizes.lg};
    flex: 1;
    margin: 0;
    color: ${theme.colors.text.primary};
  }

  .arrow {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.lg};
    transition: transform 0.3s ease;
  }

  .arrow.open {
    transform: rotate(180deg);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 16px;
    gap: 12px;

    .icon {
      font-size: 24px;
      width: 32px;
    }

    h2.title {
      font-size: ${theme.fontSizes.md};
    }

    .arrow {
      font-size: ${theme.fontSizes.md};
    }
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 24px 24px 80px;
  color: ${theme.colors.text.secondary};
  line-height: 1.8;
  font-size: ${theme.fontSizes.md};

  ul {
    margin-top: 8px;
    padding-left: 20px;
    list-style: none;

    li {
      position: relative;
      padding-left: 20px;
      margin-bottom: 4px;

      &::before {
        content: '—';
        position: absolute;
        left: 0;
        color: ${theme.colors.accent.primary};
      }
    }
  }

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 0 16px 20px 16px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 12px 16px 12px;
    font-size: ${theme.fontSizes.sm};
    line-height: 1.6;

    ul {
      padding-left: 16px;
      margin-top: 4px;

      li {
        padding-left: 16px;
        font-size: ${theme.fontSizes.sm};
      }
    }
  }
`;

// ===== ДАННЫЕ =====
const servicesData = [
    {
        id: 1,
        icon: '🔍',
        title: 'Подбор авто на аукционе',
        plainText: 'Анализ аукционных листов, проверка истории автомобиля, состояния кузова и пробега. Помощь в совершении правильной ставки.',
        content: (
            <>
                Мы анализируем аукционные листы, проверяем историю автомобиля, состояние кузова и пробег.
                Помогаем сделать правильную ставку, чтобы вы получили лучший вариант по цене.
                <ul>
                    <li>Анализ аукционного листа</li>
                    <li>Проверка по VIN</li>
                    <li>Стратегия ставок</li>
                    <li>Перевод документов[cite: 8]</li>
                </ul>
            </>
        ),
    },
    {
        id: 2,
        icon: '🚢',
        title: 'Доставка морем',
        plainText: 'Отправка автомобиля из Японии во Владивосток в контейнере. Страхование, контроль погрузки и таможенное оформление. Срок доставки — 10–14 дней.',
        content: (
            <>
                Отправка автомобиля из Японии во Владивосток в контейнере. Полное сопровождение:
                страхование, контроль погрузки, таможенное оформление. Срок доставки — 10–14 дней[cite: 8].
                <ul>
                    <li>Контейнерные перевозки[cite: 8]</li>
                    <li>Страхование груза[cite: 8]</li>
                    <li>Отслеживание статуса[cite: 8]</li>
                    <li>Разгрузка во Владивостоке[cite: 8]</li>
                </ul>
            </>
        ),
    },
    {
        id: 3,
        icon: '📄',
        title: 'Таможенное оформление',
        plainText: 'Полное сопровождение таможенных процедур. Расчёт пошлин и сборов, подготовка документов и декларирование.',
        content: (
            <>
                Полное сопровождение таможенных процедур. Расчёт всех пошлин и сборов,
                подготовка документов, декларирование. Работаем с любыми типами автомобилей[cite: 8].
                <ul>
                    <li>Расчёт таможенных платежей[cite: 8]</li>
                    <li>Подготовка деклараций[cite: 8]</li>
                    <li>СБКТС и ЭПТС под ключ[cite: 8]</li>
                    <li>Консультация на каждом этапе[cite: 8]</li>
                </ul>
            </>
        ),
    },
    {
        id: 4,
        icon: '🔧',
        title: 'Помощь с СБКТС и ЭПТС',
        plainText: 'Оформление СБКТС (Свидетельство о безопасности конструкции), ЭПТС (Электронный ПТС) и диагностической карты для постановки на учёт.',
        content: (
            <>
                Оформление всех необходимых документов для постановки на учёт:
                СБКТС (Свидетельство о безопасности конструкции), ЭПТС (Электронный ПТС),
                диагностическая карта[cite: 8].
                <ul>
                    <li>Оформление СБКТС[cite: 8]</li>
                    <li>ЭПТС — электронный паспорт[cite: 8]</li>
                    <li>Диагностическая карта[cite: 8]</li>
                    <li>Помощь с регистрацией[cite: 8]</li>
                </ul>
            </>
        ),
    },
];

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Services = () => {
    const [openId, setOpenId] = useState<number | null>(null);

    const toggle = (id: number) => {
        setOpenId(openId === id ? null : id);
    };

    // Структурированные данные Schema.org (Тип Service + FAQPage)
    const structuredData = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Service',
                'name': 'Услуги по привозу автомобилей из Японии',
                'description': 'Прямой доступ к японским аукционам, подбор авто, доставка морем во Владивосток, растаможка, получение СБКТС и ЭПТС.',
                'provider': {
                    '@type': 'Organization',
                    'name': 'JDMVL',
                    'url': 'https://staycame.github.io/gletabrow-/'
                },
                'areaServed': 'RU',
                'hasOfferCatalog': {
                    '@type': 'OfferCatalog',
                    'name': 'Каталог услуг по подбору и доставке авто',
                    'itemListElement': servicesData.map((s) => ({
                        '@type': 'Offer',
                        'itemOffered': {
                            '@type': 'Service',
                            'name': s.title,
                            'description': s.plainText
                        }
                    }))
                }
            },
            {
                '@type': 'FAQPage',
                'mainEntity': servicesData.map((s) => ({
                    '@type': 'Question',
                    'name': s.title,
                    'acceptedAnswer': {
                        '@type': 'Answer',
                        'text': s.plainText
                    }
                }))
            }
        ]
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Услуги и стоимость — подбор, доставка и растаможка авто из Японии | JDMVL</title>
                <meta
                    name="description"
                    content="Полный спектр услуг по привозу автомобилей с аукционов Японии: подбор, проверка, доставка морем, таможенное оформление, получение СБКТС и ЭПТС."
                />
                <link rel="canonical" href="https://staycame.github.io/gletabrow-/services" />

                {/* Open Graph */}
                <meta property="og:title" content="Услуги и стоимость — подбор, доставка и растаможка авто из Японии | JDMVL" />
                <meta
                    property="og:description"
                    content="Полный спектр услуг по привозу автомобилей с аукционов Японии: подбор, проверка, доставка морем, таможенное оформление, получение СБКТС и ЭПТС."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/gletabrow-/services" />
                <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Услуги и стоимость</Title>
                    <Subtitle>
                        Мы не продаём автомобили. Мы обеспечиваем вам прямой доступ к японским аукционам, беря на себя все риски, логистику и бюрократию[cite: 8].
                    </Subtitle>

                    <AccordionWrapper>
                        {servicesData.map((item) => {
                            const isOpen = openId === item.id;
                            return (
                                <AccordionItem as="section" key={item.id}>
                                    <AccordionHeader
                                        role="button"
                                        tabIndex={0}
                                        aria-expanded={isOpen}
                                        aria-controls={`service-content-${item.id}`}
                                        onClick={() => toggle(item.id)}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                toggle(item.id);
                                            }
                                        }}
                                    >
                                        <span className="icon" aria-hidden="true">{item.icon}</span>
                                        <h2 className="title">{item.title}</h2>
                                        <span className={`arrow ${isOpen ? 'open' : ''}`} aria-hidden="true">▾</span>
                                    </AccordionHeader>

                                    <AnimatePresence>
                                        {isOpen && (
                                            <AccordionContent
                                                id={`service-content-${item.id}`}
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            >
                                                {item.content}
                                            </AccordionContent>
                                        )}
                                    </AnimatePresence>
                                </AccordionItem>
                            );
                        })}
                    </AccordionWrapper>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Services;