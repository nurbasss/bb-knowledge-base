"use strict";(self.webpackChunkbb_web=self.webpackChunkbb_web||[]).push([[2],{1002:(Z,g,i)=>{i.r(g),i.d(g,{LoginModule:()=>s});var m=i(8692),o=i(9900),c=i(7553),e=i(4537),d=i(1315),p=i(7802),f=i(8292);function _(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"form",3)(1,"h2",4),e._uU(2,"\u0412\u043e\u0439\u0442\u0438"),e.qZA(),e.TgZ(3,"div",5),e._UZ(4,"input",6),e.TgZ(5,"label",7),e._uU(6,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"input",8),e.TgZ(9,"label",9),e._uU(10,"\u041f\u0430\u0440\u043e\u043b\u044c"),e.qZA()(),e.TgZ(11,"div",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onRegisterToggle())}),e.TgZ(12,"p"),e._uU(13,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),e.qZA()(),e.TgZ(14,"button",11),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.login())}),e._uU(15,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.form)}}function h(n,u){if(1&n){const t=e.EpF();e.TgZ(0,"form",3)(1,"h2",4),e._uU(2,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"),e.qZA(),e.TgZ(3,"div",5),e._UZ(4,"input",12),e.TgZ(5,"label",13),e._uU(6,"\u041f\u043e\u0447\u0442\u0430"),e.qZA()(),e.TgZ(7,"div",5),e._UZ(8,"input",14),e.TgZ(9,"label",15),e._uU(10,"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"),e.qZA()(),e.TgZ(11,"div",5),e._UZ(12,"input",16),e.TgZ(13,"label",7),e._uU(14,"\u041f\u0430\u0440\u043e\u043b\u044c"),e.qZA()(),e.TgZ(15,"div",10),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.onRegisterToggle())}),e.TgZ(16,"p"),e._uU(17,"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"),e.qZA()(),e.TgZ(18,"button",11),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.register())}),e._uU(19,"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c"),e.qZA()()}if(2&n){const t=e.oxw();e.Q6J("formGroup",t.form)}}class l{constructor(u,t,a,r){this.loginService=u,this.router=t,this.toastr=a,this.changeDetector=r,this.isRegister=!1}ngOnInit(){this.form=new o.cw({email:new o.NI("",o.kI.required),password:new o.NI("",o.kI.required)})}login(){this.form.valid?this.loginService.login(this.form.controls.email.value,this.form.controls.password.value):(0,c.Ss)(this.form,this.toastr)}onKeyPress(u){13===u.keyCode&&(this.isRegister||this.login())}onRegisterToggle(){this.isRegister=!this.isRegister,this.form.reset(),this.form=new o.cw(this.isRegister?{email:new o.NI("",[o.kI.required,o.kI.email]),username:new o.NI("",o.kI.required),password:new o.NI("",o.kI.required)}:{email:new o.NI("",o.kI.required),password:new o.NI("",o.kI.required)}),this.changeDetector.detectChanges()}register(){this.form.valid?this.loginService.register({email:this.form.controls.email.value,password:this.form.controls.password.value,name:this.form.controls.username.value}):(this.form?.get("email").hasError("email")&&((0,c.gD)("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",this.toastr),document.getElementById("email").focus()),(0,c.Ss)(this.form,this.toastr))}}l.\u0275fac=function(u){return new(u||l)(e.Y36(d.r),e.Y36(p.F0),e.Y36(f._W),e.Y36(e.sBO))},l.\u0275cmp=e.Xpm({type:l,selectors:[["bb-login"]],decls:4,vars:2,consts:[[1,"login__wrapper"],[3,"ngIf"],[1,"login__bg"],[1,"login",3,"formGroup"],[1,"login__header"],[1,"form-floating","mb-4"],["type","text","formControlName","email","id","email","placeholder","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"form-control"],["for","floatingUserName"],["type","password","id","password","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"form-control"],["for","password"],[1,"login__secondary","mb-4",3,"click"],[1,"_btn","btn-success",3,"click"],["type","text","id","email","formControlName","email","placeholder","\u041f\u043e\u0447\u0442\u0430",1,"form-control"],["for","email"],["type","text","id","username","formControlName","username","placeholder","\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",1,"form-control"],["for","username"],["type","password","id","floatingPassword","formControlName","password","placeholder","\u041f\u0430\u0440\u043e\u043b\u044c",1,"form-control"]],template:function(u,t){1&u&&(e.TgZ(0,"div",0),e.YNc(1,_,16,1,"ng-template",1),e.YNc(2,h,20,1,"ng-template",1),e.qZA(),e._UZ(3,"div",2)),2&u&&(e.xp6(1),e.Q6J("ngIf",!t.isRegister),e.xp6(1),e.Q6J("ngIf",t.isRegister))},dependencies:[m.O5,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u],styles:[".login[_ngcontent-%COMP%]{width:544px;background-color:#fff;border-radius:12px;padding:32px;z-index:2}.login__wrapper[_ngcontent-%COMP%]{margin-top:64px;display:flex;justify-content:center}.login__header[_ngcontent-%COMP%]{font-weight:600;font-size:40px;text-align:center;color:#152536;margin-bottom:32px}.login__bg[_ngcontent-%COMP%]{position:fixed;bottom:0;left:0;width:214px;height:170px;background-repeat:no-repeat;background-size:contain;background-image:url(login_search.2293d7dec59e913c.svg)}.login__secondary[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;cursor:pointer}.login__secondary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;color:#88999c}"]});const C=[{path:"",component:l}];class s{}s.\u0275fac=function(u){return new(u||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.ez,p.Bz.forChild(C),o.UX,o.u5]})}}]);