(function(e) {
    fetch('/article')
        .then((response) => {
            var contentType = response.headers.get("content-type");
            if(contentType && contentType.includes("application/json")) {
                return response.json();
            }
            throw new TypeError("Oops, we haven't got JSON!");
        })
        .then(x => {
            const header = document.querySelector("#header");
            header.innerHTML = x.header;
console.log(x);
            const subheader = document.querySelector(".subheading");
            subheader.innerHTML = x.subheader;

            const meta = document.querySelector(".meta");
            meta.innerHTML = x.meta;

            const body = document.querySelector("#p_body");
            body.innerHTML = x.body;
        });

})();