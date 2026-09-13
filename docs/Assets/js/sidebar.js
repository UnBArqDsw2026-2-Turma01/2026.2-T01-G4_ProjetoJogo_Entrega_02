/* Grupos de navegação com botões de expansão e estado preservado na sessão. */
(function () {
  'use strict';

  var storageKey = 'g4.sidebar.groups';
  var expanded = {};
  try { expanded = JSON.parse(sessionStorage.getItem(storageKey)) || {}; } catch (error) { /* usa o estado em memória */ }

  function remember(key, value) {
    expanded[key] = value;
    try { sessionStorage.setItem(storageKey, JSON.stringify(expanded)); } catch (error) { /* mantém o estado em memória */ }
  }

  function enhanceSidebar() {
    var nav = document.querySelector('.sidebar-nav');
    if (!nav) return;
    nav.setAttribute('role', 'navigation');
    nav.setAttribute('aria-label', 'Navegação da documentação');
    var current = normalizeSidebarRoute(window.location.hash);
    var groupNumber = 0;

    function visit(list, parentKey) {
      Array.from(list.children).forEach(function (item) {
        if (item.tagName !== 'LI') return;
        var children = Array.from(item.children).find(function (child) {
          return child.tagName === 'UL' && !child.classList.contains('app-sub-sidebar');
        });
        if (!children) return;

        // O Markdown pode produzir rótulos em <p> ou como texto direto no <li>.
        var labelNodes = Array.from(item.childNodes).filter(function (node) { return node !== children; });
        var label = labelNodes.map(function (node) { return node.textContent; }).join(' ').trim();
        var link = item.querySelector(':scope > a, :scope > p > a');
        var key = parentKey + '/' + label;
        var containsCurrent = Array.from(item.querySelectorAll('a[href]')).some(function (anchor) {
          return normalizeSidebarRoute(anchor.getAttribute('href')) === current;
        });
        var row = document.createElement('div');
        row.className = 'sidebar-group-row';
        var button = document.createElement('button');
        button.type = 'button';
        button.className = link ? 'sidebar-expander' : 'sidebar-disclosure';
        var chevron = document.createElement('span');
        chevron.className = 'sidebar-chevron';
        chevron.setAttribute('aria-hidden', 'true');
        button.appendChild(chevron);
        row.appendChild(button);

        if (link) {
          link.classList.add('sidebar-parent-link');
          row.appendChild(link);
        } else {
          var text = document.createElement('span');
          text.className = 'sidebar-label';
          text.textContent = label;
          button.appendChild(text);
        }

        labelNodes.forEach(function (node) { if (node.parentNode === item) node.remove(); });
        item.insertBefore(row, children);
        item.classList.add('sidebar-group');
        item.classList.toggle('contains-current-page', containsCurrent);
        children.classList.add('sidebar-group-list');
        children.id = 'sidebar-group-' + (++groupNumber);
        button.setAttribute('aria-controls', children.id);

        function setOpen(open) {
          children.hidden = !open;
          button.setAttribute('aria-expanded', String(open));
          button.title = (open ? 'Recolher ' : 'Expandir ') + label;
          if (link) button.setAttribute('aria-label', button.title);
        }
        setOpen(containsCurrent || expanded[key] === true);
        button.addEventListener('click', function (event) {
          event.stopPropagation();
          var open = button.getAttribute('aria-expanded') !== 'true';
          setOpen(open);
          remember(key, open);
        });
        visit(children, key);
      });
    }

    // O Docsify também executa doneEach ao navegar para âncoras da mesma página.
    if (!nav.querySelector('.sidebar-group-row')) {
      Array.from(nav.children).filter(function (child) { return child.tagName === 'UL'; })
        .forEach(function (list) { visit(list, ''); });
    }

    nav.querySelectorAll('a[href]').forEach(function (link) {
      var active = normalizeSidebarRoute(link.getAttribute('href')) === current;
      if (active) link.setAttribute('aria-current', 'page');
      else link.removeAttribute('aria-current');
    });
    var search = document.querySelector('.sidebar .search input');
    if (search) search.setAttribute('aria-label', 'Pesquisar na documentação');
  }

  window.$docsify.plugins = [].concat(window.$docsify.plugins || [], function (hook) {
    hook.doneEach(enhanceSidebar);
  });
}());
