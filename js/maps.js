let panorama;
let position;

function initialize() {
	panorama = new google.maps.StreetViewPanorama(document.getElementById('funday'));

	// [Marker's caption, lattitude, longitude, icon location]
	let locations = [

		/* BUTTON */

		// Margocity (Lattitude -6.3724764 || Longitude 106.8331297 || ID 22TtZly3_r434o-1yJSyCA)
		['<div style="text-align:center">Halo sheby,<br>kenalin aku <span style="color:blue; background-color: #E6E6E6;">Nuanu</span>.<br>Aku bakal jadi pembimbing selama jalan-jalan di gugel maps ini.<br> Hem, keliatannya langit mulai gelap, lebih baik kamu pulang!</div>', -6.3724400, 106.8332180,"roles/peri(R).png"],
		//['<div style="text-align:center"><span style="color:red">Hey Said!</span><br>Katanya sih ada yang nungguin di rumah kamu,<br>mending kamu pulang.</div>', -6.3725350, 106.83316350,"img/icon_READW.png"], // Notes

		// Home (Latitude -6.3737876 || Longitude 106.8399424 || ID s4-Qy-fNOmvKKImKAq5ewA)
		['<div style="text-align:center">Akhirnya sampe juga :)<br>Sekarang, aku mau ngajak kamu jalan-jalan nih.<br>Kalo kamu udah siap, kabarin ya!<br><button onclick="toUI()">Siap jalan?</button></div>', -6.3740000, 106.8398450,"roles/flip_peri(R).png"],
	  	
		// UI (Latitude -6.3684275 || Longitude 106.8285041 || ID 2K3vyXRST-SE2CVdsRnR_Q)
		['<div style="text-align:center">Sukses ya neng kuliahnya! Semoga jadi orang bermanfaat.<br>dibelakang ada temennya tuh neng</div>', -6.3686075, 106.8285541,"roles/guardian(R).png"],
		['<div style="text-align:center">Kangen ya sama perkuliahan...<br>sama aku juga :( gimana kalau kita jalan ke kampus orang?<br>Yuk, lewat pintu disitu!</div>', -6.3683075, 106.8284041,"roles/peri(R).png"],
		['<div style="text-align:center">Mau kemana kita? <br><button onclick="toBandung()">go</button></div>', -6.3683075, 106.8286041,"img/icon_door.png"],

		// STANDFORD

		// ITB (Lattitude -6.893201 || Longitude 107.610472 || ID wSBDzZyE6cbE3sybZ8V_sw)
		['<div style="text-align:center">Wilujeng sumping teh sheby!<br>udah lama ya gak ke bandung. Gimana kabar keluarga di rumah?<br>Semoga sehat selalu ya teh!</div>', -6.893101, 107.610602, "roles/muka-topeng(R).png"],
		['<div style="text-align:center">Teh sheby! dapet salam dari kabintang,<br>katanya, kapan ka bandung?</div>', -6.893001, 107.610472, "roles/muka-topeng(R).png"],
		['<div style="text-align:center">awas ada mobil!<br>btw teh, di bandung dingin juga ya teh,<br>aku gak kuat :(</div>', -6.893101, 107.610272, "roles/flip_peri(R).png"],
		['<div style="text-align:center">Yuk pergi lagi<br><button onclick="toMekkah()">go</button></div>', -6.893301, 107.610272,"img/icon_door.png"],

		// Masjidil Haram (Lattitude 21.4228196 || Longitude 39.8263401 || ID AF1QipN19BtPmgeo5VdOpBqEH0TEJjke3yIYnEuygBad)
		['<div style="text-align:center">Jangan takut! aku orang yang baik.<br>aku yakin, kamu ingin kesini suatu saat nanti</div>', 21.4228996, 39.8264301, "roles/ghost-king(R).png"],
		['<div style="text-align:center">Sepertinya, ini destinasi terakhir kita sheb.<br>Aku harap sih, kita bisa kesini lagi,<br>dan semoga kamu bisa kesini bareng keluarga kamu!</div>', 21.4225196, 39.8264001, "roles/peri(R).png"],
		['<div style="text-align:center"><span style="color:red; background-color: #E6E6E6;">Reminder!</span><br>aku si penjaga waktu, sepertinya<br>waktu kamu jalan-jalan sudah habis. Karna kini kamu sudah<br>dewasa, aku harap kamu bisa memanfaatkan waktu sebaik-baiknya.<br><button onclick="toMargo()">pulang</button></div>', 21.4227196, 39.8261001, "roles/time-keeper(R).png"],

		// OTW to Home
		['<div style="text-align:center">Semangat!</div>', -6.3713500, 106.8333400,"img/icon_belok_kanan.png"], // Sign belok kanan
		['<div style="text-align:center">Ini adalah jalan yang pernah<br>membuat saya tersesat, huh!</div>', -6.3722700, 106.8369913,"img/icon_kanan_lagi.png"], // Sign kanan lagi
		['<div style="text-align:center">(*play lagu)<br>Putar ke kiri eee,<br>nona manis putarlah ke kiri...</div>', -6.3729700, 106.837920,"roles/loket(R).png"] // Sign ambil kiri
	]

	/*
	let otherCountries = [
		// Menara Eifel (Lattitude 48.8558655 || Longitude 2.2982887 || ID IMXTPih5RMMacOAYmuECag)
		['<div style="text-align:center"><button onclick="toParis()">MASUK PORTAL</button><br>The Tower of Love</div>', -6.87939, 107.61272, "img/portalzzz.png"], //sadikin
		['<div style="text-align:center"><button onclick="toParis()">MASUK PORTAL</button><br>The Tower of Love</div>', -6.89343, 107.61855, "img/portalzzz.png"], //monju
		['<div style="width: 170px;">https://meet.google.com/tjx-tjma-tps</div>', 48.857931, 2.295467, "img/racmFz.png"],
		['<button onclick="goBack()">BACK TO BANDUNG</button>', 48.855454, 2.301249, "img/portalzzz.png"],
		
		// Italy
		['<div style="text-align:center"><button onclick="toPisa()">MASUK PORTAL</button><br>Pizza ga bisa dimakan</div>', -6.888931, 107.608089, "img/portalzzz.png"], //jeprut
		['<div style="text-align:center"><button onclick="toPisa()">MASUK PORTAL</button><br>Pizza ga bisa dimakan</div>', -6.898178, 107.613641, "img/portalzzz.png"], //upnormal
		['<div style="width: 170px;">https://meet.google.com/ohd-vong-mhf</div>', 43.722897, 10.396467, "img/inZHJh.png"], 
		['<button onclick="goBack()">BACK TO BANDUNG</button>', 43.7215745, 10.3971504, "img/portalzzz.png"],
		
		// Jogja
		['<div style="text-align:center"><button onclick="toJogja()">MASUK PORTAL</button><br>Kamadhatu, Rupadhatu, Arupadhatu</div>', -6.88497, 107.61344, "img/portalzzz.png"], //mcd dago
		['<div style="text-align:center"><button onclick="toJogja()">MASUK PORTAL</button><br>Kamadhatu, Rupadhatu, Arupadhatu</div>', -6.898794, 107.609274, "img/portalzzz.png"], //baltos 
		['<div style="width: 170px;">https://meet.google.com/gjo-agmy-xku</div>', -7.607521, 110.203681, "img/ferZGluYQ.png"], 
		['<button onclick="goBack()">BACK TO BANDUNG</button>', -7.606929, 110.202715, "img/portalzzz.png"],
		
		// Jakarta
		['<div style="text-align:center"><button onclick="toJakarta()">MASUK PORTAL</button><br>Es krim toping emas ala Jakarta</div>', -6.890169, 107.613247, "img/portalzzz.png"], //spbu
		['<div style="text-align:center"><button onclick="toJakarta()">MASUK PORTAL</button><br>Es krim toping emas ala Jakarta</div>', -6.876435, 107.611753, "img/portalzzz.png"], //angcis
		['<div style="width: 170px;">https://meet.google.com/rqa-hoeq-ufb</div>', -6.173288, 106.827659, "img/laWE.png"],
		['<button onclick="goBack()">BACK TO BANDUNG</button>', -6.171659, 106.826946, "img/portalzzz.png"],
		
		// Rio
		['<div style="text-align:center"><button onclick="toRio()">MASUK PORTAL</button><br>Tuhan besar</div>', -6.898686, 107.607746, "img/portalzzz.png"], //taman film
		['<div style="text-align:center"><button onclick="toRio()">MASUK PORTAL</button><br>Tuhan besar</div>', -6.879173, 107.620036, "img/portalzzz.png"], //kanayakan
		['<div style="width: 170px;">https://meet.google.com/jcz-wuka-aic</div>', -22.951827, -43.210497, "img/mudGU.png"],
		['<button onclick="goBack()">BACK TO BANDUNG</button>', -22.951940, -43.210898, "img/portalzzz.png"],
		
		// Kuala Lumpur
		['<div style="text-align:center"><button onclick="toKualaLumpur()">MASUK PORTAL</button><br>Beli bensin di Malaysia</div>', -6.885179, 107.610161, "img/portalzzz.png"], //baksil
		['<div style="text-align:center"><button onclick="toKualaLumpur()">MASUK PORTAL</button><br>Beli bensin di Malaysia</div>', -6.878426, 107.609397, "img/portalzzz.png"], //sangkuriang 	
		['<div style="width: 170px;">https://meet.google.com/obz-kqne-ivh</div>', 3.158228, 101.711308, "img/hacnJ5.png"],
		['<button onclick="goBack()">BACK TO BANDUNG</button>', 3.158845, 101.709261, "img/portalzzz.png"]
	]
	*/
	var infowindow = new google.maps.InfoWindow();
	var marker;
	var markers = [];

	let i;
	for (i = 0; i < locations.length; i++) {
		marker = new google.maps.Marker({
		position: new google.maps.LatLng(locations[i][1], locations[i][2]),
		map: panorama,
		visible: false,
		zoomControl: false,
		icon: locations[i][3]
		});

		google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
		return function() {
			infowindow.setContent(locations[i][0]);
			infowindow.open(panorama, marker);
		}
		})(marker, i));
		
		markers.push(marker); // save all markers
	}

	for (i = 0; i < locations.length; i++) {
		markers[i].setVisible(true);
		markers[i].setMap(panorama);
	}

	// Margocity
	panorama.setPano('22TtZly3_r434o-1yJSyCA');
	panorama.setPov({heading: 105, pitch: 0});
	panorama.setZoom(0);

	// UI
	// panorama.setPano("2K3vyXRST-SE2CVdsRnR_Q");
	// panorama.setPov({heading: 180, pitch: 15});
	// panorama.setZoom(0);

	// Home
	// panorama.setPano("s4-Qy-fNOmvKKImKAq5ewA");
	// panorama.setPov({heading: -150, pitch: -10});
	// panorama.setZoom(0);

	// Bandung
	// panorama.setPano("wSBDzZyE6cbE3sybZ8V_sw");
	// panorama.setPov({heading: 100, pitch: 3});
	// panorama.setZoom(0);

	// Kabah
	// panorama.setPosition({lat: 21.4228196, lng: 39.8263401});
	// panorama.setPov({heading: 28, pitch: 15});
	// panorama.setZoom(0);

	// Ujung jl. Karet
	// panorama.setPano('QzB0rfuneMNFECihBVPBdQ');
	// panorama.setPov({heading: 18, pitch: 0});
	// panorama.setZoom(0);

	// Tengah jl. Karet
	// panorama.setPano('nYViRlNQXJDtapugQi0i0w');
	// panorama.setPov({heading: 100, pitch: 0});
	// panorama.setZoom(0);

	// Tengah jl. Karet
	// panorama.setPano('gCf476r48uQ9omZfl8KQFg');
	// panorama.setPov({heading: 105, pitch: 0});
	// panorama.setZoom(0);
}

