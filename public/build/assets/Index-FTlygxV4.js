import{W as x,j as e}from"./app-AXS25nOf.js";import{C as n,F as o}from"./CustomFormField-CGdMwklQ.js";import{P as g}from"./PagePrimaryTitle-1jvJStgH.js";import{u as f,B as a}from"./button-xOcp6DYA.js";import{T as j,P as b}from"./FormSelects-De0UkpVB.js";import{R as h}from"./RegiwebLayout-D5K44ppe.js";import"./createLucideIcon-C8pU7Y8G.js";import"./index-CmEqkqbF.js";import"./index-BTBG5xfl.js";import"./dropdown-menu-BRNE1Rf4.js";import"./index-ueuYHyUX.js";function F({auth:l,teacherGrades:d}){const{t:r}=f(),{data:s,setData:t,post:m,processing:c,errors:i}=x({grade:"",trimester:"",page:""});function p(u){u.preventDefault(),m(route("regiweb.notes.index.submit"))}return e.jsxs(h,{user:l.user,title:r("Inicio"),children:[e.jsx(g,{className:"mt-4",children:r("Notas")}),e.jsxs("div",{className:"mt-2 flex flex-col items-center gap-8 px-2 pb-10",children:[e.jsx("div",{className:"w-full max-w-xl rounded-md bg-secondary p-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsx(a,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:r("Entrada de asistencia")}),e.jsx(a,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:r("Reporte de asistencia diaria")}),e.jsx(a,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:r("Reporte de asistencias")}),e.jsx(a,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:r("Pre escuela")})]})}),e.jsx("div",{className:"w-full max-w-lg rounded-md bg-background p-4 shadow",children:e.jsx("form",{onSubmit:p,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(n,{placeholder:"Selecciona el grado",fieldType:o.SELECT,data:s,setData:t,name:"grade",label:r("Grado"),items:d,error:i.grade}),e.jsx(n,{placeholder:"Selecciona el trimestre",fieldType:o.SELECT,data:s,setData:t,name:"trimester",label:r("Trimestre"),items:j,error:i.trimester}),e.jsx(n,{placeholder:"Selecciona la pagína",fieldType:o.SELECT,data:s,setData:t,name:"page",label:r("Pagína"),items:b,error:i.page}),e.jsx("div",{className:"flex justify-center",children:e.jsx(a,{disabled:c,type:"submit",children:r("Continuar")})})]})})})]})]})}export{F as default};