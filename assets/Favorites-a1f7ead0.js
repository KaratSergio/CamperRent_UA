import{c as a,a as p,r as i,j as r}from"./index-24ec6a52.js";import{S as m,C as d,c as f,N as C,d as x}from"./CampersListStyles-719adb78.js";import"./CamperModalStyles-2a195fee.js";const o=e=>e.campers,j=a(o,e=>e.data);a(o,e=>e.isLoading);a(o,e=>e.error);const u=()=>{const e=p(j),[c,l]=i.useState([]);return i.useEffect(()=>{const s=Object.keys(localStorage).filter(t=>t.startsWith("favorite_")&&localStorage.getItem(t)==="true"),n=e.filter(t=>s.includes(`favorite_${t._id}`));l(n)},[e]),r.jsx(m,{children:r.jsx(d,{children:r.jsx(f,{children:c.length===0?r.jsx(C,{children:r.jsx("p",{children:"No favorite campers found."})}):c.map(s=>r.jsx(x,{camper:s},s._id))})})})},g=()=>r.jsx(r.Fragment,{children:r.jsx(u,{})});export{g as default};