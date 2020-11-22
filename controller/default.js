
//   GET /restituisci_testo
exports.getText = (req, res, next) => {
        res
                .status(200)
                .set('Content-Type', 'text/plain')
                .send("Benvenuti sul rest server di Matteo Gatti e Arzani Simone");
}


//  GET /restituisci_valore/:N
exports.getVal = (req, res, next) => {
        let reqId = req.params.N;
        res
                .status(200)
                .set('Content-Type', 'text/html')
                .send(`<H3>Valore della richiesta=${reqId}</H3>`);
};


//  GET /restituisci_valore/:N
exports.getIndex = (req, res, next) => {
        res
        .status(200)
        .set('Content-Type', 'text/html')
        .send(`<H2>Benvenuti sul rest!</H2>
         <p> <a href="/index.html">/index.html</a> </p>
         <p> <a href="/restituisci_testo">/restituisci_testo</a> </p>
         <p> <a href="/restituisci_valore/2">/restituisci_valore/2</a> </p>
        `);
};