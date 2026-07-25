import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';
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

const DocCard = styled(GlassCard)`
  padding: 24px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.hover};
  }

  h3 {
    font-size: ${theme.fontSizes.lg};
    margin-bottom: 8px;
    color: ${theme.colors.text.primary};
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 16px;
  }

  a {
    display: inline-block;
    padding: 8px 20px;
    border-radius: ${theme.borderRadius.md};
    background: ${theme.colors.accent.primary};
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    font-size: ${theme.fontSizes.sm};
    transition: background 0.3s, transform 0.2s;

    &:hover {
      background: #b80030;
      transform: scale(1.02);
    }
  }
`;

const Documents = () => {
    const docs = [
        {
            id: 1,
            title: 'Договор на покупку автомобиля',
            desc: 'Основной договор купли-продажи автомобиля с аукциона.',
            file: '/docs/dogovor-pokupki.pdf',
        },
        {
            id: 2,
            title: 'Договор на автоподбор',
            desc: 'Услуги по подбору автомобиля на японских аукционах.',
            file: '/docs/dogovor-avtopodbor.pdf',
        },
        {
            id: 3,
            title: 'Договор на доставку морем',
            desc: 'Условия и стоимость доставки автомобиля из Японии во Владивосток.',
            file: '/docs/dogovor-dostavka.pdf',
        },
        {
            id: 4,
            title: 'Договор на таможенное оформление',
            desc: 'Помощь в таможенном оформлении автомобиля.',
            file: '/docs/dogovor-tamozhnya.pdf',
        },
        {
            id: 5,
            title: 'Оферта на оказание услуг',
            desc: 'Публичная оферта на оказание услуг по импорту автомобилей.',
            file: '/docs/oferta.pdf',
        },
        {
            id: 6,
            title: 'Соглашение о конфиденциальности',
            desc: 'Обработка и защита ваших персональных данных.',
            file: '/docs/confidentiality.pdf',
        },
    ];

    return (
        <>
            <Helmet>
                <title>Документы — JDMVL | Юридические договоры и оферта</title>
                <meta
                    name="description"
                    content="Юридические документы: договор на покупку авто, автоподбор, доставка, таможня, оферта, соглашение о конфиденциальности. Скачайте PDF."
                />
                <meta
                    name="keywords"
                    content="документы, договор, оферта, автоподбор, доставка, таможня, конфиденциальность, JDMVL"
                />
                <link rel="canonical" href="https://staycame.github.io/gletabrow-/documents" />
                <meta property="og:title" content="Документы — JDMVL" />
                <meta
                    property="og:description"
                    content="Скачайте юридические документы: договоры на покупку авто, автоподбор, доставку, таможню, оферту и соглашение о конфиденциальности."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/gletabrow-/documents" />
                <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />
                <meta property="og:locale" content="ru_RU" />

                {/* Микроразметка для страницы с документами (CollectionPage) */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": "Документы JDMVL",
              "description": "Юридические документы и договоры для скачивания",
              "url": "https://staycame.github.io/gletabrow-/documents",
              "about": {
                "@type": "Thing",
                "name": "Юридические документы"
              }
            }
          `}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>📄 Документы</Title>
                    <Subtitle>Юридические документы и договоры для скачивания</Subtitle>

                    <Grid>
                        {docs.map((doc) => (
                            <DocCard key={doc.id}>
                                <h3>{doc.title}</h3>
                                <p>{doc.desc}</p>
                                <a href={doc.file} download>Скачать PDF</a>
                            </DocCard>
                        ))}
                    </Grid>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Documents;