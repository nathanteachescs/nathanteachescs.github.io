(self.webpackChunkcsci_ua_0002_004=self.webpackChunkcsci_ua_0002_004||[]).push([[551],{551:function(t,e,n){"use strict";n.r(e);n(791);var r=n(339),o=n(425),i=n.n(o),a=n(184);e.default=function(){var t=(0,r.Z)(),e=t.width,n=t.height;return(0,a.jsx)(i(),{numberOfPieces:150,gravity:.01,width:e,height:1.5*n})}},425:function(t,e,n){var r;"undefined"!=typeof self&&self,t.exports=(r=n(791),function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=2)}([function(t,e){t.exports=r},function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t+e:-o/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t*t+e:o/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var o=n-e;return-o*Math.cos(t/r*(Math.PI/2))+o+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var o=n-e;return t==r?e+o:o*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var o=n-e;return 0===t?e:t===r?e+o:(t/=r/2)<1?o/2*Math.pow(2,10*(t-1))+e:o/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?-o/2*(Math.sqrt(1-t*t)-1)+e:o/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((i=0)||(i=.3*r),(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),-o*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)+e)},easeOutElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:1==(t/=r)?e+c:((i=0)||(i=.3*r),(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),o*Math.pow(2,-10*t)*Math.sin((t*r-a)*(2*Math.PI)/i)+c+e)},easeInOutElastic:function(t,e,n,r){var o,i,a,c=n-e;return a=1.70158,0===t?e:2==(t/=r/2)?e+c:((i=0)||(i=r*(.3*1.5)),(o=c)<Math.abs(c)?(o=c,a=i/4):a=i/(2*Math.PI)*Math.asin(c/o),t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)*-.5+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-a)*(2*Math.PI)/i)*.5+c+e)},easeInBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,n,r,o){var i=n-e;return void 0===o&&(o=1.70158),(t/=r/2)<1?i/2*(t*t*((1+(o*=1.525))*t-o))+e:i/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e},easeInBounce:function(t,e,n,o){var i=n-e;return i-r.easeOutBounce(o-t,0,i,o)+e},easeOutBounce:function(t,e,n,r){var o=n-e;return(t/=r)<1/2.75?o*(7.5625*t*t)+e:t<2/2.75?o*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?o*(7.5625*(t-=2.25/2.75)*t+.9375)+e:o*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,o){var i=n-e;return t<o/2?.5*r.easeInBounce(2*t,0,i,o)+e:.5*r.easeOutBounce(2*t-o,0,i,o)+.5*i+e}};t.exports=r},function(t,e,n){t.exports=n(3)},function(t,e,n){"use strict";n.r(e),n.d(e,"ReactConfetti",(function(){return Q}));var r,o,i=n(0),a=n.n(i),c=n(1),u=n.n(c);function s(t,e){return t+Math.random()*(e-t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t){t[t.Circle=0]="Circle",t[t.Square=1]="Square",t[t.Strip=2]="Strip"}(r||(r={})),function(t){t[t.Positive=1]="Positive",t[t.Negative=-1]="Negative"}(o||(o={}));var h=function(){function t(e,n,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,"context",void 0),l(this,"radius",void 0),l(this,"x",void 0),l(this,"y",void 0),l(this,"w",void 0),l(this,"h",void 0),l(this,"vx",void 0),l(this,"vy",void 0),l(this,"shape",void 0),l(this,"angle",void 0),l(this,"angularSpin",void 0),l(this,"color",void 0),l(this,"rotateY",void 0),l(this,"rotationDirection",void 0),l(this,"getOptions",void 0),this.getOptions=n;var a,c,u=this.getOptions(),f=u.colors,h=u.initialVelocityX,p=u.initialVelocityY;this.context=e,this.x=r,this.y=i,this.w=s(5,20),this.h=s(5,20),this.radius=s(5,10),this.vx="number"==typeof h?s(-h,h):s(h.min,h.max),this.vy="number"==typeof p?s(-p,0):s(p.min,p.max),this.shape=(a=0,c=2,Math.floor(a+Math.random()*(c-a+1))),this.angle=s(0,360)*Math.PI/180,this.angularSpin=s(-.2,.2),this.color=f[Math.floor(Math.random()*f.length)],this.rotateY=s(0,1),this.rotationDirection=s(0,1)?o.Positive:o.Negative}var e,n,i;return e=t,(n=[{key:"update",value:function(){var t=this.getOptions(),e=t.gravity,n=t.wind,i=t.friction,a=t.opacity,c=t.drawShape;this.x+=this.vx,this.y+=this.vy,this.vy+=e,this.vx+=n,this.vx*=i,this.vy*=i,this.rotateY>=1&&this.rotationDirection===o.Positive?this.rotationDirection=o.Negative:this.rotateY<=-1&&this.rotationDirection===o.Negative&&(this.rotationDirection=o.Positive);var u=.1*this.rotationDirection;if(this.rotateY+=u,this.angle+=this.angularSpin,this.context.save(),this.context.translate(this.x,this.y),this.context.rotate(this.angle),this.context.scale(1,this.rotateY),this.context.rotate(this.angle),this.context.beginPath(),this.context.fillStyle=this.color,this.context.strokeStyle=this.color,this.context.globalAlpha=a,this.context.lineCap="round",this.context.lineWidth=2,c&&"function"==typeof c)c.call(this,this.context);else switch(this.shape){case r.Circle:this.context.beginPath(),this.context.arc(0,0,this.radius,0,2*Math.PI),this.context.fill();break;case r.Square:this.context.fillRect(-this.w/2,-this.h/2,this.w,this.h);break;case r.Strip:this.context.fillRect(-this.w/6,-this.h/2,this.w/3,this.h)}this.context.closePath(),this.context.restore()}}])&&f(e.prototype,n),i&&f(e,i),t}();function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var y=function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,"canvas",void 0),p(this,"context",void 0),p(this,"getOptions",void 0),p(this,"x",0),p(this,"y",0),p(this,"w",0),p(this,"h",0),p(this,"lastNumberOfPieces",0),p(this,"tweenInitTime",Date.now()),p(this,"particles",[]),p(this,"particlesGenerated",0),p(this,"removeParticleAt",(function(t){r.particles.splice(t,1)})),p(this,"getParticle",(function(){var t=s(r.x,r.w+r.x),e=s(r.y,r.h+r.y);return new h(r.context,r.getOptions,t,e)})),p(this,"animate",(function(){var t=r.canvas,e=r.context,n=r.particlesGenerated,o=r.lastNumberOfPieces,i=r.getOptions(),a=i.run,c=i.recycle,u=i.numberOfPieces,s=i.debug,f=i.tweenFunction,l=i.tweenDuration;if(!a)return!1;var h=r.particles.length,p=c?h:n,y=Date.now();if(p<u){o!==u&&(r.tweenInitTime=y,r.lastNumberOfPieces=u);for(var d=r.tweenInitTime,v=f(y-d>l?l:Math.max(0,y-d),p,u,l),b=Math.round(v-p),w=0;w<b;w++)r.particles.push(r.getParticle());r.particlesGenerated+=b}return s&&(e.font="12px sans-serif",e.fillStyle="#333",e.textAlign="right",e.fillText("Particles: ".concat(h),t.width-10,t.height-20)),r.particles.forEach((function(e,n){e.update(),(e.y>t.height||e.y<-100||e.x>t.width+100||e.x<-100)&&(c&&p<=u?r.particles[n]=r.getParticle():r.removeParticleAt(n))})),h>0||p<u})),this.canvas=e;var o=this.canvas.getContext("2d");if(!o)throw new Error("Could not get canvas context");this.context=o,this.getOptions=n};function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){w(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function b(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function w(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var _={width:"undefined"!=typeof window?window.innerWidth:300,height:"undefined"!=typeof window?window.innerHeight:200,numberOfPieces:200,friction:.99,wind:0,gravity:.1,initialVelocityX:4,initialVelocityY:10,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722","#795548"],opacity:1,debug:!1,tweenFunction:u.a.easeInOutQuad,tweenDuration:5e3,recycle:!0,run:!0},g=function(){function t(e,n){var r=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),w(this,"canvas",void 0),w(this,"context",void 0),w(this,"_options",void 0),w(this,"generator",void 0),w(this,"rafId",void 0),w(this,"setOptionsWithDefaults",(function(t){var e={confettiSource:{x:0,y:0,w:r.canvas.width,h:0}};r._options=v(v(v({},e),_),t),Object.assign(r,t.confettiSource)})),w(this,"update",(function(){var t=r.options,e=t.run,n=t.onConfettiComplete,o=r.canvas,i=r.context;e&&(i.fillStyle="white",i.clearRect(0,0,o.width,o.height)),r.generator.animate()?r.rafId=requestAnimationFrame(r.update):(n&&"function"==typeof n&&r.generator.particlesGenerated>0&&n.call(r,r),r._options.run=!1)})),w(this,"reset",(function(){r.generator&&r.generator.particlesGenerated>0&&(r.generator.particlesGenerated=0,r.generator.particles=[],r.generator.lastNumberOfPieces=0)})),w(this,"stop",(function(){r.options={run:!1},r.rafId&&(cancelAnimationFrame(r.rafId),r.rafId=void 0)})),this.canvas=e;var o=this.canvas.getContext("2d");if(!o)throw new Error("Could not get canvas context");this.context=o,this.generator=new y(this.canvas,(function(){return r.options})),this.options=n,this.update()}var e,n,r;return e=t,(n=[{key:"options",get:function(){return this._options},set:function(t){var e=this._options&&this._options.run,n=this._options&&this._options.recycle;this.setOptionsWithDefaults(t),this.generator&&(Object.assign(this.generator,this.options.confettiSource),"boolean"==typeof t.recycle&&t.recycle&&!1===n&&(this.generator.lastNumberOfPieces=this.generator.particles.length)),"boolean"==typeof t.run&&t.run&&!1===e&&this.update()}}])&&b(e.prototype,n),r&&b(e,r),t}();function m(t){return function(t){if(Array.isArray(t))return E(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||I(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(t){return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function P(){return(P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function j(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?j(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function S(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,o=!1,i=void 0;try{for(var a,c=t[Symbol.iterator]();!(r=(a=c.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}}(t,e)||I(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(t,e){if(t){if("string"==typeof t)return E(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(t,e):void 0}}function E(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function M(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function C(t,e){return(C=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function k(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=R(t);if(e){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return T(this,n)}}function T(t,e){return!e||"object"!==O(e)&&"function"!=typeof e?A(t):e}function A(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function R(t){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var B=a.a.createRef(),N=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&C(t,e)}(i,t);var e,n,r,o=k(i);function i(t){var e;M(this,i);for(var n=arguments.length,r=new Array(n>1?n-1:0),c=1;c<n;c++)r[c-1]=arguments[c];return F(A(e=o.call.apply(o,[this,t].concat(r))),"canvas",a.a.createRef()),F(A(e),"confetti",void 0),e.canvas=t.canvasRef||B,e}return e=i,(n=[{key:"componentDidMount",value:function(){if(this.canvas.current){var t=G(this.props)[0];this.confetti=new g(this.canvas.current,t)}}},{key:"componentDidUpdate",value:function(){var t=G(this.props)[0];this.confetti&&(this.confetti.options=t)}},{key:"componentWillUnmount",value:function(){this.confetti&&this.confetti.stop(),this.confetti=void 0}},{key:"render",value:function(){var t=S(G(this.props),2),e=t[0],n=t[1],r=x({zIndex:2,position:"absolute",pointerEvents:"none",top:0,left:0,bottom:0,right:0},n.style);return a.a.createElement("canvas",P({width:e.width,height:e.height,ref:this.canvas},n,{style:r}))}}])&&D(e.prototype,n),r&&D(e,r),i}(i.Component);function G(t){var e={},n={},r=[].concat(m(Object.keys(_)),["confettiSource","drawShape","onConfettiComplete"]),o=["canvasRef"];for(var i in t){var a=t[i];r.includes(i)?e[i]=a:o.includes(i)?o[i]=a:n[i]=a}return[e,n,{}]}F(N,"defaultProps",x({},_)),F(N,"displayName","ReactConfetti");var Q=a.a.forwardRef((function(t,e){return a.a.createElement(N,P({canvasRef:e},t))}));e.default=Q}]).default)},448:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.isNavigator=e.isBrowser=e.off=e.on=e.noop=void 0;e.noop=function(){},e.on=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.addEventListener&&t.addEventListener.apply(t,e)},e.off=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];t&&t.removeEventListener&&t.removeEventListener.apply(t,e)},e.isBrowser="undefined"!==typeof window,e.isNavigator="undefined"!==typeof navigator},118:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(791);e.default=function(t){r.useEffect(t,[])}},178:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(971),o=n(791),i=r.__importDefault(n(802));e.default=function(t){var e=o.useRef(0),n=o.useState(t),r=n[0],a=n[1],c=o.useCallback((function(t){cancelAnimationFrame(e.current),e.current=requestAnimationFrame((function(){a(t)}))}),[]);return i.default((function(){cancelAnimationFrame(e.current)})),[r,c]}},802:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(971),o=n(791),i=r.__importDefault(n(118));e.default=function(t){var e=o.useRef(t);e.current=t,i.default((function(){return function(){return e.current()}}))}},339:function(t,e,n){"use strict";var r=n(971),o=n(791),i=r.__importDefault(n(178)),a=n(448);e.Z=function(t,e){void 0===t&&(t=1/0),void 0===e&&(e=1/0);var n=i.default({width:a.isBrowser?window.innerWidth:t,height:a.isBrowser?window.innerHeight:e}),r=n[0],c=n[1];return o.useEffect((function(){if(a.isBrowser){var t=function(){c({width:window.innerWidth,height:window.innerHeight})};return a.on(window,"resize",t),function(){a.off(window,"resize",t)}}}),[]),r}},971:function(t,e,n){"use strict";n.r(e),n.d(e,{__addDisposableResource:function(){return A},__assign:function(){return i},__asyncDelegator:function(){return x},__asyncGenerator:function(){return j},__asyncValues:function(){return S},__await:function(){return P},__awaiter:function(){return y},__classPrivateFieldGet:function(){return C},__classPrivateFieldIn:function(){return T},__classPrivateFieldSet:function(){return k},__createBinding:function(){return v},__decorate:function(){return c},__disposeResources:function(){return F},__esDecorate:function(){return s},__exportStar:function(){return b},__extends:function(){return o},__generator:function(){return d},__importDefault:function(){return D},__importStar:function(){return M},__makeTemplateObject:function(){return I},__metadata:function(){return p},__param:function(){return u},__propKey:function(){return l},__read:function(){return _},__rest:function(){return a},__runInitializers:function(){return f},__setFunctionName:function(){return h},__spread:function(){return g},__spreadArray:function(){return O},__spreadArrays:function(){return m},__values:function(){return w}});var r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)};function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var i=function(){return i=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};function a(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(n[r[o]]=t[r[o]])}return n}function c(t,e,n,r){var o,i=arguments.length,a=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,n):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)a=Reflect.decorate(t,e,n,r);else for(var c=t.length-1;c>=0;c--)(o=t[c])&&(a=(i<3?o(a):i>3?o(e,n,a):o(e,n))||a);return i>3&&a&&Object.defineProperty(e,n,a),a}function u(t,e){return function(n,r){e(n,r,t)}}function s(t,e,n,r,o,i){function a(t){if(void 0!==t&&"function"!==typeof t)throw new TypeError("Function expected");return t}for(var c,u=r.kind,s="getter"===u?"get":"setter"===u?"set":"value",f=!e&&t?r.static?t:t.prototype:null,l=e||(f?Object.getOwnPropertyDescriptor(f,r.name):{}),h=!1,p=n.length-1;p>=0;p--){var y={};for(var d in r)y[d]="access"===d?{}:r[d];for(var d in r.access)y.access[d]=r.access[d];y.addInitializer=function(t){if(h)throw new TypeError("Cannot add initializers after decoration has completed");i.push(a(t||null))};var v=(0,n[p])("accessor"===u?{get:l.get,set:l.set}:l[s],y);if("accessor"===u){if(void 0===v)continue;if(null===v||"object"!==typeof v)throw new TypeError("Object expected");(c=a(v.get))&&(l.get=c),(c=a(v.set))&&(l.set=c),(c=a(v.init))&&o.unshift(c)}else(c=a(v))&&("field"===u?o.unshift(c):l[s]=c)}f&&Object.defineProperty(f,r.name,l),h=!0}function f(t,e,n){for(var r=arguments.length>2,o=0;o<e.length;o++)n=r?e[o].call(t,n):e[o].call(t);return r?n:void 0}function l(t){return"symbol"===typeof t?t:"".concat(t)}function h(t,e,n){return"symbol"===typeof e&&(e=e.description?"[".concat(e.description,"]"):""),Object.defineProperty(t,"name",{configurable:!0,value:n?"".concat(n," ",e):e})}function p(t,e){if("object"===typeof Reflect&&"function"===typeof Reflect.metadata)return Reflect.metadata(t,e)}function y(t,e,n,r){return new(n||(n=Promise))((function(o,i){function a(t){try{u(r.next(t))}catch(e){i(e)}}function c(t){try{u(r.throw(t))}catch(e){i(e)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(a,c)}u((r=r.apply(t,e||[])).next())}))}function d(t,e){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(c){return function(u){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,c[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&c[0]?r.return:c[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,c[1])).done)return o;switch(r=0,o&&(c=[2&c[0],o.value]),c[0]){case 0:case 1:o=c;break;case 4:return a.label++,{value:c[1],done:!1};case 5:a.label++,r=c[1],c=[0];continue;case 7:c=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===c[0]||2===c[0])){a=0;continue}if(3===c[0]&&(!o||c[1]>o[0]&&c[1]<o[3])){a.label=c[1];break}if(6===c[0]&&a.label<o[1]){a.label=o[1],o=c;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(c);break}o[2]&&a.ops.pop(),a.trys.pop();continue}c=e.call(t,a)}catch(u){c=[6,u],r=0}finally{n=o=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,u])}}}var v=Object.create?function(t,e,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(e,n);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[n]}}),Object.defineProperty(t,r,o)}:function(t,e,n,r){void 0===r&&(r=n),t[r]=e[n]};function b(t,e){for(var n in t)"default"===n||Object.prototype.hasOwnProperty.call(e,n)||v(e,t,n)}function w(t){var e="function"===typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"===typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function _(t,e){var n="function"===typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,o,i=n.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(r=i.next()).done;)a.push(r.value)}catch(c){o={error:c}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return a}function g(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(_(arguments[e]));return t}function m(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),o=0;for(e=0;e<n;e++)for(var i=arguments[e],a=0,c=i.length;a<c;a++,o++)r[o]=i[a];return r}function O(t,e,n){if(n||2===arguments.length)for(var r,o=0,i=e.length;o<i;o++)!r&&o in e||(r||(r=Array.prototype.slice.call(e,0,o)),r[o]=e[o]);return t.concat(r||Array.prototype.slice.call(e))}function P(t){return this instanceof P?(this.v=t,this):new P(t)}function j(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(t,e||[]),i=[];return r={},a("next"),a("throw"),a("return"),r[Symbol.asyncIterator]=function(){return this},r;function a(t){o[t]&&(r[t]=function(e){return new Promise((function(n,r){i.push([t,e,n,r])>1||c(t,e)}))})}function c(t,e){try{(n=o[t](e)).value instanceof P?Promise.resolve(n.value.v).then(u,s):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function u(t){c("next",t)}function s(t){c("throw",t)}function f(t,e){t(e),i.shift(),i.length&&c(i[0][0],i[0][1])}}function x(t){var e,n;return e={},r("next"),r("throw",(function(t){throw t})),r("return"),e[Symbol.iterator]=function(){return this},e;function r(r,o){e[r]=t[r]?function(e){return(n=!n)?{value:P(t[r](e)),done:!1}:o?o(e):e}:o}}function S(t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var e,n=t[Symbol.asyncIterator];return n?n.call(t):(t=w(t),e={},r("next"),r("throw"),r("return"),e[Symbol.asyncIterator]=function(){return this},e);function r(n){e[n]=t[n]&&function(e){return new Promise((function(r,o){(function(t,e,n,r){Promise.resolve(r).then((function(e){t({value:e,done:n})}),e)})(r,o,(e=t[n](e)).done,e.value)}))}}}function I(t,e){return Object.defineProperty?Object.defineProperty(t,"raw",{value:e}):t.raw=e,t}var E=Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e};function M(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)"default"!==n&&Object.prototype.hasOwnProperty.call(t,n)&&v(e,t,n);return E(e,t),e}function D(t){return t&&t.__esModule?t:{default:t}}function C(t,e,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"===typeof e?t!==e||!r:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(t):r?r.value:e.get(t)}function k(t,e,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"===typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(t,n):o?o.value=n:e.set(t,n),n}function T(t,e){if(null===e||"object"!==typeof e&&"function"!==typeof e)throw new TypeError("Cannot use 'in' operator on non-object");return"function"===typeof t?e===t:t.has(e)}function A(t,e,n){if(null!==e&&void 0!==e){if("object"!==typeof e&&"function"!==typeof e)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=e[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=e[Symbol.dispose]}if("function"!==typeof r)throw new TypeError("Object not disposable.");t.stack.push({value:e,dispose:r,async:n})}else n&&t.stack.push({async:!0});return e}var R="function"===typeof SuppressedError?SuppressedError:function(t,e,n){var r=new Error(n);return r.name="SuppressedError",r.error=t,r.suppressed=e,r};function F(t){function e(e){t.error=t.hasError?new R(e,t.error,"An error was suppressed during disposal."):e,t.hasError=!0}return function n(){for(;t.stack.length;){var r=t.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,(function(t){return e(t),n()}))}catch(i){e(i)}}if(t.hasError)throw t.error}()}e.default={__extends:o,__assign:i,__rest:a,__decorate:c,__param:u,__metadata:p,__awaiter:y,__generator:d,__createBinding:v,__exportStar:b,__values:w,__read:_,__spread:g,__spreadArrays:m,__spreadArray:O,__await:P,__asyncGenerator:j,__asyncDelegator:x,__asyncValues:S,__makeTemplateObject:I,__importStar:M,__importDefault:D,__classPrivateFieldGet:C,__classPrivateFieldSet:k,__classPrivateFieldIn:T,__addDisposableResource:A,__disposeResources:F}}}]);
//# sourceMappingURL=551.e720abab.chunk.js.map