(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+eM2":function(e,t,n){},"16Xr":function(e,t,n){"use strict";var r=n("nONw"),a=n("BjK0"),o=n("+wZX"),i=[].slice,c={},s=function(e,t,n){if(!(t in c)){for(var r=[],a=0;a<t;a++)r[a]="a["+a+"]";c[t]=Function("F,a","return new F("+r.join(",")+")")}return c[t](e,n)};e.exports=Function.bind||function(e){var t=r(this),n=i.call(arguments,1),c=function(){var r=n.concat(i.call(arguments));return this instanceof c?s(t,r.length,r):o(t,r,e)};return a(t.prototype)&&(c.prototype=t.prototype),c}},"2W6z":function(e,t,n){"use strict";n("sC2a");var r=function(){};e.exports=r},"3nLz":function(e,t,n){"use strict";n("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"7j6X":function(e,t,n){"use strict";n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("JHok");var r=n("dZvc");function a(e,t){return function(e){var t=Object(r.a)(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}n("sC2a");var o=/([A-Z])/g;var i=/^ms-/;function c(e){return function(e){return e.replace(o,"-$1").toLowerCase()}(e).replace(i,"-ms-")}var s=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;t.a=function(e,t){var n="",r="";if("string"==typeof t)return e.style.getPropertyValue(c(t))||a(e).getPropertyValue(c(t));Object.keys(t).forEach((function(a){var o=t[a];o||0===o?!function(e){return!(!e||!s.test(e))}(a)?n+=c(a)+": "+o+";":r+=a+"("+o+") ":e.style.removeProperty(c(a))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n}},"8ypT":function(e,t,n){},Bl7J:function(e,t,n){"use strict";var r=n("IRj2"),a=n("q1tI"),o=n.n(a),i=(n("+eM2"),n("Wbzz")),c=(n("3nLz"),n("wx14")),s=n("zLVn"),u=n("TSYQ"),l=n.n(u),f=n("JCAc"),d=n("YdCC"),p=n("vUet"),v=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,i=Object(s.a)(e,["bsPrefix","className","as"]);n=Object(p.a)(n,"navbar-brand");var u=a||(i.href?"a":"span");return o.a.createElement(u,Object(c.a)({},i,{ref:t,className:l()(r,n)}))}));v.displayName="NavbarBrand";var m=v,b=n("7j6X"),h=(n("sc67"),n("GEtZ"));function E(e,t,n){void 0===n&&(n=5);var r=!1,a=setTimeout((function(){r||function(e){var t=document.createEvent("HTMLEvents");t.initEvent("transitionend",!0,!0),e.dispatchEvent(t)}(e)}),t+n),o=Object(h.a)(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(a),o()}}function x(e,t,n,r){var a,o,i;null==n&&(a=e,o=Object(b.a)(a,"transitionDuration")||"",i=-1===o.indexOf("ms")?1e3:1,n=parseFloat(o)*i||0);var c=E(e,n,r),s=Object(h.a)(e,"transitionend",t);return function(){c(),s()}}var g=n("dI71"),y=n("i8i4"),j=n.n(y),O=!1,w=o.a.createContext(null),N=function(e){function t(t,n){var r;r=e.call(this,t,n)||this;var a,o=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?o?(a="exited",r.appearStatus="entering"):a="entered":a=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",r.state={status:a},r.nextCallback=null,r}Object(g.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!=typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,a=this.props.nodeRef?[r]:[j.a.findDOMNode(this),r],o=a[0],i=a[1],c=this.getTimeouts(),s=r?c.appear:c.enter;!e&&!n||O?this.safeSetState({status:"entered"},(function(){t.props.onEntered(o)})):(this.props.onEnter(o,i),this.safeSetState({status:"entering"},(function(){t.props.onEntering(o,i),t.onTransitionEnd(s,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(o,i)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:j.a.findDOMNode(this);t&&!O?(this.props.onExit(r),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(r)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:j.a.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],i=a[1];this.props.addEndListener(o,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(s.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return o.a.createElement(w.Provider,{value:null},"function"==typeof n?n(e,r):o.a.cloneElement(o.a.Children.only(n),r))},t}(o.a.Component);function C(){}N.contextType=w,N.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:C,onEntering:C,onEntered:C,onExit:C,onExiting:C,onExited:C},N.UNMOUNTED="unmounted",N.EXITED="exited",N.ENTERING="entering",N.ENTERED="entered",N.EXITING="exiting";var P=N;n("OeI1"),n("U6Bt");var k,S=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!=typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];e.apply(this,r),t.apply(this,r)}}),null)};var R={height:["marginTop","marginBottom"],width:["marginLeft","marginRight"]};function T(e,t){var n=t["offset"+e[0].toUpperCase()+e.slice(1)],r=R[e];return n+parseInt(Object(b.a)(t,r[0]),10)+parseInt(Object(b.a)(t,r[1]),10)}var I=((k={}).exited="collapse",k.exiting="collapsing",k.entering="collapsing",k.entered="collapse show",k),D={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1,getDimensionValue:T},A=o.a.forwardRef((function(e,t){var n=e.onEnter,r=e.onEntering,i=e.onEntered,u=e.onExit,f=e.onExiting,d=e.className,p=e.children,v=e.dimension,m=void 0===v?"height":v,b=e.getDimensionValue,h=void 0===b?T:b,E=Object(s.a)(e,["onEnter","onEntering","onEntered","onExit","onExiting","className","children","dimension","getDimensionValue"]),g="function"==typeof m?m():m,y=Object(a.useMemo)((function(){return S((function(e){e.style[g]="0"}),n)}),[g,n]),j=Object(a.useMemo)((function(){return S((function(e){var t="scroll"+g[0].toUpperCase()+g.slice(1);e.style[g]=e[t]+"px"}),r)}),[g,r]),O=Object(a.useMemo)((function(){return S((function(e){e.style[g]=null}),i)}),[g,i]),w=Object(a.useMemo)((function(){return S((function(e){e.style[g]=h(g,e)+"px",e.offsetHeight}),u)}),[u,h,g]),N=Object(a.useMemo)((function(){return S((function(e){e.style[g]=null}),f)}),[g,f]);return o.a.createElement(P,Object(c.a)({ref:t,addEndListener:x},E,{"aria-expanded":E.role?E.in:null,onEnter:y,onEntering:j,onEntered:O,onExit:w,onExiting:N}),(function(e,t){return o.a.cloneElement(p,Object(c.a)({},t,{className:l()(d,p.props.className,I[e],"width"===g&&"width")}))}))}));A.defaultProps=D;var L=A,K=o.a.createContext(null);K.displayName="NavbarContext";var M=K,J=o.a.forwardRef((function(e,t){var n=e.children,r=e.bsPrefix,a=Object(s.a)(e,["children","bsPrefix"]);return r=Object(p.a)(r,"navbar-collapse"),o.a.createElement(M.Consumer,null,(function(e){return o.a.createElement(L,Object(c.a)({in:!(!e||!e.expanded)},a),o.a.createElement("div",{ref:t,className:r},n))}))}));J.displayName="NavbarCollapse";var q=J,F=n("ZCiN"),U=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,u=e.label,f=e.as,d=void 0===f?"button":f,v=e.onClick,m=Object(s.a)(e,["bsPrefix","className","children","label","as","onClick"]);n=Object(p.a)(n,"navbar-toggler");var b=Object(a.useContext)(M)||{},h=b.onToggle,E=b.expanded,x=Object(F.a)((function(e){v&&v(e),h&&h()}));return"button"===d&&(m.type="button"),o.a.createElement(d,Object(c.a)({},m,{ref:t,onClick:x,"aria-label":u,className:l()(r,n,!E&&"collapsed")}),i||o.a.createElement("span",{className:n+"-icon"}))}));U.displayName="NavbarToggle",U.defaultProps={label:"Toggle navigation"};var _=U,z=o.a.createContext(null),Y=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null},G=z,H=Object(d.a)("navbar-text",{Component:"span"}),Z=o.a.forwardRef((function(e,t){var n=Object(f.a)(e,{expanded:"onToggle"}),r=n.bsPrefix,i=n.expand,u=n.variant,d=n.bg,v=n.fixed,m=n.sticky,b=n.className,h=n.children,E=n.as,x=void 0===E?"nav":E,g=n.expanded,y=n.onToggle,j=n.onSelect,O=n.collapseOnSelect,w=Object(s.a)(n,["bsPrefix","expand","variant","bg","fixed","sticky","className","children","as","expanded","onToggle","onSelect","collapseOnSelect"]),N=Object(p.a)(r,"navbar"),C=Object(a.useCallback)((function(){j&&j.apply(void 0,arguments),O&&g&&y&&y(!1)}),[j,O,g,y]);void 0===w.role&&"nav"!==x&&(w.role="navigation");var P=N+"-expand";"string"==typeof i&&(P=P+"-"+i);var k=Object(a.useMemo)((function(){return{onToggle:function(){return y&&y(!g)},bsPrefix:N,expanded:!!g}}),[N,g,y]);return o.a.createElement(M.Provider,{value:k},o.a.createElement(G.Provider,{value:C},o.a.createElement(x,Object(c.a)({ref:t},w,{className:l()(b,N,i&&P,u&&N+"-"+u,d&&"bg-"+d,m&&"sticky-"+m,v&&"fixed-"+v)}),h)))}));Z.defaultProps={expand:!0,variant:"light",collapseOnSelect:!1},Z.displayName="Navbar",Z.Brand=m,Z.Toggle=_,Z.Collapse=q,Z.Text=H;var X=Z,V=(n("n0hJ"),n("K9S6"),n("Wzyw")),B=n("Zeqi"),W=n("YGJp"),Q=n("lcWJ"),$=o.a.createContext(null);$.displayName="NavContext";var ee=$,te=o.a.createContext(null),ne=function(){},re=o.a.forwardRef((function(e,t){var n,r,i=e.as,u=void 0===i?"ul":i,l=e.onSelect,f=e.activeKey,d=e.role,p=e.onKeyDown,v=Object(s.a)(e,["as","onSelect","activeKey","role","onKeyDown"]),m=Object(W.a)(),b=Object(a.useRef)(!1),h=Object(a.useContext)(G),E=Object(a.useContext)(te);E&&(d=d||"tablist",f=E.activeKey,n=E.getControlledId,r=E.getControllerId);var x=Object(a.useRef)(null),g=function(e){var t=x.current;if(!t)return null;var n=Object(B.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},y=function(e,t){null!=e&&(l&&l(e,t),h&&h(e,t))};Object(a.useEffect)((function(){if(x.current&&b.current){var e=x.current.querySelector("[data-rb-event-key].active");e&&e.focus()}b.current=!1}));var j=Object(Q.a)(t,x);return o.a.createElement(G.Provider,{value:y},o.a.createElement(ee.Provider,{value:{role:d,activeKey:Y(f),getControlledId:n||ne,getControllerId:r||ne}},o.a.createElement(u,Object(c.a)({},v,{onKeyDown:function(e){var t;switch(p&&p(e),e.key){case"ArrowLeft":case"ArrowUp":t=g(-1);break;case"ArrowRight":case"ArrowDown":t=g(1);break;default:return}t&&(e.preventDefault(),y(t.dataset.rbEventKey,e),b.current=!0,m())},ref:j,role:d}))))})),ae=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.children,i=e.as,u=void 0===i?"div":i,f=Object(s.a)(e,["bsPrefix","className","children","as"]);return n=Object(p.a)(n,"nav-item"),o.a.createElement(u,Object(c.a)({},f,{ref:t,className:l()(r,n)}),a)}));ae.displayName="NavItem";var oe=ae;n("HXzo");function ie(e){return!e||"#"===e.trim()}var ce=o.a.forwardRef((function(e,t){var n=e.as,r=void 0===n?"a":n,a=e.disabled,i=e.onKeyDown,u=Object(s.a)(e,["as","disabled","onKeyDown"]),l=function(e){var t=u.href,n=u.onClick;(a||ie(t))&&e.preventDefault(),a?e.stopPropagation():n&&n(e)};return ie(u.href)&&(u.role=u.role||"button",u.href=u.href||"#"),a&&(u.tabIndex=-1,u["aria-disabled"]=!0),o.a.createElement(r,Object(c.a)({ref:t},u,{onClick:l,onKeyDown:S((function(e){" "===e.key&&(e.preventDefault(),l(e))}),i)}))}));ce.displayName="SafeAnchor";var se=ce,ue=(n("2W6z"),o.a.forwardRef((function(e,t){var n=e.active,r=e.className,i=e.eventKey,u=e.onSelect,f=e.onClick,d=e.as,p=Object(s.a)(e,["active","className","eventKey","onSelect","onClick","as"]),v=Y(i,p.href),m=Object(a.useContext)(G),b=Object(a.useContext)(ee),h=n;if(b){p.role||"tablist"!==b.role||(p.role="tab");var E=b.getControllerId(v),x=b.getControlledId(v);p["data-rb-event-key"]=v,p.id=E||p.id,p["aria-controls"]=x||p["aria-controls"],h=null==n&&null!=v?b.activeKey===v:n}"tab"===p.role&&(p.tabIndex=h?p.tabIndex:-1,p["aria-selected"]=h);var g=Object(F.a)((function(e){f&&f(e),null!=v&&(u&&u(v,e),m&&m(v,e))}));return o.a.createElement(d,Object(c.a)({},p,{ref:t,onClick:g,className:l()(r,h&&"active")}))})));ue.defaultProps={disabled:!1};var le=ue,fe={disabled:!1,as:se},de=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.disabled,a=e.className,i=e.href,u=e.eventKey,f=e.onSelect,d=e.as,v=Object(s.a)(e,["bsPrefix","disabled","className","href","eventKey","onSelect","as"]);return n=Object(p.a)(n,"nav-link"),o.a.createElement(le,Object(c.a)({},v,{href:i,ref:t,eventKey:u,as:d,disabled:r,onSelect:f,className:l()(a,n,r&&"disabled")}))}));de.displayName="NavLink",de.defaultProps=fe;var pe=de,ve=o.a.forwardRef((function(e,t){var n,r,i,u=Object(f.a)(e,{activeKey:"onSelect"}),d=u.as,v=void 0===d?"div":d,m=u.bsPrefix,b=u.variant,h=u.fill,E=u.justify,x=u.navbar,g=u.className,y=u.children,j=u.activeKey,O=Object(s.a)(u,["as","bsPrefix","variant","fill","justify","navbar","className","children","activeKey"]),w=Object(p.a)(m,"nav"),N=!1,C=Object(a.useContext)(M),P=Object(a.useContext)(V.a);return C?(r=C.bsPrefix,N=null==x||x):P&&(i=P.cardHeaderBsPrefix),o.a.createElement(re,Object(c.a)({as:v,ref:t,activeKey:j,className:l()(g,(n={},n[w]=!N,n[r+"-nav"]=N,n[i+"-"+b]=!!i,n[w+"-"+b]=!!b,n[w+"-fill"]=h,n[w+"-justified"]=E,n))},O),y)}));ve.displayName="Nav",ve.defaultProps={justify:!1,fill:!1},ve.Item=oe,ve.Link=pe;var me=ve,be=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.fluid,a=e.as,i=void 0===a?"div":a,u=e.className,f=Object(s.a)(e,["bsPrefix","fluid","as","className"]),d=Object(p.a)(n,"container"),v="string"==typeof r?"-"+r:"-fluid";return o.a.createElement(i,Object(c.a)({ref:t},f,{className:l()(u,r?""+d+v:d)}))}));be.displayName="Container",be.defaultProps={fluid:!1};var he=be,Ee=(n("JHok"),["xl","lg","md","sm","xs"]),xe=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.noGutters,i=e.as,u=void 0===i?"div":i,f=Object(s.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(p.a)(n,"row"),v=d+"-cols",m=[];return Ee.forEach((function(e){var t,n=f[e];delete f[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=n&&"object"==typeof n?n.cols:n)&&m.push(""+v+r+"-"+t)})),o.a.createElement(u,Object(c.a)({ref:t},f,{className:l.a.apply(void 0,[r,d,a&&"no-gutters"].concat(m))}))}));xe.displayName="Row",xe.defaultProps={noGutters:!1};var ge=xe,ye=["xl","lg","md","sm","xs"],je=o.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,a=e.as,i=void 0===a?"div":a,u=Object(s.a)(e,["bsPrefix","className","as"]),f=Object(p.a)(n,"col"),d=[],v=[];return ye.forEach((function(e){var t,n,r,a=u[e];if(delete u[e],"object"==typeof a&&null!=a){var o=a.span;t=void 0===o||o,n=a.offset,r=a.order}else t=a;var i="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+f+i:""+f+i+"-"+t),null!=r&&v.push("order"+i+"-"+r),null!=n&&v.push("offset"+i+"-"+n)})),d.length||d.push(f),o.a.createElement(i,Object(c.a)({},u,{ref:t,className:l.a.apply(void 0,[r].concat(d,v))}))}));je.displayName="Col";var Oe=je,we=function(e){e.siteTitle;return o.a.createElement("header",{className:"App-header"},o.a.createElement(X,{expand:"lg"},o.a.createElement(X.Toggle,{"aria-controls":"navbar-nav"}),o.a.createElement(i.Link,{to:"/"},o.a.createElement(X.Brand,{"data-testid":"navbar-brand"},o.a.createElement("span",{className:"brand-highlight"},"PID")," Notebook Showcase")),o.a.createElement(X.Collapse,{id:"navbar-nav"},o.a.createElement(me,null,o.a.createElement(i.Link,{to:"/about"},o.a.createElement(me.Link,null,"About"))))),o.a.createElement("div",{className:"App-header-content"},o.a.createElement(he,null,o.a.createElement(ge,null,o.a.createElement(Oe,null,o.a.createElement("h1",null,"Welcome to the PID Jupyter Notebooks showcase."),o.a.createElement("p",null,"The PID Jupyter Notebooks showcase is maintained by CERN and was developed within the FREYA project. For more information about the registry contact ",o.a.createElement("a",{href:"mailto:support@pidnotebooks.org"},"support@pidnotebooks.org")))))))};we.defaultProps={siteTitle:""};var Ne=we,Ce=(n("8ypT"),function(e){e.siteTitle;return o.a.createElement("footer",{className:"App-footer py-3"},o.a.createElement(he,null,o.a.createElement(ge,null,o.a.createElement(Oe,{sm:6},o.a.createElement("p",null,"The PID Jupyter Notebooks showcase  is maintained by ",o.a.createElement("a",{href:"https://www.cern.ch"},"CERN")," and was developed within the ",o.a.createElement("a",{href:"https://www.project-freya.eu"},"FREYA project")," ."),o.a.createElement("p",null,o.a.createElement("img",{src:"/freya-pid-notebooks-showcase/freya_logo.png",width:"100",alt:"FREYA"}),o.a.createElement("img",{src:"/freya_logo.png",width:"100",alt:"FREYA",style:{display:"hidden"}}),o.a.createElement("img",{src:"/freya-pid-notebooks-showcase/eosc_logo-trs.png",width:"200",alt:"FREYA"}),o.a.createElement("img",{src:"/eosc_logo-trs.png",width:"200",alt:"FREYA",style:{display:"hidden"}}))),o.a.createElement(Oe,{sm:6},o.a.createElement("p",null,"The FREYA project has received funding from the ",o.a.createElement("a",{href:"https://ec.europa.eu/programmes/horizon2020/en"},"European Union’s Horizon 2020")," research and innovation programme under grant agreement No 777523.")))))});Ce.defaultProps={siteTitle:""};var Pe=Ce;t.a=function(e){var t=e.children,n=r.data;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ne,{siteTitle:n.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem"}},o.a.createElement("main",null,t)),o.a.createElement(Pe,null))}},C9fy:function(e,t,n){var r=Date.prototype,a=r.toString,o=r.getTime;new Date(NaN)+""!="Invalid Date"&&n("IYdN")(r,"toString",(function(){var e=o.call(this);return e==e?a.call(this):"Invalid Date"}))},GEtZ:function(e,t,n){"use strict";var r=n("SJxq"),a=!1,o=!1;try{var i={get passive(){return a=!0},get once(){return o=a=!0}};r.a&&(window.addEventListener("test",i,i),window.removeEventListener("test",i,!0))}catch(u){}var c=function(e,t,n,r){if(r&&"boolean"!=typeof r&&!o){var i=r.once,c=r.capture,s=n;!o&&i&&(s=n.__once||function e(r){this.removeEventListener(t,e,c),n.call(this,r)},n.__once=s),e.addEventListener(t,s,a?r:c)}e.addEventListener(t,n,r)};var s=function(e,t,n,r){var a=r&&"boolean"!=typeof r?r.capture:r;e.removeEventListener(t,n,a),n.__once&&e.removeEventListener(t,n.__once,a)};t.a=function(e,t,n,r){return c(e,t,n,r),function(){s(e,t,n,r)}}},HXzo:function(e,t,n){"use strict";n("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},IRj2:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Showcasing PID Graph notebooks"}}}}')},JCAc:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("AqHK"),n("rzGZ"),n("Dq+y"),n("8npG"),n("Ggvi"),n("U6Bt"),n("YBKJ"),n("m210"),n("4DPX");var r=n("wx14"),a=n("zLVn"),o=n("q1tI");n("HXzo"),n("JHok"),n("QLaP");function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}function s(e,t){return Object.keys(t).reduce((function(n,s){var u,l=n,f=l[i(s)],d=l[s],p=Object(a.a)(l,[i(s),s].map(c)),v=t[s],m=function(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],s=void 0!==e,u=r.current;return r.current=s,!s&&u&&i!==t&&c(t),[s?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}(d,f,e[v]),b=m[0],h=m[1];return Object(r.a)({},p,((u={})[s]=b,u[v]=h,u))}),e)}n("pS08"),n("pJf4"),n("dI71"),n("94VI")},K9S6:function(e,t,n){"use strict";n("JHok"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];function r(){for(var e=arguments.length,n=Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=null;return t.forEach((function(e){if(null==a){var t=e.apply(void 0,n);null!=t&&(a=t)}})),a}return(0,o.default)(r)};var r,a=n("pvIh"),o=(r=a)&&r.__esModule?r:{default:r};e.exports=t.default},R48M:function(e,t,n){var r=n("P8UN");r(r.S+r.F*!n("QPJK"),"Object",{defineProperty:n("rjfK").f})},SJxq:function(e,t,n){"use strict";t.a=!("undefined"==typeof window||!window.document||!window.document.createElement)},TSYQ:function(e,t,n){var r;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)&&r.length){var i=a.apply(null,r);i&&e.push(i)}else if("object"===o)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},Wzyw:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r).a.createContext(null);a.displayName="CardContext",t.a=a},"Y++M":function(e,t,n){"use strict";var r=n("DFzH"),a=n("dTG6"),o=n("kiRH");e.exports=function(e){for(var t=r(this),n=o(t.length),i=arguments.length,c=a(i>1?arguments[1]:void 0,n),s=i>2?arguments[2]:void 0,u=void 0===s?n:a(s,n);u>c;)t[c++]=e;return t}},YGJp:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("q1tI");function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},YdCC:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n("wx14"),a=n("zLVn"),o=n("TSYQ"),i=n.n(o),c=(n("sC2a"),/-(.)/g);var s=n("q1tI"),u=n.n(s),l=n("vUet"),f=function(e){return e[0].toUpperCase()+(t=e,t.replace(c,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function d(e,t){var n=void 0===t?{}:t,o=n.displayName,c=void 0===o?f(e):o,s=n.Component,d=n.defaultProps,p=u.a.forwardRef((function(t,n){var o=t.className,c=t.bsPrefix,f=t.as,d=void 0===f?s||"div":f,p=Object(a.a)(t,["className","bsPrefix","as"]),v=Object(l.a)(c,e);return u.a.createElement(d,Object(r.a)({ref:n,className:i()(o,v)},p))}));return p.defaultProps=d,p.displayName=c,p}},ZCiN:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("q1tI");var a=function(e){var t=Object(r.useRef)(e);return Object(r.useEffect)((function(){t.current=e}),[e]),t};function o(e){var t=a(e);return Object(r.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}},Zeqi:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("n7j8");var r=Function.prototype.bind.call(Function.prototype.call,[].slice);function a(e,t){return r(e.querySelectorAll(t))}},dI71:function(e,t,n){"use strict";function r(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}n.d(t,"a",(function(){return r}))},dZvc:function(e,t,n){"use strict";function r(e){return e&&e.ownerDocument||document}n.d(t,"a",(function(){return r}))},klQ5:function(e,t,n){var r=n("emib"),a=n("TUPI"),o=n("rjfK").f,i=n("chL8").f,c=n("mhTz"),s=n("lb9j"),u=r.RegExp,l=u,f=u.prototype,d=/a/g,p=/a/g,v=new u(d)!==d;if(n("QPJK")&&(!v||n("96qb")((function(){return p[n("sOol")("match")]=!1,u(d)!=d||u(p)==p||"/a/i"!=u(d,"i")})))){u=function(e,t){var n=this instanceof u,r=c(e),o=void 0===t;return!n&&r&&e.constructor===u&&o?e:a(v?new l(r&&!o?e.source:e,t):l((r=e instanceof u)?e.source:e,r&&o?s.call(e):t),n?this:f,u)};for(var m=function(e){e in u||o(u,e,{configurable:!0,get:function(){return l[e]},set:function(t){l[e]=t}})},b=i(l),h=0;b.length>h;)m(b[h++]);f.constructor=u,u.prototype=f,n("IYdN")(r,"RegExp",u)}n("to/b")("RegExp")},lcWJ:function(e,t,n){"use strict";var r=n("q1tI"),a=function(e){return e&&"function"!=typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},n0hJ:function(e,t,n){var r=n("P8UN");r(r.P,"Array",{fill:n("Y++M")}),n("Dq1/")("fill")},n7j8:function(e,t,n){var r=n("P8UN");r(r.P,"Function",{bind:n("16Xr")})},pvIh:function(e,t,n){"use strict";n("n7j8"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){function t(t,n,r,a,o,i){var c=a||"<<anonymous>>",s=i||r;if(null==n[r])return t?new Error("Required "+o+" `"+s+"` was not specified in `"+c+"`."):null;for(var u=arguments.length,l=Array(u>6?u-6:0),f=6;f<u;f++)l[f-6]=arguments[f];return e.apply(void 0,[n,r,c,o,s].concat(l))}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n},e.exports=t.default},"t+fG":function(e,t,n){var r=n("P8UN"),a=n("96qb"),o=n("ap2Z"),i=/"/g,c=function(e,t,n,r){var a=String(o(e)),c="<"+t;return""!==n&&(c+=" "+n+'="'+String(r).replace(i,"&quot;")+'"'),c+">"+a+"</"+t+">"};e.exports=function(e,t){var n={};n[e]=t(c),r(r.P+r.F*a((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",n)}},vUet:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("pJf4"),n("wx14");var r=n("q1tI"),a=n.n(r),o=a.a.createContext({});o.Consumer,o.Provider;function i(e,t){var n=Object(r.useContext)(o);return e||n[t]||t}},wx14:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"==typeof window&&(n=window)}e.exports=n},zLVn:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=commons-fce1441fafdc61550298.js.map