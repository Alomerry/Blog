import{U as F,V as R,W as j,_ as D,f as N,H as z,u as C,G as I,X as q,r as T,o as r,c as o,h as e,q as U,s as m,b as _,F as w,D as A,x as V,Y as Q,t as p,d as f,e as O,j as M,Q as W,i as P,E as S,w as X,O as Y,B as Z,L as J,M as K,Z as ee,k as te,y as x,g as ae}from"./app.1f640783.js";import{f as se}from"./resolveTime.e2cf2adb.js";const ne=c=>!F(c)||/github\.com/.test(c)?"GitHub":/bitbucket\.org/.test(c)?"Bitbucket":/gitlab\.com/.test(c)?"GitLab":/gitee\.com/.test(c)?"Gitee":null,re={GitHub:":repo/edit/:branch/:path",GitLab:":repo/-/edit/:branch/:path",Gitee:":repo/edit/:branch/:path",Bitbucket:":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"},oe=({docsRepo:c,editLinkPattern:u})=>{if(u)return u;const d=ne(c);return d!==null?re[d]:null},ie=({docsRepo:c,docsBranch:u,docsDir:d,filePathRelative:t,editLinkPattern:g})=>{if(!t)return null;const l=oe({docsRepo:c,editLinkPattern:g});return l?l.replace(/:repo/,F(c)?c:`https://github.com/${c}`).replace(/:branch/,u).replace(/:path/,R(`${j(d)}/${t}`)):null},ce={class:"article-header-content"},le={key:0,class:"article-tags"},ue=["onClick"],de={class:"article-title"},me={key:1,class:"article-subtitle"},he={class:"article-icons"},pe={key:0,class:"article-icon"},_e={key:1,class:"article-icon"},ge={key:2,class:"article-icon"},ve={key:1,class:"article-image-credit"},fe=["href"],ke={key:1},be=N({__name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(c){const u=z(),d=C(),t=I(),g=M(),l=q(),b=s=>{u.currentRoute.value.path!==l.value.map[s].path&&u.push({path:l.value.map[s].path})},v=()=>{const s={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(s.backgroundImage=`url(${W(a(t.value.headerImage))})`),s};function a(s){if(typeof s=="string"&&(s||"").split("?").length>=2){const k=(s||"").split("?")[0],n=(s||"").split("?")[1].split("=")[1],i=Math.floor(Math.random()*n+1);return k+"/"+i+".jpg"}return s}const h=d.value.personalInfo;return(s,k)=>{const n=T("VIcon");return r(),o("div",{class:V(["article-header",{"use-image":e(t).useHeaderImage}]),style:U(v())},[e(t).useHeaderImage&&e(t).headerMask?(r(),o("div",{key:0,class:"article-header-mask",style:U({background:e(t).headerMask})},null,4)):m("",!0),_("div",ce,[e(t).tags?(r(),o("div",le,[(r(!0),o(w,null,A(e(t).tags,(i,L)=>(r(),o("span",{key:L,class:V(["article-tag",{active:c.currentTag==i}]),onClick:Q(y=>b(i),["stop"])},p(i),11,ue))),128))])):m("",!0),_("h1",de,p(e(t).title),1),e(t).subtitle?(r(),o("p",me,p(e(t).subtitle),1)):m("",!0),_("div",he,[e(t).author||e(h).name?(r(),o("div",pe,[f(n,{name:"fa-regular-user"}),_("span",null,p(e(t).author||e(h).name),1)])):m("",!0),e(t).date?(r(),o("div",_e,[f(n,{name:"fa-regular-calendar"}),_("span",null,p(e(se)(e(t).date)),1)])):m("",!0),e(g).readingTime?(r(),o("div",ge,[f(n,{name:"ri-timer-line"}),_("span",null,p(e(g).readingTime.minutes)+" min",1)])):m("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(r(),o("div",ve,[O(p(e(d).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(r(),o("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},p(e(t).headerImageCredit),9,fe)):(r(),o("span",ke,p(e(t).headerImageCredit),1))])):m("",!0)],6)}}});var je=D(be,[["__file","ArticleHeader.vue"]]);const Le={class:"page-meta"},ye={key:0,class:"meta-item edit-link"},$e={key:1,class:"meta-item last-updated"},Ce={class:"meta-item-label"},Ie={class:"meta-item-info"},Pe={key:2,class:"meta-item contributors"},Te={class:"meta-item-label"},xe={class:"meta-item-info"},we=["title"],Me=O(", "),De=N({__name:"PageMeta",setup(c){const u=()=>{const a=C(),h=M(),s=I();return P(()=>{var H,B,E;if(!((B=(H=s.value.editLink)!=null?H:a.value.editLink)!=null?B:!0))return null;const{repo:n,docsRepo:i=n,docsBranch:L="main",docsDir:y="",editLinkText:$}=a.value;if(!i)return null;const G=ie({docsRepo:i,docsBranch:L,docsDir:y,filePathRelative:h.value.filePathRelative,editLinkPattern:(E=s.value.editLinkPattern)!=null?E:a.value.editLinkPattern});return G?{text:$!=null?$:"Edit this page",link:G}:null})},d=()=>{const a=C(),h=M(),s=I();return P(()=>{var i,L,y,$;return!((L=(i=s.value.lastUpdated)!=null?i:a.value.lastUpdated)!=null?L:!0)||!((y=h.value.git)!=null&&y.updatedTime)?null:new Date(($=h.value.git)==null?void 0:$.updatedTime).toLocaleString()})},t=()=>{const a=C(),h=M(),s=I();return P(()=>{var n,i,L,y;return((i=(n=s.value.contributors)!=null?n:a.value.contributors)!=null?i:!0)&&(y=(L=h.value.git)==null?void 0:L.contributors)!=null?y:null})},g=C(),l=u(),b=d(),v=t();return(a,h)=>{const s=T("VIcon"),k=T("ClientOnly");return r(),o("footer",Le,[e(l)?(r(),o("div",ye,[f(s,{name:"fa-pencil-alt"}),f(S,{class:"meta-item-label",item:e(l)},null,8,["item"])])):m("",!0),e(b)?(r(),o("div",$e,[_("span",Ce,p(e(g).lastUpdatedText)+": ",1),f(k,null,{default:X(()=>[_("span",Ie,p(e(b)),1)]),_:1})])):m("",!0),e(v)&&e(v).length?(r(),o("div",Pe,[_("span",Te,p(e(g).contributorsText)+": ",1),_("span",xe,[(r(!0),o(w,null,A(e(v),(n,i)=>(r(),o(w,{key:i},[_("span",{class:"contributor",title:`email: ${n.email}`},p(n.name),9,we),i!==e(v).length-1?(r(),o(w,{key:0},[Me],64)):m("",!0)],64))),128))])])):m("",!0)])}}});var Ne=D(De,[["__file","PageMeta.vue"]]);const Se={key:0,class:"page-nav"},Ge={class:"inner"},He={key:0,class:"prev"},Be={key:1,class:"next"},Ee=N({__name:"PageNav",setup(c){const u=a=>a===!1?null:J(a)?K(a):ee(a)?a:!1,d=(a,h,s)=>{const k=a.findIndex(n=>n.link===h);if(k!==-1){const n=a[k+s];return n!=null&&n.link?n:null}for(const n of a)if(n.children){const i=d(n.children,h,s);if(i)return i}return null},t=I(),g=Y(),l=Z(),b=P(()=>{const a=u(t.value.prev);return a!==!1?a:d(g.value,l.path,-1)}),v=P(()=>{const a=u(t.value.next);return a!==!1?a:d(g.value,l.path,1)});return(a,h)=>e(b)||e(v)?(r(),o("nav",Se,[_("p",Ge,[e(b)?(r(),o("span",He,[f(S,{item:e(b)},null,8,["item"])])):m("",!0),e(v)?(r(),o("span",Be,[f(S,{item:e(v)},null,8,["item"])])):m("",!0)])])):m("",!0)}});var Ue=D(Ee,[["__file","PageNav.vue"]]);const Ve={class:"page"},Fe={class:"theme-gungnir-content"},Ae=N({__name:"Page",setup(c){const u=C(),d=I(),{isDarkMode:t}=te(),g=P(()=>t.value?u.value.giscusDarkTheme:u.value.giscusLightTheme);return(l,b)=>{const v=T("Content"),a=T("GungnirGiscus");return r(),o("main",Ve,[x(l.$slots,"top"),_("div",Fe,[x(l.$slots,"content-top"),f(v),x(l.$slots,"content-bottom")]),f(Ne),f(Ue),x(l.$slots,"bottom"),e(d).giscus!==!1?(r(),ae(a,{key:0,theme:e(g)},null,8,["theme"])):m("",!0)])}}});var ze=D(Ae,[["__file","Page.vue"]]);export{je as A,ze as P};