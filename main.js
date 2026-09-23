(function () {
  const $ = (id) => document.getElementById(id);

  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      if (key === "text") node.textContent = value;
      else node.setAttribute(key, value);
    }
    for (const child of children) if (child) node.append(child);
    return node;
  }

  function formatDate(value) {
    if (!value) return "";
    const [year, month] = value.split("-");
    return month ? `${month}/${year}` : year;
  }

  const byDateDesc = (a, b) => (b.date || "").localeCompare(a.date || "");

  // Profile
  $("hero-name").textContent = PROFILE.name;
  $("hero-tagline").textContent = PROFILE.tagline;
  $("about-text").textContent = PROFILE.about;
  $("footer-name").textContent = PROFILE.name;
  $("brand").textContent = PROFILE.name;
  $("year").textContent = new Date().getFullYear();
  for (const link of PROFILE.links) {
    $("profile-links").append(
      el("li", {}, [el("a", { href: link.url, target: "_blank", rel: "noopener", text: link.label })])
    );
  }

  $("stat-learning").textContent = LEARNING.length;
  $("stat-certs").textContent = CERTIFICATES.length;

  // Learning timeline with category filter
  const categories = ["Tất cả", ...new Set(LEARNING.map((item) => item.category).filter(Boolean))];
  let active = "Tất cả";

  function renderLearning() {
    const list = $("learning-list");
    list.replaceChildren();
    const items = LEARNING.filter((item) => active === "Tất cả" || item.category === active).sort(byDateDesc);
    if (!items.length) {
      list.append(el("li", { class: "empty", text: "Chưa có mục nào." }));
      return;
    }
    for (const item of items) {
      const done = item.status === "done";
      const title = item.link
        ? el("a", { href: item.link, target: "_blank", rel: "noopener", text: item.title })
        : document.createTextNode(item.title);
      list.append(
        el("li", { class: "timeline-item" }, [
          el("div", { class: "meta" }, [
            el("time", { text: formatDate(item.date) }),
            item.category ? el("span", { class: "tag", text: item.category }) : null,
            el("span", { class: `status ${done ? "done" : "learning"}`, text: done ? "Hoàn thành" : "Đang học" }),
          ]),
          el("h3", {}, [title]),
          item.description ? el("p", { text: item.description }) : null,
        ])
      );
    }
  }

  for (const category of categories) {
    const button = el("button", { type: "button", text: category });
    button.addEventListener("click", () => {
      active = category;
      for (const b of $("filters").children) b.setAttribute("aria-pressed", String(b === button));
      renderLearning();
    });
    button.setAttribute("aria-pressed", String(category === active));
    $("filters").append(button);
  }
  renderLearning();

  // Certificates
  const certList = $("cert-list");
  if (!CERTIFICATES.length) certList.append(el("p", { class: "empty", text: "Chưa có chứng chỉ nào." }));
  for (const cert of [...CERTIFICATES].sort(byDateDesc)) {
    certList.append(
      el("article", { class: "cert" }, [
        cert.image ? el("img", { src: cert.image, alt: cert.title, loading: "lazy" }) : null,
        el("div", { class: "cert-body" }, [
          el("h3", { text: cert.title }),
          el("p", { class: "issuer", text: cert.issuer }),
          el("p", { class: "cert-meta", text: formatDate(cert.date) }),
          cert.credentialId ? el("p", { class: "cert-meta", text: `ID: ${cert.credentialId}` }) : null,
          cert.url ? el("a", { href: cert.url, target: "_blank", rel: "noopener", text: "Xem chứng chỉ →" }) : null,
        ]),
      ])
    );
  }
})();
