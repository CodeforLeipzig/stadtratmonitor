var e={name:"stylus-type-utils",version:"0.0.3",description:"Stylus typography functions and type conversion",main:"lib/type-utils.js",scripts:{test:"mocha"},repository:{type:"git",url:"git://github.com/blakeembrey/stylus-type-utils.git"},keywords:["stylus","typeograhy","coercion","rem","em","px","pt","percent"],homepage:"https://github.com/blakeembrey/stylus-type-utils",author:"Blake Embrey",license:"MIT",readmeFilename:"Readme.md",peerDependencies:{stylus:"0.x"},devDependencies:{stylus:"~0.32.0"}};var t={};var s=t=function plugin(){return function(e){e.include(new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname);e.import("type-utils")}};s.path=new URL(import.meta.url.slice(0,import.meta.url.lastIndexOf("/"))).pathname;s.version=e.version;var i=t;export default i;

