botao.addEventListener("click", function () {
  var nomecliente = nome.value;
  var quantiasorvete = quantidade.value;
  var saboressorvete = sabores.value;

  //*alert("nome:" + nomecliente + "Qnt:" + quantiasorvete + " sabor: " + saboressorvete);

  /*var dadospedido =
    " nome: " +
    nomecliente +
    " Qnt: " +
    quantiasorvete +
    " sabor: " +
    saboressorvete;*/

  pedidonome.innerHTML = nomecliente;
  pedidoquantia.innerHTML = quantiasorvete;
  pedidosabores.innerHTML = saboressorvete;
});
