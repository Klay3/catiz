function clearContent() {
  document.body.innerHTML = "";
  const b = document.createElement("iframe");
  b.setAttribute("src", window.location.href);
  b.setAttribute("id", "clicker");
  b.style.width = "100%";
  b.style.height = "100vh";
  b.style.border = "none";
  document.body.appendChild(b);
}
function generateDiv() {
  const e = document.createElement("div");
  e.style.position = "absolute";
  e.style.transition = "0.3s";
  e.id = "SELECT";
  e.style.width = "38px";
  e.style.height = "40px";
  e.style.borderRadius = "38px";
  e.style.borderWidth = "4px";
  e.style.borderColor = "red";
  e.style.borderStyle = "solid";
  e.style.opacity = "0.35";
  e.style.left = window.innerWidth * 74.35064935064936 / 100 - 22;
  e.style.top = window.innerHeight * 78.17796610169492 / 100 - 35;
  document.body.appendChild(e);
}
function muteMedia(l) {
  l.muted = true;
  l.pause();
}
function mutePageMedia() {
  document.querySelectorAll("video, audio").forEach(m => {
    return muteMedia(m);
  });
}
mutePageMedia();
const points = [{x: 25.649350649350648, y: 61.86440677966102}, {x: 41.55844155844156, y: 61.86440677966102}, {x: 57.7922077922078, y: 61.86440677966102}, {x: 74.35064935064936, y: 61.86440677966102}, {x: 25.649350649350648, y: 70.12711864406779}, {x: 41.55844155844156, y: 70.12711864406779}, {x: 57.7922077922078, y: 70.12711864406779}, {x: 74.35064935064936, y: 70.12711864406779}, {x: 25.649350649350648, y: 78.17796610169492}, {x: 41.55844155844156, y: 78.17796610169492}, {x: 57.7922077922078, y: 78.17796610169492}, {x: 74.35064935064936, y: 78.17796610169492}];
function delay(c) {
  return new Promise(d => {
    return setTimeout(d, c);
  });
}
async function mainLoop() {
  Laya.SoundManager.setMusicVolume(0);
  Laya.SoundManager.setSoundVolume(0);
  await delay(5000);
  setInterval(function () {
    const h = window.manager.cat.cats;
    const g = {};
    for (let i = 0; i < h.length; i++) {
      const f = h[i];
      if (null !== f) {
        if (g.hasOwnProperty(f)) {
          simulateMouseDrag("layaCanvas", window.innerWidth * points[g[f]].x / 100, window.innerHeight * points[g[f]].y / 100, window.innerWidth * points[i].x / 100, window.innerHeight * points[i].y / 100);
          break;
        }
        ;
        g[f] = i;
      }
    }
    ;
    simulateMouseDrag("layaCanvas", 100, 100);
  }, 1e3);
}
function simulateMouseDrag(o, x, y, q, r) {
  const w = {clientX: x, clientY: y, bubbles: true, button: 0};
  const n = document.getElementById(o);
  const s = new MouseEvent("mousedown", w);
  n.dispatchEvent(s);
  const v = {clientX: q, clientY: r, bubbles: true};
  const t = new MouseEvent("mousemove", v);
  n.dispatchEvent(t);
  const p = {clientX: q, clientY: r, bubbles: true, button: 0};
  const u = new MouseEvent("mouseup", p);
  n.dispatchEvent(u);
}
function moveSelector(k, j) {
  const e = document.getElementById("SELECT");
  e.style.position = "absolute";
  e.style.top = k - 35 + "px";
  e.style.left = j - 22 + "px";
}
mainLoop();
