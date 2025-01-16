'use strict';
!(function () {
  var e = document.querySelector('.cancel-subscription');
  e &&
    (e.onclick = function () {
      Swal.fire({
        text: 'Are you sure you would like to cancel your subscription?',
        icon: 'warning',
        showCancelButton: !0,
        confirmButtonText: 'Yes',
        customClass: {
          confirmButton: 'btn btn-primary me-2 waves-effect waves-light',
          cancelButton: 'btn btn-label-secondary waves-effect waves-light',
        },
        buttonsStyling: !1,
      }).then(function (e) {
        e.value
          ? Swal.fire({
              icon: 'success',
              title: 'Unsubscribed!',
              text: 'Your subscription cancelled successfully.',
              customClass: {
                confirmButton: 'btn btn-success waves-effect waves-light',
              },
            })
          : e.dismiss === Swal.DismissReason.cancel &&
            Swal.fire({
              title: 'Cancelled',
              text: 'Unsubscription Cancelled!!',
              icon: 'error',
              customClass: {
                confirmButton: 'btn btn-success waves-effect waves-light',
              },
            });
      });
    });
  const t = document.querySelector('.edit-address'),
    s = document.querySelector('.address-title'),
    n = document.querySelector('.address-subtitle');
  t.onclick = function () {
    (s.innerHTML = 'Edit Address'), (n.innerHTML = 'Edit your current address');
  };
})();