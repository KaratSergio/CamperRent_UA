import{c as k,s as i,r as d,j as e,I as m,u as f,a as j,b as S,f as L}from"./index-06cd864f.js";import{B as b,S as w,C as T,a as F,b as V,c as I,N as E,d as W}from"./CampersListStyles-670ca38d.js";import{D as v}from"./CamperModalStyles-3cd6f543.js";const z=n=>n.campers.data||[],A=n=>n.filter,B=k([z,A],(n,s)=>{if(!n.length)return[];const{vehicleType:r,equipment:t,location:a}=s;return n.filter(o=>{const c=r?o.form===r:!0,h=t.length?t.every(x=>o.details[x]||o[x]):!0,l=a?o.location.includes(a):!0;return c&&h&&l})}),M=i.div`
  position: relative;
  display: inline-block;
`,R=i.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--text-gray-a);

  & span {
    color: var(--dark-blue);
  }
`,$=i.input`
  padding-left: 38px;
  margin: 8px 0 32px 0;
  width: 360px;
  height: 56px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  background-color: var(--light-gray);
  box-sizing: border-box;

  &:hover {
    border: 1px solid var(--text-gray);
  }
`,D=i.div`
  position: absolute;
  left: 8px;
  top: 34px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
`,N=({onChange:n})=>{const[s,r]=d.useState(""),t=a=>{const o=a.target.value;r(o),n(o)};return e.jsx(e.Fragment,{children:e.jsxs(R,{children:["Location",e.jsxs(M,{children:[e.jsx(D,{children:e.jsx(m,{id:"icon-location",width:20,height:20})}),e.jsx($,{name:"location",type:"text",placeholder:"Enter location...",value:s,onChange:t})]})]})})},q=i.input`
  display: none;

  &:checked + div {
    border-color: var(--red);
  }
`,O=i.label`
  display: flex;
  align-items: center;
`,K=i.h2`
  margin-top: 14px;
  margin-bottom: 24px;
  letter-spacing: 0.02em;
`,Y=i.div`
  width: 112px;
  height: 95px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 10px;
  border: 2px solid var(--light-gray-accent);

  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    border: 2px solid var(--red);
  }

  span {
    margin-top: 9px;
  }
`,_=i.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 24px 0 32px 0;
`,G={TV:"TV",kitchen:"Kitchen",shower:"Shower/WC",transmission:"Automatic",airConditioner:"AC"},H=({equipmentFilters:n,handleEquipmentChange:s})=>{const r=["airConditioner","transmission","kitchen","TV","shower"];return e.jsxs(e.Fragment,{children:[e.jsx(K,{children:"Vehicle equipment"}),e.jsx(v,{}),e.jsx(_,{children:r.map(t=>{let a,o,c;return t==="airConditioner"?(a="icon-ac",o="var(--dark-blue)",c="transparent"):t==="transmission"?a="icon-transmission":t==="kitchen"?a="icon-kitchen":t==="TV"?a="icon-tv":t==="shower"&&(a="icon-shower"),e.jsxs(O,{children:[e.jsx(q,{type:"checkbox",value:t,checked:n.includes(t),onChange:()=>s(t)}),e.jsxs(Y,{children:[e.jsx(m,{id:a,width:40,height:28,color:o,strokeColor:c}),e.jsx("span",{children:G[t]})]})]},t)})})]})},J=i.input`
  display: none;

  &:checked + div {
    border-color: var(--red);
  }
`,P=i.label`
  display: flex;
  align-items: center;
`,Q=i.h2`
  margin-bottom: 24px;
  letter-spacing: 0.02em;
`,U=i.div`
  width: 112px;
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border: 2px solid var(--red);
  }

  cursor: pointer;
  border-radius: 10px;
  border: 2px solid var(--light-gray-accent);
  transition:
    background-color 0.3s,
    border-color 0.3s;

  span {
    font-family: var(--font-medium);
    font-size: 16px;
    margin-top: 9px;
    text-align: center;
  }
`,X=i.div`
  display: flex;
  margin: 24px 0 64px 0;
  gap: 10px;
`,g={panelTruck:"Van",alcove:"Alcove",fullyIntegrated:"Fully Integrated"},Z=({vehicleType:n,handleVehicleTypeChange:s})=>e.jsxs(e.Fragment,{children:[e.jsx(Q,{children:"Vehicle type"}),e.jsx(v,{}),e.jsx(X,{children:Object.keys(g).map(r=>{const t=`icon-${r}`;return e.jsxs(P,{children:[e.jsx(J,{type:"radio",value:r,checked:n===r,onChange:()=>s(r)}),e.jsxs(U,{children:[e.jsx(m,{id:t,width:40,height:28,color:"var(--dark-blue)",strokeColor:"transparent"}),e.jsx("span",{children:g[r]})]})]},r)})})]}),ee=i.div`
  margin-right: 64px;
  width: 360px;
`,te=i.h3`
  font-size: 16px;
`,ne=()=>{const n=f(),[s,r]=d.useState([]),[t,a]=d.useState(null),[o,c]=d.useState(""),h=p=>{r(u=>u.includes(p)?u.filter(y=>y!==p):[...u,p])},l=p=>{a(p)},x=()=>{n(j({equipment:s,vehicleType:t,location:o}))},C=p=>{c(p)};return e.jsxs(ee,{children:[e.jsx(N,{onChange:C}),e.jsx(te,{children:"Filters"}),e.jsx(H,{equipmentFilters:s,handleEquipmentChange:h}),e.jsx(Z,{vehicleType:t,handleVehicleTypeChange:l}),e.jsx(b,{width:"173px",onClick:x,children:"Search"})]})},re=()=>{const n=f(),s=S(B),[r,t]=d.useState(4),[a,o]=d.useState(!1);d.useEffect(()=>{o(!0),n(j({equipment:[],vehicleType:null,location:""})),n(L()).then(()=>o(!1)).catch(()=>o(!1))},[n]);const c=()=>{t(l=>l+4)},h=s.length-r;return d.useEffect(()=>{t(4)},[s]),e.jsxs(w,{children:[e.jsx(ne,{}),e.jsxs(T,{children:[e.jsx(F,{children:e.jsx(V,{color:"var(--dark-blue)",size:90,loading:a})}),e.jsx(I,{children:s.length===0?e.jsx(E,{children:e.jsx("p",{children:"No campers found matching the criteria."})}):s.slice(0,r).map(l=>e.jsx(W,{camper:l},l._id))}),h>0&&e.jsx(b,{width:"175px",border:"var(--light-gray-accent)",background:"transparent",color:"var(--dark-blue)",hover:"var(--light-gray-accent)",onClick:c,children:"Load more"})]})]})},ae=()=>e.jsx("div",{children:e.jsx(re,{})});export{ae as default};
