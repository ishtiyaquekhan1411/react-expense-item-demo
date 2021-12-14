(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(10),s=n.n(c),r=(n(17),n(6)),i=n(2),l=(n(18),n(0)),d=function(e){var t="card "+e.className;return Object(l.jsx)("div",{className:t,children:e.children})},o=(n(20),[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}]),u=/^(([a-zA-Z])*\s?([a-zA-Z]))*$/,j=/^([0-9])*\.?([0-9])+$/,b=["2023","2022","2021","2020","2019"],x=function(e){return Object(l.jsx)("div",{className:"expense-filters",children:Object(l.jsxs)("div",{className:"expense-filter",children:[Object(l.jsx)("label",{children:"Filter by Year"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("select",{value:e.selected,onChange:function(t){e.onChangeFilter(t.target.value)},children:[!e.selected&&Object(l.jsx)("option",{value:""}),b.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))]}),e.selected&&Object(l.jsx)("button",{onClick:e.onClearFilter,children:"Clear Filter"})]})]})})},p=n(11),m=(n(21),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(l.jsxs)("div",{className:"chart-bar",children:[Object(l.jsx)("div",{className:"chart-bar__inner",children:Object(l.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(l.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),O=(n(22),function(e){var t=e.datapoints.map((function(e){return e.value})),n=Math.max.apply(Math,Object(r.a)(t));return Object(l.jsx)("div",{className:"chart",children:e.datapoints.map((function(e){return Object(l.jsx)(m,{value:e.value,maxValue:n,label:e.label},e.label)}))})}),v=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(p.a)(e.expenses);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(s){a.e(s)}finally{a.f()}return Object(l.jsx)(O,{datapoints:n})},h=(n(23),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"2-digit"}),a=e.date.getFullYear();return Object(l.jsxs)("div",{className:"expense-date",children:[Object(l.jsx)("div",{className:"expense-date__month",children:t}),Object(l.jsx)("div",{className:"expense-date__year",children:a}),Object(l.jsx)("div",{className:"expense-date__day",children:n})]})}),f=(n(24),function(e){return Object(l.jsxs)(d,{className:"expense-item",children:[Object(l.jsx)(h,{date:e.date}),Object(l.jsxs)("div",{className:"expense-item__description",children:[Object(l.jsx)("h2",{children:e.title}),e.url&&Object(l.jsx)("img",{src:e.url,alt:""}),Object(l.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e.onEditExpenseData(e.id)},children:"Edit"}),Object(l.jsx)("button",{onClick:function(t){t.preventDefault(),e.onRemoveExpenseData(e.id)},children:"Remove"})]})}),_=(n(25),function(e){return 0===e.items.length?Object(l.jsx)("p",{children:"No Expense found"}):e.items.map((function(t){return Object(l.jsx)(f,{id:t.id,title:t.title,amount:t.amount,date:t.date,onRemoveExpenseData:e.onRemoveExpenseData,onEditExpenseData:e.onEditExpenseData,url:t.url},t.id)}))}),g=(n(26),function(e){var t=Object(a.useState)(""),n=Object(i.a)(t,2),c=n[0],s=n[1],r=e.items.filter((function(e){return""===c||e.date.getFullYear().toString()===c}));return Object(l.jsxs)(d,{className:"expenses",children:[e.items.length>0&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(x,{selected:c,onChangeFilter:function(e){return s(e)},onClearFilter:function(){return s("")}}),Object(l.jsx)(v,{expenses:r})]}),Object(l.jsx)(_,{items:r,onRemoveExpenseData:e.onRemoveExpenseData,onEditExpenseData:e.onEditExpenseData})]})}),N=n(9),D=n.n(N),E=n(12),A=n(7),y=n(4),C=(n(28),function(e){console.log(e);var t={enteredTitle:"",enteredAmount:"",enteredDate:"",imageUrl:""},n=Object(a.useState)(t),c=Object(i.a)(n,2),s=c[0],r=c[1],o=Object(a.useState)(t),b=Object(i.a)(o,2),x=b[0],p=b[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),v=O[0],h=O[1];Object(a.useEffect)((function(){e.expense.id&&(r({enteredTitle:e.expense.title,enteredAmount:e.expense.amount,enteredDate:e.expense.date.toISOString().slice(0,10),imageUrl:e.expense.url}),h(!0))}),[e.expense]);var f=function(e){var t=e.target,n=t.name,a=t.value;r((function(e){return Object(y.a)(Object(y.a)({},e),{},Object(A.a)({},n,a))}))},_=function(){var e=Object(E.a)(D.a.mark((function e(t){var n,a,c;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(n=new FormData).append("file",t.target.files[0]),n.append("upload_preset","j0j1j50n"),n.append("cloud_name","dzjciizhx"),e.next=7,fetch("https://api.cloudinary.com/v1_1/dzjciizhx/image/upload",{method:"POST",body:n});case 7:a=e.sent,c=a.json(),r((function(e){return Object(y.a)(Object(y.a)({},e),{},{imageUrl:c.url})}));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)(d,{className:"expense",children:[!e.expense.id&&!v&&Object(l.jsx)("div",{className:"expense__actions",children:Object(l.jsx)("button",{onClick:function(){return h(!0)},children:"Add new Expense"})}),v&&Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var a=function(){var e=Object(y.a)({},t);return Object.keys(e).forEach((function(t){switch(t){case"enteredTitle":u.test(s.enteredTitle)||(e[t]="Invalid Title.");break;case"enteredAmount":j.test(s.enteredAmount)||(e[t]="Invalid Amount.");break;case"enteredDate":isNaN(Date.parse(s.enteredDate))&&(e[t]="Invalid date");break;default:e[t]=""}})),e}();if(Object.values(a).every((function(e){return""===e}))){var c={title:s.enteredTitle,amount:s.enteredAmount,date:new Date(s.enteredDate),url:s.imageUrl,id:e.expense.id||Math.random().toString()};e.onAddUpdateExpense(c),r(t),p(t)}else p(a)},children:[Object(l.jsxs)("div",{className:"expense__controls",children:[Object(l.jsxs)("div",{className:"expense__control",children:[Object(l.jsx)("label",{htmlFor:"title",children:"Title"}),Object(l.jsx)("input",{className:x.enteredTitle&&"expense__input_error",type:"text",id:"title",value:s.enteredTitle,name:"enteredTitle",onChange:f}),x.enteredTitle&&Object(l.jsx)("span",{children:x.enteredTitle})]}),Object(l.jsxs)("div",{className:"expense__control",children:[Object(l.jsx)("label",{htmlFor:"amount",children:"Amount"}),Object(l.jsx)("input",{className:x.enteredAmount&&"expense__input_error",type:"number",id:"amount",value:s.enteredAmount,name:"enteredAmount",min:"0.01",step:"0.01",onChange:f}),x.enteredAmount&&Object(l.jsx)("span",{children:x.enteredAmount})]}),Object(l.jsxs)("div",{className:"expense__control",children:[Object(l.jsx)("label",{htmlFor:"date",children:"Date"}),Object(l.jsx)("input",{className:x.enteredDate&&"expense__input_error",type:"date",id:"date",min:"2021-01-01",max:"2022-12-31",value:s.enteredDate,name:"enteredDate",onChange:f}),x.enteredDate&&Object(l.jsx)("span",{children:x.enteredDate})]}),Object(l.jsx)("div",{className:"expense__control",children:Object(l.jsx)("div",{className:"expense__image",children:Object(l.jsxs)("label",{className:"expense__image-label",children:[Object(l.jsx)("input",{className:"expense__input_error",type:"file",onChange:_}),Object(l.jsx)("i",{className:"fa fa-cloud-upload"})," Attach Image"]})})})]}),Object(l.jsxs)("div",{className:"expense__actions",children:[Object(l.jsx)("button",{onClick:function(){h(!1),e.onCancel()},children:"Cancel"}),Object(l.jsx)("button",{type:"submit",children:e.expense.id?"Update Expense":"Add Expense"})]})]})]})}),S=function(){var e=Object(a.useState)(o),t=Object(i.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)({}),d=Object(i.a)(s,2),u=d[0],j=d[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(C,{onAddUpdateExpense:function(e){var t=n.findIndex((function(t){return t.id===e.id}));-1!==t?(n[t]=e,c(n)):c((function(t){return[].concat(Object(r.a)(t),[e])})),j({})},expense:u,onCancel:function(){return j({})}}),Object(l.jsx)(g,{items:n,onRemoveExpenseData:function(e){var t=n.filter((function(t){return t.id!==e}));c(Object(r.a)(t))},onEditExpenseData:function(e){var t=n.find((function(t){return t.id===e}));j(t)}})]})};s.a.render(Object(l.jsx)(S,{}),document.getElementById("root"))}],[[29,1,2]]]);
//# sourceMappingURL=main.7f0611aa.chunk.js.map