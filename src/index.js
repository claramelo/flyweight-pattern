var Bolinha = function(color) {
  this.color = color;
};

var BolinhaFactory = function() {
  this.bolinhas = [];
};

BolinhaFactory.prototype.getBolinha = function(color) {
  for (var i = 0; i < this.bolinhas.length; i++) {
    if (this.bolinhas[i].color === color) {
      return this.bolinhas[i];
    }
  }

  return null;
};

BolinhaFactory.prototype.createNewBolinha = function(color) {
  var bolinha = this.getBolinha(color);

  if (bolinha) {
    return bolinha;
  } else {
    const newBolinha = new Bolinha(color);
    this.bolinhas.push(newBolinha);

    return newBolinha;
  }
};

var fabrica = new BolinhaFactory();

var pinkBall = fabrica.createNewBolinha("pink");
var anotherPinkBall = fabrica.createNewBolinha("pink");

console.log(pinkBall === anotherPinkBall);
