/* jshint esversion: 6 */

function createUser(n, a) {
    return { name: n, age: a, f1: () => {}, f2: () => {} };
}

const u0 = createUser("gui", 38);
const u1 = createUser("gui", 38);
const u2 = createUser("lounes", 27);
const userN = createUser("olivia", 27);


////////////////////////////////////
// var gui = this;
// console.log(gui);
// console.log(gui === this);
////////////////////////////////////

function User(n, a) {
    this.name =  n;
    this.age =  a;
}

User.prototype.f1 = function (m) {
    alert(m || "yata !!!");
};

User.prototype.f2 = function () {
    alert(this.name);
};

User.prototype.afficherAUclick = function () {
    console.log("this => instanceof User");
    console.log(this);
    const that = this;
    window.onclick = function () {
        that = 42;
        console.log("this => window ><' ");
        console.log(this.name + " " + this.age);
        console.log("this => User :D ");
        console.log(that.name + " " + that.age);
    };
};

const u3 = new User("elsa", 28);

u3.afficherAUclick();

const u4 = new User("joel", 30);
const u5 = new User("aicha", 23);
const u6 = new User("lauriane", 28);
