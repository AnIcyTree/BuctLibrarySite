(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const jo="180",qi={ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},_h=0,Dl=1,vh=2,lu=1,cu=2,Nn=3,Kn=0,Ve=1,nn=2,On=0,Yi=1,Os=2,Ll=3,Il=4,xh=5,ci=100,yh=101,bh=102,Mh=103,Sh=104,Eh=200,wh=201,Th=202,Ah=203,$a=204,ja=205,Ch=206,Rh=207,Ph=208,Dh=209,Lh=210,Ih=211,Uh=212,Nh=213,Fh=214,Za=0,Ka=1,Ja=2,Ki=3,Qa=4,to=5,eo=6,no=7,Zo=0,Oh=1,Bh=2,Zn=0,uu=1,hu=2,du=3,Ko=4,fu=5,pu=6,mu=7,gu=300,Ji=301,Qi=302,io=303,ro=304,qs=306,Bs=1e3,di=1001,so=1002,sn=1003,zh=1004,Vr=1005,Mn=1006,ia=1007,fi=1008,Tn=1009,_u=1010,vu=1011,wr=1012,Jo=1013,pi=1014,Sn=1015,Bn=1016,Qo=1017,tl=1018,Tr=1020,xu=35902,yu=35899,bu=1021,Mu=1022,gn=1023,Ar=1026,Cr=1027,el=1028,nl=1029,Su=1030,il=1031,rl=1033,Ps=33776,Ds=33777,Ls=33778,Is=33779,ao=35840,oo=35841,lo=35842,co=35843,uo=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,_o=37811,vo=37812,xo=37813,yo=37814,bo=37815,Mo=37816,So=37817,Eo=37818,wo=37819,To=37820,Ao=37821,Co=36492,Ro=36494,Po=36495,Do=36283,Lo=36284,Io=36285,Uo=36286,kh=3200,Hh=3201,sl=0,Vh=1,jn="",Ne="srgb",tr="srgb-linear",zs="linear",oe="srgb",bi=7680,Ul=519,Gh=512,Wh=513,Xh=514,Eu=515,qh=516,Yh=517,$h=518,jh=519,No=35044,Nl="300 es",En=2e3,ks=2001;class gi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ie=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fl=1234567;const $i=Math.PI/180,Rr=180/Math.PI;function wn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ie[i&255]+Ie[i>>8&255]+Ie[i>>16&255]+Ie[i>>24&255]+"-"+Ie[t&255]+Ie[t>>8&255]+"-"+Ie[t>>16&15|64]+Ie[t>>24&255]+"-"+Ie[e&63|128]+Ie[e>>8&255]+"-"+Ie[e>>16&255]+Ie[e>>24&255]+Ie[n&255]+Ie[n>>8&255]+Ie[n>>16&255]+Ie[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function al(i,t){return(i%t+t)%t}function Zh(i,t,e,n,r){return n+(i-t)*(r-n)/(e-t)}function Kh(i,t,e){return i!==t?(e-i)/(t-i):0}function Mr(i,t,e){return(1-e)*i+e*t}function Jh(i,t,e,n){return Mr(i,t,1-Math.exp(-e*n))}function Qh(i,t=1){return t-Math.abs(al(i,t*2)-t)}function td(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function ed(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function nd(i,t){return i+Math.floor(Math.random()*(t-i+1))}function id(i,t){return i+Math.random()*(t-i)}function rd(i){return i*(.5-Math.random())}function sd(i){i!==void 0&&(Fl=i);let t=Fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ad(i){return i*$i}function od(i){return i*Rr}function ld(i){return(i&i-1)===0&&i!==0}function cd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function ud(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function hd(i,t,e,n,r){const s=Math.cos,a=Math.sin,o=s(e/2),l=a(e/2),c=s((t+n)/2),h=a((t+n)/2),d=s((t-n)/2),f=a((t-n)/2),p=s((n-t)/2),g=a((n-t)/2);switch(r){case"XYX":i.set(o*h,l*d,l*f,o*c);break;case"YZY":i.set(l*f,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*f,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function mn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ee={DEG2RAD:$i,RAD2DEG:Rr,generateUUID:wn,clamp:Kt,euclideanModulo:al,mapLinear:Zh,inverseLerp:Kh,lerp:Mr,damp:Jh,pingpong:Qh,smoothstep:td,smootherstep:ed,randInt:nd,randFloat:id,randFloatSpread:rd,seededRandom:sd,degToRad:ad,radToDeg:od,isPowerOfTwo:ld,ceilPowerOfTwo:cd,floorPowerOfTwo:ud,setQuaternionFromProperEuler:hd,normalize:le,denormalize:mn};class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],c=n[r+1],h=n[r+2],d=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],y=s[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(d!==y||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*y,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const E=Math.sqrt(x),T=Math.atan2(E,u*_);m=Math.sin(m*T)/E,o=Math.sin(o*T)/E}const v=o*_;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,d=d*m+y*v,m===1-o){const E=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=E,c*=E,h*=E,d*=E}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],h=n[r+3],d=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return t[e]=o*g+h*d+l*p-c*f,t[e+1]=l*g+h*f+c*d-o*p,t[e+2]=c*g+h*p+o*f-l*d,t[e+3]=h*g-o*d-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(r/2),d=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],f=n+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-n*c,this._z=s*h+a*c+n*l-r*o,this._w=a*h-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*r+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=r*d+this._y*f,this._z=s*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ol.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ol.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*r-o*n),h=2*(o*e-s*r),d=2*(s*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ra.copy(this).projectOnVector(t),this.sub(ra)}reflect(t){return this.sub(ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ra=new L,Ol=new Pe;class Zt{constructor(t,e,n,r,s,a,o,l,c){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c)}set(t,e,n,r,s,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=r,h[2]=o,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],y=r[0],m=r[3],u=r[6],_=r[1],x=r[4],v=r[7],E=r[2],T=r[5],P=r[8];return s[0]=a*y+o*_+l*E,s[3]=a*m+o*x+l*T,s[6]=a*u+o*v+l*P,s[1]=c*y+h*_+d*E,s[4]=c*m+h*x+d*T,s[7]=c*u+h*v+d*P,s[2]=f*y+p*_+g*E,s[5]=f*m+p*x+g*T,s[8]=f*u+p*v+g*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*s*h+n*o*l+r*s*c-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,f=o*l-h*s,p=c*s-a*l,g=e*d+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return t[0]=d*y,t[1]=(r*c-h*n)*y,t[2]=(o*n-r*a)*y,t[3]=f*y,t[4]=(h*e-r*l)*y,t[5]=(r*s-o*e)*y,t[6]=p*y,t[7]=(n*l-c*e)*y,t[8]=(a*e-n*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-r*c,r*l,-r*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new Zt;function wu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Hs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function dd(){const i=Hs("canvas");return i.style.display="block",i}const Bl={};function Pr(i){i in Bl||(Bl[i]=!0,console.warn(i))}function fd(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const zl=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kl=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function pd(){const i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===oe&&(r.r=zn(r.r),r.g=zn(r.g),r.b=zn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===oe&&(r.r=ji(r.r),r.g=ji(r.g),r.b=ji(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===jn?zs:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Pr("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Pr("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:t,whitePoint:n,transfer:oe,toXYZ:zl,fromXYZ:kl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}}),i}const ie=pd();function zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Mi;class md{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Mi===void 0&&(Mi=Hs("canvas")),Mi.width=t.width,Mi.height=t.height;const r=Mi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Mi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Hs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zn(e[n]/255)*255):e[n]=zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let gd=0;class ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=wn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(aa(r[a].image)):s.push(aa(r[a]))}else s=aa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?md.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _d=0;const oa=new L;class Oe extends gi{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=di,r=di,s=Mn,a=fi,o=gn,l=Tn,c=Oe.DEFAULT_ANISOTROPY,h=jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_d++}),this.uuid=wn(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(oa).x}get height(){return this.source.getSize(oa).y}get depth(){return this.source.getSize(oa).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==gu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bs:t.x=t.x-Math.floor(t.x);break;case di:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bs:t.y=t.y-Math.floor(t.y);break;case di:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=gu;Oe.DEFAULT_ANISOTROPY=1;class he{constructor(t=0,e=0,n=0,r=1){he.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],y=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(c+1)/2,v=(p+1)/2,E=(u+1)/2,T=(h+f)/4,P=(d+y)/4,R=(g+m)/4;return x>v&&x>E?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=P/n):v>E?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=T/r,s=R/r):E<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),n=P/s,r=R/s),this.set(n,r,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(d-y)/_,this.z=(f-h)/_,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vd extends gi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new he(0,0,t,e),this.scissorTest=!1,this.viewport=new he(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Oe(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new ol(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class _n extends vd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Tu extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class xd extends Oe{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=sn,this.minFilter=sn,this.wrapR=di,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _i{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Gr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Gr.copy(n.boundingBox)),Gr.applyMatrix4(t.matrixWorld),this.union(Gr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),Wr.subVectors(this.max,cr),Si.subVectors(t.a,cr),Ei.subVectors(t.b,cr),wi.subVectors(t.c,cr),Vn.subVectors(Ei,Si),Gn.subVectors(wi,Ei),ei.subVectors(Si,wi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-ei.z,ei.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,ei.z,0,-ei.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-ei.y,ei.x,0];return!la(e,Si,Ei,wi,Wr)||(e=[1,0,0,0,1,0,0,0,1],!la(e,Si,Ei,wi,Wr))?!1:(Xr.crossVectors(Vn,Gn),e=[Xr.x,Xr.y,Xr.z],la(e,Si,Ei,wi,Wr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Rn=[new L,new L,new L,new L,new L,new L,new L,new L],dn=new L,Gr=new _i,Si=new L,Ei=new L,wi=new L,Vn=new L,Gn=new L,ei=new L,cr=new L,Wr=new L,Xr=new L,ni=new L;function la(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ni.fromArray(i,s);const o=r.x*Math.abs(ni.x)+r.y*Math.abs(ni.y)+r.z*Math.abs(ni.z),l=t.dot(ni),c=e.dot(ni),h=n.dot(ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const yd=new _i,ur=new L,ca=new L;class vi{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):yd.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ur.subVectors(t,this.center);const e=ur.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(ur,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ur.copy(t.center).add(ca)),this.expandByPoint(ur.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Pn=new L,ua=new L,qr=new L,Wn=new L,ha=new L,Yr=new L,da=new L;class Br{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ua.copy(t).add(e).multiplyScalar(.5),qr.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ua);const s=t.distanceTo(e)*.5,a=-this.direction.dot(qr),o=Wn.dot(this.direction),l=-Wn.dot(qr),c=Wn.lengthSq(),h=Math.abs(1-a*a);let d,f,p,g;if(h>0)if(d=a*l-o,f=a*o-l,g=s*h,d>=0)if(f>=-g)if(f<=g){const y=1/h;d*=y,f*=y,p=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f=-s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*s+o)),f=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(d=Math.max(0,-(a*s+o)),f=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+f*(f+2*l)+c);else f=a>0?-s:s,d=Math.max(0,-(a*f+o)),p=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ua).addScaledVector(qr,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),r=Pn.dot(Pn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,r=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,r=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(t.min.z-f.z)*d,l=(t.max.z-f.z)*d):(o=(t.max.z-f.z)*d,l=(t.min.z-f.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,r,s){ha.subVectors(e,t),Yr.subVectors(n,t),da.crossVectors(ha,Yr);let a=this.direction.dot(da),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);const l=o*this.direction.dot(Yr.crossVectors(Wn,Yr));if(l<0)return null;const c=o*this.direction.dot(ha.cross(Wn));if(c<0||l+c>a)return null;const h=-o*Wn.dot(da);return h<0?null:this.at(h/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,r,s,a,o,l,c,h,d,f,p,g,y,m){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,c,h,d,f,p,g,y,m)}set(t,e,n,r,s,a,o,l,c,h,d,f,p,g,y,m){const u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Ti.setFromMatrixColumn(t,0).length(),s=1/Ti.setFromMatrixColumn(t,1).length(),a=1/Ti.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){const f=a*h,p=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=p+g*c,e[5]=f-y*c,e[9]=-o*l,e[2]=y-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*d,g=c*h,y=c*d;e[0]=f+y*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=y+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*d,g=c*h,y=c*d;e[0]=f-y*o,e[4]=-a*d,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=y-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*d,g=o*h,y=o*d;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+y,e[1]=l*d,e[5]=y*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=y-f*d,e[8]=g*d+p,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*d+g,e[10]=f-y*d}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,y=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=f*d+y,e[5]=a*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=o*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(bd,t,Md)}lookAt(t,e,n){const r=this.elements;return Qe.subVectors(t,e),Qe.lengthSq()===0&&(Qe.z=1),Qe.normalize(),Xn.crossVectors(n,Qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?Qe.x+=1e-4:Qe.z+=1e-4,Qe.normalize(),Xn.crossVectors(n,Qe)),Xn.normalize(),$r.crossVectors(Qe,Xn),r[0]=Xn.x,r[4]=$r.x,r[8]=Qe.x,r[1]=Xn.y,r[5]=$r.y,r[9]=Qe.y,r[2]=Xn.z,r[6]=$r.z,r[10]=Qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],u=n[14],_=n[3],x=n[7],v=n[11],E=n[15],T=r[0],P=r[4],R=r[8],S=r[12],M=r[1],U=r[5],B=r[9],V=r[13],K=r[2],W=r[6],z=r[10],J=r[14],j=r[3],ot=r[7],yt=r[11],Rt=r[15];return s[0]=a*T+o*M+l*K+c*j,s[4]=a*P+o*U+l*W+c*ot,s[8]=a*R+o*B+l*z+c*yt,s[12]=a*S+o*V+l*J+c*Rt,s[1]=h*T+d*M+f*K+p*j,s[5]=h*P+d*U+f*W+p*ot,s[9]=h*R+d*B+f*z+p*yt,s[13]=h*S+d*V+f*J+p*Rt,s[2]=g*T+y*M+m*K+u*j,s[6]=g*P+y*U+m*W+u*ot,s[10]=g*R+y*B+m*z+u*yt,s[14]=g*S+y*V+m*J+u*Rt,s[3]=_*T+x*M+v*K+E*j,s[7]=_*P+x*U+v*W+E*ot,s[11]=_*R+x*B+v*z+E*yt,s[15]=_*S+x*V+v*J+E*Rt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],u=t[15];return g*(+s*l*d-r*c*d-s*o*f+n*c*f+r*o*p-n*l*p)+y*(+e*l*p-e*c*f+s*a*f-r*a*p+r*c*h-s*l*h)+m*(+e*c*d-e*o*p-s*a*d+n*a*p+s*o*h-n*c*h)+u*(-r*o*h-e*l*d+e*o*f+r*a*d-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],u=t[15],_=d*m*c-y*f*c+y*l*p-o*m*p-d*l*u+o*f*u,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*u-a*f*u,v=h*y*c-g*d*c+g*o*p-a*y*p-h*o*u+a*d*u,E=g*d*l-h*y*l-g*o*f+a*y*f+h*o*m-a*d*m,T=e*_+n*x+r*v+s*E;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/T;return t[0]=_*P,t[1]=(y*f*s-d*m*s-y*r*p+n*m*p+d*r*u-n*f*u)*P,t[2]=(o*m*s-y*l*s+y*r*c-n*m*c-o*r*u+n*l*u)*P,t[3]=(d*l*s-o*f*s-d*r*c+n*f*c+o*r*p-n*l*p)*P,t[4]=x*P,t[5]=(h*m*s-g*f*s+g*r*p-e*m*p-h*r*u+e*f*u)*P,t[6]=(g*l*s-a*m*s-g*r*c+e*m*c+a*r*u-e*l*u)*P,t[7]=(a*f*s-h*l*s+h*r*c-e*f*c-a*r*p+e*l*p)*P,t[8]=v*P,t[9]=(g*d*s-h*y*s-g*n*p+e*y*p+h*n*u-e*d*u)*P,t[10]=(a*y*s-g*o*s+g*n*c-e*y*c-a*n*u+e*o*u)*P,t[11]=(h*o*s-a*d*s-h*n*c+e*d*c+a*n*p-e*o*p)*P,t[12]=E*P,t[13]=(h*y*r-g*d*r+g*n*f-e*y*f-h*n*m+e*d*m)*P,t[14]=(g*o*r-a*y*r-g*n*l+e*y*l+a*n*m-e*o*m)*P,t[15]=(a*d*r-h*o*r+h*n*l-e*d*l-a*n*f+e*o*f)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,c=s*a,h=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+n,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,c=s+s,h=a+a,d=o+o,f=s*c,p=s*h,g=s*d,y=a*h,m=a*d,u=o*d,_=l*c,x=l*h,v=l*d,E=n.x,T=n.y,P=n.z;return r[0]=(1-(y+u))*E,r[1]=(p+v)*E,r[2]=(g-x)*E,r[3]=0,r[4]=(p-v)*T,r[5]=(1-(f+u))*T,r[6]=(m+_)*T,r[7]=0,r[8]=(g+x)*P,r[9]=(m-_)*P,r[10]=(1-(f+y))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Ti.set(r[0],r[1],r[2]).length();const a=Ti.set(r[4],r[5],r[6]).length(),o=Ti.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],fn.copy(this);const c=1/s,h=1/a,d=1/o;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=En,l=!1){const c=this.elements,h=2*s/(e-t),d=2*s/(n-r),f=(e+t)/(e-t),p=(n+r)/(n-r);let g,y;if(l)g=s/(a-s),y=a*s/(a-s);else if(o===En)g=-(a+s)/(a-s),y=-2*a*s/(a-s);else if(o===ks)g=-a/(a-s),y=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=En,l=!1){const c=this.elements,h=2/(e-t),d=2/(n-r),f=-(e+t)/(e-t),p=-(n+r)/(n-r);let g,y;if(l)g=1/(a-s),y=a/(a-s);else if(o===En)g=-2/(a-s),y=-(a+s)/(a-s);else if(o===ks)g=-1/(a-s),y=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ti=new L,fn=new se,bd=new L(0,0,0),Md=new L(1,1,1),Xn=new L,$r=new L,Qe=new L,Hl=new se,Vl=new Pe;class an{constructor(t=0,e=0,n=0,r=an.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],f=r[6],p=r[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vl.setFromEuler(this),this.setFromQuaternion(Vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}an.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Sd=0;const Gl=new L,Ai=new Pe,Dn=new se,jr=new L,hr=new L,Ed=new L,wd=new Pe,Wl=new L(1,0,0),Xl=new L(0,1,0),ql=new L(0,0,1),Yl={type:"added"},Td={type:"removed"},Ci={type:"childadded",child:null},fa={type:"childremoved",child:null};class Me extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new L,e=new an,n=new Pe,r=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new se},normalMatrix:{value:new Zt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Wl,t)}rotateY(t){return this.rotateOnAxis(Xl,t)}rotateZ(t){return this.rotateOnAxis(ql,t)}translateOnAxis(t,e){return Gl.copy(t).applyQuaternion(this.quaternion),this.position.add(Gl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wl,t)}translateY(t){return this.translateOnAxis(Xl,t)}translateZ(t){return this.translateOnAxis(ql,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),hr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(hr,jr,this.up):Dn.lookAt(jr,hr,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),Ai.setFromRotationMatrix(Dn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Td),fa.child=t,this.dispatchEvent(fa),fa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Ci.child=t,this.dispatchEvent(Ci),Ci.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,t,Ed),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hr,wd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Me.DEFAULT_UP=new L(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new L,Ln=new L,pa=new L,In=new L,Ri=new L,Pi=new L,$l=new L,ma=new L,ga=new L,_a=new L,va=new he,xa=new he,ya=new he;class rn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),pn.subVectors(t,e),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){pn.subVectors(r,e),Ln.subVectors(n,e),pa.subVectors(t,e);const a=pn.dot(pn),o=pn.dot(Ln),l=pn.dot(pa),c=Ln.dot(Ln),h=Ln.dot(pa),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,In)===null?!1:In.x>=0&&In.y>=0&&In.x+In.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,In)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,In.x),l.addScaledVector(a,In.y),l.addScaledVector(o,In.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return va.setScalar(0),xa.setScalar(0),ya.setScalar(0),va.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(va,s.x),a.addScaledVector(xa,s.y),a.addScaledVector(ya,s.z),a}static isFrontFacing(t,e,n,r){return pn.subVectors(n,e),Ln.subVectors(t,e),pn.cross(Ln).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),pn.cross(Ln).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return rn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return rn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return rn.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return rn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return rn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ri.subVectors(r,n),Pi.subVectors(s,n),ma.subVectors(t,n);const l=Ri.dot(ma),c=Pi.dot(ma);if(l<=0&&c<=0)return e.copy(n);ga.subVectors(t,r);const h=Ri.dot(ga),d=Pi.dot(ga);if(h>=0&&d<=h)return e.copy(r);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Ri,a);_a.subVectors(t,s);const p=Ri.dot(_a),g=Pi.dot(_a);if(g>=0&&p<=g)return e.copy(s);const y=p*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(Pi,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return $l.subVectors(s,r),o=(d-h)/(d-h+(p-g)),e.copy(r).addScaledVector($l,o);const u=1/(m+y+f);return a=y*u,o=f*u,e.copy(n).addScaledVector(Ri,a).addScaledVector(Pi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Gt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=ie.workingColorSpace){if(t=al(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=ba(a,s,t+1/3),this.g=ba(a,s,t),this.b=ba(a,s,t-1/3)}return ie.colorSpaceToWorking(this,r),this}setStyle(t,e=Ne){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=Au[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ie.workingToColorSpace(Ue.copy(this),t),Math.round(Kt(Ue.r*255,0,255))*65536+Math.round(Kt(Ue.g*255,0,255))*256+Math.round(Kt(Ue.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(Ue.copy(this),e);const n=Ue.r,r=Ue.g,s=Ue.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(Ue.copy(this),e),t.r=Ue.r,t.g=Ue.g,t.b=Ue.b,t}getStyle(t=Ne){ie.workingToColorSpace(Ue.copy(this),t);const e=Ue.r,n=Ue.g,r=Ue.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Zr);const n=Mr(qn.h,Zr.h,e),r=Mr(qn.s,Zr.s,e),s=Mr(qn.l,Zr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ue=new Gt;Gt.NAMES=Au;let Ad=0;class Cn extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Yi,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=ja,this.blendEquation=ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ul,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bi,this.stencilZFail=bi,this.stencilZPass=bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Yi&&(n.blending=this.blending),this.side!==Kn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==ja&&(n.blendDst=this.blendDst),this.blendEquation!==ci&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ki&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ul&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sr extends Cn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,Kr=new lt;let Cd=0;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cd++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Kr.fromBufferAttribute(this,e),Kr.applyMatrix3(t),this.setXY(e,Kr.x,Kr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class Cu extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Ru extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ge extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Rd=0;const cn=new se,Ma=new Me,Di=new L,tn=new _i,dr=new _i,Re=new L;class we extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(wu(t)?Ru:Cu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Zt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return cn.makeRotationFromQuaternion(t),this.applyMatrix4(cn),this}rotateX(t){return cn.makeRotationX(t),this.applyMatrix4(cn),this}rotateY(t){return cn.makeRotationY(t),this.applyMatrix4(cn),this}rotateZ(t){return cn.makeRotationZ(t),this.applyMatrix4(cn),this}translate(t,e,n){return cn.makeTranslation(t,e,n),this.applyMatrix4(cn),this}scale(t,e,n){return cn.makeScale(t,e,n),this.applyMatrix4(cn),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Di).negate(),this.translate(Di.x,Di.y,Di.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ge(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(tn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];dr.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(tn.min,dr.min),tn.expandByPoint(Re),Re.addVectors(tn.max,dr.max),tn.expandByPoint(Re)):(tn.expandByPoint(dr.min),tn.expandByPoint(dr.max))}tn.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)Re.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(Re));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(Di.fromBufferAttribute(t,c),Re.add(Di)),r=Math.max(r,n.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let R=0;R<n.count;R++)o[R]=new L,l[R]=new L;const c=new L,h=new L,d=new L,f=new lt,p=new lt,g=new lt,y=new L,m=new L;function u(R,S,M){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,S),d.fromBufferAttribute(n,M),f.fromBufferAttribute(s,R),p.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),o[R].add(y),o[S].add(y),o[M].add(y),l[R].add(m),l[S].add(m),l[M].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let R=0,S=_.length;R<S;++R){const M=_[R],U=M.start,B=M.count;for(let V=U,K=U+B;V<K;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const x=new L,v=new L,E=new L,T=new L;function P(R){E.fromBufferAttribute(r,R),T.copy(E);const S=o[R];x.copy(S),x.sub(E.multiplyScalar(E.dot(S))).normalize(),v.crossVectors(T,S);const U=v.dot(l[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,U)}for(let R=0,S=_.length;R<S;++R){const M=_[R],U=M.start,B=M.count;for(let V=U,K=U+B;V<K;V+=3)P(t.getX(V+0)),P(t.getX(V+1)),P(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new L,s=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,y),a.fromBufferAttribute(e,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?p=l[y]*o.data.stride+o.offset:p=l[y]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new je(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=t(l,n);e.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(t.data))}h.length>0&&(r[l]=h,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],d=s[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new se,ii=new Br,Jr=new vi,Zl=new L,Qr=new L,ts=new L,es=new L,Sa=new L,ns=new L,Kl=new L,is=new L;class ee extends Me{constructor(t=new we,e=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ns.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=o[l],d=s[l];h!==0&&(Sa.fromBufferAttribute(d,t),a?ns.addScaledVector(Sa,h):ns.addScaledVector(Sa.sub(e),h))}e.add(ns)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),ii.copy(t.ray).recast(t.near),!(Jr.containsPoint(ii.origin)===!1&&(ii.intersectSphere(Jr,Zl)===null||ii.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(jl.copy(s).invert(),ii.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&ii.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ii)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=x;v<E;v+=3){const T=o.getX(v),P=o.getX(v+1),R=o.getX(v+2);r=rs(this,u,t,n,c,h,d,T,P,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(o.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const _=o.getX(m),x=o.getX(m+1),v=o.getX(m+2);r=rs(this,a,t,n,c,h,d,_,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=f.length;g<y;g++){const m=f[g],u=a[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=_,E=x;v<E;v+=3){const T=v,P=v+1,R=v+2;r=rs(this,u,t,n,c,h,d,T,P,R),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=m.materialIndex,e.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){const _=m,x=m+1,v=m+2;r=rs(this,a,t,n,c,h,d,_,x,v),r&&(r.faceIndex=Math.floor(m/3),e.push(r))}}}}function Pd(i,t,e,n,r,s,a,o){let l;if(t.side===Ve?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===Kn,o),l===null)return null;is.copy(o),is.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(is);return c<e.near||c>e.far?null:{distance:c,point:is.clone(),object:i}}function rs(i,t,e,n,r,s,a,o,l,c){i.getVertexPosition(o,Qr),i.getVertexPosition(l,ts),i.getVertexPosition(c,es);const h=Pd(i,t,e,n,Qr,ts,es,Kl);if(h){const d=new L;rn.getBarycoord(Kl,Qr,ts,es,d),r&&(h.uv=rn.getInterpolatedAttribute(r,o,l,c,d,new lt)),s&&(h.uv1=rn.getInterpolatedAttribute(s,o,l,c,d,new lt)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};rn.getNormal(Qr,ts,es,f.normal),h.face=f,h.barycoord=d}return h}class hn extends we{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ge(c,3)),this.setAttribute("normal",new ge(h,3)),this.setAttribute("uv",new ge(d,2));function g(y,m,u,_,x,v,E,T,P,R,S){const M=v/P,U=E/R,B=v/2,V=E/2,K=T/2,W=P+1,z=R+1;let J=0,j=0;const ot=new L;for(let yt=0;yt<z;yt++){const Rt=yt*U-V;for(let zt=0;zt<W;zt++){const Z=zt*M-B;ot[y]=Z*_,ot[m]=Rt*x,ot[u]=K,c.push(ot.x,ot.y,ot.z),ot[y]=0,ot[m]=0,ot[u]=T>0?1:-1,h.push(ot.x,ot.y,ot.z),d.push(zt/P),d.push(1-yt/R),J+=1}}for(let yt=0;yt<R;yt++)for(let Rt=0;Rt<P;Rt++){const zt=f+Rt+W*yt,Z=f+Rt+W*(yt+1),ut=f+(Rt+1)+W*(yt+1),dt=f+(Rt+1)+W*yt;l.push(zt,Z,dt),l.push(Z,ut,dt),j+=6}o.addGroup(p,j,S),p+=j,f+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function er(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function ke(i){const t={};for(let e=0;e<i.length;e++){const n=er(i[e]);for(const r in n)t[r]=n[r]}return t}function Dd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Pu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}const Dr={clone:er,merge:ke};var Ld=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Id=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class He extends Cn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ld,this.fragmentShader=Id,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=er(t.uniforms),this.uniformsGroups=Dd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Du extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=En,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new L,Jl=new lt,Ql=new lt;class en extends Du{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Rr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan($i*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Rr*2*Math.atan(Math.tan($i*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Jl,Ql),e.subVectors(Ql,Jl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan($i*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Li=-90,Ii=1;class Ud extends Me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Li,Ii,t,e);r.layers=this.layers,this.add(r);const s=new en(Li,Ii,t,e);s.layers=this.layers,this.add(s);const a=new en(Li,Ii,t,e);a.layers=this.layers,this.add(a);const o=new en(Li,Ii,t,e);o.layers=this.layers,this.add(o);const l=new en(Li,Ii,t,e);l.layers=this.layers,this.add(l);const c=new en(Li,Ii,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,c),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,r),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Lu extends Oe{constructor(t=[],e=Ji,n,r,s,a,o,l,c,h){super(t,e,n,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nd extends _n{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new Lu(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new hn(5,5,5),s=new He({name:"CubemapFromEquirect",uniforms:er(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ve,blending:On});s.uniforms.tEquirect.value=e;const a=new ee(r,s),o=e.minFilter;return e.minFilter===fi&&(e.minFilter=Mn),new Ud(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class Fe extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Fd={type:"move"};class Ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const y of t.hand.values()){const m=e.getJointPose(y,n),u=this._getHandJoint(c,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Fd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Fe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Ys{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Gt(t),this.density=e}clone(){return new Ys(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class cl extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new an,this.environmentIntensity=1,this.environmentRotation=new an,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Od{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[n+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ze=new L;class Vs{constructor(t,e,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),r=le(r,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new je(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Vs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Bd extends Cn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ui;const fr=new L,Ni=new L,Fi=new L,Oi=new lt,pr=new lt,Iu=new se,ss=new L,mr=new L,as=new L,tc=new lt,wa=new lt,ec=new lt;class zd extends Me{constructor(t=new Bd){if(super(),this.isSprite=!0,this.type="Sprite",Ui===void 0){Ui=new we;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Od(e,5);Ui.setIndex([0,1,2,0,2,3]),Ui.setAttribute("position",new Vs(n,3,0,!1)),Ui.setAttribute("uv",new Vs(n,2,3,!1))}this.geometry=Ui,this.material=t,this.center=new lt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ni.setFromMatrixScale(this.matrixWorld),Iu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ni.multiplyScalar(-Fi.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;os(ss.set(-.5,-.5,0),Fi,a,Ni,r,s),os(mr.set(.5,-.5,0),Fi,a,Ni,r,s),os(as.set(.5,.5,0),Fi,a,Ni,r,s),tc.set(0,0),wa.set(1,0),ec.set(1,1);let o=t.ray.intersectTriangle(ss,mr,as,!1,fr);if(o===null&&(os(mr.set(-.5,.5,0),Fi,a,Ni,r,s),wa.set(0,1),o=t.ray.intersectTriangle(ss,as,mr,!1,fr),o===null))return;const l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:rn.getInterpolation(fr,ss,mr,as,tc,wa,ec,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function os(i,t,e,n,r,s){Oi.subVectors(i,e).addScalar(.5).multiply(n),r!==void 0?(pr.x=s*Oi.x-r*Oi.y,pr.y=r*Oi.x+s*Oi.y):pr.copy(Oi),i.copy(t),i.x+=pr.x,i.y+=pr.y,i.applyMatrix4(Iu)}class kd extends Oe{constructor(t=null,e=1,n=1,r,s,a,o,l,c=sn,h=sn,d,f){super(null,a,o,l,c,h,r,s,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nc extends je{constructor(t,e,n,r=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Bi=new se,ic=new se,ls=[],rc=new _i,Hd=new se,gr=new ee,_r=new vi;class Uu extends ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new nc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Hd)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new _i),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),rc.copy(t.boundingBox).applyMatrix4(Bi),this.boundingBox.union(rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new vi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bi),_r.copy(t.boundingSphere).applyMatrix4(Bi),this.boundingSphere.union(_r)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=t*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(t,e){const n=this.matrixWorld,r=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_r.copy(this.boundingSphere),_r.applyMatrix4(n),t.ray.intersectsSphere(_r)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Bi),ic.multiplyMatrices(n,Bi),gr.matrixWorld=ic,gr.raycast(t,ls);for(let a=0,o=ls.length;a<o;a++){const l=ls[a];l.instanceId=s,l.object=this,e.push(l)}ls.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new nc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new kd(new Float32Array(r*this.count),r,this.count,el,Sn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*t;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ta=new L,Vd=new L,Gd=new Zt;class $n{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Ta.subVectors(n,e).cross(Vd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gd.getNormalMatrix(t),r=this.coplanarPoint(Ta).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new vi,Wd=new lt(.5,.5),cs=new L;class ul{constructor(t=new $n,e=new $n,n=new $n,r=new $n,s=new $n,a=new $n){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En,n=!1){const r=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],c=s[3],h=s[4],d=s[5],f=s[6],p=s[7],g=s[8],y=s[9],m=s[10],u=s[11],_=s[12],x=s[13],v=s[14],E=s[15];if(r[0].setComponents(c-a,p-h,u-g,E-_).normalize(),r[1].setComponents(c+a,p+h,u+g,E+_).normalize(),r[2].setComponents(c+o,p+d,u+y,E+x).normalize(),r[3].setComponents(c-o,p-d,u-y,E-x).normalize(),n)r[4].setComponents(l,f,m,v).normalize(),r[5].setComponents(c-l,p-f,u-m,E-v).normalize();else if(r[4].setComponents(c-l,p-f,u-m,E-v).normalize(),e===En)r[5].setComponents(c+l,p+f,u+m,E+v).normalize();else if(e===ks)r[5].setComponents(l,f,m,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){ri.center.set(0,0,0);const e=Wd.distanceTo(t.center);return ri.radius=.7071067811865476+e,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(cs.x=r.normal.x>0?t.max.x:t.min.x,cs.y=r.normal.y>0?t.max.y:t.min.y,cs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(cs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nr extends Cn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Gs=new L,Ws=new L,sc=new se,vr=new Br,us=new vi,Aa=new L,ac=new L;class hl extends Me{constructor(t=new we,e=new nr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let r=1,s=e.count;r<s;r++)Gs.fromBufferAttribute(e,r-1),Ws.fromBufferAttribute(e,r),n[r]=n[r-1],n[r]+=Gs.distanceTo(Ws);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),us.radius+=s,t.ray.intersectsSphere(us)===!1)return;sc.copy(r).invert(),vr.copy(t.ray).applyMatrix4(sc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const u=h.getX(y),_=h.getX(y+1),x=hs(this,t,vr,l,u,_,y);x&&e.push(x)}if(this.isLineLoop){const y=h.getX(g-1),m=h.getX(p),u=hs(this,t,vr,l,y,m,g-1);u&&e.push(u)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let y=p,m=g-1;y<m;y+=c){const u=hs(this,t,vr,l,y,y+1,y);u&&e.push(u)}if(this.isLineLoop){const y=hs(this,t,vr,l,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function hs(i,t,e,n,r,s,a){const o=i.geometry.attributes.position;if(Gs.fromBufferAttribute(o,r),Ws.fromBufferAttribute(o,s),e.distanceSqToSegment(Gs,Ws,Aa,ac)>n)return;Aa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Aa);if(!(c<t.near||c>t.far))return{distance:c,point:ac.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}const oc=new L,lc=new L;class Lr extends hl{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let r=0,s=e.count;r<s;r+=2)oc.fromBufferAttribute(e,r),lc.fromBufferAttribute(e,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+oc.distanceTo(lc);t.setAttribute("lineDistance",new ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Nu extends Cn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cc=new se,Fo=new Br,ds=new vi,fs=new L;class Fu extends Me{constructor(t=new we,e=new Nu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,r=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),ds.radius+=s,t.ray.intersectsSphere(ds)===!1)return;cc.copy(r).invert(),Fo.copy(t.ray).applyMatrix4(cc);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,y=p;g<y;g++){const m=c.getX(g);fs.fromBufferAttribute(d,m),uc(fs,m,l,r,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let g=f,y=p;g<y;g++)fs.fromBufferAttribute(d,g),uc(fs,g,l,r,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function uc(i,t,e,n,r,s,a){const o=Fo.distanceSqToPoint(i);if(o<e){const l=new L;Fo.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class dl extends Oe{constructor(t,e,n,r,s,a,o,l,c){super(t,e,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ou extends Oe{constructor(t,e,n=pi,r,s,a,o=sn,l=sn,c,h=Ar,d=1){if(h!==Ar&&h!==Cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:t,height:e,depth:d};super(f,r,s,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ol(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Bu extends Oe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Ir extends we{constructor(t=1,e=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const h=[],d=[],f=[],p=[];let g=0;const y=[],m=n/2;let u=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ge(d,3)),this.setAttribute("normal",new ge(f,3)),this.setAttribute("uv",new ge(p,2));function _(){const v=new L,E=new L;let T=0;const P=(e-t)/n;for(let R=0;R<=s;R++){const S=[],M=R/s,U=M*(e-t)+t;for(let B=0;B<=r;B++){const V=B/r,K=V*l+o,W=Math.sin(K),z=Math.cos(K);E.x=U*W,E.y=-M*n+m,E.z=U*z,d.push(E.x,E.y,E.z),v.set(W,P,z).normalize(),f.push(v.x,v.y,v.z),p.push(V,1-M),S.push(g++)}y.push(S)}for(let R=0;R<r;R++)for(let S=0;S<s;S++){const M=y[S][R],U=y[S+1][R],B=y[S+1][R+1],V=y[S][R+1];(t>0||S!==0)&&(h.push(M,U,V),T+=3),(e>0||S!==s-1)&&(h.push(U,B,V),T+=3)}c.addGroup(u,T,0),u+=T}function x(v){const E=g,T=new lt,P=new L;let R=0;const S=v===!0?t:e,M=v===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*M,0),f.push(0,M,0),p.push(.5,.5),g++;const U=g;for(let B=0;B<=r;B++){const K=B/r*l+o,W=Math.cos(K),z=Math.sin(K);P.x=S*z,P.y=m*M,P.z=S*W,d.push(P.x,P.y,P.z),f.push(0,M,0),T.x=W*.5+.5,T.y=z*.5*M+.5,p.push(T.x,T.y),g++}for(let B=0;B<r;B++){const V=E+B,K=U+B;v===!0?h.push(K,K+1,V):h.push(K+1,K,V),R+=3}c.addGroup(u,R,v===!0?1:2),u+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ir(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const ps=new L,ms=new L,Ca=new L,gs=new rn;class zu extends we{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const r=Math.pow(10,4),s=Math.cos($i*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:y,b:m,c:u}=gs;if(y.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),gs.getNormal(Ca),d[0]=`${Math.round(y.x*r)},${Math.round(y.y*r)},${Math.round(y.z*r)}`,d[1]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,d[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let _=0;_<3;_++){const x=(_+1)%3,v=d[_],E=d[x],T=gs[h[_]],P=gs[h[x]],R=`${v}_${E}`,S=`${E}_${v}`;S in f&&f[S]?(Ca.dot(f[S].normal)<=s&&(p.push(T.x,T.y,T.z),p.push(P.x,P.y,P.z)),f[S]=null):R in f||(f[R]={index0:c[_],index1:c[x],normal:Ca.clone()})}}for(const g in f)if(f[g]){const{index0:y,index1:m}=f[g];ps.fromBufferAttribute(o,y),ms.fromBufferAttribute(o,m),p.push(ps.x,ps.y,ps.z),p.push(ms.x,ms.y,ms.z)}this.setAttribute("position",new ge(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class vn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const h=n[r],f=n[r+1]-h,p=(a-h)/f;return(r+p)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new lt:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){const n=new L,r=[],s=[],a=[],o=new L,l=new se;for(let p=0;p<=t;p++){const g=p/t;r[p]=this.getTangentAt(g,new L)}s[0]=new L,a[0]=new L;let c=Number.MAX_VALUE;const h=Math.abs(r[0].x),d=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(e===!0){let p=Math.acos(Kt(s[0].dot(s[t]),-1,1));p/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(p=-p);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class fl extends vn{constructor(t=0,e=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){const n=e,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+t*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*d+this.aX,c=f*d+p*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Xd extends fl{constructor(t,e,n,r,s,a){super(t,e,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let f=(a-s)/c-(o-s)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,p*=h,r(a,o,f,p)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const _s=new L,Ra=new pl,Pa=new pl,Da=new pl;class qd extends vn{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new L){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(_s.subVectors(r[0],r[1]).add(r[0]),c=_s);const d=r[o%s],f=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(_s.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=_s),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Ra.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,y,m),Pa.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,y,m),Da.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(Ra.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Pa.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Da.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(Ra.calc(l),Pa.calc(l),Da.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new L().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function hc(i,t,e,n,r){const s=(n-t)*.5,a=(r-e)*.5,o=i*i,l=i*o;return(2*e-2*n+s+a)*l+(-3*e+3*n-2*s-a)*o+s*i+e}function Yd(i,t){const e=1-i;return e*e*t}function $d(i,t){return 2*(1-i)*i*t}function jd(i,t){return i*i*t}function Sr(i,t,e,n){return Yd(i,t)+$d(i,e)+jd(i,n)}function Zd(i,t){const e=1-i;return e*e*e*t}function Kd(i,t){const e=1-i;return 3*e*e*i*t}function Jd(i,t){return 3*(1-i)*i*i*t}function Qd(i,t){return i*i*i*t}function Er(i,t,e,n,r){return Zd(i,t)+Kd(i,e)+Jd(i,n)+Qd(i,r)}class $s extends vn{constructor(t=new lt,e=new lt,n=new lt,r=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,r.x,s.x,a.x,o.x),Er(t,r.y,s.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class tf extends vn{constructor(t=new L,e=new L,n=new L,r=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=r}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(Er(t,r.x,s.x,a.x,o.x),Er(t,r.y,s.y,a.y,o.y),Er(t,r.z,s.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class ku extends vn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ef extends vn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hu extends vn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(t,r.x,s.x,a.x),Sr(t,r.y,s.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nf extends vn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,r=this.v0,s=this.v1,a=this.v2;return n.set(Sr(t,r.x,s.x,a.x),Sr(t,r.y,s.y,a.y),Sr(t,r.z,s.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Vu extends vn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,r=this.points,s=(r.length-1)*t,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(hc(o,l.x,c.x,h.x,d.x),hc(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new lt().fromArray(r))}return this}}var Oo=Object.freeze({__proto__:null,ArcCurve:Xd,CatmullRomCurve3:qd,CubicBezierCurve:$s,CubicBezierCurve3:tf,EllipseCurve:fl,LineCurve:ku,LineCurve3:ef,QuadraticBezierCurve:Hu,QuadraticBezierCurve3:nf,SplineCurve:Vu});class rf extends vn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,r=this.curves.length;n<r;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const r=t.curves[e];this.curves.push(new Oo[r.type]().fromJSON(r))}return this}}class Bo extends rf{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new ku(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,r){const s=new Hu(this.currentPoint.clone(),new lt(t,e),new lt(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(t,e,n,r,s,a){const o=new $s(this.currentPoint.clone(),new lt(t,e),new lt(n,r),new lt(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Vu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,r,s,a),this}absarc(t,e,n,r,s,a){return this.absellipse(t,e,n,n,r,s,a),this}ellipse(t,e,n,r,s,a,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,r,s,a,o,l),this}absellipse(t,e,n,r,s,a,o,l){const c=new fl(t,e,n,r,s,a,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Jn extends Bo{constructor(t){super(t),this.uuid=wn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,r=this.holes.length;n<r;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const r=this.holes[e];t.holes.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const r=t.holes[e];this.holes.push(new Bo().fromJSON(r))}return this}}function sf(i,t,e=2){const n=t&&t.length,r=n?t[0]*e:i.length;let s=Gu(i,0,r,e,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c;if(n&&(s=uf(i,t,s,e)),i.length>80*e){o=1/0,l=1/0;let h=-1/0,d=-1/0;for(let f=e;f<r;f+=e){const p=i[f],g=i[f+1];p<o&&(o=p),g<l&&(l=g),p>h&&(h=p),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ur(s,a,e,o,l,c,0),a}function Gu(i,t,e,n,r){let s;if(r===bf(i,t,e,n)>0)for(let a=t;a<e;a+=n)s=dc(a/n|0,i[a],i[a+1],s);else for(let a=e-n;a>=t;a-=n)s=dc(a/n|0,i[a],i[a+1],s);return s&&ir(s,s.next)&&(Fr(s),s=s.next),s}function mi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ir(e,e.next)||ye(e.prev,e,e.next)===0)){if(Fr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(i,t,e,n,r,s,a){if(!i)return;!a&&s&&mf(i,n,r,s);let o=i;for(;i.prev!==i.next;){const l=i.prev,c=i.next;if(s?of(i,n,r,s):af(i)){t.push(l.i,i.i,c.i),Fr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=lf(mi(i),t),Ur(i,t,e,n,r,s,2)):a===2&&cf(i,t,e,n,r,s):Ur(mi(i),t,e,n,r,s,1);break}}}function af(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const r=t.x,s=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(r,s,a),d=Math.min(o,l,c),f=Math.max(r,s,a),p=Math.max(o,l,c);let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=d&&g.y<=p&&yr(r,o,s,l,a,c,g.x,g.y)&&ye(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function of(i,t,e,n){const r=i.prev,s=i,a=i.next;if(ye(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,f=a.y,p=Math.min(o,l,c),g=Math.min(h,d,f),y=Math.max(o,l,c),m=Math.max(h,d,f),u=zo(p,g,t,e,n),_=zo(y,m,t,e,n);let x=i.prevZ,v=i.nextZ;for(;x&&x.z>=u&&v&&v.z<=_;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&yr(o,h,l,d,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&yr(o,h,l,d,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=u;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==a&&yr(o,h,l,d,c,f,x.x,x.y)&&ye(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=_;){if(v.x>=p&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&yr(o,h,l,d,c,f,v.x,v.y)&&ye(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function lf(i,t){let e=i;do{const n=e.prev,r=e.next.next;!ir(n,r)&&Xu(n,e,e.next,r)&&Nr(n,r)&&Nr(r,n)&&(t.push(n.i,e.i,r.i),Fr(e),Fr(e.next),e=i=r),e=e.next}while(e!==i);return mi(e)}function cf(i,t,e,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&vf(a,o)){let l=qu(a,o);a=mi(a,a.next),l=mi(l,l.next),Ur(a,t,e,n,r,s,0),Ur(l,t,e,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function uf(i,t,e,n){const r=[];for(let s=0,a=t.length;s<a;s++){const o=t[s]*n,l=s<a-1?t[s+1]*n:i.length,c=Gu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),r.push(_f(c))}r.sort(hf);for(let s=0;s<r.length;s++)e=df(r[s],e);return e}function hf(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){const n=(i.next.y-i.y)/(i.next.x-i.x),r=(t.next.y-t.y)/(t.next.x-t.x);e=n-r}return e}function df(i,t){const e=ff(i,t);if(!e)return t;const n=qu(e,i);return mi(n,n.next),mi(e,e.next)}function ff(i,t){let e=t;const n=i.x,r=i.y;let s=-1/0,a;if(ir(i,e))return e;do{if(ir(i,e.next))return e.next;if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>s&&(s=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;const o=a,l=a.x,c=a.y;let h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Wu(r<c?n:s,r,l,c,r<c?s:n,r,e.x,e.y)){const d=Math.abs(r-e.y)/(n-e.x);Nr(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&pf(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function pf(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function mf(i,t,e,n){let r=i;do r.z===0&&(r.z=zo(r.x,r.y,t,e,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,gf(r)}function gf(i){let t,e=1;do{let n=i,r;i=null;let s=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(r=n,n=n.nextZ,o--):(r=a,a=a.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;n=a}s.nextZ=null,e*=2}while(t>1);return i}function zo(i,t,e,n,r){return i=(i-e)*r|0,t=(t-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function _f(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Wu(i,t,e,n,r,s,a,o){return(r-a)*(t-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(s-o)>=(r-a)*(n-o)}function yr(i,t,e,n,r,s,a,o){return!(i===a&&t===o)&&Wu(i,t,e,n,r,s,a,o)}function vf(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!xf(i,t)&&(Nr(i,t)&&Nr(t,i)&&yf(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||ir(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ir(i,t){return i.x===t.x&&i.y===t.y}function Xu(i,t,e,n){const r=xs(ye(i,t,e)),s=xs(ye(i,t,n)),a=xs(ye(e,n,i)),o=xs(ye(e,n,t));return!!(r!==s&&a!==o||r===0&&vs(i,e,t)||s===0&&vs(i,n,t)||a===0&&vs(e,i,n)||o===0&&vs(e,t,n))}function vs(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xs(i){return i>0?1:i<0?-1:0}function xf(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Nr(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function yf(i,t){let e=i,n=!1;const r=(i.x+t.x)/2,s=(i.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&r<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function qu(i,t){const e=ko(i.i,i.x,i.y),n=ko(t.i,t.x,t.y),r=i.next,s=t.prev;return i.next=t,t.prev=i,e.next=r,r.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function dc(i,t,e,n){const r=ko(i,t,e);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function Fr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ko(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function bf(i,t,e,n){let r=0;for(let s=t,a=e-n;s<e;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Mf{static triangulate(t,e,n=2){return sf(t,e,n)}}class Fn{static area(t){const e=t.length;let n=0;for(let r=e-1,s=0;s<e;r=s++)n+=t[r].x*t[s].y-t[s].x*t[r].y;return n*.5}static isClockWise(t){return Fn.area(t)<0}static triangulateShape(t,e){const n=[],r=[],s=[];fc(t),pc(n,t);let a=t.length;e.forEach(fc);for(let l=0;l<e.length;l++)r.push(a),a+=e[l].length,pc(n,e[l]);const o=Mf.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function fc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Zi extends we{constructor(t=new Jn([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,r=[],s=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a(c)}this.setAttribute("position",new ge(r,3)),this.setAttribute("uv",new ge(s,2)),this.computeVertexNormals();function a(o){const l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,y=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const u=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:Sf;let x,v=!1,E,T,P,R;u&&(x=u.getSpacedPoints(h),v=!0,f=!1,E=u.computeFrenetFrames(h,!1),T=new L,P=new L,R=new L),f||(m=0,p=0,g=0,y=0);const S=o.extractPoints(c);let M=S.shape;const U=S.holes;if(!Fn.isClockWise(M)){M=M.reverse();for(let nt=0,Q=U.length;nt<Q;nt++){const tt=U[nt];Fn.isClockWise(tt)&&(U[nt]=tt.reverse())}}function V(nt){const tt=10000000000000001e-36;let rt=nt[0];for(let ht=1;ht<=nt.length;ht++){const gt=ht%nt.length,wt=nt[gt],Vt=wt.x-rt.x,kt=wt.y-rt.y,A=Vt*Vt+kt*kt,b=Math.max(Math.abs(wt.x),Math.abs(wt.y),Math.abs(rt.x),Math.abs(rt.y)),q=tt*b*b;if(A<=q){nt.splice(gt,1),ht--;continue}rt=wt}}V(M),U.forEach(V);const K=U.length,W=M;for(let nt=0;nt<K;nt++){const Q=U[nt];M=M.concat(Q)}function z(nt,Q,tt){return Q||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(Q,tt)}const J=M.length;function j(nt,Q,tt){let rt,ht,gt;const wt=nt.x-Q.x,Vt=nt.y-Q.y,kt=tt.x-nt.x,A=tt.y-nt.y,b=wt*wt+Vt*Vt,q=wt*A-Vt*kt;if(Math.abs(q)>Number.EPSILON){const it=Math.sqrt(b),_t=Math.sqrt(kt*kt+A*A),at=Q.x-Vt/it,Ot=Q.y+wt/it,Tt=tt.x-A/_t,Ft=tt.y+kt/_t,Lt=((Tt-at)*A-(Ft-Ot)*kt)/(wt*A-Vt*kt);rt=at+wt*Lt-nt.x,ht=Ot+Vt*Lt-nt.y;const xt=rt*rt+ht*ht;if(xt<=2)return new lt(rt,ht);gt=Math.sqrt(xt/2)}else{let it=!1;wt>Number.EPSILON?kt>Number.EPSILON&&(it=!0):wt<-Number.EPSILON?kt<-Number.EPSILON&&(it=!0):Math.sign(Vt)===Math.sign(A)&&(it=!0),it?(rt=-Vt,ht=wt,gt=Math.sqrt(b)):(rt=wt,ht=Vt,gt=Math.sqrt(b/2))}return new lt(rt/gt,ht/gt)}const ot=[];for(let nt=0,Q=W.length,tt=Q-1,rt=nt+1;nt<Q;nt++,tt++,rt++)tt===Q&&(tt=0),rt===Q&&(rt=0),ot[nt]=j(W[nt],W[tt],W[rt]);const yt=[];let Rt,zt=ot.concat();for(let nt=0,Q=K;nt<Q;nt++){const tt=U[nt];Rt=[];for(let rt=0,ht=tt.length,gt=ht-1,wt=rt+1;rt<ht;rt++,gt++,wt++)gt===ht&&(gt=0),wt===ht&&(wt=0),Rt[rt]=j(tt[rt],tt[gt],tt[wt]);yt.push(Rt),zt=zt.concat(Rt)}let Z;if(m===0)Z=Fn.triangulateShape(W,U);else{const nt=[],Q=[];for(let tt=0;tt<m;tt++){const rt=tt/m,ht=p*Math.cos(rt*Math.PI/2),gt=g*Math.sin(rt*Math.PI/2)+y;for(let wt=0,Vt=W.length;wt<Vt;wt++){const kt=z(W[wt],ot[wt],gt);pt(kt.x,kt.y,-ht),rt===0&&nt.push(kt)}for(let wt=0,Vt=K;wt<Vt;wt++){const kt=U[wt];Rt=yt[wt];const A=[];for(let b=0,q=kt.length;b<q;b++){const it=z(kt[b],Rt[b],gt);pt(it.x,it.y,-ht),rt===0&&A.push(it)}rt===0&&Q.push(A)}}Z=Fn.triangulateShape(nt,Q)}const ut=Z.length,dt=g+y;for(let nt=0;nt<J;nt++){const Q=f?z(M[nt],zt[nt],dt):M[nt];v?(P.copy(E.normals[0]).multiplyScalar(Q.x),T.copy(E.binormals[0]).multiplyScalar(Q.y),R.copy(x[0]).add(P).add(T),pt(R.x,R.y,R.z)):pt(Q.x,Q.y,0)}for(let nt=1;nt<=h;nt++)for(let Q=0;Q<J;Q++){const tt=f?z(M[Q],zt[Q],dt):M[Q];v?(P.copy(E.normals[nt]).multiplyScalar(tt.x),T.copy(E.binormals[nt]).multiplyScalar(tt.y),R.copy(x[nt]).add(P).add(T),pt(R.x,R.y,R.z)):pt(tt.x,tt.y,d/h*nt)}for(let nt=m-1;nt>=0;nt--){const Q=nt/m,tt=p*Math.cos(Q*Math.PI/2),rt=g*Math.sin(Q*Math.PI/2)+y;for(let ht=0,gt=W.length;ht<gt;ht++){const wt=z(W[ht],ot[ht],rt);pt(wt.x,wt.y,d+tt)}for(let ht=0,gt=U.length;ht<gt;ht++){const wt=U[ht];Rt=yt[ht];for(let Vt=0,kt=wt.length;Vt<kt;Vt++){const A=z(wt[Vt],Rt[Vt],rt);v?pt(A.x,A.y+x[h-1].y,x[h-1].x+tt):pt(A.x,A.y,d+tt)}}}k(),X();function k(){const nt=r.length/3;if(f){let Q=0,tt=J*Q;for(let rt=0;rt<ut;rt++){const ht=Z[rt];mt(ht[2]+tt,ht[1]+tt,ht[0]+tt)}Q=h+m*2,tt=J*Q;for(let rt=0;rt<ut;rt++){const ht=Z[rt];mt(ht[0]+tt,ht[1]+tt,ht[2]+tt)}}else{for(let Q=0;Q<ut;Q++){const tt=Z[Q];mt(tt[2],tt[1],tt[0])}for(let Q=0;Q<ut;Q++){const tt=Z[Q];mt(tt[0]+J*h,tt[1]+J*h,tt[2]+J*h)}}n.addGroup(nt,r.length/3-nt,0)}function X(){const nt=r.length/3;let Q=0;ct(W,Q),Q+=W.length;for(let tt=0,rt=U.length;tt<rt;tt++){const ht=U[tt];ct(ht,Q),Q+=ht.length}n.addGroup(nt,r.length/3-nt,1)}function ct(nt,Q){let tt=nt.length;for(;--tt>=0;){const rt=tt;let ht=tt-1;ht<0&&(ht=nt.length-1);for(let gt=0,wt=h+m*2;gt<wt;gt++){const Vt=J*gt,kt=J*(gt+1),A=Q+rt+Vt,b=Q+ht+Vt,q=Q+ht+kt,it=Q+rt+kt;Mt(A,b,q,it)}}}function pt(nt,Q,tt){l.push(nt),l.push(Q),l.push(tt)}function mt(nt,Q,tt){Nt(nt),Nt(Q),Nt(tt);const rt=r.length/3,ht=_.generateTopUV(n,r,rt-3,rt-2,rt-1);C(ht[0]),C(ht[1]),C(ht[2])}function Mt(nt,Q,tt,rt){Nt(nt),Nt(Q),Nt(rt),Nt(Q),Nt(tt),Nt(rt);const ht=r.length/3,gt=_.generateSideWallUV(n,r,ht-6,ht-3,ht-2,ht-1);C(gt[0]),C(gt[1]),C(gt[3]),C(gt[1]),C(gt[2]),C(gt[3])}function Nt(nt){r.push(l[nt*3+0]),r.push(l[nt*3+1]),r.push(l[nt*3+2])}function C(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ef(e,n,t)}static fromJSON(t,e){const n=[];for(let s=0,a=t.shapes.length;s<a;s++){const o=e[t.shapes[s]];n.push(o)}const r=t.options.extrudePath;return r!==void 0&&(t.options.extrudePath=new Oo[r.type]().fromJSON(r)),new Zi(n,t.options)}}const Sf={generateTopUV:function(i,t,e,n,r){const s=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[r*3],h=t[r*3+1];return[new lt(s,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,r,s){const a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],f=t[r*3],p=t[r*3+1],g=t[r*3+2],y=t[s*3],m=t[s*3+1],u=t[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-d),new lt(f,1-g),new lt(y,1-u)]:[new lt(o,1-l),new lt(h,1-d),new lt(p,1-g),new lt(m,1-u)]}};function Ef(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Qn extends we{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),c=o+1,h=l+1,d=t/o,f=e/l,p=[],g=[],y=[],m=[];for(let u=0;u<h;u++){const _=u*f-a;for(let x=0;x<c;x++){const v=x*d-s;g.push(v,-_,0),y.push(0,0,1),m.push(x/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<o;_++){const x=_+c*u,v=_+c*(u+1),E=_+1+c*(u+1),T=_+1+c*u;p.push(x,v,T),p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(y,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.widthSegments,t.heightSegments)}}class ml extends we{constructor(t=new Jn([new lt(0,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ge(r,3)),this.setAttribute("normal",new ge(s,3)),this.setAttribute("uv",new ge(a,2));function c(h){const d=r.length/3,f=h.extractPoints(e);let p=f.shape;const g=f.holes;Fn.isClockWise(p)===!1&&(p=p.reverse());for(let m=0,u=g.length;m<u;m++){const _=g[m];Fn.isClockWise(_)===!0&&(g[m]=_.reverse())}const y=Fn.triangulateShape(p,g);for(let m=0,u=g.length;m<u;m++){const _=g[m];p=p.concat(_)}for(let m=0,u=p.length;m<u;m++){const _=p[m];r.push(_.x,_.y,0),s.push(0,0,1),a.push(_.x,_.y)}for(let m=0,u=y.length;m<u;m++){const _=y[m],x=_[0]+d,v=_[1]+d,E=_[2]+d;n.push(x,v,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return wf(e,t)}static fromJSON(t,e){const n=[];for(let r=0,s=t.shapes.length;r<s;r++){const a=e[t.shapes[r]];n.push(a)}return new ml(n,t.curveSegments)}}function wf(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const r=i[e];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t}class js extends we{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],d=new L,f=new L,p=[],g=[],y=[],m=[];for(let u=0;u<=n;u++){const _=[],x=u/n;let v=0;u===0&&a===0?v=.5/e:u===n&&l===Math.PI&&(v=-.5/e);for(let E=0;E<=e;E++){const T=E/e;d.x=-t*Math.cos(r+T*s)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(r+T*s)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(T+v,1-x),_.push(c++)}h.push(_)}for(let u=0;u<n;u++)for(let _=0;_<e;_++){const x=h[u][_+1],v=h[u][_],E=h[u+1][_],T=h[u+1][_+1];(u!==0||a>0)&&p.push(x,v,T),(u!==n-1||l<Math.PI)&&p.push(v,E,T)}this.setIndex(p),this.setAttribute("position",new ge(g,3)),this.setAttribute("normal",new ge(y,3)),this.setAttribute("uv",new ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new js(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tf extends Cn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Gt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}}class Af extends He{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class _e extends Cn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cf extends _e{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Rf extends Cn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new an,this.combine=Zo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pf extends Cn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Df extends Cn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Zs extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Lf extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const La=new se,mc=new L,gc=new L;class Yu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Tn,this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new he(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),La.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(La,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(La)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const _c=new se,xr=new L,Ia=new L;class If extends Yu{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new he(2,1,1,1),new he(0,1,1,1),new he(3,1,1,1),new he(1,1,1,1),new he(3,0,1,1),new he(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,r=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),xr.setFromMatrixPosition(t.matrixWorld),n.position.copy(xr),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),r.makeTranslation(-xr.x,-xr.y,-xr.z),_c.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_c,n.coordinateSystem,n.reversedDepth)}}class Or extends Zs{constructor(t,e,n=0,r=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new If}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class gl extends Du{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Uf extends Yu{constructor(){super(new gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class $u extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new Uf}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Nf extends Zs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ff extends en{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Of{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=performance.now();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}const vc=new se;class _l{constructor(t,e,n=0,r=1/0){this.ray=new Br(t,e),this.near=n,this.far=r,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(vc),this}intersectObject(t,e=!0,n=[]){return Ho(t,this,n,e),n.sort(xc),n}intersectObjects(t,e=!0,n=[]){for(let r=0,s=t.length;r<s;r++)Ho(t[r],this,n,e);return n.sort(xc),n}}function xc(i,t){return i.distance-t.distance}function Ho(i,t,e,n){let r=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ho(s[a],t,e,!0)}}class yc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Kt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Kt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Bf extends Lr{constructor(t=10,e=10,n=4473924,r=8947848){n=new Gt(n),r=new Gt(r);const s=e/2,a=t/e,o=t/2,l=[],c=[];for(let f=0,p=0,g=-o;f<=e;f++,g+=a){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const y=f===s?n:r;y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3,y.toArray(c,p),p+=3}const h=new we;h.setAttribute("position",new ge(l,3)),h.setAttribute("color",new ge(c,3));const d=new nr({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class zf extends gi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function bc(i,t,e,n){const r=kf(n);switch(e){case bu:return i*t;case el:return i*t/r.components*r.byteLength;case nl:return i*t/r.components*r.byteLength;case Su:return i*t*2/r.components*r.byteLength;case il:return i*t*2/r.components*r.byteLength;case Mu:return i*t*3/r.components*r.byteLength;case gn:return i*t*4/r.components*r.byteLength;case rl:return i*t*4/r.components*r.byteLength;case Ps:case Ds:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ls:case Is:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oo:case co:return Math.max(i,16)*Math.max(t,8)/4;case ao:case lo:return Math.max(i,8)*Math.max(t,8)/2;case uo:case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case fo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case mo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case To:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ao:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Co:case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Do:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Io:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kf(i){switch(i){case Tn:case _u:return{byteLength:1,components:1};case wr:case vu:case Bn:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case pi:case Jo:case Sn:return{byteLength:4,components:1};case xu:case yu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=jo);function ju(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Hf(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const y=d[p];i.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Vf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$f=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Kf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ep=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,np=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,fp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vp="gl_FragColor = linearToOutputTexel( gl_FragColor );",xp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,bp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Sp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ep=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ap=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Lp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ip=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Up=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Np=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Op=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Kp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,em=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,im=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,rm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,am=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,um=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gm=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_m=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Em=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Tm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Dm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Lm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Im=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Um=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Om=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,km=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ym=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$m=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tg=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ng=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ig=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rg=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sg=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ag=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,og=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lg=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,cg=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ug=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hg=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dg=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fg=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pg=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mg=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_g=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vg=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,xg=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yg=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:Vf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:Xf,alphatest_fragment:qf,alphatest_pars_fragment:Yf,aomap_fragment:$f,aomap_pars_fragment:jf,batching_pars_vertex:Zf,batching_vertex:Kf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:tp,iridescence_fragment:ep,bumpmap_pars_fragment:np,clipping_planes_fragment:ip,clipping_planes_pars_fragment:rp,clipping_planes_pars_vertex:sp,clipping_planes_vertex:ap,color_fragment:op,color_pars_fragment:lp,color_pars_vertex:cp,color_vertex:up,common:hp,cube_uv_reflection_fragment:dp,defaultnormal_vertex:fp,displacementmap_pars_vertex:pp,displacementmap_vertex:mp,emissivemap_fragment:gp,emissivemap_pars_fragment:_p,colorspace_fragment:vp,colorspace_pars_fragment:xp,envmap_fragment:yp,envmap_common_pars_fragment:bp,envmap_pars_fragment:Mp,envmap_pars_vertex:Sp,envmap_physical_pars_fragment:Up,envmap_vertex:Ep,fog_vertex:wp,fog_pars_vertex:Tp,fog_fragment:Ap,fog_pars_fragment:Cp,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Pp,lights_lambert_fragment:Dp,lights_lambert_pars_fragment:Lp,lights_pars_begin:Ip,lights_toon_fragment:Np,lights_toon_pars_fragment:Fp,lights_phong_fragment:Op,lights_phong_pars_fragment:Bp,lights_physical_fragment:zp,lights_physical_pars_fragment:kp,lights_fragment_begin:Hp,lights_fragment_maps:Vp,lights_fragment_end:Gp,logdepthbuf_fragment:Wp,logdepthbuf_pars_fragment:Xp,logdepthbuf_pars_vertex:qp,logdepthbuf_vertex:Yp,map_fragment:$p,map_pars_fragment:jp,map_particle_fragment:Zp,map_particle_pars_fragment:Kp,metalnessmap_fragment:Jp,metalnessmap_pars_fragment:Qp,morphinstance_vertex:tm,morphcolor_vertex:em,morphnormal_vertex:nm,morphtarget_pars_vertex:im,morphtarget_vertex:rm,normal_fragment_begin:sm,normal_fragment_maps:am,normal_pars_fragment:om,normal_pars_vertex:lm,normal_vertex:cm,normalmap_pars_fragment:um,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:dm,clearcoat_pars_fragment:fm,iridescence_pars_fragment:pm,opaque_fragment:mm,packing:gm,premultiplied_alpha_fragment:_m,project_vertex:vm,dithering_fragment:xm,dithering_pars_fragment:ym,roughnessmap_fragment:bm,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:Sm,shadowmap_pars_vertex:Em,shadowmap_vertex:wm,shadowmask_pars_fragment:Tm,skinbase_vertex:Am,skinning_pars_vertex:Cm,skinning_vertex:Rm,skinnormal_vertex:Pm,specularmap_fragment:Dm,specularmap_pars_fragment:Lm,tonemapping_fragment:Im,tonemapping_pars_fragment:Um,transmission_fragment:Nm,transmission_pars_fragment:Fm,uv_pars_fragment:Om,uv_pars_vertex:Bm,uv_vertex:zm,worldpos_vertex:km,background_vert:Hm,background_frag:Vm,backgroundCube_vert:Gm,backgroundCube_frag:Wm,cube_vert:Xm,cube_frag:qm,depth_vert:Ym,depth_frag:$m,distanceRGBA_vert:jm,distanceRGBA_frag:Zm,equirect_vert:Km,equirect_frag:Jm,linedashed_vert:Qm,linedashed_frag:tg,meshbasic_vert:eg,meshbasic_frag:ng,meshlambert_vert:ig,meshlambert_frag:rg,meshmatcap_vert:sg,meshmatcap_frag:ag,meshnormal_vert:og,meshnormal_frag:lg,meshphong_vert:cg,meshphong_frag:ug,meshphysical_vert:hg,meshphysical_frag:dg,meshtoon_vert:fg,meshtoon_frag:pg,points_vert:mg,points_frag:gg,shadow_vert:_g,shadow_frag:vg,sprite_vert:xg,sprite_frag:yg},Dt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},bn={basic:{uniforms:ke([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:ke([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:ke([Dt.common,Dt.specularmap,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,Dt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:ke([Dt.common,Dt.envmap,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.roughnessmap,Dt.metalnessmap,Dt.fog,Dt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:ke([Dt.common,Dt.aomap,Dt.lightmap,Dt.emissivemap,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.gradientmap,Dt.fog,Dt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:ke([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,Dt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:ke([Dt.points,Dt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:ke([Dt.common,Dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:ke([Dt.common,Dt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:ke([Dt.common,Dt.bumpmap,Dt.normalmap,Dt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:ke([Dt.sprite,Dt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:ke([Dt.common,Dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:ke([Dt.lights,Dt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};bn.physical={uniforms:ke([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const ys={r:0,b:0,g:0},si=new an,bg=new se;function Mg(i,t,e,n,r,s,a){const o=new Gt(0);let l=s===!0?0:1,c,h,d=null,f=0,p=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?e:t).get(v)),v}function y(x){let v=!1;const E=g(x);E===null?u(o,l):E&&E.isColor&&(u(E,1),v=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,v){const E=g(v);E&&(E.isCubeTexture||E.mapping===qs)?(h===void 0&&(h=new ee(new hn(1,1,1),new He({name:"BackgroundCubeMaterial",uniforms:er(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,P,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),si.copy(v.backgroundRotation),si.x*=-1,si.y*=-1,si.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(si.y*=-1,si.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(bg.makeRotationFromEuler(si)),h.material.toneMapped=ie.getTransfer(E.colorSpace)!==oe,(d!==E||f!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=E,f=E.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new ee(new Qn(2,2),new He({name:"BackgroundMaterial",uniforms:er(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=ie.getTransfer(E.colorSpace)!==oe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||f!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=E,f=E.version,p=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function u(x,v){x.getRGB(ys,Pu(i)),n.buffers.color.setClear(ys.r,ys.g,ys.b,v,a)}function _(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(x,v=1){o.set(x),l=v,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,u(o,l)},render:y,addToRenderList:m,dispose:_}}function Sg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null);let s=r,a=!1;function o(M,U,B,V,K){let W=!1;const z=d(V,B,U);s!==z&&(s=z,c(s.object)),W=p(M,V,B,K),W&&g(M,V,B,K),K!==null&&t.update(K,i.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,v(M,U,B,V),K!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(K).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function d(M,U,B){const V=B.wireframe===!0;let K=n[M.id];K===void 0&&(K={},n[M.id]=K);let W=K[U.id];W===void 0&&(W={},K[U.id]=W);let z=W[V];return z===void 0&&(z=f(l()),W[V]=z),z}function f(M){const U=[],B=[],V=[];for(let K=0;K<e;K++)U[K]=0,B[K]=0,V[K]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:B,attributeDivisors:V,object:M,attributes:{},index:null}}function p(M,U,B,V){const K=s.attributes,W=U.attributes;let z=0;const J=B.getAttributes();for(const j in J)if(J[j].location>=0){const yt=K[j];let Rt=W[j];if(Rt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(Rt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(Rt=M.instanceColor)),yt===void 0||yt.attribute!==Rt||Rt&&yt.data!==Rt.data)return!0;z++}return s.attributesNum!==z||s.index!==V}function g(M,U,B,V){const K={},W=U.attributes;let z=0;const J=B.getAttributes();for(const j in J)if(J[j].location>=0){let yt=W[j];yt===void 0&&(j==="instanceMatrix"&&M.instanceMatrix&&(yt=M.instanceMatrix),j==="instanceColor"&&M.instanceColor&&(yt=M.instanceColor));const Rt={};Rt.attribute=yt,yt&&yt.data&&(Rt.data=yt.data),K[j]=Rt,z++}s.attributes=K,s.attributesNum=z,s.index=V}function y(){const M=s.newAttributes;for(let U=0,B=M.length;U<B;U++)M[U]=0}function m(M){u(M,0)}function u(M,U){const B=s.newAttributes,V=s.enabledAttributes,K=s.attributeDivisors;B[M]=1,V[M]===0&&(i.enableVertexAttribArray(M),V[M]=1),K[M]!==U&&(i.vertexAttribDivisor(M,U),K[M]=U)}function _(){const M=s.newAttributes,U=s.enabledAttributes;for(let B=0,V=U.length;B<V;B++)U[B]!==M[B]&&(i.disableVertexAttribArray(B),U[B]=0)}function x(M,U,B,V,K,W,z){z===!0?i.vertexAttribIPointer(M,U,B,K,W):i.vertexAttribPointer(M,U,B,V,K,W)}function v(M,U,B,V){y();const K=V.attributes,W=B.getAttributes(),z=U.defaultAttributeValues;for(const J in W){const j=W[J];if(j.location>=0){let ot=K[J];if(ot===void 0&&(J==="instanceMatrix"&&M.instanceMatrix&&(ot=M.instanceMatrix),J==="instanceColor"&&M.instanceColor&&(ot=M.instanceColor)),ot!==void 0){const yt=ot.normalized,Rt=ot.itemSize,zt=t.get(ot);if(zt===void 0)continue;const Z=zt.buffer,ut=zt.type,dt=zt.bytesPerElement,k=ut===i.INT||ut===i.UNSIGNED_INT||ot.gpuType===Jo;if(ot.isInterleavedBufferAttribute){const X=ot.data,ct=X.stride,pt=ot.offset;if(X.isInstancedInterleavedBuffer){for(let mt=0;mt<j.locationSize;mt++)u(j.location+mt,X.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let mt=0;mt<j.locationSize;mt++)m(j.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let mt=0;mt<j.locationSize;mt++)x(j.location+mt,Rt/j.locationSize,ut,yt,ct*dt,(pt+Rt/j.locationSize*mt)*dt,k)}else{if(ot.isInstancedBufferAttribute){for(let X=0;X<j.locationSize;X++)u(j.location+X,ot.meshPerAttribute);M.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let X=0;X<j.locationSize;X++)m(j.location+X);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let X=0;X<j.locationSize;X++)x(j.location+X,Rt/j.locationSize,ut,yt,Rt*dt,Rt/j.locationSize*X*dt,k)}}else if(z!==void 0){const yt=z[J];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv(j.location,yt);break;case 3:i.vertexAttrib3fv(j.location,yt);break;case 4:i.vertexAttrib4fv(j.location,yt);break;default:i.vertexAttrib1fv(j.location,yt)}}}}_()}function E(){R();for(const M in n){const U=n[M];for(const B in U){const V=U[B];for(const K in V)h(V[K].object),delete V[K];delete U[B]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const U=n[M.id];for(const B in U){const V=U[B];for(const K in V)h(V[K].object),delete V[K];delete U[B]}delete n[M.id]}function P(M){for(const U in n){const B=n[U];if(B[M.id]===void 0)continue;const V=B[M.id];for(const K in V)h(V[K].object),delete V[K];delete B[M.id]}}function R(){S(),a=!0,s!==r&&(s=r,c(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:R,resetDefaultState:S,dispose:E,releaseStatesOfGeometry:T,releaseStatesOfProgram:P,initAttributes:y,enableAttribute:m,disableUnusedAttributes:_}}function Eg(i,t,e){let n;function r(c){n=c}function s(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function l(c,h,d,f){if(d===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*f[y];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function wg(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==gn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const R=P===Bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Tn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==Sn&&!R)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:E,maxSamples:T}}function Tg(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new $n,o=new Zt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||n!==0||r;return r=f,n=d.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,x=_*4;let v=u.clippingState||null;l.value=v,v=h(g,f,x,p);for(let E=0;E!==x;++E)v[E]=e[E];u.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){const y=d!==null?d.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const u=p+y*4,_=f.matrixWorldInverse;o.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,v=p;x!==y;++x,v+=4)a.copy(d[x]).applyMatrix4(_,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function Ag(i){let t=new WeakMap;function e(a,o){return o===io?a.mapping=Ji:o===ro&&(a.mapping=Qi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===io||o===ro)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Nd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",r),e(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const Wi=4,Mc=[.125,.215,.35,.446,.526,.582],ui=20,Ua=new gl,Sc=new Gt;let Na=null,Fa=0,Oa=0,Ba=!1;const li=(1+Math.sqrt(5))/2,zi=1/li,Ec=[new L(-li,zi,0),new L(li,zi,0),new L(-zi,0,li),new L(zi,0,li),new L(0,li,-zi),new L(0,li,zi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Cg=new L;class Vo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:a=256,position:o=Cg}=s;Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,r,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ac(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Tc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Fa,Oa),this._renderer.xr.enabled=Ba,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ji||t.mapping===Qi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Fa=this._renderer.getActiveCubeFace(),Oa=this._renderer.getActiveMipmapLevel(),Ba=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:Bn,format:gn,colorSpace:tr,depthBuffer:!1},r=wc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rg(s)),this._blurMaterial=Pg(s,t,e)}return r}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,r,s){const l=new en(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Sc),d.toneMapping=Zn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null));const y=new sr({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),m=new ee(new hn,y);let u=!1;const _=t.background;_?_.isColor&&(y.color.copy(_),t.background=null,u=!0):(y.color.copy(Sc),u=!0);for(let x=0;x<6;x++){const v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));const E=this._cubeSize;bs(r,v*E,x>2?E:0,E,E),d.setRenderTarget(r),u&&d.render(m,l),d.render(t,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=_}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===Ji||t.mapping===Qi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ac()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Tc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new ee(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;bs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Ec[(r-s-1)%Ec.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new ee(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ui-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):ui;m>ui&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ui}`);const u=[];let _=0;for(let P=0;P<ui;++P){const R=P/y,S=Math.exp(-R*R/2);u.push(S),P===0?_+=S:P<m&&(_+=2*S)}for(let P=0;P<u.length;P++)u[P]=u[P]/_;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const v=this._sizeLods[r],E=3*v*(r>x-Wi?r-x+Wi:0),T=4*(this._cubeSize-v);bs(e,E,T,3*v,2*v),l.setRenderTarget(e),l.render(d,Ua)}}function Rg(i){const t=[],e=[],n=[];let r=i;const s=i-Wi+1+Mc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-Wi?l=Mc[a-i+Wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,m=2,u=1,_=new Float32Array(y*g*p),x=new Float32Array(m*g*p),v=new Float32Array(u*g*p);for(let T=0;T<p;T++){const P=T%3*2/3-1,R=T>2?0:-1,S=[P,R,0,P+2/3,R,0,P+2/3,R+1,0,P,R,0,P+2/3,R+1,0,P,R+1,0];_.set(S,y*g*T),x.set(f,m*g*T);const M=[T,T,T,T,T,T];v.set(M,u*g*T)}const E=new we;E.setAttribute("position",new je(_,y)),E.setAttribute("uv",new je(x,m)),E.setAttribute("faceIndex",new je(v,u)),t.push(E),r>Wi&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function wc(i,t,e){const n=new _n(i,t,e);return n.texture.mapping=qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Pg(i,t,e){const n=new Float32Array(ui),r=new L(0,1,0);return new He({name:"SphericalGaussianBlur",defines:{n:ui,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Tc(){return new He({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ac(){return new He({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Dg(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===io||l===ro,h=l===Ji||l===Qi;if(c||h){let d=t.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Vo(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&r(p)?(e===null&&(e=new Vo(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Lg(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Pr("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Ig(i,t,e,n){const r={},s=new WeakMap;function a(d){const f=d.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(t.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(d,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,e.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)t.update(f[p],i.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let y=0;if(p!==null){const _=p.array;y=p.version;for(let x=0,v=_.length;x<v;x+=3){const E=_[x+0],T=_[x+1],P=_[x+2];f.push(E,T,T,P,P,E)}}else if(g!==void 0){const _=g.array;y=g.version;for(let x=0,v=_.length/3-1;x<v;x+=3){const E=x+0,T=x+1,P=x+2;f.push(E,T,T,P,P,E)}}else return;const m=new(wu(f)?Ru:Cu)(f,1);m.version=y;const u=s.get(d);u&&t.remove(u),s.set(d,m)}function h(d){const f=s.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Ug(i,t,e){let n;function r(f){n=f}let s,a;function o(f){s=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,s,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,y){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/a,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,f,0,y,0,g);let u=0;for(let _=0;_<g;_++)u+=p[_]*y[_];e.update(u,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Ng(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function Fg(i,t,e){const n=new WeakMap,r=new he;function s(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==d){let M=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var p=M;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],_=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),y===!0&&(v=2),m===!0&&(v=3);let E=o.attributes.position.count*v,T=1;E>t.maxTextureSize&&(T=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const P=new Float32Array(E*T*4*d),R=new Tu(P,E,T,d);R.type=Sn,R.needsUpdate=!0;const S=v*4;for(let U=0;U<d;U++){const B=u[U],V=_[U],K=x[U],W=E*T*4*U;for(let z=0;z<B.count;z++){const J=z*S;g===!0&&(r.fromBufferAttribute(B,z),P[W+J+0]=r.x,P[W+J+1]=r.y,P[W+J+2]=r.z,P[W+J+3]=0),y===!0&&(r.fromBufferAttribute(V,z),P[W+J+4]=r.x,P[W+J+5]=r.y,P[W+J+6]=r.z,P[W+J+7]=0),m===!0&&(r.fromBufferAttribute(K,z),P[W+J+8]=r.x,P[W+J+9]=r.y,P[W+J+10]=r.z,P[W+J+11]=K.itemSize===4?r.w:1)}}f={count:d,texture:R,size:new lt(E,T)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const y=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",y),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function Og(i,t,e,n){let r=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==c&&(t.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:a}}const Zu=new Oe,Cc=new Ou(1,1),Ku=new Tu,Ju=new xd,Qu=new Lu,Rc=[],Pc=[],Dc=new Float32Array(16),Lc=new Float32Array(9),Ic=new Float32Array(4);function ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=Rc[r];if(s===void 0&&(s=new Float32Array(r),Rc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function Ae(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=Pc[t];e===void 0&&(e=new Int32Array(t),Pc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ae(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function Hg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function Vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Ic.set(n),i.uniformMatrix2fv(this.addr,!1,Ic),Ce(e,n)}}function Gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Lc.set(n),i.uniformMatrix3fv(this.addr,!1,Lc),Ce(e,n)}}function Wg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ae(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Ae(e,n))return;Dc.set(n),i.uniformMatrix4fv(this.addr,!1,Dc),Ce(e,n)}}function Xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function qg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function Yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function $g(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function jg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Zg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ae(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function Kg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ae(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function Jg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ae(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Qg(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Cc.compareFunction=Eu,s=Cc):s=Zu,e.setTexture2D(t||s,r)}function t0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||Ju,r)}function e0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||Qu,r)}function n0(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||Ku,r)}function i0(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return kg;case 35666:return Hg;case 35674:return Vg;case 35675:return Gg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return $g;case 5125:return jg;case 36294:return Zg;case 36295:return Kg;case 36296:return Jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return t0;case 35680:case 36300:case 36308:case 36293:return e0;case 36289:case 36303:case 36311:case 36292:return n0}}function r0(i,t){i.uniform1fv(this.addr,t)}function s0(i,t){const e=ar(t,this.size,2);i.uniform2fv(this.addr,e)}function a0(i,t){const e=ar(t,this.size,3);i.uniform3fv(this.addr,e)}function o0(i,t){const e=ar(t,this.size,4);i.uniform4fv(this.addr,e)}function l0(i,t){const e=ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function c0(i,t){const e=ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function u0(i,t){const e=ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function h0(i,t){i.uniform1iv(this.addr,t)}function d0(i,t){i.uniform2iv(this.addr,t)}function f0(i,t){i.uniform3iv(this.addr,t)}function p0(i,t){i.uniform4iv(this.addr,t)}function m0(i,t){i.uniform1uiv(this.addr,t)}function g0(i,t){i.uniform2uiv(this.addr,t)}function _0(i,t){i.uniform3uiv(this.addr,t)}function v0(i,t){i.uniform4uiv(this.addr,t)}function x0(i,t,e){const n=this.cache,r=t.length,s=Ks(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||Zu,s[a])}function y0(i,t,e){const n=this.cache,r=t.length,s=Ks(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||Ju,s[a])}function b0(i,t,e){const n=this.cache,r=t.length,s=Ks(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||Qu,s[a])}function M0(i,t,e){const n=this.cache,r=t.length,s=Ks(e,r);Ae(n,s)||(i.uniform1iv(this.addr,s),Ce(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||Ku,s[a])}function S0(i){switch(i){case 5126:return r0;case 35664:return s0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return u0;case 5124:case 35670:return h0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return _0;case 36296:return v0;case 35678:case 36198:case 36298:case 36306:case 35682:return x0;case 35679:case 36299:case 36307:return y0;case 35680:case 36300:case 36308:case 36293:return b0;case 36289:case 36303:case 36311:case 36292:return M0}}class E0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=i0(e.type)}}class w0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=S0(e.type)}}class T0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const za=/(\w+)(\])?(\[|\.)?/g;function Uc(i,t){i.seq.push(t),i.map[t.id]=t}function A0(i,t,e){const n=i.name,r=n.length;for(za.lastIndex=0;;){const s=za.exec(n),a=za.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Uc(e,c===void 0?new E0(o,i,t):new w0(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new T0(o),Uc(e,d)),e=d}}}class Us{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);A0(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function Nc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const C0=37297;let R0=0;function P0(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Fc=new Zt;function D0(i){ie._getMatrix(Fc,ie.workingColorSpace,i);const t=`mat3( ${Fc.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+P0(i.getShaderSource(t),o)}else return s}function L0(i,t){const e=D0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function I0(i,t){let e;switch(t){case uu:e="Linear";break;case hu:e="Reinhard";break;case du:e="Cineon";break;case Ko:e="ACESFilmic";break;case pu:e="AgX";break;case mu:e="Neutral";break;case fu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ms=new L;function U0(){ie.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),t=Ms.y.toFixed(4),e=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function N0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(br).join(`
`)}function F0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function O0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function br(i){return i!==""}function Bc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function zc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const B0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(i){return i.replace(B0,k0)}const z0=new Map;function k0(i,t){let e=Jt[t];if(e===void 0){const n=z0.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Go(e)}const H0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kc(i){return i.replace(H0,V0)}function V0(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Hc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function G0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===lu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===cu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(t="SHADOWMAP_TYPE_VSM"),t}function W0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ji:case Qi:t="ENVMAP_TYPE_CUBE";break;case qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function X0(i){let t="ENVMAP_MODE_REFLECTION";return i.envMap&&i.envMapMode===Qi&&(t="ENVMAP_MODE_REFRACTION"),t}function q0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Zo:t="ENVMAP_BLENDING_MULTIPLY";break;case Oh:t="ENVMAP_BLENDING_MIX";break;case Bh:t="ENVMAP_BLENDING_ADD";break}return t}function Y0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function $0(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=G0(e),c=W0(e),h=X0(e),d=q0(e),f=Y0(e),p=N0(e),g=F0(s),y=r.createProgram();let m,u,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(br).join(`
`),u.length>0&&(u+=`
`)):(m=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(br).join(`
`),u=[Hc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Zn?"#define TONE_MAPPING":"",e.toneMapping!==Zn?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Zn?I0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,L0("linearToOutputTexel",e.outputColorSpace),U0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(br).join(`
`)),a=Go(a),a=Bc(a,e),a=zc(a,e),o=Go(o),o=Bc(o,e),o=zc(o,e),a=kc(a),o=kc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+m+a,v=_+u+o,E=Nc(r,r.VERTEX_SHADER,x),T=Nc(r,r.FRAGMENT_SHADER,v);r.attachShader(y,E),r.attachShader(y,T),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function P(U){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(y)||"",V=r.getShaderInfoLog(E)||"",K=r.getShaderInfoLog(T)||"",W=B.trim(),z=V.trim(),J=K.trim();let j=!0,ot=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,y,E,T);else{const yt=Oc(r,E,"vertex"),Rt=Oc(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+W+`
`+yt+`
`+Rt)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||J==="")&&(ot=!1);ot&&(U.diagnostics={runnable:j,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:J,prefix:u}})}r.deleteShader(E),r.deleteShader(T),R=new Us(r,y),S=O0(r,y)}let R;this.getUniforms=function(){return R===void 0&&P(this),R};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(y,C0)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=R0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=T,this}let j0=0;class Z0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new K0(t),e.set(t,n)),n}}class K0{constructor(t){this.id=j0++,this.code=t,this.usedTimes=0}}function J0(i,t,e,n,r,s,a){const o=new ll,l=new Z0,c=new Set,h=[],d=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,M,U,B,V){const K=B.fog,W=V.geometry,z=S.isMeshStandardMaterial?B.environment:null,J=(S.isMeshStandardMaterial?e:t).get(S.envMap||z),j=J&&J.mapping===qs?J.image.height:null,ot=g[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const yt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Rt=yt!==void 0?yt.length:0;let zt=0;W.morphAttributes.position!==void 0&&(zt=1),W.morphAttributes.normal!==void 0&&(zt=2),W.morphAttributes.color!==void 0&&(zt=3);let Z,ut,dt,k;if(ot){const Ut=bn[ot];Z=Ut.vertexShader,ut=Ut.fragmentShader}else Z=S.vertexShader,ut=S.fragmentShader,l.update(S),dt=l.getVertexShaderID(S),k=l.getFragmentShaderID(S);const X=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),pt=V.isInstancedMesh===!0,mt=V.isBatchedMesh===!0,Mt=!!S.map,Nt=!!S.matcap,C=!!J,nt=!!S.aoMap,Q=!!S.lightMap,tt=!!S.bumpMap,rt=!!S.normalMap,ht=!!S.displacementMap,gt=!!S.emissiveMap,wt=!!S.metalnessMap,Vt=!!S.roughnessMap,kt=S.anisotropy>0,A=S.clearcoat>0,b=S.dispersion>0,q=S.iridescence>0,it=S.sheen>0,_t=S.transmission>0,at=kt&&!!S.anisotropyMap,Ot=A&&!!S.clearcoatMap,Tt=A&&!!S.clearcoatNormalMap,Ft=A&&!!S.clearcoatRoughnessMap,Lt=q&&!!S.iridescenceMap,xt=q&&!!S.iridescenceThicknessMap,Ct=it&&!!S.sheenColorMap,F=it&&!!S.sheenRoughnessMap,D=!!S.specularMap,N=!!S.specularColorMap,$=!!S.specularIntensityMap,I=_t&&!!S.transmissionMap,vt=_t&&!!S.thicknessMap,St=!!S.gradientMap,Pt=!!S.alphaMap,O=S.alphaTest>0,H=!!S.alphaHash,ft=!!S.extensions;let Et=Zn;S.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Et=i.toneMapping);const bt={shaderID:ot,shaderType:S.type,shaderName:S.name,vertexShader:Z,fragmentShader:ut,defines:S.defines,customVertexShaderID:dt,customFragmentShaderID:k,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:mt,batchingColor:mt&&V._colorsTexture!==null,instancing:pt,instancingColor:pt&&V.instanceColor!==null,instancingMorph:pt&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:tr,alphaToCoverage:!!S.alphaToCoverage,map:Mt,matcap:Nt,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:j,aoMap:nt,lightMap:Q,bumpMap:tt,normalMap:rt,displacementMap:f&&ht,emissiveMap:gt,normalMapObjectSpace:rt&&S.normalMapType===Vh,normalMapTangentSpace:rt&&S.normalMapType===sl,metalnessMap:wt,roughnessMap:Vt,anisotropy:kt,anisotropyMap:at,clearcoat:A,clearcoatMap:Ot,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ft,dispersion:b,iridescence:q,iridescenceMap:Lt,iridescenceThicknessMap:xt,sheen:it,sheenColorMap:Ct,sheenRoughnessMap:F,specularMap:D,specularColorMap:N,specularIntensityMap:$,transmission:_t,transmissionMap:I,thicknessMap:vt,gradientMap:St,opaque:S.transparent===!1&&S.blending===Yi&&S.alphaToCoverage===!1,alphaMap:Pt,alphaTest:O,alphaHash:H,combine:S.combine,mapUv:Mt&&y(S.map.channel),aoMapUv:nt&&y(S.aoMap.channel),lightMapUv:Q&&y(S.lightMap.channel),bumpMapUv:tt&&y(S.bumpMap.channel),normalMapUv:rt&&y(S.normalMap.channel),displacementMapUv:ht&&y(S.displacementMap.channel),emissiveMapUv:gt&&y(S.emissiveMap.channel),metalnessMapUv:wt&&y(S.metalnessMap.channel),roughnessMapUv:Vt&&y(S.roughnessMap.channel),anisotropyMapUv:at&&y(S.anisotropyMap.channel),clearcoatMapUv:Ot&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ft&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:F&&y(S.sheenRoughnessMap.channel),specularMapUv:D&&y(S.specularMap.channel),specularColorMapUv:N&&y(S.specularColorMap.channel),specularIntensityMapUv:$&&y(S.specularIntensityMap.channel),transmissionMapUv:I&&y(S.transmissionMap.channel),thicknessMapUv:vt&&y(S.thicknessMap.channel),alphaMapUv:Pt&&y(S.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(rt||kt),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!W.attributes.uv&&(Mt||Pt),fog:!!K,useFog:S.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ct,skinning:V.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:zt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,decodeVideoTexture:Mt&&S.map.isVideoTexture===!0&&ie.getTransfer(S.map.colorSpace)===oe,decodeVideoTextureEmissive:gt&&S.emissiveMap.isVideoTexture===!0&&ie.getTransfer(S.emissiveMap.colorSpace)===oe,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===nn,flipSided:S.side===Ve,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:ft&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&S.extensions.multiDraw===!0||mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return bt.vertexUv1s=c.has(1),bt.vertexUv2s=c.has(2),bt.vertexUv3s=c.has(3),c.clear(),bt}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const U in S.defines)M.push(U),M.push(S.defines[U]);return S.isRawShaderMaterial===!1&&(_(M,S),x(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function _(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),M.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reversedDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let U;if(M){const B=bn[M];U=Dr.clone(B.uniforms)}else U=S.uniforms;return U}function E(S,M){let U;for(let B=0,V=h.length;B<V;B++){const K=h[B];if(K.cacheKey===M){U=K,++U.usedTimes;break}}return U===void 0&&(U=new $0(i,M,S,s),h.push(U)),U}function T(S){if(--S.usedTimes===0){const M=h.indexOf(S);h[M]=h[h.length-1],h.pop(),S.destroy()}}function P(S){l.remove(S)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:v,acquireProgram:E,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:R}}function Q0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function t_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Vc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Gc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(d,f,p,g,y,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=y,u.group=m),t++,u}function o(d,f,p,g,y,m){const u=a(d,f,p,g,y,m);p.transmission>0?n.push(u):p.transparent===!0?r.push(u):e.push(u)}function l(d,f,p,g,y,m){const u=a(d,f,p,g,y,m);p.transmission>0?n.unshift(u):p.transparent===!0?r.unshift(u):e.unshift(u)}function c(d,f){e.length>1&&e.sort(d||t_),n.length>1&&n.sort(f||Vc),r.length>1&&r.sort(f||Vc)}function h(){for(let d=t,f=i.length;d<f;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function e_(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new Gc,i.set(n,[a])):r>=s.length?(a=new Gc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function n_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function i_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let r_=0;function s_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function a_(i){const t=new n_,e=i_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const r=new L,s=new se,a=new se;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,_=0,x=0,v=0,E=0,T=0,P=0;c.sort(s_);for(let S=0,M=c.length;S<M;S++){const U=c[S],B=U.color,V=U.intensity,K=U.distance,W=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=B.r*V,d+=B.g*V,f+=B.b*V;else if(U.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(U.sh.coefficients[z],V);P++}else if(U.isDirectionalLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const J=U.shadow,j=e.get(U);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=U.shadow.matrix,_++}n.directional[p]=z,p++}else if(U.isSpotLight){const z=t.get(U);z.position.setFromMatrixPosition(U.matrixWorld),z.color.copy(B).multiplyScalar(V),z.distance=K,z.coneCos=Math.cos(U.angle),z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),z.decay=U.decay,n.spot[y]=z;const J=U.shadow;if(U.map&&(n.spotLightMap[E]=U.map,E++,J.updateMatrices(U),U.castShadow&&T++),n.spotLightMatrix[y]=J.matrix,U.castShadow){const j=e.get(U);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,n.spotShadow[y]=j,n.spotShadowMap[y]=W,v++}y++}else if(U.isRectAreaLight){const z=t.get(U);z.color.copy(B).multiplyScalar(V),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=z,m++}else if(U.isPointLight){const z=t.get(U);if(z.color.copy(U.color).multiplyScalar(U.intensity),z.distance=U.distance,z.decay=U.decay,U.castShadow){const J=U.shadow,j=e.get(U);j.shadowIntensity=J.intensity,j.shadowBias=J.bias,j.shadowNormalBias=J.normalBias,j.shadowRadius=J.radius,j.shadowMapSize=J.mapSize,j.shadowCameraNear=J.camera.near,j.shadowCameraFar=J.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=U.shadow.matrix,x++}n.point[g]=z,g++}else if(U.isHemisphereLight){const z=t.get(U);z.skyColor.copy(U.color).multiplyScalar(V),z.groundColor.copy(U.groundColor).multiplyScalar(V),n.hemi[u]=z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Dt.LTC_FLOAT_1,n.rectAreaLTC2=Dt.LTC_FLOAT_2):(n.rectAreaLTC1=Dt.LTC_HALF_1,n.rectAreaLTC2=Dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==v||R.numSpotMaps!==E||R.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+E-T,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=P,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=v,R.numSpotMaps=E,R.numLightProbes=P,n.version=r_++)}function l(c,h){let d=0,f=0,p=0,g=0,y=0;const m=h.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const v=n.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),d++}else if(x.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(m),p++}else if(x.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),a.identity(),s.copy(x.matrixWorld),s.premultiply(m),a.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const v=n.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:n}}function Wc(i){const t=new a_(i),e=[],n=[];function r(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function o_(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Wc(i),t.set(r,[o])):s>=a.length?(o=new Wc(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const l_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,c_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function u_(i,t,e){let n=new ul;const r=new lt,s=new lt,a=new he,o=new Pf({depthPacking:Hh}),l=new Df,c={},h=e.maxTextureSize,d={[Kn]:Ve,[Ve]:Kn,[nn]:nn},f=new He({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:l_,fragmentShader:c_}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new we;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lu;let u=this.type;this.render=function(T,P,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),B=i.state;B.setBlending(On),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=u!==Nn&&this.type===Nn,K=u===Nn&&this.type!==Nn;for(let W=0,z=T.length;W<z;W++){const J=T[W],j=J.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const ot=j.getFrameExtents();if(r.multiply(ot),s.copy(j.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/ot.x),r.x=s.x*ot.x,j.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/ot.y),r.y=s.y*ot.y,j.mapSize.y=s.y)),j.map===null||V===!0||K===!0){const Rt=this.type!==Nn?{minFilter:sn,magFilter:sn}:{};j.map!==null&&j.map.dispose(),j.map=new _n(r.x,r.y,Rt),j.map.texture.name=J.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const yt=j.getViewportCount();for(let Rt=0;Rt<yt;Rt++){const zt=j.getViewport(Rt);a.set(s.x*zt.x,s.y*zt.y,s.x*zt.z,s.y*zt.w),B.viewport(a),j.updateMatrices(J,Rt),n=j.getFrustum(),v(P,R,j.camera,J,this.type)}j.isPointLightShadow!==!0&&this.type===Nn&&_(j,R),j.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(S,M,U)};function _(T,P){const R=t.update(y);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new _n(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(P,null,R,f,y,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(P,null,R,p,y,null)}function x(T,P,R,S){let M=null;const U=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)M=U;else if(M=R.isPointLight===!0?l:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const B=M.uuid,V=P.uuid;let K=c[B];K===void 0&&(K={},c[B]=K);let W=K[V];W===void 0&&(W=M.clone(),K[V]=W,P.addEventListener("dispose",E)),M=W}if(M.visible=P.visible,M.wireframe=P.wireframe,S===Nn?M.side=P.shadowSide!==null?P.shadowSide:P.side:M.side=P.shadowSide!==null?P.shadowSide:d[P.side],M.alphaMap=P.alphaMap,M.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,M.map=P.map,M.clipShadows=P.clipShadows,M.clippingPlanes=P.clippingPlanes,M.clipIntersection=P.clipIntersection,M.displacementMap=P.displacementMap,M.displacementScale=P.displacementScale,M.displacementBias=P.displacementBias,M.wireframeLinewidth=P.wireframeLinewidth,M.linewidth=P.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const B=i.properties.get(M);B.light=R}return M}function v(T,P,R,S,M){if(T.visible===!1)return;if(T.layers.test(P.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const V=t.update(T),K=T.material;if(Array.isArray(K)){const W=V.groups;for(let z=0,J=W.length;z<J;z++){const j=W[z],ot=K[j.materialIndex];if(ot&&ot.visible){const yt=x(T,ot,S,M);T.onBeforeShadow(i,T,P,R,V,yt,j),i.renderBufferDirect(R,null,V,yt,T,j),T.onAfterShadow(i,T,P,R,V,yt,j)}}}else if(K.visible){const W=x(T,K,S,M);T.onBeforeShadow(i,T,P,R,V,W,null),i.renderBufferDirect(R,null,V,W,T,null),T.onAfterShadow(i,T,P,R,V,W,null)}}const B=T.children;for(let V=0,K=B.length;V<K;V++)v(B[V],P,R,S,M)}function E(T){T.target.removeEventListener("dispose",E);for(const R in c){const S=c[R],M=T.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const h_={[Za]:Ka,[Ja]:eo,[Qa]:no,[Ki]:to,[Ka]:Za,[eo]:Ja,[no]:Qa,[to]:Ki};function d_(i,t){function e(){let I=!1;const vt=new he;let St=null;const Pt=new he(0,0,0,0);return{setMask:function(O){St!==O&&!I&&(i.colorMask(O,O,O,O),St=O)},setLocked:function(O){I=O},setClear:function(O,H,ft,Et,bt){bt===!0&&(O*=Et,H*=Et,ft*=Et),vt.set(O,H,ft,Et),Pt.equals(vt)===!1&&(i.clearColor(O,H,ft,Et),Pt.copy(vt))},reset:function(){I=!1,St=null,Pt.set(-1,0,0,0)}}}function n(){let I=!1,vt=!1,St=null,Pt=null,O=null;return{setReversed:function(H){if(vt!==H){const ft=t.get("EXT_clip_control");H?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),vt=H;const Et=O;O=null,this.setClear(Et)}},getReversed:function(){return vt},setTest:function(H){H?X(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(H){St!==H&&!I&&(i.depthMask(H),St=H)},setFunc:function(H){if(vt&&(H=h_[H]),Pt!==H){switch(H){case Za:i.depthFunc(i.NEVER);break;case Ka:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Qa:i.depthFunc(i.EQUAL);break;case to:i.depthFunc(i.GEQUAL);break;case eo:i.depthFunc(i.GREATER);break;case no:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pt=H}},setLocked:function(H){I=H},setClear:function(H){O!==H&&(vt&&(H=1-H),i.clearDepth(H),O=H)},reset:function(){I=!1,St=null,Pt=null,O=null,vt=!1}}}function r(){let I=!1,vt=null,St=null,Pt=null,O=null,H=null,ft=null,Et=null,bt=null;return{setTest:function(Ut){I||(Ut?X(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Ut){vt!==Ut&&!I&&(i.stencilMask(Ut),vt=Ut)},setFunc:function(Ut,Qt,ne){(St!==Ut||Pt!==Qt||O!==ne)&&(i.stencilFunc(Ut,Qt,ne),St=Ut,Pt=Qt,O=ne)},setOp:function(Ut,Qt,ne){(H!==Ut||ft!==Qt||Et!==ne)&&(i.stencilOp(Ut,Qt,ne),H=Ut,ft=Qt,Et=ne)},setLocked:function(Ut){I=Ut},setClear:function(Ut){bt!==Ut&&(i.clearStencil(Ut),bt=Ut)},reset:function(){I=!1,vt=null,St=null,Pt=null,O=null,H=null,ft=null,Et=null,bt=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,_=null,x=null,v=null,E=null,T=null,P=new Gt(0,0,0),R=0,S=!1,M=null,U=null,B=null,V=null,K=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,J=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=J>=1):j.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=J>=2);let ot=null,yt={};const Rt=i.getParameter(i.SCISSOR_BOX),zt=i.getParameter(i.VIEWPORT),Z=new he().fromArray(Rt),ut=new he().fromArray(zt);function dt(I,vt,St,Pt){const O=new Uint8Array(4),H=i.createTexture();i.bindTexture(I,H),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ft=0;ft<St;ft++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,Pt,0,i.RGBA,i.UNSIGNED_BYTE,O):i.texImage2D(vt+ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,O);return H}const k={};k[i.TEXTURE_2D]=dt(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=dt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=dt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=dt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),X(i.DEPTH_TEST),a.setFunc(Ki),tt(!1),rt(Dl),X(i.CULL_FACE),nt(On);function X(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function ct(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function pt(I,vt){return d[I]!==vt?(i.bindFramebuffer(I,vt),d[I]=vt,I===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=vt),I===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function mt(I,vt){let St=p,Pt=!1;if(I){St=f.get(vt),St===void 0&&(St=[],f.set(vt,St));const O=I.textures;if(St.length!==O.length||St[0]!==i.COLOR_ATTACHMENT0){for(let H=0,ft=O.length;H<ft;H++)St[H]=i.COLOR_ATTACHMENT0+H;St.length=O.length,Pt=!0}}else St[0]!==i.BACK&&(St[0]=i.BACK,Pt=!0);Pt&&i.drawBuffers(St)}function Mt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Nt={[ci]:i.FUNC_ADD,[yh]:i.FUNC_SUBTRACT,[bh]:i.FUNC_REVERSE_SUBTRACT};Nt[Mh]=i.MIN,Nt[Sh]=i.MAX;const C={[Eh]:i.ZERO,[wh]:i.ONE,[Th]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[Lh]:i.SRC_ALPHA_SATURATE,[Ph]:i.DST_COLOR,[Ch]:i.DST_ALPHA,[Ah]:i.ONE_MINUS_SRC_COLOR,[ja]:i.ONE_MINUS_SRC_ALPHA,[Dh]:i.ONE_MINUS_DST_COLOR,[Rh]:i.ONE_MINUS_DST_ALPHA,[Ih]:i.CONSTANT_COLOR,[Uh]:i.ONE_MINUS_CONSTANT_COLOR,[Nh]:i.CONSTANT_ALPHA,[Fh]:i.ONE_MINUS_CONSTANT_ALPHA};function nt(I,vt,St,Pt,O,H,ft,Et,bt,Ut){if(I===On){y===!0&&(ct(i.BLEND),y=!1);return}if(y===!1&&(X(i.BLEND),y=!0),I!==xh){if(I!==m||Ut!==S){if((u!==ci||v!==ci)&&(i.blendEquation(i.FUNC_ADD),u=ci,v=ci),Ut)switch(I){case Yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFunc(i.ONE,i.ONE);break;case Ll:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Os:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ll:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Il:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}_=null,x=null,E=null,T=null,P.set(0,0,0),R=0,m=I,S=Ut}return}O=O||vt,H=H||St,ft=ft||Pt,(vt!==u||O!==v)&&(i.blendEquationSeparate(Nt[vt],Nt[O]),u=vt,v=O),(St!==_||Pt!==x||H!==E||ft!==T)&&(i.blendFuncSeparate(C[St],C[Pt],C[H],C[ft]),_=St,x=Pt,E=H,T=ft),(Et.equals(P)===!1||bt!==R)&&(i.blendColor(Et.r,Et.g,Et.b,bt),P.copy(Et),R=bt),m=I,S=!1}function Q(I,vt){I.side===nn?ct(i.CULL_FACE):X(i.CULL_FACE);let St=I.side===Ve;vt&&(St=!St),tt(St),I.blending===Yi&&I.transparent===!1?nt(On):nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Pt=I.stencilWrite;o.setTest(Pt),Pt&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),gt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function tt(I){M!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),M=I)}function rt(I){I!==_h?(X(i.CULL_FACE),I!==U&&(I===Dl?i.cullFace(i.BACK):I===vh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),U=I}function ht(I){I!==B&&(z&&i.lineWidth(I),B=I)}function gt(I,vt,St){I?(X(i.POLYGON_OFFSET_FILL),(V!==vt||K!==St)&&(i.polygonOffset(vt,St),V=vt,K=St)):ct(i.POLYGON_OFFSET_FILL)}function wt(I){I?X(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Vt(I){I===void 0&&(I=i.TEXTURE0+W-1),ot!==I&&(i.activeTexture(I),ot=I)}function kt(I,vt,St){St===void 0&&(ot===null?St=i.TEXTURE0+W-1:St=ot);let Pt=yt[St];Pt===void 0&&(Pt={type:void 0,texture:void 0},yt[St]=Pt),(Pt.type!==I||Pt.texture!==vt)&&(ot!==St&&(i.activeTexture(St),ot=St),i.bindTexture(I,vt||k[I]),Pt.type=I,Pt.texture=vt)}function A(){const I=yt[ot];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function b(){try{i.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{i.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{i.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{i.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ot(){try{i.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Tt(){try{i.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ft(){try{i.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{i.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(I){Z.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Z.copy(I))}function F(I){ut.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),ut.copy(I))}function D(I,vt){let St=c.get(vt);St===void 0&&(St=new WeakMap,c.set(vt,St));let Pt=St.get(I);Pt===void 0&&(Pt=i.getUniformBlockIndex(vt,I.name),St.set(I,Pt))}function N(I,vt){const Pt=c.get(vt).get(I);l.get(vt)!==Pt&&(i.uniformBlockBinding(vt,Pt,I.__bindingPointIndex),l.set(vt,Pt))}function $(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ot=null,yt={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,_=null,x=null,v=null,E=null,T=null,P=new Gt(0,0,0),R=0,S=!1,M=null,U=null,B=null,V=null,K=null,Z.set(0,0,i.canvas.width,i.canvas.height),ut.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:X,disable:ct,bindFramebuffer:pt,drawBuffers:mt,useProgram:Mt,setBlending:nt,setMaterial:Q,setFlipSided:tt,setCullFace:rt,setLineWidth:ht,setPolygonOffset:gt,setScissorTest:wt,activeTexture:Vt,bindTexture:kt,unbindTexture:A,compressedTexImage2D:b,compressedTexImage3D:q,texImage2D:Lt,texImage3D:xt,updateUBOMapping:D,uniformBlockBinding:N,texStorage2D:Tt,texStorage3D:Ft,texSubImage2D:it,texSubImage3D:_t,compressedTexSubImage2D:at,compressedTexSubImage3D:Ot,scissor:Ct,viewport:F,reset:$}}function f_(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,b){return p?new OffscreenCanvas(A,b):Hs("canvas")}function y(A,b,q){let it=1;const _t=kt(A);if((_t.width>q||_t.height>q)&&(it=q/Math.max(_t.width,_t.height)),it<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const at=Math.floor(it*_t.width),Ot=Math.floor(it*_t.height);d===void 0&&(d=g(at,Ot));const Tt=b?g(at,Ot):d;return Tt.width=at,Tt.height=Ot,Tt.getContext("2d").drawImage(A,0,0,at,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+_t.width+"x"+_t.height+") to ("+at+"x"+Ot+")."),Tt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+_t.width+"x"+_t.height+")."),A;return A}function m(A){return A.generateMipmaps}function u(A){i.generateMipmap(A)}function _(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(A,b,q,it,_t=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let at=b;if(b===i.RED&&(q===i.FLOAT&&(at=i.R32F),q===i.HALF_FLOAT&&(at=i.R16F),q===i.UNSIGNED_BYTE&&(at=i.R8)),b===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.R8UI),q===i.UNSIGNED_SHORT&&(at=i.R16UI),q===i.UNSIGNED_INT&&(at=i.R32UI),q===i.BYTE&&(at=i.R8I),q===i.SHORT&&(at=i.R16I),q===i.INT&&(at=i.R32I)),b===i.RG&&(q===i.FLOAT&&(at=i.RG32F),q===i.HALF_FLOAT&&(at=i.RG16F),q===i.UNSIGNED_BYTE&&(at=i.RG8)),b===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RG8UI),q===i.UNSIGNED_SHORT&&(at=i.RG16UI),q===i.UNSIGNED_INT&&(at=i.RG32UI),q===i.BYTE&&(at=i.RG8I),q===i.SHORT&&(at=i.RG16I),q===i.INT&&(at=i.RG32I)),b===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGB8UI),q===i.UNSIGNED_SHORT&&(at=i.RGB16UI),q===i.UNSIGNED_INT&&(at=i.RGB32UI),q===i.BYTE&&(at=i.RGB8I),q===i.SHORT&&(at=i.RGB16I),q===i.INT&&(at=i.RGB32I)),b===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(at=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(at=i.RGBA16UI),q===i.UNSIGNED_INT&&(at=i.RGBA32UI),q===i.BYTE&&(at=i.RGBA8I),q===i.SHORT&&(at=i.RGBA16I),q===i.INT&&(at=i.RGBA32I)),b===i.RGB&&(q===i.UNSIGNED_INT_5_9_9_9_REV&&(at=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(at=i.R11F_G11F_B10F)),b===i.RGBA){const Ot=_t?zs:ie.getTransfer(it);q===i.FLOAT&&(at=i.RGBA32F),q===i.HALF_FLOAT&&(at=i.RGBA16F),q===i.UNSIGNED_BYTE&&(at=Ot===oe?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT_4_4_4_4&&(at=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(at=i.RGB5_A1)}return(at===i.R16F||at===i.R32F||at===i.RG16F||at===i.RG32F||at===i.RGBA16F||at===i.RGBA32F)&&t.get("EXT_color_buffer_float"),at}function v(A,b){let q;return A?b===null||b===pi||b===Tr?q=i.DEPTH24_STENCIL8:b===Sn?q=i.DEPTH32F_STENCIL8:b===wr&&(q=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===pi||b===Tr?q=i.DEPTH_COMPONENT24:b===Sn?q=i.DEPTH_COMPONENT32F:b===wr&&(q=i.DEPTH_COMPONENT16),q}function E(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==sn&&A.minFilter!==Mn?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function P(A){const b=A.target;b.removeEventListener("dispose",P),M(b)}function R(A){const b=n.get(A);if(b.__webglInit===void 0)return;const q=A.source,it=f.get(q);if(it){const _t=it[b.__cacheKey];_t.usedTimes--,_t.usedTimes===0&&S(A),Object.keys(it).length===0&&f.delete(q)}n.remove(A)}function S(A){const b=n.get(A);i.deleteTexture(b.__webglTexture);const q=A.source,it=f.get(q);delete it[b.__cacheKey],a.memory.textures--}function M(A){const b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(b.__webglFramebuffer[it]))for(let _t=0;_t<b.__webglFramebuffer[it].length;_t++)i.deleteFramebuffer(b.__webglFramebuffer[it][_t]);else i.deleteFramebuffer(b.__webglFramebuffer[it]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[it])}else{if(Array.isArray(b.__webglFramebuffer))for(let it=0;it<b.__webglFramebuffer.length;it++)i.deleteFramebuffer(b.__webglFramebuffer[it]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let it=0;it<b.__webglColorRenderbuffer.length;it++)b.__webglColorRenderbuffer[it]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[it]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const q=A.textures;for(let it=0,_t=q.length;it<_t;it++){const at=n.get(q[it]);at.__webglTexture&&(i.deleteTexture(at.__webglTexture),a.memory.textures--),n.remove(q[it])}n.remove(A)}let U=0;function B(){U=0}function V(){const A=U;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),U+=1,A}function K(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function W(A,b){const q=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&q.__version!==A.version){const it=A.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(q,A,b);return}}else A.isExternalTexture&&(q.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+b)}function z(A,b){const q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){k(q,A,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+b)}function J(A,b){const q=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&q.__version!==A.version){k(q,A,b);return}e.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+b)}function j(A,b){const q=n.get(A);if(A.version>0&&q.__version!==A.version){X(q,A,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+b)}const ot={[Bs]:i.REPEAT,[di]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},yt={[sn]:i.NEAREST,[zh]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ia]:i.LINEAR_MIPMAP_NEAREST,[fi]:i.LINEAR_MIPMAP_LINEAR},Rt={[Gh]:i.NEVER,[jh]:i.ALWAYS,[Wh]:i.LESS,[Eu]:i.LEQUAL,[Xh]:i.EQUAL,[$h]:i.GEQUAL,[qh]:i.GREATER,[Yh]:i.NOTEQUAL};function zt(A,b){if(b.type===Sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Mn||b.magFilter===ia||b.magFilter===Vr||b.magFilter===fi||b.minFilter===Mn||b.minFilter===ia||b.minFilter===Vr||b.minFilter===fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,ot[b.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ot[b.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ot[b.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[b.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[b.minFilter]),b.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Rt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===sn||b.minFilter!==Vr&&b.minFilter!==fi||b.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Z(A,b){let q=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const it=b.source;let _t=f.get(it);_t===void 0&&(_t={},f.set(it,_t));const at=K(b);if(at!==A.__cacheKey){_t[at]===void 0&&(_t[at]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,q=!0),_t[at].usedTimes++;const Ot=_t[A.__cacheKey];Ot!==void 0&&(_t[A.__cacheKey].usedTimes--,Ot.usedTimes===0&&S(b)),A.__cacheKey=at,A.__webglTexture=_t[at].texture}return q}function ut(A,b,q){return Math.floor(Math.floor(A/q)/b)}function dt(A,b,q,it){const at=A.updateRanges;if(at.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,b.width,b.height,q,it,b.data);else{at.sort((xt,Ct)=>xt.start-Ct.start);let Ot=0;for(let xt=1;xt<at.length;xt++){const Ct=at[Ot],F=at[xt],D=Ct.start+Ct.count,N=ut(F.start,b.width,4),$=ut(Ct.start,b.width,4);F.start<=D+1&&N===$&&ut(F.start+F.count-1,b.width,4)===N?Ct.count=Math.max(Ct.count,F.start+F.count-Ct.start):(++Ot,at[Ot]=F)}at.length=Ot+1;const Tt=i.getParameter(i.UNPACK_ROW_LENGTH),Ft=i.getParameter(i.UNPACK_SKIP_PIXELS),Lt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,b.width);for(let xt=0,Ct=at.length;xt<Ct;xt++){const F=at[xt],D=Math.floor(F.start/4),N=Math.ceil(F.count/4),$=D%b.width,I=Math.floor(D/b.width),vt=N,St=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,$),i.pixelStorei(i.UNPACK_SKIP_ROWS,I),e.texSubImage2D(i.TEXTURE_2D,0,$,I,vt,St,q,it,b.data)}A.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,Tt),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ft),i.pixelStorei(i.UNPACK_SKIP_ROWS,Lt)}}function k(A,b,q){let it=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(it=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(it=i.TEXTURE_3D);const _t=Z(A,b),at=b.source;e.bindTexture(it,A.__webglTexture,i.TEXTURE0+q);const Ot=n.get(at);if(at.version!==Ot.__version||_t===!0){e.activeTexture(i.TEXTURE0+q);const Tt=ie.getPrimaries(ie.workingColorSpace),Ft=b.colorSpace===jn?null:ie.getPrimaries(b.colorSpace),Lt=b.colorSpace===jn||Tt===Ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let xt=y(b.image,!1,r.maxTextureSize);xt=Vt(b,xt);const Ct=s.convert(b.format,b.colorSpace),F=s.convert(b.type);let D=x(b.internalFormat,Ct,F,b.colorSpace,b.isVideoTexture);zt(it,b);let N;const $=b.mipmaps,I=b.isVideoTexture!==!0,vt=Ot.__version===void 0||_t===!0,St=at.dataReady,Pt=E(b,xt);if(b.isDepthTexture)D=v(b.format===Cr,b.type),vt&&(I?e.texStorage2D(i.TEXTURE_2D,1,D,xt.width,xt.height):e.texImage2D(i.TEXTURE_2D,0,D,xt.width,xt.height,0,Ct,F,null));else if(b.isDataTexture)if($.length>0){I&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,D,$[0].width,$[0].height);for(let O=0,H=$.length;O<H;O++)N=$[O],I?St&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,N.width,N.height,Ct,F,N.data):e.texImage2D(i.TEXTURE_2D,O,D,N.width,N.height,0,Ct,F,N.data);b.generateMipmaps=!1}else I?(vt&&e.texStorage2D(i.TEXTURE_2D,Pt,D,xt.width,xt.height),St&&dt(b,xt,Ct,F)):e.texImage2D(i.TEXTURE_2D,0,D,xt.width,xt.height,0,Ct,F,xt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){I&&vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,D,$[0].width,$[0].height,xt.depth);for(let O=0,H=$.length;O<H;O++)if(N=$[O],b.format!==gn)if(Ct!==null)if(I){if(St)if(b.layerUpdates.size>0){const ft=bc(N.width,N.height,b.format,b.type);for(const Et of b.layerUpdates){const bt=N.data.subarray(Et*ft/N.data.BYTES_PER_ELEMENT,(Et+1)*ft/N.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,Et,N.width,N.height,1,Ct,bt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,N.width,N.height,xt.depth,Ct,N.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,O,D,N.width,N.height,xt.depth,0,N.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?St&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,O,0,0,0,N.width,N.height,xt.depth,Ct,F,N.data):e.texImage3D(i.TEXTURE_2D_ARRAY,O,D,N.width,N.height,xt.depth,0,Ct,F,N.data)}else{I&&vt&&e.texStorage2D(i.TEXTURE_2D,Pt,D,$[0].width,$[0].height);for(let O=0,H=$.length;O<H;O++)N=$[O],b.format!==gn?Ct!==null?I?St&&e.compressedTexSubImage2D(i.TEXTURE_2D,O,0,0,N.width,N.height,Ct,N.data):e.compressedTexImage2D(i.TEXTURE_2D,O,D,N.width,N.height,0,N.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?St&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,N.width,N.height,Ct,F,N.data):e.texImage2D(i.TEXTURE_2D,O,D,N.width,N.height,0,Ct,F,N.data)}else if(b.isDataArrayTexture)if(I){if(vt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Pt,D,xt.width,xt.height,xt.depth),St)if(b.layerUpdates.size>0){const O=bc(xt.width,xt.height,b.format,b.type);for(const H of b.layerUpdates){const ft=xt.data.subarray(H*O/xt.data.BYTES_PER_ELEMENT,(H+1)*O/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,H,xt.width,xt.height,1,Ct,F,ft)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ct,F,xt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,D,xt.width,xt.height,xt.depth,0,Ct,F,xt.data);else if(b.isData3DTexture)I?(vt&&e.texStorage3D(i.TEXTURE_3D,Pt,D,xt.width,xt.height,xt.depth),St&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ct,F,xt.data)):e.texImage3D(i.TEXTURE_3D,0,D,xt.width,xt.height,xt.depth,0,Ct,F,xt.data);else if(b.isFramebufferTexture){if(vt)if(I)e.texStorage2D(i.TEXTURE_2D,Pt,D,xt.width,xt.height);else{let O=xt.width,H=xt.height;for(let ft=0;ft<Pt;ft++)e.texImage2D(i.TEXTURE_2D,ft,D,O,H,0,Ct,F,null),O>>=1,H>>=1}}else if($.length>0){if(I&&vt){const O=kt($[0]);e.texStorage2D(i.TEXTURE_2D,Pt,D,O.width,O.height)}for(let O=0,H=$.length;O<H;O++)N=$[O],I?St&&e.texSubImage2D(i.TEXTURE_2D,O,0,0,Ct,F,N):e.texImage2D(i.TEXTURE_2D,O,D,Ct,F,N);b.generateMipmaps=!1}else if(I){if(vt){const O=kt(xt);e.texStorage2D(i.TEXTURE_2D,Pt,D,O.width,O.height)}St&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,F,xt)}else e.texImage2D(i.TEXTURE_2D,0,D,Ct,F,xt);m(b)&&u(it),Ot.__version=at.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function X(A,b,q){if(b.image.length!==6)return;const it=Z(A,b),_t=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+q);const at=n.get(_t);if(_t.version!==at.__version||it===!0){e.activeTexture(i.TEXTURE0+q);const Ot=ie.getPrimaries(ie.workingColorSpace),Tt=b.colorSpace===jn?null:ie.getPrimaries(b.colorSpace),Ft=b.colorSpace===jn||Ot===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ft);const Lt=b.isCompressedTexture||b.image[0].isCompressedTexture,xt=b.image[0]&&b.image[0].isDataTexture,Ct=[];for(let H=0;H<6;H++)!Lt&&!xt?Ct[H]=y(b.image[H],!0,r.maxCubemapSize):Ct[H]=xt?b.image[H].image:b.image[H],Ct[H]=Vt(b,Ct[H]);const F=Ct[0],D=s.convert(b.format,b.colorSpace),N=s.convert(b.type),$=x(b.internalFormat,D,N,b.colorSpace),I=b.isVideoTexture!==!0,vt=at.__version===void 0||it===!0,St=_t.dataReady;let Pt=E(b,F);zt(i.TEXTURE_CUBE_MAP,b);let O;if(Lt){I&&vt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,$,F.width,F.height);for(let H=0;H<6;H++){O=Ct[H].mipmaps;for(let ft=0;ft<O.length;ft++){const Et=O[ft];b.format!==gn?D!==null?I?St&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft,0,0,Et.width,Et.height,D,Et.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft,$,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft,0,0,Et.width,Et.height,D,N,Et.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft,$,Et.width,Et.height,0,D,N,Et.data)}}}else{if(O=b.mipmaps,I&&vt){O.length>0&&Pt++;const H=kt(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Pt,$,H.width,H.height)}for(let H=0;H<6;H++)if(xt){I?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,Ct[H].width,Ct[H].height,D,N,Ct[H].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,$,Ct[H].width,Ct[H].height,0,D,N,Ct[H].data);for(let ft=0;ft<O.length;ft++){const bt=O[ft].image[H].image;I?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft+1,0,0,bt.width,bt.height,D,N,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft+1,$,bt.width,bt.height,0,D,N,bt.data)}}else{I?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,0,0,D,N,Ct[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,0,$,D,N,Ct[H]);for(let ft=0;ft<O.length;ft++){const Et=O[ft];I?St&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft+1,0,0,D,N,Et.image[H]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+H,ft+1,$,D,N,Et.image[H])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),at.__version=_t.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ct(A,b,q,it,_t,at){const Ot=s.convert(q.format,q.colorSpace),Tt=s.convert(q.type),Ft=x(q.internalFormat,Ot,Tt,q.colorSpace),Lt=n.get(b),xt=n.get(q);if(xt.__renderTarget=b,!Lt.__hasExternalTextures){const Ct=Math.max(1,b.width>>at),F=Math.max(1,b.height>>at);_t===i.TEXTURE_3D||_t===i.TEXTURE_2D_ARRAY?e.texImage3D(_t,at,Ft,Ct,F,b.depth,0,Ot,Tt,null):e.texImage2D(_t,at,Ft,Ct,F,0,Ot,Tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,_t,xt.__webglTexture,0,ht(b)):(_t===i.TEXTURE_2D||_t>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&_t<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,it,_t,xt.__webglTexture,at),e.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(A,b,q){if(i.bindRenderbuffer(i.RENDERBUFFER,A),b.depthBuffer){const it=b.depthTexture,_t=it&&it.isDepthTexture?it.type:null,at=v(b.stencilBuffer,_t),Ot=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Tt=ht(b);gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,at,b.width,b.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,at,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,at,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ot,i.RENDERBUFFER,A)}else{const it=b.textures;for(let _t=0;_t<it.length;_t++){const at=it[_t],Ot=s.convert(at.format,at.colorSpace),Tt=s.convert(at.type),Ft=x(at.internalFormat,Ot,Tt,at.colorSpace),Lt=ht(b);q&&gt(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,Ft,b.width,b.height):gt(b)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Lt,Ft,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ft,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(b.depthTexture);it.__renderTarget=b,(!it.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),W(b.depthTexture,0);const _t=it.__webglTexture,at=ht(b);if(b.depthTexture.format===Ar)gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,_t,0);else if(b.depthTexture.format===Cr)gt(b)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0,at):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,_t,0);else throw new Error("Unknown depthTexture format")}function Mt(A){const b=n.get(A),q=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const it=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),it){const _t=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,it.removeEventListener("dispose",_t)};it.addEventListener("dispose",_t),b.__depthDisposeCallback=_t}b.__boundDepthTexture=it}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");const it=A.texture.mipmaps;it&&it.length>0?mt(b.__webglFramebuffer[0],A):mt(b.__webglFramebuffer,A)}else if(q){b.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[it]),b.__webglDepthbuffer[it]===void 0)b.__webglDepthbuffer[it]=i.createRenderbuffer(),pt(b.__webglDepthbuffer[it],A,!1);else{const _t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer[it];i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,at)}}else{const it=A.texture.mipmaps;if(it&&it.length>0?e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),pt(b.__webglDepthbuffer,A,!1);else{const _t=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,at),i.framebufferRenderbuffer(i.FRAMEBUFFER,_t,i.RENDERBUFFER,at)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,b,q){const it=n.get(A);b!==void 0&&ct(it.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&Mt(A)}function C(A){const b=A.texture,q=n.get(A),it=n.get(b);A.addEventListener("dispose",P);const _t=A.textures,at=A.isWebGLCubeRenderTarget===!0,Ot=_t.length>1;if(Ot||(it.__webglTexture===void 0&&(it.__webglTexture=i.createTexture()),it.__version=b.version,a.memory.textures++),at){q.__webglFramebuffer=[];for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Tt]=[];for(let Ft=0;Ft<b.mipmaps.length;Ft++)q.__webglFramebuffer[Tt][Ft]=i.createFramebuffer()}else q.__webglFramebuffer[Tt]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)q.__webglFramebuffer[Tt]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ot)for(let Tt=0,Ft=_t.length;Tt<Ft;Tt++){const Lt=n.get(_t[Tt]);Lt.__webglTexture===void 0&&(Lt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&gt(A)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Tt=0;Tt<_t.length;Tt++){const Ft=_t[Tt];q.__webglColorRenderbuffer[Tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[Tt]);const Lt=s.convert(Ft.format,Ft.colorSpace),xt=s.convert(Ft.type),Ct=x(Ft.internalFormat,Lt,xt,Ft.colorSpace,A.isXRRenderTarget===!0),F=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,F,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,q.__webglColorRenderbuffer[Tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),pt(q.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(at){e.bindTexture(i.TEXTURE_CUBE_MAP,it.__webglTexture),zt(i.TEXTURE_CUBE_MAP,b);for(let Tt=0;Tt<6;Tt++)if(b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)ct(q.__webglFramebuffer[Tt][Ft],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,Ft);else ct(q.__webglFramebuffer[Tt],A,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0);m(b)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let Tt=0,Ft=_t.length;Tt<Ft;Tt++){const Lt=_t[Tt],xt=n.get(Lt);let Ct=i.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Ct=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Ct,xt.__webglTexture),zt(Ct,Lt),ct(q.__webglFramebuffer,A,Lt,i.COLOR_ATTACHMENT0+Tt,Ct,0),m(Lt)&&u(Ct)}e.unbindTexture()}else{let Tt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Tt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Tt,it.__webglTexture),zt(Tt,b),b.mipmaps&&b.mipmaps.length>0)for(let Ft=0;Ft<b.mipmaps.length;Ft++)ct(q.__webglFramebuffer[Ft],A,b,i.COLOR_ATTACHMENT0,Tt,Ft);else ct(q.__webglFramebuffer,A,b,i.COLOR_ATTACHMENT0,Tt,0);m(b)&&u(Tt),e.unbindTexture()}A.depthBuffer&&Mt(A)}function nt(A){const b=A.textures;for(let q=0,it=b.length;q<it;q++){const _t=b[q];if(m(_t)){const at=_(A),Ot=n.get(_t).__webglTexture;e.bindTexture(at,Ot),u(at),e.unbindTexture()}}}const Q=[],tt=[];function rt(A){if(A.samples>0){if(gt(A)===!1){const b=A.textures,q=A.width,it=A.height;let _t=i.COLOR_BUFFER_BIT;const at=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ot=n.get(A),Tt=b.length>1;if(Tt)for(let Lt=0;Lt<b.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer);const Ft=A.texture.mipmaps;Ft&&Ft.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<b.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(_t|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(_t|=i.STENCIL_BUFFER_BIT)),Tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const xt=n.get(b[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,q,it,0,0,q,it,_t,i.NEAREST),l===!0&&(Q.length=0,tt.length=0,Q.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Q.push(at),tt.push(at),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,tt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Tt)for(let Lt=0;Lt<b.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);const xt=n.get(b[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ot.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,xt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const b=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function ht(A){return Math.min(r.maxSamples,A.samples)}function gt(A){const b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(A){const b=a.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function Vt(A,b){const q=A.colorSpace,it=A.format,_t=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||q!==tr&&q!==jn&&(ie.getTransfer(q)===oe?(it!==gn||_t!==Tn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function kt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=J,this.setTextureCube=j,this.rebindTextures=Nt,this.setupRenderTarget=C,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=rt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=gt}function p_(i,t){function e(n,r=jn){let s;const a=ie.getTransfer(r);if(n===Tn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===xu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===_u)return i.BYTE;if(n===vu)return i.SHORT;if(n===wr)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===pi)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Bn)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Mu)return i.RGB;if(n===gn)return i.RGBA;if(n===Ar)return i.DEPTH_COMPONENT;if(n===Cr)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Su)return i.RG;if(n===il)return i.RG_INTEGER;if(n===rl)return i.RGBA_INTEGER;if(n===Ps||n===Ds||n===Ls||n===Is)if(a===oe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ps)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Is)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ps)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ds)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ls)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Is)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ao||n===oo||n===lo||n===co)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ao)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===lo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===co)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===uo||n===ho||n===fo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===uo||n===ho)return a===oe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===fo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===po||n===mo||n===go||n===_o||n===vo||n===xo||n===yo||n===bo||n===Mo||n===So||n===Eo||n===wo||n===To||n===Ao)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===po)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===mo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===go)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===_o)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===vo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===yo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Mo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===So)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wo)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===To)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ao)return a===oe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===Ro||n===Po)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return a===oe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ro)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Po)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Do||n===Lo||n===Io||n===Uo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Do)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Lo)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Tr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new Bu(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new He({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ee(new Qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends gi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const y=typeof XRWebGLBinding<"u",m=new __,u={},_=e.getContextAttributes();let x=null,v=null;const E=[],T=[],P=new lt;let R=null;const S=new en;S.viewport=new he;const M=new en;M.viewport=new he;const U=[S,M],B=new Ff;let V=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let X=E[k];return X===void 0&&(X=new Ea,E[k]=X),X.getTargetRaySpace()},this.getControllerGrip=function(k){let X=E[k];return X===void 0&&(X=new Ea,E[k]=X),X.getGripSpace()},this.getHand=function(k){let X=E[k];return X===void 0&&(X=new Ea,E[k]=X),X.getHandSpace()};function W(k){const X=T.indexOf(k.inputSource);if(X===-1)return;const ct=E[X];ct!==void 0&&(ct.update(k.inputSource,k.frame,c||a),ct.dispatchEvent({type:k.type,data:k.inputSource}))}function z(){r.removeEventListener("select",W),r.removeEventListener("selectstart",W),r.removeEventListener("selectend",W),r.removeEventListener("squeeze",W),r.removeEventListener("squeezestart",W),r.removeEventListener("squeezeend",W),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",J);for(let k=0;k<E.length;k++){const X=T[k];X!==null&&(T[k]=null,E[k].disconnect(X))}V=null,K=null,m.reset();for(const k in u)delete u[k];t.setRenderTarget(x),p=null,f=null,d=null,r=null,v=null,dt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(r,e)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(x=t.getRenderTarget(),r.addEventListener("select",W),r.addEventListener("selectstart",W),r.addEventListener("selectend",W),r.addEventListener("squeeze",W),r.addEventListener("squeezestart",W),r.addEventListener("squeezeend",W),r.addEventListener("end",z),r.addEventListener("inputsourceschange",J),_.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(P),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,pt=null,mt=null;_.depth&&(mt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=_.stencil?Cr:Ar,pt=_.stencil?Tr:pi);const Mt={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:s};d=this.getBinding(),f=d.createProjectionLayer(Mt),r.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),v=new _n(f.textureWidth,f.textureHeight,{format:gn,type:Tn,depthTexture:new Ou(f.textureWidth,f.textureHeight,pt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const ct={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,e,ct),r.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new _n(p.framebufferWidth,p.framebufferHeight,{format:gn,type:Tn,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),dt.setContext(r),dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function J(k){for(let X=0;X<k.removed.length;X++){const ct=k.removed[X],pt=T.indexOf(ct);pt>=0&&(T[pt]=null,E[pt].disconnect(ct))}for(let X=0;X<k.added.length;X++){const ct=k.added[X];let pt=T.indexOf(ct);if(pt===-1){for(let Mt=0;Mt<E.length;Mt++)if(Mt>=T.length){T.push(ct),pt=Mt;break}else if(T[Mt]===null){T[Mt]=ct,pt=Mt;break}if(pt===-1)break}const mt=E[pt];mt&&mt.connect(ct)}}const j=new L,ot=new L;function yt(k,X,ct){j.setFromMatrixPosition(X.matrixWorld),ot.setFromMatrixPosition(ct.matrixWorld);const pt=j.distanceTo(ot),mt=X.projectionMatrix.elements,Mt=ct.projectionMatrix.elements,Nt=mt[14]/(mt[10]-1),C=mt[14]/(mt[10]+1),nt=(mt[9]+1)/mt[5],Q=(mt[9]-1)/mt[5],tt=(mt[8]-1)/mt[0],rt=(Mt[8]+1)/Mt[0],ht=Nt*tt,gt=Nt*rt,wt=pt/(-tt+rt),Vt=wt*-tt;if(X.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Vt),k.translateZ(wt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),mt[10]===-1)k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse);else{const kt=Nt+wt,A=C+wt,b=ht-Vt,q=gt+(pt-Vt),it=nt*C/A*kt,_t=Q*C/A*kt;k.projectionMatrix.makePerspective(b,q,it,_t,kt,A),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Rt(k,X){X===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(X.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;let X=k.near,ct=k.far;m.texture!==null&&(m.depthNear>0&&(X=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),B.near=M.near=S.near=X,B.far=M.far=S.far=ct,(V!==B.near||K!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),V=B.near,K=B.far),B.layers.mask=k.layers.mask|6,S.layers.mask=B.layers.mask&3,M.layers.mask=B.layers.mask&5;const pt=k.parent,mt=B.cameras;Rt(B,pt);for(let Mt=0;Mt<mt.length;Mt++)Rt(mt[Mt],pt);mt.length===2?yt(B,S,M):B.projectionMatrix.copy(S.projectionMatrix),zt(k,B,pt)};function zt(k,X,ct){ct===null?k.matrix.copy(X.matrixWorld):(k.matrix.copy(ct.matrixWorld),k.matrix.invert(),k.matrix.multiply(X.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(X.projectionMatrix),k.projectionMatrixInverse.copy(X.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Rr*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(k){l=k,f!==null&&(f.fixedFoveation=k),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=k)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(k){return u[k]};let Z=null;function ut(k,X){if(h=X.getViewerPose(c||a),g=X,h!==null){const ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(v,p.framebuffer),t.setRenderTarget(v));let pt=!1;ct.length!==B.cameras.length&&(B.cameras.length=0,pt=!0);for(let C=0;C<ct.length;C++){const nt=ct[C];let Q=null;if(p!==null)Q=p.getViewport(nt);else{const rt=d.getViewSubImage(f,nt);Q=rt.viewport,C===0&&(t.setRenderTargetTextures(v,rt.colorTexture,rt.depthStencilTexture),t.setRenderTarget(v))}let tt=U[C];tt===void 0&&(tt=new en,tt.layers.enable(C),tt.viewport=new he,U[C]=tt),tt.matrix.fromArray(nt.transform.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.projectionMatrix.fromArray(nt.projectionMatrix),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert(),tt.viewport.set(Q.x,Q.y,Q.width,Q.height),C===0&&(B.matrix.copy(tt.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),pt===!0&&B.cameras.push(tt)}const mt=r.enabledFeatures;if(mt&&mt.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&y){d=n.getBinding();const C=d.getDepthInformation(ct[0]);C&&C.isValid&&C.texture&&m.init(C,r.renderState)}if(mt&&mt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let C=0;C<ct.length;C++){const nt=ct[C].camera;if(nt){let Q=u[nt];Q||(Q=new Bu,u[nt]=Q);const tt=d.getCameraImage(nt);Q.sourceTexture=tt}}}}for(let ct=0;ct<E.length;ct++){const pt=T[ct],mt=E[ct];pt!==null&&mt!==void 0&&mt.update(pt,X,c||a)}Z&&Z(k,X),X.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:X}),g=null}const dt=new ju;dt.setAnimationLoop(ut),this.setAnimationLoop=function(k){Z=k},this.dispose=function(){}}}const ai=new an,x_=new se;function y_(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Pu(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,x,v){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),d(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,v)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),y(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ve&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ve&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=t.get(u),x=_.envMap,v=_.envMapRotation;x&&(m.envMap.value=x,ai.copy(v),ai.x*=-1,ai.y*=-1,ai.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(ai)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ve&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){const _=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function b_(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const v=x.program;n.uniformBlockBinding(_,v)}function c(_,x){let v=r[_.id];v===void 0&&(g(_),v=h(_),r[_.id]=v,_.addEventListener("dispose",m));const E=x.program;n.updateUBOMapping(_,E);const T=t.render.frame;s[_.id]!==T&&(f(_),s[_.id]=T)}function h(_){const x=d();_.__bindingPointIndex=x;const v=i.createBuffer(),E=_.__size,T=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,v),v}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],v=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,P=v.length;T<P;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,M=R.length;S<M;S++){const U=R[S];if(p(U,T,S,E)===!0){const B=U.__offset,V=Array.isArray(U.value)?U.value:[U.value];let K=0;for(let W=0;W<V.length;W++){const z=V[W],J=y(z);typeof z=="number"||typeof z=="boolean"?(U.__data[0]=z,i.bufferSubData(i.UNIFORM_BUFFER,B+K,U.__data)):z.isMatrix3?(U.__data[0]=z.elements[0],U.__data[1]=z.elements[1],U.__data[2]=z.elements[2],U.__data[3]=0,U.__data[4]=z.elements[3],U.__data[5]=z.elements[4],U.__data[6]=z.elements[5],U.__data[7]=0,U.__data[8]=z.elements[6],U.__data[9]=z.elements[7],U.__data[10]=z.elements[8],U.__data[11]=0):(z.toArray(U.__data,K),K+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,x,v,E){const T=_.value,P=x+"_"+v;if(E[P]===void 0)return typeof T=="number"||typeof T=="boolean"?E[P]=T:E[P]=T.clone(),!0;{const R=E[P];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return E[P]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function g(_){const x=_.uniforms;let v=0;const E=16;for(let P=0,R=x.length;P<R;P++){const S=Array.isArray(x[P])?x[P]:[x[P]];for(let M=0,U=S.length;M<U;M++){const B=S[M],V=Array.isArray(B.value)?B.value:[B.value];for(let K=0,W=V.length;K<W;K++){const z=V[K],J=y(z),j=v%E,ot=j%J.boundary,yt=j+ot;v+=ot,yt!==0&&E-yt<J.storage&&(v+=E-yt),B.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=v,v+=J.storage}}}const T=v%E;return T>0&&(v+=E-T),_.__size=v,_.__cache={},this}function y(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)i.deleteBuffer(r[_]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class M_{constructor(t={}){const{canvas:e=dd(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,u=null;const _=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let E=!1;this._outputColorSpace=Ne;let T=0,P=0,R=null,S=-1,M=null;const U=new he,B=new he;let V=null;const K=new Gt(0);let W=0,z=e.width,J=e.height,j=1,ot=null,yt=null;const Rt=new he(0,0,z,J),zt=new he(0,0,z,J);let Z=!1;const ut=new ul;let dt=!1,k=!1;const X=new se,ct=new L,pt=new he,mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Nt(){return R===null?j:1}let C=n;function nt(w,G){return e.getContext(w,G)}try{const w={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${jo}`),e.addEventListener("webglcontextlost",St,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",O,!1),C===null){const G="webgl2";if(C=nt(G,w),C===null)throw nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Q,tt,rt,ht,gt,wt,Vt,kt,A,b,q,it,_t,at,Ot,Tt,Ft,Lt,xt,Ct,F,D,N,$;function I(){Q=new Lg(C),Q.init(),D=new p_(C,Q),tt=new wg(C,Q,t,D),rt=new d_(C,Q),tt.reversedDepthBuffer&&f&&rt.buffers.depth.setReversed(!0),ht=new Ng(C),gt=new Q0,wt=new f_(C,Q,rt,gt,tt,D,ht),Vt=new Ag(v),kt=new Dg(v),A=new Hf(C),N=new Sg(C,A),b=new Ig(C,A,ht,N),q=new Og(C,b,A,ht),xt=new Fg(C,tt,wt),Tt=new Tg(gt),it=new J0(v,Vt,kt,Q,tt,N,Tt),_t=new y_(v,gt),at=new e_,Ot=new o_(Q),Lt=new Mg(v,Vt,kt,rt,q,p,l),Ft=new u_(v,q,tt),$=new b_(C,ht,tt,rt),Ct=new Eg(C,Q,ht),F=new Ug(C,Q,ht),ht.programs=it.programs,v.capabilities=tt,v.extensions=Q,v.properties=gt,v.renderLists=at,v.shadowMap=Ft,v.state=rt,v.info=ht}I();const vt=new v_(v,C);this.xr=vt,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const w=Q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(w){w!==void 0&&(j=w,this.setSize(z,J,!1))},this.getSize=function(w){return w.set(z,J)},this.setSize=function(w,G,et=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,J=G,e.width=Math.floor(w*j),e.height=Math.floor(G*j),et===!0&&(e.style.width=w+"px",e.style.height=G+"px"),this.setViewport(0,0,w,G)},this.getDrawingBufferSize=function(w){return w.set(z*j,J*j).floor()},this.setDrawingBufferSize=function(w,G,et){z=w,J=G,j=et,e.width=Math.floor(w*et),e.height=Math.floor(G*et),this.setViewport(0,0,w,G)},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(Rt)},this.setViewport=function(w,G,et,st){w.isVector4?Rt.set(w.x,w.y,w.z,w.w):Rt.set(w,G,et,st),rt.viewport(U.copy(Rt).multiplyScalar(j).round())},this.getScissor=function(w){return w.copy(zt)},this.setScissor=function(w,G,et,st){w.isVector4?zt.set(w.x,w.y,w.z,w.w):zt.set(w,G,et,st),rt.scissor(B.copy(zt).multiplyScalar(j).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){rt.setScissorTest(Z=w)},this.setOpaqueSort=function(w){ot=w},this.setTransparentSort=function(w){yt=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor(...arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha(...arguments)},this.clear=function(w=!0,G=!0,et=!0){let st=0;if(w){let Y=!1;if(R!==null){const At=R.texture.format;Y=At===rl||At===il||At===nl}if(Y){const At=R.texture.type,It=At===Tn||At===pi||At===wr||At===Tr||At===Qo||At===tl,Ht=Lt.getClearColor(),Bt=Lt.getClearAlpha(),Yt=Ht.r,jt=Ht.g,Wt=Ht.b;It?(g[0]=Yt,g[1]=jt,g[2]=Wt,g[3]=Bt,C.clearBufferuiv(C.COLOR,0,g)):(y[0]=Yt,y[1]=jt,y[2]=Wt,y[3]=Bt,C.clearBufferiv(C.COLOR,0,y))}else st|=C.COLOR_BUFFER_BIT}G&&(st|=C.DEPTH_BUFFER_BIT),et&&(st|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",St,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",O,!1),Lt.dispose(),at.dispose(),Ot.dispose(),gt.dispose(),Vt.dispose(),kt.dispose(),q.dispose(),N.dispose(),$.dispose(),it.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",ne),vt.removeEventListener("sessionend",ae),We.stop()};function St(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const w=ht.autoReset,G=Ft.enabled,et=Ft.autoUpdate,st=Ft.needsUpdate,Y=Ft.type;I(),ht.autoReset=w,Ft.enabled=G,Ft.autoUpdate=et,Ft.needsUpdate=st,Ft.type=Y}function O(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function H(w){const G=w.target;G.removeEventListener("dispose",H),ft(G)}function ft(w){Et(w),gt.remove(w)}function Et(w){const G=gt.get(w).programs;G!==void 0&&(G.forEach(function(et){it.releaseProgram(et)}),w.isShaderMaterial&&it.releaseShaderCache(w))}this.renderBufferDirect=function(w,G,et,st,Y,At){G===null&&(G=mt);const It=Y.isMesh&&Y.matrixWorld.determinant()<0,Ht=hh(w,G,et,st,Y);rt.setMaterial(st,It);let Bt=et.index,Yt=1;if(st.wireframe===!0){if(Bt=b.getWireframeAttribute(et),Bt===void 0)return;Yt=2}const jt=et.drawRange,Wt=et.attributes.position;let te=jt.start*Yt,ce=(jt.start+jt.count)*Yt;At!==null&&(te=Math.max(te,At.start*Yt),ce=Math.min(ce,(At.start+At.count)*Yt)),Bt!==null?(te=Math.max(te,0),ce=Math.min(ce,Bt.count)):Wt!=null&&(te=Math.max(te,0),ce=Math.min(ce,Wt.count));const be=ce-te;if(be<0||be===1/0)return;N.setup(Y,st,Ht,et,Bt);let me,fe=Ct;if(Bt!==null&&(me=A.get(Bt),fe=F,fe.setIndex(me)),Y.isMesh)st.wireframe===!0?(rt.setLineWidth(st.wireframeLinewidth*Nt()),fe.setMode(C.LINES)):fe.setMode(C.TRIANGLES);else if(Y.isLine){let Xt=st.linewidth;Xt===void 0&&(Xt=1),rt.setLineWidth(Xt*Nt()),Y.isLineSegments?fe.setMode(C.LINES):Y.isLineLoop?fe.setMode(C.LINE_LOOP):fe.setMode(C.LINE_STRIP)}else Y.isPoints?fe.setMode(C.POINTS):Y.isSprite&&fe.setMode(C.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)Pr("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),fe.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Q.get("WEBGL_multi_draw"))fe.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Xt=Y._multiDrawStarts,ve=Y._multiDrawCounts,re=Y._multiDrawCount,Ke=Bt?A.get(Bt).bytesPerElement:1,yi=gt.get(st).currentProgram.getUniforms();for(let Je=0;Je<re;Je++)yi.setValue(C,"_gl_DrawID",Je),fe.render(Xt[Je]/Ke,ve[Je])}else if(Y.isInstancedMesh)fe.renderInstances(te,be,Y.count);else if(et.isInstancedBufferGeometry){const Xt=et._maxInstanceCount!==void 0?et._maxInstanceCount:1/0,ve=Math.min(et.instanceCount,Xt);fe.renderInstances(te,be,ve)}else fe.render(te,be)};function bt(w,G,et){w.transparent===!0&&w.side===nn&&w.forceSinglePass===!1?(w.side=Ve,w.needsUpdate=!0,Hr(w,G,et),w.side=Kn,w.needsUpdate=!0,Hr(w,G,et),w.side=nn):Hr(w,G,et)}this.compile=function(w,G,et=null){et===null&&(et=w),u=Ot.get(et),u.init(G),x.push(u),et.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),w!==et&&w.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(u.pushLight(Y),Y.castShadow&&u.pushShadow(Y))}),u.setupLights();const st=new Set;return w.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const At=Y.material;if(At)if(Array.isArray(At))for(let It=0;It<At.length;It++){const Ht=At[It];bt(Ht,et,Y),st.add(Ht)}else bt(At,et,Y),st.add(At)}),u=x.pop(),st},this.compileAsync=function(w,G,et=null){const st=this.compile(w,G,et);return new Promise(Y=>{function At(){if(st.forEach(function(It){gt.get(It).currentProgram.isReady()&&st.delete(It)}),st.size===0){Y(w);return}setTimeout(At,10)}Q.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Ut=null;function Qt(w){Ut&&Ut(w)}function ne(){We.stop()}function ae(){We.start()}const We=new ju;We.setAnimationLoop(Qt),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(w){Ut=w,vt.setAnimationLoop(w),w===null?We.stop():We.start()},vt.addEventListener("sessionstart",ne),vt.addEventListener("sessionend",ae),this.render=function(w,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(G),G=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,G,R),u=Ot.get(w,x.length),u.init(G),x.push(u),X.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),ut.setFromProjectionMatrix(X,En,G.reversedDepth),k=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,k),m=at.get(w,_.length),m.init(),_.push(m),vt.enabled===!0&&vt.isPresenting===!0){const At=v.xr.getDepthSensingMesh();At!==null&&Ze(At,G,-1/0,v.sortObjects)}Ze(w,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,yt),Mt=vt.enabled===!1||vt.isPresenting===!1||vt.hasDepthSensing()===!1,Mt&&Lt.addToRenderList(m,w),this.info.render.frame++,dt===!0&&Tt.beginShadows();const et=u.state.shadowsArray;Ft.render(et,w,G),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=m.opaque,Y=m.transmissive;if(u.setupLights(),G.isArrayCamera){const At=G.cameras;if(Y.length>0)for(let It=0,Ht=At.length;It<Ht;It++){const Bt=At[It];kn(st,Y,w,Bt)}Mt&&Lt.render(w);for(let It=0,Ht=At.length;It<Ht;It++){const Bt=At[It];yn(m,w,Bt,Bt.viewport)}}else Y.length>0&&kn(st,Y,w,G),Mt&&Lt.render(w),yn(m,w,G);R!==null&&P===0&&(wt.updateMultisampleRenderTarget(R),wt.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(v,w,G),N.resetDefaultState(),S=-1,M=null,x.pop(),x.length>0?(u=x[x.length-1],dt===!0&&Tt.setGlobalState(v.clippingPlanes,u.state.camera)):u=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Ze(w,G,et,st){if(w.visible===!1)return;if(w.layers.test(G.layers)){if(w.isGroup)et=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(G);else if(w.isLight)u.pushLight(w),w.castShadow&&u.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){st&&pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(X);const It=q.update(w),Ht=w.material;Ht.visible&&m.push(w,It,Ht,et,pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const It=q.update(w),Ht=w.material;if(st&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),pt.copy(w.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),pt.copy(It.boundingSphere.center)),pt.applyMatrix4(w.matrixWorld).applyMatrix4(X)),Array.isArray(Ht)){const Bt=It.groups;for(let Yt=0,jt=Bt.length;Yt<jt;Yt++){const Wt=Bt[Yt],te=Ht[Wt.materialIndex];te&&te.visible&&m.push(w,It,te,et,pt.z,Wt)}}else Ht.visible&&m.push(w,It,Ht,et,pt.z,null)}}const At=w.children;for(let It=0,Ht=At.length;It<Ht;It++)Ze(At[It],G,et,st)}function yn(w,G,et,st){const Y=w.opaque,At=w.transmissive,It=w.transparent;u.setupLightsView(et),dt===!0&&Tt.setGlobalState(v.clippingPlanes,et),st&&rt.viewport(U.copy(st)),Y.length>0&&Hn(Y,G,et),At.length>0&&Hn(At,G,et),It.length>0&&Hn(It,G,et),rt.buffers.depth.setTest(!0),rt.buffers.depth.setMask(!0),rt.buffers.color.setMask(!0),rt.setPolygonOffset(!1)}function kn(w,G,et,st){if((et.isScene===!0?et.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[st.id]===void 0&&(u.state.transmissionRenderTarget[st.id]=new _n(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")||Q.has("EXT_color_buffer_float")?Bn:Tn,minFilter:fi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));const At=u.state.transmissionRenderTarget[st.id],It=st.viewport||U;At.setSize(It.z*v.transmissionResolutionScale,It.w*v.transmissionResolutionScale);const Ht=v.getRenderTarget(),Bt=v.getActiveCubeFace(),Yt=v.getActiveMipmapLevel();v.setRenderTarget(At),v.getClearColor(K),W=v.getClearAlpha(),W<1&&v.setClearColor(16777215,.5),v.clear(),Mt&&Lt.render(et);const jt=v.toneMapping;v.toneMapping=Zn;const Wt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),u.setupLightsView(st),dt===!0&&Tt.setGlobalState(v.clippingPlanes,st),Hn(w,et,st),wt.updateMultisampleRenderTarget(At),wt.updateRenderTargetMipmap(At),Q.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let ce=0,be=G.length;ce<be;ce++){const me=G[ce],fe=me.object,Xt=me.geometry,ve=me.material,re=me.group;if(ve.side===nn&&fe.layers.test(st.layers)){const Ke=ve.side;ve.side=Ve,ve.needsUpdate=!0,xi(fe,et,st,Xt,ve,re),ve.side=Ke,ve.needsUpdate=!0,te=!0}}te===!0&&(wt.updateMultisampleRenderTarget(At),wt.updateRenderTargetMipmap(At))}v.setRenderTarget(Ht,Bt,Yt),v.setClearColor(K,W),Wt!==void 0&&(st.viewport=Wt),v.toneMapping=jt}function Hn(w,G,et){const st=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,At=w.length;Y<At;Y++){const It=w[Y],Ht=It.object,Bt=It.geometry,Yt=It.group;let jt=It.material;jt.allowOverride===!0&&st!==null&&(jt=st),Ht.layers.test(et.layers)&&xi(Ht,G,et,Bt,jt,Yt)}}function xi(w,G,et,st,Y,At){w.onBeforeRender(v,G,et,st,Y,At),w.modelViewMatrix.multiplyMatrices(et.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Y.onBeforeRender(v,G,et,st,w,At),Y.transparent===!0&&Y.side===nn&&Y.forceSinglePass===!1?(Y.side=Ve,Y.needsUpdate=!0,v.renderBufferDirect(et,G,st,Y,w,At),Y.side=Kn,Y.needsUpdate=!0,v.renderBufferDirect(et,G,st,Y,w,At),Y.side=nn):v.renderBufferDirect(et,G,st,Y,w,At),w.onAfterRender(v,G,et,st,Y,At)}function Hr(w,G,et){G.isScene!==!0&&(G=mt);const st=gt.get(w),Y=u.state.lights,At=u.state.shadowsArray,It=Y.state.version,Ht=it.getParameters(w,Y.state,At,G,et),Bt=it.getProgramCacheKey(Ht);let Yt=st.programs;st.environment=w.isMeshStandardMaterial?G.environment:null,st.fog=G.fog,st.envMap=(w.isMeshStandardMaterial?kt:Vt).get(w.envMap||st.environment),st.envMapRotation=st.environment!==null&&w.envMap===null?G.environmentRotation:w.envMapRotation,Yt===void 0&&(w.addEventListener("dispose",H),Yt=new Map,st.programs=Yt);let jt=Yt.get(Bt);if(jt!==void 0){if(st.currentProgram===jt&&st.lightsStateVersion===It)return Pl(w,Ht),jt}else Ht.uniforms=it.getUniforms(w),w.onBeforeCompile(Ht,v),jt=it.acquireProgram(Ht,Bt),Yt.set(Bt,jt),st.uniforms=Ht.uniforms;const Wt=st.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Wt.clippingPlanes=Tt.uniform),Pl(w,Ht),st.needsLights=fh(w),st.lightsStateVersion=It,st.needsLights&&(Wt.ambientLightColor.value=Y.state.ambient,Wt.lightProbe.value=Y.state.probe,Wt.directionalLights.value=Y.state.directional,Wt.directionalLightShadows.value=Y.state.directionalShadow,Wt.spotLights.value=Y.state.spot,Wt.spotLightShadows.value=Y.state.spotShadow,Wt.rectAreaLights.value=Y.state.rectArea,Wt.ltc_1.value=Y.state.rectAreaLTC1,Wt.ltc_2.value=Y.state.rectAreaLTC2,Wt.pointLights.value=Y.state.point,Wt.pointLightShadows.value=Y.state.pointShadow,Wt.hemisphereLights.value=Y.state.hemi,Wt.directionalShadowMap.value=Y.state.directionalShadowMap,Wt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Wt.spotShadowMap.value=Y.state.spotShadowMap,Wt.spotLightMatrix.value=Y.state.spotLightMatrix,Wt.spotLightMap.value=Y.state.spotLightMap,Wt.pointShadowMap.value=Y.state.pointShadowMap,Wt.pointShadowMatrix.value=Y.state.pointShadowMatrix),st.currentProgram=jt,st.uniformsList=null,jt}function Rl(w){if(w.uniformsList===null){const G=w.currentProgram.getUniforms();w.uniformsList=Us.seqWithValue(G.seq,w.uniforms)}return w.uniformsList}function Pl(w,G){const et=gt.get(w);et.outputColorSpace=G.outputColorSpace,et.batching=G.batching,et.batchingColor=G.batchingColor,et.instancing=G.instancing,et.instancingColor=G.instancingColor,et.instancingMorph=G.instancingMorph,et.skinning=G.skinning,et.morphTargets=G.morphTargets,et.morphNormals=G.morphNormals,et.morphColors=G.morphColors,et.morphTargetsCount=G.morphTargetsCount,et.numClippingPlanes=G.numClippingPlanes,et.numIntersection=G.numClipIntersection,et.vertexAlphas=G.vertexAlphas,et.vertexTangents=G.vertexTangents,et.toneMapping=G.toneMapping}function hh(w,G,et,st,Y){G.isScene!==!0&&(G=mt),wt.resetTextureUnits();const At=G.fog,It=st.isMeshStandardMaterial?G.environment:null,Ht=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:tr,Bt=(st.isMeshStandardMaterial?kt:Vt).get(st.envMap||It),Yt=st.vertexColors===!0&&!!et.attributes.color&&et.attributes.color.itemSize===4,jt=!!et.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Wt=!!et.morphAttributes.position,te=!!et.morphAttributes.normal,ce=!!et.morphAttributes.color;let be=Zn;st.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(be=v.toneMapping);const me=et.morphAttributes.position||et.morphAttributes.normal||et.morphAttributes.color,fe=me!==void 0?me.length:0,Xt=gt.get(st),ve=u.state.lights;if(dt===!0&&(k===!0||w!==M)){const Be=w===M&&st.id===S;Tt.setState(st,w,Be)}let re=!1;st.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==ve.state.version||Xt.outputColorSpace!==Ht||Y.isBatchedMesh&&Xt.batching===!1||!Y.isBatchedMesh&&Xt.batching===!0||Y.isBatchedMesh&&Xt.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Xt.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Xt.instancing===!1||!Y.isInstancedMesh&&Xt.instancing===!0||Y.isSkinnedMesh&&Xt.skinning===!1||!Y.isSkinnedMesh&&Xt.skinning===!0||Y.isInstancedMesh&&Xt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Xt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Xt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Xt.instancingMorph===!1&&Y.morphTexture!==null||Xt.envMap!==Bt||st.fog===!0&&Xt.fog!==At||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==Tt.numPlanes||Xt.numIntersection!==Tt.numIntersection)||Xt.vertexAlphas!==Yt||Xt.vertexTangents!==jt||Xt.morphTargets!==Wt||Xt.morphNormals!==te||Xt.morphColors!==ce||Xt.toneMapping!==be||Xt.morphTargetsCount!==fe)&&(re=!0):(re=!0,Xt.__version=st.version);let Ke=Xt.currentProgram;re===!0&&(Ke=Hr(st,G,Y));let yi=!1,Je=!1,lr=!1;const xe=Ke.getUniforms(),on=Xt.uniforms;if(rt.useProgram(Ke.program)&&(yi=!0,Je=!0,lr=!0),st.id!==S&&(S=st.id,Je=!0),yi||M!==w){rt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),xe.setValue(C,"projectionMatrix",w.projectionMatrix),xe.setValue(C,"viewMatrix",w.matrixWorldInverse);const Xe=xe.map.cameraPosition;Xe!==void 0&&Xe.setValue(C,ct.setFromMatrixPosition(w.matrixWorld)),tt.logarithmicDepthBuffer&&xe.setValue(C,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&xe.setValue(C,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,Je=!0,lr=!0)}if(Y.isSkinnedMesh){xe.setOptional(C,Y,"bindMatrix"),xe.setOptional(C,Y,"bindMatrixInverse");const Be=Y.skeleton;Be&&(Be.boneTexture===null&&Be.computeBoneTexture(),xe.setValue(C,"boneTexture",Be.boneTexture,wt))}Y.isBatchedMesh&&(xe.setOptional(C,Y,"batchingTexture"),xe.setValue(C,"batchingTexture",Y._matricesTexture,wt),xe.setOptional(C,Y,"batchingIdTexture"),xe.setValue(C,"batchingIdTexture",Y._indirectTexture,wt),xe.setOptional(C,Y,"batchingColorTexture"),Y._colorsTexture!==null&&xe.setValue(C,"batchingColorTexture",Y._colorsTexture,wt));const ln=et.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&xt.update(Y,et,Ke),(Je||Xt.receiveShadow!==Y.receiveShadow)&&(Xt.receiveShadow=Y.receiveShadow,xe.setValue(C,"receiveShadow",Y.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(on.envMap.value=Bt,on.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&G.environment!==null&&(on.envMapIntensity.value=G.environmentIntensity),Je&&(xe.setValue(C,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&dh(on,lr),At&&st.fog===!0&&_t.refreshFogUniforms(on,At),_t.refreshMaterialUniforms(on,st,j,J,u.state.transmissionRenderTarget[w.id]),Us.upload(C,Rl(Xt),on,wt)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(Us.upload(C,Rl(Xt),on,wt),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&xe.setValue(C,"center",Y.center),xe.setValue(C,"modelViewMatrix",Y.modelViewMatrix),xe.setValue(C,"normalMatrix",Y.normalMatrix),xe.setValue(C,"modelMatrix",Y.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const Be=st.uniformsGroups;for(let Xe=0,na=Be.length;Xe<na;Xe++){const ti=Be[Xe];$.update(ti,Ke),$.bind(ti,Ke)}}return Ke}function dh(w,G){w.ambientLightColor.needsUpdate=G,w.lightProbe.needsUpdate=G,w.directionalLights.needsUpdate=G,w.directionalLightShadows.needsUpdate=G,w.pointLights.needsUpdate=G,w.pointLightShadows.needsUpdate=G,w.spotLights.needsUpdate=G,w.spotLightShadows.needsUpdate=G,w.rectAreaLights.needsUpdate=G,w.hemisphereLights.needsUpdate=G}function fh(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,G,et){const st=gt.get(w);st.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),gt.get(w.texture).__webglTexture=G,gt.get(w.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:et,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,G){const et=gt.get(w);et.__webglFramebuffer=G,et.__useDefaultFramebuffer=G===void 0};const ph=C.createFramebuffer();this.setRenderTarget=function(w,G=0,et=0){R=w,T=G,P=et;let st=!0,Y=null,At=!1,It=!1;if(w){const Bt=gt.get(w);if(Bt.__useDefaultFramebuffer!==void 0)rt.bindFramebuffer(C.FRAMEBUFFER,null),st=!1;else if(Bt.__webglFramebuffer===void 0)wt.setupRenderTarget(w);else if(Bt.__hasExternalTextures)wt.rebindTextures(w,gt.get(w.texture).__webglTexture,gt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Wt=w.depthTexture;if(Bt.__boundDepthTexture!==Wt){if(Wt!==null&&gt.has(Wt)&&(w.width!==Wt.image.width||w.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(w)}}const Yt=w.texture;(Yt.isData3DTexture||Yt.isDataArrayTexture||Yt.isCompressedArrayTexture)&&(It=!0);const jt=gt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?Y=jt[G][et]:Y=jt[G],At=!0):w.samples>0&&wt.useMultisampledRTT(w)===!1?Y=gt.get(w).__webglMultisampledFramebuffer:Array.isArray(jt)?Y=jt[et]:Y=jt,U.copy(w.viewport),B.copy(w.scissor),V=w.scissorTest}else U.copy(Rt).multiplyScalar(j).floor(),B.copy(zt).multiplyScalar(j).floor(),V=Z;if(et!==0&&(Y=ph),rt.bindFramebuffer(C.FRAMEBUFFER,Y)&&st&&rt.drawBuffers(w,Y),rt.viewport(U),rt.scissor(B),rt.setScissorTest(V),At){const Bt=gt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+G,Bt.__webglTexture,et)}else if(It){const Bt=G;for(let Yt=0;Yt<w.textures.length;Yt++){const jt=gt.get(w.textures[Yt]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+Yt,jt.__webglTexture,et,Bt)}}else if(w!==null&&et!==0){const Bt=gt.get(w.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Bt.__webglTexture,et)}S=-1},this.readRenderTargetPixels=function(w,G,et,st,Y,At,It,Ht=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt){rt.bindFramebuffer(C.FRAMEBUFFER,Bt);try{const Yt=w.textures[Ht],jt=Yt.format,Wt=Yt.type;if(!tt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=w.width-st&&et>=0&&et<=w.height-Y&&(w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ht),C.readPixels(G,et,st,Y,D.convert(jt),D.convert(Wt),At))}finally{const Yt=R!==null?gt.get(R).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,Yt)}}},this.readRenderTargetPixelsAsync=async function(w,G,et,st,Y,At,It,Ht=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=gt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(Bt=Bt[It]),Bt)if(G>=0&&G<=w.width-st&&et>=0&&et<=w.height-Y){rt.bindFramebuffer(C.FRAMEBUFFER,Bt);const Yt=w.textures[Ht],jt=Yt.format,Wt=Yt.type;if(!tt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,te),C.bufferData(C.PIXEL_PACK_BUFFER,At.byteLength,C.STREAM_READ),w.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Ht),C.readPixels(G,et,st,Y,D.convert(jt),D.convert(Wt),0);const ce=R!==null?gt.get(R).__webglFramebuffer:null;rt.bindFramebuffer(C.FRAMEBUFFER,ce);const be=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await fd(C,be,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,te),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,At),C.deleteBuffer(te),C.deleteSync(be),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,G=null,et=0){const st=Math.pow(2,-et),Y=Math.floor(w.image.width*st),At=Math.floor(w.image.height*st),It=G!==null?G.x:0,Ht=G!==null?G.y:0;wt.setTexture2D(w,0),C.copyTexSubImage2D(C.TEXTURE_2D,et,0,0,It,Ht,Y,At),rt.unbindTexture()};const mh=C.createFramebuffer(),gh=C.createFramebuffer();this.copyTextureToTexture=function(w,G,et=null,st=null,Y=0,At=null){At===null&&(Y!==0?(Pr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=Y,Y=0):At=0);let It,Ht,Bt,Yt,jt,Wt,te,ce,be;const me=w.isCompressedTexture?w.mipmaps[At]:w.image;if(et!==null)It=et.max.x-et.min.x,Ht=et.max.y-et.min.y,Bt=et.isBox3?et.max.z-et.min.z:1,Yt=et.min.x,jt=et.min.y,Wt=et.isBox3?et.min.z:0;else{const ln=Math.pow(2,-Y);It=Math.floor(me.width*ln),Ht=Math.floor(me.height*ln),w.isDataArrayTexture?Bt=me.depth:w.isData3DTexture?Bt=Math.floor(me.depth*ln):Bt=1,Yt=0,jt=0,Wt=0}st!==null?(te=st.x,ce=st.y,be=st.z):(te=0,ce=0,be=0);const fe=D.convert(G.format),Xt=D.convert(G.type);let ve;G.isData3DTexture?(wt.setTexture3D(G,0),ve=C.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(wt.setTexture2DArray(G,0),ve=C.TEXTURE_2D_ARRAY):(wt.setTexture2D(G,0),ve=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,G.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,G.unpackAlignment);const re=C.getParameter(C.UNPACK_ROW_LENGTH),Ke=C.getParameter(C.UNPACK_IMAGE_HEIGHT),yi=C.getParameter(C.UNPACK_SKIP_PIXELS),Je=C.getParameter(C.UNPACK_SKIP_ROWS),lr=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Yt),C.pixelStorei(C.UNPACK_SKIP_ROWS,jt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt);const xe=w.isDataArrayTexture||w.isData3DTexture,on=G.isDataArrayTexture||G.isData3DTexture;if(w.isDepthTexture){const ln=gt.get(w),Be=gt.get(G),Xe=gt.get(ln.__renderTarget),na=gt.get(Be.__renderTarget);rt.bindFramebuffer(C.READ_FRAMEBUFFER,Xe.__webglFramebuffer),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,na.__webglFramebuffer);for(let ti=0;ti<Bt;ti++)xe&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(w).__webglTexture,Y,Wt+ti),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,gt.get(G).__webglTexture,At,be+ti)),C.blitFramebuffer(Yt,jt,It,Ht,te,ce,It,Ht,C.DEPTH_BUFFER_BIT,C.NEAREST);rt.bindFramebuffer(C.READ_FRAMEBUFFER,null),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(Y!==0||w.isRenderTargetTexture||gt.has(w)){const ln=gt.get(w),Be=gt.get(G);rt.bindFramebuffer(C.READ_FRAMEBUFFER,mh),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,gh);for(let Xe=0;Xe<Bt;Xe++)xe?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ln.__webglTexture,Y,Wt+Xe):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,ln.__webglTexture,Y),on?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Be.__webglTexture,At,be+Xe):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Be.__webglTexture,At),Y!==0?C.blitFramebuffer(Yt,jt,It,Ht,te,ce,It,Ht,C.COLOR_BUFFER_BIT,C.NEAREST):on?C.copyTexSubImage3D(ve,At,te,ce,be+Xe,Yt,jt,It,Ht):C.copyTexSubImage2D(ve,At,te,ce,Yt,jt,It,Ht);rt.bindFramebuffer(C.READ_FRAMEBUFFER,null),rt.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else on?w.isDataTexture||w.isData3DTexture?C.texSubImage3D(ve,At,te,ce,be,It,Ht,Bt,fe,Xt,me.data):G.isCompressedArrayTexture?C.compressedTexSubImage3D(ve,At,te,ce,be,It,Ht,Bt,fe,me.data):C.texSubImage3D(ve,At,te,ce,be,It,Ht,Bt,fe,Xt,me):w.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,At,te,ce,It,Ht,fe,Xt,me.data):w.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,At,te,ce,me.width,me.height,fe,me.data):C.texSubImage2D(C.TEXTURE_2D,At,te,ce,It,Ht,fe,Xt,me);C.pixelStorei(C.UNPACK_ROW_LENGTH,re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ke),C.pixelStorei(C.UNPACK_SKIP_PIXELS,yi),C.pixelStorei(C.UNPACK_SKIP_ROWS,Je),C.pixelStorei(C.UNPACK_SKIP_IMAGES,lr),At===0&&G.generateMipmaps&&C.generateMipmap(ve),rt.unbindTexture()},this.initRenderTarget=function(w){gt.get(w).__webglFramebuffer===void 0&&wt.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?wt.setTextureCube(w,0):w.isData3DTexture?wt.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?wt.setTexture2DArray(w,0):wt.setTexture2D(w,0),rt.unbindTexture()},this.resetState=function(){T=0,P=0,R=null,rt.reset(),N.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}}const Xc={type:"change"},xl={type:"start"},th={type:"end"},Ss=new Br,qc=new $n,S_=Math.cos(70*Ee.DEG2RAD),Te=new L,qe=2*Math.PI,ue={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ka=1e-6;class E_ extends zf{constructor(t,e=null){super(t,e),this.state=ue.NONE,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qi.ROTATE,MIDDLE:qi.DOLLY,RIGHT:qi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Pe,this._lastTargetPosition=new L,this._quat=new Pe().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new yc,this._sphericalDelta=new yc,this._scale=1,this._panOffset=new L,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new L,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=T_.bind(this),this._onPointerDown=w_.bind(this),this._onPointerUp=A_.bind(this),this._onContextMenu=U_.bind(this),this._onMouseWheel=P_.bind(this),this._onKeyDown=D_.bind(this),this._onTouchStart=L_.bind(this),this._onTouchMove=I_.bind(this),this._onMouseDown=C_.bind(this),this._onMouseMove=R_.bind(this),this._interceptControlDown=N_.bind(this),this._interceptControlUp=F_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Xc),this.update(),this.state=ue.NONE}update(t=null){const e=this.object.position;Te.copy(e).sub(this.target),Te.applyQuaternion(this._quat),this._spherical.setFromVector3(Te),this.autoRotate&&this.state===ue.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=qe:n>Math.PI&&(n-=qe),r<-Math.PI?r+=qe:r>Math.PI&&(r-=qe),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(Te.setFromSpherical(this._spherical),Te.applyQuaternion(this._quatInverse),e.copy(this.target).add(Te),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=Te.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new L(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=Te.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ss.origin.copy(this.object.position),Ss.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ss.direction))<S_?this.object.lookAt(this.target):(qc.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ss.intersectPlane(qc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>ka||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ka||this._lastTargetPosition.distanceToSquared(this.target)>ka?(this.dispatchEvent(Xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?qe/60*this.autoRotateSpeed*t:qe/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Te.setFromMatrixColumn(e,0),Te.multiplyScalar(-t),this._panOffset.add(Te)}_panUp(t,e){this.screenSpacePanning===!0?Te.setFromMatrixColumn(e,1):(Te.setFromMatrixColumn(e,0),Te.crossVectors(this.object.up,Te)),Te.multiplyScalar(t),this._panOffset.add(Te)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Te.copy(r).sub(this.target);let s=Te.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-qe*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(qe*this._rotateDelta.x/e.clientHeight),this._rotateUp(qe*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new lt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function w_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function T_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function A_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(th),this.state=ue.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function C_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case qi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=ue.DOLLY;break;case qi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}break;case qi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=ue.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=ue.PAN}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(xl)}function R_(i){switch(this.state){case ue.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case ue.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case ue.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function P_(i){this.enabled===!1||this.enableZoom===!1||this.state!==ue.NONE||(i.preventDefault(),this.dispatchEvent(xl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(th))}function D_(i){this.enabled!==!1&&this._handleKeyDown(i)}function L_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=ue.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=ue.TOUCH_PAN;break;default:this.state=ue.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=ue.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=ue.TOUCH_DOLLY_ROTATE;break;default:this.state=ue.NONE}break;default:this.state=ue.NONE}this.state!==ue.NONE&&this.dispatchEvent(xl)}function I_(i){switch(this._trackPointer(i),this.state){case ue.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case ue.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case ue.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case ue.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=ue.NONE}}function U_(i){this.enabled!==!1&&i.preventDefault()}function N_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function F_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class O_ extends cl{constructor(){super();const t=new hn;t.deleteAttribute("uv");const e=new _e({side:Ve}),n=new _e,r=new Or(16777215,900,28,2);r.position.set(.418,16.199,.3),this.add(r);const s=new ee(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);const a=new Uu(t,n,6),o=new Me;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);const l=new ee(t,ki(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);const c=new ee(t,ki(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);const h=new ee(t,ki(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);const d=new ee(t,ki(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);const f=new ee(t,ki(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const p=new ee(t,ki(100));p.position.set(0,20,0),p.scale.set(1,.1,1),this.add(p)}dispose(){const t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(const e of t)e.dispose()}}function ki(i){return new Rf({color:0,emissive:16777215,emissiveIntensity:i})}function eh(i,t=!1){const e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),r=new Set(Object.keys(i[0].morphAttributes)),s={},a={},o=i[0].morphTargetsRelative,l=new we;let c=0;for(let h=0;h<i.length;++h){const d=i[h];let f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(d.attributes[p]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in d.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p])}if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0;const d=[];for(let f=0;f<i.length;++f){const p=i[f].index;for(let g=0;g<p.count;++g)d.push(p.getX(g)+h);h+=i[f].attributes.position.count}l.setIndex(d)}for(const h in s){const d=Yc(s[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in a){const d=a[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<d;++f){const p=[];for(let y=0;y<a[h].length;++y)p.push(a[h][y][f]);const g=Yc(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Yc(i){let t,e,n,r=-1,s=0;for(let c=0;c<i.length;++c){const h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=h.gpuType),r!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const a=new t(s),o=new je(a,e,n);let l=0;for(let c=0;c<i.length;++c){const h=i[c];if(h.isInterleavedBufferAttribute){const d=l/e;for(let f=0,p=h.count;f<p;f++)for(let g=0;g<e;g++){const y=h.getComponent(f,g);o.setComponent(f+d,g,y)}}else a.set(h.array,l);l+=h.count*e}return r!==void 0&&(o.gpuType=r),o}function $c(i,t,e,n,r=0){const o=[30,4],l=new lt(-54,i),c=new lt(e,t),h=l.clone().multiplyScalar(-1),d=new $s(new lt(e,25),new lt(...n),new lt(...o),new lt(41,4)),f=[c.clone(),...d.getSpacedPoints(40),new lt(54,4)],p=f.map(x=>x.clone().multiplyScalar(-1)),g=d.getSpacedPoints(40).map((x,v)=>(x.y-=r*Ee.smoothstep(v/40,.4,1),x));r&&g.push(new lt(41,4));const y=[c.clone(),...g,new lt(54,4)],m=y.map(x=>x.clone().multiplyScalar(-1)),u=new Jn;u.moveTo(l.x,l.y),u.lineTo(e,t),u.lineTo(e,25),u.bezierCurveTo(...n,...o,41,4),u.lineTo(54,4),u.lineTo(h.x,h.y),u.lineTo(-e,-t),u.lineTo(-e,-25),u.bezierCurveTo(-n[0],-n[1],-30,-4,-41,-4),u.lineTo(-54,-4),u.closePath();const _=new Jn([l,...y,h,...m,l]);return{shape:u,glassShape:_,inside:y,rearInside:m,edgeInside:f,rearEdgeInside:p,frontStart:l,frontEnd:c,sideEnd:h,front:t,corner:e,curveEnd:41,inset:4,revealDepth:r}}function B_(){const i=$c(35,39,18,[18,10],2.7),t=$c(35,35,15,[15,11]),e=new Jn;return e.moveTo(-17,-5),e.quadraticCurveTo(-19,-10,-13,-10),e.lineTo(13,-10),e.quadraticCurveTo(19,-10,16,-5),e.lineTo(3,13),e.quadraticCurveTo(0,17,-3,13),e.closePath(),{upper:i,lower:t,atrium:e,roofHousings:[[-40,16,7,5],[40,-16,7,5],[-4,-28,8,5],[4,28,8,5],[-27,17,6,4],[27,-17,6,4]]}}function z_(){const i=new Fe;i.name="BUCT Changping Library — exterior";const t=new Map,e=(Z,ut={})=>new _e({color:Z,roughness:.74,...ut}),n=[e("#994f3b"),e("#a85b44"),e("#8d4537"),e("#b16a50")],r=e("#233d42"),s=e("#809292",{metalness:.65,roughness:.31}),a=e("#bdbeb5"),o=e("#d0d0bf"),l=["#476b7d","#4a6e7e","#4d7180","#45697a"].map(Z=>new Cf({color:Z,metalness:.43,roughness:.16,clearcoat:.85,clearcoatRoughness:.14,envMapIntensity:1.3,emissive:"#d6a765",emissiveIntensity:0})),c=(Z,ut)=>{if(t.has(ut)||t.set(ut,[]),Z.index){const dt=Z.toNonIndexed();Z.dispose(),t.get(ut).push(dt)}else t.get(ut).push(Z)},h=(Z,ut,dt,k,X,ct,pt,mt=0)=>{const Mt=new hn(k,X,ct);Mt.rotateY(mt),Mt.translate(Z,ut,dt),c(Mt,pt)},d=(Z,ut,dt,k)=>{const X=new L().subVectors(ut,Z),ct=new Ir(dt,dt,X.length(),4);ct.applyQuaternion(new Pe().setFromUnitVectors(new L(0,1,0),X.normalize())),ct.translate((Z.x+ut.x)/2,(Z.y+ut.y)/2,(Z.z+ut.z)/2),c(ct,k)},{upper:f,lower:p,atrium:g,roofHousings:y}=B_();function m(Z,ut,dt,k=a,X=!1){const ct=Z.shape.clone();X&&ct.holes.push(new Bo(g.getPoints(24).reverse()));const pt=new Zi(ct,{depth:dt,bevelEnabled:!1,curveSegments:32});pt.rotateX(Math.PI/2),pt.translate(0,ut,0),c(pt,k)}m(p,1.1,.4),m(p,5.9,.18,r),m(p,10.7,.18,r),m(p,15.49,.25,a),m(f,15.73,.24,r);const u={shape:f.glassShape};m(u,20.3,.18,r),m(u,25.1,.18,r),m(f,29.9,.18,r,!0),m(f,30.06,.16,r,!0),m(f,30.4,.35,o,!0);function _(Z,ut,dt,k,X){const ct=new lt(ut,dt),pt=new lt(k,X),mt=Math.ceil(ct.distanceTo(pt)/1.8);for(let Mt=0;Mt<mt;Mt++)Z.push([ct.clone().lerp(pt,Mt/mt),ct.clone().lerp(pt,(Mt+1)/mt)])}for(let Z=0;Z<6;Z++){const ut=Z<3?p:f,dt=[];_(dt,ut.frontStart.x,ut.frontStart.y,ut.frontEnd.x,ut.frontEnd.y);for(let X=0;X<ut.inside.length-1;X++){const ct=ut.inside[X],pt=ut.inside[X+1];_(dt,ct.x,ct.y,pt.x,pt.y)}_(dt,54,ut.inset,ut.sideEnd.x,ut.sideEnd.y);const k=dt.length;dt.push(...dt.map(([X,ct])=>[X.clone().multiplyScalar(-1),ct.clone().multiplyScalar(-1)])),dt.forEach(([X,ct],pt)=>{const mt=X.clone().add(ct).multiplyScalar(.5),Mt=X.distanceTo(ct),Nt=-Math.atan2(ct.y-X.y,ct.x-X.x),C=1.1+Z*4.8;if(ut.revealDepth&&Math.abs(Math.abs(X.x)-ut.curveEnd)<.001&&Math.abs(X.x-ct.x)<.001){h(mt.x,C+2.4,mt.y,Mt+.02,4.8,.12,r,Nt);return}h(mt.x,C+2.4,mt.y,Mt+.015,4.63,.075,l[(pt%k*7+Z*3)%l.length],Nt),h(mt.x,C+2.4,mt.y,Mt+.08,.058,.17,s,Nt),h(X.x,C+2.4,X.y,.065,4.8,.17,s,Nt),Z>0&&h(mt.x,C+.06,mt.y,Mt+.1,.12,.26,r,Nt)})}function x(Z,ut,dt,k,X,ct,pt=.3){const[mt,Mt]=Z.axis,[Nt,C]=Z.origin,nt=(ut+dt)/2,Q=Nt+mt*nt,tt=C+Mt*nt;h(Q,k,tt,dt-ut,X,pt,ct,-Math.atan2(Mt,mt))}for(let Z=0;Z<6;Z++){const ut=Z<3?p:f,dt=(ct,pt)=>({origin:[ct.x,ct.y],axis:pt.clone().sub(ct).normalize().toArray(),length:ct.distanceTo(pt)}),k=[dt(ut.frontStart,ut.frontEnd),dt(new lt(54,ut.inset),ut.sideEnd)];[...k,...k.map(ct=>({...ct,origin:ct.origin.map(pt=>-pt),axis:ct.axis.map(pt=>-pt)}))].forEach((ct,pt)=>{const mt=pt%2,Mt=ct.length,Nt=1.1+Z*4.8,C=Z<3;for(let nt=0;nt<10;nt++){const Q=Nt+.34+nt*.44;let tt=0,rt=Mt;if(nt>1&&nt<9){const ht=[.35,.5,.22,.42,.16,.56,.28][(nt+Z+mt)%7];C?(tt=0,rt=Mt*ht):(tt=Mt*(1-ht),rt=Mt),nt>=3&&nt<=6&&Z>=3&&(tt=Mt*(.63+.05*((nt+Z)%3)))}x(ct,tt,rt,Q,.355,n[(nt+Z+mt)%4],.43);for(let ht=tt+3.2;ht<rt;ht+=3.2)x(ct,ht,ht+.025,Q,.35,n[2],.46)}x(ct,0,Mt,Nt+.07,.09,r,.36),Z===5&&x(ct,0,Mt,30.55,.34,n[1],.56)})}function v(Z,ut,dt,k,X,ct){const pt=[0];for(let ht=1;ht<Z.length;ht++)pt.push(pt[ht-1]+Z[ht].distanceTo(Z[ht-1]));const mt=pt.at(-1),Mt=ut*mt,Nt=dt*mt,C=[];for(let ht=0;ht<Z.length-1;ht++){const gt=Math.max(Mt,pt[ht]),wt=Math.min(Nt,pt[ht+1]);if(wt-gt<.001)continue;const Vt=pt[ht+1]-pt[ht],kt=Z[ht].clone().lerp(Z[ht+1],(gt-pt[ht])/Vt),A=Z[ht].clone().lerp(Z[ht+1],(wt-pt[ht])/Vt);C.length||C.push(kt),C.push(A)}if(C.length<2)return;const nt=[],Q=[];for(let ht=0;ht<C.length;ht++){const gt=C[Math.min(ht+1,C.length-1)].clone().sub(C[Math.max(0,ht-1)]).normalize(),wt=new lt(-gt.y,gt.x);nt.push(C[ht].clone().addScaledVector(wt,.35)),Q.push(C[ht].clone().addScaledVector(wt,-.08))}const tt=new Jn([...nt,...Q.reverse()]),rt=new Zi(tt,{depth:X,bevelEnabled:!1});rt.rotateX(Math.PI/2),rt.translate(0,k+X/2,0),c(rt,ct)}const E=[.7,.62,.55,.48,.43,.52,.59],T=[.3,.41,.52,.61,.46,.36,.57];for(const Z of[!1,!0])for(let ut=0;ut<6;ut++){const dt=ut<3?p:f,k=Z?dt.rearInside:dt.inside,X=Z?dt.rearEdgeInside:dt.edgeInside,ct=k.reduce((Mt,Nt,C)=>Mt+(C?Nt.distanceTo(k[C-1]):0),0),pt=1-(54-dt.curveEnd)/ct,mt=1.1+ut*4.8;for(const[Mt,Nt]of[[.25,n[0]],[.68,n[1]]])ut>=4?(v(k,0,.65,mt+Mt,.34,Nt),v(k,pt,1,mt+Mt,.34,Nt)):ut<3&&v(k,0,1,mt+Mt,.34,Nt);for(let Mt=2;Mt<9;Mt++){const Nt=mt+.34+Mt*.44;ut>=3?(v(k,0,E[(Mt+ut)%E.length],Nt,.355,n[(Mt+ut)%4]),Mt===8&&v(k,pt,1,Nt,.355,n[0])):v(k,T[(Mt+ut)%T.length],1,Nt,.355,n[(Mt+ut)%4])}if(ut>=3&&ut<5?(v(k,0,.62,mt+4.3,.355,n[0]),v(k,pt,1,mt+4.3,.355,n[0])):ut<3&&v(k,0,1,mt+4.3,.355,n[0]),ut===3)for(let Mt=0;Mt<3;Mt++)v(X,0,1,15.65+Mt*.41,.34,n[Mt]);ut===5&&(v(X,0,1,30.18,.35,n[0]),v(X,0,1,30.59,.35,n[1]))}const P=e("#223f45",{metalness:.45,roughness:.2}),R=(Z,ut,dt,k,X,ct,pt,mt=0)=>{h(Z,ut,dt,k,X,ct,pt,mt),h(-Z,ut,-dt,k,X,ct,pt,mt+Math.PI)},S=new $s(new lt(15,25),new lt(15,11),new lt(30,4),new lt(41,4));for(let Z=0;Z<4;Z++){const ut=.45+Z*.075,dt=S.getPoint(ut),k=S.getTangent(ut),X=new lt(-k.y,k.x);dt.addScaledVector(X,.16);const ct=-Math.atan2(k.y,k.x);R(dt.x,2.65,dt.y,1.9,3.1,.13,P,ct);const pt=dt.clone().addScaledVector(k,-.93).addScaledVector(X,.08);R(pt.x,2.65,pt.y,.075,3.1,.12,s,ct);const mt=dt.clone().addScaledVector(k,.25).addScaledVector(X,.13);R(mt.x,2.6,mt.y,.045,.65,.09,a,ct)}const M=e("#b7b9af",{roughness:.95});M.name="entrance_steps";for(let Z=0;Z<4;Z++){const ut=.14+Z*.65,dt=ut+.65,k=[],X=(Nt,C)=>{const nt=S.getPoint(Nt),Q=S.getTangent(Nt);return nt.addScaledVector(new lt(-Q.y,Q.x),C)};k.push(new lt(p.frontEnd.x+dt,p.frontEnd.y));for(let Nt=0;Nt<=48;Nt++)k.push(X(Nt/48,dt));for(let Nt=48;Nt>=0;Nt--)k.push(X(Nt/48,ut));k.push(new lt(p.frontEnd.x+ut,p.frontEnd.y));const ct=new Jn(k),pt=1.1-Z*.07,mt=new Zi(ct,{depth:pt-.82,bevelEnabled:!1,steps:1});mt.rotateX(Math.PI/2),mt.translate(0,pt,0);const Mt=mt.clone().rotateY(Math.PI);c(mt,M),c(Mt,M)}y.forEach(([Z,ut,dt,k],X)=>{h(Z,31.45,ut,dt,2.1,k,o),h(Z,32.55,ut,dt+.3,.13,k+.3,a);const ct=X%2?-1:1;for(let pt=0;pt<7;pt++)h(Z,30.8+pt*.23,ut+ct*(k/2+.025),dt*.7,.06,.06,s)});const U=new ml(g,32);U.rotateX(Math.PI/2),U.translate(0,28.6,0),l[2].side=nn,c(U,l[2]);const B=g.getPoints(32);for(let Z=0;Z<B.length-1;Z++){const ut=B[Z],dt=B[Z+1],k=-Math.atan2(dt.y-ut.y,dt.x-ut.x);h((ut.x+dt.x)/2,29.5,(ut.y+dt.y)/2,ut.distanceTo(dt)+.03,1.75,.18,a,k),d(new L(ut.x,30.44,ut.y),new L(dt.x,30.44,dt.y),.09,s)}const V=[new L(-15,28.69,-8),new L(15,28.69,-8),new L(0,28.69,13)];for(let Z=1;Z<15;Z++){const ut=Z/15;for(let dt=0;dt<3;dt++){const k=V[dt].clone().lerp(V[(dt+1)%3],ut),X=V[dt].clone().lerp(V[(dt+2)%3],ut);d(k,X,.045,s)}}for(const[Z,ut]of t){const dt=eh(ut);ut.forEach(X=>X.dispose());const k=new ee(dt,Z);k.castShadow=!0,k.receiveShadow=!0,i.add(k)}const K=document.createElement("canvas");K.width=1024,K.height=384;const W=K.getContext("2d");W.fillStyle="#eaf0df",W.textAlign="center",W.textBaseline="middle",W.font='600 178px "Microsoft YaHei", sans-serif',W.fillText("图书馆",512,145),W.font="62px Georgia, serif",W.fillText("L I B R A R Y",512,295);const z=new dl(K);z.colorSpace=Ne;const J=new sr({map:z,transparent:!0,depthWrite:!1}),j=new ee(new Qn(7.3,2.74),J),ot=f.frontEnd.clone().sub(f.frontStart).normalize(),yt=new lt(-ot.y,ot.x),Rt=12.3,zt=f.frontStart.y+(Rt-f.frontStart.x)*(f.frontEnd.y-f.frontStart.y)/(f.frontEnd.x-f.frontStart.x);return j.position.set(Rt+yt.x*.38,28.4,zt+yt.y*.38),j.rotation.y=-Math.atan2(ot.y,ot.x),j.scale.setScalar(1.18),i.add(j),i.userData.setNight=Z=>{l.forEach((ut,dt)=>{ut.emissiveIntensity=Z?.35+dt*.055:0,ut.envMapIntensity=Z?.55:1.3})},i.userData.anchors=[{title:"红陶横带",subtitle:"错落叠放的书页",position:new L(-31,23,36.8)},{title:"弧形幕墙",subtitle:"两组体块柔和相接",position:new L(24,16.2,12)},{title:"中庭天窗",subtitle:"屋顶采光结构",position:new L(0,30.6,0)}],i}function k_(){const i=new Fe;i.name="校园景观";const t={stone:new _e({color:"#d6d5cb",roughness:.91}),pale:new _e({color:"#ecece3",roughness:.85}),edge:new _e({color:"#bec6bc",roughness:.95}),grass:new _e({color:"#8faaa0",roughness:1}),grassLight:new _e({color:"#a3b8a0",roughness:1}),soil:new _e({color:"#526d5d",roughness:1}),bark:new _e({color:"#7d7766",roughness:1}),leaf:new _e({color:"#779788",roughness:1}),leafLight:new _e({color:"#92aa8d",roughness:1}),leafDark:new _e({color:"#638579",roughness:1}),metal:new _e({color:"#4b625b",roughness:.65}),wood:new _e({color:"#9a8b72",roughness:.9}),light:new _e({color:"#f6f4db",emissive:"#f1d7a1",emissiveIntensity:.1,roughness:.5}),water:new _e({color:"#93b5b3",roughness:.23,metalness:.25})};t.light.name="landscape_lamps",t.water.name="landscape_water";const e=new Map,n=new Me,r=new hn(1,1,1),s=new js(1,9,7),a=new Ir(1,1,1,7);function o(u,_,x=[0,0,0],v=[1,1,1],E=[0,0,0]){n.position.set(...x),n.scale.set(...v),n.rotation.set(...E),n.updateMatrix();const T=(u.index?u.toNonIndexed():u.clone()).applyMatrix4(n.matrix);e.has(_)||e.set(_,[]),e.get(_).push(T)}const l=(u,_,x,v,E,T,P,R=0)=>o(r,u,[_,x,v],[E,T,P],[0,R,0]);function c(u,_,x,v){const E=-u/2,T=-_/2,P=new Jn;P.moveTo(E+x,T),P.lineTo(E+u-x,T),P.quadraticCurveTo(E+u,T,E+u,T+x),P.lineTo(E+u,T+_-x),P.quadraticCurveTo(E+u,T+_,E+u-x,T+_),P.lineTo(E+x,T+_),P.quadraticCurveTo(E,T+_,E,T+_-x),P.lineTo(E,T+x),P.quadraticCurveTo(E,T,E+x,T);const R=new Zi(P,{depth:v,bevelEnabled:!1,curveSegments:12});return R.rotateX(-Math.PI/2),R}o(c(184,146,5,1.9),t.edge,[0,-1.8,0]),o(c(183.5,145.5,5,.16),t.pale,[0,.1,0]),o(c(180,142,4.5,.04),t.stone,[0,.26,0]),l(t.pale,0,.53,0,117,.54,87),l(t.stone,0,.8,0,114,.04,84);const h=new _e({color:"#6f9274",roughness:1});h.name="foundation_lawn";const d=[[-20.725,36.45,71.45,2],[55.45,-15.5,2,43.9],[49.175,5.45,14.55,2],[16.35,36.245,3.1,2.25]];for(const[u,_,x,v]of d)for(const E of[1,-1])l(t.edge,E*u,.86,E*_,x+.24,.08,v+.24),l(t.soil,E*u,.885,E*_,x,.04,v),l(h,E*u,.913,E*_,x-.08,.035,v-.08);for(let u=-58;u<=58;u+=4)l(t.edge,u,.826,45.5,.035,.008,6.8),l(t.edge,u,.289,-48.5,.035,.008,7.2);for(const u of[42.5,44.5,46.5,48.5])l(t.edge,0,.826,u,115,.008,.035);const f=[[-49,39],[-5,37],[46,43]];for(let u=0;u<3;u++){const _=53+u*6,x=.78-u*.16;for(const[v,E]of f)l(t.pale,v,x/2+.15,_,E+.4,x-.26,4.8),l(u%2?t.grassLight:t.grass,v,x+.015,_-.05,E,.06,4.35),l(t.edge,v,x-.045,_+2.42,E+.4,.11,.06);for(const v of[-27.5,19])for(let E=0;E<3;E++)l(t.pale,v,x-.04-E*.052,_-1.65+E*1.35,4.4,.12,1.4)}l(t.grassLight,73.5,.34,-3,23,.12,116),l(t.grass,-74,.34,-1,24,.12,115),l(t.grass,0,.34,-61,113,.12,14),l(t.pale,0,.39,-61,4,.12,14);for(const u of[-61,61])for(let _=-59;_<=47;_+=4)l(t.edge,u,.293,_,5,.006,.03);o(c(15.5,59,6,.1),t.pale,[-78.5,.35,-4]),o(c(14.5,57.8,5.8,.04),t.water,[-78.5,.44,-4]);for(let u=0;u<5;u++)l(t.pale,-73+u*.18,.49,-23+u*10,3.8,.09,1.55,-.15+u*.045);function p(u){return Math.sin(u*127.1+311.7)*43758.5453%1}[[-81,-53],[-69,-54],[-48,-61],[-29,-61],[-10,-62],[11,-61],[32,-60],[51,-60],[73,-54],[75,-36],[74,-16],[76,5],[74,25],[76,43],[75,61],[-78,39],[-72,54],[-73,65],[-54,66],[-38,53],[38,53],[59,65],[-88,18],[-88,-10],[-87,-34],[56,-47]].forEach(([u,_],x)=>{const v=Math.abs(p(x)),E=4.4+v*2.8,T=E*.55,P=_>49&&Math.abs(u)<70?.8-Math.floor((_-50)/6)*.16:.42;o(a,t.bark,[u,P+T/2,_],[.11+v*.035,T,.11+v*.035]);const R=(x%2?1:-1)*.25;o(a,t.bark,[u+R,P+T*.87,_+.15],[.06,T*.6,.06],[0,.35,R]);const S=[t.leaf,t.leafLight,t.leafDark];for(let U=0;U<5;U++){const B=U*2.399+x*.7,V=U===0?0:.8+v*.35;o(s,S[(x+U)%3],[u+Math.cos(B)*V,P+E-1+Math.sin(U*1.8)*.5,_+Math.sin(B)*V],[1.05+v*.32,1.55+v*.5,.95+v*.3],[0,B,(U%2?1:-1)*.13])}const M=new Ir(.75,.75,.035,16);o(M,t.soil,[u,P+.02,_]),M.dispose()});function y(u,_,x=0){const v=Math.cos(x),E=Math.sin(x),T=(P,R,S,M,U,B,V)=>l(P,u+R*v+M*E,S,_-R*E+M*v,U,B,V,x);for(let P=0;P<3;P++)T(t.wood,0,.94,-.25+P*.24,3.8,.12,.17);T(t.wood,0,1.43,-.38,3.8,.45,.11);for(const P of[-1.35,1.35])T(t.metal,P,.65,0,.1,.59,.72),T(t.metal,P,1.1,-.38,.09,.96,.09)}[[-43,48,0],[43,48,0],[-47,-49,Math.PI],[43,-49,Math.PI],[61,17,Math.PI/2],[-62,-17,-Math.PI/2]].forEach(u=>y(...u));function m(u,_){o(a,t.metal,[u,2.45,_],[.07,4.2,.07]),l(t.metal,u+.45,4.53,_,1.05,.09,.28),l(t.light,u+.62,4.47,_,.64,.045,.21),l(t.metal,u,.48,_,.31,.18,.31)}[[-59,49],[59,49],[-59,-49],[59,-49],[61,-25],[61,25],[-61,25],[-61,-25],[18,69],[-28,69]].forEach(u=>m(...u));for(const[u,_]of e){const x=eh(_,!1);if(x){const v=new ee(x,u);v.name=`景观_${Object.entries(t).find(([,E])=>E===u)?.[0]}`,v.castShadow=!["water","grass","grassLight","light"].some(E=>t[E]===u),v.receiveShadow=!0,i.add(v)}_.forEach(v=>v.dispose())}return r.dispose(),s.dispose(),a.dispose(),i.userData.lampMaterial=t.light,i.userData.setNight=u=>{t.light.emissiveIntensity=u?2.5:.1,t.water.color.set(u?"#577a83":"#93b5b3")},i}const Ns={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class or{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const H_=new gl(-1,1,1,-1,0,1);class V_ extends we{constructor(){super(),this.setAttribute("position",new ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ge([0,2,0,0,2,0],2))}}const G_=new V_;class yl{constructor(t){this._mesh=new ee(G_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,H_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class W_ extends or{constructor(t,e="tDiffuse"){super(),this.textureID=e,this.uniforms=null,this.material=null,t instanceof He?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Dr.clone(t.uniforms),this.material=new He({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new yl(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jc extends or{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const r=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class X_ extends or{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class q_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new lt);this._width=n.width,this._height=n.height,e=new _n(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Bn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new W_(Ns),this.copyPass.material.blending=On,this.clock=new Of}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jc!==void 0&&(a instanceof jc?n=!0:a instanceof X_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Y_ extends or{constructor(t,e,n=null,r=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Gt}render(t,e,n){const r=t.autoClear;t.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=r}}const $_={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Gt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class rr extends or{constructor(t,e=1,n,r){super(),this.strength=e,this.radius=n,this.threshold=r,this.resolution=t!==void 0?new lt(t.x,t.y):new lt(256,256),this.clearColor=new Gt(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new _n(s,a,{type:Bn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new _n(s,a,{type:Bn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const f=new _n(s,a,{type:Bn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),a=Math.round(a/2)}const o=$_;this.highPassUniforms=Dr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new He({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Dr.clone(Ns.uniforms),this.blendMaterial=new He({uniforms:this.copyUniforms,vertexShader:Ns.vertexShader,fragmentShader:Ns.fragmentShader,blending:Os,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Gt,this._oldClearAlpha=1,this._basic=new sr,this._fsQuad=new yl(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),r=Math.round(e/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.invSize.value=new lt(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,e,n,r,s){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=rr.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=rr.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this._fsQuad.render(t),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(n),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=a}_getSeparableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new He({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new He({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}rr.BlurDirectionX=new lt(1,0);rr.BlurDirectionY=new lt(0,1);const Es={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class j_ extends or{constructor(){super(),this.uniforms=Dr.clone(Es.uniforms),this.material=new Af({name:Es.name,uniforms:this.uniforms,vertexShader:Es.vertexShader,fragmentShader:Es.fragmentShader}),this._fsQuad=new yl(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===uu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===du?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ko?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===pu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===mu?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===fu&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Zc=[["#e4d6b8","#283d38","#9c6246"],["#963f32","#f4e7c8","#d6ac67"],["#233c52","#f0dfbb","#bc8d50"],["#d9a855","#243e3d","#b14834"],["#ece7d8","#344f63","#a85640"],["#536850","#f4e9cc","#c19a58"],["#664b63","#f4e4cd","#bf9c69"],["#d46f4a","#2b3333","#f3d9a5"]];function Z_(i){let t=2166136261;for(const e of String(i))t=Math.imul(t^e.charCodeAt(0),16777619);return t>>>0}function Wo(i,t){const e=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(i,t);return e.width=i,e.height=t,e}function Xo(i){const t=new dl(i);return t.colorSpace=Ne,t.anisotropy=4,t}function qo(i,t,e,n=8){const r=[];let s="";for(const a of String(t||""))i.measureText(s+a).width>e&&s?(r.push(s),s=a):s+=a;return s&&r.push(s),r.slice(0,n)}function K_(i,t){for(let e=62;e>=28;e-=2){i.font=`600 ${e}px "Noto Serif SC", "Songti SC", SimSun, Georgia, serif`;const n=qo(i,t,395);if(n.length*e*1.3<=315)return{a:n,size:e}}return{a:qo(i,t,395),size:28}}function J_(i){const t=Z_(i.id||i.title),e=Zc[t%Zc.length],n=i.coverColor||e[0],r=e[1],s=e[2],a=Wo(512,736),o=a.getContext("2d");o.fillStyle=n,o.fillRect(0,0,512,736);const l=o.createLinearGradient(0,0,512,0);l.addColorStop(0,"rgba(0,0,0,.22)"),l.addColorStop(.07,"rgba(255,255,255,.06)"),l.addColorStop(.12,"rgba(0,0,0,.07)"),l.addColorStop(.96,"rgba(255,255,255,.015)"),l.addColorStop(1,"rgba(0,0,0,.1)"),o.fillStyle=l,o.fillRect(0,0,512,736),o.strokeStyle=r,o.lineWidth=1.2,o.globalAlpha=.45,o.strokeRect(32,30,448,677),o.globalAlpha=1,o.fillStyle=r,o.font='17px "Microsoft YaHei",sans-serif',o.fillText(String(i.category||"").slice(0,22),52,70),o.fillStyle=s,o.fillRect(51,102,48,4),o.strokeStyle=s,o.lineWidth=2,o.globalAlpha=.4;const c=t%4;if(c===0)for(let g=0;g<8;g++)o.beginPath(),o.arc(367,520,32+g*14,-2.7,1.2),o.stroke();else if(c===1)for(let g=0;g<7;g++)o.beginPath(),o.moveTo(50,458+g*18),o.bezierCurveTo(220,575+g*7,270,430+g*8,460,565+g*9),o.stroke();else if(c===2)for(let g=0;g<6;g++)o.save(),o.translate(350,520),o.rotate(g*.19),o.strokeRect(-65,-65,130,130),o.restore();else for(let g=0;g<10;g++)o.beginPath(),o.moveTo(55+g*39,550),o.lineTo(135+g*39,440),o.stroke();o.globalAlpha=1,o.fillStyle=r;const h=K_(o,i.title||"");h.a.forEach((g,y)=>o.fillText(g,53,176+y*h.size*1.3)),o.font='23px "Microsoft YaHei",sans-serif',qo(o,i.author||"",395,2).forEach((g,y)=>o.fillText(g,54,622+y*31)),o.globalAlpha=.65,o.fillRect(54,681,402,1),o.globalAlpha=1,o.font="13px Georgia,serif",o.fillText("BUCT / CHANGPING LIBRARY",54,699);const d=Wo(112,736),f=d.getContext("2d");f.fillStyle=n,f.fillRect(0,0,112,736),f.fillStyle="rgba(0,0,0,.17)",f.fillRect(0,0,12,736),f.fillRect(102,0,10,736),f.strokeStyle=s,f.lineWidth=3,f.strokeRect(20,30,72,676),f.save(),f.translate(61,355),f.rotate(-Math.PI/2),f.fillStyle=r,f.font='29px "Noto Serif SC",SimSun,serif';let p=String(i.title||"");for(;f.measureText(p).width>520&&p.length>1;)p=p.slice(0,-1);return f.textAlign="center",f.fillText(p,0,0),f.restore(),f.fillStyle=r,f.font="16px Georgia,serif",f.textAlign="center",f.fillText("BUCT",56,666),{cover:Xo(a),spine:Xo(d),color:n,dark:r,accent:s}}function Q_(){const i=Wo(256,128),t=i.getContext("2d");t.fillStyle="#e9e3d2",t.fillRect(0,0,256,128);for(let n=0;n<128;n+=3)t.fillStyle=n%9===0?"rgba(103,85,63,.24)":"rgba(130,112,83,.11)",t.fillRect(0,n,256,1);const e=Xo(i);return e.wrapS=e.wrapT=Bs,e}const tv={活着:{lines:["人是为活着本身而活着的，","而不是为了活着之外的任何事物所活着。"],sourceLabel:"《活着》自序 · 节选",sourceUrl:"https://www.chinawriter.com.cn/n1/2016/1230/c404014-28989133.html"},许三观卖血记:{lines:["一盘炒猪肝，二两黄酒，","黄酒给我温一温。"],sourceLabel:"《许三观卖血记》第三章 · 节选",sourceUrl:"https://project.zo.uni-heidelberg.de/DACHS_Leiden/archive/leiden/poetry/20040712/white-collar.net/wx_hsl/yuhua/yh_xsg/yuhua_03.htm"},在细雨中呼喊:{lines:["我不再装模作样地拥有很多朋友，","而是回到了孤单之中。"],sourceLabel:"《在细雨中呼喊》 · 短句节选",sourceUrl:"https://www.chinawriter.com.cn/n1/2023/0522/c404030-32691531.html"},挪威的森林:{lines:["死并非生的对立面，","而作为生的一部分永存。"],sourceLabel:"《挪威的森林》 · 译文节选",sourceUrl:"https://cuhk.edu.hk/bookclub/Handout/090424.pdf"},海边的卡夫卡:{lines:["成为另外一个人不容易，","成为另一个名字并不难。"],sourceLabel:"《海边的卡夫卡》第五章 · 译文节选",sourceUrl:"https://flc.io/kafka-on-the-shore/"},且听风吟:{lines:["完美的文章并不存在，","就像完美的绝望并不存在一样。"],sourceLabel:"《且听风吟》开篇 · 译文节选",sourceUrl:"https://culture.people.com.cn/n/2013/0313/c22219-20779014.html"},百年孤独:{lines:["过去都是假的，","回忆是一条没有归途的路。"],sourceLabel:"《百年孤独》 · 译文节选",sourceUrl:"https://tsg.gdsspt.edu.cn/info/1036/1225.htm"},霍乱时期的爱情:{lines:["一对恩爱夫妻最重要的不是幸福，","而是稳定的关系。"],sourceLabel:"《霍乱时期的爱情》 · 译文节选",sourceUrl:"https://www.gzbookcenter.com/nd.jsp?groupId=-1&id=103"},三体:{lines:["不要回答！","你们是虫子。"],sourceLabel:"《三体》 · 经典短句",sourceUrl:"https://www.luogu.com/article/iwojz2pb"},流浪地球:{lines:["我没见过黑夜，我没见过星星，","我没见过春天、秋天和冬天。"],sourceLabel:"《流浪地球》小说开篇 · 节选",sourceUrl:"https://www.chinawriter.com.cn/n1/2021/1012/c404080-32250677.html"},撒哈拉的故事:{lines:["我就是要你‘你行你素’，","失去了你的个性和作风，我何必娶你呢！"],sourceLabel:"《撒哈拉的故事》 · 短句节选",sourceUrl:"https://ibooks.org.cn/archives/6005"},梦里花落知多少:{lines:["因为幸福满溢，","我怕得悲伤。"],sourceLabel:"《梦里花落知多少》同名篇 · 节选",sourceUrl:"https://jxgl.smu.edu.cn/info/1026/3616.htm"}},ev={1984:{lines:["战争即和平。","自由即奴役。无知即力量。"],sourceLabel:"《1984》第一部第一章 · 短句节选",sourceUrl:"https://www.marxists.org/chinese/reference-books/orwell-1984/01.htm"},人类简史:{lines:["信任正是所有金钱形式最基本的原料。","金钱正是有史以来最普遍也最有效的互信系统。"],sourceLabel:"《人类简史》· 金钱的味道 · 短句节选",sourceUrl:"https://book.douban.com/subject/36077941/blockquotes"},未来简史:{lines:["对现代人来说，","死亡是一个我们能够也应该解决的技术问题。"],sourceLabel:"《未来简史》第一章 · 短句节选",sourceUrl:"https://www.xyyuedu.com/kepushuji/weilaijianshi/265665_2.html"},月亮与六便士:{lines:["我必须画画，","就像溺水的人必须挣扎。"],sourceLabel:"《月亮与六便士》· 短句节选",sourceUrl:"https://www.qlit.edu.cn/uploads/file/20231218/1702885288666897.pdf"},局外人:{lines:["今天，妈妈死了，","也许是在昨天，我搞不清。"],sourceLabel:"《局外人》开篇 · 短句节选",sourceUrl:"https://bjqn-app.bjd.com.cn/content/s69ea6dfde4b0cd719ea1065d.html"},动物庄园:{lines:["所有动物一律平等，","但有些动物比其他动物更加平等。"],sourceLabel:"《动物庄园》第十章 · 原文短句中译",sourceUrl:"https://www.orwellfoundation.com/the-orwell-youth-prize/for-young-writers/george-orwell-fairness/"},围城:{lines:["城外的人想冲进去，","城里的人想逃出来。"],sourceLabel:"《围城》第二章 · 短句节选",sourceUrl:"https://news.sina.cn/2019-04-08/detail-ihvhiqax0943963.d.html"},平凡的世界:{lines:["生活不能等待别人来安排，","要自己去争取与奋斗。"],sourceLabel:"《平凡的世界》· 短句节选",sourceUrl:"https://paper.people.com.cn/rmrbhwb/page/2017-02/09/09/rmrbhwb2017020909.pdf"},白鹿原:{lines:["房是招牌地是累，","攒下的银钱催命的鬼。"],sourceLabel:"《白鹿原》· 朱先生语 · 短句节选",sourceUrl:"https://www.chinawriter.com.cn/n1/2018/0428/c404014-29956665.html"},解忧杂货店:{lines:["正因为是一张白纸，","才可以随心所欲地描绘地图，一切全在你自己。"],sourceLabel:"《解忧杂货店》末封回信 · 短句节选",sourceUrl:"https://zgkdb.ustc.edu.cn/download/587"},白夜行:{lines:["我的天空里没有太阳，","总是黑夜，但并不暗，因为有东西代替了太阳。"],sourceLabel:"《白夜行》· 唐泽雪穗语 · 短句节选",sourceUrl:"https://www.view.sdu.edu.cn/info/1017/74860.htm"},沉默的大多数:{lines:["我活在世上，无非想要明白些道理，","遇见些有趣的事。"],sourceLabel:"《沉默的大多数》序言 · 短句节选",sourceUrl:"https://lib.zzjc.edu.cn/__local/D/16/2D/B07E386DFA01230D113B61A11B0_49F98466_186C05.pdf?e=.pdf"},万历十五年:{lines:["道德非万能，不能代替技术，","尤不可代替法律。"],sourceLabel:"《万历十五年》附录 · 短句节选",sourceUrl:"https://library.xmu.edu.cn/contentfiles/21DaysReading/lin.pdf"}},nv={中国历代政治得失:{lines:["任何一制度之创立，必然有其外在的需要，","必然有其内在的用意。"],sourceLabel:"《中国历代政治得失》前言 · 节选",sourceUrl:"https://github.com/HarborLibrary/Chinese-History/blob/master/%E9%92%B1%E7%A9%86%EF%BC%9A%E4%B8%AD%E5%9B%BD%E5%8E%86%E4%BB%A3%E6%94%BF%E6%B2%BB%E5%BE%97%E5%A4%B1.txt"},乡土中国:{lines:["从基层上看去，中国社会是乡土性的。","常态的生活是终老是乡。"],sourceLabel:"《乡土中国》乡土本色 · 节选",sourceUrl:"https://mim.zone/bigFiles/PDF/%E4%B9%A1%E5%9C%9F%E4%B8%AD%E5%9B%BD.pdf"},"枪炮、病菌与钢铁":{lines:["各民族历史的差异源于环境的差异，","而非各民族本身的生物差异。"],sourceLabel:"《枪炮、病菌与钢铁》序言 · 原文节译",sourceUrl:"https://pns.hneu.edu.ua/mod/resource/view.php?id=459705"},自私的基因:{lines:["我们是生存机器。","让我们努力传授慷慨和利他主义。"],sourceLabel:"《自私的基因》序言／第1章 · 节译",sourceUrl:"https://www.umass.edu/preferen/gintis/TowardsUnity.pdf"},时间简史:{lines:["究竟是什么赋予方程以生命，","让它们所描述的宇宙得以存在？"],sourceLabel:"《时间简史》结论 · 原文节译",sourceUrl:"https://ftp.uoh.edu.iq/admin/ebooks/70928-stephen-hawking---a-brief-history-of-time.pdf"},"思考，快与慢":{lines:["生活中的任何事，","都没有你正在想它时认为的那么重要。"],sourceLabel:"《思考，快与慢》第38章 · 原文节译",sourceUrl:"https://www.edge.org/response-detail/11984"},经济学原理:{lines:["人们面临权衡取舍。","人们会对激励作出反应。"],sourceLabel:"《经济学原理》第1章 · 原文节译",sourceUrl:"https://www.schmidt-bremen.de/Material/econs/Reader_2024_BIM_Econs1.pdf"},乌合之众:{lines:["群体不善于推理，却急于行动。","群体的力量只擅长破坏。"],sourceLabel:"《乌合之众》导言 · 原文节译",sourceUrl:"https://www.gutenberg.org/cache/epub/445/pg445-images.html"},苏菲的世界:{lines:["你是谁？","世界从何而来？"],sourceLabel:"《苏菲的世界》伊甸园 · 原文节译",sourceUrl:"https://us.macmillan.com/books/9781250860491/sophiesworld/"},艺术的故事:{lines:["其实并没有“艺术”这种东西。","有的只是艺术家。"],sourceLabel:"《艺术的故事》导论 · 原文节译",sourceUrl:"https://www.phaidon.com/en-ca/blogs/phaidon-archive/phaidon-s-15-minute-art-lesson-the-point-and-pitfalls-of-art-by-e-h-gombrich"},C程序设计语言:{lines:["学习一门新编程语言的唯一途径，是用它编写程序。","hello, world"],sourceLabel:"《C程序设计语言》1.1节 · 原文节译",sourceUrl:"https://seriouscomputerist.atariverse.com/media/pdf/book/C%20Programming%20Language%20-%202nd%20Edition%20%28OCR%29.pdf"},代码大全:{lines:["好代码本身就是最好的文档。","改进代码，然后再为它写文档。"],sourceLabel:"《代码大全》第32章 · 原文节译",sourceUrl:"https://aroma.vn/web/wp-content/uploads/2016/11/code-complete-2nd-edition-v413hav.pdf"}},iv={小王子:{lines:["只有用心，才能看得清。","重要的事物用眼睛是看不见的。"],sourceLabel:"《小王子》第二十一章 · 原文节译",sourceUrl:"https://www.kingstone.com.tw/basic/2800000069362/"},老人与海:{lines:["一个人可以被毁灭，","但不能被打败。"],sourceLabel:"《老人与海》 · 短句节选",sourceUrl:"https://lib.csu.edu.cn/xszl/info/1045/1153.htm"},傲慢与偏见:{lines:["有钱的单身汉，","一定需要一位太太。"],sourceLabel:"《傲慢与偏见》第一章 · 原文节译",sourceUrl:"https://www.gutenberg.org/files/1342/1342-h/1342-h.htm"},"简·爱":{lines:["我不是鸟；","也没有罗网能困住我。"],sourceLabel:"《简·爱》第二十三章 · 原文节译",sourceUrl:"https://en.wikisource.org/wiki/Page:Jane_Eyre.djvu/218"},瓦尔登湖:{lines:["我到林中去，","因为我希望有意识地生活。"],sourceLabel:"《瓦尔登湖》我生活的地方；我为何生活 · 原文节译",sourceUrl:"https://www.gutenberg.org/files/205/205-h/205-h.htm"},飞鸟集:{lines:["生如夏花之绚烂，","死如秋叶之静美。"],sourceLabel:"《飞鸟集》第八十二则 · 原文节译",sourceUrl:"https://www.gutenberg.org/ebooks/6524"},道德经:{lines:["道可道，非常道。","名可名，非常名。"],sourceLabel:"《道德经》第一章 · 原文节选",sourceUrl:"https://zh.wikisource.org/wiki/道德經_(王弼本)"},论语:{lines:["学而时习之，不亦说乎？","有朋自远方来，不亦乐乎？"],sourceLabel:"《论语》学而第一 · 原文节选",sourceUrl:"https://ctext.org/analects/xue-er/zhs"},庄子:{lines:["吾生也有涯，而知也无涯。","以有涯随无涯，殆已。"],sourceLabel:"《庄子》养生主第三 · 原文节选",sourceUrl:"https://zh.wikisource.org/wiki/莊子/養生主"},红楼梦:{lines:["满纸荒唐言，一把辛酸泪！","都云作者痴，谁解其中味？"],sourceLabel:"《红楼梦》第一回 · 原文节选",sourceUrl:"https://zh.wikisource.org/wiki/紅樓夢/第001回"},西游记:{lines:["山中无甲子，","寒尽不知年。"],sourceLabel:"《西游记》第一回 · 原文节选",sourceUrl:"https://zh.wikisource.org/wiki/西遊記/第001回"},诗经:{lines:["关关雎鸠，在河之洲。","窈窕淑女，君子好逑。"],sourceLabel:"《诗经》国风·周南·关雎 · 原文节选",sourceUrl:"https://zh.wikisource.org/wiki/詩經/關雎"},人间词话:{lines:["词以境界为最上。","有境界则自成高格，自有名句。"],sourceLabel:"《人间词话》第一则 · 原文节选",sourceUrl:"https://zh.wikisource.org/zh-hans/人間詞話_(1926)"}},rv={...tv,...ev,...nv,...iv};function sv(i={}){const t=String(i.title||"未命名图书"),e=String(i.author||""),n=rv[t];return n?{title:t,author:e,kind:"quote",lines:[...n.lines],sourceLabel:n.sourceLabel,sourceUrl:n.sourceUrl}:{title:t,author:e,kind:"missing",lines:["这本书暂未收录经核实的原文摘句。","可在摘句资料中补充原文与出处。"],sourceLabel:"待补充原文摘句"}}function Ha(i,t,e){const n=[];let r="";for(const s of String(t))r&&i.measureText(r+s).width>e?(n.push(r),r=s):r+=s;return r&&n.push(r),n}function Kc(i,t){const e=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(768,1100);e.width=768,e.height=1100;const n=e.getContext("2d");n.fillStyle="#efe9d9",n.fillRect(0,0,768,1100);const r=n.createLinearGradient(0,0,768,0);r.addColorStop(0,t===0?"#eee8d9":"#cdc6b5"),r.addColorStop(.08,"#eee8db"),r.addColorStop(.9,"#eee8db"),r.addColorStop(1,t===0?"#cdc6b5":"#eee8d9"),n.fillStyle=r,n.fillRect(0,0,768,1100),n.fillStyle="#826c4e",n.font='20px "Microsoft YaHei",sans-serif',n.fillText(i.kind==="quote"?"经典摘句 · WORDS TO KEEP":"摘句待补充 · WORDS TO COME",76,92),n.fillStyle="#263b3b",n.font='54px "Noto Serif SC",SimSun,serif';let s=174;for(const c of Ha(n,i.title,610).slice(0,3))n.fillText(c,76,s),s+=62;n.font='23px "Microsoft YaHei",sans-serif',n.fillStyle="#6b7468",n.fillText(i.author,78,s+8),n.fillStyle="#b19b74",n.fillRect(78,s+45,62,3);const a=Math.ceil(i.lines.length/2),o=t===0?i.lines.slice(0,a):i.lines.slice(a);s=Math.max(365,s+125),n.fillStyle="#172b29";for(const c of o){const h=/[\u3400-\u9fff]/.test(c)?72:c.length>45?48:64;n.font="700 "+h+'px "Microsoft YaHei","PingFang SC",sans-serif';for(const d of Ha(n,c,595))n.fillText(d,80,s),s+=h*1.4;s+=32}n.fillStyle="#767665",n.font='18px "Microsoft YaHei",sans-serif';for(const[c,h]of Ha(n,i.sourceLabel,605).slice(0,3).entries())n.fillText(h,80,954+c*28);n.fillStyle="#a0967d",n.fillRect(78,1034,610,1),n.font="17px Georgia,serif",n.fillText("YUEJING / BUCT",80,1064),n.fillText(t===0?"01":"02",650,1064);const l=new dl(e);return l.colorSpace=Ne,l.anisotropy=4,l}function av(i,t=e=>e){const e=sv(i),n=new Fe;n.name="经典语句内页",n.visible=!1;const r=new Qn(5.65,8.1),s=[Kc(e,0),Kc(e,1)],a=s.map(f=>t(new sr({map:f,color:"#ffffff",side:nn}))),o=new ee(r,a[1]);o.position.z=.592,n.add(o);const l=new Fe;l.position.set(-2.825,0,.58),n.add(l);const c=new ee(r,a[0]);c.position.set(2.825,0,-.012),c.rotation.y=Math.PI,l.add(c);const h=new Fe;h.position.set(-2.825,0,.605),n.add(h);const d=new ee(r,a[1]);return d.position.x=2.825,h.add(d),{group:n,textures:s,content:e,update(f){n.visible=f>.002,l.rotation.y=-Math.PI*f;const p=Ee.smoothstep(f,.24,.94);h.visible=f>.24&&f<.94,h.rotation.y=-Math.PI*p,d.rotation.x=Math.sin(p*Math.PI)*.035},dispose(){n.removeFromParent(),r.dispose(),a.forEach(f=>f.dispose()),s.forEach(f=>f.dispose())}}}const Yo=Math.PI*2,ov=72,lv=144,cv=new L(0,1,0),nh=i=>Ee.clamp(Number(i)||0,0,1),ws=i=>{const t=nh(i);return t*t*(3-2*t)};class Ts extends vn{constructor(t,e,n,r,s,a,o){super(),Object.assign(this,{rx:t,rz:e,height:n,tx:r,tz:s,direction:a,phase:o}),this.arcLengthDivisions=640}getPoint(t,e=new L){const n=-Math.PI/2+this.direction*Yo*t,r=10*Math.sin(n*3+this.phase),s=(this.rx+r)*Math.cos(n),a=(this.rz+r)*Math.sin(n);return e.set(s,this.height+s*this.tx+a*this.tz+3*Math.sin(n*3+this.phase*.7),a)}getTangent(t,e=new L){const n=-Math.PI/2+this.direction*Yo*t,r=Math.sin(n),s=Math.cos(n),a=10*Math.sin(n*3+this.phase),o=30*Math.cos(n*3+this.phase),l=o*s-(this.rx+a)*r,c=o*r+(this.rz+a)*s;return e.set(l,l*this.tx+c*this.tz+9*Math.cos(n*3+this.phase*.7),c).multiplyScalar(this.direction).normalize()}}function uv(){return[new Ts(92,91,21,.045,.025,-1,.2),new Ts(84,100,29,-.04,-.035,1,2),new Ts(105,84,46,.07,-.09,-1,1.2),new Ts(91,108,18,-.035,.025,1,3.8)]}function hv(i,t,e,n,r,s){const a=s.right.copy(t),o=s.normal.crossVectors(a,cv).normalize();return o.x*i.x+o.z*i.z<0&&(a.negate(),o.negate()),s.up.crossVectors(o,a).normalize(),r.setFromRotationMatrix(s.matrix.makeBasis(a,s.up,o)),r.multiply(s.bank.setFromAxisAngle(s.axis,Math.sin(n*Yo*2+e)*.12))}const dv=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Shanghai"});let Jc="",Qc=-1/0;function Va(i){const t=Date.now();return t-Qc>=6e4&&(Jc=dv.format(t),Qc=t),Number(i.status)===1?i.dueDate&&i.dueDate<Jc?"#f26e62":"#e7b45f":"#91bea8"}function oi(i){return i.onBeforeCompile=t=>{t.fragmentShader=t.fragmentShader.replace("#include <opaque_fragment>",`#include <opaque_fragment>
 float paperPeak=max(max(gl_FragColor.r,gl_FragColor.g),gl_FragColor.b);
 if(paperPeak>0.72){
  float paperHighlight=0.72+0.20*(1.0-exp(-(paperPeak-0.72)/0.20));
  gl_FragColor.rgb*=paperHighlight/paperPeak;
 }`)},i.customProgramCacheKey=()=>"yuejing-printed-paper-v1",i}function fv({camera:i,reducedMotion:t=!1}={}){if(!i)throw new Error("createBookWorld requires camera");const e=new Fe;e.name="BUCT book streams";const n=new Fe;e.add(n);const r=uv(),s=r.map(O=>O.getLength()),a=new Map,o=new Map,l=new Set;let c=[],h=!0,d=!1,f=null,p=1,g=0,y=0,m=0,u=!1,_=null;const x=[0,0,0,0],v=Q_(),E=oi(new _e({color:"#eee8d8",map:v,roughness:.92})),T={pages:new hn(5.35,7.72,.94),cover:new hn(5.65,8.1,.085),front:new Qn(5.65,8.1),spine:new hn(.17,8.1,1.13),badge:new js(.23,8,6)},P=new zu(new hn(5.77,8.22,1.2)),R=oi(new sr({map:v,side:nn})),S=new ee(T.front,R);S.visible=!1,e.add(S);const M=new _e({color:"#e9bc6e",emissive:"#b07d2f",emissiveIntensity:.24,roughness:.45,metalness:.5}),U=new _l,B=new Pe,V=new Pe,K=new Pe,W=new Pe,z={right:new L,normal:new L,up:new L,matrix:new se,bank:new Pe,axis:new L(0,0,1)},J=new L,j=new L,ot=new L,yt=new L,Rt=new Pe,zt=new Pe,Z=new an,ut=new L(0,0,-52),dt=new WeakSet,k=new WeakSet,X=new Fe;X.name="focused book in camera space",X.visible=!1,i.add(X);const ct=new Or("#fff0d9",1050,95,2);ct.position.set(-12,15,-24),X.add(ct);const pt=new Or("#dceaff",550,90,2);pt.position.set(15,-4,-28),X.add(pt);const mt=new nr({color:"#e4c487",transparent:!0,opacity:.72}),Mt=new Lr(P,mt);Mt.visible=!1,e.add(Mt);function Nt(O){return JSON.stringify([O.title,O.author,O.category,O.coverColor])}function C(O){const H=J_(O),ft=oi(new _e({map:H.cover,color:"#ffffff",emissiveMap:H.cover,emissive:"#ffffff",emissiveIntensity:.025,roughness:.88,metalness:0,side:nn})),Et=oi(new _e({map:H.spine,color:"#ffffff",roughness:.88})),bt=oi(new _e({map:H.cover,color:"#ffffff",emissiveMap:H.cover,emissive:"#ffffff",emissiveIntensity:.015,roughness:.9}));return{textures:H,front:ft,spine:Et,back:bt,materials:[ft,Et,bt]}}function nt(O){O.materials.forEach(H=>H.dispose()),k.add(O.textures.cover),k.add(O.textures.spine),O.textures.cover.dispose(),O.textures.spine.dispose()}function Q(O,H){const ft=new Fe;ft.name=`Book: ${O.title||O.id}`,ft.userData.bookId=String(O.id);const Et=new ee(T.pages,E);Et.position.x=.06,ft.add(Et);const bt=new ee(T.front,H.front);bt.position.z=.573,ft.add(bt);const Ut=new ee(T.cover,H.back);Ut.position.z=.518,ft.add(Ut);const Qt=new ee(T.cover,H.back);Qt.position.z=-.518,ft.add(Qt);const ne=new ee(T.spine,H.spine);ne.position.x=-2.73,ft.add(ne);const ae=new ee(T.badge,M);ae.position.set(2.35,3.6,.67),ae.visible=l.has(String(O.id)),ft.add(ae),ft.userData.badge=ae;const We=new nr({color:Va(O),transparent:!0,opacity:.48}),Ze=new Lr(P,We);return ft.add(Ze),ft.userData.statusEdge=Ze,ft.traverse(yn=>{yn.isMesh&&(yn.userData.bookId=String(O.id),yn.castShadow=!1,yn.receiveShadow=!1)}),ft}function tt(O){const H=String(O.id),ft=Nt(O);let Et=a.get(H);if(Et){if(Et.fingerprint!==ft){const bt=C(O),Ut=Et.appearance;Et.visual.children[1].material=bt.front,Et.visual.children[2].material=Et.visual.children[3].material=bt.back,Et.visual.children[4].material=bt.spine,Et.appearance=bt,Et.fingerprint=ft,Et.style=-1,_?.id===H&&at(bt),nt(Ut)}}else{const bt=C(O),Ut=Q(O,bt);Et={id:H,record:O,appearance:bt,visual:Ut,fingerprint:ft},a.set(H,Et)}return Et.record=O,Et.visual.userData.statusEdge.material.color.set(Va(O)),_?.id===H&&_.visual.userData.statusEdge.material.color.set(Va(O)),a.delete(H),a.set(H,Et),Et}function rt(){const O=new Set(c.map(H=>H.item.id));_&&O.add(_.id);for(const[H,ft]of a){if(a.size<=lv)break;O.has(H)||(ft.visual.removeFromParent(),ft.visual.userData.statusEdge.material.dispose(),nt(ft.appearance),a.delete(H))}}function ht(O=[]){o.clear(),_&&o.set(_.id,_.item.record);const H=[],ft=new Set;for(const bt of O){if(bt?.id==null)continue;const Ut=String(bt.id);o.set(Ut,bt),ft.has(Ut)||(ft.add(Ut),H.push(bt)),a.has(Ut)&&tt(bt)}for(const bt of c)n.remove(bt.item.visual);const Et=[0,0,0,0];c=H.slice(0,ov).map((bt,Ut)=>{const Qt=tt(bt),ne=Ut%4,ae=Et[ne]++;return n.add(Qt.visual),{item:Qt,lane:ne,trainIndex:ae,index:Ut,position:Qt.visual.position.clone(),quaternion:Qt.visual.quaternion.clone()}}),_&&(_.source=c.find(bt=>bt.item.id===_.id)||null),rt(),I(0)}function gt(O){O?.id!=null&&(o.set(String(O.id),O),(a.has(String(O.id))||_?.id===String(O.id))&&tt(O))}function wt(O=[]){l.clear(),O.forEach(H=>l.add(String(H))),a.forEach(H=>{H.visual.userData.badge.visible=l.has(H.id)}),_&&(_.visual.userData.badge.visible=l.has(_.id))}function Vt(O,{immediate:H=!1}={}){y=O==="gravity"?1:0,(H||t)&&(g=y)}function kt(O){p=nh(O)}function A(){x.fill(0),p=0,f=null,I(0)}function b(O){h=!!O,e.visible=h,X.visible=h&&!!_}function q(O){d=!!O}function it(O){f=O==null?null:String(O)}function _t(O){const H=new Map;return O.traverse(ft=>{!ft.isMesh||ft.material===M||(H.has(ft.material)||H.set(ft.material,oi(ft.material.clone())),ft.material=H.get(ft.material),ft.material.emissiveMap&&(ft.material.emissiveIntensity=.025))}),[...H.values()]}function at(O){_&&(_.materials.forEach(H=>H.dispose()),_.visual.children[0].material=E,_.visual.children[1].material=O.front,_.visual.children[2].material=_.visual.children[3].material=O.back,_.visual.children[4].material=O.spine,_.materials=_t(_.visual))}function Ot(O,H){i.updateWorldMatrix(!0,!1),i.worldToLocal(O),i.getWorldQuaternion(W).invert(),H.premultiply(W)}function Tt(O,H){if(O=String(O),H&&(o.set(O,H),tt(H)),_?.id===O&&_.phase!=="out")return!0;_&&Lt();const ft=a.get(O)||(o.has(O)?tt(o.get(O)):null);if(!ft)return!1;a.delete(O),a.set(O,ft);const Et=c.find(ae=>ae.item.id===O)||null,bt=Q(ft.record,ft.appearance),Ut=_t(bt),Qt=Et?Et.item.visual.getWorldPosition(new L):new L(0,28,82),ne=Et?Et.item.visual.getWorldQuaternion(new Pe):i.getWorldQuaternion(new Pe);return Ot(Qt,ne),bt.position.copy(Qt),bt.quaternion.copy(ne),X.add(bt),X.visible=h,_={id:O,item:ft,source:Et,visual:bt,materials:Ut,phase:"in",progress:0,fromPosition:Qt,fromQuaternion:ne,fromScale:1,rotation:new an(0,.08,0),targetQuaternion:new Pe,reading:null,readProgress:0,readTarget:0},bt.userData.statusEdge.visible=!1,Et&&(Et.item.visual.visible=!1),t&&(_.progress=1),rt(),!0}function Ft(){!_||_.phase==="out"||(_.phase="out",_.progress=0,_.fromPosition=_.visual.position.clone(),_.fromQuaternion=_.visual.quaternion.clone(),_.fromScale=_.visual.scale.x,t&&Lt())}function Lt(){_&&(_.source&&(_.source.item.visual.visible=!0),_.reading?.dispose(),X.remove(_.visual),_.materials.forEach(O=>O.dispose()),_.visual.userData.statusEdge.material.dispose(),_=null,X.visible=!1,Mt.visible=!1)}function xt(O,H){!_||_.phase==="out"||_.readTarget||(_.rotation.y+=(Number(O)||0)*.006,_.rotation.x=Ee.clamp(_.rotation.x+(Number(H)||0)*.006,-1.25,1.25))}function Ct(O){return!_||_.phase==="out"?!1:(O&&!_.reading&&(_.reading=av(_.item.record,oi),_.visual.add(_.reading.group)),_.readTarget=O?1:0,!!_.readTarget)}function F(O){return!_||_.phase==="out"?null:(_.visual.updateWorldMatrix(!0,!1),_.visual.localToWorld(O.set(3.2,_.readTarget?4.6:1.65,.65)))}function D(O,H,ft){const Et=Math.max(1,Math.ceil(H/14)),bt=Math.ceil(H/Et),Ut=Math.floor(O/bt),Qt=O%bt,ne=Math.min(bt,H-Ut*bt),ae=(Qt-(ne-1)/2)*9.4,We=18+Ut*16.4+(t?0:Math.sin(m*.38+O*.9)*.38),Ze=100-25*(1-(ae/67)**2)+Ut%2*1.8;return ft.set(ae,We,Ze)}function N(O){if(!_)return;const H=Ee.lerp(O*.34,Math.PI,_.readProgress),ft=5.65,Et=-ft/2+Math.cos(H)*ft/2,bt=Math.sin(H)*ft/2;for(let Ut=1;Ut<=2;Ut++){const Qt=_.visual.children[Ut];Qt.rotation.y=-H,Qt.position.x=Et,Qt.position.z=(Ut===1?.573:.518)+bt}}function $(O){if(!_)return;_.readProgress=Ee.damp(_.readProgress,_.phase==="out"?0:_.readTarget,t?100:5.5,O),Math.abs(_.readProgress-_.readTarget)<.001&&(_.readProgress=_.readTarget),_.reading?.update(_.readProgress),_.progress=Math.min(1,_.progress+O/(_.phase==="out"?.58:.76));const H=ws(_.progress);if(_.phase==="out")_.source?(yt.copy(_.source.position),Rt.copy(_.source.quaternion)):(yt.set(0,28,82),Rt.identity()),e.localToWorld(yt),e.getWorldQuaternion(B),Rt.premultiply(B),Ot(yt,Rt),_.visual.position.lerpVectors(_.fromPosition,yt,H),_.visual.quaternion.slerpQuaternions(_.fromQuaternion,Rt,H),_.visual.scale.setScalar(Ee.lerp(_.fromScale,1,H)),N(1-H),_.progress>=1&&Lt();else{if(_.visual.position.lerpVectors(_.fromPosition,ut,H),_.targetQuaternion.setFromEuler(_.rotation).slerp(B.identity(),_.readProgress),_.visual.quaternion.slerpQuaternions(_.fromQuaternion,_.targetQuaternion,H),!t&&H<1){const Et=Math.sin(H*Math.PI);_.visual.quaternion.multiply(zt.setFromEuler(Z.set(0,Et*.55,Et*.65)))}const ft=Ee.lerp(1,Ee.lerp(2.34,1.5,_.readProgress),H);_.visual.scale.setScalar(ft),_.visual.position.x+=2.825*_.readProgress*ft,N(ws((H-.65)/.35))}}function I(O=0){if(u)return;O=Math.max(0,Math.min(Number(O)||0,.1)),m+=d?0:O,g+=(y-g)*(t?1:1-Math.exp(-O*4.4)),Math.abs(g-y)<5e-4&&(g=y);let H;for(const bt of c)if(bt.item.id===f){H=bt.lane;break}if(h&&!d&&!t)for(let bt=0;bt<4;bt++)x[bt]+=O*(H===bt?1.5:8+bt*.55);const ft=ws(g),Et=Ee.lerp(1,1.09,g);g>0&&(i.updateWorldMatrix(!0,!1),i.getWorldQuaternion(K));for(const bt of c){const{item:Ut,lane:Qt,trainIndex:ne}=bt;if(g<1){const kn=Qt<2?.5:Qt===2?.36:.64,Hn=s[Qt],xi=Ee.euclideanModulo(p*Hn*kn+x[Qt]-ne*8.7,Hn)/Hn;r[Qt].getPointAt(xi,J),r[Qt].getTangentAt(xi,j),hv(J,j,Qt,xi,V,z),bt.position.copy(J),bt.quaternion.copy(V)}g>0&&(D(bt.index,c.length,ot),g===1?(bt.position.copy(ot),bt.quaternion.copy(K)):(bt.position.lerp(ot,ft),bt.quaternion.slerp(K,ft)));const ae=Ut.visual;ae.position.copy(bt.position),ae.quaternion.copy(bt.quaternion);const We=g>.2?1:ws((p-ne*.027)/.18),Ze=Ut.id===f;ae.scale.setScalar(Math.max(.001,We)*Et*(Ze?1.1:1)),ae.visible=h&&We>.005&&_?.id!==Ut.id;const yn=Ze?1:_?_.id===Ut.id?2:3:0;if(Ut.style!==yn){const kn=_&&_.id!==Ut.id?.35:1;Ut.appearance.front.color.setScalar(kn),Ut.appearance.spine.color.setScalar(kn),Ut.appearance.back.color.setScalar(kn),Ut.appearance.front.emissiveIntensity=Ze?.045:_?.008:.025,ae.userData.statusEdge.material.opacity=Ze?.9:_?.23:.48,Ut.style=yn}}_?.source?(Mt.visible=!1,Mt.position.copy(_.source.position),Mt.quaternion.copy(_.source.quaternion)):Mt.visible=!1,$(O),e.visible=h}async function vt(O,{batchSize:H=8,yieldBatch:ft}={}){if(u)return{textures:0};if(typeof O?.initTexture!="function")throw new TypeError("prepare requires WebGLRenderer.initTexture");const Et=[v],bt=new Set(Et);for(const ne of a.values())for(const ae of[ne.appearance.textures.cover,ne.appearance.textures.spine])bt.has(ae)||(bt.add(ae),Et.push(ae));const Ut=Math.max(1,Math.min(64,Math.floor(Number(H)||8)));let Qt=0;for(let ne=0;ne<Et.length&&!u;ne++){const ae=Et[ne];dt.has(ae)||k.has(ae)||(O.initTexture(ae),dt.add(ae),Qt++,Qt%Ut===0&&ne<Et.length-1&&ft&&await ft())}return{textures:Qt}}function St(O,H=i){if(!h||u)return null;e.updateWorldMatrix(!0,!0),i.updateWorldMatrix(!0,!0),U.setFromCamera(O,H);const ft=_?[_.visual]:c.map(bt=>bt.item.visual).filter(bt=>bt.visible),Et=U.intersectObjects(ft,!0).find(bt=>bt.object.isMesh&&bt.object.visible&&bt.object.userData.bookId!=null);return Et?{id:Et.object.userData.bookId,distance:Et.distance,point:Et.point.clone()}:null}function Pt(){u||(Lt(),u=!0,a.forEach(O=>{O.visual.userData.statusEdge.material.dispose(),nt(O.appearance)}),a.clear(),Object.values(T).forEach(O=>O.dispose()),P.dispose(),E.dispose(),R.dispose(),v.dispose(),M.dispose(),mt.dispose(),i.remove(X),e.removeFromParent(),o.clear(),c=[])}return{group:e,setBooks:ht,updateRecord:gt,setFavorites:wt,setMode:Vt,setEntryProgress:kt,resetEntry:A,setActive:b,setPaused:q,setHovered:it,focus:Tt,clearFocus:Ft,rotateHero:xt,setPagesOpen:Ct,getFocusAnchor:F,prepare:vt,pick:St,update:I,dispose:Pt}}const Xs=Object.freeze(["文学","社科","自然科学","技术","艺术","哲学","其他"]),ih=Object.freeze(["#bba684","#7ba9b9","#82b5a0","#72b6b5","#bd8e93","#9d93bc","#91a597"]),pv={文学:["活着","许三观卖血记","在细雨中呼喊","挪威的森林","海边的卡夫卡","且听风吟","百年孤独","霍乱时期的爱情","三体","流浪地球","撒哈拉的故事","梦里花落知多少","月亮与六便士","局外人","1984","动物庄园","围城","平凡的世界","白鹿原","解忧杂货店","白夜行","沉默的大多数","小王子","老人与海","傲慢与偏见","简·爱","瓦尔登湖","飞鸟集","红楼梦","西游记","诗经","人间词话"],社科:["人类简史","未来简史","万历十五年","中国历代政治得失","乡土中国","枪炮、病菌与钢铁","思考，快与慢","经济学原理","乌合之众"],自然科学:["自私的基因","时间简史"],技术:["C程序设计语言","代码大全"],艺术:["艺术的故事"],哲学:["苏菲的世界","道德经","论语","庄子"]},rh=i=>String(i??"").replace(/[《》\s·•]/g,"").toLocaleLowerCase(),mv=new Map(Object.entries(pv).flatMap(([i,t])=>t.map(e=>[rh(e),i]))),sh=i=>mv.get(rh(i))||null,gv=[{id:"001",title:"活着",author:"余华",status:0,borrower:"张晨阳",contact:"11111111",borrowedAt:"2026-10-03 15:30:00",dueDate:"2026-11-02",returnedAt:"2026-10-11 15:30:00"},{id:"002",title:"许三观卖血记",author:"余华",status:1,borrower:"张晨阳",contact:"11111111",borrowedAt:"2026-10-08 10:00:00",dueDate:"2026-11-07",returnedAt:""},{id:"003",title:"在细雨中呼喊",author:"余华",status:0,borrower:"李雨桐",contact:"22222222",borrowedAt:"2026-10-01 14:30:00",dueDate:"2026-10-31",returnedAt:"2026-10-10 14:30:00"},{id:"004",title:"挪威的森林",author:"村上春树",status:0,borrower:"王子轩",contact:"33333333",borrowedAt:"2026-09-29 13:30:00",dueDate:"2026-10-29",returnedAt:"2026-10-09 13:30:00"},{id:"005",title:"海边的卡夫卡",author:"村上春树",status:1,borrower:"李雨桐",contact:"22222222",borrowedAt:"2026-10-05 08:53:00",dueDate:"2026-11-04",returnedAt:""},{id:"006",title:"且听风吟",author:"村上春树",status:0,borrower:"刘思雨",contact:"abc@mail.com",borrowedAt:"2026-09-27 12:30:00",dueDate:"2026-10-27",returnedAt:"2026-10-08 12:30:00"},{id:"007",title:"百年孤独",author:"加夫列尔·加西亚·马尔克斯",status:1,borrower:"王子轩",contact:"33333333",borrowedAt:"2026-10-02 07:46:00",dueDate:"2026-11-01",returnedAt:""},{id:"008",title:"霍乱时期的爱情",author:"加夫列尔·加西亚·马尔克斯",status:0,borrower:"陈沐阳",contact:"test@mail.com",borrowedAt:"2026-09-25 15:30:00",dueDate:"2026-10-25",returnedAt:"2026-10-07 15:30:00"},{id:"009",title:"三体",author:"刘慈欣",status:1,borrower:"刘思雨",contact:"abc@mail.com",borrowedAt:"2026-09-29 06:39:00",dueDate:"2026-10-29",returnedAt:""},{id:"010",title:"流浪地球",author:"刘慈欣",status:1,borrower:"陈沐阳",contact:"test@mail.com",borrowedAt:"2026-09-26 05:32:00",dueDate:"2026-10-26",returnedAt:""},{id:"011",title:"撒哈拉的故事",author:"三毛",status:0,borrower:"杨若涵",contact:"reader@mail.com",borrowedAt:"2026-09-23 14:30:00",dueDate:"2026-10-23",returnedAt:"2026-10-06 14:30:00"},{id:"012",title:"梦里花落知多少",author:"三毛",status:0,borrower:"张晨阳",contact:"11111111",borrowedAt:"2026-09-21 13:30:00",dueDate:"2026-10-21",returnedAt:"2026-10-05 13:30:00"},{id:"013",title:"人类简史",author:"尤瓦尔·赫拉利",status:1,borrower:"杨若涵",contact:"reader@mail.com",borrowedAt:"2026-09-23 09:25:00",dueDate:"2026-10-23",returnedAt:""},{id:"014",title:"未来简史",author:"尤瓦尔·赫拉利",status:0,borrower:"李雨桐",contact:"22222222",borrowedAt:"2026-09-19 12:30:00",dueDate:"2026-10-19",returnedAt:"2026-10-04 12:30:00"},{id:"015",title:"月亮与六便士",author:"威廉·萨默塞特·毛姆",status:0,borrower:"王子轩",contact:"33333333",borrowedAt:"2026-09-17 15:30:00",dueDate:"2026-10-17",returnedAt:"2026-10-03 15:30:00"},{id:"016",title:"局外人",author:"阿尔贝·加缪",status:1,borrower:"赵俊杰",contact:"11111111",borrowedAt:"2026-09-20 08:18:00",dueDate:"2026-10-20",returnedAt:""},{id:"017",title:"1984",author:"乔治·奥威尔",status:0,borrower:"刘思雨",contact:"abc@mail.com",borrowedAt:"2026-09-15 14:30:00",dueDate:"2026-10-15",returnedAt:"2026-10-02 14:30:00"},{id:"018",title:"动物庄园",author:"乔治·奥威尔",status:1,borrower:"黄诗雅",contact:"22222222",borrowedAt:"2026-09-17 07:11:00",dueDate:"2026-10-17",returnedAt:""},{id:"019",title:"围城",author:"钱钟书",status:0,borrower:"陈沐阳",contact:"test@mail.com",borrowedAt:"2026-09-13 13:30:00",dueDate:"2026-10-13",returnedAt:"2026-10-01 13:30:00"},{id:"020",title:"平凡的世界",author:"路遥",status:1,borrower:"周明远",contact:"33333333",borrowedAt:"2026-09-14 06:04:00",dueDate:"2026-10-14",returnedAt:""},{id:"021",title:"白鹿原",author:"陈忠实",status:0,borrower:"杨若涵",contact:"reader@mail.com",borrowedAt:"2026-09-11 12:30:00",dueDate:"2026-10-11",returnedAt:"2026-09-30 12:30:00"},{id:"022",title:"解忧杂货店",author:"东野圭吾",status:0,borrower:"张晨阳",contact:"11111111",borrowedAt:"2026-09-09 15:30:00",dueDate:"2026-10-09",returnedAt:"2026-09-29 15:30:00"},{id:"023",title:"白夜行",author:"东野圭吾",status:1,borrower:"吴嘉怡",contact:"abc@mail.com",borrowedAt:"2026-09-11 04:57:00",dueDate:"2026-10-11",returnedAt:""},{id:"024",title:"沉默的大多数",author:"王小波",status:0,borrower:"李雨桐",contact:"22222222",borrowedAt:"2026-09-07 14:30:00",dueDate:"2026-10-07",returnedAt:"2026-09-28 14:30:00"},{id:"025",title:"万历十五年",author:"黄仁宇",status:0,borrower:"王子轩",contact:"33333333",borrowedAt:"2026-09-05 13:30:00",dueDate:"2026-10-05",returnedAt:"2026-09-27 13:30:00"},{id:"026",title:"中国历代政治得失",author:"钱穆",status:1,borrower:"徐浩然",contact:"test@mail.com",borrowedAt:"2026-09-08 08:50:00",dueDate:"2026-10-08",returnedAt:""},{id:"027",title:"乡土中国",author:"费孝通",status:0,borrower:"刘思雨",contact:"abc@mail.com",borrowedAt:"2026-09-03 12:30:00",dueDate:"2026-10-03",returnedAt:"2026-09-26 12:30:00"},{id:"028",title:"枪炮、病菌与钢铁",author:"贾雷德·戴蒙德",status:0,borrower:"陈沐阳",contact:"test@mail.com",borrowedAt:"2026-09-17 15:30:00",dueDate:"2026-10-17",returnedAt:"2026-09-25 15:30:00"},{id:"029",title:"自私的基因",author:"理查德·道金斯",status:1,borrower:"孙梦瑶",contact:"reader@mail.com",borrowedAt:"2026-09-05 07:43:00",dueDate:"2026-10-05",returnedAt:""},{id:"030",title:"时间简史",author:"史蒂芬·霍金",status:0,borrower:"杨若涵",contact:"reader@mail.com",borrowedAt:"2026-09-15 14:30:00",dueDate:"2026-10-15",returnedAt:"2026-09-24 14:30:00"},{id:"031",title:"思考，快与慢",author:"丹尼尔·卡尼曼",status:1,borrower:"胡文博",contact:"11111111",borrowedAt:"2026-09-02 06:36:00",dueDate:"2026-10-02",returnedAt:""},{id:"032",title:"经济学原理",author:"N. 格里高利·曼昆",status:0,borrower:"张晨阳",contact:"11111111",borrowedAt:"2026-09-13 13:30:00",dueDate:"2026-10-13",returnedAt:"2026-09-23 13:30:00"},{id:"033",title:"乌合之众",author:"古斯塔夫·勒庞",status:0,borrower:"李雨桐",contact:"22222222",borrowedAt:"2026-09-11 12:30:00",dueDate:"2026-10-11",returnedAt:"2026-09-22 12:30:00"},{id:"034",title:"苏菲的世界",author:"乔斯坦·贾德",status:1,borrower:"林芷晴",contact:"22222222",borrowedAt:"2026-08-30 05:29:00",dueDate:"2026-09-29",returnedAt:""},{id:"035",title:"艺术的故事",author:"E. H. 贡布里希",status:0,borrower:"王子轩",contact:"33333333",borrowedAt:"2026-09-29 15:30:00",dueDate:"2026-10-29",returnedAt:"2026-10-11 15:30:00"},{id:"036",title:"C程序设计语言",author:"Brian W. Kernighan",status:0,borrower:"刘思雨",contact:"abc@mail.com",borrowedAt:"2026-09-27 14:30:00",dueDate:"2026-10-27",returnedAt:"2026-10-10 14:30:00"},{id:"037",title:"代码大全",author:"史蒂夫·迈克康奈尔",status:0,borrower:"陈沐阳",contact:"test@mail.com",borrowedAt:"2026-09-25 13:30:00",dueDate:"2026-10-25",returnedAt:"2026-10-09 13:30:00"}],ah=[{id:"038",title:"小王子",author:"安托万·德·圣埃克苏佩里",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"039",title:"老人与海",author:"欧内斯特·海明威",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"040",title:"傲慢与偏见",author:"简·奥斯汀",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"041",title:"简·爱",author:"夏洛蒂·勃朗特",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"042",title:"瓦尔登湖",author:"亨利·戴维·梭罗",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"043",title:"飞鸟集",author:"拉宾德拉纳特·泰戈尔",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"044",title:"道德经",author:"老子",category:"哲学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"045",title:"论语",author:"孔子弟子及再传弟子",category:"哲学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"046",title:"庄子",author:"庄周及其后学",category:"哲学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"047",title:"红楼梦",author:"曹雪芹",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"048",title:"西游记",author:"吴承恩",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"049",title:"诗经",author:"佚名",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},{id:"050",title:"人间词话",author:"王国维",category:"文学",status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""}],Ga=[...gv,...ah],tu="YueJingCatalog50V1",Wa="YueJingLibraryV1",oh=Xs,Un=i=>JSON.parse(JSON.stringify(i)),$e=i=>String(i??"").toLocaleLowerCase();function bl(i=new Date){const t=new Date(i);if(Number.isNaN(t.getTime()))throw new Error("日期无效");return`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}-${String(t.getDate()).padStart(2,"0")}`}function Js(i){if(!/^\d{4}-\d{2}-\d{2}$/.test(i))return!1;const[t,e,n]=i.split("-").map(Number),r=new Date(Date.UTC(t,e-1,n));return t>=1900&&t<=9999&&r.getUTCFullYear()===t&&r.getUTCMonth()===e-1&&r.getUTCDate()===n}function _v(i=30,t=new Date){const e=new Date(t);return e.setDate(e.getDate()+i),bl(e)}function eu(i,t=new Date){return i.status===1&&Js(i.dueDate)&&i.dueDate<bl(t)}function nu(i,t=!1){if(!i)return"暂无记录";if(Js(i))return i.replace(/-/g,".");const e=new Date(i);return Number.isNaN(e.getTime())?String(i):new Intl.DateTimeFormat("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit",...t?{hour:"2-digit",minute:"2-digit"}:{}}).format(e)}function vv(i){const t=sh(i);return t||(/自然科学|物理|化学|生物|天文|宇宙|数学|基因|科普/.test(i)?"自然科学":/程序|代码|算法|计算机|编程|Java|Python|Linux|C语言|设计模式|网络|数据结构|人工智能/i.test(i)?"技术":/哲学|理想国|存在|查拉图|纯粹理性|沉思录|道德经|论语/.test(i)?"哲学":/艺术|美术|色彩|摄影|建筑|设计|绘画|音乐/.test(i)?"艺术":/人类简史|社会|经济|心理|历史|文明|乌合之众|国富论|枪炮|乡土中国|万历/.test(i)?"社科":/三体|红楼梦|百年孤独|活着|小王子|长安|围城|雪国|月亮|六便士|局外人|挪威|追风筝|海边|小说|诗/.test(i)?"文学":"其他")}function De(i,t,e,n=!1){if(i!==null&&typeof i=="object")throw new Error(`${t}格式不正确`);const r=String(i??"").trim();if(n&&!r)throw new Error(`${t}不能为空`);if(r.length>e)throw new Error(`${t}最多 ${e} 个字符`);if(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/.test(r))throw new Error(`${t}含有无效字符`);return r}function $o(i,t=0){if(!i||typeof i!="object"||Array.isArray(i))throw new Error(`第 ${t+1} 条图书数据格式不正确`);const e=De(i.id,"图书编号",40,!0),n=De(i.title,"书名",200,!0),r=De(i.author,"作者",100,!0);if(/\s|\|/.test(e))throw new Error("图书编号不能包含空格或竖线");const s=i.status??0;if(![0,1,"0","1"].includes(s))throw new Error(`《${n}》的借阅状态不正确`);const a=De(i.dueDate,"应还日期",10),o=De(i.category,"分类",20)||vv(n);if(a&&!Js(a))throw new Error(`《${n}》的应还日期须为 YYYY-MM-DD`);return{id:e,title:n,author:r,category:oh.includes(o)?o:"其他",status:Number(s),borrower:De(i.borrower,"借阅人",100),contact:De(i.contact,"联系方式",100),borrowedAt:De(i.borrowedAt,"借出时间",64),dueDate:a,returnedAt:De(i.returnedAt,"最近归还时间",64)}}function hi(i){const t=Array.isArray(i)?i:i?.records??i?.books;if(!Array.isArray(t))throw new Error("文件应包含图书数组或 records 字段");if(t.length>1e4)throw new Error("单次最多导入 10,000 本图书");const e=t.map($o),n=new Map;for(const a of e){if(n.has($e(a.id)))throw new Error(`图书编号 ${a.id} 重复`);n.set($e(a.id),a.id)}const r=Array.isArray(i?.favorites)?[...new Set(i.favorites.map(a=>n.get($e(a))).filter(Boolean))]:[],s=Array.isArray(i?.activity)?i.activity.slice(0,60).filter(a=>a&&typeof a=="object"&&!Array.isArray(a)).map(a=>({type:De(a.type,"操作类型",20)||"edit",title:De(a.title,"操作记录",250),detail:De(a.detail,"操作说明",300),at:De(a.at,"操作时间",64)})):[];return{version:1,records:e,favorites:r,activity:s}}function xv(i,t="books.json"){if(typeof i!="string")throw new Error("文件内容必须为文本");const e=i.replace(/^\uFEFF/,"");if(/\.json$/i.test(t)){let r;try{r=JSON.parse(e)}catch{throw new Error("JSON 文件格式不正确，请检查内容")}return hi(r)}if(!/\.txt$/i.test(t))throw new Error("请选择 JSON 备份或 books.txt 文件");const n=e.split(/\r\n|\n|\r/).filter(r=>r.trim());if(n.length>1e4)throw new Error("单次最多导入 10,000 本图书");return hi(n.map((r,s)=>{const a=r.split("|");if(a.length!==4&&a.length!==9)throw new Error(`第 ${s+1} 行应包含 4 个或 9 个字段（以 | 分隔）`);const[o,l,c,h,d="",f="",p="",g="",y=""]=a;return{id:o,title:l,author:c,status:h,borrower:d,contact:f,borrowedAt:p,dueDate:g,returnedAt:y}}))}function yv(i={}){let t=i.storage;if(t===void 0)try{t=globalThis.localStorage}catch{t=null}const e=i.eventTarget??globalThis.window,n=()=>{const u=typeof i.now=="function"?i.now():i.now,_=u===void 0?new Date:new Date(u);if(Number.isNaN(_.getTime()))throw new Error("当前日期无效");return _};let r=hi(Ga),s=null,a="",o="",l=!1;const c=new Set;try{if(!t?.getItem)throw new Error("Storage unavailable");const u=t.getItem(Wa);u!=null&&(r=hi(JSON.parse(u)))}catch{a="本地数据暂时无法读取，已打开初始书库；原有存储未被覆盖。"}function h(u){for(const _ of c)try{_(Un(r),u)}catch(x){console.error("图书馆界面刷新失败",x)}}function d(u){if(l)throw new Error("书库已关闭，请重新打开");try{if(!t?.setItem)throw new Error("Storage unavailable");t.setItem(Wa,JSON.stringify(u))}catch{throw new Error("浏览器本地存储失败，本次操作未保存。请释放存储空间或允许本地存储后重试。")}}function f(u,_,x={type:"change"}){const v=Un(r),E=Un(r);return u(E),_&&E.activity.unshift({..._,at:n().toISOString()}),E.activity=E.activity.slice(0,60),d(E),r=E,s=v,h(x),Un(r)}const p=u=>r.records.find(_=>$e(_.id)===$e(u));function g(u){const _=p(u);if(!_)throw new Error("这本图书已不存在，请关闭后重新打开");return _}function y(u){if(!(u.key!==Wa&&u.key!==null||u.storageArea&&u.storageArea!==t))try{r=u.newValue===null?hi(Ga):hi(JSON.parse(u.newValue)),s=null,o="",h({type:"sync"})}catch{o="其他页面的书库数据无法读取，当前页面保留原有数据。",h({type:"sync-error",error:o})}}e?.addEventListener?.("storage",y);const m={get initialNotice(){return a},get lastSyncError(){return o},getState:()=>Un(r),refreshCatalogCategories(){const u="YueJingCategoriesV2";if(a)return 0;try{if(t?.getItem(u)==="1")return 0;const _=new Set(Ga.map(v=>v.title+"|"+v.author)),x=r.records.flatMap(v=>{if(!_.has(v.title+"|"+v.author))return[];const E=sh(v.title),T=v.category==="其他"||v.title==="时间简史"&&v.category==="文学"||v.title==="人间词话"&&v.category==="艺术";return E&&T&&v.category!==E?[{id:v.id,category:E}]:[]});x.length&&f(v=>{for(const E of x)v.records.find(T=>T.id===E.id).category=E.category},{type:"edit",title:"馆藏分类已整理",detail:"重新归类 "+x.length+" 本图书"},{type:"category-upgrade"});try{t?.setItem(u,"1")}catch{}return x.length}catch(_){return a=_.message||"分类暂时无法保存，原有书库未更改。",0}},expandSampleCatalog(){if(a)return 0;try{if(t?.getItem(tu)==="1")return 0;const u=new Set(r.records.map(v=>$e(v.id))),_=new Set(r.records.map(v=>$e(v.title)+"|"+$e(v.author))),x=[];for(const v of ah){if(r.records.length+x.length>=50)break;const E=$e(v.title)+"|"+$e(v.author);if(_.has(E))continue;let T=v.id,P=1;for(;u.has($e(T));)T=v.id+"-YJ"+P++;x.push($o({...v,id:T})),u.add($e(T)),_.add(E)}x.length&&f(v=>v.records.push(...x),{type:"create",title:"馆藏扩充",detail:"新增 "+x.length+" 本经典图书"},{type:"catalog-upgrade"});try{t?.setItem(tu,"1")}catch{}return x.length}catch(u){return a=u.message||"新增馆藏暂时无法保存，原有书库未更改。",0}},getBook(u){const _=p(u);return _?Un(_):void 0},subscribe(u){if(typeof u!="function")throw new Error("订阅函数无效");if(l)throw new Error("书库已关闭，请重新打开");return c.add(u),()=>c.delete(u)},upsert(u,_=null){if(!u||typeof u!="object"||Array.isArray(u))throw new Error("图书数据格式不正确");const x=_!==null&&_!==""?g(_):null,E=$o({...x||{status:0,borrower:"",contact:"",borrowedAt:"",dueDate:"",returnedAt:""},id:u.id??x?.id,title:u.title??x?.title,author:u.author??x?.author,category:u.category??x?.category});if(r.records.some(T=>T!==x&&$e(T.id)===$e(E.id)))throw new Error("这个图书编号已被使用，请更换编号");if(!x&&r.records.length>=1e4)throw new Error("书库最多保存 10,000 本图书");return f(T=>{x?(T.records[T.records.findIndex(P=>P.id===x.id)]=E,T.favorites=T.favorites.map(P=>P===x.id?E.id:P)):T.records.push(E)},{type:x?"edit":"create",title:x?"图书信息已更新":"新书入馆",detail:`${E.title} · ${E.id}`}),Un(E)},borrow(u,_={}){const x=g(u),v=n(),E=De(_.borrower,"借阅人姓名",100,!0),T=De(_.contact,"联系方式",100),P=De(_.dueDate,"应还日期",10)||_v(30,v);if(!Js(P))throw new Error("请选择有效的应还日期");if(P<bl(v))throw new Error("应还日期不能早于今天");const R=x.status===1;return f(S=>Object.assign(S.records.find(M=>M.id===x.id),{borrower:E,contact:T,dueDate:P,status:1,borrowedAt:R?x.borrowedAt:v.toISOString()}),{type:R?"edit":"borrow",title:R?"借阅信息已更新":"图书已借出",detail:`${x.title} · ${E}`}),m.getBook(x.id)},returnBook(u){const _=g(u);if(_.status!==1)throw new Error("这本图书已在馆，无需重复归还");const x=n().toISOString();return f(v=>Object.assign(v.records.find(E=>E.id===_.id),{status:0,returnedAt:x}),{type:"return",title:"图书已归还",detail:`${_.title}${_.borrower?` · ${_.borrower}`:""}`}),m.getBook(_.id)},remove(u){const _=g(u);return f(x=>{x.records=x.records.filter(v=>v.id!==_.id),x.favorites=x.favorites.filter(v=>v!==_.id)},{type:"delete",title:"图书已移出",detail:_.title})},toggleFavorite(u){const _=g(u),x=r.favorites.includes(_.id);return f(v=>{v.favorites=x?v.favorites.filter(E=>E!==_.id):[...v.favorites,_.id]}),!x},canUndo:()=>s!==null,undo(){if(s===null)return!1;const u=Un(s);return d(u),r=u,s=null,h({type:"undo"}),!0},parseImport:xv,importData(u,_="导入文件"){const x=hi(u),v=De(_,"文件名",240);return f(E=>{E.records=x.records,E.favorites=x.favorites,E.activity=x.activity},{type:"import",title:"书库已导入",detail:`${v} · ${x.records.length} 本`},{type:"import"})},exportCSV(){const u=["图书编号","书名","作者","分类","状态","借阅人","联系方式","借出时间","应还日期","实际归还时间"],_=E=>{let T=String(E??"");return/^[\t\r\n]|^\s*[=+@\-]/.test(T)&&(T=`'${T}`),`"${T.replace(/"/g,'""')}"`},x=n(),v=r.records.map(E=>[E.id,E.title,E.author,E.category,eu(E,x)?"已逾期":E.status===1?"借阅中":"在馆可借",E.borrower,E.contact,E.borrowedAt?nu(E.borrowedAt,!0):"",E.dueDate,E.returnedAt?nu(E.returnedAt,!0):""]);return"\uFEFF"+[u,...v].map(E=>E.map(_).join(",")).join(`\r
`)},exportBackup(){return{...Un(r),exportedAt:n().toISOString(),application:"阅境 YUEJING"}},backup(){return m.exportBackup()},getStats(){const u=n(),_=r.records.filter(x=>x.status===1).length;return{total:r.records.length,available:r.records.length-_,borrowed:_,overdue:r.records.filter(x=>eu(x,u)).length,favorites:r.favorites.length,categories:Object.fromEntries(oh.map(x=>[x,r.records.filter(v=>v.category===x).length]))}},destroy(){e?.removeEventListener?.("storage",y),c.clear(),l=!0}};return m}const qt=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),Xi=()=>{const i=new Date;return[i.getFullYear(),String(i.getMonth()+1).padStart(2,"0"),String(i.getDate()).padStart(2,"0")].join("-")},bv=()=>{const i=new Date;return i.setDate(i.getDate()+30),[i.getFullYear(),String(i.getMonth()+1).padStart(2,"0"),String(i.getDate()).padStart(2,"0")].join("-")},Hi=i=>i.status===1&&i.dueDate&&i.dueDate<Xi(),iu=i=>Hi(i)?["overdue","逾期待还"]:i.status===1?["borrowed","借阅中"]:["available","在馆可借"],Xa=i=>{if(!i)return"暂无记录";const t=new Date(i);return Number.isNaN(t.getTime())?String(i):new Intl.DateTimeFormat("zh-CN",{month:"2-digit",day:"2-digit",year:"numeric"}).format(t)},ru=i=>{if(!i.dueDate)return"日期待补录";const t=Math.round((Date.parse(i.dueDate)-Date.parse(Xi()))/864e5);return t<0?"逾期 "+-t+" 天":t===0?"今天到期":t+" 天后归还"},As=i=>ih[Math.max(0,Xs.indexOf(i.category))];function $t(i){const t={book:'<path d="M12 5.5C8 3 5 3.5 3 4.5v15c3-1.5 6-1 9 1 3-2 6-2.5 9-1v-15c-2-1-5-1.5-9 1Zm0 0v15M6 8l3 1m6 0 3-1"/>',search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',arrow:'<path d="M4 12h16m-6-6 6 6-6 6"/>',back:'<path d="M20 12H4m6-6-6 6 6 6"/>',close:'<path d="m6 6 12 12M6 18 18 6"/>',plus:'<path d="M12 4v16M4 12h16"/>',star:'<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9L12 3Z"/>',edit:'<path d="m15 4 5 5M4 20l5-1L21 7l-5-5L4 14v6Z"/>',trash:'<path d="M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7"/>',undo:'<path d="m8 4-5 5 5 5M3 9h11a6 6 0 0 1 0 12h-3"/>',upload:'<path d="M12 16V3m-5 5 5-5 5 5M4 16v5h16v-5"/>',download:'<path d="M12 3v13m-5-5 5 5 5-5M4 16v5h16v-5"/>',save:'<path d="M4 3h13l4 4v14H3V3h1Zm3 0v6h10V3M7 21v-8h10v8"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',grid:'<path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z"/>',pause:'<path d="M8 5v14M16 5v14"/>',play:'<path d="m8 4 12 8-12 8V4Z"/>',replay:'<path d="M4 9a8 8 0 1 1 0 7M4 9V3m0 6h6"/>',check:'<path d="m5 12 4 4L20 5"/>',orbit:'<circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="11" ry="5" transform="rotate(-30 12 12)"/><path d="M12 1v3m0 16v3"/>',home:'<path d="m3 10 9-7 9 7M5 9v12h14V9M9 21v-8h6v8"/>',fullscreen:'<path d="M3 3l6 6M3 3h5M3 3v5M21 3l-6 6m6-6h-5m5 0v5M3 21l6-6m-6 6h5m-5 0v-5m18 5-6-6m6 6h-5m5 0v-5"/>',reset:'<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 6v6l4 2"/>'};return'<svg class="lib-icon" viewBox="0 0 24 24" aria-hidden="true">'+(t[i]||t.book)+"</svg>"}function Mv({store:i,onEnter:t=()=>{},onSkipEntry:e=()=>{},onExit:n=()=>{},onMode:r=()=>{},onSelectBook:s=()=>{},onClearSelection:a=()=>{},onFilter:o=()=>{},onPause:l=()=>{},onReplay:c=()=>{},onCameraReset:h=()=>{},onToggleBookPages:d=()=>{}}){const f=document.querySelector("#app"),p=new AbortController,g={signal:p.signal};let y=!1,m=!1,u=null,_="library",x=!1,v=i.getState(),E=!1,T=!1,P={x:0,y:0,visible:!1};const R={category:"all",view:"all",search:"",sort:"recent"};let S=0,M="grid",U=null,B=null,V=!1,K={x:0,y:0,visible:!1};const W=document.createElement("div");W.id="library-ui",W.className="library-ui",W.hidden=!0,W.innerHTML=`
<header class="lib-header"><div class="lib-brand">${$t("book")}<span>阅境<span class="lib-brand-dot">·</span>BUCT<small>CHANGPING · IMMERSIVE LIBRARY</small></span></div>
<div class="lib-mode-tabs" role="tablist" aria-label="选书空间"><button role="tab" aria-selected="true" data-lib-mode="library">${$t("book")}<span>图书馆 3D 选书</span></button><button role="tab" aria-selected="false" data-lib-mode="gravity">${$t("orbit")}<span>知识引力场</span></button></div>
<label class="lib-search">${$t("search")}<input id="lib-search-input" type="search" placeholder="搜索书名、作者、编号…" aria-label="搜索馆藏" autocomplete="off"><kbd>Ctrl K</kbd></label><button class="lib-button lib-campus" data-lib-action="exit" aria-label="回到校园">${$t("home")}<span>回到校园</span></button></header>
<div class="lib-space-heading"><span class="lib-overline">A UNIVERSE OF STORIES</span><h1 id="lib-space-title">让知识，触手可及。</h1><p id="lib-space-subtitle">在书架间漫游，点亮一本属于你的书。</p></div>
<div class="lib-side-panels"><aside id="lib-left-panel" class="lib-panel lib-left" aria-label="馆藏与图书详情"></aside><aside id="lib-right-panel" class="lib-panel lib-right" aria-label="流通信息与借阅操作"></aside></div>
<div class="lib-stage-tools"><button class="lib-icon-button lib-mobile-insights" data-lib-action="insights" aria-label="查看书房统计与动态" title="书房动态">${$t("list")}</button><span class="lib-stage-count"><i></i><b id="lib-visible-count">0</b> 本书正在此处</span><div><button class="lib-icon-button" data-lib-action="pause" aria-label="暂停场景动画" title="暂停动画">${$t("pause")}</button><button class="lib-icon-button" data-lib-action="replay" aria-label="重播入馆过场" title="重播入馆">${$t("replay")}</button><button class="lib-icon-button" data-lib-action="camera-reset" aria-label="恢复观察视角" title="恢复视角">${$t("reset")}</button><button class="lib-icon-button" data-lib-action="fullscreen" aria-label="全屏选书" aria-pressed="false" title="全屏选书">${$t("fullscreen")}</button></div></div>
<div class="lib-stage-message" id="lib-stage-message" hidden><strong>书架暂时安静了下来</strong><span>试试其他关键词，或为馆藏添一本新书。</span><button data-lib-action="clear-filters">查看全部藏书 ${$t("arrow")}</button></div>
<nav class="lib-dock" aria-label="书库管理工具"><button data-lib-action="catalog" class="lib-dock-primary">${$t("grid")}<span>馆藏目录</span></button><span class="lib-dock-line"></span><button data-lib-action="add">${$t("plus")}<span>新增图书</span></button><button data-lib-action="undo" id="lib-undo" disabled>${$t("undo")}<span>撤销</span></button><span class="lib-dock-line"></span><button data-lib-action="import">${$t("upload")}<span>导入</span></button><button data-lib-action="export">${$t("download")}<span>导出 CSV</span></button><button data-lib-action="backup">${$t("save")}<span>备份</span></button></nav>
<footer class="lib-footer"><span><i></i>本地书库 · 自动保存</span><span>拖动观察 · 点击选书 · Esc 返回</span><span>BUCT / YUEJING</span></footer>
<input id="lib-import-input" type="file" accept=".json,.txt" hidden><div id="lib-hover" class="lib-hover" hidden></div><div id="lib-toasts" class="lib-toasts" aria-live="polite"></div>`,f.append(W);const z=F=>W.querySelector(F),J=F=>[...W.querySelectorAll(F)],j=F=>v.records.find(D=>D.id===F),ot=document.createElement("button");ot.id="lib-book-turn",ot.className="lib-book-turn",ot.type="button",ot.dataset.libAction="toggle-book-pages",ot.hidden=!0,ot.setAttribute("aria-expanded","false"),ot.setAttribute("aria-label","翻开书页"),ot.innerHTML=$t("book")+"<span>翻开书页</span>",W.append(ot);function yt(){ot.hidden=!y||m||!u||!E||!P.visible}function Rt(F){E=!!F,E||zt(!1),yt()}function zt(F){T=!!F,W.classList.toggle("is-reading",T);const D=T?"合上书本":"翻开书页";ot.querySelector("span").textContent=D,ot.setAttribute("aria-label",D),ot.setAttribute("aria-expanded",String(T))}function Z(F){if(P=F||P,yt(),ot.hidden)return;const D=innerWidth<=820,N=D?66:74,$=D?58:64;let I=innerWidth-12,vt=innerHeight-130;if(D){const St=z(".lib-side-panels").getBoundingClientRect();St.height>0&&(vt=Math.min(vt,St.top-10))}else{const St=z("#lib-right-panel").getBoundingClientRect();St.width>0&&(I=Math.min(I,St.left-10))}ot.style.left=Math.max(12,Math.min(I-N,Number(P.x)||0))+"px",ot.style.top=Math.max(120,Math.min(vt-$,Number(P.y)||0))+"px"}const ut=F=>`<span class="lib-status ${iu(F)[0]}"><i></i>${iu(F)[1]}</span>`;W.insertAdjacentHTML("beforeend",`
<dialog id="lib-book-dialog" class="lib-dialog" aria-labelledby="lib-book-form-title"><div class="lib-dialog-head"><span class="lib-overline">COLLECTION EDITOR</span><button class="lib-icon-button" data-lib-close="lib-book-dialog" aria-label="关闭">${$t("close")}</button></div><h2 id="lib-book-form-title">收藏一本好书</h2><p class="lib-dialog-intro">每一本书，都有值得抵达的世界。</p><form id="lib-book-form"><input type="hidden" name="editingId"><div class="lib-form-grid"><label>图书编号 <b>*</b><input name="id" required maxlength="40" autocomplete="off"></label><label>分类<select name="category">${Xs.map(F=>"<option>"+F+"</option>").join("")}</select></label><label class="lib-field-full">书名 <b>*</b><input name="title" required maxlength="200" autocomplete="off" placeholder="写下即将入藏的书名"></label><label class="lib-field-full">作者 <b>*</b><input name="author" required maxlength="100" autocomplete="off" placeholder="这场相遇，来自谁的笔下"></label></div><p id="lib-book-error" class="lib-form-error" role="alert"></p><div class="lib-dialog-actions"><button type="button" class="lib-button" data-lib-close="lib-book-dialog">取消</button><button type="submit" class="lib-button lib-button-primary">${$t("check")}保存图书</button></div></form></dialog>
<dialog id="lib-confirm-dialog" class="lib-dialog lib-confirm" aria-labelledby="lib-confirm-title"><div class="lib-dialog-head"><span class="lib-overline">ONE MORE MOMENT</span><button class="lib-icon-button" data-lib-close="lib-confirm-dialog" aria-label="取消确认">${$t("close")}</button></div><h2 id="lib-confirm-title"></h2><p id="lib-confirm-message"></p><div class="lib-dialog-actions"><button type="button" class="lib-button" data-lib-action="confirm-no">取消</button><button type="button" class="lib-button lib-button-primary" id="lib-confirm-yes" data-lib-action="confirm-yes">确认</button></div></dialog>
<dialog id="lib-catalog-dialog" class="lib-dialog lib-catalog" aria-labelledby="lib-catalog-title"><div class="lib-dialog-head"><span class="lib-overline">YOUR COLLECTION</span><button class="lib-icon-button" data-lib-close="lib-catalog-dialog" aria-label="关闭馆藏目录">${$t("close")}</button></div><div class="lib-catalog-heading"><div><h2 id="lib-catalog-title">每一本，都是一个世界。</h2><p id="lib-catalog-count"></p></div><div class="lib-catalog-layout"><button class="lib-icon-button" data-lib-action="layout-grid" aria-label="卡片视图" aria-pressed="true">${$t("grid")}</button><button class="lib-icon-button" data-lib-action="layout-list" aria-label="列表视图" aria-pressed="false">${$t("list")}</button></div></div><div class="lib-catalog-tools"><label>${$t("search")}<input id="lib-catalog-search" type="search" aria-label="搜索目录" placeholder="书名、作者、编号或借阅人"></label><select id="lib-catalog-sort" aria-label="目录排序"><option value="recent">默认顺序</option><option value="title">书名排序</option><option value="author">作者排序</option><option value="due">应还日期</option></select></div><div id="lib-catalog-results"></div><div class="lib-pagination"><button class="lib-button" data-lib-action="page-prev">上一页</button><span id="lib-page-info"></span><button class="lib-button" data-lib-action="page-next">下一页</button></div></dialog>`),W.insertAdjacentHTML("beforeend",'<dialog id="lib-insights-dialog" class="lib-dialog lib-insights-modal" aria-label="书房统计与动态"><div class="lib-dialog-head"><span class="lib-overline">COLLECTION PULSE</span><button class="lib-icon-button" data-lib-close="lib-insights-dialog" aria-label="关闭书房动态">'+$t("close")+'</button></div><div id="lib-mobile-insights-content"></div></dialog>');const dt=document.createElement("div");dt.className="lib-portal",dt.hidden=!0,dt.innerHTML=`<button id="enter-library" type="button"><span class="lib-portal-icon">${$t("book")}</span><span><small>YUEJING · IMMERSIVE LIBRARY</small><strong>进入阅境图书馆</strong></span>${$t("arrow")}</button>`,f.append(dt);const k=document.createElement("div");k.className="lib-entry-transition",k.hidden=!0,k.innerHTML=`<span class="lib-entry-corner">BUCT / YUEJING</span><div class="lib-entry-copy"><span class="lib-overline">ENTERING A WORLD OF STORIES</span><h2>让每一本书，<br>成为一个宇宙。</h2><p id="lib-entry-label">正在穿过知识的边界</p><div class="lib-entry-track"><span id="lib-entry-fill"></span></div></div><button id="lib-skip-entry" class="lib-button">跳过过场 ${$t("arrow")}</button>`,f.append(k);const X=k.querySelector("#lib-entry-fill"),ct=k.querySelector("#lib-entry-label");function pt(){const F=R.search.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean),D=v.records.filter(N=>{if(R.category!=="all"&&N.category!==R.category||R.view==="available"&&N.status!==0||R.view==="borrowed"&&N.status!==1||R.view==="overdue"&&!Hi(N)||R.view==="favorites"&&!v.favorites.includes(N.id))return!1;const $=[N.id,N.title,N.author,N.borrower,N.contact,N.category].join(" ").toLocaleLowerCase();return F.every(I=>$.includes(I))});return R.sort==="title"?D.sort((N,$)=>N.title.localeCompare($.title,"zh-CN",{numeric:!0})):R.sort==="author"?D.sort((N,$)=>N.author.localeCompare($.author,"zh-CN")):R.sort==="due"?D.sort((N,$)=>(N.status===1?N.dueDate||"9998":"9999").localeCompare($.status===1?$.dueDate||"9998":"9999")||N.title.localeCompare($.title,"zh-CN")):D.reverse(),D}function mt(){const F=v.records,D=[["all","全部藏书",F.length],["available","在馆可借",F.filter(N=>N.status===0).length],["borrowed","正在借阅",F.filter(N=>N.status===1).length],["overdue","逾期待还",F.filter(Hi).length],["favorites","特别收藏",v.favorites.length]];z("#lib-left-panel").innerHTML=`<div class="lib-panel-heading"><span class="lib-overline">EXPLORE THE COLLECTION</span><h2>我的书宇</h2><p>循着好奇心，找到下一本好书。</p></div><div class="lib-filter-label">阅读状态</div><div class="lib-status-filters">${D.map(([N,$,I])=>`<button data-lib-view="${N}" aria-pressed="${R.view===N}" class="${R.view===N?"active":""}"><span>${N==="favorites"?$t("star"):"<i></i>"}${$}</span><b>${I}</b></button>`).join("")}</div><div class="lib-filter-label">知识分区 <span>SUBJECTS</span></div><div class="lib-category-filters"><button data-lib-category="all" aria-pressed="${R.category==="all"}" class="${R.category==="all"?"active":""}"><span class="lib-category-symbol">∞</span><span>全部分类</span><small>${F.length}</small></button>${Xs.map((N,$)=>`<button data-lib-category="${N}" style="--category-color:${ih[$]}" aria-pressed="${R.category===N}" class="${R.category===N?"active":""}"><span class="lib-category-symbol">${String($+1).padStart(2,"0")}</span><span>${N}</span><small>${F.filter(I=>I.category===N).length}</small></button>`).join("")}</div><label class="lib-sort-label">排列方式<select id="lib-sort"><option value="recent">默认顺序</option><option value="title">书名排序</option><option value="author">作者排序</option><option value="due">应还日期</option></select></label><button class="lib-quiet-link" data-lib-action="clear-filters">重置筛选 ${$t("undo")}</button>`,z("#lib-sort").value=R.sort}function Mt(){const F=v.records.length,D=v.records.filter($=>$.status===1).length,N=v.records.filter($=>$.status===1).sort(($,I)=>($.dueDate||"9999").localeCompare(I.dueDate||"9999")).slice(0,4);z("#lib-right-panel").innerHTML=`<div class="lib-panel-heading"><span class="lib-overline">COLLECTION PULSE</span><h2>书房脉动<span class="lib-live-dot"></span></h2></div><div class="lib-stats"><div><b>${F}</b><span>馆藏总量</span></div><div><b>${F-D}</b><span>在馆可借</span></div><div><b>${D}</b><span>正在借阅</span></div><div class="lib-stat-warn"><b>${v.records.filter(Hi).length}</b><span>逾期待还</span></div></div><div class="lib-flow"><div><span>馆藏流通率</span><b>${F?Math.round(D/F*100):0}%</b></div><div class="lib-flow-track"><span style="width:${F?D/F*100:0}%"></span></div><small>借阅数 / 馆藏总数</small></div><section class="lib-insight-section"><h3>${$t("clock")}借阅备忘<span>DUE SOON</span></h3><div class="lib-due-list">${N.length?N.map($=>`<button data-lib-book="${qt($.id)}"><span class="lib-due-mark" style="background:${As($)}"></span><span><strong>${qt($.title)}</strong><small>${qt($.borrower||"借阅人待补录")}</small></span><em class="${Hi($)?"is-overdue":""}">${qt(ru($))}</em></button>`).join(""):'<p class="lib-empty-small">每一本书，都已归来。</p>'}</div></section><section class="lib-insight-section"><h3>最近动态<span>RECENT</span></h3><div class="lib-activity">${v.activity.slice(0,5).map($=>`<div><i class="${$.type==="borrow"?"warm":""}"></i><span><strong>${qt($.title)}</strong><small>${qt($.detail)}</small><time>${qt(Xa($.at))}</time></span></div>`).join("")||'<p class="lib-empty-small">故事从这一次相遇开始。</p>'}</div></section>`}function Nt(F){const D=v.favorites.includes(F.id);z("#lib-left-panel").innerHTML=`<div class="lib-panel-heading lib-detail-head"><span class="lib-overline">BOOK IN FOCUS</span><button class="lib-icon-button" data-lib-action="clear-selection" aria-label="返回全部书架">${$t("close")}</button></div><span class="lib-detail-category" style="--category-color:${As(F)}"><i></i>${qt(F.category)}<small>${qt(F.id)}</small></span><h2 class="lib-detail-title">${qt(F.title)}</h2><p class="lib-detail-author">${qt(F.author)}</p>${ut(F)}<div class="lib-book-rule"></div><p class="lib-detail-quote">翻开一页，<br>遇见另一个世界。</p><dl class="lib-book-facts"><div><dt>${F.status===1?"借阅人":"最近借阅人"}</dt><dd>${qt(F.borrower||"暂无记录")}</dd></div><div><dt>联系方式</dt><dd>${qt(F.contact||"未填写")}</dd></div><div><dt>最近借出</dt><dd>${qt(Xa(F.borrowedAt))}</dd></div><div><dt>应还日期</dt><dd>${qt(F.dueDate||"未登记")}</dd></div><div><dt>最近归还</dt><dd>${qt(Xa(F.returnedAt))}</dd></div></dl><button class="lib-button lib-favorite ${D?"is-favorite":""}" data-lib-action="favorite" data-id="${qt(F.id)}" aria-pressed="${D}">${$t("star")}${D?"已加入特别收藏":"加入特别收藏"}</button><div class="lib-detail-edit"><button class="lib-button" data-lib-action="edit" data-id="${qt(F.id)}">${$t("edit")}编辑图书</button><button class="lib-icon-button lib-danger" data-lib-action="delete" data-id="${qt(F.id)}" aria-label="删除这本图书" title="删除图书">${$t("trash")}</button></div>`,z("#lib-right-panel").innerHTML=`<div class="lib-panel-heading"><span class="lib-overline">LET GOOD STORIES TRAVEL</span><h2>${F.status===1?"让故事，继续流动。":"把好书带回家。"}</h2><p>${F.status===1?"更新借阅资料，或登记好书的归途。":"一次登记，开启新的阅读旅程。"}</p></div>${F.status===1?`<div class="lib-loan-banner ${Hi(F)?"is-overdue":""}">${$t("clock")}<span>${qt(ru(F))}<small>借阅人 · ${qt(F.borrower||"待补录")}</small></span></div>`:""}<form id="lib-borrow-form"><input name="bookId" type="hidden" value="${qt(F.id)}"><label>借阅人姓名 <b>*</b><input name="borrower" required maxlength="100" placeholder="请输入姓名" autocomplete="name" value="${qt(F.status===1?F.borrower:"")}"></label><label>联系方式 <small>选填</small><input name="contact" maxlength="100" placeholder="手机号或其他联系方式" autocomplete="tel" value="${qt(F.status===1?F.contact:"")}"></label><label>应还日期 <b>*</b><input name="dueDate" type="date" min="${Xi()}" required value="${qt(F.status===1&&F.dueDate>=Xi()?F.dueDate:bv())}"></label><p class="lib-form-error" id="lib-borrow-error" role="alert"></p><button class="lib-button lib-button-primary lib-wide" type="submit">${$t(F.status===1?"check":"arrow")}${F.status===1?"保存借阅信息":"确认借阅"}</button></form>${F.status===1?`<button class="lib-button lib-return lib-wide" data-lib-action="return" data-id="${qt(F.id)}">${$t("undo")}办理归还</button>`:""}<p class="lib-form-foot">${$t("save")}借阅信息会自动保存在本地书库</p><button class="lib-quiet-link" data-lib-action="clear-selection">${$t("back")}继续探索书架</button>`}function C(F=pt()){const D=Math.max(1,Math.ceil(F.length/12));S=Math.min(S,D-1);const N=F.slice(S*12,S*12+12);z("#lib-catalog-count").textContent=`当前筛选 ${F.length} 本 · 全部馆藏 ${v.records.length} 本`,z("#lib-catalog-results").className=M==="grid"?"lib-catalog-grid":"lib-catalog-list",z("#lib-catalog-results").innerHTML=N.length?N.map($=>M==="grid"?`<article class="lib-catalog-card"><button class="lib-mini-cover" style="--book-color:${As($)}" data-lib-book="${qt($.id)}" aria-label="在三维空间查看《${qt($.title)}》"><span>YUEJING / ${qt($.category)}</span><strong>${qt($.title)}</strong><small>${qt($.author)}</small><i></i></button><div class="lib-catalog-card-meta">${ut($)}<button class="lib-icon-button ${v.favorites.includes($.id)?"is-favorite":""}" data-lib-action="favorite" data-id="${qt($.id)}" aria-pressed="${v.favorites.includes($.id)}" aria-label="${v.favorites.includes($.id)?"取消收藏":"收藏"}《${qt($.title)}》">${$t("star")}</button></div><button class="lib-catalog-book-title" data-lib-book="${qt($.id)}">${qt($.title)}</button><small>${qt($.author)} · ${qt($.id)}</small></article>`:`<article class="lib-catalog-row"><button data-lib-book="${qt($.id)}"><span class="lib-row-cover" style="background:${As($)}">${$t("book")}</span><span><strong>${qt($.title)}</strong><small>${qt($.author)} · ${qt($.id)} · ${qt($.category)}</small></span></button><span class="lib-catalog-row-borrower">${qt($.status===1?$.borrower||"待补录":"—")}<small>${$.status===1?qt($.dueDate||"日期待补录"):""}</small></span>${ut($)}<button class="lib-icon-button" data-lib-action="edit" data-id="${qt($.id)}" aria-label="编辑《${qt($.title)}》">${$t("edit")}</button></article>`).join(""):'<div class="lib-catalog-empty">没有找到这次寻找的书。<button class="lib-button" data-lib-action="clear-filters">重置筛选</button></div>',z("#lib-page-info").textContent=`${S+1} / ${D}`,z('[data-lib-action="page-prev"]').disabled=S===0,z('[data-lib-action="page-next"]').disabled=S>=D-1,z('[data-lib-action="layout-grid"]').setAttribute("aria-pressed",String(M==="grid")),z('[data-lib-action="layout-list"]').setAttribute("aria-pressed",String(M==="list")),document.activeElement!==z("#lib-catalog-search")&&(z("#lib-catalog-search").value=R.search),z("#lib-catalog-sort").value=R.sort}function nt(F=!0){const D=j(u);u&&!D&&(u=null,a()),W.classList.toggle("has-selection",!!D),D?Nt(D):(mt(),Mt());const N=pt();z("#lib-visible-count").textContent=N.length,z("#lib-stage-message").hidden=!!(N.length||D),z("#lib-undo").disabled=!i.canUndo(),C(N),F&&o(N)}function Q(F,D="success"){const N=document.createElement("div");for(N.className="lib-toast"+(D==="error"?" is-error":""),N.setAttribute("role",D==="error"?"alert":"status"),N.innerHTML=$t(D==="error"?"close":"check")+"<span>"+qt(F)+'</span><button aria-label="关闭提示">'+$t("close")+"</button>",N.querySelector("button").addEventListener("click",()=>N.remove(),g),z("#lib-toasts").append(N);z("#lib-toasts").children.length>4;)z("#lib-toasts").firstElementChild.remove();window.setTimeout(()=>N.remove(),D==="error"?6500:3800)}const tt=new Map;function rt(F){const D=z("#"+F);D.open||(B=document.activeElement,tt.set(F,B),D.showModal(),requestAnimationFrame(()=>D.querySelector('input:not([type="hidden"]),button,select')?.focus()))}function ht(F){const D=z("#"+F);if(!D.open)return;if(D.close(),F==="lib-confirm-dialog"&&U){const $=U;U=null,$(!1)}const N=tt.get(F);N?.isConnected&&N.focus(),tt.delete(F)}function gt(F,D,N="确认",$=!1){return U?Promise.resolve(!1):(z("#lib-confirm-title").textContent=F,z("#lib-confirm-message").textContent=D,z("#lib-confirm-yes").textContent=N,z("#lib-confirm-yes").classList.toggle("lib-button-danger",$),rt("lib-confirm-dialog"),requestAnimationFrame(()=>z('[data-lib-action="confirm-no"]').focus()),new Promise(I=>{U=I}))}function wt(F){const D=U;U=null,ht("lib-confirm-dialog"),D?.(F)}function Vt(F=null){const D=j(F),N=z("#lib-book-form");if(F&&!D)return Q("这本图书已不存在。","error");z("#lib-catalog-dialog").open&&ht("lib-catalog-dialog"),N.reset(),N.elements.editingId.value=D?.id||"";let $=v.records.reduce((I,vt)=>{const St=/^(?:BK)?(\d+)$/i.exec(vt.id);return St?Math.max(I,Number(St[1])):I},0)+1;for((!Number.isSafeInteger($)||$>99999999)&&($=1);v.records.some(I=>I.id.toUpperCase()==="BK"+String($).padStart(4,"0"));)$++;N.elements.id.value=D?.id||"BK"+String($).padStart(4,"0"),N.elements.title.value=D?.title||"",N.elements.author.value=D?.author||"",N.elements.category.value=D?.category||"文学",z("#lib-book-form-title").textContent=D?"编辑图书":"收藏一本好书",z("#lib-book-error").textContent="",rt("lib-book-dialog"),requestAnimationFrame(()=>N.elements.title.focus())}function kt(F,D){try{const N=F();return D&&Q(D),N}catch(N){return Q(N.message||"操作未完成，请重试。","error"),null}}function A(F,D,N){try{const $=URL.createObjectURL(new Blob([F],{type:N})),I=document.createElement("a");I.href=$,I.download=D,document.body.append(I),I.click(),I.remove(),window.setTimeout(()=>URL.revokeObjectURL($),1e3),Q("文件已生成，请在浏览器下载中保存。")}catch{Q("导出失败，请重试。","error")}}function b(){Object.assign(R,{category:"all",view:"all",search:"",sort:"recent"}),S=0,z("#lib-search-input").value="",z("#lib-catalog-search").value="",nt()}W.addEventListener("click",async F=>{const D=F.target.closest("[data-lib-close]");if(D){ht(D.dataset.libClose);return}const N=F.target.closest("[data-lib-book]");if(N){z("#lib-insights-dialog").open&&ht("lib-insights-dialog"),z("#lib-catalog-dialog").open&&ht("lib-catalog-dialog"),s(N.dataset.libBook);return}const $=F.target.closest("[data-lib-mode]");if($){const O=$.dataset.libMode;O!==_&&(Tt(O),r(O));return}const I=F.target.closest("[data-lib-category]");if(I){R.category=I.dataset.libCategory,S=0,nt();return}const vt=F.target.closest("[data-lib-view]");if(vt){R.view=vt.dataset.libView,S=0,nt();return}const St=F.target.closest("[data-lib-action]");if(!St)return;const Pt=St.dataset.id||u;switch(St.dataset.libAction){case"insights":u||(z("#lib-mobile-insights-content").innerHTML=z("#lib-right-panel").innerHTML,rt("lib-insights-dialog"));break;case"exit":n();break;case"catalog":C(),rt("lib-catalog-dialog");break;case"add":Vt();break;case"edit":Vt(Pt);break;case"toggle-book-pages":d();break;case"clear-selection":a();break;case"clear-filters":b();break;case"favorite":kt(()=>i.toggleFavorite(Pt));break;case"undo":kt(()=>i.undo(),"已撤销上一步操作。");break;case"delete":{const O=j(Pt);O&&await gt("移出这本藏书？","《"+O.title+"》"+(O.status===1?"正在借阅中，删除也会移除借阅信息。":"将从馆藏中移除。")+"操作后可通过「撤销」恢复。","确认删除",!0)&&kt(()=>i.remove(Pt),"图书已移出，可撤销上一步操作。");break}case"return":{const O=j(Pt);O&&O.status===1&&await gt("欢迎好书回家","确认归还《"+O.title+"》？"+(O.borrower?"借阅人："+O.borrower+"。":"")+"归还时间会自动记录。","确认归还")&&kt(()=>i.returnBook(Pt),"图书已归还，欢迎再次借阅。");break}case"fullscreen":try{document.fullscreenElement?await document.exitFullscreen():document.documentElement.requestFullscreen?await document.documentElement.requestFullscreen():Q("当前浏览器暂不支持全屏查看。","error")}catch{Q("全屏未能开启，请稍后重试。","error")}break;case"pause":Ft(!x),l(x);break;case"replay":c();break;case"camera-reset":h();break;case"export":kt(()=>A(i.exportCSV(),"阅境图书馆_"+Xi()+".csv","text/csv;charset=utf-8"));break;case"backup":kt(()=>A(JSON.stringify(i.exportBackup(),null,2),"阅境书库备份_"+Xi()+".json","application/json;charset=utf-8"));break;case"import":z("#lib-import-input").click();break;case"confirm-yes":wt(!0);break;case"confirm-no":wt(!1);break;case"layout-grid":M="grid",C();break;case"layout-list":M="list",C();break;case"page-prev":S=Math.max(0,S-1),C();break;case"page-next":S++,C();break}},g),W.addEventListener("submit",F=>{if(F.target.getAttribute("id")==="lib-book-form"){F.preventDefault();const D=new FormData(F.target),N=String(D.get("editingId")||""),$=u;try{if(N&&!j(N))throw new Error("这本图书已不存在，请关闭后重新打开。");const I=String(D.get("id")||"").trim();u===N&&(u=I);const vt=i.upsert({id:I,title:D.get("title"),author:D.get("author"),category:D.get("category")},N||null);ht("lib-book-dialog"),u&&nt(!1),$===N&&vt.id!==N&&s(vt.id),Q(N?"图书信息已更新。":"新书已加入馆藏。")}catch(I){u=$,z("#lib-book-error").textContent=I.message}}if(F.target.getAttribute("id")==="lib-borrow-form"){F.preventDefault();const D=new FormData(F.target),N=String(D.get("bookId"));try{i.borrow(N,{borrower:D.get("borrower"),contact:D.get("contact"),dueDate:D.get("dueDate")}),Q("借阅信息已保存。")}catch($){z("#lib-borrow-error").textContent=$.message}}},g),W.addEventListener("change",F=>{["lib-sort","lib-catalog-sort"].includes(F.target.id)&&(R.sort=F.target.value,S=0,nt())},g);for(const F of["lib-search-input","lib-catalog-search"])z("#"+F).addEventListener("input",D=>{R.search=D.target.value,S=0,F==="lib-catalog-search"&&(z("#lib-search-input").value=R.search),nt()},g);z("#lib-import-input").addEventListener("change",async F=>{const D=F.target.files?.[0];if(!(!D||V)){V=!0;try{if(D.size>10*1024*1024)throw new Error("请选择小于 10 MB 的书库文件。");if(!/\.(json|txt)$/i.test(D.name))throw new Error("请选择 JSON 备份或 books.txt 文件。");const N=await D.arrayBuffer();let $;try{$=new TextDecoder("utf-8",{fatal:!0}).decode(N)}catch{$=new TextDecoder("gbk",{fatal:!0}).decode(N)}const I=i.parseImport($,D.name);await gt("用这份书库替换当前馆藏？","「"+D.name+"」包含 "+I.records.length+" 本图书，将替换当前 "+v.records.length+" 本馆藏、收藏及操作记录。建议先导出 JSON 备份。导入后可撤销一次。","确认导入")&&(i.importData(I,D.name),Q("已导入 "+I.records.length+" 本图书。"))}catch(N){Q("导入失败："+N.message+" 当前书库未更改。","error")}finally{V=!1,F.target.value=""}}},g),J("dialog").forEach(F=>{F.addEventListener("cancel",D=>{F.id==="lib-confirm-dialog"&&(D.preventDefault(),wt(!1))},g),F.addEventListener("close",()=>{const D=tt.get(F.id);D?.isConnected&&D.focus(),tt.delete(F.id)},g),F.addEventListener("click",D=>{if(D.target!==F)return;const N=F.getBoundingClientRect();(D.clientX<N.left||D.clientX>N.right||D.clientY<N.top||D.clientY>N.bottom)&&ht(F.id)},g)}),document.addEventListener("keydown",F=>{if(!y||m)return;F.code==="Space"&&document.activeElement?.closest("#library-ui button")&&F.stopImmediatePropagation();const D=J("dialog[open]").length>0,N=/^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName||"");(F.ctrlKey||F.metaKey)&&F.key.toLowerCase()==="k"&&!D||!D&&!N&&F.key==="/"?(F.preventDefault(),z("#lib-search-input").focus()):!D&&!N&&F.key==="Escape"&&u?a():!D&&!N&&F.key.toLowerCase()==="n"&&!F.altKey?(F.preventDefault(),Vt()):!D&&!N&&(F.ctrlKey||F.metaKey)&&F.key.toLowerCase()==="z"&&(F.preventDefault(),kt(()=>i.undo(),"已撤销上一步操作。"))},g),dt.querySelector("button").addEventListener("click",()=>t(),g),k.querySelector("button").addEventListener("click",()=>e(),g),document.addEventListener("fullscreenchange",()=>{const F=z('[data-lib-action="fullscreen"]'),D=!!document.fullscreenElement;F.setAttribute("aria-pressed",String(D)),F.title=D?"退出全屏":"全屏选书"},g);const q=i.subscribe((F,D)=>{v=F||i.getState(),nt(),D?.type==="sync-error"&&Q("其他页面的数据暂时无法读取。","error")}),it=window.setInterval(()=>{y&&!document.hidden&&!u&&nt(!1)},6e4);nt(!1),queueMicrotask(()=>{o(pt()),i.initialNotice&&Q(i.initialNotice,"error")});function _t(F){const D=dt.querySelector("button");D.disabled=!!F,D.setAttribute("aria-busy",String(!!F)),D.querySelector("strong").textContent=F?"正在准备书流…":"进入阅境图书馆"}function at(F){y=!!F,W.hidden=!y||m,document.body.classList.toggle("library-active",y),y?(nt(!1),Tt(_)):(J("dialog[open]").forEach(D=>ht(D.id)),u=null,Rt(!1),Ct(null),document.body.classList.remove("library-mode-gravity")),xt(K)}function Ot(F,D=0,N=""){const $=!!F;$!==m&&(m=$,W.hidden=!y||m,k.hidden=!m,document.body.classList.toggle("library-entering",m),xt(K)),X.style.width=Math.max(0,Math.min(1,D))*100+"%";const I=N||"正在穿过知识的边界";ct.textContent!==I&&(ct.textContent=I)}function Tt(F){_=F==="gravity"?"gravity":"library",W.dataset.mode=_,document.body.classList.toggle("library-mode-gravity",y&&_==="gravity"),J("[data-lib-mode]").forEach(D=>D.setAttribute("aria-selected",String(D.dataset.libMode===_))),z("#lib-space-title").textContent=_==="gravity"?"知识，自有引力。":"让知识，触手可及。",z("#lib-space-subtitle").textContent=_==="gravity"?"沿着知识的轨道，遇见下一本好书。":"在书架间漫游，点亮一本属于你的书。"}function Ft(F){x=!!F;const D=z('[data-lib-action="pause"]');D.innerHTML=$t(x?"play":"pause"),D.setAttribute("aria-label",x?"继续场景动画":"暂停场景动画"),D.setAttribute("aria-pressed",String(x))}function Lt(F){const D=F&&j(F)?F:null,N=D!==u;u=D,N&&Rt(!1),Ct(null),nt(!1),N&&(z("#lib-left-panel").scrollTop=0,z("#lib-right-panel").scrollTop=0)}function xt(F){K=F||K;const D=Number(K.scale??1),N=Number.isFinite(D)&&D>0?Math.max(.01,Math.min(4,D)):1;dt.style.setProperty("--lib-portal-scale",String(N)),dt.hidden=!K.visible||y||m;const $=Math.min(innerWidth/2,(dt.offsetWidth||260)*N/2+12),I=Math.min(innerHeight/2,(dt.offsetHeight||68)*N/2+12);dt.style.left=Math.max($,Math.min(innerWidth-$,K.x||0))+"px",dt.style.top=Math.max(I,Math.min(innerHeight-I,K.y||0))+"px"}function Ct(F,D={x:0,y:0}){const N=z("#lib-hover");if(!F||!y||u){N.hidden=!0;return}N.innerHTML=`<span>${qt(F.category)}</span><strong>${qt(F.title)}</strong><small>${qt(F.author)}<i>点击选书 ${$t("arrow")}</i></small>`,N.style.left=Math.max(15,Math.min(innerWidth-230,D.x+18))+"px",N.style.top=Math.max(90,Math.min(innerHeight-150,D.y+18))+"px",N.hidden=!1}return{setBookTurnAvailable:Rt,setBookPagesOpen:zt,setBookTurnPosition:Z,setActive:at,setPreparing:_t,setEntering:Ot,setMode:Tt,setPaused:Ft,showBook:Lt,setPortalPosition:xt,setHover:Ct,toast:Q,destroy(){p.abort(),q?.(),clearInterval(it),U&&wt(!1),W.remove(),dt.remove(),k.remove(),document.body.classList.remove("library-active","library-entering","library-mode-gravity")}}}function Sv({scene:i,building:t,landscape:e,lights:n,renderer:r}){const s=new Fe;s.name="阅境 · 空间光场",s.visible=!1,i.add(s);const a={transparent:!0,depthWrite:!1,blending:Os},o=new nr({color:"#5ccbdc",opacity:0,...a}),l=new Fe;s.add(l);for(const B of[99,114,137]){const V=Array.from({length:241},(K,W)=>{const z=W/240*Math.PI*2;return new L(Math.cos(z)*B,-1.65,Math.sin(z)*B)});l.add(new hl(new we().setFromPoints(V),o))}const c=new Bf(370,46,"#287584","#143e50");c.position.y=-1.72,c.material.transparent=!0,c.material.opacity=0,c.material.depthWrite=!1,s.add(c);const h=new we,d=new Float32Array(750);for(let B=0;B<250;B++){const V=K=>{const W=Math.sin(K*127.1+311.7)*43758.5453;return W-Math.floor(W)};d.set([(V(B*3)-.5)*390,4+V(B*3+1)*115,(V(B*3+2)-.5)*330],B*3)}h.setAttribute("position",new je(d,3));const f=new Nu({color:"#98e8ed",size:.45,sizeAttenuation:!0,opacity:0,...a}),p=new Fu(h,f);s.add(p);const g=new Fe;g.name="建筑光线轮廓";const y=new nr({color:"#6dc4cb",opacity:0,...a});t.children.filter(B=>B.isMesh&&B.geometry?.attributes.position?.count>300).forEach(B=>{const V=new Lr(new zu(B.geometry,38),y);g.add(V)}),s.add(g);const u=[...new Set(e.children.flatMap(B=>Array.isArray(B.material)?B.material:[B.material]).filter(Boolean))].map(B=>({material:B,original:B.color.clone(),target:new Gt(B.name.includes("water")?"#123f4c":"#142c34")})),_=[...new Set(t.children.map(B=>B.material).filter(B=>B?.isMeshPhysicalMaterial))],x=new Gt,v=new Gt("#050c17"),E=new Ys("#081522",9e-4),T={sky:.72,ambient:.2,sun:1.55,fill:1.5},P=Object.fromEntries(Object.entries({sky:"#a5d5e7",ambient:"#c7e1ed",sun:"#c4dff0",fill:"#51b5d4"}).map(([B,V])=>[B,new Gt(V)]));let R=null;function S(B=!1){R={background:i.background,fog:i.fog,environmentIntensity:i.environmentIntensity,exposure:r.toneMappingExposure,lampIntensity:e.userData.lampMaterial.emissiveIntensity,color:new Gt(B?"#14262d":"#e9eeeb"),lights:Object.fromEntries(Object.entries(n).map(([V,K])=>[V,{color:K.color.clone(),intensity:K.intensity}])),glass:_.map(V=>({material:V,color:V.emissive.clone(),intensity:V.emissiveIntensity,environment:V.envMapIntensity}))},u.forEach(V=>V.original.copy(V.material.color))}function M(B,V=0,K=0){if(!R)return;if(s.visible=B>.001,B<=.001){i.background=R.background,i.fog=R.fog,i.environmentIntensity=R.environmentIntensity,r.toneMappingExposure=R.exposure,Object.entries(n).forEach(([J,j])=>{j.color.copy(R.lights[J].color),j.intensity=R.lights[J].intensity}),R.glass.forEach(J=>{J.material.emissive.copy(J.color),J.material.emissiveIntensity=J.intensity,J.material.envMapIntensity=J.environment}),u.forEach(J=>J.material.color.copy(J.original)),t.scale.setScalar(1),e.scale.setScalar(1),e.userData.lampMaterial.emissiveIntensity=R.lampIntensity;return}i.background=x.copy(R.color).lerp(v,B),E.density=.00105*B,i.fog=E,i.environmentIntensity=Ee.lerp(R.environmentIntensity,.46,B),r.toneMappingExposure=Ee.lerp(R.exposure,.96-V*.1,B);for(const[J,j]of Object.entries(n))j.color.copy(R.lights[J].color).lerp(P[J],B),j.intensity=Ee.lerp(R.lights[J].intensity,T[J]*(1-.45*V),B);u.forEach(J=>J.material.color.copy(J.original).lerp(J.target,B*.94)),_.forEach((J,j)=>{J.emissive.set("#194853"),J.emissiveIntensity=B*(.55-V*.25+j*.025),J.envMapIntensity=.8}),e.userData.lampMaterial.emissiveIntensity=.1+B*3;const W=1-K*B*.46;t.scale.setScalar(W),e.scale.setScalar(W),g.scale.copy(t.scale);const z=B*(1-V*.65);o.opacity=z*.23,c.material.opacity=z*.25,f.opacity=z*.58,y.opacity=z*(.055+K*.08)}function U(B){s.visible&&(p.rotation.y=B*.006,l.rotation.y=Math.sin(B*.07)*.012)}return{group:s,capture:S,setAmount:M,update:U}}function Ev(i){i.updateMatrixWorld(!0);const t=new cl;t.environment=i.environment,t.environmentIntensity=i.environmentIntensity,t.background=new Gt("#050c17");const e=new Set,n=[];return i.traverseVisible(r=>{r.isLight&&e.add(r)}),i.traverse(r=>{let s;if(r.isLight){if(s=r.clone(!1),s.shadow&&s.shadow.mapSize.set(256,256),!e.has(r)){n.push(s);return}}else if(r.isInstancedMesh)s=new Uu(r.geometry,r.material,r.count),s.instanceMatrix=r.instanceMatrix,s.instanceColor=r.instanceColor;else if(r.isMesh)s=new ee(r.geometry,r.material);else if(r.isPoints)s=new Fu(r.geometry,r.material);else if(r.isLineSegments)s=new Lr(r.geometry,r.material);else if(r.isLine)s=new hl(r.geometry,r.material);else if(r.isSprite)s=new zd(r.material);else return;r.matrixWorld.decompose(s.position,s.quaternion,s.scale),s.castShadow=r.castShadow,s.receiveShadow=r.receiveShadow,s.frustumCulled=!1,t.add(s)}),{scene:t,focusLights:n}}async function wv({renderer:i,scene:t,camera:e,composer:n,renderPass:r,yieldBatch:s=async()=>{}}){const a=Ev(t),o=e.clone(!1);o.clearViewOffset(),o.updateProjectionMatrix();const l=async()=>{const h=i.getRenderTarget();let d;try{i.setRenderTarget(n.readBuffer),d=i.compileAsync(a.scene,o)}finally{i.setRenderTarget(h)}await d,await s()},c=()=>{const h={scene:r.scene,camera:r.camera,screen:n.renderToScreen,target:i.getRenderTarget()};try{r.scene=a.scene,r.camera=o,n.renderToScreen=!1,n.render(0)}finally{r.scene=h.scene,r.camera=h.camera,n.renderToScreen=h.screen,i.setRenderTarget(h.target)}};try{await l(),a.scene.fog=new Ys("#081522",.00105),await l(),c(),await s(),a.scene.add(...a.focusLights),await l(),c()}finally{a.scene.traverse(h=>{h.isLight&&h.shadow?.dispose()}),a.scene.clear()}}const Tv=i=>i<.5?4*i**3:1-(-2*i+2)**3/2,Cs=Ee.clamp;function Av({scene:i,camera:t,renderer:e,controls:n,building:r,landscape:s,lights:a,reducedMotion:o,getExteriorNight:l,onStart:c,onReturn:h}){let d="exterior",f="library",p=0,g=0,y=0,m=0,u=0,_=0,x=null,v=!1,E=!1;const T=new L;let P=!1,R=null,S=null,M=null,U=null,B=0,V=!1,K=null,W=null,z=null,J=null,j=!1,ot=null;const yt=e.domElement,Rt=yt.getAttribute("aria-label"),zt=yv();zt.expandSampleCatalog(),zt.refreshCatalogCategories();const Z=fv({camera:t,reducedMotion:o});i.add(Z.group),Z.setBooks(zt.getState().records),Z.setFavorites(zt.getState().favorites),Z.setActive(!1);const ut=Sv({scene:i,building:r,landscape:s,lights:a,renderer:e}),dt=[new L(26,10.5,13.5),new L(-26,10.5,-13.5)];let k=dt[0];const X=new L,ct=new L,pt=new L,mt=new _l,Mt=new lt,Nt=new Or("#d1efff",0,110,2);Nt.position.set(15,18,-26),t.add(Nt);const C=new Or("#ffd5a5",0,95,2);C.position.set(-15,-5,-27),t.add(C);const nt=()=>Math.max(1,Math.min(1.9,1.4/(innerWidth/innerHeight)));function Q(D){const N=D==="gravity"?{position:[0,66,272],target:[0,25,68],fov:44}:{position:[125,82,193],target:[0,22,8],fov:43};return{position:new L(...N.position).multiplyScalar(nt()),target:new L(...N.target),fov:N.fov}}function tt(D,N=1.6){R={start:p,duration:o?.12:N,from:t.position.clone(),to:D.position.clone(),fromTarget:n.target.clone(),toTarget:D.target.clone(),fromFov:t.fov,toFov:D.fov??t.fov}}function rt(){x&&(x=null,v=!1,E=!1,Z.clearFocus(),ot.showBook(null),n.enabled=d==="active")}function ht(D){if(x===D||d!=="active")return;const N=zt.getBook(D);N&&(R=null,n.autoRotate=!1,n.enabled=!1,x=D,v=!0,E=!1,Z.setHovered(null),ot.setHover(null,{x:0,y:0}),Z.focus(D,N),ot.showBook(D),ot.setBookTurnAvailable(!0))}function gt(D){P=!!D,Z.setPaused(P),ot?.setPaused?.(P)}function wt(D){!["library","gravity"].includes(D)||d!=="active"||(rt(),f=D,Z.setMode(f),ot.setMode(f),yt.setAttribute("aria-label",f==="gravity"?"知识引力场立体选书。点击图书查看详情，空格暂停，Escape返回。":"环绕图书馆的立体书流。点击图书查看详情，拖动观察，空格暂停。"),n.enabled=!1,tt(Q(f),1.65))}async function Vt(){d!=="exterior"||j||(j=!0,ot.setPreparing(!0),await xt(),ot.setPreparing(!1),j=!1,d==="exterior"&&(c?.(),S={position:t.position.clone(),target:n.target.clone(),fov:t.fov,maxDistance:n.maxDistance,minDistance:n.minDistance},ut.capture(l?.()||!1),d="entering",g=p,f="library",x=null,yt.setAttribute("aria-label","环绕图书馆的立体书流。点击图书查看详情，拖动观察，空格暂停。"),n.autoRotate=!1,n.enabled=!1,n.maxDistance=850,n.minDistance=65,t.clearViewOffset(),t.updateProjectionMatrix(),Z.setMode("library",{immediate:!0}),Z.resetEntry(),Z.setActive(!0),ot.setMode("library"),ot.setEntering(!0,0,"唤醒阅境"),ot.setActive(!0),tt(Q("library"),o?.15:5.9),o||(R.arc=R.from.clone().lerp(R.to,.5).add(new L(28,12,36).multiplyScalar(nt()))),gt(o)))}function kt(){if(d!=="entering")return;d="active",m=1,R=null;const D=Q(f);t.position.copy(D.position),n.target.copy(D.target),t.fov=D.fov,t.updateProjectionMatrix(),n.enabled=!0,n.update(),Z.setEntryProgress(1),ot.setEntering(!1,1,"书流已就绪")}function A(){d==="active"&&(rt(),f="library",Z.setMode(f,{immediate:!0}),ot.setMode(f),d="entering",g=p,n.enabled=!1,Z.resetEntry(),gt(o),ot.setEntering(!0,0,"书籍正在馆后集结"),tt(Q("library"),5.9))}function b(){d==="exterior"||d==="exiting"||(rt(),Z.setHovered(null),ot.setHover(null,{x:0,y:0}),ot.setEntering(!1,1,""),d="exiting",y=p,n.enabled=!1,tt(S,1.25))}ot=Mv({store:zt,onEnter:Vt,onSkipEntry:kt,onExit:b,onMode:wt,onSelectBook:ht,onClearSelection:rt,onFilter:D=>Z.setBooks(D),onPause:gt,onReplay:A,onToggleBookPages:()=>{!x||!v||(E=Z.setPagesOpen(!E),ot.setBookPagesOpen(E))},onCameraReset:()=>{d==="active"&&(rt(),n.enabled=!1,tt(Q(f),1.2))}}),zt.subscribe(()=>{if(Z.setFavorites(zt.getState().favorites),x){const D=zt.getBook(x);D?Z.updateRecord?.(D):rt()}});function q(D){const N=yt.getBoundingClientRect();return Mt.set((D.clientX-N.left)/N.width*2-1,-(D.clientY-N.top)/N.height*2+1)}function it(D){const N=q(D),$=Z.pick(N,t);if(!$)return null;if(f==="library"&&$.id!==x){mt.setFromCamera(N,t);const I=mt.intersectObjects(r.children,!1)[0];if(I&&I.distance<$.distance-.4)return null}return $}const _t=D=>{if(d!=="active"||D.button!==0)return;const N=it(D);if(M={x:D.clientX,y:D.clientY,previousX:D.clientX,previousY:D.clientY,id:N?.id||null,moved:!1},N||x){n.enabled=!1;try{yt.setPointerCapture(D.pointerId)}catch{}}},at=D=>{if(d!=="active")return;if(M){Math.hypot(D.clientX-M.x,D.clientY-M.y)>6&&(M.moved=!0),x&&M.id===x&&M.moved&&(Z.rotateHero(D.clientX-M.previousX,D.clientY-M.previousY),v=!0,ot.setBookTurnAvailable(!0)),M.previousX=D.clientX,M.previousY=D.clientY;return}if(x)return;const N=it(D);U=N?.id||null,Z.setHovered(U),yt.style.cursor=N?"pointer":"grab",ot.setHover(N?zt.getBook(N.id):null,{x:D.clientX,y:D.clientY})},Ot=D=>{if(!M)return;const N=M;if(M=null,d==="active"){!N.moved&&N.id&&ht(N.id),n.enabled=d==="active"&&!x;try{yt.releasePointerCapture(D.pointerId)}catch{}}};yt.addEventListener("pointerdown",_t,!0),yt.addEventListener("pointermove",at),yt.addEventListener("pointerup",Ot),yt.addEventListener("pointercancel",()=>{M=null,n.enabled=d==="active"&&!x}),yt.addEventListener("pointerleave",()=>{U=null,Z.setHovered(null),ot.setHover(null,{x:0,y:0}),yt.style.cursor=""}),n.addEventListener("start",()=>{d==="active"&&(R=null)}),document.addEventListener("keydown",D=>{d==="exterior"||/^(INPUT|SELECT|TEXTAREA)$/.test(document.activeElement?.tagName)||document.querySelector("dialog[open]")||(D.key==="Escape"&&(d==="entering"?kt():rt()),D.code==="Space"&&d==="active"&&(D.preventDefault(),gt(!P)))});function Tt(){K?.setSize(innerWidth,innerHeight),d!=="exterior"&&(t.clearViewOffset(),t.updateProjectionMatrix(),d==="active"&&!x&&(n.enabled=!1,tt(Q(f),.35)))}function Ft(){K||(K=new q_(e),z=new Y_(i,t),K.addPass(z),W=new rr(new lt(innerWidth,innerHeight),.42,.55,1.1),K.addPass(W),K.addPass(new j_))}const Lt=()=>new Promise(D=>{requestAnimationFrame(()=>{"requestIdleCallback"in window?window.requestIdleCallback(D,{timeout:80}):setTimeout(D,0)})});function xt(){return J||(J=(async()=>{performance.now(),await Lt(),await Z.prepare(e,{batchSize:6,yieldBatch:Lt}),Ft(),await Lt(),await wv({renderer:e,scene:i,camera:t,composer:K,renderPass:z,yieldBatch:Lt})})().catch(D=>{}),J)}requestAnimationFrame(()=>{xt()});function Ct(D,N){if(p=N,d==="exterior"){if(N-B>.25){B=N,V=!0;const St=[...dt].sort((Pt,O)=>Pt.distanceToSquared(t.position)-O.distanceToSquared(t.position));for(const Pt of St){mt.set(t.position,Pt.clone().sub(t.position).normalize());const O=mt.intersectObjects(r.children,!1)[0];if(!O||O.distance>=t.position.distanceTo(Pt)-2){k=Pt,V=!1;break}}}X.copy(k).project(t);const $=(X.x*.5+.5)*innerWidth,I=(-X.y*.5+.5)*innerHeight;pt.set(1,0,0).applyQuaternion(t.quaternion),ct.copy(k).addScaledVector(pt,22).project(t);const vt=Math.hypot((ct.x-X.x)*innerWidth/2,(ct.y-X.y)*innerHeight/2);ot.setPortalPosition({x:$,y:I,scale:Cs(vt/240,.24,1.35),visible:!V&&X.z<1&&$>35&&$<innerWidth-35&&I>95&&I<innerHeight-90});return}if(d==="entering"){const $=Cs((N-g)/(o?.18:6.4),0,1);m=Ee.smoothstep($,0,.58),Z.setEntryProgress($);const I=$<.16?"入口已唤醒":$<.43?"书籍正从馆后绕来":$<.73?"双向书流 · 前景交会":"欢迎进入阅境";ot.setEntering(!0,$,I),$===1&&kt()}else if(d==="exiting"&&(m=1-Cs((N-y)/(o?.15:1.25),0,1),m===0)){d="exterior",Z.setActive(!1),Z.setEntryProgress(0),yt.setAttribute("aria-label",Rt),R=null,t.position.copy(S.position),n.target.copy(S.target),t.fov=S.fov,t.updateProjectionMatrix(),ot.setActive(!1),n.enabled=!0,n.maxDistance=S.maxDistance,n.minDistance=S.minDistance,n.update(),ut.setAmount(0),Nt.intensity=0,C.intensity=0,h?.(),yt.style.cursor="";return}if(u=Ee.damp(u,f==="gravity"?1:0,3.6,D),_=Ee.damp(_,x?1:0,5,D),R){const $=Cs((N-R.start)/R.duration,0,1),I=Tv($);R.arc?t.position.copy(R.from).multiplyScalar((1-I)**2).addScaledVector(R.arc,2*(1-I)*I).addScaledVector(R.to,I**2):t.position.lerpVectors(R.from,R.to,I),n.target.lerpVectors(R.fromTarget,R.toTarget,I),t.fov=Ee.lerp(R.fromFov,R.toFov,I),t.updateProjectionMatrix(),t.lookAt(n.target),$===1&&(R=null,n.enabled=d==="active"&&!x)}ut.setAmount(m,_,u),ut.update(N),Nt.intensity=1450*_,C.intensity=600*_,Z.update(D),x&&v&&d==="active"&&Z.getFocusAnchor(T)&&(T.project(t),ot.setBookTurnPosition({x:(T.x*.5+.5)*innerWidth+12,y:(-T.y*.5+.5)*innerHeight-24,visible:T.z<1}))}function F(){Ft(),W.strength=m*(.42+_*.1),K.render()}return{update:Ct,resize:Tt,render:F,get running(){return d!=="exterior"},store:zt,world:Z}}const pe=i=>document.querySelector(i);let Le;try{Le=new M_({canvas:pe("#scene-canvas"),antialias:!0,alpha:!0,powerPreference:"high-performance"})}catch(i){throw pe("#loading").hidden=!0,pe("#webgl-error").hidden=!1,i}Le.setPixelRatio(Math.min(window.devicePixelRatio,1.6));Le.setSize(innerWidth,innerHeight);Le.shadowMap.enabled=!0;Le.shadowMap.type=cu;Le.toneMapping=Ko;Le.toneMappingExposure=.92;Le.outputColorSpace=Ne;const xn=new cl,Ge=new en(36,innerWidth/innerHeight,.5,1300);xn.add(Ge);function Ml(){Ge.setViewOffset(innerWidth,innerHeight,innerWidth>900?-innerWidth*.065:0,0,innerWidth,innerHeight)}Ml();const de=new E_(Ge,Le.domElement);de.enableDamping=!0;de.dampingFactor=.075;de.minDistance=38;de.maxDistance=450;de.maxPolarAngle=Math.PI/2-.035;de.minPolarAngle=.025;de.autoRotateSpeed=.5;de.screenSpacePanning=!0;de.target.set(0,8,0);de.enablePan=!0;const Sl=matchMedia("(prefers-reduced-motion: reduce)").matches,lh=new Vo(Le),ch=new O_,Cv=lh.fromScene(ch,.04);xn.environment=Cv.texture;xn.environmentIntensity=.38;ch.dispose();lh.dispose();const El=new Lf("#e8f3ff","#b4b7a0",1.35);xn.add(El);const wl=new Nf("#ffffff",.16);xn.add(wl);const An=new $u("#fff1db",2.35);An.position.set(-85,150,85);An.castShadow=!0;An.shadow.mapSize.set(2048,2048);Object.assign(An.shadow.camera,{left:-130,right:130,top:125,bottom:-125,near:1,far:400});An.shadow.normalBias=.16;An.shadow.bias=-15e-5;xn.add(An);const Qs=new $u("#c5e6f2",.8);Qs.position.set(90,60,-100);xn.add(Qs);pe("#loading-label").textContent="还原陶板与玻璃立面…";const zr=z_(),Tl=k_();xn.add(zr,Tl);const ta=new ee(new Qn(2e3,2e3),new Tf({color:"#314c43",opacity:.115}));ta.rotation.x=-Math.PI/2;ta.position.y=-1.84;ta.receiveShadow=!0;xn.add(ta);const Rv={overview:{position:[157,114,183],target:[0,6,0]},front:{position:[-17,30,169],target:[-17,15,5]},rear:{position:[17,30,-169],target:[17,15,-5]},entrance:{position:[103,42,104],target:[21,12,14]},top:{position:[5,226,76],target:[0,0,0]}};let un=null,Ye=!1,Vi=!1;function Al(){return Math.max(1,Math.min(1.85,1.4/(innerWidth/innerHeight)))}let qa=Al();function Pv(i){const t=new L(...i);return t.multiplyScalar(Al()),t}function Cl(i,t=!0){const e=Rv[i];de.autoRotate=!1,kr();const n=Pv(e.position),r=new L(...e.target);t&&!Sl?un={time:performance.now(),from:Ge.position.clone(),to:n,fromTarget:de.target.clone(),toTarget:r}:(Ge.position.copy(n),de.target.copy(r),de.update()),document.querySelectorAll("[data-view]").forEach(s=>{const a=s.dataset.view===i;s.classList.toggle("active",a),s.setAttribute("aria-pressed",String(a))})}Cl("overview",!1);const uh=zr.userData.anchors.map(i=>{const t=document.createElement("div");t.className="model-label";const e=document.createElement("strong");e.textContent=i.title;const n=document.createElement("span");return n.textContent=i.subtitle,t.append(e,n),pe("#labels").append(t),{...i,el:t}}),Rs=new L,su=new _l,Ya=new L;function Dv(){for(const i of uh){if(!Vi){i.el.hidden=!0;continue}Rs.copy(i.position).project(Ge),Ya.subVectors(i.position,Ge.position);const t=Ya.length();su.set(Ge.position,Ya.normalize());const e=su.intersectObjects(zr.children,!1)[0],n=e&&e.distance<t-1.2,r=(Rs.x*.5+.5)*innerWidth,s=(-Rs.y*.5+.5)*innerHeight,a=!n&&Rs.z<1&&r>80&&r<innerWidth-80&&s>105&&s<innerHeight-120;i.el.hidden=!a,a&&(i.el.style.transform=`translate(${r}px, ${s}px) translate(-50%, -100%)`)}}function kr(){const i=pe("#auto-rotate");i.setAttribute("aria-pressed",String(de.autoRotate)),i.classList.toggle("active",de.autoRotate),i.querySelector(".button-text").textContent=de.autoRotate?"停止环绕":"自动环绕"}document.querySelectorAll("[data-view]").forEach(i=>i.addEventListener("click",()=>Cl(i.dataset.view)));pe("#reset-view").addEventListener("click",()=>Cl("overview"));pe("#auto-rotate").addEventListener("click",()=>{un=null,de.autoRotate=!de.autoRotate,kr()});pe("#annotations-toggle").addEventListener("click",i=>{Vi=!Vi,i.currentTarget.setAttribute("aria-pressed",String(Vi)),i.currentTarget.classList.toggle("active",Vi),i.currentTarget.setAttribute("aria-label",Vi?"隐藏建筑标注":"显示建筑标注")});pe("#lighting-toggle").addEventListener("click",i=>{Ye=!Ye,document.body.classList.toggle("night",Ye),i.currentTarget.setAttribute("aria-pressed",String(Ye)),i.currentTarget.querySelector(".button-text").textContent=Ye?"夜景":"日景",El.intensity=Ye?.45:1.35,wl.intensity=Ye?.1:.16,An.intensity=Ye?.65:2.35,An.color.set(Ye?"#c0d8f5":"#fff1db"),Qs.intensity=Ye?.5:.8,Le.toneMappingExposure=Ye?.85:.92,zr.userData.setNight(Ye),Tl.userData.setNight(Ye)});pe("#fullscreen").addEventListener("click",async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{pe("#fullscreen").title="当前窗口不支持全屏，请在浏览器中打开"}});document.addEventListener("fullscreenchange",()=>pe("#fullscreen").setAttribute("aria-label",document.fullscreenElement?"退出全屏":"全屏查看"));let au=null;function ea(i){i&&(au=document.activeElement),pe("#info-drawer").hidden=!i,pe("#drawer-backdrop").hidden=!i,pe("#info-button").setAttribute("aria-expanded",String(i)),pe("#app").inert=i,i?(de.autoRotate=!1,kr(),pe("#close-info").focus()):au?.focus()}pe("#info-button").addEventListener("click",()=>ea(!0));pe("#close-info").addEventListener("click",()=>ea(!1));pe("#drawer-backdrop").addEventListener("click",()=>ea(!1));document.addEventListener("keydown",i=>{if(!pe("#info-drawer").hidden&&(i.key==="Escape"&&ea(!1),i.key==="Tab")){const t=[...pe("#info-drawer").querySelectorAll("button, a[href]")],e=t[0],n=t.at(-1);i.shiftKey&&document.activeElement===e?(i.preventDefault(),n.focus()):!i.shiftKey&&document.activeElement===n&&(i.preventDefault(),e.focus())}});de.addEventListener("start",()=>{un=null,de.autoRotate=!1,kr()});addEventListener("resize",()=>{const i=Al();Math.abs(i-qa)>.001&&(un=null,Ge.position.sub(de.target).multiplyScalar(i/qa).add(de.target),qa=i),Ge.aspect=innerWidth/innerHeight,Ge.updateProjectionMatrix(),Ml(),Le.setSize(innerWidth,innerHeight),Fs.resize()});Le.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),pe("#webgl-error").hidden=!1});Le.domElement.addEventListener("webglcontextrestored",()=>location.reload());pe("#loading-label").textContent="装订立体馆藏，连接阅境…";const Fs=Av({scene:xn,camera:Ge,renderer:Le,controls:de,building:zr,landscape:Tl,lights:{sky:El,ambient:wl,sun:An,fill:Qs},reducedMotion:Sl,getExteriorNight:()=>Ye,onStart:()=>{un=null,de.autoRotate=!1,kr()},onReturn:()=>{Ml(),Ge.updateProjectionMatrix()}});let ou=performance.now();function Lv(i){const t=Math.min((i-ou)/1e3,.1);if(ou=i,un){const e=Math.min((i-un.time)/1100,1),n=e<.5?4*e*e*e:1-Math.pow(-2*e+2,3)/2;Ge.position.lerpVectors(un.from,un.to,n),de.target.lerpVectors(un.fromTarget,un.toTarget,n),e>=1&&(un=null)}de.update(t),Fs.update(t,i/1e3),Fs.running?(uh.forEach(e=>{e.el.hidden=!0}),Fs.render()):(Dv(),Le.render(xn,Ge))}Le.setAnimationLoop(Lv);requestAnimationFrame(()=>{pe("#loading").classList.add("loaded"),setTimeout(()=>{pe("#loading").hidden=!0},Sl?0:550)});
