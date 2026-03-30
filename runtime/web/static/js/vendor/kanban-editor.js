(()=>{function t(N,K){if(!N)return N;let J=N.lanes.find((P)=>P.id===K.fromLaneId),Y=N.lanes.find((P)=>P.id===K.toLaneId);if(!J||!Y)return N;let W=J.cards.findIndex((P)=>P.id===K.cardId);if(W===-1)return N;let Z=J.cards[W];if(!Z)return N;let F=Number.isFinite(K.toIndex)?Number(K.toIndex):Y.cards.length;if(K.fromLaneId===K.toLaneId){let P=[...J.cards],[y]=P.splice(W,1);if(!y)return N;let O=Math.max(0,Math.min(F,J.cards.length)),B=O>W?O-1:O;if(B===W)return N;return P.splice(B,0,y),{...N,lanes:N.lanes.map((U)=>U.id===K.fromLaneId?{...U,cards:P}:U)}}let X=[...Y.cards.filter((P)=>P.id!==K.cardId)],V=Math.max(0,Math.min(F,X.length));return X.splice(V,0,Z),{...N,lanes:N.lanes.map((P)=>{if(P.id===K.fromLaneId)return{...P,cards:P.cards.filter((y)=>y.id!==K.cardId)};if(P.id===K.toLaneId)return{...P,cards:X};return P})}}function a(N,K){if(!N||K.fromLaneId===K.toLaneId)return N;let J=N.lanes.findIndex((F)=>F.id===K.fromLaneId),Y=N.lanes.findIndex((F)=>F.id===K.toLaneId);if(J===-1||Y===-1)return N;let W=[...N.lanes],[Z]=W.splice(J,1);if(!Z)return N;return W.splice(Y,0,Z),{...N,lanes:W}}var{h:WK,render:e}=preact,{useState:z,useEffect:h,useCallback:r,useRef:l}=preactHooks,q=htm.bind(WK),E=null,g=null,C=null,o=0,_=null,k=null,KK=new Map;function s(N){if(typeof crypto<"u"&&typeof crypto.randomUUID==="function")return`${N}-${crypto.randomUUID()}`;return`${N}-${Date.now()}-${Math.random().toString(36).slice(2,11)}`}var R={grip:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="9" cy="5" r="1.5"/><circle cx="15" cy="5" r="1.5"/><circle cx="9" cy="12" r="1.5"/><circle cx="15" cy="12" r="1.5"/><circle cx="9" cy="19" r="1.5"/><circle cx="15" cy="19" r="1.5"/></svg>`,plus:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,plusCircle:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,trash:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,archive:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="5" rx="1"/><path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8"/><path d="M10 12h4"/></svg>`,restore:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>`,moreVertical:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><circle cx="12" cy="5" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="12" cy="19" r="2"/></svg>`,check:q`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,x:q`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`};function XK(N){if(!N.startsWith(`---
`))return N;let K=N.indexOf(`
---
`,4);return K===-1?N:N.slice(K+5)}function YK(N){let K=N.indexOf("%% kanban:settings");if(K===-1)return{settings:{},content:N};let J=N.indexOf("```",K);if(J===-1)return{settings:{},content:N};let Y=N.indexOf("```",J+3);if(Y===-1)return{settings:{},content:N};let W=N.slice(J+3,Y).trim(),Z={};try{Z=JSON.parse(W)}catch{}let F=N.indexOf("%%",Y+3),X=F===-1?Y+3:F+2,V=`${N.slice(0,K).trimEnd()}
${N.slice(X).trimStart()}`.trim();return{settings:Z,content:V}}function i(N){if(N.startsWith("\\#")||N.startsWith("\\---"))return N;if(N.startsWith("#")||N.startsWith("---"))return`\\${N}`;return N}function n(N){if(N.startsWith("\\#")||N.startsWith("\\---"))return N.slice(1);return N}function ZK(N){return String(N||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function $K(N){let K=String(N||"").trim();if(!K)return"#";if(K.startsWith("#")||K.startsWith("/"))return K;try{let J=new URL(K,window.location.origin);if(["http:","https:","mailto:","tel:"].includes(J.protocol))return J.toString()}catch{}return"#"}function NK(N){return N.replace(/\n/g,"<br>")}function jK(N){let K=String(N||""),J=KK.get(K);if(J)return J;let Y=ZK(K),W=NK(Y),Z=globalThis?.marked;try{if(Z?.parse)W=String(Z.parse(Y,{gfm:!0,breaks:!0,headerIds:!1,mangle:!1})||"")}catch{W=NK(Y)}return W=W.replace(/<a\s+([^>]*?)href=(['"])(.*?)\2([^>]*)>/gi,(F,X,V,P,y)=>{let O=$K(P);return`<a ${X}href=${V}${O}${V}${y} target="_blank" rel="noopener noreferrer">`}),KK.set(K,W),W}function GK(N){let K={lanes:[],archive:[],settings:{}},J=XK(N),Y=YK(J);K.settings=Y.settings,J=Y.content;let W=J.split(/\n---\n/);if(K.lanes=JK(W[0]),W.length>1){let Z=W.slice(1).join(`
---
`),X=JK(Z).find((V)=>V.title.toLowerCase()==="archive");if(X)K.archive=X.cards}return K}function JK(N){let K=[],J=N.split(/(?=^## )/gm).filter((Y)=>Y.trim());for(let Y of J){let W=Y.split(`
`),Z=W[0].match(/^## (.+)$/);if(!Z)continue;let F={id:s("lane"),title:Z[1].trim(),cards:[]},X=null,V="";for(let P=1;P<W.length;P++){let y=W[P],O=y.match(/^- \[(.)\] (.*)$/);if(O){if(X)X.title=V.trim(),F.cards.push(X);X={id:s("card"),title:n(O[2]),checkChar:O[1],checked:O[1]!==" "},V=n(O[2])}else if(X&&y.match(/^\s+\S/))V+=`
`+n(y.replace(/^\s+/,""))}if(X)X.title=V.trim(),F.cards.push(X);K.push(F)}return K}function d(N){let K=["---","","kanban-plugin: board","","---",""];for(let J of N.lanes){K.push(`## ${J.title}`,"");for(let Y of J.cards){let W=`[${Y.checked?Y.checkChar!==" "?Y.checkChar:"x":" "}]`,Z=Y.title.split(`
`);K.push(`- ${W} ${i(Z[0])}`);for(let F=1;F<Z.length;F++)K.push(`  ${i(Z[F])}`)}K.push("")}if(N.archive.length>0){K.push("---","","## Archive","");for(let J of N.archive){let Y=J.title.split(`
`);K.push(`- [${J.checked?"x":" "}] ${i(Y[0])}`);for(let W=1;W<Y.length;W++)K.push(`  ${i(Y[W])}`)}K.push("")}if(Object.keys(N.settings).length>0)K.push("%% kanban:settings","```",JSON.stringify(N.settings),"```","%%");return K.join(`
`)}function HK({checked:N,onChange:K}){return q`
    <div class="kanban-plugin__item-prefix-button-wrapper">
      <button class="kanban-plugin__item-checkbox ${N?"is-checked":""}"
        onClick=${(J)=>{J.stopPropagation(),K()}}>
        ${N?R.check:""}
      </button>
    </div>`}function FK({onArchive:N,isEditing:K,onCancelEdit:J}){return q`
    <div class="kanban-plugin__item-postfix-button-wrapper">
      ${K?q`
        <button class="kanban-plugin__item-postfix-button is-enabled"
          onClick=${(Y)=>{Y.stopPropagation(),J()}} title="Cancel">${R.x}</button>
      `:q`
        <button class="kanban-plugin__item-postfix-button"
          onClick=${(Y)=>{Y.stopPropagation(),N()}} title="Archive">${R.archive}</button>
      `}
    </div>`}function PK({card:N,laneId:K,cardIndex:J,onUpdate:Y,onDelete:W,onArchive:Z,onMoveCard:F}){let[X,V]=z(!1),[P,y]=z(N.title),[O,B]=z(null),U=l(null);h(()=>{if(X&&U.current)U.current.focus(),U.current.setSelectionRange(U.current.value.length,U.current.value.length),U.current.style.height="auto",U.current.style.height=U.current.scrollHeight+"px"},[X]);let v=(Q)=>{_={card:N,fromLaneId:K,fromIndex:J},Q.dataTransfer.effectAllowed="move",Q.dataTransfer.setData("text/plain",N.id),setTimeout(()=>{Q.target.classList.add("is-dragging")},0)},x=(Q)=>{_=null,B(null),Q.target.classList.remove("is-dragging")},m=(Q)=>{let G=Q.currentTarget.getBoundingClientRect();B(Q.clientY>=G.top+G.height/2?"after":"before")},I=(Q)=>{if(!_||X)return;Q.preventDefault(),Q.stopPropagation(),Q.dataTransfer.dropEffect="move",m(Q)},p=(Q)=>{let G=Q.currentTarget.getBoundingClientRect();if(Q.clientX<G.left||Q.clientX>G.right||Q.clientY<G.top||Q.clientY>G.bottom)B(null)},M=(Q)=>{if(!_||X)return;Q.preventDefault(),Q.stopPropagation();let G=Q.currentTarget.getBoundingClientRect(),j=Q.clientY>=G.top+G.height/2;F(_.card,_.fromLaneId,K,J+(j?1:0)),B(null),_=null},u=()=>{Y({...N,checked:!N.checked,checkChar:N.checked?" ":"x"})},S=()=>{if(P.trim())Y({...N,title:P.trim()});V(!1)},A=(Q)=>{if(Q.key==="Enter"&&!Q.shiftKey)Q.preventDefault(),S();else if(Q.key==="Escape")y(N.title),V(!1)},b=(Q)=>{y(Q.target.value),Q.target.style.height="auto",Q.target.style.height=Q.target.scrollHeight+"px"},D=()=>{y(N.title),V(!1)};return q`
    <div class="kanban-plugin__item-wrapper ${O?`is-drop-${O}`:""}"
      onDragOver=${I}
      onDragLeave=${p}
      onDrop=${M}>
      <div class="kanban-plugin__item ${N.checked?"is-complete":""} ${X?"is-editing":""}"
        draggable=${!X}
        onKeyDown=${(Q)=>{if((Q.ctrlKey||Q.metaKey)&&Q.key.toLowerCase()==="e")Q.preventDefault(),V(!0);if((Q.ctrlKey||Q.metaKey)&&Q.key.toLowerCase()==="d")Q.preventDefault(),W(N);if((Q.ctrlKey||Q.metaKey)&&Q.key.toLowerCase()==="a")Q.preventDefault(),Z(N)}}
        onDragStart=${v} onDragEnd=${x}
        onDblClick=${()=>!X&&V(!0)} tabindex="0">
        <div class="kanban-plugin__item-content-wrapper">
          <div class="kanban-plugin__item-title-wrapper">
            <${HK} checked=${N.checked} onChange=${u} />
            ${X?q`
              <textarea ref=${U} class="kanban-plugin__item-edit-textarea"
                value=${P} onInput=${b}
                onBlur=${()=>{if(X)S()}}
                onKeyDown=${A} />
            `:q`<div class="kanban-plugin__item-title kanban-plugin__item-markdown" dangerouslySetInnerHTML=${{__html:jK(N.title)}}></div>`}
            <${FK} isEditing=${X}
              onArchive=${()=>Z(N)} onCancelEdit=${D} />
          </div>
        </div>
      </div>
    </div>`}function qK({onAdd:N,onCancel:K}){let[J,Y]=z(""),W=l(null);h(()=>{W.current?.focus()},[]);let Z=()=>{if(J.trim())N(J.trim()),Y("")};return q`
    <div class="kanban-plugin__item-form">
      <div class="kanban-plugin__item-input-wrapper">
        <textarea ref=${W} placeholder="Card title..." value=${J}
          onInput=${(X)=>Y(X.target.value)} onKeyDown=${(X)=>{if(X.key==="Enter"&&!X.shiftKey)X.preventDefault(),Z();else if(X.key==="Escape")K()}} rows="2" />
      </div>
      <div class="kanban-plugin__item-input-actions">
        <button class="kanban-plugin__item-action-add" onClick=${Z}>Add card</button>
        <button class="kanban-plugin__item-action-cancel" onClick=${K}>Cancel</button>
      </div>
    </div>`}function OK({lane:N,laneIndex:K,onUpdate:J,onDelete:Y,onAddCard:W,onUpdateCard:Z,onDeleteCard:F,onArchiveCard:X,onMoveCard:V,onMoveLane:P}){let[y,O]=z(!1),[B,U]=z(N.title),[v,x]=z(!1),[m,I]=z(!1),[p,M]=z(!1),[u,S]=z(!1),A=l(null);h(()=>{if(y&&A.current)A.current.focus(),A.current.select()},[y]);let b=($)=>{if($.preventDefault(),_)$.dataTransfer.dropEffect="move",I(!0);if(k)$.dataTransfer.dropEffect="move",M(!0)},D=($)=>{let T=$.currentTarget.getBoundingClientRect();if($.clientX<T.left||$.clientX>T.right||$.clientY<T.top||$.clientY>T.bottom)I(!1),M(!1)},Q=($)=>{if($.preventDefault(),I(!1),M(!1),_)V(_.card,_.fromLaneId,N.id);if(k&&k.laneId!==N.id)P(k.laneId,N.id);_=null,k=null},G=($)=>{k={laneId:N.id,fromIndex:K},$.dataTransfer.effectAllowed="move",$.dataTransfer.setData("text/plain",N.id),S(!0)},j=()=>{k=null,M(!1),S(!1)},H=()=>{if(B.trim())J({...N,title:B.trim()});O(!1)},f=($)=>{W(N.id,$),x(!1)};return q`
    <div class="kanban-plugin__lane-wrapper ${p?"is-lane-drop-target":""} ${u?"is-lane-dragging":""}"
      onDragOver=${b}
      onDragLeave=${D}
      onDrop=${Q}>
      <div class="kanban-plugin__lane ${m?"is-dropping":""}">
        <div class="kanban-plugin__lane-header-wrapper">
          <div
            class="kanban-plugin__lane-grip"
            draggable=${!y&&!v}
            onDragStart=${G}
            onDragEnd=${j}
            title="Drag lane"
          >${R.grip}</div>
          <div class="kanban-plugin__lane-title">
            ${y?q`
              <input ref=${A} class="kanban-plugin__lane-title-input" value=${B}
                onInput=${($)=>U($.target.value)}
                onBlur=${()=>{if(y)H()}}
                onKeyDown=${($)=>{if($.key==="Enter")H();if($.key==="Escape")U(N.title),O(!1)}} />
            `:q`
              <div class="kanban-plugin__lane-title-text" onDblClick=${()=>O(!0)} title=${N.title}>${N.title}</div>
            `}
          </div>
          <div class="kanban-plugin__lane-settings-button-wrapper">
            <button class="kanban-plugin__lane-settings-button" onClick=${()=>x(!0)} title="Add card">${R.plusCircle}</button>
          </div>
        </div>
        <div class="kanban-plugin__lane-items">
          ${N.cards.map(($,T)=>q`
            <${PK} key=${$.id} card=${$} laneId=${N.id} cardIndex=${T}
              onUpdate=${(c)=>Z(N.id,c)}
              onDelete=${(c)=>F(N.id,c)}
              onArchive=${X}
              onMoveCard=${V} />`)}
        </div>
        ${v?q`<${qK} onAdd=${f} onCancel=${()=>x(!1)} />`:null}
      </div>
    </div>`}function VK({onAdd:N,onCancel:K}){let[J,Y]=z(""),W=l(null);h(()=>{W.current?.focus()},[]);let Z=()=>{if(J.trim())N(J.trim())};return q`
    <div class="kanban-plugin__lane-form-wrapper">
      <input ref=${W} class="kanban-plugin__lane-input" placeholder="Enter lane title..." value=${J}
        onInput=${(F)=>Y(F.target.value)}
        onKeyDown=${(F)=>{if(F.key==="Enter")F.preventDefault(),Z();else if(F.key==="Escape")K()}} />
      <div class="kanban-plugin__lane-input-actions">
        <button class="kanban-plugin__lane-action-add" onClick=${Z}>Add lane</button>
        <button class="kanban-plugin__lane-action-cancel" onClick=${K}>Cancel</button>
      </div>
    </div>`}function yK({cards:N,onRestore:K}){let[J,Y]=z(!0);if(N.length===0)return null;return q`
    <div class="kanban-plugin__archive">
      <div class="kanban-plugin__archive-header">
        <h3>${R.archive} Archive (${N.length})</h3>
        <button class="kanban-plugin__archive-toggle" onClick=${()=>Y(!J)}>${J?"Hide":"Show"}</button>
      </div>
      ${J&&q`
        <div class="kanban-plugin__archive-cards">
          ${N.map((W)=>q`
            <div class="kanban-plugin__archive-card" key=${W.id}>
              <span class="kanban-plugin__archive-card-title">${W.title.split(`
`)[0]}</span>
              <button onClick=${()=>K(W)} title="Restore">${R.restore}</button>
            </div>`)}
        </div>`}
    </div>`}function L(N){let K=String(N?.title||"").split(`
`)[0].trim();if(!K)return"card";return K.length>36?`${K.slice(0,35)}…`:K}function w(N){let K=String(N?.title||"").trim();if(!K)return"lane";return K.length>28?`${K.slice(0,27)}…`:K}function UK({initialContent:N}){let[K,J]=z(()=>GK(N??"")),[Y,W]=z(!1),[Z,F]=z([]),[X,V]=z([]),[P,y]=z(o);h(()=>{let G=setInterval(()=>{if(o!==P){if(y(o),C!==null)J(GK(C)),C=null}},100);return()=>clearInterval(G)},[P]);let O=r((G,j="Updated board")=>{J(G),F((H)=>K?[...H,{board:K,label:j}]:H),V([]),g?.(d(G))},[K]),B=r(()=>{if(!K||Z.length===0)return;let G=Z[Z.length-1];F(Z.slice(0,-1)),V((j)=>[...j,{board:K,label:G.label}]),J(G.board),g?.(d(G.board))},[K,Z]),U=r(()=>{if(!K||X.length===0)return;let G=X[X.length-1];V(X.slice(0,-1)),F((j)=>[...j,{board:K,label:G.label}]),J(G.board),g?.(d(G.board))},[K,X]);h(()=>{let G=E;if(!G)return;let j=(H)=>{if(!(H.ctrlKey||H.metaKey))return;if(H.key.toLowerCase()==="z")H.preventDefault(),H.shiftKey?U():B();else if(H.key.toLowerCase()==="y")H.preventDefault(),U()};return G.addEventListener("keydown",j),()=>G.removeEventListener("keydown",j)},[B,U]);let v=(G)=>{if(!K)return;O({...K,lanes:[...K.lanes,{id:s("lane"),title:G,cards:[]}]},`Added lane “${w({id:"",title:G,cards:[]})}”`),W(!1)},x=(G)=>{if(!K)return;O({...K,lanes:K.lanes.map((j)=>j.id===G.id?G:j)},`Updated lane “${w(G)}”`)},m=(G)=>{if(!K)return;O({...K,lanes:K.lanes.filter((j)=>j.id!==G.id)},`Deleted lane “${w(G)}”`)},I=(G,j)=>{if(!K)return;let H=K.lanes.find((T)=>T.id===G)||null,f=K.lanes.find((T)=>T.id===j)||null,$=a(K,{fromLaneId:G,toLaneId:j});if($===K)return;O($,`Moved lane “${w(H)}” before “${w(f)}”`)},p=(G,j)=>{if(!K)return;let H=K.lanes.find(($)=>$.id===G)||null,f={id:s("card"),title:j,checked:!1,checkChar:" "};O({...K,lanes:K.lanes.map(($)=>$.id===G?{...$,cards:[...$.cards,f]}:$)},`Added card to “${w(H)}”`)},M=(G,j)=>{if(!K)return;let H=K.lanes.find((f)=>f.id===G)||null;O({...K,lanes:K.lanes.map((f)=>f.id===G?{...f,cards:f.cards.map(($)=>$.id===j.id?j:$)}:f)},`Updated “${L(j)}” in “${w(H)}”`)},u=(G,j)=>{if(!K)return;let H=K.lanes.find((f)=>f.id===G)||null;O({...K,lanes:K.lanes.map((f)=>f.id===G?{...f,cards:f.cards.filter(($)=>$.id!==j.id)}:f)},`Deleted “${L(j)}” from “${w(H)}”`)},S=(G)=>{if(!K)return;O({...K,lanes:K.lanes.map((j)=>({...j,cards:j.cards.filter((H)=>H.id!==G.id)})),archive:[...K.archive,{...G,checked:!0}]},`Archived “${L(G)}”`)},A=(G,j,H,f)=>{if(!K)return;let $=K.lanes.find((QK)=>QK.id===H)||null,T=t(K,{cardId:G.id,fromLaneId:j,toLaneId:H,toIndex:f});if(T===K)return;O(T,`${j===H?"Reordered":"Moved"} “${L(G)}” in “${w($)}”`)},b=(G)=>{if(!K)return;if(K.lanes.length===0){O({...K,lanes:[{id:s("lane"),title:"Restored",cards:[{...G,checked:!1}]}],archive:K.archive.filter((H)=>H.id!==G.id)},`Restored “${L(G)}”`);return}let j=K.lanes[0];O({...K,lanes:K.lanes.map((H)=>H.id===j.id?{...H,cards:[...H.cards,{...G,checked:!1}]}:H),archive:K.archive.filter((H)=>H.id!==G.id)},`Restored “${L(G)}” to “${w(j)}”`)};if(!K)return q`<div class="loading">Loading...</div>`;let D=Z.length>0?Z[Z.length-1]:null,Q=X.length>0?X[X.length-1]:null;return q`
    <div class="kanban-plugin" tabindex="-1">
      <div class="kanban-plugin__search-wrapper">
        <button onClick=${()=>W(!0)}>${R.plus} Add lane</button>
        <button class="secondary" onClick=${B} disabled=${Z.length===0} title=${D?`Undo: ${D.label} (Ctrl+Z)`:"Undo (Ctrl+Z)"}>Undo</button>
        <button class="secondary" onClick=${U} disabled=${X.length===0} title=${Q?`Redo: ${Q.label} (Ctrl+Y)`:"Redo (Ctrl+Y)"}>Redo</button>
        ${D&&q`<span class="kanban-plugin__history-note" title=${D.label}>Last change: ${D.label}</span>`}
      </div>
      <div class="kanban-plugin__board"><div>
        ${K.lanes.map((G,j)=>q`
          <${OK} key=${G.id} lane=${G} laneIndex=${j} onUpdate=${x} onDelete=${m}
            onAddCard=${p} onUpdateCard=${M} onDeleteCard=${u}
            onArchiveCard=${S} onMoveCard=${A} onMoveLane=${I} />`)}
        ${Y&&q`<${VK} onAdd=${v} onCancel=${()=>W(!1)} />`}
      </div></div>
      <${yK} cards=${K.archive} onRestore=${b} />
    </div>`}window.__kanbanEditor={mount(N,K){if(E=N,g=K.onEdit,_=null,C=null,!K.isDark)N.classList.add("light");e(q`<${UK} initialContent=${K.content} />`,N)},update(N){C=N,o++},setTheme(N){E?.classList.toggle("light",!N)},destroy(){if(E)e(null,E);E=null,g=null,C=null,_=null}};})();
