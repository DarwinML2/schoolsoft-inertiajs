import{W as u,j as e}from"./app-D9uGAO7t.js";import{C as i,F as n}from"./CustomFormField-BWbhR-xT.js";import{R as x,P as g}from"./RegiwebLayout-DMK234JR.js";import{u as f,B as r}from"./button-BUXSr2A3.js";import{T as j,P as h}from"./FormSelects-4x8k3dnK.js";import"./createLucideIcon-C0NNC4CU.js";import"./index-DuXSVcO2.js";import"./index-CjaQDKEv.js";import"./dropdown-menu-BIkWECV6.js";import"./index-ueuYHyUX.js";function R({auth:l,teacherGrades:o}){const{t:a}=f(),{data:s,setData:t,get:d,processing:c}=u({grade:"",trimester:"",page:""});function m(p){p.preventDefault(),d(route("regiweb.home"))}return e.jsxs(x,{user:l.user,title:a("Inicio"),children:[e.jsx(g,{className:"mt-4",children:a("Notas")}),e.jsxs("div",{className:"mt-2 flex flex-col items-center gap-8 px-2 pb-10",children:[e.jsx("div",{className:"w-full max-w-xl rounded-md bg-secondary p-4",children:e.jsxs("div",{className:"grid grid-cols-1 gap-2 md:grid-cols-2",children:[e.jsx(r,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:"Entrada de asistencia"}),e.jsx(r,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:"Reporte de asistencia diaria"}),e.jsx(r,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:"Reporte de asistencias"}),e.jsx(r,{className:"bg-transparent text-secondary-foreground",variant:"outline",children:"Pre escuela"})]})}),e.jsx("div",{className:"w-full max-w-lg rounded-md bg-background p-4 shadow",children:e.jsx("form",{onSubmit:m,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(i,{placeholder:"Selecciona el grado",fieldType:n.SELECT,data:s,setData:t,name:"grade",label:a("Grado"),items:o}),e.jsx(i,{placeholder:"Selecciona el trimestre",fieldType:n.SELECT,data:s,setData:t,name:"trimester",label:a("Trimestre"),items:j}),e.jsx(i,{placeholder:"Selecciona la pagína",fieldType:n.SELECT,data:s,setData:t,name:"page",label:a("Pagína"),items:h}),e.jsx("div",{className:"flex justify-center",children:e.jsx(r,{disabled:c,type:"submit",children:"Continuar"})})]})})})]})]})}export{R as default};