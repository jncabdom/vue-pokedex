(function(t){function e(e){for(var o,i,s=e[0],u=e[1],c=e[2],l=0,f=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);p&&p(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var p=u;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"05ae":function(t,e,n){},2639:function(t,e,n){"use strict";n("821c")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Pokedex")],1)},a=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"pokedex"},[n("div",{staticClass:"pokedex-outside"},[n("div",{staticClass:"pokedex-inside"},[n("Pokemon",{staticClass:"pokemon",attrs:{pokemonId:t.$route.params.id}})],1),n("div",{staticClass:"button-holder"},[n("router-link",{attrs:{to:t.previousPoke,tag:"button"}},[t._v("Previous")]),n("router-link",{attrs:{to:t.nextPoke,tag:"button"}},[t._v("Next")])],1)])])])},s=[],u=(n("d3b7"),n("25f0"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pokemon"},[n("h1",[t._v(t._s(t.pokeName))]),n("img",{attrs:{src:t.sprite}})])}),c=[],p=(n("b0c0"),n("fb6a"),"https://pokeapi.co/api/v2/pokemon/"),l=function(t){return fetch(p+t).then((function(t){return t.json()})).then((function(t){var e={};return e.name=t.species.name.charAt(0).toUpperCase()+t.species.name.slice(1),e.sprite=t.sprites.front_default,console.log(e.sprite),e}))},f={name:"Pokemon",mounted:function(){this.loadData()},data:function(){return{pokeName:"",sprite:""}},props:{pokemonId:{type:String,default:"1",validator:function(t){return parseInt(t)>=1&&parseInt(t)<=151}}},methods:{loadData:function(){var t=this;l(this.pokemonId).then((function(e){t.pokeName="No. "+t.pokemonId+": "+e.name,t.sprite=e.sprite}))}},watch:{$route:function(){this.loadData()}}},d=f,m=(n("2639"),n("2877")),h=Object(m["a"])(d,u,c,!1,null,"57caa74f",null),v=h.exports,k={name:"Pokedex",computed:{previousPoke:function(){return this.$route.params.id>this.minPoke?(parseInt(this.$route.params.id)-1).toString():this.minPoke.toString()},nextPoke:function(){return this.$route.params.id<this.maxPoke?(parseInt(this.$route.params.id)+1).toString():this.maxPoke.toString()}},data:function(){return{minPoke:1,maxPoke:151}},components:{Pokemon:v}},b=k,P=(n("8574"),Object(m["a"])(b,i,s,!1,null,"6f219152",null)),x=P.exports,g={name:"App",components:{Pokedex:x}},y=g,_=(n("034f"),Object(m["a"])(y,r,a,!1,null,null,null)),O=_.exports,j=n("8c4f");o["a"].use(j["a"]);var w=[{path:"/:id",name:"pokedex",component:x}],S=new j["a"]({routes:w}),$=S;o["a"].config.productionTip=!1,new o["a"]({router:$,render:function(t){return t(O)}}).$mount("#app")},"821c":function(t,e,n){},8574:function(t,e,n){"use strict";n("05ae")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.eb999a91.js.map