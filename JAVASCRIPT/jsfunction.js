/*
 * global var
 */

var globalvar;

$(document).ready(function(){
    $.getJSON("https://randomuser.me/api/?results=1&gender=female", function(data) {
        globalvar = data;
        $('#icon').attr('src', data.results[0].picture.large);
        $('#loader').css("display", "none");
    });
});

function headerMenu (app) {
    createButton ();
    /*var nav = document.createElement ("nav");
    var ul = document.createElement ("ul");
    li = addImage (app);
    ul.appendChild (li);
    ul.appendChild (createLi ("Home", "index.html"));
    ul.appendChild (createLi ("Sign-In", "newuser.html"));
    ul.appendChild (createLi ("Contact Us", "contact.html"));
    ul.appendChild (createLi ("About Us", "about.html"));
    nav.appendChild (ul);
    var header = document.getElementById ("container-fluid");
    header.appendChild (nav);*/
}

function createButton () {
    var button = document.createElement ("button");
    button.className = "navbar-toggler navbar-toggler-right";
    console.log (button);
    /*<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" 
    data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>*/
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

function addImage (app) {
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
        case 5 :
            img.src = "../IMG/privacy.png";
        break;
    }
    li.appendChild (img);
    return li;
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

function createFooter () {
    var divsubcontainer = document.createElement ("div");
    divsubcontainer.className = "subcontainer";
        var divcontup = document.createElement ("div");
        divcontup.id = "contup";
            var divtitle = document.createElement ("div");
            divtitle.id = "title";
                var h1 = document.createElement ("h1");
                    h1.innerText = "RANDOM USER GENERATOR";
                divtitle.appendChild (h1);
            divcontup.appendChild (divtitle);
        divsubcontainer.appendChild (divcontup);
        var divcontdown = document.createElement ("div");
        divcontdown.id = "contdown";
            var divdeveloper = document.createElement ("div");
            divdeveloper.id = "developer";
                var h5 = document.createElement ("h5");
                    h5.innerText = "Web Developer";
                divdeveloper.appendChild (h5);
                var p = document.createElement ("p");
                    p.innerText = "Developed By Amila Fernando";
                divdeveloper.appendChild (p);
            divcontdown.appendChild (divdeveloper);
            var divcopyright = document.createElement ("div");
            divcopyright.id = "copyright";
                var h5 = document.createElement ("h5");
                    h5.innerText = "Copyright Notice";
                divcopyright.appendChild (h5);
                p1 = "<p>All randomly generated photos were hand picked from the authorized section of <a href=\"http://uifaces.com/\">UI Faces</a>. Please visit <a href=\"https://web.archive.org/web/20160811185628/http://uifaces.com/faq\">UI Faces</a> FAQ for more information regarding how you can use these faces.</p>";
                divcopyright.insertAdjacentHTML('beforeEnd', p1);
                p2 = "<p>API Generation is from <a href=\"https://randomuser.me/\">Random users</a>.</p>";
                divcopyright.insertAdjacentHTML('beforeEnd', p2);
            divcontdown.appendChild (divcopyright);
        divsubcontainer.appendChild (divcontdown);
    var footer = document.getElementById ("footer");
    footer.appendChild (divsubcontainer);
}

function show () {
    document.getElementById ("pwd").setAttribute ("type", "text");  
}

function hide () {
    document.getElementById ("pwd").setAttribute ("type", "password");   
}

function showHide () {
    if (document.getElementById ("pwd").getAttribute ("type") === "password") {
        show ();
    } else {
        hide ();
    }
}