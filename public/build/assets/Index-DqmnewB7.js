import{j as e,Y as i,f as r,B as n,b as o}from"./app-EXvRzil4.js";import{I as s}from"./InfoBadge-BfU7PPd2.js";import{L as m}from"./index-ueuYHyUX.js";import{u as c}from"./useTranslation-lxyVvsoK.js";function u({auth:{user:l},ip:t}){const{t:a}=c();return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:a("Inicio")}),e.jsx("main",{className:"flex min-h-dvh place-items-center justify-center",children:e.jsxs("div",{className:"w-[700px] px-2",children:[e.jsx("div",{className:"flex justify-center",children:e.jsx("img",{className:"my-4 h-auto max-w-[400px]",src:m,alt:"Logo Regiweb"})}),e.jsxs("div",{className:"rounded-md bg-secondary/50 p-4 shadow",children:[e.jsx("h1",{className:"text-center text-2xl font-bold",children:a("Bienvenido")}),e.jsx("hr",{className:"my-4"}),e.jsxs("div",{className:"flex flex-col items-center space-y-2",children:[e.jsx(s,{label:a("Nombre"),value:`${l.nombre} ${l.apellidos}`}),e.jsx(s,{label:a("ID"),value:l.id}),e.jsx(s,{label:a("Grupo"),value:l.grupo}),e.jsx(s,{label:a("Ultima entrada"),value:r(l.ufecha,{dateStyle:"long"})}),e.jsx(s,{label:a("IP"),value:t}),e.jsx(s,{label:a("Hora"),value:new Date().toLocaleTimeString()})]}),e.jsx("hr",{className:"my-4"}),e.jsx("div",{className:"grid",children:e.jsx(n,{asChild:!0,children:e.jsx(o,{href:route("regiweb.home"),children:a("Continuar")})})})]})]})})]})}export{u as default};