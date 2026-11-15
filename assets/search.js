// Shared search for every page: titles, heroes and character names, keyboard first.
// MCUSearch.mount({ onTitle(id), onHero(id)?, button?: Element, vars?: {bg, ink, sub, line, accent} })
(() => {
  const ALIAS = {
    ironman: ["Tony Stark", "Iron Man"],
    cap: ["Steve Rogers", "Sam Wilson", "Captain America", "Cap"],
    thor: ["Thor Odinson", "Thor"],
    hulk: ["Bruce Banner", "Hulk", "Smart Hulk"],
    widow: ["Natasha Romanoff", "Yelena Belova", "Black Widow"],
    spidey: ["Peter Parker", "Spider-Man", "Spidey"],
    panther: ["T'Challa", "Shuri", "Black Panther", "Wakanda"],
    wanda: ["Wanda Maximoff", "Scarlet Witch"],
    strange: ["Stephen Strange", "Doctor Strange"],
    loki: ["Loki", "Sylvie"],
  };
  const norm = (s) => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9*]+/g, " ").trim();
  // how well q matches text: whole, prefix, word start, anywhere, then letters in order
  function score(text, q) {
    if (!q || !text) return 0;
    if (text === q) return 120;
    if (text.startsWith(q)) return 100;
    if (text.includes(" " + q)) return 86;
    if (text.includes(q)) return 70;
    if (q.length < 3) return 0;
    let i = 0, gaps = 0, last = -1;
    for (let j = 0; j < text.length && i < q.length; j++) if (text[j] === q[i]) { if (last >= 0) gaps += j - last - 1; last = j; i++; }
    return i === q.length ? Math.max(1, 34 - gaps) : 0;
  }
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const mark = (s, q) => { const i = s.toLowerCase().indexOf(q); return i < 0 || !q ? esc(s) : esc(s.slice(0, i)) + "<mark>" + esc(s.slice(i, i + q.length)) + "</mark>" + esc(s.slice(i + q.length)); };

  let index = null;
  function build() {
    const T = window.TITLES, H = window.HEROES;
    const heroes = H.map((h) => ({ h, keys: [h.name, ...(ALIAS[h.id] || [])].map(norm) }));
    const titles = T.map((x, i) => {
      const hs = H.filter((h) => h.t.includes(x.id));
      return { x, i, name: norm(x.t), who: hs.map((h) => [h.name, ...(ALIAS[h.id] || [])].map(norm).join(" ")).join(" "), hook: norm(x.hook), hs };
    });
    index = { heroes, titles };
  }

  function search(raw, withHeroes) {
    if (!index) build();
    const q = norm(raw);
    if (!q) return { q, heroes: withHeroes ? index.heroes.map((v) => v.h) : [], titles: index.titles.filter((t) => t.x.e === 1).slice(0, 6).map((t) => ({ t, why: "" })) };
    const year = /^(19|20)\d\d$/.test(q) ? q : null;
    const heroes = withHeroes ? index.heroes.map((v) => ({ h: v.h, s: Math.max(...v.keys.map((k) => score(k, q))) })).filter((v) => v.s > 0).sort((a, b) => b.s - a.s).slice(0, 3).map((v) => v.h) : [];
    const titles = index.titles.map((t) => {
      let s = score(t.name, q), why = "";
      const w = score(t.who, q) * 0.82; if (w > s) { s = w; why = t.hs.map((h) => h.name).join(", "); }
      const k = score(t.hook, q) * 0.5; if (k > s) { s = k; why = t.x.hook; }
      if (year && (t.x.d.startsWith(year) || String(t.x.y) === year)) { s = Math.max(s, 90); why = t.x.d.startsWith(year) ? "Released " + year : "Happens in " + year; }
      return { t, s, why };
    }).filter((r) => r.s > 0).sort((a, b) => b.s - a.s || a.t.i - b.t.i);
    // once something matches for real, loose letter-order matches are noise
    const top = titles.length ? titles[0].s : 0, strong = titles.filter((r) => r.s >= top * 0.55);
    return { q, heroes, titles: strong.slice(0, 8) };

  }

  const CSS = `
.mcs-ov{position:fixed;inset:0;z-index:100;display:flex;justify-content:center;align-items:flex-start;padding:12vh 16px 16px;background:rgba(8,10,16,.36);backdrop-filter:blur(3px);-webkit-backdrop-filter:blur(3px);opacity:0;transition:opacity .16s}
.mcs-ov.on{opacity:1}
.mcs{width:min(560px,100%);background:var(--mcs-bg);backdrop-filter:blur(20px) saturate(1.2);-webkit-backdrop-filter:blur(20px) saturate(1.2);color:var(--mcs-ink);border:1px solid var(--mcs-line);border-radius:14px;box-shadow:0 24px 70px -20px rgba(0,0,0,.45);overflow:hidden;transform:translateY(-6px) scale(.985);transition:transform .2s cubic-bezier(.2,.7,.2,1);font:14px/1.4 "Geist",system-ui,sans-serif}
.mcs-ov.on .mcs{transform:none}
.mcs-in{display:flex;align-items:center;gap:10px;padding:0 14px;border-bottom:1px solid var(--mcs-line)}
.mcs-in svg{flex:none;color:var(--mcs-sub)}
.mcs-in input{flex:1;min-width:0;height:50px;border:0;outline:0;background:none;color:inherit;font:inherit;font-size:16px}
.mcs-in input::placeholder{color:var(--mcs-sub)}
.mcs kbd{font:11px/1 "Geist Mono",ui-monospace,monospace;color:var(--mcs-sub);border:1px solid var(--mcs-line);border-radius:5px;padding:3px 5px}
.mcs-list{max-height:min(420px,58vh);overflow:auto;padding:6px}
.mcs-h{font-size:11.5px;color:var(--mcs-sub);padding:8px 10px 4px}
.mcs-r{display:flex;align-items:center;gap:11px;width:100%;border:0;background:none;color:inherit;text-align:left;padding:8px 10px;border-radius:9px;cursor:pointer;font:inherit}
.mcs-r[aria-selected=true]{background:color-mix(in srgb,var(--mcs-accent) 13%,transparent)}
.mcs-r .dot{flex:none;width:22px;height:22px;border-radius:6px}
.mcs-r .av{flex:none;width:22px;height:22px;border-radius:50%;display:grid;place-items:center;font-size:9.5px;font-weight:600;color:#111}
.mcs-r .tx{flex:1;min-width:0}
.mcs-r .tx b{display:block;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mcs-r .tx small{display:block;color:var(--mcs-sub);font-size:12px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mcs-r .m{flex:none;font:12px "Geist Mono",ui-monospace,monospace;color:var(--mcs-sub)}
.mcs mark{background:none;color:var(--mcs-accent);font-weight:600}
.mcs-empty{padding:22px 12px;color:var(--mcs-sub);text-align:center}
.mcs-ft{display:flex;gap:14px;padding:8px 14px;border-top:1px solid var(--mcs-line);font-size:11.5px;color:var(--mcs-sub)}
.mcs-ft span{display:inline-flex;align-items:center;gap:5px}
@media (max-width:600px){.mcs-ov{padding-top:10px}.mcs-ft{display:none}}
@media (prefers-reduced-motion:reduce){.mcs-ov,.mcs{transition:none}}`;

  function mount(opt) {
    const style = document.createElement("style"); style.textContent = CSS; document.head.appendChild(style);
    const v = Object.assign({ bg: "var(--panel)", ink: "var(--ink)", sub: "var(--sub)", line: "var(--line)", accent: "var(--accent)" }, opt.vars || {});
    const withHeroes = typeof opt.onHero === "function";
    let ov = null, input = null, list = null, rows = [], sel = 0, lastFocus = null;
    const icon = `<svg width="17" height="17" viewBox="0 0 20 20" aria-hidden="true"><circle cx="8.5" cy="8.5" r="6" fill="none" stroke="currentColor" stroke-width="1.7"/><path d="M13 13l5 5" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
    function open() {
      if (ov) return; lastFocus = document.activeElement;
      ov = document.createElement("div"); ov.className = "mcs-ov";
      for (const k in v) ov.style.setProperty("--mcs-" + k, v[k]);
      ov.innerHTML = `<div class="mcs" role="dialog" aria-modal="true" aria-label="Search"><div class="mcs-in">${icon}<input type="text" enterkeyhint="go" placeholder="Search titles, heroes, characters, years" aria-label="Search" autocomplete="off" spellcheck="false" role="combobox" aria-expanded="true" aria-controls="mcs-list"><kbd>Esc</kbd></div><div class="mcs-list" id="mcs-list" role="listbox"></div><div class="mcs-ft"><span><kbd>↑</kbd><kbd>↓</kbd> move</span><span><kbd>↵</kbd> open</span><span><kbd>/</kbd> search anywhere</span></div></div>`;
      document.body.appendChild(ov);
      input = ov.querySelector("input"); list = ov.querySelector(".mcs-list");
      input.addEventListener("input", render);
      input.addEventListener("keydown", (e) => {
        if (e.key === "ArrowDown") { e.preventDefault(); move(1); } else if (e.key === "ArrowUp") { e.preventDefault(); move(-1); }
        else if (e.key === "Enter") { e.preventDefault(); pick(rows[sel]); } else if (e.key === "Escape") { e.preventDefault(); close(); }
        e.stopPropagation();
      });
      ov.addEventListener("pointerdown", (e) => { if (e.target === ov) close(); });
      list.addEventListener("pointermove", (e) => { const r = e.target.closest(".mcs-r"); if (r) setSel(+r.dataset.i, false); });
      list.addEventListener("click", (e) => { const r = e.target.closest(".mcs-r"); if (r) pick(rows[+r.dataset.i]); });
      render(); requestAnimationFrame(() => { ov.classList.add("on"); input.focus(); });
    }
    function close() { if (!ov) return; const o = ov; ov = null; o.classList.remove("on"); setTimeout(() => o.remove(), 170); if (lastFocus && lastFocus.focus) lastFocus.focus(); }
    function render() {
      const { q, heroes, titles } = search(input.value, withHeroes); rows = []; let h = "";
      if (heroes.length) { h += `<div class="mcs-h">${q ? "Heroes" : "Follow a hero"}</div>`; heroes.forEach((x) => { rows.push({ type: "hero", id: x.id }); h += `<button class="mcs-r" role="option" id="mcs-o${rows.length - 1}" data-i="${rows.length - 1}" tabindex="-1"><span class="av" style="background:${x.col}">${esc(x.short)}</span><span class="tx"><b>${mark(x.name, q)}</b><small>${x.t.length} titles</small></span><span class="m">hero</span></button>`; }); }
      if (titles.length) { h += `<div class="mcs-h">${q ? "Titles" : "Start with the essentials"}</div>`; titles.forEach(({ t, why }) => { const x = t.x; rows.push({ type: "title", id: x.id }); h += `<button class="mcs-r" role="option" id="mcs-o${rows.length - 1}" data-i="${rows.length - 1}" tabindex="-1"><span class="dot" style="background:linear-gradient(135deg,${x.c[0]},${x.c[1]})"></span><span class="tx"><b>${mark(x.t.replace(" — ", ": "), q)}</b><small>${why ? esc(why) : esc(window.MW.kindLabel[x.k] + " · " + window.MW.hours(x.m))}</small></span><span class="m">${x.d.slice(0, 4)}</span></button>`; }); }
      if (!rows.length) h = `<div class="mcs-empty">Nothing matches “${esc(input.value)}”. Try a hero, a character like Shuri, or a year.</div>`;
      list.innerHTML = h; setSel(0, true);
    }
    function setSel(i, scroll) { sel = Math.max(0, Math.min(rows.length - 1, i)); list.querySelectorAll(".mcs-r").forEach((r) => { const on = +r.dataset.i === sel; r.setAttribute("aria-selected", on); if (on) { input.setAttribute("aria-activedescendant", r.id); if (scroll) r.scrollIntoView({ block: "nearest" }); } }); }
    const move = (d) => setSel(sel + d, true);
    function pick(r) { if (!r) return; close(); setTimeout(() => (r.type === "hero" ? opt.onHero(r.id) : opt.onTitle(r.id)), 0); }
    addEventListener("keydown", (e) => {
      const t = e.target, typing = t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.tagName === "SELECT" || t.isContentEditable);
      if ((e.key === "k" || e.key === "K") && (e.ctrlKey || e.metaKey)) { e.preventDefault(); ov ? close() : open(); }
      else if (e.key === "/" && !typing && !ov) { e.preventDefault(); open(); }
    });
    if (opt.button) opt.button.addEventListener("click", open);
    return { open, close };
  }
  window.MCUSearch = { mount, search };
})();
