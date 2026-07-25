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
const PrivacyPolicy = () => {
    // Структурированные данные Schema.org (WebPage)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': 'Политика конфиденциальности — JDMVL',
        'description': 'Информация о том, как компания JDMVL собирает, обрабатывает и защищает персональные данные пользователей.',
        'url': 'https://staycame.github.io/JDMvl/privacy-policy'
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Политика конфиденциальности — защита данных | JDMVL</title>
                <meta
                    name="description"
                    content="Информация о том, как компания JDMVL собирает, обрабатывает и защищает персональные данные пользователей."
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/privacy-policy" />

                {/* Open Graph */}
                <meta property="og:title" content="Политика конфиденциальности — защита данных | JDMVL" />
                <meta
                    property="og:description"
                    content="Информация о том, как компания JDMVL собирает, обрабатывает и защищает персональные данные пользователей."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/privacy-policy" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Политика конфиденциальности</Title>
                    <Subtitle>Как мы обрабатываем и защищаем ваши персональные данные</Subtitle>

                    <Card as="section">
                        <h2>1. Общие положения</h2>
                        <p>
                            Настоящая Политика конфиденциальности определяет порядок обработки и защиты
                            персональных данных пользователей сайта JDMVL. Мы уважаем ваше право на
                            приватность и обязуемся обеспечивать безопасность ваших данных[cite: 6].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>2. Какие данные мы собираем</h2>
                        <ul>
                            <li>Имя, фамилия, отчество[cite: 6]</li>
                            <li>Контактный телефон и адрес электронной почты[cite: 6]</li>
                            <li>IP-адрес и данные о посещении сайта[cite: 6]</li>
                            <li>Информация о заказах и предпочтениях[cite: 6]</li>
                        </ul>
                        <p>
                            Все данные собираются добровольно и используются только для обработки заказов
                            и улучшения качества обслуживания[cite: 6].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>3. Как мы используем ваши данные</h2>
                        <ul>
                            <li>Для обработки заказов и оказания услуг[cite: 6]</li>
                            <li>Для связи с вами по вопросам заказа[cite: 6]</li>
                            <li>Для отправки уведомлений и информационных сообщений[cite: 6]</li>
                            <li>Для улучшения работы сайта и сервисов[cite: 6]</li>
                        </ul>
                    </Card>

                    <Card as="section">
                        <h2>4. Передача данных третьим лицам</h2>
                        <p>
                            Мы не передаём ваши персональные данные третьим лицам, за исключением случаев,
                            предусмотренных законодательством РФ, или когда это необходимо для выполнения
                            заказа (например, транспортным компаниям для доставки)[cite: 6].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>5. Защита данных</h2>
                        <p>
                            Мы принимаем все необходимые организационные и технические меры для защиты
                            ваших персональных данных от несанкционированного доступа, изменения,
                            раскрытия или уничтожения[cite: 6].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>6. Ваши права</h2>
                        <ul>
                            <li>Право на доступ к своим данным[cite: 6]</li>
                            <li>Право на исправление неточных данных[cite: 6]</li>
                            <li>Право на удаление данных[cite: 6]</li>
                            <li>Право на отзыв согласия на обработку[cite: 6]</li>
                        </ul>
                        <p>
                            Для реализации своих прав вы можете связаться с нами по телефону или электронной почте[cite: 6].
                        </p>
                    </Card>

                    <Card as="section">
                        <h2>7. Изменения в политике</h2>
                        <p>
                            Мы оставляем за собой право вносить изменения в настоящую Политику
                            конфиденциальности. Актуальная версия всегда доступна на этой странице[cite: 6].
                        </p>
                        <p style={{ color: theme.colors.text.secondary, fontSize: theme.fontSizes.sm, marginTop: '8px' }}>
                            Дата последнего обновления: <time dateTime="2026-07-25">25 июля 2026 года</time>[cite: 6].
                        </p>
                    </Card>
                </Container>
            </PageWrapper>
        </>
    );
};

export default PrivacyPolicy;