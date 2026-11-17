/* ---- product grid ---- */
const grid = $("#grid");
const gridEmpty = $("#gridEmpty");
function renderGrid() {
  const list = PRODUCTS.filter(p =>
    (!p.packs || !/-\d+g$/.test(p.id)) &&
    (state.filter === "All" || p.type === state.filter) &&
    (p.name.toLowerCase().includes(state.query) || p.tags.join(" ").includes(state.query))
  );
  gridEmpty.hidden = list.length > 0;
  grid.innerHTML = list.map(cardHTML).join("");
}

const types = ["All", ...new Set(PRODUCTS.map(p => p.type))];
$("#filters").innerHTML = types.map(t =>
  `<button class="chip ${t === "All" ? "active" : ""}" data-filter="${t}">${t}</button>`).join("");
$("#filters").addEventListener("click", e => {
  const b = e.target.closest("[data-filter]");
  if (!b) return;
  state.filter = b.dataset.filter;
  $$(".chip").forEach(c => c.classList.toggle("active", c === b));
  renderGrid();
});
const searchEl = $("#search");
const searchClear = document.createElement("button");
searchClear.type = "button";
searchClear.className = "search__clear";
searchClear.setAttribute("aria-label", "Clear search");
searchClear.innerHTML = "&times;";
searchClear.hidden = true;
searchEl.after(searchClear);
searchEl.addEventListener("input", e => { state.query = e.target.value.trim().toLowerCase(); searchClear.hidden = !e.target.value; renderGrid(); });
searchClear.addEventListener("click", () => { searchEl.value = ""; state.query = ""; searchClear.hidden = true; renderGrid(); searchEl.focus(); });

/* clicking any in-page "Shop" link resets the grid to All */
function resetShop() {
  state.filter = "All";
  state.query = "";
  const s = $("#search"); if (s) s.value = "";
  $$(".chip").forEach(c => c.classList.toggle("active", c.dataset.filter === "All"));
  renderGrid();
}
$$('a[href="#shop"]').forEach(a => a.addEventListener("click", resetShop));


renderGrid();
