(function(){
  // year
  var yr = document.getElementById('year');
  if(yr) yr.textContent = new Date().getFullYear();

  // nav scroll state
  var nav = document.getElementById('nav');
  function onScroll(){ if(nav) nav.classList.toggle('scrolled', window.scrollY > 40); }
  onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

  // mobile menu
  var toggle = document.getElementById('navtoggle');
  var links = document.getElementById('navlinks');
  if(toggle && links){
    toggle.addEventListener('click', function(){
      var open = links.classList.toggle('open');
      toggle.classList.toggle('open', open);
    });
    links.querySelectorAll('a').forEach(function(a){
      a.addEventListener('click', function(){ links.classList.remove('open'); toggle.classList.remove('open'); });
    });
  }

  // contact form (static -> mailto)
  var form = document.getElementById('contactform');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var namn = encodeURIComponent(form.namn.value || '');
      var epost = encodeURIComponent(form.epost.value || '');
      var med = encodeURIComponent(form.meddelande.value || '');
      window.location.href = 'mailto:hej@qonnected.se?subject=Förfrågan från ' + namn + '&body=' + med + '%0D%0A%0D%0AKontakt: ' + epost;
    });
  }

  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // reveal on scroll
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); } });
    },{threshold:.12});
    document.querySelectorAll('.reveal,.step').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal,.step').forEach(function(el){ el.classList.add('in'); });
  }

  /* ---------- CONNECTION NETWORK (only on pages with #net) ---------- */
  var canvas = document.getElementById('net');
  if(!canvas) return;
  var ctx = canvas.getContext('2d');
  var W,H,DPR,nodes=[],anchors=[],pulses=[],mouse={x:-999,y:-999},raf,t=0;

  function size(){
    DPR = Math.min(window.devicePixelRatio||1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = W*DPR; canvas.height = H*DPR;
    ctx.setTransform(DPR,0,0,DPR,0,0);
    build();
  }
  function build(){
    nodes=[]; anchors=[]; pulses=[];
    var A = [
      {x:W*0.58, y:H*0.30, label:'Idéer'},
      {x:W*0.86, y:H*0.50, label:'System'},
      {x:W*0.66, y:H*0.74, label:'Människor'}
    ];
    A.forEach(function(a){ a.r=6; a.bx=a.x; a.by=a.y; a.phase=Math.random()*6.28; anchors.push(a); });
    var count = W < 680 ? 16 : (W < 1100 ? 26 : 38);
    for(var i=0;i<count;i++){
      var rx = Math.pow(Math.random(),0.7);
      nodes.push({x:W*(0.30 + rx*0.70), y:Math.random()*H, vx:(Math.random()-.5)*0.18, vy:(Math.random()-.5)*0.18, r:Math.random()*1.6+1.1});
    }
    var pairs=[[0,1],[1,2],[2,0],[0,1]];
    pairs.forEach(function(p,i){ pulses.push({a:p[0],b:p[1],t:Math.random(),sp:0.0016+Math.random()*0.0014,delay:i*120}); });
  }
  function nearestNode(ax,ay){
    var best=null,bd=1e9;
    for(var k=0;k<nodes.length;k++){var n=nodes[k];var d=(n.x-ax)*(n.x-ax)+(n.y-ay)*(n.y-ay); if(d<bd){bd=d;best=n;}}
    return best;
  }
  function frame(){
    t++;
    ctx.clearRect(0,0,W,H);
    var LINK = W<680?108:150;
    for(var i=0;i<nodes.length;i++){
      var n=nodes[i];
      n.x+=n.vx; n.y+=n.vy;
      if(n.x<W*0.22||n.x>W) n.vx*=-1;
      if(n.y<0||n.y>H) n.vy*=-1;
      var dx=n.x-mouse.x, dy=n.y-mouse.y, d2=dx*dx+dy*dy;
      if(d2<14000){ var f=(14000-d2)/14000*0.6; n.x+=dx/Math.sqrt(d2+1)*f; n.y+=dy/Math.sqrt(d2+1)*f; }
    }
    anchors.forEach(function(a){ a.x=a.bx+Math.sin(t*0.006+a.phase)*10; a.y=a.by+Math.cos(t*0.005+a.phase)*10; });
    for(var p=0;p<nodes.length;p++){
      for(var q=p+1;q<nodes.length;q++){
        var a=nodes[p],b=nodes[q];
        var ddx=a.x-b.x,ddy=a.y-b.y,d=Math.sqrt(ddx*ddx+ddy*ddy);
        if(d<LINK){ var o=(1-d/LINK); ctx.strokeStyle='rgba(120,170,240,'+(0.16*o)+')'; ctx.lineWidth=1; ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke(); }
      }
    }
    ctx.lineWidth=1.3;
    anchors.forEach(function(a,i){
      var b=anchors[(i+1)%anchors.length];
      ctx.strokeStyle='rgba(120,180,255,0.5)';
      ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      var nn=nearestNode(a.x,a.y);
      if(nn){ctx.strokeStyle='rgba(120,180,255,0.28)';ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(nn.x,nn.y);ctx.stroke();}
    });
    for(var m=0;m<nodes.length;m++){ var nd=nodes[m]; ctx.fillStyle='rgba(150,200,255,0.55)'; ctx.beginPath();ctx.arc(nd.x,nd.y,nd.r,0,6.2832);ctx.fill(); }
    pulses.forEach(function(p){
      if(p.delay>0){p.delay--;return;}
      p.t+=p.sp; if(p.t>1){p.t=0;}
      var a=anchors[p.a],b=anchors[p.b];
      var x=a.x+(b.x-a.x)*p.t, y=a.y+(b.y-a.y)*p.t;
      var g=ctx.createRadialGradient(x,y,0,x,y,9);
      g.addColorStop(0,'rgba(160,220,255,0.95)');g.addColorStop(1,'rgba(120,200,255,0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(x,y,9,0,6.2832);ctx.fill();
      ctx.fillStyle='#7fc8ff';ctx.beginPath();ctx.arc(x,y,2.6,0,6.2832);ctx.fill();
    });
    anchors.forEach(function(a){
      var g=ctx.createRadialGradient(a.x,a.y,0,a.x,a.y,22);
      g.addColorStop(0,'rgba(70,180,255,0.45)');g.addColorStop(1,'rgba(70,180,255,0)');
      ctx.fillStyle=g;ctx.beginPath();ctx.arc(a.x,a.y,22,0,6.2832);ctx.fill();
      ctx.fillStyle='#0b2f74';ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,6.2832);ctx.fill();
      ctx.strokeStyle='rgba(120,200,255,0.7)';ctx.lineWidth=2;ctx.beginPath();ctx.arc(a.x,a.y,a.r,0,6.2832);ctx.stroke();
      ctx.font='600 12px "Space Mono", monospace';
      ctx.fillStyle='rgba(200,225,255,0.92)';ctx.textAlign='left';ctx.textBaseline='middle';
      ctx.fillText(a.label, a.x+a.r+9, a.y);
    });
    raf=requestAnimationFrame(frame);
  }
  function drawStatic(){ t=1; cancelAnimationFrame(raf); frame(); cancelAnimationFrame(raf); }

  window.addEventListener('mousemove',function(e){ var r=canvas.getBoundingClientRect(); mouse.x=e.clientX-r.left; mouse.y=e.clientY-r.top; });
  window.addEventListener('mouseleave',function(){ mouse.x=-999; mouse.y=-999; });
  var rt;
  window.addEventListener('resize',function(){ clearTimeout(rt); rt=setTimeout(function(){ size(); if(reduce)drawStatic(); },180); });

  size();
  if(reduce){ drawStatic(); } else { raf=requestAnimationFrame(frame); }
})();
