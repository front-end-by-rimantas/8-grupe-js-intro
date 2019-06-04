"use strict";

// kintamuju iniciavijas
var a = 1;
console.log( a );

var b = 2;
console.log( b );

var pomidoras_raudonas = 3.14;
console.log( pomidoras_raudonas );


var vardas = 'Rimantas';
console.log( vardas );

var zodis = "Vardo 'Jaronimas' kilme yra....";
console.log( zodis );

var sakinys = "Mano 'cipliarkoje' (lt. siltnamyje) auga pomidoru veisle \"Babushka\".";
console.log( sakinys );

var kabutes = 'Zodis "kabutese" gali buti ir \'taip\' arba va.';
console.log(kabutes);


var sarasas = [1, 2, 3, 4, 5];
console.log( sarasas );

var abecele = ['a', 'b', 'c', 'd'];
console.log(abecele);

var tuscias = [];
console.log(tuscias);

var miksas = [1, 'asd', [a, 5, 'wer'], 855, 'asdfasd'];
console.log(miksas);

var skaiciu_sarasas = [a, b, pomidoras_raudonas];
console.log(skaiciu_sarasas);

console.log( a+pomidoras_raudonas );


// Veiksmai su kintamaisiais

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

var pirmoji_suma = a + b + pomidoras_raudonas;
console.log(pirmoji_suma);


console.log( a + 5 + 8 );
console.log( 2+7 );
console.log( 2-7 );
console.log( 2*7 );
console.log( 2/7 );
console.log( 2+2*2 );

var tekstas1 = 'Labas';
var tekstas2 = 'rytas';
var tekstas3 = 'Lietuva';

console.log( tekstas1 + ' ' + tekstas2 + ', ' + tekstas3 + '!' );

var kas = "lempa";
console.log( 'Kai lyja lietus, '+kas+' irgi \'kar+tais\' sviecia.' );

var reiksme = sarasas[0] - sarasas[1] + sarasas[2] - sarasas[3] + sarasas[4];
console.log( reiksme );

var numeris = 0;
console.log( abecele[numeris] + ', ' + abecele[1] + ', ' + abecele[2] + ', ' + abecele[3] );

console.log('-----');
console.log( 651616 / 0 );
console.log( 0 / 651616 );
console.log( 0 / 0 );
console.log('-----');
console.log( -651616 / 0 );
console.log( -0 / 651616 );
console.log( -0 / 0 );
console.log('-----');
console.log( 651616 / -0 );
console.log( 0 / -651616 );
console.log( 0 / -0 );
console.log('-----');
console.log( -651616 / -0 );
console.log( -0 / -651616 );
console.log( -0 / -0 );



console.log( Math.PI );
console.log( Math.E );
console.log( Math.sqrt(8) );


// Kintamuju palyginimas

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

if ( 2 == '2' ) {
    console.log( 'all good!!!' );
    console.log( 'all good!!!' );
} else {
    console.log('asdf');
}

console.log('-------------------');

var kazkas = '1-5+9';
console.log( kazkas.length );

// abc -> 123, cba -> 321

if ( 'as       '.length > 'Z0515'.length ) {
    console.log('tiesa');
} else {
    console.log('melas');
}

console.log('-------------------');

var Check = [5];
var Norris = [3];
console.log( Check.length );

if ( Check.length === Norris.length ) {
    console.log( 'taip' );
} else {
    console.log( 'ne' );
}


console.log('-------------------');

var arTiesa = false;
console.log( arTiesa );

if ( true === false ) {
    console.log( 'taip' );
} else {
    console.log( 'ne' );
}


// FOR ciklas

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

// 0+1+2+3+4 = 10
var suma = 0;
for ( var i=0; i<=5; i++ ) {
    suma = suma + i;
}

console.log(suma);
