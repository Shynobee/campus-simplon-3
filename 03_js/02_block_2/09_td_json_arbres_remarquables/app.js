/* jshint esversion : 6 */

var loadAndGo = function(callback) {
    window.addEventListener("DOMContentLoaded", callback);
};

var log = function log(data) {
    console.log(data);
};

var byId = function byId(id) {
    return document.getElementById(id);
};

var app = (function () {
    "use strict";

    var parseRecordProperties = function(record) {
        for (let prop in record) {
            if (record.hasOwnProperty(prop)) {
                console.log("prop => ");
                console.log(prop);
                console.log("value  => ");
                console.log(record[prop]);
            }
        }
    };

    var displayDataset = function(records) {
        var list =  byId("arbres_remarquables");
        records.forEach(function(r, i) {
            parseRecordProperties(r); // découvrons la boucle for...in
            var li = document.createElement("li");
            li.textContent = `${r.fields.libellefrancais}  (${r.fields.adresse})`;
            li.className = "item arbre";
            list.appendChild(li);
        });
    };

    var myFirstAjaxGet = function(url) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function(evt) {
            console.log(this);
            console.log(this.response); // checkez le type de this.response
            displayDataset(JSON.parse(this.response).records);
        };
        xhr.send();
    };

    var start = function () {
        var url = "https://opendata.paris.fr/api/records/1.0/search/?dataset=arbresremarquablesparis2011&rows=100&facet=genre&facet=espece";
        myFirstAjaxGet(url);
    };

    loadAndGo(start);
}());
