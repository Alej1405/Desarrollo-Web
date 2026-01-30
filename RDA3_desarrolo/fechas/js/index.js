function makeArray(){
    return [
    "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    console.log("funciona")
}
function mostrarFecha(){
    const meses = makeArray();
    const hoy = new Date();
    const dia = hoy.getDate();
    const mes = meses[hoy.getMonth()];
    const ano = hoy.getFullYear()
    document.getElementById("fechaActual").innerText = `Hoy es ${dia} de ${mes} de año ${ano}`;
    console.log("funciona")
}
