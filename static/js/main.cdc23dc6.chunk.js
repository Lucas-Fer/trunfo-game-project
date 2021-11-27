(this["webpackJsonptrunfo-game-project"]=this["webpackJsonptrunfo-game-project"]||[]).push([[0],{16:function(t,e,a){},18:function(t,e,a){},19:function(t,e,a){"use strict";a.r(e);var r=a(1),c=a.n(r),n=a(9),d=a.n(n),i=(a(16),a(10)),s=a(11),o=a(7),l=a(2),u=a(3),h=a(6),j=a(5),b=a(4),p=a(0),m=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.cardName,a=t.cardDescription,r=t.cardAttr1,c=t.cardAttr2,n=t.cardAttr3,d=t.cardImage,i=t.cardRare,s=t.cardTrunfo,o=t.hasTrunfo,l=t.isSaveButtonDisabled,u=t.onInputChange,h=t.onSaveButtonClick;return Object(p.jsxs)("form",{children:[Object(p.jsx)("h1",{children:"Crie sua carta"}),Object(p.jsxs)("label",{htmlFor:"cardName",children:[Object(p.jsx)("p",{children:"Nome:"}),Object(p.jsx)("input",{type:"text","data-testid":"name-input",name:"cardName",id:"cardName",value:e,onChange:u})]}),Object(p.jsxs)("label",{htmlFor:"cardDescription",children:[Object(p.jsx)("p",{children:"Descri\xe7\xe3o:"}),Object(p.jsx)("textarea",{"data-testid":"description-input",name:"cardDescription",id:"cardDescription",value:a,onChange:u})]}),Object(p.jsxs)("label",{htmlFor:"cardAttr1",children:[Object(p.jsx)("p",{children:"Atributo 1"}),Object(p.jsx)("input",{type:"number","data-testid":"attr1-input",name:"cardAttr1",id:"cardAttr1",value:r,onChange:u,max:"90",min:"0"})]}),Object(p.jsxs)("label",{htmlFor:"cardAttr2",children:[Object(p.jsx)("p",{children:"Atributo 2"}),Object(p.jsx)("input",{type:"number","data-testid":"attr2-input",name:"cardAttr2",id:"cardAttr2",value:c,onChange:u,max:"90",min:"0"})]}),Object(p.jsxs)("label",{htmlFor:"cardAttr3",children:[Object(p.jsx)("p",{children:"Atributo 3"}),Object(p.jsx)("input",{type:"number","data-testid":"attr3-input",name:"cardAttr3",id:"cardAttr3",value:n,onChange:u,max:"90",min:"0"})]}),Object(p.jsxs)("label",{htmlFor:"cardImage",children:[Object(p.jsx)("p",{children:"URL da imagem"}),Object(p.jsx)("input",{type:"text","data-testid":"image-input",name:"cardImage",id:"cardImage",value:d,onChange:u})]}),Object(p.jsxs)("label",{htmlFor:"cardRare",children:[Object(p.jsx)("p",{children:"Raridade"}),Object(p.jsxs)("select",{"data-testid":"rare-input",id:"cardRare",name:"cardRare",value:i,onChange:u,children:[Object(p.jsx)("option",{value:"normal",children:"Normal"}),Object(p.jsx)("option",{value:"raro",children:"Raro"}),Object(p.jsx)("option",{value:"muito raro",children:"Muito raro"})]})]}),!0===o?Object(p.jsx)("p",{children:"Voc\xea j\xe1 tem um Super Trunfo em seu baralho"}):Object(p.jsxs)("label",{htmlFor:"cardTrunfo",children:[Object(p.jsx)("p",{children:"Super trunfo?"}),Object(p.jsx)("input",{type:"checkbox","data-testid":"trunfo-input",name:"cardTrunfo",id:"cardTrunfo",checked:s,onChange:u})]}),Object(p.jsx)("button",{disabled:l,onClick:h,type:"submit","data-testid":"save-button",children:"Salvar"})]})}}]),a}(r.Component),x=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.cardName,a=t.cardDescription,r=t.cardAttr1,c=t.cardAttr2,n=t.cardAttr3,d=t.cardImage,i=t.cardRare,s=t.cardTrunfo,o=t.cardCreate,l=t.onRemoveCard,u=t.index;return Object(p.jsxs)("main",{children:[Object(p.jsx)("h3",{"data-testid":"name-card",children:e}),Object(p.jsx)("img",{"data-testid":"image-card",src:d,alt:e}),Object(p.jsx)("span",{"data-testid":"description-card",children:a}),Object(p.jsx)("span",{"data-testid":"attr1-card",children:r}),Object(p.jsx)("span",{"data-testid":"attr2-card",children:c}),Object(p.jsx)("span",{"data-testid":"attr3-card",children:n}),Object(p.jsx)("span",{"data-testid":"rare-card",children:i}),s?Object(p.jsx)("span",{"data-testid":"trunfo-card",children:"Super Trunfo"}):null,Object(p.jsx)("span",{children:o?Object(p.jsx)("button",{onClick:function(){return l(u)},type:"button","data-testid":"delete-button",children:"Excluir"}):null})]})}}]),a}(r.Component),O=function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){return Object(l.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){var t=this.props,e=t.searchCard,a=t.searchInput,r=t.rarity,c=t.handleSelect,n=t.handleCheckboxFilter,d=t.checkboxDisable;return Object(p.jsxs)("section",{children:[Object(p.jsx)("h1",{children:"Filtro de busca"}),Object(p.jsx)("input",{placeholder:"Nome da carta","data-testid":"name-filter",type:"text",onChange:e,value:a,disabled:d}),Object(p.jsxs)("select",{onChange:c,"data-testid":"rare-filter",value:r,disabled:d,children:[Object(p.jsx)("option",{value:"todas",children:"Todas"}),Object(p.jsx)("option",{value:"normal",children:"Normal"}),Object(p.jsx)("option",{value:"raro",children:"Raro"}),Object(p.jsx)("option",{value:"muito raro",children:"Muito raro"})]}),Object(p.jsx)("label",{htmlFor:"filterInput",children:Object(p.jsx)("input",{type:"checkbox",id:"filterInput","data-testid":"trunfo-filter",onClick:n})})]})}}]),a}(r.Component),v=(a(18),function(t){Object(j.a)(a,t);var e=Object(b.a)(a);function a(){var t;return Object(l.a)(this,a),(t=e.call(this)).handleCheckBox=function(){t.state.hasTrunfo&&t.setState({checkedButtonDisable:!0})},t.searchCard=function(e){var a=e.target.value;t.setState({searchInput:a})},t.handleSelect=function(e){var a=e.target.value;"todas"===a?t.setState({rarity:""}):t.setState({rarity:a})},t.handleCheckboxFilter=function(e){var a=e.target,r=t.state.arraySave.find((function(t){return t.hasTrunfo}));r&&t.setState({trunfoFiltered:r.cardName});var c=a.checked;c?t.setState({checkboxDisable:c}):t.setState({checkboxDisable:!1})},t.state={arraySave:[],cardName:"",cardDescription:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardImage:"",cardRare:"normal",cardTrunfo:!1,hasTrunfo:!1,cardCreate:!1,isSaveButtonDisabled:!0,searchInput:"",rarity:"",trunfoFiltered:"",checkboxDisable:!1},t.onInputChange=t.onInputChange.bind(Object(h.a)(t)),t.isvalid=t.isvalid.bind(Object(h.a)(t)),t.onSaveButtonClick=t.onSaveButtonClick.bind(Object(h.a)(t)),t.onRemoveCard=t.onRemoveCard.bind(Object(h.a)(t)),t}return Object(u.a)(a,[{key:"onInputChange",value:function(t){var e=this,a=t.target,r=a.name,c="checkbox"===a.type?a.checked:a.value;this.setState(Object(o.a)({},r,c),(function(){return e.isvalid()}))}},{key:"onSaveButtonClick",value:function(t){var e=this;t.preventDefault(),this.state.cardTrunfo&&this.setState({hasTrunfo:!0}),this.setState((function(t){return{arraySave:[].concat(Object(s.a)(t.arraySave),[Object(i.a)({},t)])}}),(function(){e.setState({cardName:"",cardDescription:"",cardImage:"",cardAttr1:"0",cardAttr2:"0",cardAttr3:"0",cardRare:"normal",cardCreate:!0,isSaveButtonDisabled:!0,cardTrunfo:!1})}))}},{key:"onRemoveCard",value:function(t){var e=this.state.arraySave;e[t].cardTrunfo&&this.setState({hasTrunfo:!1});var a=e.filter((function(e,a){return a!==t}));this.setState({arraySave:a})}},{key:"isvalid",value:function(){var t=this.state,e=t.cardName,a=t.cardDescription,r=t.cardAttr1,c=t.cardAttr2,n=t.cardAttr3,d=t.cardImage,i=t.cardRare,s=[],o=Number(r),l=Number(c),u=Number(n);s.push(e.length>0&&a.length>0&&d.length>0&&i.length>0&&o>=0&&o<=90&&l>=0&&l<=90&&u>=0&&u<=90&&o+l+u<=210),s.every((function(t){return!0===t}))?this.setState({isSaveButtonDisabled:!1}):this.setState({isSaveButtonDisabled:!0})}},{key:"render",value:function(){var t=this.state,e=t.cardName,a=t.cardDescription,r=t.cardAttr1,c=t.cardAttr2,n=t.cardAttr3,d=t.cardImage,i=t.cardRare,s=t.cardTrunfo,o=t.hasTrunfo,l=t.isSaveButtonDisabled,u=t.arraySave,h=t.cardCreate,j=t.searchInput,b=t.rarity,v=t.checkboxDisable,f=this.onInputChange,C=this.onSaveButtonClick,g=this.onRemoveCard,S=this.searchCard,A=this.handleSelect,k=this.handleCheckboxFilter;return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("div",{className:"main-content",children:[Object(p.jsx)(m,{cardName:e,cardDescription:a,cardAttr1:r,cardAttr2:c,cardAttr3:n,cardImage:d,cardRare:i,cardTrunfo:s,hasTrunfo:o,isSaveButtonDisabled:l,onInputChange:f,onSaveButtonClick:C}),Object(p.jsx)(x,{cardName:e,cardDescription:a,cardAttr1:r,cardAttr2:c,cardAttr3:n,cardImage:d,cardRare:i,cardTrunfo:s,index:0,cardCreate:!1,onRemoveCard:g},"preview")]}),Object(p.jsxs)("div",{children:[Object(p.jsx)(O,{handleSelect:A,searchCard:S,searchInput:j,rarity:b,handleCheckboxFilter:k,checkboxDisable:v}),Object(p.jsx)("span",{children:u.filter((function(t){return t.cardName.includes(j)})).filter((function(t){return v?t.cardTrunfo:""===b?t.cardRare.includes(b):""===b||t.cardRare===b})).map((function(t,e){return Object(p.jsx)("div",{children:Object(p.jsx)(x,{cardName:t.cardName,cardDescription:t.cardDescription,cardAttr1:t.cardAttr1,cardAttr2:t.cardAttr2,cardAttr3:t.cardAttr3,cardImage:t.cardImage,cardRare:t.cardRare,cardTrunfo:t.cardTrunfo,cardCreate:h,onRemoveCard:g,index:e},e)},e)}))})]})]})}}]),a}(c.a.Component));d.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(v,{})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.cdc23dc6.chunk.js.map