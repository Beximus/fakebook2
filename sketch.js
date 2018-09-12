var midX;
var ip;
var frens;
var apps;
var interests;
var advertisers;
var peer;
var loca;
var img;
var where= new Array(4);
var numb= new Array(52);
var ipnum= new Array(30);
var internum= new Array(33);

var sketchState = 0;
function preload(){
	ip= loadStrings('FacebookPlaintext/used_ip_addresses.txt');
	frens= loadStrings('FacebookPlaintext/friends.txt');
	apps= loadStrings('FacebookPlaintext/apps_and_websites.txt');
	interests= loadStrings('FacebookPlaintext/ads_interests.txt');
	advertisers= loadStrings('FacebookPlaintext/advertisers_who_uploaded_a_contact_list_with_your_information.txt');
	peer= loadStrings('FacebookPlaintext/friend_peer_group.txt')
	loca= loadStrings('FacebookPlaintext/where_youre_logged_in.txt');
	img= loadImage('media/montage2.jpg');
}

function setup(){

	var canvas = createCanvas(windowWidth,windowHeight);
	canvas.parent('processingZone');
	loop();
	
}

function draw(){
	switch(sketchState){
		case 1: 
			sketch1();
			break;

		case 2: 
			sketch2();
			break;

		case 3:
			sketch3();
			break;

		case 4:
			sketch4();
			break;

		case 5:
			sketch5();
			break;
		case 6:
			sketch6();
			break;
		case 7:
			sketch7();
			break;
		case 8:
			sketch8();
			break;
		case 9:
			sketch9();
			break;
		case 10:
			sketch10();
			break;

		default:
			sketch0();
	}


}

function sketch0(){
	background(255,255,255);
}

function sketch1(){
	background(59,89,152);
	midX= windowWidth/2;
	fill(255,255,255);
	textSize(150);
	text("They keep it ALL.", 100,20,windowWidth-200,200);
	noStroke();
	fill(0,153,204);
	ellipse(520, 700,1020,1020);
	fill(255,255,255);
	textSize(35);
	text("Total Profile Data 1.02GB",600,210,600,100);
	fill(0,204,153);
	ellipse(515,725,970,970);
	fill(255,255,255);
	text("Every Message 970.4MB",315,310,600,100);
	fill(204,0,153);
	ellipse(235,400,41,41);
	fill(255,255,255);
	text("Photos & Videos 41.4MB",275,388,600,100);
	fill(104,0,204);
	ellipse(150,500,10,10);
	fill(255,255,255);
	text("Every Post 1.4MB",170,485,600,100);
	fill(255,204,0);
	ellipse(100,600,10,10);
	fill(255,255,255);
	text("Every Comment 1.1MB",120,585,600,100);
	fill(204,204,0);
	ellipse(80,700,10,10);
	fill(255,255,255);
	text("Every Like 1.7MB",100,685,600,100)
	fill(255,255,255);
	ellipse(550,500,1,1);
	text("IP Addresses 246KB",570,485,600,100);
	ellipse(550,650,1,1);
	text("Profile Information 50KB",570,635,600,100);
}

function sketch2(){
	background(0);
	fill(0,214,53);
	textSize(30);
	if (frameCount%25==0) {
		for (var i = 0; i < 30; i++) {
			ipnum[i]=floor(random(47));
		}
	}
	for (var i = 0; i < 15; i++) {
		midX= 100+windowWidth/2;
		var space1 = 20+i*50;
		var space2 = 40+i*50;
		text(ip[ipnum[i]],100,space1,500,150);
		text(ip[ipnum[i+15]],midX,space2,500,150);
	}
}

function sketch3(){
	midX= 100+windowWidth/2;
	background(0,204,153);
	fill(255,255,255);
	textSize(30);
	if(frameCount%15==0){
	for (var i = 0; i < 50; i++) {
		numb[i]=floor(random(594));
	}
	}
	for (var i = 0; i < 25; i++) {
		var space = 20+i*40;
		textAlign(RIGHT,TOP);
		text(frens[numb[i]],150,space, 500,150);
		textAlign(LEFT,TOP);
		text(frens[numb[i+25]],midX+50,space,500,150);
	}
}

