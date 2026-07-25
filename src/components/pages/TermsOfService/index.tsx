import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
// Заменили div на семантический тег main
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
  padding: 32px 28px;
  margin-bottom: 24px;

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xl};
    margin-bottom: 12px;
    color: ${theme.colors.text.primary};
  }

  p {
    color: ${theme.colors.text.secondary};
    line-height: 1.8;
    font-size: ${theme.fontSizes.md};
    margin-bottom: 16px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin-bottom: 16px;
    li {
      color: ${theme.colors.text.secondary};
      line-height: 1.8;
      font-size: ${theme.fontSizes.md};
      padding-left: 20px;
      position: relative;
      &::before {
        content: '—';
        position: absolute;
        left: 0;
        color: ${theme.colors.accent.primary};
      }
    }
  }
`;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const TermsOfService = () => {
    // Структурированные данные Schema.org (WebPage)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Пользовательское соглашение — JDMVL',
        'description': 'Пользовательское соглашение и условия использования сайта и сервисов компании JDMVL.',
        'url': 'https://staycame.github.io/JDMvl/terms-of-service'
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Пользовательское соглашение — условия использования | JDMVL</title>
                <meta
                    name="description"
                    content="Пользовательское соглашение и условия использования сервиса JDMVL: правила заказа, права и обязанности сторон, ответственность и интеллектуальная собственность."
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/terms-of-service" />

                {/* Open Graph */}
                <meta property="og:title" content="Пользовательское соглашение — условия использования | JDMVL" />
                <meta
                    property="og:description"
                    content="Пользовательское соглашение и условия использования сервиса JDMVL: правила заказа, права и обязанности сторон, ответственность и интеллектуальная собственность."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/terms-of-service" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Пользовательское соглашение</Title>
                    <Subtitle>Условия использования сайта JDMVL</Subtitle>

                    <Card as="section">
                        <h2>1. Общие положения</h2>
                        <p>
                            Настоящее Пользовательское соглашение регулирует отношения между JDMVL
                            и пользователями сайта. Используя сайт, вы автоматически соглашаетесь
                            с условиями данного соглашения.
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>2. Предмет соглашения</h2>
                        <p>
                            Сайт предоставляет информационные и сервисные услуги в области импорта
                            автомобилей из Японии. Содержание сайта носит информационный характер
                            и не является публичной офертой, если иное не указано явно.
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>3. Права и обязанности сторон</h2>
                        <h3 style={{ fontSize: theme.fontSizes.md, color: theme.colors.text.primary, marginTop: '16px' }}>
                            Пользователь имеет право:
                        </h3>
                        <ul>
                            <li>Использовать сайт в личных целях</li>
                            <li>Запрашивать информацию об услугах и ценах</li>
                            <li>Оформлять заказы через сайт</li>
                            <li>Обращаться в поддержку[cite: 9]</li>
                        </ul>
                        <h3 style={{ fontSize: theme.fontSizes.md, color: theme.colors.text.primary, marginTop: '16px' }}>
                            Пользователь обязуется:[cite: 9]
                        </h3>
                        <ul>
                            <li>Предоставлять достоверную информацию[cite: 9]</li>
                            <li>Не использовать сайт для незаконных целей[cite: 9]</li>
                            <li>Не нарушать работу сайта[cite: 9]</li>
                            <li>Соблюдать авторские права[cite: 9]</li>
                        </ul>
                    </Card>

                    <Card as="section">
                        <h2>4. Порядок оформления заказа</h2>
                        <p>
                            Заказ оформляется через корзину сайта или по телефону. После оформления
                            заказа с вами связывается менеджер для подтверждения и согласования деталей[cite: 9].
                        </p>
                        <ul>
                            <li>Выбор автомобиля или запчасти[cite: 9]</li>
                            <li>Согласование цены и условий[cite: 9]</li>
                            <li>Заключение договора (по желанию клиента)[cite: 9]</li>
                            <li>Оплата и передача товара[cite: 9]</li>
                        </ul>
                    </Card>

                    <Card as="section">
                        <h2>5. Ответственность</h2>
                        <p>
                            Мы несём ответственность за достоверность информации о товарах и услугах,
                            а также за качество предоставляемых услуг. Мы не несём ответственности за
                            убытки, возникшие в результате неправильного использования сайта или
                            недостоверной информации, предоставленной пользователем[cite: 9].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>6. Интеллектуальная собственность</h2>
                        <p>
                            Все материалы, размещённые на сайте (тексты, изображения, дизайн), являются
                            нашей интеллектуальной собственностью и защищены авторским правом.
                            Использование материалов без разрешения запрещено[cite: 9].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>7. Изменения в соглашении</h2>
                        <p>
                            Мы оставляем за собой право вносить изменения в настоящее соглашение.
                            Актуальная версия всегда доступна на этой странице[cite: 9].
                        </p>
                        <p style={{ color: theme.colors.text.secondary, fontSize: theme.fontSizes.sm, marginTop: '8px' }}>
                            Дата последнего обновления: <time dateTime="2026-07-25">25 июля 2026 года</time>[cite: 9].
                        </p>
                    </Card>
                </Container>
            </PageWrapper>
        </>
    );
};

export default TermsOfService;