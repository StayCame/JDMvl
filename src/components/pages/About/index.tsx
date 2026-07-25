import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import GlassCard from '../../common/GlassCard';

// ===== СТИЛИ =====
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

const MissionBlock = styled(GlassCard)`
  padding: 40px;
  margin-bottom: 48px;
  text-align: center;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 32px 24px;
    margin-bottom: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 24px 16px;
    margin-bottom: 24px;
  }

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: 16px;
    color: ${theme.colors.accent.primary};

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.xl};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.lg};
      margin-bottom: 12px;
    }
  }

  p {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.lg};
    line-height: 1.8;
    max-width: 700px;
    margin: 0 auto;

    @media (max-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes.md};
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.sm};
      line-height: 1.6;
    }
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-top: 16px;

  @media (max-width: ${theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 24px;
    max-width: 320px;
    margin: 16px auto 0;
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;

  .photo {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 50%;
    background: ${theme.colors.background.card};
    border: 2px solid ${theme.colors.glass.border};
    overflow: hidden;
    margin-bottom: 12px;
    filter: grayscale(0.8);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .name {
    font-weight: 600;
    font-size: ${theme.fontSizes.md};

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.sm};
    }
  }

  .role {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.xs};
    }
  }
`;

const VideoBlock = styled.div`
  margin-top: 48px;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${theme.colors.glass.border};

  @media (max-width: ${theme.breakpoints.md}) {
    margin-top: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    margin-top: 24px;
    border-radius: ${theme.borderRadius.md};
  }

  video {
    width: 100%;
    display: block;
    background: ${theme.colors.background.card};
  }
`;

const SectionTitle = styled.h2`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['2xl']};
  margin-bottom: 16px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.xl};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes.lg};
    text-align: center;
  }
`;

// ===== ДАННЫЕ =====
const team = [
    { name: 'Алексей', role: 'Основатель, главный эксперт', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
    { name: 'Дмитрий', role: 'Логистика и таможня', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { name: 'Екатерина', role: 'Юридическое сопровождение', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80' },
    { name: 'Сергей', role: 'Технический директор', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80' },
];

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const About = () => {
    return (
        <>
            <Helmet>
                <title>О компании — JDMVL | Японский импорт авто и запчастей</title>
                <meta name="description" content="Компания JDMVL — прямой импорт автомобилей и запчастей из Японии. Честная цена, полное сопровождение, доставка под ключ во Владивосток." />
                <meta name="keywords" content="импорт авто из Японии, JDM, автоподбор, доставка авто, таможня, СБКТС, ЭПТС, Владивосток" />
                <link rel="canonical" href="https://staycame.github.io/gletabrow-/about" />
                <meta property="og:title" content="О компании — JDMVL | Японский импорт авто и запчастей" />
                <meta property="og:description" content="Прямой импорт авто и запчастей из Японии. Полное сопровождение, честные цены, доставка под ключ во Владивосток." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/gletabrow-/about" />
                <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />
                <meta property="og:locale" content="ru_RU" />

                {/* Микроразметка для организации */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "JDMVL",
              "description": "Прямой импорт автомобилей и запчастей из Японии во Владивосток",
              "url": "https://staycame.github.io/gletabrow-/",
              "telephone": "+7-914-666-55-33",
              "email": "info@jdmvl.ru",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Владивосток",
                "addressCountry": "RU"
              }
            }
          `}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>О компании</Title>
                    <Subtitle>Философия честного импорта и любви к JDM</Subtitle>

                    {/* МИССИЯ */}
                    <MissionBlock>
                        <h2>Японское качество. Русская надёжность.</h2>
                        <p>
                            Мы не просто привозим автомобили. Мы обеспечиваем прямой доступ к японским аукционам,
                            беря на себя все риски, логистику и бюрократию. Ваша задача — выбрать, наша — доставить
                            в идеальном состоянии. Никаких скрытых платежей, только честная цена и прозрачность на каждом этапе.
                        </p>
                    </MissionBlock>

                    {/* КОМАНДА */}
                    <SectionTitle>Команда</SectionTitle>
                    <TeamGrid>
                        {team.map((member, idx) => (
                            <TeamMember
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <div className="photo">
                                    <img src={member.img} alt={member.name} />
                                </div>
                                <div className="name">{member.name}</div>
                                <div className="role">{member.role}</div>
                            </TeamMember>
                        ))}
                    </TeamGrid>

                    {/* ВИДЕО-ЭКСКУРСИЯ */}
                    <VideoBlock>
                        <video autoPlay loop muted playsInline>
                            <source src="/video/warehouse.mp4" type="video/mp4" />
                            Ваш браузер не поддерживает видео.
                        </video>
                    </VideoBlock>
                </Container>
            </PageWrapper>
        </>
    );
};

export default About;