/*
 * global var
 */

var globalvar;

$(document).ready(function(){
    $.getJSON("https://randomuser.me/api/?results=1&gender=female", function(data) {
        globalvar = data;
        $('#icon').attr('src', data.results[0].picture.large);
    });
});

function headerMenu (app) {
    var nav = document.createElement ("nav");
    var ul = document.createElement ("ul");
    li = addImage (app);
    ul.appendChild (li);
    ul.appendChild (createLi ("Home", "index.html"));
    ul.appendChild (createLi ("Sign-In", "newuser.html"));
    ul.appendChild (createLi ("Contact Us", "contact.html"));
    ul.appendChild (createLi ("About Us", "about.html"));
    nav.appendChild (ul);
    var header = document.getElementById ("headerMenuId");
    header.appendChild (nav);
}

function addImage (app) {
    var li = document.createElement ("li");
    var img = document.createElement ("img");
    switch (app) {
        case 1 :
            img.src = "../IMG/home.png";
        break;
        case 2 :
            img.src = "../IMG/sign_in.png";
        break;
        case 3 :
            img.src = "../IMG/contact_us.png";
        break;
        case 4 :
            img.src = "../IMG/about_us.png";
        break;
    }
    li.appendChild (img);
    return li;
}

function createLi (string, url) {
    var app = document.createElement ("li");
    app = createAnchor (app, string, url);
    return app;
}

function createAnchor (elem, string, url) {
    var app = document.createElement ("a");
    app.href = url;
    app.innerText = string;
    elem.appendChild (app);
    return elem;
}

function addImg () {
    //
}

function addText (id) {
    var papp = document.getElementById ("simpletext");
    var h1app = document.getElementById ("bigtext");
    var persona = globalvar.results[0];
    $('#icon').attr('src', persona.picture.large);
    switch (id) {
        case 1 :
            papp.innerText = "Hi, My name is";
            h1app.innerText = persona.name.first + " " + persona.name.last;
        break;
        case 2 :
            papp.innerText = "My e-mail address is";
            h1app.innerText = persona.email;
        break;
        case 3 :
            papp.innerText = "My birthday is";
            var app = persona.dob.split(" ");
            h1app.innerText = app [0];
        break;
        case 4 :
            papp.innerText = "My address is";
            h1app.innerText = persona.location.street;
        break;
        case 5 :
            papp.innerText = "My phone number is";
            h1app.innerText = persona.cell;
        break;
        case 6 :
            papp.innerText = "My password is";
            h1app.innerText = persona.login.password;
        break;
    }
}

function removeText () {
    var papp = document.getElementById ("simpletext");
    var h1app = document.getElementById ("bigtext");
    papp.innerText = "";
    h1app.innerText = "";
}