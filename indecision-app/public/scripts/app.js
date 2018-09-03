"use strict";

var visibility = false;

var toggleVisibility = function toggleVisibility() {
    // visibility = visibility ? false : true;
    visibility = !visibility;
    renderTemplate();
};

var renderTemplate = function renderTemplate() {
    var template = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Visibility Toggle"
        ),
        React.createElement(
            "button",
            { onClick: toggleVisibility },
            !visibility ? "Show details" : "Hide details"
        ),
        visibility && React.createElement(
            "p",
            null,
            "Hey, these are some details you can now see..."
        )
    );

    var appRoot = document.getElementById("example01");
    ReactDOM.render(template, appRoot);
};

renderTemplate();
