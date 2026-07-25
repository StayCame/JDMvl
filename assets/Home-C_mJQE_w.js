import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./GlassCard-Dv4nyoKI.js";import{t as c}from"./proxy-CoL8c5gP.js";import{n as l,r as u,t as d}from"./index-CvRyNRR1.js";var f=e(s(),1),p=r(),m=i.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);

  @media (max-width: 768px) {
    padding: 24px 16px;
  }
`,h=i.h2`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 8px;
  color: #ffffff;
`,g=i.p`
  color: rgba(255, 255, 255, 0.6);
  text-align: center;
  margin-bottom: 32px;
  font-size: 14px;
`,_=i.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`,v=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.7);
  }

  input, select {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    padding: 12px 16px;
    color: #fff;
    font-size: 16px;
    outline: none;
    transition: all 0.2s ease;

    &:focus {
      border-color: #e50914;
      background: rgba(255, 255, 255, 0.08);
    }

    option {
      background: #121212;
      color: #fff;
    }
  }
`,y=i.button`
  width: 100%;
  padding: 14px 24px;
  background: linear-gradient(135deg, #e50914 0%, #b20710 100%);
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 4px 15px rgba(229, 9, 20, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(229, 9, 20, 0.5);
  }

  &:active {
    transform: translateY(0);
  }
`,b=i(c.div)`
  margin-top: 24px;
  padding: 24px;
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 14px;
`,x=i.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px dashed rgba(255, 255, 255, 0.1);
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);

  &:last-child {
    border-bottom: none;
  }

  .value {
    font-weight: 600;
    color: #fff;
  }
`,S=i.div`
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .label {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
  }

  .price {
    font-size: 26px;
    font-weight: 700;
    color: #e50914;
  }
`,C=i.div`
  background: rgba(255, 77, 77, 0.12);
  border: 1px solid rgba(255, 77, 77, 0.3);
  color: #ff6b6b;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  margin-top: 14px;
  line-height: 1.5;
`,w=i(c.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`,T=i(c.div)`
  background: #18181c;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 20px;
  padding: 32px;
  max-width: 420px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);

  h3 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #fff;
  }

  p {
    color: rgba(255, 255, 255, 0.6);
    font-size: 14px;
    margin-bottom: 24px;
    line-height: 1.5;
  }
