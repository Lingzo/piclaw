var VF=Object.defineProperty;var qF=(_)=>_;function QF(_,$){this[_]=qF.bind(null,$)}var j1=(_,$)=>{for(var j in $)VF(_,j,{get:$[j],enumerable:!0,configurable:!0,set:QF.bind($,j)})};var J_=(_,$)=>()=>(_&&($=_(_=0)),$);var DG={};j1(DG,{useState:()=>C,useRef:()=>g,useReducer:()=>UG,useMemo:()=>Z0,useLayoutEffect:()=>j6,useImperativeHandle:()=>WF,useErrorBoundary:()=>AF,useEffect:()=>u,useDebugValue:()=>JF,useContext:()=>OF,useCallback:()=>P,render:()=>Q$,html:()=>F,h:()=>N3,createContext:()=>zF,Component:()=>r6});function q$(_,$){for(var j in $)_[j]=$[j];return _}function Q3(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function N3(_,$,j){var G,Z,X,Y={};for(X in $)X=="key"?G=$[X]:X=="ref"?Z=$[X]:Y[X]=$[X];if(arguments.length>2&&(Y.children=arguments.length>3?e5.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(X in _.defaultProps)Y[X]===void 0&&(Y[X]=_.defaultProps[X]);return i5(_,Y,G,Z,null)}function i5(_,$,j,G,Z){var X={type:_,props:$,key:j,ref:G,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++GG:Z,__i:-1,__u:0};return Z==null&&x_.vnode!=null&&x_.vnode(X),X}function $2(_){return _.children}function r6(_,$){this.props=_,this.context=$}function e4(_,$){if($==null)return _.__?e4(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?e4(_):null}function FF(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,G=[],Z=[],X=q$({},$);X.__v=$.__v+1,x_.vnode&&x_.vnode(X),B3(_.__P,X,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,G,j==null?e4($):j,!!(32&$.__u),Z),X.__v=$.__v,X.__.__k[X.__i]=X,QG(G,X,Z),$.__e=$.__=null,X.__e!=j&&KG(X)}}function KG(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),KG(_)}function L3(_){(!_.__d&&(_.__d=!0)&&b$.push(_)&&!t5.__r++||rj!=x_.debounceRendering)&&((rj=x_.debounceRendering)||ZG)(t5)}function t5(){try{for(var _,$=1;b$.length;)b$.length>$&&b$.sort(XG),_=b$.shift(),$=b$.length,FF(_)}finally{b$.length=t5.__r=0}}function VG(_,$,j,G,Z,X,Y,L,V,K,Q){var q,B,N,U,E,D,H,M=G&&G.__k||a5,J=$.length;for(V=UF(j,$,M,V,J),q=0;q<J;q++)(N=j.__k[q])!=null&&(B=N.__i!=-1&&M[N.__i]||s5,N.__i=q,D=B3(_,N,B,Z,X,Y,L,V,K,Q),U=N.__e,N.ref&&B.ref!=N.ref&&(B.ref&&F3(B.ref,null,N),Q.push(N.ref,N.__c||U,N)),E==null&&U!=null&&(E=U),(H=!!(4&N.__u))||B.__k===N.__k?(V=qG(N,V,_,H),H&&B.__e&&(B.__e=null)):typeof N.type=="function"&&D!==void 0?V=D:U&&(V=U.nextSibling),N.__u&=-7);return j.__e=E,V}function UF(_,$,j,G,Z){var X,Y,L,V,K,Q=j.length,q=Q,B=0;for(_.__k=Array(Z),X=0;X<Z;X++)(Y=$[X])!=null&&typeof Y!="boolean"&&typeof Y!="function"?(typeof Y=="string"||typeof Y=="number"||typeof Y=="bigint"||Y.constructor==String?Y=_.__k[X]=i5(null,Y,null,null,null):_2(Y)?Y=_.__k[X]=i5($2,{children:Y},null,null,null):Y.constructor===void 0&&Y.__b>0?Y=_.__k[X]=i5(Y.type,Y.props,Y.key,Y.ref?Y.ref:null,Y.__v):_.__k[X]=Y,V=X+B,Y.__=_,Y.__b=_.__b+1,L=null,(K=Y.__i=HF(Y,j,V,q))!=-1&&(q--,(L=j[K])&&(L.__u|=2)),L==null||L.__v==null?(K==-1&&(Z>Q?B--:Z<Q&&B++),typeof Y.type!="function"&&(Y.__u|=4)):K!=V&&(K==V-1?B--:K==V+1?B++:(K>V?B--:B++,Y.__u|=4))):_.__k[X]=null;if(q)for(X=0;X<Q;X++)(L=j[X])!=null&&(2&L.__u)==0&&(L.__e==G&&(G=e4(L)),BG(L,L));return G}function qG(_,$,j,G){var Z,X;if(typeof _.type=="function"){for(Z=_.__k,X=0;Z&&X<Z.length;X++)Z[X]&&(Z[X].__=_,$=qG(Z[X],$,j,G));return $}_.__e!=$&&(G&&($&&_.type&&!$.parentNode&&($=e4(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function HF(_,$,j,G){var Z,X,Y,L=_.key,V=_.type,K=$[j],Q=K!=null&&(2&K.__u)==0;if(K===null&&L==null||Q&&L==K.key&&V==K.type)return j;if(G>(Q?1:0)){for(Z=j-1,X=j+1;Z>=0||X<$.length;)if((K=$[Y=Z>=0?Z--:X++])!=null&&(2&K.__u)==0&&L==K.key&&V==K.type)return Y}return-1}function nj(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||BF.test($)?j:j+"px"}function n5(_,$,j,G,Z){var X,Y;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof G=="string"&&(_.style.cssText=G=""),G)for($ in G)j&&$ in j||nj(_.style,$,"");if(j)for($ in j)G&&j[$]==G[$]||nj(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")X=$!=($=$.replace(YG,"$1")),Y=$.toLowerCase(),$=Y in _||$=="onFocusOut"||$=="onFocusIn"?Y.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+X]=j,j?G?j[p6]=G[p6]:(j[p6]=q3,_.addEventListener($,X?Y3:X3,X)):_.removeEventListener($,X?Y3:X3,X);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(L){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function dj(_){return function($){if(this.l){var j=this.l[$.type+_];if($[d5]==null)$[d5]=q3++;else if($[d5]<j[p6])return;return j(x_.event?x_.event($):$)}}}function B3(_,$,j,G,Z,X,Y,L,V,K){var Q,q,B,N,U,E,D,H,M,J,W,T,x,A,k,O=$.type;if($.constructor!==void 0)return null;128&j.__u&&(V=!!(32&j.__u),X=[L=$.__e=j.__e]),(Q=x_.__b)&&Q($);_:if(typeof O=="function")try{if(H=$.props,M=O.prototype&&O.prototype.render,J=(Q=O.contextType)&&G[Q.__c],W=Q?J?J.props.value:Q.__:G,j.__c?D=(q=$.__c=j.__c).__=q.__E:(M?$.__c=q=new O(H,W):($.__c=q=new r6(H,W),q.constructor=O,q.render=DF),J&&J.sub(q),q.state||(q.state={}),q.__n=G,B=q.__d=!0,q.__h=[],q._sb=[]),M&&q.__s==null&&(q.__s=q.state),M&&O.getDerivedStateFromProps!=null&&(q.__s==q.state&&(q.__s=q$({},q.__s)),q$(q.__s,O.getDerivedStateFromProps(H,q.__s))),N=q.props,U=q.state,q.__v=$,B)M&&O.getDerivedStateFromProps==null&&q.componentWillMount!=null&&q.componentWillMount(),M&&q.componentDidMount!=null&&q.__h.push(q.componentDidMount);else{if(M&&O.getDerivedStateFromProps==null&&H!==N&&q.componentWillReceiveProps!=null&&q.componentWillReceiveProps(H,W),$.__v==j.__v||!q.__e&&q.shouldComponentUpdate!=null&&q.shouldComponentUpdate(H,q.__s,W)===!1){$.__v!=j.__v&&(q.props=H,q.state=q.__s,q.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),a5.push.apply(q.__h,q._sb),q._sb=[],q.__h.length&&Y.push(q);break _}q.componentWillUpdate!=null&&q.componentWillUpdate(H,q.__s,W),M&&q.componentDidUpdate!=null&&q.__h.push(function(){q.componentDidUpdate(N,U,E)})}if(q.context=W,q.props=H,q.__P=_,q.__e=!1,T=x_.__r,x=0,M)q.state=q.__s,q.__d=!1,T&&T($),Q=q.render(q.props,q.state,q.context),a5.push.apply(q.__h,q._sb),q._sb=[];else do q.__d=!1,T&&T($),Q=q.render(q.props,q.state,q.context),q.state=q.__s;while(q.__d&&++x<25);q.state=q.__s,q.getChildContext!=null&&(G=q$(q$({},G),q.getChildContext())),M&&!B&&q.getSnapshotBeforeUpdate!=null&&(E=q.getSnapshotBeforeUpdate(N,U)),A=Q!=null&&Q.type===$2&&Q.key==null?NG(Q.props.children):Q,L=VG(_,_2(A)?A:[A],$,j,G,Z,X,Y,L,V,K),q.base=$.__e,$.__u&=-161,q.__h.length&&Y.push(q),D&&(q.__E=q.__=null)}catch(z){if($.__v=null,V||X!=null)if(z.then){for($.__u|=V?160:128;L&&L.nodeType==8&&L.nextSibling;)L=L.nextSibling;X[X.indexOf(L)]=null,$.__e=L}else{for(k=X.length;k--;)Q3(X[k]);K3($)}else $.__e=j.__e,$.__k=j.__k,z.then||K3($);x_.__e(z,$,j)}else X==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):L=$.__e=EF(j.__e,$,j,G,Z,X,Y,V,K);return(Q=x_.diffed)&&Q($),128&$.__u?void 0:L}function K3(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(K3))}function QG(_,$,j){for(var G=0;G<j.length;G++)F3(j[G],j[++G],j[++G]);x_.__c&&x_.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(X){X.call(Z)})}catch(X){x_.__e(X,Z.__v)}})}function NG(_){return typeof _!="object"||_==null||_.__b>0?_:_2(_)?_.map(NG):q$({},_)}function EF(_,$,j,G,Z,X,Y,L,V){var K,Q,q,B,N,U,E,D=j.props||s5,H=$.props,M=$.type;if(M=="svg"?Z="http://www.w3.org/2000/svg":M=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),X!=null){for(K=0;K<X.length;K++)if((N=X[K])&&"setAttribute"in N==!!M&&(M?N.localName==M:N.nodeType==3)){_=N,X[K]=null;break}}if(_==null){if(M==null)return document.createTextNode(H);_=document.createElementNS(Z,M,H.is&&H),L&&(x_.__m&&x_.__m($,X),L=!1),X=null}if(M==null)D===H||L&&_.data==H||(_.data=H);else{if(X=X&&e5.call(_.childNodes),!L&&X!=null)for(D={},K=0;K<_.attributes.length;K++)D[(N=_.attributes[K]).name]=N.value;for(K in D)N=D[K],K=="dangerouslySetInnerHTML"?q=N:K=="children"||(K in H)||K=="value"&&("defaultValue"in H)||K=="checked"&&("defaultChecked"in H)||n5(_,K,null,N,Z);for(K in H)N=H[K],K=="children"?B=N:K=="dangerouslySetInnerHTML"?Q=N:K=="value"?U=N:K=="checked"?E=N:L&&typeof N!="function"||D[K]===N||n5(_,K,N,D[K],Z);if(Q)L||q&&(Q.__html==q.__html||Q.__html==_.innerHTML)||(_.innerHTML=Q.__html),$.__k=[];else if(q&&(_.innerHTML=""),VG($.type=="template"?_.content:_,_2(B)?B:[B],$,j,G,M=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,X,Y,X?X[0]:j.__k&&e4(j,0),L,V),X!=null)for(K=X.length;K--;)Q3(X[K]);L||(K="value",M=="progress"&&U==null?_.removeAttribute("value"):U!=null&&(U!==_[K]||M=="progress"&&!U||M=="option"&&U!=D[K])&&n5(_,K,U,D[K],Z),K="checked",E!=null&&E!=_[K]&&n5(_,K,E,D[K],Z))}return _}function F3(_,$,j){try{if(typeof _=="function"){var G=typeof _.__u=="function";G&&_.__u(),G&&$==null||(_.__u=_($))}else _.current=$}catch(Z){x_.__e(Z,j)}}function BG(_,$,j){var G,Z;if(x_.unmount&&x_.unmount(_),(G=_.ref)&&(G.current&&G.current!=_.__e||F3(G,null,$)),(G=_.__c)!=null){if(G.componentWillUnmount)try{G.componentWillUnmount()}catch(X){x_.__e(X,$)}G.base=G.__P=null}if(G=_.__k)for(Z=0;Z<G.length;Z++)G[Z]&&BG(G[Z],$,j||typeof _.type!="function");j||Q3(_.__e),_.__c=_.__=_.__e=void 0}function DF(_,$,j){return this.constructor(_,j)}function Q$(_,$,j){var G,Z,X,Y;$==document&&($=document.documentElement),x_.__&&x_.__(_,$),Z=(G=typeof j=="function")?null:j&&j.__k||$.__k,X=[],Y=[],B3($,_=(!G&&j||$).__k=N3($2,null,[_]),Z||s5,s5,$.namespaceURI,!G&&j?[j]:Z?null:$.firstChild?e5.call($.childNodes):null,X,!G&&j?j:Z?Z.__e:$.firstChild,G,Y),QG(X,_,Y)}function zF(_){function $(j){var G,Z;return this.getChildContext||(G=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){G=null},this.shouldComponentUpdate=function(X){this.props.value!=X.value&&G.forEach(function(Y){Y.__e=!0,L3(Y)})},this.sub=function(X){G.add(X);var Y=X.componentWillUnmount;X.componentWillUnmount=function(){G&&G.delete(X),Y&&Y.call(X)}}),j.children}return $.__c="__cC"+LG++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,G){return j.children(G)}).contextType=$,$}function $6(_,$){S_.__h&&S_.__h(T_,_,_6||$),_6=0;var j=T_.__H||(T_.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function C(_){return _6=1,UG(HG,_)}function UG(_,$,j){var G=$6(v$++,2);if(G.t=_,!G.__c&&(G.__=[j?j($):HG(void 0,$),function(L){var V=G.__N?G.__N[0]:G.__[0],K=G.t(V,L);V!==K&&(G.__N=[K,G.__[1]],G.__c.setState({}))}],G.__c=T_,!T_.__f)){var Z=function(L,V,K){if(!G.__c.__H)return!0;var Q=G.__c.__H.__.filter(function(B){return B.__c});if(Q.every(function(B){return!B.__N}))return!X||X.call(this,L,V,K);var q=G.__c.props!==L;return Q.some(function(B){if(B.__N){var N=B.__[0];B.__=B.__N,B.__N=void 0,N!==B.__[0]&&(q=!0)}}),X&&X.call(this,L,V,K)||q};T_.__f=!0;var{shouldComponentUpdate:X,componentWillUpdate:Y}=T_;T_.componentWillUpdate=function(L,V,K){if(this.__e){var Q=X;X=void 0,Z(L,V,K),X=Q}Y&&Y.call(this,L,V,K)},T_.shouldComponentUpdate=Z}return G.__N||G.__}function u(_,$){var j=$6(v$++,3);!S_.__s&&U3(j.__H,$)&&(j.__=_,j.u=$,T_.__H.__h.push(j))}function j6(_,$){var j=$6(v$++,4);!S_.__s&&U3(j.__H,$)&&(j.__=_,j.u=$,T_.__h.push(j))}function g(_){return _6=5,Z0(function(){return{current:_}},[])}function WF(_,$,j){_6=6,j6(function(){if(typeof _=="function"){var G=_($());return function(){_(null),G&&typeof G=="function"&&G()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function Z0(_,$){var j=$6(v$++,7);return U3(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function P(_,$){return _6=8,Z0(function(){return _},$)}function OF(_){var $=T_.context[_.__c],j=$6(v$++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(T_)),$.props.value):_.__}function JF(_,$){S_.useDebugValue&&S_.useDebugValue($?$(_):_)}function AF(_){var $=$6(v$++,10),j=C();return $.__=_,T_.componentDidCatch||(T_.componentDidCatch=function(G,Z){$.__&&$.__(G,Z),j[1](G)}),[j[0],function(){j[1](void 0)}]}function kF(){for(var _;_=FG.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(o5),$.__h.some(V3),$.__h=[]}catch(j){$.__h=[],S_.__e(j,_.__v)}}}function yF(_){var $,j=function(){clearTimeout(G),$G&&cancelAnimationFrame($),setTimeout(_)},G=setTimeout(j,35);$G&&($=requestAnimationFrame(j))}function o5(_){var $=T_,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),T_=$}function V3(_){var $=T_;_.__c=_.__(),T_=$}function U3(_,$){return!_||_.length!==$.length||$.some(function(j,G){return j!==_[G]})}function HG(_,$){return typeof $=="function"?$(_):$}function MF(_){var $=jG.get(this);return $||($=new Map,jG.set(this,$)),($=EG(this,$.get(_)||($.set(_,$=function(j){for(var G,Z,X=1,Y="",L="",V=[0],K=function(B){X===1&&(B||(Y=Y.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?V.push(0,B,Y):X===3&&(B||Y)?(V.push(3,B,Y),X=2):X===2&&Y==="..."&&B?V.push(4,B,0):X===2&&Y&&!B?V.push(5,0,!0,Y):X>=5&&((Y||!B&&X===5)&&(V.push(X,0,Y,Z),X=6),B&&(V.push(X,B,0,Z),X=6)),Y=""},Q=0;Q<j.length;Q++){Q&&(X===1&&K(),K(Q));for(var q=0;q<j[Q].length;q++)G=j[Q][q],X===1?G==="<"?(K(),V=[V],X=3):Y+=G:X===4?Y==="--"&&G===">"?(X=1,Y=""):Y=G+Y[0]:L?G===L?L="":Y+=G:G==='"'||G==="'"?L=G:G===">"?(K(),X=1):X&&(G==="="?(X=5,Z=Y,Y=""):G==="/"&&(X<5||j[Q][q+1]===">")?(K(),X===3&&(V=V[0]),X=V,(V=V[0]).push(2,0,X),X=0):G===" "||G==="\t"||G===`
`||G==="\r"?(K(),X=2):Y+=G),X===3&&Y==="!--"&&(X=4,V=V[0])}return K(),V}(_)),$),arguments,[])).length>1?$:$[0]}var e5,x_,GG,NF,b$,rj,ZG,XG,G3,d5,p6,YG,q3,X3,Y3,LG,s5,a5,BF,_2,v$,T_,Z3,ij,_6=0,FG,S_,oj,sj,aj,tj,ej,_G,$G,EG=function(_,$,j,G){var Z;$[0]=0;for(var X=1;X<$.length;X++){var Y=$[X++],L=$[X]?($[0]|=Y?1:2,j[$[X++]]):$[++X];Y===3?G[0]=L:Y===4?G[1]=Object.assign(G[1]||{},L):Y===5?(G[1]=G[1]||{})[$[++X]]=L:Y===6?G[1][$[++X]]+=L+"":Y?(Z=_.apply(L,EG(_,L,j,["",null])),G.push(Z),L[0]?$[0]|=2:($[X-2]=0,$[X]=Z)):G.push(L)}return G},jG,F;var w0=J_(()=>{s5={},a5=[],BF=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,_2=Array.isArray;e5=a5.slice,x_={__e:function(_,$,j,G){for(var Z,X,Y;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((X=Z.constructor)&&X.getDerivedStateFromError!=null&&(Z.setState(X.getDerivedStateFromError(_)),Y=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,G||{}),Y=Z.__d),Y)return Z.__E=Z}catch(L){_=L}throw _}},GG=0,NF=function(_){return _!=null&&_.constructor===void 0},r6.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=q$({},this.state),typeof _=="function"&&(_=_(q$({},j),this.props)),_&&q$(j,_),_!=null&&this.__v&&($&&this._sb.push($),L3(this))},r6.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),L3(this))},r6.prototype.render=$2,b$=[],ZG=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,XG=function(_,$){return _.__v.__b-$.__v.__b},t5.__r=0,G3=Math.random().toString(8),d5="__d"+G3,p6="__a"+G3,YG=/(PointerCapture)$|Capture$/i,q3=0,X3=dj(!1),Y3=dj(!0),LG=0;FG=[],S_=x_,oj=S_.__b,sj=S_.__r,aj=S_.diffed,tj=S_.__c,ej=S_.unmount,_G=S_.__;S_.__b=function(_){T_=null,oj&&oj(_)},S_.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),_G&&_G(_,$)},S_.__r=function(_){sj&&sj(_),v$=0;var $=(T_=_.__c).__H;$&&(Z3===T_?($.__h=[],T_.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(o5),$.__h.some(V3),$.__h=[],v$=0)),Z3=T_},S_.diffed=function(_){aj&&aj(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(FG.push($)!==1&&ij===S_.requestAnimationFrame||((ij=S_.requestAnimationFrame)||yF)(kF)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),Z3=T_=null},S_.__c=function(_,$){$.some(function(j){try{j.__h.some(o5),j.__h=j.__h.filter(function(G){return!G.__||V3(G)})}catch(G){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],S_.__e(G,j.__v)}}),tj&&tj(_,$)},S_.unmount=function(_){ej&&ej(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(G){try{o5(G)}catch(Z){$=Z}}),j.__H=void 0,$&&S_.__e($,j.__v))};$G=typeof requestAnimationFrame=="function";jG=new Map;F=MF.bind(N3)});function z1(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function L_(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{return}}function F$(_,$=!1){let j=z1(_);if(j===null)return $;return j==="true"}function z4(_,$=null){let j=z1(_);if(j===null)return $;let G=parseInt(j,10);return Number.isFinite(G)?G:$}function U2(_){let $=z1(_);if(!$)return null;try{return JSON.parse($)}catch{return null}}function e3(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function vZ(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let G=j.length===3?j.split("").map((X)=>X+X).join(""):j,Z=parseInt(G,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${G.toLowerCase()}`}}function bH(_,$){try{if(document.body){_.style.display="none",document.body.appendChild(_);let j=getComputedStyle(_).color||_.style.color;return document.body.removeChild(_),j}}catch{return $}return $}function vH(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Z=bH(j,j.style.color).match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let X=parseInt(Z[1],10),Y=parseInt(Z[2],10),L=parseInt(Z[3],10);if(![X,Y,L].every((K)=>Number.isFinite(K)))return null;let V=`#${[X,Y,L].map((K)=>K.toString(16).padStart(2,"0")).join("")}`;return{r:X,g:Y,b:L,hex:V}}function W4(_){return vZ(_)||vH(_)}function _7(_,$,j){let G=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),X=Math.round(_.b+($.b-_.b)*j);return`rgb(${G} ${Z} ${X})`}function H2(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function mH(_){let $=_.r/255,j=_.g/255,G=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),X=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),Y=G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4);return 0.2126*Z+0.7152*X+0.0722*Y}function cH(_){return mH(_)>0.4?"#000000":"#ffffff"}function mZ(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function $7(_){return uZ[_]||uZ.default}function lH(_){return _.mode==="auto"?mZ():_.mode}function cZ(_,$){let j=$7(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||H$}function U$(_,$,j){let G=W4(_);if(!G)return _;return _7(G,$,j)}function lZ(_,$,j){let G=W4($);if(!G)return _;let X=vZ(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:U$(_.bgPrimary,G,0.08),bgSecondary:U$(_.bgSecondary,G,0.12),bgHover:U$(_.bgHover,G,0.16),textPrimary:U$(_.textPrimary,G,j==="dark"?0.08:0.06),textSecondary:U$(_.textSecondary,G,j==="dark"?0.12:0.1),borderColor:U$(_.borderColor,G,0.1),accent:G.hex,accentHover:X?_7(G,X,0.18):G.hex,warning:U$(_.warning||H$.warning,G,0.14),danger:U$(_.danger,G,0.16),success:U$(_.success,G,0.16)}}function hH(_,$){let j=W4(_?.warning);if(j)return j.hex;let G=W4($==="dark"?z2.warning:H$.warning)||W4(H$.warning),Z=W4(_?.accent);if(G&&Z)return _7(G,Z,$==="dark"?0.18:0.14);return $==="dark"?z2.warning:H$.warning}function pH(_,$){if(typeof document>"u")return;let j=document.documentElement,G=_.accent,Z=W4(G),X=Z?H2(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,Y=Z?H2(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",L=Z?H2(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",V=Z?cH(Z):$==="dark"?"#000000":"#ffffff",K=Z?H2(Z,$==="dark"?0.35:0.25):"rgba(29, 155, 240, 0.25)",Q=hH(_,$),q={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":G,"--accent-hover":_.accentHover||G,"--accent-color-alpha":K,"--accent-soft":Y,"--accent-soft-strong":L,"--accent-contrast-text":V,"--warning-color":Q,"--danger-color":_.danger||H$.danger,"--success-color":_.success||H$.success,"--search-highlight-color":X||"rgba(29, 155, 240, 0.2)"};Object.entries(q).forEach(([B,N])=>{if(N)j.style.setProperty(B,N)})}function rH(){if(typeof document>"u")return;let _=document.documentElement;gH.forEach(($)=>_.style.removeProperty($))}function B6(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,G=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!G)G=document.createElement("meta"),document.head.appendChild(G);if(G.setAttribute("name",_),j)G.setAttribute("id",j);return G}function gZ(_){let $=e3(O4?.theme||"default"),j=O4?.tint?String(O4.tint).trim():null,G=cZ($,_);if($==="default"&&j)G=lZ(G,j,_);if(G?.bgPrimary)return G.bgPrimary;return _==="dark"?z2.bgPrimary:H$.bgPrimary}function nH(_,$){if(typeof document>"u")return;let j=B6("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let G=B6("theme-color",{id:"theme-color-light"});if(G)G.setAttribute("media","(prefers-color-scheme: light)"),G.setAttribute("content",gZ("light"));let Z=B6("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",gZ("dark"));let X=B6("msapplication-TileColor");if(X&&_)X.setAttribute("content",_);let Y=B6("msapplication-navbutton-color");if(Y&&_)Y.setAttribute("content",_);let L=B6("apple-mobile-web-app-status-bar-style");if(L)L.setAttribute("content",$==="dark"?"black-translucent":"default")}function dH(){if(typeof window>"u")return;let _={...O4,mode:bZ};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function iH(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function j7(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=e3(_?.theme||"default"),G=_?.tint?String(_.tint).trim():null,Z=$7(j),X=lH(Z),Y=cZ(j,X);O4={theme:j,tint:G},bZ=X;let L=document.documentElement;L.dataset.theme=X,L.dataset.colorTheme=j,L.dataset.tint=G?String(G):"",L.style.colorScheme=X;let V=Y;if(j==="default"&&G)V=lZ(Y,G,X);if(j==="default"&&!G)rH();else pH(V,X);if(nH(V.bgPrimary,X),dH(),$.persist!==!1)if(L_(t3,j),G)L_(D2,G);else L_(D2,"")}function E2(){if($7(O4.theme).mode!=="auto")return;j7(O4,{persist:!1})}function G7(){if(typeof window>"u")return;let _=e3(z1(t3)||"default"),$=(()=>{let j=z1(D2);return j?j.trim():null})();j7({theme:_,tint:$},{persist:!1})}function hZ(){if(typeof window>"u")return()=>{};if(G7(),window.matchMedia&&!a3){let _=window.matchMedia("(prefers-color-scheme: dark)");if(_.addEventListener)_.addEventListener("change",E2);else if(_.addListener)_.addListener(E2);return a3=!0,()=>{if(_.removeEventListener)_.removeEventListener("change",E2);else if(_.removeListener)_.removeListener(E2);a3=!1}}return()=>{}}function F6(_){if(!_||typeof _!=="object")return;let $=iH(),j=_.chat_jid||_.chatJid||null,G=_.theme??_.name??_.colorTheme,Z=_.tint??null;if(!j||j===$)j7({theme:G||"default",tint:Z},{persist:!1});L_(t3,G||"default"),L_(D2,Z||"")}function pZ(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return mZ()}var t3="piclaw_theme",D2="piclaw_tint",H$,z2,uZ,gH,O4,bZ="light",a3=!1;var _5=J_(()=>{H$={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},z2={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",warning:"#f0b429",danger:"#f4212e",success:"#00ba7c"},uZ={default:{label:"Default",mode:"auto",light:H$,dark:z2},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},gH=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-color-alpha","--accent-contrast-text","--accent-soft","--accent-soft-strong","--warning-color","--danger-color","--success-color","--search-highlight-color"],O4={theme:"default",tint:null}});function eZ(_=typeof window<"u"?window:null){return _||null}function O2(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function X5(_,$){return`${_}:${$}`}function _X(_){return`${_}-${Math.random().toString(36).slice(2,10)}-${Date.now().toString(36)}`}function $X(_,$){if(_.length<=$)return;_.splice(0,_.length-$)}function A4(_){if(!_||typeof _!=="object")return null;return{..._}}function M4(_){if(!_)return null;return k4.find(($)=>$.id===_)||null}function X7(_,$){if(typeof performance>"u"||typeof performance.mark!=="function")return;try{performance.mark(`piclaw:${_}:${$}`)}catch(j){console.debug("[app-perf] Ignoring performance.mark failure.",j,{traceId:_,phase:$})}}function jX(_){if(typeof performance>"u"||typeof performance.clearMarks!=="function")return;try{performance.clearMarks(`piclaw:${_}:start`);let $=M4(_);if(!$)return;for(let j of $.phases)performance.clearMarks(`piclaw:${_}:${j.phase}`)}catch($){console.debug("[app-perf] Ignoring performance.clearMarks failure.",$,{traceId:_})}}function tZ(_,$,j){let G=y4.get(X5(_,$));if(G&&M4(G)?.status==="active")Z5(G,"cancelled","superseded",{replacementType:_,replacementChatJid:$});let Z=_X(_),X={id:Z,type:_,chatJid:$,startedAt:O2(),detail:A4(j),phases:[],status:"active"};return k4.push(X),$X(k4,100),y4.set(X5(_,$),Z),X7(Z,"start"),Z}function Z5(_,$,j,G,Z){let X=M4(_);if(!X||X.status!=="active")return;if(j)X.phases.push({phase:j,at:O2(),detail:A4(G)}),X7(X.id,j);if(X.status=$,X.completedAt=O2(),X.durationMs=X.completedAt-X.startedAt,Z!==void 0)X.error=Z instanceof Error?Z.message:String(Z);let Y=X5(X.type,X.chatJid);if(y4.get(Y)===X.id)y4.delete(Y);jX(X.id)}function UE(_=eZ()){let $=_?.__PICLAW_PERF__;if($)return $;if(_)_.__PICLAW_PERF__=J2;return J2}function U6(_=eZ()){return UE(_)}function GX(_,$,j){return U6().ensureTrace(_,$,j)}function A2(_,$){return U6().getActiveTraceId(_,$)}function X1(_,$,j){U6().markTrace(_,$,j)}function k2(_,$,j="settled",G){let Z=M4(_);if(!Z||Z.status!=="active")return!1;let X=new Set(Z.phases.map((Y)=>Y.phase));if(!$.every((Y)=>X.has(Y)))return!1;return Z5(_,"completed",j,G),!0}function ZX(_,$,j="failed",G){U6().failTrace(_,$,j,G)}function XX(_,$="cancelled",j){U6().cancelTrace(_,$,j)}function Y7(_){return U6().recordRequest(_)}var k4,G5,y4,J2;var Y5=J_(()=>{k4=[],G5=[],y4=new Map;J2={startTrace(_,$,j){return tZ(_,$,j)},ensureTrace(_,$,j){let G=y4.get(X5(_,$));if(G&&M4(G)?.status==="active")return G;return tZ(_,$,j)},getActiveTraceId(_,$){let j=y4.get(X5(_,$));return j&&M4(j)?.status==="active"?j:null},markTrace(_,$,j){let G=M4(_);if(!G||G.status!=="active")return;G.phases.push({phase:$,at:O2(),detail:A4(j)}),X7(G.id,$)},completeTrace(_,$="settled",j){Z5(_,"completed",$,j)},failTrace(_,$,j="failed",G){Z5(_,"failed",j,G,$)},cancelTrace(_,$="cancelled",j){Z5(_,"cancelled",$,j)},recordRequest(_){let $=_X("req");return G5.push({..._,id:$,detail:A4(_.detail)}),$X(G5,300),$},getTraces(){return k4.map((_)=>({..._,detail:A4(_.detail),phases:_.phases.map(($)=>({...$,detail:A4($.detail)}))}))},getRequests(){return G5.map((_)=>({..._,detail:A4(_.detail)}))},clear(){k4.forEach((_)=>jX(_.id)),k4.splice(0,k4.length),G5.splice(0,G5.length),y4.clear()},printSummary(){let _={traces:J2.getTraces(),requests:J2.getRequests()};return console.table(_.traces.map(($)=>({id:$.id,type:$.type,chatJid:$.chatJid,status:$.status,durationMs:Number($.durationMs||0).toFixed(1),lastPhase:$.phases[$.phases.length-1]?.phase||"start"}))),_}}});function H6(_){let $=Number(_||0);return Number.isFinite($)&&$>0?$:null}function HE(_){try{return Boolean(_?.matchMedia?.("(pointer: coarse)")?.matches)}catch{return!1}}function EE(_){let $=String(_?.navigator?.userAgent||"");return/Android|webOS|iPhone|iPod|Mobile|Windows Phone/i.test($)}function YX(_){let $=String(_?.navigator?.userAgent||"");return/iPad|Tablet|PlayBook|Silk/i.test($)}function LX(_=typeof window<"u"?window:null){let $=H6(_?.innerWidth)??H6(_?.screen?.availWidth)??H6(_?.screen?.width)??0,j=H6(_?.innerHeight)??H6(_?.screen?.availHeight)??H6(_?.screen?.height)??0,G=$&&j?Math.min($,j):$||j,Z=$&&j?Math.max($,j):$||j,X=HE(_),Y=Number(_?.navigator?.maxTouchPoints||0),L=X||Y>1;if(G>0&&G<=640)return"mobile";if(EE(_)&&!YX(_))return"mobile";if(YX(_))return"tablet";if(L&&G>0&&G<=1100)return"tablet";if(Z>0&&Z<=1180&&G>0&&G<=900)return"tablet";return"desktop"}var N5={};j1(N5,{uploadWorkspaceFile:()=>w2,uploadMedia:()=>z7,updateWorkspaceFile:()=>sE,updateScheduledTask:()=>Q7,submitAdaptiveCardAction:()=>W7,streamSidePrompt:()=>nE,stopAutoresearch:()=>vE,steerAgentQueueItem:()=>hE,setWorkspaceVisibility:()=>q5,setAgentThoughtVisibility:()=>iE,sendPeerAgentMessage:()=>RE,sendAgentMessage:()=>W1,searchPosts:()=>zE,saveWorkspaceSettings:()=>F7,saveWebPushSubscription:()=>E7,saveUiState:()=>N7,saveQuickActionsSettings:()=>B7,saveEnvironmentOverride:()=>y2,restoreChatBranch:()=>fE,respondToAgentRequest:()=>E6,reorderAgentQueueItem:()=>pE,renameWorkspaceFile:()=>I7,renameChatJid:()=>PE,renameChatBranch:()=>TE,removeAgentQueueItem:()=>lE,reindexWorkspace:()=>M7,purgeChatBranch:()=>CE,pruneChatBranch:()=>IE,moveWorkspaceEntry:()=>C7,mergeChatBranchIntoParent:()=>xE,getWorkspaceTree:()=>V5,getWorkspaceRawUrl:()=>Q5,getWorkspaceIndexStatus:()=>y7,getWorkspaceFileStat:()=>T7,getWorkspaceFileDownloadUrl:()=>T2,getWorkspaceFile:()=>w7,getWorkspaceDownloadUrl:()=>x2,getWorkspaceBranch:()=>k7,getWebPushPublicKey:()=>H7,getTimeline:()=>h$,getThumbnailUrl:()=>J7,getThread:()=>WE,getSystemMetrics:()=>V7,getScheduledTasks:()=>q7,getQuickActionsSettings:()=>K5,getPostsByHashtag:()=>K7,getMediaUrl:()=>u1,getMediaText:()=>oE,getMediaInfo:()=>M2,getMediaBlob:()=>A7,getEnvironmentSettings:()=>U7,getChatBranches:()=>yE,getAutoresearchStatus:()=>bE,getAgents:()=>SE,getAgentThought:()=>dE,getAgentStatus:()=>uE,getAgentQueueState:()=>cE,getAgentModels:()=>w4,getAgentContext:()=>gE,getAgentCommands:()=>L5,getActiveChatAgents:()=>kE,forkChatBranch:()=>ME,dismissAutoresearch:()=>mE,deleteWorkspaceFile:()=>P7,deleteWebPushSubscription:()=>D7,deletePost:()=>AE,createWorkspaceFile:()=>x7,createRootChatSession:()=>wE,createReply:()=>JE,createPost:()=>OE,completeInstanceOobe:()=>rE,attachWorkspaceFile:()=>aE,addToWhitelist:()=>O7,SSEClient:()=>I2});async function p0(_,$={}){let j=typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now(),G;try{G=await fetch(h_+_,{...$,headers:{"Content-Type":"application/json",...$.headers}})}catch(X){throw Y7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j,ok:!1,detail:{failedBeforeResponse:!0}}),X}let Z=(typeof performance<"u"&&typeof performance.now==="function"?performance.now():Date.now())-j;if(Y7({method:String($.method||"GET").toUpperCase(),url:_,startedAt:j,durationMs:Z,status:G.status,ok:G.ok,requestId:G.headers?.get?.("x-request-id")||null,serverTiming:G.headers?.get?.("Server-Timing")||null}),!G.ok){let X=await G.json().catch(()=>({error:"Unknown error"}));throw Error(X.error||`HTTP ${G.status}`)}return G.json()}function KX(_){let $=String(_||"").split(`
`),j="message",G=[];for(let X of $)if(X.startsWith("event:"))j=X.slice(6).trim()||"message";else if(X.startsWith("data:"))G.push(X.slice(5).trim());let Z=G.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function DE(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),G=new TextDecoder,Z="";while(!0){let{value:Y,done:L}=await j.read();if(L)break;Z+=G.decode(Y,{stream:!0});let V=Z.split(`

`);Z=V.pop()||"";for(let K of V){let Q=KX(K);if(Q)$(Q.event,Q.data)}}Z+=G.decode();let X=KX(Z);if(X)$(X.event,X.data)}async function h$(_=10,$=null,j=null){let G=`/timeline?limit=${_}`;if($)G+=`&before=${$}`;if(j)G+=`&chat_jid=${encodeURIComponent(j)}`;return p0(G)}async function K7(_,$=50,j=0,G=null){let Z=G?`&chat_jid=${encodeURIComponent(G)}`:"";return p0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function zE(_,$=50,j=0,G=null,Z="current",X=null,Y=null){let L=G?`&chat_jid=${encodeURIComponent(G)}`:"",V=Z?`&scope=${encodeURIComponent(Z)}`:"",K=X?`&root_chat_jid=${encodeURIComponent(X)}`:"",Q=Y?.images?"&images=1":"",q=Y?.attachments?"&attachments=1":"";return p0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${L}${V}${K}${Q}${q}`)}async function WE(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return p0(`/thread/${_}${j}`)}async function V7(){return p0("/agent/system-metrics")}async function q7(_={}){let $=new URLSearchParams;if(_?.id)$.set("id",String(_.id));if(_?.chatJid)$.set("chat_jid",String(_.chatJid));if(_?.status&&_.status!=="all")$.set("status",String(_.status));if(_?.limit)$.set("limit",String(_.limit));if(_?.includeRunLogs)$.set("include_run_logs","1");if(_?.runLogLimit)$.set("run_log_limit",String(_.runLogLimit));let j=$.toString()?`?${$.toString()}`:"";return p0(`/agent/scheduled-tasks${j}`)}async function Q7(_,$,j={}){return p0("/agent/scheduled-tasks/action",{method:"POST",body:JSON.stringify({action:_,id:$,allow_internal:j?.allowInternal===!0})})}async function N7(_){return p0("/agent/ui-state",{method:"POST",body:JSON.stringify(_||{})})}async function OE(_,$=[],j=null){let G=j?`?chat_jid=${encodeURIComponent(j)}`:"";return p0(`/post${G}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function JE(_,$,j=[],G=null){let Z=G?`?chat_jid=${encodeURIComponent(G)}`:"";return p0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function AE(_,$=!1,j=null){let G=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${G}`;return p0(Z,{method:"DELETE"})}async function W1(_,$,j=null,G=[],Z=null,X=null){let Y=X?`?chat_jid=${encodeURIComponent(X)}`:"",L={content:$,thread_id:j,media_ids:G,client_context:{screen_hint:LX()}};if(Z==="auto"||Z==="queue"||Z==="steer")L.mode=Z;return p0(`/agent/${_}/message${Y}`,{method:"POST",body:JSON.stringify(L)})}async function L5(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";return p0(`/agent/commands?chat_jid=${encodeURIComponent($)}`)}async function K5(){return p0("/agent/settings/quick-actions")}async function B7(_){return p0("/agent/settings/quick-actions",{method:"POST",body:JSON.stringify(_||{})})}async function F7(_){return p0("/agent/settings/workspace",{method:"POST",body:JSON.stringify(_||{})})}async function U7(){return p0("/agent/settings/environment")}async function y2(_){return p0("/agent/settings/environment",{method:"POST",body:JSON.stringify(_||{})})}async function kE(){return p0("/agent/active-chats")}async function yE(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let G=j.toString()?`?${j.toString()}`:"";return p0(`/agent/branches${G}`)}async function ME(_,$={}){return p0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function wE(_){return p0("/agent/root-session",{method:"POST",body:JSON.stringify({agent_name:_})})}async function TE(_,$={}){return p0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function xE(_){return p0("/agent/branch-merge-parent",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function IE(_){return p0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function CE(_){return p0("/agent/branch-purge",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function PE(_,$){return p0("/agent/rename-jid",{method:"POST",body:JSON.stringify({old_jid:_,new_jid:$})})}async function fE(_,$={}){return p0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function RE(_,$,j,G="auto",Z={}){let X={source_chat_jid:_,content:j,mode:G,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return p0("/agent/peer-message",{method:"POST",body:JSON.stringify(X)})}async function H7(){return p0("/agent/push/vapid-public-key")}async function E7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"POST",body:JSON.stringify(j)})}async function D7(_,$={}){let j={subscription:_,...$?.deviceId?{device_id:$.deviceId}:{}};return p0("/agent/push/subscription",{method:"DELETE",body:JSON.stringify(j)})}async function SE(){return p0("/agent/roster")}async function uE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/status${$}`)}async function gE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/context${$}`)}async function bE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/autoresearch/status${$}`)}async function vE(_=null,$={}){return p0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function mE(_=null){return p0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function cE(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/queue-state${$}`)}async function lE(_,$=null){let j=await fetch(h_+"/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function hE(_,$=null){let j=await fetch(h_+"/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function pE(_,$,j=null){let G=await fetch(h_+"/agent/queue-reorder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({from_index:_,to_index:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to reorder queued item"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function w4(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return p0(`/agent/models${$}`)}async function rE(_="provider-ready"){return p0("/agent/oobe/complete",{method:"POST",body:JSON.stringify({kind:_})})}async function z7(_){let $=new FormData;$.append("file",_);let j=await fetch(h_+"/media/upload",{method:"POST",body:$});if(!j.ok){let G=await j.json().catch(()=>({error:"Upload failed"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function E6(_,$,j=null){let G=await fetch(h_+"/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${G.status}`)}return G.json()}async function W7(_){let $=await fetch(h_+"/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function nE(_,$={}){let j=await fetch(h_+"/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let X=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(X.error||`HTTP ${j.status}`)}let G=null,Z=null;if(await DE(j,(X,Y)=>{if($.onEvent?.(X,Y),X==="side_prompt_thinking_delta")$.onThinkingDelta?.(Y?.delta||"");else if(X==="side_prompt_text_delta")$.onTextDelta?.(Y?.delta||"");else if(X==="side_prompt_done")G=Y;else if(X==="side_prompt_error")Z=Y}),Z){let X=Error(Z?.error||"Side prompt failed");throw X.payload=Z,X}return G}async function O7(_,$){let j=await fetch(h_+"/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(G.error||`HTTP ${j.status}`)}return j.json()}async function dE(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return p0(j)}async function iE(_,$,j){return p0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function u1(_){return`${h_}/media/${_}`}function J7(_){return`${h_}/media/${_}/thumbnail`}async function M2(_){let $=await fetch(`${h_}/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function oE(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function A7(_){let $=await fetch(`${h_}/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function V5(_="",$=2,j=!1){let G=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return p0(G)}async function k7(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return p0($)}async function y7(_="all"){let $=`/workspace/index-status?scope=${encodeURIComponent(_||"all")}`;return p0($)}async function M7(_="all"){return p0("/workspace/reindex",{method:"POST",body:JSON.stringify({scope:_})})}async function w7(_,$=20000,j=null){let G=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${G}`;return p0(Z)}async function T7(_){return p0(`/workspace/stat?path=${encodeURIComponent(_)}`)}async function sE(_,$){return p0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function aE(_){return p0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}function eE(_,$="",j={}){let G=new URLSearchParams;if($)G.set("path",$);if(j.overwrite)G.set("overwrite","1");let Z=G.toString();return Z?`${_}?${Z}`:_}function _D(){if(globalThis.crypto?.randomUUID)return globalThis.crypto.randomUUID();return`upload-${Date.now()}-${Math.random().toString(36).slice(2)}`}function $D(_,$,j,G){return new Promise((Z,X)=>{let Y=new XMLHttpRequest;Y.open("POST",h_+$);for(let[L,V]of Object.entries(j||{}))if(V!==void 0&&V!==null)Y.setRequestHeader(L,String(V));Y.upload.onprogress=(L)=>{if(typeof G==="function")G({loaded:L.lengthComputable?L.loaded:0,total:L.lengthComputable?L.total:_.size,lengthComputable:L.lengthComputable})},Y.onload=()=>{try{let L=Y.responseText?JSON.parse(Y.responseText):{};if(Y.status>=200&&Y.status<300)Z(L);else{let V=Error(L.error||`HTTP ${Y.status}`);V.status=Y.status,V.code=L.code,X(V)}}catch{let L=Error(`HTTP ${Y.status}`);L.status=Y.status,X(L)}},Y.onerror=()=>X(Error("Upload failed (network error)")),Y.ontimeout=()=>X(Error("Upload timed out")),Y.send(_)})}async function jD(_,$="",j={}){let G=_D(),Z=eE("/workspace/upload-chunk",$,j),X=Math.max(1,Math.min(L7,Number(j.chunkSize)||tE)),Y=Math.max(0,Number(_?.size)||0),L=Math.max(1,Math.ceil(Y/X)),V=0,K=null;for(let Q=0;Q<L;Q+=1){let q=Q*X,B=Math.min(Y,q+X),N=_.slice(q,B),U=N.size;if(K=await $D(N,Z,{"X-Upload-Id":G,"X-Chunk-Index":Q,"X-Chunk-Total":L,"X-File-Name":_?.name||"upload.bin","X-File-Size":Y},(E)=>{if(typeof j.onProgress!=="function")return;let D=Math.min(Y,V+(E?.loaded||0)),H=Y||1;j.onProgress({loaded:D,total:H,percent:Math.round(D/H*100),chunkIndex:Q,chunkTotal:L})}),V+=U,typeof j.onProgress==="function"){let E=Y||1,D=Y?V:E;j.onProgress({loaded:D,total:E,percent:Math.round(D/E*100),chunkIndex:Q+1,chunkTotal:L})}}return K}async function w2(_,$="",j={}){if(_?.size>L7){let G=(_.size/1048576).toFixed(0),Z=(L7/1048576).toFixed(0),X=Error(`File too large (${G} MB). Maximum upload size is ${Z} MB.`);throw X.code="file_too_large",X}return await jD(_,$,j)}async function x7(_,$,j=""){let G=await fetch(h_+"/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!G.ok){let Z=await G.json().catch(()=>({error:"Create failed"})),X=Error(Z.error||`HTTP ${G.status}`);throw X.status=G.status,X.code=Z.code,X}return G.json()}async function I7(_,$){let j=await fetch(h_+"/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function C7(_,$){let j=await fetch(h_+"/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let G=await j.json().catch(()=>({error:"Move failed"})),Z=Error(G.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=G.code,Z}return j.json()}async function P7(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return p0($,{method:"DELETE"})}async function q5(_,$=!1){return p0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function Q5(_,$={}){let j=new URLSearchParams({path:String(_||"")});if($.download)j.set("download","1");return`${h_}/workspace/raw?${j.toString()}`}function T2(_){return Q5(_,{download:!0})}function x2(_,$=!1){let j=`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`;return`${h_}/workspace/download?${j}`}class I2{onEvent;onStatusChange;chatJid;eventSource;reconnectTimeout;reconnectDelay;status;reconnectAttempts;cooldownUntil;connecting;lastActivityAt;staleCheckTimer;staleThresholdMs;constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource(h_+"/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(G)=>{this.markActivity(),this.onEvent(j,JSON.parse(G.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),$("ui_meters"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let G=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,G);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}var h_="",L7=1073741824,tE=8388608;var P_=J_(()=>{Y5()});function z6(_){let $=typeof _==="string"?_.trim():"";return $?$:null}function o1(_={}){if(typeof window>"u")return;let $=z6(_.section);try{if(window.__piclawSettingsOpenRequested=!0,$)window.__piclawSettingsRequestedSection=$;else delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to record open request flags",j)}window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:$?{section:$}:void 0}))}function n7(){if(typeof window>"u")return null;return z6(window.__piclawSettingsRequestedSection)}function R2(){if(typeof window>"u")return{open:!1,section:null};let _=Boolean(window.__piclawSettingsOpenRequested),$=n7();try{window.__piclawSettingsOpenRequested=!1,delete window.__piclawSettingsRequestedSection}catch(j){console.debug("[settings-dialog-events] failed to clear open request flags",j)}return{open:_,section:$}}function n$({children:_,className:$=""}){let[j,G]=C(null);return u(()=>{if(typeof document>"u")return;let Z=document.createElement("div");return document.body.appendChild(Z),G(Z),()=>{try{Q$(null,Z)}finally{Z.remove()}}},[]),u(()=>{if(!j)return;j.className=$||"";return},[$,j]),j6(()=>{if(!j)return;Q$(_,j);return},[_,j]),null}var S2=J_(()=>{w0()});function d$(_){let $=x4.findIndex((j)=>j.id===_.id);if($>=0)x4[$]=_;else x4.push(_);x4.sort((j,G)=>(j.order??500)-(G.order??500))}function oX(_){let $=x4.findIndex((j)=>j.id===_);if($>=0)x4.splice($,1)}function sX(){return[...x4]}function d7(){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent("piclaw:settings-panes-changed"))}var x4;var W6=J_(()=>{x4=[]});function yD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(I4,{detail:{enabled:Boolean(_)}}))}function eX(_){if(typeof fetch!=="function")return;N7({ui_meters:_}).catch(($)=>{console.debug("[meters] Failed to persist meters UI state.",$)})}function MD(_){if(typeof window>"u")return;window.dispatchEvent(new CustomEvent(g2,{detail:{collapsed:Boolean(_)}}))}function z5(_=!1){return F$(aX,_)}function _Y(_=!1){return F$(tX,_)}function u2(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)L_(aX,Z?"true":"false");if(G)eX({enabled:Z});return yD(Z),Z}function i7(_,$={}){let j=$.persist!==!1,G=$.persistServer!==!1,Z=Boolean(_);if(j)L_(tX,Z?"true":"false");if(G)eX({collapsed:Z});return MD(Z),Z}function o7(_){let $=typeof _?.mode==="string"?_.mode.trim().toLowerCase():"";if(typeof _?.enabled==="boolean")u2(Boolean(_.enabled),{persistServer:!1});else if($==="toggle"){let j=!z5(!1);u2(j,{persistServer:!1})}if(typeof _?.collapsed==="boolean")i7(Boolean(_.collapsed),{persistServer:!1})}var aX="piclaw_system_meters_enabled",tX="piclaw_system_meters_collapsed",I4="piclaw-meters-change",g2="piclaw-meters-collapsed-change";var b2=J_(()=>{P_()});function $Y(_,$){if(_===""||_===null||_===void 0)return $;let j=Number(_);return Number.isFinite(j)?j:$}function jY(_,{min:$=-1/0,max:j=1/0}={}){let G=Number.isFinite(Number($))?Number($):-1/0,Z=Number.isFinite(Number(j))?Number(j):1/0;return Math.min(Z,Math.max(G,Number(_)))}function W$(_,{fallback:$=0,min:j=-1/0,max:G=1/0}={}){let Z=$Y(_,$);return jY(Z,{min:j,max:G})}function wD(_,{direction:$=1,step:j=1,fallback:G=0,min:Z=-1/0,max:X=1/0}={}){let Y=W$(_,{fallback:G,min:Z,max:X}),L=Math.abs($Y(j,1))||1,V=Number($)<0?-1:1;return jY(Y+V*L,{min:Z,max:X})}function v_({value:_,min:$,max:j,step:G=1,fallback:Z,width:X="80px",disabled:Y=!1,label:L,onChange:V}){let K=Number.isFinite(Number(Z))?Number(Z):W$(_,{fallback:0,min:$,max:j}),[Q,q]=C(String(_??K)),B=g(!1);u(()=>{if(!B.current)q(String(_??K))},[_,K]);let N=P((E)=>{B.current=!1;let D=W$(E,{fallback:K,min:$,max:j});q(String(D)),V?.(D)},[K,$,j,V]),U=P((E)=>{B.current=!1;let D=wD(_,{direction:E,step:G,fallback:K,min:$,max:j});q(String(D)),V?.(D)},[K,j,$,V,G,_]);return F`
        <span class="settings-number-stepper">
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Decrease ${L||"value"}`}
                title=${`Decrease ${L||"value"}`}
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
                onInput=${(E)=>{B.current=!0,q(E.target.value)}}
                onBlur=${(E)=>N(E.target.value)}
                onKeyDown=${(E)=>{if(E.key==="Enter")E.preventDefault(),N(E.target.value),E.target.blur()}}
            />
            <button
                type="button"
                class="settings-number-step-btn"
                aria-label=${`Increase ${L||"value"}`}
                title=${`Increase ${L||"value"}`}
                disabled=${Y}
                onClick=${()=>U(1)}
            >+</button>
        </span>
    `}var C4=J_(()=>{w0()});function GY(_){let $=String(_||"").trim();if(!$)return"";if($.startsWith("http://")||$.startsWith("https://")||$.startsWith("data:")||$.startsWith("blob:"))return $;if($.startsWith("/workspace/"))return`/workspace/file?path=${encodeURIComponent($.slice(11))}`;if($.startsWith("/"))return"";if(/^[a-zA-Z]:[\\/]/.test($))return"";if($.startsWith("\\\\"))return"";if($.includes("\\"))return"";return`/workspace/file?path=${encodeURIComponent($.replace(/^\.\//,""))}`}function ZY({value:_,onChange:$}){let j=g(null),[G,Z]=C(GY(_));u(()=>{Z(GY(_))},[_]);let X=P((Y)=>{let L=Y.target.files?.[0];if(!L)return;let V=new FileReader;V.onload=()=>{let K=V.result;Z(K),$?.(K)},V.readAsDataURL(L)},[$]);return F`
        <div class="settings-avatar-inline" onClick=${()=>j.current?.click()} title="Click to upload">
            ${G?F`<img src=${G} alt="avatar" />`:F`<span class="settings-avatar-placeholder">+</span>`}
            <input type="file" accept="image/*" ref=${j} style="display:none" onChange=${X} />
        </div>
    `}function XY(_={}){return{userName:_.userName||"",userAvatar:_.userAvatar||"",assistantName:_.assistantName||"",assistantAvatar:_.assistantAvatar||"",composeUploadLimitMb:_.composeUploadLimitMb??32,workspaceUploadLimitMb:_.workspaceUploadLimitMb??256}}function s7({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(""),[X,Y]=C(""),[L,V]=C(""),[K,Q]=C(""),[q,B]=C(32),[N,U]=C(256),[E,D]=C(""),[H,M]=C(!1),[J,W]=C(!1),[T,x]=C(()=>z5(!1)),[A,k]=C(!1),O=g(""),z=g(null),y=g(!0);u(()=>{return y.current=!0,()=>{y.current=!1}},[]);let I=P((n)=>{let b=XY(n);Z(b.userName),Y(b.userAvatar),V(b.assistantName),Q(b.assistantAvatar),B(b.composeUploadLimitMb),U(b.workspaceUploadLimitMb),D(n?.widgetToken||""),O.current=JSON.stringify(b)},[]);u(()=>{I(_||{})},[_,I]),u(()=>{let n=(b)=>{x(Boolean(b?.detail?.enabled))};return window.addEventListener(I4,n),()=>window.removeEventListener(I4,n)},[]);let R=Z0(()=>JSON.stringify(XY({userName:G,userAvatar:X,assistantName:L,assistantAvatar:K,composeUploadLimitMb:q,workspaceUploadLimitMb:N})),[G,X,L,K,q,N]);u(()=>{if(R===O.current)return;if(z.current)clearTimeout(z.current);return z.current=setTimeout(async()=>{if(!y.current)return;let n=document.activeElement;if(n&&n.closest?.(".settings-number-stepper"))return;try{let b=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:R}),$0=await b.json().catch(()=>({}));if(!y.current)return;if(!b.ok||!$0?.ok||!$0?.settings)return;O.current=R,j?.($0.settings),k(!0),setTimeout(()=>{if(y.current)k(!1)},4000)}catch(b){console.warn("[settings/general] Failed to persist general settings snapshot.",b)}},800),()=>{if(z.current)clearTimeout(z.current)}},[R,j]);let f=_?.instanceTotp||{configured:!1,issuer:L||"Piclaw",label:G?`${L||"Piclaw"}:${G}`:L||"Piclaw",secret:"",otpauth:"",qrSvg:""},v=P(async()=>{if(!E)return;try{await navigator.clipboard?.writeText(E),M(!0),setTimeout(()=>{if(y.current)M(!1)},3000)}catch(n){console.warn("[settings/general] Failed to copy widget token.",n)}},[E]),l=P(async()=>{if(J)return;if(!confirm("Regenerate the widget token? Existing macOS widgets using the old token will stop updating."))return;W(!0);try{let n=await fetch("/agent/settings/widget-token/regenerate",{method:"POST"}),b=await n.json().catch(()=>({}));if(!n.ok||!b?.ok||!b?.settings)throw Error(b?.error||"Failed to regenerate widget token.");D(b.settings.widgetToken||""),j?.(b.settings),k(!0),setTimeout(()=>{if(y.current)k(!1)},4000)}catch(n){console.warn("[settings/general] Failed to regenerate widget token.",n)}finally{if(y.current)W(!1)}},[J,j]),h=typeof window<"u"&&window.isSecureContext;return F`
        <div class="settings-section">
            ${A&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Identity</h3>
            <div class="settings-row">
                <label>User</label>
                <${ZY} value=${X} onChange=${Y} />
                <input type="text" value=${G} onInput=${(n)=>Z(n.target.value)} placeholder="Your name" />
            </div>
            <div class="settings-row">
                <label>Agent</label>
                <${ZY} value=${K} onChange=${Q} />
                <input type="text" value=${L} onInput=${(n)=>V(n.target.value)} placeholder="Agent name" />
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
                        onChange=${()=>{let n=u2(!T);x(n)}} />
                    <span class="settings-hint" style="margin:0">CPU/memory/network meters in the status bar. This browser only.</span>
                </div>
            </div>

            <h3 style="margin-top:20px">Instance Configuration</h3>
            <div class="settings-row">
                <label>Compose upload (MB)</label>
                <${v_}
                    label="compose upload limit"
                    value=${q}
                    min=${1}
                    max=${512}
                    fallback=${32}
                    width="80px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">chat/media attachments</span>
            </div>
            <div class="settings-row">
                <label>Workspace upload (MB)</label>
                <${v_}
                    label="workspace upload limit"
                    value=${N}
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
                    <input type="password" readonly value=${E||""} style="flex:1; min-width:0; font-family: var(--mono-font, monospace);" />
                    <button type="button" onClick=${v} disabled=${!E}>${H?"Copied":"Copy"}</button>
                    <button type="button" onClick=${l} disabled=${J}>${J?"Regenerating…":"Regenerate"}</button>
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
                            ${f.configured?"Current web-login authenticator secret. Scan this QR to add another authenticator device.":"TOTP is not configured for this instance yet, so no setup QR is available."}
                        </div>
                    </div>
                </div>
                ${f.configured?F`
                    <div class="settings-totp-grid">
                        <div class="settings-totp-qr" dangerouslySetInnerHTML=${{__html:f.qrSvg}}></div>
                        <div class="settings-totp-meta">
                            <div class="settings-row settings-row-vertical">
                                <label>Issuer</label>
                                <input type="text" readonly value=${f.issuer||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Label</label>
                                <input type="text" readonly value=${f.label||""} />
                            </div>
                            <div class="settings-row settings-row-vertical">
                                <label>Secret</label>
                                <input type="text" readonly value=${f.secret||""} />
                            </div>
                        </div>
                    </div>
                `:null}
            </div>
        </div>
    `}var YY=J_(()=>{w0();b2();C4()});var KY={};j1(KY,{SessionsSection:()=>TD});function LY(_={}){return{sessionAutoRotate:_.sessionAutoRotate!==!1,sessionMaxSizeMb:_.sessionMaxSizeMb??16,sessionMaxLines:_.sessionMaxLines??4000,sessionMaxCompactions:_.sessionMaxCompactions??3,sessionIsolation:_.sessionIsolation||"none",toolUseBudget:_.toolUseBudget??64}}function TD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(16),[L,V]=C(4000),[K,Q]=C(3),[q,B]=C(64),[N,U]=C("none"),[E,D]=C(!1),H=g(""),M=g(null),J=g(!0);u(()=>{return J.current=!0,()=>{J.current=!1}},[]);let W=P((x)=>{let A=LY(x);Z(A.sessionAutoRotate),Y(A.sessionMaxSizeMb),V(A.sessionMaxLines),Q(A.sessionMaxCompactions),B(A.toolUseBudget),U(A.sessionIsolation),H.current=JSON.stringify(A)},[]);u(()=>{W(_||{})},[_,W]);let T=Z0(()=>JSON.stringify(LY({sessionAutoRotate:G,sessionMaxSizeMb:X,sessionMaxLines:L,sessionMaxCompactions:K,toolUseBudget:q,sessionIsolation:N})),[G,X,L,K,q,N]);return u(()=>{if(T===H.current)return;if(M.current)clearTimeout(M.current);return M.current=setTimeout(async()=>{if(!J.current)return;let x=document.activeElement;if(x&&x.closest?.(".settings-number-stepper"))return;try{let A=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:T}),k=await A.json().catch(()=>({}));if(!J.current)return;if(!A.ok||!k?.ok||!k?.settings)return;H.current=T,j?.(k.settings),D(!0),setTimeout(()=>{if(J.current)D(!1)},4000)}catch(A){console.warn("[settings/sessions] Failed to persist session settings.",A)}},800),()=>{if(M.current)clearTimeout(M.current)}},[T,j]),F`
        <div class="settings-section">
            ${E&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Settings applied. Changes take effect on the next turn.
                </div>
            `}
            <h3>Session Lifecycle</h3>
            <div class="settings-row">
                <label>Auto-rotate sessions</label>
                <input type="checkbox" checked=${G} onChange=${(x)=>Z(x.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Max session size (MB)</label>
                <${v_}
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
                <${v_}
                    label="tool use budget"
                    value=${q}
                    min=${8}
                    max=${512}
                    fallback=${64}
                    width="80px"
                    onChange=${B}
                />
                <span class="settings-hint" style="margin:0">max tool-call messages per turn</span>
            </div>
            <div class="settings-row">
                <label>Session isolation</label>
                <select value=${N} onChange=${(x)=>U(x.target.value)}>
                    <option value="none">None — full cross-session visibility</option>
                    <option value="summary">Summary — tools visible, no arguments</option>
                    <option value="full">Full — sessions cannot see each other</option>
                </select>
            </div>
        </div>
    `}var VY=J_(()=>{w0();C4()});var qY={};j1(qY,{CompactionSection:()=>ID});function xD(_={}){return{compactionTimeoutSec:_.compactionTimeoutSec??180,compactionBackoffBaseMin:_.compactionBackoffBaseMin??15,compactionBackoffMaxMin:_.compactionBackoffMaxMin??360,compactionThresholdPercent:_.compactionThresholdPercent??75,compactionBackoffDecayFactor:_.compactionBackoffDecayFactor??0.5,progressWatchdogEnabled:Boolean(_.progressWatchdogEnabled??!1),progressWatchdogTimeoutSec:_.progressWatchdogTimeoutSec??120,compactionBackoffs:Array.isArray(_.compactionBackoffs)?_.compactionBackoffs:[],progressWatchdogPhases:Array.isArray(_.progressWatchdogPhases)?_.progressWatchdogPhases:[]}}function a7(_){let $=String(_||"").trim();if(!$)return"—";let j=new Date($);if(Number.isNaN(j.getTime()))return $;return j.toLocaleString()}function ID({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(180),[X,Y]=C(15),[L,V]=C(360),[K,Q]=C(75),[q,B]=C(0.5),[N,U]=C(!1),[E,D]=C(120),[H,M]=C([]),[J,W]=C([]),[T,x]=C(!1),A=g(""),k=g(null),O=g(!0);u(()=>{return O.current=!0,()=>{O.current=!1}},[]);let z=P((R)=>{let f=xD(R);Z(f.compactionTimeoutSec),Y(f.compactionBackoffBaseMin),V(f.compactionBackoffMaxMin),Q(f.compactionThresholdPercent),B(f.compactionBackoffDecayFactor),U(f.progressWatchdogEnabled),D(f.progressWatchdogTimeoutSec),M(f.compactionBackoffs),W(f.progressWatchdogPhases),A.current=JSON.stringify({compactionTimeoutSec:f.compactionTimeoutSec,compactionBackoffBaseMin:f.compactionBackoffBaseMin,compactionBackoffMaxMin:f.compactionBackoffMaxMin,compactionThresholdPercent:f.compactionThresholdPercent,compactionBackoffDecayFactor:f.compactionBackoffDecayFactor,progressWatchdogEnabled:f.progressWatchdogEnabled,progressWatchdogTimeoutSec:f.progressWatchdogTimeoutSec})},[]);u(()=>{z(_||{})},[_,z]);let y=Z0(()=>JSON.stringify({compactionTimeoutSec:G,compactionBackoffBaseMin:X,compactionBackoffMaxMin:L,compactionThresholdPercent:K,compactionBackoffDecayFactor:q,progressWatchdogEnabled:N,progressWatchdogTimeoutSec:E}),[G,X,L,K,q,N,E]);u(()=>{if(y===A.current)return;if(k.current)clearTimeout(k.current);return k.current=setTimeout(async()=>{if(!O.current)return;let R=document.activeElement;if(R&&R.closest?.(".settings-number-stepper"))return;try{$?.("Saving compaction settings…","info");let f=await fetch("/agent/settings/compaction",{method:"POST",headers:{"Content-Type":"application/json"},body:y}),v=await f.json().catch(()=>({}));if(!O.current)return;if(!f.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to save compaction settings.","error");return}A.current=y,j?.(v.settings),z({..._||{},...v.settings||{}}),$?.("Compaction settings saved.","success"),x(!0),setTimeout(()=>{if(O.current)x(!1),$?.(null)},4000)}catch(f){if(console.warn("[settings/compaction] Failed to persist compaction settings.",f),O.current)$?.("Failed to save compaction settings.","error")}},800),()=>{if(k.current)clearTimeout(k.current)}},[y,j,$,z,_]);let I=P(async(R)=>{try{$?.(`Clearing compaction suppression for ${R}…`,"info");let f=await fetch("/agent/settings/compaction/reset-backoff",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({chatJid:R})}),v=await f.json().catch(()=>({}));if(!f.ok||!v?.ok||!v?.settings){$?.(v?.error||"Failed to clear compaction suppression.","error");return}j?.(v.settings),z({..._||{},...v.settings||{}}),$?.(`Cleared compaction suppression for ${R}.`,"success")}catch(f){console.warn("[settings/compaction] Failed to clear compaction suppression.",f),$?.("Failed to clear compaction suppression.","error")}},[z,j,$,_]);return F`
        <div class="settings-section">
            ${T&&F`
                <div class="settings-general-applied-notice" role="status" aria-live="polite">
                    Compaction settings applied. Existing turns keep their current timers; new turns use the updated values.
                </div>
            `}

            <h3>Automatic compaction</h3>
            <div class="settings-row">
                <label>Compaction threshold (%)</label>
                <${v_}
                    label="compaction threshold"
                    value=${K}
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
                <${v_}
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
                <${v_}
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
                <${v_}
                    label="compaction backoff max"
                    value=${L}
                    min=${1}
                    max=${10080}
                    fallback=${360}
                    width="90px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">Upper bound for exponential suppression after repeated failures.</span>
            </div>

            <div class="settings-row">
                <label>Backoff decay factor</label>
                <${v_}
                    label="backoff decay factor"
                    value=${Math.round(q*100)}
                    min=${10}
                    max=${100}
                    fallback=${50}
                    width="80px"
                    onChange=${(R)=>B(R/100)}
                />
                <span class="settings-hint" style="margin:0">% — halves backoff after each successful compaction</span>
            </div>

            <h3 style="margin-top:20px">Stall watchdog</h3>
            <div class="settings-row">
                <label>Enable watchdog</label>
                <div style="display:flex; align-items:center; gap:10px;">
                    <input type="checkbox" checked=${N} onChange=${(R)=>U(Boolean(R.target.checked))} />
                    <span class="settings-hint" style="margin:0">Disabled by default. When enabled, a helper process terminates the runtime if an active phase stops heartbeating.</span>
                </div>
            </div>
            <div class="settings-row">
                <label>Watchdog timeout (sec)</label>
                <${v_}
                    label="watchdog timeout"
                    value=${E}
                    min=${0}
                    max=${3600}
                    fallback=${120}
                    width="90px"
                    disabled=${!N}
                    onChange=${D}
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
                            ${H.map((R)=>F`
                                <tr>
                                    <td><code>${R.chatJid}</code></td>
                                    <td>${R.failureCount}</td>
                                    <td>${a7(R.backoffUntil)}</td>
                                    <td title=${R.lastErrorMessage||""}>${R.lastErrorMessage||"—"}</td>
                                    <td>
                                        <button class="settings-secondary-btn" onClick=${()=>I(R.chatJid)}>
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
            ${J.length===0?F`
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
                            ${J.map((R)=>F`
                                <tr>
                                    <td><code>${R.chatJid}</code></td>
                                    <td>${R.phase}</td>
                                    <td>${a7(R.startedAt)}</td>
                                    <td>${a7(R.lastProgressAt)}</td>
                                </tr>
                            `)}
                        </tbody>
                    </table>
                </div>
            `}
        </div>
    `}var QY=J_(()=>{w0();C4()});function BY(_){let $=String(_||"").trim().toLowerCase();if(!$)return null;let j=fD[$]||$;if(/^f(?:[1-9]|1[0-2])$/.test(j))return j;if(RD.has(j))return j;if(j.length===1)return j;if(/^[a-z0-9]+$/.test(j))return j;return null}function O6(_){let $=String(_||"").trim();if(!$)return null;let j=$.split("+").map((X)=>X.trim()).filter(Boolean);if(!j.length)return null;let G={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let X of j){let Y=X.toLowerCase(),L=PD[Y];if(L){G[L]=!0;continue}if(G.key)return null;let V=BY(X);if(!V||V==="escape")return null;G.key=V}if(!G.key)return null;let Z=[];if(G.ctrl)Z.push("ctrl");if(G.meta)Z.push("meta");if(G.alt)Z.push("alt");if(G.shift)Z.push("shift");return Z.push(G.key),Z.join("+")}function FY(_){return String(_||"").split(/[\n,]/).map(($)=>O6($)).filter(($)=>Boolean($))}function o$(_){return _.join(", ")}function e7(){let _=U2(NY);if(!_||typeof _!=="object")return{};let $={};for(let j of i$){let G=_[j.id];if(!Array.isArray(G))continue;let Z=G.map((X)=>O6(String(X||""))).filter((X)=>Boolean(X));$[j.id]=[...new Set(Z)]}return $}function t7(_){if(L_(NY,JSON.stringify(_)),typeof window<"u")window.dispatchEvent(new CustomEvent("piclaw:keyboard-shortcuts-changed",{detail:{config:_}}))}function UY(_){return CD.get(_)}function W5(_){let $=e7()[_];if(Array.isArray($))return $;return[...UY(_).defaultBindings]}function HY(_,$){let j=e7(),G=UY(_).defaultBindings,Z=[...new Set($.map((X)=>O6(X)).filter((X)=>Boolean(X)))];if(Z.length===G.length&&Z.every((X,Y)=>X===G[Y]))delete j[_];else j[_]=Z;t7(j)}function _9(_){if(!_){t7({});return}let $=e7();delete $[_],t7($)}function v2(){let _={};for(let $ of i$)_[$.id]=W5($.id);return _}function SD(_){let $=typeof _==="string"?_:"";if(!$)return"";if($.length===1)return $.toLowerCase();return BY($)||$.toLowerCase()}function uD(_){let $=O6(_);if(!$)return null;let j={ctrl:!1,meta:!1,alt:!1,shift:!1,key:""};for(let G of $.split("+")){if(G==="ctrl"||G==="meta"||G==="alt"||G==="shift"){j[G]=!0;continue}j.key=G}return j.key?j:null}function gD(_,$){let j=uD($);if(!j)return!1;if(SD(_?.key)!==j.key)return!1;let Z=!j.shift&&j.key.length===1&&/[^a-z0-9]/i.test(j.key);return Boolean(_?.ctrlKey)===j.ctrl&&Boolean(_?.metaKey)===j.meta&&Boolean(_?.altKey)===j.alt&&(Z||Boolean(_?.shiftKey)===j.shift)}function O$(_,$){return W5($).some((j)=>gD(_,j))}var NY="piclaw_keyboard_shortcuts_v1",i$,CD,PD,fD,RD;var m2=J_(()=>{i$=[{id:"openHelp",label:"Open keyboard help",description:"Open Settings → Keyboard. Default: question mark and quote when focus is outside compose and other editable fields.",defaultBindings:["?",'"']},{id:"openSettings",label:"Open settings",description:"Open the settings dialog.",defaultBindings:["ctrl+,","meta+,","alt+,"]},{id:"previousChat",label:"Previous session",description:"Switch to the previous visible chat/session.",defaultBindings:["["]},{id:"nextChat",label:"Next session",description:"Switch to the next visible chat/session.",defaultBindings:["]"]},{id:"toggleDock",label:"Toggle dock",description:"Show or hide the bottom dock panes.",defaultBindings:["ctrl+`"]},{id:"toggleZenMode",label:"Toggle zen mode",description:"Collapse surrounding chrome for a focused chat view.",defaultBindings:["ctrl+shift+z","meta+shift+z"]}],CD=new Map(i$.map((_)=>[_.id,_])),PD={cmd:"meta",command:"meta",meta:"meta",super:"meta",ctrl:"ctrl",control:"ctrl",alt:"alt",option:"alt",shift:"shift"},fD={esc:"escape",return:"enter",spacebar:"space"},RD=new Set(["tab","enter","space","backspace","delete","insert","clear","home","end","pageup","pagedown","up","down","left","right"])});var EY={};j1(EY,{KeyboardSection:()=>vD});function bD(_,$,j){let G=String(_||"").trim().toLowerCase();if(!G)return!0;return[$.label,$.description,j,...$.defaultBindings||[]].some((Z)=>String(Z||"").toLowerCase().includes(G))}function vD({filter:_="",setStatus:$}){let[j,G]=C(()=>{let V=v2();return Object.fromEntries(Object.entries(V).map(([K,Q])=>[K,o$(Q)]))});u(()=>{let V=()=>{let K=v2();G(Object.fromEntries(Object.entries(K).map(([Q,q])=>[Q,o$(q)])))};return window.addEventListener("piclaw:keyboard-shortcuts-changed",V),()=>window.removeEventListener("piclaw:keyboard-shortcuts-changed",V)},[]);let Z=Z0(()=>i$.filter((V)=>{let K=String(j[V.id]||"");return bD(_,V,K)}),[j,_]),X=(V)=>{let K=String(j[V]||"").trim(),q=(K?K.split(/[\n,]/).map((N)=>N.trim()).filter(Boolean):[]).filter((N)=>!O6(N));if(q.length>0){$?.(`Invalid shortcut: ${q[0]}. Escape is reserved and cannot be rebound.`,"error");return}let B=FY(K);HY(V,B),G((N)=>({...N,[V]:o$(W5(V))})),$?.("Keyboard shortcuts saved.","success")},Y=(V)=>{_9(V),G((K)=>({...K,[V]:o$(W5(V))})),$?.("Keyboard shortcut reset to default.","success")};return F`
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
                <button class="settings-addon-btn" style="min-width:180px; height:40px; font-size:14px;" onClick=${()=>{_9();let V=v2();G(Object.fromEntries(Object.entries(V).map(([K,Q])=>[K,o$(Q)]))),$?.("Keyboard shortcuts reset to defaults.","success")}}>Reset all to defaults</button>
            </div>

            <div class="settings-shortcut-list" style="display:grid; gap:16px;">
                ${Z.map((V)=>F`
                    <div class="settings-shortcut-card" key=${V.id} style="display:grid; grid-template-columns:minmax(240px, 1.25fr) minmax(320px, 1fr); gap:18px; align-items:start; padding:18px 20px; border:1px solid var(--border-color, rgba(120,120,120,.22)); border-radius:16px; background:var(--panel-bg, rgba(255,255,255,.04));">
                        <div class="settings-shortcut-copy" style="min-width:0;">
                            <div class="settings-shortcut-title" style="font-size:17px; font-weight:700; line-height:1.3;">${V.label}</div>
                            <div class="settings-hint" style="margin:6px 0 0 0; font-size:14px; line-height:1.5;">${V.description}</div>
                            <div class="settings-shortcut-default" style="margin-top:10px; font-size:13px; color:var(--text-secondary);">Default: <code style="font-size:13px;">${o$(V.defaultBindings)}</code></div>
                        </div>
                        <div class="settings-shortcut-controls" style="display:grid; gap:10px; min-width:0;">
                            <input
                                type="text"
                                value=${j[V.id]||""}
                                placeholder=${o$(V.defaultBindings)}
                                onInput=${(K)=>G((Q)=>({...Q,[V.id]:K.target.value}))}
                                style="width:100%; min-height:46px; padding:10px 14px; font-size:16px; line-height:1.35; font-family:var(--font-mono, ui-monospace, monospace); border-radius:12px;"
                            />
                            <div class="settings-shortcut-actions" style="display:flex; justify-content:flex-end; align-items:center; gap:10px; flex-wrap:wrap;">
                                <button class="settings-addon-btn settings-addon-btn-install" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>X(V.id)}>Save</button>
                                <button class="settings-addon-btn" style="min-width:96px; height:40px; font-size:14px;" onClick=${()=>Y(V.id)}>Default</button>
                            </div>
                        </div>
                    </div>
                `)}
                ${Z.length===0&&F`<div class="settings-hint">No shortcuts match this filter.</div>`}
            </div>
        </div>
    `}var DY=J_(()=>{w0();m2()});function zY(_,$=$9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(300,Math.max(15,Math.round(j)))}function WY(_,$=j9){let j=Number(_);if(!Number.isFinite(j))return $;return Math.min(8,Math.max(0,Math.round(j)))}function J6(){return{refreshIntervalSec:zY(z4(l2,$9),$9),folderPreviewDepth:WY(z4(h2,j9),j9)}}function OY(_={}){let $=J6(),j={refreshIntervalSec:zY(Object.prototype.hasOwnProperty.call(_,"refreshIntervalSec")?_.refreshIntervalSec:$.refreshIntervalSec,$.refreshIntervalSec),folderPreviewDepth:WY(Object.prototype.hasOwnProperty.call(_,"folderPreviewDepth")?_.folderPreviewDepth:$.folderPreviewDepth,$.folderPreviewDepth)};if(L_(l2,String(j.refreshIntervalSec)),L_(h2,String(j.folderPreviewDepth)),typeof window<"u")window.dispatchEvent(new CustomEvent(c2,{detail:{settings:j}}));return j}var c2="piclaw:workspace-client-settings-updated",l2="workspaceRefreshIntervalSec",h2="workspaceFolderPreviewDepth",$9=60,j9=3;var G9=()=>{};var AY={};j1(AY,{WorkspaceSection:()=>mD});function JY(_={}){let $=_.workspaceSettings||{};return{webTerminalEnabled:$.webTerminalEnabled!==!1,vncAllowDirect:$.vncAllowDirect!==!1,treeMaxDepth:$.treeMaxDepth??4,treeMaxEntries:$.treeMaxEntries??5000}}function mD({settingsData:_,setStatus:$,mergeSettingsData:j}){let[G,Z]=C(!0),[X,Y]=C(!0),[L,V]=C(4),[K,Q]=C(5000),[q,B]=C(60),[N,U]=C(3),[E,D]=C(!1),[H,M]=C(!1),J=g(""),W=g(null),T=g(null),x=g(null),A=g(!0);u(()=>{return A.current=!0,()=>{if(A.current=!1,W.current)clearTimeout(W.current);if(T.current)clearTimeout(T.current);if(x.current)clearTimeout(x.current)}},[]);let k=P((y)=>{let I=JY(y),R=J6();Z(I.webTerminalEnabled),Y(I.vncAllowDirect),V(I.treeMaxDepth),Q(I.treeMaxEntries),B(R.refreshIntervalSec),U(R.folderPreviewDepth),J.current=JSON.stringify(I)},[]);u(()=>{k(_||{})},[_,k]);let O=Z0(()=>JSON.stringify(JY({workspaceSettings:{webTerminalEnabled:G,vncAllowDirect:X,treeMaxDepth:L,treeMaxEntries:K}})),[G,X,L,K]);u(()=>{if(O===J.current)return;if(W.current)clearTimeout(W.current);return W.current=setTimeout(async()=>{if(!A.current)return;let y=document.activeElement;if(y&&y.closest?.(".settings-number-stepper"))return;try{let I=await F7(JSON.parse(O));if(!A.current||!I?.ok||!I?.settings)return;if(J.current=O,j?.({workspaceSettings:I.settings}),$?.(null),D(!0),T.current)clearTimeout(T.current);T.current=setTimeout(()=>{if(A.current)D(!1)},4000)}catch(I){$?.(String(I?.message||I),"error")}},800),()=>{if(W.current)clearTimeout(W.current)}},[O,j,$]);let z=P((y)=>{let I=OY(y);if(B(I.refreshIntervalSec),U(I.folderPreviewDepth),M(!0),x.current)clearTimeout(x.current);x.current=setTimeout(()=>{if(A.current)M(!1)},3000)},[]);return F`
        <div class="settings-section">
            ${E&&F`
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
                <input type="checkbox" checked=${G} onChange=${(y)=>Z(y.target.checked)} />
            </div>
            <div class="settings-row">
                <label>Allow direct VNC targets</label>
                <input type="checkbox" checked=${X} onChange=${(y)=>Y(y.target.checked)} />
            </div>
            <p class="settings-hint">Terminal access updates immediately. Direct VNC target policy applies to new VNC requests.</p>

            <h3 style="margin-top:20px">Server scan guardrails</h3>
            <div class="settings-row">
                <label>Max tree depth</label>
                <${v_}
                    label="workspace tree max depth"
                    value=${L}
                    min=${1}
                    max=${8}
                    fallback=${4}
                    width="80px"
                    onChange=${V}
                />
                <span class="settings-hint" style="margin:0">caps all <code>/workspace/tree</code> requests</span>
            </div>
            <div class="settings-row">
                <label>Max entries per scan</label>
                <${v_}
                    label="workspace tree max entries"
                    value=${K}
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
                <${v_}
                    label="workspace refresh interval"
                    value=${q}
                    min=${15}
                    max=${300}
                    step=${15}
                    fallback=${60}
                    width="92px"
                    onChange=${(y)=>z({refreshIntervalSec:y})}
                />
            </div>
            <div class="settings-row">
                <label>Folder preview scan depth</label>
                <${v_}
                    label="folder preview scan depth"
                    value=${N}
                    min=${0}
                    max=${8}
                    fallback=${3}
                    width="80px"
                    onChange=${(y)=>z({folderPreviewDepth:y})}
                />
                <span class="settings-hint" style="margin:0">set to <code>0</code> to disable folder size preview scans</span>
            </div>
            <p class="settings-hint">Root and folder-expansion tree loads remain shallow; the folder size preview is the deepest workspace scan in the UI.</p>
        </div>
    `}var kY=J_(()=>{w0();P_();G9();C4()});var yY={};j1(yY,{EnvironmentSection:()=>cD});function Z9(_={}){let $=_.environmentSettings||_.settings||_.environment||{};return{variables:Array.isArray($.variables)?$.variables:[],overrides:$.overrides&&typeof $.overrides==="object"?$.overrides:{},count:Number($.count||0),overrideCount:Number($.overrideCount||0),keychainEnvNames:Array.isArray($.keychainEnvNames)?$.keychainEnvNames:[]}}function cD({settingsData:_,filter:$="",setStatus:j,mergeSettingsData:G}){let[Z,X]=C(()=>Z9(_||{})),[Y,L]=C({}),[V,K]=C(""),[Q,q]=C(""),[B,N]=C(null);u(()=>{X(Z9(_||{})),L({})},[_]);let U=P((W)=>{let T=Z9({environmentSettings:W?.settings||W});return X(T),G?.({environmentSettings:T}),L({}),T},[G]),E=P(async()=>{try{let W=await U7();if(W?.ok)U(W.settings);j?.("Environment refreshed.","info")}catch(W){j?.(String(W?.message||W),"error")}},[U,j]),D=P(async(W,T)=>{let x=String(W||"").trim();if(!x)return;N(x);try{let A=await y2({action:"set",name:x,value:String(T??"")});if(A?.ok)U(A.settings);if(j?.(`Saved environment override for ${x}.`,"info"),x===V.trim())K(""),q("")}catch(A){j?.(String(A?.message||A),"error")}finally{N(null)}},[U,V,j]),H=P(async(W)=>{let T=String(W||"").trim();if(!T)return;N(T);try{let x=await y2({action:"clear",name:T});if(x?.ok)U(x.settings);j?.(`Cleared environment override for ${T}.`,"info")}catch(x){j?.(String(x?.message||x),"error")}finally{N(null)}},[U,j]),M=Z0(()=>{let W=String($||"").trim().toLowerCase(),T=Array.isArray(Z.variables)?Z.variables:[];if(!W)return T;return T.filter((x)=>{return`${x?.name||""} ${x?.value||""} ${x?.source||""}`.toLowerCase().includes(W)})},[Z.variables,$]),J=P((W,T)=>{L((x)=>({...x||{},[W]:T}))},[]);return F`
        <div class="settings-section">
            <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:12px; margin-bottom:12px;">
                <div>
                    <h3 style="margin-top:0">Environment</h3>
                    <p class="settings-hint" style="margin-top:4px">
                        Showing non-keychain environment variables only. Overrides are stored in extension KV and applied to <code>process.env</code>, so subsequent tool calls inherit them.
                    </p>
                </div>
                <button type="button" class="settings-secondary-btn" onClick=${E}>Refresh</button>
            </div>

            <div class="settings-row" style="align-items:flex-start; gap:10px;">
                <label>Add override</label>
                <div style="display:grid; grid-template-columns:minmax(180px, 0.7fr) minmax(240px, 1fr) auto; gap:8px; flex:1;">
                    <input
                        type="text"
                        value=${V}
                        placeholder="VARIABLE_NAME"
                        spellcheck="false"
                        onInput=${(W)=>K(W.target.value)}
                    />
                    <input
                        type="text"
                        value=${Q}
                        placeholder="value"
                        spellcheck="false"
                        onInput=${(W)=>q(W.target.value)}
                    />
                    <button
                        type="button"
                        disabled=${!V.trim()||B===V.trim()}
                        onClick=${()=>D(V,Q)}
                    >Save</button>
                </div>
            </div>

            <p class="settings-hint">
                ${Z.count} variables visible • ${Z.overrideCount} overrides active • ${Z.keychainEnvNames.length} keychain-injected variables hidden
            </p>

            <div class="settings-tool-list" style="max-height:58vh; overflow:auto;">
                ${M.map((W)=>{let T=String(W?.name||""),x=Object.prototype.hasOwnProperty.call(Y,T)?Y[T]:W.value,A=x!==W.value,k=B===T;return F`
                        <div class="settings-tool-row" key=${T} style="grid-template-columns:minmax(180px,0.45fr) minmax(240px,1fr) auto auto; align-items:center;">
                            <span class="settings-tool-name" title=${T}>${T}</span>
                            <input
                                type="text"
                                value=${x}
                                spellcheck="false"
                                onInput=${(O)=>J(T,O.target.value)}
                                style="min-width:0; width:100%; font-family:var(--font-mono, monospace);"
                            />
                            <span class="settings-tool-kind" title=${W.overridden?"Overridden in KV":"Inherited from process environment"}>
                                ${W.overridden?"override":"process"}
                            </span>
                            <span style="display:flex; gap:6px; justify-content:flex-end;">
                                <button type="button" disabled=${k||!A} onClick=${()=>D(T,x)}>Save</button>
                                <button type="button" disabled=${k||!W.overridden} onClick=${()=>H(T)}>Clear</button>
                            </span>
                        </div>
                    `})}
                ${M.length===0&&F`<p class="settings-hint">No environment variables match "${$}".</p>`}
            </div>
        </div>
    `}var MY=J_(()=>{w0();P_()});var wY={};j1(wY,{ProvidersSection:()=>hD});function lD(_){switch(_){case"oauth":return"OAuth";case"api_key":return"API key";case"custom":return"Configured";default:return"Configured"}}function hD({providers:_,setStatus:$}){let[j,G]=C(null),[Z,X]=C(null),[Y,L]=C({}),V=P((D,H)=>{L((M)=>({...M,[D]:H}))},[]),K=P(async(D)=>{let H=(Y.apiKey||"").trim();if(!H){$?.("API key cannot be empty.","error");return}G(D),$?.(`Configuring ${D}…`,"info");try{let M=JSON.stringify({provider:D,method:"api_key",api_key:H}),J=await W1("default",`/login __step2 ${M}`,null,[]);if(J?.command?.status==="error"){$?.(J.command.message,"error");return}$?.(J?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),Q=P(async(D,H)=>{G(D),$?.(`Configuring ${D}…`,"info");try{let M={provider:D,method:"custom"};for(let T of H.customFields||[])M[T.key]=(Y[T.key]||"").trim();let J=JSON.stringify(M),W=await W1("default",`/login __step2 ${J}`,null,[]);if(W?.command?.status==="error"){$?.(W.command.message,"error");return}$?.(W?.command?.message||`${D} configured.`,"success"),X(null),L({})}catch(M){$?.(String(M.message||M),"error")}finally{G(null)}},[Y,$]),q=P(async(D)=>{G(D),$?.(`Starting OAuth for ${D}…`,"info");try{let H=JSON.stringify({provider:D}),J=(await W1("default",`/login __step1 ${H}`,null,[]))?.command?.message||"";if(J.includes("http")){let W=J.match(/(https?:\/\/[^\s)]+)/);if(W)window.open(W[1],"_blank","noopener"),$?.("OAuth window opened. Complete the sign-in flow, then close this message.","success");else $?.(J,"success")}else $?.(J||`OAuth flow started for ${D}. Check the chat.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[$]),B=P(async(D)=>{if(j)return;G(D),$?.(`Logging out ${D}…`,"info");try{await W1("default",`/logout ${D}`,null,[]),$?.(`Logged out ${D}. Restart may be needed.`,"success")}catch(H){$?.(String(H.message||H),"error")}finally{G(null)}},[j,$]),N=_||[],U=(D)=>Z===D,E=(D)=>{X((H)=>H===D?null:D),L({})};return F`
        <div class="settings-section">
            <h3>Providers</h3>
            <div class="settings-provider-list">
                ${N.map((D)=>F`
                    <div class=${`settings-provider-card${D.configured?" configured":""}`}>
                        <div class="settings-provider-card-header" onClick=${()=>!D.configured&&E(D.id)}>
                            <div class="settings-provider-card-title">
                                <strong>${D.name}</strong>
                                <span class="settings-provider-id">${D.id}</span>
                                ${D.configured&&F`<span class="settings-tag settings-tag-skill">${lD(D.authType)}</span>`}
                            </div>
                            <div class="settings-provider-card-meta">
                                ${D.hasOAuth&&F`<span class="settings-tag">OAuth</span>`}
                                ${D.hasApiKey&&F`<span class="settings-tag">API Key</span>`}
                                ${D.isCustom&&F`<span class="settings-tag">Custom</span>`}
                            </div>
                            <div class="settings-provider-card-actions">
                                ${D.configured?F`
                                    <button class="settings-addon-btn settings-addon-btn-remove"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),B(D.id)}}
                                    >${j===D.id?"…":"Logout"}</button>
                                    <button class="settings-addon-btn"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Reconfigure</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install"
                                        disabled=${j===D.id} onClick=${(H)=>{H.stopPropagation(),E(D.id)}}
                                    >Set up</button>
                                `}
                            </div>
                        </div>

                        ${U(D.id)&&F`
                            <div class="settings-provider-setup">
                                <p class="settings-hint settings-provider-setup-hint">Sign-in flows open in the browser. In narrow panes the setup form stacks vertically to avoid clipping.</p>
                                ${D.hasOAuth&&F`
                                    <div class="settings-provider-method">
                                        <button class="settings-addon-btn settings-addon-btn-install"
                                            disabled=${j===D.id}
                                            onClick=${()=>q(D.id)}>
                                            ${j===D.id?"Starting…":"Sign in with OAuth"}
                                        </button>
                                    </div>
                                `}
                                ${D.hasApiKey&&F`
                                    <div class="settings-provider-method">
                                        <div class="settings-provider-field-row">
                                            <label>API Key</label>
                                            <input type="password" value=${Y.apiKey||""}
                                                onInput=${(H)=>V("apiKey",H.target.value)}
                                                placeholder=${D.apiKeyHint||"Enter API key"} />
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id||!(Y.apiKey||"").trim()}
                                                onClick=${()=>K(D.id)}>
                                                ${j===D.id?"…":"Save"}
                                            </button>
                                        </div>
                                    </div>
                                `}
                                ${D.isCustom&&F`
                                    <div class="settings-provider-method">
                                        ${(D.customFields||[]).map((H)=>F`
                                            <div class="settings-provider-field-row">
                                                <label>${H.label}${H.required?" *":""}</label>
                                                <input type="text" value=${Y[H.key]||""}
                                                    onInput=${(M)=>V(H.key,M.target.value)}
                                                    placeholder=${H.placeholder||""} />
                                            </div>
                                        `)}
                                        <div class="settings-provider-form-actions">
                                            <button class="settings-addon-btn settings-addon-btn-install"
                                                disabled=${j===D.id}
                                                onClick=${()=>Q(D.id,D)}>
                                                ${j===D.id?"Configuring…":"Save configuration"}
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
    `}var TY=J_(()=>{w0();P_()});var xY={};j1(xY,{ModelsSection:()=>iD});function nD(_){return typeof _==="string"&&_.toLowerCase()==="anthropic"}function dD({thinkingLevel:_,supportsThinking:$,provider:j,availableLevels:G,onSetLevel:Z,disabled:X}){let Y=nD(j)?pD:rD,L=G&&G.length>1?G:["off","minimal","low","medium","high"],V=Math.max(0,L.indexOf(_??"off"));if(!$)return F`<div class="settings-thinking-slider"><label>Thinking level</label><p class="settings-hint" style="margin:4px 0 0">Current model does not support thinking.</p></div>`;return F`
        <div class="settings-thinking-slider">
            <label>Thinking level: <strong>${Y[L[V]]||L[V]}</strong></label>
            <div class="settings-slider-track">
                <input type="range" min="0" max=${L.length-1} step="1" value=${V} disabled=${X}
                    onInput=${(K)=>Z(L[parseInt(K.target.value,10)])} />
                <div class="settings-slider-labels">
                    ${L.map((K,Q)=>F`<span class=${Q===V?"active":""} onClick=${()=>!X&&Z(K)}>${Y[K]||K}</span>`)}
                </div>
            </div>
        </div>
    `}function iD({filter:_=""}){let[$,j]=C(null),[G,Z]=C(!1),[X,Y]=C("off"),[L,V]=C(!1),[K,Q]=C(["off"]),[q,B]=C(!1),N=P(async()=>{let x=await w4();if(j(x),x.thinking_level)Y(x.thinking_level);if(V(Boolean(x.supports_thinking)),Array.isArray(x.available_thinking_levels)&&x.available_thinking_levels.length>0)Q(x.available_thinking_levels);return x},[]);u(()=>{N().catch(()=>j({models:[],model_options:[]}))},[]);let U=P(async(x)=>{if(G)return;Z(!0);try{await W1("default",`/model ${x}`,null,[]),await N()}catch(A){console.error("Failed to switch model:",A)}finally{Z(!1)}},[G,N]),E=P(async(x)=>{if(q)return;B(!0),Y(x);try{let A=await W1("default",`/thinking ${x}`,null,[]);if(A?.command?.thinking_level)Y(A.command.thinking_level);V(A?.command?.supports_thinking!==!1),await N()}catch(A){console.error("Failed to set thinking:",A),await N().catch((k)=>{})}finally{B(!1)}},[q,N]);if(!$)return F`<div class="settings-loading">Loading models\u2026</div>`;let D=$.model_options||[],H=$.current,J=D.find((x)=>x.label===H)?.provider||"",W=_.toLowerCase(),T=W?D.filter((x)=>x.label.toLowerCase().includes(W)||(x.provider||"").toLowerCase().includes(W)):D;return F`
        <div class="settings-models-split">
            <div class="settings-models-summary settings-hint">Model and provider names may wrap in narrow panes to avoid clipping.</div>
            <div class="settings-models-list">
                <table class="settings-table settings-borderless settings-models-table">
                    <thead><tr><th style="width:32px"></th><th>Model</th><th>Provider</th><th>Context</th><th style="text-align:center">Reasoning</th></tr></thead>
                    <tbody>
                        ${T.map((x)=>F`
                            <tr class=${x.label===H?"settings-row-active":""}>
                                <td><input type="radio" name="settings-model" checked=${x.label===H} disabled=${G} onChange=${()=>U(x.label)} /></td>
                                <td>${x.name||x.label}</td><td>${x.provider}</td>
                                <td>${x.context_window?(x.context_window/1000).toFixed(0)+"K":"—"}</td>
                                <td style="text-align:center">${x.reasoning?"\uD83E\uDDE0":"—"}</td>
                            </tr>
                        `)}
                        ${T.length===0&&F`<tr><td colspan="5" class="settings-empty">No models match "${_}"</td></tr>`}
                    </tbody>
                </table>
            </div>
            <div class="settings-models-footer">
                <${dD}
                    thinkingLevel=${X}
                    supportsThinking=${L}
                    provider=${J}
                    availableLevels=${K}
                    onSetLevel=${E}
                    disabled=${q||G} />
            </div>
        </div>
    `}var pD,rD;var IY=J_(()=>{w0();P_();pD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"max"},rD={off:"off",minimal:"minimal",low:"low",medium:"medium",high:"high",xhigh:"xhigh"}});var PY={};j1(PY,{ThemeSection:()=>oD});function CY(_={}){return{uiTheme:typeof _.uiTheme==="string"&&_.uiTheme.trim()?_.uiTheme.trim():"default",uiTint:typeof _.uiTint==="string"&&_.uiTint.trim()?_.uiTint.trim():""}}function oD({themes:_,colorKeys:$,settingsData:j,setStatus:G,mergeSettingsData:Z}){let[X,Y]=C("default"),[L,V]=C(""),[K,Q]=C(!1),q=g(""),B=g(null),N=g(!0);u(()=>{return N.current=!0,()=>{N.current=!1}},[]);let U=P((J)=>{let W=CY(J);Y(W.uiTheme),V(W.uiTint),q.current=JSON.stringify(W)},[]);u(()=>{if(j){U(j);return}U({uiTheme:document.documentElement.dataset.colorTheme||"default",uiTint:document.documentElement.dataset.tint||""})},[j,U]);let E=P((J,W)=>{F6({theme:J,tint:W||null}),Y(J||"default"),V(W||"")},[]),D=Z0(()=>JSON.stringify(CY({uiTheme:X,uiTint:L})),[X,L]);u(()=>{if(D===q.current)return;if(B.current)clearTimeout(B.current);return B.current=setTimeout(async()=>{if(!N.current)return;Q(!0);try{let J=await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:D}),W=await J.json().catch(()=>({}));if(!N.current)return;if(!J.ok||!W?.ok||!W?.settings){G?.(W?.error||"Failed to save appearance settings.","error");return}q.current=D,Z?.(W.settings),G?.("Appearance synced across clients.","success")}catch(J){if(!N.current)return;console.warn("[settings/appearance] Failed to persist appearance settings.",J),G?.("Failed to save appearance settings.","error")}finally{if(N.current)Q(!1)}},250),()=>{if(B.current)clearTimeout(B.current)}},[D,Z,G]);let H=$||[],M=_||[];return F`
        <div class="settings-section">
            ${K&&F`<div class="settings-hint" style="margin:0 0 12px 0;">Syncing appearance…</div>`}
            <div class="settings-tint-row">
                <label class="settings-tint-label">
                    <input type="radio" name="settings-theme"
                        checked=${X==="default"}
                        onChange=${()=>E("default",L)} />
                    <strong>Default</strong>
                    <span class="settings-hint" style="margin:0 0 0 6px">auto (light/dark)</span>
                </label>
                <div class="settings-tint-picker">
                    <label class="settings-hint" style="margin:0">Tint:</label>
                    <input type="color"
                        value=${L||"#1d9bf0"}
                        onInput=${(J)=>{let W=J.target.value;if(V(W),X==="default")F6({theme:"default",tint:W})}} />
                    ${L&&F`
                        <button class="settings-tint-clear" onClick=${()=>E("default","")}
                            title="Clear tint">\u2715</button>
                    `}
                    <span class="settings-tint-hex">${L||"none"}</span>
                </div>
            </div>

            <table class="settings-table settings-borderless settings-theme-table">
                <thead>
                    <tr>
                        <th></th><th>Theme</th><th>Mode</th>
                        ${H.map((J)=>F`<th class="settings-swatch-header">${J.replace(/([A-Z])/g," $1").trim()}</th>`)}
                    </tr>
                </thead>
                <tbody>
                    ${M.filter((J)=>J.name!=="default").map((J)=>F`
                        <tr class=${J.name===X?"settings-row-active":""}
                            style="cursor:pointer" onClick=${()=>E(J.name,"")}>
                            <td><input type="radio" name="settings-theme" checked=${J.name===X} onChange=${()=>E(J.name,"")} /></td>
                            <td><strong>${J.label}</strong></td>
                            <td>${J.mode}</td>
                            ${H.map((W)=>{let T=J.colors?.[W];return F`<td class="settings-swatch-cell">
                                    ${T?F`<span class="settings-color-swatch" style=${"background:"+T} title=${T}></span>`:"—"}
                                </td>`})}
                        </tr>
                    `)}
                </tbody>
            </table>
        </div>
    `}var fY=J_(()=>{w0();_5()});var SY={};j1(SY,{__scheduledTasksSettingsTest:()=>$z,ScheduledTasksSection:()=>_z});function P4(_){if(!_)return"—";let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString(void 0,{month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function RY(_){let $=Number(_);if(!Number.isFinite($))return"—";if($<1000)return`${Math.round($)}ms`;return`${($/1000).toFixed($<1e4?1:0)}s`}function X9(_){if(!_)return"—";if(_.schedule_type==="once")return`once · ${P4(_.schedule_value)}`;if(_.schedule_type==="interval")return`interval · ${_.schedule_value}`;if(_.schedule_type==="cron")return`cron · ${_.schedule_value}`;return`${_.schedule_type||"schedule"} · ${_.schedule_value||"—"}`}function Y9(_){let $=_?.task_kind||"agent";return $==="internal"?"internal/protected":$}function L9(_){return(_?.task_kind||"agent")==="internal"}function aD(_){if(!_)return"";let $=String(_).replace(/\s+/g," ").trim();return $.length>180?`${$.slice(0,179)}…`:$}function A6({children:_,type:$="neutral"}){return F`<span class=${`settings-task-pill settings-task-pill-${$}`}>${_}</span>`}function tD({task:_}){let $=Array.isArray(_?.recent_run_logs)?_.recent_run_logs:[];if(!$.length)return F`<p class="settings-hint">No run logs recorded yet.</p>`;return F`
        <div class="settings-task-run-list">
            ${$.map((j)=>F`
                <div class=${`settings-task-run-row settings-task-run-${j.status||"unknown"}`}>
                    <div class="settings-task-run-meta">
                        <${A6} type=${j.status==="error"?"error":"success"}>${j.status||"unknown"}<//>
                        <span>${P4(j.run_at)}</span>
                        <span>${RY(j.duration_ms)}</span>
                    </div>
                    <div class="settings-task-run-summary">
                        ${j.error_summary||aD(j.error)||j.result_summary||j.result||"No summary"}
                    </div>
                </div>
            `)}
        </div>
    `}function eD({task:_,onAction:$}){if(!_)return F`<div class="settings-task-detail-empty">Select a task to inspect schedule, status, and run history.</div>`;let j=L9(_);return F`
        <div class="settings-task-detail">
            <div class="settings-task-detail-header">
                <div>
                    <h4>${_.summary||_.id}</h4>
                    <code>${_.id}</code>
                </div>
                <div class="settings-task-detail-actions">
                    ${_.status==="active"&&F`<button onClick=${()=>$("pause",_)}>Pause</button>`}
                    ${_.status==="paused"&&F`<button onClick=${()=>$("resume",_)}>Resume</button>`}
                    <button class="danger" onClick=${()=>$("delete",_)}>Delete</button>
                </div>
            </div>
            <div class="settings-task-detail-grid">
                <span>Status</span><strong>${_.status||"—"}</strong>
                <span>Kind</span><strong>${Y9(_)}</strong>
                <span>Schedule</span><strong>${X9(_)}</strong>
                <span>Next run</span><strong>${P4(_.next_run)}</strong>
                <span>Last run</span><strong>${P4(_.last_run)}</strong>
                <span>Last result</span><strong>${_.latest_run_log?.status||_.last_result||"—"}</strong>
                <span>Chat</span><code>${_.chat_jid||"—"}</code>
                <span>Model</span><code>${_.model||"default"}</code>
                ${_.cwd&&F`<span>CWD</span><code>${_.cwd}</code>`}
                ${_.timeout_sec&&F`<span>Timeout</span><strong>${_.timeout_sec}s</strong>`}
                ${j&&F`<span>Protection</span><strong>Internal task actions require explicit confirmation.</strong>`}
            </div>
            <div class="settings-task-command-block">
                <strong>${_.task_kind==="shell"?"Command":"Prompt"}</strong>
                <pre>${_.command||_.prompt||_.command_summary||_.prompt_summary||_.summary||"—"}</pre>
            </div>
            <h4>Recent runs</h4>
            <${tD} task=${_} />
        </div>
    `}function _z({filter:_="",setStatus:$}){let[j,G]=C([]),[Z,X]=C({active:0,paused:0,completed:0}),[Y,L]=C("all"),[V,K]=C(""),[Q,q]=C(!0),[B,N]=C(null),[U,E]=C(null),[D,H]=C(null),[M,J]=C(!1),W=P(async(O={})=>{q(!0),N(null);try{let z=await q7({status:Y,chatJid:V.trim()||void 0,limit:50,includeRunLogs:!0,runLogLimit:5});G(z.tasks||[]),X(z.counts||{active:0,paused:0,completed:0});let y=O.selectedId||U,I=(z.tasks||[]).find((R)=>R.id===y)||(z.tasks||[])[0]||null;E(I?.id||null),H(I)}catch(z){N(z?.message||"Failed to load scheduled tasks.")}finally{q(!1)}},[Y,V,U]);u(()=>{W()},[W]);let T=String(_||"").trim().toLowerCase(),x=Z0(()=>{if(!T)return j;return j.filter((O)=>[O.id,O.chat_jid,O.status,O.task_kind,O.schedule_type,O.schedule_value,O.summary,O.prompt_summary,O.command_summary,O.latest_run_log?.error_summary].some((z)=>String(z||"").toLowerCase().includes(T)))},[j,T]),A=P((O)=>{E(O?.id||null),H(O||null)},[]),k=P(async(O,z)=>{if(!z||M)return;let y=L9(z),I=z.summary||z.command_summary||z.prompt_summary||z.id,R=O==="delete"?`Delete scheduled task ${z.id}?

${I}`:`${O==="pause"?"Pause":"Resume"} scheduled task ${z.id}?

${I}`;if(!window.confirm(R))return;if(y&&!window.confirm(`Task ${z.id} is internal/protected. Continue with ${O}?`))return;J(!0),$?.(`${O==="delete"?"Deleting":O==="pause"?"Pausing":"Resuming"} ${z.id}…`,"info");try{await Q7(O,z.id,{allowInternal:y}),$?.(`Scheduled task ${z.id} ${O==="delete"?"deleted":O==="pause"?"paused":"resumed"}.`,"success"),await W({selectedId:O==="delete"?null:z.id})}catch(f){$?.(f?.message||`Failed to ${O} task.`,"error")}finally{J(!1)}},[M,W,$]);return F`
        <div class="settings-section settings-scheduled-tasks-section">
            <div class="settings-task-toolbar">
                <div class="settings-task-counts">
                    <${A6} type="active">Active ${Z.active||0}<//>
                    <${A6} type="paused">Paused ${Z.paused||0}<//>
                    <${A6} type="completed">Completed ${Z.completed||0}<//>
                </div>
                <div class="settings-task-filters">
                    <select value=${Y} onChange=${(O)=>L(O.target.value)}>
                        ${sD.map((O)=>F`<option value=${O}>${O==="all"?"All statuses":O}</option>`)}
                    </select>
                    <input type="text" placeholder="Filter chat JID…" value=${V} onInput=${(O)=>K(O.target.value)} />
                    <button onClick=${()=>W()} disabled=${Q}>Refresh</button>
                </div>
            </div>

            ${Q&&F`<div class="settings-loading settings-loading-pane"><span class="settings-spinner"></span><span>Loading scheduled tasks…</span></div>`}
            ${B&&F`<div class="settings-error-state">${B}</div>`}
            ${!Q&&!B&&j.length===0&&F`
                <div class="settings-empty-state">
                    <strong>No scheduled tasks found.</strong>
                    <p>Tasks created with reminders, `/j`, or the scheduler tool will appear here.</p>
                </div>
            `}
            ${!Q&&!B&&j.length>0&&F`
                <div class="settings-task-layout">
                    <div class="settings-task-list" role="listbox" aria-label="Scheduled tasks">
                        ${x.map((O)=>F`
                            <button class=${`settings-task-row ${O.id===U?"active":""}`} onClick=${()=>A(O)}>
                                <span class="settings-task-row-main">
                                    <strong>${O.summary||O.id}</strong>
                                    <span>${X9(O)}</span>
                                </span>
                                <span class="settings-task-row-meta">
                                    <${A6} type=${O.status||"neutral"}>${O.status}<//>
                                    <${A6}>${Y9(O)}<//>
                                </span>
                                <span class="settings-task-row-times">Next ${P4(O.next_run)} · Last ${P4(O.last_run)}${O.latest_run_log?.status?` · ${O.latest_run_log.status}`:""}</span>
                            </button>
                        `)}
                        ${x.length===0&&F`<p class="settings-hint">No tasks match “${_}”.</p>`}
                    </div>
                    <${eD} task=${D&&x.some((O)=>O.id===D.id)?D:x[0]} onAction=${k} />
                </div>
            `}
        </div>
    `}var sD,$z;var uY=J_(()=>{w0();P_();sD=["all","active","paused","completed"];$z={formatDateTime:P4,formatDuration:RY,labelForSchedule:X9,kindLabel:Y9,isProtectedTask:L9}});function gY(_){return String(_||"").toLowerCase().replace(/^[@/]+/,"").replace(/\s+/g," ").trim()}function k6(_){return typeof _==="string"&&_.trim().length>0}function K9(_,...$){let j=gY(_);if(!j)return!0;let G=$.map((Z)=>gY(Z)).filter(Boolean);for(let Z of G)if(Z.startsWith(j)||Z.includes(j))return!0;return!1}function bY(_){if(!Array.isArray(_))return null;let $=[],j=new Set;for(let G of _){let Z=String(G||"").trim();if(!Z)continue;let X=Z.toLowerCase();if(j.has(X))continue;j.add(X),$.push(Z)}return $}function a$(_){let $=_&&typeof _==="object"?_:{};return{workspaceCommands:bY($.workspaceCommands),slashCommands:bY($.slashCommands)}}function vY(_,$){if(!Array.isArray(_))return!0;return _.some((j)=>j.toLowerCase()===$.toLowerCase())}function jz(_){let $=Array.isArray(_?.commands)?_.commands:[],j=a$(_?.settings),G=String(_?.query||"");return $.filter((Z)=>vY(j.workspaceCommands,Z.id)).filter((Z)=>K9(G,Z.label,Z.description,...Z.keywords||[])).map((Z)=>({key:`workspace:${Z.id}`,kind:"workspace",title:Z.label,subtitle:Z.description,searchText:`${Z.label} ${Z.description} ${(Z.keywords||[]).join(" ")}`.trim(),visualHint:Z.label.slice(0,1).toUpperCase()||"W",categoryLabel:"Workspace",actionHint:"Run",commandId:Z.id}))}function Gz(_){let $=Array.isArray(_?.agents)?_.agents:[],j=String(_?.query||""),G=new Set;return $.filter((Z)=>{let X=k6(Z?.chat_jid)?Z.chat_jid.trim():"";if(!X||G.has(X))return!1;if(Z?.archived_at)return!1;return G.add(X),!0}).filter((Z)=>K9(j,`@${String(Z?.agent_name||"").trim()}`,Z?.session_name,Z?.chat_jid)).map((Z)=>{let X=k6(Z?.agent_name)?Z.agent_name.trim():String(Z?.chat_jid||"").replace(/^[^:]+:/,""),Y=k6(Z?.session_name)?Z.session_name.trim():"",L=String(Z?.chat_jid||"").trim();return{key:`agent:${L}`,kind:"agent",title:`@${X}`,subtitle:Y||L,searchText:`@${X} ${Y} ${L}`.trim(),visualHint:X.slice(0,1).toUpperCase()||"@",categoryLabel:"Agent",actionHint:"Open",chatJid:L}})}function Zz(_){let $=Array.isArray(_?.slashCommands)?_.slashCommands:[],j=a$(_?.settings),G=String(_?.query||""),Z=new Set;return $.filter((X)=>{let Y=k6(X?.name)?X.name.trim():"";if(!Y||Z.has(Y.toLowerCase()))return!1;return Z.add(Y.toLowerCase()),vY(j.slashCommands,Y)}).filter((X)=>K9(G,X?.name,X?.description,X?.source)).map((X)=>{let Y=String(X?.name||"").trim(),L=k6(X?.description)?X.description.trim():"slash command",V=k6(X?.source)?X.source.trim():"";return{key:`slash:${Y}`,kind:"slash",title:Y,subtitle:L,searchText:`${Y} ${L} ${String(X?.source||"")}`.trim(),visualHint:"/",categoryLabel:V||"Slash",actionHint:"Insert",commandName:Y}})}function mY(_){return[...Gz({agents:_?.agents,query:_?.query}),...jz({commands:_?.workspaceCommands,settings:_?.settings,query:_?.query}),...Zz({slashCommands:_?.slashCommands,settings:_?.settings,query:_?.query})]}var s$;var V9=J_(()=>{s$=[{id:"toggle-workspace",label:"Toggle workspace",description:"Show or hide the workspace sidebar.",keywords:["workspace","sidebar","explorer"]},{id:"open-explorer",label:"Open explorer",description:"Open the workspace explorer sidebar.",keywords:["workspace","explorer","sidebar"]},{id:"toggle-chat-only",label:"Chat-only mode",description:"Toggle chat-only mode.",keywords:["chat","mode","layout"]},{id:"open-terminal-tab",label:"Open terminal in tab",description:"Open the terminal pane in a workspace tab.",keywords:["terminal","shell","tab"]},{id:"open-vnc-tab",label:"Open VNC in tab",description:"Open the VNC viewer in a workspace tab.",keywords:["vnc","remote","desktop","tab"]},{id:"toggle-terminal-dock",label:"Toggle terminal dock",description:"Show or hide the terminal dock.",keywords:["terminal","dock","shell"]},{id:"open-settings",label:"Settings",description:"Open the settings dialog.",keywords:["settings","preferences","config"]}]});var hY={};j1(hY,{QuickActionsSection:()=>Xz});function cY(_,...$){let j=String(_||"").trim().toLowerCase();if(!j)return!0;return $.some((G)=>String(G||"").toLowerCase().includes(j))}function lY(_){if(!Array.isArray(_))return null;return new Set(_.map(($)=>String($||"").trim().toLowerCase()).filter(Boolean))}function Xz({filter:_="",setStatus:$,mergeSettingsData:j}){let[G,Z]=C(()=>s$.map((x)=>x.id)),[X,Y]=C([]),[L,V]=C([]),[K,Q]=C(!0),[q,B]=C(!1),N=P(async()=>{Q(!0);try{let[x,A]=await Promise.all([K5(),L5("web:default").catch(()=>({commands:[]}))]),k=a$(x?.settings),O=Array.isArray(A?.commands)?A.commands:[];V(O),Z(Array.isArray(k.workspaceCommands)?k.workspaceCommands:s$.map((z)=>z.id)),Y(Array.isArray(k.slashCommands)?k.slashCommands:O.map((z)=>String(z?.name||"").trim()).filter(Boolean))}catch(x){$?.(String(x?.message||x),"error")}finally{Q(!1)}},[$]);u(()=>{N()},[N]);let U=Z0(()=>lY(G),[G]),E=Z0(()=>lY(X),[X]),D=Z0(()=>s$.filter((x)=>cY(_,x.label,x.description,...x.keywords||[])),[_]),H=Z0(()=>L.filter((x)=>cY(_,x?.name,x?.description,x?.source)),[L,_]),M=P((x)=>{Z((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(k.has(x))k.delete(x);else k.add(x);return s$.map((O)=>O.id).filter((O)=>k.has(O))})},[]),J=P((x)=>{Y((A)=>{let k=new Set((Array.isArray(A)?A:[]).map((O)=>String(O||"").trim()).filter(Boolean));if(k.has(x))k.delete(x);else k.add(x);return L.map((O)=>String(O?.name||"").trim()).filter((O)=>O&&k.has(O))})},[L]),W=P(()=>{Z(s$.map((x)=>x.id)),Y(L.map((x)=>String(x?.name||"").trim()).filter(Boolean))},[L]),T=P(async()=>{if(q)return;B(!0),$?.("Saving quick actions…","info");try{let x=await B7({workspaceCommands:G,slashCommands:X}),A=a$(x?.settings);j?.({quickActions:A}),window.dispatchEvent(new CustomEvent("piclaw:quick-actions-settings-updated",{detail:{settings:A}})),$?.("Quick Actions saved.","success")}catch(x){$?.(String(x?.message||x),"error")}finally{B(!1)}},[j,q,$,X,G]);if(K)return F`<div class="settings-loading">Loading…</div>`;return F`
        <div class="settings-section">
            <h3>Timeline Quick Actions</h3>
            <p class="settings-hint">
                Choose which actions appear in the timeline typeahead. Agents are always pinned first, then workspace commands, then slash commands.
            </p>

            <div class="settings-row" style="align-items:center; gap:10px; margin-bottom:12px;">
                <button class="settings-addon-btn" onClick=${W} disabled=${q}>Enable all</button>
                <button class="settings-addon-btn settings-addon-btn-install" onClick=${T} disabled=${q}>
                    ${q?"Saving…":"Save & apply"}
                </button>
            </div>

            <h3 style="margin-top:8px;">Workspace commands</h3>
            <div class="settings-subsection-list">
                ${D.map((x)=>{let A=U?U.has(x.id.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${x.id}>
                            <input type="checkbox" checked=${A} onChange=${()=>M(x.id)} />
                            <div>
                                <div>${x.label}</div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x.description}</div>
                            </div>
                        </label>
                    `})}
                ${D.length===0&&F`<div class="settings-hint">No workspace commands match this filter.</div>`}
            </div>

            <h3 style="margin-top:20px;">Slash commands</h3>
            <div class="settings-subsection-list">
                ${H.map((x)=>{let A=String(x?.name||"").trim(),k=E?E.has(A.toLowerCase()):!0;return F`
                        <label class="settings-checkbox-row" key=${A}>
                            <input type="checkbox" checked=${k} onChange=${()=>J(A)} />
                            <div>
                                <div><code>${A}</code></div>
                                <div class="settings-hint" style="margin:2px 0 0 0;">${x?.description||"slash command"}</div>
                            </div>
                        </label>
                    `})}
                ${H.length===0&&F`<div class="settings-hint">No slash commands match this filter.</div>`}
            </div>
        </div>
    `}var pY=J_(()=>{w0();P_();V9()});var rY={};j1(rY,{KeychainSection:()=>Kz});function Yz(_){if(!_)return"—";try{return new Date(_).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric"})}catch{return _}}function Kz({filter:_=""}){let[$,j]=C([]),[G,Z]=C(!0),[X,Y]=C(null),[L,V]=C(!1),[K,Q]=C(""),[q,B]=C(""),[N,U]=C(""),[E,D]=C(""),[H,M]=C(""),[J,W]=C("secret"),[T,x]=C(!1),[A,k]=C({}),[O,z]=C(null),[y,I]=C(null),[R,f]=C(null),v=g(null),l=g(null),h=g(null),n=P(async()=>{Z(!0),Y(null);try{let j0=await(await fetch("/agent/keychain")).json();if(j0?.ok)j(j0.entries||[]);else Y(j0?.error||"Failed to load keychain.")}catch(s){Y("Failed to load keychain.")}finally{Z(!1)}},[]);u(()=>{n()},[n]);let b=P(async()=>{let s=K.trim(),j0=q;if(!s||!j0)return;x(!0);try{let C0=await(await fetch("/agent/keychain",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,secret:j0,type:J,username:N.trim()||void 0,userNote:E,agentNote:H})})).json();if(C0?.ok)Q(""),B(""),U(""),D(""),M(""),W("secret"),V(!1),await n();else Y(C0?.error||"Failed to add entry.")}catch{Y("Failed to add entry.")}finally{x(!1)}},[K,q,N,E,H,J,n]),$0=P(async(s)=>{try{let z0=await(await fetch("/agent/keychain",{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s})})).json();if(z0?.ok)I(null),f((C0)=>C0?.name===s?null:C0),await n();else Y(z0?.error||"Failed to delete entry.")}catch{Y("Failed to delete entry.")}},[n]),E0=P(async(s)=>{let j0=s?.name;if(!j0)return;let z0=A[j0]||{},C0=Object.prototype.hasOwnProperty.call(z0,"userNote")?z0.userNote:s.userNote||"",h0=Object.prototype.hasOwnProperty.call(z0,"agentNote")?z0.agentNote:s.agentNote||"";z(j0);try{let G_=await(await fetch("/agent/keychain/notes",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:j0,userNote:C0,agentNote:h0})})).json();if(G_?.ok)k((m0)=>{let a0={...m0||{}};return delete a0[j0],a0}),await n();else Y(G_?.error||"Failed to save notes.")}catch{Y("Failed to save notes.")}finally{z(null)}},[A,n]),V0=P((s,j0,z0)=>{k((C0)=>({...C0||{},[s]:{...(C0||{})[s]||{},[j0]:z0}}))},[]),K0=P(async(s,j0,z0)=>{try{let h0=await(await fetch("/agent/keychain/reveal",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:s,master_password:j0||void 0,totp_code:z0||void 0})})).json();if(h0?.ok)f({name:s,phase:"revealed",secret:h0.secret,username:h0.username,masterPassword:j0});else if(h0?.needs_master_password)f((n0)=>({name:s,phase:"password",masterPassword:"",error:n0?.name===s&&n0?.masterPassword?h0.error:null})),requestAnimationFrame(()=>l.current?.focus());else if(h0?.needs_totp)f((n0)=>({name:s,phase:"totp",masterPassword:j0,totpCode:"",error:n0?.name===s&&n0?.phase==="totp"&&n0?.totpCode?h0.error:null})),requestAnimationFrame(()=>h.current?.focus());else f({name:s,phase:"error",error:h0?.error||"Failed to reveal."})}catch{f({name:s,phase:"error",error:"Failed to reveal."})}},[]),X0=P((s)=>{if(R?.name===s&&R?.phase==="revealed"){f(null);return}K0(s,null,null)},[R,K0]),F0=P((s)=>{let j0=R?.masterPassword||"";if(!j0)return;K0(s,j0,null)},[R,K0]),_0=P((s)=>{let j0=R?.totpCode||"";if(j0.length<6)return;K0(s,R?.masterPassword,j0)},[R,K0]),Y0=P(async(s)=>{try{await navigator.clipboard.writeText(s)}catch{let j0=document.createElement("textarea");j0.value=s,j0.style.position="fixed",j0.style.opacity="0",document.body.appendChild(j0),j0.select(),document.execCommand("copy"),document.body.removeChild(j0)}},[]);u(()=>{if(L)requestAnimationFrame(()=>v.current?.focus())},[L]);let Q0=_.toLowerCase(),J0=Z0(()=>{if(!Q0)return $;return $.filter((s)=>s.name.toLowerCase().includes(Q0)||(s.type||"").toLowerCase().includes(Q0)||(s.envVar||"").toLowerCase().includes(Q0)||(s.userNote||"").toLowerCase().includes(Q0)||(s.agentNote||"").toLowerCase().includes(Q0))},[$,Q0]);if(G)return F`<div class="settings-section"><div class="settings-loading">Loading keychain…</div></div>`;return F`
        <div class="settings-section">
            ${X&&F`
                <div class="settings-keychain-error" role="alert">
                    ${X}
                    <button class="settings-keychain-dismiss" onClick=${()=>Y(null)}>✕</button>
                </div>
            `}
            <div class="settings-keychain-toolbar" style="display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;">
                <span class="settings-hint" style="margin:0; display:flex; align-items:center; gap:8px; flex-wrap:wrap;">
                    <span>${J0.length} entr${J0.length===1?"y":"ies"}${Q0?` matching "${_}"`:""}, encrypted at rest.</span>
                    <span style="display:inline-flex; align-items:center; gap:6px;">
                        <span>Click</span>
                        <span aria-hidden="true" style="display:inline-flex; width:18px; height:18px; align-items:center; justify-content:center; border-radius:999px; border:1px solid var(--border-color, rgba(120,120,120,.22)); background:var(--panel-bg, rgba(255,255,255,.04));">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        </span>
                        <span>to reveal.</span>
                    </span>
                </span>
                <button class="settings-keychain-add-btn" onClick=${()=>V(!L)}>
                    ${L?"Cancel":"+ Add entry"}
                </button>
            </div>

            ${L&&F`
                <div class="settings-keychain-add-form">
                    <div class="settings-keychain-add-row">
                        <input ref=${v} type="text" placeholder="Entry name (e.g. github/my-token)"
                            value=${K} onInput=${(s)=>Q(s.target.value)}
                            class="settings-keychain-input" />
                        <select value=${J} onChange=${(s)=>W(s.target.value)}
                            class="settings-keychain-select">
                            ${Lz.map((s)=>F`<option value=${s}>${s}</option>`)}
                        </select>
                    </div>
                    <div class="settings-keychain-add-row">
                        <input type="password" placeholder="Secret value"
                            value=${q} onInput=${(s)=>B(s.target.value)}
                            class="settings-keychain-input settings-keychain-secret" />
                        <input type="text" placeholder="Username (optional)"
                            value=${N} onInput=${(s)=>U(s.target.value)}
                            class="settings-keychain-input" style="max-width:200px" />
                        <button class="settings-keychain-save-btn" onClick=${b}
                            disabled=${T||!K.trim()||!q}>
                            ${T?"Saving…":"Save"}
                        </button>
                    </div>
                    <div class="settings-keychain-add-row" style="align-items:stretch">
                        <textarea placeholder="User note (visible in this UI only)"
                            value=${E} onInput=${(s)=>D(s.target.value)}
                            class="settings-keychain-input" rows="2" style="resize:vertical; min-height:56px"></textarea>
                        <textarea placeholder="Agent note (safe to expose to agents)"
                            value=${H} onInput=${(s)=>M(s.target.value)}
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
                        ${J0.length===0&&F`
                            <tr><td colspan="5" class="settings-keychain-empty">
                                ${Q0?"No entries match the filter.":"No keychain entries."}
                            </td></tr>
                        `}
                        ${J0.map((s)=>{let j0=R?.name===s.name?R:null,z0=j0?.phase==="revealed",C0=j0?.phase==="password",h0=j0?.phase==="totp",n0=j0?.phase==="error",G_=A[s.name]||{},m0=Object.prototype.hasOwnProperty.call(G_,"userNote")?G_.userNote:s.userNote||"",a0=Object.prototype.hasOwnProperty.call(G_,"agentNote")?G_.agentNote:s.agentNote||"",S0=m0!==(s.userNote||"")||a0!==(s.agentNote||""),o0=O===s.name;return F`
                            <tr class="settings-keychain-row" key=${s.name}>
                                <td class="settings-keychain-name">${s.name}</td>
                                <td><span class="settings-keychain-type-badge">${s.type}</span></td>
                                <td class="settings-keychain-env">${s.envVar?F`<code>$${s.envVar}</code>`:"—"}</td>
                                <td class="settings-keychain-date">${Yz(s.updatedAt)}</td>
                                <td class="settings-keychain-actions">
                                    <button class=${`settings-keychain-reveal-btn${z0?" active":""}`}
                                        onClick=${()=>X0(s.name)}
                                        title=${z0?"Hide secret":"Reveal secret"}>
                                        ${z0?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`}
                                    </button>
                                    ${y===s.name?F`
                                            <span class="settings-keychain-confirm">Delete?
                                                <button class="settings-keychain-confirm-yes" onClick=${()=>$0(s.name)}>Yes</button>
                                                <button class="settings-keychain-confirm-no" onClick=${()=>I(null)}>No</button>
                                            </span>
                                        `:F`<button class="settings-keychain-delete-btn" onClick=${()=>I(s.name)} title="Delete">🗑</button>`}
                                </td>
                            </tr>
                            <tr class="settings-keychain-notes-row" key=${s.name+"-notes"}>
                                <td colspan="5">
                                    <div style="display:grid; grid-template-columns:1fr 1fr auto; gap:8px; align-items:start; padding:8px 0 10px 0;">
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">User note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Human/UI note only"
                                                value=${m0}
                                                onInput=${(c0)=>V0(s.name,"userNote",c0.target.value)}></textarea>
                                        </label>
                                        <label style="display:flex; flex-direction:column; gap:4px; min-width:0;">
                                            <span class="settings-hint" style="margin:0">Agent-readable note</span>
                                            <textarea class="settings-keychain-input" rows="2" style="resize:vertical; min-height:52px; width:100%;" placeholder="Safe guidance for agents"
                                                value=${a0}
                                                onInput=${(c0)=>V0(s.name,"agentNote",c0.target.value)}></textarea>
                                        </label>
                                        <button class="settings-keychain-save-btn" style="margin-top:20px" disabled=${!S0||o0} onClick=${()=>E0(s)}>
                                            ${o0?"Saving…":"Save notes"}
                                        </button>
                                    </div>
                                </td>
                            </tr>
                            ${C0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-pw"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">Master password:</span>
                                            <input ref=${l} type="password" autocomplete="off"
                                                placeholder="Enter keychain master password"
                                                class="settings-keychain-prompt-input"
                                                value=${j0?.masterPassword||""}
                                                onInput=${(c0)=>f((d0)=>({...d0,masterPassword:c0.target.value}))}
                                                onKeyDown=${(c0)=>{if(c0.key==="Enter")F0(s.name);if(c0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>F0(s.name)}
                                                disabled=${!j0?.masterPassword}>Unlock</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${h0&&F`
                                <tr class="settings-keychain-prompt-row" key=${s.name+"-totp"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-prompt">
                                            <span class="settings-keychain-prompt-label">TOTP code:</span>
                                            <input ref=${h} type="text" inputmode="numeric" autocomplete="one-time-code"
                                                maxlength="6" placeholder="000000"
                                                class="settings-keychain-prompt-input" style="width:90px;text-align:center;letter-spacing:0.15em"
                                                value=${j0?.totpCode||""}
                                                onInput=${(c0)=>f((d0)=>({...d0,totpCode:c0.target.value.replace(/\\D/g,"").slice(0,6)}))}
                                                onKeyDown=${(c0)=>{if(c0.key==="Enter")_0(s.name);if(c0.key==="Escape")f(null)}}
                                            />
                                            <button class="settings-keychain-prompt-submit" onClick=${()=>_0(s.name)}
                                                disabled=${(j0?.totpCode||"").length<6}>Verify</button>
                                            <button class="settings-keychain-prompt-cancel" onClick=${()=>f(null)}>Cancel</button>
                                            ${j0?.error&&F`<span class="settings-keychain-prompt-error">${j0.error}</span>`}
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${z0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-reveal"}>
                                    <td colspan="5">
                                        <div class="settings-keychain-reveal-panel">
                                            ${j0.username&&F`
                                                <div class="settings-keychain-reveal-field">
                                                    <span class="settings-keychain-reveal-label">Username</span>
                                                    <code class="settings-keychain-reveal-value">${j0.username}</code>
                                                    <button class="settings-keychain-copy-btn" onClick=${()=>Y0(j0.username)} title="Copy username">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                    </button>
                                                </div>
                                            `}
                                            <div class="settings-keychain-reveal-field">
                                                <span class="settings-keychain-reveal-label">Secret</span>
                                                <code class="settings-keychain-reveal-value">${j0.secret}</code>
                                                <button class="settings-keychain-copy-btn" onClick=${()=>Y0(j0.secret)} title="Copy secret">
                                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            `}
                            ${n0&&F`
                                <tr class="settings-keychain-reveal-row" key=${s.name+"-error"}>
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
    `}var Lz;var nY=J_(()=>{w0();Lz=["secret","token","password","basic"]});var dY={};j1(dY,{ToolsSection:()=>Bz});function Bz({toolsets:_,filter:$="",settingsData:j,mergeSettingsData:G}){let Z=_||[],[X,Y]=C(()=>{let B={};for(let N of Z)B[N.name]=!0;return B}),L=P((B)=>{Y((N)=>({...N,[B]:!N[B]}))},[]),V=j?.searchMatchMode||"or",K=P(async()=>{let B=V==="or"?"and":"or";try{let U=await(await fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:B})})).json().catch(()=>({}));if(U?.ok&&U?.settings)G?.(U.settings)}catch(N){console.warn("[settings/tools] Failed to save search match mode.",N)}},[V,G]),Q=$.toLowerCase(),q=Z0(()=>{if(!Q)return Z;return Z.map((B)=>{let N=B.tools.filter((U)=>U.name.toLowerCase().includes(Q)||B.name.toLowerCase().includes(Q)||(U.summary||"").toLowerCase().includes(Q));return N.length>0?{...B,tools:N}:null}).filter(Boolean)},[Z,Q]);if(Z.length===0)return F`<div class="settings-section"><p class="settings-hint">Tool data not available.</p></div>`;return F`
        <div class="settings-section">
            <div class="settings-search-options">
                <h4 style="margin:0 0 8px 0">Search</h4>
                <div class="settings-row">
                    <label>Match mode</label>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <input type="checkbox" checked=${V==="and"} onChange=${K} />
                        <span class="settings-hint" style="margin:0">
                            ${V==="or"?"Any keyword (OR) — results match at least one search term":"All keywords (AND) — results must match every search term"}
                        </span>
                    </div>
                </div>
            </div>
            ${q.map((B)=>{let N=X[B.name]!==!1;return F`
                <div class="settings-toolset">
                    <div class="settings-toolset-header">
                        <label class="settings-toolset-toggle">
                            <input type="checkbox" checked=${N} onChange=${()=>L(B.name)} />
                            <span class="settings-toolset-icon">${Vz[B.name]||Nz}</span>
                            <strong>${B.name}</strong>
                        </label>
                        <span class="settings-hint" style="margin:0">${B.description}</span>
                    </div>
                    ${N&&F`<div class="settings-tool-list">${B.tools.map((U)=>F`
                        <div class="settings-tool-row">
                            <input type="checkbox" checked disabled />
                            <span class="settings-tool-name">${U.name}</span>
                            <span class="settings-tool-kind" title=${U.kind}>${Qz[U.kind]||"?"}</span>
                            ${U.summary&&F`<span class="settings-tool-summary">${U.summary}</span>`}
                            <span class="settings-tool-source">${qz[U.name]||B.name}</span>
                        </div>
                    `)}</div>`}
                </div>
            `})}
            ${q.length===0&&F`<p class="settings-hint">No tools match "${$}"</p>`}
            <p class="settings-hint">Tool activation is managed by the agent runtime. Group checkboxes collapse/expand; individual tools use <code>activate_tools</code>.</p>
        </div>
    `}var Vz,qz,Qz,Nz;var iY=J_(()=>{w0();Vz={core:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="14" rx="2"/><path d="M7.5 10l2.5 2-2.5 2"/><path d="M12.5 15H16"/></svg>`,discovery:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>`,attachments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>`,"model-control":F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/><path d="M9 15c.83.67 2 1 3 1s2.17-.33 3-1"/></svg>`,data:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>`,workspace:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>`,automation:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>`,remote:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,browser:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,ui:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>`,experiments:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h6v7l4.6 7.7A1 1 0 0 1 18.7 19H5.3a1 1 0 0 1-.9-1.3L9 10z"/><line x1="9" y1="3" x2="15" y2="3"/></svg>`,lifecycle:F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>`},qz={read:"pi-core",write:"pi-core",edit:"pi-core",bash:"pi-core",powershell:"pi-core",find:"pi-core",grep:"pi-core",ls:"pi-core",list_tools:"internal-tools",list_internal_tools:"internal-tools",activate_tools:"tool-activation",reset_active_tools:"tool-activation",list_scripts:"runtime-scripts",attach_file:"file-attachments",read_attachment:"file-attachments",export_attachment:"file-attachments",get_model_state:"model-control",list_models:"model-control",switch_model:"model-control",switch_thinking:"model-control",messages:"messages-crud",introspect_sql:"sql-introspect",keychain:"keychain-tools",search_workspace:"workspace-search",refresh_workspace_index:"workspace-search",open_office_viewer:"office-viewer",office_read:"office-viewer",office_write:"office-viewer",open_workspace_file:"open-workspace-file",image_process:"image-processing",schedule_task:"scheduled-tasks",scheduled_tasks:"scheduled-tasks",bun_run:"bun-runner",exec_batch:"exec-batch",search_tool_output:"search-tool-output",ssh:"ssh",proxmox:"proxmox",portainer:"portainer",mcp:"mcp",cdp_browser:"cdp-browser",send_adaptive_card:"send-adaptive-card",send_dashboard_widget:"send-dashboard-widget",start_autoresearch:"autoresearch",stop_autoresearch:"autoresearch",autoresearch_status:"autoresearch",exit_process:"exit-process",env:"env-tools"},Qz={"read-only":"\uD83D\uDD0D",mutating:"✏️",mixed:"\uD83D\uDD04"},Nz=F`<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`});var oY={};j1(oY,{AddonsSection:()=>Fz});function Fz({setStatus:_,filter:$=""}){let[j,G]=C(null),[Z,X]=C(!0),[Y,L]=C(null),[V,K]=C(!1),[Q,q]=C({runtime:"",windowsNative:!1}),[B,N]=C([]),[U,E]=C([]);function D(){let O=new URLSearchParams;try{let y=(localStorage.getItem("piclaw_addons_catalog_url")||"").trim(),I=(localStorage.getItem("piclaw_addons_catalog_urls")||"").split(/\r?\n/).map((f)=>f.trim()).filter(Boolean),R=localStorage.getItem("piclaw_addons_repo_url");if(y)O.append("catalog_url",y);for(let f of I)O.append("catalog_url",f);if(R)O.set("repo_url",R)}catch(y){}let z=O.toString();return z?`?${z}`:""}let H=P(async()=>{try{let[O,z]=await Promise.all([fetch(`/agent/addons${D()}`),fetch("/agent/settings-data")]),y=await O.json();if(y.error)throw Error(y.error);G(y.addons||[]),N(y.sources||[]),E(y.failed_sources||[]);let I=await z.json().catch(()=>({})),R=typeof I?.runtimePlatform==="string"?I.runtimePlatform:"";q({runtime:R,windowsNative:R==="win32"})}catch(O){G(null),_?.(String(O.message||O),"error")}finally{X(!1)}},[_]);u(()=>{H()},[]);let M=P(async(O)=>{if(Y)return;L({slug:O,action:"install"}),_?.(`Installing ${O}…`,"info");try{let y=await(await fetch(`/agent/addons/install${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(y.error){_?.(y.error,"error");return}K(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on installed.","success"),await H()}catch(z){_?.(String(z.message||z),"error")}finally{L(null)}},[Y,H,_]),J=P(async(O)=>{if(Y)return;L({slug:O,action:"remove"}),_?.(`Removing ${O}…`,"info");try{let y=await(await fetch(`/agent/addons/uninstall${D()}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:O})})).json();if(y.error){_?.(y.error,"error");return}K(!0);let I=[y.message,y.warning].filter(Boolean).join(" ");_?.(I||"Add-on removed.","success"),await H()}catch(z){_?.(String(z.message||z),"error")}finally{L(null)}},[Y,H,_]),W=P(async()=>{if(Y)return;L({slug:null,action:"restart"}),_?.("Restarting piclaw…","info");try{let z=await(await fetch("/agent/addons/restart",{method:"POST"})).json();if(z.error){_?.(z.error,"error"),L(null);return}_?.(z.message||"Restarting piclaw…","success"),K(!1),(async(I=30,R=2000)=>{for(let f=0;f<I;f++){await new Promise((v)=>setTimeout(v,R));try{if((await fetch("/agent/addons",{signal:AbortSignal.timeout(3000)})).ok){await H(),L(null),_?.("Restart complete — add-ons refreshed.","success");return}}catch(v){}}L(null),_?.("Backend did not return in time. Reload the page manually.","warning")})()}catch(O){_?.(String(O.message||O),"error"),L(null)}},[Y,_,H]);if(Z)return F`<div class="settings-loading">Fetching add-ons\u2026</div>`;if(!j)return F`<div class="settings-section"><p class="settings-hint">Could not load add-ons.</p></div>`;let T=$.toLowerCase(),x=T?j.filter((O)=>O.slug.toLowerCase().includes(T)||(O.description||"").toLowerCase().includes(T)||(O.tags||[]).some((z)=>z.toLowerCase().includes(T))):j,A=Y?.slug||null,k=Y?Y.action==="remove"?`Removing ${Y.slug}…`:Y.action==="restart"?"Restarting piclaw…":`Installing ${Y.slug}…`:"";return F`
        <div class=${`settings-section settings-addon-panel${Y?" busy":""}`} aria-busy=${Y?"true":"false"}>
            <div class="settings-addon-toolbar">
                <div>
                    <p class="settings-hint">
                        ${B.length<=1?F`Catalog from <a href="https://github.com/rcarmo/piclaw-addons" target="_blank">rcarmo/piclaw-addons</a>.`:F`${B.length} catalog sources merged.`}
                        ${" "}Package-first install via Bun; restart required after install/uninstall.
                    </p>
                    ${U.length>0&&F`
                        <div class="settings-addon-error" role="alert">
                            Failed to fetch ${U.length} catalog source${U.length>1?"s":""}:
                            ${U.map((O)=>F` <code style="font-size:0.82em;word-break:break-all">${O}</code>`)}
                        </div>
                    `}
                    ${B.length>1&&F`
                        <details class="settings-hint" style="margin-top:4px">
                            <summary style="cursor:pointer">Active catalog sources (${B.length})</summary>
                            <ul style="margin:4px 0 0 16px;font-size:0.82em">
                                ${B.map((O)=>F`<li style="word-break:break-all"><code>${O}</code></li>`)}
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
                ${x.map((O)=>{let z=(O.skills||[]).length>0,y=O.type==="extension",I=z&&y?"extension + skill":z?"skill":"extension",R=z&&!y?"settings-tag-skill":"",f=typeof O.homepage==="string"&&O.homepage.trim()?O.homepage.trim():"";return F`
                    <div class=${`settings-addon-card${O.installed?" installed":""}`}>
                        <div class="settings-addon-card-header">
                            ${f?F`<a class="settings-addon-name-link" href=${f} target="_blank" rel="noopener noreferrer">${O.slug}</a>`:F`<strong>${O.slug}</strong>`}
                            <span class=${`settings-tag settings-tag-type ${R}`}>${I}</span>
                            <span class="settings-addon-version">${O.installed?O.installedVersion||"?":O.version||""}</span>
                            ${O.installKind&&F`<span class="settings-tag">${O.installKind}</span>`}
                            ${O.hasUpdate&&F`<span class="settings-tag settings-tag-skill">\u2191 ${O.version}</span>`}
                            <div class="settings-addon-actions">
                                ${O.installed?F`
                                    ${O.hasUpdate&&F`<button class="settings-addon-btn settings-addon-btn-upgrade" disabled=${Boolean(Y)} onClick=${()=>M(O.slug)}>${A===O.slug?"…":"Update"}</button>`}
                                    <button class="settings-addon-btn settings-addon-btn-remove" disabled=${Boolean(Y)} onClick=${()=>J(O.slug)}>${A===O.slug?"…":"Remove"}</button>
                                `:F`
                                    <button class="settings-addon-btn settings-addon-btn-install" disabled=${Boolean(Y)} onClick=${()=>M(O.slug)}>${A===O.slug?"…":"Install"}</button>
                                `}
                            </div>
                        </div>
                        <div class="settings-addon-card-body">${O.description}</div>
                        <div class="settings-addon-card-footer">
                            <div class="settings-addon-tags">${(O.tags||[]).map((v)=>F`<span class="settings-tag">${v}</span>`)}${(O.skills||[]).map((v)=>F`<span class="settings-tag settings-tag-skill">\ud83d\udcdd ${v}</span>`)}</div>
                        </div>
                    </div>
                `})}
                ${x.length===0&&F`<p class="settings-hint">No add-ons match "${$}"</p>`}
            </div>
            ${V&&F`
                <div class="settings-addon-restart-notice" role="status" aria-live="polite">
                    <span>Extension changes are installed but inactive until piclaw restarts.</span>
                    <button class="settings-addon-btn settings-addon-btn-restart-now" type="button" disabled=${Boolean(Y)} onClick=${W}>Restart Now</button>
                </div>
            `}
        </div>
    `}var sY=J_(()=>{w0()});var Oz={};function q9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function p2(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Uz(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function Hz(_,$){try{localStorage.setItem(_,$)}catch(j){}}function Ez(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function Dz(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function zz(){let[_,$]=C(()=>q9("piclaw_vim_mode",!1)),[j,G]=C(()=>q9("piclaw_show_whitespace",!0)),[Z,X]=C(()=>q9("piclaw_md_live_preview",!0)),[Y,L]=C(()=>Ez("piclaw_editor_font_size",13,10,24)),[V,K]=C(()=>Uz("piclaw_editor_font_family","")),Q=P((q,B,N)=>{let U=!B;N(U),p2(q,U)},[]);return F`
        <div class="settings-section">
            <h3>Editor</h3>
            <div class="settings-row">
                <label>Vim mode</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let q=!_;$(q),p2("piclaw_vim_mode",q)}} />
            </div>
            <div class="settings-row">
                <label>Show whitespace</label>
                <input type="checkbox" checked=${j}
                    onChange=${()=>{let q=!j;G(q),p2("piclaw_show_whitespace",q)}} />
            </div>
            <div class="settings-row">
                <label>Markdown live preview</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let q=!Z;X(q),p2("piclaw_md_live_preview",q)}} />
            </div>
            <div class="settings-row">
                <label>Font size (px)</label>
                <${v_}
                    label="editor font size"
                    value=${Y}
                    min=${10}
                    max=${24}
                    fallback=${13}
                    width="70px"
                    onChange=${(q)=>{L(q),Dz("piclaw_editor_font_size",q)}}
                />
            </div>
            <div class="settings-row">
                <label>Font family</label>
                <input type="text" value=${V}
                    onInput=${(q)=>{let B=q.target.value;K(B),Hz("piclaw_editor_font_family",B)}}
                    placeholder="monospace (default)" />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Editor changes are stored in local browser storage and take effect when you next open or reload a file tab.</p>
        </div>
    `}var Wz;var aY=J_(()=>{w0();W6();C4();Wz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`;d$({id:"editor",label:"Editor",icon:Wz,component:zz,order:150})});var Mz={};function tY(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function eY(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function Jz(_,$,j,G){try{return W$(localStorage.getItem(_),{fallback:$,min:j,max:G})}catch{return W$($,{fallback:$,min:j,max:G})}}function Az(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function kz(){let[_,$]=C(()=>tY("piclaw_mindmap_auto_expand",!0)),[j,G]=C(()=>Jz("piclaw_mindmap_node_spacing",40,20,100)),[Z,X]=C(()=>tY("piclaw_mindmap_animate",!0));return F`
        <div class="settings-section">
            <h3>Mind Map</h3>
            <div class="settings-row">
                <label>Auto-expand nodes</label>
                <input type="checkbox" checked=${_}
                    onChange=${()=>{let Y=!_;$(Y),eY("piclaw_mindmap_auto_expand",Y)}} />
            </div>
            <div class="settings-row">
                <label>Node spacing (px)</label>
                <${v_}
                    label="node spacing"
                    value=${j}
                    min=${20}
                    max=${100}
                    fallback=${40}
                    width="70px"
                    onChange=${(Y)=>{G(Y),Az("piclaw_mindmap_node_spacing",Y)}}
                />
            </div>
            <div class="settings-row">
                <label>Animate transitions</label>
                <input type="checkbox" checked=${Z}
                    onChange=${()=>{let Y=!Z;X(Y),eY("piclaw_mindmap_animate",Y)}} />
            </div>
            <p class="settings-hint settings-local-only-hint">This browser only. Opens <code>.mindmap.yaml</code> files. Changes take effect on the next map open.</p>
        </div>
    `}var yz;var _L=J_(()=>{w0();W6();C4();yz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="9.5" y1="9.5" x2="6.5" y2="6.5"/><line x1="14.5" y1="9.5" x2="17.5" y2="6.5"/><line x1="9.5" y1="14.5" x2="6.5" y2="17.5"/><line x1="14.5" y1="14.5" x2="17.5" y2="17.5"/></svg>`;d$({id:"mindmap",label:"Mind Map",icon:yz,component:kz,order:170})});var xz={};function Q9(_,$){try{let j=localStorage.getItem(_);return j===null?$:j==="true"}catch{return $}}function N9(_,$){try{localStorage.setItem(_,String($))}catch(j){}}function B9(_,$){try{return localStorage.getItem(_)||$}catch{return $}}function F9(_,$){try{localStorage.setItem(_,$)}catch(j){}}function wz(){let[_,$]=C(()=>Q9("piclaw_dev_mode",!1)),[j,G]=C(()=>B9("piclaw_addons_catalog_url","")),[Z,X]=C(()=>B9("piclaw_addons_catalog_urls","")),[Y,L]=C(()=>B9("piclaw_addons_repo_url","")),[V,K]=C(()=>Q9("piclaw_debug_sse",!1)),[Q,q]=C(()=>Q9("piclaw_debug_tool_calls",!1)),B=P(()=>{let N=!_;$(N),N9("piclaw_dev_mode",N)},[_]);return F`
        <div class="settings-section">
            <h3>Developer</h3>
            <div class="settings-row">
                <label>Developer mode</label>
                <input type="checkbox" checked=${_} onChange=${B} />
            </div>

            <p class="settings-hint settings-local-only-hint">This browser only. Developer-mode toggles and add-on catalog overrides are stored in local browser storage.</p>

            ${_&&F`
                <h3 style="margin-top:16px">Add-on Sources</h3>
                <div class="settings-row">
                    <label>Catalog URL</label>
                    <input type="text" value=${j}
                        onInput=${(N)=>{let U=N.target.value;G(U),F9("piclaw_addons_catalog_url",U)}}
                        placeholder="https://raw.githubusercontent.com/.../catalog.json" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Primary add-on catalog URL. Leave empty to use the default (<code>rcarmo/piclaw-addons</code>).</p>
                <div class="settings-row" style="align-items:flex-start;">
                    <label>Additional catalog URLs</label>
                    <textarea
                        value=${Z}
                        onInput=${(N)=>{let U=N.target.value;X(U),F9("piclaw_addons_catalog_urls",U)}}
                        placeholder="One URL per line\nhttps://example.com/catalog.json"
                        style="max-width:400px; min-height:86px; resize:vertical;"
                    ></textarea>
                </div>
                <p class="settings-hint" style="margin-top:0">Fetched in addition to the primary/default catalog. One URL per line.</p>
                <div class="settings-row">
                    <label>Repo URL</label>
                    <input type="text" value=${Y}
                        onInput=${(N)=>{let U=N.target.value;L(U),F9("piclaw_addons_repo_url",U)}}
                        placeholder="https://github.com/.../piclaw-addons.git" style="max-width:400px" />
                </div>
                <p class="settings-hint" style="margin-top:0">Override the git repo used for <code>bun add</code> installs. Leave empty for default.</p>

                <h3 style="margin-top:16px">Debug</h3>
                <div class="settings-row">
                    <label>Log SSE events</label>
                    <input type="checkbox" checked=${V}
                        onChange=${()=>{let N=!V;K(N),N9("piclaw_debug_sse",N)}} />
                </div>
                <div class="settings-row">
                    <label>Log tool calls</label>
                    <input type="checkbox" checked=${Q}
                        onChange=${()=>{let N=!Q;q(N),N9("piclaw_debug_tool_calls",N)}} />
                </div>
                <p class="settings-hint">Debug flags take effect on next page reload.</p>
            `}
        </div>
    `}var Tz;var $L=J_(()=>{w0();W6();Tz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>`;d$({id:"developer",label:"Developer",icon:Tz,component:wz,order:900})});var YL={};j1(YL,{openSettingsDialog:()=>oz,SettingsDialogContent:()=>XL,SettingsDialog:()=>iz});function J5(_){O5.push({ts:performance.now(),label:_})}function Iz(){if(!O5.length)return;let _=O5[0].ts,$=O5.map((j)=>`+${(j.ts-_).toFixed(1)}ms ${j.label}`);console.info(`[settings-dialog perf]
`+$.join(`
`));try{window.__piclawSettingsPerfLog=$}catch(j){}try{fetch("/agent/client-perf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({label:"settings-dialog",lines:$})}).catch((j)=>{})}catch(j){}O5.length=0}function fz(_){let $=d2.get(_);if($)return Promise.resolve($);let j=r2.get(_);if(j)return j;let G=Cz[_]().then((Z)=>{return d2.set(_,Z),r2.delete(_),Z}).catch((Z)=>{throw r2.delete(_),Z});return r2.set(_,G),G}function n2(_="Loading…"){return F`
        <div class="settings-loading settings-loading-pane" role="status" aria-live="polite">
            <span class="settings-spinner"></span>
            <span>${_}</span>
        </div>
    `}function XL({onClose:_}){J5("SettingsDialogContent-render-start");let[$,j]=C(()=>n7()||"general"),[G,Z]=C(jL),[X,Y]=C(null),[L,V]=C(""),[,K]=C(0),[Q,q]=C(()=>Object.fromEntries(d2.entries())),[B,N]=C(null),[U,E]=C({compact:!1,narrow:!1}),D=g(null),H=g(null);u(()=>{J5("SettingsDialogContent-mounted"),Iz()},[]),u(()=>{let z=(y)=>{if(y.key==="Escape")_()};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[_]),u(()=>{let z=(y)=>{let I=typeof y?.detail?.section==="string"?y.detail.section.trim():"";if(I)j(I),V("")};return window.addEventListener("piclaw:open-settings",z),()=>window.removeEventListener("piclaw:open-settings",z)},[]),u(()=>{let z=()=>K((y)=>y+1);return window.addEventListener("piclaw:settings-panes-changed",z),()=>window.removeEventListener("piclaw:settings-panes-changed",z)},[]),u(()=>{fetch("/agent/settings-data").then((z)=>z.json()).then((z)=>{jL=z,Z(z)}).catch(()=>Z({}))},[]),u(()=>{let z=H.current;if(!z)return;let y=()=>{let I=z.clientWidth||0;E((R)=>{let f={compact:I>0&&I<=860,narrow:I>0&&I<=720};return R.compact===f.compact&&R.narrow===f.narrow?R:f})};if(y(),typeof ResizeObserver==="function"){let I=new ResizeObserver(()=>y());return I.observe(z),()=>I.disconnect()}return window.addEventListener("resize",y),()=>window.removeEventListener("resize",y)},[]);let M=sX(),J=[...ZL,...M.map((z)=>({id:z.id,label:z.label,icon:z.icon,searchable:z.searchable||!1,placeholder:z.searchPlaceholder,order:z.order??500,isExtension:!0,component:z.component}))].sort((z,y)=>(z.order??500)-(y.order??500)),W=J.find((z)=>z.id===$)||ZL.find((z)=>z.id===$);u(()=>{if(W?.searchable)requestAnimationFrame(()=>D.current?.focus())},[$]),u(()=>{if(W?.isExtension){N(null);return}let z=!1;if(Q[$]){N(null);return}return N($),fz($).then((y)=>{if(z)return;q((I)=>I?.[$]?I:{...I||{},[$]:y})}).catch((y)=>{if(z)return;console.error(`[settings-dialog] Failed to lazy-load section "${$}".`,y)}).finally(()=>{if(!z)N((y)=>y===$?null:y)}),()=>{z=!0}},[$,W?.isExtension,Q]);let T=P((z,y="info")=>{Y(z?{text:z,type:y}:null)},[]),x=P((z)=>{j(z),V("");let y=Pz[z];if(y&&!GL.has(z))GL.add(z),y().then(()=>K((I)=>I+1)).catch((I)=>{})},[]),A=P((z)=>{Z((y)=>({...y||{},...z||{}}))},[]),k=()=>{if(W?.isExtension){if(!W.component)return n2("Loading pane…");let y=W.component;return F`<${y} filter=${L} />`}let z=Q[$];if(!z||B===$)return n2(`Loading ${W?.label||"settings"}…`);switch($){case"general":return F`<${z} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"sessions":return F`<${z} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"compaction":return F`<${z} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"keyboard":return F`<${z} filter=${L} setStatus=${T} />`;case"workspace":return F`<${z} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"environment":return F`<${z} settingsData=${G} filter=${L} setStatus=${T} mergeSettingsData=${A} />`;case"providers":return F`<${z} providers=${G?.providers} setStatus=${T} />`;case"models":return F`<${z} filter=${L} />`;case"theme":return F`<${z} themes=${G?.themes} colorKeys=${G?.colorKeys} settingsData=${G} setStatus=${T} mergeSettingsData=${A} />`;case"scheduled-tasks":return F`<${z} filter=${L} setStatus=${T} />`;case"quick-actions":return F`<${z} filter=${L} setStatus=${T} mergeSettingsData=${A} />`;case"keychain":return F`<${z} filter=${L} />`;case"tools":return F`<${z} toolsets=${G?.toolsets} filter=${L} settingsData=${G} mergeSettingsData=${A} />`;case"addons":return F`<${z} setStatus=${T} filter=${L} />`;default:return n2("Loading settings…")}},O=!W;return J5("SettingsDialogContent-render-end"),F`
        <div class="settings-dialog-backdrop" onClick=${(z)=>{if(z.target===z.currentTarget)_()}}>
            <div ref=${H} data-testid="settings-dialog" class=${`settings-dialog${U.compact?" settings-dialog-compact":""}${U.narrow?" settings-dialog-narrow":""}`}>
                <div class="settings-dialog-header">
                    <span class="settings-dialog-title">Settings</span>
                    ${W?.searchable&&F`
                        <input ref=${D} type="text" class="settings-header-filter"
                            placeholder=${W.placeholder||"Filter…"}
                            value=${L} onInput=${(z)=>V(z.target.value)} />
                    `}
                    <button class="settings-dialog-close" onClick=${_} title="Close (Esc)">✕</button>
                </div>
                <div class="settings-dialog-body">
                    <nav class="settings-nav">
                        ${J.map((z,y)=>{let I=y>0&&!J[y-1].isExtension,R=z.isExtension&&I;return F`
                                ${R&&F`<div class="settings-nav-separator"></div>`}
                                <button class=${`settings-nav-item ${z.id===$?"active":""}`} onClick=${()=>x(z.id)}>
                                    <span class="settings-nav-icon">${z.icon}</span>
                                    <span class="settings-nav-label">${z.label}</span>
                                </button>
                            `})}
                    </nav>
                    <main class="settings-content">
                        ${O?n2("Loading settings…"):k()}
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
    `}function iz(){let[_,$]=C(!1);if(u(()=>{let j=(Z)=>{let X=z6(Z?.detail?.section);if(X)try{window.__piclawSettingsRequestedSection=X}catch(Y){}$(!0)};window.addEventListener("piclaw:open-settings",j);let G=R2();if(G.open){if(G.section)try{window.__piclawSettingsRequestedSection=G.section}catch(Z){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",j)},[]),!_)return null;return F`<${n$} className="settings-portal"><${XL} onClose=${()=>$(!1)} /><//>`}function oz(_={}){o1(_)}var O5,jL=null,d2,r2,Cz,Pz,GL,Rz,Sz,uz,gz,bz,vz,mz,cz,lz,hz,pz,rz,nz,dz,ZL;var LL=J_(()=>{w0();S2();W6();YY();O5=[];J5("module-eval-start");J5("imports-done");d2=new Map,r2=new Map;d2.set("general",s7);Cz={general:()=>Promise.resolve(s7),sessions:()=>Promise.resolve().then(() => (VY(),KY)).then((_)=>_.SessionsSection),compaction:()=>Promise.resolve().then(() => (QY(),qY)).then((_)=>_.CompactionSection),keyboard:()=>Promise.resolve().then(() => (DY(),EY)).then((_)=>_.KeyboardSection),workspace:()=>Promise.resolve().then(() => (kY(),AY)).then((_)=>_.WorkspaceSection),environment:()=>Promise.resolve().then(() => (MY(),yY)).then((_)=>_.EnvironmentSection),providers:()=>Promise.resolve().then(() => (TY(),wY)).then((_)=>_.ProvidersSection),models:()=>Promise.resolve().then(() => (IY(),xY)).then((_)=>_.ModelsSection),theme:()=>Promise.resolve().then(() => (fY(),PY)).then((_)=>_.ThemeSection),"scheduled-tasks":()=>Promise.resolve().then(() => (uY(),SY)).then((_)=>_.ScheduledTasksSection),"quick-actions":()=>Promise.resolve().then(() => (pY(),hY)).then((_)=>_.QuickActionsSection),keychain:()=>Promise.resolve().then(() => (nY(),rY)).then((_)=>_.KeychainSection),tools:()=>Promise.resolve().then(() => (iY(),dY)).then((_)=>_.ToolsSection),addons:()=>Promise.resolve().then(() => (sY(),oY)).then((_)=>_.AddonsSection)},Pz={"editor-settings":()=>Promise.resolve().then(() => (aY(),Oz)).then(()=>{}),"mindmap-settings":()=>Promise.resolve().then(() => (_L(),Mz)).then(()=>{}),developer:()=>Promise.resolve().then(() => ($L(),xz)).then(()=>{})},GL=new Set;Rz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M8.5 5.9L9.6 2.3h4.8l1.1 3.6 3.7-.8 2.4 4.1-2.6 2.8 2.6 2.8-2.4 4.1-3.7-.8-1.1 3.6H9.6l-1.1-3.6-3.7.8-2.4-4.1L5 12 2.4 9.2l2.4-4.1z"/></svg>`,Sz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,uz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 4 3 10 9 10"/><path d="M12 7v5l3 3"/></svg>`,gz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h5l2 2h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>`,bz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/><path d="M8 7v10"/><path d="M16 7v10"/></svg>`,vz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01"/><path d="M10 9h.01"/><path d="M14 9h.01"/><path d="M18 9h.01"/><path d="M8 13h.01"/><path d="M12 13h.01"/><path d="M16 13h.01"/><path d="M7 17h10"/></svg>`,mz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>`,cz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="9" width="14" height="10" rx="2"/><circle cx="9" cy="14" r="1.5" fill="currentColor" stroke="none"/><circle cx="15" cy="14" r="1.5" fill="currentColor" stroke="none"/><line x1="12" y1="9" x2="12" y2="5"/><circle cx="12" cy="4" r="1.5"/></svg>`,lz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.1 0 2-.9 2-2 0-.53-.21-1.01-.55-1.36-.34-.36-.55-.84-.55-1.37 0-1.1.9-2 2-2h2.36c3.08 0 5.64-2.56 5.64-5.64C22.9 5.85 18.05 2 12 2z"/><circle cx="8" cy="10" r="1.5" fill="currentColor" stroke="none"/><circle cx="12" cy="7" r="1.5" fill="currentColor" stroke="none"/><circle cx="16" cy="10" r="1.5" fill="currentColor" stroke="none"/></svg>`,hz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/><path d="M7 3.5 4 6"/><path d="m17 3.5 3 2.5"/></svg>`,pz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,rz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,nz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="14" r="3"/><path d="M11 14h9"/><path d="M16 14v-2"/><path d="M19 14v2"/></svg>`,dz=F`<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21"/><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,ZL=[{id:"general",label:"General",icon:Rz,searchable:!1,order:10},{id:"sessions",label:"Sessions",icon:Sz,searchable:!1,order:12},{id:"compaction",label:"Compaction",icon:uz,searchable:!1,order:13},{id:"keyboard",label:"Keyboard",icon:vz,searchable:!0,placeholder:"Filter shortcuts…",order:14},{id:"workspace",label:"Workspace",icon:gz,searchable:!1,order:15},{id:"environment",label:"Environment",icon:bz,searchable:!0,placeholder:"Filter environment…",order:16},{id:"providers",label:"Providers",icon:mz,searchable:!1,order:20},{id:"models",label:"Models",icon:cz,searchable:!0,placeholder:"Filter models…",order:30},{id:"theme",label:"Appearance",icon:lz,searchable:!1,order:40},{id:"scheduled-tasks",label:"Scheduled Tasks",icon:hz,searchable:!0,placeholder:"Filter scheduled tasks…",order:65},{id:"quick-actions",label:"Quick Actions",icon:rz,searchable:!0,placeholder:"Filter quick actions…",order:70},{id:"keychain",label:"Keychain",icon:nz,searchable:!0,placeholder:"Filter entries…",order:75},{id:"tools",label:"Tools",icon:pz,searchable:!0,placeholder:"Filter tools…",order:80},{id:"addons",label:"Add-ons",icon:dz,searchable:!0,placeholder:"Filter add-ons…",order:90}]});w0();class zG{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let G of this.extensions.values()){if(G.placement!=="tabs")continue;if(!G.canHandle)continue;try{let Z=G.canHandle(_);if(Z===!1||Z===0)continue;let X=Z===!0?0:typeof Z==="number"?Z:0;if(X>j)j=X,$=G}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${G.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var Y_=new zG;var j2=null,H3=null;function wF(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function WG(){if(H3)return Promise.resolve(H3);if(!j2)j2=import(wF()).then((_)=>{return H3=_,_}).catch((_)=>{throw j2=null,_});return j2}class OG{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;queuedDiffMode=void 0;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await WG();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState));if(this.queuedDiffMode!==void 0&&typeof this.real.setDiffMode==="function")this.real.setDiffMode(this.queuedDiffMode)}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}beforeDetachFromHost(_){return this.real?.beforeDetachFromHost?.(_)}afterAttachToHost(_){return this.real?.afterAttachToHost?.(_)}moveHost(_,$){return this.real?.moveHost?.(_,$)??!1}exportHostTransferState(){return this.real?.exportHostTransferState?.()??null}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}setDiffMode(_){this.queuedDiffMode=_,this.real?.setDiffMode?.(_)}}var E3={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new OG(_,$)}};function D3(){WG().catch((_)=>{console.warn("[editor-loader] Background preload failed; the editor will retry on demand.",_)})}function JG(_){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function G2(_,$){try{return _?.removeItem?.($),!0}catch(j){return!1}}var AG="piclaw:editor-popout:",TF=300000;function kG(_){try{return _?.localStorage??null}catch{return null}}function xF(_=Date.now()){return`editor-popout-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function yG(_){return typeof _==="string"?_.trim():""}function MG(_){return(typeof _==="string"?_.trim():"")||null}function wG(_){return typeof _==="string"?_:void 0}function TG(_){if(_===void 0)return;if(typeof _!=="string")return null;return _.trim()||null}function xG(_){if(!_||typeof _!=="object")return null;let $=_,j={};if(typeof $.cursorLine==="number"&&Number.isFinite($.cursorLine))j.cursorLine=$.cursorLine;if(typeof $.cursorCol==="number"&&Number.isFinite($.cursorCol))j.cursorCol=$.cursorCol;if(typeof $.scrollTop==="number"&&Number.isFinite($.scrollTop))j.scrollTop=$.scrollTop;return Object.keys(j).length>0?j:null}function G6(_,$=globalThis){let j=$?.window??$;if(!j?.location?.href)return null;try{let G=new URL(j.location.href),Z=G.searchParams.get(_)?.trim()||"";if(!Z)return null;return G.searchParams.delete(_),j.history?.replaceState?.(j.history.state,j.document?.title||"",G.toString()),Z}catch{return null}}function IF(_,$=globalThis,j=Date.now()){let G=kG($),Z=yG(_?.path);if(!G||!Z)return null;let X={path:Z,content:wG(_?.content),mtime:TG(_?.mtime),paneOverrideId:MG(_?.paneOverrideId),viewState:xG(_?.viewState),capturedAt:j};if(!Boolean(X.content!==void 0||X.paneOverrideId||X.viewState||X.mtime))return null;let L=xF(j);try{return G.setItem(`${AG}${L}`,JSON.stringify(X)),L}catch{return null}}function z3(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=kG($);if(!G||!Z)return null;let X=`${AG}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;G2(Z,X);try{let L=JSON.parse(Y),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+TF<j)return null;let K=yG(L?.path);if(!K)return null;return{path:K,content:wG(L?.content),mtime:TG(L?.mtime),paneOverrideId:MG(L?.paneOverrideId),viewState:xG(L?.viewState),capturedAt:V}}catch{return null}}function Z2(_,$=globalThis,j=Date.now()){let G=IF(_,$,j);return G?{editor_popout:G}:null}function w1(_){try{return _(),!0}catch($){return!1}}function IG(_){let{ownerWindow:$,themeChangeListener:j,mediaQuery:G,mediaQueryListener:Z,dockResizeListener:X,windowResizeListener:Y,themeObserver:L,resizeObserver:V}=_;w1(()=>{if(j)$?.removeEventListener?.("piclaw-theme-change",j)}),w1(()=>{if(G&&Z){if(G.removeEventListener)G.removeEventListener("change",Z);else if(G.removeListener)G.removeListener(Z)}}),w1(()=>{if(X)$?.removeEventListener?.("dock-resize",X);if(Y)$?.removeEventListener?.("resize",Y)}),w1(()=>{L?.disconnect?.()}),w1(()=>{V?.disconnect?.()})}function CG(_){_.syncHostLayout(),w1(()=>{_.terminal?.renderer?.remeasureFont?.()}),w1(()=>{_.fitAddon?.fit?.()}),w1(()=>{_.terminal?.refresh?.()}),_.syncHostLayout(),_.sendResize()}function PG(_){let{resizeFrame:$=0,cancelAnimationFrameFn:j=cancelAnimationFrame,socket:G,fitAddon:Z,terminal:X,termEl:Y}=_;if($)w1(()=>{j($)});return w1(()=>{G?.close?.()}),w1(()=>{Z?.dispose?.()}),w1(()=>{X?.dispose?.()}),Y?.remove?.(),0}function h1(_){try{return _(),!0}catch($){return!1}}function fG(_){let{termEl:$,bodyEl:j,terminal:G,theme:Z,themeChanged:X=!1,socket:Y,resize:L}=_;if(h1(()=>{if($?.style)$.style.backgroundColor=Z.background,$.style.color=Z.foreground;if(j?.style)j.style.backgroundColor=Z.background,j.style.color=Z.foreground;let V=j?.querySelector?.(".terminal-live-host");if(V&&typeof V==="object"&&"style"in V)V.style.backgroundColor=Z.background,V.style.color=Z.foreground;let K=j?.querySelector?.("canvas");if(K&&typeof K==="object"&&"style"in K)K.style.backgroundColor=Z.background,K.style.color=Z.foreground}),h1(()=>{if(G?.options)G.options.theme=Z}),X)h1(()=>{G?.reset?.()});h1(()=>{G?.renderer?.setTheme?.(Z),G?.renderer?.clear?.()}),h1(()=>{G?.loadFonts?.()}),h1(()=>{G?.renderer?.remeasureFont?.()}),h1(()=>{if(G?.wasmTerm&&G?.renderer?.render)G.renderer.render(G.wasmTerm,!0,G.viewportY||0,G),G.renderer.render(G.wasmTerm,!1,G.viewportY||0,G)}),h1(()=>{L?.()}),h1(()=>{if(X&&Y?.readyState===1)Y.send?.(JSON.stringify({type:"input",data:"\f"}))}),h1(()=>{G?.refresh?.()})}var CF="/static/js/vendor/ghostty-web.js",PF="/static/js/vendor/ghostty-vt.wasm",X6="piclaw://terminal",fF='FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',RF='400 13px "FiraCode Nerd Font Mono"',SF='700 13px "FiraCode Nerd Font Mono"',vG="x-piclaw-terminal-client",RG="piclaw_terminal_client",uF={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},gF={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},X2=null,W3=null;function bF(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function vF(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL(PF,window.location.origin).href,G=(Z,X)=>{let Y=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!bF(Y))return $(Z,X);if(Z instanceof Request)return $(new Request(j,Z));return $(j,X)};globalThis.fetch=G;try{return await _()}finally{globalThis.fetch=$}}async function mF(){let $=await import(new URL(CF,window.location.origin).href);if(!X2)X2=vF(()=>Promise.resolve($.init?.())).catch((j)=>{throw X2=null,j});return await X2,$}async function cF(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!W3)W3=Promise.allSettled([document.fonts.load(RF),document.fonts.load(SF),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await W3}function SG(_=typeof window<"u"?window:null){try{if(typeof _?.crypto?.randomUUID==="function")return _.crypto.randomUUID()}catch($){console.debug("[terminal-pane] Failed to generate crypto-backed terminal client token; falling back.",$)}return`terminal-client-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function J3(_=typeof window<"u"?window:null){if(!_)return null;try{let $=_.localStorage,j=typeof $?.getItem==="function"?String($.getItem(RG)||"").trim():"";if(j)return j;let G=SG(_);return $?.setItem?.(RG,G),G}catch($){return SG(_)}}async function lF(_=J3()){let $=await fetch("/terminal/session",{method:"GET",credentials:"same-origin",headers:_?{[vG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return j}async function hF(_=J3()){let $=await fetch("/terminal/handoff",{method:"POST",credentials:"same-origin",headers:_?{[vG]:_}:void 0}),j=await $.json().catch(()=>({}));if(!$.ok)throw Error(j?.error||`HTTP ${$.status}`);return typeof j?.handoff?.token==="string"&&j.handoff.token.trim()?j.handoff.token.trim():null}function pF(_,$=null,j=J3()){let G=window.location.protocol==="https:"?"wss:":"ws:",Z=new URL(`${G}//${window.location.host}${_}`);if($)Z.searchParams.set("handoff",String($));if(j)Z.searchParams.set("client",String(j));return Z.toString()}function rF(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){if(!_||!$)return!1;let{documentElement:j,body:G}=$,Z=j?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(Z==="dark")return!0;if(Z==="light")return!1;if(j?.classList?.contains("dark")||G?.classList?.contains("dark"))return!0;if(j?.classList?.contains("light")||G?.classList?.contains("light"))return!1;return Boolean(_.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function F4(_,$="",j=typeof document<"u"?document:null){if(!j)return $;return getComputedStyle(j.documentElement).getPropertyValue(_)?.trim()||$}function Z6(_){let $=String(_||"").trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(/^[0-9a-fA-F]{3}$/.test(j)||/^[0-9a-fA-F]{6}$/.test(j)){let Z=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,X=parseInt(Z,16);return{r:X>>16&255,g:X>>8&255,b:X&255}}let G=$.match(/rgba?\(\s*(\d+)[,\s]\s*(\d+)[,\s]\s*(\d+)/i);if(G)return{r:parseInt(G[1],10),g:parseInt(G[2],10),b:parseInt(G[3],10)};return null}function uG(_){let $=(j)=>{let G=j/255;return G<=0.03928?G/12.92:Math.pow((G+0.055)/1.055,2.4)};return 0.2126*$(_.r)+0.7152*$(_.g)+0.0722*$(_.b)}function n6(_,$){let j=uG(_),G=uG($),Z=Math.max(j,G),X=Math.min(j,G);return(Z+0.05)/(X+0.05)}function mG(_){let $=Z6(_);if(!$)return"#ffffff";let j={r:255,g:255,b:255},G={r:0,g:0,b:0};return n6($,j)>=n6($,G)?"#ffffff":"#000000"}function Y2(_){let $=(j)=>Math.max(0,Math.min(255,Math.round(j||0)));return`#${[_.r,_.g,_.b].map((j)=>$(j).toString(16).padStart(2,"0")).join("")}`}function gG(_,$,j){let G=Math.max(0,Math.min(1,Number.isFinite(j)?j:0));return{r:_.r+($.r-_.r)*G,g:_.g+($.g-_.g)*G,b:_.b+($.b-_.b)*G}}function G1(_,$,j=4.5){let G=Z6(_),Z=Z6($);if(!G||!Z)return $;if(n6(G,Z)>=j)return Y2(Z);let X=Z6(mG(_));if(!X)return Y2(Z);let Y=X,L=1,V=0,K=1;for(let B=0;B<14;B+=1){let N=(V+K)/2,U=gG(Z,X,N);if(n6(G,U)>=j)Y=U,L=N,K=N;else V=N}let Q=Y2(Y),q=Z6(Q);while(q&&n6(G,q)<j&&L<1)L=Math.min(1,L+0.01),Q=Y2(gG(Z,X,L)),q=Z6(Q);return Q}function nF(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function bG(_=typeof window<"u"?window:null,$=typeof document<"u"?document:null){let j=rF(_,$),G=j?gF:uF,Z=F4("--bg-primary",j?"#000000":"#ffffff",$),X=F4("--text-primary",j?"#e7e9ea":"#0f1419",$),Y=G1(Z,X||mG(Z),7),L=F4("--accent-color","#1d9bf0",$),V=F4("--danger-color",j?"#ff7b72":"#cf222e",$),K=F4("--success-color",j?"#7ee787":"#1a7f37",$),Q=F4("--bg-hover",j?"#1d1f23":"#e8ebed",$),q=F4("--accent-soft-strong",nF(L,j?"47":"33"),$);return{background:Z,foreground:Y,cursor:G1(Z,L,3),cursorAccent:Z,selectionBackground:q,selectionForeground:Y,black:G1(Z,Q,3),red:G1(Z,V,4.5),green:G1(Z,K,4.5),yellow:G1(Z,G.yellow,4.5),blue:G1(Z,L,4.5),magenta:G1(Z,G.magenta,4.5),cyan:G1(Z,G.cyan,4.5),white:Y,brightBlack:G1(Z,G.brightBlack,3),brightRed:G1(Z,G.brightRed,4.5),brightGreen:G1(Z,G.brightGreen,4.5),brightYellow:G1(Z,G.brightYellow,4.5),brightBlue:G1(Z,G.brightBlue,4.5),brightMagenta:G1(Z,G.brightMagenta,4.5),brightCyan:G1(Z,G.brightCyan,4.5),brightWhite:Y}}function cG(_){let $=_?.activeElement;if(!$||$===_?.body||$===_?.documentElement)return!1;if(typeof $.blur!=="function")return!1;return $.blur(),!0}function O3(_,$){let j=[_?.inputElement,_?.textarea,_?.container,$,$?.querySelector?.("textarea")].filter((G,Z,X)=>Boolean(G)&&X.indexOf(G)===Z);for(let G of j)try{let Z=G.ownerDocument?.defaultView||window,X=typeof Z.CompositionEvent==="function"?new Z.CompositionEvent("compositionend",{data:""}):new Z.Event("compositionend");G.dispatchEvent?.(X)}catch(Z){console.debug("[terminal-pane] Failed to dispatch best-effort IME composition reset.",Z)}if(_&&typeof _==="object")_.isComposing=!1,_.pendingKeyAfterComposition=null,_.compositionJustEnded=!1}function dF(_){if(cG(_.ownerDocument),O3(_.terminal,_.terminalHost||null),typeof _.terminal?.focus==="function")_.terminal.focus();else _.termEl?.focus?.();O3(_.terminal,_.terminalHost||null)}class A3{container;ownerDocument;ownerWindow;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;resizeRetryTimers=new Set;lastAppliedThemeSignature=null;lastResizeSignature=null;pendingHandoffToken=null;standbyHandoffToken=null;standbyHandoffRequest=null;constructor(_,$){this.container=_,this.ownerDocument=_.ownerDocument||document,this.ownerWindow=this.ownerDocument.defaultView||window;let j=typeof $?.transferState?.handoffToken==="string"&&$.transferState.handoffToken.trim()?$.transferState.handoffToken.trim():null,G=G6("terminal_handoff");this.pendingHandoffToken=j||G||null,this.termEl=this.ownerDocument.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.termEl.setAttribute("inputmode","none"),this.statusEl=this.ownerDocument.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=this.ownerDocument.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.style.display="flex",this.bodyEl.style.flex="1 1 auto",this.bodyEl.style.minHeight="0",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,G=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,X=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(G)}:${Math.round(Z)}x${Math.round(X)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;_.style.display="flex",_.style.flex="1 1 auto",_.style.width="100%",_.style.height="100%",_.style.minWidth="0",_.style.minHeight="0",_.style.overflow="hidden";let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.minHeight="0",$.style.flex="1 1 auto",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none",j.style.maxHeight="none"}queueResizeRetries(_=[32,96,180,320,520,900]){if(this.disposed||!this.ownerWindow)return;this.clearResizeRetries();for(let $ of _){let j=this.ownerWindow.setTimeout(()=>{if(this.resizeRetryTimers.delete(j),this.disposed)return;this.scheduleResize(!0)},$);this.resizeRetryTimers.add(j)}}clearResizeRetries(){if(!this.ownerWindow||this.resizeRetryTimers.size===0)return;for(let _ of Array.from(this.resizeRetryTimers))try{this.ownerWindow.clearTimeout(_)}catch($){console.debug("[terminal-pane] Ignoring timeout clear failure during resize retry drain.",$,{timer:_})}this.resizeRetryTimers.clear()}scheduleResize(_=!1){if(this.disposed)return;let $=this.getResizeSignature();if(!_&&this.lastResizeSignature===$)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await mF();if(await cF(),this.disposed)return;this.bodyEl.innerHTML="";let $=this.ownerDocument.createElement("div");$.className="terminal-live-host",$.style.display="flex",$.style.flex="1 1 auto",$.style.width="100%",$.style.height="100%",$.style.minWidth="0",$.style.minHeight="0",$.setAttribute("inputmode","none"),this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:fF,fontSize:13,theme:bG(this.ownerWindow,this.ownerDocument)}),G=null;if(typeof _.FitAddon==="function")G=new _.FitAddon,j.loadAddon?.(G);cG(this.ownerDocument),await j.open($),$.__terminal=j,O3(j,$),this.syncHostLayout(),j.loadFonts?.(),G?.observeResize?.(),this.terminal=j,this.fitAddon=G,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=bG(this.ownerWindow,this.ownerDocument),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;fG({termEl:this.termEl,bodyEl:this.bodyEl,terminal:this.terminal,theme:_,themeChanged:j,socket:this.socket,resize:()=>this.resize()}),this.lastAppliedThemeSignature=$}installThemeSync(){if(!this.ownerWindow||!this.ownerDocument)return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();this.ownerWindow.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=this.ownerWindow.matchMedia?.("(prefers-color-scheme: dark)"),G=()=>_();if(j?.addEventListener)j.addEventListener("change",G);else if(j?.addListener)j.addListener(G);this.mediaQuery=j,this.mediaQueryListener=G;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(this.ownerDocument.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),this.ownerDocument.body)Z?.observe(this.ownerDocument.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(!this.ownerWindow)return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(this.ownerWindow.addEventListener("dock-resize",_),this.ownerWindow.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),j.observe(this.termEl),j.observe(this.bodyEl),this.resizeObserver=j}}consumeStandbyHandoffToken(){let _=this.standbyHandoffToken||null;return this.standbyHandoffToken=null,_}async ensureStandbyHandoffToken(_=!1){if(this.disposed)return null;if(!_&&this.standbyHandoffToken)return this.standbyHandoffToken;if(this.standbyHandoffRequest)return await this.standbyHandoffRequest;return this.standbyHandoffRequest=hF().then(($)=>{if(!$||this.disposed)return null;return this.standbyHandoffToken=$,$}).catch(($)=>{return console.warn("[terminal-pane] Failed to prepare standby handoff token:",$),null}).finally(()=>{this.standbyHandoffRequest=null}),await this.standbyHandoffRequest}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await lF();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=this.pendingHandoffToken||null,G=new WebSocket(pF($.ws_path||"/terminal/ws",j));this.socket=G,this.setStatus(j?"Transferring…":"Connecting…"),_.onData?.((Z)=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"input",data:Z}))}),_.onResize?.(({cols:Z,rows:X})=>{if(G.readyState===WebSocket.OPEN)G.send(JSON.stringify({type:"resize",cols:Z,rows:X}))}),G.addEventListener("open",()=>{if(this.disposed)return;if(j&&this.pendingHandoffToken===j)this.pendingHandoffToken=null;this.ensureStandbyHandoffToken(!1),this.setStatus("Connected"),this.scheduleResize(!0),this.queueResizeRetries([24,72,160,320])}),G.addEventListener("message",(Z)=>{if(this.disposed)return;let X=null;try{X=JSON.parse(String(Z.data))}catch{X={type:"output",data:String(Z.data)}}if(X?.type==="session"){let Y=typeof X.session_id==="string"?X.session_id:null;if(_.__piclawSessionMeta={sessionId:Y,createdAt:typeof X.created_at==="string"?X.created_at:null,processPid:typeof X.process_pid==="number"?X.process_pid:null},!this.standbyHandoffToken)this.ensureStandbyHandoffToken(!1);return}if(X?.type==="output"&&typeof X.data==="string"){_.write?.(X.data);return}if(X?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),G.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),G.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}detachHostListeners(){IG({ownerWindow:this.ownerWindow,themeChangeListener:this.themeChangeListener,mediaQuery:this.mediaQuery,mediaQueryListener:this.mediaQueryListener,dockResizeListener:this.dockResizeListener,windowResizeListener:this.windowResizeListener,themeObserver:this.themeObserver,resizeObserver:this.resizeObserver}),this.themeChangeListener=null,this.mediaQuery=null,this.mediaQueryListener=null,this.themeObserver=null,this.resizeObserver=null,this.dockResizeListener=null,this.windowResizeListener=null}beforeDetachFromHost(){this.setStatus("Moving terminal…")}afterAttachToHost(_){let $=typeof _?.transferState?.handoffToken==="string"&&_.transferState.handoffToken.trim()?_.transferState.handoffToken.trim():null;if($)this.pendingHandoffToken=$;if(this.installThemeSync(),this.installResizeSync(),this.socket?.readyState===WebSocket.OPEN)this.setStatus("Connected");else if(this.pendingHandoffToken)this.setStatus("Transferring…");else if(this.socket?.readyState===WebSocket.CONNECTING)this.setStatus("Connecting…");this.scheduleResize(!0),this.queueResizeRetries([32,96,180,320]),requestAnimationFrame(()=>this.focus())}moveHost(_){return!1}exportHostTransferState(){let _=this.standbyHandoffToken||this.pendingHandoffToken||null;return _?{kind:"terminal",live:!1,handoffToken:_}:null}async preparePopoutTransfer(){let _=this.consumeStandbyHandoffToken();if(!_)await this.ensureStandbyHandoffToken(!0),_=this.consumeStandbyHandoffToken();if(!_)return null;return this.pendingHandoffToken=_,{terminal_handoff:_}}getContent(){return}isDirty(){return!1}focus(){let _=this.bodyEl.querySelector(".terminal-live-host");dF({terminal:this.terminal,terminalHost:_,termEl:this.termEl,ownerDocument:this.ownerDocument})}resize(){CG({syncHostLayout:()=>this.syncHostLayout(),terminal:this.terminal,fitAddon:this.fitAddon,sendResize:()=>this.sendResize()})}dispose(){if(this.disposed)return;this.disposed=!0,this.standbyHandoffToken=null,this.standbyHandoffRequest=null,this.clearResizeRetries(),this.detachHostListeners(),this.resizeFrame=PG({resizeFrame:this.resizeFrame,socket:this.socket,fitAddon:this.fitAddon,terminal:this.terminal,termEl:this.termEl})}}var k3={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new A3(_,$)}},y3={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path===X6?1e4:!1},mount(_,$){return new A3(_,$)}};function f1(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function L2(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let G=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),X=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(G),Y=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(X||Z>1||Y)}function lG(_,$={}){if(f1($))return null;if(L2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:iF(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function M3(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function w3(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),G=String($.message||"Preparing a new branch window…");_.document.title=j;let Z=_.document.body;if(!Z)return;if(typeof _.document.createElement!=="function"){Z.textContent=`${j}
${G}`;return}let X=_.document.createElement("div");X.setAttribute("style","font-family: system-ui, sans-serif; padding: 24px; color: #222;");let Y=_.document.createElement("h1");Y.setAttribute("style","font-size: 18px; margin: 0 0 12px;"),Y.textContent=j;let L=_.document.createElement("p");if(L.setAttribute("style","margin: 0; line-height: 1.5;"),L.textContent=G,X.appendChild(Y),X.appendChild(L),typeof Z.replaceChildren==="function")Z.replaceChildren(X);else Z.innerHTML="",Z.appendChild(X)}catch{return}}function T3(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{return}}function x3(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{return}}function T1(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("chat_jid",Z),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function I3(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(G.searchParams.set("branch_loader","1"),G.searchParams.set("branch_source_chat_jid",Z),G.searchParams.delete("chat_jid"),G.searchParams.delete("pane_popout"),G.searchParams.delete("pane_path"),G.searchParams.delete("pane_label"),j.chatOnly!==!1)G.searchParams.set("chat_only","1");return G.toString()}function hG(_,$,j={}){let G=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return G.toString();if(G.searchParams.set("pane_popout","1"),G.searchParams.set("pane_path",Z),j?.label)G.searchParams.set("pane_label",String(j.label));else G.searchParams.delete("pane_label");if(j?.chatJid)G.searchParams.set("chat_jid",String(j.chatJid));let X=j?.params&&typeof j.params==="object"?j.params:null;if(X)for(let[Y,L]of Object.entries(X)){let V=String(Y||"").trim();if(!V)continue;if(L===null||L===void 0||L==="")G.searchParams.delete(V);else G.searchParams.set(V,String(L))}return G.searchParams.delete("chat_only"),G.searchParams.delete("branch_loader"),G.searchParams.delete("branch_source_chat_jid"),G.toString()}function iF(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function oF(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function pG(_,$={}){if(f1($))return null;if(L2($))return{target:"_blank",features:void 0,mode:"tab"};return{target:oF(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function U4(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let G=j.toLowerCase();if(G.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(G.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(G.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(G.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(G.includes("failed to fork branch")||G.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function sF(_){try{return JSON.parse(_)}catch{return null}}function aF(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function tF(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}function rG(_){try{return _?.close?.(),!0}catch($){return!1}}class C3{socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;pendingOutbound=[];constructor(_){this.options=_}connect(){if(this.disposed)return;rG(this.socket);let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.flushPendingOutbound(_),this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=tF($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let G=this.options.parseControlMessage||sF;this.options.onMessage?.({kind:"control",raw:$.data,payload:G($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed)return;let $=this.socket;if(!$||$.readyState!==WebSocket.OPEN){this.pendingOutbound.push(_);return}this.sendNow($,_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0,rG(this.socket),this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}sendNow(_,$){let j=aF($);this.bytesOut+=j,this.emitMetrics(),_.send($)}flushPendingOutbound(_){if(this.pendingOutbound.length===0)return;let $=this.pendingOutbound.splice(0);for(let j=0;j<$.length;j+=1){if(this.disposed||this.socket!==_||_.readyState!==WebSocket.OPEN){this.pendingOutbound.unshift(...$.slice(j));return}this.sendNow(_,$[j])}}}var d6=()=>{throw Error("Operation requires compiling with --exportRuntime")},eF=typeof BigUint64Array<"u",i6=Symbol();var _U=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function nG(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,G=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...G);try{return _U.decode(G)}catch{let Z="",X=0;while(j-X>1024)Z+=String.fromCharCode(...G.subarray(X,X+=1024));return Z+String.fromCharCode(...G.subarray(X))}}function dG(_){let $={};function j(Z,X){if(!Z)return"<yet unknown>";return nG(Z.buffer,X)}let G=_.env=_.env||{};return G.abort=G.abort||function(X,Y,L,V){let K=$.memory||G.memory;throw Error(`abort: ${j(K,X)} at ${j(K,Y)}:${L}:${V}`)},G.trace=G.trace||function(X,Y,...L){let V=$.memory||G.memory;console.log(`trace: ${j(V,X)}${Y?" ":""}${L.slice(0,Y).join(", ")}`)},G.seed=G.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function iG(_,$){let j=$.exports,G=j.memory,Z=j.table,X=j.__new||d6,Y=j.__pin||d6,L=j.__unpin||d6,V=j.__collect||d6,K=j.__rtti_base,Q=K?(z)=>z[K>>>2]:d6;_.__new=X,_.__pin=Y,_.__unpin=L,_.__collect=V;function q(z){let y=new Uint32Array(G.buffer);if((z>>>=0)>=Q(y))throw Error(`invalid id: ${z}`);return y[(K+4>>>2)+z]}function B(z){let y=q(z);if(!(y&7))throw Error(`not an array: ${z}, flags=${y}`);return y}function N(z){return 31-Math.clz32(z>>>6&31)}function U(z){if(z==null)return 0;let y=z.length,I=X(y<<1,2),R=new Uint16Array(G.buffer);for(let f=0,v=I>>>1;f<y;++f)R[v+f]=z.charCodeAt(f);return I}_.__newString=U;function E(z){if(z==null)return 0;let y=new Uint8Array(z),I=X(y.length,1);return new Uint8Array(G.buffer).set(y,I),I}_.__newArrayBuffer=E;function D(z){if(!z)return null;let y=G.buffer;if(new Uint32Array(y)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return nG(y,z)}_.__getString=D;function H(z,y,I){let R=G.buffer;if(I)switch(z){case 2:return new Float32Array(R);case 3:return new Float64Array(R)}else switch(z){case 0:return new(y?Int8Array:Uint8Array)(R);case 1:return new(y?Int16Array:Uint16Array)(R);case 2:return new(y?Int32Array:Uint32Array)(R);case 3:return new(y?BigInt64Array:BigUint64Array)(R)}throw Error(`unsupported align: ${z}`)}function M(z,y=0){let I=y,R=B(z),f=N(R),v=typeof I!=="number",l=v?I.length:I,h=X(l<<f,R&4?z:1),n;if(R&4)n=h;else{Y(h);let b=X(R&2?16:12,z);L(h);let $0=new Uint32Array(G.buffer);if($0[b+0>>>2]=h,$0[b+4>>>2]=h,$0[b+8>>>2]=l<<f,R&2)$0[b+12>>>2]=l;n=b}if(v){let b=H(f,R&2048,R&4096),$0=h>>>f;if(R&16384)for(let E0=0;E0<l;++E0)b[$0+E0]=I[E0];else b.set(I,$0)}return n}_.__newArray=M;function J(z){let y=new Uint32Array(G.buffer),I=y[z+-8>>>2],R=B(I),f=N(R),v=R&4?z:y[z+4>>>2],l=R&2?y[z+12>>>2]:y[v+-4>>>2]>>>f;return H(f,R&2048,R&4096).subarray(v>>>=f,v+l)}_.__getArrayView=J;function W(z){let y=J(z),I=y.length,R=Array(I);for(let f=0;f<I;f++)R[f]=y[f];return R}_.__getArray=W;function T(z){let y=G.buffer,I=new Uint32Array(y)[z+-4>>>2];return y.slice(z,z+I)}_.__getArrayBuffer=T;function x(z){if(!Z)throw Error("Operation requires compiling with --exportTable");let y=new Uint32Array(G.buffer)[z>>>2];return Z.get(y)}_.__getFunction=x;function A(z,y,I){return new z(k(z,y,I))}function k(z,y,I){let R=G.buffer,f=new Uint32Array(R);return new z(R,f[I+4>>>2],f[I+8>>>2]>>>y)}function O(z,y,I){_[`__get${y}`]=A.bind(null,z,I),_[`__get${y}View`]=k.bind(null,z,I)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{O(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),eF)[BigUint64Array,BigInt64Array].forEach((z)=>{O(z,z.name.slice(3),3)});return _.memory=_.memory||G,_.table=_.table||Z,jU(j,_)}function oG(_){return typeof Response<"u"&&_ instanceof Response}function $U(_){return _ instanceof WebAssembly.Module}async function P3(_,$={}){if(oG(_=await _))return K2(_,$);let j=$U(_)?_:await WebAssembly.compile(_),G=dG($),Z=await WebAssembly.instantiate(j,$),X=iG(G,Z);return{module:j,instance:Z,exports:X}}async function K2(_,$={}){if(!WebAssembly.instantiateStreaming)return P3(oG(_=await _)?_.arrayBuffer():_,$);let j=dG($),G=await WebAssembly.instantiateStreaming(_,$),Z=iG(j,G.instance);return{...G,exports:Z}}function jU(_,$={}){let j=_.__argumentsLength?(G)=>{_.__argumentsLength.value=G}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let G of Object.keys(_)){let Z=_[G],X=G.split("."),Y=$;while(X.length>1){let K=X.shift();if(!Object.hasOwn(Y,K))Y[K]={};Y=Y[K]}let L=X[0],V=L.indexOf("#");if(V>=0){let K=L.substring(0,V),Q=Y[K];if(typeof Q>"u"||!Q.prototype){let q=function(...B){return q.wrap(q.prototype.constructor(0,...B))};if(q.prototype={valueOf(){return this[i6]}},q.wrap=function(B){return Object.create(q.prototype,{[i6]:{value:B,writable:!1}})},Q)Object.getOwnPropertyNames(Q).forEach((B)=>Object.defineProperty(q,B,Object.getOwnPropertyDescriptor(Q,B)));Y[K]=q}if(L=L.substring(V+1),Y=Y[K].prototype,/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4))){let q=_[G.replace("set:","get:")],B=_[G.replace("get:","set:")];Object.defineProperty(Y,L,{get(){return q(this[i6])},set(N){B(this[i6],N)},enumerable:!0})}}else if(L==="constructor")(Y[L]=function(...q){return j(q.length),Z(...q)}).original=Z;else(Y[L]=function(...q){return j(q.length),Z(this[i6],...q)}).original=Z}else if(/^(get|set):/.test(L)){if(!Object.hasOwn(Y,L=L.substring(4)))Object.defineProperty(Y,L,{get:_[G.replace("set:","get:")],set:_[G.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(Y[L]=(...K)=>{return j(K.length),Z(...K)}).original=Z;else Y[L]=Z}return $}function f3(_){try{return _?.__collect?.(),!0}catch($){return!1}}var ZU="/static/js/vendor/remote-display-decoder.wasm",V2=null;function sG(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function aG(){if(V2)return V2;return V2=(async()=>{try{let G=function(Z,X,Y,L,V,K,Q){let q=sG(X),B=j.__pin(j.__newArrayBuffer(q));try{return j[Z](B,Y,L,V,K,Q.bitsPerPixel,Q.bigEndian?1:0,Q.trueColor?1:0,Q.redMax,Q.greenMax,Q.blueMax,Q.redShift,Q.greenShift,Q.blueShift)}finally{j.__unpin(B),f3(j)}},_=await fetch(ZU,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof K2==="function"?await K2(_,{}):await P3(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,X){j.initFramebuffer(Z,X)},getFramebuffer(){let Z=j.getFramebufferPtr(),X=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,X).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,X,Y,L,V,K){return G("processRawRect",Z,X,Y,L,V,K)},processCopyRect(Z,X,Y,L,V,K){return j.processCopyRect(Z,X,Y,L,V,K)},processRreRect(Z,X,Y,L,V,K){return G("processRreRect",Z,X,Y,L,V,K)},processHextileRect(Z,X,Y,L,V,K){return G("processHextileRect",Z,X,Y,L,V,K)},processZrleTileData(Z,X,Y,L,V,K){return G("processZrleTileData",Z,X,Y,L,V,K)},decodeRawRectToRgba(Z,X,Y,L){let V=sG(Z),K=j.__pin(j.__newArrayBuffer(V));try{let Q=j.__pin(j.decodeRawRectToRgba(K,X,Y,L.bitsPerPixel,L.bigEndian?1:0,L.trueColor?1:0,L.redMax,L.greenMax,L.blueMax,L.redShift,L.greenShift,L.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(Q))}finally{j.__unpin(Q)}}finally{j.__unpin(K),f3(j)}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),V2}function Y6(_,$,j){return Math.max($,Math.min(j,_))}function q2(_,$,j){let G=new Uint8Array(6),Z=Y6(Math.floor(Number($||0)),0,65535),X=Y6(Math.floor(Number(j||0)),0,65535);return G[0]=5,G[1]=Y6(Math.floor(Number(_||0)),0,255),G[2]=Z>>8&255,G[3]=Z&255,G[4]=X>>8&255,G[5]=X&255,G}function m$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function S3(_){let $=m$(_?.button);if($)return $;let j=String(_?.pointerType||"").toLowerCase();if(j==="touch"||j==="pen")return m$(0);let G=Number(_?.buttons||0);if(G&1)return m$(0);if(G&4)return m$(1);if(G&2)return m$(2);return 0}function H4(_){let $=String(_?.type||"").toLowerCase();if($==="pointerup"||$==="pointercancel"||$==="lostpointercapture")return!0;let j=Number(_?.buttons);if(Number.isFinite(j)&&j===0&&$!=="pointerdown")return!0;let G=String(_?.pointerType||"").toLowerCase(),Z=Number(_?.pressure);if(G==="touch"||G==="pen"){if($==="pointerleave"||$==="pointerout")return!0;if(Number.isFinite(Z)&&Z<=0&&$!=="pointerdown")return!0}return!1}function tG(_){let $=String(_?.type||"").toLowerCase();if($==="touchend"||$==="touchcancel")return!0;if($==="touchmove")return Number(_?.touches?.length||0)<=0;return!1}function p1(_){return String(_||"").toLowerCase()==="touch"}function XU(_,$,j,G){let Z=Number(j||0)-Number(_||0),X=Number(G||0)-Number($||0);return Math.hypot(Z,X)}function u3(_){let $=Number.isFinite(_?.maxDistancePx)?Number(_.maxDistancePx):14;return XU(_?.startX,_?.startY,_?.clientX,_?.clientY)>$}function eG(_){let $=Number.isFinite(_?.maxElapsedMs)?Number(_.maxElapsedMs):300;if(Number(_?.elapsedMs||0)>$)return!1;return!u3(_)}function _Z(_){return String(_||"").toLowerCase()!=="mouse"}function g3(_,$,j,G,Z){let X=Math.max(1,Math.floor(Number(G||0))),Y=Math.max(1,Math.floor(Number(Z||0))),L=Math.max(1,Number(j?.width||0)),V=Math.max(1,Number(j?.height||0)),K=(Number(_||0)-Number(j?.left||0))/L,Q=(Number($||0)-Number(j?.top||0))/V;return{x:Y6(Math.floor(K*X),0,Math.max(0,X-1)),y:Y6(Math.floor(Q*Y),0,Math.max(0,Y-1))}}function $Z(_,$,j,G=0){let Z=Number(_)<0?8:16,X=Y6(Number(G||0)|Z,0,255);return[q2(X,$,j),q2(Number(G||0),$,j)]}function jZ(_,$){let j=new Uint8Array(8),G=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=G>>>24&255,j[5]=G>>>16&255,j[6]=G>>>8&255,j[7]=G&255,j}function GZ(_,$,j=!1){if(_==null||$==null)return!1;return Boolean(j)||Number(_)===Number($)}function E4(_){if(typeof _!=="string")return null;return _.length>0?_:null}function ZZ(_,$,j,G){let Z=Math.max(1,Math.floor(Number(_||0))),X=Math.max(1,Math.floor(Number($||0))),Y=Math.max(1,Math.floor(Number(j||0))),L=Math.max(1,Math.floor(Number(G||0))),V=Math.min(Z/Y,X/L);if(!Number.isFinite(V)||V<=0)return 1;return Math.max(0.01,V)}var R3={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)R3[`F${_}`]=65470+(_-1);function b3(_){let $=[_?.key,_?.code];for(let X of $)if(X&&Object.prototype.hasOwnProperty.call(R3,X))return R3[X];let j=String(_?.key||""),G=j?j.codePointAt(0):null,Z=G==null?0:G>65535?2:1;if(G!=null&&j.length===Z){if(G<=255)return G;return(16777216|G)>>>0}return null}var o_=Uint8Array,D1=Uint16Array,d3=Int32Array,Q2=new o_([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),N2=new o_([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),h3=new o_([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),KZ=function(_,$){var j=new D1(31);for(var G=0;G<31;++G)j[G]=$+=1<<_[G-1];var Z=new d3(j[30]);for(var G=1;G<30;++G)for(var X=j[G];X<j[G+1];++X)Z[X]=X-j[G]<<5|G;return{b:j,r:Z}},VZ=KZ(Q2,2),qZ=VZ.b,p3=VZ.r;qZ[28]=258,p3[258]=28;var QZ=KZ(N2,0),YU=QZ.b,XZ=QZ.r,r3=new D1(32768);for(q_=0;q_<32768;++q_)r1=(q_&43690)>>1|(q_&21845)<<1,r1=(r1&52428)>>2|(r1&13107)<<2,r1=(r1&61680)>>4|(r1&3855)<<4,r3[q_]=((r1&65280)>>8|(r1&255)<<8)>>1;var r1,q_,n1=function(_,$,j){var G=_.length,Z=0,X=new D1($);for(;Z<G;++Z)if(_[Z])++X[_[Z]-1];var Y=new D1($);for(Z=1;Z<$;++Z)Y[Z]=Y[Z-1]+X[Z-1]<<1;var L;if(j){L=new D1(1<<$);var V=15-$;for(Z=0;Z<G;++Z)if(_[Z]){var K=Z<<4|_[Z],Q=$-_[Z],q=Y[_[Z]-1]++<<Q;for(var B=q|(1<<Q)-1;q<=B;++q)L[r3[q]>>V]=K}}else{L=new D1(G);for(Z=0;Z<G;++Z)if(_[Z])L[Z]=r3[Y[_[Z]-1]++]>>15-_[Z]}return L},c$=new o_(288);for(q_=0;q_<144;++q_)c$[q_]=8;var q_;for(q_=144;q_<256;++q_)c$[q_]=9;var q_;for(q_=256;q_<280;++q_)c$[q_]=7;var q_;for(q_=280;q_<288;++q_)c$[q_]=8;var q_,t6=new o_(32);for(q_=0;q_<32;++q_)t6[q_]=5;var q_,LU=n1(c$,9,0),KU=n1(c$,9,1),VU=n1(t6,5,0),qU=n1(t6,5,1),v3=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},R1=function(_,$,j){var G=$/8|0;return(_[G]|_[G+1]<<8)>>($&7)&j},m3=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},i3=function(_){return(_+7)/8|0},a6=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new o_(_.subarray($,j))};var QU=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],N1=function(_,$,j){var G=Error($||QU[_]);if(G.code=_,Error.captureStackTrace)Error.captureStackTrace(G,N1);if(!j)throw G;return G},NU=function(_,$,j,G){var Z=_.length,X=G?G.length:0;if(!Z||$.f&&!$.l)return j||new o_(0);var Y=!j,L=Y||$.i!=2,V=$.i;if(Y)j=new o_(Z*3);var K=function(j0){var z0=j.length;if(j0>z0){var C0=new o_(Math.max(z0*2,j0));C0.set(j),j=C0}},Q=$.f||0,q=$.p||0,B=$.b||0,N=$.l,U=$.d,E=$.m,D=$.n,H=Z*8;do{if(!N){Q=R1(_,q,1);var M=R1(_,q+1,3);if(q+=3,!M){var J=i3(q)+4,W=_[J-4]|_[J-3]<<8,T=J+W;if(T>Z){if(V)N1(0);break}if(L)K(B+W);j.set(_.subarray(J,T),B),$.b=B+=W,$.p=q=T*8,$.f=Q;continue}else if(M==1)N=KU,U=qU,E=9,D=5;else if(M==2){var x=R1(_,q,31)+257,A=R1(_,q+10,15)+4,k=x+R1(_,q+5,31)+1;q+=14;var O=new o_(k),z=new o_(19);for(var y=0;y<A;++y)z[h3[y]]=R1(_,q+y*3,7);q+=A*3;var I=v3(z),R=(1<<I)-1,f=n1(z,I,1);for(var y=0;y<k;){var v=f[R1(_,q,R)];q+=v&15;var J=v>>4;if(J<16)O[y++]=J;else{var l=0,h=0;if(J==16)h=3+R1(_,q,3),q+=2,l=O[y-1];else if(J==17)h=3+R1(_,q,7),q+=3;else if(J==18)h=11+R1(_,q,127),q+=7;while(h--)O[y++]=l}}var n=O.subarray(0,x),b=O.subarray(x);E=v3(n),D=v3(b),N=n1(n,E,1),U=n1(b,D,1)}else N1(1);if(q>H){if(V)N1(0);break}}if(L)K(B+131072);var $0=(1<<E)-1,E0=(1<<D)-1,V0=q;for(;;V0=q){var l=N[m3(_,q)&$0],K0=l>>4;if(q+=l&15,q>H){if(V)N1(0);break}if(!l)N1(2);if(K0<256)j[B++]=K0;else if(K0==256){V0=q,N=null;break}else{var X0=K0-254;if(K0>264){var y=K0-257,F0=Q2[y];X0=R1(_,q,(1<<F0)-1)+qZ[y],q+=F0}var _0=U[m3(_,q)&E0],Y0=_0>>4;if(!_0)N1(3);q+=_0&15;var b=YU[Y0];if(Y0>3){var F0=N2[Y0];b+=m3(_,q)&(1<<F0)-1,q+=F0}if(q>H){if(V)N1(0);break}if(L)K(B+131072);var Q0=B+X0;if(B<b){var J0=X-b,s=Math.min(b,Q0);if(J0+B<0)N1(3);for(;B<s;++B)j[B]=G[J0+B]}for(;B<Q0;++B)j[B]=j[B-b]}}if($.l=N,$.p=V0,$.b=B,$.f=Q,N)Q=1,$.m=E,$.d=U,$.n=D}while(!Q);return B!=j.length&&Y?a6(j,0,B):j.subarray(0,B)},N$=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8},o6=function(_,$,j){j<<=$&7;var G=$/8|0;_[G]|=j,_[G+1]|=j>>8,_[G+2]|=j>>16},c3=function(_,$){var j=[];for(var G=0;G<_.length;++G)if(_[G])j.push({s:G,f:_[G]});var Z=j.length,X=j.slice();if(!Z)return{t:BZ,l:0};if(Z==1){var Y=new o_(j[0].s+1);return Y[j[0].s]=1,{t:Y,l:1}}j.sort(function(T,x){return T.f-x.f}),j.push({s:-1,f:25001});var L=j[0],V=j[1],K=0,Q=1,q=2;j[0]={s:-1,f:L.f+V.f,l:L,r:V};while(Q!=Z-1)L=j[j[K].f<j[q].f?K++:q++],V=j[K!=Q&&j[K].f<j[q].f?K++:q++],j[Q++]={s:-1,f:L.f+V.f,l:L,r:V};var B=X[0].s;for(var G=1;G<Z;++G)if(X[G].s>B)B=X[G].s;var N=new D1(B+1),U=n3(j[Q-1],N,0);if(U>$){var G=0,E=0,D=U-$,H=1<<D;X.sort(function(x,A){return N[A.s]-N[x.s]||x.f-A.f});for(;G<Z;++G){var M=X[G].s;if(N[M]>$)E+=H-(1<<U-N[M]),N[M]=$;else break}E>>=D;while(E>0){var J=X[G].s;if(N[J]<$)E-=1<<$-N[J]++-1;else++G}for(;G>=0&&E;--G){var W=X[G].s;if(N[W]==$)--N[W],++E}U=$}return{t:new o_(N),l:U}},n3=function(_,$,j){return _.s==-1?Math.max(n3(_.l,$,j+1),n3(_.r,$,j+1)):$[_.s]=j},YZ=function(_){var $=_.length;while($&&!_[--$]);var j=new D1(++$),G=0,Z=_[0],X=1,Y=function(V){j[G++]=V};for(var L=1;L<=$;++L)if(_[L]==Z&&L!=$)++X;else{if(!Z&&X>2){for(;X>138;X-=138)Y(32754);if(X>2)Y(X>10?X-11<<5|28690:X-3<<5|12305),X=0}else if(X>3){Y(Z),--X;for(;X>6;X-=6)Y(8304);if(X>2)Y(X-3<<5|8208),X=0}while(X--)Y(Z);X=1,Z=_[L]}return{c:j.subarray(0,G),n:$}},s6=function(_,$){var j=0;for(var G=0;G<$.length;++G)j+=_[G]*$[G];return j},NZ=function(_,$,j){var G=j.length,Z=i3($+2);_[Z]=G&255,_[Z+1]=G>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var X=0;X<G;++X)_[Z+X+4]=j[X];return(Z+4+G)*8},LZ=function(_,$,j,G,Z,X,Y,L,V,K,Q){N$($,Q++,j),++Z[256];var q=c3(Z,15),B=q.t,N=q.l,U=c3(X,15),E=U.t,D=U.l,H=YZ(B),M=H.c,J=H.n,W=YZ(E),T=W.c,x=W.n,A=new D1(19);for(var k=0;k<M.length;++k)++A[M[k]&31];for(var k=0;k<T.length;++k)++A[T[k]&31];var O=c3(A,7),z=O.t,y=O.l,I=19;for(;I>4&&!z[h3[I-1]];--I);var R=K+5<<3,f=s6(Z,c$)+s6(X,t6)+Y,v=s6(Z,B)+s6(X,E)+Y+14+3*I+s6(A,z)+2*A[16]+3*A[17]+7*A[18];if(V>=0&&R<=f&&R<=v)return NZ($,Q,_.subarray(V,V+K));var l,h,n,b;if(N$($,Q,1+(v<f)),Q+=2,v<f){l=n1(B,N,0),h=B,n=n1(E,D,0),b=E;var $0=n1(z,y,0);N$($,Q,J-257),N$($,Q+5,x-1),N$($,Q+10,I-4),Q+=14;for(var k=0;k<I;++k)N$($,Q+3*k,z[h3[k]]);Q+=3*I;var E0=[M,T];for(var V0=0;V0<2;++V0){var K0=E0[V0];for(var k=0;k<K0.length;++k){var X0=K0[k]&31;if(N$($,Q,$0[X0]),Q+=z[X0],X0>15)N$($,Q,K0[k]>>5&127),Q+=K0[k]>>12}}}else l=LU,h=c$,n=VU,b=t6;for(var k=0;k<L;++k){var F0=G[k];if(F0>255){var X0=F0>>18&31;if(o6($,Q,l[X0+257]),Q+=h[X0+257],X0>7)N$($,Q,F0>>23&31),Q+=Q2[X0];var _0=F0&31;if(o6($,Q,n[_0]),Q+=b[_0],_0>3)o6($,Q,F0>>5&8191),Q+=N2[_0]}else o6($,Q,l[F0]),Q+=h[F0]}return o6($,Q,l[256]),Q+h[256]},BU=new d3([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),BZ=new o_(0),FU=function(_,$,j,G,Z,X){var Y=X.z||_.length,L=new o_(G+Y+5*(1+Math.ceil(Y/7000))+Z),V=L.subarray(G,L.length-Z),K=X.l,Q=(X.r||0)&7;if($){if(Q)V[0]=X.r>>3;var q=BU[$-1],B=q>>13,N=q&8191,U=(1<<j)-1,E=X.p||new D1(32768),D=X.h||new D1(U+1),H=Math.ceil(j/3),M=2*H,J=function(h0){return(_[h0]^_[h0+1]<<H^_[h0+2]<<M)&U},W=new d3(25000),T=new D1(288),x=new D1(32),A=0,k=0,O=X.i||0,z=0,y=X.w||0,I=0;for(;O+2<Y;++O){var R=J(O),f=O&32767,v=D[R];if(E[f]=v,D[R]=f,y<=O){var l=Y-O;if((A>7000||z>24576)&&(l>423||!K)){Q=LZ(_,V,0,W,T,x,k,z,I,O-I,Q),z=A=k=0,I=O;for(var h=0;h<286;++h)T[h]=0;for(var h=0;h<30;++h)x[h]=0}var n=2,b=0,$0=N,E0=f-v&32767;if(l>2&&R==J(O-E0)){var V0=Math.min(B,l)-1,K0=Math.min(32767,O),X0=Math.min(258,l);while(E0<=K0&&--$0&&f!=v){if(_[O+n]==_[O+n-E0]){var F0=0;for(;F0<X0&&_[O+F0]==_[O+F0-E0];++F0);if(F0>n){if(n=F0,b=E0,F0>V0)break;var _0=Math.min(E0,F0-2),Y0=0;for(var h=0;h<_0;++h){var Q0=O-E0+h&32767,J0=E[Q0],s=Q0-J0&32767;if(s>Y0)Y0=s,v=Q0}}}f=v,v=E[f],E0+=f-v&32767}}if(b){W[z++]=268435456|p3[n]<<18|XZ[b];var j0=p3[n]&31,z0=XZ[b]&31;k+=Q2[j0]+N2[z0],++T[257+j0],++x[z0],y=O+n,++A}else W[z++]=_[O],++T[_[O]]}}for(O=Math.max(O,y);O<Y;++O)W[z++]=_[O],++T[_[O]];if(Q=LZ(_,V,K,W,T,x,k,z,I,O-I,Q),!K)X.r=Q&7|V[Q/8|0]<<3,Q-=7,X.h=D,X.p=E,X.i=O,X.w=y}else{for(var O=X.w||0;O<Y+K;O+=65535){var C0=O+65535;if(C0>=Y)V[Q/8|0]=K,C0=Y;Q=NZ(V,Q+1,_.subarray(O,C0))}X.i=Y}return a6(L,0,G+i3(Q)+Z)};var FZ=function(){var _=1,$=0;return{p:function(j){var G=_,Z=$,X=j.length|0;for(var Y=0;Y!=X;){var L=Math.min(Y+2655,X);for(;Y<L;++Y)Z+=G+=j[Y];G=(G&65535)+15*(G>>16),Z=(Z&65535)+15*(Z>>16)}_=G,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},UU=function(_,$,j,G,Z){if(!Z){if(Z={l:1},$.dictionary){var X=$.dictionary.subarray(-32768),Y=new o_(X.length+_.length);Y.set(X),Y.set(_,X.length),_=Y,Z.w=X.length}}return FU(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,G,Z)};var UZ=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var HU=function(_,$){var j=$.level,G=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=G<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=FZ();Z.p($.dictionary),UZ(_,2,Z.d())}},EU=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)N1(6,"invalid zlib data");if((_[1]>>5&1)==+!$)N1(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var l3=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var G=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:G?G.length:0},this.o=new o_(32768),this.p=new o_(0),G)this.o.set(G)}return _.prototype.e=function($){if(!this.ondata)N1(5);if(this.d)N1(4);if(!this.p.length)this.p=$;else if($.length){var j=new o_(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,G=NU(this.p,this.s,this.o);this.ondata(a6(G,j,this.s.b),this.d),this.o=a6(G,this.s.b-32768),this.s.b=this.o.length,this.p=a6(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function HZ(_,$){if(!$)$={};var j=FZ();j.p(_);var G=UU(_,$,$.dictionary?6:2,4);return HU(G,$),UZ(G,G.length-4,j.d()),G}var EZ=function(){function _($,j){l3.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(l3.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(EU(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)N1(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}l3.prototype.c.call(this,j)},_}();var DU=typeof TextDecoder<"u"&&new TextDecoder,zU=0;try{DU.decode(BZ,{stream:!0}),zU=1}catch(_){}var WU=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],OU=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],JU=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],AU=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],kU=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],yU=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],MU=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],wU=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],WZ=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;WZ[_]=$}function OZ(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function JZ(_){let $=0n,j=OZ(_);for(let G of j)$=$<<8n|BigInt(G);return $}function TU(_,$){let j=new Uint8Array($),G=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(G&0xffn),G>>=8n;return j}function L6(_,$,j){let G=0n;for(let Z of $){let X=BigInt(_)>>BigInt(j-Z)&1n;G=G<<1n|X}return G}function DZ(_,$){let j=28n,G=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&G}function xU(_){let $=L6(JZ(_),kU,64),j=$>>28n&0x0fffffffn,G=$&0x0fffffffn,Z=[];for(let X of MU){j=DZ(j,X),G=DZ(G,X);let Y=j<<28n|G;Z.push(L6(Y,yU,56))}return Z}function IU(_){let $=0n;for(let j=0;j<8;j+=1){let G=BigInt((7-j)*6),Z=Number(_>>G&0x3fn),X=(Z&32)>>4|Z&1,Y=Z>>1&15;$=$<<4n|BigInt(wU[j][X][Y])}return $}function CU(_,$){let j=L6(_,JU,32)^BigInt($),G=IU(j);return L6(G,AU,32)}function zZ(_,$){let j=xU($),G=L6(JZ(_),WU,64),Z=G>>32n&0xffffffffn,X=G&0xffffffffn;for(let L of j){let V=X,K=(Z^CU(X,L))&0xffffffffn;Z=V,X=K}let Y=X<<32n|Z;return TU(L6(Y,OU,64),8)}function PU(_){let $=String(_??""),j=new Uint8Array(8);for(let G=0;G<8;G+=1){let Z=G<$.length?$.charCodeAt(G)&255:0;j[G]=WZ[Z]}return j}function AZ(_,$){let j=OZ($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let G=PU(_),Z=new Uint8Array(16);return Z.set(zZ(j.slice(0,8),G),0),Z.set(zZ(j.slice(8,16),G),8),Z}var S1="vnc";function fU(_){return Number(_)}function RU(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],G=new Set;for(let Z of $){let X=fU(Z);if(!Number.isFinite(X))continue;let Y=Number(X);if(!G.has(Y))j.push(Y),G.add(Y)}if(j.length>0)return j;return[5,2,1,0,-223]}function q6(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function SU(_,$){let j=q6(_),G=q6($);if(!j.byteLength)return new Uint8Array(G);if(!G.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+G.byteLength);return Z.set(j,0),Z.set(G,j.byteLength),Z}function uU(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),G=0;for(let Z of _||[]){let X=q6(Z);j.set(X,G),G+=X.byteLength}return j}function gU(){return(_)=>{let $=q6(_);try{let j=[],G=new EZ((Z)=>{j.push(new Uint8Array(Z))});if(G.push($,!0),G.err)throw Error(G.msg||"zlib decompression error");return uU(j)}catch(j){try{let G=HZ($);return G instanceof Uint8Array?G:new Uint8Array(G)}catch(G){let Z=G instanceof Error?G.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function bU(_){return new TextEncoder().encode(String(_||""))}function K6(_){return new TextDecoder().decode(q6(_))}function vU(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function mU(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function kZ(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function cU(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function lU(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),G=new DataView(j);G.setUint8(0,2),G.setUint8(1,0),G.setUint16(2,$.length,!1);let Z=4;for(let X of $)G.setInt32(Z,Number(X||0),!1),Z+=4;return new Uint8Array(j)}function yZ(_,$,j,G=0,Z=0){let X=new ArrayBuffer(10),Y=new DataView(X);return Y.setUint8(0,3),Y.setUint8(1,_?1:0),Y.setUint16(2,G,!1),Y.setUint16(4,Z,!1),Y.setUint16(6,Math.max(0,$||0),!1),Y.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(X)}function V6(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function wZ(_,$,j,G){if(j===1)return _[$];if(j===2)return G?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return G?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return G?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function hU(_,$,j,G){let Z=G||Q6,X=q6(_),Y=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),L=Math.max(0,$||0)*Math.max(0,j||0)*Y;if(X.byteLength<L)throw Error(`Incomplete raw rectangle payload: expected ${L} byte(s), got ${X.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let V=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),K=0,Q=0;for(let q=0;q<Math.max(0,$||0)*Math.max(0,j||0);q+=1){let B=wZ(X,K,Y,Z.bigEndian),N=V6(B>>>Z.redShift&Z.redMax,Z.redMax),U=V6(B>>>Z.greenShift&Z.greenMax,Z.greenMax),E=V6(B>>>Z.blueShift&Z.blueMax,Z.blueMax);V[Q]=N,V[Q+1]=U,V[Q+2]=E,V[Q+3]=255,K+=Y,Q+=4}return V}function B$(_,$,j){let G=j||Q6,Z=Math.max(1,Math.floor(Number(G.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let X=wZ(_,$,Z,G.bigEndian);return{rgba:[V6(X>>>G.redShift&G.redMax,G.redMax),V6(X>>>G.greenShift&G.greenMax,G.greenMax),V6(X>>>G.blueShift&G.blueMax,G.blueMax),255],bytesPerPixel:Z}}function l$(_,$,j,G,Z,X,Y){if(!Y)return;for(let L=0;L<X;L+=1)for(let V=0;V<Z;V+=1){let K=((G+L)*$+(j+V))*4;_[K]=Y[0],_[K+1]=Y[1],_[K+2]=Y[2],_[K+3]=Y[3]}}function TZ(_,$,j,G,Z,X,Y){for(let L=0;L<X;L+=1){let V=L*Z*4,K=((G+L)*$+j)*4;_.set(Y.subarray(V,V+Z*4),K)}}function MZ(_,$){let j=$,G=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(G+=Z,Z!==255)break}return{consumed:j-$,runLength:G}}function pU(_,$,j,G,Z,X,Y){let L=Z||Q6,V=Math.max(1,Math.floor(Number(L.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let K=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+K)return null;let Q=_.slice($+4,$+4+K),q;try{q=Y(Q)}catch{return{consumed:4+K,skipped:!0}}let B=0,N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);for(let U=0;U<G;U+=64){let E=Math.min(64,G-U);for(let D=0;D<j;D+=64){let H=Math.min(64,j-D);if(q.byteLength<B+1)return null;let M=q[B++],J=M&127,W=(M&128)!==0;if(!W&&J===0){let T=H*E*V;if(q.byteLength<B+T)return null;let x=X(q.slice(B,B+T),H,E,L);B+=T,TZ(N,j,D,U,H,E,x);continue}if(!W&&J===1){let T=B$(q,B,L);if(!T)return null;B+=T.bytesPerPixel,l$(N,j,D,U,H,E,T.rgba);continue}if(!W&&J>1&&J<=16){let T=[];for(let O=0;O<J;O+=1){let z=B$(q,B,L);if(!z)return null;B+=z.bytesPerPixel,T.push(z.rgba)}let x=J<=2?1:J<=4?2:4,A=Math.ceil(H*x/8),k=A*E;if(q.byteLength<B+k)return null;for(let O=0;O<E;O+=1){let z=B+O*A;for(let y=0;y<H;y+=1){let I=y*x,R=z+(I>>3),f=8-x-(I&7),v=q[R]>>f&(1<<x)-1;l$(N,j,D+y,U+O,1,1,T[v])}}B+=k;continue}if(W&&J===0){let T=0,x=0;while(x<E){let A=B$(q,B,L);if(!A)return null;B+=A.bytesPerPixel;let k=MZ(q,B);if(!k)return null;B+=k.consumed;for(let O=0;O<k.runLength;O+=1)if(l$(N,j,D+T,U+x,1,1,A.rgba),T+=1,T>=H){if(T=0,x+=1,x>=E)break}}continue}if(W&&J>0){let T=[];for(let k=0;k<J;k+=1){let O=B$(q,B,L);if(!O)return null;B+=O.bytesPerPixel,T.push(O.rgba)}let x=0,A=0;while(A<E){if(q.byteLength<B+1)return null;let k=q[B++],O=k,z=1;if(k&128){O=k&127;let I=MZ(q,B);if(!I)return null;B+=I.consumed,z=I.runLength}let y=T[O];if(!y)return null;for(let I=0;I<z;I+=1)if(l$(N,j,D+x,U+A,1,1,y),x+=1,x>=H){if(x=0,A+=1,A>=E)break}}continue}return{consumed:4+K,skipped:!0}}}return{consumed:4+K,rgba:N,decompressed:q}}function rU(_,$,j,G,Z){let X=Z||Q6,Y=Math.max(1,Math.floor(Number(X.bitsPerPixel||0)/8));if(_.byteLength<$+4+Y)return null;let V=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),K=4+Y+V*(Y+8);if(_.byteLength<$+K)return null;let Q=$+4,q=B$(_,Q,X);if(!q)return null;Q+=q.bytesPerPixel;let B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4);l$(B,j,0,0,j,G,q.rgba);for(let N=0;N<V;N+=1){let U=B$(_,Q,X);if(!U)return null;if(Q+=U.bytesPerPixel,_.byteLength<Q+8)return null;let E=new DataView(_.buffer,_.byteOffset+Q,8),D=E.getUint16(0,!1),H=E.getUint16(2,!1),M=E.getUint16(4,!1),J=E.getUint16(6,!1);Q+=8,l$(B,j,D,H,M,J,U.rgba)}return{consumed:Q-$,rgba:B}}function nU(_,$,j,G,Z,X){let Y=Z||Q6,L=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8)),V=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,G||0)*4),K=$,Q=[0,0,0,255],q=[255,255,255,255];for(let B=0;B<G;B+=16){let N=Math.min(16,G-B);for(let U=0;U<j;U+=16){let E=Math.min(16,j-U);if(_.byteLength<K+1)return null;let D=_[K++];if(D&1){let H=E*N*L;if(_.byteLength<K+H)return null;let M=X(_.slice(K,K+H),E,N,Y);K+=H,TZ(V,j,U,B,E,N,M);continue}if(D&2){let H=B$(_,K,Y);if(!H)return null;Q=H.rgba,K+=H.bytesPerPixel}if(l$(V,j,U,B,E,N,Q),D&4){let H=B$(_,K,Y);if(!H)return null;q=H.rgba,K+=H.bytesPerPixel}if(D&8){if(_.byteLength<K+1)return null;let H=_[K++];for(let M=0;M<H;M+=1){let J=q;if(D&16){let z=B$(_,K,Y);if(!z)return null;J=z.rgba,K+=z.bytesPerPixel}if(_.byteLength<K+2)return null;let W=_[K++],T=_[K++],x=W>>4,A=W&15,k=(T>>4)+1,O=(T&15)+1;l$(V,j,U+x,B+A,k,O,J)}}}}return{consumed:K-$,rgba:V}}var Q6={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class B2{protocol=S1;state;framebufferWidth;framebufferHeight;serverName;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:hU,this.pipeline=_.pipeline||null,this.encodings=RU(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...Q6},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:gU()}receive(_){if(_)this.buffer=SU(this.buffer,_);let $=[],j=[],G=!0;while(G){if(G=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),X=K6(Z),Y=vU(X);if(!Y)throw Error(`Unsupported RFB version banner: ${X||"<empty>"}`);this.serverVersion=Y,this.clientVersionText=mU(Y),j.push(bU(this.clientVersionText)),$.push({type:"protocol-version",protocol:S1,server:Y.text.trim(),client:this.clientVersionText.trim()}),this.state=Y.minor>=7?"security-types":"security-type-33",G=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let V=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+V)break;this.consume(1);let K=K6(this.consume(4+V).slice(4));throw Error(K||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let X=Array.from(this.consume(Z));$.push({type:"security-types",protocol:S1,types:X});let Y=null;if(X.includes(2)&&this.password!==null)Y=2;else if(X.includes(1))Y=1;else if(X.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${X.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(Y)),$.push({type:"security-selected",protocol:S1,securityType:Y,label:Y===2?"VNC Authentication":"None"}),this.state=Y===2?"security-challenge":"security-result",G=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X===0){if(this.buffer.byteLength<4)break;let L=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+L)break;let V=K6(this.consume(4+L).slice(4));throw Error(V||"VNC server rejected the connection.")}if(X===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:S1,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",G=!0;continue}if(X!==1)throw Error(`Unsupported VNC security type ${X}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:S1,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(AZ(this.password,Z)),this.state="security-result",G=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let X=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),X!==0){if(this.buffer.byteLength>=4){let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+Y){let L=K6(this.consume(4+Y).slice(4));throw Error(L||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:S1,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",G=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),X=Z.getUint16(0,!1),Y=Z.getUint16(2,!1),L=kZ(Z,4),V=Z.getUint32(20,!1);if(this.buffer.byteLength<24+V)break;let K=this.consume(24),Q=new DataView(K.buffer,K.byteOffset,K.byteLength);if(this.framebufferWidth=Q.getUint16(0,!1),this.framebufferHeight=Q.getUint16(2,!1),this.serverPixelFormat=kZ(Q,4),this.serverName=K6(this.consume(V)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(cU(this.clientPixelFormat)),j.push(lU(this.encodings)),j.push(yZ(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:S1,width:X,height:Y,name:this.serverName,pixelFormat:L}),G=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),L=4,V=[],K=!1,Q=!!this.pipeline;for(let B=0;B<Y;B+=1){if(this.buffer.byteLength<L+12){K=!0;break}let N=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,12),U=N.getUint16(0,!1),E=N.getUint16(2,!1),D=N.getUint16(4,!1),H=N.getUint16(6,!1),M=N.getInt32(8,!1);if(L+=12,M===0){let J=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),W=D*H*J;if(this.buffer.byteLength<L+W){K=!0;break}let T=this.buffer.slice(L,L+W);if(L+=W,Q)this.pipeline.processRawRect(T,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:this.decodeRawRect(T,D,H,this.clientPixelFormat)});continue}if(M===2){let J=rU(this.buffer,L,D,H,this.clientPixelFormat);if(!J){K=!0;break}if(Q){let W=this.buffer.slice(L,L+J.consumed);this.pipeline.processRreRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:J.rgba});L+=J.consumed;continue}if(M===1){if(this.buffer.byteLength<L+4){K=!0;break}let J=new DataView(this.buffer.buffer,this.buffer.byteOffset+L,4),W=J.getUint16(0,!1),T=J.getUint16(2,!1);if(L+=4,Q)this.pipeline.processCopyRect(U,E,D,H,W,T),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"copy",x:U,y:E,width:D,height:H,srcX:W,srcY:T});continue}if(M===16){let J=pU(this.buffer,L,D,H,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!J){K=!0;break}if(L+=J.consumed,J.skipped)continue;if(Q&&J.decompressed)this.pipeline.processZrleTileData(J.decompressed,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H});else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:J.rgba});continue}if(M===5){let J=nU(this.buffer,L,D,H,this.clientPixelFormat,this.decodeRawRect);if(!J){K=!0;break}if(Q){let W=this.buffer.slice(L,L+J.consumed);this.pipeline.processHextileRect(W,U,E,D,H,this.clientPixelFormat),V.push({kind:"pipeline",x:U,y:E,width:D,height:H})}else V.push({kind:"rgba",x:U,y:E,width:D,height:H,rgba:J.rgba});L+=J.consumed;continue}if(M===-223){if(this.framebufferWidth=D,this.framebufferHeight=H,Q)this.pipeline.initFramebuffer(D,H);V.push({kind:"resize",x:U,y:E,width:D,height:H});continue}throw Error(`Unsupported VNC rectangle encoding ${M}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(K)break;this.consume(L);let q={type:"framebuffer-update",protocol:S1,width:this.framebufferWidth,height:this.framebufferHeight,rects:V};if(Q)q.framebuffer=this.pipeline.getFramebuffer();$.push(q),j.push(yZ(!0,this.framebufferWidth,this.framebufferHeight)),G=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:S1}),G=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+Y)break;this.consume(8);let L=K6(this.consume(Y));$.push({type:"clipboard",protocol:S1,text:L}),G=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var i1="piclaw://vnc";function CZ(_){let $=String(_||"").trim();return $?`${i1}/${encodeURIComponent($)}`:i1}var o3="piclaw:vnc-popout:",dU=60000;function PZ(_=globalThis){try{return _?.localStorage??null}catch{return null}}function iU(_=globalThis){let $=JG(_);if($)return $;return`vnc-popout-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function fZ(_,$=Date.now()){if(!_||typeof _.key!=="function"||!Number.isFinite(_.length))return;let j=[];for(let G=0;G<Number(_.length||0);G+=1){let Z=_.key(G);if(Z&&Z.startsWith(o3))j.push(Z)}for(let G of j)try{let Z=_.getItem(G);if(!Z){_.removeItem(G);continue}let X=JSON.parse(Z),Y=Number(X?.expiresAt||0);if(!Number.isFinite(Y)||Y<=$)_.removeItem(G)}catch{G2(_,G)}}function oU(_,$=globalThis,j=Date.now()){let G=E4(_);if(G===null)return null;let Z=PZ($);if(!Z)return null;fZ(Z,j);let X=iU($);try{return Z.setItem(`${o3}${X}`,JSON.stringify({password:G,expiresAt:j+dU})),X}catch{return null}}function sU(_,$=globalThis,j=Date.now()){let G=String(_||"").trim();if(!G)return null;let Z=PZ($);if(!Z)return null;fZ(Z,j);let X=`${o3}${G}`;try{let Y=Z.getItem(X);if(Z.removeItem(X),!Y)return null;let L=JSON.parse(Y),V=Number(L?.expiresAt||0);if(!Number.isFinite(V)||V<=j)return null;return E4(L?.password)}catch{try{Z.removeItem(X)}catch{}return null}}function aU(_,$,j=globalThis){let G=String(_||"").trim();if(!G)return null;let Z={pane_path:CZ(G)},X=oU($,j);if(X)Z.vnc_secret=X;return Z}function tU(_){let $=String(_||"");if($===i1)return null;if(!$.startsWith(`${i1}/`))return null;let j=$.slice(`${i1}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function d1(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function eU(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),G=await j.json().catch(()=>({}));if(!j.ok)throw Error(G?.error||`HTTP ${j.status}`);return G}function _H(){if(typeof window>"u")return!1;try{let _=new URLSearchParams(window.location.search).get("pane_popout"),$=String(_||"").trim().toLowerCase();return $==="1"||$==="true"||$==="yes"}catch{return!1}}function $H(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",G=new URL(`${j}//${window.location.host}/vnc/ws`);if(G.searchParams.set("target",String(_||"")),$)G.searchParams.set("handoff",String($));return G.toString()}function jH(_){return String(_||"").trim()||"localhost"}function GH(_,$){let j=jH(_),G=Math.floor(Number($||0));if(!Number.isFinite(G)||G<=0||G>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${G}`}function ZH(_={}){let $=Boolean(_?.enabled),j=Boolean(_?.directConnectEnabled);if((Array.isArray(_?.targets)?_.targets.length:Number(_?.targetCount||0))>0)return{title:"",body:""};if(j)return{title:"No saved VNC targets yet.",body:"Connect directly above."};if(!$)return{title:"VNC is not configured yet.",body:"No saved targets are available and direct connect is disabled on this host."};return{title:"No saved VNC targets yet.",body:"This host has no configured VNC targets, and direct connect is disabled."}}function xZ(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}function IZ(_){if(!String(_?.handoffToken||"").trim())return!1;return Number(_?.bytesIn||0)<=0&&!Boolean(_?.hasRenderedFrame)&&Number(_?.reconnectAttempts||0)<=0}function XH(_,$){if(!_||!$||typeof $.appendChild!=="function")return!1;try{$.innerHTML=""}catch{}return $.appendChild(_),!0}class RZ{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pointerInputAbortController=null;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=tU($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=xZ("vnc_handoff");let j=xZ("vnc_secret"),G=sU(j);if(G!==null)this.authPassword=G;this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(_=null){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let $=Math.min(8000,1500+this.reconnectAttempts*1000),j=Number.isFinite(_)?Math.max(0,Number(_)):$;this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},j)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=null;try{this.pointerInputAbortController?.abort?.()}catch{}if(this.pointerInputAbortController=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled),G=ZH({enabled:_?.enabled,directConnectEnabled:j,targets:$});this.bodyEl.innerHTML=`
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
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Z=()=>{let X=GH(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!X)return;this.authPassword=E4(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(X,X)};this.directHostInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPortInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.directPasswordInputEl?.addEventListener("keydown",(X)=>{if(X.key!=="Enter")return;X.preventDefault(),Z()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Z());for(let X of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))X.addEventListener("click",()=>{let Y=X.getAttribute("data-target-open-tab"),L=X.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,L)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target",G=_H();if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=G?`
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
            `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=E4(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=E4(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",G=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",X=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${G}${Z}${X}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let G=j?.reveal===!0;if(this.canvas.style.display=G||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=G||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let G=ZZ($,j,this.canvas.width,this.canvas.height);this.displayScale=G,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*G))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*G))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return g3(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(q2(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none";try{this.pointerInputAbortController?.abort?.()}catch{}let _=new AbortController;this.pointerInputAbortController=_;let $=_.signal,j=this.canvas.ownerDocument||document,G=j.defaultView||window,Z=new Map,X=new Map,Y=new Map,L=new Map,V=new Set,K=!1,Q=(A)=>this.getFramebufferPointFromEvent(A)||X.get(A?.pointerId)||{x:0,y:0},q=(A)=>{if(!A||!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let k=this.canvas.getBoundingClientRect?.();if(!k||!k.width||!k.height)return null;return g3(A.clientX,A.clientY,k,this.protocol.framebufferWidth,this.protocol.framebufferHeight)},B=(A)=>{let k=Y.get(A);if(k)G.clearTimeout(k),Y.delete(A)},N=(A)=>{let k=L.get(A);if(k?.holdTimer)G.clearTimeout(k.holdTimer);L.delete(A)},U=()=>{for(let A of L.keys())N(A)},E=()=>{if(!V.size)K=!1},D=(A,k=80)=>{let O=String(A?.pointerType||"").toLowerCase();if(!_Z(O))return;let z=Number(A?.pointerId);if(!Number.isFinite(z))return;B(z);let y=G.setTimeout(()=>{if(Y.delete(z),!Z.has(z)&&!this.pointerButtonMask)return;M({pointerId:z,pointerType:O,type:"pointercancel",clientX:A?.clientX,clientY:A?.clientY},{resetAll:!0})},k);Y.set(z,y)},H=(A=null)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;for(let O of Y.keys())B(O);U(),V.clear(),K=!1;let k=A||X.values().next().value||{x:0,y:0};Z.clear(),X.clear(),this.pointerButtonMask=0,this.sendPointerEvent(0,k.x,k.y)},M=(A,k={})=>{if(k.resetAll){let R=Number(A?.pointerId);B(R),H(Q(A));try{this.canvas?.releasePointerCapture?.(R)}catch{}return}let O=Q(A),z=Number(A?.pointerId);B(z),N(z),V.delete(z),E();let y=Z.has(z),I=Z.get(z)??S3(A);if(!y&&!I&&!this.pointerButtonMask)return;if(Z.delete(z),X.delete(z),I)this.pointerButtonMask&=~I;else if(!Z.size)this.pointerButtonMask=0;this.sendPointerEvent(this.pointerButtonMask,O.x,O.y);try{this.canvas?.releasePointerCapture?.(z)}catch{}},J=(A)=>{if(K)return;let k=L.get(A);if(!k||k.dragActivated)return;k.dragActivated=!0,k.holdTimer=null;let O=m$(0);if(!O)return;Z.set(A,(Z.get(A)??0)|O),this.pointerButtonMask|=O,D({pointerId:A,pointerType:"touch",clientX:k.lastClientX,clientY:k.lastClientY}),this.sendPointerEvent(this.pointerButtonMask,k.lastPoint.x,k.lastPoint.y)},W=(A,k,O={})=>{let z=L.get(A);if(!z)return!1;let y=k||z.lastPoint||{x:0,y:0},I=Number.isFinite(O.clientX)?Number(O.clientX):z.lastClientX,R=Number.isFinite(O.clientY)?Number(O.clientY):z.lastClientY;if(V.delete(A),O.cancelled||K){if(N(A),E(),Z.has(A)||this.pointerButtonMask)H(y);return!0}if(z.dragActivated||Z.has(A))return M({pointerId:A,pointerType:"touch",type:"pointerup",clientX:I,clientY:R}),E(),!0;let f=Date.now()-z.startedAt,v=eG({startX:z.startClientX,startY:z.startClientY,clientX:I,clientY:R,elapsedMs:f});if(B(A),N(A),X.delete(A),E(),v){let l=m$(0);this.sendPointerEvent(l,y.x,y.y),this.sendPointerEvent(0,y.x,y.y)}else this.sendPointerEvent(this.pointerButtonMask,y.x,y.y);return!0};this.canvas.addEventListener("contextmenu",(A)=>{A.preventDefault()},{signal:$}),this.canvas.addEventListener("pointermove",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let O=String(A?.pointerType||"").toLowerCase(),z=p1(O);if(X.set(A.pointerId,k),z){let y=L.get(A.pointerId);if(y){if(y.lastClientX=Number(A?.clientX||0),y.lastClientY=Number(A?.clientY||0),y.lastPoint=k,!y.dragActivated&&u3({startX:y.startClientX,startY:y.startClientY,clientX:y.lastClientX,clientY:y.lastClientY}))N(A.pointerId),L.set(A.pointerId,{...y,holdTimer:null,dragActivated:!1});if(!y.dragActivated){this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}}if(K)return}if(Z.has(A.pointerId)&&H4(A)){M(A,{resetAll:!0});return}if(this.pointerButtonMask&&!Z.has(A.pointerId)&&H4(A)){H(k);return}if(Z.has(A.pointerId))D(A);this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$}),this.canvas.addEventListener("pointerdown",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;let O=String(A?.pointerType||"").toLowerCase(),z=p1(O);if(A.preventDefault(),this.canvas?.focus?.(),X.set(A.pointerId,k),z){if(V.add(A.pointerId),V.size>1){let R=[...V];K=!0,H(k);for(let f of R)V.add(f);K=!0;return}N(A.pointerId);let I={startClientX:Number(A?.clientX||0),startClientY:Number(A?.clientY||0),lastClientX:Number(A?.clientX||0),lastClientY:Number(A?.clientY||0),startedAt:Date.now(),lastPoint:k,holdTimer:null,dragActivated:!1};I.holdTimer=G.setTimeout(()=>{J(A.pointerId)},260),L.set(A.pointerId,I),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y);return}if(O==="mouse")try{this.canvas?.setPointerCapture?.(A.pointerId)}catch{}let y=S3(A);if(!y)return;Z.set(A.pointerId,(Z.get(A.pointerId)??0)|y),this.pointerButtonMask|=y,D(A),this.sendPointerEvent(this.pointerButtonMask,k.x,k.y)},{signal:$,passive:!1}),this.canvas.addEventListener("pointerup",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let k=Q(A);if(W(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A)},{signal:$,passive:!1}),this.canvas.addEventListener("pointercancel",(A)=>{if(A.preventDefault(),p1(A?.pointerType)){let k=Q(A);if(W(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1}),this.canvas.addEventListener("pointerleave",(A)=>{if(L.has(A.pointerId)&&p1(A?.pointerType)){W(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("pointerout",(A)=>{if(L.has(A.pointerId)&&p1(A?.pointerType)){W(A.pointerId,Q(A),{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0});return}if(!Z.has(A.pointerId))return;if(!H4(A))return;M(A,{resetAll:!0})},{signal:$}),this.canvas.addEventListener("lostpointercapture",(A)=>{M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointermove",(A)=>{if(!Z.size&&!this.pointerButtonMask||!H4(A))return;if(!Z.has(A.pointerId)&&!this.pointerButtonMask)return;M(A,{resetAll:!0})},{signal:$}),G.addEventListener("pointerup",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let k=Q(A);if(W(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY}))return}M(A,{resetAll:!Z.has(A.pointerId)})},{signal:$,passive:!1}),G.addEventListener("pointercancel",(A)=>{if(!Z.has(A.pointerId)&&!this.pointerButtonMask&&!L.has(A.pointerId))return;if(A.preventDefault?.(),p1(A?.pointerType)){let k=Q(A);if(W(A.pointerId,k,{clientX:A?.clientX,clientY:A?.clientY,cancelled:!0}))return}M(A,{resetAll:!0})},{signal:$,passive:!1});let T=(A)=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;if(!tG(A))return;let k=A?.changedTouches?.[0]||A?.touches?.[0]||null,O=q(k)||X.values().next().value||L.values().next().value?.lastPoint||{x:0,y:0};if(!Z.size&&!this.pointerButtonMask&&L.size===1){let[z]=L.entries().next().value||[];if(Number.isFinite(z)){W(z,O,{clientX:k?.clientX,clientY:k?.clientY,cancelled:A?.type==="touchcancel"});return}}H(O)},x=(A,k={})=>{if(!Z.size&&!this.pointerButtonMask&&!L.has(A?.pointerId))return;if(!H4(A))return;if(A?.preventDefault?.(),p1(A?.pointerType)){let O=Q(A);if(W(A.pointerId,O,{clientX:A?.clientX,clientY:A?.clientY,cancelled:k.resetAll===!0}))return}M(A,{resetAll:k.resetAll===!0||!Z.has(A?.pointerId)})};this.canvas.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),this.canvas.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchend",T,{signal:$,passive:!0,capture:!0}),G.addEventListener("touchcancel",T,{signal:$,passive:!0,capture:!0}),j.addEventListener("pointerup",(A)=>{x(A)},{signal:$,passive:!1,capture:!0}),j.addEventListener("pointercancel",(A)=>{x(A,{resetAll:!0})},{signal:$,passive:!1,capture:!0}),G.addEventListener("mouseup",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),G.addEventListener("blur",()=>{if(!Z.size&&!this.pointerButtonMask&&!L.size)return;H()},{signal:$}),j.addEventListener("visibilitychange",()=>{if(j.visibilityState==="hidden")H()},{signal:$}),this.canvas.addEventListener("wheel",(A)=>{let k=this.getFramebufferPointFromEvent(A);if(!k)return;A.preventDefault();for(let O of $Z(A.deltaY,k.x,k.y,this.pointerButtonMask))this.socketBoundary?.send?.(O)},{signal:$,passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(jZ(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=b3(_);if($==null)return;let j=_.code||_.key,G=this.pressedKeysyms.get(j);if(GZ(G,$,_.repeat)){_.preventDefault();return}_.preventDefault(),this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??b3(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((G)=>G.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let G=this.canvas?.getContext("2d",{alpha:!1});if(G){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);G.putImageData(Z,0,0),$=!0}}else for(let G of _.rects||[]){if(G.kind==="resize"){this.ensureCanvasSize(G.width,G.height);continue}if(G.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(G),$=!0;continue}if(G.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(G),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let G=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${G}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${G}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new B2);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,G=$.receive(j);for(let Z of G.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of G.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let G=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${G}`),this.updateDisplayInfo(`Display protocol error: ${G}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(G))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),G=await aG(),Z={};if(G)Z.pipeline=G,Z.decodeRawRect=(L,V,K,Q)=>G.decodeRawRectToRgba(L,V,K,Q);let X=E4(this.authPassword);if(X!==null)Z.password=X;if(j)Z.encodings=j;let Y=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new B2(Z),this.hasRenderedFrame=Y,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=Y?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Y?"none":"";this.socketBoundary=new C3({url:$H(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(L)=>{this.applyMetrics(L)},onMessage:(L)=>{this.handleSocketMessage(L)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(IZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),IZ({handoffToken:$,bytesIn:this.bytesIn,hasRenderedFrame:this.hasRenderedFrame,reconnectAttempts:this.reconnectAttempts})){this.pendingHandoffToken=null,this.setStatus("Transferred VNC session was not ready yet. Retrying…"),this.updateDisplayInfo("Transferred VNC session was not ready yet. Retrying without handoff…"),this.updateDisplayMeta("handoff-retrying"),this.scheduleReconnect(150);return}if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await eU(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${d1(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}beforeDetachFromHost(){this.releasePressedKeys(),this.setStatus("Moving VNC session…"),this.updateDisplayInfo("Moving VNC session to a new window…"),this.updateDisplayMeta("moving")}afterAttachToHost(){this.attachDisplayResizeObserver(),this.updateCanvasScale(),requestAnimationFrame(()=>this.focus())}moveHost(_){if(this.disposed||!this.root)return!1;if(this.releasePressedKeys(),this.container=_,!XH(this.root,_))return!1;return this.afterAttachToHost(),!0}async preparePopoutTransfer(){return aU(this.targetId,this.authPassword)}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var s3={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===i1||$.startsWith(`${i1}/`)?9000:!1},mount(_,$){return new RZ(_,$)}};import{classHighlighter as YH,highlightTree as LH,StreamLanguage as N6,cssLanguage as KH,cppLanguage as VH,goLanguage as qH,htmlLanguage as QH,javascriptLanguage as NH,jsxLanguage as BH,tsxLanguage as FH,typescriptLanguage as UH,jsonLanguage as HH,markdownLanguage as EH,pythonLanguage as DH,rustLanguage as zH,StandardSQL as WH,xmlLanguage as OH,yamlLanguage as JH,dockerFile as AH,powerShell as kH,ruby as yH,shell as MH,swift as wH,toml as TH}from"#editor-vendor/codemirror";function D4(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}var xH={js:"JavaScript",javascript:"JavaScript",ts:"TypeScript",typescript:"TypeScript",jsx:"JSX",tsx:"TSX",py:"Python",python:"Python",sh:"Shell",shell:"Shell",bash:"Bash",zsh:"Zsh",ps1:"PowerShell",powershell:"PowerShell",md:"Markdown",markdown:"Markdown",yml:"YAML",yaml:"YAML",json:"JSON",html:"HTML",css:"CSS",sql:"SQL",go:"Go",c:"C",cc:"C++",cpp:"C++","c++":"C++",cxx:"C++",h:"C/C++",hh:"C++",hpp:"C++",hxx:"C++",rust:"Rust",rs:"Rust",ruby:"Ruby",swift:"Swift",toml:"TOML",dockerfile:"Dockerfile"},IH=N6.define(MH).parser,CH=N6.define(kH).parser,PH=N6.define(AH).parser,fH=N6.define(yH).parser,RH=N6.define(wH).parser,SH=N6.define(TH).parser;function SZ(_){let $=String(_||"").trim().toLowerCase();if(!$)return"text";return xH[$]||String(_||"").trim()}function uH(_){switch(String(_||"").trim().toLowerCase()){case"js":case"javascript":return NH.parser;case"ts":case"typescript":return UH.parser;case"jsx":return BH.parser;case"tsx":return FH.parser;case"py":case"python":return DH.parser;case"json":return HH.parser;case"css":return KH.parser;case"html":return QH.parser;case"xml":return OH.parser;case"yaml":case"yml":return JH.parser;case"md":case"markdown":return EH.parser;case"sql":return WH.language.parser;case"go":return qH.parser;case"c":case"cc":case"cpp":case"cxx":case"c++":case"h":case"hh":case"hpp":case"hxx":return VH.parser;case"sh":case"bash":case"shell":case"zsh":return IH;case"ps1":case"powershell":return CH;case"dockerfile":return PH;case"rb":case"ruby":return fH;case"rs":case"rust":return zH.parser;case"swift":return RH;case"toml":return SH;default:return null}}function F2(_,$){let j=uH($);if(!j)return D4(_);let G=[];try{let Y=j.parse(_);LH(Y,YH,(L,V,K)=>{if(!K||L>=V)return;G.push({from:L,to:V,cls:K})})}catch{return D4(_)}if(!G.length)return D4(_);G.sort((Y,L)=>Y.from-L.from||Y.to-L.to);let Z=0,X="";for(let Y of G){if(Y.from>Z)X+=D4(_.slice(Z,Y.from));X+=`<span class="${D4(Y.cls)}">${D4(_.slice(Y.from,Y.to))}</span>`,Z=Math.max(Z,Y.to)}if(Z<_.length)X+=D4(_.slice(Z));return X}_5();var W2=/#(\w+)/g,oH=new Set(["strong","em","b","i","u","s","del","ins","sub","sup","mark","small","br","p","ul","ol","li","blockquote","ruby","rt","rp","span","input"]),sH=new Set(["a","abbr","blockquote","br","code","del","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","input","ins","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","small","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),aH=new Set(["class","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),rZ={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"]),input:new Set(["type","checked","disabled"])},tH=new Set(["http:","https:","mailto:",""]);function eH(_,$){let j=String(_||"").toLowerCase(),G=String($||"").toLowerCase();if(!G||G.startsWith("on"))return!1;if(G.startsWith("data-")||G.startsWith("aria-"))return!0;return(rZ[j]||new Set).has(G)||aH.has(G)}function Z7(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function J4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let G=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!tH.has(G.protocol))return null;return G.href}catch{return null}}function nZ(_,$={}){if(!_)return"";if($?.sanitize===!1)return _;let j=new DOMParser().parseFromString(_,"text/html"),G=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),X;while(X=Z.nextNode())G.push(X);for(let Y of G){let L=Y.tagName.toLowerCase();if(!sH.has(L)){let K=Y.parentNode;if(!K)continue;while(Y.firstChild)K.insertBefore(Y.firstChild,Y);K.removeChild(Y);continue}let V=rZ[L]||new Set;for(let K of Array.from(Y.attributes)){let Q=K.name.toLowerCase(),q=K.value;if(Q.startsWith("on")){Y.removeAttribute(K.name);continue}if(eH(L,Q)){if(Q==="href"){let B=J4(q);if(!B)Y.removeAttribute(K.name);else if(Y.setAttribute(K.name,B),L==="a"){if(!Y.getAttribute("rel"))Y.setAttribute("rel","noopener noreferrer");if(/^https?:\/\//i.test(B))Y.setAttribute("target","_blank")}}else if(Q==="src"){let B=L==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(q):q,N=J4(B,{allowDataImage:L==="img"});if(!N)Y.removeAttribute(K.name);else Y.setAttribute(K.name,N)}continue}Y.removeAttribute(K.name)}}return j.body.innerHTML}function dZ(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function $5(_,$=2){if(!_)return _;let j=_;for(let G=0;G<$;G+=1){let Z=dZ(j);if(Z===j)break;j=Z}return j}function _E(_){if(!_)return{text:"",frontmatter:null};let $=_.replace(/^\uFEFF/,"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.startsWith(`---
`))return{text:$,frontmatter:null};let j=$.split(`
`),G=-1;for(let Y=1;Y<j.length;Y+=1)if(/^(---|\.\.\.)\s*$/.test(j[Y])){G=Y;break}if(G<=0)return{text:$,frontmatter:null};let Z=j.slice(1,G).join(`
`);return{text:j.slice(G+1).join(`
`).replace(/^\n+/,""),frontmatter:Z}}function $E(_){let{text:$,frontmatter:j}=_E(_);if(j===null)return $;return["<!--frontmatter-block-start-->","```yaml",j,"```","<!--frontmatter-block-end-->",$].filter(Boolean).join(`

`)}function jE(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=[],X=!1,Y=[];for(let L of j){if(!X&&L.trim().match(/^```mermaid\s*$/i)){X=!0,Y=[];continue}if(X&&L.trim().match(/^```\s*$/)){let V=G.length;G.push(Y.join(`
`)),Z.push(`@@MERMAID_BLOCK_${V}@@`),X=!1,Y=[];continue}if(X)Y.push(L);else Z.push(L)}if(X)Z.push("```mermaid"),Z.push(...Y);return{text:Z.join(`
`),blocks:G}}function GE(_){if(!_)return _;return $5(_,5)}function ZE(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let G of $)j+=String.fromCharCode(G);return btoa(j)}function XE(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let G=0;G<$.length;G+=1)j[G]=$.charCodeAt(G);return new TextDecoder().decode(j)}function YE(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,G)=>{let Z=Number(G),X=$[Z]??"",Y=GE(X);return`<div class="mermaid-container" data-mermaid="${ZE(Y)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function iZ(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}function LE(_){if(!_)return _;return _.replace(/<pre><code(?:\s+class="language-([A-Za-z0-9_+-]+)")?>([\s\S]*?)<\/code><\/pre>/g,(j,G,Z)=>{let X=String(G||"").trim().toLowerCase(),Y=$5(Z,2),L=X||"plaintext",V=F2(Y,X);return`<pre><code class="hljs language-${Z7(L)}">${V}</code></pre>`}).replace(/<!--frontmatter-block-start-->\s*<pre>/g,'<pre class="frontmatter-block">').replace(/<\/pre>\s*<!--frontmatter-block-end-->/g,"</pre>")}var KE={span:new Set(["title","class","lang","dir"]),input:new Set(["type","checked","disabled"])};function VE(_,$){let j=KE[_];if(!j||!$)return"";let G=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,X;while(X=Z.exec($)){let Y=(X[1]||"").toLowerCase();if(!Y||Y.startsWith("on")||!j.has(Y))continue;let L=X[2]??X[3]??X[4]??"";G.push(` ${Y}="${Z7(L)}"`)}return G.join("")}function oZ(_){if(!_)return _;return _.replace(/&lt;((?:[^"'<>]|"[^"]*"|'[^']*')*?)(?:&gt;|>)/g,($,j)=>{let G=j.trim(),Z=G.startsWith("/"),X=Z?G.slice(1).trim():G,L=X.endsWith("/")?X.slice(0,-1).trim():X,[V=""]=L.split(/\s+/,1),K=V.toLowerCase();if(!K||!oH.has(K))return $;if(K==="br")return Z?"":"<br>";if(Z)return`</${K}>`;let Q=L.slice(V.length).trim(),q=VE(K,Q);return`<${K}${q}>`})}function sZ(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,G)=>`<pre><code>${$(G)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,G)=>`<code>${$(G)}</code>`)}function aZ(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=(X)=>X.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let X=G(Z.nodeValue);if(X!==Z.nodeValue)Z.nodeValue=X}return $.body.innerHTML}function qE(_){if(!window.katex)return _;let $=(Y)=>dZ(Y).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(Y)=>{let L=[],V=Y.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(K)=>{let Q=L.length;return L.push(K),`@@CODE_BLOCK_${Q}@@`});return V=V.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(K)=>{let Q=L.length;return L.push(K),`@@CODE_INLINE_${Q}@@`}),{html:V,blocks:L}},G=(Y,L)=>{if(!L.length)return Y;return Y.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(V,K)=>{let Q=Number(K);return L[Q]??""})},Z=j(_),X=Z.html;return X=X.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(Y,L,V)=>{try{let K=katex.renderToString($(V.trim()),{displayMode:!0,throwOnError:!1});return`${L}${K}`}catch(K){let Q=K instanceof Error?K.message:String(K);return`<span class="math-error" title="${Z7(Q)}">${Y}</span>`}}),G(X,Z.blocks)}function QE(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),G=[],Z;while(Z=j.nextNode())G.push(Z);for(let X of G){let Y=X.nodeValue;if(!Y)continue;if(W2.lastIndex=0,!W2.test(Y))continue;W2.lastIndex=0;let L=X.parentElement;if(L&&(L.closest("a")||L.closest("code")||L.closest("pre")))continue;let V=Y.split(W2);if(V.length<=1)continue;let K=$.createDocumentFragment();V.forEach((Q,q)=>{if(q%2===1){let B=$.createElement("a");B.setAttribute("href","#"),B.className="hashtag",B.setAttribute("data-hashtag",Q),B.textContent=`#${Q}`,K.appendChild(B)}else K.appendChild($.createTextNode(Q))}),X.parentNode?.replaceChild(K,X)}return $.body.innerHTML}function NE(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=[],Z=!1;for(let X of j){if(!Z&&X.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,G.push("$$");continue}if(Z&&X.trim().match(/^```\s*$/)){Z=!1,G.push("$$");continue}G.push(X)}return G.join(`
`)}function BE(_){let $=$E(_||""),j=NE($),{text:G,blocks:Z}=jE(j),X=$5(G,2),L=iZ(X).replace(/</g,"&lt;");return{safeHtml:oZ(L),mermaidBlocks:Z}}function Z1(_,$,j={}){if(!_)return"";let{safeHtml:G,mermaidBlocks:Z}=BE(_),X=window.marked?marked.parse(G,{headerIds:!1,mangle:!1}):G.replace(/\n/g,"<br>");return X=sZ(X),X=aZ(X),X=LE(X),X=qE(X),X=QE(X),X=YE(X,Z),X=nZ(X,j),X}function j5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=$5($,2),Z=iZ(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),X=oZ(Z),Y=window.marked?marked.parse(X):X.replace(/\n/g,"<br>");return Y=sZ(Y),Y=aZ(Y),Y=nZ(Y),Y}function FE(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,G,Z,X)=>{let Y=Z.trim().split(/\s+/).map((V)=>{let[K,Q]=V.split(",").map(Number);return{x:K,y:Q}});if(Y.length<3)return`<polyline${G}points="${Z}"${X}/>`;let L=[`M ${Y[0].x},${Y[0].y}`];for(let V=1;V<Y.length-1;V++){let K=Y[V-1],Q=Y[V],q=Y[V+1],B=Q.x-K.x,N=Q.y-K.y,U=q.x-Q.x,E=q.y-Q.y,D=Math.sqrt(B*B+N*N),H=Math.sqrt(U*U+E*E),M=Math.min($,D/2,H/2);if(M<0.5){L.push(`L ${Q.x},${Q.y}`);continue}let J=Q.x-B/D*M,W=Q.y-N/D*M,T=Q.x+U/H*M,x=Q.y+E/H*M,k=B*E-N*U>0?1:0;L.push(`L ${J},${W}`),L.push(`A ${M},${M} 0 0 ${k} ${T},${x}`)}return L.push(`L ${Y[Y.length-1].x},${Y[Y.length-1].y}`),`<path${G}d="${L.join(" ")}"${X}/>`})}async function E$(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=pZ()==="dark"?j["tokyo-night"]:j["github-light"],X=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let Y of X)try{let L=Y.dataset.mermaid,V=XE(L||""),K=$5(V,2),Q=await $(K,{...Z,transparent:!0});Q=FE(Q),Y.innerHTML=Q,Y.removeAttribute("data-mermaid")}catch(L){console.error("Mermaid render error:",L);let V=document.createElement("pre");V.className="mermaid-error",V.textContent=`Diagram error: ${L.message}`,Y.innerHTML="",Y.appendChild(V),Y.removeAttribute("data-mermaid")}}P_();function VX(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let G=new Date().getTime()-$.getTime(),Z=G/1000,X=86400000;if(G<X){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(G<5*X){let V=$.toLocaleDateString(void 0,{weekday:"short"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${V} ${K}`}let Y=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),L=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${Y} ${L}`}function B5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function a_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function T4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function p$(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function GD(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let G=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=G?.[1]||j,X=G?.[2]||"",Y=G?.[3]||"",L=String($||"").split("/").slice(0,-1).join("/"),K=Z.startsWith("/")?Z:`${L?`${L}/`:""}${Z}`,Q=[];for(let B of K.split("/")){if(!B||B===".")continue;if(B===".."){if(Q.length>0)Q.pop();continue}Q.push(B)}let q=Q.join("/");return`${Q5(q)}${X}${Y}`}function F5(_){return _?.preview||null}function ZD(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),G=j>=0?$.slice(j+1):$,Z=G.lastIndexOf(".");if(Z<=0||Z===G.length-1)return"none";return G.slice(Z+1)}function XD(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function YD(_,$){let j=$?.path||_?.path||"",G=[];if($?.content_type)G.push(`<span><strong>type:</strong> ${p$($.content_type)}</span>`);if(typeof $?.size==="number")G.push(`<span><strong>size:</strong> ${p$(a_($.size))}</span>`);if($?.mtime)G.push(`<span><strong>modified:</strong> ${p$(T4($.mtime))}</span>`);if(G.push(`<span><strong>kind:</strong> ${p$(XD($))}</span>`),G.push(`<span><strong>extension:</strong> ${p$(ZD(j))}</span>`),j)G.push(`<span><strong>path:</strong> ${p$(j)}</span>`);if($?.truncated)G.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${G.join("")}</div>`}function LD(_){let $=F5(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=YD(_,$);if($.kind==="image"){let G=$.url||($.path?Q5($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${p$(G)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let G=Z1($.text||"",null,{rewriteImageSrc:(Z)=>GD(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${G}</div>`}return`${j}<pre class="workspace-preview-text"><code>${p$($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class f7{container;context;disposed=!1;host;constructor(_,$){this.container=_,this.context=$,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=LD(this.context)}getContent(){let _=F5(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=F5(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var R7={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=F5(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new f7(_,$)}},S7={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return F5(_)||_?.path?1:!1},mount(_,$){return new f7(_,$)}};var KD=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),VD={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},qD={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function QX(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function qX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class NX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=QX(j),X=qD[Z]||"\uD83D\uDCC4",Y=VD[Z]||"Office Document",L=document.createElement("div");L.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",L.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${X}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${qX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${qX(Y)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(L);let V=L.querySelector("#ov-open-tab");if(V)V.addEventListener("click",()=>{let K=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class BX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(G)}`;this.iframe=document.createElement("iframe"),this.iframe.src=X,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var u7={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=QX(_?.path);if(!$||!KD.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new NX(_,$);return new BX(_,$)}};var QD=/\.(csv|tsv)$/i;function FX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class UX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${FX(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${FX(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#csv-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class HX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var g7={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QD.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new UX(_,$);return new HX(_,$)}};var ND=/\.pdf$/i;function BD(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class EX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${BD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#pdf-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class DX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var b7={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ND.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new EX(_,$);return new DX(_,$)}};var FD=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function v7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class zX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,X=document.createElement("div");X.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",X.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${v7(Z)}" alt="${v7(G)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${v7(G)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(X);let Y=X.querySelector("#img-open-tab");if(Y)Y.addEventListener("click",()=>{let L=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(L)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class WX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var m7={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!FD.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new zX(_,$);return new WX(_,$)}};var UD=/\.(html|htm)$/i;function OX(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class JX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"index.html",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:48px;margin-bottom:12px;">\uD83C\uDF10</div>
                    <div style="font-size:14px;color:var(--text-primary,#e2e8f0);font-weight:500;margin-bottom:4px;">${OX(G)}</div>
                    <div style="font-size:12px;color:var(--text-secondary,#94a3b8);">HTML document</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${OX(j)}</div>
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
        `,_.appendChild(Z);let X=Z.querySelector("#html-open-tab");if(X)X.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:open-tab",{bubbles:!0,detail:{path:j}}))});let Y=Z.querySelector("#html-edit-btn");if(Y)Y.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("html-viewer:edit-source",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class AX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/html-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#fff;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var c7={id:"html-viewer",label:"HTML Preview",icon:"code",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!UD.test($))return!1;return 30},mount(_,$){if($?.mode==="view")return new JX(_,$);return new AX(_,$)}};var HD=/\.(mp4|m4v|mov|webm|ogv)$/i;function ED(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class kX{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${ED(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let X=Z.querySelector("#video-open-tab");if(X)X.addEventListener("click",()=>{let Y=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(Y)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class yX{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",G=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=G,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var l7={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!HD.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new kX(_,$);return new yX(_,$)}};P_();function DD(_){let $=_.includes(".")?_.slice(_.lastIndexOf(".")):"",j=_.includes(".")?_.slice(0,_.lastIndexOf(".")):_,G=new Date().toISOString().replace(/[:.]/g,"-").slice(0,19);return`${j}.${G}${$}`}function MX(_){let{path:$,getCurrentMtime:j,anchorParent:G,anchorBefore:Z,onReload:X,onSaveCopy:Y,onOverwrite:L,pollMs:V=3000,ownerDocument:K=document}=_,Q=null,q=null,B=!1,N=!1,U=!1;async function E(){if(N||U||B)return;let W=j();if(!W)return;try{let T=await T7($);if(N||U||!T?.mtime)return;if(T.mtime!==W)B=!0,H(),M()}catch(T){if(typeof console<"u")console.debug("[file-conflict-monitor] mtime poll skipped:",T)}}function D(){if(H(),N)return;Q=setInterval(E,V)}function H(){if(Q)clearInterval(Q),Q=null}function M(){if(q||N)return;let W=K.createElement("div");W.className="editor-conflict-bar",W.innerHTML=`
      <span class="editor-conflict-text">File changed on disk</span>
      <div class="editor-conflict-actions">
        <button class="editor-conflict-btn" data-action="reload" title="Discard and reload from disk">Reload</button>
        <button class="editor-conflict-btn" data-action="save-copy" title="Save current content with a new name">Save copy</button>
        <button class="editor-conflict-btn" data-action="overwrite" title="Overwrite the disk version">Overwrite</button>
        <button class="editor-conflict-btn editor-conflict-dismiss" data-action="dismiss" title="Dismiss">×</button>
      </div>
    `,W.addEventListener("click",(T)=>{let x=T.target.closest("[data-action]");if(!x)return;let A=x.getAttribute("data-action");if(A==="reload")J(),X();else if(A==="save-copy"){let k=DD($);Y(k)}else if(A==="overwrite")J(),L();else if(A==="dismiss")J()}),q=W,G.insertBefore(W,Z)}function J(){if(q)q.remove(),q=null;B=!1,D()}return{start(){D()},stop(){H()},onSaved(W){B=!1,U=!1,D()},dispose(){if(N=!0,H(),q)q.remove(),q=null}}}var zD=/\.mindmap\.ya?ml$/i,C2=String(Date.now());function WD(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}function wX(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function h7(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let G=document.querySelector(`script[src="${$}"]`);if(G)G.remove();return new Promise((Z,X)=>{let Y=document.createElement("script");Y.src=_,Y.dataset.src=$,Y.onload=()=>Z(),Y.onerror=()=>X(Error(`Failed to load ${_}`)),document.head.appendChild(Y)})}function OD(_){let $=_.split("?")[0],j=document.querySelector(`link[data-href="${$}"]`);if(j&&j.href.endsWith(_))return;document.querySelectorAll(`link[data-href="${$}"], link[href="${$}"]`).forEach((Z)=>Z.remove());let G=document.createElement("link");G.rel="stylesheet",G.href=_,G.dataset.href=$,document.head.appendChild(G)}function JD(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
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
    `,_.appendChild(G)}class TX{container;constructor(_,$){this.container=_;let j=$.path||"",G=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83E\uDDE0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${WD(G)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Mindmap Editor</div>
                <button id="mm-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class xX{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";currentMtime=null;conflictMonitor=null;themeListener=()=>{window.__mindmapEditor?.setTheme?.(wX())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{let j=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(j?.mtime)this.currentMtime=j.mtime;return j?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,OD("/static/css/mindmap.css?v="+C2),await Promise.all([h7("/static/js/vendor/d3-mindmap.min.js?v="+C2),h7("/static/js/vendor/js-yaml.min.js?v="+C2)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),JD(this.mindmapEl);let j=wX(),G=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await h7("/static/js/vendor/mindmap-editor.js?v="+C2),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(X)=>{this.lastContent=X,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(X)},resolveImagePath:(X)=>{if(X.startsWith("data:")||X.startsWith("http"))return X;return`/workspace/raw?path=${encodeURIComponent(G+"/"+X)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener),this.initConflictMonitor()}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);let j=await $.json().catch(()=>({}));this.currentMtime=j?.mtime||this.currentMtime,this.conflictMonitor?.onSaved(this.currentMtime),this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}initConflictMonitor(){if(this.conflictMonitor?.dispose(),!this.filePath)return;this.conflictMonitor=MX({path:this.filePath,getCurrentMtime:()=>this.currentMtime,anchorParent:this.container,anchorBefore:this.mindmapEl||this.container.firstElementChild,onReload:async()=>{try{let $=await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json();if(this.disposed)return;this.currentMtime=$?.mtime||null;let j=$?.text||"";this.lastContent=j;let G=window.__mindmapEditor;if(G?.update)G.update(j);this.dirty=!1,this.dirtyCallback?.(!1),this.conflictMonitor?.onSaved(this.currentMtime)}catch(_){console.error("[mindmap] Reload failed:",_)}},onSaveCopy:async(_)=>{try{await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,content:this.lastContent})})}catch($){console.error("[mindmap] Save copy failed:",$)}},onOverwrite:()=>this.saveToWorkspace(this.lastContent)}),this.conflictMonitor.start()}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,this.conflictMonitor?.dispose(),window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p7={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!zD.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new TX(_,$);return new xX(_,$)}};class IX{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(G){console.warn("[tab-store] Change listener failed:",G)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((G)=>G!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let G=this.tabs.get(_);if(!G)return;if(this.tabs.delete(_),G.id=$,G.path=$,G.label=j||$.split("/").pop()||$,this.tabs.set($,G),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((G)=>G.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var $_=new IX;var D6=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};w0();function CX(){let[_,$]=C(null),[j,G]=C({text:"",totalLines:0}),[Z,X]=C(""),[Y,L]=C({text:"",totalLines:0}),[V,K]=C(null),[Q,q]=C(null),[B,N]=C(null),U=g(null),E=g(0),D=g(!1),H=g(""),M=g(""),J=g(!1),W=g(0),T=g(null),x=g(null),A=g(null),k=g(null),O=g(!1),z=g(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:G,agentPlan:Z,setAgentPlan:X,agentThought:Y,setAgentThought:L,pendingRequest:V,setPendingRequest:K,currentTurnId:Q,setCurrentTurnId:q,steerQueuedTurnId:B,setSteerQueuedTurnId:N,lastAgentEventRef:U,lastSilenceNoticeRef:E,isAgentRunningRef:D,draftBufferRef:H,thoughtBufferRef:M,previewResyncPendingRef:J,previewResyncGenerationRef:W,pendingRequestRef:T,stalledPostIdRef:x,currentTurnIdRef:A,steerQueuedTurnIdRef:k,thoughtExpandedRef:O,draftExpandedRef:z}}w0();var AD=0.1,uX=4,gX=4,PX=160,fX=1600,RX=200,SX=1600;function D$(){if(typeof window>"u")return 0;return Number(window.innerWidth)||0}function bX(_=D$()){return _>0?Math.floor(_*AD):0}function U5(_,$=D$(),j=0){let G=bX($)+uX+(j>0?gX+Math.max(0,j):0),Z=$>0?Math.floor($-G):fX;return Math.min(Math.max(Number(_)||0,PX),Math.max(PX,Math.min(fX,Z)))}function H5(_,$=D$(),j=0){let G=bX($)+gX+(j>0?uX+Math.max(0,j):0),Z=$>0?Math.floor($-G):SX;return Math.min(Math.max(Number(_)||0,RX),Math.max(RX,Math.min(SX,Z)))}function vX({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:G}){let Z=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientX,N=$.current||280,U=Q.currentTarget;U.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=B,D=(M)=>{E=M.clientX;let J=U5(N+(M.clientX-B),D$(),j?.current||0);q.style.setProperty("--sidebar-width",`${J}px`),$.current=J},H=()=>{let M=U5(N+(E-B),D$(),j?.current||0);$.current=M,U.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",L_("sidebarWidth",String(Math.round(M))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,X=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=$.current||280,E=Q.currentTarget;E.classList.add("dragging"),q.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let D=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let W=U5(U+(J.clientX-N),D$(),j?.current||0);q.style.setProperty("--sidebar-width",`${W}px`),$.current=W},H=()=>{E.classList.remove("dragging"),q.classList.remove("sidebar-resizing"),document.body.style.userSelect="",L_("sidebarWidth",String(Math.round($.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,Y=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientX,N=j.current||$.current||280,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let E=B,D=(M)=>{E=M.clientX;let J=H5(N+(M.clientX-B),D$(),$?.current||0);q.style.setProperty("--editor-width",`${J}px`),j.current=J},H=()=>{let M=H5(N+(E-B),D$(),$?.current||0);j.current=M,U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("editorWidth",String(Math.round(M))),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,L=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientX,U=j.current||$.current||280,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let W=H5(U+(J.clientX-N),D$(),$?.current||0);q.style.setProperty("--editor-width",`${W}px`),j.current=W},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",L_("editorWidth",String(Math.round(j.current||U))),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current,V=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.clientY,N=G?.current||200,U=Q.currentTarget;U.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=B,D=(M)=>{E=M.clientY;let J=Math.min(Math.max(N-(M.clientY-B),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${J}px`),G)G.current=J;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{let M=Math.min(Math.max(N-(E-B),100),window.innerHeight*0.5);if(G)G.current=M;U.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("dockHeight",String(Math.round(M))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",D),document.removeEventListener("mouseup",H)};document.addEventListener("mousemove",D),document.addEventListener("mouseup",H)}).current,K=g((Q)=>{Q.preventDefault();let q=_.current;if(!q)return;let B=Q.touches[0];if(!B)return;let N=B.clientY,U=G?.current||200,E=Q.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let D=(M)=>{let J=M.touches[0];if(!J)return;M.preventDefault();let W=Math.min(Math.max(U-(J.clientY-N),100),window.innerHeight*0.5);if(q.style.setProperty("--dock-height",`${W}px`),G)G.current=W;window.dispatchEvent(new CustomEvent("dock-resize"))},H=()=>{E.classList.remove("dragging"),document.body.style.userSelect="",L_("dockHeight",String(Math.round(G?.current||U))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",H),document.removeEventListener("touchcancel",H)};document.addEventListener("touchmove",D,{passive:!1}),document.addEventListener("touchend",H),document.addEventListener("touchcancel",H)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:X,handleEditorSplitterMouseDown:Y,handleEditorSplitterTouchStart:L,handleDockSplitterMouseDown:V,handleDockSplitterTouchStart:K}}w0();function r7(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},G=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[G],X=Number(Z);return Number.isFinite(X)?X:$}catch{return $}}var mX=r7("warning",30000),cX=r7("finalize",120000),lX=r7("refresh",30000),hX=30000;function pX(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function E5(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function rX(_=30000){let[,$]=C(0);u(()=>{let j=setInterval(()=>$((G)=>G+1),_);return()=>clearInterval(j)},[_])}function nX(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((G,Z)=>G+Math.max(1,Math.ceil(Z.length/$)),0)}function P2(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function kD(_){if(!_||typeof _!=="object")return null;let $=_.retry_at??_.retryAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function r$(_){if(!_||typeof _!=="object")return null;let $=_.last_event_at??_.lastEventAt??_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function z$(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function f2(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return z$(_)?"Compacting context":"Working..."}function dX(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,G=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(G).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${G}:${String(j).padStart(2,"0")}`}function D5(_,$=Date.now()){let j=P2(_);if(j===null)return null;return dX(Math.max(0,$-j))}function iX(_,$=Date.now()){let j=kD(_);if(j===null)return null;let G=j-$;if(G<=0)return"retrying now";return`retry in ${dX(G)}`}w0();function KL(_={}){o1(_)}function VL(){let[_,$]=C(!1);if(u(()=>{let Z=(Y)=>{let L=z6(Y?.detail?.section);if(L)try{window.__piclawSettingsRequestedSection=L}catch(V){}$(!0)};window.addEventListener("piclaw:open-settings",Z);let X=R2();if(X.open){if(X.section)try{window.__piclawSettingsRequestedSection=X.section}catch(Y){}$(!0)}return()=>window.removeEventListener("piclaw:open-settings",Z)},[]),!_)return null;let[j,G]=C(null);if(u(()=>{Promise.resolve().then(() => (LL(),YL)).then((Z)=>{G(()=>Z.SettingsDialogContent)})},[]),!j)return F`
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
    `}w0();function sz(_,$){return new URL(String(_||""),$).toString()}function qL(){let[_,$]=C(()=>typeof window>"u"?"http://localhost/":window.location.href);u(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=P((Z,X={})=>{if(typeof window>"u")return;let{replace:Y=!1}=X||{},L=sz(Z,window.location.href);if(Y)window.history.replaceState(null,"",L);else window.history.pushState(null,"",L);$(window.location.href)},[]);return{locationParams:Z0(()=>new URL(_).searchParams,[_]),navigate:j}}w0();w0();function QL(_,$,j,G){try{let Z=_?.getItem?.($),X=Z?Number(Z):Number.NaN;return Number.isFinite(X)&&X>=j?X:G}catch(Z){return G}}function U9(_,$,j){try{return _?.setItem?.($,String(Math.round(j))),!0}catch(G){return!1}}var az=400,H9=60,tz=220,E9="mdPreviewHeight";function ez(){return QL(localStorage,E9,H9,tz)}function i2({getContent:_,path:$,onClose:j}){let[G,Z]=C(""),[X,Y]=C(ez),L=g(null),V=g(null),K=g(""),Q=g(_);return Q.current=_,u(()=>{let N=()=>{let E=Q.current?.()||"";if(E===K.current)return;K.current=E;try{let D=Z1(E,null);Z(D)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};N();let U=setInterval(N,az);return()=>clearInterval(U)},[]),u(()=>{if(L.current&&G)E$(L.current).catch((N)=>{console.debug("[markdown-preview] Mermaid rendering failed for the live preview.",N,{path:$})})},[G]),F`
        <div
            class="md-preview-splitter"
            onMouseDown=${(N)=>{N.preventDefault();let U=N.clientY,E=V.current?.offsetHeight||X,D=V.current?.parentElement,H=D?D.offsetHeight*0.7:500,M=N.currentTarget;M.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let J=(T)=>{let x=Math.min(Math.max(E-(T.clientY-U),H9),H);Y(x)},W=()=>{M.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",U9(localStorage,E9,V.current?.offsetHeight||X),document.removeEventListener("mousemove",J),document.removeEventListener("mouseup",W)};document.addEventListener("mousemove",J),document.addEventListener("mouseup",W)}}
            onTouchStart=${(N)=>{N.preventDefault();let U=N.touches[0];if(!U)return;let E=U.clientY,D=V.current?.offsetHeight||X,H=V.current?.parentElement,M=H?H.offsetHeight*0.7:500,J=N.currentTarget;J.classList.add("dragging"),document.body.style.userSelect="none";let W=(x)=>{let A=x.touches[0];if(!A)return;x.preventDefault();let k=Math.min(Math.max(D-(A.clientY-E),H9),M);Y(k)},T=()=>{J.classList.remove("dragging"),document.body.style.userSelect="",U9(localStorage,E9,V.current?.offsetHeight||X),document.removeEventListener("touchmove",W),document.removeEventListener("touchend",T),document.removeEventListener("touchcancel",T)};document.addEventListener("touchmove",W,{passive:!1}),document.addEventListener("touchend",T),document.addEventListener("touchcancel",T)}}
        ></div>
        <div class="md-preview-panel" ref=${V} style=${{height:X+"px"}}>
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
                ref=${L}
                dangerouslySetInnerHTML=${{__html:G}}
            />
        </div>
    `}function NL(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function _W(_){return _==="error"?"Could not open branch window":"Opening branch…"}function BL(_){return F`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${_W(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function FL(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:G,panePopoutHasMenuActions:Z,panePopoutTitle:X,tabStripTabs:Y,tabStripActiveId:L,handleTabActivate:V,previewTabs:K,diffTabs:Q,handleTabTogglePreview:q,handleTabToggleDiff:B,editorContainerRef:N,getPaneContent:U,panePopoutPath:E}=_,D=j&&!G&&Z,H=X?`Pane window controls for ${X}`:"Pane window controls";return F`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${D&&F`
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
                      ${Y.map((M)=>F`
                        <button
                          type="button"
                          class=${`pane-popout-controls-item${M.id===L?" active":""}`}
                          onClick=${(J)=>{V(M.id),J.currentTarget.closest("details")?.removeAttribute("open")}}
                        >
                          ${M.label}
                        </button>
                      `)}
                    </div>
                  </div>
                `}
                ${L&&Q.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(M)=>{B(L),M.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide diff
                  </button>
                `}
                ${L&&K.has(L)&&F`
                  <button
                    type="button"
                    class="pane-popout-controls-action"
                    onClick=${(M)=>{q(L),M.currentTarget.closest("details")?.removeAttribute("open")}}
                  >
                    Hide preview
                  </button>
                `}
              </div>
            </details>
          </div>
        `}
        ${j?F`<div class="editor-pane-host" ref=${N}></div>`:F`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${E||"No pane path provided."}</p>
            </div>
          `}
        ${j&&L&&K.has(L)&&F`
          <${i2}
            getContent=${U}
            path=${L}
            onClose=${()=>q(L)}
          />
        `}
      </div>
    </div>
  `}w0();w0();function o2(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function $W(_,$){let j=o2(_),G=o2($);if(!G)return!1;return j.startsWith(G)||j.includes(G)}function A5(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function D9(_,$,j=Date.now(),G=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},X=String($||"").trim().toLowerCase();if(!X)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>G?X:`${Z.value}${X}`,updatedAt:j}}function jW(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,X=[];for(let Y=0;Y<j;Y+=1)X.push((Z+Y)%j);return X}function GW(_,$,j=0,G=(Z)=>Z){let Z=o2($);if(!Z)return-1;let X=Array.isArray(_)?_:[],Y=jW(X.length,j),L=X.map((V)=>o2(G(V)));for(let V of Y)if(L[V].startsWith(Z))return V;for(let V of Y)if(L[V].includes(Z))return V;return-1}function z9(_,$,j=-1,G=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let X=G(Z[j]);if($W(X,$))return j}return GW(Z,$,0,G)}P_();function s2(_){return String(_||"").trim().toLowerCase()}function W9(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return s2($[1]||"")}function ZW(_){let $=new Set,j=[];for(let G of Array.isArray(_)?_:[]){let Z=s2(G?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(G)}return j}function UL(_,$,j={}){let G=W9($);if(G==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return ZW(_).filter((X)=>{if(Z&&X?.chat_jid===Z)return!1;return s2(X?.agent_name).startsWith(G)})}function O9(_){let $=s2(_);return $?`@${$} `:""}function HL(_={}){if(_.searchMode)return!1;return Boolean(_.showSessionSwitcherButton)}function EL(_,$,j={}){if(!_||_.isComposing)return!1;if(!HL(j))return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function J9(_,$={}){if(!HL($))return!1;return String(_||"")==="@"}function A9(_){let $=k9(_);return $?`@${$}`:""}function k9(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function a2(_,$=""){let j=String(_||""),G=k9(j),Z=k9($);if(!j.trim())return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!G)return{normalized:G,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let X=`@${G}`;if(G===Z)return{normalized:G,handle:X,canSubmit:!1,kind:"info",message:`Already using ${X}.`};if(G!==j.trim())return{normalized:G,handle:X,canSubmit:!0,kind:"info",message:`Will save as ${X}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:G,handle:X,canSubmit:!0,kind:"success",message:`Saving as ${X}.`}}function XW(_,$={}){let j=[],G=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(G&&Z===G)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function t2(_,$={}){let j=A9(_?.agent_name)||String(_?.chat_jid||"").trim(),G=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=XW(_,$);return Z.length>0?`${j} — ${G} • ${Z.join(" • ")}`:`${j} — ${G}`}function DL(_,$,j){let G=A9(_),Z=A9($),X=String(j||"").trim();if(G&&Z&&G!==Z)return`Restored archived ${G} as ${Z} because ${G} is already in use.`;if(Z)return`Restored ${Z}.`;if(G)return`Restored ${G}.`;return`Restored ${X||"branch"}.`}function e2({steerQueued:_=!1,pulsing:$=!1}={}){let j=["turn-dot"];if(_)j.push("turn-dot-queued");if($)j.push("turn-dot-pulsing");return j.join(" ")}function _8({pulsing:_=!1}={}){let $=["compose-inline-status-dot"];if(_)$.push("compose-inline-status-dot-pulsing");return $.join(" ")}function $8(_,{isLastActivity:$=!1,pendingRequest:j=!1}={}){if(j)return"dot";if($)return"none";if(_?.type==="error")return"none";if(_?.type==="intent")return"dot";let G=typeof _?.type==="string"?_.type:"";if(Boolean(typeof _?.tool_name==="string"&&_.tool_name.trim()||_?.tool_args))return"spinner";if(G==="tool_call"||G==="tool_status"||G==="thinking"||G==="waiting")return"spinner";return"dot"}function zL(_,$={}){return $8(_,$)==="dot"}w0();var WL=350;function YW(_){return String(_||"Connecting").replace(/[-_]+/g," ").replace(/^./,($)=>$.toUpperCase())}function LW(_,$={}){let j=typeof _==="string"&&_.trim()?_.trim():"connecting";if(j==="connected")return{show:!1,statusClass:"connected",label:"Connected",title:"Connection: Connected"};if(j!=="disconnected"){let L=YW(j);return{show:!0,statusClass:j,label:L,title:`Connection: ${L}`}}let G=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):WL,Z=Number.isFinite(Number($?.nowMs))?Number($.nowMs):Date.now(),X=Number.isFinite(Number($?.disconnectedAtMs))?Number($.disconnectedAtMs):Z;return Z-X>=G?{show:!0,statusClass:"disconnected",label:"Reconnecting",title:"Reconnecting"}:{show:!1,statusClass:"connecting",label:"Connecting",title:"Connecting"}}function y9(_,$={}){let j=Number.isFinite(Number($?.delayMs))?Math.max(0,Number($.delayMs)):WL,[G,Z]=C(null),[X,Y]=C(()=>Date.now());return u(()=>{if(_==="disconnected"){let L=Date.now();Z((V)=>V??L),Y(L);return}Z(null),Y(Date.now())},[_]),u(()=>{if(_!=="disconnected"||G===null)return;let L=j-(Date.now()-G);if(L<=0)return;let V=0,K=0,Q=setTimeout(()=>{if(typeof requestAnimationFrame!=="function"){Y(Date.now());return}V=requestAnimationFrame(()=>{K=requestAnimationFrame(()=>{Y(Date.now())})})},L);return()=>{if(clearTimeout(Q),V)cancelAnimationFrame(V);if(K)cancelAnimationFrame(K)}},[_,G,j]),Z0(()=>LW(_,{delayMs:j,disconnectedAtMs:G,nowMs:X}),[_,j,G,X])}w0();function L1({prefix:_="file",label:$,title:j,onRemove:G,onClick:Z,removeTitle:X="Remove",icon:Y="file"}){let L=`${_}-file-pill`,V=`${_}-file-name`,K=`${_}-file-remove`,Q=Y==="message"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:Y==="folder"?F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        </svg>`:F`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
        </svg>`;return F`
    <span class=${L} title=${j||$} onClick=${Z}>
      ${Q}
      <span class=${V}>${$}</span>
      ${G&&F`
        <button
          class=${K}
          onClick=${(q)=>{q.preventDefault(),q.stopPropagation(),G()}}
          title=${X}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}async function M9(_,$,j){if(typeof _!=="function")return!1;try{let G=await _($);if(!G)return!1;return j(G),!0}catch(G){return!1}}function KW(_={}){let $=_.navigator??(typeof navigator<"u"?navigator:null);if(!$)return!1;let j=String($.userAgent||"");if(/iPad|iPhone/.test(j))return!0;return $.platform==="MacIntel"&&Number($.maxTouchPoints||0)>1}function VW(_={}){let $=_.window??(typeof window<"u"?window:null);if(!$)return null;return $.SpeechRecognition||$.webkitSpeechRecognition||null}function w9(_={}){let $=_.window??(typeof window<"u"?window:null),j=typeof _.secureContext==="boolean"?_.secureContext:Boolean($?.isSecureContext),G=f1(_),Z=KW(_),X=VW(_);if(!j)return{mode:"unavailable",showButton:!1,canStart:!1,reason:"secure-context-required",title:"Voice input requires HTTPS",detail:"Native browser speech input needs a secure context (HTTPS or localhost).",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};if(Z&&G)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-standalone-fallback",title:"Use keyboard dictation",detail:"Speech input is intentionally downgraded in iPhone/iPad standalone web apps because browser-native recognition is not reliable there. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j};if(!X){if(Z)return{mode:"fallback",showButton:!0,canStart:!1,reason:"ios-keyboard-dictation",title:"Use keyboard dictation",detail:"This browser does not expose native in-page speech recognition here. Focus the compose box and use the keyboard dictation mic instead.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j};return{mode:"unavailable",showButton:!1,canStart:!1,reason:"unsupported",title:"Voice input unavailable",detail:"This browser does not expose native speech recognition in this context.",recognitionCtor:null,ios:Z,standalone:G,secureContext:j}}return{mode:"native",showButton:!0,canStart:!0,reason:"supported",title:"Start voice input",detail:Z?"Browser-native speech input is available here, but Safari/WebKit reliability may still vary.":"Browser-native speech input is available.",recognitionCtor:X,ios:Z,standalone:G,secureContext:j}}function OL(_,$="",j=""){let G=String(_||""),Z=String($||"").trim(),X=String(j||"").trim(),Y=[Z,X].filter(Boolean).join(" ").trim();if(!Y)return G;if(!G)return Y;let L=/[\s\n]$/.test(G)?"":" ";return`${G}${L}${Y}`}function JL(_,$=0){let j="",G="",Z=_&&typeof _.length==="number"?_:[];for(let X=Math.max(0,$);X<Z.length;X+=1){let Y=Z[X];if(!Y||!Y[0])continue;let L=String(Y[0].transcript||"").trim();if(!L)continue;if(Y.isFinal)j=`${j} ${L}`.trim();else G=`${G} ${L}`.trim()}return{finalText:j,interimText:G}}function T9(_,$=null){let j=String(_||"").trim().toLowerCase();switch(j){case"not-allowed":case"service-not-allowed":return $?.ios?"Microphone or speech-recognition permission was denied. On iPhone/iPad, using keyboard dictation may be more reliable.":"Microphone or speech-recognition permission was denied by the browser.";case"no-speech":return"No speech was detected. Try again and speak after the listening indicator appears.";case"audio-capture":return"The browser could not access a microphone for speech recognition.";case"network":return"The browser speech-recognition service reported a network or service failure.";case"aborted":return"Voice input was stopped.";default:return j?`Voice input failed (${j}).`:"Voice input failed."}}var qW=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking/effort level"},{name:"/effort",description:"Show or set thinking/effort level (alias for /thinking)"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/meters",description:"Toggle the top-right CPU/RAM HUD (/meters on|off|toggle)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/session-rotate",description:"Rotate the current persisted session into an archived file"},{name:"/rollup",description:"Merge the current branch chat back into its parent chat"},{name:"/clone",description:"Duplicate the current active branch into a new session"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/dream",description:"Run Dream memory maintenance over recent days (default 7)"},{name:"/tasks",description:"List scheduled tasks"},{name:"/scheduled",description:"List scheduled tasks"},{name:"/pair",description:"Manage remote peer connections (/pair request <url> | /pair list)"},{name:"/ask",description:"Send a prompt to a paired remote instance (/ask <instance_id|fingerprint> <prompt>)"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/exit",description:"Exit the current piclaw process immediately (Supervisor will restart it)"},{name:"/login",description:"Login to an AI model provider (OAuth or API key)"},{name:"/logout",description:"Logout from an AI model provider"},{name:"/settings",description:"Open the settings pane"},{name:"/help",description:"Open keyboard shortcuts help"},{name:"/commands",description:"List available commands"},{name:"/skill:",description:"Run a workspace skill (e.g. /skill:visual-artifact-generator, /skill:web-search)"}],AL="piclaw_compose_history";function QW(_,$,j=!1){if(j)return{shouldApply:!1,nextToken:$,text:""};if(!_||typeof _!=="object")return{shouldApply:!1,nextToken:$,text:""};let G=typeof _.token==="string"?_.token:"",Z=typeof _.text==="string"?_.text:"";if(!G||G===$||!Z.trim())return{shouldApply:!1,nextToken:$,text:""};return{shouldApply:!0,nextToken:G,text:Z}}function NW(_="web:default"){let $=typeof _==="string"&&_.trim()?_.trim():"web:default";if($==="web:default")return AL;return`${AL}:${encodeURIComponent($)}`}function BW(_,$=null){let j=new Set,G=[];for(let Z of Array.isArray(_)?_:[]){let X=typeof Z?.chat_jid==="string"?Z.chat_jid.trim():"";if(!X||j.has(X))continue;if(!(typeof Z?.agent_name==="string"?Z.agent_name.trim():""))continue;j.add(X),G.push(Z)}return G.sort((Z,X)=>{let Y=Boolean(Z?.archived_at),L=Boolean(X?.archived_at);if(Y!==L)return Y?1:-1;let V=String(Z?.agent_name||"").trim(),K=String(X?.agent_name||"").trim(),Q=V.localeCompare(K,void 0,{sensitivity:"base"});if(Q!==0)return Q;let q=String(Z?.chat_jid||"").trim(),B=String(X?.chat_jid||"").trim();return q.localeCompare(B,void 0,{sensitivity:"base"})}),G}function FW(_){return Boolean(_?.is_active&&!_?.archived_at)}function UW(_,$=null){let j=Array.isArray(_)?_:[],G=typeof $==="string"?$.trim():"";if(G){let X=j.findIndex((Y)=>{if(Y?.disabled)return!1;if(Y?.type!=="session")return!1;return(typeof Y?.chat?.chat_jid==="string"?Y.chat.chat_jid.trim():"")===G});if(X>=0)return X}let Z=j.findIndex((X)=>!X?.disabled);return Z>=0?Z:0}function kL(_,$){let j=typeof $?.command?.message==="string"?$.command.message.trim():"";if(!$?.ui_only||!j)return null;let G=typeof _==="string"?_.trim():"";if(!G.startsWith("/"))return null;let Z=G.split(/\s+/).filter(Boolean),X=Z[0]?.toLowerCase()||"";if(!(Z.length>1)&&(X==="/model"||X==="/thinking"||X==="/effort"))return j;return null}function HW(_,$,j=!1){if(_)return{mode:"queue",className:"icon-btn send-btn queue-mode",title:"Queue follow-up (Enter)",ariaLabel:"Queue follow-up message",disabled:!$};return{mode:"send",className:"icon-btn send-btn",title:"Send (Enter)",ariaLabel:"Send message",disabled:!$}}function yL(_,$,j={}){if(!_||j.searchMode)return!1;if(!(_.key===" "||_.key==="Spacebar"||_.code==="Space"))return!1;if(_.ctrlKey||_.metaKey||_.altKey||_.repeat)return!1;if(!j.speechButtonVisible||j.speechButtonActive)return!1;if(!j.canStartSpeech)return!1;return String($||"").trim().length===0}function EW(_,$){if(!$||!_)return!1;return _.key===" "||_.key==="Spacebar"||_.code==="Space"}function DW(_,$=!1){if(!_)return null;if($)return{mode:"compacting",className:"icon-btn send-btn abort-mode compacting-mode",title:"Compacting context — Stop response",ariaLabel:"Compacting context — Stop response",disabled:!1};return{mode:"abort",className:"icon-btn send-btn abort-mode",title:"Stop response",ariaLabel:"Stop response",disabled:!1}}function zW(_){return _==="abort"||_==="compacting"}function WW(_,$=0){if(_?.visible===!1)return{visible:!1,title:"",indicatorText:null,animateDot:!1};let j=typeof _?.message==="string"&&_.message.trim()?_.message.trim():null,G=_?.indicator&&typeof _.indicator==="object"?_.indicator:null;if(!j&&!G)return{visible:!1,title:"",indicatorText:null,animateDot:!1};if(G?.mode==="hidden")return{visible:Boolean(j),title:j||"Working…",indicatorText:null,animateDot:!1};if(G?.mode==="custom"&&Array.isArray(G.frames)&&G.frames.length>0){let Z=G.frames,X=Number.isFinite($)&&$>=0?Math.floor($)%Z.length:0;return{visible:!0,title:j||"Working…",indicatorText:Z[X],animateDot:!1}}return{visible:!0,title:j||"Working…",indicatorText:null,animateDot:!0}}function OW({usage:_,onCompact:$,compactionLabel:j="",compactionTitle:G=""}){let Z=Math.min(100,Math.max(0,_.percent||0)),X=_.tokens,Y=_.contextWindow,L="Compact context",V=X!=null?`Context: ${k5(X)} / ${k5(Y)} tokens (${Z.toFixed(0)}%)`:`Context: ${Z.toFixed(0)}%`,K=typeof j==="string"?j.trim():"",Q=typeof G==="string"?G.trim():"",q=K?`${V} — ${Q||"Smart compaction"} · ${K}`:`${V} — ${"Compact context"}`,B=9,N=2*Math.PI*9,U=Z/100*N,E=Z>90?"var(--context-red, #ef4444)":Z>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return F`
        <button
            class=${`compose-context-pie icon-btn${K?" is-compacting":""}`}
            type="button"
            title=${q}
            aria-label=${K?`Smart compaction ${K}`:"Compact context"}
            onClick=${(D)=>{D.preventDefault(),D.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${E}
                    stroke-width="2.5"
                    stroke-dasharray=${`${U} ${N}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
            ${K&&F`<span class="compose-context-pie-timer">${K}</span>`}
        </button>
    `}function k5(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function JW(_){let $=Number(_?.tokens);return Number.isFinite($)&&$>0?$:null}function ML(_,$){let j=Number(_?.contextWindow??_?.context_window),G=JW($);if(!Number.isFinite(j)||j<=0||!Number.isFinite(G)||G<=0)return{blocked:!1,note:"",title:"",tokens:G??null,contextWindow:Number.isFinite(j)&&j>0?j:null};if(G<=j)return{blocked:!1,note:"",title:"",tokens:G,contextWindow:j};return{blocked:!0,note:"Current context won’t fit — compact first",title:`Current context uses ${k5(G)} tokens, but this model only fits ${k5(j)}. Compact first.`,tokens:G,contextWindow:j}}function x9(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"";return`${k5($)} ctx`}function AW(_,$){let j=typeof _==="string"?_.trim():"",G=x9($);if(!j)return G;if(!G)return j;return`${j} • ${G}`}function kW(_,$="",j=""){let G=typeof _==="string"?_.trim():"";if(G)return G;let Z=typeof $==="string"?$.trim():"",X=typeof j==="string"?j.trim():"";if(Z&&X)return`${Z}/${X}`;return X||Z||""}function xL(_){let $=Array.isArray(_?.model_options)?_.model_options:null,j=Array.isArray(_?.models)?_.models:[],G=$&&$.length>0?$:j,Z=[];for(let X of G){if(typeof X==="string"){let q=X.trim();if(!q)continue;let B=q.indexOf("/"),N=B>0?q.slice(0,B).trim():"",U=B>0?q.slice(B+1).trim():q;Z.push({label:q,provider:N,id:U,name:null,contextWindow:null,reasoning:!1});continue}if(!X||typeof X!=="object")continue;let Y=typeof X.provider==="string"?X.provider.trim():"",L=typeof X.id==="string"?X.id.trim():"",V=kW(X.label,Y,L);if(!V)continue;let K=typeof X.name==="string"&&X.name.trim()?X.name.trim():null,Q=Number(X.context_window??X.contextWindow);Z.push({label:V,provider:Y,id:L,name:K,contextWindow:Number.isFinite(Q)&&Q>0?Q:null,reasoning:Boolean(X.reasoning)})}return Z.sort((X,Y)=>X.label.localeCompare(Y.label,void 0,{sensitivity:"base"})),Z}function yW(_){if(!_||typeof _!=="object")return"";return[_.label,_.provider,_.id,_.name,x9(_.contextWindow)].filter(Boolean).join(" ")}function MW(_,$){let j=typeof _==="string"?_.trim():"";if(j)return{showPicker:!0,label:j,hasAvailableModels:!0};let G=xL($).length>0;return{showPicker:G,label:G?"Select model":"",hasAvailableModels:G}}function j8(_){return(typeof _==="string"?_.trim():"")||null}function wL(_){return j8(_)?.toLowerCase()??null}function TL(_,$){let j=wL(_),G=wL($);if(!j||!G)return!1;return j===G||j.endsWith(`/${G}`)||G.endsWith(`/${j}`)}function wW(_,$){let j=$&&typeof $==="object"?$:{},G=j8(j.latest_response_model??j.response_model??j.responseModel??j.routed_model??j.routedModel);if(!G)return null;let Z=j8(j.latest_requested_model??j.requested_model??j.requestedModel??j.current??j.model??_);if(Z&&TL(G,Z))return null;let X=j8(_??j.current??j.model);if(X&&Z&&!TL(X,Z))return null;return{label:`Routed: ${G}`,title:Z?`Requested model: ${Z} • Routed model: ${G}`:`Routed model: ${G}`,requestedModel:Z,responseModel:G}}function TW(_){if(!_)return _;let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!$.includes(" @ ")||!$.includes(`:
`))return _;let j=$.split(`
`),G=[],Z=0,X=!1;while(Z<j.length){let L=j[Z].trim();if(!L){Z+=1;continue}if(L==="Messages:"||L.startsWith("Channel:")){X=!0,Z+=1;continue}if(/^[^\n]+\s@\s[^\n]+:$/.test(L)){X=!0,Z+=1;let V=[];while(Z<j.length){let K=j[Z],Q=K.trim();if(/^[^\n]+\s@\s[^\n]+:$/.test(Q))break;if(Q.startsWith("Channel:")||Q==="Messages:")break;V.push(K.startsWith("  ")?K.slice(2):K),Z+=1}if(V.length>0)G.push(V.join(`
`).trim());continue}return _}return X&&G.length>0?G.filter(Boolean).join(`

`):_}function IL(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function xW(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=IL(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function IW(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=IL(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),folderRefs:Z}}function CW(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(Q)Z.push(Q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function PW(_){if(!_)return{content:_,attachmentRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Attachments:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,attachmentRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),q=Q.match(/^attachment:(\d+)(?:\s*\((.+)\))?$/i);if(q)Z.push({id:q[1],label:(q[2]||"").trim()||`attachment:${q[1]}`,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachmentRefs:[]};let Y=j.slice(0,G),L=j.slice(X);return{content:[...Y,...L].join(`
`).replace(/\n{3,}/g,`

`).trim(),attachmentRefs:Z}}function CL(_){let $=TW(_||""),j=xW($||""),G=IW(j.content||""),Z=CW(G.content||""),X=PW(Z.content||"");return{text:X.content||"",fileRefs:j.fileRefs,folderRefs:G.folderRefs,messageRefs:Z.messageRefs,attachmentRefs:X.attachmentRefs}}function fW(_){let $=CL(_),j=$.attachmentRefs.length>0?`Attachments:
${$.attachmentRefs.map((Z)=>`- ${Z.raw}`).join(`
`)}`:"";return{content:[String($.text||"").trim(),j].filter(Boolean).join(`

`).trim(),fileRefs:[...$.fileRefs],folderRefs:[...$.folderRefs],messageRefs:[...$.messageRefs],attachmentRefs:[...$.attachmentRefs]}}function RW(_){let{queuedItem:$,buildDraft:j=fW,onRemoveQueuedFollowup:G,setSubmitError:Z,setSubmitNotice:X,setMediaFiles:Y,onSetFileRefs:L,onSetFolderRefs:V,onSetMessageRefs:K,setContent:Q,textareaRef:q,resizeTextarea:B=()=>{},scheduleTimeout:N=(M,J=0)=>setTimeout(M,J),scheduleRaf:U=(M)=>requestAnimationFrame(M),logger:E=console}=_||{};if(!$)return!1;let D=j($?.content||""),H=D.content;return E?.info?.("[compose-box] Returning queued item to editor",{text:H?.slice(0,80),fileRefs:D.fileRefs?.length,folderRefs:D.folderRefs?.length,messageRefs:D.messageRefs?.length}),Z?.(null),X?.(null),Y?.([]),L?.(D.fileRefs),V?.(D.folderRefs),K?.(D.messageRefs),Q?.(H),U(()=>{let M=q?.current;if(!M)return;if(M.value=H,typeof M.dispatchEvent==="function")M.dispatchEvent(new Event("input",{bubbles:!0}));B();let J=H.length;M.selectionStart=J,M.selectionEnd=J,M.focus()}),N(()=>{try{G?.($)}catch(M){E?.warn?.("[compose-box] Failed to remove returned queued follow-up.",M)}},0),!0}function I9({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onMoveQueuedFollowup:G,onReturnQueuedFollowup:Z,onOpenFilePill:X}){if(!Array.isArray(_)||_.length===0)return null;return F`
        <div class="compose-queue-stack">
            ${_.map((Y,L)=>{let V=typeof Y?.content==="string"?Y.content:"",K=CL(V);if(!K.text.trim()&&K.fileRefs.length===0&&K.folderRefs.length===0&&K.messageRefs.length===0&&K.attachmentRefs.length===0)return null;let Q=L>0,q=L<_.length-1,B=!0;return F`
                    <div class="compose-queue-stack-item" data-testid="queue-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${V}>
                            ${K.text.trim()&&F`<div class="compose-queue-stack-text">${K.text}</div>`}
                            ${(K.messageRefs.length>0||K.fileRefs.length>0||K.folderRefs.length>0||K.attachmentRefs.length>0)&&F`
                                <div class="compose-queue-stack-refs">
                                    ${K.messageRefs.map((N)=>F`
                                        <${L1}
                                            key=${"queue-msg-"+N}
                                            prefix="compose"
                                            label=${"msg:"+N}
                                            title=${"Message reference: "+N}
                                            icon="message"
                                        />
                                    `)}
                                    ${K.fileRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-file-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${K.folderRefs.map((N)=>{let U=N.split("/").pop()||N;return F`
                                            <${L1}
                                                key=${"queue-folder-"+N}
                                                prefix="compose"
                                                label=${U}
                                                title=${N}
                                                icon="folder"
                                                onClick=${()=>X?.(N)}
                                            />
                                        `})}
                                    ${K.attachmentRefs.map((N)=>F`
                                        <${L1}
                                            key=${"queue-attachment-"+N.id}
                                            prefix="compose"
                                            label=${N.label}
                                            title=${N.raw}
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
                                    onClick=${()=>Q&&G?.(L,L-1)}
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
                                    disabled=${!q}
                                    onClick=${()=>q&&G?.(L,L+1)}
                                >
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                        <polyline points="6 9 12 15 18 9"></polyline>
                                    </svg>
                                </button>
                            `}
                            ${B&&F`
                                <button
                                    class="compose-queue-stack-move-btn queue-edit"
                                    data-action="edit"
                                    type="button"
                                    title="Edit in compose"
                                    aria-label="Return queued message to editor"
                                    onClick=${(N)=>{N.stopPropagation(),Z?.(Y)}}
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
    `}function PL({onPost:_,onFocus:$,searchMode:j,searchScope:G="current",onSearch:Z,onSearchScopeChange:X,onEnterSearch:Y,onExitSearch:L,fileRefs:V=[],onRemoveFileRef:K,onClearFileRefs:Q,folderRefs:q=[],onRemoveFolderRef:B,onClearFolderRefs:N,messageRefs:U=[],onRemoveMessageRef:E,onClearMessageRefs:D,activeModel:H=null,agentModelsPayload:M=null,modelUsage:J=null,thinkingLevel:W=null,supportsThinking:T=!1,contextUsage:x=null,onContextCompact:A,notificationsEnabled:k=!1,notificationPermission:O="default",onToggleNotifications:z,onModelChange:y,onModelStateChange:I,activeEditorPath:R=null,onAttachEditorFile:f,onOpenFilePill:v,followupQueueItems:l=[],onInjectQueuedFollowup:h,onRemoveQueuedFollowup:n,onMoveQueuedFollowup:b,onSubmitIntercept:$0,onMessageResponse:E0,isAgentActive:V0=!1,activeChatAgents:K0=[],currentChatJid:X0="web:default",connectionStatus:F0="connected",stateAccessFailed:_0=!1,onSetFileRefs:Y0,onSetFolderRefs:Q0,onSetMessageRefs:J0,onSubmitError:s,onSwitchChat:j0,onRenameSession:z0,isRenameSessionInProgress:C0=!1,onCreateSession:h0,onCreateRootSession:n0,onDeleteSession:G_,onPurgeArchivedSession:m0,onRestoreSession:a0,showQueueStack:S0=!0,statusNotice:o0=null,extensionWorkingState:c0=null,prefillRequest:d0=null}){let[r0,Q_]=C(""),[t0,l0]=C(""),[O0,B_]=C(!1),[e0,D_]=C(!1),[H0,u0]=C("or"),[T0,i0]=C([]),[A_,K_]=C(!1),[H_,E_]=C([]),[y_,I_]=C(0),[u_,e]=C(!1),A0=g(null),[k0,d]=C([]),[o,a]=C(0),[G0,L0]=C(!1),[M0,b0]=C(!1),[P0,g0]=C(!1),[I0,D0]=C(!1),[f0,Z_]=C([]),[__,F_]=C(0),[v0,W_]=C(0),[z_,i]=C(!1),[W0,X_]=C(!1),[V_,p_]=C(0),[B1,g_]=C(null),[J1,C_]=C(null),[M_,A1]=C(()=>w9()),[O_,k_]=C({kind:"idle",title:"",detail:""}),[F1,m_]=C(()=>Date.now()),[n_,s_]=C(0),U_=g(null),x1=g(null),U1=g(null),g1=g(null),k1=g(null),e1=g(null),c4=g(null),A$=g(null),t_=g({value:"",updatedAt:0}),c_=g(null),y1=g(""),H1=g(""),_1=g(""),k$=g(""),y$=g(!1),_$=g(!1),w_=g(!1),K1=g(0),M$=g(!1),l4=200,$$=NW(X0),h4=(w)=>{let m=new Set,r=[];for(let N0 of w||[]){if(typeof N0!=="string")continue;let R0=N0.trim();if(!R0||m.has(R0))continue;m.add(R0),r.push(R0)}return r},p4=(w=$$)=>{let m=z1(w);if(!m)return[];try{let r=JSON.parse(m);if(!Array.isArray(r))return[];return h4(r)}catch{return[]}},w$=(w,m=$$)=>{L_(m,JSON.stringify(w))},T$=g(p4($$)),b1=g(-1),v1=g(""),r4=g("");u(()=>{T$.current=p4($$),b1.current=-1,v1.current=""},[$$]),u(()=>{if(!j)return;fetch("/agent/settings-data").then((w)=>w.json()).then((w)=>{if(w?.searchMatchMode)u0(w.searchMatchMode)}).catch(()=>{})},[j]),u(()=>{let w=!1;return fetch(`/agent/commands?chat_jid=${encodeURIComponent(X0||"web:default")}`).then((r)=>r.ok?r.json():null).then((r)=>{if(w||!r?.commands)return;A0.current=r.commands.map((N0)=>({name:N0.name,description:N0.description||""}))}).catch((r)=>{console.debug("[compose] failed to fetch dynamic commands",r)}),()=>{w=!0}},[X0]),u(()=>{let w=QW(d0,r4.current,j);if(!w.shouldApply)return;r4.current=w.nextToken,g_(null),Q_(w.text),U0(w.text),r_(w.text),requestAnimationFrame(()=>{x0();let m=U_.current;if(!m)return;try{m.focus({preventScroll:!0})}catch{m.focus()}let r=w.text.length;m.setSelectionRange?.(r,r)})},[d0,j]),u(()=>{A1(w9())},[]);let V1=r0.trim()||T0.length>0||V.length>0||q.length>0||U.length>0,R_=O_.kind!=="idle",n4=O_.kind==="requesting_permission"||O_.kind==="listening",I1=!j&&Boolean(M_?.showButton),x$=O_.kind==="requesting_permission"||O_.kind==="listening",d4=x$?"Stop voice input":M_?.title||"Voice input",g6=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),b6=typeof window<"u"&&typeof Notification<"u",X4=typeof window<"u"?Boolean(window.isSecureContext):!1,i4=b6&&X4&&O!=="denied",o4=O==="granted"&&k,q1=z$(o0),C$=f2(o0),Y4=typeof o0?.detail==="string"&&o0.detail.trim()?o0.detail.trim():"",L4=q1?D5(o0,F1):null,m1=WW(c0,n_),E1=c0?.indicator&&typeof c0.indicator==="object"?c0.indicator:null,v6=o4?"Disable notifications":"Enable notifications",K4=T0.length>0||V.length>0||q.length>0||U.length>0,j$=y9(_0?F0:"connected"),e_=j$.label,P$=j$.title,s4=HW(V0,V1,q1),G$=DW(V0,q1),b5=(Array.isArray(K0)?K0:[]).filter((w)=>!w?.archived_at),b_=(()=>{for(let w of Array.isArray(K0)?K0:[]){let m=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(m&&m===X0)return w}return null})(),d8=Boolean(b_&&b_.chat_jid===(b_.root_chat_jid||b_.chat_jid)),i8=Boolean(d8&&(b_?.chat_jid||X0)==="web:default"),C1=(()=>{let w=typeof b_?.parent_branch_id==="string"?b_.parent_branch_id.trim():"",m=typeof b_?.branch_id==="string"?b_.branch_id.trim():"";if(!b_||!w||!m||b_.archived_at)return null;if((Array.isArray(K0)?K0:[]).filter((R0)=>{let N_=typeof R0?.parent_branch_id==="string"?R0.parent_branch_id.trim():"";return N_&&N_===m}).length>0)return null;return(Array.isArray(K0)?K0:[]).find((R0)=>{let N_=typeof R0?.branch_id==="string"?R0.branch_id.trim():"";return N_&&N_===w&&!R0?.archived_at})||null})(),V4=Z0(()=>BW(K0,X0),[K0,X0]),f$=V4.length>0,R$=f$&&typeof j0==="function",S$=f$&&typeof a0==="function",a4=Boolean(C0||M$.current),Z$=!j&&typeof z0==="function"&&!a4,X$=!j&&typeof h0==="function",q4=!j&&typeof n0==="function",Q4=!j&&!V0&&!W0&&Boolean(C1?.chat_jid),Y$=!j&&typeof G_==="function"&&!i8,v5=!j&&typeof m0==="function",L$=!j&&(R$||S$||Z$||X$||q4||Q4||Y$||v5),m5=MW(H,M),m6=m5.showPicker,c6=m5.label,l6=T&&W?` (${W})`:"",o8=l6.trim()?`${W}`:"",S=wW(H,M),c=typeof J?.hint_short==="string"?J.hint_short.trim():"",p=[o8||null,S?.label||null,c||null].filter(Boolean).join(" • "),t=[H?`Current model: ${c6}${l6}`:null,S?.title||null,J?.plan?`Plan: ${J.plan}`:null,c||null,J?.primary?.reset_description||null,J?.secondary?.reset_description||null].filter(Boolean),B0=M0?"Switching model…":t.join(" • ")||(m6?"Select a model (tap to open model picker)":`Current model: ${c6}${l6} (tap to open model picker)`),q0=!j&&(m6||x&&x.percent!=null),y0=(w)=>{if(!w||typeof w!=="object")return;let m=w.model??w.current;if(typeof I==="function")I({...w,model:m??null,thinking_level:w.thinking_level??null,thinking_level_label:w.thinking_level_label??null,supports_thinking:w.supports_thinking,provider_usage:w.provider_usage??null});if(m&&typeof y==="function")y(m)},x0=(w)=>{let m=w||U_.current;if(!m)return;m.style.height="auto",m.style.height=`${m.scrollHeight}px`,m.style.overflowY="hidden"},U0=(w)=>{if(!w.startsWith("/")||w.includes(`
`)){e(!1),E_([]);return}let m=w.toLowerCase().split(" ")[0];if(m.length<1){e(!1),E_([]);return}let N0=(A0.current||qW).filter((R0)=>R0.name.startsWith(m)||R0.name.replace(/-/g,"").startsWith(m.replace(/-/g,"")));if(N0.length>0&&!(N0.length===1&&N0[0].name===m))L0(!1),d([]),E_(N0),I_(0),e(!0);else e(!1),E_([])},s0=(w)=>{let m=r0,r=m.indexOf(" "),N0=r>=0?m.slice(r):"",R0=w.name+N0;Q_(R0),e(!1),E_([]),requestAnimationFrame(()=>{let N_=U_.current;if(!N_)return;let i_=R0.length;N_.selectionStart=i_,N_.selectionEnd=i_,N_.focus()})},r_=(w)=>{if(J9(w,{searchMode:j,showSessionSwitcherButton:L$})){L0(!1),d([]);return}if(W9(w)==null){L0(!1),d([]);return}let m=UL(b5,w,{currentChatJid:X0});if(m.length>0&&!(m.length===1&&O9(m[0].agent_name).trim().toLowerCase()===String(w||"").trim().toLowerCase()))e(!1),E_([]),d(m),a(0),L0(!0);else L0(!1),d([])},$1=(w)=>{let m=O9(w?.agent_name);if(!m)return;Q_(m),L0(!1),d([]),requestAnimationFrame(()=>{let r=U_.current;if(!r)return;let N0=m.length;r.selectionStart=N0,r.selectionEnd=N0,r.focus()})},K$=()=>{if(j||!R$&&!S$&&!Z$&&!X$&&!Y$)return!1;return t_.current={value:"",updatedAt:0},g0(!1),e(!1),E_([]),L0(!1),d([]),D0(!0),!0},Rj=(w)=>{if(w?.preventDefault?.(),w?.stopPropagation?.(),j||!R$&&!S$&&!Z$&&!X$&&!Y$)return;if(I0){t_.current={value:"",updatedAt:0},D0(!1);return}K$()},Sj=(w)=>{let m=typeof w==="string"?w.trim():"";if(D0(!1),!m||m===X0){requestAnimationFrame(()=>U_.current?.focus());return}j0?.(m)},uj=async(w)=>{let m=typeof w==="string"?w.trim():"";if(D0(!1),!m||typeof a0!=="function"){requestAnimationFrame(()=>U_.current?.focus());return}try{await a0(m)}catch(r){console.warn("Failed to restore session:",r),requestAnimationFrame(()=>U_.current?.focus())}},d_=Z0(()=>{let w=[];for(let m of V4){let r=Boolean(m?.archived_at),N0=typeof m?.agent_name==="string"?m.agent_name.trim():"",R0=typeof m?.chat_jid==="string"?m.chat_jid.trim():"";if(!N0||!R0)continue;w.push({type:"session",key:`session:${R0}`,label:`@${N0} — ${R0}${m?.is_active?" active":""}${r?" archived":""}`,chat:m,disabled:r?!S$:!R$})}if(X$)w.push({type:"action",key:"action:new",label:"New branch",action:"new",disabled:!1});if(q4)w.push({type:"action",key:"action:new-root",label:"New root session…",action:"new-root",disabled:!1});if(C1?.chat_jid)w.push({type:"action",key:"action:rollup",label:"Merge current w/ parent",action:"rollup",disabled:!Q4});if(Z$)w.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:a4});if(Y$)w.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return w},[V4,S$,R$,X$,q4,C1,Q4,Z$,Y$,a4]),gj=async(w)=>{if(w?.preventDefault)w.preventDefault();if(w?.stopPropagation)w.stopPropagation();if(typeof z0!=="function"||C0||M$.current)return;M$.current=!0,D0(!1);try{await z0()}catch(m){console.warn("Failed to rename session:",m)}finally{M$.current=!1}requestAnimationFrame(()=>U_.current?.focus())},bj=async()=>{if(typeof h0!=="function")return;D0(!1);try{await h0()}catch(w){console.warn("Failed to create session:",w)}requestAnimationFrame(()=>U_.current?.focus())},vj=async()=>{if(typeof n0!=="function")return;D0(!1);let w=typeof window<"u"?window.prompt("New root session handle (for example: ops)"):"",m=String(w||"").trim();if(!m){requestAnimationFrame(()=>U_.current?.focus());return}try{await n0(m)}catch(r){console.warn("Failed to create root session:",r)}requestAnimationFrame(()=>U_.current?.focus())},mj=async()=>{let w=typeof C1?.chat_jid==="string"?C1.chat_jid.trim():"";if(!w||W0||V0)return;D0(!1),g_(null),C_(null),X_(!0);try{let m=await W1("default","/rollup",null,[],null,X0);E0?.(m),_?.(m);let r=m?.command;if(r?.status==="error"){let R0=r?.message||"Failed to merge current session with parent.";g_(R0),s?.(R0);return}let N0=typeof r?.rolled_up_to==="string"&&r.rolled_up_to.trim()?r.rolled_up_to.trim():w;j0?.(N0)}catch(m){let r=m?.message||"Failed to merge current session with parent.";g_(r),s?.(r),console.warn("Failed to merge session with parent:",m)}finally{X_(!1)}requestAnimationFrame(()=>U_.current?.focus())},cj=async()=>{if(typeof G_!=="function")return;D0(!1);try{await G_(X0)}catch(w){console.warn("Failed to delete session:",w)}requestAnimationFrame(()=>U_.current?.focus())},u$=(w)=>{if(j)l0(w);else Q_(w),U0(w),r_(w);requestAnimationFrame(()=>x0())},RB=(w)=>{let m=j?t0:r0,r=m&&!m.endsWith(`
`)?`
`:"",N0=`${m}${r}${w}`.trimStart();u$(N0)},s8=P(()=>{requestAnimationFrame(()=>{let w=U_.current;if(!w)return;try{w.focus({preventScroll:!0})}catch{w.focus()}})},[]),c1=P(()=>{k_({kind:"idle",title:"",detail:""})},[]),a8=P((w=H1.current,m=_1.current)=>{if(j)return;u$(OL(y1.current,w,m))},[j]),l1=P(()=>{y$.current=!0;let w=c_.current;if(!w){c1();return}try{w.stop()}catch{c_.current=null,c1()}},[c1]),t8=P(()=>{if(g_(null),C_(null),c_.current){l1();return}if(!M_?.showButton)return;if(M_.mode==="fallback"){s8(),k_({kind:"guidance",title:M_.title||"Use keyboard dictation",detail:M_.detail||"Use your keyboard dictation mic for voice input here."});return}if(!M_?.canStart||!M_?.recognitionCtor){k_({kind:"error",title:M_?.title||"Voice input unavailable",detail:M_?.detail||"This browser does not expose native speech recognition in this context."});return}try{let w=new M_.recognitionCtor;if(c_.current=w,y1.current=String(r0||""),H1.current="",_1.current="",k$.current="",y$.current=!1,w.lang=typeof navigator<"u"&&navigator.language?navigator.language:"en-US",w.interimResults=!0,w.continuous=!1,"maxAlternatives"in w)w.maxAlternatives=1;w.onstart=()=>{k_({kind:"listening",title:"Listening…",detail:"Speak now. Tap the mic again to stop."})},w.onresult=(m)=>{let{finalText:r,interimText:N0}=JL(m?.results,m?.resultIndex||0);if(r)H1.current=`${H1.current} ${r}`.trim();_1.current=N0,a8(),k_({kind:"listening",title:"Listening…",detail:N0?`Heard: ${N0}`:"Speak now. Tap the mic again to stop."})},w.onerror=(m)=>{let r=String(m?.error||"").trim();if(k$.current=r,c_.current=null,_1.current="",r==="aborted"){c1();return}k_({kind:"error",title:"Voice input failed",detail:T9(r,M_)})},w.onend=()=>{let m=k$.current,r=y$.current,N0=Boolean(H1.current.trim()||_1.current.trim());if(c_.current=null,y$.current=!1,k$.current="",_1.current.trim())H1.current=`${H1.current} ${_1.current}`.trim(),_1.current="";if(N0)a8(H1.current,"");if(m&&m!=="aborted")return;if(!N0&&!r){k_({kind:"error",title:"No speech detected",detail:T9("no-speech",M_)});return}c1()},k_({kind:"requesting_permission",title:"Starting voice input…",detail:"Allow microphone access if the browser asks."}),s8(),w.start()}catch(w){c_.current=null,k_({kind:"error",title:"Voice input failed",detail:w?.message||"Could not start native browser speech recognition."})}},[a8,c1,r0,s8,M_,l1]),SB=(w)=>{let m=w?.command?.model_label;if(m)return m;let r=w?.command?.message;if(typeof r==="string"){let N0=r.match(/•\s+([^\n]+?)\s+\(current\)/);if(N0?.[1])return N0[1].trim()}return null},lj=async(w)=>{if(j||M0)return;g_(null),C_(null),b0(!0);try{let m=await W1("default",w,null,[],null,X0),r=SB(m);return y0({model:r??H??null,thinking_level:m?.command?.thinking_level,thinking_level_label:m?.command?.thinking_level_label,supports_thinking:m?.command?.supports_thinking}),await M9(w4,X0,y0),C_(kL(w,m)),_?.(m),!0}catch(m){return console.error("Failed to switch model:",m),alert("Failed to switch model: "+m.message),!1}finally{b0(!1)}},uB=(w)=>{if(w.pointerType==="mouse")return;let m=U_.current?.value??(j?t0:r0);if(!yL(w,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)}))return;w.preventDefault(),_$.current=!0,w_.current=!0,t8()},e8=(w)=>{if(!_$.current)return;if(w?.preventDefault?.(),_$.current=!1,c_.current)l1()},gB=(w)=>{if(w_.current){w_.current=!1,w.preventDefault();return}t8()},bB=async()=>{await lj("/cycle-model")},_3=async(w)=>{let m=typeof w==="string"?w:typeof w?.label==="string"?w.label:"";if(!m||M0)return;let r=ML(w,x);if(r.blocked){g_(null),C_(r.note);return}if(await lj(`/model ${m}`))g0(!1)},vB=(w)=>{if(!w||w.disabled)return;if(w.type==="session"){let m=w.chat;if(m?.archived_at)uj(m.chat_jid);else Sj(m.chat_jid);return}if(w.type==="action"){if(w.action==="new"){bj();return}if(w.action==="new-root"){vj();return}if(w.action==="rollup"){mj();return}if(w.action==="rename"){gj();return}if(w.action==="delete")cj()}},mB=(w)=>{w.preventDefault(),w.stopPropagation(),t_.current={value:"",updatedAt:0},D0(!1),g0((m)=>!m)},cB=async()=>{if(j)return;A?.(),await t4("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},lB=(w)=>{if(w==="queue"||w==="steer"||w==="auto")return w;return V0?"queue":void 0},t4=async(w,m,r={})=>{let N0=typeof w==="string"?w:r0;if(/^\/settings\s*$/i.test(N0.trim())){Q_(""),requestAnimationFrame(()=>x0()),o1();return}if(/^\/help\s*$/i.test(N0.trim())){Q_(""),requestAnimationFrame(()=>x0()),o1({section:"keyboard"});return}let{includeMedia:R0=!0,includeFileRefs:N_=!0,includeFolderRefs:i_=!0,includeMessageRefs:l_=!0,clearAfterSubmit:P1=!0,recordHistory:M1=!0}=r||{},hj=typeof w==="string"?w:w&&typeof w?.target?.value==="string"?w.target.value:r0,pj=typeof hj==="string"?hj:"";if(!pj.trim()&&(R0?T0.length===0:!0)&&(N_?V.length===0:!0)&&(i_?q.length===0:!0)&&(l_?U.length===0:!0))return;if(c_.current)l1();c1(),e(!1),E_([]),L0(!1),d([]),D0(!1),g_(null),C_(null);let c5=R0?[...T0]:[],l5=N_?[...V]:[],h5=i_?[...q]:[],p5=l_?[...U]:[],N4=pj.trim();if(M1&&N4){let B4=T$.current,Q1=h4(B4.filter((j3)=>j3!==N4));if(Q1.push(N4),Q1.length>200)Q1.splice(0,Q1.length-200);T$.current=Q1,w$(Q1),b1.current=-1,v1.current=""}let GF=()=>{if(R0)i0([...c5]);if(N_)Y0?.(l5);if(i_)Q0?.(h5);if(l_)J0?.(p5);Q_(N4),requestAnimationFrame(()=>x0())};if(P1)Q_(""),i0([]),Q?.(),N?.(),D?.();(async()=>{try{let B4=await $0?.({content:N4,submitMode:m,fileRefs:l5,folderRefs:h5,messageRefs:p5,mediaFiles:c5});if(B4){_?.(B4);return}let Q1=[];for(let V$ of c5){let r5=await z7(V$);Q1.push(r5.id)}let j3=l5.length?`Files:
${l5.map((V$)=>`- ${V$}`).join(`
`)}`:"",ZF=h5.length?`Folders:
${h5.map((V$)=>`- ${V$}`).join(`
`)}`:"",XF=p5.length?`Referenced messages:
${p5.map((V$)=>`- message:${V$}`).join(`
`)}`:"",YF=Q1.length?`Attachments:
${Q1.map((V$,r5)=>{let KF=c5[r5]?.name||`attachment-${r5+1}`;return`- attachment:${V$} (${KF})`}).join(`
`)}`:"",LF=[N4,j3,ZF,XF,YF].filter(Boolean).join(`

`),g$=await W1("default",LF,null,Q1,lB(m),X0);if(E0?.(g$),g$?.command)y0({model:g$.command.model_label??H??null,thinking_level:g$.command.thinking_level,thinking_level_label:g$.command.thinking_level_label,supports_thinking:g$.command.supports_thinking}),await M9(w4,X0,y0);C_(kL(N4,g$)),_?.(g$)}catch(B4){if(P1)GF();let Q1=B4?.message||"Failed to send message.";g_(Q1),s?.(Q1),console.error("Failed to post:",B4)}})()},hB=(w)=>{h?.(w)},pB=P((w)=>{RW({queuedItem:w,onRemoveQueuedFollowup:n,setSubmitError:g_,setSubmitNotice:C_,setMediaFiles:i0,onSetFileRefs:Y0,onSetFolderRefs:Q0,onSetMessageRefs:J0,setContent:Q_,textareaRef:U_,resizeTextarea:x0})},[n,Y0,Q0,J0,x0]),h6=P((w)=>{if(j||!P0&&!I0||w?.isComposing)return!1;let m=()=>{w.preventDefault?.(),w.stopPropagation?.()},r=()=>{t_.current={value:"",updatedAt:0}};if(w.key==="Escape"){if(m(),r(),P0)g0(!1);if(I0)D0(!1);return!0}if(P0){if(w.key==="ArrowDown"){if(m(),r(),f0.length>0)F_((N0)=>(N0+1)%f0.length);return!0}if(w.key==="ArrowUp"){if(m(),r(),f0.length>0)F_((N0)=>(N0-1+f0.length)%f0.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&f0.length>0)return m(),r(),_3(f0[Math.max(0,Math.min(__,f0.length-1))]),!0;if(A5(w)&&f0.length>0){m();let N0=D9(t_.current,w.key);t_.current=N0;let R0=z9(f0,N0.value,__,(N_)=>yW(N_));if(R0>=0)F_(R0);return!0}}if(I0){if(w.key==="ArrowDown"){if(m(),r(),d_.length>0)W_((N0)=>(N0+1)%d_.length);return!0}if(w.key==="ArrowUp"){if(m(),r(),d_.length>0)W_((N0)=>(N0-1+d_.length)%d_.length);return!0}if((w.key==="Enter"||w.key==="Tab")&&d_.length>0)return m(),r(),vB(d_[Math.max(0,Math.min(v0,d_.length-1))]),!0;if(A5(w)&&d_.length>0){m();let N0=D9(t_.current,w.key);t_.current=N0;let R0=z9(d_,N0.value,v0,(N_)=>N_.label);if(R0>=0)W_(R0);return!0}}return!1},[j,P0,I0,f0,__,d_,v0,_3]),rB=(w)=>{if(w.isComposing)return;if(j&&w.key==="Escape"){w.preventDefault(),l0(""),L?.();return}if(h6(w))return;let m=U_.current?.value??(j?t0:r0);if(yL(w,m,{searchMode:j,speechButtonVisible:I1,speechButtonActive:x$,canStartSpeech:Boolean(M_?.canStart&&M_?.recognitionCtor)})){w.preventDefault(),_$.current=!0,t8();return}if(EL(w,m,{searchMode:j,showSessionSwitcherButton:L$})){w.preventDefault(),K$();return}if(G0&&k0.length>0){let r=U_.current?.value??(j?t0:r0);if(!String(r||"").match(/^@([a-zA-Z0-9_-]*)$/))L0(!1),d([]);else{if(w.key==="ArrowDown"){w.preventDefault(),a((N0)=>(N0+1)%k0.length);return}if(w.key==="ArrowUp"){w.preventDefault(),a((N0)=>(N0-1+k0.length)%k0.length);return}if(w.key==="Tab"||w.key==="Enter"){w.preventDefault(),$1(k0[o]);return}if(w.key==="Escape"){w.preventDefault(),L0(!1),d([]);return}}}if(u_&&H_.length>0){let r=U_.current?.value??(j?t0:r0);if(!String(r||"").startsWith("/"))e(!1),E_([]);else{if(w.key==="ArrowDown"){w.preventDefault(),I_((N0)=>(N0+1)%H_.length);return}if(w.key==="ArrowUp"){w.preventDefault(),I_((N0)=>(N0-1+H_.length)%H_.length);return}if(w.key==="Tab"){w.preventDefault(),s0(H_[y_]);return}if(w.key==="Enter"&&!w.shiftKey){if(!m.includes(" ")){w.preventDefault();let R0=H_[y_];e(!1),E_([]),t4(R0.name);return}}if(w.key==="Escape"){w.preventDefault(),e(!1),E_([]);return}}}if(!j&&(w.key==="ArrowUp"||w.key==="ArrowDown")&&!w.metaKey&&!w.ctrlKey&&!w.altKey&&!w.shiftKey){let r=U_.current;if(!r)return;let N0=r.value||"",R0=r.selectionStart===0&&r.selectionEnd===0,N_=r.selectionStart===N0.length&&r.selectionEnd===N0.length;if(w.key==="ArrowUp"&&R0||w.key==="ArrowDown"&&N_){let i_=T$.current;if(!i_.length)return;w.preventDefault();let l_=b1.current;if(w.key==="ArrowUp"){if(l_===-1)v1.current=N0,l_=i_.length-1;else if(l_>0)l_-=1;b1.current=l_,u$(i_[l_]||"")}else{if(l_===-1)return;if(l_<i_.length-1)l_+=1,b1.current=l_,u$(i_[l_]||"");else b1.current=-1,u$(v1.current||""),v1.current=""}requestAnimationFrame(()=>{let P1=U_.current;if(!P1)return;let M1=P1.value.length;P1.selectionStart=M1,P1.selectionEnd=M1});return}}if(w.key==="Enter"&&!w.shiftKey&&(w.ctrlKey||w.metaKey)){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:O0,attachments:e0})}else t4(m,"steer");return}if(w.key==="Enter"&&!w.shiftKey){if(w.preventDefault(),j){if(m.trim())Z?.(m.trim(),G,{images:O0,attachments:e0})}else t4(m);return}if(w.key==="Escape"){if(P0||I0||u_||G0)return;w.preventDefault(),U_.current?.blur()}},nB=(w)=>{if(EW(w,_$.current)){if(w.preventDefault(),_$.current=!1,c_.current)l1()}},$3=(w)=>{let m=Array.from(w||[]).filter((r)=>r instanceof File&&!String(r.name||"").startsWith(".DS_Store"));if(!m.length)return;i0((r)=>[...r,...m]),g_(null)},dB=(w)=>{$3(w.target.files),w.target.value=""},iB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),K1.current+=1,K_(!0)},oB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),K1.current=Math.max(0,K1.current-1),K1.current===0)K_(!1)},sB=(w)=>{if(j)return;if(w.preventDefault(),w.stopPropagation(),w.dataTransfer)w.dataTransfer.dropEffect="copy";K_(!0)},aB=(w)=>{if(j)return;w.preventDefault(),w.stopPropagation(),K1.current=0,K_(!1),$3(w.dataTransfer?.files||[])},tB=(w)=>{if(j)return;let m=w.clipboardData?.items;if(!m||!m.length)return;let r=[];for(let N0 of m){if(N0.kind!=="file")continue;let R0=N0.getAsFile?.();if(R0)r.push(R0)}if(r.length>0)w.preventDefault(),$3(r)},eB=(w)=>{i0((m)=>m.filter((r,N0)=>N0!==w))},_F=()=>{g_(null),i0([]),Q?.(),N?.(),D?.()},$F=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((w)=>{let{latitude:m,longitude:r,accuracy:N0}=w.coords,R0=`${m.toFixed(5)}, ${r.toFixed(5)}`,N_=Number.isFinite(N0)?` ±${Math.round(N0)}m`:"",i_=`https://maps.google.com/?q=${m},${r}`,l_=`Location: ${R0}${N_} ${i_}`;RB(l_)},(w)=>{let m=w?.message||"Unable to retrieve location.";alert(`Location error: ${m}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};u(()=>{if(!P0)return;t_.current={value:"",updatedAt:0},i(!0),w4(X0).then((w)=>{Z_(xL(w)),y0(w)}).catch((w)=>{console.warn("Failed to load model list:",w),Z_([])}).finally(()=>{i(!1)})},[P0,H]),u(()=>{if(j)g0(!1),D0(!1),e(!1),E_([]),L0(!1),d([])},[j]),u(()=>{if(I0&&!L$)D0(!1)},[I0,L$]),u(()=>{if(!P0)return;let w=f0.findIndex((m)=>m?.label===H);F_(w>=0?w:0)},[P0,f0,H]),u(()=>{if(!I0)return;W_(UW(d_,X0)),t_.current={value:"",updatedAt:0}},[I0,X0,d_]),u(()=>{if(!P0)return;let w=(m)=>{let r=g1.current,N0=k1.current,R0=m.target;if(r&&r.contains(R0))return;if(N0&&N0.contains(R0))return;g0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[P0]),u(()=>{if(!I0)return;let w=(m)=>{let r=e1.current,N0=c4.current,R0=m.target;if(r&&r.contains(R0))return;if(N0&&N0.contains(R0))return;D0(!1)};return document.addEventListener("pointerdown",w),()=>document.removeEventListener("pointerdown",w)},[I0]),u(()=>{if(j||!P0&&!I0)return;let w=(m)=>{h6(m)};return document.addEventListener("keydown",w,!0),()=>document.removeEventListener("keydown",w,!0)},[j,P0,I0,h6]),u(()=>{if(!P0)return;let w=g1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[P0,__,f0]),u(()=>{if(!I0)return;let w=e1.current;w?.focus?.(),w?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[I0,v0,d_.length]),u(()=>{if(!G0||!U1.current)return;U1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[G0,o,k0.length]),u(()=>{if(!u_||!x1.current)return;x1.current.querySelector?.(".slash-item.active")?.scrollIntoView?.({block:"nearest"})},[u_,y_,H_.length]),u(()=>{let w=(r)=>{if(!r||typeof r!=="object")return!1;if(r.isContentEditable)return!0;if(typeof r.closest!=="function")return!1;return Boolean(r.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup, .settings-dialog, .workspace-sidebar, .editor-pane-container, .dock-panel, .timeline-menu-dropdown, .rename-branch-overlay, .agent-request-modal, .attachment-preview-modal, .vnc-pane-shell, .kanban-plugin, .mindmap-editor, .timeline-quick-actions'))},m=(r)=>{if(r.ctrlKey||r.metaKey||r.altKey)return;let N0=U_.current;if(!N0)return;let R0=document.activeElement===N0;if(r.key==="Escape"&&!R0&&!w(r.target)){r.preventDefault(),N0.focus();return}if(r.key==="/"&&!R0&&!w(r.target))r.preventDefault(),u$("/"),requestAnimationFrame(()=>{N0.focus(),N0.selectionStart=1,N0.selectionEnd=1,U0("/")})};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[]),u(()=>{let w=()=>{let N_=A$.current?.clientWidth||0;p_((i_)=>i_===N_?i_:N_)};w();let m=A$.current,r=0,N0=()=>{if(r)cancelAnimationFrame(r);r=requestAnimationFrame(()=>{r=0,w()})},R0=null;if(m&&typeof ResizeObserver<"u")R0=new ResizeObserver(()=>N0()),R0.observe(m);if(typeof window<"u")window.addEventListener("resize",N0);return()=>{if(r)cancelAnimationFrame(r);if(R0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",N0)}},[j,H,b_?.agent_name,L$,x?.percent]);let jF=(w)=>{let m=w.target.value;if(c_.current&&w?.isTrusted)l1();if(g_(null),C_(null),O_.kind==="guidance"||O_.kind==="error")c1();if(I0)D0(!1);if(x0(w.target),J9(m,{searchMode:j,showSessionSwitcherButton:L$})){u$(""),requestAnimationFrame(()=>{let r=U_.current;if(!r)return;r.value="",r.selectionStart=0,r.selectionEnd=0,r.focus()}),K$();return}u$(m)};return u(()=>{requestAnimationFrame(()=>x0())},[r0,t0,j]),u(()=>{if(!j)return;if(c_.current)l1();return},[j,l1]),u(()=>{if(c_.current)l1();c1()},[X0,c1,l1]),u(()=>{return()=>{if(!c_.current)return;try{c_.current.stop()}catch(w){console.debug("[compose] failed to stop speech recognition during cleanup",w)}c_.current=null}},[]),u(()=>{if(!q1)return;m_(Date.now());let w=setInterval(()=>m_(Date.now()),1000);return()=>clearInterval(w)},[q1,o0?.started_at,o0?.startedAt]),u(()=>{if(s_(0),E1?.mode!=="custom"||!Array.isArray(E1.frames)||E1.frames.length<=1)return;let w=typeof E1.intervalMs==="number"&&Number.isFinite(E1.intervalMs)&&E1.intervalMs>0?E1.intervalMs:120,m=setInterval(()=>{s_((r)=>(r+1)%E1.frames.length)},w);return()=>clearInterval(m)},[E1]),u(()=>{if(j)return;r_(r0)},[b5,X0,r0,j]),F`
        <div class="compose-box" data-testid="compose-box">
            ${R_&&F`
                <div class=${`compose-inline-status compose-speech-status compose-speech-status-${O_.kind}`} role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:n4})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${O_.title}</span>
                    </div>
                    ${O_.detail&&F`<div class="compose-inline-status-detail">${O_.detail}</div>`}
                </div>
            `}
            ${S0&&!j&&F`
                <${I9}
                    items=${l}
                    onInjectQueuedFollowup=${hB}
                    onRemoveQueuedFollowup=${n}
                    onMoveQueuedFollowup=${b}
                    onReturnQueuedFollowup=${pB}
                    onOpenFilePill=${v}
                />
            `}
            ${m1.visible&&F`
                <div class="compose-inline-status extension-working" role="status" aria-live="polite">
                    <div class="compose-inline-status-row">
                        ${m1.indicatorText?F`<span class="compose-inline-status-glyph" aria-hidden="true">${m1.indicatorText}</span>`:m1.animateDot?F`<span class=${_8({pulsing:!0})} aria-hidden="true"></span>`:null}
                        <span class="compose-inline-status-title">${m1.title}</span>
                    </div>
                </div>
            `}
            ${o0&&!q1&&F`
                <div
                    class="compose-inline-status"
                    role="status"
                    aria-live="polite"
                    title=${Y4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class=${_8({pulsing:!1})} aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${C$}</span>
                        ${L4&&F`<span class="compose-inline-status-elapsed">${L4}</span>`}
                    </div>
                    ${Y4&&F`<div class="compose-inline-status-detail">${Y4}</div>`}
                </div>
            `}
            ${J1&&F`
                <div class="compose-inline-status compose-command-notice" role="status" aria-live="polite">
                    <div class="compose-inline-status-detail compose-command-notice-text" dangerouslySetInnerHTML=${{__html:Z1(J1)}}></div>
                </div>
            `}
            <div
                class=${`compose-input-wrapper${A_?" drag-active":""}`}
                onDragEnter=${iB}
                onDragOver=${sB}
                onDragLeave=${oB}
                onDrop=${aB}
            >
                ${L$&&F`
                    <div
                        ref=${c4}
                        class="compose-session-trigger-group compose-session-trigger-top"
                    >
                        <button
                            type="button"
                            class=${`compose-session-trigger compose-session-trigger-pill${I0?" active":""}`}
                            data-testid="session-switcher"
                            onClick=${Rj}
                            title=${b_?.chat_jid||X0}
                            aria-label=${b_?.agent_name?`Manage sessions for @${b_.agent_name}`:"Manage Sessions/Agents"}
                            aria-expanded=${I0?"true":"false"}
                        >
                            <span class="compose-current-agent-label active">${b_?.agent_name?`@${b_.agent_name}`:"Sessions"}</span>
                        </button>
                    </div>
                `}
                <div class="compose-input-main">
                    ${K4&&F`
                        <div class="compose-file-refs">
                            ${U.map((w)=>{return F`
                                    <${L1}
                                        key=${"msg-"+w}
                                        prefix="compose"
                                        label=${"msg:"+w}
                                        title=${"Message reference: "+w}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>E?.(w)}
                                    />
                                `})}
                            ${V.map((w)=>{let m=w.split("/").pop()||w;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        onClick=${()=>v?.(w)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>K?.(w)}
                                    />
                                `})}
                            ${q.map((w)=>{let m=w.split("/").pop()||w;return F`
                                    <${L1}
                                        prefix="compose"
                                        label=${m}
                                        title=${w}
                                        icon="folder"
                                        onClick=${()=>v?.(w)}
                                        removeTitle="Remove folder hint"
                                        onRemove=${()=>B?.(w)}
                                    />
                                `})}
                            ${T0.map((w,m)=>{let r=w?.name||`attachment-${m+1}`;return F`
                                    <${L1}
                                        key=${r+m}
                                        prefix="compose"
                                        label=${r}
                                        title=${r}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>eB(m)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${_F}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    <textarea
                        ref=${U_}
                        data-testid="compose-input"
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?t0:r0}
                        onInput=${jF}
                        onKeyDown=${rB}
                        onKeyUp=${nB}
                        onPaste=${tB}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${G0&&k0.length>0&&F`
                        <div class="slash-autocomplete" ref=${U1}>
                            ${k0.map((w,m)=>F`
                                <div
                                    key=${w.chat_jid||w.agent_name}
                                    class=${`slash-item${m===o?" active":""}`}
                                    onMouseDown=${(r)=>{r.preventDefault(),$1(w)}}
                                    onMouseEnter=${()=>a(m)}
                                >
                                    <span class="slash-name">@${w.agent_name}</span>
                                    <span class="slash-desc">${w.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${u_&&H_.length>0&&F`
                        <div class="slash-autocomplete" ref=${x1}>
                            ${H_.map((w,m)=>F`
                                <div
                                    key=${w.name}
                                    class=${`slash-item${m===y_?" active":""}`}
                                    onMouseDown=${(r)=>{r.preventDefault(),s0(w)}}
                                    onMouseEnter=${()=>I_(m)}
                                >
                                    <span class="slash-name">${w.name}</span>
                                    <span class="slash-desc">${w.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${P0&&!j&&F`
                        <div class="compose-model-popup" ref=${g1} tabIndex="-1" onKeyDown=${h6}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${z_&&F`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!z_&&f0.length===0&&F`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!z_&&f0.map((w,m)=>{let r=typeof w?.label==="string"?w.label:"",N0=x9(w?.contextWindow),R0=w?.name||null,N_=ML(w,x);return F`
                                        <button
                                            key=${r}
                                            type="button"
                                            role="menuitem"
                                            class=${`compose-model-popup-item compose-model-popup-model-item${__===m?" active":""}${H===r?" current-model":""}${N_.blocked?" context-blocked":""}`}
                                            onClick=${()=>{_3(w)}}
                                            disabled=${M0||N_.blocked}
                                            title=${[r,R0,N0,N_.title].filter(Boolean).join(" • ")}
                                        >
                                            <span class="compose-model-popup-model-stack">
                                                <span class="compose-model-popup-model-label">${AW(r,w?.contextWindow)}${R0?F` <span class="compose-model-popup-model-subtitle">${R0}</span>`:""}</span>
                                                ${N_.blocked&&F`<span class="compose-model-popup-model-note">${N_.note}</span>`}
                                            </span>
                                        </button>
                                    `})}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{bB()}}
                                    disabled=${M0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${I0&&!j&&F`
                        <div class="compose-model-popup" data-testid="session-popup" ref=${e1} tabIndex="-1" onKeyDown=${h6}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${!f$&&F`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${f$&&V4.map((w,m)=>{let r=Boolean(w.archived_at),N0=w.chat_jid===(w.root_chat_jid||w.chat_jid),R0=!N0&&!w.is_active&&!r&&typeof G_==="function",N_=r&&v5,i_=t2(w,{currentChatJid:X0});return F`
                                        <div key=${w.chat_jid} class=${`compose-model-popup-item-row${r?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item session-item${r?" archived":""}${v0===m?" active":""}`}
                                                data-testid="session-item"
                                                onClick=${()=>{if(r){uj(w.chat_jid);return}Sj(w.chat_jid)}}
                                                disabled=${r?!S$:!R$}
                                                title=${r?`Restore archived ${`@${w.agent_name}`}`:`Switch to ${`@${w.agent_name}`}`}
                                            >
                                                <span style=${FW(w)?"font-weight:700":""}>${i_}</span>
                                            </button>
                                            <button
                                                type="button"
                                                class="compose-model-popup-item-popout"
                                                title=${`Open @${w.agent_name} in new window`}
                                                aria-label=${`Open @${w.agent_name} in new window`}
                                                onClick=${(l_)=>{l_.stopPropagation(),D0(!1);let P1=new URL(window.location.href);P1.searchParams.set("chat_jid",w.chat_jid),P1.searchParams.set("chat_only","1");let M1=document.createElement("a");M1.href=P1.toString(),M1.target="_blank",M1.rel="noopener",M1.style.display="none",document.body.appendChild(M1),M1.click(),M1.remove()}}
                                            >
                                                <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M6 2h8v8"/>
                                                    <path d="M14 2 7 9"/>
                                                    <path d="M12 9v5H2V4h5"/>
                                                </svg>
                                            </button>
                                            ${(R0||N_)&&F`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title=${N_?N0?"Permanently delete this archived session":"Permanently delete this archived branch":"Delete this branch"}
                                                    aria-label=${N_?N0?`Permanently delete archived session @${w.agent_name}`:`Permanently delete archived branch @${w.agent_name}`:`Delete @${w.agent_name}`}
                                                    onClick=${(l_)=>{if(l_.stopPropagation(),D0(!1),N_){m0?.(w.chat_jid);return}G_(w.chat_jid)}}
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
                            ${(X$||q4||Z$||Y$)&&F`
                                <div class="compose-model-popup-actions">
                                    ${X$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${d_.findIndex((w)=>w.key==="action:new")===v0?" active":""}`}
                                            onClick=${()=>{bj()}}
                                            title="Create a new branch from this chat"
                                        >
                                            New branch
                                        </button>
                                    `}
                                    ${q4&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:new-root")===v0?" active":""}`}
                                            onClick=${()=>{vj()}}
                                            title="Create a clean root session such as web:ops"
                                        >
                                            New root…
                                        </button>
                                    `}
                                    ${C1?.chat_jid&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rollup")===v0?" active":""}`}
                                            onClick=${()=>{mj()}}
                                            title=${Q4?`Merge this branch into ${C1.agent_name?`@${C1.agent_name}`:C1.chat_jid}`:"This branch cannot be merged while active or while it has children"}
                                            disabled=${!Q4}
                                        >
                                            Merge current w/ parent
                                        </button>
                                    `}
                                    ${Z$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${d_.findIndex((w)=>w.key==="action:rename")===v0?" active":""}`}
                                            onClick=${(w)=>{gj(w)}}
                                            title="Rename the current session"
                                            disabled=${a4}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${Y$&&F`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${d_.findIndex((w)=>w.key==="action:delete")===v0?" active":""}`}
                                            onClick=${()=>{cj()}}
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
                            ${e_}
                        </span>
                    `}
                    ${q0&&F`
                    <div class="compose-meta-row">
                        ${m6&&F`
                            <div class="compose-model-meta">
                                <button
                                    ref=${k1}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${B0}
                                    aria-label="Open model picker"
                                    onClick=${mB}
                                    disabled=${M0}
                                >
                                    ${M0?"Switching…":c6}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!M0&&p&&F`
                                        <span class="compose-model-usage-hint" title=${B0}>
                                            ${p}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&x&&x.percent!=null&&F`
                            <${OW}
                                usage=${x}
                                onCompact=${cB}
                                compactionLabel=${q1?L4||"0:00":""}
                                compactionTitle=${q1?C$||"Smart compaction":""}
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
                                onChange=${(w)=>X?.(w.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with images">
                            <input type="checkbox" checked=${O0} onChange=${()=>B_((w)=>!w)} />
                            <span class="compose-search-filter-label">Images</span>
                        </label>
                        <label class="compose-search-filter-wrap" title="Only show messages with attachments">
                            <input type="checkbox" checked=${e0} onChange=${()=>D_((w)=>!w)} />
                            <span class="compose-search-filter-label">Attachments</span>
                        </label>
                        <button
                            class=${`compose-search-match-toggle ${H0==="and"?"active":""}`}
                            onClick=${()=>{let w=H0==="or"?"and":"or";u0(w),fetch("/agent/settings/general",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchMatchMode:w})}).catch((m)=>{})}}
                            title=${H0==="or"?"Any keyword (OR) — click for all keywords (AND)":"All keywords (AND) — click for any keyword (OR)"}
                            type="button"
                        >
                            ${H0==="or"?"OR":"AND"}
                        </button>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?L:Y}
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
                    ${g6&&!j&&F`
                        <button
                            class="icon-btn location-btn"
                            onClick=${$F}
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
                            class=${`icon-btn voice-input-btn${x$?" active":""}${M_.mode==="fallback"?" fallback":""}`}
                            onClick=${gB}
                            onPointerDown=${uB}
                            onPointerUp=${e8}
                            onPointerCancel=${e8}
                            onPointerLeave=${e8}
                            title=${d4}
                            aria-label=${d4}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M12 3a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V6a3 3 0 0 0-3-3z" />
                                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                                <path d="M12 19v3" />
                            </svg>
                        </button>
                    `}
                    ${i4&&!j&&F`
                        <button
                            class=${`icon-btn notification-btn${o4?" active":""}`}
                            onClick=${z}
                            title=${v6}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&F`
                        ${R&&f&&F`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${f}
                                title=${`Attach open file: ${R}`}
                                type="button"
                                disabled=${V.includes(R)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${dB} />
                        </label>
                    `}
                    ${!j&&F`
                        <div class="compose-send-stack">
                                <button 
                                    class=${s4.className}
                                    data-testid="send-button"
                                    type="button"
                                    onClick=${()=>{t4()}}
                                    disabled=${s4.disabled}
                                    title=${s4.title}
                                    aria-label=${s4.ariaLabel}
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                                ${G$&&F`
                                    <button 
                                        class=${G$.className}
                                        data-testid="stop-button"
                                        type="button"
                                        onClick=${()=>{if(zW(G$.mode))t4("/abort","steer",{clearAfterSubmit:!1,includeMedia:!1,includeFileRefs:!1,includeFolderRefs:!1,includeMessageRefs:!1,recordHistory:!1})}}
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
    `}w0();function fL({kind:_="hidden",onSetupProvider:$,onDismiss:j}){if(_==="hidden")return null;let G=_==="provider-missing",Z=G?"Instance needs setup":"Instance is configured",X=G?"This instance is not yet configured. Open Settings and set up AI providers/models to start sending requests.":"This instance looks configured. Review or update provider and model settings in Settings.";return F`
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
  `}w0();function RL(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function SL(_){return String(_||"").trim()||"web:default"}function uL(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function gL(_){if(!_)return!1;return _.status!=="running"}function bL(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function vL({session:_,onClose:$,onInject:j,onRetry:G}){let Z=g(null),X=g(null),Y=_?.thinking?j5(_.thinking):"",L=_?.answer?Z1(_.answer,null):"";if(u(()=>{if(Z.current&&Y)E$(Z.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW thinking content.",E)})},[Y]),u(()=>{if(X.current&&L)E$(X.current).catch((E)=>{console.debug("[btw-panel] Mermaid rendering failed for BTW answer content.",E)})},[L]),!_)return null;let V=_.status==="running",K=Boolean(String(_.answer||"").trim()),Q=Boolean(String(_.thinking||"").trim()),q=uL(_),B=gL(_),N=!V&&K,U=V?"Thinking…":_.status==="error"?"Error":"Done";return F`
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
                <details class="btw-block btw-thinking" open=${V?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:Y}}
                    ></div>
                </details>
            `}
            ${q&&F`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${X}
                        dangerouslySetInnerHTML=${{__html:L}}
                    ></div>
                </div>
            `}

            ${B&&F`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&F`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>G?.()}>
                                Retry
                            </button>
                        `}
                    </div>
                    <div class="btw-panel-footer-right">
                        <button class="btw-btn btw-btn-primary" onClick=${()=>j?.()} disabled=${!N}>
                            Inject into chat
                        </button>
                    </div>
                </div>
            `}
        </section>
    `}w0();function C9(_,$){try{if(_)_.name=$;return!0}catch(j){return!1}}function P9(_,$){try{return _?.contentWindow?.postMessage?.($,"*"),!0}catch(j){return!1}}function SW(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg"&&j!=="session_tree")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}if(j==="svg"){let Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Z?{kind:j,svg:Z}:null}let G=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null;return{kind:j,tree:G}}function uW(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Z=$.tree&&typeof $.tree==="object"?$.tree:_?.tree&&typeof _.tree==="object"?_.tree:null,X=$.kind||_?.kind||null,Y=X==="session_tree"?"session_tree":X==="svg"||j?"svg":"html";if(Y==="session_tree")return{kind:Y,tree:Z};if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return G?{kind:Y,html:G}:{kind:Y}}function t$(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function j_(_){return typeof _==="string"&&_.trim()?_.trim():null}function cL(_,$=!1){let G=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(G))}var lL="__PICLAW_WIDGET_HOST__:";function mL(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function f9(_,$){if(!_||_.type!=="generated_widget")return null;let j=SW(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:cL(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function hL(_){if(!_||typeof _!=="object")return null;let $=uW(_),j=j_(_?.widget_id)||j_(_?.widgetId)||j_(_?.tool_call_id)||j_(_?.toolCallId),G=j_(_?.tool_call_id)||j_(_?.toolCallId),Z=j_(_?.turn_id)||j_(_?.turnId),X=j_(_?.title)||j_(_?.name)||"Generated widget",Y=j_(_?.subtitle)||"",L=j_(_?.description)||Y,V=j_(_?.status),K=V==="loading"||V==="streaming"||V==="final"||V==="error"?V:"streaming";return{title:X,subtitle:Y,description:L,originPostId:t$(_?.origin_post_id)??t$(_?.originPostId),originChatJid:j_(_?.origin_chat_jid)||j_(_?.originChatJid)||j_(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:cL(_?.capabilities,!0),source:"live",status:K,turnId:Z,toolCallId:G,width:t$(_?.width),height:t$(_?.height),error:j_(_?.error)}}function pL(_){return f9(_,null)!==null}function O1(_){let $=j_(_?.toolCallId)||j_(_?.tool_call_id);if($)return $;let j=j_(_?.widgetId)||j_(_?.widget_id);if(j)return j;let G=t$(_?.originPostId)??t$(_?.origin_post_id);if(G!==null)return`post:${G}`;return null}function rL(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((X)=>typeof X==="string"&&X.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function nL(_){return rL(_)?"allow-downloads allow-scripts allow-same-origin allow-forms":"allow-downloads"}function G8(_){return{title:j_(_?.title)||"Generated widget",widgetId:j_(_?.widgetId)||j_(_?.widget_id),toolCallId:j_(_?.toolCallId)||j_(_?.tool_call_id),turnId:j_(_?.turnId)||j_(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:j_(_?.status)||"final"}}function Z8(_){return{...G8(_),subtitle:j_(_?.subtitle)||"",description:j_(_?.description)||"",error:j_(_?.error)||null,width:t$(_?.width),height:t$(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function X8(_){return`${lL}${JSON.stringify(Z8(_))}`}function dL(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=j_(_.text)||j_(_.content)||j_(_.message)||j_(_.prompt)||j_(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let G=j_(j.text)||j_(j.content)||j_(j.message)||j_(j.prompt)||j_(j.value);if(G)return G}return null}function iL(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function oL(_){let $=j_(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return j_(_?.error)||"Widget failed to load.";if((_?.artifact?.kind||_?.kind)==="session_tree")return"Session tree widget is unavailable.";return"Widget artifact is missing or unsupported."}function gW(_){let $=G8(_);return`<script>
(function () {
  const meta = ${mL($)};
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

  const windowNamePrefix = ${mL(lL)};
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
</script>`}function sL(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,G=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",X=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",Y=j==="svg"?Z:G;if(!Y)return"";let L=rL(_),V=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src 'self' data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",L?"script-src 'unsafe-inline' 'self'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),K=j==="svg"?`<div class="widget-svg-shell">${Y}</div>`:Y,Q=L?gW(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${V}" />
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
<body>${K}</body>
</html>`}w0();function bW(_){let $=new Map,j=[];for(let Y of _||[])$.set(Y.id,{...Y,children:[],depth:0});for(let Y of _||[]){let L=$.get(Y.id);if(!L)continue;let V=Y.parentId?$.get(Y.parentId):null;if(V)V.children.push(L);else j.push(L)}let G=new Set;for(let[,Y]of $){if(Y.role!=="assistant"||!Y.toolName)continue;if(Y.children.length!==1)continue;let L=Y.children[0];if(L.role!=="toolResult")continue;Y.resultDetail=L.detail||null,Y.resultLength=L.contentLength||0,Y.resultId=L.id,Y.merged=!0,Y.children=L.children;for(let V of Y.children)V.parentId=Y.id;G.add(L.id)}let Z=j.filter((Y)=>!G.has(Y.id)),X=[];for(let Y=Z.length-1;Y>=0;Y--)Z[Y].depth=0,X.push(Z[Y]);while(X.length>0){let Y=X.pop(),L=Y.children.length>1;for(let V=Y.children.length-1;V>=0;V--)Y.children[V].depth=L?Y.depth+1:Y.depth,X.push(Y.children[V])}return Z}function vW(_){let $=[],j=[];for(let G=_.length-1;G>=0;G--)j.push(_[G]);while(j.length>0){let G=j.pop();$.push(G);for(let Z=G.children.length-1;Z>=0;Z--)j.push(G.children[Z])}return $}function aL(_){if(!_||_<=0)return"";if(_<1000)return`${_}`;if(_<1e6)return`${(_/1000).toFixed(1)}k`;return`${(_/1e6).toFixed(1)}M`}function y6(_){if(!_||_<=0)return"";if(_<1000)return`${_} chars`;if(_<1e6)return`${(_/1000).toFixed(1)}k chars`;return`${(_/1e6).toFixed(1)}M chars`}function mW(_){let $=_.type;if($==="model_change")return{tag:"model",tagClass:"system",text:`${_.preview?.replace("[model ","").replace("]","")||""}`};if($==="thinking_level_change")return{tag:"thinking",tagClass:"system",text:_.preview?.replace("[thinking ","").replace("]","")||""};if($==="compaction")return{tag:"compaction",tagClass:"system",text:_.preview?.replace("[compaction: ","").replace("]","")||""};if($==="label")return{tag:"label",tagClass:"system",text:_.preview?.replace("[label ","").replace("]","")||""};if($==="session_info")return{tag:"session",tagClass:"system",text:_.preview?.replace("[session name ","").replace("]","")||""};if($==="branch_summary")return{tag:"summary",tagClass:"system",text:_.preview||""};if($!=="message")return{tag:$||"?",tagClass:"system",text:_.preview||""};let j=_.role||"message";if(_.merged&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||""}}if(j==="assistant"&&_.toolName){let Z=(_.toolInput||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:_.toolName,tagClass:"tool",text:X||"…"}}if(j==="toolResult"){let Z=(_.detail||"").split(`
`)[0],X=Z.length>120?Z.slice(0,119)+"…":Z;return{tag:`→ ${_.toolName||"result"}`,tagClass:"result",text:X}}if(j==="user"){let X=(_.previewText||_.detail||_.preview||"").replace(/^user:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"user",tagClass:"user",text:X.length>120?X.slice(0,119)+"…":X}}if(j==="assistant"){let X=(_.detail||_.preview||"").replace(/^assistant:\s*"?/,"").replace(/"?\s*$/,"").split(`
`)[0];return{tag:"assistant",tagClass:"assistant",text:X.length>120?X.slice(0,119)+"…":X}}return{tag:j,tagClass:"other",text:_.preview||""}}function cW(_,$=!1){let j=typeof _==="string"?_.trim():"";if(!j)return null;return{text:$?`/tree ${j} --summarize`:`/tree ${j}`,navigateTargetId:j,summarize:Boolean($)}}function tL(_){let $=typeof _==="string"?_.trim():"";if(!$.startsWith("/tree"))return null;let j=$.split(/\s+/).filter(Boolean);if(j[0]!=="/tree")return null;let G=null,Z=!1;for(let X=1;X<j.length;X++){let Y=j[X];if(Y==="--summarize"){Z=!0;continue}if(!G&&!Y.startsWith("--"))G=Y}return G?{targetId:G,summarize:Z}:null}function lW(_,$,j,G){let Z=Array.isArray(_)?_:[];if(Z.length===0)return null;let X=(L)=>typeof L==="string"&&Z.some((V)=>V?.id===L);if(X($))return $;if(X(j))return j;if(X(G))return G;let Y=Z.find((L)=>L?.active);if(Y?.id)return Y.id;return Z[0]?.id||null}function hW(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.preview==="string"?_.preview.trim():"",G=typeof _.error==="string"?_.error.trim():"",Z=tL(j),X=j||"tree command";if($==="submit_pending")return{tone:"pending",text:Z?`Sending ${X}`:"Sending tree command…",refreshDelays:[]};if($==="submit_sent")return{tone:"info",text:Z?`Running ${X}`:"Tree command sent.",refreshDelays:Z?[500,1500,3500,8000]:[]};if($==="submit_queued")return{tone:"info",text:Z?`Queued ${X}`:"Tree command queued.",refreshDelays:Z?[1200,3200,7000,12000]:[]};if($==="submit_failed")return{tone:"error",text:G?`Tree command failed: ${G}`:"Tree command failed.",refreshDelays:[]};if($==="refresh_building")return{tone:"pending",text:"Refreshing widget…",refreshDelays:[]};if($==="refresh_failed")return{tone:"error",text:G?`Refresh failed: ${G}`:"Refresh failed.",refreshDelays:[]};if($==="refresh_dashboard"||$==="refresh_ack")return{tone:"success",text:"Widget refreshed.",refreshDelays:[]};return null}function eL({widget:_,onWidgetEvent:$}){let j=_?.artifact?.tree&&typeof _.artifact.tree==="object"?_.artifact.tree:null,G=typeof _?.originChatJid==="string"&&_.originChatJid.trim()?_.originChatJid.trim():null,Z=_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null,X=Z?.lastHostUpdate&&typeof Z.lastHostUpdate==="object"?Z.lastHostUpdate:null,[Y,L]=C(()=>({loading:!j,error:null,data:j})),[V,K]=C(()=>j?.leafId||null),[Q,q]=C(""),B=g(null),N=g(null),U=g(j?.leafId||null),E=g(null),D=g(""),H=async()=>{L((k)=>({...k,loading:!0,error:null}));try{let k=G?`?chat_jid=${encodeURIComponent(G)}`:"",O=await fetch(`/agent/session-tree${k}`,{method:"GET",credentials:"same-origin",headers:{Accept:"application/json"}}),z=await O.json().catch(()=>({}));if(!O.ok)throw Error(z?.error||`HTTP ${O.status}`);L({loading:!1,error:null,data:z})}catch(k){L((O)=>({loading:!1,error:k?.message||"Failed to load tree.",data:O?.data||j||null}))}};E.current=H,u(()=>{H()},[G]);let M=Z0(()=>{let k=Y.data;if(!k||!Array.isArray(k.nodes)||k.nodes.length===0)return[];return vW(k.flat?bW(k.nodes):k.nodes)},[Y.data]);u(()=>{let k=lW(M,V,U.current,Y.data?.leafId||null);if(k!==V)K(k);if(U.current&&Y.data?.leafId===U.current)U.current=null},[M,V,Y.data?.leafId]);let J=Z0(()=>{let k=(Q||"").trim().toLowerCase();if(!k)return M;return M.filter((O)=>{return[O.preview,O.toolInput,O.toolInputFull,O.detail,O.toolName,O.role,O.id,O.resultDetail,O.type,O.label].some((y)=>typeof y==="string"&&y.toLowerCase().includes(k))})},[M,Q]),W=Z0(()=>J.find((k)=>k.id===V)||null,[J,V]),T=Z0(()=>hW(X),[X?.type,X?.preview,X?.error,X?.submittedAt]);u(()=>{if(N.current)N.current.scrollIntoView({block:"center",behavior:"auto"})},[V,Y.data?.leafId,J.length]),u(()=>{let k=tL(X?.preview);if(k?.targetId)U.current=k.targetId;let O=T?.refreshDelays||[];if(!O.length)return;let z=[G||"",X?.type||"",X?.submittedAt||"",X?.preview||""].join("|");if(D.current===z)return;D.current=z;let y=O.map((I)=>setTimeout(()=>E.current?.(),I));return()=>y.forEach((I)=>clearTimeout(I))},[G,X?.type,X?.submittedAt,X?.preview,T?.refreshDelays]);let x=(k=!1)=>{let O=W?.id,z=cW(O,k);if(!z)return;U.current=z.navigateTargetId,$?.({kind:"widget.submit",payload:z},_)},A=T?.tone||"info";return F`
        <div class="session-tree-widget">
            <div class="session-tree-toolbar">
                <div class="session-tree-toolbar-left">
                    <button class="session-tree-btn" type="button" onClick=${()=>H()} disabled=${Y.loading}>${Y.loading?"Loading…":"Refresh"}</button>
                    <input ref=${B}
                        class="st-search-input" type="text" placeholder="Filter\u2026"
                        value=${Q}
                        onInput=${(k)=>q(k.currentTarget.value)}
                        onKeyDown=${(k)=>{if(k.key==="Escape")q(""),k.currentTarget.blur()}}
                    />
                    ${Q&&F`<span class="session-tree-meta">${J.length} match${J.length!==1?"es":""}</span>`}
                    ${Y.error&&F`<span class="session-tree-error-inline">${Y.error}</span>`}
                </div>
                <div class="session-tree-toolbar-right">
                    ${T?.text&&F`<span class=${`session-tree-host-update ${A}`}>${T.text}</span>`}
                    ${Y.data?.capped&&F`<span class="session-tree-meta">Showing ${Y.data?.nodes?.length||0} of ${Y.data?.total||0}</span>`}
                    ${G&&F`<span class="session-tree-meta">${G}</span>`}
                </div>
            </div>

            <div class="session-tree-content">
                <div class="session-tree-list" role="tree" aria-label="Session tree">
                    ${Y.loading&&J.length===0&&!Q&&F`<div class="session-tree-empty">Loading session tree\u2026</div>`}
                    ${!Y.loading&&J.length===0&&!Q&&F`<div class="session-tree-empty">Session tree is empty.</div>`}
                    ${!Y.loading&&J.length===0&&Q&&F`<div class="session-tree-empty">No entries match \u201c${Q}\u201d</div>`}
                    ${J.map((k)=>{let O=V===k.id,z=`st-row${k.active?" active":""}${O?" selected":""}`,y=(k.children||[]).length>1,I=mW(k);return F`
                            <button key=${k.id} ref=${k.active||O?N:null}
                                class=${z} type="button" role="treeitem" aria-selected=${O}
                                onClick=${()=>K(k.id)}>
                                <span class="st-indent" style=${`width:${(k.depth||0)*16+6}px`}></span>
                                <span class=${`st-dot${k.active?" active":y?" branch":""}`}></span>
                                <span class=${`st-tag ${I.tagClass}`}>${I.tag}</span>
                                <span class="st-text">${I.text}</span>
                                ${k.merged&&k.resultLength>0&&F`<span class="st-size">${aL(k.resultLength)}</span>`}
                                ${!k.merged&&k.contentLength>3000&&F`<span class="st-size">${aL(k.contentLength)}</span>`}
                                ${k.hasThinking&&F`<span class="st-badge thinking">\u{1F4AD}</span>`}
                                ${k.label&&F`<span class="st-label">${k.label}</span>`}
                                ${k.active&&F`<span class="st-active">\u25C0</span>`}
                            </button>
                        `})}
                </div>

                <aside class="session-tree-sidebar">
                    ${W?F`
                        <div class="st-side-section">
                            <div class="st-side-label">Entry</div>
                            <div class="st-side-mono">${W.id}${W.resultId?` → ${W.resultId}`:""}</div>
                        </div>
                        <div class="st-side-section">
                            <div class="st-side-label">Type</div>
                            <div class="st-side-value">${W.role||W.type||"entry"}${W.toolName?` → ${W.toolName}`:""}${W.merged?" (merged)":""}</div>
                        </div>
                        ${W.toolInputFull&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.toolName==="bash"?"Command":"Input"}</div>
                                <pre class="st-side-code">${W.toolInputFull}</pre>
                            </div>
                        `}
                        ${W.resultDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Result${W.resultLength?` (${y6(W.resultLength)})`:""}</div>
                                <pre class="st-side-code">${W.resultDetail}</pre>
                            </div>
                        `}
                        ${W.detail&&!W.toolInput&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">${W.role==="toolResult"?"Output":"Content"}${W.contentLength?` (${y6(W.contentLength)})`:""}</div>
                                <pre class="st-side-code">${W.detail}</pre>
                            </div>
                        `}
                        ${W.rawDetail&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Raw prompt${W.rawContentLength?` (${y6(W.rawContentLength)})`:""}</div>
                                <pre class="st-side-code">${W.rawDetail}</pre>
                            </div>
                        `}
                        ${W.timestamp&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Time</div>
                                <div class="st-side-value">${new Date(W.timestamp).toLocaleString()}</div>
                            </div>
                        `}
                        ${(W.contentLength>0||W.hasThinking)&&F`
                            <div class="st-side-section">
                                <div class="st-side-label">Size</div>
                                <div class="st-side-badges">
                                    ${W.contentLength>0&&F`<span class="st-pill">${y6(W.contentLength)} content</span>`}
                                    ${W.hasThinking&&F`<span class="st-pill thinking">${y6(W.thinkingLength)} thinking</span>`}
                                    ${W.merged&&W.resultLength>0&&F`<span class="st-pill">${y6(W.resultLength)} result</span>`}
                                </div>
                            </div>
                        `}
                        <div class="st-side-actions">
                            <button class="session-tree-btn primary" type="button" onClick=${()=>x(!1)}>Navigate here</button>
                            <button class="session-tree-btn" type="button" onClick=${()=>x(!0)}>Navigate + summarize</button>
                        </div>
                    `:F`<div class="session-tree-empty side">Select an entry to inspect.</div>`}
                </aside>
            </div>
        </div>
    `}function _K({widget:_,onClose:$,onWidgetEvent:j}){let G=g(null),Z=g(!1),X=Z0(()=>sL(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(u(()=>{if(!_)return;let H=(M)=>{if(M.key==="Escape")$?.()};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[_,$]),u(()=>{Z.current=!1},[X]),u(()=>{if(!_)return;let H=G.current;if(!H)return;let M=(A)=>{let k=X8(_),O=A==="widget.init"?G8(_):Z8(_);C9(H,k),P9(H,{__piclawGeneratedWidgetHost:!0,type:A,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:O})},J=()=>{M("widget.init"),M("widget.update")},W=()=>{Z.current=!0,J()};H.addEventListener("load",W);let x=[0,40,120,300,800].map((A)=>setTimeout(J,A));return()=>{H.removeEventListener("load",W),x.forEach((A)=>clearTimeout(A))}},[X,_?.widgetId,_?.toolCallId,_?.turnId]),u(()=>{if(!_)return;let H=G.current;if(!H?.contentWindow)return;let M=X8(_),J=Z8(_);C9(H,M),P9(H,{__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:J});return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),u(()=>{if(!_)return;let H=(M)=>{let J=M?.data;if(!J||J.__piclawGeneratedWidget!==!0)return;let W=G.current,T=O1(_),x=O1({widgetId:J.widgetId,toolCallId:J.toolCallId});if(x&&T&&x!==T)return;if(!x&&W?.contentWindow&&M.source!==W.contentWindow)return;j?.(J,_)};return window.addEventListener("message",H),()=>window.removeEventListener("message",H)},[_,j]),!_)return null;let L=(_?.artifact||{}).kind||_?.kind||"html",V=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",K=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",Q=_?.source==="live"?"live":"timeline",q=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",B=Q==="live"?`Live widget • ${q.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",N=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",U=!X,E=oL(_),D=nL(_);return F`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${V}
                onClick=${(H)=>H.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${B} • ${L.toUpperCase()}</div>
                        <div class="floating-widget-title">${V}</div>
                        ${(K||N)&&F`
                            <div class="floating-widget-subtitle">${K||N}</div>
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
                    ${L==="session_tree"?F`<${eL} widget=${_} onWidgetEvent=${j} />`:U?F`<div class="floating-widget-empty">${E}</div>`:F`
                                <iframe
                                    ref=${G}
                                    class="floating-widget-frame"
                                    title=${V}
                                    name=${X8(_)}
                                    sandbox=${D}
                                    allow="microphone; clipboard-read; clipboard-write"
                                    referrerpolicy="no-referrer"
                                    srcdoc=${X}
                                ></iframe>
                            `}
                </div>
            </section>
        </div>
    `}w0();S2();P_();W6();var pW=new Set,$K=new Set,R9=new Set,f4=new Map,jK=!1,Y8=null;function rW(_=typeof window<"u"?window:null){let $=typeof _?.__piclawCurrentChatJid==="string"?_.__piclawCurrentChatJid.trim():"";if($)return $;try{let j=_?.location?.href||"http://localhost/",G=new URL(j).searchParams.get("chat_jid")?.trim()||"";if(G)return G}catch(j){}return"web:default"}function nW(_,$){let j=typeof _==="string"?_.trim():"";if(!j)return null;try{return new URL(j,$).href}catch{return null}}function GK(_){if(!_||typeof _.id!=="string"||!_.id.trim())return!1;return Y_.register(_),pW.add(_.id),!0}function dW(_){return GK(_)}function iW(_){if(!_||typeof _.id!=="string"||!_.id.trim())return()=>{};return d$(_),$K.add(_.id),d7(),()=>{oX(_.id),$K.delete(_.id),d7()}}function oW(_){if(typeof _!=="function")return()=>{};return R9.add(_),()=>{R9.delete(_)}}function ZK(_,$={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;for(let G of[...R9].reverse())try{let Z=G(j,$);if(typeof Z==="string"&&Z.trim())return Z.trim()}catch(Z){console.warn("[addon-web] standalone tab URL resolver failed:",Z)}return null}function sW(_){if(!_||typeof _.id!=="string"||!_.id.trim()||typeof _.match!=="function"||typeof _.buildFrameUrl!=="function")return()=>{};return f4.set(_.id,_),()=>{if(f4.get(_.id)===_)f4.delete(_.id)}}function L8(_,$){for(let j of Array.from(f4.values()).reverse())try{if(j.match(_,$))return j}catch(G){console.warn("[addon-web] attachment preview matcher failed:",G)}return null}function XK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.label||null}function YK(_){let $=typeof _==="string"?_.trim():"";if(!$)return null;return f4.get($)?.note||null}function LK(_,$,j){let G=typeof _==="string"?_.trim():"";if(!G)return null;let Z=f4.get(G);if(!Z)return null;try{return Z.buildFrameUrl($,j)||null}catch(X){return console.warn("[addon-web] attachment preview URL builder failed:",X),null}}function aW(_=typeof window<"u"?window:null){return{registerPane:dW,registerWorkspacePane:GK,registerSettingsPane:iW,registerStandaloneTabUrlResolver:oW,registerAttachmentPreview:sW,getCurrentChatJid:()=>rW(_)}}function S9(_=typeof window<"u"?window:null){let $=aW(_);if(!_||jK)return $;return _.__piclaw_web=$,_.__piclaw_registerPane=$.registerPane,_.__piclaw_registerWorkspacePane=$.registerWorkspacePane,_.__piclaw_registerSettingsPane=$.registerSettingsPane,_.__piclaw_registerStandaloneTabUrlResolver=$.registerStandaloneTabUrlResolver,_.__piclaw_registerAttachmentPreview=$.registerAttachmentPreview,_.__piclawSettingsPaneRegistry={registerSettingsPane:$.registerSettingsPane,notifySettingsPanesChanged:()=>_?.dispatchEvent?.(new CustomEvent("piclaw:settings-panes-changed"))},jK=!0,$}async function KK(_=typeof window<"u"?window:null){if(!_)return;if(Y8)return Y8;return Y8=(async()=>{S9(_);try{let $=await fetch("/agent/addons/web-entries",{credentials:"same-origin"});if(!$.ok)return;let j=await $.json().catch(()=>null),G=Array.isArray(j?.entries)?j.entries:[],Z=_.location?.origin||"http://localhost";for(let X of G){let Y=nW(X?.url,Z);if(!Y)continue;try{await import(Y)}catch(L){console.warn("[addon-web] Failed to load installed addon web entry:",Y,L)}}}catch($){console.warn("[addon-web] Failed to fetch installed addon web entries:",$)}})(),Y8}var tW=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/x-yaml","text/xml","text/yaml"]),eW=new Set(["text/markdown"]),_O=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),$O=new Set(["application/eml","message/rfc822"]);function e$(_){return typeof _==="string"?_.trim().toLowerCase():""}function jO(_){let $=e$(_);return!!$&&$.endsWith(".eml")}function GO(_){let $=e$(_);return!!$&&$.endsWith(".pdf")}function ZO(_){let $=e$(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}var XO=new Set(["application/zip","application/x-zip-compressed"]);function YO(_){let $=e$(_);return!!$&&$.endsWith(".zip")}function LO(_){let $=e$(_);return!!$&&($.endsWith(".html")||$.endsWith(".htm"))}function KO(_){let $=e$(_);if(!$)return!1;return $.endsWith(".sh")||$.endsWith(".bash")||$.endsWith(".zsh")||$.endsWith(".sb")||$.endsWith(".yaml")||$.endsWith(".yml")}function y5(_,$){let j=L8(_,$);if(j?.id)return j.id;let G=e$(_);if(GO($)||G==="application/pdf")return"pdf";if(ZO($)||_O.has(G))return"office";if(jO($)||$O.has(G))return"eml";if(YO($)||XO.has(G))return"archive";if(LO($)||G==="text/html")return"html";if(KO($))return"text";if(!G)return"unsupported";if(G.startsWith("video/"))return"video";if(G.startsWith("image/"))return"image";if(tW.has(G)||G.startsWith("text/"))return"text";return"unsupported"}function VK(_){let $=e$(_);return eW.has($)}function K8(_){switch(_){case"image":return"Image preview";case"video":return"Video player";case"pdf":return"PDF preview";case"office":return"Office viewer";case"eml":return"Email preview";case"html":return"HTML preview";case"text":return"Text preview";case"archive":return"ZIP archive preview";default:return XK(_)||"Preview unavailable"}}var VO=new TextDecoder("utf-8",{fatal:!1});function M6(_,$){return _[$]|_[$+1]<<8}function R4(_,$){return(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24)>>>0}function qK(_,$,j){return VO.decode(_.subarray($,$+j))}function qO(_){let $=Math.max(0,_.length-65557);for(let j=_.length-22;j>=$;j-=1)if(R4(_,j)===101010256)return j;return-1}function QO(_,$){let j=Math.max(0,$-20);for(let G=j;G<=$-4;G+=1)if(R4(_,G)===117853008)return!0;return!1}function NO(_){let $=new Set;for(let j of _){let G=j.path.replace(/\/+/g,"/");if(!G)continue;if(j.isDirectory){$.add(G.endsWith("/")?G.slice(0,-1):G);continue}let Z=G.split("/").filter(Boolean);if(Z.length<=1)continue;let X="";for(let Y=0;Y<Z.length-1;Y+=1)X=X?`${X}/${Z[Y]}`:Z[Y],$.add(X)}return $}function BO(_){return String(_||"").replace(/\\/g,"/").trim()}function QK(_){switch(Number(_)){case 0:return"Stored";case 8:return"Deflate";case 9:return"Deflate64";case 12:return"BZIP2";case 14:return"LZMA";case 93:return"Zstandard";default:return`Method ${_}`}}function NK(_){let $=_ instanceof Uint8Array?_:_ instanceof ArrayBuffer?new Uint8Array(_):new Uint8Array(_.buffer,_.byteOffset,_.byteLength);if($.length<22)throw Error("ZIP archive is too small to contain a valid directory.");let j=qO($);if(j<0)throw Error("ZIP archive directory could not be found.");if(QO($,j))throw Error("ZIP64 archives are not previewable yet.");let G=M6($,j+10),Z=R4($,j+12),X=R4($,j+16);if(X+Z>$.length)throw Error("ZIP archive directory is truncated.");let Y=[],L=X,V=X+Z;while(L<V){if(L+46>$.length)throw Error("ZIP archive directory entry is truncated.");if(R4($,L)!==33639248)throw Error("ZIP archive directory contains an unexpected record.");let q=M6($,L+8),B=M6($,L+10),N=R4($,L+20),U=R4($,L+24),E=M6($,L+28),D=M6($,L+30),H=M6($,L+32),M=L+46,J=M+E+D,W=J+H;if(W>$.length)throw Error("ZIP archive directory entry metadata is truncated.");let T=(q&2048)===2048,x=BO(qK($,M,E)),A=qK($,J,H),k=x.endsWith("/");if(x)Y.push({path:x,isDirectory:k,compressedSize:N,uncompressedSize:U,compressionMethod:B,comment:T?A:A});L=W}Y.sort((q,B)=>{if(q.isDirectory!==B.isDirectory)return q.isDirectory?-1:1;return q.path.localeCompare(B.path)});let K=Y.filter((q)=>!q.isDirectory),Q=NO(Y);return{entries:Y,summary:{fileCount:K.length,directoryCount:Q.size,totalEntries:Y.length,compressedBytes:K.reduce((q,B)=>q+B.compressedSize,0),uncompressedBytes:K.reduce((q,B)=>q+B.uncompressedSize,0)}}}function BK(_){if(!_)return null;if(_.uncompressedBytes<=0)return null;let $=1-_.compressedBytes/_.uncompressedBytes;if(!Number.isFinite($))return null;return`${Math.round($*100)}% smaller`}var FO="allow-scripts";function UO(_){if(!(_ instanceof Uint8Array)||_.length===0)return!0;let $=0,j=_.subarray(0,Math.min(_.length,4096));for(let G of j){if(G===0)return!1;if(G<32&&G!==9&&G!==10&&G!==13&&G!==12)$+=1}return $/j.length<0.02}function HO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase();if(j.startsWith("text/")||j==="application/json"||j==="application/xml")return!1;return j==="application/octet-stream"||G.endsWith(".sb")||G.endsWith(".sh")}function EO(_){try{return new TextDecoder("utf-8",{fatal:!1}).decode(_)}catch{return new TextDecoder().decode(_)}}function DO(_,$=null,j=null){let G=_?.metadata?.size,Z=_?.content_type||"application/octet-stream",X=j?.summary||null;return[{label:"Type",value:Z},{label:"Syntax",value:$},{label:"Entries",value:X?String(X.totalEntries):null},{label:"Files",value:X?String(X.fileCount):null},{label:"Folders",value:X?String(X.directoryCount):null},{label:"Compressed",value:X?a_(X.compressedBytes):null},{label:"Uncompressed",value:X?a_(X.uncompressedBytes):null},{label:"Savings",value:BK(X)},{label:"Size",value:typeof G==="number"?a_(G):null},{label:"Added",value:_?.created_at?T4(_.created_at):null}].filter((Y)=>Y.value)}function zO(_,$){let j=String(_?.content_type||"").trim().toLowerCase(),G=String($||"").trim().toLowerCase(),Z=G.split("/").pop()||G;if(G.endsWith(".yaml")||G.endsWith(".yml")||j==="text/yaml"||j==="application/yaml")return"yaml";if(G.endsWith(".json")||G.endsWith(".jsonl")||j==="application/json")return"json";if(G.endsWith(".xml")||G.endsWith(".svg")||j==="application/xml"||j==="text/xml"||j==="image/svg+xml")return"xml";if(G.endsWith(".html")||G.endsWith(".htm")||j==="text/html")return"html";if(G.endsWith(".css")||j==="text/css")return"css";if(G.endsWith(".ts")||G.endsWith(".tsx")||j==="text/typescript")return G.endsWith(".tsx")?"tsx":"ts";if(G.endsWith(".js")||G.endsWith(".jsx")||j==="text/javascript"||j==="application/javascript")return G.endsWith(".jsx")?"jsx":"js";if(G.endsWith(".py")||j==="text/x-python"||j==="application/x-python-code")return"python";if(G.endsWith(".go")||j==="text/x-go")return"go";if(G.endsWith(".c++")||G.endsWith(".cc")||G.endsWith(".cp")||G.endsWith(".cpp")||G.endsWith(".cxx")||G.endsWith(".hh")||G.endsWith(".hpp")||G.endsWith(".hxx")||j==="text/x-c++src"||j==="text/x-c++hdr")return"cpp";if(G.endsWith(".rb")||j==="text/x-ruby")return"ruby";if(G.endsWith(".rs")||j==="text/x-rustsrc")return"rust";if(G.endsWith(".ps1")||G.endsWith(".psm1")||G.endsWith(".psd1")||j==="text/x-powershell")return"powershell";if(Z==="dockerfile"||G.endsWith(".dockerfile"))return"dockerfile";if(G.endsWith(".md")||G.endsWith(".markdown")||j==="text/markdown")return"markdown";if(G.endsWith(".sh")||G.endsWith(".bash")||G.endsWith(".zsh")||Z===".bashrc"||Z===".bash_profile"||Z===".profile"||Z===".zshrc"||Z===".zprofile"||Z===".zshenv"||Z===".env"||Z.startsWith(".env.")||j==="text/x-shellscript")return"bash";if(G.endsWith(".sql"))return"sql";if(G.endsWith(".toml")||G.endsWith(".ini")||G.endsWith(".cfg")||G.endsWith(".conf")||G.endsWith(".properties")||j==="text/toml")return"toml";return null}function WO(_,$,j){let G=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${G}#media=${Z}&name=${G}`;if(j==="office"){let X=u1(_);return`/office-viewer/?url=${encodeURIComponent(X)}&name=${G}`}if(j==="eml")return`/eml-viewer/?media=${Z}&name=${G}`;return null}function FK({mediaId:_,info:$,onClose:j}){let G=$?.filename||`attachment-${_}`,Z=Z0(()=>L8($?.content_type,G),[$?.content_type,G]),X=Z0(()=>y5($?.content_type,G),[$?.content_type,G]),Y=Z?.label||K8(X),L=Z0(()=>VK($?.content_type),[$?.content_type]),[V,K]=C(X==="text"||X==="html"||X==="archive"),[Q,q]=C(""),[B,N]=C(null),[U,E]=C(null),D=g(null),H=Z0(()=>zO($,G),[$,G]),M=Z0(()=>H?SZ(H):null,[H]),J=Z0(()=>DO($,!L?M:null,B),[$,L,M,B]),W=Z0(()=>Z?LK(Z.id,_,G):WO(_,G,X),[Z,_,G,X]),T=Z0(()=>YK(Z?.id||X),[Z?.id,X]),x=Z0(()=>{if(!L||!Q)return"";return Z1(Q)},[L,Q]),A=Z0(()=>{if(L||!Q||!H)return"";return F2(Q,H)},[L,Q,H]);return u(()=>{let k=(O)=>{if(O.key==="Escape")j()};return document.addEventListener("keydown",k),()=>document.removeEventListener("keydown",k)},[j]),u(()=>{if(!D.current||!x)return;E$(D.current);return},[x]),u(()=>{let k=!1;async function O(){if(X!=="text"&&X!=="html"&&X!=="archive"){K(!1),E(null),q(""),N(null);return}K(!0),E(null),q(""),N(null);try{let z=await A7(_),y=new Uint8Array(await z.arrayBuffer());if(X==="text"||X==="html"){if(X==="text"&&HO($,G)&&!UO(y))throw Error("Attachment does not appear to contain text content.");let R=EO(y);if(!k)q(R);return}let I=NK(y);if(!k)N(I)}catch(z){if(!k){let y=z instanceof Error?z.message:String(z||"Unknown error");E(X==="archive"?`Failed to load ZIP preview. ${y}`:`Failed to load text preview. ${y}`)}}finally{if(!k)K(!1)}}return O(),()=>{k=!0}},[_,X]),F`
        <${n$} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(k)=>{k.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${G}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${W&&F`
                                <a
                                    href=${W}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(k)=>k.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${u1(_)}
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
                        ${V&&F`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!V&&U&&F`<div class="attachment-preview-state">${U}</div>`}
                        ${!V&&!U&&X==="image"&&F`
                            <img class="attachment-preview-image" src=${u1(_)} alt=${G} />
                        `}
                        ${!V&&!U&&X==="video"&&F`
                            <video class="attachment-preview-video" src=${u1(_)} controls autoplay style="max-width:100%;max-height:100%;" />
                        `}
                        ${!V&&!U&&X==="html"&&F`
                            <iframe class="attachment-preview-frame" srcdoc=${Q||""} sandbox=${FO} title=${G}></iframe>
                        `}
                        ${!V&&!U&&(X==="pdf"||X==="office"||X==="eml"||Boolean(Z))&&W&&F`
                            <iframe class="attachment-preview-frame" src=${W} title=${G}></iframe>
                        `}
                        ${!V&&!U&&T&&F`
                            <div class="attachment-preview-readonly-note">${T}</div>
                        `}
                        ${!V&&!U&&X==="archive"&&B&&F`
                            <div class="attachment-preview-archive">
                                <div class="attachment-preview-archive-summary">
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Files</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.fileCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Folders</span>
                                        <strong class="attachment-preview-archive-card-value">${B.summary.directoryCount}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Compressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.compressedBytes)}</strong>
                                    </div>
                                    <div class="attachment-preview-archive-card">
                                        <span class="attachment-preview-archive-card-label">Uncompressed</span>
                                        <strong class="attachment-preview-archive-card-value">${a_(B.summary.uncompressedBytes)}</strong>
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
                                            ${B.entries.map((k)=>F`
                                                <tr key=${k.path}>
                                                    <td class="attachment-preview-archive-name">${k.path}</td>
                                                    <td>${k.isDirectory?"Folder":"File"}</td>
                                                    <td>${k.isDirectory?"—":QK(k.compressionMethod)}</td>
                                                    <td>${k.isDirectory?"—":a_(k.compressedSize)}</td>
                                                    <td>${k.isDirectory?"—":a_(k.uncompressedSize)}</td>
                                                </tr>
                                            `)}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        `}
                        ${!V&&!U&&X==="text"&&L&&F`
                            <div
                                ref=${D}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:x}}
                            />
                        `}
                        ${!V&&!U&&X==="text"&&!L&&A&&F`
                            <pre class="attachment-preview-text attachment-preview-code"><code dangerouslySetInnerHTML=${{__html:A}} /></pre>
                        `}
                        ${!V&&!U&&X==="text"&&!L&&!A&&F`
                            <pre class="attachment-preview-text">${Q}</pre>
                        `}
                        ${!V&&!U&&X==="unsupported"&&F`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((k)=>F`
                            <div class="attachment-preview-meta-item" key=${k.label}>
                                <span class="attachment-preview-meta-label">${k.label}</span>
                                <span class="attachment-preview-meta-value">${k.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${n$}>
    `}w0();P_();m2();V9();function OO(_){if(!_||typeof _!=="object")return!1;if(_.isContentEditable)return!0;if(typeof _.closest!=="function")return!1;return Boolean(_.closest(["input","textarea","select",'[contenteditable="true"]',".compose-box",".compose-model-popup",".compose-session-popup",".settings-dialog",".workspace-sidebar",".workspace-explorer",".editor-pane-container",".dock-panel",".timeline-menu-dropdown",".rename-branch-overlay",".agent-request-modal",".attachment-preview-modal",".vnc-pane-shell",".kanban-plugin",".mindmap-editor"].join(", ")))}function JO(_){if(!_||typeof _!=="object")return!0;if(OO(_))return!1;let $=String(_.tagName||"").toUpperCase();if($==="BODY"||$==="HTML")return!0;if(typeof _.closest!=="function")return!0;return Boolean(_.closest(".container, .timeline, .post, .post-body, .post-content, .agent-status-panel"))}function AO(_){if(!A5(_))return!1;if(!JO(_?.target))return!1;return!i$.some((j)=>O$(_,j.id))}function UK(_){let $=new URL(window.location.href);if(_)$.searchParams.delete("chat_only");else $.searchParams.set("chat_only","1");window.location.href=$.toString()}function kO(_){let $=[],j=new Map(s$.map((Z)=>[Z.id,Z])),G=(Z,X={})=>{let Y=j.get(Z);if(!Y)return;$.push({...Y,...X})};if(G("toggle-workspace",{label:_.workspaceOpen?"Hide workspace":"Show workspace",description:_.workspaceOpen?"Hide the workspace sidebar.":"Show the workspace sidebar."}),!_.workspaceOpen&&!_.chatOnlyMode)G("open-explorer");if(G("toggle-chat-only",{label:_.chatOnlyMode?"Exit chat-only mode":"Chat-only mode",description:_.chatOnlyMode?"Return to the split workspace layout.":"Switch to the chat-only layout."}),typeof _.onOpenTerminalTab==="function")G("open-terminal-tab");if(typeof _.onOpenVncTab==="function")G("open-vnc-tab");if(typeof _.onToggleTerminalDock==="function")G("toggle-terminal-dock",{label:_.terminalVisible?"Hide terminal dock":"Show terminal dock",description:_.terminalVisible?"Hide the terminal dock.":"Show the terminal dock."});return G("open-settings"),$}function HK(_){if(_==="agent")return"Agents";if(_==="workspace")return"Workspace";return"Slash commands"}function yO(_){if(_?.imageUrl)return F`<img class="timeline-quick-actions-item-avatar" src=${_.imageUrl} alt="" aria-hidden="true" />`;return F`<span class="timeline-quick-actions-item-placeholder" aria-hidden="true">${_?.visualHint||""}</span>`}function V8(_,$){return F`
        <span class="timeline-quick-actions-keyhint">
            <kbd>${$}</kbd>
            <span>${_}</span>
        </span>
    `}function MO(_){let $=new URL(window.location.href);$.searchParams.set("chat_jid",_),$.searchParams.set("chat_only","1");let j=document.createElement("a");j.href=$.toString(),j.target="_blank",j.rel="noopener",j.style.display="none",document.body.appendChild(j),j.click(),j.remove()}function EK({activeChatAgents:_=[],currentChatJid:$="web:default",workspaceOpen:j=!1,chatOnlyMode:G=!1,terminalVisible:Z=!1,onSwitchChat:X,onToggleWorkspace:Y,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:K,onPrefillCompose:Q}){let[q,B]=C(!1),[N,U]=C(""),[E,D]=C(0),[H,M]=C([]),[J,W]=C({workspaceCommands:null,slashCommands:null}),T=g(null),x=g(null),A=P(async()=>{try{let y=await K5();W(a$(y?.settings))}catch{W({workspaceCommands:null,slashCommands:null})}},[]);u(()=>{A()},[A]),u(()=>{let y=!1;return L5($).then((I)=>{if(y)return;M(Array.isArray(I?.commands)?I.commands:[])}).catch(()=>{if(y)return;M([])}),()=>{y=!0}},[$]);let k=Z0(()=>kO({workspaceOpen:j,chatOnlyMode:G,terminalVisible:Z,onOpenTerminalTab:L,onOpenVncTab:V,onToggleTerminalDock:K}),[G,L,V,K,Z,j]),O=Z0(()=>mY({agents:_,workspaceCommands:k,slashCommands:H,settings:J,query:N}),[_,N,J,H,k]);if(u(()=>{if(O.length===0){D(-1);return}if(!N.trim()){D(0);return}let y=N.toLowerCase().replace(/^[@/]+/,"").trim();if(!y){D(0);return}let I=0,R=0;for(let f=0;f<O.length;f++){let v=O[f],l=(v.title||"").toLowerCase().replace(/^[@/]+/,"");if(l===y){I=f;break}let h=0;if(l.startsWith(y))h=3;else if(l.includes(y))h=2;else if((v.subtitle||"").toLowerCase().includes(y))h=1;if(h>R)R=h,I=f}D(I)},[O,N]),u(()=>{if(!q)return;requestAnimationFrame(()=>x.current?.focus?.())},[q]),u(()=>{let y=(R)=>{if(!q){if(!AO(R))return;R.preventDefault(),U(String(R.key||"")),D(0),B(!0);return}if(R.key==="Escape"){R.preventDefault(),B(!1),U("");return}if(R.key==="ArrowDown"){R.preventDefault(),D((f)=>O.length>0?(f+1+O.length)%O.length:0);return}if(R.key==="ArrowUp"){R.preventDefault(),D((f)=>O.length>0?(f-1+O.length)%O.length:0);return}if(R.key==="Enter"&&O[E]){R.preventDefault();let f=O[E],v=R.altKey;if(f){if(f.kind==="agent"&&f.chatJid)if(v)MO(f.chatJid);else X?.(f.chatJid);else if(f.kind==="workspace"&&f.commandId){if(f.commandId==="toggle-workspace"||f.commandId==="open-explorer")Y?.();if(f.commandId==="toggle-chat-only")UK(G);if(f.commandId==="open-terminal-tab")L?.();if(f.commandId==="open-vnc-tab")V?.();if(f.commandId==="toggle-terminal-dock")K?.();if(f.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"))}else if(f.kind==="slash"&&f.commandName)Q?.(f.commandName)}B(!1),U("")}},I=(R)=>{if(!q)return;if(T.current?.contains(R.target))return;B(!1),U("")};return window.addEventListener("keydown",y,!0),document.addEventListener("pointerdown",I,!0),()=>{window.removeEventListener("keydown",y,!0),document.removeEventListener("pointerdown",I,!0)}},[G,E,O,L,V,Q,X,K,Y,q]),u(()=>{let y=(I)=>{let R=a$(I?.detail?.settings);if(I?.detail?.settings){W(R);return}A()};return window.addEventListener("focus",y),window.addEventListener("piclaw:quick-actions-settings-updated",y),()=>{window.removeEventListener("focus",y),window.removeEventListener("piclaw:quick-actions-settings-updated",y)}},[A]),!q)return null;let z=null;return F`
        <div class="timeline-quick-actions-portal">
            <div class="timeline-quick-actions-overlay">
                <div class="timeline-quick-actions" ref=${T}>
                    <div class="timeline-quick-actions-header">
                        <div class="timeline-quick-actions-search-row">
                            <input
                                ref=${x}
                                class="timeline-quick-actions-input"
                                type="text"
                                value=${N}
                                placeholder="Type to jump to an agent, workspace action, or slash command…"
                                onInput=${(y)=>{U(y.currentTarget?.value||""),D(0)}}
                            />
                            <div class="timeline-quick-actions-hints" aria-hidden="true">
                                ${V8("Move","↑↓")}
                                ${V8("Select","↵")}
                                ${V8("Pop out","Alt+↵")}
                                ${V8("Close","Esc")}
                            </div>
                        </div>
                    </div>
                    <div class="timeline-quick-actions-list">
                        ${O.length===0&&F`<div class="timeline-quick-actions-empty">No quick actions match.</div>`}
                        ${O.map((y,I)=>{let R=y.kind!==z;return z=y.kind,F`
                                ${R&&F`<div class="timeline-quick-actions-section">${HK(y.kind)}</div>`}
                                <button
                                    key=${y.key}
                                    type="button"
                                    class=${`timeline-quick-actions-item timeline-quick-actions-item-${y.kind}${I===E?" active":""}`}
                                    onMouseEnter=${null}
                                    onClick=${()=>{if(y.kind==="agent"&&y.chatJid)X?.(y.chatJid);if(y.kind==="workspace"&&y.commandId==="toggle-workspace")Y?.();if(y.kind==="workspace"&&y.commandId==="open-explorer")Y?.();if(y.kind==="workspace"&&y.commandId==="toggle-chat-only")UK(G);if(y.kind==="workspace"&&y.commandId==="open-terminal-tab")L?.();if(y.kind==="workspace"&&y.commandId==="open-vnc-tab")V?.();if(y.kind==="workspace"&&y.commandId==="toggle-terminal-dock")K?.();if(y.kind==="workspace"&&y.commandId==="open-settings")window.dispatchEvent(new CustomEvent("piclaw:open-settings"));if(y.kind==="slash"&&y.commandName)Q?.(y.commandName);B(!1),U("")}}
                                >
                                    <span class="timeline-quick-actions-item-media">
                                        ${yO(y)}
                                    </span>
                                    <span class="timeline-quick-actions-item-copy">
                                        <span class="timeline-quick-actions-item-title-row">
                                            <span class="timeline-quick-actions-item-title">${y.title}</span>
                                            ${y.actionHint?F`<span class="timeline-quick-actions-item-action-hint">${y.actionHint}</span>`:null}
                                        </span>
                                        <span class="timeline-quick-actions-item-subtitle">${y.subtitle}</span>
                                    </span>
                                    <span class="timeline-quick-actions-item-category">${y.categoryLabel||HK(y.kind)}</span>
                                </button>
                            `})}
                    </div>
                </div>
            </div>
        </div>
    `}w0();function DK({workspaceOpen:_,toggleWorkspace:$,chatOnlyMode:j,onOpenTerminalTab:G,onOpenVncTab:Z,onToggleTerminal:X,terminalVisible:Y}){let[L,V]=C(!1),[K,Q]=C({top:8,left:8}),q=g(null),B=g(null),N=g(null);u(()=>{if(typeof document>"u")return;let H=document.createElement("div");return H.className="timeline-menu-portal in-chat",document.body.appendChild(H),N.current=H,()=>{H.remove(),N.current=null}},[]),u(()=>{let H=()=>{if(_){let W=document.querySelector(".workspace-sidebar");if(W){let T=W.getBoundingClientRect();Q({top:T.top+8,left:T.left+8})}}else Q({top:8,left:8})};H();let M=new ResizeObserver(H),J=document.querySelector(".workspace-sidebar");if(J)M.observe(J);return window.addEventListener("resize",H),()=>{M.disconnect(),window.removeEventListener("resize",H)}},[_]),u(()=>{if(N.current)N.current.className=`timeline-menu-portal ${_?"in-workspace":"in-chat"}`},[_]),u(()=>{if(!N.current)return;let H=N.current.style;H.top=`${K.top}px`,H.left=`${K.left}px`,H.right="auto"},[K]),u(()=>{if(!L)return;let H=(M)=>{if(q.current?.contains(M.target))return;if(B.current?.contains(M.target))return;V(!1)};return document.addEventListener("mousedown",H,!0),()=>document.removeEventListener("mousedown",H,!0)},[L]),u(()=>{if(!L)return;let H=(M)=>{if(M.key==="Escape")V(!1)};return document.addEventListener("keydown",H),()=>document.removeEventListener("keydown",H)},[L]),u(()=>{V(!1)},[_]);let U=P((H)=>{V(!1),H?.()},[]),E=P(()=>{let H=new URL(window.location.href);if(j)H.searchParams.delete("chat_only");else H.searchParams.set("chat_only","1");window.location.href=H.toString()},[j]),D=F`
        <button ref=${B} class=${`timeline-menu-btn${L?" active":""}`}
            onClick=${()=>V((H)=>!H)} title="Menu" aria-label="Menu"
            aria-haspopup="menu" aria-expanded=${L?"true":"false"}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
        </button>
        ${L&&F`
            <div class="workspace-menu-dropdown timeline-menu-dropdown" ref=${q} role="menu">
                <button class="workspace-menu-item" role="menuitem" onClick=${()=>U($)}>
                    ${_?"Hide workspace":"Show workspace"}
                </button>
                ${!_&&!j&&F`
                    <button class="workspace-menu-item" role="menuitem" onClick=${()=>U(()=>{$()})}>
                        Open explorer
                    </button>
                `}
                <button class=${`workspace-menu-item${j?" active":""}`} role="menuitem" onClick=${()=>U(E)}>
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
    `;return j6(()=>{if(N.current)Q$(D,N.current)}),null}w0();P_();var zK="PiClaw";function u9(_,$,j=!1){let G=_||"PiClaw",Z=G.charAt(0).toUpperCase(),X=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],Y=Z.charCodeAt(0)%X.length,L=X[Y],V=G.trim().toLowerCase(),K=typeof $==="string"?$.trim():"",Q=K?K:null,q=j||V==="PiClaw".toLowerCase()||V==="pi";return{letter:Z,color:L,image:Q||(q?"/static/icon-192.png":null)}}function WK(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function OK(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function JK(_){if(!_)return null;if(typeof document<"u"){let X=document.documentElement,Y=X?.dataset?.colorTheme||"",L=X?.dataset?.tint||"",V=getComputedStyle(X).getPropertyValue("--accent-color")?.trim();if(V&&(L||Y&&Y!=="default"))return V}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),G=0;for(let X=0;X<j.length;X+=1)G=(G*31+j.charCodeAt(X))%2147483647;let Z=Math.abs(G)%$.length;return $[Z]}function g9(..._){for(let $ of _)if(typeof $==="string"&&$.trim())return $.trim();return null}function wO(_){if(_.startsWith('"')&&_.endsWith('"')||_.startsWith("'")&&_.endsWith("'"))return _.slice(1,-1);return _}function AK(_){if(typeof _!=="string"||!_.trim())return null;let $=_.match(/^\s*cd\s+(.+?)(?:\s*(?:&&|;|\n))/s);if(!$?.[1])return null;return wO($[1].trim())||null}function kK(_,$){let j=$&&typeof $==="object"?$:null;if(!j)return null;let G=g9(j.cwd,j.working_directory,j.workingDirectory);if(G)return G;let Z=g9(j.project_dir,j.projectDir,j.repo_path,j.repoPath);if(Z)return Z;let X=g9(j.command),Y=AK(X);if(Y)return Y;if(Array.isArray(j.commands))for(let L of j.commands){let V=AK(L);if(V)return V}return null}var TO=F`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`,xO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <path d="M6 3v12"></path>
        <circle cx="18" cy="6" r="3"></circle>
        <circle cx="6" cy="18" r="3"></circle>
        <path d="M18 9a9 9 0 0 1-9 9"></path>
    </svg>
`,IO=F`
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M12 7v5l3 2"></path>
    </svg>
`,CO=1e4;function PO(_){return(Array.isArray(_)?_:_&&Array.isArray(_.status_hints)?_.status_hints:[]).filter((j)=>j&&typeof j==="object").map((j,G)=>({key:typeof j.key==="string"&&j.key.trim()?j.key.trim():`hint-${G}`,iconSvg:typeof j.icon_svg==="string"?j.icon_svg.trim():"",label:typeof j.label==="string"?j.label.trim():"",title:typeof j.title==="string"?j.title.trim():""})).filter((j)=>j.iconSvg&&j.label)}function fO(_){if(!(_ instanceof Set)||_.size===0)return null;let $=Array.from(_.values());for(let j=$.length-1;j>=0;j-=1){let G=$[j];if(G==="thought"||G==="draft")return G}return null}function RO(_){if(!Array.isArray(_)||_.length===0)return[];let $=new Map([["ssh",0]]);return _.map((j,G)=>({hint:j,index:G})).sort((j,G)=>{let Z=$.get(j.hint?.key)??100,X=$.get(G.hint?.key)??100;if(Z!==X)return Z-X;return j.index-G.index}).map((j)=>j.hint)}function SO(_,$){let j=typeof _==="string"?_.trim():"",G=typeof $==="string"?$.trim():"";return[j?j.split(/[\\/]+/).filter(Boolean).pop()||j:"",G].filter(Boolean).join(" • ")}function yK(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"",j=Boolean(_.last_activity||_.lastActivity),G=$==="tool_call"||$==="tool_status"||Boolean(_.tool_name||_.tool_args);if(!j&&!G)return!1;return r$(_)!==null}function MK(_){if(!_||typeof _!=="object")return!1;return _.type==="intent"&&P2(_)!==null}function uO(_,$=Date.now()){if(!Number.isFinite(_))return!1;return $-_>=CO}function gO(_,$=Date.now()){if(!yK(_))return null;let j=r$(_);if(j===null||!uO(j,$))return null;let G=wK(new Date(j).toISOString(),$);return G?`${G} ago`:null}function bO(_,$=Date.now()){if(!MK(_))return null;if(P2(_)===null)return null;return D5(_,$)}function vO(_,$={}){let j=$?.isLastActivity??Boolean(_?.last_activity||_?.lastActivity),G=_?.title,Z=_?.status,X="";if(_?.type==="plan")X=G?`Planning: ${G}`:"Planning...";else if(_?.type==="tool_call")X=G?`Running: ${G}`:"Running tool...";else if(_?.type==="tool_status")X=G?`${G}: ${Z||"Working..."}`:Z||"Working...";else if(_?.type==="error")X=G||"Agent error";else X=G||Z||"Working...";if(!j)return X;if(X&&X!=="Working...")return`Recent activity: ${X}`;return"Last activity"}function wK(_,$=Date.now()){if(!_)return null;let j=$-new Date(_).getTime();if(!Number.isFinite(j)||j<0)return null;let G=Math.floor(j/1000),Z=Math.floor(G/3600),X=Math.floor(G%3600/60),Y=G%60;if(Z>0)return`${Z}h ${X}m`;if(X>0)return`${X}m ${Y}s`;return`${Y}s`}function b9({status:_,draft:$,plan:j,thought:G,pendingRequest:Z,intent:X,extensionPanels:Y=[],pendingPanelActions:L=new Set,onExtensionPanelAction:V,turnId:K,steerQueued:Q,onPanelToggle:q,showCorePanels:B=!0,showExtensionPanels:N=!0}){let D=(e)=>{if(!e)return{text:"",totalLines:0,fullText:""};if(typeof e==="string"){let o=e,a=o?o.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:o,totalLines:a,fullText:o}}let A0=e.text||"",k0=e.fullText||e.full_text||A0,d=Number.isFinite(e.totalLines)?e.totalLines:k0?k0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:A0,totalLines:d,fullText:k0}},H=160,M=(e)=>String(e||"").replace(/<\/?internal>/gi,""),J=(e)=>{if(!e)return 1;return Math.max(1,Math.ceil(e.length/160))},W=(e,A0,k0)=>{let d=(e||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!d)return{text:"",omitted:0,totalLines:Number.isFinite(k0)?k0:0,visibleLines:0};let o=d.split(`
`),a=o.length>A0?o.slice(0,A0).join(`
`):d,G0=Number.isFinite(k0)?k0:o.reduce((b0,P0)=>b0+J(P0),0),L0=a?a.split(`
`).reduce((b0,P0)=>b0+J(P0),0):0,M0=Math.max(G0-L0,0);return{text:a,omitted:M0,totalLines:G0,visibleLines:L0}},T=D(j),x=D(G),A=D($),k=D({text:_?.output_preview||_?.outputPreview||"",fullText:_?.output_preview||_?.outputPreview||"",totalLines:_?.output_total_lines||_?.outputTotalLines}),O=Boolean(T.text)||T.totalLines>0,z=Boolean(x.text)||x.totalLines>0,y=Boolean(A.fullText?.trim()||A.text?.trim()),I=Boolean(k.fullText?.trim()||k.text?.trim()),R=Boolean(_||y||O||z||I||Z||X),f=Array.isArray(Y)&&Y.length>0,[v,l]=C(new Set),[h,n]=C(null),[b,$0]=C(()=>Date.now()),E0=(e)=>l((A0)=>{let k0=new Set(A0),d=!k0.has(e);if(d)k0.add(e);else k0.delete(e);if(typeof q==="function")q(e,d);return k0});u(()=>{l(new Set),n(null)},[K]),u(()=>{if(!(Array.isArray(Y)&&Y.some((k0)=>k0?.started_at||k0?.last_activity_at)))return;let A0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(A0)},[Y]);let V0=Z0(()=>fO(v),[v]);u(()=>{if(!V0||typeof document>"u")return;let e=(A0)=>{if(A0?.defaultPrevented)return;if(A0?.key!=="Escape")return;if(A0?.altKey||A0?.ctrlKey||A0?.metaKey||A0?.shiftKey)return;let k0=A0?.target;if(k0 instanceof Element){if(k0.closest?.('input, textarea, select, [contenteditable="true"]'))return;if(k0.isContentEditable)return}if(l((d)=>{if(!(d instanceof Set)||!d.has(V0))return d;let o=new Set(d);return o.delete(V0),o}),typeof q==="function")q(V0,!1);A0.preventDefault?.(),A0.stopPropagation?.()};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[V0,q]);let K0=z$(_),X0=Boolean(_?.last_activity||_?.lastActivity),F0=Z0(()=>yK(_),[_]),_0=Z0(()=>MK(_),[_]),Y0=Z0(()=>kK(_?.tool_name,_?.tool_args),[_?.tool_name,_?.tool_args]),[Q0,J0]=C(null);u(()=>{if(!Boolean(_0||_?.retry_at||_?.retryAt||F0))return;$0(Date.now());let A0=setInterval(()=>$0(Date.now()),1000);return()=>clearInterval(A0)},[F0,_0,_?.retry_at,_?.retryAt,_?.last_event_at,_?.lastEventAt,_?.started_at,_?.startedAt,_?.type,_?.tool_name,_?.tool_args]),u(()=>{if(!(_?.type==="tool_call"||_?.type==="tool_status")||!Y0){J0(null);return}let A0=!0;return k7(Y0).then((k0)=>{if(!A0)return;if(k0?.branch)J0({branch:k0.branch,repoPath:k0.repo_path||null,path:Y0});else J0(null)}).catch(()=>{if(A0)J0(null)}),()=>{A0=!1}},[_?.type,Y0]);let s=_?.turn_id||K,j0=JK(s),z0=e2({steerQueued:Q}),C0=(e)=>e,h0=zL(_,{isLastActivity:X0}),n0=$8(_,{isLastActivity:X0}),G_=$8(null,{pendingRequest:!0}),m0=(e)=>e==="warning"?"#f59e0b":e==="error"?"var(--danger-color)":e==="success"?"var(--success-color)":j0,a0=X?.kind||"info",S0=m0(a0),o0=m0(_?.kind||(K0?"warning":"info")),c0=vO(_,{isLastActivity:X0}),d0=gO(_,b),r0=Q0?.repoPath||"",Q_=Q0?.branch||"",t0=Q0?SO(r0,Q_):"",l0=PO(_?.status_hints||_?.statusHints),O0=Z0(()=>RO(l0),[l0]),B_=Z0(()=>O0.filter((e)=>e?.key==="ssh"),[O0]),e0=Z0(()=>O0.filter((e)=>e?.key!=="ssh"),[O0]);if((!B||!R)&&(!N||!f))return null;let D_=({panelTitle:e,text:A0,fullText:k0,totalLines:d,maxLines:o,titleClass:a,panelKey:G0})=>{let L0=v.has(G0),M0=k0||A0||"",b0=G0==="thought"||G0==="draft"?M(M0):M0,P0=typeof o==="number",g0=L0&&P0,I0=P0?W(b0,o,d):{text:b0||"",omitted:0,totalLines:Number.isFinite(d)?d:0};if(!b0&&!(Number.isFinite(I0.totalLines)&&I0.totalLines>0))return null;let D0=`agent-thinking-body${P0?" agent-thinking-body-collapsible":""}`,f0=P0?`--agent-thinking-collapsed-lines: ${o};`:"";return F`
            <div
                class="agent-thinking"
                data-expanded=${L0?"true":"false"}
                data-collapsible=${P0?"true":"false"}
                data-panel-key=${G0||""}
                style=${j0?`--turn-color: ${j0};`:""}
            >
                <div class="agent-thinking-title ${a||""}">
                    ${j0&&F`<span class=${z0} aria-hidden="true"></span>`}
                    ${e}
                    ${g0&&F`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${e} panel`}
                            onClick=${()=>E0(G0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${D0}
                    style=${f0}
                    dangerouslySetInnerHTML=${{__html:j5(b0)}}
                />
                ${!L0&&I0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>E0(G0)}>
                        ▸ ${I0.omitted} more lines
                    </button>
                `}
                ${L0&&I0.omitted>0&&F`
                    <button class="agent-thinking-truncation" onClick=${()=>E0(G0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},H0=Z?.tool_call?.title,u0=H0?`Awaiting approval: ${H0}`:"Awaiting approval",T0=bO(_,b),i0=(e,A0,k0=null)=>{let d=f2(e),o=iX(e,b),a=[k0,o].filter(Boolean).join(" · "),G0=e2({steerQueued:Q,pulsing:z$(e)||Boolean(o)});return F`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${A0?`--turn-color: ${A0};`:""}
                title=${e?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${A0&&F`<span class=${G0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${d}</span>
                    ${a&&F`<span class="agent-status-elapsed">${a}</span>`}
                </div>
                ${e.detail&&F`<div class="agent-thinking-body">${e.detail}</div>`}
            </div>
        `},A_=(e,A0,k0,d,o,a,G0,L0=8,M0=8)=>{let b0=Math.max(o-d,0.000000001),P0=Math.max(A0-L0*2,1),g0=Math.max(k0-M0*2,1),I0=Math.max(G0-a,1),D0=G0===a?A0/2:L0+(e.run-a)/I0*P0,f0=M0+(g0-(e.value-d)/b0*g0);return{x:D0,y:f0}},K_=(e,A0,k0,d,o,a,G0,L0=8,M0=8)=>{if(!Array.isArray(e)||e.length===0)return"";return e.map((b0,P0)=>{let{x:g0,y:I0}=A_(b0,A0,k0,d,o,a,G0,L0,M0);return`${P0===0?"M":"L"} ${g0.toFixed(2)} ${I0.toFixed(2)}`}).join(" ")},H_=(e,A0="")=>{if(!Number.isFinite(e))return"—";return`${Math.abs(e)>=100?e.toFixed(0):e.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${A0}`},E_=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],y_=(e,A0)=>{let k0=E_;if(!Array.isArray(k0)||k0.length===0)return"var(--accent-color)";if(k0.length===1||!Number.isFinite(A0)||A0<=1)return k0[0];let o=Math.max(0,Math.min(Number.isFinite(e)?e:0,A0-1))/Math.max(1,A0-1)*(k0.length-1),a=Math.floor(o),G0=Math.min(k0.length-1,a+1),L0=o-a,M0=k0[a],b0=k0[G0];if(!b0||a===G0||L0<=0.001)return M0;if(L0>=0.999)return b0;let P0=Math.round((1-L0)*1000)/10,g0=Math.round(L0*1000)/10;return`color-mix(in oklab, ${M0} ${P0}%, ${b0} ${g0}%)`},I_=(e,A0="autoresearch")=>{let k0=Array.isArray(e)?e.map((D0)=>({...D0,points:Array.isArray(D0?.points)?D0.points.filter((f0)=>Number.isFinite(f0?.value)&&Number.isFinite(f0?.run)):[]})).filter((D0)=>D0.points.length>0):[],d=k0.map((D0,f0)=>({...D0,color:y_(f0,k0.length)}));if(d.length===0)return null;let o=320,a=120,G0=d.flatMap((D0)=>D0.points),L0=G0.map((D0)=>D0.value),M0=G0.map((D0)=>D0.run),b0=Math.min(...L0),P0=Math.max(...L0),g0=Math.min(...M0),I0=Math.max(...M0);return F`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${d.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${o} ${a}`} preserveAspectRatio="none" aria-hidden="true">
                        ${d.map((D0)=>{let f0=D0?.key||D0?.label||"series",Z_=h?.panelKey===A0&&h?.seriesKey===f0;return F`
                                <g key=${f0}>
                                    <path
                                        class=${`agent-series-chart-line${Z_?" is-hovered":""}`}
                                        d=${K_(D0.points,o,a,b0,P0,g0,I0)}
                                        style=${`--agent-series-color: ${D0.color};`}
                                        onMouseEnter=${()=>n({panelKey:A0,seriesKey:f0})}
                                        onMouseLeave=${()=>n((__)=>__?.panelKey===A0&&__?.seriesKey===f0?null:__)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${d.flatMap((D0)=>{let f0=typeof D0?.unit==="string"?D0.unit:"",Z_=D0?.key||D0?.label||"series";return D0.points.map((__,F_)=>{let v0=A_(__,o,a,b0,P0,g0,I0);return F`
                                    <button
                                        key=${`${Z_}-point-${F_}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${D0.color}; left:${v0.x/o*100}%; top:${v0.y/a*100}%;`}
                                        onMouseEnter=${()=>n({panelKey:A0,seriesKey:Z_,run:__.run,value:__.value,unit:f0})}
                                        onMouseLeave=${()=>n((W_)=>W_?.panelKey===A0?null:W_)}
                                        onFocus=${()=>n({panelKey:A0,seriesKey:Z_,run:__.run,value:__.value,unit:f0})}
                                        onBlur=${()=>n((W_)=>W_?.panelKey===A0?null:W_)}
                                        aria-label=${`${D0?.label||"Series"} ${H_(__.value,f0)} at run ${__.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${d.map((D0)=>{let f0=D0.points[D0.points.length-1]?.value,Z_=typeof D0?.unit==="string"?D0.unit:"",__=D0?.key||D0?.label||"series",F_=h?.panelKey===A0&&h?.seriesKey===__?h:null,v0=F_&&Number.isFinite(F_.value)?F_.value:f0,W_=F_&&typeof F_.unit==="string"?F_.unit:Z_,z_=F_&&Number.isFinite(F_.run)?F_.run:null;return F`
                            <div key=${`${__}-legend`} class=${`agent-series-legend-item${F_?" is-hovered":""}`} style=${`--agent-series-color: ${D0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${D0.color};`}></span>
                                <span class="agent-series-legend-label">${D0?.label||"Series"}</span>
                                ${z_!==null&&F`<span class="agent-series-legend-run">run ${z_}</span>`}
                                <span class="agent-series-legend-value">${H_(v0,W_)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},u_=(e)=>{if(!e)return null;let A0=typeof e?.key==="string"?e.key:`panel-${Math.random()}`,k0=v.has(A0),d=e?.title||"Extension status",o=e?.collapsed_text||"",a=String(e?.state||"").replace(/[-_]+/g," ").replace(/^./,(v0)=>v0.toUpperCase()),G0=m0(e?.state==="completed"?"success":e?.state==="failed"?"error":e?.state==="stopped"?"warning":"info"),L0=e2({steerQueued:Q,pulsing:e?.state==="running"}),M0=typeof e?.detail_markdown==="string"?e.detail_markdown.trim():"",b0=typeof e?.last_run_text==="string"?e.last_run_text.trim():"",P0=typeof e?.tmux_command==="string"?e.tmux_command.trim():"",g0=Array.isArray(e?.series)?e.series:[],I0=Array.isArray(e?.actions)?e.actions:[],D0=e?.started_at?D5(e,b):null,f0=o,Z_=Boolean(M0||P0||D0),__=Boolean(M0||g0.length>0||P0),F_=[d,f0].filter(Boolean).join(" — ");return F`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${k0?"true":"false"}
                style=${G0?`--turn-color: ${G0};`:""}
                title=${!k0?F_||d:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>__?E0(A0):null}
                    >
                        ${G0&&F`<span class=${L0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${d}</span>
                        ${f0&&F`<span class="agent-thinking-title-meta">${f0}</span>`}
                        ${D0&&F`<span class="agent-status-elapsed">${D0}</span>`}
                    </button>
                    ${(I0.length>0||__)&&F`
                        <div class="agent-thinking-tools-inline">
                            ${I0.length>0&&F`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${I0.map((v0)=>{let W_=`${A0}:${v0?.key||""}`,z_=L?.has?.(W_);return F`
                                            <button
                                                key=${W_}
                                                class=${`agent-thinking-action-btn${v0?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>V?.(e,v0)}
                                                disabled=${Boolean(z_)}
                                            >
                                                ${z_?"Working…":v0?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${__&&F`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`${k0?"Collapse":"Expand"} ${d}`}
                                    title=${k0?"Collapse details":"Expand details"}
                                    onClick=${()=>E0(A0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        ${k0?F`<polyline points="4 6 8 10 12 6"></polyline>`:F`<polyline points="4 10 8 6 12 10"></polyline>`}
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${k0&&F`
                    <div class=${`agent-thinking-autoresearch-layout${Z_?"":" chart-only"}`}>
                        ${Z_&&F`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${D0&&F`
                                    <div class="agent-thinking-autoresearch-elapsed">
                                        <span title="Experiment duration">⏱ ${D0}</span>
                                        ${e?.last_activity_at&&e?.state==="running"&&F`<span title="Since last activity">⟳ ${wK(e.last_activity_at)} ago</span>`}
                                    </div>
                                `}
                                ${M0&&F`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:j5(M0)}}
                                    />
                                `}
                                ${P0&&F`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${P0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>V?.(e,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${TO}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${g0.length>0?F`
                                <div class="agent-series-chart-stack">
                                    ${I_(g0,A0)}
                                    ${b0&&F`<div class="agent-series-chart-note">${b0}</div>`}
                                </div>
                            `:F`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return F`
        <div class="agent-status-panel">
            ${B&&X&&i0(X,S0)}
            ${N&&Array.isArray(Y)&&Y.map((e)=>u_(e))}
            ${B&&_?.type==="intent"&&i0(_,o0,T0)}
            ${B&&Z&&F`
                <div class="agent-status agent-status-request" aria-live="polite" style=${j0?`--turn-color: ${j0};`:""}>
                    ${G_==="dot"&&F`<span class=${z0} aria-hidden="true"></span>`}
                    ${G_==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${u0}</span>
                </div>
            `}
            ${B&&O&&D_({panelTitle:C0("Planning"),text:T.text,fullText:T.fullText,totalLines:T.totalLines,panelKey:"plan"})}
            ${B&&y&&D_({panelTitle:C0("Draft"),text:A.text,fullText:A.fullText,totalLines:A.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${B&&z&&D_({panelTitle:C0("Thoughts"),text:x.text,fullText:x.fullText,totalLines:x.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${B&&I&&D_({panelTitle:C0(_?.output_truncated||_?.outputTruncated?"Tool output preview":"Tool output"),text:k.text,fullText:k.fullText,totalLines:k.totalLines,maxLines:8,titleClass:"tool-output",panelKey:"tool-output"})}
            ${B&&_&&_?.type!=="intent"&&F`
                <div class=${`agent-status${X0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}${t0||l0.length>0||d0?" agent-status-multiline":""}`} aria-live="polite" style=${j0?`--turn-color: ${j0};`:""}>
                    ${j0&&h0&&F`<span class=${z0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?F`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:n0==="spinner"&&F`<div class="agent-status-spinner"></div>`}
                    <div class="agent-status-copy">
                        <span class="agent-status-text">${c0}</span>
                        ${(t0||O0.length>0||d0)&&F`
                            <span class="agent-status-meta-row">
                                ${B_.map((e)=>F`
                                    <span key=${e.key} class="agent-status-hint-row" title=${e.title||e.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:e.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${e.label}</span>
                                    </span>
                                `)}
                                ${t0&&F`
                                    <span class="agent-status-git-row" title=${Y0||t0}>
                                        <span class="agent-status-git-icon">${xO}</span>
                                        <span class="agent-status-git-label">
                                            ${r0&&F`<span class="agent-status-git-part">${r0}</span>`}
                                            ${r0&&Q_&&F`<span class="agent-status-git-separator" aria-hidden="true">•</span>`}
                                            ${Q_&&F`<span class="agent-status-git-part">${Q_}</span>`}
                                        </span>
                                    </span>
                                `}
                                ${e0.map((e)=>F`
                                    <span key=${e.key} class="agent-status-hint-row" title=${e.title||e.label}>
                                        <span class="agent-status-hint-icon" dangerouslySetInnerHTML=${{__html:e.iconSvg}}></span>
                                        <span class="agent-status-hint-label">${e.label}</span>
                                    </span>
                                `)}
                                ${d0&&F`
                                    <span class="agent-status-hint-row agent-status-activity-row" title=${`${X0?"Recent activity":"Last event"} ${d0}`}>
                                        <span class="agent-status-hint-icon">${IO}</span>
                                        <span class="agent-status-hint-label">${d0}</span>
                                    </span>
                                `}
                            </span>
                        `}
                    </div>
                </div>
            `}
        </div>
    `}function TK({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:G,options:Z,chat_jid:X}=_,Y=G?.title||"Agent Request",L=G?.kind||"other",V=G?.rawInput||{},K=V.command||V.commands&&V.commands[0]||null,Q=V.diff||null,q=V.fileName||V.path||null,B=G?.description||V.description||V.explanation||null,U=(Array.isArray(G?.locations)?G.locations:[]).map((J)=>J?.path).filter((J)=>Boolean(J)),E=Array.from(new Set([q,...U].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:G,options:Z});let D=async(J)=>{try{await E6(j,J,X||null),$()}catch(W){console.error("Failed to respond to agent request:",W)}},H=async()=>{try{await O7(Y,`Auto-approved: ${Y}`),await E6(j,"approved",X||null),$()}catch(J){console.error("Failed to add to whitelist:",J)}},M=Z&&Z.length>0;return F`
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
                ${(B||K||Q||E.length>0)&&F`
                    <div class="agent-request-body">
                        ${B&&F`
                            <div class="agent-request-description">${B}</div>
                        `}
                        ${E.length>0&&F`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${E.map((J,W)=>F`<li key=${W}>${J}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${K&&F`
                            <pre class="agent-request-command">${K}</pre>
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
                    ${M?Z.map((J)=>F`
                            <button 
                                key=${J.optionId||J.id||String(J)}
                                class="agent-request-btn ${J.kind==="allow_once"||J.kind==="allow_always"?"primary":""}"
                                onClick=${()=>D(J.optionId||J.id||J)}
                            >
                                ${J.name||J.label||J.optionId||J.id||String(J)}
                            </button>
                        `):F`
                        <button class="agent-request-btn primary" onClick=${()=>D("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>D("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${H}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}w0();w0();P_();function M5(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>M5($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${M5(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function xK(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:M5(j)})).filter(($)=>$.value)}function mO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function v9(_){if(!Array.isArray(_))return[];return _.filter(mO)}function q8(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let G=M5(j);return G?`Card submission: ${$} — ${G}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=xK(j).map(({key:X,value:Y})=>`${X}: ${Y}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function IK(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=xK(_.data),G=j.length>0?j.slice(0,2).map(({key:X,value:Y})=>`${X}: ${Y}`).join(", "):M5(_.data)||null,Z=j.length;return{title:$,summary:G,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function f_(_){return typeof _==="string"?_.trim():""}function CK(_){return _.map(($)=>String($||"").trim()).filter(Boolean).join(`

`).replace(/\n{3,}/g,`

`).trim()}function cO(_,$){let j=[],G=[],Z=[];if(_.forEach((X,Y)=>{if(!X||typeof X!=="object")return;let L=f_(X.type);if(L==="text"){let V=f_(X.text)||f_(X.content);if(V)j.push(V);return}if(L==="resource_link"){let V=f_(X.uri),K=f_(X.title)||f_(X.name)||V;if(V&&K)j.push(K===V?V:`[${K}](${V})`);return}if(L==="resource"){let V=f_(X.title)||f_(X.name)||f_(X.uri)||"Embedded resource",K=f_(X.text);if(K)j.push(`### ${V}

\`\`\`
${K}
\`\`\``);else j.push(`### ${V}`);return}if(L==="generated_widget"){let V=f_(X.title)||f_(X.name)||"Generated widget",K=f_(X.description)||f_(X.subtitle);j.push(CK([`### ${V}`,K]));return}if(L==="adaptive_card"&&f_(X.fallback_text)){j.push(f_(X.fallback_text));return}if(L==="adaptive_card_submission"){let V=q8(X);if(f_(V))j.push(f_(V));return}if(L==="file"){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;G.push(`- ${V}`);return}if(L==="image"||!L){let V=f_(X.name)||f_(X.filename)||f_(X.title)||`attachment:${$[Y]??Y+1}`;Z.push(`- ${V}`)}}),Z.length>0)j.push(`Images:
${Z.join(`
`)}`);if(G.length>0)j.push(`Attachments:
${G.join(`
`)}`);return CK(j)}function Q8(_){let $=_?.data||{},j=typeof $.content==="string"?$.content.replace(/\r\n/g,`
`).replace(/\r/g,`
`).trimEnd():"";if(j.trim())return j;let G=Array.isArray($.content_blocks)?$.content_blocks:[],Z=Array.isArray($.media_ids)?$.media_ids:[];return cO(G,Z)}function PK(_,$,j){try{return _.setAttribute($,j),!0}catch(G){return!1}}function fK(_,$){try{return _[$]=!0,!0}catch(j){return!1}}function RK(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;if(PK(j,"aria-disabled","true"),PK(j,"tabindex","-1"),"disabled"in j)fK(j,"disabled");if("readOnly"in j)fK(j,"readOnly")}}function lO(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let G=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(G.slice(0,2),16),g:parseInt(G.slice(2,4),16),b:parseInt(G.slice(4,6),16)}}function hO(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let G=Number(j[1]),Z=Number(j[2]),X=Number(j[3]);if(![G,Z,X].every((Y)=>Number.isFinite(Y)))return null;return{r:G,g:Z,b:X}}function SK(_){return lO(_)||hO(_)}function N8(_){let $=(X)=>{let Y=X/255;return Y<=0.03928?Y/12.92:((Y+0.055)/1.055)**2.4},j=$(_.r),G=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*G+0.0722*Z}function pO(_,$){let j=Math.max(N8(_),N8($)),G=Math.min(N8(_),N8($));return(j+0.05)/(G+0.05)}function rO(_,$,j="#ffffff"){let G=SK(_);if(!G)return j;let Z=j,X=-1;for(let Y of $){let L=SK(Y);if(!L)continue;let V=pO(G,L);if(V>X)Z=Y,X=V}return Z}function m9(){let _=getComputedStyle(document.documentElement),$=(U,E)=>{for(let D of U){let H=_.getPropertyValue(D).trim();if(H)return H}return E},j=$(["--text-primary","--color-text"],"#0f1419"),G=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),X=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),Y=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),L=$(["--accent-color","--color-accent"],"#1d9bf0"),V=$(["--success-color","--color-success"],"#00ba7c"),K=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),Q=$(["--danger-color","--color-error"],"#f4212e"),q=$(["--border-color","--color-border"],"#eff3f4"),B=$(["--font-family"],"system-ui, sans-serif"),N=rO(L,[j,Z],j);return{fg:j,fgMuted:G,bgPrimary:Z,bg:X,bgEmphasis:Y,accent:L,good:V,warning:K,attention:Q,border:q,fontFamily:B,buttonTextColor:N}}function uK(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:G,accent:Z,good:X,warning:Y,attention:L,border:V,fontFamily:K}=m9();return{fontFamily:K,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}},emphasis:{backgroundColor:G,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:X,subtle:X},warning:{default:Y,subtle:Y},attention:{default:L,subtle:L}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:V},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var nO=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),gK=!1,B8=null,bK=!1;function c9(_){_.querySelector(".adaptive-card-notice")?.remove()}function dO(_,$,j="error"){c9(_);let G=document.createElement("div");G.className=`adaptive-card-notice adaptive-card-notice-${j}`,G.textContent=$,_.appendChild(G)}function iO(_,$=(j)=>Z1(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function oO(_=($)=>Z1($,null)){return($,j)=>{try{let G=iO($,_);j.outputHtml=G.outputHtml,j.didProcess=G.didProcess}catch(G){console.error("[adaptive-card] Failed to process markdown:",G),j.outputHtml=String($??""),j.didProcess=!1}}}function sO(_){if(bK||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=oO(),bK=!0}async function aO(){if(gK)return;if(B8)return B8;return B8=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{gK=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),B8}function tO(){return globalThis.AdaptiveCards}function eO(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function _J(_){return nO.has(_)}function h9(_){if(!Array.isArray(_))return[];return _.filter(eO)}function $J(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",G=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:G,raw:_}}function l9(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>l9($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,G])=>`${j}: ${l9(G)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function jJ(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return l9($);return typeof $==="string"?$:String($)}function GJ(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,G=(Z)=>{if(Array.isArray(Z))return Z.map((L)=>G(L));if(!Z||typeof Z!=="object")return Z;let Y={...Z};if(typeof Y.id==="string"&&Y.id in j&&String(Y.type||"").startsWith("Input."))Y.value=jJ(Y.type,j[Y.id],Y);for(let[L,V]of Object.entries(Y))if(Array.isArray(V)||V&&typeof V==="object")Y[L]=G(V);return Y};return G(_)}function ZJ(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function XJ(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,G=j&&typeof j.title==="string"?j.title.trim():"",Z=ZJ(_.completed_at||j?.submitted_at),X=[G||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:X}}async function vK(_,$,j){if(!_J($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await aO()}catch(G){return console.error("[adaptive-card] Failed to load SDK:",G),!1}try{let G=tO();sO(G);let Z=new G.AdaptiveCard,X=m9();Z.hostConfig=new G.HostConfig(uK());let Y=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,L=$.state==="active"?$.payload:GJ($.payload,Y);Z.parse(L),Z.onExecuteAction=(Q)=>{let q=$J(Q);if(j?.onAction)c9(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(q)).catch((B)=>{console.error("[adaptive-card] Action failed:",B);let N=B instanceof Error?B.message:String(B||"Action failed.");dO(_,N||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",q)};let V=Z.render();if(!V)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",X.buttonTextColor);let K=XJ($);if(K){_.classList.add("adaptive-card-finished");let Q=document.createElement("div");Q.className=`adaptive-card-status adaptive-card-status-${$.state}`;let q=document.createElement("span");if(q.className="adaptive-card-status-label",q.textContent=K.label,Q.appendChild(q),K.detail){let B=document.createElement("span");B.className="adaptive-card-status-detail",B.textContent=K.detail,Q.appendChild(B)}_.appendChild(Q)}if(c9(_),_.appendChild(V),K)RK(V);return!0}catch(G){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,G),!1}}w0();S2();function mK({src:_,onClose:$}){return u(()=>{let j=(G)=>{if(G.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),F`
        <${n$} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${n$}>
    `}var F8=0,p9=null,w5={activePostId:null,speaking:!1},r9=new Set;function d9(_={}){return _.window??(typeof window<"u"?window:null)}function cK(_={}){return d9(_)?.speechSynthesis||null}function n9(){let _={...w5};for(let $ of r9)try{$(_)}catch(j){console.warn("[post-speech] playback listener failed:",j)}}function i9(){return{...w5}}function lK(_){if(typeof _!=="function")return()=>{};return r9.add(_),_(i9()),()=>r9.delete(_)}function hK(_={}){let $=d9(_);return Boolean($&&$.speechSynthesis&&typeof $.SpeechSynthesisUtterance==="function")}function pK(_){let $=Q8(_);if(!$)return"";return String($).replace(/```[\s\S]*?```/g," Code block omitted. ").replace(/`([^`]+)`/g,"$1").replace(/!\[([^\]]*)\]\(([^)]+)\)/g,"$1").replace(/\[([^\]]+)\]\(([^)]+)\)/g,"$1").replace(/^#{1,6}\s+/gm,"").replace(/^>\s?/gm,"").replace(/^[-*+]\s+/gm,"• ").replace(/\n{3,}/g,`

`).replace(/\n\n+/g,". ").replace(/\s+/g," ").replace(/\s+([.,;:!?])/g,"$1").trim().slice(0,1600)}function rK(_={}){let $=cK(_);if(F8+=1,p9=null,w5={activePostId:null,speaking:!1},$)try{$.cancel()}catch(j){console.warn("[post-speech] cancel failed:",j)}n9()}function nK(_,$,j={}){let G=d9(j),Z=cK(j);if(!G||!Z||typeof G.SpeechSynthesisUtterance!=="function")return!1;let X=String($||"").trim();if(!X)return!1;let Y=F8+1;F8=Y;try{Z.cancel()}catch{}let L=new G.SpeechSynthesisUtterance(X);p9=L,w5={activePostId:_,speaking:!0},n9();let V=()=>{if(Y!==F8)return;p9=null,w5={activePostId:null,speaking:!1},n9()};L.onend=V,L.onerror=V;try{return Z.speak(L),!0}catch(K){return console.warn("[post-speech] speak failed:",K),V(),!1}}async function iK(_,$){try{return await _?.writeText?.($),!0}catch(j){return!1}}function o9(_,$){let j=typeof $?.text==="string"?$.text:"",G=typeof $?.html==="string"?$.html:"";if(!_||!j||typeof _.createElement!=="function"||typeof _.execCommand!=="function")return!1;let Z=null,X=!1,Y=(L)=>{let V=L?.clipboardData;if(!V||typeof V.setData!=="function")return;if(V.setData("text/plain",j),G)V.setData("text/html",G);if(typeof L.preventDefault==="function")L.preventDefault();X=!0};try{if(Z=_.createElement("textarea"),Z.value=j,typeof Z.setAttribute==="function")Z.setAttribute("readonly","");if(Z.style)Z.style.position="fixed",Z.style.opacity="0",Z.style.pointerEvents="none";if(_.body?.appendChild?.(Z),typeof Z.select==="function")Z.select();if(typeof Z.setSelectionRange==="function")Z.setSelectionRange(0,Z.value.length);_.addEventListener?.("copy",Y,!0);let L=_.execCommand("copy");return Boolean(X||L)}catch{return!1}finally{if(_.removeEventListener?.("copy",Y,!0),Z)_.body?.removeChild?.(Z)}}function dK(_){if(!_||typeof _!=="object")return null;let $=_;if(typeof $.nodeType==="number"&&$.nodeType===3)return $.parentNode||null;return $}function oK(_,$){let j=_?.clipboardData,G=$?.root,Z=$?.selection;if(!j||typeof j.setData!=="function"||!G||!Z)return!1;if(Z.isCollapsed)return!1;let X=!1;if(Number(Z.rangeCount||0)>0&&typeof Z.getRangeAt==="function")try{let V=Z.getRangeAt(0);if(V&&typeof V.intersectsNode==="function")X=Boolean(V.intersectsNode(G))}catch{X=!1}if(!X&&typeof G.contains==="function"){let V=dK(Z.anchorNode),K=dK(Z.focusNode);X=Boolean(V&&G.contains(V)||K&&G.contains(K))}if(!X)return!1;let L=typeof Z.toString==="function"?String(Z.toString()||"").replace(/\u00a0/g," "):"";if(!L)return!1;return j.setData("text/plain",L),_?.preventDefault?.(),!0}function sK(_,$){try{return Boolean(_?.getItem?.($))}catch(j){return!1}}function aK(_,$,j){try{return _?.setItem?.($,j),!0}catch(G){return!1}}function tK(_,$){let j=typeof _==="string"&&_.trim()?_.trim():null;if(j)return j;if(!$)return null;try{return new URL($).hostname}catch(G){return $}}function YJ({mediaId:_,onPreview:$}){let[j,G]=C(null);if(u(()=>{M2(_).then(G).catch((K)=>{console.warn("[post] Failed to load attachment metadata for file card:",_,K)})},[_]),!j)return null;let Z=j.filename||"file",X=j.metadata?.size,Y=X?a_(X):"",V=y5(j.content_type,j.filename)!=="unsupported";return F`
        <div class="file-attachment" onClick=${(K)=>K.stopPropagation()}>
            <a href=${u1(_)} download=${Z} class="file-attachment-main">
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
            ${V&&F`
                <button
                    class="file-attachment-preview"
                    type="button"
                    onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),$?.({mediaId:_,info:j})}}
                >
                    Preview
                </button>
            `}
        </div>
    `}function LJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="recovery_marker"&&$.recovered)}function KJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="timeout_marker"&&($.timed_out??!0))}function VJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="turn_outcome_marker")}function qJ(_){if(!Array.isArray(_))return[];return _.filter(($)=>$&&typeof $==="object"&&$.type==="peer_message")}function QJ(_){return String(_||"").split(/[:/]/).filter(Boolean).pop()||"agent"}function eK(_){let $=qJ(_)[0]||null;if(!$)return null;let j=typeof $.source_chat_jid==="string"?$.source_chat_jid.trim():"",G=typeof $.source_agent_name==="string"&&$.source_agent_name.trim()?$.source_agent_name.trim():QJ(j),Z=typeof $.target_chat_jid==="string"?$.target_chat_jid.trim():"",X=typeof $.target_agent_name==="string"?$.target_agent_name.trim():"",Y=typeof $.body==="string"?$.body:"";return{block:$,sourceChatJid:j,sourceAgentName:G,targetChatJid:Z,targetAgentName:X,body:Y}}function NJ(_,$){let j=eK($),G=typeof _==="string"?_:"";if(!j)return G;if(j.body&&j.body.trim())return j.body;let Z=j.sourceAgentName?j.sourceAgentName.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^\\s>]+",X=j.sourceChatJid?j.sourceChatJid.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"):"[^>\\n]+";return G.replace(new RegExp(`^from:\\s+@${Z}\\s+<jid:${X}>\\s*\\n\\n`,"i"),"")||G}var BJ={context_recover:"context limit exceeded",rate_limit:"rate limit hit",api_error:"API error",timeout:"request timeout",overloaded:"service overloaded",connection:"connection error"};function FJ(_){let $=Number(_?.attempts_used||0),j=String(_?.classifier||"").trim(),G=BJ[j]||(j?j.replace(/_/g," "):""),Z=["Recovered automatically"];if($>1)Z[0]=`Recovered after ${$} attempts`;if(G)Z.push(G);return Z.join(" — ")}function UJ(_){let $=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",j=_?.draft_recovered?" Showing recovered draft.":"";return $?`Turn timed out — ${$}${j}`:`Turn timed out before the model finished responding${j}`}function HJ({marker:_}){let[$,j]=C(!1),G=P((q)=>{q.stopPropagation(),j((B)=>!B)},[]),Z=typeof _?.title==="string"?_.title.trim():"",X=typeof _?.detail==="string"?_.detail.trim():"",Y=typeof _?.tool_action_summary==="string"?_.tool_action_summary.trim():"",L=_?.draft_recovered,V=String(_?.severity||"warning"),K=Y||Z||String(_?.label||_?.kind||"issue"),Q=Boolean(X||Z&&Y);return F`
        <div class=${`post-outcome-pill post-outcome-pill-${V}`}>
            <div class="post-outcome-pill-header" onClick=${Q?G:void 0}>
                ${Q&&F`
                    <span class=${`post-outcome-pill-toggle${$?" expanded":""}`} aria-hidden="true">▶</span>
                `}
                <span class="post-outcome-pill-label">${K}</span>
                ${L&&F`<span class="post-outcome-pill-badge">draft recovered</span>`}
            </div>
            ${$&&Q&&F`
                <div class="post-outcome-pill-detail">
                    ${Z&&F`<div><strong>${Z}</strong></div>`}
                    ${X&&X!==Z&&F`<div>${X}</div>`}
                </div>
            `}
        </div>
    `}function EJ({attachment:_,onPreview:$}){let j=Number(_?.id),[G,Z]=C(null);u(()=>{if(!Number.isFinite(j))return;M2(j).then(Z).catch((Q)=>{console.warn("[post] Failed to load attachment metadata for attachment pill:",j,Q)});return},[j]);let X=G?.filename||_.label||`attachment-${_.id}`,Y=Number.isFinite(j)?u1(j):null,L=y5(G?.content_type,G?.filename||_?.label),V=K8(L),K=L!=="unsupported";return F`
        <span class="attachment-pill" title=${X}>
            ${Y?F`
                    <a href=${Y} download=${X} class="attachment-pill-main" onClick=${(Q)=>Q.stopPropagation()}>
                        <${L1}
                            prefix="post"
                            label=${_.label}
                            title=${X}
                        />
                    </a>
                `:F`
                    <${L1}
                        prefix="post"
                        label=${_.label}
                        title=${X}
                    />
                `}
            ${Number.isFinite(j)&&G&&K&&F`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${V}
                    onClick=${(Q)=>{Q.preventDefault(),Q.stopPropagation(),$?.({mediaId:j,info:G})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function U8({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:G}=_,Z=G?T4(G):null;return F`
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
    `}function DJ({block:_}){let $=_.title||_.name||_.uri,j=_.description,G=_.size?a_(_.size):"",Z=_.mime_type||"",X=OJ(Z),Y=J4(_.uri);return F`
        <a
            href=${Y||"#"}
            class="resource-link"
            target=${Y?"_blank":void 0}
            rel=${Y?"noopener noreferrer":void 0}
            onClick=${(L)=>L.stopPropagation()}>
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
    `}function zJ({block:_}){let[$,j]=C(!1),G=_.uri||"Embedded resource",Z=_.text||"",X=Boolean(_.data),Y=_.mime_type||"";return F`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(L)=>{L.preventDefault(),L.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${G}
            </button>
            ${$&&F`
                ${Z&&F`<pre class="resource-embed-content">${Z}</pre>`}
                ${X&&F`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${Y&&F`<span class="resource-embed-blob-meta">${Y}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(L)=>{L.preventDefault(),L.stopPropagation();let V=new Blob([Uint8Array.from(atob(_.data),(q)=>q.charCodeAt(0))],{type:Y||"application/octet-stream"}),K=URL.createObjectURL(V),Q=document.createElement("a");Q.href=K,Q.download=G.split("/").pop()||"resource",Q.click(),URL.revokeObjectURL(K)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function WJ({block:_,post:$,onOpenWidget:j}){if(!_)return null;let G=f9(_,$),Z=pL(_),X=G?.artifact?.kind||_?.artifact?.kind||_?.kind||null,Y=G?.title||_.title||_.name||"Generated widget",L=G?.description||_.description||_.subtitle||"",V=_.open_label||"Open widget",K=g(!1),Q=(q)=>{if(q)q.preventDefault(),q.stopPropagation();if(!G)return;j?.(G)};return u(()=>{if(!_?.auto_open||!G||!Z||K.current)return;let q=$?.timestamp?new Date($.timestamp).getTime():0;if(q&&Date.now()-q>1e4)return;let B=`widget_opened_${_.widget_id||$?.id||""}`;if(sK(sessionStorage,B))return;K.current=!0,aK(sessionStorage,B,"1"),j?.(G)},[_?.auto_open,G,Z]),F`
        <div class="generated-widget-launch" onClick=${(q)=>q.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${X?` • ${String(X).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${Y}</div>
            </div>
            ${L&&F`<div class="generated-widget-launch-description">${L}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${Q}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${V}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function OJ(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function JJ(_){let $=J4(_,{allowDataImage:!0});return $?{backgroundImage:`url("${$}")`}:void 0}function AJ({preview:_}){let $=J4(_.url),j=JJ(_.image),G=tK(_.site_name,$);return F`
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
    `}function kJ(_,$){return typeof _==="string"?_:""}var _V=1800,yJ=40,MJ=24576,wJ=16,TJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,xJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,IJ=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`,CJ=`
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
</style>`;function PJ(_,$={}){let j=typeof _==="string"?_:"",G=j?j.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`):[],Z=new TextEncoder().encode(j).byteLength,X=Number.isFinite($.lineThreshold)?$.lineThreshold:yJ,Y=Number.isFinite($.byteThreshold)?$.byteThreshold:MJ,L=G.length>X||Z>Y,V=Math.min(G.length,Number.isFinite($.previewLines)?$.previewLines:wJ);return{shouldCollapse:L,lineCount:G.length,byteLength:Z,visibleLines:V,omittedLines:Math.max(0,G.length-V)}}async function $V(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(o9(document,{text:$}))return!0;if(await iK(navigator.clipboard,$))return!0;try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let G=document.execCommand("copy");return document.body.removeChild(j),G}catch{return!1}}async function fJ(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=Z1($,null),G=`<html><head>${CJ}</head><body>${j}</body></html>`;if(o9(document,{text:$,html:G}))return!0;if(navigator.clipboard?.write&&typeof ClipboardItem<"u")try{let Z=new ClipboardItem({"text/plain":new Blob([$],{type:"text/plain"}),"text/html":new Blob([G],{type:"text/html"})});return await navigator.clipboard.write([Z]),!0}catch(Z){console.warn("[post] Rich clipboard write failed, falling back to plain text copy.",Z)}return $V($)}function RJ(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,G=[],Z=(Y)=>{let L=window.getSelection?.();if(!L||L.isCollapsed)return;for(let V of $)if(oK(Y,{root:V,selection:L}))return};document.addEventListener("copy",Z,!0),G.push(()=>document.removeEventListener("copy",Z,!0));let X=(Y,L)=>{let V=L||"idle";if(Y.dataset.copyState=V,V==="success")Y.innerHTML=xJ,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(V==="error")Y.innerHTML=IJ,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=TJ,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let L=document.createElement("div");L.className="post-code-block";let V=Y.querySelector("code"),K=PJ(V?.textContent||"");if(K.shouldCollapse){L.classList.add("post-code-block-collapsed"),L.style.setProperty("--post-code-preview-lines",String(K.visibleLines));let B=document.createElement("button");B.type="button",B.className="post-code-expand-btn";let N=()=>{let E=L.classList.contains("post-code-block-expanded");B.textContent=E?"▴ Collapse output":`▸ Expand output · ${K.lineCount.toLocaleString()} lines · ${a_(K.byteLength)}${K.omittedLines?` · ${K.omittedLines.toLocaleString()} hidden`:""}`,B.setAttribute("aria-expanded",E?"true":"false")},U=(E)=>{E.preventDefault(),E.stopPropagation(),L.classList.toggle("post-code-block-expanded"),N()};B.addEventListener("click",U),N(),L.appendChild(B),G.push(()=>B.removeEventListener("click",U))}Y.parentNode?.insertBefore(L,Y),L.appendChild(Y);let Q=document.createElement("button");Q.type="button",Q.className="post-code-copy-btn",X(Q,"idle"),L.appendChild(Q);let q=async(B)=>{B.preventDefault(),B.stopPropagation();let U=Y.querySelector("code")?.textContent||"",E=await $V(U);X(Q,E?"success":"error");let D=j.get(Q);if(D)clearTimeout(D);let H=setTimeout(()=>{X(Q,"idle"),j.delete(Q)},_V);j.set(Q,H)};Q.addEventListener("click",q),G.push(()=>{Q.removeEventListener("click",q);let B=j.get(Q);if(B)clearTimeout(B);if(L.parentNode)L.parentNode.insertBefore(Y,L),L.remove()})}),()=>{G.forEach((Y)=>Y())}}function jV(_){let $=String(_||"").trim(),j=$.match(/^`([^`]+)`$/);return(j?j[1]:$).trim()}function SJ(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Files:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,fileRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=jV(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,fileRefs:Z}}function uJ(_){if(!_)return{content:_,folderRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Folders:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,folderRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=jV(K.replace(/^\s*-\s+/,"").trim());if(Q)Z.push(Q)}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,folderRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,folderRefs:Z}}function gJ(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1)if(j[K].trim()==="Referenced messages:"&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}if(G===-1)return{content:_,messageRefs:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let q=K.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(q)Z.push(q[1])}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,messageRefs:Z}}function bJ(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),G=-1;for(let K=0;K<j.length;K+=1){let Q=j[K].trim();if((Q==="Images:"||Q==="Attachments:")&&j[K+1]&&/^\s*-\s+/.test(j[K+1])){G=K;break}}if(G===-1)return{content:_,attachments:[]};let Z=[],X=G+1;for(;X<j.length;X+=1){let K=j[X];if(/^\s*-\s+/.test(K)){let Q=K.replace(/^\s*-\s+/,"").trim(),q=Q.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||Q.match(/^attachment:([^\s]+)\s+(.+)$/i);if(q){let B=q[1],N=(q[2]||"").trim()||B;Z.push({id:B,label:N,raw:Q})}else Z.push({id:null,label:Q,raw:Q})}else if(!K.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let Y=j.slice(0,G),L=j.slice(X),V=[...Y,...L].join(`
`);return V=V.replace(/\n{3,}/g,`

`).trim(),{content:V,attachments:Z}}function vJ(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function mJ(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let G=j.map(vJ).sort((Q,q)=>q.length-Q.length),Z=new RegExp(`(${G.join("|")})`,"gi"),X=new RegExp(`^(${G.join("|")})$`,"i"),Y=new DOMParser().parseFromString(_,"text/html"),L=Y.createTreeWalker(Y.body,NodeFilter.SHOW_TEXT),V=[],K;while(K=L.nextNode())V.push(K);for(let Q of V){let q=Q.nodeValue;if(!q||!Z.test(q)){Z.lastIndex=0;continue}Z.lastIndex=0;let B=Q.parentElement;if(B&&B.closest("code, pre, script, style"))continue;let N=q.split(Z).filter((E)=>E!=="");if(N.length===0)continue;let U=Y.createDocumentFragment();for(let E of N)if(X.test(E)){let D=Y.createElement("mark");D.className="search-highlight-term",D.textContent=E,U.appendChild(D)}else U.appendChild(Y.createTextNode(E));Q.parentNode.replaceChild(U,Q)}return Y.body.innerHTML}function GV({post:_,onClick:$,onHashtagClick:j,onMessageRef:G,onScrollToMessage:Z,agentName:X,agentAvatarUrl:Y,userName:L,userAvatarUrl:V,userAvatarBackground:K,onDelete:Q,isThreadReply:q,isThreadPrev:B,isThreadNext:N,isRemoving:U,highlightQuery:E,onFileRef:D,onOpenWidget:H,onOpenAttachmentPreview:M}){let[J,W]=C(null),[T,x]=C("idle"),[A,k]=C(()=>i9()),O=g(null),z=g(null),y=_.data,I=y.type==="agent_response",R=L||"You",f=I?X||zK:R,v=typeof _.chat_agent_name==="string"?_.chat_agent_name.trim():"",l=Boolean(I&&E&&v&&v!==f),h=I?u9(X,Y,!0):u9(R,V),n=typeof K==="string"?K.trim().toLowerCase():"",b=!I&&h.image&&(n==="clear"||n==="transparent"),$0=I&&Boolean(h.image),E0=`background-color: ${b||$0?"transparent":h.color}`,V0=y.content_meta,K0=Boolean(V0?.truncated),X0=Boolean(V0?.preview),F0=K0&&!X0,_0=K0?{originalLength:Number.isFinite(V0?.original_length)?V0.original_length:y.content?y.content.length:0,maxLength:Number.isFinite(V0?.max_length)?V0.max_length:0}:null,Y0=y.content_blocks||[],Q0=y.media_ids||[],J0=eK(Y0),s=Boolean(J0?.sourceAgentName),j0=kJ(y.content,y.link_previews);j0=NJ(j0,Y0);let{content:z0,fileRefs:C0}=SJ(j0),{content:h0,folderRefs:n0}=uJ(z0),{content:G_,messageRefs:m0}=gJ(h0),a0=(i)=>{i?.preventDefault?.(),i?.stopPropagation?.(),G?.(_.id,_.chat_jid||null)},S0=(i)=>{if(i.key==="Enter"||i.key===" ")a0(i)},{content:o0,attachments:c0}=bJ(G_);j0=o0;let d0=h9(Y0),r0=v9(Y0),t0=LJ(Y0)[0]||null,O0=KJ(Y0)[0]||null,e0=VJ(Y0)[0]||null,D_=d0.length===1&&typeof d0[0]?.fallback_text==="string"?d0[0].fallback_text.trim():"",H0=r0.length===1?q8(r0[0]).trim():"",u0=Boolean(D_)&&j0?.trim()===D_||Boolean(H0)&&j0?.trim()===H0,T0=Boolean(j0)&&!F0&&!u0,i0=typeof E==="string"?E.trim():"",A_=Z0(()=>{if(!j0||u0)return"";let i=Z1(j0,j);return i0?mJ(i,i0):i},[j0,u0,i0]),K_=Z0(()=>Q8(_),[_]),H_=Z0(()=>hK(),[]),E_=Z0(()=>pK(_),[_]),y_=Boolean(A.speaking&&A.activePostId===_.id),I_=(i,W0)=>{i.stopPropagation(),W(u1(W0))},u_=(i)=>{M?.(i)},e=(i)=>{i.stopPropagation(),Q?.(_)},A0=async(i)=>{i.stopPropagation();let W0=await fJ(K_);if(x(W0?"success":"error"),z.current)clearTimeout(z.current);z.current=setTimeout(()=>{z.current=null,x("idle")},_V)},k0=(i)=>{if(i.stopPropagation(),y_){rK();return}nK(_.id,E_)},d=(i,W0)=>{let X_=new Set;if(!i||W0.length===0)return{content:i,usedIds:X_};return{content:i.replace(/attachment:([^\s)"']+)/g,(p_,B1,g_,J1)=>{let C_=B1.replace(/^\/+/,""),A1=W0.find((k_)=>k_.name&&k_.name.toLowerCase()===C_.toLowerCase()&&!X_.has(k_.id))||W0.find((k_)=>!X_.has(k_.id));if(!A1)return p_;if(X_.add(A1.id),J1.slice(Math.max(0,g_-2),g_)==="](")return`/media/${A1.id}`;return A1.name||"attachment"}),usedIds:X_}},o=[],a=[],G0=[],L0=[],M0=[],b0=[],P0=[],g0=0;if(Y0.length>0)Y0.forEach((i)=>{if(i?.type==="text"&&i.annotations)P0.push(i.annotations);if(i?.type==="generated_widget")b0.push(i);else if(i?.type==="resource_link")L0.push(i);else if(i?.type==="resource")M0.push(i);else if(i?.type==="file"){let W0=Q0[g0++];if(W0)a.push(W0),G0.push({id:W0,name:i?.name||i?.filename||i?.title})}else if(i?.type==="image"||!i?.type){let W0=Q0[g0++];if(W0){let X_=typeof i?.mime_type==="string"?i.mime_type:void 0;o.push({id:W0,annotations:i?.annotations,mimeType:X_}),G0.push({id:W0,name:i?.name||i?.filename||i?.title})}}});else if(Q0.length>0){let i=c0.length>0;Q0.forEach((W0,X_)=>{let V_=c0[X_]||null;if(G0.push({id:W0,name:V_?.label||null}),i)a.push(W0);else o.push({id:W0,annotations:null})})}if(c0.length>0)c0.forEach((i)=>{if(!i?.id)return;let W0=G0.find((X_)=>String(X_.id)===String(i.id));if(W0&&!W0.name)W0.name=i.label});let{content:I0,usedIds:D0}=d(j0,G0);j0=I0;let f0=o.filter(({id:i})=>!D0.has(i)),Z_=a.filter((i)=>!D0.has(i)),__=c0.length>0?c0.map((i,W0)=>({id:i.id||`attachment-${W0+1}`,label:i.label||`attachment-${W0+1}`})):G0.map((i,W0)=>({id:i.id,label:i.name||`attachment-${W0+1}`})),F_=Z0(()=>h9(Y0),[Y0]),v0=Z0(()=>v9(Y0),[Y0]),W_=Z0(()=>{return F_.map((i)=>`${i.card_id}:${i.state}`).join("|")},[F_]);u(()=>{if(!O.current)return;return E$(O.current),RJ(O.current)},[A_]),u(()=>{return lK((i)=>{k(i)})},[]),u(()=>()=>{if(z.current)clearTimeout(z.current)},[]);let z_=g(null);return u(()=>{if(!z_.current||F_.length===0)return;let i=z_.current;i.innerHTML="";for(let W0 of F_){let X_=document.createElement("div");i.appendChild(X_),vK(X_,W0,{onAction:async(V_)=>{if(V_.type==="Action.OpenUrl"){let p_=J4(V_.url||"");if(!p_)throw Error("Invalid URL");window.open(p_,"_blank","noopener,noreferrer");return}if(V_.type==="Action.Submit"){await W7({post_id:_.id,thread_id:y.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:W0.card_id,action:{type:V_.type,title:V_.title||"",data:V_.data}});return}console.warn("[post] unsupported adaptive card action:",V_.type,V_)}}).catch((V_)=>{console.error("[post] adaptive card render error:",V_),X_.textContent=W0.fallback_text||"Card failed to render."})}},[W_,_.id]),F`
        <div id=${`post-${_.id}`} class="post ${I?"agent-post":""} ${q?"thread-reply":""} ${B?"thread-prev":""} ${N?"thread-next":""} ${U?"removing":""}" onClick=${$}>
            <div class="post-avatar ${I?"agent-avatar":""} ${h.image?"has-image":""}" style=${E0}>
                ${h.image?F`<img src=${h.image} alt=${f} />`:h.letter}
            </div>
            <div class="post-body">
                <div class="post-actions">
                    ${I&&H_&&E_&&F`
                        <button
                            class=${`post-action-btn post-speak-btn${y_?" is-active":""}`}
                            type="button"
                            title=${y_?"Stop reading aloud":"Read aloud"}
                            aria-label=${y_?"Stop reading aloud":"Read aloud"}
                            onClick=${k0}
                        >
                            ${y_?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="6" y="6" width="12" height="12" rx="2"></rect></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M11 5 6 9H3v6h3l5 4z"></path><path d="M15.5 8.5a5 5 0 0 1 0 7"></path><path d="M18 6a8.5 8.5 0 0 1 0 12"></path></svg>`}
                        </button>
                    `}
                    <button
                        class=${`post-action-btn post-copy-btn${T==="success"?" is-success":T==="error"?" is-error":""}`}
                        type="button"
                        title=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        aria-label=${T==="success"?"Copied":T==="error"?"Copy failed":"Copy message"}
                        onClick=${A0}
                        disabled=${!K_}
                    >
                        ${T==="success"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 6L9 17l-5-5"></path></svg>`:T==="error"?F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="12" cy="12" r="9"></circle><path d="M9 9l6 6M15 9l-6 6"></path></svg>`:F`<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><rect x="9" y="9" width="10" height="10" rx="2"></rect><path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path></svg>`}
                    </button>
                    <button
                        class="post-action-btn post-delete-btn"
                        type="button"
                        title="Delete message"
                        aria-label="Delete message"
                        onClick=${e}
                    >
                        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                            <path d="M18 6L6 18M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="post-meta">
                    <span class="post-author">${f}</span>
                    ${s&&F`
                        <span
                            class="post-chat-agent-tag"
                            title=${`From ${J0?.sourceChatJid||""}`.trim()}
                        >
                            @${J0?.sourceAgentName}
                        </span>
                    `}
                    ${l&&F`
                        <span
                            class="post-chat-agent-tag"
                            role="button"
                            tabIndex="0"
                            style="cursor:pointer"
                            title=${`Open ${v} and reference this message`}
                            onClick=${a0}
                            onKeyDown=${S0}
                        >
                            @${v}
                        </span>
                    `}
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${a0}>${VX(_.timestamp)}</a>
                    ${t0&&F`
                        <span
                            class="post-recovery-chip"
                            title=${FJ(t0)}
                        >
                            recovered
                        </span>
                    `}
                    ${O0&&F`
                        <span
                            class="post-recovery-chip post-timeout-chip"
                            title=${UJ(O0)}
                        >
                            timeout
                        </span>
                    `}
                    ${e0&&F`
                        <span
                            class=${`post-recovery-chip post-outcome-chip post-outcome-chip-${String(e0.severity||"warning")}${e0.kind==="tool_budget"?" post-outcome-chip-tool-budget":""}`}
                            title=${String(e0.label||e0.kind||"issue")}
                        >
                            ${String(e0.label||e0.kind||"issue")}
                        </span>
                    `}
                </div>
                ${e0&&F`
                    <${HJ} marker=${e0} />
                `}
                ${F0&&_0&&F`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${B5(_0.originalLength)} chars
                            ${_0.maxLength?F` • Display limit: ${B5(_0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${X0&&_0&&F`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${B5(_0.maxLength)} of ${B5(_0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(C0.length>0||n0.length>0||m0.length>0||__.length>0)&&F`
                    <div class="post-file-refs">
                        ${m0.map((i)=>{let W0=(X_)=>{if(X_.preventDefault(),X_.stopPropagation(),Z)Z(i,_.chat_jid||null);else{let V_=document.getElementById("post-"+i);if(V_)V_.scrollIntoView({behavior:"smooth",block:"center"}),V_.classList.add("post-highlight"),setTimeout(()=>V_.classList.remove("post-highlight"),2000)}};return F`
                                <a href=${`#msg-${i}`} class="post-msg-pill-link" onClick=${W0}>
                                    <${L1}
                                        prefix="post"
                                        label=${"msg:"+i}
                                        title=${"Message "+i}
                                        icon="message"
                                        onClick=${W0}
                                    />
                                </a>
                            `})}
                        ${C0.map((i)=>{let W0=i.split("/").pop()||i;return F`
                                <${L1}
                                    prefix="post"
                                    label=${W0}
                                    title=${i}
                                    onClick=${()=>D?.(i)}
                                />
                            `})}
                        ${n0.map((i)=>{let W0=i.split("/").pop()||i;return F`
                                <${L1}
                                    prefix="post"
                                    label=${W0}
                                    title=${i}
                                    icon="folder"
                                />
                            `})}
                        ${__.map((i)=>F`
                            <${EJ}
                                key=${i.id}
                                attachment=${i}
                                onPreview=${u_}
                            />
                        `)}
                    </div>
                `}
                ${T0&&F`
                    <div 
                        ref=${O}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:A_}}
                        onClick=${(i)=>{if(i.target.classList.contains("hashtag")){i.preventDefault(),i.stopPropagation();let W0=i.target.dataset.hashtag;if(W0)j?.(W0)}else if(i.target.tagName==="IMG")i.preventDefault(),i.stopPropagation(),W(i.target.src)}}
                    />
                `}
                ${F_.length>0&&F`
                    <div ref=${z_} class="post-adaptive-cards" />
                `}
                ${v0.length>0&&F`
                    <div class="post-adaptive-card-submissions">
                        ${v0.map((i,W0)=>{let X_=IK(i),V_=`${i.card_id}-${W0}`;return F`
                                <div key=${V_} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${X_.title}</span>
                                        </div>
                                    </div>
                                    ${X_.fields.length>0&&F`
                                        <div class="adaptive-card-submission-fields">
                                            ${X_.fields.map((p_)=>F`
                                                <span class="adaptive-card-submission-field" title=${`${p_.key}: ${p_.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${p_.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${p_.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${T4(X_.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${b0.length>0&&F`
                    <div class="generated-widget-launches">
                        ${b0.map((i,W0)=>F`
                            <${WJ}
                                key=${i.widget_id||i.id||`${_.id}-widget-${W0}`}
                                block=${i}
                                post=${_}
                                onOpenWidget=${H}
                            />
                        `)}
                    </div>
                `}
                ${P0.length>0&&F`
                    ${P0.map((i,W0)=>F`
                        <${U8} key=${W0} annotations=${i} />
                    `)}
                `}
                ${f0.length>0&&F`
                    <div class="media-preview">
                        ${f0.map(({id:i,mimeType:W0})=>{let V_=typeof W0==="string"&&W0.toLowerCase().startsWith("image/svg")?u1(i):J7(i);return F`
                                <img
                                    key=${i}
                                    src=${V_}
                                    alt="Media"
                                    loading="lazy"
                                    decoding="async"
                                    onClick=${(p_)=>I_(p_,i)}
                                />
                            `})}
                    </div>
                `}
                ${f0.length>0&&F`
                    ${f0.map(({annotations:i},W0)=>F`
                        ${i&&F`<${U8} key=${W0} annotations=${i} />`}
                    `)}
                `}
                ${Z_.length>0&&F`
                    <div class="file-attachments">
                        ${Z_.map((i)=>F`
                            <${YJ} key=${i} mediaId=${i} onPreview=${u_} />
                        `)}
                    </div>
                `}
                ${L0.length>0&&F`
                    <div class="resource-links">
                        ${L0.map((i,W0)=>F`
                            <div key=${W0}>
                                <${DJ} block=${i} />
                                <${U8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${M0.length>0&&F`
                    <div class="resource-embeds">
                        ${M0.map((i,W0)=>F`
                            <div key=${W0}>
                                <${zJ} block=${i} />
                                <${U8} annotations=${i.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${y.link_previews?.length>0&&F`
                    <div class="link-previews">
                        ${y.link_previews.map((i,W0)=>F`
                            <${AJ} key=${W0} preview=${i} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${J&&F`<${mK} src=${J} onClose=${()=>W(null)} />`}

    `}function ZV({posts:_,hasMore:$,onLoadMore:j,onPostClick:G,onHashtagClick:Z,onMessageRef:X,onScrollToMessage:Y,onFileRef:L,onOpenWidget:V,onOpenAttachmentPreview:K,emptyMessage:Q,timelineRef:q,agents:B,user:N,onDeletePost:U,reverse:E=!0,removingPostIds:D,searchQuery:H}){let[M,J]=C(!1),W=g(null),T=typeof IntersectionObserver<"u",x=P(async()=>{if(!j||!$||M)return;J(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{J(!1)}},[$,M,j]),A=P((v)=>{let{scrollTop:l,scrollHeight:h,clientHeight:n}=v.target,b=E?h-n-l:l,$0=Math.max(300,n);if(b<$0)x()},[E,x]);u(()=>{if(!T)return;let v=W.current,l=q?.current;if(!v||!l)return;let h=300,n=new IntersectionObserver((b)=>{for(let $0 of b){if(!$0.isIntersecting)continue;x()}},{root:l,rootMargin:`${h}px 0px ${h}px 0px`,threshold:0});return n.observe(v),()=>n.disconnect()},[T,$,j,q,x]);let k=g(x);if(k.current=x,u(()=>{if(T)return;if(!q?.current)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=q.current,n=E?l-h-v:v,b=Math.max(300,h);if(n<b)k.current?.()},[T,_,$,E,q]),u(()=>{if(!q?.current)return;if(!$||M)return;let{scrollTop:v,scrollHeight:l,clientHeight:h}=q.current,n=E?l-h-v:v,b=Math.max(300,h);if(l<=h+1||n<b)k.current?.()},[_,$,M,E,q]),!_)return F`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return F`
            <div class="timeline" ref=${q}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${Q||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let O=_.slice().sort((v,l)=>v.id-l.id),z=(v)=>{let l=v?.data?.thread_id;if(l===null||l===void 0||l==="")return null;let h=Number(l);return Number.isFinite(h)?h:null},y=new Map;for(let v=0;v<O.length;v+=1){let l=O[v],h=Number(l?.id),n=z(l);if(n!==null){let b=y.get(n)||{anchorIndex:-1,replyIndexes:[]};b.replyIndexes.push(v),y.set(n,b)}else if(Number.isFinite(h)){let b=y.get(h)||{anchorIndex:-1,replyIndexes:[]};b.anchorIndex=v,y.set(h,b)}}let I=new Map;for(let[v,l]of y.entries()){let h=new Set;if(l.anchorIndex>=0)h.add(l.anchorIndex);for(let n of l.replyIndexes)h.add(n);I.set(v,Array.from(h).sort((n,b)=>n-b))}let R=O.map((v,l)=>{let h=z(v);if(h===null)return{hasThreadPrev:!1,hasThreadNext:!1};let n=I.get(h);if(!n||n.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let b=n.indexOf(l);if(b<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:b>0,hasThreadNext:b<n.length-1}}),f=F`<div class="timeline-sentinel" ref=${W}></div>`;return F`
        <div class="timeline ${E?"reverse":"normal"}" ref=${q} onScroll=${A}>
            <div class="timeline-content">
                ${E?f:null}
                ${O.map((v,l)=>{let h=Boolean(v.data?.thread_id&&v.data.thread_id!==v.id),n=D?.has?.(v.id),b=R[l]||{};return F`
                    <${GV}
                        key=${v.id}
                        post=${v}
                        isThreadReply=${h}
                        isThreadPrev=${b.hasThreadPrev}
                        isThreadNext=${b.hasThreadNext}
                        isRemoving=${n}
                        highlightQuery=${H}
                        agentName=${WK(v.data?.agent_id,B||{})}
                        agentAvatarUrl=${OK(v.data?.agent_id,B||{})}
                        userName=${N?.name||N?.user_name}
                        userAvatarUrl=${N?.avatar_url||N?.avatarUrl||N?.avatar}
                        userAvatarBackground=${N?.avatar_background||N?.avatarBackground}
                        onClick=${()=>G?.(v)}
                        onHashtagClick=${Z}
                        onMessageRef=${X}
                        onScrollToMessage=${Y}
                        onFileRef=${L}
                        onOpenWidget=${V}
                        onDelete=${U}
                        onOpenAttachmentPreview=${K}
                    />
                `})}
                ${E?null:f}
            </div>
        </div>
    `}w0();P_();function XV(_){try{return _?.focus?.(),_?.select?.(),!0}catch($){return!1}}var H8="workspaceExplorerScale",cJ=["compact","default","comfortable"],lJ=new Set(cJ),hJ={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function YV(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return lJ.has(j)?j:$}function s9(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),G=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||G&&j}}function pJ(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function rJ(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function a9(_={}){let $=pJ(_),j=_.stored?YV(_.stored,$):$;return rJ(j,_)}function LV(_){return hJ[YV(_)]}G9();function nJ(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function t9(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let G=$({path:j,mode:"edit"});if(!G||typeof G!=="object")return!1;return G.id!=="editor"}function KV(_,$,j={}){let G=j.resolvePane;if(t9(_,G))return!0;return nJ($)}var BV=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function dJ(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return t9($,(j)=>Y_.resolve(j))}function FV(_,$,j,G=0,Z=[]){if(!j&&BV(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:G}),_.type==="dir"&&_.children&&$.has(_.path))for(let X of _.children)FV(X,$,j,G+1,Z);return Z}function VV(_,$,j){if(!_)return"";let G=[],Z=(X)=>{if(!j&&BV(X))return;if(G.push(X.type==="dir"?`d:${X.path}`:`f:${X.path}`),X.children&&$?.has(X.path))for(let Y of X.children)Z(Y)};return Z(_),G.join("|")}function jj(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,G=Array.isArray($.children)?$.children:null;if(!G)return _;let Z=j?new Map(j.map((L)=>[L?.path,L])):new Map,X=!j||j.length!==G.length,Y=G.map((L)=>{let V=jj(Z.get(L.path),L);if(V!==Z.get(L.path))X=!0;return V});return X?{...$,children:Y}:_}function _j(_,$,j){if(!_)return _;if(_.path===$)return jj(_,j);if(!Array.isArray(_.children))return _;let G=!1,Z=_.children.map((X)=>{let Y=_j(X,$,j);if(Y!==X)G=!0;return Y});return G?{..._,children:Z}:_}var UV=4,e9=14,iJ=16;function HV(_){if(!_)return 0;if(_.type==="file"){let G=Math.max(0,Number(_.size)||0);return _.__bytes=G,G}let $=Array.isArray(_.children)?_.children:[],j=0;for(let G of $)j+=HV(G);return _.__bytes=j,j}function EV(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),G={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=UV)return G;let Z=Array.isArray(_.children)?_.children:[],X=[];for(let L of Z){let V=Math.max(0,Number(L?.__bytes??L?.size??0));if(V<=0)continue;if(L.type==="dir")X.push({kind:"dir",node:L,size:V});else X.push({kind:"file",name:L.name,path:L.path,size:V})}X.sort((L,V)=>V.size-L.size);let Y=X;if(X.length>e9){let L=X.slice(0,e9-1),V=X.slice(e9-1),K=V.reduce((Q,q)=>Q+q.size,0);L.push({kind:"other",name:`+${V.length} more`,path:`${G.path}/[other]`,size:K}),Y=L}return G.children=Y.map((L)=>{if(L.kind==="dir")return EV(L.node,$+1);return{name:L.name,path:L.path,size:L.size,children:[]}}),G}function qV(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function DV(_,$,j){let G=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),X=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${G.toFixed(1)} ${Z}% ${X}%)`}function E8(_,$,j,G){return{x:_+j*Math.cos(G),y:$+j*Math.sin(G)}}function Gj(_,$,j,G,Z,X){let Y=Math.PI*2-0.0001,L=X-Z>Y?Z+Y:X,V=E8(_,$,G,Z),K=E8(_,$,G,L),Q=E8(_,$,j,L),q=E8(_,$,j,Z),B=L-Z>Math.PI?1:0;return[`M ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,`A ${G} ${G} 0 ${B} 1 ${K.x.toFixed(3)} ${K.y.toFixed(3)}`,`L ${Q.x.toFixed(3)} ${Q.y.toFixed(3)}`,`A ${j} ${j} 0 ${B} 0 ${q.x.toFixed(3)} ${q.y.toFixed(3)}`,"Z"].join(" ")}var zV={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function WV(_,$,j){let G=[],Z=[],X=Math.max(0,Number($)||0),Y=(L,V,K,Q)=>{let q=Array.isArray(L?.children)?L.children:[];if(!q.length)return;let B=Math.max(0,Number(L.size)||0);if(B<=0)return;let N=K-V,U=V;q.forEach((E,D)=>{let H=Math.max(0,Number(E.size)||0);if(H<=0)return;let M=H/B,J=U,W=D===q.length-1?K:U+N*M;if(U=W,W-J<0.003)return;let T=zV[Q];if(T){let x=DV(J,Q,j);if(G.push({key:E.path,path:E.path,label:E.name,size:H,color:x,depth:Q,startAngle:J,endAngle:W,innerRadius:T[0],outerRadius:T[1],d:Gj(120,120,T[0],T[1],J,W)}),Q===1)Z.push({key:E.path,name:E.name,size:H,pct:X>0?H/X*100:0,color:x})}if(Q<UV)Y(E,J,W,Q+1)})};return Y(_,-Math.PI/2,Math.PI*3/2,1),{segments:G,legend:Z}}function $j(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let G of j){let Z=$j(G,$);if(Z)return Z}return null}function OV(_,$,j,G){if(!j||j<=0)return{segments:[],legend:[]};let Z=zV[1];if(!Z)return{segments:[],legend:[]};let X=-Math.PI/2,Y=Math.PI*3/2,L=DV(X,1,G),K=`${$||"."}/[files]`;return{segments:[{key:K,path:K,label:_,size:j,color:L,depth:1,startAngle:X,endAngle:Y,innerRadius:Z[0],outerRadius:Z[1],d:Gj(120,120,Z[0],Z[1],X,Y)}],legend:[{key:K,name:_,size:j,pct:100,color:L}]}}function QV(_,$=!1,j=!1){if(!_)return null;let G=HV(_),Z=EV(_,0),X=Z.size||G,{segments:Y,legend:L}=WV(Z,X,j);if(!Y.length&&X>0){let V=OV("[files]",Z.path,X,j);Y=V.segments,L=V.legend}return{root:Z,totalSize:X,segments:Y,legend:L,truncated:$,isDarkTheme:j}}function oJ({payload:_}){if(!_)return null;let[$,j]=C(null),[G,Z]=C(_?.root?.path||"."),[X,Y]=C(()=>[_?.root?.path||"."]),[L,V]=C(!1);u(()=>{let z=_?.root?.path||".";Z(z),Y([z]),j(null)},[_?.root?.path,_?.totalSize]),u(()=>{if(!G)return;V(!0);let z=setTimeout(()=>V(!1),180);return()=>clearTimeout(z)},[G]);let K=Z0(()=>{return $j(_.root,G)||_.root},[_?.root,G]),Q=K?.size||_.totalSize||0,{segments:q,legend:B}=Z0(()=>{let z=WV(K,Q,_.isDarkTheme);if(z.segments.length>0)return z;if(Q<=0)return z;let y=K?.children?.length?"Total":"[files]";return OV(y,K?.path||_?.root?.path||".",Q,_.isDarkTheme)},[K,Q,_.isDarkTheme,_?.root?.path]),[N,U]=C(q),E=g(new Map),D=g(0);u(()=>{let z=E.current,y=new Map(q.map((v)=>[v.key,v])),I=performance.now(),R=220,f=(v)=>{let l=Math.min(1,(v-I)/220),h=l*(2-l),n=q.map((b)=>{let E0=z.get(b.key)||{startAngle:b.startAngle,endAngle:b.startAngle,innerRadius:b.innerRadius,outerRadius:b.innerRadius},V0=(Y0,Q0)=>Y0+(Q0-Y0)*h,K0=V0(E0.startAngle,b.startAngle),X0=V0(E0.endAngle,b.endAngle),F0=V0(E0.innerRadius,b.innerRadius),_0=V0(E0.outerRadius,b.outerRadius);return{...b,d:Gj(120,120,F0,_0,K0,X0)}});if(U(n),l<1)D.current=requestAnimationFrame(f)};if(D.current)cancelAnimationFrame(D.current);return D.current=requestAnimationFrame(f),E.current=y,()=>{if(D.current)cancelAnimationFrame(D.current)}},[q]);let H=N.length?N:q,M=Q>0?a_(Q):"0 B",J=K?.name||"",T=(J&&J!=="."?J:"Total")||"Total",x=M,A=X.length>1,k=(z)=>{if(!z?.path)return;let y=$j(_.root,z.path);if(!y||!Array.isArray(y.children)||y.children.length===0)return;Y((I)=>[...I,y.path]),Z(y.path),j(null)},O=()=>{if(!A)return;Y((z)=>{let y=z.slice(0,-1);return Z(y[y.length-1]||_?.root?.path||"."),y}),j(null)};return F`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${L?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${K?.path||_?.root?.path||"."}`}
                data-segments=${H.length}
                data-base-size=${Q}>
                ${H.map((z)=>F`
                    <path
                        key=${z.key}
                        d=${z.d}
                        fill=${z.color}
                        stroke="var(--bg-primary)"
                        stroke-width="1"
                        class=${`workspace-folder-starburst-segment${$?.key===z.key?" is-hovered":""}`}
                        onMouseEnter=${()=>j(z)}
                        onMouseLeave=${()=>j(null)}
                        onTouchStart=${()=>j(z)}
                        onTouchEnd=${()=>j(null)}
                        onClick=${()=>k(z)}
                    >
                        <title>${z.label} — ${a_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${A?" is-drill":""}`}
                    onClick=${O}
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
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${x}</text>
                </g>
            </svg>
            ${B.length>0&&F`
                <div class="workspace-folder-starburst-legend">
                    ${B.slice(0,8).map((z)=>F`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${a_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&F`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function NV(_){if(typeof document>"u"||!_)return;let $=document.createElement("a");$.href=_,$.setAttribute("download",""),$.rel="noopener",$.style.display="none",document.body.appendChild($),$.click(),$.remove()}function JV(_){switch(_?.state){case"indexing":return"Indexing workspace…";case"ready":return"Workspace index ready";case"stale":return"Workspace index may be stale";case"failed":return"Workspace index failed";case"never_indexed":return"Workspace index not built yet";default:return"Checking workspace index…"}}function sJ(_){if(!_)return"Workspace index status";let $=[JV(_)];if(_.last_indexed_at)$.push(`Last indexed: ${_.last_indexed_at}`);if(typeof _.indexed_file_count==="number")$.push(`Indexed files: ${_.indexed_file_count}`);if(Array.isArray(_.roots)&&_.roots.length)$.push(`Roots: ${_.roots.join(", ")}`);if(_.last_error)$.push(`Error: ${_.last_error}`);return $.join(`
`)}function aJ(_){let $=_?.target;if($&&typeof $==="object")return $;return $?.parentElement||null}function tJ(_){return Boolean(_?.closest?.(".workspace-node-icon, .workspace-label-text"))}function eJ(_,$=null){let j=aJ(_),G=j?.closest?.(".workspace-row");if(!G)return null;let Z=G.dataset.type,X=G.dataset.path;if(!X||X===".")return null;if($===X)return null;let Y=_?.touches?.[0];if(!Y)return null;return{type:Z,path:X,dragPath:tJ(j)?X:null,startX:Y.clientX,startY:Y.clientY}}function AV({onFileSelect:_,onFolderSelect:$,visible:j=!0,active:G=void 0,onOpenEditor:Z,onOpenTerminalTab:X,onOpenVncTab:Y,onToggleTerminal:L,terminalVisible:V=!1}){let[K,Q]=C(null),[q,B]=C(new Set(["."])),[N,U]=C(null),[E,D]=C(null),[H,M]=C(""),[J,W]=C(null),[,T]=C(null),[x,A]=C(!0),[k,O]=C(!1),[z,y]=C(null),[I,R]=C(()=>F$("workspaceShowHidden",!1)),[f,v]=C(!1),[l,h]=C(null),[n,b]=C(null),[$0,E0]=C(null),[V0,K0]=C(!1),[X0,F0]=C(null),[_0,Y0]=C(null),[Q0,J0]=C(null),[s,j0]=C(!1),[z0,C0]=C(()=>J6()),[h0,n0]=C(()=>qV()),[G_,m0]=C(()=>a9({stored:z1(H8),...s9()})),[a0,S0]=C(!1),o0=Math.max(15000,(Number(z0?.refreshIntervalSec)||60)*1000),c0=Math.max(0,Number(z0?.folderPreviewDepth)||0),d0=g(q),r0=g(""),Q_=g(null),t0=g(0),l0=g(new Set),O0=g(null),B_=g(null),e0=g(new Map),D_=g(_),H0=g($),u0=g(Z),T0=g(null),i0=g(null),A_=g(null),K_=g(null),H_=g(null),E_=g(null),y_=g("."),I_=g(0),u_=g({path:null,dragging:!1,startX:0,startY:0}),e=g({path:null,dragging:!1,startX:0,startY:0}),A0=g({path:null,timer:0}),k0=g(!1),d=g(0),o=g(new Map),a=g(null),G0=g(null),L0=g(null),M0=g(null),b0=g(null),P0=g(null),g0=g(I),I0=g(j),D0=g(G??j),f0=g(0),Z_=g($0),__=g(f),F_=g(l),v0=g(null),W_=g({x:0,y:0}),z_=g(0),i=g(null),W0=g(N),X_=g(E),V_=g(null),p_=g(J);D_.current=_,H0.current=$,u0.current=Z,u(()=>{d0.current=q},[q]),u(()=>{g0.current=I},[I]),u(()=>{I0.current=j},[j]),u(()=>{D0.current=G??j},[G,j]),u(()=>{Z_.current=$0},[$0]);let B1=P(()=>{if(!I_.current)return;clearTimeout(I_.current),I_.current=0},[]);u(()=>()=>B1(),[B1]),u(()=>{if(typeof window>"u")return;let S=()=>{m0(a9({stored:z1(H8),...s9()}))};S();let c=()=>S(),p=()=>S(),t=(U0)=>{if(!U0||U0.key===null||U0.key===H8)S()};window.addEventListener("resize",c),window.addEventListener("focus",p),window.addEventListener("storage",t);let B0=window.matchMedia?.("(pointer: coarse)"),q0=window.matchMedia?.("(hover: none)"),y0=(U0,s0)=>{if(!U0)return;if(U0.addEventListener)U0.addEventListener("change",s0);else if(U0.addListener)U0.addListener(s0)},x0=(U0,s0)=>{if(!U0)return;if(U0.removeEventListener)U0.removeEventListener("change",s0);else if(U0.removeListener)U0.removeListener(s0)};return y0(B0,c),y0(q0,c),()=>{window.removeEventListener("resize",c),window.removeEventListener("focus",p),window.removeEventListener("storage",t),x0(B0,c),x0(q0,c)}},[]),u(()=>{if(typeof window>"u")return;let S=()=>{C0(J6())},c=(B0)=>{if(!B0||B0.key===null||B0.key===l2||B0.key===h2)S()},p=()=>S(),t=(B0)=>{let q0=B0?.detail?.settings;if(q0&&typeof q0==="object"){C0({refreshIntervalSec:Number(q0.refreshIntervalSec)||60,folderPreviewDepth:Math.max(0,Number(q0.folderPreviewDepth)||0)});return}S()};return window.addEventListener("focus",p),window.addEventListener("storage",c),window.addEventListener(c2,t),()=>{window.removeEventListener("focus",p),window.removeEventListener("storage",c),window.removeEventListener(c2,t)}},[]),u(()=>{let S=(c)=>{let p=c?.detail?.path;if(!p)return;let t=p.split("/"),B0=[];for(let q0=1;q0<t.length;q0++)B0.push(t.slice(0,q0).join("/"));if(B0.length)B((q0)=>{let y0=new Set(q0);y0.add(".");for(let x0 of B0)y0.add(x0);return y0});U(p),requestAnimationFrame(()=>{let q0=document.querySelector(`[data-path="${CSS.escape(p)}"]`);if(q0)q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",S),()=>window.removeEventListener("workspace-reveal-path",S)},[]),u(()=>{__.current=f},[f]),u(()=>{F_.current=l},[l]),u(()=>{W0.current=N},[N]),u(()=>{X_.current=E},[E]),u(()=>{p_.current=J},[J]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let S=()=>n0(qV());S();let c=window.matchMedia?.("(prefers-color-scheme: dark)"),p=()=>S();if(c?.addEventListener)c.addEventListener("change",p);else if(c?.addListener)c.addListener(p);let t=typeof MutationObserver<"u"?new MutationObserver(()=>S()):null;if(t?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)t?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(c?.removeEventListener)c.removeEventListener("change",p);else if(c?.removeListener)c.removeListener(p);t?.disconnect()}},[]),u(()=>{if(!E)return;let S=H_.current;if(!S)return;let c=requestAnimationFrame(()=>{XV(S)});return()=>cancelAnimationFrame(c)},[E]),u(()=>{if(!a0)return;let S=(p)=>{let t=p?.target;if(!(t instanceof Element))return;if(b0.current?.contains(t))return;if(P0.current?.contains(t))return;S0(!1)},c=(p)=>{if(p?.key==="Escape")S0(!1),P0.current?.focus?.()};return document.addEventListener("mousedown",S),document.addEventListener("touchstart",S,{passive:!0}),document.addEventListener("keydown",c),()=>{document.removeEventListener("mousedown",S),document.removeEventListener("touchstart",S),document.removeEventListener("keydown",c)}},[a0]);let g_=async(S,c={})=>{let p=Boolean(c?.autoOpen),t=String(S||"").trim();O(!0),W(null),T(null);try{let B0=await w7(t,20000);if(p&&t&&KV(t,B0,{resolvePane:(q0)=>Y_.resolve(q0)}))return u0.current?.(t,B0),B0;return W(B0),B0}catch(B0){let q0={error:B0.message||"Failed to load preview"};return W(q0),q0}finally{O(!1)}};T0.current=g_;let J1=P(async()=>{try{let S=await y7("all");return J0(S),S}catch(S){return console.warn("[workspace-explorer] Failed to load workspace index status:",S),null}},[]);B_.current=J1;let C_=P(()=>{B_.current?.()},[]),M_=async()=>{if(!I0.current)return;try{let S=await V5("",1,g0.current),c=VV(S.root,d0.current,g0.current);if(c===r0.current){A(!1);return}if(r0.current=c,Q_.current=S.root,!t0.current)t0.current=requestAnimationFrame(()=>{t0.current=0,Q((p)=>jj(p,Q_.current)),A(!1)})}catch(S){y(S.message||"Failed to load workspace"),A(!1)}},A1=async(S)=>{if(!S)return;if(l0.current.has(S))return;l0.current.add(S);try{let c=await V5(S,1,g0.current);Q((p)=>_j(p,S,c.root))}catch(c){y(c.message||"Failed to load workspace")}finally{l0.current.delete(S)}};i0.current=A1;let O_=P(()=>{let S=N;if(!S)return".";let c=e0.current?.get(S);if(c&&c.type==="dir")return c.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[N]),k_=P((S)=>{let c=S?.closest?.(".workspace-row");if(!c)return null;let p=c.dataset.path,t=c.dataset.type;if(!p)return null;if(t==="dir")return p;if(p.includes("/")){let B0=p.split("/");return B0.pop(),B0.join("/")||"."}return"."},[]),F1=P((S)=>{return k_(S?.target||null)},[k_]),m_=P((S)=>{Z_.current=S,E0(S)},[]),n_=P(()=>{let S=A0.current;if(S?.timer)clearTimeout(S.timer);A0.current={path:null,timer:0}},[]),s_=P((S)=>{if(!S||S==="."){n_();return}let c=e0.current?.get(S);if(!c||c.type!=="dir"){n_();return}if(d0.current?.has(S)){n_();return}if(A0.current?.path===S)return;n_();let p=setTimeout(()=>{A0.current={path:null,timer:0},i0.current?.(S),B((t)=>{let B0=new Set(t);return B0.add(S),B0})},600);A0.current={path:S,timer:p}},[n_]),U_=P((S,c)=>{if(W_.current={x:S,y:c},z_.current)return;z_.current=requestAnimationFrame(()=>{z_.current=0;let p=v0.current;if(!p)return;let t=W_.current;p.style.transform=`translate(${t.x+12}px, ${t.y+12}px)`})},[]),x1=P((S)=>{if(!S)return;let p=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p)return;b({path:S,label:p})},[]),U1=P(()=>{if(b(null),z_.current)cancelAnimationFrame(z_.current),z_.current=0;if(v0.current)v0.current.style.transform="translate(-9999px, -9999px)"},[]),g1=P((S)=>{if(!S)return".";let c=e0.current?.get(S);if(c&&c.type==="dir")return c.path;if(S==="."||!S.includes("/"))return".";let p=S.split("/");return p.pop(),p.join("/")||"."},[]),k1=P(()=>{D(null),M("")},[]),e1=P((S)=>{if(!S)return;let p=(e0.current?.get(S)?.name||S.split("/").pop()||S).trim();if(!p||S===".")return;D(S),M(p)},[]),c4=P(async()=>{let S=X_.current;if(!S)return;let c=(H||"").trim();if(!c){k1();return}let p=e0.current?.get(S),t=(p?.name||S.split("/").pop()||S).trim();if(c===t){k1();return}try{let q0=(await I7(S,c))?.path||S,y0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(k1(),y(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:S,newPath:q0,type:p?.type||"file"}})),p?.type==="dir")B((x0)=>{let U0=new Set;for(let s0 of x0)if(s0===S)U0.add(q0);else if(s0.startsWith(`${S}/`))U0.add(`${q0}${s0.slice(S.length)}`);else U0.add(s0);return U0});if(U(q0),p?.type==="dir")W(null),O(!1),T(null);else T0.current?.(q0);i0.current?.(y0),C_()}catch(B0){y(B0?.message||"Failed to rename file")}},[k1,H,C_]),A$=P(async(S)=>{let t=S||".";for(let B0=0;B0<50;B0+=1){let y0=`untitled${B0===0?"":`-${B0}`}.md`;try{let U0=(await x7(t,y0,""))?.path||(t==="."?y0:`${t}/${y0}`);if(t&&t!==".")B((s0)=>new Set([...s0,t]));U(U0),y(null),i0.current?.(t),T0.current?.(U0),C_();return}catch(x0){if(x0?.status===409||x0?.code==="file_exists")continue;y(x0?.message||"Failed to create file");return}}y("Failed to create file (untitled name already in use).")},[]),t_=P((S)=>{if(S?.stopPropagation?.(),V0)return;let c=g1(W0.current);A$(c)},[V0,g1,A$]);u(()=>{if(typeof window>"u")return;let S=(c)=>{let p=c?.detail?.updates||[];if(!Array.isArray(p)||p.length===0)return;Q((x0)=>{let U0=x0;for(let s0 of p){if(!s0?.root)continue;if(!U0||s0.path==="."||!s0.path)U0=s0.root;else U0=_j(U0,s0.path,s0.root)}if(U0)r0.current=VV(U0,d0.current,g0.current);return A(!1),U0});let t=W0.current;if(Boolean(t)&&p.some((x0)=>{let U0=x0?.path||"";if(!U0||U0===".")return!0;return t===U0||t.startsWith(`${U0}/`)||U0.startsWith(`${t}/`)}))o.current.clear();if(C_(),!t||!p_.current)return;let q0=e0.current?.get(t);if(q0&&q0.type==="dir")return;if(p.some((x0)=>{let U0=x0?.path||"";if(!U0||U0===".")return!0;return t===U0||t.startsWith(`${U0}/`)}))T0.current?.(t)};return window.addEventListener("workspace-update",S),()=>window.removeEventListener("workspace-update",S)},[]),O0.current=M_;let c_=g(()=>{if(typeof window>"u")return;let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),c=D0.current??I0.current,p=document.visibilityState!=="hidden"&&(c||S.matches&&I0.current);q5(p,g0.current).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility ping failed.",t,{visible:p,showHidden:g0.current})})}).current,y1=g(0),H1=g(()=>{if(y1.current)clearTimeout(y1.current);y1.current=setTimeout(()=>{y1.current=0,c_()},250)}).current;u(()=>{if(I0.current)O0.current?.(),B_.current?.();H1()},[j,G]),u(()=>{O0.current(),B_.current?.();let S=setInterval(()=>{O0.current(),B_.current?.()},o0);return()=>clearInterval(S)},[o0]),u(()=>{c_();let S=z4("previewHeight",null),c=Number.isFinite(S)?Math.min(Math.max(S,80),600):280;if(d.current=c,A_.current)A_.current.style.setProperty("--preview-height",`${c}px`);let p=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),t=()=>H1();if(p.addEventListener)p.addEventListener("change",t);else if(p.addListener)p.addListener(t);return document.addEventListener("visibilitychange",t),()=>{if(t0.current)cancelAnimationFrame(t0.current),t0.current=0;if(p.removeEventListener)p.removeEventListener("change",t);else if(p.removeListener)p.removeListener(t);if(document.removeEventListener("visibilitychange",t),y1.current)clearTimeout(y1.current),y1.current=0;q5(!1,g0.current).catch((B0)=>{console.debug("[workspace-explorer] Workspace visibility teardown ping failed.",B0,{showHidden:g0.current})})}},[]);let _1=Z0(()=>FV(K,q,I),[K,q,I]),k$=Z0(()=>new Map(_1.map((S)=>[S.node.path,S.node])),[_1]),y$=Z0(()=>LV(G_),[G_]);e0.current=k$;let w_=(N?e0.current.get(N):null)?.type==="dir";u(()=>{if(!N||!w_){Y0(null),a.current=null,G0.current=null;return}if(c0<=0){Y0({loading:!1,error:null,payload:null,disabled:!0}),a.current=null,G0.current=null;return}let S=N,c=`${I?"hidden":"visible"}:${c0}:${N}`,p=o.current,t=p.get(c);if(t?.root){p.delete(c),p.set(c,t);let y0=QV(t.root,Boolean(t.truncated),h0);if(y0)a.current=y0,G0.current=N,Y0({loading:!1,error:null,payload:y0,disabled:!1});return}let B0=a.current,q0=G0.current;Y0({loading:!0,error:null,payload:q0===N?B0:null,disabled:!1}),V5(N,c0,I).then((y0)=>{if(W0.current!==S)return;let x0={root:y0?.root,truncated:Boolean(y0?.truncated)};p.delete(c),p.set(c,x0);while(p.size>iJ){let s0=p.keys().next().value;if(!s0)break;p.delete(s0)}let U0=QV(x0.root,x0.truncated,h0);a.current=U0,G0.current=N,Y0({loading:!1,error:null,payload:U0,disabled:!1})}).catch((y0)=>{if(W0.current!==S)return;Y0({loading:!1,error:y0?.message||"Failed to load folder size chart",payload:q0===N?B0:null,disabled:!1})})},[N,w_,I,h0,c0]);let K1=Boolean(J&&J.kind==="text"&&!w_&&(!J.size||J.size<=262144)),M$=K1?"Open in editor":J?.size>262144?"File too large to edit":"File is not editable",l4=Boolean(N&&!w_&&dJ(N)),$$=Boolean(N&&N!=="."),h4=Boolean(N&&!w_),p4=Boolean(N&&!w_),w$=N&&w_?x2(N,I):null,T$=JV(Q0),b1=sJ(Q0),v1=Q0?.state||"never_indexed",r4=v1!=="ready",V1=P(()=>S0(!1),[]),R_=P(async(S)=>{V1();try{await S?.()}catch(c){console.warn("[workspace-explorer] Header menu action failed:",c)}},[V1]),n4=P(async(S)=>{S?.stopPropagation?.(),j0(!0),J0((c)=>({scope:"all",last_indexed_at:c?.last_indexed_at||null,last_error:null,indexed_file_count:c?.indexed_file_count||0,roots:c?.roots||[],updated_at:c?.updated_at||null,state:"indexing"}));try{let c=await M7("all");J0(c),y(null),r0.current="",O0.current?.()}catch(c){let p=c?.message||"Failed to reindex workspace";J0((t)=>({scope:"all",last_indexed_at:t?.last_indexed_at||null,last_error:p,indexed_file_count:t?.indexed_file_count||0,roots:t?.roots||[],updated_at:t?.updated_at||null,state:"failed"})),y(p)}finally{j0(!1)}},[]);u(()=>{let S=L0.current;if(M0.current)M0.current.dispose(),M0.current=null;if(!S)return;if(S.innerHTML="",!N||w_||!J||J.error)return;let c={path:N,content:typeof J.text==="string"?J.text:void 0,mtime:J.mtime,size:J.size,preview:J,mode:"view"},p=Y_.resolve(c)||Y_.get("workspace-preview-default");if(!p)return;let t=p.mount(S,c);return M0.current=t,()=>{if(M0.current===t)t.dispose(),M0.current=null;S.innerHTML=""}},[N,w_,J]);let I1=(S)=>{let c=S?.target;if(c instanceof Element)return c;return c?.parentElement||null},x$=(S)=>{return Boolean(S?.closest?.(".workspace-node-icon, .workspace-label-text"))},d4=(S)=>{if(!S)return!1;if(S.closest?.('input, textarea, [contenteditable="true"]'))return!0;return Boolean(S.isContentEditable)},g6=g((S)=>{let c=I1(S),p=c?.closest?.("[data-path]");if(!p)return;let t=p.dataset.path;if(!t||t===".")return;let B0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),q0=Boolean(c?.closest?.(".workspace-caret"));if(B0||q0)return;if(X_.current===t)return;e1(t)}).current,b6=g((S)=>{if(k0.current){k0.current=!1;return}let c=I1(S),p=c?.closest?.("[data-path]");if(K_.current?.focus?.(),!p)return;let t=p.dataset.path,B0=p.dataset.type,q0=Boolean(c?.closest?.(".workspace-caret")),y0=Boolean(c?.closest?.("button"))||Boolean(c?.closest?.("a"))||Boolean(c?.closest?.("input")),x0=W0.current===t,U0=X_.current;if(U0){if(U0===t)return;k1()}if(B0==="dir"){if(V_.current=null,U(t),W(null),T(null),O(!1),!d0.current.has(t))i0.current?.(t);if(x0&&!q0)return;B((r_)=>{let $1=new Set(r_);if($1.has(t))$1.delete(t);else $1.add(t);return $1})}else{V_.current=null,U(t);let s0=e0.current.get(t);if(s0)D_.current?.(s0.path,s0);if(!y0&&!q0)T0.current?.(t)}}).current,X4=g(()=>{r0.current="",O0.current(),B_.current?.(),Array.from(d0.current||[]).filter((c)=>c&&c!==".").forEach((c)=>i0.current?.(c))}).current,I$=g(()=>{V_.current=null,U(null),W(null),T(null),O(!1)}).current,i4=g(()=>{R((S)=>{let c=!S;if(typeof window<"u")L_("workspaceShowHidden",String(c));return g0.current=c,q5(!0,c).catch((t)=>{console.debug("[workspace-explorer] Workspace visibility refresh after toggling hidden files failed.",t,{showHidden:c})}),r0.current="",O0.current?.(),Array.from(d0.current||[]).filter((t)=>t&&t!==".").forEach((t)=>i0.current?.(t)),c})}).current,o4=g((S)=>{if(I1(S)?.closest?.("[data-path]"))return;I$()}).current,q1=P(async(S)=>{if(!S)return;let c=S.split("/").pop()||S;if(!window.confirm(`Delete "${c}"? This cannot be undone.`))return;try{await P7(S);let t=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(W0.current===S)I$();i0.current?.(t),y(null),C_()}catch(t){W((B0)=>({...B0||{},error:t.message||"Failed to delete file"}))}},[I$]),C$=P((S)=>{let c=K_.current;if(!c||!S||typeof CSS>"u"||typeof CSS.escape!=="function")return;c.querySelector(`[data-path="${CSS.escape(S)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),Y4=P((S)=>{let c=I1(S);if(X_.current||d4(c))return;let p=_1;if(!p||p.length===0)return;let t=N?p.findIndex((B0)=>B0.node.path===N):-1;if(S.key==="ArrowDown"){S.preventDefault();let B0=Math.min(t+1,p.length-1),q0=p[B0];if(!q0)return;if(U(q0.node.path),q0.node.type!=="dir")D_.current?.(q0.node.path,q0.node),T0.current?.(q0.node.path);else W(null),O(!1),T(null);C$(q0.node.path);return}if(S.key==="ArrowUp"){S.preventDefault();let B0=t<=0?0:t-1,q0=p[B0];if(!q0)return;if(U(q0.node.path),q0.node.type!=="dir")D_.current?.(q0.node.path,q0.node),T0.current?.(q0.node.path);else W(null),O(!1),T(null);C$(q0.node.path);return}if(S.key==="ArrowRight"&&t>=0){let B0=p[t];if(B0?.node?.type==="dir"&&!q.has(B0.node.path))S.preventDefault(),i0.current?.(B0.node.path),B((q0)=>new Set([...q0,B0.node.path]));return}if(S.key==="ArrowLeft"&&t>=0){let B0=p[t];if(B0?.node?.type==="dir"&&q.has(B0.node.path))S.preventDefault(),B((q0)=>{let y0=new Set(q0);return y0.delete(B0.node.path),y0});return}if(S.key==="Enter"&&t>=0){S.preventDefault();let B0=p[t];if(!B0)return;let q0=B0.node.path;if(B0.node.type==="dir"){if(!d0.current.has(q0))i0.current?.(q0);B((x0)=>{let U0=new Set(x0);if(U0.has(q0))U0.delete(q0);else U0.add(q0);return U0}),W(null),T(null),O(!1)}else D_.current?.(q0,B0.node),T0.current?.(q0);return}if((S.key==="Delete"||S.key==="Backspace")&&t>=0){let B0=p[t];if(!B0||B0.node.type==="dir")return;S.preventDefault(),q1(B0.node.path);return}if(S.key==="Escape")S.preventDefault(),I$()},[I$,q1,q,_1,C$,N]),L4=P((S)=>{let c=eJ(S,X_.current);if(!c)return;u_.current={path:c.dragPath,dragging:!1,startX:c.startX,startY:c.startY}},[]),m1=P(()=>{let S=u_.current;if(S?.dragging&&S.path){let c=Z_.current||O_(),p=i.current;if(typeof p==="function")p(S.path,c)}u_.current={path:null,dragging:!1,startX:0,startY:0},f0.current=0,v(!1),h(null),m_(null),n_(),U1()},[O_,U1,m_,n_]),E1=P((S)=>{let c=u_.current,p=S?.touches?.[0];if(!p||!c?.path)return;let t=Math.abs(p.clientX-c.startX),B0=Math.abs(p.clientY-c.startY),q0=t>8||B0>8;if(!c.dragging&&q0)c.dragging=!0,v(!0),h("move"),x1(c.path);if(c.dragging){S.preventDefault(),U_(p.clientX,p.clientY);let y0=document.elementFromPoint(p.clientX,p.clientY),x0=k_(y0)||O_();if(Z_.current!==x0)m_(x0);s_(x0)}},[k_,O_,x1,U_,m_,s_]),v6=g((S)=>{S.preventDefault();let c=A_.current;if(!c)return;let p=S.clientY,t=d.current||280,B0=S.currentTarget;B0.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let q0=p,y0=(U0)=>{q0=U0.clientY;let s0=c.clientHeight-80,r_=Math.min(Math.max(t-(U0.clientY-p),80),s0);c.style.setProperty("--preview-height",`${r_}px`),d.current=r_},x0=()=>{let U0=c.clientHeight-80,s0=Math.min(Math.max(t-(q0-p),80),U0);d.current=s0,B0.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",L_("previewHeight",String(Math.round(s0))),document.removeEventListener("mousemove",y0),document.removeEventListener("mouseup",x0)};document.addEventListener("mousemove",y0),document.addEventListener("mouseup",x0)}).current,K4=g((S)=>{S.preventDefault();let c=A_.current;if(!c)return;let p=S.touches[0];if(!p)return;let t=p.clientY,B0=d.current||280,q0=S.currentTarget;q0.classList.add("dragging"),document.body.style.userSelect="none";let y0=(U0)=>{let s0=U0.touches[0];if(!s0)return;U0.preventDefault();let r_=c.clientHeight-80,$1=Math.min(Math.max(B0-(s0.clientY-t),80),r_);c.style.setProperty("--preview-height",`${$1}px`),d.current=$1},x0=()=>{q0.classList.remove("dragging"),document.body.style.userSelect="",L_("previewHeight",String(Math.round(d.current||B0))),document.removeEventListener("touchmove",y0),document.removeEventListener("touchend",x0),document.removeEventListener("touchcancel",x0)};document.addEventListener("touchmove",y0,{passive:!1}),document.addEventListener("touchend",x0),document.addEventListener("touchcancel",x0)}).current,j$=P((S=N)=>{if(!S)return;NV(T2(S))},[N]),e_=async()=>{if(!N||w_)return;await q1(N)},P$=(S)=>{return Array.from(S?.dataTransfer?.types||[]).includes("Files")},s4=P((S)=>{if(!P$(S))return;if(S.preventDefault(),f0.current+=1,!__.current)v(!0);h("upload");let c=F1(S)||O_();m_(c),s_(c)},[O_,F1,m_,s_]),G$=P((S)=>{if(!P$(S))return;if(S.preventDefault(),S.dataTransfer)S.dataTransfer.dropEffect="copy";if(!__.current)v(!0);if(F_.current!=="upload")h("upload");let c=F1(S)||O_();if(Z_.current!==c)m_(c);s_(c)},[O_,F1,m_,s_]),b5=P((S)=>{if(!P$(S))return;if(S.preventDefault(),f0.current=Math.max(0,f0.current-1),f0.current===0)v(!1),h(null),m_(null),n_()},[m_,n_]),b_=P(async(S,c=".")=>{let p=Array.from(S||[]);if(p.length===0)return;let t=c&&c!==""?c:".",B0=t!=="."?t:"workspace root";B1(),K0(!0),F0({current:0,total:p.length,name:"",percent:0,done:!1,error:null});try{let q0=null;for(let y0=0;y0<p.length;y0++){let x0=p[y0],U0=x0?.name||`file ${y0+1}`;F0((r_)=>({...r_,current:y0+1,name:U0,percent:0}));let s0=(r_)=>F0(($1)=>({...$1,percent:r_.percent}));try{q0=await w2(x0,t,{onProgress:s0})}catch(r_){let $1=r_?.status,K$=r_?.code;if($1===409||K$==="file_exists"){if(!window.confirm(`"${U0}" already exists in ${B0}. Overwrite?`))continue;q0=await w2(x0,t,{overwrite:!0,onProgress:s0})}else throw r_}}if(q0?.path)V_.current=q0.path,U(q0.path),T0.current?.(q0.path);i0.current?.(t),C_(),F0((y0)=>({...y0,done:!0})),B1(),I_.current=window.setTimeout(()=>{I_.current=0,F0(null)},1500)}catch(q0){y(q0.message||"Failed to upload file"),F0((y0)=>y0?{...y0,error:q0.message||"Upload failed"}:null),B1(),I_.current=window.setTimeout(()=>{I_.current=0,F0(null)},4000)}finally{K0(!1)}},[B1]),d8=P(async(S,c)=>{if(!S)return;let p=e0.current?.get(S);if(!p)return;let t=c&&c!==""?c:".",B0=S.includes("/")?S.split("/").slice(0,-1).join("/")||".":".";if(t===B0)return;try{let y0=(await C7(S,t))?.path||S;if(p.type==="dir")B((x0)=>{let U0=new Set;for(let s0 of x0)if(s0===S)U0.add(y0);else if(s0.startsWith(`${S}/`))U0.add(`${y0}${s0.slice(S.length)}`);else U0.add(s0);return U0});if(U(y0),p.type==="dir")W(null),O(!1),T(null);else T0.current?.(y0);i0.current?.(B0),i0.current?.(t),C_()}catch(q0){y(q0?.message||"Failed to move entry")}},[]);i.current=d8;let i8=P(async(S)=>{if(!P$(S))return;S.preventDefault(),f0.current=0,v(!1),h(null),E0(null),n_();let c=Array.from(S?.dataTransfer?.files||[]);if(c.length===0)return;let p=Z_.current||F1(S)||O_();await b_(c,p)},[O_,F1,b_]),C1=P((S)=>{if(S?.stopPropagation?.(),V0)return;let c=S?.currentTarget?.dataset?.uploadTarget||".";y_.current=c,E_.current?.click()},[V0]),V4=P((S)=>{S?.preventDefault?.(),S?.stopPropagation?.();let c=S?.currentTarget?.dataset?.folderHintTarget||W0.current||".";if(!c)return;H0.current?.(c,e0.current.get(c))},[]),f$=P(()=>{if(V0)return;let S=W0.current,c=S?e0.current?.get(S):null;y_.current=c?.type==="dir"?c.path:".",E_.current?.click()},[V0]),R$=P(()=>{R_(()=>t_(null))},[R_,t_]),S$=P(()=>{R_(()=>f$())},[R_,f$]),a4=P(()=>{R_(()=>X4())},[R_,X4]),Z$=P(()=>{R_(()=>i4())},[R_,i4]),X$=P(()=>{if(!N||!l4)return;R_(()=>u0.current?.(N,J))},[R_,N,l4,J]),q4=P(()=>{if(!N||!K1)return;R_(()=>u0.current?.(N,J))},[R_,N,K1,J]),Q4=P(()=>{if(!N||N===".")return;R_(()=>e1(N))},[R_,N,e1]),Y$=P(()=>{if(!N||w_)return;R_(()=>e_())},[R_,N,w_,e_]),v5=P(()=>{if(!N||w_)return;R_(()=>j$())},[R_,N,w_,j$]),L$=P(()=>{if(!w$)return;V1(),NV(w$)},[V1,w$]),m5=P(()=>{V1(),X?.()},[V1,X]),m6=P(()=>{V1(),Y?.()},[V1,Y]),c6=P(()=>{V1(),L?.()},[V1,L]),l6=P((S)=>{if(!S||S.button!==0)return;let c=S.currentTarget;if(!c||!c.dataset)return;let p=c.dataset.path;if(!p||p===".")return;if(X_.current===p)return;let t=I1(S);if(t?.closest?.("button, a, input, .workspace-caret"))return;if(!x$(t))return;S.preventDefault(),e.current={path:p,dragging:!1,startX:S.clientX,startY:S.clientY};let B0=(y0)=>{let x0=e.current;if(!x0?.path)return;let U0=Math.abs(y0.clientX-x0.startX),s0=Math.abs(y0.clientY-x0.startY),r_=U0>4||s0>4;if(!x0.dragging&&r_)x0.dragging=!0,k0.current=!0,v(!0),h("move"),x1(x0.path),U_(y0.clientX,y0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(x0.dragging){y0.preventDefault(),U_(y0.clientX,y0.clientY);let $1=document.elementFromPoint(y0.clientX,y0.clientY),K$=k_($1)||O_();if(Z_.current!==K$)m_(K$);s_(K$)}},q0=()=>{document.removeEventListener("mousemove",B0),document.removeEventListener("mouseup",q0);let y0=e.current;if(y0?.dragging&&y0.path){let x0=Z_.current||O_(),U0=i.current;if(typeof U0==="function")U0(y0.path,x0)}e.current={path:null,dragging:!1,startX:0,startY:0},f0.current=0,v(!1),h(null),m_(null),n_(),U1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{k0.current=!1},0)};document.addEventListener("mousemove",B0),document.addEventListener("mouseup",q0)},[k_,O_,x1,U_,U1,m_,s_,n_]),o8=P(async(S)=>{let c=Array.from(S?.target?.files||[]);if(c.length===0)return;let p=y_.current||".";if(await b_(c,p),y_.current=".",S?.target)S.target.value=""},[b_]);return F`
        <aside
            class=${`workspace-sidebar${f?" workspace-drop-active":""}`}
            data-workspace-scale=${G_}
            ref=${A_}
            onDragEnter=${s4}
            onDragOver=${G$}
            onDragLeave=${b5}
            onDrop=${i8}
        >
            <input type="file" multiple style="display:none" ref=${E_} onChange=${o8} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${P0}
                            class=${`workspace-menu-button${a0?" active":""}`}
                            onClick=${(S)=>{S.stopPropagation(),S0((c)=>!c)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${a0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${a0&&F`
                            <div class="workspace-menu-dropdown" ref=${b0} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${R$} disabled=${V0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${S$} disabled=${V0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${a4}>Refresh tree</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>R_(()=>n4())} disabled=${s}>
                                    ${s?"Reindexing workspace…":"Reindex workspace"}
                                </button>
                                <button class=${`workspace-menu-item${I?" active":""}`} role="menuitem" onClick=${Z$}>
                                    ${I?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${(X||Y||L)&&F`<div class="workspace-menu-separator"></div>`}
                                ${X&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m5}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${m6}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${L&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${c6}>
                                        ${V?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}

                                ${N&&F`<div class="workspace-menu-separator"></div>`}
                                ${l4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${X$}>Open in tab</button>
                                `}
                                ${N&&!w_&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q4} disabled=${!K1}>Open in editor</button>
                                `}
                                ${$$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Q4}>Rename selected</button>
                                `}
                                ${p4&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${v5}>Download selected file</button>
                                `}
                                ${w$&&F`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${L$}>Download selected folder (zip)</button>
                                `}
                                ${h4&&F`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${Y$}>Delete selected file</button>
                                `}
                                <div class="workspace-menu-separator"></div>
                                <button class="workspace-menu-item" role="menuitem" onClick=${()=>{S0(!1),window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:{section:"workspace"}}))}}>Settings</button>
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${t_} title="New file" disabled=${V0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${X4} title="Refresh tree">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            ${r4&&F`
                <div class="workspace-index-status-row">
                    <div class=${`workspace-index-status-chip state-${v1}`} title=${b1}>
                        <span class="workspace-index-status-dot" aria-hidden="true"></span>
                        <span>${T$}</span>
                    </div>
                </div>
            `}
            <div class="workspace-tree" onClick=${o4}>
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
                ${x&&F`<div class="workspace-loading">Loading…</div>`}
                ${z&&F`<div class="workspace-error">${z}</div>`}
                ${K&&F`
                    <div
                        class="workspace-tree-list"
                        ref=${K_}
                        tabIndex="0"
                        onClick=${b6}
                        onDblClick=${g6}
                        onKeyDown=${Y4}
                        onTouchStart=${L4}
                        onTouchEnd=${m1}
                        onTouchMove=${E1}
                        onTouchCancel=${m1}
                    >
                        ${_1.map(({node:S,depth:c})=>{let p=S.type==="dir",t=S.path===N,B0=S.path===E,q0=p&&q.has(S.path),y0=$0&&S.path===$0,x0=Array.isArray(S.children)&&S.children.length>0?S.children.length:Number(S.child_count)||0;return F`
                                <div
                                    key=${S.path}
                                    class=${`workspace-row${t?" selected":""}${y0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+c*y$.indentPx}px`}}
                                    data-path=${S.path}
                                    data-type=${S.type}
                                    onMouseDown=${l6}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${p?q0?F`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:F`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${p?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${p?F`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:F`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${B0?F`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${H_}
                                                value=${H}
                                                onInput=${(U0)=>M(U0?.target?.value||"")}
                                                onKeyDown=${(U0)=>{if(U0.stopPropagation(),U0.key==="Enter")U0.preventDefault(),c4();else if(U0.key==="Escape")U0.preventDefault(),k1()}}
                                                onBlur=${k1}
                                                onClick=${(U0)=>U0.stopPropagation()}
                                            />
                                        `:F`<span class="workspace-label"><span class="workspace-label-text">${S.name}</span></span>`}
                                    ${p&&!q0&&x0>0&&F`
                                        <span class="workspace-count">${x0}</span>
                                    `}
                                    ${p&&F`
                                        <button
                                            class="workspace-folder-upload"
                                            data-folder-hint-target=${S.path}
                                            title="Add folder hint to compose"
                                            aria-label=${`Add folder hint for ${S.path}`}
                                            onClick=${V4}
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
                                            data-upload-target=${S.path}
                                            title="Upload files to this folder"
                                            onClick=${C1}
                                            disabled=${V0}
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
            ${N&&F`
                <div class="workspace-preview-splitter-h" onMouseDown=${v6} onTouchStart=${K4}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${N}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${t_} title="New file" disabled=${V0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!w_&&F`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>K1&&u0.current?.(N,J)}
                                    title=${M$}
                                    disabled=${!K1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${e_}
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
                            ${w_?F`
                                    <button
                                        class="workspace-download"
                                        data-folder-hint-target=${N}
                                        onClick=${V4}
                                        title="Add folder hint to compose"
                                        aria-label=${`Add folder hint for ${N}`}
                                    >
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                            <path d="M12 11v6"/>
                                            <path d="M9 14h6"/>
                                        </svg>
                                    </button>
                                    <button class="workspace-download" onClick=${f$}
                                        title="Upload files to this folder" disabled=${V0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${x2(N,I)} download
                                        title="Download folder as zip" onClick=${(S)=>S.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:F`<a class="workspace-download" href=${T2(N)} download
                                        title="Download" onClick=${(S)=>S.stopPropagation()}>
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
                    ${J?.error&&F`<div class="workspace-error">${J.error}</div>`}
                    ${w_&&F`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${_0?.disabled&&F`<div class="workspace-preview-text">Folder size preview scanning is disabled in Workspace settings.</div>`}
                        ${_0?.loading&&F`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${_0?.error&&F`<div class="workspace-error">${_0.error}</div>`}
                        ${_0?.payload&&_0.payload.segments?.length>0&&F`
                            <${oJ} payload=${_0.payload} />
                        `}
                        ${_0?.payload&&(!_0.payload.segments||_0.payload.segments.length===0)&&F`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${J&&!J.error&&!w_&&F`
                        <div class="workspace-preview-body" ref=${L0}></div>
                    `}
                </div>
            `}
            ${n&&F`
                <div class="workspace-drag-ghost" ref=${v0}>${n.label}</div>
            `}
        </aside>
    `}w0();var _A=new Set(["html-viewer","kanban-editor","mindmap-editor"]);function D8(_,$,j){let G=String(_||"").trim();if(!G)return null;if($)return $;if(typeof j!=="function")return null;return j({path:G,mode:"edit"})?.id||null}function kV(_,$,j){let G=D8(_,$,j);return G!=null&&_A.has(G)}function yV(_,$,j){return D8(_,$,j)==="html-viewer"?"Edit":"Edit Source"}function MV(_,$,j){return D8(_,$,j)==="editor"}var $A=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,jA=/\.(csv|tsv)$/i,GA=/\.pdf$/i,ZA=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function XA(_,{hasPopOutTab:$=!1}={}){let j=typeof _==="string"?_.trim():"";if(!j)return null;let G=ZK(j,{hasPopOutTab:$});if(G)return G;if($A.test(j)){let Z="/workspace/raw?path="+encodeURIComponent(j),X=j.split("/").pop()||"document";return"/office-viewer/?url="+encodeURIComponent(Z)+"&name="+encodeURIComponent(X)}if(jA.test(j))return"/csv-viewer/?path="+encodeURIComponent(j);if(GA.test(j))return"/workspace/raw?path="+encodeURIComponent(j);if(ZA.test(j))return"/image-viewer/?path="+encodeURIComponent(j);return null}function wV({tabs:_,activeId:$,onActivate:j,onClose:G,onCloseOthers:Z,onCloseAll:X,onTogglePin:Y,onTogglePreview:L,onToggleDiff:V,onEditSource:K,previewTabs:Q,diffTabs:q,paneOverrides:B,detachedTabs:N,onReattachTab:U,onToggleDock:E,dockVisible:D,onToggleZen:H,zenMode:M,onPopOutTab:J}){let[W,T]=C(null),x=g(null);u(()=>{if(!W)return;let b=($0)=>{if($0.type==="keydown"&&$0.key!=="Escape")return;T(null)};return document.addEventListener("click",b),document.addEventListener("keydown",b),()=>{document.removeEventListener("click",b),document.removeEventListener("keydown",b)}},[W]),u(()=>{let b=($0)=>{if($0.ctrlKey&&$0.key==="Tab"){if($0.preventDefault(),!_.length)return;let E0=_.findIndex((V0)=>V0.id===$);if($0.shiftKey){let V0=_[(E0-1+_.length)%_.length];j?.(V0.id)}else{let V0=_[(E0+1)%_.length];j?.(V0.id)}return}if(($0.ctrlKey||$0.metaKey)&&$0.key==="w"){let E0=document.querySelector(".editor-pane");if(E0&&E0.contains(document.activeElement)){if($0.preventDefault(),$)G?.($)}}};return document.addEventListener("keydown",b),()=>document.removeEventListener("keydown",b)},[_,$,j,G]);let A=P((b,$0)=>{if(b.button===0){j?.($0);return}if(b.button===1)b.preventDefault(),G?.($0)},[j,G]),k=P((b,$0)=>{if(b.defaultPrevented)return;if(b.button===0)j?.($0)},[j]),O=P((b,$0)=>{b.preventDefault(),T({id:$0,x:b.clientX,y:b.clientY})},[]),z=P((b)=>{b.stopPropagation()},[]),y=P((b,$0)=>{b.preventDefault(),b.stopPropagation(),G?.($0)},[G]);u(()=>{if(!$||!x.current)return;let b=x.current.querySelector(".tab-item.active");if(b)b.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let I=P((b)=>{if(!(B instanceof Map))return null;return B.get(b)||null},[B]),R=Z0(()=>_.find((b)=>b.id===W?.id)||null,[W?.id,_]),f=Z0(()=>{let b=W?.id;if(!b)return!1;return kV(b,I(b),($0)=>Y_.resolve($0))},[W?.id,I]),v=Z0(()=>{let b=W?.id;if(!b)return"Edit Source";return yV(b,I(b),($0)=>Y_.resolve($0))},[W?.id,I]),l=Z0(()=>{let b=W?.id;if(!b||!(N instanceof Map))return!1;return N.has(b)},[W?.id,N]),h=Z0(()=>{let b=W?.id;if(!b||!(q instanceof Set))return!1;return q.has(b)},[W?.id,q]),n=Z0(()=>{let b=W?.id;if(!b)return!1;let $0=_.find((V0)=>V0.id===b)||null;if(!$0)return!1;return MV(b,I(b),(V0)=>Y_.resolve(V0))&&Boolean($0.dirty||h)},[W?.id,h,I,_]);if(!_.length)return null;return F`
        <div class="tab-strip" ref=${x} role="tablist">
            ${_.map((b)=>F`
                <div
                    key=${b.id}
                    class=${`tab-item${b.id===$?" active":""}${b.dirty?" dirty":""}${b.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${b.id===$}
                    title=${b.path}
                    onMouseDown=${($0)=>A($0,b.id)}
                    onClick=${($0)=>k($0,b.id)}
                    onContextMenu=${($0)=>O($0,b.id)}
                >
                    ${b.pinned&&F`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${b.label}</span>
                    ${N instanceof Map&&N.has(b.id)&&F`
                        <span class="tab-detached-badge" aria-label="Detached" title="Open in separate window">↗</span>
                    `}
                    <button
                        type="button"
                        class="tab-close"
                        onPointerDown=${z}
                        onMouseDown=${z}
                        onClick=${($0)=>y($0,b.id)}
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
            ${E&&F`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${D?" active":""}`}
                    onClick=${E}
                    title=${`${D?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${D?"Hide":"Show"} terminal`}
                    aria-pressed=${D?"true":"false"}
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
                    class=${`tab-strip-zen-toggle${M?" active":""}`}
                    onClick=${H}
                    title=${`${M?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${M?"Exit":"Enter"} zen mode`}
                    aria-pressed=${M?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${M?F`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:F`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${W&&F`
            <div class="tab-context-menu" style=${{left:W.x+"px",top:W.y+"px"}}>
                <button onClick=${()=>{G?.(W.id),T(null)}}>Close</button>
                <button onClick=${()=>{Z?.(W.id),T(null)}}>Close Others</button>
                <button onClick=${()=>{X?.(),T(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{Y?.(W.id),T(null)}}>
                    ${R?.pinned?"Unpin":"Pin"}
                </button>
                ${f&&K&&F`
                    <button onClick=${()=>{K(W.id),T(null)}}>${v}</button>
                `}
                ${l&&U&&F`
                    <button onClick=${()=>{U(W.id),T(null)}}>Reattach</button>
                `}
                ${J&&!l&&F`
                    <button onClick=${()=>{let b=_.find(($0)=>$0.id===W.id);J(W.id,b?.label),T(null)}}>Open in Window</button>
                `}
                ${n&&V&&F`
                    <hr />
                    <button onClick=${()=>{j?.(W.id),V(W.id),T(null)}}>${h?"Hide Diff":"Compare to Saved"}</button>
                `}
                ${L&&/\.(md|mdx|markdown)$/i.test(W.id)&&F`
                    <hr />
                    <button onClick=${()=>{L(W.id),T(null)}}>
                        ${Q?.has(W.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${(()=>{let b=XA(W.id,{hasPopOutTab:typeof J==="function"});if(!b)return null;return F`
                        <hr />
                        <button onClick=${()=>{window.open(b,"_blank","noopener"),T(null)}}>Open in New Tab</button>
                    `})()}
            </div>
        `}
    `}w0();P_();b2();function S4(_,$=30){let j=Array.isArray(_)?_.map((G)=>Number(G)).filter((G)=>Number.isFinite(G)):[];return j.length>$?j.slice(j.length-$):j}function z8(_,$=30){return S4(_,$).map((j)=>Math.max(0,Math.min(100,j)))}function w6(_,$=56,j=16,G={}){let Z=S4(_);if(Z.length===0)return"";let X=Number.isFinite(G.min)?Number(G.min):Math.min(...Z),Y=Number.isFinite(G.max)?Number(G.max):Math.max(...Z);if(!(Y>X)){let L=(j/2).toFixed(2);return`M 0 ${L} L ${$} ${L}`}if(Z.length===1){let L=(Z[0]-X)/(Y-X),V=(j-L*j).toFixed(2);return`M 0 ${V} L ${$} ${V}`}return Z.map((L,V)=>{let K=V/(Z.length-1||1)*$,Q=(L-X)/(Y-X),q=j-Q*j;return`${V===0?"M":"L"} ${K.toFixed(2)} ${q.toFixed(2)}`}).join(" ")}function _4(_){return`${Math.round(Number(_)||0)}%`}function Zj(_){let $=Number(_);if(!Number.isFinite($)||$<=0)return"0B";let j=["B","K","M","G","T"],G=0,Z=$;while(Z>=1024&&G<j.length-1)Z/=1024,G+=1;let X=Z>=100||G===0?0:Z>=10?0:1;return`${Z.toFixed(X)}${j[G]}`}function YA(_){let $=[`CPU ${_4(_?.cpu_percent)}`,`RAM ${_4(_?.ram_percent)}`];if(Number(_?.buffer_cache_bytes)>0)$.push(`BUF ${Zj(_?.buffer_cache_bytes)}`);if(xV(_))$.push(`VRAM ${_4(_?.vram_percent)}`);if(Number.isFinite(Number(_?.swap_percent))&&Number(_?.swap_total_bytes)>0)$.push(`SWP ${_4(_?.swap_percent)}`);return $.join(" • ")}function TV(_){return Number(_?.process_memory?.vm_rss_bytes)>0?Number(_.process_memory.vm_rss_bytes):Number(_?.process_memory?.rss_bytes)||0}function LA(_){return TV(_)>0&&S4(_?.process_rss_series_bytes).length>0}function xV(_){return _?.vram_percent!==null&&_?.vram_percent!==void 0&&Number.isFinite(Number(_?.vram_percent))&&Number(_?.vram_total_bytes)>0&&Number(_?.vram_used_bytes)>=0&&S4(_?.vram_series).length>0}function KA(){if(typeof window>"u"||typeof window.matchMedia!=="function")return!1;return window.matchMedia("(max-width: 900px)").matches}function IV({mode:_="overlay"}){let[$,j]=C(()=>z5(!1)),[G,Z]=C(()=>_Y(!1)),[X,Y]=C(()=>KA()),[L,V]=C({cpu_percent:0,ram_percent:0,swap_percent:null,cpu_series:[],ram_series:[],swap_series:[],vram_percent:null,vram_series:[],vram_total_bytes:0,vram_used_bytes:0,gpu_provider:null,buffer_cache_bytes:null,buffer_cache_series_bytes:[],process_rss_series_bytes:[],process_memory:{rss_bytes:0,vm_rss_bytes:null},swap_total_bytes:0,swap_used_bytes:0,sample_interval_ms:2000,platform:""}),[K,Q]=C(!1);u(()=>{let y=(R)=>{j(Boolean(R?.detail?.enabled))},I=(R)=>{Z(Boolean(R?.detail?.collapsed))};return window.addEventListener(I4,y),window.addEventListener(g2,I),()=>{window.removeEventListener(I4,y),window.removeEventListener(g2,I)}},[]),u(()=>{if(typeof window>"u"||typeof window.matchMedia!=="function")return;let y=window.matchMedia("(max-width: 900px)"),I=()=>Y(Boolean(y.matches));if(I(),typeof y.addEventListener==="function")return y.addEventListener("change",I),()=>y.removeEventListener("change",I);return y.addListener(I),()=>y.removeListener(I)},[]);let B=_==="overlay";u(()=>{if(!$||!B)return;let y=!1,I=0,R=async()=>{Q((f)=>f||L.cpu_series.length>0?f:!0);try{let f=await V7();if(y)return;V({cpu_percent:Number(f?.cpu_percent)||0,ram_percent:Number(f?.ram_percent)||0,swap_percent:Number.isFinite(Number(f?.swap_percent))?Number(f?.swap_percent):null,vram_percent:Number.isFinite(Number(f?.vram_percent))?Number(f?.vram_percent):null,cpu_series:z8(f?.cpu_series),ram_series:z8(f?.ram_series),swap_series:z8(f?.swap_series),vram_series:z8(f?.vram_series),vram_total_bytes:Number(f?.vram_total_bytes)||0,vram_used_bytes:Number(f?.vram_used_bytes)||0,gpu_provider:typeof f?.gpu_provider==="string"&&f.gpu_provider.trim()?f.gpu_provider.trim():null,buffer_cache_bytes:Number.isFinite(Number(f?.buffer_cache_bytes))?Number(f?.buffer_cache_bytes):null,buffer_cache_series_bytes:S4(f?.buffer_cache_series_bytes),process_rss_series_bytes:S4(f?.process_rss_series_bytes),process_memory:{rss_bytes:Number(f?.process_memory?.rss_bytes)||0,vm_rss_bytes:Number.isFinite(Number(f?.process_memory?.vm_rss_bytes))?Number(f?.process_memory?.vm_rss_bytes):null},swap_total_bytes:Number(f?.swap_total_bytes)||0,swap_used_bytes:Number(f?.swap_used_bytes)||0,sample_interval_ms:Number(f?.sample_interval_ms)||2000,platform:String(f?.platform||"")})}catch{if(y)return}finally{if(!y)Q(!1)}};return R(),I=window.setInterval(()=>{if(document?.visibilityState==="hidden")return;R()},Math.max(1000,Number(L.sample_interval_ms)||2000)),()=>{if(y=!0,I)window.clearInterval(I)}},[$,B]);let N=Z0(()=>w6(L.cpu_series,56,16,{min:0,max:100}),[L.cpu_series]),U=Z0(()=>w6(L.ram_series,56,16,{min:0,max:100}),[L.ram_series]),E=Z0(()=>w6(L.swap_series,56,16,{min:0,max:100}),[L.swap_series]),D=Z0(()=>w6(L.vram_series,56,16,{min:0,max:100}),[L.vram_series]),H=Z0(()=>w6(L.buffer_cache_series_bytes),[L.buffer_cache_series_bytes]),M=Z0(()=>w6(L.process_rss_series_bytes),[L.process_rss_series_bytes]),J=Number(L.buffer_cache_bytes)>0&&S4(L.buffer_cache_series_bytes).length>0,W=Number.isFinite(Number(L.swap_percent))&&L.swap_total_bytes>0,T=xV(L),x=TV(L),A=LA(L),k=Z0(()=>YA(L),[L]);if(!$||!B)return null;let O=G?"Show system meters":K?"Updating system meters… Click to collapse.":"System meters — click to collapse.",z=(y)=>{y?.stopPropagation?.();let I=!G;Z(I),i7(I)};return F`
        <div class=${`system-meters-hud system-meters-hud-${_}${G?" is-collapsed":""}`} aria-live="polite">
            <button
                class="system-meters-card"
                type="button"
                title=${O}
                aria-label=${O}
                aria-expanded=${G?"false":"true"}
                onClick=${z}
            >
                ${G?F`<span class="system-meters-collapse-tab" aria-hidden="true">◂</span>`:X?F`<span class="system-meters-compact-summary">${k}</span>`:F`
                            <div class="system-meters-row cpu">
                                <span class="system-meters-label">CPU</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${N}></path>
                                </svg>
                                <span class="system-meters-value">${_4(L.cpu_percent)}</span>
                            </div>
                            <div class="system-meters-row ram">
                                <span class="system-meters-label">RAM</span>
                                <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                    <path d=${U}></path>
                                </svg>
                                <span class="system-meters-value">${_4(L.ram_percent)}</span>
                            </div>
                            ${A&&F`
                                <div class="system-meters-row rss">
                                    <span class="system-meters-label">RSS</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${M}></path>
                                    </svg>
                                    <span class="system-meters-value">${Zj(x)}</span>
                                </div>
                            `}
                            ${T&&F`
                                <div class="system-meters-row vram" title=${L.gpu_provider?`GPU telemetry: ${L.gpu_provider}`:"GPU memory telemetry"}>
                                    <span class="system-meters-label">VRAM</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${D}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(L.vram_percent)}</span>
                                </div>
                            `}
                            ${J&&F`
                                <div class="system-meters-row buf">
                                    <span class="system-meters-label">BUF</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${H}></path>
                                    </svg>
                                    <span class="system-meters-value">${Zj(L.buffer_cache_bytes)}</span>
                                </div>
                            `}
                            ${W&&F`
                                <div class="system-meters-row swap">
                                    <span class="system-meters-label">SWP</span>
                                    <svg class="system-meters-spark" viewBox="0 0 56 16" preserveAspectRatio="none" aria-hidden="true">
                                        <path d=${E}></path>
                                    </svg>
                                    <span class="system-meters-value">${_4(L.swap_percent)}</span>
                                </div>
                            `}
                        `}
            </button>
        </div>
    `}function VA(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:G,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${G?" chat-only":""}${Z?" zen-mode":""}`}function qA(_){let $=_?.user_message?.id??_?.row_id;if($===null||$===void 0||$==="")return null;let j=Number($);return Number.isFinite(j)?j:null}function QA(_){let{id:$,scrollToBottom:j,getElementById:G=(K)=>document.getElementById(K),scheduleRaf:Z=(K)=>requestAnimationFrame(K),scheduleTimeout:X=(K,Q)=>{setTimeout(K,Q)},maxAttempts:Y=12}=_,L=(K)=>{K.scrollIntoView({behavior:"smooth",block:"center"}),K.classList.add("post-highlight"),X(()=>K.classList.remove("post-highlight"),2000)},V=(K)=>{let Q=G(`post-${$}`);if(Q){L(Q);return}if(K<=0){j?.();return}Z(()=>{X(()=>V(K-1),40)})};V(Y)}function NA(_){let{response:$,viewStateRef:j,scrollToBottom:G,scrollPostedMessage:Z=(V)=>QA({id:V,scrollToBottom:G})}=_,{searchQuery:X,searchOpen:Y}=j.current||{};if(X||Y)return;let L=qA($);if(L){Z(L);return}G()}function CV(_){let{appShellRef:$,workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X,isRenameBranchFormOpen:Y,closeRenameCurrentBranchForm:L,handleRenameCurrentBranch:V,renameBranchNameDraft:K,renameBranchNameInputRef:Q,setRenameBranchNameDraft:q,renameBranchDraftState:B,isRenamingBranch:N,addFileRef:U,addFolderRef:E,openEditor:D,openTerminalTab:H,openVncTab:M,hasDockPanes:J,toggleDock:W,dockVisible:T,handleSplitterMouseDown:x,handleSplitterTouchStart:A,showEditorPaneContainer:k,tabStripTabs:O,tabStripActiveId:z,handleTabActivate:y,handleTabClose:I,handleTabCloseOthers:R,handleTabCloseAll:f,handleTabTogglePin:v,handleTabTogglePreview:l,handleTabToggleDiff:h,handleTabEditSource:n,handleReattachPane:b,previewTabs:$0,diffTabs:E0,tabPaneOverrides:V0,toggleZenMode:K0,handlePopOutPane:X0,isWebAppMode:F0,editorContainerRef:_0,editorInstanceRef:Y0,detachedTabs:Q0,activeDetachedTab:J0,detachedDockPane:s,handleDockSplitterMouseDown:j0,handleDockSplitterTouchStart:z0,TERMINAL_TAB_PATH:C0,dockContainerRef:h0,handleEditorSplitterMouseDown:n0,handleEditorSplitterTouchStart:G_,searchQuery:m0,isIOSDevice:a0,currentBranchRecord:S0,currentChatJid:o0,currentChatBranches:c0,handleBranchPickerChange:d0,formatBranchPickerLabel:r0,openRenameCurrentBranchForm:Q_,handlePruneCurrentBranch:t0,handlePurgeArchivedBranch:l0,currentHashtag:O0,handleBackToTimeline:B_,activeSearchScopeLabel:e0,oobePanelState:D_,composePrefillRequest:H0,requestComposePrefill:u0,handleOobeSetupProvider:T0,handleOobeShowModelPicker:i0,handleOobeOpenWorkspace:A_,handleDismissProviderMissingOobe:K_,handleCompleteProviderReadyOobe:H_,posts:E_,isMainTimelineView:y_,hasMore:I_,loadMore:u_,timelineRef:e,handleHashtagClick:A0,addMessageRef:k0,scrollToMessage:d,openFileFromPill:o,openTimelineFileFromPill:a,handleDeletePost:G0,handleOpenFloatingWidget:L0,agents:M0,userProfile:b0,removingPostIds:P0,agentStatus:g0,isCompactionStatus:I0,agentDraft:D0,agentPlan:f0,agentThought:Z_,pendingRequest:__,intentToast:F_,currentTurnId:v0,steerQueued:W_,handlePanelToggle:z_,btwSession:i,closeBtwPanel:W0,handleBtwRetry:X_,handleBtwInject:V_,floatingWidget:p_,handleCloseFloatingWidget:B1,handleFloatingWidgetEvent:g_,attachmentPreview:J1,setAttachmentPreview:C_,extensionStatusPanels:M_,pendingExtensionPanelActions:A1,handleExtensionPanelAction:O_,searchOpen:k_,followupQueueItems:F1,handleInjectQueuedFollowup:m_,handleRemoveQueuedFollowup:n_,handleMoveQueuedFollowup:s_,viewStateRef:U_,loadPosts:x1,scrollToBottom:U1,searchScope:g1,handleSearch:k1,handleSearchScopeChange:e1,setSearchScope:c4,enterSearchMode:A$,exitSearchMode:t_,fileRefs:c_,removeFileRef:y1,clearFileRefs:H1,setFileRefsFromCompose:_1,folderRefs:k$,removeFolderRef:y$,clearFolderRefs:_$,setFolderRefsFromCompose:w_,messageRefs:K1,removeMessageRef:M$,clearMessageRefs:l4,setMessageRefsFromCompose:$$,handleCreateSessionFromCompose:h4,handleCreateRootSessionFromCompose:p4,handleRestoreBranch:w$,attachActiveEditorFile:T$,followupQueueCount:b1,handleBtwIntercept:v1,handleMessageResponse:r4,handleComposeSubmitError:V1,isComposeBoxAgentActive:R_,activeChatAgents:n4,connectionStatus:I1,stateAccessFailed:x$,activeModel:d4,agentModelsPayload:g6,activeModelUsage:b6,activeThinkingLevel:X4,supportsThinking:I$,contextUsage:i4,extensionWorkingState:o4,notificationsEnabled:q1,notificationPermission:C$,handleToggleNotifications:Y4,setActiveModel:L4,applyModelState:m1,setPendingRequest:E1,pendingRequestRef:v6,toggleWorkspace:K4}=_,j$=()=>{if(a0())return;U1()};return F`
    <div class=${VA({workspaceOpen:j,editorOpen:G,chatOnlyMode:Z,zenMode:X})} ref=${$}>
      <${IV} mode="overlay" />
      ${Y&&F`
        <div class="rename-branch-overlay" onPointerDown=${(e_)=>{if(e_.target===e_.currentTarget)L()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(e_)=>{e_.preventDefault(),V(K)}}
          >
            <div class="rename-branch-title">Rename session</div>
            <input
              ref=${Q}
              value=${K}
              onInput=${(e_)=>{let P$=e_.currentTarget?.value??"";q(String(P$))}}
              onKeyDown=${(e_)=>{if(e_.key==="Escape")e_.preventDefault(),L()}}
              autocomplete="off"
              placeholder="Session handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${B.kind||"info"}`}>
              ${B.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${N||!B.canSubmit}>
                ${N?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${L}
                disabled=${N}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&F`
        <${AV}
          onFileSelect=${U}
          onFolderSelect=${E}
          visible=${j}
          active=${j||G}
          onOpenEditor=${D}
          onOpenTerminalTab=${H}
          onOpenVncTab=${M}
          onToggleTerminal=${J?W:void 0}
          terminalVisible=${Boolean(J&&T)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${K4}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${x} onTouchStart=${A}></div>
      `}
      ${k&&F`
        <div class="editor-pane-container">
          ${X&&F`<div class="zen-hover-zone"></div>`}
          ${G&&F`
            <${wV}
              tabs=${O}
              activeId=${z}
              onActivate=${y}
              onClose=${I}
              onCloseOthers=${R}
              onCloseAll=${f}
              onTogglePin=${v}
              onTogglePreview=${l}
              onToggleDiff=${h}
              onEditSource=${n}
              previewTabs=${$0}
              diffTabs=${E0}
              paneOverrides=${V0}
              detachedTabs=${Q0}
              onReattachTab=${b}
              onToggleDock=${J?W:void 0}
              dockVisible=${J&&T}
              onToggleZen=${K0}
              zenMode=${X}
              onPopOutTab=${F0?void 0:X0}
            />
          `}
          ${G&&J0&&F`
            <div class="editor-pane-host editor-pane-detached-host">
              <div class="editor-empty-state">
                <div class="editor-empty-state-title">${J0.label||J0.panePath||"Detached pane"}</div>
                <div class="editor-empty-state-body">This pane is detached into another window.</div>
                <div class="editor-empty-state-actions">
                  <button class="editor-empty-state-button" onClick=${()=>b(J0.panePath)}>Reattach here</button>
                </div>
              </div>
            </div>
          `}
          ${G&&!J0&&F`<div class="editor-pane-host" ref=${_0}></div>`}
          ${G&&!J0&&z&&$0.has(z)&&F`
            <${i2}
              getContent=${()=>Y0.current?.getContent?.()}
              path=${z}
              onClose=${()=>l(z)}
            />
          `}
          ${J&&T&&F`<div class="dock-splitter" onMouseDown=${j0} onTouchStart=${z0}></div>`}
          ${J&&F`<div class=${`dock-panel${T?"":" hidden"}${G?"":" standalone"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!F0&&!s&&F`
                  <button class="dock-panel-action" onClick=${()=>X0(C0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                ${s&&F`
                  <button class="dock-panel-action" onClick=${()=>b(C0)} title="Reattach terminal" aria-label="Reattach terminal">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="11.5" height="11.5" rx="1.5"/>
                      <path d="M5.25 8h5.5"/>
                      <path d="M8 5.25v5.5"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${W} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            ${s?F`
                <div class="dock-panel-body dock-panel-body-detached">
                  <div class="editor-empty-state">
                    <div class="editor-empty-state-title">Terminal detached</div>
                    <div class="editor-empty-state-body">The terminal is open in another window.</div>
                    <div class="editor-empty-state-actions">
                      <button class="editor-empty-state-button" onClick=${()=>b(C0)}>Reattach here</button>
                    </div>
                  </div>
                </div>
              `:F`<div class="dock-panel-body" ref=${h0}></div>`}
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${n0} onTouchStart=${G_}></div>
      `}
      <${DK}
        workspaceOpen=${j}
        toggleWorkspace=${K4}
        chatOnlyMode=${Z}
        onOpenTerminalTab=${H}
        onOpenVncTab=${M}
        onToggleTerminal=${J?W:void 0}
        terminalVisible=${Boolean(J&&T)}
      />
      <${EK}
        activeChatAgents=${n4}
        currentChatJid=${o0}
        workspaceOpen=${j}
        chatOnlyMode=${Z}
        terminalVisible=${Boolean(J&&T)}
        onSwitchChat=${d0}
        onToggleWorkspace=${K4}
        onOpenTerminalTab=${H}
        onOpenVncTab=${M}
        onToggleTerminalDock=${J?W:void 0}
        onPrefillCompose=${u0}
      />
      <div class="container">
        ${m0&&a0()&&F`<div class="search-results-spacer"></div>`}
        ${(O0||m0)&&F`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${B_}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${O0?`#${O0}`:`Search: ${m0} · ${e0}`}</span>
          </div>
        `}
        ${D_?.kind&&D_.kind!=="hidden"&&F`
          <${fL}
            kind=${D_.kind}
            onSetupProvider=${T0}
            onShowModelPicker=${i0}
            onOpenWorkspace=${A_}
            onDismiss=${D_.kind==="provider-missing"?K_:H_}
          />
        `}
        <${ZV}
          posts=${E_}
          hasMore=${y_?I_:!1}
          onLoadMore=${y_?u_:void 0}
          timelineRef=${e}
          onHashtagClick=${A0}
          onMessageRef=${k0}
          onScrollToMessage=${d}
          onFileRef=${a||o}
          onPostClick=${void 0}
          onDeletePost=${G0}
          onOpenWidget=${L0}
          onOpenAttachmentPreview=${C_}
          emptyMessage=${O0?`No posts with #${O0}`:m0?`No results for "${m0}"`:void 0}
          agents=${M0}
          user=${b0}
          reverse=${y_}
          removingPostIds=${P0}
          searchQuery=${m0}
        />
        <${b9}
          status=${I0(g0)?null:g0}
          draft=${D0}
          plan=${f0}
          thought=${Z_}
          pendingRequest=${__}
          intent=${F_}
          turnId=${v0}
          steerQueued=${W_}
          onPanelToggle=${z_}
          showExtensionPanels=${!1}
        />
        <${vL}
          session=${i}
          onClose=${W0}
          onRetry=${X_}
          onInject=${V_}
        />
        <${_K}
          widget=${p_}
          onClose=${B1}
          onWidgetEvent=${g_}
        />
        ${J1&&F`
          <${FK}
            mediaId=${J1.mediaId}
            info=${J1.info}
            onClose=${()=>C_(null)}
          />
        `}
        <${VL} />
        <${b9}
          extensionPanels=${Array.from(M_.values())}
          pendingPanelActions=${A1}
          onExtensionPanelAction=${O_}
          turnId=${v0}
          steerQueued=${W_}
          onPanelToggle=${z_}
          showCorePanels=${!1}
        />
        <${I9}
          items=${k_?[]:F1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onOpenFilePill=${o}
        />
        <${PL}
          onPost=${(e_)=>{NA({response:e_,viewStateRef:U_,scrollToBottom:U1})}}
          onFocus=${j$}
          searchMode=${k_}
          searchScope=${g1}
          onSearch=${k1}
          onSearchScopeChange=${e1||c4}
          onEnterSearch=${A$}
          onExitSearch=${t_}
          fileRefs=${c_}
          onRemoveFileRef=${y1}
          onClearFileRefs=${H1}
          onSetFileRefs=${_1}
          folderRefs=${k$}
          onRemoveFolderRef=${y$}
          onClearFolderRefs=${_$}
          onSetFolderRefs=${w_}
          messageRefs=${K1}
          onRemoveMessageRef=${M$}
          onClearMessageRefs=${l4}
          onSetMessageRefs=${$$}
          onSwitchChat=${d0}
          onRenameSession=${V}
          isRenameSessionInProgress=${N}
          onCreateSession=${h4}
          onCreateRootSession=${p4}
          onDeleteSession=${t0}
          onPurgeArchivedSession=${l0}
          onRestoreSession=${w$}
          activeEditorPath=${Z?null:z}
          onAttachEditorFile=${Z?void 0:T$}
          onOpenFilePill=${o}
          followupQueueCount=${b1}
          followupQueueItems=${F1}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${m_}
          onRemoveQueuedFollowup=${n_}
          onMoveQueuedFollowup=${s_}
          onSubmitIntercept=${v1}
          onMessageResponse=${r4}
          onSubmitError=${V1}
          isAgentActive=${R_}
          activeChatAgents=${n4}
          currentChatJid=${o0}
          connectionStatus=${I1}
          stateAccessFailed=${x$}
          activeModel=${d4}
          agentModelsPayload=${g6}
          modelUsage=${b6}
          thinkingLevel=${X4}
          supportsThinking=${I$}
          contextUsage=${i4}
          notificationsEnabled=${q1}
          notificationPermission=${C$}
          onToggleNotifications=${Y4}
          onModelChange=${L4}
          onModelStateChange=${m1}
          statusNotice=${I0(g0)?g0:null}
          extensionWorkingState=${o4}
          prefillRequest=${H0}
        />
        <${TK}
          request=${__}
          onRespond=${()=>{E1(null),v6.current=null}}
        />
      </div>
    </div>
  `}function PV(_){let{branchLoaderMode:$,panePopoutMode:j,branchLoaderState:G,panePopoutOptions:Z,mainShellOptions:X,renderers:Y}=_,L=NL({branchLoaderMode:$,panePopoutMode:j}),V=Y?.renderBranchLoaderMode||BL,K=Y?.renderPanePopoutMode||FL,Q=Y?.renderMainShell||CV;if(L==="branch-loader")return V(G);if(L==="pane-popout")return K(Z);return Q(X)}var O8="piclaw_btw_session",RV=900,fV="__piclawRenameBranchFormLock__";function BA(){try{return import.meta.url}catch{return null}}function Xj(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function FA(_){try{let $=_?new URL(_).searchParams.get("v"):null;return $&&$.trim()?$.trim():null}catch{return null}}function W8(_,$,j=""){let G=_?.get?.($);return G&&G.trim()?G.trim():j}function SV(_={}){let $=_.importMetaUrl===void 0?BA():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,G=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost",Z=FA($);if(Z)return Z;try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((K)=>String(K?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let V=new URL(Y,G).searchParams.get("v");return V&&V.trim()?V.trim():null}catch{return null}}function uV(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[fV];if(j&&typeof j==="object")return j;let G={inFlight:!1,cooldownUntil:0};return $[fV]=G,G}function gV(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function bV(_={}){let $=typeof _.readItem==="function"?_.readItem:z1,j=_.storageKey||O8,G=$(j);if(!G)return null;try{let Z=JSON.parse(G);if(!Z||typeof Z!=="object")return null;let X=typeof Z.question==="string"?Z.question:"",Y=typeof Z.answer==="string"?Z.answer:"",L=typeof Z.thinking==="string"?Z.thinking:"",V=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,K=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:X,answer:Y,thinking:L,error:K==="error"?V||"BTW stream interrupted. You can retry.":V,model:null,status:K}}catch{return null}}function vV(_,$={}){let j=$.defaultChatJid||"web:default",G=W8(_,"chat_jid",j),Z=Xj(_?.get?.("chat_only")||_?.get?.("chat-only")),X=Xj(_?.get?.("pane_popout")),Y=W8(_,"pane_path"),L=W8(_,"pane_label"),V=Xj(_?.get?.("branch_loader")),K=W8(_,"branch_source_chat_jid",G);return{currentChatJid:G,chatOnlyMode:Z,panePopoutMode:X,panePopoutPath:Y,panePopoutLabel:L,branchLoaderMode:V,branchLoaderSourceChatJid:K}}function mV(_,$){let j=Array.isArray(_)?_:[];return j.find((G)=>G?.id===$)||j[0]||null}function cV(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function Yj(_,$,j){return _||$?.label||j||"Pane"}function lV(_,$,j){return`${Yj(_,$,j)} · PiClaw`}function hV(_,$,j,G){let Z=Array.isArray(_)?_.length:0,X=Boolean(G&&$?.has?.(G)),Y=Boolean(G&&j?.has?.(G));return Z>1||X||Y}function pV(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function rV(_,$,j,G){return _===$&&!j||G}function nV(_,$,j,G,Z){return _||!$&&(j||G&&Z)}P_();function UA(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function Y1(_,$,j){let G=_?.[$];return typeof G==="function"?G:UA($,j)}var dV=!1,iV=!1,oV=!1;function HA(_){if(!_||typeof _.setOptions!=="function")return;_.setOptions({breaks:!0,gfm:!0})}function EA(_=typeof window<"u"?window:null){if(!_||iV)return;let $=(j)=>{let G=String(j?.message||j?.error?.message||"").trim();if(!/ResizeObserver loop (completed with undelivered notifications|limit exceeded)/i.test(G)){if(!(G==="Script error."&&(j?.lineno===0||!j?.filename)))return}j.preventDefault?.(),j.stopImmediatePropagation?.()};_.addEventListener("error",$,!0),iV=!0}function DA(){Y_.register(E3),Y_.register(S7),Y_.register(R7),Y_.register(u7),Y_.register(g7),Y_.register(b7),Y_.register(m7),Y_.register(c7),Y_.register(l7),Y_.register(p7),Y_.register(s3),D3(),Y_.register(k3),Y_.register(y3)}function zA(_=typeof window<"u"?window:null){if(!_||oV)return;if(!_.isSecureContext)return;if(!("serviceWorker"in _.navigator))return;oV=!0,_.navigator.serviceWorker.register("/sw.js").catch(($)=>{console.warn("Failed to register app service worker:",$)})}async function sV(){if(dV)return;let _=typeof window<"u"?window:null,$=_?_?.marked:null;if(HA($),EA(_),S9(_),_)try{let j=await Promise.resolve().then(() => (w0(),DG));_.__piclawPreactHtm=j,_.__piclawPreact=j}catch(j){}DA(),await KK(_),zA(_),dV=!0}function WA(_=N5){return{searchPosts:_.searchPosts,deletePost:_.deletePost,getAgents:_.getAgents,getAgentThought:_.getAgentThought,setAgentThoughtVisibility:_.setAgentThoughtVisibility,getAgentStatus:_.getAgentStatus,getWorkspaceFile:_.getWorkspaceFile,getThread:_.getThread,getTimeline:_.getTimeline,sendAgentMessage:_.sendAgentMessage,forkChatBranch:_.forkChatBranch,getAgentContext:Y1(_,"getAgentContext",null),getAutoresearchStatus:Y1(_,"getAutoresearchStatus",null),stopAutoresearch:Y1(_,"stopAutoresearch",{status:"ok"}),dismissAutoresearch:Y1(_,"dismissAutoresearch",{status:"ok"}),getAgentModels:Y1(_,"getAgentModels",{current:null,models:[]}),completeInstanceOobe:Y1(_,"completeInstanceOobe",{status:"ok"}),getActiveChatAgents:Y1(_,"getActiveChatAgents",{chats:[]}),getChatBranches:Y1(_,"getChatBranches",{chats:[]}),renameChatBranch:Y1(_,"renameChatBranch",null),pruneChatBranch:Y1(_,"pruneChatBranch",null),restoreChatBranch:Y1(_,"restoreChatBranch",null),getAgentQueueState:Y1(_,"getAgentQueueState",{count:0}),steerAgentQueueItem:Y1(_,"steerAgentQueueItem",{removed:!1,queued:"steer"}),removeAgentQueueItem:Y1(_,"removeAgentQueueItem",{removed:!1}),streamSidePrompt:Y1(_,"streamSidePrompt",null)}}var aV=WA(N5);function tV(_){let{routing:$,paneRuntime:j,splitters:G,branchPaneActions:Z,timelineViewActions:X,composeReferenceActions:Y,sidepanelActions:L,shellState:V,agentState:K,composeState:Q,modelState:q}=_,B={appShellRef:V.appShellRef,editorOpen:V.editorOpen,hidePanePopoutControls:j.hidePanePopoutControls,panePopoutHasMenuActions:j.panePopoutHasMenuActions,panePopoutTitle:j.panePopoutTitle,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,editorContainerRef:j.editorContainerRef,getPaneContent:()=>j.editorInstanceRef?.current?.getContent?.(),panePopoutPath:V.panePopoutPath,canReattachPane:j.canReattachPanePopout,handleReattachPane:j.requestPanePopoutReattach},N={appShellRef:V.appShellRef,workspaceOpen:V.workspaceOpen,editorOpen:V.editorOpen,chatOnlyMode:V.chatOnlyMode,zenMode:j.zenMode,isRenameBranchFormOpen:V.isRenameBranchFormOpen,closeRenameCurrentBranchForm:Z.closeRenameCurrentBranchForm,handleRenameCurrentBranch:Z.handleRenameCurrentBranch,renameBranchNameDraft:V.renameBranchNameDraft,renameBranchNameInputRef:V.renameBranchNameInputRef,setRenameBranchNameDraft:V.setRenameBranchNameDraft,renameBranchDraftState:V.renameBranchDraftState,isRenamingBranch:V.isRenamingBranch,hasDockPanes:j.hasDockPanes,toggleDock:j.toggleDock,dockVisible:j.dockVisible,showEditorPaneContainer:j.showEditorPaneContainer,toggleZenMode:j.toggleZenMode,isWebAppMode:V.isWebAppMode,editorContainerRef:j.editorContainerRef,editorInstanceRef:j.editorInstanceRef,dockContainerRef:j.dockContainerRef,detachedTabs:j.detachedTabs,activeDetachedTab:j.activeDetachedTab,detachedDockPane:j.detachedDockPane,TERMINAL_TAB_PATH:V.TERMINAL_TAB_PATH,isIOSDevice:V.isIOSDevice,currentBranchRecord:V.currentBranchRecord,currentChatJid:V.currentChatJid,currentChatBranches:V.currentChatBranches,formatBranchPickerLabel:V.formatBranchPickerLabel,activeSearchScopeLabel:V.activeSearchScopeLabel,currentHashtag:V.currentHashtag,searchQuery:V.searchQuery,oobePanelState:V.oobePanelState,composePrefillRequest:V.composePrefillRequest,requestComposePrefill:V.requestComposePrefill,handleOobeSetupProvider:V.handleOobeSetupProvider,handleOobeShowModelPicker:V.handleOobeShowModelPicker,handleOobeOpenWorkspace:V.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:V.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:V.handleCompleteProviderReadyOobe,posts:V.posts,hasMore:V.hasMore,loadMore:V.loadMore,timelineRef:V.timelineRef,agents:V.agents,userProfile:V.userProfile,removingPostIds:V.removingPostIds,extensionStatusPanels:V.extensionStatusPanels,pendingExtensionPanelActions:V.pendingExtensionPanelActions,searchOpen:V.searchOpen,followupQueueItems:V.followupQueueItems,viewStateRef:V.viewStateRef,loadPosts:V.loadPosts,scrollToBottom:V.scrollToBottom,searchScope:V.searchScope,tabStripTabs:V.tabStripTabs,tabStripActiveId:V.tabStripActiveId,handleTabActivate:V.handleTabActivate,previewTabs:V.previewTabs,diffTabs:V.diffTabs,handleTabTogglePreview:V.handleTabTogglePreview,handleTabToggleDiff:V.handleTabToggleDiff,panePopoutPath:V.panePopoutPath,tabPaneOverrides:V.tabPaneOverrides,handleTabClose:V.handleTabClose,handleTabCloseOthers:V.handleTabCloseOthers,handleTabCloseAll:V.handleTabCloseAll,handleTabTogglePin:V.handleTabTogglePin,handleTabEditSource:V.handleTabEditSource,handleReattachPane:j.reattachPane,openEditor:V.openEditor,openTerminalTab:V.openTerminalTab,openVncTab:V.openVncTab,fileRefs:Q.fileRefs,folderRefs:Q.folderRefs,messageRefs:Q.messageRefs,followupQueueCount:Q.followupQueueCount,attachmentPreview:Q.attachmentPreview,setAttachmentPreview:Q.setAttachmentPreview,extensionWorkingState:Q.extensionWorkingState,activeChatAgents:q.activeChatAgents,connectionStatus:q.connectionStatus,stateAccessFailed:q.stateAccessFailed,activeModel:q.activeModel,activeModelUsage:q.activeModelUsage,activeThinkingLevel:q.activeThinkingLevel,supportsThinking:q.supportsThinking,contextUsage:q.contextUsage,notificationsEnabled:q.notificationsEnabled,notificationPermission:q.notificationPermission,handleToggleNotifications:q.handleToggleNotifications,setActiveModel:q.setActiveModel,applyModelState:q.applyModelState,setPendingRequest:K.setPendingRequest,pendingRequestRef:K.pendingRequestRef,...G,...Z,...X,...Y,...L,...K,...Q,...q};return{branchLoaderMode:$.branchLoaderMode,panePopoutMode:$.panePopoutMode,branchLoaderState:$.branchLoaderState,panePopoutOptions:B,mainShellOptions:N}}function OA(_){let{steerQueuedTurnId:$,currentTurnId:j,agentStatus:G}=_;return Boolean($&&$===(G?.turn_id||j))}function eV(_){let $=OA({steerQueuedTurnId:_.agentState.steerQueuedTurnId,currentTurnId:_.agentState.currentTurnId,agentStatus:_.agentState.agentStatus});return tV({routing:{branchLoaderMode:_.routeState.branchLoaderMode,panePopoutMode:_.routeState.panePopoutMode,branchLoaderState:_.surface.branchLoaderState},paneRuntime:_.paneRuntime,splitters:_.splitters,branchPaneActions:_.orchestration.branchPaneActions,timelineViewActions:_.orchestration.timelineViewActions,composeReferenceActions:_.interaction.composeReferenceActions,sidepanelActions:_.orchestration.sidepanelActions,shellState:{appShellRef:_.surface.appShellRef,workspaceOpen:_.surface.workspaceOpen,editorOpen:_.editorState.editorOpen,chatOnlyMode:_.routeState.chatOnlyMode,isRenameBranchFormOpen:_.surface.isRenameBranchFormOpen,renameBranchNameDraft:_.surface.renameBranchNameDraft,renameBranchNameInputRef:_.surface.renameBranchNameInputRef,setRenameBranchNameDraft:_.surface.setRenameBranchNameDraft,renameBranchDraftState:_.surface.renameBranchDraftState,isRenamingBranch:_.surface.isRenamingBranch,isWebAppMode:_.surface.isWebAppMode,TERMINAL_TAB_PATH:_.helpers.terminalTabPath,isIOSDevice:_.helpers.isIOSDevice,currentBranchRecord:_.surface.currentBranchRecord,currentChatJid:_.routeState.currentChatJid,currentChatBranches:_.surface.currentChatBranches,formatBranchPickerLabel:_.helpers.formatBranchPickerLabel,activeSearchScopeLabel:_.surface.activeSearchScopeLabel,currentHashtag:_.surface.currentHashtag,searchQuery:_.surface.searchQuery,oobePanelState:_.surface.oobePanelState,composePrefillRequest:_.surface.composePrefillRequest,requestComposePrefill:_.surface.requestComposePrefill,handleOobeSetupProvider:_.surface.handleOobeSetupProvider,handleOobeShowModelPicker:_.surface.handleOobeShowModelPicker,handleOobeOpenWorkspace:_.surface.handleOobeOpenWorkspace,handleDismissProviderMissingOobe:_.surface.handleDismissProviderMissingOobe,handleCompleteProviderReadyOobe:_.surface.handleCompleteProviderReadyOobe,posts:_.timeline.posts,hasMore:_.timeline.hasMore,loadMore:_.timeline.loadMore,timelineRef:_.surface.timelineRef,agents:_.surface.agents,userProfile:_.surface.userProfile,removingPostIds:_.surface.removingPostIds,extensionStatusPanels:_.surface.extensionStatusPanels,pendingExtensionPanelActions:_.surface.pendingExtensionPanelActions,searchOpen:_.surface.searchOpen,followupQueueItems:_.surface.followupQueueItems,viewStateRef:_.surface.viewStateRef,loadPosts:_.timeline.loadPosts,scrollToBottom:_.timeline.scrollToBottom,searchScope:_.surface.searchScope,tabStripTabs:_.editorState.tabStripTabs,tabStripActiveId:_.editorState.tabStripActiveId,handleTabActivate:_.editorState.handleTabActivate,previewTabs:_.editorState.previewTabs,diffTabs:_.editorState.diffTabs,handleTabTogglePreview:_.editorState.handleTabTogglePreview,handleTabToggleDiff:_.editorState.handleTabToggleDiff,panePopoutPath:_.routeState.panePopoutPath,tabPaneOverrides:_.editorState.tabPaneOverrides,handleTabClose:_.editorState.handleTabClose,handleTabCloseOthers:_.editorState.handleTabCloseOthers,handleTabCloseAll:_.editorState.handleTabCloseAll,handleTabTogglePin:_.editorState.handleTabTogglePin,handleTabEditSource:_.editorState.handleTabEditSource,openEditor:_.editorState.openEditor,openTerminalTab:_.paneRuntime.openTerminalTab,openVncTab:_.paneRuntime.openVncTab},agentState:{agentStatus:_.agentState.agentStatus,isCompactionStatus:_.agentState.isCompactionStatus,agentDraft:_.agentState.agentDraft,agentPlan:_.agentState.agentPlan,agentThought:_.agentState.agentThought,pendingRequest:_.agentState.pendingRequest,intentToast:_.surface.intentToast,currentTurnId:_.agentState.currentTurnId,steerQueued:$,handlePanelToggle:_.interaction.handlePanelToggle,setPendingRequest:_.agentState.setPendingRequest,pendingRequestRef:_.agentState.pendingRequestRef,handleInjectQueuedFollowup:_.orchestration.followupActions.handleInjectQueuedFollowup,handleRemoveQueuedFollowup:_.orchestration.followupActions.handleRemoveQueuedFollowup,handleMoveQueuedFollowup:_.orchestration.followupActions.handleMoveQueuedFollowup},composeState:{btwSession:_.surface.btwSession,floatingWidget:_.surface.floatingWidget,fileRefs:_.surface.fileRefs,folderRefs:_.surface.folderRefs,messageRefs:_.surface.messageRefs,followupQueueCount:_.surface.followupQueueCount,attachmentPreview:_.surface.attachmentPreview,setAttachmentPreview:_.surface.setAttachmentPreview,handleMessageResponse:_.orchestration.followupActions.handleMessageResponse,isComposeBoxAgentActive:_.orchestration.isComposeBoxAgentActive,extensionWorkingState:_.surface.extensionWorkingState},modelState:{activeChatAgents:_.surface.activeChatAgents,connectionStatus:_.surface.connectionStatus,stateAccessFailed:_.surface.stateAccessFailed,activeModel:_.surface.activeModel,agentModelsPayload:_.surface.agentModelsPayload,activeModelUsage:_.surface.activeModelUsage,activeThinkingLevel:_.surface.activeThinkingLevel,supportsThinking:_.surface.supportsThinking,contextUsage:_.surface.contextUsage,notificationsEnabled:_.surface.notificationsEnabled,notificationPermission:_.surface.notificationPermission,handleToggleNotifications:_.surface.handleToggleNotifications,setActiveModel:_.surface.setActiveModel,applyModelState:_.orchestration.chatRefreshLifecycle.applyModelState}})}w0();var $q="(min-width: 1024px) and (orientation: landscape)";function Lj(_=typeof window<"u"?window:null){return _&&typeof _==="object"?_:null}function _q(_,$){let j=Lj(_);if(!j?.localStorage?.getItem)return null;try{let G=j.localStorage.getItem($);if(G===null)return null;return G==="true"}catch{return null}}function JA(_,$,j){let G=Lj(_);if(!G?.localStorage?.setItem)return;try{G.localStorage.setItem($,String(Boolean(j)))}catch{return}}function T5(_=typeof window<"u"?window:null){let $=Lj(_);if(!$?.matchMedia)return"desktop";return $.matchMedia("(min-width: 1024px) and (orientation: landscape)").matches?"desktop":"narrow"}function jq(_){return _==="narrow"?"workspaceOpen.narrow":"workspaceOpen.desktop"}function Gq(_={}){let{runtime:$=typeof window<"u"?window:null,bucket:j=null,allowLegacyFallback:G=!1,defaultValue:Z=!1}=_,X=j||T5($),Y=jq(X),L=_q($,Y);if(typeof L==="boolean")return L;if(G&&X==="desktop"){let V=_q($,"workspaceOpen");if(typeof V==="boolean")return V}return Z}function Zq(_,$={}){let{runtime:j=typeof window<"u"?window:null,bucket:G=null}=$,Z=G||T5(j);JA(j,jq(Z),Boolean(_))}_5();var AA=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function Xq(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(f1({window:j,navigator:G}))};Z();let Y=AA.map((L)=>{try{return j.matchMedia?.(L)??null}catch{return null}}).filter(Boolean).map((L)=>{if(typeof L.addEventListener==="function")return L.addEventListener("change",Z),()=>L.removeEventListener("change",Z);if(typeof L.addListener==="function")return L.addListener(Z),()=>L.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let L of Y)L();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function J8(_,$={}){let j=$.window??(typeof window<"u"?window:null),G=$.document??(typeof document<"u"?document:null);if(!j||!G||typeof _!=="function")return()=>{};let Z=()=>{if(G.visibilityState&&G.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),G.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),G.removeEventListener?.("visibilitychange",Z)}}function Yq(_={}){return f1(_)&&L2(_)}function kA(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let G=Number($?.innerHeight||0);if(Number.isFinite(G)&&G>0)return Math.round(G);return null}function yA(_={},$={}){if(!Yq(_))return null;let j=_.window??(typeof window<"u"?window:null),G=_.document??(typeof document<"u"?document:null);if(!j||!G?.documentElement)return null;let Z=kA({window:j});if(Z&&Z>0)G.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch(X){console.debug("[mobile-viewport] Ignoring scrollTo failure during standalone viewport reset.",X)}try{if(G.scrollingElement)G.scrollingElement.scrollTop=0,G.scrollingElement.scrollLeft=0;if(G.documentElement)G.documentElement.scrollTop=0,G.documentElement.scrollLeft=0;if(G.body)G.body.scrollTop=0,G.body.scrollLeft=0}catch(X){console.debug("[mobile-viewport] Ignoring DOM scroll reset failure during standalone viewport sync.",X)}}return Z}function Lq(_={}){if(!Yq(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};j.documentElement?.style?.setProperty?.("--app-height","100vh");let G=0,Z=new Set,X=()=>{if(G)$.cancelAnimationFrame?.(G),G=0;for(let q of Z)$.clearTimeout?.(q);Z.clear()},Y=()=>{G=0,yA({window:$,document:j})},L=()=>{if(G)$.cancelAnimationFrame?.(G);G=$.requestAnimationFrame?.(Y)??0},V=()=>{L();for(let q of[80,220,420]){let B=$.setTimeout?.(()=>{Z.delete(B),L()},q);if(B!=null)Z.add(B)}},K=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;V()},Q=$.visualViewport;return V(),$.addEventListener("focus",V),$.addEventListener("pageshow",V),$.addEventListener("resize",V),$.addEventListener("orientationchange",V),j.addEventListener("visibilitychange",K),j.addEventListener("focusin",V,!0),Q?.addEventListener?.("resize",V),Q?.addEventListener?.("scroll",V),()=>{X(),$.removeEventListener("focus",V),$.removeEventListener("pageshow",V),$.removeEventListener("resize",V),$.removeEventListener("orientationchange",V),j.removeEventListener("visibilitychange",K),j.removeEventListener("focusin",V,!0),Q?.removeEventListener?.("resize",V),Q?.removeEventListener?.("scroll",V)}}var Kj="resume-layout-settling",MA=220,T6=new WeakMap;function wA(_){if(!_){L_(O8,"");return}L_(O8,JSON.stringify({question:_.question||"",answer:_.answer||"",thinking:_.thinking||"",error:_.error||null,status:_.status||"success"}))}function TA(_={}){if(_.panePopoutMode)return!1;let $=typeof _.search==="string"?_.search:"";return!/(?:^|[?&])pane_popout=1(?:&|$)/.test($)}function xA(_,$={}){if(!_)return()=>{};let{durationMs:j=MA,scheduleTimeout:G=setTimeout,clearScheduledTimeout:Z=clearTimeout}=$,X=T6.get(_);if(X)Z(X);_.classList.add(Kj);let Y=G(()=>{if(T6.get(_)===Y)_.classList.remove(Kj),T6.delete(_)},j);return T6.set(_,Y),()=>{let L=T6.get(_);if(L)Z(L),T6.delete(_);_.classList.remove(Kj)}}function IA(_,$){if(!_?.getElementById)return;let j=encodeURIComponent(String($||"0")),G={"dynamic-manifest":`/manifest.json?v=${j}`,"dynamic-favicon":`/favicon.ico?v=${j}`,"dynamic-apple-touch-icon":`/apple-touch-icon.png?v=${j}`,"dynamic-apple-touch-icon-180":`/apple-touch-icon-180x180.png?v=${j}`,"dynamic-apple-touch-icon-167":`/apple-touch-icon-167x167.png?v=${j}`,"dynamic-apple-touch-icon-152":`/apple-touch-icon-152x152.png?v=${j}`,"dynamic-apple-touch-icon-precomposed":`/apple-touch-icon-precomposed.png?v=${j}`};for(let[Z,X]of Object.entries(G)){let Y=_.getElementById(Z);if(Y&&Y.href!==X)Y.href=X}}function Kq(_){let{isRenameBranchFormOpen:$,renameBranchNameInputRef:j,appShellRef:G,setIsWebAppMode:Z,workspaceOpen:X,setWorkspaceOpen:Y,btwSession:L,agents:V,agentsRef:K,currentChatJid:Q,activeChatJidRef:q,userProfile:B,userProfileRef:N,brandingRef:U,panePopoutMode:E=!1}=_;rX(30000),u(()=>{if(!$)return;requestAnimationFrame(()=>{if($)j.current?.focus?.(),j.current?.select?.()})},[$,j]),u(()=>hZ(),[]),u(()=>Xq(Z),[Z]),u(()=>{let M=()=>{},J=J8(()=>{G7(),M(),M=xA(G.current)});return()=>{J(),M()}},[G]);let D=g(T5());return u(()=>{Zq(X,{bucket:D.current})},[X]),u(()=>{if(typeof window>"u"||!window.matchMedia)return;let M=window.matchMedia($q),J=()=>{let W=T5(window);if(D.current===W)return;let T=D.current;if(D.current=W,T==="desktop"&&W==="narrow")Y(!1)};if(M.addEventListener)M.addEventListener("change",J);else if(M.addListener)M.addListener(J);return()=>{if(M.removeEventListener)M.removeEventListener("change",J);else if(M.removeListener)M.removeListener(J)}},[Y]),u(()=>Lq(),[]),u(()=>{wA(L)},[L]),u(()=>{K.current=V||{}},[V,K]),u(()=>{q.current=Q},[q,Q]),u(()=>{N.current=B||{name:"You",avatar_url:null,avatar_background:null}},[B,N]),{applyBranding:P((M,J,W=null)=>{if(typeof document>"u")return;let T=(M||"").trim()||"PiClaw";if(U.current.title!==T){if(TA({panePopoutMode:E,search:typeof window<"u"?window.location.search:""})){document.title=T;let A=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(A&&A.getAttribute("content")!==T)A.setAttribute("content",T)}U.current.title=T}let x=J?`${J}|${W||""}`:"";if(U.current.avatarBase!==x){U.current.avatarBase=x;let A=W||Date.now();IA(document,A)}},[U])}}w0();function Vq(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen&&!$.autoOpenEditor)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function Vj(_){if(typeof _==="string")return _.trim();if(typeof _==="number")return Number.isFinite(_)?String(_):"";if(typeof _==="bigint")return String(_);return""}function A8(_,$){let j=Array.isArray(_)?_:[],G=Vj($);if(!G)return j;if(j.includes(G))return j;return[...j,G]}function k8(_,$){let j=Array.isArray(_)?_:[],G=Vj($);if(!G)return j;if(!j.includes(G))return j;return j.filter((Z)=>Z!==G)}function y8(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let G of _){let Z=Vj(G);if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}async function qq(_){let{hashtag:$,setCurrentHashtag:j,setPosts:G,loadPosts:Z}=_;j($),G(null),await Z($)}async function Qq(_){let{setCurrentHashtag:$,setSearchQuery:j,setPosts:G,loadPosts:Z}=_;$(null),j(null),G(null),await Z()}async function qj(_){let{query:$,scope:j,currentChatJid:G,currentRootChatJid:Z,searchPosts:X,setSearchScope:Y,setSearchQuery:L,setCurrentHashtag:V,setPosts:K,setHasMore:Q}=_,q=typeof $==="string"?$.trim():"";if(!q)return;let B=j==="root"||j==="all"?j:"current";Y(B),L(q),V(null),K(null);try{let N=await X(q,50,0,G,B,Z,_.filters);K(Array.isArray(N?.results)?N.results:[]),Q(!1)}catch(N){console.error("Failed to search:",N),K([])}}async function Nq(_){let{post:$,posts:j,currentChatJid:G,deletePost:Z,preserveTimelineScrollTop:X,setPosts:Y,setRemovingPostIds:L,hasMoreRef:V,loadMoreRef:K,confirm:Q=(H)=>window.confirm(H),showAlert:q=(H)=>alert(H),scheduleTimeout:B=(H,M)=>{setTimeout(H,M)}}=_;if(!$)return;let N=$.id,U=typeof $?.chat_jid==="string"&&$.chat_jid.trim()?$.chat_jid.trim():G,E=j?.filter((H)=>H?.data?.thread_id===N&&H?.id!==N).length||0;if(E>0){if(!Q(`Delete this message and its ${E} replies?`))return}let D=(H)=>{if(!H.length)return;L((M)=>{let J=new Set(M);return H.forEach((W)=>J.add(W)),J}),B(()=>{if(X(()=>{Y((M)=>M?M.filter((J)=>!H.includes(J.id)):M)}),L((M)=>{let J=new Set(M);return H.forEach((W)=>J.delete(W)),J}),V.current)K.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let H=await Z(N,E>0,U);if(H?.ids?.length)D(H.ids)}catch(H){let M=H instanceof Error?H.message:String(H||"");if(E===0&&M.includes("Replies exist")){if(!Q("Delete this message and its replies?"))return;let W=await Z(N,!0,U);if(W?.ids?.length)D(W.ids);return}console.error("Failed to delete post:",H),q(`Failed to delete message: ${M}`)}}async function Bq(_){let{id:$,targetChatJid:j,currentChatJid:G,getThread:Z,setPosts:X,getElementById:Y=(q)=>document.getElementById(q),scheduleRaf:L=(q)=>requestAnimationFrame(q),scheduleTimeout:V=(q,B)=>{setTimeout(q,B)}}=_,K=(q)=>{q.scrollIntoView({behavior:"smooth",block:"center"}),q.classList.add("post-highlight"),V(()=>q.classList.remove("post-highlight"),2000)},Q=Y(`post-${$}`);if(Q){K(Q);return}try{let q=typeof j==="string"&&j.trim()?j.trim():G,N=(await Z($,q))?.thread?.[0];if(!N)return;X((U)=>{if(!U)return[N];if(U.some((E)=>E.id===N.id))return U;return[...U,N]}),L(()=>{V(()=>{let U=Y(`post-${$}`);if(U)K(U)},50)})}catch(q){console.error("[scrollToMessage] Failed to fetch message",$,q)}}function CA(_){if(typeof _==="string"&&_.trim())return _.trim();return"Could not send your message."}function PA(_){let{id:$,targetChatJid:j=null,currentChatJid:G,currentHashtag:Z=null,searchQuery:X=null,searchOpen:Y=!1,setCurrentHashtag:L,setSearchQuery:V,setSearchOpen:K,setMessageRefs:Q,navigate:q,chatOnlyMode:B,baseHref:N=typeof window<"u"?window.location.href:"http://localhost/"}=_,U=String($??"").trim();if(!U)return!1;let E=typeof j==="string"&&j.trim()?j.trim():G,D=E!==G,H=Boolean(Y||X||Z);if(!D&&!H)return Q((M)=>A8(M,U)),!0;if(Q([U]),L?.(null),V?.(null),K?.(!1),D&&typeof q==="function"){let M=T1(N,E,{chatOnly:B});q(M)}return!0}function Fq(_){let{setIntentToast:$,intentToastTimerRef:j,editorOpen:G,openEditor:Z,resolvePane:X,tabStripActiveId:Y,setFileRefs:L,setFolderRefs:V,setMessageRefs:K,currentChatJid:Q,currentHashtag:q,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,navigate:H,chatOnlyMode:M,baseHref:J,getThread:W,setPosts:T}=_,x=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;$(null)},[j,$]);u(()=>{return()=>{x()}},[x]);let A=P((_0)=>{L((Y0)=>A8(Y0,_0))},[L]),k=P((_0)=>{L((Y0)=>k8(Y0,_0))},[L]),O=P(()=>{L([])},[L]),z=P((_0)=>{L(y8(_0))},[L]),y=P((_0)=>{V((Y0)=>A8(Y0,_0))},[V]),I=P((_0)=>{V((Y0)=>k8(Y0,_0))},[V]),R=P(()=>{V([])},[V]),f=P((_0)=>{V(y8(_0))},[V]),v=P((_0,Y0=null,Q0="info",J0=3000)=>{x(),$({title:_0,detail:Y0||null,kind:Q0||"info"}),j.current=setTimeout(()=>{$((s)=>s?.title===_0?null:s)},J0)},[x,j,$]),l=P((_0,{autoOpenEditor:Y0=!1}={})=>{let Q0=Vq(_0,{editorOpen:G,autoOpenEditor:Y0,resolvePane:X});if(Q0.kind==="open"){Z(Q0.path);return}if(Q0.kind==="toast")v(Q0.title,Q0.detail,Q0.level)},[G,Z,X,v]),h=P((_0)=>{l(_0,{autoOpenEditor:!1})},[l]),n=P((_0)=>{l(_0,{autoOpenEditor:!0})},[l]),b=P(()=>{let _0=Y;if(_0)A(_0)},[A,Y]),$0=P((_0,Y0=null)=>{PA({id:_0,targetChatJid:Y0,currentChatJid:Q,currentHashtag:q,searchQuery:B,searchOpen:N,setCurrentHashtag:U,setSearchQuery:E,setSearchOpen:D,setMessageRefs:K,navigate:H,chatOnlyMode:M,baseHref:J})},[J,M,Q,q,H,N,B,U,K,D,E]),E0=P(async(_0,Y0=null)=>{await Bq({id:_0,targetChatJid:Y0,currentChatJid:Q,getThread:W,setPosts:T})},[Q,W,T]),V0=P((_0)=>{K((Y0)=>k8(Y0,_0))},[K]),K0=P(()=>{K([])},[K]),X0=P((_0)=>{K(y8(_0))},[K]),F0=P((_0)=>{v("Compose failed",CA(_0),"error",5000)},[v]);return{clearIntentToast:x,addFileRef:A,removeFileRef:k,clearFileRefs:O,setFileRefsFromCompose:z,addFolderRef:y,removeFolderRef:I,clearFolderRefs:R,setFolderRefsFromCompose:f,showIntentToast:v,openFileFromPill:h,openTimelineFileFromPill:n,attachActiveEditorFile:b,addMessageRef:$0,scrollToMessage:E0,removeMessageRef:V0,clearMessageRefs:K0,setMessageRefsFromCompose:X0,handleComposeSubmitError:F0}}w0();async function Uq(_){let{panelKey:$,expanded:j,currentTurnIdRef:G,thoughtExpandedRef:Z,draftExpandedRef:X,setAgentThoughtVisibility:Y,getAgentThought:L,thoughtBufferRef:V,draftBufferRef:K,setAgentThought:Q,setAgentDraft:q}=_;if($!=="thought"&&$!=="draft")return;let B=G.current;if($==="thought"){if(Z.current=j,B)try{await Y(B,"thought",j)}catch(N){console.warn("Failed to update thought visibility:",N)}if(!j)return;try{let N=B?await L(B,"thought"):null;if(N?.text)V.current=N.text;Q((U)=>({...U||{text:"",totalLines:0},fullText:V.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full thought:",N)}return}if(X.current=j,B)try{await Y(B,"draft",j)}catch(N){console.warn("Failed to update draft visibility:",N)}if(!j)return;try{let N=B?await L(B,"draft"):null;if(N?.text)K.current=N.text;q((U)=>({...U||{text:"",totalLines:0},fullText:K.current||U?.fullText||"",totalLines:Number.isFinite(N?.total_lines)?N.total_lines:U?.totalLines||0}))}catch(N){console.warn("Failed to fetch full draft:",N)}}function fA(_){if(!_)return _;if(!(_.last_activity||_.lastActivity))return _;let{last_activity:$,lastActivity:j,...G}=_;return G}function RA(_){if(!_||typeof _!=="object")return{type:"active",last_activity:!0};return{..._,last_activity:!0}}function Hq(_){let{lastActivityTtlMs:$,lastActivityTimerRef:j,lastActivityTokenRef:G,lastAgentEventRef:Z,lastSilenceNoticeRef:X,isAgentRunningRef:Y,setIsAgentTurnActive:L,setAgentStatus:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,currentTurnIdRef:N,steerQueuedTurnIdRef:U,agentStatusRef:E,silentRecoveryRef:D,thoughtExpandedRef:H,draftExpandedRef:M,setCurrentTurnId:J,setSteerQueuedTurnId:W,currentTurnIdRefForPanel:T,setAgentThoughtVisibility:x,getAgentThought:A,setAgentThought:k,setAgentDraft:O}=_,z=P((l={})=>{let h=Number(l.atMs),n=Number.isFinite(h)&&h>0?h:Date.now();if(Z.current=n,l.running)Y.current=!0,L((b)=>b?b:!0);if(l.clearSilence)X.current=0},[Y,Z,X,L]),y=P(()=>{if(j.current)clearTimeout(j.current),j.current=null;G.current=0},[j,G]);u(()=>()=>{y()},[y]);let I=P(()=>{y(),V((l)=>fA(l))},[y,V]),R=P((l)=>{if(!l)return;y();let h=Date.now();G.current=h,V(RA(l)),j.current=setTimeout(()=>{if(G.current!==h)return;V((n)=>{if(!n||!(n.last_activity||n.lastActivity))return n;return null})},$)},[y,j,G,$,V]),f=P(()=>{Y.current=!1,L(!1),Z.current=null,X.current=0,K.current="",Q.current="",q.current=null,B.current=null,N.current=null,U.current=null,E.current=null,D.current={inFlight:!1,lastAttemptAt:0,turnId:null},y(),J(null),W(null),H.current=!1,M.current=!1},[E,y,N,K,M,Y,Z,B,X,q,J,L,W,D,U,Q,H]),v=P(async(l,h)=>{await Uq({panelKey:l,expanded:h,currentTurnIdRef:T,thoughtExpandedRef:H,draftExpandedRef:M,setAgentThoughtVisibility:x,getAgentThought:A,thoughtBufferRef:Q,draftBufferRef:K,setAgentThought:k,setAgentDraft:O})},[T,K,M,A,O,k,x,Q,H]);return{noteAgentActivity:z,clearLastActivityTimer:y,clearLastActivityFlag:I,showLastActivity:R,clearAgentRunState:f,handlePanelToggle:v}}w0();function M8(_){return _?{..._}:{text:"",totalLines:0}}function Eq(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function SA(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function uA(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function Dq(_){return{agentStatus:_.agentStatus,agentDraft:M8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:M8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:Eq(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:SA(_.silentRecovery)}}function zq(_){let $=_.snapshot||uA(),{refs:j,setters:G}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),G.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),G.setAgentStatus($.agentStatus||null),G.setAgentDraft(M8($.agentDraft)),G.setAgentPlan($.agentPlan||""),G.setAgentThought(M8($.agentThought)),G.setPendingRequest($.pendingRequest||null),G.setCurrentTurnId($.currentTurnId||null),G.setSteerQueuedTurnId($.steerQueuedTurnId||null),G.setFollowupQueueItems(Eq($.followupQueueItems)),G.setActiveModel($.activeModel||null),G.setActiveThinkingLevel($.activeThinkingLevel||null),G.setSupportsThinking(Boolean($.supportsThinking)),G.setActiveModelUsage($.activeModelUsage??null),G.setContextUsage($.contextUsage??null),$}function Qj(_){return String(_||"").trim()||"web:default"}function Wq({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function gA(_){return Wq(_)}function bA(_){let $=String(_?.data?.content||"").trim();if($)return $.replace(/\s+/g," ").slice(0,200);if((Array.isArray(_?.data?.content_blocks)?_.data.content_blocks:[]).length>0)return"Sent an attachment.";return""}function Oq(_){let{isAgentTurnActive:$,steerQueuedTurnId:j,currentTurnId:G,steerQueuedTurnIdRef:Z,setSteerQueuedTurnId:X,agentStatus:Y,agentDraft:L,agentPlan:V,agentThought:K,pendingRequest:Q,pendingRequestRef:q,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunningRef:M,wasAgentActiveRef:J,draftBufferRef:W,thoughtBufferRef:T,lastAgentEventRef:x,lastSilenceNoticeRef:A,lastAgentResponseRef:k,currentTurnIdRef:O,thoughtExpandedRef:z,draftExpandedRef:y,agentStatusRef:I,silentRecoveryRef:R,clearLastActivityTimer:f,setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:n,setAgentThought:b,setPendingRequest:$0,setCurrentTurnId:E0,setFollowupQueueItems:V0,setActiveModel:K0,setActiveThinkingLevel:X0,setSupportsThinking:F0,setActiveModelUsage:_0,setContextUsage:Y0,lastNotifiedIdRef:Q0,agentsRef:J0,notify:s,shouldNotifyLocallyForChat:j0}=_,z0=P((m0)=>{if(!gA({remainingQueueCount:m0,steerQueuedTurnId:Z.current,currentTurnId:O.current,isAgentTurnActive:$}))return;Z.current=null,X(null)},[$,O,X,Z]),C0=P(()=>Dq({agentStatus:Y,agentDraft:L,agentPlan:V,agentThought:K,pendingRequest:Q,currentTurnId:G,steerQueuedTurnId:j,isAgentTurnActive:$,followupQueueItems:B,activeModel:N,activeThinkingLevel:U,supportsThinking:E,activeModelUsage:D,contextUsage:H,isAgentRunning:M.current,wasAgentActive:J.current,draftBuffer:W.current,thoughtBuffer:T.current,lastAgentEvent:x.current,lastSilenceNotice:A.current,lastAgentResponse:k.current,currentTurnIdRef:O.current,steerQueuedTurnIdRef:Z.current,thoughtExpanded:z.current,draftExpanded:y.current,agentStatusRef:I.current,silentRecovery:R.current}),[N,D,U,L,V,Y,K,H,G,B,$,Q,j,E,M,J,W,T,x,A,k,O,Z,z,y,I,R]),h0=P((m0)=>{zq({snapshot:m0,clearLastActivityTimer:f,refs:{isAgentRunningRef:M,wasAgentActiveRef:J,lastAgentEventRef:x,lastSilenceNoticeRef:A,draftBufferRef:W,thoughtBufferRef:T,pendingRequestRef:q,lastAgentResponseRef:k,currentTurnIdRef:O,steerQueuedTurnIdRef:Z,agentStatusRef:I,silentRecoveryRef:R,thoughtExpandedRef:z,draftExpandedRef:y},setters:{setIsAgentTurnActive:v,setAgentStatus:l,setAgentDraft:h,setAgentPlan:n,setAgentThought:b,setPendingRequest:$0,setCurrentTurnId:E0,setSteerQueuedTurnId:X,setFollowupQueueItems:V0,setActiveModel:K0,setActiveThinkingLevel:X0,setSupportsThinking:F0,setActiveModelUsage:_0,setContextUsage:Y0}})},[I,f,O,W,y,M,x,k,A,q,K0,_0,X0,h,n,l,b,Y0,E0,V0,v,$0,X,F0,R,Z,T,z,J]),n0=P((m0)=>{if(!m0)return;if(O.current===m0)return;O.current=m0,R.current={inFlight:!1,lastAttemptAt:0,turnId:m0},E0(m0),Z.current=null,X(null),W.current="",T.current="",h({text:"",totalLines:0}),n(""),b({text:"",totalLines:0}),$0(null),q.current=null,k.current=null,z.current=!1,y.current=!1},[O,W,y,k,q,h,n,b,E0,$0,X,R,Z,T,z]),G_=P((m0)=>{let a0=k.current;if(!a0||!a0.post)return;if(m0&&a0.turnId&&a0.turnId!==m0)return;let S0=a0.post,o0=typeof S0?.chat_jid==="string"&&S0.chat_jid.trim()?S0.chat_jid.trim():"";if(!o0||!j0(o0))return;if(S0.id&&Q0.current===S0.id)return;let c0=bA(S0);if(!c0)return;Q0.current=S0.id||Q0.current,k.current=null;let d0=J0.current||{},Q_=(S0?.data?.agent_id?d0[S0.data.agent_id]:null)?.name||"Pi";s(Q_,c0,{sourceLabel:"Local"})},[J0,k,Q0,s,j0]);return{clearQueuedSteerStateIfStale:z0,snapshotCurrentChatPaneState:C0,restoreChatPaneState:h0,setActiveTurn:n0,notifyForFinalResponse:G_}}w0();function w8(_){return _?.turn_id||_?.turnId||null}function x6(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function Nj(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function Bj(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function T8(_,$){return{text:_,totalLines:Bj(_,$)}}function Fj(_,$){return{text:$?.text||"",totalLines:nX(_),fullText:_}}function Jq(_,$,j){return j==="replace"?$:`${_||""}${$}`}function Aq(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function kq(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function s1(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function yq(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function Uj(_,$){return _&&$}function Mq(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function wq(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function Tq(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let G=new Set(j),Z=_.filter((X)=>!G.has(X?.id));return Z.length===_.length?_:Z}async function xq(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:G,wasAgentActiveRef:Z,viewStateRef:X,refreshTimeline:Y,clearAgentRunState:L,agentStatusRef:V,pendingRequestRef:K,thoughtBufferRef:Q,draftBufferRef:q,setAgentStatus:B,setAgentDraft:N,setAgentPlan:U,setAgentThought:E,setPendingRequest:D,setActiveTurn:H,noteAgentActivity:M,clearLastActivityFlag:J,onStateAccessResult:W}=_,T=$;try{let x=await j(T);if(W?.(!1),G.current!==T)return null;if(!x||x.status!=="active"||!x.data){if(Z.current&&s1(X.current))Y();return Z.current=!1,L(),V.current=null,B(null),N({text:"",totalLines:0}),U(""),E({text:"",totalLines:0}),D(null),K.current=null,x??null}Z.current=!0;let A=x.data;V.current=A;let k=w8(A);if(k)H(k);M({running:!0,clearSilence:!0,atMs:r$(A)??Date.now()}),J(),B(A);let O=x6(x.thought);if(O)E((y)=>{if(Nj(y,O.text))return y;return Q.current=O.text,O});let z=x6(x.draft);if(z)N((y)=>{if(Nj(y,z.text))return y;return q.current=z.text,z});return x}catch(x){return W?.(!0),console.warn("Failed to fetch agent status:",x),null}}async function Iq(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:G,silentRecoveryRef:Z,silenceRefreshMs:X,viewStateRef:Y,refreshTimeline:L,refreshQueueState:V,refreshAgentStatus:K,now:Q=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let q=G.current||null,B=Z.current,N=Q();if(B.inFlight)return null;if(B.turnId===q&&N-B.lastAttemptAt<X)return null;B.inFlight=!0,B.lastAttemptAt=N,B.turnId=q;try{if(s1(Y.current))await L();return await V(),await K()}finally{B.inFlight=!1}}function vA(_){if(!_||typeof _!=="object")return!1;let $=typeof _.type==="string"?_.type:"";if($==="tool_call"||$==="tool_status"||$==="intent")return!0;return Boolean(_.tool_name||_.tool_args)}function Cq(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:G,lastSilenceNoticeRef:Z,agentStatusRef:X,silenceWarningMs:Y,silenceFinalizeMs:L,silenceRefreshMs:V,isCompactionStatus:K,setAgentStatus:Q,reconcileSilentTurn:q,now:B=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let N=G.current;if(!N)return;let U=B(),E=U-N,D=X.current,H=K(D),M=vA(D);if(E>=L){if(!H&&!M)Q({type:"waiting",title:"Re-syncing after a quiet period…"});q();return}if(E>=Y&&U-Z.current>=V){if(!H&&!M){let J=Math.floor(E/1000);Q({type:"waiting",title:`Waiting for model… No events for ${J}s`})}Z.current=U,q()}}function mA(_){if(!_||typeof _!=="object")return null;let $=typeof _.type==="string"?_.type:"",j=typeof _.title==="string"&&_.title.trim()?_.title.trim():null,G=typeof _.tool_name==="string"&&_.tool_name.trim()?_.tool_name.trim():null,Z=typeof _.status==="string"&&_.status.trim()?_.status.trim():null;if($==="tool_call")return{summary:`Timed out while running ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};if($==="tool_status"){let X=j||G||"tool";return{summary:Z?`Timed out after ${X}: ${Z}`:`Timed out after ${X}`,title:j,toolName:G,statusText:Z}}if(G||j)return{summary:`Timed out after ${j||G||"tool"}`,title:j,toolName:G,statusText:Z};return null}function Pq(_){let{isAgentRunningRef:$,lastSilenceNoticeRef:j,lastAgentEventRef:G,currentTurnIdRef:Z,thoughtExpandedRef:X,draftExpandedRef:Y,draftBufferRef:L,thoughtBufferRef:V,pendingRequestRef:K,lastAgentResponseRef:Q,agentStatusRef:q,stalledPostIdRef:B,scrollToBottomRef:N,setCurrentTurnId:U,setAgentDraft:E,setAgentPlan:D,setAgentThought:H,setPendingRequest:M,setAgentStatus:J,setPosts:W,dedupePosts:T,now:x=()=>Date.now(),nowIso:A=()=>new Date().toISOString()}=_;if(!$.current)return;let k=mA(q.current);$.current=!1,j.current=0,G.current=null,q.current=null,Z.current=null,U(null),X.current=!1,Y.current=!1;let O=(L.current||"").trim();if(L.current="",V.current="",D(""),H({text:"",totalLines:0}),M(null),K.current=null,Q.current=null,!O){E({text:"",totalLines:0}),J({type:"error",title:"Response stalled - No content received"});return}E({text:O,totalLines:Bj(O,null),fullText:O});let z=O,y=x(),I=A(),R={id:y,timestamp:I,data:{type:"agent_response",content:z,content_blocks:[{type:"timeout_marker",timed_out:!0,title:"Timed out",tool_action_summary:k?.summary||"",tool_title:k?.title||"",tool_name:k?.toolName||"",tool_status:k?.statusText||"",draft_recovered:!0}],agent_id:"default",is_local_stall:!0}};B.current=y,W((f)=>f?T([...f,R]):[R]),N.current?.(),J(null)}function cA(_){let{stalledPostIdRef:$,setPosts:j}=_,G=$.current;if(!G)return;j((Z)=>Z?Z.filter((X)=>X.id!==G):Z),$.current=null}function lA(_){Pq(_)}function fq(_){let{viewStateRef:$,currentHashtag:j,searchQuery:G,searchOpen:Z}=_;u(()=>{$.current={currentHashtag:j,searchQuery:G,searchOpen:Z}},[j,Z,G,$])}function Rq(_){let{stalledPostIdRef:$,setPosts:j,isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,agentStatusRef:N,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:M,setPendingRequest:J,setAgentStatus:W,dedupePosts:T}=_,x=P(()=>{cA({stalledPostIdRef:$,setPosts:j})},[j,$]),A=P(()=>{lA({isAgentRunningRef:G,lastSilenceNoticeRef:Z,lastAgentEventRef:X,currentTurnIdRef:Y,thoughtExpandedRef:L,draftExpandedRef:V,draftBufferRef:K,thoughtBufferRef:Q,pendingRequestRef:q,lastAgentResponseRef:B,agentStatusRef:N,stalledPostIdRef:$,scrollToBottomRef:U,setCurrentTurnId:E,setAgentDraft:D,setAgentPlan:H,setAgentThought:M,setPendingRequest:J,setAgentStatus:W,setPosts:j,dedupePosts:T})},[Y,T,K,V,G,X,B,N,Z,q,U,D,H,W,M,E,J,j,$,Q,L]);return{removeStalledPost:x,finalizeStalledResponse:A}}function hA(_){let{removeFileRefRef:$,composeReferenceActions:j}=_;$.current=j.removeFileRef||null}function pA(_){return{applyBranding:_.applyBranding,composeReferenceActions:_.composeReferenceActions,..._.agentActivity,..._.chatPaneRuntime,recoveryCallbacks:_.recoveryCallbacks}}function Sq(_){let{environment:$,composeReferences:j,agentActivity:G,chatPaneRuntime:Z,recovery:X,viewState:Y,removeFileRefRef:L}=_,{applyBranding:V}=Kq($),K=Fq(j);hA({removeFileRefRef:L,composeReferenceActions:K});let Q=Hq(G),q=Oq({...Z,clearLastActivityTimer:Q.clearLastActivityTimer}),B=Rq(X);return fq(Y),pA({applyBranding:V,composeReferenceActions:K,agentActivity:Q,chatPaneRuntime:q,recoveryCallbacks:B})}w0();w0();P_();var x8=new Map,Hj=new Map;function uq(){return Date.now()}function x5(_){return String(_||"").trim()}function gq(_,$=600000){return Boolean(_&&uq()-_.cachedAt<=$)}function rA(_){while(_.size>24){let $=_.keys().next().value;if(!$)break;_.delete($)}}function bq(_,$){return x8.delete(_),x8.set(_,$),rA(x8),$}function I8(_,$){let j=x5(_);if(!j)return null;let G={posts:Array.isArray($?.posts)?$.posts:[],has_more:Boolean($?.has_more),cachedAt:uq()};return bq(j,G)}function Ej(_,$={}){let j=x5(_);if(!j)return null;let G=Number.isFinite($.maxAgeMs)?Number($.maxAgeMs):600000,Z=x8.get(j)||null;if(!gq(Z,G))return null;return bq(j,Z)}function vq(_,$,j=5){if(!Array.isArray(_))return[];let G=x5($),Z=Number.isFinite(j)?Math.max(1,Math.min(8,Number(j))):5,X=new Set,Y=[];for(let L of _){let V=x5(L?.chat_jid);if(!V||V===G||X.has(V))continue;if(X.add(V),Y.push(V),Y.length>=Z)break}return Y}async function mq(_){let $=Array.from(new Set((_.chatJids||[]).map((L)=>x5(L)).filter(Boolean)));if($.length===0)return;let j=Number.isFinite(_.maxAgeMs)?Number(_.maxAgeMs):600000,G=Number.isFinite(_.maxConcurrent)?Math.max(1,Math.min(4,Number(_.maxConcurrent))):2,Z=$.filter((L)=>!gq(Ej(L,{maxAgeMs:j}),j)),X=0,Y=Array.from({length:Math.min(G,Z.length)},async()=>{while(X<Z.length){let L=Z[X++],V=Hj.get(L);if(V){await V;continue}let K=(async()=>{try{let Q=await _.fetchTimeline(L);I8(L,Q)}catch(Q){console.debug("[app-timeline-cache] Ignoring timeline prewarm failure for a best-effort background fetch.",Q,{chatJid:L})}finally{Hj.delete(L)}})();Hj.set(L,K),await K}});await Promise.all(Y)}function cq(_,$){let j=Array.isArray(_)?_:[],G=Array.isArray($)?$:null;if(!G)return j;if(G.length===0)return G;if(j.length===0)return G;let Z=1/0;for(let Y of G){let L=Y?.id;if(typeof L==="number"&&Number.isFinite(L)&&L<Z)Z=L}if(!Number.isFinite(Z))return D6([...G,...j]);let X=j.filter((Y)=>{let L=Y?.id;return typeof L==="number"&&Number.isFinite(L)&&L<Z});return D6([...G,...X])}function lq({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null,currentHashtag:G=null,searchQuery:Z=null}){let[X,Y]=C(null),[L,V]=C(!1),K=g(!1),Q=g(null),q=g(!1),B=g(null),N=g(null),U=g(0),E=g(0);u(()=>{K.current=L},[L]),u(()=>{N.current=X},[X]);let D=!G&&!Z,H=g(D);u(()=>{H.current=D},[D]),u(()=>{U.current+=1,Y(null),N.current=null,B.current=null,q.current=!1,K.current=!1,V(!1),E.current=0},[j]);let M=P((k,O)=>{if(!D)return;I8(j,{posts:Array.isArray(k)?k:[],has_more:Boolean(O)})},[j,D]),J=P((k,O)=>{N.current=Array.isArray(k)?k:[],K.current=Boolean(O),Y(N.current),V(K.current),M(N.current,K.current)},[M]),W=P(async(k=null)=>{let O=U.current;try{if(k){let R=await K7(k,50,0,j);if(O!==U.current)return;Y(R.posts),V(!1);return}let z=(R)=>{if(O!==U.current)return;let f=Array.isArray(R?.posts)?R.posts:[],v=Boolean(R?.has_more);J(f,v)},y=Ej(j);if(y){J(y.posts,y.has_more);let R=E.current;h$(10,null,j).then((f)=>{if(O!==U.current||E.current!==R)return;if(!H.current)return;let v=Array.isArray(f?.posts)?f.posts:[],l=Boolean(f?.has_more);J(cq(N.current,v),l)}).catch((f)=>{if(O!==U.current)return;console.error("Failed to refresh cached timeline:",f)});return}let I=await h$(10,null,j);z(I)}catch(z){if(O!==U.current)return;throw console.error("Failed to load posts:",z),z}},[j,J]),T=P(async()=>{let k=U.current;try{let O=await h$(10,null,j);if(k!==U.current)return;J(cq(N.current,O?.posts),Boolean(O?.has_more))}catch(O){if(k!==U.current)return;console.error("Failed to refresh timeline:",O)}},[j,J]),x=P(async(k={})=>{let O=U.current,z=N.current;if(!z||z.length===0)return;if(q.current)return;let{preserveScroll:y=!0,preserveMode:I="top",allowRepeat:R=!1}=k,f=(h)=>{if(!y){h();return}if(I==="top")$(h);else _(h)},l=z.slice().sort((h,n)=>h.id-n.id)[0]?.id;if(!Number.isFinite(l))return;if(!R&&B.current===l)return;q.current=!0,B.current=l;try{let h=await h$(10,l,j);if(O!==U.current)return;if(E.current+=1,h.posts.length>0)f(()=>{let n=D6([...h.posts,...N.current||[]]);J(n,h.has_more)});else J(N.current||[],!1)}catch(h){if(O!==U.current)return;console.error("Failed to load more posts:",h)}finally{if(O===U.current)q.current=!1}},[j,_,$,J]);u(()=>{Q.current=x},[x]);let A=P((k)=>{Y((O)=>{let z=typeof k==="function"?k(O):k;if(N.current=z,Array.isArray(z)){if(E.current+=1,D)I8(j,{posts:z,has_more:K.current})}return z})},[j,D]);return{posts:X,setPosts:A,hasMore:L,setHasMore:V,hasMoreRef:K,loadPosts:W,refreshTimeline:T,loadMore:x,loadMoreRef:Q,loadingMoreRef:q,lastBeforeIdRef:B}}w0();function nA(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function hq(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),G=_.filter((Z)=>!j.has(Z?.id)&&!nA(Z));return G.length===_.length?_:G}function pq(_,$){let j=$||new Set;return Array.isArray(_)?_.map((G)=>({...G})).filter((G)=>!j.has(G.row_id)):[]}function rq(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,G)=>j?.row_id===$[G]?.row_id)}function $4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((G)=>G?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function nq(_,$){let j=Array.isArray(_)?_:[],G=$?.row_id,Z=$?.content;if(G==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((X)=>X?.row_id===G))return j;return[...j,{row_id:G,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function dq(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}function dA(_,$=150){return Math.abs(_)<=$}function iq(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G}=_,Z=P(()=>{let V=$.current;if(!V)return;if(dA(V.scrollTop))V.scrollTop=0},[$]),X=P((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let{currentHashtag:Q,searchQuery:q,searchOpen:B}=j.current||{},N=!((q||B)&&!Q),U=N?K.scrollHeight-K.scrollTop:K.scrollTop;V(),requestAnimationFrame(()=>{let E=$.current;if(!E)return;if(N){let D=Math.max(E.scrollHeight-U,0);E.scrollTop=D}else{let D=Math.max(E.scrollHeight-E.clientHeight,0),H=Math.min(U,D);E.scrollTop=H}})},[$,j]),Y=P((V)=>{let K=$.current;if(!K||typeof V!=="function"){V?.();return}let Q=K.scrollTop;V(),requestAnimationFrame(()=>{let q=$.current;if(!q)return;let B=Math.max(q.scrollHeight-q.clientHeight,0);q.scrollTop=Math.min(Q,B)})},[$]),L=P((V)=>{return hq(V,G.current)},[G]);return{scrollToBottom:Z,preserveTimelineScroll:X,preserveTimelineScrollTop:Y,filterQueuedPosts:L}}function iA(_){let{rawPosts:$,filterQueuedPosts:j}=_;return j($)}function oA(_){_.scrollToBottomRef.current=_.scrollToBottom}function oq(_){let{timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G,currentChatJid:Z,currentHashtag:X,searchQuery:Y,followupQueueItems:L}=_,V=g(null),{scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:q,filterQueuedPosts:B}=iq({timelineRef:$,viewStateRef:j,followupQueueRowIdsRef:G});oA({scrollToBottomRef:V,scrollToBottom:K});let{posts:N,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:M,refreshTimeline:J,loadMore:W,loadMoreRef:T}=lq({preserveTimelineScroll:Q,preserveTimelineScrollTop:q,chatJid:Z,currentHashtag:X,searchQuery:Y}),x=Z0(()=>iA({rawPosts:N,followupQueueItems:L,filterQueuedPosts:B}),[B,L,N]);return{scrollToBottomRef:V,scrollToBottom:K,preserveTimelineScroll:Q,preserveTimelineScrollTop:q,rawPosts:N,setPosts:U,hasMore:E,setHasMore:D,hasMoreRef:H,loadPosts:M,refreshTimeline:J,loadMore:W,loadMoreRef:T,posts:x}}w0();function sA(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_;return!$&&!j&&!G}function sq(_){let{currentHashtag:$,searchQuery:j,searchOpen:G,searchScope:Z,currentChatJid:X,currentRootChatJid:Y,posts:L,loadPosts:V,searchPosts:K,setCurrentHashtag:Q,setSearchQuery:q,setSearchOpen:B,setSearchScope:N,setPosts:U,setHasMore:E,preserveTimelineScrollTop:D,setRemovingPostIds:H,deletePost:M,hasMoreRef:J,loadMoreRef:W}=_,T=P(async(R)=>{await qq({hashtag:R,setCurrentHashtag:Q,setPosts:U,loadPosts:V})},[V,Q,U]),x=P(async()=>{await Qq({setCurrentHashtag:Q,setSearchQuery:q,setPosts:U,loadPosts:V})},[V,Q,U,q]),A=P(async(R,f=Z,v)=>{await qj({query:R,scope:f,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:N,setSearchQuery:q,setCurrentHashtag:Q,setPosts:U,setHasMore:E,filters:v})},[X,Y,K,Z,Q,E,U,q,N]),k=P((R)=>{if(N(R),j&&j.trim())qj({query:j,scope:R,currentChatJid:X,currentRootChatJid:Y,searchPosts:K,setSearchScope:N,setSearchQuery:q,setCurrentHashtag:Q,setPosts:U,setHasMore:E})},[X,Y,K,j,Q,E,U,q,N]),O=P(()=>{B(!0),q(null),Q(null),N("current"),U([])},[Q,U,B,q,N]),z=P(()=>{B(!1),q(null),V()},[V,B,q]),y=Z0(()=>sA({currentHashtag:$,searchQuery:j,searchOpen:G}),[$,G,j]),I=P(async(R)=>{await Nq({post:R,posts:L,currentChatJid:X,deletePost:M,preserveTimelineScrollTop:D,setPosts:U,setRemovingPostIds:H,hasMoreRef:J,loadMoreRef:W})},[X,M,J,W,L,D,U,H]);return{handleHashtagClick:T,handleBackToTimeline:x,handleSearch:A,handleSearchScopeChange:k,enterSearchMode:O,exitSearchMode:z,isMainTimelineView:y,handleDeletePost:I}}w0();function Dj(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function aq(_,$){let j=new Map(_),G=Dj($);if(typeof $?.key==="string"&&$.key&&G)j.set($.key,G);else j.delete("autoresearch");return j}function tq(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let G=new Map(_),Z=Dj($);if($?.options?.remove||!Z)G.delete(j);else G.set(j,Z);return G}function eq(_){if(_?.options?.remove)return!0;return Dj(_)?.state!=="running"}function zj(_,$){return`${_}:${$}`}function _Q(_,$,j){let G=zj($,j);if(_.has(G))return _;let Z=new Set(_);return Z.add(G),Z}function $Q(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function C8(_,$){if(_.size===0)return _;let j=`${$}:`,G=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return G.size===_.size?_:G}async function jQ(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let G=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!G)throw Error("No tmux command available.");return await _.writeClipboard(G),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}var GQ="piclaw:ctx:";function j4(_){if(!_||typeof _!=="object")return null;let $=_,j=$.tokens==null?null:Number($.tokens),G=$.contextWindow==null?null:Number($.contextWindow),Z=$.percent==null?null:Number($.percent);return{tokens:Number.isFinite(j)?j:null,contextWindow:Number.isFinite(G)?G:null,percent:Number.isFinite(Z)?Z:null}}function u4(_,$){let j=j4(_),G=j4($);if(!j&&!G)return!0;if(!j||!G)return!1;return j.tokens===G.tokens&&j.contextWindow===G.contextWindow&&j.percent===G.percent}function I6(_,$){if(!_||!$||typeof $!=="object")return;if($.percent==null)return;try{L_(GQ+_,JSON.stringify($))}catch(G){console.debug("[app-status-refresh] Ignoring best-effort context usage persistence failure.",G,{chatJid:_})}}function ZQ(_){if(!_)return null;return U2(GQ+_)}async function XQ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}=_,V=++j.current,K=$;try{let Q=await X(K);if(V!==j.current)return;if(G.current!==K)return;let q=Z.current,B=Array.isArray(Q?.items)?Q.items:[],N=pq(B,q);if(N.length){Y((U)=>rq(U,N)?U:N);return}if(B.length>0)return;q.clear(),L(0),Y((U)=>U.length===0?U:[])}catch{if(V!==j.current)return;if(G.current!==K)return;Y((Q)=>Q.length===0?Q:[])}}async function YQ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:G,setContextUsage:Z}=_,X=$;try{let Y=j4(await G(X));if(j.current!==X)return;if(Y&&Y.percent!=null)Z((L)=>u4(L,Y)?L:Y),I6(X,Y)}catch(Y){if(j.current!==X)return;console.warn("Failed to fetch agent context:",Y)}}async function LQ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:G,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:X}=_,Y=$;try{let L=await G(Y);if(j.current!==Y)return;Z((V)=>aq(V,L)),X((V)=>C8(V,"autoresearch"))}catch(L){if(j.current!==Y)return;console.warn("Failed to fetch autoresearch status:",L)}}function KQ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y}=_;$(),j(),G(),Z(),X(),Y()}function VQ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:G}=_;if(s1($.current))j();G()}Y5();var P8=new Map,f8=new Map,aA=250,qQ=1500,QQ=300000;function C6(){if(typeof performance<"u"&&typeof performance.now==="function")return performance.now();return Date.now()}function tA(_,$){return`${_}:${$}`}function eA(_){for(let[$,j]of f8.entries())if(_-j>QQ)f8.delete($)}function _k(_){for(let[$,j]of P8.entries()){if(j.inFlight)continue;if(!Number.isFinite(j.lastCompletedAt)||_-j.lastCompletedAt>QQ)P8.delete($)}}function NQ(_=C6()){eA(_),_k(_)}function BQ(_){let{chatJid:$,nowMs:j=C6()}=_;if(!$)return;f8.set($,j),NQ(j)}function I5(_,$=qQ,j=C6()){if(!_)return!1;let G=f8.get(_);if(!Number.isFinite(G))return!1;return j-Number(G)<=$}async function J$(_){let{kind:$,chatJid:j,run:G,cooldownMs:Z=aA,activationWindowMs:X=qQ,nowMs:Y=C6()}=_;NQ(Y);let L=tA($,j),V=P8.get(L)||{inFlight:null,lastCompletedAt:Number.NaN,lastValue:null};if(P8.set(L,V),V.inFlight)return await V.inFlight;if(Boolean(A2("thread-switch",j)||I5(j,X,Y))&&Number.isFinite(V.lastCompletedAt)&&Y-V.lastCompletedAt<=Z)return V.lastValue;let Q=Promise.resolve().then(G).then((q)=>{return V.lastCompletedAt=C6(),V.lastValue=q??null,V.inFlight=null,q}).catch((q)=>{throw V.lastCompletedAt=C6(),V.inFlight=null,q});return V.inFlight=Q,await Q}function FQ(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:G,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:X,isAgentRunningRef:Y,pendingRequestRef:L,showIntentToast:V}=_,K=typeof $==="string"&&$.trim()?$.trim():null;if(!K||!j||K===j)return!1;if(G.current===K)return!0;G.current=K;let Q=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!X()&&!Q&&!Y.current&&!L.current&&!Z.current);return V("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function Wj(_){let{currentHashtag:$,searchQuery:j,searchOpen:G}=_||{};return!$&&!j&&!G}function UQ(_){let{currentChatJid:$,status:j,setConnectionStatus:G,setAgentStatus:Z,setAgentDraft:X,setAgentPlan:Y,setAgentThought:L,setPendingRequest:V,pendingRequestRef:K,clearAgentRunState:Q,hasConnectedOnceRef:q,viewStateRef:B,refreshTimeline:N,refreshAgentStatus:U,refreshQueueState:E,refreshContextUsage:D}=_;if(G(j),j!=="connected"){Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),V(null),K.current=null,Q();return}if(!q.current){if(q.current=!0,Z(null),X({text:"",totalLines:0}),Y(""),L({text:"",totalLines:0}),V(null),K.current=null,Q(),I5($))return;if(Wj(B.current))N();U(),E(),D();return}if(Wj(B.current))N();U(),E(),D()}function HQ(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:G,refreshQueueState:Z,refreshAgentStatus:X,refreshContextUsage:Y,refreshAutoresearchStatus:L}=_,V=Wj($.current);if(j){if(V)G();Z(),X(),Y(),L();return}if(V)G();X(),Y(),L()}function $k(_){return Math.min(1000,Math.max(100,Math.floor(_/2)))}function EQ(_){let{currentChatJid:$,activeChatJidRef:j,queueRefreshGenRef:G,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L,getAgentContext:V,setContextUsage:K,getAutoresearchStatus:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,getAgentStatus:N,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:M,pendingRequestRef:J,thoughtBufferRef:W,draftBufferRef:T,setAgentStatus:x,setAgentDraft:A,setAgentPlan:k,setAgentThought:O,setPendingRequest:z,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R,isAgentRunningRef:f,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,lastAgentEventRef:n,lastSilenceNoticeRef:b,silenceWarningMs:$0,silenceFinalizeMs:E0,isCompactionStatus:V0,serverVersionContext:K0,setConnectionStatus:X0,setStateAccessFailed:F0,setPendingRequestForConnection:_0,hasConnectedOnceRef:Y0}=_,Q0=P(()=>{return J$({kind:"queue-state",chatJid:$,run:async()=>{return await XQ({currentChatJid:$,queueRefreshGenRef:G,activeChatJidRef:j,dismissedQueueRowIdsRef:Z,getAgentQueueState:X,setFollowupQueueItems:Y,clearQueuedSteerStateIfStale:L}),null}})},[j,L,$,Z,X,G,Y]),J0=P(async()=>{await J$({kind:"context-usage",chatJid:$,run:async()=>{return await YQ({currentChatJid:$,activeChatJidRef:j,getAgentContext:V,setContextUsage:K}),null}})},[j,$,V,K]),s=P(async()=>{await J$({kind:"autoresearch-status",chatJid:$,run:async()=>{return await LQ({currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B}),null}})},[j,$,Q,q,B]),j0=P(async()=>{return await J$({kind:"agent-status",chatJid:$,run:async()=>{return await xq({currentChatJid:$,getAgentStatus:N,activeChatJidRef:j,wasAgentActiveRef:U,viewStateRef:E,refreshTimeline:D,clearAgentRunState:H,agentStatusRef:M,pendingRequestRef:J,thoughtBufferRef:W,draftBufferRef:T,setAgentStatus:x,setAgentDraft:A,setAgentPlan:k,setAgentThought:O,setPendingRequest:z,setActiveTurn:y,noteAgentActivity:I,clearLastActivityFlag:R,onStateAccessResult:F0})}})},[j,M,H,R,$,T,N,I,J,D,y,A,k,x,O,z,F0,W,E,U]),z0=P(async()=>{return await Iq({isAgentRunningRef:f,pendingRequestRef:J,currentTurnIdRef:v,silentRecoveryRef:l,silenceRefreshMs:h,viewStateRef:E,refreshTimeline:D,refreshQueueState:Q0,refreshAgentStatus:j0})},[v,f,J,j0,Q0,D,h,l,E]);u(()=>{let n0=$k($0),G_=setInterval(()=>{Cq({isAgentRunningRef:f,pendingRequestRef:J,lastAgentEventRef:n,lastSilenceNoticeRef:b,agentStatusRef:M,silenceWarningMs:$0,silenceFinalizeMs:E0,silenceRefreshMs:h,isCompactionStatus:V0,setAgentStatus:x,reconcileSilentTurn:z0})},n0);return()=>clearInterval(G_)},[M,f,V0,n,b,J,z0,x,E0,h,$0]);let C0=P((n0)=>{return FQ({serverVersion:n0,...K0})},[K0]),h0=P((n0)=>{if(n0==="connected")F0(!1);UQ({currentChatJid:$,status:n0,setConnectionStatus:X0,setAgentStatus:x,setAgentDraft:A,setAgentPlan:k,setAgentThought:O,setPendingRequest:_0,pendingRequestRef:J,clearAgentRunState:H,hasConnectedOnceRef:Y0,viewStateRef:E,refreshTimeline:D,refreshAgentStatus:j0,refreshQueueState:Q0,refreshContextUsage:J0})},[H,$,Y0,J,j0,J0,Q0,D,A,k,x,O,X0,_0,F0,E]);return{refreshQueueState:Q0,refreshContextUsage:J0,refreshAutoresearchStatus:s,refreshAgentStatus:j0,handleUiVersionDrift:C0,handleConnectionStatusChange:h0}}w0();function C5(_){return typeof _==="string"}function P5(_){return typeof _==="string"&&_.trim().length>0}function R8(_){if(!P5(_))return 0;let $=Date.parse(_);return Number.isFinite($)?$:0}function Oj(_){if(!Array.isArray(_))return[];return _.filter(($)=>P5($?.chat_jid)&&P5($?.agent_name))}function DQ(_){if(!Array.isArray(_))return[];return _.filter(($)=>C5($?.chat_jid)&&C5($?.agent_name))}function zQ(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let G=new Map;if(Array.isArray(_)){for(let Y of _)if(C5(Y?.chat_jid))G.set(Y.chat_jid,Y)}let Z=$.map((Y)=>{if(!C5(Y?.chat_jid))return Y;let L=G.get(Y.chat_jid);return L?{...Y,...L,is_active:L.is_active??Y.is_active}:Y}),X=C5(j)?j:"";return Z.sort((Y,L)=>{if(Y.chat_jid===X&&L.chat_jid!==X)return-1;if(L.chat_jid===X&&Y.chat_jid!==X)return 1;let V=Boolean(Y.archived_at),K=Boolean(L.archived_at);if(V!==K)return V?1:-1;if(Boolean(Y.is_active)!==Boolean(L.is_active))return Y.is_active?-1:1;let Q=R8(Y.updated_at)||R8(Y.created_at),q=R8(L.updated_at)||R8(L.created_at);if(Q!==q)return q-Q;let B=P5(Y.agent_name)?Y.agent_name.trim():"",N=P5(L.agent_name)?L.agent_name.trim():"",U=B.localeCompare(N,void 0,{sensitivity:"base"});if(U!==0)return U;return String(Y.chat_jid).localeCompare(String(L.chat_jid))}),Z}var jk={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,thinkingLevelLabel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function WQ(_){if(!_||typeof _!=="object")return jk;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,thinkingLevelLabel:_.thinking_level_label??_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function OQ(_){let j=(Array.isArray(_)?_:[]).find((G)=>G?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function JQ(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let G=String(j),Z=_.agent_name,X=_.agent_avatar;if(!Z&&X===void 0)return null;let Y=$||{id:G},L=Y.name||null,V=Y.avatar_url??Y.avatarUrl??Y.avatar??null,K=!1,Q=!1;if(Z&&Z!==Y.name)L=Z,K=!0;if(X!==void 0){let q=typeof X==="string"?X.trim():null,B=typeof V==="string"?V.trim():null,N=q||null;if(N!==(B||null))V=N,Q=!0}if(!K&&!Q)return null;return{agentId:G,nameChanged:K,avatarChanged:Q,resolvedName:L,resolvedAvatar:V}}function AQ(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",G=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===G&&_.avatar_background===Z)return _;return{name:j,avatar_url:G,avatar_background:Z}}function kQ(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,G=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&G===void 0&&Z===void 0)return _;let X=typeof j==="string"&&j.trim()?j.trim():_.name||"You",Y=G===void 0?_.avatar_url:typeof G==="string"&&G.trim()?G.trim():null,L=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===X&&_.avatar_url===Y&&_.avatar_background===L)return _;return{name:X,avatar_url:Y,avatar_background:L}}async function MQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z}=_;try{let X=await $();j(pX(X));let Y=X?.user||{};G((V)=>AQ(V,Y));let L=OQ(X?.agents);Z(L.name,L.avatarUrl)}catch(X){console.warn("Failed to load agents:",X)}}function wQ(_){let{payload:$,agentsRef:j,setAgents:G,applyBranding:Z}=_,X=JQ($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!X)return;if(G((Y)=>{let V={...Y[X.agentId]||{id:X.agentId}};if(X.nameChanged)V.name=X.resolvedName;if(X.avatarChanged)V.avatar_url=X.resolvedAvatar;return{...Y,[X.agentId]:V}}),X.agentId==="default")Z(X.resolvedName,X.resolvedAvatar,X.avatarChanged?Date.now():null)}function TQ(_){let{payload:$,setUserProfile:j}=_;j((G)=>kQ(G,$))}function yQ(_,$){if(Object.is(_,$))return!0;try{return JSON.stringify(_)===JSON.stringify($)}catch{return!1}}function xQ(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:G,setSupportsThinking:Z,setActiveModelUsage:X,setAgentModelsPayload:Y,setHasLoadedAgentModels:L}=_;if($&&typeof $==="object")Y?.((K)=>yQ(K,$)?K:$),L?.(!0);let V=WQ($);if(V.hasModel)j((K)=>Object.is(K,V.model)?K:V.model);if(V.hasThinkingLevel){let K=V.thinkingLevelLabel??V.thinkingLevel;G((Q)=>Object.is(Q,K)?Q:K)}if(V.hasSupportsThinking)Z((K)=>K===V.supportsThinking?K:V.supportsThinking);if(V.hasProviderUsage)X((K)=>yQ(K,V.providerUsage)?K:V.providerUsage)}async function IQ(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:G,activeChatJidRef:Z,setActiveChatAgents:X}=_,Y=$;try{let[L,V]=await Promise.all([j().catch(()=>({chats:[]})),G(null,{includeArchived:!0}).catch(()=>({chats:[]}))]);if(Z.current!==Y)return[];let K=Oj(L?.chats),Q=Oj(V?.chats),q=zQ(K,Q,Y);return X(q),q}catch{if(Z.current!==Y)return[];return X([]),[]}}async function CQ(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:G}=_;try{let Z=await j($);G(DQ(Z?.chats))}catch{G([])}}function PQ(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshContextUsage:Z,refreshAutoresearchStatus:X,refreshQueueState:Y}=_;if(!$||typeof $!=="object")return;if(j(),G(),Z(),X(),dq($))Y()}function fQ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:G,minWidth:Z=160,maxWidth:X=600,fallbackWidth:Y=280}=_,L=$("sidebarWidth",null),V=Number.isFinite(L)?Math.min(Math.max(Number(L),Z),X):Y;if(j.current=V,G)G.style.setProperty("--sidebar-width",`${V}px`);return V}async function RQ(_){let{currentHashtag:$,searchQuery:j,searchScope:G,currentChatJid:Z,currentRootChatJid:X,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,isCancelled:q,scheduleRaf:B=(W)=>{if(typeof requestAnimationFrame==="function"){requestAnimationFrame(W);return}setTimeout(W,0)},scheduleTimeout:N=(W,T)=>{setTimeout(W,T)},onTimelineLoadStart:U,onTimelineDataReady:E,onTimelineFirstPaint:D,onTimelineError:H}=_,M=(W)=>{if(q())return;B(()=>{if(q())return;B(()=>{if(q())return;D?.(W)})})},J=()=>{if(q())return;B(()=>{if(q())return;N(()=>{if(q())return;Q()},0)})};if($){U?.({mode:"hashtag",hashtag:$});try{if(await Y($),q())return;E?.({mode:"hashtag",hashtag:$}),M({mode:"hashtag"})}catch(W){if(q())return;throw H?.(W,{mode:"hashtag",hashtag:$}),W}return}if(j){U?.({mode:"search",searchQuery:j,searchScope:G});try{let W=await L(j,50,0,Z,G,X);if(q())return;V(Array.isArray(W?.results)?W.results:[]),K(!1),E?.({mode:"search",resultCount:Array.isArray(W?.results)?W.results.length:0}),M({mode:"search"})}catch(W){if(q())return;H?.(W,{mode:"search",searchQuery:j,searchScope:G}),console.error("Failed to search:",W),V([]),K(!1)}return}U?.({mode:"timeline"});try{if(await Y(),q())return;E?.({mode:"timeline"}),M({mode:"timeline"}),J()}catch(W){if(q())return;H?.(W,{mode:"timeline"}),console.error("Failed to load timeline:",W)}}Y5();P_();function Gk(_){let{refreshModelAndQueueState:$,refreshModelState:j,refreshActiveChatAgents:G,refreshCurrentChatBranches:Z,refreshQueueState:X,runImmediately:Y=!0,intervalMs:L=60000,scheduleInterval:V=(q,B)=>setInterval(q,B),clearScheduledInterval:K=(q)=>clearInterval(q)}=_;if(Y)$();let Q=V(()=>{j(),G(),Z(),X()},L);return()=>{K(Q)}}function Zk(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:G,refreshQueueState:Z,refreshContextUsage:X,refreshAutoresearchStatus:Y,prewarmLimit:L=5}=_;$(),j({prewarmRecent:!0,prewarmLimit:L}),G(),Z(),X(),Y()}function Xk(_){let $=vq(_.chats,_.currentChatJid,_.prewarmLimit??5);if($.length===0)return;mq({chatJids:$,fetchTimeline:_.fetchTimeline??((j)=>h$(10,null,j))})}function SQ(_){let{getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z,readStoredNumber:X,sidebarWidthRef:Y,appShellRef:L,currentChatJid:V,currentRootChatJid:K,getAgentModels:Q,getAgentContext:q,getActiveChatAgents:B,getChatBranches:N,activeChatJidRef:U,setActiveChatAgents:E,setCurrentChatBranches:D,setActiveModel:H,setActiveThinkingLevel:M,setSupportsThinking:J,setActiveModelUsage:W,setAgentModelsPayload:T,setHasLoadedAgentModels:x,agentsRef:A,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:z,setContextUsage:y,setExtensionWorkingState:I}=_,R=P(async()=>{await MQ({getAgents:$,setAgents:j,setUserProfile:G,applyBranding:Z})},[Z,$,j,G]);u(()=>{R(),fQ({readStoredNumber:X,sidebarWidthRef:Y,shellElement:L.current,maxWidth:U5(Number.POSITIVE_INFINITY)})},[L,R,X,Y]);let f=P((K0)=>{xQ({payload:K0,setActiveModel:H,setActiveThinkingLevel:M,setSupportsThinking:J,setActiveModelUsage:W,setAgentModelsPayload:T,setHasLoadedAgentModels:x})},[H,W,M,T,x,J]),v=P(()=>A2("thread-switch",V),[V]),l=P(()=>{return J$({kind:"model-state",chatJid:V,run:async()=>{let K0=v();if(K0)X1(K0,"runtime-hydration-start",{phase:"model-state"});let X0=V;try{let[_0,Y0]=await Promise.all([(async()=>{let J0=K0||v();if(J0)X1(J0,"model-request-start",{chatJid:X0});let s=await Q(X0);if(J0)X1(J0,"model-request-ready",{chatJid:X0,hasCurrent:Boolean(s?.current),modelCount:Array.isArray(s?.models)?s.models.length:0});return s})(),q(X0).catch(()=>null)]);if(U.current&&U.current!==X0)return null;f(_0);let Q0=j4(Y0);if(Q0&&Q0.percent!=null)y((J0)=>u4(J0,Q0)?J0:Q0),I6(X0,Q0)}catch{if(U.current&&U.current!==X0)return null;f(null)}let F0=K0||v();if(F0)X1(F0,"runtime-hydration-ready",{chatJid:V}),k2(F0,["runtime-hydration-ready","timeline-first-paint"],"settled",{chatJid:V});return null}})},[U,f,V,q,Q,v,y]);u(()=>{BQ({chatJid:V}),H(null),M(null),J(!1),W(null),x(!1),T(null),I({message:null,indicator:null,visible:!0});let K0=ZQ(V);if(K0)y(K0);else y(null);l()},[V,l,H,W,M,T,y,I,x,J]);let h=P((K0)=>{wQ({payload:K0,agentsRef:A,setAgents:j,applyBranding:Z})},[A,Z,j]),n=P((K0)=>{TQ({payload:K0,setUserProfile:G})},[G]),b=P((K0)=>{let X0=Boolean(K0?.prewarmRecent),F0=Number.isFinite(K0?.prewarmLimit)?Number(K0?.prewarmLimit):5;return J$({kind:"active-chat-agents",chatJid:V,run:async()=>{let _0=v(),Y0=await IQ({currentChatJid:V,getActiveChatAgents:async()=>{if(_0)X1(_0,"active-chat-list-request-start",{chatJid:V});let Q0=await B(V);if(_0)X1(_0,"active-chat-list-request-ready",{rowCount:Array.isArray(Q0?.chats)?Q0.chats.length:0});return Q0},getChatBranches:async(Q0,J0)=>{if(_0)X1(_0,"branch-list-request-start",{rootChatJid:Q0});let s=await N(Q0,J0);if(_0)X1(_0,"branch-list-request-ready",{rootChatJid:Q0,rowCount:Array.isArray(s?.chats)?s.chats.length:0});return s},activeChatJidRef:U,setActiveChatAgents:E});if(X0)Xk({chats:Y0,currentChatJid:V,prewarmLimit:F0});return null}})},[U,V,B,N,v,E]),$0=P(()=>{return J$({kind:"current-chat-branches",chatJid:V,run:async()=>{let K0=v();return await CQ({currentRootChatJid:K,getChatBranches:async(X0,F0)=>{if(K0)X1(K0,"root-branch-request-start",{rootChatJid:X0});let _0=await N(X0,F0);if(K0)X1(K0,"root-branch-request-ready",{rootChatJid:X0,rowCount:Array.isArray(_0?.chats)?_0.chats.length:0});return _0},setCurrentChatBranches:D}),null}})},[V,K,N,v,D]),E0=P(()=>{KQ({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:$0,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:z})},[b,z,O,$0,l,k]),V0=P(()=>{Zk({refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:$0,refreshQueueState:k,refreshContextUsage:O,refreshAutoresearchStatus:z,prewarmLimit:5})},[b,z,O,$0,l,k]);return u(()=>Gk({refreshModelAndQueueState:E0,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:$0,refreshQueueState:k,runImmediately:!1}),[b,$0,E0,l,k]),u(()=>{let K0=setInterval(()=>{l()},5000);return()=>clearInterval(K0)},[l]),{updateAgentProfile:h,updateUserProfile:n,applyModelState:f,refreshModelState:l,refreshActiveChatAgents:b,refreshCurrentChatBranches:$0,refreshModelAndQueueState:E0,refreshPostPaintThreadState:V0}}w0();function Yk(_,$){let j=O1(_);return Boolean(_&&j===$)}function P6(_,$,j){if(!Yk(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function uQ(_,$){return{..._,openedAt:$}}function gQ(_){let $=O1(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function bQ(_,$,j){let G=hL({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!G)return _;let Z=O1(G);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let X=O1(_),Y=Boolean(Z&&X&&Z===X),L={...Y&&_?.artifact?_.artifact:{},...G.artifact||{}};return{...Y&&_?_:{},...G,artifact:L,source:"live",originChatJid:G.originChatJid||j.currentChatJid,openedAt:Y&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function vQ(_,$){if(!_||_?.source!=="live")return _||null;let j=O1($),G=O1(_);if(j&&G&&j!==G)return _;return null}function mQ(_,$,j){return P6(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function Jj(_,$,j){if(j.errorMessage)return P6(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return P6(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function cQ(_,$,j){return P6(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function lQ(_,$,j){return P6(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function hQ(_,$,j){return P6(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}Y5();function Lk(_){let{setExtensionStatusPanels:$,setPendingExtensionPanelActions:j,setExtensionWorkingState:G}=_;$(new Map),j(new Set),G({message:null,indicator:null,visible:!0})}function pQ(_){let{refreshAgentStatus:$,refreshPostPaintThreadState:j}=_;j(),$()}function rQ(_){let{currentChatJid:$,currentRootChatJid:j,currentHashtag:G,searchQuery:Z,searchScope:X,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,setExtensionWorkingState:N,paneStateOwnerChatJidRef:U,chatPaneStateByChatRef:E,snapshotCurrentChatPaneState:D,restoreChatPaneState:H,dismissedQueueRowIdsRef:M,refreshAgentStatus:J,viewStateRef:W,refreshTimeline:T,refreshModelAndQueueState:x,refreshPostPaintThreadState:A,setFloatingWidget:k,dismissedLiveWidgetKeysRef:O}=_;u(()=>{Lk({setExtensionStatusPanels:q,setPendingExtensionPanelActions:B,setExtensionWorkingState:N})},[$,q,B,N]),u(()=>{let I=!1,R=GX("thread-switch",$,{currentRootChatJid:j,currentHashtag:G||null,searchQuery:Z||null,searchScope:X});return X1(R,"route-effect-start",{currentChatJid:$,currentRootChatJid:j}),RQ({currentHashtag:G,searchQuery:Z,searchScope:X,currentChatJid:$,currentRootChatJid:j,loadPosts:Y,searchPosts:L,setPosts:V,setHasMore:K,scrollToBottom:Q,isCancelled:()=>I,onTimelineLoadStart:(f)=>{X1(R,"timeline-load-start",f||null)},onTimelineDataReady:(f)=>{X1(R,"timeline-data-ready",f||null)},onTimelineFirstPaint:(f)=>{X1(R,"timeline-first-paint",f||null),k2(R,["runtime-hydration-ready","timeline-first-paint"],"settled",f||null),pQ({refreshAgentStatus:J,refreshPostPaintThreadState:A})},onTimelineError:(f,v)=>{ZX(R,f,"timeline-load-failed",v||null),pQ({refreshAgentStatus:J,refreshPostPaintThreadState:A})}}),()=>{I=!0,XX(R,"route-effect-cancelled",{currentChatJid:$})}},[$,G,Z,X,j,Y,Q,L,K,V,J,A]),u(()=>{let I=U.current||$;E.current.set(I,D())},[E,$,U,D]),u(()=>{let I=U.current||$;if(I===$)return;E.current.set(I,D()),U.current=$,M.current.clear(),H(E.current.get($)||null)},[E,$,M,U,H,D]);let z=P(()=>{VQ({viewStateRef:W,refreshTimeline:T,refreshModelAndQueueState:x})},[x,T,W]),y=P((I,R="streaming")=>{let f=new Date().toISOString();k((v)=>bQ(v,I,{fallbackStatus:R,currentChatJid:$,dismissedSessionKeys:O.current,updatedAt:f}))},[$,O,k]);return{refreshCurrentView:z,applyLiveGeneratedWidgetUpdate:y}}w0();w0();P_();function Kk({sse:_,onWake:$},j={}){let G=j.window??(typeof window<"u"?window:null),Z=j.document??(typeof document<"u"?document:null);if(!G||!Z||!_)return()=>{};let X=()=>{if(typeof _.forceReconnect==="function"){_.forceReconnect();return}_.reconnectIfNeeded()},Y=typeof j.useFocusReconnect==="boolean"?j.useFocusReconnect:!E5(),L=Z.visibilityState&&Z.visibilityState!=="visible",V=()=>{if(Z.visibilityState&&Z.visibilityState!=="visible")return L=!0,!0;return!1},K=()=>{if(V())return;if(L)L=!1,X(),$?.()},Q=()=>{if(V())return;if(L){K();return}if(Y)_.reconnectIfNeeded()},q=()=>{K()},B=()=>{K()};return G.addEventListener("focus",Q),G.addEventListener("pageshow",q),Z.addEventListener("visibilitychange",B),()=>{G.removeEventListener("focus",Q),G.removeEventListener("pageshow",q),Z.removeEventListener("visibilitychange",B)}}function nQ({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:G,chatJid:Z}){let X=g(_);X.current=_;let Y=g($);Y.current=$;let L=g(j);L.current=j;let V=g(G);V.current=G,u(()=>{let K=new I2((q,B)=>X.current(q,B),(q)=>Y.current(q),{chatJid:Z});K.connect();let Q=Kk({sse:K,onWake:()=>V.current?.()});return()=>{Q(),K.disconnect()}},[Z])}_5();b2();function g4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function f6(_,$){return Boolean(_)&&!Boolean($)}function dQ(_,$){return _||$||null}function iQ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function R6(_,$){let j=$?.row_id??$?.id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let G=$4(_,j);return{rowId:j,items:G.items,remainingQueueCount:G.remainingQueueCount}}function Aj(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function Vk(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function oQ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:Vk($,j),panelKey:typeof $?.key==="string"?$.key:""}}function qk(_,$){if(_!=="extension_ui_working_indicator")return;if(!Array.isArray($?.frames))return{mode:"default",frames:[],intervalMs:null};let j=$.frames.filter((X)=>typeof X==="string"),G=$.interval_ms??$.intervalMs,Z=typeof G==="number"&&Number.isFinite(G)&&G>0?G:null;if(j.length===0)return{mode:"hidden",frames:[],intervalMs:Z};return{mode:"custom",frames:j,intervalMs:Z}}function sQ(_,$,j){if($==="extension_ui_working_visible"){let Z=j?.visible!==!1;if(Z===_.visible)return;return{..._,visible:Z}}if($==="extension_ui_working")return{message:typeof j?.message==="string"&&j.message.trim()?j.message.trim():null,indicator:_.indicator,visible:_.visible};let G=qk($,j);if(G===void 0)return;return{message:_.message,indicator:G,visible:_.visible}}function aQ(_,$){if(_!=="extension_ui_status")return null;if($?.key!=="context_usage")return null;let j=typeof $?.text==="string"?$.text.trim():"";if(!j)return null;try{let G=JSON.parse(j);if(!G||typeof G!=="object")return null;let Z=G,X=Z.tokens==null?null:Number(Z.tokens),Y=Z.contextWindow==null?null:Number(Z.contextWindow),L=Z.percent==null?null:Number(Z.percent);return{tokens:Number.isFinite(X)?X:null,contextWindow:Number.isFinite(Y)?Y:null,percent:Number.isFinite(L)?L:null,estimated:Z.estimated===!0,source:typeof Z.source==="string"?Z.source:null,phase:typeof Z.phase==="string"?Z.phase:null}}catch{return null}}function tQ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"){let j=$?.error;return{title:"Extension UI error",detail:typeof j==="string"?j:j&&typeof j==="object"&&typeof j.error==="string"?j.error:j?String(j):"Unknown extension error",kind:"error",durationMs:5000}}return null}var Qk=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_working_indicator","extension_ui_working_visible","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function eQ(_){return Qk.has(String(_||"").trim())}function Nk(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function S8(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let G={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:G})),j.dispatchEvent(new CustomEvent(Nk(_),{detail:G})),!0}function _N(_,$,j){let G=$?.turn_id,Z=$?.chat_jid,X=typeof Z==="string"&&Z.trim()?Z.trim():null,Y=_==="connected"||_==="workspace_update";return{turnId:G,eventChatJid:X,isGlobalUiEvent:Y,isCurrentChatEvent:X?X===j:Y}}function $N(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function jN(_,$,j){let{currentChatJid:G,updateAgentProfile:Z,updateUserProfile:X,currentTurnIdRef:Y,activeChatJidRef:L,pendingRequestRef:V,draftBufferRef:K,thoughtBufferRef:Q,previewResyncPendingRef:q,previewResyncGenerationRef:B,steerQueuedTurnIdRef:N,thoughtExpandedRef:U,draftExpandedRef:E,draftThrottleRef:D,thoughtThrottleRef:H,viewStateRef:M,followupQueueItemsRef:J,dismissedQueueRowIdsRef:W,scrollToBottomRef:T,hasMoreRef:x,loadMoreRef:A,lastAgentResponseRef:k,wasAgentActiveRef:O,setActiveTurn:z,applyLiveGeneratedWidgetUpdate:y,setFloatingWidget:I,clearLastActivityFlag:R,handleUiVersionDrift:f,setAgentStatus:v,setAgentDraft:l,setAgentPlan:h,setAgentThought:n,setPendingRequest:b,clearAgentRunState:$0,getAgentStatus:E0,noteAgentActivity:V0,showLastActivity:K0,refreshTimeline:X0,refreshModelAndQueueState:F0,refreshActiveChatAgents:_0,refreshCurrentChatBranches:Y0,notifyForFinalResponse:Q0,setContextUsage:J0,refreshContextUsage:s,refreshQueueState:j0,setFollowupQueueItems:z0,clearQueuedSteerStateIfStale:C0,setSteerQueuedTurnId:h0,applyModelState:n0,getAgentContext:G_,setExtensionStatusPanels:m0,setPendingExtensionPanelActions:a0,setExtensionWorkingState:S0,refreshActiveEditorFromWorkspace:o0,showIntentToast:c0,removeStalledPost:d0,setPosts:r0,preserveTimelineScrollTop:Q_,openEditor:t0}=j,{turnId:l0,isCurrentChatEvent:O0}=_N(_,$,G);if(O0)Z($),X($);if(_==="ui_theme"){F6($);return}if(_==="ui_meters"){o7($);return}if(_==="ui_open_tab"){let H0=typeof $?.path==="string"?$.path.trim():"",u0=typeof $?.label==="string"?$.label.trim():void 0;if(H0==="piclaw://settings"){let T0=typeof $?.section==="string"?$.section.trim():"";window.dispatchEvent(new CustomEvent("piclaw:open-settings",{detail:T0?{section:T0}:void 0}));return}if(H0&&typeof t0==="function")t0(H0,u0?{label:u0}:void 0);return}let B_=iQ(_);if(B_.kind==="update"){if(!O0)return;if(B_.shouldAdoptTurn&&f6(l0,Y.current))z(l0);y($,B_.fallbackStatus||"streaming");return}if(B_.kind==="close"){if(!O0)return;I((H0)=>vQ(H0,$));return}if(_?.startsWith("agent_")&&!$N(_))R();if(_==="connected"){if(f($?.app_asset_version))return;if($?.ui_theme){let T0=$.ui_theme.theme||"default",i0=$.ui_theme.tint||null;F6({theme:T0,tint:i0})}if($?.ui_meters)o7($.ui_meters);let H0=B.current+1;if(B.current=H0,q.current=!0,K.current="",Q.current="",v(null),l({text:"",totalLines:0}),h(""),n({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),b(null),V.current=null,$0(),I5(G)){if(B.current===H0)q.current=!1;return}let u0=G;if(E0(u0).then((T0)=>{if(L.current!==u0)return;if(!T0||T0.status!=="active"||!T0.data)return;let i0=T0.data,A_=w8(i0);if(A_)z(A_);v(i0),V0({clearSilence:!0,atMs:r$(i0)??Date.now()}),K0(i0);let K_=x6(T0.thought);if(K_)Q.current=K_.text,n(K_);let H_=x6(T0.draft);if(H_)K.current=H_.text,l(H_)}).catch((T0)=>{console.warn("Failed to fetch agent status:",T0)}).finally(()=>{if(B.current===H0)q.current=!1}),s1(M.current))X0();F0();return}if(_==="agent_status"){if(!O0){if($?.type==="done"||$?.type==="error")_0(),Y0();return}if($.type==="done"||$.type==="error"){if(g4(l0,Y.current))return;if($.type==="done"){if(Q0(l0||Y.current),s1(M.current))X0();let H0=j4($.context_usage);if(H0&&H0.percent!=null)J0((u0)=>u4(u0,H0)?u0:H0),I6(G,H0)}if(s(),O.current=!1,$0(),W.current.clear(),_0(),F0(),l({text:"",totalLines:0}),h(""),n({text:"",totalLines:0}),S0({message:null,indicator:null,visible:!0}),b(null),$.type==="error")v({type:"error",title:$.title||"Agent error"}),setTimeout(()=>v(null),8000);else v(null)}else{if(l0)z(l0);if(V0({running:!0,clearSilence:!0,atMs:r$($)??Date.now()}),$.type==="thinking")K.current="",Q.current="",l({text:"",totalLines:0}),h(""),n({text:"",totalLines:0});v($)}return}if(_==="agent_steer_queued"){if(!O0)return;if(g4(l0,Y.current))return;let H0=dQ(l0,Y.current);if(!H0)return;N.current=H0,h0(H0);return}if(_==="agent_followup_queued"){if(!O0)return;z0((H0)=>nq(H0,$)),j0();return}if(_==="agent_followup_consumed"){if(!O0)return;let H0=R6(J.current,$);if(H0)C0(H0.remainingQueueCount),z0((u0)=>$4(u0,H0.rowId).items);if(j0(),s1(M.current))X0();return}if(_==="agent_followup_removed"){if(!O0)return;let H0=R6(J.current,$);if(H0)W.current.add(H0.rowId),C0(H0.remainingQueueCount),z0((u0)=>$4(u0,H0.rowId).items);j0();return}if(_==="agent_draft_delta"){if(!O0)return;if(q.current)return;if(g4(l0,Y.current))return;if(f6(l0,Y.current))z(l0);V0({running:!0,clearSilence:!0}),K.current=Aq(K.current,$);let H0=Date.now();if(!D.current||H0-D.current>=100){D.current=H0;let u0=K.current;if(E.current)l((T0)=>Fj(u0,T0));else l(T8(u0,null))}return}if(_==="agent_draft"){if(!O0)return;if(q.current)return;if(g4(l0,Y.current))return;if(f6(l0,Y.current))z(l0);V0({running:!0,clearSilence:!0});let H0=$.text||"",u0=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")h((T0)=>Jq(T0,H0,u0));else if(!E.current)K.current=H0,l(T8(H0,$.total_lines));return}if(_==="agent_thought_delta"){if(!O0)return;if(q.current)return;if(g4(l0,Y.current))return;if(f6(l0,Y.current))z(l0);V0({running:!0,clearSilence:!0}),Q.current=kq(Q.current,$);let H0=Date.now();if(U.current&&(!H.current||H0-H.current>=100)){H.current=H0;let u0=Q.current;n((T0)=>Fj(u0,T0))}return}if(_==="agent_thought"){if(!O0)return;if(q.current)return;if(g4(l0,Y.current))return;if(f6(l0,Y.current))z(l0);V0({running:!0,clearSilence:!0});let H0=$.text||"";if(!U.current)Q.current=H0,n(T8(H0,$.total_lines));return}if(_==="model_changed"){if(!O0)return;n0($);let H0=G;G_(H0).then((u0)=>{if(L.current!==H0)return;let T0=j4(u0);if(T0&&T0.percent!=null)J0((i0)=>u4(i0,T0)?i0:T0),I6(H0,T0)}).catch(()=>{if(L.current!==H0)return});return}let e0=oQ(_,$,G);if(e0.isStatusPanelWidgetEvent){if(e0.eventChatJid!==G)return;if(!e0.panelKey)return;if(m0((H0)=>tq(H0,$)),eq($))a0((H0)=>C8(H0,e0.panelKey));S8(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));o0($?.updates);return}if(eQ(_)){if(_==="extension_ui_title"){_0(),Y0(),S8(_,$);return}if(!O0)return;let H0=aQ(_,$);if(H0&&H0.percent!=null)J0((T0)=>u4(T0,H0)?T0:H0);S0((T0)=>{return sQ(T0,_,$)??T0}),S8(_,$);let u0=tQ(_,$);if(u0)c0(u0.title,u0.detail,u0.kind,u0.durationMs);return}let D_=s1(M.current);if(_==="agent_response"){if(!O0)return;S0({message:null,indicator:null,visible:!0}),d0(),k.current={post:$,turnId:Y.current}}if(yq(_,O0,D_))r0((H0)=>Mq(H0,$)),T.current?.();if(_==="interaction_updated"){if(!Uj(O0,D_))return;r0((H0)=>wq(H0,$))}if(_==="interaction_deleted"){if(!Uj(O0,D_))return;let H0=$?.ids||[];if(H0.length){if(Q_(()=>{r0((u0)=>Tq(u0,H0))}),x.current)A.current?.({preserveScroll:!0,preserveMode:"top"})}}}function Bk(_){return _?15000:60000}function GN(_){let{currentChatJid:$,posts:j,scrollToMessage:G,handleConnectionStatusChange:Z,loadPosts:X,refreshCurrentView:Y,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:q,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:M,draftThrottleRef:J,thoughtThrottleRef:W,viewStateRef:T,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:O,loadMoreRef:z,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:n,setAgentDraft:b,setAgentPlan:$0,setAgentThought:E0,setPendingRequest:V0,clearAgentRunState:K0,getAgentStatus:X0,noteAgentActivity:F0,showLastActivity:_0,refreshTimeline:Y0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:s,notifyForFinalResponse:j0,setContextUsage:z0,refreshContextUsage:C0,refreshQueueState:h0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:m0,applyModelState:a0,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:r0,showIntentToast:Q_,removeStalledPost:t0,setPosts:l0,preserveTimelineScrollTop:O0,openEditor:B_,finalizeStalledResponse:e0,connectionStatus:D_,agentStatus:H0,refreshAgentStatus:u0,refreshAutoresearchStatus:T0}=_,i0=P((K_,H_)=>{jN(K_,H_,{currentChatJid:$,updateAgentProfile:L,updateUserProfile:V,currentTurnIdRef:K,activeChatJidRef:Q,pendingRequestRef:q,draftBufferRef:B,thoughtBufferRef:N,previewResyncPendingRef:U,previewResyncGenerationRef:E,steerQueuedTurnIdRef:D,thoughtExpandedRef:H,draftExpandedRef:M,draftThrottleRef:J,thoughtThrottleRef:W,viewStateRef:T,followupQueueItemsRef:x,dismissedQueueRowIdsRef:A,scrollToBottomRef:k,hasMoreRef:O,loadMoreRef:z,lastAgentResponseRef:y,wasAgentActiveRef:I,setActiveTurn:R,applyLiveGeneratedWidgetUpdate:f,setFloatingWidget:v,clearLastActivityFlag:l,handleUiVersionDrift:h,setAgentStatus:n,setAgentDraft:b,setAgentPlan:$0,setAgentThought:E0,setPendingRequest:V0,clearAgentRunState:K0,getAgentStatus:X0,noteAgentActivity:F0,showLastActivity:_0,refreshTimeline:Y0,refreshModelAndQueueState:Q0,refreshActiveChatAgents:J0,refreshCurrentChatBranches:s,notifyForFinalResponse:j0,setContextUsage:z0,refreshContextUsage:C0,refreshQueueState:h0,setFollowupQueueItems:n0,clearQueuedSteerStateIfStale:G_,setSteerQueuedTurnId:m0,applyModelState:a0,getAgentContext:S0,setExtensionStatusPanels:o0,setPendingExtensionPanelActions:c0,setExtensionWorkingState:d0,refreshActiveEditorFromWorkspace:r0,showIntentToast:Q_,removeStalledPost:t0,setPosts:l0,preserveTimelineScrollTop:O0,openEditor:B_})},[Q,f,a0,K0,l,G_,$,K,A,B,M,J,x,S0,X0,h,O,y,z,F0,j0,q,O0,E,U,J0,r0,C0,s,Q0,h0,Y0,t0,k,R,b,$0,n,E0,z0,o0,d0,v,n0,c0,V0,l0,m0,Q_,_0,D,N,H,W,L,V,T,I,B_]);u(()=>{if(typeof window>"u")return;let K_=window.__PICLAW_TEST_API||{};return K_.emit=i0,K_.reset=()=>{t0(),K0(),n(null),b({text:"",totalLines:0}),$0(""),E0({text:"",totalLines:0}),d0({message:null,indicator:null,visible:!0}),V0(null)},K_.finalize=()=>e0(),window.__PICLAW_TEST_API=K_,()=>{if(window.__PICLAW_TEST_API===K_)window.__PICLAW_TEST_API=void 0}},[K0,e0,i0,t0,b,$0,n,E0,d0,V0]),nQ({handleSseEvent:i0,handleConnectionStatusChange:Z,loadPosts:X,onWake:Y,chatJid:$}),u(()=>{if(!j||j.length===0)return;let K_=location.hash;if(!K_||!K_.startsWith("#msg-"))return;let H_=K_.slice(5);G(H_),history.replaceState(null,"",location.pathname+location.search)},[j,G]);let A_=H0!==null;u(()=>{if(D_!=="connected")return;let K_=Bk(A_),H_=setInterval(()=>{HQ({viewStateRef:T,isAgentActive:A_,refreshTimeline:Y0,refreshQueueState:h0,refreshAgentStatus:u0,refreshContextUsage:C0,refreshAutoresearchStatus:T0})},K_);return()=>clearInterval(H_)},[D_,A_,u0,T0,C0,h0,Y0,T]),u(()=>{return J8(()=>{u0(),C0(),h0(),T0()})},[u0,T0,C0,h0])}function Fk(_){return{currentChatJid:_.currentChatJid,activeChatJidRef:_.activeChatJidRef,queueRefreshGenRef:_.queueRefreshGenRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,getAgentQueueState:_.getAgentQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,getAgentContext:_.getAgentContext,setContextUsage:_.setContextUsage,getAutoresearchStatus:_.getAutoresearchStatus,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,getAgentStatus:_.getAgentStatus,wasAgentActiveRef:_.wasAgentActiveRef,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,clearAgentRunState:_.clearAgentRunState,agentStatusRef:_.agentStatusRef,pendingRequestRef:_.pendingRequestRef,thoughtBufferRef:_.thoughtBufferRef,draftBufferRef:_.draftBufferRef,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,setActiveTurn:_.setActiveTurn,noteAgentActivity:_.noteAgentActivity,clearLastActivityFlag:_.clearLastActivityFlag,isAgentRunningRef:_.isAgentRunningRef,currentTurnIdRef:_.currentTurnIdRef,silentRecoveryRef:_.silentRecoveryRef,silenceRefreshMs:_.silenceRefreshMs,lastAgentEventRef:_.lastAgentEventRef,lastSilenceNoticeRef:_.lastSilenceNoticeRef,silenceWarningMs:_.silenceWarningMs,silenceFinalizeMs:_.silenceFinalizeMs,isCompactionStatus:_.isCompactionStatus,serverVersionContext:_.serverVersionContext,setConnectionStatus:_.setConnectionStatus,setStateAccessFailed:_.setStateAccessFailed,setPendingRequestForConnection:_.setPendingRequest,hasConnectedOnceRef:_.hasConnectedOnceRef}}function Uk(_){return{getAgents:_.getAgents,setAgents:_.setAgents,setUserProfile:_.setUserProfile,applyBranding:_.applyBranding,readStoredNumber:_.readStoredNumber,sidebarWidthRef:_.sidebarWidthRef,appShellRef:_.appShellRef,currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,getAgentModels:_.getAgentModels,getAgentContext:_.getAgentContext,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,activeChatJidRef:_.activeChatJidRef,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,setActiveModel:_.setActiveModel,setActiveThinkingLevel:_.setActiveThinkingLevel,setSupportsThinking:_.setSupportsThinking,setActiveModelUsage:_.setActiveModelUsage,setAgentModelsPayload:_.setAgentModelsPayload,setHasLoadedAgentModels:_.setHasLoadedAgentModels,agentsRef:_.agentsRef,refreshQueueState:_.refreshQueueState,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus,setContextUsage:_.setContextUsage,setExtensionWorkingState:_.setExtensionWorkingState}}function Hk(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,currentHashtag:_.currentHashtag,searchQuery:_.searchQuery,searchScope:_.searchScope,loadPosts:_.loadPosts,searchPosts:_.searchPosts,setPosts:_.setPosts,setHasMore:_.setHasMore,scrollToBottom:_.scrollToBottom,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,paneStateOwnerChatJidRef:_.paneStateOwnerChatJidRef,chatPaneStateByChatRef:_.chatPaneStateByChatRef,snapshotCurrentChatPaneState:_.snapshotCurrentChatPaneState,restoreChatPaneState:_.restoreChatPaneState,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,refreshAgentStatus:_.refreshAgentStatus,refreshContextUsage:_.refreshContextUsage,viewStateRef:_.viewStateRef,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshPostPaintThreadState:_.refreshPostPaintThreadState,setFloatingWidget:_.setFloatingWidget,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef}}function Ek(_){return{currentChatJid:_.currentChatJid,posts:_.posts,scrollToMessage:_.scrollToMessage,handleConnectionStatusChange:_.handleConnectionStatusChange,loadPosts:_.loadPosts,refreshCurrentView:_.refreshCurrentView,updateAgentProfile:_.updateAgentProfile,updateUserProfile:_.updateUserProfile,currentTurnIdRef:_.currentTurnIdRef,activeChatJidRef:_.activeChatJidRef,pendingRequestRef:_.pendingRequestRef,draftBufferRef:_.draftBufferRef,thoughtBufferRef:_.thoughtBufferRef,previewResyncPendingRef:_.previewResyncPendingRef,previewResyncGenerationRef:_.previewResyncGenerationRef,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef,thoughtExpandedRef:_.thoughtExpandedRef,draftExpandedRef:_.draftExpandedRef,draftThrottleRef:_.draftThrottleRef,thoughtThrottleRef:_.thoughtThrottleRef,viewStateRef:_.viewStateRef,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,scrollToBottomRef:_.scrollToBottomRef,hasMoreRef:_.hasMoreRef,loadMoreRef:_.loadMoreRef,lastAgentResponseRef:_.lastAgentResponseRef,wasAgentActiveRef:_.wasAgentActiveRef,setActiveTurn:_.setActiveTurn,applyLiveGeneratedWidgetUpdate:_.applyLiveGeneratedWidgetUpdate,setFloatingWidget:_.setFloatingWidget,clearLastActivityFlag:_.clearLastActivityFlag,handleUiVersionDrift:_.handleUiVersionDrift,setAgentStatus:_.setAgentStatus,setAgentDraft:_.setAgentDraft,setAgentPlan:_.setAgentPlan,setAgentThought:_.setAgentThought,setPendingRequest:_.setPendingRequest,clearAgentRunState:_.clearAgentRunState,getAgentStatus:_.getAgentStatus,noteAgentActivity:_.noteAgentActivity,showLastActivity:_.showLastActivity,refreshTimeline:_.refreshTimeline,refreshModelAndQueueState:_.refreshModelAndQueueState,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,notifyForFinalResponse:_.notifyForFinalResponse,setContextUsage:_.setContextUsage,refreshContextUsage:_.refreshContextUsage,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,setSteerQueuedTurnId:_.setSteerQueuedTurnId,applyModelState:_.applyModelState,getAgentContext:_.getAgentContext,setExtensionStatusPanels:_.setExtensionStatusPanels,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,setExtensionWorkingState:_.setExtensionWorkingState,refreshActiveEditorFromWorkspace:_.refreshActiveEditorFromWorkspace,showIntentToast:_.showIntentToast,removeStalledPost:_.removeStalledPost,setPosts:_.setPosts,preserveTimelineScrollTop:_.preserveTimelineScrollTop,finalizeStalledResponse:_.finalizeStalledResponse,connectionStatus:_.connectionStatus,agentStatus:_.agentStatus,refreshAgentStatus:_.refreshAgentStatus,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function ZN(_){let $=EQ(Fk(_)),j=SQ(Uk({..._,refreshQueueState:$.refreshQueueState,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),G=rQ(Hk({..._,refreshQueueState:$.refreshQueueState,refreshAgentStatus:$.refreshAgentStatus,refreshContextUsage:$.refreshContextUsage,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshPostPaintThreadState:j.refreshPostPaintThreadState}));return GN(Ek({..._,handleConnectionStatusChange:$.handleConnectionStatusChange,handleUiVersionDrift:$.handleUiVersionDrift,refreshCurrentView:G.refreshCurrentView,updateAgentProfile:j.updateAgentProfile,updateUserProfile:j.updateUserProfile,applyLiveGeneratedWidgetUpdate:G.applyLiveGeneratedWidgetUpdate,refreshModelAndQueueState:j.refreshModelAndQueueState,refreshActiveChatAgents:j.refreshActiveChatAgents,refreshCurrentChatBranches:j.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshQueueState:$.refreshQueueState,applyModelState:j.applyModelState,refreshAgentStatus:$.refreshAgentStatus,refreshAutoresearchStatus:$.refreshAutoresearchStatus})),{agentStatusLifecycle:$,chatRefreshLifecycle:j,viewRefreshLifecycle:G}}w0();var XN="piclaw:pane-host-transfer:",Dk=300000;function YN(_){try{return _?.localStorage??null}catch{return null}}function LN(_){return typeof _==="string"?_.trim():""}function KN(_){if(!_||typeof _!=="object"||Array.isArray(_))return null;return _}function zk(_=Date.now()){return`pane-transfer-${_.toString(36)}-${Math.random().toString(36).slice(2,10)}`}function Wk(_,$){try{return _?.removeItem($),!0}catch(j){return!1}}function Ok(_,$=globalThis,j=Date.now()){let G=YN($),Z=LN(_?.path),X=KN(_?.payload);if(!G||!Z||!X)return null;let Y=zk(j);try{return G.setItem(`${XN}${Y}`,JSON.stringify({path:Z,payload:X,capturedAt:j})),Y}catch{return null}}function kj(_,$=globalThis,j=Date.now()){let G=typeof _==="string"?_.trim():"",Z=YN($);if(!G||!Z)return null;let X=`${XN}${G}`,Y="";try{Y=Z.getItem(X)||""}catch{return null}if(!Y)return null;Wk(Z,X);try{let L=JSON.parse(Y),V=typeof L?.capturedAt==="number"&&Number.isFinite(L.capturedAt)?L.capturedAt:j;if(V+Dk<j)return null;let K=LN(L?.path),Q=KN(L?.payload);if(!K||!Q)return null;return{path:K,payload:Q,capturedAt:V}}catch{return null}}function u8(_,$=globalThis,j=Date.now()){let G=Ok(_,$,j);return G?{pane_transfer:G}:null}function VN(_=globalThis,$=Date.now()){let j=G6("pane_transfer",_);return kj(j,_,$)}function b4(_){return typeof _==="string"?_.trim():""}function Jk(_){return Boolean(_)&&typeof _.get==="function"&&typeof _.set==="function"&&typeof _.delete==="function"&&typeof _.entries==="function"}function yj(_){if(!_)return null;let $=_.__piclawPaneLiveTransferRegistry__;if(Jk($))return $;let j=new Map;return _.__piclawPaneLiveTransferRegistry__=j,j}function Ak(_){try{return _?.(),!0}catch($){return!1}}function S6(_,$=typeof window<"u"?window:null){let j=yj($),G=b4(_?.panePath),Z=b4(_?.paneInstanceId),X=b4(_?.paneWindowId);if(!j||!G||!Z||!X||typeof _?.instance?.moveHost!=="function")return!1;return j.set(X,{..._,panePath:G,paneInstanceId:Z,paneWindowId:X,registeredAt:typeof _?.registeredAt==="number"?_.registeredAt:Date.now()}),!0}function qN(_,$=typeof window<"u"?window:null){let j=yj($),G=b4(_);if(!j||!G)return;for(let[Z,X]of j.entries())if(X?.panePath===G)j.delete(Z)}async function QN(_,$,j,G){let Z=yj(_),X=b4($?.panePath),Y=b4($?.paneInstanceId),L=b4($?.paneWindowId);if(!Z||!X||!Y||!L)return null;let V=Z.get(L)||null;if(!V)return null;if(V.panePath!==X||V.paneInstanceId!==Y)return null;if(typeof V.instance?.moveHost!=="function")return null;if(!await V.instance.moveHost(j,G))return null;return Z.delete(L),Ak(V.releaseSourceHost),V.instance}m2();function f5(_){if(!_||typeof _!=="object")return!1;let $=_;if(typeof $.closest==="function"&&$.closest('input, textarea, select, [contenteditable="true"], .compose-box, .compose-model-popup, .compose-session-popup'))return!0;return Boolean($.isContentEditable)}function NN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.openTab,Z=_?.editSource,X=_?.popOutPane,Y=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)G?.(q,B)},L=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)Z?.(q,B)},V=(Q)=>{let q=Q?.detail?.path,B=typeof Q?.detail?.label==="string"&&Q.detail.label.trim()?Q.detail.label.trim():void 0;if(q)X?.(q,B)},K=["pane:open-tab","office-viewer:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","html-viewer:open-tab","mindmap:open-tab","vnc:open-tab"];return K.forEach((Q)=>j.addEventListener(Q,Y)),j.addEventListener("html-viewer:edit-source",L),j.addEventListener("pane:popout",V),()=>{K.forEach((Q)=>j.removeEventListener(Q,Y)),j.removeEventListener("html-viewer:edit-source",L),j.removeEventListener("pane:popout",V)}}function BN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(!O$(Z,"toggleDock"))return;Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function FN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=_?.toggleZenMode,Z=_?.exitZenMode,X=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),Y=(L)=>{if(O$(L,"toggleZenMode")){L.preventDefault?.(),G?.();return}if(f5(L?.target))return;if(L?.key==="Escape"&&X())L.preventDefault?.(),Z?.()};return j.addEventListener("keydown",Y),()=>j.removeEventListener("keydown",Y)}function UN(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let G=(Z)=>{if(f5(Z?.target))return;if(O$(Z,"previousChat")){Z.preventDefault?.(),_?.previousChat?.();return}if(O$(Z,"nextChat"))Z.preventDefault?.(),_?.nextChat?.()};return j.addEventListener("keydown",G),()=>j.removeEventListener("keydown",G)}function HN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!O$(G,"openSettings"))return;G.preventDefault(),o1()};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function EN(_={}){let $=_.document??(typeof document<"u"?document:null);if(!$)return()=>{};let j=(G)=>{if(f5(G?.target))return;if(!O$(G,"openHelp"))return;G.preventDefault(),o1({section:"keyboard"})};return $.addEventListener("keydown",j),()=>$.removeEventListener("keydown",j)}function DN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:G,renameBranchLockUntil:Z,getFormLock:X,setRenameBranchNameDraft:Y,setIsRenameBranchFormOpen:L,now:V=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let K=X?.()||null;if(!K)return!1;if(G||V<Number(Z||0)||K.inFlight||V<Number(K.cooldownUntil||0))return!1;return Y?.(j.agent_name||""),L?.(!0),!0}function zN(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function WN(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:G,openRenameForm:Z,renameBranchInFlightRef:X,renameBranchLockUntilRef:Y,getFormLock:L,setIsRenamingBranch:V,renameChatBranch:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,navigate:B,baseHref:N,chatOnlyMode:U,showIntentToast:E,closeRenameForm:D,now:H=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof G!=="string")return Z?.(),!1;let M=H(),J=L?.()||null;if(!J)return!1;if(X.current||M<Number(Y.current||0)||J.inFlight||M<Number(J.cooldownUntil||0))return!1;X.current=!0,J.inFlight=!0,V?.(!0);try{let W=j.agent_name||"",T=a2(G,W);if(!T.canSubmit)return E?.("Could not rename session",T.message||"Enter a valid session handle.","warning",4000),!1;let x=T.normalized||W,A=await K(j.chat_jid,{agentName:x});await Promise.allSettled([Q?.(),q?.()]);let k=A?.branch?.agent_name||x||W;return E?.("Session renamed",`@${k}`,"info",3500),D?.(),!0}catch(W){let T=W instanceof Error?W.message:String(W||"Could not rename session."),x=/already in use/i.test(T||"")?`${T} Switch to or restore that existing session from the session manager.`:T;return E?.("Could not rename session",x||"Could not rename session.","warning",5000),!1}finally{X.current=!1,V?.(!1);let W=H()+RV;Y.current=W;let T=L?.()||null;if(T)T.inFlight=!1,T.cooldownUntil=W}}async function ON(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:G,currentBranchRecord:Z,currentChatBranches:X=[],activeChatAgents:Y=[],pruneChatBranch:L,refreshActiveChatAgents:V,refreshCurrentChatBranches:K,showIntentToast:Q,baseHref:q,chatOnlyMode:B,navigate:N,confirm:U=(k)=>window.confirm(k)}=_;if(!$)return!1;let E=typeof j==="string"&&j.trim()?j.trim():"",D=typeof G==="string"&&G.trim()?G.trim():"",H=E||Z?.chat_jid||D;if(!H)return Q?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let M=(Z?.chat_jid===H?Z:null)||X.find((k)=>k?.chat_jid===H)||Y.find((k)=>k?.chat_jid===H)||null,J=M?.chat_jid===(M?.root_chat_jid||M?.chat_jid),W=Boolean(J&&H==="web:default"),T=Boolean(J&&X.some((k)=>{let O=typeof k?.chat_jid==="string"?k.chat_jid.trim():"",z=typeof k?.root_chat_jid==="string"?k.root_chat_jid.trim():O;return O&&O!==H&&z===H&&!k?.archived_at}));if(W)return Q?.("Cannot archive session","The default chat session cannot be archived.","warning",4000),!1;if(T)return Q?.("Cannot archive session","Archive or delete the child branch sessions first.","warning",4500),!1;let x=`@${M?.agent_name||H}${M?.chat_jid?` — ${M.chat_jid}`:""}`;if(!U(J?`Archive ${x}?

This removes the session from the session picker. Chat history is preserved.`:`Prune ${x}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await L(H),await Promise.allSettled([V?.(),K?.()]);let k=J?"web:default":M?.root_chat_jid||"web:default";Q?.(J?"Session archived":"Branch pruned",`${x} has been archived.`,"info",3000);let O=T1(q,k,{chatOnly:B});return N?.(O),!0}catch(k){let O=k instanceof Error?k.message:String(k||"Could not prune branch.");return Q?.("Could not prune branch",O||"Could not prune branch.","warning",5000),!1}}async function JN(_){let{targetChatJid:$,purgeChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,confirm:L=(E)=>window.confirm(E)}=_,V=typeof $==="string"?$.trim():"";if(!V||typeof j!=="function")return!1;let K=G.find((E)=>E?.chat_jid===V)||null;if(!Boolean(K?.archived_at))return Y?.("Could not delete branch","Only archived sessions can be permanently deleted.","warning",4500),!1;let q=Boolean(K?.chat_jid&&K.chat_jid===(K.root_chat_jid||K.chat_jid)),B=`@${K?.agent_name||V}`;if(!L(`Permanently delete ${B}?

This removes all chat history, token usage, cursor state, scheduled tasks, and session files for this ${q?"session":"branch"}. It cannot be undone.`))return!1;try{return await j(V),await Promise.allSettled([Z?.(),X?.()]),Y?.(q?"Archived session deleted":"Archived branch deleted",`${B} was permanently deleted.`,"info",4000),!0}catch(E){let D=E instanceof Error?E.message:String(E||`Could not permanently delete archived ${q?"session":"branch"}.`);return Y?.("Could not delete branch",D||`Could not permanently delete archived ${q?"session":"branch"}.`,"warning",5000),!1}}async function AN(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:G=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,baseHref:L,chatOnlyMode:V,navigate:K}=_,Q=typeof $==="string"?$.trim():"";if(!Q||typeof j!=="function")return!1;try{let q=G.find((H)=>H?.chat_jid===Q)||null,B=await j(Q);await Promise.allSettled([Z?.(),X?.()]);let N=B?.branch,U=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():Q,E=DL(q?.agent_name,N?.agent_name,U);Y?.("Branch restored",E,"info",4200);let D=T1(L,U,{chatOnly:V});return K?.(D),!0}catch(q){let B=q instanceof Error?q.message:String(q||"Could not restore branch.");return Y?.("Could not restore branch",B||"Could not restore branch.","warning",5000),!1}}async function kN(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:G,navigate:Z,baseHref:X,isCancelled:Y=()=>!1}=_;try{G?.({status:"running",message:"Preparing a new chat branch…"});let L=await j($);if(Y())return!1;let V=L?.branch,K=typeof V?.chat_jid==="string"&&V.chat_jid.trim()?V.chat_jid.trim():null;if(!K)throw Error("Branch fork did not return a chat id.");let Q=T1(X,K,{chatOnly:!0});return Z?.(Q,{replace:!0}),!0}catch(L){if(Y())return!1;return G?.({status:"error",message:U4(L)}),!1}}function MN(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:G,chatOnlyMode:Z,currentHref:X,navigate:Y}=_;if(!$)return!1;let L=typeof j==="string"?j.trim():"";if(!L||L===G)return!1;let V=T1(X,L,{chatOnly:Z});return Y?.(V),!0}function kk(_){return typeof _==="string"?_.trim():""}function yk(_){return new Promise(($)=>setTimeout($,_))}async function yN(_,$){if(typeof _?.beforeDetachFromHost!=="function")return;await _.beforeDetachFromHost({path:$,target:"popout"})}async function wN(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:G,dockInstanceRef:Z,terminalTabPath:X,activateTab:Y,getActiveTabId:L,resolveTab:V,buildEditorPopoutTransfer:K}=_,Q=$===X&&Boolean(V?.($));if($===X&&!Q){let E=Z.current;if(await yN(E,$),typeof E?.preparePopoutTransfer!=="function")return null;return await E.preparePopoutTransfer()}let q=()=>kk(L?.()??j),B=q(),N=G.current;if(B!==$)Y?.($);let U=B===$?G.current:null;if(typeof U?.preparePopoutTransfer!=="function")for(let E=0;E<12;E+=1){if(E>0)await yk(16);else await Promise.resolve();let D=q(),H=G.current,M=D===$,J=H!==N;if(!M||typeof H?.preparePopoutTransfer!=="function")continue;if(B===$||J||E>0){U=H;break}}if(await yN(U,$),typeof U?.preparePopoutTransfer==="function"){let E=await U.preparePopoutTransfer();if(E)return E}return K?.($)??null}function TN(_){let{panePath:$,terminalTabPath:j,dockVisible:G,resolveTab:Z,closeTab:X,setDockVisible:Y}=_,L=Z($);if(L&&!L.dirty){X($);return}if($===j&&G)Y(!1)}function xN(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:G,editorWidthRef:Z,dockHeightRef:X,sidebarWidthRef:Y,readStoredNumber:L}=_;if(!j||!$||!G)return;if(!Z.current){let V=L("editorWidth",null),K=Y.current||280,Q=Number.isFinite(V)?Number(V):K;Z.current=H5(Q,typeof window<"u"?window.innerWidth:0,Y.current||0)}if(G.style.setProperty("--editor-width",`${Z.current}px`),!X.current){let V=L("dockHeight",null);X.current=Number.isFinite(V)?Number(V):200}G.style.setProperty("--dock-height",`${X.current}px`)}async function IN(_){if(typeof _!=="function")return null;try{return await _()}catch{return null}}async function CN(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:V}=_;if(typeof L==="function")try{let K=I3(V,$,{chatOnly:j});return L(K),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}try{let Q=(await G($))?.branch,q=typeof Q?.chat_jid==="string"&&Q.chat_jid.trim()?Q.chat_jid.trim():null;if(!q)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let B=Q?.agent_name?`@${Q.agent_name}`:q;Y?.("New branch created",`Switched to ${B}.`,"info",2500);let N=T1(V,q,{chatOnly:j});return L?.(N),!0}catch(K){return Y?.("Could not create branch",U4(K),"warning",5000),!1}}async function PN(_){let{rootName:$,chatOnlyMode:j,createRootChatSession:G,refreshActiveChatAgents:Z,refreshCurrentChatBranches:X,showIntentToast:Y,navigate:L,baseHref:V}=_,K=String($||"").trim();if(!K)return!1;try{let q=(await G(K))?.branch,B=typeof q?.chat_jid==="string"&&q.chat_jid.trim()?q.chat_jid.trim():null;if(!B)throw Error("Root session creation did not return a chat id.");await Promise.allSettled([Z?.(),X?.()]);let N=q?.agent_name?`@${q.agent_name}`:B;Y?.("Root session created",`Switched to ${N}.`,"info",2500);let U=T1(V,B,{chatOnly:j});return L?.(U),!0}catch(Q){return Y?.("Could not create root session",U4(Q),"warning",5000),!1}}async function fN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:G,label:Z,showIntentToast:X,resolveSourceTransfer:Y,closeSourcePaneIfTransferred:L,onPaneWindowOpened:V,currentChatJid:K,baseHref:Q}=_;if(!$||j)return!1;let q=typeof G==="string"&&G.trim()?G.trim():"";if(!q)return!1;let B=pG(q);if(!B)return X?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let N=M3(B);if(!N)return X?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(N,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let U=await Y?.(q),E=Boolean(U&&Object.keys(U).length>0),D=hG(Q,q,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:K,params:U});if(T3(N,D),V?.(q,N,U||null),E&&!V)L?.(q);return!0}catch(U){x3(N);let E=U instanceof Error?U.message:"Could not transfer pane state to the new window.";return X?.("Could not open pane window",E,"warning",5000),!1}}async function RN(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:G,currentRootChatJid:Z,forkChatBranch:X,getActiveChatAgents:Y,getChatBranches:L,setActiveChatAgents:V,setCurrentChatBranches:K,showIntentToast:Q,baseHref:q}=_;if(!$||j)return!1;let B=lG(G);if(!B)return Q?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(B.mode==="tab"){let U=I3(q,G,{chatOnly:!0});if(!window.open(U,B.target))return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let N=M3(B);if(!N)return Q?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;w3(N,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let E=(await X(G))?.branch,D=typeof E?.chat_jid==="string"&&E.chat_jid.trim()?E.chat_jid.trim():null;if(!D)throw Error("Branch fork did not return a chat id.");let H=await IN(()=>Y?.());if(H)V?.(Array.isArray(H?.chats)?H.chats:[]);let M=await IN(()=>L?.(Z));if(M)K?.(Array.isArray(M?.chats)?M.chats:[]);let J=T1(q,D,{chatOnly:!0});return T3(N,J),!0}catch(U){return x3(N),Q?.("Could not open branch window",U4(U),"error",5000),!1}}function Mk(_){_(($)=>!$)}function wk(_){let{nextChatJid:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,hasWindow:X=typeof window<"u",currentHref:Y=X?window.location.href:"http://localhost/"}=_;return MN({hasWindow:X,nextChatJid:$,currentChatJid:j,chatOnlyMode:G,currentHref:Y,navigate:Z})}function Tk(_){let{currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y,hasWindow:L=typeof window<"u"}=_;return DN({hasWindow:L,currentBranchRecord:$,renameBranchInFlight:j,renameBranchLockUntil:G,getFormLock:Z,setRenameBranchNameDraft:X,setIsRenameBranchFormOpen:Y})}function xk(_){zN(_)}async function Ik(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await WN({hasWindow:$,baseHref:String(j||"").trim()||($?window.location.href:"http://localhost/"),...G})}async function Ck(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await ON({hasWindow:$,baseHref:j,...G})}async function Pk(_){await JN(_)}async function fk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await AN({baseHref:j,...G})}function Rk(_){let{branchLoaderMode:$,branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,hasWindow:Y=typeof window<"u",baseHref:L=Y?window.location.href:"http://localhost/",runBranchLoaderImpl:V=kN}=_;if(!$||!Y)return;let K=!1;return V({branchLoaderSourceChatJid:j,forkChatBranch:G,setBranchLoaderState:Z,navigate:X,baseHref:L,isCancelled:()=>K}),()=>{K=!0}}async function Sk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await CN({baseHref:j,...G})}async function uk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await PN({baseHref:j,...G})}async function gk(_){let{isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,activateTab:Y,tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:Q,tabPaneOverrides:q,buildPaneDetachTransfer:B,registerDetachedPaneWindow:N,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H,hasWindow:M=typeof window<"u",baseHref:J=M?window.location.href:"http://localhost/"}=_,W=B?.(j)||null;return await fN({hasWindow:M,isWebAppMode:$,path:j,label:G,showIntentToast:Z,currentChatJid:X,baseHref:J,resolveSourceTransfer:async(T)=>{let x=await wN({panePath:T,activateTab:Y,getActiveTabId:()=>$_.getActiveId(),tabStripActiveId:L,editorInstanceRef:V,dockInstanceRef:K,terminalTabPath:Q,resolveTab:E,buildEditorPopoutTransfer:(z)=>{if(!z||z===Q)return null;let y=V.current,I=typeof y?.getContent==="function"?y.getContent():void 0,R=typeof y?.isDirty==="function"?y.isDirty():!1,f=q instanceof Map?q.get(z)||null:null,v=$_.getViewState(z)||null;return Z2({path:z,content:R?I:void 0,paneOverrideId:f,viewState:v})}}),A=T===Q&&!E(T)?K.current:V.current,k=typeof A?.exportHostTransferState==="function"?A.exportHostTransferState():null,O=k?u8({path:T,payload:k}):null;if(W?.paneInstanceId&&W?.paneWindowId&&A&&T!==Q&&k?.kind!=="terminal")S6({panePath:T,paneInstanceId:W.paneInstanceId,paneWindowId:W.paneWindowId,instance:A,releaseSourceHost:()=>{if(T===Q){if(K.current===A)K.current=null;if(V.current===A)V.current=null;return}if(V.current===A)V.current=null}});return{...x||{},...O||{},...W?.params||{}}},onPaneWindowOpened:N?(T,x,A)=>{N(T,G,x,A)}:void 0,closeSourcePaneIfTransferred:N?void 0:(T)=>{TN({panePath:T,terminalTabPath:Q,dockVisible:U,resolveTab:E,closeTab:D,setDockVisible:H})}})}function bk(_){let{openEditor:$,popOutPane:j,watchPaneOpenEventsImpl:G=NN}=_;return G({openTab:(Z,X)=>$(Z,X?{label:X}:void 0),editSource:(Z,X)=>$(Z,{...X?{label:X}:{},paneOverrideId:"editor"}),popOutPane:(Z,X)=>{j(Z,X)}})}async function vk(_){let{hasWindow:$=typeof window<"u",baseHref:j=$?window.location.href:"http://localhost/",...G}=_;await RN({hasWindow:$,baseHref:j,...G})}function mk(_){let{hasWindow:$=typeof window<"u",...j}=_;xN({hasWindow:$,...j})}function SN(_){let{setWorkspaceOpen:$,currentChatJid:j,chatOnlyMode:G,navigate:Z,currentBranchRecord:X,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q,setIsRenamingBranch:q,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:M,purgeChatBranch:J,restoreChatBranch:W,branchLoaderMode:T,branchLoaderSourceChatJid:x,forkChatBranch:A,createRootChatSession:k,setBranchLoaderState:O,currentRootChatJid:z,isWebAppMode:y,getActiveChatAgents:I,getChatBranches:R,setActiveChatAgents:f,setCurrentChatBranches:v,openEditor:l,activateTab:h,tabStripActiveId:n,editorInstanceRef:b,dockInstanceRef:$0,terminalTabPath:E0,tabPaneOverrides:V0,buildPaneDetachTransfer:K0,registerDetachedPaneWindow:X0,dockVisible:F0,resolveTab:_0,closeTab:Y0,setDockVisible:Q0,editorOpen:J0,shellElement:s,editorWidthRef:j0,dockHeightRef:z0,sidebarWidthRef:C0,readStoredNumber:h0}=_,n0=P(()=>{Mk($)},[$]),G_=P((O0)=>{wk({nextChatJid:O0,currentChatJid:j,chatOnlyMode:G,navigate:Z})},[G,j,Z]),m0=P(()=>{Tk({currentBranchRecord:X,renameBranchInFlight:Y.current,renameBranchLockUntil:L.current,getFormLock:V,setRenameBranchNameDraft:K,setIsRenameBranchFormOpen:Q})},[X,V,Y,L,Q,K]),a0=P(()=>{xk({setIsRenameBranchFormOpen:Q,setRenameBranchNameDraft:K})},[Q,K]),S0=P(async(O0)=>{await Ik({currentBranchRecord:X,nextName:O0,openRenameForm:m0,renameBranchInFlightRef:Y,renameBranchLockUntilRef:L,getFormLock:V,setIsRenamingBranch:q,renameChatBranch:B,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,navigate:Z,chatOnlyMode:G,showIntentToast:E,closeRenameForm:a0})},[a0,X,G,V,Z,m0,N,U,Y,L,B,q,E]),o0=P(async(O0=null)=>{await Ck({targetChatJid:O0,currentChatJid:j,currentBranchRecord:X,currentChatBranches:D,activeChatAgents:H,pruneChatBranch:M,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[H,G,X,D,j,Z,M,N,U,E]),c0=P(async(O0)=>{await Pk({targetChatJid:O0,purgeChatBranch:J,currentChatBranches:D,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E})},[D,J,N,U,E]),d0=P(async(O0)=>{await fk({targetChatJid:O0,restoreChatBranch:W,currentChatBranches:D,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,chatOnlyMode:G,navigate:Z})},[G,D,Z,N,U,W,E]);u(()=>Rk({branchLoaderMode:T,branchLoaderSourceChatJid:x,forkChatBranch:A,setBranchLoaderState:O,navigate:Z}),[T,x,A,Z,O]);let r0=P(async()=>{await Sk({currentChatJid:j,chatOnlyMode:G,forkChatBranch:A,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,j,A,Z,N,U,E]),Q_=P(async(O0)=>{await uk({rootName:O0,chatOnlyMode:G,createRootChatSession:k,refreshActiveChatAgents:N,refreshCurrentChatBranches:U,showIntentToast:E,navigate:Z})},[G,k,Z,N,U,E]),t0=P(async(O0,B_)=>{return await gk({isWebAppMode:y,path:O0,label:B_,showIntentToast:E,currentChatJid:j,activateTab:h,tabStripActiveId:n,editorInstanceRef:b,dockInstanceRef:$0,terminalTabPath:E0,tabPaneOverrides:V0,buildPaneDetachTransfer:K0,registerDetachedPaneWindow:X0,dockVisible:F0,resolveTab:_0,closeTab:Y0,setDockVisible:Q0})},[h,K0,Y0,j,$0,F0,b,y,X0,_0,Q0,E,V0,n,E0]);u(()=>bk({openEditor:l,popOutPane:(O0,B_)=>{t0(O0,B_)}}),[t0,l]);let l0=P(async()=>{await vk({isWebAppMode:y,currentChatJid:j,currentRootChatJid:z,forkChatBranch:A,getActiveChatAgents:I,getChatBranches:R,setActiveChatAgents:f,setCurrentChatBranches:v,showIntentToast:E})},[j,z,A,I,R,y,f,v,E]);return u(()=>{mk({editorOpen:J0,shellElement:s,editorWidthRef:j0,dockHeightRef:z0,sidebarWidthRef:C0,readStoredNumber:h0})},[z0,J0,j0,h0,s,C0]),{toggleWorkspace:n0,handleBranchPickerChange:G_,openRenameCurrentBranchForm:m0,closeRenameCurrentBranchForm:a0,handleRenameCurrentBranch:S0,handlePruneCurrentBranch:o0,handlePurgeArchivedBranch:c0,handleRestoreBranch:d0,handleCreateSessionFromCompose:r0,handleCreateRootSessionFromCompose:Q_,handlePopOutPane:t0,handlePopOutChat:l0}}w0();function G4(_){return _.status==="fulfilled"?_.value:null}function g8(_){return Math.max(0,Math.min(100,_))}function uN(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,G=$.filter((D)=>D?.data?.is_bot_message).length,Z=$.filter((D)=>!D?.data?.is_bot_message).length,X=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,Y=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,L=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,V=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,K=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,Q=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,q=_.modelsPayload?.current??_.activeModel??null,B=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,N=_.modelsPayload?.supports_thinking??_.supportsThinking,U=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),E=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:Y,branches:L},agent:{status:U,phase:E,running:Boolean(_.isAgentTurnActive)},model:{current:q,thinkingLevel:B,supportsThinking:Boolean(N)},context:{tokens:K,contextWindow:Q,percent:V},queue:{count:X},timeline:{loadedPosts:$.length,botPosts:G,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:g8(Math.round(V))},{key:"queue",label:"Queue",value:g8(X*18)},{key:"activeChats",label:"Active chats",value:g8(Y*12)},{key:"posts",label:"Timeline load",value:g8($.length*5)}]}}function gN(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function bN(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function vN(_,$){return{shouldBuildDashboard:_?.buildDashboard!==!1,nextRefreshCount:Number($||0)+1}}function mN(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function cN(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function lN(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function hN(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:G,getAgentStatus:Z,getAgentContext:X,getAgentQueueState:Y,getAgentModels:L,getActiveChatAgents:V,getChatBranches:K,getTimeline:Q,rawPosts:q,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:M,isAgentTurnActive:J}=_,[W,T,x,A,k,O,z]=await Promise.allSettled([Z(j),X(j),Y(j),L(j),V(),K(G),Q(20,null,j)]);return uN({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:G,statusPayload:G4(W),contextPayload:G4(T),queuePayload:G4(x),modelsPayload:G4(A),activeChatsPayload:G4(k),branchesPayload:G4(O),timelinePayload:G4(z),rawPosts:q,activeChatAgents:B,currentChatBranches:N,contextUsage:U,followupQueueItems:E,activeModel:D,activeThinkingLevel:H,supportsThinking:M,isAgentTurnActive:J})}function pN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,steerAgentQueueItem:V}=_,K=R6(j.current,$);if(!K)return;let{rowId:Q}=K;G.current.add(Q),Y((q)=>$4(q,Q).items),V(Q,Qj(Z)).then(()=>{X()}).catch((q)=>{console.warn("[queue] Failed to steer queued item:",q);let B=Aj("steer");L(B.title,B.detail,"warning"),G.current.delete(Q),X()})}function rN(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:Z,refreshQueueState:X,setFollowupQueueItems:Y,showIntentToast:L,clearQueuedSteerStateIfStale:V,removeAgentQueueItem:K}=_,Q=R6(j.current,$);if(!Q)return;let{rowId:q}=Q;G.current.add(q),V?.(Q.remainingQueueCount),Y((B)=>$4(B,q).items),K(q,Qj(Z)).then(()=>{X()}).catch((B)=>{console.warn("[queue] Failed to remove queued item:",B);let N=Aj("remove");L(N.title,N.detail,"warning"),G.current.delete(q),X()})}function nN(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:G}=_;if(!$||typeof $!=="object")return;let Z=O1($);if(Z)j.current.delete(Z);G(uQ($,new Date().toISOString()))}function dN(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((G)=>{let Z=gQ(G);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function iN(_){let{event:$,widget:j,currentChatJid:G,isComposeBoxAgentActive:Z,setFloatingWidget:X,handleCloseFloatingWidget:Y,handleMessageResponse:L,showIntentToast:V,sendAgentMessage:K,buildFloatingWidgetDashboardSnapshot:Q}=_,q=typeof $?.kind==="string"?$.kind:"",B=O1(j);if(!q||!B)return;if(q==="widget.close"){Y();return}if(q==="widget.submit"){let N=dL($?.payload),U=iL($?.payload),E=new Date().toISOString();if(X((D)=>mQ(D,B,{kind:q,payload:$?.payload||null,submittedAt:E,submissionText:N})),!N){if(V("Widget submission received","The widget submitted data without a message payload yet.","info",3500),U)Y();return}(async()=>{try{let D=await K("default",N,null,[],Z?"queue":null,G);L(D),X((M)=>Jj(M,B,{submittedAt:E,submissionText:N,queued:D?.queued||null}));let H=gN(D?.queued);if(V(H.title,H.detail,H.kind,H.durationMs),U)Y()}catch(D){X((M)=>Jj(M,B,{submittedAt:E,submissionText:N,errorMessage:D?.message||"Could not send the widget message."}));let H=bN(D?.message);V(H.title,H.detail,H.kind,H.durationMs)}})();return}if(q==="widget.ready"||q==="widget.request_refresh"){let N=new Date().toISOString(),U=vN($?.payload||null,j?.runtimeState?.refreshCount);if(X((E)=>cQ(E,B,{kind:q,payload:$?.payload||null,eventAt:N,nextRefreshCount:U.nextRefreshCount,shouldBuildDashboard:U.shouldBuildDashboard})),q==="widget.request_refresh")if(U.shouldBuildDashboard)(async()=>{try{let E=await Q($?.payload||null);X((H)=>lQ(H,B,{dashboard:E,at:new Date().toISOString(),count:U.nextRefreshCount,echo:$?.payload||null}));let D=mN();V(D.title,D.detail,D.kind,D.durationMs)}catch(E){X((H)=>hQ(H,B,{errorMessage:E?.message||"Could not build dashboard.",at:new Date().toISOString(),count:U.nextRefreshCount}));let D=cN(E?.message);V(D.title,D.detail,D.kind,D.durationMs)}})();else{let E=lN();V(E.title,E.detail,E.kind,E.durationMs)}}}function ck(_,$=pN){$(_)}function lk(_,$=rN){$(_)}function hk(_,$,j=PQ){j({response:_,refreshActiveChatAgents:$.refreshActiveChatAgents,refreshCurrentChatBranches:$.refreshCurrentChatBranches,refreshContextUsage:$.refreshContextUsage,refreshAutoresearchStatus:$.refreshAutoresearchStatus,refreshQueueState:$.refreshQueueState})}function oN(_){let{currentChatJid:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:K,refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,refreshContextUsage:B,refreshAutoresearchStatus:N}=_,U=P((M)=>{ck({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,steerAgentQueueItem:V,removeAgentQueueItem:K})},[$,G,j,Z,K,X,Y,V]),E=P((M)=>{lk({queuedItem:M,followupQueueItemsRef:j,dismissedQueueRowIdsRef:G,currentChatJid:$,refreshQueueState:Z,setFollowupQueueItems:X,showIntentToast:Y,clearQueuedSteerStateIfStale:L,steerAgentQueueItem:V,removeAgentQueueItem:K})},[L,$,G,j,Z,K,X,Y,V]),D=P(async(M,J)=>{X((W)=>{if(!Array.isArray(W)||M<0||J<0||M>=W.length||J>=W.length||M===J)return W;let T=[...W],[x]=T.splice(M,1);return T.splice(J,0,x),T});try{let{reorderAgentQueueItem:W}=await Promise.resolve().then(() => (P_(),N5));await W(M,J,$)}catch(W){console.warn("Failed to persist queue reorder:",W),Z()}},[$,Z,X]),H=P((M)=>{hk(M,{refreshActiveChatAgents:Q,refreshCurrentChatBranches:q,refreshContextUsage:B,refreshAutoresearchStatus:N,refreshQueueState:Z})},[Q,N,B,q,Z]);return{handleInjectQueuedFollowup:U,handleRemoveQueuedFollowup:E,handleMoveQueuedFollowup:D,handleMessageResponse:H}}w0();function sN(_){let{btwAbortRef:$,setBtwSession:j}=_;if($.current)$.current.abort(),$.current=null;j(null)}async function aN(_){let{question:$,currentChatJid:j,streamSidePrompt:G,resolveBtwChatJid:Z,showIntentToast:X,btwAbortRef:Y,setBtwSession:L}=_,V=String($||"").trim();if(!V)return X("BTW needs a question","Usage: /btw <question>","warning"),!0;if(Y.current)Y.current.abort();let K=new AbortController;Y.current=K,L({question:V,answer:"",thinking:"",error:null,model:null,status:"running"});try{let Q=await G(V,{signal:K.signal,chatJid:Z(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(q)=>{if(q==="side_prompt_start")L((B)=>B?{...B,status:"running"}:B)},onThinkingDelta:(q)=>{L((B)=>B?{...B,thinking:`${B.thinking||""}${q||""}`}:B)},onTextDelta:(q)=>{L((B)=>B?{...B,answer:`${B.answer||""}${q||""}`}:B)}});if(Y.current!==K)return!0;L((q)=>q?{...q,answer:Q?.result||q.answer||"",thinking:Q?.thinking||q.thinking||"",model:Q?.model||null,status:"success",error:null}:q)}catch(Q){if(K.signal.aborted)return!0;L((q)=>q?{...q,status:"error",error:Q?.payload?.error||Q?.message||"BTW request failed."}:q)}finally{if(Y.current===K)Y.current=null}return!0}async function tN(_){let{content:$,parseBtwCommand:j,closeBtwPanel:G,runBtwPrompt:Z,showIntentToast:X}=_,Y=j($);if(!Y)return!1;if(Y.type==="help")return X("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(Y.type==="clear")return G(),X("BTW cleared","Closed the side conversation panel.","info"),!0;if(Y.type==="ask")return await Z(Y.question),!0;return!1}async function eN(_){let{btwSession:$,buildBtwInjectionText:j,isComposeBoxAgentActive:G,currentChatJid:Z,sendAgentMessage:X,handleMessageResponse:Y,showIntentToast:L}=_,V=j($);if(!V)return!1;try{let K=await X("default",V,null,[],G?"queue":null,Z);return Y(K),L(K?.queued==="followup"?"BTW queued":"BTW injected",K?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500),!0}catch(K){return L("BTW inject failed",K?.message||"Could not inject BTW answer into chat.","warning"),!1}}async function pk(_){let $=typeof _==="string"?_:"";if(!$)return!1;let j=null;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch(G){j=G}try{let G=document.createElement("textarea");G.value=$,G.setAttribute("readonly",""),G.style.position="fixed",G.style.opacity="0",G.style.pointerEvents="none",document.body.appendChild(G),G.select(),G.setSelectionRange(0,G.value.length);let Z=document.execCommand("copy");return document.body.removeChild(G),Z}catch(G){return console.debug("[sidepanel] Clipboard copy failed after falling back from navigator.clipboard.",G,{clipboardApiAvailable:Boolean(navigator.clipboard?.writeText),clipboardApiError:j}),!1}}function rk(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;$.current.clear(),j(null)}function _B(_){let{currentChatJid:$,currentRootChatJid:j,isComposeBoxAgentActive:G,showIntentToast:Z,setPendingExtensionPanelActions:X,refreshAutoresearchStatus:Y,stopAutoresearch:L,dismissAutoresearch:V,streamSidePrompt:K,btwAbortRef:Q,btwSession:q,setBtwSession:B,sendAgentMessage:N,handleMessageResponse:U,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D,getAgentStatus:H,getAgentContext:M,getAgentQueueState:J,getAgentModels:W,getActiveChatAgents:T,getChatBranches:x,getTimeline:A,rawPosts:k,activeChatAgents:O,currentChatBranches:z,contextUsage:y,followupQueueItemsRef:I,activeModel:R,activeThinkingLevel:f,supportsThinking:v,isAgentTurnActive:l}=_,h=P(async(Y0,Q0)=>{let J0=typeof Y0?.key==="string"?Y0.key:"",s=typeof Q0?.key==="string"?Q0.key:"",j0=zj(J0,s);if(!J0||!s)return;X((z0)=>_Q(z0,J0,s));try{let z0=await jQ({panel:Y0,action:Q0,currentChatJid:$,stopAutoresearch:L,dismissAutoresearch:V,writeClipboard:async(C0)=>{if(!await pk(C0))throw Error("Clipboard access is unavailable.")}});if(z0.refreshAutoresearchStatus)Y();if(z0.toast)Z(z0.toast.title,z0.toast.detail,z0.toast.kind,z0.toast.durationMs)}catch(z0){Z("Panel action failed",z0?.message||"Could not complete that action.","warning")}finally{X((z0)=>$Q(z0,j0))}},[$,V,Y,X,Z,L]),n=P(()=>{sN({btwAbortRef:Q,setBtwSession:B})},[Q,B]),b=P(async(Y0)=>{return await aN({question:Y0,currentChatJid:$,streamSidePrompt:K,resolveBtwChatJid:SL,showIntentToast:Z,btwAbortRef:Q,setBtwSession:B})},[Q,$,B,Z,K]),$0=P(async({content:Y0})=>{return await tN({content:Y0,parseBtwCommand:RL,closeBtwPanel:n,runBtwPrompt:b,showIntentToast:Z})},[n,b,Z]),E0=P(()=>{if(q?.question)b(q.question)},[q,b]),V0=P(async()=>{await eN({btwSession:q,buildBtwInjectionText:bL,isComposeBoxAgentActive:G,currentChatJid:$,sendAgentMessage:N,handleMessageResponse:U,showIntentToast:Z})},[q,$,U,G,N,Z]),K0=P(async(Y0=null)=>{return hN({requestPayload:Y0,currentChatJid:$,currentRootChatJid:j,getAgentStatus:H,getAgentContext:M,getAgentQueueState:J,getAgentModels:W,getActiveChatAgents:T,getChatBranches:x,getTimeline:A,rawPosts:k,activeChatAgents:O,currentChatBranches:z,contextUsage:y,followupQueueItems:I.current,activeModel:R,activeThinkingLevel:f,supportsThinking:v,isAgentTurnActive:l})},[O,R,f,y,z,$,j,I,T,M,W,J,H,x,A,l,k,v]),X0=P((Y0)=>{nN({widget:Y0,dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),F0=P(()=>{dN({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[E,D]),_0=P((Y0,Q0)=>{iN({event:Y0,widget:Q0,currentChatJid:$,isComposeBoxAgentActive:G,setFloatingWidget:D,handleCloseFloatingWidget:F0,handleMessageResponse:U,showIntentToast:Z,sendAgentMessage:N,buildFloatingWidgetDashboardSnapshot:K0})},[K0,$,F0,U,G,N,D,Z]);return u(()=>{rk({dismissedLiveWidgetKeysRef:E,setFloatingWidget:D})},[$,E,D]),{handleExtensionPanelAction:h,closeBtwPanel:n,handleBtwIntercept:$0,handleBtwRetry:E0,handleBtwInject:V0,handleOpenFloatingWidget:X0,handleCloseFloatingWidget:F0,handleFloatingWidgetEvent:_0}}w0();function nk(_){let{hasDockPanes:$,chatOnlyMode:j}=_;return Boolean($&&!j)}function dk(_){return!_}function $B(_){let{hasDockPanes:$,chatOnlyMode:j,toggleDock:G,toggleZenMode:Z,exitZenMode:X,zenMode:Y,previousChat:L,nextChat:V}=_;u(()=>{if(!nk({hasDockPanes:$,chatOnlyMode:j}))return;return BN(G)},[j,$,G]),u(()=>{if(!dk(j))return;return FN({toggleZenMode:Z,exitZenMode:X,zenMode:Y,isZenModeActive:()=>Y})},[j,X,Z,Y]),u(()=>{if(typeof L!=="function"&&typeof V!=="function")return;return UN({previousChat:L,nextChat:V})},[V,L]),u(()=>EN(),[]),u(()=>HN(),[])}function ik(_){return Boolean(_&&typeof _.closest==="function")}function jB(_=typeof window<"u"?window:null){if(!_||typeof _.getSelection!=="function")return!1;try{let $=_.getSelection();if(!$||$.isCollapsed)return!1;return String($.toString()||"").trim().length>0}catch{return!1}}function ok(){return{active:!1,horizontalLocked:!1,cancelled:!1,startX:0,startY:0,lastX:0,lastY:0,startedAt:0}}function sk(){return{lastTriggeredAt:0,accumX:0}}function Mj(_){if(!_)return;_.active=!1,_.horizontalLocked=!1,_.cancelled=!1,_.startX=0,_.startY=0,_.lastX=0,_.lastY=0,_.startedAt=0}var ak=["input","textarea","select","button","label","a[href]",'[contenteditable="true"]','[role="button"]',"[data-no-chat-swipe]",".compose-box",".compose-model-popup",".compose-session-popup",".workspace-explorer",".editor-pane-container",".dock-panel",".terminal-pane-content",".attachment-preview-modal",".rename-branch-overlay",".agent-request-modal",".adaptive-card-container",".adaptive-card-container input",".adaptive-card-container textarea",".adaptive-card-container select",".adaptive-card-container button"].join(", "),tk=[".agent-thinking",".agent-status-panel",".agent-thinking-intent"].join(", ");function GB(_){if(!_||!ik(_))return!1;let $=_.closest(ak);if(!$)return!0;return Boolean($.closest(tk))}function XB(_,$){if(!Array.isArray(_))return $?[$]:[];let j=new Set,G=_.filter((X)=>Boolean(X&&typeof X==="object")).filter((X)=>{let Y=typeof X.chat_jid==="string"?X.chat_jid.trim():"";if(!Y||j.has(Y))return!1;if(X.archived_at)return!1;return j.add(Y),!0});G.sort((X,Y)=>{if(Boolean(X.is_active)!==Boolean(Y.is_active))return X.is_active?-1:1;return String(X.chat_jid).localeCompare(String(Y.chat_jid))});let Z=G.map((X)=>String(X.chat_jid).trim());if($&&!j.has($))Z.unshift($);return Z}function wj(_){let $=XB(_.candidates,_.currentChatJid);if($.length<=1)return null;let j=$.indexOf(_.currentChatJid);if(j<0)return $[0]??null;let G=_.direction==="next"?(j+1)%$.length:(j-1+$.length)%$.length;return $[G]??null}function ZB(_,$){let j=_.find((Z)=>Z.chat_jid===$);if(!j)return $.replace(/^[^:]+:/,"");return(typeof j.agent_name==="string"?j.agent_name.trim():"")||$.replace(/^[^:]+:/,"")}function ek(_){let $=XB(_.candidates,_.currentChatJid);if($.length<=1)return{prev:null,next:null};let j=$.indexOf(_.currentChatJid);if(j<0)return{prev:null,next:null};let G=$[(j-1+$.length)%$.length],Z=$[(j+1)%$.length];return{prev:{chatJid:G,name:ZB(_.candidates,G)},next:{chatJid:Z,name:ZB(_.candidates,Z)}}}function _y(_){let $=Number.isFinite(_.minDistancePx)?Number(_.minDistancePx):72,j=Number.isFinite(_.axisRatio)?Number(_.axisRatio):1.35;return Math.abs(_.dx)>=$&&Math.abs(_.dx)>Math.abs(_.dy)*j}function $y(_){let $=document.querySelector(".chat-swipe-indicator");if(!$)$=document.createElement("div"),$.className="chat-swipe-indicator",$.innerHTML='<span class="chat-swipe-chevron"></span><span class="chat-swipe-name"></span>',document.body.appendChild($);return $}function jy(_,$,j,G){let Z=Math.abs($),X=Math.min(Z/100,1),Y=Z>=72;_.style.display="flex",_.style.opacity=String(Math.min(X*2.5,1)),_.classList.toggle("chat-swipe-indicator--ready",Y);let L=$<0,V=L?G.next:G.prev,K=_.querySelector(".chat-swipe-chevron");if(K)K.textContent=L?"›":"‹",K.style.order=L?"2":"0";let Q=_.querySelector(".chat-swipe-name");if(Q)Q.textContent=V?.name??""}function R5(_){_.style.display="none",_.style.opacity="0"}function YB(_){let{timelineRef:$,activeChatAgents:j,currentChatJid:G,onSwitch:Z,isIOSDevice:X,isLikelySafari:Y}=_,L=$.current;if(!L)return()=>{};let V=X(),K=typeof Y==="function"?Y():!1;if(!V&&!K)return()=>{};let Q=ok(),q=sk(),B=null,N={prev:null,next:null},U=!1;function E(){N=ek({candidates:j,currentChatJid:G})}E();function D(){if(!B)B=$y(L);return B}function H(k){let O=k==="next"?N.next:N.prev;if(O)Z(O.chatJid)}function M(k){U=String(k.pointerType||"").toLowerCase()==="pen"}function J(k){if(Mj(Q),E(),!V)return;if(k.touches.length!==1)return;if(U)return;if(jB())return;if(!GB(k.target))return;let O=k.touches[0];Q.active=!0,Q.startX=O.clientX,Q.startY=O.clientY,Q.lastX=O.clientX,Q.lastY=O.clientY,Q.startedAt=Date.now()}function W(k){if(!Q.active||Q.cancelled)return;if(jB()){Q.cancelled=!0,R5(D());return}let O=k.touches[0];if(!O)return;Q.lastX=O.clientX,Q.lastY=O.clientY;let z=Q.lastX-Q.startX,y=Q.lastY-Q.startY;if(!Q.horizontalLocked){if(Math.abs(y)>16&&Math.abs(y)>=Math.abs(z)){Q.cancelled=!0,R5(D());return}if(Math.abs(z)>12&&Math.abs(z)>Math.abs(y)*1.15)Q.horizontalLocked=!0}if(Q.horizontalLocked){if(k.cancelable)k.preventDefault();jy(D(),z,L.clientWidth,N)}}function T(){if(!Q.active)return;let k=Q.lastX-Q.startX,O=Q.lastY-Q.startY,z=!Q.cancelled&&_y({dx:k,dy:O});if(R5(D()),Mj(Q),z)H(k<0?"next":"prev")}function x(){R5(D()),Mj(Q)}function A(k){if(V)return;if(!K)return;if(!GB(k.target))return;let{deltaX:O,deltaY:z}=k;if(!Number.isFinite(O)||Math.abs(O)<72)return;if(Math.abs(O)<=Math.abs(z)*1.35)return;if(k.cancelable)k.preventDefault();let y=Date.now();if(y-q.lastTriggeredAt<450)return;q.lastTriggeredAt=y,H(O>0?"next":"prev")}return L.addEventListener("pointerdown",M,{passive:!0}),L.addEventListener("touchstart",J,{passive:!0}),L.addEventListener("touchmove",W,{passive:!1}),L.addEventListener("touchend",T,{passive:!0}),L.addEventListener("touchcancel",x,{passive:!0}),L.addEventListener("wheel",A,{passive:!1}),()=>{if(L.removeEventListener("pointerdown",M),L.removeEventListener("touchstart",J),L.removeEventListener("touchmove",W),L.removeEventListener("touchend",T),L.removeEventListener("touchcancel",x),L.removeEventListener("wheel",A),B)R5(B),B.remove(),B=null}}function Gy(_){return{currentChatJid:_.currentChatJid,followupQueueItemsRef:_.followupQueueItemsRef,dismissedQueueRowIdsRef:_.dismissedQueueRowIdsRef,refreshQueueState:_.refreshQueueState,setFollowupQueueItems:_.setFollowupQueueItems,showIntentToast:_.showIntentToast,clearQueuedSteerStateIfStale:_.clearQueuedSteerStateIfStale,steerAgentQueueItem:_.steerAgentQueueItem,removeAgentQueueItem:_.removeAgentQueueItem,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,refreshContextUsage:_.refreshContextUsage,refreshAutoresearchStatus:_.refreshAutoresearchStatus}}function Zy(_){return{currentChatJid:_.currentChatJid,currentRootChatJid:_.currentRootChatJid,isComposeBoxAgentActive:_.isComposeBoxAgentActive,showIntentToast:_.showIntentToast,setPendingExtensionPanelActions:_.setPendingExtensionPanelActions,refreshAutoresearchStatus:_.refreshAutoresearchStatus,stopAutoresearch:_.stopAutoresearch,dismissAutoresearch:_.dismissAutoresearch,streamSidePrompt:_.streamSidePrompt,btwAbortRef:_.btwAbortRef,btwSession:_.btwSession,setBtwSession:_.setBtwSession,sendAgentMessage:_.sendAgentMessage,handleMessageResponse:_.handleMessageResponse,dismissedLiveWidgetKeysRef:_.dismissedLiveWidgetKeysRef,setFloatingWidget:_.setFloatingWidget,getAgentStatus:_.getAgentStatus,getAgentContext:_.getAgentContext,getAgentQueueState:_.getAgentQueueState,getAgentModels:_.getAgentModels,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,getTimeline:_.getTimeline,rawPosts:_.rawPosts,activeChatAgents:_.activeChatAgents,currentChatBranches:_.currentChatBranches,contextUsage:_.contextUsage,followupQueueItemsRef:_.followupQueueItemsRef,activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:_.supportsThinking,isAgentTurnActive:_.isAgentTurnActive}}function Xy(_){return{setWorkspaceOpen:_.setWorkspaceOpen,currentChatJid:_.currentChatJid,chatOnlyMode:_.chatOnlyMode,navigate:_.navigate,currentBranchRecord:_.currentBranchRecord,renameBranchInFlightRef:_.renameBranchInFlightRef,renameBranchLockUntilRef:_.renameBranchLockUntilRef,getFormLock:_.getFormLock,setRenameBranchNameDraft:_.setRenameBranchNameDraft,setIsRenameBranchFormOpen:_.setIsRenameBranchFormOpen,setIsRenamingBranch:_.setIsRenamingBranch,renameChatBranch:_.renameChatBranch,refreshActiveChatAgents:_.refreshActiveChatAgents,refreshCurrentChatBranches:_.refreshCurrentChatBranches,showIntentToast:_.showIntentToast,currentChatBranches:_.currentChatBranches,activeChatAgents:_.activeChatAgents,pruneChatBranch:_.pruneChatBranch,purgeChatBranch:_.purgeChatBranch,restoreChatBranch:_.restoreChatBranch,branchLoaderMode:_.branchLoaderMode,branchLoaderSourceChatJid:_.branchLoaderSourceChatJid,forkChatBranch:_.forkChatBranch,createRootChatSession:_.createRootChatSession,setBranchLoaderState:_.setBranchLoaderState,currentRootChatJid:_.currentRootChatJid,isWebAppMode:_.isWebAppMode,getActiveChatAgents:_.getActiveChatAgents,getChatBranches:_.getChatBranches,setActiveChatAgents:_.setActiveChatAgents,setCurrentChatBranches:_.setCurrentChatBranches,openEditor:_.openEditor,activateTab:_.activateTab,tabStripActiveId:_.tabStripActiveId,editorInstanceRef:_.editorInstanceRef,dockInstanceRef:_.dockInstanceRef,terminalTabPath:_.terminalTabPath,tabPaneOverrides:_.tabPaneOverrides,buildPaneDetachTransfer:_.buildPaneDetachTransfer,registerDetachedPaneWindow:_.registerDetachedPaneWindow,dockVisible:_.dockVisible,resolveTab:_.resolveTab,closeTab:_.closeTab,setDockVisible:_.setDockVisible,editorOpen:_.editorOpen,shellElement:_.shellElement,editorWidthRef:_.editorWidthRef,dockHeightRef:_.dockHeightRef,sidebarWidthRef:_.sidebarWidthRef,readStoredNumber:_.readStoredNumber}}function Yy(_){return{hasDockPanes:_.hasDockPanes,chatOnlyMode:_.chatOnlyMode,toggleDock:_.toggleDock,toggleZenMode:_.toggleZenMode,exitZenMode:_.exitZenMode,zenMode:_.zenMode,previousChat:()=>{let $=wj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"prev"});if($)_.handleBranchPickerChange?.($)},nextChat:()=>{let $=wj({candidates:_.activeChatAgents,currentChatJid:_.currentChatJid,direction:"next"});if($)_.handleBranchPickerChange?.($)}}}function LB(_){let $=oN(Gy(_)),j=_B(Zy({..._,handleMessageResponse:$.handleMessageResponse})),G=SN(Xy(_));return $B(Yy({..._,handleBranchPickerChange:G.handleBranchPickerChange})),{followupActions:$,sidepanelActions:j,branchPaneActions:G}}function Ly(_,$){return Boolean(_||$!==null)}function Ky(_){return{..._.agentStatusLifecycleBundle,..._.actionBundle,timelineViewActions:_.timelineViewActions,isComposeBoxAgentActive:_.isComposeBoxAgentActive}}function Vy(_,$){let{routeState:j,searchState:G,shellState:Z,timeline:X,interaction:Y,paneRuntime:L,refs:V,setters:K,services:Q,helpers:q}=_;return{currentChatJid:j.currentChatJid,activeChatJidRef:V.activeChatJidRef,queueRefreshGenRef:V.queueRefreshGenRef,dismissedQueueRowIdsRef:V.dismissedQueueRowIdsRef,getAgentQueueState:Q.getAgentQueueState,setFollowupQueueItems:K.setFollowupQueueItems,clearQueuedSteerStateIfStale:Y.clearQueuedSteerStateIfStale,getAgentContext:Q.getAgentContext,setContextUsage:K.setContextUsage,getAutoresearchStatus:Q.getAutoresearchStatus,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,getAgentStatus:Q.getAgentStatus,wasAgentActiveRef:V.wasAgentActiveRef,viewStateRef:V.viewStateRef,refreshTimeline:X.refreshTimeline,clearAgentRunState:Y.clearAgentRunState,agentStatusRef:V.agentStatusRef,pendingRequestRef:V.pendingRequestRef,thoughtBufferRef:V.thoughtBufferRef,draftBufferRef:V.draftBufferRef,previewResyncPendingRef:V.previewResyncPendingRef,previewResyncGenerationRef:V.previewResyncGenerationRef,setAgentStatus:K.setAgentStatus,setAgentDraft:K.setAgentDraft,setAgentPlan:K.setAgentPlan,setAgentThought:K.setAgentThought,setPendingRequest:K.setPendingRequest,setActiveTurn:Y.setActiveTurn,noteAgentActivity:Y.noteAgentActivity,showLastActivity:Y.showLastActivity,clearLastActivityFlag:Y.clearLastActivityFlag,isAgentRunningRef:V.isAgentRunningRef,currentTurnIdRef:V.currentTurnIdRef,silentRecoveryRef:V.silentRecoveryRef,silenceRefreshMs:Q.silenceRefreshMs,lastAgentEventRef:V.lastAgentEventRef,lastSilenceNoticeRef:V.lastSilenceNoticeRef,silenceWarningMs:Q.silenceWarningMs,silenceFinalizeMs:Q.silenceFinalizeMs,isCompactionStatus:Q.isCompactionStatus,serverVersionContext:{currentAppAssetVersion:Q.currentAppAssetVersion,staleUiVersionRef:V.staleUiVersionRef,staleUiReloadScheduledRef:V.staleUiReloadScheduledRef,tabStoreHasUnsaved:Q.tabStoreHasUnsaved,isAgentRunningRef:V.isAgentRunningRef,pendingRequestRef:V.pendingRequestRef,showIntentToast:$},setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,hasConnectedOnceRef:V.hasConnectedOnceRef,getAgents:Q.getAgents,setAgents:K.setAgents,setUserProfile:K.setUserProfile,applyBranding:Y.applyBranding,readStoredNumber:q.readStoredNumber,sidebarWidthRef:V.sidebarWidthRef,appShellRef:V.appShellRef,currentRootChatJid:j.currentRootChatJid,getAgentModels:Q.getAgentModels,getActiveChatAgents:Q.getActiveChatAgents,getChatBranches:Q.getChatBranches,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,agentsRef:V.agentsRef,currentHashtag:G.currentHashtag,searchQuery:G.searchQuery,searchScope:G.searchScope,loadPosts:X.loadPosts,searchPosts:Q.searchPosts,setPosts:X.setPosts,setHasMore:X.setHasMore,scrollToBottom:X.scrollToBottom,paneStateOwnerChatJidRef:V.paneStateOwnerChatJidRef,chatPaneStateByChatRef:V.chatPaneStateByChatRef,snapshotCurrentChatPaneState:Y.snapshotCurrentChatPaneState,restoreChatPaneState:Y.restoreChatPaneState,setFloatingWidget:K.setFloatingWidget,dismissedLiveWidgetKeysRef:V.dismissedLiveWidgetKeysRef,posts:X.posts,scrollToMessage:Y.composeReferenceActions.scrollToMessage,draftThrottleRef:V.draftThrottleRef,thoughtThrottleRef:V.thoughtThrottleRef,followupQueueItemsRef:V.followupQueueItemsRef,scrollToBottomRef:X.scrollToBottomRef,hasMoreRef:X.hasMoreRef,loadMoreRef:X.loadMoreRef,lastAgentResponseRef:V.lastAgentResponseRef,notifyForFinalResponse:Y.notifyForFinalResponse,setSteerQueuedTurnId:K.setSteerQueuedTurnId,refreshActiveEditorFromWorkspace:L.refreshActiveEditorFromWorkspace,showIntentToast:$,removeStalledPost:Y.recoveryCallbacks.removeStalledPost,preserveTimelineScrollTop:X.preserveTimelineScrollTop,finalizeStalledResponse:()=>{K.setExtensionWorkingState({message:null,indicator:null,visible:!0}),Y.recoveryCallbacks.finalizeStalledResponse()},connectionStatus:Z.connectionStatus,agentStatus:Q.agentStatus,thoughtExpandedRef:V.thoughtExpandedRef,draftExpandedRef:V.draftExpandedRef,steerQueuedTurnIdRef:V.steerQueuedTurnIdRef}}function KB(_){let{routeState:$,searchState:j,shellState:G,timeline:Z,interaction:X,paneRuntime:Y,refs:L,setters:V,services:K,helpers:Q}=_,q=X.composeReferenceActions.showIntentToast,B=sq({currentHashtag:j.currentHashtag,searchQuery:j.searchQuery,searchOpen:j.searchOpen,searchScope:j.searchScope,currentChatJid:$.currentChatJid,currentRootChatJid:$.currentRootChatJid,posts:Z.posts,loadPosts:Z.loadPosts,searchPosts:K.searchPosts,setCurrentHashtag:j.setCurrentHashtag,setSearchQuery:j.setSearchQuery,setSearchOpen:j.setSearchOpen,setSearchScope:j.setSearchScope,setPosts:Z.setPosts,setHasMore:Z.setHasMore,preserveTimelineScrollTop:Z.preserveTimelineScrollTop,setRemovingPostIds:V.setRemovingPostIds,deletePost:K.deletePost,hasMoreRef:Z.hasMoreRef,loadMoreRef:Z.loadMoreRef}),N=ZN(Vy(_,q)),U=Ly(K.isAgentTurnActive,K.agentStatus),E=LB({currentChatJid:$.currentChatJid,followupQueueItemsRef:L.followupQueueItemsRef,dismissedQueueRowIdsRef:L.dismissedQueueRowIdsRef,setFollowupQueueItems:V.setFollowupQueueItems,showIntentToast:q,clearQueuedSteerStateIfStale:X.clearQueuedSteerStateIfStale,steerAgentQueueItem:K.steerAgentQueueItem,removeAgentQueueItem:K.removeAgentQueueItem,refreshQueueState:N.agentStatusLifecycle.refreshQueueState,refreshActiveChatAgents:N.chatRefreshLifecycle.refreshActiveChatAgents,refreshCurrentChatBranches:N.chatRefreshLifecycle.refreshCurrentChatBranches,refreshContextUsage:N.agentStatusLifecycle.refreshContextUsage,refreshAutoresearchStatus:N.agentStatusLifecycle.refreshAutoresearchStatus,currentRootChatJid:$.currentRootChatJid,isComposeBoxAgentActive:U,setPendingExtensionPanelActions:V.setPendingExtensionPanelActions,stopAutoresearch:K.stopAutoresearch,dismissAutoresearch:K.dismissAutoresearch,streamSidePrompt:K.streamSidePrompt,btwAbortRef:L.btwAbortRef,btwSession:G.btwSession,setBtwSession:V.setBtwSession,sendAgentMessage:K.sendAgentMessage,dismissedLiveWidgetKeysRef:L.dismissedLiveWidgetKeysRef,setFloatingWidget:V.setFloatingWidget,getAgentStatus:K.getAgentStatus,getAgentContext:K.getAgentContext,getAgentQueueState:K.getAgentQueueState,getAgentModels:K.getAgentModels,getActiveChatAgents:K.getActiveChatAgents,getChatBranches:K.getChatBranches,getTimeline:K.getTimeline,rawPosts:Z.rawPosts,activeChatAgents:G.activeChatAgents,currentChatBranches:G.currentChatBranches,contextUsage:G.contextUsage,activeModel:G.activeModel,activeThinkingLevel:G.activeThinkingLevel,supportsThinking:G.supportsThinking,isAgentTurnActive:K.isAgentTurnActive,chatOnlyMode:$.chatOnlyMode,navigate:$.navigate,setWorkspaceOpen:G.setWorkspaceOpen,currentBranchRecord:G.currentBranchRecord,renameBranchInFlightRef:L.renameBranchInFlightRef,renameBranchLockUntilRef:L.renameBranchLockUntilRef,getFormLock:Q.getFormLock,setRenameBranchNameDraft:V.setRenameBranchNameDraft,setIsRenameBranchFormOpen:V.setIsRenameBranchFormOpen,setIsRenamingBranch:V.setIsRenamingBranch,renameChatBranch:K.renameChatBranch,pruneChatBranch:K.pruneChatBranch,purgeChatBranch:K.purgeChatBranch,restoreChatBranch:K.restoreChatBranch,branchLoaderMode:$.branchLoaderMode,branchLoaderSourceChatJid:$.branchLoaderSourceChatJid,forkChatBranch:K.forkChatBranch,createRootChatSession:K.createRootChatSession,setBranchLoaderState:V.setBranchLoaderState,isWebAppMode:$.isWebAppMode,setActiveChatAgents:V.setActiveChatAgents,setCurrentChatBranches:V.setCurrentChatBranches,openEditor:K.openEditor,tabStripActiveId:K.tabStripActiveId,editorInstanceRef:Y.editorInstanceRef,dockInstanceRef:Y.dockInstanceRef,terminalTabPath:K.terminalTabPath,tabPaneOverrides:K.tabPaneOverrides,buildPaneDetachTransfer:Y.buildPaneDetachTransfer,registerDetachedPaneWindow:Y.registerDetachedPaneWindow,dockVisible:Y.dockVisible,resolveTab:K.resolveTab,closeTab:K.closeTab,setDockVisible:Y.setDockVisible,editorOpen:K.editorOpen,shellElement:L.appShellRef.current,editorWidthRef:L.editorWidthRef,dockHeightRef:L.dockHeightRef,sidebarWidthRef:L.sidebarWidthRef,readStoredNumber:Q.readStoredNumber,hasDockPanes:Y.hasDockPanes,toggleDock:Y.toggleDock,toggleZenMode:Y.toggleZenMode,exitZenMode:Y.exitZenMode,zenMode:Y.zenMode});return Ky({agentStatusLifecycleBundle:N,actionBundle:E,timelineViewActions:B,isComposeBoxAgentActive:U})}w0();P_();w0();function VB(_){try{return _?.focus?.(),!0}catch($){return!1}}function S5(_,$){if(!_||!$)return null;try{return _.getItem($)}catch{return null}}function Tj(_,$,j){if(!_||!$)return;try{_.setItem($,j)}catch{return}}function qB(_,$){if(!_||!$)return;try{_.removeItem($)}catch{return}}function QB(_="piclaw"){try{if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${_}-${crypto.randomUUID()}`}catch($){console.debug("[notification-delivery-coordinator] crypto.randomUUID threw; falling back to Math.random-based id.",$)}return`${_}-${Math.random().toString(36).slice(2)}-${Date.now().toString(36)}`}function Z4(_=typeof window<"u"?window:null){let $=_?.localStorage,j=S5($,"piclaw.notifications.deviceId");if(j)return j;let G=QB("device");return Tj($,"piclaw.notifications.deviceId",G),S5($,"piclaw.notifications.deviceId")||G}function u5(_=typeof window<"u"?window:null){let $=_?.sessionStorage,j=S5($,"piclaw.notifications.clientId");if(j)return j;let G=_?.__PICLAW_NOTIFICATION_CLIENT_ID__;if(typeof G==="string"&&G.trim())return G.trim();let Z=QB("client");if(Tj($,"piclaw.notifications.clientId",Z),_)_.__PICLAW_NOTIFICATION_CLIENT_ID__=S5($,"piclaw.notifications.clientId")||Z;return _?.__PICLAW_NOTIFICATION_CLIENT_ID__||Z}function NB(_,$){return`piclaw.notifications.presence.${String(_||"").trim()}:${String($||"").trim()}`}function xj(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=_.runtimeDocument??(typeof document<"u"?document:null),G=typeof _.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"",Z=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),X=typeof _.clientId==="string"&&_.clientId.trim()?_.clientId.trim():u5($),Y=Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now(),L=Boolean(typeof j?.hasFocus==="function"?j.hasFocus():!0),K=String(j?.visibilityState||"").trim().toLowerCase()==="hidden"?"hidden":"visible";return{deviceId:Z,clientId:X,chatJid:G,visibilityState:K,hasFocus:L,updatedAtMs:Y}}function BB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"",X=typeof _?.chatJid==="string"?_.chatJid.trim():"";if(!j||!G||!Z||!X)return!1;return Tj(j,NB(G,Z),JSON.stringify({deviceId:G,clientId:Z,chatJid:X,visibilityState:_.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(_.hasFocus),updatedAtMs:Number.isFinite(_.updatedAtMs)?Number(_.updatedAtMs):Date.now()})),!0}function FB(_,$=typeof window<"u"?window:null){let j=$?.localStorage,G=typeof _?.deviceId==="string"?_.deviceId.trim():"",Z=typeof _?.clientId==="string"?_.clientId.trim():"";if(!j||!G||!Z)return!1;return qB(j,NB(G,Z)),!0}function qy(_={}){let $=_.runtimeWindow??(typeof window<"u"?window:null),j=$?.localStorage,G=typeof _.deviceId==="string"&&_.deviceId.trim()?_.deviceId.trim():Z4($),Z=Number.isFinite(_.nowMs)?Number(_.nowMs):Date.now(),X=Number.isFinite(_.ttlMs)?Number(_.ttlMs):120000;if(!j||!G)return[];let Y=`piclaw.notifications.presence.${G}:`,L=[],V=[];for(let K=0;K<j.length;K+=1){let Q=j.key(K);if(!Q||!Q.startsWith(Y))continue;let q=S5(j,Q);if(!q){V.push(Q);continue}try{let B=JSON.parse(q),N=Number(B?.updatedAtMs);if(!Number.isFinite(N)||Z-N>X){V.push(Q);continue}let U=typeof B?.chatJid==="string"?B.chatJid.trim():"",E=typeof B?.clientId==="string"?B.clientId.trim():"";if(!U||!E){V.push(Q);continue}L.push({deviceId:G,clientId:E,chatJid:U,visibilityState:B?.visibilityState==="hidden"?"hidden":"visible",hasFocus:Boolean(B?.hasFocus),updatedAtMs:N})}catch{V.push(Q)}}return V.forEach((K)=>qB(j,K)),L.sort((K,Q)=>K.clientId.localeCompare(Q.clientId))}function UB(_={}){let $=xj(_),j=$.chatJid;if(!j)return!1;let G=qy({runtimeWindow:_.runtimeWindow,deviceId:$.deviceId,nowMs:$.updatedAtMs,ttlMs:_.ttlMs}).filter((Y)=>Y.chatJid===j&&Y.clientId!==$.clientId),Z=[$,...G];if(Z.some((Y)=>Y.visibilityState==="visible"))return!1;let X=[...Z].sort((Y,L)=>Y.clientId.localeCompare(L.clientId))[0]||null;return Boolean(X&&X.clientId===$.clientId)}function Qy(_=typeof window<"u"?window:null){return Boolean(_?.__PICLAW_NOTIFICATION_SOURCE_LABELS_ENABLED__)}function Ny(_,$="",j=typeof window<"u"?window:null){let G=typeof _==="string"&&_.trim()?_.trim():"PiClaw",Z=Qy(j)&&typeof $==="string"?$.trim():"";return Z?`${G} [${Z}]`:G}function By(_){let $=String(_||"").replace(/-/g,"+").replace(/_/g,"/"),j=$.padEnd(Math.ceil($.length/4)*4,"="),G=atob(j),Z=new Uint8Array(G.length);for(let X=0;X<G.length;X+=1)Z[X]=G.charCodeAt(X);return Z}function b8(_=typeof window<"u"?window:null){if(!_||!_.isSecureContext)return!1;return"serviceWorker"in _.navigator&&"PushManager"in _}async function EB(_){return await _.navigator.serviceWorker.register("/sw.js",{updateViaCache:"none"}),await _.navigator.serviceWorker.ready}async function Fy(_){let $=await EB(_),j=await $.pushManager.getSubscription();if(j)return j;let G=await H7(),Z=typeof G?.publicKey==="string"?G.publicKey.trim():"";if(!Z)throw Error("Missing web push public key.");return $.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:By(Z)})}async function HB(_,$){if(!b8(_))return!1;let j=await Fy(_);return await E7(j.toJSON?j.toJSON():j,{deviceId:$}),!0}async function Uy(_,$){if(!b8(_))return!1;let G=await(await EB(_)).pushManager.getSubscription();if(!G)return!1;let Z=G.toJSON?G.toJSON():G;try{await D7(Z,{deviceId:$})}catch(X){console.warn("Failed to remove web push subscription from the server:",X)}try{await G.unsubscribe()}catch(X){console.warn("Failed to unsubscribe from web push notifications:",X)}return!0}function Hy(_,$={}){let j=$.runtimeWindow??(typeof window<"u"?window:null);if(!j?.fetch)return Promise.resolve(!1);return j.fetch("/agent/push/presence",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_),keepalive:Boolean($.keepalive)}).then(()=>!0).catch(()=>!1)}function Ey(_,$=typeof window<"u"?window:null){try{if($?.navigator?.sendBeacon){let j=new Blob([JSON.stringify(_)],{type:"application/json"});return $.navigator.sendBeacon("/agent/push/presence",j)}}catch(j){console.debug("[use-notifications] Ignoring sendBeacon failure for best-effort notification presence teardown.",j,{hasNavigator:Boolean($?.navigator)})}return!1}function DB(_={}){let $=typeof _?.chatJid==="string"&&_.chatJid.trim()?_.chatJid.trim():"web:default",[j,G]=C(!1),[Z,X]=C("default"),Y=g(!1),L=g(null),V=g(null);u(()=>{let N=F$("notificationsEnabled",!1);if(Y.current=N,G(N),typeof window<"u")L.current=Z4(window),V.current=u5(window);if(typeof Notification>"u")return;let U=Notification.permission;if(X(U),U==="denied"&&N){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}if(U==="granted"&&N&&typeof window<"u"&&b8(window))HB(window,L.current||Z4(window)).catch((E)=>{console.warn("Failed to refresh stored web push subscription:",E)})},[]),u(()=>{Y.current=j},[j]),u(()=>{if(typeof window>"u"||typeof document>"u")return;let N=L.current||Z4(window),U=V.current||u5(window);L.current=N,V.current=U;let E=(J=!0,W="fetch")=>{let T=xj({chatJid:$,runtimeWindow:window,runtimeDocument:document,deviceId:N,clientId:U});if(J)BB(T,window);else FB({deviceId:N,clientId:U},window);let x={device_id:N,client_id:U,chat_jid:$,visibility_state:T.visibilityState,has_focus:T.hasFocus,active:J};if(!J&&W==="beacon"&&Ey(x,window))return;Hy(x,{runtimeWindow:window,keepalive:!J||W==="keepalive"})},D=()=>E(!0),H=()=>E(!1,"beacon");E(!0);let M=setInterval(()=>E(!0),15000);return document.addEventListener("visibilitychange",D),window.addEventListener("focus",D),window.addEventListener("blur",D),window.addEventListener("pageshow",D),window.addEventListener("pagehide",H),window.addEventListener("beforeunload",H),()=>{clearInterval(M),document.removeEventListener("visibilitychange",D),window.removeEventListener("focus",D),window.removeEventListener("blur",D),window.removeEventListener("pageshow",D),window.removeEventListener("pagehide",H),window.removeEventListener("beforeunload",H),E(!1,"beacon")}},[$]);let K=P(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch(N){return console.debug("[use-notifications] Notification permission request threw; returning default permission state.",N),Promise.resolve("default")}},[]),Q=P(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){X("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let E=await K();if(X(E||"default"),E!=="granted"){Y.current=!1,G(!1),L_("notificationsEnabled","false");return}}let N=!Y.current;Y.current=N,G(N),L_("notificationsEnabled",String(N));let U=L.current||Z4(window);if(L.current=U,b8(window))try{if(N)await HB(window,U);else await Uy(window,U)}catch(E){if(console.warn("Failed to sync web push notifications:",E),N)alert("Notifications were enabled, but web push setup failed. If you are on iPhone or iPad, reopen PiClaw from the Home Screen and try again.")}},[K]),q=P((N,U,E={})=>{if(!Y.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let D=new Notification(Ny(N,E?.sourceLabel||"",window),{body:U});return D.onclick=()=>{VB(window)},!0}catch(D){return console.debug("[use-notifications] Local notification creation failed.",D,{title:typeof N==="string"?N:null}),!1}},[]),B=P((N)=>{if(typeof window>"u"||typeof document>"u")return!1;return UB({chatJid:typeof N==="string"&&N.trim()?N.trim():$,runtimeWindow:window,runtimeDocument:document,deviceId:L.current||Z4(window),clientId:V.current||u5(window)})},[$]);return{notificationsEnabled:j,notificationPermission:Z,toggleNotifications:Q,notify:q,shouldNotifyLocallyForChat:B}}function Dy(_){let{activeChatAgents:$,currentChatBranches:j,currentChatJid:G}=_,Z=j.find((X)=>X?.chat_jid===G);if(Z)return Z;return $.find((X)=>X?.chat_jid===G)||null}function zy(_){return{status:_?"running":"idle",message:_?"Preparing a new chat branch…":""}}function Wy(_,$){let j=typeof $?.root_chat_jid==="string"?$.root_chat_jid.trim():"";if(j)return j;let G=typeof _==="string"?_.trim():"";if(!G)return"web:default";let Z=G.indexOf(":branch:");if(Z<=0)return G;return G.slice(0,Z)||G}function zB(_){let{currentChatJid:$,branchLoaderMode:j}=_,[G,Z]=C("disconnected"),[X,Y]=C(!1),[L,V]=C(()=>f1()),[K,Q]=C(null),[q,B]=C(null),[N,U]=C(!1),[E,D]=C("current"),[H,M]=C([]),[J,W]=C([]),[T,x]=C([]),[A,k]=C(null),[O,z]=C({}),[y,I]=C(null),[R,f]=C(null),[v,l]=C(!1),[h,n]=C(null),[b,$0]=C(null),[E0,V0]=C(!1),[K0,X0]=C([]),[F0,_0]=C([]),[Y0,Q0]=C(null),[J0,s]=C(()=>new Map),[j0,z0]=C(()=>new Set),[C0,h0]=C(()=>({message:null,indicator:null,visible:!0})),[n0,G_]=C([]),[m0,a0]=C(!1),[S0,o0]=C(()=>bV()),[c0,d0]=C(null),[r0,Q_]=C(null),t0=g(new Set),l0=Z0(()=>Dy({activeChatAgents:K0,currentChatBranches:F0,currentChatJid:$}),[K0,F0,$]),O0=Z0(()=>Wy($,l0),[l0,$]),B_=gV(E),[e0,D_]=C(()=>zy(j)),H0=n0.length,u0=g(new Set),T0=g([]),i0=g(new Set),A_=g(0),K_=g({inFlight:!1,lastAttemptAt:0,turnId:null});u0.current=new Set(n0.map((g1)=>g1.row_id)),T0.current=n0;let{notificationsEnabled:H_,notificationPermission:E_,toggleNotifications:y_,notify:I_,shouldNotifyLocallyForChat:u_}=DB({chatJid:$}),[e,A0]=C(()=>new Set),[k0,d]=C(()=>Gq({allowLegacyFallback:!0,defaultValue:!1})),[o,a]=C({name:"You",avatar_url:null,avatar_background:null}),G0=g(null),L0=g(!1),M0=g(!1),b0=g(!1),P0=g(null),g0=g($),I0=g(new Map),D0=g($),f0=g(0),Z_=g(0),__=g({}),F_=g({name:null,avatar_url:null}),v0=g({currentHashtag:null,searchQuery:null,searchOpen:!1}),W_=g(null),z_=g(null),i=g(0),W0=g(0),X_=g(0),V_=g(null),p_=g(null),B1=g(null),g_=g(null),J1=g(0),C_=g({title:null,avatarBase:null}),M_=g(null),A1=g(!1),[O_,k_]=C(!1),F1=g(0),[m_,n_]=C(!1),[s_,U_]=C(""),x1=Z0(()=>a2(s_,l0?.agent_name||""),[l0?.agent_name,s_]),U1=g(null);return{connectionStatus:G,setConnectionStatus:Z,stateAccessFailed:X,setStateAccessFailed:Y,isWebAppMode:L,setIsWebAppMode:V,currentHashtag:K,setCurrentHashtag:Q,searchQuery:q,setSearchQuery:B,searchOpen:N,setSearchOpen:U,searchScope:E,setSearchScope:D,fileRefs:H,setFileRefs:M,folderRefs:J,setFolderRefs:W,messageRefs:T,setMessageRefs:x,intentToast:A,setIntentToast:k,agents:O,setAgents:z,activeModel:y,setActiveModel:I,activeThinkingLevel:R,setActiveThinkingLevel:f,supportsThinking:v,setSupportsThinking:l,activeModelUsage:h,setActiveModelUsage:n,agentModelsPayload:b,setAgentModelsPayload:$0,hasLoadedAgentModels:E0,setHasLoadedAgentModels:V0,activeChatAgents:K0,setActiveChatAgents:X0,currentChatBranches:F0,setCurrentChatBranches:_0,contextUsage:Y0,setContextUsage:Q0,extensionStatusPanels:J0,setExtensionStatusPanels:s,pendingExtensionPanelActions:j0,setPendingExtensionPanelActions:z0,extensionWorkingState:C0,setExtensionWorkingState:h0,followupQueueItems:n0,setFollowupQueueItems:G_,isAgentTurnActive:m0,setIsAgentTurnActive:a0,btwSession:S0,setBtwSession:o0,floatingWidget:c0,setFloatingWidget:d0,attachmentPreview:r0,setAttachmentPreview:Q_,dismissedLiveWidgetKeysRef:t0,currentBranchRecord:l0,currentRootChatJid:O0,activeSearchScopeLabel:B_,branchLoaderState:e0,setBranchLoaderState:D_,followupQueueCount:H0,followupQueueRowIdsRef:u0,followupQueueItemsRef:T0,dismissedQueueRowIdsRef:i0,queueRefreshGenRef:A_,silentRecoveryRef:K_,notificationsEnabled:H_,notificationPermission:E_,handleToggleNotifications:y_,notify:I_,shouldNotifyLocallyForChat:u_,removingPostIds:e,setRemovingPostIds:A0,workspaceOpen:k0,setWorkspaceOpen:d,userProfile:o,setUserProfile:a,staleUiVersionRef:G0,staleUiReloadScheduledRef:L0,hasConnectedOnceRef:M0,wasAgentActiveRef:b0,agentStatusRef:P0,activeChatJidRef:g0,chatPaneStateByChatRef:I0,paneStateOwnerChatJidRef:D0,draftThrottleRef:f0,thoughtThrottleRef:Z_,agentsRef:__,userProfileRef:F_,viewStateRef:v0,timelineRef:W_,appShellRef:z_,sidebarWidthRef:i,editorWidthRef:W0,dockHeightRef:X_,lastNotifiedIdRef:V_,lastAgentResponseRef:p_,btwAbortRef:B1,lastActivityTimerRef:g_,lastActivityTokenRef:J1,brandingRef:C_,intentToastTimerRef:M_,renameBranchInFlightRef:A1,isRenamingBranch:O_,setIsRenamingBranch:k_,renameBranchLockUntilRef:F1,isRenameBranchFormOpen:m_,setIsRenameBranchFormOpen:n_,renameBranchNameDraft:s_,setRenameBranchNameDraft:U_,renameBranchDraftState:x1,renameBranchNameInputRef:U1}}w0();w0();function Oy(_,$,j,G){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,X=new Map;for(let[Y,L]of _.entries()){let V=Y;if(G==="dir"){if(Y===$)V=j,Z=!0;else if(Y.startsWith(`${$}/`))V=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)V=j,Z=!0;X.set(V,L)}return Z?X:_}function WB(_,$,j,G){if(!(_ instanceof Set)||_.size===0||!$||!j)return _;let Z=!1,X=new Set;for(let Y of _.values()){let L=Y;if(G==="dir"){if(Y===$)L=j,Z=!0;else if(Y.startsWith(`${$}/`))L=`${j}${Y.slice($.length)}`,Z=!0}else if(Y===$)L=j,Z=!0;X.add(L)}return Z?X:_}function OB({onTabClosed:_}={}){let $=g(_);$.current=_;let[j,G]=C(()=>$_.getTabs()),[Z,X]=C(()=>$_.getActiveId()),[Y,L]=C(()=>$_.getTabs().length>0);u(()=>{return $_.onChange((I,R)=>{G(I),X(R),L(I.length>0)})},[]);let[V,K]=C(()=>new Set),[Q,q]=C(()=>new Set),[B,N]=C(()=>new Map),U=P((I)=>{K((R)=>{let f=new Set(R);if(f.has(I))f.delete(I);else f.add(I);return f})},[]),E=P((I)=>{K((R)=>{if(!R.has(I))return R;let f=new Set(R);return f.delete(I),f})},[]),D=P((I)=>{q((R)=>{if(!R.has(I))return R;let f=new Set(R);return f.delete(I),f})},[]),H=P((I)=>{N((R)=>{if(!R.has(I))return R;let f=new Map(R);return f.delete(I),f})},[]),M=P((I,R={})=>{if(!I)return;let f=typeof R?.paneOverrideId==="string"&&R.paneOverrideId.trim()?R.paneOverrideId.trim():null,v={path:I,mode:"edit"};try{if(!(f?Y_.get(f):Y_.resolve(v))){if(!Y_.get("editor")){console.warn(`[openEditor] No pane handler for: ${I}`);return}}}catch(b){console.warn(`[openEditor] paneRegistry.resolve() error for "${I}":`,b)}let l=typeof R?.label==="string"&&R.label.trim()?R.label.trim():void 0,h=R?.viewState&&typeof R.viewState==="object"?R.viewState:null,n=R?.diffMode==="saved"?"saved":null;if($_.open(I,l),h)$_.saveViewState(I,h);if(f)N((b)=>{if(b.get(I)===f)return b;let $0=new Map(b);return $0.set(I,f),$0});if(n==="saved")q((b)=>{if(b.has(I))return b;let $0=new Set(b);return $0.add(I),$0})},[]),J=P(()=>{let I=$_.getActiveId();if(I){let R=$_.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}$_.close(I),E(I),D(I),H(I),$.current?.(I)}},[D,H,E]),W=P((I)=>{let R=$_.get(I);if(R?.dirty){if(!window.confirm(`"${R.label}" has unsaved changes. Close anyway?`))return}$_.close(I),E(I),D(I),H(I),$.current?.(I)},[D,H,E]),T=P((I)=>{$_.activate(I)},[]),x=P((I)=>{let R=$_.getTabs().filter((l)=>l.id!==I&&!l.pinned),f=R.filter((l)=>l.dirty).length;if(f>0){if(!window.confirm(`${f} unsaved tab${f>1?"s":""} will be closed. Continue?`))return}let v=R.map((l)=>l.id);$_.closeOthers(I),v.forEach((l)=>{E(l),D(l),H(l),$.current?.(l)})},[D,H,E]),A=P(()=>{let I=$_.getTabs().filter((v)=>!v.pinned),R=I.filter((v)=>v.dirty).length;if(R>0){if(!window.confirm(`${R} unsaved tab${R>1?"s":""} will be closed. Continue?`))return}let f=I.map((v)=>v.id);$_.closeAll(),f.forEach((v)=>{E(v),D(v),H(v),$.current?.(v)})},[D,H,E]),k=P((I)=>{$_.togglePin(I)},[]),O=P((I)=>{if(!I)return;q((R)=>{let f=new Set(R);if(f.has(I))f.delete(I);else f.add(I);return f}),$_.activate(I)},[]),z=P((I)=>{if(!I)return;N((R)=>{if(R.get(I)==="editor")return R;let f=new Map(R);return f.set(I,"editor"),f}),$_.activate(I)},[]),y=P(()=>{let I=$_.getActiveId();if(I)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:I}}))},[]);return u(()=>{let I=(R)=>{let{oldPath:f,newPath:v,type:l}=R.detail||{};if(!f||!v)return;if(l==="dir"){for(let h of $_.getTabs())if(h.path===f||h.path.startsWith(`${f}/`)){let n=`${v}${h.path.slice(f.length)}`;$_.rename(h.id,n)}}else $_.rename(f,v);K((h)=>WB(h,f,v,l)),q((h)=>WB(h,f,v,l)),N((h)=>Oy(h,f,v,l))};return window.addEventListener("workspace-file-renamed",I),()=>window.removeEventListener("workspace-file-renamed",I)},[]),u(()=>{let I=(R)=>{if($_.hasUnsaved())R.preventDefault(),R.returnValue=""};return window.addEventListener("beforeunload",I),()=>window.removeEventListener("beforeunload",I)},[]),{editorOpen:Y,tabStripTabs:j,tabStripActiveId:Z,previewTabs:V,diffTabs:Q,tabPaneOverrides:B,openEditor:M,closeEditor:J,handleTabClose:W,handleTabActivate:T,handleTabCloseOthers:x,handleTabCloseAll:A,handleTabTogglePin:k,handleTabTogglePreview:U,handleTabToggleDiff:O,handleTabEditSource:z,revealInExplorer:y}}w0();function a1(_){return typeof _==="string"&&_.trim()?_.trim():null}function Jy(_=globalThis){try{return typeof _?.crypto?.randomUUID==="function"?_.crypto.randomUUID():null}catch($){return null}}function v4(_="pane"){let $=Jy();if($)return`${_}-${$}`;return`${_}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,10)}`}function JB(_){let $=a1(_?.paneInstanceId),j=a1(_?.paneWindowId);if(!$||!j)return{};let G=a1(_?.paneSourceWindowId);return{pane_instance_id:$,pane_window_id:j,...G?{pane_source_window_id:G}:{}}}function AB(_={}){let $=new URLSearchParams(_.search||"");return{panePath:a1($.get("pane_path"))||a1(_.panePath),paneLabel:a1($.get("pane_label"))||a1(_.paneLabel),paneInstanceId:a1($.get("pane_instance_id")),paneWindowId:a1($.get("pane_window_id")),paneSourceWindowId:a1($.get("pane_source_window_id"))}}function m4(_){return Boolean(_?.panePath&&_?.paneInstanceId&&_?.paneWindowId)}function t1(_){return typeof _==="string"&&_.trim()?_.trim():null}function kB(_){let $=t1(_?.panePath),j=t1(_?.paneInstanceId),G=t1(_?.ownerWindowId);if(!$||!j||!G)return null;let Z=t1(_?.now)||new Date().toISOString();return{panePath:$,paneInstanceId:j,ownerWindowId:G,detachedAt:Z,requestedAt:Z,label:t1(_?.label),sourceWindowId:t1(_?.sourceWindowId)}}function Ij(_,$){if(!_||!$)return!1;return t1($.panePath)===_.panePath&&t1($.paneInstanceId)===_.paneInstanceId&&t1($.paneWindowId)===_.ownerWindowId}function Cj(_,$){if(!_)return null;return{panePath:_.panePath,paneInstanceId:_.paneInstanceId,ownerWindowId:_.ownerWindowId,detachedAt:t1($)||new Date().toISOString(),label:_.label||null}}function v8(_){try{return _?.close?.(),!0}catch($){return!1}}function Pj(_,$,j){try{return _?.postMessage?.($,j),!0}catch(G){return!1}}function Ay(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if(_.openTabIds?.has($))return!0;if(_.pendingDetachedTabPaths?.has?.($))return!0;if(_.detachedTabPaths?.has?.($))return!0;if($===_.terminalTabPath)return Boolean(_.hasPendingDetachedDockPane||_.hasDetachedDockPane);return!1}function yB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return;let j=_?.sourceHost==="dock"?"dock":"tab";if($===_.terminalTabPath&&j==="dock"){_.setDockVisible?.(!1);return}_.closeTab?.($)}var ky=400;function yy(_){let $=Array.isArray(_?.changed_paths)?_.changed_paths.map((G)=>typeof G==="string"?G.trim():"").filter(Boolean):[];if($.length>0)return $;let j=typeof _?.path==="string"?_.path.trim():"";return j?[j]:["."]}function My(_,$){if(!_)return!1;if(!Array.isArray($)||$.length===0)return!0;return $.some((j)=>{return yy(j).some((Z)=>Z==="."||Z===_)})}async function MB(_,$){if(typeof _?.afterAttachToHost!=="function")return;await _.afterAttachToHost($)}function wy(_=typeof document<"u"?document:null){if(!_)return!0;let $=typeof _.visibilityState==="string"?_.visibilityState:"";return!$||$==="visible"}function l8(_=typeof navigator<"u"?navigator:null){if(!_)return!1;let $=String(_.userAgent||""),j=String(_.vendor||""),G=/AppleWebKit/i.test($),Z=/Safari/i.test($),X=/Chrome|Chromium|CriOS|EdgiOS|EdgA|Edg\//i.test($),Y=/FxiOS/i.test($);return G&&(j.includes("Apple")||Z)&&!X&&!Y}function wB(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;if($!==_.terminalTabPath)return!1;if((_?.reason==="message"?"message":"closed-window")==="closed-window")return!0;return _?.allowLiveTransfer===!1}function m8(_){if(!wB(_))return!1;return l8(_?.runtimeNavigator)}function c8(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$||$!==_?.terminalTabPath)return!1;return l8(_?.runtimeNavigator)}function u6(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return!1;return $!==_?.terminalTabPath}function Ty(_){let $=typeof _?.panePath==="string"?_.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.paneInstanceId==="string"?_.paneInstanceId.trim():"",X=typeof _?.paneOverrideId==="string"?_.paneOverrideId.trim():"",Y=typeof _?.terminalTabPath==="string"?_.terminalTabPath:"piclaw://terminal",L=_?.allowLiveTransfer!==!1,V=_?.instance||null,K=typeof V?.exportHostTransferState==="function"?V.exportHostTransferState():null,Q=$===Y,q=K&&!Q?u8({path:$,payload:K},j,G):null,B=null;if($!==Y){let N=K&&typeof K==="object"?typeof K.mtime==="string"?K.mtime:K.mtime===null?null:void 0:void 0,U=typeof V?.isDirty==="function"?V.isDirty():!1,E=typeof V?.getContent==="function"?V.getContent():void 0;B=Z2({path:$,content:U?E:void 0,mtime:N,paneOverrideId:X||null,viewState:_?.viewState||null},j,G)}return{type:"piclaw-pane-reattach-request",panePath:$,...Z?{paneInstanceId:Z}:{},...B?.editor_popout?{editorPopoutToken:B.editor_popout}:{},...q?.pane_transfer?{paneTransferToken:q.pane_transfer}:{},...Q&&K?{paneTransferPayload:K}:{},...L?{}:{allowLiveTransfer:!1}}}function xy(_){let $=typeof _?.payload?.panePath==="string"?_.payload.panePath.trim():"";if(!$)return null;let j=_?.runtime??globalThis,G=typeof _?.nowMs==="number"?_.nowMs:Date.now(),Z=typeof _?.payload?.paneInstanceId==="string"&&_.payload.paneInstanceId.trim()?_.payload.paneInstanceId.trim():null,X=typeof _?.payload?.editorPopoutToken==="string"?_.payload.editorPopoutToken.trim():"",Y=typeof _?.payload?.paneTransferToken==="string"?_.payload.paneTransferToken.trim():"",L=_?.payload?.paneTransferPayload&&typeof _.payload.paneTransferPayload==="object"&&!Array.isArray(_.payload.paneTransferPayload)?_.payload.paneTransferPayload:null,V=X?z3(X,j,G):null,K=L?{panePath:$,path:$,payload:L,capturedAt:G}:Y?kj(Y,j,G):null;return{panePath:$,paneInstanceId:Z,editorTransfer:V?.path===$?V:null,hostTransfer:K?.path===$?K:null,allowLiveTransfer:_?.payload?.allowLiveTransfer!==!1}}function TB(_){let{panePopoutMode:$,panePopoutPath:j,panePopoutLabel:G,chatOnlyMode:Z,editorOpen:X,tabStripTabs:Y,tabStripActiveId:L,previewTabs:V,diffTabs:K,tabPaneOverrides:Q,terminalTabPath:q,vncTabPrefix:B,openEditor:N,closeEditor:U,getWorkspaceFile:E}=_,D=g(null),H=g(null),M=g(null),J=g(null),W=g((()=>{if(!$)return null;let d=G6("editor_popout");return z3(d)})()),T=g((()=>{if(!$)return null;return VN()})()),x=g(AB({search:typeof window<"u"?window.location.search:"",panePath:j,paneLabel:G})),A=g(x.current.paneWindowId||v4("pane-window")),k=g(new Map),O=g(new Map),z=g(new Map),y=g(new Map),I=g(!1),R=g(new Map),f=g(v4("pane-instance")),v=g(new Map),l=g(new Map),h=g(new Set),[n,b]=C(()=>new Map),$0=g(n);$0.current=n;let[E0,V0]=C(()=>new Map),K0=g(E0);K0.current=E0;let[X0,F0]=C(null),_0=g(X0);_0.current=X0;let[Y0,Q0]=C(null),J0=g(Y0);J0.current=Y0;let s=Y_.getDockPanes().length>0,[j0,z0]=C(!1),C0=P(()=>z0((d)=>!d),[]),h0=P(()=>{N(q,{label:"Terminal"})},[N,q]),n0=P(()=>{N(B,{label:"VNC"})},[N,B]),G_=P((d)=>{let o=typeof d==="string"?d.trim():"";if(!o)return v4("pane-instance");if(o===q&&!$_.get(o)){if(!f.current)f.current=v4("pane-instance");return f.current}let G0=R.current.get(o);if(G0)return G0;let L0=v4("pane-instance");return R.current.set(o,L0),L0},[q]),m0=Z0(()=>!$&&L?E0.get(L)||null:null,[E0,$,L]),a0=!$?Y0:null,S0=P((d)=>{if(!d)return;qN(d),l.current.delete(d),h.current.delete(d),F0((o)=>o?.panePath===d?null:o),b((o)=>{if(!o.has(d))return o;let a=new Map(o);return a.delete(d),a})},[]),o0=P((d)=>{if(!d)return;v.current.delete(d),l.current.delete(d),h.current.delete(d),S0(d),Q0((o)=>o?.panePath===d?null:o),V0((o)=>{if(!o.has(d))return o;let a=new Map(o);return a.delete(d),a})},[S0]),c0=P((d,o={})=>{let a=typeof d==="string"?d.trim():"";if(!a)return!1;if(c8({panePath:a,terminalTabPath:q}))return!1;let G0=v.current.get(a),L0=Boolean(K0.current.get(a)),M0=Boolean(J0.current?.panePath===a);if(o0(a),a===q&&M0&&!L0)z0(!0);else if(a===q&&L0)N(a,{label:"Terminal"});else if($_.get(a))$_.activate(a);else N(a);if(o.closeDetachedWindow!==!1&&G0&&typeof G0.close==="function")v8(G0);return!0},[o0,N,z0,q]),d0=P(()=>{if($)return;if(!wy())return;let d=Date.now();for(let[o,a]of l.current.entries()){if(a>d)continue;l.current.delete(o),c0(o,{closeDetachedWindow:!1})}},[$,c0]),r0=P((d,o={})=>{let a=typeof d==="string"?d.trim():"";if(!a)return!1;let G0={panePath:a,terminalTabPath:q,allowLiveTransfer:o.allowLiveTransfer,reason:o.reason};if(m8(G0))return v.current.delete(a),l.current.delete(a),h.current.add(a),!0;if(!wB(G0))return c0(a,{closeDetachedWindow:!1});return l.current.set(a,Date.now()+ky),d0(),!0},[d0,c0,q]),Q_=P((d)=>{let o=typeof d==="string"?d.trim():"";if(!o)return null;let a=G_(o),G0=v4("pane-window");return{paneInstanceId:a,paneWindowId:G0,params:JB({paneInstanceId:a,paneWindowId:G0,paneSourceWindowId:A.current})}},[G_]),t0=P((d,o,a,G0)=>{let L0=typeof d==="string"?d.trim():"";if(!L0||!G0)return;let M0=kB({panePath:L0,paneInstanceId:G0.pane_instance_id,ownerWindowId:G0.pane_window_id,sourceWindowId:G0.pane_source_window_id,label:o});if(!M0)return;if(v.current.set(L0,a||null),L0===q&&!$_.get(L0)){F0(M0);return}b((P0)=>{let g0=new Map(P0);return g0.set(L0,M0),g0})},[q]),l0=P((d,o)=>{let a=typeof d?.panePath==="string"?d.panePath.trim():"";if(!a)return!1;let G0=v.current.get(a);if(G0&&o&&G0!==o)return!1;let L0=$0.current.get(a)||null;if(Ij(L0,d)){let I0=H.current,D0=u6({panePath:a,terminalTabPath:q});if(D0&&I0&&typeof I0.moveHost==="function")S6({panePath:a,paneInstanceId:L0.paneInstanceId,paneWindowId:L0.ownerWindowId,instance:I0,releaseSourceHost:()=>{if(H.current===I0)H.current=null}});if(D0&&H.current)H.current=null;let f0=Cj(L0);if(!f0)return!1;return b((Z_)=>{if(!Z_.has(a))return Z_;let __=new Map(Z_);return __.delete(a),__}),V0((Z_)=>{let __=new Map(Z_);return __.set(a,f0),__}),yB({panePath:a,terminalTabPath:q,closeTab:(Z_)=>$_.close(Z_),sourceHost:"tab"}),!0}if(a!==q)return!1;let M0=_0.current,b0=J.current,P0=u6({panePath:a,terminalTabPath:q});if(P0&&M0&&b0&&typeof b0.moveHost==="function")S6({panePath:a,paneInstanceId:M0.paneInstanceId,paneWindowId:M0.ownerWindowId,instance:b0,releaseSourceHost:()=>{if(J.current===b0)J.current=null}});if(P0&&J.current)J.current=null;if(!Ij(M0,d))return!1;let g0=Cj(M0);if(!g0)return!1;return F0(null),Q0(g0),yB({panePath:a,terminalTabPath:q,setDockVisible:z0,sourceHost:"dock"}),!0},[z0,q]),O0=P((d=!1,o=!0)=>{if(!$)return!1;let a=x.current;if(!m4(a))return!1;if(typeof window>"u"||!window.opener||window.opener.closed)return!1;if(I.current){if(d)v8(window);return!0}let G0=a.panePath||j,L0=G0===q?J.current||H.current:H.current,M0=o&&u6({panePath:G0,terminalTabPath:q}),b0=Ty({panePath:G0,paneInstanceId:a.paneInstanceId,paneOverrideId:G0===q?null:typeof Q?.get==="function"?Q.get(G0)||null:null,terminalTabPath:q,viewState:G0===q?null:$_.getViewState(G0)||null,allowLiveTransfer:M0,instance:L0});if(!b0)return!1;if(M0&&b0.paneTransferToken&&typeof L0?.moveHost==="function"){if(J.current===L0)J.current=null;if(H.current===L0)H.current=null}if(!Pj(window.opener,b0,window.location.origin))return!1;if(I.current=!0,d)v8(window);return!0},[$,j,Q,q]),B_=P(()=>O0(!0,!0),[O0]);u(()=>{if(!$||typeof window>"u")return;let d=()=>{let o=x.current,a=m4(o)?o.panePath||j||"":"";if(m8({panePath:a,terminalTabPath:q,allowLiveTransfer:!1,reason:"closed-window"}))return;O0(!1,!1)};return window.addEventListener("pagehide",d),window.addEventListener("beforeunload",d),()=>{window.removeEventListener("pagehide",d),window.removeEventListener("beforeunload",d)}},[$,O0]);let e0=Z0(()=>mV(Y,L),[L,Y]),D_=Z0(()=>cV(Q,L),[Q,L]),H0=Z0(()=>Yj(G,e0,j),[e0,G,j]),u0=Z0(()=>L&&K.has(L)?"saved":null,[K,L]),T0=g(u0);u(()=>{T0.current=u0},[u0]);let i0=Z0(()=>hV(Y,V,K,L),[K,V,L,Y]),A_=Z0(()=>pV(j,B),[j,B]),K_=Z0(()=>rV(j,q,i0,A_),[A_,i0,j,q]),H_=nV($,Z,X,s,j0),[E_,y_]=C(!1),I_=g(!1),u_=P(()=>{if(!X||Z)return;if(I_.current=j0,j0)z0(!1);y_(!0)},[Z,j0,X]),e=P(()=>{if(!E_)return;if(y_(!1),I_.current)z0(!0),I_.current=!1},[E_]),A0=P(()=>{if(E_){e();return}u_()},[u_,e,E_]);u(()=>{if(E_&&!X)e()},[X,e,E_]),u(()=>{let d=new Set(Y.map((G0)=>G0.id)),o=new Set($0.current.keys()),a=new Set(K0.current.keys());for(let G0 of Array.from(R.current.keys()))if(!Ay({panePath:G0,openTabIds:d,pendingDetachedTabPaths:o,detachedTabPaths:a,terminalTabPath:q,hasPendingDetachedDockPane:Boolean(_0.current),hasDetachedDockPane:Boolean(J0.current)}))R.current.delete(G0)},[Y,q]),u(()=>{if($||typeof window>"u")return;let d=(o)=>{if(o.origin!==window.location.origin)return;let a=o.data;if(!a||typeof a!=="object")return;if(a.type==="piclaw-pane-detach-claim"){l0({panePath:a.panePath,paneInstanceId:a.paneInstanceId,paneWindowId:a.paneWindowId},o.source);return}if(a.type!=="piclaw-pane-reattach-request")return;let G0=xy({payload:a}),L0=G0?.panePath||"";if(!L0)return;if(G0?.editorTransfer)k.current.set(L0,G0.editorTransfer);if(G0?.hostTransfer)if(O.current.set(L0,G0.hostTransfer),G0.allowLiveTransfer&&o.source)z.current.set(L0,o.source);else z.current.delete(L0);let M0=K0.current.get(L0)||null,b0=L0===q?J0.current:null,P0=u6({panePath:L0,terminalTabPath:q}),g0=M0||b0;if(!g0)return;if(G0?.paneInstanceId&&G0.paneInstanceId!==g0.paneInstanceId)return;if(c8({panePath:L0,terminalTabPath:q})){z.current.delete(L0),y.current.delete(L0),O.current.delete(L0),k.current.delete(L0);return}if(G0?.hostTransfer&&G0.allowLiveTransfer&&P0)y.current.set(L0,{panePath:L0,paneInstanceId:g0.paneInstanceId,paneWindowId:g0.ownerWindowId});else y.current.delete(L0);if(m8({panePath:L0,terminalTabPath:q,allowLiveTransfer:G0?.allowLiveTransfer,reason:"message"})){z.current.delete(L0),v.current.delete(L0),l.current.delete(L0),h.current.add(L0);return}r0(L0,{allowLiveTransfer:G0?.allowLiveTransfer,reason:"message"})};return window.addEventListener("message",d),()=>window.removeEventListener("message",d)},[l0,$,r0,q]),u(()=>{if($||typeof window>"u"||typeof document>"u")return;let d=()=>d0();window.addEventListener("focus",d),window.addEventListener("pageshow",d),document.addEventListener("visibilitychange",d);let o=setInterval(()=>{d0();for(let[a,G0]of v.current.entries()){if(!G0||!G0.closed)continue;if(a===q?Boolean(_0.current):$0.current.has(a)){v.current.delete(a),S0(a);continue}if(c8({panePath:a,terminalTabPath:q})){o0(a);continue}if(m8({panePath:a,terminalTabPath:q,allowLiveTransfer:!1,reason:"closed-window"})){v.current.delete(a),l.current.delete(a),h.current.add(a);continue}if(h.current.has(a)){v.current.delete(a);continue}r0(a,{allowLiveTransfer:!1,reason:"closed-window"})}},750);return()=>{window.removeEventListener("focus",d),window.removeEventListener("pageshow",d),document.removeEventListener("visibilitychange",d),clearInterval(o)}},[o0,S0,d0,$,r0,q]),u(()=>{if(!$||!j)return;if($_.getActiveId()===j)return;let o=W.current?.path===j?W.current:null,a=T.current?.path===j?T.current:null;N(j,{...G?{label:G}:{},...o?.paneOverrideId?{paneOverrideId:o.paneOverrideId}:{},...o?.viewState?{viewState:o.viewState}:{},...a?.payload?.diffMode?{diffMode:a.payload.diffMode}:{}})},[N,G,$,j]),u(()=>{if(!$)return;let d=x.current;if(!m4(d))return;if(typeof window>"u"||!window.opener||window.opener.closed)return;Pj(window.opener,{type:"piclaw-pane-detach-claim",panePath:d.panePath,paneInstanceId:d.paneInstanceId,paneWindowId:d.paneWindowId},window.location.origin)},[$]),u(()=>{let d=D.current;if(!d)return;if(H.current)H.current.dispose(),H.current=null;let o=L;if(!o)return;if(!$&&m0?.panePath===o){d.innerHTML="";return}let a=W.current?.path===o?W.current:null,G0=k.current.get(o)||null,L0=a||G0,M0=T.current?.path===o?T.current:null,b0=O.current.get(o)||null,P0=M0||b0,g0=D_||L0?.paneOverrideId||null,I0=P0?.payload?{...P0.payload}:null;if(T0.current)I0={...I0||{},diffMode:T0.current};else if(I0&&"diffMode"in I0)delete I0.diffMode;let D0={path:o,mode:"edit",...L0?.content!==void 0?{content:L0.content}:{},...L0?.mtime!==void 0?{mtime:L0.mtime}:{},...I0?{transferState:I0}:{}},f0=(g0?Y_.get(g0):null)||Y_.resolve(D0)||Y_.get("editor");if(!f0){d.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let Z_=null,__=!1,F_=(v0)=>{Z_=v0,H.current=v0,v0.onDirtyChange?.((i)=>{$_.setDirty(o,i)}),v0.onSaveRequest?.(()=>{}),v0.onClose?.(()=>{U()});let W_=$_.getViewState(o);if(W_&&typeof v0.restoreViewState==="function")requestAnimationFrame(()=>v0.restoreViewState(W_));if(typeof v0.onViewStateChange==="function")v0.onViewStateChange((i)=>{$_.saveViewState(o,i)});let z_=x.current;if($&&m4(z_)&&typeof v0?.moveHost==="function"&&u6({panePath:o,terminalTabPath:q}))S6({panePath:o,paneInstanceId:z_.paneInstanceId||"",paneWindowId:z_.paneWindowId||"",instance:v0,releaseSourceHost:()=>{if(J.current===v0)J.current=null;if(H.current===v0)H.current=null}});MB(v0,{path:o,hostMode:$?"popout":"main",transferState:I0}).catch((i)=>{console.warn("[pane-attach] afterAttachToHost failed:",i)}),requestAnimationFrame(()=>v0.focus?.())};return(async()=>{let v0=x.current,W_=$&&m4(v0)&&v0.panePath===o?{panePath:o,paneInstanceId:v0.paneInstanceId||"",paneWindowId:v0.paneWindowId||""}:null,z_=y.current.get(o)||null,i=u6({panePath:o,terminalTabPath:q})?W_||z_:null,W0=$?typeof window<"u"&&window.opener&&!window.opener.closed?window.opener:null:z.current.get(o)||null,X_=$?"popout":"main";if(P0&&i&&W0)try{let V_=await QN(W0,i,d,{path:o,hostMode:X_,transferState:I0});if(!__&&V_){if(F_(V_),a)W.current=null;if(G0)k.current.delete(o);if(M0)T.current=null;if(b0)O.current.delete(o);z.current.delete(o),y.current.delete(o);return}}catch(V_){console.warn("[pane-live-transfer] Failed to claim live pane instance:",V_)}if(__)return;if(F_(f0.mount(d,D0)),a)W.current=null;if(G0)k.current.delete(o);if(M0)T.current=null;if(b0)O.current.delete(o);z.current.delete(o),y.current.delete(o)})(),()=>{if(__=!0,H.current===Z_)Z_.dispose(),H.current=null}},[m0,D_,U,$,L]),u(()=>{let d=L,o=H.current;if(!d||typeof o?.setDiffMode!=="function")return;o.setDiffMode(u0)},[u0,L]);let k0=P(async(d)=>{let o=typeof L==="string"?L.trim():"",a=H.current;if(!o||!a?.setContent)return;if(typeof a.isDirty==="function"&&a.isDirty())return;if(!My(o,d))return;try{let G0=await E(o,1e6,"edit"),L0=typeof G0?.text==="string"?G0.text:"",M0=typeof G0?.mtime==="string"&&G0.mtime.trim()?G0.mtime.trim():new Date().toISOString();a.setContent(L0,M0)}catch(G0){console.warn("[workspace_update] Failed to refresh active pane:",G0)}},[E,L]);return u(()=>{let d=M.current;if(J.current)J.current.dispose(),J.current=null;if(!d||!s||!j0)return;if(!$&&a0?.panePath===q){d.innerHTML="";return}let o=Y_.getDockPanes()[0];if(!o){d.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let a=T.current?.path===q?T.current:null,G0=O.current.get(q)||null,L0=a||G0,M0=o.mount(d,{mode:"view",...L0?.payload?{transferState:L0.payload}:{}});if(J.current=M0,MB(M0,{path:q,hostMode:$?"popout":"main",transferState:L0?.payload||null}).catch((b0)=>{console.warn("[pane-attach] afterAttachToHost failed:",b0)}),a)T.current=null;if(G0)O.current.delete(q);return requestAnimationFrame(()=>M0.focus?.()),()=>{if(J.current===M0)M0.dispose(),J.current=null}},[a0,j0,s,$,q]),{editorContainerRef:D,editorInstanceRef:H,dockContainerRef:M,dockInstanceRef:J,hasDockPanes:s,dockVisible:j0,setDockVisible:z0,toggleDock:C0,openTerminalTab:h0,openVncTab:n0,panePopoutTitle:H0,panePopoutHasMenuActions:i0,hidePanePopoutControls:K_,showEditorPaneContainer:H_,zenMode:E_,exitZenMode:e,toggleZenMode:A0,refreshActiveEditorFromWorkspace:k0,detachedTabs:E0,activeDetachedTab:m0,detachedDockPane:a0,buildPaneDetachTransfer:Q_,registerDetachedPaneWindow:t0,reattachPane:c0,requestPanePopoutReattach:B_,canReattachPanePopout:$&&m4(x.current)&&!c8({panePath:j||"",terminalTabPath:q})}}function Iy(_){return{removeFileRefRef:_.removeFileRefRef,editorState:_.editorState,paneRuntime:_.paneRuntime}}function xB(_){let $=g(null),j=OB({onTabClosed:(Z)=>$.current?.(Z)}),G=TB({panePopoutMode:_.panePopoutMode,panePopoutPath:_.panePopoutPath,panePopoutLabel:_.panePopoutLabel,chatOnlyMode:_.chatOnlyMode,editorOpen:j.editorOpen,tabStripTabs:j.tabStripTabs,tabStripActiveId:j.tabStripActiveId,previewTabs:j.previewTabs,diffTabs:j.diffTabs,tabPaneOverrides:j.tabPaneOverrides,terminalTabPath:_.terminalTabPath,vncTabPrefix:_.vncTabPrefix,openEditor:j.openEditor,closeEditor:j.closeEditor,getWorkspaceFile:_.getWorkspaceFile});return Iy({removeFileRefRef:$,editorState:j,paneRuntime:G})}P_();var p8=1280,r8=820;function h8(_){if(typeof _!=="number"||!Number.isFinite(_)||_<=0)return null;return _}function g5(_){return typeof _==="string"&&_.trim()?_.trim():null}function Cy(_){let $=g5(_);if(!$)return!1;if($.startsWith("/")||$.startsWith("\\"))return!1;if($.includes("://"))return!1;if($==="."||$===".."||$.startsWith("../"))return!1;return!0}function Py(_){if(_.isMobile)return!1;let $=h8(_.windowWidth),j=h8(_.windowHeight);if($===null||j===null)return!1;if($<p8||j<r8)return!1;let G=h8(_.screenWidth),Z=h8(_.screenHeight);if(G!==null&&G<p8)return!1;if(Z!==null&&Z<r8)return!1;return!0}function fy(_){let $=_?.navigator,j=String($?.userAgent||""),G=Number($?.maxTouchPoints||0);return(typeof _?.matchMedia==="function"?Boolean(_.matchMedia("(pointer: coarse)")?.matches):!1)||G>1||/Android|iPhone|iPad|iPod/i.test(j)}function Ry(_){if(!_||_.kind!=="custom")return null;let $=g5(_.request_id),j=_.options&&typeof _.options==="object"?_.options:null;if(!$||!j||j.action!=="open_workspace_file")return null;let G=g5(j.path);if(!Cy(G))return null;let Z=j.target==="tab"?"tab":"popout";return{requestId:$,chatJid:g5(_.chat_jid),path:G,label:g5(j.label),target:Z}}async function Sy(_,$,j){await E6(_,$,j||void 0)}async function IB(_,$){let j=Ry(_?.detail?.payload);if(!j)return!1;if(j.chatJid&&j.chatJid!==$.currentChatJid)return!1;let G=$.respond||Sy,Z=$.windowObject||(typeof window<"u"?window:void 0),X={width:Number(Z?.innerWidth||0)||void 0,height:Number(Z?.innerHeight||0)||void 0},Y={width:p8,height:r8};if(j.target==="popout"){if(!Py({windowWidth:Z?.innerWidth,windowHeight:Z?.innerHeight,screenWidth:Z?.screen?.availWidth,screenHeight:Z?.screen?.availHeight,isMobile:fy(Z)}))return $.showIntentToast?.("Editor popout unavailable",`Need at least ${p8}×${r8} viewport space for a separate editor window.`,"warning",4500),await G(j.requestId,{ok:!1,opened:!1,reason:"insufficient_screen_space",detail:"Browser viewport is too small for a separate editor window.",target:j.target,path:j.path,viewport:X,minimum_viewport:Y},j.chatJid),!0;let V=await $.popOutPane(j.path,j.label);return await G(j.requestId,{ok:V,opened:V,reason:V?void 0:"popout_failed",detail:V?void 0:"The browser blocked the editor popout window.",target:j.target,path:j.path},j.chatJid),!0}return $.openEditor(j.path),await G(j.requestId,{ok:!0,opened:!0,target:j.target,path:j.path},j.chatJid),!0}var fj="piclaw:oobe:provider-missing:dismissed";function uy(_){if(!_||typeof _!=="object")return 0;let $=Array.isArray(_.model_options)?_.model_options.filter(Boolean):[];if($.length>0)return $.length;return(Array.isArray(_.models)?_.models.filter((G)=>typeof G==="string"&&G.trim()):[]).length}function gy(_){if(!_||typeof _!=="object")return!1;let $=_.current;return typeof $==="string"&&$.trim().length>0}function CB(_){let{panePopoutMode:$=!1,modelsLoaded:j,modelPayload:G,providerMissingDismissed:Z=!1}=_,X=uy(G),Y=X>0,L=gy(G),V=Y||L;if($||!j)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};if(V)return{kind:"hidden",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L};return{kind:Z?"hidden":"provider-missing",hasAvailableModels:Y,availableModelCount:X,hasConfiguredModelHint:L}}var by=SV();await sV();var{searchPosts:vy,deletePost:my,getAgents:cy,getAgentThought:PB,setAgentThoughtVisibility:fB,getAgentStatus:ly,getAgentContext:hy,getAutoresearchStatus:py,stopAutoresearch:ry,dismissAutoresearch:ny,getAgentModels:dy,getActiveChatAgents:iy,getChatBranches:oy,renameChatBranch:sy,pruneChatBranch:ay,purgeChatBranch:ty,restoreChatBranch:ey,getAgentQueueState:_M,steerAgentQueueItem:$M,removeAgentQueueItem:jM,streamSidePrompt:GM,getWorkspaceFile:ZM,getThread:XM,getTimeline:YM,sendAgentMessage:LM,forkChatBranch:KM,createRootChatSession:VM}=aV;function qM({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:G,panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,branchLoaderMode:L,branchLoaderSourceChatJid:V}=Z0(()=>vV(_),[_]);u(()=>{if(typeof window>"u")return;window.__piclawCurrentChatJid=j,window.dispatchEvent?.(new CustomEvent("piclaw:current-chat-changed",{detail:{chatJid:j}}))},[j]);let K=zB({currentChatJid:j,branchLoaderMode:L}),[Q,q]=C(()=>F$(fj,!1)),[B,N]=C(null),U=P((S0)=>{let o0=typeof S0==="string"?S0:"";if(!o0.trim())return;N({token:`prefill-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,8)}`,text:o0})},[]),{agentStatus:E,setAgentStatus:D,agentDraft:H,setAgentDraft:M,agentPlan:J,setAgentPlan:W,agentThought:T,setAgentThought:x,pendingRequest:A,setPendingRequest:k,currentTurnId:O,setCurrentTurnId:z,steerQueuedTurnId:y,setSteerQueuedTurnId:I,lastAgentEventRef:R,lastSilenceNoticeRef:f,isAgentRunningRef:v,draftBufferRef:l,thoughtBufferRef:h,previewResyncPendingRef:n,previewResyncGenerationRef:b,pendingRequestRef:$0,stalledPostIdRef:E0,currentTurnIdRef:V0,steerQueuedTurnIdRef:K0,thoughtExpandedRef:X0,draftExpandedRef:F0}=CX(),_0=xB({panePopoutMode:Z,panePopoutPath:X,panePopoutLabel:Y,chatOnlyMode:G,terminalTabPath:X6,vncTabPrefix:i1,getWorkspaceFile:ZM}),Y0=oq({timelineRef:K.timelineRef,viewStateRef:K.viewStateRef,followupQueueRowIdsRef:K.followupQueueRowIdsRef,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,followupQueueItems:K.followupQueueItems,onIdentity:P((S0)=>{if(!S0)return;let{assistant_name:o0,assistant_avatar_url:c0}=S0;if(o0||c0)K.setAgents((l0)=>{let O0=l0.default||{id:"default"},B_=o0&&!O0.name,e0=c0&&!O0.avatar_url;if(!B_&&!e0)return l0;return{...l0,["default"]:{...O0,...B_?{name:o0}:{},...e0?{avatar_url:c0}:{}}}});let{user_name:d0,user_avatar_url:r0,user_avatar_background:Q_}=S0;if(d0||r0||Q_)K.setUserProfile((t0)=>{let l0=d0&&!t0.name,O0=r0&&!t0.avatar_url,B_=Q_&&!t0.avatar_background;if(!l0&&!O0&&!B_)return t0;return{...t0,...l0?{name:d0}:{},...O0?{avatar_url:r0}:{},...B_?{avatar_background:Q_}:{}}})},[K.setAgents,K.setUserProfile])}),Q0=Sq({environment:{isRenameBranchFormOpen:K.isRenameBranchFormOpen,renameBranchNameInputRef:K.renameBranchNameInputRef,appShellRef:K.appShellRef,setIsWebAppMode:K.setIsWebAppMode,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,btwSession:K.btwSession,agents:K.agents,agentsRef:K.agentsRef,currentChatJid:j,activeChatJidRef:K.activeChatJidRef,userProfile:K.userProfile,userProfileRef:K.userProfileRef,brandingRef:K.brandingRef,panePopoutMode:Z},composeReferences:{setIntentToast:K.setIntentToast,intentToastTimerRef:K.intentToastTimerRef,editorOpen:_0.editorState.editorOpen,openEditor:_0.editorState.openEditor,resolvePane:(S0)=>Y_.resolve(S0),tabStripActiveId:_0.editorState.tabStripActiveId,setFileRefs:K.setFileRefs,setFolderRefs:K.setFolderRefs,setMessageRefs:K.setMessageRefs,currentChatJid:j,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen,setCurrentHashtag:K.setCurrentHashtag,setSearchQuery:K.setSearchQuery,setSearchOpen:K.setSearchOpen,navigate:$,chatOnlyMode:G,getThread:XM,setPosts:Y0.setPosts},agentActivity:{lastActivityTtlMs:hX,lastActivityTimerRef:K.lastActivityTimerRef,lastActivityTokenRef:K.lastActivityTokenRef,lastAgentEventRef:R,lastSilenceNoticeRef:f,isAgentRunningRef:v,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:$0,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:V0,steerQueuedTurnIdRef:K0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,thoughtExpandedRef:X0,draftExpandedRef:F0,setCurrentTurnId:z,setSteerQueuedTurnId:I,currentTurnIdRefForPanel:V0,setAgentThoughtVisibility:fB,getAgentThought:PB,setAgentThought:x,setAgentDraft:M},chatPaneRuntime:{isAgentTurnActive:K.isAgentTurnActive,steerQueuedTurnId:y,currentTurnId:O,steerQueuedTurnIdRef:K0,setSteerQueuedTurnId:I,agentStatus:E,agentDraft:H,agentPlan:J,agentThought:T,pendingRequest:A,pendingRequestRef:$0,followupQueueItems:K.followupQueueItems,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,contextUsage:K.contextUsage,isAgentRunningRef:v,wasAgentActiveRef:K.wasAgentActiveRef,draftBufferRef:l,thoughtBufferRef:h,lastAgentEventRef:R,lastSilenceNoticeRef:f,lastAgentResponseRef:K.lastAgentResponseRef,currentTurnIdRef:V0,thoughtExpandedRef:X0,draftExpandedRef:F0,agentStatusRef:K.agentStatusRef,silentRecoveryRef:K.silentRecoveryRef,setIsAgentTurnActive:K.setIsAgentTurnActive,setAgentStatus:D,setAgentDraft:M,setAgentPlan:W,setAgentThought:x,setPendingRequest:k,setCurrentTurnId:z,setFollowupQueueItems:K.setFollowupQueueItems,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setContextUsage:K.setContextUsage,lastNotifiedIdRef:K.lastNotifiedIdRef,agentsRef:K.agentsRef,notify:K.notify,shouldNotifyLocallyForChat:K.shouldNotifyLocallyForChat},recovery:{isAgentRunningRef:v,lastSilenceNoticeRef:f,lastAgentEventRef:R,currentTurnIdRef:V0,thoughtExpandedRef:X0,draftExpandedRef:F0,draftBufferRef:l,thoughtBufferRef:h,pendingRequestRef:$0,lastAgentResponseRef:K.lastAgentResponseRef,agentStatusRef:K.agentStatusRef,stalledPostIdRef:E0,scrollToBottomRef:Y0.scrollToBottomRef,setCurrentTurnId:z,setAgentDraft:M,setAgentPlan:W,setAgentThought:x,setPendingRequest:k,setAgentStatus:D,setPosts:Y0.setPosts,dedupePosts:D6},viewState:{viewStateRef:K.viewStateRef,currentHashtag:K.currentHashtag,searchQuery:K.searchQuery,searchOpen:K.searchOpen},removeFileRefRef:_0.removeFileRefRef}),J0=vX({appShellRef:K.appShellRef,sidebarWidthRef:K.sidebarWidthRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef}),{chatRefreshLifecycle:s,timelineViewActions:j0,isComposeBoxAgentActive:z0,followupActions:C0,sidepanelActions:h0,branchPaneActions:n0}=KB({routeState:{currentChatJid:j,currentRootChatJid:K.currentRootChatJid,chatOnlyMode:G,navigate:$,branchLoaderMode:L,branchLoaderSourceChatJid:V,isWebAppMode:K.isWebAppMode},searchState:{currentHashtag:K.currentHashtag,setCurrentHashtag:K.setCurrentHashtag,searchQuery:K.searchQuery,setSearchQuery:K.setSearchQuery,searchOpen:K.searchOpen,setSearchOpen:K.setSearchOpen,searchScope:K.searchScope,setSearchScope:K.setSearchScope},shellState:{activeChatAgents:K.activeChatAgents,currentChatBranches:K.currentChatBranches,currentBranchRecord:K.currentBranchRecord,contextUsage:K.contextUsage,activeModel:K.activeModel,activeThinkingLevel:K.activeThinkingLevel,supportsThinking:K.supportsThinking,activeModelUsage:K.activeModelUsage,connectionStatus:K.connectionStatus,notificationsEnabled:K.notificationsEnabled,notificationPermission:K.notificationPermission,workspaceOpen:K.workspaceOpen,setWorkspaceOpen:K.setWorkspaceOpen,userProfile:K.userProfile,agents:K.agents,removingPostIds:K.removingPostIds,btwSession:K.btwSession},timeline:Y0,interaction:Q0,paneRuntime:_0.paneRuntime,refs:{activeChatJidRef:K.activeChatJidRef,queueRefreshGenRef:K.queueRefreshGenRef,dismissedQueueRowIdsRef:K.dismissedQueueRowIdsRef,wasAgentActiveRef:K.wasAgentActiveRef,viewStateRef:K.viewStateRef,agentStatusRef:K.agentStatusRef,pendingRequestRef:$0,thoughtBufferRef:h,draftBufferRef:l,previewResyncPendingRef:n,previewResyncGenerationRef:b,isAgentRunningRef:v,currentTurnIdRef:V0,silentRecoveryRef:K.silentRecoveryRef,lastAgentEventRef:R,lastSilenceNoticeRef:f,staleUiVersionRef:K.staleUiVersionRef,staleUiReloadScheduledRef:K.staleUiReloadScheduledRef,hasConnectedOnceRef:K.hasConnectedOnceRef,sidebarWidthRef:K.sidebarWidthRef,appShellRef:K.appShellRef,agentsRef:K.agentsRef,paneStateOwnerChatJidRef:K.paneStateOwnerChatJidRef,chatPaneStateByChatRef:K.chatPaneStateByChatRef,dismissedLiveWidgetKeysRef:K.dismissedLiveWidgetKeysRef,draftThrottleRef:K.draftThrottleRef,thoughtThrottleRef:K.thoughtThrottleRef,followupQueueItemsRef:K.followupQueueItemsRef,lastAgentResponseRef:K.lastAgentResponseRef,thoughtExpandedRef:X0,draftExpandedRef:F0,steerQueuedTurnIdRef:K0,btwAbortRef:K.btwAbortRef,renameBranchInFlightRef:K.renameBranchInFlightRef,renameBranchLockUntilRef:K.renameBranchLockUntilRef,editorWidthRef:K.editorWidthRef,dockHeightRef:K.dockHeightRef},setters:{setFollowupQueueItems:K.setFollowupQueueItems,setContextUsage:K.setContextUsage,setExtensionStatusPanels:K.setExtensionStatusPanels,setPendingExtensionPanelActions:K.setPendingExtensionPanelActions,setExtensionWorkingState:K.setExtensionWorkingState,setAgentStatus:D,setAgentDraft:M,setAgentPlan:W,setAgentThought:x,setPendingRequest:k,setConnectionStatus:K.setConnectionStatus,setStateAccessFailed:K.setStateAccessFailed,setAgents:K.setAgents,setUserProfile:K.setUserProfile,setActiveChatAgents:K.setActiveChatAgents,setCurrentChatBranches:K.setCurrentChatBranches,setActiveModel:K.setActiveModel,setActiveThinkingLevel:K.setActiveThinkingLevel,setSupportsThinking:K.setSupportsThinking,setActiveModelUsage:K.setActiveModelUsage,setAgentModelsPayload:K.setAgentModelsPayload,setHasLoadedAgentModels:K.setHasLoadedAgentModels,setHasMore:Y0.setHasMore,setFloatingWidget:K.setFloatingWidget,setSteerQueuedTurnId:I,setRemovingPostIds:K.setRemovingPostIds,setBtwSession:K.setBtwSession,setWorkspaceOpen:K.setWorkspaceOpen,setRenameBranchNameDraft:K.setRenameBranchNameDraft,setIsRenameBranchFormOpen:K.setIsRenameBranchFormOpen,setIsRenamingBranch:K.setIsRenamingBranch},services:{searchPosts:vy,deletePost:my,getAgentQueueState:_M,getAgentContext:hy,getAutoresearchStatus:py,getAgentStatus:ly,getAgents:cy,getAgentModels:dy,getActiveChatAgents:iy,getChatBranches:oy,getTimeline:YM,stopAutoresearch:ry,dismissAutoresearch:ny,streamSidePrompt:GM,sendAgentMessage:LM,renameChatBranch:sy,pruneChatBranch:ay,purgeChatBranch:ty,restoreChatBranch:ey,forkChatBranch:KM,createRootChatSession:VM,steerAgentQueueItem:$M,removeAgentQueueItem:jM,getAgentThought:PB,setAgentThoughtVisibility:fB,silenceRefreshMs:lX,silenceWarningMs:mX,silenceFinalizeMs:cX,isCompactionStatus:z$,currentAppAssetVersion:by,tabStoreHasUnsaved:()=>$_.hasUnsaved(),agentStatus:E,isAgentTurnActive:K.isAgentTurnActive,openEditor:_0.editorState.openEditor,activateTab:_0.editorState.handleTabActivate,tabStripActiveId:_0.editorState.tabStripActiveId,terminalTabPath:X6,resolveTab:(S0)=>$_.get(S0),closeTab:_0.editorState.handleTabClose,editorOpen:_0.editorState.editorOpen},helpers:{getFormLock:uV,readStoredNumber:z4}});u(()=>{return YB({timelineRef:K.timelineRef,activeChatAgents:K.activeChatAgents,currentChatJid:j,onSwitch:(S0)=>n0.handleBranchPickerChange(S0),isIOSDevice:E5,isLikelySafari:l8})},[K.timelineRef,K.activeChatAgents,j,n0.handleBranchPickerChange]);let G_=Z0(()=>CB({panePopoutMode:Z,modelsLoaded:K.hasLoadedAgentModels,modelPayload:K.agentModelsPayload,providerMissingDismissed:Q}),[Z,K.hasLoadedAgentModels,K.agentModelsPayload,Q]),m0=P(()=>{KL()},[]),a0=P(()=>{q(!0),L_(fj,"true")},[]);return u(()=>{if(!Z||typeof document>"u")return;document.title=lV(Y,_0.paneRuntime.activePaneTab,X)},[_0.paneRuntime.activePaneTab,Y,Z,X]),u(()=>{if(typeof window>"u")return;let S0=(o0)=>{IB(o0,{currentChatJid:j,openEditor:_0.editorState.openEditor,popOutPane:n0.handlePopOutPane,showIntentToast:Q0.composeReferenceActions.showIntentToast})};return window.addEventListener("piclaw-extension-ui:request",S0),()=>{window.removeEventListener("piclaw-extension-ui:request",S0)}},[n0.handlePopOutPane,j,Q0.composeReferenceActions.showIntentToast,_0.editorState.openEditor]),PV(eV({routeState:{branchLoaderMode:L,panePopoutMode:Z,currentChatJid:j,chatOnlyMode:G,panePopoutPath:X},paneRuntime:_0.paneRuntime,splitters:J0,orchestration:{branchPaneActions:n0,timelineViewActions:j0,sidepanelActions:h0,followupActions:C0,chatRefreshLifecycle:s,isComposeBoxAgentActive:z0},interaction:Q0,timeline:Y0,surface:{...K,oobePanelState:G_,composePrefillRequest:B,requestComposePrefill:U,handleOobeSetupProvider:m0,handleOobeShowModelPicker:m0,handleOobeOpenWorkspace:m0,handleDismissProviderMissingOobe:a0},editorState:_0.editorState,agentState:{agentStatus:E,agentDraft:H,agentPlan:J,agentThought:T,pendingRequest:A,currentTurnId:O,steerQueuedTurnId:y,setPendingRequest:k,pendingRequestRef:$0,isCompactionStatus:z$},helpers:{formatBranchPickerLabel:t2,isIOSDevice:E5,terminalTabPath:X6}}))}function QM(){let{locationParams:_,navigate:$}=qL();return F`<${qM} locationParams=${_} navigate=${$} />`}var n8=document.getElementById("app");if(typeof window<"u")window.__PICLAW_APP_BOOTED__=!1;if(n8){if(Q$(null,n8),n8.replaceChildren(),Q$(F`<${QM} />`,n8),typeof window<"u")window.__PICLAW_APP_BOOTED__=!0}

//# debugId=2E75266E3C6D0CD064756E2164756E21
//# sourceMappingURL=app.bundle.js.map
