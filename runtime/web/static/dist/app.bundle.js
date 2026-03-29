var kY=Object.defineProperty;var MY=(_)=>_;function IY(_,$){this[_]=MY.bind(null,$)}var xY=(_,$)=>{for(var j in $)kY(_,j,{get:$[j],enumerable:!0,configurable:!0,set:IY.bind($,j)})};var H8,B1,q2,TY,I4,r3,K2,N2,G2,M6,O6,A6,X2,W8={},F8=[],CY=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,J8=Array.isArray;function G4(_,$){for(var j in $)_[j]=$[j];return _}function I6(_){_&&_.parentNode&&_.parentNode.removeChild(_)}function O8(_,$,j){var Q,Z,Y,q={};for(Y in $)Y=="key"?Q=$[Y]:Y=="ref"?Z=$[Y]:q[Y]=$[Y];if(arguments.length>2&&(q.children=arguments.length>3?H8.call(arguments,2):j),typeof _=="function"&&_.defaultProps!=null)for(Y in _.defaultProps)q[Y]===void 0&&(q[Y]=_.defaultProps[Y]);return L8(_,q,Q,Z,null)}function L8(_,$,j,Q,Z){var Y={type:_,props:$,key:j,ref:Q,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:Z==null?++q2:Z,__i:-1,__u:0};return Z==null&&B1.vnode!=null&&B1.vnode(Y),Y}function A8(_){return _.children}function G5(_,$){this.props=_,this.context=$}function X5(_,$){if($==null)return _.__?X5(_.__,_.__i+1):null;for(var j;$<_.__k.length;$++)if((j=_.__k[$])!=null&&j.__e!=null)return j.__e;return typeof _.type=="function"?X5(_):null}function PY(_){if(_.__P&&_.__d){var $=_.__v,j=$.__e,Q=[],Z=[],Y=G4({},$);Y.__v=$.__v+1,B1.vnode&&B1.vnode(Y),x6(_.__P,Y,$,_.__n,_.__P.namespaceURI,32&$.__u?[j]:null,Q,j==null?X5($):j,!!(32&$.__u),Z),Y.__v=$.__v,Y.__.__k[Y.__i]=Y,B2(Q,Y,Z),$.__e=$.__=null,Y.__e!=j&&V2(Y)}}function V2(_){if((_=_.__)!=null&&_.__c!=null)return _.__e=_.__c.base=null,_.__k.some(function($){if($!=null&&$.__e!=null)return _.__e=_.__c.base=$.__e}),V2(_)}function D6(_){(!_.__d&&(_.__d=!0)&&I4.push(_)&&!z8.__r++||r3!=B1.debounceRendering)&&((r3=B1.debounceRendering)||K2)(z8)}function z8(){try{for(var _,$=1;I4.length;)I4.length>$&&I4.sort(N2),_=I4.shift(),$=I4.length,PY(_)}finally{I4.length=z8.__r=0}}function U2(_,$,j,Q,Z,Y,q,K,N,G,X){var V,U,B,J,A,O,F,D=Q&&Q.__k||F8,E=$.length;for(N=yY(j,$,D,N,E),V=0;V<E;V++)(B=j.__k[V])!=null&&(U=B.__i!=-1&&D[B.__i]||W8,B.__i=V,O=x6(_,B,U,Z,Y,q,K,N,G,X),J=B.__e,B.ref&&U.ref!=B.ref&&(U.ref&&T6(U.ref,null,B),X.push(B.ref,B.__c||J,B)),A==null&&J!=null&&(A=J),(F=!!(4&B.__u))||U.__k===B.__k?N=L2(B,N,_,F):typeof B.type=="function"&&O!==void 0?N=O:J&&(N=J.nextSibling),B.__u&=-7);return j.__e=A,N}function yY(_,$,j,Q,Z){var Y,q,K,N,G,X=j.length,V=X,U=0;for(_.__k=Array(Z),Y=0;Y<Z;Y++)(q=$[Y])!=null&&typeof q!="boolean"&&typeof q!="function"?(typeof q=="string"||typeof q=="number"||typeof q=="bigint"||q.constructor==String?q=_.__k[Y]=L8(null,q,null,null,null):J8(q)?q=_.__k[Y]=L8(A8,{children:q},null,null,null):q.constructor===void 0&&q.__b>0?q=_.__k[Y]=L8(q.type,q.props,q.key,q.ref?q.ref:null,q.__v):_.__k[Y]=q,N=Y+U,q.__=_,q.__b=_.__b+1,K=null,(G=q.__i=SY(q,j,N,V))!=-1&&(V--,(K=j[G])&&(K.__u|=2)),K==null||K.__v==null?(G==-1&&(Z>X?U--:Z<X&&U++),typeof q.type!="function"&&(q.__u|=4)):G!=N&&(G==N-1?U--:G==N+1?U++:(G>N?U--:U++,q.__u|=4))):_.__k[Y]=null;if(V)for(Y=0;Y<X;Y++)(K=j[Y])!=null&&(2&K.__u)==0&&(K.__e==Q&&(Q=X5(K)),F2(K,K));return Q}function L2(_,$,j,Q){var Z,Y;if(typeof _.type=="function"){for(Z=_.__k,Y=0;Z&&Y<Z.length;Y++)Z[Y]&&(Z[Y].__=_,$=L2(Z[Y],$,j,Q));return $}_.__e!=$&&(Q&&($&&_.type&&!$.parentNode&&($=X5(_)),j.insertBefore(_.__e,$||null)),$=_.__e);do $=$&&$.nextSibling;while($!=null&&$.nodeType==8);return $}function SY(_,$,j,Q){var Z,Y,q,K=_.key,N=_.type,G=$[j],X=G!=null&&(2&G.__u)==0;if(G===null&&K==null||X&&K==G.key&&N==G.type)return j;if(Q>(X?1:0)){for(Z=j-1,Y=j+1;Z>=0||Y<$.length;)if((G=$[q=Z>=0?Z--:Y++])!=null&&(2&G.__u)==0&&K==G.key&&N==G.type)return q}return-1}function o3(_,$,j){$[0]=="-"?_.setProperty($,j==null?"":j):_[$]=j==null?"":typeof j!="number"||CY.test($)?j:j+"px"}function U8(_,$,j,Q,Z){var Y,q;_:if($=="style")if(typeof j=="string")_.style.cssText=j;else{if(typeof Q=="string"&&(_.style.cssText=Q=""),Q)for($ in Q)j&&$ in j||o3(_.style,$,"");if(j)for($ in j)Q&&j[$]==Q[$]||o3(_.style,$,j[$])}else if($[0]=="o"&&$[1]=="n")Y=$!=($=$.replace(G2,"$1")),q=$.toLowerCase(),$=q in _||$=="onFocusOut"||$=="onFocusIn"?q.slice(2):$.slice(2),_.l||(_.l={}),_.l[$+Y]=j,j?Q?j.u=Q.u:(j.u=M6,_.addEventListener($,Y?A6:O6,Y)):_.removeEventListener($,Y?A6:O6,Y);else{if(Z=="http://www.w3.org/2000/svg")$=$.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if($!="width"&&$!="height"&&$!="href"&&$!="list"&&$!="form"&&$!="tabIndex"&&$!="download"&&$!="rowSpan"&&$!="colSpan"&&$!="role"&&$!="popover"&&$ in _)try{_[$]=j==null?"":j;break _}catch(K){}typeof j=="function"||(j==null||j===!1&&$[4]!="-"?_.removeAttribute($):_.setAttribute($,$=="popover"&&j==1?"":j))}}function s3(_){return function($){if(this.l){var j=this.l[$.type+_];if($.t==null)$.t=M6++;else if($.t<j.u)return;return j(B1.event?B1.event($):$)}}}function x6(_,$,j,Q,Z,Y,q,K,N,G){var X,V,U,B,J,A,O,F,D,E,g,u,l,o,P,I=$.type;if($.constructor!==void 0)return null;128&j.__u&&(N=!!(32&j.__u),Y=[K=$.__e=j.__e]),(X=B1.__b)&&X($);_:if(typeof I=="function")try{if(F=$.props,D=I.prototype&&I.prototype.render,E=(X=I.contextType)&&Q[X.__c],g=X?E?E.props.value:X.__:Q,j.__c?O=(V=$.__c=j.__c).__=V.__E:(D?$.__c=V=new I(F,g):($.__c=V=new G5(F,g),V.constructor=I,V.render=RY),E&&E.sub(V),V.state||(V.state={}),V.__n=Q,U=V.__d=!0,V.__h=[],V._sb=[]),D&&V.__s==null&&(V.__s=V.state),D&&I.getDerivedStateFromProps!=null&&(V.__s==V.state&&(V.__s=G4({},V.__s)),G4(V.__s,I.getDerivedStateFromProps(F,V.__s))),B=V.props,J=V.state,V.__v=$,U)D&&I.getDerivedStateFromProps==null&&V.componentWillMount!=null&&V.componentWillMount(),D&&V.componentDidMount!=null&&V.__h.push(V.componentDidMount);else{if(D&&I.getDerivedStateFromProps==null&&F!==B&&V.componentWillReceiveProps!=null&&V.componentWillReceiveProps(F,g),$.__v==j.__v||!V.__e&&V.shouldComponentUpdate!=null&&V.shouldComponentUpdate(F,V.__s,g)===!1){$.__v!=j.__v&&(V.props=F,V.state=V.__s,V.__d=!1),$.__e=j.__e,$.__k=j.__k,$.__k.some(function(z){z&&(z.__=$)}),F8.push.apply(V.__h,V._sb),V._sb=[],V.__h.length&&q.push(V);break _}V.componentWillUpdate!=null&&V.componentWillUpdate(F,V.__s,g),D&&V.componentDidUpdate!=null&&V.__h.push(function(){V.componentDidUpdate(B,J,A)})}if(V.context=g,V.props=F,V.__P=_,V.__e=!1,u=B1.__r,l=0,D)V.state=V.__s,V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),F8.push.apply(V.__h,V._sb),V._sb=[];else do V.__d=!1,u&&u($),X=V.render(V.props,V.state,V.context),V.state=V.__s;while(V.__d&&++l<25);V.state=V.__s,V.getChildContext!=null&&(Q=G4(G4({},Q),V.getChildContext())),D&&!U&&V.getSnapshotBeforeUpdate!=null&&(A=V.getSnapshotBeforeUpdate(B,J)),o=X!=null&&X.type===A8&&X.key==null?W2(X.props.children):X,K=U2(_,J8(o)?o:[o],$,j,Q,Z,Y,q,K,N,G),V.base=$.__e,$.__u&=-161,V.__h.length&&q.push(V),O&&(V.__E=V.__=null)}catch(z){if($.__v=null,N||Y!=null)if(z.then){for($.__u|=N?160:128;K&&K.nodeType==8&&K.nextSibling;)K=K.nextSibling;Y[Y.indexOf(K)]=null,$.__e=K}else{for(P=Y.length;P--;)I6(Y[P]);E6($)}else $.__e=j.__e,$.__k=j.__k,z.then||E6($);B1.__e(z,$,j)}else Y==null&&$.__v==j.__v?($.__k=j.__k,$.__e=j.__e):K=$.__e=wY(j.__e,$,j,Q,Z,Y,q,N,G);return(X=B1.diffed)&&X($),128&$.__u?void 0:K}function E6(_){_&&(_.__c&&(_.__c.__e=!0),_.__k&&_.__k.some(E6))}function B2(_,$,j){for(var Q=0;Q<j.length;Q++)T6(j[Q],j[++Q],j[++Q]);B1.__c&&B1.__c($,_),_.some(function(Z){try{_=Z.__h,Z.__h=[],_.some(function(Y){Y.call(Z)})}catch(Y){B1.__e(Y,Z.__v)}})}function W2(_){return typeof _!="object"||_==null||_.__b>0?_:J8(_)?_.map(W2):G4({},_)}function wY(_,$,j,Q,Z,Y,q,K,N){var G,X,V,U,B,J,A,O=j.props||W8,F=$.props,D=$.type;if(D=="svg"?Z="http://www.w3.org/2000/svg":D=="math"?Z="http://www.w3.org/1998/Math/MathML":Z||(Z="http://www.w3.org/1999/xhtml"),Y!=null){for(G=0;G<Y.length;G++)if((B=Y[G])&&"setAttribute"in B==!!D&&(D?B.localName==D:B.nodeType==3)){_=B,Y[G]=null;break}}if(_==null){if(D==null)return document.createTextNode(F);_=document.createElementNS(Z,D,F.is&&F),K&&(B1.__m&&B1.__m($,Y),K=!1),Y=null}if(D==null)O===F||K&&_.data==F||(_.data=F);else{if(Y=Y&&H8.call(_.childNodes),!K&&Y!=null)for(O={},G=0;G<_.attributes.length;G++)O[(B=_.attributes[G]).name]=B.value;for(G in O)B=O[G],G=="dangerouslySetInnerHTML"?V=B:G=="children"||(G in F)||G=="value"&&("defaultValue"in F)||G=="checked"&&("defaultChecked"in F)||U8(_,G,null,B,Z);for(G in F)B=F[G],G=="children"?U=B:G=="dangerouslySetInnerHTML"?X=B:G=="value"?J=B:G=="checked"?A=B:K&&typeof B!="function"||O[G]===B||U8(_,G,B,O[G],Z);if(X)K||V&&(X.__html==V.__html||X.__html==_.innerHTML)||(_.innerHTML=X.__html),$.__k=[];else if(V&&(_.innerHTML=""),U2($.type=="template"?_.content:_,J8(U)?U:[U],$,j,Q,D=="foreignObject"?"http://www.w3.org/1999/xhtml":Z,Y,q,Y?Y[0]:j.__k&&X5(j,0),K,N),Y!=null)for(G=Y.length;G--;)I6(Y[G]);K||(G="value",D=="progress"&&J==null?_.removeAttribute("value"):J!=null&&(J!==_[G]||D=="progress"&&!J||D=="option"&&J!=O[G])&&U8(_,G,J,O[G],Z),G="checked",A!=null&&A!=_[G]&&U8(_,G,A,O[G],Z))}return _}function T6(_,$,j){try{if(typeof _=="function"){var Q=typeof _.__u=="function";Q&&_.__u(),Q&&$==null||(_.__u=_($))}else _.current=$}catch(Z){B1.__e(Z,j)}}function F2(_,$,j){var Q,Z;if(B1.unmount&&B1.unmount(_),(Q=_.ref)&&(Q.current&&Q.current!=_.__e||T6(Q,null,$)),(Q=_.__c)!=null){if(Q.componentWillUnmount)try{Q.componentWillUnmount()}catch(Y){B1.__e(Y,$)}Q.base=Q.__P=null}if(Q=_.__k)for(Z=0;Z<Q.length;Z++)Q[Z]&&F2(Q[Z],$,j||typeof _.type!="function");j||I6(_.__e),_.__c=_.__=_.__e=void 0}function RY(_,$,j){return this.constructor(_,j)}function T4(_,$,j){var Q,Z,Y,q;$==document&&($=document.documentElement),B1.__&&B1.__(_,$),Z=(Q=typeof j=="function")?null:j&&j.__k||$.__k,Y=[],q=[],x6($,_=(!Q&&j||$).__k=O8(A8,null,[_]),Z||W8,W8,$.namespaceURI,!Q&&j?[j]:Z?null:$.firstChild?H8.call($.childNodes):null,Y,!Q&&j?j:Z?Z.__e:$.firstChild,Q,q),B2(Y,_,q)}function z2(_){function $(j){var Q,Z;return this.getChildContext||(Q=new Set,(Z={})[$.__c]=this,this.getChildContext=function(){return Z},this.componentWillUnmount=function(){Q=null},this.shouldComponentUpdate=function(Y){this.props.value!=Y.value&&Q.forEach(function(q){q.__e=!0,D6(q)})},this.sub=function(Y){Q.add(Y);var q=Y.componentWillUnmount;Y.componentWillUnmount=function(){Q&&Q.delete(Y),q&&q.call(Y)}}),j.children}return $.__c="__cC"+X2++,$.__=_,$.Provider=$.__l=($.Consumer=function(j,Q){return j.children(Q)}).contextType=$,$}H8=F8.slice,B1={__e:function(_,$,j,Q){for(var Z,Y,q;$=$.__;)if((Z=$.__c)&&!Z.__)try{if((Y=Z.constructor)&&Y.getDerivedStateFromError!=null&&(Z.setState(Y.getDerivedStateFromError(_)),q=Z.__d),Z.componentDidCatch!=null&&(Z.componentDidCatch(_,Q||{}),q=Z.__d),q)return Z.__E=Z}catch(K){_=K}throw _}},q2=0,TY=function(_){return _!=null&&_.constructor===void 0},G5.prototype.setState=function(_,$){var j;j=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=G4({},this.state),typeof _=="function"&&(_=_(G4({},j),this.props)),_&&G4(j,_),_!=null&&this.__v&&($&&this._sb.push($),D6(this))},G5.prototype.forceUpdate=function(_){this.__v&&(this.__e=!0,_&&this.__h.push(_),D6(this))},G5.prototype.render=A8,I4=[],K2=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,N2=function(_,$){return _.__v.__b-$.__v.__b},z8.__r=0,G2=/(PointerCapture)$|Capture$/i,M6=0,O6=s3(!1),A6=s3(!0),X2=0;var x4,L1,J6,a3,V5=0,H2=[],A1=B1,t3=A1.__b,e3=A1.__r,_2=A1.diffed,$2=A1.__c,j2=A1.unmount,Q2=A1.__;function U5(_,$){A1.__h&&A1.__h(L1,_,V5||$),V5=0;var j=L1.__H||(L1.__H={__:[],__h:[]});return _>=j.__.length&&j.__.push({}),j.__[_]}function v(_){return V5=1,C6(E2,_)}function C6(_,$,j){var Q=U5(x4++,2);if(Q.t=_,!Q.__c&&(Q.__=[j?j($):E2(void 0,$),function(K){var N=Q.__N?Q.__N[0]:Q.__[0],G=Q.t(N,K);N!==G&&(Q.__N=[G,Q.__[1]],Q.__c.setState({}))}],Q.__c=L1,!L1.__f)){var Z=function(K,N,G){if(!Q.__c.__H)return!0;var X=Q.__c.__H.__.filter(function(U){return U.__c});if(X.every(function(U){return!U.__N}))return!Y||Y.call(this,K,N,G);var V=Q.__c.props!==K;return X.some(function(U){if(U.__N){var B=U.__[0];U.__=U.__N,U.__N=void 0,B!==U.__[0]&&(V=!0)}}),Y&&Y.call(this,K,N,G)||V};L1.__f=!0;var{shouldComponentUpdate:Y,componentWillUpdate:q}=L1;L1.componentWillUpdate=function(K,N,G){if(this.__e){var X=Y;Y=void 0,Z(K,N,G),Y=X}q&&q.call(this,K,N,G)},L1.shouldComponentUpdate=Z}return Q.__N||Q.__}function f(_,$){var j=U5(x4++,3);!A1.__s&&P6(j.__H,$)&&(j.__=_,j.u=$,L1.__H.__h.push(j))}function u5(_,$){var j=U5(x4++,4);!A1.__s&&P6(j.__H,$)&&(j.__=_,j.u=$,L1.__h.push(j))}function x(_){return V5=5,u0(function(){return{current:_}},[])}function J2(_,$,j){V5=6,u5(function(){if(typeof _=="function"){var Q=_($());return function(){_(null),Q&&typeof Q=="function"&&Q()}}if(_)return _.current=$(),function(){return _.current=null}},j==null?j:j.concat(_))}function u0(_,$){var j=U5(x4++,7);return P6(j.__H,$)&&(j.__=_(),j.__H=$,j.__h=_),j.__}function T(_,$){return V5=8,u0(function(){return _},$)}function O2(_){var $=L1.context[_.__c],j=U5(x4++,9);return j.c=_,$?(j.__==null&&(j.__=!0,$.sub(L1)),$.props.value):_.__}function A2(_,$){A1.useDebugValue&&A1.useDebugValue($?$(_):_)}function D2(_){var $=U5(x4++,10),j=v();return $.__=_,L1.componentDidCatch||(L1.componentDidCatch=function(Q,Z){$.__&&$.__(Q,Z),j[1](Q)}),[j[0],function(){j[1](void 0)}]}function uY(){for(var _;_=H2.shift();){var $=_.__H;if(_.__P&&$)try{$.__h.some(B8),$.__h.some(k6),$.__h=[]}catch(j){$.__h=[],A1.__e(j,_.__v)}}}A1.__b=function(_){L1=null,t3&&t3(_)},A1.__=function(_,$){_&&$.__k&&$.__k.__m&&(_.__m=$.__k.__m),Q2&&Q2(_,$)},A1.__r=function(_){e3&&e3(_),x4=0;var $=(L1=_.__c).__H;$&&(J6===L1?($.__h=[],L1.__h=[],$.__.some(function(j){j.__N&&(j.__=j.__N),j.u=j.__N=void 0})):($.__h.some(B8),$.__h.some(k6),$.__h=[],x4=0)),J6=L1},A1.diffed=function(_){_2&&_2(_);var $=_.__c;$&&$.__H&&($.__H.__h.length&&(H2.push($)!==1&&a3===A1.requestAnimationFrame||((a3=A1.requestAnimationFrame)||fY)(uY)),$.__H.__.some(function(j){j.u&&(j.__H=j.u),j.u=void 0})),J6=L1=null},A1.__c=function(_,$){$.some(function(j){try{j.__h.some(B8),j.__h=j.__h.filter(function(Q){return!Q.__||k6(Q)})}catch(Q){$.some(function(Z){Z.__h&&(Z.__h=[])}),$=[],A1.__e(Q,j.__v)}}),$2&&$2(_,$)},A1.unmount=function(_){j2&&j2(_);var $,j=_.__c;j&&j.__H&&(j.__H.__.some(function(Q){try{B8(Q)}catch(Z){$=Z}}),j.__H=void 0,$&&A1.__e($,j.__v))};var Z2=typeof requestAnimationFrame=="function";function fY(_){var $,j=function(){clearTimeout(Q),Z2&&cancelAnimationFrame($),setTimeout(_)},Q=setTimeout(j,35);Z2&&($=requestAnimationFrame(j))}function B8(_){var $=L1,j=_.__c;typeof j=="function"&&(_.__c=void 0,j()),L1=$}function k6(_){var $=L1;_.__c=_.__(),L1=$}function P6(_,$){return!_||_.length!==$.length||$.some(function(j,Q){return j!==_[Q]})}function E2(_,$){return typeof $=="function"?$(_):$}var k2=function(_,$,j,Q){var Z;$[0]=0;for(var Y=1;Y<$.length;Y++){var q=$[Y++],K=$[Y]?($[0]|=q?1:2,j[$[Y++]]):$[++Y];q===3?Q[0]=K:q===4?Q[1]=Object.assign(Q[1]||{},K):q===5?(Q[1]=Q[1]||{})[$[++Y]]=K:q===6?Q[1][$[++Y]]+=K+"":q?(Z=_.apply(K,k2(_,K,j,["",null])),Q.push(Z),K[0]?$[0]|=2:($[Y-2]=0,$[Y]=Z)):Q.push(K)}return Q},Y2=new Map;function vY(_){var $=Y2.get(this);return $||($=new Map,Y2.set(this,$)),($=k2(this,$.get(_)||($.set(_,$=function(j){for(var Q,Z,Y=1,q="",K="",N=[0],G=function(U){Y===1&&(U||(q=q.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?N.push(0,U,q):Y===3&&(U||q)?(N.push(3,U,q),Y=2):Y===2&&q==="..."&&U?N.push(4,U,0):Y===2&&q&&!U?N.push(5,0,!0,q):Y>=5&&((q||!U&&Y===5)&&(N.push(Y,0,q,Z),Y=6),U&&(N.push(Y,U,0,Z),Y=6)),q=""},X=0;X<j.length;X++){X&&(Y===1&&G(),G(X));for(var V=0;V<j[X].length;V++)Q=j[X][V],Y===1?Q==="<"?(G(),N=[N],Y=3):q+=Q:Y===4?q==="--"&&Q===">"?(Y=1,q=""):q=Q+q[0]:K?Q===K?K="":q+=Q:Q==='"'||Q==="'"?K=Q:Q===">"?(G(),Y=1):Y&&(Q==="="?(Y=5,Z=q,q=""):Q==="/"&&(Y<5||j[X][V+1]===">")?(G(),Y===3&&(N=N[0]),Y=N,(N=N[0]).push(2,0,Y),Y=0):Q===" "||Q==="\t"||Q===`
`||Q==="\r"?(G(),Y=2):q+=Q),Y===3&&q==="!--"&&(Y=4,N=N[0])}return G(),N}(_)),$),arguments,[])).length>1?$:$[0]}var L=vY.bind(O8);var o1={};xY(o1,{uploadWorkspaceFile:()=>E8,uploadMedia:()=>g6,updateWorkspaceFile:()=>jq,submitAdaptiveCardAction:()=>b6,streamSidePrompt:()=>eY,stopAutoresearch:()=>rY,steerAgentQueueItem:()=>tY,setWorkspaceVisibility:()=>m5,setAgentThoughtVisibility:()=>p6,sendPeerAgentMessage:()=>nY,sendAgentMessage:()=>d4,searchPosts:()=>S6,restoreChatBranch:()=>lY,respondToAgentRequest:()=>D8,renameWorkspaceFile:()=>i6,renameChatBranch:()=>pY,removeAgentQueueItem:()=>aY,pruneChatBranch:()=>cY,moveWorkspaceEntry:()=>r6,getWorkspaceTree:()=>g5,getWorkspaceRawUrl:()=>k8,getWorkspaceFile:()=>b5,getWorkspaceDownloadUrl:()=>M8,getWorkspaceBranch:()=>$q,getTimeline:()=>n4,getThumbnailUrl:()=>c6,getThread:()=>w6,getPostsByHashtag:()=>y6,getMediaUrl:()=>S_,getMediaText:()=>l6,getMediaInfo:()=>L5,getMediaBlob:()=>_q,getChatBranches:()=>hY,getAutoresearchStatus:()=>iY,getAgents:()=>f6,getAgentThought:()=>h6,getAgentStatus:()=>v6,getAgentQueueState:()=>sY,getAgentModels:()=>v5,getAgentContext:()=>dY,getActiveChatAgents:()=>u6,forkChatBranch:()=>f5,dismissAutoresearch:()=>oY,deleteWorkspaceFile:()=>o6,deletePost:()=>R6,createWorkspaceFile:()=>d6,createReply:()=>mY,createPost:()=>bY,attachWorkspaceFile:()=>n6,addToWhitelist:()=>m6,SSEClient:()=>I8});async function a0(_,$={}){let j=await fetch(""+_,{...$,headers:{"Content-Type":"application/json",...$.headers}});if(!j.ok){let Q=await j.json().catch(()=>({error:"Unknown error"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}function M2(_){let $=String(_||"").split(`
`),j="message",Q=[];for(let Y of $)if(Y.startsWith("event:"))j=Y.slice(6).trim()||"message";else if(Y.startsWith("data:"))Q.push(Y.slice(5).trim());let Z=Q.join(`
`);if(!Z)return null;try{return{event:j,data:JSON.parse(Z)}}catch{return{event:j,data:Z}}}async function gY(_,$){if(!_.body)throw Error("Missing event stream body");let j=_.body.getReader(),Q=new TextDecoder,Z="";while(!0){let{value:q,done:K}=await j.read();if(K)break;Z+=Q.decode(q,{stream:!0});let N=Z.split(`

`);Z=N.pop()||"";for(let G of N){let X=M2(G);if(X)$(X.event,X.data)}}Z+=Q.decode();let Y=M2(Z);if(Y)$(Y.event,Y.data)}async function n4(_=10,$=null,j=null){let Q=`/timeline?limit=${_}`;if($)Q+=`&before=${$}`;if(j)Q+=`&chat_jid=${encodeURIComponent(j)}`;return a0(Q)}async function y6(_,$=50,j=0,Q=null){let Z=Q?`&chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/hashtag/${encodeURIComponent(_)}?limit=${$}&offset=${j}${Z}`)}async function S6(_,$=50,j=0,Q=null,Z="current",Y=null){let q=Q?`&chat_jid=${encodeURIComponent(Q)}`:"",K=Z?`&scope=${encodeURIComponent(Z)}`:"",N=Y?`&root_chat_jid=${encodeURIComponent(Y)}`:"";return a0(`/search?q=${encodeURIComponent(_)}&limit=${$}&offset=${j}${q}${K}${N}`)}async function w6(_,$=null){let j=$?`?chat_jid=${encodeURIComponent($)}`:"";return a0(`/thread/${_}${j}`)}async function bY(_,$=[],j=null){let Q=j?`?chat_jid=${encodeURIComponent(j)}`:"";return a0(`/post${Q}`,{method:"POST",body:JSON.stringify({content:_,media_ids:$})})}async function mY(_,$,j=[],Q=null){let Z=Q?`?chat_jid=${encodeURIComponent(Q)}`:"";return a0(`/post/reply${Z}`,{method:"POST",body:JSON.stringify({thread_id:_,content:$,media_ids:j})})}async function R6(_,$=!1,j=null){let Q=j?`&chat_jid=${encodeURIComponent(j)}`:"",Z=`/post/${_}?cascade=${$?"true":"false"}${Q}`;return a0(Z,{method:"DELETE"})}async function d4(_,$,j=null,Q=[],Z=null,Y=null){let q=Y?`?chat_jid=${encodeURIComponent(Y)}`:"",K={content:$,thread_id:j,media_ids:Q};if(Z==="auto"||Z==="queue"||Z==="steer")K.mode=Z;return a0(`/agent/${_}/message${q}`,{method:"POST",body:JSON.stringify(K)})}async function u6(){return a0("/agent/active-chats")}async function hY(_=null,$={}){let j=new URLSearchParams;if(_)j.set("root_chat_jid",String(_));if($?.includeArchived)j.set("include_archived","1");let Q=j.toString()?`?${j.toString()}`:"";return a0(`/agent/branches${Q}`)}async function f5(_,$={}){return a0("/agent/branch-fork",{method:"POST",body:JSON.stringify({source_chat_jid:_,...$?.agentName?{agent_name:$.agentName}:{}})})}async function pY(_,$={}){return a0("/agent/branch-rename",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function cY(_){return a0("/agent/branch-prune",{method:"POST",body:JSON.stringify({chat_jid:_})})}async function lY(_,$={}){return a0("/agent/branch-restore",{method:"POST",body:JSON.stringify({chat_jid:_,...$&&Object.prototype.hasOwnProperty.call($,"agentName")?{agent_name:$.agentName}:{}})})}async function nY(_,$,j,Q="auto",Z={}){let Y={source_chat_jid:_,content:j,mode:Q,...Z?.sourceAgentName?{source_agent_name:Z.sourceAgentName}:{},...Z?.targetBy==="agent_name"?{target_agent_name:$}:{target_chat_jid:$}};return a0("/agent/peer-message",{method:"POST",body:JSON.stringify(Y)})}async function f6(){return a0("/agent/roster")}async function v6(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/status${$}`)}async function dY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/context${$}`)}async function iY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/autoresearch/status${$}`)}async function rY(_=null,$={}){return a0("/agent/autoresearch/stop",{method:"POST",body:JSON.stringify({chat_jid:_||void 0,generate_report:$?.generateReport!==!1})})}async function oY(_=null){return a0("/agent/autoresearch/dismiss",{method:"POST",body:JSON.stringify({chat_jid:_||void 0})})}async function sY(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/queue-state${$}`)}async function aY(_,$=null){let j=await fetch("/agent/queue-remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to remove queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function tY(_,$=null){let j=await fetch("/agent/queue-steer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({row_id:_,chat_jid:$||void 0})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to steer queued item"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function v5(_=null){let $=_?`?chat_jid=${encodeURIComponent(_)}`:"";return a0(`/agent/models${$}`)}async function g6(_){let $=new FormData;$.append("file",_);let j=await fetch("/media/upload",{method:"POST",body:$});if(!j.ok){let Q=await j.json().catch(()=>({error:"Upload failed"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function D8(_,$,j=null){let Q=await fetch("/agent/respond",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({request_id:_,outcome:$,chat_jid:j||void 0})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Failed to respond"}));throw Error(Z.error||`HTTP ${Q.status}`)}return Q.json()}async function b6(_){let $=await fetch("/agent/card-action",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!$.ok){let j=await $.json().catch(()=>({error:"Adaptive Card action failed"}));throw Error(j.error||`HTTP ${$.status}`)}return $.json()}async function eY(_,$={}){let j=await fetch("/agent/side-prompt/stream",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({prompt:_,system_prompt:$.systemPrompt||void 0,chat_jid:$.chatJid||void 0}),signal:$.signal});if(!j.ok){let Y=await j.json().catch(()=>({error:"Side prompt failed"}));throw Error(Y.error||`HTTP ${j.status}`)}let Q=null,Z=null;if(await gY(j,(Y,q)=>{if($.onEvent?.(Y,q),Y==="side_prompt_thinking_delta")$.onThinkingDelta?.(q?.delta||"");else if(Y==="side_prompt_text_delta")$.onTextDelta?.(q?.delta||"");else if(Y==="side_prompt_done")Q=q;else if(Y==="side_prompt_error")Z=q}),Z){let Y=Error(Z?.error||"Side prompt failed");throw Y.payload=Z,Y}return Q}async function m6(_,$){let j=await fetch("/agent/whitelist",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({pattern:_,description:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Failed to add to whitelist"}));throw Error(Q.error||`HTTP ${j.status}`)}return j.json()}async function h6(_,$="thought"){let j=`/agent/thought?turn_id=${encodeURIComponent(_)}&panel=${encodeURIComponent($)}`;return a0(j)}async function p6(_,$,j){return a0("/agent/thought/visibility",{method:"POST",body:JSON.stringify({turn_id:_,panel:$,expanded:Boolean(j)})})}function S_(_){return`/media/${_}`}function c6(_){return`/media/${_}/thumbnail`}async function L5(_){let $=await fetch(`/media/${_}/info`);if(!$.ok)throw Error("Failed to get media info");return $.json()}async function l6(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media text");return $.text()}async function _q(_){let $=await fetch(`/media/${_}`);if(!$.ok)throw Error("Failed to load media blob");return $.blob()}async function g5(_="",$=2,j=!1){let Q=`/workspace/tree?path=${encodeURIComponent(_)}&depth=${$}&show_hidden=${j?"1":"0"}`;return a0(Q)}async function $q(_=""){let $=`/workspace/branch?path=${encodeURIComponent(_||"")}`;return a0($)}async function b5(_,$=20000,j=null){let Q=j?`&mode=${encodeURIComponent(j)}`:"",Z=`/workspace/file?path=${encodeURIComponent(_)}&max=${$}${Q}`;return a0(Z)}async function jq(_,$){return a0("/workspace/file",{method:"PUT",body:JSON.stringify({path:_,content:$})})}async function n6(_){return a0("/workspace/attach",{method:"POST",body:JSON.stringify({path:_})})}async function E8(_,$="",j={}){let Q=new FormData;Q.append("file",_);let Z=new URLSearchParams;if($)Z.set("path",$);if(j.overwrite)Z.set("overwrite","1");let Y=Z.toString(),q=Y?`/workspace/upload?${Y}`:"/workspace/upload",K=await fetch(""+q,{method:"POST",body:Q});if(!K.ok){let N=await K.json().catch(()=>({error:"Upload failed"})),G=Error(N.error||`HTTP ${K.status}`);throw G.status=K.status,G.code=N.code,G}return K.json()}async function d6(_,$,j=""){let Q=await fetch("/workspace/file",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$,content:j})});if(!Q.ok){let Z=await Q.json().catch(()=>({error:"Create failed"})),Y=Error(Z.error||`HTTP ${Q.status}`);throw Y.status=Q.status,Y.code=Z.code,Y}return Q.json()}async function i6(_,$){let j=await fetch("/workspace/rename",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,name:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Rename failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function r6(_,$){let j=await fetch("/workspace/move",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:_,target:$})});if(!j.ok){let Q=await j.json().catch(()=>({error:"Move failed"})),Z=Error(Q.error||`HTTP ${j.status}`);throw Z.status=j.status,Z.code=Q.code,Z}return j.json()}async function o6(_){let $=`/workspace/file?path=${encodeURIComponent(_||"")}`;return a0($,{method:"DELETE"})}async function m5(_,$=!1){return a0("/workspace/visibility",{method:"POST",body:JSON.stringify({visible:Boolean(_),show_hidden:Boolean($)})})}function k8(_){return`/workspace/raw?path=${encodeURIComponent(_)}`}function M8(_,$=!1){return`/workspace/download?${`path=${encodeURIComponent(_||"")}&show_hidden=${$?"1":"0"}`}`}class I8{constructor(_,$,j={}){this.onEvent=_,this.onStatusChange=$,this.chatJid=typeof j?.chatJid==="string"&&j.chatJid.trim()?j.chatJid.trim():null,this.eventSource=null,this.reconnectTimeout=null,this.reconnectDelay=1000,this.status="disconnected",this.reconnectAttempts=0,this.cooldownUntil=0,this.connecting=!1,this.lastActivityAt=0,this.staleCheckTimer=null,this.staleThresholdMs=70000}markActivity(){this.lastActivityAt=Date.now()}clearStaleMonitor(){if(this.staleCheckTimer)clearInterval(this.staleCheckTimer),this.staleCheckTimer=null}startStaleMonitor(){this.clearStaleMonitor(),this.staleCheckTimer=setInterval(()=>{if(this.status!=="connected")return;if(!this.lastActivityAt)return;if(Date.now()-this.lastActivityAt<=this.staleThresholdMs)return;console.warn("SSE connection went stale; forcing reconnect"),this.forceReconnect()},15000)}forceReconnect(){if(this.connecting=!1,this.eventSource)this.eventSource.close(),this.eventSource=null;this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()}connect(){if(this.connecting)return;if(this.eventSource&&this.status==="connected")return;if(this.connecting=!0,this.eventSource)this.eventSource.close();this.clearStaleMonitor();let _=this.chatJid?`?chat_jid=${encodeURIComponent(this.chatJid)}`:"";this.eventSource=new EventSource("/sse/stream"+_);let $=(j)=>{this.eventSource.addEventListener(j,(Q)=>{this.markActivity(),this.onEvent(j,JSON.parse(Q.data))})};this.eventSource.onopen=()=>{this.connecting=!1,this.reconnectDelay=1000,this.reconnectAttempts=0,this.cooldownUntil=0,this.status="connected",this.markActivity(),this.startStaleMonitor(),this.onStatusChange("connected")},this.eventSource.onerror=()=>{this.connecting=!1,this.clearStaleMonitor(),this.status="disconnected",this.onStatusChange("disconnected"),this.reconnectAttempts+=1,this.scheduleReconnect()},this.eventSource.addEventListener("connected",()=>{this.markActivity(),console.log("SSE connected"),this.onEvent("connected",{})}),this.eventSource.addEventListener("heartbeat",()=>{this.markActivity()}),$("new_post"),$("new_reply"),$("agent_response"),$("interaction_updated"),$("interaction_deleted"),$("agent_status"),$("agent_steer_queued"),$("agent_followup_queued"),$("agent_followup_consumed"),$("agent_followup_removed"),$("workspace_update"),$("agent_draft"),$("agent_draft_delta"),$("agent_thought"),$("agent_thought_delta"),$("model_changed"),$("ui_theme"),["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"].forEach($)}scheduleReconnect(){if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout);let _=10,$=60000,j=Date.now();if(this.reconnectAttempts>=_)this.cooldownUntil=Math.max(this.cooldownUntil,j+$),this.reconnectAttempts=0;let Q=Math.max(this.cooldownUntil-j,0),Z=Math.max(this.reconnectDelay,Q);this.reconnectTimeout=setTimeout(()=>{console.log("Reconnecting SSE..."),this.connect()},Z),this.reconnectDelay=Math.min(this.reconnectDelay*2,30000)}reconnectIfNeeded(){let _=Date.now();if(this.status==="connected"){if(this.lastActivityAt&&_-this.lastActivityAt>this.staleThresholdMs)this.forceReconnect();return}if(this.cooldownUntil&&_<this.cooldownUntil)return;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null;this.connect()}disconnect(){if(this.connecting=!1,this.clearStaleMonitor(),this.eventSource)this.eventSource.close(),this.eventSource=null;if(this.reconnectTimeout)clearTimeout(this.reconnectTimeout),this.reconnectTimeout=null}}class I2{extensions=new Map;register(_){this.extensions.set(_.id,_)}unregister(_){this.extensions.delete(_)}resolve(_){let $,j=-1/0;for(let Q of this.extensions.values()){if(Q.placement!=="tabs")continue;if(!Q.canHandle)continue;try{let Z=Q.canHandle(_);if(Z===!1||Z===0)continue;let Y=Z===!0?0:typeof Z==="number"?Z:0;if(Y>j)j=Y,$=Q}catch(Z){console.warn(`[PaneRegistry] canHandle() error for "${Q.id}":`,Z)}}return $}list(){return Array.from(this.extensions.values())}getDockPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="dock")}getTabPanes(){return Array.from(this.extensions.values()).filter((_)=>_.placement==="tabs")}get(_){return this.extensions.get(_)}get size(){return this.extensions.size}}var n0=new I2;var x8=null,s6=null;function Qq(){try{return`/static/dist/editor.bundle.js${new URL(import.meta.url).search||""}`}catch{return"/static/dist/editor.bundle.js"}}function x2(){if(s6)return Promise.resolve(s6);if(!x8)x8=import(Qq()).then((_)=>{return s6=_,_}).catch((_)=>{throw x8=null,_});return x8}class T2{container;context;real=null;disposed=!1;loadingEl;queuedDirtyCb=null;queuedSaveCb=null;queuedCloseCb=null;queuedViewStateCb=null;queuedViewState=null;constructor(_,$){this.container=_,this.context=$,this.loadingEl=document.createElement("div"),this.loadingEl.className="editor-pane",this.loadingEl.innerHTML=`
            <div class="editor-body">
                <div class="editor-status" style="padding: 2em; text-align: center; color: var(--text-secondary);">Loading editor…</div>
            </div>
        `,_.appendChild(this.loadingEl),this.load()}escapeHtml(_){let $=document.createElement("div");return $.textContent=_,$.innerHTML}async load(){try{let _=await x2();if(this.disposed)return;if(this.loadingEl.parentNode)this.loadingEl.remove();if(this.real=new _.StandaloneEditorInstance(this.container,this.context),this.queuedDirtyCb&&this.real.onDirtyChange)this.real.onDirtyChange(this.queuedDirtyCb);if(this.queuedSaveCb&&this.real.onSaveRequest)this.real.onSaveRequest(this.queuedSaveCb);if(this.queuedCloseCb&&this.real.onClose)this.real.onClose(this.queuedCloseCb);if(this.queuedViewStateCb&&typeof this.real.onViewStateChange==="function")this.real.onViewStateChange(this.queuedViewStateCb);if(this.queuedViewState&&typeof this.real.restoreViewState==="function")requestAnimationFrame(()=>this.real?.restoreViewState?.(this.queuedViewState))}catch(_){if(this.disposed)return;console.error("[editor-loader] Failed to load editor bundle:",_),this.loadingEl.querySelector(".editor-status").textContent="Failed to load editor. Check console for details."}}getContent(){return this.real?.getContent()}isDirty(){return this.real?.isDirty()||!1}setContent(_,$){if(this.real?.setContent)this.real.setContent(_,$)}focus(){this.real?.focus()}resize(){this.real?.resize?.()}dispose(){if(this.disposed)return;if(this.disposed=!0,this.real)this.real.dispose(),this.real=null;this.container.innerHTML="",this.queuedDirtyCb=null,this.queuedSaveCb=null,this.queuedCloseCb=null,this.queuedViewStateCb=null}onDirtyChange(_){if(this.queuedDirtyCb=_,this.real?.onDirtyChange)this.real.onDirtyChange(_)}onSaveRequest(_){if(this.queuedSaveCb=_,this.real?.onSaveRequest)this.real.onSaveRequest(_)}onClose(_){if(this.queuedCloseCb=_,this.real?.onClose)this.real.onClose(_)}onViewStateChange(_){this.queuedViewStateCb=_,this.real?.onViewStateChange?.(_)}restoreViewState(_){this.queuedViewState=_,this.real?.restoreViewState?.(_)}getPath(){return this.real?.getPath?.()??this.context.path??""}setPath(_){this.real?.setPath?.(_)}}var a6={id:"editor",label:"Editor",icon:"edit",capabilities:["edit"],placement:"tabs",canHandle(_){if(!_.path)return!1;if(_.mode!=="edit")return!1;return 1},mount(_,$){return new T2(_,$)}};function t6(){x2().catch(()=>{})}var i4="piclaw://terminal";var Zq={yellow:"#9a6700",magenta:"#8250df",cyan:"#1b7c83",brightBlack:"#57606a",brightRed:"#cf222e",brightGreen:"#1a7f37",brightYellow:"#bf8700",brightBlue:"#0550ae",brightMagenta:"#6f42c1",brightCyan:"#0a7b83"},Yq={yellow:"#d29922",magenta:"#bc8cff",cyan:"#39c5cf",brightBlack:"#8b949e",brightRed:"#ff7b72",brightGreen:"#7ee787",brightYellow:"#e3b341",brightBlue:"#79c0ff",brightMagenta:"#d2a8ff",brightCyan:"#56d4dd"},T8=null,e6=null;function qq(_){if(!_)return!1;return _.startsWith("data:application/wasm")||/(^|\/)ghostty-vt\.wasm(?:[?#].*)?$/.test(_)}async function Kq(_){let $=globalThis.fetch?.bind(globalThis);if(!$)return await _();let j=new URL("/static/js/vendor/ghostty-vt.wasm",window.location.origin).href,Q=(Z,Y)=>{let q=Z instanceof Request?Z.url:Z instanceof URL?Z.href:String(Z);if(!qq(q))return $(Z,Y);if(Z instanceof Request)return $(new Request(j,Z));return $(j,Y)};globalThis.fetch=Q;try{return await _()}finally{globalThis.fetch=$}}async function Nq(){let $=await import(new URL("/static/js/vendor/ghostty-web.js",window.location.origin).href);if(!T8)T8=Kq(()=>Promise.resolve($.init?.())).catch((j)=>{throw T8=null,j});return await T8,$}async function Gq(){if(typeof document>"u"||!("fonts"in document)||!document.fonts)return;if(!e6)e6=Promise.allSettled([document.fonts.load('400 13px "FiraCode Nerd Font Mono"'),document.fonts.load('700 13px "FiraCode Nerd Font Mono"'),document.fonts.ready]).then(()=>{return}).catch(()=>{return});await e6}async function Xq(){let _=await fetch("/terminal/session",{method:"GET",credentials:"same-origin"}),$=await _.json().catch(()=>({}));if(!_.ok)throw Error($?.error||`HTTP ${_.status}`);return $}function Vq(_){return`${window.location.protocol==="https:"?"wss:":"ws:"}//${window.location.host}${_}`}function Uq(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function X4(_,$=""){if(typeof document>"u")return $;return getComputedStyle(document.documentElement).getPropertyValue(_)?.trim()||$}function Lq(_,$){if(!_||!_.startsWith("#"))return _;let j=_.slice(1);if(j.length===3)return`#${j[0]}${j[0]}${j[1]}${j[1]}${j[2]}${j[2]}${$}`;if(j.length===6)return`#${j}${$}`;return _}function C2(){let _=Uq(),$=_?Yq:Zq,j=X4("--bg-primary",_?"#000000":"#ffffff"),Q=X4("--text-primary",_?"#e7e9ea":"#0f1419"),Z=X4("--text-secondary",_?"#71767b":"#536471"),Y=X4("--accent-color","#1d9bf0"),q=X4("--danger-color",_?"#ff7b72":"#cf222e"),K=X4("--success-color",_?"#7ee787":"#1a7f37"),N=X4("--bg-hover",_?"#1d1f23":"#e8ebed"),G=X4("--border-color",_?"#2f3336":"#eff3f4"),X=X4("--accent-soft-strong",Lq(Y,_?"47":"33"));return{background:j,foreground:Q,cursor:Y,cursorAccent:j,selectionBackground:X,selectionForeground:Q,black:N,red:q,green:K,yellow:$.yellow,blue:Y,magenta:$.magenta,cyan:$.cyan,white:Q,brightBlack:$.brightBlack,brightRed:$.brightRed,brightGreen:$.brightGreen,brightYellow:$.brightYellow,brightBlue:$.brightBlue,brightMagenta:$.brightMagenta,brightCyan:$.brightCyan,brightWhite:G}}class _${container;disposed=!1;termEl;bodyEl;statusEl;terminal=null;fitAddon=null;socket=null;themeObserver=null;themeChangeListener=null;mediaQuery=null;mediaQueryListener=null;resizeObserver=null;dockResizeListener=null;windowResizeListener=null;resizeFrame=0;lastAppliedThemeSignature=null;lastResizeSignature=null;constructor(_,$){this.container=_,this.termEl=document.createElement("div"),this.termEl.className="terminal-pane-content",this.termEl.setAttribute("tabindex","0"),this.statusEl=document.createElement("span"),this.statusEl.className="terminal-pane-status",this.statusEl.textContent="Loading terminal…",this.bodyEl=document.createElement("div"),this.bodyEl.className="terminal-pane-body",this.bodyEl.innerHTML='<div class="terminal-placeholder">Bootstrapping ghostty-web…</div>',this.termEl.append(this.bodyEl),_.appendChild(this.termEl),this.bootstrapGhostty()}setStatus(_){this.statusEl.textContent=_,this.termEl.dataset.connectionStatus=_,this.termEl.setAttribute("aria-label",`Terminal ${_}`)}getResizeSignature(){try{let _=this.container?.getBoundingClientRect?.(),$=this.bodyEl?.getBoundingClientRect?.(),j=Number.isFinite(_?.width)?_.width:0,Q=Number.isFinite(_?.height)?_.height:0,Z=Number.isFinite($?.width)?$.width:0,Y=Number.isFinite($?.height)?$.height:0;return`${Math.round(j)}x${Math.round(Q)}:${Math.round(Z)}x${Math.round(Y)}`}catch{return"0x0:0x0"}}syncHostLayout(){let _=this.bodyEl.querySelector(".terminal-live-host");if(!(_ instanceof HTMLElement))return;let $=_.firstElementChild;if($ instanceof HTMLElement)$.style.width="100%",$.style.height="100%",$.style.maxWidth="100%",$.style.minWidth="0",$.style.display="block";let j=_.querySelector("canvas");if(j instanceof HTMLElement)j.style.display="block",j.style.maxWidth="none"}scheduleResize(){if(this.disposed)return;let _=this.getResizeSignature();if(this.lastResizeSignature===_)return;if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame);this.resizeFrame=requestAnimationFrame(()=>{this.resizeFrame=0,this.lastResizeSignature=this.getResizeSignature(),this.resize()})}async bootstrapGhostty(){try{let _=await Nq();if(await Gq(),this.disposed)return;this.bodyEl.innerHTML="";let $=document.createElement("div");$.className="terminal-live-host",this.bodyEl.appendChild($);let j=new _.Terminal({cols:120,rows:30,cursorBlink:!0,fontFamily:'FiraCode Nerd Font Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", monospace',fontSize:13,theme:C2()}),Q=null;if(typeof _.FitAddon==="function")Q=new _.FitAddon,j.loadAddon?.(Q);await j.open($),this.syncHostLayout(),j.loadFonts?.(),Q?.observeResize?.(),this.terminal=j,this.fitAddon=Q,this.installThemeSync(),this.installResizeSync(),this.scheduleResize(),await this.connectBackend()}catch(_){if(console.error("[terminal-pane] Failed to bootstrap ghostty-web:",_),this.disposed)return;this.bodyEl.innerHTML='<div class="terminal-placeholder">Terminal failed to load. Check vendored assets and backend wiring.</div>',this.setStatus("Load failed")}}applyTheme(){if(!this.terminal)return;let _=C2(),$=JSON.stringify(_),j=this.lastAppliedThemeSignature!==null&&this.lastAppliedThemeSignature!==$;try{this.termEl.style.backgroundColor=_.background,this.bodyEl.style.backgroundColor=_.background;let Q=this.bodyEl.querySelector(".terminal-live-host");if(Q instanceof HTMLElement)Q.style.backgroundColor=_.background,Q.style.color=_.foreground;let Z=this.bodyEl.querySelector("canvas");if(Z instanceof HTMLElement)Z.style.backgroundColor=_.background,Z.style.color=_.foreground}catch{}try{if(this.terminal.options)this.terminal.options.theme=_}catch{}try{if(j&&this.terminal.reset)this.terminal.reset()}catch{}try{this.terminal.renderer?.setTheme?.(_),this.terminal.renderer?.clear?.()}catch{}try{this.terminal.loadFonts?.()}catch{}try{this.terminal.renderer?.remeasureFont?.()}catch{}try{if(this.terminal.wasmTerm&&this.terminal.renderer?.render)this.terminal.renderer.render(this.terminal.wasmTerm,!0,this.terminal.viewportY||0,this.terminal),this.terminal.renderer.render(this.terminal.wasmTerm,!1,this.terminal.viewportY||0,this.terminal)}catch{}try{this.resize()}catch{}try{if(j&&this.socket?.readyState===WebSocket.OPEN)this.socket.send(JSON.stringify({type:"input",data:"\f"}))}catch{}try{this.terminal.refresh?.()}catch{}this.lastAppliedThemeSignature=$}installThemeSync(){if(typeof window>"u"||typeof document>"u")return;let _=()=>requestAnimationFrame(()=>this.applyTheme());_();let $=()=>_();window.addEventListener("piclaw-theme-change",$),this.themeChangeListener=$;let j=window.matchMedia?.("(prefers-color-scheme: dark)"),Q=()=>_();if(j?.addEventListener)j.addEventListener("change",Q);else if(j?.addListener)j.addListener(Q);this.mediaQuery=j,this.mediaQueryListener=Q;let Z=typeof MutationObserver<"u"?new MutationObserver(()=>_()):null;if(Z?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme","style"]}),document.body)Z?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});this.themeObserver=Z}installResizeSync(){if(typeof window>"u")return;let _=()=>this.scheduleResize(),$=()=>this.scheduleResize();if(window.addEventListener("dock-resize",_),window.addEventListener("resize",$),this.dockResizeListener=_,this.windowResizeListener=$,typeof ResizeObserver<"u"){let j=new ResizeObserver(()=>{if(this.disposed)return;this.scheduleResize()});j.observe(this.container),this.resizeObserver=j}}async connectBackend(){let _=this.terminal;if(!_)return;try{let $=await Xq();if(this.disposed)return;if(!$?.enabled){_.write?.(`Terminal backend unavailable: ${$?.error||"disabled"}\r
`),this.setStatus("Unavailable");return}let j=new WebSocket(Vq($.ws_path||"/terminal/ws"));this.socket=j,this.setStatus("Connecting…"),_.onData?.((Q)=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"input",data:Q}))}),_.onResize?.(({cols:Q,rows:Z})=>{if(j.readyState===WebSocket.OPEN)j.send(JSON.stringify({type:"resize",cols:Q,rows:Z}))}),j.addEventListener("open",()=>{if(this.disposed)return;this.setStatus("Connected"),this.scheduleResize()}),j.addEventListener("message",(Q)=>{if(this.disposed)return;let Z=null;try{Z=JSON.parse(String(Q.data))}catch{Z={type:"output",data:String(Q.data)}}if(Z?.type==="output"&&typeof Z.data==="string"){_.write?.(Z.data);return}if(Z?.type==="exit")_.write?.(`\r
[terminal exited]\r
`),this.setStatus("Exited")}),j.addEventListener("close",()=>{if(this.disposed)return;this.setStatus("Disconnected")}),j.addEventListener("error",()=>{if(this.disposed)return;this.setStatus("Connection error")})}catch($){_.write?.(`Terminal backend unavailable: ${$ instanceof Error?$.message:String($)}\r
`),this.setStatus("Unavailable")}}sendResize(){if(!this.socket||this.socket.readyState!==WebSocket.OPEN||!this.fitAddon?.proposeDimensions)return;let _=this.fitAddon.proposeDimensions();if(!_)return;this.socket.send(JSON.stringify({type:"resize",cols:_.cols,rows:_.rows}))}getContent(){return}isDirty(){return!1}focus(){if(this.terminal?.focus){this.terminal.focus();return}this.termEl?.focus()}resize(){this.syncHostLayout();try{this.terminal?.renderer?.remeasureFont?.()}catch{}try{this.fitAddon?.fit?.()}catch{}try{this.terminal?.refresh?.()}catch{}this.syncHostLayout(),this.sendResize()}dispose(){if(this.disposed)return;this.disposed=!0;try{if(this.resizeFrame)cancelAnimationFrame(this.resizeFrame),this.resizeFrame=0}catch{}try{if(this.themeChangeListener)window.removeEventListener("piclaw-theme-change",this.themeChangeListener)}catch{}try{if(this.mediaQuery&&this.mediaQueryListener){if(this.mediaQuery.removeEventListener)this.mediaQuery.removeEventListener("change",this.mediaQueryListener);else if(this.mediaQuery.removeListener)this.mediaQuery.removeListener(this.mediaQueryListener)}}catch{}try{if(this.dockResizeListener)window.removeEventListener("dock-resize",this.dockResizeListener);if(this.windowResizeListener)window.removeEventListener("resize",this.windowResizeListener)}catch{}try{this.themeObserver?.disconnect?.()}catch{}try{this.resizeObserver?.disconnect?.()}catch{}try{this.socket?.close?.()}catch{}try{this.fitAddon?.dispose?.()}catch{}try{this.terminal?.dispose?.()}catch{}this.termEl?.remove()}}var $$={id:"terminal",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"dock",mount(_,$){return new _$(_,$)}},j$={id:"terminal-tab",label:"Terminal",icon:"terminal",capabilities:["terminal"],placement:"tabs",canHandle(_){return _?.path==="piclaw://terminal"?1e4:!1},mount(_,$){return new _$(_,$)}};function V4(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(j&&j.standalone===!0)return!0;if(!$||typeof $.matchMedia!=="function")return!1;return["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"].some((Z)=>{try{return Boolean($.matchMedia(Z)?.matches)}catch{return!1}})}function C8(_={}){let $=_.window??(typeof window<"u"?window:null),j=_.navigator??(typeof navigator<"u"?navigator:null);if(!$&&!j)return!1;let Q=String(j?.userAgent||""),Z=Number(j?.maxTouchPoints||0),Y=/Android|webOS|iPhone|iPad|iPod|Mobile|Windows Phone/i.test(Q),q=(()=>{if(!$||typeof $.matchMedia!=="function")return!1;try{return Boolean($.matchMedia("(pointer: coarse)")?.matches||$.matchMedia("(any-pointer: coarse)")?.matches)}catch{return!1}})();return Boolean(Y||Z>1||q)}function P2(_,$={}){if(V4($))return null;if(C8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Bq(_),features:"popup=yes,width=900,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function Q$(_,$={}){let j=$.window??(typeof window<"u"?window:null);if(!j||!_)return null;try{return _.features?j.open("about:blank",_.target,_.features):j.open("about:blank",_.target)}catch{return null}}function Z$(_,$={}){if(!_||!_.document)return;try{let j=String($.title||"Opening branch…"),Q=String($.message||"Preparing a new branch window…");_.document.title=j,_.document.body.innerHTML=`
            <div style="font-family: system-ui, sans-serif; padding: 24px; color: #222;">
                <h1 style="font-size: 18px; margin: 0 0 12px;">${j}</h1>
                <p style="margin: 0; line-height: 1.5;">${Q}</p>
            </div>
        `}catch{}}function Y$(_,$){if(!_||!$)return;try{if(_.location&&typeof _.location.replace==="function"){_.location.replace(String($));return}_.location=String($)}catch{}}function q$(_){if(!_||typeof _.close!=="function")return;try{_.close()}catch{}}function U4(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("chat_jid",Z),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function y2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim()||"web:default";if(Q.searchParams.set("branch_loader","1"),Q.searchParams.set("branch_source_chat_jid",Z),Q.searchParams.delete("chat_jid"),Q.searchParams.delete("pane_popout"),Q.searchParams.delete("pane_path"),Q.searchParams.delete("pane_label"),j.chatOnly!==!1)Q.searchParams.set("chat_only","1");return Q.toString()}function S2(_,$,j={}){let Q=new URL(String(_||"http://localhost/")),Z=String($||"").trim();if(!Z)return Q.toString();if(Q.searchParams.set("pane_popout","1"),Q.searchParams.set("pane_path",Z),j?.label)Q.searchParams.set("pane_label",String(j.label));else Q.searchParams.delete("pane_label");if(j?.chatJid)Q.searchParams.set("chat_jid",String(j.chatJid));let Y=j?.params&&typeof j.params==="object"?j.params:null;if(Y)for(let[q,K]of Object.entries(Y)){let N=String(q||"").trim();if(!N)continue;if(K===null||K===void 0||K==="")Q.searchParams.delete(N);else Q.searchParams.set(N,String(K))}return Q.searchParams.delete("chat_only"),Q.searchParams.delete("branch_loader"),Q.searchParams.delete("branch_source_chat_jid"),Q.toString()}function Bq(_){return`piclaw-chat-${String(_||"web:default").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function Wq(_){return`piclaw-pane-${String(_||"pane").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-")||"default"}`}function w2(_,$={}){if(V4($))return null;if(C8($))return{target:"_blank",features:void 0,mode:"tab"};return{target:Wq(_),features:"popup=yes,width=1200,height=960,resizable=yes,scrollbars=yes",mode:"popup"}}function h5(_){let $=_ instanceof Error?_.message:String(_||"").trim(),j=String($||"").trim();if(!j)return"PiClaw could not open a new branch window.";let Q=j.toLowerCase();if(Q.includes("no stable turn boundary"))return"This chat is still in flight and does not yet have a stable turn boundary to fork from.";if(Q.includes("cannot fork a branch while the source chat is still active"))return"This chat is still active. Please wait for the current turn to settle, then try again.";if(Q.includes("cancelled"))return"Branch creation was cancelled before a new chat window could be opened.";if(Q.includes("did not return a chat id"))return"PiClaw created no usable branch id for the new window. Please try again.";if(Q.includes("failed to fork branch")||Q.includes("failed to fork chat branch"))return"PiClaw could not create the new branch. Please try again.";return j}function Fq(_){try{return JSON.parse(_)}catch{return null}}function zq(_){if(typeof _==="string")return new TextEncoder().encode(_).byteLength;if(_ instanceof ArrayBuffer)return _.byteLength;if(ArrayBuffer.isView(_))return _.byteLength;if(_ instanceof Blob)return _.size;return 0}function Hq(_){if(typeof _==="string")return _.length;if(_ instanceof ArrayBuffer)return _.byteLength;if(_ instanceof Blob)return _.size;return Number(_?.size||0)}class K${socket=null;disposed=!1;options;bytesIn=0;bytesOut=0;constructor(_){this.options=_}connect(){if(this.disposed)return;try{this.socket?.close?.()}catch{}let _=new WebSocket(this.options.url);_.binaryType=this.options.binaryType||"arraybuffer",_.addEventListener("open",()=>{if(this.disposed||this.socket!==_)return;this.options.onOpen?.()}),_.addEventListener("message",($)=>{if(this.disposed||this.socket!==_)return;let j=Hq($.data);if(this.bytesIn+=j,this.emitMetrics(),typeof $.data==="string"){let Q=this.options.parseControlMessage||Fq;this.options.onMessage?.({kind:"control",raw:$.data,payload:Q($.data)});return}this.options.onMessage?.({kind:"binary",data:$.data,size:j})}),_.addEventListener("close",()=>{if(this.socket===_)this.socket=null;if(this.disposed)return;this.options.onClose?.()}),_.addEventListener("error",()=>{if(this.disposed||this.socket!==_)return;this.options.onError?.()}),this.socket=_}send(_){if(this.disposed||!this.socket)return;let $=zq(_);this.bytesOut+=$,this.emitMetrics(),this.socket.send(_)}sendControl(_){this.send(JSON.stringify(_??{}))}getMetrics(){return{bytesIn:this.bytesIn,bytesOut:this.bytesOut}}dispose(){if(this.disposed)return;this.disposed=!0;try{this.socket?.close?.()}catch{}this.socket=null}emitMetrics(){this.options.onMetrics?.(this.getMetrics())}}var p5=()=>{throw Error("Operation requires compiling with --exportRuntime")},Jq=typeof BigUint64Array<"u",c5=Symbol();var Oq=new TextDecoder("utf-16le",{fatal:!0});Object.hasOwn=Object.hasOwn||function(_,$){return Object.prototype.hasOwnProperty.call(_,$)};function R2(_,$){let j=new Uint32Array(_)[$+-4>>>2]>>>1,Q=new Uint16Array(_,$,j);if(j<=192)return String.fromCharCode(...Q);try{return Oq.decode(Q)}catch{let Z="",Y=0;while(j-Y>1024)Z+=String.fromCharCode(...Q.subarray(Y,Y+=1024));return Z+String.fromCharCode(...Q.subarray(Y))}}function u2(_){let $={};function j(Z,Y){if(!Z)return"<yet unknown>";return R2(Z.buffer,Y)}let Q=_.env=_.env||{};return Q.abort=Q.abort||function(Y,q,K,N){let G=$.memory||Q.memory;throw Error(`abort: ${j(G,Y)} at ${j(G,q)}:${K}:${N}`)},Q.trace=Q.trace||function(Y,q,...K){let N=$.memory||Q.memory;console.log(`trace: ${j(N,Y)}${q?" ":""}${K.slice(0,q).join(", ")}`)},Q.seed=Q.seed||Date.now,_.Math=_.Math||Math,_.Date=_.Date||Date,$}function f2(_,$){let j=$.exports,Q=j.memory,Z=j.table,Y=j.__new||p5,q=j.__pin||p5,K=j.__unpin||p5,N=j.__collect||p5,G=j.__rtti_base,X=G?(z)=>z[G>>>2]:p5;_.__new=Y,_.__pin=q,_.__unpin=K,_.__collect=N;function V(z){let C=new Uint32Array(Q.buffer);if((z>>>=0)>=X(C))throw Error(`invalid id: ${z}`);return C[(G+4>>>2)+z]}function U(z){let C=V(z);if(!(C&7))throw Error(`not an array: ${z}, flags=${C}`);return C}function B(z){return 31-Math.clz32(z>>>6&31)}function J(z){if(z==null)return 0;let C=z.length,b=Y(C<<1,2),e=new Uint16Array(Q.buffer);for(let p=0,a=b>>>1;p<C;++p)e[a+p]=z.charCodeAt(p);return b}_.__newString=J;function A(z){if(z==null)return 0;let C=new Uint8Array(z),b=Y(C.length,1);return new Uint8Array(Q.buffer).set(C,b),b}_.__newArrayBuffer=A;function O(z){if(!z)return null;let C=Q.buffer;if(new Uint32Array(C)[z+-8>>>2]!==2)throw Error(`not a string: ${z}`);return R2(C,z)}_.__getString=O;function F(z,C,b){let e=Q.buffer;if(b)switch(z){case 2:return new Float32Array(e);case 3:return new Float64Array(e)}else switch(z){case 0:return new(C?Int8Array:Uint8Array)(e);case 1:return new(C?Int16Array:Uint16Array)(e);case 2:return new(C?Int32Array:Uint32Array)(e);case 3:return new(C?BigInt64Array:BigUint64Array)(e)}throw Error(`unsupported align: ${z}`)}function D(z,C=0){let b=C,e=U(z),p=B(e),a=typeof b!=="number",t=a?b.length:b,_0=Y(t<<p,e&4?z:1),q0;if(e&4)q0=_0;else{q(_0);let Z0=Y(e&2?16:12,z);K(_0);let X0=new Uint32Array(Q.buffer);if(X0[Z0+0>>>2]=_0,X0[Z0+4>>>2]=_0,X0[Z0+8>>>2]=t<<p,e&2)X0[Z0+12>>>2]=t;q0=Z0}if(a){let Z0=F(p,e&2048,e&4096),X0=_0>>>p;if(e&16384)for(let z0=0;z0<t;++z0)Z0[X0+z0]=b[z0];else Z0.set(b,X0)}return q0}_.__newArray=D;function E(z){let C=new Uint32Array(Q.buffer),b=C[z+-8>>>2],e=U(b),p=B(e),a=e&4?z:C[z+4>>>2],t=e&2?C[z+12>>>2]:C[a+-4>>>2]>>>p;return F(p,e&2048,e&4096).subarray(a>>>=p,a+t)}_.__getArrayView=E;function g(z){let C=E(z),b=C.length,e=Array(b);for(let p=0;p<b;p++)e[p]=C[p];return e}_.__getArray=g;function u(z){let C=Q.buffer,b=new Uint32Array(C)[z+-4>>>2];return C.slice(z,z+b)}_.__getArrayBuffer=u;function l(z){if(!Z)throw Error("Operation requires compiling with --exportTable");let C=new Uint32Array(Q.buffer)[z>>>2];return Z.get(C)}_.__getFunction=l;function o(z,C,b){return new z(P(z,C,b))}function P(z,C,b){let e=Q.buffer,p=new Uint32Array(e);return new z(e,p[b+4>>>2],p[b+8>>>2]>>>C)}function I(z,C,b){_[`__get${C}`]=o.bind(null,z,b),_[`__get${C}View`]=P.bind(null,z,b)}if([Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array].forEach((z)=>{I(z,z.name,31-Math.clz32(z.BYTES_PER_ELEMENT))}),Jq)[BigUint64Array,BigInt64Array].forEach((z)=>{I(z,z.name.slice(3),3)});return _.memory=_.memory||Q,_.table=_.table||Z,Dq(j,_)}function v2(_){return typeof Response<"u"&&_ instanceof Response}function Aq(_){return _ instanceof WebAssembly.Module}async function N$(_,$={}){if(v2(_=await _))return P8(_,$);let j=Aq(_)?_:await WebAssembly.compile(_),Q=u2($),Z=await WebAssembly.instantiate(j,$),Y=f2(Q,Z);return{module:j,instance:Z,exports:Y}}async function P8(_,$={}){if(!WebAssembly.instantiateStreaming)return N$(v2(_=await _)?_.arrayBuffer():_,$);let j=u2($),Q=await WebAssembly.instantiateStreaming(_,$),Z=f2(j,Q.instance);return{...Q,exports:Z}}function Dq(_,$={}){let j=_.__argumentsLength?(Q)=>{_.__argumentsLength.value=Q}:_.__setArgumentsLength||_.__setargc||(()=>{});for(let Q of Object.keys(_)){let Z=_[Q],Y=Q.split("."),q=$;while(Y.length>1){let G=Y.shift();if(!Object.hasOwn(q,G))q[G]={};q=q[G]}let K=Y[0],N=K.indexOf("#");if(N>=0){let G=K.substring(0,N),X=q[G];if(typeof X>"u"||!X.prototype){let V=function(...U){return V.wrap(V.prototype.constructor(0,...U))};if(V.prototype={valueOf(){return this[c5]}},V.wrap=function(U){return Object.create(V.prototype,{[c5]:{value:U,writable:!1}})},X)Object.getOwnPropertyNames(X).forEach((U)=>Object.defineProperty(V,U,Object.getOwnPropertyDescriptor(X,U)));q[G]=V}if(K=K.substring(N+1),q=q[G].prototype,/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4))){let V=_[Q.replace("set:","get:")],U=_[Q.replace("get:","set:")];Object.defineProperty(q,K,{get(){return V(this[c5])},set(B){U(this[c5],B)},enumerable:!0})}}else if(K==="constructor")(q[K]=function(...V){return j(V.length),Z(...V)}).original=Z;else(q[K]=function(...V){return j(V.length),Z(this[c5],...V)}).original=Z}else if(/^(get|set):/.test(K)){if(!Object.hasOwn(q,K=K.substring(4)))Object.defineProperty(q,K,{get:_[Q.replace("set:","get:")],set:_[Q.replace("get:","set:")],enumerable:!0})}else if(typeof Z==="function"&&Z!==j)(q[K]=(...G)=>{return j(G.length),Z(...G)}).original=Z;else q[K]=Z}return $}var kq="/static/js/vendor/remote-display-decoder.wasm",y8=null;function g2(_){if(_ instanceof ArrayBuffer)return _;if(_.byteOffset===0&&_.byteLength===_.buffer.byteLength)return _.buffer;return _.slice().buffer}async function b2(){if(y8)return y8;return y8=(async()=>{try{let Q=function(Z,Y,q,K,N,G,X){let V=g2(Y),U=j.__pin(j.__newArrayBuffer(V));try{return j[Z](U,q,K,N,G,X.bitsPerPixel,X.bigEndian?1:0,X.trueColor?1:0,X.redMax,X.greenMax,X.blueMax,X.redShift,X.greenShift,X.blueShift)}finally{j.__unpin(U);try{j.__collect()}catch{}}},_=await fetch(kq,{credentials:"same-origin"});if(!_.ok)throw Error(`HTTP ${_.status}`);let j=(typeof P8==="function"?await P8(_,{}):await N$(await _.arrayBuffer(),{})).exports;for(let Z of["initFramebuffer","getFramebufferPtr","getFramebufferLen","getFramebufferWidth","getFramebufferHeight","processRawRect","processCopyRect","processRreRect","processHextileRect","processZrleTileData","decodeRawRectToRgba"])if(typeof j[Z]!=="function")throw Error(`${Z} export is missing.`);return{initFramebuffer(Z,Y){j.initFramebuffer(Z,Y)},getFramebuffer(){let Z=j.getFramebufferPtr(),Y=j.getFramebufferLen();return new Uint8ClampedArray(new Uint8Array(j.memory.buffer,Z,Y).slice().buffer)},getFramebufferWidth(){return j.getFramebufferWidth()},getFramebufferHeight(){return j.getFramebufferHeight()},processRawRect(Z,Y,q,K,N,G){return Q("processRawRect",Z,Y,q,K,N,G)},processCopyRect(Z,Y,q,K,N,G){return j.processCopyRect(Z,Y,q,K,N,G)},processRreRect(Z,Y,q,K,N,G){return Q("processRreRect",Z,Y,q,K,N,G)},processHextileRect(Z,Y,q,K,N,G){return Q("processHextileRect",Z,Y,q,K,N,G)},processZrleTileData(Z,Y,q,K,N,G){return Q("processZrleTileData",Z,Y,q,K,N,G)},decodeRawRectToRgba(Z,Y,q,K){let N=g2(Z),G=j.__pin(j.__newArrayBuffer(N));try{let X=j.__pin(j.decodeRawRectToRgba(G,Y,q,K.bitsPerPixel,K.bigEndian?1:0,K.trueColor?1:0,K.redMax,K.greenMax,K.blueMax,K.redShift,K.greenShift,K.blueShift));try{return new Uint8ClampedArray(j.__getArrayBuffer(X))}finally{j.__unpin(X)}}finally{j.__unpin(G);try{j.__collect?.()}catch{}}}}}catch(_){return console.warn("[remote-display] Failed to load WASM pipeline, using JS fallback.",_),null}})(),y8}function B5(_,$,j){return Math.max($,Math.min(j,_))}function S8(_,$,j){let Q=new Uint8Array(6),Z=B5(Math.floor(Number($||0)),0,65535),Y=B5(Math.floor(Number(j||0)),0,65535);return Q[0]=5,Q[1]=B5(Math.floor(Number(_||0)),0,255),Q[2]=Z>>8&255,Q[3]=Z&255,Q[4]=Y>>8&255,Q[5]=Y&255,Q}function X$(_){switch(Number(_)){case 0:return 1;case 1:return 2;case 2:return 4;default:return 0}}function m2(_,$,j,Q,Z){let Y=Math.max(1,Math.floor(Number(Q||0))),q=Math.max(1,Math.floor(Number(Z||0))),K=Math.max(1,Number(j?.width||0)),N=Math.max(1,Number(j?.height||0)),G=(Number(_||0)-Number(j?.left||0))/K,X=(Number($||0)-Number(j?.top||0))/N;return{x:B5(Math.floor(G*Y),0,Math.max(0,Y-1)),y:B5(Math.floor(X*q),0,Math.max(0,q-1))}}function h2(_,$,j,Q=0){let Z=Number(_)<0?8:16,Y=B5(Number(Q||0)|Z,0,255);return[S8(Y,$,j),S8(Number(Q||0),$,j)]}function p2(_,$){let j=new Uint8Array(8),Q=Math.max(0,Math.min(4294967295,Number($||0)>>>0));return j[0]=4,j[1]=_?1:0,j[4]=Q>>>24&255,j[5]=Q>>>16&255,j[6]=Q>>>8&255,j[7]=Q&255,j}function l5(_){if(typeof _!=="string")return null;return _.length>0?_:null}function c2(_,$,j,Q){let Z=Math.max(1,Math.floor(Number(_||0))),Y=Math.max(1,Math.floor(Number($||0))),q=Math.max(1,Math.floor(Number(j||0))),K=Math.max(1,Math.floor(Number(Q||0))),N=Math.min(Z/q,Y/K);if(!Number.isFinite(N)||N<=0)return 1;return Math.max(0.01,N)}var G$={Backspace:65288,Tab:65289,Enter:65293,Escape:65307,Insert:65379,Delete:65535,Home:65360,End:65367,PageUp:65365,PageDown:65366,ArrowLeft:65361,ArrowUp:65362,ArrowRight:65363,ArrowDown:65364,Shift:65505,ShiftLeft:65505,ShiftRight:65506,Control:65507,ControlLeft:65507,ControlRight:65508,Alt:65513,AltLeft:65513,AltRight:65514,Meta:65515,MetaLeft:65515,MetaRight:65516,Super:65515,Super_L:65515,Super_R:65516,CapsLock:65509,NumLock:65407,ScrollLock:65300,Pause:65299,PrintScreen:65377,ContextMenu:65383,Menu:65383," ":32};for(let _=1;_<=12;_+=1)G$[`F${_}`]=65470+(_-1);function V$(_){let $=[_?.key,_?.code];for(let Y of $)if(Y&&Object.prototype.hasOwnProperty.call(G$,Y))return G$[Y];let j=String(_?.key||""),Q=j?j.codePointAt(0):null,Z=Q==null?0:Q>65535?2:1;if(Q!=null&&j.length===Z){if(Q<=255)return Q;return(16777216|Q)>>>0}return null}var R1=Uint8Array,H_=Uint16Array,O$=Int32Array,w8=new R1([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),R8=new R1([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),F$=new R1([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),i2=function(_,$){var j=new H_(31);for(var Q=0;Q<31;++Q)j[Q]=$+=1<<_[Q-1];var Z=new O$(j[30]);for(var Q=1;Q<30;++Q)for(var Y=j[Q];Y<j[Q+1];++Y)Z[Y]=Y-j[Q]<<5|Q;return{b:j,r:Z}},r2=i2(w8,2),o2=r2.b,z$=r2.r;o2[28]=258,z$[258]=28;var s2=i2(R8,0),Mq=s2.b,l2=s2.r,H$=new H_(32768);for(c0=0;c0<32768;++c0)s_=(c0&43690)>>1|(c0&21845)<<1,s_=(s_&52428)>>2|(s_&13107)<<2,s_=(s_&61680)>>4|(s_&3855)<<4,H$[c0]=((s_&65280)>>8|(s_&255)<<8)>>1;var s_,c0,a_=function(_,$,j){var Q=_.length,Z=0,Y=new H_($);for(;Z<Q;++Z)if(_[Z])++Y[_[Z]-1];var q=new H_($);for(Z=1;Z<$;++Z)q[Z]=q[Z-1]+Y[Z-1]<<1;var K;if(j){K=new H_(1<<$);var N=15-$;for(Z=0;Z<Q;++Z)if(_[Z]){var G=Z<<4|_[Z],X=$-_[Z],V=q[_[Z]-1]++<<X;for(var U=V|(1<<X)-1;V<=U;++V)K[H$[V]>>N]=G}}else{K=new H_(Q);for(Z=0;Z<Q;++Z)if(_[Z])K[Z]=H$[q[_[Z]-1]++]>>15-_[Z]}return K},C4=new R1(288);for(c0=0;c0<144;++c0)C4[c0]=8;var c0;for(c0=144;c0<256;++c0)C4[c0]=9;var c0;for(c0=256;c0<280;++c0)C4[c0]=7;var c0;for(c0=280;c0<288;++c0)C4[c0]=8;var c0,r5=new R1(32);for(c0=0;c0<32;++c0)r5[c0]=5;var c0,Iq=a_(C4,9,0),xq=a_(C4,9,1),Tq=a_(r5,5,0),Cq=a_(r5,5,1),U$=function(_){var $=_[0];for(var j=1;j<_.length;++j)if(_[j]>$)$=_[j];return $},m_=function(_,$,j){var Q=$/8|0;return(_[Q]|_[Q+1]<<8)>>($&7)&j},L$=function(_,$){var j=$/8|0;return(_[j]|_[j+1]<<8|_[j+2]<<16)>>($&7)},A$=function(_){return(_+7)/8|0},i5=function(_,$,j){if($==null||$<0)$=0;if(j==null||j>_.length)j=_.length;return new R1(_.subarray($,j))};var Pq=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],B_=function(_,$,j){var Q=Error($||Pq[_]);if(Q.code=_,Error.captureStackTrace)Error.captureStackTrace(Q,B_);if(!j)throw Q;return Q},yq=function(_,$,j,Q){var Z=_.length,Y=Q?Q.length:0;if(!Z||$.f&&!$.l)return j||new R1(0);var q=!j,K=q||$.i!=2,N=$.i;if(q)j=new R1(Z*3);var G=function(o0){var H0=j.length;if(o0>H0){var C0=new R1(Math.max(H0*2,o0));C0.set(j),j=C0}},X=$.f||0,V=$.p||0,U=$.b||0,B=$.l,J=$.d,A=$.m,O=$.n,F=Z*8;do{if(!B){X=m_(_,V,1);var D=m_(_,V+1,3);if(V+=3,!D){var E=A$(V)+4,g=_[E-4]|_[E-3]<<8,u=E+g;if(u>Z){if(N)B_(0);break}if(K)G(U+g);j.set(_.subarray(E,u),U),$.b=U+=g,$.p=V=u*8,$.f=X;continue}else if(D==1)B=xq,J=Cq,A=9,O=5;else if(D==2){var l=m_(_,V,31)+257,o=m_(_,V+10,15)+4,P=l+m_(_,V+5,31)+1;V+=14;var I=new R1(P),z=new R1(19);for(var C=0;C<o;++C)z[F$[C]]=m_(_,V+C*3,7);V+=o*3;var b=U$(z),e=(1<<b)-1,p=a_(z,b,1);for(var C=0;C<P;){var a=p[m_(_,V,e)];V+=a&15;var E=a>>4;if(E<16)I[C++]=E;else{var t=0,_0=0;if(E==16)_0=3+m_(_,V,3),V+=2,t=I[C-1];else if(E==17)_0=3+m_(_,V,7),V+=3;else if(E==18)_0=11+m_(_,V,127),V+=7;while(_0--)I[C++]=t}}var q0=I.subarray(0,l),Z0=I.subarray(l);A=U$(q0),O=U$(Z0),B=a_(q0,A,1),J=a_(Z0,O,1)}else B_(1);if(V>F){if(N)B_(0);break}}if(K)G(U+131072);var X0=(1<<A)-1,z0=(1<<O)-1,B0=V;for(;;B0=V){var t=B[L$(_,V)&X0],g0=t>>4;if(V+=t&15,V>F){if(N)B_(0);break}if(!t)B_(2);if(g0<256)j[U++]=g0;else if(g0==256){B0=V,B=null;break}else{var x0=g0-254;if(g0>264){var C=g0-257,k0=w8[C];x0=m_(_,V,(1<<k0)-1)+o2[C],V+=k0}var h0=J[L$(_,V)&z0],v0=h0>>4;if(!h0)B_(3);V+=h0&15;var Z0=Mq[v0];if(v0>3){var k0=R8[v0];Z0+=L$(_,V)&(1<<k0)-1,V+=k0}if(V>F){if(N)B_(0);break}if(K)G(U+131072);var l0=U+x0;if(U<Z0){var r0=Y-Z0,M0=Math.min(Z0,l0);if(r0+U<0)B_(3);for(;U<M0;++U)j[U]=Q[r0+U]}for(;U<l0;++U)j[U]=j[U-Z0]}}if($.l=B,$.p=B0,$.b=U,$.f=X,B)X=1,$.m=A,$.d=J,$.n=O}while(!X);return U!=j.length&&q?i5(j,0,U):j.subarray(0,U)},L4=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8},n5=function(_,$,j){j<<=$&7;var Q=$/8|0;_[Q]|=j,_[Q+1]|=j>>8,_[Q+2]|=j>>16},B$=function(_,$){var j=[];for(var Q=0;Q<_.length;++Q)if(_[Q])j.push({s:Q,f:_[Q]});var Z=j.length,Y=j.slice();if(!Z)return{t:t2,l:0};if(Z==1){var q=new R1(j[0].s+1);return q[j[0].s]=1,{t:q,l:1}}j.sort(function(u,l){return u.f-l.f}),j.push({s:-1,f:25001});var K=j[0],N=j[1],G=0,X=1,V=2;j[0]={s:-1,f:K.f+N.f,l:K,r:N};while(X!=Z-1)K=j[j[G].f<j[V].f?G++:V++],N=j[G!=X&&j[G].f<j[V].f?G++:V++],j[X++]={s:-1,f:K.f+N.f,l:K,r:N};var U=Y[0].s;for(var Q=1;Q<Z;++Q)if(Y[Q].s>U)U=Y[Q].s;var B=new H_(U+1),J=J$(j[X-1],B,0);if(J>$){var Q=0,A=0,O=J-$,F=1<<O;Y.sort(function(l,o){return B[o.s]-B[l.s]||l.f-o.f});for(;Q<Z;++Q){var D=Y[Q].s;if(B[D]>$)A+=F-(1<<J-B[D]),B[D]=$;else break}A>>=O;while(A>0){var E=Y[Q].s;if(B[E]<$)A-=1<<$-B[E]++-1;else++Q}for(;Q>=0&&A;--Q){var g=Y[Q].s;if(B[g]==$)--B[g],++A}J=$}return{t:new R1(B),l:J}},J$=function(_,$,j){return _.s==-1?Math.max(J$(_.l,$,j+1),J$(_.r,$,j+1)):$[_.s]=j},n2=function(_){var $=_.length;while($&&!_[--$]);var j=new H_(++$),Q=0,Z=_[0],Y=1,q=function(N){j[Q++]=N};for(var K=1;K<=$;++K)if(_[K]==Z&&K!=$)++Y;else{if(!Z&&Y>2){for(;Y>138;Y-=138)q(32754);if(Y>2)q(Y>10?Y-11<<5|28690:Y-3<<5|12305),Y=0}else if(Y>3){q(Z),--Y;for(;Y>6;Y-=6)q(8304);if(Y>2)q(Y-3<<5|8208),Y=0}while(Y--)q(Z);Y=1,Z=_[K]}return{c:j.subarray(0,Q),n:$}},d5=function(_,$){var j=0;for(var Q=0;Q<$.length;++Q)j+=_[Q]*$[Q];return j},a2=function(_,$,j){var Q=j.length,Z=A$($+2);_[Z]=Q&255,_[Z+1]=Q>>8,_[Z+2]=_[Z]^255,_[Z+3]=_[Z+1]^255;for(var Y=0;Y<Q;++Y)_[Z+Y+4]=j[Y];return(Z+4+Q)*8},d2=function(_,$,j,Q,Z,Y,q,K,N,G,X){L4($,X++,j),++Z[256];var V=B$(Z,15),U=V.t,B=V.l,J=B$(Y,15),A=J.t,O=J.l,F=n2(U),D=F.c,E=F.n,g=n2(A),u=g.c,l=g.n,o=new H_(19);for(var P=0;P<D.length;++P)++o[D[P]&31];for(var P=0;P<u.length;++P)++o[u[P]&31];var I=B$(o,7),z=I.t,C=I.l,b=19;for(;b>4&&!z[F$[b-1]];--b);var e=G+5<<3,p=d5(Z,C4)+d5(Y,r5)+q,a=d5(Z,U)+d5(Y,A)+q+14+3*b+d5(o,z)+2*o[16]+3*o[17]+7*o[18];if(N>=0&&e<=p&&e<=a)return a2($,X,_.subarray(N,N+G));var t,_0,q0,Z0;if(L4($,X,1+(a<p)),X+=2,a<p){t=a_(U,B,0),_0=U,q0=a_(A,O,0),Z0=A;var X0=a_(z,C,0);L4($,X,E-257),L4($,X+5,l-1),L4($,X+10,b-4),X+=14;for(var P=0;P<b;++P)L4($,X+3*P,z[F$[P]]);X+=3*b;var z0=[D,u];for(var B0=0;B0<2;++B0){var g0=z0[B0];for(var P=0;P<g0.length;++P){var x0=g0[P]&31;if(L4($,X,X0[x0]),X+=z[x0],x0>15)L4($,X,g0[P]>>5&127),X+=g0[P]>>12}}}else t=Iq,_0=C4,q0=Tq,Z0=r5;for(var P=0;P<K;++P){var k0=Q[P];if(k0>255){var x0=k0>>18&31;if(n5($,X,t[x0+257]),X+=_0[x0+257],x0>7)L4($,X,k0>>23&31),X+=w8[x0];var h0=k0&31;if(n5($,X,q0[h0]),X+=Z0[h0],h0>3)n5($,X,k0>>5&8191),X+=R8[h0]}else n5($,X,t[k0]),X+=_0[k0]}return n5($,X,t[256]),X+_0[256]},Sq=new O$([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),t2=new R1(0),wq=function(_,$,j,Q,Z,Y){var q=Y.z||_.length,K=new R1(Q+q+5*(1+Math.ceil(q/7000))+Z),N=K.subarray(Q,K.length-Z),G=Y.l,X=(Y.r||0)&7;if($){if(X)N[0]=Y.r>>3;var V=Sq[$-1],U=V>>13,B=V&8191,J=(1<<j)-1,A=Y.p||new H_(32768),O=Y.h||new H_(J+1),F=Math.ceil(j/3),D=2*F,E=function(s0){return(_[s0]^_[s0+1]<<F^_[s0+2]<<D)&J},g=new O$(25000),u=new H_(288),l=new H_(32),o=0,P=0,I=Y.i||0,z=0,C=Y.w||0,b=0;for(;I+2<q;++I){var e=E(I),p=I&32767,a=O[e];if(A[p]=a,O[e]=p,C<=I){var t=q-I;if((o>7000||z>24576)&&(t>423||!G)){X=d2(_,N,0,g,u,l,P,z,b,I-b,X),z=o=P=0,b=I;for(var _0=0;_0<286;++_0)u[_0]=0;for(var _0=0;_0<30;++_0)l[_0]=0}var q0=2,Z0=0,X0=B,z0=p-a&32767;if(t>2&&e==E(I-z0)){var B0=Math.min(U,t)-1,g0=Math.min(32767,I),x0=Math.min(258,t);while(z0<=g0&&--X0&&p!=a){if(_[I+q0]==_[I+q0-z0]){var k0=0;for(;k0<x0&&_[I+k0]==_[I+k0-z0];++k0);if(k0>q0){if(q0=k0,Z0=z0,k0>B0)break;var h0=Math.min(z0,k0-2),v0=0;for(var _0=0;_0<h0;++_0){var l0=I-z0+_0&32767,r0=A[l0],M0=l0-r0&32767;if(M0>v0)v0=M0,a=l0}}}p=a,a=A[p],z0+=p-a&32767}}if(Z0){g[z++]=268435456|z$[q0]<<18|l2[Z0];var o0=z$[q0]&31,H0=l2[Z0]&31;P+=w8[o0]+R8[H0],++u[257+o0],++l[H0],C=I+q0,++o}else g[z++]=_[I],++u[_[I]]}}for(I=Math.max(I,C);I<q;++I)g[z++]=_[I],++u[_[I]];if(X=d2(_,N,G,g,u,l,P,z,b,I-b,X),!G)Y.r=X&7|N[X/8|0]<<3,X-=7,Y.h=O,Y.p=A,Y.i=I,Y.w=C}else{for(var I=Y.w||0;I<q+G;I+=65535){var C0=I+65535;if(C0>=q)N[X/8|0]=G,C0=q;X=a2(N,X+1,_.subarray(I,C0))}Y.i=q}return i5(K,0,Q+A$(X)+Z)};var e2=function(){var _=1,$=0;return{p:function(j){var Q=_,Z=$,Y=j.length|0;for(var q=0;q!=Y;){var K=Math.min(q+2655,Y);for(;q<K;++q)Z+=Q+=j[q];Q=(Q&65535)+15*(Q>>16),Z=(Z&65535)+15*(Z>>16)}_=Q,$=Z},d:function(){return _%=65521,$%=65521,(_&255)<<24|(_&65280)<<8|($&255)<<8|$>>8}}},Rq=function(_,$,j,Q,Z){if(!Z){if(Z={l:1},$.dictionary){var Y=$.dictionary.subarray(-32768),q=new R1(Y.length+_.length);q.set(Y),q.set(_,Y.length),_=q,Z.w=Y.length}}return wq(_,$.level==null?6:$.level,$.mem==null?Z.l?Math.ceil(Math.max(8,Math.min(13,Math.log(_.length)))*1.5):20:12+$.mem,j,Q,Z)};var _7=function(_,$,j){for(;j;++$)_[$]=j,j>>>=8};var uq=function(_,$){var j=$.level,Q=j==0?0:j<6?1:j==9?3:2;if(_[0]=120,_[1]=Q<<6|($.dictionary&&32),_[1]|=31-(_[0]<<8|_[1])%31,$.dictionary){var Z=e2();Z.p($.dictionary),_7(_,2,Z.d())}},fq=function(_,$){if((_[0]&15)!=8||_[0]>>4>7||(_[0]<<8|_[1])%31)B_(6,"invalid zlib data");if((_[1]>>5&1)==+!$)B_(6,"invalid zlib data: "+(_[1]&32?"need":"unexpected")+" dictionary");return(_[1]>>3&4)+2};var W$=function(){function _($,j){if(typeof $=="function")j=$,$={};this.ondata=j;var Q=$&&$.dictionary&&$.dictionary.subarray(-32768);if(this.s={i:0,b:Q?Q.length:0},this.o=new R1(32768),this.p=new R1(0),Q)this.o.set(Q)}return _.prototype.e=function($){if(!this.ondata)B_(5);if(this.d)B_(4);if(!this.p.length)this.p=$;else if($.length){var j=new R1(this.p.length+$.length);j.set(this.p),j.set($,this.p.length),this.p=j}},_.prototype.c=function($){this.s.i=+(this.d=$||!1);var j=this.s.b,Q=yq(this.p,this.s,this.o);this.ondata(i5(Q,j,this.s.b),this.d),this.o=i5(Q,this.s.b-32768),this.s.b=this.o.length,this.p=i5(this.p,this.s.p/8|0),this.s.p&=7},_.prototype.push=function($,j){this.e($),this.c(j)},_}();function $7(_,$){if(!$)$={};var j=e2();j.p(_);var Q=Rq(_,$,$.dictionary?6:2,4);return uq(Q,$),_7(Q,Q.length-4,j.d()),Q}var j7=function(){function _($,j){W$.call(this,$,j),this.v=$&&$.dictionary?2:1}return _.prototype.push=function($,j){if(W$.prototype.e.call(this,$),this.v){if(this.p.length<6&&!j)return;this.p=this.p.subarray(fq(this.p,this.v-1)),this.v=0}if(j){if(this.p.length<4)B_(6,"invalid zlib data");this.p=this.p.subarray(0,-4)}W$.prototype.c.call(this,j)},_}();var vq=typeof TextDecoder<"u"&&new TextDecoder,gq=0;try{vq.decode(t2,{stream:!0}),gq=1}catch(_){}var bq=[58,50,42,34,26,18,10,2,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6,64,56,48,40,32,24,16,8,57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7],mq=[40,8,48,16,56,24,64,32,39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26,33,1,41,9,49,17,57,25],hq=[32,1,2,3,4,5,4,5,6,7,8,9,8,9,10,11,12,13,12,13,14,15,16,17,16,17,18,19,20,21,20,21,22,23,24,25,24,25,26,27,28,29,28,29,30,31,32,1],pq=[16,7,20,21,29,12,28,17,1,15,23,26,5,18,31,10,2,8,24,14,32,27,3,9,19,13,30,6,22,11,4,25],cq=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],lq=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],nq=[1,1,2,2,2,2,2,2,1,2,2,2,2,2,2,1],dq=[[[14,4,13,1,2,15,11,8,3,10,6,12,5,9,0,7],[0,15,7,4,14,2,13,1,10,6,12,11,9,5,3,8],[4,1,14,8,13,6,2,11,15,12,9,7,3,10,5,0],[15,12,8,2,4,9,1,7,5,11,3,14,10,0,6,13]],[[15,1,8,14,6,11,3,4,9,7,2,13,12,0,5,10],[3,13,4,7,15,2,8,14,12,0,1,10,6,9,11,5],[0,14,7,11,10,4,13,1,5,8,12,6,9,3,2,15],[13,8,10,1,3,15,4,2,11,6,7,12,0,5,14,9]],[[10,0,9,14,6,3,15,5,1,13,12,7,11,4,2,8],[13,7,0,9,3,4,6,10,2,8,5,14,12,11,15,1],[13,6,4,9,8,15,3,0,11,1,2,12,5,10,14,7],[1,10,13,0,6,9,8,7,4,15,14,3,11,5,2,12]],[[7,13,14,3,0,6,9,10,1,2,8,5,11,12,4,15],[13,8,11,5,6,15,0,3,4,7,2,12,1,10,14,9],[10,6,9,0,12,11,7,13,15,1,3,14,5,2,8,4],[3,15,0,6,10,1,13,8,9,4,5,11,12,7,2,14]],[[2,12,4,1,7,10,11,6,8,5,3,15,13,0,14,9],[14,11,2,12,4,7,13,1,5,0,15,10,3,9,8,6],[4,2,1,11,10,13,7,8,15,9,12,5,6,3,0,14],[11,8,12,7,1,14,2,13,6,15,0,9,10,4,5,3]],[[12,1,10,15,9,2,6,8,0,13,3,4,14,7,5,11],[10,15,4,2,7,12,9,5,6,1,13,14,0,11,3,8],[9,14,15,5,2,8,12,3,7,0,4,10,1,13,11,6],[4,3,2,12,9,5,15,10,11,14,1,7,6,0,8,13]],[[4,11,2,14,15,0,8,13,3,12,9,7,5,10,6,1],[13,0,11,7,4,9,1,10,14,3,5,12,2,15,8,6],[1,4,11,13,12,3,7,14,10,15,6,8,0,5,9,2],[6,11,13,8,1,4,10,7,9,5,0,15,14,2,3,12]],[[13,2,8,4,6,15,11,1,10,9,3,14,5,0,12,7],[1,15,13,8,10,3,7,4,12,5,6,11,0,14,9,2],[7,11,4,1,9,12,14,2,0,6,10,13,15,3,5,8],[2,1,14,7,4,10,8,13,15,12,9,0,3,5,6,11]]],Y7=new Uint8Array(256);for(let _=0;_<256;_+=1){let $=0;for(let j=0;j<8;j+=1)$=$<<1|_>>j&1;Y7[_]=$}function q7(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function K7(_){let $=0n,j=q7(_);for(let Q of j)$=$<<8n|BigInt(Q);return $}function iq(_,$){let j=new Uint8Array($),Q=BigInt(_);for(let Z=$-1;Z>=0;Z-=1)j[Z]=Number(Q&0xffn),Q>>=8n;return j}function W5(_,$,j){let Q=0n;for(let Z of $){let Y=BigInt(_)>>BigInt(j-Z)&1n;Q=Q<<1n|Y}return Q}function Q7(_,$){let j=28n,Q=(1n<<j)-1n,Z=BigInt($%28);return(_<<Z|_>>j-Z)&Q}function rq(_){let $=W5(K7(_),cq,64),j=$>>28n&0x0fffffffn,Q=$&0x0fffffffn,Z=[];for(let Y of nq){j=Q7(j,Y),Q=Q7(Q,Y);let q=j<<28n|Q;Z.push(W5(q,lq,56))}return Z}function oq(_){let $=0n;for(let j=0;j<8;j+=1){let Q=BigInt((7-j)*6),Z=Number(_>>Q&0x3fn),Y=(Z&32)>>4|Z&1,q=Z>>1&15;$=$<<4n|BigInt(dq[j][Y][q])}return $}function sq(_,$){let j=W5(_,hq,32)^BigInt($),Q=oq(j);return W5(Q,pq,32)}function Z7(_,$){let j=rq($),Q=W5(K7(_),bq,64),Z=Q>>32n&0xffffffffn,Y=Q&0xffffffffn;for(let K of j){let N=Y,G=(Z^sq(Y,K))&0xffffffffn;Z=N,Y=G}let q=Y<<32n|Z;return iq(W5(q,mq,64),8)}function aq(_){let $=String(_??""),j=new Uint8Array(8);for(let Q=0;Q<8;Q+=1){let Z=Q<$.length?$.charCodeAt(Q)&255:0;j[Q]=Y7[Z]}return j}function N7(_,$){let j=q7($);if(j.byteLength!==16)throw Error(`Invalid VNC auth challenge length ${j.byteLength}; expected 16 bytes.`);let Q=aq(_),Z=new Uint8Array(16);return Z.set(Z7(j.slice(0,8),Q),0),Z.set(Z7(j.slice(8,16),Q),8),Z}var h_="vnc";function tq(_){return Number(_)}function eq(_){let $=Array.isArray(_)?_:typeof _==="string"?_.split(",").map((Z)=>Z.trim()).filter((Z)=>Z.length>0):[],j=[],Q=new Set;for(let Z of $){let Y=tq(Z);if(!Number.isFinite(Y))continue;let q=Number(Y);if(!Q.has(q))j.push(q),Q.add(q)}if(j.length>0)return j;return[5,2,1,0,-223]}function H5(_){if(_ instanceof Uint8Array)return _;if(_ instanceof ArrayBuffer)return new Uint8Array(_);if(ArrayBuffer.isView(_))return new Uint8Array(_.buffer,_.byteOffset,_.byteLength);return new Uint8Array(0)}function _K(_,$){let j=H5(_),Q=H5($);if(!j.byteLength)return new Uint8Array(Q);if(!Q.byteLength)return new Uint8Array(j);let Z=new Uint8Array(j.byteLength+Q.byteLength);return Z.set(j,0),Z.set(Q,j.byteLength),Z}function $K(_){let $=0;for(let Z of _||[])$+=Z?.byteLength||0;let j=new Uint8Array($),Q=0;for(let Z of _||[]){let Y=H5(Z);j.set(Y,Q),Q+=Y.byteLength}return j}function jK(){return(_)=>{let $=H5(_);try{let j=[],Q=new j7((Z)=>{j.push(new Uint8Array(Z))});if(Q.push($,!0),Q.err)throw Error(Q.msg||"zlib decompression error");return $K(j)}catch(j){try{let Q=$7($);return Q instanceof Uint8Array?Q:new Uint8Array(Q)}catch(Q){let Z=Q instanceof Error?Q.message:"unexpected EOF";throw Error(`unexpected EOF: ${Z}`)}}}}function QK(_){return new TextEncoder().encode(String(_||""))}function F5(_){return new TextDecoder().decode(H5(_))}function ZK(_){let $=/^RFB (\d{3})\.(\d{3})\n$/.exec(String(_||""));if(!$)return null;return{major:parseInt($[1],10),minor:parseInt($[2],10),text:$[0]}}function YK(_){if(!_)return`RFB 003.008
`;if(_.major>3||_.minor>=8)return`RFB 003.008
`;if(_.minor>=7)return`RFB 003.007
`;return`RFB 003.003
`}function G7(_,$=0){return{bitsPerPixel:_.getUint8($),depth:_.getUint8($+1),bigEndian:_.getUint8($+2)===1,trueColor:_.getUint8($+3)===1,redMax:_.getUint16($+4,!1),greenMax:_.getUint16($+6,!1),blueMax:_.getUint16($+8,!1),redShift:_.getUint8($+10),greenShift:_.getUint8($+11),blueShift:_.getUint8($+12)}}function qK(_){let $=new ArrayBuffer(20),j=new DataView($);return j.setUint8(0,0),j.setUint8(1,0),j.setUint8(2,0),j.setUint8(3,0),j.setUint8(4,_.bitsPerPixel),j.setUint8(5,_.depth),j.setUint8(6,_.bigEndian?1:0),j.setUint8(7,_.trueColor?1:0),j.setUint16(8,_.redMax,!1),j.setUint16(10,_.greenMax,!1),j.setUint16(12,_.blueMax,!1),j.setUint8(14,_.redShift),j.setUint8(15,_.greenShift),j.setUint8(16,_.blueShift),new Uint8Array($)}function KK(_){let $=Array.isArray(_)?_:[],j=new ArrayBuffer(4+$.length*4),Q=new DataView(j);Q.setUint8(0,2),Q.setUint8(1,0),Q.setUint16(2,$.length,!1);let Z=4;for(let Y of $)Q.setInt32(Z,Number(Y||0),!1),Z+=4;return new Uint8Array(j)}function X7(_,$,j,Q=0,Z=0){let Y=new ArrayBuffer(10),q=new DataView(Y);return q.setUint8(0,3),q.setUint8(1,_?1:0),q.setUint16(2,Q,!1),q.setUint16(4,Z,!1),q.setUint16(6,Math.max(0,$||0),!1),q.setUint16(8,Math.max(0,j||0),!1),new Uint8Array(Y)}function z5(_,$){let j=Number($||0);if(j<=0)return 0;if(j===255)return _&255;return Math.max(0,Math.min(255,Math.round((_||0)*255/j)))}function U7(_,$,j,Q){if(j===1)return _[$];if(j===2)return Q?(_[$]<<8|_[$+1])>>>0:(_[$]|_[$+1]<<8)>>>0;if(j===3)return Q?(_[$]<<16|_[$+1]<<8|_[$+2])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16)>>>0;if(j===4)return Q?(_[$]<<24>>>0|_[$+1]<<16|_[$+2]<<8|_[$+3])>>>0:(_[$]|_[$+1]<<8|_[$+2]<<16|_[$+3]<<24>>>0)>>>0;return 0}function NK(_,$,j,Q){let Z=Q||J5,Y=H5(_),q=Math.max(1,Math.floor(Number(Z.bitsPerPixel||0)/8)),K=Math.max(0,$||0)*Math.max(0,j||0)*q;if(Y.byteLength<K)throw Error(`Incomplete raw rectangle payload: expected ${K} byte(s), got ${Y.byteLength}`);if(!Z.trueColor)throw Error("Indexed-colour VNC framebuffers are not supported yet.");let N=new Uint8ClampedArray(Math.max(0,$||0)*Math.max(0,j||0)*4),G=0,X=0;for(let V=0;V<Math.max(0,$||0)*Math.max(0,j||0);V+=1){let U=U7(Y,G,q,Z.bigEndian),B=z5(U>>>Z.redShift&Z.redMax,Z.redMax),J=z5(U>>>Z.greenShift&Z.greenMax,Z.greenMax),A=z5(U>>>Z.blueShift&Z.blueMax,Z.blueMax);N[X]=B,N[X+1]=J,N[X+2]=A,N[X+3]=255,G+=q,X+=4}return N}function B4(_,$,j){let Q=j||J5,Z=Math.max(1,Math.floor(Number(Q.bitsPerPixel||0)/8));if(_.byteLength<$+Z)return null;let Y=U7(_,$,Z,Q.bigEndian);return{rgba:[z5(Y>>>Q.redShift&Q.redMax,Q.redMax),z5(Y>>>Q.greenShift&Q.greenMax,Q.greenMax),z5(Y>>>Q.blueShift&Q.blueMax,Q.blueMax),255],bytesPerPixel:Z}}function P4(_,$,j,Q,Z,Y,q){if(!q)return;for(let K=0;K<Y;K+=1)for(let N=0;N<Z;N+=1){let G=((Q+K)*$+(j+N))*4;_[G]=q[0],_[G+1]=q[1],_[G+2]=q[2],_[G+3]=q[3]}}function L7(_,$,j,Q,Z,Y,q){for(let K=0;K<Y;K+=1){let N=K*Z*4,G=((Q+K)*$+j)*4;_.set(q.subarray(N,N+Z*4),G)}}function V7(_,$){let j=$,Q=1;while(!0){if(_.byteLength<j+1)return null;let Z=_[j++];if(Q+=Z,Z!==255)break}return{consumed:j-$,runLength:Q}}function GK(_,$,j,Q,Z,Y,q){let K=Z||J5,N=Math.max(1,Math.floor(Number(K.bitsPerPixel||0)/8));if(_.byteLength<$+4)return null;let G=new DataView(_.buffer,_.byteOffset+$,4).getUint32(0,!1);if(_.byteLength<$+4+G)return null;let X=_.slice($+4,$+4+G),V;try{V=q(X)}catch{return{consumed:4+G,skipped:!0}}let U=0,B=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);for(let J=0;J<Q;J+=64){let A=Math.min(64,Q-J);for(let O=0;O<j;O+=64){let F=Math.min(64,j-O);if(V.byteLength<U+1)return null;let D=V[U++],E=D&127,g=(D&128)!==0;if(!g&&E===0){let u=F*A*N;if(V.byteLength<U+u)return null;let l=Y(V.slice(U,U+u),F,A,K);U+=u,L7(B,j,O,J,F,A,l);continue}if(!g&&E===1){let u=B4(V,U,K);if(!u)return null;U+=u.bytesPerPixel,P4(B,j,O,J,F,A,u.rgba);continue}if(!g&&E>1&&E<=16){let u=[];for(let I=0;I<E;I+=1){let z=B4(V,U,K);if(!z)return null;U+=z.bytesPerPixel,u.push(z.rgba)}let l=E<=2?1:E<=4?2:4,o=Math.ceil(F*l/8),P=o*A;if(V.byteLength<U+P)return null;for(let I=0;I<A;I+=1){let z=U+I*o;for(let C=0;C<F;C+=1){let b=C*l,e=z+(b>>3),p=8-l-(b&7),a=V[e]>>p&(1<<l)-1;P4(B,j,O+C,J+I,1,1,u[a])}}U+=P;continue}if(g&&E===0){let u=0,l=0;while(l<A){let o=B4(V,U,K);if(!o)return null;U+=o.bytesPerPixel;let P=V7(V,U);if(!P)return null;U+=P.consumed;for(let I=0;I<P.runLength;I+=1)if(P4(B,j,O+u,J+l,1,1,o.rgba),u+=1,u>=F){if(u=0,l+=1,l>=A)break}}continue}if(g&&E>0){let u=[];for(let P=0;P<E;P+=1){let I=B4(V,U,K);if(!I)return null;U+=I.bytesPerPixel,u.push(I.rgba)}let l=0,o=0;while(o<A){if(V.byteLength<U+1)return null;let P=V[U++],I=P,z=1;if(P&128){I=P&127;let b=V7(V,U);if(!b)return null;U+=b.consumed,z=b.runLength}let C=u[I];if(!C)return null;for(let b=0;b<z;b+=1)if(P4(B,j,O+l,J+o,1,1,C),l+=1,l>=F){if(l=0,o+=1,o>=A)break}}continue}return{consumed:4+G,skipped:!0}}}return{consumed:4+G,rgba:B,decompressed:V}}function XK(_,$,j,Q,Z){let Y=Z||J5,q=Math.max(1,Math.floor(Number(Y.bitsPerPixel||0)/8));if(_.byteLength<$+4+q)return null;let N=new DataView(_.buffer,_.byteOffset+$,_.byteLength-$).getUint32(0,!1),G=4+q+N*(q+8);if(_.byteLength<$+G)return null;let X=$+4,V=B4(_,X,Y);if(!V)return null;X+=V.bytesPerPixel;let U=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4);P4(U,j,0,0,j,Q,V.rgba);for(let B=0;B<N;B+=1){let J=B4(_,X,Y);if(!J)return null;if(X+=J.bytesPerPixel,_.byteLength<X+8)return null;let A=new DataView(_.buffer,_.byteOffset+X,8),O=A.getUint16(0,!1),F=A.getUint16(2,!1),D=A.getUint16(4,!1),E=A.getUint16(6,!1);X+=8,P4(U,j,O,F,D,E,J.rgba)}return{consumed:X-$,rgba:U}}function VK(_,$,j,Q,Z,Y){let q=Z||J5,K=Math.max(1,Math.floor(Number(q.bitsPerPixel||0)/8)),N=new Uint8ClampedArray(Math.max(0,j||0)*Math.max(0,Q||0)*4),G=$,X=[0,0,0,255],V=[255,255,255,255];for(let U=0;U<Q;U+=16){let B=Math.min(16,Q-U);for(let J=0;J<j;J+=16){let A=Math.min(16,j-J);if(_.byteLength<G+1)return null;let O=_[G++];if(O&1){let F=A*B*K;if(_.byteLength<G+F)return null;let D=Y(_.slice(G,G+F),A,B,q);G+=F,L7(N,j,J,U,A,B,D);continue}if(O&2){let F=B4(_,G,q);if(!F)return null;X=F.rgba,G+=F.bytesPerPixel}if(P4(N,j,J,U,A,B,X),O&4){let F=B4(_,G,q);if(!F)return null;V=F.rgba,G+=F.bytesPerPixel}if(O&8){if(_.byteLength<G+1)return null;let F=_[G++];for(let D=0;D<F;D+=1){let E=V;if(O&16){let z=B4(_,G,q);if(!z)return null;E=z.rgba,G+=z.bytesPerPixel}if(_.byteLength<G+2)return null;let g=_[G++],u=_[G++],l=g>>4,o=g&15,P=(u>>4)+1,I=(u&15)+1;P4(N,j,J+l,U+o,P,I,E)}}}}return{consumed:G-$,rgba:N}}var J5={bitsPerPixel:32,depth:24,bigEndian:!1,trueColor:!0,redMax:255,greenMax:255,blueMax:255,redShift:16,greenShift:8,blueShift:0};class u8{protocol=h_;constructor(_={}){this.shared=_.shared!==!1,this.decodeRawRect=typeof _.decodeRawRect==="function"?_.decodeRawRect:NK,this.pipeline=_.pipeline||null,this.encodings=eq(_.encodings||null),this.state="version",this.buffer=new Uint8Array(0),this.serverVersion=null,this.clientVersionText=null,this.framebufferWidth=0,this.framebufferHeight=0,this.serverName="",this.serverPixelFormat=null,this.clientPixelFormat={...J5},this.password=typeof _.password==="string"&&_.password.length>0?_.password:null,this.inflateZrle=typeof _.inflateZrle==="function"?_.inflateZrle:jK()}receive(_){if(_)this.buffer=_K(this.buffer,_);let $=[],j=[],Q=!0;while(Q){if(Q=!1,this.state==="version"){if(this.buffer.byteLength<12)break;let Z=this.consume(12),Y=F5(Z),q=ZK(Y);if(!q)throw Error(`Unsupported RFB version banner: ${Y||"<empty>"}`);this.serverVersion=q,this.clientVersionText=YK(q),j.push(QK(this.clientVersionText)),$.push({type:"protocol-version",protocol:h_,server:q.text.trim(),client:this.clientVersionText.trim()}),this.state=q.minor>=7?"security-types":"security-type-33",Q=!0;continue}if(this.state==="security-types"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<5)break;let N=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(1,!1);if(this.buffer.byteLength<5+N)break;this.consume(1);let G=F5(this.consume(4+N).slice(4));throw Error(G||"VNC server rejected the connection.")}if(this.buffer.byteLength<1+Z)break;this.consume(1);let Y=Array.from(this.consume(Z));$.push({type:"security-types",protocol:h_,types:Y});let q=null;if(Y.includes(2)&&this.password!==null)q=2;else if(Y.includes(1))q=1;else if(Y.includes(2))throw Error("VNC password authentication is required. Enter a password and reconnect.");else throw Error(`Unsupported VNC security types: ${Y.join(", ")||"none"}. This viewer currently supports only "None" and password-based VNC auth.`);j.push(Uint8Array.of(q)),$.push({type:"security-selected",protocol:h_,securityType:q,label:q===2?"VNC Authentication":"None"}),this.state=q===2?"security-challenge":"security-result",Q=!0;continue}if(this.state==="security-type-33"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y===0){if(this.buffer.byteLength<4)break;let K=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength<4+K)break;let N=F5(this.consume(4+K).slice(4));throw Error(N||"VNC server rejected the connection.")}if(Y===2){if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");$.push({type:"security-selected",protocol:h_,securityType:2,label:"VNC Authentication"}),this.state="security-challenge",Q=!0;continue}if(Y!==1)throw Error(`Unsupported VNC security type ${Y}. This viewer currently supports only "None" and password-based VNC auth.`);$.push({type:"security-selected",protocol:h_,securityType:1,label:"None"}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="security-challenge"){if(this.buffer.byteLength<16)break;if(this.password===null)throw Error("VNC password authentication is required. Enter a password and reconnect.");let Z=this.consume(16);j.push(N7(this.password,Z)),this.state="security-result",Q=!0;continue}if(this.state==="security-result"){if(this.buffer.byteLength<4)break;let Y=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.consume(4),Y!==0){if(this.buffer.byteLength>=4){let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(0,!1);if(this.buffer.byteLength>=4+q){let K=F5(this.consume(4+q).slice(4));throw Error(K||"VNC authentication failed.")}}throw Error("VNC authentication failed.")}$.push({type:"security-result",protocol:h_,ok:!0}),j.push(Uint8Array.of(this.shared?1:0)),this.state="server-init",Q=!0;continue}if(this.state==="server-init"){if(this.buffer.byteLength<24)break;let Z=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),Y=Z.getUint16(0,!1),q=Z.getUint16(2,!1),K=G7(Z,4),N=Z.getUint32(20,!1);if(this.buffer.byteLength<24+N)break;let G=this.consume(24),X=new DataView(G.buffer,G.byteOffset,G.byteLength);if(this.framebufferWidth=X.getUint16(0,!1),this.framebufferHeight=X.getUint16(2,!1),this.serverPixelFormat=G7(X,4),this.serverName=F5(this.consume(N)),this.state="connected",this.pipeline)this.pipeline.initFramebuffer(this.framebufferWidth,this.framebufferHeight);j.push(qK(this.clientPixelFormat)),j.push(KK(this.encodings)),j.push(X7(!1,this.framebufferWidth,this.framebufferHeight)),$.push({type:"display-init",protocol:h_,width:Y,height:q,name:this.serverName,pixelFormat:K}),Q=!0;continue}if(this.state==="connected"){if(this.buffer.byteLength<1)break;let Z=this.buffer[0];if(Z===0){if(this.buffer.byteLength<4)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint16(2,!1),K=4,N=[],G=!1,X=!!this.pipeline;for(let U=0;U<q;U+=1){if(this.buffer.byteLength<K+12){G=!0;break}let B=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,12),J=B.getUint16(0,!1),A=B.getUint16(2,!1),O=B.getUint16(4,!1),F=B.getUint16(6,!1),D=B.getInt32(8,!1);if(K+=12,D===0){let E=Math.max(1,Math.floor(Number(this.clientPixelFormat.bitsPerPixel||0)/8)),g=O*F*E;if(this.buffer.byteLength<K+g){G=!0;break}let u=this.buffer.slice(K,K+g);if(K+=g,X)this.pipeline.processRawRect(u,J,A,O,F,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:A,width:O,height:F});else N.push({kind:"rgba",x:J,y:A,width:O,height:F,rgba:this.decodeRawRect(u,O,F,this.clientPixelFormat)});continue}if(D===2){let E=XK(this.buffer,K,O,F,this.clientPixelFormat);if(!E){G=!0;break}if(X){let g=this.buffer.slice(K,K+E.consumed);this.pipeline.processRreRect(g,J,A,O,F,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:A,width:O,height:F})}else N.push({kind:"rgba",x:J,y:A,width:O,height:F,rgba:E.rgba});K+=E.consumed;continue}if(D===1){if(this.buffer.byteLength<K+4){G=!0;break}let E=new DataView(this.buffer.buffer,this.buffer.byteOffset+K,4),g=E.getUint16(0,!1),u=E.getUint16(2,!1);if(K+=4,X)this.pipeline.processCopyRect(J,A,O,F,g,u),N.push({kind:"pipeline",x:J,y:A,width:O,height:F});else N.push({kind:"copy",x:J,y:A,width:O,height:F,srcX:g,srcY:u});continue}if(D===16){let E=GK(this.buffer,K,O,F,this.clientPixelFormat,this.decodeRawRect,this.inflateZrle);if(!E){G=!0;break}if(K+=E.consumed,E.skipped)continue;if(X&&E.decompressed)this.pipeline.processZrleTileData(E.decompressed,J,A,O,F,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:A,width:O,height:F});else N.push({kind:"rgba",x:J,y:A,width:O,height:F,rgba:E.rgba});continue}if(D===5){let E=VK(this.buffer,K,O,F,this.clientPixelFormat,this.decodeRawRect);if(!E){G=!0;break}if(X){let g=this.buffer.slice(K,K+E.consumed);this.pipeline.processHextileRect(g,J,A,O,F,this.clientPixelFormat),N.push({kind:"pipeline",x:J,y:A,width:O,height:F})}else N.push({kind:"rgba",x:J,y:A,width:O,height:F,rgba:E.rgba});K+=E.consumed;continue}if(D===-223){if(this.framebufferWidth=O,this.framebufferHeight=F,X)this.pipeline.initFramebuffer(O,F);N.push({kind:"resize",x:J,y:A,width:O,height:F});continue}throw Error(`Unsupported VNC rectangle encoding ${D}. This viewer currently supports ZRLE, Hextile, RRE, CopyRect, raw rectangles, and DesktopSize only.`)}if(G)break;this.consume(K);let V={type:"framebuffer-update",protocol:h_,width:this.framebufferWidth,height:this.framebufferHeight,rects:N};if(X)V.framebuffer=this.pipeline.getFramebuffer();$.push(V),j.push(X7(!0,this.framebufferWidth,this.framebufferHeight)),Q=!0;continue}if(Z===2){this.consume(1),$.push({type:"bell",protocol:h_}),Q=!0;continue}if(Z===3){if(this.buffer.byteLength<8)break;let q=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength).getUint32(4,!1);if(this.buffer.byteLength<8+q)break;this.consume(8);let K=F5(this.consume(q));$.push({type:"clipboard",protocol:h_,text:K}),Q=!0;continue}throw Error(`Unsupported VNC server message type ${Z}.`)}}return{events:$,outgoing:j}}consume(_){let $=this.buffer.slice(0,_);return this.buffer=this.buffer.slice(_),$}}var W4="piclaw://vnc";function UK(_){let $=String(_||"");if($===W4)return null;if(!$.startsWith(`${W4}/`))return null;let j=$.slice(`${W4}/`.length).trim();if(!j)return null;try{return decodeURIComponent(j)}catch{return j}}function r4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}async function LK(_=null){let $=_?`/vnc/session?target=${encodeURIComponent(_)}`:"/vnc/session",j=await fetch($,{credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q}async function BK(_){let $=`/vnc/handoff?target=${encodeURIComponent(String(_||"").trim())}`,j=await fetch($,{method:"POST",credentials:"same-origin"}),Q=await j.json().catch(()=>({}));if(!j.ok)throw Error(Q?.error||`HTTP ${j.status}`);return Q?.handoff||null}function WK(_,$=null){let j=window.location.protocol==="https:"?"wss:":"ws:",Q=new URL(`${j}//${window.location.host}/vnc/ws`);if(Q.searchParams.set("target",String(_||"")),$)Q.searchParams.set("handoff",String($));return Q.toString()}function FK(_,$){let j=String(_||"").trim(),Q=Math.floor(Number($||0));if(!j||!Number.isFinite(Q)||Q<=0||Q>65535)return null;return`${j.includes(":")&&!j.startsWith("[")?`[${j}]`:j}:${Q}`}function zK(_){if(typeof window>"u")return null;try{let $=new URL(window.location.href),j=$.searchParams.get(_)?.trim()||"";if(!j)return null;return $.searchParams.delete(_),window.history?.replaceState?.(window.history.state,document.title,$.toString()),j}catch{return null}}class B7{container;root;statusEl;bodyEl;metricsEl;targetSubtitleEl;socketBoundary=null;protocol=null;disposed=!1;targetId=null;targetLabel=null;bytesIn=0;bytesOut=0;canvas=null;canvasCtx=null;displayPlaceholderEl=null;displayInfoEl=null;displayMetaEl=null;displayStageEl=null;chromeEl=null;sessionShellEl=null;resizeObserver=null;displayScale=null;readOnly=!1;pointerButtonMask=0;pressedKeysyms=new Map;passwordInputEl=null;authPassword=null;directHostInputEl=null;directPortInputEl=null;directPasswordInputEl=null;hasRenderedFrame=!1;frameTimeoutId=null;reconnectTimerId=null;reconnectAttempts=0;rawFallbackAttempted=!1;protocolRecovering=!1;pendingHandoffToken=null;constructor(_,$){this.container=_,this.targetId=UK($?.path),this.targetLabel=this.targetId||null,this.pendingHandoffToken=zK("vnc_handoff"),this.root=document.createElement("div"),this.root.className="vnc-pane-shell",this.root.style.cssText="display:flex;flex-direction:column;width:100%;height:100%;background:var(--bg-primary);color:var(--text-primary);",this.targetSubtitleEl=null,this.statusEl=document.createElement("div"),this.statusEl.style.cssText="display:none;",this.statusEl.textContent="",this.bodyEl=document.createElement("div"),this.bodyEl.style.cssText="flex:1;min-height:0;display:flex;align-items:stretch;justify-content:stretch;padding:12px;",this.metricsEl=document.createElement("div"),this.metricsEl.style.cssText="display:none;",this.updateMetrics(),this.root.append(this.statusEl,this.bodyEl),this.container.appendChild(this.root),this.load()}setStatus(_){this.statusEl.textContent=String(_||"")}setSessionChromeVisible(_){if(this.chromeEl)this.chromeEl.style.display=_?"grid":"none";if(this.sessionShellEl?.style)this.sessionShellEl.style.gridTemplateRows=_?"auto minmax(0,1fr)":"1fr";if(this.displayStageEl?.style)this.displayStageEl.style.padding=_?"12px":"0",this.displayStageEl.style.border=_?"1px solid var(--border-color)":"none",this.displayStageEl.style.borderRadius=_?"16px":"0",this.displayStageEl.style.background=_?"#0a0a0a":"#000";if(this.displayPlaceholderEl?.style)this.displayPlaceholderEl.style.display=_&&!this.hasRenderedFrame?"block":"none"}clearReconnectTimer(){if(this.reconnectTimerId)clearTimeout(this.reconnectTimerId),this.reconnectTimerId=null}scheduleReconnect(){if(this.disposed||!this.targetId)return;this.clearReconnectTimer();let _=Math.min(8000,1500+this.reconnectAttempts*1000);this.reconnectAttempts+=1,this.reconnectTimerId=setTimeout(()=>{if(this.reconnectTimerId=null,this.disposed||!this.targetId)return;this.connectSocket()},_)}updateMetrics(){this.metricsEl.textContent=`Transport bytes — in: ${this.bytesIn} / out: ${this.bytesOut}`}applyMetrics(_){this.bytesIn=Number(_?.bytesIn||0),this.bytesOut=Number(_?.bytesOut||0),this.updateMetrics()}openTargetTab(_,$){if(this.targetId=String(_||"").trim()||null,this.targetLabel=String($||_||"").trim()||this.targetId||"VNC",this.targetId)this.renderTargetSession({direct_connect_enabled:!0,target:{id:this.targetId,label:this.targetLabel,read_only:!1,direct_connect:!0}}),this.setStatus("Connecting…"),this.updateDisplayInfo("Connecting…"),this.updateDisplayMeta("connecting");this.load()}requestPanePopout(_,$){this.container.dispatchEvent(new CustomEvent("pane:popout",{bubbles:!0,detail:{path:_,label:$}}))}resetLiveSession(){this.clearReconnectTimer(),this.reconnectAttempts=0,this.protocol=null;try{this.socketBoundary?.dispose?.()}catch{}this.socketBoundary=null;try{this.resizeObserver?.disconnect?.()}catch{}if(this.resizeObserver=null,this.canvas=null,this.canvasCtx=null,this.displayPlaceholderEl=null,this.displayInfoEl=null,this.displayMetaEl=null,this.displayStageEl=null,this.displayScale=null,this.passwordInputEl=null,this.directHostInputEl=null,this.directPortInputEl=null,this.directPasswordInputEl=null,this.hasRenderedFrame=!1,this.rawFallbackAttempted=!1,this.protocolRecovering=!1,this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;this.pressedKeysyms.clear()}renderTargets(_){this.resetLiveSession();let $=Array.isArray(_?.targets)?_.targets:[],j=Boolean(_?.direct_connect_enabled);this.bodyEl.innerHTML=`
            <div style="width:100%;height:100%;min-height:0;display:grid;align-content:start;justify-items:center;gap:16px;overflow:auto;padding:24px;box-sizing:border-box;">
                ${j?`
                    <div style="width:min(540px,100%);padding:18px 18px 20px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:14px;box-shadow:0 16px 38px rgba(0,0,0,.22);">
                        <div style="display:grid;gap:6px;">
                            <div style="font-size:18px;font-weight:700;">Connect to VNC</div>
                            <div style="font-size:12px;color:var(--text-secondary);">Enter a server target to start a direct session.</div>
                        </div>
                        <div style="display:grid;gap:10px;align-items:end;">
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Server</span>
                                <input type="text" data-vnc-direct-host placeholder="server" spellcheck="false" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Port</span>
                                <input type="number" data-vnc-direct-port min="1" max="65535" step="1" placeholder="5900" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <label style="display:grid;gap:6px;min-width:0;">
                                <span style="font-size:12px;color:var(--text-secondary);">Password</span>
                                <input type="password" data-vnc-direct-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                            </label>
                            <button type="button" data-direct-open-tab="1" style="padding:10px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;min-height:40px;font-weight:600;">Connect</button>
                        </div>
                    </div>
                `:""}
                ${$.length?`
                    <div style="width:min(100%,900px);min-height:0;display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));align-content:start;">
                        ${$.map((Z)=>`
                            <div style="text-align:left;padding:16px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);color:inherit;display:flex;flex-direction:column;gap:12px;">
                                <div>
                                    <div style="font-weight:600;margin-bottom:6px;">${r4(Z.label||Z.id)}</div>
                                    <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);">${r4(Z.id)}</div>
                                    <div style="margin-top:8px;font-size:12px;color:var(--text-secondary);">${Z.readOnly?"Read-only target":"Interactive target"}</div>
                                </div>
                                <div style="display:flex;flex-wrap:wrap;gap:8px;">
                                    <button type="button" data-target-open-tab="${r4(Z.id)}" data-target-label="${r4(Z.label||Z.id)}" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Connect</button>
                                </div>
                            </div>
                        `).join("")}
                    </div>
                `:`
                    <div style="min-height:0;display:grid;place-items:center;justify-items:center;">
                        <div style="width:min(100%,540px);text-align:center;padding:28px 24px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);font-size:13px;color:var(--text-secondary);line-height:1.5;">
                            No saved VNC targets yet. Connect directly above.
                        </div>
                    </div>
                `}
            </div>
        `,this.directHostInputEl=this.bodyEl.querySelector("[data-vnc-direct-host]"),this.directPortInputEl=this.bodyEl.querySelector("[data-vnc-direct-port]"),this.directPasswordInputEl=this.bodyEl.querySelector("[data-vnc-direct-password]");let Q=()=>{let Z=FK(this.directHostInputEl?.value,this.directPortInputEl?.value);if(!Z)return;this.authPassword=l5(this.directPasswordInputEl?this.directPasswordInputEl.value:this.authPassword),this.openTargetTab(Z,Z)};this.directHostInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPortInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.directPasswordInputEl?.addEventListener("keydown",(Z)=>{if(Z.key!=="Enter")return;Z.preventDefault(),Q()}),this.bodyEl.querySelector("[data-direct-open-tab]")?.addEventListener("click",()=>Q());for(let Z of Array.from(this.bodyEl.querySelectorAll("[data-target-open-tab]")))Z.addEventListener("click",()=>{let Y=Z.getAttribute("data-target-open-tab"),q=Z.getAttribute("data-target-label")||Y||"VNC";if(!Y)return;this.openTargetTab(Y,q)})}renderTargetSession(_){this.resetLiveSession();let $=_?.target||{},j=$?.label||this.targetId||"VNC target";if(this.targetLabel=j,this.readOnly=Boolean($.read_only),this.pointerButtonMask=0,this.hasRenderedFrame=!1,this.pressedKeysyms.clear(),this.bodyEl.innerHTML=`
            <div data-vnc-session-shell style="width:100%;height:100%;min-height:0;display:grid;grid-template-rows:auto minmax(0,1fr);gap:12px;">
                <div data-vnc-session-chrome style="padding:10px 12px;border:1px solid var(--border-color);border-radius:14px;background:var(--bg-secondary);display:grid;gap:10px;">
                    <div style="display:grid;gap:4px;min-width:0;">
                        <div style="font:12px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${r4($.id||this.targetId||"")} · ${$.read_only?"read-only":"interactive"} · websocket → TCP proxy</div>
                        <div data-display-info style="font-size:13px;color:var(--text-primary);line-height:1.4;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">Negotiating remote display…</div>
                        <div data-display-meta style="font:11px var(--font-family-mono, monospace);color:var(--text-secondary);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;"></div>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:8px;align-items:end;">
                        <label style="display:grid;gap:4px;min-width:160px;flex:1 1 180px;">
                            <span style="font-size:11px;color:var(--text-secondary);">VNC password</span>
                            <input type="password" data-vnc-password placeholder="Optional" autocomplete="current-password" style="width:100%;padding:8px 10px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);color:inherit;" />
                        </label>
                        <button type="button" data-vnc-reconnect="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Reconnect</button>
                        <button type="button" data-open-target-picker="1" style="padding:8px 12px;border:1px solid var(--border-color);border-radius:10px;background:var(--bg-primary);cursor:pointer;color:inherit;">Target</button>
                    </div>
                </div>
                <div data-display-stage style="min-height:0;height:100%;border:1px solid var(--border-color);border-radius:16px;background:#0a0a0a;display:flex;align-items:center;justify-content:center;padding:12px;position:relative;overflow:hidden;">
                    <canvas data-display-canvas tabindex="0" style="display:none;max-width:100%;max-height:100%;width:auto;height:auto;image-rendering:auto;box-shadow:0 12px 36px rgba(0,0,0,.35);border-radius:8px;background:#000;"></canvas>
                    <div data-display-placeholder style="max-width:520px;text-align:center;color:#d7d7d7;line-height:1.6;">
                        <div style="font-weight:700;font-size:18px;margin-bottom:8px;">${r4(j)}</div>
                        <div style="font-size:13px;color:#b7b7b7;">Waiting for the VNC/RFB handshake and first framebuffer update…</div>
                    </div>
                </div>
            </div>
        `,this.sessionShellEl=this.bodyEl.querySelector("[data-vnc-session-shell]"),this.chromeEl=this.bodyEl.querySelector("[data-vnc-session-chrome]"),this.displayStageEl=this.bodyEl.querySelector("[data-display-stage]"),this.canvas=this.bodyEl.querySelector("[data-display-canvas]"),this.displayPlaceholderEl=this.bodyEl.querySelector("[data-display-placeholder]"),this.displayInfoEl=this.bodyEl.querySelector("[data-display-info]"),this.displayMetaEl=this.bodyEl.querySelector("[data-display-meta]"),this.canvasCtx=this.canvas?.getContext?.("2d",{alpha:!1})||null,this.canvasCtx)this.canvasCtx.imageSmoothingEnabled=!0,this.canvasCtx.imageSmoothingQuality="high";if(this.updateDisplayInfo("Waiting for VNC protocol negotiation…"),this.updateDisplayMeta(),this.setSessionChromeVisible(!0),this.attachDisplayResizeObserver(),this.attachCanvasPointerHandlers(),this.attachCanvasKeyboardHandlers(),this.passwordInputEl=this.bodyEl.querySelector("[data-vnc-password]"),this.passwordInputEl&&this.authPassword!==null)this.passwordInputEl.value=this.authPassword;this.passwordInputEl?.addEventListener("input",()=>{this.authPassword=l5(this.passwordInputEl.value)}),this.passwordInputEl?.addEventListener("keydown",(Y)=>{if(Y.key!=="Enter")return;Y.preventDefault(),this.connectSocket()}),this.bodyEl.querySelector("[data-vnc-reconnect]")?.addEventListener("click",()=>{this.authPassword=l5(this.passwordInputEl?this.passwordInputEl.value:this.authPassword),this.connectSocket()}),this.bodyEl.querySelector("[data-open-target-picker]")?.addEventListener("click",()=>{this.openTargetTab("","VNC")})}updateDisplayInfo(_){if(this.displayInfoEl)this.displayInfoEl.textContent=String(_||"")}updateDisplayMeta(_=""){if(!this.displayMetaEl)return;let $=this.protocol?.state?`state=${this.protocol.state}`:"state=idle",j=this.protocol?.framebufferWidth&&this.protocol?.framebufferHeight?`${this.protocol.framebufferWidth}×${this.protocol.framebufferHeight}`:"pending",Q=this.protocol?.serverName?` · name=${this.protocol.serverName}`:"",Z=this.displayScale?` · scale=${Math.round(this.displayScale*100)}%`:"",Y=_?` · ${_}`:"";this.displayMetaEl.textContent=`${$} · framebuffer=${j}${Q}${Z}${Y}`}ensureCanvasSize(_,$,j={}){if(!this.canvas||!this.canvasCtx||!_||!$)return;if(this.canvas.width!==_||this.canvas.height!==$)this.canvas.width=_,this.canvas.height=$;let Q=j?.reveal===!0;if(this.canvas.style.display=Q||this.hasRenderedFrame?"block":"none",this.canvas.style.aspectRatio=`${_} / ${$}`,this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=Q||this.hasRenderedFrame?"none":"";this.updateCanvasScale()}attachDisplayResizeObserver(){if(!this.displayStageEl||typeof ResizeObserver>"u")return;try{this.resizeObserver?.disconnect?.()}catch{}this.resizeObserver=new ResizeObserver(()=>{this.updateCanvasScale()}),this.resizeObserver.observe(this.displayStageEl)}updateCanvasScale(){if(!this.canvas||!this.displayStageEl||!this.canvas.width||!this.canvas.height)return;requestAnimationFrame(()=>{if(!this.canvas||!this.displayStageEl)return;let _=this.displayStageEl.getBoundingClientRect?.(),$=Math.max(1,Math.floor(_?.width||this.displayStageEl.clientWidth||0)-32),j=Math.max(1,Math.floor(_?.height||this.displayStageEl.clientHeight||0)-32);if(!$||!j)return;let Q=c2($,j,this.canvas.width,this.canvas.height);this.displayScale=Q,this.canvas.style.width=`${Math.max(1,Math.round(this.canvas.width*Q))}px`,this.canvas.style.height=`${Math.max(1,Math.round(this.canvas.height*Q))}px`,this.updateDisplayMeta()})}getFramebufferPointFromEvent(_){if(!this.canvas||!this.protocol?.framebufferWidth||!this.protocol?.framebufferHeight)return null;let $=this.canvas.getBoundingClientRect?.();if(!$||!$.width||!$.height)return null;return m2(_.clientX,_.clientY,$,this.protocol.framebufferWidth,this.protocol.framebufferHeight)}sendPointerEvent(_,$,j){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(S8(_,$,j))}attachCanvasPointerHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.style.cursor="crosshair",this.canvas.style.touchAction="none",this.canvas.addEventListener("contextmenu",(_)=>{_.preventDefault()}),this.canvas.addEventListener("pointermove",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerdown",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.canvas?.focus?.();try{this.canvas?.setPointerCapture?.(_.pointerId)}catch{}this.pointerButtonMask|=X$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y)}),this.canvas.addEventListener("pointerup",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault(),this.pointerButtonMask&=~X$(_.button),this.sendPointerEvent(this.pointerButtonMask,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("pointercancel",(_)=>{let $=this.getFramebufferPointFromEvent(_)||{x:0,y:0};this.pointerButtonMask=0,this.sendPointerEvent(0,$.x,$.y);try{this.canvas?.releasePointerCapture?.(_.pointerId)}catch{}}),this.canvas.addEventListener("wheel",(_)=>{let $=this.getFramebufferPointFromEvent(_);if(!$)return;_.preventDefault();for(let j of h2(_.deltaY,$.x,$.y,this.pointerButtonMask))this.socketBoundary?.send?.(j)},{passive:!1})}sendKeyEvent(_,$){if(!this.socketBoundary||!this.protocol||this.protocol.state!=="connected")return;this.socketBoundary.send(p2(_,$))}releasePressedKeys(){for(let _ of this.pressedKeysyms.values())this.sendKeyEvent(!1,_);this.pressedKeysyms.clear()}attachCanvasKeyboardHandlers(){if(!this.canvas||this.readOnly)return;this.canvas.addEventListener("keydown",(_)=>{let $=V$(_);if($==null)return;if(_.repeat&&this.pressedKeysyms.has(_.code||_.key)){_.preventDefault();return}_.preventDefault();let j=_.code||_.key;this.pressedKeysyms.set(j,$),this.sendKeyEvent(!0,$)}),this.canvas.addEventListener("keyup",(_)=>{let $=_.code||_.key,j=this.pressedKeysyms.get($)??V$(_);if(j==null)return;_.preventDefault(),this.pressedKeysyms.delete($),this.sendKeyEvent(!1,j)}),this.canvas.addEventListener("blur",()=>{this.releasePressedKeys()})}drawRgbaRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=new ImageData(_.rgba,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}copyCanvasRect(_){if(!this.canvasCtx||!this.canvas)return;this.ensureCanvasSize(this.canvas.width||_.width,this.canvas.height||_.height,{reveal:!0});let $=this.canvasCtx.getImageData(_.srcX,_.srcY,_.width,_.height);this.canvasCtx.putImageData($,_.x,_.y),this.hasRenderedFrame=!0}scheduleRawFallbackTimeout(){if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.rawFallbackAttempted||this.protocolRecovering)return;this.frameTimeoutId=setTimeout(()=>{if(this.hasRenderedFrame||this.rawFallbackAttempted||this.protocolRecovering)return;if(this.protocol&&this.socketBoundary)this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.setStatus("No framebuffer update yet; retrying with RAW encoding."),this.updateDisplayInfo("No framebuffer update yet. Retrying with RAW encoding."),this.updateDisplayMeta("reconnect-encoding-fallback"),this.connectWithEncodings("0")},2200)}applyRemoteDisplayEvent(_){if(!_)return;switch(_.type){case"protocol-version":this.setStatus(`Negotiated ${_.protocol.toUpperCase()} ${_.server} → ${_.client}.`),this.updateDisplayInfo(`Negotiated ${_.server} → ${_.client}.`),this.updateDisplayMeta();return;case"security-types":this.setStatus(`Server offered security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayInfo(`Security types: ${_.types.join(", ")||"none"}.`),this.updateDisplayMeta();return;case"security-selected":this.setStatus(`Using ${_.protocol.toUpperCase()} security type ${_.label}.`),this.updateDisplayInfo(`Security: ${_.label}.`),this.updateDisplayMeta();return;case"security-result":this.setStatus("Security negotiation complete. Waiting for server init…"),this.updateDisplayInfo("Security negotiation complete. Waiting for server init…"),this.updateDisplayMeta();return;case"display-init":this.ensureCanvasSize(_.width,_.height),this.setSessionChromeVisible(!1),this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for first framebuffer update (${_.width}×${_.height}).`),this.updateDisplayInfo(`Connected to ${_.name||this.targetLabel||this.targetId||"remote display"}. Waiting for first framebuffer update…`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"framebuffer-update":if(this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;let $=!1,j=(_.rects||[]).some((Q)=>Q.kind==="pipeline");if(_.framebuffer&&_.framebuffer.length>0&&_.width>0&&_.height>0&&j){this.ensureCanvasSize(_.width,_.height,{reveal:!0});for(let Z of _.rects||[])if(Z.kind==="resize")this.ensureCanvasSize(Z.width,Z.height);let Q=this.canvas?.getContext("2d",{alpha:!1});if(Q){let Z=new ImageData(new Uint8ClampedArray(_.framebuffer),_.width,_.height);Q.putImageData(Z,0,0),$=!0}}else for(let Q of _.rects||[]){if(Q.kind==="resize"){this.ensureCanvasSize(Q.width,Q.height);continue}if(Q.kind==="copy"){this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.copyCanvasRect(Q),$=!0;continue}if(Q.kind==="rgba")this.ensureCanvasSize(_.width,_.height,{reveal:!0}),this.drawRgbaRect(Q),$=!0}if($||this.hasRenderedFrame)this.protocolRecovering=!1,this.setStatus(`Rendering live framebuffer — ${_.width}×${_.height}.`),this.updateDisplayInfo(`Framebuffer update applied (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta();else this.setStatus(`Connected to ${this.targetLabel||this.targetId||"target"} — waiting for painted framebuffer data.`),this.updateDisplayInfo(`Framebuffer update received, but no paintable rects yet (${(_.rects||[]).length} rect${(_.rects||[]).length===1?"":"s"}).`),this.updateDisplayMeta("awaiting-frame"),this.scheduleRawFallbackTimeout();return;case"clipboard":this.setStatus("Remote clipboard updated."),this.updateDisplayInfo(`Clipboard text received (${_.text.length} chars).`),this.updateDisplayMeta();return;case"bell":this.setStatus("Remote display bell received."),this.updateDisplayInfo("Remote display bell received."),this.updateDisplayMeta();return}}async handleSocketMessage(_){if(_?.kind==="control"){let j=_.payload;if(j?.type==="vnc.error"){this.setStatus(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayInfo(`Proxy error: ${j.error||"Unknown error"}`),this.updateDisplayMeta("proxy-error");return}if(j?.type==="vnc.connected"){let Q=j?.target?.label||this.targetLabel||this.targetId;this.setStatus(`Connected to ${Q}. Waiting for VNC/RFB data…`),this.updateDisplayInfo(`Connected to ${Q}. Waiting for VNC handshake…`),this.updateDisplayMeta();return}if(j?.type==="pong")return;return}let $=this.protocol||(this.protocol=new u8);try{let j=_.data instanceof Blob?await _.data.arrayBuffer():_.data,Q=$.receive(j);for(let Z of Q.outgoing||[])this.socketBoundary?.send?.(Z);for(let Z of Q.events||[])this.applyRemoteDisplayEvent(Z)}catch(j){let Q=j?.message||"Unknown error";if(this.setSessionChromeVisible(!0),this.setStatus(`Display protocol error: ${Q}`),this.updateDisplayInfo(`Display protocol error: ${Q}`),this.updateDisplayMeta("protocol-error"),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(!this.rawFallbackAttempted&&!this.protocolRecovering&&/unexpected eof|zlib|decompress|protocol|buffer|undefined|not an object|reading '0'/i.test(Q))this.rawFallbackAttempted=!0,this.protocolRecovering=!0,this.connectWithEncodings("0")}}async connectSocket(_=null){if(!this.targetId||this.disposed)return;if(this.clearReconnectTimer(),this.protocolRecovering&&_==null)this.protocolRecovering=!1;try{this.socketBoundary?.dispose?.()}catch{}if(_==null)this.rawFallbackAttempted=!1,this.protocolRecovering=!1;let $=this.pendingHandoffToken||null,j=_==null?null:String(_).trim(),Q=await b2(),Z={};if(Q)Z.pipeline=Q,Z.decodeRawRect=(K,N,G,X)=>Q.decodeRawRectToRgba(K,N,G,X);let Y=l5(this.authPassword);if(Y!==null)Z.password=Y;if(j)Z.encodings=j;let q=Boolean(this.canvas&&this.hasRenderedFrame);if(this.protocol=new u8(Z),this.hasRenderedFrame=q,this.frameTimeoutId=null,this.canvas)this.canvas.style.display=q?"block":"none";if(this.displayPlaceholderEl)this.displayPlaceholderEl.style.display=q?"none":"";this.socketBoundary=new K$({url:WK(this.targetId,$),binaryType:"arraybuffer",onOpen:()=>{if($&&this.pendingHandoffToken===$)this.pendingHandoffToken=null;this.reconnectAttempts=0,this.setStatus(`Connected to proxy for ${this.targetId}. Waiting for VNC/RFB data…`),this.updateDisplayInfo("WebSocket proxy connected. Waiting for handshake…"),this.updateDisplayMeta(),this.socketBoundary?.sendControl?.({type:"ping"})},onMetrics:(K)=>{this.applyMetrics(K)},onMessage:(K)=>{this.handleSocketMessage(K)},onClose:()=>{if(this.setSessionChromeVisible(!0),this.frameTimeoutId)clearTimeout(this.frameTimeoutId),this.frameTimeoutId=null;if(this.disposed)return;if(this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("Remote display connection lost. Reconnecting…"),this.updateDisplayInfo("Remote display transport closed. Attempting to reconnect…"),this.updateDisplayMeta("reconnecting"),this.scheduleReconnect();return}this.setStatus(this.bytesIn>0?`Proxy closed after receiving ${this.bytesIn} byte(s).`:"Proxy closed."),this.updateDisplayInfo(this.bytesIn>0?"Remote display transport closed after receiving data.":"Remote display transport closed."),this.updateDisplayMeta("closed")},onError:()=>{if(this.setSessionChromeVisible(!0),this.bytesIn>0||this.hasRenderedFrame||this.reconnectAttempts>0){this.setStatus("WebSocket proxy connection failed. Reconnecting…"),this.updateDisplayInfo("WebSocket proxy connection failed. Attempting to reconnect…"),this.updateDisplayMeta("socket-reconnecting"),this.scheduleReconnect();return}this.setStatus("WebSocket proxy connection failed."),this.updateDisplayInfo("WebSocket proxy connection failed."),this.updateDisplayMeta("socket-error")}}),this.socketBoundary.connect()}connectWithEncodings(_){return this.connectSocket(_)}async load(){this.setStatus("");try{let _=await LK(this.targetId);if(!_?.enabled){this.renderTargets(_),this.setStatus("");return}if(!this.targetId){this.renderTargets(_),this.setStatus("");return}this.renderTargetSession(_),await this.connectSocket()}catch(_){this.resetLiveSession(),this.bodyEl.innerHTML=`
                <div style="max-width:620px;text-align:center;padding:28px;border:1px dashed var(--border-color);border-radius:14px;background:var(--bg-secondary);">
                    <div style="font-size:32px;margin-bottom:10px;">⚠️</div>
                    <div style="font-weight:600;margin-bottom:6px;">Failed to load VNC session</div>
                    <div style="color:var(--text-secondary);font-size:13px;line-height:1.5;">${r4(_?.message||"Unknown error")}</div>
                </div>
            `,this.setStatus(`Session load failed: ${_?.message||"Unknown error"}`)}}async preparePopoutTransfer(){if(!this.targetId)return null;let _=await BK(this.targetId),$=typeof _?.token==="string"?_.token.trim():"";if(!$)throw Error("No live VNC session is available to transfer.");return{vnc_handoff:$}}getContent(){return}isDirty(){return!1}focus(){this.canvas?.focus?.(),this.root?.focus?.()}resize(){this.updateCanvasScale()}dispose(){if(this.disposed)return;this.disposed=!0,this.resetLiveSession(),this.root?.remove?.()}}var D$={id:"vnc-viewer",label:"VNC",icon:"display",capabilities:["preview"],placement:"tabs",canHandle(_){let $=String(_?.path||"");return $===W4||$.startsWith(`${W4}/`)?9000:!1},mount(_,$){return new B7(_,$)}};function J_(_){if(typeof window>"u"||!window.localStorage)return null;try{return window.localStorage.getItem(_)}catch{return null}}function q1(_,$){if(typeof window>"u"||!window.localStorage)return;try{window.localStorage.setItem(_,$)}catch{}}function O5(_,$=!1){let j=J_(_);if(j===null)return $;return j==="true"}function o5(_,$=null){let j=J_(_);if(j===null)return $;let Q=parseInt(j,10);return Number.isFinite(Q)?Q:$}var M$="piclaw_theme",v8="piclaw_tint",z7="piclaw_chat_themes",a5={bgPrimary:"#ffffff",bgSecondary:"#f7f9fa",bgHover:"#e8ebed",textPrimary:"#0f1419",textSecondary:"#536471",borderColor:"#eff3f4",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},H7={bgPrimary:"#000000",bgSecondary:"#16181c",bgHover:"#1d1f23",textPrimary:"#e7e9ea",textSecondary:"#71767b",borderColor:"#2f3336",accent:"#1d9bf0",accentHover:"#1a8cd8",danger:"#f4212e",success:"#00ba7c"},W7={default:{label:"Default",mode:"auto",light:a5,dark:H7},tango:{label:"Tango",mode:"light",light:{bgPrimary:"#f6f5f4",bgSecondary:"#efedeb",bgHover:"#e5e3e1",textPrimary:"#2e3436",textSecondary:"#5c6466",borderColor:"#d3d7cf",accent:"#3465a4",accentHover:"#2c5890",danger:"#cc0000",success:"#4e9a06"}},xterm:{label:"XTerm",mode:"dark",dark:{bgPrimary:"#000000",bgSecondary:"#0a0a0a",bgHover:"#121212",textPrimary:"#d0d0d0",textSecondary:"#8a8a8a",borderColor:"#1f1f1f",accent:"#00a2ff",accentHover:"#0086d1",danger:"#ff5f5f",success:"#5fff87"}},monokai:{label:"Monokai",mode:"dark",dark:{bgPrimary:"#272822",bgSecondary:"#2f2f2f",bgHover:"#3a3a3a",textPrimary:"#f8f8f2",textSecondary:"#cfcfc2",borderColor:"#3e3d32",accent:"#f92672",accentHover:"#e81560",danger:"#f92672",success:"#a6e22e"}},"monokai-pro":{label:"Monokai Pro",mode:"dark",dark:{bgPrimary:"#2d2a2e",bgSecondary:"#363237",bgHover:"#403a40",textPrimary:"#fcfcfa",textSecondary:"#c1c0c0",borderColor:"#444046",accent:"#ff6188",accentHover:"#f74f7e",danger:"#ff4f5e",success:"#a9dc76"}},ristretto:{label:"Ristretto",mode:"dark",dark:{bgPrimary:"#2c2525",bgSecondary:"#362d2d",bgHover:"#403535",textPrimary:"#f4f1ef",textSecondary:"#cbbdb8",borderColor:"#4a3c3c",accent:"#ff9f43",accentHover:"#f28a2e",danger:"#ff5f56",success:"#a9dc76"}},dracula:{label:"Dracula",mode:"dark",dark:{bgPrimary:"#282a36",bgSecondary:"#303445",bgHover:"#3a3f52",textPrimary:"#f8f8f2",textSecondary:"#c5c8d6",borderColor:"#44475a",accent:"#bd93f9",accentHover:"#a87ded",danger:"#ff5555",success:"#50fa7b"}},catppuccin:{label:"Catppuccin",mode:"dark",dark:{bgPrimary:"#1e1e2e",bgSecondary:"#24273a",bgHover:"#2c2f41",textPrimary:"#cdd6f4",textSecondary:"#a6adc8",borderColor:"#313244",accent:"#89b4fa",accentHover:"#74a0f5",danger:"#f38ba8",success:"#a6e3a1"}},nord:{label:"Nord",mode:"dark",dark:{bgPrimary:"#2e3440",bgSecondary:"#3b4252",bgHover:"#434c5e",textPrimary:"#eceff4",textSecondary:"#d8dee9",borderColor:"#4c566a",accent:"#88c0d0",accentHover:"#78a9c0",danger:"#bf616a",success:"#a3be8c"}},gruvbox:{label:"Gruvbox",mode:"dark",dark:{bgPrimary:"#282828",bgSecondary:"#32302f",bgHover:"#3c3836",textPrimary:"#ebdbb2",textSecondary:"#bdae93",borderColor:"#3c3836",accent:"#d79921",accentHover:"#c28515",danger:"#fb4934",success:"#b8bb26"}},solarized:{label:"Solarized",mode:"auto",light:{bgPrimary:"#fdf6e3",bgSecondary:"#f5efdc",bgHover:"#eee8d5",textPrimary:"#586e75",textSecondary:"#657b83",borderColor:"#e0d8c6",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"},dark:{bgPrimary:"#002b36",bgSecondary:"#073642",bgHover:"#0b3c4a",textPrimary:"#eee8d5",textSecondary:"#93a1a1",borderColor:"#18424a",accent:"#268bd2",accentHover:"#1f78b3",danger:"#dc322f",success:"#859900"}},tokyo:{label:"Tokyo",mode:"dark",dark:{bgPrimary:"#1a1b26",bgSecondary:"#24283b",bgHover:"#2f3549",textPrimary:"#c0caf5",textSecondary:"#9aa5ce",borderColor:"#414868",accent:"#7aa2f7",accentHover:"#6b92e6",danger:"#f7768e",success:"#9ece6a"}},miasma:{label:"Miasma",mode:"dark",dark:{bgPrimary:"#1f1f23",bgSecondary:"#29292f",bgHover:"#33333a",textPrimary:"#e5e5e5",textSecondary:"#b4b4b4",borderColor:"#3d3d45",accent:"#c9739c",accentHover:"#b8618c",danger:"#e06c75",success:"#98c379"}},github:{label:"GitHub",mode:"auto",light:{bgPrimary:"#ffffff",bgSecondary:"#f6f8fa",bgHover:"#eaeef2",textPrimary:"#24292f",textSecondary:"#57606a",borderColor:"#d0d7de",accent:"#0969da",accentHover:"#0550ae",danger:"#cf222e",success:"#1a7f37"},dark:{bgPrimary:"#0d1117",bgSecondary:"#161b22",bgHover:"#21262d",textPrimary:"#c9d1d9",textSecondary:"#8b949e",borderColor:"#30363d",accent:"#2f81f7",accentHover:"#1f6feb",danger:"#f85149",success:"#3fb950"}},gotham:{label:"Gotham",mode:"dark",dark:{bgPrimary:"#0b0f14",bgSecondary:"#111720",bgHover:"#18212b",textPrimary:"#cbd6e2",textSecondary:"#9bb0c3",borderColor:"#1f2a37",accent:"#5ccfe6",accentHover:"#48b8ce",danger:"#d26937",success:"#2aa889"}}},HK=["--bg-primary","--bg-secondary","--bg-hover","--text-primary","--text-secondary","--border-color","--accent-color","--accent-hover","--accent-contrast-text","--accent-soft","--accent-soft-strong","--danger-color","--success-color","--search-highlight-color"],o4={theme:"default",tint:null},J7="light",E$=!1;function g8(_){let $=String(_||"").trim().toLowerCase();if(!$)return"default";if($==="solarized-dark"||$==="solarized-light")return"solarized";if($==="github-dark"||$==="github-light")return"github";if($==="tokyo-night")return"tokyo";return $}function D5(_){if(!_)return null;let $=String(_).trim();if(!$)return null;let j=$.startsWith("#")?$.slice(1):$;if(!/^[0-9a-fA-F]{3}$/.test(j)&&!/^[0-9a-fA-F]{6}$/.test(j))return null;let Q=j.length===3?j.split("").map((Y)=>Y+Y).join(""):j,Z=parseInt(Q,16);return{r:Z>>16&255,g:Z>>8&255,b:Z&255,hex:`#${Q.toLowerCase()}`}}function JK(_){if(!_||typeof document>"u")return null;let $=String(_).trim();if(!$)return null;let j=document.createElement("div");if(j.style.color="",j.style.color=$,!j.style.color)return null;let Q=j.style.color;try{if(document.body)j.style.display="none",document.body.appendChild(j),Q=getComputedStyle(j).color||j.style.color,document.body.removeChild(j)}catch{}let Z=Q.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/i);if(!Z)return null;let Y=parseInt(Z[1],10),q=parseInt(Z[2],10),K=parseInt(Z[3],10);if(![Y,q,K].every((G)=>Number.isFinite(G)))return null;let N=`#${[Y,q,K].map((G)=>G.toString(16).padStart(2,"0")).join("")}`;return{r:Y,g:q,b:K,hex:N}}function O7(_){return D5(_)||JK(_)}function s5(_,$,j){let Q=Math.round(_.r+($.r-_.r)*j),Z=Math.round(_.g+($.g-_.g)*j),Y=Math.round(_.b+($.b-_.b)*j);return`rgb(${Q} ${Z} ${Y})`}function k$(_,$){return`rgba(${_.r}, ${_.g}, ${_.b}, ${$})`}function OK(_){let $=_.r/255,j=_.g/255,Q=_.b/255,Z=$<=0.03928?$/12.92:Math.pow(($+0.055)/1.055,2.4),Y=j<=0.03928?j/12.92:Math.pow((j+0.055)/1.055,2.4),q=Q<=0.03928?Q/12.92:Math.pow((Q+0.055)/1.055,2.4);return 0.2126*Z+0.7152*Y+0.0722*q}function AK(_){return OK(_)>0.4?"#000000":"#ffffff"}function A7(){if(typeof window>"u")return"light";try{return window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}catch{return"light"}}function I$(_){return W7[_]||W7.default}function DK(_){return _.mode==="auto"?A7():_.mode}function D7(_,$){let j=I$(_);if($==="dark"&&j.dark)return j.dark;if($==="light"&&j.light)return j.light;return j.dark||j.light||a5}function E7(_,$,j){let Q=O7($);if(!Q)return _;let Z=D5(_.bgPrimary),Y=D5(_.bgSecondary),q=D5(_.bgHover),K=D5(_.borderColor);if(!Z||!Y||!q||!K)return _;let G=D5(j==="dark"?"#ffffff":"#000000");return{..._,bgPrimary:s5(Z,Q,0.08),bgSecondary:s5(Y,Q,0.12),bgHover:s5(q,Q,0.16),borderColor:s5(K,Q,0.08),accent:Q.hex,accentHover:G?s5(Q,G,0.18):Q.hex}}function EK(_,$){if(typeof document>"u")return;let j=document.documentElement,Q=_.accent,Z=O7(Q),Y=Z?k$(Z,$==="dark"?0.35:0.2):_.searchHighlight||_.searchHighlightColor,q=Z?k$(Z,$==="dark"?0.16:0.12):"rgba(29, 155, 240, 0.12)",K=Z?k$(Z,$==="dark"?0.28:0.2):"rgba(29, 155, 240, 0.2)",N=Z?AK(Z):$==="dark"?"#000000":"#ffffff",G={"--bg-primary":_.bgPrimary,"--bg-secondary":_.bgSecondary,"--bg-hover":_.bgHover,"--text-primary":_.textPrimary,"--text-secondary":_.textSecondary,"--border-color":_.borderColor,"--accent-color":Q,"--accent-hover":_.accentHover||Q,"--accent-soft":q,"--accent-soft-strong":K,"--accent-contrast-text":N,"--danger-color":_.danger||a5.danger,"--success-color":_.success||a5.success,"--search-highlight-color":Y||"rgba(29, 155, 240, 0.2)"};Object.entries(G).forEach(([X,V])=>{if(V)j.style.setProperty(X,V)})}function kK(){if(typeof document>"u")return;let _=document.documentElement;HK.forEach(($)=>_.style.removeProperty($))}function A5(_,$={}){if(typeof document>"u")return null;let j=typeof $.id==="string"&&$.id.trim()?$.id.trim():null,Q=j?document.getElementById(j):document.querySelector(`meta[name="${_}"]`);if(!Q)Q=document.createElement("meta"),document.head.appendChild(Q);if(Q.setAttribute("name",_),j)Q.setAttribute("id",j);return Q}function F7(_){let $=g8(o4?.theme||"default"),j=o4?.tint?String(o4.tint).trim():null,Q=D7($,_);if($==="default"&&j)Q=E7(Q,j,_);if(Q?.bgPrimary)return Q.bgPrimary;return _==="dark"?H7.bgPrimary:a5.bgPrimary}function MK(_,$){if(typeof document>"u")return;let j=A5("theme-color",{id:"dynamic-theme-color"});if(j&&_)j.removeAttribute("media"),j.setAttribute("content",_);let Q=A5("theme-color",{id:"theme-color-light"});if(Q)Q.setAttribute("media","(prefers-color-scheme: light)"),Q.setAttribute("content",F7("light"));let Z=A5("theme-color",{id:"theme-color-dark"});if(Z)Z.setAttribute("media","(prefers-color-scheme: dark)"),Z.setAttribute("content",F7("dark"));let Y=A5("msapplication-TileColor");if(Y&&_)Y.setAttribute("content",_);let q=A5("msapplication-navbutton-color");if(q&&_)q.setAttribute("content",_);let K=A5("apple-mobile-web-app-status-bar-style");if(K)K.setAttribute("content",$==="dark"?"black-translucent":"default")}function IK(){if(typeof window>"u")return;let _={...o4,mode:J7};window.dispatchEvent(new CustomEvent("piclaw-theme-change",{detail:_}))}function k7(){try{let _=J_(z7);if(!_)return{};let $=JSON.parse(_);return typeof $==="object"&&$!==null?$:{}}catch{return{}}}function xK(_,$,j){let Q=k7();if(!$&&!j)delete Q[_];else Q[_]={theme:$||"default",tint:j||null};q1(z7,JSON.stringify(Q))}function TK(_){if(!_)return null;return k7()[_]||null}function M7(){if(typeof window>"u")return"web:default";try{let $=new URL(window.location.href).searchParams.get("chat_jid");return $&&$.trim()?$.trim():"web:default"}catch{return"web:default"}}function x$(_,$={}){if(typeof window>"u"||typeof document>"u")return;let j=g8(_?.theme||"default"),Q=_?.tint?String(_.tint).trim():null,Z=I$(j),Y=DK(Z),q=D7(j,Y);o4={theme:j,tint:Q},J7=Y;let K=document.documentElement;K.dataset.theme=Y,K.dataset.colorTheme=j,K.dataset.tint=Q?String(Q):"",K.style.colorScheme=Y;let N=q;if(j==="default"&&Q)N=E7(q,Q,Y);if(j==="default"&&!Q)kK();else EK(N,Y);if(MK(N.bgPrimary,Y),IK(),$.persist!==!1)if(q1(M$,j),Q)q1(v8,Q);else q1(v8,"")}function f8(){if(I$(o4.theme).mode!=="auto")return;x$(o4,{persist:!1})}function I7(){if(typeof window>"u")return()=>{};let _=M7(),$=TK(_),j=$?g8($.theme||"default"):g8(J_(M$)||"default"),Q=$?$.tint?String($.tint).trim():null:(()=>{let Z=J_(v8);return Z?Z.trim():null})();if(x$({theme:j,tint:Q},{persist:!1}),window.matchMedia&&!E$){let Z=window.matchMedia("(prefers-color-scheme: dark)");if(Z.addEventListener)Z.addEventListener("change",f8);else if(Z.addListener)Z.addListener(f8);return E$=!0,()=>{if(Z.removeEventListener)Z.removeEventListener("change",f8);else if(Z.removeListener)Z.removeListener(f8);E$=!1}}return()=>{}}function x7(_){if(!_||typeof _!=="object")return;let $=_.chat_jid||_.chatJid||M7(),j=_.theme??_.name??_.colorTheme,Q=_.tint??null;if(xK($,j||"default",Q),x$({theme:j||"default",tint:Q},{persist:!1}),!$||$==="web:default")q1(M$,j||"default"),q1(v8,Q||"")}function T7(){if(typeof document>"u")return"light";let _=document.documentElement?.dataset?.theme;if(_==="dark"||_==="light")return _;return A7()}var b8=/#(\w+)/g,CK=new Set(["strong","em","b","i","u","s","br","p","ul","ol","li","blockquote","ruby","rt","rp","span"]),PK=new Set(["a","abbr","blockquote","br","code","div","em","hr","h1","h2","h3","h4","h5","h6","i","img","kbd","li","mark","ol","p","pre","ruby","rt","rp","s","span","strong","sub","sup","table","tbody","td","th","thead","tr","u","ul","math","semantics","mrow","mi","mn","mo","mtext","mspace","msup","msub","msubsup","mfrac","msqrt","mroot","mtable","mtr","mtd","annotation"]),yK=new Set(["class","style","title","role","aria-hidden","aria-label","aria-expanded","aria-live","data-mermaid","data-hashtag"]),SK={a:new Set(["href","target","rel"]),img:new Set(["src","alt","title"])},wK=new Set(["http:","https:","mailto:",""]);function T$(_){return String(_||"").replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;")}function s4(_,$={}){if(!_)return null;let j=String(_).trim();if(!j)return null;if(j.startsWith("#")||j.startsWith("/"))return j;if(j.startsWith("data:")){if($.allowDataImage&&/^data:image\//i.test(j))return j;return null}if(j.startsWith("blob:"))return j;try{let Q=new URL(j,typeof window<"u"?window.location.origin:"http://localhost");if(!wK.has(Q.protocol))return null;return Q.href}catch{return null}}function C7(_,$={}){if(!_)return"";let j=new DOMParser().parseFromString(_,"text/html"),Q=[],Z=j.createTreeWalker(j.body,NodeFilter.SHOW_ELEMENT),Y;while(Y=Z.nextNode())Q.push(Y);for(let q of Q){let K=q.tagName.toLowerCase();if(!PK.has(K)){let G=q.parentNode;if(!G)continue;while(q.firstChild)G.insertBefore(q.firstChild,q);G.removeChild(q);continue}let N=SK[K]||new Set;for(let G of Array.from(q.attributes)){let X=G.name.toLowerCase(),V=G.value;if(X.startsWith("on")){q.removeAttribute(G.name);continue}if(X.startsWith("data-")||X.startsWith("aria-"))continue;if(N.has(X)||yK.has(X)){if(X==="href"){let U=s4(V);if(!U)q.removeAttribute(G.name);else if(q.setAttribute(G.name,U),K==="a"&&!q.getAttribute("rel"))q.setAttribute("rel","noopener noreferrer")}else if(X==="src"){let U=K==="img"&&typeof $.rewriteImageSrc==="function"?$.rewriteImageSrc(V):V,B=s4(U,{allowDataImage:K==="img"});if(!B)q.removeAttribute(G.name);else q.setAttribute(G.name,B)}continue}q.removeAttribute(G.name)}}return j.body.innerHTML}function P7(_){if(!_)return _;let $=_.replace(/</g,"&lt;").replace(/>/g,"&gt;");return new DOMParser().parseFromString($,"text/html").documentElement.textContent}function m8(_,$=2){if(!_)return _;let j=_;for(let Q=0;Q<$;Q+=1){let Z=P7(j);if(Z===j)break;j=Z}return j}function RK(_){if(!_)return{text:"",blocks:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=[],Y=!1,q=[];for(let K of j){if(!Y&&K.trim().match(/^```mermaid\s*$/i)){Y=!0,q=[];continue}if(Y&&K.trim().match(/^```\s*$/)){let N=Q.length;Q.push(q.join(`
`)),Z.push(`@@MERMAID_BLOCK_${N}@@`),Y=!1,q=[];continue}if(Y)q.push(K);else Z.push(K)}if(Y)Z.push("```mermaid"),Z.push(...q);return{text:Z.join(`
`),blocks:Q}}function uK(_){if(!_)return _;return m8(_,5)}function fK(_){let $=new TextEncoder().encode(String(_||"")),j="";for(let Q of $)j+=String.fromCharCode(Q);return btoa(j)}function vK(_){let $=atob(String(_||"")),j=new Uint8Array($.length);for(let Q=0;Q<$.length;Q+=1)j[Q]=$.charCodeAt(Q);return new TextDecoder().decode(j)}function gK(_,$){if(!_||!$||$.length===0)return _;return _.replace(/@@MERMAID_BLOCK_(\d+)@@/g,(j,Q)=>{let Z=Number(Q),Y=$[Z]??"",q=uK(Y);return`<div class="mermaid-container" data-mermaid="${fK(q)}"><div class="mermaid-loading">Loading diagram...</div></div>`})}function y7(_){if(!_)return _;return _.replace(/<code>([\s\S]*?)<\/code>/gi,($,j)=>{if(j.includes(`
`))return`
\`\`\`
${j}
\`\`\`
`;return`\`${j}\``})}var bK={span:new Set(["title","class","lang","dir"])};function mK(_,$){let j=bK[_];if(!j||!$)return"";let Q=[],Z=/([a-zA-Z_:][\w:.-]*)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'`=<>]+)))?/g,Y;while(Y=Z.exec($)){let q=(Y[1]||"").toLowerCase();if(!q||q.startsWith("on")||!j.has(q))continue;let K=Y[2]??Y[3]??Y[4]??"";Q.push(` ${q}="${T$(K)}"`)}return Q.join("")}function S7(_){if(!_)return _;return _.replace(/&lt;([\s\S]*?)&gt;/g,($,j)=>{let Q=j.trim(),Z=Q.startsWith("/"),Y=Z?Q.slice(1).trim():Q,K=Y.endsWith("/")?Y.slice(0,-1).trim():Y,[N=""]=K.split(/\s+/,1),G=N.toLowerCase();if(!G||!CK.has(G))return $;if(G==="br")return Z?"":"<br>";if(Z)return`</${G}>`;let X=K.slice(N.length).trim(),V=mK(G,X);return`<${G}${V}>`})}function w7(_){if(!_)return _;let $=(j)=>j.replace(/&amp;lt;/g,"&lt;").replace(/&amp;gt;/g,"&gt;").replace(/&amp;quot;/g,"&quot;").replace(/&amp;#39;/g,"&#39;").replace(/&amp;amp;/g,"&amp;");return _.replace(/<pre><code>([\s\S]*?)<\/code><\/pre>/g,(j,Q)=>`<pre><code>${$(Q)}</code></pre>`).replace(/<code>([\s\S]*?)<\/code>/g,(j,Q)=>`<code>${$(Q)}</code>`)}function R7(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=(Y)=>Y.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&"),Z;while(Z=j.nextNode()){if(!Z.nodeValue)continue;let Y=Q(Z.nodeValue);if(Y!==Z.nodeValue)Z.nodeValue=Y}return $.body.innerHTML}function hK(_){if(!window.katex)return _;let $=(q)=>P7(q).replace(/&gt;/g,">").replace(/&lt;/g,"<").replace(/&amp;/g,"&").replace(/<br\s*\/?\s*>/gi,`
`),j=(q)=>{let K=[],N=q.replace(/<pre\b[^>]*>\s*<code\b[^>]*>[\s\S]*?<\/code>\s*<\/pre>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_BLOCK_${X}@@`});return N=N.replace(/<code\b[^>]*>[\s\S]*?<\/code>/gi,(G)=>{let X=K.length;return K.push(G),`@@CODE_INLINE_${X}@@`}),{html:N,blocks:K}},Q=(q,K)=>{if(!K.length)return q;return q.replace(/@@CODE_(?:BLOCK|INLINE)_(\d+)@@/g,(N,G)=>{let X=Number(G);return K[X]??""})},Z=j(_),Y=Z.html;return Y=Y.replace(/(^|\n|<br\s*\/?\s*>|<p>|<\/p>)\s*\$\$([\s\S]+?)\$\$\s*(?=\n|<br\s*\/?\s*>|<\/p>|$)/gi,(q,K,N)=>{try{let G=katex.renderToString($(N.trim()),{displayMode:!0,throwOnError:!1});return`${K}${G}`}catch(G){return`<span class="math-error" title="${T$(G.message)}">${q}</span>`}}),Y=Y.replace(/(^|[^\\$])\$(?!\s)([^\n$]+?)\$/g,(q,K,N)=>{if(/\s$/.test(N))return q;try{let G=katex.renderToString($(N),{displayMode:!1,throwOnError:!1});return`${K}${G}`}catch(G){return`${K}<span class="math-error" title="${T$(G.message)}">$${N}$</span>`}}),Q(Y,Z.blocks)}function pK(_){if(!_)return _;let $=new DOMParser().parseFromString(_,"text/html"),j=$.createTreeWalker($.body,NodeFilter.SHOW_TEXT),Q=[],Z;while(Z=j.nextNode())Q.push(Z);for(let Y of Q){let q=Y.nodeValue;if(!q)continue;if(b8.lastIndex=0,!b8.test(q))continue;b8.lastIndex=0;let K=Y.parentElement;if(K&&(K.closest("a")||K.closest("code")||K.closest("pre")))continue;let N=q.split(b8);if(N.length<=1)continue;let G=$.createDocumentFragment();N.forEach((X,V)=>{if(V%2===1){let U=$.createElement("a");U.setAttribute("href","#"),U.className="hashtag",U.setAttribute("data-hashtag",X),U.textContent=`#${X}`,G.appendChild(U)}else G.appendChild($.createTextNode(X))}),Y.parentNode?.replaceChild(G,Y)}return $.body.innerHTML}function cK(_){if(!_)return _;let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=[],Z=!1;for(let Y of j){if(!Z&&Y.trim().match(/^```(?:math|katex|latex)\s*$/i)){Z=!0,Q.push("$$");continue}if(Z&&Y.trim().match(/^```\s*$/)){Z=!1,Q.push("$$");continue}Q.push(Y)}return Q.join(`
`)}function lK(_){let $=cK(_||""),{text:j,blocks:Q}=RK($),Z=m8(j,2),q=y7(Z).replace(/</g,"&lt;");return{safeHtml:S7(q),mermaidBlocks:Q}}function O_(_,$,j={}){if(!_)return"";let{safeHtml:Q,mermaidBlocks:Z}=lK(_),Y=window.marked?marked.parse(Q,{headerIds:!1,mangle:!1}):Q.replace(/\n/g,"<br>");return Y=w7(Y),Y=R7(Y),Y=hK(Y),Y=pK(Y),Y=gK(Y,Z),Y=C7(Y,j),Y}function t5(_){if(!_)return"";let $=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`),j=m8($,2),Z=y7(j).replace(/</g,"&lt;").replace(/>/g,"&gt;"),Y=S7(Z),q=window.marked?marked.parse(Y):Y.replace(/\n/g,"<br>");return q=w7(q),q=R7(q),q=C7(q),q}function nK(_,$=6){return _.replace(/<polyline\b([^>]*)\bpoints="([^"]+)"([^>]*)\/?\s*>/g,(j,Q,Z,Y)=>{let q=Z.trim().split(/\s+/).map((N)=>{let[G,X]=N.split(",").map(Number);return{x:G,y:X}});if(q.length<3)return`<polyline${Q}points="${Z}"${Y}/>`;let K=[`M ${q[0].x},${q[0].y}`];for(let N=1;N<q.length-1;N++){let G=q[N-1],X=q[N],V=q[N+1],U=X.x-G.x,B=X.y-G.y,J=V.x-X.x,A=V.y-X.y,O=Math.sqrt(U*U+B*B),F=Math.sqrt(J*J+A*A),D=Math.min($,O/2,F/2);if(D<0.5){K.push(`L ${X.x},${X.y}`);continue}let E=X.x-U/O*D,g=X.y-B/O*D,u=X.x+J/F*D,l=X.y+A/F*D,P=U*A-B*J>0?1:0;K.push(`L ${E},${g}`),K.push(`A ${D},${D} 0 0 ${P} ${u},${l}`)}return K.push(`L ${q[q.length-1].x},${q[q.length-1].y}`),`<path${Q}d="${K.join(" ")}"${Y}/>`})}async function F4(_){if(!window.beautifulMermaid)return;let{renderMermaid:$,THEMES:j}=window.beautifulMermaid,Z=T7()==="dark"?j["tokyo-night"]:j["github-light"],Y=_.querySelectorAll(".mermaid-container[data-mermaid]");for(let q of Y)try{let K=q.dataset.mermaid,N=vK(K||""),G=m8(N,2),X=await $(G,{...Z,transparent:!0});X=nK(X),q.innerHTML=X,q.removeAttribute("data-mermaid")}catch(K){console.error("Mermaid render error:",K);let N=document.createElement("pre");N.className="mermaid-error",N.textContent=`Diagram error: ${K.message}`,q.innerHTML="",q.appendChild(N),q.removeAttribute("data-mermaid")}}function u7(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;let Q=new Date-$,Z=Q/1000,Y=86400000;if(Q<Y){if(Z<60)return"just now";if(Z<3600)return`${Math.floor(Z/60)}m`;return`${Math.floor(Z/3600)}h`}if(Q<5*Y){let N=$.toLocaleDateString(void 0,{weekday:"short"}),G=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${N} ${G}`}let q=$.toLocaleDateString(void 0,{month:"short",day:"numeric"}),K=$.toLocaleTimeString(void 0,{hour:"2-digit",minute:"2-digit"});return`${q} ${K}`}function e5(_){if(!Number.isFinite(_))return"0";return Math.round(_).toLocaleString()}function w_(_){if(_<1024)return _+" B";if(_<1048576)return(_/1024).toFixed(1)+" KB";return(_/1048576).toFixed(1)+" MB"}function a4(_){let $=new Date(_);if(Number.isNaN($.getTime()))return _;return $.toLocaleString()}function y4(_){return String(_||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function dK(_,$){let j=String(_||"").trim();if(!j)return j;if(/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(j)||j.startsWith("#")||j.startsWith("data:")||j.startsWith("blob:"))return j;let Q=j.match(/^([^?#]*)(\?[^#]*)?(#.*)?$/),Z=Q?.[1]||j,Y=Q?.[2]||"",q=Q?.[3]||"",K=String($||"").split("/").slice(0,-1).join("/"),G=Z.startsWith("/")?Z:`${K?`${K}/`:""}${Z}`,X=[];for(let U of G.split("/")){if(!U||U===".")continue;if(U===".."){if(X.length>0)X.pop();continue}X.push(U)}let V=X.join("/");return`${k8(V)}${Y}${q}`}function _8(_){return _?.preview||null}function iK(_){let $=String(_||""),j=Math.max($.lastIndexOf("/"),$.lastIndexOf("\\")),Q=j>=0?$.slice(j+1):$,Z=Q.lastIndexOf(".");if(Z<=0||Z===Q.length-1)return"none";return Q.slice(Z+1)}function rK(_){if(!_)return"unknown";if(_.kind==="image")return"image";if(_.kind==="text")return _.content_type==="text/markdown"?"markdown":"text";if(_.kind==="binary")return"binary";return String(_.kind||"unknown")}function oK(_,$){let j=$?.path||_?.path||"",Q=[];if($?.content_type)Q.push(`<span><strong>type:</strong> ${y4($.content_type)}</span>`);if(typeof $?.size==="number")Q.push(`<span><strong>size:</strong> ${y4(w_($.size))}</span>`);if($?.mtime)Q.push(`<span><strong>modified:</strong> ${y4(a4($.mtime))}</span>`);if(Q.push(`<span><strong>kind:</strong> ${y4(rK($))}</span>`),Q.push(`<span><strong>extension:</strong> ${y4(iK(j))}</span>`),j)Q.push(`<span><strong>path:</strong> ${y4(j)}</span>`);if($?.truncated)Q.push("<span><strong>content:</strong> truncated</span>");return`<div class="workspace-preview-meta workspace-preview-meta-inline">${Q.join("")}</div>`}function sK(_){let $=_8(_);if(!$)return'<div class="workspace-preview-text">No preview available.</div>';let j=oK(_,$);if($.kind==="image"){let Q=$.url||($.path?k8($.path):"");return`${j}
            <div class="workspace-preview-image">
                <img src="${y4(Q)}" alt="preview" />
            </div>
        `}if($.kind==="text"){if($.content_type==="text/markdown"){let Q=O_($.text||"",null,{rewriteImageSrc:(Z)=>dK(Z,$.path||_?.path)});return`${j}<div class="workspace-preview-text">${Q}</div>`}return`${j}<pre class="workspace-preview-text"><code>${y4($.text||"")}</code></pre>`}if($.kind==="binary")return`${j}<div class="workspace-preview-text">Binary file — download to view.</div>`;return`${j}<div class="workspace-preview-text">No preview available.</div>`}class C${constructor(_,$){this.container=_,this.context=$,this.disposed=!1,this.host=document.createElement("div"),this.host.className="workspace-preview-render-host",this.host.tabIndex=0,this.container.appendChild(this.host),this.render()}render(){if(this.disposed)return;this.host.innerHTML=sK(this.context)}getContent(){let _=_8(this.context);return typeof _?.text==="string"?_.text:void 0}isDirty(){return!1}setContent(_,$){let j=_8(this.context);if(j&&j.kind==="text"){if(j.text=_,$!==void 0)j.mtime=$}if(this.context.content=_,$!==void 0)this.context.mtime=$;this.render()}focus(){this.host?.focus?.()}dispose(){if(this.disposed)return;this.disposed=!0,this.host?.remove(),this.container.innerHTML=""}}var P$={id:"workspace-markdown-preview",label:"Workspace Markdown Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){let $=_8(_);if(_?.mode!=="view")return!1;if(!$||$.kind!=="text")return!1;return $.content_type==="text/markdown"?20:!1},mount(_,$){return new C$(_,$)}},y$={id:"workspace-preview-default",label:"Workspace Preview",icon:"preview",capabilities:["preview","readonly"],placement:"tabs",canHandle(_){if(_?.mode!=="view")return!1;return _8(_)||_?.path?1:!1},mount(_,$){return new C$(_,$)}};var aK=new Set([".docx",".doc",".odt",".rtf",".xlsx",".xls",".ods",".csv",".pptx",".ppt",".odp"]),tK={".docx":"Word Document",".doc":"Word (Legacy)",".odt":"OpenDocument Text",".rtf":"Rich Text",".xlsx":"Excel Spreadsheet",".xls":"Excel (Legacy)",".ods":"OpenDocument Spreadsheet",".csv":"CSV Data",".pptx":"PowerPoint",".ppt":"PowerPoint (Legacy)",".odp":"OpenDocument Presentation"},eK={".docx":"\uD83D\uDCDD",".doc":"\uD83D\uDCDD",".odt":"\uD83D\uDCDD",".rtf":"\uD83D\uDCDD",".xlsx":"\uD83D\uDCCA",".xls":"\uD83D\uDCCA",".ods":"\uD83D\uDCCA",".csv":"\uD83D\uDCCA",".pptx":"\uD83D\uDCFD️",".ppt":"\uD83D\uDCFD️",".odp":"\uD83D\uDCFD️"};function v7(_){if(!_)return"";let $=_.lastIndexOf(".");if($<0)return"";return _.slice($).toLowerCase()}function f7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class g7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=v7(j),Y=eK[Z]||"\uD83D\uDCC4",q=tK[Z]||"Office Document",K=document.createElement("div");K.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",K.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">${Y}</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${f7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${f7(q)}</div>
                <button id="ov-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(K);let N=K.querySelector("#ov-open-tab");if(N)N.addEventListener("click",()=>{let G=new CustomEvent("office-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(G)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class b7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=`/office-viewer/?url=${encodeURIComponent(Z)}&name=${encodeURIComponent(Q)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Y,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var S$={id:"office-viewer",label:"Office Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=v7(_?.path);if(!$||!aK.has($))return!1;return 50},mount(_,$){if($?.mode==="view")return new g7(_,$);return new b7(_,$)}};var _N=/\.(csv|tsv)$/i;function m7(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class h7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"table.csv",Z=j.toLowerCase().endsWith(".tsv")?"TSV Table":"CSV Table",Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCCA</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${m7(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">${m7(Z)}</div>
                <button id="csv-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#csv-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("csv-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class p7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/csv-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var w$={id:"csv-viewer",label:"CSV Viewer",icon:"table",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!_N.test($))return!1;return 55},mount(_,$){if($?.mode==="view")return new h7(_,$);return new p7(_,$)}};var $N=/\.pdf$/i;function jN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class c7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"document.pdf",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCC4</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${jN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">PDF Document</div>
                <button id="pdf-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#pdf-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("pdf-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class l7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/pdf-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var R$={id:"pdf-viewer",label:"PDF Viewer",icon:"file-text",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!$N.test($))return!1;return 52},mount(_,$){if($?.mode==="view")return new c7(_,$);return new l7(_,$)}};var QN=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i;function u$(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class n7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"image",Z=`/workspace/raw?path=${encodeURIComponent(j)}`,Y=document.createElement("div");Y.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary,#1a1a1a);",Y.innerHTML=`
            <div style="flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden;padding:16px;">
                <img src="${u$(Z)}" alt="${u$(Q)}" style="max-width:100%;max-height:100%;object-fit:contain;border-radius:4px;" />
            </div>
            <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border-top:1px solid var(--border-color,#333);flex-shrink:0;">
                <div style="font-size:12px;color:var(--text-secondary,#888);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;min-width:0;">${u$(Q)}</div>
                <button id="img-open-tab" style="padding:5px 14px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;flex-shrink:0;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Y);let q=Y.querySelector("#img-open-tab");if(q)q.addEventListener("click",()=>{let K=new CustomEvent("image-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(K)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class d7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/image-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:var(--bg-primary,#000);",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var f$={id:"image-viewer",label:"Image Viewer",icon:"image",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!QN.test($))return!1;return 48},mount(_,$){if($?.mode==="view")return new n7(_,$);return new d7(_,$)}};var ZN=/\.(mp4|m4v|mov|webm|ogv)$/i;function YN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}class i7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"video.mp4",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83C\uDFAC</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${YN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Video File</div>
                <button id="video-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Open in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#video-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("video-viewer:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class r7{container;iframe=null;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=`/video-viewer/?path=${encodeURIComponent(j)}`;this.iframe=document.createElement("iframe"),this.iframe.src=Q,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#111;",_.appendChild(this.iframe)}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,this.iframe)this.iframe.src="about:blank",this.iframe=null;this.container.innerHTML=""}}var v$={id:"video-viewer",label:"Video Viewer",icon:"play-circle",capabilities:["readonly","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!ZN.test($))return!1;return 54},mount(_,$){if($?.mode==="view")return new i7(_,$);return new r7(_,$)}};function qN(_){if(!_)return!1;let $=_.toLowerCase();return $.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png")}function KN(_){return _.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}var g$='<mxfile host="app.diagrams.net"><diagram id="page-1" name="Page-1"><mxGraphModel dx="1260" dy="720" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="850" pageHeight="1100" math="0" shadow="0"><root><mxCell id="0"/><mxCell id="1" parent="0"/></root></mxGraphModel></diagram></mxfile>';function o7(_){let $=String(_||"").trim();return $?$:g$}function NN(_){let $=String(_||"").toLowerCase();if($.endsWith(".drawio.svg")||$.endsWith(".svg"))return"xmlsvg";if($.endsWith(".drawio.png")||$.endsWith(".png"))return"xmlpng";return"xml"}function GN(_){let $="",j=32768;for(let Q=0;Q<_.length;Q+=j)$+=String.fromCharCode(..._.subarray(Q,Q+j));return btoa($)}function XN(_,$="*"){try{let j=(Y)=>{let q=_.parent||_.opener;if(!q)return!1;return q.postMessage(JSON.stringify({event:"workspace-export",...Y}),$),!0},Q=_.EditorUi;if(Q?.prototype&&!Q.prototype.__piclawWorkspaceSavePatched){let Y=Q.prototype.saveData;Q.prototype.saveData=function(q,K,N,G,X,V){try{if(q&&N!=null&&j({filename:q,format:K,data:N,mimeType:G,base64Encoded:Boolean(X),defaultMode:V}))return}catch(U){console.warn("[drawio-pane] saveData intercept failed, falling back to native save",U)}return Y.apply(this,arguments)},Q.prototype.__piclawWorkspaceSavePatched=!0}let Z=_.App;if(Z?.prototype&&!Z.prototype.__piclawExportPatched){let Y=Z.prototype.exportFile;Z.prototype.exportFile=function(q,K,N,G,X,V){try{if(K&&j({filename:K,data:q,mimeType:N,base64Encoded:Boolean(G),mode:X,folderId:V}))return}catch(U){console.warn("[drawio-pane] export intercept failed, falling back to native export",U)}return Y.apply(this,arguments)},Z.prototype.__piclawExportPatched=!0}return Boolean(Q?.prototype&&Q.prototype.__piclawWorkspaceSavePatched||Z?.prototype&&Z.prototype.__piclawExportPatched)}catch{return!1}}async function s7(_,$){let j=new Uint8Array(await _.arrayBuffer());return`data:${_.headers.get("Content-Type")||$};base64,${GN(j)}`}class a7{container;disposed=!1;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"diagram.drawio",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--bg-primary,#1a1a1a);",Z.innerHTML=`
            <div style="text-align:center;max-width:360px;padding:24px;">
                <div style="font-size:56px;margin-bottom:12px;">\uD83D\uDCD0</div>
                <div style="font-size:14px;font-weight:600;color:var(--text-primary,#e0e0e0);margin-bottom:4px;word-break:break-word;">${KN(Q)}</div>
                <div style="font-size:11px;color:var(--text-secondary,#888);margin-bottom:20px;">Draw.io Diagram</div>
                <button id="drawio-open-tab" style="padding:8px 20px;background:var(--accent-color,#1d9bf0);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:5px;font-size:13px;font-weight:500;cursor:pointer;
                    transition:background 0.15s;"
                    onmouseenter="this.style.background='var(--accent-hover,#1a8cd8)'"
                    onmouseleave="this.style.background='var(--accent-color,#1d9bf0)'">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z);let Y=Z.querySelector("#drawio-open-tab");if(Y)Y.addEventListener("click",()=>{let q=new CustomEvent("drawio:open-tab",{bubbles:!0,detail:{path:j}});_.dispatchEvent(q)})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){if(this.disposed)return;this.disposed=!0,this.container.innerHTML=""}}class t7{container;iframe=null;overlay=null;disposed=!1;filePath;fileName;format;xmlData="";fileLoaded=!1;editorReady=!1;loadSent=!1;saveChain=Promise.resolve();onMessageBound;constructor(_,$){this.container=_,this.filePath=$.path||"",this.fileName=this.filePath.split("/").pop()||"diagram.drawio",this.format=NN(this.filePath),this.onMessageBound=this.onMessage.bind(this);let j=document.createElement("div");j.style.cssText="position:relative;width:100%;height:100%;background:#1e1e1e;",this.overlay=document.createElement("div"),this.overlay.style.cssText="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#999;font:14px system-ui,sans-serif;z-index:1;pointer-events:none;",this.overlay.textContent="Loading draw.io editor…",j.appendChild(this.overlay);let Z=`/drawio/index.html?embed=1&proto=json&spin=1&modified=0&noSaveBtn=1&noExitBtn=1&saveAndExit=0&libraries=0&ui=dark&dark=${window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"1":"0"}`;this.iframe=document.createElement("iframe"),this.iframe.src=Z,this.iframe.style.cssText="width:100%;height:100%;border:none;background:#1e1e1e;position:relative;z-index:0;",this.iframe.addEventListener("load",()=>{let Y=()=>{if(!this.iframe?.contentWindow||this.disposed)return;if(XN(this.iframe.contentWindow))return;setTimeout(Y,250)};Y()}),j.appendChild(this.iframe),_.appendChild(j),window.addEventListener("message",this.onMessageBound),this.loadFile()}async loadFile(){if(!this.filePath){this.xmlData=g$,this.fileLoaded=!0,this.trySendLoad();return}try{let _=await fetch(`/workspace/raw?path=${encodeURIComponent(this.filePath)}`);if(_.ok)if(this.format==="xmlsvg")this.xmlData=await s7(_,"image/svg+xml");else if(this.format==="xmlpng")this.xmlData=await s7(_,"image/png");else this.xmlData=o7(await _.text());else if(_.status===404)this.xmlData=g$;else throw Error(`HTTP ${_.status}`);this.fileLoaded=!0,this.trySendLoad()}catch(_){if(this.overlay)this.overlay.textContent=`Failed to load: ${_ instanceof Error?_.message:String(_)}`}}trySendLoad(){if(this.disposed||this.loadSent||!this.editorReady||!this.fileLoaded||!this.iframe?.contentWindow)return;if(this.loadSent=!0,this.iframe.contentWindow.postMessage(JSON.stringify({action:"load",xml:this.format==="xml"?o7(this.xmlData):this.xmlData,autosave:1,saveAndExit:"0",noSaveBtn:"1",noExitBtn:"1",title:this.fileName}),"*"),this.overlay)this.overlay.style.display="none"}queueSave(_,$){if(!this.filePath)return;this.saveChain=this.saveChain.then(async()=>{let j=await fetch("/drawio/save",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,format:_.format||this.format,xml:_.xml,data:_.data,mimeType:_.mimeType,filename:_.filename,base64Encoded:_.base64Encoded})});if(!j.ok)throw Error(`HTTP ${j.status}`);if($&&this.iframe?.contentWindow)this.iframe.contentWindow.postMessage(JSON.stringify({action:"status",message:"Saved",modified:!1}),"*")}).catch((j)=>{if(console.error("[drawio-pane] save failed:",j),this.overlay)this.overlay.style.display="flex",this.overlay.textContent=`Save failed: ${j instanceof Error?j.message:String(j)}`})}onMessage(_){if(this.disposed||_.source!==this.iframe?.contentWindow)return;let $;try{$=typeof _.data==="string"?JSON.parse(_.data):_.data}catch{return}switch($?.event){case"init":this.editorReady=!0,this.trySendLoad();break;case"autosave":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!1)}else if(typeof $.xml==="string")this.xmlData=$.xml;break;case"save":if(this.format==="xml"){if(typeof $.xml==="string")this.queueSave({xml:$.xml,format:"xml"},!0)}else if(typeof $.xml==="string"&&this.iframe?.contentWindow)this.xmlData=$.xml,this.iframe.contentWindow.postMessage(JSON.stringify({action:"export",format:this.format,xml:$.xml,spinKey:"export"}),"*");break;case"export":if(typeof $.data==="string")this.queueSave({data:$.data,format:this.format,xml:typeof $.xml==="string"?$.xml:void 0},!0);break;case"workspace-export":if(typeof $.data==="string")this.queueSave({data:$.data,xml:typeof $.xml==="string"?$.xml:void 0,mimeType:typeof $.mimeType==="string"?$.mimeType:void 0,filename:typeof $.filename==="string"?$.filename:void 0,base64Encoded:Boolean($.base64Encoded),format:this.format},!0);break;case"exit":default:break}}getContent(){return}isDirty(){return!1}focus(){this.iframe?.focus()}resize(){}dispose(){if(this.disposed)return;if(this.disposed=!0,window.removeEventListener("message",this.onMessageBound),this.iframe)this.iframe.src="about:blank",this.iframe=null;this.overlay=null,this.container.innerHTML=""}}var b$={id:"drawio-editor",label:"Draw.io Editor",icon:"git-merge",capabilities:["edit","preview"],placement:"tabs",canHandle(_){if(!qN(_?.path))return!1;return 60},mount(_,$){if($?.mode==="view")return new a7(_,$);return new t7(_,$)}};var VN=/\.mindmap\.ya?ml$/i,m$=String(Date.now());function e7(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function h$(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function UN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}function LN(_){let $=document.createElementNS("http://www.w3.org/2000/svg","svg");$.id="mindmap-svg",$.setAttribute("width","100%"),$.setAttribute("height","100%"),$.style.cssText="display:block;position:absolute;inset:0;",_.appendChild($);let j=document.createElement("div");j.id="toolbar",j.className="mindmap-toolbar",j.innerHTML=`
        <select id="layout-select">
            <option value="horizontal-tree">Horizontal Tree</option>
            <option value="vertical-tree">Vertical Tree</option>
            <option value="radial">Radial</option>
            <option value="force-directed">Force Directed</option>
        </select>
        <button type="button" id="zoom-fit" title="Fit to view">⊞</button>
        <button type="button" id="zoom-in"  title="Zoom in">+</button>
        <button type="button" id="zoom-out" title="Zoom out">−</button>
        <button type="button" id="reset-layout" title="Reset layout">↻</button>
    `,_.appendChild(j);let Q=document.createElement("div");Q.id="context-menu",Q.className="context-menu hidden",Q.innerHTML=`
        <button data-action="cut">Cut</button>
        <button data-action="copy">Copy</button>
        <button data-action="paste">Paste</button>
        <hr/>
        <button data-action="add-child">Add child</button>
        <button data-action="add-sibling">Add sibling</button>
        <hr/>
        <button data-action="delete">Delete</button>
    `,_.appendChild(Q)}class _9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"mindmap",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83E\uDDE0</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Mindmap Editor</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="mm-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">Edit in Tab</button>
            </div>`,_.appendChild(Z),Z.querySelector("#mm-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("mindmap:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class $9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;mindmapEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__mindmapEditor?.setTheme?.(e7())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;if(this.lastContent=$,UN("/static/css/mindmap.css"),await Promise.all([h$("/static/js/vendor/d3-mindmap.min.js?v="+m$),h$("/static/js/vendor/js-yaml.min.js?v="+m$)]),this.disposed)return;this.mindmapEl=document.createElement("div"),this.mindmapEl.id="mindmap-container",this.mindmapEl.tabIndex=-1,this.mindmapEl.style.cssText="width:100%;height:100%;overflow:hidden;position:relative;outline:none;",this.container.appendChild(this.mindmapEl),LN(this.mindmapEl);let j=e7(),Q=this.filePath.replace(/\/[^/]+$/,"")||"/";try{if(await h$("/static/js/vendor/mindmap-editor.js?v="+m$),this.disposed)return;let Z=window.__mindmapEditor;if(!Z)throw Error("__mindmapEditor not found");if(Z.mount({content:$,isDark:j,onEdit:(Y)=>{this.lastContent=Y,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Y)},resolveImagePath:(Y)=>{if(Y.startsWith("data:")||Y.startsWith("http"))return Y;return`/workspace/raw?path=${encodeURIComponent(Q+"/"+Y)}`}}),this.pendingContent!==null)Z.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Z){if(console.error("[mindmap] Failed to load mindmap renderer:",Z),this.mindmapEl)this.mindmapEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load mindmap editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[mindmap] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__mindmapEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.mindmapEl?.focus()}resize(){window.dispatchEvent(new Event("resize"))}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__mindmapEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var p$={id:"mindmap-editor",label:"Mindmap Editor",icon:"mindmap",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!VN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new _9(_,$);return new $9(_,$)}};var BN=/\.kanban\.md$/i,WN=String(Date.now());function j9(){let _=document.documentElement?.dataset?.theme;if(_==="dark")return!0;if(_==="light")return!1;try{return!!window.matchMedia?.("(prefers-color-scheme: dark)")?.matches}catch{return!1}}function FN(){let _=window;if(_.preact)return;_.preact={h:O8,render:T4,Component:G5,createContext:z2},_.preactHooks={useState:v,useEffect:f,useCallback:T,useRef:x,useMemo:u0,useReducer:C6,useContext:O2,useLayoutEffect:u5,useImperativeHandle:J2,useErrorBoundary:D2,useDebugValue:A2},_.htm={bind:()=>L}}function zN(_){let $=_.split("?")[0];if(document.querySelector(`script[data-src="${$}"]`))return Promise.resolve();let Q=document.querySelector(`script[src="${$}"]`);if(Q)Q.remove();return new Promise((Z,Y)=>{let q=document.createElement("script");q.src=_,q.dataset.src=$,q.onload=()=>Z(),q.onerror=()=>Y(Error(`Failed to load ${_}`)),document.head.appendChild(q)})}function HN(_){if(document.querySelector(`link[href="${_}"]`))return;let $=document.createElement("link");$.rel="stylesheet",$.href=_,document.head.appendChild($)}class Q9{container;constructor(_,$){this.container=_;let j=$.path||"",Q=j.split("/").pop()||"kanban",Z=document.createElement("div");Z.style.cssText="width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-primary);",Z.innerHTML=`
            <div style="flex:1;display:flex;align-items:center;justify-content:center;padding:24px;">
                <div style="text-align:center;">
                    <div style="font-size:32px;margin-bottom:8px;">\uD83D\uDCCB</div>
                    <div style="font-size:14px;color:var(--text-primary);">${Q}</div>
                    <div style="font-size:12px;color:var(--text-secondary);margin-top:4px;">Kanban Board</div>
                </div>
            </div>
            <div style="display:flex;align-items:center;justify-content:flex-end;padding:8px 16px;border-top:1px solid var(--border-color);flex-shrink:0;">
                <button id="kb-open-tab" style="padding:5px 14px;background:var(--accent-color);color:var(--accent-contrast-text,#fff);
                    border:none;border-radius:4px;font-size:12px;font-weight:500;cursor:pointer;">
                    Edit in Tab
                </button>
            </div>
        `,_.appendChild(Z),Z.querySelector("#kb-open-tab")?.addEventListener("click",()=>{_.dispatchEvent(new CustomEvent("kanban:open-tab",{bubbles:!0,detail:{path:j}}))})}getContent(){return}isDirty(){return!1}focus(){}resize(){}dispose(){this.container.innerHTML=""}}class Z9{container;filePath;dirty=!1;dirtyCallback=null;disposed=!1;boardEl=null;pendingContent=null;lastContent="";themeListener=()=>{window.__kanbanEditor?.setTheme?.(j9())};constructor(_,$){this.container=_,this.filePath=$.path||"",this.init($.content)}async resolveInitialContent(_){if(_!==void 0)return _;if(!this.filePath)return"";try{return(await(await fetch(`/workspace/file?path=${encodeURIComponent(this.filePath)}&max=1000000&mode=edit`)).json())?.text||""}catch{return""}}async init(_){let $=await this.resolveInitialContent(_);if(this.disposed)return;this.lastContent=$,HN("/static/css/kanban.css"),this.boardEl=document.createElement("div"),this.boardEl.id="kanban-container",this.boardEl.style.cssText="width:100%;height:100%;overflow:auto;position:relative;",this.container.appendChild(this.boardEl);let j=j9();try{if(FN(),await zN("/static/js/vendor/kanban-editor.js?v="+WN),this.disposed)return;let Q=window.__kanbanEditor;if(!Q)throw Error("__kanbanEditor not found");if(Q.mount(this.boardEl,{content:$,isDark:j,onEdit:(Z)=>{this.lastContent=Z,this.dirty=!0,this.dirtyCallback?.(!0),this.saveToWorkspace(Z)}}),this.pendingContent!==null)Q.update(this.pendingContent),this.lastContent=this.pendingContent,this.pendingContent=null;window.addEventListener("piclaw-theme-change",this.themeListener)}catch(Q){if(console.error("[kanban] Failed to load kanban renderer:",Q),this.boardEl)this.boardEl.innerHTML='<div style="padding:24px;color:var(--text-secondary);">Failed to load kanban editor.</div>'}}async saveToWorkspace(_){if(!this.filePath)return;try{let $=await fetch("/workspace/file",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:this.filePath,content:_})});if(!$.ok)throw Error(`HTTP ${$.status}`);this.dirty=!1,this.dirtyCallback?.(!1)}catch($){console.error("[kanban] Save failed:",$)}}getContent(){return}isDirty(){return this.dirty}setContent(_,$){if(_===this.lastContent)return;let j=window.__kanbanEditor;if(j?.update)j.update(_);else this.pendingContent=_;this.lastContent=_,this.dirty=!1,this.dirtyCallback?.(!1)}focus(){this.boardEl?.focus()}resize(){}onDirtyChange(_){this.dirtyCallback=_}dispose(){if(this.disposed)return;this.disposed=!0,window.removeEventListener("piclaw-theme-change",this.themeListener),window.__kanbanEditor?.destroy(),this.pendingContent=null,this.container.innerHTML=""}}var c$={id:"kanban-editor",label:"Kanban Board",icon:"kanban",capabilities:["edit","preview"],placement:"tabs",canHandle(_){let $=_?.path||"";if(!BN.test($))return!1;return 50},mount(_,$){if($?.mode==="view")return new Q9(_,$);return new Z9(_,$)}};class Y9{tabs=new Map;activeId=null;mruOrder=[];listeners=new Set;onChange(_){return this.listeners.add(_),()=>this.listeners.delete(_)}notify(){let _=this.getTabs(),$=this.activeId;for(let j of this.listeners)try{j(_,$)}catch(Q){console.warn("[tab-store] Change listener failed:",Q)}}open(_,$){let j=this.tabs.get(_);if(!j)j={id:_,label:$||_.split("/").pop()||_,path:_,dirty:!1,pinned:!1},this.tabs.set(_,j);return this.activate(_),j}activate(_){if(!this.tabs.has(_))return;this.activeId=_,this.mruOrder=[_,...this.mruOrder.filter(($)=>$!==_)],this.notify()}close(_){if(!this.tabs.get(_))return!1;if(this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_),this.activeId===_)this.activeId=this.mruOrder[0]||null;return this.notify(),!0}closeOthers(_){for(let[$,j]of this.tabs)if($!==_&&!j.pinned)this.tabs.delete($),this.mruOrder=this.mruOrder.filter((Q)=>Q!==$);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=_;this.notify()}closeAll(){for(let[_,$]of this.tabs)if(!$.pinned)this.tabs.delete(_),this.mruOrder=this.mruOrder.filter((j)=>j!==_);if(this.activeId&&!this.tabs.has(this.activeId))this.activeId=this.mruOrder[0]||null;this.notify()}setDirty(_,$){let j=this.tabs.get(_);if(!j||j.dirty===$)return;j.dirty=$,this.notify()}togglePin(_){let $=this.tabs.get(_);if(!$)return;$.pinned=!$.pinned,this.notify()}saveViewState(_,$){let j=this.tabs.get(_);if(j)j.viewState=$}getViewState(_){return this.tabs.get(_)?.viewState}rename(_,$,j){let Q=this.tabs.get(_);if(!Q)return;if(this.tabs.delete(_),Q.id=$,Q.path=$,Q.label=j||$.split("/").pop()||$,this.tabs.set($,Q),this.mruOrder=this.mruOrder.map((Z)=>Z===_?$:Z),this.activeId===_)this.activeId=$;this.notify()}getTabs(){return Array.from(this.tabs.values())}getActiveId(){return this.activeId}getActive(){return this.activeId?this.tabs.get(this.activeId)||null:null}get(_){return this.tabs.get(_)}get size(){return this.tabs.size}hasUnsaved(){for(let _ of this.tabs.values())if(_.dirty)return!0;return!1}getDirtyTabs(){return Array.from(this.tabs.values()).filter((_)=>_.dirty)}nextTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($+1)%_.length];this.activate(j.id)}prevTab(){let _=this.getTabs();if(_.length<=1)return;let $=_.findIndex((Q)=>Q.id===this.activeId),j=_[($-1+_.length)%_.length];this.activate(j.id)}mruSwitch(){if(this.mruOrder.length>1)this.activate(this.mruOrder[1])}}var t0=new Y9;function q9({handleSseEvent:_,handleConnectionStatusChange:$,loadPosts:j,onWake:Q,chatJid:Z}){let Y=x(_);Y.current=_;let q=x($);q.current=$;let K=x(j);K.current=j;let N=x(Q);N.current=Q,f(()=>{let G=new I8((V,U)=>Y.current(V,U),(V)=>q.current(V),{chatJid:Z});G.connect();let X=()=>{G.reconnectIfNeeded();let V=typeof document<"u"?document:null;if(!V||V.visibilityState==="visible")N.current?.()};return window.addEventListener("focus",X),document.addEventListener("visibilitychange",X),()=>{window.removeEventListener("focus",X),document.removeEventListener("visibilitychange",X),G.disconnect()}},[Z])}function K9(){let[_,$]=v(!1),[j,Q]=v("default"),Z=x(!1);f(()=>{let N=O5("notificationsEnabled",!1);if(Z.current=N,$(N),typeof Notification<"u")Q(Notification.permission)},[]),f(()=>{Z.current=_},[_]);let Y=T(()=>{if(typeof Notification>"u")return Promise.resolve("denied");try{let N=Notification.requestPermission();if(N&&typeof N.then==="function")return N;return Promise.resolve(N)}catch{return Promise.resolve("default")}},[]),q=T(async()=>{if(typeof window>"u"||typeof Notification>"u")return;if(!window.isSecureContext){alert("Notifications require a secure context (HTTPS or installed app).");return}if(Notification.permission==="denied"){Q("denied"),alert("Browser notifications are blocked. Enable them in your browser settings.");return}if(Notification.permission==="default"){let G=await Y();if(Q(G||"default"),G!=="granted"){Z.current=!1,$(!1),q1("notificationsEnabled","false");return}}let N=!Z.current;Z.current=N,$(N),q1("notificationsEnabled",String(N))},[Y]),K=T((N,G)=>{if(!Z.current)return!1;if(typeof Notification>"u")return!1;if(Notification.permission!=="granted")return!1;try{let X=new Notification(N,{body:G});return X.onclick=()=>{try{window.focus()}catch{}},!0}catch{return!1}},[]);return{notificationsEnabled:_,notificationPermission:j,toggleNotifications:q,notify:K}}var $8=(_)=>{let $=new Set;return(_||[]).filter((j)=>{if(!j||$.has(j.id))return!1;return $.add(j.id),!0})};function N9({preserveTimelineScroll:_,preserveTimelineScrollTop:$,chatJid:j=null}){let[Q,Z]=v(null),[Y,q]=v(!1),K=x(!1),N=x(null),G=x(!1),X=x(null),V=x(null),U=x(0);f(()=>{K.current=Y},[Y]),f(()=>{V.current=Q},[Q]),f(()=>{U.current+=1,X.current=null,G.current=!1,K.current=!1,q(!1)},[j]);let B=T(async(O=null)=>{let F=U.current;try{if(O){let D=await y6(O,50,0,j);if(F!==U.current)return;Z(D.posts),q(!1)}else{let D=await n4(10,null,j);if(F!==U.current)return;Z(D.posts),q(D.has_more)}}catch(D){if(F!==U.current)return;console.error("Failed to load posts:",D)}},[j]),J=T(async()=>{let O=U.current;try{let F=await n4(10,null,j);if(O!==U.current)return;Z((D)=>{if(!D||D.length===0)return F.posts;return $8([...F.posts,...D])}),q((D)=>D||F.has_more)}catch(F){if(O!==U.current)return;console.error("Failed to refresh timeline:",F)}},[j]),A=T(async(O={})=>{let F=U.current,D=V.current;if(!D||D.length===0)return;if(G.current)return;let{preserveScroll:E=!0,preserveMode:g="top",allowRepeat:u=!1}=O,l=(I)=>{if(!E){I();return}if(g==="top")$(I);else _(I)},P=D.slice().sort((I,z)=>I.id-z.id)[0]?.id;if(!Number.isFinite(P))return;if(!u&&X.current===P)return;G.current=!0,X.current=P;try{let I=await n4(10,P,j);if(F!==U.current)return;if(I.posts.length>0)l(()=>{Z((z)=>$8([...I.posts,...z||[]])),q(I.has_more)});else q(!1)}catch(I){if(F!==U.current)return;console.error("Failed to load more posts:",I)}finally{if(F===U.current)G.current=!1}},[j,_,$]);return f(()=>{N.current=A},[A]),{posts:Q,setPosts:Z,hasMore:Y,setHasMore:q,hasMoreRef:K,loadPosts:B,refreshTimeline:J,loadMore:A,loadMoreRef:N,loadingMoreRef:G,lastBeforeIdRef:X}}function G9(){let[_,$]=v(null),[j,Q]=v({text:"",totalLines:0}),[Z,Y]=v(""),[q,K]=v({text:"",totalLines:0}),[N,G]=v(null),[X,V]=v(null),[U,B]=v(null),J=x(null),A=x(0),O=x(!1),F=x(""),D=x(""),E=x(null),g=x(null),u=x(null),l=x(null),o=x(!1),P=x(!1);return{agentStatus:_,setAgentStatus:$,agentDraft:j,setAgentDraft:Q,agentPlan:Z,setAgentPlan:Y,agentThought:q,setAgentThought:K,pendingRequest:N,setPendingRequest:G,currentTurnId:X,setCurrentTurnId:V,steerQueuedTurnId:U,setSteerQueuedTurnId:B,lastAgentEventRef:J,lastSilenceNoticeRef:A,isAgentRunningRef:O,draftBufferRef:F,thoughtBufferRef:D,pendingRequestRef:E,stalledPostIdRef:g,currentTurnIdRef:u,steerQueuedTurnIdRef:l,thoughtExpandedRef:o,draftExpandedRef:P}}function X9({appShellRef:_,sidebarWidthRef:$,editorWidthRef:j,dockHeightRef:Q}){let Z=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,B=$.current||280,J=X.currentTarget;J.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientX;let E=Math.min(Math.max(B+(D.clientX-U),160),600);V.style.setProperty("--sidebar-width",`${E}px`),$.current=E},F=()=>{let D=Math.min(Math.max(B+(A-U),160),600);$.current=D,J.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.cursor="",document.body.style.userSelect="",q1("sidebarWidth",String(Math.round(D))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,Y=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let B=U.clientX,J=$.current||280,A=X.currentTarget;A.classList.add("dragging"),V.classList.add("sidebar-resizing"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let g=Math.min(Math.max(J+(E.clientX-B),160),600);V.style.setProperty("--sidebar-width",`${g}px`),$.current=g},F=()=>{A.classList.remove("dragging"),V.classList.remove("sidebar-resizing"),document.body.style.userSelect="",q1("sidebarWidth",String(Math.round($.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current,q=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientX,B=j.current||$.current||280,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="col-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientX;let E=Math.min(Math.max(B+(D.clientX-U),200),800);V.style.setProperty("--editor-width",`${E}px`),j.current=E},F=()=>{let D=Math.min(Math.max(B+(A-U),200),800);j.current=D,J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("editorWidth",String(Math.round(D))),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,K=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let B=U.clientX,J=j.current||$.current||280,A=X.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let g=Math.min(Math.max(J+(E.clientX-B),200),800);V.style.setProperty("--editor-width",`${g}px`),j.current=g},F=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",q1("editorWidth",String(Math.round(j.current||J))),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current,N=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.clientY,B=Q?.current||200,J=X.currentTarget;J.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let A=U,O=(D)=>{A=D.clientY;let E=Math.min(Math.max(B-(D.clientY-U),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${E}px`),Q)Q.current=E;window.dispatchEvent(new CustomEvent("dock-resize"))},F=()=>{let D=Math.min(Math.max(B-(A-U),100),window.innerHeight*0.5);if(Q)Q.current=D;J.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("dockHeight",String(Math.round(D))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("mousemove",O),document.removeEventListener("mouseup",F)};document.addEventListener("mousemove",O),document.addEventListener("mouseup",F)}).current,G=x((X)=>{X.preventDefault();let V=_.current;if(!V)return;let U=X.touches[0];if(!U)return;let B=U.clientY,J=Q?.current||200,A=X.currentTarget;A.classList.add("dragging"),document.body.style.userSelect="none";let O=(D)=>{let E=D.touches[0];if(!E)return;D.preventDefault();let g=Math.min(Math.max(J-(E.clientY-B),100),window.innerHeight*0.5);if(V.style.setProperty("--dock-height",`${g}px`),Q)Q.current=g;window.dispatchEvent(new CustomEvent("dock-resize"))},F=()=>{A.classList.remove("dragging"),document.body.style.userSelect="",q1("dockHeight",String(Math.round(Q?.current||J))),window.dispatchEvent(new CustomEvent("dock-resize")),document.removeEventListener("touchmove",O),document.removeEventListener("touchend",F),document.removeEventListener("touchcancel",F)};document.addEventListener("touchmove",O,{passive:!1}),document.addEventListener("touchend",F),document.addEventListener("touchcancel",F)}).current;return{handleSplitterMouseDown:Z,handleSplitterTouchStart:Y,handleEditorSplitterMouseDown:q,handleEditorSplitterTouchStart:K,handleDockSplitterMouseDown:N,handleDockSplitterTouchStart:G}}function JN(_,$,j,Q){if(!(_ instanceof Map)||_.size===0||!$||!j)return _;let Z=!1,Y=new Map;for(let[q,K]of _.entries()){let N=q;if(Q==="dir"){if(q===$)N=j,Z=!0;else if(q.startsWith(`${$}/`))N=`${j}${q.slice($.length)}`,Z=!0}else if(q===$)N=j,Z=!0;Y.set(N,K)}return Z?Y:_}function V9({onTabClosed:_}={}){let $=x(_);$.current=_;let[j,Q]=v(()=>t0.getTabs()),[Z,Y]=v(()=>t0.getActiveId()),[q,K]=v(()=>t0.getTabs().length>0);f(()=>{return t0.onChange((P,I)=>{Q(P),Y(I),K(P.length>0)})},[]);let[N,G]=v(()=>new Set),[X,V]=v(()=>new Map),U=T((P)=>{G((I)=>{let z=new Set(I);if(z.has(P))z.delete(P);else z.add(P);return z})},[]),B=T((P)=>{G((I)=>{if(!I.has(P))return I;let z=new Set(I);return z.delete(P),z})},[]),J=T((P)=>{V((I)=>{if(!I.has(P))return I;let z=new Map(I);return z.delete(P),z})},[]),A=T((P,I={})=>{if(!P)return;let z=typeof I?.paneOverrideId==="string"&&I.paneOverrideId.trim()?I.paneOverrideId.trim():null,C={path:P,mode:"edit"};try{if(!(z?n0.get(z):n0.resolve(C))){if(!n0.get("editor")){console.warn(`[openEditor] No pane handler for: ${P}`);return}}}catch(e){console.warn(`[openEditor] paneRegistry.resolve() error for "${P}":`,e)}let b=typeof I?.label==="string"&&I.label.trim()?I.label.trim():void 0;if(t0.open(P,b),z)V((e)=>{if(e.get(P)===z)return e;let p=new Map(e);return p.set(P,z),p})},[]),O=T(()=>{let P=t0.getActiveId();if(P){let I=t0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}t0.close(P),B(P),J(P),$.current?.(P)}},[J,B]),F=T((P)=>{let I=t0.get(P);if(I?.dirty){if(!window.confirm(`"${I.label}" has unsaved changes. Close anyway?`))return}t0.close(P),B(P),J(P),$.current?.(P)},[J,B]),D=T((P)=>{t0.activate(P)},[]),E=T((P)=>{let I=t0.getTabs().filter((b)=>b.id!==P&&!b.pinned),z=I.filter((b)=>b.dirty).length;if(z>0){if(!window.confirm(`${z} unsaved tab${z>1?"s":""} will be closed. Continue?`))return}let C=I.map((b)=>b.id);t0.closeOthers(P),C.forEach((b)=>{B(b),J(b),$.current?.(b)})},[J,B]),g=T(()=>{let P=t0.getTabs().filter((C)=>!C.pinned),I=P.filter((C)=>C.dirty).length;if(I>0){if(!window.confirm(`${I} unsaved tab${I>1?"s":""} will be closed. Continue?`))return}let z=P.map((C)=>C.id);t0.closeAll(),z.forEach((C)=>{B(C),J(C),$.current?.(C)})},[J,B]),u=T((P)=>{t0.togglePin(P)},[]),l=T((P)=>{if(!P)return;V((I)=>{if(I.get(P)==="editor")return I;let z=new Map(I);return z.set(P,"editor"),z}),t0.activate(P)},[]),o=T(()=>{let P=t0.getActiveId();if(P)window.dispatchEvent(new CustomEvent("workspace-reveal-path",{detail:{path:P}}))},[]);return f(()=>{let P=(I)=>{let{oldPath:z,newPath:C,type:b}=I.detail||{};if(!z||!C)return;if(b==="dir"){for(let e of t0.getTabs())if(e.path===z||e.path.startsWith(`${z}/`)){let p=`${C}${e.path.slice(z.length)}`;t0.rename(e.id,p)}}else t0.rename(z,C);V((e)=>JN(e,z,C,b))};return window.addEventListener("workspace-file-renamed",P),()=>window.removeEventListener("workspace-file-renamed",P)},[]),f(()=>{let P=(I)=>{if(t0.hasUnsaved())I.preventDefault(),I.returnValue=""};return window.addEventListener("beforeunload",P),()=>window.removeEventListener("beforeunload",P)},[]),{editorOpen:q,tabStripTabs:j,tabStripActiveId:Z,previewTabs:N,tabPaneOverrides:X,openEditor:A,closeEditor:O,handleTabClose:F,handleTabActivate:D,handleTabCloseOthers:E,handleTabCloseAll:g,handleTabTogglePin:u,handleTabTogglePreview:U,handleTabEditSource:l,revealInExplorer:o}}function l$(_,$){try{if(typeof window>"u")return $;let j=window.__PICLAW_SILENCE||{},Q=`__PICLAW_SILENCE_${_.toUpperCase()}_MS`,Z=j[_]??window[Q],Y=Number(Z);return Number.isFinite(Y)?Y:$}catch{return $}}var n$=l$("warning",30000),U9=l$("finalize",120000),d$=l$("refresh",30000),L9=30000;function B9(_){let $={};return(_?.agents||[]).forEach((j)=>{$[j.id]=j}),$}function W9(){if(/iPad|iPhone/.test(navigator.userAgent))return!0;return navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1}function F9(_=30000){let[,$]=v(0);f(()=>{let j=setInterval(()=>$((Q)=>Q+1),_);return()=>clearInterval(j)},[_])}function z9(_,$=160){let j=String(_||"").replace(/\r\n/g,`
`);if(!j)return 0;return j.split(`
`).reduce((Q,Z)=>Q+Math.max(1,Math.ceil(Z.length/$)),0)}async function H9(_){let{panelKey:$,expanded:j,currentTurnIdRef:Q,thoughtExpandedRef:Z,draftExpandedRef:Y,setAgentThoughtVisibility:q,getAgentThought:K,thoughtBufferRef:N,draftBufferRef:G,setAgentThought:X,setAgentDraft:V}=_;if($!=="thought"&&$!=="draft")return;let U=Q.current;if($==="thought"){if(Z.current=j,U)try{await q(U,"thought",j)}catch(B){console.warn("Failed to update thought visibility:",B)}if(!j)return;try{let B=U?await K(U,"thought"):null;if(B?.text)N.current=B.text;X((J)=>({...J||{text:"",totalLines:0},fullText:N.current||J?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:J?.totalLines||0}))}catch(B){console.warn("Failed to fetch full thought:",B)}return}if(Y.current=j,U)try{await q(U,"draft",j)}catch(B){console.warn("Failed to update draft visibility:",B)}if(!j)return;try{let B=U?await K(U,"draft"):null;if(B?.text)G.current=B.text;V((J)=>({...J||{text:"",totalLines:0},fullText:G.current||J?.fullText||"",totalLines:Number.isFinite(B?.total_lines)?B.total_lines:J?.totalLines||0}))}catch(B){console.warn("Failed to fetch full draft:",B)}}function J9(_,$){if(typeof _!=="string")return{kind:"ignore"};let j=_.trim();if(!j)return{kind:"toast",title:"No file selected",detail:"Use a valid file path from a file pill.",level:"warning"};if(!$.editorOpen)return{kind:"toast",title:"Editor pane is not open",detail:"Open the editor pane to open files from pills.",level:"warning"};if(/^[a-z][a-z0-9+.-]*:/i.test(j))return{kind:"toast",title:"Cannot open external path from file pill",detail:"Use an in-workspace file path.",level:"warning"};try{if(!$.resolvePane({path:j,mode:"edit"}))return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}catch{return{kind:"toast",title:"No editor available",detail:`No editor can open: ${j}`,level:"warning"}}return{kind:"open",path:j}}function O9(_){let $=String(_||"").trim();if(!$.startsWith("/btw"))return null;let j=$.slice(4).trim();if(!j)return{type:"help"};if(j==="clear"||j==="close")return{type:"clear"};return{type:"ask",question:j}}function A9(_){return String(_||"").trim()||"web:default"}function D9(_){if(!_)return!1;let $=String(_.answer||"").trim();return _.status!=="running"&&Boolean($)}function E9(_){if(!_)return!1;return _.status!=="running"}function k9(_){let $=String(_?.question||"").trim(),j=String(_?.answer||"").trim();if(!$&&!j)return"";return["BTW side conversation",$?`Question: ${$}`:null,j?`Answer:
${j}`:null].filter(Boolean).join(`

`)}function i$(_){return String(_||"").trim()||"web:default"}function M9({remainingQueueCount:_=0,currentTurnId:$=null,isAgentTurnActive:j=!1}={}){return Number(_||0)<=0&&!$&&!j}function ON(_){if(!_||typeof _!=="object")return null;let $=_.started_at??_.startedAt;if(typeof $!=="string"||!$)return null;let j=Date.parse($);return Number.isFinite(j)?j:null}function S4(_){if(!_||typeof _!=="object")return!1;let $=_.intent_key??_.intentKey;return _.type==="intent"&&$==="compaction"}function h8(_){if(!_||typeof _!=="object")return"";let $=_.title;if(typeof $==="string"&&$.trim())return $.trim();let j=_.status;if(typeof j==="string"&&j.trim())return j.trim();return S4(_)?"Compacting context":"Working..."}function AN(_){let $=Math.max(0,Math.floor(_/1000)),j=$%60,Q=Math.floor($/60)%60,Z=Math.floor($/3600);if(Z>0)return`${Z}:${String(Q).padStart(2,"0")}:${String(j).padStart(2,"0")}`;return`${Q}:${String(j).padStart(2,"0")}`}function p8(_,$=Date.now()){let j=ON(_);if(j===null)return null;return AN(Math.max(0,$-j))}function j8(_){return typeof _==="string"}function I9(_){return typeof _==="string"&&_.trim().length>0}function r$(_){if(!Array.isArray(_))return[];return _.filter(($)=>I9($?.chat_jid)&&I9($?.agent_name))}function x9(_){if(!Array.isArray(_))return[];return _.filter(($)=>j8($?.chat_jid)&&j8($?.agent_name))}function T9(_,$,j){if(!Array.isArray($)||$.length===0)return Array.isArray(_)?_:[];let Q=new Map;if(Array.isArray(_)){for(let q of _)if(j8(q?.chat_jid))Q.set(q.chat_jid,q)}let Z=$.map((q)=>{if(!j8(q?.chat_jid))return q;let K=Q.get(q.chat_jid);return K?{...q,...K,is_active:K.is_active??q.is_active}:q}),Y=j8(j)?j:"";return Z.sort((q,K)=>{if(q.chat_jid===Y&&K.chat_jid!==Y)return-1;if(K.chat_jid===Y&&q.chat_jid!==Y)return 1;let N=Boolean(q.archived_at),G=Boolean(K.archived_at);if(N!==G)return N?1:-1;if(Boolean(q.is_active)!==Boolean(K.is_active))return q.is_active?-1:1;return String(q.chat_jid).localeCompare(String(K.chat_jid))}),Z}var DN={hasModel:!1,model:void 0,hasThinkingLevel:!1,thinkingLevel:null,hasSupportsThinking:!1,supportsThinking:!1,hasProviderUsage:!1,providerUsage:null};function C9(_){if(!_||typeof _!=="object")return DN;let $=_.model??_.current;return{hasModel:$!==void 0,model:$,hasThinkingLevel:_.thinking_level!==void 0,thinkingLevel:_.thinking_level??null,hasSupportsThinking:_.supports_thinking!==void 0,supportsThinking:Boolean(_.supports_thinking),hasProviderUsage:_.provider_usage!==void 0,providerUsage:_.provider_usage??null}}function P9(_){let j=(Array.isArray(_)?_:[]).find((Q)=>Q?.id==="default");return{name:j?.name,avatarUrl:j?.avatar_url}}function y9(_,$){if(!_||typeof _!=="object")return null;let j=_.agent_id;if(!j)return null;let Q=String(j),Z=_.agent_name,Y=_.agent_avatar;if(!Z&&Y===void 0)return null;let q=$||{id:Q},K=q.name||null,N=q.avatar_url??q.avatarUrl??q.avatar??null,G=!1,X=!1;if(Z&&Z!==q.name)K=Z,G=!0;if(Y!==void 0){let V=typeof Y==="string"?Y.trim():null,U=typeof N==="string"?N.trim():null,B=V||null;if(B!==(U||null))N=B,X=!0}if(!G&&!X)return null;return{agentId:Q,nameChanged:G,avatarChanged:X,resolvedName:K,resolvedAvatar:N}}function S9(_,$){let j=typeof $?.name==="string"&&$.name.trim()?$.name.trim():"You",Q=typeof $?.avatar_url==="string"?$.avatar_url.trim():null,Z=typeof $?.avatar_background==="string"&&$.avatar_background.trim()?$.avatar_background.trim():null;if(_.name===j&&_.avatar_url===Q&&_.avatar_background===Z)return _;return{name:j,avatar_url:Q,avatar_background:Z}}function w9(_,$){if(!$||typeof $!=="object")return _;let j=$.user_name??$.userName,Q=$.user_avatar??$.userAvatar,Z=$.user_avatar_background??$.userAvatarBackground;if(j===void 0&&Q===void 0&&Z===void 0)return _;let Y=typeof j==="string"&&j.trim()?j.trim():_.name||"You",q=Q===void 0?_.avatar_url:typeof Q==="string"&&Q.trim()?Q.trim():null,K=Z===void 0?_.avatar_background:typeof Z==="string"&&Z.trim()?Z.trim():null;if(_.name===Y&&_.avatar_url===q&&_.avatar_background===K)return _;return{name:Y,avatar_url:q,avatar_background:K}}function EN(_){if(!_?.data?.is_bot_message)return!1;let $=_.data.content;return $==="Queued as a follow-up (one-at-a-time)."||$==="⁣"}function R9(_,$){if(!_||!Array.isArray(_))return _;let j=new Set($||[]),Q=_.filter((Z)=>!j.has(Z?.id)&&!EN(Z));return Q.length===_.length?_:Q}function u9(_,$){let j=$||new Set;return Array.isArray(_)?_.map((Q)=>({...Q})).filter((Q)=>!j.has(Q.row_id)):[]}function f9(_,$){if(!Array.isArray(_)||!Array.isArray($))return!1;return _.length===$.length&&_.every((j,Q)=>j?.row_id===$[Q]?.row_id)}function w4(_,$){let j=Array.isArray(_)&&$!=null?_.filter((Q)=>Q?.row_id!==$):Array.isArray(_)?[..._]:[];return{items:j,remainingQueueCount:j.length}}function v9(_,$){let j=Array.isArray(_)?_:[],Q=$?.row_id,Z=$?.content;if(Q==null||typeof Z!=="string"||!Z.trim())return j;if(j.some((Y)=>Y?.row_id===Q))return j;return[...j,{row_id:Q,content:Z,timestamp:$?.timestamp||null,thread_id:$?.thread_id??null}]}function g9(_){if(!_||typeof _!=="object")return!1;if(_.queued==="followup"||_.queued==="steer")return!0;let $=_.command;return Boolean($&&typeof $==="object"&&($.queued_followup||$.queued_steer))}async function b9(_){let{getAgents:$,setAgents:j,setUserProfile:Q,applyBranding:Z}=_;try{let Y=await $();j(B9(Y));let q=Y?.user||{};Q((N)=>S9(N,q));let K=P9(Y?.agents);Z(K.name,K.avatarUrl)}catch(Y){console.warn("Failed to load agents:",Y)}}function m9(_){let{payload:$,agentsRef:j,setAgents:Q,applyBranding:Z}=_,Y=y9($,$?.agent_id?j.current?.[String($.agent_id)]||{id:String($.agent_id)}:null);if(!Y)return;if(Q((q)=>{let N={...q[Y.agentId]||{id:Y.agentId}};if(Y.nameChanged)N.name=Y.resolvedName;if(Y.avatarChanged)N.avatar_url=Y.resolvedAvatar;return{...q,[Y.agentId]:N}}),Y.agentId==="default")Z(Y.resolvedName,Y.resolvedAvatar,Y.avatarChanged?Date.now():null)}function h9(_){let{payload:$,setUserProfile:j}=_;j((Q)=>w9(Q,$))}function p9(_){let{payload:$,setActiveModel:j,setActiveThinkingLevel:Q,setSupportsThinking:Z,setActiveModelUsage:Y}=_,q=C9($);if(q.hasModel)j(q.model);if(q.hasThinkingLevel)Q(q.thinkingLevel);if(q.hasSupportsThinking)Z(q.supportsThinking);if(q.hasProviderUsage)Y(q.providerUsage)}function c9(_){let{currentChatJid:$,getAgentModels:j,activeChatJidRef:Q,applyModelState:Z}=_,Y=$;j(Y).then((q)=>{if(Q.current!==Y)return;if(q)Z(q)}).catch(()=>{})}function l9(_){let{currentChatJid:$,getActiveChatAgents:j,getChatBranches:Q,activeChatJidRef:Z,setActiveChatAgents:Y}=_,q=$;Promise.all([j().catch(()=>({chats:[]})),Q(null,{includeArchived:!0}).catch(()=>({chats:[]}))]).then(([K,N])=>{if(Z.current!==q)return;let G=r$(K?.chats),X=r$(N?.chats);Y(T9(G,X,q))}).catch(()=>{if(Z.current!==q)return;Y([])})}function n9(_){let{currentRootChatJid:$,getChatBranches:j,setCurrentChatBranches:Q}=_;j($).then((Z)=>{Q(x9(Z?.chats))}).catch(()=>{})}function d9(_){let{response:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshContextUsage:Z,refreshAutoresearchStatus:Y,refreshQueueState:q}=_;if(!$||typeof $!=="object")return;if(j(),Q(),Z(),Y(),g9($))q()}function i9(_={}){return V4(_)&&C8(_)}function kN(_={}){let $=_.window??(typeof window<"u"?window:null),j=Number($?.visualViewport?.height||0);if(Number.isFinite(j)&&j>0)return Math.round(j);let Q=Number($?.innerHeight||0);if(Number.isFinite(Q)&&Q>0)return Math.round(Q);return null}function MN(_={},$={}){if(!i9(_))return null;let j=_.window??(typeof window<"u"?window:null),Q=_.document??(typeof document<"u"?document:null);if(!j||!Q?.documentElement)return null;let Z=kN({window:j});if(Z&&Z>0)Q.documentElement.style.setProperty("--app-height",`${Z}px`);if($.resetScroll===!0){try{if(typeof j.scrollTo==="function")j.scrollTo(0,0)}catch{}try{if(Q.scrollingElement)Q.scrollingElement.scrollTop=0,Q.scrollingElement.scrollLeft=0;if(Q.documentElement)Q.documentElement.scrollTop=0,Q.documentElement.scrollLeft=0;if(Q.body)Q.body.scrollTop=0,Q.body.scrollLeft=0}catch{}}return Z}function r9(_={}){if(!i9(_))return()=>{};let $=_.window??(typeof window<"u"?window:null),j=_.document??(typeof document<"u"?document:null);if(!$||!j)return()=>{};let Q=0,Z=new Set,Y=()=>{if(Q)$.cancelAnimationFrame?.(Q),Q=0;for(let V of Z)$.clearTimeout?.(V);Z.clear()},q=()=>{Q=0,MN({window:$,document:j})},K=()=>{if(Q)$.cancelAnimationFrame?.(Q);Q=$.requestAnimationFrame?.(q)??0},N=()=>{K();for(let V of[80,220,420]){let U=$.setTimeout?.(()=>{Z.delete(U),K()},V);if(U!=null)Z.add(U)}},G=()=>{if(j.visibilityState&&j.visibilityState!=="visible")return;N()},X=$.visualViewport;return N(),$.addEventListener("focus",N),$.addEventListener("pageshow",N),$.addEventListener("resize",N),$.addEventListener("orientationchange",N),j.addEventListener("visibilitychange",G),j.addEventListener("focusin",N,!0),X?.addEventListener?.("resize",N),X?.addEventListener?.("scroll",N),()=>{Y(),$.removeEventListener("focus",N),$.removeEventListener("pageshow",N),$.removeEventListener("resize",N),$.removeEventListener("orientationchange",N),j.removeEventListener("visibilitychange",G),j.removeEventListener("focusin",N,!0),X?.removeEventListener?.("resize",N),X?.removeEventListener?.("scroll",N)}}function IN(_,$){if(typeof window<"u")console.warn(`[app] API export missing: ${_}. Using fallback behavior.`);return async()=>$}function $_(_,$,j){let Q=_?.[$];return typeof Q==="function"?Q:IN($,j)}var xN=["(display-mode: standalone)","(display-mode: minimal-ui)","(display-mode: fullscreen)"];function o9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.navigator??(typeof navigator<"u"?navigator:null);if(!j||typeof _!=="function")return()=>{};let Z=()=>{_(V4({window:j,navigator:Q}))};Z();let q=xN.map((K)=>{try{return j.matchMedia?.(K)??null}catch{return null}}).filter(Boolean).map((K)=>{if(typeof K.addEventListener==="function")return K.addEventListener("change",Z),()=>K.removeEventListener("change",Z);if(typeof K.addListener==="function")return K.addListener(Z),()=>K.removeListener(Z);return()=>{}});return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),()=>{for(let K of q)K();j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z)}}function s9(_,$={}){let j=$.window??(typeof window<"u"?window:null),Q=$.document??(typeof document<"u"?document:null);if(!j||!Q||typeof _!=="function")return()=>{};let Z=()=>{if(Q.visibilityState&&Q.visibilityState!=="visible")return;_()};return j.addEventListener?.("focus",Z),j.addEventListener?.("pageshow",Z),Q.addEventListener?.("visibilitychange",Z),()=>{j.removeEventListener?.("focus",Z),j.removeEventListener?.("pageshow",Z),Q.removeEventListener?.("visibilitychange",Z)}}function a9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.openTab,Z=_?.popOutPane,Y=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Q?.(G,X)},q=(N)=>{let G=N?.detail?.path,X=typeof N?.detail?.label==="string"&&N.detail.label.trim()?N.detail.label.trim():void 0;if(G)Z?.(G,X)},K=["office-viewer:open-tab","drawio:open-tab","csv-viewer:open-tab","pdf-viewer:open-tab","image-viewer:open-tab","video-viewer:open-tab","vnc:open-tab"];return K.forEach((N)=>j.addEventListener(N,Y)),j.addEventListener("pane:popout",q),()=>{K.forEach((N)=>j.removeEventListener(N,Y)),j.removeEventListener("pane:popout",q)}}function t9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=(Z)=>{if(Z?.ctrlKey&&Z.key==="`")Z.preventDefault?.(),_?.()};return j.addEventListener("keydown",Q),()=>j.removeEventListener("keydown",Q)}function e9(_,$={}){let j=$.document??(typeof document<"u"?document:null);if(!j)return()=>{};let Q=_?.toggleZenMode,Z=_?.exitZenMode,Y=typeof _?.isZenModeActive==="function"?_.isZenModeActive:()=>Boolean(_?.zenMode),q=(K)=>{if(K?.ctrlKey&&K.shiftKey&&(K.key==="Z"||K.key==="z")){K.preventDefault?.(),Q?.();return}if(K?.key==="Escape"&&Y())K.preventDefault?.(),Z?.()};return j.addEventListener("keydown",q),()=>j.removeEventListener("keydown",q)}function _j(_,$){let j=Array.isArray(_)?_:[];return j.find((Q)=>Q?.id===$)||j[0]||null}function $j(_,$){if(!$||!_||typeof _.get!=="function")return null;return _.get($)||null}function jj(_,$,j){return _||$?.label||j||"Pane"}function Qj(_,$,j){let Q=Array.isArray(_)?_.length:0,Z=Boolean(j&&$?.has?.(j));return Q>1||Z}function Zj(_,$){let j=typeof _==="string"?_:"";return j===$||j.startsWith(`${$}/`)}function Yj(_,$,j,Q){return _===$&&!j||Q}function qj(_,$,j,Q,Z){return _||!$&&(j||Q&&Z)}function c8(_){let $=o$(_);return $?`@${$}`:""}function o$(_){return String(_||"").trim().toLowerCase().replace(/[^a-z0-9_-]+/g,"-").replace(/^-+|-+$/g,"").replace(/-{2,}/g,"-")}function l8(_,$=""){let j=String(_||""),Q=o$(j),Z=o$($);if(!j.trim())return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Enter a branch handle."};if(!Q)return{normalized:Q,handle:"",canSubmit:!1,kind:"error",message:"Handle must contain at least one letter or number."};let Y=`@${Q}`;if(Q===Z)return{normalized:Q,handle:Y,canSubmit:!1,kind:"info",message:`Already using ${Y}.`};if(Q!==j.trim())return{normalized:Q,handle:Y,canSubmit:!0,kind:"info",message:`Will save as ${Y}. Letters, numbers, - and _ are allowed; leading @ is optional.`};return{normalized:Q,handle:Y,canSubmit:!0,kind:"success",message:`Saving as ${Y}.`}}function Kj(_,$){let j=typeof _?.agent_name==="string"&&_.agent_name.trim()?c8(_.agent_name):String($||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():String($||"").trim();return`${j} — ${Q} • current branch`}function TN(_,$={}){let j=[],Q=typeof $.currentChatJid==="string"?$.currentChatJid.trim():"",Z=typeof _?.chat_jid==="string"?_.chat_jid.trim():"";if(Q&&Z===Q)j.push("current");if(_?.archived_at)j.push("archived");else if(_?.is_active)j.push("active");return j}function n8(_,$={}){let j=c8(_?.agent_name)||String(_?.chat_jid||"").trim(),Q=typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():"unknown-chat",Z=TN(_,$);return Z.length>0?`${j} — ${Q} • ${Z.join(" • ")}`:`${j} — ${Q}`}function Nj(_,$,j){let Q=c8(_),Z=c8($),Y=String(j||"").trim();if(Q&&Z&&Q!==Z)return`Restored archived ${Q} as ${Z} because ${Q} is already in use.`;if(Z)return`Restored ${Z}.`;if(Q)return`Restored ${Q}.`;return`Restored ${Y||"branch"}.`}var CN="piclaw_btw_session",Xj=900,Gj="__piclawRenameBranchFormLock__";function PN(){try{return import.meta.url}catch{return null}}function s$(_){let $=typeof _==="string"?_.trim().toLowerCase():"";return $==="1"||$==="true"||$==="yes"}function d8(_,$,j=""){let Q=_?.get?.($);return Q&&Q.trim()?Q.trim():j}function Vj(_={}){let $=_.importMetaUrl===void 0?PN():_.importMetaUrl,j=_.document===void 0?typeof document<"u"?document:null:_.document,Q=_.origin===void 0?typeof window<"u"?window.location.origin:"http://localhost":_.origin||"http://localhost";try{let Z=$?new URL($).searchParams.get("v"):null;if(Z&&Z.trim())return Z.trim()}catch{}try{let Y=Array.from(j?.querySelectorAll?.('script[type="module"][src]')||[]).find((N)=>String(N?.getAttribute?.("src")||"").includes("/static/dist/app.bundle.js"))?.getAttribute?.("src")||"";if(!Y)return null;let K=new URL(Y,Q).searchParams.get("v");return K&&K.trim()?K.trim():null}catch{return null}}function a$(_={}){let $=_.window===void 0?typeof window<"u"?window:null:_.window;if(!$)return null;let j=$[Gj];if(j&&typeof j==="object")return j;let Q={inFlight:!1,cooldownUntil:0};return $[Gj]=Q,Q}function Uj(_){if(_==="root")return"Branch family";if(_==="all")return"All chats";return"Current branch"}function Lj(_={}){let $=typeof _.readItem==="function"?_.readItem:J_,j=_.storageKey||CN,Q=$(j);if(!Q)return null;try{let Z=JSON.parse(Q);if(!Z||typeof Z!=="object")return null;let Y=typeof Z.question==="string"?Z.question:"",q=typeof Z.answer==="string"?Z.answer:"",K=typeof Z.thinking==="string"?Z.thinking:"",N=typeof Z.error==="string"&&Z.error.trim()?Z.error:null,G=Z.status==="running"?"error":Z.status==="success"||Z.status==="error"?Z.status:"success";return{question:Y,answer:q,thinking:K,error:G==="error"?N||"BTW stream interrupted. You can retry.":N,model:null,status:G}}catch{return null}}function Bj(_,$={}){let j=$.defaultChatJid||"web:default",Q=d8(_,"chat_jid",j),Z=s$(_?.get?.("chat_only")||_?.get?.("chat-only")),Y=s$(_?.get?.("pane_popout")),q=d8(_,"pane_path"),K=d8(_,"pane_label"),N=s$(_?.get?.("branch_loader")),G=d8(_,"branch_source_chat_jid",Q);return{currentChatJid:Q,chatOnlyMode:Z,panePopoutMode:Y,panePopoutPath:q,panePopoutLabel:K,branchLoaderMode:N,branchLoaderSourceChatJid:G}}function Wj(_){let{serverVersion:$,currentAppAssetVersion:j,staleUiVersionRef:Q,staleUiReloadScheduledRef:Z,tabStoreHasUnsaved:Y,isAgentRunningRef:q,pendingRequestRef:K,showIntentToast:N}=_,G=typeof $==="string"&&$.trim()?$.trim():null;if(!G||!j||G===j)return!1;if(Q.current===G)return!0;Q.current=G;let X=typeof document<"u"?String(document.querySelector(".compose-box textarea")?.value||"").trim():"";if(!Y()&&!X&&!q.current&&!K.current&&!Z.current)return Z.current=!0,N("Updating UI…","Reloading to apply the latest interface after restart.","info",2500),window.setTimeout(()=>{try{window.location.reload()}catch{Z.current=!1}},350),!0;return N("New UI available","Reload this page to apply the latest interface update.","warning",8000),!0}function t$(_){let{currentHashtag:$,searchQuery:j,searchOpen:Q}=_||{};return!$&&!j&&!Q}function Fj(_){let{status:$,setConnectionStatus:j,setAgentStatus:Q,setAgentDraft:Z,setAgentPlan:Y,setAgentThought:q,setPendingRequest:K,pendingRequestRef:N,clearAgentRunState:G,hasConnectedOnceRef:X,viewStateRef:V,refreshTimeline:U,refreshAgentStatus:B,refreshQueueState:J,refreshContextUsage:A}=_;if(j($),$!=="connected"){Q(null),Z({text:"",totalLines:0}),Y(""),q({text:"",totalLines:0}),K(null),N.current=null,G();return}if(!X.current){if(X.current=!0,t$(V.current))U();B(),J(),A();return}if(t$(V.current))U();B(),J(),A()}function zj(_){let{viewStateRef:$,isAgentActive:j,refreshTimeline:Q,refreshQueueState:Z,refreshAgentStatus:Y,refreshContextUsage:q,refreshAutoresearchStatus:K}=_,N=t$($.current);if(j){if(N)Q();Z(),Y(),q(),K();return}if(N)Q();Y(),q(),K()}function Hj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,renameBranchInFlight:Q,renameBranchLockUntil:Z,getFormLock:Y,setRenameBranchNameDraft:q,setIsRenameBranchFormOpen:K,now:N=Date.now()}=_;if(!$||!j?.chat_jid)return!1;let G=Y?.()||null;if(!G)return!1;if(Q||N<Number(Z||0)||G.inFlight||N<Number(G.cooldownUntil||0))return!1;return q?.(j.agent_name||""),K?.(!0),!0}function Jj(_){let{setIsRenameBranchFormOpen:$,setRenameBranchNameDraft:j}=_;$?.(!1),j?.("")}async function Oj(_){let{hasWindow:$=typeof window<"u",currentBranchRecord:j,nextName:Q,openRenameForm:Z,renameBranchInFlightRef:Y,renameBranchLockUntilRef:q,getFormLock:K,setIsRenamingBranch:N,renameChatBranch:G,refreshActiveChatAgents:X,refreshCurrentChatBranches:V,showIntentToast:U,closeRenameForm:B,now:J=()=>Date.now()}=_;if(!$||!j?.chat_jid)return!1;if(typeof Q!=="string")return Z?.(),!1;let A=J(),O=K?.()||null;if(!O)return!1;if(Y.current||A<Number(q.current||0)||O.inFlight||A<Number(O.cooldownUntil||0))return!1;Y.current=!0,O.inFlight=!0,N?.(!0);try{let F=j.agent_name||"",D=l8(Q,F);if(!D.canSubmit)return U?.("Could not rename branch",D.message||"Enter a valid branch handle.","warning",4000),!1;let E=D.normalized||F,g=await G(j.chat_jid,{agentName:E});await Promise.allSettled([X?.(),V?.()]);let u=g?.branch?.agent_name||E||F;return U?.("Branch renamed",`@${u}`,"info",3500),B?.(),!0}catch(F){let D=F instanceof Error?F.message:String(F||"Could not rename branch."),E=/already in use/i.test(D||"")?`${D} Switch to or restore that existing session from the session manager.`:D;return U?.("Could not rename branch",E||"Could not rename branch.","warning",5000),!1}finally{Y.current=!1,N?.(!1);let F=J()+Xj;q.current=F;let D=K?.()||null;if(D)D.inFlight=!1,D.cooldownUntil=F}}async function Aj(_){let{hasWindow:$=typeof window<"u",targetChatJid:j=null,currentChatJid:Q,currentBranchRecord:Z,currentChatBranches:Y=[],activeChatAgents:q=[],pruneChatBranch:K,refreshActiveChatAgents:N,refreshCurrentChatBranches:G,showIntentToast:X,baseHref:V,chatOnlyMode:U,navigate:B,confirm:J=(l)=>window.confirm(l)}=_;if(!$)return!1;let A=typeof j==="string"&&j.trim()?j.trim():"",O=typeof Q==="string"&&Q.trim()?Q.trim():"",F=A||Z?.chat_jid||O;if(!F)return X?.("Could not prune branch","No active session is selected yet.","warning",4000),!1;let D=(Z?.chat_jid===F?Z:null)||Y.find((l)=>l?.chat_jid===F)||q.find((l)=>l?.chat_jid===F)||null;if(D?.chat_jid===(D?.root_chat_jid||D?.chat_jid))return X?.("Cannot prune branch","The root chat branch cannot be pruned.","warning",4000),!1;let g=`@${D?.agent_name||F}${D?.chat_jid?` — ${D.chat_jid}`:""}`;if(!J(`Prune ${g}?

This archives the branch agent and removes it from the branch picker. Chat history is preserved.`))return!1;try{await K(F),await Promise.allSettled([N?.(),G?.()]);let l=D?.root_chat_jid||"web:default";X?.("Branch pruned",`${g} has been archived.`,"info",3000);let o=U4(V,l,{chatOnly:U});return B?.(o),!0}catch(l){let o=l instanceof Error?l.message:String(l||"Could not prune branch.");return X?.("Could not prune branch",o||"Could not prune branch.","warning",5000),!1}}async function Dj(_){let{targetChatJid:$,restoreChatBranch:j,currentChatBranches:Q=[],refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,baseHref:K,chatOnlyMode:N,navigate:G}=_,X=typeof $==="string"?$.trim():"";if(!X||typeof j!=="function")return!1;try{let V=Q.find((F)=>F?.chat_jid===X)||null,U=await j(X);await Promise.allSettled([Z?.(),Y?.()]);let B=U?.branch,J=typeof B?.chat_jid==="string"&&B.chat_jid.trim()?B.chat_jid.trim():X,A=Nj(V?.agent_name,B?.agent_name,J);q?.("Branch restored",A,"info",4200);let O=U4(K,J,{chatOnly:N});return G?.(O),!0}catch(V){let U=V instanceof Error?V.message:String(V||"Could not restore branch.");return q?.("Could not restore branch",U||"Could not restore branch.","warning",5000),!1}}async function Ej(_){let{branchLoaderSourceChatJid:$,forkChatBranch:j,setBranchLoaderState:Q,navigate:Z,baseHref:Y,isCancelled:q=()=>!1}=_;try{Q?.({status:"running",message:"Preparing a new chat branch…"});let K=await j($);if(q())return!1;let N=K?.branch,G=typeof N?.chat_jid==="string"&&N.chat_jid.trim()?N.chat_jid.trim():null;if(!G)throw Error("Branch fork did not return a chat id.");let X=U4(Y,G,{chatOnly:!0});return Z?.(X,{replace:!0}),!0}catch(K){if(q())return!1;return Q?.({status:"error",message:h5(K)}),!1}}async function kj(_){let{currentChatJid:$,chatOnlyMode:j,forkChatBranch:Q,refreshActiveChatAgents:Z,refreshCurrentChatBranches:Y,showIntentToast:q,navigate:K,baseHref:N}=_;try{let X=(await Q($))?.branch,V=typeof X?.chat_jid==="string"&&X.chat_jid.trim()?X.chat_jid.trim():null;if(!V)throw Error("Branch fork did not return a chat id.");await Promise.allSettled([Z?.(),Y?.()]);let U=X?.agent_name?`@${X.agent_name}`:V;q?.("New branch created",`Switched to ${U}.`,"info",2500);let B=U4(N,V,{chatOnly:j});return K?.(B),!0}catch(G){return q?.("Could not create branch",h5(G),"warning",5000),!1}}async function Mj(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,path:Q,label:Z,showIntentToast:Y,resolveSourceTransfer:q,closeSourcePaneIfTransferred:K,currentChatJid:N,baseHref:G}=_;if(!$||j)return!1;let X=typeof Q==="string"&&Q.trim()?Q.trim():"";if(!X)return!1;let V=w2(X);if(!V)return Y?.("Could not open pane window","Opening pane windows is unavailable in standalone webapp mode.","warning",5000),!1;let U=Q$(V);if(!U)return Y?.("Could not open pane window","The browser blocked opening a new tab or window.","warning",5000),!1;Z$(U,{title:typeof Z==="string"&&Z.trim()?`Opening ${Z}…`:"Opening pane…",message:"Preparing a standalone pane window. This should only take a moment."});try{let B=await q?.(X),J=S2(G,X,{label:typeof Z==="string"&&Z.trim()?Z.trim():void 0,chatJid:N,params:B});return Y$(U,J),K?.(X),!0}catch(B){q$(U);let J=B instanceof Error?B.message:"Could not transfer pane state to the new window.";return Y?.("Could not open pane window",J,"warning",5000),!1}}async function Ij(_){let{hasWindow:$=typeof window<"u",isWebAppMode:j=!1,currentChatJid:Q,currentRootChatJid:Z,forkChatBranch:Y,getActiveChatAgents:q,getChatBranches:K,setActiveChatAgents:N,setCurrentChatBranches:G,showIntentToast:X,baseHref:V}=_;if(!$||j)return!1;let U=P2(Q);if(!U)return X?.("Could not open branch window","Opening branch windows is unavailable in standalone webapp mode.","warning",5000),!1;if(U.mode==="tab"){let J=y2(V,Q,{chatOnly:!0});if(!window.open(J,U.target))return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;return!0}let B=Q$(U);if(!B)return X?.("Could not open branch window","The browser blocked opening a new tab or window.","warning",5000),!1;Z$(B,{title:"Opening branch…",message:"Preparing a new chat branch. This should only take a moment."});try{let A=(await Y(Q))?.branch,O=typeof A?.chat_jid==="string"&&A.chat_jid.trim()?A.chat_jid.trim():null;if(!O)throw Error("Branch fork did not return a chat id.");try{let D=await q?.();N?.(Array.isArray(D?.chats)?D.chats:[])}catch{}try{let D=await K?.(Z);G?.(Array.isArray(D?.chats)?D.chats:[])}catch{}let F=U4(V,O,{chatOnly:!0});return Y$(B,F),!0}catch(J){return q$(B),X?.("Could not open branch window",h5(J),"error",5000),!1}}function i8(_){return _?{..._}:{text:"",totalLines:0}}function xj(_){return Array.isArray(_)?_.map(($)=>({...$})):[]}function yN(_){return{inFlight:Boolean(_?.inFlight),lastAttemptAt:Number(_?.lastAttemptAt||0),turnId:typeof _?.turnId==="string"?_.turnId:null}}function SN(){return{agentStatus:null,agentDraft:{text:"",totalLines:0},agentPlan:"",agentThought:{text:"",totalLines:0},pendingRequest:null,currentTurnId:null,steerQueuedTurnId:null,isAgentTurnActive:!1,followupQueueItems:[],activeModel:null,activeThinkingLevel:null,supportsThinking:!1,activeModelUsage:null,contextUsage:null,isAgentRunning:!1,wasAgentActive:!1,draftBuffer:"",thoughtBuffer:"",lastAgentEvent:null,lastSilenceNotice:0,lastAgentResponse:null,currentTurnIdRef:null,steerQueuedTurnIdRef:null,thoughtExpanded:!1,draftExpanded:!1,agentStatusRef:null,silentRecovery:{inFlight:!1,lastAttemptAt:0,turnId:null}}}function Tj(_){return{agentStatus:_.agentStatus,agentDraft:i8(_.agentDraft),agentPlan:_.agentPlan||"",agentThought:i8(_.agentThought),pendingRequest:_.pendingRequest,currentTurnId:_.currentTurnId||null,steerQueuedTurnId:_.steerQueuedTurnId||null,isAgentTurnActive:Boolean(_.isAgentTurnActive),followupQueueItems:xj(_.followupQueueItems),activeModel:_.activeModel,activeThinkingLevel:_.activeThinkingLevel,supportsThinking:Boolean(_.supportsThinking),activeModelUsage:_.activeModelUsage,contextUsage:_.contextUsage,isAgentRunning:Boolean(_.isAgentRunning),wasAgentActive:Boolean(_.wasAgentActive),draftBuffer:_.draftBuffer||"",thoughtBuffer:_.thoughtBuffer||"",lastAgentEvent:_.lastAgentEvent||null,lastSilenceNotice:Number(_.lastSilenceNotice||0),lastAgentResponse:_.lastAgentResponse||null,currentTurnIdRef:_.currentTurnIdRef||null,steerQueuedTurnIdRef:_.steerQueuedTurnIdRef||null,thoughtExpanded:Boolean(_.thoughtExpanded),draftExpanded:Boolean(_.draftExpanded),agentStatusRef:_.agentStatusRef||null,silentRecovery:yN(_.silentRecovery)}}function Cj(_){let $=_.snapshot||SN(),{refs:j,setters:Q}=_;return _.clearLastActivityTimer?.(),j.isAgentRunningRef.current=Boolean($.isAgentRunning),j.wasAgentActiveRef.current=Boolean($.wasAgentActive),Q.setIsAgentTurnActive(Boolean($.isAgentTurnActive)),j.lastAgentEventRef.current=$.lastAgentEvent||null,j.lastSilenceNoticeRef.current=Number($.lastSilenceNotice||0),j.draftBufferRef.current=$.draftBuffer||"",j.thoughtBufferRef.current=$.thoughtBuffer||"",j.pendingRequestRef.current=$.pendingRequest||null,j.lastAgentResponseRef.current=$.lastAgentResponse||null,j.currentTurnIdRef.current=$.currentTurnIdRef||null,j.steerQueuedTurnIdRef.current=$.steerQueuedTurnIdRef||null,j.agentStatusRef.current=$.agentStatusRef||null,j.silentRecoveryRef.current=$.silentRecovery||{inFlight:!1,lastAttemptAt:0,turnId:null},j.thoughtExpandedRef.current=Boolean($.thoughtExpanded),j.draftExpandedRef.current=Boolean($.draftExpanded),Q.setAgentStatus($.agentStatus||null),Q.setAgentDraft(i8($.agentDraft)),Q.setAgentPlan($.agentPlan||""),Q.setAgentThought(i8($.agentThought)),Q.setPendingRequest($.pendingRequest||null),Q.setCurrentTurnId($.currentTurnId||null),Q.setSteerQueuedTurnId($.steerQueuedTurnId||null),Q.setFollowupQueueItems(xj($.followupQueueItems)),Q.setActiveModel($.activeModel||null),Q.setActiveThinkingLevel($.activeThinkingLevel||null),Q.setSupportsThinking(Boolean($.supportsThinking)),Q.setActiveModelUsage($.activeModelUsage??null),Q.setContextUsage($.contextUsage??null),$}function e$(_){if(!Array.isArray(_?.content))return null;return _.content.find((j)=>j?.type==="status_panel"&&j?.panel)?.panel||null}function Pj(_,$){let j=new Map(_),Q=e$($);if(typeof $?.key==="string"&&$.key&&Q)j.set($.key,Q);else j.delete("autoresearch");return j}function yj(_,$){let j=typeof $?.key==="string"?$.key:"";if(!j)return _;let Q=new Map(_),Z=e$($);if($?.options?.remove||!Z)Q.delete(j);else Q.set(j,Z);return Q}function Sj(_){if(_?.options?.remove)return!0;return e$(_)?.state!=="running"}function _3(_,$){return`${_}:${$}`}function wj(_,$,j){let Q=_3($,j);if(_.has(Q))return _;let Z=new Set(_);return Z.add(Q),Z}function Rj(_,$){if(!_.has($))return _;let j=new Set(_);return j.delete($),j}function r8(_,$){if(_.size===0)return _;let j=`${$}:`,Q=new Set(Array.from(_).filter((Z)=>!String(Z).startsWith(j)));return Q.size===_.size?_:Q}async function uj(_){let $=typeof _.action?.action_type==="string"?_.action.action_type:"",j=typeof _.action?.key==="string"?_.action.key:"";if($==="autoresearch.stop")return await _.stopAutoresearch(_.currentChatJid,{generateReport:!0}),{refreshAutoresearchStatus:!0};if($==="autoresearch.dismiss")return await _.dismissAutoresearch(_.currentChatJid),{refreshAutoresearchStatus:!0};if($==="autoresearch.copy_tmux"){let Q=typeof _.panel?.tmux_command==="string"?_.panel.tmux_command.trim():"";if(!Q)throw Error("No tmux command available.");return await _.writeClipboard(Q),{refreshAutoresearchStatus:!1,toast:{title:"Copied",detail:"tmux command copied to clipboard.",kind:"success"}}}throw Error(`Unsupported panel action: ${$||j}`)}function wN(_){let $=_?.artifact||{},j=$.kind||_?.kind||null;if(j!=="html"&&j!=="svg")return null;if(j==="html"){let Z=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"";return Z?{kind:j,html:Z}:null}let Q=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"";return Q?{kind:j,svg:Q}:null}function RN(_){let $=_?.artifact&&typeof _.artifact==="object"?_.artifact:{},j=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:typeof _?.w==="string"?_.w:typeof _?.content==="string"?_.content:"",Y=($.kind||_?.kind||null)==="svg"||j?"svg":"html";if(Y==="svg")return j?{kind:Y,svg:j}:{kind:Y};return Q?{kind:Y,html:Q}:{kind:Y}}function R4(_){return typeof _==="number"&&Number.isFinite(_)?_:null}function w0(_){return typeof _==="string"&&_.trim()?_.trim():null}function vj(_,$=!1){let Q=(Array.isArray(_)?_:$?["interactive"]:[]).filter((Z)=>typeof Z==="string").map((Z)=>Z.trim().toLowerCase()).filter(Boolean);return Array.from(new Set(Q))}var gj="__PICLAW_WIDGET_HOST__:";function fj(_){return JSON.stringify(_).replace(/</g,"\\u003c").replace(/>/g,"\\u003e").replace(/&/g,"\\u0026").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")}function $3(_,$){if(!_||_.type!=="generated_widget")return null;let j=wN(_);if(!j)return null;return{title:_.title||_.name||"Generated widget",subtitle:typeof _.subtitle==="string"?_.subtitle:"",description:_.description||_.subtitle||"",originPostId:Number.isFinite($?.id)?$.id:null,originChatJid:typeof $?.chat_jid==="string"?$.chat_jid:null,widgetId:_.widget_id||_.id||null,artifact:j,capabilities:vj(_.capabilities,_.interactive===!0),source:"timeline",status:"final"}}function bj(_){if(!_||typeof _!=="object")return null;let $=RN(_),j=w0(_?.widget_id)||w0(_?.widgetId)||w0(_?.tool_call_id)||w0(_?.toolCallId),Q=w0(_?.tool_call_id)||w0(_?.toolCallId),Z=w0(_?.turn_id)||w0(_?.turnId),Y=w0(_?.title)||w0(_?.name)||"Generated widget",q=w0(_?.subtitle)||"",K=w0(_?.description)||q,N=w0(_?.status),G=N==="loading"||N==="streaming"||N==="final"||N==="error"?N:"streaming";return{title:Y,subtitle:q,description:K,originPostId:R4(_?.origin_post_id)??R4(_?.originPostId),originChatJid:w0(_?.origin_chat_jid)||w0(_?.originChatJid)||w0(_?.chat_jid)||null,widgetId:j,artifact:$,capabilities:vj(_?.capabilities,!0),source:"live",status:G,turnId:Z,toolCallId:Q,width:R4(_?.width),height:R4(_?.height),error:w0(_?.error)}}function mj(_){return $3(_,null)!==null}function A_(_){let $=w0(_?.toolCallId)||w0(_?.tool_call_id);if($)return $;let j=w0(_?.widgetId)||w0(_?.widget_id);if(j)return j;let Q=R4(_?.originPostId)??R4(_?.origin_post_id);if(Q!==null)return`post:${Q}`;return null}function hj(_){let j=(_?.artifact||{}).kind||_?.kind||null,Z=(Array.isArray(_?.capabilities)?_.capabilities:[]).some((Y)=>typeof Y==="string"&&Y.trim().toLowerCase()==="interactive");return j==="html"&&(_?.source==="live"||Z)}function pj(_){return hj(_)?"allow-downloads allow-scripts":"allow-downloads"}function o8(_){return{title:w0(_?.title)||"Generated widget",widgetId:w0(_?.widgetId)||w0(_?.widget_id),toolCallId:w0(_?.toolCallId)||w0(_?.tool_call_id),turnId:w0(_?.turnId)||w0(_?.turn_id),capabilities:Array.isArray(_?.capabilities)?_.capabilities:[],source:_?.source==="live"?"live":"timeline",status:w0(_?.status)||"final"}}function s8(_){return{...o8(_),subtitle:w0(_?.subtitle)||"",description:w0(_?.description)||"",error:w0(_?.error)||null,width:R4(_?.width),height:R4(_?.height),runtimeState:_?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:null}}function a8(_){return`${gj}${JSON.stringify(s8(_))}`}function cj(_){if(typeof _==="string"&&_.trim())return _.trim();if(!_||typeof _!=="object")return null;let $=w0(_.text)||w0(_.content)||w0(_.message)||w0(_.prompt)||w0(_.value);if($)return $;let j=_.data;if(typeof j==="string"&&j.trim())return j.trim();if(j&&typeof j==="object"){let Q=w0(j.text)||w0(j.content)||w0(j.message)||w0(j.prompt)||w0(j.value);if(Q)return Q}return null}function lj(_){if(!_||typeof _!=="object")return!1;return _.close===!0||_.dismiss===!0||_.closeAfterSubmit===!0}function nj(_){let $=w0(_?.status);if($==="loading"||$==="streaming")return"Widget is loading…";if($==="error")return w0(_?.error)||"Widget failed to load.";return"Widget artifact is missing or unsupported."}function uN(_){let $=o8(_);return`<script>
(function () {
  const meta = ${fj($)};
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

  const windowNamePrefix = ${fj(gj)};
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
</script>`}function dj(_){let $=_?.artifact||{},j=$.kind||_?.kind||null,Q=typeof $.html==="string"?$.html:typeof _?.html==="string"?_.html:"",Z=typeof $.svg==="string"?$.svg:typeof _?.svg==="string"?_.svg:"",Y=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",q=j==="svg"?Z:Q;if(!q)return"";let K=hj(_),N=["default-src 'none'","img-src data: blob: https: http:","style-src 'unsafe-inline'","font-src data: https: http:","media-src data: blob: https: http:","connect-src 'none'","frame-src 'none'",K?"script-src 'unsafe-inline'":"script-src 'none'","object-src 'none'","base-uri 'none'","form-action 'none'"].join("; "),G=j==="svg"?`<div class="widget-svg-shell">${q}</div>`:q,X=K?uN(_):"";return`<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<meta http-equiv="Content-Security-Policy" content="${N}" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${Y.replace(/[<&>]/g,"")}</title>
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
${X}
</head>
<body>${G}</body>
</html>`}function fN(_,$){let j=A_(_);return Boolean(_&&j===$)}function E5(_,$,j){if(!fN(_,$))return _;return{..._,runtimeState:{..._?.runtimeState&&typeof _.runtimeState==="object"?_.runtimeState:{},...j}}}function ij(_,$){return{..._,openedAt:$}}function rj(_){let $=A_(_);return{nextWidget:null,dismissedSessionKey:_?.source==="live"&&$?$:null}}function oj(_,$,j){let Q=bj({...$,...$&&$.status?{}:{status:j.fallbackStatus||"streaming"}});if(!Q)return _;let Z=A_(Q);if(Z&&j.dismissedSessionKeys?.has(Z))return _;let Y=A_(_),q=Boolean(Z&&Y&&Z===Y),K={...q&&_?.artifact?_.artifact:{},...Q.artifact||{}};return{...q&&_?_:{},...Q,artifact:K,source:"live",originChatJid:Q.originChatJid||j.currentChatJid,openedAt:q&&_?.openedAt?_.openedAt:j.updatedAt,liveUpdatedAt:j.updatedAt}}function sj(_,$){if(!_||_?.source!=="live")return _||null;let j=A_($),Q=A_(_);if(j&&Q&&j!==Q)return _;return null}function aj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,lastSubmitAt:j.submittedAt,lastHostUpdate:{type:"submit_pending",submittedAt:j.submittedAt,preview:j.submissionText||null}})}function j3(_,$,j){if(j.errorMessage)return E5(_,$,{lastHostUpdate:{type:"submit_failed",submittedAt:j.submittedAt,preview:j.submissionText,error:j.errorMessage}});return E5(_,$,{lastHostUpdate:{type:j.queued==="followup"?"submit_queued":"submit_sent",submittedAt:j.submittedAt,preview:j.submissionText,queued:j.queued||null}})}function tj(_,$,j){return E5(_,$,{lastEventKind:j.kind,lastEventPayload:j.payload||null,...j.kind==="widget.ready"?{readyAt:j.eventAt,lastHostUpdate:{type:"ready_ack",at:j.eventAt}}:{},...j.kind==="widget.request_refresh"?{lastRefreshRequestAt:j.eventAt,refreshCount:j.nextRefreshCount,lastHostUpdate:{type:j.shouldBuildDashboard?"refresh_building":"refresh_ack",at:j.eventAt,count:j.nextRefreshCount,echo:j.payload||null}}:{}})}function ej(_,$,j){return E5(_,$,{dashboard:j.dashboard,lastHostUpdate:{type:"refresh_dashboard",at:j.at,count:j.count,echo:j.echo||null}})}function _Q(_,$,j){return E5(_,$,{lastHostUpdate:{type:"refresh_failed",at:j.at,count:j.count,error:j.errorMessage}})}function k5(_,$){let j=$?.row_id;if(j==null||typeof j!=="string"&&typeof j!=="number")return null;let Q=w4(_,j);return{rowId:j,items:Q.items,remainingQueueCount:Q.remainingQueueCount}}function Q3(_){if(_==="steer")return{title:"Failed to steer message",detail:"The queued message could not be sent as steering."};return{title:"Failed to remove message",detail:"The queued message could not be removed."}}function u4(_){return _.status==="fulfilled"?_.value:null}function t8(_){return Math.max(0,Math.min(100,_))}function $Q(_){let $=Array.isArray(_.timelinePayload?.posts)?_.timelinePayload.posts:Array.isArray(_.rawPosts)?_.rawPosts:[],j=$.length?$[$.length-1]:null,Q=$.filter((O)=>O?.data?.is_bot_message).length,Z=$.filter((O)=>!O?.data?.is_bot_message).length,Y=Number(_.queuePayload?.count??_.followupQueueItems?.length??0)||0,q=Array.isArray(_.activeChatsPayload?.chats)?_.activeChatsPayload.chats.length:Array.isArray(_.activeChatAgents)?_.activeChatAgents.length:0,K=Array.isArray(_.branchesPayload?.chats)?_.branchesPayload.chats.length:Array.isArray(_.currentChatBranches)?_.currentChatBranches.length:0,N=Number(_.contextPayload?.percent??_.contextUsage?.percent??0)||0,G=Number(_.contextPayload?.tokens??_.contextUsage?.tokens??0)||0,X=Number(_.contextPayload?.contextWindow??_.contextUsage?.contextWindow??0)||0,V=_.modelsPayload?.current??_.activeModel??null,U=_.modelsPayload?.thinking_level??_.activeThinkingLevel??null,B=_.modelsPayload?.supports_thinking??_.supportsThinking,J=_.statusPayload?.status||(_.isAgentTurnActive?"active":"idle"),A=_.statusPayload?.data?.type||_.statusPayload?.type||null;return{generatedAt:_.generatedAt,request:_.request,chat:{currentChatJid:_.currentChatJid,rootChatJid:_.currentRootChatJid,activeChats:q,branches:K},agent:{status:J,phase:A,running:Boolean(_.isAgentTurnActive)},model:{current:V,thinkingLevel:U,supportsThinking:Boolean(B)},context:{tokens:G,contextWindow:X,percent:N},queue:{count:Y},timeline:{loadedPosts:$.length,botPosts:Q,userPosts:Z,latestPostId:j?.id??null,latestTimestamp:j?.timestamp??null},bars:[{key:"context",label:"Context",value:t8(Math.round(N))},{key:"queue",label:"Queue",value:t8(Y*18)},{key:"activeChats",label:"Active chats",value:t8(q*12)},{key:"posts",label:"Timeline load",value:t8($.length*5)}]}}function jQ(_){if(_==="followup")return{title:"Widget submission queued",detail:"The widget message was queued because the agent is busy.",kind:"info",durationMs:3500};return{title:"Widget submission sent",detail:"The widget message was sent to the chat.",kind:"info",durationMs:3500}}function QQ(_){return{title:"Widget submission failed",detail:_||"Could not send the widget message.",kind:"warning",durationMs:5000}}function ZQ(_,$){return{shouldBuildDashboard:Boolean(_?.buildDashboard||_?.dashboardKind==="internal-state"),nextRefreshCount:Number($||0)+1}}function YQ(){return{title:"Dashboard built",detail:"Live dashboard state pushed into the widget.",kind:"info",durationMs:3000}}function qQ(_){return{title:"Dashboard build failed",detail:_||"Could not build dashboard.",kind:"warning",durationMs:5000}}function KQ(){return{title:"Widget refresh requested",detail:"The widget received a host acknowledgement update.",kind:"info",durationMs:3000}}async function NQ(_){let{requestPayload:$=null,currentChatJid:j,currentRootChatJid:Q,getAgentStatus:Z,getAgentContext:Y,getAgentQueueState:q,getAgentModels:K,getActiveChatAgents:N,getChatBranches:G,getTimeline:X,rawPosts:V,activeChatAgents:U,currentChatBranches:B,contextUsage:J,followupQueueItems:A,activeModel:O,activeThinkingLevel:F,supportsThinking:D,isAgentTurnActive:E}=_,[g,u,l,o,P,I,z]=await Promise.allSettled([Z(j),Y(j),q(j),K(j),N(),G(Q),X(20,null,j)]);return $Q({generatedAt:new Date().toISOString(),request:$,currentChatJid:j,currentRootChatJid:Q,statusPayload:u4(g),contextPayload:u4(u),queuePayload:u4(l),modelsPayload:u4(o),activeChatsPayload:u4(P),branchesPayload:u4(I),timelinePayload:u4(z),rawPosts:V,activeChatAgents:U,currentChatBranches:B,contextUsage:J,followupQueueItems:A,activeModel:O,activeThinkingLevel:F,supportsThinking:D,isAgentTurnActive:E})}function GQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,steerAgentQueueItem:N}=_,G=k5(j.current,$);if(!G)return;let{rowId:X}=G;Q.current.add(X),q((V)=>w4(V,X).items),N(X,i$(Z)).then(()=>{Y()}).catch((V)=>{console.warn("[queue] Failed to steer queued item:",V);let U=Q3("steer");K(U.title,U.detail,"warning"),Q.current.delete(X),Y()})}function XQ(_){let{queuedItem:$,followupQueueItemsRef:j,dismissedQueueRowIdsRef:Q,currentChatJid:Z,refreshQueueState:Y,setFollowupQueueItems:q,showIntentToast:K,clearQueuedSteerStateIfStale:N,removeAgentQueueItem:G}=_,X=k5(j.current,$);if(!X)return;let{rowId:V}=X;Q.current.add(V),N?.(X.remainingQueueCount),q((U)=>w4(U,V).items),G(V,i$(Z)).then(()=>{Y()}).catch((U)=>{console.warn("[queue] Failed to remove queued item:",U);let B=Q3("remove");K(B.title,B.detail,"warning"),Q.current.delete(V),Y()})}function VQ(_){let{widget:$,dismissedLiveWidgetKeysRef:j,setFloatingWidget:Q}=_;if(!$||typeof $!=="object")return;let Z=A_($);if(Z)j.current.delete(Z);Q(ij($,new Date().toISOString()))}function UQ(_){let{dismissedLiveWidgetKeysRef:$,setFloatingWidget:j}=_;j((Q)=>{let Z=rj(Q);if(Z.dismissedSessionKey)$.current.add(Z.dismissedSessionKey);return Z.nextWidget})}function LQ(_){let{event:$,widget:j,currentChatJid:Q,isComposeBoxAgentActive:Z,setFloatingWidget:Y,handleCloseFloatingWidget:q,handleMessageResponse:K,showIntentToast:N,sendAgentMessage:G,buildFloatingWidgetDashboardSnapshot:X}=_,V=typeof $?.kind==="string"?$.kind:"",U=A_(j);if(!V||!U)return;if(V==="widget.close"){q();return}if(V==="widget.submit"){let B=cj($?.payload),J=lj($?.payload),A=new Date().toISOString();if(Y((O)=>aj(O,U,{kind:V,payload:$?.payload||null,submittedAt:A,submissionText:B})),!B){if(N("Widget submission received","The widget submitted data without a message payload yet.","info",3500),J)q();return}(async()=>{try{let O=await G("default",B,null,[],Z?"queue":null,Q);K(O),Y((D)=>j3(D,U,{submittedAt:A,submissionText:B,queued:O?.queued||null}));let F=jQ(O?.queued);if(N(F.title,F.detail,F.kind,F.durationMs),J)q()}catch(O){Y((D)=>j3(D,U,{submittedAt:A,submissionText:B,errorMessage:O?.message||"Could not send the widget message."}));let F=QQ(O?.message);N(F.title,F.detail,F.kind,F.durationMs)}})();return}if(V==="widget.ready"||V==="widget.request_refresh"){let B=new Date().toISOString(),J=ZQ($?.payload||null,j?.runtimeState?.refreshCount);if(Y((A)=>tj(A,U,{kind:V,payload:$?.payload||null,eventAt:B,nextRefreshCount:J.nextRefreshCount,shouldBuildDashboard:J.shouldBuildDashboard})),V==="widget.request_refresh")if(J.shouldBuildDashboard)(async()=>{try{let A=await X($?.payload||null);Y((F)=>ej(F,U,{dashboard:A,at:new Date().toISOString(),count:J.nextRefreshCount,echo:$?.payload||null}));let O=YQ();N(O.title,O.detail,O.kind,O.durationMs)}catch(A){Y((F)=>_Q(F,U,{errorMessage:A?.message||"Could not build dashboard.",at:new Date().toISOString(),count:J.nextRefreshCount}));let O=qQ(A?.message);N(O.title,O.detail,O.kind,O.durationMs)}})();else{let A=KQ();N(A.title,A.detail,A.kind,A.durationMs)}}}var vN=400,Z3=60,BQ=220,Y3="mdPreviewHeight";function gN(){try{let _=localStorage.getItem(Y3),$=_?Number(_):NaN;return Number.isFinite($)&&$>=Z3?$:BQ}catch{return BQ}}function e8({getContent:_,path:$,onClose:j}){let[Q,Z]=v(""),[Y,q]=v(gN),K=x(null),N=x(null),G=x(""),X=x(_);return X.current=_,f(()=>{let B=()=>{let A=X.current?.()||"";if(A===G.current)return;G.current=A;try{let O=O_(A,null,{sanitize:!1});Z(O)}catch{Z('<p style="color:var(--text-secondary)">Preview unavailable</p>')}};B();let J=setInterval(B,vN);return()=>clearInterval(J)},[]),f(()=>{if(K.current&&Q)F4(K.current).catch(()=>{})},[Q]),L`
        <div
            class="md-preview-splitter"
            onMouseDown=${(B)=>{B.preventDefault();let J=B.clientY,A=N.current?.offsetHeight||Y,O=N.current?.parentElement,F=O?O.offsetHeight*0.7:500,D=B.currentTarget;D.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let E=(u)=>{let l=Math.min(Math.max(A-(u.clientY-J),Z3),F);q(l)},g=()=>{D.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="";try{localStorage.setItem(Y3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("mousemove",E),document.removeEventListener("mouseup",g)};document.addEventListener("mousemove",E),document.addEventListener("mouseup",g)}}
            onTouchStart=${(B)=>{B.preventDefault();let J=B.touches[0];if(!J)return;let A=J.clientY,O=N.current?.offsetHeight||Y,F=N.current?.parentElement,D=F?F.offsetHeight*0.7:500,E=B.currentTarget;E.classList.add("dragging"),document.body.style.userSelect="none";let g=(l)=>{let o=l.touches[0];if(!o)return;l.preventDefault();let P=Math.min(Math.max(O-(o.clientY-A),Z3),D);q(P)},u=()=>{E.classList.remove("dragging"),document.body.style.userSelect="";try{localStorage.setItem(Y3,String(Math.round(N.current?.offsetHeight||Y)))}catch{}document.removeEventListener("touchmove",g),document.removeEventListener("touchend",u),document.removeEventListener("touchcancel",u)};document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",u),document.addEventListener("touchcancel",u)}}
        ></div>
        <div class="md-preview-panel" ref=${N} style=${{height:Y+"px"}}>
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
                ref=${K}
                dangerouslySetInnerHTML=${{__html:Q}}
            />
        </div>
    `}function WQ(_){if(_.branchLoaderMode)return"branch-loader";if(_.panePopoutMode)return"pane-popout";return"main"}function bN(_){return _==="error"?"Could not open branch window":"Opening branch…"}function FQ(_){return L`
    <div class="app-shell chat-only">
      <div class="container" style=${{display:"flex",alignItems:"center",justifyContent:"center",minHeight:"100vh",padding:"24px"}}>
        <div class="card" style=${{width:"min(560px, 100%)",padding:"24px"}}>
          <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>
            ${bN(_.status)}
          </h1>
          <p style=${{margin:0,lineHeight:1.6}}>${_.message}</p>
        </div>
      </div>
    </div>
  `}function zQ(_){let{appShellRef:$,editorOpen:j,hidePanePopoutControls:Q,panePopoutHasMenuActions:Z,panePopoutTitle:Y,tabStripTabs:q,tabStripActiveId:K,handleTabActivate:N,previewTabs:G,handleTabTogglePreview:X,editorContainerRef:V,getPaneContent:U,panePopoutPath:B}=_;return L`
    <div class=${`app-shell pane-popout${j?" editor-open":""}`} ref=${$}>
      <div class="editor-pane-container pane-popout-container">
        ${j&&!Q&&L`
          <div class="pane-popout-controls" role="toolbar" aria-label="Pane window controls">
            ${Z?L`
                <details class="pane-popout-controls-menu">
                  <summary class="pane-popout-controls-trigger" aria-label="Pane window controls">
                    <span class="pane-popout-controls-title">${Y}</span>
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                      <polyline points="4.5 6.5 8 10 11.5 6.5" />
                    </svg>
                  </summary>
                  <div class="pane-popout-controls-panel">
                    ${q.length>1&&L`
                      <div class="pane-popout-controls-section">
                        <div class="pane-popout-controls-section-title">Open panes</div>
                        <div class="pane-popout-controls-list">
                          ${q.map((J)=>L`
                            <button
                              type="button"
                              class=${`pane-popout-controls-item${J.id===K?" active":""}`}
                              onClick=${(A)=>{N(J.id),A.currentTarget.closest("details")?.removeAttribute("open")}}
                            >
                              ${J.label}
                            </button>
                          `)}
                        </div>
                      </div>
                    `}
                    ${K&&G.has(K)&&L`
                      <button
                        type="button"
                        class="pane-popout-controls-action"
                        onClick=${(J)=>{X(K),J.currentTarget.closest("details")?.removeAttribute("open")}}
                      >
                        Hide preview
                      </button>
                    `}
                  </div>
                </details>
              `:L`
                <div class="pane-popout-controls-label" aria-label=${Y}>${Y}</div>
              `}
          </div>
        `}
        ${j?L`<div class="editor-pane-host" ref=${V}></div>`:L`
            <div class="card" style=${{margin:"24px",padding:"24px",maxWidth:"640px"}}>
              <h1 style=${{margin:"0 0 12px",fontSize:"1.1rem"}}>Opening pane…</h1>
              <p style=${{margin:0,lineHeight:1.6}}>${B||"No pane path provided."}</p>
            </div>
          `}
        ${j&&K&&G.has(K)&&L`
          <${e8}
            getContent=${U}
            path=${K}
            onClose=${()=>X(K)}
          />
        `}
      </div>
    </div>
  `}function _6(_){return String(_||"").toLowerCase().replace(/^@/,"").replace(/\s+/g," ").trim()}function mN(_,$){let j=_6(_),Q=_6($);if(!Q)return!1;return j.startsWith(Q)||j.includes(Q)}function q3(_){if(!_)return!1;if(_.isComposing)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;return typeof _.key==="string"&&_.key.length===1&&/\S/.test(_.key)}function K3(_,$,j=Date.now(),Q=700){let Z=_&&typeof _==="object"?_:{value:"",updatedAt:0},Y=String($||"").trim().toLowerCase();if(!Y)return{value:"",updatedAt:j};return{value:!Z.value||!Number.isFinite(Z.updatedAt)||j-Z.updatedAt>Q?Y:`${Z.value}${Y}`,updatedAt:j}}function hN(_,$){let j=Math.max(0,Number(_)||0);if(j<=0)return[];let Z=((Number.isInteger($)?$:0)%j+j)%j,Y=[];for(let q=0;q<j;q+=1)Y.push((Z+q)%j);return Y}function pN(_,$,j=0,Q=(Z)=>Z){let Z=_6($);if(!Z)return-1;let Y=Array.isArray(_)?_:[],q=hN(Y.length,j),K=Y.map((N)=>_6(Q(N)));for(let N of q)if(K[N].startsWith(Z))return N;for(let N of q)if(K[N].includes(Z))return N;return-1}function N3(_,$,j=-1,Q=(Z)=>Z){let Z=Array.isArray(_)?_:[];if(j>=0&&j<Z.length){let Y=Q(Z[j]);if(mN(Y,$))return j}return pN(Z,$,0,Q)}function $6(_){return String(_||"").trim().toLowerCase()}function G3(_){let $=String(_||"").match(/^@([a-zA-Z0-9_-]*)$/);if(!$)return null;return $6($[1]||"")}function cN(_){let $=new Set,j=[];for(let Q of Array.isArray(_)?_:[]){let Z=$6(Q?.agent_name);if(!Z||$.has(Z))continue;$.add(Z),j.push(Q)}return j}function HQ(_,$,j={}){let Q=G3($);if(Q==null)return[];let Z=typeof j?.currentChatJid==="string"?j.currentChatJid:null;return cN(_).filter((Y)=>{if(Z&&Y?.chat_jid===Z)return!1;return $6(Y?.agent_name).startsWith(Q)})}function X3(_){let $=$6(_);return $?`@${$} `:""}function JQ(_,$,j={}){if(!_||_.isComposing)return!1;if(j.searchMode)return!1;if(!j.showSessionSwitcherButton)return!1;if(_.ctrlKey||_.metaKey||_.altKey)return!1;if(_.key!=="@")return!1;return String($||"")===""}function p_({prefix:_="file",label:$,title:j,onRemove:Q,onClick:Z,removeTitle:Y="Remove",icon:q="file"}){let K=`${_}-file-pill`,N=`${_}-file-name`,G=`${_}-file-remove`,X=q==="message"?L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>`:L`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
      </svg>`;return L`
    <span class=${K} title=${j||$} onClick=${Z}>
      ${X}
      <span class=${N}>${$}</span>
      ${Q&&L`
        <button
          class=${G}
          onClick=${(V)=>{V.preventDefault(),V.stopPropagation(),Q()}}
          title=${Y}
          type="button"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>
      `}
    </span>
  `}var lN=[{name:"/model",description:"Select model or list available models"},{name:"/cycle-model",description:"Cycle to the next available model"},{name:"/thinking",description:"Show or set thinking level"},{name:"/cycle-thinking",description:"Cycle thinking level"},{name:"/theme",description:"Set UI theme (no name to show available themes)"},{name:"/tint",description:"Tint default light/dark UI (usage: /tint #hex or /tint off)"},{name:"/btw",description:"Open a side conversation panel without interrupting the main chat"},{name:"/state",description:"Show current session state"},{name:"/stats",description:"Show session token and cost stats"},{name:"/context",description:"Show context window usage"},{name:"/last",description:"Show last assistant response"},{name:"/compact",description:"Manually compact the session"},{name:"/auto-compact",description:"Toggle auto-compaction"},{name:"/auto-retry",description:"Toggle auto-retry"},{name:"/abort",description:"Abort the current response"},{name:"/abort-retry",description:"Abort retry backoff"},{name:"/abort-bash",description:"Abort running bash command"},{name:"/shell",description:"Run a shell command and return output"},{name:"/bash",description:"Run a shell command and add output to context"},{name:"/queue",description:"Queue a follow-up message (one-at-a-time)"},{name:"/queue-all",description:"Queue a follow-up message (batch all)"},{name:"/steer",description:"Steer the current response"},{name:"/steering-mode",description:"Set steering mode (all|one)"},{name:"/followup-mode",description:"Set follow-up mode (all|one)"},{name:"/session-name",description:"Set or show the session name"},{name:"/new-session",description:"Start a new session"},{name:"/switch-session",description:"Switch to a session file"},{name:"/fork",description:"Fork from a previous message"},{name:"/forks",description:"List forkable messages"},{name:"/tree",description:"List the session tree"},{name:"/label",description:"Set or clear a label on a tree entry"},{name:"/labels",description:"List labeled entries"},{name:"/agent-name",description:"Set or show the agent display name"},{name:"/agent-avatar",description:"Set or show the agent avatar URL"},{name:"/user-name",description:"Set or show your display name"},{name:"/user-avatar",description:"Set or show your avatar URL"},{name:"/user-github",description:"Set name/avatar from GitHub profile"},{name:"/export-html",description:"Export session to HTML"},{name:"/passkey",description:"Manage passkeys (enrol/list/delete)"},{name:"/totp",description:"Show a TOTP enrolment QR code"},{name:"/qr",description:"Generate a QR code for text or URL"},{name:"/search",description:"Search notes and skills in the workspace"},{name:"/restart",description:"Restart the agent and stop subprocesses"},{name:"/commands",description:"List available commands"}];function nN({usage:_,onCompact:$}){let j=Math.min(100,Math.max(0,_.percent||0)),Q=_.tokens,Z=_.contextWindow,Y="Compact context",K=`${Q!=null?`Context: ${OQ(Q)} / ${OQ(Z)} tokens (${j.toFixed(0)}%)`:`Context: ${j.toFixed(0)}%`} — ${"Compact context"}`,N=9,G=2*Math.PI*9,X=j/100*G,V=j>90?"var(--context-red, #ef4444)":j>75?"var(--context-amber, #f59e0b)":"var(--context-green, #22c55e)";return L`
        <button
            class="compose-context-pie icon-btn"
            type="button"
            title=${K}
            aria-label="Compact context"
            onClick=${(U)=>{U.preventDefault(),U.stopPropagation(),$?.()}}
        >
            <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke="var(--context-track, rgba(128,128,128,0.2))"
                    stroke-width="2.5" />
                <circle cx="12" cy="12" r=${9}
                    fill="none"
                    stroke=${V}
                    stroke-width="2.5"
                    stroke-dasharray=${`${X} ${G}`}
                    stroke-linecap="round"
                    transform="rotate(-90 12 12)" />
            </svg>
        </button>
    `}function OQ(_){if(_==null)return"?";if(_>=1e6)return(_/1e6).toFixed(1)+"M";if(_>=1000)return(_/1000).toFixed(0)+"K";return String(_)}function dN(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),fileRefs:Z}}function iN(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(X)Z.push(X[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y);return{content:[...q,...K].join(`
`).replace(/\n{3,}/g,`

`).trim(),messageRefs:Z}}function rN(_){let $=dN(_||""),j=iN($.content||"");return{text:j.content||"",fileRefs:$.fileRefs,messageRefs:j.messageRefs}}function V3({items:_=[],onInjectQueuedFollowup:$,onRemoveQueuedFollowup:j,onOpenFilePill:Q}){if(!Array.isArray(_)||_.length===0)return null;return L`
        <div class="compose-queue-stack">
            ${_.map((Z)=>{let Y=typeof Z?.content==="string"?Z.content:"",q=rN(Y);if(!q.text.trim()&&q.fileRefs.length===0&&q.messageRefs.length===0)return null;return L`
                    <div class="compose-queue-stack-item" role="listitem">
                        <div class="compose-queue-stack-content" title=${Y}>
                            ${q.text.trim()&&L`<div class="compose-queue-stack-text">${q.text}</div>`}
                            ${(q.messageRefs.length>0||q.fileRefs.length>0)&&L`
                                <div class="compose-queue-stack-refs">
                                    ${q.messageRefs.map((K)=>L`
                                        <${p_}
                                            key=${"queue-msg-"+K}
                                            prefix="compose"
                                            label=${"msg:"+K}
                                            title=${"Message reference: "+K}
                                            icon="message"
                                        />
                                    `)}
                                    ${q.fileRefs.map((K)=>{let N=K.split("/").pop()||K;return L`
                                            <${p_}
                                                key=${"queue-file-"+K}
                                                prefix="compose"
                                                label=${N}
                                                title=${K}
                                                onClick=${()=>Q?.(K)}
                                            />
                                        `})}
                                </div>
                            `}
                        </div>
                        <div class="compose-queue-stack-actions" role="group" aria-label="Queued follow-up controls">
                            <button
                                class="compose-queue-stack-steer-btn"
                                type="button"
                                title="Inject queued follow-up as steer"
                                aria-label="Inject queued follow-up as steer"
                                onClick=${()=>$?.(Z)}
                            >
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M4 20h12a2 2 0 0 0 2-2V8" />
                                    <polyline points="14 12 18 8 22 12" />
                                </svg>
                                <span>Steer</span>
                            </button>
                            <button
                                class="compose-queue-stack-close-btn"
                                type="button"
                                title="Cancel queued message"
                                aria-label="Cancel queued message"
                                onClick=${()=>j?.(Z)}
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
    `}function AQ({onPost:_,onFocus:$,searchMode:j,searchScope:Q="current",onSearch:Z,onSearchScopeChange:Y,onEnterSearch:q,onExitSearch:K,fileRefs:N=[],onRemoveFileRef:G,onClearFileRefs:X,messageRefs:V=[],onRemoveMessageRef:U,onClearMessageRefs:B,activeModel:J=null,modelUsage:A=null,thinkingLevel:O=null,supportsThinking:F=!1,contextUsage:D=null,onContextCompact:E,notificationsEnabled:g=!1,notificationPermission:u="default",onToggleNotifications:l,onModelChange:o,onModelStateChange:P,activeEditorPath:I=null,onAttachEditorFile:z,onOpenFilePill:C,followupQueueItems:b=[],onInjectQueuedFollowup:e,onRemoveQueuedFollowup:p,onSubmitIntercept:a,onMessageResponse:t,onPopOutChat:_0,isAgentActive:q0=!1,activeChatAgents:Z0=[],currentChatJid:X0="web:default",connectionStatus:z0="connected",onSetFileRefs:B0,onSetMessageRefs:g0,onSubmitError:x0,onSwitchChat:k0,onRenameSession:h0,isRenameSessionInProgress:v0=!1,onCreateSession:l0,onDeleteSession:r0,onRestoreSession:M0,showQueueStack:o0=!0,statusNotice:H0=null}){let[C0,s0]=v(""),[e0,u1]=v(""),[K1,d0]=v([]),[W1,Z1]=v(!1),[_1,L0]=v([]),[f0,Q1]=v(0),[r,Y0]=v(!1),[m,i]=v([]),[J0,I0]=v(0),[T0,O0]=v(!1),[y0,b0]=v(!1),[W0,R0]=v(!1),[A0,j0]=v(!1),[y,s]=v([]),[N0,D0]=v(0),[m0,$1]=v(0),[G1,M1]=v(!1),[f1,R_]=v(0),[j_,b1]=v(null),[s1,l1]=v(()=>Date.now()),j1=x(null),a1=x(null),e_=x(null),Q_=x(null),_4=x(null),c_=x(null),I1=x(null),t1=x(null),x1=x({value:"",updatedAt:0}),X1=x(0),z1=x(!1),W_=200,F_=(W)=>{let w=new Set,n=[];for(let h of W||[]){if(typeof h!=="string")continue;let P0=h.trim();if(!P0||w.has(P0))continue;w.add(P0),n.push(P0)}return n},C1=()=>{let W=J_("piclaw_compose_history");if(!W)return[];try{let w=JSON.parse(W);if(!Array.isArray(w))return[];return F_(w)}catch{return[]}},e1=(W)=>{q1("piclaw_compose_history",JSON.stringify(W))},N1=x(C1()),P1=x(-1),Z_=x(""),m1=C0.trim()||K1.length>0||N.length>0||V.length>0,$4=typeof window<"u"&&typeof navigator<"u"&&Boolean(navigator.geolocation)&&Boolean(window.isSecureContext),D_=typeof window<"u"&&typeof Notification<"u",j4=typeof window<"u"?Boolean(window.isSecureContext):!1,z4=D_&&j4&&u!=="denied",k_=u==="granted"&&g,u_=S4(H0),f4=h8(H0),v4=typeof H0?.detail==="string"&&H0.detail.trim()?H0.detail.trim():"",Y1=u_?p8(H0,s1):null,T1=k_?"Disable notifications":"Enable notifications",H4=K1.length>0||N.length>0||V.length>0,Y_=z0==="disconnected"?"Reconnecting":String(z0||"Connecting").replace(/[-_]+/g," ").replace(/^./,(W)=>W.toUpperCase()),M_=z0==="disconnected"?"Reconnecting":`Connection: ${Y_}`,n1=(Array.isArray(Z0)?Z0:[]).filter((W)=>!W?.archived_at),D1=(()=>{for(let W of Array.isArray(Z0)?Z0:[]){let w=typeof W?.chat_jid==="string"?W.chat_jid.trim():"";if(w&&w===X0)return W}return null})(),v1=Boolean(D1&&D1.chat_jid===(D1.root_chat_jid||D1.chat_jid)),V1=u0(()=>{let W=new Set,w=[];for(let n of Array.isArray(Z0)?Z0:[]){let h=typeof n?.chat_jid==="string"?n.chat_jid.trim():"";if(!h||h===X0||W.has(h))continue;if(!(typeof n?.agent_name==="string"?n.agent_name.trim():""))continue;W.add(h),w.push(n)}return w},[Z0,X0]),q_=V1.length>0,K_=q_&&typeof k0==="function",N_=q_&&typeof M0==="function",l_=Boolean(v0||z1.current),h1=!j&&typeof h0==="function"&&!l_,g1=!j&&typeof l0==="function",G_=!j&&typeof r0==="function"&&!v1,f_=!j&&(K_||N_||h1||g1||G_),H1=J||"",I_=F&&O?` (${O})`:"",U1=I_.trim()?`${O}`:"",v_=typeof A?.hint_short==="string"?A.hint_short.trim():"",x_=[U1||null,v_||null].filter(Boolean).join(" • "),g4=[H1?`Current model: ${H1}${I_}`:null,A?.plan?`Plan: ${A.plan}`:null,v_||null,A?.primary?.reset_description||null,A?.secondary?.reset_description||null].filter(Boolean),b4=y0?"Switching model…":g4.join(" • ")||`Current model: ${H1}${I_} (tap to open model picker)`,g_=(W)=>{if(!W||typeof W!=="object")return;let w=W.model??W.current;if(typeof P==="function")P({model:w??null,thinking_level:W.thinking_level??null,supports_thinking:W.supports_thinking,provider_usage:W.provider_usage??null});if(w&&typeof o==="function")o(w)},b_=(W)=>{let w=W||j1.current;if(!w)return;w.style.height="auto",w.style.height=`${w.scrollHeight}px`,w.style.overflowY="hidden"},m4=(W)=>{if(!W.startsWith("/")||W.includes(`
`)){Y0(!1),L0([]);return}let w=W.toLowerCase().split(" ")[0];if(w.length<1){Y0(!1),L0([]);return}let n=lN.filter((h)=>h.name.startsWith(w)||h.name.replace(/-/g,"").startsWith(w.replace(/-/g,"")));if(n.length>0&&!(n.length===1&&n[0].name===w))O0(!1),i([]),L0(n),Q1(0),Y0(!0);else Y0(!1),L0([])},Q4=(W)=>{let w=C0,n=w.indexOf(" "),h=n>=0?w.slice(n):"",P0=W.name+h;s0(P0),Y0(!1),L0([]),requestAnimationFrame(()=>{let J1=j1.current;if(!J1)return;let y1=P0.length;J1.selectionStart=y1,J1.selectionEnd=y1,J1.focus()})},e4=(W)=>{if(G3(W)==null){O0(!1),i([]);return}let w=HQ(n1,W,{currentChatJid:X0});if(w.length>0&&!(w.length===1&&X3(w[0].agent_name).trim().toLowerCase()===String(W||"").trim().toLowerCase()))Y0(!1),L0([]),i(w),I0(0),O0(!0);else O0(!1),i([])},Z4=(W)=>{let w=X3(W?.agent_name);if(!w)return;s0(w),O0(!1),i([]),requestAnimationFrame(()=>{let n=j1.current;if(!n)return;let h=w.length;n.selectionStart=h,n.selectionEnd=h,n.focus()})},n_=()=>{if(j||!K_&&!N_&&!h1&&!g1&&!G_)return!1;return x1.current={value:"",updatedAt:0},R0(!1),Y0(!1),L0([]),O0(!1),i([]),j0(!0),!0},d1=(W)=>{if(W?.preventDefault?.(),W?.stopPropagation?.(),j||!K_&&!N_&&!h1&&!g1&&!G_)return;if(A0){x1.current={value:"",updatedAt:0},j0(!1);return}n_()},J4=(W)=>{let w=typeof W==="string"?W.trim():"";if(j0(!1),!w||w===X0){requestAnimationFrame(()=>j1.current?.focus());return}k0?.(w)},O4=async(W)=>{let w=typeof W==="string"?W.trim():"";if(j0(!1),!w||typeof M0!=="function"){requestAnimationFrame(()=>j1.current?.focus());return}try{await M0(w)}catch(n){console.warn("Failed to restore session:",n),requestAnimationFrame(()=>j1.current?.focus())}},T5=(W)=>{let n=(Array.isArray(W)?W:[]).findIndex((h)=>!h?.disabled);return n>=0?n:0},E1=u0(()=>{let W=[];for(let w of V1){let n=Boolean(w?.archived_at),h=typeof w?.agent_name==="string"?w.agent_name.trim():"",P0=typeof w?.chat_jid==="string"?w.chat_jid.trim():"";if(!h||!P0)continue;W.push({type:"session",key:`session:${P0}`,label:`@${h} — ${P0}${w?.is_active?" active":""}${n?" archived":""}`,chat:w,disabled:n?!N_:!K_})}if(g1)W.push({type:"action",key:"action:new",label:"New session",action:"new",disabled:!1});if(h1)W.push({type:"action",key:"action:rename",label:"Rename current session",action:"rename",disabled:l_});if(G_)W.push({type:"action",key:"action:delete",label:"Delete current session",action:"delete",disabled:!1});return W},[V1,N_,K_,g1,h1,G_,l_]),A4=async(W)=>{if(W?.preventDefault)W.preventDefault();if(W?.stopPropagation)W.stopPropagation();if(typeof h0!=="function"||v0||z1.current)return;z1.current=!0,j0(!1);try{await h0()}catch(w){console.warn("Failed to rename session:",w)}finally{z1.current=!1}requestAnimationFrame(()=>j1.current?.focus())},_5=async()=>{if(typeof l0!=="function")return;j0(!1);try{await l0()}catch(W){console.warn("Failed to create session:",W)}requestAnimationFrame(()=>j1.current?.focus())},X_=async()=>{if(typeof r0!=="function")return;j0(!1);try{await r0(X0)}catch(W){console.warn("Failed to delete session:",W)}requestAnimationFrame(()=>j1.current?.focus())},V_=(W)=>{if(j)u1(W);else s0(W),m4(W),e4(W);requestAnimationFrame(()=>b_())},Y4=(W)=>{let w=j?e0:C0,n=w&&!w.endsWith(`
`)?`
`:"",h=`${w}${n}${W}`.trimStart();V_(h)},h4=(W)=>{let w=W?.command?.model_label;if(w)return w;let n=W?.command?.message;if(typeof n==="string"){let h=n.match(/•\s+([^\n]+?)\s+\(current\)/);if(h?.[1])return h[1].trim()}return null},p4=async(W)=>{if(j||y0)return;b0(!0);try{let w=await d4("default",W,null,[],null,X0),n=h4(w);g_({model:n??J??null,thinking_level:w?.command?.thinking_level,supports_thinking:w?.command?.supports_thinking});try{let h=await v5(X0);if(h)g_(h)}catch{}return _?.(),!0}catch(w){return console.error("Failed to switch model:",w),alert("Failed to switch model: "+w.message),!1}finally{b0(!1)}},$5=async()=>{await p4("/cycle-model")},q4=async(W)=>{if(!W||y0)return;if(await p4(`/model ${W}`))R0(!1)},T_=(W)=>{if(!W||W.disabled)return;if(W.type==="session"){let w=W.chat;if(w?.archived_at)O4(w.chat_jid);else J4(w.chat_jid);return}if(W.type==="action"){if(W.action==="new"){_5();return}if(W.action==="rename"){A4();return}if(W.action==="delete")X_()}},z_=(W)=>{W.preventDefault(),W.stopPropagation(),x1.current={value:"",updatedAt:0},j0(!1),R0((w)=>!w)},D4=async()=>{if(j)return;E?.(),await C_("/compact",null,{includeMedia:!1,includeFileRefs:!1,includeMessageRefs:!1,clearAfterSubmit:!1,recordHistory:!1})},c4=(W)=>{if(W==="queue"||W==="steer"||W==="auto")return W;return q0?"queue":void 0},C_=async(W,w,n={})=>{let{includeMedia:h=!0,includeFileRefs:P0=!0,includeMessageRefs:J1=!0,clearAfterSubmit:y1=!0,recordHistory:w1=!0}=n||{},K4=typeof W==="string"?W:W&&typeof W?.target?.value==="string"?W.target.value:C0,l4=typeof K4==="string"?K4:"";if(!l4.trim()&&(h?K1.length===0:!0)&&(P0?N.length===0:!0)&&(J1?V.length===0:!0))return;Y0(!1),L0([]),O0(!1),i([]),j0(!1),b1(null);let j5=h?[...K1]:[],Q5=P0?[...N]:[],N4=J1?[...V]:[],c1=l4.trim();if(w1&&c1){let E4=N1.current,O1=F_(E4.filter((d_)=>d_!==c1));if(O1.push(c1),O1.length>200)O1.splice(0,O1.length-200);N1.current=O1,e1(O1),P1.current=-1,Z_.current=""}let Z5=()=>{if(h)d0([...j5]);if(P0)B0?.(Q5);if(J1)g0?.(N4);s0(c1),requestAnimationFrame(()=>b_())};if(y1)s0(""),d0([]),X?.(),B?.();(async()=>{try{if(await a?.({content:c1,submitMode:w,fileRefs:Q5,messageRefs:N4,mediaFiles:j5})){_?.();return}let O1=[];for(let P_ of j5){let M4=await g6(P_);O1.push(M4.id)}let d_=Q5.length?`Files:
${Q5.map((P_)=>`- ${P_}`).join(`
`)}`:"",Y5=N4.length?`Referenced messages:
${N4.map((P_)=>`- message:${P_}`).join(`
`)}`:"",q8=O1.length?`Attachments:
${O1.map((P_,M4)=>{let X6=j5[M4]?.name||`attachment-${M4+1}`;return`- attachment:${P_} (${X6})`}).join(`
`)}`:"",q5=[c1,d_,Y5,q8].filter(Boolean).join(`

`),k4=await d4("default",q5,null,O1,c4(w),X0);if(t?.(k4),k4?.command){g_({model:k4.command.model_label??J??null,thinking_level:k4.command.thinking_level,supports_thinking:k4.command.supports_thinking});try{let P_=await v5(X0);if(P_)g_(P_)}catch{}}_?.()}catch(E4){if(y1)Z5();let O1=E4?.message||"Failed to send message.";b1(O1),x0?.(O1),console.error("Failed to post:",E4)}})()},H=(W)=>{e?.(W)},M=T((W)=>{if(j||!W0&&!A0||W?.isComposing)return!1;let w=()=>{W.preventDefault?.(),W.stopPropagation?.()},n=()=>{x1.current={value:"",updatedAt:0}};if(W.key==="Escape"){if(w(),n(),W0)R0(!1);if(A0)j0(!1);return!0}if(W0){if(W.key==="ArrowDown"){if(w(),n(),y.length>0)D0((h)=>(h+1)%y.length);return!0}if(W.key==="ArrowUp"){if(w(),n(),y.length>0)D0((h)=>(h-1+y.length)%y.length);return!0}if((W.key==="Enter"||W.key==="Tab")&&y.length>0)return w(),n(),q4(y[Math.max(0,Math.min(N0,y.length-1))]),!0;if(q3(W)&&y.length>0){w();let h=K3(x1.current,W.key);x1.current=h;let P0=N3(y,h.value,N0,(J1)=>J1);if(P0>=0)D0(P0);return!0}}if(A0){if(W.key==="ArrowDown"){if(w(),n(),E1.length>0)$1((h)=>(h+1)%E1.length);return!0}if(W.key==="ArrowUp"){if(w(),n(),E1.length>0)$1((h)=>(h-1+E1.length)%E1.length);return!0}if((W.key==="Enter"||W.key==="Tab")&&E1.length>0)return w(),n(),T_(E1[Math.max(0,Math.min(m0,E1.length-1))]),!0;if(q3(W)&&E1.length>0){w();let h=K3(x1.current,W.key);x1.current=h;let P0=N3(E1,h.value,m0,(J1)=>J1.label);if(P0>=0)$1(P0);return!0}}return!1},[j,W0,A0,y,N0,E1,m0,q4]),R=(W)=>{if(W.isComposing)return;if(j&&W.key==="Escape"){W.preventDefault(),u1(""),K?.();return}if(M(W))return;let w=j1.current?.value??(j?e0:C0);if(JQ(W,w,{searchMode:j,showSessionSwitcherButton:f_})){W.preventDefault(),n_();return}if(T0&&m.length>0){let n=j1.current?.value??(j?e0:C0);if(!String(n||"").match(/^@([a-zA-Z0-9_-]*)$/))O0(!1),i([]);else{if(W.key==="ArrowDown"){W.preventDefault(),I0((h)=>(h+1)%m.length);return}if(W.key==="ArrowUp"){W.preventDefault(),I0((h)=>(h-1+m.length)%m.length);return}if(W.key==="Tab"||W.key==="Enter"){W.preventDefault(),Z4(m[J0]);return}if(W.key==="Escape"){W.preventDefault(),O0(!1),i([]);return}}}if(r&&_1.length>0){let n=j1.current?.value??(j?e0:C0);if(!String(n||"").startsWith("/"))Y0(!1),L0([]);else{if(W.key==="ArrowDown"){W.preventDefault(),Q1((h)=>(h+1)%_1.length);return}if(W.key==="ArrowUp"){W.preventDefault(),Q1((h)=>(h-1+_1.length)%_1.length);return}if(W.key==="Tab"){W.preventDefault(),Q4(_1[f0]);return}if(W.key==="Enter"&&!W.shiftKey){if(!w.includes(" ")){W.preventDefault();let P0=_1[f0];Y0(!1),L0([]),C_(P0.name);return}}if(W.key==="Escape"){W.preventDefault(),Y0(!1),L0([]);return}}}if(!j&&(W.key==="ArrowUp"||W.key==="ArrowDown")&&!W.metaKey&&!W.ctrlKey&&!W.altKey&&!W.shiftKey){let n=j1.current;if(!n)return;let h=n.value||"",P0=n.selectionStart===0&&n.selectionEnd===0,J1=n.selectionStart===h.length&&n.selectionEnd===h.length;if(W.key==="ArrowUp"&&P0||W.key==="ArrowDown"&&J1){let y1=N1.current;if(!y1.length)return;W.preventDefault();let w1=P1.current;if(W.key==="ArrowUp"){if(w1===-1)Z_.current=h,w1=y1.length-1;else if(w1>0)w1-=1;P1.current=w1,V_(y1[w1]||"")}else{if(w1===-1)return;if(w1<y1.length-1)w1+=1,P1.current=w1,V_(y1[w1]||"");else P1.current=-1,V_(Z_.current||""),Z_.current=""}requestAnimationFrame(()=>{let K4=j1.current;if(!K4)return;let l4=K4.value.length;K4.selectionStart=l4,K4.selectionEnd=l4});return}}if(W.key==="Enter"&&!W.shiftKey&&(W.ctrlKey||W.metaKey)){if(W.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else C_(w,"steer");return}if(W.key==="Enter"&&!W.shiftKey)if(W.preventDefault(),j){if(w.trim())Z?.(w.trim(),Q)}else C_(w)},S=(W)=>{let w=Array.from(W||[]).filter((n)=>n instanceof File&&!String(n.name||"").startsWith(".DS_Store"));if(!w.length)return;d0((n)=>[...n,...w]),b1(null)},d=(W)=>{S(W.target.files),W.target.value=""},Q0=(W)=>{if(j)return;W.preventDefault(),W.stopPropagation(),X1.current+=1,Z1(!0)},V0=(W)=>{if(j)return;if(W.preventDefault(),W.stopPropagation(),X1.current=Math.max(0,X1.current-1),X1.current===0)Z1(!1)},U0=(W)=>{if(j)return;if(W.preventDefault(),W.stopPropagation(),W.dataTransfer)W.dataTransfer.dropEffect="copy";Z1(!0)},$0=(W)=>{if(j)return;W.preventDefault(),W.stopPropagation(),X1.current=0,Z1(!1),S(W.dataTransfer?.files||[])},S0=(W)=>{if(j)return;let w=W.clipboardData?.items;if(!w||!w.length)return;let n=[];for(let h of w){if(h.kind!=="file")continue;let P0=h.getAsFile?.();if(P0)n.push(P0)}if(n.length>0)W.preventDefault(),S(n)},S1=(W)=>{d0((w)=>w.filter((n,h)=>h!==W))},__=()=>{b1(null),d0([]),X?.(),B?.()},p1=()=>{if(!navigator.geolocation){alert("Geolocation is not available in this browser.");return}navigator.geolocation.getCurrentPosition((W)=>{let{latitude:w,longitude:n,accuracy:h}=W.coords,P0=`${w.toFixed(5)}, ${n.toFixed(5)}`,J1=Number.isFinite(h)?` ±${Math.round(h)}m`:"",y1=`https://maps.google.com/?q=${w},${n}`,w1=`Location: ${P0}${J1} ${y1}`;Y4(w1)},(W)=>{let w=W?.message||"Unable to retrieve location.";alert(`Location error: ${w}`)},{enableHighAccuracy:!0,timeout:1e4,maximumAge:0})};f(()=>{if(!W0)return;x1.current={value:"",updatedAt:0},M1(!0),v5(X0).then((W)=>{let w=Array.isArray(W?.models)?W.models.filter((n)=>typeof n==="string"&&n.trim().length>0):[];w.sort((n,h)=>n.localeCompare(h,void 0,{sensitivity:"base"})),s(w),g_(W)}).catch((W)=>{console.warn("Failed to load model list:",W),s([])}).finally(()=>{M1(!1)})},[W0,J]),f(()=>{if(j)R0(!1),j0(!1),Y0(!1),L0([]),O0(!1),i([])},[j]),f(()=>{if(A0&&!f_)j0(!1)},[A0,f_]),f(()=>{if(!W0)return;let W=y.findIndex((w)=>w===J);D0(W>=0?W:0)},[W0,y,J]),f(()=>{if(!A0)return;$1(T5(E1)),x1.current={value:"",updatedAt:0}},[A0,X0]),f(()=>{if(!W0)return;let W=(w)=>{let n=Q_.current,h=_4.current,P0=w.target;if(n&&n.contains(P0))return;if(h&&h.contains(P0))return;R0(!1)};return document.addEventListener("pointerdown",W),()=>document.removeEventListener("pointerdown",W)},[W0]),f(()=>{if(!A0)return;let W=(w)=>{let n=c_.current,h=I1.current,P0=w.target;if(n&&n.contains(P0))return;if(h&&h.contains(P0))return;j0(!1)};return document.addEventListener("pointerdown",W),()=>document.removeEventListener("pointerdown",W)},[A0]),f(()=>{if(j||!W0&&!A0)return;let W=(w)=>{M(w)};return document.addEventListener("keydown",W,!0),()=>document.removeEventListener("keydown",W,!0)},[j,W0,A0,M]),f(()=>{if(!W0)return;let W=Q_.current;W?.focus?.(),W?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[W0,N0,y]),f(()=>{if(!A0)return;let W=c_.current;W?.focus?.(),W?.querySelector?.(".compose-model-popup-item.active")?.scrollIntoView?.({block:"nearest"})},[A0,m0,E1.length]),f(()=>{let W=()=>{let J1=t1.current?.clientWidth||0;R_((y1)=>y1===J1?y1:J1)};W();let w=t1.current,n=0,h=()=>{if(n)cancelAnimationFrame(n);n=requestAnimationFrame(()=>{n=0,W()})},P0=null;if(w&&typeof ResizeObserver<"u")P0=new ResizeObserver(()=>h()),P0.observe(w);if(typeof window<"u")window.addEventListener("resize",h);return()=>{if(n)cancelAnimationFrame(n);if(P0?.disconnect?.(),typeof window<"u")window.removeEventListener("resize",h)}},[j,J,D1?.agent_name,f_,D?.percent]);let C5=(W)=>{let w=W.target.value;if(b1(null),A0)j0(!1);b_(W.target),V_(w)};return f(()=>{requestAnimationFrame(()=>b_())},[C0,e0,j]),f(()=>{if(!u_)return;l1(Date.now());let W=setInterval(()=>l1(Date.now()),1000);return()=>clearInterval(W)},[u_,H0?.started_at,H0?.startedAt]),f(()=>{if(j)return;e4(C0)},[n1,X0,C0,j]),L`
        <div class="compose-box">
            ${o0&&!j&&L`
                <${V3}
                    items=${b}
                    onInjectQueuedFollowup=${H}
                    onRemoveQueuedFollowup=${p}
                    onOpenFilePill=${C}
                />
            `}
            ${H0&&L`
                <div
                    class=${`compose-inline-status${u_?" compaction":""}`}
                    role="status"
                    aria-live="polite"
                    title=${v4||""}
                >
                    <div class="compose-inline-status-row">
                        <span class="compose-inline-status-dot" aria-hidden="true"></span>
                        <span class="compose-inline-status-title">${f4}</span>
                        ${Y1&&L`<span class="compose-inline-status-elapsed">${Y1}</span>`}
                    </div>
                    ${v4&&L`<div class="compose-inline-status-detail">${v4}</div>`}
                </div>
            `}
            ${j_&&L`
                <div class="compose-submit-error compose-submit-error-top" role="status" aria-live="polite">${j_}</div>
            `}
            <div
                class=${`compose-input-wrapper${W1?" drag-active":""}`}
                onDragEnter=${Q0}
                onDragOver=${U0}
                onDragLeave=${V0}
                onDrop=${$0}
            >
                <div class="compose-input-main">
                    ${H4&&L`
                        <div class="compose-file-refs">
                            ${V.map((W)=>{return L`
                                    <${p_}
                                        key=${"msg-"+W}
                                        prefix="compose"
                                        label=${"msg:"+W}
                                        title=${"Message reference: "+W}
                                        removeTitle="Remove reference"
                                        icon="message"
                                        onRemove=${()=>U?.(W)}
                                    />
                                `})}
                            ${N.map((W)=>{let w=W.split("/").pop()||W;return L`
                                    <${p_}
                                        prefix="compose"
                                        label=${w}
                                        title=${W}
                                        onClick=${()=>C?.(W)}
                                        removeTitle="Remove file"
                                        onRemove=${()=>G?.(W)}
                                    />
                                `})}
                            ${K1.map((W,w)=>{let n=W?.name||`attachment-${w+1}`;return L`
                                    <${p_}
                                        key=${n+w}
                                        prefix="compose"
                                        label=${n}
                                        title=${n}
                                        removeTitle="Remove attachment"
                                        onRemove=${()=>S1(w)}
                                    />
                                `})}
                            <button
                                type="button"
                                class="compose-clear-attachments-btn"
                                onClick=${__}
                                title="Clear all attachments and references"
                                aria-label="Clear all attachments and references"
                            >
                                Clear all
                            </button>
                        </div>
                    `}
                    ${!j&&typeof _0==="function"&&L`
                        <button
                            type="button"
                            class="compose-popout-btn"
                            onClick=${()=>_0?.()}
                            title="Open this chat in a new chat-only window"
                            aria-label="Open this chat in a new chat-only window"
                        >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14 5h5v5" />
                                <path d="M10 14 19 5" />
                                <path d="M19 14v5h-5" />
                                <path d="M5 10V5h5" opacity="0" />
                                <path d="M5 19h5" />
                                <path d="M5 19v-5" />
                            </svg>
                        </button>
                    `}
                    <textarea
                        ref=${j1}
                        placeholder=${j?"Search (Enter to run)...":"Message (Enter to send, Shift+Enter for newline)..."}
                        value=${j?e0:C0}
                        onInput=${C5}
                        onKeyDown=${R}
                        onPaste=${S0}
                        onFocus=${$}
                        onClick=${$}
                        rows="1"
                    />
                    ${T0&&m.length>0&&L`
                        <div class="slash-autocomplete" ref=${e_}>
                            ${m.map((W,w)=>L`
                                <div
                                    key=${W.chat_jid||W.agent_name}
                                    class=${`slash-item${w===J0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),Z4(W)}}
                                    onMouseEnter=${()=>I0(w)}
                                >
                                    <span class="slash-name">@${W.agent_name}</span>
                                    <span class="slash-desc">${W.chat_jid||"Active agent"}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${r&&_1.length>0&&L`
                        <div class="slash-autocomplete" ref=${a1}>
                            ${_1.map((W,w)=>L`
                                <div
                                    key=${W.name}
                                    class=${`slash-item${w===f0?" active":""}`}
                                    onMouseDown=${(n)=>{n.preventDefault(),Q4(W)}}
                                    onMouseEnter=${()=>Q1(w)}
                                >
                                    <span class="slash-name">${W.name}</span>
                                    <span class="slash-desc">${W.description}</span>
                                </div>
                            `)}
                        </div>
                    `}
                    ${W0&&!j&&L`
                        <div class="compose-model-popup" ref=${Q_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Select model</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Model picker">
                                ${G1&&L`
                                    <div class="compose-model-popup-empty">Loading models…</div>
                                `}
                                ${!G1&&y.length===0&&L`
                                    <div class="compose-model-popup-empty">No models available.</div>
                                `}
                                ${!G1&&y.map((W,w)=>L`
                                    <button
                                        key=${W}
                                        type="button"
                                        role="menuitem"
                                        class=${`compose-model-popup-item${N0===w?" active":""}${J===W?" current-model":""}`}
                                        onClick=${()=>{q4(W)}}
                                        disabled=${y0}
                                    >
                                        ${W}
                                    </button>
                                `)}
                            </div>
                            <div class="compose-model-popup-actions">
                                <button
                                    type="button"
                                    class="compose-model-popup-btn"
                                    onClick=${()=>{$5()}}
                                    disabled=${y0}
                                >
                                    Next model
                                </button>
                            </div>
                        </div>
                    `}
                    ${A0&&!j&&L`
                        <div class="compose-model-popup" ref=${c_} tabIndex="-1" onKeyDown=${M}>
                            <div class="compose-model-popup-title">Manage sessions & agents</div>
                            <div class="compose-model-popup-menu" role="menu" aria-label="Sessions and agents">
                                ${L`
                                    <div class="compose-model-popup-item current" role="note" aria-live="polite">
                                        ${(()=>{return Kj(D1,X0)})()}
                                    </div>
                                `}
                                ${!q_&&L`
                                    <div class="compose-model-popup-empty">No other sessions yet.</div>
                                `}
                                ${q_&&V1.map((W,w)=>{let n=Boolean(W.archived_at),P0=W.chat_jid!==(W.root_chat_jid||W.chat_jid)&&!W.is_active&&!n&&typeof r0==="function",J1=n8(W,{currentChatJid:X0});return L`
                                        <div key=${W.chat_jid} class=${`compose-model-popup-item-row${n?" archived":""}`}>
                                            <button
                                                type="button"
                                                role="menuitem"
                                                class=${`compose-model-popup-item${n?" archived":""}${m0===w?" active":""}`}
                                                onClick=${()=>{if(n){O4(W.chat_jid);return}J4(W.chat_jid)}}
                                                disabled=${n?!N_:!K_}
                                                title=${n?`Restore archived ${`@${W.agent_name}`}`:`Switch to ${`@${W.agent_name}`}`}
                                            >
                                                ${J1}
                                            </button>
                                            ${P0&&L`
                                                <button
                                                    type="button"
                                                    class="compose-model-popup-item-delete"
                                                    title="Delete this branch"
                                                    aria-label=${`Delete @${W.agent_name}`}
                                                    onClick=${(y1)=>{y1.stopPropagation(),j0(!1),r0(W.chat_jid)}}
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
                            ${(g1||h1||G_)&&L`
                                <div class="compose-model-popup-actions">
                                    ${g1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn primary${E1.findIndex((W)=>W.key==="action:new")===m0?" active":""}`}
                                            onClick=${()=>{_5()}}
                                            title="Create a new agent/session branch from this chat"
                                        >
                                            New
                                        </button>
                                    `}
                                    ${h1&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn${E1.findIndex((W)=>W.key==="action:rename")===m0?" active":""}`}
                                            onClick=${(W)=>{A4(W)}}
                                            title="Rename the current branch handle"
                                            disabled=${l_}
                                        >
                                            Rename current…
                                        </button>
                                    `}
                                    ${G_&&L`
                                        <button
                                            type="button"
                                            class=${`compose-model-popup-btn danger${E1.findIndex((W)=>W.key==="action:delete")===m0?" active":""}`}
                                            onClick=${()=>{X_()}}
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
                <div class="compose-footer" ref=${t1}>
                    ${!j&&J&&L`
                    <div class="compose-meta-row">
                        ${!j&&J&&L`
                            <div class="compose-model-meta">
                                <button
                                    ref=${_4}
                                    type="button"
                                    class="compose-model-hint compose-model-hint-btn"
                                    title=${b4}
                                    aria-label="Open model picker"
                                    onClick=${z_}
                                    disabled=${y0}
                                >
                                    ${y0?"Switching…":H1}
                                </button>
                                <div class="compose-model-meta-subline">
                                    ${!y0&&x_&&L`
                                        <span class="compose-model-usage-hint" title=${b4}>
                                            ${x_}
                                        </span>
                                    `}
                                </div>
                            </div>
                        `}
                        ${!j&&D&&D.percent!=null&&L`
                            <${nN} usage=${D} onCompact=${D4} />
                        `}
                    </div>
                    `}
                    <div class="compose-actions ${j?"search-mode":""}">
                    ${f_&&L`
                        ${D1?.agent_name&&L`
                            <button
                                type="button"
                                class="compose-current-agent-label active"
                                title=${D1.chat_jid||X0}
                                aria-label=${`Manage sessions for @${D1.agent_name}`}
                                onClick=${d1}
                            >@${D1.agent_name}</button>
                        `}
                        <button
                            ref=${I1}
                            type="button"
                            class=${`icon-btn compose-mention-btn${A0?" active":""}`}
                            onClick=${d1}
                            title=${A0?"Hide session manager":"Manage Sessions/Agents"}
                            aria-label="Manage Sessions/Agents"
                            aria-expanded=${A0?"true":"false"}
                        >
                            <svg class="compose-mention-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
                                <circle cx="12" cy="12" r="4.25" />
                                <path d="M16.25 7.75v5.4a2.1 2.1 0 0 0 4.2 0V12a8.45 8.45 0 1 0-4.2 7.33" />
                            </svg>
                        </button>
                    `}
                    ${j&&L`
                        <label class="compose-search-scope-wrap" title="Search scope">
                            <span class="compose-search-scope-label">Scope</span>
                            <select
                                class="compose-search-scope-select"
                                value=${Q}
                                onChange=${(W)=>Y?.(W.currentTarget.value)}
                            >
                                <option value="current">Current</option>
                                <option value="root">Branch family</option>
                                <option value="all">All chats</option>
                            </select>
                        </label>
                    `}
                    <button
                        class="icon-btn search-toggle"
                        onClick=${j?K:q}
                        title=${j?"Close search":"Search"}
                    >
                        ${j?L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12"/>
                            </svg>
                        `:L`
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"/>
                                <path d="M21 21l-4.35-4.35"/>
                            </svg>
                        `}
                    </button>
                    ${$4&&!j&&L`
                        <button
                            class="icon-btn location-btn"
                            onClick=${p1}
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
                    ${z4&&!j&&L`
                        <button
                            class=${`icon-btn notification-btn${k_?" active":""}`}
                            onClick=${l}
                            title=${T1}
                            type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
                                <path d="M13.73 21a2 2 0 0 1-3.46 0" />
                            </svg>
                        </button>
                    `}
                    ${!j&&L`
                        ${I&&z&&L`
                            <button
                                class="icon-btn attach-editor-btn"
                                onClick=${z}
                                title=${`Attach open file: ${I}`}
                                type="button"
                                disabled=${N.includes(I)}
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/></svg>
                            </button>
                        `}
                        <label class="icon-btn" title="Attach file">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                            <input type="file" multiple hidden onChange=${d} />
                        </label>
                    `}
                    ${(z0!=="connected"||!j)&&L`
                        <div class="compose-send-stack">
                            ${z0!=="connected"&&L`
                                <span class="compose-connection-status connection-status ${z0}" title=${M_}>
                                    ${Y_}
                                </span>
                            `}
                            ${!j&&L`
                                <button 
                                    class="icon-btn send-btn" 
                                    type="button"
                                    onClick=${()=>{C_()}}
                                    disabled=${!m1}
                                    title="Send (Enter)"
                                >
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
            </div>
        </div>
        </div>
    `}function DQ({session:_,onClose:$,onInject:j,onRetry:Q}){let Z=x(null),Y=x(null),q=_?.thinking?t5(_.thinking):"",K=_?.answer?O_(_.answer,null,{sanitize:!1}):"";if(f(()=>{if(Z.current&&q)F4(Z.current).catch(()=>{})},[q]),f(()=>{if(Y.current&&K)F4(Y.current).catch(()=>{})},[K]),!_)return null;let N=_.status==="running",G=Boolean(String(_.answer||"").trim()),X=Boolean(String(_.thinking||"").trim()),V=D9(_),U=E9(_),B=!N&&G,J=N?"Thinking…":_.status==="error"?"Error":"Done";return L`
        <section class="btw-panel" aria-label="BTW side conversation">
            <div class="btw-panel-header">
                <div class="btw-panel-title-wrap">
                    <span class="btw-panel-title">Question</span>
                    <span class=${`btw-panel-status btw-panel-status-${_.status||"idle"}`}>${J}</span>
                </div>
                <button class="btw-panel-close" onClick=${()=>$?.()} title="Close BTW" aria-label="Close BTW">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                        <line x1="4" y1="4" x2="12" y2="12"/>
                        <line x1="12" y1="4" x2="4" y2="12"/>
                    </svg>
                </button>
            </div>

            ${_.question&&L`<div class="btw-block btw-question">${_.question}</div>`}
            ${_.error&&L`<div class="btw-block btw-error">${_.error}</div>`}
            ${X&&L`
                <details class="btw-block btw-thinking" open=${N?!0:void 0}>
                    <summary>Thinking</summary>
                    <div
                        class="btw-thinking-body post-content"
                        ref=${Z}
                        dangerouslySetInnerHTML=${{__html:q}}
                    ></div>
                </details>
            `}
            ${V&&L`
                <div class="btw-block btw-answer">
                    <div class="btw-answer-label">Answer</div>
                    <div
                        class="btw-answer-body post-content"
                        ref=${Y}
                        dangerouslySetInnerHTML=${{__html:K}}
                    ></div>
                </div>
            `}

            ${U&&L`
                <div class="btw-panel-footer">
                    <div class="btw-panel-footer-left">
                        ${_.question&&L`
                            <button class="btw-btn btw-btn-secondary" onClick=${()=>Q?.()}>
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
    `}function EQ({widget:_,onClose:$,onWidgetEvent:j}){let Q=x(null),Z=x(!1),Y=u0(()=>dj(_),[_?.artifact?.kind,_?.artifact?.html,_?.artifact?.svg,_?.widgetId,_?.toolCallId,_?.turnId,_?.title]);if(f(()=>{if(!_)return;let F=(D)=>{if(D.key==="Escape")$?.()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[_,$]),f(()=>{Z.current=!1},[Y]),f(()=>{if(!_)return;let F=Q.current;if(!F)return;let D=(o)=>{let P=a8(_),I=o==="widget.init"?o8(_):s8(_);try{F.name=P}catch{}try{F.contentWindow?.postMessage({__piclawGeneratedWidgetHost:!0,type:o,widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:I},"*")}catch{}},E=()=>{D("widget.init"),D("widget.update")},g=()=>{Z.current=!0,E()};F.addEventListener("load",g);let l=[0,40,120,300,800].map((o)=>setTimeout(E,o));return()=>{F.removeEventListener("load",g),l.forEach((o)=>clearTimeout(o))}},[Y,_?.widgetId,_?.toolCallId,_?.turnId]),f(()=>{if(!_)return;let F=Q.current;if(!F?.contentWindow)return;let D=a8(_),E=s8(_);try{F.name=D}catch{}try{F.contentWindow.postMessage({__piclawGeneratedWidgetHost:!0,type:"widget.update",widgetId:_?.widgetId||null,toolCallId:_?.toolCallId||null,turnId:_?.turnId||null,payload:E},"*")}catch{}return},[_?.widgetId,_?.toolCallId,_?.turnId,_?.status,_?.subtitle,_?.description,_?.error,_?.width,_?.height,_?.runtimeState]),f(()=>{if(!_)return;let F=(D)=>{let E=D?.data;if(!E||E.__piclawGeneratedWidget!==!0)return;let g=Q.current,u=A_(_),l=A_({widgetId:E.widgetId,toolCallId:E.toolCallId});if(l&&u&&l!==u)return;if(!l&&g?.contentWindow&&D.source!==g.contentWindow)return;j?.(E,_)};return window.addEventListener("message",F),()=>window.removeEventListener("message",F)},[_,j]),!_)return null;let K=(_?.artifact||{}).kind||_?.kind||"html",N=typeof _?.title==="string"&&_.title.trim()?_.title.trim():"Generated widget",G=typeof _?.subtitle==="string"&&_.subtitle.trim()?_.subtitle.trim():"",X=_?.source==="live"?"live":"timeline",V=typeof _?.status==="string"&&_.status.trim()?_.status.trim():"final",U=X==="live"?`Live widget • ${V.toUpperCase()}`:_?.originPostId?`Message #${_.originPostId}`:"Timeline launch",B=typeof _?.description==="string"&&_.description.trim()?_.description.trim():"",J=!Y,A=nj(_),O=pj(_);return L`
        <div class="floating-widget-backdrop" onClick=${()=>$?.()}>
            <section
                class="floating-widget-pane"
                aria-label=${N}
                onClick=${(F)=>F.stopPropagation()}
            >
                <div class="floating-widget-header">
                    <div class="floating-widget-heading">
                        <div class="floating-widget-eyebrow">${U} • ${K.toUpperCase()}</div>
                        <div class="floating-widget-title">${N}</div>
                        ${(G||B)&&L`
                            <div class="floating-widget-subtitle">${G||B}</div>
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
                    ${J?L`<div class="floating-widget-empty">${A}</div>`:L`
                            <iframe
                                ref=${Q}
                                class="floating-widget-frame"
                                title=${N}
                                name=${a8(_)}
                                sandbox=${O}
                                referrerpolicy="no-referrer"
                                srcdoc=${Y}
                            ></iframe>
                        `}
                </div>
            </section>
        </div>
    `}var kQ="PiClaw";function U3(_,$,j=!1){let Q=_||"PiClaw",Z=Q.charAt(0).toUpperCase(),Y=["#FF6B6B","#4ECDC4","#45B7D1","#FFA07A","#98D8C8","#F7DC6F","#BB8FCE","#85C1E2","#F8B195","#6C5CE7","#00B894","#FDCB6E","#E17055","#74B9FF","#A29BFE","#FD79A8","#00CEC9","#FFEAA7","#DFE6E9","#FF7675","#55EFC4","#81ECEC","#FAB1A0","#74B9FF","#A29BFE","#FD79A8"],q=Z.charCodeAt(0)%Y.length,K=Y[q],N=Q.trim().toLowerCase(),G=typeof $==="string"?$.trim():"",X=G?G:null,V=j||N==="PiClaw".toLowerCase()||N==="pi";return{letter:Z,color:K,image:X||(V?"/static/icon-192.png":null)}}function MQ(_,$){if(!_)return"PiClaw";let j=$[_]?.name||_;return j?j.charAt(0).toUpperCase()+j.slice(1):"PiClaw"}function IQ(_,$){if(!_)return null;let j=$[_]||{};return j.avatar_url||j.avatarUrl||j.avatar||null}function xQ(_){if(!_)return null;if(typeof document<"u"){let Y=document.documentElement,q=Y?.dataset?.colorTheme||"",K=Y?.dataset?.tint||"",N=getComputedStyle(Y).getPropertyValue("--accent-color")?.trim();if(N&&(K||q&&q!=="default"))return N}let $=["#4ECDC4","#FF6B6B","#45B7D1","#BB8FCE","#FDCB6E","#00B894","#74B9FF","#FD79A8","#81ECEC","#FFA07A"],j=String(_),Q=0;for(let Y=0;Y<j.length;Y+=1)Q=(Q*31+j.charCodeAt(Y))%2147483647;let Z=Math.abs(Q)%$.length;return $[Z]}var oN=L`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>
`;function L3({status:_,draft:$,plan:j,thought:Q,pendingRequest:Z,intent:Y,extensionPanels:q=[],pendingPanelActions:K=new Set,onExtensionPanelAction:N,turnId:G,steerQueued:X,onPanelToggle:V,showCorePanels:U=!0,showExtensionPanels:B=!0}){let O=(r)=>{if(!r)return{text:"",totalLines:0,fullText:""};if(typeof r==="string"){let J0=r,I0=J0?J0.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:J0,totalLines:I0,fullText:J0}}let Y0=r.text||"",m=r.fullText||r.full_text||Y0,i=Number.isFinite(r.totalLines)?r.totalLines:m?m.replace(/\r\n/g,`
`).split(`
`).length:0;return{text:Y0,totalLines:i,fullText:m}},F=160,D=(r)=>String(r||"").replace(/<\/?internal>/gi,""),E=(r)=>{if(!r)return 1;return Math.max(1,Math.ceil(r.length/160))},g=(r,Y0,m)=>{let i=(r||"").replace(/\r\n/g,`
`).replace(/\r/g,`
`);if(!i)return{text:"",omitted:0,totalLines:Number.isFinite(m)?m:0,visibleLines:0};let J0=i.split(`
`),I0=J0.length>Y0?J0.slice(0,Y0).join(`
`):i,T0=Number.isFinite(m)?m:J0.reduce((b0,W0)=>b0+E(W0),0),O0=I0?I0.split(`
`).reduce((b0,W0)=>b0+E(W0),0):0,y0=Math.max(T0-O0,0);return{text:I0,omitted:y0,totalLines:T0,visibleLines:O0}},u=O(j),l=O(Q),o=O($),P=Boolean(u.text)||u.totalLines>0,I=Boolean(l.text)||l.totalLines>0,z=Boolean(o.fullText?.trim()||o.text?.trim()),C=Boolean(_||z||P||I||Z||Y),b=Array.isArray(q)&&q.length>0;if((!U||!C)&&(!B||!b))return null;let[e,p]=v(new Set),[a,t]=v(null),[_0,q0]=v(()=>Date.now()),Z0=(r)=>p((Y0)=>{let m=new Set(Y0),i=!m.has(r);if(i)m.add(r);else m.delete(r);if(typeof V==="function")V(r,i);return m});f(()=>{p(new Set),t(null)},[G]);let X0=S4(_);f(()=>{if(!X0)return;q0(Date.now());let r=setInterval(()=>q0(Date.now()),1000);return()=>clearInterval(r)},[X0,_?.started_at,_?.startedAt]);let z0=_?.turn_id||G,B0=xQ(z0),g0=X?"turn-dot turn-dot-queued":"turn-dot",x0=(r)=>r,k0=Boolean(_?.last_activity||_?.lastActivity),h0=(r)=>r==="warning"?"#f59e0b":r==="error"?"var(--danger-color)":r==="success"?"var(--success-color)":B0,v0=Y?.kind||"info",l0=h0(v0),r0=h0(_?.kind||(X0?"warning":"info")),M0="",o0=_?.title,H0=_?.status;if(_?.type==="plan")M0=o0?`Planning: ${o0}`:"Planning...";else if(_?.type==="tool_call")M0=o0?`Running: ${o0}`:"Running tool...";else if(_?.type==="tool_status")M0=o0?`${o0}: ${H0||"Working..."}`:H0||"Working...";else if(_?.type==="error")M0=o0||"Agent error";else M0=o0||H0||"Working...";if(k0)M0="Last activity just now";let C0=({panelTitle:r,text:Y0,fullText:m,totalLines:i,maxLines:J0,titleClass:I0,panelKey:T0})=>{let O0=e.has(T0),y0=m||Y0||"",b0=T0==="thought"||T0==="draft"?D(y0):y0,W0=typeof J0==="number",R0=O0&&W0,A0=W0?g(b0,J0,i):{text:b0||"",omitted:0,totalLines:Number.isFinite(i)?i:0};if(!b0&&!(Number.isFinite(A0.totalLines)&&A0.totalLines>0))return null;let j0=`agent-thinking-body${W0?" agent-thinking-body-collapsible":""}`,y=W0?`--agent-thinking-collapsed-lines: ${J0};`:"";return L`
            <div
                class="agent-thinking"
                data-expanded=${O0?"true":"false"}
                data-collapsible=${W0?"true":"false"}
                style=${B0?`--turn-color: ${B0};`:""}
            >
                <div class="agent-thinking-title ${I0||""}">
                    ${B0&&L`<span class=${g0} aria-hidden="true"></span>`}
                    ${r}
                    ${R0&&L`
                        <button
                            class="agent-thinking-close"
                            aria-label=${`Close ${r} panel`}
                            onClick=${()=>Z0(T0)}
                        >
                            ×
                        </button>
                    `}
                </div>
                <div
                    class=${j0}
                    style=${y}
                    dangerouslySetInnerHTML=${{__html:t5(b0)}}
                />
                ${!O0&&A0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(T0)}>
                        ▸ ${A0.omitted} more lines
                    </button>
                `}
                ${O0&&A0.omitted>0&&L`
                    <button class="agent-thinking-truncation" onClick=${()=>Z0(T0)}>
                        ▴ show less
                    </button>
                `}
            </div>
        `},s0=Z?.tool_call?.title,e0=s0?`Awaiting approval: ${s0}`:"Awaiting approval",u1=X0?p8(_,_0):null,K1=(r,Y0,m=null)=>{let i=h8(r);return L`
            <div
                class="agent-thinking agent-thinking-intent"
                aria-live="polite"
                style=${Y0?`--turn-color: ${Y0};`:""}
                title=${r?.detail||""}
            >
                <div class="agent-thinking-title intent">
                    ${Y0&&L`<span class=${g0} aria-hidden="true"></span>`}
                    <span class="agent-thinking-title-text">${i}</span>
                    ${m&&L`<span class="agent-status-elapsed">${m}</span>`}
                </div>
                ${r.detail&&L`<div class="agent-thinking-body">${r.detail}</div>`}
            </div>
        `},d0=(r,Y0,m,i,J0,I0,T0,O0=8,y0=8)=>{let b0=Math.max(J0-i,0.000000001),W0=Math.max(Y0-O0*2,1),R0=Math.max(m-y0*2,1),A0=Math.max(T0-I0,1),j0=T0===I0?Y0/2:O0+(r.run-I0)/A0*W0,y=y0+(R0-(r.value-i)/b0*R0);return{x:j0,y}},W1=(r,Y0,m,i,J0,I0,T0,O0=8,y0=8)=>{if(!Array.isArray(r)||r.length===0)return"";return r.map((b0,W0)=>{let{x:R0,y:A0}=d0(b0,Y0,m,i,J0,I0,T0,O0,y0);return`${W0===0?"M":"L"} ${R0.toFixed(2)} ${A0.toFixed(2)}`}).join(" ")},Z1=(r,Y0="")=>{if(!Number.isFinite(r))return"—";return`${Math.abs(r)>=100?r.toFixed(0):r.toFixed(2).replace(/\.0+$/,"").replace(/(\.\d*[1-9])0+$/,"$1")}${Y0}`},_1=["var(--accent-color)","var(--success-color)","var(--warning-color, #f59e0b)","var(--danger-color)"],L0=(r,Y0)=>{let m=_1;if(!Array.isArray(m)||m.length===0)return"var(--accent-color)";if(m.length===1||!Number.isFinite(Y0)||Y0<=1)return m[0];let J0=Math.max(0,Math.min(Number.isFinite(r)?r:0,Y0-1))/Math.max(1,Y0-1)*(m.length-1),I0=Math.floor(J0),T0=Math.min(m.length-1,I0+1),O0=J0-I0,y0=m[I0],b0=m[T0];if(!b0||I0===T0||O0<=0.001)return y0;if(O0>=0.999)return b0;let W0=Math.round((1-O0)*1000)/10,R0=Math.round(O0*1000)/10;return`color-mix(in oklab, ${y0} ${W0}%, ${b0} ${R0}%)`},f0=(r,Y0="autoresearch")=>{let m=Array.isArray(r)?r.map((j0)=>({...j0,points:Array.isArray(j0?.points)?j0.points.filter((y)=>Number.isFinite(y?.value)&&Number.isFinite(y?.run)):[]})).filter((j0)=>j0.points.length>0):[],i=m.map((j0,y)=>({...j0,color:L0(y,m.length)}));if(i.length===0)return null;let J0=320,I0=120,T0=i.flatMap((j0)=>j0.points),O0=T0.map((j0)=>j0.value),y0=T0.map((j0)=>j0.run),b0=Math.min(...O0),W0=Math.max(...O0),R0=Math.min(...y0),A0=Math.max(...y0);return L`
            <div class="agent-series-chart agent-series-chart-combined">
                <div class="agent-series-chart-header">
                    <span class="agent-series-chart-title">Tracked variables</span>
                    <span class="agent-series-chart-value">${i.length} series</span>
                </div>
                <div class="agent-series-chart-plot">
                    <svg class="agent-series-chart-svg" viewBox=${`0 0 ${J0} ${I0}`} preserveAspectRatio="none" aria-hidden="true">
                        ${i.map((j0)=>{let y=j0?.key||j0?.label||"series",s=a?.panelKey===Y0&&a?.seriesKey===y;return L`
                                <g key=${y}>
                                    <path
                                        class=${`agent-series-chart-line${s?" is-hovered":""}`}
                                        d=${W1(j0.points,J0,I0,b0,W0,R0,A0)}
                                        style=${`--agent-series-color: ${j0.color};`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:y})}
                                        onMouseLeave=${()=>t((N0)=>N0?.panelKey===Y0&&N0?.seriesKey===y?null:N0)}
                                    ></path>
                                </g>
                            `})}
                    </svg>
                    <div class="agent-series-chart-points-layer">
                        ${i.flatMap((j0)=>{let y=typeof j0?.unit==="string"?j0.unit:"",s=j0?.key||j0?.label||"series";return j0.points.map((N0,D0)=>{let m0=d0(N0,J0,I0,b0,W0,R0,A0);return L`
                                    <button
                                        key=${`${s}-point-${D0}`}
                                        type="button"
                                        class="agent-series-chart-point-hit"
                                        style=${`--agent-series-color: ${j0.color}; left:${m0.x/J0*100}%; top:${m0.y/I0*100}%;`}
                                        onMouseEnter=${()=>t({panelKey:Y0,seriesKey:s,run:N0.run,value:N0.value,unit:y})}
                                        onMouseLeave=${()=>t(($1)=>$1?.panelKey===Y0?null:$1)}
                                        onFocus=${()=>t({panelKey:Y0,seriesKey:s,run:N0.run,value:N0.value,unit:y})}
                                        onBlur=${()=>t(($1)=>$1?.panelKey===Y0?null:$1)}
                                        aria-label=${`${j0?.label||"Series"} ${Z1(N0.value,y)} at run ${N0.run}`}
                                    >
                                        <span class="agent-series-chart-point"></span>
                                    </button>
                                `})})}
                    </div>
                </div>
                <div class="agent-series-legend">
                    ${i.map((j0)=>{let y=j0.points[j0.points.length-1]?.value,s=typeof j0?.unit==="string"?j0.unit:"",N0=j0?.key||j0?.label||"series",D0=a?.panelKey===Y0&&a?.seriesKey===N0?a:null,m0=D0&&Number.isFinite(D0.value)?D0.value:y,$1=D0&&typeof D0.unit==="string"?D0.unit:s,G1=D0&&Number.isFinite(D0.run)?D0.run:null;return L`
                            <div key=${`${N0}-legend`} class=${`agent-series-legend-item${D0?" is-hovered":""}`} style=${`--agent-series-color: ${j0.color};`}>
                                <span class="agent-series-legend-swatch" style=${`--agent-series-color: ${j0.color};`}></span>
                                <span class="agent-series-legend-label">${j0?.label||"Series"}</span>
                                ${G1!==null&&L`<span class="agent-series-legend-run">run ${G1}</span>`}
                                <span class="agent-series-legend-value">${Z1(m0,$1)}</span>
                            </div>
                        `})}
                </div>
            </div>
        `},Q1=(r)=>{if(!r)return null;let Y0=typeof r?.key==="string"?r.key:`panel-${Math.random()}`,m=e.has(Y0),i=r?.title||"Extension status",J0=r?.collapsed_text||"",I0=String(r?.state||"").replace(/[-_]+/g," ").replace(/^./,(s)=>s.toUpperCase()),T0=h0(r?.state==="completed"?"success":r?.state==="failed"?"error":r?.state==="stopped"?"warning":"info"),O0=typeof r?.detail_markdown==="string"?r.detail_markdown.trim():"",y0=typeof r?.last_run_text==="string"?r.last_run_text.trim():"",b0=typeof r?.tmux_command==="string"?r.tmux_command.trim():"",W0=Array.isArray(r?.series)?r.series:[],R0=Array.isArray(r?.actions)?r.actions:[],A0=Boolean(O0||b0),j0=Boolean(O0||W0.length>0||b0),y=[i,J0].filter(Boolean).join(" — ");return L`
            <div
                class="agent-thinking agent-thinking-intent agent-thinking-autoresearch"
                aria-live="polite"
                data-expanded=${m?"true":"false"}
                style=${T0?`--turn-color: ${T0};`:""}
                title=${!m?y||i:""}
            >
                <div class="agent-thinking-header agent-thinking-header-inline">
                    <button
                        class="agent-thinking-title intent agent-thinking-title-clickable"
                        type="button"
                        onClick=${()=>j0?Z0(Y0):null}
                    >
                        ${T0&&L`<span class=${g0} aria-hidden="true"></span>`}
                        <span class="agent-thinking-title-text">${i}</span>
                        ${J0&&L`<span class="agent-thinking-title-meta">${J0}</span>`}
                    </button>
                    ${(R0.length>0||j0&&!m)&&L`
                        <div class="agent-thinking-tools-inline">
                            ${R0.length>0&&L`
                                <div class="agent-thinking-actions agent-thinking-actions-inline">
                                    ${R0.map((s)=>{let N0=`${Y0}:${s?.key||""}`,D0=K?.has?.(N0);return L`
                                            <button
                                                key=${N0}
                                                class=${`agent-thinking-action-btn${s?.tone==="danger"?" danger":""}`}
                                                onClick=${()=>N?.(r,s)}
                                                disabled=${Boolean(D0)}
                                            >
                                                ${D0?"Working…":s?.label||"Run"}
                                            </button>
                                        `})}
                                </div>
                            `}
                            ${j0&&!m&&L`
                                <button
                                    class="agent-thinking-corner-toggle agent-thinking-corner-toggle-inline"
                                    type="button"
                                    aria-label=${`Expand ${i}`}
                                    title="Expand details"
                                    onClick=${()=>Z0(Y0)}
                                >
                                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <polyline points="4 10 8 6 12 10"></polyline>
                                    </svg>
                                </button>
                            `}
                        </div>
                    `}
                </div>
                ${j0&&m&&L`
                    <button
                        class="agent-thinking-corner-toggle"
                        type="button"
                        aria-label=${`Collapse ${i}`}
                        title="Collapse details"
                        onClick=${()=>Z0(Y0)}
                    >
                        <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polyline points="4 6 8 10 12 6"></polyline>
                        </svg>
                    </button>
                `}
                ${m&&L`
                    <div class=${`agent-thinking-autoresearch-layout${A0?"":" chart-only"}`}>
                        ${A0&&L`
                            <div class="agent-thinking-autoresearch-meta-stack">
                                ${O0&&L`
                                    <div
                                        class="agent-thinking-body agent-thinking-autoresearch-detail"
                                        dangerouslySetInnerHTML=${{__html:t5(O0)}}
                                    />
                                `}
                                ${b0&&L`
                                    <div class="agent-series-chart-command">
                                        <div class="agent-series-chart-command-header">
                                            <span>Attach to session</span>
                                        </div>
                                        <div class="agent-series-chart-command-shell">
                                            <pre class="agent-series-chart-command-code">${b0}</pre>
                                            <button
                                                type="button"
                                                class="agent-series-chart-command-copy"
                                                aria-label="Copy tmux command"
                                                title="Copy tmux command"
                                                onClick=${()=>N?.(r,{key:"copy_tmux",action_type:"autoresearch.copy_tmux",label:"Copy tmux"})}
                                            >
                                                ${oN}
                                            </button>
                                        </div>
                                    </div>
                                `}
                            </div>
                        `}
                        ${W0.length>0?L`
                                <div class="agent-series-chart-stack">
                                    ${f0(W0,Y0)}
                                    ${y0&&L`<div class="agent-series-chart-note">${y0}</div>`}
                                </div>
                            `:L`<div class="agent-thinking-body agent-thinking-autoresearch-summary">Variable history will appear after the first completed run.</div>`}
                    </div>
                `}
            </div>
        `};return L`
        <div class="agent-status-panel">
            ${U&&Y&&K1(Y,l0)}
            ${B&&Array.isArray(q)&&q.map((r)=>Q1(r))}
            ${U&&_?.type==="intent"&&K1(_,r0,u1)}
            ${U&&Z&&L`
                <div class="agent-status agent-status-request" aria-live="polite" style=${B0?`--turn-color: ${B0};`:""}>
                    <span class=${g0} aria-hidden="true"></span>
                    <div class="agent-status-spinner"></div>
                    <span class="agent-status-text">${e0}</span>
                </div>
            `}
            ${U&&P&&C0({panelTitle:x0("Planning"),text:u.text,fullText:u.fullText,totalLines:u.totalLines,panelKey:"plan"})}
            ${U&&I&&C0({panelTitle:x0("Thoughts"),text:l.text,fullText:l.fullText,totalLines:l.totalLines,maxLines:8,titleClass:"thought",panelKey:"thought"})}
            ${U&&z&&C0({panelTitle:x0("Draft"),text:o.text,fullText:o.fullText,totalLines:o.totalLines,maxLines:8,titleClass:"thought",panelKey:"draft"})}
            ${U&&_&&_?.type!=="intent"&&L`
                <div class=${`agent-status${k0?" agent-status-last-activity":""}${_?.type==="error"?" agent-status-error":""}`} aria-live="polite" style=${B0?`--turn-color: ${B0};`:""}>
                    ${B0&&L`<span class=${g0} aria-hidden="true"></span>`}
                    ${_?.type==="error"?L`<span class="agent-status-error-icon" aria-hidden="true">⚠</span>`:!k0&&L`<div class="agent-status-spinner"></div>`}
                    <span class="agent-status-text">${M0}</span>
                </div>
            `}
        </div>
    `}function TQ({request:_,onRespond:$}){if(!_)return null;let{request_id:j,tool_call:Q,options:Z,chat_jid:Y}=_,q=Q?.title||"Agent Request",K=Q?.kind||"other",N=Q?.rawInput||{},G=N.command||N.commands&&N.commands[0]||null,X=N.diff||null,V=N.fileName||N.path||null,U=Q?.description||N.description||N.explanation||null,J=(Array.isArray(Q?.locations)?Q.locations:[]).map((E)=>E?.path).filter((E)=>Boolean(E)),A=Array.from(new Set([V,...J].filter(Boolean)));console.log("AgentRequestModal:",{request_id:j,tool_call:Q,options:Z});let O=async(E)=>{try{await D8(j,E,Y||null),$()}catch(g){console.error("Failed to respond to agent request:",g)}},F=async()=>{try{await m6(q,`Auto-approved: ${q}`),await D8(j,"approved",Y||null),$()}catch(E){console.error("Failed to add to whitelist:",E)}},D=Z&&Z.length>0;return L`
        <div class="agent-request-modal">
            <div class="agent-request-content">
                <div class="agent-request-header">
                    <div class="agent-request-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <div class="agent-request-title">${q}</div>
                </div>
                ${(U||G||X||A.length>0)&&L`
                    <div class="agent-request-body">
                        ${U&&L`
                            <div class="agent-request-description">${U}</div>
                        `}
                        ${A.length>0&&L`
                            <div class="agent-request-files">
                                <div class="agent-request-subtitle">Files</div>
                                <ul>
                                    ${A.map((E,g)=>L`<li key=${g}>${E}</li>`)}
                                </ul>
                            </div>
                        `}
                        ${G&&L`
                            <pre class="agent-request-command">${G}</pre>
                        `}
                        ${X&&L`
                            <details class="agent-request-diff">
                                <summary>Proposed diff</summary>
                                <pre>${X}</pre>
                            </details>
                        `}
                    </div>
                `}
                <div class="agent-request-actions">
                    ${D?Z.map((E)=>L`
                            <button 
                                key=${E.optionId||E.id||String(E)}
                                class="agent-request-btn ${E.kind==="allow_once"||E.kind==="allow_always"?"primary":""}"
                                onClick=${()=>O(E.optionId||E.id||E)}
                            >
                                ${E.name||E.label||E.optionId||E.id||String(E)}
                            </button>
                        `):L`
                        <button class="agent-request-btn primary" onClick=${()=>O("approved")}>
                            Allow
                        </button>
                        <button class="agent-request-btn" onClick=${()=>O("denied")}>
                            Deny
                        </button>
                        <button class="agent-request-btn always-allow" onClick=${F}>
                            Always Allow This
                        </button>
                    `}
                </div>
            </div>
        </div>
    `}var sN=new Set(["application/json","application/xml","text/csv","text/html","text/markdown","text/plain","text/xml"]),aN=new Set(["text/markdown"]),tN=new Set(["application/msword","application/rtf","application/vnd.ms-excel","application/vnd.ms-powerpoint","application/vnd.oasis.opendocument.presentation","application/vnd.oasis.opendocument.spreadsheet","application/vnd.oasis.opendocument.text","application/vnd.openxmlformats-officedocument.presentationml.presentation","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet","application/vnd.openxmlformats-officedocument.wordprocessingml.document"]),eN=new Set(["application/vnd.jgraph.mxfile"]);function Q8(_){return typeof _==="string"?_.trim().toLowerCase():""}function _G(_){let $=Q8(_);return!!$&&($.endsWith(".drawio")||$.endsWith(".drawio.xml")||$.endsWith(".drawio.svg")||$.endsWith(".drawio.png"))}function $G(_){let $=Q8(_);return!!$&&$.endsWith(".pdf")}function jG(_){let $=Q8(_);return!!$&&($.endsWith(".docx")||$.endsWith(".doc")||$.endsWith(".odt")||$.endsWith(".rtf")||$.endsWith(".xlsx")||$.endsWith(".xls")||$.endsWith(".ods")||$.endsWith(".pptx")||$.endsWith(".ppt")||$.endsWith(".odp"))}function Z8(_,$){let j=Q8(_);if(_G($)||eN.has(j))return"drawio";if($G($)||j==="application/pdf")return"pdf";if(jG($)||tN.has(j))return"office";if(!j)return"unsupported";if(j.startsWith("image/"))return"image";if(sN.has(j)||j.startsWith("text/"))return"text";return"unsupported"}function CQ(_){let $=Q8(_);return aN.has($)}function PQ(_){switch(_){case"image":return"Image preview";case"pdf":return"PDF preview";case"office":return"Office viewer";case"drawio":return"Draw.io preview (read-only)";case"text":return"Text preview";default:return"Preview unavailable"}}function QG(_){let j=String(_||"").trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);if(!j)return null;let Q=j[1].length===3?j[1].split("").map((Z)=>`${Z}${Z}`).join(""):j[1];return{r:parseInt(Q.slice(0,2),16),g:parseInt(Q.slice(2,4),16),b:parseInt(Q.slice(4,6),16)}}function ZG(_){let j=String(_||"").trim().match(/^rgba?\((\d+)[,\s]+(\d+)[,\s]+(\d+)/i);if(!j)return null;let Q=Number(j[1]),Z=Number(j[2]),Y=Number(j[3]);if(![Q,Z,Y].every((q)=>Number.isFinite(q)))return null;return{r:Q,g:Z,b:Y}}function yQ(_){return QG(_)||ZG(_)}function j6(_){let $=(Y)=>{let q=Y/255;return q<=0.03928?q/12.92:((q+0.055)/1.055)**2.4},j=$(_.r),Q=$(_.g),Z=$(_.b);return 0.2126*j+0.7152*Q+0.0722*Z}function YG(_,$){let j=Math.max(j6(_),j6($)),Q=Math.min(j6(_),j6($));return(j+0.05)/(Q+0.05)}function qG(_,$,j="#ffffff"){let Q=yQ(_);if(!Q)return j;let Z=j,Y=-1;for(let q of $){let K=yQ(q);if(!K)continue;let N=YG(Q,K);if(N>Y)Z=q,Y=N}return Z}function B3(){let _=getComputedStyle(document.documentElement),$=(J,A)=>{for(let O of J){let F=_.getPropertyValue(O).trim();if(F)return F}return A},j=$(["--text-primary","--color-text"],"#0f1419"),Q=$(["--text-secondary","--color-text-muted"],"#536471"),Z=$(["--bg-primary","--color-bg-primary"],"#ffffff"),Y=$(["--bg-secondary","--color-bg-secondary"],"#f7f9fa"),q=$(["--bg-hover","--bg-tertiary","--color-bg-tertiary"],"#e8ebed"),K=$(["--accent-color","--color-accent"],"#1d9bf0"),N=$(["--success-color","--color-success"],"#00ba7c"),G=$(["--warning-color","--color-warning","--accent-color"],"#f0b429"),X=$(["--danger-color","--color-error"],"#f4212e"),V=$(["--border-color","--color-border"],"#eff3f4"),U=$(["--font-family"],"system-ui, sans-serif"),B=qG(K,[j,Z],j);return{fg:j,fgMuted:Q,bgPrimary:Z,bg:Y,bgEmphasis:q,accent:K,good:N,warning:G,attention:X,border:V,fontFamily:U,buttonTextColor:B}}function SQ(){let{fg:_,fgMuted:$,bg:j,bgEmphasis:Q,accent:Z,good:Y,warning:q,attention:K,border:N,fontFamily:G}=B3();return{fontFamily:G,containerStyles:{default:{backgroundColor:j,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}},emphasis:{backgroundColor:Q,foregroundColors:{default:{default:_,subtle:$},accent:{default:Z,subtle:Z},good:{default:Y,subtle:Y},warning:{default:q,subtle:q},attention:{default:K,subtle:K}}}},actions:{actionsOrientation:"horizontal",actionAlignment:"left",buttonSpacing:8,maxActions:5,showCard:{actionMode:"inline"},spacing:"default"},adaptiveCard:{allowCustomStyle:!1},spacing:{small:4,default:8,medium:12,large:16,extraLarge:24,padding:12},separator:{lineThickness:1,lineColor:N},fontSizes:{small:12,default:14,medium:16,large:18,extraLarge:22},fontWeights:{lighter:300,default:400,bolder:600},imageSizes:{small:40,medium:80,large:120},textBlock:{headingLevel:2}}}var KG=new Set(["1.0","1.1","1.2","1.3","1.4","1.5","1.6"]),wQ=!1,Q6=null,RQ=!1;function W3(_){_.querySelector(".adaptive-card-notice")?.remove()}function NG(_,$,j="error"){W3(_);let Q=document.createElement("div");Q.className=`adaptive-card-notice adaptive-card-notice-${j}`,Q.textContent=$,_.appendChild(Q)}function GG(_,$=(j)=>O_(j,null)){let j=typeof _==="string"?_:String(_??"");if(!j.trim())return{outputHtml:"",didProcess:!1};return{outputHtml:$(j),didProcess:!0}}function XG(_=($)=>O_($,null)){return($,j)=>{try{let Q=GG($,_);j.outputHtml=Q.outputHtml,j.didProcess=Q.didProcess}catch(Q){console.error("[adaptive-card] Failed to process markdown:",Q),j.outputHtml=String($??""),j.didProcess=!1}}}function VG(_){if(RQ||!_?.AdaptiveCard)return;_.AdaptiveCard.onProcessMarkdown=XG(),RQ=!0}async function UG(){if(wQ)return;if(Q6)return Q6;return Q6=new Promise((_,$)=>{let j=document.createElement("script");j.src="/static/js/vendor/adaptivecards.min.js",j.onload=()=>{wQ=!0,_()},j.onerror=()=>$(Error("Failed to load adaptivecards SDK")),document.head.appendChild(j)}),Q6}function LG(){return globalThis.AdaptiveCards}function BG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card"&&typeof $.card_id==="string"&&typeof $.schema_version==="string"&&typeof $.payload==="object"&&$.payload!==null}function WG(_){return KG.has(_)}function z3(_){if(!Array.isArray(_))return[];return _.filter(BG)}function FG(_){let $=(typeof _?.getJsonTypeName==="function"?_.getJsonTypeName():"")||_?.constructor?.name||"Unknown",j=(typeof _?.title==="string"?_.title:"")||"",Q=(typeof _?.url==="string"?_.url:"")||void 0,Z=_?.data??void 0;return{type:$,title:j,data:Z,url:Q,raw:_}}function F3(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>F3($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).map(([j,Q])=>`${j}: ${F3(Q)}`).filter((j)=>!j.endsWith(": ")).join(", ");return String(_).trim()}function zG(_,$,j){if($==null)return $;if(_==="Input.Toggle"){if(typeof $==="boolean"){if($)return j?.valueOn??"true";return j?.valueOff??"false"}return typeof $==="string"?$:String($)}if(_==="Input.ChoiceSet"){if(Array.isArray($))return $.join(",");return typeof $==="string"?$:String($)}if(Array.isArray($))return $.join(", ");if(typeof $==="object")return F3($);return typeof $==="string"?$:String($)}function HG(_,$){if(!_||typeof _!=="object")return _;if(!$||typeof $!=="object"||Array.isArray($))return _;let j=$,Q=(Z)=>{if(Array.isArray(Z))return Z.map((K)=>Q(K));if(!Z||typeof Z!=="object")return Z;let q={...Z};if(typeof q.id==="string"&&q.id in j&&String(q.type||"").startsWith("Input."))q.value=zG(q.type,j[q.id],q);for(let[K,N]of Object.entries(q))if(Array.isArray(N)||N&&typeof N==="object")q[K]=Q(N);return q};return Q(_)}function JG(_){_.classList.add("adaptive-card-readonly");for(let $ of Array.from(_.querySelectorAll("input, textarea, select, button"))){let j=$;try{j.setAttribute("aria-disabled","true")}catch{}try{j.setAttribute("tabindex","-1")}catch{}if("disabled"in j)try{j.disabled=!0}catch{}if("readOnly"in j)try{j.readOnly=!0}catch{}}}function OG(_){if(typeof _!=="string"||!_.trim())return"";let $=new Date(_);if(Number.isNaN($.getTime()))return"";return new Intl.DateTimeFormat(void 0,{month:"short",day:"numeric",hour:"numeric",minute:"2-digit"}).format($)}function AG(_){if(_.state==="active")return null;let $=_.state==="completed"?"Submitted":_.state==="cancelled"?"Cancelled":"Failed",j=_.last_submission&&typeof _.last_submission==="object"?_.last_submission:null,Q=j&&typeof j.title==="string"?j.title.trim():"",Z=OG(_.completed_at||j?.submitted_at),Y=[Q||null,Z||null].filter(Boolean).join(" · ")||null;return{label:$,detail:Y}}async function uQ(_,$,j){if(!WG($.schema_version))return console.warn(`[adaptive-card] Unsupported schema version ${$.schema_version} for card ${$.card_id}`),!1;try{await UG()}catch(Q){return console.error("[adaptive-card] Failed to load SDK:",Q),!1}try{let Q=LG();VG(Q);let Z=new Q.AdaptiveCard,Y=B3();Z.hostConfig=new Q.HostConfig(SQ());let q=$.last_submission&&typeof $.last_submission==="object"?$.last_submission.data:void 0,K=$.state==="active"?$.payload:HG($.payload,q);Z.parse(K),Z.onExecuteAction=(X)=>{let V=FG(X);if(j?.onAction)W3(_),_.classList.add("adaptive-card-busy"),Promise.resolve(j.onAction(V)).catch((U)=>{console.error("[adaptive-card] Action failed:",U);let B=U instanceof Error?U.message:String(U||"Action failed.");NG(_,B||"Action failed.","error")}).finally(()=>{_.classList.remove("adaptive-card-busy")});else console.log("[adaptive-card] Action executed (not wired yet):",V)};let N=Z.render();if(!N)return console.warn(`[adaptive-card] Card ${$.card_id} rendered to null`),!1;_.classList.add("adaptive-card-container"),_.style.setProperty("--adaptive-card-button-text-color",Y.buttonTextColor);let G=AG($);if(G){_.classList.add("adaptive-card-finished");let X=document.createElement("div");X.className=`adaptive-card-status adaptive-card-status-${$.state}`;let V=document.createElement("span");if(V.className="adaptive-card-status-label",V.textContent=G.label,X.appendChild(V),G.detail){let U=document.createElement("span");U.className="adaptive-card-status-detail",U.textContent=G.detail,X.appendChild(U)}_.appendChild(X)}if(W3(_),_.appendChild(N),G)JG(N);return!0}catch(Q){return console.error(`[adaptive-card] Failed to render card ${$.card_id}:`,Q),!1}}function Y8(_){if(_==null)return"";if(typeof _==="string")return _.trim();if(typeof _==="number")return String(_);if(typeof _==="boolean")return _?"yes":"no";if(Array.isArray(_))return _.map(($)=>Y8($)).filter(Boolean).join(", ");if(typeof _==="object")return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>`${$}: ${Y8(j)}`).filter(($)=>!$.endsWith(": ")).join(", ");return String(_).trim()}function fQ(_){if(typeof _!=="object"||_==null||Array.isArray(_))return[];return Object.entries(_).filter(([$])=>!$.startsWith("__")).map(([$,j])=>({key:$,value:Y8(j)})).filter(($)=>$.value)}function DG(_){if(!_||typeof _!=="object")return!1;let $=_;return $.type==="adaptive_card_submission"&&typeof $.card_id==="string"&&typeof $.source_post_id==="number"&&typeof $.submitted_at==="string"}function H3(_){if(!Array.isArray(_))return[];return _.filter(DG)}function vQ(_){let $=String(_.title||_.card_id||"card").trim()||"card",j=_.data;if(j==null)return`Card submission: ${$}`;if(typeof j==="string"||typeof j==="number"||typeof j==="boolean"){let Q=Y8(j);return Q?`Card submission: ${$} — ${Q}`:`Card submission: ${$}`}if(typeof j==="object"){let Z=fQ(j).map(({key:Y,value:q})=>`${Y}: ${q}`);return Z.length>0?`Card submission: ${$} — ${Z.join(", ")}`:`Card submission: ${$}`}return`Card submission: ${$}`}function gQ(_){let $=String(_.title||_.card_id||"Card submission").trim()||"Card submission",j=fQ(_.data),Q=j.length>0?j.slice(0,2).map(({key:Y,value:q})=>`${Y}: ${q}`).join(", "):Y8(_.data)||null,Z=j.length;return{title:$,summary:Q,fields:j,fieldCount:Z,submittedAt:_.submitted_at}}function M5({children:_,className:$=""}){let j=x(null);return f(()=>{if(typeof document>"u")return;let Q=document.createElement("div");if($)Q.className=$;return document.body.appendChild(Q),j.current=Q,()=>{try{T4(null,Q)}finally{if(Q.remove(),j.current===Q)j.current=null}}},[$]),u5(()=>{let Q=j.current;if(!Q)return;return T4(_,Q),()=>{T4(null,Q)}},[_]),null}function EG(_){let $=_?.metadata?.size;return[{label:"Type",value:_?.content_type||"application/octet-stream"},{label:"Size",value:typeof $==="number"?w_($):null},{label:"Added",value:_?.created_at?a4(_.created_at):null}].filter((Q)=>Q.value)}function kG(_,$,j){let Q=encodeURIComponent($||`attachment-${_}`),Z=encodeURIComponent(String(_));if(j==="pdf")return`/pdf-viewer/?media=${Z}&name=${Q}#media=${Z}&name=${Q}`;if(j==="office"){let Y=S_(_);return`/office-viewer/?url=${encodeURIComponent(Y)}&name=${Q}`}if(j==="drawio")return`/drawio/edit.html?media=${Z}&name=${Q}&readonly=1#media=${Z}&name=${Q}&readonly=1`;return null}function bQ({mediaId:_,info:$,onClose:j}){let Q=$?.filename||`attachment-${_}`,Z=u0(()=>Z8($?.content_type,Q),[$?.content_type,Q]),Y=PQ(Z),q=u0(()=>CQ($?.content_type),[$?.content_type]),[K,N]=v(Z==="text"),[G,X]=v(""),[V,U]=v(null),B=x(null),J=u0(()=>EG($),[$]),A=u0(()=>kG(_,Q,Z),[_,Q,Z]),O=u0(()=>{if(!q||!G)return"";return O_(G)},[q,G]);return f(()=>{let F=(D)=>{if(D.key==="Escape")j()};return document.addEventListener("keydown",F),()=>document.removeEventListener("keydown",F)},[j]),f(()=>{if(!B.current||!O)return;F4(B.current);return},[O]),f(()=>{let F=!1;async function D(){if(Z!=="text"){N(!1),U(null);return}N(!0),U(null);try{let E=await l6(_);if(!F)X(E)}catch{if(!F)U("Failed to load text preview.")}finally{if(!F)N(!1)}}return D(),()=>{F=!0}},[_,Z]),L`
        <${M5} className="attachment-preview-portal-root">
            <div class="image-modal attachment-preview-modal" onClick=${j}>
                <div class="attachment-preview-shell" onClick=${(F)=>{F.stopPropagation()}}>
                    <div class="attachment-preview-header">
                        <div class="attachment-preview-heading">
                            <div class="attachment-preview-title">${Q}</div>
                            <div class="attachment-preview-subtitle">${Y}</div>
                        </div>
                        <div class="attachment-preview-header-actions">
                            ${A&&L`
                                <a
                                    href=${A}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="attachment-preview-download"
                                    onClick=${(F)=>F.stopPropagation()}
                                >
                                    Open in Tab
                                </a>
                            `}
                            <a
                                href=${S_(_)}
                                download=${Q}
                                class="attachment-preview-download"
                                onClick=${(F)=>F.stopPropagation()}
                            >
                                Download
                            </a>
                            <button class="attachment-preview-close" type="button" onClick=${j}>Close</button>
                        </div>
                    </div>
                    <div class="attachment-preview-body">
                        ${K&&L`<div class="attachment-preview-state">Loading preview…</div>`}
                        ${!K&&V&&L`<div class="attachment-preview-state">${V}</div>`}
                        ${!K&&!V&&Z==="image"&&L`
                            <img class="attachment-preview-image" src=${S_(_)} alt=${Q} />
                        `}
                        ${!K&&!V&&(Z==="pdf"||Z==="office"||Z==="drawio")&&A&&L`
                            <iframe class="attachment-preview-frame" src=${A} title=${Q}></iframe>
                        `}
                        ${!K&&!V&&Z==="drawio"&&L`
                            <div class="attachment-preview-readonly-note">Draw.io preview is read-only. Editing tools are disabled in this preview.</div>
                        `}
                        ${!K&&!V&&Z==="text"&&q&&L`
                            <div
                                ref=${B}
                                class="attachment-preview-markdown post-content"
                                dangerouslySetInnerHTML=${{__html:O}}
                            />
                        `}
                        ${!K&&!V&&Z==="text"&&!q&&L`
                            <pre class="attachment-preview-text">${G}</pre>
                        `}
                        ${!K&&!V&&Z==="unsupported"&&L`
                            <div class="attachment-preview-state">
                                Preview is not available for this file type yet. You can still download it directly.
                            </div>
                        `}
                    </div>
                    <div class="attachment-preview-meta">
                        ${J.map((F)=>L`
                            <div class="attachment-preview-meta-item" key=${F.label}>
                                <span class="attachment-preview-meta-label">${F.label}</span>
                                <span class="attachment-preview-meta-value">${F.value}</span>
                            </div>
                        `)}
                    </div>
                </div>
            </div>
        </${M5}>
    `}function mQ({src:_,onClose:$}){return f(()=>{let j=(Q)=>{if(Q.key==="Escape")$()};return document.addEventListener("keydown",j),()=>document.removeEventListener("keydown",j)},[$]),L`
        <${M5} className="image-modal-portal-root">
            <div class="image-modal" onClick=${$}>
                <img src=${_} alt="Full size" />
            </div>
        </${M5}>
    `}function MG({mediaId:_,onPreview:$}){let[j,Q]=v(null);if(f(()=>{L5(_).then(Q).catch(()=>{})},[_]),!j)return null;let Z=j.filename||"file",Y=j.metadata?.size,q=Y?w_(Y):"",N=Z8(j.content_type,j.filename)==="unsupported"?"Details":"Preview";return L`
        <div class="file-attachment" onClick=${(G)=>G.stopPropagation()}>
            <a href=${S_(_)} download=${Z} class="file-attachment-main">
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
                        ${q&&L`<span class="file-size">${q}</span>`}
                        ${j.content_type&&L`<span class="file-size">${j.content_type}</span>`}
                    </span>
                </div>
                <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                    <polyline points="7 10 12 15 17 10"/>
                    <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
            </a>
            <button
                class="file-attachment-preview"
                type="button"
                onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:_,info:j})}}
            >
                ${N}
            </button>
        </div>
    `}function IG({attachment:_,onPreview:$}){let j=Number(_?.id),[Q,Z]=v(null);f(()=>{if(!Number.isFinite(j))return;L5(j).then(Z).catch(()=>{});return},[j]);let Y=Q?.filename||_.label||`attachment-${_.id}`,q=Number.isFinite(j)?S_(j):null,N=Z8(Q?.content_type,Q?.filename||_?.label)==="unsupported"?"Details":"Preview";return L`
        <span class="attachment-pill" title=${Y}>
            ${q?L`
                    <a href=${q} download=${Y} class="attachment-pill-main" onClick=${(G)=>G.stopPropagation()}>
                        <${p_}
                            prefix="post"
                            label=${_.label}
                            title=${Y}
                        />
                    </a>
                `:L`
                    <${p_}
                        prefix="post"
                        label=${_.label}
                        title=${Y}
                    />
                `}
            ${Number.isFinite(j)&&Q&&L`
                <button
                    class="attachment-pill-preview"
                    type="button"
                    title=${N}
                    onClick=${(G)=>{G.preventDefault(),G.stopPropagation(),$?.({mediaId:j,info:Q})}}
                >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                </button>
            `}
        </span>
    `}function Z6({annotations:_}){if(!_)return null;let{audience:$,priority:j,lastModified:Q}=_,Z=Q?a4(Q):null;return L`
        <div class="content-annotations">
            ${$&&$.length>0&&L`
                <span class="content-annotation">Audience: ${$.join(", ")}</span>
            `}
            ${typeof j==="number"&&L`
                <span class="content-annotation">Priority: ${j}</span>
            `}
            ${Z&&L`
                <span class="content-annotation">Updated: ${Z}</span>
            `}
        </div>
    `}function xG({block:_}){let $=_.title||_.name||_.uri,j=_.description,Q=_.size?w_(_.size):"",Z=_.mime_type||"",Y=PG(Z),q=s4(_.uri);return L`
        <a
            href=${q||"#"}
            class="resource-link"
            target=${q?"_blank":void 0}
            rel=${q?"noopener noreferrer":void 0}
            onClick=${(K)=>K.stopPropagation()}>
            <div class="resource-link-main">
                <div class="resource-link-header">
                    <span class="resource-link-icon-inline">${Y}</span>
                    <div class="resource-link-title">${$}</div>
                </div>
                ${j&&L`<div class="resource-link-description">${j}</div>`}
                <div class="resource-link-meta">
                    ${Z&&L`<span>${Z}</span>`}
                    ${Q&&L`<span>${Q}</span>`}
                </div>
            </div>
            <div class="resource-link-icon">↗</div>
        </a>
    `}function TG({block:_}){let[$,j]=v(!1),Q=_.uri||"Embedded resource",Z=_.text||"",Y=Boolean(_.data),q=_.mime_type||"";return L`
        <div class="resource-embed">
            <button class="resource-embed-toggle" onClick=${(K)=>{K.preventDefault(),K.stopPropagation(),j(!$)}}>
                ${$?"▼":"▶"} ${Q}
            </button>
            ${$&&L`
                ${Z&&L`<pre class="resource-embed-content">${Z}</pre>`}
                ${Y&&L`
                    <div class="resource-embed-blob">
                        <span class="resource-embed-blob-label">Embedded blob</span>
                        ${q&&L`<span class="resource-embed-blob-meta">${q}</span>`}
                        <button class="resource-embed-blob-btn" onClick=${(K)=>{K.preventDefault(),K.stopPropagation();let N=new Blob([Uint8Array.from(atob(_.data),(V)=>V.charCodeAt(0))],{type:q||"application/octet-stream"}),G=URL.createObjectURL(N),X=document.createElement("a");X.href=G,X.download=Q.split("/").pop()||"resource",X.click(),URL.revokeObjectURL(G)}}>Download</button>
                    </div>
                `}
            `}
        </div>
    `}function CG({block:_,post:$,onOpenWidget:j}){if(!_)return null;let Q=$3(_,$),Z=mj(_),Y=Q?.artifact?.kind||_?.artifact?.kind||_?.kind||null,q=Q?.title||_.title||_.name||"Generated widget",K=Q?.description||_.description||_.subtitle||"",N=_.open_label||"Open widget",G=(X)=>{if(X.preventDefault(),X.stopPropagation(),!Q)return;j?.(Q)};return L`
        <div class="generated-widget-launch" onClick=${(X)=>X.stopPropagation()}>
            <div class="generated-widget-launch-header">
                <div class="generated-widget-launch-eyebrow">Generated widget${Y?` • ${String(Y).toUpperCase()}`:""}</div>
                <div class="generated-widget-launch-title">${q}</div>
            </div>
            ${K&&L`<div class="generated-widget-launch-description">${K}</div>`}
            <div class="generated-widget-launch-actions">
                <button
                    class="generated-widget-launch-btn"
                    type="button"
                    disabled=${!Z}
                    onClick=${G}
                    title=${Z?"Open widget in a floating pane":"Unsupported widget artifact"}
                >
                    ${N}
                </button>
                <span class="generated-widget-launch-note">
                    ${Z?"Opens in a dismissible floating pane.":"This widget artifact is missing or unsupported."}
                </span>
            </div>
        </div>
    `}function PG(_){if(!_)return"\uD83D\uDCCE";if(_.startsWith("image/"))return"\uD83D\uDDBC️";if(_.startsWith("audio/"))return"\uD83C\uDFB5";if(_.startsWith("video/"))return"\uD83C\uDFAC";if(_.includes("pdf"))return"\uD83D\uDCC4";if(_.includes("zip")||_.includes("gzip"))return"\uD83D\uDDDC️";if(_.startsWith("text/"))return"\uD83D\uDCC4";return"\uD83D\uDCCE"}function yG({preview:_}){let $=s4(_.url),j=s4(_.image,{allowDataImage:!0}),Q=j?`background-image: url('${j}')`:"",Z=_.site_name;if(!Z&&$)try{Z=new URL($).hostname}catch{Z=$}return L`
        <a
            href=${$||"#"}
            class="link-preview ${j?"has-image":""}"
            target=${$?"_blank":void 0}
            rel=${$?"noopener noreferrer":void 0}
            onClick=${(Y)=>Y.stopPropagation()}
            style=${Q}>
            <div class="link-preview-overlay">
                <div class="link-preview-site">${Z||""}</div>
                <div class="link-preview-title">${_.title}</div>
                ${_.description&&L`
                    <div class="link-preview-description">${_.description}</div>
                `}
            </div>
        </a>
    `}function SG(_,$){return typeof _==="string"?_:""}var wG=1800,RG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="9" y="9" width="10" height="10" rx="2"></rect>
        <path d="M7 15H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v1"></path>
    </svg>`,uG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M20 6L9 17l-5-5"></path>
    </svg>`,fG=`
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="9"></circle>
        <path d="M9 9l6 6M15 9l-6 6"></path>
    </svg>`;async function vG(_){let $=typeof _==="string"?_:"";if(!$)return!1;if(navigator.clipboard?.writeText)try{return await navigator.clipboard.writeText($),!0}catch{}try{let j=document.createElement("textarea");j.value=$,j.setAttribute("readonly",""),j.style.position="fixed",j.style.opacity="0",j.style.pointerEvents="none",document.body.appendChild(j),j.select(),j.setSelectionRange(0,j.value.length);let Q=document.execCommand("copy");return document.body.removeChild(j),Q}catch{return!1}}function gG(_){if(!_)return()=>{};let $=Array.from(_.querySelectorAll("pre")).filter((Y)=>Y.querySelector("code"));if($.length===0)return()=>{};let j=new Map,Q=[],Z=(Y,q)=>{let K=q||"idle";if(Y.dataset.copyState=K,K==="success")Y.innerHTML=uG,Y.setAttribute("aria-label","Copied"),Y.setAttribute("title","Copied"),Y.classList.add("is-success"),Y.classList.remove("is-error");else if(K==="error")Y.innerHTML=fG,Y.setAttribute("aria-label","Copy failed"),Y.setAttribute("title","Copy failed"),Y.classList.add("is-error"),Y.classList.remove("is-success");else Y.innerHTML=RG,Y.setAttribute("aria-label","Copy code"),Y.setAttribute("title","Copy code"),Y.classList.remove("is-success","is-error")};return $.forEach((Y)=>{let q=document.createElement("div");q.className="post-code-block",Y.parentNode?.insertBefore(q,Y),q.appendChild(Y);let K=document.createElement("button");K.type="button",K.className="post-code-copy-btn",Z(K,"idle"),q.appendChild(K);let N=async(G)=>{G.preventDefault(),G.stopPropagation();let V=Y.querySelector("code")?.textContent||"",U=await vG(V);Z(K,U?"success":"error");let B=j.get(K);if(B)clearTimeout(B);let J=setTimeout(()=>{Z(K,"idle"),j.delete(K)},wG);j.set(K,J)};K.addEventListener("click",N),Q.push(()=>{K.removeEventListener("click",N);let G=j.get(K);if(G)clearTimeout(G);if(q.parentNode)q.parentNode.insertBefore(Y,q),q.remove()})}),()=>{Q.forEach((Y)=>Y())}}function bG(_){if(!_)return{content:_,fileRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Files:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,fileRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G))Z.push(G.replace(/^\s*-\s+/,"").trim());else if(!G.trim())break;else break}if(Z.length===0)return{content:_,fileRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,fileRefs:Z}}function mG(_){if(!_)return{content:_,messageRefs:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1)if(j[G].trim()==="Referenced messages:"&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}if(Q===-1)return{content:_,messageRefs:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let V=G.replace(/^\s*-\s+/,"").trim().match(/^message:(\S+)$/i);if(V)Z.push(V[1])}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,messageRefs:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,messageRefs:Z}}function hG(_){if(!_)return{content:_,attachments:[]};let j=_.replace(/\r\n/g,`
`).replace(/\r/g,`
`).split(`
`),Q=-1;for(let G=0;G<j.length;G+=1){let X=j[G].trim();if((X==="Images:"||X==="Attachments:")&&j[G+1]&&/^\s*-\s+/.test(j[G+1])){Q=G;break}}if(Q===-1)return{content:_,attachments:[]};let Z=[],Y=Q+1;for(;Y<j.length;Y+=1){let G=j[Y];if(/^\s*-\s+/.test(G)){let X=G.replace(/^\s*-\s+/,"").trim(),V=X.match(/^attachment:([^\s)]+)\s*(?:\((.+)\))?$/i)||X.match(/^attachment:([^\s]+)\s+(.+)$/i);if(V){let U=V[1],B=(V[2]||"").trim()||U;Z.push({id:U,label:B,raw:X})}else Z.push({id:null,label:X,raw:X})}else if(!G.trim())break;else break}if(Z.length===0)return{content:_,attachments:[]};let q=j.slice(0,Q),K=j.slice(Y),N=[...q,...K].join(`
`);return N=N.replace(/\n{3,}/g,`

`).trim(),{content:N,attachments:Z}}function pG(_){return _.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function cG(_,$){if(!_||!$)return _;let j=String($).trim().split(/\s+/).filter(Boolean);if(j.length===0)return _;let Q=j.map(pG).sort((X,V)=>V.length-X.length),Z=new RegExp(`(${Q.join("|")})`,"gi"),Y=new RegExp(`^(${Q.join("|")})$`,"i"),q=new DOMParser().parseFromString(_,"text/html"),K=q.createTreeWalker(q.body,NodeFilter.SHOW_TEXT),N=[],G;while(G=K.nextNode())N.push(G);for(let X of N){let V=X.nodeValue;if(!V||!Z.test(V)){Z.lastIndex=0;continue}Z.lastIndex=0;let U=X.parentElement;if(U&&U.closest("code, pre, script, style"))continue;let B=V.split(Z).filter((A)=>A!=="");if(B.length===0)continue;let J=q.createDocumentFragment();for(let A of B)if(Y.test(A)){let O=q.createElement("mark");O.className="search-highlight-term",O.textContent=A,J.appendChild(O)}else J.appendChild(q.createTextNode(A));X.parentNode.replaceChild(J,X)}return q.body.innerHTML}function hQ({post:_,onClick:$,onHashtagClick:j,onMessageRef:Q,onScrollToMessage:Z,agentName:Y,agentAvatarUrl:q,userName:K,userAvatarUrl:N,userAvatarBackground:G,onDelete:X,isThreadReply:V,isThreadPrev:U,isThreadNext:B,isRemoving:J,highlightQuery:A,onFileRef:O,onOpenWidget:F}){let[D,E]=v(null),g=x(null),u=_.data,l=u.type==="agent_response",o=K||"You",P=l?Y||kQ:o,I=l?U3(Y,q,!0):U3(o,N),z=typeof G==="string"?G.trim().toLowerCase():"",C=!l&&I.image&&(z==="clear"||z==="transparent"),b=l&&Boolean(I.image),e=`background-color: ${C||b?"transparent":I.color}`,p=u.content_meta,a=Boolean(p?.truncated),t=Boolean(p?.preview),_0=a&&!t,q0=a?{originalLength:Number.isFinite(p?.original_length)?p.original_length:u.content?u.content.length:0,maxLength:Number.isFinite(p?.max_length)?p.max_length:0}:null,Z0=u.content_blocks||[],X0=u.media_ids||[],z0=SG(u.content,u.link_previews),{content:B0,fileRefs:g0}=bG(z0),{content:x0,messageRefs:k0}=mG(B0),{content:h0,attachments:v0}=hG(x0);z0=h0;let l0=z3(Z0),r0=H3(Z0),M0=l0.length===1&&typeof l0[0]?.fallback_text==="string"?l0[0].fallback_text.trim():"",o0=r0.length===1?vQ(r0[0]).trim():"",H0=Boolean(M0)&&z0?.trim()===M0||Boolean(o0)&&z0?.trim()===o0,C0=Boolean(z0)&&!_0&&!H0,s0=typeof A==="string"?A.trim():"",e0=u0(()=>{if(!z0||H0)return"";let y=O_(z0,j);return s0?cG(y,s0):y},[z0,H0,s0]),u1=(y,s)=>{y.stopPropagation(),E(S_(s))},[K1,d0]=v(null),W1=(y)=>{d0(y)},Z1=(y)=>{y.stopPropagation(),X?.(_)},_1=(y,s)=>{let N0=new Set;if(!y||s.length===0)return{content:y,usedIds:N0};return{content:y.replace(/attachment:([^\s)"']+)/g,(m0,$1,G1,M1)=>{let f1=$1.replace(/^\/+/,""),j_=s.find((s1)=>s1.name&&s1.name.toLowerCase()===f1.toLowerCase()&&!N0.has(s1.id))||s.find((s1)=>!N0.has(s1.id));if(!j_)return m0;if(N0.add(j_.id),M1.slice(Math.max(0,G1-2),G1)==="](")return`/media/${j_.id}`;return j_.name||"attachment"}),usedIds:N0}},L0=[],f0=[],Q1=[],r=[],Y0=[],m=[],i=[],J0=0;if(Z0.length>0)Z0.forEach((y)=>{if(y?.type==="text"&&y.annotations)i.push(y.annotations);if(y?.type==="generated_widget")m.push(y);else if(y?.type==="resource_link")r.push(y);else if(y?.type==="resource")Y0.push(y);else if(y?.type==="file"){let s=X0[J0++];if(s)f0.push(s),Q1.push({id:s,name:y?.name||y?.filename||y?.title})}else if(y?.type==="image"||!y?.type){let s=X0[J0++];if(s){let N0=typeof y?.mime_type==="string"?y.mime_type:void 0;L0.push({id:s,annotations:y?.annotations,mimeType:N0}),Q1.push({id:s,name:y?.name||y?.filename||y?.title})}}});else if(X0.length>0){let y=v0.length>0;X0.forEach((s,N0)=>{let D0=v0[N0]||null;if(Q1.push({id:s,name:D0?.label||null}),y)f0.push(s);else L0.push({id:s,annotations:null})})}if(v0.length>0)v0.forEach((y)=>{if(!y?.id)return;let s=Q1.find((N0)=>String(N0.id)===String(y.id));if(s&&!s.name)s.name=y.label});let{content:I0,usedIds:T0}=_1(z0,Q1);z0=I0;let O0=L0.filter(({id:y})=>!T0.has(y)),y0=f0.filter((y)=>!T0.has(y)),b0=v0.length>0?v0.map((y,s)=>({id:y.id||`attachment-${s+1}`,label:y.label||`attachment-${s+1}`})):Q1.map((y,s)=>({id:y.id,label:y.name||`attachment-${s+1}`})),W0=u0(()=>z3(Z0),[Z0]),R0=u0(()=>H3(Z0),[Z0]),A0=u0(()=>{return W0.map((y)=>`${y.card_id}:${y.state}`).join("|")},[W0]);f(()=>{if(!g.current)return;return F4(g.current),gG(g.current)},[e0]);let j0=x(null);return f(()=>{if(!j0.current||W0.length===0)return;let y=j0.current;y.innerHTML="";for(let s of W0){let N0=document.createElement("div");y.appendChild(N0),uQ(N0,s,{onAction:async(D0)=>{if(D0.type==="Action.OpenUrl"){let m0=s4(D0.url||"");if(!m0)throw Error("Invalid URL");window.open(m0,"_blank","noopener,noreferrer");return}if(D0.type==="Action.Submit"){await b6({post_id:_.id,thread_id:u.thread_id||_.id,chat_jid:_.chat_jid||null,card_id:s.card_id,action:{type:D0.type,title:D0.title||"",data:D0.data}});return}console.warn("[post] unsupported adaptive card action:",D0.type,D0)}}).catch((D0)=>{console.error("[post] adaptive card render error:",D0),N0.textContent=s.fallback_text||"Card failed to render."})}},[A0,_.id]),L`
        <div id=${`post-${_.id}`} class="post ${l?"agent-post":""} ${V?"thread-reply":""} ${U?"thread-prev":""} ${B?"thread-next":""} ${J?"removing":""}" onClick=${$}>
            <div class="post-avatar ${l?"agent-avatar":""} ${I.image?"has-image":""}" style=${e}>
                ${I.image?L`<img src=${I.image} alt=${P} />`:I.letter}
            </div>
            <div class="post-body">
                <button
                    class="post-delete-btn"
                    type="button"
                    title="Delete message"
                    aria-label="Delete message"
                    onClick=${Z1}
                >
                    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="M18 6L6 18M6 6l12 12" />
                    </svg>
                </button>
                <div class="post-meta">
                    <span class="post-author">${P}</span>
                    <a class="post-time" href=${`#msg-${_.id}`} onClick=${(y)=>{if(y.preventDefault(),y.stopPropagation(),Q)Q(_.id)}}>${u7(_.timestamp)}</a>
                </div>
                ${_0&&q0&&L`
                    <div class="post-content truncated">
                        <div class="truncated-title">Message too large to display.</div>
                        <div class="truncated-meta">
                            Original length: ${e5(q0.originalLength)} chars
                            ${q0.maxLength?L` • Display limit: ${e5(q0.maxLength)} chars`:""}
                        </div>
                    </div>
                `}
                ${t&&q0&&L`
                    <div class="post-content preview">
                        <div class="truncated-title">Preview truncated.</div>
                        <div class="truncated-meta">
                            Showing first ${e5(q0.maxLength)} of ${e5(q0.originalLength)} chars. Download full text below.
                        </div>
                    </div>
                `}
                ${(g0.length>0||k0.length>0||b0.length>0)&&L`
                    <div class="post-file-refs">
                        ${k0.map((y)=>{let s=(N0)=>{if(N0.preventDefault(),N0.stopPropagation(),Z)Z(y,_.chat_jid||null);else{let D0=document.getElementById("post-"+y);if(D0)D0.scrollIntoView({behavior:"smooth",block:"center"}),D0.classList.add("post-highlight"),setTimeout(()=>D0.classList.remove("post-highlight"),2000)}};return L`
                                <a href=${`#msg-${y}`} class="post-msg-pill-link" onClick=${s}>
                                    <${p_}
                                        prefix="post"
                                        label=${"msg:"+y}
                                        title=${"Message "+y}
                                        icon="message"
                                        onClick=${s}
                                    />
                                </a>
                            `})}
                        ${g0.map((y)=>{let s=y.split("/").pop()||y;return L`
                                <${p_}
                                    prefix="post"
                                    label=${s}
                                    title=${y}
                                    onClick=${()=>O?.(y)}
                                />
                            `})}
                        ${b0.map((y)=>L`
                            <${IG}
                                key=${y.id}
                                attachment=${y}
                                onPreview=${W1}
                            />
                        `)}
                    </div>
                `}
                ${C0&&L`
                    <div 
                        ref=${g}
                        class="post-content"
                        dangerouslySetInnerHTML=${{__html:e0}}
                        onClick=${(y)=>{if(y.target.classList.contains("hashtag")){y.preventDefault(),y.stopPropagation();let s=y.target.dataset.hashtag;if(s)j?.(s)}else if(y.target.tagName==="IMG")y.preventDefault(),y.stopPropagation(),E(y.target.src)}}
                    />
                `}
                ${W0.length>0&&L`
                    <div ref=${j0} class="post-adaptive-cards" />
                `}
                ${R0.length>0&&L`
                    <div class="post-adaptive-card-submissions">
                        ${R0.map((y,s)=>{let N0=gQ(y),D0=`${y.card_id}-${s}`;return L`
                                <div key=${D0} class="adaptive-card-submission-receipt">
                                    <div class="adaptive-card-submission-header">
                                        <span class="adaptive-card-submission-icon" aria-hidden="true">✓</span>
                                        <div class="adaptive-card-submission-title-wrap">
                                            <span class="adaptive-card-submission-title">Submitted</span>
                                            <span class="adaptive-card-submission-title-action">${N0.title}</span>
                                        </div>
                                    </div>
                                    ${N0.fields.length>0&&L`
                                        <div class="adaptive-card-submission-fields">
                                            ${N0.fields.map((m0)=>L`
                                                <span class="adaptive-card-submission-field" title=${`${m0.key}: ${m0.value}`}>
                                                    <span class="adaptive-card-submission-field-key">${m0.key}</span>
                                                    <span class="adaptive-card-submission-field-sep">:</span>
                                                    <span class="adaptive-card-submission-field-value">${m0.value}</span>
                                                </span>
                                            `)}
                                        </div>
                                    `}
                                    <div class="adaptive-card-submission-meta">
                                        Submitted ${a4(N0.submittedAt)}
                                    </div>
                                </div>
                            `})}
                    </div>
                `}
                ${m.length>0&&L`
                    <div class="generated-widget-launches">
                        ${m.map((y,s)=>L`
                            <${CG}
                                key=${y.widget_id||y.id||`${_.id}-widget-${s}`}
                                block=${y}
                                post=${_}
                                onOpenWidget=${F}
                            />
                        `)}
                    </div>
                `}
                ${i.length>0&&L`
                    ${i.map((y,s)=>L`
                        <${Z6} key=${s} annotations=${y} />
                    `)}
                `}
                ${O0.length>0&&L`
                    <div class="media-preview">
                        ${O0.map(({id:y,mimeType:s})=>{let D0=typeof s==="string"&&s.toLowerCase().startsWith("image/svg")?S_(y):c6(y);return L`
                                <img 
                                    key=${y} 
                                    src=${D0} 
                                    alt="Media" 
                                    loading="lazy"
                                    onClick=${(m0)=>u1(m0,y)}
                                />
                            `})}
                    </div>
                `}
                ${O0.length>0&&L`
                    ${O0.map(({annotations:y},s)=>L`
                        ${y&&L`<${Z6} key=${s} annotations=${y} />`}
                    `)}
                `}
                ${y0.length>0&&L`
                    <div class="file-attachments">
                        ${y0.map((y)=>L`
                            <${MG} key=${y} mediaId=${y} onPreview=${W1} />
                        `)}
                    </div>
                `}
                ${r.length>0&&L`
                    <div class="resource-links">
                        ${r.map((y,s)=>L`
                            <div key=${s}>
                                <${xG} block=${y} />
                                <${Z6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${Y0.length>0&&L`
                    <div class="resource-embeds">
                        ${Y0.map((y,s)=>L`
                            <div key=${s}>
                                <${TG} block=${y} />
                                <${Z6} annotations=${y.annotations} />
                            </div>
                        `)}
                    </div>
                `}
                ${u.link_previews?.length>0&&L`
                    <div class="link-previews">
                        ${u.link_previews.map((y,s)=>L`
                            <${yG} key=${s} preview=${y} />
                        `)}
                    </div>
                `}
            </div>
        </div>
        ${D&&L`<${mQ} src=${D} onClose=${()=>E(null)} />`}
        ${K1&&L`
            <${bQ}
                mediaId=${K1.mediaId}
                info=${K1.info}
                onClose=${()=>d0(null)}
            />
        `}
    `}function pQ({posts:_,hasMore:$,onLoadMore:j,onPostClick:Q,onHashtagClick:Z,onMessageRef:Y,onScrollToMessage:q,onFileRef:K,onOpenWidget:N,emptyMessage:G,timelineRef:X,agents:V,user:U,onDeletePost:B,reverse:J=!0,removingPostIds:A,searchQuery:O}){let[F,D]=v(!1),E=x(null),g=typeof IntersectionObserver<"u",u=T(async()=>{if(!j||!$||F)return;D(!0);try{await j({preserveScroll:!0,preserveMode:"top"})}finally{D(!1)}},[$,F,j]),l=T((p)=>{let{scrollTop:a,scrollHeight:t,clientHeight:_0}=p.target,q0=J?t-_0-a:a,Z0=Math.max(300,_0);if(q0<Z0)u()},[J,u]);f(()=>{if(!g)return;let p=E.current,a=X?.current;if(!p||!a)return;let t=300,_0=new IntersectionObserver((q0)=>{for(let Z0 of q0){if(!Z0.isIntersecting)continue;u()}},{root:a,rootMargin:`${t}px 0px ${t}px 0px`,threshold:0});return _0.observe(p),()=>_0.disconnect()},[g,$,j,X,u]);let o=x(u);if(o.current=u,f(()=>{if(g)return;if(!X?.current)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,q0=Math.max(300,t);if(_0<q0)o.current?.()},[g,_,$,J,X]),f(()=>{if(!X?.current)return;if(!$||F)return;let{scrollTop:p,scrollHeight:a,clientHeight:t}=X.current,_0=J?a-t-p:p,q0=Math.max(300,t);if(a<=t+1||_0<q0)o.current?.()},[_,$,F,J,X]),!_)return L`<div class="loading"><div class="spinner"></div></div>`;if(_.length===0)return L`
            <div class="timeline" ref=${X}>
                <div class="timeline-content">
                    <div style="padding: var(--spacing-xl); text-align: center; color: var(--text-secondary)">
                        ${G||"No messages yet. Start a conversation!"}
                    </div>
                </div>
            </div>
        `;let P=_.slice().sort((p,a)=>p.id-a.id),I=(p)=>{let a=p?.data?.thread_id;if(a===null||a===void 0||a==="")return null;let t=Number(a);return Number.isFinite(t)?t:null},z=new Map;for(let p=0;p<P.length;p+=1){let a=P[p],t=Number(a?.id),_0=I(a);if(_0!==null){let q0=z.get(_0)||{anchorIndex:-1,replyIndexes:[]};q0.replyIndexes.push(p),z.set(_0,q0)}else if(Number.isFinite(t)){let q0=z.get(t)||{anchorIndex:-1,replyIndexes:[]};q0.anchorIndex=p,z.set(t,q0)}}let C=new Map;for(let[p,a]of z.entries()){let t=new Set;if(a.anchorIndex>=0)t.add(a.anchorIndex);for(let _0 of a.replyIndexes)t.add(_0);C.set(p,Array.from(t).sort((_0,q0)=>_0-q0))}let b=P.map((p,a)=>{let t=I(p);if(t===null)return{hasThreadPrev:!1,hasThreadNext:!1};let _0=C.get(t);if(!_0||_0.length===0)return{hasThreadPrev:!1,hasThreadNext:!1};let q0=_0.indexOf(a);if(q0<0)return{hasThreadPrev:!1,hasThreadNext:!1};return{hasThreadPrev:q0>0,hasThreadNext:q0<_0.length-1}}),e=L`<div class="timeline-sentinel" ref=${E}></div>`;return L`
        <div class="timeline ${J?"reverse":"normal"}" ref=${X} onScroll=${l}>
            <div class="timeline-content">
                ${J?e:null}
                ${P.map((p,a)=>{let t=Boolean(p.data?.thread_id&&p.data.thread_id!==p.id),_0=A?.has?.(p.id),q0=b[a]||{};return L`
                    <${hQ}
                        key=${p.id}
                        post=${p}
                        isThreadReply=${t}
                        isThreadPrev=${q0.hasThreadPrev}
                        isThreadNext=${q0.hasThreadNext}
                        isRemoving=${_0}
                        highlightQuery=${O}
                        agentName=${MQ(p.data?.agent_id,V||{})}
                        agentAvatarUrl=${IQ(p.data?.agent_id,V||{})}
                        userName=${U?.name||U?.user_name}
                        userAvatarUrl=${U?.avatar_url||U?.avatarUrl||U?.avatar}
                        userAvatarBackground=${U?.avatar_background||U?.avatarBackground}
                        onClick=${()=>Q?.(p)}
                        onHashtagClick=${Z}
                        onMessageRef=${Y}
                        onScrollToMessage=${q}
                        onFileRef=${K}
                        onOpenWidget=${N}
                        onDelete=${B}
                    />
                `})}
                ${J?null:e}
            </div>
        </div>
    `}var Y6="workspaceExplorerScale",lG=["compact","default","comfortable"],nG=new Set(lG),dG={compact:{indentPx:14},default:{indentPx:16},comfortable:{indentPx:18}};function cQ(_,$="default"){if(typeof _!=="string")return $;let j=_.trim().toLowerCase();return nG.has(j)?j:$}function J3(){if(typeof window>"u")return{width:0,isTouch:!1};let _=Number(window.innerWidth)||0,$=Boolean(window.matchMedia?.("(pointer: coarse)")?.matches),j=Boolean(window.matchMedia?.("(hover: none)")?.matches),Q=Number(globalThis.navigator?.maxTouchPoints||0)>0;return{width:_,isTouch:$||Q&&j}}function iG(_={}){let $=Math.max(0,Number(_.width)||0);if(Boolean(_.isTouch))return"comfortable";if($>0&&$<1180)return"comfortable";return"default"}function rG(_,$={}){if(Boolean($.isTouch)&&_==="compact")return"default";return _}function O3(_={}){let $=iG(_),j=_.stored?cQ(_.stored,$):$;return rG(j,_)}function lQ(_){return dG[cQ(_)]}function oG(_){if(!_||_.kind!=="text")return!1;let $=Number(_.size);return!Number.isFinite($)||$<=262144}function A3(_,$){let j=String(_||"").trim();if(!j||j.endsWith("/"))return!1;if(typeof $!=="function")return!1;let Q=$({path:j,mode:"edit"});if(!Q||typeof Q!=="object")return!1;return Q.id!=="editor"}function nQ(_,$,j={}){let Q=j.resolvePane;if(A3(_,Q))return!0;return oG($)}var sG=60000,oQ=(_)=>{if(!_||!_.name)return!1;if(_.path===".")return!1;return _.name.startsWith(".")};function aG(_){let $=String(_||"").trim();if(!$||$.endsWith("/"))return!1;return A3($,(j)=>n0.resolve(j))}function sQ(_,$,j,Q=0,Z=[]){if(!j&&oQ(_))return Z;if(!_)return Z;if(Z.push({node:_,depth:Q}),_.type==="dir"&&_.children&&$.has(_.path))for(let Y of _.children)sQ(Y,$,j,Q+1,Z);return Z}function dQ(_,$,j){if(!_)return"";let Q=[],Z=(Y)=>{if(!j&&oQ(Y))return;if(Q.push(Y.type==="dir"?`d:${Y.path}`:`f:${Y.path}`),Y.children&&$?.has(Y.path))for(let q of Y.children)Z(q)};return Z(_),Q.join("|")}function M3(_,$){if(!$)return null;if(!_)return $;if(_.path!==$.path||_.type!==$.type)return $;let j=Array.isArray(_.children)?_.children:null,Q=Array.isArray($.children)?$.children:null;if(!Q)return _;let Z=j?new Map(j.map((K)=>[K?.path,K])):new Map,Y=!j||j.length!==Q.length,q=Q.map((K)=>{let N=M3(Z.get(K.path),K);if(N!==Z.get(K.path))Y=!0;return N});return Y?{...$,children:q}:_}function E3(_,$,j){if(!_)return _;if(_.path===$)return M3(_,j);if(!Array.isArray(_.children))return _;let Q=!1,Z=_.children.map((Y)=>{let q=E3(Y,$,j);if(q!==Y)Q=!0;return q});return Q?{..._,children:Z}:_}var aQ=4,D3=14,tG=8,eG=16;function tQ(_){if(!_)return 0;if(_.type==="file"){let Q=Math.max(0,Number(_.size)||0);return _.__bytes=Q,Q}let $=Array.isArray(_.children)?_.children:[],j=0;for(let Q of $)j+=tQ(Q);return _.__bytes=j,j}function eQ(_,$=0){let j=Math.max(0,Number(_?.__bytes??_?.size??0)),Q={name:_?.name||_?.path||".",path:_?.path||".",size:j,children:[]};if(!_||_.type!=="dir"||$>=aQ)return Q;let Z=Array.isArray(_.children)?_.children:[],Y=[];for(let K of Z){let N=Math.max(0,Number(K?.__bytes??K?.size??0));if(N<=0)continue;if(K.type==="dir")Y.push({kind:"dir",node:K,size:N});else Y.push({kind:"file",name:K.name,path:K.path,size:N})}Y.sort((K,N)=>N.size-K.size);let q=Y;if(Y.length>D3){let K=Y.slice(0,D3-1),N=Y.slice(D3-1),G=N.reduce((X,V)=>X+V.size,0);K.push({kind:"other",name:`+${N.length} more`,path:`${Q.path}/[other]`,size:G}),q=K}return Q.children=q.map((K)=>{if(K.kind==="dir")return eQ(K.node,$+1);return{name:K.name,path:K.path,size:K.size,children:[]}}),Q}function iQ(){if(typeof window>"u"||typeof document>"u")return!1;let{documentElement:_,body:$}=document,j=_?.getAttribute?.("data-theme")?.toLowerCase?.()||"";if(j==="dark")return!0;if(j==="light")return!1;if(_?.classList?.contains("dark")||$?.classList?.contains("dark"))return!0;if(_?.classList?.contains("light")||$?.classList?.contains("light"))return!1;return Boolean(window.matchMedia?.("(prefers-color-scheme: dark)")?.matches)}function _Z(_,$,j){let Q=((_+Math.PI/2)*180/Math.PI+360)%360,Z=j?Math.max(30,70-$*10):Math.max(34,66-$*8),Y=j?Math.min(70,45+$*5):Math.min(60,42+$*4);return`hsl(${Q.toFixed(1)} ${Z}% ${Y}%)`}function q6(_,$,j,Q){return{x:_+j*Math.cos(Q),y:$+j*Math.sin(Q)}}function I3(_,$,j,Q,Z,Y){let q=Math.PI*2-0.0001,K=Y-Z>q?Z+q:Y,N=q6(_,$,Q,Z),G=q6(_,$,Q,K),X=q6(_,$,j,K),V=q6(_,$,j,Z),U=K-Z>Math.PI?1:0;return[`M ${N.x.toFixed(3)} ${N.y.toFixed(3)}`,`A ${Q} ${Q} 0 ${U} 1 ${G.x.toFixed(3)} ${G.y.toFixed(3)}`,`L ${X.x.toFixed(3)} ${X.y.toFixed(3)}`,`A ${j} ${j} 0 ${U} 0 ${V.x.toFixed(3)} ${V.y.toFixed(3)}`,"Z"].join(" ")}var $Z={1:[26,46],2:[48,68],3:[70,90],4:[92,112]};function jZ(_,$,j){let Q=[],Z=[],Y=Math.max(0,Number($)||0),q=(K,N,G,X)=>{let V=Array.isArray(K?.children)?K.children:[];if(!V.length)return;let U=Math.max(0,Number(K.size)||0);if(U<=0)return;let B=G-N,J=N;V.forEach((A,O)=>{let F=Math.max(0,Number(A.size)||0);if(F<=0)return;let D=F/U,E=J,g=O===V.length-1?G:J+B*D;if(J=g,g-E<0.003)return;let u=$Z[X];if(u){let l=_Z(E,X,j);if(Q.push({key:A.path,path:A.path,label:A.name,size:F,color:l,depth:X,startAngle:E,endAngle:g,innerRadius:u[0],outerRadius:u[1],d:I3(120,120,u[0],u[1],E,g)}),X===1)Z.push({key:A.path,name:A.name,size:F,pct:Y>0?F/Y*100:0,color:l})}if(X<aQ)q(A,E,g,X+1)})};return q(_,-Math.PI/2,Math.PI*3/2,1),{segments:Q,legend:Z}}function k3(_,$){if(!_||!$)return null;if(_.path===$)return _;let j=Array.isArray(_.children)?_.children:[];for(let Q of j){let Z=k3(Q,$);if(Z)return Z}return null}function QZ(_,$,j,Q){if(!j||j<=0)return{segments:[],legend:[]};let Z=$Z[1];if(!Z)return{segments:[],legend:[]};let Y=-Math.PI/2,q=Math.PI*3/2,K=_Z(Y,1,Q),G=`${$||"."}/[files]`;return{segments:[{key:G,path:G,label:_,size:j,color:K,depth:1,startAngle:Y,endAngle:q,innerRadius:Z[0],outerRadius:Z[1],d:I3(120,120,Z[0],Z[1],Y,q)}],legend:[{key:G,name:_,size:j,pct:100,color:K}]}}function rQ(_,$=!1,j=!1){if(!_)return null;let Q=tQ(_),Z=eQ(_,0),Y=Z.size||Q,{segments:q,legend:K}=jZ(Z,Y,j);if(!q.length&&Y>0){let N=QZ("[files]",Z.path,Y,j);q=N.segments,K=N.legend}return{root:Z,totalSize:Y,segments:q,legend:K,truncated:$,isDarkTheme:j}}function _X({payload:_}){if(!_)return null;let[$,j]=v(null),[Q,Z]=v(_?.root?.path||"."),[Y,q]=v(()=>[_?.root?.path||"."]),[K,N]=v(!1);f(()=>{let z=_?.root?.path||".";Z(z),q([z]),j(null)},[_?.root?.path,_?.totalSize]),f(()=>{if(!Q)return;N(!0);let z=setTimeout(()=>N(!1),180);return()=>clearTimeout(z)},[Q]);let G=u0(()=>{return k3(_.root,Q)||_.root},[_?.root,Q]),X=G?.size||_.totalSize||0,{segments:V,legend:U}=u0(()=>{let z=jZ(G,X,_.isDarkTheme);if(z.segments.length>0)return z;if(X<=0)return z;let C=G?.children?.length?"Total":"[files]";return QZ(C,G?.path||_?.root?.path||".",X,_.isDarkTheme)},[G,X,_.isDarkTheme,_?.root?.path]),[B,J]=v(V),A=x(new Map),O=x(0);f(()=>{let z=A.current,C=new Map(V.map((a)=>[a.key,a])),b=performance.now(),e=220,p=(a)=>{let t=Math.min(1,(a-b)/220),_0=t*(2-t),q0=V.map((Z0)=>{let z0=z.get(Z0.key)||{startAngle:Z0.startAngle,endAngle:Z0.startAngle,innerRadius:Z0.innerRadius,outerRadius:Z0.innerRadius},B0=(v0,l0)=>v0+(l0-v0)*_0,g0=B0(z0.startAngle,Z0.startAngle),x0=B0(z0.endAngle,Z0.endAngle),k0=B0(z0.innerRadius,Z0.innerRadius),h0=B0(z0.outerRadius,Z0.outerRadius);return{...Z0,d:I3(120,120,k0,h0,g0,x0)}});if(J(q0),t<1)O.current=requestAnimationFrame(p)};if(O.current)cancelAnimationFrame(O.current);return O.current=requestAnimationFrame(p),A.current=C,()=>{if(O.current)cancelAnimationFrame(O.current)}},[V]);let F=B.length?B:V,D=X>0?w_(X):"0 B",E=G?.name||"",u=(E&&E!=="."?E:"Total")||"Total",l=D,o=Y.length>1,P=(z)=>{if(!z?.path)return;let C=k3(_.root,z.path);if(!C||!Array.isArray(C.children)||C.children.length===0)return;q((b)=>[...b,C.path]),Z(C.path),j(null)},I=()=>{if(!o)return;q((z)=>{let C=z.slice(0,-1);return Z(C[C.length-1]||_?.root?.path||"."),C}),j(null)};return L`
        <div class="workspace-folder-starburst">
            <svg viewBox="0 0 240 240" class=${`workspace-folder-starburst-svg${K?" is-zooming":""}`} role="img"
                aria-label=${`Folder sizes for ${G?.path||_?.root?.path||"."}`}
                data-segments=${F.length}
                data-base-size=${X}>
                ${F.map((z)=>L`
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
                        onClick=${()=>P(z)}
                    >
                        <title>${z.label} — ${w_(z.size)}</title>
                    </path>
                `)}
                <g
                    class=${`workspace-folder-starburst-center-hit${o?" is-drill":""}`}
                    onClick=${I}
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
                    <text x="120" y="114" text-anchor="middle" class="workspace-folder-starburst-total-label">${u}</text>
                    <text x="120" y="130" text-anchor="middle" class="workspace-folder-starburst-total-value">${l}</text>
                </g>
            </svg>
            ${U.length>0&&L`
                <div class="workspace-folder-starburst-legend">
                    ${U.slice(0,8).map((z)=>L`
                        <div key=${z.key} class="workspace-folder-starburst-legend-item">
                            <span class="workspace-folder-starburst-swatch" style=${`background:${z.color}`}></span>
                            <span class="workspace-folder-starburst-name" title=${z.name}>${z.name}</span>
                            <span class="workspace-folder-starburst-size">${w_(z.size)}</span>
                            <span class="workspace-folder-starburst-pct">${z.pct.toFixed(1)}%</span>
                        </div>
                    `)}
                </div>
            `}
            ${_.truncated&&L`
                <div class="workspace-folder-starburst-note">Preview is truncated by tree depth/entry limits.</div>
            `}
        </div>
    `}function $X({mediaId:_}){let[$,j]=v(null);if(f(()=>{if(!_)return;L5(_).then(j).catch(()=>{})},[_]),!$)return null;let Q=$.filename||"file",Z=$.metadata?.size?w_($.metadata.size):"";return L`
        <a href=${S_(_)} download=${Q} class="file-attachment"
            onClick=${(Y)=>Y.stopPropagation()}>
            <svg class="file-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
            </svg>
            <div class="file-info">
                <span class="file-name">${Q}</span>
                ${Z&&L`<span class="file-size">${Z}</span>`}
            </div>
            <svg class="download-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
        </a>
    `}function ZZ({onFileSelect:_,visible:$=!0,active:j=void 0,onOpenEditor:Q,onOpenTerminalTab:Z,onOpenVncTab:Y,onToggleTerminal:q,terminalVisible:K=!1}){let[N,G]=v(null),[X,V]=v(new Set(["."])),[U,B]=v(null),[J,A]=v(null),[O,F]=v(""),[D,E]=v(null),[g,u]=v(null),[l,o]=v(!0),[P,I]=v(!1),[z,C]=v(null),[b,e]=v(()=>O5("workspaceShowHidden",!1)),[p,a]=v(!1),[t,_0]=v(null),[q0,Z0]=v(null),[X0,z0]=v(null),[B0,g0]=v(!1),[x0,k0]=v(null),[h0,v0]=v(()=>iQ()),[l0,r0]=v(()=>O3({stored:J_(Y6),...J3()})),[M0,o0]=v(!1),H0=x(X),C0=x(""),s0=x(null),e0=x(0),u1=x(new Set),K1=x(null),d0=x(new Map),W1=x(_),Z1=x(Q),_1=x(null),L0=x(null),f0=x(null),Q1=x(null),r=x(null),Y0=x(null),m=x("."),i=x(null),J0=x({path:null,dragging:!1,startX:0,startY:0}),I0=x({path:null,dragging:!1,startX:0,startY:0}),T0=x({path:null,timer:0}),O0=x(!1),y0=x(0),b0=x(new Map),W0=x(null),R0=x(null),A0=x(null),j0=x(null),y=x(null),s=x(null),N0=x(b),D0=x($),m0=x(j??$),$1=x(0),G1=x(X0),M1=x(p),f1=x(t),R_=x(null),j_=x({x:0,y:0}),b1=x(0),s1=x(null),l1=x(U),j1=x(J),a1=x(null),e_=x(D);W1.current=_,Z1.current=Q,f(()=>{H0.current=X},[X]),f(()=>{N0.current=b},[b]),f(()=>{D0.current=$},[$]),f(()=>{m0.current=j??$},[j,$]),f(()=>{G1.current=X0},[X0]),f(()=>{if(typeof window>"u")return;let H=()=>{r0(O3({stored:J_(Y6),...J3()}))};H();let M=()=>H(),R=()=>H(),S=($0)=>{if(!$0||$0.key===null||$0.key===Y6)H()};window.addEventListener("resize",M),window.addEventListener("focus",R),window.addEventListener("storage",S);let d=window.matchMedia?.("(pointer: coarse)"),Q0=window.matchMedia?.("(hover: none)"),V0=($0,S0)=>{if(!$0)return;if($0.addEventListener)$0.addEventListener("change",S0);else if($0.addListener)$0.addListener(S0)},U0=($0,S0)=>{if(!$0)return;if($0.removeEventListener)$0.removeEventListener("change",S0);else if($0.removeListener)$0.removeListener(S0)};return V0(d,M),V0(Q0,M),()=>{window.removeEventListener("resize",M),window.removeEventListener("focus",R),window.removeEventListener("storage",S),U0(d,M),U0(Q0,M)}},[]),f(()=>{let H=(M)=>{let R=M?.detail?.path;if(!R)return;let S=R.split("/"),d=[];for(let Q0=1;Q0<S.length;Q0++)d.push(S.slice(0,Q0).join("/"));if(d.length)V((Q0)=>{let V0=new Set(Q0);V0.add(".");for(let U0 of d)V0.add(U0);return V0});B(R),requestAnimationFrame(()=>{let Q0=document.querySelector(`[data-path="${CSS.escape(R)}"]`);if(Q0)Q0.scrollIntoView({block:"nearest",behavior:"smooth"})})};return window.addEventListener("workspace-reveal-path",H),()=>window.removeEventListener("workspace-reveal-path",H)},[]),f(()=>{M1.current=p},[p]),f(()=>{f1.current=t},[t]),f(()=>{l1.current=U},[U]),f(()=>{j1.current=J},[J]),f(()=>{e_.current=D},[D]),f(()=>{if(typeof window>"u"||typeof document>"u")return;let H=()=>v0(iQ());H();let M=window.matchMedia?.("(prefers-color-scheme: dark)"),R=()=>H();if(M?.addEventListener)M.addEventListener("change",R);else if(M?.addListener)M.addListener(R);let S=typeof MutationObserver<"u"?new MutationObserver(()=>H()):null;if(S?.observe(document.documentElement,{attributes:!0,attributeFilter:["class","data-theme"]}),document.body)S?.observe(document.body,{attributes:!0,attributeFilter:["class","data-theme"]});return()=>{if(M?.removeEventListener)M.removeEventListener("change",R);else if(M?.removeListener)M.removeListener(R);S?.disconnect()}},[]),f(()=>{if(!J)return;let H=r.current;if(!H)return;let M=requestAnimationFrame(()=>{try{H.focus(),H.select()}catch{}});return()=>cancelAnimationFrame(M)},[J]),f(()=>{if(!M0)return;let H=(R)=>{let S=R?.target;if(!(S instanceof Element))return;if(y.current?.contains(S))return;if(s.current?.contains(S))return;o0(!1)},M=(R)=>{if(R?.key==="Escape")o0(!1),s.current?.focus?.()};return document.addEventListener("mousedown",H),document.addEventListener("touchstart",H,{passive:!0}),document.addEventListener("keydown",M),()=>{document.removeEventListener("mousedown",H),document.removeEventListener("touchstart",H),document.removeEventListener("keydown",M)}},[M0]);let Q_=async(H,M={})=>{let R=Boolean(M?.autoOpen),S=String(H||"").trim();I(!0),E(null),u(null);try{let d=await b5(S,20000);if(R&&S&&nQ(S,d,{resolvePane:(Q0)=>n0.resolve(Q0)}))return Z1.current?.(S,d),d;return E(d),d}catch(d){let Q0={error:d.message||"Failed to load preview"};return E(Q0),Q0}finally{I(!1)}};_1.current=Q_;let _4=async()=>{if(!D0.current)return;try{let H=await g5("",1,N0.current),M=dQ(H.root,H0.current,N0.current);if(M===C0.current){o(!1);return}if(C0.current=M,s0.current=H.root,!e0.current)e0.current=requestAnimationFrame(()=>{e0.current=0,G((R)=>M3(R,s0.current)),o(!1)})}catch(H){C(H.message||"Failed to load workspace"),o(!1)}},c_=async(H)=>{if(!H)return;if(u1.current.has(H))return;u1.current.add(H);try{let M=await g5(H,1,N0.current);G((R)=>E3(R,H,M.root))}catch(M){C(M.message||"Failed to load workspace")}finally{u1.current.delete(H)}};L0.current=c_;let I1=T(()=>{let H=U;if(!H)return".";let M=d0.current?.get(H);if(M&&M.type==="dir")return M.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[U]),t1=T((H)=>{let M=H?.closest?.(".workspace-row");if(!M)return null;let R=M.dataset.path,S=M.dataset.type;if(!R)return null;if(S==="dir")return R;if(R.includes("/")){let d=R.split("/");return d.pop(),d.join("/")||"."}return"."},[]),x1=T((H)=>{return t1(H?.target||null)},[t1]),X1=T((H)=>{G1.current=H,z0(H)},[]),z1=T(()=>{let H=T0.current;if(H?.timer)clearTimeout(H.timer);T0.current={path:null,timer:0}},[]),W_=T((H)=>{if(!H||H==="."){z1();return}let M=d0.current?.get(H);if(!M||M.type!=="dir"){z1();return}if(H0.current?.has(H)){z1();return}if(T0.current?.path===H)return;z1();let R=setTimeout(()=>{T0.current={path:null,timer:0},L0.current?.(H),V((S)=>{let d=new Set(S);return d.add(H),d})},600);T0.current={path:H,timer:R}},[z1]),F_=T((H,M)=>{if(j_.current={x:H,y:M},b1.current)return;b1.current=requestAnimationFrame(()=>{b1.current=0;let R=R_.current;if(!R)return;let S=j_.current;R.style.transform=`translate(${S.x+12}px, ${S.y+12}px)`})},[]),C1=T((H)=>{if(!H)return;let R=(d0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R)return;Z0({path:H,label:R})},[]),e1=T(()=>{if(Z0(null),b1.current)cancelAnimationFrame(b1.current),b1.current=0;if(R_.current)R_.current.style.transform="translate(-9999px, -9999px)"},[]),N1=T((H)=>{if(!H)return".";let M=d0.current?.get(H);if(M&&M.type==="dir")return M.path;if(H==="."||!H.includes("/"))return".";let R=H.split("/");return R.pop(),R.join("/")||"."},[]),P1=T(()=>{A(null),F("")},[]),Z_=T((H)=>{if(!H)return;let R=(d0.current?.get(H)?.name||H.split("/").pop()||H).trim();if(!R||H===".")return;A(H),F(R)},[]),m1=T(async()=>{let H=j1.current;if(!H)return;let M=(O||"").trim();if(!M){P1();return}let R=d0.current?.get(H),S=(R?.name||H.split("/").pop()||H).trim();if(M===S){P1();return}try{let Q0=(await i6(H,M))?.path||H,V0=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(P1(),C(null),window.dispatchEvent(new CustomEvent("workspace-file-renamed",{detail:{oldPath:H,newPath:Q0,type:R?.type||"file"}})),R?.type==="dir")V((U0)=>{let $0=new Set;for(let S0 of U0)if(S0===H)$0.add(Q0);else if(S0.startsWith(`${H}/`))$0.add(`${Q0}${S0.slice(H.length)}`);else $0.add(S0);return $0});if(B(Q0),R?.type==="dir")E(null),I(!1),u(null);else _1.current?.(Q0);L0.current?.(V0)}catch(d){C(d?.message||"Failed to rename file")}},[P1,O]),$4=T(async(H)=>{let S=H||".";for(let d=0;d<50;d+=1){let V0=`untitled${d===0?"":`-${d}`}.md`;try{let $0=(await d6(S,V0,""))?.path||(S==="."?V0:`${S}/${V0}`);if(S&&S!==".")V((S0)=>new Set([...S0,S]));B($0),C(null),L0.current?.(S),_1.current?.($0);return}catch(U0){if(U0?.status===409||U0?.code==="file_exists")continue;C(U0?.message||"Failed to create file");return}}C("Failed to create file (untitled name already in use).")},[]),D_=T((H)=>{if(H?.stopPropagation?.(),B0)return;let M=N1(l1.current);$4(M)},[B0,N1,$4]);f(()=>{if(typeof window>"u")return;let H=(M)=>{let R=M?.detail?.updates||[];if(!Array.isArray(R)||R.length===0)return;G((U0)=>{let $0=U0;for(let S0 of R){if(!S0?.root)continue;if(!$0||S0.path==="."||!S0.path)$0=S0.root;else $0=E3($0,S0.path,S0.root)}if($0)C0.current=dQ($0,H0.current,N0.current);return o(!1),$0});let S=l1.current;if(Boolean(S)&&R.some((U0)=>{let $0=U0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)||$0.startsWith(`${S}/`)}))b0.current.clear();if(!S||!e_.current)return;let Q0=d0.current?.get(S);if(Q0&&Q0.type==="dir")return;if(R.some((U0)=>{let $0=U0?.path||"";if(!$0||$0===".")return!0;return S===$0||S.startsWith(`${$0}/`)}))_1.current?.(S)};return window.addEventListener("workspace-update",H),()=>window.removeEventListener("workspace-update",H)},[]),K1.current=_4;let j4=x(()=>{if(typeof window>"u")return;let H=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),M=m0.current??D0.current,R=document.visibilityState!=="hidden"&&(M||H.matches&&D0.current);m5(R,N0.current).catch(()=>{})}).current,E_=x(0),z4=x(()=>{if(E_.current)clearTimeout(E_.current);E_.current=setTimeout(()=>{E_.current=0,j4()},250)}).current;f(()=>{if(D0.current)K1.current?.();z4()},[$,j]),f(()=>{K1.current(),j4();let H=setInterval(()=>K1.current(),sG),M=o5("previewHeight",null),R=Number.isFinite(M)?Math.min(Math.max(M,80),600):280;if(y0.current=R,f0.current)f0.current.style.setProperty("--preview-height",`${R}px`);let S=window.matchMedia("(min-width: 1024px) and (orientation: landscape)"),d=()=>z4();if(S.addEventListener)S.addEventListener("change",d);else if(S.addListener)S.addListener(d);return document.addEventListener("visibilitychange",d),()=>{if(clearInterval(H),e0.current)cancelAnimationFrame(e0.current),e0.current=0;if(S.removeEventListener)S.removeEventListener("change",d);else if(S.removeListener)S.removeListener(d);if(document.removeEventListener("visibilitychange",d),E_.current)clearTimeout(E_.current),E_.current=0;if(i.current)clearTimeout(i.current),i.current=null;m5(!1,N0.current).catch(()=>{})}},[]);let k_=u0(()=>sQ(N,X,b),[N,X,b]),u_=u0(()=>new Map(k_.map((H)=>[H.node.path,H.node])),[k_]),f4=u0(()=>lQ(l0),[l0]);d0.current=u_;let Y1=(U?d0.current.get(U):null)?.type==="dir";f(()=>{if(!U||!Y1){k0(null),W0.current=null,R0.current=null;return}let H=U,M=`${b?"hidden":"visible"}:${U}`,R=b0.current,S=R.get(M);if(S?.root){R.delete(M),R.set(M,S);let V0=rQ(S.root,Boolean(S.truncated),h0);if(V0)W0.current=V0,R0.current=U,k0({loading:!1,error:null,payload:V0});return}let d=W0.current,Q0=R0.current;k0({loading:!0,error:null,payload:Q0===U?d:null}),g5(U,tG,b).then((V0)=>{if(l1.current!==H)return;let U0={root:V0?.root,truncated:Boolean(V0?.truncated)};R.delete(M),R.set(M,U0);while(R.size>eG){let S0=R.keys().next().value;if(!S0)break;R.delete(S0)}let $0=rQ(U0.root,U0.truncated,h0);W0.current=$0,R0.current=U,k0({loading:!1,error:null,payload:$0})}).catch((V0)=>{if(l1.current!==H)return;k0({loading:!1,error:V0?.message||"Failed to load folder size chart",payload:Q0===U?d:null})})},[U,Y1,b,h0]);let T1=Boolean(D&&D.kind==="text"&&!Y1&&(!D.size||D.size<=262144)),H4=T1?"Open in editor":D?.size>262144?"File too large to edit":"File is not editable",Y_=Boolean(U&&U!=="."),M_=Boolean(U&&!Y1),n1=Boolean(U&&!Y1),D1=U&&Y1?M8(U,b):null,v1=T(()=>o0(!1),[]),V1=T(async(H)=>{v1();try{await H?.()}catch(M){console.warn("[workspace-explorer] Header menu action failed:",M)}},[v1]);f(()=>{let H=A0.current;if(j0.current)j0.current.dispose(),j0.current=null;if(!H)return;if(H.innerHTML="",!U||Y1||!D||D.error)return;let M={path:U,content:typeof D.text==="string"?D.text:void 0,mtime:D.mtime,size:D.size,preview:D,mode:"view"},R=n0.resolve(M)||n0.get("workspace-preview-default");if(!R)return;let S=R.mount(H,M);return j0.current=S,()=>{if(j0.current===S)S.dispose(),j0.current=null;H.innerHTML=""}},[U,Y1,D]);let q_=(H)=>{let M=H?.target;if(M instanceof Element)return M;return M?.parentElement||null},K_=(H)=>{return Boolean(H?.closest?.(".workspace-node-icon, .workspace-label-text"))},N_=x((H)=>{let M=q_(H),R=M?.closest?.("[data-path]");if(!R)return;let S=R.dataset.path;if(!S||S===".")return;let d=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),Q0=Boolean(M?.closest?.(".workspace-caret"));if(d||Q0)return;if(j1.current===S)return;Z_(S)}).current,l_=x((H)=>{if(O0.current){O0.current=!1;return}let M=q_(H),R=M?.closest?.("[data-path]");if(Q1.current?.focus?.(),!R)return;let S=R.dataset.path,d=R.dataset.type,Q0=Boolean(M?.closest?.(".workspace-caret")),V0=Boolean(M?.closest?.("button"))||Boolean(M?.closest?.("a"))||Boolean(M?.closest?.("input")),U0=l1.current===S,$0=j1.current;if($0){if($0===S)return;P1()}let S0=d==="file"&&a1.current===S&&!Q0&&!V0;if(d==="dir"){if(a1.current=null,B(S),E(null),u(null),I(!1),!H0.current.has(S))L0.current?.(S);if(U0&&!Q0)return;V((__)=>{let p1=new Set(__);if(p1.has(S))p1.delete(S);else p1.add(S);return p1})}else{a1.current=null,B(S);let S1=d0.current.get(S);if(S1)W1.current?.(S1.path,S1);if(!V0&&!Q0&&aG(S))Z1.current?.(S,e_.current);else{let p1=!V0&&!Q0;_1.current?.(S,{autoOpen:p1})}}}).current,h1=x(()=>{C0.current="",K1.current(),Array.from(H0.current||[]).filter((M)=>M&&M!==".").forEach((M)=>L0.current?.(M))}).current,g1=x(()=>{a1.current=null,B(null),E(null),u(null),I(!1)}).current,G_=x(()=>{e((H)=>{let M=!H;if(typeof window<"u")q1("workspaceShowHidden",String(M));return N0.current=M,m5(!0,M).catch(()=>{}),C0.current="",K1.current?.(),Array.from(H0.current||[]).filter((S)=>S&&S!==".").forEach((S)=>L0.current?.(S)),M})}).current,f_=x((H)=>{if(q_(H)?.closest?.("[data-path]"))return;g1()}).current,H1=T(async(H)=>{if(!H)return;let M=H.split("/").pop()||H;if(!window.confirm(`Delete "${M}"? This cannot be undone.`))return;try{await o6(H);let S=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(l1.current===H)g1();L0.current?.(S),C(null)}catch(S){E((d)=>({...d||{},error:S.message||"Failed to delete file"}))}},[g1]),I_=T((H)=>{let M=Q1.current;if(!M||!H||typeof CSS>"u"||typeof CSS.escape!=="function")return;M.querySelector(`[data-path="${CSS.escape(H)}"]`)?.scrollIntoView?.({block:"nearest"})},[]),U1=T((H)=>{let M=k_;if(!M||M.length===0)return;let R=U?M.findIndex((S)=>S.node.path===U):-1;if(H.key==="ArrowDown"){H.preventDefault();let S=Math.min(R+1,M.length-1),d=M[S];if(!d)return;if(B(d.node.path),d.node.type!=="dir")W1.current?.(d.node.path,d.node),_1.current?.(d.node.path);else E(null),I(!1),u(null);I_(d.node.path);return}if(H.key==="ArrowUp"){H.preventDefault();let S=R<=0?0:R-1,d=M[S];if(!d)return;if(B(d.node.path),d.node.type!=="dir")W1.current?.(d.node.path,d.node),_1.current?.(d.node.path);else E(null),I(!1),u(null);I_(d.node.path);return}if(H.key==="ArrowRight"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&!X.has(S.node.path))H.preventDefault(),L0.current?.(S.node.path),V((d)=>new Set([...d,S.node.path]));return}if(H.key==="ArrowLeft"&&R>=0){let S=M[R];if(S?.node?.type==="dir"&&X.has(S.node.path))H.preventDefault(),V((d)=>{let Q0=new Set(d);return Q0.delete(S.node.path),Q0});return}if(H.key==="Enter"&&R>=0){H.preventDefault();let S=M[R];if(!S)return;let d=S.node.path;if(S.node.type==="dir"){if(!H0.current.has(d))L0.current?.(d);V((V0)=>{let U0=new Set(V0);if(U0.has(d))U0.delete(d);else U0.add(d);return U0}),E(null),u(null),I(!1)}else W1.current?.(d,S.node),_1.current?.(d);return}if((H.key==="Delete"||H.key==="Backspace")&&R>=0){let S=M[R];if(!S||S.node.type==="dir")return;H.preventDefault(),H1(S.node.path);return}if(H.key==="Escape")H.preventDefault(),g1()},[g1,H1,X,k_,I_,U]),v_=T((H)=>{let M=q_(H),R=M?.closest?.(".workspace-row");if(!R)return;let S=R.dataset.type,d=R.dataset.path;if(!d||d===".")return;if(j1.current===d)return;let Q0=H?.touches?.[0];if(!Q0)return;if(J0.current={path:K_(M)?d:null,dragging:!1,startX:Q0.clientX,startY:Q0.clientY},S!=="file")return;if(i.current)clearTimeout(i.current);i.current=setTimeout(()=>{if(i.current=null,J0.current?.dragging)return;H1(d)},600)},[H1]),x_=T(()=>{if(i.current)clearTimeout(i.current),i.current=null;let H=J0.current;if(H?.dragging&&H.path){let M=G1.current||I1(),R=s1.current;if(typeof R==="function")R(H.path,M)}J0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,a(!1),_0(null),X1(null),z1(),e1()},[I1,e1,X1,z1]),g4=T((H)=>{let M=J0.current,R=H?.touches?.[0];if(!R||!M?.path){if(i.current)clearTimeout(i.current),i.current=null;return}let S=Math.abs(R.clientX-M.startX),d=Math.abs(R.clientY-M.startY),Q0=S>8||d>8;if(Q0&&i.current)clearTimeout(i.current),i.current=null;if(!M.dragging&&Q0)M.dragging=!0,a(!0),_0("move"),C1(M.path);if(M.dragging){H.preventDefault(),F_(R.clientX,R.clientY);let V0=document.elementFromPoint(R.clientX,R.clientY),U0=t1(V0)||I1();if(G1.current!==U0)X1(U0);W_(U0)}},[t1,I1,C1,F_,X1,W_]),b4=x((H)=>{H.preventDefault();let M=f0.current;if(!M)return;let R=H.clientY,S=y0.current||280,d=H.currentTarget;d.classList.add("dragging"),document.body.style.cursor="row-resize",document.body.style.userSelect="none";let Q0=R,V0=($0)=>{Q0=$0.clientY;let S0=M.clientHeight-80,S1=Math.min(Math.max(S-($0.clientY-R),80),S0);M.style.setProperty("--preview-height",`${S1}px`),y0.current=S1},U0=()=>{let $0=M.clientHeight-80,S0=Math.min(Math.max(S-(Q0-R),80),$0);y0.current=S0,d.classList.remove("dragging"),document.body.style.cursor="",document.body.style.userSelect="",q1("previewHeight",String(Math.round(S0))),document.removeEventListener("mousemove",V0),document.removeEventListener("mouseup",U0)};document.addEventListener("mousemove",V0),document.addEventListener("mouseup",U0)}).current,g_=x((H)=>{H.preventDefault();let M=f0.current;if(!M)return;let R=H.touches[0];if(!R)return;let S=R.clientY,d=y0.current||280,Q0=H.currentTarget;Q0.classList.add("dragging"),document.body.style.userSelect="none";let V0=($0)=>{let S0=$0.touches[0];if(!S0)return;$0.preventDefault();let S1=M.clientHeight-80,__=Math.min(Math.max(d-(S0.clientY-S),80),S1);M.style.setProperty("--preview-height",`${__}px`),y0.current=__},U0=()=>{Q0.classList.remove("dragging"),document.body.style.userSelect="",q1("previewHeight",String(Math.round(y0.current||d))),document.removeEventListener("touchmove",V0),document.removeEventListener("touchend",U0),document.removeEventListener("touchcancel",U0)};document.addEventListener("touchmove",V0,{passive:!1}),document.addEventListener("touchend",U0),document.addEventListener("touchcancel",U0)}).current,b_=async()=>{if(!U)return;try{let H=await n6(U);if(H.media_id)u(H.media_id)}catch(H){E((M)=>({...M||{},error:H.message||"Failed to attach"}))}},m4=async()=>{if(!U||Y1)return;await H1(U)},Q4=(H)=>{return Array.from(H?.dataTransfer?.types||[]).includes("Files")},e4=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),$1.current+=1,!M1.current)a(!0);_0("upload");let M=x1(H)||I1();X1(M),W_(M)},[I1,x1,X1,W_]),Z4=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),H.dataTransfer)H.dataTransfer.dropEffect="copy";if(!M1.current)a(!0);if(f1.current!=="upload")_0("upload");let M=x1(H)||I1();if(G1.current!==M)X1(M);W_(M)},[I1,x1,X1,W_]),n_=T((H)=>{if(!Q4(H))return;if(H.preventDefault(),$1.current=Math.max(0,$1.current-1),$1.current===0)a(!1),_0(null),X1(null),z1()},[X1,z1]),d1=T(async(H,M=".")=>{let R=Array.from(H||[]);if(R.length===0)return;let S=M&&M!==""?M:".",d=S!=="."?S:"workspace root";g0(!0);try{let Q0=null;for(let V0 of R)try{Q0=await E8(V0,S)}catch(U0){let $0=U0?.status,S0=U0?.code;if($0===409||S0==="file_exists"){let S1=V0?.name||"file";if(!window.confirm(`"${S1}" already exists in ${d}. Overwrite?`))continue;Q0=await E8(V0,S,{overwrite:!0})}else throw U0}if(Q0?.path)a1.current=Q0.path,B(Q0.path),_1.current?.(Q0.path);L0.current?.(S)}catch(Q0){C(Q0.message||"Failed to upload file")}finally{g0(!1)}},[]),J4=T(async(H,M)=>{if(!H)return;let R=d0.current?.get(H);if(!R)return;let S=M&&M!==""?M:".",d=H.includes("/")?H.split("/").slice(0,-1).join("/")||".":".";if(S===d)return;try{let V0=(await r6(H,S))?.path||H;if(R.type==="dir")V((U0)=>{let $0=new Set;for(let S0 of U0)if(S0===H)$0.add(V0);else if(S0.startsWith(`${H}/`))$0.add(`${V0}${S0.slice(H.length)}`);else $0.add(S0);return $0});if(B(V0),R.type==="dir")E(null),I(!1),u(null);else _1.current?.(V0);L0.current?.(d),L0.current?.(S)}catch(Q0){C(Q0?.message||"Failed to move entry")}},[]);s1.current=J4;let O4=T(async(H)=>{if(!Q4(H))return;H.preventDefault(),$1.current=0,a(!1),_0(null),z0(null),z1();let M=Array.from(H?.dataTransfer?.files||[]);if(M.length===0)return;let R=G1.current||x1(H)||I1();await d1(M,R)},[I1,x1,d1]),T5=T((H)=>{if(H?.stopPropagation?.(),B0)return;let M=H?.currentTarget?.dataset?.uploadTarget||".";m.current=M,Y0.current?.click()},[B0]),E1=T(()=>{if(B0)return;let H=l1.current,M=H?d0.current?.get(H):null;m.current=M?.type==="dir"?M.path:".",Y0.current?.click()},[B0]),A4=T(()=>{V1(()=>D_(null))},[V1,D_]),_5=T(()=>{V1(()=>E1())},[V1,E1]),X_=T(()=>{V1(()=>h1())},[V1,h1]),V_=T(()=>{V1(()=>G_())},[V1,G_]),Y4=T(()=>{if(!U||!T1)return;V1(()=>Z1.current?.(U,D))},[V1,U,T1,D]),h4=T(()=>{if(!U||U===".")return;V1(()=>Z_(U))},[V1,U,Z_]),p4=T(()=>{if(!U||Y1)return;V1(()=>m4())},[V1,U,Y1,m4]),$5=T(()=>{if(!U||Y1)return;V1(()=>b_())},[V1,U,Y1,b_]),q4=T(()=>{if(!D1)return;if(v1(),typeof window<"u")window.open(D1,"_blank","noopener")},[v1,D1]),T_=T(()=>{v1(),Z?.()},[v1,Z]),z_=T(()=>{v1(),Y?.()},[v1,Y]),D4=T(()=>{v1(),q?.()},[v1,q]),c4=T((H)=>{if(!H||H.button!==0)return;let M=H.currentTarget;if(!M||!M.dataset)return;let R=M.dataset.path;if(!R||R===".")return;if(j1.current===R)return;let S=q_(H);if(S?.closest?.("button, a, input, .workspace-caret"))return;if(!K_(S))return;H.preventDefault(),I0.current={path:R,dragging:!1,startX:H.clientX,startY:H.clientY};let d=(V0)=>{let U0=I0.current;if(!U0?.path)return;let $0=Math.abs(V0.clientX-U0.startX),S0=Math.abs(V0.clientY-U0.startY),S1=$0>4||S0>4;if(!U0.dragging&&S1)U0.dragging=!0,O0.current=!0,a(!0),_0("move"),C1(U0.path),F_(V0.clientX,V0.clientY),document.body.style.userSelect="none",document.body.style.cursor="grabbing";if(U0.dragging){V0.preventDefault(),F_(V0.clientX,V0.clientY);let __=document.elementFromPoint(V0.clientX,V0.clientY),p1=t1(__)||I1();if(G1.current!==p1)X1(p1);W_(p1)}},Q0=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",Q0);let V0=I0.current;if(V0?.dragging&&V0.path){let U0=G1.current||I1(),$0=s1.current;if(typeof $0==="function")$0(V0.path,U0)}I0.current={path:null,dragging:!1,startX:0,startY:0},$1.current=0,a(!1),_0(null),X1(null),z1(),e1(),document.body.style.userSelect="",document.body.style.cursor="",setTimeout(()=>{O0.current=!1},0)};document.addEventListener("mousemove",d),document.addEventListener("mouseup",Q0)},[t1,I1,C1,F_,e1,X1,W_,z1]),C_=T(async(H)=>{let M=Array.from(H?.target?.files||[]);if(M.length===0)return;let R=m.current||".";if(await d1(M,R),m.current=".",H?.target)H.target.value=""},[d1]);return L`
        <aside
            class=${`workspace-sidebar${p?" workspace-drop-active":""}`}
            data-workspace-scale=${l0}
            ref=${f0}
            onDragEnter=${e4}
            onDragOver=${Z4}
            onDragLeave=${n_}
            onDrop=${O4}
        >
            <input type="file" multiple style="display:none" ref=${Y0} onChange=${C_} />
            <div class="workspace-header">
                <div class="workspace-header-left">
                    <div class="workspace-menu-wrap">
                        <button
                            ref=${s}
                            class=${`workspace-menu-button${M0?" active":""}`}
                            onClick=${(H)=>{H.stopPropagation(),o0((M)=>!M)}}
                            title="Workspace actions"
                            aria-label="Workspace actions"
                            aria-haspopup="menu"
                            aria-expanded=${M0?"true":"false"}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                <line x1="4" y1="7" x2="20" y2="7" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="17" x2="20" y2="17" />
                            </svg>
                        </button>
                        ${M0&&L`
                            <div class="workspace-menu-dropdown" ref=${y} role="menu" aria-label="Workspace options">
                                <button class="workspace-menu-item" role="menuitem" onClick=${A4} disabled=${B0}>New file</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${_5} disabled=${B0}>Upload files</button>
                                <button class="workspace-menu-item" role="menuitem" onClick=${X_}>Refresh tree</button>
                                <button class=${`workspace-menu-item${b?" active":""}`} role="menuitem" onClick=${V_}>
                                    ${b?"Hide hidden files":"Show hidden files"}
                                </button>

                                ${U&&L`<div class="workspace-menu-separator"></div>`}
                                ${U&&!Y1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${Y4} disabled=${!T1}>Open in editor</button>
                                `}
                                ${Y_&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${h4}>Rename selected</button>
                                `}
                                ${n1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${$5}>Download selected file</button>
                                `}
                                ${D1&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${q4}>Download selected folder (zip)</button>
                                `}
                                ${M_&&L`
                                    <button class="workspace-menu-item danger" role="menuitem" onClick=${p4}>Delete selected file</button>
                                `}

                                ${(Z||Y||q)&&L`<div class="workspace-menu-separator"></div>`}
                                ${Z&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${T_}>
                                        Open terminal in tab
                                    </button>
                                `}
                                ${Y&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${z_}>
                                        Open VNC in tab
                                    </button>
                                `}
                                ${q&&L`
                                    <button class="workspace-menu-item" role="menuitem" onClick=${D4}>
                                        ${K?"Hide terminal dock":"Show terminal dock"}
                                    </button>
                                `}
                            </div>
                        `}
                    </div>
                    <span>Workspace</span>
                </div>
                <div class="workspace-header-actions">
                    <button class="workspace-create" onClick=${D_} title="New file" disabled=${B0}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>
                    </button>
                    <button class="workspace-refresh" onClick=${h1} title="Refresh">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="8.5" stroke-dasharray="42 12" stroke-dashoffset="6"
                                transform="rotate(75 12 12)" />
                            <polyline points="21 3 21 9 15 9" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="workspace-tree" onClick=${f_}>
                ${B0&&L`<div class="workspace-drop-hint">Uploading…</div>`}
                ${l&&L`<div class="workspace-loading">Loading…</div>`}
                ${z&&L`<div class="workspace-error">${z}</div>`}
                ${N&&L`
                    <div
                        class="workspace-tree-list"
                        ref=${Q1}
                        tabIndex="0"
                        onClick=${l_}
                        onDblClick=${N_}
                        onKeyDown=${U1}
                        onTouchStart=${v_}
                        onTouchEnd=${x_}
                        onTouchMove=${g4}
                        onTouchCancel=${x_}
                    >
                        ${k_.map(({node:H,depth:M})=>{let R=H.type==="dir",S=H.path===U,d=H.path===J,Q0=R&&X.has(H.path),V0=X0&&H.path===X0,U0=Array.isArray(H.children)&&H.children.length>0?H.children.length:Number(H.child_count)||0;return L`
                                <div
                                    key=${H.path}
                                    class=${`workspace-row${S?" selected":""}${V0?" drop-target":""}`}
                                    style=${{paddingLeft:`${8+M*f4.indentPx}px`}}
                                    data-path=${H.path}
                                    data-type=${H.type}
                                    onMouseDown=${c4}
                                >
                                    <span class="workspace-caret" aria-hidden="true">
                                        ${R?Q0?L`<svg viewBox="0 0 12 12"><polygon points="1,2 11,2 6,11"/></svg>`:L`<svg viewBox="0 0 12 12"><polygon points="2,1 11,6 2,11"/></svg>`:null}
                                    </span>
                                    <svg class=${`workspace-node-icon${R?" folder":""}`}
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                        aria-hidden="true">
                                        ${R?L`<path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>`:L`<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>`}
                                    </svg>
                                    ${d?L`
                                            <input
                                                class="workspace-rename-input"
                                                ref=${r}
                                                value=${O}
                                                onInput=${($0)=>F($0?.target?.value||"")}
                                                onKeyDown=${($0)=>{if($0.key==="Enter")$0.preventDefault(),m1();else if($0.key==="Escape")$0.preventDefault(),P1()}}
                                                onBlur=${P1}
                                                onClick=${($0)=>$0.stopPropagation()}
                                            />
                                        `:L`<span class="workspace-label"><span class="workspace-label-text">${H.name}</span></span>`}
                                    ${R&&!Q0&&U0>0&&L`
                                        <span class="workspace-count">${U0}</span>
                                    `}
                                    ${R&&L`
                                        <button
                                            class="workspace-folder-upload"
                                            data-upload-target=${H.path}
                                            title="Upload files to this folder"
                                            onClick=${T5}
                                            disabled=${B0}
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
            ${U&&L`
                <div class="workspace-preview-splitter-h" onMouseDown=${b4} onTouchStart=${g_}></div>
                <div class="workspace-preview">
                    <div class="workspace-preview-header">
                        <span class="workspace-preview-title">${U}</span>
                        <div class="workspace-preview-actions">
                            <button class="workspace-create" onClick=${D_} title="New file" disabled=${B0}>
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                </svg>
                            </button>
                            ${!Y1&&L`
                                <button
                                    class="workspace-download workspace-edit"
                                    onClick=${()=>T1&&Z1.current?.(U,D)}
                                    title=${H4}
                                    disabled=${!T1}
                                >
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M12 20h9" />
                                        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z" />
                                    </svg>
                                </button>
                                <button
                                    class="workspace-download workspace-delete"
                                    onClick=${m4}
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
                            ${Y1?L`
                                    <button class="workspace-download" onClick=${E1}
                                        title="Upload files to this folder" disabled=${B0}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 8 12 3 17 8"/>
                                            <line x1="12" y1="3" x2="12" y2="15"/>
                                        </svg>
                                    </button>
                                    <a class="workspace-download" href=${M8(U,b)}
                                        title="Download folder as zip" onClick=${(H)=>H.stopPropagation()}>
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                            <polyline points="7 10 12 15 17 10"/>
                                            <line x1="12" y1="15" x2="12" y2="3"/>
                                        </svg>
                                    </a>`:L`<button class="workspace-download" onClick=${b_} title="Download">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                        stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                                        <polyline points="7 10 12 15 17 10"/>
                                        <line x1="12" y1="15" x2="12" y2="3"/>
                                    </svg>
                                </button>`}
                        </div>
                    </div>
                    ${P&&L`<div class="workspace-loading">Loading preview…</div>`}
                    ${D?.error&&L`<div class="workspace-error">${D.error}</div>`}
                    ${Y1&&L`
                        <div class="workspace-preview-text">Folder selected — create file, upload files, or download as zip.</div>
                        ${x0?.loading&&L`<div class="workspace-loading">Loading folder size preview…</div>`}
                        ${x0?.error&&L`<div class="workspace-error">${x0.error}</div>`}
                        ${x0?.payload&&x0.payload.segments?.length>0&&L`
                            <${_X} payload=${x0.payload} />
                        `}
                        ${x0?.payload&&(!x0.payload.segments||x0.payload.segments.length===0)&&L`
                            <div class="workspace-preview-text">No file size data available for this folder yet.</div>
                        `}
                    `}
                    ${D&&!D.error&&!Y1&&L`
                        <div class="workspace-preview-body" ref=${A0}></div>
                    `}
                    ${g&&L`
                        <div class="workspace-download-card">
                            <${$X} mediaId=${g} />
                        </div>
                    `}
                </div>
            `}
            ${q0&&L`
                <div class="workspace-drag-ghost" ref=${R_}>${q0.label}</div>
            `}
        </aside>
    `}var jX=new Set(["kanban-editor","mindmap-editor"]);function QX(_,$,j){let Q=String(_||"").trim();if(!Q)return null;if($)return $;if(typeof j!=="function")return null;return j({path:Q,mode:"edit"})?.id||null}function YZ(_,$,j){let Q=QX(_,$,j);return Q!=null&&jX.has(Q)}var ZX=/\.(docx?|xlsx?|pptx?|odt|ods|odp|rtf)$/i,YX=/\.(csv|tsv)$/i,qX=/\.pdf$/i,KX=/\.(png|jpe?g|gif|webp|bmp|ico|svg)$/i,qZ=/\.drawio(\.xml|\.svg|\.png)?$/i;function KZ({tabs:_,activeId:$,onActivate:j,onClose:Q,onCloseOthers:Z,onCloseAll:Y,onTogglePin:q,onTogglePreview:K,onEditSource:N,previewTabs:G,paneOverrides:X,onToggleDock:V,dockVisible:U,onToggleZen:B,zenMode:J,onPopOutTab:A}){let[O,F]=v(null),D=x(null);f(()=>{if(!O)return;let z=(C)=>{if(C.type==="keydown"&&C.key!=="Escape")return;F(null)};return document.addEventListener("click",z),document.addEventListener("keydown",z),()=>{document.removeEventListener("click",z),document.removeEventListener("keydown",z)}},[O]),f(()=>{let z=(C)=>{if(C.ctrlKey&&C.key==="Tab"){if(C.preventDefault(),!_.length)return;let b=_.findIndex((e)=>e.id===$);if(C.shiftKey){let e=_[(b-1+_.length)%_.length];j?.(e.id)}else{let e=_[(b+1)%_.length];j?.(e.id)}return}if((C.ctrlKey||C.metaKey)&&C.key==="w"){let b=document.querySelector(".editor-pane");if(b&&b.contains(document.activeElement)){if(C.preventDefault(),$)Q?.($)}}};return document.addEventListener("keydown",z),()=>document.removeEventListener("keydown",z)},[_,$,j,Q]);let E=T((z,C)=>{if(z.button===1){z.preventDefault(),Q?.(C);return}if(z.button===0)j?.(C)},[j,Q]),g=T((z,C)=>{z.preventDefault(),F({id:C,x:z.clientX,y:z.clientY})},[]),u=T((z)=>{z.preventDefault(),z.stopPropagation()},[]),l=T((z,C)=>{z.preventDefault(),z.stopPropagation(),Q?.(C)},[Q]);f(()=>{if(!$||!D.current)return;let z=D.current.querySelector(".tab-item.active");if(z)z.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},[$]);let o=T((z)=>{if(!(X instanceof Map))return null;return X.get(z)||null},[X]),P=u0(()=>_.find((z)=>z.id===O?.id)||null,[O?.id,_]),I=u0(()=>{let z=O?.id;if(!z)return!1;return YZ(z,o(z),(C)=>n0.resolve(C))},[O?.id,o]);if(!_.length)return null;return L`
        <div class="tab-strip" ref=${D} role="tablist">
            ${_.map((z)=>L`
                <div
                    key=${z.id}
                    class=${`tab-item${z.id===$?" active":""}${z.dirty?" dirty":""}${z.pinned?" pinned":""}`}
                    role="tab"
                    aria-selected=${z.id===$}
                    title=${z.path}
                    onMouseDown=${(C)=>E(C,z.id)}
                    onContextMenu=${(C)=>g(C,z.id)}
                >
                    ${z.pinned&&L`
                        <span class="tab-pin-icon" aria-label="Pinned">
                            <svg viewBox="0 0 16 16" width="10" height="10" fill="currentColor">
                                <path d="M4.456.734a1.75 1.75 0 0 1 2.826.504l.613 1.327a3.1 3.1 0 0 0 2.084 1.707l2.454.584c1.332.317 1.8 1.972.832 2.94L11.06 10l3.72 3.72a.75.75 0 1 1-1.06 1.06L10 11.06l-2.204 2.205c-.968.968-2.623.5-2.94-.832l-.584-2.454a3.1 3.1 0 0 0-1.707-2.084l-1.327-.613a1.75 1.75 0 0 1-.504-2.826z"/>
                            </svg>
                        </span>
                    `}
                    <span class="tab-label">${z.label}</span>
                    <button
                        type="button"
                        class="tab-close"
                        onMouseDown=${u}
                        onClick=${(C)=>l(C,z.id)}
                        title=${z.dirty?"Unsaved changes":"Close"}
                        aria-label=${z.dirty?"Unsaved changes":`Close ${z.label}`}
                    >
                        ${z.dirty?L`<span class="tab-dirty-dot" aria-hidden="true"></span>`:L`<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true" focusable="false" style=${{pointerEvents:"none"}}>
                                <line x1="4" y1="4" x2="12" y2="12" style=${{pointerEvents:"none"}}/>
                                <line x1="12" y1="4" x2="4" y2="12" style=${{pointerEvents:"none"}}/>
                            </svg>`}
                    </button>
                </div>
            `)}
            ${V&&L`
                <div class="tab-strip-spacer"></div>
                <button
                    class=${`tab-strip-dock-toggle${U?" active":""}`}
                    onClick=${V}
                    title=${`${U?"Hide":"Show"} terminal (Ctrl+\`)`}
                    aria-label=${`${U?"Hide":"Show"} terminal`}
                    aria-pressed=${U?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <rect x="1.75" y="2.25" width="12.5" height="11.5" rx="2"/>
                        <polyline points="4.5 5.25 7 7.75 4.5 10.25"/>
                        <line x1="8.5" y1="10.25" x2="11.5" y2="10.25"/>
                    </svg>
                </button>
            `}
            ${B&&L`
                <button
                    class=${`tab-strip-zen-toggle${J?" active":""}`}
                    onClick=${B}
                    title=${`${J?"Exit":"Enter"} zen mode (Ctrl+Shift+Z)`}
                    aria-label=${`${J?"Exit":"Enter"} zen mode`}
                    aria-pressed=${J?"true":"false"}
                >
                    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        ${J?L`<polyline points="4 8 1.5 8 1.5 1.5 14.5 1.5 14.5 8 12 8"/><polyline points="4 8 1.5 8 1.5 14.5 14.5 14.5 14.5 8 12 8"/>`:L`<polyline points="5.5 1.5 1.5 1.5 1.5 5.5"/><polyline points="10.5 1.5 14.5 1.5 14.5 5.5"/><polyline points="5.5 14.5 1.5 14.5 1.5 10.5"/><polyline points="10.5 14.5 14.5 14.5 14.5 10.5"/>`}
                    </svg>
                </button>
            `}
        </div>
        ${O&&L`
            <div class="tab-context-menu" style=${{left:O.x+"px",top:O.y+"px"}}>
                <button onClick=${()=>{Q?.(O.id),F(null)}}>Close</button>
                <button onClick=${()=>{Z?.(O.id),F(null)}}>Close Others</button>
                <button onClick=${()=>{Y?.(),F(null)}}>Close All</button>
                <hr />
                <button onClick=${()=>{q?.(O.id),F(null)}}>
                    ${P?.pinned?"Unpin":"Pin"}
                </button>
                ${I&&N&&L`
                    <button onClick=${()=>{N(O.id),F(null)}}>Edit Source</button>
                `}
                ${A&&L`
                    <button onClick=${()=>{let z=_.find((C)=>C.id===O.id);A(O.id,z?.label),F(null)}}>Open in Window</button>
                `}
                ${K&&/\.(md|mdx|markdown)$/i.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{K(O.id),F(null)}}>
                        ${G?.has(O.id)?"Hide Preview":"Preview"}
                    </button>
                `}
                ${ZX.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id),C=O.id.split("/").pop()||"document",b="/office-viewer/?url="+encodeURIComponent(z)+"&name="+encodeURIComponent(C);window.open(b,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${YX.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{let z="/csv-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${qX.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{let z="/workspace/raw?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${KX.test(O.id)&&!qZ.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{let z="/image-viewer/?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
                ${qZ.test(O.id)&&L`
                    <hr />
                    <button onClick=${()=>{let z="/drawio/edit?path="+encodeURIComponent(O.id);window.open(z,"_blank","noopener"),F(null)}}>Open in New Tab</button>
                `}
            </div>
        `}
    `}function NX(_){let{workspaceOpen:$,editorOpen:j,chatOnlyMode:Q,zenMode:Z}=_;return`app-shell${$?"":" workspace-collapsed"}${j?" editor-open":""}${Q?" chat-only":""}${Z?" zen-mode":""}`}function NZ(_){let{appShellRef:$,workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y,isRenameBranchFormOpen:q,closeRenameCurrentBranchForm:K,handleRenameCurrentBranch:N,renameBranchNameDraft:G,renameBranchNameInputRef:X,setRenameBranchNameDraft:V,renameBranchDraftState:U,isRenamingBranch:B,addFileRef:J,openEditor:A,openTerminalTab:O,openVncTab:F,hasDockPanes:D,toggleDock:E,dockVisible:g,handleSplitterMouseDown:u,handleSplitterTouchStart:l,showEditorPaneContainer:o,tabStripTabs:P,tabStripActiveId:I,handleTabActivate:z,handleTabClose:C,handleTabCloseOthers:b,handleTabCloseAll:e,handleTabTogglePin:p,handleTabTogglePreview:a,handleTabEditSource:t,previewTabs:_0,tabPaneOverrides:q0,toggleZenMode:Z0,handlePopOutPane:X0,isWebAppMode:z0,editorContainerRef:B0,editorInstanceRef:g0,handleDockSplitterMouseDown:x0,handleDockSplitterTouchStart:k0,TERMINAL_TAB_PATH:h0,dockContainerRef:v0,handleEditorSplitterMouseDown:l0,handleEditorSplitterTouchStart:r0,searchQuery:M0,isIOSDevice:o0,currentBranchRecord:H0,currentChatJid:C0,currentChatBranches:s0,handleBranchPickerChange:e0,formatBranchPickerLabel:u1,openRenameCurrentBranchForm:K1,handlePruneCurrentBranch:d0,currentHashtag:W1,handleBackToTimeline:Z1,activeSearchScopeLabel:_1,posts:L0,isMainTimelineView:f0,hasMore:Q1,loadMore:r,timelineRef:Y0,handleHashtagClick:m,addMessageRef:i,scrollToMessage:J0,openFileFromPill:I0,handleDeletePost:T0,handleOpenFloatingWidget:O0,agents:y0,userProfile:b0,removingPostIds:W0,agentStatus:R0,isCompactionStatus:A0,agentDraft:j0,agentPlan:y,agentThought:s,pendingRequest:N0,intentToast:D0,currentTurnId:m0,steerQueued:$1,handlePanelToggle:G1,btwSession:M1,closeBtwPanel:f1,handleBtwRetry:R_,handleBtwInject:j_,floatingWidget:b1,handleCloseFloatingWidget:s1,handleFloatingWidgetEvent:l1,extensionStatusPanels:j1,pendingExtensionPanelActions:a1,handleExtensionPanelAction:e_,searchOpen:Q_,followupQueueItems:_4,handleInjectQueuedFollowup:c_,handleRemoveQueuedFollowup:I1,viewStateRef:t1,loadPosts:x1,scrollToBottom:X1,searchScope:z1,handleSearch:W_,setSearchScope:F_,enterSearchMode:C1,exitSearchMode:e1,fileRefs:N1,removeFileRef:P1,clearFileRefs:Z_,setFileRefsFromCompose:m1,messageRefs:$4,removeMessageRef:D_,clearMessageRefs:j4,setMessageRefsFromCompose:E_,handleCreateSessionFromCompose:z4,handleRestoreBranch:k_,attachActiveEditorFile:u_,followupQueueCount:f4,handleBtwIntercept:v4,handleMessageResponse:Y1,handleComposeSubmitError:T1,handlePopOutChat:H4,isComposeBoxAgentActive:Y_,activeChatAgents:M_,connectionStatus:n1,activeModel:D1,activeModelUsage:v1,activeThinkingLevel:V1,supportsThinking:q_,contextUsage:K_,notificationsEnabled:N_,notificationPermission:l_,handleToggleNotifications:h1,setActiveModel:g1,applyModelState:G_,setPendingRequest:f_,pendingRequestRef:H1,toggleWorkspace:I_}=_;return L`
    <div class=${NX({workspaceOpen:j,editorOpen:Q,chatOnlyMode:Z,zenMode:Y})} ref=${$}>
      ${q&&L`
        <div class="rename-branch-overlay" onPointerDown=${(U1)=>{if(U1.target===U1.currentTarget)K()}}>
          <form
            class="rename-branch-panel"
            onSubmit=${(U1)=>{U1.preventDefault(),N(G)}}
          >
            <div class="rename-branch-title">Rename branch handle</div>
            <input
              ref=${X}
              value=${G}
              onInput=${(U1)=>{let v_=U1.currentTarget?.value??"";V(String(v_))}}
              onKeyDown=${(U1)=>{if(U1.key==="Escape")U1.preventDefault(),K()}}
              autocomplete="off"
              placeholder="Handle (letters, numbers, - and _ only)"
            />
            <div class=${`rename-branch-help ${U.kind||"info"}`}>
              ${U.message}
            </div>
            <div class="rename-branch-actions">
              <button type="submit" class="compose-model-popup-btn primary" disabled=${B||!U.canSubmit}>
                ${B?"Renaming…":"Save"}
              </button>
              <button
                type="button"
                class="compose-model-popup-btn"
                onClick=${K}
                disabled=${B}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      `}
      ${!Z&&L`
        <${ZZ}
          onFileSelect=${J}
          visible=${j}
          active=${j||Q}
          onOpenEditor=${A}
          onOpenTerminalTab=${O}
          onOpenVncTab=${F}
          onToggleTerminal=${D?E:void 0}
          terminalVisible=${Boolean(D&&g)}
        />
        <button
          class=${`workspace-toggle-tab${j?" open":" closed"}`}
          onClick=${I_}
          title=${j?"Hide workspace":"Show workspace"}
          aria-label=${j?"Hide workspace":"Show workspace"}
        >
          <svg class="workspace-toggle-tab-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <polyline points="6 3 11 8 6 13" />
          </svg>
        </button>
        <div class="workspace-splitter" onMouseDown=${u} onTouchStart=${l}></div>
      `}
      ${o&&L`
        <div class="editor-pane-container">
          ${Y&&L`<div class="zen-hover-zone"></div>`}
          ${Q&&L`
            <${KZ}
              tabs=${P}
              activeId=${I}
              onActivate=${z}
              onClose=${C}
              onCloseOthers=${b}
              onCloseAll=${e}
              onTogglePin=${p}
              onTogglePreview=${a}
              onEditSource=${t}
              previewTabs=${_0}
              paneOverrides=${q0}
              onToggleDock=${D?E:void 0}
              dockVisible=${D&&g}
              onToggleZen=${Z0}
              zenMode=${Y}
              onPopOutTab=${z0?void 0:X0}
            />
          `}
          ${Q&&L`<div class="editor-pane-host" ref=${B0}></div>`}
          ${Q&&I&&_0.has(I)&&L`
            <${e8}
              getContent=${()=>g0.current?.getContent?.()}
              path=${I}
              onClose=${()=>a(I)}
            />
          `}
          ${D&&g&&L`<div class="dock-splitter" onMouseDown=${x0} onTouchStart=${k0}></div>`}
          ${D&&L`<div class=${`dock-panel${g?"":" hidden"}`}>
            <div class="dock-panel-header">
              <span class="dock-panel-title">Terminal</span>
              <div class="dock-panel-actions">
                ${!z0&&L`
                  <button class="dock-panel-action" onClick=${()=>X0(h0,"Terminal")} title="Open terminal in window" aria-label="Open terminal in window">
                    <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2.25" y="2.25" width="8.5" height="8.5" rx="1.5"/>
                      <path d="M8.5 2.25h5.25v5.25"/>
                      <path d="M13.75 2.25 7.75 8.25"/>
                    </svg>
                  </button>
                `}
                <button class="dock-panel-close" onClick=${E} title="Hide terminal (Ctrl+\`)" aria-label="Hide terminal">
                  <svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round">
                    <line x1="4" y1="4" x2="12" y2="12"/>
                    <line x1="12" y1="4" x2="4" y2="12"/>
                  </svg>
                </button>
              </div>
            </div>
            <div class="dock-panel-body" ref=${v0}></div>
          </div>`}
        </div>
        <div class="editor-splitter" onMouseDown=${l0} onTouchStart=${r0}></div>
      `}
      <div class="container">
        ${M0&&o0()&&L`<div class="search-results-spacer"></div>`}
        ${Z&&L`
          <div class="chat-window-header">
            <div class="chat-window-header-main">
              <span class="chat-window-header-title">
                ${H0?.agent_name?`@${H0.agent_name}`:C0}
              </span>
              <span class="chat-window-header-subtitle">${H0?.chat_jid||C0}</span>
            </div>
            <div class="chat-window-header-actions">
              ${s0.length>1&&L`
                <label class="chat-window-branch-picker-wrap">
                  <span class="chat-window-branch-picker-label">Branch</span>
                  <select
                    class="chat-window-branch-picker"
                    value=${C0}
                    onChange=${(U1)=>e0(U1.currentTarget.value)}
                  >
                    ${s0.map((U1)=>L`
                      <option key=${U1.chat_jid} value=${U1.chat_jid}>
                        ${u1(U1,{currentChatJid:C0})}
                      </option>
                    `)}
                  </select>
                </label>
              `}
              ${H0?.chat_jid&&L`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${K1}
                  title=${B?"Renaming branch…":"Rename this branch"}
                  aria-label="Rename this branch"
                  disabled=${B}
                >
                  ${B?"Renaming…":"Rename"}
                </button>
              `}
              ${H0?.chat_jid&&H0.chat_jid!==(H0.root_chat_jid||H0.chat_jid)&&L`
                <button
                  class="chat-window-header-button"
                  type="button"
                  onClick=${d0}
                  title="Prune this branch agent"
                  aria-label="Prune this branch agent"
                >
                  Prune
                </button>
              `}
              <span class="chat-window-header-badge">Chat only</span>
            </div>
          </div>
        `}
        ${(W1||M0)&&L`
          <div class="hashtag-header">
            <button class="back-btn" onClick=${Z1}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <span>${W1?`#${W1}`:`Search: ${M0} · ${_1}`}</span>
          </div>
        `}
        <${pQ}
          posts=${L0}
          hasMore=${f0?Q1:!1}
          onLoadMore=${f0?r:void 0}
          timelineRef=${Y0}
          onHashtagClick=${m}
          onMessageRef=${i}
          onScrollToMessage=${J0}
          onFileRef=${I0}
          onPostClick=${void 0}
          onDeletePost=${T0}
          onOpenWidget=${O0}
          emptyMessage=${W1?`No posts with #${W1}`:M0?`No results for "${M0}"`:void 0}
          agents=${y0}
          user=${b0}
          reverse=${f0}
          removingPostIds=${W0}
          searchQuery=${M0}
        />
        <${L3}
          status=${A0(R0)?null:R0}
          draft=${j0}
          plan=${y}
          thought=${s}
          pendingRequest=${N0}
          intent=${D0}
          turnId=${m0}
          steerQueued=${$1}
          onPanelToggle=${G1}
          showExtensionPanels=${!1}
        />
        <${DQ}
          session=${M1}
          onClose=${f1}
          onRetry=${R_}
          onInject=${j_}
        />
        <${EQ}
          widget=${b1}
          onClose=${s1}
          onWidgetEvent=${l1}
        />
        <${L3}
          extensionPanels=${Array.from(j1.values())}
          pendingPanelActions=${a1}
          onExtensionPanelAction=${e_}
          turnId=${m0}
          steerQueued=${$1}
          onPanelToggle=${G1}
          showCorePanels=${!1}
        />
        <${V3}
          items=${Q_?[]:_4}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${I1}
          onOpenFilePill=${I0}
        />
        <${AQ}
          onPost=${()=>{let{searchQuery:U1,searchOpen:v_}=t1.current||{};if(!U1&&!v_)x1(),X1()}}
          onFocus=${X1}
          searchMode=${Q_}
          searchScope=${z1}
          onSearch=${W_}
          onSearchScopeChange=${F_}
          onEnterSearch=${C1}
          onExitSearch=${e1}
          fileRefs=${N1}
          onRemoveFileRef=${P1}
          onClearFileRefs=${Z_}
          onSetFileRefs=${m1}
          messageRefs=${$4}
          onRemoveMessageRef=${D_}
          onClearMessageRefs=${j4}
          onSetMessageRefs=${E_}
          onSwitchChat=${e0}
          onRenameSession=${N}
          isRenameSessionInProgress=${B}
          onCreateSession=${z4}
          onDeleteSession=${d0}
          onRestoreSession=${k_}
          activeEditorPath=${Z?null:I}
          onAttachEditorFile=${Z?void 0:u_}
          onOpenFilePill=${I0}
          followupQueueCount=${f4}
          followupQueueItems=${_4}
          showQueueStack=${!1}
          onInjectQueuedFollowup=${c_}
          onRemoveQueuedFollowup=${I1}
          onSubmitIntercept=${v4}
          onMessageResponse=${Y1}
          onSubmitError=${T1}
          onPopOutChat=${z0?void 0:H4}
          isAgentActive=${Y_}
          activeChatAgents=${M_}
          currentChatJid=${C0}
          connectionStatus=${n1}
          activeModel=${D1}
          modelUsage=${v1}
          thinkingLevel=${V1}
          supportsThinking=${q_}
          contextUsage=${K_}
          notificationsEnabled=${N_}
          notificationPermission=${l_}
          onToggleNotifications=${h1}
          onModelChange=${g1}
          onModelStateChange=${G_}
          statusNotice=${A0(R0)?R0:null}
        />
        <${TQ}
          request=${N0}
          onRespond=${()=>{f_(null),H1.current=null}}
        />
      </div>
    </div>
  `}function t_(_){return!_?.currentHashtag&&!_?.searchQuery&&!_?.searchOpen}function GZ(_,$,j){return Boolean($&&j&&(_==="new_post"||_==="new_reply"||_==="agent_response"))}function x3(_,$){return _&&$}function XZ(_,$){if(!Array.isArray(_)||_.length===0)return[$];if(_.some((j)=>j?.id===$?.id))return _;return[..._,$]}function VZ(_,$){if(!Array.isArray(_))return _;if(!_.some((j)=>j?.id===$?.id))return _;return _.map((j)=>j?.id===$?.id?$:j)}function UZ(_,$){if(!Array.isArray(_))return _;let j=Array.isArray($)?$:[];if(j.length===0)return _;let Q=new Set(j),Z=_.filter((Y)=>!Q.has(Y?.id));return Z.length===_.length?_:Z}function LZ(_){let{currentChatJid:$,queueRefreshGenRef:j,activeChatJidRef:Q,dismissedQueueRowIdsRef:Z,getAgentQueueState:Y,setFollowupQueueItems:q,clearQueuedSteerStateIfStale:K}=_,N=++j.current,G=$;Y(G).then((X)=>{if(N!==j.current)return;if(Q.current!==G)return;let V=Z.current,U=u9(X?.items,V);if(U.length){q((B)=>f9(B,U)?B:U);return}V.clear(),K(0),q((B)=>B.length===0?B:[])}).catch(()=>{if(N!==j.current)return;if(Q.current!==G)return;q((X)=>X.length===0?X:[])})}async function BZ(_){let{currentChatJid:$,activeChatJidRef:j,getAgentContext:Q,setContextUsage:Z}=_,Y=$;try{let q=await Q(Y);if(j.current!==Y)return;if(q)Z(q)}catch(q){if(j.current!==Y)return;console.warn("Failed to fetch agent context:",q)}}async function WZ(_){let{currentChatJid:$,activeChatJidRef:j,getAutoresearchStatus:Q,setExtensionStatusPanels:Z,setPendingExtensionPanelActions:Y}=_,q=$;try{let K=await Q(q);if(j.current!==q)return;Z((N)=>Pj(N,K)),Y((N)=>r8(N,"autoresearch"))}catch(K){if(j.current!==q)return;console.warn("Failed to fetch autoresearch status:",K)}}function FZ(_){let{refreshModelState:$,refreshActiveChatAgents:j,refreshCurrentChatBranches:Q,refreshQueueState:Z,refreshContextUsage:Y,refreshAutoresearchStatus:q}=_;$(),j(),Q(),Z(),Y(),q()}function zZ(_){let{viewStateRef:$,refreshTimeline:j,refreshModelAndQueueState:Q}=_;if(t_($.current))j();Q()}function GX(_,$){return Number.isFinite($)?Number($):_?_.replace(/\r\n/g,`
`).split(`
`).length:0}function K6(_,$){return{text:_,totalLines:GX(_,$)}}function T3(_,$){return{text:$?.text||"",totalLines:z9(_),fullText:_}}function HZ(_,$,j){return j==="replace"?$:`${_||""}${$}`}function JZ(_,$){let j=_||"";if($?.reset)j="";if($?.delta)j+=String($.delta);return j}function OZ(_,$){let j=_||"";if($?.reset)j="";if(typeof $?.delta==="string")j+=$.delta;return j}function t4(_,$){return Boolean(_)&&Boolean($)&&_!==$}function I5(_,$){return Boolean(_)&&!Boolean($)}function AZ(_,$){return _||$||null}function N6(_){return _?.turn_id||_?.turnId||null}function x5(_){if(typeof _?.text!=="string"||!_.text)return null;let $=Number.isFinite(_?.totalLines)?Number(_.totalLines):Number.isFinite(_?.total_lines)?Number(_.total_lines):0;return{text:_.text,totalLines:$}}function C3(_,$){return typeof _?.text==="string"&&_.text.length>=$.length}function DZ(_){switch(_){case"generated_widget_open":return{kind:"update",fallbackStatus:"loading",shouldAdoptTurn:!0};case"generated_widget_delta":return{kind:"update",fallbackStatus:"streaming",shouldAdoptTurn:!0};case"generated_widget_final":return{kind:"update",fallbackStatus:"final",shouldAdoptTurn:!0};case"generated_widget_error":return{kind:"update",fallbackStatus:"error",shouldAdoptTurn:!1};case"generated_widget_close":return{kind:"close",fallbackStatus:null,shouldAdoptTurn:!1};default:return{kind:null,fallbackStatus:null,shouldAdoptTurn:!1}}}function XX(_,$){return typeof _?.chat_jid==="string"&&_.chat_jid.trim()?_.chat_jid.trim():$}function EZ(_,$,j){return{isStatusPanelWidgetEvent:_==="extension_ui_widget"&&$?.options?.surface==="status-panel",eventChatJid:XX($,j),panelKey:typeof $?.key==="string"?$.key:""}}function kZ(_,$){if(_==="extension_ui_notify"&&typeof $?.message==="string")return{title:$.message,detail:null,kind:typeof $?.type==="string"&&$.type.trim()?$.type:"info"};if(_==="extension_ui_error"&&typeof $?.error==="string")return{title:"Extension UI error",detail:$.error,kind:"error",durationMs:5000};return null}var VX=new Set(["extension_ui_request","extension_ui_timeout","extension_ui_notify","extension_ui_status","extension_ui_working","extension_ui_widget","extension_ui_title","extension_ui_editor_text","extension_ui_error"]);function MZ(_){return VX.has(String(_||"").trim())}function UX(_){let $=String(_||"").trim();if(!$.startsWith("extension_ui_"))return"piclaw-extension-ui";return`piclaw-extension-ui:${$.slice(13).replace(/_/g,"-")}`}function P3(_,$,j=globalThis.window){if(!j||typeof j.dispatchEvent!=="function"||typeof CustomEvent>"u")return!1;let Q={type:_,payload:$};return j.dispatchEvent(new CustomEvent("piclaw-extension-ui",{detail:Q})),j.dispatchEvent(new CustomEvent(UX(_),{detail:Q})),!0}function IZ(_,$,j){let Q=$?.turn_id,Z=$?.chat_jid,Y=typeof Z==="string"&&Z.trim()?Z.trim():null,q=_==="connected"||_==="workspace_update";return{turnId:Q,eventChatJid:Y,isGlobalUiEvent:q,isCurrentChatEvent:Y?Y===j:q}}function xZ(_){return _==="agent_draft_delta"||_==="agent_thought_delta"||_==="agent_draft"||_==="agent_thought"}function TZ(_,$,j){let{currentChatJid:Q,updateAgentProfile:Z,updateUserProfile:Y,currentTurnIdRef:q,activeChatJidRef:K,pendingRequestRef:N,draftBufferRef:G,thoughtBufferRef:X,steerQueuedTurnIdRef:V,thoughtExpandedRef:U,draftExpandedRef:B,draftThrottleRef:J,thoughtThrottleRef:A,viewStateRef:O,followupQueueItemsRef:F,dismissedQueueRowIdsRef:D,scrollToBottomRef:E,hasMoreRef:g,loadMoreRef:u,lastAgentResponseRef:l,wasAgentActiveRef:o,setActiveTurn:P,applyLiveGeneratedWidgetUpdate:I,setFloatingWidget:z,clearLastActivityFlag:C,handleUiVersionDrift:b,setAgentStatus:e,setAgentDraft:p,setAgentPlan:a,setAgentThought:t,setPendingRequest:_0,clearAgentRunState:q0,getAgentStatus:Z0,noteAgentActivity:X0,showLastActivity:z0,refreshTimeline:B0,refreshModelAndQueueState:g0,refreshActiveChatAgents:x0,refreshCurrentChatBranches:k0,notifyForFinalResponse:h0,setContextUsage:v0,refreshContextUsage:l0,refreshQueueState:r0,setFollowupQueueItems:M0,clearQueuedSteerStateIfStale:o0,setSteerQueuedTurnId:H0,applyModelState:C0,getAgentContext:s0,setExtensionStatusPanels:e0,setPendingExtensionPanelActions:u1,refreshActiveEditorFromWorkspace:K1,showIntentToast:d0,removeStalledPost:W1,setPosts:Z1,preserveTimelineScrollTop:_1}=j,{turnId:L0,isCurrentChatEvent:f0}=IZ(_,$,Q);if(f0)Z($),Y($);if(_==="ui_theme"){x7($);return}let Q1=DZ(_);if(Q1.kind==="update"){if(!f0)return;if(Q1.shouldAdoptTurn&&I5(L0,q.current))P(L0);I($,Q1.fallbackStatus||"streaming");return}if(Q1.kind==="close"){if(!f0)return;z((m)=>sj(m,$));return}if(_?.startsWith("agent_")&&!xZ(_))C();if(_==="connected"){if(b($?.app_asset_version))return;e(null),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),N.current=null,q0();let m=Q;if(Z0(m).then((i)=>{if(K.current!==m)return;if(!i||i.status!=="active"||!i.data)return;let J0=i.data,I0=N6(J0);if(I0)P(I0);X0({clearSilence:!0}),z0(J0);let T0=x5(i.thought);if(T0)X.current=T0.text,t(T0);let O0=x5(i.draft);if(O0)G.current=O0.text,p(O0)}).catch((i)=>{console.warn("Failed to fetch agent status:",i)}),t_(O.current))B0();g0();return}if(_==="agent_status"){if(!f0){if($?.type==="done"||$?.type==="error")x0(),k0();return}if($.type==="done"||$.type==="error"){if(t4(L0,q.current))return;if($.type==="done"){if(h0(L0||q.current),t_(O.current))B0();if($.context_usage)v0($.context_usage)}if(l0(),o.current=!1,q0(),D.current.clear(),x0(),r0(),p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0}),_0(null),$.type==="error")e({type:"error",title:$.title||"Agent error"}),setTimeout(()=>e(null),8000);else e(null)}else{if(L0)P(L0);if(X0({running:!0,clearSilence:!0}),$.type==="thinking")G.current="",X.current="",p({text:"",totalLines:0}),a(""),t({text:"",totalLines:0});e((m)=>{if(m&&m.type===$.type&&m.title===$.title)return m;return $})}return}if(_==="agent_steer_queued"){if(!f0)return;if(t4(L0,q.current))return;let m=AZ(L0,q.current);if(!m)return;V.current=m,H0(m);return}if(_==="agent_followup_queued"){if(!f0)return;M0((m)=>v9(m,$)),r0();return}if(_==="agent_followup_consumed"){if(!f0)return;let m=k5(F.current,$);if(m)o0(m.remainingQueueCount),M0((i)=>w4(i,m.rowId).items);if(r0(),t_(O.current))B0();return}if(_==="agent_followup_removed"){if(!f0)return;let m=k5(F.current,$);if(m)D.current.add(m.rowId),o0(m.remainingQueueCount),M0((i)=>w4(i,m.rowId).items);r0();return}if(_==="agent_draft_delta"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);X0({running:!0,clearSilence:!0}),G.current=JZ(G.current,$);let m=Date.now();if(!J.current||m-J.current>=100){J.current=m;let i=G.current;if(B.current)p((J0)=>T3(i,J0));else p(K6(i,null))}return}if(_==="agent_draft"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);X0({running:!0,clearSilence:!0});let m=$.text||"",i=$.mode||($.kind==="plan"?"replace":"append");if($.kind==="plan")a((J0)=>HZ(J0,m,i));else if(!B.current)G.current=m,p(K6(m,$.total_lines));return}if(_==="agent_thought_delta"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);X0({running:!0,clearSilence:!0}),X.current=OZ(X.current,$);let m=Date.now();if(U.current&&(!A.current||m-A.current>=100)){A.current=m;let i=X.current;t((J0)=>T3(i,J0))}return}if(_==="agent_thought"){if(!f0)return;if(t4(L0,q.current))return;if(I5(L0,q.current))P(L0);X0({running:!0,clearSilence:!0});let m=$.text||"";if(!U.current)X.current=m,t(K6(m,$.total_lines));return}if(_==="model_changed"){if(!f0)return;C0($);let m=Q;s0(m).then((i)=>{if(K.current!==m)return;if(i)v0(i)}).catch(()=>{});return}let r=EZ(_,$,Q);if(r.isStatusPanelWidgetEvent){if(r.eventChatJid!==Q)return;if(!r.panelKey)return;if(e0((m)=>yj(m,$)),Sj($))u1((m)=>r8(m,r.panelKey));P3(_,$);return}if(_==="workspace_update"){if(typeof window<"u")window.dispatchEvent(new CustomEvent("workspace-update",{detail:$}));K1($?.updates);return}if(MZ(_)){if(!f0)return;P3(_,$);let m=kZ(_,$);if(m)d0(m.title,m.detail,m.kind,m.durationMs);return}let Y0=t_(O.current);if(_==="agent_response"){if(!f0)return;W1(),l.current={post:$,turnId:q.current}}if(GZ(_,f0,Y0))Z1((m)=>XZ(m,$)),E.current?.();if(_==="interaction_updated"){if(!x3(f0,Y0))return;Z1((m)=>VZ(m,$))}if(_==="interaction_deleted"){if(!x3(f0,Y0))return;let m=$?.ids||[];if(m.length){if(_1(()=>{Z1((i)=>UZ(i,m))}),g.current)u.current?.({preserveScroll:!0,preserveMode:"top"})}}}async function CZ(_){let{currentChatJid:$,getAgentStatus:j,activeChatJidRef:Q,wasAgentActiveRef:Z,viewStateRef:Y,refreshTimeline:q,clearAgentRunState:K,agentStatusRef:N,pendingRequestRef:G,thoughtBufferRef:X,draftBufferRef:V,setAgentStatus:U,setAgentDraft:B,setAgentPlan:J,setAgentThought:A,setPendingRequest:O,setActiveTurn:F,noteAgentActivity:D,clearLastActivityFlag:E}=_,g=$;try{let u=await j(g);if(Q.current!==g)return null;if(!u||u.status!=="active"||!u.data){if(Z.current&&t_(Y.current))q();return Z.current=!1,K(),N.current=null,U(null),B({text:"",totalLines:0}),J(""),A({text:"",totalLines:0}),O(null),G.current=null,u??null}Z.current=!0;let l=u.data;N.current=l;let o=N6(l);if(o)F(o);D({running:!0,clearSilence:!0}),E(),U(l);let P=x5(u.thought);if(P)A((z)=>{if(C3(z,P.text))return z;return X.current=P.text,P});let I=x5(u.draft);if(I)B((z)=>{if(C3(z,I.text))return z;return V.current=I.text,I});return u}catch(u){return console.warn("Failed to fetch agent status:",u),null}}async function PZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,currentTurnIdRef:Q,silentRecoveryRef:Z,silenceRefreshMs:Y,viewStateRef:q,refreshTimeline:K,refreshQueueState:N,refreshAgentStatus:G,now:X=()=>Date.now()}=_;if(!$.current)return null;if(j.current)return null;let V=Q.current||null,U=Z.current,B=X();if(U.inFlight)return null;if(U.turnId===V&&B-U.lastAttemptAt<Y)return null;U.inFlight=!0,U.lastAttemptAt=B,U.turnId=V;try{if(t_(q.current))await K();return await N(),await G()}finally{U.inFlight=!1}}function yZ(_){let{isAgentRunningRef:$,pendingRequestRef:j,lastAgentEventRef:Q,lastSilenceNoticeRef:Z,agentStatusRef:Y,silenceWarningMs:q,silenceFinalizeMs:K,silenceRefreshMs:N,isCompactionStatus:G,setAgentStatus:X,reconcileSilentTurn:V,now:U=()=>Date.now()}=_;if(!$.current)return;if(j.current)return;let B=Q.current;if(!B)return;let J=U(),A=J-B,O=G(Y.current);if(A>=K){if(!O)X({type:"waiting",title:"Re-syncing after a quiet period…"});V();return}if(A>=q&&J-Z.current>=N){if(!O){let F=Math.floor(A/1000);X({type:"waiting",title:`Waiting for model… No events for ${F}s`})}Z.current=J,V()}}function SZ(_){let{readStoredNumber:$,sidebarWidthRef:j,shellElement:Q,minWidth:Z=160,maxWidth:Y=600,fallbackWidth:q=280}=_,K=$("sidebarWidth",null),N=Number.isFinite(K)?Math.min(Math.max(Number(K),Z),Y):q;if(j.current=N,Q)Q.style.setProperty("--sidebar-width",`${N}px`);return N}async function wZ(_){let{currentHashtag:$,searchQuery:j,searchScope:Q,currentChatJid:Z,currentRootChatJid:Y,loadPosts:q,searchPosts:K,setPosts:N,setHasMore:G,scrollToBottom:X,isCancelled:V,scheduleRaf:U=(A)=>requestAnimationFrame(A),scheduleTimeout:B=(A,O)=>{setTimeout(A,O)}}=_,J=()=>{if(V())return;U(()=>{if(V())return;B(()=>{if(V())return;X()},0)})};if($){await q($);return}if(j){try{let A=await K(j,50,0,Z,Q,Y);if(V())return;N(Array.isArray(A?.results)?A.results:[]),G(!1)}catch(A){if(V())return;console.error("Failed to search:",A),N([]),G(!1)}return}try{await q(),J()}catch(A){if(V())return;console.error("Failed to load timeline:",A)}}function RZ(_){let{hasWindow:$=typeof window<"u",nextChatJid:j,currentChatJid:Q,chatOnlyMode:Z,currentHref:Y,navigate:q}=_;if(!$)return!1;let K=typeof j==="string"?j.trim():"";if(!K||K===Q)return!1;let N=U4(Y,K,{chatOnly:Z});return q?.(N),!0}async function uZ(_){let{panePath:$,tabStripActiveId:j,editorInstanceRef:Q,dockInstanceRef:Z,terminalTabPath:Y}=_,K=(typeof j==="string"?j.trim():"")===$?Q.current:$===Y?Z.current:null;if(typeof K?.preparePopoutTransfer!=="function")return null;return await K.preparePopoutTransfer()}function fZ(_){let{panePath:$,terminalTabPath:j,dockVisible:Q,resolveTab:Z,closeTab:Y,setDockVisible:q}=_,K=Z($);if(K&&!K.dirty){Y($);return}if($===j&&Q)q(!1)}function vZ(_){let{hasWindow:$=typeof window<"u",editorOpen:j,shellElement:Q,editorWidthRef:Z,dockHeightRef:Y,sidebarWidthRef:q,readStoredNumber:K}=_;if(!j||!$||!Q)return;if(!Z.current){let N=K("editorWidth",null),G=q.current||280;Z.current=Number.isFinite(N)?Number(N):G}if(Q.style.setProperty("--editor-width",`${Z.current}px`),!Y.current){let N=K("dockHeight",null);Y.current=Number.isFinite(N)?Number(N):200}Q.style.setProperty("--dock-height",`${Y.current}px`)}function y3(_,$){if(typeof $!=="string")return Array.isArray(_)?_:[];let j=$.trim();if(!j)return Array.isArray(_)?_:[];let Q=Array.isArray(_)?_:[];if(Q.includes(j))return Q;return[...Q,j]}function S3(_,$){let j=Array.isArray(_)?_:[];if(typeof $!=="string")return j;let Q=$.trim();if(!Q)return j;if(!j.includes(Q))return j;return j.filter((Z)=>Z!==Q)}function w3(_){if(!Array.isArray(_))return[];let $=[],j=new Set;for(let Q of _){if(typeof Q!=="string")continue;let Z=Q.trim();if(!Z||j.has(Z))continue;j.add(Z),$.push(Z)}return $}var LX=Vj(),gZ=S6,bZ=R6,BX=f6,WX=h6,FX=p6,R3=v6,u3=$_(o1,"getAgentContext",null),zX=$_(o1,"getAutoresearchStatus",null),HX=$_(o1,"stopAutoresearch",{status:"ok"}),JX=$_(o1,"dismissAutoresearch",{status:"ok"}),mZ=$_(o1,"getAgentModels",{current:null,models:[]}),hZ=$_(o1,"getActiveChatAgents",{chats:[]}),G6=$_(o1,"getChatBranches",{chats:[]}),OX=$_(o1,"renameChatBranch",null),AX=$_(o1,"pruneChatBranch",null),DX=$_(o1,"restoreChatBranch",null),pZ=$_(o1,"getAgentQueueState",{count:0}),cZ=$_(o1,"steerAgentQueueItem",{removed:!1,queued:"steer"}),lZ=$_(o1,"removeAgentQueueItem",{removed:!1}),EX=$_(o1,"streamSidePrompt",null);if(window.marked)marked.setOptions({breaks:!0,gfm:!0});n0.register(a6);n0.register(y$);n0.register(P$);n0.register(S$);n0.register(w$);n0.register(R$);n0.register(f$);n0.register(v$);n0.register(b$);n0.register(p$);n0.register(c$);n0.register(D$);t6();n0.register($$);n0.register(j$);function kX({locationParams:_,navigate:$}){let{currentChatJid:j,chatOnlyMode:Q,panePopoutMode:Z,panePopoutPath:Y,panePopoutLabel:q,branchLoaderMode:K,branchLoaderSourceChatJid:N}=u0(()=>Bj(_),[_]),[G,X]=v("disconnected"),[V,U]=v(()=>V4()),[B,J]=v(null),[A,O]=v(null),[F,D]=v(!1),[E,g]=v("current"),[u,l]=v([]),[o,P]=v([]),[I,z]=v(null),{agentStatus:C,setAgentStatus:b,agentDraft:e,setAgentDraft:p,agentPlan:a,setAgentPlan:t,agentThought:_0,setAgentThought:q0,pendingRequest:Z0,setPendingRequest:X0,currentTurnId:z0,setCurrentTurnId:B0,steerQueuedTurnId:g0,setSteerQueuedTurnId:x0,lastAgentEventRef:k0,lastSilenceNoticeRef:h0,isAgentRunningRef:v0,draftBufferRef:l0,thoughtBufferRef:r0,pendingRequestRef:M0,stalledPostIdRef:o0,currentTurnIdRef:H0,steerQueuedTurnIdRef:C0,thoughtExpandedRef:s0,draftExpandedRef:e0}=G9(),[u1,K1]=v({}),[d0,W1]=v(null),[Z1,_1]=v(null),[L0,f0]=v(!1),[Q1,r]=v(null),[Y0,m]=v([]),[i,J0]=v([]),[I0,T0]=v(null),[O0,y0]=v(()=>new Map),[b0,W0]=v(()=>new Set),[R0,A0]=v([]),[j0,y]=v(!1),[s,N0]=v(()=>Lj()),[D0,m0]=v(null),$1=x(new Set),G1=u0(()=>Y0.find((k)=>k?.chat_jid===j)||null,[Y0,j]),M1=u0(()=>i.find((k)=>k?.chat_jid===j)||G1||null,[G1,i,j]),f1=M1?.root_chat_jid||G1?.root_chat_jid||j,R_=Uj(E),[j_,b1]=v(()=>({status:K?"running":"idle",message:K?"Preparing a new chat branch…":""})),s1=R0.length,l1=x(new Set),j1=x([]),a1=x(new Set),e_=x(0),Q_=x({inFlight:!1,lastAttemptAt:0,turnId:null});l1.current=new Set(R0.map((k)=>k.row_id)),j1.current=R0;let{notificationsEnabled:_4,notificationPermission:c_,toggleNotifications:I1,notify:t1}=K9(),[x1,X1]=v(()=>new Set),[z1,W_]=v(()=>O5("workspaceOpen",!0)),F_=x(null),{editorOpen:C1,tabStripTabs:e1,tabStripActiveId:N1,previewTabs:P1,tabPaneOverrides:Z_,openEditor:m1,closeEditor:$4,handleTabClose:D_,handleTabActivate:j4,handleTabCloseOthers:E_,handleTabCloseAll:z4,handleTabTogglePin:k_,handleTabTogglePreview:u_,handleTabEditSource:f4,revealInExplorer:v4}=V9({onTabClosed:(k)=>F_.current?.(k)}),Y1=x(null),T1=x(null),H4=x(null),Y_=x(null),M_=n0.getDockPanes().length>0,[n1,D1]=v(!1),v1=T(()=>D1((k)=>!k),[]),V1=T(()=>{m1(i4,{label:"Terminal"})},[m1]),q_=T(()=>{m1(W4,{label:"VNC"})},[m1]),K_=u0(()=>_j(e1,N1),[N1,e1]),N_=u0(()=>$j(Z_,N1),[Z_,N1]),l_=u0(()=>jj(q,K_,Y),[K_,q,Y]),h1=u0(()=>Qj(e1,P1,N1),[P1,N1,e1]),g1=u0(()=>Zj(Y,W4),[Y]),G_=u0(()=>Yj(Y,i4,h1,g1),[g1,h1,Y]),f_=qj(Z,Q,C1,M_,n1),[H1,I_]=v(!1),U1=x(!1),v_=T(()=>{if(!C1||Q)return;if(U1.current=n1,n1)D1(!1);I_(!0)},[C1,Q,n1]),x_=T(()=>{if(!H1)return;if(I_(!1),U1.current)D1(!0),U1.current=!1},[H1]),g4=T(()=>{if(H1)x_();else v_()},[H1,v_,x_]);f(()=>{if(H1&&!C1)x_()},[H1,C1,x_]),f(()=>{if(!Z||!Y)return;if(t0.getActiveId()===Y)return;m1(Y,q?{label:q}:void 0)},[m1,q,Z,Y]),f(()=>{let k=Y1.current;if(!k)return;if(T1.current)T1.current.dispose(),T1.current=null;let c=N1;if(!c)return;let G0={path:c,mode:"edit"},E0=(N_?n0.get(N_):null)||n0.resolve(G0)||n0.get("editor");if(!E0){k.innerHTML='<div style="padding:2em;color:var(--text-secondary);text-align:center;">No editor available for this file.</div>';return}let K0=E0.mount(k,G0);T1.current=K0,K0.onDirtyChange?.((p0)=>{t0.setDirty(c,p0)}),K0.onSaveRequest?.(()=>{}),K0.onClose?.(()=>{$4()});let F0=t0.getViewState(c);if(F0&&typeof K0.restoreViewState==="function")requestAnimationFrame(()=>K0.restoreViewState(F0));if(typeof K0.onViewStateChange==="function")K0.onViewStateChange((p0)=>{t0.saveViewState(c,p0)});return requestAnimationFrame(()=>K0.focus()),()=>{if(T1.current===K0)K0.dispose(),T1.current=null}},[N1,N_,$4]);let b4=T(async(k)=>{let c=typeof N1==="string"?N1.trim():"",G0=T1.current;if(!c||!G0?.setContent)return;if(typeof G0.isDirty==="function"&&G0.isDirty())return;if(!(Array.isArray(k)&&k.length>0?k.some((K0)=>{let F0=Array.isArray(K0?.changed_paths)?K0.changed_paths.map((i0)=>typeof i0==="string"?i0.trim():"").filter(Boolean):[];if(F0.length>0)return F0.some((i0)=>i0==="."||i0===c);let p0=typeof K0?.path==="string"?K0.path.trim():"";return!p0||p0==="."||p0===c}):!0))return;try{let K0=await b5(c,1e6,"edit"),F0=typeof K0?.text==="string"?K0.text:"",p0=typeof K0?.mtime==="string"&&K0.mtime.trim()?K0.mtime.trim():new Date().toISOString();G0.setContent(F0,p0)}catch(K0){console.warn("[workspace_update] Failed to refresh active pane:",K0)}},[N1]);f(()=>{let k=H4.current;if(Y_.current)Y_.current.dispose(),Y_.current=null;if(!k||!M_||!n1)return;let c=n0.getDockPanes()[0];if(!c){k.innerHTML='<div class="terminal-placeholder">No dock pane available.</div>';return}let G0=c.mount(k,{mode:"view"});return Y_.current=G0,requestAnimationFrame(()=>G0.focus?.()),()=>{if(Y_.current===G0)G0.dispose(),Y_.current=null}},[M_,n1]);let[g_,b_]=v({name:"You",avatar_url:null,avatar_background:null}),m4=x(null),Q4=x(!1),e4=x(!1),Z4=x(!1),n_=x(null),d1=x(j),J4=x(new Map),O4=x(j),T5=x(0),E1=x(0),A4=x({}),_5=x({name:null,avatar_url:null}),X_=x({currentHashtag:null,searchQuery:null,searchOpen:!1}),V_=x(null),Y4=x(null),h4=x(0),p4=x(0),$5=x(0),q4=x(null),T_=x(null),z_=x(null),D4=x(null),c4=x(0),C_=x({title:null,avatarBase:null}),H=x(null),M=x(!1),[R,S]=v(!1),d=x(0),[Q0,V0]=v(!1),[U0,$0]=v(""),S0=u0(()=>l8(U0,M1?.agent_name||""),[M1?.agent_name,U0]),S1=x(null),__=T(()=>{if(H.current)clearTimeout(H.current),H.current=null;z(null)},[]);F9(30000),f(()=>{if(!Q0)return;requestAnimationFrame(()=>{if(Q0)S1.current?.focus(),S1.current?.select?.()})},[Q0]),f(()=>{return I7()},[]),f(()=>{return o9(U)},[]),f(()=>{q1("workspaceOpen",String(z1))},[z1]),f(()=>{return r9()},[]),f(()=>{return()=>{__()}},[__]),f(()=>{if(!s){q1(BTW_SESSION_KEY,"");return}q1(BTW_SESSION_KEY,JSON.stringify({question:s.question||"",answer:s.answer||"",thinking:s.thinking||"",error:s.error||null,status:s.status||"success"}))},[s]),f(()=>{A4.current=u1||{}},[u1]),f(()=>{d1.current=j},[j]),f(()=>{_5.current=g_||{name:"You",avatar_url:null,avatar_background:null}},[g_]);let p1=T((k,c,G0=null)=>{if(typeof document>"u")return;let E0=(k||"").trim()||"PiClaw";if(C_.current.title!==E0){document.title=E0;let F1=document.querySelector('meta[name="apple-mobile-web-app-title"]');if(F1&&F1.getAttribute("content")!==E0)F1.setAttribute("content",E0);C_.current.title=E0}let K0=document.getElementById("dynamic-favicon");if(!K0)return;let F0=K0.getAttribute("data-default")||K0.getAttribute("href")||"/favicon.ico",p0=c||F0,i0=c?`${p0}|${G0||""}`:p0;if(C_.current.avatarBase!==i0){let F1=c?`${p0}${p0.includes("?")?"&":"?"}v=${G0||Date.now()}`:p0;K0.setAttribute("href",F1),C_.current.avatarBase=i0}},[]),C5=T((k)=>{l((c)=>y3(c,k))},[]),W=T((k)=>{l((c)=>S3(c,k))},[]);F_.current=W;let w=T(()=>{l([])},[]),n=T((k)=>{l(w3(k))},[]),h=T((k,c=null,G0="info",E0=3000)=>{__(),z({title:k,detail:c||null,kind:G0||"info"}),H.current=setTimeout(()=>{z((K0)=>K0?.title===k?null:K0)},E0)},[__]),P0=T((k)=>{let c=J9(k,{editorOpen:C1,resolvePane:(G0)=>n0.resolve(G0)});if(c.kind==="open"){m1(c.path);return}if(c.kind==="toast")h(c.title,c.detail,c.level)},[C1,m1,h]),J1=T(()=>{let k=N1;if(k)C5(k)},[N1,C5]),y1=T((k)=>{P((c)=>y3(c,k))},[]),w1=T(async(k,c=null)=>{let G0=(K0)=>{K0.scrollIntoView({behavior:"smooth",block:"center"}),K0.classList.add("post-highlight"),setTimeout(()=>K0.classList.remove("post-highlight"),2000)},E0=document.getElementById("post-"+k);if(E0){G0(E0);return}try{let K0=typeof c==="string"&&c.trim()?c.trim():j,p0=(await w6(k,K0))?.thread?.[0];if(!p0)return;U_((i0)=>{if(!i0)return[p0];if(i0.some((F1)=>F1.id===p0.id))return i0;return[...i0,p0]}),requestAnimationFrame(()=>{setTimeout(()=>{let i0=document.getElementById("post-"+k);if(i0)G0(i0)},50)})}catch(K0){console.error("[scrollToMessage] Failed to fetch message",k,K0)}},[j]),K4=T((k)=>{P((c)=>S3(c,k))},[]),l4=T(()=>{P([])},[]),j5=T((k)=>{P(w3(k))},[]),Q5=T((k)=>{let c=typeof k==="string"&&k.trim()?k.trim():"Could not send your message.";h("Compose failed",c,"error",5000)},[h]),N4=T((k={})=>{let c=Date.now();if(k0.current=c,k.running)v0.current=!0,y((G0)=>G0?G0:!0);if(k.clearSilence)h0.current=0},[y]),c1=T(()=>{if(D4.current)clearTimeout(D4.current),D4.current=null;c4.current=0},[]);f(()=>()=>{c1()},[c1]);let Z5=T(()=>{c1(),b((k)=>{if(!k)return k;if(!(k.last_activity||k.lastActivity))return k;let{last_activity:c,lastActivity:G0,...E0}=k;return E0})},[c1]),E4=T((k)=>{if(!k)return;c1();let c=Date.now();c4.current=c,b({type:k.type||"active",last_activity:!0}),D4.current=setTimeout(()=>{if(c4.current!==c)return;b((G0)=>{if(!G0||!(G0.last_activity||G0.lastActivity))return G0;return null})},L9)},[c1]),O1=T(()=>{v0.current=!1,y(!1),k0.current=null,h0.current=0,l0.current="",r0.current="",M0.current=null,T_.current=null,H0.current=null,C0.current=null,n_.current=null,Q_.current={inFlight:!1,lastAttemptAt:0,turnId:null},c1(),B0(null),x0(null),s0.current=!1,e0.current=!1},[c1,B0,x0,y]),d_=T((k)=>{if(!M9({remainingQueueCount:k,currentTurnId:H0.current,isAgentTurnActive:j0}))return;C0.current=null,x0(null)},[j0,x0]),Y5=T(()=>Tj({agentStatus:C,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,currentTurnId:z0,steerQueuedTurnId:g0,isAgentTurnActive:j0,followupQueueItems:R0,activeModel:d0,activeThinkingLevel:Z1,supportsThinking:L0,activeModelUsage:Q1,contextUsage:I0,isAgentRunning:v0.current,wasAgentActive:Z4.current,draftBuffer:l0.current,thoughtBuffer:r0.current,lastAgentEvent:k0.current,lastSilenceNotice:h0.current,lastAgentResponse:T_.current,currentTurnIdRef:H0.current,steerQueuedTurnIdRef:C0.current,thoughtExpanded:s0.current,draftExpanded:e0.current,agentStatusRef:n_.current,silentRecovery:Q_.current}),[d0,Q1,Z1,e,a,C,_0,I0,z0,R0,j0,Z0,g0,L0]),q8=T((k)=>{Cj({snapshot:k,clearLastActivityTimer:c1,refs:{isAgentRunningRef:v0,wasAgentActiveRef:Z4,lastAgentEventRef:k0,lastSilenceNoticeRef:h0,draftBufferRef:l0,thoughtBufferRef:r0,pendingRequestRef:M0,lastAgentResponseRef:T_,currentTurnIdRef:H0,steerQueuedTurnIdRef:C0,agentStatusRef:n_,silentRecoveryRef:Q_,thoughtExpandedRef:s0,draftExpandedRef:e0},setters:{setIsAgentTurnActive:y,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:X0,setCurrentTurnId:B0,setSteerQueuedTurnId:x0,setFollowupQueueItems:A0,setActiveModel:W1,setActiveThinkingLevel:_1,setSupportsThinking:f0,setActiveModelUsage:r,setContextUsage:T0}})},[c1,B0,A0,y,x0]),q5=T((k)=>{if(!k)return;if(H0.current===k)return;H0.current=k,Q_.current={inFlight:!1,lastAttemptAt:0,turnId:k},B0(k),C0.current=null,x0(null),l0.current="",r0.current="",p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),X0(null),M0.current=null,T_.current=null,s0.current=!1,e0.current=!1},[B0,x0]),k4=T((k)=>{if(typeof document<"u"){let F1=typeof document.hasFocus==="function"?document.hasFocus():!0;if(!document.hidden&&F1)return}let c=T_.current;if(!c||!c.post)return;if(k&&c.turnId&&c.turnId!==k)return;let G0=c.post;if(G0.id&&q4.current===G0.id)return;let E0=String(G0?.data?.content||"").trim();if(!E0)return;q4.current=G0.id||q4.current,T_.current=null;let K0=E0.replace(/\s+/g," ").slice(0,200),F0=A4.current||{},i0=(G0?.data?.agent_id?F0[G0.data.agent_id]:null)?.name||"Pi";t1(i0,K0)},[t1]),P_=T(async(k,c)=>{await H9({panelKey:k,expanded:c,currentTurnIdRef:H0,thoughtExpandedRef:s0,draftExpandedRef:e0,setAgentThoughtVisibility:FX,getAgentThought:WX,thoughtBufferRef:r0,draftBufferRef:l0,setAgentThought:q0,setAgentDraft:p})},[]),M4=x(null),P5=T(()=>{let k=V_.current;if(!k)return;if(!(Math.abs(k.scrollTop)>150))k.scrollTop=0},[]);M4.current=P5;let X6=T((k)=>{let c=V_.current;if(!c||typeof k!=="function"){k?.();return}let{currentHashtag:G0,searchQuery:E0,searchOpen:K0}=X_.current||{},F0=!((E0||K0)&&!G0),p0=F0?c.scrollHeight-c.scrollTop:c.scrollTop;k(),requestAnimationFrame(()=>{let i0=V_.current;if(!i0)return;if(F0){let F1=Math.max(i0.scrollHeight-p0,0);i0.scrollTop=F1}else{let F1=Math.max(i0.scrollHeight-i0.clientHeight,0),R5=Math.min(p0,F1);i0.scrollTop=R5}})},[]),K8=T((k)=>{let c=V_.current;if(!c||typeof k!=="function"){k?.();return}let G0=c.scrollTop;k(),requestAnimationFrame(()=>{let E0=V_.current;if(!E0)return;let K0=Math.max(E0.scrollHeight-E0.clientHeight,0);E0.scrollTop=Math.min(G0,K0)})},[]),f3=T((k)=>R9(k,l1.current),[]),{posts:N8,setPosts:U_,hasMore:nZ,setHasMore:V6,hasMoreRef:v3,loadPosts:i_,refreshTimeline:y_,loadMore:dZ,loadMoreRef:g3}=N9({preserveTimelineScroll:X6,preserveTimelineScrollTop:K8,chatJid:j}),K5=u0(()=>f3(N8),[N8,R0,f3]),G8=T(()=>{let k=o0.current;if(!k)return;U_((c)=>c?c.filter((G0)=>G0.id!==k):c),o0.current=null},[U_]),{handleSplitterMouseDown:iZ,handleSplitterTouchStart:rZ,handleEditorSplitterMouseDown:oZ,handleEditorSplitterTouchStart:sZ,handleDockSplitterMouseDown:aZ,handleDockSplitterTouchStart:tZ}=X9({appShellRef:Y4,sidebarWidthRef:h4,editorWidthRef:p4,dockHeightRef:$5}),b3=T(()=>{if(!v0.current)return;v0.current=!1,h0.current=0,k0.current=null,H0.current=null,B0(null),s0.current=!1,e0.current=!1;let k=(l0.current||"").trim();if(l0.current="",r0.current="",p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),X0(null),M0.current=null,T_.current=null,!k){b({type:"error",title:"Response stalled - No content received"});return}let G0=`${k}${`

⚠️ Response may be incomplete - the model stopped responding`}`,E0=Date.now(),K0=new Date().toISOString(),F0={id:E0,timestamp:K0,data:{type:"agent_response",content:G0,agent_id:"default",is_local_stall:!0}};o0.current=E0,U_((p0)=>p0?$8([...p0,F0]):[F0]),M4.current?.(),b(null)},[B0]);f(()=>{X_.current={currentHashtag:B,searchQuery:A,searchOpen:F}},[B,A,F]);let k1=T(()=>{LZ({currentChatJid:j,queueRefreshGenRef:e_,activeChatJidRef:d1,dismissedQueueRowIdsRef:a1,getAgentQueueState:pZ,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:d_})},[d_,j]),L_=T(async()=>{await BZ({currentChatJid:j,activeChatJidRef:d1,getAgentContext:u3,setContextUsage:T0})},[j]),r_=T(async()=>{await WZ({currentChatJid:j,activeChatJidRef:d1,getAutoresearchStatus:zX,setExtensionStatusPanels:y0,setPendingExtensionPanelActions:W0})},[j]),o_=T(async()=>{return await CZ({currentChatJid:j,getAgentStatus:R3,activeChatJidRef:d1,wasAgentActiveRef:Z4,viewStateRef:X_,refreshTimeline:y_,clearAgentRunState:O1,agentStatusRef:n_,pendingRequestRef:M0,thoughtBufferRef:r0,draftBufferRef:l0,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:X0,setActiveTurn:q5,noteAgentActivity:N4,clearLastActivityFlag:Z5})},[O1,Z5,j,N4,y_,q5]),m3=T(async()=>{return await PZ({isAgentRunningRef:v0,pendingRequestRef:M0,currentTurnIdRef:H0,silentRecoveryRef:Q_,silenceRefreshMs:d$,viewStateRef:X_,refreshTimeline:y_,refreshQueueState:k1,refreshAgentStatus:o_})},[o_,k1,y_]);f(()=>{let k=Math.min(1000,Math.max(100,Math.floor(n$/2))),c=setInterval(()=>{yZ({isAgentRunningRef:v0,pendingRequestRef:M0,lastAgentEventRef:k0,lastSilenceNoticeRef:h0,agentStatusRef:n_,silenceWarningMs:n$,silenceFinalizeMs:U9,silenceRefreshMs:d$,isCompactionStatus:S4,setAgentStatus:b,reconcileSilentTurn:m3})},k);return()=>clearInterval(c)},[m3]);let h3=T((k)=>{return Wj({serverVersion:k,currentAppAssetVersion:LX,staleUiVersionRef:m4,staleUiReloadScheduledRef:Q4,tabStoreHasUnsaved:()=>t0.hasUnsaved(),isAgentRunningRef:v0,pendingRequestRef:M0,showIntentToast:h})},[v0,M0,h]),eZ=T((k)=>{Fj({status:k,setConnectionStatus:X,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:X0,pendingRequestRef:M0,clearAgentRunState:O1,hasConnectedOnceRef:e4,viewStateRef:X_,refreshTimeline:y_,refreshAgentStatus:o_,refreshQueueState:k1,refreshContextUsage:L_})},[O1,y_,o_,k1,L_]),_Y=T(async(k)=>{J(k),U_(null),await i_(k)},[i_]),$Y=T(async()=>{J(null),O(null),U_(null),await i_()},[i_]),jY=T(async(k,c=E)=>{if(!k||!k.trim())return;let G0=c==="root"||c==="all"?c:"current";g(G0),O(k.trim()),J(null),U_(null);try{let E0=await gZ(k.trim(),50,0,j,G0,f1);U_(E0.results),V6(!1)}catch(E0){console.error("Failed to search:",E0),U_([])}},[j,f1,E]),QY=T(()=>{D(!0),O(null),J(null),g("current"),U_([])},[]),ZY=T(()=>{D(!1),O(null),i_()},[i_]),IX=T(()=>{},[]),YY=!B&&!A&&!F,qY=T(async(k)=>{if(!k)return;let c=k.id,G0=typeof k?.chat_jid==="string"&&k.chat_jid.trim()?k.chat_jid.trim():j,E0=K5?.filter((F0)=>F0?.data?.thread_id===c&&F0?.id!==c).length||0;if(E0>0){if(!window.confirm(`Delete this message and its ${E0} replies?`))return}let K0=(F0)=>{if(!F0.length)return;X1((i0)=>{let F1=new Set(i0);return F0.forEach((R5)=>F1.add(R5)),F1}),setTimeout(()=>{if(K8(()=>{U_((i0)=>i0?i0.filter((F1)=>!F0.includes(F1.id)):i0)}),X1((i0)=>{let F1=new Set(i0);return F0.forEach((R5)=>F1.delete(R5)),F1}),v3.current)g3.current?.({preserveScroll:!0,preserveMode:"top"})},180)};try{let F0=await bZ(c,E0>0,G0);if(F0?.ids?.length)K0(F0.ids)}catch(F0){let p0=F0?.message||"";if(E0===0&&p0.includes("Replies exist")){if(!window.confirm("Delete this message and its replies?"))return;let F1=await bZ(c,!0,G0);if(F1?.ids?.length)K0(F1.ids);return}console.error("Failed to delete post:",F0),alert(`Failed to delete message: ${p0}`)}},[j,K5,K8]),p3=T(async()=>{await b9({getAgents:BX,setAgents:K1,setUserProfile:b_,applyBranding:p1})},[p1]);f(()=>{p3(),SZ({readStoredNumber:o5,sidebarWidthRef:h4,shellElement:Y4.current})},[p3]);let y5=j0||C!==null,c3=T((k)=>{m9({payload:k,agentsRef:A4,setAgents:K1,applyBranding:p1})},[p1]),l3=T((k)=>{h9({payload:k,setUserProfile:b_})},[]),S5=T((k)=>{p9({payload:k,setActiveModel:W1,setActiveThinkingLevel:_1,setSupportsThinking:f0,setActiveModelUsage:r})},[]),X8=T(()=>{c9({currentChatJid:j,getAgentModels:mZ,activeChatJidRef:d1,applyModelState:S5})},[S5,j]),i1=T(()=>{l9({currentChatJid:j,getActiveChatAgents:hZ,getChatBranches:G6,activeChatJidRef:d1,setActiveChatAgents:m})},[j]),r1=T(()=>{n9({currentRootChatJid:f1,getChatBranches:G6,setCurrentChatBranches:J0})},[f1]),KY=T((k)=>{GQ({queuedItem:k,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,currentChatJid:j,refreshQueueState:k1,setFollowupQueueItems:A0,showIntentToast:h,steerAgentQueueItem:cZ,removeAgentQueueItem:lZ})},[j,k1,A0,h]),NY=T((k)=>{XQ({queuedItem:k,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,currentChatJid:j,refreshQueueState:k1,setFollowupQueueItems:A0,showIntentToast:h,clearQueuedSteerStateIfStale:d_,steerAgentQueueItem:cZ,removeAgentQueueItem:lZ})},[d_,j,k1,A0,h]),w5=T((k)=>{d9({response:k,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,refreshContextUsage:L_,refreshAutoresearchStatus:r_,refreshQueueState:k1})},[i1,r_,r1,L_,k1]),GY=T(async(k,c)=>{let G0=typeof k?.key==="string"?k.key:"",E0=typeof c?.key==="string"?c.key:"",K0=_3(G0,E0);if(!G0||!E0)return;W0((F0)=>wj(F0,G0,E0));try{let F0=await uj({panel:k,action:c,currentChatJid:j,stopAutoresearch:HX,dismissAutoresearch:JX,writeClipboard:(p0)=>navigator.clipboard.writeText(p0)});if(F0.refreshAutoresearchStatus)r_();if(F0.toast)h(F0.toast.title,F0.toast.detail,F0.toast.kind,F0.toast.durationMs)}catch(F0){h("Panel action failed",F0?.message||"Could not complete that action.","warning")}finally{W0((F0)=>Rj(F0,K0))}},[j,r_,h]),U6=T(()=>{if(z_.current)z_.current.abort(),z_.current=null;N0(null)},[]),V8=T(async(k)=>{let c=String(k||"").trim();if(!c)return h("BTW needs a question","Usage: /btw <question>","warning"),!0;if(z_.current)z_.current.abort();let G0=new AbortController;z_.current=G0,N0({question:c,answer:"",thinking:"",error:null,model:null,status:"running"});try{let E0=await EX(c,{signal:G0.signal,chatJid:A9(j),systemPrompt:"Answer the user briefly and directly. This is a side conversation that should not affect the main chat until explicitly injected.",onEvent:(K0,F0)=>{if(K0==="side_prompt_start")N0((p0)=>p0?{...p0,status:"running"}:p0)},onThinkingDelta:(K0)=>{N0((F0)=>F0?{...F0,thinking:`${F0.thinking||""}${K0||""}`}:F0)},onTextDelta:(K0)=>{N0((F0)=>F0?{...F0,answer:`${F0.answer||""}${K0||""}`}:F0)}});if(z_.current!==G0)return!0;N0((K0)=>K0?{...K0,answer:E0?.result||K0.answer||"",thinking:E0?.thinking||K0.thinking||"",model:E0?.model||null,status:"success",error:null}:K0)}catch(E0){if(G0.signal.aborted)return!0;N0((K0)=>K0?{...K0,status:"error",error:E0?.payload?.error||E0?.message||"BTW request failed."}:K0)}finally{if(z_.current===G0)z_.current=null}return!0},[j,h]),XY=T(async({content:k})=>{let c=O9(k);if(!c)return!1;if(c.type==="help")return h("BTW usage","Use /btw <question> to open a side conversation.","info",4000),!0;if(c.type==="clear")return U6(),h("BTW cleared","Closed the side conversation panel.","info"),!0;if(c.type==="ask")return await V8(c.question),!0;return!1},[U6,V8,h]),VY=T(()=>{if(s?.question)V8(s.question)},[s,V8]),UY=T(async()=>{let k=k9(s);if(!k)return;try{let c=await d4("default",k,null,[],y5?"queue":null,j);w5(c),h(c?.queued==="followup"?"BTW queued":"BTW injected",c?.queued==="followup"?"The BTW summary was queued as a follow-up because the agent is busy.":"The BTW summary was sent to the main chat.","info",3500)}catch(c){h("BTW inject failed",c?.message||"Could not inject BTW answer into chat.","warning")}},[s,w5,y5,h]),n3=T(async(k=null)=>{return NQ({requestPayload:k,currentChatJid:j,currentRootChatJid:f1,getAgentStatus:R3,getAgentContext:u3,getAgentQueueState:pZ,getAgentModels:mZ,getActiveChatAgents:hZ,getChatBranches:G6,getTimeline:n4,rawPosts:N8,activeChatAgents:Y0,currentChatBranches:i,contextUsage:I0,followupQueueItems:j1.current,activeModel:d0,activeThinkingLevel:Z1,supportsThinking:L0,isAgentTurnActive:j0})},[Y0,d0,Z1,I0,i,j,f1,j0,N8,L0]),N5=T(()=>{FZ({refreshModelState:X8,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,refreshQueueState:k1,refreshContextUsage:L_,refreshAutoresearchStatus:r_})},[i1,r_,L_,r1,X8,k1]);f(()=>{N5();let k=setInterval(()=>{X8(),i1(),r1(),k1()},60000);return()=>clearInterval(k)},[N5,X8,i1,r1,k1]),f(()=>{y0(new Map),W0(new Set)},[j]),f(()=>{let k=!1;return wZ({currentHashtag:B,searchQuery:A,searchScope:E,currentChatJid:j,currentRootChatJid:f1,loadPosts:i_,searchPosts:gZ,setPosts:U_,setHasMore:V6,scrollToBottom:P5,isCancelled:()=>k}),()=>{k=!0}},[j,B,A,E,f1,i_,P5,V6,U_]),f(()=>{let k=O4.current||j;J4.current.set(k,Y5())},[j,Y5]),f(()=>{let k=O4.current||j;if(k===j)return;J4.current.set(k,Y5()),O4.current=j,a1.current.clear(),q8(J4.current.get(j)||null),k1(),o_(),L_()},[j,o_,L_,k1,q8,Y5]);let LY=T(()=>{zZ({viewStateRef:X_,refreshTimeline:y_,refreshModelAndQueueState:N5})},[N5,y_]),d3=T((k,c="streaming")=>{let G0=new Date().toISOString();m0((E0)=>oj(E0,k,{fallbackStatus:c,currentChatJid:j,dismissedSessionKeys:$1.current,updatedAt:G0}))},[j]),L6=T((k,c)=>{TZ(k,c,{currentChatJid:j,updateAgentProfile:c3,updateUserProfile:l3,currentTurnIdRef:H0,activeChatJidRef:d1,pendingRequestRef:M0,draftBufferRef:l0,thoughtBufferRef:r0,steerQueuedTurnIdRef:C0,thoughtExpandedRef:s0,draftExpandedRef:e0,draftThrottleRef:T5,thoughtThrottleRef:E1,viewStateRef:X_,followupQueueItemsRef:j1,dismissedQueueRowIdsRef:a1,scrollToBottomRef:M4,hasMoreRef:v3,loadMoreRef:g3,lastAgentResponseRef:T_,wasAgentActiveRef:Z4,setActiveTurn:q5,applyLiveGeneratedWidgetUpdate:d3,setFloatingWidget:m0,clearLastActivityFlag:Z5,handleUiVersionDrift:h3,setAgentStatus:b,setAgentDraft:p,setAgentPlan:t,setAgentThought:q0,setPendingRequest:X0,clearAgentRunState:O1,getAgentStatus:R3,noteAgentActivity:N4,showLastActivity:E4,refreshTimeline:y_,refreshModelAndQueueState:N5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,notifyForFinalResponse:k4,setContextUsage:T0,refreshContextUsage:L_,refreshQueueState:k1,setFollowupQueueItems:A0,clearQueuedSteerStateIfStale:d_,setSteerQueuedTurnId:x0,applyModelState:S5,getAgentContext:u3,setExtensionStatusPanels:y0,setPendingExtensionPanelActions:W0,refreshActiveEditorFromWorkspace:b4,showIntentToast:h,removeStalledPost:G8,setPosts:U_,preserveTimelineScrollTop:K8})},[d3,S5,O1,Z5,d_,j,h3,N4,k4,i1,b4,L_,r1,N5,k1,y_,G8,q5,A0,h,E4,c3,l3]);f(()=>{if(typeof window>"u")return;let k=window.__PICLAW_TEST_API||{};return k.emit=L6,k.reset=()=>{G8(),O1(),b(null),p({text:"",totalLines:0}),t(""),q0({text:"",totalLines:0}),X0(null)},k.finalize=()=>b3(),window.__PICLAW_TEST_API=k,()=>{if(window.__PICLAW_TEST_API===k)window.__PICLAW_TEST_API=void 0}},[O1,b3,L6,G8]),q9({handleSseEvent:L6,handleConnectionStatusChange:eZ,loadPosts:i_,onWake:LY,chatJid:j}),f(()=>{if(!K5||K5.length===0)return;let k=location.hash;if(!k||!k.startsWith("#msg-"))return;let c=k.slice(5);w1(c),history.replaceState(null,"",location.pathname+location.search)},[K5,w1]);let B6=C!==null;f(()=>{if(G!=="connected")return;let c=setInterval(()=>{zj({viewStateRef:X_,isAgentActive:B6,refreshTimeline:y_,refreshQueueState:k1,refreshAgentStatus:o_,refreshContextUsage:L_,refreshAutoresearchStatus:r_})},B6?15000:60000);return()=>clearInterval(c)},[G,B6,o_,r_,L_,k1,y_]),f(()=>{return s9(()=>{o_(),L_(),k1(),r_()})},[o_,r_,L_,k1]);let BY=T(()=>{W_((k)=>!k)},[]),WY=T((k)=>{RZ({hasWindow:typeof window<"u",nextChatJid:k,currentChatJid:j,chatOnlyMode:Q,currentHref:typeof window<"u"?window.location.href:"http://localhost/",navigate:$})},[Q,j,$]),W6=T(()=>{Hj({hasWindow:typeof window<"u",currentBranchRecord:M1,renameBranchInFlight:M.current,renameBranchLockUntil:d.current,getFormLock:a$,setRenameBranchNameDraft:$0,setIsRenameBranchFormOpen:V0})},[M1]),F6=T(()=>{Jj({setIsRenameBranchFormOpen:V0,setRenameBranchNameDraft:$0})},[]),FY=T(async(k)=>{await Oj({hasWindow:typeof window<"u",currentBranchRecord:M1,nextName:k,openRenameForm:W6,renameBranchInFlightRef:M,renameBranchLockUntilRef:d,getFormLock:a$,setIsRenamingBranch:S,renameChatBranch:OX,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:h,closeRenameForm:F6})},[F6,M1,i1,r1,W6,S,h]),zY=T(async(k=null)=>{await Aj({hasWindow:typeof window<"u",targetChatJid:k,currentChatJid:j,currentBranchRecord:M1,currentChatBranches:i,activeChatAgents:Y0,pruneChatBranch:AX,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Y0,Q,M1,i,j,$,i1,r1,h]),HY=T(async(k)=>{await Dj({targetChatJid:k,restoreChatBranch:DX,currentChatBranches:i,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/",chatOnlyMode:Q,navigate:$})},[Q,i,$,i1,r1,h]);f(()=>{if(!K||typeof window>"u")return;let k=!1;return Ej({branchLoaderSourceChatJid:N,forkChatBranch:f5,setBranchLoaderState:b1,navigate:$,baseHref:window.location.href,isCancelled:()=>k}),()=>{k=!0}},[K,N,$]);let JY=T((k)=>{VQ({widget:k,dismissedLiveWidgetKeysRef:$1,setFloatingWidget:m0})},[]),z6=T(()=>{UQ({dismissedLiveWidgetKeysRef:$1,setFloatingWidget:m0})},[]),OY=T((k,c)=>{LQ({event:k,widget:c,currentChatJid:j,isComposeBoxAgentActive:y5,setFloatingWidget:m0,handleCloseFloatingWidget:z6,handleMessageResponse:w5,showIntentToast:h,sendAgentMessage:d4,buildFloatingWidgetDashboardSnapshot:n3})},[n3,j,z6,w5,y5,h]);f(()=>{$1.current.clear(),m0(null)},[j]);let AY=T(async()=>{await kj({currentChatJid:j,chatOnlyMode:Q,forkChatBranch:f5,refreshActiveChatAgents:i1,refreshCurrentChatBranches:r1,showIntentToast:h,navigate:$,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[Q,j,$,i1,r1,h]),H6=T(async(k,c)=>{await Mj({hasWindow:typeof window<"u",isWebAppMode:V,path:k,label:c,showIntentToast:h,currentChatJid:j,baseHref:typeof window<"u"?window.location.href:"http://localhost/",resolveSourceTransfer:(G0)=>uZ({panePath:G0,tabStripActiveId:N1,editorInstanceRef:T1,dockInstanceRef:Y_,terminalTabPath:i4}),closeSourcePaneIfTransferred:(G0)=>{fZ({panePath:G0,terminalTabPath:i4,dockVisible:n1,resolveTab:(E0)=>t0.get(E0),closeTab:D_,setDockVisible:D1})}})},[j,n1,D_,V,h,N1]);f(()=>a9({openTab:(k,c)=>m1(k,c?{label:c}:void 0),popOutPane:(k,c)=>{H6(k,c)}}),[H6,m1]);let DY=T(async()=>{await Ij({hasWindow:typeof window<"u",isWebAppMode:V,currentChatJid:j,currentRootChatJid:f1,forkChatBranch:f5,getActiveChatAgents:u6,getChatBranches:G6,setActiveChatAgents:m,setCurrentChatBranches:J0,showIntentToast:h,baseHref:typeof window<"u"?window.location.href:"http://localhost/"})},[j,f1,V,h]);f(()=>{vZ({hasWindow:typeof window<"u",editorOpen:C1,shellElement:Y4.current,editorWidthRef:p4,dockHeightRef:$5,sidebarWidthRef:h4,readStoredNumber:o5})},[C1]),f(()=>{if(!M_||Q)return;return t9(v1)},[v1,M_,Q]),f(()=>{if(Q)return;return e9({toggleZenMode:g4,exitZenMode:x_,zenMode:H1,isZenModeActive:()=>H1})},[g4,x_,H1,Q]);let EY=Boolean(g0&&g0===(C?.turn_id||z0)),i3=WQ({branchLoaderMode:K,panePopoutMode:Z});if(i3==="branch-loader")return FQ(j_);if(i3==="pane-popout")return zQ({appShellRef:Y4,editorOpen:C1,hidePanePopoutControls:G_,panePopoutHasMenuActions:h1,panePopoutTitle:l_,tabStripTabs:e1,tabStripActiveId:N1,handleTabActivate:j4,previewTabs:P1,handleTabTogglePreview:u_,editorContainerRef:Y1,getPaneContent:()=>T1.current?.getContent?.(),panePopoutPath:Y});return NZ({appShellRef:Y4,workspaceOpen:z1,editorOpen:C1,chatOnlyMode:Q,zenMode:H1,isRenameBranchFormOpen:Q0,closeRenameCurrentBranchForm:F6,handleRenameCurrentBranch:FY,renameBranchNameDraft:U0,renameBranchNameInputRef:S1,setRenameBranchNameDraft:$0,renameBranchDraftState:S0,isRenamingBranch:R,addFileRef:C5,openEditor:m1,openTerminalTab:V1,openVncTab:q_,hasDockPanes:M_,toggleDock:v1,dockVisible:n1,handleSplitterMouseDown:iZ,handleSplitterTouchStart:rZ,showEditorPaneContainer:f_,tabStripTabs:e1,tabStripActiveId:N1,handleTabActivate:j4,handleTabClose:D_,handleTabCloseOthers:E_,handleTabCloseAll:z4,handleTabTogglePin:k_,handleTabTogglePreview:u_,handleTabEditSource:f4,previewTabs:P1,tabPaneOverrides:Z_,toggleZenMode:g4,handlePopOutPane:H6,isWebAppMode:V,editorContainerRef:Y1,editorInstanceRef:T1,handleDockSplitterMouseDown:aZ,handleDockSplitterTouchStart:tZ,TERMINAL_TAB_PATH:i4,dockContainerRef:H4,handleEditorSplitterMouseDown:oZ,handleEditorSplitterTouchStart:sZ,searchQuery:A,isIOSDevice:W9,currentBranchRecord:M1,currentChatJid:j,currentChatBranches:i,handleBranchPickerChange:WY,formatBranchPickerLabel:n8,openRenameCurrentBranchForm:W6,handlePruneCurrentBranch:zY,currentHashtag:B,handleBackToTimeline:$Y,activeSearchScopeLabel:R_,posts:K5,isMainTimelineView:YY,hasMore:nZ,loadMore:dZ,timelineRef:V_,handleHashtagClick:_Y,addMessageRef:y1,scrollToMessage:w1,openFileFromPill:P0,handleDeletePost:qY,handleOpenFloatingWidget:JY,agents:u1,userProfile:g_,removingPostIds:x1,agentStatus:C,isCompactionStatus:S4,agentDraft:e,agentPlan:a,agentThought:_0,pendingRequest:Z0,intentToast:I,currentTurnId:z0,steerQueued:EY,handlePanelToggle:P_,btwSession:s,closeBtwPanel:U6,handleBtwRetry:VY,handleBtwInject:UY,floatingWidget:D0,handleCloseFloatingWidget:z6,handleFloatingWidgetEvent:OY,extensionStatusPanels:O0,pendingExtensionPanelActions:b0,handleExtensionPanelAction:GY,searchOpen:F,followupQueueItems:R0,handleInjectQueuedFollowup:KY,handleRemoveQueuedFollowup:NY,viewStateRef:X_,loadPosts:i_,scrollToBottom:P5,searchScope:E,handleSearch:jY,setSearchScope:g,enterSearchMode:QY,exitSearchMode:ZY,fileRefs:u,removeFileRef:W,clearFileRefs:w,setFileRefsFromCompose:n,messageRefs:o,removeMessageRef:K4,clearMessageRefs:l4,setMessageRefsFromCompose:j5,handleCreateSessionFromCompose:AY,handleRestoreBranch:HY,attachActiveEditorFile:J1,followupQueueCount:s1,handleBtwIntercept:XY,handleMessageResponse:w5,handleComposeSubmitError:Q5,handlePopOutChat:DY,isComposeBoxAgentActive:y5,activeChatAgents:Y0,connectionStatus:G,activeModel:d0,activeModelUsage:Q1,activeThinkingLevel:Z1,supportsThinking:L0,contextUsage:I0,notificationsEnabled:_4,notificationPermission:c_,handleToggleNotifications:I1,setActiveModel:W1,applyModelState:S5,setPendingRequest:X0,pendingRequestRef:M0,toggleWorkspace:BY})}function MX(){let[_,$]=v(()=>typeof window>"u"?"http://localhost/":window.location.href);f(()=>{if(typeof window>"u")return;let Z=()=>$(window.location.href);return window.addEventListener("popstate",Z),()=>window.removeEventListener("popstate",Z)},[]);let j=T((Z,Y={})=>{if(typeof window>"u")return;let{replace:q=!1}=Y||{},K=new URL(String(Z||""),window.location.href).toString();if(q)window.history.replaceState(null,"",K);else window.history.pushState(null,"",K);$(window.location.href)},[]),Q=u0(()=>new URL(_).searchParams,[_]);return L`<${kX} locationParams=${Q} navigate=${j} />`}T4(L`<${MX} />`,document.getElementById("app"));

//# debugId=51EBE0BD0B44942964756E2164756E21
//# sourceMappingURL=app.bundle.js.map
