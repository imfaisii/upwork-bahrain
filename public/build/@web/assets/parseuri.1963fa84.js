var o=/^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,p=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"],h=function(e){var a=e,t=e.indexOf("["),i=e.indexOf("]");t!=-1&&i!=-1&&(e=e.substring(0,t)+e.substring(t,i).replace(/:/g,";")+e.substring(i,e.length));for(var u=o.exec(e||""),r={},s=14;s--;)r[p[s]]=u[s]||"";return t!=-1&&i!=-1&&(r.source=a,r.host=r.host.substring(1,r.host.length-1).replace(/;/g,":"),r.authority=r.authority.replace("[","").replace("]","").replace(/;/g,":"),r.ipv6uri=!0),r.pathNames=c(r,r.path),r.queryKey=l(r,r.query),r};function c(n,e){var a=/\/{2,9}/g,t=e.replace(a,"/").split("/");return(e.substr(0,1)=="/"||e.length===0)&&t.splice(0,1),e.substr(e.length-1,1)=="/"&&t.splice(t.length-1,1),t}function l(n,e){var a={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(t,i,u){i&&(a[i]=u)}),a}export{h as p};
