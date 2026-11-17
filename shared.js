const SPICE_PACKS = [
  {"id": "turmeric", "name": "Turmeric Powder", "type": "Spices", "img": "assets/1.Turmeric Powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["earthy"], "desc": "Grown in our own farms, carefully harvested and processed to retain its natural colour, aroma and earthy flavour. A kitchen essential that brings authentic warmth to everyday cooking.", "origin": "Kerala", "use": "Everyday cooking", "ml": "മഞ്ഞൾ പൊടി", "packs": [[100, 60], [250, 120], [500, 230]]},
  {"id": "redchilli", "name": "Red Chilli Powder", "type": "Spices", "img": "assets/2. Red Chilli Powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["fiery"], "desc": "Ignite your taste buds with the fiery kick and rich, natural color of our premium Red Chilli Powder. Milled from carefully selected, sun-dried pungent red chilies, this spice is an indispensable staple in kitchens worldwide, adding vibrant heat and robust flavor to curries, dals, pickles, and snack seasonings. Manufactured under strict quality standards with zero artificial colors or synthetic preservatives, it ensures pure and uncompromised heat in every spoonful. ", "origin": "Kerala", "use": "Curries, dals, pickles", "ml": "മുളക് പൊടി", "packs": [[100, 42], [250, 100], [500, 195]]},
  {"id": "coriander", "name": "Coriander Powder", "type": "Spices", "img": "assets/3.Coriander powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["earthy"], "desc": "Crafted from premium-quality, handpicked coriander seeds, our Coriander Powder brings a mild, warm, and earthy aroma to your everyday cooking. It serves as an essential base spice in numerous traditional curries, stews, dry vegetable preparations, and spice mixes. Finely ground to blend seamlessly into your recipes, it helps thicken gravies while imparting a subtle citrusy and sweet undertone that balances heavier spices. ", "origin": "Kerala", "use": "Curries, stews, vegetables", "ml": "മല്ലിപ്പൊടി", "packs": [[100, 38], [250, 90], [500, 175]]},
  {"id": "garam", "name": "Garam Masala", "type": "Spices", "img": "assets/4.Garam Masala.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["aromatic"], "desc": "Our signature Garam Masala is an aromatic and perfectly balanced blend of premium warming spices designed to transform ordinary meals into culinary masterpieces. Carefully proportioned and finely ground, a small pinch of this aromatic powder adds depth, warmth, and a rich, complex fragrance to curries, biryanis, lentil dishes, and marinades. Made without any artificial colors, fillers, or chemical preservatives.", "origin": "Kerala", "use": "Curries, biryanis, lentils", "ml": "ഗരം മസാല", "packs": [[50, 85], [100, 150], [250, 290]]},
  {"id": "chilli", "name": "Kashmiri Chilli Powder", "type": "Spices", "img": "assets/5. Kashmiri Chilli Powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["mild"], "desc": "Bring a vibrant, restaurant-style red hue and a mild, enticing flavor to your favorite recipes with our premium Kashmiri Chilli Powder. Specially selected for its brilliant natural color rather than intense heat, it enhances the visual appeal of tandoori dishes, butter chicken, rich curries, and vegetable fries without overpowering the palate", "origin": "Kerala", "use": "Curries, tandoori, vegetables", "ml": "കാശ്മീരി മുളക് പൊടി", "packs": [[100, 100], [250, 250], [500, 470]]},
  {"id": "pepper", "name": "Whole Black Pepper", "type": "Spices", "img": "assets/7. Black Pepper.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["bold"], "desc": "Experience the bold, fiery essence of whole Black Pepper sourced directly and exclusively from plants grown in our own farm. These carefully selected peppercorns are sun-dried to perfection, retaining their natural volatile oils, intense aroma. ", "origin": "Kerala", "use": "Grind fresh for savoury dishes", "ml": "കുരുമുളക്", "packs": [[100, 90], [250, 210], [500, 400]]},
  {"id": "pepperpowder", "name": "Black Pepper Powder", "type": "Spices", "img": "assets/6.Black pepper powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["pungent"], "desc": "Our premium Black Pepper Powder is meticulously ground from high-grade peppercorns that are carefully grown and harvested in our own farm. Renowned as the \"King of Spices,\" this finely textured powder adds a sharp, robust, and pleasantly pungent heat to a wide variety of savory dishes, soups, marinades, and seasoning blends. Free from artificial colors and preservatives, it delivers authentic flavor and aroma straight from our fields to your kitchen. ", "origin": "Kerala", "use": "Soups, marinades, seasoning", "ml": "കുരുമുളക് പൊടി", "packs": [[50, 75], [100, 140]]},
  {"id": "chutney", "name": "Chutney Powder", "type": "Spices", "img": "assets/8. Chutney Powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["spicy"], "desc": "Add a fiery and flavorful punch to your traditional South Indian breakfast favorites with our authentic Chutney Powder, popularly known as Gun Powder. Expertly blended using roasted lentils, aromatic spices, and dried chilies, it is the ultimate accompaniment for fluffy idlis, crispy dosas, and warm uttapams. When mixed generously with sesame oil or melted ghee, it creates a delectable paste that instantly delights your taste buds. ", "origin": "Kerala", "use": "Idli, dosa, uttapam", "ml": "ചമ്മന്തിപ്പൊടി", "packs": [[100, 80], [250, 150]]},
  {"id": "sambar", "name": "Sambar Powder", "type": "Spices", "img": "assets/9.Sambar powder.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["aromatic"], "desc": "Transport yourself to the heart of traditional South Indian cuisine with our authentic Sambar Powder, specially formulated to craft the perfect Kerala-style or South Indian sambar. This expertly roasted and ground blend combines lentils, coriander, cumin, fenugreek, and aromatic spices to deliver a rich, deeply satisfying flavor profile. ", "origin": "Kerala", "use": "Kerala-style and South Indian sambar", "ml": "സാമ്പാർ പൊടി", "packs": [[100, 50], [250, 120]]},
  {"id": "whole-nutmeg", "name": "Nutmeg", "type": "Spices", "img": "assets/10. Nutmeg.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["warm"], "desc": "Sourced directly from premium trees grown in our own farm, our whole Nutmeg (Jathikka) is a dense, aromatic spice cherished for its warm, sweet, and woody fragrance. Freshly grated nutmeg can elevate both sweet and savory recipes, ranging from creamy bechamel sauces, soups, and potato dishes to festive cakes, custards, and warm spiced beverages. Packed with natural essential oils, it offers a rich, comforting depth of flavor that mass-processed alternatives simply cannot match. Free from any chemical additives or artificial treatments, our farm-grown nutmeg brings pure, authentic quality and exquisite aroma straight to your pantry. ", "origin": "Kerala", "use": "Sauces, cakes, beverages", "ml": "ജാതിക്ക", "packs": [[100, 65], [200, 120]]},
  {"id": "nutmeg", "name": "Nutmeg Mace", "type": "Spices", "img": "assets/11. Nutmeg Mace.png", "c1": "#8a4a1c", "c2": "#c0803a", "heat": 0, "tags": ["aromatic"], "desc": "Delicate, golden, and intensely aromatic, our premium Nutmeg Mace is harvested directly from the protective outer web of nutmeg fruits grown in our own farm. Also known as Jathi Patri, this exquisite spice carries a sweeter, lighter, and more refined fragrance compared to nutmeg itself. It is a prized ingredient in rich biryanis, slow-cooked meat broths, traditional baked goods, and intricate spice blends like garam masala. Completely natural, free from artificial preservatives, and carefully sourced from our agricultural estate, it adds a touch of royal warmth, elegance, and distinct flavor to gourmet dishes. ", "origin": "Kerala", "use": "Biryani, broths, baking", "ml": "ജാതിപത്രി", "packs": [[100, 200], [200, 400]]},
];

const PRODUCTS = SPICE_PACKS.flatMap(p => p.packs.map(([weight, price], i) => ({
  ...p, id: i === 0 ? p.id : `${p.id}-${weight}g`, size: `${weight}g`, price
}))).concat([
  { id: "littlemillet", name: "Little Millet", type: "Millets", price: 160, size: "500g", asin: "B0H18PMV7V", img: "assets/littlemillet.jpg", c1: "#b89b5e", c2: "#d8c48a", heat: 0,
    tags: ["high fibre", "light"], desc: "Chama rice — natural, unpolished little millet, rich in fibre. Cooks up like rice; light and easy for daily meals.",
    origin: "Natural & unpolished", use: "Rice swap, pongal, upma", ml: "ചാമ" },
  { id: "foxtail", name: "Foxtail Millet", type: "Millets", price: 137, size: "500g", asin: "B0H1JVLFBB", img: "assets/foxtail.jpg", c1: "#c2a35a", c2: "#e0c887", heat: 0,
    tags: ["protein", "nutty"], desc: "Thinai — natural, nutritious foxtail millet with a soft, nutty bite. No preservatives. A wholesome stand-in for rice.",
    origin: "Natural · no preservatives", use: "Upma, pongal, rice swap", ml: "തിന" },
  { id: "flaxseed", name: "Flaxseed", type: "Millets", price: 160, size: "500g", asin: "B0H19891KR", img: "assets/flaxseed.jpg", c1: "#7a5a2a", c2: "#a8823f", heat: 0,
    tags: ["omega-3", "fibre"], desc: "Natural, unpolished flax seeds from Wayanad, rich in omega-3 and fibre. Stir into podi, smoothies or dough.",
    origin: "Wayanad, Kerala", use: "Podi, smoothies, dough", ml: "ചെറുചണവിത്ത്" },
  { id: "jowarpowder", name: "Jowar Powder", type: "Millets", price: 200, size: "1kg", asin: "B0H1JM7VLS", img: "assets/jowarpowder.jpg", c1: "#cbb98a", c2: "#e6d8b0", heat: 0,
    tags: ["gluten-free", "soft"], desc: "Authentic sorghum flour from Wayanad for soft rotis and wholesome bakes. Gluten-free, no preservatives.",
    origin: "Wayanad, Kerala", use: "Rotis, bakes, porridge", ml: "ജോവർ പൊടി" },
  { id: "jowarrava", name: "Jowar Rava", type: "Millets", price: 143, size: "500g", asin: "B0H196RH88", img: "assets/jowarrava.jpg", c1: "#d0be92", c2: "#e8dcb8", heat: 0,
    tags: ["gluten-free", "quick"], desc: "Natural sorghum semolina from Wayanad — gluten-free and fibre-rich. A quick, wholesome upma or porridge.",
    origin: "Wayanad, Kerala", use: "Upma, porridge, idli", ml: "ജോവർ റവ" },
  { id: "ragi", name: "Finger Millet (Ragi)", type: "Millets", price: 130, size: "500g", asin: "B0H5B7614M", img: "assets/ragi.jpg", c1: "#6e4b2c", c2: "#9c7043", heat: 0,
    tags: ["calcium", "gluten-free"], desc: "Whole-grain finger millet — a nutritious ancient millet rich in dietary fibre and gluten-free. For puttu, dosa and porridge.",
    origin: "Whole grain · Kerala", use: "Puttu, dosa, porridge", ml: "രാഗി / കൂവരക്" },

  { id: "blackrice", name: "Black Rice", type: "Rice & Grains", price: 190, size: "500g", asin: "B0H191W6Y8", img: "assets/blackrice.jpg", c1: "#2b2233", c2: "#4a3d55", heat: 0,
    tags: ["antioxidant", "nutty"], desc: "Natural, unpolished forbidden rice from Wayanad, rich in antioxidants. Turns deep purple as it cooks — for payasam and healthy bowls.",
    origin: "Wayanad, Kerala", use: "Payasam, bowls, pilaf", ml: "കറുത്ത അരി" },
  { id: "cornrava", name: "Corn Maize Rava", type: "Rice & Grains", price: 135, size: "500g", asin: "B0H3FNZJH1", img: "assets/cornrava.jpg", c1: "#cbb06a", c2: "#e6d296", heat: 0,
    tags: ["gluten-free", "versatile"], desc: "Broken corn / makka rava — golden and gluten-free for upma, porridge and rustic breads. Simple and wholesome.",
    origin: "Gluten-free", use: "Upma, porridge, breads", ml: "ചോളം റവ" },
  { id: "barley", name: "Barley (Yavam)", type: "Rice & Grains", price: 136, size: "500g", asin: "B0H4BNPWS4", img: "assets/barley.jpg", c1: "#b6a06a", c2: "#d6c495", heat: 0,
    tags: ["high fibre", "cooling"], desc: "Premium whole-grain barley (yavam), natural and unpolished. High-fibre and gentle — for soups, porridge and cooling barley water.",
    origin: "Whole grain · natural", use: "Soups, porridge, barley water", ml: "യവം" },
]);

const SEED_REVIEWS = {
  turmeric: [
    { name: "Nisha T.", rating: 5, text: "Stains everything gold, which is how you know it's the real thing. No fake colour.", date: "May 2026" },
    { name: "Ravi M.", rating: 5, text: "You can smell it the moment the pack opens. Nothing like supermarket turmeric.", date: "Mar 2026" },
  ],
  chilli: [
    { name: "Anjali P.", rating: 5, text: "Gorgeous deep red and gentle warmth — perfect for tandoori without blowing your head off.", date: "Jun 2026" },
    { name: "Tom B.", rating: 4, text: "Lovely colour and clean flavour. Clearly just chilli, no additives.", date: "May 2026" },
  ],
  garam: [
    { name: "Devika P.", rating: 5, text: "Balanced, not clove-heavy like most blends. Added at the end — big difference.", date: "Jun 2026" },
    { name: "Sam H.", rating: 4, text: "Smells incredible. Biryani was the best I've made at home.", date: "May 2026" },
  ],
  chutney: [
    { name: "Lakshmi R.", rating: 5, text: "Just like the podi my grandmother made. Rice, ghee and this — heaven.", date: "Jun 2026" },
    { name: "Arun S.", rating: 4, text: "Great over dosa. Nutty and just spicy enough.", date: "Apr 2026" },
  ],
  pepper: [
    { name: "Anand K.", rating: 5, text: "Fruity and hot at once. In rasam it's a different food.", date: "Jun 2026" },
    { name: "Lucia F.", rating: 5, text: "Real Kerala pepper — you can taste it. Nothing else in the pack.", date: "May 2026" },
  ],
  nutmeg: [
    { name: "Elena V.", rating: 5, text: "Grating fresh nutmeg into béchamel — no going back to pre-ground.", date: "Jun 2026" },
    { name: "Kiran J.", rating: 4, text: "The mace is a lovely bonus. Aromatic without any heat.", date: "Feb 2026" },
  ],
  littlemillet: [
    { name: "Sneha M.", rating: 5, text: "Cooks just like rice and sits so light. My go-to now for dinner.", date: "Jun 2026" },
  ],
  foxtail: [
    { name: "Rahul V.", rating: 5, text: "Great rice swap for the family. Nutty and filling, kids didn't complain.", date: "May 2026" },
    { name: "Divya P.", rating: 4, text: "Lovely in pongal. Clean grain, no grit.", date: "Apr 2026" },
  ],
  flaxseed: [
    { name: "Maya K.", rating: 5, text: "Nicely roasted, not raw-tasting. A spoon in my smoothie every morning.", date: "Jun 2026" },
  ],
  jowarpowder: [
    { name: "Geetha N.", rating: 5, text: "Softest jowar rotis I've made. Fresh and finely ground.", date: "May 2026" },
    { name: "Imran S.", rating: 4, text: "Good gluten-free flour for everyday. Mixes well.", date: "Mar 2026" },
  ],
  jowarrava: [
    { name: "Beena T.", rating: 5, text: "Quick upma on busy mornings and it keeps me full till lunch.", date: "Jun 2026" },
  ],
  ragi: [
    { name: "Suresh B.", rating: 5, text: "Earthy and fresh. Ragi puttu came out beautifully.", date: "May 2026" },
    { name: "Ann M.", rating: 5, text: "Using it for my baby's porridge — clean and finely milled.", date: "Apr 2026" },
  ],
  blackrice: [
    { name: "Priya S.", rating: 5, text: "Turns the loveliest purple. Made payasam and everyone asked for the recipe.", date: "Jun 2026" },
    { name: "Nikhil D.", rating: 4, text: "Chewy and nutty. A bit longer to cook but worth it.", date: "Apr 2026" },
  ],
  cornrava: [
    { name: "Fatima Z.", rating: 4, text: "Wholesome upma and a nice change from the usual. Good value.", date: "May 2026" },
  ],
  barley: [
    { name: "George K.", rating: 5, text: "Make barley water through summer with this. Clean and fresh.", date: "Jun 2026" },
  ],
};

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const rupee = n => "₹" + n.toLocaleString("en-IN");
const productById = id => PRODUCTS.find(p => p.id === id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

const WA_ICON = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3zM12 2a10 10 0 0 0-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.7.8-2.7-.2-.3A8 8 0 1 1 12 20z"/></svg>';
const waButton = (text, cls = "") => `<a class="btn wa-btn ${cls}" href="${waLink(text)}" target="_blank" rel="noopener">${WA_ICON} Order on WhatsApp</a>`;
function waCartText() {
  const items = cartEntries();
  if (!items.length) return "Hi Spice Shala, I'd like to place an order.";
  const lines = items.map(([id, q]) => { const p = productById(id); return `• ${q} × ${p.name} (${p.size}) — ${rupee(p.price * q)}`; });
  return `Hi Spice Shala, I'd like to order:\n${lines.join("\n")}\n\nTotal: ${rupee(cartTotal())}`;
}
const heatDots = n => `<span class="heat__dots">${[1,2,3].map(i => `<span class="heat__dot ${i <= n ? "on" : ""}"></span>`).join("")}</span>`;

const state = {
  cart: loadJSON("msc_cart", {}),
  reviews: loadJSON("msc_reviews", {}),
  filter: "All",
  query: "",
};
function loadJSON(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key)) || fallback; } catch { return fallback; }
}
function saveCart() { localStorage.setItem("msc_cart", JSON.stringify(state.cart)); }
function saveReviews() { localStorage.setItem("msc_reviews", JSON.stringify(state.reviews)); }

/* drop cart ids whose product no longer exists (renamed/removed) so nothing
   dereferences an undefined product downstream */
(function pruneCart() {
  let changed = false;
  for (const id of Object.keys(state.cart)) if (!productById(id)) { delete state.cart[id]; changed = true; }
  if (changed) saveCart();
})();
const cartEntries = () => Object.entries(state.cart).filter(([id]) => productById(id));

/* ---- reviews ---- */
function reviewsFor(id) { return [...(state.reviews[id] || []), ...(SEED_REVIEWS[id] || [])]; }
function avgRating(id) {
  const r = reviewsFor(id);
  return r.length ? r.reduce((a, x) => a + x.rating, 0) / r.length : 0;
}
function reviewCount(id) { return reviewsFor(id).length; }
function stars(rating) {
  const full = Math.round(rating);
  return `<span class="stars" aria-label="${rating.toFixed(1)} out of 5">${"★".repeat(full)}${"☆".repeat(5 - full)}</span>`;
}
function addReview(id, review) {
  (state.reviews[id] ||= []).unshift(review);
  saveReviews();
}

/* ---- product card (shared by grid + related) ---- */
function cardHTML(p) {
  const n = reviewCount(p.id);
  const displayPack = p.packs && (p.packs.find(([weight]) => weight === 100) || p.packs[0]);
  return `<article class="card" data-id="${p.id}">
    <a class="card__art" href="product.html?id=${p.id}" aria-label="View ${p.name}">
      <img class="card__img" src="${p.img}" alt="${p.name}" width="600" height="600" loading="lazy">
    </a>
    <div class="card__body">
      <span class="card__type">${p.type}</span>
      <a class="card__name" href="product.html?id=${p.id}">${p.name}</a>
      <span class="card__ml" lang="ml">${p.ml}</span>
      <div class="card__rating">${stars(avgRating(p.id))} <span>${avgRating(p.id).toFixed(1)}</span>
        <button class="card__quick" data-quick="${p.id}">quick view</button></div>
      <div class="card__tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${p.heat ? `<div class="heat">Heat ${heatDots(p.heat)}</div>` : ""}
      <div class="card__foot">
        <span class="card__price">${displayPack ? `${rupee(displayPack[1])} <small>/ ${displayPack[0]}g</small>` : `${rupee(p.price)} <small>/ ${p.size}</small>`}</span>
        <button class="card__add" ${p.packs && p.packs.length > 1 ? `data-pick="${p.id}"` : `data-add="${p.id}"`} aria-label="${p.packs && p.packs.length > 1 ? "Choose a pack size for" : "Add"} ${p.name}">+</button>
      </div>
    </div>
  </article>`;
}

/* ---- cart ---- */
function addToCart(id, n = 1) {
  state.cart[id] = (state.cart[id] || 0) + n;
  saveCart(); renderCart(); bump(); toast(`${productById(id).name} added`);
}
function setQty(id, delta) {
  state.cart[id] = (state.cart[id] || 0) + delta;
  if (state.cart[id] <= 0) delete state.cart[id];
  saveCart(); renderCart();
}
function removeItem(id) { delete state.cart[id]; saveCart(); renderCart(); }
function clearCart() { state.cart = {}; saveCart(); renderCart(); }
const cartCount = () => cartEntries().reduce((a, [, q]) => a + q, 0);
const cartTotal = () => cartEntries().reduce((a, [id, q]) => a + productById(id).price * q, 0);

function renderCart() {
  const count = cartCount();
  const badge = $("#cartCount");
  if (!badge) return;
  badge.textContent = count;
  badge.dataset.empty = count === 0;

  const items = $("#drawerItems"), empty = $("#drawerEmpty"), foot = $("#drawerFoot");
  const entries = cartEntries();
  empty.style.display = entries.length ? "none" : "grid";
  foot.style.display = entries.length ? "block" : "none";
  items.style.display = entries.length ? "flex" : "none";

  items.innerHTML = entries.map(([id, q]) => {
    const p = productById(id);
    return `<div class="line">
      <div class="line__art" style="background-image:url('${p.img}')"></div>
      <div>
        <div class="line__name">${p.name}</div>
        <div class="line__price">${rupee(p.price)} / ${p.size}</div>
        <div class="line__qty">
          <button data-dec="${id}" aria-label="Decrease">–</button>
          <span>${q}</span>
          <button data-inc="${id}" aria-label="Increase">+</button>
        </div>
        <button class="line__rm" data-rm="${id}">remove</button>
      </div>
      <div class="line__sum">${rupee(p.price * q)}</div>
    </div>`;
  }).join("");
  $("#cartTotal").textContent = rupee(cartTotal());
}
function bump() {
  const b = $("#cartCount");
  b && b.animate([{ transform: "scale(1)" }, { transform: "scale(1.5)" }, { transform: "scale(1)" }], { duration: 350 });
}

/* delegated clicks (grid, cart, quick view) */
document.addEventListener("click", e => {
  const add = e.target.closest("[data-add]"); if (add) { addToCart(add.dataset.add); if (modal.classList.contains("open")) closeModal(); return; }
  const pick = e.target.closest("[data-pick]"); if (pick) return openPackPicker(pick.dataset.pick);
  const quick = e.target.closest("[data-quick]"); if (quick) return openModal(quick.dataset.quick);
  const inc = e.target.closest("[data-inc]"); if (inc) return setQty(inc.dataset.inc, 1);
  const dec = e.target.closest("[data-dec]"); if (dec) return setQty(dec.dataset.dec, -1);
  const rm = e.target.closest("[data-rm]"); if (rm) return removeItem(rm.dataset.rm);
});

/* ---- drawer + scrim ---- */
const drawer = $("#drawer"), scrim = $("#scrim"), modal = $("#modal");
let scrimHandler = null, lastFocus = null;
drawer.inert = true; modal.inert = true;
function showScrim(onClick) { scrim.hidden = false; scrimHandler = onClick; }
function hideScrim() { if (!drawer.classList.contains("open") && !modal.classList.contains("open")) { scrim.hidden = true; scrimHandler = null; } }
function openDrawer() { lastFocus = document.activeElement; drawer.inert = false; drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); showScrim(closeDrawer); $("#drawerClose").focus(); }
function closeDrawer() { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); drawer.inert = true; hideScrim(); lastFocus && lastFocus.focus(); }
$("#cartBtn").addEventListener("click", openDrawer);
$("#drawerClose").addEventListener("click", closeDrawer);
scrim.addEventListener("click", () => scrimHandler && scrimHandler());

/* ---- quick-view modal ---- */
function openPackPicker(id) {
  const p = productById(id);
  $("#modalCard").innerHTML = `
    <button class="modal__close" id="modalClose" aria-label="Close">&times;</button>
    <div class="pack-picker">
      <h2 id="modalName">${esc(p.name)}</h2>
      <p>Choose a pack size</p>
      <div class="pack-picker__options">
        ${p.packs.map(([weight, price], i) => {
          const variantId = i === 0 ? p.id : `${p.id}-${weight}g`;
          return `<button type="button" class="pack-option" data-add="${variantId}">${weight}g · ${rupee(price)}</button>`;
        }).join("")}
      </div>
    </div>`;
  lastFocus = document.activeElement;
  modal.inert = false; modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  showScrim(closeModal);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalClose").focus();
}

function openModal(id) {
  const p = productById(id);
  $("#modalCard").innerHTML = `
    <button class="modal__close" id="modalClose" aria-label="Close">&times;</button>
    <div class="modal__art"><img class="modal__img" src="${p.img}" alt="${p.name}" width="600" height="600"></div>
    <div class="modal__body">
      <span class="modal__type">${p.type}${p.heat ? ` · Heat ${heatDots(p.heat)}` : ""}</span>
      <h2 class="modal__name" id="modalName">${p.name}</h2>
      <p class="card__ml" lang="ml">${p.ml}</p>
      <div class="card__rating">${stars(avgRating(p.id))} <span>${avgRating(p.id).toFixed(1)} · ${reviewCount(p.id)} reviews</span></div>
      <p class="modal__desc">${p.desc}</p>
      <div class="modal__price">${rupee(p.price)} <small>/ ${p.size}</small></div>
      <div class="modal__actions">
        ${p.packs && p.packs.length > 1 ? `<div class="pack-options" role="group" aria-label="Choose a pack size to add">
          <span>Choose a pack size to add</span>
          ${p.packs.map(([weight, price], i) => {
            const base = p.id.replace(/-\d+g$/, "");
            const id = i === 0 ? base : `${base}-${weight}g`;
            return `<button type="button" class="pack-option" data-add="${id}">${weight}g · ${rupee(price)}</button>`;
          }).join("")}
        </div>` : `<button class="btn btn--solid" data-add="${p.id}">Add to tin</button>`}
        <a class="btn btn--ghost" href="product.html?id=${p.id}">Full details & reviews →</a>
      </div>
    </div>`;
  lastFocus = document.activeElement;
  modal.inert = false; modal.classList.add("open"); modal.setAttribute("aria-hidden", "false");
  showScrim(closeModal);
  $("#modalClose").addEventListener("click", closeModal);
  $("#modalClose").focus();
}
function closeModal() { modal.classList.remove("open"); modal.setAttribute("aria-hidden", "true"); modal.inert = true; hideScrim(); lastFocus && lastFocus.focus(); }
modal.addEventListener("click", e => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") { closeModal(); closeDrawer(); } });

/* ---- toast ---- */
let toastTimer;
function toast(msg) {
  const t = $("#toast");
  t.textContent = msg; t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

/* ---- nav shadow + reveal ---- */
const nav = $("#nav");
addEventListener("scroll", () => nav.classList.toggle("scrolled", scrollY > 20), { passive: true });
const io = new IntersectionObserver(es => es.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } }), { threshold: 0.15 });
$$(".reveal").forEach(el => io.observe(el));

renderCart();

/* ---- whatsapp order ---- */
const waFab = document.createElement("a");
waFab.className = "wa-fab";
waFab.href = waLink("Hi Spice Shala, I'd like to place an order.");
waFab.target = "_blank";
waFab.rel = "noopener";
waFab.setAttribute("aria-label", "Order on WhatsApp");
waFab.innerHTML = `${WA_ICON}<span>Order on WhatsApp</span>`;
document.body.appendChild(waFab);

const waCartBtn = document.createElement("button");
waCartBtn.className = "btn btn--solid btn--full wa-btn";
waCartBtn.type = "button";
waCartBtn.innerHTML = `${WA_ICON} Order on WhatsApp`;
waCartBtn.addEventListener("click", () => window.open(waLink(waCartText()), "_blank", "noopener"));
$("#drawerFoot").insertBefore(waCartBtn, $(".drawer__fineprint"));

const clearBtn = document.createElement("button");
clearBtn.className = "drawer__clear";
clearBtn.type = "button";
clearBtn.textContent = "Clear tin";
clearBtn.addEventListener("click", clearCart);
$("#drawerFoot").appendChild(clearBtn);
