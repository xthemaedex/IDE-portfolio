// Click any figure to enlarge it; click again, press Esc, or use × to close.
(function () {
  var box = document.getElementById('lightbox');
  if (!box || typeof box.showModal !== 'function') return;
  var big = box.querySelector('img');

  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.zoom');
    if (!btn) return;
    var thumb = btn.querySelector('img');
    big.src = btn.dataset.full || thumb.src;
    big.alt = thumb.alt;
    box.showModal();
  });

  box.addEventListener('click', function () { box.close(); });
})();
