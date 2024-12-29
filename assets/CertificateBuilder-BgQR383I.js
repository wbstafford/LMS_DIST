import{i as Te,r as M,q as ge,k as me,g as Me,c as Ee,d as _e,v as je,B as x,f as Z,j as c,am as ke,b3 as Fe}from"./index-DiVl5c6T.js";var te={exports:{}},ye={};function ve(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=ve(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function fe(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=ve(e))&&(r&&(r+=" "),r+=t);return r}const Xe=Object.freeze(Object.defineProperty({__proto__:null,clsx:fe,default:fe},Symbol.toStringTag,{value:"Module"})),Ie=Te(Xe);var y={},k={};Object.defineProperty(k,"__esModule",{value:!0});k.dontSetMe=We;k.findInArray=Ye;k.int=Be;k.isFunction=Re;k.isNum=$e;function Ye(e,t){for(let n=0,r=e.length;n<r;n++)if(t.apply(t,[e[n],n,e]))return e[n]}function Re(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Function]"}function $e(e){return typeof e=="number"&&!isNaN(e)}function Be(e){return parseInt(e,10)}function We(e,t,n){if(e[t])return new Error("Invalid prop ".concat(t," passed to ").concat(n," - do not set this, set it on the child."))}var L={};Object.defineProperty(L,"__esModule",{value:!0});L.browserPrefixToKey=we;L.browserPrefixToStyle=Ae;L.default=void 0;L.getPrefix=be;const se=["Moz","Webkit","O","ms"];function be(){var e;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"transform";if(typeof window>"u")return"";const n=(e=window.document)===null||e===void 0||(e=e.documentElement)===null||e===void 0?void 0:e.style;if(!n||t in n)return"";for(let r=0;r<se.length;r++)if(we(t,se[r])in n)return se[r];return""}function we(e,t){return t?"".concat(t).concat(Ue(e)):e}function Ae(e,t){return t?"-".concat(t.toLowerCase(),"-").concat(e):e}function Ue(e){let t="",n=!0;for(let r=0;r<e.length;r++)n?(t+=e[r].toUpperCase(),n=!1):e[r]==="-"?n=!0:t+=e[r];return t}L.default=be();Object.defineProperty(y,"__esModule",{value:!0});y.addClassName=De;y.addEvent=He;y.addUserSelectStyles=rt;y.createCSSTransform=Ze;y.createSVGTransform=et;y.getTouch=tt;y.getTouchIdentifier=nt;y.getTranslation=ce;y.innerHeight=Ke;y.innerWidth=Je;y.matchesSelector=Se;y.matchesSelectorAndParentsTo=Le;y.offsetXYFromParent=Qe;y.outerHeight=Ge;y.outerWidth=qe;y.removeClassName=Ne;y.removeEvent=Ve;y.removeUserSelectStyles=at;var T=k,he=ze(L);function xe(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(xe=function(r){return r?n:t})(e)}function ze(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=xe(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var f=a?Object.getOwnPropertyDescriptor(e,i):null;f&&(f.get||f.set)?Object.defineProperty(r,i,f):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}let ee="";function Se(e,t){return ee||(ee=(0,T.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],function(n){return(0,T.isFunction)(e[n])})),(0,T.isFunction)(e[ee])?e[ee](t):!1}function Le(e,t,n){let r=e;do{if(Se(r,t))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1}function He(e,t,n,r){if(!e)return;const a={capture:!0,...r};e.addEventListener?e.addEventListener(t,n,a):e.attachEvent?e.attachEvent("on"+t,n):e["on"+t]=n}function Ve(e,t,n,r){if(!e)return;const a={capture:!0,...r};e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent?e.detachEvent("on"+t,n):e["on"+t]=null}function Ge(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,T.int)(n.borderTopWidth),t+=(0,T.int)(n.borderBottomWidth),t}function qe(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t+=(0,T.int)(n.borderLeftWidth),t+=(0,T.int)(n.borderRightWidth),t}function Ke(e){let t=e.clientHeight;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,T.int)(n.paddingTop),t-=(0,T.int)(n.paddingBottom),t}function Je(e){let t=e.clientWidth;const n=e.ownerDocument.defaultView.getComputedStyle(e);return t-=(0,T.int)(n.paddingLeft),t-=(0,T.int)(n.paddingRight),t}function Qe(e,t,n){const a=t===t.ownerDocument.body?{left:0,top:0}:t.getBoundingClientRect(),i=(e.clientX+t.scrollLeft-a.left)/n,f=(e.clientY+t.scrollTop-a.top)/n;return{x:i,y:f}}function Ze(e,t){const n=ce(e,t,"px");return{[(0,he.browserPrefixToKey)("transform",he.default)]:n}}function et(e,t){return ce(e,t,"")}function ce(e,t,n){let{x:r,y:a}=e,i="translate(".concat(r).concat(n,",").concat(a).concat(n,")");if(t){const f="".concat(typeof t.x=="string"?t.x:t.x+n),m="".concat(typeof t.y=="string"?t.y:t.y+n);i="translate(".concat(f,", ").concat(m,")")+i}return i}function tt(e,t){return e.targetTouches&&(0,T.findInArray)(e.targetTouches,n=>t===n.identifier)||e.changedTouches&&(0,T.findInArray)(e.changedTouches,n=>t===n.identifier)}function nt(e){if(e.targetTouches&&e.targetTouches[0])return e.targetTouches[0].identifier;if(e.changedTouches&&e.changedTouches[0])return e.changedTouches[0].identifier}function rt(e){if(!e)return;let t=e.getElementById("react-draggable-style-el");t||(t=e.createElement("style"),t.type="text/css",t.id="react-draggable-style-el",t.innerHTML=`.react-draggable-transparent-selection *::-moz-selection {all: inherit;}
`,t.innerHTML+=`.react-draggable-transparent-selection *::selection {all: inherit;}
`,e.getElementsByTagName("head")[0].appendChild(t)),e.body&&De(e.body,"react-draggable-transparent-selection")}function at(e){if(e)try{if(e.body&&Ne(e.body,"react-draggable-transparent-selection"),e.selection)e.selection.empty();else{const t=(e.defaultView||window).getSelection();t&&t.type!=="Caret"&&t.removeAllRanges()}}catch{}}function De(e,t){e.classList?e.classList.add(t):e.className.match(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)")))||(e.className+=" ".concat(t))}function Ne(e,t){e.classList?e.classList.remove(t):e.className=e.className.replace(new RegExp("(?:^|\\s)".concat(t,"(?!\\S)"),"g"),"")}var F={};Object.defineProperty(F,"__esModule",{value:!0});F.canDragX=it;F.canDragY=lt;F.createCoreData=ut;F.createDraggableData=dt;F.getBoundPosition=ot;F.getControlPosition=ct;F.snapToGrid=st;var O=k,G=y;function ot(e,t,n){if(!e.props.bounds)return[t,n];let{bounds:r}=e.props;r=typeof r=="string"?r:ft(r);const a=ue(e);if(typeof r=="string"){const{ownerDocument:i}=a,f=i.defaultView;let m;if(r==="parent"?m=a.parentNode:m=i.querySelector(r),!(m instanceof f.HTMLElement))throw new Error('Bounds selector "'+r+'" could not find an element.');const p=m,w=f.getComputedStyle(a),N=f.getComputedStyle(p);r={left:-a.offsetLeft+(0,O.int)(N.paddingLeft)+(0,O.int)(w.marginLeft),top:-a.offsetTop+(0,O.int)(N.paddingTop)+(0,O.int)(w.marginTop),right:(0,G.innerWidth)(p)-(0,G.outerWidth)(a)-a.offsetLeft+(0,O.int)(N.paddingRight)-(0,O.int)(w.marginRight),bottom:(0,G.innerHeight)(p)-(0,G.outerHeight)(a)-a.offsetTop+(0,O.int)(N.paddingBottom)-(0,O.int)(w.marginBottom)}}return(0,O.isNum)(r.right)&&(t=Math.min(t,r.right)),(0,O.isNum)(r.bottom)&&(n=Math.min(n,r.bottom)),(0,O.isNum)(r.left)&&(t=Math.max(t,r.left)),(0,O.isNum)(r.top)&&(n=Math.max(n,r.top)),[t,n]}function st(e,t,n){const r=Math.round(t/e[0])*e[0],a=Math.round(n/e[1])*e[1];return[r,a]}function it(e){return e.props.axis==="both"||e.props.axis==="x"}function lt(e){return e.props.axis==="both"||e.props.axis==="y"}function ct(e,t,n){const r=typeof t=="number"?(0,G.getTouch)(e,t):null;if(typeof t=="number"&&!r)return null;const a=ue(n),i=n.props.offsetParent||a.offsetParent||a.ownerDocument.body;return(0,G.offsetXYFromParent)(r||e,i,n.props.scale)}function ut(e,t,n){const r=!(0,O.isNum)(e.lastX),a=ue(e);return r?{node:a,deltaX:0,deltaY:0,lastX:t,lastY:n,x:t,y:n}:{node:a,deltaX:t-e.lastX,deltaY:n-e.lastY,lastX:e.lastX,lastY:e.lastY,x:t,y:n}}function dt(e,t){const n=e.props.scale;return{node:t.node,x:e.state.x+t.deltaX/n,y:e.state.y+t.deltaY/n,deltaX:t.deltaX/n,deltaY:t.deltaY/n,lastX:e.state.x,lastY:e.state.y}}function ft(e){return{left:e.left,top:e.top,right:e.right,bottom:e.bottom}}function ue(e){const t=e.findDOMNode();if(!t)throw new Error("<DraggableCore>: Unmounted during event!");return t}var ne={},re={};Object.defineProperty(re,"__esModule",{value:!0});re.default=ht;function ht(){}Object.defineProperty(ne,"__esModule",{value:!0});ne.default=void 0;var ie=gt(M),P=de(ge),pt=de(me),D=y,$=F,le=k,J=de(re);function de(e){return e&&e.__esModule?e:{default:e}}function Ce(e){if(typeof WeakMap!="function")return null;var t=new WeakMap,n=new WeakMap;return(Ce=function(r){return r?n:t})(e)}function gt(e,t){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=Ce(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var f=a?Object.getOwnPropertyDescriptor(e,i):null;f&&(f.get||f.set)?Object.defineProperty(r,i,f):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}function C(e,t,n){return t=mt(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function mt(e){var t=yt(e,"string");return typeof t=="symbol"?t:String(t)}function yt(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}const _={touch:{start:"touchstart",move:"touchmove",stop:"touchend"},mouse:{start:"mousedown",move:"mousemove",stop:"mouseup"}};let B=_.mouse,ae=class extends ie.Component{constructor(){super(...arguments),C(this,"dragging",!1),C(this,"lastX",NaN),C(this,"lastY",NaN),C(this,"touchIdentifier",null),C(this,"mounted",!1),C(this,"handleDragStart",t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&typeof t.button=="number"&&t.button!==0)return!1;const n=this.findDOMNode();if(!n||!n.ownerDocument||!n.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:r}=n;if(this.props.disabled||!(t.target instanceof r.defaultView.Node)||this.props.handle&&!(0,D.matchesSelectorAndParentsTo)(t.target,this.props.handle,n)||this.props.cancel&&(0,D.matchesSelectorAndParentsTo)(t.target,this.props.cancel,n))return;t.type==="touchstart"&&t.preventDefault();const a=(0,D.getTouchIdentifier)(t);this.touchIdentifier=a;const i=(0,$.getControlPosition)(t,a,this);if(i==null)return;const{x:f,y:m}=i,p=(0,$.createCoreData)(this,f,m);(0,J.default)("DraggableCore: handleDragStart: %j",p),(0,J.default)("calling",this.props.onStart),!(this.props.onStart(t,p)===!1||this.mounted===!1)&&(this.props.enableUserSelectHack&&(0,D.addUserSelectStyles)(r),this.dragging=!0,this.lastX=f,this.lastY=m,(0,D.addEvent)(r,B.move,this.handleDrag),(0,D.addEvent)(r,B.stop,this.handleDragStop))}),C(this,"handleDrag",t=>{const n=(0,$.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:a}=n;if(Array.isArray(this.props.grid)){let m=r-this.lastX,p=a-this.lastY;if([m,p]=(0,$.snapToGrid)(this.props.grid,m,p),!m&&!p)return;r=this.lastX+m,a=this.lastY+p}const i=(0,$.createCoreData)(this,r,a);if((0,J.default)("DraggableCore: handleDrag: %j",i),this.props.onDrag(t,i)===!1||this.mounted===!1){try{this.handleDragStop(new MouseEvent("mouseup"))}catch{const p=document.createEvent("MouseEvents");p.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(p)}return}this.lastX=r,this.lastY=a}),C(this,"handleDragStop",t=>{if(!this.dragging)return;const n=(0,$.getControlPosition)(t,this.touchIdentifier,this);if(n==null)return;let{x:r,y:a}=n;if(Array.isArray(this.props.grid)){let p=r-this.lastX||0,w=a-this.lastY||0;[p,w]=(0,$.snapToGrid)(this.props.grid,p,w),r=this.lastX+p,a=this.lastY+w}const i=(0,$.createCoreData)(this,r,a);if(this.props.onStop(t,i)===!1||this.mounted===!1)return!1;const m=this.findDOMNode();m&&this.props.enableUserSelectHack&&(0,D.removeUserSelectStyles)(m.ownerDocument),(0,J.default)("DraggableCore: handleDragStop: %j",i),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,m&&((0,J.default)("DraggableCore: Removing handlers"),(0,D.removeEvent)(m.ownerDocument,B.move,this.handleDrag),(0,D.removeEvent)(m.ownerDocument,B.stop,this.handleDragStop))}),C(this,"onMouseDown",t=>(B=_.mouse,this.handleDragStart(t))),C(this,"onMouseUp",t=>(B=_.mouse,this.handleDragStop(t))),C(this,"onTouchStart",t=>(B=_.touch,this.handleDragStart(t))),C(this,"onTouchEnd",t=>(B=_.touch,this.handleDragStop(t)))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,D.addEvent)(t,_.touch.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:n}=t;(0,D.removeEvent)(n,_.mouse.move,this.handleDrag),(0,D.removeEvent)(n,_.touch.move,this.handleDrag),(0,D.removeEvent)(n,_.mouse.stop,this.handleDragStop),(0,D.removeEvent)(n,_.touch.stop,this.handleDragStop),(0,D.removeEvent)(t,_.touch.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,D.removeUserSelectStyles)(n)}}findDOMNode(){var t,n;return(t=this.props)!==null&&t!==void 0&&t.nodeRef?(n=this.props)===null||n===void 0||(n=n.nodeRef)===null||n===void 0?void 0:n.current:pt.default.findDOMNode(this)}render(){return ie.cloneElement(ie.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};ne.default=ae;C(ae,"displayName","DraggableCore");C(ae,"propTypes",{allowAnyClick:P.default.bool,children:P.default.node.isRequired,disabled:P.default.bool,enableUserSelectHack:P.default.bool,offsetParent:function(e,t){if(e[t]&&e[t].nodeType!==1)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:P.default.arrayOf(P.default.number),handle:P.default.string,cancel:P.default.string,nodeRef:P.default.object,onStart:P.default.func,onDrag:P.default.func,onStop:P.default.func,onMouseDown:P.default.func,scale:P.default.number,className:le.dontSetMe,style:le.dontSetMe,transform:le.dontSetMe});C(ae,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1});(function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),e.default=void 0;var t=H(M),n=N(ge),r=N(me),a=N(Ie),i=y,f=F,m=k,p=N(ne),w=N(re);function N(o){return o&&o.__esModule?o:{default:o}}function W(o){if(typeof WeakMap!="function")return null;var s=new WeakMap,d=new WeakMap;return(W=function(u){return u?d:s})(o)}function H(o,s){if(o&&o.__esModule)return o;if(o===null||typeof o!="object"&&typeof o!="function")return{default:o};var d=W(s);if(d&&d.has(o))return d.get(o);var u={},b=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var h in o)if(h!=="default"&&Object.prototype.hasOwnProperty.call(o,h)){var j=b?Object.getOwnPropertyDescriptor(o,h):null;j&&(j.get||j.set)?Object.defineProperty(u,h,j):u[h]=o[h]}return u.default=o,d&&d.set(o,u),u}function q(){return q=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var u in d)Object.prototype.hasOwnProperty.call(d,u)&&(o[u]=d[u])}return o},q.apply(this,arguments)}function Y(o,s,d){return s=Q(s),s in o?Object.defineProperty(o,s,{value:d,enumerable:!0,configurable:!0,writable:!0}):o[s]=d,o}function Q(o){var s=oe(o,"string");return typeof s=="symbol"?s:String(s)}function oe(o,s){if(typeof o!="object"||o===null)return o;var d=o[Symbol.toPrimitive];if(d!==void 0){var u=d.call(o,s||"default");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return(s==="string"?String:Number)(o)}class A extends t.Component{static getDerivedStateFromProps(s,d){let{position:u}=s,{prevPropsPosition:b}=d;return u&&(!b||u.x!==b.x||u.y!==b.y)?((0,w.default)("Draggable: getDerivedStateFromProps %j",{position:u,prevPropsPosition:b}),{x:u.x,y:u.y,prevPropsPosition:{...u}}):null}constructor(s){super(s),Y(this,"onDragStart",(d,u)=>{if((0,w.default)("Draggable: onDragStart: %j",u),this.props.onStart(d,(0,f.createDraggableData)(this,u))===!1)return!1;this.setState({dragging:!0,dragged:!0})}),Y(this,"onDrag",(d,u)=>{if(!this.state.dragging)return!1;(0,w.default)("Draggable: onDrag: %j",u);const b=(0,f.createDraggableData)(this,u),h={x:b.x,y:b.y,slackX:0,slackY:0};if(this.props.bounds){const{x:U,y:R}=h;h.x+=this.state.slackX,h.y+=this.state.slackY;const[V,l]=(0,f.getBoundPosition)(this,h.x,h.y);h.x=V,h.y=l,h.slackX=this.state.slackX+(U-h.x),h.slackY=this.state.slackY+(R-h.y),b.x=h.x,b.y=h.y,b.deltaX=h.x-this.state.x,b.deltaY=h.y-this.state.y}if(this.props.onDrag(d,b)===!1)return!1;this.setState(h)}),Y(this,"onDragStop",(d,u)=>{if(!this.state.dragging||this.props.onStop(d,(0,f.createDraggableData)(this,u))===!1)return!1;(0,w.default)("Draggable: onDragStop: %j",u);const h={dragging:!1,slackX:0,slackY:0};if(!!this.props.position){const{x:U,y:R}=this.props.position;h.x=U,h.y=R}this.setState(h)}),this.state={dragging:!1,dragged:!1,x:s.position?s.position.x:s.defaultPosition.x,y:s.position?s.position.y:s.defaultPosition.y,prevPropsPosition:{...s.position},slackX:0,slackY:0,isElementSVG:!1},s.position&&!(s.onDrag||s.onStop)&&console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element.")}componentDidMount(){typeof window.SVGElement<"u"&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var s,d;return(s=(d=this.props)===null||d===void 0||(d=d.nodeRef)===null||d===void 0?void 0:d.current)!==null&&s!==void 0?s:r.default.findDOMNode(this)}render(){const{axis:s,bounds:d,children:u,defaultPosition:b,defaultClassName:h,defaultClassNameDragging:j,defaultClassNameDragged:U,position:R,positionOffset:V,scale:l,...g}=this.props;let S={},v=null;const z=!!!R||this.state.dragging,E=R||b,X={x:(0,f.canDragX)(this)&&z?this.state.x:E.x,y:(0,f.canDragY)(this)&&z?this.state.y:E.y};this.state.isElementSVG?v=(0,i.createSVGTransform)(X,V):S=(0,i.createCSSTransform)(X,V);const Oe=(0,a.default)(u.props.className||"",h,{[j]:this.state.dragging,[U]:this.state.dragged});return t.createElement(p.default,q({},g,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),t.cloneElement(t.Children.only(u),{className:Oe,style:{...u.props.style,...S},transform:v}))}}e.default=A,Y(A,"displayName","Draggable"),Y(A,"propTypes",{...p.default.propTypes,axis:n.default.oneOf(["both","x","y","none"]),bounds:n.default.oneOfType([n.default.shape({left:n.default.number,right:n.default.number,top:n.default.number,bottom:n.default.number}),n.default.string,n.default.oneOf([!1])]),defaultClassName:n.default.string,defaultClassNameDragging:n.default.string,defaultClassNameDragged:n.default.string,defaultPosition:n.default.shape({x:n.default.number,y:n.default.number}),positionOffset:n.default.shape({x:n.default.oneOfType([n.default.number,n.default.string]),y:n.default.oneOfType([n.default.number,n.default.string])}),position:n.default.shape({x:n.default.number,y:n.default.number}),className:m.dontSetMe,style:m.dontSetMe,transform:m.dontSetMe}),Y(A,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})})(ye);const{default:Pe,DraggableCore:vt}=ye;te.exports=Pe;te.exports.default=Pe;te.exports.DraggableCore=vt;var bt=te.exports;const wt=Me(bt),xt=[{label:"Roboto",value:"'Roboto', sans-serif"},{label:"Open Sans",value:"'Open Sans', sans-serif"},{label:"Lato",value:"'Lato', sans-serif"},{label:"Merriweather",value:"'Merriweather', serif"},{label:"Playfair Display",value:"'Playfair Display', serif"}],I={studentName:{width:550,height:50},courseName:{width:550,height:50},completionDate:{width:180,height:30},certificateNumber:{width:180,height:30}},pe=[{id:"studentName",label:"Student Name",centerX:421,centerY:256,fontSize:35,fontFamily:"'Roboto', sans-serif",width:I.studentName.width,height:I.studentName.height},{id:"courseName",label:"Course Name",centerX:421,centerY:427,fontSize:35,fontFamily:"'Roboto', sans-serif",width:I.courseName.width,height:I.courseName.height},{id:"completionDate",label:"Completion Date",centerX:421,centerY:521,fontSize:16,fontFamily:"'Roboto', sans-serif",width:I.completionDate.width,height:I.completionDate.height},{id:"certificateNumber",label:"Certificate Number",centerX:111+I.certificateNumber.width/2,centerY:521,fontSize:16,fontFamily:"'Roboto', sans-serif",width:I.certificateNumber.width,height:I.certificateNumber.height}],Nt=()=>{const{user:e}=Ee(),t=_e(),{certificateId:n}=je(),r=!!n,[a,i]=M.useState(""),[f,m]=M.useState(""),[p,w]=M.useState(null),[N,W]=M.useState(pe),[H,q]=M.useState(null),[Y,Q]=M.useState(!1),[oe,A]=M.useState(!1),[o,s]=M.useState(!1);M.useEffect(()=>{e!=null&&e.OrgID&&q(e.OrgID)},[e]),M.useEffect(()=>{r&&n&&d(n)},[r,n]);const d=async l=>{const g=sessionStorage.getItem("token");if(!g||!(e!=null&&e.OrgID)){x.error("Authentication token is missing or user is not authenticated.");return}Q(!0);try{const v=(await Z.get(`https://knowvara.com/api/api/certificates/${e.OrgID}/${l}`,{headers:{Authorization:`Bearer ${g}`}})).data;i(v.name),m(v.description),w(v.backgroundImage),W(v.fields||pe)}catch(S){console.error("Error fetching certificate:",S),x.error("Failed to fetch certificate details.")}finally{Q(!1)}},u=async l=>{var z;const g=(z=l.target.files)==null?void 0:z[0];if(!g)return;if(!H){x.error("Organization ID is missing.");return}if(!["image/jpeg","image/png"].includes(g.type)){x.error("Only JPEG and PNG images are allowed.");return}const v=5*1024*1024;if(g.size>v){x.error("File size exceeds the 5MB limit.");return}const K=new FormData;K.append("backgroundImage",g),A(!0);try{const E=sessionStorage.getItem("token");if(!E){x.error("Authentication token is missing. Please log in again.");return}const X=await Z.post(`https://knowvara.com/api/api/certificates/${H}/uploadBackground`,K,{headers:{Authorization:`Bearer ${E}`,"Content-Type":"multipart/form-data"}});X.status===200?(w(X.data.backgroundImage),x.success("Background image uploaded successfully!")):x.error("Failed to upload background image.")}catch(E){console.error("Error uploading background image:",E),x.error("An error occurred while uploading the background image.")}finally{A(!1)}},b=()=>{w(null),x.info("Background image removed. Reverting to default image.")},h=()=>{t("/admin/courses")},j=(l,g,S)=>{const v=N.find(E=>E.id===S);if(!v)return;const K=g.x+v.width/2,z=g.y+v.height/2;W(E=>E.map(X=>X.id===S?{...X,centerX:K,centerY:z}:X))},U=(l,g)=>{W(S=>S.map(v=>v.id===l?{...v,fontSize:g}:v))},R=(l,g)=>{W(S=>S.map(v=>v.id===l?{...v,fontFamily:g}:v))},V=async()=>{if(!H){x.error("Organization ID is missing.");return}if(!a||!f){x.error("Please fill in all certificate properties.");return}try{const l={orgId:H,name:a,description:f,backgroundImage:p,fields:N},g=sessionStorage.getItem("token");if(!g){x.error("Authentication token is missing. Please log in again.");return}r&&n?(await Z.put(`https://knowvara.com/api/api/certificates/${n}`,l,{headers:{Authorization:`Bearer ${g}`}})).status===200?(x.success("Certificate updated successfully!"),t("/admin/courses")):x.error("Failed to update certificate."):(await Z.post("https://knowvara.com/api/api/certificates",l,{headers:{Authorization:`Bearer ${g}`}})).status===201?(x.success("Certificate created successfully!"),t("/admin/courses")):x.error("Failed to create certificate.")}catch(l){console.error("Error submitting certificate:",l),x.error("An error occurred while saving the certificate.")}};return c.jsxs("div",{className:"relative pb-16 h-auto min-h-[100%]",children:[" ",Y?c.jsx("div",{children:"Loading certificate details..."}):c.jsxs("div",{className:"flex flex-col md:flex-row",children:[c.jsxs("div",{className:"w-full md:w-1/4 p-6 border-r border-gray-300",children:[c.jsx("h2",{className:"text-xl font-semibold mb-6 text-gray-600",children:r?"Edit Certificate":"Create New Certificate"}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm font-medium mb-1",children:"Name"}),c.jsx("input",{type:"text",value:a,onChange:l=>i(l.target.value),className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm",placeholder:"Certificate Name"})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm font-medium mb-1",children:"Description"}),c.jsx("textarea",{value:f,onChange:l=>m(l.target.value),className:"w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm",placeholder:"Certificate Description",rows:4})]}),c.jsxs("div",{className:"mb-4",children:[c.jsx("label",{className:"block text-sm font-medium mb-1",children:"Background Image"}),c.jsx("input",{type:"file",accept:"image/*",onChange:u}),oe&&c.jsx("div",{className:"mt-2",children:"Uploading..."}),p&&c.jsx("div",{className:"mt-2",children:c.jsx("button",{onClick:b,className:"mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 text-sm",children:"Remove Image"})})]}),c.jsxs("div",{className:"mb-4",children:[c.jsxs("button",{onClick:()=>s(!o),className:"flex items-center justify-between w-full px-3 py-2 bg-gray-200 rounded-md mb-2 focus:outline-none",children:[c.jsx("span",{className:"text-sm font-medium",children:"Font Settings"}),o?c.jsx(ke,{}):c.jsx(Fe,{})]}),o&&c.jsx("div",{className:"space-y-4",children:N.map(l=>c.jsxs("div",{className:"border p-2 rounded-md w-full",children:[c.jsx("h4",{className:"text-sm font-semibold mb-2",children:l.label}),c.jsxs("div",{className:"mb-2",children:[c.jsx("label",{className:"block text-xs font-medium mb-1",children:"Font Size"}),c.jsx("input",{type:"number",value:l.fontSize,onChange:g=>U(l.id,parseInt(g.target.value,10)),className:"w-full px-2 py-1 border rounded-md text-sm",min:8,max:72})]}),c.jsxs("div",{children:[c.jsx("label",{className:"block text-xs font-medium mb-1",children:"Font Family"}),c.jsx("select",{value:l.fontFamily,onChange:g=>R(l.id,g.target.value),className:"w-full px-2 py-1 border rounded-md text-sm",children:xt.map(g=>c.jsx("option",{value:g.value,children:g.label},g.value))})]})]},l.id))})]})]}),c.jsx("div",{className:"w-full md:w-3/4 p-4 relative overflow-auto",children:c.jsx("div",{className:"relative",style:{width:"842px",height:"595px",border:"1px solid #ccc",backgroundImage:`url(${p&&p.startsWith("/content/")?`${p}`:p||"/content/DefaultCert.png"})`,backgroundSize:"cover",backgroundPosition:"center",margin:"0 auto"},children:N.map(l=>c.jsx(wt,{position:{x:l.centerX-l.width/2,y:l.centerY-l.height/2},onStop:(g,S)=>j(g,S,l.id),children:c.jsx("div",{className:"absolute cursor-move bg-white bg-opacity-70 px-2 py-1 rounded-md text-sm flex items-center justify-center",style:{width:`${l.width}px`,height:`${l.height}px`,fontSize:`${l.fontSize}px`,fontFamily:l.fontFamily,transform:"translate(0, 0)"},children:l.label})},l.id))})})]}),c.jsxs("div",{className:"fixed bottom-0 left-0 w-full bg-white p-4 flex justify-end space-x-4 items-center border-t",children:[c.jsx("button",{onClick:h,className:"px-4 py-2 lms-cancel-button text-white rounded-md  text-sm",children:"Cancel"}),c.jsx("button",{onClick:V,className:"px-4 py-2 lms-button text-white rounded-md text-sm",children:r?"Update Certificate":"Create Certificate"})]})]})};export{Nt as default};