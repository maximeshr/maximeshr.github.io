$(document).ready(function () {

  $( function() {

    var $container = $('.isotope').isotope({
      itemSelector: '.element-item',
      layoutMode: 'vertical'
    });

    $('#filters').on( 'click', 'a', function() {
      var filterValue = $( this ).attr('data-filter');
      $container.isotope({ filter: filterValue });
    });

    $('#filters').each( function( i, listElement ) {
      var $listElement = $( listElement );
      $listElement.on( 'click', 'li', function() {
        $listElement.find('.is-checked').removeClass('is-checked');
        $( this ).find('a').addClass('is-checked');
      });
    });

  });

});
