"use strict";(self.webpackChunkbb_web=self.webpackChunkbb_web||[]).push([[2],{1002:(Z,l,t)=>{t.r(l),t.d(l,{LoginModule:()=>r});var g=t(8692),o=t(9900),p=t(7553),u=t(4537),d=t(1315),c=t(8247),f=t(8292);function m(e,n){if(1&e){const i=u.EpF();u.TgZ(0,"form",3)(1,"h2",4),u._uU(2,"\u0412\u043e\u0439\u0442\u0438"),u.qZA(),u.TgZ(3,"div",5),u._UZ(4,"input",6),u.TgZ(5,"label",7),u._uU(6,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),u.qZA()(),u.TgZ(7,"div",5),u._UZ(8,"input",8),u.TgZ(9,"label",9),u._uU(10,"\u041f\u0430\u0440\u043e\u043b\u044c"),u.qZA()(),u.TgZ(11,"div",10)(12,"p"),u._uU(13,"\u0417\u0430\u0431\u044b\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c?"),u.qZA()(),u.TgZ(14,"button",11),u.NdJ("click",function(){u.CHM(i);const _=u.oxw();return u.KtG(_.login())}),u._uU(15,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),u.qZA()()}if(2&e){const i=u.oxw();u.Q6J("formGroup",i.form)}}function C(e,n){1&e&&(u.TgZ(0,"div",12)(1,"h2",4),u._uU(2,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),u.qZA(),u.TgZ(3,"div",5),u._UZ(4,"input",13),u.TgZ(5,"label",7),u._uU(6,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),u.qZA()(),u.TgZ(7,"div",5),u._UZ(8,"input",14),u.TgZ(9,"label",7),u._uU(10,"\u041f\u0430\u0440\u043e\u043b\u044c"),u.qZA()(),u.TgZ(11,"button",15),u._uU(12,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),u.qZA()())}class s{constructor(n,i,a){this.loginService=n,this.router=i,this.toastr=a,this.isRegister=!1}ngOnInit(){this.form=new o.cw({email:new o.NI("",o.kI.required),password:new o.NI("",o.kI.required)})}login(){this.form.valid?this.loginService.login(this.form.controls.email.value,this.form.controls.password.value):(0,p.Ss)(this.form,this.toastr)}onKeyPress(n){13===n.keyCode&&this.login()}}s.\u0275fac=function(n){return new(n||s)(u.Y36(d.r),u.Y36(c.F0),u.Y36(f._W))},s.\u0275cmp=u.Xpm({type:s,selectors:[["bb-login"]],decls:4,vars:2,consts:[[1,"login__wrapper"],[3,"ngIf"],[1,"login__bg"],[1,"login",3,"formGroup"],[1,"login__header"],[1,"form-floating","mb-4"],["type","text","formControlName","email","id","email","placeholder","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"form-control"],["for","floatingUserName"],["type","password","id","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"form-control"],["for","password"],[1,"login__secondary","mb-4"],[1,"_btn","btn-success",3,"click"],[1,"login"],["type","text","id","floatingUsername","placeholder","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"form-control"],["type","password","id","floatingPassword","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"form-control"],[1,"_btn","btn-success"]],template:function(n,i){1&n&&(u.TgZ(0,"div",0),u.YNc(1,m,16,1,"ng-template",1),u.YNc(2,C,13,0,"ng-template",1),u.qZA(),u._UZ(3,"div",2)),2&n&&(u.xp6(1),u.Q6J("ngIf",!i.isRegister),u.xp6(1),u.Q6J("ngIf",i.isRegister))},dependencies:[g.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".login[_ngcontent-%COMP%]{width:544px;background-color:#fff;border-radius:12px;padding:32px;z-index:2}.login__wrapper[_ngcontent-%COMP%]{margin-top:64px;display:flex;justify-content:center}.login__header[_ngcontent-%COMP%]{font-weight:600;font-size:40px;text-align:center;color:#152536;margin-bottom:32px}.login__bg[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:214px;height:170px;background-repeat:no-repeat;background-size:contain;background-image:url(login_search.2293d7dec59e913c.svg)}.login__secondary[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;cursor:pointer}.login__secondary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#88999c}"]});const h=[{path:"",component:s}];class r{}r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=u.oAB({type:r}),r.\u0275inj=u.cJS({imports:[g.ez,c.Bz.forChild(h),o.UX,o.u5]})}}]);