function sketch4(){
	background(59,89,152);
	fill(255);
	textSize(60);
	var x = windowWidth/2;
	var y = windowHeight/2;
	translate(x,y);
	for (var i = 0; i < 13; i++) {
		rotate(PI/-6.5);
		text(apps[i],120,0,600,150);
	}
}

function sketch5(){
	noStroke();
	background(255);
	fill(59,89,152);
	textSize(30);
	var x = windowWidth/3;
	if (frameCount%50==0) {
		for (var i = 0; i < 33; i++) {
			internum[i]=floor(random(35));
		}
	}
	for (var i = 0; i < 11; i++) {
		text(interests[internum[i]],120,70*i+45,400,150);
		text(interests[internum[i*2]],120+x,70*i+45,400,150);
		text(interests[internum[i*3]],120+x+x,70*i+45,400,150);
	}
}

function sketch6(){
	var x = windowWidth/2;
	var y = windowHeight/2;
	var x2=x/2;
	background(200);
	for (var i = 0; i < 100; i++) {
		noFill();
		stroke(215,215,215,55+i*2);
		strokeWeight(2);
		ellipse(0,0,i*30,i*30);
		// ellipse(0,windowHeight,i*30,i*30);
		// ellipse(windowWidth,0,i*30,i*30);
		ellipse(windowWidth,windowHeight,i*30,i*30);
	}
	textSize(95);
	fill(75,75,75);
	textAlign(CENTER,TOP);
	text("Advertisers Lists",x,40);
	var buff = 200;
	textSize(21);
	textAlign(LEFT);
	for (var i = 0; i < 9; i++) {
		text(advertisers[i],50,i*62+buff,300,150);
		text(advertisers[i+9],50+x2,i*62+buff,300,150);
		text(advertisers[i+18],50+x,i*62+buff,300,150);
		text(advertisers[i+27],50+x+x2,i*62+buff,300,150);
	}
}

function sketch7(){
	noStroke();
	background(255,96,96);
	textAlign(CENTER,TOP);
	textSize(65);
	rotate(PI/10);
	fill(255);
	translate(200,100);
	text(peer[0],0,0,1200,150);
	fill(255,255,255,200);
	text(peer[0],0,150,1200,150);
	fill(255,255,255,150);
	text(peer[0],0,300,1200,150);
	fill(255,255,255,100);
	text(peer[0],0,450,1200,150);
	fill(255,255,255,50);
	text(peer[0],0,600,1200,150);
	fill(255,255,255,200);
	text(peer[0],0,-150,1200,150);
	fill(255,255,255,150);
	text(peer[0],0,-300,1200,150);
	fill(255,255,255,100);
	text(peer[0],0,-450,1200,150);

}

function sketch8(){
	var x = windowWidth/2;
	var y = windowHeight/2;
	background(255,215,0,200);
	noStroke();
	fill(140,100,230);
	textAlign(CENTER,TOP);
	textSize(100);
	text("Where & How you Login",100,50,1200,1500);
	textSize(10);
	for (var i = 0; i < 45; i++) {

		text(loca[i],150,180+i*20,600,150);
		text(loca[i+44],650,180+i*20,600,150);
		i++;
		text(loca[i],150,180+i*20,600,150);
		text(loca[i+44],650,180+i*20,600,150);
		i++;
		text(loca[i],150,180+i*20,600,150);
		text(loca[i+44],650,180+i*20,600,150);
		i++;
		text(loca[i],150,180+i*20,600,150);
		text(loca[i+44],650,180+i*20,600,150);
	}
	// text(loca[0],100,200,300,150);

}
function sketch9(){
	image(img,0,0,windowWidth,windowHeight);
}

function sketch10(){
	background(255);
}

function setState(i){
	sketchState = i;
	console.log(sketchState);
}

function mouseClicked(){
	sketchState++;
}