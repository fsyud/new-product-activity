(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{HYZv:function(e,t,a){e.exports={standardList:"standardList___2GqAD",headerInfo:"headerInfo___3gAJH",listContent:"listContent___6Uki8",listContentItem:"listContentItem___3logl",extraContentSearch:"extraContentSearch___tapCr",listCard:"listCard___1KBU2",standardListForm:"standardListForm___GTt30",formResult:"formResult___3FeUi"}},TAj3:function(e,t,a){"use strict";a.r(t),a.d(t,"ListBasicList",(function(){return re}));a("Mwp2");var n=a("VXEj"),l=(a("Telt"),a("Tckk")),r=(a("+L6B"),a("2/Rp")),i=(a("IzEo"),a("bx4M")),c=(a("14J3"),a("BMrR")),s=(a("jCWc"),a("kPKH")),o=a("VTBJ"),u=(a("qVdP"),a("jsC+")),m=(a("lUTK"),a("BvKs")),d=(a("2qtc"),a("kLXV")),p=a("ODXe"),f=(a("5NDa"),a("5rEg")),v=(a("7Kak"),a("9yH6")),E=a("q1tI"),b=a.n(E),g=a("8Skl"),h=a("xvlK"),x=a("i8i4"),w=a("Hx5s"),y=a("9kvl"),C=a("wx14"),j=(a("J+/v"),a("MoRW")),O=(a("y8nQ"),a("Vl3Y")),I=a("6qam"),k=a.n(I),L=a("mUg4"),_=a.n(L),S="\u8bf7\u8f93\u5165",B="\u8bf7\u4e0a\u4f20",N={position:"\u987a\u5e8f",showimg:"\u5c55\u793a\u56feURL",wximg:"\u5fae\u4fe1url",h5img:"H5url",des:"\u4ea7\u54c1\u63cf\u8ff0",href:"\u6d3b\u52a8\u94fe\u63a5",type:"\u6d3b\u52a8\u7c7b\u578b",state:"\u6d3b\u52a8\u72b6\u6001"},T=["showimg"],F=function(e,t){var a="";return _()(N,(function(e,n){t===n&&(a="".concat(T.includes(n)?B:S).concat(N[n]))})),{required:e,message:a}},R=F,A=(a("DZo9"),a("8z0m")),D=(a("miYZ"),a("tsqr")),P=a("o0o1"),U=a.n(P),V=a("HaE+");function q(e){return new Promise((function(t,a){var n=new FileReader;n.readAsDataURL(e),n.onload=function(){return t(n.result)},n.onerror=function(e){return a(e)}}))}function H(e,t){var a,n="image/jpeg"===e.type||"image/png"===e.type,l=e.size/1024/1024<2;return n||(a="1"),l||(a="2"),!t||"1"!==a&&"2"!==a||(a=!1),a}var z=function(e){var t=e.upAction,a=e.handleChange,n=e.imgInfo,l=e.visible,r=e.type,i=Object(E["useState"])(!1),c=Object(p["a"])(i,2),s=c[0],o=c[1],u=Object(E["useState"])(""),m=Object(p["a"])(u,2),f=m[0],v=m[1],g=Object(E["useState"])(""),x=Object(p["a"])(g,2),w=x[0],y=x[1],C=Object(E["useState"])([]),j=Object(p["a"])(C,2),O=j[0],I=j[1];Object(E["useEffect"])((function(){var e=n&&Object.keys(n).length>0?[n]:[];I(e),l||I([])}),[e.imgInfo]);var k=function(){var e=Object(V["a"])(U.a.mark((function e(t){return U.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.url||t.preview){e.next=4;break}return e.next=3,q(t.originFileObj);case 3:t.preview=e.sent;case 4:v(t.url||t.preview),o(!0),y(t.name||t.url.substring(t.url.lastIndexOf("/")+1));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(e){var t="removed"!==e.file.status;"1"===H(e.file)&&t?D["a"].error("\u60a8\u53ea\u80fd\u4e0a\u4f20JPG/PNG\u6587\u4ef6!"):"2"===H(e.file)&&t?D["a"].error("\u56fe\u50cf\u5fc5\u987b\u5c0f\u4e8e2MB!"):(e&&I(e.fileList),a&&e.fileList.length>=1&&e.fileList[0].response?a({url:e.fileList[0].response.data.url,param:r}):a({url:void 0,param:r}))},_=function(e){return H(e,!0)},S=function(){return o(!1)},B=b.a.createElement("div",null,b.a.createElement(h["a"],null),b.a.createElement("div",{className:"ant-upload-text"},"\u4e0a\u4f20"));return b.a.createElement("div",null,b.a.createElement(A["a"],{action:t,listType:"picture-card",fileList:O,onPreview:k,onChange:L,beforeUpload:_},O.length>=1?null:B),b.a.createElement(d["a"],{visible:s,title:w,footer:null,onCancel:S},b.a.createElement("img",{alt:"example",style:{width:"100%"},src:f})))},G=z,J=a("HYZv"),K=a.n(J),M=f["a"].TextArea,Y={labelCol:{span:7},wrapperCol:{span:13}},Z=[{val:"0",txt:"\u6700\u65b0\u6d3b\u52a8"},{val:"1",txt:"\u4ea7\u54c1\u4e13\u533a"}],X=[{val:"default",txt:"default"},{val:"new",txt:"new"},{val:"hot",txt:"hot"}],W="http://10.100.60.28/phalapi/public/?s=App.Crm_activity.Upload",Q=function(e){var t=O["a"].useForm(),a=Object(p["a"])(t,1),n=a[0],l=e.done,i=e.visible,c=e.current,s=e.onDone,u=e.onCancel,m=e.onSubmit;Object(E["useEffect"])((function(){n&&!i&&n.resetFields()}),[e.visible]),Object(E["useEffect"])((function(){var e;c&&n.setFieldsValue(Object(o["a"])({},c,{state:"default"===c.state?"default":c.state,type:0===(null===(e=c.type)||void 0===e?void 0:e.length)?"0":"1"}))}));var g=function(){n&&n.submit()},h=function(e){var t=c?"edit":"add";m&&m(e,t)},x=function(e){var t="showimg"===e.param?{showimg:e.url}:"wximg"===e.param?{wximg:e.url}:{h5img:e.url};n.setFieldsValue(t)},w=l?{footer:null,onCancel:s}:{okText:"\u4fdd\u5b58",onOk:g,onCancel:u},y={state:"default",type:"0"},I=function(){if(l)return b.a.createElement(j["a"],{status:"success",title:"".concat(c?"\u7f16\u8f91":"\u6dfb\u52a0","\u6210\u529f"),extra:b.a.createElement(r["a"],{type:"primary",onClick:s},"\u77e5\u9053\u4e86"),className:K.a.formResult});var e=function(e,t){return e&&!k()(e[t])?{url:e[t],uid:e.id}:{}},t=[e(c,"showimg"),e(c,"wximg"),e(c,"h5img")],a=t[0],o=t[1],u=t[2];return b.a.createElement(O["a"],Object(C["a"])({},Y,{form:n,onFinish:h,initialValues:y}),b.a.createElement(O["a"].Item,{name:"type",label:"\u6d3b\u52a8\u7c7b\u578b",rules:[R(!0)]},b.a.createElement(v["a"].Group,null,Z.map((function(e){return b.a.createElement(v["a"].Button,{key:e.val,value:e.val},e.txt)})))),b.a.createElement(O["a"].Item,{name:"position",label:"\u987a\u5e8f",rules:[R(!0,"position")]},b.a.createElement(f["a"],{placeholder:"\u8bf7\u8f93\u5165\u987a\u5e8f"})),b.a.createElement(O["a"].Item,{name:"href",label:"\u94fe\u63a5\u5730\u5740",rules:[R(!0,"href")]},b.a.createElement(f["a"],{placeholder:"\u8bf7\u8f93\u5165\u94fe\u63a5\u5730\u5740"})),b.a.createElement(O["a"].Item,{name:"showimg",label:"\u5c55\u793a\u56fe\u4e0a\u4f20",rules:[R(!0,"showimg")]},b.a.createElement(G,{upAction:W,handleChange:x,imgInfo:a,visible:i,type:"showimg"})),b.a.createElement(O["a"].Item,{name:"wximg",label:"\u5fae\u4fe1\u56fe\u7247url",rules:[R(!1,"wximg")]},b.a.createElement(G,{upAction:W,handleChange:x,imgInfo:o,visible:i,type:"wximg"})),b.a.createElement(O["a"].Item,{name:"h5img",label:"\u5c55\u793a\u56fe\u4e0a\u4f20",rules:[R(!1,"h5img")]},b.a.createElement(G,{upAction:W,handleChange:x,imgInfo:u,visible:i,type:"h5img"})),b.a.createElement(O["a"].Item,{name:"des",label:"\u63cf\u8ff0",rules:[Object.assign(R(!0,"des"),{min:5})]},b.a.createElement(M,{rows:2,placeholder:"\u8bf7\u8f93\u5165\u81f3\u5c11\u4e94\u4e2a\u5b57\u7b26"})),b.a.createElement(O["a"].Item,{name:"state",label:"\u6d3b\u52a8\u72b6\u6001",rules:[R(!0)]},b.a.createElement(v["a"].Group,null,X.map((function(e){return b.a.createElement(v["a"].Button,{key:e.val,value:e.val},e.txt)})))))};return b.a.createElement(d["a"],Object(C["a"])({getContainer:!1,forceRender:!0,title:l?null:"\u6d3b\u52a8".concat(c?"\u7f16\u8f91":"\u6dfb\u52a0"),className:K.a.standardListForm,width:640,bodyStyle:l?{padding:"72px 0"}:{padding:"28px 0 0"},visible:i,cancelText:"\u53d6\u6d88"},w),I())},$=Q,ee=v["a"].Button,te=v["a"].Group,ae=f["a"].Search,ne=function(e){var t=e.title,a=e.value,n=e.bordered;return b.a.createElement("div",{className:K.a.headerInfo},b.a.createElement("span",null,t),b.a.createElement("p",null,a),n&&b.a.createElement("em",null))},le=function(e){var t=e.data,a=t.state,n=t.position,l=t.href;return b.a.createElement("div",{className:K.a.listContent},b.a.createElement("div",{className:K.a.listContentItem},b.a.createElement("span",null,"\u5f53\u524d\u987a\u5e8f"),b.a.createElement("p",null,n)),b.a.createElement("div",{className:K.a.listContentItem},b.a.createElement("span",null,"\u72b6\u6001"),b.a.createElement("p",null,a)),b.a.createElement("div",{className:K.a.listContentItem},b.a.createElement("span",null,"\u94fe\u63a5"),b.a.createElement("p",null,l)))},re=function(e){var t=Object(E["useRef"])(null),a=e.loading,f=e.dispatch,v=e.listBasicList.list;console.log(v);var y=Object(E["useState"])(!1),C=Object(p["a"])(y,2),j=C[0],O=C[1],I=Object(E["useState"])(!1),k=Object(p["a"])(I,2),L=k[0],_=k[1],S=Object(E["useState"])(void 0),B=Object(p["a"])(S,2),N=B[0],T=B[1],F=function(){f({type:"listBasicList/proFetch",payload:{}})};Object(E["useEffect"])((function(){F()}),[1]);var R={showSizeChanger:!0,total:v.length,defaultPageSize:10},A=function(){_(!0),T(void 0)},D=function(e){_(!0),T(e)},P=function(e){f({type:"listBasicList/ProDelete",payload:{id:e}}),F()},U=function(e,t){"edit"===e?D(t):"delete"===e&&d["a"].confirm({title:"\u5220\u9664",content:"\u786e\u5b9a\u5220\u9664\u8be5\u6d3b\u52a8\u4e48\uff1f",okText:"\u786e\u8ba4",cancelText:"\u53d6\u6d88",onOk:function(){P(t.id)}})},V=b.a.createElement("div",{className:K.a.extraContent},b.a.createElement(te,{defaultValue:"all"},b.a.createElement(ee,{value:"all"},"\u9ed8\u8ba4"),b.a.createElement(ee,{value:"progress"},"\u6700\u65b0"),b.a.createElement(ee,{value:"waiting"},"\u6700\u70ed")),b.a.createElement(ae,{className:K.a.extraContentSearch,placeholder:"\u8bf7\u8f93\u5165",onSearch:function(){return{}}})),q=function(e){var t=e.item;return b.a.createElement(u["a"],{overlay:b.a.createElement(m["a"],{onClick:function(e){var a=e.key;return U(a,t)}},b.a.createElement(m["a"].Item,{key:"delete"},"\u5220\u9664"))},b.a.createElement("a",null,"\u66f4\u591a ",b.a.createElement(g["a"],null)))},H=function(){if(t.current){var e=Object(x["findDOMNode"])(t.current);setTimeout((function(){return e.blur()}),0)}},z=function(){H(),O(!1),_(!1)},G=function(){H(),_(!1)},J=function(e,t){var a=N?N.id:"";H(),O(!0),f("add"===t?{type:"listBasicList/ProSubmit",payload:Object(o["a"])({id:a},e)}:{type:"listBasicList/proEdit",payload:Object(o["a"])({id:a},e)}),F()};return b.a.createElement("div",null,b.a.createElement(w["b"],null,b.a.createElement("div",{className:K.a.standardList},b.a.createElement(i["a"],{bordered:!1},b.a.createElement(c["a"],null,b.a.createElement(s["a"],{sm:8,xs:24},b.a.createElement(ne,{title:"\u9879\u76ee\u6570",value:v.length,bordered:!0})),b.a.createElement(s["a"],{sm:8,xs:24},b.a.createElement(ne,{title:"\u672c\u5468\u4efb\u52a1\u5e73\u5747\u5904\u7406\u65f6\u95f4",value:"32\u5206\u949f",bordered:!0})),b.a.createElement(s["a"],{sm:8,xs:24},b.a.createElement(ne,{title:"\u672c\u5468\u5b8c\u6210\u4efb\u52a1\u6570",value:"24\u4e2a\u4efb\u52a1"})))),b.a.createElement(i["a"],{className:K.a.listCard,bordered:!1,title:"\u57fa\u672c\u5217\u8868",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:V},b.a.createElement(r["a"],{type:"dashed",style:{width:"100%",marginBottom:8},onClick:A},b.a.createElement(h["a"],null),"\u6dfb\u52a0"),b.a.createElement(n["a"],{size:"large",rowKey:"id",loading:a,pagination:R,dataSource:v,renderItem:function(e){return b.a.createElement(n["a"].Item,{actions:[b.a.createElement("a",{key:"edit",onClick:function(t){t.preventDefault(),D(e)}},"\u7f16\u8f91"),b.a.createElement(q,{key:"more",item:e})]},b.a.createElement(n["a"].Item.Meta,{avatar:b.a.createElement(l["a"],{src:e.showimg,shape:"square",size:"large"}),title:e.des}),b.a.createElement(le,{data:e}))}})))),b.a.createElement($,{done:j,current:N,visible:L,onDone:z,onCancel:G,onSubmit:J}))};t["default"]=Object(y["a"])((function(e){var t=e.listBasicList,a=e.loading;return{listBasicList:t,loading:a.models.listBasicList}}))(re)}}]);