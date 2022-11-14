//POST-IT NOTE (JAVASCRIPT)
if (localStorage["note"]) {
    var note = localStorage["note"];
    document.getElementById("note").value = note;
   }
   
   function autoSave() {
    var note = document.getElementById("note").value;
    localStorage.setItem("note", note);
   }
   