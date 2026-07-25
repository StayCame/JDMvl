import{a as e}from"./rolldown-runtime-CNC7AqOf.js";import{c as t,i as n,n as r,o as i,r as a,t as o,u as s}from"./GlassCard-Dv4nyoKI.js";import{t as c}from"./proxy-CoL8c5gP.js";import{n as l,r as u,t as d}from"./index-6Rbx4EUm.js";var f=e(s(),1),p=r(),m=(e,t,n,r,i,a)=>{let o=new Date().getFullYear()-r,s=t*1e3,c=Math.round(e*i),l=0;l=o<=3||o<=5?s<=1e3?1.5:s<=1500?1.7:s<=1800?2.5:s<=2300?2.7:s<=3e3?3:3.6:s<=1e3?3:s<=1500?3.2:s<=1800?3.5:s<=2300?4.8:s<=3e3?5:5.7;let u=Math.round(s*l*a),d=t<=3&&n<=160,f=0;return f=d?o<=3?3400:5200:t<=1?o<=3?15e4:207200:t<=2?o<=3?3e5:528800:t<=3?o<=3?844800:1279e3:t<=3.5?o<=3?97e4:148e4:o<=3?1235e3:162e4,c+25e4+u+f+5e4},h={Toyota:[`Crown`,`Supra`,`Alphard`,`Mark II`,`Harrier`,`Camry`],Nissan:[`Skyline`,`GT-R`,`Silvia`,`Fairlady Z`,`Elgrand`],Lexus:[`LS`,`GS`,`IS`,`RX`],Subaru:[`WRX STI`,`Impreza`,`Forester`,`Legacy`],Honda:[`Civic Type R`,`NSX`,`Accord`,`Stepwgn`],Mazda:[`RX-7`,`RX-8`,`CX-5`,`Atenza`]},g=[{label:`Любой объём`,value:`all`},{label:`До 1.5 л`,value:`0-1.5`},{label:`1.6 л – 2.0 л`,value:`1.6-2.0`},{label:`2.1 л – 3.0 л`,value:`2.1-3.0`},{label:`Свыше 3.0 л`,value:`3.0+`}],_=[`Любая`,`5`,`4.5`,`4.0`,`3.5`,`R`],v=[{id:1,brand:`Toyota`,model:`Crown`,year:2020,engineVolume:2.5,enginePower:220,grade:`4.5`,priceJPY:28e5,img:`https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=600&q=80`},{id:2,brand:`Nissan`,model:`Skyline`,year:2019,engineVolume:3,enginePower:300,grade:`4.0`,priceJPY:32e5,img:`https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80`},{id:3,brand:`Lexus`,model:`LS`,year:2021,engineVolume:3.5,enginePower:315,grade:`5`,priceJPY:55e5,img:`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600&q=80`},{id:4,brand:`Subaru`,model:`WRX STI`,year:2018,engineVolume:2,enginePower:300,grade:`4.0`,priceJPY:21e5,img:`https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=600&q=80`},{id:5,brand:`Toyota`,model:`Alphard`,year:2022,engineVolume:2.5,enginePower:182,grade:`5`,priceJPY:42e5,img:`https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600&q=80`},{id:6,brand:`Honda`,model:`Civic Type R`,year:2021,engineVolume:2,enginePower:320,grade:`4.5`,priceJPY:38e5,img:`https://images.unsplash.com/photo-1600793575654-910699b5e4d4?w=600&q=80`}],y=i.div`
  margin-bottom: 32px;

  h1 {
    font-family: ${a.fonts.heading};
    font-size: ${a.fontSizes[`4xl`]};
    font-weight: 700;
    color: ${a.colors.text.primary};
    margin-bottom: 8px;
    letter-spacing: 0.04em;
  }

  p {
    color: ${a.colors.text.secondary};
    font-size: ${a.fontSizes.md};
  }
`,b=i(o)`
  padding: 24px;
  margin-bottom: 40px;
  background: rgba(20, 20, 20, 0.65);
  border: 1px solid rgba(255, 255, 255, 0.08);
`,x=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;

  @media (max-width: ${a.breakpoints.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${a.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`,S=i.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-size: ${a.fontSizes.xs};
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${a.colors.text.secondary};
  }

  select {
    width: 100%;
    padding: 12px 14px;
    background: rgba(10, 10, 10, 0.7);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: ${a.borderRadius.md};
    color: ${a.colors.text.primary};
    font-size: ${a.fontSizes.sm};
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease;
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 12px center;
    background-size: 14px;

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      border-color: rgba(255, 255, 255, 0.3);
    }

    &:focus {
      border-color: ${a.colors.accent.primary};
      box-shadow: 0 0 0 2px rgba(230, 0, 18, 0.2);
    }

    option {
      background: #121212;
      color: #fff;
    }
  }
`,C=i.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  gap: 12px;
`,w=i.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
  margin-bottom: 60px;
`,T=i(c(o))`
  padding: 0;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 190px;
    object-fit: cover;
    display: block;
  }

  .content {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .title {
    font-size: ${a.fontSizes.lg};
    font-weight: 600;
    margin-bottom: 8px;
    color: ${a.colors.text.primary};
  }

  .specs-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 16px;

    span {
      font-size: ${a.fontSizes.xs};
      background: rgba(255, 255, 255, 0.06);
      padding: 4px 8px;
      border-radius: ${a.borderRadius.sm};
      color: ${a.colors.text.secondary};
    }
  }

  .bottom-row {
    margin-top: auto;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  .price-box {
    .jpy {
      font-weight: 700;
      color: ${a.colors.accent.primary};
      font-size: ${a.fontSizes.lg};
    }
    .rub {
      font-size: ${a.fontSizes.xs};
      color: ${a.colors.text.secondary};
    }
  }
`,E=i.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: ${e=>e.$active?`#e60012`:`#ffffff`};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    background: rgba(0, 0, 0, 0.8);
  }
`,D=i(o)`
  text-align: center;
  padding: 60px 20px;
  color: ${a.colors.text.secondary};

  h3 {
    font-size: ${a.fontSizes.xl};
    margin-bottom: 8px;
    color: ${a.colors.text.primary};
  }
`,O=()=>{let e=u(),[r,i]=(0,f.useState)({jpy:.476,eur:88.89});(0,f.useEffect)(()=>{fetch(`https://www.cbr-xml-daily.ru/daily_json.js`).then(e=>e.json()).then(e=>{i({jpy:e.Valute.JPY.Value/e.Valute.JPY.Nominal,eur:e.Valute.EUR.Value})}).catch(e=>console.error(`Ошибка загрузки курсов ЦБ:`,e))},[]);let[a,o]=(0,f.useState)(`all`),[s,c]=(0,f.useState)(`all`),[O,k]=(0,f.useState)(`all`),[A,j]=(0,f.useState)(`all`),[M,N]=(0,f.useState)(`all`),[P,F]=(0,f.useState)(`Любая`),[I,L]=(0,f.useState)(()=>{let e=localStorage.getItem(`favorite_cars`);return e?JSON.parse(e):[]}),R=e=>{L(t=>{let n=t.includes(e)?t.filter(t=>t!==e):[...t,e];return localStorage.setItem(`favorite_cars`,JSON.stringify(n)),n})},z=(0,f.useMemo)(()=>{let e=new Date().getFullYear(),t=[];for(let n=e;n>=2e3;n--)t.push(n);return t},[]),B=(0,f.useMemo)(()=>a===`all`||!h[a]?[]:h[a],[a]),V=()=>{o(`all`),c(`all`),k(`all`),j(`all`),N(`all`),F(`Любая`)},H=(0,f.useMemo)(()=>v.filter(e=>!(a!==`all`&&e.brand!==a||s!==`all`&&e.model!==s||O!==`all`&&e.year<Number(O)||A!==`all`&&e.year>Number(A)||M!==`all`&&(M===`0-1.5`&&e.engineVolume>1.5||M===`1.6-2.0`&&(e.engineVolume<1.6||e.engineVolume>2)||M===`2.1-3.0`&&(e.engineVolume<2.1||e.engineVolume>3)||M===`3.0+`&&e.engineVolume<=3)||P!==`Любая`&&e.grade!==P)),[a,s,O,A,M,P]);return(0,p.jsxs)(`main`,{style:{padding:`120px 0 80px`},children:[(0,p.jsx)(t,{children:(0,p.jsx)(`title`,{children:`Каталог автомобилей — JDMVL`})}),(0,p.jsxs)(n,{children:[(0,p.jsxs)(y,{children:[(0,p.jsx)(`h1`,{children:`Автомобили с японских аукционов`}),(0,p.jsxs)(`p`,{children:[H.length,` автомобилей в каталоге`]})]}),(0,p.jsxs)(b,{children:[(0,p.jsxs)(x,{children:[(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Марка`}),(0,p.jsxs)(`select`,{value:a,onChange:e=>{o(e.target.value),c(`all`)},children:[(0,p.jsx)(`option`,{value:`all`,children:`Все марки`}),Object.keys(h).map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))]})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Модель`}),(0,p.jsxs)(`select`,{value:s,disabled:a===`all`,onChange:e=>c(e.target.value),children:[(0,p.jsx)(`option`,{value:`all`,children:a===`all`?`Сначала выберите марку`:`Все модели`}),B.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))]})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Год от`}),(0,p.jsxs)(`select`,{value:O,onChange:e=>k(e.target.value),children:[(0,p.jsx)(`option`,{value:`all`,children:`Любой`}),z.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))]})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Год до`}),(0,p.jsxs)(`select`,{value:A,onChange:e=>j(e.target.value),children:[(0,p.jsx)(`option`,{value:`all`,children:`Любой`}),z.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))]})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Объём двигателя`}),(0,p.jsx)(`select`,{value:M,onChange:e=>N(e.target.value),children:g.map(e=>(0,p.jsx)(`option`,{value:e.value,children:e.label},e.value))})]}),(0,p.jsxs)(S,{children:[(0,p.jsx)(`label`,{children:`Оценка аукциона`}),(0,p.jsx)(`select`,{value:P,onChange:e=>F(e.target.value),children:_.map(e=>(0,p.jsx)(`option`,{value:e,children:e},e))})]})]}),(0,p.jsx)(C,{children:(0,p.jsx)(l,{variant:`outline`,size:`sm`,onClick:V,children:`Сбросить параметры`})})]}),H.length>0?(0,p.jsx)(w,{children:(0,p.jsx)(d,{children:H.map(t=>{let n=I.includes(t.id),i=m(t.priceJPY,t.engineVolume,t.enginePower,t.year,r.jpy,r.eur);return(0,p.jsxs)(T,{layout:!0,initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.9},transition:{duration:.2},children:[(0,p.jsx)(E,{$active:n,onClick:()=>R(t.id),title:n?`Убрать из избранного`:`Добавить в избранное`,children:n?`♥`:`♡`}),(0,p.jsx)(`img`,{src:t.img,alt:`${t.brand} ${t.model}`}),(0,p.jsxs)(`div`,{className:`content`,children:[(0,p.jsxs)(`div`,{className:`title`,children:[t.brand,` `,t.model]}),(0,p.jsxs)(`div`,{className:`specs-row`,children:[(0,p.jsxs)(`span`,{children:[t.year,` г.`]}),(0,p.jsxs)(`span`,{children:[t.engineVolume,` л`]}),(0,p.jsxs)(`span`,{children:[`Оценка `,t.grade]})]}),(0,p.jsxs)(`div`,{className:`bottom-row`,children:[(0,p.jsxs)(`div`,{className:`price-box`,children:[(0,p.jsxs)(`div`,{className:`jpy`,children:[t.priceJPY.toLocaleString(`ru-RU`),` ¥`]}),(0,p.jsxs)(`div`,{className:`rub`,children:[`≈ `,i.toLocaleString(`ru-RU`),` ₽`]})]}),(0,p.jsx)(l,{size:`sm`,onClick:()=>e(`/catalog/${t.id}`),children:`Лот`})]})]})]},t.id)})})}):(0,p.jsxs)(D,{children:[(0,p.jsx)(`h3`,{children:`Автомобили не найдены`}),(0,p.jsx)(`p`,{children:`Попробуйте ослабить параметры фильтрации или сбросить фильтры.`}),(0,p.jsx)(l,{variant:`outline`,size:`sm`,style:{marginTop:`16px`},onClick:V,children:`Сбросить фильтры`})]})]})]})};export{O as Catalog,O as default};