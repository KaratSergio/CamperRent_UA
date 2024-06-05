import{p as o,g as n}from"./index-BsdGWl81.js";const e=o.div.attrs(t=>({modalOpen:t.modalOpen}))`
  display: ${t=>t.$modalOpen?"flex":"none"};
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  overflow: auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`,a=o.div`
  position: sticky;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  position: relative;
  padding: 40px 16px 40px 40px;
  max-width: 982px;
  background-color: var(--white);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  overflow-y: auto;
`,p=o.button`
  position: absolute;
  top: 34px;
  right: 40px;
  font-size: 32px;
  background: none;
  border: none;
`,r=o.button`
  position: relative;
  font-size: 20px;
  font-family: var(--font-semibold);
  background: none;
  border: none;
  padding: 0;

  ${t=>t.$isActive&&n`
      &::after {
        content: '';
        position: absolute;
        bottom: -24px;
        left: 0;
        width: 100%;
        height: 6px;
        z-index: 1;
        background-color: var(--red);
      }
    `}
`,s=o.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`,d=o.div`
  height: 2px;
  background-color: var(--light-gray-accent);
  width: 100%;
`,l=o.p`
  font-size: 16px;
  letter-spacing: 0.03em;
  line-height: 1.5em;
`,x=o.div`
  margin: 24px 0 44px 0;
  max-height: 400px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 20px;
`,c=o.div`
  margin-bottom: 20.6px;
  display: flex;
  gap: 40px;
`,g=o.div`
  display: flex;
  gap: 24px;
  margin-top: 44px;
  border-radius: 10px;
  display: ${({$active:t})=>t?"block":"none"};
  width: 100%;
`,f=o.div`
  display: flex;
  width: 900px;
`,u=o.div`
  display: flex;
  gap: 16px;
  margin: 8px 0 16px 0;
  font-family: var(--font-semibold);
`,m=o.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: '';
    position: absolute;
    bottom: -1px;
    left: 24px;
    width: 82%;
    height: 2px;
    background-color: currentColor;
  }
`;export{c as B,p as C,d as D,e as M,s as P,u as R,x as S,a,m as b,l as c,r as d,g as e,f};
