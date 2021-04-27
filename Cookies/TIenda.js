AProductos = new Array();
APrecios = new Array();

AProductos[1] = "Samsung Galaxy TAB S2 9.7''";
AProductos[2]="AMD ATHLON 5350";
AProductos[3]="Monitor Acer B196Lymdr";
AProductos[4]="Monitor LG 22M47VQ-P";
AProductos[5]="Intel Solid-State Drive DC S3610";
AProductos[6]="Toshiba Folio 100";
AProductos[7]="Airis OnePad";
AProductos[8]="Point of View Mobii";
AProductos[9]="Blackberry Tablet PlayBook";
AProductos[10]="Archos 7";
AProductos[11]="HTC Flyer";
AProductos[12]="Motorola XOOM";

APrecios[1]="449";
APrecios[2]="52,10";
APrecios[3]="154,70";
APrecios[4]="118,89";
APrecios[5]="479";
APrecios[6]="308,40";
APrecios[7]="219";
APrecios[8]="349";
APrecios[9]="499";
APrecios[10]="199";
APrecios[11]="529";
APrecios[12]="569";

function rellenar_cookie(num, uni) {
	var Producto = "";
	var Total = 0;
	var nombre = "Factura";
	var valor = "";
	var Precio = "";

	num = parseInt(num);
	uni =parseInt(uni);
	Producto = AProductos[num];
	Precio = APrecios[num];

	nombre = nombre+num;
	valor = Producto + " @ " + uni + " @ " + Precio; 

	fecha = new Date(2021, 12, 31);
	document.cookie = nombre + "=" + valor + ";" +
 	((fecha == null) ? "" : (" expires=" + fecha.toGMTString()));

	alert("Producto añadido a la factura!!!");
}

function Abrir_Factura() {
	window.open("ControlFactura.html", "Factura");
}