function eliminar(id){
swal({
  title: "¿Estas seguro?",
  text: "Una vez eliminado, no podras recuperarlo!",
  icon: "Advertencia",
  buttons: true,
  dangerMode: true,
})
.then((OK) => {
  if (OK) {
    $.ajax({
    url: "/eliminar/" + id,
    success: function(res){
    console.log(res);
        },
    });
    swal("Poof! Se ha eliminado!", {
      icon: "Correctamente",
    }).then((ok) => {
        if (ok) {
            location.href = "/listar";
        }
    });
  } else {
    swal("Tu archivo esta seguro!");
  }
});
}