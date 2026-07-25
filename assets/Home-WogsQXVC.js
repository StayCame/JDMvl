import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./GlassCard-Dv4nyoKI.js";import{t as c}from"./proxy-CoL8c5gP.js";import{r as l}from"./index-CNHysYDC.js";var u=e(s(),1),d=r(),f=i(o)`
  padding: 32px 28px;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    font-family: ${a.fonts.heading};
    font-size: ${a.fontSizes[`2xl`]};
    margin-bottom: 4px;
    color: ${a.colors.text.primary};
  }

  .sub {
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.sm};
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
        font-size: ${a.fontSizes.xs};
        color: ${a.colors.text.secondary};
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 4px;
      }

      input, select {
        width: 100%;
        padding: 10px 14px;
        border-radius: ${a.borderRadius.md};
        border: 1px solid ${a.colors.glass.border};
        background: rgba(255, 255, 255, 0.05);
        color: ${a.colors.text.primary};
        font-size: ${a.fontSizes.md};
        outline: none;
        transition: border-color 0.3s;
        font-family: inherit;

        &:focus {
          border-color: ${a.colors.accent.primary};
        }
      }
    }
  }

  .result {
    margin-top: 20px;
    padding-top: 16px;
    border-top: 1px solid ${a.colors.glass.border};
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;

    .label {
      color: ${a.colors.text.secondary};
      font-size: ${a.fontSizes.sm};
    }

    .value {
      font-family: ${a.fonts.heading};
      font-size: ${a.fontSizes[`3xl`]};
      font-weight: 700;
      color: ${a.colors.accent.primary};
    }

    .note {
      width: 100%;
      font-size: ${a.fontSizes.xs};
      color: ${a.colors.text.secondary};
      text-align: right;
    }
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 20px 16px;

    .row {
      flex-direction: column;
      gap: 12px;
    }
  }
`,p=()=>{let[e,t]=(0,u.useState)(``),[n,r]=(0,u.useState)(``),[i,a]=(0,u.useState)(``),[o,s]=(0,u.useState)(null);return(0,d.jsxs)(f,{children:[(0,d.jsx)(`h3`,{children:`Узнайте стоимость авто`}),(0,d.jsx)(`p`,{className:`sub`,children:`Введите параметры, и мы рассчитаем примерную цену во Владивостоке`}),(0,d.jsxs)(`div`,{className:`row`,children:[(0,d.jsxs)(`div`,{className:`field`,children:[(0,d.jsx)(`label`,{children:`Цена на аукционе (¥)`}),(0,d.jsx)(`input`,{type:`number`,placeholder:`Например, 1500000`,value:e,onChange:e=>t(e.target.value)})]}),(0,d.jsxs)(`div`,{className:`field`,children:[(0,d.jsx)(`label`,{children:`Год выпуска`}),(0,d.jsx)(`input`,{type:`number`,placeholder:`2018`,value:n,onChange:e=>r(e.target.value)})]}),(0,d.jsxs)(`div`,{className:`field`,children:[(0,d.jsx)(`label`,{children:`Объём двигателя (л)`}),(0,d.jsx)(`input`,{type:`number`,step:`0.1`,placeholder:`2.5`,value:i,onChange:e=>a(e.target.value)})]})]}),(0,d.jsx)(l,{onClick:()=>{let t=parseFloat(e);if(!t||t<=0){alert(`Введите корректную цену в йенах`);return}let r=0;n&&parseInt(n)<2015&&(r+=5e4),i&&parseFloat(i)>3&&(r+=8e4);let a=t*.6+25e4+r;s(Math.round(a))},style:{width:`100%`},children:`Рассчитать`}),o!==null&&(0,d.jsxs)(`div`,{className:`result`,children:[(0,d.jsx)(`span`,{className:`label`,children:`Примерная стоимость под ключ`}),(0,d.jsxs)(`span`,{className:`value`,children:[o.toLocaleString(),` ₽`]}),(0,d.jsx)(`span`,{className:`note`,children:`* Расчёт приблизительный, точную цену уточняйте у менеджера`})]})]})},m=i.section`
  padding: 80px 0;

  @media (max-width: ${a.breakpoints.md}) {
    padding: 60px 0;
  }
