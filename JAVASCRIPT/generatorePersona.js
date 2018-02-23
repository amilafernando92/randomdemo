var Name = {
    title: 'mrs.',
    first: 'Peyton',
    last: 'Gray'
}

var Location = {
    street: 'Corso como',
    city: 'Milano',
    state: 'Italia',
    postcode: 20100
}

var Login = {
    username: 'pay_grey88',
    password: 'temp$&123',
    salt: 'gaegaegadvaasf',
    md5: 6342234,
    sha1: 'bvsbwr4345653',
    sha256: 'sdgsntdhergwefa34'
}

var Id = {
    name: 'mrx',
    value: '34'
}

var Persona = {
    gender: 'female',
    name: Name,
    location: Location,
    email: 'peyton.gray88@example.com',
    login: Login,
    dob: '1988-03-12 07:29:45',
    registered: '2005-03-12 07:29:45',
    phone: '+39 02 4882705',
    cell: '+39 331 4885634',
    id: Id,
    nat: 'It',
    picture: "..//IMG//foto.jpg",
    setNation: function(nazione){
        this.nat= nazione;
    }
}

var getRandomUser = function (nazione){
    var tempP= Persona;
    tempP.setNation(nazione);
    //tempP.nat = nazione;
    return tempP;
}

function getName () {
    return Name.first+" "+Name.last;
}

function getMail () {
    return Persona.email;
}

function getBday () {
    var str = Persona.dob;
    var app = str.slice (0, 10);
    return app;
}

function getAddress () {
    return "Via "+Location.street+", "+Location.city+", "+Location.state;
}

function getPhone () {
    return Persona.cell;
}

function getPassword () {
    return Login.password;
}