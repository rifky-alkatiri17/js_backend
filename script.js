const span = document.querySelector('span');
const tabel = document.querySelector('.table');
let value = 0;

/*for (var i = 1; i <= 1000; i++) {
	span.textContent = i;
}*/

/*setInterval(function(){
	span.textContent = value;
	value += 1;
	value = (value>=10)? 0 : value
}, 100);*/


let dataSensor = async function(){
	const res = await fetch('./data_sensor.php');
	const data = await res.json();
	return data
}

// console.log(myData)

setInterval(function(){
	dataSensor().then(res=> span.textContent = res[0].nilai)
}, 1000)

let dataASN = async function(){
	const res = await fetch('./data_asn_pdi.php');
	const data = await res.json();
	return data
}

dataASN().then(res=> console.log(res));
tabel.innerHTML = `
	<table>
		<tr>
			<th>No</th> <th>Nama</th>
		</tr>
		<tr>
			<td>1</td> <td>Rifki Alkatiri</td>
		</tr>
	</table>`;