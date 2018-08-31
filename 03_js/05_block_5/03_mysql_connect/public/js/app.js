/* jshint esversion : 6 */
const appClient = (function appClient() {
  "use strict";

  var domList, usersToDelete = [];
  // READ THE DOC // https://developer.mozilla.org/fr/docs/Web/HTTP/M%C3%A9thode/POST
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

  const createUser = function createUser(e) {
    // cette event est déclenché par le submit du FORM
    e.preventDefault(); // empêche FORM de reload la page (comportement par défaut)
    const url = "http://localhost:5555/user";
    doAjax(url, "POST", res => {
      console.log(JSON.parse(res));
    }, {
      name: document.getElementById("new_user_name").value,
      lastname: document.getElementById("new_user_lastname").value,
      email: document.getElementById("new_user_email").value
    });
  };

  const deleteUser = function deleteUser() {
    // console.log(usersToDelete);
    doAjax("http://localhost:5555/user", "DELETE", res => {
      removeUser(JSON.parse(res));
    }, { ids: usersToDelete });
  };

  const getUsers = function getUsers() {
    doAjax("http://localhost:5555/user", "GET", res => {
      displayUser(JSON.parse(res));
    });
  };

  const removeUser = function removeUser(res) {
    console.log(res);
  };

  const prepareUserDelete = function prepareUserDelete(e) {
    const id = Number(this.id.split("_")[1]);
    if (this.checked) { // si le checkbox est checked
      // pousser l'id courant dans le tableau d'ids à supprimer
      usersToDelete.push(id);
    } else { // si le checkbox n'est pas checked
      // trouver le numéro de case de l'id qu'on vient de déselectionner
      let index = usersToDelete.findIndex(v => v === id);
      usersToDelete.splice(index, 1); // supprimer l'id du tableau d'ids à supprimer
    }
    // console.log("_(0.v.0)_ # usersToDelete =>");
    // console.log(usersToDelete);
  };

  const displayUser = function displayUser(userList) {
    console.log(userList);
    domList.innerHTML = "";
    userList.forEach(user => {
      let box = document.createElement("input");
      let li = document.createElement("li");
      let span = document.createElement("span");
      box.type = "checkbox";
      box.id = `user_${user.id}`;
      box.onchange = prepareUserDelete;
      span.textContent = `${user.name} - ${user.lastname}`;
      li.className = "item user";
      li.appendChild(box);
      li.appendChild(span);
      domList.appendChild(li);
    });
  };

  const start = function start() {
      domList = document.getElementById("list_user");
      document.getElementById("btn_get_user").onclick = getUsers;
      document.getElementById("btn_new_user").onclick = createUser;
      document.getElementById("btn_del_user").onclick = deleteUser;
  };

  window.addEventListener("DOMContentLoaded", start);
}());