`,E=()=>{let[e,t]=(0,f.useState)(``),[n,r]=(0,f.useState)(2021),[i,a]=(0,f.useState)(`1.8`),[o,s]=(0,f.useState)(`150`),[c,l]=(0,f.useState)(null),[u,E]=(0,f.useState)(null);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(m,{id:`calculator`,children:[(0,p.jsx)(h,{children:`Узнайте стоимость авто`}),(0,p.jsx)(g,{children:`Рассчитайте примерную цену во Владивостоке`}),(0,p.jsxs)(_,{children:[(0,p.jsxs)(v,{children:[(0,p.jsx)(`label`,{children:`Цена на аукционе (¥)`}),(0,p.jsx)(`input`,{type:`number`,placeholder:`Например, 1500000`,value:e,onChange:e=>t(e.target.value)})]}),(0,p.jsxs)(v,{children:[(0,p.jsx)(`label`,{children:`Год выпуска`}),(0,p.jsx)(`select`,{value:n,onChange:e=>r(Number(e.target.value)),children:Array.from({length:15},(e,t)=>new Date().getFullYear()-t).map(e=>(0,p.jsxs)(`option`,{value:e,children:[e,` год`]},e))})]}),(0,p.jsxs)(v,{children:[(0,p.jsx)(`label`,{children:`Объём двигателя (л)`}),(0,p.jsx)(`input`,{type:`number`,step:`0.1`,placeholder:`1.8`,value:i,onChange:e=>a(e.target.value)})]}),(0,p.jsxs)(v,{children:[(0,p.jsx)(`label`,{children:`Мощность (л.с.)`}),(0,p.jsx)(`input`,{type:`number`,placeholder:`150`,value:o,onChange:e=>s(e.target.value)})]})]}),(0,p.jsx)(y,{onClick:()=>{let t=parseFloat(e),r=parseFloat(i),a=parseFloat(o);if(isNaN(t)||t<=0){E(`Укажите корректную стоимость авто на аукционе в йенах.`);return}if(isNaN(a)||a<=0){E(`Укажите корректную мощность двигателя в лошадиных силах (л.с.).`);return}let s=new Date().getFullYear()-n,c=t*.6,u=0,d=!1;a>160||r>3?(d=!0,u=s<=3?r<=1?180200:r<=2?800800:r<=3?2250400:3296800:r<=1?46e4:r<=2?1408800:r<=3?3407200:4328e3):u=s<=3?3400:5200;let f=0;f=s<=3||s<=5?r<=1?1.5:r<=1.5?1.7:r<=1.8?2.5:2.7:r<=1?3:r<=1.5?3.2:r<=1.8?3.5:4.8;let p=r*1e3*f*98,m=28e4,h=c+u+p+m;l({carPriceRub:c,utilFee:u,customDutyRub:p,deliveryAndExpenses:m,isCommercialUtil:d,total:h})},children:`Рассчитать`}),c&&(0,p.jsxs)(b,{initial:{opacity:0,y:15},animate:{opacity:1,y:0},transition:{duration:.3},children:[(0,p.jsxs)(x,{children:[(0,p.jsx)(`span`,{children:`Автомобиль в Японии (курс ЦБ):`}),(0,p.jsxs)(`span`,{className:`value`,children:[Math.round(c.carPriceRub).toLocaleString(),` ₽`]})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(`span`,{children:`Таможенная пошлина:`}),(0,p.jsxs)(`span`,{className:`value`,children:[Math.round(c.customDutyRub).toLocaleString(),` ₽`]})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(`span`,{children:`Утилизационный сбор:`}),(0,p.jsxs)(`span`,{className:`value`,children:[c.utilFee.toLocaleString(),` ₽`]})]}),(0,p.jsxs)(x,{children:[(0,p.jsx)(`span`,{children:`Расходы во Владивостоке:`}),(0,p.jsxs)(`span`,{className:`value`,children:[c.deliveryAndExpenses.toLocaleString(),` ₽`]})]}),c.isCommercialUtil&&(0,p.jsxs)(C,{children:[`⚠️ `,(0,p.jsx)(`strong`,{children:`Внимание:`}),` Мощность превышает 160 л.с. По правилам утильсбора льготная ставка не применяется — расчёт сделан по коммерческому тарифу.`]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`span`,{className:`label`,children:`Итого во Владивостоке:`}),(0,p.jsxs)(`span`,{className:`price`,children:[Math.round(c.total).toLocaleString(),` ₽`]})]})]})]}),(0,p.jsx)(d,{children:u&&(0,p.jsx)(w,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>E(null),children:(0,p.jsxs)(T,{initial:{scale:.85,opacity:0},animate:{scale:1,opacity:1},exit:{scale:.85,opacity:0},onClick:e=>e.stopPropagation(),children:[(0,p.jsx)(`h3`,{children:`Введите данные`}),(0,p.jsx)(`p`,{children:u}),(0,p.jsx)(y,{onClick:()=>E(null),children:`Понятно`})]})})})]})},D=i.section`
  padding: 80px 0;

  @media (max-width: ${a.breakpoints.md}) {
    padding: 60px 0;
  }
`,O=i.h2`
  font-family: ${a.fonts.heading};
  font-size: ${a.fontSizes[`4xl`]};
  font-weight: 600;
  text-align: center;
  margin-bottom: 16px;
  letter-spacing: 0.04em;
  color: ${a.colors.text.primary};

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes[`3xl`]};
  }
`,k=i.p`
  text-align: center;
  color: ${a.colors.text.secondary};
  font-size: ${a.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto 48px;

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
    margin-bottom: 32px;
  }
`,A=i.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 20px 80px;
  position: relative;
  overflow: hidden;

  /* Слои: Video (1) -> Gradient Overlay (2) -> Content (3) */
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
    opacity: 0.75; /* Чуть увеличиваем сочность и видимость картинки */
  }

  /* Вместо плоского затемнения — плавный глубокий градиент */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.35) 50%,
      ${a.colors.background.primary||`#0a0a0a`} 100%
    );
    z-index: 2;
  }

  @media (max-width: ${a.breakpoints.md}) {
    padding: 100px 16px 60px;
    min-height: 80vh;
  }
`,j=i.div`
  position: relative;
  z-index: 3;
  max-width: 800px;
  padding: 0 10px;
`,M=i(c.h1)`
  font-family: ${a.fonts.heading};
  font-weight: 700;
  font-size: ${a.fontSizes[`5xl`]};
  letter-spacing: 0.05em;
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: ${a.colors.accent.primary};
  }

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes[`3xl`]};
  }
`,N=i(c.p)`
  font-size: ${a.fontSizes.lg};
  color: ${a.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto 40px;

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
    padding: 0 10px;
  }
`,P=i(c.div)`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: ${a.breakpoints.sm}) {
    flex-direction: column;
    align-items: center;
    gap: 12px;

    button {
      width: 100%;
      max-width: 300px;
    }
  }
