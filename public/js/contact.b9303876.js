(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contact"],{3784:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service"},[a("header",{staticClass:"service__header"},[a("router-link",{staticClass:"service__link",attrs:{to:"/"}},[a("img",{attrs:{src:o("491c"),alt:"iconocasa"}}),a("p",[t._v("inicio")])]),a("router-link",{staticClass:"service__link",attrs:{to:"/login"}},[a("img",{attrs:{src:o("7833"),alt:"iconopersona"}}),a("p",[t._v("inicio sesión")])])],1),a("h1",{staticClass:"title-custom"},[t._v("¡Puedes Contactarnos!")]),a("div",{staticClass:"service__content"},[t._m(0),a("form",{staticClass:"form"},[a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Teléfono")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactanos.telefono,expression:"contactanos.telefono"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.contactanos.telefono},on:{input:function(e){e.target.composing||t.$set(t.contactanos,"telefono",e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Correo electrónico")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactanos.correo,expression:"contactanos.correo"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.contactanos.correo},on:{input:function(e){e.target.composing||t.$set(t.contactanos,"correo",e.target.value)}}})]),a("div",{staticClass:"field"},[a("label",{staticClass:"label"},[t._v("Nombres")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contactanos.nombres,expression:"contactanos.nombres"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.contactanos.nombres},on:{input:function(e){e.target.composing||t.$set(t.contactanos,"nombres",e.target.value)}}})]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{"&click":function(e){return t.enviarInfo.apply(null,arguments)}}},[t._v("Enviar")])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"service__people"},[a("img",{attrs:{src:o("bcce"),alt:"people-contact"}})])}],s=o("bc3a"),c=o.n(s),r=o("3d20"),i=o.n(r),l={name:"Contactanos",data:function(){return{contactanos:{telefono:null,correo:null,nombres:null}}},methods:{enviarInfo:function(){var t=this,e=this,o={headers:{token:this.$store.state.token}};console.log(this.contactanos),c.a.post("contacto/guardar",{telefono:e.contactanos.telefono,correo:e.contactanos.correo,nombres:e.contactanos.nombres},o).then((function(e){console.log("Contacto enviado"),console.log(e),t.contactanos.telefono="",t.contactanos.correo="",t.contactanos.nombres="",i.a.fire({position:"top-center",icon:"success",title:"Enviado",showConfirmButton:!1,timer:1500})})).catch((function(t){console.log(t)}))}}},d=l,u=(o("f9e9"),o("2877")),v=Object(u["a"])(d,a,n,!1,null,"be58e890",null);e["default"]=v.exports},"491c":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAiCAYAAAAge+tMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJoSURBVHgB7Zc9aBRBFIBfvN07TYgKIogYEAVBFAWL2GklFkFLf8BGQUEkSECwVTCNhYiIFiI2NlpcESRNxEJTaWGlCII/WFio0Qsoe7c/47fsHu6uexd2bi4nuB98zGXf7M7L7JthVqSkpOT/QSk1hFanWLLVZYUYhoTGad5ig99XM7FzNB6tT+vS3pV/ARI5iIsqzTW04/jNZMDzvBnRxNiMk8ckTR1HM6EpvE+8kr2nUqmsFE0s6ZG4Vs/gdfkzEbM4j9MYxo+0u2fu9WVQMPjlTGnM41rcgGfRScSCZMcgCB7JIGDs6UzSN3AUb+En3Ib7c+q+zZwsJwy4Gm+rvxfhGnySuPYd9+Ju/JiT+PLNOIMN40zm9U/iZnyVk1y47Z3CHfh1IInHZfA4k9QUbsUPqjuncQu+U+k3Mi79hAHW4cvEoGHdnnBddx+LbFEtjY+XcAzfJK7/wGPSD1RUBq8Tg33BCdypOi+8TlzB9fg0c/2imIQHrlLphfUZt+Mhld7qivAQR7CeuX5cTKGiHeRF/OD3KtriTqremVNR+bWPAeEi3yMm4YGbcBY34gFljgcqOkmG5XNB+onjOBPKECxs7e2w8CGrVqtVxBBDIJr0fMjKIXzljfh3wKyet217V15HTodV0aRw4r7vewzYrcs9JnKh/Uez2TxMk5s41dIUTQqXCkkXer3VarVjf/5BWzTR+ZAwVuMSndW1MP7NWQQ+3RzRRCfxQAxhWZb2xOnc+G2JeOr1t1qtbn0XRBOd7fA5HsUxiZL8hcPoxvFGsjOL8w7NM/yJIxjuJOGEhd+fdSkpKcnlN9YAK8+CJoIoAAAAAElFTkSuQmCC"},7075:function(t,e,o){"use strict";o.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fondo"},[a("div",[a("button",{staticClass:"fecha",on:{click:t.atras}},[a("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")])],1),a("button",{staticClass:"iniciosesion",on:{click:t.cerrar}},[a("img",{staticClass:"iconopersona",attrs:{src:o("7833"),alt:""}}),a("h2",{staticClass:"letrasesion"},[t._v("Cerrar sesión")])])]),a("div",{staticClass:"user"},[a("v-toolbar-title",{staticClass:"contactossss"},[t._v("Contactos")])],1),a("div",{staticClass:"cuadro"},[a("div",{staticClass:"container"},[a("v-data-table",{attrs:{"items-per-page":5,headers:t.headers,items:t.contacto,search:t.search,id:"azul"},scopedSlots:t._u([{key:"top",fn:function(){return[a("v-toolbar",{staticClass:"fondocuadro",attrs:{flat:""}},[a("v-btn",{staticClass:"impresora",on:{click:function(e){return t.imprimir()}}},[a("v-icon",[t._v("mdi-printer")])],1),a("v-spacer"),a("div",{staticClass:"buscar"},[a("v-text-field",{staticClass:"mt-3",attrs:{dark:"","prepend-icon":"mdi-magnify",label:"Búsqueda por teléfono y nombre","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Telefono"},model:{value:t.editedItem.telefono,callback:function(e){t.$set(t.editedItem,"telefono",e)},expression:"editedItem.telefono"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Correo"},model:{value:t.editedItem.correo,callback:function(e){t.$set(t.editedItem,"correo",e)},expression:"editedItem.correo"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nombres"},model:{value:t.editedItem.nombres,callback:function(e){t.$set(t.editedItem,"nombres",e)},expression:"editedItem.nombres"}})],1)],1)],1)],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"}},[a("v-card",[1==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.Accion?a("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),a("v-card-text",[t._v(" Estás a punto de "),1==t.Accion?a("span",[t._v("activar ")]):t._e(),2==t.Accion?a("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.Nombre)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(e){var o=e.item;return[o.estado?[a("v-icon",{attrs:{color:"red darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,o)}}},[t._v(" mdi-block-helper ")])]:[a("v-icon",{attrs:{color:"green darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,o)}}},[t._v(" mdi-check ")])]]}},{key:"item.estado",fn:function(e){var o=e.item;return[o.estado?a("div",[a("span",{staticClass:"green--text"},[t._v("Activo")])]):a("div",[a("span",{staticClass:"red--text"},[t._v("Inactivo")])])]}},{key:"no-data",fn:function(){},proxy:!0}],null,!0)})],1)])])},n=[],s=(o("d81d"),o("bc3a")),c=o.n(s),r=o("3d20"),i=o.n(r),l=o("8baf"),d=(o("0da4"),{data:function(){return{search:"",contacto:[],dialog:!1,headers:[{text:"Teléfono",value:"telefono"},{text:"Correo",value:"correo"},{text:"Nombres",value:"nombres"},{text:"Enviadas",value:"opciones"}],editedItem:{telefono:"",correo:"",nombres:"",estado:0}}},created:function(){this.listarContactos()},methods:{listarContactos:function(){var t=this;console.log(this.$store.state.token);var e={headers:{token:this.$store.state.token}};c.a.get("contacto",e).then((function(e){t.$store.state.token,console.log(e.data.contacto),t.contacto=e.data.contacto})).catch((function(t){console.log(t)}))},activarDesactivarMostrar:function(t,e){var o=e._id;if(console.log(t),2==t){console.log(o);var a=this,n={headers:{token:this.$store.state.token}};c.a.put("contacto/desactivar/".concat(o),{estado:0},n).then((function(){a.listarContactos()})).catch((function(t){console.log(t)}))}else if(1==t){console.log(o);var s=this,r={headers:{token:this.$store.state.token}};c.a.put("contacto/activar/".concat(o),{estado:1},r).then((function(){s.listarContactos()})).catch((function(t){console.log(t)}))}},cerrar:function(){i.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/")},atras:function(){this.$router.push("/menu"),this.$store.dispatch("setToken",this.$store.state.token)},imprimir:function(){var t=[{title:"Telefono",dataKey:"telefono"},{title:"Correo",dataKey:"correo"},{title:"Nombres",dataKey:"nombres"}],e=[];this.contacto.map((function(t){e.push({telefono:t.telefono,correo:t.correo,nombres:t.nombres})}));var o=new l["default"]("p","pt");o.autoTable(t,e,{margin:{top:60},addPageContent:function(){o.text("Lista de Contactos",40,30)}}),o.save("Contactos.pdf")}}}),u=d,v=(o("9f7b"),o("2877")),f=o("6544"),m=o.n(f),p=o("8336"),b=o("b0af"),h=o("99d9"),C=o("62ad"),A=o("a523"),k=o("8fea"),g=o("169a"),x=o("132d"),_=o("0fd9"),I=o("2fa4"),T=o("8654"),V=o("71d9"),w=o("2a7f"),B=Object(v["a"])(u,a,n,!1,null,null,null);e["default"]=B.exports;m()(B,{VBtn:p["a"],VCard:b["a"],VCardActions:h["a"],VCardText:h["b"],VCardTitle:h["c"],VCol:C["a"],VContainer:A["a"],VDataTable:k["a"],VDialog:g["a"],VIcon:x["a"],VRow:_["a"],VSpacer:I["a"],VTextField:T["a"],VToolbar:V["a"],VToolbarTitle:w["a"]})},"9f7b":function(t,e,o){"use strict";o("b23f")},b23f:function(t,e,o){},b733:function(t,e,o){},bcce:function(t,e,o){t.exports=o.p+"img/people-contact.9d759f15.svg"},f9e9:function(t,e,o){"use strict";o("b733")}}]);
//# sourceMappingURL=contact.b9303876.js.map