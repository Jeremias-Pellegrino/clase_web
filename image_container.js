export const single_container = (() => {
    const div = document.createElement("div");
    div.id = "single_container";
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    div.style.gap = "5px";
    div.style.padding = "5px";
    document.body.appendChild(div);
    // div.style.display = "flex";
    // div.style.flexDirection = "column";
    div.style.gap = "5px";
    // div.style.maxWidth = "300px";  // container won’t exceed 300px
    // div.style.width = "100%";      // allow images to fill container
    document.body.appendChild(div);
    return div;
})();

export const container = (() => {
    const div = document.createElement("div");
    div.id = "container";
    div.style.display = "flex";
    div.style.flexWrap = "wrap";
    div.style.gap = "5px";
    div.style.padding = "5px";
    document.body.appendChild(div);
    return div;
})();