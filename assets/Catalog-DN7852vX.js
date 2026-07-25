import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./GlassCard-Dv4nyoKI.js";import{t as c}from"./proxy-CoL8c5gP.js";import{i as l,n as u,r as d,t as f}from"./index-D21KUcUi.js";var p=e(s(),1),m=r(),h=i.div`
  padding-top: 80px;

  @media (max-width: ${a.breakpoints.sm}) {
    padding-top: 70px;
  }
`,g=i.div`
  padding: 40px 0 20px;
  border-bottom: 1px solid ${a.colors.glass.border};
  margin-bottom: 32px;

  @media (max-width: ${a.breakpoints.md}) {
    padding: 30px 0 16px;
    margin-bottom: 24px;
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 20px 0 12px;
    margin-bottom: 20px;
  }
`,_=i.h1`
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
`,v=i.p`
  color: ${a.colors.text.secondary};
  font-size: ${a.fontSizes.lg};

  @media (max-width: ${a.breakpoints.md}) {
    font-size: ${a.fontSizes.md};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    font-size: ${a.fontSizes.sm};
  }
`,y=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 32px;
  padding: 20px 24px;
  background: ${a.colors.background.card};
  border-radius: ${a.borderRadius.lg};
  border: 1px solid ${a.colors.glass.border};

  @media (max-width: ${a.breakpoints.sm}) {
    flex-direction: column;
    gap: 12px;
    padding: 16px;
    margin-bottom: 24px;
  }
`,b=i.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 140px;

  label {
    font-size: ${a.fontSizes.xs};
    color: ${a.colors.text.secondary};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  select,
  input {
    padding: 8px 12px;
    border-radius: ${a.borderRadius.sm};
    border: 1px solid ${a.colors.glass.border};
    background: rgba(255, 255, 255, 0.05);
    color: ${a.colors.text.primary};
    font-size: ${a.fontSizes.sm};
    outline: none;

    &:focus {
      border-color: ${a.colors.accent.primary};
    }
  }

  input[type="number"] {
    width: 100%;
  }

  @media (max-width: ${a.breakpoints.sm}) {
    min-width: unset;
  }
`,x=i.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 40px;

  @media (max-width: ${a.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
    gap: 16px;
    margin-bottom: 30px;
  }
`,S=i(o)`
  position: relative;
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: all ${a.transitions.default};

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${a.shadows.hover};
  }

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    display: block;

    @media (max-width: ${a.breakpoints.sm}) {
      height: 160px;
    }
  }

  .info {
    padding: 16px 20px 20px;

    @media (max-width: ${a.breakpoints.sm}) {
      padding: 12px 16px 16px;
    }
  }

  .title {
    font-weight: 600;
    font-size: ${a.fontSizes.lg};
    margin-bottom: 4px;

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.md};
    }
  }

  .details {
    display: flex;
    gap: 16px;
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.sm};
    margin-bottom: 8px;
    flex-wrap: wrap;

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.xs};
      gap: 12px;
    }
  }

  .price {
    font-weight: 600;
    color: ${a.colors.accent.primary};
    font-size: ${a.fontSizes.lg};
    margin-bottom: 12px;

    @media (max-width: ${a.breakpoints.sm}) {
      font-size: ${a.fontSizes.md};
      margin-bottom: 8px;
    }
  }
`,C=i.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 32px;
  flex-wrap: wrap;

  @media (max-width: ${a.breakpoints.sm}) {
    gap: 6px;
    margin-top: 24px;
  }
`,w=i.button`
  padding: 8px 16px;
  border-radius: ${a.borderRadius.sm};
  border: 1px solid ${({active:e})=>e?a.colors.accent.primary:a.colors.glass.border};
  background: ${({active:e})=>e?a.colors.accent.primary:`transparent`};
  color: ${({active:e})=>e?`#fff`:a.colors.text.secondary};
  cursor: pointer;
  transition: all ${a.transitions.default};

  &:hover {
    border-color: ${a.colors.accent.primary};
    color: ${a.colors.text.primary};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 6px 12px;
    font-size: ${a.fontSizes.sm};
  }
`,T=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 300px;
  color: ${a.colors.text.secondary};
`,E=i.div`
  text-align: center;
  padding: 60px 20px;
  color: ${a.colors.text.secondary};

  h3 {
    font-size: ${a.fontSizes[`2xl`]};
    margin-bottom: 8px;
    color: ${a.colors.text.primary};
  }

  @media (max-width: ${a.breakpoints.sm}) {
    padding: 40px 16px;

    h3 {
      font-size: ${a.fontSizes.xl};
    }
  }
`,D=[{id:1,name:`Toyota Crown`,year:2020,mileage:`45 000 км`,grade:`4.5 BB`,price:`2 800 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`2.0L Turbo`,drive:`Задний`},{id:2,name:`Nissan Skyline`,year:2019,mileage:`32 000 км`,grade:`4.0 B`,price:`3 200 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`3.0L V6`,drive:`Полный`},{id:3,name:`Lexus LS`,year:2021,mileage:`18 000 км`,grade:`5.0 A`,price:`5 500 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`3.5L V6`,drive:`Задний`},{id:4,name:`Subaru WRX`,year:2018,mileage:`56 000 км`,grade:`4.0 B`,price:`2 100 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`2.5L Turbo`,drive:`Полный`},{id:5,name:`Toyota Supra`,year:2022,mileage:`12 000 км`,grade:`4.5 A`,price:`4 800 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`3.0L V6`,drive:`Задний`},{id:6,name:`Mitsubishi Lancer Evo`,year:2017,mileage:`68 000 км`,grade:`3.5 B`,price:`1 900 000 ¥`,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&q=80`,engine:`2.0L Turbo`,drive:`Полный`}],O=6,k=()=>{let[e,r]=(0,p.useState)(1),[i,a]=(0,p.useState)({brand:``,yearFrom:``,yearTo:``,priceFrom:``,priceTo:``,grade:``,drive:``}),[o]=(0,p.useState)(!1),{toggleFavorite:s,isFavorite:k}=u(),A=D.filter(e=>!(i.brand&&!e.name.toLowerCase().includes(i.brand.toLowerCase())||i.yearFrom&&e.year<Number(i.yearFrom)||i.yearTo&&e.year>Number(i.yearTo)||i.grade&&!e.grade.includes(i.grade))),j=Math.ceil(A.length/O),M=(e-1)*O,N=A.slice(M,M+O),P=(e,t)=>{a(n=>({...n,[e]:t})),r(1)},F=()=>{let t=[];for(let n=1;n<=j;n++)t.push((0,m.jsx)(w,{active:n===e,onClick:()=>r(n),children:n},n));return t},I=`Каталог автомобилей с японских аукционов | JDMVL`,L=`Автомобили с японских аукционов во Владивостоке. Toyota, Nissan, Lexus, Subaru и другие JDM-модели. Доставка под ключ, честные цены.`,R=`https://staycame.github.io/JDMvl/catalog`;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(t,{children:[(0,m.jsx)(`title`,{children:I}),(0,m.jsx)(`meta`,{name:`description`,content:L}),(0,m.jsx)(`meta`,{name:`keywords`,content:`каталог авто, японские аукционы, JDM, Toyota, Nissan, Lexus, Subaru, Владивосток`}),(0,m.jsx)(`link`,{rel:`canonical`,href:R}),(0,m.jsx)(`meta`,{property:`og:title`,content:I}),(0,m.jsx)(`meta`,{property:`og:description`,content:L}),(0,m.jsx)(`meta`,{property:`og:type`,content:`website`}),(0,m.jsx)(`meta`,{property:`og:url`,content:R}),(0,m.jsx)(`meta`,{property:`og:image`,content:`https://staycame.github.io/JDMvl/og-image.jpg`}),(0,m.jsx)(`meta`,{property:`og:locale`,content:`ru_RU`}),(0,m.jsx)(`script`,{type:`application/ld+json`,children:`
                        {
                            "@context": "https://schema.org",
                            "@type": "ItemList",
                            "name": "Автомобили с японских аукционов",
                            "description": "${L}",
                            "url": "${R}",
                            "numberOfItems": ${A.length},
                            "itemListElement": [
                                ${A.map((e,t)=>`
                                    {
                                        "@type": "ListItem",
                                        "position": ${t+1},
                                        "url": "https://staycame.github.io/JDMvl/catalog/${e.id}",
                                        "name": "${e.name} (${e.year})"
                                    }
                                `).join(`,`)}
                            ]
                        }
                    `})]}),(0,m.jsx)(h,{children:(0,m.jsxs)(n,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(_,{children:`Автомобили с японских аукционов`}),(0,m.jsxs)(v,{children:[A.length,` автомобилей в каталоге`]})]}),(0,m.jsxs)(y,{children:[(0,m.jsxs)(b,{children:[(0,m.jsx)(`label`,{children:`Марка / Модель`}),(0,m.jsx)(`input`,{type:`text`,placeholder:`Например, Toyota`,value:i.brand,onChange:e=>P(`brand`,e.target.value)})]}),(0,m.jsxs)(b,{children:[(0,m.jsx)(`label`,{children:`Год от`}),(0,m.jsx)(`input`,{type:`number`,placeholder:`2015`,value:i.yearFrom,onChange:e=>P(`yearFrom`,e.target.value)})]}),(0,m.jsxs)(b,{children:[(0,m.jsx)(`label`,{children:`Год до`}),(0,m.jsx)(`input`,{type:`number`,placeholder:`2025`,value:i.yearTo,onChange:e=>P(`yearTo`,e.target.value)})]}),(0,m.jsxs)(b,{children:[(0,m.jsx)(`label`,{children:`Оценка`}),(0,m.jsxs)(`select`,{value:i.grade,onChange:e=>P(`grade`,e.target.value),children:[(0,m.jsx)(`option`,{value:``,children:`Любая`}),(0,m.jsx)(`option`,{value:`5.0`,children:`5.0 A`}),(0,m.jsx)(`option`,{value:`4.5`,children:`4.5`}),(0,m.jsx)(`option`,{value:`4.0`,children:`4.0`}),(0,m.jsx)(`option`,{value:`3.5`,children:`3.5`})]})]})]}),o?(0,m.jsx)(T,{children:`Загрузка...`}):N.length===0?(0,m.jsxs)(E,{children:[(0,m.jsx)(`h3`,{children:`Ничего не найдено`}),(0,m.jsx)(`p`,{children:`Попробуйте изменить параметры фильтрации`})]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(x,{children:(0,m.jsx)(f,{children:N.map(e=>(0,m.jsx)(c.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.3},children:(0,m.jsx)(l,{to:`/catalog/${e.id}`,style:{textDecoration:`none`,color:`inherit`},children:(0,m.jsxs)(S,{children:[(0,m.jsx)(`img`,{src:e.img,alt:e.name}),(0,m.jsx)(`button`,{onClick:t=>{t.preventDefault(),t.stopPropagation(),s(e.id)},style:{position:`absolute`,top:`12px`,right:`12px`,background:`none`,border:`none`,cursor:`pointer`,fontSize:`24px`,color:k(e.id)?`#DC143C`:`#98989D`,transition:`color 0.3s, transform 0.2s`,zIndex:2,transform:k(e.id)?`scale(1.1)`:`scale(1)`,textShadow:`0 2px 8px rgba(0,0,0,0.3)`},"aria-label":k(e.id)?`Убрать из избранного`:`Добавить в избранное`,children:k(e.id)?`❤️`:`🤍`}),(0,m.jsxs)(`div`,{className:`info`,children:[(0,m.jsx)(`div`,{className:`title`,children:e.name}),(0,m.jsxs)(`div`,{className:`details`,children:[(0,m.jsx)(`span`,{children:e.year}),(0,m.jsx)(`span`,{children:e.mileage}),(0,m.jsxs)(`span`,{children:[`Оценка: `,e.grade]})]}),(0,m.jsx)(`div`,{className:`price`,children:e.price}),(0,m.jsx)(d,{variant:`secondary`,size:`sm`,style:{width:`100%`},children:`Подробнее`})]})]})})},e.id))})}),j>1&&(0,m.jsx)(C,{children:F()})]})]})})]})};export{k as default};