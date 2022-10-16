import Webmint from "webmint"



const server = new Webmint({
    poweredByHeader: false,
});

server.get("ping", async(req, res) => {
    return "Ping Successful"
} )


const port = parseInt(process.env.PORT??"3000")

server.listen(port, "0.0.0.0", async url => {
    console.log(`Server listening at ${url}`);
    import("./index")
})