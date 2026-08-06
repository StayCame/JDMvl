import{c as e,i as t,n,o as r,r as i,t as a}from"./GlassCard-Dv4nyoKI.js";import{t as o}from"./proxy-CoL8c5gP.js";var s=n(),c=r.main`
  padding: 120px 0 60px;
  min-height: 60vh;

  @media (max-width: ${i.breakpoints.md}) {
    padding: 100px 0 40px;
  }

  @media (max-width: ${i.breakpoints.sm}) {
    padding: 80px 0 30px;
  }
`,l=r.h1`
  font-family: ${i.fonts.heading};
  font-size: ${i.fontSizes[`4xl`]};
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 8px;

  @media (max-width: ${i.breakpoints.md}) {
    font-size: ${i.fontSizes[`3xl`]};
  }

  @media (max-width: ${i.breakpoints.sm}) {
    font-size: ${i.fontSizes[`2xl`]};
  }
`,u=r.p`
  color: ${i.colors.text.secondary};
  font-size: ${i.fontSizes.lg};
  margin-bottom: 48px;

  @media (max-width: ${i.breakpoints.md}) {
    font-size: ${i.fontSizes.md};
    margin-bottom: 32px;
  }

  @media (max-width: ${i.breakpoints.sm}) {
    font-size: ${i.fontSizes.sm};
    margin-bottom: 24px;
  }
`,d=r.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;

  @media (max-width: ${i.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${i.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`,f=r(a)`
  padding: 0;
  overflow: hidden;
  transition: all ${i.transitions.default};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${i.shadows.hover};
  }

  .image {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
    display: block;

    @media (max-width: ${i.breakpoints.sm}) {
      aspect-ratio: 16/10;
    }
  }

  .content {
    padding: 20px 24px 24px;

    @media (max-width: ${i.breakpoints.sm}) {
      padding: 16px 16px 18px;
    }
  }

  .tag {
    display: inline-block;
    padding: 2px 12px;
    border-radius: ${i.borderRadius.full};
    font-size: ${i.fontSizes.xs};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    background: rgba(220, 20, 60, 0.15);
    color: ${i.colors.accent.primary};
    margin-bottom: 8px;

    @media (max-width: ${i.breakpoints.sm}) {
      font-size: 10px;
      padding: 2px 10px;
    }
  }

  /* Повысили уровень заголовка до h2 для правильной иерархии (H1 -> H2) */
  h2.title {
    font-family: ${i.fonts.heading};
    font-size: ${i.fontSizes.xl};
    font-weight: 600;
    margin-bottom: 8px;
    line-height: 1.3;

    @media (max-width: ${i.breakpoints.sm}) {
      font-size: ${i.fontSizes.lg};
    }
  }

  .excerpt {
    color: ${i.colors.text.secondary};
    font-size: ${i.fontSizes.sm};
    line-height: 1.6;
    margin-bottom: 12px;

    @media (max-width: ${i.breakpoints.sm}) {
      font-size: ${i.fontSizes.xs};
      margin-bottom: 10px;
    }
  }

  .meta {
    display: flex;
    justify-content: space-between;
    color: ${i.colors.text.secondary};
    font-size: ${i.fontSizes.xs};
    border-top: 1px solid ${i.colors.glass.border};
    padding-top: 12px;

    @media (max-width: ${i.breakpoints.sm}) {
      font-size: 10px;
      padding-top: 8px;
    }
  }
`,p=[{id:1,title:`Гид по аукционным оценкам: как не переплатить`,excerpt:`Разбираем систему оценок автомобилей на японских аукционах. Что означают 4.5 BB, 3.0 C и как это влияет на цену.`,tag:`Обучение`,date:`2026-07-25`,displayDate:`25 июля 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:2,title:`История Toyota Crown — эволюция легенды`,excerpt:`От первого поколения до современного флагмана. Как Crown стал символом японского качества и комфорта.`,tag:`История`,date:`2026-07-20`,displayDate:`20 июля 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:3,title:`Как не купить битый автомобиль на аукционе`,excerpt:`Практические советы по проверке аукционных листов, фотографий и скрытых дефектов. Опыт экспертов.`,tag:`Советы`,date:`2026-07-15`,displayDate:`15 июля 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:4,title:`Контейнерные перевозки из Японии: всё, что нужно знать`,excerpt:`Как происходит отправка, сколько стоит, какие риски и как мы их минимизируем для клиентов.`,tag:`Логистика`,date:`2026-07-10`,displayDate:`10 июля 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:5,title:`Лучшие JDM-автомобили для покупки в 2026 году`,excerpt:`Самые интересные модели с японских аукционов, которые растут в цене и уже стали классикой.`,tag:`Подбор`,date:`2026-07-05`,displayDate:`5 июля 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:6,title:`Таможенное оформление авто: пошаговая инструкция`,excerpt:`Как правильно подать документы, рассчитать пошлины и избежать ошибок при растаможке.`,tag:`Документы`,date:`2026-06-28`,displayDate:`28 июня 2026`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`}],m=()=>{let n={"@context":`https://schema.org`,"@type":`Blog`,name:`Журнал JDMVL`,description:`Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры.`,url:`https://staycame.github.io/JDMvl/journal`,blogPost:p.map(e=>({"@type":`BlogPosting`,headline:e.title,description:e.excerpt,datePublished:e.date,image:e.img,author:{"@type":`Organization`,name:`JDMVL`}}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e,{children:[(0,s.jsx)(`title`,{children:`Журнал JDMVL — статьи об авто из Японии`}),(0,s.jsx)(`meta`,{name:`description`,content:`Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры.`}),(0,s.jsx)(`link`,{rel:`canonical`,href:`https://staycame.github.io/JDMvl/journal`}),(0,s.jsx)(`meta`,{property:`og:title`,content:`Журнал JDMVL — статьи об авто из Японии`}),(0,s.jsx)(`meta`,{property:`og:description`,content:`Статьи о JDM-культуре, аукционах, доставке авто из Японии. Полезные гайды и обзоры.`}),(0,s.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,s.jsx)(`meta`,{property:`og:url`,content:`https://staycame.github.io/JDMvl/journal`}),(0,s.jsx)(`meta`,{property:`og:image`,content:`https://staycame.github.io/JDMvl/og-image.jpg`}),(0,s.jsx)(`script`,{type:`application/ld+json`,children:JSON.stringify(n)})]}),(0,s.jsx)(c,{children:(0,s.jsxs)(t,{children:[(0,s.jsx)(l,{children:`Журнал`}),(0,s.jsx)(u,{children:`Культура JDM, советы экспертов и новости японского авторынка`}),(0,s.jsx)(d,{children:p.map((e,t)=>(0,s.jsx)(o.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},transition:{duration:.5,delay:t*.1},viewport:{once:!0},children:(0,s.jsxs)(f,{as:`article`,children:[(0,s.jsx)(`img`,{className:`image`,src:e.img,alt:`Обложка статьи: ${e.title}`,loading:`lazy`}),(0,s.jsxs)(`div`,{className:`content`,children:[(0,s.jsx)(`span`,{className:`tag`,children:e.tag}),(0,s.jsx)(`h2`,{className:`title`,children:e.title}),(0,s.jsx)(`p`,{className:`excerpt`,children:e.excerpt}),(0,s.jsxs)(`div`,{className:`meta`,children:[(0,s.jsx)(`time`,{dateTime:e.date,children:e.displayDate}),(0,s.jsx)(`span`,{children:`Читать →`})]})]})]})},e.id))})]})})]})};export{m as default};