
let y = 0;
let z = 0;
let x = 0;

let recording = false;

function setup() {
  createCanvas(500, 500);
  frameRate(20); // 저장용으로 프레임레이트 설정
}

function draw() {
  background(255);
  strokeWeight(1);

  // 귀
  fill(242,192,156);
  ellipse(y+105,270,100,100);
  ellipse(y+395,270,100,100);

  // 얼굴
  fill(226,173,137);
  circle(y+250,270,x+300);

  // 눈
  strokeWeight(5);
  stroke(0);
  circle(y+190,260,40);
  circle(y+310,260,40);

  // 눈동자
  strokeWeight(1);
  fill(0);
  circle(y+195,260,30);
  circle(y+305,260,30);

  // 안경
  strokeWeight(15);
  strokeJoin(ROUND);
  noFill();
  rectMode(CENTER);
  circle(y+185,270,100);
  circle(y+315,270,100);
  line(y+100,215,y+140,235);
  line(y+350,235,y+400,215);
  curve(y+230,320,y+230,245,y+270,245,y+270,320);

  // 코
  strokeWeight(10);
  triangle(y+250,240,y+220,330,y+280,330);

  // 눈썹
  strokeWeight(30);
  line(y+150,210,y+200,210);
  line(y+300,210,y+350,210);

  // 머리
  fill(0);
  ellipse(y+250,80,100);
  ellipse(y+180,90,100);
  ellipse(y+320,90,100);
  ellipse(y+225,140,100);
  ellipse(y+275,140,100);
  ellipse(y+140,140,100);
  ellipse(y+360,140,100);

  // 입
  noFill();
  strokeWeight(10);
  arc(y+250,355,50,z+50,0,PI,PIE);

  // 자동 움직임
  if (mouseIsPressed) {
    y += 25;
  } else if (y >= 150) {
    y -= 25;
    z += 15;
  }

  // 녹화 중일 때 프레임 저장
  if (recording && frameCount <= 60) {
    // 60프레임 (3초짜리 GIF 저장)
    saveGif('face_animation', 3); // 이름, 초
    recording = false;
  }
}

function keyPressed() {
  if (key === 'B' || key === 'b') {
    x += random(75,200);
  } else if (key === 'S' || key === 's') {
    x -= random(75,200);
  } else if (key === 'R' || key === 'r') {
    // GIF 녹화 시작
    recording = true;
  }
}
