 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

jQuery(document).ready(function($) {

	"use strict";

	

	var siteMenuClone = function() {

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;
      $('.site-mobile-menu .has-children').each(function(){
        var $this = $(this);
        
        $this.prepend('<span class="arrow-collapse collapsed">');

        $this.find('.arrow-collapse').attr({
          'data-toggle' : 'collapse',
          'data-target' : '#collapseItem' + counter,
        });

        $this.find('> ul').attr({
          'class' : 'collapse',
          'id' : 'collapseItem' + counter,
        });

        counter++;

      });

    }, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      var $this = $(this);
      if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        $this.removeClass('active');
      } else {
        $this.addClass('active');
      }
      e.preventDefault();  
      
    });

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    var container = $(".site-mobile-menu");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	      if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    }
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
	    type: 'image',
	    closeOnContentClick: true,
	    closeBtnInside: false,
	    fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	     gallery: {
	      enabled: true,
	      navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	      verticalFit: true
	    },
	    zoom: {
	      enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

	  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	    disableOn: 700,
	    type: 'iframe',
	    mainClass: 'mfp-fade',
	    removalDelay: 160,
	    preloader: false,

	    fixedContentPos: false
	  });
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    center: false,
		    items: 1,
		    loop: false,
				stagePadding: 0,
		    margin: 20,
		    nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    responsive:{
	        600:{
	        	margin: 20,
	          items: 2
	        },
	        1000:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 2
	        },
	        1200:{
	        	margin: 20,
	        	stagePadding: 0,
	          items: 3
	        }
		    }
			});
		}

		$('.slide-one-item').owlCarousel({
	    center: false,
	    items: 1,
	    loop: true,
			stagePadding: 0,
	    margin: 0,
	    autoplay: true,
	    pauseOnHover: false,
	    nav: true,
	    navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  });
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
	    responsive: false,
	    parallaxBackgrounds: true,
	    parallaxElements: true,
	    horizontalScrolling: false,
	    hideDistantElements: false,
	    scrollProperty: 'scroll'
	  });
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  var $this = $(this).html(event.strftime(''
		    + '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    + '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    + '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    + '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    + '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var swiperSetting = function() {
		var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    // direction: 'horizontal',
	    // loop: true,

	    // If we need pagination
	    pagination: {
	      el: '.swiper-pagination',
	    },

	    // Navigation arrows
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	    mousewheel: {
		  	invert: false,
		  	forceToAxis: true,
		  	releaseOnEdges: true,
		  },

		  // direction: 'vertical',
		  freeMode: true,
      // slidesPerView: 'auto',
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

	    // And if we need scrollbar
	    // scrollbar: {
	    //   el: '.swiper-scrollbar',
	    // },

	    slidesPerView: 3,
			breakpoints: {
				668: {
					slidesPerView: 1
				},
				1024: {
					slidesPerView: 2 
				}
			},
			// paginationClickable: false,
			spaceBetween: 20,
			// freeMode: true,
			// grabCursor: true,
			// mousewheelControl: true

	  })
	}
	swiperSetting();

});






























////////////////////////////////////////////////////////////////////////////////
// Global Variables

var viz, workbook, activeSheet;

////////////////////////////////////////////////////////////////////////////////
// 1 - Create a View

function initializeViz() {
  var placeholderDiv = document.getElementById("tableauViz");
  var url = "https://10ay.online.tableau.com/#/site/fnxintl/views/Agentutilizationextract/Sheet1";
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
}

// Create the viz after the page is done loading
// $(initializeViz);

////////////////////////////////////////////////////////////////////////////////
// 2 - Filter

function filterSingleValue() {
  activeSheet.applyFilterAsync(
    "Region",
    "The Americas",
    tableau.FilterUpdateType.REPLACE);
}

function addValuesToFilter() {
  activeSheet.applyFilterAsync(
    "Region",
    ["Europe", "Middle East"],
    tableau.FilterUpdateType.ADD);
}

function removeValuesFromFilter() {
  activeSheet.applyFilterAsync(
    "Region",
    "Europe",
    tableau.FilterUpdateType.REMOVE);
}

function filterRangeOfValues() {
  activeSheet.applyRangeFilterAsync(
    "F: GDP per capita (curr $)",
    {
      min: 40000,
      max: 60000
    },
    tableau.FilterUpdateType.REPLACE);
}

function clearFilters() {
  activeSheet.clearFilterAsync("Region");
  activeSheet.clearFilterAsync("F: GDP per capita (curr $)");
}

////////////////////////////////////////////////////////////////////////////////
// 3 - Switch Tabs

function switchToMapTab() {
  workbook.activateSheetAsync("GDP per capita map");
}

////////////////////////////////////////////////////////////////////////////////
// 4 - Select

function selectSingleValue() {
  workbook.getActiveSheet().selectMarksAsync(
    "Region",
    "Asia",
    tableau.SelectionUpdateType.REPLACE);
}

function addValuesToSelection() {
  workbook.getActiveSheet().selectMarksAsync(
    "Region",
    ["Africa", "Oceania"],
    tableau.SelectionUpdateType.ADD);
}

function removeFromSelection() {
  // Remove all of the areas where the GDP is < 5000.
  workbook.getActiveSheet().selectMarksAsync(
    "AVG(F: GDP per capita (curr $))",
    {
      max: 5000
    },
    tableau.SelectionUpdateType.REMOVE);
}

