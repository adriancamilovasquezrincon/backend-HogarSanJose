(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["user"],{"7bad":function(t,e,a){"use strict";a("f9f7")},cd1c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"fondo"},[s("div",[s("button",{staticClass:"fecha",on:{click:t.atras}},[s("v-icon",{attrs:{dark:"",left:""}},[t._v(" mdi-arrow-left ")])],1),s("button",{staticClass:"iniciosesion",on:{click:t.cerrar}},[s("img",{staticClass:"iconopersona",attrs:{src:a("7833"),alt:""}}),s("h2",{staticClass:"letrasesion"},[t._v("Cerrar sesión")])])]),s("div",{staticClass:"user"},[s("v-toolbar-title",{staticClass:"usuariosss"},[t._v("Usuarios")])],1),s("div",{staticClass:"cuadro"},[s("div",{staticClass:"container"},[s("v-data-table",{attrs:{"items-per-page":5,headers:t.headers,items:t.usuario,search:t.search,id:"azul"},scopedSlots:t._u([{key:"top",fn:function(){return[s("v-toolbar",{staticClass:"fondocuadro",attrs:{flat:""}},[s("v-btn",{staticClass:"impresora",on:{click:function(e){return t.imprimir()}}},[s("v-icon",[t._v("mdi-printer")])],1),s("v-spacer"),s("div",{staticClass:"buscar"},[s("v-text-field",{staticClass:"mt-3",attrs:{dark:"","prepend-icon":"mdi-magnify",label:"Búsqueda por nombre o rol","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),s("v-spacer"),s("v-dialog",{attrs:{persistent:"","max-width":"500px"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,o=e.attrs;return[s("v-btn",t._g(t._b({staticClass:"nuevo white--text mb-2",attrs:{color:"#266439"}},"v-btn",o,!1),a),[t._v(" Nuevo ")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",[s("v-card-text",[s("v-container",[s("v-row",[s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"Nombre"},model:{value:t.editedItem.nombre,callback:function(e){t.$set(t.editedItem,"nombre",e)},expression:"editedItem.nombre"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"email"},model:{value:t.editedItem.email,callback:function(e){t.$set(t.editedItem,"email",e)},expression:"editedItem.email"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"password"},model:{value:t.editedItem.password,callback:function(e){t.$set(t.editedItem,"password",e)},expression:"editedItem.password"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"rol"},model:{value:t.editedItem.rol,callback:function(e){t.$set(t.editedItem,"rol",e)},expression:"editedItem.rol"}})],1),s("v-col",{attrs:{cols:"12",sm:"6",md:"4"}},[s("v-text-field",{attrs:{label:"estado"},model:{value:t.editedItem.estado,callback:function(e){t.$set(t.editedItem,"estado",e)},expression:"editedItem.estado"}})],1)],1)],1)],1),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.cancelar}},[t._v(" Cancelar ")]),s("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:t.guardar}},[t._v(" Guardar ")])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"290"}},[s("v-card",[1==t.Accion?s("v-card-title",{staticClass:"headline"},[t._v(" Activar Item ")]):t._e(),2==t.Accion?s("v-card-title",{staticClass:"headline"},[t._v(" Desactivar Item ")]):t._e(),s("v-card-text",[t._v(" Estás a punto de "),1==t.Accion?s("span",[t._v("activar ")]):t._e(),2==t.Accion?s("span",[t._v("desactivar ")]):t._e(),t._v(" el item "+t._s(t.Nombre)+" ")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activarDesactivarCerrar()}}},[t._v(" Cancelar ")]),1==t.Accion?s("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.activar()}}},[t._v(" Activar ")]):t._e(),2==t.Accion?s("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:function(e){return t.desactivar()}}},[t._v(" Desactivar ")]):t._e()],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500px"}},[s("v-card",[s("v-card-title",{staticClass:"headline"},[t._v("Are you sure you want to delete this item?")]),s("v-card-actions",[s("v-spacer"),s("v-btn",{attrs:{color:"blue darken-1"}},[t._v("Cancel")]),s("v-btn",{attrs:{color:"blue darken-1"}},[t._v("OK")]),s("v-spacer")],1)],1)],1)],1)]},proxy:!0},{key:"item.opciones",fn:function(e){var a=e.item;return[s("v-icon",{staticClass:"mr-2",attrs:{color:"primary",small:""},on:{click:function(e){return t.editarItem(a)}}},[t._v(" mdi-pencil ")]),a.estado?[s("v-icon",{attrs:{color:"red darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(2,a)}}},[t._v(" mdi-block-helper ")])]:[s("v-icon",{attrs:{color:"green darken-2",small:""},on:{click:function(e){return t.activarDesactivarMostrar(1,a)}}},[t._v(" mdi-check ")])],[s("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"","x-small":"",color:"pink"},on:{click:function(e){return t.eliminarUsuario(a)}}},[t._v(" X ")])]]}},{key:"item.estado",fn:function(e){var a=e.item;return[a.estado?s("div",[s("span",{staticClass:"red--text"},[t._v("Inactivo")])]):s("div",[s("span",{staticClass:"green--text"},[t._v("Activo")])])]}},{key:"no-data",fn:function(){},proxy:!0}],null,!0)})],1)])])},o=[],i=(a("d81d"),a("bc3a")),r=a.n(i),n=a("3d20"),l=a.n(n),c=a("8baf"),d=(a("0da4"),{data:function(){return{search:"",usuario:[],zb:0,dialog:!1,headers:[{text:"Nombre",align:"start",sortable:!1,value:"nombre"},{text:"Email",value:"email"},{text:"Rol",value:"rol"},{text:"Estado",value:"estado"},{text:"Opciones",value:"opciones"}],editedItem:{nombre:"",email:"",rol:"",estado:""}}},created:function(){this.listarUsuarios()},methods:{listarUsuarios:function(){var t=this;console.log(this.$store.state.token);var e={headers:{token:this.$store.state.token}};r.a.get("usuario",e).then((function(e){t.$store.state.token,console.log(e.data.usuario),t.usuario=e.data.usuario})).catch((function(t){console.log(t)}))},guardar:function(){var t=this;if(0==this.zb){console.log("Estoy guardando los usuarios",this.zb);var e=this,a={headers:{token:this.$store.state.token}};r.a.post("usuario/guardar",{nombre:this.editedItem.nombre,email:this.editedItem.email,password:this.editedItem.password,rol:this.editedItem.rol,estado:this.editedItem.estado},a).then((function(a){console.log(a.data),e.listarUsuarios(),t.editedItem.nombre="",t.editedItem.email="",t.editedItem.password="",t.editedItem.rol="",t.editedItem.estado="",t.dialog=!1})).catch((function(t){console.log(t),l.a.fire({icon:"Error faltan datos",title:"Usuarios",text:"No olvides llenar los espacios para guardar el usuario"})}))}else{console.log("Estoy editando usuarios"+this.zb+" id "+this.id);var s=this,o={headers:{token:this.$store.state.token}};r.a.put("usuario/actualizar/".concat(this.id),{nombre:this.editedItem.nombre,email:this.editedItem.email,password:this.editedItem.password,rol:this.editedItem.rol},o).then((function(e){console.log(e.data),s.listarUsuarios(),t.editedItem.nombre="",t.editedItem.email="",t.editedItem.password="",t.editedItem.rol="",t.editedItem.estado="",t.dialog=!1})).catch((function(t){console.log(t)}))}},editarItem:function(t){this.zb=1,console.log(t),this.id=t._id,this.editedItem.nombre=t.nombre,this.editedItem.email=t.email,this.editedItem.password=t.password,this.editedItem.rol=t.rol,this.dialog=!0},activarDesactivarMostrar:function(t,e){var a=e._id;if(console.log(t),2==t){console.log(a);var s=this,o={headers:{token:this.$store.state.token}};r.a.put("usuario/desactivar/".concat(a),{estado:0},o).then((function(){s.listarUsuarios()})).catch((function(t){console.log(t)}))}else if(1==t){console.log(a);var i=this,n={headers:{token:this.$store.state.token}};r.a.put("usuario/activar/".concat(a),{estado:1},n).then((function(){i.listarUsuarios()})).catch((function(t){console.log(t)}))}},eliminarUsuario:function(t){console.log(t._id);var e=this,a={headers:{token:this.$store.state.token}};r.a.delete("usuario/borrar/".concat(t._id),a).then((function(t){console.log(t),e.listarUsuarios()})).catch((function(t){console.log(t)}))},cancelar:function(){var t=this;this.dialog=!1,t.listarUsuarios(),this.editedItem.nombre="",this.editedItem.email="",this.editedItem.password="",this.editedItem.rol="",this.editedItem.estado=""},cerrar:function(){l.a.fire({background:"black",position:"top-center",icon:"success",title:"Su sesión ha finalizado con éxito",showConfirmButton:!1,timer:1500}),this.$store.dispatch("setToken",""),this.$router.push("/")},atras:function(){this.$router.push("/menu"),this.$store.dispatch("setToken",this.$store.state.token)},imprimir:function(){var t=[{title:"Nombre",dataKey:"nombre"},{title:"Email",dataKey:"email"},{title:"password",dataKey:"password"},{title:"rol",dataKey:"rol"},{title:"Estado",dataKey:"estado"}],e=[];this.usuario.map((function(t){e.push({nombre:t.nombre,email:t.email,password:t.password,rol:t.rol,estado:t.estado})}));var a=new c["default"]("p","pt");a.autoTable(t,e,{margin:{top:60},addPageContent:function(){a.text("Lista de Usuarios",40,30)}}),a.save("Usuarios.pdf")}}}),u=d,m=(a("7bad"),a("2877")),v=a("6544"),h=a.n(v),f=a("8336"),p=a("b0af"),b=a("99d9"),k=a("62ad"),I=a("a523"),g=a("8fea"),_=a("169a"),x=a("132d"),C=a("0fd9"),w=a("2fa4"),y=a("8654"),$=a("71d9"),V=a("2a7f"),U=Object(m["a"])(u,s,o,!1,null,null,null);e["default"]=U.exports;h()(U,{VBtn:f["a"],VCard:p["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VCol:k["a"],VContainer:I["a"],VDataTable:g["a"],VDialog:_["a"],VIcon:x["a"],VRow:C["a"],VSpacer:w["a"],VTextField:y["a"],VToolbar:$["a"],VToolbarTitle:V["a"]})},f9f7:function(t,e,a){}}]);
//# sourceMappingURL=user.bc694dc6.js.map