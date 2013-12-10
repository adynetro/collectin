window.addEventListener('load', function () {
    new FastClick(document.body);
}, false);

// The dynamically built HTML pages. In a real-life app, In a real-life app, use Handlerbar.js, Mustache.js or another template engine
<<<<<<< HEAD
=======
var homePage =
    '<div id="primaryContainer" class="primaryContainer clearfix">' +
               '<img id='logo' src='img/logo.png' class='image' />' +
       '<div id='header' class='clearfix'>' +
          ' <div id='status' class='clearfix'>' +
              ' <p id='statustext'>YOU HAVE 550</p>' +
               '<img id='image' src='img/pearl.png' class='image' />' +
           '</div>' +
       '</div>' +
       '<div id='locatie' class='clearfix' >' +
           '<p id='locatietext'>'BONTON PALACE</p>' +
       '</div>' +
       '<div id='collectin' class='clearfix' >' +
           '<p id='collectintext'>MY COLLECT IN</p>' +
       '</div>' +
       '<div id='treasure' class='clearfix' >' +
           '<p id='treasuretext'>TREASURE HUNT</p>' +
       '</div>' +
       '<div id='discover' class='clearfix' >' +
           '<p id='discovertext'>DISCOVER PLACES</p>' +
       '</div>' +
       '<div id='games' class='clearfix' >' +
           '<p id='gamestext'>GAMES</p>' +
       '</div>' +
       '<div id='using' class='clearfix' >' +
           '<p id='usingtext'>USING  COLLECTIN</p>' +
       '</div>' +
       '<div id='nebuloasa' class='clearfix'>' +
       '</div>' +
	'</div>';

var detailsPage =
    '<div>' +
        '<div class="scroller">' +
            '<div class="robot">' +
                '<img src="images/{{img}}"/>' +
                '<h2>{{name}}</h2>' +
                '<p>{{description}}</p>' +
            '</div>' +
        '</div>' +
    '</div>';


>>>>>>> 0beb7014ca07887ef9c0683ca8a68b4d84ce18b6
var slider = new PageSlider($("#container"));
$(window).on('hashchange', route);

// Basic page routing
function route(event) {
    var page,
        hash = window.location.hash;

<<<<<<< HEAD
    if (hash === "#locatie") {
        page = $("#container").load("location.html") ;
=======
    if (hash === "#page1") {
        page = merge(detailsPage, {img: "buildbot.jpg", name: "Build Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
>>>>>>> 0beb7014ca07887ef9c0683ca8a68b4d84ce18b6
//        slider.slide($(page), "right");
    } else if (hash === "#page2") {
        page = merge(detailsPage, {img: "medibot.jpg", name: "Medi Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    } else if (hash === "#page3") {
        page = merge(detailsPage, {img: "ripplebot.jpg", name: "ripplebot Bot", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."});
//        slider.slide($(page), "right");
    }
    else {
<<<<<<< HEAD
        page = $("#container").load("collectin.html") ;
;
=======
        page = homePage;
>>>>>>> 0beb7014ca07887ef9c0683ca8a68b4d84ce18b6
//        slider.slide($(homePage), "left");
    }

    slider.slidePage($(page));

}

// Primitive template processing. In a real-life app, use Handlerbar.js, Mustache.js or another template engine
function merge(tpl, data) {
    return tpl.replace("{{img}}", data.img)
              .replace("{{name}}", data.name)
              .replace("{{description}}", data.description);
}

route();