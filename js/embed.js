(() => {
  // --- Inject CSS dynamically ---
  const css = `
    :root {
      --sunset-orange: #FD5E53;
      --dragonfruit-pink: #f14d89;
      --alien-green: #6bc417;
      --mystic-teal: #454060;
      --galaxy-purple: #8977db;
      --oceanfoam: #8ddcdc;
      --solar-flare-yellow: #eec23a;
      --twilight-indigo: #113f5d;
      --solar-cloud-gray: #929183;
    }
    .blr { filter: blur(var(--blr-amount,0.5rem)) !important; }
    .crcle-txt span { position: absolute; transform-origin: center center; }
    .hover-prg {
      --mx:50%;
      --my:50%;
      --r:0px;
      --fade:20px;
      -webkit-mask-image: radial-gradient(circle var(--r) at var(--mx) var(--my), rgba(0,0,0,1) calc(100% - var(--fade)), rgba(0,0,0,0) 100%);
      -webkit-mask-repeat: no-repeat;
      -webkit-mask-size: cover;
      mask-image: radial-gradient(circle var(--r) at var(--mx) var(--my), rgba(0,0,0,1) calc(100% - var(--fade)), rgba(0,0,0,0) 100%);
      mask-repeat: no-repeat;
      mask-size: cover;
    }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  // --- Blur effect ---
  document.querySelectorAll(".blr").forEach(el => {
    const b = el.dataset.blur;
    if (b) el.style.setProperty("--blr-amount", parseFloat(b)/100*1.5 + "rem");
  });

  // --- Circular text ---
  document.querySelectorAll(".crcle-txt").forEach(el => {
    const text = el.getAttribute('data-text') || '';
    const chars = text.split('');
    const minR = 40;
    const angleStep = 360 / chars.length;
    const radius = Math.max(el.getAttribute('data-radius') || 0, chars.length * 8, minR);

    el.style.position = 'relative';
    el.style.width = `${radius*2}px`;
    el.style.height = `${radius*2}px`;
    el.innerHTML = '';

    chars.forEach((ch, i) => {
      const span = document.createElement('span');
      const ang = angleStep * i - 90;
      const x = radius + radius * Math.cos(ang * Math.PI/180);
      const y = radius + radius * Math.sin(ang * Math.PI/180);
      span.textContent = ch;
      span.style.position = 'absolute';
      span.style.left = `${x}px`;
      span.style.top = `${y}px`;
      span.style.transform = `translate(-50%, -50%) rotate(${ang+90}deg)`;
      el.appendChild(span);
    });
  });

  // --- Hover radial mask with hover-effect ---
  document.querySelectorAll('.hover-prg').forEach(el => {
    const effect = el.getAttribute('hover-effect') || 'directly';

    if (effect === 'directly') {
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', ((e.clientX - r.left)/r.width*100)+'%');
        el.style.setProperty('--my', ((e.clientY - r.top)/r.height*100)+'%');
        el.style.setProperty('--r', '70px');
      });
      el.addEventListener('mouseleave', () => el.style.setProperty('--r','0px'));
    }

    if (effect === 'smooth') {
      const maxBlur = 6; // px
      let currentBlur = 0;
      let targetBlur = 0;

      const animate = () => {
        currentBlur += (targetBlur - currentBlur) * 0.2;
        el.style.filter = `blur(${currentBlur}px)`;
        requestAnimationFrame(animate);
      };
      animate();

      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left)/r.width;
        const y = (e.clientY - r.top)/r.height;
        const dx = Math.abs(x - 0.5);
        const dy = Math.abs(y - 0.5);
        const dist = Math.sqrt(dx*dx + dy*dy); // 0 center -> max ~0.707 corner
        targetBlur = Math.min(dist / 0.707 * maxBlur, maxBlur);
      });
      el.addEventListener('mouseleave', () => targetBlur = 0);
    }
  });

})();

