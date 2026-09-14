/* Navegação pelo _sidebar.md e visualização de imagens com PhotoSwipe 5.4.4. */
(function () {
  "use strict";

  var viewer = null;

  function prepareCarousels(content) {
    content
      .querySelectorAll(".diagram-carousel")
      .forEach(function (carousel, carouselIndex) {
        if (carousel.dataset.carouselReady) return;

        var slides = Array.from(
          carousel.querySelectorAll(":scope > .diagram-slide"),
        );
        if (slides.length < 2) return;

        carousel.dataset.carouselReady = "true";
        carousel.setAttribute("role", "region");
        carousel.setAttribute("aria-roledescription", "carrossel");

        var controls = document.createElement("div");
        controls.className = "diagram-carousel-controls";

        var picker = document.createElement("div");
        picker.className = "diagram-version-picker";
        picker.setAttribute("role", "group");
        picker.setAttribute("aria-label", "Escolher versão do diagrama");

        var status = document.createElement("p");
        status.className = "diagram-carousel-status";
        status.setAttribute("role", "status");
        status.setAttribute("aria-live", "polite");
        status.setAttribute("aria-atomic", "true");

        var selected = Math.max(
          0,
          slides.findIndex(function (slide) {
            return slide.dataset.version === carousel.dataset.defaultVersion;
          }),
        );

        var buttons = [];

        function change(index) {
          selected = index;

          slides.forEach(function (slide, i) {
            slide.hidden = i !== selected;
            buttons[i].setAttribute("aria-pressed", String(i === selected));
          });

          previous.disabled = selected === 0;
          next.disabled = selected === slides.length - 1;
          carousel.dataset.activeVersion = slides[selected].dataset.version;
          status.textContent = slides[selected].dataset.label;
        }

        function button(label, text, handler) {
          var element = document.createElement("button");
          element.type = "button";
          element.textContent = text;
          element.setAttribute("aria-label", label);
          element.addEventListener("click", handler);
          return element;
        }

        var previous = button("Versão anterior", "←", function () {
          change(selected - 1);
        });

        var next = button("Próxima versão", "→", function () {
          change(selected + 1);
        });

        slides.forEach(function (slide, i) {
          slide.id = "diagram-" + carouselIndex + "-version-" + i;
          slide.setAttribute("role", "group");
          slide.setAttribute(
            "aria-label",
            slide.dataset.label + ", " + (i + 1) + " de " + slides.length,
          );

          var option = button(
            "Mostrar " + slide.dataset.label,
            slide.dataset.version.toUpperCase(),
            function () {
              change(i);
            },
          );

          option.setAttribute("aria-controls", slide.id);
          buttons.push(option);
          picker.appendChild(option);
        });

        picker.addEventListener("keydown", function (event) {
          var index = buttons.indexOf(document.activeElement);
          if (index < 0) return;

          if (event.key === "ArrowLeft") index = Math.max(0, index - 1);
          else if (event.key === "ArrowRight")
            index = Math.min(slides.length - 1, index + 1);
          else if (event.key === "Home") index = 0;
          else if (event.key === "End") index = slides.length - 1;
          else return;

          event.preventDefault();
          change(index);
          buttons[index].focus();
        });

        controls.append(previous, picker, next);
        carousel.prepend(controls, status);
        change(selected);
      });
  }

  function renderRelatedPages(content) {
    var previous = content.querySelector(".related-pages");
    if (previous) previous.remove();

    var current = normalizeSidebarRoute(window.location.hash);
    var sidebarLinks = Array.from(
      document.querySelectorAll(".sidebar-nav a[href]"),
    ).filter(function (link) {
      return !link.closest(".app-sub-sidebar");
    });

    var active = sidebarLinks.find(function (link) {
      return normalizeSidebarRoute(link.getAttribute("href")) === current;
    });

    var related = [];
    var subgroup = current.match(/^(\/Base\/Relatórios\/SubEquipe_\d+)\//);

    if (subgroup) {
      related = sidebarLinks.filter(function (link) {
        return normalizeSidebarRoute(link.getAttribute("href")).startsWith(
          subgroup[1] + "/",
        );
      });
    } else if (active) {
      var group = active.closest("li");

      while (group) {
        related = sidebarLinks.filter(function (link) {
          return group.contains(link);
        });

        if (
          related.some(function (link) {
            return normalizeSidebarRoute(link.getAttribute("href")) !== current;
          })
        )
          break;

        group = group.parentElement.closest("li");
      }
    }

    var manual = Array.from(content.children).filter(function (element) {
      return (
        element.tagName === "P" &&
        /^Ver também\s*:/i.test(element.textContent.trim())
      );
    });

    manual.forEach(function (paragraph) {
      related = related.concat(
        Array.from(paragraph.querySelectorAll("a[href]")),
      );
    });

    var seen = new Set([current]);

    related = related.filter(function (link) {
      var route = normalizeSidebarRoute(link.getAttribute("href"));
      if (seen.has(route)) return false;
      seen.add(route);
      return true;
    });

    if (!related.length) return;

    var nav = document.createElement("nav");
    nav.className = "related-pages";
    nav.setAttribute("aria-label", "Páginas relacionadas");

    var title = document.createElement("p");
    title.className = "related-pages-title";
    title.textContent = "Ver também";
    nav.appendChild(title);

    var list = document.createElement("ul");

    related.forEach(function (source) {
      var item = document.createElement("li");
      var link = document.createElement("a");

      link.href = source.getAttribute("href");
      link.textContent = source.textContent.trim();

      if (source.target) link.target = source.target;
      if (source.rel) link.rel = source.rel;

      item.appendChild(link);
      list.appendChild(item);
    });

    nav.appendChild(list);
    manual.forEach(function (paragraph) {
      paragraph.remove();
    });
    content.appendChild(nav);
  }

  function prepareImage(image) {
    if (!image.isConnected || !image.naturalWidth || !image.naturalHeight)
      return;

    var source = image.currentSrc || image.src;
    var link = image.closest("a");

    // Links que apontam para outro destino continuam normais.
    if (link && link.href !== source) return;

    if (!link) {
      link = document.createElement("a");
      link.href = source;
      image.replaceWith(link);
      link.appendChild(image);
    }

    link.classList.add("image-zoom-trigger");
    link.setAttribute("aria-haspopup", "dialog");
    link.setAttribute(
      "aria-label",
      "Ampliar imagem: " + (image.alt || "imagem da página"),
    );
    link.title = "Ampliar imagem";
  }

  function prepareImages(content) {
    if (typeof PhotoSwipe !== "function") return;

    content
      .querySelectorAll("img:not(.emoji):not([data-no-zoom])")
      .forEach(function (image) {
        if (image.complete) prepareImage(image);
        else
          image.addEventListener(
            "load",
            function () {
              prepareImage(image);
            },
            { once: true },
          );
      });
  }

  function openImage(image, trigger) {
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    var originalHash = window.location.hash;

    var instance = new PhotoSwipe({
      dataSource: [
        {
          src: image.currentSrc || image.src,
          width: image.naturalWidth,
          height: image.naturalHeight,
          alt: image.alt,
          element: trigger,
        },
      ],

      index: 0,
      mainClass: "document-image-viewer",
      showHideAnimationType: "none",
      zoomAnimationDuration: reduceMotion ? 0 : 180,
      padding: { top: 72, bottom: 24, left: 16, right: 16 },

      initialZoomLevel: "fit",
      secondaryZoomLevel: function (level) {
        return Math.max(1, level.initial * 2);
      },
      maxZoomLevel: 4,

      wheelToZoom: true,
      pinchToClose: false,
      closeOnVerticalDrag: false,

      // O PhotoSwipe usa focus() sem preventScroll quando trapFocus está ativo.
      trapFocus: false,
      returnFocus: false,

      counter: false,
      arrowPrev: false,
      arrowNext: false,
      zoom: false,

      closeTitle: "Fechar (Esc)",
      errorMsg: "Não foi possível carregar a imagem.",
    });

    instance.on("uiRegister", function () {
      [
        {
          name: "zoom-out",
          title: "Reduzir zoom",
          text: "−",
          order: 7,
          factor: 1 / 1.5,
        },
        {
          name: "zoom-in",
          title: "Ampliar zoom",
          text: "+",
          order: 8,
          factor: 1.5,
        },
        { name: "fit", title: "Ajustar à tela", text: "Ajustar", order: 9 },
      ].forEach(function (control) {
        instance.ui.registerElement({
          name: control.name,
          title: control.title,
          html: control.text,
          order: control.order,
          isButton: true,

          onClick: function () {
            var slide = instance.currSlide;
            if (!slide) return;

            var level = control.factor
              ? slide.currZoomLevel * control.factor
              : slide.zoomLevels.initial;

            level = Math.max(
              slide.zoomLevels.initial,
              Math.min(slide.zoomLevels.max, level),
            );

            instance.zoomTo(level, undefined, reduceMotion ? 0 : 180);
          },

          onInit: function (button) {
            instance.on("zoomPanUpdate", function () {
              var slide = instance.currSlide;
              if (!slide) return;

              button.disabled =
                control.factor > 1
                  ? slide.currZoomLevel >= slide.zoomLevels.max - 0.001
                  : control.factor < 1 &&
                    slide.currZoomLevel <= slide.zoomLevels.initial + 0.001;
            });
          },
        });
      });
    });

    instance.on("afterInit", function () {
      instance.element.setAttribute("role", "dialog");
      instance.element.setAttribute("aria-modal", "true");
      instance.element.setAttribute(
        "aria-label",
        "Visualização ampliada da imagem",
      );

      // Mantém o foco no modal sem alterar a posição da página.
      instance.element.focus({ preventScroll: true });
    });

    // Mantém Tab dentro do visualizador.
    instance.on("keydown", function (event) {
      var key = event.originalEvent;
      if (key.key !== "Tab") return;

      var buttons = Array.from(
        instance.element.querySelectorAll("button:not(:disabled)"),
      ).filter(function (button) {
        return button.getClientRects().length;
      });

      if (!buttons.length) return;

      var first = buttons[0];
      var last = buttons[buttons.length - 1];
      var active = document.activeElement;
      var target = null;

      if (key.shiftKey && (active === first || active === instance.element)) {
        target = last;
      } else if (!key.shiftKey && active === last) {
        target = first;
      }

      if (target) {
        key.preventDefault();
        event.preventDefault();
        target.focus({ preventScroll: true });
      }
    });

    instance.on("destroy", function () {
      viewer = null;

      if (trigger.isConnected && window.location.hash === originalHash) {
        trigger.focus({ preventScroll: true });
      }
    });

    viewer = instance;
    instance.init();
  }

  document.addEventListener(
    "click",
    function (event) {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey ||
        viewer ||
        typeof PhotoSwipe !== "function"
      )
        return;

      var trigger = event.target.closest(
        ".markdown-section .image-zoom-trigger",
      );
      if (!trigger) return;

      var image = trigger.querySelector("img");
      if (!image || !image.naturalWidth) return;

      event.preventDefault();
      event.stopPropagation();
      openImage(image, trigger);
    },
    true,
  );

  window.addEventListener("hashchange", function () {
    if (viewer) viewer.destroy();
  });

  window.$docsify.plugins = [].concat(
    window.$docsify.plugins || [],
    function (hook) {
      hook.doneEach(function () {
        var content = document.querySelector(".markdown-section");
        if (!content) return;

        prepareCarousels(content);
        renderRelatedPages(content);
        prepareImages(content);
      });
    },
  );
})();
