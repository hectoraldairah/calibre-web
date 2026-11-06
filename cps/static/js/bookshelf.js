/* Match Bootstrap's mobile breakpoint so every library destination stays reachable. */
/* global window, document */
(function () {
    "use strict";

    var navigation = document.getElementById("scnd-nav");
    var mainNavigation = document.getElementById("main-nav");
    if (!navigation || !mainNavigation) return;

    var sidebar = navigation.parentNode;
    var mobile = window.matchMedia("(max-width: 767px)");

    function positionNavigation() {
        if (mobile.matches) {
            mainNavigation.parentNode.insertBefore(navigation, mainNavigation.nextSibling);
            navigation.classList.add("nav", "navbar-nav");
        } else {
            sidebar.appendChild(navigation);
            navigation.classList.remove("nav", "navbar-nav");
        }
    }

    positionNavigation();
    mobile.addListener(positionNavigation);
}());