function clearSelection() {
  workbook.getActiveSheet().clearSelectedMarksAsync();
}

////////////////////////////////////////////////////////////////////////////////
// 5 - Chain Calls

function switchTabsThenFilterThenSelectMarks() {
  workbook.activateSheetAsync("GDP per capita by region")
    .then(function (newSheet) {
      activeSheet = newSheet;

      // It's important to return the promise so the next link in the chain
      // won't be called until the filter completes.
      return activeSheet.applyRangeFilterAsync(
        "Date (year)",
        {
          min: new Date(Date.UTC(2002, 1, 1)),
          max: new Date(Date.UTC(2008, 12, 31))
        },
        tableau.FilterUpdateType.REPLACE);
    })
    .then(function (filterFieldName) {
      return activeSheet.selectMarksAsync(
        "AGG(GDP per capita (weighted))",
        {
          min: 20000
        },
        tableau.SelectionUpdateType.REPLACE);
    });
}

function triggerError() {
  workbook.activateSheetAsync("GDP per capita by region")
    .then(function (newSheet) {
      // Do something that will cause an error: leave out required parameters.
      return activeSheet.applyFilterAsync("Date (year)");
    })
    .otherwise(function (err) {
      alert("We purposely triggered this error to show how error handling happens with chained calls.\n\n " + err);
    });
}

////////////////////////////////////////////////////////////////////////////////
// 6 - Sheets

function getSheetsAlertText(sheets) {
  var alertText = [];

  for (var i = 0, len = sheets.length; i < len; i++) {
    var sheet = sheets[i];
    alertText.push("  Sheet " + i);
    alertText.push(" (" + sheet.getSheetType() + ")");
    alertText.push(" - " + sheet.getName());
    alertText.push("\n");
  }

  return alertText.join("");
}

function querySheets() {
  var sheets = workbook.getPublishedSheetsInfo();
  var text = getSheetsAlertText(sheets);
  text = "Sheets in the workbook:\n" + text;
  alert(text);
}

function queryDashboard() {
  // Notice that the filter is still applied on the "GDP per capita by region"
  // worksheet in the dashboard, but the marks are not selected.
  workbook.activateSheetAsync("GDP per Capita Dashboard")
    .then(function (dashboard) {
      var worksheets = dashboard.getWorksheets();
      var text = getSheetsAlertText(worksheets);
      text = "Worksheets in the dashboard:\n" + text;
      alert(text);
    });
}

function changeDashboardSize() {
  workbook.activateSheetAsync("GDP per Capita Dashboard")
    .then(function (dashboard) {
      dashboard.changeSizeAsync({
        behavior: tableau.SheetSizeBehavior.AUTOMATIC
      });
    });
}

function changeDashboard() {
  var alertText = [
    "After you click OK, the following things will happen: ",
    "  1) Region will be set to Middle East.",
    "  2) On the map, the year will be set to 2010.",
    "  3) On the bottom worksheet, the filter will be cleared.",
    "  4) On the bottom worksheet, the year 2010 will be selected."
  ];
  alert(alertText.join("\n"));

  var dashboard, mapSheet, graphSheet;
  workbook.activateSheetAsync("GDP per Capita Dashboard")
    .then(function (sheet) {
      dashboard = sheet;
      mapSheet = dashboard.getWorksheets().get("Map of GDP per capita");
      graphSheet = dashboard.getWorksheets().get("GDP per capita by region");
      return mapSheet.applyFilterAsync("Region", "Middle East", tableau.FilterUpdateType.REPLACE);
    })
    .then(function () {
      // Do these two steps in parallel since they work on different sheets.
      mapSheet.applyFilterAsync("YEAR(Date (year))", 2010, tableau.FilterUpdateType.REPLACE);
      return graphSheet.clearFilterAsync("Date (year)");
    })
    .then(function () {
      return graphSheet.selectMarksAsync("YEAR(Date (year))", 2010, tableau.SelectionUpdateType.REPLACE);
    });
}

////////////////////////////////////////////////////////////////////////////////
// 7 - Control the Toolbar

function exportPDF() {
  viz.showExportPDFDialog();
}

function exportImage() {
  viz.showExportImageDialog();
}

function exportCrossTab() {
  viz.showExportCrossTabDialog();
}

function exportData() {
  viz.showExportDataDialog();
}

function revertAll() {
  workbook.revertAllAsync();
}

////////////////////////////////////////////////////////////////////////////////
// 8 - Events

function listenToMarksSelection() {
  viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
}

function onMarksSelection(marksEvent) {
  return marksEvent.getMarksAsync().then(reportSelectedMarks);
}

function reportSelectedMarks(marks) {
  var html = [];
  for (var markIndex = 0; markIndex < marks.length; markIndex++) {
    var pairs = marks[markIndex].getPairs();
    html.push("<b>Mark " + markIndex + ":</b><ul>");
    for (var pairIndex = 0; pairIndex < pairs.length; pairIndex++) {
      var pair = pairs[pairIndex];
      html.push("<li><b>fieldName:</b> " + pair.fieldName);
      html.push("<br/><b>formattedValue:</b> " + pair.formattedValue + "</li>");
    }
    html.push("</ul>");
  }

  var dialog = $("#dialog");
  dialog.html(html.join(""));
  dialog.dialog("open");
}

function removeMarksSelectionEventListener() {
  viz.removeEventListener(tableau.TableauEventName.MARKS_SELECTION, onMarksSelection);
}