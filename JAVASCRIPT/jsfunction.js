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

$(document).ready(function(){
    /*var url = 'https://randomuser.me/api/?results=5';
    $.getJSON(url, function(data) {
        console.log(data);
        var persona = data.results[0];
        //console.log(persona);

        $('#nome').text(persona.name.first);
        $('#cognome').text(persona.name.last);
        $('#foto').attr('src', persona.picture.large);

        for(var k = 0; k < data.results.length; k++) {
            //console.log(data.results[k].name.first + ' ' + data.results[k].name.last);
        }
    });*/
    console.log("ciao");
});


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

function addText (id, string) {
    var papp = document.getElementById ("simpletext");
    var h1app = document.getElementById ("bigtext");
    switch (id) {
        case 1 :
            papp.innerText = "Hi, My name is";
            h1app.innerText = string;
        break;
        case 2 :
            papp.innerText = "My e-mail address is";
            h1app.innerText = string;
        break;
        case 3 :
            papp.innerText = "My birthday is";
            h1app.innerText = string;
        break;
        case 4 :
            papp.innerText = "My address is";
            h1app.innerText = string;
        break;
        case 5 :
            papp.innerText = "My phone number is";
            h1app.innerText = string;
        break;
        case 6 :
            papp.innerText = "My password is";
            h1app.innerText = string;
        break;
    }
}

function removeText () {
    var papp = document.getElementById ("simpletext");
    var h1app = document.getElementById ("bigtext");
    papp.innerText = "";
    h1app.innerText = "";
}