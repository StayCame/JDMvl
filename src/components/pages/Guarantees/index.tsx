import styled from 'styled-components';
import { Helmet } from 'react-helmet-async'; // Подключаем Helmet для SEO-тегов
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Item = styled(GlassCard)`
  padding: 28px 24px;
  /* Заменено с h3 на h2 для корректной SEO-иерархии (H1 -> H2) */
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
  .icon {
    font-size: 32px;
    margin-bottom: 12px;
    color: ${theme.colors.accent.primary};
  }
`;

const Guarantees = () => {
    // Настройки SEO для текущей страницы
    const seo = {
        title: 'Гарантии и обязательства | JDMVL',
        description: 'Что мы гарантируем клиентам. Юридическая чистота, прозрачные цены, защита данных при импорте авто из Японии во Владивосток.',
        pageUrl: 'https://jdmvl.ru/guarantees', // Укажи свой реальный URL
    };

    // Структурированные данные Schema.org для поисковых систем
    const schemaData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        name: seo.title,
        description: seo.description,
        url: seo.pageUrl,
        publisher: {
            '@type': 'Organization',
            name: 'JDMVL',
            areaServed: 'Владивосток, Россия',
        },
    };

    const items = [
        {
            icon: '🛡️',
            title: 'Юридическая чистота',
            desc: 'Мы проверяем авто по VIN, аукционным листам и базам ДТП. Все документы проходят проверку перед оплатой.',
        },
        {
            icon: '🔧',
            title: 'Техническая проверка',
            desc: 'Перед отправкой авто проходит диагностику в Японии. Вы получаете отчёт о состоянии кузова, двигателя и ходовой.',
        },
        {
            icon: '📄',
            title: 'Документальное сопровождение',
            desc: 'СБКТС, ЭПТС, диагностическая карта и все сопутствующие бумаги — под ключ. Мы отвечаем за их корректность.',
        },
        {
            icon: '💰',
            title: 'Прозрачное ценообразование',
            desc: 'Никаких скрытых платежей. Стоимость фиксируется в договоре до начала работ. Вы всегда знаете, за что платите.',
        },
        {
            icon: '⏳',
            title: 'Гарантия сроков',
            desc: 'Мы даём гарантию на сроки доставки и оформления. При задержках по нашей вине — компенсируем затраты.',
        },
        {
            icon: '🔒',
            title: 'Конфиденциальность',
            desc: 'Ваши персональные данные и информация о заказе защищены. Мы не передаём их третьим лицам.',
        },
    ];

    return (
        <>
            <Helmet>
                {/* Основные мета-теги */}
                <title>{seo.title}</title>
                <meta name="description" content={seo.description} />
                <link rel="canonical" href={seo.pageUrl} />

                {/* Open Graph (для превью в Telegram, WhatsApp, VK) */}
                <meta property="og:title" content={seo.title} />
                <meta property="og:description" content={seo.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={seo.pageUrl} />

                {/* Микроразметка в формате JSON-LD */}
                <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Гарантии и обязательства</Title>
                    <Subtitle>Что мы гарантируем каждому клиенту</Subtitle>

                    <Grid>
                        {items.map((item, idx) => (
                            <Item key={idx}>
                                <div className="icon" aria-hidden="true">
                                    {item.icon}
                                </div>
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </Item>
                        ))}
                    </Grid>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Guarantees;