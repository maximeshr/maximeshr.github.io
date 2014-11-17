$(document).ready(function () {

  $( function() {

    var qsRegex;

    var $container = $('.isotope').isotope({
      itemSelector: '.element-item',
      layoutMode: 'vertical',
      filter: function() {
        return qsRegex ? $(this).text().match( qsRegex ) : true;
      }
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

    var $quicksearch = $('#quicksearch').keyup( debounce( function() {
      qsRegex = new RegExp( $quicksearch.val(), 'gi' );
      $container.isotope();
    }, 200 ) );

  });

  function debounce( fn, threshold ) {
    var timeout;
    return function debounced() {
      if ( timeout ) {
        clearTimeout( timeout );
      }
      function delayed() {
        fn();
        timeout = null;
      }
      timeout = setTimeout( delayed, threshold || 100 );
    }
  }

});
