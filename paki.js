var imagenes = [];
imagenes["cauchin"] = "vaca.png";
imagenes["pokacho"] = "pollo.png";
imagenes["tosinauro"] = "cerdo.png";


var coleccion= [];
coleccion.push(new Pakiman("cauchin", 100, 30));
coleccion.push(new Pakiman ("pokacho", 80, 50));
coleccion.push(new Pakiman("tosinauro", 120, 40));

for( var p of coleccion){
   p.mostrar();
}
