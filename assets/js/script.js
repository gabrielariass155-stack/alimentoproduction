document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  const checkoutLinks = document.querySelectorAll(".js-checkout-link");
  const params = new URLSearchParams(window.location.search);

  if ([...params].length) {
    checkoutLinks.forEach((link) => {
      const url = new URL(link.href);
      params.forEach((value, key) => url.searchParams.set(key, value));
      link.href = url.toString();
    });
  }

  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements.length) {
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => observer.observe(element));
});
