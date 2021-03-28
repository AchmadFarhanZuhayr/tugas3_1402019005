<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Calcualtor</title>
	<link rel="stylesheet" type="text/css" href="style.css">
	<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
</head>
<body>

	<div class="header">
		<div class="inner-header">
		<h2 class="calculator">3D Calculator</h2>
		</div>

		<p id="halo"></p>
		<p class="baris1">Menghitung volume dan luas permukaan dari silinder, kerucut dan bola.</p>
		<h2 class="header-bagian-silinder">Silinder</h2>
		<label for="jari jari silinder">Masukkan jari-jari silinder(dalam meter)</label>
		<input type="text" name="jari jari" id="Jari jari silinder"><br>
		<label for="tinggi silinder">Masukkan tinggi silinder(dalam meter)</label>
		<input type="text" name="tinggi" id="tinggi silinder"><br>
		<button class="tombol1" type="button" onclick="hitungSilinder()">Hitung!</button>

		<h2 class="header-hasil-perhitungan1">Hasil perhitungan</h2>
		<p>Luas permukaan:</p>
		<p>Volume:</p>

		<h2 class="header-bagian-kerucut">Kerucut</h2>
		
		<label for="jari jari kerucut">Masukkan jari-jari kerucut(dalam meter)</label>
		<input type="text" name="kerucut" id="jari jari kerucut"><br>

		<label for="garis pelukis kerucut">Masukkan garis pelukis kerucut(dalam meter)</label>
		<input type="text" name="garis pelukis" id="garis pelukis kerucut"><br>
		
		<label for="tinggi kerucut">Masukkan tinggi kerucut(dalam meter)</label>
		<input type="text" name="kerucut1" id="tinggi kerucut"><br>
		
		<button class="tombol2" type="button" onclick="hitungKerucut()">Hitung!</button>

		<h2 class="header-hasil-perhitungan2">Hasil perhitungan</h2>
		<p>Luas permukaan:</p>
		<p>Volume</p>

		<h2 class="header-bagian-bola">Bola</h2>

		<label for="jari-jari-bola">Masukkan jari-jari bola(dalam meter)</label>
		<input type="text" name="bola" id="jari-jari-bola"><br>

		<button class="tombol3" type="button" onclick="hitungBola()">Hitung!</button>

		<h2 class="header-hasil-perhitungan3">Hasil perhitungan</h2>
		<p>Luas permukaan:</p>
		<p>Volume</p>
	</div>

	<script  src = "script.js"></script>

</body>
</html>
