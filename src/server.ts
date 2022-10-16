import Webmint from "webmint"



const server = new Webmint({
    poweredByHeader: false,
});

server.get("ping", async(req, res) => {
    return "Ping Successful"
} )




server.listen(3000, "0.0.0.0", async url => {
    console.log(`Server listening at ${url}`);
    import("./index")
})