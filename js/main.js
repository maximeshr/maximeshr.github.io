$(document).ready(function () {

  $( function() {

    var qsRegex;
    var filterValue;

    var $container = $('.isotope').isotope({
      itemSelector: '.element-item',
      layoutMode: 'vertical',
      vertical: {
        horizontalAlignment: 0,
      },
      filter: function() {
        var $this = $(this);
        var searchResult = qsRegex ? $this.text().match( qsRegex ) : true;
        var filterResult = filterValue ? $this.is( filterValue ) : true;
        return searchResult && filterResult;
      }
    });

    $('#filters').on( 'click', 'a', function() {
      filterValue = $( this ).attr('data-filter');
      $container.isotope();
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
    }) );

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
      setTimeout( delayed, threshold || 100 );
    }
  }

});
