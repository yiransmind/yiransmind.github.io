(function () {
  var menuButton = document.querySelector('.console-mobile-toggle');
  var sidebar = document.querySelector('.console-sidebar');

  if (menuButton && sidebar) {
    menuButton.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
    });

    sidebar.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      });
    });
  }

  var filterButtons = document.querySelectorAll('.publication-filters button');
  var publicationRows = document.querySelectorAll('.publication-row');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var filter = button.getAttribute('data-filter');

      filterButtons.forEach(function (item) {
        var selected = item === button;
        item.classList.toggle('is-active', selected);
        item.setAttribute('aria-selected', String(selected));
      });

      publicationRows.forEach(function (row) {
        var topics = row.getAttribute('data-topic').split(' ');
        var visible = filter === 'all' || topics.indexOf(filter) !== -1;
        row.hidden = !visible;
      });
    });
  });
}());
