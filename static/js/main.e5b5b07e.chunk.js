(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{13:function(e,t,n){e.exports={auth:"AuthForm_auth__3GVRd",control:"AuthForm_control__1w6MG",actions:"AuthForm_actions__3Sslw",toggle:"AuthForm_toggle__1fNg1"}},20:function(e,t,n){e.exports={form:"ProfileForm_form__23St5",control:"ProfileForm_control__1IYMx",action:"ProfileForm_action__NuspL"}},22:function(e,t,n){e.exports={header:"MainNavigation_header__1Iv58",logo:"MainNavigation_logo__3j4ah"}},24:function(e,t,n){e.exports={profile:"UserProfile_profile__2eURa"}},25:function(e,t,n){e.exports={starting:"StartingPageContent_starting__2KcgZ"}},30:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(23),r=n.n(c),o=n(7),s=(n(30),n(2)),i=n(0),a=n(22),l=n.n(a),j=n(3),u=function(){var e=Object(s.l)();return Object(j.jsxs)("header",{className:l.a.header,children:[Object(j.jsx)(o.b,{to:"/",children:Object(j.jsx)("div",{className:l.a.logo,children:"React Auth"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/auth",children:"Login"})}),Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/profile",children:"Profile"})}),Object(j.jsx)("li",{children:Object(j.jsx)("button",{onClick:function(t){t.preventDefault(),e("/auth")},children:"Logout"})})]})})]})},h=function(e){return Object(j.jsxs)(i.Fragment,{children:[Object(j.jsx)(u,{}),Object(j.jsx)("main",{children:e.children})]})},d=n(20),b=n.n(d),O=function(){return Object(j.jsxs)("form",{className:b.a.form,children:[Object(j.jsxs)("div",{className:b.a.control,children:[Object(j.jsx)("label",{htmlFor:"new-password",children:"New Password"}),Object(j.jsx)("input",{type:"password",id:"new-password"})]}),Object(j.jsx)("div",{className:b.a.action,children:Object(j.jsx)("button",{children:"Change Password"})})]})},x=n(24),f=n.n(x),m=function(){return Object(j.jsxs)("section",{className:f.a.profile,children:[Object(j.jsx)("h1",{children:"Your User Profile"}),Object(j.jsx)(O,{})]})},p=n(4),g="AIzaSyBh9d5XhMI-BQ64QZRLXmUPMwcYePHrXcI",_=n(13),v=n.n(_),w=function(){var e=Object(i.useState)(!0),t=Object(p.a)(e,2),n=t[0],c=t[1],r=Object(i.useRef)(),o=Object(i.useRef)(),a=Object(s.l)();return Object(j.jsxs)("section",{className:v.a.auth,children:[Object(j.jsx)("h1",{children:n?"Login":"Sign Up"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=r.current.value,c=o.current.value;r.current.value="",o.current.value="",n?fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=".concat(g),{method:"POST",body:JSON.stringify({email:t,password:c,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then((function(e){e.ok?(console.log(e),a("/profile")):e.json().then((function(e){var t="Authentication is failed";e.error&&e.error.message&&(t=e.error.message),alert(t)}))})):fetch("  https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=".concat(g),{method:"POST",body:JSON.stringify({email:t,password:c,returnSecureToken:!0}),headers:{"Content-type":"application/json"}}).then((function(e){e.ok?(console.log(e),a("/profile")):e.json().then((function(e){var t="Authentication is failed";e.error&&e.error.message&&(t=e.error.message),alert(t)}))}))},children:[Object(j.jsxs)("div",{className:v.a.control,children:[Object(j.jsx)("label",{htmlFor:"email",children:"Your Email"}),Object(j.jsx)("input",{type:"email",ref:r,id:"email",required:!0})]}),Object(j.jsxs)("div",{className:v.a.control,children:[Object(j.jsx)("label",{htmlFor:"password",children:"Your Password"}),Object(j.jsx)("input",{type:"password",ref:o,id:"password",required:!0})]}),Object(j.jsxs)("div",{className:v.a.actions,children:[Object(j.jsx)("button",{children:n?"Login":"Create Account"}),Object(j.jsx)("button",{type:"button",className:v.a.toggle,onClick:function(){c((function(e){return!e}))},children:n?"Create new account":"Login with existing account"})]})]})]})},N=function(){return Object(j.jsx)(w,{})},y=n(25),P=n.n(y),S=function(){return Object(j.jsx)("section",{className:P.a.starting,children:Object(j.jsx)("h1",{children:"Welcome on Board!"})})},k=function(){return Object(j.jsx)(S,{})};var F=function(){return Object(j.jsx)(h,{children:Object(j.jsxs)(s.c,{children:[Object(j.jsx)(s.a,{path:"/",element:Object(j.jsx)(k,{})}),Object(j.jsx)(s.a,{path:"/auth",element:Object(j.jsx)(N,{})}),Object(j.jsx)(s.a,{path:"/profile",element:Object(j.jsx)(m,{})})]})})};r.a.render(Object(j.jsx)(o.a,{children:Object(j.jsx)(F,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.e5b5b07e.chunk.js.map