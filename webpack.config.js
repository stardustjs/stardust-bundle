module.exports = {
    mode: "production",
    entry: {
        stardust: "./dist/stardust.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist",
        library: "Stardust",
        libraryTarget: "umd"
    }
};
