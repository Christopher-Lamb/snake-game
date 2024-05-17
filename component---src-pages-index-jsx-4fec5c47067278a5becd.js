"use strict";(self.webpackChunksnake_game=self.webpackChunksnake_game||[]).push([[230],{8374:function(e,t,r){r.r(t),r.d(t,{Head:function(){return P},default:function(){return G}});var a=r(7294);const n={id:crypto.randomUUID(),number:1,color:"#22c55e"},o={darkmode:!1,gameBoardColor:"#000",appleColor:"#ef4444",snakeHeadColor:"#16a34a",gameSpeed:"200",gridWidth:"16",gridHeight:"16",snakeSize:"25",snakeBody:[n]},c=(0,a.createContext)(null),l=(0,a.createContext)(null);function s(e){let{children:t}=e;const{0:r,1:n}=(0,a.useReducer)(u,o);return a.createElement(c.Provider,{value:r},a.createElement(l.Provider,{value:n},t))}function d(){return(0,a.useContext)(c)}const i=()=>(0,a.useContext)(l),u=(e,t)=>{switch(t.type){case"update-snakebody":return{...e,snakeBody:t.payload};case"update-settings":return{...t.payload,snakeBody:e.snakeBody};case"update-all":return{...t.payload};case"reset":return{...n};case"darkmode":return document.body.setAttribute("data-theme",t.payload),console.log(t.payload),{...e,darkmode:t.payload}}};var m=e=>{let{coords:t={x:100,y:100},color:r}=e;const n=d(),o={width:n.snakeSize+"px",height:n.snakeSize+"px",background:r||n.snakeHeadColor,top:t.y+"px",left:t.x+"px"};return a.createElement("div",{className:"absolute bg-[#45b800] z-[1]",style:o})};var f=e=>{let{prevCoords:t=[],length:r}=e;const{snakeBody:n}=d(),o=t.slice(1,r),c=()=>{let e=[];return n&&n.forEach((t=>{let{color:r,number:a}=t;for(let n=0;n<a;n++)e.push(r)})),e};return(0,a.useEffect)((()=>{c()}),[]),a.createElement("div",null,o.map(((e,t)=>{const r=c(),n=t%r.length;return a.createElement(m,{key:e.x+"-"+e.y+"-"+t,coords:e,color:r[n]})})))};const p={background:"#23232b",border:"1px solid #c4c4c4"},b={background:"white"};function h(e){let{score:t=0,onNewGame:r=(()=>{}),onSettings:n=(()=>{})}=e;const{0:o,1:c}=(0,a.useState)(0),{darkmode:l,...s}=d();(0,a.useEffect)((()=>{i()}),[]);const i=()=>{let e=localStorage.getItem("snake-highscore");Object.is(e,null)&&(localStorage.setItem("snake-highscore",JSON.stringify(t)),e=t);const r=JSON.parse(e);t>r?(localStorage.setItem("snake-highscore",JSON.stringify(t)),c(t)):c(r)};return a.createElement("div",{className:"absolute z-[100] w-[100%] max-w-sm shadow-2xl rounded py-8",style:l?p:b},a.createElement("div",{className:"grid grid-cols-2"},[["Score",t],["Highscore",o]].map((e=>{let[t,r]=e;return a.createElement("div",{className:"grid items-center justify-center",style:{color:l?"#c4c4c4":"black"},key:t},a.createElement("span",{className:"block text-center text-5xl"},r),a.createElement("span",{className:"block text-center text-3xl"},t))}))),a.createElement("div",{className:"grid gap-y-2 justify-center mt-8"},[["New Game",()=>r()],["Settings",()=>n()],["Clear Highscore",()=>{window.confirm("Are you sure you want to clear your highscore?")&&(localStorage.setItem("snake-highscore","0"),c("0"))}]].map((e=>{let[t,r]=e;return a.createElement("button",{key:t,className:"inline-block w-64 h-10 rounded text-white font-mono text-xl border-gray-500 border active:translate-y-px",style:{background:l?"#059669":"#10b981"},onClick:r},t)}))))}var k=r(5785);const g=[["#f8fafc","#f1f5f9","#cbd5e1","#94a3b8","#475569","#1e293b","#020617"],["#fca5a5","#f87171","#ef4444","#dc2626","#b91c1c","#991b1b","#7f1d1d"],["#fdba74","#fb923c","#f97316","#ea580c","#c2410c","#9a3412","#7c2d12"],["#fde047","#facc15","#eab308","#ca8a04","#a16207","#854d0e","#713f12"],["#86efac","#4ade80","#22c55e","#16a34a","#15803d","#166534","#14532d"],["#6ee7b7","#34d399","#10b981","#059669","#047857","#065f46","#064e3b"],["#5eead4","#2dd4bf","#14b8a6","#0d9488","#0f766e","#115e59","#134e4a"],["#93c5fd","#60a5fa","#3b82f6","#2563eb","#1d4ed8","#1e40af","#1e3a8a"],["#a5b4fc","#818cf8","#6366f1","#4f46e5","#4338ca","#3730a3","#312e81"],["#c4b5fd","#a78bfa","#8b5cf6","#7c3aed","#6d28d9","#5b21b6","#4c1d95"],["#d8b4fe","#c084fc","#a855f7","#9333ea","#7e22ce","#6b21a8","#581c87"],["#f9a8d4","#f472b6","#ec4899","#db2777","#be185d","#9d174d","#831843"],["#fda4af","#fb7185","#f43f5e","#e11d48","#be123c","#9f1239","#881337"]];function y(e){let{defaultColor:t="#f1f5f9",onColorSelect:r=(()=>{})}=e;const{0:n,1:o}=(0,a.useState)(t),{0:c,1:l}=(0,a.useState)(!1);return a.createElement("div",{className:"relative"},c&&a.createElement(x,{onColorSelect:e=>{o(e),l(!1),r(e)}}),a.createElement("div",{onClick:()=>l(!0),style:{background:n},className:"relative inline-block w-10 h-10 z-[103] border rounded drop-shadow-md cursor-pointer"}))}const x=e=>{let{onColorSelect:t=(()=>{})}=e;return a.createElement("div",{className:"absolute flex z-[104] drop-shadow-md hover:scale-100"},g.map(((e,r)=>a.createElement(v,{key:r,classNameArr:e,onColorSelect:t}))))},v=e=>{let{classNameArr:t=[],onColorSelect:r=(()=>{})}=e;return a.createElement("div",null,t.map((e=>a.createElement("button",{key:e,onClick:t=>{t.stopPropagation(),r(e)},style:{backgroundColor:e},className:"block w-10 h-10 hover:scale-125 cursor-pointer"}))))};var E=r(3750),C=r(1649);crypto.randomUUID();const w={color:"#c4c4c4",background:"#23232b",border:"1px solid #c4c4c4"},S={background:"white",color:"black"};function N(e){let{onClose:t=(()=>{})}=e;const r=i(),{snakeBody:n,...o}=d(),{0:c,1:l}=(0,a.useState)(n),{0:s,1:u}=(0,a.useState)({...o});return a.createElement("div",{className:"bg-black flex flex-col gap-y-3 absolute w-full max-w-lg z-[101] drop-shadow-md rounded p-6 ",style:{...s.darkmode?w:S,top:c.length>8?"0px":""}},a.createElement("div",{className:"relative w-full h-0 mx-[-12px]"},a.createElement(C.j7p,{size:"2rem",className:"absolute z-[103] left-full cursor-pointer",onClick:()=>{t({...s,snakeBodies:c}),localStorage.setItem("snake-settings",JSON.stringify({...s,snakeBody:c})),r({type:"update-all",payload:{...s,snakeBody:c}})}})),a.createElement("div",{className:"flex items-center gap-4 "},a.createElement("label",{htmlFor:"flexSwitchCheckDefault"},"Dark Mode"),a.createElement("input",{className:"mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",checked:s.darkmode,onChange:e=>(e=>{const t=e.target.checked;u((e=>({...s,darkmode:t}))),r({type:"darkmode",payload:t})})(e)})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Game Board Color:"),a.createElement(y,{defaultColor:s.gameBoardColor,onColorSelect:e=>u((t=>({...s,gameBoardColor:e})))})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Apple Color:"),a.createElement(y,{defaultColor:s.appleColor,onColorSelect:e=>u((t=>({...s,appleColor:e})))})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Snake Head Color:"),a.createElement(y,{defaultColor:s.snakeHeadColor,onColorSelect:e=>u((t=>({...s,snakeHeadColor:e})))})),a.createElement("div",{className:"grid gap-3"},a.createElement("span",{className:"flex items-center gap-4"},a.createElement("label",null,"Snake Pattern:"),a.createElement(_,{onClick:()=>{l((e=>[].concat((0,k.Z)(e),[{id:crypto.randomUUID(),number:1,color:"#f1f5f9"}])))}})),c.map((e=>{let{id:t,number:r,color:n}=e;return a.createElement(I,{key:t,defaultColor:n,defaultNumber:r,onChange:e=>{(e=>{const t=c.map((t=>t.id===e.id?{...t,number:e.number,color:e.color}:t));l(t)})({id:t,...e})},onDelete:()=>(e=>{const t=c.filter((t=>{let{id:r}=t;return r!==e}));l(t)})(t)})}))),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Game Speed in ms:"),a.createElement(L,{defaultNumber:s.gameSpeed,handleChange:e=>u((t=>({...s,gameSpeed:e})))})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Grid Width:"),a.createElement(L,{defaultNumber:s.gridWidth,handleChange:e=>u((t=>({...s,gridWidth:e})))})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Grid Height:"),a.createElement(L,{defaultNumber:s.gridHeight,handleChange:e=>u((t=>({...s,gridHeight:e})))})),a.createElement("div",{className:"flex items-center gap-4"},a.createElement("label",null,"Snake Size in px:"),a.createElement(L,{defaultNumber:s.snakeSize,handleChange:e=>u((t=>({...s,snakeSize:e})))})))}const _=e=>{let{onClick:t=(()=>{})}=e;return a.createElement("a",{className:"block bg-gray-100 w-8 h-8 rounded text-3xl text-gray-400 leading-none border cursor-pointer",onClick:()=>t()},a.createElement(E.L3d,null))},z=e=>{let{onClick:t=(()=>{})}=e;return a.createElement("a",{className:"block bg-gray-100 w-8 h-8 rounded text-3xl text-gray-400 leading-none border cursor-pointer",onClick:()=>t()},a.createElement(C.j7p,null))},I=e=>{let{defaultColor:t,defaultNumber:r,onChange:n=(()=>{}),onDelete:o=(()=>{})}=e;const{0:c,1:l}=(0,a.useState)(t),{0:s,1:d}=(0,a.useState)(r);return(0,a.useEffect)((()=>{n({color:c,number:s})}),[c,s]),a.createElement("div",{className:"flex items-center gap-2"},a.createElement(y,{defaultColor:c,onColorSelect:e=>l(e)}),a.createElement(D,{number:s,handleChange:e=>d(e)}),a.createElement(z,{onClick:o}))},D=e=>{let{number:t,handleChange:r}=e;const n=(0,a.useRef)();return a.createElement("input",{ref:n,defaultValue:t,min:"1",max:"99",onFocus:()=>{n.current.type="number",n.current.style.width="3.5rem"},onBlur:()=>{n.current.style.width="",n.current.type=""},onChange:e=>r(e.target.value),className:"w-10 h-10 drop-shadow-md border text-xl text-center text-black"})},L=e=>{let{defaultNumber:t,handleChange:r=(()=>{})}=e;const n=(0,a.useRef)();return a.createElement("input",{ref:n,defaultValue:t,min:"1",max:"9999",onFocus:()=>{n.current.type="number",n.current.style.width="4.5rem"},onBlur:()=>{n.current.style.width="",n.current.type=""},onChange:e=>r(e.target.value),className:"w-16 h-10 drop-shadow-md border text-xl text-center text-black"})},O={coord:{x:0,y:0},prevCoords:[],snakeLen:1,currentDirection:""};function B(e,t){return e.slice(0,t)}function H(e,t){let r={},a=[],n="";switch(t.type){case"Up":return n="Up",r={...e.coord,y:e.coord.y-t.increment},"Down"===e.currentDirection&&e.snakeLen>1&&(n="Down",r={...e.coord,y:e.coord.y+t.increment}),a=B([r].concat((0,k.Z)(e.prevCoords)),e.snakeLen),{...e,currentDirection:n,coord:r,prevCoords:a};case"Down":return n="Down",r={...e.coord,y:e.coord.y+t.increment},"Up"===e.currentDirection&&e.snakeLen>1&&(n="Up",r={...e.coord,y:e.coord.y-t.increment}),a=B([r].concat((0,k.Z)(e.prevCoords)),e.snakeLen),{...e,currentDirection:n,coord:r,prevCoords:a};case"Left":return n="Left",r={...e.coord,x:e.coord.x-t.increment},"Right"===e.currentDirection&&e.snakeLen>1&&(n="Right",r={...e.coord,x:e.coord.x+t.increment}),a=B([r].concat((0,k.Z)(e.prevCoords)),e.snakeLen),{...e,currentDirection:n,coord:r,prevCoords:a};case"Right":return n="Right",r={...e.coord,x:e.coord.x+t.increment},"Left"===e.currentDirection&&e.snakeLen>1&&(n="Left",r={...e.coord,x:e.coord.x-t.increment}),a=B([r].concat((0,k.Z)(e.prevCoords)),e.snakeLen),{...e,currentDirection:n,coord:r,prevCoords:a};case"add":return{...e,snakeLen:e.snakeLen+1};case"reset":return{coord:{x:0,y:0},prevCoords:[],snakeLen:1,currentDirection:""};default:return e}}var R=()=>{const{0:e,1:t}=(0,a.useReducer)(H,O),{coord:r,prevCoords:n,snakeLen:o}=e;return{coord:r,prevCoords:n,snakeLen:o,dispatch:t}};var U=e=>{let{coords:t={x:20,y:0}}=e;const r=d(),n={width:r.snakeSize+"px",height:r.snakeSize+"px",background:r.appleColor,top:t.y+"px",left:t.x+"px"};return a.createElement("div",{className:"absolute",style:n})};function j(e,t){void 0===t&&(t=[]);const r=e.x,a=e.y;let n=!1;return t.forEach((e=>{let{x:t,y:o}=e;t===r&&o===a&&(n=!0)})),n}const A=()=>{const{0:e,1:t}=(0,a.useState)(!0),{0:r,1:n}=(0,a.useState)(!1),{0:o,1:c}=(0,a.useState)({x:20,y:20}),{coord:l,prevCoords:s,snakeLen:u,dispatch:p}=R(),b=(0,a.useRef)(""),k=(0,a.useRef)(0),g=d(),y=i(),x=parseInt(g.gridWidth)*(parseInt(g.snakeSize)+2),v=parseInt(g.gridHeight)*(parseInt(g.snakeSize)+2);(0,a.useEffect)((()=>{window.addEventListener("keydown",(e=>C(e.key))),E();let e=JSON.parse(localStorage.getItem("snake-settings"));return e||(localStorage.setItem("snake-settings",JSON.stringify(g)),e=g),y({type:"update-all",payload:e}),()=>{window.removeEventListener("keydown",(e=>{}))}}),[]);const E=()=>{let e=0;const t=parseInt(g.gridWidth),r=parseInt(g.gridHeight),a=parseInt(g.snakeSize)+2;for(;;){e+=1;const n=Math.floor(Math.random()*t)*a,o=Math.floor(Math.random()*r)*a,l=j({x:n,y:o},s);if(e>100)break;if(!l){c({x:n,y:o});break}}};(0,a.useEffect)((()=>{(()=>{o.x===l.x&&o.y===l.y&&(p({type:"add"}),E()),(l.x<0||l.y<0||l.x>=x||l.y>=v)&&w();const e=s.slice(1,s.length);j(l,e)&&(clearInterval(k.current),w())})()}),[l,o,e,s]);const C=e=>{switch(e){case"ArrowUp":b.current="Up";break;case"ArrowDown":b.current="Down";break;case"ArrowLeft":b.current="Left";break;case"ArrowRight":b.current="Right"}},w=()=>{clearInterval(k.current),t(!0)},S=()=>{k.current=setInterval((()=>{switch(b.current){case"Up":p({type:"Up",increment:parseInt(g.snakeSize)+2});break;case"Down":p({type:"Down",increment:parseInt(g.snakeSize)+2});break;case"Left":p({type:"Left",increment:parseInt(g.snakeSize)+2});break;case"Right":p({type:"Right",increment:parseInt(g.snakeSize)+2})}}),parseInt(g.gameSpeed))};return a.createElement("main",{className:"flex relative justify-center items-center h-[100vh] ",style:{background:g.darkmode?"#151518":"#e8e8e8"}},r&&a.createElement(N,{onClose:e=>{n(!1)}}),e&&a.createElement(h,{score:u,onNewGame:()=>{clearInterval(k.current),p({type:"reset"}),b.current="",t(!1),S(),E()},onSettings:()=>n(!0)}),a.createElement("div",{style:{width:x+"px",height:v+"px",background:g.gameBoardColor},className:"relative border"},a.createElement(m,{coords:l}),a.createElement(f,{prevCoords:s,length:u}),a.createElement(U,{coords:o})))};function G(){return a.createElement(s,null,a.createElement(A,null))}const P=()=>a.createElement("title",null,"Snake Game")},4405:function(e,t,r){r.d(t,{w_:function(){return d}});var a=r(7294),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},o=a.createContext&&a.createContext(n),c=function(){return c=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},c.apply(this,arguments)},l=function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,c({key:t},e.attr),s(e.child))}))}function d(e){return function(t){return a.createElement(i,c({attr:c({},e.attr)},t),s(e.child))}}function i(e){var t=function(t){var r,n=e.attr,o=e.size,s=e.title,d=l(e,["attr","size","title"]),i=o||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",c({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,d,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:i,width:i,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==o?a.createElement(o.Consumer,null,(function(e){return t(e)})):t(n)}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-4fec5c47067278a5becd.js.map