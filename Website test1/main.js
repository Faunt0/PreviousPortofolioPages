// console.log('Hello')

function showtext() {
	// document.getElementById('demo').innerHTML == 'Hello JavaScript' ? 'This is not appropriate' : 'Hello JavaScript'
	if (document.getElementById('demo').innerHTML == 'Hello JavaScript') {
		document.getElementById('demo').innerHTML = 'This is not appropriate';
	} else {
		document.getElementById('demo').innerHTML = 'Hello JavaScript';
	}
}


var x = 1;
function Poem() {
    console.log('Number ' + x);
    if (document.getElementById('poem').style.visibility == 'hidden') {
        document.getElementById('poem').style.visibility = 'visible';
    } else {
        document.getElementById('poem').style.visibility = 'hidden';
    }
    x++;
}

function username() {
    document.getElementsByClassName('greeting') = 'Hello '
}

function dropdown() {
    // document.getElementsByClassName('dropdown-content').style.visibility = 'visible'
    // document.getElementsByClassName('dropdown-content').style.display = 'inline-block'
    if (document.getElementsByClassName('dropdown-content').style.visibility == 'hidden') {
        document.getElementsByClassName('dropdown-content').style.visibility = 'visible';
    } else {
        document.getElementsByClassName('dropdown-content').style.visibility = 'hidden';
    }
}
// var array = ['Hello', 'World!', 'This is only to be seen by he who has the permission', 'Whoops!', 'Dud git ut'];
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
// 	console.log(element + ' ' + i);
// 	alert(element)
// };

console.log('Echo');