const span = document.querySelector('span');
let value = 0;

/*for (var i = 1; i <= 1000; i++) {
	span.textContent = i;
}*/

/*setInterval(function(){
	span.textContent = value;
	value += 1;
	value = (value>=10)? 0 : value
}, 100);*/


let myData = async function(){
	const res = await fetch('./data.php');
	const data = await res.json();
	return data
}

// console.log(myData)

setInterval(function(){
	myData().then(res=> span.textContent = res[0].nilai)
}, 1000)

