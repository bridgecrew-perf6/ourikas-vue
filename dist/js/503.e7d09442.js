"use strict";(self["webpackChunkourikas_vue"]=self["webpackChunkourikas_vue"]||[]).push([[503],{7503:function(s,a,t){t.r(a),t.d(a,{default:function(){return E}});var n=t(3396),e=t(7139),i=t(9242);const l={class:"container card m-5 p-5"},r={class:"is-size-1 mr-4"},c=(0,n._)("br",null,null,-1),u={class:"subtitle"},o={key:0},d=(0,n._)("br",null,null,-1),w=(0,n._)("h3",{class:"is-size-5 has-text-weight-bold mb-3"},"Contatos:",-1),p={class:"ml-2"},b={key:0,class:"button is-dark mr-3"},k={key:1},g=["href"],m={key:2},_=["href"],y=(0,n._)("br",null,null,-1),h=(0,n._)("br",null,null,-1),f=(0,n._)("br",null,null,-1),z=(0,n._)("h3",{class:"is-size-5 has-text-weight-bold mb-3"},"Endereço",-1),v={class:"ml-2"},D=(0,n._)("br",null,null,-1),C=(0,n._)("br",null,null,-1);function q(s,a,t,q,F,H){return(0,n.wg)(),(0,n.iD)("div",l,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(q.company,(s=>((0,n.wg)(),(0,n.iD)("div",{key:s.id},[(0,n._)("span",r,(0,e.zw)(s.name),1),(0,n._)("span",{class:(0,e.C_)(s.status?"tag is-primary is-medium":"tag is-warning is-medium")},(0,e.zw)(s.status?"Ativa":"Inativa"),3),c,(0,n._)("p",u,(0,e.zw)(s.description),1),s.keywords.length>0?((0,n.wg)(),(0,n.iD)("ul",o,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(q.splitTags(s.keywords),((s,a)=>((0,n.wg)(),(0,n.iD)("li",{class:"tag is-primary m-1",key:a},(0,e.zw)(s),1)))),128))])):(0,n.kq)("",!0),d,w,(0,n._)("div",p,[s.contact.email?((0,n.wg)(),(0,n.iD)("span",b,(0,e.zw)(s.contact.email),1)):(0,n.kq)("",!0),s.contact.site?((0,n.wg)(),(0,n.iD)("span",k,[(0,n._)("a",{href:s.contact.site,target:"_blank",class:"button is-warning mr-3"}," acessar site ",8,g)])):(0,n.kq)("",!0),s.contact.facebook?((0,n.wg)(),(0,n.iD)("span",m,[(0,n._)("a",{href:s.contact.facebook,target:"_blank",class:"button is-link"}," página no facebook ",8,_)])):(0,n.kq)("",!0),y,h,((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(s.contact.phones,((s,a)=>((0,n.wg)(),(0,n.iD)("span",{class:"button is-info mr-2",key:a},(0,e.zw)(s),1)))),128))]),f,z,(0,n._)("div",v,[(0,n.wy)((0,n._)("span",{class:"subtitle"},(0,e.zw)(s.address.street),513),[[i.F8,s.address.street]]),D,(0,n.wy)((0,n._)("span",{class:"subtitle"},"CEP: "+(0,e.zw)(s.address.zip),513),[[i.F8,s.address.zip]]),C,(0,n.wy)((0,n._)("span",{class:"subtitle"},(0,e.zw)(s.address.city)+" / "+(0,e.zw)(s.address.state),513),[[i.F8,s.address.city]])])])))),128))])}var F=t(4870),H=t(678),K=t(6018),Y={name:"Company",setup(){const s=(0,F.iH)(),a=(0,H.yj)(),t=a.params.id;(0,n.wF)((()=>{K.Z.get("/companies.json").then((s=>e(s.data)))}));const e=a=>{s.value=a.filter((s=>s.id==t))},i=s=>s.split(",");return{company:s,splitTags:i}}},j=t(89);const x=(0,j.Z)(Y,[["render",q]]);var E=x}}]);
//# sourceMappingURL=503.e7d09442.js.map