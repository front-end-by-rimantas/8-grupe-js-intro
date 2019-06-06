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
var nuo = 0;
var iki = 5;
var suma = 0;
for ( var i=nuo; i<=iki; i++ ) {
    suma = suma + i;
}
// i      suma
// 0 => 0+'0'='00'
// 1 => '00'+1='001'
// ...
// 5 => '0012345'


console.log('Suma intervale ('+nuo+', '+iki+'): '+suma);


// teksto perrasymas is kito galo

var tekstas = 'abcd';
var atbulas_tekstas = '';

for ( var i=1; i<=tekstas.length; i++ ) {
    atbulas_tekstas = atbulas_tekstas + tekstas[tekstas.length - i];
}
// i    rez
// 1 -> '' + 'abcd'[3] = 'd'
// 2 -> 'd' + 'abcd'[2] = 'dc'
// 3 -> 'dc' + 'abcd'[1] = 'dcb'
// 4 -> 'dcb' + 'abcd'[0] = 'dcba'
// 5 -> FINISH
console.log( '"'+tekstas+'" -> "'+atbulas_tekstas+'"' );


console.log('-------------');

// antras budas kaip perrasyti teksta atbulai

var tekstas = 'sedek';
var atvirkscias = '';

// logika, kuri apsuka zodi
for ( var i=tekstas.length-1; i>=0; i-- ) {
    atvirkscias = atvirkscias + tekstas[i];
}
// i    rez
// 4 -> '' + 'sula'[3] = 'a'
// 3 -> 'a' + 'sula'[2] = 'al'
// 2 -> 'al' + 'sula'[1] = 'alu'
// 1 -> 'alu' + 'sula'[0] = 'alus'
// 0 -> 'alus' + 'sula'[-1] = 'alusundefined'
// -1 -> FINISH

console.log( atvirkscias );
console.log('-------------');

// dalyba intervale be liekanos

var nuo = 0;
var iki = 11;
var daliklis = 3;
var kiekis = 0;

for ( var i=nuo; i<=iki; i++ ) {
    if ( i % daliklis === 0 ) {
        kiekis++;
    }
}

// 0 -> 1
// 1 -> 1
// 2 -> 1
// 3 -> 2

// 11 -> 4
// [0, 3, 6, 9]

console.log( 'Skaičių intervale tarp '+nuo+' ir '+iki+', besidalinančių be liekanos iš '+daliklis+' yra '+kiekis+' vienetai.' );




// Funkcijos

console.log('-------------------');
console.log('-------------------');
console.log('-------------------');

function tusciaFunkcija() {
    return false;
}

console.log( tusciaFunkcija() );


console.log('sumavimas -----------');
function sumavimas( a, bbb ) {
    var suma = a + bbb;
    return suma;
}


var r = 2;
var u = 5;
console.log( sumavimas(r, u) );
console.log( sumavimas(-8, 4) );
console.log( sumavimas(0, 6) );

console.log('daugyba -----------');

function daugyba( a, b ) {
    if ( typeof(a) !== 'number' ) {
        return 'Pirmoji reiksme nera skaiciaus tipo.';
    }
    if ( typeof(b) !== 'number' ) {
        return 'Antroji reiksme nera skaiciaus tipo.';
    }
    if ( isNaN(a) === true ) {
        return 'Pirmoji reiksme bloga.';
    }
    if ( 'NaN' === ''+b ) {
        return 'Antroji reiksme bloga.';
    }
    if ( isFinite(a) === false ) {
        return 'Pirmoji reiksme yra begalybe.';
    }
    if ( 'Infinity' === ''+b ) {
        return 'Antroji reiksme yra begalybe.';
    }
    
    var sandauga = a * b;
    return sandauga;
}

console.log( daugyba(0, 6) );
console.log( daugyba(6, 6) );
console.log( daugyba(9, -9) );
console.log( daugyba('asd', 8) );
console.log( daugyba(5156, 'asd') );
console.log( daugyba('asd', 'wertwe') );
console.log( daugyba(true, 8) );
console.log( daugyba([], 8) );
console.log( daugyba(NaN, 8) );
console.log( daugyba(99, NaN) );
console.log( daugyba(Infinity, 8) );
console.log( daugyba(99, Infinity) );

console.log('skaitmenuKiekisSkaiciuje ------------');

function skaitmenuKiekisSkaiciuje( skaicius ) {
    if ( typeof(skaicius) !== 'number' ) {
        return 'Pateikta netinkamo tipo reikšmė.';
    }
    if ( isNaN(skaicius) === true ) {
        return 'Tipas geras, bet reiksme prasta... :(';
    }
    if ( isFinite(skaicius) === false ) {
        return 'Tipas geras, bet reiksme prasta... :(';
    }

    var teksinis_skaicius = ''+skaicius;
    if ( teksinis_skaicius.indexOf('e') === -1 ) {
        var kiekis = 0;
        var skaitmuo = 0;
        
        // skaiciu skaiciavimo logika...
        for ( var i=0; i<teksinis_skaicius.length; i++ ) {
            skaitmuo = parseInt(teksinis_skaicius[i]);
            if ( skaitmuo > -1 && skaitmuo < 10 ) {
                kiekis++;
            }
        }
        return 'Skaiciuje '+ skaicius + ' yra ' +kiekis + ' skaitmenu.';
    } else {
        // standartine matematine israiska...
        console.log(teksinis_skaicius);
        // -6.62607004e+34
            // -6.62607004
            // +34
        console.log( 'standartine matematine israiska' );
        return ':(';
    }
}

// skaicius = 123;
// teksinis_skaicius = '123';

// i
// 0 -> 
//      skaitmuo = parseInt('1') = 1;


console.log( skaitmenuKiekisSkaiciuje( true ) );
console.log( skaitmenuKiekisSkaiciuje( 'asd' ) );
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
console.log( skaitmenuKiekisSkaiciuje( Infinity ) );
console.log( skaitmenuKiekisSkaiciuje( 5.28 ) );
console.log( skaitmenuKiekisSkaiciuje( -595 ) );
console.log( skaitmenuKiekisSkaiciuje( +5 ) );
console.log( skaitmenuKiekisSkaiciuje( Math.PI ) );
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
// 0.0000000000000000000000000000000000662607004
console.log( skaitmenuKiekisSkaiciuje( -6.62607004E-34 ) );
console.log( skaitmenuKiekisSkaiciuje( 6.62607004E-34 ) );
console.log( skaitmenuKiekisSkaiciuje( -6.62607004E+34 ) );
console.log( skaitmenuKiekisSkaiciuje( 6.62607004E+34 ) );

console.log( skaitmenuKiekisSkaiciuje( -1.23E-2 ) );    // -0.0123 -> 5
console.log( skaitmenuKiekisSkaiciuje( 1.23E-2 ) );     //  0.0123 -> 5
console.log( skaitmenuKiekisSkaiciuje( -1.23E+2 ) );    // -123    -> 3
console.log( skaitmenuKiekisSkaiciuje( 1.23E+2 ) );     //  123    -> 3

