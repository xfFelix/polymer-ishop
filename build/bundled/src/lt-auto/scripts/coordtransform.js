(function(a,b){'function'===typeof define&&define.amd?define([],b):'object'===('undefined'===typeof module?'undefined':babelHelpers.typeof(module))&&module.exports?module.exports=b():a.coordtransform=b()})(this,function(){var b=Math.abs,c=Math.cos,d=Math.atan2,e=Math.sin,f=Math.sqrt,g=3.141592653589793*3e3/180,h=3.141592653589793,i=6378245,a=0.006693421622965943,j=function(a,c){var c=+c,a=+a,d=-100+2*a+3*c+0.2*c*c+0.1*a*c+0.2*f(b(a));return d+=2*(20*e(6*a*h)+20*e(2*a*h))/3,d+=2*(20*e(c*h)+40*e(c/3*h))/3,d+=2*(160*e(c/12*h)+320*e(c*h/30))/3,d},k=function(a,c){var c=+c,a=+a,d=300+a+2*c+0.1*a*a+0.1*a*c+0.1*f(b(a));return d+=2*(20*e(6*a*h)+20*e(2*a*h))/3,d+=2*(20*e(a*h)+40*e(a/3*h))/3,d+=2*(150*e(a/12*h)+300*e(a/30*h))/3,d},l=function(a,b){var b=+b,a=+a;return!(73.66<a&&135.05>a&&3.86<b&&53.55>b)};return{bd09togcj02:function(a,b){var a=+a,b=+b,h=a-0.0065,i=b-6e-3,j=f(h*h+i*i)-2e-5*e(i*g),k=d(i,h)-3e-6*c(h*g),l=j*c(k),m=j*e(k);return[l,m]},gcj02tobd09:function(a,b){var b=+b,a=+a,h=f(a*a+b*b)+2e-5*e(b*g),i=d(b,a)+3e-6*c(a*g),j=h*c(i)+0.0065,k=h*e(i)+6e-3;return[j,k]},wgs84togcj02:function(b,d){var d=+d,b=+b;if(l(b,d))return[b,d];var g=j(b-105,d-35),m=k(b-105,d-35),n=d/180*h,o=e(n);o=1-a*o*o;var p=f(o);g=180*g/(i*(1-a)/(o*p)*h),m=180*m/(i/p*c(n)*h);var q=d+g,r=b+m;return[r,q]},gcj02towgs84:function(b,d){var d=+d,b=+b;if(l(b,d))return[b,d];var g=j(b-105,d-35),m=k(b-105,d-35),n=d/180*h,o=e(n);o=1-a*o*o;var p=f(o);g=180*g/(i*(1-a)/(o*p)*h),m=180*m/(i/p*c(n)*h);var q=d+g,r=b+m;return[2*b-r,2*d-q]}}});