`,F=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${a.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,I=i(o)`
  text-align: center;
  padding: 32px 20px;

  .step-number {
    font-family: ${a.fonts.heading};
    font-size: ${a.fontSizes[`3xl`]};
    font-weight: 700;
    color: ${a.colors.accent.primary};
    opacity: 0.3;
    margin-bottom: 12px;
  }

  h3 {
    font-size: ${a.fontSizes.lg};
    margin-bottom: 8px;
  }

  p {
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.sm};
  }
`,L=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  text-align: center;

  @media (max-width: ${a.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`,R=i(c.div)`
  .number {
    font-family: ${a.fonts.heading};
    font-size: ${a.fontSizes[`5xl`]};
    font-weight: 700;
    color: ${a.colors.accent.primary};
    margin-bottom: 4px;

    @media (max-width: ${a.breakpoints.md}) {
      font-size: ${a.fontSizes[`4xl`]};
    }
  }

  .label {
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.md};
  }
`,z=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,B=i(o)`
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    display: block;
  }

  .info {
    padding: 16px 20px 20px;
  }

  .title {
    font-weight: 600;
    font-size: ${a.fontSizes.md};
    margin-bottom: 4px;
  }

  .details {
    display: flex;
    justify-content: space-between;
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.sm};
    margin-bottom: 8px;
  }

  .price {
    font-weight: 600;
    color: ${a.colors.accent.primary};
    font-size: ${a.fontSizes.lg};
  }
`,V=i.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;

  @media (max-width: ${a.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 32px;
    text-align: center;

    .image {
      order: -1;
    }
  }

  .text {
    h3 {
      font-size: ${a.fontSizes[`2xl`]};
      margin-bottom: 16px;
    }

    p {
      color: ${a.colors.text.secondary};
      line-height: 1.8;
    }
  }

  .image {
    img {
      width: 100%;
      border-radius: ${a.borderRadius.xl};
      box-shadow: ${a.shadows.card};
    }
  }
`,H=()=>{let e=u();return(0,p.jsxs)(`main`,{children:[(0,p.jsxs)(t,{children:[(0,p.jsx)(`title`,{children:`JDMVL — Японский импорт авто и запчастей во Владивостоке`}),(0,p.jsx)(`meta`,{name:`description`,content:`Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток. Честные цены без скрытых комиссий.`}),(0,p.jsx)(`link`,{rel:`canonical`,href:`https://staycame.github.io/JDMvl/`}),(0,p.jsx)(`meta`,{property:`og:title`,content:`JDMVL — Японский импорт авто и запчастей во Владивостоке`}),(0,p.jsx)(`meta`,{property:`og:description`,content:`Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток.`}),(0,p.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,p.jsx)(`meta`,{property:`og:url`,content:`https://staycame.github.io/JDMvl/`}),(0,p.jsx)(`meta`,{property:`og:image`,content:`https://staycame.github.io/JDMvl/og-image.jpg`}),(0,p.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify({"@context":`https://schema.org`,"@type":`AutoDealer`,name:`JDMVL`,description:`Прямой импорт авто и запчастей из Японии во Владивосток. Доставка под ключ.`,url:`https://staycame.github.io/JDMvl/`,logo:`https://staycame.github.io/JDMvl/logo.png`,address:{"@type":`PostalAddress`,addressLocality:`Владивосток`,addressCountry:`RU`},priceRange:`¥¥¥`})})]}),(0,p.jsxs)(A,{children:[(0,p.jsxs)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:`auto`,children:[(0,p.jsx)(`source`,{src:`/JDMvl/video/vladivostok-night.mp4`,type:`video/mp4`}),`Ваш браузер не поддерживает видео.`]}),(0,p.jsxs)(j,{children:[(0,p.jsxs)(M,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[`Япония. `,(0,p.jsx)(`br`,{}),(0,p.jsx)(`span`,{children:`Безупречность.`}),` Владивосток.`]}),(0,p.jsx)(N,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:`Доставляем автомобили и запчасти с аукционов Японии под ключ. Честная цена без скрытых комиссий.`}),(0,p.jsxs)(P,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[(0,p.jsx)(l,{onClick:()=>e(`/catalog`),children:`Смотреть аукционные лоты`}),(0,p.jsx)(l,{variant:`outline`,onClick:()=>e(`/contacts`),children:`Консультация в WhatsApp`})]})]})]}),(0,p.jsx)(D,{children:(0,p.jsxs)(n,{children:[(0,p.jsx)(O,{children:`Как мы работаем`}),(0,p.jsx)(k,{children:`Четыре простых шага от выбора авто до получения ключей`}),(0,p.jsxs)(F,{children:[(0,p.jsxs)(I,{as:`article`,children:[(0,p.jsx)(`div`,{className:`step-number`,children:`01`}),(0,p.jsx)(`h3`,{children:`Выбор на аукционе`}),(0,p.jsx)(`p`,{children:`Вы находите подходящий лот на японском аукционе`})]}),(0,p.jsxs)(I,{as:`article`,children:[(0,p.jsx)(`div`,{className:`step-number`,children:`02`}),(0,p.jsx)(`h3`,{children:`Выкуп и проверка`}),(0,p.jsx)(`p`,{children:`Мы выкупаем автомобиль и проводим полную диагностику`})]}),(0,p.jsxs)(I,{as:`article`,children:[(0,p.jsx)(`div`,{className:`step-number`,children:`03`}),(0,p.jsx)(`h3`,{children:`Доставка морем`}),(0,p.jsx)(`p`,{children:`Безопасная отправка во Владивосток в контейнере`})]}),(0,p.jsxs)(I,{as:`article`,children:[(0,p.jsx)(`div`,{className:`step-number`,children:`04`}),(0,p.jsx)(`h3`,{children:`Таможня и выдача`}),(0,p.jsx)(`p`,{children:`Полное оформление документов, вы получаете авто`})]})]})]})}),(0,p.jsx)(D,{style:{background:a.colors.background.card},children:(0,p.jsx)(n,{children:(0,p.jsxs)(L,{children:[(0,p.jsxs)(R,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6},viewport:{once:!0},children:[(0,p.jsx)(`div`,{className:`number`,children:`5000+`}),(0,p.jsx)(`div`,{className:`label`,children:`Доставленных авто`})]}),(0,p.jsxs)(R,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[(0,p.jsx)(`div`,{className:`number`,children:`98%`}),(0,p.jsx)(`div`,{className:`label`,children:`Клиентов возвращаются`})]}),(0,p.jsxs)(R,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:.4},viewport:{once:!0},children:[(0,p.jsx)(`div`,{className:`number`,children:`14 дней`}),(0,p.jsx)(`div`,{className:`label`,children:`Средний срок доставки`})]})]})})}),(0,p.jsx)(D,{children:(0,p.jsxs)(n,{children:[(0,p.jsx)(O,{children:`Прямой доступ к аукционам`}),(0,p.jsx)(k,{children:`Актуальные лоты с японских аукционов`}),(0,p.jsx)(z,{children:[{id:1,name:`Toyota Crown`,year:2020,grade:`4.5 BB`,price:`2 800 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:2,name:`Nissan Skyline`,year:2019,grade:`4.0 B`,price:`3 200 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:3,name:`Lexus LS`,year:2021,grade:`5.0 A`,price:`5 500 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:4,name:`Subaru WRX`,year:2018,grade:`4.0 B`,price:`2 100 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`}].map(t=>(0,p.jsxs)(B,{as:`article`,children:[(0,p.jsx)(`img`,{src:t.img,alt:`${t.name} ${t.year} года с аукциона Японии`,loading:`lazy`}),(0,p.jsxs)(`div`,{className:`info`,children:[(0,p.jsx)(`div`,{className:`title`,children:t.name}),(0,p.jsxs)(`div`,{className:`details`,children:[(0,p.jsx)(`span`,{children:t.year}),(0,p.jsxs)(`span`,{children:[`Оценка: `,t.grade]})]}),(0,p.jsx)(`div`,{className:`price`,children:t.price}),(0,p.jsx)(l,{variant:`secondary`,size:`sm`,style:{marginTop:`12px`,width:`100%`},onClick:()=>e(`/catalog/${t.id}`),children:`Подробнее`})]})]},t.id))}),(0,p.jsx)(`div`,{style:{textAlign:`center`},children:(0,p.jsx)(l,{variant:`outline`,onClick:()=>e(`/catalog`),children:`Смотреть все лоты`})})]})}),(0,p.jsx)(D,{style:{background:a.colors.background.card},children:(0,p.jsx)(n,{children:(0,p.jsx)(E,{})})}),(0,p.jsx)(D,{children:(0,p.jsx)(n,{children:(0,p.jsxs)(V,{children:[(0,p.jsxs)(`div`,{className:`text`,children:[(0,p.jsx)(`h3`,{children:`Почему выбирают нас`}),(0,p.jsx)(`p`,{children:`Мы не продаём автомобили. Мы обеспечиваем вам прямой доступ к японским аукционам, беря на себя все риски, логистику и бюрократию. Ваша задача — выбрать, наша — доставить в идеальном состоянии.`}),(0,p.jsx)(`p`,{style:{marginTop:`16px`},children:`Более 5000 довольных клиентов во Владивостоке и по всей России подтверждают нашу репутацию.`})]}),(0,p.jsx)(`div`,{className:`image`,children:(0,p.jsx)(`img`,{src:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80`,alt:`Склад и автостоянка JDMVL во Владивостоке`,loading:`lazy`})})]})})})]})};export{H as default};