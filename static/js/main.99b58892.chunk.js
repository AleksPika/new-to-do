(this["webpackJsonpto-do"]=this["webpackJsonpto-do"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=a(1),s=a(2),l=a(3),u=a(5),d=a(4);a(13);var m=function(t){var e=t.isDone,a=t.isImportant,n=t.text,o=t.onItemClick,i=t.onImportantClick,c=t.onDeleteItemClick,s=t.id,l="list-group-item";return l+=e?" done":"",l+=a?" important":"",r.a.createElement("li",{className:l},r.a.createElement("button",{className:"btn btn-outline-danger float-right",title:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){return c(s)}},r.a.createElement("i",{className:"del fas fa-trash-alt float-right "})),r.a.createElement("button",{className:"btn btn-outline-success float-right mr-2",title:"\u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0432\u0430\u0436\u043d\u044b\u043c",onClick:function(){return i(s)}},r.a.createElement("i",{className:"imp fas fa-star float-right"})),r.a.createElement("span",{onClick:function(){return o(s)},className:"d-block"},n))};a(14);var f=function(t){var e=t.data,a=t.onItemClick,n=t.onImportantClick,o=t.onDeleteItemClick;return r.a.createElement("ul",{className:"toDoList list-group"},e.map((function(t){return r.a.createElement(m,Object.assign({key:t.id,onItemClick:a,onImportantClick:n,onDeleteItemClick:o},t))})))};a(15);var p=function(t){var e=t.all,a=t.done,n=t.important,o=t.onStatClick,i=t.filter,c={paddingLeft:""};c.paddingLeft=Number(100*a)/Number(e)+"%";var s="badge m-1 c-pointer",l="".concat(s," badge-dark").concat("done"===i?" badge-pill":""),u="".concat(s," badge-info").concat("important"===i?" badge-pill":""),d="".concat(s," badge-success").concat("all"===i?" badge-pill":"");return r.a.createElement("section",null,r.a.createElement("p",{className:"statistic"},r.a.createElement("span",{className:l,role:"button",title:"\u0421\u0434\u0435\u043b\u0430\u043d\u043e",onClick:function(){return o("done")}},r.a.createElement("i",{className:"fas fa-check-circle"})," ",a),r.a.createElement("span",{className:u,role:"button",title:"\u0412\u0430\u0436\u043d\u043e",onClick:function(){return o("important")}},r.a.createElement("i",{className:"fas fa-star"})," ",n),r.a.createElement("span",{className:d,role:"button",title:"\u0412\u0441\u0435",onClick:function(){return o("all")}},r.a.createElement("i",{className:"fas fa-list-alt"})," ",e)),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar-striped progress-bar-animated bg-warning",role:"progressbar","aria-valuenow":a,"aria-valuemin":"0","aria-valuemax":e,style:c})))},b=(a(16),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))).state={input:""},t.onAddTask=function(){t.props.onAddItem(t.state.input),t.setState({input:""})},t.onInputChange=function(e){t.setState({input:e.target.value})},t}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443","aria-label":"Add todo task",onChange:this.onInputChange,value:this.state.input}),r.a.createElement("div",{className:"input-group-append"},r.a.createElement("button",{className:"btn btn-outline-secondary",type:"button",onClick:this.onAddTask},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c")))}}]),a}(n.Component));a(17);var h=function(t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"form-control mb-1",type:"search",id:"search",placeholder:"\ud83d\udd0d \u041f\u043e\u0438\u0441\u043a \u0437\u0430\u0434\u0430\u0447\u0438",onChange:t.onSearchInput}))};var k=function(t){return r.a.createElement("div",{className:"d-flex justify-content-center w-100"},r.a.createElement("button",{type:"button",className:"btn btn-danger w-100 m-3",onClick:t.onDeleteClick},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0441\u0435"))},v=(a(18),function(t){Object(u.a)(a,t);var e=Object(d.a)(a);function a(t){var n;return Object(s.a)(this,a),(n=e.call(this,t)).state={maxId:1,todos:[],filter:"all",search:""},n.db=null,n.onItemClick=function(t){var e=Object(c.a)(n.state.todos);e.forEach((function(e){e.id===t&&(e.isDone=!e.isDone,n.dbUpdate(e))})),n.setState({todos:e})},n.onImportantClick=function(t){var e=Object(c.a)(n.state.todos);e.forEach((function(e){e.id===t&&(e.isImportant=!e.isImportant,n.dbUpdate(e))})),n.setState({todos:e})},n.onAddItem=function(t){var e=Object(c.a)(n.state.todos),a=n.generateItem(t);e.unshift(a),n.dbAdd(a),n.setState({todos:e})},n.onDeleteItemClick=function(t){var e=n.state.todos.filter((function(e){return e.id!==t}));n.setState({todos:e}),n.dbDelete(t)},n.onStatClick=function(t){n.setState({filter:t})},n.onSearchInput=function(t){n.setState({search:t.target.value})},n.onDeleteClick=function(){n.setState({maxId:1,todos:[],filter:"all",search:""}),n.dbDeleteAll()},n.dbInit(),n.dbRead(),n}return Object(l.a)(a,[{key:"stateInit",value:function(t){var e=this;t.onsuccess=function(t){var a=t.target.result,n=a.reduce((function(t,e){var a=e.id;return t>a?t:a}),1);e.setState({todos:a,visible:a,maxId:n})}}},{key:"dbRead",value:function(){this.dbOperation("read")}},{key:"dbInit",value:function(){window.indexedDB.open("tasksBank",1).onupgradeneeded=function(t){t.target.result.createObjectStore("tasks",{keyPath:"id"})}}},{key:"dbAdd",value:function(t){this.dbOperation("create",t)}},{key:"dbUpdate",value:function(t){this.dbOperation("update",t)}},{key:"dbDelete",value:function(t){this.dbOperation("delete",t)}},{key:"dbDeleteAll",value:function(){this.dbOperation("delete-all")}},{key:"dbOperation",value:function(t,e){var a=this,n=window.indexedDB.open("tasksBank",1),r="read"===t?"readonly":"readwrite";n.onsuccess=function(){var o=n.result.transaction("tasks",r);o.onerror=function(){console.error("error in looking for task object store")};var i=o.objectStore("tasks");switch(t){case"create":i.add(e);break;case"update":i.put(e);break;case"delete":i.delete(e);break;case"read":var c=i.getAll();a.stateInit(c);break;case"delete-all":i.clear();break;default:console.log("error")}}}},{key:"generateItem",value:function(t){0===t.length&&(t="\u0417\u0430\u0434\u0430\u0447\u0430 \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0430");var e=this.state.maxId+1;return this.setState({maxId:e}),{id:e,text:t,isDone:!1,isImportant:!1}}},{key:"filter",value:function(){var t=Object(c.a)(this.state.todos);return"all"===this.state.filter?t:"done"===this.state.filter?t.filter((function(t){return t.isDone})):"important"===this.state.filter?t.filter((function(t){return t.isImportant})):void 0}},{key:"generateStatistic",value:function(){return{all:this.state.todos.length,done:this.state.todos.reduce((function(t,e){return t+(e.isDone?1:0)}),0),important:this.state.todos.reduce((function(t,e){return t+(e.isImportant?1:0)}),0),filter:this.state.filter,onStatClick:this.onStatClick}}},{key:"search",value:function(t){if(""===this.state.search)return t;var e=new RegExp(this.state.search,"i");return t.filter((function(t){var a=t.text;return e.test(a)}))}},{key:"render",value:function(){var t=this.generateStatistic(),e=this.filter(),a=this.search(e);return r.a.createElement("div",{className:"app"},r.a.createElement("h1",{className:"text-center"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0434\u0430\u0447"),r.a.createElement("div",{className:"input-group mb-3"},r.a.createElement(p,t)),r.a.createElement(b,{onAddItem:this.onAddItem}),r.a.createElement(h,{onSearchInput:this.onSearchInput}),r.a.createElement(f,{data:a,onItemClick:this.onItemClick,onImportantClick:this.onImportantClick,onDeleteItemClick:this.onDeleteItemClick}),r.a.createElement(k,{onDeleteClick:this.onDeleteClick}))}}]),a}(n.Component));i.a.render(r.a.createElement(v,null),document.querySelector("#root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.99b58892.chunk.js.map