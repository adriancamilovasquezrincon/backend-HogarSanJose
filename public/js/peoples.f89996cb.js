(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["peoples"],{1317:function(e,t,o){},"30f6":function(e,t,o){"use strict";o("1317")},af46:function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"fondo"},[a("div",[a("button",{staticClass:"fecha",on:{click:e.atras}},[a("v-icon",{attrs:{dark:"",left:""}},[e._v(" mdi-arrow-left ")])],1),a("button",{staticClass:"iniciosesion",on:{click:e.cerrar}},[a("img",{staticClass:"iconopersona",attrs:{src:o("7833"),alt:""}}),a("h2",{staticClass:"letrasesion"},[e._v("Cerrar sesión")])])]),a("div",{staticClass:"user"},[a("v-toolbar-title",{staticClass:"personasasas"},[e._v("Personas")])],1),a("div",{staticClass:"cuadro"},[a("div",{staticClass:"container"},[a("v-data-table",{attrs:{"items-per-page":5,headers:e.headers,items:e.persona,search:e.search,id:"azul"},scopedSlots:e._u([{key:"top",fn:function(){return[a("v-toolbar",{staticClass:"fondocuadro",attrs:{flat:""}},[a("v-btn",{staticClass:"impresora",on:{click:function(t){return e.imprimir()}}},[a("v-icon",[e._v("mdi-printer")])],1),a("v-spacer"),a("div",{staticClass:"buscar"},[a("v-text-field",{staticClass:"mt-3",attrs:{dark:"","prepend-icon":"mdi-magnify",label:"Búsqueda por tipo de Persona o número de documento","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),a("v-spacer"),a("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var o=t.on,i=t.attrs;return[a("v-btn",e._g(e._b({staticClass:"nuevo white--text mb-2",attrs:{color:"#266439"}},"v-btn",i,!1),o),[e._v(" Nuevo ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",[a("v-card-text",[a("v-container",[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Tipo de Persona"},model:{value:e.editedItem.tipoPersona,callback:function(t){e.$set(e.editedItem,"tipoPersona",t)},expression:"editedItem.tipoPersona"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Nit"},model:{value:e.editedItem.nit,callback:function(t){e.$set(e.editedItem,"nit",t)},expression:"editedItem.nit"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"numDocumento"},model:{value:e.editedItem.numDocumento,callback:function(t){e.$set(e.editedItem,"numDocumento",t)},expression:"editedItem.numDocumento"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"nombres"},model:{value:e.editedItem.nombres,callback:function(t){e.$set(e.editedItem,"nombres",t)},expression:"editedItem.nombres"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"apellidos"},model:{value:e.editedItem.apellidos,callback:function(t){e.$set(e.editedItem,"apellidos",t)},expression:"editedItem.apellidos"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"Teléfono"},model:{value:e.editedItem.telefono,callback:function(t){e.$set(e.editedItem,"telefono",t)},expression:"editedItem.telefono"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"correo"},model:{value:e.editedItem.correo,callback:function(t){e.$set(e.editedItem,"correo",t)},expression:"editedItem.correo"}})],1),a("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[a("v-text-field",{attrs:{label:"lugarNacimiento"},model:{value:e.editedItem.lugarNacimiento,callback:function(t){e.$set(e.editedItem,"lugarNacimiento",t)},expression:"editedItem.lugarNacimiento"}})],1)],1)],1)],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.cancelar}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:e.guardar}},[e._v(" Guardar ")])],1)],1)],1),a("v-dialog",{attrs:{"max-width":"290"}},[a("v-card",[1==e.Accion?a("v-card-title",{staticClass:"headline"},[e._v(" Activar Item ")]):e._e(),2==e.Accion?a("v-card-title",{staticClass:"headline"},[e._v(" Desactivar Item ")]):e._e(),a("v-card-text",[e._v(" Estás a punto de "),1==e.Accion?a("span",[e._v("activar ")]):e._e(),2==e.Accion?a("span",[e._v("desactivar ")]):e._e(),e._v(" el item "+e._s(e.Nombre)+" ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(t){return e.activarDesactivarCerrar()}}},[e._v(" Cancelar ")]),1==e.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(t){return e.activar()}}},[e._v(" Activar ")]):e._e(),2==e.Accion?a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(t){return e.desactivar()}}},[e._v(" Desactivar ")]):e._e()],1)],1)],1),a("v-dialog",{attrs:{"max-width":"500px"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Are you sure you want to delete this item?")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"blue darken-1"}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"blue darken-1"}},[e._v("OK")]),a("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(t){var o=t.item;return[a("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(t){return e.editarItem(o)}}},[e._v(" mdi-pencil ")]),o.estado?[a("v-icon",{attrs:{color:"red darken-2",small:""},on:{click:function(t){return e.activarDesactivarMostrar(2,o)}}},[e._v(" mdi-block-helper ")])]:[a("v-icon",{attrs:{color:"green darken-2",small:""},on:{click:function(t){return e.activarDesactivarMostrar(1,o)}}},[e._v(" mdi-check ")])],[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"pink"},on:{click:function(t){return e.eliminarPersona(o)}}},[e._v(" X ")])]]}},{key:"no-data",fn:function(){},proxy:!0}],null,!0)})],1)])])},i=[],s=(o("d81d"),o("bc3a")),n=o.n(s),r=o("3d20"),l=o.n(r),d=o("8baf"),c=(o("0da4"),{data:function(){return{search:"",persona:[],zb:0,dialog:!1,headers:[{text:"Tipo de Persona",value:"tipoPersona",sortable:!0},{text:"Nit",value:"nit"},{text:"Número de documento",value:"numDocumento"},{text:"Nombres",value:"nombres"},{text:"Apellidos",value:"apellidos"},{text:"Teléfono",value:"telefono"},{text:"Correo",value:"correo"},{text:"Lugar de Nacimiento",value:"lugarNacimiento"},{text:"Opciones",value:"opciones"}],editedItem:{tipoPersona:"",nit:"",numDocumento:"",nombres:"",apellidos:"",telefono:"",correo:"",lugarNacimiento:"",estado:0}}},created:function(){this.listarPersonas()},methods:{listarPersonas:function(){var e=this;console.log(this.$store.state.token);var t={headers:{token:this.$store.state.token}};n.a.get("persona",t).then((function(t){console.log(t.data.persona),e.persona=t.data.persona})).catch((function(e){console.log(e)}))},guardar:function(){var e=this;if(0==this.zb){console.log("Estoy guardando la persona",this.zb);var t=this,o={headers:{token:this.$store.state.token}};n.a.post("persona/guardar",{tipoPersona:this.editedItem.tipoPersona,nit:this.editedItem.nit,numDocumento:this.editedItem.numDocumento,nombres:this.editedItem.nombres,apellidos:this.editedItem.apellidos,telefono:this.editedItem.telefono,correo:this.editedItem.correo,lugarNacimiento:this.editedItem.lugarNacimiento,estado:this.editedItem.estado},o).then((function(o){console.log(o.data),t.listarPersonas(),e.editedItem.tipoPersona="",e.editedItem.nit="",e.editedItem.numDocumento="",e.editedItem.nombres="",e.editedItem.apellidos="",e.editedItem.telefono="",e.editedItem.correo="",e.editedItem.lugarNacimiento="",e.editedItem.estado="",e.dialog=!1})).catch((function(e){console.log(e),l.a.fire({icon:"Error faltan datos",title:"Personas",text:"No olvides llenar los espacios para guardar la persona"})}))}else{console.log("Estoy editando la persona"+this.zb+" id "+this.id);var a=this,i={headers:{token:this.$store.state.token}};n.a.put("persona/actualizar/".concat(this.id),{tipoPersona:this.editedItem.tipoPersona,nit:this.editedItem.nit,numDocumento:this.editedItem.numDocumento,nombres:this.editedItem.nombres,apellidos:this.editedItem.apellidos,telefono:this.editedItem.telefono,correo:this.editedItem.correo,lugarNacimiento:this.editedItem.lugarNacimiento},i).then((function(t){console.log(t.data),a.listarPersonas(),e.editedItem.tipoPersona="",e.editedItem.nit="",e.editedItem.numDocumento="",e.editedItem.nombres="",e.editedItem.apellidos="",e.editedItem.telefono="",e.editedItem.correo="",e.editedItem.lugarNacimiento="",e.editedItem.estado="",e.dialog=!1})).catch((function(e){console.log(e)}))}},atras:function(){this.$router.push("/menu"),this.$store.dispatch("setToken",this.$store.state.token)},editarItem:function(e){this.zb=1,console.log(e),this.id=e._id,this.editedItem.tipopersona=e.tipopersona,this.editedItem.nit=e.nit,this.editedItem.numdocumento=e.numdocumento,this.editedItem.nombres=e.nombres,this.editedItem.apellidos=e.apellidos,this.editedItem.telefono=e.telefono,this.editedItem.correo=e.correo,this.editedItem.lugarNacimiento=e.lugarNacimiento,this.dialog=!0},activarDesactivarMostrar:function(e,t){var o=t._id;if(console.log(e),2==e){console.log(o);var a=this,i={headers:{token:this.$store.state.token}};n.a.put("persona/desactivar/".concat(o),{estado:0},i).then((function(){a.listarPersonas()})).catch((function(e){console.log(e)}))}else if(1==e){console.log(o);var s=this,r={headers:{token:this.$store.state.token}};n.a.put("persona/activar/".concat(o),{estado:1},r).then((function(){s.listarPersonas()})).catch((function(e){console.log(e)}))}},eliminarPersona:function(e){console.log(e._id);var t=this,o={headers:{token:this.$store.state.token}};n.a.delete("persona/borrar/".concat(e._id),o).then((function(e){console.log(e),t.listarPersonas()})).catch((function(e){console.log(e)}))},cancelar:function(){var e=this;this.dialog=!1,e.listarPersonas(),this.editedItem.tipoPersona="",this.editedItem.nit="",this.editedItem.numDocumento="",this.editedItem.nombres="",this.editedItem.apellidos="",this.editedItem.telefono="",this.editedItem.correo="",this.editedItem.lugarNacimiento="",this.editedItem.estado=""},cerrar:function(){l.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/")},imprimir:function(){var e=[{title:"Tipopersona",dataKey:"tipoPersona"},{title:"nit",dataKey:"nit"},{title:"numDocumento",dataKey:"numDocumento"},{title:"nombres",dataKey:"nombres"},{title:"apellidos",dataKey:"apellidos"},{title:"Telefono",dataKey:"telefono"},{title:"correo",dataKey:"correo"},{title:"lugarNacimiento",dataKey:"lugarNacimiento"},{title:"Estado",dataKey:"estado"}],t=[];this.persona.map((function(e){t.push({tipoPersona:e.tipoPersona,nit:e.nit,numDocumento:e.numDocumento,nombres:e.nombres,apellidos:e.apellidos,telefono:e.telefono,correo:e.correo,cargo:e.cargo,lugarNacimiento:e.lugarNacimiento,estado:e.estado})}));var o=new d["default"]("p","pt");o.autoTable(e,t,{margin:{top:60},addPageContent:function(){o.text("Lista de Personas",40,30)}}),o.save("Personas.pdf")}}}),m=c,u=(o("30f6"),o("2877")),v=o("6544"),p=o.n(v),f=o("8336"),h=o("b0af"),b=o("99d9"),I=o("62ad"),g=o("a523"),k=o("8fea"),x=o("169a"),_=o("132d"),C=o("0fd9"),P=o("2fa4"),N=o("8654"),D=o("71d9"),y=o("2a7f"),$=Object(u["a"])(m,a,i,!1,null,null,null);t["default"]=$.exports;p()($,{VBtn:f["a"],VCard:h["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:I["a"],VContainer:g["a"],VDataTable:k["a"],VDialog:x["a"],VIcon:_["a"],VRow:C["a"],VSpacer:P["a"],VTextField:N["a"],VToolbar:D["a"],VToolbarTitle:y["a"]})}}]);
//# sourceMappingURL=peoples.f89996cb.js.map