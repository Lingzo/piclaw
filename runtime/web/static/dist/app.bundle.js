var iN=Object.defineProperty;var oN=(_)=>_;function sN(_,$){this[_]=oN.bind(null,$)}var Y1=(_,$)=>{for(var j in $)iN(_,j,{get:$[j],enumerable:!0,configurable:!0,set:sN.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var KG={};Y1(KG,{useState:()=>C,useRef:()=>g,useReducer:()=>YG,useMemo:()=>Z0,useLayoutEffect:()=>t4,useImperativeHandle:()=>XF,useErrorBoundary:()=>LF,useEffect:()=>u,useDebugValue:()=>qF,useContext:()=>YF,useCallback:()=>P,render:()=>Q$,html:()=>F,h:()=>K3,createContext:()=>ZF,Component:()=>l5});function V$(_,$){for(var j in $)_[j]=$[j];return _}function L3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function K3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?a6.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return r6(_,Y,G,Z,null)}function r6(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++ij:Z,__i:-1,__u:0};return Z==null&&I_.vnode!=null&&I_.vnode(X),X}function e6(_){return _.children}function l5(_,$){this.props=_,this.context=$}function o4(_,$){if($==null)return _.__?o4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?o4(_):null}function eN(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=V$({},$);X.__v=$.__v+1,I_.vnode&&I_.vnode(X),V3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?o4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,jG(G,X,Z),$.__e=$.__=null,X.__e!=j&&ej(X)}}function ej(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),ej(_)}function Z3(_){(!_.__d&&(_.__d=!0)&&b$.push(_)&&!s6.__r++||gj!=I_.debounceRendering)&&((gj=I_.debounceRendering)||oj)(s6)}function s6(){try{for(var _,$=1;b$.length;)b$.length>$&&b$.sort(sj),_=b$.shift(),$=b$.length,eN(_)}finally{b$.length=s6.__r=0}}function _G(_,$,j,G,Z,X,Y,q,K,L,Q){var V,N,B,U,D,E,H,w=G&&G.__k||o6,W=$.length;for(K=_F(j,$,w,K,W),V=0;V<W;V++)(B=j.__k[V])!=null&&(N=B.__i!=-1&&w[B.__i]||i6,B.__i=V,E=V3(_,B,N,Z,X,Y,q,K,L,Q),U=B.__e,B.ref&&N.ref!=B.ref&&(N.ref&&Q3(N.ref,null,B),Q.push(B.ref,B.__c||U,B)),D==null&&U!=null&&(D=U),(H=!!(4&B.__u))||N.__k===B.__k?(K=$G(B,K,_,H),H&&N.__e&&(N.__e=null)):typeof B.type=="function"&&E!==void 0?K=E:U&&(K=U.nextSibling),B.__u&=-7);return j.__e=D,K}function _F(_,$,j,G,Z){var X,Y,q,K,L,Q=j.length,V=Q,N=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=r6(null,Y,null,null,null):t6(Y)?Y=_.__k[X]=r6(e6,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=r6(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,K=X+N,Y.__=_,Y.__b=_.__b+1,q=null,(L=Y.__i=$F(Y,j,K,V))!=-1&&(V--,(q=j[L])&&(q.__u|=2)),q==null||q.__v==null?(L==-1&&(Z>Q?N--:Z<Q&&N++),typeof Y.type!="function"&&(Y.__u|=4)):L!=K&&(L==K-1?N--:L==K+1?N++:(L>K?N--:N++,Y.__u|=4))):_.__k[X]=null;if(V)for(X=0;X<Q;X++)(q=j[X])!=null&&(2&q.__u)==0&&(q.__e==G&&(G=o4(q)),ZG(q,q));return G}function $G(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=$G(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=o4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function $F(_,$,j,G){var Z,X,Y,q=_.key,K=_.type,L=$[j],Q=L!=null&&(2&L.__u)==0;if(L===null&&q==null||Q&&q==L.key&&K==L.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((L=$[Y=Z>=0?Z--:X++])!=null&&(2&L.__u)==0&&q==L.key&&K==L.type)return Y}return-1}function uj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||tN.test($)?j:j+"px"}function p6(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||uj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||uj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(aj,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[c5]=G[c5]:(j[c5]=q3,_.addEventListener($,X?G3:j3,X)):_.removeEventListener($,X?G3:j3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(q){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function bj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[n6]==null)$[n6]=q3++;else if($[n6]<j[c5])return;return j(I_.event?I_.event($):$)}}}function V3(_,$,j,G,Z,X,Y,q,K,L){var Q,V,N,B,U,D,E,H,w,W,z,T,I,J,k,A=$.type;if($.constructor!==void 0)return null;128&j.__u&&(K=!!(32&j.__u),X=[q=$.__e=j.__e]),(Q=I_.__b)&&Q($);_:if(typeof A=="function")try{if(H=$.props,w=A.prototype&&A.prototype.render,W=(Q=A.contextType)&&G[Q.__c],z=Q?W?W.props.value:Q.__:G,j.__c?E=(V=$.__c=j.__c).__=V.__E:(w?$.__c=V=new A(H,z):($.__c=V=new l5(H,z),V.constructor=A,V.render=GF),W&&W.sub(V),V.state||(V.state={}),V.__n=G,N=V.__d=!0,V.__h=[],V._sb=[]),w&&V.__s==null&&(V.__s=V.state),w&&A.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=V$({},V.__s)),V$(V.__s,A.getDerivedStateFromProps(H,V.__s))),B=V.props,U=V.state,V.__v=$,N)w&&A.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),w&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(w&&A.getDerivedStateFromProps==null&&H!==B&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(H,z),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(H,V.__s,z)===!1){$.__v!=j.__v&&(V.props=H,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(O){O&&(O.__=$)}),o6.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&Y.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(H,V.__s,z),w&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(B,U,D)})}if(V.context=z,V.props=H,V.__P=_,V.__e=!1,T=I_.__r,I=0,w)V.state=V.__s,V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),o6.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,T&&T($),Q=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++I<25);V.state=V.__s,V.getChildContext!=null&&(G=V$(V$({},G),V.getChildContext())),w&&!N&&V.getSnapshotBeforeUpdate!=null&&(D=V.getSnapshotBeforeUpdate(B,U)),J=Q!=null&&Q.type===e6&&Q.key==null?GG(Q.props.children):Q,q=_G(_,t6(J)?J:[J],$,j,G,Z,X,Y,q,K,L),V.base=$.__e,$.__u&=-161,V.__h.length&&Y.push(V),E&&(V.__E=V.__=null)}catch(O){if($.__v=null,K||X!=null)if(O.then){for($.__u|=K?160:128;q&&q.nodeType==8&&q.nextSibling;)q=q.nextSibling;X[X.indexOf(q)]=null,$.__e=q}else{for(k=X.length;k--;)L3(X[k]);X3($)}else $.__e=j.__e,$.__k=j.__k,O.then||X3($);I_.__e(O,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):q=$.__e=jF(j.__e,$,j,G,Z,X,Y,K,L);return(Q=I_.diffed)&&Q($),128&$.__u?void 0:q}function X3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(X3))}function jG(_,$,j){for(var G=0;G<j.length;G++)Q3(j[G],j[++G],j[++G]);I_.__c&&I_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){I_.__e(X,Z.__v)}})}function GG(_){return typeof _!="object"||_==null||_.__b>0?_:t6(_)?_.map(GG):V$({},_)}function jF(_,$,j,G,Z,X,Y,q,K){var L,Q,V,N,B,U,D,E=j.props||i6,H=$.props,w=$.type;if(w=="svg"?Z="http://www.w3.org/2000/svg":w=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(L=0;L<X.length;L++)if((B=X[L])&&"setAttribute"in B==!!w&&(w?B.localName==w:B.nodeType==3)){_=B,X[L]=null;break}}if(_==null){if(w==null)return document.createTextNode(H);_=document.createElementNS(Z,w,H.is&&H),q&&(I_.__m&&I_.__m($,X),q=!1),X=null}if(w==null)E===H||q&&_.data==H||(_.data=H);else{if(X=X&&a6.call(_.childNodes),!q&&X!=null)for(E={},L=0;L<_.attributes.length;L++)E[(B=_.attributes[L]).name]=B.value;for(L in E)B=E[L],L=="dangerouslySetInnerHTML"?V=B:L=="children"||(L in H)||L=="value"&&("defaultValue"in H)||L=="checked"&&("defaultChecked"in H)||p6(_,L,null,B,Z);for(L in H)B=H[L],L=="children"?N=B:L=="dangerouslySetInnerHTML"?Q=B:L=="value"?U=B:L=="checked"?D=B:q&&typeof B!="function"||E[L]===B||p6(_,L,B,E[L],Z);if(Q)q||V&&(Q.__html==V.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(V&&(_.innerHTML=""),_G($.type=="template"?_.content:_,t6(N)?N:[N],$,j,G,w=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&o4(j,0),q,K),X!=null)for(L=X.length;L--;)L3(X[L]);q||(L="value",w=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[L]||w=="progress"&&!U||w=="option"&&U!=E[L])&&p6(_,L,U,E[L],Z),L="checked",D!=null&&D!=_[L]&&p6(_,L,D,E[L],Z))}return _}function Q3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){I_.__e(Z,j)}}function ZG(_,$,j){var G,Z;if(I_.unmount&&I_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||Q3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){I_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&ZG(G[Z],$,j||typeof _.type!="function");j||L3(_.__e),_.__c=_.__=_.__e=void 0}function GF(_,$,j){return this.constructor(_,j)}function Q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),I_.__&&I_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],V3($,_=(!G&&j||$).__k=K3(e6,null,[_]),Z||i6,i6,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?a6.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),jG(X,_,Y)}function ZF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,Z3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+tj++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function a4(_,$){R_.__h&&R_.__h(x_,_,s4||$),s4=0;var j=x_.__H||(x_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return s4=1,YG(qG,_)}function YG(_,$,j){var G=a4(v$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):qG(void 0,$),function(q){var K=G.__N?G.__N[0]:G.__[0],L=G.t(K,q);K!==L&&(G.__N=[L,G.__[1]],G.__c.setState({}))}],G.__c=x_,!x_.__f)){var Z=function(q,K,L){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(N){return N.__c});if(Q.every(function(N){return!N.__N}))return!X||X.call(this,q,K,L);var V=G.__c.props!==q;return Q.some(function(N){if(N.__N){var B=N.__[0];N.__=N.__N,N.__N=void 0,B!==N.__[0]&&(V=!0)}}),X&&X.call(this,q,K,L)||V};x_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=x_;x_.componentWillUpdate=function(q,K,L){if(this.__e){var Q=X;X=void 0,Z(q,K,L),X=Q}Y&&Y.call(this,q,K,L)},x_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=a4(v$++,3);!R_.__s&&B3(j.__H,$)&&(j.__=_,j.u=$,x_.__H.__h.push(j))}function t4(_,$){var j=a4(v$++,4);!R_.__s&&B3(j.__H,$)&&(j.__=_,j.u=$,x_.__h.push(j))}function g(_){return s4=5,Z0(function(){return{current:_}},[])}function XF(_,$,j){s4=6,t4(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Z0(_,$){var j=a4(v$++,7);return B3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return s4=8,Z0(function(){return _},$)}function YF(_){var $=x_.context[_.__c],j=a4(v$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(x_)),$.props.value):_.__}function qF(_,$){R_.useDebugValue&&R_.useDebugValue($?$(_):_)}function LF(_){var $=a4(v$++,10),j=C();return $.__=_,x_.componentDidCatch||(x_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function KF(){for(var _;_=XG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(d6),$.__h.some(Y3),$.__h=[]}catch(j){$.__h=[],R_.__e(j,_.__v)}}}function VF(_){var $,j=function(){clearTimeout(G),rj&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);rj&&($=requestAnimationFrame(j))}function d6(_){var $=x_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),x_=$}function Y3(_){var $=x_;_.__c=_.__(),x_=$}function B3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function qG(_,$){return typeof $=="function"?$(_):$}function QF(_){var $=dj.get(this);return $||($=new Map,dj.set(this,$)),($=LG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",q="",K=[0],L=function(N){X===1&&(N||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?K.push(0,N,Y):X===3&&(N||Y)?(K.push(3,N,Y),X=2):X===2&&Y==="..."&&N?K.push(4,N,0):X===2&&Y&&!N?K.push(5,0,!0,Y):X>=5&&((Y||!N&&X===5)&&(K.push(X,0,Y,Z),X=6),N&&(K.push(X,N,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&L(),L(Q));for(var V=0;V<j[Q].length;V++)G=j[Q][V],X===1?G==="<"?(L(),K=[K],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:q?G===q?q="":Y+=G:G==='"'||G==="'"?q=G:G===">"?(L(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][V+1]===">")?(L(),X===3&&(K=K[0]),X=K,(K=K[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(L(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,K=K[0])}return L(),K}(_)),$),arguments,[])).length>1?$:$[0]}var a6,I_,ij,aN,b$,gj,oj,sj,_3,n6,c5,aj,q3,j3,G3,tj,i6,o6,tN,t6,v$,x_,$3,vj,s4=0,XG,R_,mj,cj,lj,hj,pj,nj,rj,LG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],q=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=q:Y===4?G[1]=Object.assign(G[1]||{},q):Y===5?(G[1]=G[1]||{})[$[++X]]=q:Y===6?G[1][$[++X]]+=q+"":Y?(Z=_.apply(q,LG(_,q,j,["",null])),G.push(Z),q[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(q)}return G},dj,F;var T0=J_(()=>{i6={},o6=[],tN=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,t6=Array.isArray;a6=o6.slice,I_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(q){_=q}throw _}},ij=0,aN=function(_){return _!=null&&_.constructor===void 0},l5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=V$({},this.state),typeof _=="function"&&(_=_(V$({},j),this.props)),_&&V$(j,_),_!=null&&this.__v&&($&&this._sb.push($),Z3(this))},l5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),Z3(this))},l5.prototype.render=e6,b$=[],oj=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,sj=function(_,$){return _.__v.__b-$.__v.__b},s6.__r=0,_3=Math.random().toString(8),n6="__d"+_3,c5="__a"+_3,aj=/(PointerCapture)$|Capture$/i,q3=0,j3=bj(!1),G3=bj(!0),tj=0;XG=[],R_=I_,mj=R_.__b,cj=R_.__r,lj=R_.diffed,hj=R_.__c,pj=R_.unmount,nj=R_.__;R_.__b=function(_){x_=null,mj&&mj(_)},R_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),nj&&nj(_,$)},R_.__r=function(_){cj&&cj(_),v$=0;var $=(x_=_.__c).__H;$&&($3===x_?($.__h=[],x_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(d6),$.__h.some(Y3),$.__h=[],v$=0)),$3=x_},R_.diffed=function(_){lj&&lj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(XG.push($)!==1&&vj===R_.requestAnimationFrame||((vj=R_.requestAnimationFrame)||VF)(KF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),$3=x_=null},R_.__c=function(_,$){$.some(function(j){try{j.__h.some(d6),j.__h=j.__h.filter(function(G){return!G.__||Y3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],R_.__e(G,j.__v)}}),hj&&hj(_,$)},R_.unmount=function(_){pj&&pj(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{d6(G)}catch(Z){$=Z}}),j.__H=void 0,$&&R_.__e($,j.__v))};rj=typeof requestAnimationFrame=="function";dj=new Map;F=QF.bind(K3)});function W1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function K_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function F$(_,$=!1){let j=W1(_);if(j===null)return $;return j==="true"}function D4(_,$=null){let j=W1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function N2(_){let $=W1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function o3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function xZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function JH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function AH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=JH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),q=parseInt(Z[3],10);if(![X,Y,q].every((L)=>Number.isFinite(L)))return null;let K=`#${[X,Y,q].map((L)=>L.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:q,hex:K}}function W4(_){return xZ(_)||AH(_)}function s3(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function F2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function kH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function MH(_){return kH(_)>0.4?"#000000":"#ffffff"}function IZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function a3(_){return wZ[_]||wZ.default}function wH(_){return _.mode==="auto"?IZ():_.mode}function CZ(_,$){let j=a3(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function U$(_,$,j){let G=W4(_);if(!G)return _;return s3(G,$,j)}function PZ(_,$,j){let G=W4($);if(!G)return _;let X=xZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U$(_.bgPrimary,G,0.08),bgSecondary:U$(_.bgSecondary,G,0.12),bgHover:U$(_.bgHover,G,0.16),textPrimary:U$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:U$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:U$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?s3(G,X,0.18):G.hex,warning:U$(_.warning||H$.warning,G,0.14),danger:U$(_.danger,G,0.16),success:U$(_.success,G,0.16)}}function yH(_,$){let j=W4(_?.warning);if(j)return j.hex;let G=W4($==="dark"?E2.warning:H$.warning)||W4(H$.warning),Z=W4(_?.accent);if(G&&Z)return s3(G,Z,$==="dark"?0.18:0.14);return $==="dark"?E2.warning:H$.warning}function TH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=W4(G),X=Z?F2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?F2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",q=Z?F2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",K=Z?MH(Z):$==="dark"?"#000000":"#ffffff",L=Z?F2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=yH(_,$),V={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":L,"--accent-soft":Y,"--accent-soft-strong":q,"--accent-contrast-text":K,"--warning-color":Q,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(V).forEach(([N,B])=>{if(B)j.style.setProperty(N,B)})}function xH(){if(typeof document>"u")return;let _=document.documentElement;OH.forEach(($)=>_.style.removeProperty($))}function K5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function yZ(_){let $=o3(z4?.theme||"default"),j=z4?.tint?String(z4.tint).trim():null,G=CZ($,_);if($==="default"&&j)G=PZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?E2.bgPrimary:H$.bgPrimary}function IH(_,$){if(typeof document>"u")return;let j=K5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=K5("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",yZ("light"));let Z=K5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",yZ("dark"));let X=K5("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=K5("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let q=K5("apple-mobile-web-app-status-bar-style");if(q)q.setAttribute("content",$==="dark"?"black-translucent":"default")}function CH(){if(typeof window>"u")return;let _={...z4,mode:TZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function PH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function t3(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=o3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=a3(j),X=wH(Z),Y=CZ(j,X);z4={theme:j,tint:G},TZ=X;let q=document.documentElement;q.dataset.theme=X,q.dataset.colorTheme=j,q.dataset.tint=G?String(G):"",q.style.colorScheme=X;let K=Y;if(j==="default"&&G)K=PZ(Y,G,X);if(j==="default"&&!G)xH();else TH(K,X);if(IH(K.bgPrimary,X),CH(),$.persist!==!1)if(K_(i3,j),G)K_(H2,G);else K_(H2,"")}function U2(){if(a3(z4.theme).mode!=="auto")return;t3(z4,{persist:!1})}function fZ(){if(typeof window>"u")return()=>{};let _=o3(W1(i3)||"default"),$=(()=>{let j=W1(H2);return j?j.trim():null})();if(t3({theme:_,tint:$},{persist:!1}),window.matchMedia&&!d3){let j=window.matchMedia("(prefers-color-scheme: dark)");if(j.addEventListener)j.addEventListener("change",U2);else if(j.addListener)j.addListener(U2);return d3=!0,()=>{if(j.removeEventListener)j.removeEventListener("change",U2);else if(j.removeListener)j.removeListener(U2);d3=!1}}return()=>{}}function V5(_){if(!_||typeof _!=="object")return;let $=PH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)t3({theme:G||"default",tint:Z},{persist:!1});K_(i3,G||"default"),K_(H2,Z||"")}function RZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return IZ()}var i3="piclaw_theme",H2="piclaw_tint",H$,E2,wZ,OH,z4,TZ="light",d3=!1;var a5=J_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},E2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},wZ={default:{label:"Default",mode:"auto",light:H$,dark:E2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},OH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],z4={theme:"default",tint:null}});function hZ(_=typeof window<"u"?window:null){return _||null}function W2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function j6(_,$){return`${_}:${$}`}function pZ(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function nZ(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function J4(_){if(!_||typeof _!=="object")return null;return{..._}}function M4(_){if(!_)return null;return A4.find(($)=>$.id===_)||null}function _7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function rZ(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=M4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function lZ(_,$,j){let G=k4.get(j6(_,$));if(G&&M4(G)?.status==="active")$6(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=pZ(_),X={id:Z,type:_,chatJid:$,startedAt:W2(),detail:J4(j),phases:[],status:"active"};return A4.push(X),nZ(A4,100),k4.set(j6(_,$),Z),_7(Z,"start"),Z}function $6(_,$,j,G,Z){let X=M4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:W2(),detail:J4(G)}),_7(X.id,j);if(X.status=$,X.completedAt=W2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=j6(X.type,X.chatJid);if(k4.get(Y)===X.id)k4.delete(Y);rZ(X.id)}function eH(_=hZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=z2;return z2}function Q5(_=hZ()){return eH(_)}function dZ(_,$,j){return Q5().ensureTrace(_,$,j)}function O2(_,$){return Q5().getActiveTraceId(_,$)}function Z1(_,$,j){Q5().markTrace(_,$,j)}function J2(_,$,j="settled",G){let Z=M4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return $6(_,"completed",j,G),!0}function iZ(_,$,j="failed",G){Q5().failTrace(_,$,j,G)}function oZ(_,$="cancelled",j){Q5().cancelTrace(_,$,j)}function $7(_){return Q5().recordRequest(_)}var A4,_6,k4,z2;var G6=J_(()=>{A4=[],_6=[],k4=new Map;z2={startTrace(_,$,j){return lZ(_,$,j)},ensureTrace(_,$,j){let G=k4.get(j6(_,$));if(G&&M4(G)?.status==="active")return G;return lZ(_,$,j)},getActiveTraceId(_,$){let j=k4.get(j6(_,$));return j&&M4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=M4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:W2(),detail:J4(j)}),_7(G.id,$)},completeTrace(_,$="settled",j){$6(_,"completed",$,j)},failTrace(_,$,j="failed",G){$6(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){$6(_,"cancelled",$,j)},recordRequest(_){let $=pZ("req");return _6.push({..._,id:$,detail:J4(_.detail)}),nZ(_6,300),$},getTraces(){return A4.map((_)=>({..._,detail:J4(_.detail),phases:_.phases.map(($)=>({...$,detail:J4($.detail)}))}))},getRequests(){return _6.map((_)=>({..._,detail:J4(_.detail)}))},clear(){A4.forEach((_)=>rZ(_.id)),A4.splice(0,A4.length),_6.splice(0,_6.length),k4.clear()},printSummary(){let _={traces:z2.getTraces(),requests:z2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function B5(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function _E(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function $E(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function sZ(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function aZ(_=typeof window<"u"?window:null){let $=B5(_?.innerWidth)??B5(_?.screen?.availWidth)??B5(_?.screen?.width)??0,j=B5(_?.innerHeight)??B5(_?.screen?.availHeight)??B5(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=_E(_),Y=Number(_?.navigator?.maxTouchPoints||0),q=X||Y>1;if(G>0&&G<=640)return"mobile";if($E(_)&&!sZ(_))return"mobile";if(sZ(_))return"tablet";if(q&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var K6={};Y1(K6,{uploadWorkspaceFile:()=>M2,uploadMedia:()=>B7,updateWorkspaceFile:()=>RE,submitAdaptiveCardAction:()=>N7,streamSidePrompt:()=>IE,stopAutoresearch:()=>AE,steerAgentQueueItem:()=>yE,setWorkspaceVisibility:()=>q6,setAgentThoughtVisibility:()=>PE,sendPeerAgentMessage:()=>DE,sendAgentMessage:()=>z1,searchPosts:()=>GE,saveWorkspaceSettings:()=>q7,saveWebPushSubscription:()=>V7,saveUiState:()=>X7,saveQuickActionsSettings:()=>Y7,saveEnvironmentOverride:()=>A2,restoreChatBranch:()=>EE,respondToAgentRequest:()=>N5,reorderAgentQueueItem:()=>TE,renameWorkspaceFile:()=>A7,renameChatJid:()=>HE,renameChatBranch:()=>BE,removeAgentQueueItem:()=>wE,reindexWorkspace:()=>W7,purgeChatBranch:()=>UE,pruneChatBranch:()=>FE,moveWorkspaceEntry:()=>k7,mergeChatBranchIntoParent:()=>NE,getWorkspaceTree:()=>Y6,getWorkspaceRawUrl:()=>L6,getWorkspaceIndexStatus:()=>D7,getWorkspaceFileStat:()=>O7,getWorkspaceFileDownloadUrl:()=>w2,getWorkspaceFile:()=>z7,getWorkspaceDownloadUrl:()=>y2,getWorkspaceBranch:()=>E7,getWebPushPublicKey:()=>K7,getTimeline:()=>h$,getThumbnailUrl:()=>U7,getThread:()=>ZE,getSystemMetrics:()=>Z7,getQuickActionsSettings:()=>X6,getPostsByHashtag:()=>G7,getMediaUrl:()=>g1,getMediaText:()=>fE,getMediaInfo:()=>k2,getMediaBlob:()=>H7,getEnvironmentSettings:()=>L7,getChatBranches:()=>KE,getAutoresearchStatus:()=>JE,getAgents:()=>WE,getAgentThought:()=>CE,getAgentStatus:()=>zE,getAgentQueueState:()=>ME,getAgentModels:()=>w4,getAgentContext:()=>OE,getAgentCommands:()=>Z6,getActiveChatAgents:()=>LE,forkChatBranch:()=>VE,dismissAutoresearch:()=>kE,deleteWorkspaceFile:()=>M7,deleteWebPushSubscription:()=>Q7,deletePost:()=>qE,createWorkspaceFile:()=>J7,createRootChatSession:()=>QE,createReply:()=>YE,createPost:()=>XE,completeInstanceOobe:()=>xE,attachWorkspaceFile:()=>SE,addToWhitelist:()=>F7,SSEClient:()=>T2});async function r0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(l_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw $7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if($7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function tZ(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function jE(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:q}=await j.read();if(q)break;Z+=G.decode(Y,{stream:!0});let K=Z.split(`

`);Z=K.pop()||"";for(let L of K){let Q=tZ(L);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=tZ(Z);if(X)$(X.event,X.data)}async function h$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return r0(G)}async function G7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return r0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function GE(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let q=G?`&chat_jid=${encodeURIComponent(G)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",L=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",V=Y?.attachments?"&attachments=1":"";return r0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${L}${Q}${V}`)}async function ZE(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return r0(`/thread/${_}${j}`)}async function Z7(){return r0("/agent/system-metrics")}async function X7(_){return r0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function XE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return r0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function YE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return r0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function qE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return r0(Z,{method:"DELETE"})}async function z1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",q={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:aZ()}};if(Z==="auto"||Z==="queue"||Z==="steer")q.mode=Z;return r0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(q)})}async function Z6(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return r0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function X6(){return r0("/agent/settings/quick-actions")}async function Y7(_){return r0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function q7(_){return r0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function L7(){return r0("/agent/settings/environment")}async function A2(_){return r0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function LE(){return r0("/agent/active-chats")}async function KE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return r0(`/agent/branches${G}`)}async function VE(_,$={}){return r0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function QE(_){return r0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function BE(_,$={}){return r0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function NE(_){return r0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function FE(_){return r0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function UE(_){return r0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function HE(_,$){return r0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function EE(_,$={}){return r0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function DE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return r0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function K7(){return r0("/agent/push/vapid-public-key")}async function V7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function Q7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return r0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function WE(){return r0("/agent/roster")}async function zE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/status${$}`)}async function OE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/context${$}`)}async function JE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/autoresearch/status${$}`)}async function AE(_=null,$={}){return r0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function kE(_=null){return r0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function ME(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/queue-state${$}`)}async function wE(_,$=null){let j=await fetch(l_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function yE(_,$=null){let j=await fetch(l_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function TE(_,$,j=null){let G=await fetch(l_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return r0(`/agent/models${$}`)}async function xE(_="provider-ready"){return r0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function B7(_){let $=new FormData;$.append("file",_);let j=await fetch(l_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function N5(_,$,j=null){let G=await fetch(l_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function N7(_){let $=await fetch(l_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function IE(_,$={}){let j=await fetch(l_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await jE(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function F7(_,$){let j=await fetch(l_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function CE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return r0(j)}async function PE(_,$,j){return r0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function g1(_){return`${l_}/media/${_}`}function U7(_){return`${l_}/media/${_}/thumbnail`}async function k2(_){let $=await fetch(`${l_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function fE(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function H7(_){let $=await fetch(`${l_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function Y6(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return r0(G)}async function E7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return r0($)}async function D7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return r0($)}async function W7(_="all"){return r0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function z7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return r0(Z)}async function O7(_){return r0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function RE(_,$){return r0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function SE(_){return r0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function uE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function bE(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function vE(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",l_+$);for(let[q,K]of Object.entries(j||{}))if(K!==void 0&&K!==null)Y.setRequestHeader(q,String(K));Y.upload.onprogress=(q)=>{if(typeof G==="function")G({loaded:q.lengthComputable?q.loaded:0,total:q.lengthComputable?q.total:_.size,lengthComputable:q.lengthComputable})},Y.onload=()=>{try{let q=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(q);else{let K=Error(q.error||`HTTP ${Y.status}`);K.status=Y.status,K.code=q.code,X(K)}}catch{let q=Error(`HTTP ${Y.status}`);q.status=Y.status,X(q)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function mE(_,$="",j={}){let G=bE(),Z=uE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(j7,Number(j.chunkSize)||gE)),Y=Math.max(0,Number(_?.size)||0),q=Math.max(1,Math.ceil(Y/X)),K=0,L=null;for(let Q=0;Q<q;Q+=1){let V=Q*X,N=Math.min(Y,V+X),B=_.slice(V,N),U=B.size;if(L=await vE(B,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":q,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(D)=>{if(typeof j.onProgress!=="function")return;let E=Math.min(Y,K+(D?.loaded||0)),H=Y||1;j.onProgress({loaded:E,total:H,percent:Math.round(E/H*100),chunkIndex:Q,chunkTotal:q})}),K+=U,typeof j.onProgress==="function"){let D=Y||1,E=Y?K:D;j.onProgress({loaded:E,total:D,percent:Math.round(E/D*100),chunkIndex:Q+1,chunkTotal:q})}}return L}async function M2(_,$="",j={}){if(_?.size>j7){let G=(_.size/1048576).toFixed(0),Z=(j7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await mE(_,$,j)}async function J7(_,$,j=""){let G=await fetch(l_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function A7(_,$){let j=await fetch(l_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function k7(_,$){let j=await fetch(l_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function M7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return r0($,{method:"DELETE"})}async function q6(_,$=!1){return r0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function L6(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${l_}/workspace/raw?${j.toString()}`}function w2(_){return L6(_,{download:!0})}function y2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${l_}/workspace/download?${j}`}class T2{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(l_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var l_="",j7=1073741824,gE=8388608;var S_=J_(()=>{G6()});function U5(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=U5(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function v7(){if(typeof window>"u")return null;return U5(window.__piclawSettingsRequestedSection)}function P2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=v7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function r$({children:_,className:$=""}){let[j,G]=C(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{Q$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),t4(()=>{if(!j)return;Q$(_,j);return},[_,j]),null}var f2=J_(()=>{T0()});function d$(_){let $=T4.findIndex((j)=>j.id===_.id);if($>=0)T4[$]=_;else T4.push(_);T4.sort((j,G)=>(j.order??500)-(G.order??500))}function vX(_){let $=T4.findIndex((j)=>j.id===_);if($>=0)T4.splice($,1)}function mX(){return[...T4]}function m7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var T4;var H5=J_(()=>{T4=[]});function KD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(x4,{detail:{enabled:Boolean(_)}}))}function hX(_){if(typeof fetch!=="function")return;X7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function VD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(S2,{detail:{collapsed:Boolean(_)}}))}function H6(_=!1){return F$(cX,_)}function pX(_=!1){return F$(lX,_)}function R2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)K_(cX,Z?"true":"false");if(G)hX({enabled:Z});return KD(Z),Z}function c7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)K_(lX,Z?"true":"false");if(G)hX({collapsed:Z});return VD(Z),Z}function l7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")R2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!H6(!1);R2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")c7(Boolean(_.collapsed),{persistServer:!1})}var cX="piclaw_system_meters_enabled",lX="piclaw_system_meters_collapsed",x4="piclaw-meters-change",S2="piclaw-meters-collapsed-change";var g2=J_(()=>{S_()});function nX(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function rX(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function z$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=nX(_,$);return rX(Z,{min:j,max:G})}function QD(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=z$(_,{fallback:G,min:Z,max:X}),q=Math.abs(nX(j,1))||1,K=Number($)<0?-1:1;return rX(Y+K*q,{min:Z,max:X})}function b_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:q,onChange:K}){let L=Number.isFinite(Number(Z))?Number(Z):z$(_,{fallback:0,min:$,max:j}),[Q,V]=C(String(_??L)),N=g(!1);u(()=>{if(!N.current)V(String(_??L))},[_,L]);let B=P((D)=>{N.current=!1;let E=z$(D,{fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,$,j,K]),U=P((D)=>{N.current=!1;let E=QD(_,{direction:D,step:G,fallback:L,min:$,max:j});V(String(E)),K?.(E)},[L,j,$,K,G,_]);return F`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${q||"value"}`}
                title=${`Decrease ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(-1)}
            >−</button>
            <input
                class="settings-number-input"
                type="text"
                inputmode="numeric"
                pattern="[0-9]*"
                value=${Q}
                disabled=${Y}
                style=${`width:${X}`}
                onInput=${(D)=>{N.current=!0,V(D.target.value)}}
                onBlur=${(D)=>B(D.target.value)}
                onKeyDown=${(D)=>{if(D.key==="Enter")D.preventDefault(),B(D.target.value),D.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${q||"value"}`}
                title=${`Increase ${q||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var I4=J_(()=>{T0()});function dX(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function iX({value:_,onChange:$}){let j=g(null),[G,Z]=C(dX(_));u(()=>{Z(dX(_))},[_]);let X=P((Y)=>{let q=Y.target.files?.[0];if(!q)return;let K=new FileReader;K.onload=()=>{let L=K.result;Z(L),$?.(L)},K.readAsDataURL(q)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function oX(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function h7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[q,K]=C(""),[L,Q]=C(""),[V,N]=C(32),[B,U]=C(256),[D,E]=C(""),[H,w]=C(!1),[W,z]=C(!1),[T,I]=C(()=>H6(!1)),[J,k]=C(!1),A=g(""),O=g(null),M=g(!0);u(()=>{return M.current=!0,()=>{M.current=!1}},[]);let x=P((r)=>{let b=oX(r);Z(b.userName),Y(b.userAvatar),K(b.assistantName),Q(b.assistantAvatar),N(b.composeUploadLimitMb),U(b.workspaceUploadLimitMb),E(r?.widgetToken||""),A.current=JSON.stringify(b)},[]);u(()=>{x(_||{})},[_,x]),u(()=>{let r=(b)=>{I(Boolean(b?.detail?.enabled))};return window.addEventListener(x4,r),()=>window.removeEventListener(x4,r)},[]);let f=Z0(()=>JSON.stringify(oX({userName:G,userAvatar:X,assistantName:q,assistantAvatar:L,composeUploadLimitMb:V,workspaceUploadLimitMb:B})),[G,X,q,L,V,B]);u(()=>{if(f===A.current)return;if(O.current)clearTimeout(O.current);return O.current=setTimeout(async()=>{if(!M.current)return;let r=document.activeElement;if(r&&r.closest?.(".settings-number-stepper"))return;try{let b=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:f}),e=await b.json().catch(()=>({}));if(!M.current)return;if(!b.ok||!e?.ok||!e?.settings)return;A.current=f,j?.(e.settings),k(!0),setTimeout(()=>{if(M.current)k(!1)},4000)}catch(b){console.warn("[settings/general] Failed to persist general settings snapshot.",b)}},800),()=>{if(O.current)clearTimeout(O.current)}},[f,j]);let S=_?.instanceTotp||{configured:!1,issuer:q||"Piclaw",label:G?`${q||"Piclaw"}:${G}`:q||"Piclaw",secret:"",otpauth:"",qrSvg:""},v=P(async()=>{if(!D)return;try{await navigator.clipboard?.writeText(D),w(!0),setTimeout(()=>{if(M.current)w(!1)},3000)}catch(r){console.warn("[settings/general] Failed to copy widget token.",r)}},[D]),l=P(async()=>{if(W)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;z(!0);try{let r=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),b=await r.json().catch(()=>({}));if(!r.ok||!b?.ok||!b?.settings)throw Error(b?.error||"Failed to regenerate widget token.");E(b.settings.widgetToken||""),j?.(b.settings),k(!0),setTimeout(()=>{if(M.current)k(!1)},4000)}catch(r){console.warn("[settings/general] Failed to regenerate widget token.",r)}finally{if(M.current)z(!1)}},[W,j]),h=typeof window<"u"&&window.isSecureContext;return F`
        <div class="settings-section">
            ${J&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${iX} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(r)=>Z(r.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${iX} value=${L} onChange=${Q} />
                <input type="text" value=${q} onInput=${(r)=>K(r.target.value)} placeholder="Agent name" />
            </div>

            <h3 style="margin-top:20px">Notifications</h3>
            ${h?F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0">
                            Use the 🔔 bell button in the compose bar to enable/disable notifications.
                            Web Push requires HTTPS or localhost.
                        </span>
                    </div>
                </div>
            `:F`
                <div class="settings-row">
                    <label>Browser notifications</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <span class="settings-hint" style="margin:0; color: var(--error-color, #e55)">
                            ⚠ Not available — requires a secure context (HTTPS or localhost).
                            Access via SSH tunnel or reverse proxy with TLS to enable.
                        </span>
                    </div>
                </div>
            `}

            <h3 style="margin-top:20px">Display</h3>
            <div class="settings-row">
                <label>System meters</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${T}
                        onChange=${()=>{let r=R2(!T);I(r)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${b_}
                    label="compose upload limit"
                    value=${V}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${b_}
                    label="workspace upload limit"
                    value=${B}
                    min=${1}
                    max=${1024}
                    fallback=${256}
                    width="80px"
                    onChange=${U}
                />
                <span class="settings-hint" style="margin:0">defaults to 256 MB; chunked uploads allow up to 1 GB</span>
            </div>

            <h3 style="margin-top:20px">Authentication</h3>
            <div class="settings-row settings-row-vertical">
                <label>Widget bearer token</label>
                <div style="display:flex; gap:8px; align-items:center; width:100%;">
                    <input type="password" readonly value=${D||""} style="flex:1; min-width:0; font-family: var(--mono-font, monospace);" />
                    <button type="button" onClick=${v} disabled=${!D}>${H?"Copied":"Copy"}</button>
                    <button type="button" onClick=${l} disabled=${W}>${W?"Regenerating…":"Regenerate"}</button>
                </div>
                <span class="settings-hint" style="margin:6px 0 0 0;">
                    Read-only token for <code>GET /api/state</code> and <code>GET /api/state/events</code>. Use as <code>Authorization: Bearer …</code>.
                </span>
            </div>
            <div class="settings-totp-panel">
                <div class="settings-totp-header">
                    <div>
                        <strong>TOTP setup QR</strong>
                        <div class="settings-hint" style="margin:6px 0 0 0;">
                            ${S.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${S.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:S.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${S.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${S.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${S.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var sX=J_(()=>{T0();g2();I4()});var tX={};Y1(tX,{SessionsSection:()=>BD});function aX(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function BD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[q,K]=C(4000),[L,Q]=C(3),[V,N]=C(64),[B,U]=C("none"),[D,E]=C(!1),H=g(""),w=g(null),W=g(!0);u(()=>{return W.current=!0,()=>{W.current=!1}},[]);let z=P((I)=>{let J=aX(I);Z(J.sessionAutoRotate),Y(J.sessionMaxSizeMb),K(J.sessionMaxLines),Q(J.sessionMaxCompactions),N(J.toolUseBudget),U(J.sessionIsolation),H.current=JSON.stringify(J)},[]);u(()=>{z(_||{})},[_,z]);let T=Z0(()=>JSON.stringify(aX({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:q,sessionMaxCompactions:L,toolUseBudget:V,sessionIsolation:B})),[G,X,q,L,V,B]);return u(()=>{if(T===H.current)return;if(w.current)clearTimeout(w.current);return w.current=setTimeout(async()=>{if(!W.current)return;let I=document.activeElement;if(I&&I.closest?.(".settings-number-stepper"))return;try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),k=await J.json().catch(()=>({}));if(!W.current)return;if(!J.ok||!k?.ok||!k?.settings)return;H.current=T,j?.(k.settings),E(!0),setTimeout(()=>{if(W.current)E(!1)},4000)}catch(J){console.warn("[settings/sessions] Failed to persist session settings.",J)}},800),()=>{if(w.current)clearTimeout(w.current)}},[T,j]),F`
        <div class="settings-section">
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(I)=>Z(I.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${b_}
                    label="max session size"
                    value=${X}
                    min=${1}
                    max=${256}
                    fallback=${32}
                    width="80px"
                    onChange=${Y}
                />
            </div>

            <h3 style="margin-top:20px">Agent Behaviour</h3>
            <div class="settings-row">
                <label>Tool use budget</label>
                <${b_}
                    label="tool use budget"
                    value=${V}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${N}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${B} onChange=${(I)=>U(I.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var eX=J_(()=>{T0();I4()});var _Y={};Y1(_Y,{CompactionSection:()=>FD});function ND(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function p7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function FD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[q,K]=C(360),[L,Q]=C(75),[V,N]=C(0.5),[B,U]=C(!1),[D,E]=C(120),[H,w]=C([]),[W,z]=C([]),[T,I]=C(!1),J=g(""),k=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{A.current=!1}},[]);let O=P((f)=>{let S=ND(f);Z(S.compactionTimeoutSec),Y(S.compactionBackoffBaseMin),K(S.compactionBackoffMaxMin),Q(S.compactionThresholdPercent),N(S.compactionBackoffDecayFactor),U(S.progressWatchdogEnabled),E(S.progressWatchdogTimeoutSec),w(S.compactionBackoffs),z(S.progressWatchdogPhases),J.current=JSON.stringify({compactionTimeoutSec:S.compactionTimeoutSec,compactionBackoffBaseMin:S.compactionBackoffBaseMin,compactionBackoffMaxMin:S.compactionBackoffMaxMin,compactionThresholdPercent:S.compactionThresholdPercent,compactionBackoffDecayFactor:S.compactionBackoffDecayFactor,progressWatchdogEnabled:S.progressWatchdogEnabled,progressWatchdogTimeoutSec:S.progressWatchdogTimeoutSec})},[]);u(()=>{O(_||{})},[_,O]);let M=Z0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:q,compactionThresholdPercent:L,compactionBackoffDecayFactor:V,progressWatchdogEnabled:B,progressWatchdogTimeoutSec:D}),[G,X,q,L,V,B,D]);u(()=>{if(M===J.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!A.current)return;let f=document.activeElement;if(f&&f.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let S=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:M}),v=await S.json().catch(()=>({}));if(!A.current)return;if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}J.current=M,j?.(v.settings),O({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),I(!0),setTimeout(()=>{if(A.current)I(!1),$?.(null)},4000)}catch(S){if(console.warn("[settings/compaction] Failed to persist compaction settings.",S),A.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[M,j,$,O,_]);let x=P(async(f)=>{try{$?.(`Clearing compaction suppression for ${f}…`,"info");let S=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:f})}),v=await S.json().catch(()=>({}));if(!S.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),O({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${f}.`,"success")}catch(S){console.warn("[settings/compaction] Failed to clear compaction suppression.",S),$?.("Failed to clear compaction suppression.","error")}},[O,j,$,_]);return F`
        <div class="settings-section">
            ${T&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${b_}
                    label="compaction threshold"
                    value=${L}
                    min=${10}
                    max=${95}
                    fallback=${75}
                    width="80px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">auto-compact when context exceeds this % of window</span>
            </div>
            <div class="settings-row">
                <label>Compaction timeout (sec)</label>
                <${b_}
                    label="compaction timeout"
                    value=${G}
                    min=${1}
                    max=${3600}
                    fallback=${180}
                    width="90px"
                    onChange=${Z}
                />
                <span class="settings-hint" style="margin:0">Abort a stuck pre-prompt/manual compaction instead of hanging forever.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff base (min)</label>
                <${b_}
                    label="compaction backoff base"
                    value=${X}
                    min=${1}
                    max=${1440}
                    fallback=${15}
                    width="90px"
                    onChange=${Y}
                />
                <span class="settings-hint" style="margin:0">First suppression window after a compaction failure.</span>
            </div>
            <div class="settings-row">
                <label>Failure backoff max (min)</label>
                <${b_}
                    label="compaction backoff max"
                    value=${q}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${b_}
                    label="backoff decay factor"
                    value=${Math.round(V*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(f)=>N(f/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${B} onChange=${(f)=>U(Boolean(f.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${b_}
                    label="watchdog timeout"
                    value=${D}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!B}
                    onChange=${E}
                />
                <span class="settings-hint" style="margin:0">How long an active phase can go without a heartbeat before the watchdog kills the runtime.</span>
            </div>

            <h3 style="margin-top:20px">Active compaction suppressions</h3>
            ${H.length===0?F`
                <p class="settings-hint">No chats are currently under compaction backoff.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Failures</th>
                                <th>Suppressed until</th>
                                <th>Last error</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            ${H.map((f)=>F`
                                <tr>
                                    <td><code>${f.chatJid}</code></td>
                                    <td>${f.failureCount}</td>
                                    <td>${p7(f.backoffUntil)}</td>
                                    <td title=${f.lastErrorMessage||""}>${f.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>x(f.chatJid)}>
                                            Clear
                                        </button>
                                    </td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}

            <h3 style="margin-top:20px">Live watchdog phases</h3>
            ${W.length===0?F`
                <p class="settings-hint">No active tracked phases right now.</p>
            `:F`
                <div class="settings-table-wrapper">
                    <table class="settings-table">
                        <thead>
                            <tr>
                                <th>Chat</th>
                                <th>Phase</th>
                                <th>Started</th>
                                <th>Last heartbeat</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${W.map((f)=>F`
                                <tr>
                                    <td><code>${f.chatJid}</code></td>
                                    <td>${f.phase}</td>
                                    <td>${p7(f.startedAt)}</td>
                                    <td>${p7(f.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var $Y=J_(()=>{T0();I4()});function GY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=ED[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(DD.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function E5(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),q=HD[Y];if(q){G[q]=!0;continue}if(G.key)return null;let K=GY(X);if(!K||K==="escape")return null;G.key=K}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function ZY(_){return String(_||"").split(/[\n,]/).map(($)=>E5($)).filter(($)=>Boolean($))}function o$(_){return _.join(", ")}function r7(){let _=N2(jY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>E5(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function n7(_){if(K_(jY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function XY(_){return UD.get(_)}function E6(_){let $=r7()[_];if(Array.isArray($))return $;return[...XY(_).defaultBindings]}function YY(_,$){let j=r7(),G=XY(_).defaultBindings,Z=[...new Set($.map((X)=>E5(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;n7(j)}function d7(_){if(!_){n7({});return}let $=r7();delete $[_],n7($)}function u2(){let _={};for(let $ of i$)_[$.id]=E6($.id);return _}function WD(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return GY($)||$.toLowerCase()}function zD(_){let $=E5(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function OD(_,$){let j=zD($);if(!j)return!1;if(WD(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function O$(_,$){return E6($).some((j)=>OD(_,j))}var jY="piclaw_keyboard_shortcuts_v1",i$,UD,HD,ED,DD;var b2=J_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],UD=new Map(i$.map((_)=>[_.id,_])),HD={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},ED={esc:"escape",return:"enter",spacebar:"space"},DD=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var qY={};Y1(qY,{KeyboardSection:()=>AD});function JD(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function AD({filter:_="",setStatus:$}){let[j,G]=C(()=>{let K=u2();return Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,o$(Q)]))});u(()=>{let K=()=>{let L=u2();G(Object.fromEntries(Object.entries(L).map(([Q,V])=>[Q,o$(V)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",K),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",K)},[]);let Z=Z0(()=>i$.filter((K)=>{let L=String(j[K.id]||"");return JD(_,K,L)}),[j,_]),X=(K)=>{let L=String(j[K]||"").trim(),V=(L?L.split(/[\n,]/).map((B)=>B.trim()).filter(Boolean):[]).filter((B)=>!E5(B));if(V.length>0){$?.(`Invalid shortcut: ${V[0]}. Escape is reserved and cannot be rebound.`,"error");return}let N=ZY(L);YY(K,N),G((B)=>({...B,[K]:o$(E6(K))})),$?.("Keyboard shortcuts saved.","success")},Y=(K)=>{d7(K),G((L)=>({...L,[K]:o$(E6(K))})),$?.("Keyboard shortcut reset to default.","success")};return F`
        <div class="settings-section">
            <h3>Keyboard</h3>
            <p class="settings-hint">
                Customize app-wide shortcuts as comma-separated bindings. Changes apply immediately.
                <code>Escape</code> is reserved for dismiss/abort and cannot be rebound.
            </p>
            <p class="settings-hint">
                <code>/help</code> and typing <code>"</code> outside the compose box open this pane.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:18px; justify-content:flex-end;">
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{d7();let K=u2();G(Object.fromEntries(Object.entries(K).map(([L,Q])=>[L,o$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((K)=>F`
                    <div class="settings-shortcut-card" key=${K.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${K.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${K.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${o$(K.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[K.id]||""}
                                placeholder=${o$(K.defaultBindings)}
                                onInput=${(L)=>G((Q)=>({...Q,[K.id]:L.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(K.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(K.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var LY=J_(()=>{T0();b2()});function KY(_,$=i7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function VY(_,$=o7){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function D5(){return{refreshIntervalSec:KY(D4(m2,i7),i7),folderPreviewDepth:VY(D4(c2,o7),o7)}}function QY(_={}){let $=D5(),j={refreshIntervalSec:KY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:VY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(K_(m2,String(j.refreshIntervalSec)),K_(c2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(v2,{detail:{settings:j}}));return j}var v2="piclaw:workspace-client-settings-updated",m2="workspaceRefreshIntervalSec",c2="workspaceFolderPreviewDepth",i7=60,o7=3;var s7=()=>{};var NY={};Y1(NY,{WorkspaceSection:()=>kD});function BY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function kD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[q,K]=C(4),[L,Q]=C(5000),[V,N]=C(60),[B,U]=C(3),[D,E]=C(!1),[H,w]=C(!1),W=g(""),z=g(null),T=g(null),I=g(null),J=g(!0);u(()=>{return J.current=!0,()=>{if(J.current=!1,z.current)clearTimeout(z.current);if(T.current)clearTimeout(T.current);if(I.current)clearTimeout(I.current)}},[]);let k=P((M)=>{let x=BY(M),f=D5();Z(x.webTerminalEnabled),Y(x.vncAllowDirect),K(x.treeMaxDepth),Q(x.treeMaxEntries),N(f.refreshIntervalSec),U(f.folderPreviewDepth),W.current=JSON.stringify(x)},[]);u(()=>{k(_||{})},[_,k]);let A=Z0(()=>JSON.stringify(BY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:q,treeMaxEntries:L}})),[G,X,q,L]);u(()=>{if(A===W.current)return;if(z.current)clearTimeout(z.current);return z.current=setTimeout(async()=>{if(!J.current)return;let M=document.activeElement;if(M&&M.closest?.(".settings-number-stepper"))return;try{let x=await q7(JSON.parse(A));if(!J.current||!x?.ok||!x?.settings)return;if(W.current=A,j?.({workspaceSettings:x.settings}),$?.(null),E(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(J.current)E(!1)},4000)}catch(x){$?.(String(x?.message||x),"error")}},800),()=>{if(z.current)clearTimeout(z.current)}},[A,j,$]);let O=P((M)=>{let x=QY(M);if(N(x.refreshIntervalSec),U(x.folderPreviewDepth),w(!0),I.current)clearTimeout(I.current);I.current=setTimeout(()=>{if(J.current)w(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${D&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Workspace settings applied. Server-side limits affect new workspace requests immediately.
                </div>
            `}
            ${H&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Browser workspace settings applied immediately in this tab.
                </div>
            `}

            <h3>Access</h3>
            <div class="settings-row">
                <label>Enable web terminal</label>
                <input type="checkbox" checked=${G} onChange=${(M)=>Z(M.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(M)=>Y(M.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${b_}
                    label="workspace tree max depth"
                    value=${q}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${K}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${b_}
                    label="workspace tree max entries"
                    value=${L}
                    min=${250}
                    max=${5000}
                    step=${250}
                    fallback=${5000}
                    width="92px"
                    onChange=${Q}
                />
                <span class="settings-hint" style="margin:0">truncate oversized tree walks earlier</span>
            </div>

            <h3 style="margin-top:20px">This browser</h3>
            <div class="settings-row">
                <label>Refresh interval (seconds)</label>
                <${b_}
                    label="workspace refresh interval"
                    value=${V}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(M)=>O({refreshIntervalSec:M})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${b_}
                    label="folder preview scan depth"
                    value=${B}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(M)=>O({folderPreviewDepth:M})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var FY=J_(()=>{T0();S_();s7();I4()});var UY={};Y1(UY,{EnvironmentSection:()=>MD});function a7(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function MD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>a7(_||{})),[Y,q]=C({}),[K,L]=C(""),[Q,V]=C(""),[N,B]=C(null);u(()=>{X(a7(_||{})),q({})},[_]);let U=P((z)=>{let T=a7({environmentSettings:z?.settings||z});return X(T),G?.({environmentSettings:T}),q({}),T},[G]),D=P(async()=>{try{let z=await L7();if(z?.ok)U(z.settings);j?.("Environment refreshed.","info")}catch(z){j?.(String(z?.message||z),"error")}},[U,j]),E=P(async(z,T)=>{let I=String(z||"").trim();if(!I)return;B(I);try{let J=await A2({action:"set",name:I,value:String(T??"")});if(J?.ok)U(J.settings);if(j?.(`Saved environment override for ${I}.`,"info"),I===K.trim())L(""),V("")}catch(J){j?.(String(J?.message||J),"error")}finally{B(null)}},[U,K,j]),H=P(async(z)=>{let T=String(z||"").trim();if(!T)return;B(T);try{let I=await A2({action:"clear",name:T});if(I?.ok)U(I.settings);j?.(`Cleared environment override for ${T}.`,"info")}catch(I){j?.(String(I?.message||I),"error")}finally{B(null)}},[U,j]),w=Z0(()=>{let z=String($||"").trim().toLowerCase(),T=Array.isArray(Z.variables)?Z.variables:[];if(!z)return T;return T.filter((I)=>{return`${I?.name||""} ${I?.value||""} ${I?.source||""}`.toLowerCase().includes(z)})},[Z.variables,$]),W=P((z,T)=>{q((I)=>({...I||{},[z]:T}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${D}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${K}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(z)=>L(z.target.value)}
                    />
                    <input
                        type="text"
                        value=${Q}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(z)=>V(z.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!K.trim()||N===K.trim()}
                        onClick=${()=>E(K,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${w.map((z)=>{let T=String(z?.name||""),I=Object.prototype.hasOwnProperty.call(Y,T)?Y[T]:z.value,J=I!==z.value,k=N===T;return F`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${I}
                                spellcheck="false"
                                onInput=${(A)=>W(T,A.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${z.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${z.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${k||!J} onClick=${()=>E(T,I)}>Save</button>
                                <button type="button" disabled=${k||!z.overridden} onClick=${()=>H(T)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${w.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var HY=J_(()=>{T0();S_()});var EY={};Y1(EY,{ProvidersSection:()=>yD});function wD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function yD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,q]=C({}),K=P((E,H)=>{q((w)=>({...w,[E]:H}))},[]),L=P(async(E)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(E),$?.(`Configuring ${E}…`,"info");try{let w=JSON.stringify({provider:E,method:"api_key",api_key:H}),W=await z1("default",`/login __step2 ${w}`,null,[]);if(W?.command?.status==="error"){$?.(W.command.message,"error");return}$?.(W?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(w){$?.(String(w.message||w),"error")}finally{G(null)}},[Y,$]),Q=P(async(E,H)=>{G(E),$?.(`Configuring ${E}…`,"info");try{let w={provider:E,method:"custom"};for(let T of H.customFields||[])w[T.key]=(Y[T.key]||"").trim();let W=JSON.stringify(w),z=await z1("default",`/login __step2 ${W}`,null,[]);if(z?.command?.status==="error"){$?.(z.command.message,"error");return}$?.(z?.command?.message||`${E} configured.`,"success"),X(null),q({})}catch(w){$?.(String(w.message||w),"error")}finally{G(null)}},[Y,$]),V=P(async(E)=>{G(E),$?.(`Starting OAuth for ${E}…`,"info");try{let H=JSON.stringify({provider:E}),W=(await z1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(W.includes("http")){let z=W.match(/(https?:\/\/[^\s)]+)/);if(z)window.open(z[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(W,"success")}else $?.(W||`OAuth flow started for ${E}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),N=P(async(E)=>{if(j)return;G(E),$?.(`Logging out ${E}…`,"info");try{await z1("default",`/logout ${E}`,null,[]),$?.(`Logged out ${E}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),B=_||[],U=(E)=>Z===E,D=(E)=>{X((H)=>H===E?null:E),q({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${B.map((E)=>F`
                    <div class=${`settings-provider-card${E.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!E.configured&&D(E.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${E.name}</strong>
                                <span class="settings-provider-id">${E.id}</span>
                                ${E.configured&&F`<span class="settings-tag settings-tag-skill">${wD(E.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${E.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${E.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${E.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${E.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),N(E.id)}}
                                    >${j===E.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===E.id} onClick=${(H)=>{H.stopPropagation(),D(E.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(E.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${E.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===E.id}
                                            onClick=${()=>V(E.id)}>
                                            ${j===E.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${E.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>K("apiKey",H.target.value)}
                                                placeholder=${E.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>L(E.id)}>
                                                ${j===E.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${E.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(E.customFields||[]).map((H)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(w)=>K(H.key,w.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===E.id}
                                                onClick=${()=>Q(E.id,E)}>
                                                ${j===E.id?"Configuring…":"Save configuration"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                    </div>
                `)}
            </div>
        </div>
    `}var DY=J_(()=>{T0();S_()});var WY={};Y1(WY,{ModelsSection:()=>PD});function ID(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function CD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=ID(j)?TD:xD,q=G&&G.length>1?G:["off","minimal","low","medium","high"],K=Math.max(0,q.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[q[K]]||q[K]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${q.length-1} step="1" value=${K} disabled=${X}
                    onInput=${(L)=>Z(q[parseInt(L.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${q.map((L,Q)=>F`<span class=${Q===K?"active":""} onClick=${()=>!X&&Z(L)}>${Y[L]||L}</span>`)}
                </div>
            </div>
        </div>
    `}function PD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[q,K]=C(!1),[L,Q]=C(["off"]),[V,N]=C(!1),B=P(async()=>{let I=await w4();if(j(I),I.thinking_level)Y(I.thinking_level);if(K(Boolean(I.supports_thinking)),Array.isArray(I.available_thinking_levels)&&I.available_thinking_levels.length>0)Q(I.available_thinking_levels);return I},[]);u(()=>{B().catch(()=>j({models:[],model_options:[]}))},[]);let U=P(async(I)=>{if(G)return;Z(!0);try{await z1("default",`/model ${I}`,null,[]),await B()}catch(J){console.error("Failed to switch model:",J)}finally{Z(!1)}},[G,B]),D=P(async(I)=>{if(V)return;N(!0),Y(I);try{let J=await z1("default",`/thinking ${I}`,null,[]);if(J?.command?.thinking_level)Y(J.command.thinking_level);K(J?.command?.supports_thinking!==!1),await B()}catch(J){console.error("Failed to set thinking:",J),await B().catch((k)=>{})}finally{N(!1)}},[V,B]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let E=$.model_options||[],H=$.current,W=E.find((I)=>I.label===H)?.provider||"",z=_.toLowerCase(),T=z?E.filter((I)=>I.label.toLowerCase().includes(z)||(I.provider||"").toLowerCase().includes(z)):E;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${T.map((I)=>F`
                            <tr class=${I.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${I.label===H} disabled=${G} onChange=${()=>U(I.label)} /></td>
                                <td>${I.name||I.label}</td><td>${I.provider}</td>
                                <td>${I.context_window?(I.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${I.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${T.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${CD}
                    thinkingLevel=${X}
                    supportsThinking=${q}
                    provider=${W}
                    availableLevels=${L}
                    onSetLevel=${D}
                    disabled=${V||G} />
            </div>
        </div>
    `}var TD,xD;var zY=J_(()=>{T0();S_();TD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},xD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var JY={};Y1(JY,{ThemeSection:()=>fD});function OY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function fD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[q,K]=C(""),[L,Q]=C(!1),V=g(""),N=g(null),B=g(!0);u(()=>{return B.current=!0,()=>{B.current=!1}},[]);let U=P((W)=>{let z=OY(W);Y(z.uiTheme),K(z.uiTint),V.current=JSON.stringify(z)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let D=P((W,z)=>{V5({theme:W,tint:z||null}),Y(W||"default"),K(z||"")},[]),E=Z0(()=>JSON.stringify(OY({uiTheme:X,uiTint:q})),[X,q]);u(()=>{if(E===V.current)return;if(N.current)clearTimeout(N.current);return N.current=setTimeout(async()=>{if(!B.current)return;Q(!0);try{let W=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:E}),z=await W.json().catch(()=>({}));if(!B.current)return;if(!W.ok||!z?.ok||!z?.settings){G?.(z?.error||"Failed to save appearance settings.","error");return}V.current=E,Z?.(z.settings),G?.("Appearance synced across clients.","success")}catch(W){if(!B.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",W),G?.("Failed to save appearance settings.","error")}finally{if(B.current)Q(!1)}},250),()=>{if(N.current)clearTimeout(N.current)}},[E,Z,G]);let H=$||[],w=_||[];return F`
        <div class="settings-section">
            ${L&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>D("default",q)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${q||"#1d9bf0"}
                        onInput=${(W)=>{let z=W.target.value;if(K(z),X==="default")V5({theme:"default",tint:z})}} />
                    ${q&&F`
                        <button class="settings-tint-clear" onClick=${()=>D("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${q||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((W)=>F`<th class="settings-swatch-header">${W.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${w.filter((W)=>W.name!=="default").map((W)=>F`
                        <tr class=${W.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>D(W.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${W.name===X} onChange=${()=>D(W.name,"")} /></td>
                            <td><strong>${W.label}</strong></td>
                            <td>${W.mode}</td>
                            ${H.map((z)=>{let T=W.colors?.[z];return F`<td class="settings-swatch-cell">
                                    ${T?F`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var AY=J_(()=>{T0();a5()});function kY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function W5(_){return typeof _==="string"&&_.trim().length>0}function t7(_,...$){let j=kY(_);if(!j)return!0;let G=$.map((Z)=>kY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function MY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function a$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:MY($.workspaceCommands),slashCommands:MY($.slashCommands)}}function wY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function RD(_){let $=Array.isArray(_?.commands)?_.commands:[],j=a$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>wY(j.workspaceCommands,Z.id)).filter((Z)=>t7(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function SD(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=W5(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>t7(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=W5(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=W5(Z?.session_name)?Z.session_name.trim():"",q=String(Z?.chat_jid||"").trim();return{key:`agent:${q}`,kind:"agent",title:`@${X}`,subtitle:Y||q,searchText:`@${X} ${Y} ${q}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:q}})}function gD(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=a$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=W5(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),wY(j.slashCommands,Y)}).filter((X)=>t7(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),q=W5(X?.description)?X.description.trim():"slash command",K=W5(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:q,searchText:`${Y} ${q} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:K||"Slash",actionHint:"Insert",commandName:Y}})}function yY(_){return[...SD({agents:_?.agents,query:_?.query}),...RD({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...gD({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var s$;var e7=J_(()=>{s$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var IY={};Y1(IY,{QuickActionsSection:()=>uD});function TY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function xY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function uD({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>s$.map((I)=>I.id)),[X,Y]=C([]),[q,K]=C([]),[L,Q]=C(!0),[V,N]=C(!1),B=P(async()=>{Q(!0);try{let[I,J]=await Promise.all([X6(),Z6("web:default").catch(()=>({commands:[]}))]),k=a$(I?.settings),A=Array.isArray(J?.commands)?J.commands:[];K(A),Z(Array.isArray(k.workspaceCommands)?k.workspaceCommands:s$.map((O)=>O.id)),Y(Array.isArray(k.slashCommands)?k.slashCommands:A.map((O)=>String(O?.name||"").trim()).filter(Boolean))}catch(I){$?.(String(I?.message||I),"error")}finally{Q(!1)}},[$]);u(()=>{B()},[B]);let U=Z0(()=>xY(G),[G]),D=Z0(()=>xY(X),[X]),E=Z0(()=>s$.filter((I)=>TY(_,I.label,I.description,...I.keywords||[])),[_]),H=Z0(()=>q.filter((I)=>TY(_,I?.name,I?.description,I?.source)),[q,_]),w=P((I)=>{Z((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((A)=>String(A||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return s$.map((A)=>A.id).filter((A)=>k.has(A))})},[]),W=P((I)=>{Y((J)=>{let k=new Set((Array.isArray(J)?J:[]).map((A)=>String(A||"").trim()).filter(Boolean));if(k.has(I))k.delete(I);else k.add(I);return q.map((A)=>String(A?.name||"").trim()).filter((A)=>A&&k.has(A))})},[q]),z=P(()=>{Z(s$.map((I)=>I.id)),Y(q.map((I)=>String(I?.name||"").trim()).filter(Boolean))},[q]),T=P(async()=>{if(V)return;N(!0),$?.("Saving quick actions…","info");try{let I=await Y7({workspaceCommands:G,slashCommands:X}),J=a$(I?.settings);j?.({quickActions:J}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:J}})),$?.("Quick Actions saved.","success")}catch(I){$?.(String(I?.message||I),"error")}finally{N(!1)}},[j,V,$,X,G]);if(L)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${z} disabled=${V}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${V}>
                    ${V?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${E.map((I)=>{let J=U?U.has(I.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${I.id}>
                            <input type="checkbox" checked=${J} onChange=${()=>w(I.id)} />
                            <div>
                                <div>${I.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I.description}</div>
                            </div>
                        </label>
                    `})}
                ${E.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((I)=>{let J=String(I?.name||"").trim(),k=D?D.has(J.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${J}>
                            <input type="checkbox" checked=${k} onChange=${()=>W(J)} />
                            <div>
                                <div><code>${J}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${I?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var CY=J_(()=>{T0();S_();e7()});var PY={};Y1(PY,{KeychainSection:()=>mD});function bD(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function mD({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[q,K]=C(!1),[L,Q]=C(""),[V,N]=C(""),[B,U]=C(""),[D,E]=C(""),[H,w]=C(""),[W,z]=C("secret"),[T,I]=C(!1),[J,k]=C({}),[A,O]=C(null),[M,x]=C(null),[f,S]=C(null),v=g(null),l=g(null),h=g(null),r=P(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(d){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{r()},[r]);let b=P(async()=>{let d=L.trim(),j0=V;if(!d||!j0)return;I(!0);try{let P0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,secret:j0,type:W,username:B.trim()||void 0,userNote:D,agentNote:H})})).json();if(P0?.ok)Q(""),N(""),U(""),E(""),w(""),z("secret"),K(!1),await r();else Y(P0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{I(!1)}},[L,V,B,D,H,W,r]),e=P(async(d)=>{try{let A0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d})})).json();if(A0?.ok)x(null),S((P0)=>P0?.name===d?null:P0),await r();else Y(A0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[r]),z0=P(async(d)=>{let j0=d?.name;if(!j0)return;let A0=J[j0]||{},P0=Object.prototype.hasOwnProperty.call(A0,"userNote")?A0.userNote:d.userNote||"",b0=Object.prototype.hasOwnProperty.call(A0,"agentNote")?A0.agentNote:d.agentNote||"";O(j0);try{let X_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:P0,agentNote:b0})})).json();if(X_?.ok)k((l0)=>{let __={...l0||{}};return delete __[j0],__}),await r();else Y(X_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{O(null)}},[J,r]),K0=P((d,j0,A0)=>{k((P0)=>({...P0||{},[d]:{...(P0||{})[d]||{},[j0]:A0}}))},[]),L0=P(async(d,j0,A0)=>{try{let b0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:d,master_password:j0||void 0,totp_code:A0||void 0})})).json();if(b0?.ok)S({name:d,phase:"revealed",secret:b0.secret,username:b0.username,masterPassword:j0});else if(b0?.needs_master_password)S((c0)=>({name:d,phase:"password",masterPassword:"",error:c0?.name===d&&c0?.masterPassword?b0.error:null})),requestAnimationFrame(()=>l.current?.focus());else if(b0?.needs_totp)S((c0)=>({name:d,phase:"totp",masterPassword:j0,totpCode:"",error:c0?.name===d&&c0?.phase==="totp"&&c0?.totpCode?b0.error:null})),requestAnimationFrame(()=>h.current?.focus());else S({name:d,phase:"error",error:b0?.error||"Failed to reveal."})}catch{S({name:d,phase:"error",error:"Failed to reveal."})}},[]),X0=P((d)=>{if(f?.name===d&&f?.phase==="revealed"){S(null);return}L0(d,null,null)},[f,L0]),B0=P((d)=>{let j0=f?.masterPassword||"";if(!j0)return;L0(d,j0,null)},[f,L0]),_0=P((d)=>{let j0=f?.totpCode||"";if(j0.length<6)return;L0(d,f?.masterPassword,j0)},[f,L0]),G0=P(async(d)=>{try{await navigator.clipboard.writeText(d)}catch{let j0=document.createElement("textarea");j0.value=d,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);u(()=>{if(q)requestAnimationFrame(()=>v.current?.focus())},[q]);let N0=_.toLowerCase(),W0=Z0(()=>{if(!N0)return $;return $.filter((d)=>d.name.toLowerCase().includes(N0)||(d.type||"").toLowerCase().includes(N0)||(d.envVar||"").toLowerCase().includes(N0)||(d.userNote||"").toLowerCase().includes(N0)||(d.agentNote||"").toLowerCase().includes(N0))},[$,N0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${W0.length} entr${W0.length===1?"y":"ies"}${N0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>K(!q)}>
                    ${q?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${q&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${L} onInput=${(d)=>Q(d.target.value)}
                            class="settings-keychain-input" />
                        <select value=${W} onChange=${(d)=>z(d.target.value)}
                            class="settings-keychain-select">
                            ${vD.map((d)=>F`<option value=${d}>${d}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${V} onInput=${(d)=>N(d.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${B} onInput=${(d)=>U(d.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${T||!L.trim()||!V}>
                            ${T?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${D} onInput=${(d)=>E(d.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(d)=>w(d.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                    </div>
                </div>
            `}

            <div class="settings-keychain-table-wrap">
                <table class="settings-table settings-keychain-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Env var</th>
                            <th>Updated</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        ${W0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${N0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${W0.map((d)=>{let j0=f?.name===d.name?f:null,A0=j0?.phase==="revealed",P0=j0?.phase==="password",b0=j0?.phase==="totp",c0=j0?.phase==="error",X_=J[d.name]||{},l0=Object.prototype.hasOwnProperty.call(X_,"userNote")?X_.userNote:d.userNote||"",__=Object.prototype.hasOwnProperty.call(X_,"agentNote")?X_.agentNote:d.agentNote||"",f0=l0!==(d.userNote||"")||__!==(d.agentNote||""),p0=A===d.name;return F`
                            <tr class="settings-keychain-row" key=${d.name}>
                                <td class="settings-keychain-name">${d.name}</td>
                                <td><span class="settings-keychain-type-badge">${d.type}</span></td>
                                <td class="settings-keychain-env">${d.envVar?F`<code>$${d.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${bD(d.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${A0?" active":""}`}
                                        onClick=${()=>X0(d.name)}
                                        title=${A0?"Hide secret":"Reveal secret"}>
                                        ${A0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${M===d.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>e(d.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>x(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>x(d.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${d.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${l0}
                                                onInput=${(R0)=>K0(d.name,"userNote",R0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${__}
                                                onInput=${(R0)=>K0(d.name,"agentNote",R0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!f0||p0} onClick=${()=>z0(d)}>
                                            ${p0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${P0&&F`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${l} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(R0)=>S((d0)=>({...d0,masterPassword:R0.target.value}))}
                                                onKeyDown=${(R0)=>{if(R0.key==="Enter")B0(d.name);if(R0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>B0(d.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${b0&&F`
                                <tr class="settings-keychain-prompt-row" key=${d.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${j0?.totpCode||""}
                                                onInput=${(R0)=>S((d0)=>({...d0,totpCode:R0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(R0)=>{if(R0.key==="Enter")_0(d.name);if(R0.key==="Escape")S(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>_0(d.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>S(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${A0&&F`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>G0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>G0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${c0&&F`
                                <tr class="settings-keychain-reveal-row" key=${d.name+"-error"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel" style="color: var(--error-color, #e55)">${j0.error}</div>
                                    </td>
                                </tr>
                            `}
                        `})}
                    </tbody>
                </table>
            </div>
        </div>
    `}var vD;var fY=J_(()=>{T0();vD=["secret","token","password","basic"]});var RY={};Y1(RY,{ToolsSection:()=>nD});function nD({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let N={};for(let B of Z)N[B.name]=!0;return N}),q=P((N)=>{Y((B)=>({...B,[N]:!B[N]}))},[]),K=j?.searchMatchMode||"or",L=P(async()=>{let N=K==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:N})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(B){console.warn("[settings/tools] Failed to save search match mode.",B)}},[K,G]),Q=$.toLowerCase(),V=Z0(()=>{if(!Q)return Z;return Z.map((N)=>{let B=N.tools.filter((U)=>U.name.toLowerCase().includes(Q)||N.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return B.length>0?{...N,tools:B}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${K==="and"} onChange=${L} />
                        <span class="settings-hint" style="margin:0">
                            ${K==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${V.map((N)=>{let B=X[N.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${B} onChange=${()=>q(N.name)} />
                            <span class="settings-toolset-icon">${cD[N.name]||pD}</span>
                            <strong>${N.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${N.description}</span>
                    </div>
                    ${B&&F`<div class="settings-tool-list">${N.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${hD[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${lD[U.name]||N.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${V.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var cD,lD,hD,pD;var SY=J_(()=>{T0();cD={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},lD={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},hD={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},pD=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var gY={};Y1(gY,{AddonsSection:()=>rD});function rD({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,q]=C(null),[K,L]=C(!1),[Q,V]=C({runtime:"",windowsNative:!1}),[N,B]=C([]),[U,D]=C([]);function E(){let A=new URLSearchParams;try{let M=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),x=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((S)=>S.trim()).filter(Boolean),f=localStorage.getItem("piclaw_addons_repo_url");if(M)A.append("catalog_url",M);for(let S of x)A.append("catalog_url",S);if(f)A.set("repo_url",f)}catch(M){}let O=A.toString();return O?`?${O}`:""}let H=P(async()=>{try{let[A,O]=await Promise.all([fetch(`/agent/addons${E()}`),fetch("/agent/settings-data")]),M=await A.json();if(M.error)throw Error(M.error);G(M.addons||[]),B(M.sources||[]),D(M.failed_sources||[]);let x=await O.json().catch(()=>({})),f=typeof x?.runtimePlatform==="string"?x.runtimePlatform:"";V({runtime:f,windowsNative:f==="win32"})}catch(A){G(null),_?.(String(A.message||A),"error")}finally{X(!1)}},[_]);u(()=>{H()},[]);let w=P(async(A)=>{if(Y)return;q({slug:A,action:"install"}),_?.(`Installing ${A}…`,"info");try{let M=await(await fetch(`/agent/addons/install${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:A})})).json();if(M.error){_?.(M.error,"error");return}L(!0);let x=[M.message,M.warning].filter(Boolean).join(" ");_?.(x||"Add-on installed.","success"),await H()}catch(O){_?.(String(O.message||O),"error")}finally{q(null)}},[Y,H,_]),W=P(async(A)=>{if(Y)return;q({slug:A,action:"remove"}),_?.(`Removing ${A}…`,"info");try{let M=await(await fetch(`/agent/addons/uninstall${E()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:A})})).json();if(M.error){_?.(M.error,"error");return}L(!0);let x=[M.message,M.warning].filter(Boolean).join(" ");_?.(x||"Add-on removed.","success"),await H()}catch(O){_?.(String(O.message||O),"error")}finally{q(null)}},[Y,H,_]),z=P(async()=>{if(Y)return;q({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let O=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(O.error){_?.(O.error,"error"),q(null);return}_?.(O.message||"Restarting piclaw…","success"),L(!1),(async(x=30,f=2000)=>{for(let S=0;S<x;S++){await new Promise((v)=>setTimeout(v,f));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),q(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}q(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(A){_?.(String(A.message||A),"error"),q(null)}},[Y,_,H]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let T=$.toLowerCase(),I=T?j.filter((A)=>A.slug.toLowerCase().includes(T)||(A.description||"").toLowerCase().includes(T)||(A.tags||[]).some((O)=>O.toLowerCase().includes(T))):j,J=Y?.slug||null,k=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${N.length<=1?F`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:F`${N.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&F`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((A)=>F` <code style="font-size:0.82em;word-break:break-all">${A}</code>`)}
                        </div>
                    `}
                    ${N.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${N.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${N.map((A)=>F`<li style="word-break:break-all"><code>${A}</code></li>`)}
                            </ul>
                        </details>
                    `}
                    ${Q.windowsNative&&F`
                        <div class="settings-addon-error" role="alert">
                            Native Windows add-on installs are higher risk: Bun package installs, symlink cleanup, locked files, and restart timing can all be less predictable than in Linux/WSL. Prefer WSL or a container when possible.
                        </div>
                    `}
                </div>
            </div>
            ${Y&&F`
                <div class="settings-addon-panel-overlay" role="status" aria-live="polite" aria-label=${k}>
                    <div class="settings-addon-panel-overlay-card">
                        <div class="settings-spinner"></div>
                        <span>${k}</span>
                    </div>
                </div>
            `}
            <div class="settings-addon-list">
                ${I.map((A)=>{let O=(A.skills||[]).length>0,M=A.type==="extension",x=O&&M?"extension + skill":O?"skill":"extension",f=O&&!M?"settings-tag-skill":"",S=typeof A.homepage==="string"&&A.homepage.trim()?A.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${A.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${S?F`<a class="settings-addon-name-link" href=${S} target="_blank" rel="noopener noreferrer">${A.slug}</a>`:F`<strong>${A.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${f}`}>${x}</span>
                            <span class="settings-addon-version">${A.installed?A.installedVersion||"?":A.version||""}</span>
                            ${A.installKind&&F`<span class="settings-tag">${A.installKind}</span>`}
                            ${A.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${A.version}</span>`}
                            <div class="settings-addon-actions">
                                ${A.installed?F`
                                    ${A.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>w(A.slug)}>${J===A.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>W(A.slug)}>${J===A.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>w(A.slug)}>${J===A.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${A.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(A.tags||[]).map((v)=>F`<span class="settings-tag">${v}</span>`)}${(A.skills||[]).map((v)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${I.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${K&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${z}>Restart Now</button>
                </div>
            `}
        </div>
    `}var uY=J_(()=>{T0()});var eD={};function _9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function l2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function dD(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function iD(_,$){try{localStorage.setItem(_,$)}catch(j){}}function oD(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function sD(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function aD(){let[_,$]=C(()=>_9("piclaw_vim_mode",!1)),[j,G]=C(()=>_9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>_9("piclaw_md_live_preview",!0)),[Y,q]=C(()=>oD("piclaw_editor_font_size",13,10,24)),[K,L]=C(()=>dD("piclaw_editor_font_family","")),Q=P((V,N,B)=>{let U=!N;B(U),l2(V,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let V=!_;$(V),l2("piclaw_vim_mode",V)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let V=!j;G(V),l2("piclaw_show_whitespace",V)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let V=!Z;X(V),l2("piclaw_md_live_preview",V)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${b_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(V)=>{q(V),sD("piclaw_editor_font_size",V)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${K}
                    onInput=${(V)=>{let N=V.target.value;L(N),iD("piclaw_editor_font_family",N)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var tD;var bY=J_(()=>{T0();H5();I4();tD=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;d$({id:"editor",label:"Editor",icon:tD,component:aD,order:150})});var ZW={};function vY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function mY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function _W(_,$,j,G){try{return z$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return z$($,{fallback:$,min:j,max:G})}}function $W(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function jW(){let[_,$]=C(()=>vY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>_W("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>vY("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),mY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${b_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),$W("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),mY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var GW;var cY=J_(()=>{T0();H5();I4();GW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;d$({id:"mindmap",label:"Mind Map",icon:GW,component:jW,order:170})});var qW={};function $9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function j9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function G9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function Z9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function XW(){let[_,$]=C(()=>$9("piclaw_dev_mode",!1)),[j,G]=C(()=>G9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>G9("piclaw_addons_catalog_urls","")),[Y,q]=C(()=>G9("piclaw_addons_repo_url","")),[K,L]=C(()=>$9("piclaw_debug_sse",!1)),[Q,V]=C(()=>$9("piclaw_debug_tool_calls",!1)),N=P(()=>{let B=!_;$(B),j9("piclaw_dev_mode",B)},[_]);return F`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${N} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&F`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(B)=>{let U=B.target.value;G(U),Z9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(B)=>{let U=B.target.value;X(U),Z9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(B)=>{let U=B.target.value;q(U),Z9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${K}
                        onChange=${()=>{let B=!K;L(B),j9("piclaw_debug_sse",B)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let B=!Q;V(B),j9("piclaw_debug_tool_calls",B)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var YW;var lY=J_(()=>{T0();H5();YW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;d$({id:"developer",label:"Developer",icon:YW,component:XW,order:900})});var dY={};Y1(dY,{openSettingsDialog:()=>wW,SettingsDialogContent:()=>rY,SettingsDialog:()=>MW});function W6(_){D6.push({ts:performance.now(),label:_})}function LW(){if(!D6.length)return;let _=D6[0].ts,$=D6.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}D6.length=0}function QW(_){let $=n2.get(_);if($)return Promise.resolve($);let j=h2.get(_);if(j)return j;let G=KW[_]().then((Z)=>{return n2.set(_,Z),h2.delete(_),Z}).catch((Z)=>{throw h2.delete(_),Z});return h2.set(_,G),G}function p2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function rY({onClose:_}){W6("SettingsDialogContent-render-start");let[$,j]=C(()=>v7()||"general"),[G,Z]=C(hY),[X,Y]=C(null),[q,K]=C(""),[,L]=C(0),[Q,V]=C(()=>Object.fromEntries(n2.entries())),[N,B]=C(null),[U,D]=C({compact:!1,narrow:!1}),E=g(null),H=g(null);u(()=>{W6("SettingsDialogContent-mounted"),LW()},[]),u(()=>{let O=(M)=>{if(M.key==="Escape")_()};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[_]),u(()=>{let O=(M)=>{let x=typeof M?.detail?.section==="string"?M.detail.section.trim():"";if(x)j(x),K("")};return window.addEventListener("piclaw:open-settings",O),()=>window.removeEventListener("piclaw:open-settings",O)},[]),u(()=>{let O=()=>L((M)=>M+1);return window.addEventListener("piclaw:settings-panes-changed",O),()=>window.removeEventListener("piclaw:settings-panes-changed",O)},[]),u(()=>{fetch("/agent/settings-data").then((O)=>O.json()).then((O)=>{hY=O,Z(O)}).catch(()=>Z({}))},[]),u(()=>{let O=H.current;if(!O)return;let M=()=>{let x=O.clientWidth||0;D((f)=>{let S={compact:x>0&&x<=860,narrow:x>0&&x<=720};return f.compact===S.compact&&f.narrow===S.narrow?f:S})};if(M(),typeof ResizeObserver==="function"){let x=new ResizeObserver(()=>M());return x.observe(O),()=>x.disconnect()}return window.addEventListener("resize",M),()=>window.removeEventListener("resize",M)},[]);let w=mX(),W=[...nY,...w.map((O)=>({id:O.id,label:O.label,icon:O.icon,searchable:O.searchable||!1,placeholder:O.searchPlaceholder,order:O.order??500,isExtension:!0,component:O.component}))].sort((O,M)=>(O.order??500)-(M.order??500)),z=W.find((O)=>O.id===$)||nY.find((O)=>O.id===$);u(()=>{if(z?.searchable)requestAnimationFrame(()=>E.current?.focus())},[$]),u(()=>{if(z?.isExtension){B(null);return}let O=!1;if(Q[$]){B(null);return}return B($),QW($).then((M)=>{if(O)return;V((x)=>x?.[$]?x:{...x||{},[$]:M})}).catch((M)=>{if(O)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,M)}).finally(()=>{if(!O)B((M)=>M===$?null:M)}),()=>{O=!0}},[$,z?.isExtension,Q]);let T=P((O,M="info")=>{Y(O?{text:O,type:M}:null)},[]),I=P((O)=>{j(O),K("");let M=VW[O];if(M&&!pY.has(O))pY.add(O),M().then(()=>L((x)=>x+1)).catch((x)=>{})},[]),J=P((O)=>{Z((M)=>({...M||{},...O||{}}))},[]),k=()=>{if(z?.isExtension){if(!z.component)return p2("Loading pane…");let M=z.component;return F`<${M} filter=${q} />`}let O=Q[$];if(!O||N===$)return p2(`Loading ${z?.label||"settings"}…`);switch($){case"general":return F`<${O} settingsData=${G} setStatus=${T} mergeSettingsData=${J} />`;case"sessions":return F`<${O} settingsData=${G} setStatus=${T} mergeSettingsData=${J} />`;case"compaction":return F`<${O} settingsData=${G} setStatus=${T} mergeSettingsData=${J} />`;case"keyboard":return F`<${O} filter=${q} setStatus=${T} />`;case"workspace":return F`<${O} settingsData=${G} setStatus=${T} mergeSettingsData=${J} />`;case"environment":return F`<${O} settingsData=${G} filter=${q} setStatus=${T} mergeSettingsData=${J} />`;case"providers":return F`<${O} providers=${G?.providers} setStatus=${T} />`;case"models":return F`<${O} filter=${q} />`;case"theme":return F`<${O} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${T} mergeSettingsData=${J} />`;case"quick-actions":return F`<${O} filter=${q} setStatus=${T} mergeSettingsData=${J} />`;case"keychain":return F`<${O} filter=${q} />`;case"tools":return F`<${O} toolsets=${G?.toolsets} filter=${q} settingsData=${G} mergeSettingsData=${J} />`;case"addons":return F`<${O} setStatus=${T} filter=${q} />`;default:return p2("Loading settings…")}},A=!z;return W6("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(O)=>{if(O.target===O.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${z?.searchable&&F`
                        <input ref=${E} type="text" class="settings-header-filter"
                            placeholder=${z.placeholder||"Filter…"}
                            value=${q} onInput=${(O)=>K(O.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${W.map((O,M)=>{let x=M>0&&!W[M-1].isExtension,f=O.isExtension&&x;return F`
                                ${f&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${O.id===$?"active":""}`} onClick=${()=>I(O.id)}>
                                    <span class="settings-nav-icon">${O.icon}</span>
                                    <span class="settings-nav-label">${O.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${A?p2("Loading settings…"):k()}
                    </main>
                </div>
                ${X&&F`
                    <div class=${`settings-status-bar settings-status-bar-${X.type}`}>
                        ${X.type==="info"&&F`<span class="settings-spinner"></span>`}
                        <span>${X.text}</span>
                        ${X.type!=="info"&&F`<button class="settings-status-dismiss" onClick=${()=>Y(null)}>✕</button>`}
                    </div>
                `}
            </div>
        </div>
    `}function MW(){let[_,$]=C(!1);if(u(()=>{let j=(Z)=>{let X=U5(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=P2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${r$} className="settings-portal"><${rY} onClose=${()=>$(!1)} /><//>`}function wW(_={}){o1(_)}var D6,hY=null,n2,h2,KW,VW,pY,BW,NW,FW,UW,HW,EW,DW,WW,zW,OW,JW,AW,kW,nY;var iY=J_(()=>{T0();f2();H5();sX();D6=[];W6("module-eval-start");W6("imports-done");n2=new Map,h2=new Map;n2.set("general",h7);KW={general:()=>Promise.resolve(h7),sessions:()=>Promise.resolve().then(() => (eX(),tX)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => ($Y(),_Y)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (LY(),qY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (FY(),NY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (HY(),UY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (DY(),EY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (zY(),WY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (AY(),JY)).then((_)=>_.ThemeSection),"quick-actions":()=>Promise.resolve().then(() => (CY(),IY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (fY(),PY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (SY(),RY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (uY(),gY)).then((_)=>_.AddonsSection)},VW={"editor-settings":()=>Promise.resolve().then(() => (bY(),eD)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (cY(),ZW)).then(()=>{}),developer:()=>Promise.resolve().then(() => (lY(),qW)).then(()=>{})},pY=new Set;BW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,NW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,FW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,UW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,HW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,EW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,DW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,WW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,zW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,OW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,JW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,AW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,kW=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,nY=[{id:"general",label:"General",icon:BW,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:NW,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:FW,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:EW,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:UW,searchable:!1,order:15},{id:"environment",label:"Environment",icon:HW,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:DW,searchable:!1,order:20},{id:"models",label:"Models",icon:WW,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:zW,searchable:!1,order:40},{id:"quick-actions",label:"Quick Actions",icon:JW,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:AW,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:OW,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:kW,searchable:!0,placeholder:"Filter add-ons…",order:90}]});T0();class VG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var q_=new VG;var _2=null,N3=null;function BF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function QG(){if(N3)return Promise.resolve(N3);if(!_2)_2=import(BF()).then((_)=>{return N3=_,_}).catch((_)=>{throw _2=null,_});return _2}class BG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await QG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var F3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new BG(_,$)}};function U3(){QG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function NG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function $2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var FG="piclaw:editor-popout:",NF=300000;function UG(_){try{return _?.localStorage??null}catch{return null}}function FF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function HG(_){return typeof _==="string"?_.trim():""}function EG(_){return(typeof _==="string"?_.trim():"")||null}function DG(_){return typeof _==="string"?_:void 0}function WG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function zG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function e4(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function UF(_,$=globalThis,j=Date.now()){let G=UG($),Z=HG(_?.path);if(!G||!Z)return null;let X={path:Z,content:DG(_?.content),mtime:WG(_?.mtime),paneOverrideId:EG(_?.paneOverrideId),viewState:zG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let q=FF(j);try{return G.setItem(`${FG}${q}`,JSON.stringify(X)),q}catch{return null}}function H3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=UG($);if(!G||!Z)return null;let X=`${FG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;$2(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+NF<j)return null;let L=HG(q?.path);if(!L)return null;return{path:L,content:DG(q?.content),mtime:WG(q?.mtime),paneOverrideId:EG(q?.paneOverrideId),viewState:zG(q?.viewState),capturedAt:K}}catch{return null}}function j2(_,$=globalThis,j=Date.now()){let G=UF(_,$,j);return G?{editor_popout:G}:null}function y1(_){try{return _(),!0}catch($){return!1}}function OG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:q,resizeObserver:K}=_;y1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),y1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),y1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),y1(()=>{q?.disconnect?.()}),y1(()=>{K?.disconnect?.()})}function JG(_){_.syncHostLayout(),y1(()=>{_.terminal?.renderer?.remeasureFont?.()}),y1(()=>{_.fitAddon?.fit?.()}),y1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function AG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)y1(()=>{j($)});return y1(()=>{G?.close?.()}),y1(()=>{Z?.dispose?.()}),y1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function h1(_){try{return _(),!0}catch($){return!1}}function kG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:q}=_;if(h1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let K=j?.querySelector?.(".terminal-live-host");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground;let L=j?.querySelector?.("canvas");if(L&&typeof L==="object"&&"style"in L)L.style.backgroundColor=Z.background,L.style.color=Z.foreground}),h1(()=>{if(G?.options)G.options.theme=Z}),X)h1(()=>{G?.reset?.()});h1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),h1(()=>{G?.loadFonts?.()}),h1(()=>{G?.renderer?.remeasureFont?.()}),h1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),h1(()=>{q?.()}),h1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),h1(()=>{G?.refresh?.()})}var HF="/static/js/vendor/ghostty-web.js",EF="/static/js/vendor/ghostty-vt.wasm",$5="piclaw://terminal",DF='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',WF='400 13px "FiraCode Nerd Font Mono"',zF='700 13px "FiraCode Nerd Font Mono"',IG="x-piclaw-terminal-client",MG="piclaw_terminal_client",OF={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},JF={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},G2=null,E3=null;function AF(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function kF(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(EF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!AF(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function MF(){let $=await import(new URL(HF,window.location.origin).href);if(!G2)G2=kF(()=>Promise.resolve($.init?.())).catch((j)=>{throw G2=null,j});return await G2,$}async function wF(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!E3)E3=Promise.allSettled([document.fonts.load(WF),document.fonts.load(zF),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await E3}function wG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function D3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(MG)||"").trim():"";if(j)return j;let G=wG(_);return $?.setItem?.(MG,G),G}catch($){return wG(_)}}async function yF(_=D3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[IG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function TF(_=D3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[IG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function xF(_,$=null,j=D3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function IF(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function N4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function _5(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function yG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function h5(_,$){let j=yG(_),G=yG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function CG(_){let $=_5(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return h5($,j)>=h5($,G)?"#ffffff":"#000000"}function Z2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function TG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function j1(_,$,j=4.5){let G=_5(_),Z=_5($);if(!G||!Z)return $;if(h5(G,Z)>=j)return Z2(Z);let X=_5(CG(_));if(!X)return Z2(Z);let Y=X,q=1,K=0,L=1;for(let N=0;N<14;N+=1){let B=(K+L)/2,U=TG(Z,X,B);if(h5(G,U)>=j)Y=U,q=B,L=B;else K=B}let Q=Z2(Y),V=_5(Q);while(V&&h5(G,V)<j&&q<1)q=Math.min(1,q+0.01),Q=Z2(TG(Z,X,q)),V=_5(Q);return Q}function CF(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function xG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=IF(_,$),G=j?JF:OF,Z=N4("--bg-primary",j?"#000000":"#ffffff",$),X=N4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=j1(Z,X||CG(Z),7),q=N4("--accent-color","#1d9bf0",$),K=N4("--danger-color",j?"#ff7b72":"#cf222e",$),L=N4("--success-color",j?"#7ee787":"#1a7f37",$),Q=N4("--bg-hover",j?"#1d1f23":"#e8ebed",$),V=N4("--accent-soft-strong",CF(q,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:j1(Z,q,3),cursorAccent:Z,selectionBackground:V,selectionForeground:Y,black:j1(Z,Q,3),red:j1(Z,K,4.5),green:j1(Z,L,4.5),yellow:j1(Z,G.yellow,4.5),blue:j1(Z,q,4.5),magenta:j1(Z,G.magenta,4.5),cyan:j1(Z,G.cyan,4.5),white:Y,brightBlack:j1(Z,G.brightBlack,3),brightRed:j1(Z,G.brightRed,4.5),brightGreen:j1(Z,G.brightGreen,4.5),brightYellow:j1(Z,G.brightYellow,4.5),brightBlue:j1(Z,G.brightBlue,4.5),brightMagenta:j1(Z,G.brightMagenta,4.5),brightCyan:j1(Z,G.brightCyan,4.5),brightWhite:Y}}class W3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=e4("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await MF();if(await wF(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:DF,fontSize:13,theme:xG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);await j.open($),$.__terminal=j,this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=xG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;kG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=TF().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await yF();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(xF($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){OG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){JG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=AG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var z3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new W3(_,$)}},O3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===$5?1e4:!1},mount(_,$){return new W3(_,$)}};function f1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function X2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function PG(_,$={}){if(f1($))return null;if(X2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:PF(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function J3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function A3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let q=_.document.createElement("p");if(q.setAttribute("style","margin: 0; line-height: 1.5;"),q.textContent=G,X.appendChild(Y),X.appendChild(q),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function k3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function M3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function T1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function w3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function fG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,q]of Object.entries(X)){let K=String(Y||"").trim();if(!K)continue;if(q===null||q===void 0||q==="")G.searchParams.delete(K);else G.searchParams.set(K,String(q))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function PF(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function fF(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function RG(_,$={}){if(f1($))return null;if(X2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:fF(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function F4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function RF(_){try{return JSON.parse(_)}catch{return null}}function SF(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function gF(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function SG(_){try{return _?.close?.(),!0}catch($){return!1}}class y3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;SG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=gF($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||RF;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,SG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=SF($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var p5=()=>{throw Error("Operation requires compiling with --exportRuntime")},uF=typeof BigUint64Array<"u",n5=Symbol();var bF=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function gG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return bF.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function uG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return gG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,q,K){let L=$.memory||G.memory;throw Error(`abort: ${j(L,X)} at ${j(L,Y)}:${q}:${K}`)},G.trace=G.trace||function(X,Y,...q){let K=$.memory||G.memory;console.log(`trace: ${j(K,X)}${Y?" ":""}${q.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function bG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||p5,Y=j.__pin||p5,q=j.__unpin||p5,K=j.__collect||p5,L=j.__rtti_base,Q=L?(O)=>O[L>>>2]:p5;_.__new=X,_.__pin=Y,_.__unpin=q,_.__collect=K;function V(O){let M=new Uint32Array(G.buffer);if((O>>>=0)>=Q(M))throw Error(`invalid id: ${O}`);return M[(L+4>>>2)+O]}function N(O){let M=V(O);if(!(M&7))throw Error(`not an array: ${O}, flags=${M}`);return M}function B(O){return 31-Math.clz32(O>>>6&31)}function U(O){if(O==null)return 0;let M=O.length,x=X(M<<1,2),f=new Uint16Array(G.buffer);for(let S=0,v=x>>>1;S<M;++S)f[v+S]=O.charCodeAt(S);return x}_.__newString=U;function D(O){if(O==null)return 0;let M=new Uint8Array(O),x=X(M.length,1);return new Uint8Array(G.buffer).set(M,x),x}_.__newArrayBuffer=D;function E(O){if(!O)return null;let M=G.buffer;if(new Uint32Array(M)[O+-8>>>2]!==2)throw Error(`not a string: ${O}`);return gG(M,O)}_.__getString=E;function H(O,M,x){let f=G.buffer;if(x)switch(O){case 2:return new Float32Array(f);case 3:return new Float64Array(f)}else switch(O){case 0:return new(M?Int8Array:Uint8Array)(f);case 1:return new(M?Int16Array:Uint16Array)(f);case 2:return new(M?Int32Array:Uint32Array)(f);case 3:return new(M?BigInt64Array:BigUint64Array)(f)}throw Error(`unsupported align: ${O}`)}function w(O,M=0){let x=M,f=N(O),S=B(f),v=typeof x!=="number",l=v?x.length:x,h=X(l<<S,f&4?O:1),r;if(f&4)r=h;else{Y(h);let b=X(f&2?16:12,O);q(h);let e=new Uint32Array(G.buffer);if(e[b+0>>>2]=h,e[b+4>>>2]=h,e[b+8>>>2]=l<<S,f&2)e[b+12>>>2]=l;r=b}if(v){let b=H(S,f&2048,f&4096),e=h>>>S;if(f&16384)for(let z0=0;z0<l;++z0)b[e+z0]=x[z0];else b.set(x,e)}return r}_.__newArray=w;function W(O){let M=new Uint32Array(G.buffer),x=M[O+-8>>>2],f=N(x),S=B(f),v=f&4?O:M[O+4>>>2],l=f&2?M[O+12>>>2]:M[v+-4>>>2]>>>S;return H(S,f&2048,f&4096).subarray(v>>>=S,v+l)}_.__getArrayView=W;function z(O){let M=W(O),x=M.length,f=Array(x);for(let S=0;S<x;S++)f[S]=M[S];return f}_.__getArray=z;function T(O){let M=G.buffer,x=new Uint32Array(M)[O+-4>>>2];return M.slice(O,O+x)}_.__getArrayBuffer=T;function I(O){if(!Z)throw Error("Operation requires compiling with --exportTable");let M=new Uint32Array(G.buffer)[O>>>2];return Z.get(M)}_.__getFunction=I;function J(O,M,x){return new O(k(O,M,x))}function k(O,M,x){let f=G.buffer,S=new Uint32Array(f);return new O(f,S[x+4>>>2],S[x+8>>>2]>>>M)}function A(O,M,x){_[`__get${M}`]=J.bind(null,O,x),_[`__get${M}View`]=k.bind(null,O,x)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((O)=>{A(O,O.name,31-Math.clz32(O.BYTES_PER_ELEMENT))}),uF)[BigUint64Array,BigInt64Array].forEach((O)=>{A(O,O.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,mF(j,_)}function vG(_){return typeof Response<"u"&&_ instanceof Response}function vF(_){return _ instanceof WebAssembly.Module}async function T3(_,$={}){if(vG(_=await _))return Y2(_,$);let j=vF(_)?_:await WebAssembly.compile(_),G=uG($),Z=await WebAssembly.instantiate(j,$),X=bG(G,Z);return{module:j,instance:Z,exports:X}}async function Y2(_,$={}){if(!WebAssembly.instantiateStreaming)return T3(vG(_=await _)?_.arrayBuffer():_,$);let j=uG($),G=await WebAssembly.instantiateStreaming(_,$),Z=bG(j,G.instance);return{...G,exports:Z}}function mF(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let L=X.shift();if(!Object.hasOwn(Y,L))Y[L]={};Y=Y[L]}let q=X[0],K=q.indexOf("#");if(K>=0){let L=q.substring(0,K),Q=Y[L];if(typeof Q>"u"||!Q.prototype){let V=function(...N){return V.wrap(V.prototype.constructor(0,...N))};if(V.prototype={valueOf(){return this[n5]}},V.wrap=function(N){return Object.create(V.prototype,{[n5]:{value:N,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((N)=>Object.defineProperty(V,N,Object.getOwnPropertyDescriptor(Q,N)));Y[L]=V}if(q=q.substring(K+1),Y=Y[L].prototype,/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4))){let V=_[G.replace("set:","get:")],N=_[G.replace("get:","set:")];Object.defineProperty(Y,q,{get(){return V(this[n5])},set(B){N(this[n5],B)},enumerable:!0})}}else if(q==="constructor")(Y[q]=function(...V){return j(V.length),Z(...V)}).original=Z;else(Y[q]=function(...V){return j(V.length),Z(this[n5],...V)}).original=Z}else if(/^(get|set):/.test(q)){if(!Object.hasOwn(Y,q=q.substring(4)))Object.defineProperty(Y,q,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[q]=(...L)=>{return j(L.length),Z(...L)}).original=Z;else Y[q]=Z}return $}function x3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var lF="/static/js/vendor/remote-display-decoder.wasm",q2=null;function mG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function cG(){if(q2)return q2;return q2=(async()=>{try{let G=function(Z,X,Y,q,K,L,Q){let V=mG(X),N=j.__pin(j.__newArrayBuffer(V));try{return j[Z](N,Y,q,K,L,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(N),x3(j)}},_=await fetch(lF,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof Y2==="function"?await Y2(_,{}):await T3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,q,K,L){return G("processRawRect",Z,X,Y,q,K,L)},processCopyRect(Z,X,Y,q,K,L){return j.processCopyRect(Z,X,Y,q,K,L)},processRreRect(Z,X,Y,q,K,L){return G("processRreRect",Z,X,Y,q,K,L)},processHextileRect(Z,X,Y,q,K,L){return G("processHextileRect",Z,X,Y,q,K,L)},processZrleTileData(Z,X,Y,q,K,L){return G("processZrleTileData",Z,X,Y,q,K,L)},decodeRawRectToRgba(Z,X,Y,q){let K=mG(Z),L=j.__pin(j.__newArrayBuffer(K));try{let Q=j.__pin(j.decodeRawRectToRgba(L,X,Y,q.bitsPerPixel,q.bigEndian?1:0,q.trueColor?1:0,q.redMax,q.greenMax,q.blueMax,q.redShift,q.greenShift,q.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(L),x3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),q2}function j5(_,$,j){return Math.max($,Math.min(j,_))}function L2(_,$,j){let G=new Uint8Array(6),Z=j5(Math.floor(Number($||0)),0,65535),X=j5(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=j5(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function m$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function C3(_){let $=m$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return m$(0);let G=Number(_?.buttons||0);if(G&1)return m$(0);if(G&4)return m$(1);if(G&2)return m$(2);return 0}function U4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if(($==="pointerleave"||$==="pointerout")&&$!=="pointerdown")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function lG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function hF(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function P3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return hF(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function hG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!P3(_)}function pG(_){return String(_||"").toLowerCase()!=="mouse"}function f3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),q=Math.max(1,Number(j?.width||0)),K=Math.max(1,Number(j?.height||0)),L=(Number(_||0)-Number(j?.left||0))/q,Q=(Number($||0)-Number(j?.top||0))/K;return{x:j5(Math.floor(L*X),0,Math.max(0,X-1)),y:j5(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function nG(_,$,j,G=0){let Z=Number(_)<0?8:16,X=j5(Number(G||0)|Z,0,255);return[L2(X,$,j),L2(Number(G||0),$,j)]}function rG(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function dG(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function H4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function iG(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),q=Math.max(1,Math.floor(Number(G||0))),K=Math.min(Z/Y,X/q);if(!Number.isFinite(K)||K<=0)return 1;return Math.max(0.01,K)}var I3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)I3[`F${_}`]=65470+(_-1);function R3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(I3,X))return I3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,D1=Uint16Array,h3=Int32Array,K2=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),V2=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),v3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),tG=function(_,$){var j=new D1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new h3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},eG=tG(K2,2),_Z=eG.b,m3=eG.r;_Z[28]=258,m3[258]=28;var $Z=tG(V2,0),pF=$Z.b,oG=$Z.r,c3=new D1(32768);for(N_=0;N_<32768;++N_)n1=(N_&43690)>>1|(N_&21845)<<1,n1=(n1&52428)>>2|(n1&13107)<<2,n1=(n1&61680)>>4|(n1&3855)<<4,c3[N_]=((n1&65280)>>8|(n1&255)<<8)>>1;var n1,N_,r1=function(_,$,j){var G=_.length,Z=0,X=new D1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new D1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var q;if(j){q=new D1(1<<$);var K=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var L=Z<<4|_[Z],Q=$-_[Z],V=Y[_[Z]-1]++<<Q;for(var N=V|(1<<Q)-1;V<=N;++V)q[c3[V]>>K]=L}}else{q=new D1(G);for(Z=0;Z<G;++Z)if(_[Z])q[Z]=c3[Y[_[Z]-1]++]>>15-_[Z]}return q},c$=new o_(288);for(N_=0;N_<144;++N_)c$[N_]=8;var N_;for(N_=144;N_<256;++N_)c$[N_]=9;var N_;for(N_=256;N_<280;++N_)c$[N_]=7;var N_;for(N_=280;N_<288;++N_)c$[N_]=8;var N_,o5=new o_(32);for(N_=0;N_<32;++N_)o5[N_]=5;var N_,nF=r1(c$,9,0),rF=r1(c$,9,1),dF=r1(o5,5,0),iF=r1(o5,5,1),S3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},R1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},g3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},p3=function(_){return(_+7)/8|0},i5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var oF=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B1=function(_,$,j){var G=Error($||oF[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,B1);if(!j)throw G;return G},sF=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,q=Y||$.i!=2,K=$.i;if(Y)j=new o_(Z*3);var L=function(j0){var A0=j.length;if(j0>A0){var P0=new o_(Math.max(A0*2,j0));P0.set(j),j=P0}},Q=$.f||0,V=$.p||0,N=$.b||0,B=$.l,U=$.d,D=$.m,E=$.n,H=Z*8;do{if(!B){Q=R1(_,V,1);var w=R1(_,V+1,3);if(V+=3,!w){var W=p3(V)+4,z=_[W-4]|_[W-3]<<8,T=W+z;if(T>Z){if(K)B1(0);break}if(q)L(N+z);j.set(_.subarray(W,T),N),$.b=N+=z,$.p=V=T*8,$.f=Q;continue}else if(w==1)B=rF,U=iF,D=9,E=5;else if(w==2){var I=R1(_,V,31)+257,J=R1(_,V+10,15)+4,k=I+R1(_,V+5,31)+1;V+=14;var A=new o_(k),O=new o_(19);for(var M=0;M<J;++M)O[v3[M]]=R1(_,V+M*3,7);V+=J*3;var x=S3(O),f=(1<<x)-1,S=r1(O,x,1);for(var M=0;M<k;){var v=S[R1(_,V,f)];V+=v&15;var W=v>>4;if(W<16)A[M++]=W;else{var l=0,h=0;if(W==16)h=3+R1(_,V,3),V+=2,l=A[M-1];else if(W==17)h=3+R1(_,V,7),V+=3;else if(W==18)h=11+R1(_,V,127),V+=7;while(h--)A[M++]=l}}var r=A.subarray(0,I),b=A.subarray(I);D=S3(r),E=S3(b),B=r1(r,D,1),U=r1(b,E,1)}else B1(1);if(V>H){if(K)B1(0);break}}if(q)L(N+131072);var e=(1<<D)-1,z0=(1<<E)-1,K0=V;for(;;K0=V){var l=B[g3(_,V)&e],L0=l>>4;if(V+=l&15,V>H){if(K)B1(0);break}if(!l)B1(2);if(L0<256)j[N++]=L0;else if(L0==256){K0=V,B=null;break}else{var X0=L0-254;if(L0>264){var M=L0-257,B0=K2[M];X0=R1(_,V,(1<<B0)-1)+_Z[M],V+=B0}var _0=U[g3(_,V)&z0],G0=_0>>4;if(!_0)B1(3);V+=_0&15;var b=pF[G0];if(G0>3){var B0=V2[G0];b+=g3(_,V)&(1<<B0)-1,V+=B0}if(V>H){if(K)B1(0);break}if(q)L(N+131072);var N0=N+X0;if(N<b){var W0=X-b,d=Math.min(b,N0);if(W0+N<0)B1(3);for(;N<d;++N)j[N]=G[W0+N]}for(;N<N0;++N)j[N]=j[N-b]}}if($.l=B,$.p=K0,$.b=N,$.f=Q,B)Q=1,$.m=D,$.d=U,$.n=E}while(!Q);return N!=j.length&&Y?i5(j,0,N):j.subarray(0,N)},B$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},r5=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},u3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:GZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(T,I){return T.f-I.f}),j.push({s:-1,f:25001});var q=j[0],K=j[1],L=0,Q=1,V=2;j[0]={s:-1,f:q.f+K.f,l:q,r:K};while(Q!=Z-1)q=j[j[L].f<j[V].f?L++:V++],K=j[L!=Q&&j[L].f<j[V].f?L++:V++],j[Q++]={s:-1,f:q.f+K.f,l:q,r:K};var N=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>N)N=X[G].s;var B=new D1(N+1),U=l3(j[Q-1],B,0);if(U>$){var G=0,D=0,E=U-$,H=1<<E;X.sort(function(I,J){return B[J.s]-B[I.s]||I.f-J.f});for(;G<Z;++G){var w=X[G].s;if(B[w]>$)D+=H-(1<<U-B[w]),B[w]=$;else break}D>>=E;while(D>0){var W=X[G].s;if(B[W]<$)D-=1<<$-B[W]++-1;else++G}for(;G>=0&&D;--G){var z=X[G].s;if(B[z]==$)--B[z],++D}U=$}return{t:new o_(B),l:U}},l3=function(_,$,j){return _.s==-1?Math.max(l3(_.l,$,j+1),l3(_.r,$,j+1)):$[_.s]=j},sG=function(_){var $=_.length;while($&&!_[--$]);var j=new D1(++$),G=0,Z=_[0],X=1,Y=function(K){j[G++]=K};for(var q=1;q<=$;++q)if(_[q]==Z&&q!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[q]}return{c:j.subarray(0,G),n:$}},d5=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},jZ=function(_,$,j){var G=j.length,Z=p3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},aG=function(_,$,j,G,Z,X,Y,q,K,L,Q){B$($,Q++,j),++Z[256];var V=u3(Z,15),N=V.t,B=V.l,U=u3(X,15),D=U.t,E=U.l,H=sG(N),w=H.c,W=H.n,z=sG(D),T=z.c,I=z.n,J=new D1(19);for(var k=0;k<w.length;++k)++J[w[k]&31];for(var k=0;k<T.length;++k)++J[T[k]&31];var A=u3(J,7),O=A.t,M=A.l,x=19;for(;x>4&&!O[v3[x-1]];--x);var f=L+5<<3,S=d5(Z,c$)+d5(X,o5)+Y,v=d5(Z,N)+d5(X,D)+Y+14+3*x+d5(J,O)+2*J[16]+3*J[17]+7*J[18];if(K>=0&&f<=S&&f<=v)return jZ($,Q,_.subarray(K,K+L));var l,h,r,b;if(B$($,Q,1+(v<S)),Q+=2,v<S){l=r1(N,B,0),h=N,r=r1(D,E,0),b=D;var e=r1(O,M,0);B$($,Q,W-257),B$($,Q+5,I-1),B$($,Q+10,x-4),Q+=14;for(var k=0;k<x;++k)B$($,Q+3*k,O[v3[k]]);Q+=3*x;var z0=[w,T];for(var K0=0;K0<2;++K0){var L0=z0[K0];for(var k=0;k<L0.length;++k){var X0=L0[k]&31;if(B$($,Q,e[X0]),Q+=O[X0],X0>15)B$($,Q,L0[k]>>5&127),Q+=L0[k]>>12}}}else l=nF,h=c$,r=dF,b=o5;for(var k=0;k<q;++k){var B0=G[k];if(B0>255){var X0=B0>>18&31;if(r5($,Q,l[X0+257]),Q+=h[X0+257],X0>7)B$($,Q,B0>>23&31),Q+=K2[X0];var _0=B0&31;if(r5($,Q,r[_0]),Q+=b[_0],_0>3)r5($,Q,B0>>5&8191),Q+=V2[_0]}else r5($,Q,l[B0]),Q+=h[B0]}return r5($,Q,l[256]),Q+h[256]},aF=new h3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),GZ=new o_(0),tF=function(_,$,j,G,Z,X){var Y=X.z||_.length,q=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),K=q.subarray(G,q.length-Z),L=X.l,Q=(X.r||0)&7;if($){if(Q)K[0]=X.r>>3;var V=aF[$-1],N=V>>13,B=V&8191,U=(1<<j)-1,D=X.p||new D1(32768),E=X.h||new D1(U+1),H=Math.ceil(j/3),w=2*H,W=function(b0){return(_[b0]^_[b0+1]<<H^_[b0+2]<<w)&U},z=new h3(25000),T=new D1(288),I=new D1(32),J=0,k=0,A=X.i||0,O=0,M=X.w||0,x=0;for(;A+2<Y;++A){var f=W(A),S=A&32767,v=E[f];if(D[S]=v,E[f]=S,M<=A){var l=Y-A;if((J>7000||O>24576)&&(l>423||!L)){Q=aG(_,K,0,z,T,I,k,O,x,A-x,Q),O=J=k=0,x=A;for(var h=0;h<286;++h)T[h]=0;for(var h=0;h<30;++h)I[h]=0}var r=2,b=0,e=B,z0=S-v&32767;if(l>2&&f==W(A-z0)){var K0=Math.min(N,l)-1,L0=Math.min(32767,A),X0=Math.min(258,l);while(z0<=L0&&--e&&S!=v){if(_[A+r]==_[A+r-z0]){var B0=0;for(;B0<X0&&_[A+B0]==_[A+B0-z0];++B0);if(B0>r){if(r=B0,b=z0,B0>K0)break;var _0=Math.min(z0,B0-2),G0=0;for(var h=0;h<_0;++h){var N0=A-z0+h&32767,W0=D[N0],d=N0-W0&32767;if(d>G0)G0=d,v=N0}}}S=v,v=D[S],z0+=S-v&32767}}if(b){z[O++]=268435456|m3[r]<<18|oG[b];var j0=m3[r]&31,A0=oG[b]&31;k+=K2[j0]+V2[A0],++T[257+j0],++I[A0],M=A+r,++J}else z[O++]=_[A],++T[_[A]]}}for(A=Math.max(A,M);A<Y;++A)z[O++]=_[A],++T[_[A]];if(Q=aG(_,K,L,z,T,I,k,O,x,A-x,Q),!L)X.r=Q&7|K[Q/8|0]<<3,Q-=7,X.h=E,X.p=D,X.i=A,X.w=M}else{for(var A=X.w||0;A<Y+L;A+=65535){var P0=A+65535;if(P0>=Y)K[Q/8|0]=L,P0=Y;Q=jZ(K,Q+1,_.subarray(A,P0))}X.i=Y}return i5(q,0,G+p3(Q)+Z)};var ZZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var q=Math.min(Y+2655,X);for(;Y<q;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},eF=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return tF(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var XZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var _U=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=ZZ();Z.p($.dictionary),XZ(_,2,Z.d())}},$U=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var b3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)B1(5);if(this.d)B1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=sF(this.p,this.s,this.o);this.ondata(i5(G,j,this.s.b),this.d),this.o=i5(G,this.s.b-32768),this.s.b=this.o.length,this.p=i5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function YZ(_,$){if(!$)$={};var j=ZZ();j.p(_);var G=eF(_,$,$.dictionary?6:2,4);return _U(G,$),XZ(G,G.length-4,j.d()),G}var qZ=function(){function _($,j){b3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(b3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray($U(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}b3.prototype.c.call(this,j)},_}();var jU=typeof TextDecoder<"u"&&new TextDecoder,GU=0;try{jU.decode(GZ,{stream:!0}),GU=1}catch(_){}var ZU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],XU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],YU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],qU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],LU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],KU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],VU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],QU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],VZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;VZ[_]=$}function QZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function BZ(_){let $=0n,j=QZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function BU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function G5(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function LZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function NU(_){let $=G5(BZ(_),LU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of VU){j=LZ(j,X),G=LZ(G,X);let Y=j<<28n|G;Z.push(G5(Y,KU,56))}return Z}function FU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(QU[j][X][Y])}return $}function UU(_,$){let j=G5(_,YU,32)^BigInt($),G=FU(j);return G5(G,qU,32)}function KZ(_,$){let j=NU($),G=G5(BZ(_),ZU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let q of j){let K=X,L=(Z^UU(X,q))&0xffffffffn;Z=K,X=L}let Y=X<<32n|Z;return BU(G5(Y,XU,64),8)}function HU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=VZ[Z]}return j}function NZ(_,$){let j=QZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=HU(_),Z=new Uint8Array(16);return Z.set(KZ(j.slice(0,8),G),0),Z.set(KZ(j.slice(8,16),G),8),Z}var S1="vnc";function EU(_){return Number(_)}function DU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=EU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function Y5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function WU(_,$){let j=Y5(_),G=Y5($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function zU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=Y5(Z);j.set(X,G),G+=X.byteLength}return j}function OU(){return(_)=>{let $=Y5(_);try{let j=[],G=new qZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return zU(j)}catch(j){try{let G=YZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function JU(_){return new TextEncoder().encode(String(_||""))}function Z5(_){return new TextDecoder().decode(Y5(_))}function AU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function kU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function FZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function MU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function wU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function UZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function X5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function EZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function yU(_,$,j,G){let Z=G||q5,X=Y5(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),q=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<q)throw Error(`Incomplete raw rectangle payload: expected ${q} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let K=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),L=0,Q=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let N=EZ(X,L,Y,Z.bigEndian),B=X5(N>>>Z.redShift&Z.redMax,Z.redMax),U=X5(N>>>Z.greenShift&Z.greenMax,Z.greenMax),D=X5(N>>>Z.blueShift&Z.blueMax,Z.blueMax);K[Q]=B,K[Q+1]=U,K[Q+2]=D,K[Q+3]=255,L+=Y,Q+=4}return K}function N$(_,$,j){let G=j||q5,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=EZ(_,$,Z,G.bigEndian);return{rgba:[X5(X>>>G.redShift&G.redMax,G.redMax),X5(X>>>G.greenShift&G.greenMax,G.greenMax),X5(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let q=0;q<X;q+=1)for(let K=0;K<Z;K+=1){let L=((G+q)*$+(j+K))*4;_[L]=Y[0],_[L+1]=Y[1],_[L+2]=Y[2],_[L+3]=Y[3]}}function DZ(_,$,j,G,Z,X,Y){for(let q=0;q<X;q+=1){let K=q*Z*4,L=((G+q)*$+j)*4;_.set(Y.subarray(K,K+Z*4),L)}}function HZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function TU(_,$,j,G,Z,X,Y){let q=Z||q5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let L=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+L)return null;let Q=_.slice($+4,$+4+L),V;try{V=Y(Q)}catch{return{consumed:4+L,skipped:!0}}let N=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let D=Math.min(64,G-U);for(let E=0;E<j;E+=64){let H=Math.min(64,j-E);if(V.byteLength<N+1)return null;let w=V[N++],W=w&127,z=(w&128)!==0;if(!z&&W===0){let T=H*D*K;if(V.byteLength<N+T)return null;let I=X(V.slice(N,N+T),H,D,q);N+=T,DZ(B,j,E,U,H,D,I);continue}if(!z&&W===1){let T=N$(V,N,q);if(!T)return null;N+=T.bytesPerPixel,l$(B,j,E,U,H,D,T.rgba);continue}if(!z&&W>1&&W<=16){let T=[];for(let A=0;A<W;A+=1){let O=N$(V,N,q);if(!O)return null;N+=O.bytesPerPixel,T.push(O.rgba)}let I=W<=2?1:W<=4?2:4,J=Math.ceil(H*I/8),k=J*D;if(V.byteLength<N+k)return null;for(let A=0;A<D;A+=1){let O=N+A*J;for(let M=0;M<H;M+=1){let x=M*I,f=O+(x>>3),S=8-I-(x&7),v=V[f]>>S&(1<<I)-1;l$(B,j,E+M,U+A,1,1,T[v])}}N+=k;continue}if(z&&W===0){let T=0,I=0;while(I<D){let J=N$(V,N,q);if(!J)return null;N+=J.bytesPerPixel;let k=HZ(V,N);if(!k)return null;N+=k.consumed;for(let A=0;A<k.runLength;A+=1)if(l$(B,j,E+T,U+I,1,1,J.rgba),T+=1,T>=H){if(T=0,I+=1,I>=D)break}}continue}if(z&&W>0){let T=[];for(let k=0;k<W;k+=1){let A=N$(V,N,q);if(!A)return null;N+=A.bytesPerPixel,T.push(A.rgba)}let I=0,J=0;while(J<D){if(V.byteLength<N+1)return null;let k=V[N++],A=k,O=1;if(k&128){A=k&127;let x=HZ(V,N);if(!x)return null;N+=x.consumed,O=x.runLength}let M=T[A];if(!M)return null;for(let x=0;x<O;x+=1)if(l$(B,j,E+I,U+J,1,1,M),I+=1,I>=H){if(I=0,J+=1,J>=D)break}}continue}return{consumed:4+L,skipped:!0}}}return{consumed:4+L,rgba:B,decompressed:V}}function xU(_,$,j,G,Z){let X=Z||q5,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let K=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),L=4+Y+K*(Y+8);if(_.byteLength<$+L)return null;let Q=$+4,V=N$(_,Q,X);if(!V)return null;Q+=V.bytesPerPixel;let N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(N,j,0,0,j,G,V.rgba);for(let B=0;B<K;B+=1){let U=N$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let D=new DataView(_.buffer,_.byteOffset+Q,8),E=D.getUint16(0,!1),H=D.getUint16(2,!1),w=D.getUint16(4,!1),W=D.getUint16(6,!1);Q+=8,l$(N,j,E,H,w,W,U.rgba)}return{consumed:Q-$,rgba:N}}function IU(_,$,j,G,Z,X){let Y=Z||q5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),K=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),L=$,Q=[0,0,0,255],V=[255,255,255,255];for(let N=0;N<G;N+=16){let B=Math.min(16,G-N);for(let U=0;U<j;U+=16){let D=Math.min(16,j-U);if(_.byteLength<L+1)return null;let E=_[L++];if(E&1){let H=D*B*q;if(_.byteLength<L+H)return null;let w=X(_.slice(L,L+H),D,B,Y);L+=H,DZ(K,j,U,N,D,B,w);continue}if(E&2){let H=N$(_,L,Y);if(!H)return null;Q=H.rgba,L+=H.bytesPerPixel}if(l$(K,j,U,N,D,B,Q),E&4){let H=N$(_,L,Y);if(!H)return null;V=H.rgba,L+=H.bytesPerPixel}if(E&8){if(_.byteLength<L+1)return null;let H=_[L++];for(let w=0;w<H;w+=1){let W=V;if(E&16){let O=N$(_,L,Y);if(!O)return null;W=O.rgba,L+=O.bytesPerPixel}if(_.byteLength<L+2)return null;let z=_[L++],T=_[L++],I=z>>4,J=z&15,k=(T>>4)+1,A=(T&15)+1;l$(K,j,U+I,N+J,k,A,W)}}}}return{consumed:L-$,rgba:K}}var q5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class Q2{protocol=S1;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:yU,this.pipeline=_.pipeline||null,this.encodings=DU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...q5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:OU()}receive(_){if(_)this.buffer=WU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=Z5(Z),Y=AU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=kU(Y),j.push(JU(this.clientVersionText)),$.push({type:"protocol-version",protocol:S1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+K)break;this.consume(1);let L=Z5(this.consume(4+K).slice(4));throw Error(L||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:S1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:S1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+q)break;let K=Z5(this.consume(4+q).slice(4));throw Error(K||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(NZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let q=Z5(this.consume(4+Y).slice(4));throw Error(q||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),q=FZ(Z,4),K=Z.getUint32(20,!1);if(this.buffer.byteLength<24+K)break;let L=this.consume(24),Q=new DataView(L.buffer,L.byteOffset,L.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=FZ(Q,4),this.serverName=Z5(this.consume(K)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(MU(this.clientPixelFormat)),j.push(wU(this.encodings)),j.push(UZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S1,width:X,height:Y,name:this.serverName,pixelFormat:q}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),q=4,K=[],L=!1,Q=!!this.pipeline;for(let N=0;N<Y;N+=1){if(this.buffer.byteLength<q+12){L=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,12),U=B.getUint16(0,!1),D=B.getUint16(2,!1),E=B.getUint16(4,!1),H=B.getUint16(6,!1),w=B.getInt32(8,!1);if(q+=12,w===0){let W=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),z=E*H*W;if(this.buffer.byteLength<q+z){L=!0;break}let T=this.buffer.slice(q,q+z);if(q+=z,Q)this.pipeline.processRawRect(T,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:this.decodeRawRect(T,E,H,this.clientPixelFormat)});continue}if(w===2){let W=xU(this.buffer,q,E,H,this.clientPixelFormat);if(!W){L=!0;break}if(Q){let z=this.buffer.slice(q,q+W.consumed);this.pipeline.processRreRect(z,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:W.rgba});q+=W.consumed;continue}if(w===1){if(this.buffer.byteLength<q+4){L=!0;break}let W=new DataView(this.buffer.buffer,this.buffer.byteOffset+q,4),z=W.getUint16(0,!1),T=W.getUint16(2,!1);if(q+=4,Q)this.pipeline.processCopyRect(U,D,E,H,z,T),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"copy",x:U,y:D,width:E,height:H,srcX:z,srcY:T});continue}if(w===16){let W=TU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!W){L=!0;break}if(q+=W.consumed,W.skipped)continue;if(Q&&W.decompressed)this.pipeline.processZrleTileData(W.decompressed,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H});else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:W.rgba});continue}if(w===5){let W=IU(this.buffer,q,E,H,this.clientPixelFormat,this.decodeRawRect);if(!W){L=!0;break}if(Q){let z=this.buffer.slice(q,q+W.consumed);this.pipeline.processHextileRect(z,U,D,E,H,this.clientPixelFormat),K.push({kind:"pipeline",x:U,y:D,width:E,height:H})}else K.push({kind:"rgba",x:U,y:D,width:E,height:H,rgba:W.rgba});q+=W.consumed;continue}if(w===-223){if(this.framebufferWidth=E,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(E,H);K.push({kind:"resize",x:U,y:D,width:E,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${w}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(L)break;this.consume(q);let V={type:"framebuffer-update",protocol:S1,width:this.framebufferWidth,height:this.framebufferHeight,rects:K};if(Q)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(UZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:S1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let q=Z5(this.consume(Y));$.push({type:"clipboard",protocol:S1,text:q}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function OZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var n3="piclaw:vnc-popout:",CU=60000;function JZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function PU(_=globalThis){let $=NG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function AZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(n3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{$2(_,G)}}function fU(_,$=globalThis,j=Date.now()){let G=H4(_);if(G===null)return null;let Z=JZ($);if(!Z)return null;AZ(Z,j);let X=PU($);try{return Z.setItem(`${n3}${X}`,JSON.stringify({password:G,expiresAt:j+CU})),X}catch{return null}}function RU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=JZ($);if(!Z)return null;AZ(Z,j);let X=`${n3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let q=JSON.parse(Y),K=Number(q?.expiresAt||0);if(!Number.isFinite(K)||K<=j)return null;return H4(q?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function SU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:OZ(G)},X=fU($,j);if(X)Z.vnc_secret=X;return Z}function gU(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function uU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function bU(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function vU(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function mU(_){return String(_||"").trim()||"localhost"}function cU(_,$){let j=mU(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function lU(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function WZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function zZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function hU(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class kZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=gU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=WZ("vnc_handoff");let j=WZ("vnc_secret"),G=RU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=lU({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:16px 16px 18px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:12px;box-shadow:none;">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host value="localhost" placeholder="localhost" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;min-height:40px;font-weight:500;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((X)=>`
                            <div style="text-align:left;padding:14px;border:1px solid var(--border-color);border-radius:10px;background:transparent;color:inherit;display:flex;flex-direction:column;gap:10px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${d1(X.label||X.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${d1(X.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${X.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${d1(X.id)}" data-target-label="${d1(X.label||X.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:24px 20px;border:1px dashed var(--border-color);border-radius:10px;background:transparent;font-size:13px;color:var(--text-secondary);line-height:1.5;display:grid;gap:6px;">
                            <div style="font-weight:600;color:var(--text-primary);">${d1(G.title)}</div>
                            <div>${d1(G.body)}</div>
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=cU(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=H4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),q=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=bU();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:6px;">
                    <div data-vnc-session-chrome style="padding:6px 8px;border:1px solid var(--border-color);border-radius:8px;background:transparent;display:flex;flex-wrap:wrap;gap:8px;align-items:center;">
                        <div data-display-info style="min-width:0;flex:1 1 240px;font-size:12px;color:var(--text-secondary);line-height:1.3;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <input type="password" data-vnc-password placeholder="Password" autocomplete="current-password" style="width:150px;max-width:100%;padding:6px 8px;border:1px solid var(--border-color);border-radius:6px;background:transparent;color:inherit;" />
                        <button type="button" data-vnc-reconnect="1" style="padding:6px 10px;border:1px solid var(--border-color);border-radius:6px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:8px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:4px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:2px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.5;">
                            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${d1(j)}</div>
                            <div style="font-size:12px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `:`
                <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                    <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:transparent;display:grid;gap:10px;">
                        <div style="display:grid;gap:4px;min-width:0;">
                            <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${d1($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                            <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                            <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                        </div>
                        <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                            <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                                <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                                <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:8px;background:transparent;color:inherit;" />
                            </label>
                            <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Reconnect</button>
                            <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:8px;background:transparent;cursor:pointer;color:inherit;">Target</button>
                        </div>
                    </div>
                    <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:10px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:8px;position:relative;overflow:hidden;">
                        <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:none;border-radius:4px;background:#000;"></canvas>
                        <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                            <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${d1(j)}</div>
                            <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                        </div>
                    </div>
                </div>
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=H4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=H4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=iG($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return f3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(L2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,q=new Map,K=new Set,L=!1,Q=(J)=>this.getFramebufferPointFromEvent(J)||X.get(J?.pointerId)||{x:0,y:0},V=(J)=>{if(!J||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return f3(J.clientX,J.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},N=(J)=>{let k=Y.get(J);if(k)G.clearTimeout(k),Y.delete(J)},B=(J)=>{let k=q.get(J);if(k?.holdTimer)G.clearTimeout(k.holdTimer);q.delete(J)},U=()=>{for(let J of q.keys())B(J)},D=()=>{if(!K.size)L=!1},E=(J,k=80)=>{let A=String(J?.pointerType||"").toLowerCase();if(!pG(A))return;let O=Number(J?.pointerId);if(!Number.isFinite(O))return;N(O);let M=G.setTimeout(()=>{if(Y.delete(O),!Z.has(O)&&!this.pointerButtonMask)return;w({pointerId:O,pointerType:A,type:"pointercancel",clientX:J?.clientX,clientY:J?.clientY},{resetAll:!0})},k);Y.set(O,M)},H=(J=null)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;for(let A of Y.keys())N(A);U(),K.clear(),L=!1;let k=J||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},w=(J,k={})=>{if(k.resetAll){let f=Number(J?.pointerId);N(f),H(Q(J));try{this.canvas?.releasePointerCapture?.(f)}catch{}return}let A=Q(J),O=Number(J?.pointerId);N(O),B(O),K.delete(O),D();let M=Z.has(O),x=Z.get(O)??C3(J);if(!M&&!x&&!this.pointerButtonMask)return;if(Z.delete(O),X.delete(O),x)this.pointerButtonMask&=~x;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,A.x,A.y);try{this.canvas?.releasePointerCapture?.(O)}catch{}},W=(J)=>{if(L)return;let k=q.get(J);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let A=m$(0);if(!A)return;Z.set(J,(Z.get(J)??0)|A),this.pointerButtonMask|=A,E({pointerId:J,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},z=(J,k,A={})=>{let O=q.get(J);if(!O)return!1;let M=k||O.lastPoint||{x:0,y:0},x=Number.isFinite(A.clientX)?Number(A.clientX):O.lastClientX,f=Number.isFinite(A.clientY)?Number(A.clientY):O.lastClientY;if(K.delete(J),A.cancelled||L){if(B(J),D(),Z.has(J)||this.pointerButtonMask)H(M);return!0}if(O.dragActivated||Z.has(J))return w({pointerId:J,pointerType:"touch",type:"pointerup",clientX:x,clientY:f}),D(),!0;let S=Date.now()-O.startedAt,v=hG({startX:O.startClientX,startY:O.startClientY,clientX:x,clientY:f,elapsedMs:S});if(N(J),B(J),X.delete(J),D(),v){let l=m$(0);this.sendPointerEvent(l,M.x,M.y),this.sendPointerEvent(0,M.x,M.y)}else this.sendPointerEvent(this.pointerButtonMask,M.x,M.y);return!0};this.canvas.addEventListener("contextmenu",(J)=>{J.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let A=String(J?.pointerType||"").toLowerCase(),O=p1(A);if(X.set(J.pointerId,k),O){let M=q.get(J.pointerId);if(M){if(M.lastClientX=Number(J?.clientX||0),M.lastClientY=Number(J?.clientY||0),M.lastPoint=k,!M.dragActivated&&P3({startX:M.startClientX,startY:M.startClientY,clientX:M.lastClientX,clientY:M.lastClientY}))B(J.pointerId),q.set(J.pointerId,{...M,holdTimer:null,dragActivated:!1});if(!M.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(L)return}if(Z.has(J.pointerId)&&U4(J)){w(J,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(J.pointerId)&&U4(J)){H(k);return}if(Z.has(J.pointerId))E(J);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;let A=String(J?.pointerType||"").toLowerCase(),O=p1(A);if(J.preventDefault(),this.canvas?.focus?.(),X.set(J.pointerId,k),O){if(K.add(J.pointerId),K.size>1){let f=[...K];L=!0,H(k);for(let S of f)K.add(S);L=!0;return}B(J.pointerId);let x={startClientX:Number(J?.clientX||0),startClientY:Number(J?.clientY||0),lastClientX:Number(J?.clientX||0),lastClientY:Number(J?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};x.holdTimer=G.setTimeout(()=>{W(J.pointerId)},260),q.set(J.pointerId,x),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(A==="mouse")try{this.canvas?.setPointerCapture?.(J.pointerId)}catch{}let M=C3(J);if(!M)return;Z.set(J.pointerId,(Z.get(J.pointerId)??0)|M),this.pointerButtonMask|=M,E(J),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(J)=>{if(J.preventDefault(),p1(J?.pointerType)){let k=Q(J);if(z(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}w(J)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(J)=>{if(J.preventDefault(),p1(J?.pointerType)){let k=Q(J);if(z(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}w(J,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(J)=>{if(q.has(J.pointerId)&&p1(J?.pointerType)){z(J.pointerId,Q(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!U4(J))return;w(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(J)=>{if(q.has(J.pointerId)&&p1(J?.pointerType)){z(J.pointerId,Q(J),{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0});return}if(!Z.has(J.pointerId))return;if(!U4(J))return;w(J,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(J)=>{w(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(J)=>{if(!Z.size&&!this.pointerButtonMask||!U4(J))return;if(!Z.has(J.pointerId)&&!this.pointerButtonMask)return;w(J,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!q.has(J.pointerId))return;if(J.preventDefault?.(),p1(J?.pointerType)){let k=Q(J);if(z(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY}))return}w(J,{resetAll:!Z.has(J.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(J)=>{if(!Z.has(J.pointerId)&&!this.pointerButtonMask&&!q.has(J.pointerId))return;if(J.preventDefault?.(),p1(J?.pointerType)){let k=Q(J);if(z(J.pointerId,k,{clientX:J?.clientX,clientY:J?.clientY,cancelled:!0}))return}w(J,{resetAll:!0})},{signal:$,passive:!1});let T=(J)=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;if(!lG(J))return;let k=J?.changedTouches?.[0]||J?.touches?.[0]||null,A=V(k)||X.values().next().value||q.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&q.size===1){let[O]=q.entries().next().value||[];if(Number.isFinite(O)){z(O,A,{clientX:k?.clientX,clientY:k?.clientY,cancelled:J?.type==="touchcancel"});return}}H(A)},I=(J,k={})=>{if(!Z.size&&!this.pointerButtonMask&&!q.has(J?.pointerId))return;if(!U4(J))return;if(J?.preventDefault?.(),p1(J?.pointerType)){let A=Q(J);if(z(J.pointerId,A,{clientX:J?.clientX,clientY:J?.clientY,cancelled:k.resetAll===!0}))return}w(J,{resetAll:k.resetAll===!0||!Z.has(J?.pointerId)})};this.canvas.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(J)=>{I(J)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(J)=>{I(J,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!q.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(J)=>{let k=this.getFramebufferPointFromEvent(J);if(!k)return;J.preventDefault();for(let A of nG(J.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(A)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(rG(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=R3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(dG(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??R3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new Q2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await cG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(q,K,L,Q)=>G.decodeRawRectToRgba(q,K,L,Q);let X=H4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new Q2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new y3({url:vU(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(q)=>{this.applyMetrics(q)},onMessage:(q)=>{this.handleSocketMessage(q)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(zZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),zZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await uU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!hU(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return SU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var r3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new kZ(_,$)}};import{classHighlighter as pU,highlightTree as nU,StreamLanguage as L5,cssLanguage as rU,cppLanguage as dU,goLanguage as iU,htmlLanguage as oU,javascriptLanguage as sU,jsxLanguage as aU,tsxLanguage as tU,typescriptLanguage as eU,jsonLanguage as _H,markdownLanguage as $H,pythonLanguage as jH,rustLanguage as GH,StandardSQL as ZH,xmlLanguage as XH,yamlLanguage as YH,dockerFile as qH,powerShell as LH,ruby as KH,shell as VH,swift as QH,toml as BH}from"#editor-vendor/codemirror";function E4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var NH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},FH=L5.define(VH).parser,UH=L5.define(LH).parser,HH=L5.define(qH).parser,EH=L5.define(KH).parser,DH=L5.define(QH).parser,WH=L5.define(BH).parser;function MZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return NH[$]||String(_||"").trim()}function zH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return sU.parser;case"ts":case"typescript":return eU.parser;case"jsx":return aU.parser;case"tsx":return tU.parser;case"py":case"python":return jH.parser;case"json":return _H.parser;case"css":return rU.parser;case"html":return oU.parser;case"xml":return XH.parser;case"yaml":case"yml":return YH.parser;case"md":case"markdown":return $H.parser;case"sql":return ZH.language.parser;case"go":return iU.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return dU.parser;case"sh":case"bash":case"shell":case"zsh":return FH;case"ps1":case"powershell":return UH;case"dockerfile":return HH;case"rb":case"ruby":return EH;case"rs":case"rust":return GH.parser;case"swift":return DH;case"toml":return WH;default:return null}}function B2(_,$){let j=zH($);if(!j)return E4(_);let G=[];try{let Y=j.parse(_);nU(Y,pU,(q,K,L)=>{if(!L||q>=K)return;G.push({from:q,to:K,cls:L})})}catch{return E4(_)}if(!G.length)return E4(_);G.sort((Y,q)=>Y.from-q.from||Y.to-q.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=E4(_.slice(Z,Y.from));X+=`<span class="${E4(Y.cls)}">${E4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=E4(_.slice(Z));return X}a5();var D2=/#(\w+)/g,fH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),RH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),SH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),SZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},gH=new Set(["http:","https:","mailto:",""]);function uH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(SZ[j]||new Set).has(G)||SH.has(G)}function e3(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function O4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!gH.has(G.protocol))return null;return G.href}catch{return null}}function gZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let q=Y.tagName.toLowerCase();if(!RH.has(q)){let L=Y.parentNode;if(!L)continue;while(Y.firstChild)L.insertBefore(Y.firstChild,Y);L.removeChild(Y);continue}let K=SZ[q]||new Set;for(let L of Array.from(Y.attributes)){let Q=L.name.toLowerCase(),V=L.value;if(Q.startsWith("on")){Y.removeAttribute(L.name);continue}if(uH(q,Q)){if(Q==="href"){let N=O4(V);if(!N)Y.removeAttribute(L.name);else if(Y.setAttribute(L.name,N),q==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(N))Y.setAttribute("target","_blank")}}else if(Q==="src"){let N=q==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,B=O4(N,{allowDataImage:q==="img"});if(!B)Y.removeAttribute(L.name);else Y.setAttribute(L.name,B)}continue}Y.removeAttribute(L.name)}}return j.body.innerHTML}function uZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function t5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=uZ(j);if(Z===j)break;j=Z}return j}function bH(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function vH(_){let{text:$,frontmatter:j}=bH(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function mH(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let q of j){if(!X&&q.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&q.trim().match(/^```\s*$/)){let K=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${K}@@`),X=!1,Y=[];continue}if(X)Y.push(q);else Z.push(q)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function cH(_){if(!_)return _;return t5(_,5)}function lH(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function hH(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function pH(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=cH(X);return`<div class="mermaid-container" data-mermaid="${lH(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function bZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function nH(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=t5(Z,2),q=X||"plaintext",K=B2(Y,X);return`<pre><code class="hljs language-${e3(q)}">${K}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var rH={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function dH(_,$){let j=rH[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let q=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${e3(q)}"`)}return G.join("")}function vZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,q=X.endsWith("/")?X.slice(0,-1).trim():X,[K=""]=q.split(/\s+/,1),L=K.toLowerCase();if(!L||!fH.has(L))return $;if(L==="br")return Z?"":"<br>";if(Z)return`</${L}>`;let Q=q.slice(K.length).trim(),V=dH(L,Q);return`<${L}${V}>`})}function mZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function cZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function iH(_){if(!window.katex)return _;let $=(Y)=>uZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let q=[],K=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_BLOCK_${Q}@@`});return K=K.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(L)=>{let Q=q.length;return q.push(L),`@@CODE_INLINE_${Q}@@`}),{html:K,blocks:q}},G=(Y,q)=>{if(!q.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(K,L)=>{let Q=Number(L);return q[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,q,K)=>{try{let L=katex.renderToString($(K.trim()),{displayMode:!0,throwOnError:!1});return`${q}${L}`}catch(L){return`<span class="math-error" title="${e3(L.message)}">${Y}</span>`}}),G(X,Z.blocks)}function oH(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(D2.lastIndex=0,!D2.test(Y))continue;D2.lastIndex=0;let q=X.parentElement;if(q&&(q.closest("a")||q.closest("code")||q.closest("pre")))continue;let K=Y.split(D2);if(K.length<=1)continue;let L=$.createDocumentFragment();K.forEach((Q,V)=>{if(V%2===1){let N=$.createElement("a");N.setAttribute("href","#"),N.className="hashtag",N.setAttribute("data-hashtag",Q),N.textContent=`#${Q}`,L.appendChild(N)}else L.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(L,X)}return $.body.innerHTML}function sH(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function aH(_){let $=vH(_||""),j=sH($),{text:G,blocks:Z}=mH(j),X=t5(G,2),q=bZ(X).replace(/</g,"&lt;");return{safeHtml:vZ(q),mermaidBlocks:Z}}function G1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=aH(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=mZ(X),X=cZ(X),X=nH(X),X=iH(X),X=oH(X),X=pH(X,Z),X=gZ(X,j),X}function e5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=t5($,2),Z=bZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=vZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=mZ(Y),Y=cZ(Y),Y=gZ(Y),Y}function tH(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((K)=>{let[L,Q]=K.split(",").map(Number);return{x:L,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let q=[`M ${Y[0].x},${Y[0].y}`];for(let K=1;K<Y.length-1;K++){let L=Y[K-1],Q=Y[K],V=Y[K+1],N=Q.x-L.x,B=Q.y-L.y,U=V.x-Q.x,D=V.y-Q.y,E=Math.sqrt(N*N+B*B),H=Math.sqrt(U*U+D*D),w=Math.min($,E/2,H/2);if(w<0.5){q.push(`L ${Q.x},${Q.y}`);continue}let W=Q.x-N/E*w,z=Q.y-B/E*w,T=Q.x+U/H*w,I=Q.y+D/H*w,k=N*D-B*U>0?1:0;q.push(`L ${W},${z}`),q.push(`A ${w},${w} 0 0 ${k} ${T},${I}`)}return q.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${q.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=RZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let q=Y.dataset.mermaid,K=hH(q||""),L=t5(K,2),Q=await $(L,{...Z,transparent:!0});Q=tH(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(q){console.error("Mermaid render error:",q);let K=document.createElement("pre");K.className="mermaid-error",K.textContent=`Diagram error: ${q.message}`,Y.innerHTML="",Y.appendChild(K),Y.removeAttribute("data-mermaid")}}S_();function eZ(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date-$,Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let K=$.toLocaleDateString(void 0,{weekday:"short"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${K} ${L}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),q=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${q}`}function V6(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function e_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function y4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function p$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function cE(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",q=String($||"").split("/").slice(0,-1).join("/"),L=Z.startsWith("/")?Z:`${q?`${q}/`:""}${Z}`,Q=[];for(let N of L.split("/")){if(!N||N===".")continue;if(N===".."){if(Q.length>0)Q.pop();continue}Q.push(N)}let V=Q.join("/");return`${L6(V)}${X}${Y}`}function Q6(_){return _?.preview||null}function lE(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function hE(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function pE(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${p$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${p$(e_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${p$(y4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${p$(hE($))}</span>`),G.push(`<span><strong>extension:</strong> ${p$(lE(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${p$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function nE(_){let $=Q6(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=pE(_,$);if($.kind==="image"){let G=$.url||($.path?L6($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${p$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=G1($.text||"",null,{rewriteImageSrc:(Z)=>cE(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${p$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class w7{constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=nE(this.context)}getContent(){let _=Q6(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=Q6(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var y7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=Q6(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new w7(_,$)}},T7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return Q6(_)||_?.path?1:!1},mount(_,$){return new w7(_,$)}};var rE=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),dE={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},iE={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function $X(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function _X(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class jX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=$X(j),X=iE[Z]||"\uD83D\uDCC4",Y=dE[Z]||"Office Document",q=document.createElement("div");q.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",q.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${_X(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${_X(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(q);let K=q.querySelector("#ov-open-tab");if(K)K.addEventListener("click",()=>{let L=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class GX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var x7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=$X(_?.path);if(!$||!rE.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new jX(_,$);return new GX(_,$)}};var oE=/\.(csv|tsv)$/i;function ZX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class XX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${ZX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class YX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var I7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!oE.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new XX(_,$);return new YX(_,$)}};var sE=/\.pdf$/i;function aE(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class qX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${aE(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class LX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var C7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!sE.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new qX(_,$);return new LX(_,$)}};var tE=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function P7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class KX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${P7(Z)}" alt="${P7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${P7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class VX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!tE.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new KX(_,$);return new VX(_,$)}};var eE=/\.(html|htm)$/i;function QX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class BX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${QX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${QX(j)}</div>
                <div style="display:flex;gap:8px;flex-shrink:0;">
                    <button id="html-edit-btn" style="padding:5px 14px;background:var(--surface-color,rgba(148,163,184,.12));color:var(--text-primary,#e2e8f0);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;">
                        Edit Source
                    </button>
                    <button id="html-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                        border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;
                        transition:background 0.15s;"
                        onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                        onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                        Preview in Tab
                    </button>
                </div>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class NX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!eE.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new BX(_,$);return new NX(_,$)}};var _D=/\.(mp4|m4v|mov|webm|ogv)$/i;function $D(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class FX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${$D(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class UX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_D.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new FX(_,$);return new UX(_,$)}};S_();function jD(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function HX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:q,pollMs:K=3000,ownerDocument:L=document}=_,Q=null,V=null,N=!1,B=!1,U=!1;async function D(){if(B||U||N)return;let z=j();if(!z)return;try{let T=await O7($);if(B||U||!T?.mtime)return;if(T.mtime!==z)N=!0,H(),w()}catch(T){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",T)}}function E(){if(H(),B)return;Q=setInterval(D,K)}function H(){if(Q)clearInterval(Q),Q=null}function w(){if(V||B)return;let z=L.createElement("div");z.className="editor-conflict-bar",z.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,z.addEventListener("click",(T)=>{let I=T.target.closest("[data-action]");if(!I)return;let J=I.getAttribute("data-action");if(J==="reload")W(),X();else if(J==="save-copy"){let k=jD($);Y(k)}else if(J==="overwrite")W(),q();else if(J==="dismiss")W()}),V=z,G.insertBefore(z,Z)}function W(){if(V)V.remove(),V=null;N=!1,E()}return{start(){E()},stop(){H()},onSaved(z){N=!1,U=!1,E()},dispose(){if(B=!0,H(),V)V.remove(),V=null}}}var GD=/\.mindmap\.ya?ml$/i,x2=String(Date.now());function ZD(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function EX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function g7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function XD(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function YD(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="mindmap-undo" title="Undo (Ctrl+Z)" disabled>Undo</button>
        <button type="button" id="mindmap-redo" title="Redo (Ctrl+Shift+Z)" disabled>Redo</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let G=document.createElement("div");G.id="context-menu",G.className="context-menu hidden",G.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(G)}class DX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ZD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class WX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(EX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,XD("/static/css/mindmap.css?v="+x2),await Promise.all([g7("/static/js/vendor/d3-mindmap.min.js?v="+x2),g7("/static/js/vendor/js-yaml.min.js?v="+x2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),YD(this.mindmapEl);let j=EX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await g7("/static/js/vendor/mindmap-editor.js?v="+x2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=HX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var u7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!GD.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new DX(_,$);return new WX(_,$)}};class zX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new zX;var F5=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};T0();function OX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,q]=C({text:"",totalLines:0}),[K,L]=C(null),[Q,V]=C(null),[N,B]=C(null),U=g(null),D=g(0),E=g(!1),H=g(""),w=g(""),W=g(!1),z=g(0),T=g(null),I=g(null),J=g(null),k=g(null),A=g(!1),O=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:q,pendingRequest:K,setPendingRequest:L,currentTurnId:Q,setCurrentTurnId:V,steerQueuedTurnId:N,setSteerQueuedTurnId:B,lastAgentEventRef:U,lastSilenceNoticeRef:D,isAgentRunningRef:E,draftBufferRef:H,thoughtBufferRef:w,previewResyncPendingRef:W,previewResyncGenerationRef:z,pendingRequestRef:T,stalledPostIdRef:I,currentTurnIdRef:J,steerQueuedTurnIdRef:k,thoughtExpandedRef:A,draftExpandedRef:O}}T0();var qD=0.1,wX=4,yX=4,JX=160,AX=1600,kX=200,MX=1600;function D$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function TX(_=D$()){return _>0?Math.floor(_*qD):0}function B6(_,$=D$(),j=0){let G=TX($)+wX+(j>0?yX+Math.max(0,j):0),Z=$>0?Math.floor($-G):AX;return Math.min(Math.max(Number(_)||0,JX),Math.max(JX,Math.min(AX,Z)))}function N6(_,$=D$(),j=0){let G=TX($)+yX+(j>0?wX+Math.max(0,j):0),Z=$>0?Math.floor($-G):MX;return Math.min(Math.max(Number(_)||0,kX),Math.max(kX,Math.min(MX,Z)))}function xX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.clientX,B=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=N,E=(w)=>{D=w.clientX;let W=B6(B+(w.clientX-N),D$(),j?.current||0);V.style.setProperty("--sidebar-width",`${W}px`),$.current=W},H=()=>{let w=B6(B+(D-N),D$(),j?.current||0);$.current=w,U.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",K_("sidebarWidth",String(Math.round(w))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,X=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.touches[0];if(!N)return;let B=N.clientX,U=$.current||280,D=Q.currentTarget;D.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let E=(w)=>{let W=w.touches[0];if(!W)return;w.preventDefault();let z=B6(U+(W.clientX-B),D$(),j?.current||0);V.style.setProperty("--sidebar-width",`${z}px`),$.current=z},H=()=>{D.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",K_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.clientX,B=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let D=N,E=(w)=>{D=w.clientX;let W=N6(B+(w.clientX-N),D$(),$?.current||0);V.style.setProperty("--editor-width",`${W}px`),j.current=W},H=()=>{let w=N6(B+(D-N),D$(),$?.current||0);j.current=w,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("editorWidth",String(Math.round(w))),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,q=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.touches[0];if(!N)return;let B=N.clientX,U=j.current||$.current||280,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(w)=>{let W=w.touches[0];if(!W)return;w.preventDefault();let z=N6(U+(W.clientX-B),D$(),$?.current||0);V.style.setProperty("--editor-width",`${z}px`),j.current=z},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",K_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,K=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.clientY,B=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let D=N,E=(w)=>{D=w.clientY;let W=Math.min(Math.max(B-(w.clientY-N),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${W}px`),G)G.current=W;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let w=Math.min(Math.max(B-(D-N),100),window.innerHeight*0.5);if(G)G.current=w;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("dockHeight",String(Math.round(w))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",H)}).current,L=g((Q)=>{Q.preventDefault();let V=_.current;if(!V)return;let N=Q.touches[0];if(!N)return;let B=N.clientY,U=G?.current||200,D=Q.currentTarget;D.classList.add("dragging"),document.body.style.userSelect="none";let E=(w)=>{let W=w.touches[0];if(!W)return;w.preventDefault();let z=Math.min(Math.max(U-(W.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${z}px`),G)G.current=z;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{D.classList.remove("dragging"),document.body.style.userSelect="",K_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",E,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:q,handleDockSplitterMouseDown:K,handleDockSplitterTouchStart:L}}T0();function b7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var IX=b7("warning",30000),CX=b7("finalize",120000),PX=b7("refresh",30000),fX=30000;function RX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function F6(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function SX(_=30000){let[,$]=C(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function gX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function I2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function LD(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function n$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function W$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function C2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return W$(_)?"Compacting context":"Working..."}function uX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function U6(_,$=Date.now()){let j=I2(_);if(j===null)return null;return uX(Math.max(0,$-j))}function bX(_,$=Date.now()){let j=LD(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${uX(G)}`}T0();function oY(_={}){o1(_)}function sY(){let[_,$]=C(!1);if(u(()=>{let Z=(Y)=>{let q=U5(Y?.detail?.section);if(q)try{window.__piclawSettingsRequestedSection=q}catch(K){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=P2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(u(()=>{Promise.resolve().then(() => (iY(),dY)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
            <div class="settings-dialog-backdrop" onClick=${()=>$(!1)}>
                <div class="settings-dialog settings-dialog-loading-shell" data-testid="settings-dialog">
                    <div class="settings-loading-shell-body">
                        <span class="settings-spinner"></span>
                        <span>Loading settings…</span>
                    </div>
                </div>
            </div>
        `;return F`
        <div class="settings-dialog-backdrop" onClick=${(Z)=>{if(Z.target===Z.currentTarget)$(!1)}}>
            <${j} onClose=${()=>$(!1)} />
        </div>
    `}T0();function yW(_,$){return new URL(String(_||""),$).toString()}function aY(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},q=yW(Z,window.location.href);if(Y)window.history.replaceState(null,"",q);else window.history.pushState(null,"",q);$(window.location.href)},[]);return{locationParams:Z0(()=>new URL(_).searchParams,[_]),navigate:j}}T0();T0();function tY(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function X9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var TW=400,Y9=60,xW=220,q9="mdPreviewHeight";function IW(){return tY(localStorage,q9,Y9,xW)}function r2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(IW),q=g(null),K=g(null),L=g(""),Q=g(_);return Q.current=_,u(()=>{let B=()=>{let D=Q.current?.()||"";if(D===L.current)return;L.current=D;try{let E=G1(D,null);Z(E)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let U=setInterval(B,TW);return()=>clearInterval(U)},[]),u(()=>{if(q.current&&G)E$(q.current).catch((B)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",B,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let U=B.clientY,D=K.current?.offsetHeight||X,E=K.current?.parentElement,H=E?E.offsetHeight*0.7:500,w=B.currentTarget;w.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let W=(T)=>{let I=Math.min(Math.max(D-(T.clientY-U),Y9),H);Y(I)},z=()=>{w.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",X9(localStorage,q9,K.current?.offsetHeight||X),document.removeEventListener("mousemove",W),document.removeEventListener("mouseup",z)};document.addEventListener("mousemove",W),document.addEventListener("mouseup",z)}}
            onTouchStart=${(B)=>{B.preventDefault();let U=B.touches[0];if(!U)return;let D=U.clientY,E=K.current?.offsetHeight||X,H=K.current?.parentElement,w=H?H.offsetHeight*0.7:500,W=B.currentTarget;W.classList.add("dragging"),document.body.style.userSelect="none";let z=(I)=>{let J=I.touches[0];if(!J)return;I.preventDefault();let k=Math.min(Math.max(E-(J.clientY-D),Y9),w);Y(k)},T=()=>{W.classList.remove("dragging"),document.body.style.userSelect="",X9(localStorage,q9,K.current?.offsetHeight||X),document.removeEventListener("touchmove",z),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",z,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}}
        ></div>
        <div class="md-preview-panel" ref=${K} style=${{height:X+"px"}}>
            <div class="md-preview-header">
                <span class="md-preview-title">Preview</span>
                <button class="md-preview-close" onClick=${j} title="Close preview" aria-label="Close preview">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>
            <div
                class="md-preview-body post-content"
                ref=${q}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function eY(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function CW(_){return _==="error"?"Could not open branch window":"Opening branch…"}function _q(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${CW(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function $q(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:q,handleTabActivate:K,previewTabs:L,diffTabs:Q,handleTabTogglePreview:V,handleTabToggleDiff:N,editorContainerRef:B,getPaneContent:U,panePopoutPath:D}=_,E=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${E&&F`
          <div class="pane-popout-hover-zone" aria-hidden="true"></div>
          <div class="pane-popout-controls" role="toolbar" aria-label=${H}>
            <details class="pane-popout-controls-menu">
              <summary
                class="pane-popout-controls-trigger pane-popout-controls-icon-button"
                aria-label=${H}
                title=${H}
              >
                <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M3 4.75h10" />
                  <path d="M5 8h8" />
                  <path d="M7 11.25h6" />
                </svg>
              </summary>
              <div class="pane-popout-controls-panel">
                ${Y.length>1&&F`
                  <div class="pane-popout-controls-section">
                    <div class="pane-popout-controls-section-title">Open panes</div>
                    <div class="pane-popout-controls-list">
                      ${Y.map((w)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${w.id===q?" active":""}`}
                          onClick=${(W)=>{K(w.id),W.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${w.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${q&&Q.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(w)=>{N(q),w.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${q&&L.has(q)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(w)=>{V(q),w.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?F`<div class="editor-pane-host" ref=${B}></div>`:F`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${D||"No pane path provided."}</p>
            </div>
          `}
        ${j&&q&&L.has(q)&&F`
          <${r2}
            getContent=${U}
            path=${q}
            onClose=${()=>V(q)}
          />
        `}
      </div>
    </div>
  `}T0();T0();function d2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function PW(_,$){let j=d2(_),G=d2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function z6(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function L9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function fW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function RW(_,$,j=0,G=(Z)=>Z){let Z=d2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=fW(X.length,j),q=X.map((K)=>d2(G(K)));for(let K of Y)if(q[K].startsWith(Z))return K;for(let K of Y)if(q[K].includes(Z))return K;return-1}function K9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if(PW(X,$))return j}return RW(Z,$,0,G)}S_();function i2(_){return String(_||"").trim().toLowerCase()}function V9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return i2($[1]||"")}function SW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=i2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function jq(_,$,j={}){let G=V9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return SW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return i2(X?.agent_name).startsWith(G)})}function Q9(_){let $=i2(_);return $?`@${$} `:""}function Gq(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function Zq(_,$,j={}){if(!_||_.isComposing)return!1;if(!Gq(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function B9(_,$={}){if(!Gq($))return!1;return String(_||"")==="@"}function N9(_){let $=F9(_);return $?`@${$}`:""}function F9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function o2(_,$=""){let j=String(_||""),G=F9(j),Z=F9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function gW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function s2(_,$={}){let j=N9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=gW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function Xq(_,$,j){let G=N9(_),Z=N9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function a2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function t2({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function e2(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function Yq(_,$={}){return e2(_,$)==="dot"}T0();var qq=350;function uW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function bW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let q=uW(j);return{show:!0,statusClass:j,label:q,title:`Connection: ${q}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):qq,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function U9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):qq,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return u(()=>{if(_==="disconnected"){let q=Date.now();Z((K)=>K??q),Y(q);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let q=j-(Date.now()-G);if(q<=0)return;let K=0,L=0,Q=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}K=requestAnimationFrame(()=>{L=requestAnimationFrame(()=>{Y(Date.now())})})},q);return()=>{if(clearTimeout(Q),K)cancelAnimationFrame(K);if(L)cancelAnimationFrame(L)}},[_,G,j]),Z0(()=>bW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}T0();function q1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let q=`${_}-file-pill`,K=`${_}-file-name`,L=`${_}-file-remove`,Q=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${q} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${K}>${$}</span>
      ${G&&F`
        <button
          class=${L}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function H9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function vW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function mW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function E9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=f1(_),Z=vW(_),X=mW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function Lq(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let q=/[\s\n]$/.test(G)?"":" ";return`${G}${q}${Y}`}function Kq(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let q=String(Y[0].transcript||"").trim();if(!q)continue;if(Y.isFinal)j=`${j} ${q}`.trim();else G=`${G} ${q}`.trim()}return{finalText:j,interimText:G}}function D9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var cW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],Vq="piclaw_compose_history";function lW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function hW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return Vq;return`${Vq}:${encodeURIComponent($)}`}function pW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),q=Boolean(X?.archived_at);if(Y!==q)return Y?1:-1;let K=String(Z?.agent_name||"").trim(),L=String(X?.agent_name||"").trim(),Q=K.localeCompare(L,void 0,{sensitivity:"base"});if(Q!==0)return Q;let V=String(Z?.chat_jid||"").trim(),N=String(X?.chat_jid||"").trim();return V.localeCompare(N,void 0,{sensitivity:"base"})}),G}function nW(_){return Boolean(_?.is_active&&!_?.archived_at)}function rW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function Qq(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function dW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function Bq(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function iW(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function oW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function sW(_){return _==="abort"||_==="compacting"}function aW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function tW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,q="Compact context",K=X!=null?`Context: ${O6(X)} / ${O6(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,L=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",V=L?`${K} — ${Q||"Smart compaction"} · ${L}`:`${K} — ${"Compact context"}`,N=9,B=2*Math.PI*9,U=Z/100*B,D=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${L?" is-compacting":""}`}
            type="button"
            title=${V}
            aria-label=${L?`Smart compaction ${L}`:"Compact context"}
            onClick=${(E)=>{E.preventDefault(),E.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${D}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${B}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${L&&F`<span class="compose-context-pie-timer">${L}</span>`}
        </button>
    `}function O6(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function eW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function Nq(_,$){let j=Number(_?.contextWindow??_?.context_window),G=eW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${O6(G)} tokens, but this model only fits ${O6(j)}. Compact first.`,tokens:G,contextWindow:j}}function W9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${O6($)} ctx`}function _z(_,$){let j=typeof _==="string"?_.trim():"",G=W9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function $z(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function Hq(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let V=X.trim();if(!V)continue;let N=V.indexOf("/"),B=N>0?V.slice(0,N).trim():"",U=N>0?V.slice(N+1).trim():V;Z.push({label:V,provider:B,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",q=typeof X.id==="string"?X.id.trim():"",K=$z(X.label,Y,q);if(!K)continue;let L=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:K,provider:Y,id:q,name:L,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function jz(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,W9(_.contextWindow)].filter(Boolean).join(" ")}function Gz(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=Hq($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function _8(_){return(typeof _==="string"?_.trim():"")||null}function Fq(_){return _8(_)?.toLowerCase()??null}function Uq(_,$){let j=Fq(_),G=Fq($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function Zz(_,$){let j=$&&typeof $==="object"?$:{},G=_8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=_8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&Uq(G,Z))return null;let X=_8(_??j.current??j.model);if(X&&Z&&!Uq(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function Xz(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let q=j[Z].trim();if(!q){Z+=1;continue}if(q==="Messages:"||q.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(q)){X=!0,Z+=1;let K=[];while(Z<j.length){let L=j[Z],Q=L.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;K.push(L.startsWith("  ")?L.slice(2):L),Z+=1}if(K.length>0)G.push(K.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function Eq(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function Yz(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=Eq(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function qz(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Folders:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=Eq(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function Lz(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function Kz(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Attachments:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(V)Z.push({id:V[1],label:(V[2]||"").trim()||`attachment:${V[1]}`,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),q=j.slice(X);return{content:[...Y,...q].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function Dq(_){let $=Xz(_||""),j=Yz($||""),G=qz(j.content||""),Z=Lz(G.content||""),X=Kz(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function Vz(_){let $=Dq(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function Qz(_){let{queuedItem:$,buildDraft:j=Vz,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:q,onSetFolderRefs:K,onSetMessageRefs:L,setContent:Q,textareaRef:V,resizeTextarea:N=()=>{},scheduleTimeout:B=(w,W=0)=>setTimeout(w,W),scheduleRaf:U=(w)=>requestAnimationFrame(w),logger:D=console}=_||{};if(!$)return!1;let E=j($?.content||""),H=E.content;return D?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:E.fileRefs?.length,folderRefs:E.folderRefs?.length,messageRefs:E.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),q?.(E.fileRefs),K?.(E.folderRefs),L?.(E.messageRefs),Q?.(H),U(()=>{let w=V?.current;if(!w)return;if(w.value=H,typeof w.dispatchEvent==="function")w.dispatchEvent(new Event("input",{bubbles:!0}));N();let W=H.length;w.selectionStart=W,w.selectionEnd=W,w.focus()}),B(()=>{try{G?.($)}catch(w){D?.warn?.("[compose-box] Failed to remove returned queued follow-up.",w)}},0),!0}function z9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,q)=>{let K=typeof Y?.content==="string"?Y.content:"",L=Dq(K);if(!L.text.trim()&&L.fileRefs.length===0&&L.folderRefs.length===0&&L.messageRefs.length===0&&L.attachmentRefs.length===0)return null;let Q=q>0,V=q<_.length-1,N=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${K}>
                            ${L.text.trim()&&F`<div class="compose-queue-stack-text">${L.text}</div>`}
                            ${(L.messageRefs.length>0||L.fileRefs.length>0||L.folderRefs.length>0||L.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${L.messageRefs.map((B)=>F`
                                        <${q1}
                                            key=${"queue-msg-"+B}
                                            prefix="compose"
                                            label=${"msg:"+B}
                                            title=${"Message reference: "+B}
                                            icon="message"
                                        />
                                    `)}
                                    ${L.fileRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-file-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${L.folderRefs.map((B)=>{let U=B.split("/").pop()||B;return F`
                                            <${q1}
                                                key=${"queue-folder-"+B}
                                                prefix="compose"
                                                label=${U}
                                                title=${B}
                                                icon="folder"
                                                onClick=${()=>X?.(B)}
                                            />
                                        `})}
                                    ${L.attachmentRefs.map((B)=>F`
                                        <${q1}
                                            key=${"queue-attachment-"+B.id}
                                            prefix="compose"
                                            label=${B.label}
                                            title=${B.raw}
                                        />
                                    `)}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            ${_.length>1&&F`
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-up"
                                    type="button"
                                    title="Move up"
                                    aria-label="Move up in queue"
                                    disabled=${!Q}
                                    onClick=${()=>Q&&G?.(q,q-1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="18 15 12 9 6 15"></polyline>
                                    </svg>
                                </button>
                                <button
                                    class="compose-queue-stack-move-btn"
                                    data-action="move-down"
                                    type="button"
                                    title="Move down"
                                    aria-label="Move down in queue"
                                    disabled=${!V}
                                    onClick=${()=>V&&G?.(q,q+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${N&&F`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(B)=>{B.stopPropagation(),Z?.(Y)}}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                                    </svg>
                                </button>
                            `}
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Y)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn queue-remove"
                                data-action="remove"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Y)}
                            >
                                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>
                    </div>
                `})}
        </div>
    `}function Wq({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:q,fileRefs:K=[],onRemoveFileRef:L,onClearFileRefs:Q,folderRefs:V=[],onRemoveFolderRef:N,onClearFolderRefs:B,messageRefs:U=[],onRemoveMessageRef:D,onClearMessageRefs:E,activeModel:H=null,agentModelsPayload:w=null,modelUsage:W=null,thinkingLevel:z=null,supportsThinking:T=!1,contextUsage:I=null,onContextCompact:J,notificationsEnabled:k=!1,notificationPermission:A="default",onToggleNotifications:O,onModelChange:M,onModelStateChange:x,activeEditorPath:f=null,onAttachEditorFile:S,onOpenFilePill:v,followupQueueItems:l=[],onInjectQueuedFollowup:h,onRemoveQueuedFollowup:r,onMoveQueuedFollowup:b,onSubmitIntercept:e,onMessageResponse:z0,isAgentActive:K0=!1,activeChatAgents:L0=[],currentChatJid:X0="web:default",connectionStatus:B0="connected",stateAccessFailed:_0=!1,onSetFileRefs:G0,onSetFolderRefs:N0,onSetMessageRefs:W0,onSubmitError:d,onSwitchChat:j0,onRenameSession:A0,isRenameSessionInProgress:P0=!1,onCreateSession:b0,onCreateRootSession:c0,onDeleteSession:X_,onPurgeArchivedSession:l0,onRestoreSession:__,showQueueStack:f0=!0,statusNotice:p0=null,extensionWorkingState:R0=null,prefillRequest:d0=null}){let[n0,U_]=C(""),[o0,h0]=C(""),[M0,V_]=C(!1),[s0,O_]=C(!1),[E0,S0]=C("or"),[I0,a0]=C([]),[A_,Q_]=C(!1),[D_,E_]=C([]),[M_,$0]=C(0),[O0,D0]=C(!1),v0=g(null),[m0,s]=C([]),[o,t]=C(0),[Y0,q0]=C(!1),[k0,t0]=C(!1),[u0,U0]=C(!1),[y0,j_]=C(!1),[g0,G_]=C([]),[L_,W_]=C(0),[i0,n_]=C(0),[y_,i]=C(!1),[J0,Y_]=C(!1),[B_,h_]=C(0),[N1,g_]=C(null),[J1,C_]=C(null),[w_,A1]=C(()=>E9()),[z_,k_]=C({kind:"idle",title:"",detail:""}),[F1,v_]=C(()=>Date.now()),[r_,s_]=C(0),H_=g(null),x1=g(null),U1=g(null),u1=g(null),k1=g(null),e1=g(null),u4=g(null),A$=g(null),a_=g({value:"",updatedAt:0}),m_=g(null),M1=g(""),H1=g(""),_1=g(""),k$=g(""),M$=g(!1),_$=g(!1),T_=g(!1),L1=g(0),w$=g(!1),b4=200,$$=hW(X0),v4=(y)=>{let m=new Set,n=[];for(let Q0 of y||[]){if(typeof Q0!=="string")continue;let C0=Q0.trim();if(!C0||m.has(C0))continue;m.add(C0),n.push(C0)}return n},m4=(y=$$)=>{let m=W1(y);if(!m)return[];try{let n=JSON.parse(m);if(!Array.isArray(n))return[];return v4(n)}catch{return[]}},y$=(y,m=$$)=>{K_(m,JSON.stringify(y))},T$=g(m4($$)),b1=g(-1),v1=g(""),c4=g("");u(()=>{T$.current=m4($$),b1.current=-1,v1.current=""},[$$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((y)=>y.json()).then((y)=>{if(y?.searchMatchMode)S0(y.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let y=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(X0||"web:default")}`).then((n)=>n.ok?n.json():null).then((n)=>{if(y||!n?.commands)return;v0.current=n.commands.map((Q0)=>({name:Q0.name,description:Q0.description||""}))}).catch((n)=>{console.debug("[compose] failed to fetch dynamic commands",n)}),()=>{y=!0}},[X0]),u(()=>{let y=lW(d0,c4.current,j);if(!y.shouldApply)return;c4.current=y.nextToken,g_(null),U_(y.text),H0(y.text),p_(y.text),requestAnimationFrame(()=>{x0();let m=H_.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let n=y.text.length;m.setSelectionRange?.(n,n)})},[d0,j]),u(()=>{A1(E9())},[]);let K1=n0.trim()||I0.length>0||K.length>0||V.length>0||U.length>0,f_=z_.kind!=="idle",l4=z_.kind==="requesting_permission"||z_.kind==="listening",I1=!j&&Boolean(w_?.showButton),x$=z_.kind==="requesting_permission"||z_.kind==="listening",h4=x$?"Stop voice input":w_?.title||"Voice input",R5=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),S5=typeof window<"u"&&typeof Notification<"u",Z4=typeof window<"u"?Boolean(window.isSecureContext):!1,p4=S5&&Z4&&A!=="denied",n4=A==="granted"&&k,V1=W$(p0),C$=C2(p0),X4=typeof p0?.detail==="string"&&p0.detail.trim()?p0.detail.trim():"",Y4=V1?U6(p0,F1):null,m1=aW(R0,r_),E1=R0?.indicator&&typeof R0.indicator==="object"?R0.indicator:null,g5=n4?"Disable notifications":"Enable notifications",q4=I0.length>0||K.length>0||V.length>0||U.length>0,j$=U9(_0?B0:"connected"),t_=j$.label,P$=j$.title,r4=dW(K0,K1,V1),G$=oW(K0,V1),g6=(Array.isArray(L0)?L0:[]).filter((y)=>!y?.archived_at),u_=(()=>{for(let y of Array.isArray(L0)?L0:[]){let m=typeof y?.chat_jid==="string"?y.chat_jid.trim():"";if(m&&m===X0)return y}return null})(),p8=Boolean(u_&&u_.chat_jid===(u_.root_chat_jid||u_.chat_jid)),n8=Boolean(p8&&(u_?.chat_jid||X0)==="web:default"),C1=(()=>{let y=typeof u_?.parent_branch_id==="string"?u_.parent_branch_id.trim():"",m=typeof u_?.branch_id==="string"?u_.branch_id.trim():"";if(!u_||!y||!m||u_.archived_at)return null;if((Array.isArray(L0)?L0:[]).filter((C0)=>{let F_=typeof C0?.parent_branch_id==="string"?C0.parent_branch_id.trim():"";return F_&&F_===m}).length>0)return null;return(Array.isArray(L0)?L0:[]).find((C0)=>{let F_=typeof C0?.branch_id==="string"?C0.branch_id.trim():"";return F_&&F_===y&&!C0?.archived_at})||null})(),L4=Z0(()=>pW(L0,X0),[L0,X0]),f$=L4.length>0,R$=f$&&typeof j0==="function",S$=f$&&typeof __==="function",d4=Boolean(P0||w$.current),Z$=!j&&typeof A0==="function"&&!d4,X$=!j&&typeof b0==="function",K4=!j&&typeof c0==="function",V4=!j&&!K0&&!J0&&Boolean(C1?.chat_jid),Y$=!j&&typeof X_==="function"&&!n8,u6=!j&&typeof l0==="function",q$=!j&&(R$||S$||Z$||X$||K4||V4||Y$||u6),b6=Gz(H,w),u5=b6.showPicker,b5=b6.label,v5=T&&z?` (${z})`:"",r8=v5.trim()?`${z}`:"",R=Zz(H,w),c=typeof W?.hint_short==="string"?W.hint_short.trim():"",p=[r8||null,R?.label||null,c||null].filter(Boolean).join(" • "),a=[H?`Current model: ${b5}${v5}`:null,R?.title||null,W?.plan?`Plan: ${W.plan}`:null,c||null,W?.primary?.reset_description||null,W?.secondary?.reset_description||null].filter(Boolean),F0=k0?"Switching model…":a.join(" • ")||(u5?"Select a model (tap to open model picker)":`Current model: ${b5}${v5} (tap to open model picker)`),V0=!j&&(u5||I&&I.percent!=null),w0=(y)=>{if(!y||typeof y!=="object")return;let m=y.model??y.current;if(typeof x==="function")x({...y,model:m??null,thinking_level:y.thinking_level??null,thinking_level_label:y.thinking_level_label??null,supports_thinking:y.supports_thinking,provider_usage:y.provider_usage??null});if(m&&typeof M==="function")M(m)},x0=(y)=>{let m=y||H_.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},H0=(y)=>{if(!y.startsWith("/")||y.includes(`
`)){D0(!1),E_([]);return}let m=y.toLowerCase().split(" ")[0];if(m.length<1){D0(!1),E_([]);return}let Q0=(v0.current||cW).filter((C0)=>C0.name.startsWith(m)||C0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(Q0.length>0&&!(Q0.length===1&&Q0[0].name===m))q0(!1),s([]),E_(Q0),$0(0),D0(!0);else D0(!1),E_([])},e0=(y)=>{let m=n0,n=m.indexOf(" "),Q0=n>=0?m.slice(n):"",C0=y.name+Q0;U_(C0),D0(!1),E_([]),requestAnimationFrame(()=>{let F_=H_.current;if(!F_)return;let i_=C0.length;F_.selectionStart=i_,F_.selectionEnd=i_,F_.focus()})},p_=(y)=>{if(B9(y,{searchMode:j,showSessionSwitcherButton:q$})){q0(!1),s([]);return}if(V9(y)==null){q0(!1),s([]);return}let m=jq(g6,y,{currentChatJid:X0});if(m.length>0&&!(m.length===1&&Q9(m[0].agent_name).trim().toLowerCase()===String(y||"").trim().toLowerCase()))D0(!1),E_([]),s(m),t(0),q0(!0);else q0(!1),s([])},$1=(y)=>{let m=Q9(y?.agent_name);if(!m)return;U_(m),q0(!1),s([]),requestAnimationFrame(()=>{let n=H_.current;if(!n)return;let Q0=m.length;n.selectionStart=Q0,n.selectionEnd=Q0,n.focus()})},L$=()=>{if(j||!R$&&!S$&&!Z$&&!X$&&!Y$)return!1;return a_.current={value:"",updatedAt:0},U0(!1),D0(!1),E_([]),q0(!1),s([]),j_(!0),!0},Mj=(y)=>{if(y?.preventDefault?.(),y?.stopPropagation?.(),j||!R$&&!S$&&!Z$&&!X$&&!Y$)return;if(y0){a_.current={value:"",updatedAt:0},j_(!1);return}L$()},wj=(y)=>{let m=typeof y==="string"?y.trim():"";if(j_(!1),!m||m===X0){requestAnimationFrame(()=>H_.current?.focus());return}j0?.(m)},yj=async(y)=>{let m=typeof y==="string"?y.trim():"";if(j_(!1),!m||typeof __!=="function"){requestAnimationFrame(()=>H_.current?.focus());return}try{await __(m)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>H_.current?.focus())}},d_=Z0(()=>{let y=[];for(let m of L4){let n=Boolean(m?.archived_at),Q0=typeof m?.agent_name==="string"?m.agent_name.trim():"",C0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!Q0||!C0)continue;y.push({type:"session",key:`session:${C0}`,label:`@${Q0} — ${C0}${m?.is_active?" active":""}${n?" archived":""}`,chat:m,disabled:n?!S$:!R$})}if(X$)y.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(K4)y.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)y.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!V4});if(Z$)y.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:d4});if(Y$)y.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return y},[L4,S$,R$,X$,K4,C1,V4,Z$,Y$,d4]),Tj=async(y)=>{if(y?.preventDefault)y.preventDefault();if(y?.stopPropagation)y.stopPropagation();if(typeof A0!=="function"||P0||w$.current)return;w$.current=!0,j_(!1);try{await A0()}catch(m){console.warn("Failed to rename session:",m)}finally{w$.current=!1}requestAnimationFrame(()=>H_.current?.focus())},xj=async()=>{if(typeof b0!=="function")return;j_(!1);try{await b0()}catch(y){console.warn("Failed to create session:",y)}requestAnimationFrame(()=>H_.current?.focus())},Ij=async()=>{if(typeof c0!=="function")return;j_(!1);let y=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(y||"").trim();if(!m){requestAnimationFrame(()=>H_.current?.focus());return}try{await c0(m)}catch(n){console.warn("Failed to create root session:",n)}requestAnimationFrame(()=>H_.current?.focus())},Cj=async()=>{let y=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!y||J0||K0)return;j_(!1),g_(null),C_(null),Y_(!0);try{let m=await z1("default","/rollup",null,[],null,X0);z0?.(m),_?.(m);let n=m?.command;if(n?.status==="error"){let C0=n?.message||"Failed to merge current session with parent.";g_(C0),d?.(C0);return}let Q0=typeof n?.rolled_up_to==="string"&&n.rolled_up_to.trim()?n.rolled_up_to.trim():y;j0?.(Q0)}catch(m){let n=m?.message||"Failed to merge current session with parent.";g_(n),d?.(n),console.warn("Failed to merge session with parent:",m)}finally{Y_(!1)}requestAnimationFrame(()=>H_.current?.focus())},Pj=async()=>{if(typeof X_!=="function")return;j_(!1);try{await X_(X0)}catch(y){console.warn("Failed to delete session:",y)}requestAnimationFrame(()=>H_.current?.focus())},g$=(y)=>{if(j)h0(y);else U_(y),H0(y),p_(y);requestAnimationFrame(()=>x0())},WN=(y)=>{let m=j?o0:n0,n=m&&!m.endsWith(`
`)?`
`:"",Q0=`${m}${n}${y}`.trimStart();g$(Q0)},d8=P(()=>{requestAnimationFrame(()=>{let y=H_.current;if(!y)return;try{y.focus({preventScroll:!0})}catch{y.focus()}})},[]),c1=P(()=>{k_({kind:"idle",title:"",detail:""})},[]),i8=P((y=H1.current,m=_1.current)=>{if(j)return;g$(Lq(M1.current,y,m))},[j]),l1=P(()=>{M$.current=!0;let y=m_.current;if(!y){c1();return}try{y.stop()}catch{m_.current=null,c1()}},[c1]),o8=P(()=>{if(g_(null),C_(null),m_.current){l1();return}if(!w_?.showButton)return;if(w_.mode==="fallback"){d8(),k_({kind:"guidance",title:w_.title||"Use keyboard dictation",detail:w_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!w_?.canStart||!w_?.recognitionCtor){k_({kind:"error",title:w_?.title||"Voice input unavailable",detail:w_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let y=new w_.recognitionCtor;if(m_.current=y,M1.current=String(n0||""),H1.current="",_1.current="",k$.current="",M$.current=!1,y.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",y.interimResults=!0,y.continuous=!1,"maxAlternatives"in y)y.maxAlternatives=1;y.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},y.onresult=(m)=>{let{finalText:n,interimText:Q0}=Kq(m?.results,m?.resultIndex||0);if(n)H1.current=`${H1.current} ${n}`.trim();_1.current=Q0,i8(),k_({kind:"listening",title:"Listening…",detail:Q0?`Heard: ${Q0}`:"Speak now. Tap the mic again to stop."})},y.onerror=(m)=>{let n=String(m?.error||"").trim();if(k$.current=n,m_.current=null,_1.current="",n==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:D9(n,w_)})},y.onend=()=>{let m=k$.current,n=M$.current,Q0=Boolean(H1.current.trim()||_1.current.trim());if(m_.current=null,M$.current=!1,k$.current="",_1.current.trim())H1.current=`${H1.current} ${_1.current}`.trim(),_1.current="";if(Q0)i8(H1.current,"");if(m&&m!=="aborted")return;if(!Q0&&!n){k_({kind:"error",title:"No speech detected",detail:D9("no-speech",w_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),d8(),y.start()}catch(y){m_.current=null,k_({kind:"error",title:"Voice input failed",detail:y?.message||"Could not start native browser speech recognition."})}},[i8,c1,n0,d8,w_,l1]),zN=(y)=>{let m=y?.command?.model_label;if(m)return m;let n=y?.command?.message;if(typeof n==="string"){let Q0=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(Q0?.[1])return Q0[1].trim()}return null},fj=async(y)=>{if(j||k0)return;g_(null),C_(null),t0(!0);try{let m=await z1("default",y,null,[],null,X0),n=zN(m);return w0({model:n??H??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await H9(w4,X0,w0),C_(Qq(y,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{t0(!1)}},ON=(y)=>{if(y.pointerType==="mouse")return;let m=H_.current?.value??(j?o0:n0);if(!Bq(y,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(w_?.canStart&&w_?.recognitionCtor)}))return;y.preventDefault(),_$.current=!0,T_.current=!0,o8()},s8=(y)=>{if(!_$.current)return;if(y?.preventDefault?.(),_$.current=!1,m_.current)l1()},JN=(y)=>{if(T_.current){T_.current=!1,y.preventDefault();return}o8()},AN=async()=>{await fj("/cycle-model")},a8=async(y)=>{let m=typeof y==="string"?y:typeof y?.label==="string"?y.label:"";if(!m||k0)return;let n=Nq(y,I);if(n.blocked){g_(null),C_(n.note);return}if(await fj(`/model ${m}`))U0(!1)},kN=(y)=>{if(!y||y.disabled)return;if(y.type==="session"){let m=y.chat;if(m?.archived_at)yj(m.chat_jid);else wj(m.chat_jid);return}if(y.type==="action"){if(y.action==="new"){xj();return}if(y.action==="new-root"){Ij();return}if(y.action==="rollup"){Cj();return}if(y.action==="rename"){Tj();return}if(y.action==="delete")Pj()}},MN=(y)=>{y.preventDefault(),y.stopPropagation(),a_.current={value:"",updatedAt:0},j_(!1),U0((m)=>!m)},wN=async()=>{if(j)return;J?.(),await i4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},yN=(y)=>{if(y==="queue"||y==="steer"||y==="auto")return y;return K0?"queue":void 0},i4=async(y,m,n={})=>{let Q0=typeof y==="string"?y:n0;if(/^\/settings\s*$/i.test(Q0.trim())){U_(""),requestAnimationFrame(()=>x0()),o1();return}if(/^\/help\s*$/i.test(Q0.trim())){U_(""),requestAnimationFrame(()=>x0()),o1({section:"keyboard"});return}let{includeMedia:C0=!0,includeFileRefs:F_=!0,includeFolderRefs:i_=!0,includeMessageRefs:c_=!0,clearAfterSubmit:P1=!0,recordHistory:w1=!0}=n||{},Rj=typeof y==="string"?y:y&&typeof y?.target?.value==="string"?y.target.value:n0,Sj=typeof Rj==="string"?Rj:"";if(!Sj.trim()&&(C0?I0.length===0:!0)&&(F_?K.length===0:!0)&&(i_?V.length===0:!0)&&(c_?U.length===0:!0))return;if(m_.current)l1();c1(),D0(!1),E_([]),q0(!1),s([]),j_(!1),g_(null),C_(null);let v6=C0?[...I0]:[],m6=F_?[...K]:[],c6=i_?[...V]:[],l6=c_?[...U]:[],Q4=Sj.trim();if(w1&&Q4){let B4=T$.current,Q1=v4(B4.filter((e8)=>e8!==Q4));if(Q1.push(Q4),Q1.length>200)Q1.splice(0,Q1.length-200);T$.current=Q1,y$(Q1),b1.current=-1,v1.current=""}let lN=()=>{if(C0)a0([...v6]);if(F_)G0?.(m6);if(i_)N0?.(c6);if(c_)W0?.(l6);U_(Q4),requestAnimationFrame(()=>x0())};if(P1)U_(""),a0([]),Q?.(),B?.(),E?.();(async()=>{try{let B4=await e?.({content:Q4,submitMode:m,fileRefs:m6,folderRefs:c6,messageRefs:l6,mediaFiles:v6});if(B4){_?.(B4);return}let Q1=[];for(let K$ of v6){let h6=await B7(K$);Q1.push(h6.id)}let e8=m6.length?`Files:
${m6.map((K$)=>`- ${K$}`).join(`
`)}`:"",hN=c6.length?`Folders:
${c6.map((K$)=>`- ${K$}`).join(`
`)}`:"",pN=l6.length?`Referenced messages:
${l6.map((K$)=>`- message:${K$}`).join(`
`)}`:"",nN=Q1.length?`Attachments:
${Q1.map((K$,h6)=>{let dN=v6[h6]?.name||`attachment-${h6+1}`;return`- attachment:${K$} (${dN})`}).join(`
`)}`:"",rN=[Q4,e8,hN,pN,nN].filter(Boolean).join(`

`),u$=await z1("default",rN,null,Q1,yN(m),X0);if(z0?.(u$),u$?.command)w0({model:u$.command.model_label??H??null,thinking_level:u$.command.thinking_level,thinking_level_label:u$.command.thinking_level_label,supports_thinking:u$.command.supports_thinking}),await H9(w4,X0,w0);C_(Qq(Q4,u$)),_?.(u$)}catch(B4){if(P1)lN();let Q1=B4?.message||"Failed to send message.";g_(Q1),d?.(Q1),console.error("Failed to post:",B4)}})()},TN=(y)=>{h?.(y)},xN=P((y)=>{Qz({queuedItem:y,onRemoveQueuedFollowup:r,setSubmitError:g_,setSubmitNotice:C_,setMediaFiles:a0,onSetFileRefs:G0,onSetFolderRefs:N0,onSetMessageRefs:W0,setContent:U_,textareaRef:H_,resizeTextarea:x0})},[r,G0,N0,W0,x0]),m5=P((y)=>{if(j||!u0&&!y0||y?.isComposing)return!1;let m=()=>{y.preventDefault?.(),y.stopPropagation?.()},n=()=>{a_.current={value:"",updatedAt:0}};if(y.key==="Escape"){if(m(),n(),u0)U0(!1);if(y0)j_(!1);return!0}if(u0){if(y.key==="ArrowDown"){if(m(),n(),g0.length>0)W_((Q0)=>(Q0+1)%g0.length);return!0}if(y.key==="ArrowUp"){if(m(),n(),g0.length>0)W_((Q0)=>(Q0-1+g0.length)%g0.length);return!0}if((y.key==="Enter"||y.key==="Tab")&&g0.length>0)return m(),n(),a8(g0[Math.max(0,Math.min(L_,g0.length-1))]),!0;if(z6(y)&&g0.length>0){m();let Q0=L9(a_.current,y.key);a_.current=Q0;let C0=K9(g0,Q0.value,L_,(F_)=>jz(F_));if(C0>=0)W_(C0);return!0}}if(y0){if(y.key==="ArrowDown"){if(m(),n(),d_.length>0)n_((Q0)=>(Q0+1)%d_.length);return!0}if(y.key==="ArrowUp"){if(m(),n(),d_.length>0)n_((Q0)=>(Q0-1+d_.length)%d_.length);return!0}if((y.key==="Enter"||y.key==="Tab")&&d_.length>0)return m(),n(),kN(d_[Math.max(0,Math.min(i0,d_.length-1))]),!0;if(z6(y)&&d_.length>0){m();let Q0=L9(a_.current,y.key);a_.current=Q0;let C0=K9(d_,Q0.value,i0,(F_)=>F_.label);if(C0>=0)n_(C0);return!0}}return!1},[j,u0,y0,g0,L_,d_,i0,a8]),IN=(y)=>{if(y.isComposing)return;if(j&&y.key==="Escape"){y.preventDefault(),h0(""),q?.();return}if(m5(y))return;let m=H_.current?.value??(j?o0:n0);if(Bq(y,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(w_?.canStart&&w_?.recognitionCtor)})){y.preventDefault(),_$.current=!0,o8();return}if(Zq(y,m,{searchMode:j,showSessionSwitcherButton:q$})){y.preventDefault(),L$();return}if(Y0&&m0.length>0){let n=H_.current?.value??(j?o0:n0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))q0(!1),s([]);else{if(y.key==="ArrowDown"){y.preventDefault(),t((Q0)=>(Q0+1)%m0.length);return}if(y.key==="ArrowUp"){y.preventDefault(),t((Q0)=>(Q0-1+m0.length)%m0.length);return}if(y.key==="Tab"||y.key==="Enter"){y.preventDefault(),$1(m0[o]);return}if(y.key==="Escape"){y.preventDefault(),q0(!1),s([]);return}}}if(O0&&D_.length>0){let n=H_.current?.value??(j?o0:n0);if(!String(n||"").startsWith("/"))D0(!1),E_([]);else{if(y.key==="ArrowDown"){y.preventDefault(),$0((Q0)=>(Q0+1)%D_.length);return}if(y.key==="ArrowUp"){y.preventDefault(),$0((Q0)=>(Q0-1+D_.length)%D_.length);return}if(y.key==="Tab"){y.preventDefault(),e0(D_[M_]);return}if(y.key==="Enter"&&!y.shiftKey){if(!m.includes(" ")){y.preventDefault();let C0=D_[M_];D0(!1),E_([]),i4(C0.name);return}}if(y.key==="Escape"){y.preventDefault(),D0(!1),E_([]);return}}}if(!j&&(y.key==="ArrowUp"||y.key==="ArrowDown")&&!y.metaKey&&!y.ctrlKey&&!y.altKey&&!y.shiftKey){let n=H_.current;if(!n)return;let Q0=n.value||"",C0=n.selectionStart===0&&n.selectionEnd===0,F_=n.selectionStart===Q0.length&&n.selectionEnd===Q0.length;if(y.key==="ArrowUp"&&C0||y.key==="ArrowDown"&&F_){let i_=T$.current;if(!i_.length)return;y.preventDefault();let c_=b1.current;if(y.key==="ArrowUp"){if(c_===-1)v1.current=Q0,c_=i_.length-1;else if(c_>0)c_-=1;b1.current=c_,g$(i_[c_]||"")}else{if(c_===-1)return;if(c_<i_.length-1)c_+=1,b1.current=c_,g$(i_[c_]||"");else b1.current=-1,g$(v1.current||""),v1.current=""}requestAnimationFrame(()=>{let P1=H_.current;if(!P1)return;let w1=P1.value.length;P1.selectionStart=w1,P1.selectionEnd=w1});return}}if(y.key==="Enter"&&!y.shiftKey&&(y.ctrlKey||y.metaKey)){if(y.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:M0,attachments:s0})}else i4(m,"steer");return}if(y.key==="Enter"&&!y.shiftKey){if(y.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:M0,attachments:s0})}else i4(m);return}if(y.key==="Escape"){if(u0||y0||O0||Y0)return;y.preventDefault(),H_.current?.blur()}},CN=(y)=>{if(iW(y,_$.current)){if(y.preventDefault(),_$.current=!1,m_.current)l1()}},t8=(y)=>{let m=Array.from(y||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!m.length)return;a0((n)=>[...n,...m]),g_(null)},PN=(y)=>{t8(y.target.files),y.target.value=""},fN=(y)=>{if(j)return;y.preventDefault(),y.stopPropagation(),L1.current+=1,Q_(!0)},RN=(y)=>{if(j)return;if(y.preventDefault(),y.stopPropagation(),L1.current=Math.max(0,L1.current-1),L1.current===0)Q_(!1)},SN=(y)=>{if(j)return;if(y.preventDefault(),y.stopPropagation(),y.dataTransfer)y.dataTransfer.dropEffect="copy";Q_(!0)},gN=(y)=>{if(j)return;y.preventDefault(),y.stopPropagation(),L1.current=0,Q_(!1),t8(y.dataTransfer?.files||[])},uN=(y)=>{if(j)return;let m=y.clipboardData?.items;if(!m||!m.length)return;let n=[];for(let Q0 of m){if(Q0.kind!=="file")continue;let C0=Q0.getAsFile?.();if(C0)n.push(C0)}if(n.length>0)y.preventDefault(),t8(n)},bN=(y)=>{a0((m)=>m.filter((n,Q0)=>Q0!==y))},vN=()=>{g_(null),a0([]),Q?.(),B?.(),E?.()},mN=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((y)=>{let{latitude:m,longitude:n,accuracy:Q0}=y.coords,C0=`${m.toFixed(5)}, ${n.toFixed(5)}`,F_=Number.isFinite(Q0)?` ±${Math.round(Q0)}m`:"",i_=`https://maps.google.com/?q=${m},${n}`,c_=`Location: ${C0}${F_} ${i_}`;WN(c_)},(y)=>{let m=y?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!u0)return;a_.current={value:"",updatedAt:0},i(!0),w4(X0).then((y)=>{G_(Hq(y)),w0(y)}).catch((y)=>{console.warn("Failed to load model list:",y),G_([])}).finally(()=>{i(!1)})},[u0,H]),u(()=>{if(j)U0(!1),j_(!1),D0(!1),E_([]),q0(!1),s([])},[j]),u(()=>{if(y0&&!q$)j_(!1)},[y0,q$]),u(()=>{if(!u0)return;let y=g0.findIndex((m)=>m?.label===H);W_(y>=0?y:0)},[u0,g0,H]),u(()=>{if(!y0)return;n_(rW(d_,X0)),a_.current={value:"",updatedAt:0}},[y0,X0,d_]),u(()=>{if(!u0)return;let y=(m)=>{let n=u1.current,Q0=k1.current,C0=m.target;if(n&&n.contains(C0))return;if(Q0&&Q0.contains(C0))return;U0(!1)};return document.addEventListener("pointerdown",y),()=>document.removeEventListener("pointerdown",y)},[u0]),u(()=>{if(!y0)return;let y=(m)=>{let n=e1.current,Q0=u4.current,C0=m.target;if(n&&n.contains(C0))return;if(Q0&&Q0.contains(C0))return;j_(!1)};return document.addEventListener("pointerdown",y),()=>document.removeEventListener("pointerdown",y)},[y0]),u(()=>{if(j||!u0&&!y0)return;let y=(m)=>{m5(m)};return document.addEventListener("keydown",y,!0),()=>document.removeEventListener("keydown",y,!0)},[j,u0,y0,m5]),u(()=>{if(!u0)return;let y=u1.current;y?.focus?.(),y?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[u0,L_,g0]),u(()=>{if(!y0)return;let y=e1.current;y?.focus?.(),y?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[y0,i0,d_.length]),u(()=>{if(!Y0||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[Y0,o,m0.length]),u(()=>{if(!O0||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[O0,M_,D_.length]),u(()=>{let y=(n)=>{if(!n||typeof n!=="object")return!1;if(n.isContentEditable)return!0;if(typeof n.closest!=="function")return!1;return Boolean(n.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(n)=>{if(n.ctrlKey||n.metaKey||n.altKey)return;let Q0=H_.current;if(!Q0)return;let C0=document.activeElement===Q0;if(n.key==="Escape"&&!C0&&!y(n.target)){n.preventDefault(),Q0.focus();return}if(n.key==="/"&&!C0&&!y(n.target))n.preventDefault(),g$("/"),requestAnimationFrame(()=>{Q0.focus(),Q0.selectionStart=1,Q0.selectionEnd=1,H0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),u(()=>{let y=()=>{let F_=A$.current?.clientWidth||0;h_((i_)=>i_===F_?i_:F_)};y();let m=A$.current,n=0,Q0=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,y()})},C0=null;if(m&&typeof ResizeObserver<"u")C0=new ResizeObserver(()=>Q0()),C0.observe(m);if(typeof window<"u")window.addEventListener("resize",Q0);return()=>{if(n)cancelAnimationFrame(n);if(C0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",Q0)}},[j,H,u_?.agent_name,q$,I?.percent]);let cN=(y)=>{let m=y.target.value;if(m_.current&&y?.isTrusted)l1();if(g_(null),C_(null),z_.kind==="guidance"||z_.kind==="error")c1();if(y0)j_(!1);if(x0(y.target),B9(m,{searchMode:j,showSessionSwitcherButton:q$})){g$(""),requestAnimationFrame(()=>{let n=H_.current;if(!n)return;n.value="",n.selectionStart=0,n.selectionEnd=0,n.focus()}),L$();return}g$(m)};return u(()=>{requestAnimationFrame(()=>x0())},[n0,o0,j]),u(()=>{if(!j)return;if(m_.current)l1();return},[j,l1]),u(()=>{if(m_.current)l1();c1()},[X0,c1,l1]),u(()=>{return()=>{if(!m_.current)return;try{m_.current.stop()}catch(y){console.debug("[compose] failed to stop speech recognition during cleanup",y)}m_.current=null}},[]),u(()=>{if(!V1)return;v_(Date.now());let y=setInterval(()=>v_(Date.now()),1000);return()=>clearInterval(y)},[V1,p0?.started_at,p0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let y=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,m=setInterval(()=>{s_((n)=>(n+1)%E1.frames.length)},y);return()=>clearInterval(m)},[E1]),u(()=>{if(j)return;p_(n0)},[g6,X0,n0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${f_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${z_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${t2({pulsing:l4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${z_.title}</span>
                    </div>
                    ${z_.detail&&F`<div class="compose-inline-status-detail">${z_.detail}</div>`}
                </div>
            `}
            ${f0&&!j&&F`
                <${z9}
                    items=${l}
                    onInjectQueuedFollowup=${TN}
                    onRemoveQueuedFollowup=${r}
                    onMoveQueuedFollowup=${b}
                    onReturnQueuedFollowup=${xN}
                    onOpenFilePill=${v}
                />
            `}
            ${m1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${m1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${m1.indicatorText}</span>`:m1.animateDot?F`<span class=${t2({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${m1.title}</span>
                    </div>
                </div>
            `}
            ${p0&&!V1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${X4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${t2({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C$}</span>
                        ${Y4&&F`<span class="compose-inline-status-elapsed">${Y4}</span>`}
                    </div>
                    ${X4&&F`<div class="compose-inline-status-detail">${X4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:G1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${fN}
                onDragOver=${SN}
                onDragLeave=${RN}
                onDrop=${gN}
            >
                ${q$&&F`
                    <div
                        ref=${u4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${y0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${Mj}
                            title=${u_?.chat_jid||X0}
                            aria-label=${u_?.agent_name?`Manage sessions for @${u_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${y0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${u_?.agent_name?`@${u_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${q4&&F`
                        <div class="compose-file-refs">
                            ${U.map((y)=>{return F`
                                    <${q1}
                                        key=${"msg-"+y}
                                        prefix="compose"
                                        label=${"msg:"+y}
                                        title=${"Message reference: "+y}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>D?.(y)}
                                    />
                                `})}
                            ${K.map((y)=>{let m=y.split("/").pop()||y;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${m}
                                        title=${y}
                                        onClick=${()=>v?.(y)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>L?.(y)}
                                    />
                                `})}
                            ${V.map((y)=>{let m=y.split("/").pop()||y;return F`
                                    <${q1}
                                        prefix="compose"
                                        label=${m}
                                        title=${y}
                                        icon="folder"
                                        onClick=${()=>v?.(y)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>N?.(y)}
                                    />
                                `})}
                            ${I0.map((y,m)=>{let n=y?.name||`attachment-${m+1}`;return F`
                                    <${q1}
                                        key=${n+m}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>bN(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${vN}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${H_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?o0:n0}
                        onInput=${cN}
                        onKeyDown=${IN}
                        onKeyUp=${CN}
                        onPaste=${uN}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${Y0&&m0.length>0&&F`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${m0.map((y,m)=>F`
                                <div
                                    key=${y.chat_jid||y.agent_name}
                                    class=${`slash-item${m===o?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),$1(y)}}
                                    onMouseEnter=${()=>t(m)}
                                >
                                    <span class="slash-name">@${y.agent_name}</span>
                                    <span class="slash-desc">${y.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${O0&&D_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${D_.map((y,m)=>F`
                                <div
                                    key=${y.name}
                                    class=${`slash-item${m===M_?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),e0(y)}}
                                    onMouseEnter=${()=>$0(m)}
                                >
                                    <span class="slash-name">${y.name}</span>
                                    <span class="slash-desc">${y.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${u0&&!j&&F`
                        <div class="compose-model-popup" ref=${u1} tabIndex="-1" onKeyDown=${m5}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${y_&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!y_&&g0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!y_&&g0.map((y,m)=>{let n=typeof y?.label==="string"?y.label:"",Q0=W9(y?.contextWindow),C0=y?.name||null,F_=Nq(y,I);return F`
                                        <button
                                            key=${n}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${L_===m?" active":""}${H===n?" current-model":""}${F_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{a8(y)}}
                                            disabled=${k0||F_.blocked}
                                            title=${[n,C0,Q0,F_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${_z(n,y?.contextWindow)}${C0?F` <span class="compose-model-popup-model-subtitle">${C0}</span>`:""}</span>
                                                ${F_.blocked&&F`<span class="compose-model-popup-model-note">${F_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{AN()}}
                                    disabled=${k0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${y0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${e1} tabIndex="-1" onKeyDown=${m5}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!f$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${f$&&L4.map((y,m)=>{let n=Boolean(y.archived_at),Q0=y.chat_jid===(y.root_chat_jid||y.chat_jid),C0=!Q0&&!y.is_active&&!n&&typeof X_==="function",F_=n&&u6,i_=s2(y,{currentChatJid:X0});return F`
                                        <div key=${y.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${n?" archived":""}${i0===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(n){yj(y.chat_jid);return}wj(y.chat_jid)}}
                                                disabled=${n?!S$:!R$}
                                                title=${n?`Restore archived ${`@${y.agent_name}`}`:`Switch to ${`@${y.agent_name}`}`}
                                            >
                                                <span style=${nW(y)?"font-weight:700":""}>${i_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${y.agent_name} in new window`}
                                                aria-label=${`Open @${y.agent_name} in new window`}
                                                onClick=${(c_)=>{c_.stopPropagation(),j_(!1);let P1=new URL(window.location.href);P1.searchParams.set("chat_jid",y.chat_jid),P1.searchParams.set("chat_only","1");let w1=document.createElement("a");w1.href=P1.toString(),w1.target="_blank",w1.rel="noopener",w1.style.display="none",document.body.appendChild(w1),w1.click(),w1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(C0||F_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${F_?Q0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${F_?Q0?`Permanently delete archived session @${y.agent_name}`:`Permanently delete archived branch @${y.agent_name}`:`Delete @${y.agent_name}`}
                                                    onClick=${(c_)=>{if(c_.stopPropagation(),j_(!1),F_){l0?.(y.chat_jid);return}X_(y.chat_jid)}}
                                                >
                                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                        <line x1="18" y1="6" x2="6" y2="18" />
                                                        <line x1="6" y1="6" x2="18" y2="18" />
                                                    </svg>
                                                </button>
                                            `}
                                        </div>
                                    `})}
                            </div>
                            ${(X$||K4||Z$||Y$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((y)=>y.key==="action:new")===i0?" active":""}`}
                                            onClick=${()=>{xj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${K4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((y)=>y.key==="action:new-root")===i0?" active":""}`}
                                            onClick=${()=>{Ij()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((y)=>y.key==="action:rollup")===i0?" active":""}`}
                                            onClick=${()=>{Cj()}}
                                            title=${V4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!V4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((y)=>y.key==="action:rename")===i0?" active":""}`}
                                            onClick=${(y)=>{Tj(y)}}
                                            title="Rename the current session"
                                            disabled=${d4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((y)=>y.key==="action:delete")===i0?" active":""}`}
                                            onClick=${()=>{Pj()}}
                                            title="Delete (prune) current agent/session branch"
                                        >
                                            Delete current…
                                        </button>
                                    `}
                                </div>
                            `}
                        </div>
                    `}
                </div>
                <div class="compose-footer" ref=${A$}>
                    ${j$.show&&F`
                        <span class="compose-connection-status connection-status ${j$.statusClass}" title=${P$}>
                            ${t_}
                        </span>
                    `}
                    ${V0&&F`
                    <div class="compose-meta-row">
                        ${u5&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${F0}
                                    aria-label="Open model picker"
                                    onClick=${MN}
                                    disabled=${k0}
                                >
                                    ${k0?"Switching…":b5}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!k0&&p&&F`
                                        <span class="compose-model-usage-hint" title=${F0}>
                                            ${p}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&I&&I.percent!=null&&F`
                            <${tW}
                                usage=${I}
                                onCompact=${wN}
                                compactionLabel=${V1?Y4||"0:00":""}
                                compactionTitle=${V1?C$||"Smart compaction":""}
                            />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${j&&F`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${G}
                                onChange=${(y)=>X?.(y.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${M0} onChange=${()=>V_((y)=>!y)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${s0} onChange=${()=>O_((y)=>!y)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${E0==="and"?"active":""}`}
                            onClick=${()=>{let y=E0==="or"?"and":"or";S0(y),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:y})}).catch((m)=>{})}}
                            title=${E0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${E0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?q:Y}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:F`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${R5&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${mN}
                            title="Share location"
                            type="button"
                            disabled=${!1}
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <path d="M12 2a14 14 0 0 1 0 20a14 14 0 0 1 0-20" />
                                <path d="M2 12h20" />
                            </svg>
                        </button>
                    `}
                    ${I1&&F`
                        <button
                            class=${`icon-btn voice-input-btn${x$?" active":""}${w_.mode==="fallback"?" fallback":""}`}
                            onClick=${JN}
                            onPointerDown=${ON}
                            onPointerUp=${s8}
                            onPointerCancel=${s8}
                            onPointerLeave=${s8}
                            title=${h4}
                            aria-label=${h4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${p4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${n4?" active":""}`}
                            onClick=${O}
                            title=${g5}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${f&&S&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${S}
                                title=${`Attach open file: ${f}`}
                                type="button"
                                disabled=${K.includes(f)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${PN} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${r4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{i4()}}
                                    disabled=${r4.disabled}
                                    title=${r4.title}
                                    aria-label=${r4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${G$&&F`
                                    <button 
                                        class=${G$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(sW(G$.mode))i4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
                                        disabled=${G$.disabled}
                                        title=${G$.title}
                                        aria-label=${G$.ariaLabel}
                                    >
                                        ${G$.mode==="compacting"?F`
                                                <span class="compose-submit-spinner" aria-hidden="true">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                                                        <circle class="compose-submit-spinner-ring" cx="12" cy="12" r="10.5" stroke-width="2.25" stroke-linecap="round"></circle>
                                                        <rect class="compose-submit-spinner-stop" x="6" y="6" width="12" height="12" rx="0" fill="currentColor"></rect>
                                                    </svg>
                                                </span>
                                            `:F`<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2.5"/></svg>`}
                                    </button>
                                `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}T0();function zq({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
    <section class=${`oobe-panel oobe-panel-${_}`} aria-label="Getting started">
      <div class="oobe-panel-copy">
        <div class="oobe-panel-eyebrow">Getting started</div>
        <h2 class="oobe-panel-title">${Z}</h2>
        <p class="oobe-panel-body">${X}</p>
      </div>
      <div class="oobe-panel-actions">
        <button type="button" class="oobe-panel-btn oobe-panel-btn-primary" onClick=${()=>$?.()}>
          Open Settings
        </button>
        <button type="button" class="oobe-panel-btn" onClick=${()=>j?.()}>
          ${G?"Dismiss":"Done"}
        </button>
      </div>
    </section>
  `}T0();function Oq(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function Jq(_){return String(_||"").trim()||"web:default"}function Aq(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function kq(_){if(!_)return!1;return _.status!=="running"}function Mq(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function wq({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?e5(_.thinking):"",q=_?.answer?G1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)E$(Z.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",D)})},[Y]),u(()=>{if(X.current&&q)E$(X.current).catch((D)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",D)})},[q]),!_)return null;let K=_.status==="running",L=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),V=Aq(_),N=kq(_),B=!K&&L,U=K?"Thinking…":_.status==="error"?"Error":"Done";return F`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${U}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&F`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&F`<div class="btw-block btw-error">${_.error}</div>`}
            ${Q&&F`
                <details class="btw-block btw-thinking" open=${K?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${V&&F`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </div>
            `}

            ${N&&F`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&F`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!B}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}T0();function O9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function J9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function Bz(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function Nz(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function t$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function Z_(_){return typeof _==="string"&&_.trim()?_.trim():null}function Tq(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var xq="__PICLAW_WIDGET_HOST__:";function yq(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function A9(_,$){if(!_||_.type!=="generated_widget")return null;let j=Bz(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:Tq(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function Iq(_){if(!_||typeof _!=="object")return null;let $=Nz(_),j=Z_(_?.widget_id)||Z_(_?.widgetId)||Z_(_?.tool_call_id)||Z_(_?.toolCallId),G=Z_(_?.tool_call_id)||Z_(_?.toolCallId),Z=Z_(_?.turn_id)||Z_(_?.turnId),X=Z_(_?.title)||Z_(_?.name)||"Generated widget",Y=Z_(_?.subtitle)||"",q=Z_(_?.description)||Y,K=Z_(_?.status),L=K==="loading"||K==="streaming"||K==="final"||K==="error"?K:"streaming";return{title:X,subtitle:Y,description:q,originPostId:t$(_?.origin_post_id)??t$(_?.originPostId),originChatJid:Z_(_?.origin_chat_jid)||Z_(_?.originChatJid)||Z_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:Tq(_?.capabilities,!0),source:"live",status:L,turnId:Z,toolCallId:G,width:t$(_?.width),height:t$(_?.height),error:Z_(_?.error)}}function Cq(_){return A9(_,null)!==null}function O1(_){let $=Z_(_?.toolCallId)||Z_(_?.tool_call_id);if($)return $;let j=Z_(_?.widgetId)||Z_(_?.widget_id);if(j)return j;let G=t$(_?.originPostId)??t$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function Pq(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function fq(_){return Pq(_)?"allow-downloads allow-scripts allow-same-origin":"allow-downloads"}function $8(_){return{title:Z_(_?.title)||"Generated widget",widgetId:Z_(_?.widgetId)||Z_(_?.widget_id),toolCallId:Z_(_?.toolCallId)||Z_(_?.tool_call_id),turnId:Z_(_?.turnId)||Z_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:Z_(_?.status)||"final"}}function j8(_){return{...$8(_),subtitle:Z_(_?.subtitle)||"",description:Z_(_?.description)||"",error:Z_(_?.error)||null,width:t$(_?.width),height:t$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function G8(_){return`${xq}${JSON.stringify(j8(_))}`}function Rq(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=Z_(_.text)||Z_(_.content)||Z_(_.message)||Z_(_.prompt)||Z_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=Z_(j.text)||Z_(j.content)||Z_(j.message)||Z_(j.prompt)||Z_(j.value);if(G)return G}return null}function Sq(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function gq(_){let $=Z_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return Z_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function Fz(_){let $=$8(_);return`<script>
(function () {
  const meta = ${yq($)};
  function post(kind, payload) {
    try {
      window.parent.postMessage({
        __piclawGeneratedWidget: true,
        kind,
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload: payload || {}
      }, '*');
    } catch {
      /* expected: parent bridge may be unavailable while the iframe is unloading. */
    }
  }

  const windowNamePrefix = ${yq(xq)};
  let lastWindowName = null;
  let pendingHostEnvelope = null;
  let pendingHostEnvelopeFrame = 0;
  let lastDispatchedEnvelopeKey = null;

  function getEnvelopeKey(data) {
    try {
      return JSON.stringify([
        data?.type || null,
        data?.widgetId || null,
        data?.toolCallId || null,
        data?.turnId || null,
        data?.payload || null,
      ]);
    } catch {
      return null;
    }
  }

  function flushHostEnvelope() {
    pendingHostEnvelopeFrame = 0;
    const data = pendingHostEnvelope;
    pendingHostEnvelope = null;
    if (!data) return;

    window.piclawWidget.lastHostMessage = data;
    const nextPayload = data.payload || null;
    if (data.type === 'widget.init') {
      const previous = window.piclawWidget.hostState && typeof window.piclawWidget.hostState === 'object'
        ? window.piclawWidget.hostState
        : null;
      if (nextPayload && typeof nextPayload === 'object') {
        window.piclawWidget.hostState = {
          ...(previous || {}),
          ...nextPayload,
          ...(Object.prototype.hasOwnProperty.call(nextPayload, 'runtimeState')
            ? {}
            : { runtimeState: previous?.runtimeState ?? null }),
        };
      } else {
        window.piclawWidget.hostState = previous || null;
      }
    } else if (data.type === 'widget.update' || data.type === 'widget.complete' || data.type === 'widget.error') {
      window.piclawWidget.hostState = nextPayload;
    }

    const effectivePayload = window.piclawWidget.hostState ?? nextPayload ?? null;
    const detail = (effectivePayload === data.payload)
      ? data
      : { ...data, payload: effectivePayload };
    const envelopeKey = getEnvelopeKey(detail);
    if (envelopeKey && envelopeKey === lastDispatchedEnvelopeKey) return;
    lastDispatchedEnvelopeKey = envelopeKey;
    window.dispatchEvent(new CustomEvent('piclaw:widget-message', { detail }));
  }

  function scheduleHostEnvelope(data) {
    if (!data) return;
    pendingHostEnvelope = data;
    if (pendingHostEnvelopeFrame) return;
    const schedule = typeof requestAnimationFrame === 'function'
      ? requestAnimationFrame
      : (cb) => setTimeout(cb, 0);
    pendingHostEnvelopeFrame = schedule(flushHostEnvelope);
  }

  function readWindowNameState() {
    try {
      const raw = window.name || '';
      if (!raw || raw === lastWindowName || !raw.startsWith(windowNamePrefix)) return;
      lastWindowName = raw;
      const payload = JSON.parse(raw.slice(windowNamePrefix.length));
      scheduleHostEnvelope({
        __piclawGeneratedWidgetHost: true,
        type: 'widget.update',
        widgetId: meta.widgetId || null,
        toolCallId: meta.toolCallId || null,
        turnId: meta.turnId || null,
        payload,
      });
    } catch {
      /* expected: host window.name payload can be absent or mid-update while polling. */
    }
  }

  window.piclawWidget = {
    meta,
    lastHostMessage: null,
    hostState: null,
    ready(payload) { post('widget.ready', payload); },
    close(payload) { post('widget.close', payload); },
    requestRefresh(payload) { post('widget.request_refresh', payload); },
    submit(payload) { post('widget.submit', payload); },
  };

  window.addEventListener('message', function (event) {
    const data = event && event.data;
    if (!data || data.__piclawGeneratedWidgetHost !== true) return;
    if ((data.widgetId || null) !== (meta.widgetId || null)) return;
    scheduleHostEnvelope(data);
  });

  function announceReady() {
    readWindowNameState();
    post('widget.ready', { title: document.title || meta.title || 'Generated widget' });
  }

  setInterval(readWindowNameState, 250);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', announceReady, { once: true });
  } else {
    announceReady();
  }
})();
</script>`}function uq(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let q=Pq(_),K=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",q?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),L=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=q?Fz(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${K}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${X.replace(/[<&>]/g,"")}</title>
<style>
:root { color-scheme: dark light; }
html, body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  background: #0f1117;
  color: #f5f7fb;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}
body {
  box-sizing: border-box;
}
.widget-svg-shell {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  box-sizing: border-box;
}
.widget-svg-shell svg {
  max-width: 100%;
  height: auto;
}
</style>
${Q}
</head>
<body>${L}</body>
</html>`}T0();function Uz(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let q=$.get(Y.id);if(!q)continue;let K=Y.parentId?$.get(Y.parentId):null;if(K)K.children.push(q);else j.push(q)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let q=Y.children[0];if(q.role!=="toolResult")continue;Y.resultDetail=q.detail||null,Y.resultLength=q.contentLength||0,Y.resultId=q.id,Y.merged=!0,Y.children=q.children;for(let K of Y.children)K.parentId=Y.id;G.add(q.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),q=Y.children.length>1;for(let K=Y.children.length-1;K>=0;K--)Y.children[K].depth=q?Y.depth+1:Y.depth,X.push(Y.children[K])}return Z}function Hz(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function bq(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function z5(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function Ez(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function Dz(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function vq(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function Wz(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(q)=>typeof q==="string"&&Z.some((K)=>K?.id===q);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((q)=>q?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function zz(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=vq(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function mq({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,q]=C(()=>({loading:!j,error:null,data:j})),[K,L]=C(()=>j?.leafId||null),[Q,V]=C(""),N=g(null),B=g(null),U=g(j?.leafId||null),D=g(null),E=g(""),H=async()=>{q((k)=>({...k,loading:!0,error:null}));try{let k=G?`?chat_jid=${encodeURIComponent(G)}`:"",A=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),O=await A.json().catch(()=>({}));if(!A.ok)throw Error(O?.error||`HTTP ${A.status}`);q({loading:!1,error:null,data:O})}catch(k){q((A)=>({loading:!1,error:k?.message||"Failed to load tree.",data:A?.data||j||null}))}};D.current=H,u(()=>{H()},[G]);let w=Z0(()=>{let k=Y.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return Hz(k.flat?Uz(k.nodes):k.nodes)},[Y.data]);u(()=>{let k=Wz(w,K,U.current,Y.data?.leafId||null);if(k!==K)L(k);if(U.current&&Y.data?.leafId===U.current)U.current=null},[w,K,Y.data?.leafId]);let W=Z0(()=>{let k=(Q||"").trim().toLowerCase();if(!k)return w;return w.filter((A)=>{return[A.preview,A.toolInput,A.toolInputFull,A.detail,A.toolName,A.role,A.id,A.resultDetail,A.type,A.label].some((M)=>typeof M==="string"&&M.toLowerCase().includes(k))})},[w,Q]),z=Z0(()=>W.find((k)=>k.id===K)||null,[W,K]),T=Z0(()=>zz(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(B.current)B.current.scrollIntoView({block:"center",behavior:"auto"})},[K,Y.data?.leafId,W.length]),u(()=>{let k=vq(X?.preview);if(k?.targetId)U.current=k.targetId;let A=T?.refreshDelays||[];if(!A.length)return;let O=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(E.current===O)return;E.current=O;let M=A.map((x)=>setTimeout(()=>D.current?.(),x));return()=>M.forEach((x)=>clearTimeout(x))},[G,X?.type,X?.submittedAt,X?.preview,T?.refreshDelays]);let I=(k=!1)=>{let A=z?.id,O=Dz(A,k);if(!O)return;U.current=O.navigateTargetId,$?.({kind:"widget.submit",payload:O},_)},J=T?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${N}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(k)=>V(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")V(""),k.currentTarget.blur()}}
                    />
                    ${Q&&F`<span class="session-tree-meta">${W.length} match${W.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${T?.text&&F`<span class=${`session-tree-host-update ${J}`}>${T.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&W.length===0&&!Q&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&W.length===0&&!Q&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&W.length===0&&Q&&F`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${W.map((k)=>{let A=K===k.id,O=`st-row${k.active?" active":""}${A?" selected":""}`,M=(k.children||[]).length>1,x=Ez(k);return F`
                            <button key=${k.id} ref=${k.active||A?B:null}
                                class=${O} type="button" role="treeitem" aria-selected=${A}
                                onClick=${()=>L(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":M?" branch":""}`}></span>
                                <span class=${`st-tag ${x.tagClass}`}>${x.tag}</span>
                                <span class="st-text">${x.text}</span>
                                ${k.merged&&k.resultLength>0&&F`<span class="st-size">${bq(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&F`<span class="st-size">${bq(k.contentLength)}</span>`}
                                ${k.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&F`<span class="st-label">${k.label}</span>`}
                                ${k.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${z?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${z.id}${z.resultId?` → ${z.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${z.role||z.type||"entry"}${z.toolName?` → ${z.toolName}`:""}${z.merged?" (merged)":""}</div>
                        </div>
                        ${z.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${z.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${z.toolInputFull}</pre>
                            </div>
                        `}
                        ${z.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${z.resultLength?` (${z5(z.resultLength)})`:""}</div>
                                <pre class="st-side-code">${z.resultDetail}</pre>
                            </div>
                        `}
                        ${z.detail&&!z.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${z.role==="toolResult"?"Output":"Content"}${z.contentLength?` (${z5(z.contentLength)})`:""}</div>
                                <pre class="st-side-code">${z.detail}</pre>
                            </div>
                        `}
                        ${z.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${z.rawContentLength?` (${z5(z.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${z.rawDetail}</pre>
                            </div>
                        `}
                        ${z.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(z.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(z.contentLength>0||z.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${z.contentLength>0&&F`<span class="st-pill">${z5(z.contentLength)} content</span>`}
                                    ${z.hasThinking&&F`<span class="st-pill thinking">${z5(z.thinkingLength)} thinking</span>`}
                                    ${z.merged&&z.resultLength>0&&F`<span class="st-pill">${z5(z.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>I(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>I(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function cq({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),X=Z0(()=>uq(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let H=(w)=>{if(w.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),u(()=>{Z.current=!1},[X]),u(()=>{if(!_)return;let H=G.current;if(!H)return;let w=(J)=>{let k=G8(_),A=J==="widget.init"?$8(_):j8(_);O9(H,k),J9(H,{__piclawGeneratedWidgetHost:!0,type:J,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:A})},W=()=>{w("widget.init"),w("widget.update")},z=()=>{Z.current=!0,W()};H.addEventListener("load",z);let I=[0,40,120,300,800].map((J)=>setTimeout(W,J));return()=>{H.removeEventListener("load",z),I.forEach((J)=>clearTimeout(J))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let w=G8(_),W=j8(_);O9(H,w),J9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:W});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let H=(w)=>{let W=w?.data;if(!W||W.__piclawGeneratedWidget!==!0)return;let z=G.current,T=O1(_),I=O1({widgetId:W.widgetId,toolCallId:W.toolCallId});if(I&&T&&I!==T)return;if(!I&&z?.contentWindow&&w.source!==z.contentWindow)return;j?.(W,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let q=(_?.artifact||{}).kind||_?.kind||"html",K=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",L=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",N=Q==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",B=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,D=gq(_),E=fq(_);return F`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${K}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${N} • ${q.toUpperCase()}</div>
                        <div class="floating-widget-title">${K}</div>
                        ${(L||B)&&F`
                            <div class="floating-widget-subtitle">${L||B}</div>
                        `}
                    </div>
                    <button
                        class="floating-widget-close"
                        type="button"
                        onClick=${()=>$?.()}
                        title="Close widget"
                        aria-label="Close widget"
                    >
                        Close
                    </button>
                </div>
                <div class="floating-widget-body">
                    ${q==="session_tree"?F`<${mq} widget=${_} onWidgetEvent=${j} />`:U?F`<div class="floating-widget-empty">${D}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${K}
                                    name=${G8(_)}
                                    sandbox=${E}
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}T0();f2();S_();H5();var Oz=new Set,lq=new Set,k9=new Set,C4=new Map,hq=!1,Z8=null;function Jz(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function Az(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function pq(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return q_.register(_),Oz.add(_.id),!0}function kz(_){return pq(_)}function Mz(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return d$(_),lq.add(_.id),m7(),()=>{vX(_.id),lq.delete(_.id),m7()}}function wz(_){if(typeof _!=="function")return()=>{};return k9.add(_),()=>{k9.delete(_)}}function nq(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...k9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function yz(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return C4.set(_.id,_),()=>{if(C4.get(_.id)===_)C4.delete(_.id)}}function X8(_,$){for(let j of Array.from(C4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function rq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return C4.get($)?.label||null}function dq(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return C4.get($)?.note||null}function iq(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=C4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function Tz(_=typeof window<"u"?window:null){return{registerPane:kz,registerWorkspacePane:pq,registerSettingsPane:Mz,registerStandaloneTabUrlResolver:wz,registerAttachmentPreview:yz,getCurrentChatJid:()=>Jz(_)}}function M9(_=typeof window<"u"?window:null){let $=Tz(_);if(!_||hq)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},hq=!0,$}async function oq(_=typeof window<"u"?window:null){if(!_)return;if(Z8)return Z8;return Z8=(async()=>{M9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=Az(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(q){console.warn("[addon-web] Failed to load installed addon web entry:",Y,q)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Z8}var xz=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),Iz=new Set(["text/markdown"]),Cz=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),Pz=new Set(["application/eml","message/rfc822"]);function e$(_){return typeof _==="string"?_.trim().toLowerCase():""}function fz(_){let $=e$(_);return!!$&&$.endsWith(".eml")}function Rz(_){let $=e$(_);return!!$&&$.endsWith(".pdf")}function Sz(_){let $=e$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var gz=new Set(["application/zip","application/x-zip-compressed"]);function uz(_){let $=e$(_);return!!$&&$.endsWith(".zip")}function bz(_){let $=e$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function vz(_){let $=e$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function J6(_,$){let j=X8(_,$);if(j?.id)return j.id;let G=e$(_);if(Rz($)||G==="application/pdf")return"pdf";if(Sz($)||Cz.has(G))return"office";if(fz($)||Pz.has(G))return"eml";if(uz($)||gz.has(G))return"archive";if(bz($)||G==="text/html")return"html";if(vz($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(xz.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function sq(_){let $=e$(_);return Iz.has($)}function Y8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return rq(_)||"Preview unavailable"}}var mz=new TextDecoder("utf-8",{fatal:!1});function O5(_,$){return _[$]|_[$+1]<<8}function P4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function aq(_,$,j){return mz.decode(_.subarray($,$+j))}function cz(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(P4(_,j)===101010256)return j;return-1}function lz(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(P4(_,G)===117853008)return!0;return!1}function hz(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function pz(_){return String(_||"").replace(/\\/g,"/").trim()}function tq(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function eq(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=cz($);if(j<0)throw Error("ZIP archive directory could not be found.");if(lz($,j))throw Error("ZIP64 archives are not previewable yet.");let G=O5($,j+10),Z=P4($,j+12),X=P4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],q=X,K=X+Z;while(q<K){if(q+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(P4($,q)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let V=O5($,q+8),N=O5($,q+10),B=P4($,q+20),U=P4($,q+24),D=O5($,q+28),E=O5($,q+30),H=O5($,q+32),w=q+46,W=w+D+E,z=W+H;if(z>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let T=(V&2048)===2048,I=pz(aq($,w,D)),J=aq($,W,H),k=I.endsWith("/");if(I)Y.push({path:I,isDirectory:k,compressedSize:B,uncompressedSize:U,compressionMethod:N,comment:T?J:J});q=z}Y.sort((V,N)=>{if(V.isDirectory!==N.isDirectory)return V.isDirectory?-1:1;return V.path.localeCompare(N.path)});let L=Y.filter((V)=>!V.isDirectory),Q=hz(Y);return{entries:Y,summary:{fileCount:L.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:L.reduce((V,N)=>V+N.compressedSize,0),uncompressedBytes:L.reduce((V,N)=>V+N.uncompressedSize,0)}}}function _L(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var nz="allow-scripts";function rz(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function dz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function iz(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function oz(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?e_(X.compressedBytes):null},{label:"Uncompressed",value:X?e_(X.uncompressedBytes):null},{label:"Savings",value:_L(X)},{label:"Size",value:typeof G==="number"?e_(G):null},{label:"Added",value:_?.created_at?y4(_.created_at):null}].filter((Y)=>Y.value)}function sz(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function az(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=g1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function $L({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Z0(()=>X8($?.content_type,G),[$?.content_type,G]),X=Z0(()=>J6($?.content_type,G),[$?.content_type,G]),Y=Z?.label||Y8(X),q=Z0(()=>sq($?.content_type),[$?.content_type]),[K,L]=C(X==="text"||X==="html"||X==="archive"),[Q,V]=C(""),[N,B]=C(null),[U,D]=C(null),E=g(null),H=Z0(()=>sz($,G),[$,G]),w=Z0(()=>H?MZ(H):null,[H]),W=Z0(()=>oz($,!q?w:null,N),[$,q,w,N]),z=Z0(()=>Z?iq(Z.id,_,G):az(_,G,X),[Z,_,G,X]),T=Z0(()=>dq(Z?.id||X),[Z?.id,X]),I=Z0(()=>{if(!q||!Q)return"";return G1(Q)},[q,Q]),J=Z0(()=>{if(q||!Q||!H)return"";return B2(Q,H)},[q,Q,H]);return u(()=>{let k=(A)=>{if(A.key==="Escape")j()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[j]),u(()=>{if(!E.current||!I)return;E$(E.current);return},[I]),u(()=>{let k=!1;async function A(){if(X!=="text"&&X!=="html"&&X!=="archive"){L(!1),D(null),V(""),B(null);return}L(!0),D(null),V(""),B(null);try{let O=await H7(_),M=new Uint8Array(await O.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&dz($,G)&&!rz(M))throw Error("Attachment does not appear to contain text content.");let f=iz(M);if(!k)V(f);return}let x=eq(M);if(!k)B(x)}catch(O){if(!k){let M=O instanceof Error?O.message:String(O||"Unknown error");D(X==="archive"?`Failed to load ZIP preview. ${M}`:`Failed to load text preview. ${M}`)}}finally{if(!k)L(!1)}}return A(),()=>{k=!0}},[_,X]),F`
        <${r$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(k)=>{k.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${z&&F`
                                <a
                                    href=${z}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(k)=>k.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${g1(_)}
                                download=${G}
                                class="attachment-preview-download"
                                onClick=${(k)=>k.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&U&&F`<div class="attachment-preview-state">${U}</div>`}
                        ${!K&&!U&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${g1(_)} alt=${G} />
                        `}
                        ${!K&&!U&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${g1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!K&&!U&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${nz} title=${G}></iframe>
                        `}
                        ${!K&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&z&&F`
                            <iframe class="attachment-preview-frame" src=${z} title=${G}></iframe>
                        `}
                        ${!K&&!U&&T&&F`
                            <div class="attachment-preview-readonly-note">${T}</div>
                        `}
                        ${!K&&!U&&X==="archive"&&N&&F`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${N.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${e_(N.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${e_(N.summary.uncompressedBytes)}</strong>
                                    </div>
                                </div>
                                <div class="attachment-preview-archive-table-wrap">
                                    <table class="attachment-preview-archive-table">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Type</th>
                                                <th>Method</th>
                                                <th>Compressed</th>
                                                <th>Size</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${N.entries.map((k)=>F`
                                                <tr key=${k.path}>
                                                    <td class="attachment-preview-archive-name">${k.path}</td>
                                                    <td>${k.isDirectory?"Folder":"File"}</td>
                                                    <td>${k.isDirectory?"—":tq(k.compressionMethod)}</td>
                                                    <td>${k.isDirectory?"—":e_(k.compressedSize)}</td>
                                                    <td>${k.isDirectory?"—":e_(k.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!K&&!U&&X==="text"&&q&&F`
                            <div
                                ref=${E}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:I}}
                            />
                        `}
                        ${!K&&!U&&X==="text"&&!q&&J&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:J}} /></pre>
                        `}
                        ${!K&&!U&&X==="text"&&!q&&!J&&F`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!K&&!U&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${W.map((k)=>F`
                            <div class="attachment-preview-meta-item" key=${k.label}>
                                <span class="attachment-preview-meta-label">${k.label}</span>
                                <span class="attachment-preview-meta-value">${k.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${r$}>
    `}T0();S_();b2();e7();function tz(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function ez(_){if(!_||typeof _!=="object")return!0;if(tz(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function _O(_){if(!z6(_))return!1;if(!ez(_?.target))return!1;return!i$.some((j)=>O$(_,j.id))}function jL(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function $O(_){let $=[],j=new Map(s$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function GL(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function jO(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function q8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function GO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function ZL({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L,onPrefillCompose:Q}){let[V,N]=C(!1),[B,U]=C(""),[D,E]=C(0),[H,w]=C([]),[W,z]=C({workspaceCommands:null,slashCommands:null}),T=g(null),I=g(null),J=P(async()=>{try{let M=await X6();z(a$(M?.settings))}catch{z({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{J()},[J]),u(()=>{let M=!1;return Z6($).then((x)=>{if(M)return;w(Array.isArray(x?.commands)?x.commands:[])}).catch(()=>{if(M)return;w([])}),()=>{M=!0}},[$]);let k=Z0(()=>$O({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:q,onOpenVncTab:K,onToggleTerminalDock:L}),[G,q,K,L,Z,j]),A=Z0(()=>yY({agents:_,workspaceCommands:k,slashCommands:H,settings:W,query:B}),[_,B,W,H,k]);if(u(()=>{if(A.length===0){E(-1);return}if(!B.trim()){E(0);return}let M=B.toLowerCase().replace(/^[@/]+/,"").trim();if(!M){E(0);return}let x=0,f=0;for(let S=0;S<A.length;S++){let v=A[S],l=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(l===M){x=S;break}let h=0;if(l.startsWith(M))h=3;else if(l.includes(M))h=2;else if((v.subtitle||"").toLowerCase().includes(M))h=1;if(h>f)f=h,x=S}E(x)},[A,B]),u(()=>{if(!V)return;requestAnimationFrame(()=>I.current?.focus?.())},[V]),u(()=>{let M=(f)=>{if(!V){if(!_O(f))return;f.preventDefault(),U(String(f.key||"")),E(0),N(!0);return}if(f.key==="Escape"){f.preventDefault(),N(!1),U("");return}if(f.key==="ArrowDown"){f.preventDefault(),E((S)=>A.length>0?(S+1+A.length)%A.length:0);return}if(f.key==="ArrowUp"){f.preventDefault(),E((S)=>A.length>0?(S-1+A.length)%A.length:0);return}if(f.key==="Enter"&&A[D]){f.preventDefault();let S=A[D],v=f.altKey;if(S){if(S.kind==="agent"&&S.chatJid)if(v)GO(S.chatJid);else X?.(S.chatJid);else if(S.kind==="workspace"&&S.commandId){if(S.commandId==="toggle-workspace"||S.commandId==="open-explorer")Y?.();if(S.commandId==="toggle-chat-only")jL(G);if(S.commandId==="open-terminal-tab")q?.();if(S.commandId==="open-vnc-tab")K?.();if(S.commandId==="toggle-terminal-dock")L?.();if(S.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(S.kind==="slash"&&S.commandName)Q?.(S.commandName)}N(!1),U("")}},x=(f)=>{if(!V)return;if(T.current?.contains(f.target))return;N(!1),U("")};return window.addEventListener("keydown",M,!0),document.addEventListener("pointerdown",x,!0),()=>{window.removeEventListener("keydown",M,!0),document.removeEventListener("pointerdown",x,!0)}},[G,D,A,q,K,Q,X,L,Y,V]),u(()=>{let M=(x)=>{let f=a$(x?.detail?.settings);if(x?.detail?.settings){z(f);return}J()};return window.addEventListener("focus",M),window.addEventListener("piclaw:quick-actions-settings-updated",M),()=>{window.removeEventListener("focus",M),window.removeEventListener("piclaw:quick-actions-settings-updated",M)}},[J]),!V)return null;let O=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${T}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${I}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${B}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(M)=>{U(M.currentTarget?.value||""),E(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${q8("Move","↑↓")}
                                ${q8("Select","↵")}
                                ${q8("Pop out","Alt+↵")}
                                ${q8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${A.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${A.map((M,x)=>{let f=M.kind!==O;return O=M.kind,F`
                                ${f&&F`<div class="timeline-quick-actions-section">${GL(M.kind)}</div>`}
                                <button
                                    key=${M.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${M.kind}${x===D?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(M.kind==="agent"&&M.chatJid)X?.(M.chatJid);if(M.kind==="workspace"&&M.commandId==="toggle-workspace")Y?.();if(M.kind==="workspace"&&M.commandId==="open-explorer")Y?.();if(M.kind==="workspace"&&M.commandId==="toggle-chat-only")jL(G);if(M.kind==="workspace"&&M.commandId==="open-terminal-tab")q?.();if(M.kind==="workspace"&&M.commandId==="open-vnc-tab")K?.();if(M.kind==="workspace"&&M.commandId==="toggle-terminal-dock")L?.();if(M.kind==="workspace"&&M.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(M.kind==="slash"&&M.commandName)Q?.(M.commandName);N(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${jO(M)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${M.title}</span>
                                            ${M.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${M.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${M.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${M.categoryLabel||GL(M.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}T0();function XL({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[q,K]=C(!1),[L,Q]=C({top:8,left:8}),V=g(null),N=g(null),B=g(null);u(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),B.current=H,()=>{H.remove(),B.current=null}},[]),u(()=>{let H=()=>{if(_){let z=document.querySelector(".workspace-sidebar");if(z){let T=z.getBoundingClientRect();Q({top:T.top+8,left:T.left+8})}}else Q({top:8,left:8})};H();let w=new ResizeObserver(H),W=document.querySelector(".workspace-sidebar");if(W)w.observe(W);return window.addEventListener("resize",H),()=>{w.disconnect(),window.removeEventListener("resize",H)}},[_]),u(()=>{if(B.current)B.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!B.current)return;let H=B.current.style;H.top=`${L.top}px`,H.left=`${L.left}px`,H.right="auto"},[L]),u(()=>{if(!q)return;let H=(w)=>{if(V.current?.contains(w.target))return;if(N.current?.contains(w.target))return;K(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[q]),u(()=>{if(!q)return;let H=(w)=>{if(w.key==="Escape")K(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[q]),u(()=>{K(!1)},[_]);let U=P((H)=>{K(!1),H?.()},[]),D=P(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),E=F`
        <button ref=${N} class=${`timeline-menu-btn${q?" active":""}`}
            onClick=${()=>K((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${q?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${q&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${V} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(D)}>
                    ${j?"Exit chat-only mode":"Chat-only mode"}
                </button>

                ${(G||Z||X)&&F`<div class="workspace-menu-separator"></div>`}
                ${G&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(G)}>Open terminal in tab</button>`}
                ${Z&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(Z)}>Open VNC in tab</button>`}
                ${X&&F`<button class="workspace-menu-item" role="menuitem" onClick=${()=>U(X)}>${Y?"Hide terminal dock":"Show terminal dock"}</button>`}

                <div class="workspace-menu-separator"></div>
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>window.dispatchEvent(new CustomEvent("piclaw:open-settings")))}>Settings</button>
            </div>
        `}
    `;return t4(()=>{if(B.current)Q$(E,B.current)}),null}T0();S_();var YL="PiClaw";function w9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,q=X[Y],K=G.trim().toLowerCase(),L=typeof $==="string"?$.trim():"",Q=L?L:null,V=j||K==="PiClaw".toLowerCase()||K==="pi";return{letter:Z,color:q,image:Q||(V?"/static/icon-192.png":null)}}function qL(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function LL(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function KL(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",q=X?.dataset?.tint||"",K=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(K&&(q||Y&&Y!=="default"))return K}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function y9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function ZO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function VL(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return ZO($[1].trim())||null}function QL(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=y9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=y9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=y9(j.command),Y=VL(X);if(Y)return Y;if(Array.isArray(j.commands))for(let q of j.commands){let K=VL(q);if(K)return K}return null}var XO=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,YO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,qO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,LO=1e4;function KO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function VO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function QO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function BO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function BL(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return n$(_)!==null}function NL(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&I2(_)!==null}function NO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=LO}function FO(_,$=Date.now()){if(!BL(_))return null;let j=n$(_);if(j===null||!NO(j,$))return null;let G=FL(new Date(j).toISOString(),$);return G?`${G} ago`:null}function UO(_,$=Date.now()){if(!NL(_))return null;if(I2(_)===null)return null;return U6(_,$)}function HO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function FL(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function T9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:q=new Set,onExtensionPanelAction:K,turnId:L,steerQueued:Q,onPanelToggle:V,showCorePanels:N=!0,showExtensionPanels:B=!0}){let E=($0)=>{if(!$0)return{text:"",totalLines:0,fullText:""};if(typeof $0==="string"){let m0=$0,s=m0?m0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:m0,totalLines:s,fullText:m0}}let O0=$0.text||"",D0=$0.fullText||$0.full_text||O0,v0=Number.isFinite($0.totalLines)?$0.totalLines:D0?D0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:O0,totalLines:v0,fullText:D0}},H=160,w=($0)=>String($0||"").replace(/<\/?internal>/gi,""),W=($0)=>{if(!$0)return 1;return Math.max(1,Math.ceil($0.length/160))},z=($0,O0,D0)=>{let v0=($0||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!v0)return{text:"",omitted:0,totalLines:Number.isFinite(D0)?D0:0,visibleLines:0};let m0=v0.split(`
`),s=m0.length>O0?m0.slice(0,O0).join(`
`):v0,o=Number.isFinite(D0)?D0:m0.reduce((q0,k0)=>q0+W(k0),0),t=s?s.split(`
`).reduce((q0,k0)=>q0+W(k0),0):0,Y0=Math.max(o-t,0);return{text:s,omitted:Y0,totalLines:o,visibleLines:t}},T=E(j),I=E(G),J=E($),k=Boolean(T.text)||T.totalLines>0,A=Boolean(I.text)||I.totalLines>0,O=Boolean(J.fullText?.trim()||J.text?.trim()),M=Boolean(_||O||k||A||Z||X),x=Array.isArray(Y)&&Y.length>0,[f,S]=C(new Set),[v,l]=C(null),[h,r]=C(()=>Date.now()),b=($0)=>S((O0)=>{let D0=new Set(O0),v0=!D0.has($0);if(v0)D0.add($0);else D0.delete($0);if(typeof V==="function")V($0,v0);return D0});u(()=>{S(new Set),l(null)},[L]),u(()=>{if(!(Array.isArray(Y)&&Y.some((D0)=>D0?.started_at||D0?.last_activity_at)))return;let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[Y]);let e=Z0(()=>VO(f),[f]);u(()=>{if(!e||typeof document>"u")return;let $0=(O0)=>{if(O0?.defaultPrevented)return;if(O0?.key!=="Escape")return;if(O0?.altKey||O0?.ctrlKey||O0?.metaKey||O0?.shiftKey)return;let D0=O0?.target;if(D0 instanceof Element){if(D0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(D0.isContentEditable)return}if(S((v0)=>{if(!(v0 instanceof Set)||!v0.has(e))return v0;let m0=new Set(v0);return m0.delete(e),m0}),typeof V==="function")V(e,!1);O0.preventDefault?.(),O0.stopPropagation?.()};return document.addEventListener("keydown",$0),()=>document.removeEventListener("keydown",$0)},[e,V]);let z0=W$(_),K0=Boolean(_?.last_activity||_?.lastActivity),L0=Z0(()=>BL(_),[_]),X0=Z0(()=>NL(_),[_]),B0=Z0(()=>QL(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[_0,G0]=C(null);u(()=>{if(!Boolean(X0||_?.retry_at||_?.retryAt||L0))return;r(Date.now());let O0=setInterval(()=>r(Date.now()),1000);return()=>clearInterval(O0)},[L0,X0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!B0){G0(null);return}let O0=!0;return E7(B0).then((D0)=>{if(!O0)return;if(D0?.branch)G0({branch:D0.branch,repoPath:D0.repo_path||null,path:B0});else G0(null)}).catch(()=>{if(O0)G0(null)}),()=>{O0=!1}},[_?.type,B0]);let N0=_?.turn_id||L,W0=KL(N0),d=a2({steerQueued:Q}),j0=($0)=>$0,A0=Yq(_,{isLastActivity:K0}),P0=e2(_,{isLastActivity:K0}),b0=e2(null,{pendingRequest:!0}),c0=($0)=>$0==="warning"?"#f59e0b":$0==="error"?"var(--danger-color)":$0==="success"?"var(--success-color)":W0,X_=X?.kind||"info",l0=c0(X_),__=c0(_?.kind||(z0?"warning":"info")),f0=HO(_,{isLastActivity:K0}),p0=FO(_,h),R0=_0?.repoPath||"",d0=_0?.branch||"",n0=_0?BO(R0,d0):"",U_=KO(_?.status_hints||_?.statusHints),o0=Z0(()=>QO(U_),[U_]),h0=Z0(()=>o0.filter(($0)=>$0?.key==="ssh"),[o0]),M0=Z0(()=>o0.filter(($0)=>$0?.key!=="ssh"),[o0]);if((!N||!M)&&(!B||!x))return null;let V_=({panelTitle:$0,text:O0,fullText:D0,totalLines:v0,maxLines:m0,titleClass:s,panelKey:o})=>{let t=f.has(o),Y0=D0||O0||"",q0=o==="thought"||o==="draft"?w(Y0):Y0,k0=typeof m0==="number",t0=t&&k0,u0=k0?z(q0,m0,v0):{text:q0||"",omitted:0,totalLines:Number.isFinite(v0)?v0:0};if(!q0&&!(Number.isFinite(u0.totalLines)&&u0.totalLines>0))return null;let U0=`agent-thinking-body${k0?" agent-thinking-body-collapsible":""}`,y0=k0?`--agent-thinking-collapsed-lines: ${m0};`:"";return F`
            <div
                class="agent-thinking"
                data-expanded=${t?"true":"false"}
                data-collapsible=${k0?"true":"false"}
                data-panel-key=${o||""}
                style=${W0?`--turn-color: ${W0};`:""}
            >
                <div class="agent-thinking-title ${s||""}">
                    ${W0&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${$0}
                    ${t0&&F`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${$0} panel`}
                            onClick=${()=>b(o)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${U0}
                    style=${y0}
                    dangerouslySetInnerHTML=${{__html:e5(q0)}}
                />
                ${!t&&u0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▸ ${u0.omitted} more lines
                    </button>
                `}
                ${t&&u0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>b(o)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},s0=Z?.tool_call?.title,O_=s0?`Awaiting approval: ${s0}`:"Awaiting approval",E0=UO(_,h),S0=($0,O0,D0=null)=>{let v0=C2($0),m0=bX($0,h),s=[D0,m0].filter(Boolean).join(" · "),o=a2({steerQueued:Q,pulsing:W$($0)||Boolean(m0)});return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${O0?`--turn-color: ${O0};`:""}
                title=${$0?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${O0&&F`<span class=${o} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${v0}</span>
                    ${s&&F`<span class="agent-status-elapsed">${s}</span>`}
                </div>
                ${$0.detail&&F`<div class="agent-thinking-body">${$0.detail}</div>`}
            </div>
        `},I0=($0,O0,D0,v0,m0,s,o,t=8,Y0=8)=>{let q0=Math.max(m0-v0,0.000000001),k0=Math.max(O0-t*2,1),t0=Math.max(D0-Y0*2,1),u0=Math.max(o-s,1),U0=o===s?O0/2:t+($0.run-s)/u0*k0,y0=Y0+(t0-($0.value-v0)/q0*t0);return{x:U0,y:y0}},a0=($0,O0,D0,v0,m0,s,o,t=8,Y0=8)=>{if(!Array.isArray($0)||$0.length===0)return"";return $0.map((q0,k0)=>{let{x:t0,y:u0}=I0(q0,O0,D0,v0,m0,s,o,t,Y0);return`${k0===0?"M":"L"} ${t0.toFixed(2)} ${u0.toFixed(2)}`}).join(" ")},A_=($0,O0="")=>{if(!Number.isFinite($0))return"—";return`${Math.abs($0)>=100?$0.toFixed(0):$0.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${O0}`},Q_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],D_=($0,O0)=>{let D0=Q_;if(!Array.isArray(D0)||D0.length===0)return"var(--accent-color)";if(D0.length===1||!Number.isFinite(O0)||O0<=1)return D0[0];let m0=Math.max(0,Math.min(Number.isFinite($0)?$0:0,O0-1))/Math.max(1,O0-1)*(D0.length-1),s=Math.floor(m0),o=Math.min(D0.length-1,s+1),t=m0-s,Y0=D0[s],q0=D0[o];if(!q0||s===o||t<=0.001)return Y0;if(t>=0.999)return q0;let k0=Math.round((1-t)*1000)/10,t0=Math.round(t*1000)/10;return`color-mix(in oklab, ${Y0} ${k0}%, ${q0} ${t0}%)`},E_=($0,O0="autoresearch")=>{let D0=Array.isArray($0)?$0.map((U0)=>({...U0,points:Array.isArray(U0?.points)?U0.points.filter((y0)=>Number.isFinite(y0?.value)&&Number.isFinite(y0?.run)):[]})).filter((U0)=>U0.points.length>0):[],v0=D0.map((U0,y0)=>({...U0,color:D_(y0,D0.length)}));if(v0.length===0)return null;let m0=320,s=120,o=v0.flatMap((U0)=>U0.points),t=o.map((U0)=>U0.value),Y0=o.map((U0)=>U0.run),q0=Math.min(...t),k0=Math.max(...t),t0=Math.min(...Y0),u0=Math.max(...Y0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${v0.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${m0} ${s}`} preserveAspectRatio="none" aria-hidden="true">
                        ${v0.map((U0)=>{let y0=U0?.key||U0?.label||"series",j_=v?.panelKey===O0&&v?.seriesKey===y0;return F`
                                <g key=${y0}>
                                    <path
                                        class=${`agent-series-chart-line${j_?" is-hovered":""}`}
                                        d=${a0(U0.points,m0,s,q0,k0,t0,u0)}
                                        style=${`--agent-series-color: ${U0.color};`}
                                        onMouseEnter=${()=>l({panelKey:O0,seriesKey:y0})}
                                        onMouseLeave=${()=>l((g0)=>g0?.panelKey===O0&&g0?.seriesKey===y0?null:g0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${v0.flatMap((U0)=>{let y0=typeof U0?.unit==="string"?U0.unit:"",j_=U0?.key||U0?.label||"series";return U0.points.map((g0,G_)=>{let L_=I0(g0,m0,s,q0,k0,t0,u0);return F`
                                    <button
                                        key=${`${j_}-point-${G_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${U0.color}; left:${L_.x/m0*100}%; top:${L_.y/s*100}%;`}
                                        onMouseEnter=${()=>l({panelKey:O0,seriesKey:j_,run:g0.run,value:g0.value,unit:y0})}
                                        onMouseLeave=${()=>l((W_)=>W_?.panelKey===O0?null:W_)}
                                        onFocus=${()=>l({panelKey:O0,seriesKey:j_,run:g0.run,value:g0.value,unit:y0})}
                                        onBlur=${()=>l((W_)=>W_?.panelKey===O0?null:W_)}
                                        aria-label=${`${U0?.label||"Series"} ${A_(g0.value,y0)} at run ${g0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${v0.map((U0)=>{let y0=U0.points[U0.points.length-1]?.value,j_=typeof U0?.unit==="string"?U0.unit:"",g0=U0?.key||U0?.label||"series",G_=v?.panelKey===O0&&v?.seriesKey===g0?v:null,L_=G_&&Number.isFinite(G_.value)?G_.value:y0,W_=G_&&typeof G_.unit==="string"?G_.unit:j_,i0=G_&&Number.isFinite(G_.run)?G_.run:null;return F`
                            <div key=${`${g0}-legend`} class=${`agent-series-legend-item${G_?" is-hovered":""}`} style=${`--agent-series-color: ${U0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${U0.color};`}></span>
                                <span class="agent-series-legend-label">${U0?.label||"Series"}</span>
                                ${i0!==null&&F`<span class="agent-series-legend-run">run ${i0}</span>`}
                                <span class="agent-series-legend-value">${A_(L_,W_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},M_=($0)=>{if(!$0)return null;let O0=typeof $0?.key==="string"?$0.key:`panel-${Math.random()}`,D0=f.has(O0),v0=$0?.title||"Extension status",m0=$0?.collapsed_text||"",s=String($0?.state||"").replace(/[-_]+/g," ").replace(/^./,(L_)=>L_.toUpperCase()),o=c0($0?.state==="completed"?"success":$0?.state==="failed"?"error":$0?.state==="stopped"?"warning":"info"),t=a2({steerQueued:Q,pulsing:$0?.state==="running"}),Y0=typeof $0?.detail_markdown==="string"?$0.detail_markdown.trim():"",q0=typeof $0?.last_run_text==="string"?$0.last_run_text.trim():"",k0=typeof $0?.tmux_command==="string"?$0.tmux_command.trim():"",t0=Array.isArray($0?.series)?$0.series:[],u0=Array.isArray($0?.actions)?$0.actions:[],U0=$0?.started_at?U6($0,h):null,y0=m0,j_=Boolean(Y0||k0||U0),g0=Boolean(Y0||t0.length>0||k0),G_=[v0,y0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${D0?"true":"false"}
                style=${o?`--turn-color: ${o};`:""}
                title=${!D0?G_||v0:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>g0?b(O0):null}
                    >
                        ${o&&F`<span class=${t} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${v0}</span>
                        ${y0&&F`<span class="agent-thinking-title-meta">${y0}</span>`}
                        ${U0&&F`<span class="agent-status-elapsed">${U0}</span>`}
                    </button>
                    ${(u0.length>0||g0)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${u0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${u0.map((L_)=>{let W_=`${O0}:${L_?.key||""}`,i0=q?.has?.(W_);return F`
                                            <button
                                                key=${W_}
                                                class=${`agent-thinking-action-btn${L_?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>K?.($0,L_)}
                                                disabled=${Boolean(i0)}
                                            >
                                                ${i0?"Working…":L_?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${g0&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${D0?"Collapse":"Expand"} ${v0}`}
                                    title=${D0?"Collapse details":"Expand details"}
                                    onClick=${()=>b(O0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${D0?F`<polyline points="4 6 8 10 12 6"></polyline>`:F`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${D0&&F`
                    <div class=${`agent-thinking-autoresearch-layout${j_?"":" chart-only"}`}>
                        ${j_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${U0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${U0}</span>
                                        ${$0?.last_activity_at&&$0?.state==="running"&&F`<span title="Since last activity">⟳ ${FL($0.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${Y0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:e5(Y0)}}
                                    />
                                `}
                                ${k0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${k0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>K?.($0,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${XO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${t0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${E_(t0,O0)}
                                    ${q0&&F`<div class="agent-series-chart-note">${q0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${N&&X&&S0(X,l0)}
            ${B&&Array.isArray(Y)&&Y.map(($0)=>M_($0))}
            ${N&&_?.type==="intent"&&S0(_,__,E0)}
            ${N&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${W0?`--turn-color: ${W0};`:""}>
                    ${b0==="dot"&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${b0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${O_}</span>
                </div>
            `}
            ${N&&k&&V_({panelTitle:j0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${N&&O&&V_({panelTitle:j0("Draft"),text:J.text,fullText:J.fullText,totalLines:J.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${N&&A&&V_({panelTitle:j0("Thoughts"),text:I.text,fullText:I.fullText,totalLines:I.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${N&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${K0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${n0||U_.length>0||p0?" agent-status-multiline":""}`} aria-live="polite" style=${W0?`--turn-color: ${W0};`:""}>
                    ${W0&&A0&&F`<span class=${d} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:P0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${f0}</span>
                        ${(n0||o0.length>0||p0)&&F`
                            <span class="agent-status-meta-row">
                                ${h0.map(($0)=>F`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${n0&&F`
                                    <span class="agent-status-git-row" title=${B0||n0}>
                                        <span class="agent-status-git-icon">${YO}</span>
                                        <span class="agent-status-git-label">
                                            ${R0&&F`<span class="agent-status-git-part">${R0}</span>`}
                                            ${R0&&d0&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${d0&&F`<span class="agent-status-git-part">${d0}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${M0.map(($0)=>F`
                                    <span key=${$0.key} class="agent-status-hint-row" title=${$0.title||$0.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:$0.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${$0.label}</span>
                                    </span>
                                `)}
                                ${p0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${K0?"Recent activity":"Last event"} ${p0}`}>
                                        <span class="agent-status-hint-icon">${qO}</span>
                                        <span class="agent-status-hint-label">${p0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function UL({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",q=G?.kind||"other",K=G?.rawInput||{},L=K.command||K.commands&&K.commands[0]||null,Q=K.diff||null,V=K.fileName||K.path||null,N=G?.description||K.description||K.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((W)=>W?.path).filter((W)=>Boolean(W)),D=Array.from(new Set([V,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let E=async(W)=>{try{await N5(j,W,X||null),$()}catch(z){console.error("Failed to respond to agent request:",z)}},H=async()=>{try{await F7(Y,`Auto-approved: ${Y}`),await N5(j,"approved",X||null),$()}catch(W){console.error("Failed to add to whitelist:",W)}},w=Z&&Z.length>0;return F`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${Y}</div>
                </div>
                ${(N||L||Q||D.length>0)&&F`
                    <div class="agent-request-body">
                        ${N&&F`
                            <div class="agent-request-description">${N}</div>
                        `}
                        ${D.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${D.map((W,z)=>F`<li key=${z}>${W}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${L&&F`
                            <pre class="agent-request-command">${L}</pre>
                        `}
                        ${Q&&F`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${Q}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${w?Z.map((W)=>F`
                            <button 
                                key=${W.optionId||W.id||String(W)}
                                class="agent-request-btn ${W.kind==="allow_once"||W.kind==="allow_always"?"primary":""}"
                                onClick=${()=>E(W.optionId||W.id||W)}
                            >
                                ${W.name||W.label||W.optionId||W.id||String(W)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>E("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>E("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}T0();T0();S_();function A6(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>A6($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${A6(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function HL(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:A6(j)})).filter(($)=>$.value)}function EO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function x9(_){if(!Array.isArray(_))return[];return _.filter(EO)}function L8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=A6(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=HL(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function EL(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=HL(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):A6(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function P_(_){return typeof _==="string"?_.trim():""}function DL(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function DO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let q=P_(X.type);if(q==="text"){let K=P_(X.text)||P_(X.content);if(K)j.push(K);return}if(q==="resource_link"){let K=P_(X.uri),L=P_(X.title)||P_(X.name)||K;if(K&&L)j.push(L===K?K:`[${L}](${K})`);return}if(q==="resource"){let K=P_(X.title)||P_(X.name)||P_(X.uri)||"Embedded resource",L=P_(X.text);if(L)j.push(`### ${K}

\`\`\`
${L}
\`\`\``);else j.push(`### ${K}`);return}if(q==="generated_widget"){let K=P_(X.title)||P_(X.name)||"Generated widget",L=P_(X.description)||P_(X.subtitle);j.push(DL([`### ${K}`,L]));return}if(q==="adaptive_card"&&P_(X.fallback_text)){j.push(P_(X.fallback_text));return}if(q==="adaptive_card_submission"){let K=L8(X);if(P_(K))j.push(P_(K));return}if(q==="file"){let K=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${K}`);return}if(q==="image"||!q){let K=P_(X.name)||P_(X.filename)||P_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${K}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return DL(j)}function K8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return DO(G,Z)}function WL(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function zL(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function OL(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(WL(j,"aria-disabled","true"),WL(j,"tabindex","-1"),"disabled"in j)zL(j,"disabled");if("readOnly"in j)zL(j,"readOnly")}}function WO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function zO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function JL(_){return WO(_)||zO(_)}function V8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function OO(_,$){let j=Math.max(V8(_),V8($)),G=Math.min(V8(_),V8($));return(j+0.05)/(G+0.05)}function JO(_,$,j="#ffffff"){let G=JL(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let q=JL(Y);if(!q)continue;let K=OO(G,q);if(K>X)Z=Y,X=K}return Z}function I9(){let _=getComputedStyle(document.documentElement),$=(U,D)=>{for(let E of U){let H=_.getPropertyValue(E).trim();if(H)return H}return D},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),q=$(["--accent-color","--color-accent"],"#1d9bf0"),K=$(["--success-color","--color-success"],"#00ba7c"),L=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),N=$(["--font-family"],"system-ui, sans-serif"),B=JO(q,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:q,good:K,warning:L,attention:Q,border:V,fontFamily:N,buttonTextColor:B}}function AL(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:q,border:K,fontFamily:L}=I9();return{fontFamily:L,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:q,subtle:q}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:K},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var AO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),kL=!1,Q8=null,ML=!1;function C9(_){_.querySelector(".adaptive-card-notice")?.remove()}function kO(_,$,j="error"){C9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function MO(_,$=(j)=>G1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function wO(_=($)=>G1($,null)){return($,j)=>{try{let G=MO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function yO(_){if(ML||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=wO(),ML=!0}async function TO(){if(kL)return;if(Q8)return Q8;return Q8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{kL=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Q8}function xO(){return globalThis.AdaptiveCards}function IO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function CO(_){return AO.has(_)}function f9(_){if(!Array.isArray(_))return[];return _.filter(IO)}function PO(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function P9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>P9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${P9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function fO(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return P9($);return typeof $==="string"?$:String($)}function RO(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((q)=>G(q));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=fO(Y.type,j[Y.id],Y);for(let[q,K]of Object.entries(Y))if(Array.isArray(K)||K&&typeof K==="object")Y[q]=G(K);return Y};return G(_)}function SO(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function gO(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=SO(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function wL(_,$,j){if(!CO($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await TO()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=xO();yO(G);let Z=new G.AdaptiveCard,X=I9();Z.hostConfig=new G.HostConfig(AL());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,q=$.state==="active"?$.payload:RO($.payload,Y);Z.parse(q),Z.onExecuteAction=(Q)=>{let V=PO(Q);if(j?.onAction)C9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((N)=>{console.error("[adaptive-card] Action failed:",N);let B=N instanceof Error?N.message:String(N||"Action failed.");kO(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let K=Z.render();if(!K)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let L=gO($);if(L){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=L.label,Q.appendChild(V),L.detail){let N=document.createElement("span");N.className="adaptive-card-status-detail",N.textContent=L.detail,Q.appendChild(N)}_.appendChild(Q)}if(C9(_),_.appendChild(K),L)OL(K);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}T0();f2();function yL({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${r$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${r$}>
    `}var B8=0,R9=null,k6={activePostId:null,speaking:!1},S9=new Set;function u9(_={}){return _.window??(typeof window<"u"?window:null)}function TL(_={}){return u9(_)?.speechSynthesis||null}function g9(){let _={...k6};for(let $ of S9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function b9(){return{...k6}}function xL(_){if(typeof _!=="function")return()=>{};return S9.add(_),_(b9()),()=>S9.delete(_)}function IL(_={}){let $=u9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function CL(_){let $=K8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function PL(_={}){let $=TL(_);if(B8+=1,R9=null,k6={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}g9()}function fL(_,$,j={}){let G=u9(j),Z=TL(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=B8+1;B8=Y;try{Z.cancel()}catch{}let q=new G.SpeechSynthesisUtterance(X);R9=q,k6={activePostId:_,speaking:!0},g9();let K=()=>{if(Y!==B8)return;R9=null,k6={activePostId:null,speaking:!1},g9()};q.onend=K,q.onerror=K;try{return Z.speak(q),!0}catch(L){return console.warn("[post-speech] speak failed:",L),K(),!1}}async function SL(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function v9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(q)=>{let K=q?.clipboardData;if(!K||typeof K.setData!=="function")return;if(K.setData("text/plain",j),G)K.setData("text/html",G);if(typeof q.preventDefault==="function")q.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let q=_.execCommand("copy");return Boolean(X||q)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function RL(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function gL(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let K=Z.getRangeAt(0);if(K&&typeof K.intersectsNode==="function")X=Boolean(K.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let K=RL(Z.anchorNode),L=RL(Z.focusNode);X=Boolean(K&&G.contains(K)||L&&G.contains(L))}if(!X)return!1;let q=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!q)return!1;return j.setData("text/plain",q),_?.preventDefault?.(),!0}function uL(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function bL(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function vL(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function uO({mediaId:_,onPreview:$}){let[j,G]=C(null);if(u(()=>{k2(_).then(G).catch((L)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,L)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?e_(X):"",K=J6(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(L)=>L.stopPropagation()}>
            <a href=${g1(_)} download=${Z} class="file-attachment-main">
                <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                </svg>
                <div class="file-info">
                    <span class="file-name">${Z}</span>
                    <span class="file-meta-row">
                        ${Y&&F`<span class="file-size">${Y}</span>`}
                        ${j.content_type&&F`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            ${K&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function bO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function vO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function mO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function cO(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function lO(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function mL(_){let $=cO(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():lO(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function hO(_,$){let j=mL($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var pO={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function nO(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=pO[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function rO(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function dO({marker:_}){let[$,j]=C(!1),G=P((V)=>{V.stopPropagation(),j((N)=>!N)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",q=_?.draft_recovered,K=String(_?.severity||"warning"),L=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${K}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&F`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${L}</span>
                ${q&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function iO({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);u(()=>{if(!Number.isFinite(j))return;k2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?g1(j):null,q=J6(G?.content_type,G?.filename||_?.label),K=Y8(q),L=q!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${q1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:F`
                    <${q1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&L&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${K}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function N8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?y4(G):null;return F`
        <div class="content-annotations">
            ${$&&$.length>0&&F`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&F`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&F`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function oO({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?e_(_.size):"",Z=_.mime_type||"",X=tO(Z),Y=O4(_.uri);return F`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(q)=>q.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${X}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&F`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&F`<span>${Z}</span>`}
                    ${G&&F`<span>${G}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function sO({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(q)=>{q.preventDefault(),q.stopPropagation();let K=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:Y||"application/octet-stream"}),L=URL.createObjectURL(K),Q=document.createElement("a");Q.href=L,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(L)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function aO({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=A9(_,$),Z=Cq(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",q=G?.description||_.description||_.subtitle||"",K=_.open_label||"Open widget",L=g(!1),Q=(V)=>{if(V)V.preventDefault(),V.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||L.current)return;let V=$?.timestamp?new Date($.timestamp).getTime():0;if(V&&Date.now()-V>1e4)return;let N=`widget_opened_${_.widget_id||$?.id||""}`;if(uL(sessionStorage,N))return;L.current=!0,bL(sessionStorage,N,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(V)=>V.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${q&&F`<div class="generated-widget-launch-description">${q}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${K}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function tO(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function eO(_){let $=O4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function _J({preview:_}){let $=O4(_.url),j=eO(_.image),G=vL(_.site_name,$);return F`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Z)=>Z.stopPropagation()}
            style=${j}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${G||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&F`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function $J(_,$){return typeof _==="string"?_:""}var cL=1800,jJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,GJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,ZJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,XJ=`
<style>
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1a1a1a;
  }
  h1 { font-size: 1.6em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h2 { font-size: 1.35em; font-weight: 700; margin: 0.6em 0 0.4em; }
  h3 { font-size: 1.15em; font-weight: 700; margin: 0.5em 0 0.3em; }
  h4, h5, h6 { font-size: 1em; font-weight: 700; margin: 0.5em 0 0.3em; }
  p { margin: 0.5em 0; }
  pre {
    background: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 12px 16px;
    overflow-x: auto;
    margin: 0.5em 0;
  }
  code {
    font-family: "Fira Code", "Cascadia Code", Consolas, "Courier New", monospace;
    font-size: 0.9em;
  }
  pre code { background: none; padding: 0; border: none; }
  :not(pre) > code { background: #f0f2f5; padding: 2px 5px; border-radius: 3px; }
  blockquote { border-left: 3px solid #d0d7de; margin: 0.5em 0; padding-left: 12px; color: #57606a; }
  table { border-collapse: collapse; margin: 0.5em 0; }
  th, td { border: 1px solid #d0d7de; padding: 6px 12px; text-align: left; }
  th { background: #f6f8fa; font-weight: 600; }
  ul, ol { margin: 0.4em 0; padding-left: 1.8em; }
  li { margin: 0.15em 0; }
  a { color: #0969da; text-decoration: none; }
  hr { border: none; border-top: 1px solid #d0d7de; margin: 1em 0; }
  img { max-width: 100%; }
</style>`;async function lL(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(v9(document,{text:$}))return!0;if(await SL(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function YJ(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=G1($,null),G=`<html><head>${XJ}</head><body>${j}</body></html>`;if(v9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return lL($)}function qJ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let q=window.getSelection?.();if(!q||q.isCollapsed)return;for(let K of $)if(gL(Y,{root:K,selection:q}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=GJ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=ZJ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=jJ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",X(K,"idle"),q.appendChild(K);let L=async(Q)=>{Q.preventDefault(),Q.stopPropagation();let N=Y.querySelector("code")?.textContent||"",B=await lL(N);X(K,B?"success":"error");let U=j.get(K);if(U)clearTimeout(U);let D=setTimeout(()=>{X(K,"idle"),j.delete(K)},cL);j.set(K,D)};K.addEventListener("click",L),G.push(()=>{K.removeEventListener("click",L);let Q=j.get(K);if(Q)clearTimeout(Q);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{G.forEach((Y)=>Y())}}function hL(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function LJ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Files:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=hL(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,fileRefs:Z}}function KJ(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Folders:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=hL(L.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,folderRefs:Z}}function VJ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1)if(j[L].trim()==="Referenced messages:"&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let V=L.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,messageRefs:Z}}function QJ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let L=0;L<j.length;L+=1){let Q=j[L].trim();if((Q==="Images:"||Q==="Attachments:")&&j[L+1]&&/^\s*-\s+/.test(j[L+1])){G=L;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let L=j[X];if(/^\s*-\s+/.test(L)){let Q=L.replace(/^\s*-\s+/,"").trim(),V=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let N=V[1],B=(V[2]||"").trim()||N;Z.push({id:N,label:B,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!L.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),q=j.slice(X),K=[...Y,...q].join(`
`);return K=K.replace(/\n{3,}/g,`

`).trim(),{content:K,attachments:Z}}function BJ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function NJ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(BJ).sort((Q,V)=>V.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),q=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),K=[],L;while(L=q.nextNode())K.push(L);for(let Q of K){let V=Q.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let N=Q.parentElement;if(N&&N.closest("code, pre, script, style"))continue;let B=V.split(Z).filter((D)=>D!=="");if(B.length===0)continue;let U=Y.createDocumentFragment();for(let D of B)if(X.test(D)){let E=Y.createElement("mark");E.className="search-highlight-term",E.textContent=D,U.appendChild(E)}else U.appendChild(Y.createTextNode(D));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function pL({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:q,userAvatarUrl:K,userAvatarBackground:L,onDelete:Q,isThreadReply:V,isThreadPrev:N,isThreadNext:B,isRemoving:U,highlightQuery:D,onFileRef:E,onOpenWidget:H,onOpenAttachmentPreview:w}){let[W,z]=C(null),[T,I]=C("idle"),[J,k]=C(()=>b9()),A=g(null),O=g(null),M=_.data,x=M.type==="agent_response",f=q||"You",S=x?X||YL:f,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",l=Boolean(x&&D&&v&&v!==S),h=x?w9(X,Y,!0):w9(f,K),r=typeof L==="string"?L.trim().toLowerCase():"",b=!x&&h.image&&(r==="clear"||r==="transparent"),e=x&&Boolean(h.image),z0=`background-color: ${b||e?"transparent":h.color}`,K0=M.content_meta,L0=Boolean(K0?.truncated),X0=Boolean(K0?.preview),B0=L0&&!X0,_0=L0?{originalLength:Number.isFinite(K0?.original_length)?K0.original_length:M.content?M.content.length:0,maxLength:Number.isFinite(K0?.max_length)?K0.max_length:0}:null,G0=M.content_blocks||[],N0=M.media_ids||[],W0=mL(G0),d=Boolean(W0?.sourceAgentName),j0=$J(M.content,M.link_previews);j0=hO(j0,G0);let{content:A0,fileRefs:P0}=LJ(j0),{content:b0,folderRefs:c0}=KJ(A0),{content:X_,messageRefs:l0}=VJ(b0),__=(i)=>{i?.preventDefault?.(),i?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},f0=(i)=>{if(i.key==="Enter"||i.key===" ")__(i)},{content:p0,attachments:R0}=QJ(X_);j0=p0;let d0=f9(G0),n0=x9(G0),o0=bO(G0)[0]||null,M0=vO(G0)[0]||null,s0=mO(G0)[0]||null,O_=d0.length===1&&typeof d0[0]?.fallback_text==="string"?d0[0].fallback_text.trim():"",E0=n0.length===1?L8(n0[0]).trim():"",S0=Boolean(O_)&&j0?.trim()===O_||Boolean(E0)&&j0?.trim()===E0,I0=Boolean(j0)&&!B0&&!S0,a0=typeof D==="string"?D.trim():"",A_=Z0(()=>{if(!j0||S0)return"";let i=G1(j0,j);return a0?NJ(i,a0):i},[j0,S0,a0]),Q_=Z0(()=>K8(_),[_]),D_=Z0(()=>IL(),[]),E_=Z0(()=>CL(_),[_]),M_=Boolean(J.speaking&&J.activePostId===_.id),$0=(i,J0)=>{i.stopPropagation(),z(g1(J0))},O0=(i)=>{w?.(i)},D0=(i)=>{i.stopPropagation(),Q?.(_)},v0=async(i)=>{i.stopPropagation();let J0=await YJ(Q_);if(I(J0?"success":"error"),O.current)clearTimeout(O.current);O.current=setTimeout(()=>{O.current=null,I("idle")},cL)},m0=(i)=>{if(i.stopPropagation(),M_){PL();return}fL(_.id,E_)},s=(i,J0)=>{let Y_=new Set;if(!i||J0.length===0)return{content:i,usedIds:Y_};return{content:i.replace(/attachment:([^\s)"']+)/g,(h_,N1,g_,J1)=>{let C_=N1.replace(/^\/+/,""),A1=J0.find((k_)=>k_.name&&k_.name.toLowerCase()===C_.toLowerCase()&&!Y_.has(k_.id))||J0.find((k_)=>!Y_.has(k_.id));if(!A1)return h_;if(Y_.add(A1.id),J1.slice(Math.max(0,g_-2),g_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:Y_}},o=[],t=[],Y0=[],q0=[],k0=[],t0=[],u0=[],U0=0;if(G0.length>0)G0.forEach((i)=>{if(i?.type==="text"&&i.annotations)u0.push(i.annotations);if(i?.type==="generated_widget")t0.push(i);else if(i?.type==="resource_link")q0.push(i);else if(i?.type==="resource")k0.push(i);else if(i?.type==="file"){let J0=N0[U0++];if(J0)t.push(J0),Y0.push({id:J0,name:i?.name||i?.filename||i?.title})}else if(i?.type==="image"||!i?.type){let J0=N0[U0++];if(J0){let Y_=typeof i?.mime_type==="string"?i.mime_type:void 0;o.push({id:J0,annotations:i?.annotations,mimeType:Y_}),Y0.push({id:J0,name:i?.name||i?.filename||i?.title})}}});else if(N0.length>0){let i=R0.length>0;N0.forEach((J0,Y_)=>{let B_=R0[Y_]||null;if(Y0.push({id:J0,name:B_?.label||null}),i)t.push(J0);else o.push({id:J0,annotations:null})})}if(R0.length>0)R0.forEach((i)=>{if(!i?.id)return;let J0=Y0.find((Y_)=>String(Y_.id)===String(i.id));if(J0&&!J0.name)J0.name=i.label});let{content:y0,usedIds:j_}=s(j0,Y0);j0=y0;let g0=o.filter(({id:i})=>!j_.has(i)),G_=t.filter((i)=>!j_.has(i)),L_=R0.length>0?R0.map((i,J0)=>({id:i.id||`attachment-${J0+1}`,label:i.label||`attachment-${J0+1}`})):Y0.map((i,J0)=>({id:i.id,label:i.name||`attachment-${J0+1}`})),W_=Z0(()=>f9(G0),[G0]),i0=Z0(()=>x9(G0),[G0]),n_=Z0(()=>{return W_.map((i)=>`${i.card_id}:${i.state}`).join("|")},[W_]);u(()=>{if(!A.current)return;return E$(A.current),qJ(A.current)},[A_]),u(()=>{return xL((i)=>{k(i)})},[]),u(()=>()=>{if(O.current)clearTimeout(O.current)},[]);let y_=g(null);return u(()=>{if(!y_.current||W_.length===0)return;let i=y_.current;i.innerHTML="";for(let J0 of W_){let Y_=document.createElement("div");i.appendChild(Y_),wL(Y_,J0,{onAction:async(B_)=>{if(B_.type==="Action.OpenUrl"){let h_=O4(B_.url||"");if(!h_)throw Error("Invalid URL");window.open(h_,"_blank","noopener,noreferrer");return}if(B_.type==="Action.Submit"){await N7({post_id:_.id,thread_id:M.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:J0.card_id,action:{type:B_.type,title:B_.title||"",data:B_.data}});return}console.warn("[post] unsupported adaptive card action:",B_.type,B_)}}).catch((B_)=>{console.error("[post] adaptive card render error:",B_),Y_.textContent=J0.fallback_text||"Card failed to render."})}},[n_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${x?"agent-post":""} ${V?"thread-reply":""} ${N?"thread-prev":""} ${B?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${x?"agent-avatar":""} ${h.image?"has-image":""}" style=${z0}>
                ${h.image?F`<img src=${h.image} alt=${S} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${x&&D_&&E_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${M_?" is-active":""}`}
                            type="button"
                            title=${M_?"Stop reading aloud":"Read aloud"}
                            aria-label=${M_?"Stop reading aloud":"Read aloud"}
                            onClick=${m0}
                        >
                            ${M_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${T==="success"?" is-success":T==="error"?" is-error":""}`}
                        type="button"
                        title=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        aria-label=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        onClick=${v0}
                        disabled=${!Q_}
                    >
                        ${T==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:T==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${D0}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${S}</span>
                    ${d&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${W0?.sourceChatJid||""}`.trim()}
                        >
                            @${W0?.sourceAgentName}
                        </span>
                    `}
                    ${l&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${__}
                            onKeyDown=${f0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${__}>${eZ(_.timestamp)}</a>
                    ${o0&&F`
                        <span
                            class="post-recovery-chip"
                            title=${nO(o0)}
                        >
                            recovered
                        </span>
                    `}
                    ${M0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${rO(M0)}
                        >
                            timeout
                        </span>
                    `}
                    ${s0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(s0.severity||"warning")}${s0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(s0.label||s0.kind||"issue")}
                        >
                            ${String(s0.label||s0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${s0&&F`
                    <${dO} marker=${s0} />
                `}
                ${B0&&_0&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${V6(_0.originalLength)} chars
                            ${_0.maxLength?F` • Display limit: ${V6(_0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${X0&&_0&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${V6(_0.maxLength)} of ${V6(_0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(P0.length>0||c0.length>0||l0.length>0||L_.length>0)&&F`
                    <div class="post-file-refs">
                        ${l0.map((i)=>{let J0=(Y_)=>{if(Y_.preventDefault(),Y_.stopPropagation(),Z)Z(i,_.chat_jid||null);else{let B_=document.getElementById("post-"+i);if(B_)B_.scrollIntoView({behavior:"smooth",block:"center"}),B_.classList.add("post-highlight"),setTimeout(()=>B_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${i}`} class="post-msg-pill-link" onClick=${J0}>
                                    <${q1}
                                        prefix="post"
                                        label=${"msg:"+i}
                                        title=${"Message "+i}
                                        icon="message"
                                        onClick=${J0}
                                    />
                                </a>
                            `})}
                        ${P0.map((i)=>{let J0=i.split("/").pop()||i;return F`
                                <${q1}
                                    prefix="post"
                                    label=${J0}
                                    title=${i}
                                    onClick=${()=>E?.(i)}
                                />
                            `})}
                        ${c0.map((i)=>{let J0=i.split("/").pop()||i;return F`
                                <${q1}
                                    prefix="post"
                                    label=${J0}
                                    title=${i}
                                    icon="folder"
                                />
                            `})}
                        ${L_.map((i)=>F`
                            <${iO}
                                key=${i.id}
                                attachment=${i}
                                onPreview=${O0}
                            />
                        `)}
                    </div>
                `}
                ${I0&&F`
                    <div 
                        ref=${A}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(i)=>{if(i.target.classList.contains("hashtag")){i.preventDefault(),i.stopPropagation();let J0=i.target.dataset.hashtag;if(J0)j?.(J0)}else if(i.target.tagName==="IMG")i.preventDefault(),i.stopPropagation(),z(i.target.src)}}
                    />
                `}
                ${W_.length>0&&F`
                    <div ref=${y_} class="post-adaptive-cards" />
                `}
                ${i0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${i0.map((i,J0)=>{let Y_=EL(i),B_=`${i.card_id}-${J0}`;return F`
                                <div key=${B_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${Y_.title}</span>
                                        </div>
                                    </div>
                                    ${Y_.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${Y_.fields.map((h_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${h_.key}: ${h_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${h_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${h_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${y4(Y_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${t0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${t0.map((i,J0)=>F`
                            <${aO}
                                key=${i.widget_id||i.id||`${_.id}-widget-${J0}`}
                                block=${i}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${u0.length>0&&F`
                    ${u0.map((i,J0)=>F`
                        <${N8} key=${J0} annotations=${i} />
                    `)}
                `}
                ${g0.length>0&&F`
                    <div class="media-preview">
                        ${g0.map(({id:i,mimeType:J0})=>{let B_=typeof J0==="string"&&J0.toLowerCase().startsWith("image/svg")?g1(i):U7(i);return F`
                                <img
                                    key=${i}
                                    src=${B_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(h_)=>$0(h_,i)}
                                />
                            `})}
                    </div>
                `}
                ${g0.length>0&&F`
                    ${g0.map(({annotations:i},J0)=>F`
                        ${i&&F`<${N8} key=${J0} annotations=${i} />`}
                    `)}
                `}
                ${G_.length>0&&F`
                    <div class="file-attachments">
                        ${G_.map((i)=>F`
                            <${uO} key=${i} mediaId=${i} onPreview=${O0} />
                        `)}
                    </div>
                `}
                ${q0.length>0&&F`
                    <div class="resource-links">
                        ${q0.map((i,J0)=>F`
                            <div key=${J0}>
                                <${oO} block=${i} />
                                <${N8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${k0.length>0&&F`
                    <div class="resource-embeds">
                        ${k0.map((i,J0)=>F`
                            <div key=${J0}>
                                <${sO} block=${i} />
                                <${N8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${M.link_previews.map((i,J0)=>F`
                            <${_J} key=${J0} preview=${i} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${W&&F`<${yL} src=${W} onClose=${()=>z(null)} />`}

    `}function nL({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:q,onOpenWidget:K,onOpenAttachmentPreview:L,emptyMessage:Q,timelineRef:V,agents:N,user:B,onDeletePost:U,reverse:D=!0,removingPostIds:E,searchQuery:H}){let[w,W]=C(!1),z=g(null),T=typeof IntersectionObserver<"u",I=P(async()=>{if(!j||!$||w)return;W(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{W(!1)}},[$,w,j]),J=P((v)=>{let{scrollTop:l,scrollHeight:h,clientHeight:r}=v.target,b=D?h-r-l:l,e=Math.max(300,r);if(b<e)I()},[D,I]);u(()=>{if(!T)return;let v=z.current,l=V?.current;if(!v||!l)return;let h=300,r=new IntersectionObserver((b)=>{for(let e of b){if(!e.isIntersecting)continue;I()}},{root:l,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return r.observe(v),()=>r.disconnect()},[T,$,j,V,I]);let k=g(I);if(k.current=I,u(()=>{if(T)return;if(!V?.current)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=V.current,r=D?l-h-v:v,b=Math.max(300,h);if(r<b)k.current?.()},[T,_,$,D,V]),u(()=>{if(!V?.current)return;if(!$||w)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=V.current,r=D?l-h-v:v,b=Math.max(300,h);if(l<=h+1||r<b)k.current?.()},[_,$,w,D,V]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${V}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let A=_.slice().sort((v,l)=>v.id-l.id),O=(v)=>{let l=v?.data?.thread_id;if(l===null||l===void 0||l==="")return null;let h=Number(l);return Number.isFinite(h)?h:null},M=new Map;for(let v=0;v<A.length;v+=1){let l=A[v],h=Number(l?.id),r=O(l);if(r!==null){let b=M.get(r)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),M.set(r,b)}else if(Number.isFinite(h)){let b=M.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,M.set(h,b)}}let x=new Map;for(let[v,l]of M.entries()){let h=new Set;if(l.anchorIndex>=0)h.add(l.anchorIndex);for(let r of l.replyIndexes)h.add(r);x.set(v,Array.from(h).sort((r,b)=>r-b))}let f=A.map((v,l)=>{let h=O(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let r=x.get(h);if(!r||r.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=r.indexOf(l);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<r.length-1}}),S=F`<div class="timeline-sentinel" ref=${z}></div>`;return F`
        <div class="timeline ${D?"reverse":"normal"}" ref=${V} onScroll=${J}>
            <div class="timeline-content">
                ${D?S:null}
                ${A.map((v,l)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),r=E?.has?.(v.id),b=f[l]||{};return F`
                    <${pL}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${r}
                        highlightQuery=${H}
                        agentName=${qL(v.data?.agent_id,N||{})}
                        agentAvatarUrl=${LL(v.data?.agent_id,N||{})}
                        userName=${B?.name||B?.user_name}
                        userAvatarUrl=${B?.avatar_url||B?.avatarUrl||B?.avatar}
                        userAvatarBackground=${B?.avatar_background||B?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${q}
                        onOpenWidget=${K}
                        onDelete=${U}
                        onOpenAttachmentPreview=${L}
                    />
                `})}
                ${D?null:S}
            </div>
        </div>
    `}T0();S_();function rL(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var F8="workspaceExplorerScale",FJ=["compact","default","comfortable"],UJ=new Set(FJ),HJ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function dL(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return UJ.has(j)?j:$}function m9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function EJ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function DJ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function c9(_={}){let $=EJ(_),j=_.stored?dL(_.stored,$):$;return DJ(j,_)}function iL(_){return HJ[dL(_)]}s7();function WJ(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function l9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function oL(_,$,j={}){let G=j.resolvePane;if(l9(_,G))return!0;return WJ($)}var _K=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function zJ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return l9($,(j)=>q_.resolve(j))}function $K(_,$,j,G=0,Z=[]){if(!j&&_K(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)$K(X,$,j,G+1,Z);return Z}function sL(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&_K(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function r9(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((q)=>[q?.path,q])):new Map,X=!j||j.length!==G.length,Y=G.map((q)=>{let K=r9(Z.get(q.path),q);if(K!==Z.get(q.path))X=!0;return K});return X?{...$,children:Y}:_}function p9(_,$,j){if(!_)return _;if(_.path===$)return r9(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=p9(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var jK=4,h9=14,OJ=16;function GK(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=GK(G);return _.__bytes=j,j}function ZK(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=jK)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let q of Z){let K=Math.max(0,Number(q?.__bytes??q?.size??0));if(K<=0)continue;if(q.type==="dir")X.push({kind:"dir",node:q,size:K});else X.push({kind:"file",name:q.name,path:q.path,size:K})}X.sort((q,K)=>K.size-q.size);let Y=X;if(X.length>h9){let q=X.slice(0,h9-1),K=X.slice(h9-1),L=K.reduce((Q,V)=>Q+V.size,0);q.push({kind:"other",name:`+${K.length} more`,path:`${G.path}/[other]`,size:L}),Y=q}return G.children=Y.map((q)=>{if(q.kind==="dir")return ZK(q.node,$+1);return{name:q.name,path:q.path,size:q.size,children:[]}}),G}function aL(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function XK(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function U8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function d9(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,q=X-Z>Y?Z+Y:X,K=U8(_,$,G,Z),L=U8(_,$,G,q),Q=U8(_,$,j,q),V=U8(_,$,j,Z),N=q-Z>Math.PI?1:0;return[`M ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`A ${G} ${G} 0 ${N} 1 ${L.x.toFixed(3)} ${L.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${N} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var YK={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function qK(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(q,K,L,Q)=>{let V=Array.isArray(q?.children)?q.children:[];if(!V.length)return;let N=Math.max(0,Number(q.size)||0);if(N<=0)return;let B=L-K,U=K;V.forEach((D,E)=>{let H=Math.max(0,Number(D.size)||0);if(H<=0)return;let w=H/N,W=U,z=E===V.length-1?L:U+B*w;if(U=z,z-W<0.003)return;let T=YK[Q];if(T){let I=XK(W,Q,j);if(G.push({key:D.path,path:D.path,label:D.name,size:H,color:I,depth:Q,startAngle:W,endAngle:z,innerRadius:T[0],outerRadius:T[1],d:d9(120,120,T[0],T[1],W,z)}),Q===1)Z.push({key:D.path,name:D.name,size:H,pct:X>0?H/X*100:0,color:I})}if(Q<jK)Y(D,W,z,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function n9(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=n9(G,$);if(Z)return Z}return null}function LK(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=YK[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,q=XK(X,1,G),L=`${$||"."}/[files]`;return{segments:[{key:L,path:L,label:_,size:j,color:q,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:d9(120,120,Z[0],Z[1],X,Y)}],legend:[{key:L,name:_,size:j,pct:100,color:q}]}}function tL(_,$=!1,j=!1){if(!_)return null;let G=GK(_),Z=ZK(_,0),X=Z.size||G,{segments:Y,legend:q}=qK(Z,X,j);if(!Y.length&&X>0){let K=LK("[files]",Z.path,X,j);Y=K.segments,q=K.legend}return{root:Z,totalSize:X,segments:Y,legend:q,truncated:$,isDarkTheme:j}}function JJ({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[q,K]=C(!1);u(()=>{let O=_?.root?.path||".";Z(O),Y([O]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;K(!0);let O=setTimeout(()=>K(!1),180);return()=>clearTimeout(O)},[G]);let L=Z0(()=>{return n9(_.root,G)||_.root},[_?.root,G]),Q=L?.size||_.totalSize||0,{segments:V,legend:N}=Z0(()=>{let O=qK(L,Q,_.isDarkTheme);if(O.segments.length>0)return O;if(Q<=0)return O;let M=L?.children?.length?"Total":"[files]";return LK(M,L?.path||_?.root?.path||".",Q,_.isDarkTheme)},[L,Q,_.isDarkTheme,_?.root?.path]),[B,U]=C(V),D=g(new Map),E=g(0);u(()=>{let O=D.current,M=new Map(V.map((v)=>[v.key,v])),x=performance.now(),f=220,S=(v)=>{let l=Math.min(1,(v-x)/220),h=l*(2-l),r=V.map((b)=>{let z0=O.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},K0=(G0,N0)=>G0+(N0-G0)*h,L0=K0(z0.startAngle,b.startAngle),X0=K0(z0.endAngle,b.endAngle),B0=K0(z0.innerRadius,b.innerRadius),_0=K0(z0.outerRadius,b.outerRadius);return{...b,d:d9(120,120,B0,_0,L0,X0)}});if(U(r),l<1)E.current=requestAnimationFrame(S)};if(E.current)cancelAnimationFrame(E.current);return E.current=requestAnimationFrame(S),D.current=M,()=>{if(E.current)cancelAnimationFrame(E.current)}},[V]);let H=B.length?B:V,w=Q>0?e_(Q):"0 B",W=L?.name||"",T=(W&&W!=="."?W:"Total")||"Total",I=w,J=X.length>1,k=(O)=>{if(!O?.path)return;let M=n9(_.root,O.path);if(!M||!Array.isArray(M.children)||M.children.length===0)return;Y((x)=>[...x,M.path]),Z(M.path),j(null)},A=()=>{if(!J)return;Y((O)=>{let M=O.slice(0,-1);return Z(M[M.length-1]||_?.root?.path||"."),M}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${q?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${L?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((O)=>F`
                    <path
                        key=${O.key}
                        d=${O.d}
                        fill=${O.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===O.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(O)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(O)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>k(O)}
                    >
                        <title>${O.label} — ${e_(O.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${J?" is-drill":""}`}
                    onClick=${A}
                    role="button"
                    aria-label="Zoom out"
                >
                    <circle
                        cx="120"
                        cy="120"
                        r="24"
                        fill="var(--bg-secondary)"
                        stroke="var(--border-color)"
                        stroke-width="1"
                        class="workspace-folder-starburst-center"
                    />
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${T}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${I}</text>
                </g>
            </svg>
            ${N.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${N.slice(0,8).map((O)=>F`
                        <div key=${O.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${O.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${O.name}>${O.name}</span>
                            <span class="workspace-folder-starburst-size">${e_(O.size)}</span>
                            <span class="workspace-folder-starburst-pct">${O.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function eL(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function KK(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function AJ(_){if(!_)return"Workspace index status";let $=[KK(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function kJ(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function MJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function wJ(_,$=null){let j=kJ(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:MJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function VK({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[L,Q]=C(null),[V,N]=C(new Set(["."])),[B,U]=C(null),[D,E]=C(null),[H,w]=C(""),[W,z]=C(null),[,T]=C(null),[I,J]=C(!0),[k,A]=C(!1),[O,M]=C(null),[x,f]=C(()=>F$("workspaceShowHidden",!1)),[S,v]=C(!1),[l,h]=C(null),[r,b]=C(null),[e,z0]=C(null),[K0,L0]=C(!1),[X0,B0]=C(null),[_0,G0]=C(null),[N0,W0]=C(null),[d,j0]=C(!1),[A0,P0]=C(()=>D5()),[b0,c0]=C(()=>aL()),[X_,l0]=C(()=>c9({stored:W1(F8),...m9()})),[__,f0]=C(!1),p0=Math.max(15000,(Number(A0?.refreshIntervalSec)||60)*1000),R0=Math.max(0,Number(A0?.folderPreviewDepth)||0),d0=g(V),n0=g(""),U_=g(null),o0=g(0),h0=g(new Set),M0=g(null),V_=g(null),s0=g(new Map),O_=g(_),E0=g($),S0=g(Z),I0=g(null),a0=g(null),A_=g(null),Q_=g(null),D_=g(null),E_=g(null),M_=g("."),$0=g(0),O0=g({path:null,dragging:!1,startX:0,startY:0}),D0=g({path:null,dragging:!1,startX:0,startY:0}),v0=g({path:null,timer:0}),m0=g(!1),s=g(0),o=g(new Map),t=g(null),Y0=g(null),q0=g(null),k0=g(null),t0=g(null),u0=g(null),U0=g(x),y0=g(j),j_=g(G??j),g0=g(0),G_=g(e),L_=g(S),W_=g(l),i0=g(null),n_=g({x:0,y:0}),y_=g(0),i=g(null),J0=g(B),Y_=g(D),B_=g(null),h_=g(W);O_.current=_,E0.current=$,S0.current=Z,u(()=>{d0.current=V},[V]),u(()=>{U0.current=x},[x]),u(()=>{y0.current=j},[j]),u(()=>{j_.current=G??j},[G,j]),u(()=>{G_.current=e},[e]);let N1=P(()=>{if(!$0.current)return;clearTimeout($0.current),$0.current=0},[]);u(()=>()=>N1(),[N1]),u(()=>{if(typeof window>"u")return;let R=()=>{l0(c9({stored:W1(F8),...m9()}))};R();let c=()=>R(),p=()=>R(),a=(H0)=>{if(!H0||H0.key===null||H0.key===F8)R()};window.addEventListener("resize",c),window.addEventListener("focus",p),window.addEventListener("storage",a);let F0=window.matchMedia?.("(pointer: coarse)"),V0=window.matchMedia?.("(hover: none)"),w0=(H0,e0)=>{if(!H0)return;if(H0.addEventListener)H0.addEventListener("change",e0);else if(H0.addListener)H0.addListener(e0)},x0=(H0,e0)=>{if(!H0)return;if(H0.removeEventListener)H0.removeEventListener("change",e0);else if(H0.removeListener)H0.removeListener(e0)};return w0(F0,c),w0(V0,c),()=>{window.removeEventListener("resize",c),window.removeEventListener("focus",p),window.removeEventListener("storage",a),x0(F0,c),x0(V0,c)}},[]),u(()=>{if(typeof window>"u")return;let R=()=>{P0(D5())},c=(F0)=>{if(!F0||F0.key===null||F0.key===m2||F0.key===c2)R()},p=()=>R(),a=(F0)=>{let V0=F0?.detail?.settings;if(V0&&typeof V0==="object"){P0({refreshIntervalSec:Number(V0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(V0.folderPreviewDepth)||0)});return}R()};return window.addEventListener("focus",p),window.addEventListener("storage",c),window.addEventListener(v2,a),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",c),window.removeEventListener(v2,a)}},[]),u(()=>{let R=(c)=>{let p=c?.detail?.path;if(!p)return;let a=p.split("/"),F0=[];for(let V0=1;V0<a.length;V0++)F0.push(a.slice(0,V0).join("/"));if(F0.length)N((V0)=>{let w0=new Set(V0);w0.add(".");for(let x0 of F0)w0.add(x0);return w0});U(p),requestAnimationFrame(()=>{let V0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(V0)V0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",R),()=>window.removeEventListener("workspace-reveal-path",R)},[]),u(()=>{L_.current=S},[S]),u(()=>{W_.current=l},[l]),u(()=>{J0.current=B},[B]),u(()=>{Y_.current=D},[D]),u(()=>{h_.current=W},[W]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let R=()=>c0(aL());R();let c=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>R();if(c?.addEventListener)c.addEventListener("change",p);else if(c?.addListener)c.addListener(p);let a=typeof MutationObserver<"u"?new MutationObserver(()=>R()):null;if(a?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)a?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(c?.removeEventListener)c.removeEventListener("change",p);else if(c?.removeListener)c.removeListener(p);a?.disconnect()}},[]),u(()=>{if(!D)return;let R=D_.current;if(!R)return;let c=requestAnimationFrame(()=>{rL(R)});return()=>cancelAnimationFrame(c)},[D]),u(()=>{if(!__)return;let R=(p)=>{let a=p?.target;if(!(a instanceof Element))return;if(t0.current?.contains(a))return;if(u0.current?.contains(a))return;f0(!1)},c=(p)=>{if(p?.key==="Escape")f0(!1),u0.current?.focus?.()};return document.addEventListener("mousedown",R),document.addEventListener("touchstart",R,{passive:!0}),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",R),document.removeEventListener("touchstart",R),document.removeEventListener("keydown",c)}},[__]);let g_=async(R,c={})=>{let p=Boolean(c?.autoOpen),a=String(R||"").trim();A(!0),z(null),T(null);try{let F0=await z7(a,20000);if(p&&a&&oL(a,F0,{resolvePane:(V0)=>q_.resolve(V0)}))return S0.current?.(a,F0),F0;return z(F0),F0}catch(F0){let V0={error:F0.message||"Failed to load preview"};return z(V0),V0}finally{A(!1)}};I0.current=g_;let J1=P(async()=>{try{let R=await D7("all");return W0(R),R}catch(R){return console.warn("[workspace-explorer] Failed to load workspace index status:",R),null}},[]);V_.current=J1;let C_=P(()=>{V_.current?.()},[]),w_=async()=>{if(!y0.current)return;try{let R=await Y6("",1,U0.current),c=sL(R.root,d0.current,U0.current);if(c===n0.current){J(!1);return}if(n0.current=c,U_.current=R.root,!o0.current)o0.current=requestAnimationFrame(()=>{o0.current=0,Q((p)=>r9(p,U_.current)),J(!1)})}catch(R){M(R.message||"Failed to load workspace"),J(!1)}},A1=async(R)=>{if(!R)return;if(h0.current.has(R))return;h0.current.add(R);try{let c=await Y6(R,1,U0.current);Q((p)=>p9(p,R,c.root))}catch(c){M(c.message||"Failed to load workspace")}finally{h0.current.delete(R)}};a0.current=A1;let z_=P(()=>{let R=B;if(!R)return".";let c=s0.current?.get(R);if(c&&c.type==="dir")return c.path;if(R==="."||!R.includes("/"))return".";let p=R.split("/");return p.pop(),p.join("/")||"."},[B]),k_=P((R)=>{let c=R?.closest?.(".workspace-row");if(!c)return null;let p=c.dataset.path,a=c.dataset.type;if(!p)return null;if(a==="dir")return p;if(p.includes("/")){let F0=p.split("/");return F0.pop(),F0.join("/")||"."}return"."},[]),F1=P((R)=>{return k_(R?.target||null)},[k_]),v_=P((R)=>{G_.current=R,z0(R)},[]),r_=P(()=>{let R=v0.current;if(R?.timer)clearTimeout(R.timer);v0.current={path:null,timer:0}},[]),s_=P((R)=>{if(!R||R==="."){r_();return}let c=s0.current?.get(R);if(!c||c.type!=="dir"){r_();return}if(d0.current?.has(R)){r_();return}if(v0.current?.path===R)return;r_();let p=setTimeout(()=>{v0.current={path:null,timer:0},a0.current?.(R),N((a)=>{let F0=new Set(a);return F0.add(R),F0})},600);v0.current={path:R,timer:p}},[r_]),H_=P((R,c)=>{if(n_.current={x:R,y:c},y_.current)return;y_.current=requestAnimationFrame(()=>{y_.current=0;let p=i0.current;if(!p)return;let a=n_.current;p.style.transform=`translate(${a.x+12}px, ${a.y+12}px)`})},[]),x1=P((R)=>{if(!R)return;let p=(s0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!p)return;b({path:R,label:p})},[]),U1=P(()=>{if(b(null),y_.current)cancelAnimationFrame(y_.current),y_.current=0;if(i0.current)i0.current.style.transform="translate(-9999px, -9999px)"},[]),u1=P((R)=>{if(!R)return".";let c=s0.current?.get(R);if(c&&c.type==="dir")return c.path;if(R==="."||!R.includes("/"))return".";let p=R.split("/");return p.pop(),p.join("/")||"."},[]),k1=P(()=>{E(null),w("")},[]),e1=P((R)=>{if(!R)return;let p=(s0.current?.get(R)?.name||R.split("/").pop()||R).trim();if(!p||R===".")return;E(R),w(p)},[]),u4=P(async()=>{let R=Y_.current;if(!R)return;let c=(H||"").trim();if(!c){k1();return}let p=s0.current?.get(R),a=(p?.name||R.split("/").pop()||R).trim();if(c===a){k1();return}try{let V0=(await A7(R,c))?.path||R,w0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(k1(),M(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:R,newPath:V0,type:p?.type||"file"}})),p?.type==="dir")N((x0)=>{let H0=new Set;for(let e0 of x0)if(e0===R)H0.add(V0);else if(e0.startsWith(`${R}/`))H0.add(`${V0}${e0.slice(R.length)}`);else H0.add(e0);return H0});if(U(V0),p?.type==="dir")z(null),A(!1),T(null);else I0.current?.(V0);a0.current?.(w0),C_()}catch(F0){M(F0?.message||"Failed to rename file")}},[k1,H,C_]),A$=P(async(R)=>{let a=R||".";for(let F0=0;F0<50;F0+=1){let w0=`untitled${F0===0?"":`-${F0}`}.md`;try{let H0=(await J7(a,w0,""))?.path||(a==="."?w0:`${a}/${w0}`);if(a&&a!==".")N((e0)=>new Set([...e0,a]));U(H0),M(null),a0.current?.(a),I0.current?.(H0),C_();return}catch(x0){if(x0?.status===409||x0?.code==="file_exists")continue;M(x0?.message||"Failed to create file");return}}M("Failed to create file (untitled name already in use).")},[]),a_=P((R)=>{if(R?.stopPropagation?.(),K0)return;let c=u1(J0.current);A$(c)},[K0,u1,A$]);u(()=>{if(typeof window>"u")return;let R=(c)=>{let p=c?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;Q((x0)=>{let H0=x0;for(let e0 of p){if(!e0?.root)continue;if(!H0||e0.path==="."||!e0.path)H0=e0.root;else H0=p9(H0,e0.path,e0.root)}if(H0)n0.current=sL(H0,d0.current,U0.current);return J(!1),H0});let a=J0.current;if(Boolean(a)&&p.some((x0)=>{let H0=x0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)||H0.startsWith(`${a}/`)}))o.current.clear();if(C_(),!a||!h_.current)return;let V0=s0.current?.get(a);if(V0&&V0.type==="dir")return;if(p.some((x0)=>{let H0=x0?.path||"";if(!H0||H0===".")return!0;return a===H0||a.startsWith(`${H0}/`)}))I0.current?.(a)};return window.addEventListener("workspace-update",R),()=>window.removeEventListener("workspace-update",R)},[]),M0.current=w_;let m_=g(()=>{if(typeof window>"u")return;let R=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),c=j_.current??y0.current,p=document.visibilityState!=="hidden"&&(c||R.matches&&y0.current);q6(p,U0.current).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",a,{visible:p,showHidden:U0.current})})}).current,M1=g(0),H1=g(()=>{if(M1.current)clearTimeout(M1.current);M1.current=setTimeout(()=>{M1.current=0,m_()},250)}).current;u(()=>{if(y0.current)M0.current?.(),V_.current?.();H1()},[j,G]),u(()=>{M0.current(),V_.current?.();let R=setInterval(()=>{M0.current(),V_.current?.()},p0);return()=>clearInterval(R)},[p0]),u(()=>{m_();let R=D4("previewHeight",null),c=Number.isFinite(R)?Math.min(Math.max(R,80),600):280;if(s.current=c,A_.current)A_.current.style.setProperty("--preview-height",`${c}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),a=()=>H1();if(p.addEventListener)p.addEventListener("change",a);else if(p.addListener)p.addListener(a);return document.addEventListener("visibilitychange",a),()=>{if(o0.current)cancelAnimationFrame(o0.current),o0.current=0;if(p.removeEventListener)p.removeEventListener("change",a);else if(p.removeListener)p.removeListener(a);if(document.removeEventListener("visibilitychange",a),M1.current)clearTimeout(M1.current),M1.current=0;q6(!1,U0.current).catch((F0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",F0,{showHidden:U0.current})})}},[]);let _1=Z0(()=>$K(L,V,x),[L,V,x]),k$=Z0(()=>new Map(_1.map((R)=>[R.node.path,R.node])),[_1]),M$=Z0(()=>iL(X_),[X_]);s0.current=k$;let T_=(B?s0.current.get(B):null)?.type==="dir";u(()=>{if(!B||!T_){G0(null),t.current=null,Y0.current=null;return}if(R0<=0){G0({loading:!1,error:null,payload:null,disabled:!0}),t.current=null,Y0.current=null;return}let R=B,c=`${x?"hidden":"visible"}:${R0}:${B}`,p=o.current,a=p.get(c);if(a?.root){p.delete(c),p.set(c,a);let w0=tL(a.root,Boolean(a.truncated),b0);if(w0)t.current=w0,Y0.current=B,G0({loading:!1,error:null,payload:w0,disabled:!1});return}let F0=t.current,V0=Y0.current;G0({loading:!0,error:null,payload:V0===B?F0:null,disabled:!1}),Y6(B,R0,x).then((w0)=>{if(J0.current!==R)return;let x0={root:w0?.root,truncated:Boolean(w0?.truncated)};p.delete(c),p.set(c,x0);while(p.size>OJ){let e0=p.keys().next().value;if(!e0)break;p.delete(e0)}let H0=tL(x0.root,x0.truncated,b0);t.current=H0,Y0.current=B,G0({loading:!1,error:null,payload:H0,disabled:!1})}).catch((w0)=>{if(J0.current!==R)return;G0({loading:!1,error:w0?.message||"Failed to load folder size chart",payload:V0===B?F0:null,disabled:!1})})},[B,T_,x,b0,R0]);let L1=Boolean(W&&W.kind==="text"&&!T_&&(!W.size||W.size<=262144)),w$=L1?"Open in editor":W?.size>262144?"File too large to edit":"File is not editable",b4=Boolean(B&&!T_&&zJ(B)),$$=Boolean(B&&B!=="."),v4=Boolean(B&&!T_),m4=Boolean(B&&!T_),y$=B&&T_?y2(B,x):null,T$=KK(N0),b1=AJ(N0),v1=N0?.state||"never_indexed",c4=v1!=="ready",K1=P(()=>f0(!1),[]),f_=P(async(R)=>{K1();try{await R?.()}catch(c){console.warn("[workspace-explorer] Header menu action failed:",c)}},[K1]),l4=P(async(R)=>{R?.stopPropagation?.(),j0(!0),W0((c)=>({scope:"all",last_indexed_at:c?.last_indexed_at||null,last_error:null,indexed_file_count:c?.indexed_file_count||0,roots:c?.roots||[],updated_at:c?.updated_at||null,state:"indexing"}));try{let c=await W7("all");W0(c),M(null),n0.current="",M0.current?.()}catch(c){let p=c?.message||"Failed to reindex workspace";W0((a)=>({scope:"all",last_indexed_at:a?.last_indexed_at||null,last_error:p,indexed_file_count:a?.indexed_file_count||0,roots:a?.roots||[],updated_at:a?.updated_at||null,state:"failed"})),M(p)}finally{j0(!1)}},[]);u(()=>{let R=q0.current;if(k0.current)k0.current.dispose(),k0.current=null;if(!R)return;if(R.innerHTML="",!B||T_||!W||W.error)return;let c={path:B,content:typeof W.text==="string"?W.text:void 0,mtime:W.mtime,size:W.size,preview:W,mode:"view"},p=q_.resolve(c)||q_.get("workspace-preview-default");if(!p)return;let a=p.mount(R,c);return k0.current=a,()=>{if(k0.current===a)a.dispose(),k0.current=null;R.innerHTML=""}},[B,T_,W]);let I1=(R)=>{let c=R?.target;if(c instanceof Element)return c;return c?.parentElement||null},x$=(R)=>{return Boolean(R?.closest?.(".workspace-node-icon, .workspace-label-text"))},h4=(R)=>{if(!R)return!1;if(R.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(R.isContentEditable)},R5=g((R)=>{let c=I1(R),p=c?.closest?.("[data-path]");if(!p)return;let a=p.dataset.path;if(!a||a===".")return;let F0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),V0=Boolean(c?.closest?.(".workspace-caret"));if(F0||V0)return;if(Y_.current===a)return;e1(a)}).current,S5=g((R)=>{if(m0.current){m0.current=!1;return}let c=I1(R),p=c?.closest?.("[data-path]");if(Q_.current?.focus?.(),!p)return;let a=p.dataset.path,F0=p.dataset.type,V0=Boolean(c?.closest?.(".workspace-caret")),w0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),x0=J0.current===a,H0=Y_.current;if(H0){if(H0===a)return;k1()}if(F0==="dir"){if(B_.current=null,U(a),z(null),T(null),A(!1),!d0.current.has(a))a0.current?.(a);if(x0&&!V0)return;N((p_)=>{let $1=new Set(p_);if($1.has(a))$1.delete(a);else $1.add(a);return $1})}else{B_.current=null,U(a);let e0=s0.current.get(a);if(e0)O_.current?.(e0.path,e0);if(!w0&&!V0)I0.current?.(a)}}).current,Z4=g(()=>{n0.current="",M0.current(),V_.current?.(),Array.from(d0.current||[]).filter((c)=>c&&c!==".").forEach((c)=>a0.current?.(c))}).current,I$=g(()=>{B_.current=null,U(null),z(null),T(null),A(!1)}).current,p4=g(()=>{f((R)=>{let c=!R;if(typeof window<"u")K_("workspaceShowHidden",String(c));return U0.current=c,q6(!0,c).catch((a)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",a,{showHidden:c})}),n0.current="",M0.current?.(),Array.from(d0.current||[]).filter((a)=>a&&a!==".").forEach((a)=>a0.current?.(a)),c})}).current,n4=g((R)=>{if(I1(R)?.closest?.("[data-path]"))return;I$()}).current,V1=P(async(R)=>{if(!R)return;let c=R.split("/").pop()||R;if(!window.confirm(`Delete "${c}"? This cannot be undone.`))return;try{await M7(R);let a=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(J0.current===R)I$();a0.current?.(a),M(null),C_()}catch(a){z((F0)=>({...F0||{},error:a.message||"Failed to delete file"}))}},[I$]),C$=P((R)=>{let c=Q_.current;if(!c||!R||typeof CSS>"u"||typeof CSS.escape!=="function")return;c.querySelector(`[data-path="${CSS.escape(R)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),X4=P((R)=>{let c=I1(R);if(Y_.current||h4(c))return;let p=_1;if(!p||p.length===0)return;let a=B?p.findIndex((F0)=>F0.node.path===B):-1;if(R.key==="ArrowDown"){R.preventDefault();let F0=Math.min(a+1,p.length-1),V0=p[F0];if(!V0)return;if(U(V0.node.path),V0.node.type!=="dir")O_.current?.(V0.node.path,V0.node),I0.current?.(V0.node.path);else z(null),A(!1),T(null);C$(V0.node.path);return}if(R.key==="ArrowUp"){R.preventDefault();let F0=a<=0?0:a-1,V0=p[F0];if(!V0)return;if(U(V0.node.path),V0.node.type!=="dir")O_.current?.(V0.node.path,V0.node),I0.current?.(V0.node.path);else z(null),A(!1),T(null);C$(V0.node.path);return}if(R.key==="ArrowRight"&&a>=0){let F0=p[a];if(F0?.node?.type==="dir"&&!V.has(F0.node.path))R.preventDefault(),a0.current?.(F0.node.path),N((V0)=>new Set([...V0,F0.node.path]));return}if(R.key==="ArrowLeft"&&a>=0){let F0=p[a];if(F0?.node?.type==="dir"&&V.has(F0.node.path))R.preventDefault(),N((V0)=>{let w0=new Set(V0);return w0.delete(F0.node.path),w0});return}if(R.key==="Enter"&&a>=0){R.preventDefault();let F0=p[a];if(!F0)return;let V0=F0.node.path;if(F0.node.type==="dir"){if(!d0.current.has(V0))a0.current?.(V0);N((x0)=>{let H0=new Set(x0);if(H0.has(V0))H0.delete(V0);else H0.add(V0);return H0}),z(null),T(null),A(!1)}else O_.current?.(V0,F0.node),I0.current?.(V0);return}if((R.key==="Delete"||R.key==="Backspace")&&a>=0){let F0=p[a];if(!F0||F0.node.type==="dir")return;R.preventDefault(),V1(F0.node.path);return}if(R.key==="Escape")R.preventDefault(),I$()},[I$,V1,V,_1,C$,B]),Y4=P((R)=>{let c=wJ(R,Y_.current);if(!c)return;O0.current={path:c.dragPath,dragging:!1,startX:c.startX,startY:c.startY}},[]),m1=P(()=>{let R=O0.current;if(R?.dragging&&R.path){let c=G_.current||z_(),p=i.current;if(typeof p==="function")p(R.path,c)}O0.current={path:null,dragging:!1,startX:0,startY:0},g0.current=0,v(!1),h(null),v_(null),r_(),U1()},[z_,U1,v_,r_]),E1=P((R)=>{let c=O0.current,p=R?.touches?.[0];if(!p||!c?.path)return;let a=Math.abs(p.clientX-c.startX),F0=Math.abs(p.clientY-c.startY),V0=a>8||F0>8;if(!c.dragging&&V0)c.dragging=!0,v(!0),h("move"),x1(c.path);if(c.dragging){R.preventDefault(),H_(p.clientX,p.clientY);let w0=document.elementFromPoint(p.clientX,p.clientY),x0=k_(w0)||z_();if(G_.current!==x0)v_(x0);s_(x0)}},[k_,z_,x1,H_,v_,s_]),g5=g((R)=>{R.preventDefault();let c=A_.current;if(!c)return;let p=R.clientY,a=s.current||280,F0=R.currentTarget;F0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let V0=p,w0=(H0)=>{V0=H0.clientY;let e0=c.clientHeight-80,p_=Math.min(Math.max(a-(H0.clientY-p),80),e0);c.style.setProperty("--preview-height",`${p_}px`),s.current=p_},x0=()=>{let H0=c.clientHeight-80,e0=Math.min(Math.max(a-(V0-p),80),H0);s.current=e0,F0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",K_("previewHeight",String(Math.round(e0))),document.removeEventListener("mousemove",w0),document.removeEventListener("mouseup",x0)};document.addEventListener("mousemove",w0),document.addEventListener("mouseup",x0)}).current,q4=g((R)=>{R.preventDefault();let c=A_.current;if(!c)return;let p=R.touches[0];if(!p)return;let a=p.clientY,F0=s.current||280,V0=R.currentTarget;V0.classList.add("dragging"),document.body.style.userSelect="none";let w0=(H0)=>{let e0=H0.touches[0];if(!e0)return;H0.preventDefault();let p_=c.clientHeight-80,$1=Math.min(Math.max(F0-(e0.clientY-a),80),p_);c.style.setProperty("--preview-height",`${$1}px`),s.current=$1},x0=()=>{V0.classList.remove("dragging"),document.body.style.userSelect="",K_("previewHeight",String(Math.round(s.current||F0))),document.removeEventListener("touchmove",w0),document.removeEventListener("touchend",x0),document.removeEventListener("touchcancel",x0)};document.addEventListener("touchmove",w0,{passive:!1}),document.addEventListener("touchend",x0),document.addEventListener("touchcancel",x0)}).current,j$=P((R=B)=>{if(!R)return;eL(w2(R))},[B]),t_=async()=>{if(!B||T_)return;await V1(B)},P$=(R)=>{return Array.from(R?.dataTransfer?.types||[]).includes("Files")},r4=P((R)=>{if(!P$(R))return;if(R.preventDefault(),g0.current+=1,!L_.current)v(!0);h("upload");let c=F1(R)||z_();v_(c),s_(c)},[z_,F1,v_,s_]),G$=P((R)=>{if(!P$(R))return;if(R.preventDefault(),R.dataTransfer)R.dataTransfer.dropEffect="copy";if(!L_.current)v(!0);if(W_.current!=="upload")h("upload");let c=F1(R)||z_();if(G_.current!==c)v_(c);s_(c)},[z_,F1,v_,s_]),g6=P((R)=>{if(!P$(R))return;if(R.preventDefault(),g0.current=Math.max(0,g0.current-1),g0.current===0)v(!1),h(null),v_(null),r_()},[v_,r_]),u_=P(async(R,c=".")=>{let p=Array.from(R||[]);if(p.length===0)return;let a=c&&c!==""?c:".",F0=a!=="."?a:"workspace root";N1(),L0(!0),B0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let V0=null;for(let w0=0;w0<p.length;w0++){let x0=p[w0],H0=x0?.name||`file ${w0+1}`;B0((p_)=>({...p_,current:w0+1,name:H0,percent:0}));let e0=(p_)=>B0(($1)=>({...$1,percent:p_.percent}));try{V0=await M2(x0,a,{onProgress:e0})}catch(p_){let $1=p_?.status,L$=p_?.code;if($1===409||L$==="file_exists"){if(!window.confirm(`"${H0}" already exists in ${F0}. Overwrite?`))continue;V0=await M2(x0,a,{overwrite:!0,onProgress:e0})}else throw p_}}if(V0?.path)B_.current=V0.path,U(V0.path),I0.current?.(V0.path);a0.current?.(a),C_(),B0((w0)=>({...w0,done:!0})),N1(),$0.current=window.setTimeout(()=>{$0.current=0,B0(null)},1500)}catch(V0){M(V0.message||"Failed to upload file"),B0((w0)=>w0?{...w0,error:V0.message||"Upload failed"}:null),N1(),$0.current=window.setTimeout(()=>{$0.current=0,B0(null)},4000)}finally{L0(!1)}},[N1]),p8=P(async(R,c)=>{if(!R)return;let p=s0.current?.get(R);if(!p)return;let a=c&&c!==""?c:".",F0=R.includes("/")?R.split("/").slice(0,-1).join("/")||".":".";if(a===F0)return;try{let w0=(await k7(R,a))?.path||R;if(p.type==="dir")N((x0)=>{let H0=new Set;for(let e0 of x0)if(e0===R)H0.add(w0);else if(e0.startsWith(`${R}/`))H0.add(`${w0}${e0.slice(R.length)}`);else H0.add(e0);return H0});if(U(w0),p.type==="dir")z(null),A(!1),T(null);else I0.current?.(w0);a0.current?.(F0),a0.current?.(a),C_()}catch(V0){M(V0?.message||"Failed to move entry")}},[]);i.current=p8;let n8=P(async(R)=>{if(!P$(R))return;R.preventDefault(),g0.current=0,v(!1),h(null),z0(null),r_();let c=Array.from(R?.dataTransfer?.files||[]);if(c.length===0)return;let p=G_.current||F1(R)||z_();await u_(c,p)},[z_,F1,u_]),C1=P((R)=>{if(R?.stopPropagation?.(),K0)return;let c=R?.currentTarget?.dataset?.uploadTarget||".";M_.current=c,E_.current?.click()},[K0]),L4=P((R)=>{R?.preventDefault?.(),R?.stopPropagation?.();let c=R?.currentTarget?.dataset?.folderHintTarget||J0.current||".";if(!c)return;E0.current?.(c,s0.current.get(c))},[]),f$=P(()=>{if(K0)return;let R=J0.current,c=R?s0.current?.get(R):null;M_.current=c?.type==="dir"?c.path:".",E_.current?.click()},[K0]),R$=P(()=>{f_(()=>a_(null))},[f_,a_]),S$=P(()=>{f_(()=>f$())},[f_,f$]),d4=P(()=>{f_(()=>Z4())},[f_,Z4]),Z$=P(()=>{f_(()=>p4())},[f_,p4]),X$=P(()=>{if(!B||!b4)return;f_(()=>S0.current?.(B,W))},[f_,B,b4,W]),K4=P(()=>{if(!B||!L1)return;f_(()=>S0.current?.(B,W))},[f_,B,L1,W]),V4=P(()=>{if(!B||B===".")return;f_(()=>e1(B))},[f_,B,e1]),Y$=P(()=>{if(!B||T_)return;f_(()=>t_())},[f_,B,T_,t_]),u6=P(()=>{if(!B||T_)return;f_(()=>j$())},[f_,B,T_,j$]),q$=P(()=>{if(!y$)return;K1(),eL(y$)},[K1,y$]),b6=P(()=>{K1(),X?.()},[K1,X]),u5=P(()=>{K1(),Y?.()},[K1,Y]),b5=P(()=>{K1(),q?.()},[K1,q]),v5=P((R)=>{if(!R||R.button!==0)return;let c=R.currentTarget;if(!c||!c.dataset)return;let p=c.dataset.path;if(!p||p===".")return;if(Y_.current===p)return;let a=I1(R);if(a?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(a))return;R.preventDefault(),D0.current={path:p,dragging:!1,startX:R.clientX,startY:R.clientY};let F0=(w0)=>{let x0=D0.current;if(!x0?.path)return;let H0=Math.abs(w0.clientX-x0.startX),e0=Math.abs(w0.clientY-x0.startY),p_=H0>4||e0>4;if(!x0.dragging&&p_)x0.dragging=!0,m0.current=!0,v(!0),h("move"),x1(x0.path),H_(w0.clientX,w0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(x0.dragging){w0.preventDefault(),H_(w0.clientX,w0.clientY);let $1=document.elementFromPoint(w0.clientX,w0.clientY),L$=k_($1)||z_();if(G_.current!==L$)v_(L$);s_(L$)}},V0=()=>{document.removeEventListener("mousemove",F0),document.removeEventListener("mouseup",V0);let w0=D0.current;if(w0?.dragging&&w0.path){let x0=G_.current||z_(),H0=i.current;if(typeof H0==="function")H0(w0.path,x0)}D0.current={path:null,dragging:!1,startX:0,startY:0},g0.current=0,v(!1),h(null),v_(null),r_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{m0.current=!1},0)};document.addEventListener("mousemove",F0),document.addEventListener("mouseup",V0)},[k_,z_,x1,H_,U1,v_,s_,r_]),r8=P(async(R)=>{let c=Array.from(R?.target?.files||[]);if(c.length===0)return;let p=M_.current||".";if(await u_(c,p),M_.current=".",R?.target)R.target.value=""},[u_]);return F`
        <aside
            class=${`workspace-sidebar${S?" workspace-drop-active":""}`}
            data-workspace-scale=${X_}
            ref=${A_}
            onDragEnter=${r4}
            onDragOver=${G$}
            onDragLeave=${g6}
            onDrop=${n8}
        >
            <input type="file" multiple style="display:none" ref=${E_} onChange=${r8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${u0}
                            class=${`workspace-menu-button${__?" active":""}`}
                            onClick=${(R)=>{R.stopPropagation(),f0((c)=>!c)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${__?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${__&&F`
                            <div class="workspace-menu-dropdown" ref=${t0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${R$} disabled=${K0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${K0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${d4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>f_(()=>l4())} disabled=${d}>
                                    ${d?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${x?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${x?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||q)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b6}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u5}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${b5}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${B&&F`<div class="workspace-menu-separator"></div>`}
                                ${b4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Open in tab</button>
                                `}
                                ${B&&!T_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${K4} disabled=${!L1}>Open in editor</button>
                                `}
                                ${$$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${V4}>Rename selected</button>
                                `}
                                ${m4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${u6}>Download selected file</button>
                                `}
                                ${y$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q$}>Download selected folder (zip)</button>
                                `}
                                ${v4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Y$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{f0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${a_} title="New file" disabled=${K0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${Z4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${c4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${v1}`} title=${b1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${T$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${n4}>
                ${X0&&F`
                    <div class="workspace-upload-strip">
                        <div class="workspace-upload-strip-text">
                            ${X0.error?F`<span class="workspace-upload-strip-error">${X0.error}</span>`:X0.done?F`<span>Done</span>`:F`<span>${X0.total>1?`Uploading ${X0.current}/${X0.total}: ${X0.name}`:`Uploading ${X0.name}`}${X0.percent>0?` (${X0.percent}%)`:"…"}</span>`}
                        </div>
                        ${!X0.done&&!X0.error&&F`
                            <div class="workspace-upload-strip-bar">
                                <div class="workspace-upload-strip-fill" style=${`width:${X0.percent||0}%`}></div>
                            </div>
                        `}
                    </div>
                `}
                ${I&&F`<div class="workspace-loading">Loading…</div>`}
                ${O&&F`<div class="workspace-error">${O}</div>`}
                ${L&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${Q_}
                        tabIndex="0"
                        onClick=${S5}
                        onDblClick=${R5}
                        onKeyDown=${X4}
                        onTouchStart=${Y4}
                        onTouchEnd=${m1}
                        onTouchMove=${E1}
                        onTouchCancel=${m1}
                    >
                        ${_1.map(({node:R,depth:c})=>{let p=R.type==="dir",a=R.path===B,F0=R.path===D,V0=p&&V.has(R.path),w0=e&&R.path===e,x0=Array.isArray(R.children)&&R.children.length>0?R.children.length:Number(R.child_count)||0;return F`
                                <div
                                    key=${R.path}
                                    class=${`workspace-row${a?" selected":""}${w0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+c*M$.indentPx}px`}}
                                    data-path=${R.path}
                                    data-type=${R.type}
                                    onMouseDown=${v5}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${p?V0?F`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:F`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${p?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${p?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${F0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${D_}
                                                value=${H}
                                                onInput=${(H0)=>w(H0?.target?.value||"")}
                                                onKeyDown=${(H0)=>{if(H0.stopPropagation(),H0.key==="Enter")H0.preventDefault(),u4();else if(H0.key==="Escape")H0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(H0)=>H0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${R.name}</span></span>`}
                                    ${p&&!V0&&x0>0&&F`
                                        <span class="workspace-count">${x0}</span>
                                    `}
                                    ${p&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${R.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${R.path}`}
                                            onClick=${L4}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                                <path d="M12 11v6"/>
                                                <path d="M9 14h6"/>
                                            </svg>
                                        </button>
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${R.path}
                                            title="Upload files to this folder"
                                            onClick=${C1}
                                            disabled=${K0}
                                        >
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                                <polyline points="7 8 12 3 17 8"/>
                                                <line x1="12" y1="3" x2="12" y2="15"/>
                                            </svg>
                                        </button>
                                    `}
                                </div>
                            `})}
                    </div>
                `}
            </div>
            ${B&&F`
                <div class="workspace-preview-splitter-h" onMouseDown=${g5} onTouchStart=${q4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${B}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${a_} title="New file" disabled=${K0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!T_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>L1&&S0.current?.(B,W)}
                                    title=${w$}
                                    disabled=${!L1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${t_}
                                    title="Delete file"
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="3 6 5 6 21 6" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
                                        <line x1="10" y1="11" x2="10" y2="17" />
                                        <line x1="14" y1="11" x2="14" y2="17" />
                                    </svg>
                                </button>
                            `}
                            ${T_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${B}
                                        onClick=${L4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${B}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${f$}
                                        title="Upload files to this folder" disabled=${K0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${y2(B,x)} download
                                        title="Download folder as zip" onClick=${(R)=>R.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${w2(B)} download
                                        title="Download" onClick=${(R)=>R.stopPropagation()}>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </a>`}
                        </div>
                    </div>
                    ${k&&F`<div class="workspace-loading">Loading preview…</div>`}
                    ${W?.error&&F`<div class="workspace-error">${W.error}</div>`}
                    ${T_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${_0?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${_0?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${_0?.error&&F`<div class="workspace-error">${_0.error}</div>`}
                        ${_0?.payload&&_0.payload.segments?.length>0&&F`
                            <${JJ} payload=${_0.payload} />
                        `}
                        ${_0?.payload&&(!_0.payload.segments||_0.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${W&&!W.error&&!T_&&F`
                        <div class="workspace-preview-body" ref=${q0}></div>
                    `}
                </div>
            `}
            ${r&&F`
                <div class="workspace-drag-ghost" ref=${i0}>${r.label}</div>
            `}
        </aside>
    `}T0();var yJ=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function H8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function QK(_,$,j){let G=H8(_,$,j);return G!=null&&yJ.has(G)}function BK(_,$,j){return H8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function NK(_,$,j){return H8(_,$,j)==="editor"}var TJ=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,xJ=/\.(csv|tsv)$/i,IJ=/\.pdf$/i,CJ=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function PJ(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=nq(j,{hasPopOutTab:$});if(G)return G;if(TJ.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(xJ.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(IJ.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(CJ.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function FK({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:q,onToggleDiff:K,onEditSource:L,previewTabs:Q,diffTabs:V,paneOverrides:N,detachedTabs:B,onReattachTab:U,onToggleDock:D,dockVisible:E,onToggleZen:H,zenMode:w,onPopOutTab:W}){let[z,T]=C(null),I=g(null);u(()=>{if(!z)return;let b=(e)=>{if(e.type==="keydown"&&e.key!=="Escape")return;T(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[z]),u(()=>{let b=(e)=>{if(e.ctrlKey&&e.key==="Tab"){if(e.preventDefault(),!_.length)return;let z0=_.findIndex((K0)=>K0.id===$);if(e.shiftKey){let K0=_[(z0-1+_.length)%_.length];j?.(K0.id)}else{let K0=_[(z0+1)%_.length];j?.(K0.id)}return}if((e.ctrlKey||e.metaKey)&&e.key==="w"){let z0=document.querySelector(".editor-pane");if(z0&&z0.contains(document.activeElement)){if(e.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let J=P((b,e)=>{if(b.button===0){j?.(e);return}if(b.button===1)b.preventDefault(),G?.(e)},[j,G]),k=P((b,e)=>{if(b.defaultPrevented)return;if(b.button===0)j?.(e)},[j]),A=P((b,e)=>{b.preventDefault(),T({id:e,x:b.clientX,y:b.clientY})},[]),O=P((b)=>{b.stopPropagation()},[]),M=P((b,e)=>{b.preventDefault(),b.stopPropagation(),G?.(e)},[G]);u(()=>{if(!$||!I.current)return;let b=I.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let x=P((b)=>{if(!(N instanceof Map))return null;return N.get(b)||null},[N]),f=Z0(()=>_.find((b)=>b.id===z?.id)||null,[z?.id,_]),S=Z0(()=>{let b=z?.id;if(!b)return!1;return QK(b,x(b),(e)=>q_.resolve(e))},[z?.id,x]),v=Z0(()=>{let b=z?.id;if(!b)return"Edit Source";return BK(b,x(b),(e)=>q_.resolve(e))},[z?.id,x]),l=Z0(()=>{let b=z?.id;if(!b||!(B instanceof Map))return!1;return B.has(b)},[z?.id,B]),h=Z0(()=>{let b=z?.id;if(!b||!(V instanceof Set))return!1;return V.has(b)},[z?.id,V]),r=Z0(()=>{let b=z?.id;if(!b)return!1;let e=_.find((K0)=>K0.id===b)||null;if(!e)return!1;return NK(b,x(b),(K0)=>q_.resolve(K0))&&Boolean(e.dirty||h)},[z?.id,h,x,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${I} role="tablist">
            ${_.map((b)=>F`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${(e)=>J(e,b.id)}
                    onClick=${(e)=>k(e,b.id)}
                    onContextMenu=${(e)=>A(e,b.id)}
                >
                    ${b.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${B instanceof Map&&B.has(b.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${O}
                        onMouseDown=${O}
                        onClick=${(e)=>M(e,b.id)}
                        title=${b.dirty?"Unsaved changes":"Close"}
                        aria-label=${b.dirty?"Unsaved changes":`Close ${b.label}`}
                    >
                        ${b.dirty?F`<span class="tab-dirty-dot" aria-hidden="true"></span>`:F`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${D&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${E?" active":""}`}
                    onClick=${D}
                    title=${`${E?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${E?"Hide":"Show"} terminal`}
                    aria-pressed=${E?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${H&&F`
                <button
                    class=${`tab-strip-zen-toggle${w?" active":""}`}
                    onClick=${H}
                    title=${`${w?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${w?"Exit":"Enter"} zen mode`}
                    aria-pressed=${w?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${w?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${z&&F`
            <div class="tab-context-menu" style=${{left:z.x+"px",top:z.y+"px"}}>
                <button onClick=${()=>{G?.(z.id),T(null)}}>Close</button>
                <button onClick=${()=>{Z?.(z.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(z.id),T(null)}}>
                    ${f?.pinned?"Unpin":"Pin"}
                </button>
                ${S&&L&&F`
                    <button onClick=${()=>{L(z.id),T(null)}}>${v}</button>
                `}
                ${l&&U&&F`
                    <button onClick=${()=>{U(z.id),T(null)}}>Reattach</button>
                `}
                ${W&&!l&&F`
                    <button onClick=${()=>{let b=_.find((e)=>e.id===z.id);W(z.id,b?.label),T(null)}}>Open in Window</button>
                `}
                ${r&&K&&F`
                    <hr />
                    <button onClick=${()=>{j?.(z.id),K(z.id),T(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${q&&/\.(md|mdx|markdown)$/i.test(z.id)&&F`
                    <hr />
                    <button onClick=${()=>{q(z.id),T(null)}}>
                        ${Q?.has(z.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=PJ(z.id,{hasPopOutTab:typeof W==="function"});if(!b)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}T0();S_();g2();function J5(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function i9(_,$=30){return J5(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function M6(_,$=56,j=16,G={}){let Z=J5(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let q=(j/2).toFixed(2);return`M 0 ${q} L ${$} ${q}`}if(Z.length===1){let q=(Z[0]-X)/(Y-X),K=(j-q*j).toFixed(2);return`M 0 ${K} L ${$} ${K}`}return Z.map((q,K)=>{let L=K/(Z.length-1||1)*$,Q=(q-X)/(Y-X),V=j-Q*j;return`${K===0?"M":"L"} ${L.toFixed(2)} ${V.toFixed(2)}`}).join(" ")}function A5(_){return`${Math.round(Number(_)||0)}%`}function o9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function fJ(_){let $=[`CPU ${A5(_?.cpu_percent)}`,`RAM ${A5(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${o9(_?.buffer_cache_bytes)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${A5(_?.swap_percent)}`);return $.join(" • ")}function UK(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function RJ(_){return UK(_)>0&&J5(_?.process_rss_series_bytes).length>0}function SJ(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function HK({mode:_="overlay"}){let[$,j]=C(()=>H6(!1)),[G,Z]=C(()=>pX(!1)),[X,Y]=C(()=>SJ()),[q,K]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[L,Q]=C(!1);u(()=>{let A=(M)=>{j(Boolean(M?.detail?.enabled))},O=(M)=>{Z(Boolean(M?.detail?.collapsed))};return window.addEventListener(x4,A),window.addEventListener(S2,O),()=>{window.removeEventListener(x4,A),window.removeEventListener(S2,O)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let A=window.matchMedia("(max-width: 900px)"),O=()=>Y(Boolean(A.matches));if(O(),typeof A.addEventListener==="function")return A.addEventListener("change",O),()=>A.removeEventListener("change",O);return A.addListener(O),()=>A.removeListener(O)},[]);let N=_==="overlay";u(()=>{if(!$||!N)return;let A=!1,O=0,M=async()=>{Q((x)=>x||q.cpu_series.length>0?x:!0);try{let x=await Z7();if(A)return;K({cpu_percent:Number(x?.cpu_percent)||0,ram_percent:Number(x?.ram_percent)||0,swap_percent:Number.isFinite(Number(x?.swap_percent))?Number(x?.swap_percent):null,cpu_series:i9(x?.cpu_series),ram_series:i9(x?.ram_series),swap_series:i9(x?.swap_series),buffer_cache_bytes:Number.isFinite(Number(x?.buffer_cache_bytes))?Number(x?.buffer_cache_bytes):null,buffer_cache_series_bytes:J5(x?.buffer_cache_series_bytes),process_rss_series_bytes:J5(x?.process_rss_series_bytes),process_memory:{rss_bytes:Number(x?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(x?.process_memory?.vm_rss_bytes))?Number(x?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(x?.swap_total_bytes)||0,swap_used_bytes:Number(x?.swap_used_bytes)||0,sample_interval_ms:Number(x?.sample_interval_ms)||2000,platform:String(x?.platform||"")})}catch{if(A)return}finally{if(!A)Q(!1)}};return M(),O=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;M()},Math.max(1000,Number(q.sample_interval_ms)||2000)),()=>{if(A=!0,O)window.clearInterval(O)}},[$,N]);let B=Z0(()=>M6(q.cpu_series,56,16,{min:0,max:100}),[q.cpu_series]),U=Z0(()=>M6(q.ram_series,56,16,{min:0,max:100}),[q.ram_series]),D=Z0(()=>M6(q.swap_series,56,16,{min:0,max:100}),[q.swap_series]),E=Z0(()=>M6(q.buffer_cache_series_bytes),[q.buffer_cache_series_bytes]),H=Z0(()=>M6(q.process_rss_series_bytes),[q.process_rss_series_bytes]),w=Number(q.buffer_cache_bytes)>0&&J5(q.buffer_cache_series_bytes).length>0,W=Number.isFinite(Number(q.swap_percent))&&q.swap_total_bytes>0,z=UK(q),T=RJ(q),I=Z0(()=>fJ(q),[q]);if(!$||!N)return null;let J=G?"Show system meters":L?"Updating system meters… Click to collapse.":"System meters — click to collapse.",k=(A)=>{A?.stopPropagation?.();let O=!G;Z(O),c7(O)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${J}
                aria-label=${J}
                aria-expanded=${G?"false":"true"}
                onClick=${k}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?F`<span class="system-meters-compact-summary">${I}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${B}></path>
                                </svg>
                                <span class="system-meters-value">${A5(q.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${A5(q.ram_percent)}</span>
                            </div>
                            ${T&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${o9(z)}</span>
                                </div>
                            `}
                            ${w&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${o9(q.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${W&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${A5(q.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function gJ(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function uJ(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function bJ(_){let{id:$,scrollToBottom:j,getElementById:G=(L)=>document.getElementById(L),scheduleRaf:Z=(L)=>requestAnimationFrame(L),scheduleTimeout:X=(L,Q)=>{setTimeout(L,Q)},maxAttempts:Y=12}=_,q=(L)=>{L.scrollIntoView({behavior:"smooth",block:"center"}),L.classList.add("post-highlight"),X(()=>L.classList.remove("post-highlight"),2000)},K=(L)=>{let Q=G(`post-${$}`);if(Q){q(Q);return}if(L<=0){j?.();return}Z(()=>{X(()=>K(L-1),40)})};K(Y)}function vJ(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(K)=>bJ({id:K,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let q=uJ($);if(q){Z(q);return}G()}function EK(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:q,handleRenameCurrentBranch:K,renameBranchNameDraft:L,renameBranchNameInputRef:Q,setRenameBranchNameDraft:V,renameBranchDraftState:N,isRenamingBranch:B,addFileRef:U,addFolderRef:D,openEditor:E,openTerminalTab:H,openVncTab:w,hasDockPanes:W,toggleDock:z,dockVisible:T,handleSplitterMouseDown:I,handleSplitterTouchStart:J,showEditorPaneContainer:k,tabStripTabs:A,tabStripActiveId:O,handleTabActivate:M,handleTabClose:x,handleTabCloseOthers:f,handleTabCloseAll:S,handleTabTogglePin:v,handleTabTogglePreview:l,handleTabToggleDiff:h,handleTabEditSource:r,handleReattachPane:b,previewTabs:e,diffTabs:z0,tabPaneOverrides:K0,toggleZenMode:L0,handlePopOutPane:X0,isWebAppMode:B0,editorContainerRef:_0,editorInstanceRef:G0,detachedTabs:N0,activeDetachedTab:W0,detachedDockPane:d,handleDockSplitterMouseDown:j0,handleDockSplitterTouchStart:A0,TERMINAL_TAB_PATH:P0,dockContainerRef:b0,handleEditorSplitterMouseDown:c0,handleEditorSplitterTouchStart:X_,searchQuery:l0,isIOSDevice:__,currentBranchRecord:f0,currentChatJid:p0,currentChatBranches:R0,handleBranchPickerChange:d0,formatBranchPickerLabel:n0,openRenameCurrentBranchForm:U_,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:h0,currentHashtag:M0,handleBackToTimeline:V_,activeSearchScopeLabel:s0,oobePanelState:O_,composePrefillRequest:E0,requestComposePrefill:S0,handleOobeSetupProvider:I0,handleOobeShowModelPicker:a0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:Q_,handleCompleteProviderReadyOobe:D_,posts:E_,isMainTimelineView:M_,hasMore:$0,loadMore:O0,timelineRef:D0,handleHashtagClick:v0,addMessageRef:m0,scrollToMessage:s,openFileFromPill:o,openTimelineFileFromPill:t,handleDeletePost:Y0,handleOpenFloatingWidget:q0,agents:k0,userProfile:t0,removingPostIds:u0,agentStatus:U0,isCompactionStatus:y0,agentDraft:j_,agentPlan:g0,agentThought:G_,pendingRequest:L_,intentToast:W_,currentTurnId:i0,steerQueued:n_,handlePanelToggle:y_,btwSession:i,closeBtwPanel:J0,handleBtwRetry:Y_,handleBtwInject:B_,floatingWidget:h_,handleCloseFloatingWidget:N1,handleFloatingWidgetEvent:g_,attachmentPreview:J1,setAttachmentPreview:C_,extensionStatusPanels:w_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:z_,searchOpen:k_,followupQueueItems:F1,handleInjectQueuedFollowup:v_,handleRemoveQueuedFollowup:r_,handleMoveQueuedFollowup:s_,viewStateRef:H_,loadPosts:x1,scrollToBottom:U1,searchScope:u1,handleSearch:k1,handleSearchScopeChange:e1,setSearchScope:u4,enterSearchMode:A$,exitSearchMode:a_,fileRefs:m_,removeFileRef:M1,clearFileRefs:H1,setFileRefsFromCompose:_1,folderRefs:k$,removeFolderRef:M$,clearFolderRefs:_$,setFolderRefsFromCompose:T_,messageRefs:L1,removeMessageRef:w$,clearMessageRefs:b4,setMessageRefsFromCompose:$$,handleCreateSessionFromCompose:v4,handleCreateRootSessionFromCompose:m4,handleRestoreBranch:y$,attachActiveEditorFile:T$,followupQueueCount:b1,handleBtwIntercept:v1,handleMessageResponse:c4,handleComposeSubmitError:K1,isComposeBoxAgentActive:f_,activeChatAgents:l4,connectionStatus:I1,stateAccessFailed:x$,activeModel:h4,agentModelsPayload:R5,activeModelUsage:S5,activeThinkingLevel:Z4,supportsThinking:I$,contextUsage:p4,extensionWorkingState:n4,notificationsEnabled:V1,notificationPermission:C$,handleToggleNotifications:X4,setActiveModel:Y4,applyModelState:m1,setPendingRequest:E1,pendingRequestRef:g5,toggleWorkspace:q4}=_,j$=()=>{if(__())return;U1()};return F`
    <div class=${gJ({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${HK} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(t_)=>{if(t_.target===t_.currentTarget)q()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(t_)=>{t_.preventDefault(),K(L)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${L}
              onInput=${(t_)=>{let P$=t_.currentTarget?.value??"";V(String(P$))}}
              onKeyDown=${(t_)=>{if(t_.key==="Escape")t_.preventDefault(),q()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${N.kind||"info"}`}>
              ${N.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!N.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${q}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&F`
        <${VK}
          onFileSelect=${U}
          onFolderSelect=${D}
          visible=${j}
          active=${j||G}
          onOpenEditor=${E}
          onOpenTerminalTab=${H}
          onOpenVncTab=${w}
          onToggleTerminal=${W?z:void 0}
          terminalVisible=${Boolean(W&&T)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${q4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${I} onTouchStart=${J}></div>
      `}
      ${k&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${FK}
              tabs=${A}
              activeId=${O}
              onActivate=${M}
              onClose=${x}
              onCloseOthers=${f}
              onCloseAll=${S}
              onTogglePin=${v}
              onTogglePreview=${l}
              onToggleDiff=${h}
              onEditSource=${r}
              previewTabs=${e}
              diffTabs=${z0}
              paneOverrides=${K0}
              detachedTabs=${N0}
              onReattachTab=${b}
              onToggleDock=${W?z:void 0}
              dockVisible=${W&&T}
              onToggleZen=${L0}
              zenMode=${X}
              onPopOutTab=${B0?void 0:X0}
            />
          `}
          ${G&&W0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${W0.label||W0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>b(W0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!W0&&F`<div class="editor-pane-host" ref=${_0}></div>`}
          ${G&&!W0&&O&&e.has(O)&&F`
            <${r2}
              getContent=${()=>G0.current?.getContent?.()}
              path=${O}
              onClose=${()=>l(O)}
            />
          `}
          ${W&&T&&F`<div class="dock-splitter" onMouseDown=${j0} onTouchStart=${A0}></div>`}
          ${W&&F`<div class=${`dock-panel${T?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!B0&&!d&&F`
                  <button class="dock-panel-action" onClick=${()=>X0(P0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${d&&F`
                  <button class="dock-panel-action" onClick=${()=>b(P0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${z} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${d?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>b(P0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${b0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${c0} onTouchStart=${X_}></div>
      `}
      <${XL}
        workspaceOpen=${j}
        toggleWorkspace=${q4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${w}
        onToggleTerminal=${W?z:void 0}
        terminalVisible=${Boolean(W&&T)}
      />
      <${ZL}
        activeChatAgents=${l4}
        currentChatJid=${p0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(W&&T)}
        onSwitchChat=${d0}
        onToggleWorkspace=${q4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${w}
        onToggleTerminalDock=${W?z:void 0}
        onPrefillCompose=${S0}
      />
      <div class="container">
        ${l0&&__()&&F`<div class="search-results-spacer"></div>`}
        ${(M0||l0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${V_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${M0?`#${M0}`:`Search: ${l0} · ${s0}`}</span>
          </div>
        `}
        ${O_?.kind&&O_.kind!=="hidden"&&F`
          <${zq}
            kind=${O_.kind}
            onSetupProvider=${I0}
            onShowModelPicker=${a0}
            onOpenWorkspace=${A_}
            onDismiss=${O_.kind==="provider-missing"?Q_:D_}
          />
        `}
        <${nL}
          posts=${E_}
          hasMore=${M_?$0:!1}
          onLoadMore=${M_?O0:void 0}
          timelineRef=${D0}
          onHashtagClick=${v0}
          onMessageRef=${m0}
          onScrollToMessage=${s}
          onFileRef=${t||o}
          onPostClick=${void 0}
          onDeletePost=${Y0}
          onOpenWidget=${q0}
          onOpenAttachmentPreview=${C_}
          emptyMessage=${M0?`No posts with #${M0}`:l0?`No results for "${l0}"`:void 0}
          agents=${k0}
          user=${t0}
          reverse=${M_}
          removingPostIds=${u0}
          searchQuery=${l0}
        />
        <${T9}
          status=${y0(U0)?null:U0}
          draft=${j_}
          plan=${g0}
          thought=${G_}
          pendingRequest=${L_}
          intent=${W_}
          turnId=${i0}
          steerQueued=${n_}
          onPanelToggle=${y_}
          showExtensionPanels=${!1}
        />
        <${wq}
          session=${i}
          onClose=${J0}
          onRetry=${Y_}
          onInject=${B_}
        />
        <${cq}
          widget=${h_}
          onClose=${N1}
          onWidgetEvent=${g_}
        />
        ${J1&&F`
          <${$L}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>C_(null)}
          />
        `}
        <${sY} />
        <${T9}
          extensionPanels=${Array.from(w_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${z_}
          turnId=${i0}
          steerQueued=${n_}
          onPanelToggle=${y_}
          showCorePanels=${!1}
        />
        <${z9}
          items=${k_?[]:F1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${o}
        />
        <${Wq}
          onPost=${(t_)=>{vJ({response:t_,viewStateRef:H_,scrollToBottom:U1})}}
          onFocus=${j$}
          searchMode=${k_}
          searchScope=${u1}
          onSearch=${k1}
          onSearchScopeChange=${e1||u4}
          onEnterSearch=${A$}
          onExitSearch=${a_}
          fileRefs=${m_}
          onRemoveFileRef=${M1}
          onClearFileRefs=${H1}
          onSetFileRefs=${_1}
          folderRefs=${k$}
          onRemoveFolderRef=${M$}
          onClearFolderRefs=${_$}
          onSetFolderRefs=${T_}
          messageRefs=${L1}
          onRemoveMessageRef=${w$}
          onClearMessageRefs=${b4}
          onSetMessageRefs=${$$}
          onSwitchChat=${d0}
          onRenameSession=${K}
          isRenameSessionInProgress=${B}
          onCreateSession=${v4}
          onCreateRootSession=${m4}
          onDeleteSession=${o0}
          onPurgeArchivedSession=${h0}
          onRestoreSession=${y$}
          activeEditorPath=${Z?null:O}
          onAttachEditorFile=${Z?void 0:T$}
          onOpenFilePill=${o}
          followupQueueCount=${b1}
          followupQueueItems=${F1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${v_}
          onRemoveQueuedFollowup=${r_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${v1}
          onMessageResponse=${c4}
          onSubmitError=${K1}
          isAgentActive=${f_}
          activeChatAgents=${l4}
          currentChatJid=${p0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${h4}
          agentModelsPayload=${R5}
          modelUsage=${S5}
          thinkingLevel=${Z4}
          supportsThinking=${I$}
          contextUsage=${p4}
          notificationsEnabled=${V1}
          notificationPermission=${C$}
          onToggleNotifications=${X4}
          onModelChange=${Y4}
          onModelStateChange=${m1}
          statusNotice=${y0(U0)?U0:null}
          extensionWorkingState=${n4}
          prefillRequest=${E0}
        />
        <${UL}
          request=${L_}
          onRespond=${()=>{E1(null),g5.current=null}}
        />
      </div>
    </div>
  `}function DK(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,q=eY({branchLoaderMode:$,panePopoutMode:j}),K=Y?.renderBranchLoaderMode||_q,L=Y?.renderPanePopoutMode||$q,Q=Y?.renderMainShell||EK;if(q==="branch-loader")return K(G);if(q==="pane-popout")return L(Z);return Q(X)}var D8="piclaw_btw_session",zK=900,WK="__piclawRenameBranchFormLock__";function mJ(){try{return import.meta.url}catch{return null}}function s9(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function cJ(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function E8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function OK(_={}){let $=_.importMetaUrl===void 0?mJ():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=cJ($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((L)=>String(L?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,G).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function JK(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[WK];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[WK]=G,G}function AK(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function kK(_={}){let $=typeof _.readItem==="function"?_.readItem:W1,j=_.storageKey||D8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",q=typeof Z.thinking==="string"?Z.thinking:"",K=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,L=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:q,error:L==="error"?K||"BTW stream interrupted. You can retry.":K,model:null,status:L}}catch{return null}}function MK(_,$={}){let j=$.defaultChatJid||"web:default",G=E8(_,"chat_jid",j),Z=s9(_?.get?.("chat_only")||_?.get?.("chat-only")),X=s9(_?.get?.("pane_popout")),Y=E8(_,"pane_path"),q=E8(_,"pane_label"),K=s9(_?.get?.("branch_loader")),L=E8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:L}}function wK(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function yK(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function a9(_,$,j){return _||$?.label||j||"Pane"}function TK(_,$,j){return`${a9(_,$,j)} · PiClaw`}function xK(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function IK(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function CK(_,$,j,G){return _===$&&!j||G}function PK(_,$,j,G,Z){return _||!$&&(j||G&&Z)}S_();function lJ(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function X1(_,$,j){let G=_?.[$];return typeof G==="function"?G:lJ($,j)}var fK=!1,RK=!1,SK=!1;function hJ(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function pJ(_=typeof window<"u"?window:null){if(!_||RK)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),RK=!0}function nJ(){q_.register(F3),q_.register(T7),q_.register(y7),q_.register(x7),q_.register(I7),q_.register(C7),q_.register(f7),q_.register(R7),q_.register(S7),q_.register(u7),q_.register(r3),U3(),q_.register(z3),q_.register(O3)}function rJ(_=typeof window<"u"?window:null){if(!_||SK)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;SK=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function gK(){if(fK)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(hJ($),pJ(_),M9(_),_)try{let j=await Promise.resolve().then(() => (T0(),KG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}nJ(),await oq(_),rJ(_),fK=!0}function dJ(_=K6){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:X1(_,"getAgentContext",null),getAutoresearchStatus:X1(_,"getAutoresearchStatus",null),stopAutoresearch:X1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:X1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:X1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:X1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:X1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:X1(_,"getChatBranches",{chats:[]}),renameChatBranch:X1(_,"renameChatBranch",null),pruneChatBranch:X1(_,"pruneChatBranch",null),restoreChatBranch:X1(_,"restoreChatBranch",null),getAgentQueueState:X1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:X1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:X1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:X1(_,"streamSidePrompt",null)}}var uK=dJ(K6);function bK(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:q,shellState:K,agentState:L,composeState:Q,modelState:V}=_,N={appShellRef:K.appShellRef,editorOpen:K.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:K.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},B={appShellRef:K.appShellRef,workspaceOpen:K.workspaceOpen,editorOpen:K.editorOpen,chatOnlyMode:K.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:K.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:K.renameBranchNameDraft,renameBranchNameInputRef:K.renameBranchNameInputRef,setRenameBranchNameDraft:K.setRenameBranchNameDraft,renameBranchDraftState:K.renameBranchDraftState,isRenamingBranch:K.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:K.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:K.TERMINAL_TAB_PATH,isIOSDevice:K.isIOSDevice,currentBranchRecord:K.currentBranchRecord,currentChatJid:K.currentChatJid,currentChatBranches:K.currentChatBranches,formatBranchPickerLabel:K.formatBranchPickerLabel,activeSearchScopeLabel:K.activeSearchScopeLabel,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,oobePanelState:K.oobePanelState,composePrefillRequest:K.composePrefillRequest,requestComposePrefill:K.requestComposePrefill,handleOobeSetupProvider:K.handleOobeSetupProvider,handleOobeShowModelPicker:K.handleOobeShowModelPicker,handleOobeOpenWorkspace:K.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:K.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:K.handleCompleteProviderReadyOobe,posts:K.posts,hasMore:K.hasMore,loadMore:K.loadMore,timelineRef:K.timelineRef,agents:K.agents,userProfile:K.userProfile,removingPostIds:K.removingPostIds,extensionStatusPanels:K.extensionStatusPanels,pendingExtensionPanelActions:K.pendingExtensionPanelActions,searchOpen:K.searchOpen,followupQueueItems:K.followupQueueItems,viewStateRef:K.viewStateRef,loadPosts:K.loadPosts,scrollToBottom:K.scrollToBottom,searchScope:K.searchScope,tabStripTabs:K.tabStripTabs,tabStripActiveId:K.tabStripActiveId,handleTabActivate:K.handleTabActivate,previewTabs:K.previewTabs,diffTabs:K.diffTabs,handleTabTogglePreview:K.handleTabTogglePreview,handleTabToggleDiff:K.handleTabToggleDiff,panePopoutPath:K.panePopoutPath,tabPaneOverrides:K.tabPaneOverrides,handleTabClose:K.handleTabClose,handleTabCloseOthers:K.handleTabCloseOthers,handleTabCloseAll:K.handleTabCloseAll,handleTabTogglePin:K.handleTabTogglePin,handleTabEditSource:K.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:K.openEditor,openTerminalTab:K.openTerminalTab,openVncTab:K.openVncTab,fileRefs:Q.fileRefs,folderRefs:Q.folderRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:V.activeChatAgents,connectionStatus:V.connectionStatus,stateAccessFailed:V.stateAccessFailed,activeModel:V.activeModel,activeModelUsage:V.activeModelUsage,activeThinkingLevel:V.activeThinkingLevel,supportsThinking:V.supportsThinking,contextUsage:V.contextUsage,notificationsEnabled:V.notificationsEnabled,notificationPermission:V.notificationPermission,handleToggleNotifications:V.handleToggleNotifications,setActiveModel:V.setActiveModel,applyModelState:V.applyModelState,setPendingRequest:L.setPendingRequest,pendingRequestRef:L.pendingRequestRef,...G,...Z,...X,...Y,...q,...L,...Q,...V};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:N,mainShellOptions:B}}function iJ(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function vK(_){let $=iJ({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return bK({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}T0();var cK="(min-width: 1024px) and (orientation: landscape)";function t9(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function mK(_,$){let j=t9(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function oJ(_,$,j){let G=t9(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function w6(_=typeof window<"u"?window:null){let $=t9(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function lK(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function hK(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||w6($),Y=lK(X),q=mK($,Y);if(typeof q==="boolean")return q;if(G&&X==="desktop"){let K=mK($,"workspaceOpen");if(typeof K==="boolean")return K}return Z}function pK(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||w6(j);oJ(j,lK(Z),Boolean(_))}a5();var sJ=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function nK(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(f1({window:j,navigator:G}))};Z();let Y=sJ.map((q)=>{try{return j.matchMedia?.(q)??null}catch{return null}}).filter(Boolean).map((q)=>{if(typeof q.addEventListener==="function")return q.addEventListener("change",Z),()=>q.removeEventListener("change",Z);if(typeof q.addListener==="function")return q.addListener(Z),()=>q.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let q of Y)q();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function W8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function rK(_={}){return f1(_)&&X2(_)}function aJ(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function tJ(_={},$={}){if(!rK(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=aJ({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function dK(_={}){if(!rK(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},Y=()=>{G=0,tJ({window:$,document:j})},q=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},K=()=>{q();for(let V of[80,220,420]){let N=$.setTimeout?.(()=>{Z.delete(N),q()},V);if(N!=null)Z.add(N)}},L=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;K()},Q=$.visualViewport;return K(),$.addEventListener("focus",K),$.addEventListener("pageshow",K),$.addEventListener("resize",K),$.addEventListener("orientationchange",K),j.addEventListener("visibilitychange",L),j.addEventListener("focusin",K,!0),Q?.addEventListener?.("resize",K),Q?.addEventListener?.("scroll",K),()=>{X(),$.removeEventListener("focus",K),$.removeEventListener("pageshow",K),$.removeEventListener("resize",K),$.removeEventListener("orientationchange",K),j.removeEventListener("visibilitychange",L),j.removeEventListener("focusin",K,!0),Q?.removeEventListener?.("resize",K),Q?.removeEventListener?.("scroll",K)}}var e9="resume-layout-settling",eJ=220,k5=new WeakMap;function _A(_){if(!_){K_(D8,"");return}K_(D8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function $A(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function jA(_,$={}){if(!_)return()=>{};let{durationMs:j=eJ,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=k5.get(_);if(X)Z(X);_.classList.add(e9);let Y=G(()=>{if(k5.get(_)===Y)_.classList.remove(e9),k5.delete(_)},j);return k5.set(_,Y),()=>{let q=k5.get(_);if(q)Z(q),k5.delete(_);_.classList.remove(e9)}}function GA(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function iK(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:q,agents:K,agentsRef:L,currentChatJid:Q,activeChatJidRef:V,userProfile:N,userProfileRef:B,brandingRef:U,panePopoutMode:D=!1}=_;SX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>fZ(),[]),u(()=>nK(Z),[Z]),u(()=>{let w=()=>{},W=W8(()=>{w(),w=jA(G.current)});return()=>{W(),w()}},[G]);let E=g(w6());return u(()=>{pK(X,{bucket:E.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let w=window.matchMedia(cK),W=()=>{let z=w6(window);if(E.current===z)return;let T=E.current;if(E.current=z,T==="desktop"&&z==="narrow")Y(!1)};if(w.addEventListener)w.addEventListener("change",W);else if(w.addListener)w.addListener(W);return()=>{if(w.removeEventListener)w.removeEventListener("change",W);else if(w.removeListener)w.removeListener(W)}},[Y]),u(()=>dK(),[]),u(()=>{_A(q)},[q]),u(()=>{L.current=K||{}},[K,L]),u(()=>{V.current=Q},[V,Q]),u(()=>{B.current=N||{name:"You",avatar_url:null,avatar_background:null}},[N,B]),{applyBranding:P((w,W,z=null)=>{if(typeof document>"u")return;let T=(w||"").trim()||"PiClaw";if(U.current.title!==T){if($A({panePopoutMode:D,search:typeof window<"u"?window.location.search:""})){document.title=T;let J=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(J&&J.getAttribute("content")!==T)J.setAttribute("content",T)}U.current.title=T}let I=W?`${W}|${z||""}`:"";if(U.current.avatarBase!==I){U.current.avatarBase=I;let J=z||Date.now();GA(document,J)}},[U])}}T0();function oK(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function _j(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function z8(_,$){let j=Array.isArray(_)?_:[],G=_j($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function O8(_,$){let j=Array.isArray(_)?_:[],G=_j($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function J8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=_j(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function sK(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function aK(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function $j(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:q,setCurrentHashtag:K,setPosts:L,setHasMore:Q}=_,V=typeof $==="string"?$.trim():"";if(!V)return;let N=j==="root"||j==="all"?j:"current";Y(N),q(V),K(null),L(null);try{let B=await X(V,50,0,G,N,Z,_.filters);L(Array.isArray(B?.results)?B.results:[]),Q(!1)}catch(B){console.error("Failed to search:",B),L([])}}async function tK(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:q,hasMoreRef:K,loadMoreRef:L,confirm:Q=(H)=>window.confirm(H),showAlert:V=(H)=>alert(H),scheduleTimeout:N=(H,w)=>{setTimeout(H,w)}}=_;if(!$)return;let B=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,D=j?.filter((H)=>H?.data?.thread_id===B&&H?.id!==B).length||0;if(D>0){if(!Q(`Delete this message and its ${D} replies?`))return}let E=(H)=>{if(!H.length)return;q((w)=>{let W=new Set(w);return H.forEach((z)=>W.add(z)),W}),N(()=>{if(X(()=>{Y((w)=>w?w.filter((W)=>!H.includes(W.id)):w)}),q((w)=>{let W=new Set(w);return H.forEach((z)=>W.delete(z)),W}),K.current)L.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(B,D>0,U);if(H?.ids?.length)E(H.ids)}catch(H){let w=H instanceof Error?H.message:String(H||"");if(D===0&&w.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let z=await Z(B,!0,U);if(z?.ids?.length)E(z.ids);return}console.error("Failed to delete post:",H),V(`Failed to delete message: ${w}`)}}async function eK(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(V)=>document.getElementById(V),scheduleRaf:q=(V)=>requestAnimationFrame(V),scheduleTimeout:K=(V,N)=>{setTimeout(V,N)}}=_,L=(V)=>{V.scrollIntoView({behavior:"smooth",block:"center"}),V.classList.add("post-highlight"),K(()=>V.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){L(Q);return}try{let V=typeof j==="string"&&j.trim()?j.trim():G,B=(await Z($,V))?.thread?.[0];if(!B)return;X((U)=>{if(!U)return[B];if(U.some((D)=>D.id===B.id))return U;return[...U,B]}),q(()=>{K(()=>{let U=Y(`post-${$}`);if(U)L(U)},50)})}catch(V){console.error("[scrollToMessage] Failed to fetch message",$,V)}}function ZA(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function XA(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:q,setSearchQuery:K,setSearchOpen:L,setMessageRefs:Q,navigate:V,chatOnlyMode:N,baseHref:B=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let D=typeof j==="string"&&j.trim()?j.trim():G,E=D!==G,H=Boolean(Y||X||Z);if(!E&&!H)return Q((w)=>z8(w,U)),!0;if(Q([U]),q?.(null),K?.(null),L?.(!1),E&&typeof V==="function"){let w=T1(B,D,{chatOnly:N});V(w)}return!0}function _V(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:q,setFolderRefs:K,setMessageRefs:L,currentChatJid:Q,currentHashtag:V,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:D,setSearchOpen:E,navigate:H,chatOnlyMode:w,baseHref:W,getThread:z,setPosts:T}=_,I=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{I()}},[I]);let J=P((_0)=>{q((G0)=>z8(G0,_0))},[q]),k=P((_0)=>{q((G0)=>O8(G0,_0))},[q]),A=P(()=>{q([])},[q]),O=P((_0)=>{q(J8(_0))},[q]),M=P((_0)=>{K((G0)=>z8(G0,_0))},[K]),x=P((_0)=>{K((G0)=>O8(G0,_0))},[K]),f=P(()=>{K([])},[K]),S=P((_0)=>{K(J8(_0))},[K]),v=P((_0,G0=null,N0="info",W0=3000)=>{I(),$({title:_0,detail:G0||null,kind:N0||"info"}),j.current=setTimeout(()=>{$((d)=>d?.title===_0?null:d)},W0)},[I,j,$]),l=P((_0,{autoOpenEditor:G0=!1}={})=>{let N0=oK(_0,{editorOpen:G,autoOpenEditor:G0,resolvePane:X});if(N0.kind==="open"){Z(N0.path);return}if(N0.kind==="toast")v(N0.title,N0.detail,N0.level)},[G,Z,X,v]),h=P((_0)=>{l(_0,{autoOpenEditor:!1})},[l]),r=P((_0)=>{l(_0,{autoOpenEditor:!0})},[l]),b=P(()=>{let _0=Y;if(_0)J(_0)},[J,Y]),e=P((_0,G0=null)=>{XA({id:_0,targetChatJid:G0,currentChatJid:Q,currentHashtag:V,searchQuery:N,searchOpen:B,setCurrentHashtag:U,setSearchQuery:D,setSearchOpen:E,setMessageRefs:L,navigate:H,chatOnlyMode:w,baseHref:W})},[W,w,Q,V,H,B,N,U,L,E,D]),z0=P(async(_0,G0=null)=>{await eK({id:_0,targetChatJid:G0,currentChatJid:Q,getThread:z,setPosts:T})},[Q,z,T]),K0=P((_0)=>{L((G0)=>O8(G0,_0))},[L]),L0=P(()=>{L([])},[L]),X0=P((_0)=>{L(J8(_0))},[L]),B0=P((_0)=>{v("Compose failed",ZA(_0),"error",5000)},[v]);return{clearIntentToast:I,addFileRef:J,removeFileRef:k,clearFileRefs:A,setFileRefsFromCompose:O,addFolderRef:M,removeFolderRef:x,clearFolderRefs:f,setFolderRefsFromCompose:S,showIntentToast:v,openFileFromPill:h,openTimelineFileFromPill:r,attachActiveEditorFile:b,addMessageRef:e,scrollToMessage:z0,removeMessageRef:K0,clearMessageRefs:L0,setMessageRefsFromCompose:X0,handleComposeSubmitError:B0}}T0();async function $V(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:q,thoughtBufferRef:K,draftBufferRef:L,setAgentThought:Q,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let N=G.current;if($==="thought"){if(Z.current=j,N)try{await Y(N,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=N?await q(N,"thought"):null;if(B?.text)K.current=B.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(X.current=j,N)try{await Y(N,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=N?await q(N,"draft"):null;if(B?.text)L.current=B.text;V((U)=>({...U||{text:"",totalLines:0},fullText:L.current||U?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:U?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function YA(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function qA(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function jV(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:q,setAgentStatus:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:N,currentTurnIdRef:B,steerQueuedTurnIdRef:U,agentStatusRef:D,silentRecoveryRef:E,thoughtExpandedRef:H,draftExpandedRef:w,setCurrentTurnId:W,setSteerQueuedTurnId:z,currentTurnIdRefForPanel:T,setAgentThoughtVisibility:I,getAgentThought:J,setAgentThought:k,setAgentDraft:A}=_,O=P((l={})=>{let h=Number(l.atMs),r=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=r,l.running)Y.current=!0,q((b)=>b?b:!0);if(l.clearSilence)X.current=0},[Y,Z,X,q]),M=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{M()},[M]);let x=P(()=>{M(),K((l)=>YA(l))},[M,K]),f=P((l)=>{if(!l)return;M();let h=Date.now();G.current=h,K(qA(l)),j.current=setTimeout(()=>{if(G.current!==h)return;K((r)=>{if(!r||!(r.last_activity||r.lastActivity))return r;return null})},$)},[M,j,G,$,K]),S=P(()=>{Y.current=!1,q(!1),Z.current=null,X.current=0,L.current="",Q.current="",V.current=null,N.current=null,B.current=null,U.current=null,D.current=null,E.current={inFlight:!1,lastAttemptAt:0,turnId:null},M(),W(null),z(null),H.current=!1,w.current=!1},[D,M,B,L,w,Y,Z,N,X,V,W,q,z,E,U,Q,H]),v=P(async(l,h)=>{await $V({panelKey:l,expanded:h,currentTurnIdRef:T,thoughtExpandedRef:H,draftExpandedRef:w,setAgentThoughtVisibility:I,getAgentThought:J,thoughtBufferRef:Q,draftBufferRef:L,setAgentThought:k,setAgentDraft:A})},[T,L,w,J,A,k,I,Q,H]);return{noteAgentActivity:O,clearLastActivityTimer:M,clearLastActivityFlag:x,showLastActivity:f,clearAgentRunState:S,handlePanelToggle:v}}T0();function A8(_){return _?{..._}:{text:"",totalLines:0}}function GV(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function LA(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function KA(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function ZV(_){return{agentStatus:_.agentStatus,agentDraft:A8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:A8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:GV(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:LA(_.silentRecovery)}}function XV(_){let $=_.snapshot||KA(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(A8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(A8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(GV($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function jj(_){return String(_||"").trim()||"web:default"}function YV({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function VA(_){return YV(_)}function QA(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function qV(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,pendingRequestRef:V,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunningRef:w,wasAgentActiveRef:W,draftBufferRef:z,thoughtBufferRef:T,lastAgentEventRef:I,lastSilenceNoticeRef:J,lastAgentResponseRef:k,currentTurnIdRef:A,thoughtExpandedRef:O,draftExpandedRef:M,agentStatusRef:x,silentRecoveryRef:f,clearLastActivityTimer:S,setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:z0,setFollowupQueueItems:K0,setActiveModel:L0,setActiveThinkingLevel:X0,setSupportsThinking:B0,setActiveModelUsage:_0,setContextUsage:G0,lastNotifiedIdRef:N0,agentsRef:W0,notify:d,shouldNotifyLocallyForChat:j0}=_,A0=P((l0)=>{if(!VA({remainingQueueCount:l0,steerQueuedTurnId:Z.current,currentTurnId:A.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,A,X,Z]),P0=P(()=>ZV({agentStatus:Y,agentDraft:q,agentPlan:K,agentThought:L,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:N,activeModel:B,activeThinkingLevel:U,supportsThinking:D,activeModelUsage:E,contextUsage:H,isAgentRunning:w.current,wasAgentActive:W.current,draftBuffer:z.current,thoughtBuffer:T.current,lastAgentEvent:I.current,lastSilenceNotice:J.current,lastAgentResponse:k.current,currentTurnIdRef:A.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:O.current,draftExpanded:M.current,agentStatusRef:x.current,silentRecovery:f.current}),[B,E,U,q,K,Y,L,H,G,N,$,Q,j,D,w,W,z,T,I,J,k,A,Z,O,M,x,f]),b0=P((l0)=>{XV({snapshot:l0,clearLastActivityTimer:S,refs:{isAgentRunningRef:w,wasAgentActiveRef:W,lastAgentEventRef:I,lastSilenceNoticeRef:J,draftBufferRef:z,thoughtBufferRef:T,pendingRequestRef:V,lastAgentResponseRef:k,currentTurnIdRef:A,steerQueuedTurnIdRef:Z,agentStatusRef:x,silentRecoveryRef:f,thoughtExpandedRef:O,draftExpandedRef:M},setters:{setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:r,setAgentThought:b,setPendingRequest:e,setCurrentTurnId:z0,setSteerQueuedTurnId:X,setFollowupQueueItems:K0,setActiveModel:L0,setActiveThinkingLevel:X0,setSupportsThinking:B0,setActiveModelUsage:_0,setContextUsage:G0}})},[x,S,A,z,M,w,I,k,J,V,L0,_0,X0,h,r,l,b,G0,z0,K0,v,e,X,B0,f,Z,T,O,W]),c0=P((l0)=>{if(!l0)return;if(A.current===l0)return;A.current=l0,f.current={inFlight:!1,lastAttemptAt:0,turnId:l0},z0(l0),Z.current=null,X(null),z.current="",T.current="",h({text:"",totalLines:0}),r(""),b({text:"",totalLines:0}),e(null),V.current=null,k.current=null,O.current=!1,M.current=!1},[A,z,M,k,V,h,r,b,z0,e,X,f,Z,T,O]),X_=P((l0)=>{let __=k.current;if(!__||!__.post)return;if(l0&&__.turnId&&__.turnId!==l0)return;let f0=__.post,p0=typeof f0?.chat_jid==="string"&&f0.chat_jid.trim()?f0.chat_jid.trim():"";if(!p0||!j0(p0))return;if(f0.id&&N0.current===f0.id)return;let R0=QA(f0);if(!R0)return;N0.current=f0.id||N0.current,k.current=null;let d0=W0.current||{},U_=(f0?.data?.agent_id?d0[f0.data.agent_id]:null)?.name||"Pi";d(U_,R0,{sourceLabel:"Local"})},[W0,k,N0,d,j0]);return{clearQueuedSteerStateIfStale:A0,snapshotCurrentChatPaneState:P0,restoreChatPaneState:b0,setActiveTurn:c0,notifyForFinalResponse:X_}}T0();function k8(_){return _?.turn_id||_?.turnId||null}function M5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Gj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Zj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function M8(_,$){return{text:_,totalLines:Zj(_,$)}}function Xj(_,$){return{text:$?.text||"",totalLines:gX(_),fullText:_}}function LV(_,$,j){return j==="replace"?$:`${_||""}${$}`}function KV(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function VV(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function QV(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Yj(_,$){return _&&$}function BV(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function NV(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function FV(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function UV(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:q,agentStatusRef:K,pendingRequestRef:L,thoughtBufferRef:Q,draftBufferRef:V,setAgentStatus:N,setAgentDraft:B,setAgentPlan:U,setAgentThought:D,setPendingRequest:E,setActiveTurn:H,noteAgentActivity:w,clearLastActivityFlag:W,onStateAccessResult:z}=_,T=$;try{let I=await j(T);if(z?.(!1),G.current!==T)return null;if(!I||I.status!=="active"||!I.data){if(Z.current&&s1(X.current))Y();return Z.current=!1,q(),K.current=null,N(null),B({text:"",totalLines:0}),U(""),D({text:"",totalLines:0}),E(null),L.current=null,I??null}Z.current=!0;let J=I.data;K.current=J;let k=k8(J);if(k)H(k);w({running:!0,clearSilence:!0,atMs:n$(J)??Date.now()}),W(),N(J);let A=M5(I.thought);if(A)D((M)=>{if(Gj(M,A.text))return M;return Q.current=A.text,A});let O=M5(I.draft);if(O)B((M)=>{if(Gj(M,O.text))return M;return V.current=O.text,O});return I}catch(I){return z?.(!0),console.warn("Failed to fetch agent status:",I),null}}async function HV(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:q,refreshQueueState:K,refreshAgentStatus:L,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=G.current||null,N=Z.current,B=Q();if(N.inFlight)return null;if(N.turnId===V&&B-N.lastAttemptAt<X)return null;N.inFlight=!0,N.lastAttemptAt=B,N.turnId=V;try{if(s1(Y.current))await q();return await K(),await L()}finally{N.inFlight=!1}}function BA(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function EV(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:q,silenceRefreshMs:K,isCompactionStatus:L,setAgentStatus:Q,reconcileSilentTurn:V,now:N=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=G.current;if(!B)return;let U=N(),D=U-B,E=X.current,H=L(E),w=BA(E);if(D>=q){if(!H&&!w)Q({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(D>=Y&&U-Z.current>=K){if(!H&&!w){let W=Math.floor(D/1000);Q({type:"waiting",title:`Waiting for model… No events for ${W}s`})}Z.current=U,V()}}function NA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function DV(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:q,thoughtBufferRef:K,pendingRequestRef:L,lastAgentResponseRef:Q,agentStatusRef:V,stalledPostIdRef:N,scrollToBottomRef:B,setCurrentTurnId:U,setAgentDraft:D,setAgentPlan:E,setAgentThought:H,setPendingRequest:w,setAgentStatus:W,setPosts:z,dedupePosts:T,now:I=()=>Date.now(),nowIso:J=()=>new Date().toISOString()}=_;if(!$.current)return;let k=NA(V.current);$.current=!1,j.current=0,G.current=null,V.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let A=(q.current||"").trim();if(q.current="",K.current="",E(""),H({text:"",totalLines:0}),w(null),L.current=null,Q.current=null,!A){D({text:"",totalLines:0}),W({type:"error",title:"Response stalled - No content received"});return}D({text:A,totalLines:Zj(A,null),fullText:A});let O=A,M=I(),x=J(),f={id:M,timestamp:x,data:{type:"agent_response",content:O,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};N.current=M,z((S)=>S?T([...S,f]):[f]),B.current?.(),W(null)}function FA(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function UA(_){DV(_)}function WV(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function zV(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:N,agentStatusRef:B,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:w,setPendingRequest:W,setAgentStatus:z,dedupePosts:T}=_,I=P(()=>{FA({stalledPostIdRef:$,setPosts:j})},[j,$]),J=P(()=>{UA({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:q,draftExpandedRef:K,draftBufferRef:L,thoughtBufferRef:Q,pendingRequestRef:V,lastAgentResponseRef:N,agentStatusRef:B,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:D,setAgentDraft:E,setAgentPlan:H,setAgentThought:w,setPendingRequest:W,setAgentStatus:z,setPosts:j,dedupePosts:T})},[Y,T,L,K,G,X,N,B,Z,V,U,E,H,z,w,D,W,j,$,Q,q]);return{removeStalledPost:I,finalizeStalledResponse:J}}function HA(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function EA(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function OV(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:q}=_,{applyBranding:K}=iK($),L=_V(j);HA({removeFileRefRef:q,composeReferenceActions:L});let Q=jV(G),V=qV({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),N=zV(X);return WV(Y),EA({applyBranding:K,composeReferenceActions:L,agentActivity:Q,chatPaneRuntime:V,recoveryCallbacks:N})}T0();T0();S_();var w8=new Map,qj=new Map;function JV(){return Date.now()}function y6(_){return String(_||"").trim()}function AV(_,$=600000){return Boolean(_&&JV()-_.cachedAt<=$)}function DA(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function kV(_,$){return w8.delete(_),w8.set(_,$),DA(w8),$}function y8(_,$){let j=y6(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:JV()};return kV(j,G)}function Lj(_,$={}){let j=y6(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=w8.get(j)||null;if(!AV(Z,G))return null;return kV(j,Z)}function MV(_,$,j=5){if(!Array.isArray(_))return[];let G=y6($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let q of _){let K=y6(q?.chat_jid);if(!K||K===G||X.has(K))continue;if(X.add(K),Y.push(K),Y.length>=Z)break}return Y}async function wV(_){let $=Array.from(new Set((_.chatJids||[]).map((q)=>y6(q)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((q)=>!AV(Lj(q,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let q=Z[X++],K=qj.get(q);if(K){await K;continue}let L=(async()=>{try{let Q=await _.fetchTimeline(q);y8(q,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:q})}finally{qj.delete(q)}})();qj.set(q,L),await L}});await Promise.all(Y)}function yV(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let q=Y?.id;if(typeof q==="number"&&Number.isFinite(q)&&q<Z)Z=q}if(!Number.isFinite(Z))return F5([...G,...j]);let X=j.filter((Y)=>{let q=Y?.id;return typeof q==="number"&&Number.isFinite(q)&&q<Z});return F5([...G,...X])}function TV({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[q,K]=C(!1),L=g(!1),Q=g(null),V=g(!1),N=g(null),B=g(null),U=g(0),D=g(0);u(()=>{L.current=q},[q]),u(()=>{B.current=X},[X]);let E=!G&&!Z,H=g(E);u(()=>{H.current=E},[E]),u(()=>{U.current+=1,Y(null),B.current=null,N.current=null,V.current=!1,L.current=!1,K(!1),D.current=0},[j]);let w=P((k,A)=>{if(!E)return;y8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(A)})},[j,E]),W=P((k,A)=>{B.current=Array.isArray(k)?k:[],L.current=Boolean(A),Y(B.current),K(L.current),w(B.current,L.current)},[w]),z=P(async(k=null)=>{let A=U.current;try{if(k){let f=await G7(k,50,0,j);if(A!==U.current)return;Y(f.posts),K(!1);return}let O=(f)=>{if(A!==U.current)return;let S=Array.isArray(f?.posts)?f.posts:[],v=Boolean(f?.has_more);W(S,v)},M=Lj(j);if(M){W(M.posts,M.has_more);let f=D.current;h$(10,null,j).then((S)=>{if(A!==U.current||D.current!==f)return;if(!H.current)return;let v=Array.isArray(S?.posts)?S.posts:[],l=Boolean(S?.has_more);W(yV(B.current,v),l)}).catch((S)=>{if(A!==U.current)return;console.error("Failed to refresh cached timeline:",S)});return}let x=await h$(10,null,j);O(x)}catch(O){if(A!==U.current)return;throw console.error("Failed to load posts:",O),O}},[j,W]),T=P(async()=>{let k=U.current;try{let A=await h$(10,null,j);if(k!==U.current)return;W(yV(B.current,A?.posts),Boolean(A?.has_more))}catch(A){if(k!==U.current)return;console.error("Failed to refresh timeline:",A)}},[j,W]),I=P(async(k={})=>{let A=U.current,O=B.current;if(!O||O.length===0)return;if(V.current)return;let{preserveScroll:M=!0,preserveMode:x="top",allowRepeat:f=!1}=k,S=(h)=>{if(!M){h();return}if(x==="top")$(h);else _(h)},l=O.slice().sort((h,r)=>h.id-r.id)[0]?.id;if(!Number.isFinite(l))return;if(!f&&N.current===l)return;V.current=!0,N.current=l;try{let h=await h$(10,l,j);if(A!==U.current)return;if(D.current+=1,h.posts.length>0)S(()=>{let r=F5([...h.posts,...B.current||[]]);W(r,h.has_more)});else W(B.current||[],!1)}catch(h){if(A!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(A===U.current)V.current=!1}},[j,_,$,W]);u(()=>{Q.current=I},[I]);let J=P((k)=>{Y((A)=>{let O=typeof k==="function"?k(A):k;if(B.current=O,Array.isArray(O)){if(D.current+=1,E)y8(j,{posts:O,has_more:L.current})}return O})},[j,E]);return{posts:X,setPosts:J,hasMore:q,setHasMore:K,hasMoreRef:L,loadPosts:z,refreshTimeline:T,loadMore:I,loadMoreRef:Q,loadingMoreRef:V,lastBeforeIdRef:N}}T0();function WA(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function xV(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!WA(Z));return G.length===_.length?_:G}function IV(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function CV(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function _4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function PV(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function fV(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function zA(_,$=150){return Math.abs(_)<=$}function RV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=P(()=>{let K=$.current;if(!K)return;if(zA(K.scrollTop))K.scrollTop=0},[$]),X=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let{currentHashtag:Q,searchQuery:V,searchOpen:N}=j.current||{},B=!((V||N)&&!Q),U=B?L.scrollHeight-L.scrollTop:L.scrollTop;K(),requestAnimationFrame(()=>{let D=$.current;if(!D)return;if(B){let E=Math.max(D.scrollHeight-U,0);D.scrollTop=E}else{let E=Math.max(D.scrollHeight-D.clientHeight,0),H=Math.min(U,E);D.scrollTop=H}})},[$,j]),Y=P((K)=>{let L=$.current;if(!L||typeof K!=="function"){K?.();return}let Q=L.scrollTop;K(),requestAnimationFrame(()=>{let V=$.current;if(!V)return;let N=Math.max(V.scrollHeight-V.clientHeight,0);V.scrollTop=Math.min(Q,N)})},[$]),q=P((K)=>{return xV(K,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:q}}function OA(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function JA(_){_.scrollToBottomRef.current=_.scrollToBottom}function SV(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:q}=_,K=g(null),{scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,filterQueuedPosts:N}=RV({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});JA({scrollToBottomRef:K,scrollToBottom:L});let{posts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:w,refreshTimeline:W,loadMore:z,loadMoreRef:T}=TV({preserveTimelineScroll:Q,preserveTimelineScrollTop:V,chatJid:Z,currentHashtag:X,searchQuery:Y}),I=Z0(()=>OA({rawPosts:B,followupQueueItems:q,filterQueuedPosts:N}),[N,q,B]);return{scrollToBottomRef:K,scrollToBottom:L,preserveTimelineScroll:Q,preserveTimelineScrollTop:V,rawPosts:B,setPosts:U,hasMore:D,setHasMore:E,hasMoreRef:H,loadPosts:w,refreshTimeline:W,loadMore:z,loadMoreRef:T,posts:I}}T0();function AA(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function gV(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:q,loadPosts:K,searchPosts:L,setCurrentHashtag:Q,setSearchQuery:V,setSearchOpen:N,setSearchScope:B,setPosts:U,setHasMore:D,preserveTimelineScrollTop:E,setRemovingPostIds:H,deletePost:w,hasMoreRef:W,loadMoreRef:z}=_,T=P(async(f)=>{await sK({hashtag:f,setCurrentHashtag:Q,setPosts:U,loadPosts:K})},[K,Q,U]),I=P(async()=>{await aK({setCurrentHashtag:Q,setSearchQuery:V,setPosts:U,loadPosts:K})},[K,Q,U,V]),J=P(async(f,S=Z,v)=>{await $j({query:f,scope:S,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D,filters:v})},[X,Y,L,Z,Q,D,U,V,B]),k=P((f)=>{if(B(f),j&&j.trim())$j({query:j,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:L,setSearchScope:B,setSearchQuery:V,setCurrentHashtag:Q,setPosts:U,setHasMore:D})},[X,Y,L,j,Q,D,U,V,B]),A=P(()=>{N(!0),V(null),Q(null),B("current"),U([])},[Q,U,N,V,B]),O=P(()=>{N(!1),V(null),K()},[K,N,V]),M=Z0(()=>AA({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),x=P(async(f)=>{await tK({post:f,posts:q,currentChatJid:X,deletePost:w,preserveTimelineScrollTop:E,setPosts:U,setRemovingPostIds:H,hasMoreRef:W,loadMoreRef:z})},[X,w,W,z,q,E,U,H]);return{handleHashtagClick:T,handleBackToTimeline:I,handleSearch:J,handleSearchScopeChange:k,enterSearchMode:A,exitSearchMode:O,isMainTimelineView:M,handleDeletePost:x}}T0();function Kj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function uV(_,$){let j=new Map(_),G=Kj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function bV(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Kj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function vV(_){if(_?.options?.remove)return!0;return Kj(_)?.state!=="running"}function Vj(_,$){return`${_}:${$}`}function mV(_,$,j){let G=Vj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function cV(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function T8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function lV(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var hV="piclaw:ctx:";function $4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function w5(_,$){let j=$4(_),G=$4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function y5(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{K_(hV+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function pV(_){if(!_)return null;return N2(hV+_)}async function nV(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}=_,K=++j.current,L=$;try{let Q=await X(L);if(K!==j.current)return;if(G.current!==L)return;let V=Z.current,N=Array.isArray(Q?.items)?Q.items:[],B=IV(N,V);if(B.length){Y((U)=>CV(U,B)?U:B);return}if(N.length>0)return;V.clear(),q(0),Y((U)=>U.length===0?U:[])}catch{if(K!==j.current)return;if(G.current!==L)return;Y((Q)=>Q.length===0?Q:[])}}async function rV(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=$4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((q)=>w5(q,Y)?q:Y),y5(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function dV(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let q=await G(Y);if(j.current!==Y)return;Z((K)=>uV(K,q)),X((K)=>T8(K,"autoresearch"))}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",q)}}function iV(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function oV(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(s1($.current))j();G()}G6();var x8=new Map,I8=new Map,kA=250,sV=1500,aV=300000;function T5(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function MA(_,$){return`${_}:${$}`}function wA(_){for(let[$,j]of I8.entries())if(_-j>aV)I8.delete($)}function yA(_){for(let[$,j]of x8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>aV)x8.delete($)}}function tV(_=T5()){wA(_),yA(_)}function eV(_){let{chatJid:$,nowMs:j=T5()}=_;if(!$)return;I8.set($,j),tV(j)}function T6(_,$=sV,j=T5()){if(!_)return!1;let G=I8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function J$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=kA,activationWindowMs:X=sV,nowMs:Y=T5()}=_;tV(Y);let q=MA($,j),K=x8.get(q)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(x8.set(q,K),K.inFlight)return await K.inFlight;if(Boolean(O2("thread-switch",j)||T6(j,X,Y))&&Number.isFinite(K.lastCompletedAt)&&Y-K.lastCompletedAt<=Z)return K.lastValue;let Q=Promise.resolve().then(G).then((V)=>{return K.lastCompletedAt=T5(),K.lastValue=V??null,K.inFlight=null,V}).catch((V)=>{throw K.lastCompletedAt=T5(),K.inFlight=null,V});return K.inFlight=Q,await Q}function _Q(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:q,showIntentToast:K}=_,L=typeof $==="string"&&$.trim()?$.trim():null;if(!L||!j||L===j)return!1;if(G.current===L)return!0;G.current=L;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!q.current&&!Z.current);return K("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Qj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function $Q(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:L,clearAgentRunState:Q,hasConnectedOnceRef:V,viewStateRef:N,refreshTimeline:B,refreshAgentStatus:U,refreshQueueState:D,refreshContextUsage:E}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q();return}if(!V.current){if(V.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),L.current=null,Q(),T6($))return;if(Qj(N.current))B();U(),D(),E();return}if(Qj(N.current))B();U(),D(),E()}function jQ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_,K=Qj($.current);if(j){if(K)G();Z(),X(),Y(),q();return}if(K)G();X(),Y(),q()}function TA(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function GQ(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q,getAgentContext:K,setContextUsage:L,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:N,getAgentStatus:B,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:w,pendingRequestRef:W,thoughtBufferRef:z,draftBufferRef:T,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:A,setPendingRequest:O,setActiveTurn:M,noteAgentActivity:x,clearLastActivityFlag:f,isAgentRunningRef:S,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,lastAgentEventRef:r,lastSilenceNoticeRef:b,silenceWarningMs:e,silenceFinalizeMs:z0,isCompactionStatus:K0,serverVersionContext:L0,setConnectionStatus:X0,setStateAccessFailed:B0,setPendingRequestForConnection:_0,hasConnectedOnceRef:G0}=_,N0=P(()=>{return J$({kind:"queue-state",chatJid:$,run:async()=>{return await nV({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:q}),null}})},[j,q,$,Z,X,G,Y]),W0=P(async()=>{await J$({kind:"context-usage",chatJid:$,run:async()=>{return await rV({currentChatJid:$,activeChatJidRef:j,getAgentContext:K,setContextUsage:L}),null}})},[j,$,K,L]),d=P(async()=>{await J$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await dV({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:N}),null}})},[j,$,Q,V,N]),j0=P(async()=>{return await J$({kind:"agent-status",chatJid:$,run:async()=>{return await UV({currentChatJid:$,getAgentStatus:B,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:D,refreshTimeline:E,clearAgentRunState:H,agentStatusRef:w,pendingRequestRef:W,thoughtBufferRef:z,draftBufferRef:T,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:A,setPendingRequest:O,setActiveTurn:M,noteAgentActivity:x,clearLastActivityFlag:f,onStateAccessResult:B0})}})},[j,w,H,f,$,T,B,x,W,E,M,J,k,I,A,O,B0,z,D,U]),A0=P(async()=>{return await HV({isAgentRunningRef:S,pendingRequestRef:W,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,viewStateRef:D,refreshTimeline:E,refreshQueueState:N0,refreshAgentStatus:j0})},[v,S,W,j0,N0,E,h,l,D]);u(()=>{let c0=TA(e),X_=setInterval(()=>{EV({isAgentRunningRef:S,pendingRequestRef:W,lastAgentEventRef:r,lastSilenceNoticeRef:b,agentStatusRef:w,silenceWarningMs:e,silenceFinalizeMs:z0,silenceRefreshMs:h,isCompactionStatus:K0,setAgentStatus:I,reconcileSilentTurn:A0})},c0);return()=>clearInterval(X_)},[w,S,K0,r,b,W,A0,I,z0,h,e]);let P0=P((c0)=>{return _Q({serverVersion:c0,...L0})},[L0]),b0=P((c0)=>{if(c0==="connected")B0(!1);$Q({currentChatJid:$,status:c0,setConnectionStatus:X0,setAgentStatus:I,setAgentDraft:J,setAgentPlan:k,setAgentThought:A,setPendingRequest:_0,pendingRequestRef:W,clearAgentRunState:H,hasConnectedOnceRef:G0,viewStateRef:D,refreshTimeline:E,refreshAgentStatus:j0,refreshQueueState:N0,refreshContextUsage:W0})},[H,$,G0,W,j0,W0,N0,E,J,k,I,A,X0,_0,B0,D]);return{refreshQueueState:N0,refreshContextUsage:W0,refreshAutoresearchStatus:d,refreshAgentStatus:j0,handleUiVersionDrift:P0,handleConnectionStatusChange:b0}}T0();function x6(_){return typeof _==="string"}function I6(_){return typeof _==="string"&&_.trim().length>0}function C8(_){if(!I6(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Bj(_){if(!Array.isArray(_))return[];return _.filter(($)=>I6($?.chat_jid)&&I6($?.agent_name))}function ZQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>x6($?.chat_jid)&&x6($?.agent_name))}function XQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(x6(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!x6(Y?.chat_jid))return Y;let q=G.get(Y.chat_jid);return q?{...Y,...q,is_active:q.is_active??Y.is_active}:Y}),X=x6(j)?j:"";return Z.sort((Y,q)=>{if(Y.chat_jid===X&&q.chat_jid!==X)return-1;if(q.chat_jid===X&&Y.chat_jid!==X)return 1;let K=Boolean(Y.archived_at),L=Boolean(q.archived_at);if(K!==L)return K?1:-1;if(Boolean(Y.is_active)!==Boolean(q.is_active))return Y.is_active?-1:1;let Q=C8(Y.updated_at)||C8(Y.created_at),V=C8(q.updated_at)||C8(q.created_at);if(Q!==V)return V-Q;let N=I6(Y.agent_name)?Y.agent_name.trim():"",B=I6(q.agent_name)?q.agent_name.trim():"",U=N.localeCompare(B,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(q.chat_jid))}),Z}var xA={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function YQ(_){if(!_||typeof _!=="object")return xA;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function qQ(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function LQ(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},q=Y.name||null,K=Y.avatar_url??Y.avatarUrl??Y.avatar??null,L=!1,Q=!1;if(Z&&Z!==Y.name)q=Z,L=!0;if(X!==void 0){let V=typeof X==="string"?X.trim():null,N=typeof K==="string"?K.trim():null,B=V||null;if(B!==(N||null))K=B,Q=!0}if(!L&&!Q)return null;return{agentId:G,nameChanged:L,avatarChanged:Q,resolvedName:q,resolvedAvatar:K}}function KQ(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function VQ(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,q=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===q)return _;return{name:X,avatar_url:Y,avatar_background:q}}async function BQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(RX(X));let Y=X?.user||{};G((K)=>KQ(K,Y));let q=qQ(X?.agents);Z(q.name,q.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function NQ(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=LQ($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let K={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)K.name=X.resolvedName;if(X.avatarChanged)K.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:K}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function FQ(_){let{payload:$,setUserProfile:j}=_;j((G)=>VQ(G,$))}function QQ(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function UQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:q}=_;if($&&typeof $==="object")Y?.((L)=>QQ(L,$)?L:$),q?.(!0);let K=YQ($);if(K.hasModel)j((L)=>Object.is(L,K.model)?L:K.model);if(K.hasThinkingLevel){let L=K.thinkingLevelLabel??K.thinkingLevel;G((Q)=>Object.is(Q,L)?Q:L)}if(K.hasSupportsThinking)Z((L)=>L===K.supportsThinking?L:K.supportsThinking);if(K.hasProviderUsage)X((L)=>QQ(L,K.providerUsage)?L:K.providerUsage)}async function HQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[q,K]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let L=Bj(q?.chats),Q=Bj(K?.chats),V=XQ(L,Q,Y);return X(V),V}catch{if(Z.current!==Y)return[];return X([]),[]}}async function EQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(ZQ(Z?.chats))}catch{G([])}}function DQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),fV($))Y()}function WQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,q=$("sidebarWidth",null),K=Number.isFinite(q)?Math.min(Math.max(Number(q),Z),X):Y;if(j.current=K,G)G.style.setProperty("--sidebar-width",`${K}px`);return K}async function zQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:V,scheduleRaf:N=(z)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(z);return}setTimeout(z,0)},scheduleTimeout:B=(z,T)=>{setTimeout(z,T)},onTimelineLoadStart:U,onTimelineDataReady:D,onTimelineFirstPaint:E,onTimelineError:H}=_,w=(z)=>{if(V())return;N(()=>{if(V())return;N(()=>{if(V())return;E?.(z)})})},W=()=>{if(V())return;N(()=>{if(V())return;B(()=>{if(V())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),V())return;D?.({mode:"hashtag",hashtag:$}),w({mode:"hashtag"})}catch(z){if(V())return;throw H?.(z,{mode:"hashtag",hashtag:$}),z}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let z=await q(j,50,0,Z,G,X);if(V())return;K(Array.isArray(z?.results)?z.results:[]),L(!1),D?.({mode:"search",resultCount:Array.isArray(z?.results)?z.results.length:0}),w({mode:"search"})}catch(z){if(V())return;H?.(z,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",z),K([]),L(!1)}return}U?.({mode:"timeline"});try{if(await Y(),V())return;D?.({mode:"timeline"}),w({mode:"timeline"}),W()}catch(z){if(V())return;H?.(z,{mode:"timeline"}),console.error("Failed to load timeline:",z)}}G6();S_();function IA(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:q=60000,scheduleInterval:K=(V,N)=>setInterval(V,N),clearScheduledInterval:L=(V)=>clearInterval(V)}=_;if(Y)$();let Q=K(()=>{j(),G(),Z(),X()},q);return()=>{L(Q)}}function CA(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:q=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:q}),G(),Z(),X(),Y()}function PA(_){let $=MV(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;wV({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>h$(10,null,j))})}function OQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:q,currentChatJid:K,currentRootChatJid:L,getAgentModels:Q,getAgentContext:V,getActiveChatAgents:N,getChatBranches:B,activeChatJidRef:U,setActiveChatAgents:D,setCurrentChatBranches:E,setActiveModel:H,setActiveThinkingLevel:w,setSupportsThinking:W,setActiveModelUsage:z,setAgentModelsPayload:T,setHasLoadedAgentModels:I,agentsRef:J,refreshQueueState:k,refreshContextUsage:A,refreshAutoresearchStatus:O,setContextUsage:M,setExtensionWorkingState:x}=_,f=P(async()=>{await BQ({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{f(),WQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:q.current,maxWidth:B6(Number.POSITIVE_INFINITY)})},[q,f,X,Y]);let S=P((L0)=>{UQ({payload:L0,setActiveModel:H,setActiveThinkingLevel:w,setSupportsThinking:W,setActiveModelUsage:z,setAgentModelsPayload:T,setHasLoadedAgentModels:I})},[H,z,w,T,I,W]),v=P(()=>O2("thread-switch",K),[K]),l=P(()=>{return J$({kind:"model-state",chatJid:K,run:async()=>{let L0=v();if(L0)Z1(L0,"runtime-hydration-start",{phase:"model-state"});let X0=K;try{let[_0,G0]=await Promise.all([(async()=>{let W0=L0||v();if(W0)Z1(W0,"model-request-start",{chatJid:X0});let d=await Q(X0);if(W0)Z1(W0,"model-request-ready",{chatJid:X0,hasCurrent:Boolean(d?.current),modelCount:Array.isArray(d?.models)?d.models.length:0});return d})(),V(X0).catch(()=>null)]);if(U.current&&U.current!==X0)return null;S(_0);let N0=$4(G0);if(N0&&N0.percent!=null)M((W0)=>w5(W0,N0)?W0:N0),y5(X0,N0)}catch{if(U.current&&U.current!==X0)return null;S(null)}let B0=L0||v();if(B0)Z1(B0,"runtime-hydration-ready",{chatJid:K}),J2(B0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:K});return null}})},[U,S,K,V,Q,v,M]);u(()=>{eV({chatJid:K}),H(null),w(null),W(!1),z(null),I(!1),T(null),x({message:null,indicator:null,visible:!0});let L0=pV(K);if(L0)M(L0);else M(null);l()},[K,l,H,z,w,T,M,x,I,W]);let h=P((L0)=>{NQ({payload:L0,agentsRef:J,setAgents:j,applyBranding:Z})},[J,Z,j]),r=P((L0)=>{FQ({payload:L0,setUserProfile:G})},[G]),b=P((L0)=>{let X0=Boolean(L0?.prewarmRecent),B0=Number.isFinite(L0?.prewarmLimit)?Number(L0?.prewarmLimit):5;return J$({kind:"active-chat-agents",chatJid:K,run:async()=>{let _0=v(),G0=await HQ({currentChatJid:K,getActiveChatAgents:async()=>{if(_0)Z1(_0,"active-chat-list-request-start",{chatJid:K});let N0=await N(K);if(_0)Z1(_0,"active-chat-list-request-ready",{rowCount:Array.isArray(N0?.chats)?N0.chats.length:0});return N0},getChatBranches:async(N0,W0)=>{if(_0)Z1(_0,"branch-list-request-start",{rootChatJid:N0});let d=await B(N0,W0);if(_0)Z1(_0,"branch-list-request-ready",{rootChatJid:N0,rowCount:Array.isArray(d?.chats)?d.chats.length:0});return d},activeChatJidRef:U,setActiveChatAgents:D});if(X0)PA({chats:G0,currentChatJid:K,prewarmLimit:B0});return null}})},[U,K,N,B,v,D]),e=P(()=>{return J$({kind:"current-chat-branches",chatJid:K,run:async()=>{let L0=v();return await EQ({currentRootChatJid:L,getChatBranches:async(X0,B0)=>{if(L0)Z1(L0,"root-branch-request-start",{rootChatJid:X0});let _0=await B(X0,B0);if(L0)Z1(L0,"root-branch-request-ready",{rootChatJid:X0,rowCount:Array.isArray(_0?.chats)?_0.chats.length:0});return _0},setCurrentChatBranches:E}),null}})},[K,L,B,v,E]),z0=P(()=>{iV({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,refreshContextUsage:A,refreshAutoresearchStatus:O})},[b,O,A,e,l,k]),K0=P(()=>{CA({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,refreshContextUsage:A,refreshAutoresearchStatus:O,prewarmLimit:5})},[b,O,A,e,l,k]);return u(()=>IA({refreshModelAndQueueState:z0,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshQueueState:k,runImmediately:!1}),[b,e,z0,l,k]),u(()=>{let L0=setInterval(()=>{l()},5000);return()=>clearInterval(L0)},[l]),{updateAgentProfile:h,updateUserProfile:r,applyModelState:S,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:e,refreshModelAndQueueState:z0,refreshPostPaintThreadState:K0}}T0();function fA(_,$){let j=O1(_);return Boolean(_&&j===$)}function x5(_,$,j){if(!fA(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function JQ(_,$){return{..._,openedAt:$}}function AQ(_){let $=O1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function kQ(_,$,j){let G=Iq({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=O1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=O1(_),Y=Boolean(Z&&X&&Z===X),q={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:q,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function MQ(_,$){if(!_||_?.source!=="live")return _||null;let j=O1($),G=O1(_);if(j&&G&&j!==G)return _;return null}function wQ(_,$,j){return x5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Nj(_,$,j){if(j.errorMessage)return x5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return x5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function yQ(_,$,j){return x5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function TQ(_,$,j){return x5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function xQ(_,$,j){return x5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}G6();function RA(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function IQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function CQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,setExtensionStatusPanels:V,setPendingExtensionPanelActions:N,setExtensionWorkingState:B,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:D,snapshotCurrentChatPaneState:E,restoreChatPaneState:H,dismissedQueueRowIdsRef:w,refreshAgentStatus:W,viewStateRef:z,refreshTimeline:T,refreshModelAndQueueState:I,refreshPostPaintThreadState:J,setFloatingWidget:k,dismissedLiveWidgetKeysRef:A}=_;u(()=>{RA({setExtensionStatusPanels:V,setPendingExtensionPanelActions:N,setExtensionWorkingState:B})},[$,V,N,B]),u(()=>{let x=!1,f=dZ("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return Z1(f,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),zQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:q,setPosts:K,setHasMore:L,scrollToBottom:Q,isCancelled:()=>x,onTimelineLoadStart:(S)=>{Z1(f,"timeline-load-start",S||null)},onTimelineDataReady:(S)=>{Z1(f,"timeline-data-ready",S||null)},onTimelineFirstPaint:(S)=>{Z1(f,"timeline-first-paint",S||null),J2(f,["runtime-hydration-ready","timeline-first-paint"],"settled",S||null),IQ({refreshAgentStatus:W,refreshPostPaintThreadState:J})},onTimelineError:(S,v)=>{iZ(f,S,"timeline-load-failed",v||null),IQ({refreshAgentStatus:W,refreshPostPaintThreadState:J})}}),()=>{x=!0,oZ(f,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,q,L,K,W,J]),u(()=>{let x=U.current||$;D.current.set(x,E())},[D,$,U,E]),u(()=>{let x=U.current||$;if(x===$)return;D.current.set(x,E()),U.current=$,w.current.clear(),H(D.current.get($)||null)},[D,$,w,U,H,E]);let O=P(()=>{oV({viewStateRef:z,refreshTimeline:T,refreshModelAndQueueState:I})},[I,T,z]),M=P((x,f="streaming")=>{let S=new Date().toISOString();k((v)=>kQ(v,x,{fallbackStatus:f,currentChatJid:$,dismissedSessionKeys:A.current,updatedAt:S}))},[$,A,k]);return{refreshCurrentView:O,applyLiveGeneratedWidgetUpdate:M}}T0();T0();S_();function SA({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!F6(),q=Z.visibilityState&&Z.visibilityState!=="visible",K=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return q=!0,!0;return!1},L=()=>{if(K())return;if(q)q=!1,X(),$?.()},Q=()=>{if(K())return;if(q){L();return}if(Y)_.reconnectIfNeeded()},V=()=>{L()},N=()=>{L()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",V),Z.addEventListener("visibilitychange",N),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",V),Z.removeEventListener("visibilitychange",N)}}function PQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let q=g(j);q.current=j;let K=g(G);K.current=G,u(()=>{let L=new T2((V,N)=>X.current(V,N),(V)=>Y.current(V),{chatJid:Z});L.connect();let Q=SA({sse:L,onWake:()=>K.current?.()});return()=>{Q(),L.disconnect()}},[Z])}a5();g2();function f4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function I5(_,$){return Boolean(_)&&!Boolean($)}function fQ(_,$){return _||$||null}function RQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function C5(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=_4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function Fj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function gA(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function SQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:gA($,j),panelKey:typeof $?.key==="string"?$.key:""}}function uA(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function gQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=uA($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function uQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var bA=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function bQ(_){return bA.has(String(_||"").trim())}function vA(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function P8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(vA(_),{detail:G})),!0}function vQ(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function mQ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function cQ(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:q,pendingRequestRef:K,draftBufferRef:L,thoughtBufferRef:Q,previewResyncPendingRef:V,previewResyncGenerationRef:N,steerQueuedTurnIdRef:B,thoughtExpandedRef:U,draftExpandedRef:D,draftThrottleRef:E,thoughtThrottleRef:H,viewStateRef:w,followupQueueItemsRef:W,dismissedQueueRowIdsRef:z,scrollToBottomRef:T,hasMoreRef:I,loadMoreRef:J,lastAgentResponseRef:k,wasAgentActiveRef:A,setActiveTurn:O,applyLiveGeneratedWidgetUpdate:M,setFloatingWidget:x,clearLastActivityFlag:f,handleUiVersionDrift:S,setAgentStatus:v,setAgentDraft:l,setAgentPlan:h,setAgentThought:r,setPendingRequest:b,clearAgentRunState:e,getAgentStatus:z0,noteAgentActivity:K0,showLastActivity:L0,refreshTimeline:X0,refreshModelAndQueueState:B0,refreshActiveChatAgents:_0,refreshCurrentChatBranches:G0,notifyForFinalResponse:N0,setContextUsage:W0,refreshContextUsage:d,refreshQueueState:j0,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:P0,setSteerQueuedTurnId:b0,applyModelState:c0,getAgentContext:X_,setExtensionStatusPanels:l0,setPendingExtensionPanelActions:__,setExtensionWorkingState:f0,refreshActiveEditorFromWorkspace:p0,showIntentToast:R0,removeStalledPost:d0,setPosts:n0,preserveTimelineScrollTop:U_,openEditor:o0}=j,{turnId:h0,isCurrentChatEvent:M0}=vQ(_,$,G);if(M0)Z($),X($);if(_==="ui_theme"){V5($);return}if(_==="ui_meters"){l7($);return}if(_==="ui_open_tab"){let E0=typeof $?.path==="string"?$.path.trim():"",S0=typeof $?.label==="string"?$.label.trim():void 0;if(E0==="piclaw://settings"){let I0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:I0?{section:I0}:void 0}));return}if(E0&&typeof o0==="function")o0(E0,S0?{label:S0}:void 0);return}let V_=RQ(_);if(V_.kind==="update"){if(!M0)return;if(V_.shouldAdoptTurn&&I5(h0,Y.current))O(h0);M($,V_.fallbackStatus||"streaming");return}if(V_.kind==="close"){if(!M0)return;x((E0)=>MQ(E0,$));return}if(_?.startsWith("agent_")&&!mQ(_))f();if(_==="connected"){if(S($?.app_asset_version))return;if($?.ui_theme){let I0=$.ui_theme.theme||"default",a0=$.ui_theme.tint||null;V5({theme:I0,tint:a0})}if($?.ui_meters)l7($.ui_meters);let E0=N.current+1;if(N.current=E0,V.current=!0,L.current="",Q.current="",v(null),l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),b(null),K.current=null,e(),T6(G)){if(N.current===E0)V.current=!1;return}let S0=G;if(z0(S0).then((I0)=>{if(q.current!==S0)return;if(!I0||I0.status!=="active"||!I0.data)return;let a0=I0.data,A_=k8(a0);if(A_)O(A_);v(a0),K0({clearSilence:!0,atMs:n$(a0)??Date.now()}),L0(a0);let Q_=M5(I0.thought);if(Q_)Q.current=Q_.text,r(Q_);let D_=M5(I0.draft);if(D_)L.current=D_.text,l(D_)}).catch((I0)=>{console.warn("Failed to fetch agent status:",I0)}).finally(()=>{if(N.current===E0)V.current=!1}),s1(w.current))X0();B0();return}if(_==="agent_status"){if(!M0){if($?.type==="done"||$?.type==="error")_0(),G0();return}if($.type==="done"||$.type==="error"){if(f4(h0,Y.current))return;if($.type==="done"){if(N0(h0||Y.current),s1(w.current))X0();let E0=$4($.context_usage);if(E0&&E0.percent!=null)W0((S0)=>w5(S0,E0)?S0:E0),y5(G,E0)}if(d(),A.current=!1,e(),z.current.clear(),_0(),B0(),l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0}),f0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(h0)O(h0);if(K0({running:!0,clearSilence:!0,atMs:n$($)??Date.now()}),$.type==="thinking")L.current="",Q.current="",l({text:"",totalLines:0}),h(""),r({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!M0)return;if(f4(h0,Y.current))return;let E0=fQ(h0,Y.current);if(!E0)return;B.current=E0,b0(E0);return}if(_==="agent_followup_queued"){if(!M0)return;A0((E0)=>PV(E0,$)),j0();return}if(_==="agent_followup_consumed"){if(!M0)return;let E0=C5(W.current,$);if(E0)P0(E0.remainingQueueCount),A0((S0)=>_4(S0,E0.rowId).items);if(j0(),s1(w.current))X0();return}if(_==="agent_followup_removed"){if(!M0)return;let E0=C5(W.current,$);if(E0)z.current.add(E0.rowId),P0(E0.remainingQueueCount),A0((S0)=>_4(S0,E0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!M0)return;if(V.current)return;if(f4(h0,Y.current))return;if(I5(h0,Y.current))O(h0);K0({running:!0,clearSilence:!0}),L.current=KV(L.current,$);let E0=Date.now();if(!E.current||E0-E.current>=100){E.current=E0;let S0=L.current;if(D.current)l((I0)=>Xj(S0,I0));else l(M8(S0,null))}return}if(_==="agent_draft"){if(!M0)return;if(V.current)return;if(f4(h0,Y.current))return;if(I5(h0,Y.current))O(h0);K0({running:!0,clearSilence:!0});let E0=$.text||"",S0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((I0)=>LV(I0,E0,S0));else if(!D.current)L.current=E0,l(M8(E0,$.total_lines));return}if(_==="agent_thought_delta"){if(!M0)return;if(V.current)return;if(f4(h0,Y.current))return;if(I5(h0,Y.current))O(h0);K0({running:!0,clearSilence:!0}),Q.current=VV(Q.current,$);let E0=Date.now();if(U.current&&(!H.current||E0-H.current>=100)){H.current=E0;let S0=Q.current;r((I0)=>Xj(S0,I0))}return}if(_==="agent_thought"){if(!M0)return;if(V.current)return;if(f4(h0,Y.current))return;if(I5(h0,Y.current))O(h0);K0({running:!0,clearSilence:!0});let E0=$.text||"";if(!U.current)Q.current=E0,r(M8(E0,$.total_lines));return}if(_==="model_changed"){if(!M0)return;c0($);let E0=G;X_(E0).then((S0)=>{if(q.current!==E0)return;let I0=$4(S0);if(I0&&I0.percent!=null)W0((a0)=>w5(a0,I0)?a0:I0),y5(E0,I0)}).catch(()=>{if(q.current!==E0)return});return}let s0=SQ(_,$,G);if(s0.isStatusPanelWidgetEvent){if(s0.eventChatJid!==G)return;if(!s0.panelKey)return;if(l0((E0)=>bV(E0,$)),vV($))__((E0)=>T8(E0,s0.panelKey));P8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));p0($?.updates);return}if(bQ(_)){if(_==="extension_ui_title"){_0(),G0(),P8(_,$);return}if(!M0)return;f0((S0)=>{return gQ(S0,_,$)??S0}),P8(_,$);let E0=uQ(_,$);if(E0)R0(E0.title,E0.detail,E0.kind,E0.durationMs);return}let O_=s1(w.current);if(_==="agent_response"){if(!M0)return;f0({message:null,indicator:null,visible:!0}),d0(),k.current={post:$,turnId:Y.current}}if(QV(_,M0,O_))n0((E0)=>BV(E0,$)),T.current?.();if(_==="interaction_updated"){if(!Yj(M0,O_))return;n0((E0)=>NV(E0,$))}if(_==="interaction_deleted"){if(!Yj(M0,O_))return;let E0=$?.ids||[];if(E0.length){if(U_(()=>{n0((S0)=>FV(S0,E0))}),I.current)J.current?.({preserveScroll:!0,preserveMode:"top"})}}}function mA(_){return _?15000:60000}function lQ(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:w,draftThrottleRef:W,thoughtThrottleRef:z,viewStateRef:T,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:A,loadMoreRef:O,lastAgentResponseRef:M,wasAgentActiveRef:x,setActiveTurn:f,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:e,setAgentThought:z0,setPendingRequest:K0,clearAgentRunState:L0,getAgentStatus:X0,noteAgentActivity:B0,showLastActivity:_0,refreshTimeline:G0,refreshModelAndQueueState:N0,refreshActiveChatAgents:W0,refreshCurrentChatBranches:d,notifyForFinalResponse:j0,setContextUsage:A0,refreshContextUsage:P0,refreshQueueState:b0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:X_,setSteerQueuedTurnId:l0,applyModelState:__,getAgentContext:f0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:R0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:n0,showIntentToast:U_,removeStalledPost:o0,setPosts:h0,preserveTimelineScrollTop:M0,openEditor:V_,finalizeStalledResponse:s0,connectionStatus:O_,agentStatus:E0,refreshAgentStatus:S0,refreshAutoresearchStatus:I0}=_,a0=P((Q_,D_)=>{cQ(Q_,D_,{currentChatJid:$,updateAgentProfile:q,updateUserProfile:K,currentTurnIdRef:L,activeChatJidRef:Q,pendingRequestRef:V,draftBufferRef:N,thoughtBufferRef:B,previewResyncPendingRef:U,previewResyncGenerationRef:D,steerQueuedTurnIdRef:E,thoughtExpandedRef:H,draftExpandedRef:w,draftThrottleRef:W,thoughtThrottleRef:z,viewStateRef:T,followupQueueItemsRef:I,dismissedQueueRowIdsRef:J,scrollToBottomRef:k,hasMoreRef:A,loadMoreRef:O,lastAgentResponseRef:M,wasAgentActiveRef:x,setActiveTurn:f,applyLiveGeneratedWidgetUpdate:S,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:r,setAgentDraft:b,setAgentPlan:e,setAgentThought:z0,setPendingRequest:K0,clearAgentRunState:L0,getAgentStatus:X0,noteAgentActivity:B0,showLastActivity:_0,refreshTimeline:G0,refreshModelAndQueueState:N0,refreshActiveChatAgents:W0,refreshCurrentChatBranches:d,notifyForFinalResponse:j0,setContextUsage:A0,refreshContextUsage:P0,refreshQueueState:b0,setFollowupQueueItems:c0,clearQueuedSteerStateIfStale:X_,setSteerQueuedTurnId:l0,applyModelState:__,getAgentContext:f0,setExtensionStatusPanels:p0,setPendingExtensionPanelActions:R0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:n0,showIntentToast:U_,removeStalledPost:o0,setPosts:h0,preserveTimelineScrollTop:M0,openEditor:V_})},[Q,S,__,L0,l,X_,$,L,J,N,w,W,I,f0,X0,h,A,M,O,B0,j0,V,M0,D,U,W0,n0,P0,d,N0,b0,G0,o0,k,f,b,e,r,z0,A0,p0,d0,v,c0,R0,K0,h0,l0,U_,_0,E,B,H,z,q,K,T,x,V_]);u(()=>{if(typeof window>"u")return;let Q_=window.__PICLAW_TEST_API||{};return Q_.emit=a0,Q_.reset=()=>{o0(),L0(),r(null),b({text:"",totalLines:0}),e(""),z0({text:"",totalLines:0}),d0({message:null,indicator:null,visible:!0}),K0(null)},Q_.finalize=()=>s0(),window.__PICLAW_TEST_API=Q_,()=>{if(window.__PICLAW_TEST_API===Q_)window.__PICLAW_TEST_API=void 0}},[L0,s0,a0,o0,b,e,r,z0,d0,K0]),PQ({handleSseEvent:a0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let Q_=location.hash;if(!Q_||!Q_.startsWith("#msg-"))return;let D_=Q_.slice(5);G(D_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=E0!==null;u(()=>{if(O_!=="connected")return;let Q_=mA(A_),D_=setInterval(()=>{jQ({viewStateRef:T,isAgentActive:A_,refreshTimeline:G0,refreshQueueState:b0,refreshAgentStatus:S0,refreshContextUsage:P0,refreshAutoresearchStatus:I0})},Q_);return()=>clearInterval(D_)},[O_,A_,S0,I0,P0,b0,G0,T]),u(()=>{return W8(()=>{S0(),P0(),b0(),I0()})},[S0,I0,P0,b0])}function cA(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function lA(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function hA(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function pA(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function hQ(_){let $=GQ(cA(_)),j=OQ(lA({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=CQ(hA({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return lQ(pA({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}T0();var pQ="piclaw:pane-host-transfer:",nA=300000;function nQ(_){try{return _?.localStorage??null}catch{return null}}function rQ(_){return typeof _==="string"?_.trim():""}function dQ(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function rA(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function dA(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function iA(_,$=globalThis,j=Date.now()){let G=nQ($),Z=rQ(_?.path),X=dQ(_?.payload);if(!G||!Z||!X)return null;let Y=rA(j);try{return G.setItem(`${pQ}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function Uj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=nQ($);if(!G||!Z)return null;let X=`${pQ}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;dA(Z,X);try{let q=JSON.parse(Y),K=typeof q?.capturedAt==="number"&&Number.isFinite(q.capturedAt)?q.capturedAt:j;if(K+nA<j)return null;let L=rQ(q?.path),Q=dQ(q?.payload);if(!L||!Q)return null;return{path:L,payload:Q,capturedAt:K}}catch{return null}}function f8(_,$=globalThis,j=Date.now()){let G=iA(_,$,j);return G?{pane_transfer:G}:null}function iQ(_=globalThis,$=Date.now()){let j=e4("pane_transfer",_);return Uj(j,_,$)}function R4(_){return typeof _==="string"?_.trim():""}function oA(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function Hj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(oA($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function sA(_){try{return _?.(),!0}catch($){return!1}}function P5(_,$=typeof window<"u"?window:null){let j=Hj($),G=R4(_?.panePath),Z=R4(_?.paneInstanceId),X=R4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function oQ(_,$=typeof window<"u"?window:null){let j=Hj($),G=R4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function sQ(_,$,j,G){let Z=Hj(_),X=R4($?.panePath),Y=R4($?.paneInstanceId),q=R4($?.paneWindowId);if(!Z||!X||!Y||!q)return null;let K=Z.get(q)||null;if(!K)return null;if(K.panePath!==X||K.paneInstanceId!==Y)return null;if(typeof K.instance?.moveHost!=="function")return null;if(!await K.instance.moveHost(j,G))return null;return Z.delete(q),sA(K.releaseSourceHost),K.instance}b2();function C6(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function aQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let V=Q?.detail?.path,N=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)G?.(V,N)},q=(Q)=>{let V=Q?.detail?.path,N=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)Z?.(V,N)},K=(Q)=>{let V=Q?.detail?.path,N=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(V)X?.(V,N)},L=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return L.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",q),j.addEventListener("pane:popout",K),()=>{L.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",q),j.removeEventListener("pane:popout",K)}}function tQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(C6(Z?.target))return;if(!O$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function eQ(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(q)=>{if(C6(q?.target))return;if(O$(q,"toggleZenMode")){q.preventDefault?.(),G?.();return}if(q?.key==="Escape"&&X())q.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function _B(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(C6(Z?.target))return;if(O$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(O$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function $B(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(C6(G?.target))return;if(!O$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function jB(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(C6(G?.target))return;if(!O$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function GB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:q,now:K=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let L=X?.()||null;if(!L)return!1;if(G||K<Number(Z||0)||L.inFlight||K<Number(L.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),q?.(!0),!0}function ZB(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function XB(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:q,setIsRenamingBranch:K,renameChatBranch:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,navigate:N,baseHref:B,chatOnlyMode:U,showIntentToast:D,closeRenameForm:E,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let w=H(),W=q?.()||null;if(!W)return!1;if(X.current||w<Number(Y.current||0)||W.inFlight||w<Number(W.cooldownUntil||0))return!1;X.current=!0,W.inFlight=!0,K?.(!0);try{let z=j.agent_name||"",T=o2(G,z);if(!T.canSubmit)return D?.("Could not rename session",T.message||"Enter a valid session handle.","warning",4000),!1;let I=T.normalized||z,J=await L(j.chat_jid,{agentName:I});await Promise.allSettled([Q?.(),V?.()]);let k=J?.branch?.agent_name||I||z;return D?.("Session renamed",`@${k}`,"info",3500),E?.(),!0}catch(z){let T=z instanceof Error?z.message:String(z||"Could not rename session."),I=/already in use/i.test(T||"")?`${T} Switch to or restore that existing session from the session manager.`:T;return D?.("Could not rename session",I||"Could not rename session.","warning",5000),!1}finally{X.current=!1,K?.(!1);let z=H()+zK;Y.current=z;let T=q?.()||null;if(T)T.inFlight=!1,T.cooldownUntil=z}}async function YB(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:q,refreshActiveChatAgents:K,refreshCurrentChatBranches:L,showIntentToast:Q,baseHref:V,chatOnlyMode:N,navigate:B,confirm:U=(k)=>window.confirm(k)}=_;if(!$)return!1;let D=typeof j==="string"&&j.trim()?j.trim():"",E=typeof G==="string"&&G.trim()?G.trim():"",H=D||Z?.chat_jid||E;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let w=(Z?.chat_jid===H?Z:null)||X.find((k)=>k?.chat_jid===H)||Y.find((k)=>k?.chat_jid===H)||null,W=w?.chat_jid===(w?.root_chat_jid||w?.chat_jid),z=Boolean(W&&H==="web:default"),T=Boolean(W&&X.some((k)=>{let A=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",O=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():A;return A&&A!==H&&O===H&&!k?.archived_at}));if(z)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(T)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let I=`@${w?.agent_name||H}${w?.chat_jid?` — ${w.chat_jid}`:""}`;if(!U(W?`Archive ${I}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${I}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await q(H),await Promise.allSettled([K?.(),L?.()]);let k=W?"web:default":w?.root_chat_jid||"web:default";Q?.(W?"Session archived":"Branch pruned",`${I} has been archived.`,"info",3000);let A=T1(V,k,{chatOnly:N});return B?.(A),!0}catch(k){let A=k instanceof Error?k.message:String(k||"Could not prune branch.");return Q?.("Could not prune branch",A||"Could not prune branch.","warning",5000),!1}}async function qB(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:q=(D)=>window.confirm(D)}=_,K=typeof $==="string"?$.trim():"";if(!K||typeof j!=="function")return!1;let L=G.find((D)=>D?.chat_jid===K)||null;if(!Boolean(L?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let V=Boolean(L?.chat_jid&&L.chat_jid===(L.root_chat_jid||L.chat_jid)),N=`@${L?.agent_name||K}`;if(!q(`Permanently delete ${N}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${V?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(K),await Promise.allSettled([Z?.(),X?.()]),Y?.(V?"Archived session deleted":"Archived branch deleted",`${N} was permanently deleted.`,"info",4000),!0}catch(D){let E=D instanceof Error?D.message:String(D||`Could not permanently delete archived ${V?"session":"branch"}.`);return Y?.("Could not delete branch",E||`Could not permanently delete archived ${V?"session":"branch"}.`,"warning",5000),!1}}async function LB(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:q,chatOnlyMode:K,navigate:L}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let V=G.find((H)=>H?.chat_jid===Q)||null,N=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let B=N?.branch,U=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():Q,D=Xq(V?.agent_name,B?.agent_name,U);Y?.("Branch restored",D,"info",4200);let E=T1(q,U,{chatOnly:K});return L?.(E),!0}catch(V){let N=V instanceof Error?V.message:String(V||"Could not restore branch.");return Y?.("Could not restore branch",N||"Could not restore branch.","warning",5000),!1}}async function KB(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let q=await j($);if(Y())return!1;let K=q?.branch,L=typeof K?.chat_jid==="string"&&K.chat_jid.trim()?K.chat_jid.trim():null;if(!L)throw Error("Branch fork did not return a chat id.");let Q=T1(X,L,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(q){if(Y())return!1;return G?.({status:"error",message:F4(q)}),!1}}function QB(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let q=typeof j==="string"?j.trim():"";if(!q||q===G)return!1;let K=T1(X,q,{chatOnly:Z});return Y?.(K),!0}function aA(_){return typeof _==="string"?_.trim():""}function tA(_){return new Promise(($)=>setTimeout($,_))}async function VB(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function BB(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:q,resolveTab:K,buildEditorPopoutTransfer:L}=_,Q=$===X&&Boolean(K?.($));if($===X&&!Q){let D=Z.current;if(await VB(D,$),typeof D?.preparePopoutTransfer!=="function")return null;return await D.preparePopoutTransfer()}let V=()=>aA(q?.()??j),N=V(),B=G.current;if(N!==$)Y?.($);let U=N===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let D=0;D<12;D+=1){if(D>0)await tA(16);else await Promise.resolve();let E=V(),H=G.current,w=E===$,W=H!==B;if(!w||typeof H?.preparePopoutTransfer!=="function")continue;if(N===$||W||D>0){U=H;break}}if(await VB(U,$),typeof U?.preparePopoutTransfer==="function"){let D=await U.preparePopoutTransfer();if(D)return D}return L?.($)??null}function NB(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,q=Z($);if(q&&!q.dirty){X($);return}if($===j&&G)Y(!1)}function FB(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:q}=_;if(!j||!$||!G)return;if(!Z.current){let K=q("editorWidth",null),L=Y.current||280,Q=Number.isFinite(K)?Number(K):L;Z.current=N6(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let K=q("dockHeight",null);X.current=Number.isFinite(K)?Number(K):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function UB(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function HB(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:K}=_;if(typeof q==="function")try{let L=w3(K,$,{chatOnly:j});return q(L),!0}catch(L){return Y?.("Could not create branch",F4(L),"warning",5000),!1}try{let Q=(await G($))?.branch,V=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=Q?.agent_name?`@${Q.agent_name}`:V;Y?.("New branch created",`Switched to ${N}.`,"info",2500);let B=T1(K,V,{chatOnly:j});return q?.(B),!0}catch(L){return Y?.("Could not create branch",F4(L),"warning",5000),!1}}async function EB(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:q,baseHref:K}=_,L=String($||"").trim();if(!L)return!1;try{let V=(await G(L))?.branch,N=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!N)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=V?.agent_name?`@${V.agent_name}`:N;Y?.("Root session created",`Switched to ${B}.`,"info",2500);let U=T1(K,N,{chatOnly:j});return q?.(U),!0}catch(Q){return Y?.("Could not create root session",F4(Q),"warning",5000),!1}}async function DB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:q,onPaneWindowOpened:K,currentChatJid:L,baseHref:Q}=_;if(!$||j)return!1;let V=typeof G==="string"&&G.trim()?G.trim():"";if(!V)return!1;let N=RG(V);if(!N)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let B=J3(N);if(!B)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;A3(B,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(V),D=Boolean(U&&Object.keys(U).length>0),E=fG(Q,V,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:L,params:U});if(k3(B,E),K?.(V,B,U||null),D&&!K)q?.(V);return!0}catch(U){M3(B);let D=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",D,"warning",5000),!1}}async function WB(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:q,setActiveChatAgents:K,setCurrentChatBranches:L,showIntentToast:Q,baseHref:V}=_;if(!$||j)return!1;let N=PG(G);if(!N)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(N.mode==="tab"){let U=w3(V,G,{chatOnly:!0});if(!window.open(U,N.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=J3(N);if(!B)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;A3(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let D=(await X(G))?.branch,E=typeof D?.chat_jid==="string"&&D.chat_jid.trim()?D.chat_jid.trim():null;if(!E)throw Error("Branch fork did not return a chat id.");let H=await UB(()=>Y?.());if(H)K?.(Array.isArray(H?.chats)?H.chats:[]);let w=await UB(()=>q?.(Z));if(w)L?.(Array.isArray(w?.chats)?w.chats:[]);let W=T1(V,E,{chatOnly:!0});return k3(B,W),!0}catch(U){return M3(B),Q?.("Could not open branch window",F4(U),"error",5000),!1}}function eA(_){_(($)=>!$)}function _k(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return QB({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function $k(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:q=typeof window<"u"}=_;return GB({hasWindow:q,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function jk(_){ZB(_)}async function Gk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await XB({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function Zk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await YB({hasWindow:$,baseHref:j,...G})}async function Xk(_){await qB(_)}async function Yk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await LB({baseHref:j,...G})}function qk(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:q=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:K=KB}=_;if(!$||!Y)return;let L=!1;return K({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:q,isCancelled:()=>L}),()=>{L=!0}}async function Lk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await HB({baseHref:j,...G})}async function Kk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await EB({baseHref:j,...G})}async function Vk(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,tabPaneOverrides:V,buildPaneDetachTransfer:N,registerDetachedPaneWindow:B,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H,hasWindow:w=typeof window<"u",baseHref:W=w?window.location.href:"http://localhost/"}=_,z=N?.(j)||null;return await DB({hasWindow:w,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:W,resolveSourceTransfer:async(T)=>{let I=await BB({panePath:T,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:q,editorInstanceRef:K,dockInstanceRef:L,terminalTabPath:Q,resolveTab:D,buildEditorPopoutTransfer:(O)=>{if(!O||O===Q)return null;let M=K.current,x=typeof M?.getContent==="function"?M.getContent():void 0,f=typeof M?.isDirty==="function"?M.isDirty():!1,S=V instanceof Map?V.get(O)||null:null,v=$_.getViewState(O)||null;return j2({path:O,content:f?x:void 0,paneOverrideId:S,viewState:v})}}),J=T===Q&&!D(T)?L.current:K.current,k=typeof J?.exportHostTransferState==="function"?J.exportHostTransferState():null,A=k?f8({path:T,payload:k}):null;if(z?.paneInstanceId&&z?.paneWindowId&&J&&T!==Q&&k?.kind!=="terminal")P5({panePath:T,paneInstanceId:z.paneInstanceId,paneWindowId:z.paneWindowId,instance:J,releaseSourceHost:()=>{if(T===Q){if(L.current===J)L.current=null;if(K.current===J)K.current=null;return}if(K.current===J)K.current=null}});return{...I||{},...A||{},...z?.params||{}}},onPaneWindowOpened:B?(T,I,J)=>{B(T,G,I,J)}:void 0,closeSourcePaneIfTransferred:B?void 0:(T)=>{NB({panePath:T,terminalTabPath:Q,dockVisible:U,resolveTab:D,closeTab:E,setDockVisible:H})}})}function Qk(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=aQ}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function Bk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await WB({hasWindow:$,baseHref:j,...G})}function Nk(_){let{hasWindow:$=typeof window<"u",...j}=_;FB({hasWindow:$,...j})}function zB(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:V,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:w,purgeChatBranch:W,restoreChatBranch:z,branchLoaderMode:T,branchLoaderSourceChatJid:I,forkChatBranch:J,createRootChatSession:k,setBranchLoaderState:A,currentRootChatJid:O,isWebAppMode:M,getActiveChatAgents:x,getChatBranches:f,setActiveChatAgents:S,setCurrentChatBranches:v,openEditor:l,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:K0,buildPaneDetachTransfer:L0,registerDetachedPaneWindow:X0,dockVisible:B0,resolveTab:_0,closeTab:G0,setDockVisible:N0,editorOpen:W0,shellElement:d,editorWidthRef:j0,dockHeightRef:A0,sidebarWidthRef:P0,readStoredNumber:b0}=_,c0=P(()=>{eA($)},[$]),X_=P((M0)=>{_k({nextChatJid:M0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),l0=P(()=>{$k({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:q.current,getFormLock:K,setRenameBranchNameDraft:L,setIsRenameBranchFormOpen:Q})},[X,K,Y,q,Q,L]),__=P(()=>{jk({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:L})},[Q,L]),f0=P(async(M0)=>{await Gk({currentBranchRecord:X,nextName:M0,openRenameForm:l0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:V,renameChatBranch:N,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:D,closeRenameForm:__})},[__,X,G,K,Z,l0,B,U,Y,q,N,V,D]),p0=P(async(M0=null)=>{await Zk({targetChatJid:M0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:E,activeChatAgents:H,pruneChatBranch:w,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[H,G,X,E,j,Z,w,B,U,D]),R0=P(async(M0)=>{await Xk({targetChatJid:M0,purgeChatBranch:W,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D})},[E,W,B,U,D]),d0=P(async(M0)=>{await Yk({targetChatJid:M0,restoreChatBranch:z,currentChatBranches:E,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,chatOnlyMode:G,navigate:Z})},[G,E,Z,B,U,z,D]);u(()=>qk({branchLoaderMode:T,branchLoaderSourceChatJid:I,forkChatBranch:J,setBranchLoaderState:A,navigate:Z}),[T,I,J,Z,A]);let n0=P(async()=>{await Lk({currentChatJid:j,chatOnlyMode:G,forkChatBranch:J,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,j,J,Z,B,U,D]),U_=P(async(M0)=>{await Kk({rootName:M0,chatOnlyMode:G,createRootChatSession:k,refreshActiveChatAgents:B,refreshCurrentChatBranches:U,showIntentToast:D,navigate:Z})},[G,k,Z,B,U,D]),o0=P(async(M0,V_)=>{return await Vk({isWebAppMode:M,path:M0,label:V_,showIntentToast:D,currentChatJid:j,activateTab:h,tabStripActiveId:r,editorInstanceRef:b,dockInstanceRef:e,terminalTabPath:z0,tabPaneOverrides:K0,buildPaneDetachTransfer:L0,registerDetachedPaneWindow:X0,dockVisible:B0,resolveTab:_0,closeTab:G0,setDockVisible:N0})},[h,L0,G0,j,e,B0,b,M,X0,_0,N0,D,K0,r,z0]);u(()=>Qk({openEditor:l,popOutPane:(M0,V_)=>{o0(M0,V_)}}),[o0,l]);let h0=P(async()=>{await Bk({isWebAppMode:M,currentChatJid:j,currentRootChatJid:O,forkChatBranch:J,getActiveChatAgents:x,getChatBranches:f,setActiveChatAgents:S,setCurrentChatBranches:v,showIntentToast:D})},[j,O,J,x,f,M,S,v,D]);return u(()=>{Nk({editorOpen:W0,shellElement:d,editorWidthRef:j0,dockHeightRef:A0,sidebarWidthRef:P0,readStoredNumber:b0})},[A0,W0,j0,b0,d,P0]),{toggleWorkspace:c0,handleBranchPickerChange:X_,openRenameCurrentBranchForm:l0,closeRenameCurrentBranchForm:__,handleRenameCurrentBranch:f0,handlePruneCurrentBranch:p0,handlePurgeArchivedBranch:R0,handleRestoreBranch:d0,handleCreateSessionFromCompose:n0,handleCreateRootSessionFromCompose:U_,handlePopOutPane:o0,handlePopOutChat:h0}}T0();function j4(_){return _.status==="fulfilled"?_.value:null}function R8(_){return Math.max(0,Math.min(100,_))}function OB(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((E)=>E?.data?.is_bot_message).length,Z=$.filter((E)=>!E?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,q=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,K=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,L=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,N=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),D=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:q},agent:{status:U,phase:D,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:N,supportsThinking:Boolean(B)},context:{tokens:L,contextWindow:Q,percent:K},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:R8(Math.round(K))},{key:"queue",label:"Queue",value:R8(X*18)},{key:"activeChats",label:"Active chats",value:R8(Y*12)},{key:"posts",label:"Timeline load",value:R8($.length*5)}]}}function JB(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function AB(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function kB(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function MB(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function wB(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function yB(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function TB(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:q,getActiveChatAgents:K,getChatBranches:L,getTimeline:Q,rawPosts:V,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:w,isAgentTurnActive:W}=_,[z,T,I,J,k,A,O]=await Promise.allSettled([Z(j),X(j),Y(j),q(j),K(),L(G),Q(20,null,j)]);return OB({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:j4(z),contextPayload:j4(T),queuePayload:j4(I),modelsPayload:j4(J),activeChatsPayload:j4(k),branchesPayload:j4(A),timelinePayload:j4(O),rawPosts:V,activeChatAgents:N,currentChatBranches:B,contextUsage:U,followupQueueItems:D,activeModel:E,activeThinkingLevel:H,supportsThinking:w,isAgentTurnActive:W})}function xB(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,steerAgentQueueItem:K}=_,L=C5(j.current,$);if(!L)return;let{rowId:Q}=L;G.current.add(Q),Y((V)=>_4(V,Q).items),K(Q,jj(Z)).then(()=>{X()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let N=Fj("steer");q(N.title,N.detail,"warning"),G.current.delete(Q),X()})}function IB(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:q,clearQueuedSteerStateIfStale:K,removeAgentQueueItem:L}=_,Q=C5(j.current,$);if(!Q)return;let{rowId:V}=Q;G.current.add(V),K?.(Q.remainingQueueCount),Y((N)=>_4(N,V).items),L(V,jj(Z)).then(()=>{X()}).catch((N)=>{console.warn("[queue] Failed to remove queued item:",N);let B=Fj("remove");q(B.title,B.detail,"warning"),G.current.delete(V),X()})}function CB(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=O1($);if(Z)j.current.delete(Z);G(JQ($,new Date().toISOString()))}function PB(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=AQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function fB(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:q,showIntentToast:K,sendAgentMessage:L,buildFloatingWidgetDashboardSnapshot:Q}=_,V=typeof $?.kind==="string"?$.kind:"",N=O1(j);if(!V||!N)return;if(V==="widget.close"){Y();return}if(V==="widget.submit"){let B=Rq($?.payload),U=Sq($?.payload),D=new Date().toISOString();if(X((E)=>wQ(E,N,{kind:V,payload:$?.payload||null,submittedAt:D,submissionText:B})),!B){if(K("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let E=await L("default",B,null,[],Z?"queue":null,G);q(E),X((w)=>Nj(w,N,{submittedAt:D,submissionText:B,queued:E?.queued||null}));let H=JB(E?.queued);if(K(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(E){X((w)=>Nj(w,N,{submittedAt:D,submissionText:B,errorMessage:E?.message||"Could not send the widget message."}));let H=AB(E?.message);K(H.title,H.detail,H.kind,H.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let B=new Date().toISOString(),U=kB($?.payload||null,j?.runtimeState?.refreshCount);if(X((D)=>yQ(D,N,{kind:V,payload:$?.payload||null,eventAt:B,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),V==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let D=await Q($?.payload||null);X((H)=>TQ(H,N,{dashboard:D,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let E=MB();K(E.title,E.detail,E.kind,E.durationMs)}catch(D){X((H)=>xQ(H,N,{errorMessage:D?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let E=wB(D?.message);K(E.title,E.detail,E.kind,E.durationMs)}})();else{let D=yB();K(D.title,D.detail,D.kind,D.durationMs)}}}function Fk(_,$=xB){$(_)}function Uk(_,$=IB){$(_)}function Hk(_,$,j=DQ){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function RB(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L,refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:N,refreshAutoresearchStatus:B}=_,U=P((w)=>{Fk({queuedItem:w,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:K,removeAgentQueueItem:L})},[$,G,j,Z,L,X,Y,K]),D=P((w)=>{Uk({queuedItem:w,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:q,steerAgentQueueItem:K,removeAgentQueueItem:L})},[q,$,G,j,Z,L,X,Y,K]),E=P(async(w,W)=>{X((z)=>{if(!Array.isArray(z)||w<0||W<0||w>=z.length||W>=z.length||w===W)return z;let T=[...z],[I]=T.splice(w,1);return T.splice(W,0,I),T});try{let{reorderAgentQueueItem:z}=await Promise.resolve().then(() => (S_(),K6));await z(w,W,$)}catch(z){console.warn("Failed to persist queue reorder:",z),Z()}},[$,Z,X]),H=P((w)=>{Hk(w,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:V,refreshContextUsage:N,refreshAutoresearchStatus:B,refreshQueueState:Z})},[Q,B,N,V,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:D,handleMoveQueuedFollowup:E,handleMessageResponse:H}}T0();function SB(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function gB(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:q}=_,K=String($||"").trim();if(!K)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let L=new AbortController;Y.current=L,q({question:K,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(K,{signal:L.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(V)=>{if(V==="side_prompt_start")q((N)=>N?{...N,status:"running"}:N)},onThinkingDelta:(V)=>{q((N)=>N?{...N,thinking:`${N.thinking||""}${V||""}`}:N)},onTextDelta:(V)=>{q((N)=>N?{...N,answer:`${N.answer||""}${V||""}`}:N)}});if(Y.current!==L)return!0;q((V)=>V?{...V,answer:Q?.result||V.answer||"",thinking:Q?.thinking||V.thinking||"",model:Q?.model||null,status:"success",error:null}:V)}catch(Q){if(L.signal.aborted)return!0;q((V)=>V?{...V,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:V)}finally{if(Y.current===L)Y.current=null}return!0}async function uB(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function bB(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:q}=_,K=j($);if(!K)return!1;try{let L=await X("default",K,null,[],G?"queue":null,Z);return Y(L),q(L?.queued==="followup"?"BTW queued":"BTW injected",L?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(L){return q("BTW inject failed",L?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function Ek(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function Dk(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function vB(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:q,dismissAutoresearch:K,streamSidePrompt:L,btwAbortRef:Q,btwSession:V,setBtwSession:N,sendAgentMessage:B,handleMessageResponse:U,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E,getAgentStatus:H,getAgentContext:w,getAgentQueueState:W,getAgentModels:z,getActiveChatAgents:T,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:A,currentChatBranches:O,contextUsage:M,followupQueueItemsRef:x,activeModel:f,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:l}=_,h=P(async(G0,N0)=>{let W0=typeof G0?.key==="string"?G0.key:"",d=typeof N0?.key==="string"?N0.key:"",j0=Vj(W0,d);if(!W0||!d)return;X((A0)=>mV(A0,W0,d));try{let A0=await lV({panel:G0,action:N0,currentChatJid:$,stopAutoresearch:q,dismissAutoresearch:K,writeClipboard:async(P0)=>{if(!await Ek(P0))throw Error("Clipboard access is unavailable.")}});if(A0.refreshAutoresearchStatus)Y();if(A0.toast)Z(A0.toast.title,A0.toast.detail,A0.toast.kind,A0.toast.durationMs)}catch(A0){Z("Panel action failed",A0?.message||"Could not complete that action.","warning")}finally{X((A0)=>cV(A0,j0))}},[$,K,Y,X,Z,q]),r=P(()=>{SB({btwAbortRef:Q,setBtwSession:N})},[Q,N]),b=P(async(G0)=>{return await gB({question:G0,currentChatJid:$,streamSidePrompt:L,resolveBtwChatJid:Jq,showIntentToast:Z,btwAbortRef:Q,setBtwSession:N})},[Q,$,N,Z,L]),e=P(async({content:G0})=>{return await uB({content:G0,parseBtwCommand:Oq,closeBtwPanel:r,runBtwPrompt:b,showIntentToast:Z})},[r,b,Z]),z0=P(()=>{if(V?.question)b(V.question)},[V,b]),K0=P(async()=>{await bB({btwSession:V,buildBtwInjectionText:Mq,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:B,handleMessageResponse:U,showIntentToast:Z})},[V,$,U,G,B,Z]),L0=P(async(G0=null)=>{return TB({requestPayload:G0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:w,getAgentQueueState:W,getAgentModels:z,getActiveChatAgents:T,getChatBranches:I,getTimeline:J,rawPosts:k,activeChatAgents:A,currentChatBranches:O,contextUsage:M,followupQueueItems:x.current,activeModel:f,activeThinkingLevel:S,supportsThinking:v,isAgentTurnActive:l})},[A,f,S,M,O,$,j,x,T,w,z,W,H,I,J,l,k,v]),X0=P((G0)=>{CB({widget:G0,dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),B0=P(()=>{PB({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[D,E]),_0=P((G0,N0)=>{fB({event:G0,widget:N0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:E,handleCloseFloatingWidget:B0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:B,buildFloatingWidgetDashboardSnapshot:L0})},[L0,$,B0,U,G,B,E,Z]);return u(()=>{Dk({dismissedLiveWidgetKeysRef:D,setFloatingWidget:E})},[$,D,E]),{handleExtensionPanelAction:h,closeBtwPanel:r,handleBtwIntercept:e,handleBtwRetry:z0,handleBtwInject:K0,handleOpenFloatingWidget:X0,handleCloseFloatingWidget:B0,handleFloatingWidgetEvent:_0}}T0();function Wk(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function zk(_){return!_}function mB(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:q,nextChat:K}=_;u(()=>{if(!Wk({hasDockPanes:$,chatOnlyMode:j}))return;return tQ(G)},[j,$,G]),u(()=>{if(!zk(j))return;return eQ({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof q!=="function"&&typeof K!=="function")return;return _B({previousChat:q,nextChat:K})},[K,q]),u(()=>jB(),[]),u(()=>$B(),[])}function Ok(_){return Boolean(_&&typeof _.closest==="function")}function cB(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function Jk(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function Ak(){return{lastTriggeredAt:0,accumX:0}}function Ej(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var kk=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),Mk=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function lB(_){if(!_||!Ok(_))return!1;let $=_.closest(kk);if(!$)return!0;return Boolean($.closest(Mk))}function pB(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function Dj(_){let $=pB(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function hB(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function wk(_){let $=pB(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:hB(_.candidates,G)},next:{chatJid:Z,name:hB(_.candidates,Z)}}}function yk(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function Tk(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function xk(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let q=$<0,K=q?G.next:G.prev,L=_.querySelector(".chat-swipe-chevron");if(L)L.textContent=q?"›":"‹",L.style.order=q?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=K?.name??""}function P6(_){_.style.display="none",_.style.opacity="0"}function nB(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,q=$.current;if(!q)return()=>{};let K=X(),L=typeof Y==="function"?Y():!1;if(!K&&!L)return()=>{};let Q=Jk(),V=Ak(),N=null,B={prev:null,next:null},U=!1;function D(){B=wk({candidates:j,currentChatJid:G})}D();function E(){if(!N)N=Tk(q);return N}function H(k){let A=k==="next"?B.next:B.prev;if(A)Z(A.chatJid)}function w(k){U=String(k.pointerType||"").toLowerCase()==="pen"}function W(k){if(Ej(Q),D(),!K)return;if(k.touches.length!==1)return;if(U)return;if(cB())return;if(!lB(k.target))return;let A=k.touches[0];Q.active=!0,Q.startX=A.clientX,Q.startY=A.clientY,Q.lastX=A.clientX,Q.lastY=A.clientY,Q.startedAt=Date.now()}function z(k){if(!Q.active||Q.cancelled)return;if(cB()){Q.cancelled=!0,P6(E());return}let A=k.touches[0];if(!A)return;Q.lastX=A.clientX,Q.lastY=A.clientY;let O=Q.lastX-Q.startX,M=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(M)>16&&Math.abs(M)>=Math.abs(O)){Q.cancelled=!0,P6(E());return}if(Math.abs(O)>12&&Math.abs(O)>Math.abs(M)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(k.cancelable)k.preventDefault();xk(E(),O,q.clientWidth,B)}}function T(){if(!Q.active)return;let k=Q.lastX-Q.startX,A=Q.lastY-Q.startY,O=!Q.cancelled&&yk({dx:k,dy:A});if(P6(E()),Ej(Q),O)H(k<0?"next":"prev")}function I(){P6(E()),Ej(Q)}function J(k){if(K)return;if(!L)return;if(!lB(k.target))return;let{deltaX:A,deltaY:O}=k;if(!Number.isFinite(A)||Math.abs(A)<72)return;if(Math.abs(A)<=Math.abs(O)*1.35)return;if(k.cancelable)k.preventDefault();let M=Date.now();if(M-V.lastTriggeredAt<450)return;V.lastTriggeredAt=M,H(A>0?"next":"prev")}return q.addEventListener("pointerdown",w,{passive:!0}),q.addEventListener("touchstart",W,{passive:!0}),q.addEventListener("touchmove",z,{passive:!1}),q.addEventListener("touchend",T,{passive:!0}),q.addEventListener("touchcancel",I,{passive:!0}),q.addEventListener("wheel",J,{passive:!1}),()=>{if(q.removeEventListener("pointerdown",w),q.removeEventListener("touchstart",W),q.removeEventListener("touchmove",z),q.removeEventListener("touchend",T),q.removeEventListener("touchcancel",I),q.removeEventListener("wheel",J),N)P6(N),N.remove(),N=null}}function Ik(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Ck(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Pk(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function fk(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=Dj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=Dj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function rB(_){let $=RB(Ik(_)),j=vB(Ck({..._,handleMessageResponse:$.handleMessageResponse})),G=zB(Pk(_));return mB(fk({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Rk(_,$){return Boolean(_||$!==null)}function Sk(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function gk(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:q,refs:K,setters:L,services:Q,helpers:V}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:L.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:L.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:K.agentStatusRef,pendingRequestRef:K.pendingRequestRef,thoughtBufferRef:K.thoughtBufferRef,draftBufferRef:K.draftBufferRef,previewResyncPendingRef:K.previewResyncPendingRef,previewResyncGenerationRef:K.previewResyncGenerationRef,setAgentStatus:L.setAgentStatus,setAgentDraft:L.setAgentDraft,setAgentPlan:L.setAgentPlan,setAgentThought:L.setAgentThought,setPendingRequest:L.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:K.isAgentRunningRef,currentTurnIdRef:K.currentTurnIdRef,silentRecoveryRef:K.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:K.lastAgentEventRef,lastSilenceNoticeRef:K.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:K.isAgentRunningRef,pendingRequestRef:K.pendingRequestRef,showIntentToast:$},setConnectionStatus:L.setConnectionStatus,setStateAccessFailed:L.setStateAccessFailed,hasConnectedOnceRef:K.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:L.setAgents,setUserProfile:L.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:V.readStoredNumber,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,agentsRef:K.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:L.setFloatingWidget,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:K.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:L.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:q.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{L.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:K.thoughtExpandedRef,draftExpandedRef:K.draftExpandedRef,steerQueuedTurnIdRef:K.steerQueuedTurnIdRef}}function dB(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:q,setters:K,services:L,helpers:Q}=_,V=X.composeReferenceActions.showIntentToast,N=gV({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:L.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:K.setRemovingPostIds,deletePost:L.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),B=hQ(gk(_,V)),U=Rk(L.isAgentTurnActive,L.agentStatus),D=rB({currentChatJid:$.currentChatJid,followupQueueItemsRef:q.followupQueueItemsRef,dismissedQueueRowIdsRef:q.dismissedQueueRowIdsRef,setFollowupQueueItems:K.setFollowupQueueItems,showIntentToast:V,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:L.steerAgentQueueItem,removeAgentQueueItem:L.removeAgentQueueItem,refreshQueueState:B.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:B.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:B.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:B.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:B.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,stopAutoresearch:L.stopAutoresearch,dismissAutoresearch:L.dismissAutoresearch,streamSidePrompt:L.streamSidePrompt,btwAbortRef:q.btwAbortRef,btwSession:G.btwSession,setBtwSession:K.setBtwSession,sendAgentMessage:L.sendAgentMessage,dismissedLiveWidgetKeysRef:q.dismissedLiveWidgetKeysRef,setFloatingWidget:K.setFloatingWidget,getAgentStatus:L.getAgentStatus,getAgentContext:L.getAgentContext,getAgentQueueState:L.getAgentQueueState,getAgentModels:L.getAgentModels,getActiveChatAgents:L.getActiveChatAgents,getChatBranches:L.getChatBranches,getTimeline:L.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:L.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:q.renameBranchInFlightRef,renameBranchLockUntilRef:q.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch,renameChatBranch:L.renameChatBranch,pruneChatBranch:L.pruneChatBranch,purgeChatBranch:L.purgeChatBranch,restoreChatBranch:L.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:L.forkChatBranch,createRootChatSession:L.createRootChatSession,setBranchLoaderState:K.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,openEditor:L.openEditor,tabStripActiveId:L.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:L.terminalTabPath,tabPaneOverrides:L.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:L.resolveTab,closeTab:L.closeTab,setDockVisible:Y.setDockVisible,editorOpen:L.editorOpen,shellElement:q.appShellRef.current,editorWidthRef:q.editorWidthRef,dockHeightRef:q.dockHeightRef,sidebarWidthRef:q.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return Sk({agentStatusLifecycleBundle:B,actionBundle:D,timelineViewActions:N,isComposeBoxAgentActive:U})}T0();S_();T0();function iB(_){try{return _?.focus?.(),!0}catch($){return!1}}function f6(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Wj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function oB(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function sB(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function G4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=f6($,"piclaw.notifications.deviceId");if(j)return j;let G=sB("device");return Wj($,"piclaw.notifications.deviceId",G),f6($,"piclaw.notifications.deviceId")||G}function R6(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=f6($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=sB("client");if(Wj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=f6($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function aB(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function zj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():G4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():R6($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),q=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),L=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:L,hasFocus:q,updatedAtMs:Y}}function tB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Wj(j,aB(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function eB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return oB(j,aB(G,Z)),!0}function uk(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():G4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,q=[],K=[];for(let L=0;L<j.length;L+=1){let Q=j.key(L);if(!Q||!Q.startsWith(Y))continue;let V=f6(j,Q);if(!V){K.push(Q);continue}try{let N=JSON.parse(V),B=Number(N?.updatedAtMs);if(!Number.isFinite(B)||Z-B>X){K.push(Q);continue}let U=typeof N?.chatJid==="string"?N.chatJid.trim():"",D=typeof N?.clientId==="string"?N.clientId.trim():"";if(!U||!D){K.push(Q);continue}q.push({deviceId:G,clientId:D,chatJid:U,visibilityState:N?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(N?.hasFocus),updatedAtMs:B})}catch{K.push(Q)}}return K.forEach((L)=>oB(j,L)),q.sort((L,Q)=>L.clientId.localeCompare(Q.clientId))}function _N(_={}){let $=zj(_),j=$.chatJid;if(!j)return!1;let G=uk({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,q)=>Y.clientId.localeCompare(q.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function bk(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function vk(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=bk(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function mk(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function S8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function jN(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function ck(_){let $=await jN(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await K7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:mk(Z)})}async function $N(_,$){if(!S8(_))return!1;let j=await ck(_);return await V7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function lk(_,$){if(!S8(_))return!1;let G=await(await jN(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await Q7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function hk(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function pk(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function GN(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=g(!1),q=g(null),K=g(null);u(()=>{let B=F$("notificationsEnabled",!1);if(Y.current=B,G(B),typeof window<"u")q.current=G4(window),K.current=R6(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&B){Y.current=!1,G(!1),K_("notificationsEnabled","false");return}if(U==="granted"&&B&&typeof window<"u"&&S8(window))$N(window,q.current||G4(window)).catch((D)=>{console.warn("Failed to refresh stored web push subscription:",D)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let B=q.current||G4(window),U=K.current||R6(window);q.current=B,K.current=U;let D=(W=!0,z="fetch")=>{let T=zj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:B,clientId:U});if(W)tB(T,window);else eB({deviceId:B,clientId:U},window);let I={device_id:B,client_id:U,chat_jid:$,visibility_state:T.visibilityState,has_focus:T.hasFocus,active:W};if(!W&&z==="beacon"&&pk(I,window))return;hk(I,{runtimeWindow:window,keepalive:!W||z==="keepalive"})},E=()=>D(!0),H=()=>D(!1,"beacon");D(!0);let w=setInterval(()=>D(!0),15000);return document.addEventListener("visibilitychange",E),window.addEventListener("focus",E),window.addEventListener("blur",E),window.addEventListener("pageshow",E),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(w),document.removeEventListener("visibilitychange",E),window.removeEventListener("focus",E),window.removeEventListener("blur",E),window.removeEventListener("pageshow",E),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),D(!1,"beacon")}},[$]);let L=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let B=Notification.requestPermission();if(B&&typeof B.then==="function")return B;return Promise.resolve(B)}catch(B){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",B),Promise.resolve("default")}},[]),Q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let D=await L();if(X(D||"default"),D!=="granted"){Y.current=!1,G(!1),K_("notificationsEnabled","false");return}}let B=!Y.current;Y.current=B,G(B),K_("notificationsEnabled",String(B));let U=q.current||G4(window);if(q.current=U,S8(window))try{if(B)await $N(window,U);else await lk(window,U)}catch(D){if(console.warn("Failed to sync web push notifications:",D),B)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[L]),V=P((B,U,D={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let E=new Notification(vk(B,D?.sourceLabel||"",window),{body:U});return E.onclick=()=>{iB(window)},!0}catch(E){return console.debug("[use-notifications] Local notification creation failed.",E,{title:typeof B==="string"?B:null}),!1}},[]),N=P((B)=>{if(typeof window>"u"||typeof document>"u")return!1;return _N({chatJid:typeof B==="string"&&B.trim()?B.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:q.current||G4(window),clientId:K.current||R6(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:V,shouldNotifyLocallyForChat:N}}function nk(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function rk(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function dk(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function ZN(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[q,K]=C(()=>f1()),[L,Q]=C(null),[V,N]=C(null),[B,U]=C(!1),[D,E]=C("current"),[H,w]=C([]),[W,z]=C([]),[T,I]=C([]),[J,k]=C(null),[A,O]=C({}),[M,x]=C(null),[f,S]=C(null),[v,l]=C(!1),[h,r]=C(null),[b,e]=C(null),[z0,K0]=C(!1),[L0,X0]=C([]),[B0,_0]=C([]),[G0,N0]=C(null),[W0,d]=C(()=>new Map),[j0,A0]=C(()=>new Set),[P0,b0]=C(()=>({message:null,indicator:null,visible:!0})),[c0,X_]=C([]),[l0,__]=C(!1),[f0,p0]=C(()=>kK()),[R0,d0]=C(null),[n0,U_]=C(null),o0=g(new Set),h0=Z0(()=>nk({activeChatAgents:L0,currentChatBranches:B0,currentChatJid:$}),[L0,B0,$]),M0=Z0(()=>dk($,h0),[h0,$]),V_=AK(D),[s0,O_]=C(()=>rk(j)),E0=c0.length,S0=g(new Set),I0=g([]),a0=g(new Set),A_=g(0),Q_=g({inFlight:!1,lastAttemptAt:0,turnId:null});S0.current=new Set(c0.map((u1)=>u1.row_id)),I0.current=c0;let{notificationsEnabled:D_,notificationPermission:E_,toggleNotifications:M_,notify:$0,shouldNotifyLocallyForChat:O0}=GN({chatJid:$}),[D0,v0]=C(()=>new Set),[m0,s]=C(()=>hK({allowLegacyFallback:!0,defaultValue:!1})),[o,t]=C({name:"You",avatar_url:null,avatar_background:null}),Y0=g(null),q0=g(!1),k0=g(!1),t0=g(!1),u0=g(null),U0=g($),y0=g(new Map),j_=g($),g0=g(0),G_=g(0),L_=g({}),W_=g({name:null,avatar_url:null}),i0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),n_=g(null),y_=g(null),i=g(0),J0=g(0),Y_=g(0),B_=g(null),h_=g(null),N1=g(null),g_=g(null),J1=g(0),C_=g({title:null,avatarBase:null}),w_=g(null),A1=g(!1),[z_,k_]=C(!1),F1=g(0),[v_,r_]=C(!1),[s_,H_]=C(""),x1=Z0(()=>o2(s_,h0?.agent_name||""),[h0?.agent_name,s_]),U1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:q,setIsWebAppMode:K,currentHashtag:L,setCurrentHashtag:Q,searchQuery:V,setSearchQuery:N,searchOpen:B,setSearchOpen:U,searchScope:D,setSearchScope:E,fileRefs:H,setFileRefs:w,folderRefs:W,setFolderRefs:z,messageRefs:T,setMessageRefs:I,intentToast:J,setIntentToast:k,agents:A,setAgents:O,activeModel:M,setActiveModel:x,activeThinkingLevel:f,setActiveThinkingLevel:S,supportsThinking:v,setSupportsThinking:l,activeModelUsage:h,setActiveModelUsage:r,agentModelsPayload:b,setAgentModelsPayload:e,hasLoadedAgentModels:z0,setHasLoadedAgentModels:K0,activeChatAgents:L0,setActiveChatAgents:X0,currentChatBranches:B0,setCurrentChatBranches:_0,contextUsage:G0,setContextUsage:N0,extensionStatusPanels:W0,setExtensionStatusPanels:d,pendingExtensionPanelActions:j0,setPendingExtensionPanelActions:A0,extensionWorkingState:P0,setExtensionWorkingState:b0,followupQueueItems:c0,setFollowupQueueItems:X_,isAgentTurnActive:l0,setIsAgentTurnActive:__,btwSession:f0,setBtwSession:p0,floatingWidget:R0,setFloatingWidget:d0,attachmentPreview:n0,setAttachmentPreview:U_,dismissedLiveWidgetKeysRef:o0,currentBranchRecord:h0,currentRootChatJid:M0,activeSearchScopeLabel:V_,branchLoaderState:s0,setBranchLoaderState:O_,followupQueueCount:E0,followupQueueRowIdsRef:S0,followupQueueItemsRef:I0,dismissedQueueRowIdsRef:a0,queueRefreshGenRef:A_,silentRecoveryRef:Q_,notificationsEnabled:D_,notificationPermission:E_,handleToggleNotifications:M_,notify:$0,shouldNotifyLocallyForChat:O0,removingPostIds:D0,setRemovingPostIds:v0,workspaceOpen:m0,setWorkspaceOpen:s,userProfile:o,setUserProfile:t,staleUiVersionRef:Y0,staleUiReloadScheduledRef:q0,hasConnectedOnceRef:k0,wasAgentActiveRef:t0,agentStatusRef:u0,activeChatJidRef:U0,chatPaneStateByChatRef:y0,paneStateOwnerChatJidRef:j_,draftThrottleRef:g0,thoughtThrottleRef:G_,agentsRef:L_,userProfileRef:W_,viewStateRef:i0,timelineRef:n_,appShellRef:y_,sidebarWidthRef:i,editorWidthRef:J0,dockHeightRef:Y_,lastNotifiedIdRef:B_,lastAgentResponseRef:h_,btwAbortRef:N1,lastActivityTimerRef:g_,lastActivityTokenRef:J1,brandingRef:C_,intentToastTimerRef:w_,renameBranchInFlightRef:A1,isRenamingBranch:z_,setIsRenamingBranch:k_,renameBranchLockUntilRef:F1,isRenameBranchFormOpen:v_,setIsRenameBranchFormOpen:r_,renameBranchNameDraft:s_,setRenameBranchNameDraft:H_,renameBranchDraftState:x1,renameBranchNameInputRef:U1}}T0();T0();function ik(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,q]of _.entries()){let K=Y;if(G==="dir"){if(Y===$)K=j,Z=!0;else if(Y.startsWith(`${$}/`))K=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)K=j,Z=!0;X.set(K,q)}return Z?X:_}function XN(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let q=Y;if(G==="dir"){if(Y===$)q=j,Z=!0;else if(Y.startsWith(`${$}/`))q=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)q=j,Z=!0;X.add(q)}return Z?X:_}function YN({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=C(()=>$_.getTabs()),[Z,X]=C(()=>$_.getActiveId()),[Y,q]=C(()=>$_.getTabs().length>0);u(()=>{return $_.onChange((x,f)=>{G(x),X(f),q(x.length>0)})},[]);let[K,L]=C(()=>new Set),[Q,V]=C(()=>new Set),[N,B]=C(()=>new Map),U=P((x)=>{L((f)=>{let S=new Set(f);if(S.has(x))S.delete(x);else S.add(x);return S})},[]),D=P((x)=>{L((f)=>{if(!f.has(x))return f;let S=new Set(f);return S.delete(x),S})},[]),E=P((x)=>{V((f)=>{if(!f.has(x))return f;let S=new Set(f);return S.delete(x),S})},[]),H=P((x)=>{B((f)=>{if(!f.has(x))return f;let S=new Map(f);return S.delete(x),S})},[]),w=P((x,f={})=>{if(!x)return;let S=typeof f?.paneOverrideId==="string"&&f.paneOverrideId.trim()?f.paneOverrideId.trim():null,v={path:x,mode:"edit"};try{if(!(S?q_.get(S):q_.resolve(v))){if(!q_.get("editor")){console.warn(`[openEditor] No pane handler for: ${x}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${x}":`,b)}let l=typeof f?.label==="string"&&f.label.trim()?f.label.trim():void 0,h=f?.viewState&&typeof f.viewState==="object"?f.viewState:null,r=f?.diffMode==="saved"?"saved":null;if($_.open(x,l),h)$_.saveViewState(x,h);if(S)B((b)=>{if(b.get(x)===S)return b;let e=new Map(b);return e.set(x,S),e});if(r==="saved")V((b)=>{if(b.has(x))return b;let e=new Set(b);return e.add(x),e})},[]),W=P(()=>{let x=$_.getActiveId();if(x){let f=$_.get(x);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}$_.close(x),D(x),E(x),H(x),$.current?.(x)}},[E,H,D]),z=P((x)=>{let f=$_.get(x);if(f?.dirty){if(!window.confirm(`"${f.label}" has unsaved changes. Close anyway?`))return}$_.close(x),D(x),E(x),H(x),$.current?.(x)},[E,H,D]),T=P((x)=>{$_.activate(x)},[]),I=P((x)=>{let f=$_.getTabs().filter((l)=>l.id!==x&&!l.pinned),S=f.filter((l)=>l.dirty).length;if(S>0){if(!window.confirm(`${S} unsaved tab${S>1?"s":""} will be closed. Continue?`))return}let v=f.map((l)=>l.id);$_.closeOthers(x),v.forEach((l)=>{D(l),E(l),H(l),$.current?.(l)})},[E,H,D]),J=P(()=>{let x=$_.getTabs().filter((v)=>!v.pinned),f=x.filter((v)=>v.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let S=x.map((v)=>v.id);$_.closeAll(),S.forEach((v)=>{D(v),E(v),H(v),$.current?.(v)})},[E,H,D]),k=P((x)=>{$_.togglePin(x)},[]),A=P((x)=>{if(!x)return;V((f)=>{let S=new Set(f);if(S.has(x))S.delete(x);else S.add(x);return S}),$_.activate(x)},[]),O=P((x)=>{if(!x)return;B((f)=>{if(f.get(x)==="editor")return f;let S=new Map(f);return S.set(x,"editor"),S}),$_.activate(x)},[]),M=P(()=>{let x=$_.getActiveId();if(x)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:x}}))},[]);return u(()=>{let x=(f)=>{let{oldPath:S,newPath:v,type:l}=f.detail||{};if(!S||!v)return;if(l==="dir"){for(let h of $_.getTabs())if(h.path===S||h.path.startsWith(`${S}/`)){let r=`${v}${h.path.slice(S.length)}`;$_.rename(h.id,r)}}else $_.rename(S,v);L((h)=>XN(h,S,v,l)),V((h)=>XN(h,S,v,l)),B((h)=>ik(h,S,v,l))};return window.addEventListener("workspace-file-renamed",x),()=>window.removeEventListener("workspace-file-renamed",x)},[]),u(()=>{let x=(f)=>{if($_.hasUnsaved())f.preventDefault(),f.returnValue=""};return window.addEventListener("beforeunload",x),()=>window.removeEventListener("beforeunload",x)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:K,diffTabs:Q,tabPaneOverrides:N,openEditor:w,closeEditor:W,handleTabClose:z,handleTabActivate:T,handleTabCloseOthers:I,handleTabCloseAll:J,handleTabTogglePin:k,handleTabTogglePreview:U,handleTabToggleDiff:A,handleTabEditSource:O,revealInExplorer:M}}T0();function a1(_){return typeof _==="string"&&_.trim()?_.trim():null}function ok(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function S4(_="pane"){let $=ok();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function qN(_){let $=a1(_?.paneInstanceId),j=a1(_?.paneWindowId);if(!$||!j)return{};let G=a1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function LN(_={}){let $=new URLSearchParams(_.search||"");return{panePath:a1($.get("pane_path"))||a1(_.panePath),paneLabel:a1($.get("pane_label"))||a1(_.paneLabel),paneInstanceId:a1($.get("pane_instance_id")),paneWindowId:a1($.get("pane_window_id")),paneSourceWindowId:a1($.get("pane_source_window_id"))}}function g4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function KN(_){let $=t1(_?.panePath),j=t1(_?.paneInstanceId),G=t1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=t1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:t1(_?.label),sourceWindowId:t1(_?.sourceWindowId)}}function Oj(_,$){if(!_||!$)return!1;return t1($.panePath)===_.panePath&&t1($.paneInstanceId)===_.paneInstanceId&&t1($.paneWindowId)===_.ownerWindowId}function Jj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:t1($)||new Date().toISOString(),label:_.label||null}}function g8(_){try{return _?.close?.(),!0}catch($){return!1}}function Aj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function sk(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function VN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var ak=400;function tk(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function ek(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return tk(j).some((Z)=>Z==="."||Z===_)})}async function QN(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function _M(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function v8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function BN(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function u8(_){if(!BN(_))return!1;return v8(_?.runtimeNavigator)}function b8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return v8(_?.runtimeNavigator)}function f5(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function $M(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",q=_?.allowLiveTransfer!==!1,K=_?.instance||null,L=typeof K?.exportHostTransferState==="function"?K.exportHostTransferState():null,Q=$===Y,V=L&&!Q?f8({path:$,payload:L},j,G):null,N=null;if($!==Y){let B=L&&typeof L==="object"?typeof L.mtime==="string"?L.mtime:L.mtime===null?null:void 0:void 0,U=typeof K?.isDirty==="function"?K.isDirty():!1,D=typeof K?.getContent==="function"?K.getContent():void 0;N=j2({path:$,content:U?D:void 0,mtime:B,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...N?.editor_popout?{editorPopoutToken:N.editor_popout}:{},...V?.pane_transfer?{paneTransferToken:V.pane_transfer}:{},...Q&&L?{paneTransferPayload:L}:{},...q?{}:{allowLiveTransfer:!1}}}function jM(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",q=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,K=X?H3(X,j,G):null,L=q?{panePath:$,path:$,payload:q,capturedAt:G}:Y?Uj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:K?.path===$?K:null,hostTransfer:L?.path===$?L:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function NN(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:q,previewTabs:K,diffTabs:L,tabPaneOverrides:Q,terminalTabPath:V,vncTabPrefix:N,openEditor:B,closeEditor:U,getWorkspaceFile:D}=_,E=g(null),H=g(null),w=g(null),W=g(null),z=g((()=>{if(!$)return null;let s=e4("editor_popout");return H3(s)})()),T=g((()=>{if(!$)return null;return iQ()})()),I=g(LN({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),J=g(I.current.paneWindowId||S4("pane-window")),k=g(new Map),A=g(new Map),O=g(new Map),M=g(new Map),x=g(!1),f=g(new Map),S=g(S4("pane-instance")),v=g(new Map),l=g(new Map),h=g(new Set),[r,b]=C(()=>new Map),e=g(r);e.current=r;let[z0,K0]=C(()=>new Map),L0=g(z0);L0.current=z0;let[X0,B0]=C(null),_0=g(X0);_0.current=X0;let[G0,N0]=C(null),W0=g(G0);W0.current=G0;let d=q_.getDockPanes().length>0,[j0,A0]=C(!1),P0=P(()=>A0((s)=>!s),[]),b0=P(()=>{B(V,{label:"Terminal"})},[B,V]),c0=P(()=>{B(N,{label:"VNC"})},[B,N]),X_=P((s)=>{let o=typeof s==="string"?s.trim():"";if(!o)return S4("pane-instance");if(o===V&&!$_.get(o)){if(!S.current)S.current=S4("pane-instance");return S.current}let Y0=f.current.get(o);if(Y0)return Y0;let q0=S4("pane-instance");return f.current.set(o,q0),q0},[V]),l0=Z0(()=>!$&&q?z0.get(q)||null:null,[z0,$,q]),__=!$?G0:null,f0=P((s)=>{if(!s)return;oQ(s),l.current.delete(s),h.current.delete(s),B0((o)=>o?.panePath===s?null:o),b((o)=>{if(!o.has(s))return o;let t=new Map(o);return t.delete(s),t})},[]),p0=P((s)=>{if(!s)return;v.current.delete(s),l.current.delete(s),h.current.delete(s),f0(s),N0((o)=>o?.panePath===s?null:o),K0((o)=>{if(!o.has(s))return o;let t=new Map(o);return t.delete(s),t})},[f0]),R0=P((s,o={})=>{let t=typeof s==="string"?s.trim():"";if(!t)return!1;if(b8({panePath:t,terminalTabPath:V}))return!1;let Y0=v.current.get(t),q0=Boolean(L0.current.get(t)),k0=Boolean(W0.current?.panePath===t);if(p0(t),t===V&&k0&&!q0)A0(!0);else if(t===V&&q0)B(t,{label:"Terminal"});else if($_.get(t))$_.activate(t);else B(t);if(o.closeDetachedWindow!==!1&&Y0&&typeof Y0.close==="function")g8(Y0);return!0},[p0,B,A0,V]),d0=P(()=>{if($)return;if(!_M())return;let s=Date.now();for(let[o,t]of l.current.entries()){if(t>s)continue;l.current.delete(o),R0(o,{closeDetachedWindow:!1})}},[$,R0]),n0=P((s,o={})=>{let t=typeof s==="string"?s.trim():"";if(!t)return!1;let Y0={panePath:t,terminalTabPath:V,allowLiveTransfer:o.allowLiveTransfer,reason:o.reason};if(u8(Y0))return v.current.delete(t),l.current.delete(t),h.current.add(t),!0;if(!BN(Y0))return R0(t,{closeDetachedWindow:!1});return l.current.set(t,Date.now()+ak),d0(),!0},[d0,R0,V]),U_=P((s)=>{let o=typeof s==="string"?s.trim():"";if(!o)return null;let t=X_(o),Y0=S4("pane-window");return{paneInstanceId:t,paneWindowId:Y0,params:qN({paneInstanceId:t,paneWindowId:Y0,paneSourceWindowId:J.current})}},[X_]),o0=P((s,o,t,Y0)=>{let q0=typeof s==="string"?s.trim():"";if(!q0||!Y0)return;let k0=KN({panePath:q0,paneInstanceId:Y0.pane_instance_id,ownerWindowId:Y0.pane_window_id,sourceWindowId:Y0.pane_source_window_id,label:o});if(!k0)return;if(v.current.set(q0,t||null),q0===V&&!$_.get(q0)){B0(k0);return}b((u0)=>{let U0=new Map(u0);return U0.set(q0,k0),U0})},[V]),h0=P((s,o)=>{let t=typeof s?.panePath==="string"?s.panePath.trim():"";if(!t)return!1;let Y0=v.current.get(t);if(Y0&&o&&Y0!==o)return!1;let q0=e.current.get(t)||null;if(Oj(q0,s)){let y0=H.current,j_=f5({panePath:t,terminalTabPath:V});if(j_&&y0&&typeof y0.moveHost==="function")P5({panePath:t,paneInstanceId:q0.paneInstanceId,paneWindowId:q0.ownerWindowId,instance:y0,releaseSourceHost:()=>{if(H.current===y0)H.current=null}});if(j_&&H.current)H.current=null;let g0=Jj(q0);if(!g0)return!1;return b((G_)=>{if(!G_.has(t))return G_;let L_=new Map(G_);return L_.delete(t),L_}),K0((G_)=>{let L_=new Map(G_);return L_.set(t,g0),L_}),VN({panePath:t,terminalTabPath:V,closeTab:(G_)=>$_.close(G_),sourceHost:"tab"}),!0}if(t!==V)return!1;let k0=_0.current,t0=W.current,u0=f5({panePath:t,terminalTabPath:V});if(u0&&k0&&t0&&typeof t0.moveHost==="function")P5({panePath:t,paneInstanceId:k0.paneInstanceId,paneWindowId:k0.ownerWindowId,instance:t0,releaseSourceHost:()=>{if(W.current===t0)W.current=null}});if(u0&&W.current)W.current=null;if(!Oj(k0,s))return!1;let U0=Jj(k0);if(!U0)return!1;return B0(null),N0(U0),VN({panePath:t,terminalTabPath:V,setDockVisible:A0,sourceHost:"dock"}),!0},[A0,V]),M0=P((s=!1,o=!0)=>{if(!$)return!1;let t=I.current;if(!g4(t))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(x.current){if(s)g8(window);return!0}let Y0=t.panePath||j,q0=Y0===V?W.current||H.current:H.current,k0=o&&f5({panePath:Y0,terminalTabPath:V}),t0=$M({panePath:Y0,paneInstanceId:t.paneInstanceId,paneOverrideId:Y0===V?null:typeof Q?.get==="function"?Q.get(Y0)||null:null,terminalTabPath:V,viewState:Y0===V?null:$_.getViewState(Y0)||null,allowLiveTransfer:k0,instance:q0});if(!t0)return!1;if(k0&&t0.paneTransferToken&&typeof q0?.moveHost==="function"){if(W.current===q0)W.current=null;if(H.current===q0)H.current=null}if(!Aj(window.opener,t0,window.location.origin))return!1;if(x.current=!0,s)g8(window);return!0},[$,j,Q,V]),V_=P(()=>M0(!0,!0),[M0]);u(()=>{if(!$||typeof window>"u")return;let s=()=>{let o=I.current,t=g4(o)?o.panePath||j||"":"";if(u8({panePath:t,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"}))return;M0(!1,!1)};return window.addEventListener("pagehide",s),window.addEventListener("beforeunload",s),()=>{window.removeEventListener("pagehide",s),window.removeEventListener("beforeunload",s)}},[$,M0]);let s0=Z0(()=>wK(Y,q),[q,Y]),O_=Z0(()=>yK(Q,q),[Q,q]),E0=Z0(()=>a9(G,s0,j),[s0,G,j]),S0=Z0(()=>q&&L.has(q)?"saved":null,[L,q]),I0=g(S0);u(()=>{I0.current=S0},[S0]);let a0=Z0(()=>xK(Y,K,L,q),[L,K,q,Y]),A_=Z0(()=>IK(j,N),[j,N]),Q_=Z0(()=>CK(j,V,a0,A_),[A_,a0,j,V]),D_=PK($,Z,X,d,j0),[E_,M_]=C(!1),$0=g(!1),O0=P(()=>{if(!X||Z)return;if($0.current=j0,j0)A0(!1);M_(!0)},[Z,j0,X]),D0=P(()=>{if(!E_)return;if(M_(!1),$0.current)A0(!0),$0.current=!1},[E_]),v0=P(()=>{if(E_){D0();return}O0()},[O0,D0,E_]);u(()=>{if(E_&&!X)D0()},[X,D0,E_]),u(()=>{let s=new Set(Y.map((Y0)=>Y0.id)),o=new Set(e.current.keys()),t=new Set(L0.current.keys());for(let Y0 of Array.from(f.current.keys()))if(!sk({panePath:Y0,openTabIds:s,pendingDetachedTabPaths:o,detachedTabPaths:t,terminalTabPath:V,hasPendingDetachedDockPane:Boolean(_0.current),hasDetachedDockPane:Boolean(W0.current)}))f.current.delete(Y0)},[Y,V]),u(()=>{if($||typeof window>"u")return;let s=(o)=>{if(o.origin!==window.location.origin)return;let t=o.data;if(!t||typeof t!=="object")return;if(t.type==="piclaw-pane-detach-claim"){h0({panePath:t.panePath,paneInstanceId:t.paneInstanceId,paneWindowId:t.paneWindowId},o.source);return}if(t.type!=="piclaw-pane-reattach-request")return;let Y0=jM({payload:t}),q0=Y0?.panePath||"";if(!q0)return;if(Y0?.editorTransfer)k.current.set(q0,Y0.editorTransfer);if(Y0?.hostTransfer)if(A.current.set(q0,Y0.hostTransfer),Y0.allowLiveTransfer&&o.source)O.current.set(q0,o.source);else O.current.delete(q0);let k0=L0.current.get(q0)||null,t0=q0===V?W0.current:null,u0=f5({panePath:q0,terminalTabPath:V}),U0=k0||t0;if(!U0)return;if(Y0?.paneInstanceId&&Y0.paneInstanceId!==U0.paneInstanceId)return;if(b8({panePath:q0,terminalTabPath:V})){O.current.delete(q0),M.current.delete(q0),A.current.delete(q0),k.current.delete(q0);return}if(Y0?.hostTransfer&&Y0.allowLiveTransfer&&u0)M.current.set(q0,{panePath:q0,paneInstanceId:U0.paneInstanceId,paneWindowId:U0.ownerWindowId});else M.current.delete(q0);if(u8({panePath:q0,terminalTabPath:V,allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})){O.current.delete(q0),v.current.delete(q0),l.current.delete(q0),h.current.add(q0);return}n0(q0,{allowLiveTransfer:Y0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",s),()=>window.removeEventListener("message",s)},[h0,$,n0,V]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let s=()=>d0();window.addEventListener("focus",s),window.addEventListener("pageshow",s),document.addEventListener("visibilitychange",s);let o=setInterval(()=>{d0();for(let[t,Y0]of v.current.entries()){if(!Y0||!Y0.closed)continue;if(t===V?Boolean(_0.current):e.current.has(t)){v.current.delete(t),f0(t);continue}if(b8({panePath:t,terminalTabPath:V})){p0(t);continue}if(u8({panePath:t,terminalTabPath:V,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(t),l.current.delete(t),h.current.add(t);continue}if(h.current.has(t)){v.current.delete(t);continue}n0(t,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",s),window.removeEventListener("pageshow",s),document.removeEventListener("visibilitychange",s),clearInterval(o)}},[p0,f0,d0,$,n0,V]),u(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let o=z.current?.path===j?z.current:null,t=T.current?.path===j?T.current:null;B(j,{...G?{label:G}:{},...o?.paneOverrideId?{paneOverrideId:o.paneOverrideId}:{},...o?.viewState?{viewState:o.viewState}:{},...t?.payload?.diffMode?{diffMode:t.payload.diffMode}:{}})},[B,G,$,j]),u(()=>{if(!$)return;let s=I.current;if(!g4(s))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Aj(window.opener,{type:"piclaw-pane-detach-claim",panePath:s.panePath,paneInstanceId:s.paneInstanceId,paneWindowId:s.paneWindowId},window.location.origin)},[$]),u(()=>{let s=E.current;if(!s)return;if(H.current)H.current.dispose(),H.current=null;let o=q;if(!o)return;if(!$&&l0?.panePath===o){s.innerHTML="";return}let t=z.current?.path===o?z.current:null,Y0=k.current.get(o)||null,q0=t||Y0,k0=T.current?.path===o?T.current:null,t0=A.current.get(o)||null,u0=k0||t0,U0=O_||q0?.paneOverrideId||null,y0=u0?.payload?{...u0.payload}:null;if(I0.current)y0={...y0||{},diffMode:I0.current};else if(y0&&"diffMode"in y0)delete y0.diffMode;let j_={path:o,mode:"edit",...q0?.content!==void 0?{content:q0.content}:{},...q0?.mtime!==void 0?{mtime:q0.mtime}:{},...y0?{transferState:y0}:{}},g0=(U0?q_.get(U0):null)||q_.resolve(j_)||q_.get("editor");if(!g0){s.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let G_=null,L_=!1,W_=(i0)=>{G_=i0,H.current=i0,i0.onDirtyChange?.((i)=>{$_.setDirty(o,i)}),i0.onSaveRequest?.(()=>{}),i0.onClose?.(()=>{U()});let n_=$_.getViewState(o);if(n_&&typeof i0.restoreViewState==="function")requestAnimationFrame(()=>i0.restoreViewState(n_));if(typeof i0.onViewStateChange==="function")i0.onViewStateChange((i)=>{$_.saveViewState(o,i)});let y_=I.current;if($&&g4(y_)&&typeof i0?.moveHost==="function"&&f5({panePath:o,terminalTabPath:V}))P5({panePath:o,paneInstanceId:y_.paneInstanceId||"",paneWindowId:y_.paneWindowId||"",instance:i0,releaseSourceHost:()=>{if(W.current===i0)W.current=null;if(H.current===i0)H.current=null}});QN(i0,{path:o,hostMode:$?"popout":"main",transferState:y0}).catch((i)=>{console.warn("[pane-attach] afterAttachToHost failed:",i)}),requestAnimationFrame(()=>i0.focus?.())};return(async()=>{let i0=I.current,n_=$&&g4(i0)&&i0.panePath===o?{panePath:o,paneInstanceId:i0.paneInstanceId||"",paneWindowId:i0.paneWindowId||""}:null,y_=M.current.get(o)||null,i=f5({panePath:o,terminalTabPath:V})?n_||y_:null,J0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:O.current.get(o)||null,Y_=$?"popout":"main";if(u0&&i&&J0)try{let B_=await sQ(J0,i,s,{path:o,hostMode:Y_,transferState:y0});if(!L_&&B_){if(W_(B_),t)z.current=null;if(Y0)k.current.delete(o);if(k0)T.current=null;if(t0)A.current.delete(o);O.current.delete(o),M.current.delete(o);return}}catch(B_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",B_)}if(L_)return;if(W_(g0.mount(s,j_)),t)z.current=null;if(Y0)k.current.delete(o);if(k0)T.current=null;if(t0)A.current.delete(o);O.current.delete(o),M.current.delete(o)})(),()=>{if(L_=!0,H.current===G_)G_.dispose(),H.current=null}},[l0,O_,U,$,q]),u(()=>{let s=q,o=H.current;if(!s||typeof o?.setDiffMode!=="function")return;o.setDiffMode(S0)},[S0,q]);let m0=P(async(s)=>{let o=typeof q==="string"?q.trim():"",t=H.current;if(!o||!t?.setContent)return;if(typeof t.isDirty==="function"&&t.isDirty())return;if(!ek(o,s))return;try{let Y0=await D(o,1e6,"edit"),q0=typeof Y0?.text==="string"?Y0.text:"",k0=typeof Y0?.mtime==="string"&&Y0.mtime.trim()?Y0.mtime.trim():new Date().toISOString();t.setContent(q0,k0)}catch(Y0){console.warn("[workspace_update] Failed to refresh active pane:",Y0)}},[D,q]);return u(()=>{let s=w.current;if(W.current)W.current.dispose(),W.current=null;if(!s||!d||!j0)return;if(!$&&__?.panePath===V){s.innerHTML="";return}let o=q_.getDockPanes()[0];if(!o){s.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let t=T.current?.path===V?T.current:null,Y0=A.current.get(V)||null,q0=t||Y0,k0=o.mount(s,{mode:"view",...q0?.payload?{transferState:q0.payload}:{}});if(W.current=k0,QN(k0,{path:V,hostMode:$?"popout":"main",transferState:q0?.payload||null}).catch((t0)=>{console.warn("[pane-attach] afterAttachToHost failed:",t0)}),t)T.current=null;if(Y0)A.current.delete(V);return requestAnimationFrame(()=>k0.focus?.()),()=>{if(W.current===k0)k0.dispose(),W.current=null}},[__,j0,d,$,V]),{editorContainerRef:E,editorInstanceRef:H,dockContainerRef:w,dockInstanceRef:W,hasDockPanes:d,dockVisible:j0,setDockVisible:A0,toggleDock:P0,openTerminalTab:b0,openVncTab:c0,panePopoutTitle:E0,panePopoutHasMenuActions:a0,hidePanePopoutControls:Q_,showEditorPaneContainer:D_,zenMode:E_,exitZenMode:D0,toggleZenMode:v0,refreshActiveEditorFromWorkspace:m0,detachedTabs:z0,activeDetachedTab:l0,detachedDockPane:__,buildPaneDetachTransfer:U_,registerDetachedPaneWindow:o0,reattachPane:R0,requestPanePopoutReattach:V_,canReattachPanePopout:$&&g4(I.current)&&!b8({panePath:j||"",terminalTabPath:V})}}function GM(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function FN(_){let $=g(null),j=YN({onTabClosed:(Z)=>$.current?.(Z)}),G=NN({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return GM({removeFileRefRef:$,editorState:j,paneRuntime:G})}S_();var c8=1280,l8=820;function m8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function S6(_){return typeof _==="string"&&_.trim()?_.trim():null}function ZM(_){let $=S6(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function XM(_){if(_.isMobile)return!1;let $=m8(_.windowWidth),j=m8(_.windowHeight);if($===null||j===null)return!1;if($<c8||j<l8)return!1;let G=m8(_.screenWidth),Z=m8(_.screenHeight);if(G!==null&&G<c8)return!1;if(Z!==null&&Z<l8)return!1;return!0}function YM(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function qM(_){if(!_||_.kind!=="custom")return null;let $=S6(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=S6(j.path);if(!ZM(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:S6(_.chat_jid),path:G,label:S6(j.label),target:Z}}async function LM(_,$,j){await N5(_,$,j||void 0)}async function UN(_,$){let j=qM(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||LM,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:c8,height:l8};if(j.target==="popout"){if(!XM({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:YM(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${c8}×${l8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let K=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:K,opened:K,reason:K?void 0:"popout_failed",detail:K?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var kj="piclaw:oobe:provider-missing:dismissed";function KM(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function VM(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function HN(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=KM(G),Y=X>0,q=VM(G),K=Y||q;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};if(K)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:q}}var QM=OK();await gK();var{searchPosts:BM,deletePost:NM,getAgents:FM,getAgentThought:EN,setAgentThoughtVisibility:DN,getAgentStatus:UM,getAgentContext:HM,getAutoresearchStatus:EM,stopAutoresearch:DM,dismissAutoresearch:WM,getAgentModels:zM,getActiveChatAgents:OM,getChatBranches:JM,renameChatBranch:AM,pruneChatBranch:kM,purgeChatBranch:MM,restoreChatBranch:wM,getAgentQueueState:yM,steerAgentQueueItem:TM,removeAgentQueueItem:xM,streamSidePrompt:IM,getWorkspaceFile:CM,getThread:PM,getTimeline:fM,sendAgentMessage:RM,forkChatBranch:SM,createRootChatSession:gM}=uK;function uM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:q,branchLoaderSourceChatJid:K}=Z0(()=>MK(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let L=ZN({currentChatJid:j,branchLoaderMode:q}),[Q,V]=C(()=>F$(kj,!1)),[N,B]=C(null),U=P((f0)=>{let p0=typeof f0==="string"?f0:"";if(!p0.trim())return;B({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:p0})},[]),{agentStatus:D,setAgentStatus:E,agentDraft:H,setAgentDraft:w,agentPlan:W,setAgentPlan:z,agentThought:T,setAgentThought:I,pendingRequest:J,setPendingRequest:k,currentTurnId:A,setCurrentTurnId:O,steerQueuedTurnId:M,setSteerQueuedTurnId:x,lastAgentEventRef:f,lastSilenceNoticeRef:S,isAgentRunningRef:v,draftBufferRef:l,thoughtBufferRef:h,previewResyncPendingRef:r,previewResyncGenerationRef:b,pendingRequestRef:e,stalledPostIdRef:z0,currentTurnIdRef:K0,steerQueuedTurnIdRef:L0,thoughtExpandedRef:X0,draftExpandedRef:B0}=OX(),_0=FN({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:$5,vncTabPrefix:i1,getWorkspaceFile:CM}),G0=SV({timelineRef:L.timelineRef,viewStateRef:L.viewStateRef,followupQueueRowIdsRef:L.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,followupQueueItems:L.followupQueueItems,onIdentity:P((f0)=>{if(!f0)return;let{assistant_name:p0,assistant_avatar_url:R0}=f0;if(p0||R0)L.setAgents((h0)=>{let M0=h0.default||{id:"default"},V_=p0&&!M0.name,s0=R0&&!M0.avatar_url;if(!V_&&!s0)return h0;return{...h0,["default"]:{...M0,...V_?{name:p0}:{},...s0?{avatar_url:R0}:{}}}});let{user_name:d0,user_avatar_url:n0,user_avatar_background:U_}=f0;if(d0||n0||U_)L.setUserProfile((o0)=>{let h0=d0&&!o0.name,M0=n0&&!o0.avatar_url,V_=U_&&!o0.avatar_background;if(!h0&&!M0&&!V_)return o0;return{...o0,...h0?{name:d0}:{},...M0?{avatar_url:n0}:{},...V_?{avatar_background:U_}:{}}})},[L.setAgents,L.setUserProfile])}),N0=OV({environment:{isRenameBranchFormOpen:L.isRenameBranchFormOpen,renameBranchNameInputRef:L.renameBranchNameInputRef,appShellRef:L.appShellRef,setIsWebAppMode:L.setIsWebAppMode,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,btwSession:L.btwSession,agents:L.agents,agentsRef:L.agentsRef,currentChatJid:j,activeChatJidRef:L.activeChatJidRef,userProfile:L.userProfile,userProfileRef:L.userProfileRef,brandingRef:L.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:L.setIntentToast,intentToastTimerRef:L.intentToastTimerRef,editorOpen:_0.editorState.editorOpen,openEditor:_0.editorState.openEditor,resolvePane:(f0)=>q_.resolve(f0),tabStripActiveId:_0.editorState.tabStripActiveId,setFileRefs:L.setFileRefs,setFolderRefs:L.setFolderRefs,setMessageRefs:L.setMessageRefs,currentChatJid:j,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen,setCurrentHashtag:L.setCurrentHashtag,setSearchQuery:L.setSearchQuery,setSearchOpen:L.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:PM,setPosts:G0.setPosts},agentActivity:{lastActivityTtlMs:fX,lastActivityTimerRef:L.lastActivityTimerRef,lastActivityTokenRef:L.lastActivityTokenRef,lastAgentEventRef:f,lastSilenceNoticeRef:S,isAgentRunningRef:v,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:K0,steerQueuedTurnIdRef:L0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,thoughtExpandedRef:X0,draftExpandedRef:B0,setCurrentTurnId:O,setSteerQueuedTurnId:x,currentTurnIdRefForPanel:K0,setAgentThoughtVisibility:DN,getAgentThought:EN,setAgentThought:I,setAgentDraft:w},chatPaneRuntime:{isAgentTurnActive:L.isAgentTurnActive,steerQueuedTurnId:M,currentTurnId:A,steerQueuedTurnIdRef:L0,setSteerQueuedTurnId:x,agentStatus:D,agentDraft:H,agentPlan:W,agentThought:T,pendingRequest:J,pendingRequestRef:e,followupQueueItems:L.followupQueueItems,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,contextUsage:L.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:L.wasAgentActiveRef,draftBufferRef:l,thoughtBufferRef:h,lastAgentEventRef:f,lastSilenceNoticeRef:S,lastAgentResponseRef:L.lastAgentResponseRef,currentTurnIdRef:K0,thoughtExpandedRef:X0,draftExpandedRef:B0,agentStatusRef:L.agentStatusRef,silentRecoveryRef:L.silentRecoveryRef,setIsAgentTurnActive:L.setIsAgentTurnActive,setAgentStatus:E,setAgentDraft:w,setAgentPlan:z,setAgentThought:I,setPendingRequest:k,setCurrentTurnId:O,setFollowupQueueItems:L.setFollowupQueueItems,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setContextUsage:L.setContextUsage,lastNotifiedIdRef:L.lastNotifiedIdRef,agentsRef:L.agentsRef,notify:L.notify,shouldNotifyLocallyForChat:L.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:S,lastAgentEventRef:f,currentTurnIdRef:K0,thoughtExpandedRef:X0,draftExpandedRef:B0,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:e,lastAgentResponseRef:L.lastAgentResponseRef,agentStatusRef:L.agentStatusRef,stalledPostIdRef:z0,scrollToBottomRef:G0.scrollToBottomRef,setCurrentTurnId:O,setAgentDraft:w,setAgentPlan:z,setAgentThought:I,setPendingRequest:k,setAgentStatus:E,setPosts:G0.setPosts,dedupePosts:F5},viewState:{viewStateRef:L.viewStateRef,currentHashtag:L.currentHashtag,searchQuery:L.searchQuery,searchOpen:L.searchOpen},removeFileRefRef:_0.removeFileRefRef}),W0=xX({appShellRef:L.appShellRef,sidebarWidthRef:L.sidebarWidthRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef}),{chatRefreshLifecycle:d,timelineViewActions:j0,isComposeBoxAgentActive:A0,followupActions:P0,sidepanelActions:b0,branchPaneActions:c0}=dB({routeState:{currentChatJid:j,currentRootChatJid:L.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:q,branchLoaderSourceChatJid:K,isWebAppMode:L.isWebAppMode},searchState:{currentHashtag:L.currentHashtag,setCurrentHashtag:L.setCurrentHashtag,searchQuery:L.searchQuery,setSearchQuery:L.setSearchQuery,searchOpen:L.searchOpen,setSearchOpen:L.setSearchOpen,searchScope:L.searchScope,setSearchScope:L.setSearchScope},shellState:{activeChatAgents:L.activeChatAgents,currentChatBranches:L.currentChatBranches,currentBranchRecord:L.currentBranchRecord,contextUsage:L.contextUsage,activeModel:L.activeModel,activeThinkingLevel:L.activeThinkingLevel,supportsThinking:L.supportsThinking,activeModelUsage:L.activeModelUsage,connectionStatus:L.connectionStatus,notificationsEnabled:L.notificationsEnabled,notificationPermission:L.notificationPermission,workspaceOpen:L.workspaceOpen,setWorkspaceOpen:L.setWorkspaceOpen,userProfile:L.userProfile,agents:L.agents,removingPostIds:L.removingPostIds,btwSession:L.btwSession},timeline:G0,interaction:N0,paneRuntime:_0.paneRuntime,refs:{activeChatJidRef:L.activeChatJidRef,queueRefreshGenRef:L.queueRefreshGenRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,wasAgentActiveRef:L.wasAgentActiveRef,viewStateRef:L.viewStateRef,agentStatusRef:L.agentStatusRef,pendingRequestRef:e,thoughtBufferRef:h,draftBufferRef:l,previewResyncPendingRef:r,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:K0,silentRecoveryRef:L.silentRecoveryRef,lastAgentEventRef:f,lastSilenceNoticeRef:S,staleUiVersionRef:L.staleUiVersionRef,staleUiReloadScheduledRef:L.staleUiReloadScheduledRef,hasConnectedOnceRef:L.hasConnectedOnceRef,sidebarWidthRef:L.sidebarWidthRef,appShellRef:L.appShellRef,agentsRef:L.agentsRef,paneStateOwnerChatJidRef:L.paneStateOwnerChatJidRef,chatPaneStateByChatRef:L.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,draftThrottleRef:L.draftThrottleRef,thoughtThrottleRef:L.thoughtThrottleRef,followupQueueItemsRef:L.followupQueueItemsRef,lastAgentResponseRef:L.lastAgentResponseRef,thoughtExpandedRef:X0,draftExpandedRef:B0,steerQueuedTurnIdRef:L0,btwAbortRef:L.btwAbortRef,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef},setters:{setFollowupQueueItems:L.setFollowupQueueItems,setContextUsage:L.setContextUsage,setExtensionStatusPanels:L.setExtensionStatusPanels,setPendingExtensionPanelActions:L.setPendingExtensionPanelActions,setExtensionWorkingState:L.setExtensionWorkingState,setAgentStatus:E,setAgentDraft:w,setAgentPlan:z,setAgentThought:I,setPendingRequest:k,setConnectionStatus:L.setConnectionStatus,setStateAccessFailed:L.setStateAccessFailed,setAgents:L.setAgents,setUserProfile:L.setUserProfile,setActiveChatAgents:L.setActiveChatAgents,setCurrentChatBranches:L.setCurrentChatBranches,setActiveModel:L.setActiveModel,setActiveThinkingLevel:L.setActiveThinkingLevel,setSupportsThinking:L.setSupportsThinking,setActiveModelUsage:L.setActiveModelUsage,setAgentModelsPayload:L.setAgentModelsPayload,setHasLoadedAgentModels:L.setHasLoadedAgentModels,setHasMore:G0.setHasMore,setFloatingWidget:L.setFloatingWidget,setSteerQueuedTurnId:x,setRemovingPostIds:L.setRemovingPostIds,setBtwSession:L.setBtwSession,setWorkspaceOpen:L.setWorkspaceOpen,setRenameBranchNameDraft:L.setRenameBranchNameDraft,setIsRenameBranchFormOpen:L.setIsRenameBranchFormOpen,setIsRenamingBranch:L.setIsRenamingBranch},services:{searchPosts:BM,deletePost:NM,getAgentQueueState:yM,getAgentContext:HM,getAutoresearchStatus:EM,getAgentStatus:UM,getAgents:FM,getAgentModels:zM,getActiveChatAgents:OM,getChatBranches:JM,getTimeline:fM,stopAutoresearch:DM,dismissAutoresearch:WM,streamSidePrompt:IM,sendAgentMessage:RM,renameChatBranch:AM,pruneChatBranch:kM,purgeChatBranch:MM,restoreChatBranch:wM,forkChatBranch:SM,createRootChatSession:gM,steerAgentQueueItem:TM,removeAgentQueueItem:xM,getAgentThought:EN,setAgentThoughtVisibility:DN,silenceRefreshMs:PX,silenceWarningMs:IX,silenceFinalizeMs:CX,isCompactionStatus:W$,currentAppAssetVersion:QM,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:D,isAgentTurnActive:L.isAgentTurnActive,openEditor:_0.editorState.openEditor,activateTab:_0.editorState.handleTabActivate,tabStripActiveId:_0.editorState.tabStripActiveId,terminalTabPath:$5,resolveTab:(f0)=>$_.get(f0),closeTab:_0.editorState.handleTabClose,editorOpen:_0.editorState.editorOpen},helpers:{getFormLock:JK,readStoredNumber:D4}});u(()=>{return nB({timelineRef:L.timelineRef,activeChatAgents:L.activeChatAgents,currentChatJid:j,onSwitch:(f0)=>c0.handleBranchPickerChange(f0),isIOSDevice:F6,isLikelySafari:v8})},[L.timelineRef,L.activeChatAgents,j,c0.handleBranchPickerChange]);let X_=Z0(()=>HN({panePopoutMode:Z,modelsLoaded:L.hasLoadedAgentModels,modelPayload:L.agentModelsPayload,providerMissingDismissed:Q}),[Z,L.hasLoadedAgentModels,L.agentModelsPayload,Q]),l0=P(()=>{oY()},[]),__=P(()=>{V(!0),K_(kj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=TK(Y,_0.paneRuntime.activePaneTab,X)},[_0.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let f0=(p0)=>{UN(p0,{currentChatJid:j,openEditor:_0.editorState.openEditor,popOutPane:c0.handlePopOutPane,showIntentToast:N0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",f0),()=>{window.removeEventListener("piclaw-extension-ui:request",f0)}},[c0.handlePopOutPane,j,N0.composeReferenceActions.showIntentToast,_0.editorState.openEditor]),DK(vK({routeState:{branchLoaderMode:q,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:_0.paneRuntime,splitters:W0,orchestration:{branchPaneActions:c0,timelineViewActions:j0,sidepanelActions:b0,followupActions:P0,chatRefreshLifecycle:d,isComposeBoxAgentActive:A0},interaction:N0,timeline:G0,surface:{...L,oobePanelState:X_,composePrefillRequest:N,requestComposePrefill:U,handleOobeSetupProvider:l0,handleOobeShowModelPicker:l0,handleOobeOpenWorkspace:l0,handleDismissProviderMissingOobe:__},editorState:_0.editorState,agentState:{agentStatus:D,agentDraft:H,agentPlan:W,agentThought:T,pendingRequest:J,currentTurnId:A,steerQueuedTurnId:M,setPendingRequest:k,pendingRequestRef:e,isCompactionStatus:W$},helpers:{formatBranchPickerLabel:s2,isIOSDevice:F6,terminalTabPath:$5}}))}function bM(){let{locationParams:_,navigate:$}=aY();return F`<${uM} locationParams=${_} navigate=${$} />`}var h8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(h8){if(Q$(null,h8),h8.replaceChildren(),Q$(F`<${bM} />`,h8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=0E0F90A0E14E7C4564756E2164756E21
//# sourceMappingURL=app.bundle.js.map