// Set Visible
// function showPortal()

// Pintu Kemana Saja

function toMargo() {
	// Margocity (Lattitude -6.3724764 || Longitude 106.8331297 || ID 22TtZly3_r434o-1yJSyCA)
	panorama.setPano('22TtZly3_r434o-1yJSyCA');
	panorama.setPov({heading: 105, pitch: 0});
	panorama.setZoom(0);
}

function toHome() {
	// Rumah Sheby (Latitude -6.3737876 || Longitude 106.8399424 || ID s4-Qy-fNOmvKKImKAq5ewA)
	panorama.setPano("s4-Qy-fNOmvKKImKAq5ewA");
	panorama.setPov({heading: -150, pitch: -10});
	panorama.setZoom(0);
}
function toUI() {
	// UI (Latitude -6.3684275 || Longitude 106.8285041 || ID 2K3vyXRST-SE2CVdsRnR_Q)
	panorama.setPano("2K3vyXRST-SE2CVdsRnR_Q");
	panorama.setPov({heading: 180, pitch: 15});
	panorama.setZoom(0);
}
function toParis() {
	// Menara Eifel (Lattitude 48.8558655 || Longitude 2.2982887 || ID IMXTPih5RMMacOAYmuECag)
	panorama.setPano("IMXTPih5RMMacOAYmuECag");
	panorama.setPov({heading: 130, pitch: 3});
	panorama.setZoom(0);
}
function toMekkah() {
	// Masjidil Haram (Lattitude 21.4228196 || Longitude 39.8263401 || ID AF1QipN19BtPmgeo5VdOpBqEH0TEJjke3yIYnEuygBad)
	panorama.setPosition({lat: 21.4228196, lng: 39.8263401});
	panorama.setPov({heading: 28, pitch: 15});
	panorama.setZoom(0);
}
function toBandung() {
	// ITB (Lattitude -6.893201 || Longitude 107.610472 || ID wSBDzZyE6cbE3sybZ8V_sw)
	panorama.setPano("wSBDzZyE6cbE3sybZ8V_sw");
	panorama.setPov({heading: 100, pitch: 3});
	panorama.setZoom(0);
}
function toPisa() {
	panorama.setPano("B2MSxoluho_KlmONMS4zCA");
}
function toJogja() {
	panorama.setPano("CyRjGnaBGjIvXiMFP-4jig");
}
function toJakarta() {
	panorama.setPano("r18eyTnCRT90PGcqsy-hnQ");
}
function toRio() {
	panorama.setPano("PrOCBIKiwp0_AW0ULdmqJA");
}
function toKualaLumpur() {
	panorama.setPano("l5GdBeZBIys3jKbp4ijn4w");
}

google.maps.event.addDomListener(window, 'load', initialize);

/*
*/