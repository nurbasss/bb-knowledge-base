"use strict";(self.webpackChunkbb_web=self.webpackChunkbb_web||[]).push([[585],{5585:(H,P,r)=>{r.r(P),r.d(P,{PostModule:()=>d});var m=r(8692),u=r(7553),t=r(4537),C=r(5497),v=r(7802),y=r(3942),Z=r(8292);function O(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"td",14),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,c=t.oxw();return t.KtG(c.navigateVersion(null==i?null:i.id))}),t._uU(1," \u041f\u0435\u0440\u0435\u0439\u0442\u0438 "),t.qZA()}}function M(o,n){1&o&&(t.TgZ(0,"td",9),t._uU(1,"\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f"),t.qZA())}function T(o,n){if(1&o&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.YNc(7,O,2,0,"td",12),t.YNc(8,M,2,0,"td",13),t.qZA()),2&o){const e=n.$implicit,s=t.oxw();t.xp6(2),t.Oqu(null==e?null:e.id),t.xp6(2),t.Oqu(s.getUserName(null==s.activePost?null:s.activePost.created_by)),t.xp6(2),t.Oqu(null==e?null:e.title),t.xp6(1),t.Q6J("ngIf",!(null!=e&&e.is_current)),t.xp6(1),t.Q6J("ngIf",null==e?null:e.is_current)}}class h{constructor(n,e,s,i,c){this.activeModal=n,this.router=e,this.helperService=s,this.changeDetector=i,this.toastr=c}close(){this.activeModal.close()}navigateVersion(n){this.router.navigate(["/posts/post-version/"+n]),this.close()}getUserName(n){return this.users.length?this.users.find(e=>e.id===n)?.name:""}}h.\u0275fac=function(n){return new(n||h)(t.Y36(C.Kz),t.Y36(v.F0),t.Y36(y.W),t.Y36(t.sBO),t.Y36(Z._W))},h.\u0275cmp=t.Xpm({type:h,selectors:[["bb-post-versions"]],inputs:{postHistoryList:"postHistoryList",activePost:"activePost",users:"users"},decls:45,vars:5,consts:[[1,"modal-header"],[1,"modal__title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[1,"version-active"],[1,"version-subtitle"],[1,"version-table"],[1,"table","table-stripped"],["scope","col"],[1,"active"],[1,"version-list"],[4,"ngFor","ngForOf"],["class","redirect",3,"click",4,"ngIf"],["class","active",4,"ngIf"],[1,"redirect",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"h4",1),t._uU(2),t.qZA(),t.TgZ(3,"button",2),t.NdJ("click",function(){return e.close()}),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5),t._uU(7,"\u0414\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f"),t.qZA(),t.TgZ(8,"div",6)(9,"table",7)(10,"thead")(11,"tr")(12,"th",8),t._uU(13,"\u0412\u0435\u0440\u0441\u0438\u044f"),t.qZA(),t.TgZ(14,"th",8),t._uU(15,"\u0410\u0432\u0442\u043e\u0440"),t.qZA(),t.TgZ(16,"th",8),t._uU(17,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(18,"th",8),t.qZA()(),t.TgZ(19,"tbody")(20,"tr")(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td",9),t._uU(28,"\u0410\u043a\u0442\u0438\u0432\u043d\u0430\u044f"),t.qZA()()()()()(),t.TgZ(29,"div",10)(30,"div",5),t._uU(31,"\u0412\u0441\u0435 \u0432\u0435\u0440\u0441\u0438\u0438"),t.qZA(),t.TgZ(32,"div",6)(33,"table",7)(34,"thead")(35,"tr")(36,"th",8),t._uU(37,"\u0412\u0435\u0440\u0441\u0438\u044f"),t.qZA(),t.TgZ(38,"th",8),t._uU(39,"\u0410\u0432\u0442\u043e\u0440"),t.qZA(),t.TgZ(40,"th",8),t._uU(41,"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),t.qZA(),t._UZ(42,"th",8),t.qZA()(),t.TgZ(43,"tbody"),t.YNc(44,T,9,5,"tr",11),t.qZA()()()()()),2&n&&(t.xp6(2),t.hij(' \u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u043e\u0441\u0442\u0430 "',null==e.activePost?null:e.activePost.title,'" '),t.xp6(20),t.Oqu(null==e.activePost?null:e.activePost.id),t.xp6(2),t.Oqu(e.getUserName(null==e.activePost?null:e.activePost.created_by)),t.xp6(2),t.Oqu(null==e.activePost?null:e.activePost.title),t.xp6(18),t.Q6J("ngForOf",e.postHistoryList))},dependencies:[m.sg,m.O5],styles:[".modal-header[_ngcontent-%COMP%]{padding:24px}.modal-body[_ngcontent-%COMP%]{padding:16px 24px 24px;margin-bottom:32px}.version-active[_ngcontent-%COMP%]{padding-bottom:12px;border-bottom:2px solid #000}.version-list[_ngcontent-%COMP%]{padding-top:16px}.version-subtitle[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:#152536;letter-spacing:.02em;margin-bottom:16px}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]{width:100%}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{padding:12px}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border-bottom:none!important}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(1){width:20%}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){width:20%}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3){width:50%}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(4){width:10%}.version-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%]{border-bottom:none!important}.active[_ngcontent-%COMP%]{color:#2ab514!important}.redirect[_ngcontent-%COMP%]{color:#0d6efd;cursor:pointer}.redirect[_ngcontent-%COMP%]:hover{opacity:.7}"]});var x=r(6169),A=r(4135),U=r(9923),F=r(6943);class q{constructor(n,e,s){this.appRef=n,this.factory=e,this.injector=s,this.embeddedComponents=[]}create(n){const s=Array.prototype.slice.call(n.querySelectorAll(this.factory.selector)).map(i=>this.createComponent(i));return this.embeddedComponents.push(...s),s.forEach(i=>this.appRef.attachView(i.hostView)),s}createComponent(n){const e=[Array.prototype.slice.call(n.childNodes)],s=this.factory.create(this.injector,e,n);return this.setComponentAttrs(s.instance,n),s}setComponentAttrs(n,e){const s=n;for(const i in s)Object.prototype.hasOwnProperty.call(s,i)&&e.hasAttribute(i)&&(s[i]=e.getAttribute(i))}destroy(){this.embeddedComponents.forEach(n=>this.appRef.detachView(n.hostView)),this.embeddedComponents.forEach(n=>n.destroy())}}class a{constructor(n,e,s){this.appRef=n,this.injector=e,this.resolver=s}create(n){const e=this.resolver.resolveComponentFactory(n);return new q(this.appRef,e,this.injector)}}a.\u0275fac=function(n){return new(n||a)(t.LFG(t.z2F),t.LFG(t.zs3),t.LFG(t._Vd))},a.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac});class l{constructor(){}ngOnInit(){}}l.\u0275fac=function(n){return new(n||l)},l.\u0275cmp=t.Xpm({type:l,selectors:[["bb-variable"]],inputs:{value:"value",name:"name",id:"id"},decls:2,vars:1,consts:[[1,"variable"]],template:function(n,e){1&n&&(t.TgZ(0,"strong",0),t._uU(1),t.qZA()),2&n&&(t.xp6(1),t.Oqu(e.value))},styles:[".variable[_ngcontent-%COMP%]{background-color:#ff0}"]});class g{constructor(n,e){this.cmpFactory=n,this.factories=[],this.components=[l],this.hostElement=e.nativeElement}ngAfterViewInit(){this.hostElement.innerHTML=this.html,this.initFactories(),this.createAllComponents()}initFactories(){this.components.forEach(n=>{const e=this.cmpFactory.create(n);this.factories.push(e)})}createAllComponents(){const n=this.hostElement,e=[];this.factories.forEach(s=>{const i=s.create(n);e.push(...i),e.filter(c=>c.instance instanceof l).forEach(c=>{const f=c.location.nativeElement.attributes.var.value,_=this.variables.find(b=>b?.id===Number(f));c.instance.value=_?.value,c.instance.name=_?.name,c.instance.id=_?.id})})}removeAllComponents(){this.factories.forEach(n=>n.destroy())}ngOnDestroy(){this.removeAllComponents()}}function N(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.openVersions())}),t.TgZ(1,"span"),t._UZ(2,"img",22),t.qZA(),t._uU(3," \u0412\u0435\u0440\u0441\u0438\u0438 "),t.qZA()}}function V(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.navigateEditPost())}),t.TgZ(1,"span"),t._UZ(2,"img",23),t.qZA(),t._uU(3," \u0418\u0437\u043c\u0435\u043d\u0438\u0442\u044c "),t.qZA()}}function D(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.revertPostVersion())}),t.TgZ(1,"span"),t._UZ(2,"img",23),t.qZA(),t._uU(3," \u0412\u0435\u0440\u043d\u0443\u0442\u044c "),t.qZA()}}function I(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div",21),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.deletePost())}),t.TgZ(1,"span"),t._UZ(2,"img",24),t.qZA(),t._uU(3," \u0423\u0434\u0430\u043b\u0438\u0442\u044c "),t.qZA()}}function E(o,n){if(1&o&&(t.TgZ(0,"h2"),t._uU(1),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.hij(" \u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 (\u0412\u0435\u0440\u0441\u0438\u044f - ",null==e.post?null:e.post.id,") ")}}function Y(o,n){if(1&o&&t._UZ(0,"div",25),2&o){const e=t.oxw();t.Q6J("innerHTML",null==e.post?null:e.post.content,t.oJD)}}function w(o,n){if(1&o&&t._UZ(0,"bb-binder",26),2&o){const e=t.oxw();t.Q6J("html",null==e.post?null:e.post.content)("variables",e.variables)}}g.\u0275fac=function(n){return new(n||g)(t.Y36(a,2),t.Y36(t.SBq))},g.\u0275cmp=t.Xpm({type:g,selectors:[["bb-binder"]],inputs:{html:"html",variables:"variables"},features:[t._Bn([a])],decls:0,vars:0,template:function(n,e){},encapsulation:2});class p{constructor(n,e,s,i,c,f,_,b,S){this.changeDetector=n,this.route=e,this.router=s,this.postService=i,this.variableService=c,this.toastr=f,this.categoryService=_,this.modalService=b,this.helperService=S,this.isPostLoading=!1,this.variables=[],this.postHistory=[],this.isVersionPost=!1,this.users=[]}ngOnInit(){"post-version"===this.router.url.split("/")[2]&&(this.isVersionPost=!0,this.changeDetector.detectChanges()),this.route.params.subscribe(n=>{this.id=n.id,this.isVersionPost?this.getPostVersionById():this.getPostById()})}getPostById(){this.isPostLoading=!0,this.changeDetector.detectChanges(),this.postService.getPostById(this.id).subscribe({next:n=>{this.post=n.posts,this.postHistory=n.post_histories;let e=[];e.push(Number(this.post.created_by)),e.includes(Number(this.post?.updated_by))||e.push(Number(this.post?.updated_by)),this.postHistory.forEach(s=>{let i=Number(s.created_by);e.includes(i)||e.push(i)}),this.getUsersById(e),this.getVariables(JSON.parse(this.post.variable_ids))},error:n=>{this.isPostLoading=!1,this.changeDetector.detectChanges(),(0,u.N3)(n,this.toastr)}})}getVariables(n){this.variableService.getVariablesByIds({ids:n}).subscribe({next:s=>{this.variables=s.vars,this.isPostLoading=!1,this.changeDetector.detectChanges()},error:s=>{(0,u.N3)(s,this.toastr),this.isPostLoading=!1,this.changeDetector.detectChanges()}})}navigateSubcategory(){this.router.navigate(["categories/list/subcategory/"+this.post?.sub_category_id])}navigateEditPost(){this.router.navigate(["categories/article/edit/"+this.id])}navigatePost(n){this.router.navigate(["/posts/post/"+n])}openVersions(){if(this.postHistory?.length>0){const n=this.modalService.open(h,{scrollable:!0,modalDialogClass:"mw-1020",centered:!0});n.componentInstance.postHistoryList=this.postHistory,n.componentInstance.activePost=this.postHistory.find(e=>1===e.is_current),n.componentInstance.users=this.users}else(0,u.gD)("\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u043e\u0441\u0442\u0430 \u043e\u0442\u0441\u0443\u0442\u0441\u0432\u0443\u0435\u0442",this.toastr)}getPostVersionById(){this.isPostLoading=!0,this.changeDetector.detectChanges(),this.postService.getPostVersionById(this.id).subscribe({next:n=>{this.post=n.posts;let e=[];e.push(Number(this.post.created_by)),e.includes(Number(this.post?.updated_by))||e.push(Number(this.post?.updated_by)),this.getUsersById(e),this.getVariables(JSON.parse(this.post.variable_ids))},error:n=>{this.isPostLoading=!1,this.changeDetector.detectChanges(),(0,u.N3)(n,this.toastr)}})}revertPostVersion(){this.postService.revertPostVersion({post_id:this.post.post_id,post_history_id:this.post.id}).subscribe({next:e=>{this.navigatePost(e?.posts.id)},error:e=>{(0,u.N3)(e,this.toastr)}})}getUsersById(n){this.helperService.getUsersByIds(n).subscribe({next:e=>{this.users=e?.users,this.changeDetector.detectChanges()},error:e=>{(0,u.N3)(e,this.toastr)}})}getUserName(n){return this.users.length?this.users.find(e=>e.id===n)?.name:""}formatDate(n){return n?(0,u.F8)(n):""}deletePost(){const n=this.modalService.open(x.Y,{centered:!0});n.componentInstance.message=`\u0412\u044b \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u0442 "${this.post.title}"?`,n.result.then(e=>{e&&this.postService.deletePost(this.id).subscribe({next:s=>{(0,u.PE)(`\u041f\u043e\u0441\u0442 ${this.post?.title} \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d`,this.toastr),this.navigateSubcategory()},error:s=>{(0,u.N3)(s,this.toastr)}})})}}p.\u0275fac=function(n){return new(n||p)(t.Y36(t.sBO),t.Y36(v.gz),t.Y36(v.F0),t.Y36(A.L),t.Y36(U.S),t.Y36(Z._W),t.Y36(F.H),t.Y36(C.FF),t.Y36(y.W))},p.\u0275cmp=t.Xpm({type:p,selectors:[["bb-post"]],decls:40,vars:12,consts:[[1,"row"],[1,"col-9"],[1,"post"],[1,"post-header"],[1,"post-header__left","pointer",3,"click"],["src","./assets/icons/arrow_left_green.svg","alt",""],[1,"post-header__right"],["class","pointer",3,"click",4,"ngIf"],["id","postBody",1,"post-body"],[4,"ngIf"],[1,"post-title"],[3,"innerHTML",4,"ngIf"],[3,"html","variables",4,"ngIf"],[1,"col-3"],[1,"info"],[1,"info-header"],[1,"info-title"],[1,"info-body"],[1,"info-item"],[1,"info-subtitle"],[1,"info-text"],[1,"pointer",3,"click"],["src","./assets/icons/clock_green.svg","alt",""],["src","./assets/icons/edit_green.svg","alt",""],["src","./assets/icons/delete_urn_green.svg","alt",""],[3,"innerHTML"],[3,"html","variables"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),t.NdJ("click",function(){return e.navigateSubcategory()}),t.TgZ(5,"span"),t._UZ(6,"img",5),t.qZA(),t._uU(7),t.qZA(),t.TgZ(8,"div",6),t.YNc(9,N,4,0,"div",7),t.YNc(10,V,4,0,"div",7),t.YNc(11,D,4,0,"div",7),t.YNc(12,I,4,0,"div",7),t.qZA()(),t.TgZ(13,"div",8),t.YNc(14,E,2,1,"h2",9),t.TgZ(15,"h2",10),t._uU(16),t.qZA(),t.YNc(17,Y,1,1,"div",11),t.YNc(18,w,1,2,"bb-binder",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"div",14)(21,"div",15)(22,"p",16),t._uU(23,"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"),t.qZA()(),t.TgZ(24,"div",17)(25,"div",18)(26,"p",19),t._uU(27,"\u0410\u0432\u0442\u043e\u0440"),t.qZA(),t.TgZ(28,"p",20),t._uU(29),t.qZA()(),t.TgZ(30,"div",18)(31,"p",19),t._uU(32,"\u0414\u0430\u0442\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f"),t.qZA(),t.TgZ(33,"p",20),t._uU(34),t.qZA()(),t.TgZ(35,"div",18)(36,"p",19),t._uU(37,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0435\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435"),t.qZA(),t.TgZ(38,"p",20),t._uU(39),t.qZA()()()()()()),2&n&&(t.xp6(7),t.hij(" ",null==e.post?null:e.post.sub_category_name," "),t.xp6(2),t.Q6J("ngIf",!e.isVersionPost),t.xp6(1),t.Q6J("ngIf",!e.isVersionPost),t.xp6(1),t.Q6J("ngIf",e.isVersionPost),t.xp6(1),t.Q6J("ngIf",!e.isVersionPost),t.xp6(2),t.Q6J("ngIf",e.isVersionPost),t.xp6(2),t.hij(" ",null==e.post?null:e.post.title," "),t.xp6(1),t.Q6J("ngIf",0===e.variables.length&&(null==e.post?null:e.post.content)&&!e.isPostLoading),t.xp6(1),t.Q6J("ngIf",e.variables.length>0),t.xp6(11),t.Oqu(e.getUserName(null==e.post?null:e.post.created_by)),t.xp6(5),t.Oqu(e.formatDate(null==e.post?null:e.post.created_at)),t.xp6(5),t.Oqu(e.formatDate(null==e.post?null:e.post.updated_at)))},dependencies:[m.O5,g],styles:[".post[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px}.post-header[_ngcontent-%COMP%]{padding:16px 32px;display:flex;align-items:center;justify-content:space-between;color:#2ab514;border-bottom:1px #f3f3f3 solid}.post-header__right[_ngcontent-%COMP%], .post-header__left[_ngcontent-%COMP%]{display:flex;align-items:flex-end;gap:12px}.post-header__right[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .post-header__left[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.post-body[_ngcontent-%COMP%]{padding:16px 32px 32px}.post-title[_ngcontent-%COMP%]{margin-bottom:24px}.info[_ngcontent-%COMP%]{background-color:#fff;border-radius:8px}.info-header[_ngcontent-%COMP%]{background-color:#d7d7d7;padding:8px 16px}.info-body[_ngcontent-%COMP%]{padding:8px 16px}.info-item[_ngcontent-%COMP%]{padding:12px 0;border-bottom:1px solid #f3f3f3}.info-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none}.info-text[_ngcontent-%COMP%]{margin-left:12px}.info-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700}.info-subtitle[_ngcontent-%COMP%]{font-size:16px;font-weight:500}.variable[_ngcontent-%COMP%]{background-color:#ff0}.pointer[_ngcontent-%COMP%]{cursor:pointer}"]});var B=r(4466);const J=[{path:"post/:id",component:p},{path:"post-version/:id",component:p}];class d{}d.\u0275fac=function(n){return new(n||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[m.ez,v.Bz.forChild(J),B.m]})}}]);