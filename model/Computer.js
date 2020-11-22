const lista = [{id: 0, nome:"Hp", memoria:"2tb"},
               {id: 1, nome:"Lenovo", memoria:"1tb"}]

module.exports = class Computer {

  constructor(computer) { this.computer=computer }

  insert() {
    let nuovoid = lista.length
    this.computer.id=nuovoid
    lista[nuovoid]=this.computer
    return nuovoid;
  }

  static fetchAll() {
    return lista;
  }

  static fetchById(indice) {
    if (lista[indice]) {
      return lista[indice];
    }else{
      return undefined;
    }
  }
  static deleteByID(indice) {
    if (lista[indice] == undefined){
      return 1; // 0 KO
    }else{
      lista.splice(indice,1)
      return 0; // OK
    }
    
  }

  static updateByID(indice,computer) {
    if (lista[indice] = computer){
      return 0; // 0 OK, 1 KO
    }else{
      return 1; // KO
    }
  }

}