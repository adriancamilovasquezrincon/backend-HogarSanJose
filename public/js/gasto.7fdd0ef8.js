(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["gasto"],{"0e8f":function(t,e,a){"use strict";a("20f6");var o=a("e8f2");e["a"]=Object(o["a"])("flex")},"6fc0":function(t,e,a){"use strict";a("ac1f1")},ac1f1:function(t,e,a){},df32:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"fondo"},[o("div",[o("button",{staticClass:"fecha",on:{click:t.atras}},[o("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")])],1),o("button",{staticClass:"iniciosesion",on:{click:t.cerrar}},[o("img",{staticClass:"iconopersona",attrs:{src:a("7833"),alt:""}}),o("h2",{staticClass:"letrasesion"},[t._v("Cerrar sesión")])])]),o("div",{staticClass:"user"},[o("v-toolbar-title",{staticClass:"gastossssssss"},[t._v("Gastos")])],1),o("div",{staticClass:"cuadro"},[o("div",{staticClass:"container"},[o("v-data-table",{attrs:{"items-per-page":5,headers:t.headers,detalles:t.detalles,items:t.gasto,search:t.search,id:"azul"},scopedSlots:t._u([{key:"top",fn:function(){return[o("v-toolbar",{staticClass:"fondocuadro",attrs:{flat:""}},[o("v-btn",{staticClass:"impresora",on:{click:function(e){return t.imprimir()}}},[o("v-icon",[t._v("mdi-printer")])],1),o("v-spacer"),o("div",{staticClass:"buscar"},[o("v-text-field",{staticClass:"mt-3",attrs:{dark:"","prepend-icon":"mdi-magnify",label:"Búsqueda por el tipo de Gasto o persona","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),o("v-spacer"),o("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,s=e.attrs;return[o("v-btn",t._g(t._b({staticClass:"nuevo white--text mb-2",attrs:{color:"#266439"}},"v-btn",s,!1),a),[t._v(" Nuevo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-text",[o("v-container",[o("v-row",[o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-flex",[o("v-select",{attrs:{items:t.persona,label:"Persona"},model:{value:t.editedItem.persona,callback:function(e){t.$set(t.editedItem,"persona",e)},expression:"editedItem.persona"}})],1)],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Nombre del Gasto"},model:{value:t.editedItem.nombreGasto,callback:function(e){t.$set(t.editedItem,"nombreGasto",e)},expression:"editedItem.nombreGasto"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Valor del Gasto"},model:{value:t.editedItem.valorGasto,callback:function(e){t.$set(t.editedItem,"valorGasto",e)},expression:"editedItem.valorGasto"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Descripción"},model:{value:t.editedItem.descripcion,callback:function(e){t.$set(t.editedItem,"descripcion",e)},expression:"editedItem.descripcion"}})],1),o("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[o("v-text-field",{attrs:{label:"Estado"},model:{value:t.editedItem.estado,callback:function(e){t.$set(t.editedItem,"estado",e)},expression:"editedItem.estado"}})],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.cancelar}},[t._v(" Cancelar ")]),o("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.guardar}},[t._v(" Guardar ")])],1)],1)],1),o("v-dialog",{attrs:{"max-width":"290"}},[o("v-card",[1==t.Accion?o("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.Accion?o("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),o("v-card-text",[t._v(" Estás a punto de "),1==t.Accion?o("span",[t._v("activar ")]):t._e(),2==t.Accion?o("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.Nombre)+" ")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.Accion?o("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.Accion?o("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1),o("v-dialog",{attrs:{"max-width":"500px"}},[o("v-card",[o("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1"}},[t._v("Cancel")]),o("v-btn",{attrs:{color:"blue darken-1"}},[t._v("OK")]),o("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(e){var a=e.item;return[o("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(e){return t.editarItem(a)}}},[t._v(" mdi-pencil ")]),a.estado?[o("v-icon",{attrs:{color:"red darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,a)}}},[t._v(" mdi-block-helper ")])]:[o("v-icon",{attrs:{color:"green darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,a)}}},[t._v(" mdi-check ")])],[o("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"pink"},on:{click:function(e){return t.eliminarGasto(a)}}},[t._v(" X ")])]]}},{key:"item.estado",fn:function(e){var a=e.item;return[a.estado?o("div",[o("span",{staticClass:"red--text"},[t._v("Inactivo")])]):o("div",[o("span",{staticClass:"green--text"},[t._v("Activo")])])]}},{key:"no-data",fn:function(){},proxy:!0}],null,!0)})],1)])])},s=[],i=(a("d81d"),a("bc3a")),r=a.n(i),n=a("3d20"),c=a.n(n),d=a("8baf"),l=(a("0da4"),{data:function(){return{search:"",gasto:[],persona:[],zb:0,dialog:!1,headers:[{text:"Persona",value:"persona.tipoPersona"},{text:"Nombre del Gasto",value:"nombreGasto"},{text:"Valor del Gasto",value:"valorGasto"},{text:"Descripción",value:"descripcion"},{text:"Fecha",value:"createdAt"},{text:"Estado",value:"estado"},{text:"Opciones",value:"opciones"}],editedItem:{persona:"",nombreGasto:"",valorGasto:"",descripcion:"",createdAt:"",estado:""}}},created:function(){this.listarGastos(),this.selectPersona()},methods:{selectPersona:function(){var t=this,e=[],a={headers:{token:this.$store.state.token}};r.a.get("persona",a).then((function(a){e=a.data.persona,console.log(a.data),e.map((function(e){t.persona.push({text:e.tipoPersona,value:e._id})}))})).catch((function(t){console.log(t)}))},listarGastos:function(){var t=this;console.log(this.$store.state.token);var e={headers:{token:this.$store.state.token}};r.a.get("gasto",e).then((function(e){console.log(e.data.gasto),t.gasto=e.data.gasto})).catch((function(t){console.log(t)}))},guardar:function(){var t=this;if(0==this.zb){console.log("Guardando gastos",this.zb);var e=this,a={headers:{token:this.$store.state.token}};r.a.post("gasto/guardar",{persona:this.editedItem.persona,nombreGasto:this.editedItem.nombreGasto,valorGasto:this.editedItem.valorGasto,descripcion:this.editedItem.descripcion,estado:this.editedItem.estado},a).then((function(a){console.log(a),e.listarGastos(),t.editedItem.persona="",t.editedItem.nombreGasto="",t.editedItem.valorGasto="",t.editedItem.descripcion="",t.editedItem.estado="",t.dialog=!1})).catch((function(t){console.log(t),c.a.fire({icon:"Error faltan datos",title:"Gastos",text:"No olvides llenar los espacios para guardar el gasto"})}))}else{console.log("Estoy editando el gasto"+this.zb+" id "+this.id);var o=this,s={headers:{token:this.$store.state.token}};r.a.put("gasto/actualizar/".concat(this.id),{persona:this.editedItem.persona,nombreGasto:this.editedItem.nombreGasto,valorGasto:this.editedItem.valorGasto,descripcion:this.editedItem.descripcion,estado:this.editedItem.estado},s).then((function(e){console.log(e),o.listarGastos(),t.editedItem.persona="",t.editedItem.nombreGasto="",t.editedItem.valorGasto="",t.editedItem.descripcion="",t.editedItem.estado="",t.dialog=!1})).catch((function(t){console.log(t)}))}},atras:function(){this.$router.push("/menu"),this.$store.dispatch("setToken",this.$store.state.token)},editarItem:function(t){this.zb=1,console.log(t),this.id=t._id,this.editedItem.persona=t.persona,this.editedItem.nombreGasto=t.nombreGasto,this.editedItem.valorGasto=t.valorGasto,this.editedItem.descripcion=t.descripcion,this.dialog=!0},activarDesactivarMostrar:function(t,e){var a=e._id;if(console.log(t),2==t){console.log(a);var o=this,s={headers:{token:this.$store.state.token}};r.a.put("gasto/desactivar/".concat(a),{estado:0},s).then((function(){o.listarGastos()})).catch((function(t){console.log(t)}))}else if(1==t){console.log(a);var i=this,n={headers:{token:this.$store.state.token}};r.a.put("gasto/activar/".concat(a),{estado:1},n).then((function(){i.listarGastos()})).catch((function(t){console.log(t)}))}},eliminarGasto:function(t){console.log(t._id);var e=this,a={headers:{token:this.$store.state.token}};r.a.delete("gasto/borrar/".concat(t._id),a).then((function(t){console.log(t),e.listarGastos()})).catch((function(t){console.log(t)}))},cancelar:function(){var t=this;this.dialog=!1,t.listarGastos(),this.editedItem.persona="",this.editedItem.nombreGasto="",this.editedItem.valorGasto="",this.editedItem.descripcion="",this.editedItem.estado=""},cerrar:function(){c.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/")},imprimir:function(){var t=[{title:"Persona",dataKey:"persona"},{title:"Nombre_Gasto",dataKey:"nombreGasto"},{title:"ValorGasto",dataKey:"valorGasto"},{title:"Descripcion",dataKey:"descripcion"},{title:"Estado",dataKey:"estado"}],e=[];this.gasto.map((function(t){e.push({persona:t.persona.tipoPersona,nombreGasto:t.nombreGasto,valorGasto:t.valorGasto,descripcion:t.descripcion,estado:t.estado})}));var a=new d["default"]("p","pt");a.autoTable(t,e,{margin:{top:60},addPageContent:function(){a.text("Lista de Gastos",40,30)}}),a.save("Gastos.pdf")}}}),v=l,u=(a("6fc0"),a("2877")),m=a("6544"),p=a.n(m),h=a("8336"),f=a("b0af"),b=a("99d9"),g=a("62ad"),k=a("a523"),G=a("8fea"),I=a("169a"),x=a("0e8f"),_=a("132d"),C=a("0fd9"),y=a("b974"),V=a("2fa4"),$=a("8654"),w=a("71d9"),A=a("2a7f"),D=Object(u["a"])(v,o,s,!1,null,null,null);e["default"]=D.exports;p()(D,{VBtn:h["a"],VCard:f["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:g["a"],VContainer:k["a"],VDataTable:G["a"],VDialog:I["a"],VFlex:x["a"],VIcon:_["a"],VRow:C["a"],VSelect:y["a"],VSpacer:V["a"],VTextField:$["a"],VToolbar:w["a"],VToolbarTitle:A["a"]})}}]);
//# sourceMappingURL=gasto.7fdd0ef8.js.map