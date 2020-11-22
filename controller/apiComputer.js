const Pc = require("../model/Computer");

exports.getComputers=(req, res, next) => {
        const lista = Pc.fetchAll();
        res.json(lista); 
}


exports.getComputer=(req, res, next) => {
        let jsonr=Pc.fetchById(req.params.id);
        if ( typeof jsonr == 'undefined') {
            jsonr = { "msg": `Risorsa id ${req.params.id} non trovata` }
        }
        res.json(jsonr);
}

exports.insertComputer=(req, res, next) => {
        let jsonr = req.body;
        console.log(jsonr)
        let jsoni={};
        let computer= new Pc(jsonr) 
        let idPc=computer.insert();
        jsoni.msg = `Json ricevuto dal client correttamente id=${idPc}`;
        jsoni.inserted_Obj = { ...jsonr }
        res.json(jsoni);
}

exports.deleteComputer=(req, res, next) => {
        let jsoni;
        let idPc = req.params.id;
        let risultato = Pc.deleteByID(idPc)
        console.log(risultato);
        if (risultato==0){
            jsoni= { "msg": `id: ${idPc} cancellato correttamente ` }
        }else{
            jsoni= { "msg": `id: ${idPc} non trovato in lista ` }
        }
        res.json(jsoni);  
}

exports.updateComputer=(req, res, next) => {
        let idPc = req.params.id;
        let jsonr = req.body;
        jsonr.id=idPc
        let jsoni = {}
        jsoni.ricevuto = { ...jsonr }    
        let risultato = Pc.updateByID(idPc,jsonr)
        if (risultato==0){
            jsoni.msg = `id: ${idPc} aggiornato correttamente `
        }else{
            jsoni.msg = `id: ${idPc} non trovato in lista `
        }
        res.json(jsoni);  
}