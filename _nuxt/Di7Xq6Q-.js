import{x as f,d as u,e as d,c as i,S as b}from"./DCTJvt1v.js";const m=Symbol.for("nuxt:client-only"),h=f({name:"ClientOnly",inheritAttrs:!1,props:["fallback","placeholder","placeholderTag","fallbackTag"],setup(k,{slots:e,attrs:c}){const l=u(!1);return d(()=>{l.value=!0}),b(m,!0),a=>{var t;if(l.value)return(t=e.default)==null?void 0:t.call(e);const n=e.fallback||e.placeholder;if(n)return n();const r=a.fallback||a.placeholder||"",o=a.fallbackTag||a.placeholderTag||"span";return i(o,c,r)}}});export{h as _};
