(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{26:function(t,e,n){},27:function(t,e,n){},47:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(14),s=n.n(c),r=(n(26),n(27),n(15)),o=n(16),l=n(21),u=n(18),d=n(0);var j=function(t){return Object(d.jsx)("div",{className:"container".concat(t.fluid?"-fluid":""),children:t.children})};var m=function(t){return Object(d.jsx)("div",{className:"row".concat(t.fluid?"-fluid":""),children:t.children})};var h=function(t){var e=t.size.split(" ").map((function(t){return"col-"+t})).join(" ");return Object(d.jsx)("div",{className:e,children:t.children})};var f=function(t){return Object(d.jsxs)("div",{className:"text-center",children:[Object(d.jsxs)("h3",{children:["Name: ",t.firstName," ",t.lastName]}),Object(d.jsxs)("h3",{children:["Location: ",t.location]})]})},b=n(17),O=n.n(b),N=function(t){return O.a.get("https://randomuser.me/api/?results=20")},x=n(19),v=n(20);function p(t){var e=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=i.a.useState(e),a=Object(v.a)(n,2),c=a[0],s=a[1];return{items:i.a.useMemo((function(){var e=Object(x.a)(t);return null!==c&&e.sort((function(t,e){return t[c.key]<e[c.key]?"ascending"===c.direction?-1:1:t[c.key]>e[c.key]?"ascending"===c.direction?1:-1:0})),e}),[t,c]),requestSort:function(t){var e="ascending";c&&c.key===t&&"ascending"===c.direction&&(e="descending"),s({key:t,direction:e})},sortConfig:c}}(t.people),n=e.items,a=e.requestSort,c=e.sortConfig,s=function(t){if(c)return c.key===t?c.direction:void 0};return Object(d.jsxs)("table",{children:[Object(d.jsx)("caption",{children:"Employee Directory"}),Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return a("name")},className:s("name"),children:"Name"})}),Object(d.jsx)("th",{children:Object(d.jsx)("button",{type:"button",onClick:function(){return a("location")},className:s("location"),children:"Location"})})]})}),Object(d.jsx)("tbody",{children:n.map((function(t){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:t.name}),Object(d.jsx)("td",{children:t.location})]},t.id)}))})]})}var y=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={firstName1:"",lastName1:"",location1:"",columns:"",data:"",id:0,firstName2:"",lastName2:"",location2:"",firstName3:"",lastName3:"",location3:""},t.renderNew=function(){N().then((function(e){for(var n=0;n<e.data.results.length;n++){e.data.results[n];var a=e.data.results[0].name.first,i=e.data.results[0].name.last,c=e.data.results[0].location.country,s=e.data.results[1].name.first,r=e.data.results[1].name.last,o=e.data.results[1].location.country}t.setState({firstName:a,lastName:i,location:c}),t.setState({firstName2:s,lastName2:r,location2:o})}))},t}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.renderNew()}},{key:"render",value:function(){return Object(d.jsx)(j,{children:Object(d.jsxs)(m,{children:[Object(d.jsxs)(h,{size:"md-8",children:[Object(d.jsx)(f,{firstName:this.state.firstName,lastName:this.state.lastName,location:this.state.location,id:this.state.id}),Object(d.jsx)(p,{people:[{name:this.state.firstName+" "+this.state.lastName,location:this.state.location},{name:this.state.firstName2+" "+this.state.lastName2,location:this.state.location2}]})]}),Object(d.jsx)(h,{size:"md-4"})]})})}}]),n}(a.Component);var g=function(){return Object(d.jsx)(y,{})},k=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;n(t),a(t),i(t),c(t),s(t)}))};s.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),k()}},[[47,1,2]]]);
//# sourceMappingURL=main.3ba76570.chunk.js.map