import styled from 'styled-components';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { theme } from '../../../styles/theme';
import Container from '../../common/Container';
import Button from '../../common/Button';
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

const Card = styled(GlassCard)`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 28px;

  .row {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;
    flex-wrap: wrap;

    .field {
      flex: 1;
      min-width: 140px;

      label {
        display: block;
        font-size: ${theme.fontSizes.xs};
        color: ${theme.colors.text.secondary};
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 4px;
      }

      input,
      select {
        width: 100%;
        padding: 10px 14px;
        border-radius: ${theme.borderRadius.md};
        border: 1px solid ${theme.colors.glass.border};
        background: rgba(255, 255, 255, 0.05);
        color: ${theme.colors.text.primary};
        font-size: ${theme.fontSizes.md};
        outline: none;
        transition: border-color 0.3s;

        &:focus {
          border-color: ${theme.colors.accent.primary};
        }
      }
    }
  }

  .result {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid ${theme.colors.glass.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    .label {
      color: ${theme.colors.text.secondary};
      font-size: ${theme.fontSizes.sm};
    }

    .value {
      font-family: ${theme.fonts.heading};
      font-size: ${theme.fontSizes['3xl']};
      font-weight: 700;
      color: ${theme.colors.accent.primary};
    }

    .note {
      width: 100%;
      font-size: ${theme.fontSizes.xs};
      color: ${theme.colors.text.secondary};
      text-align: right;
    }
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    padding: 20px 16px;

    .row {
      flex-direction: column;
      gap: 12px;
    }
  }
`;

const Calculator = () => {
    const [priceYen, setPriceYen] = useState('');
    const [year, setYear] = useState('');
    const [engine, setEngine] = useState('');
    const [delivery, setDelivery] = useState('sea');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const yen = parseFloat(priceYen);
        if (!yen || yen <= 0) {
            alert('Введите корректную цену в йенах');
            return;
        }
        const rate = 0.6;
        const deliveryCost = delivery === 'air' ? 500000 : 250000;
        let tax = 0;
        if (year && parseInt(year) < 2015) tax += 50000;
        if (engine && parseFloat(engine) > 3.0) tax += 80000;
        const total = yen * rate + deliveryCost + tax;
        setResult(Math.round(total));
    };

    return (
        <>
            <Helmet>
                <title>Калькулятор стоимости авто — JDMVL | Японский импорт</title>
                <meta
                    name="description"
                    content="Рассчитайте полную стоимость автомобиля с японского аукциона под ключ: цена в йенах, доставка, пошлины, сборы. Калькулятор во Владивостоке."
                />
                <meta
                    name="keywords"
                    content="калькулятор авто, стоимость авто из Японии, доставка авто, растаможка, пошлины, цена под ключ"
                />
                <link rel="canonical" href="https://staycame.github.io/JDMvl/calculator" />
                <meta property="og:title" content="Калькулятор стоимости авто — JDMVL" />
                <meta
                    property="og:description"
                    content="Рассчитайте полную стоимость автомобиля с японского аукциона под ключ: цена в йенах, доставка, пошлины, сборы."
                />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://staycame.github.io/JDMvl/calculator" />
                <meta property="og:image" content="https://staycame.github.io/JDMvl/og-image.jpg" />
                <meta property="og:locale" content="ru_RU" />

                {/* Микроразметка для калькулятора (веб-приложение) */}
                <script type="application/ld+json">
                    {`
            {
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Калькулятор стоимости авто из Японии",
              "description": "Расчёт полной стоимости автомобиля с японского аукциона под ключ: цена в йенах, доставка морем или авиа, пошлины и сборы.",
              "url": "https://staycame.github.io/JDMvl/calculator",
              "applicationCategory": "BusinessApplication",
              "operatingSystem": "All",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "RUB"
              }
            }
          `}
                </script>
            </Helmet>

            <PageWrapper>
                <Container>
                    <Title>💰 Калькулятор стоимости</Title>
                    <Subtitle>Рассчитайте полную стоимость автомобиля под ключ</Subtitle>

                    <Card>
                        <div className="row">
                            <div className="field">
                                <label>Цена на аукционе (¥)</label>
                                <input
                                    type="number"
                                    placeholder="Например, 1500000"
                                    value={priceYen}
                                    onChange={(e) => setPriceYen(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label>Год выпуска</label>
                                <input
                                    type="number"
                                    placeholder="2018"
                                    value={year}
                                    onChange={(e) => setYear(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="field">
                                <label>Объём двигателя (л)</label>
                                <input
                                    type="number"
                                    step="0.1"
                                    placeholder="2.5"
                                    value={engine}
                                    onChange={(e) => setEngine(e.target.value)}
                                />
                            </div>
                            <div className="field">
                                <label>Тип доставки</label>
                                <select value={delivery} onChange={(e) => setDelivery(e.target.value)}>
                                    <option value="sea">Море (250 000 ₽)</option>
                                    <option value="air">Авиа (500 000 ₽)</option>
                                </select>
                            </div>
                        </div>

                        <Button onClick={handleCalculate} style={{ width: '100%' }}>
                            Рассчитать
                        </Button>

                        {result !== null && (
                            <div className="result">
                                <span className="label">Примерная стоимость под ключ</span>
                                <span className="value">{result.toLocaleString()} ₽</span>
                                <span className="note">* Расчёт приблизительный, точную цену уточняйте у менеджера</span>
                            </div>
                        )}
                    </Card>
                </Container>
            </PageWrapper>
        </>
    );
};

export default Calculator;