import{j as a,r as p,R as O,W as Er}from"./app-AXS25nOf.js";import{c as B,a as bn,b as Tr,u as We,B as Fe}from"./button-xOcp6DYA.js";import{c as _r,u as Ve,a as Pr,P as Q,b as Ir,d as hn,e as xn,f as yn,g as jn,_ as Z,h as ee,i as fr,j as mr}from"./index-CmEqkqbF.js";import{C as An}from"./index-BTBG5xfl.js";import{C as pe,a as ue,b as fe,d as me}from"./card-q3sAmbeN.js";import{G as Cn,a as Dn,b as wn,Y as En}from"./FormSelects-De0UkpVB.js";import{J as Nr,R as Tn}from"./RegiwebLayout-D5K44ppe.js";import{C as f,F as m,P as b,Y as _n}from"./CustomFormField-CGdMwklQ.js";import{I as Oe}from"./InfoBadge-FU4yjmE8.js";import{P as Pn}from"./PagePrimaryTitle-1jvJStgH.js";import{c as Or}from"./createLucideIcon-C8pU7Y8G.js";import"./dropdown-menu-BRNE1Rf4.js";import"./index-ueuYHyUX.js";/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=Or("ArrowUpDown",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=Or("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),On=bn("grid grid-cols-1 gap-2",{variants:{cols:{1:"md:grid-cols-1",2:"md:grid-cols-2",3:"md:grid-cols-3",4:"md:grid-cols-4",5:"md:grid-cols-5",6:"md:grid-cols-6"}},defaultVariants:{cols:2}});function S({children:e,cols:r,className:n}){return a.jsx("div",{className:B(On({cols:r,className:n})),children:e})}var Ge="Collapsible",[Rn,Rr]=_r(Ge),[Fn,Ye]=Rn(Ge),Fr=p.forwardRef((e,r)=>{const{__scopeCollapsible:n,open:i,defaultOpen:t,disabled:o,onOpenChange:s,...d}=e,[l=!1,h]=Ve({prop:i,defaultProp:t,onChange:s});return a.jsx(Fn,{scope:n,disabled:o,contentId:Pr(),open:l,onOpenToggle:p.useCallback(()=>h(x=>!x),[h]),children:a.jsx(Q.div,{"data-state":Je(l),"data-disabled":o?"":void 0,...d,ref:r})})});Fr.displayName=Ge;var Sr="CollapsibleTrigger",kr=p.forwardRef((e,r)=>{const{__scopeCollapsible:n,...i}=e,t=Ye(Sr,n);return a.jsx(Q.button,{type:"button","aria-controls":t.contentId,"aria-expanded":t.open||!1,"data-state":Je(t.open),"data-disabled":t.disabled?"":void 0,disabled:t.disabled,...i,ref:r,onClick:Ir(e.onClick,t.onOpenToggle)})});kr.displayName=Sr;var qe="CollapsibleContent",zr=p.forwardRef((e,r)=>{const{forceMount:n,...i}=e,t=Ye(qe,e.__scopeCollapsible);return a.jsx(hn,{present:n||t.open,children:({present:o})=>a.jsx(Sn,{...i,ref:r,present:o})})});zr.displayName=qe;var Sn=p.forwardRef((e,r)=>{const{__scopeCollapsible:n,present:i,children:t,...o}=e,s=Ye(qe,n),[d,l]=p.useState(i),h=p.useRef(null),x=Tr(r,h),v=p.useRef(0),w=v.current,g=p.useRef(0),y=g.current,C=s.open||d,E=p.useRef(C),P=p.useRef();return p.useEffect(()=>{const j=requestAnimationFrame(()=>E.current=!1);return()=>cancelAnimationFrame(j)},[]),xn(()=>{const j=h.current;if(j){P.current=P.current||{transitionDuration:j.style.transitionDuration,animationName:j.style.animationName},j.style.transitionDuration="0s",j.style.animationName="none";const F=j.getBoundingClientRect();v.current=F.height,g.current=F.width,E.current||(j.style.transitionDuration=P.current.transitionDuration,j.style.animationName=P.current.animationName),l(i)}},[s.open,i]),a.jsx(Q.div,{"data-state":Je(s.open),"data-disabled":s.disabled?"":void 0,id:s.contentId,hidden:!C,...o,ref:x,style:{"--radix-collapsible-content-height":w?`${w}px`:void 0,"--radix-collapsible-content-width":y?`${y}px`:void 0,...e.style},children:C&&t})});function Je(e){return e?"open":"closed"}var kn=Fr,zn=kr,Ln=zr,M="Accordion",Mn=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Xe,Un,$n]=yn(M),[ye,co]=_r(M,[$n,Rr]),Qe=Rr(),Lr=O.forwardRef((e,r)=>{const{type:n,...i}=e,t=i,o=i;return a.jsx(Xe.Provider,{scope:e.__scopeAccordion,children:n==="multiple"?a.jsx(Wn,{...o,ref:r}):a.jsx(Bn,{...t,ref:r})})});Lr.displayName=M;var[Mr,Kn]=ye(M),[Ur,Hn]=ye(M,{collapsible:!1}),Bn=O.forwardRef((e,r)=>{const{value:n,defaultValue:i,onValueChange:t=()=>{},collapsible:o=!1,...s}=e,[d,l]=Ve({prop:n,defaultProp:i,onChange:t});return a.jsx(Mr,{scope:e.__scopeAccordion,value:d?[d]:[],onItemOpen:l,onItemClose:O.useCallback(()=>o&&l(""),[o,l]),children:a.jsx(Ur,{scope:e.__scopeAccordion,collapsible:o,children:a.jsx($r,{...s,ref:r})})})}),Wn=O.forwardRef((e,r)=>{const{value:n,defaultValue:i,onValueChange:t=()=>{},...o}=e,[s=[],d]=Ve({prop:n,defaultProp:i,onChange:t}),l=O.useCallback(x=>d((v=[])=>[...v,x]),[d]),h=O.useCallback(x=>d((v=[])=>v.filter(w=>w!==x)),[d]);return a.jsx(Mr,{scope:e.__scopeAccordion,value:s,onItemOpen:l,onItemClose:h,children:a.jsx(Ur,{scope:e.__scopeAccordion,collapsible:!0,children:a.jsx($r,{...o,ref:r})})})}),[Vn,je]=ye(M),$r=O.forwardRef((e,r)=>{const{__scopeAccordion:n,disabled:i,dir:t,orientation:o="vertical",...s}=e,d=O.useRef(null),l=Tr(d,r),h=Un(n),v=jn(t)==="ltr",w=Ir(e.onKeyDown,g=>{var G;if(!Mn.includes(g.key))return;const y=g.target,C=h().filter(L=>{var U;return!((U=L.ref.current)!=null&&U.disabled)}),E=C.findIndex(L=>L.ref.current===y),P=C.length;if(E===-1)return;g.preventDefault();let j=E;const F=0,W=P-1,$=()=>{j=E+1,j>W&&(j=F)},V=()=>{j=E-1,j<F&&(j=W)};switch(g.key){case"Home":j=F;break;case"End":j=W;break;case"ArrowRight":o==="horizontal"&&(v?$():V());break;case"ArrowDown":o==="vertical"&&$();break;case"ArrowLeft":o==="horizontal"&&(v?V():$());break;case"ArrowUp":o==="vertical"&&V();break}const z=j%P;(G=C[z].ref.current)==null||G.focus()});return a.jsx(Vn,{scope:n,disabled:i,direction:t,orientation:o,children:a.jsx(Xe.Slot,{scope:n,children:a.jsx(Q.div,{...s,"data-orientation":o,ref:l,onKeyDown:i?void 0:w})})})}),ve="AccordionItem",[Gn,Ze]=ye(ve),Kr=O.forwardRef((e,r)=>{const{__scopeAccordion:n,value:i,...t}=e,o=je(ve,n),s=Kn(ve,n),d=Qe(n),l=Pr(),h=i&&s.value.includes(i)||!1,x=o.disabled||e.disabled;return a.jsx(Gn,{scope:n,open:h,disabled:x,triggerId:l,children:a.jsx(kn,{"data-orientation":o.orientation,"data-state":Yr(h),...d,...t,ref:r,disabled:x,open:h,onOpenChange:v=>{v?s.onItemOpen(i):s.onItemClose(i)}})})});Kr.displayName=ve;var Hr="AccordionHeader",Br=O.forwardRef((e,r)=>{const{__scopeAccordion:n,...i}=e,t=je(M,n),o=Ze(Hr,n);return a.jsx(Q.h3,{"data-orientation":t.orientation,"data-state":Yr(o.open),"data-disabled":o.disabled?"":void 0,...i,ref:r})});Br.displayName=Hr;var Se="AccordionTrigger",Wr=O.forwardRef((e,r)=>{const{__scopeAccordion:n,...i}=e,t=je(M,n),o=Ze(Se,n),s=Hn(Se,n),d=Qe(n);return a.jsx(Xe.ItemSlot,{scope:n,children:a.jsx(zn,{"aria-disabled":o.open&&!s.collapsible||void 0,"data-orientation":t.orientation,id:o.triggerId,...d,...i,ref:r})})});Wr.displayName=Se;var Vr="AccordionContent",Gr=O.forwardRef((e,r)=>{const{__scopeAccordion:n,...i}=e,t=je(M,n),o=Ze(Vr,n),s=Qe(n);return a.jsx(Ln,{role:"region","aria-labelledby":o.triggerId,"data-orientation":t.orientation,...s,...i,ref:r,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Gr.displayName=Vr;function Yr(e){return e?"open":"closed"}var Yn=Lr,qn=Kr,Jn=Br,qr=Wr,Jr=Gr;const Xn=Yn,ke=p.forwardRef(({className:e,...r},n)=>a.jsx(qn,{ref:n,className:B("border-b",e),...r}));ke.displayName="AccordionItem";const ze=p.forwardRef(({className:e,children:r,...n},i)=>a.jsx(Jn,{className:"flex",children:a.jsxs(qr,{ref:i,className:B("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",e),...n,children:[r,a.jsx(An,{className:"h-4 w-4 shrink-0 transition-transform duration-200"})]})}));ze.displayName=qr.displayName;const Le=p.forwardRef(({className:e,children:r,...n},i)=>a.jsx(Jr,{ref:i,className:"overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...n,children:a.jsx("div",{className:B("pb-4 pt-0",e),children:r})}));Le.displayName=Jr.displayName;var Qn="Separator",gr="horizontal",Zn=["horizontal","vertical"],Xr=p.forwardRef((e,r)=>{const{decorative:n,orientation:i=gr,...t}=e,o=et(i)?i:gr,d=n?{role:"none"}:{"aria-orientation":o==="vertical"?o:void 0,role:"separator"};return a.jsx(Q.div,{"data-orientation":o,...d,...t,ref:r})});Xr.displayName=Qn;function et(e){return Zn.includes(e)}var Qr=Xr;const Me=p.forwardRef(({className:e,orientation:r="horizontal",decorative:n=!0,...i},t)=>a.jsx(Qr,{ref:t,decorative:n,orientation:r,className:B("shrink-0 bg-border",r==="horizontal"?"h-[1px] w-full":"h-full w-[1px]",e),...i}));Me.displayName=Qr.displayName;function rt({route:e}){const{t:r}=We(),{data:n,setData:i,errors:t,processing:o,patch:s,reset:d}=Er({clave:"",clave_confirmation:""});return a.jsxs("div",{className:"mt-5 space-y-4",children:[a.jsx("h3",{className:"text-2xl font-semibold leading-none tracking-tight",children:r("Cambiar contraseña")}),a.jsx(f,{fieldType:m.INPUT,data:n,setData:i,label:r("Nueva contraseña"),name:"clave",error:t.clave,type:"password"}),a.jsx(f,{fieldType:m.INPUT,data:n,setData:i,label:r("Confirmar nueva contraseña"),name:"clave_confirmation",error:t.clave_confirmation,type:"password"}),a.jsx(Fe,{onClick:()=>{s(e,{preserveScroll:!0,onSuccess:()=>{Nr.success(r("Contraseña cambiada")),d()}})},disabled:o,size:"sm",children:r("Cambiar contraseña")})]})}var nt=new Map([["aac","audio/aac"],["abw","application/x-abiword"],["arc","application/x-freearc"],["avif","image/avif"],["avi","video/x-msvideo"],["azw","application/vnd.amazon.ebook"],["bin","application/octet-stream"],["bmp","image/bmp"],["bz","application/x-bzip"],["bz2","application/x-bzip2"],["cda","application/x-cdf"],["csh","application/x-csh"],["css","text/css"],["csv","text/csv"],["doc","application/msword"],["docx","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],["eot","application/vnd.ms-fontobject"],["epub","application/epub+zip"],["gz","application/gzip"],["gif","image/gif"],["heic","image/heic"],["heif","image/heif"],["htm","text/html"],["html","text/html"],["ico","image/vnd.microsoft.icon"],["ics","text/calendar"],["jar","application/java-archive"],["jpeg","image/jpeg"],["jpg","image/jpeg"],["js","text/javascript"],["json","application/json"],["jsonld","application/ld+json"],["mid","audio/midi"],["midi","audio/midi"],["mjs","text/javascript"],["mp3","audio/mpeg"],["mp4","video/mp4"],["mpeg","video/mpeg"],["mpkg","application/vnd.apple.installer+xml"],["odp","application/vnd.oasis.opendocument.presentation"],["ods","application/vnd.oasis.opendocument.spreadsheet"],["odt","application/vnd.oasis.opendocument.text"],["oga","audio/ogg"],["ogv","video/ogg"],["ogx","application/ogg"],["opus","audio/opus"],["otf","font/otf"],["png","image/png"],["pdf","application/pdf"],["php","application/x-httpd-php"],["ppt","application/vnd.ms-powerpoint"],["pptx","application/vnd.openxmlformats-officedocument.presentationml.presentation"],["rar","application/vnd.rar"],["rtf","application/rtf"],["sh","application/x-sh"],["svg","image/svg+xml"],["swf","application/x-shockwave-flash"],["tar","application/x-tar"],["tif","image/tiff"],["tiff","image/tiff"],["ts","video/mp2t"],["ttf","font/ttf"],["txt","text/plain"],["vsd","application/vnd.visio"],["wav","audio/wav"],["weba","audio/webm"],["webm","video/webm"],["webp","image/webp"],["woff","font/woff"],["woff2","font/woff2"],["xhtml","application/xhtml+xml"],["xls","application/vnd.ms-excel"],["xlsx","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],["xml","application/xml"],["xul","application/vnd.mozilla.xul+xml"],["zip","application/zip"],["7z","application/x-7z-compressed"],["mkv","video/x-matroska"],["mov","video/quicktime"],["msg","application/vnd.ms-outlook"]]);function te(e,r){var n=tt(e);if(typeof n.path!="string"){var i=e.webkitRelativePath;Object.defineProperty(n,"path",{value:typeof r=="string"?r:typeof i=="string"&&i.length>0?i:e.name,writable:!1,configurable:!1,enumerable:!0})}return n}function tt(e){var r=e.name,n=r&&r.lastIndexOf(".")!==-1;if(n&&!e.type){var i=r.split(".").pop().toLowerCase(),t=nt.get(i);t&&Object.defineProperty(e,"type",{value:t,writable:!1,configurable:!1,enumerable:!0})}return e}var ot=[".DS_Store","Thumbs.db"];function at(e){return Z(this,void 0,void 0,function(){return ee(this,function(r){return be(e)&&it(e.dataTransfer)?[2,dt(e.dataTransfer,e.type)]:st(e)?[2,lt(e)]:Array.isArray(e)&&e.every(function(n){return"getFile"in n&&typeof n.getFile=="function"})?[2,ct(e)]:[2,[]]})})}function it(e){return be(e)}function st(e){return be(e)&&be(e.target)}function be(e){return typeof e=="object"&&e!==null}function lt(e){return Ue(e.target.files).map(function(r){return te(r)})}function ct(e){return Z(this,void 0,void 0,function(){var r;return ee(this,function(n){switch(n.label){case 0:return[4,Promise.all(e.map(function(i){return i.getFile()}))];case 1:return r=n.sent(),[2,r.map(function(i){return te(i)})]}})})}function dt(e,r){return Z(this,void 0,void 0,function(){var n,i;return ee(this,function(t){switch(t.label){case 0:return e.items?(n=Ue(e.items).filter(function(o){return o.kind==="file"}),r!=="drop"?[2,n]:[4,Promise.all(n.map(pt))]):[3,2];case 1:return i=t.sent(),[2,vr(Zr(i))];case 2:return[2,vr(Ue(e.files).map(function(o){return te(o)}))]}})})}function vr(e){return e.filter(function(r){return ot.indexOf(r.name)===-1})}function Ue(e){if(e===null)return[];for(var r=[],n=0;n<e.length;n++){var i=e[n];r.push(i)}return r}function pt(e){if(typeof e.webkitGetAsEntry!="function")return br(e);var r=e.webkitGetAsEntry();return r&&r.isDirectory?en(r):br(e)}function Zr(e){return e.reduce(function(r,n){return fr(fr([],mr(r),!1),mr(Array.isArray(n)?Zr(n):[n]),!1)},[])}function br(e){var r=e.getAsFile();if(!r)return Promise.reject("".concat(e," is not a File"));var n=te(r);return Promise.resolve(n)}function ut(e){return Z(this,void 0,void 0,function(){return ee(this,function(r){return[2,e.isDirectory?en(e):ft(e)]})})}function en(e){var r=e.createReader();return new Promise(function(n,i){var t=[];function o(){var s=this;r.readEntries(function(d){return Z(s,void 0,void 0,function(){var l,h,x;return ee(this,function(v){switch(v.label){case 0:if(d.length)return[3,5];v.label=1;case 1:return v.trys.push([1,3,,4]),[4,Promise.all(t)];case 2:return l=v.sent(),n(l),[3,4];case 3:return h=v.sent(),i(h),[3,4];case 4:return[3,6];case 5:x=Promise.all(d.map(ut)),t.push(x),o(),v.label=6;case 6:return[2]}})})},function(d){i(d)})}o()})}function ft(e){return Z(this,void 0,void 0,function(){return ee(this,function(r){return[2,new Promise(function(n,i){e.file(function(t){var o=te(t,e.fullPath);n(o)},function(t){i(t)})})]})})}var mt=function(e,r){if(e&&r){var n=Array.isArray(r)?r:r.split(","),i=e.name||"",t=(e.type||"").toLowerCase(),o=t.replace(/\/.*$/,"");return n.some(function(s){var d=s.trim().toLowerCase();return d.charAt(0)==="."?i.toLowerCase().endsWith(d):d.endsWith("/*")?o===d.replace(/\/.*$/,""):t===d})}return!0};function hr(e){return bt(e)||vt(e)||nn(e)||gt()}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bt(e){if(Array.isArray(e))return $e(e)}function xr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function yr(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?xr(Object(n),!0).forEach(function(i){rn(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xr(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function rn(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function ne(e,r){return yt(e)||xt(e,r)||nn(e,r)||ht()}function ht(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nn(e,r){if(e){if(typeof e=="string")return $e(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $e(e,r)}}function $e(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=e[n];return i}function xt(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],t=!0,o=!1,s,d;try{for(n=n.call(e);!(t=(s=n.next()).done)&&(i.push(s.value),!(r&&i.length===r));t=!0);}catch(l){o=!0,d=l}finally{try{!t&&n.return!=null&&n.return()}finally{if(o)throw d}}return i}}function yt(e){if(Array.isArray(e))return e}var jt="file-invalid-type",At="file-too-large",Ct="file-too-small",Dt="too-many-files",wt=function(r){r=Array.isArray(r)&&r.length===1?r[0]:r;var n=Array.isArray(r)?"one of ".concat(r.join(", ")):r;return{code:jt,message:"File type must be ".concat(n)}},jr=function(r){return{code:At,message:"File is larger than ".concat(r," ").concat(r===1?"byte":"bytes")}},Ar=function(r){return{code:Ct,message:"File is smaller than ".concat(r," ").concat(r===1?"byte":"bytes")}},Et={code:Dt,message:"Too many files"};function tn(e,r){var n=e.type==="application/x-moz-file"||mt(e,r);return[n,n?null:wt(r)]}function on(e,r,n){if(H(e.size))if(H(r)&&H(n)){if(e.size>n)return[!1,jr(n)];if(e.size<r)return[!1,Ar(r)]}else{if(H(r)&&e.size<r)return[!1,Ar(r)];if(H(n)&&e.size>n)return[!1,jr(n)]}return[!0,null]}function H(e){return e!=null}function Tt(e){var r=e.files,n=e.accept,i=e.minSize,t=e.maxSize,o=e.multiple,s=e.maxFiles,d=e.validator;return!o&&r.length>1||o&&s>=1&&r.length>s?!1:r.every(function(l){var h=tn(l,n),x=ne(h,1),v=x[0],w=on(l,i,t),g=ne(w,1),y=g[0],C=d?d(l):null;return v&&y&&!C})}function he(e){return typeof e.isPropagationStopped=="function"?e.isPropagationStopped():typeof e.cancelBubble<"u"?e.cancelBubble:!1}function ge(e){return e.dataTransfer?Array.prototype.some.call(e.dataTransfer.types,function(r){return r==="Files"||r==="application/x-moz-file"}):!!e.target&&!!e.target.files}function Cr(e){e.preventDefault()}function _t(e){return e.indexOf("MSIE")!==-1||e.indexOf("Trident/")!==-1}function Pt(e){return e.indexOf("Edge/")!==-1}function It(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:window.navigator.userAgent;return _t(e)||Pt(e)}function k(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return function(i){for(var t=arguments.length,o=new Array(t>1?t-1:0),s=1;s<t;s++)o[s-1]=arguments[s];return r.some(function(d){return!he(i)&&d&&d.apply(void 0,[i].concat(o)),he(i)})}}function Nt(){return"showOpenFilePicker"in window}function Ot(e){if(H(e)){var r=Object.entries(e).filter(function(n){var i=ne(n,2),t=i[0],o=i[1],s=!0;return an(t)||(console.warn('Skipped "'.concat(t,'" because it is not a valid MIME type. Check https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types for a list of valid MIME types.')),s=!1),(!Array.isArray(o)||!o.every(sn))&&(console.warn('Skipped "'.concat(t,'" because an invalid file extension was provided.')),s=!1),s}).reduce(function(n,i){var t=ne(i,2),o=t[0],s=t[1];return yr(yr({},n),{},rn({},o,s))},{});return[{description:"Files",accept:r}]}return e}function Rt(e){if(H(e))return Object.entries(e).reduce(function(r,n){var i=ne(n,2),t=i[0],o=i[1];return[].concat(hr(r),[t],hr(o))},[]).filter(function(r){return an(r)||sn(r)}).join(",")}function Ft(e){return e instanceof DOMException&&(e.name==="AbortError"||e.code===e.ABORT_ERR)}function St(e){return e instanceof DOMException&&(e.name==="SecurityError"||e.code===e.SECURITY_ERR)}function an(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function sn(e){return/^.*\.[\w]+$/.test(e)}var kt=["children"],zt=["open"],Lt=["refKey","role","onKeyDown","onFocus","onBlur","onClick","onDragEnter","onDragOver","onDragLeave","onDrop"],Mt=["refKey","onChange","onClick"];function Ut(e){return Ht(e)||Kt(e)||ln(e)||$t()}function $t(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Ht(e){if(Array.isArray(e))return Ke(e)}function Re(e,r){return Vt(e)||Wt(e,r)||ln(e,r)||Bt()}function Bt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ln(e,r){if(e){if(typeof e=="string")return Ke(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ke(e,r)}}function Ke(e,r){(r==null||r>e.length)&&(r=e.length);for(var n=0,i=new Array(r);n<r;n++)i[n]=e[n];return i}function Wt(e,r){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var i=[],t=!0,o=!1,s,d;try{for(n=n.call(e);!(t=(s=n.next()).done)&&(i.push(s.value),!(r&&i.length===r));t=!0);}catch(l){o=!0,d=l}finally{try{!t&&n.return!=null&&n.return()}finally{if(o)throw d}}return i}}function Vt(e){if(Array.isArray(e))return e}function Dr(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,i)}return n}function A(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?Dr(Object(n),!0).forEach(function(i){He(e,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dr(Object(n)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))})}return e}function He(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function xe(e,r){if(e==null)return{};var n=Gt(e,r),i,t;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)i=o[t],!(r.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}function Gt(e,r){if(e==null)return{};var n={},i=Object.keys(e),t,o;for(o=0;o<i.length;o++)t=i[o],!(r.indexOf(t)>=0)&&(n[t]=e[t]);return n}var er=p.forwardRef(function(e,r){var n=e.children,i=xe(e,kt),t=dn(i),o=t.open,s=xe(t,zt);return p.useImperativeHandle(r,function(){return{open:o}},[o]),O.createElement(p.Fragment,null,n(A(A({},s),{},{open:o})))});er.displayName="Dropzone";var cn={disabled:!1,getFilesFromEvent:at,maxSize:1/0,minSize:0,multiple:!0,maxFiles:0,preventDropOnDocument:!0,noClick:!1,noKeyboard:!1,noDrag:!1,noDragEventsBubbling:!1,validator:null,useFsAccessApi:!0,autoFocus:!1};er.defaultProps=cn;er.propTypes={children:b.func,accept:b.objectOf(b.arrayOf(b.string)),multiple:b.bool,preventDropOnDocument:b.bool,noClick:b.bool,noKeyboard:b.bool,noDrag:b.bool,noDragEventsBubbling:b.bool,minSize:b.number,maxSize:b.number,maxFiles:b.number,disabled:b.bool,getFilesFromEvent:b.func,onFileDialogCancel:b.func,onFileDialogOpen:b.func,useFsAccessApi:b.bool,autoFocus:b.bool,onDragEnter:b.func,onDragLeave:b.func,onDragOver:b.func,onDrop:b.func,onDropAccepted:b.func,onDropRejected:b.func,onError:b.func,validator:b.func};var Be={isFocused:!1,isFileDialogActive:!1,isDragActive:!1,isDragAccept:!1,isDragReject:!1,acceptedFiles:[],fileRejections:[]};function dn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=A(A({},cn),e),n=r.accept,i=r.disabled,t=r.getFilesFromEvent,o=r.maxSize,s=r.minSize,d=r.multiple,l=r.maxFiles,h=r.onDragEnter,x=r.onDragLeave,v=r.onDragOver,w=r.onDrop,g=r.onDropAccepted,y=r.onDropRejected,C=r.onFileDialogCancel,E=r.onFileDialogOpen,P=r.useFsAccessApi,j=r.autoFocus,F=r.preventDropOnDocument,W=r.noClick,$=r.noKeyboard,V=r.noDrag,z=r.noDragEventsBubbling,G=r.onError,L=r.validator,U=p.useMemo(function(){return Rt(n)},[n]),rr=p.useMemo(function(){return Ot(n)},[n]),Ae=p.useMemo(function(){return typeof E=="function"?E:wr},[E]),oe=p.useMemo(function(){return typeof C=="function"?C:wr},[C]),_=p.useRef(null),R=p.useRef(null),pn=p.useReducer(Yt,Be),nr=Re(pn,2),Ce=nr[0],I=nr[1],un=Ce.isFocused,tr=Ce.isFileDialogActive,ae=p.useRef(typeof window<"u"&&window.isSecureContext&&P&&Nt()),or=function(){!ae.current&&tr&&setTimeout(function(){if(R.current){var u=R.current.files;u.length||(I({type:"closeDialog"}),oe())}},300)};p.useEffect(function(){return window.addEventListener("focus",or,!1),function(){window.removeEventListener("focus",or,!1)}},[R,tr,oe,ae]);var Y=p.useRef([]),ar=function(u){_.current&&_.current.contains(u.target)||(u.preventDefault(),Y.current=[])};p.useEffect(function(){return F&&(document.addEventListener("dragover",Cr,!1),document.addEventListener("drop",ar,!1)),function(){F&&(document.removeEventListener("dragover",Cr),document.removeEventListener("drop",ar))}},[_,F]),p.useEffect(function(){return!i&&j&&_.current&&_.current.focus(),function(){}},[_,j,i]);var K=p.useCallback(function(c){G?G(c):console.error(c)},[G]),ir=p.useCallback(function(c){c.preventDefault(),c.persist(),ce(c),Y.current=[].concat(Ut(Y.current),[c.target]),ge(c)&&Promise.resolve(t(c)).then(function(u){if(!(he(c)&&!z)){var D=u.length,T=D>0&&Tt({files:u,accept:U,minSize:s,maxSize:o,multiple:d,maxFiles:l,validator:L}),N=D>0&&!T;I({isDragAccept:T,isDragReject:N,isDragActive:!0,type:"setDraggedFiles"}),h&&h(c)}}).catch(function(u){return K(u)})},[t,h,K,z,U,s,o,d,l,L]),sr=p.useCallback(function(c){c.preventDefault(),c.persist(),ce(c);var u=ge(c);if(u&&c.dataTransfer)try{c.dataTransfer.dropEffect="copy"}catch{}return u&&v&&v(c),!1},[v,z]),lr=p.useCallback(function(c){c.preventDefault(),c.persist(),ce(c);var u=Y.current.filter(function(T){return _.current&&_.current.contains(T)}),D=u.indexOf(c.target);D!==-1&&u.splice(D,1),Y.current=u,!(u.length>0)&&(I({type:"setDraggedFiles",isDragActive:!1,isDragAccept:!1,isDragReject:!1}),ge(c)&&x&&x(c))},[_,x,z]),ie=p.useCallback(function(c,u){var D=[],T=[];c.forEach(function(N){var re=tn(N,U),X=Re(re,2),we=X[0],Ee=X[1],Te=on(N,s,o),de=Re(Te,2),_e=de[0],Pe=de[1],Ie=L?L(N):null;if(we&&_e&&!Ie)D.push(N);else{var Ne=[Ee,Pe];Ie&&(Ne=Ne.concat(Ie)),T.push({file:N,errors:Ne.filter(function(vn){return vn})})}}),(!d&&D.length>1||d&&l>=1&&D.length>l)&&(D.forEach(function(N){T.push({file:N,errors:[Et]})}),D.splice(0)),I({acceptedFiles:D,fileRejections:T,type:"setFiles"}),w&&w(D,T,u),T.length>0&&y&&y(T,u),D.length>0&&g&&g(D,u)},[I,d,U,s,o,l,w,g,y,L]),se=p.useCallback(function(c){c.preventDefault(),c.persist(),ce(c),Y.current=[],ge(c)&&Promise.resolve(t(c)).then(function(u){he(c)&&!z||ie(u,c)}).catch(function(u){return K(u)}),I({type:"reset"})},[t,ie,K,z]),q=p.useCallback(function(){if(ae.current){I({type:"openDialog"}),Ae();var c={multiple:d,types:rr};window.showOpenFilePicker(c).then(function(u){return t(u)}).then(function(u){ie(u,null),I({type:"closeDialog"})}).catch(function(u){Ft(u)?(oe(u),I({type:"closeDialog"})):St(u)?(ae.current=!1,R.current?(R.current.value=null,R.current.click()):K(new Error("Cannot open the file picker because the https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API is not supported and no <input> was provided."))):K(u)});return}R.current&&(I({type:"openDialog"}),Ae(),R.current.value=null,R.current.click())},[I,Ae,oe,P,ie,K,rr,d]),cr=p.useCallback(function(c){!_.current||!_.current.isEqualNode(c.target)||(c.key===" "||c.key==="Enter"||c.keyCode===32||c.keyCode===13)&&(c.preventDefault(),q())},[_,q]),dr=p.useCallback(function(){I({type:"focus"})},[]),pr=p.useCallback(function(){I({type:"blur"})},[]),ur=p.useCallback(function(){W||(It()?setTimeout(q,0):q())},[W,q]),J=function(u){return i?null:u},De=function(u){return $?null:J(u)},le=function(u){return V?null:J(u)},ce=function(u){z&&u.stopPropagation()},fn=p.useMemo(function(){return function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.refKey,D=u===void 0?"ref":u,T=c.role,N=c.onKeyDown,re=c.onFocus,X=c.onBlur,we=c.onClick,Ee=c.onDragEnter,Te=c.onDragOver,de=c.onDragLeave,_e=c.onDrop,Pe=xe(c,Lt);return A(A(He({onKeyDown:De(k(N,cr)),onFocus:De(k(re,dr)),onBlur:De(k(X,pr)),onClick:J(k(we,ur)),onDragEnter:le(k(Ee,ir)),onDragOver:le(k(Te,sr)),onDragLeave:le(k(de,lr)),onDrop:le(k(_e,se)),role:typeof T=="string"&&T!==""?T:"presentation"},D,_),!i&&!$?{tabIndex:0}:{}),Pe)}},[_,cr,dr,pr,ur,ir,sr,lr,se,$,V,i]),mn=p.useCallback(function(c){c.stopPropagation()},[]),gn=p.useMemo(function(){return function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.refKey,D=u===void 0?"ref":u,T=c.onChange,N=c.onClick,re=xe(c,Mt),X=He({accept:U,multiple:d,type:"file",style:{display:"none"},onChange:J(k(T,se)),onClick:J(k(N,mn)),tabIndex:-1},D,R);return A(A({},X),re)}},[R,n,d,se,i]);return A(A({},Ce),{},{isFocused:un&&!i,getRootProps:fn,getInputProps:gn,rootRef:_,inputRef:R,open:J(q)})}function Yt(e,r){switch(r.type){case"focus":return A(A({},e),{},{isFocused:!0});case"blur":return A(A({},e),{},{isFocused:!1});case"openDialog":return A(A({},Be),{},{isFileDialogActive:!0});case"closeDialog":return A(A({},e),{},{isFileDialogActive:!1});case"setDraggedFiles":return A(A({},e),{},{isDragActive:r.isDragActive,isDragAccept:r.isDragAccept,isDragReject:r.isDragReject});case"setFiles":return A(A({},e),{},{acceptedFiles:r.acceptedFiles,fileRejections:r.fileRejections});case"reset":return A({},Be);default:return e}}function wr(){}function qt({label:e="Foto de perfil",data:r,initialFile:n,setData:i,error:t,name:o,disabled:s}){const{t:d}=We(),l=p.useCallback(g=>{const y=g[0];y&&(Object.assign(y,{preview:URL.createObjectURL(y)}),i(o,y))},[]),{getRootProps:h,getInputProps:x,isDragActive:v,isDragReject:w}=dn({onDrop:l,maxFiles:1,disabled:s,multiple:!1,accept:{"image/*":[]}});return p.useEffect(()=>()=>{var g;r[o]&&((g=r[o])==null||g.forEach(y=>URL.revokeObjectURL(y.preview)))},[]),console.log(w),a.jsxs("div",{className:"flex flex-col items-center justify-center",children:[a.jsxs("div",{...h(),className:B("relative flex aspect-square size-[250px] items-center justify-center overflow-hidden rounded-full border-2 border-dashed px-2 shadow-sm",s?"cursor-not-allowed bg-muted":"cursor-pointer bg-background",{"cursor-not-allowed border-destructive":w}),children:[a.jsx("input",{...x()}),a.jsx("p",{className:B("absolute z-20 text-balance text-center font-serif text-sm font-medium text-input"),children:v?"Drop an image here...":r[o]?"Drag and drop, or click to change the image":"Drag and drop, or click to select an image"}),r[o]||n?a.jsx("div",{className:"absolute",children:a.jsx("img",{src:r[o]?r[o].preview:n,className:"z-10 aspect-square object-cover",onLoad:()=>{r[o]&&URL.revokeObjectURL(r[o].preview)}})}):null]}),e&&a.jsx("p",{className:"mt-1 text-sm font-medium leading-none",children:d(e)}),t&&a.jsx("small",{className:"text-red-500",children:t})]})}function po({auth:{user:e},profile_picture:r}){console.log({profile_picture:r});const[n,i]=p.useState(!1),{t}=We(),{data:o,setData:s,post:d,errors:l,processing:h}=Er({picture:null,fecha_nac:e.fecha_nac,nombre:e.nombre,apellidos:e.apellidos,genero:e.genero,email1:e.email1,email2:e.email2,tel_res:e.tel_res,tel_emer:e.tel_emer,cel:e.cel,cel_com:e.cel_com,dir1:e.dir1,dir2:e.dir2,dir3:e.dir3,dir4:e.dir4,pueblo1:e.pueblo1,pueblo2:e.pueblo2,esta1:e.esta1,esta2:e.esta2,zip1:e.zip1,zip2:e.zip2,alias:e.alias,posicion:e.posicion,nivel:e.nivel,preparacion1:e.preparacion1,preparacion2:e.preparacion2,fecha_ini:e.fecha_ini,fecha_daja:e.fecha_daja,re_e:e.re_e,club1:e.club1,club2:e.club2,club3:e.club3,club4:e.club4,club5:e.club5,pre1:e.pre1,pre2:e.pre2,pre3:e.pre3,pre4:e.pre4,pre5:e.pre5,vi1:e.vi1,vi2:e.vi2,vi3:e.vi3,vi4:e.vi4,vi5:e.vi5,se1:e.se1,se2:e.se2,se3:e.se3,se4:e.se4,se5:e.se5,lic1:e.lic1,lic2:e.lic2,lic3:e.lic3,lic4:e.lic4,lp1:e.lp1,lp2:e.lp2,lp3:e.lp3,lp4:e.lp4,fex1:e.fex1,fex2:e.fex2,fex3:e.fex3,fex4:e.fex4});function x(){i(!0),o.dir3=o.dir1,o.dir4=o.dir2,o.pueblo2=o.pueblo1,o.esta2=o.esta1,o.zip2=o.zip1}function v(){i(!1),o.dir3="",o.dir4="",o.pueblo2="",o.esta2="",o.zip2=""}function w(g){g.preventDefault(),d(route("regiweb.profile.update"),{onSuccess:()=>{Nr.success(t("Perfil guardado"))}})}return console.log(e),a.jsx(Tn,{user:e,title:t("Perfil"),children:a.jsx("form",{onSubmit:w,children:a.jsxs("div",{className:"flex grow flex-col gap-8 px-2 pb-10 pt-5",children:[a.jsxs(Pn,{className:"flex items-center gap-2",children:[t("Mi perfil"),a.jsx(Nn,{className:"size-8"})]}),a.jsxs("section",{className:"mt-5 grid grid-cols-1 gap-8 md:grid-cols-2",children:[a.jsx(qt,{initialFile:r,data:o,name:"picture",setData:s,error:l.picture}),a.jsx("div",{className:"hidden md:flex md:items-center md:justify-center",children:a.jsxs(pe,{className:"border-accent bg-accent",children:[a.jsx(ue,{className:"p-2",children:a.jsx(fe,{className:"text-lg",children:t("Información")})}),a.jsxs(me,{className:"flex flex-col gap-2 rounded-b-md bg-background pt-2",children:[a.jsx(Oe,{label:t("Id"),value:e.id}),a.jsx(Oe,{label:t("User"),value:e.usuario}),e.grado&&a.jsx(Oe,{label:t("Salón hogar"),value:e.grado})]})]})})]}),a.jsxs("section",{className:"mt-5 grid grid-cols-1 gap-8 md:grid-cols-2",children:[a.jsxs(pe,{children:[a.jsx(ue,{children:a.jsx(fe,{children:t("Información personal")})}),a.jsx(me,{children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs(S,{children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Nombre"),name:"nombre",error:l.nombre}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Apellidos"),name:"apellidos",error:l.apellidos})]}),a.jsxs(S,{children:[a.jsx(f,{fieldType:m.SELECT,data:o,setData:s,label:t("Genero"),name:"genero",error:l.genero,items:Cn}),a.jsx(f,{fieldType:m.DATE_PICKER,data:o,setData:s,label:t("Fecha de nacimiento"),name:"fecha_nac",error:l.fecha_nac})]}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Correo principal"),name:"email1",type:"email",error:l.email1}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Correo secundario"),name:"email2",type:"email",error:l.email2}),a.jsxs(S,{children:[a.jsx(f,{fieldType:m.PHONE_INPUT,data:o,setData:s,label:t("Telefono residencial"),name:"tel_res",error:l.tel_res}),a.jsx(f,{fieldType:m.PHONE_INPUT,data:o,setData:s,label:t("Contacto de emergencia"),name:"tel_emer",error:l.tel_emer})]}),a.jsxs(S,{children:[a.jsx(f,{fieldType:m.PHONE_INPUT,data:o,setData:s,label:t("Celular"),name:"cel",error:l.cel}),a.jsx(f,{name:"cel_com",fieldType:m.SELECT,data:o,setData:s,label:t("Compañia del celular"),error:l.cel_com,items:Dn})]}),a.jsx("div",{className:"mt-5",children:a.jsx(rt,{route:route("regiweb.password")})})]})})]}),a.jsxs("div",{className:"flex flex-col gap-8",children:[a.jsxs(pe,{children:[a.jsx(ue,{children:a.jsx(fe,{children:t("Direcciones")})}),a.jsx(me,{children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsxs("div",{className:"space-y-1",children:[a.jsx("h2",{className:"font-semibold",children:t("Dirección residencial")}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Dirección")} 1`,name:"dir1",error:l.dir1}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Dirección")} 2`,name:"dir2",error:l.dir2}),a.jsxs(S,{cols:3,children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("Ciudad"),name:"pueblo1",error:l.pueblo1}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("País"),name:"esta1",error:l.esta1}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("Código postal"),name:"zip1",error:l.zip1})]})]}),a.jsx(Me,{}),a.jsxs("div",{className:"space-y-1 md:relative md:pt-6",children:[a.jsxs("div",{className:"flex flex-col items-center md:absolute md:right-0 md:top-0",children:[a.jsx(Fe,{onClick:n?v:x,className:"size-8",size:"icon",children:a.jsx(In,{})}),a.jsxs("small",{className:"text-xs text-secondary-foreground",children:[t("Usar la misma dirección que la residencial"),"?"]})]}),a.jsx("h2",{className:"font-semibold",children:t("Dirección postal")}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Dirección")} 1`,name:"dir3",error:l.dir3}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Dirección")} 2`,name:"dir4",error:l.dir4}),a.jsxs(S,{cols:3,children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("Ciudad"),name:"pueblo2",error:l.pueblo2}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("País"),name:"esta2",error:l.esta2}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:t("Código postal"),name:"zip2",error:l.zip2})]})]})]})})]}),a.jsxs(pe,{children:[a.jsx(ue,{children:a.jsx(fe,{children:t("Otros")})}),a.jsx(me,{children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Alias"),name:"alias",error:l.alias}),a.jsxs(S,{children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Posición"),name:"posicion",error:l.posicion}),a.jsx(f,{fieldType:m.SELECT,data:o,setData:s,label:t("Nivel"),name:"nivel",error:l.nivel,items:wn})]}),a.jsxs("div",{children:[a.jsx("h2",{className:"text-sm font-medium",children:t("Preparación")}),a.jsxs("div",{className:"space-y-1",children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Preparación")} 2`,name:"preparacion1",error:l.preparacion1}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,placeholder:`${t("Preparación")} 2`,name:"preparacion2",error:l.preparacion2})]})]}),a.jsx(Me,{}),a.jsxs(S,{children:[a.jsx(f,{fieldType:m.DATE_PICKER,data:o,setData:s,label:t("Fecha de inicio"),name:"fecha_ini",error:l.fecha_ini}),a.jsx(f,{fieldType:m.DATE_PICKER,data:o,setData:s,label:t("Fecha de baja"),name:"fecha_daja",error:l.fecha_daja})]}),a.jsx(f,{fieldType:m.SELECT,data:o,setData:s,label:t("Recibir email"),items:En,name:"re_e",error:l.re_e})]})})]})]})]}),a.jsx("section",{children:a.jsxs(Xn,{className:"rounded-md bg-white shadow-sm",type:"single",collapsible:!0,children:[a.jsxs(ke,{value:"club",children:[a.jsx(ze,{className:"px-6",children:t("Clubes")}),a.jsx(Le,{className:"space-y-2 px-6",children:[1,2,3,4,5].map(g=>{const y=`club${g}`,C=`pre${g}`,E=`vi${g}`,P=`se${g}`;return a.jsxs(S,{className:"md:grid-cols-4",children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Nombre"),name:y,error:l[y]}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Presidente"),name:C,error:l[C]}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Vice presidente"),name:E,error:l[E]}),a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,label:t("Secretario"),name:P,error:l[P]})]},g)})})]}),a.jsxs(ke,{value:"licens",children:[a.jsx(ze,{className:"px-6",children:t("Licencias")}),a.jsx(Le,{className:"space-y-2 px-6 pt-2",children:[1,2,3,4].map(g=>{const y=`lic${g}`,C=`lp${g}`,E=`fex${g}`;return a.jsxs(S,{children:[a.jsx(f,{fieldType:m.INPUT,data:o,setData:s,name:y,error:l[y]}),a.jsxs("div",{className:"flex items-center gap-2",children:[o.lp1,a.jsx(f,{fieldType:m.CHECKBOX,label:"Expira",data:o,setData:s,name:C,error:l[C]}),a.jsx(f,{disabled:o[C]!==_n.SI,className:"min-w-[300px]",fieldType:m.DATE_PICKER,data:o,setData:s,name:E,error:l[E]})]})]},g)})})]})]})}),a.jsx(Fe,{type:"submit",disabled:h,size:"lg",children:t("Guardar")})]})})})}export{po as default};