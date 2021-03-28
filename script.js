//var jam = new Date().getHours();
var nama = prompt('Masukkan nama Anda');
document.getElementById('halo').innerHTML = nama;

function hitungSilinder() {
	var jariSlndr = (document.getElementById("Jari jari silinder").value);
	var tinggiSlndr = (document.getElementById("tinggi silinder").value);
	var phi = 3.14;
	var regX = new RegExp('^\\d+$');
	
	if(tinggiSlndr == "" || jariSlndr == "") {
		alert("Harap lengkapi inputan Silinder !");
		return;
	}
	if(!regX.test(tinggiSlndr) || !regX.test(jariSlndr)) {
		alert("Hey! inputan Silinder haruslah angka bukan lain");
		document.getElementById("Jari jari silinder").value = "";
		document.getElementById("tinggi silinder").value = "";
		return;	
	}
	jariSlndr = parseInt(jariSlndr);
	tinggiSlndr = parseInt(tinggiSlndr);
	document.getElementById("luasSilin").innerHTML = Math.round(2 * phi * jariSlndr * (jariSlndr + tinggiSlndr));
	document.getElementById("volSilin").innerHTML = Math.round(phi * jariSlndr * jariSlndr * tinggiSlndr);
}

function hitungKerucut() {
	var jariKerucut = (document.getElementById("jari jari kerucut").value);
	var garisKerucut = (document.getElementById("garis pelukis kerucut").value);
	var tinggiKerucut = (document.getElementById("tinggi kerucut").value);
	var phi = 3.14;
	var regX = new RegExp('^\\d+$');

	if(tinggiKerucut== "" || jariKerucut == "" || garisKerucut == "") {
		alert("Harap lengkapi inputan kerucut !");
		return;
	}

	if(!regX.test(tinggiKerucut) || !regX.test(jariKerucut) || !regX.test(garisKerucut)) {
		alert("Hey! inputan Kerucut haruslah angka bukan lain");
		document.getElementById("jari jari kerucut").value = "";
		document.getElementById("garis pelukis kerucut").value = "";
		document.getElementById("tinggi kerucut").value = "";
		return;	
	}
	jariKerucut = parseInt(jariKerucut);
	garisKerucut = parseInt(garisKerucut);
	tinggiKerucut = parseInt(tinggiKerucut);
	document.getElementById("luasKerut").innerHTML = Math.round((jariKerucut + garisKerucut) * (phi * jariKerucut));
	document.getElementById("volKerut").innerHTML = Math.round((phi * jariKerucut * jariKerucut * tinggiKerucut)/3);
}

function hitungBola() {
	var jariBola = (document.getElementById("jari-jari-bola").value);
	var phi = 3.14;

	if(jariBola == "") {
		alert("Harap lengkapi inputan Bola !");
		return;
	}
	var regX = new RegExp('^\\d+$');
	if(!regX.test(jariBola)) {
		alert("Hey! inputan Bola haruslah angka bukan lain");
		document.getElementById("jari-jari-bola").value = "";
		return;	
	}
	jariBola = parseInt(jariBola);
	document.getElementById("luasBola").innerHTML = Math.round(4 * phi * jariBola * jariBola);
	document.getElementById("volBola").innerHTML = Math.round((4 * phi * jariBola * jariBola * jariBola)/3);
}
