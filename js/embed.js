document.querySelectorAll(".blr").forEach(el=>{let b=el.dataset.blur;if(b){let r=parseFloat(b)/100*1.5;el.style.setProperty("--blr-amount",r+"rem");}});
