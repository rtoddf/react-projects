let visibility = false;

const toggleVisibility = () => {
    // visibility = visibility ? false : true;
    visibility = !visibility;
    renderTemplate();
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{!visibility ? "Show details" : "Hide details"}</button>
            {visibility && (
                <p>Hey, these are some details you can now see...</p>
            )}
        </div>
    )

    const appRoot = document.getElementById("example01");
    ReactDOM.render(template, appRoot);
}

renderTemplate();