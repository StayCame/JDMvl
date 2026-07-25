import styled from 'styled-components';
import { useState } from 'react';
import { theme } from '../../../styles/theme';
import Button from '../Button';
import GlassCard from '../GlassCard';

const Wrapper = styled(GlassCard)`
  padding: 32px 28px;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes['2xl']};
    margin-bottom: 4px;
    color: ${theme.colors.text.primary};
  }

  .sub {
    color: ${theme.colors.text.secondary};
    font-size: ${theme.fontSizes.sm};
    margin-bottom: 24px;
  }

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

      input, select {
        width: 100%;
        padding: 10px 14px;
        border-radius: ${theme.borderRadius.md};
        border: 1px solid ${theme.colors.glass.border};
        background: rgba(255, 255, 255, 0.05);
        color: ${theme.colors.text.primary};
        font-size: ${theme.fontSizes.md};
        outline: none;
        transition: border-color 0.3s;
        font-family: inherit;

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

const PriceCalculator = () => {
    const [priceYen, setPriceYen] = useState('');
    const [year, setYear] = useState('');
    const [engine, setEngine] = useState('');
    const [result, setResult] = useState<number | null>(null);

    const handleCalculate = () => {
        const yen = parseFloat(priceYen);
        if (!yen || yen <= 0) {
            alert('Введите корректную цену в йенах');
            return;
        }
        // Примерная формула: цена в йенах * курс (0.6) + доставка (250k) + пошлины (зависит от года и объёма)
        const rate = 0.6; // примерный курс
        const delivery = 250000;
        let tax = 0;
        if (year && parseInt(year) < 2015) tax += 50000;
        if (engine && parseFloat(engine) > 3.0) tax += 80000;
        const total = yen * rate + delivery + tax;
        setResult(Math.round(total));
    };

    return (
        <Wrapper>
            <h3>Узнайте стоимость авто</h3>
            <p className="sub">Введите параметры, и мы рассчитаем примерную цену во Владивостоке</p>

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
        </Wrapper>
    );
};

export default PriceCalculator;