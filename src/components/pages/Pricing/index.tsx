import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
// Заменили div на main для правильной семантической структуры
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

const Card = styled(GlassCard)`
  padding: 28px 24px;
  margin-bottom: 24px;

  /* Изменили h3 на h2 для соблюдения иерархии заголовков (H1 -> H2) */
  h2 {
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 8px;
    color: ${theme.colors.text.primary};
    font-weight: 600;
  }
  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.7;
    font-size: ${theme.fontSizes.md};
  }
  .highlight {
    color: ${theme.colors.accent.primary};
    font-weight: 600;
  }
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 16px 0;

  th,
  td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid ${theme.colors.glass.border};
  }

  th {
    color: ${theme.colors.text.secondary};
    font-weight: 600;
    font-size: ${theme.fontSizes.sm};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    color: ${theme.colors.text.primary};
    font-size: ${theme.fontSizes.md};
  }

  tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.sm};
    th, td {
      padding: 8px 10px;
    }
  }
`;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Pricing = () => {
    // Структурированные данные Schema.org (Тип Service для услуг и цен)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': 'Импорт авто из Японии — прозрачный расчёт стоимости',
        'description': 'Подробный расчёт стоимости привоза автомобиля из Японии: аукционная цена, таможенные пошлины, логистика и комиссия.',
        'provider': {
            '@type': 'Organization',
            'name': 'JDMVL',
            'url': 'https://staycame.github.io/JDMvl/'
        },
        'areaServed': 'RU',
        'hasOfferCatalog': {
            '@type': 'OfferCatalog',
            'name': 'Пример сметы расчёта стоимости',
            'itemListElement': [
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Комиссия за подбор и оформление'
                    },
                    'price': '80000',
                    'priceCurrency': 'RUB'
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'Доставка морем во Владивосток'
                    },
                    'price': '250000',
                    'priceCurrency': 'RUB'
                },
                {
                    '@type': 'Offer',
                    'itemOffered': {
                        '@type': 'Service',
                        'name': 'СБКТС / ЭПТС'
                    },
                    'price': '50000',
                    'priceCurrency': 'RUB'
                }
            ]
        }
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Прозрачность цен — расчёт стоимости авто из Японии | JDMVL</title>
                <meta
                    name="description"
                    content="Из чего складывается стоимость автомобиля под ключ. Прозрачный расчёт затрат, аукционная стоимость, пошлины, доставка и комиссия."
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/pricing" />

                {/* Open Graph */}
                <meta property="og:title" content="Прозрачность цен — расчёт стоимости авто из Японии | JDMVL" />
                <meta
                    property="og:description"
                    content="Из чего складывается стоимость автомобиля под ключ. Прозрачный расчёт затрат, аукционная стоимость, пошлины, доставка и комиссия."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/pricing" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Прозрачность цен</Title>
                    <Subtitle>Из чего складывается стоимость автомобиля под ключ</Subtitle>

                    <Card as="section">
                        <h2>💰 Структура цены</h2>
                        <p>
                            Мы работаем по фиксированной смете. В договоре прописаны все расходы, и мы не меняем их без согласования.
                            Никаких скрытых комиссий и неожиданных доплат.
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>📊 Пример расчёта (Toyota Crown 2020)</h2>
                        <Table aria-label="Пример расчета стоимости автомобиля Toyota Crown 2020 года">
                            <thead>
                                <tr>
                                    <th scope="col">Статья</th>
                                    <th scope="col">Сумма</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Цена авто на аукционе (¥)</td>
                                    <td>2 800 000 ¥ (~1 680 000 ₽)</td>
                                </tr>
                                <tr>
                                    <td>Доставка морем</td>
                                    <td>250 000 ₽</td>
                                </tr>
                                <tr>
                                    <td>Таможенные пошлины</td>
                                    <td>350 000 ₽</td>
                                </tr>
                                <tr>
                                    <td>СБКТС / ЭПТС</td>
                                    <td>50 000 ₽</td>
                                </tr>
                                <tr>
                                    <td>Комиссия за подбор</td>
                                    <td>80 000 ₽</td>
                                </tr>
                                <tr style={{ borderTop: '2px solid #DC143C' }}>
                                    <td><strong>Итого под ключ</strong></td>
                                    <td><strong>≈ 4 200 000 ₽</strong></td>
                                </tr>
                            </tbody>
                        </Table>
                        <p style={{ color: theme.colors.text.secondary, fontSize: theme.fontSizes.sm, marginTop: '12px' }}>
                            * Расчёт приблизительный. Точную стоимость мы фиксируем в договоре до начала работ.
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>🧾 Дополнительные услуги</h2>
                        <p>
                            Все дополнительные услуги (усиленная диагностика, доставка по России, помощь с постановкой на учёт)
                            оплачиваются отдельно и согласовываются заранее.
                        </p>
                    </Card>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Pricing;