`,h=i.h2`
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
`,g=i.p`
  text-align: center;
  color: ${a.colors.text.secondary};
  font-size: ${a.fontSizes.lg};
  max-width: 600px;
  margin: 0 auto 48px;

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
    margin-bottom: 32px;
  }
`,_=i.header`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 20px 80px;
  position: relative;
  overflow: hidden;

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    opacity: 0.6;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
  }

  @media (max-width: ${a.breakpoints.md}) {
    padding: 100px 16px 60px;
    min-height: 80vh;
  }
`,v=i.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 10px;
`,y=i(c.h1)`
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
`,b=i(c.p)`
  font-size: ${a.fontSizes.lg};
  color: ${a.colors.text.secondary};
  max-width: 600px;
  margin: 0 auto 40px;

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
    padding: 0 10px;
  }
`,x=i(c.div)`
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
`,S=i.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: ${a.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,C=i(o)`
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
`,w=i.div`
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
`,T=i(c.div)`
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
`,E=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`,D=i(o)`
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
`,O=i.div`
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
`,k=()=>(0,d.jsxs)(`main`,{children:[(0,d.jsxs)(t,{children:[(0,d.jsx)(`title`,{children:`JDMVL — Японский импорт авто и запчастей во Владивостоке`}),(0,d.jsx)(`meta`,{name:`description`,content:`Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток. Честные цены без скрытых комиссий.`}),(0,d.jsx)(`link`,{rel:`canonical`,href:`https://staycame.github.io/JDMvl/`}),(0,d.jsx)(`meta`,{property:`og:title`,content:`JDMVL — Японский импорт авто и запчастей во Владивостоке`}),(0,d.jsx)(`meta`,{property:`og:description`,content:`Прямой импорт авто и запчастей из Японии. Доставка под ключ во Владивосток.`}),(0,d.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,d.jsx)(`meta`,{property:`og:url`,content:`https://staycame.github.io/JDMvl/`}),(0,d.jsx)(`meta`,{property:`og:image`,content:`https://staycame.github.io/JDMvl/og-image.jpg`}),(0,d.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify({"@context":`https://schema.org`,"@type":`AutoDealer`,name:`JDMVL`,description:`Прямой импорт авто и запчастей из Японии во Владивосток. Доставка под ключ.`,url:`https://staycame.github.io/JDMvl/`,logo:`https://staycame.github.io/JDMvl/logo.png`,address:{"@type":`PostalAddress`,addressLocality:`Владивосток`,addressCountry:`RU`},priceRange:`¥¥¥`})})]}),(0,d.jsxs)(_,{children:[(0,d.jsxs)(`video`,{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,children:[(0,d.jsx)(`source`,{src:`/video/vladivostok-night.mp4`,type:`video/mp4`}),`Ваш браузер не поддерживает видео.`]}),(0,d.jsxs)(v,{children:[(0,d.jsxs)(y,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},children:[`Япония. `,(0,d.jsx)(`br`,{}),(0,d.jsx)(`span`,{children:`Безупречность.`}),` Владивосток.`]}),(0,d.jsx)(b,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:`Доставляем автомобили и запчасти с аукционов Японии под ключ. Честная цена без скрытых комиссий.`}),(0,d.jsxs)(x,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8,delay:.4},children:[(0,d.jsx)(l,{children:`Смотреть аукционные лоты`}),(0,d.jsx)(l,{variant:`outline`,children:`Консультация в WhatsApp`})]})]})]}),(0,d.jsx)(m,{children:(0,d.jsxs)(n,{children:[(0,d.jsx)(h,{children:`Как мы работаем`}),(0,d.jsx)(g,{children:`Четыре простых шага от выбора авто до получения ключей`}),(0,d.jsxs)(S,{children:[(0,d.jsxs)(C,{as:`article`,children:[(0,d.jsx)(`div`,{className:`step-number`,children:`01`}),(0,d.jsx)(`h3`,{children:`Выбор на аукционе`}),(0,d.jsx)(`p`,{children:`Вы находите подходящий лот на японском аукционе`})]}),(0,d.jsxs)(C,{as:`article`,children:[(0,d.jsx)(`div`,{className:`step-number`,children:`02`}),(0,d.jsx)(`h3`,{children:`Выкуп и проверка`}),(0,d.jsx)(`p`,{children:`Мы выкупаем автомобиль и проводим полную диагностику`})]}),(0,d.jsxs)(C,{as:`article`,children:[(0,d.jsx)(`div`,{className:`step-number`,children:`03`}),(0,d.jsx)(`h3`,{children:`Доставка морем`}),(0,d.jsx)(`p`,{children:`Безопасная отправка во Владивосток в контейнере`})]}),(0,d.jsxs)(C,{as:`article`,children:[(0,d.jsx)(`div`,{className:`step-number`,children:`04`}),(0,d.jsx)(`h3`,{children:`Таможня и выдача`}),(0,d.jsx)(`p`,{children:`Полное оформление документов, вы получаете авто`})]})]})]})}),(0,d.jsx)(m,{style:{background:a.colors.background.card},children:(0,d.jsx)(n,{children:(0,d.jsxs)(w,{children:[(0,d.jsxs)(T,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6},viewport:{once:!0},children:[(0,d.jsx)(`div`,{className:`number`,children:`5000+`}),(0,d.jsx)(`div`,{className:`label`,children:`Доставленных авто`})]}),(0,d.jsxs)(T,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:.2},viewport:{once:!0},children:[(0,d.jsx)(`div`,{className:`number`,children:`98%`}),(0,d.jsx)(`div`,{className:`label`,children:`Клиентов возвращаются`})]}),(0,d.jsxs)(T,{initial:{opacity:0,scale:.8},whileInView:{opacity:1,scale:1},transition:{duration:.6,delay:.4},viewport:{once:!0},children:[(0,d.jsx)(`div`,{className:`number`,children:`14 дней`}),(0,d.jsx)(`div`,{className:`label`,children:`Средний срок доставки`})]})]})})}),(0,d.jsx)(m,{children:(0,d.jsxs)(n,{children:[(0,d.jsx)(h,{children:`Прямой доступ к аукционам`}),(0,d.jsx)(g,{children:`Актуальные лоты с японских аукционов`}),(0,d.jsx)(E,{children:[{id:1,name:`Toyota Crown`,year:2020,grade:`4.5 BB`,price:`2 800 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:2,name:`Nissan Skyline`,year:2019,grade:`4.0 B`,price:`3 200 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:3,name:`Lexus LS`,year:2021,grade:`5.0 A`,price:`5 500 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:4,name:`Subaru WRX`,year:2018,grade:`4.0 B`,price:`2 100 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`}].map(e=>(0,d.jsxs)(D,{as:`article`,children:[(0,d.jsx)(`img`,{src:e.img,alt:`${e.name} ${e.year} года с аукциона Японии`,loading:`lazy`}),(0,d.jsxs)(`div`,{className:`info`,children:[(0,d.jsx)(`div`,{className:`title`,children:e.name}),(0,d.jsxs)(`div`,{className:`details`,children:[(0,d.jsx)(`span`,{children:e.year}),(0,d.jsxs)(`span`,{children:[`Оценка: `,e.grade]})]}),(0,d.jsx)(`div`,{className:`price`,children:e.price}),(0,d.jsx)(l,{variant:`secondary`,size:`sm`,style:{marginTop:`12px`,width:`100%`},children:`Подробнее`})]})]},e.id))}),(0,d.jsx)(`div`,{style:{textAlign:`center`},children:(0,d.jsx)(l,{variant:`outline`,children:`Смотреть все лоты`})})]})}),(0,d.jsx)(m,{style:{background:a.colors.background.card},children:(0,d.jsx)(n,{children:(0,d.jsx)(p,{})})}),(0,d.jsx)(m,{children:(0,d.jsx)(n,{children:(0,d.jsxs)(O,{children:[(0,d.jsxs)(`div`,{className:`text`,children:[(0,d.jsx)(`h3`,{children:`Почему выбирают нас`}),(0,d.jsx)(`p`,{children:`Мы не продаём автомобили. Мы обеспечиваем вам прямой доступ к японским аукционам, беря на себя все риски, логистику и бюрократию. Ваша задача — выбрать, наша — доставить в идеальном состоянии.`}),(0,d.jsx)(`p`,{style:{marginTop:`16px`},children:`Более 5000 довольных клиентов во Владивостоке и по всей России подтверждают нашу репутацию.`})]}),(0,d.jsx)(`div`,{className:`image`,children:(0,d.jsx)(`img`,{src:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80`,alt:`Склад и автостоянка JDMVL во Владивостоке`,loading:`lazy`})})]})})})]});export{k as default};