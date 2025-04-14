import{j as x,c as s,o as a,a as t,k as l,l as g,t as y,n as p,p as B,d as f,i as D,e as O,g as R,b as n,u as m,F as w,h as H,w as V,q as $,v as k}from"./Bm71w8Yo.js";import{_ as N}from"./DUt2CItK.js";const T={class:"min-h-screen flex items-center relative overflow-hidden"},j=["src","loading"],q={class:"container mx-auto px-4 relative"},F={class:"text-4xl md:text-6xl font-serif mb-6 text-white",initial:{opacity:0,y:40},enter:{opacity:1,y:0,transition:{duration:1200,ease:"easeOut"}}},I={class:"text-xl md:text-2xl max-w-2xl mb-8 text-white",initial:{opacity:0,y:40},enter:{opacity:1,y:0,transition:{duration:1200,delay:200,ease:"easeOut"}}},L={__name:"HeroSection",props:{isHydrated:Boolean,heroImage:{type:String,default:"/img/placeholders/minimalist-indoor-scene.jpg"},onClickDiscover:{type:Function,default:()=>{}}},setup(i){const r={headline:"More Than a Luxury Vacation",description:"A luxury vacation can help you rest and recharge. But why stop there? Go beyond. Renew and transform your life with:"};return(o,e)=>{const c=x("motion");return a(),s("section",T,[t("img",{src:i.heroImage,alt:"Luxury retreat location",class:"absolute inset-0 w-full h-full object-cover",loading:i.isHydrated?"lazy":void 0},null,8,j),e[5]||(e[5]=t("div",{class:"absolute inset-0 bg-black/60"},null,-1)),t("div",q,[l((a(),s("h1",F,[g(y(r.headline),1)])),[[c]]),l((a(),s("p",I,[g(y(r.description),1),e[1]||(e[1]=t("br",null,null,-1)),e[2]||(e[2]=t("br",null,null,-1)),e[3]||(e[3]=t("em",null,"A WaveSycle Retreat.",-1))])),[[c]]),l((a(),s("button",{onClick:e[0]||(e[0]=(...d)=>i.onClickDiscover&&i.onClickDiscover(...d)),class:"bg-primary-bg text-primary-text border border-secondary-bg px-8 py-3 rounded-full text-lg font-medium hover:bg-primary-text hover:border-primary-text hover:text-primary-bg transition-colors",initial:{opacity:0,y:40},enter:{opacity:1,y:0,transition:{duration:1200,delay:400,ease:"easeOut"}}},e[4]||(e[4]=[g(" Discover More ")]))),[[c]])])])}}},A=["initial","visible","delay"],E={class:"mb-6"},z=["src","alt"],M={class:"text-2xl font-serif mb-4 text-primary-text"},J={class:"text-secondary-text"},W={__name:"FeatureCard",props:{isHydrated:Boolean,title:String,description:String,image:String,delay:Number},setup(i){return(r,o)=>{const e=x("motion");return l((a(),s("div",{class:p(["text-center",{"opacity-0":i.isHydrated}]),initial:i.isHydrated?{opacity:0,y:60}:{},visible:{opacity:1,y:0,transition:{duration:1200,delay:i.delay,ease:"easeOut"}},delay:i.delay},[t("div",E,[t("img",{src:i.image,alt:i.title,class:"w-full h-64 object-cover rounded-lg shadow-xl",loading:"lazy"},null,8,z)]),t("h3",M,y(i.title),1),t("p",J,y(i.description),1)],10,A)),[[e]])}}},Y={class:"py-24 bg-secondary-bg"},G={class:"container mx-auto px-4"},P=["initial"],K={__name:"ReleasingSection",props:{isHydrated:Boolean},setup(i){return(r,o)=>{const e=x("motion");return a(),s("section",Y,[t("div",G,[l((a(),s("div",{class:p(["max-w-3xl mx-auto text-center",{"opacity-0":i.isHydrated}]),initial:i.isHydrated?{opacity:0,y:60}:{},visible:{opacity:1,y:0,transition:{duration:1200,ease:"easeOut"}},delay:100},o[0]||(o[0]=[B('<h2 class="text-3xl md:text-4xl font-serif mb-12 text-primary-text">Releasing Difficult Emotions</h2><blockquote class="text-xl text-secondary-text mb-8 italic"> &quot;After years of needless pain and struggle, I finally found a way to let it all go. Now I live my life to help others discover the simplicity of releasing, and to master the subtleties of it. Come, join us at our next retreat!&quot; </blockquote><cite class="block"><span class="text-primary-text font-medium">Erinala</span><br><span class="text-secondary-text">Director of WaveSycle, B.V.</span></cite>',3)]),10,P)),[[e]])])])}}},Q={class:"py-24 bg-primary-bg"},U={class:"container mx-auto px-4 text-center"},X=["initial"],Z={__name:"CTASection",props:{isHydrated:Boolean},setup(i){return(r,o)=>{const e=x("motion");return a(),s("section",Q,[t("div",U,[l((a(),s("div",{class:p({"opacity-0":i.isHydrated}),initial:i.isHydrated?{opacity:0,y:60}:{},visible:{opacity:1,y:0,transition:{duration:1200,ease:"easeOut"}},delay:100},o[0]||(o[0]=[t("h2",{class:"text-3xl md:text-4xl font-serif mb-6 text-primary-text"},"Ready to Begin Your Journey?",-1),t("p",{class:"text-xl text-secondary-text mb-8 max-w-2xl mx-auto"}," Join our next retreat and discover what true renewal feels like. Limited spots available to ensure an intimate, transformative experience. ",-1),t("button",{class:"bg-primary-text text-primary-bg border border-secondary-bg px-8 py-3 rounded-full text-lg font-medium hover:bg-accent hover:border-accent-hover transition-colors"}," Reserve Your Spot ",-1)]),10,X)),[[e]])])])}}},tt={key:0,class:"hidden"},et={class:"py-24 bg-gray-900"},it={class:"container mx-auto px-4"},ot={class:"grid grid-cols-1 md:grid-cols-3 gap-12"},st={id:"features",class:"py-24 bg-primary-bg"},at={class:"container mx-auto px-4"},nt={class:"grid grid-cols-1 md:grid-cols-3 gap-12"},rt={class:"min-h-screen bg-primary-bg"},ut={__name:"index",setup(i){const r=f(!1),o=f(!1);o.value=D("isHydrated",f(!1)).value;const e=()=>{const d=document.getElementById("features");d&&d.scrollIntoView({behavior:"smooth",block:"start"})};O(()=>{r.value=!0,setTimeout(()=>{o.value=!0},50)});const c=[{title:"Beyond Relaxation",description:"Our retreats go deeper than surface-level relaxation, addressing the root causes of burnout.",image:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800"},{title:"Holistic Transformation",description:"Combine luxury accommodations with transformative practices, including executive coaching, mindfulness training, and stress management techniques.",image:"https://images.unsplash.com/photo-1507494924047-60b8ee826ca9?auto=format&fit=crop&w=800"},{title:"Lasting Change",description:"Leave with practical tools and a renewed understanding of your own self, to guide you as return to a high-pressure business environment.",image:"https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?auto=format&fit=crop&w=800"}];return(d,lt)=>{const h=L,_=W,v=K,b=Z,C=N;return a(),s("div",null,[m(r)?R("",!0):(a(),s("div",tt,[n(h,{isHydrated:!1,onClickDiscover:e}),t("section",et,[t("div",it,[t("div",ot,[(a(),s(w,null,H(c,u=>n(_,$({key:u.title,ref_for:!0},u,{isHydrated:!1}),null,16)),64))])])]),n(v,{isHydrated:!1}),n(b,{isHydrated:!1})])),n(C,null,{default:V(()=>[l(t("div",{class:p(["transition-opacity duration-1000",{"opacity-0":!m(o),"opacity-100":m(o)}])},[n(h,{isHydrated:!0,onClickDiscover:e}),t("section",st,[t("div",at,[t("div",nt,[(a(),s(w,null,H(c,(u,S)=>n(_,$({key:u.title,ref_for:!0},u,{isHydrated:!0,delay:S*300}),null,16,["delay"])),64))])])]),n(v,{isHydrated:!0}),n(b,{isHydrated:!0})],2),[[k,m(o)]]),l(t("div",rt,null,512),[[k,!m(o)]])]),_:1})])}}};export{ut as default};
