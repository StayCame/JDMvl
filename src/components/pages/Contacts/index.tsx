import styled from 'styled-components';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import Button from '../../common/Button';
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

const PageTitle = styled.h1`
  font-family: ${theme.fonts.heading};
  font-size: ${theme.fontSizes['4xl']};
  margin-bottom: 8px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes['3xl']};
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: ${theme.fontSizes['2xl']};
  }
`;

const PageSubtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.fontSizes.lg};
  margin-bottom: 40px;

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: ${theme.fontSizes.md};
    margin-bottom: 32px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 24px;
  }
`;

const Card = styled(GlassCard)`
  padding: 32px;

  @media (max-width: ${theme.breakpoints.md}) {
    padding: 28px 24px;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 16px;
  }

  h2 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: 8px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.xl};
    }
  }

  .sub {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.md};
    margin-bottom: 24px;

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: ${theme.fontSizes.sm};
      margin-bottom: 16px;
    }
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 0;
  border-bottom: 1px solid ${theme.colors.glass.border};

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 12px;
    padding: 10px 0;
  }

  .icon {
    font-size: 24px;
    width: 40px;
    text-align: center;
    color: ${theme.colors.accent.primary};

    @media (max-width: ${theme.breakpoints.sm}) {
      font-size: 20px;
      width: 32px;
    }
  }

  .content {
    display: flex;
    flex-direction: column;

    .label {
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.text.secondary};
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .value {
      font-weight: 500;
      font-size: ${theme.fontSizes.md};

      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.fontSizes.sm};
      }
    }

    a {
      color: ${theme.colors.text.primary};
      text-decoration: none;
      transition: color ${theme.transitions.default};

      &:hover {
        color: ${theme.colors.accent.primary};
      }
    }
  }
`;

const Messengers = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
  flex-wrap: wrap;

  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 20px;
    border-radius: ${theme.borderRadius.md};
    background: ${theme.colors.background.card};
    border: 1px solid ${theme.colors.glass.border};
    color: ${theme.colors.text.primary};
    text-decoration: none;
    transition: all ${theme.transitions.default};
    font-weight: 500;

    &:hover {
      border-color: ${theme.colors.accent.primary};
      transform: translateY(-2px);
    }

    .icon {
      font-size: 20px;
    }

    @media (max-width: ${theme.breakpoints.sm}) {
      flex: 1;
      justify-content: center;
      padding: 10px 12px;
      min-width: 120px;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    gap: 12px;
    flex-direction: column;

    a {
      width: 100%;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;

  .form-group {
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: ${theme.fontSizes.sm};
      color: ${theme.colors.text.secondary};

      @media (max-width: ${theme.breakpoints.sm}) {
        font-size: ${theme.fontSizes.xs};
      }
    }

    input,
    textarea {
      padding: 10px 14px;
      border-radius: ${theme.borderRadius.md};
      border: 1px solid ${theme.colors.glass.border};
      background: rgba(255, 255, 255, 0.05);
      color: ${theme.colors.text.primary};
      font-size: ${theme.fontSizes.md};
      outline: none;
      font-family: inherit;
      resize: vertical;

      &:focus {
        border-color: ${theme.colors.accent.primary};
      }

      @media (max-width: ${theme.breakpoints.sm}) {
        padding: 8px 12px;
        font-size: ${theme.fontSizes.sm};
      }
    }

    textarea {
      min-height: 100px;

      @media (max-width: ${theme.breakpoints.sm}) {
        min-height: 80px;
      }
    }
  }

  button {
    @media (max-width: ${theme.breakpoints.sm}) {
      padding: 12px;
      font-size: ${theme.fontSizes.md};
    }
  }
`;

