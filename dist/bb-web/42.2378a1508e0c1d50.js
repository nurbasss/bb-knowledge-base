"use strict";(self.webpackChunkbb_web=self.webpackChunkbb_web||[]).push([[42],{2042:(z,S,o)=>{o.r(S),o.d(S,{HomeModule:()=>d});var T=o(4466),l=o(8692),t=o(4537),Z=o(7894),x=o(9900),u=o(7553),C=o(9676),L=o(3151),w=o(2147),P=o(3942),v=o(2340),b=o(2677),M=o(4121),F=o(5732);class h{constructor(e){this.http=e,this.searchHistory$=new M.X(null),this.searchResult$=new M.X(null)}searchPost(e){return this.http.post(`${v.N.baseUrl+b.mA}`,{value:e})}getHistory(){return this.http.get(`${v.N.baseUrl+b.R3}`)}clearHistory(){return this.http.post(`${v.N.baseUrl+b.Er}`,{})}}h.\u0275fac=function(e){return new(e||h)(t.LFG(F.eN))},h.\u0275prov=t.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"});var H=o(8292),y=o(7802);const A=function(s){return{backgroundColor:s}};class g{constructor(){this.title="",this.text="",this.rightText="",this.color="",this.isDelete=!1,this.delete=new t.vpe,this.navigate=new t.vpe}ngOnInit(){}onNavigate(){this.navigate.emit(!0)}onDelete(){this.delete.emit(!0)}}g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=t.Xpm({type:g,selectors:[["bb-search-result"]],inputs:{title:"title",text:"text",rightText:"rightText",color:"color",isDelete:"isDelete"},outputs:{delete:"delete",navigate:"navigate"},decls:6,vars:5,consts:[[1,"search-result"],[1,"search-result-filled",3,"ngStyle","click"],[1,"search-result__title",3,"click"],[1,"search-result__text","right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.NdJ("click",function(){return n.onNavigate()}),t.qZA(),t.TgZ(2,"div",2),t.NdJ("click",function(){return n.onNavigate()}),t._uU(3),t.qZA(),t.TgZ(4,"div",3),t._uU(5),t.qZA()()),2&e&&(t.xp6(1),t.Q6J("ngStyle",t.VKq(3,A,n.color)),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.rightText))},dependencies:[l.PC],styles:[".search-result[_ngcontent-%COMP%]{padding:10px;background-color:#f3f3f3;display:flex;align-items:center;gap:20px;border-radius:12px}.search-result-filled[_ngcontent-%COMP%]{height:50px;width:120px;border-radius:12px;cursor:pointer}.search-result__title[_ngcontent-%COMP%]{flex:1;font-size:16px;font-weight:500;color:#152536;letter-spacing:.02em;cursor:pointer}.search-result__text[_ngcontent-%COMP%]{font-size:12px;font-weight:300;color:#152536;letter-spacing:.02em}.search-result__text.right[_ngcontent-%COMP%]{text-align:end;padding-right:12px}"]});var O=o(605);function D(s,e){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"bb-search-result",18),t.NdJ("navigate",function(){const a=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.navigatePost(null==a?null:a.id))}),t.qZA()(),t.BQk()}if(2&s){const n=e.$implicit,r=e.index,i=t.oxw(2);t.xp6(2),t.Q6J("color",i.getColor(r))("title",null==n?null:n.title)("rightText",i.formatDate(null==n?null:n.updated_at))}}function B(s,e){1&s&&(t.TgZ(0,"div",19),t._uU(1,"\u041d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"),t.qZA())}function J(s,e){1&s&&(t.TgZ(0,"div",20)(1,"p",21),t._uU(2,"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435"),t.qZA(),t.TgZ(3,"span",22),t._UZ(4,"img",23),t.qZA()())}function U(s,e){if(1&s&&(t.TgZ(0,"bb-loader",11)(1,"div",12)(2,"p",13),t._uU(3,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u043f\u043e\u0438\u0441\u043a\u0430"),t.qZA(),t.YNc(4,D,3,3,"ng-container",14),t.YNc(5,B,2,0,"div",15),t.YNc(6,J,5,0,"div",16),t.qZA()()),2&s){const n=t.oxw();t.Q6J("loading",n.isSearchLoading),t.xp6(4),t.Q6J("ngForOf",n.searchResults),t.xp6(1),t.Q6J("ngIf",n.notFound),t.xp6(1),t.Q6J("ngIf",(null==n.allSearchResults?null:n.allSearchResults.length)>4&&!n.isSearchPage)}}function N(s,e){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"div",17)(2,"bb-search-result",27),t.NdJ("delete",function(){const a=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.onHistoryDelete(a))})("navigate",function(){const a=t.CHM(n).$implicit,c=t.oxw(2);return t.KtG(c.onHistoryClicked(null==a?null:a.value))}),t.qZA()(),t.BQk()}if(2&s){const n=e.$implicit,r=e.index,i=t.oxw(2);t.xp6(2),t.Q6J("color",i.getColor(r))("title",null==n?null:n.value)("isDelete",!0)("rightText",i.formatDate(null==n?null:n.created_at))}}function E(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",20)(1,"p",28),t.NdJ("click",function(){t.CHM(n);const i=t.oxw(2);return t.KtG(i.showMoreHistory())}),t._uU(2," \u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 "),t.qZA(),t.TgZ(3,"span",22),t._UZ(4,"img",23),t.qZA()()}}function k(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"bb-loader",11)(1,"div",12)(2,"div",24)(3,"div")(4,"p",21),t._uU(5,"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430"),t.qZA()(),t.TgZ(6,"div",25),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return t.KtG(i.clearHistory())}),t._UZ(7,"img",26),t.TgZ(8,"p",21),t._uU(9,"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e"),t.qZA()()(),t.YNc(10,N,3,4,"ng-container",14),t.YNc(11,E,5,0,"div",16),t.qZA()()}if(2&s){const n=t.oxw();t.Q6J("loading",n.isHistoryLoading),t.xp6(10),t.Q6J("ngForOf",n.historyList),t.xp6(1),t.Q6J("ngIf",(null==n.allHistoryList?null:n.allHistoryList.length)>4&&!n.isSearchPage)}}const Q=function(s){return{"border-green":s}},R=function(s){return{"display-none":s}};class p extends Z.A{constructor(e,n,r,i,a){super(),this.changeDetector=e,this.helperService=n,this.searchService=r,this.toastr=i,this.router=a,this.searchResults=[],this.allSearchResults=[],this.isFocused=!1,this.isSearchLoading=!1,this.notFound=!1,this.isHistoryLoading=!1,this.historyList=[],this.allHistoryList=[],this.searchString=new x.NI}get isSearchPage(){return this.router.url.includes("/search")}ngOnInit(){this.isSearchPage&&(this.addSubscriber(this.helperService.searchString.pipe((0,C.P)()).subscribe(e=>{this.searchString.setValue(e),document.getElementById("searchString").focus(),e&&this.searchPost(e),this.changeDetector.detectChanges()})),this.addSubscriber(this.searchService.searchResult$.pipe((0,C.P)()).subscribe(e=>{this.searchResults=e,this.changeDetector.detectChanges()})),this.addSubscriber(this.searchService.searchHistory$.pipe((0,C.P)()).subscribe(e=>{this.historyList=e,this.changeDetector.detectChanges()}))),this.addSubscriber(this.searchString.valueChanges.pipe((0,L.b)(300),(0,w.x)()).subscribe(e=>{e?(this.searchSubscription&&this.searchSubscription.unsubscribe(),this.searchPost(e)):this.getHistory()})),this.searchString?.value||this.getHistory()}cleanInput(){this.searchString.setValue(""),this.changeDetector.detectChanges()}onFocus(){this.isFocused=!0,this.changeDetector.detectChanges()}onBlur(){this.isFocused=!1,this.changeDetector.detectChanges()}getColor(e){return(0,u.C0)(e)}searchPost(e){this.isSearchLoading=!0,this.notFound=!1,this.changeDetector.detectChanges(),this.searchSubscription=this.searchService.searchPost(e).subscribe({next:n=>{this.isSearchLoading=!1,this.allSearchResults=n?.posts,this.searchResults=n?.posts.slice(0,4),0===n?.posts?.length&&(this.notFound=!0),this.changeDetector.detectChanges()},error:n=>{(0,u.N3)(n,this.toastr),this.isSearchLoading=!1,this.changeDetector.detectChanges()}})}getHistory(){this.isHistoryLoading=!0,this.changeDetector.detectChanges(),this.searchService.getHistory().subscribe(e=>{this.isHistoryLoading=!1,this.allHistoryList=e?.search_history.reverse(),this.historyList=this.isSearchPage?[...this.allHistoryList]:this.allHistoryList.slice(0,4),this.changeDetector.detectChanges()})}formatDate(e){return e?(0,u.F8)(e):""}showMoreHistory(){this.searchService.searchHistory$.next(this.allHistoryList),this.router.navigate(["home/search"])}showMorePost(){this.searchService.searchResult$.next(this.allSearchResults),this.router.navigate(["home/search"])}navigatePost(e){this.router.navigate(["/posts/post/"+e])}onHistoryClicked(e){this.isSearchPage?(this.searchString.setValue(e),this.searchPost(e)):(this.helperService.searchString.next(e),this.router.navigate(["home/search"]))}clearHistory(){this.addSubscriber(this.searchService.clearHistory().subscribe(e=>{this.historyList=[],this.allHistoryList=[],this.changeDetector.detectChanges(),(0,u.PE)("\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0443\u0434\u0430\u043b\u0435\u043d\u0430",this.toastr)}))}}p.\u0275fac=function(e){return new(e||p)(t.Y36(t.sBO),t.Y36(P.W),t.Y36(h),t.Y36(H._W),t.Y36(y.F0))},p.\u0275cmp=t.Xpm({type:p,selectors:[["bb-search-bar"]],features:[t.qOj],decls:13,vars:9,consts:[[1,"search"],[1,"search__header"],[1,"search__title"],[1,"search__input-wrapper",3,"ngClass"],[1,"search__input-icon"],["src","./assets/icons/search_large.svg","alt",""],["type","text","placeholder","\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430","id","searchString",1,"search__input",3,"formControl","focus","blur","change"],["search",""],[1,"search__input-icon",3,"ngClass","click"],["src","./assets/icons/delete.svg","alt",""],[3,"ngIf"],[3,"loading"],[1,"search-result"],[1,"search-result__title","mb_24"],[4,"ngFor","ngForOf"],["class","search-not-found",4,"ngIf"],["class","search-result__more",4,"ngIf"],[1,"search-item"],[3,"color","title","rightText","navigate"],[1,"search-not-found"],[1,"search-result__more"],[1,"search-result__title"],[1,"icon-arrow"],["src","./assets/icons/arrow_right_stroke.svg","alt",""],[1,"search-result__inner"],[1,"search-result__btn",3,"click"],["src","./assets/icons/delete_urn.svg","alt",""],[3,"color","title","isDelete","rightText","delete","navigate"],[1,"search-result__title",3,"click"]],template:function(e,n){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"\u041f\u043e\u0438\u0441\u043a"),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4),t._UZ(6,"img",5),t.qZA(),t.TgZ(7,"input",6,7),t.NdJ("focus",function(){return n.onFocus()})("blur",function(){return n.onBlur()})("change",function(){t.CHM(r);const a=t.MAs(8);return t.KtG(a.value=a.value.trim())}),t.qZA(),t.TgZ(9,"div",8),t.NdJ("click",function(){return n.cleanInput()}),t._UZ(10,"img",9),t.qZA()(),t.YNc(11,U,7,4,"ng-template",10),t.YNc(12,k,12,3,"ng-template",10),t.qZA()}2&e&&(t.xp6(4),t.Q6J("ngClass",t.VKq(5,Q,n.isFocused)),t.xp6(3),t.Q6J("formControl",n.searchString),t.xp6(2),t.Q6J("ngClass",t.VKq(7,R,!n.searchString.value)),t.xp6(2),t.Q6J("ngIf",n.searchString.value||n.isSearchLoading),t.xp6(1),t.Q6J("ngIf",!(null!=n.searchString&&n.searchString.value)&&(null==n.historyList?null:n.historyList.length)||n.isHistoryLoading))},dependencies:[l.mk,l.sg,l.O5,x.Fj,x.JJ,x.oH,g,O.R],styles:[".search__header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:32px}.search__title[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#152536;letter-spacing:.02em}.search__filter[_ngcontent-%COMP%]{display:flex;gap:8px;align-items:center}.search__input[_ngcontent-%COMP%]{flex:2;border:none;background-color:transparent;font-size:16px;color:#152536;font-weight:600}.search__input[_ngcontent-%COMP%]:focus{border:none;outline:none}.search__input-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:space-between;border:1px solid #88999c;background-color:#f3f3f3;border-radius:16px}.search__input-wrapper.border-green[_ngcontent-%COMP%]{border-color:#50c55a}.search__input-icon[_ngcontent-%COMP%]{cursor:pointer;display:flex;width:24px;height:24px}.search__input-icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:24px;height:24px}.search__input-icon[_ngcontent-%COMP%]:first-child{margin:18px 24px}.search__input-icon[_ngcontent-%COMP%]:last-child{margin:18px 24px 18px 16px}.search-result[_ngcontent-%COMP%]{margin-top:24px}.search-result__title[_ngcontent-%COMP%]{font-weight:600;font-size:16px;color:#979ea3;letter-spacing:.02em}.search-result__more[_ngcontent-%COMP%]{margin-top:24px;display:flex;gap:4px;align-items:center}.search-result__inner[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:24px}.search-result__btn[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;cursor:pointer}.search-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}.display-none[_ngcontent-%COMP%]{display:none}.icon-arrow[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}@media screen and (max-width: 568px){.search__title[_ngcontent-%COMP%]{font-size:24px}}"]});var I=o(4135);const Y=function(s){return{backgroundColor:s}};function q(s,e){if(1&s){const n=t.EpF();t.TgZ(0,"div",6),t._UZ(1,"div",7),t.TgZ(2,"div",8)(3,"div",9)(4,"div",10),t.NdJ("click",function(){const a=t.CHM(n).$implicit,c=t.oxw();return t.KtG(c.navigatePost(null==a?null:a.id))}),t._uU(5),t.qZA(),t.TgZ(6,"div",11),t._uU(7),t.qZA()(),t._UZ(8,"div",12),t.qZA()()}if(2&s){const n=e.$implicit,r=e.index,i=t.oxw();t.xp6(1),t.Q6J("ngStyle",t.VKq(4,Y,i.getColor(r+5))),t.xp6(4),t.hij(" ",null==n?null:n.title," "),t.xp6(2),t.hij(" ",i.formatDate(null==n?null:n.updated_at)," "),t.xp6(1),t.Q6J("innerHTML",null==n?null:n.description,t.oJD)}}class _{constructor(e,n,r){this.changeDetector=e,this.router=n,this.postService=r,this.updatesList=[],this.isListLoading=!1}ngOnInit(){this.isListLoading=!0,this.changeDetector.detectChanges(),this.postService.getAllPosts().subscribe(e=>{this.isListLoading=!1;let n=e?.posts;n.sort((r,i)=>{const a=new Date(r?.updated_at).getTime();return new Date(i?.updated_at).getTime()-a}),this.updatesList=[...n.slice(0,5)],this.changeDetector.detectChanges()})}navigatePost(e){this.router.navigate(["/posts/post/"+e])}getColor(e){return(0,u.C0)(e)}formatDate(e){return e?(0,u.F8)(e):""}}_.\u0275fac=function(e){return new(e||_)(t.Y36(t.sBO),t.Y36(y.F0),t.Y36(I.L))},_.\u0275cmp=t.Xpm({type:_,selectors:[["bb-last-updated-list"]],decls:7,vars:2,consts:[[1,"updated-list"],[1,"updated-list__header"],[1,"updated-list__title"],[1,"updated-list__body"],[3,"loading"],["class","list-item",4,"ngFor","ngForOf"],[1,"list-item"],[1,"list-item__filled",3,"ngStyle"],[1,"list-item__body"],[1,"list-item__header"],[1,"list-item__text","hover",3,"click"],[1,"list-item__time"],[1,"list-item__description",3,"innerHTML"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3,"\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f / \u043f\u043e\u0441\u0442\u044b"),t.qZA()(),t.TgZ(4,"div",3)(5,"bb-loader",4),t.YNc(6,q,9,6,"div",5),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("loading",n.isListLoading),t.xp6(1),t.Q6J("ngForOf",n.updatesList))},dependencies:[l.sg,l.PC,O.R],styles:[".updated-list[_ngcontent-%COMP%]{border-radius:12px;background-color:#fff}.updated-list__header[_ngcontent-%COMP%]{background-color:#d7d7d7;padding:16px 32px;border-top-right-radius:12px;border-top-left-radius:12px}.updated-list__title[_ngcontent-%COMP%]{font-size:32px;font-weight:700;color:#152536;letter-spacing:.02em}.updated-list__body[_ngcontent-%COMP%]{padding:24px 32px}.updated-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]{display:flex;gap:16px;justify-content:space-between;align-items:center;min-height:100px}.updated-list[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]:not(:last-child){margin-bottom:16px}.updated-list[_ngcontent-%COMP%]   .list-item__filled[_ngcontent-%COMP%]{height:100px;min-width:100px;border-radius:8px}.updated-list[_ngcontent-%COMP%]   .list-item__body[_ngcontent-%COMP%]{width:100%;align-self:flex-start}.updated-list[_ngcontent-%COMP%]   .list-item__header[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between}.updated-list[_ngcontent-%COMP%]   .list-item__text[_ngcontent-%COMP%]{font-weight:600;font-size:16px}.updated-list[_ngcontent-%COMP%]   .list-item__description[_ngcontent-%COMP%], .updated-list[_ngcontent-%COMP%]   .list-item__time[_ngcontent-%COMP%]{color:#505c64;font-weight:500;font-size:14px}.updated-list[_ngcontent-%COMP%]   .list-item__description[_ngcontent-%COMP%]{display:-webkit-box;max-width:100%;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis}@media screen and (max-width: 768px){.updated-list__body[_ngcontent-%COMP%]{padding:24px}.updated-list__header[_ngcontent-%COMP%]{padding:16px 24px}}@media screen and (max-width: 568px){.updated-list__title[_ngcontent-%COMP%]{font-size:24px}.updated-list__body[_ngcontent-%COMP%], .updated-list__header[_ngcontent-%COMP%]{padding:16px}}"]});class m{constructor(){}ngOnInit(){}}m.\u0275fac=function(e){return new(e||m)},m.\u0275cmp=t.Xpm({type:m,selectors:[["bb-home"]],decls:4,vars:0,consts:[[1,"container-wrapper"],[1,"mt-32"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"bb-search-bar"),t.qZA(),t.TgZ(2,"div",1),t._UZ(3,"bb-last-updated-list"),t.qZA())},dependencies:[p,_],styles:[".mt-32[_ngcontent-%COMP%]{margin-top:32px}"]});class f{constructor(e){this.helperService=e}ngOnInit(){this.helperService.showSearchDropdown.next(!1)}}f.\u0275fac=function(e){return new(e||f)(t.Y36(P.W))},f.\u0275cmp=t.Xpm({type:f,selectors:[["bb-search-page"]],decls:2,vars:0,consts:[[1,"container-wrapper","search-page"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"bb-search-bar"),t.qZA())},dependencies:[p],styles:[".search-page[_ngcontent-%COMP%]{background-color:none}"]});const $=[{path:"",component:m},{path:"search",component:f}];class d{}d.\u0275fac=function(e){return new(e||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[l.ez,y.Bz.forChild($),T.m]})}}]);