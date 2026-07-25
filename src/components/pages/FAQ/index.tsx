import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 800px;
`;

const FaqItem = styled(GlassCard)`
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${theme.shadows.hover};
  }
`;

const FaqHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  font-weight: 600;
  font-size: ${theme.fontSizes.lg};
  color: ${theme.colors.text.primary};
  background: transparent;

  .arrow {
    color: ${theme.colors.text.secondary};
    transition: transform 0.3s;
    font-size: ${theme.fontSizes.xl};
  }
  .arrow.open {
    transform: rotate(180deg);
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 16px;
    font-size: ${theme.fontSizes.md};
  }
`;

const FaqBody = styled(motion.div)`
  padding: 0 24px 24px 24px;
  color: ${theme.colors.text.secondary};
  line-height: 1.7;
  font-size: ${theme.fontSizes.md};

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 0 16px 20px 16px;
    font-size: ${theme.fontSizes.sm};
  }
`;

const faqs = [
    {
        q: 'Какова минимальная стоимость доставки?',
        a: 'Базовая доставка морем из Японии во Владивосток начинается от 250 000 ₽ (контейнерная перевозка). Точная цена зависит от типа авто, объёма, страховки. Мы всегда даём финальную смету до оплаты.'
    },
    {
        q: 'Сколько времени занимает доставка?',
        a: 'В среднем 10–14 дней от отправки из порта Японии до прибытия во Владивосток. Весь процесс (выкуп + доставка + таможня) обычно укладывается в 3–4 недели.'
    },
    {
        q: 'Можно ли вернуть автомобиль?',
        a: 'Мы возвращаем денежные средства только в случае, если автомобиль не прошёл таможню или был продан с нарушениями. Все риски мы обсуждаем заранее и фиксируем в договоре.'
    },
    {
        q: 'Вы помогаете с СБКТС и ЭПТС?',
        a: 'Да, мы полностью сопровождаем процесс оформления всех необходимых документов: СБКТС, ЭПТС, диагностическая карта. Это включено в наш пакет услуг.'
    },
    {
        q: 'Какая предоплата?',
        a: 'Обычно предоплата составляет 30–50% от стоимости авто. Это зависит от аукциона и конкретного лота. Полную сумму вы оплачиваете перед выдачей авто.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (idx: number) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    // Данные для микроразметки
    const questionList = faqs.map((item, idx) => ({
        "@type": "Question",
        "position": idx + 1,
        "name": item.q,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
        }
    }));

    const faqListSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": questionList
    };

    return (
        <>
            <Helmet>
                <title>Часто задаваемые вопросы — JDMVL | Импорт авто из Японии</title>
                <meta
                    name="description"
                    content="Ответы на главные вопросы о покупке, доставке, таможне и документах. Как мы работаем, сколько стоит доставка, помощь с СБКТС и ЭПТС."
                />
                <meta
                    name="keywords"
                    content="вопросы, ответы, доставка авто, таможня, СБКТС, ЭПТС, предоплата, JDMVL"
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/faq" />
                <meta property="og:title" content="Часто задаваемые вопросы — JDMVL" />
                <meta
                    property="og:description"
                    content="Ответы на главные вопросы о покупке, доставке, таможне и документах. Помощь с СБКТС и ЭПТС."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/faq" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />
                <meta property="og:locale" content="ru_RU" />

                {/* Микроразметка FAQPage */}
                <script type="application/ld+json">
                    {JSON.stringify(faqListSchema)}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>Часто задаваемые вопросы</Title>
                    <Subtitle>Ответы на главные вопросы о покупке и доставке авто</Subtitle>

                    <FaqList>
                        {faqs.map((item, idx) => (
                            <FaqItem key={idx} onClick={() => toggle(idx)}>
                                <FaqHeader>
                                    <span>{item.q}</span>
                                    <span className={`arrow ${openIndex === idx ? 'open' : ''}`}>▾</span>
                                </FaqHeader>
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <FaqBody
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.25 }}
                                        >
                                            {item.a}
                                        </FaqBody>
                                    )}
                                </AnimatePresence>
                            </FaqItem>
                        ))}
                    </FaqList>
                </Container>
            </PageWrapper>
        </>
    );
};

export default FAQ;