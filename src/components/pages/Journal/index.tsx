import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
// Заменили div на main для соблюдения семантики
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

// Заменили div на section для логической группировки
const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ArticleCard = styled(GlassCard)`
  padding: 0;
  overflow: hidden;
  transition: all ${theme.transitions.default};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.hover};
  }

  .image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;

    @media (max-width: ${theme.breakpoints.sm}) {
      aspect-ratio: 16/10;
    }
  }

  .content {
    padding: 20px 24px 24px;

    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 16px 16px 18px;
    }
  }

  .tag {
    display: inline-block;
    padding: 2px 12px;
    border-radius: ${theme.borderRadius.full};
    font-size: ${theme.fontSizes.xs};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(220, 20, 60, 0.15);
    color: ${theme.colors.accent.primary};
    margin-bottom: 8px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 10px;
      padding: 2px 10px;
    }
  }

  /* Повысили уровень заголовка до h2 для правильной иерархии (H1 -> H2) */
  h2.title {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.xl};
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.3;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.lg};
    }
  }

  .excerpt {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    line-height: 1.6;
    margin-bottom: 12px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.xs};
      margin-bottom: 10px;
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.xs};
    border-top: 1px solid ${theme.colors.glass.border};
    padding-top: 12px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 10px;
      padding-top: 8px;
    }
  }
`;

// ===== ДАННЫЕ =====
const articles = [
    {
        id: 1,
        title: 'Гид по аукционным оценкам: как не переплатить',
        excerpt: 'Разбираем систему оценок автомобилей на японских аукционах. Что означают 4.5 BB, 3.0 C и как это влияет на цену.',
        tag: 'Обучение',
        date: '2026-07-25',
        displayDate: '25 июля 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
    {
        id: 2,
        title: 'История Toyota Crown — эволюция легенды',
        excerpt: 'От первого поколения до современного флагмана. Как Crown стал символом японского качества и комфорта.',
        tag: 'История',
        date: '2026-07-20',
        displayDate: '20 июля 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
    {
        id: 3,
        title: 'Как не купить битый автомобиль на аукционе',
        excerpt: 'Практические советы по проверке аукционных листов, фотографий и скрытых дефектов. Опыт экспертов.',
        tag: 'Советы',
        date: '2026-07-15',
        displayDate: '15 июля 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
    {
        id: 4,
        title: 'Контейнерные перевозки из Японии: всё, что нужно знать',
        excerpt: 'Как происходит отправка, сколько стоит, какие риски и как мы их минимизируем для клиентов.',
        tag: 'Логистика',
        date: '2026-07-10',
        displayDate: '10 июля 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
    {
        id: 5,
        title: 'Лучшие JDM-автомобили для покупки в 2026 году',
        excerpt: 'Самые интересные модели с японских аукционов, которые растут в цене и уже стали классикой.',
        tag: 'Подбор',
        date: '2026-07-05',
        displayDate: '5 июля 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
    {
        id: 6,
        title: 'Таможенное оформление авто: пошаговая инструкция',
        excerpt: 'Как правильно подать документы, рассчитать пошлины и избежать ошибок при растаможке.',
        tag: 'Документы',
        date: '2026-06-28',
        displayDate: '28 июня 2026',
        img: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80',
    },
];

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Journal = () => {
    // Микроразметка Schema.org (Тип Blog с публикациями)
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Blog',
        'name': 'Журнал JDMVL',
        'description': 'Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры.',
        'url': 'https://staycame.github.io/JDMvl/journal',
        'blogPost': articles.map((article) => ({
            '@type': 'BlogPosting',
            'headline': article.title,
            'description': article.excerpt,
            'datePublished': article.date,
            'image': article.img,
            'author': {
                '@type': 'Organization',
                'name': 'JDMVL'
            }
        }))
    };

    return (
        <>
            {/* Мета-теги SEO */}
            <Helmet>
                <title>Журнал JDMVL — статьи об авто из Японии</title>
                <meta
                    name="description"
                    content="Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры."
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/journal" />

                {/* Open Graph */}
                <meta property="og:title" content="Журнал JDMVL — статьи об авто из Японии" />
                <meta
                    property="og:description"
                    content="Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/journal" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />

                {/* JSON-LD Schema.org */}
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Журнал</Title>
                    <Subtitle>Культура JDM, советы экспертов и новости японского авторынка</Subtitle>

                    <Grid>
                        {articles.map((article, index) => (
                            <motion.div
                                key={article.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <ArticleCard as="article">
                                    <img
                                        className="image"
                                        src={article.img}
                                        alt={`Обложка статьи: ${article.title}`}
                                        loading="lazy"
                                    />
                                    <div className="content">
                                        <span className="tag">{article.tag}</span>
                                        <h2 className="title">{article.title}</h2>
                                        <p className="excerpt">{article.excerpt}</p>
                                        <div className="meta">
                                            <time dateTime={article.date}>{article.displayDate}</time>
                                            <span>Читать →</span>
                                        </div>
                                    </div>
                                </ArticleCard>
                            </motion.div>
                        ))}
                    </Grid>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Journal;