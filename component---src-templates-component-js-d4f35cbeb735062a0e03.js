(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"22hC":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return b}));var a=t("KQm4"),r=t("dI71"),i=t("ijCd"),o=t.n(i),s=t("k8Y/"),c=t.n(s),l=t("E+oP"),m=t.n(l),u=t("J2m7"),d=t.n(u),p=t("1iNE"),N=t.n(p),f=t("3WF5"),E=t.n(f),M=t("Y3Pm"),v=t.n(M),g=t("56YH"),C=t.n(g),x=t("bNQv"),j=t.n(x),I=t("ZiUS"),L=t.n(I),w=t("mwIZ"),y=t.n(w),D=t("q1tI"),k=t.n(D),h=t("+ZDr"),z=t.n(h),P=t("TSYQ"),T=t.n(P),Z=(t("3eks"),t("rv36")),Q=t.n(Z),b=function(e){function n(){return e.apply(this,arguments)||this}Object(r.a)(n,e);var t=n.prototype;return t.extractComponentsInfo=function(e){var n=/([\s\S]*?):([\s\S]*)/,t={description:y()(e,"description.text")};if(e.docblock){var a=L()(e.docblock,"@");j()(a,(function(e){var a=n.exec(e);if(e&&a){var r=a[1];t[r]=a[2]}}))}return t},t.renderLink=function(e){var n=this.props.pageContext.components,t=C()((function(e){return v()(e,/ /g,"")}),(function(e){return L()(e,",")}))(e.extends);return E()(t,(function(a,r){var i=r===N()(t)-1,o=a+(i?"":", "),s=d()(n,(function(e){return e.node.displayName.trim()===a.trim()})),c=!s&&e.extendsLink?e.extendsLink:"/docs/"+a;return k.a.createElement("span",{className:"inline",key:a},!s&&e.extendsLink?k.a.createElement("a",{href:e.extendsLink,rel:"noopener noreferrer",target:"_blank"},o):k.a.createElement(z.a,{to:c},o),e.extendsnotes,k.a.createElement("br",null))}))},t.renderModifiers=function(e){var n=e.modifiers?L()(e.modifiers,","):[];if(!m()(n))return k.a.createElement("div",{className:"modifiers"},k.a.createElement("span",{className:"title"},"Supported ",k.a.createElement(z.a,{to:"/foundation/modifiers"},"Modifiers"),k.a.createElement("span",{className:"tooltip"},"Quick useful props that help with styling your component. Read more at the link.")),k.a.createElement("ul",{className:"modifiers-list"},E()(n,(function(e){return k.a.createElement("li",null,e)}))))},t.renderExtends=function(e,n){var t=this.renderLink(e);if(!m()(t))return k.a.createElement("div",{className:"extend-section"},k.a.createElement("span",{className:"title"},"Extends",k.a.createElement("span",{className:"tooltip"},n.displayName," support passing these components' props as well.")),k.a.createElement("ul",null,E()(t,(function(e){return k.a.createElement("li",{className:"link",key:e},e)}))))},t.renderImportant=function(e){if(e.important)return k.a.createElement("div",{alt:"",style:{marginBottom:10}},e.important,e.importantLink&&k.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.importantLink},"here"))},t.renderNotes=function(e){var n=e.notes?e.notes.split(";"):void 0;if(!m()(n)||e.important)return k.a.createElement("div",{className:"notes"},k.a.createElement("span",{className:"title"},k.a.createElement("img",{src:Q.a,alt:"important"})," Important"),E()(n,(function(e,n){return k.a.createElement("div",{key:n},e)})),this.renderImportant(e))},t.renderVisuals=function(e){var n=e.gif?e.gif.split(","):[],t=e.image?e.image.split(","):[],r=[].concat(Object(a.a)(n),Object(a.a)(t));if(!m()(r))return k.a.createElement("div",{className:"visuals"},E()(r,(function(e,n){return k.a.createElement("img",{key:n,alt:"",src:e})})))},t.renderSidebar=function(e,n){return k.a.createElement("div",{className:"sidebar"},k.a.createElement(Y,{props:n}),this.renderVisuals(e))},t.renderComponentPage=function(){var e,n,t=this.props.pageContext,a=null===(e=this.props)||void 0===e||null===(n=e.location)||void 0===n?void 0:n.href,r=t.componentNode,i=this.extractComponentsInfo(r),o=c()(y()(r,"props"),(function(e){return e.name.toLowerCase()})),s=L()(i.example,","),l=i.modifiers||i.extends;return k.a.createElement("div",{className:"docs-page"},k.a.createElement("div",{className:"docs-page__content"},this.renderSidebar(i,o),k.a.createElement("div",{className:"component-header"},k.a.createElement("div",null,k.a.createElement("h2",{className:"title inline"},r.displayName),E()(s,(function(e){return k.a.createElement("span",{key:e,className:"code-example"},"(",k.a.createElement("a",{className:"inline",target:"_blank",rel:"noopener noreferrer",href:e},"code example"),")")})),k.a.createElement("p",{className:"description"},i.description)),l&&k.a.createElement("div",null,this.renderModifiers(i),this.renderExtends(i,r))),this.renderNotes(i),k.a.createElement(S,{props:o,href:a})))},t.render=function(){var e=!y()(this.props,"pageContext.componentNode");return k.a.createElement("div",{style:{width:"100%"}},e&&k.a.createElement("div",{className:"docs-page"},k.a.createElement("div",{className:"docs-page__content"},k.a.createElement("div",null,"Select a component from the left sidebar"))),!e&&this.renderComponentPage())},n}(D.Component),S=function(e){var n=e.props,t=e.href,a=void 0===t?"":t;return k.a.createElement("div",{className:"component-api"},k.a.createElement("h3",null,"API"),E()(n,(function(e){var n=y()(e,"description.text"),t=y()(e,"defaultValue.value"),r=o()(a,"#"+e.name),i=T()("title",{focused:r});return k.a.createElement("div",{key:e.name,className:"prop-info"},k.a.createElement("a",{name:e.name},k.a.createElement("h5",{className:i},e.name)),k.a.createElement("p",{className:"description default-size"},n),k.a.createElement("p",{className:"type"},y()(e,"type.name")),t&&k.a.createElement("p",{className:"default-value"},"default: ",y()(e,"defaultValue.value")))})))},Y=function(e){var n=e.props;return k.a.createElement("div",{className:"table-of-content"},k.a.createElement("ul",null,k.a.createElement("div",{className:"list-header"},"Props"),E()(n,(function(e){return k.a.createElement("li",{key:e.name},k.a.createElement("a",{href:"#"+e.name},e.name))}))))}},"3eks":function(e,n,t){},EwQA:function(e,n,t){var a=t("zZ0H");e.exports=function(e){return"function"==typeof e?e:a}},JmpY:function(e,n,t){var a=t("eUgh");e.exports=function(e,n){return a(n,(function(n){return e[n]}))}},"P/G1":function(e,n,t){var a=t("JmpY"),r=t("7GkX");e.exports=function(e){return null==e?[]:a(e,r(e))}},bNQv:function(e,n,t){var a=t("gFfm"),r=t("SKAX"),i=t("EwQA"),o=t("Z0cm");e.exports=function(e,n){return(o(e)?a:r)(e,i(n))}},gFfm:function(e,n){e.exports=function(e,n){for(var t=-1,a=null==e?0:e.length;++t<a&&!1!==n(e[t],t,e););return e}},ijCd:function(e,n,t){var a=t("R/W3"),r=t("MMmD"),i=t("4qC0"),o=t("Sxd8"),s=t("P/G1"),c=Math.max;e.exports=function(e,n,t,l){e=r(e)?e:s(e),t=t&&!l?o(t):0;var m=e.length;return t<0&&(t=c(m+t,0)),i(e)?t<=m&&e.indexOf(n,t)>-1:!!m&&a(e,n,t)>-1}},"k8Y/":function(e,n,t){var a=t("alwl"),r=t("Z0cm");e.exports=function(e,n,t,i){return null==e?[]:(r(n)||(n=null==n?[]:[n]),r(t=i?void 0:t)||(t=null==t?[]:[t]),a(e,n,t))}},rv36:function(e,n){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IndoaXRlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjQ5NywwLDAsMTE0LjUwNywwLDI1NmMwLDE0MS41MDMsMTE0LjUwNywyNTYsMjU2LDI1NmMxNDEuNTAzLDAsMjU2LTExNC41MDcsMjU2LTI1Ng0KCQkJQzUxMiwxMTQuNDk3LDM5Ny40OTMsMCwyNTYsMHogTTI1Niw0NzJjLTExOS4zOTMsMC0yMTYtOTYuNjE1LTIxNi0yMTZjMC0xMTkuMzkzLDk2LjYxNS0yMTYsMjE2LTIxNg0KCQkJYzExOS4zOTMsMCwyMTYsOTYuNjE1LDIxNiwyMTZDNDcyLDM3NS4zOTMsMzc1LjM4NSw0NzIsMjU2LDQ3MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTI1NiwxMjguODc3Yy0xMS4wNDYsMC0yMCw4Ljk1NC0yMCwyMFYyNzcuNjdjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBzMjAtOC45NTQsMjAtMjBWMTQ4Ljg3Nw0KCQkJQzI3NiwxMzcuODMxLDI2Ny4wNDYsMTI4Ljg3NywyNTYsMTI4Ljg3N3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPGNpcmNsZSBjeD0iMjU2IiBjeT0iMzQ5LjE2IiByPSIyNyIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K"}}]);
//# sourceMappingURL=component---src-templates-component-js-d4f35cbeb735062a0e03.js.map