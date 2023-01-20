const Dominio = /www.\w+\.com.br|.com/;

console.log(Dominio.test("www.google.com"));
console.log(Dominio.test("www.google"));