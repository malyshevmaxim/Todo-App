(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{108:function(A,e,t){"use strict";t.r(e);var a=t(2),n=t(0),i=t.n(n),c=t(10),s=t.n(c),r=t(50),o=t(12),l=t(146),h=t(148),j=t(28),b=t.n(j),m=t(16),d=t(31),u=t(17),O=t(18),p=t(140),C=t(77),U=t(11),R=t.n(U),E=new C.a,x=function(A){Object(u.a)(t,A);var e=Object(O.a)(t);function t(){var A;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(A=e.call.apply(e,[this].concat(n))).state={userName:"",avatarUrl:"",userBio:"",isLoading:!0,repoList:[],errorLoading:!1,errorText:""},A}return Object(d.a)(t,[{key:"componentDidMount",value:function(){var A=this;E.repos.listForUser({username:"malyshevmaxim"}).then((function(e){var t=e.data;A.setState({repoList:t,isLoading:!1})})).catch((function(e){return A.setState({isLoading:!1,errorLoading:!0,errorText:e.name})})),E.users.getByUsername({username:"malyshevmaxim"}).then((function(e){A.setState({userName:e.data.login,avatarUrl:e.data.avatar_url,userBio:e.data.bio})}))}},{key:"render",value:function(){var A=this.state,e=A.userName,t=A.avatarUrl,n=A.userBio,i=A.isLoading,c=A.repoList,s=A.errorLoading,r=A.errorText;return Object(a.jsxs)("div",{className:R.a.wrap,children:[Object(a.jsx)("h1",{className:R.a.title,children:i?Object(a.jsx)(p.a,{color:"secondary"}):"Malyshev Maxim"}),Object(a.jsx)("div",{className:R.a.img,children:Object(a.jsx)("img",{className:R.a.avatar,src:t,alt:"avatar"})}),!i&&Object(a.jsxs)("div",{children:[s?Object(a.jsxs)("p",{children:["Error: ",r," "]}):Object(a.jsxs)("ol",{className:R.a.ol,children:[Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{className:R.a.text,children:["My profile on GitHub ",Object(a.jsx)("a",{className:R.a.link,href:"https://github.com/malyshevmaxim",children:e})]}),Object(a.jsx)("p",{className:R.a.text,children:n})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("h2",{className:R.a.title,children:"My projects"}),Object(a.jsx)("p",{className:R.a.text,children:"Responsive layout of one-page sites (HTML, CSS):"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:R.a.link,href:"https://malyshevmaxim.github.io/Axion/",children:"Axion"})}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:R.a.link,href:"https://malyshevmaxim.github.io/Tesla/",children:"Tesla"})}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:R.a.link,href:"https://malyshevmaxim.github.io/App.creation/",children:"App.creation"})}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:R.a.link,href:"https://malyshevmaxim.github.io/Digital-meeting-day/",children:"Digital meeting day"})}),Object(a.jsx)("p",{className:R.a.text,children:"Card game (JavaScript):"}),Object(a.jsx)("p",{children:Object(a.jsx)("a",{className:R.a.link,href:"https://malyshevmaxim.github.io/Find-a-bug/",children:'"Find a bug"'})})]}),Object(a.jsx)("h2",{className:R.a.title,children:"My repositories"}),c.map((function(A){return Object(a.jsxs)("li",{children:[Object(a.jsx)("a",{className:R.a.link,href:A.html_url,children:A.name}),Object(a.jsx)("p",{className:R.a.text,children:A.description}),Object(a.jsx)("p",{className:R.a.text,children:A.language})]},A.id)}))]}),Object(a.jsx)("div",{children:Object(a.jsx)("p",{className:R.a.mark,children:"Created in WebHeroSchool"})})]})]})}}]),t}(i.a.Component),w=t(78),N=t(74),F=t(22),g=t(147),f=t(111),K=function(A){Object(u.a)(t,A);var e=Object(O.a)(t);function t(){var A;Object(m.a)(this,t);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(A=e.call.apply(e,[this].concat(n))).state={inputValue:"",error:!1,errorMessage:"",buttonColor:"default",buttonEnabled:!1},A.runErr=function(e){A.setState({errorMessage:e,error:!0,buttonColor:"secondary"})},A.onButtonClick=function(e){A.setState({inputValue:e.target.value.toUpperCase(),buttonEnabled:e.target.value.length>0}),A.props.onClickAdd(A.state.inputValue)},A}return Object(d.a)(t,[{key:"render",value:function(){var A=this,e=this.props,t=e.onClickAdd,n=e.items;return Object(a.jsxs)("div",{children:[Object(a.jsx)(g.a,{id:"standard-full-width",style:{margin:8},placeholder:"What needs to be done?",helperText:this.state.errorMessage,fullWidth:!0,value:this.state.inputValue,onChange:function(e){return A.setState({inputValue:e.target.value.toUpperCase()})},margin:"normal",InputLabelProps:{shrink:!0}}),Object(a.jsx)(f.a,{variant:"outlined",fullWidth:!0,color:this.state.buttonColor,onClick:function(){var e=!1;n.forEach((function(t){A.state.inputValue===t.value&&(e=!0)})),""===A.state.inputValue||e?""===A.state.inputValue?A.runErr("You can not add an empty case"):e&&(A.runErr("You cannot add a case that already exists"),A.setState({inputValue:""})):(t(A.state.inputValue),A.setState({inputValue:"",error:!1,errorMessage:"",buttonColor:"default",buttonEnabled:!1}))},children:"Add"})]})}}]),t}(i.a.Component),v=t(23),I=t(75),D=t.n(I),V=t(61),B=t.n(V),G=t(144),M=t(76),Q=t.n(M),P=function(A){Object(u.a)(t,A);var e=Object(O.a)(t);function t(){return Object(m.a)(this,t),e.apply(this,arguments)}return Object(d.a)(t,[{key:"render",value:function(){var A,e=this.props,t=e.value,n=e.isDone,i=e.onClickDone,c=e.onClickDelete,s=e.id;return Object(a.jsxs)("div",{className:B.a.wraper,children:[Object(a.jsx)("div",{children:Object(a.jsx)("button",{onClick:function(){return i(s)},className:D()((A={},Object(v.a)(A,B.a.item,!0),Object(v.a)(A,B.a.done,n),A)),children:t})}),Object(a.jsx)("div",{children:Object(a.jsx)(G.a,{"aria-label":"delete",onClick:function(){return c(s)},children:Object(a.jsx)(Q.a,{fontSize:"small"})})})]})}}]),t}(i.a.Component),q=function(A){var e=A.itemFilter,t=A.onClickDone,n=A.onClickDelete;A.id;return Object(a.jsx)("ul",{children:e().map((function(A){return Object(a.jsx)("li",{children:Object(a.jsx)(P,{value:A.value,isDone:A.isDone,id:A.id,onClickDone:t,onClickDelete:n})},A.id)}))})},T=t(145),W=t(64),Y=t.n(W),H=function(A){var e=A.count,t=A.onClickFilter;A.itemFilter;return Object(a.jsxs)("div",{className:Y.a.footer,children:[Object(a.jsxs)("div",{className:Y.a.count,children:[e," ITEMS LEFT"]}),Object(a.jsx)("div",{children:Object(a.jsxs)(T.a,{variant:"text",color:"inherit","aria-label":"text primary button group",children:[Object(a.jsx)(f.a,{onClick:function(){return t("all")},children:"All"}),Object(a.jsx)(f.a,{onClick:function(){return t("active")},children:"Active"}),Object(a.jsx)(f.a,{onClick:function(){return t("done")},children:"Completed"})]})})]})},S=t(65),k=t.n(S),L=function(){var A=[{value:"WRITE A NEW APP",isDone:!1,id:1},{value:"REFACTOR",isDone:!1,id:2},{value:"TEST",isDone:!1,id:3}],e=3,t="all",i=Object(n.useState)(A),c=Object(F.a)(i,2),s=c[0],r=c[1],o=Object(n.useState)(e),l=Object(F.a)(o,2),h=l[0],j=l[1],b=Object(n.useState)(t),m=Object(F.a)(b,2),d=m[0],u=m[1];Object(n.useEffect)((function(){})),Object(n.useEffect)((function(){}),[]);var O=function(){return"active"===d?s.filter((function(A){return!A.isDone})):"done"===d?s.filter((function(A){return A.isDone})):s};return Object(a.jsxs)("div",{className:k.a.wrap,children:[Object(a.jsx)("h1",{className:k.a.title,children:"todos"}),Object(a.jsx)(K,{onClickAdd:function(A){var e=[].concat(Object(w.a)(s),[{value:A,isDone:!1,id:h+1}]);r(e),j(h+1)},items:s}),Object(a.jsx)(q,{itemFilter:O,onClickDone:function(A){var e=s.map((function(e){var t=Object(N.a)({},e);return e.id===A&&(t.isDone=!e.isDone),t}));r(e)},onClickDelete:function(A){r(s.filter((function(e){return e.id!==A}))),j(h-1)}}),Object(a.jsx)(H,{count:h,onClickFilter:function(A){u(A)},itemFilter:O,filter:d})]})},y=t(20),X=t.n(y),J=t.p+"static/media/call.d3584894.png",Z=function(){return Object(a.jsxs)("div",{className:X.a.wrap,children:[Object(a.jsx)("h1",{className:X.a.title,children:"Contacts"}),Object(a.jsxs)("div",{className:X.a.content,children:[Object(a.jsxs)("div",{className:X.a.item,children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"e-mail",className:X.a.icon}),Object(a.jsx)("a",{className:X.a.links,href:"mailto:malyshev21@gmail.com",children:"malyshev21@gmail.com"})]}),Object(a.jsxs)("div",{className:X.a.item,children:[Object(a.jsx)("img",{src:J,alt:"tel",className:X.a.icon}),Object(a.jsx)("p",{children:"+7(921)973-55-44"})]}),Object(a.jsxs)("div",{className:X.a.item,children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAMAAADDpiTIAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAA8cAAAPHAGFEr7NAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAwBQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyO34QAAAP90Uk5TAAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+6wjZNQAAIhFJREFUGBntwQmAleP+B/DvObNP09RU0659VxEhypZkjRAhQoTIkiRrhP7iRtnJjVLWUEKEKAqJUkqLNu3TOlPNPnO+/7u5l9Tvfc57nnc783w+MCqQ9oOnffT2K8/0rQKj4jl2/Bb+R9HUS5JhVCSJF8/jnyxsCaPCqHbnBu5v31UwKobWL+TzQP4OI/6FTvs4woO4AUacS7vuFx5cUQcY8aze/+2kaGVlGHHr6NdLaWUIjPiUcOE3VLAIRjyqOuQ3qmkHI+60eHYfVT0KI850+zBCdV/DiCep1/zMqPwAI37UeWg7o/QLjHhx5MQSRm0tjLiQcP7XtGMVjDhQ5ba1tGc8jMBr9tRe2nU5jIA7+f1y2lcXRpClXPUTY7EERoDVeiCHsRkEI7AOH1/MGO2tAiOYwufOYuyehhFIlW9ZTQ0iLWAEUOPRedTiIxjBc8J75dSkO4yASe67gNr8EoIRKNn3baFG18MIknbjCqnTrnQYgRE6eyY1ewxGUGQMXEndyhrCCIaGo3Kp3zswAqHz5DI64XgY/pfUZz6dsQCG71W/exOdcgUMnzt0bAEdk5MCw89CZ8ygkx6E4WPpA5bTUSV1YPjWIY/uosMmwfCrTm+W0nFHwfClxIu/owu+geFH1YZuoCt6w/CfVs/n0x0bEmH4TffpEbrlLhj+knbtUrqnoDoMP6k3Ygfd9BIMHznqtRK6qx0Mv0i4cC7dNhOGT1S9/Te67xwYvtD8mX30wOowDB845YMIPXErDM+lXr2YHtmTCcNjtR/cRs88BcNbR7xaTO9EmsPwUPj8r+ipD2F4J3PQGnrsVBheafrkHnptKQyPnDS1nN67DoYXUq78iX6wKx2G+2rev5VaFPx9HmPyGAzXHfZKEbXYdHfN8YxJWQMY7gqf8yX1mN8nKTyBsXkHhqsq37yKWpRN7gyEJzJGx8NwUeMn8qhF7qiGABImMUYLYLjn+HfLqMXKgRn4h4TXGKsrYLgk+fIfqcfMHiH8U8IbjFVOCgxXZN+7mVoUjWuPf0t8kzEbDsMNbf9eSC22DMvGfyS+zZgV14bhuNBZn1OPBX2T8bvEyYzdRBhOq3TjCmpRPuVE/E/iO9SgIwxnNfjbbmqRN7oJ/iDpPWowF4ajjnu7jFqsvjUTf5Q0hTpcBMM5SZd+Tz1m9QzjT5KnUocNiTCcUv2ujdSieEIH7Cd5GrW4E4ZD2rxYQC22Da+N/SV/QC0KqsNwQuj0GdRjUb8U/EXKh9RjLAwHpF+/jFpEpnXFAaRMpyZtYWhXf+ROarH36eY4kNSPqcnnMHQ75o1SarFucBUcUOonVLQtn7IeMLRK7P0t9ZjTKwEHljqDinIGUrYqDEOjrDvWU4uSSR1xMGmfUVHOoVMouwWGPi2fy6cWO0bUxUGlfU5FW9s0LqdoTyYMXU6dHqEWS/un4eDSZ1LRltZ4nLKnYOiR1n8JtYhM7w5J+hdUtLkVMnIpijSDoUPdETuoRf5zLSGqNIuKNrcEbqTsQxgadJxUQi02DM2CrNJsKtrUAggtp+xUGLFK6DWHenzbOxEWMr6ioo3NAZxB2VIYMaoyeB21KH2zEyxlfE1FG5rhHz6h7DoYMWn+9F5qsWtkfVirPIeK1jfFP7SKULQrHUYMun4QoRbLB6RDQeW5VLS+Cf7pOcoehWFbSr/F1GPGGSGoyPyGin5rjH+quo+isgYwbKr94DZqUTC2DdRU+Y6K1jXCv9xO2WQY9nSYUEwtNt1dHYqqzKOitY3wLwlrKesCw4bwebOpx/w+SVBV9XsqWtMQ/3Y+ZT/CiF7mrWuoRdnkzlBXdT4VrW6A/5hNWV8Y0WoyZg+1yB3VEFHI+oGKVh2C/zicsq3JMKJz4pRyarFyYAaiUe1HKlpVH797hbIHYEQj+YqF1GNmjxCiUm0BFf1aD7/LLqKouDYMdTXv30otisa1R5SqL6SilfXwX/dS9ioMZe1fLqIWW4ZlI1o1fqKiFXXxX0mbKTsShprwOV9QjwV9kxG1GouoaHkd/M+llM2BoSTjpl+pRfmUE2FD9mIqWlYbfzCPsgthKGj0eC61yBvdBHbU/JmKfqmNP+hE2fpEGJa6vFNGLVbfmglbai6hoqW18EdvUDYUhoWky36gHrN6hmFPraVUtKQm/qheKUUF1WCIaty7mVoUT+gAu2r/QkU/Z+NPRlA2Foak7UuF1GLb8NqwrfYyKlqcjT9J3U7ZoTAOKnTWZ9RjUb8U2FdnORUtqoE/u5qyz2EcTKUbVlCLyLSuiEXdFVT0U3XsZzFlPWAcWIPHdlOLvU83R0zqraSihdWxn5MpWxWGcSDHvlVKLdYNroLY1P+VihZUw/6mUnYLjL9KvGQe9ZjTKwExqr+Kin7Mwv6alFO0JxPG/qrduZFalEzqiJgdspqKfsjCXzxB2ZMw9tP6hQJqsWNEXcSuwWoqml8Vf5GRS1F5Mxh/FDr9kwi1WNo/DRo0XENF86rgrwZS9gGMP0i/7hdqEZneHVo0WktF31XBX4VWUNYNxn/Ve2Qntch/riX0aLSOir7NxAGcSdkSGL87+vVSarFhaBY0afwbFX2TiQOZQdm1MP4l8aJvqMe3vROhS5P1VDS3Mg6kdYSinWkw/iFryHpqUfpmJ+jTdAMVzamMA3qespEwgBbP7qMWu0bWh0bNNlDRVxk4oKx8isoOgdHtowi1WD4gHTo130hFszNwYEMoexsVXeo1S6jHjDNC0KrFJiqaVQkHlrCOss6o2Oo8vJ1aFIxtA81abqaiL9NxEBdQ9gMqtCMnllCLTXdXh26tNlPRF+k4mK8ouxwVV8IFX1OP+X2SoF3rLVT0eToOpgNlW5NRUVW5bS21KJvcGQ5os5WKPkvDQY2n7H5UUM2e2kstckc1hBMOzaGiT9NwUDWLKCquhQrp5Gnl1GLlwAw4om0OFc1IxcENo+xVVEApVy2iHjN7hOCMdtuo6ONUHFzyFsqORIVTa3gOtSga1x5Oab+diqanQHAZZXNQ0Rw+vphabBmWDccctp2KPkqBZD5lF6JCCfecRT0W9E2Gcw7fQUUfJENyHGXrE1CBVL5lNbUon3IinNRhJxVNS4boLcqGouJoMjqPWuSNbgJHHbGTit5Phqh+KUX51VBRnDClnFqsvjUTzjpyFxVNSYLsEcpeRMWQ3HcB9ZjVMwyHddxNRe8lQZa2g7JDURFkD9tCLYondIDjjtpNRe8mwUJ/yj5DBdB+XBG12Da8Npx3dC4VTU6ElZ8pOxvxLtRjJvVY1C8FLjgml4reToSVUyj7NYT4ljHwV2oRmdYVruiUR0VvJcLSNMpuRlxrOCqXWux9ujncceweKnojAZaallOUVxlxrPM7ZdRi3eAqcEnnPVT0egKsjaFsDOJWUp/51GNOrwS4pcteKpqUAGuV8ygqb4o4VeOeTdSiZFJHuOf4vVQ0MQwFN1M2DfHp0LEF1GLHiLpw0Qn7qGhCGApCv1J2CuJQ6MxPqcfS/mlw04n7qGh8GCrOpmwJ4k+lAcupRWR6d7jrpHwqejkMJZ9R1h/x5pBHd1GL/OdawmVd86loXBhK2lC2Mw3xpdNbpdRiw9AsuO2UAip6KQQ1L1L2COJJ4sXfUY9veyfCdd0KqGhsCGqq5VNUegjiR7U7N1CL0jc7wQOnFlLRCyEouoOytxE3Wj2fTy12jawPL5xWSEXPh6AoYT1lnREfQqd9HKEWywekwxOnF1LRsyGo6kXZD4gLadcupR4zzgjBG2cUUdEzUPc1ZZcjDtT7vx3UomBsG3jlzCIqegrqjqBsSzIC76jXS6jFprurwzNnF1PRGERhAmX3I+ASLpxLPeb3SYJ3ehRT0WhEoVYxRcW1EGhVh/xGLcomd4aXzimmoscRjfspm4Aga/HMPmqRO6ohPNWzhIpGIRrJWyk7AsHV7cMItVg5MAPeOq+Eih5DVC6n7GsEVerVP1OPmT1C8Nj5JVQ0EtH5gbJeCKY6D22nFkXj2sNzvUqp6BFEpzNlvyUgiI54tZhabBmWDe9dWEpFIxCltym7A8GTcP5X1GNB32T4QO9SKnoIUTqkjKL8LARN5m1rqUX5lBPhCxeXUdGDiNZIyl5AwDR9cg+1yBvdBP5wSRkVPYBope+krA0C5eT3y6nF6lsz4RN9yqhoGKJ2LWWfIkBSrvyJeszqGYZfXFZORfcheksoOwuBUeuBHGpRPKED/KNvORXdg+h1o+zXEALi8FeKqMW24bXhI1eUU9FdsOEDym5CIITP/ZJ6LOqXAj+5qpyK7oQNzSIU5VVGAFS+eRW1iEzrCn/pV05Fd8COJykbA/9r/EQetdj7dHP4zDURKroddmTuoai8KfzuhPfKqcW6wVXgN/0jVDQYttxC2TT4W/LlP1KPOb0S4DvXRahoEGwJr6LsFPhZ9n1bqEXJpI7woesjVHQL7OlB2c/wsXZ/L6QWO0bUhR/dEKGim2HT55T1h1+Fzv6ceiztnwZfupGqBsKmtpTtSIM/VbpxJbWITO8On7qJiiI3wq6xlD0CX2r4t93UIv+5lvCrm6koMgB2VSugqLQ+fKjz5DJqsWFoFnzrViqKXA/b7qTsLfhO0qXfU49veyfCvwZRUeRa2Ja4gbLj4DPV795ELUrf7AQ/G0xFkWtg30WUzYe/tHmxgFrsGlkfvjaEiiJXIwZzKbsMPhI6Ywb1WD4gHf52BxWVX4UYdKRsSzJ8I/36ZdRjxhkh+NydVFR+JWIxkbJh8Iv6I3dRi4KxbeB7d1NReV/EonYxRUU14Q/HvFlKLTbdXR3+dw8VlV+OmAynbDz8ILH3t9Rjfp8kBMB9VFR2GWKSkkNZB3gva+h6alE2uTMC4X4qKrsUsbmCsq/guVbP5VOL3FENEQwPUFHZJYjRAsougMe6T49Qi5UDMxAQD1JRWW/E6HjKfkuAl9L6L6UeM3uEEBQPU1HpRYjVO5QNgYfqjthBLYrGtUdwjKCi0l6IVYMyivKz4JmOr5VQiy3DshEgj1BR6QWI2WOUvQCPJPSaQz0W9E1GkDxKRSXnI2bpuyhrDU9UvX0dtSifciKC5TEqKumJ2F1P2afwQvOn91KLvNFNEDCjqKjkXGjwC2VnwX2nfBChFqtvzUTQPE5FxedAg+6UrQzBZan9FlOPWT3DCJzRVFR8NnT4iLKb4K7aD26jFsUTOiCAnqSiorOgQ/MIRXmV4aYjXi2mFtuG10YQPUVFRWdCi6coGw33hM+bTT0W9UtBID1DRUWnQ4vMvRSVN4FbMgetoRaRaV0RTKFnqajwNOhxK2XvwyVNx+yhFnufbo6ACj1PRYXdoUd4NWVd4YqTppZTi3WDqyCoQi9QUUE3aHIOZYvhgpQrFlKPOb0SEFihsVRUcAp0mUnZNXBczfu3UouSSR0RYKGXqCi/K3RpR9mONDjssFeKqMWOEXURZKFxVJR/MrR5ibL/g6PC53xBPZb2T0OghV+mon0nQZvqhRSV1oeD0m9eRS0i07sj4MLjqWjfCdDnLsrehIPOXkct8p9riaALT6CivcdDn8SNlB0Lx9SdTC02DM1C4IUnUtHeLtCoN2XfwzHNcqjDt70TEXwJk6hoT2fo9A1lfeCUOmsYu9I3OyEeJLxGRXuOg05HUbY5CQ6pupgx2zWyPuJCwhtUlNcJWk2i7D445UXGavmAdMSHxDepKPcYaFWnhKKimnBIkxLGZsYZIcSJxLepKPdo6PUgZePhlPGMRcHYNogbiZOpaPdR0CtlG2Ud4JBGZbRv093VET8S36Gi3R2h2ZWUfQWnXEbb5vdJQhxJeo+Kdh0J3RZSdgGc8gTtKZvcGXElaQoV7TwCup1A2boEOGUW7cgd1RDxJXkqFe3sAO3epWwIHLOD0Vs5MANxJnkaFe04HNo1LKMoPwuO2cRozewRQrxJ/oCKth8G/f5G2fNwzkJGpWhce8SflA+paHt76FdpN0WR1nDODEYlf3g64k7KdCra1g4OGEDZDDhoPKO0sW8I8SX1YyrKaQsHhJZRdiYc1JNR++F4xJPUT6go51A44TTKVoTgoMQcRm9yY8SN1BlUtLUNHDGdsoFw1CjaUPRoJuJD2mdUtKU1HNEiQlFuBhzVrIB25FyXgDiQ9jkVbW4FZzxD2RNw2DW0Z3E3BF76TCra3BLOqLKXovImcNprtOmDlgi29C+oaFMLOOQ2yqbCcRmLaFPpk9UQYJVmUdHG5nBIeA1lJ8N5lV6nXbtuSUJQVZpNRRuawSk9KVsMV9xUQrtW9EAwZXxFReubwjFfUnY13NFhNm37rB0CKONrKlrfBI5pT9mOVLjlgtW0q+zFmgiaynOo6LfGcM44ykbAPSlD8mhX3tAUBErluVS0rhGcU6OQotJ6cFP2C2W0a82FCJDMb6lobSM46B7K3oTL2n5K277uiKCo8h0VrWkIByVtouxYuO6s5bQr8mo9BEKVeVS0ugGcdAll38MDiTfvpF3596fD/6p+T0WrDoGjvqOsDzyRNaaEdm28PASfqzqfilbVh6OOoWxzEjzSYhptm98Fvpb1AxX9Wg/Oep2y++Cdbotp29uN4F/VfqSilfXgrLolFBVlw0MJ1+bQrqKRleFT1RZQ0Yq6cNjDlL0Cb2WOLKJdOf3D8KPqC6loeR04LHUbZYfDa40n07ZFp8B/avxERctqw2n9KJsNH+gyn7ZNawGfqbGIin6pDcf9RNn58INQ3020q2RMFvwkezEVLa0Fx51E2boE+EOl4fm0a+fNifCNmj9T0ZKacN4Uym6Hb9SfGKFdy8+GT9RcQkU/Z8N5jcop2lcVPnL0XNr2aTv4Qa2lVLQ4Gy4YRdlz8Jfe62hX2Qs14bnav1DRohpwQaVciiKt4DOpd+2hXXl3pMBbtZdR0U/V4YYbKPsE/lPrpXLataYXvFRnORUtrA43hJZTdgb86LAvaNtXR8IzdVdQ0YJqcMXplK0IwZ/OXUm7IhPqwhv1VlLRj1lwx8eU3Qi/Shq0m3btG5YOD9T/lYp+yII7WkUoys2Af1V/ppR2bbgsBLfVX0VF31eFS56l7HH4WuvptO37znDXIaupaF4VuKTqPorKG8PnTltK295qBBc1WENF31WBWwZTNhW+l3DDdtpV+EhluKXhGir6NhNuSVhL2ckIgCqjimnX1mvCcEWjtVT0TSZccx5lixAMzabQtkVd4YLG66hobmW4ZxZlVyMoTlpI295vDqc1/o2K5lSGew6nbHsqAiPcbwvtKhmdBUc1WU9FX2XARS9TNgJBkjGikHbtuCkRzmm6gYpmV4KLsosoKq2HYGnwBm1bdiac0mwDFc2qBDfdS9kbCJxjv6NtM9rCEc03UtGX6XBT0mbKOiF4Qpeup11lz2dDvxabqOiLdLjqUsrmIZDS7ttHu3KHJEOzlpup6PM0uGseZZcioOq+EqFdqy+AVq02U9FnaXBXJ8o2JyGwjphN22YfAX1ab6GiT9PgsjcouxdBdsFq2hV5pS40abOVimakwmX1SikqykagpQzJo1377kuDDofmUNHHqXDbCMpeRtBlv1BGu9b3CSFmbXOoaHoK3Ja6nbLDEHxtP6Vt845DjNpto6KPUuC6qymbhbhw1nLa9mZDxKL9dir6IBnuW0zZeYgPiTfvpF2FIzJg22HbqWhaMtx3MmVrExAvssaU0K4tV4dhz+E7qOj9ZHhgKmWDEUdaTKNtP50MOzrspKIpSfBAk3KK9lVFXOm2mLZNbY6oHbGTit5LgheeoOxZxJmEa3NoV8kTVRGdI3dR0btJ8EJGLkWRVog7mSOLaNeOgYmIQsfdVDQ5EZ4YSNkniEeNJ9O2X86AsqN2U9HbifBEaAVlZyA+dZlP2z45FGqOzqWiNxPhjTMpWx5CnAr13Ui7yp6rAQXH5FLRGwnwyAzKbkT8Sh+eT7tyb0+GlU55VPR6AjzSOkJRbgbiWf2JEdq16nzIjt1DRZMS4JXnKXscce7oubRtVgcIOu+hoolheCUrn6Lyxoh7vdfRrvKX6+BguuyloglheGYIZVNQAaTetYd27bs3DQd0/F4qGh+GZxLWUXYSKoRaL5XTrvWXhvBXJ+yjopfD8M4FlC1CRXHYF7Ttu2OxvxP3UdG4MDz0FWX9UHGcu5K2vdEAf3JyPhW9FIKHOlC2PRUVSNKg3bSr8OEM/E/XfCoaG4KXxlP2MCqW6s+U0q4t/cL4j1MKqOiFELxUs4iikrqoaFpPp20LT8K/dCugoudD8NQwyl5HBXTaUto2pRmAUwup6NkQPJW8hbJjUBEl3LCddhU/XvW0Qip6Bh67jLLvUEFVGVVMu3YUUtFT8Np8yi5BhdXsPTptDLx2HGWbklCBnbSAjhoNz71F2T2o0ML9ttA5j8Nz9UspKsxGBZfxcCEdMgre+z/KxsFo8AYd8Ri8l7aDssNgAMd+R/1GwgeuoWwWjH8KXbqemj0CP/iZsvNg/Fvaffuo0wj4QVfK1oZh/K7uKxFq8xB84X3KBsP4gyNmU5MH4QtNyynaVxXGn1ywmjo8AH8YTdmzMPaTPCSPMRsGf6icR1GkJYy/yH6+jLG5Fz5xE2UfwziQtp8yFvfAJ0IrKTsdxoGdtYy23QW/OIuy5SEYB5F4007aMxS+8SllN8A4uKwxJbThDvhGG8p2V4IhaTGNUbsd/vECZaNgWDhlMaMzGP6RlU9RWSMYVhKuzWEUBsFH7qDsPRgKMkcWUVV5B/hHwm+UnQhDSePJVPU1/KMXZT/BUNVlPhX1gW98TdlVMJSF+m6kkk0Z8IkjKNuWCiMK6Q/kU8Uj8IkJlD0EIzr1J0ZorbgZfKFWMUUldWFE66i5tPYhfOF+yl6HYcNFa2npTPhA8lbKjoFhR+pIWlmZDO9dTtl3MOwJzaOVofDeD5RdAsOmoyO0sLcuvNaZsk1JMOx6mVYmwmtvU3YPDNtq5tJKZ3jrkFKKCmvAsG8QrSwIw1MjKRsHIwaJS2nlWngpbSdl7WHEohutbM+Ch66l7EsYsXmXVp6Gh5ZQ1hNGbBoV0kJZO3imG2VrwjBi9ACtfAnPfEDZbTBilbaOVi6CR5qVU7S3CoyYXUAr69PhjScpewaGBjNp5SF4InMPRZGWMDQ4tJQWChvDC7dQNh2GFmNoZQo8EF5F2WkwtKiyjVa6w309KFsWgqHH1bSyLAmu+5yyATA0Cc2nldvgtkMp210Jhi6dIrSQVwsuG0vZ32DoM55WXoG7qhVQVNYIhj6182ghcgxcdSdl78HQaTCtfB+CixLXU3YiDJ2SltFKP7joIsoWwtCrO63kVIF75lJ2FQzNptLKaLimI2XbUmBo1riQFkrbwC0TKXsIhnYP0cpncEntYopK6sDQLn09rZwHdzxA2WswHHARraxNhRtStlJ2NAwnfEkrw+CGvpR9C8MR7cpooaABXPAjZRfDcMZTtDIZzutC2cZEGM7I2k4rJ8Nxkym7G4ZT+tPKz4lwWIMyigprwHBK+EdauRkOe5Syv8NwznERWtidDUel76KsPQwHvUorY+Go6yj7AoaT6uyhhfIj4aSllJ0Lw1FDaOWbEJxzKmVrwjAclbSCVi6Hcz6kbBAMh51OK5srwynNIxTtrQLDadNo5TE45SnKnobhuKZFtFDSAs7I3ENRpAUM542glY/hjFspmw7DBZU20EoPOCG8mrLTYLjhYlpZlQIHnEPZshAMV8ymlbvhgJmUDYDhjvZltLCvHrRrR9nuSjBc8iytvA7tXqLsbzDcUm0HrRwPzaoXUFTWEIZrrqeVnxKg112UvQvDPeEFtDIAWiVuoOwEGC7qQis7q0Gn3pQthOGqSbTyHHT6hrIrYbiq7l5aKDsM+hxFWU4KDHcNpZWvoM8kyh6E4bLklbRyCXSpU0JRSR0YbjuTVjZWgiYPUjYJhvs+pJUR0CMlh7KjYLivWTEtFDWFFldS9g0MLzxCK9OgxULKesPwQsYmWjkdGpxA2cZEGJ64lFZWJCF271J2FwyPfE0rQxCzhmUUFVaH4ZHDy2lhTx3E6m+UvQTDM8/TyquIUaXdlLWD4ZnqO2khcixiM4CyL2B46AZa+SGMWISWUXYuDA8l/EQr/RGL0yhbHYbhpRNoZVtVxGA6ZYNgeOsNWnkS9rWIULQ3E4a36u+jhdK2sO0Zyp6G4bW7aeUL2FVlL0WR5jC8lrKKVnrBptso+wiG93rQym9psCW8hrLuMHxgOq0Mhy09KfslBMMHWhTTQmEj2PElZdfD8IVHaeVd2NCesl3pMHyh8mZa6YbojaPsMRg+cRmtLE1EtGoUUlTWEIZPhObSyq2I1t2UvQPDN44op4XcmohO0kbKjofhHy/SyjhE52LKFsDwkRq7aCFyFKLyLWVXwPCTgbTyXQhROJqynBQYfpKwmFauRBReo2w4DH85iVa2ZkJZ3RKKimvD8Jm3aOVxKHuIsokw/OaQfFooaQVFqdsoOwqG79xLKzOg6CrKvoHhP6mraaUn1PxEWW8YPnQuraxJhYoTKduQCMOPPqGVe6HiPcruguFLrUpoIf8QWGtUTlFBdRj+NIpW3oK1UZS9BMOnMrfQykmwUmk3ZW1h+NUVtLI4ARZuoGwmDN8KfUsrAyELLafsHBj+1bGcFnbVgOh0ylaHYfjYS7TyIkQfU3YrDD/L3k0L5R0gaBmhaE8mDF+7mVbmQPAsZU/B8LfEJbTSBwdVdR9FkeYwfK4rrWzKwMEMpuxDGL43mVZG4iAS1lJ2Kgzfa1BAC8XNcWDnUbYURgAMo5WPcGCzKLsORgCkrqWVs3Agh1G2Kx1GEJxHK78m4wBepuxRGMHwGa3cib/KLqKorAGMYGhdSgt76+Iv7qVsMoygeIJWJmF/SZsoOx5GUGRupZUu2M+llP0IIziuopUFYfzZPMqugBEcoXm0ch3+pBNlOSkwAuToCC3syMIfvUHZcBiB8jKtPIM/qFdKUXFtGIFSM5cWytrjf0ZQNhFGwAyilVn4r9TtlHWEETCJS2mlN353NWVzYQRON1pZn47/WETZRTCC511aeRj/djJlGxJhBE+jQlooaoJ/mUrZnTCC6AFamYp/alxOUUF1GEGUto5WTsM/PEHZWBjB1ItWliUBGbmUtYURUDNpZTAwkLLPYQTVoaW0kFc7tIKyHjACawytjD+TslVhGIFVdRstRJZTdguMALuaMdqTCSPAQvMZmydhBFqnCGMRaQYj2MYzFh/ACLjaeYzBqTCCbjDtWwoj8JKW0bbrYARfd9q1Mx1GHJhKmx6FEQ8aF9KWsgYw4sJDtGUyjPiQvp52dIERJy6iDT/CiBtfMnp9YcSNdmWM1tZkGPHjKUbrARhxJGs7o1NcG0Y8uZbReRVGXAn/yKgcCSO+HBdhFObAiDevMgoXwog3dfZQ2fpEGHFnCJUNhRF/kldQUUE1GHHodCp6EUZcmkY1h8KIS02LqOIzGHFqBFX0gBGnKm2gtV/DMOLVxbR2C4z4NZtW9lSGEb/al9HCkzDi2bOUlTeDEc+q7aDoAxjx7XqKusGIb+GFFCyBEe+6UHAtjLg3iQe1Mw1G3Ku7lwczCEYFMIgHsTABRkXwHg+o/BgYFULmch7ISBgVROtN/KsHYFQYNT/nfspvhFGBhB8s4R/NPwVGxVLn/s383aJzYVQ8SWcNfvbjhZ892rt5CHHr/wE9y7iQJJhXOgAAAABJRU5ErkJggg==",alt:"telegram",className:X.a.icon}),Object(a.jsx)("a",{className:X.a.links,href:"https://t.me/malyshevmaxim",children:"Telegram"})]})]}),Object(a.jsxs)("div",{className:X.a.mark,children:["Icons made by ",Object(a.jsx)("a",{className:X.a.marklink,href:"https://www.flaticon.com/authors/gregor-cresnar",title:"Gregor Cresnar",children:"Gregor Cresnar"})," from ",Object(a.jsx)("a",{className:X.a.marklink,href:"https://www.flaticon.com/",title:"Flaticon",children:"www.flaticon.com"})]})]})},z=function(){return Object(a.jsx)(r.a,{children:Object(a.jsxs)("div",{className:b.a.wrap,children:[Object(a.jsx)(l.a,{className:b.a.sidebar,children:Object(a.jsxs)(h.a,{className:b.a.menu,children:[Object(a.jsx)(r.b,{exact:!0,to:"/",className:b.a.link,activeClassName:b.a.active,children:"About me"}),Object(a.jsx)(r.b,{to:"/todo",className:b.a.link,activeClassName:b.a.active,children:"Todo"}),Object(a.jsx)(r.b,{to:"/contacts",className:b.a.link,activeClassName:b.a.active,children:"Contacts"})]})}),Object(a.jsxs)(l.a,{className:b.a.content,children:[Object(a.jsx)(o.a,{path:"/",exact:!0,component:x}),Object(a.jsx)(o.a,{path:"/todo",component:L}),Object(a.jsx)(o.a,{path:"/contacts",component:Z})]})]})})};s.a.render(Object(a.jsx)(z,{}),document.getElementById("root"))},11:function(A,e,t){A.exports={wrap:"About_wrap__q90Cj",title:"About_title__2FfHM",img:"About_img__3pP0X",avatar:"About_avatar__19n1C",text:"About_text__22zNU",link:"About_link__3khpO",ol:"About_ol__RBkOz"}},20:function(A,e,t){A.exports={wrap:"Contacts_wrap__v4ChX",title:"Contacts_title__1WwlZ",content:"Contacts_content__3cXjE",item:"Contacts_item__oHxJu",icon:"Contacts_icon__34Qea",links:"Contacts_links__NZcSh",marklink:"Contacts_marklink__3m-sE",mark:"Contacts_mark__3B0CL"}},28:function(A,e,t){A.exports={wrap:"App_wrap__1LIcD",sidebar:"App_sidebar__3vVVK",menu:"App_menu__1UYI_",link:"App_link__2SoQt",active:"App_active__3QKdG",content:"App_content__3j-q4",mark:"App_mark__1T-i7"}},61:function(A,e,t){A.exports={wraper:"Item_wraper__2lyfF","wrapper-button":"Item_wrapper-button__3V-ci",item:"Item_item__GUCga",done:"Item_done__1B25s"}},64:function(A,e,t){A.exports={footer:"Footer_footer__3AWNj",count:"Footer_count__23kk_",wraper:"Footer_wraper__3VbjB",button:"Footer_button__3nlqy"}},65:function(A,e,t){A.exports={wrap:"Todo_wrap__7vR2V",title:"Todo_title__MslmO"}}},[[108,1,2]]]);
//# sourceMappingURL=main.dc7aaa57.chunk.js.map