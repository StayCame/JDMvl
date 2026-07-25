import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./GlassCard-Dv4nyoKI.js";import{t as c}from"./proxy-CoL8c5gP.js";import{n as l,t as u}from"./index-6Rbx4EUm.js";var d=e(s(),1),f=r(),p=i.main`
  padding: 120px 0 60px;
  min-height: 60vh;

  @media (max-width: ${a.breakpoints.md}) {
    padding: 100px 0 40px;
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 80px 0 30px;
  }
`,m=i.header`
  margin-bottom: 32px;

  @media (max-width: ${a.breakpoints.sm}) {
    margin-bottom: 24px;
  }
`,h=i.h1`
  font-family: ${a.fonts.heading};
  font-size: ${a.fontSizes[`4xl`]};
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 8px;

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes[`3xl`]};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    font-size: ${a.fontSizes[`2xl`]};
  }
`,g=i.p`
  color: ${a.colors.text.secondary};
  font-size: ${a.fontSizes.lg};

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    font-size: ${a.fontSizes.sm};
  }
`,_=i.div`
  display: flex;
  gap: 16px;
  margin: 24px 0 32px;
  flex-wrap: wrap;
  background: ${a.colors.background.card};
  padding: 20px 24px;
  border-radius: ${a.borderRadius.lg};
  border: 1px solid ${a.colors.glass.border};

  input {
    flex: 1;
    padding: 12px 18px;
    border-radius: ${a.borderRadius.md};
    border: 1px solid ${a.colors.glass.border};
    background: rgba(255, 255, 255, 0.05);
    color: ${a.colors.text.primary};
    font-size: ${a.fontSizes.md};
    outline: none;
    min-width: 200px;

    &:focus {
      border-color: ${a.colors.accent.primary};
    }

    &::placeholder {
      color: ${a.colors.text.secondary};
    }

    @media (max-width: ${a.breakpoints.sm}) {
      min-width: unset;
      font-size: ${a.fontSizes.sm};
      padding: 10px 14px;
    }
  }

  button {
    flex-shrink: 0;
  }

  @media (max-width: ${a.breakpoints.sm}) {
    flex-direction: column;
    padding: 16px;
    gap: 12px;
    margin: 16px 0 24px;

    input {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`,v=i.nav`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (max-width: ${a.breakpoints.sm}) {
    gap: 8px;
    margin-bottom: 24px;
    justify-content: center;
  }
`,y=i.button`
  padding: 8px 20px;
  border-radius: ${a.borderRadius.full};
  border: 1px solid ${({active:e})=>e?a.colors.accent.primary:a.colors.glass.border};
  background: ${({active:e})=>e?a.colors.accent.primary:`transparent`};
  color: ${({active:e})=>e?`#fff`:a.colors.text.secondary};
  cursor: pointer;
  transition: all ${a.transitions.default};
  font-size: ${a.fontSizes.sm};
  font-weight: 500;

  &:hover {
    border-color: ${a.colors.accent.primary};
    color: ${a.colors.text.primary};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    font-size: ${a.fontSizes.xs};
    padding: 6px 14px;
  }
`,b=i.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 30px;
  }
`,x=i(o)`
  padding: 0;
  overflow: hidden;
  transition: all ${a.transitions.default};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${a.shadows.hover};
  }

  .image {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    display: block;
    background: ${a.colors.background.card};
  }

  .info {
    padding: 16px 20px 20px;

    @media (max-width: ${a.breakpoints.sm}) {
      padding: 12px 16px 16px;
    }
  }

  /* Повысили уровень заголовка до h2 для правильной семантической иерархии */
  h2.name {
    font-weight: 600;
    font-size: ${a.fontSizes.md};
    margin-bottom: 4px;
    color: ${a.colors.text.primary};

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.sm};
    }
  }

  .details {
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.sm};
    margin-bottom: 8px;

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.xs};
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
  }

  .status {
    display: inline-block;
    padding: 2px 10px;
    border-radius: ${a.borderRadius.full};
    font-size: ${a.fontSizes.xs};
    font-weight: 600;

    &.in-stock {
      background: rgba(48, 209, 88, 0.2);
      color: ${a.colors.status.success};
    }

    &.on-order {
      background: rgba(255, 159, 10, 0.2);
      color: ${a.colors.status.warning};
    }

    &.sold {
      background: rgba(255, 69, 58, 0.2);
      color: ${a.colors.status.error};
    }

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: 10px;
      padding: 2px 8px;
    }
  }

  .price {
    font-weight: 600;
    color: ${a.colors.accent.primary};
    font-size: ${a.fontSizes.lg};
    margin: 8px 0 12px;

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.md};
      margin: 6px 0 10px;
    }
  }
`,S=i.div`
  text-align: center;
  padding: 60px 20px;
  color: ${a.colors.text.secondary};

  h2 {
    font-size: ${a.fontSizes[`2xl`]};
    margin-bottom: 8px;
    color: ${a.colors.text.primary};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 40px 16px;

    h2 {
      font-size: ${a.fontSizes.xl};
    }
  }
`,C=[`Все`,`Двигатели`,`Коробки передач`,`Кузовные детали`,`Тюнинг`,`Электрика`],w=[{id:1,name:`Двигатель 2JZ-GTE`,category:`Двигатели`,vin:`JZA80-123456`,article:`2JZ-001`,price:`450 000 ₽`,rawPrice:45e4,status:`in-stock`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:2,name:`Коробка A340E`,category:`Коробки передач`,vin:`JZA80-123456`,article:`A340-002`,price:`120 000 ₽`,rawPrice:12e4,status:`on-order`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:3,name:`Капот (оригинал)`,category:`Кузовные детали`,vin:`JZA80-123456`,article:`CAP-003`,price:`85 000 ₽`,rawPrice:85e3,status:`in-stock`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:4,name:`Турбокит Garrett GTX`,category:`Тюнинг`,vin:``,article:`GTX-004`,price:`320 000 ₽`,rawPrice:32e4,status:`in-stock`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:5,name:`Блок управления ECU`,category:`Электрика`,vin:`JZA80-123456`,article:`ECU-005`,price:`65 000 ₽`,rawPrice:65e3,status:`on-order`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`},{id:6,name:`Двигатель 1JZ-GTE`,category:`Двигатели`,vin:`JZX90-654321`,article:`1JZ-006`,price:`380 000 ₽`,rawPrice:38e4,status:`sold`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`}],T=()=>{let[e,r]=(0,d.useState)(``),[i,a]=(0,d.useState)(`Все`),o=w.filter(t=>{let n=t.name.toLowerCase().includes(e.toLowerCase())||t.article.toLowerCase().includes(e.toLowerCase())||t.vin.toLowerCase().includes(e.toLowerCase()),r=i===`Все`||t.category===i;return n&&r}),s=e=>{e.preventDefault()},T={"@context":`https://schema.org`,"@type":`ItemList`,name:`Автозапчасти из Японии — каталог JDMVL`,description:`Оригинальные и контрактные автозапчасти из Японии во Владивостоке.`,url:`https://staycame.github.io/JDMvl/parts`,numberOfItems:w.length,itemListElement:w.map((e,t)=>({"@type":`ListItem`,position:t+1,item:{"@type":`Product`,name:e.name,image:e.img,description:`Автозапчасть ${e.name}. Артикул: ${e.article||`н/д`}, VIN: ${e.vin||`н/д`}`,sku:e.article||`PART-${e.id}`,offers:{"@type":`Offer`,priceCurrency:`RUB`,price:e.rawPrice,availability:e.status===`in-stock`?`https://schema.org/InStock`:e.status===`on-order`?`https://schema.org/PreOrder`:`https://schema.org/OutOfStock`}}}))};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(t,{children:[(0,f.jsx)(`title`,{children:`Автозапчасти из Японии — каталог | JDMVL`}),(0,f.jsx)(`meta`,{name:`description`,content:`Оригинальные и контрактные автозапчасти из Японии во Владивостоке. Поиск по VIN, артикулу и названию.`}),(0,f.jsx)(`link`,{rel:`canonical`,href:`https://staycame.github.io/JDMvl/parts`}),(0,f.jsx)(`meta`,{property:`og:title`,content:`Автозапчасти из Японии — каталог | JDMVL`}),(0,f.jsx)(`meta`,{property:`og:description`,content:`Оригинальные и контрактные автозапчасти из Японии во Владивостоке. Поиск по VIN, артикулу и названию.`}),(0,f.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,f.jsx)(`meta`,{property:`og:url`,content:`https://staycame.github.io/JDMvl/parts`}),(0,f.jsx)(`meta`,{property:`og:image`,content:`https://staycame.github.io/JDMvl/og-image.jpg`}),(0,f.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify(T)})]}),(0,f.jsx)(p,{children:(0,f.jsxs)(n,{children:[(0,f.jsxs)(m,{children:[(0,f.jsx)(h,{children:`Автозапчасти`}),(0,f.jsx)(g,{children:`Оригинальные и контрактные запчасти из Японии`})]}),(0,f.jsx)(`form`,{onSubmit:s,role:`search`,"aria-label":`Поиск автозапчастей`,children:(0,f.jsxs)(_,{children:[(0,f.jsx)(`input`,{type:`text`,"aria-label":`Поисковый запрос`,placeholder:`Поиск по VIN, артикулу или названию...`,value:e,onChange:e=>r(e.target.value)}),(0,f.jsx)(l,{type:`submit`,size:`sm`,children:`Найти`})]})}),(0,f.jsx)(v,{"aria-label":`Фильтр по категориям запчастей`,children:C.map(e=>(0,f.jsx)(y,{type:`button`,active:i===e,onClick:()=>a(e),children:e},e))}),(0,f.jsx)(u,{children:o.length===0?(0,f.jsxs)(S,{children:[(0,f.jsx)(`h2`,{children:`Ничего не найдено`}),(0,f.jsx)(`p`,{children:`Попробуйте изменить поисковый запрос или выберите другую категорию`})]}):(0,f.jsx)(b,{children:o.map(e=>(0,f.jsx)(c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(0,f.jsxs)(x,{as:`article`,children:[(0,f.jsx)(`img`,{className:`image`,src:e.img,alt:`Запчасть ${e.name}`,loading:`lazy`}),(0,f.jsxs)(`div`,{className:`info`,children:[(0,f.jsx)(`h2`,{className:`name`,children:e.name}),(0,f.jsxs)(`div`,{className:`details`,children:[e.article&&(0,f.jsxs)(`span`,{children:[`Арт.: `,e.article]}),e.vin&&(0,f.jsxs)(`span`,{children:[`VIN: `,e.vin]})]}),(0,f.jsx)(`div`,{children:(0,f.jsxs)(`span`,{className:`status ${e.status}`,children:[e.status===`in-stock`&&`В наличии`,e.status===`on-order`&&`Под заказ`,e.status===`sold`&&`Продано`]})}),(0,f.jsx)(`div`,{className:`price`,children:e.price}),(0,f.jsx)(l,{variant:`secondary`,size:`sm`,style:{width:`100%`},disabled:e.status===`sold`,children:e.status===`sold`?`Нет в наличии`:`Заказать`})]})]})},e.id))})})]})})]})};export{T as default};