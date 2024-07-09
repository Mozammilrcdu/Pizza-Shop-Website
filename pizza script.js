$(document).ready(function() {
  // Navbar
  $('#menu-icon').click(function() {
      $('.navbar').toggleClass('active');
  });

  $(window).scroll(function() {
      $('.navbar').removeClass('active');
  });

  // Dark Mode
  $('#darkmode').click(function() {
      if ($('#darkmode').hasClass('bx-moon')) {
          $('#darkmode').removeClass('bx-moon').addClass('bx-sun');
          $('body').addClass('active');
      } else {
          $('#darkmode').removeClass('bx-sun').addClass('bx-moon');
          $('body').removeClass('active');
      }
  });

  // Cart functionality
  let cartItems = [];
  let total = 0;

  $(document).on('click', '.bx-cart-alt', function() {
      let item = $(this).siblings('h2').text();
      let price = parseFloat($(this).siblings('span').text().replace('₹ ', ''));

      cartItems.push({ name: item, price: price });
      total += price;

      $('#cart-items').append('<li>' + item + ' - ₹' + price.toFixed(2) + ' <button class="remove-item">Remove</button></li>');
      $('#cart-count').text(cartItems.length + ' items');
      $('#total-price').text('Total: ₹' + total.toFixed(2));
  });

  $(document).on('click', '.remove-item', function() {
      let itemIndex = $(this).parent().index();
      let removedItem = cartItems.splice(itemIndex, 1)[0];
      total -= removedItem.price;

      $(this).parent().remove();
      $('#cart-count').text(cartItems.length + ' items');
      $('#total-price').text('Total: ₹' + total.toFixed(2));
  });

  // Scroll Reveal
  const sr = ScrollReveal({
      origin: 'top',
      distance: '40px',
      duration: 2000,
      reset: true
  });

  sr.reveal(`.home-text, .home-img,
              .about-img, .about-text,
              .box, .s-box,
              .btn, .connect-text,
              .contact-box`, {
      interval: 200
  });
});
