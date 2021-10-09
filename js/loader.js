/** Most important part */
function loader() {
    const loaderBox = document.getElementById("loaderBox");
    const css = {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "#ffffff",
        display: "flex",
        justifyContent: "center",
        zIndex: 1000,
        alignItems: "center",
    }

    function addCSS(props) {
        Object.assign(loaderBox.style, props);
    } addCSS(css);

    setTimeout(() => {
        // css.display = "none"; 
        /**I am cutting loader form HTML Document using adoptNode */
        let removeLoader = document.adoptNode(loaderBox);
    }, 1000);
}
loader();