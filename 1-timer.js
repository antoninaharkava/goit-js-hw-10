import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";const r=document.querySelector("#datetime-picker"),o=document.querySelector("[data-start]"),h=document.querySelector("[data-days]"),y=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),f=document.querySelector("[data-seconds]");o.setAttribute("disabled","");let a;const p={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){if(t[0]<=new Date){m.error({close:!1,timeout:3e3,position:"topRight",progressBar:!1,message:"Please choose a date in the future"}),o.setAttribute("disabled","");return}a=t[0],o.removeAttribute("disabled")}};l(r,p);function S(t){const c=Math.floor(t/864e5),i=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),u=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:i,minutes:d,seconds:u}}const n=t=>String(t).padStart(2,"0"),E=()=>{r.setAttribute("disabled",""),o.setAttribute("disabled","");const t=setInterval(()=>{const s=a-Date.now(),e=S(s);h.textContent=n(e.days),y.textContent=n(e.hours),b.textContent=n(e.minutes),f.textContent=n(e.seconds),s<1e3&&(clearInterval(t),r.removeAttribute("disabled"))},1e3)};o.addEventListener("click",E);
//# sourceMappingURL=1-timer.js.map
