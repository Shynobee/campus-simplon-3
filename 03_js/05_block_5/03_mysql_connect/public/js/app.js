/* jshint esversion : 6 */
const appClient = (function appClient() {
  "use strict";
  var dom = {}, url = "http://localhost:5555", formValues, usersToDelete = [];

  // READ THE DOC // https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode/POST

  const changeFormValues = function changeFormValues(user) {
    // PREPARATION DU FORMULAIRE EN MODE EDIT
    // on récupère un objet user pour pré remplir les champs du formulaire d'édition
    dom.hiddenId.value = user.id;
    dom.name.value = user.name;
    dom.lastname.value = user.lastname;
    dom.email.value = user.email;
  };

  const createUser = function createUser(e) { //déclenchée par submit FORM
    doAjax(url + "/user", "POST", res => {
      console.log(JSON.parse(res)); // faire quelque chose ici si erreur : )
      getUsers();
    }, getFormValues()); // récupérer les valeurs actuelles du form
  };

  const deleteUser = function deleteUser() {
    doAjax(url + "/user", "DELETE", res => {
      // RETOUR DE L APPEL AJAX
      getUsers();
    }, { ids: usersToDelete });
  };

  const displayUser = function displayUser(userList) {
    dom.list.innerHTML = ""; // on initialise la liste d'user (ul HTML vide)
    userList.forEach(user => { // pour chaque utilisateur
      let box = document.createElement("input"); // création d'un input
      let li = document.createElement("li"); // et d'un li
      let span = document.createElement("span"); // et d'un span
      let icon = document.createElement("i"); // et d'une icône ...
      // CHECKBOX
      box.type = "checkbox"; // on configure le type d'input
      box.id = `delete_user_${user.id}`; // avec un id qu'on utilisera ...
      box.onchange = prepareUserDelete; // ... quand prepareUserDelete sera exécutée
      // SPAN
      span.textContent = `${user.name} - ${user.lastname}`; // affichage des infos user
      // FONTAWESOME ICON
      icon.className = "icon far fa-edit"; // paramétrage de l'icône
      icon.id = `edit_user_${user.id}`; // attribution d'un attribut id ...
      icon.onclick = prepareUserEdit; // ... utile quand prepareUserEdit sera exécutée
      // LI
      li.className = "item user"; // ajout de classes CSS à l'item de liste
      li.appendChild(box); // insertion ..
      li.appendChild(span); // des enfants
      li.appendChild(icon); // du li
      // MONTAGE DU LEGO (TECHNIQUE) !!!
      dom.list.appendChild(li); // on ajoute le li finalisé à la liste HTML d'user
    });
  };

  const doAjax = function doAjax(url, method, callback, data) {
    try {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.setRequestHeader('Content-Type', 'application/json'); // on paramètre un peu l'entête de notre requête
      data = data ? JSON.stringify(data) : null;

      if (method.toLowerCase() === "post") {
        if (!data) throw new Error("bad call");
      }
      // on attend le retour de l'appel AJAX
      xhr.onload = evt => callback(evt.target.response || evt.srcElement.response);

      xhr.send(data);

    } catch(err) { console.error(err); }
  };

  const getUsers = function getUsers() {
    doAjax(url + "/user", "GET", function(res) {
      // RETOUR DE L APPEL AJAX
      displayUser(JSON.parse(res));
    });
  };

  const setFormMode = function setFormMode(mode, id) {
    if (mode === "create") {
      resetFormValues();
      dom.userInfo.textContent = "Create new user";
      dom.btnNewUser.classList.remove("is-hidden");
      dom.btnEditUser.classList.add("is-hidden");
    } else {
      dom.userInfo.innerHTML = "Edit user n° <span id=\"current_edited_id\">" + id + "</span>";
      dom.btnNewUser.classList.add("is-hidden");
      dom.btnEditUser.classList.remove("is-hidden");
    }
  };

  const editUser = function editUser(id) {
    doAjax("http://localhost:5555/user/", "PATCH", function(res) {
      // RETOUR DE L APPEL AJAX
      setFormMode("create"); // retour du form en mode create
      getUsers(); // récupère la liste d'users mise à jour

    }, getFormValues()); // récupérer les valeurs actuelles du form
  };

  const getFormValues = function getFormValues() {
    /// @todo => améliorer le code ici pour éviter que les valeurs
    // saisies soit incohérentes et/ou manquantes
    // ex: name = 123445637389 OU email === "", etc.
    return {
      email: dom.email.value,
      id: dom.hiddenId.value,
      lastname: dom.lastname.value,
      name: dom.name.value
    };
  };

  const prepareUserEdit = function prepareUserEdit(e) {
    const id = (function () {
      const icon = e.srcElement || e.target; // quelle icone à été cliquée ?
      return icon.id.split("_")[2]; // sur icon, récupère l'id  de l'user à éditer
    }());
    setFormMode("update", id);
    doAjax(`http://localhost:5555/user/${id}`, "GET", function(res) {
      changeFormValues(JSON.parse(res));
    });
  };

  const prepareUserDelete = function prepareUserDelete(e) {
    const checkbox = e.srcElement || e.target; // quel checkbox à été changé de valeur ?
    const id = Number(checkbox.id.split("_")[2]); // sur checkbox récupère id de l'user à supprimer
    if (this.checked) { // si le checkbox EST checked
      usersToDelete.push(id); // pousser l'id courant dans le tableau d'ids d'user à supprimer
    } else { // si le checkbox n'est PAS checked
      // trouver le numéro de case de l'id qu'on vient de déselectionner
      let index = usersToDelete.findIndex(v => v === id);
      usersToDelete.splice(index, 1); // supprimer l'id du tableau d'ids d'users à supprimer
    }
    console.log("_(0.v.0)_ # usersToDelete =>");
    console.log(usersToDelete);
  };

  const resetFormValues = function resetFormValues() {
    return {
      name: dom.name.value = "",
      lastname: dom.lastname.value = "",
      email: dom.email.value = "",
      id: dom.hiddenId.value = ""
    };
  };

  const start = function start() {
      // LIST d'USERS
      dom.list = document.getElementById("list_user");
      // FORMULAIRE
      dom.formUser = document.getElementById("form_user");
      dom.hiddenId = document.getElementById("user_id");
      dom.name = document.getElementById("user_name");
      dom.lastname = document.getElementById("user_lastname");
      dom.email = document.getElementById("user_email");
      dom.userInfo = document.getElementById("user_info");
      // BUTTONS
      dom.btnNewUser = document.getElementById("btn_new_user");
      dom.btnEditUser = document.getElementById("btn_edit_user");
      dom.btnGetUser = document.getElementById("btn_get_user");
      dom.btnDeleteUser = document.getElementById("btn_del_user");

      // ATTACHER LES EVENT LISTENERS !!!
      dom.btnGetUser.onclick = getUsers;
      dom.btnDeleteUser.onclick = deleteUser;
      // edition et création d'users partagent le même formulaire
      // selon le mode (create || update) ...
      // ... on affiche soit le bouton de création soit le bouton d'édition
      dom.btnNewUser.onclick = createUser; // dans les 2 cas...
      dom.btnEditUser.onclick = editUser; // les events sont attachés aux 2 boutons !
      // Enfin empêcher FORM de reload la page (comportement HTML par défaut)
      dom.formUser.onsubmit = function(e) { e.preventDefault(); };
  };

  // lancement de l'app (front) au chargement du Document
  window.addEventListener("DOMContentLoaded", start);
}());