// ===== ОСНОВНОЙ КОМПОНЕНТ =====
const Contacts = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      alert('Сообщение отправлено! Мы свяжемся с вами.');
    }, 1500);
  };

  return (
    <>
      <Helmet>
        <title>Контакты — JDMVL | Японский импорт авто во Владивостоке</title>
        <meta
          name="description"
          content="Свяжитесь с JDMVL по телефону, email или через мессенджеры. Наш адрес во Владивостоке. Поможем с импортом авто из Японии."
        />
        <meta
          name="keywords"
          content="контакты, телефон, адрес, Владивосток, импорт авто, японские авто, JDM, связь"
        />
        <link rel="canonical" href="https://staycame.github.io/gletabrow-/contacts" />
        <meta property="og:title" content="Контакты — JDMVL" />
        <meta
          property="og:description"
          content="Свяжитесь с нами по телефону, email или через мессенджеры. Адрес во Владивостоке. Консультация по импорту авто из Японии."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://staycame.github.io/gletabrow-/contacts" />
        <meta property="og:image" content="https://staycame.github.io/gletabrow-/og-image.jpg" />
        <meta property="og:locale" content="ru_RU" />

        {/* Микроразметка LocalBusiness */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "JDMVL",
              "description": "Прямой импорт автомобилей и запчастей из Японии во Владивосток",
              "url": "https://staycame.github.io/gletabrow-/",
              "telephone": "+7-914-666-55-33",
              "email": "info@jdmvl.ru",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ул. Примерная, 10",
                "addressLocality": "Владивосток",
                "addressRegion": "Приморский край",
                "addressCountry": "RU"
              },
              "openingHours": "Mo-Fr 09:00-20:00",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "20:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "image": "https://staycame.github.io/gletabrow-/og-image.jpg",
              "sameAs": [
                "https://t.me/ваш_телеграм",
                "https://wa.me/79146665533",
                "https://vk.com/ваш_вк"
              ]
            }
          `}
        </script>
      </Helmet>

      <PageWrapper>
        <Container>
          <PageTitle>Контакты</PageTitle>
          <PageSubtitle>
            Свяжитесь с нами любым удобным способом
          </PageSubtitle>

          <Grid>
            {/* ЛЕВАЯ КОЛОНКА — КОНТАКТЫ */}
            <Card>
              <h2>Свяжитесь с нами</h2>
              <p className="sub">Мы на связи 24/7</p>

              <ContactItem>
                <div className="icon">📍</div>
                <div className="content">
                  <span className="label">Адрес</span>
                  <span className="value">Владивосток, ул. Примерная, 10</span>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">📞</div>
                <div className="content">
                  <span className="label">Телефон</span>
                  <span className="value">
                    <a href="tel:+79146665533">+7 (914) 666-55-33</a>
                  </span>
                </div>
              </ContactItem>

              <ContactItem>
                <div className="icon">✉️</div>
                <div className="content">
                  <span className="label">Email</span>
                  <span className="value">
                    <a href="mailto:info@jdmvl.ru">info@jdmvl.ru</a>
                  </span>
                </div>
              </ContactItem>

              <Messengers>
                <a href="#">
                  <span className="icon">📱</span> Telegram
                </a>
                <a href="#">
                  <span className="icon">💬</span> WhatsApp
                </a>
              </Messengers>
            </Card>

            {/* ПРАВАЯ КОЛОНКА — ФОРМА */}
            <Card>
              <h2>Напишите нам</h2>
              <p className="sub">Заполните форму, и мы ответим в ближайшее время</p>

              <Form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Ваше имя</label>
                  <input type="text" placeholder="Иван Иванов" required />
                </div>
                <div className="form-group">
                  <label>Телефон или email</label>
                  <input type="text" placeholder="+7 (900) 123-45-67" required />
                </div>
                <div className="form-group">
                  <label>Сообщение</label>
                  <textarea placeholder="Опишите ваш вопрос или запрос..." required />
                </div>
                <Button type="submit" disabled={isSending}>
                  {isSending ? '⏳ Отправка...' : 'Отправить сообщение'}
                </Button>
              </Form>
            </Card>
          </Grid>
        </Container>
      </PageWrapper>
    </>
  );
};

export default Contacts;