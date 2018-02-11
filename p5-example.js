var rectangle = {
  // Properties
  x: 0,
  y: 0,
  w: 200,
  h: 200,
  color: { r: 255, g: 255, b: 255 },

  // Velocities
  xv: 5,
  yv: 5,
  colorv: { r: 5, g: 4, b: 3 },

  // Directions
  xdir: 1,
  ydir: 1,
  colordir: { r: 1, g: 1, b: 1 },
};

function getDirection(value, direction, from, to) {
  if (value <= from) {
    direction = 1;
  } else if (value >= to) {
    direction = -1;
  }

  return direction;
}

function animate(value, velocity, direction) {
  return value + (velocity * direction);
}

function drawRectangle(r) {
  r.xdir = getDirection(r.x, r.xdir, 0, windowWidth -  r.w);
  r.ydir = getDirection(r.y, r.ydir, 0, windowHeight -  r.h);
  r.colordir.r = getDirection(r.color.r, r.colordir.r, 0, 255);
  r.colordir.g = getDirection(r.color.g, r.colordir.g, 0, 255);
  r.colordir.b = getDirection(r.color.b, r.colordir.b, 0, 255);

  r.x = animate(r.x, r.xv, r.xdir);
  r.y = animate(r.y, r.yv, r.ydir);
  r.color.r = animate(r.color.r, r.colorv.r, r.colordir.r);
  r.color.g = animate(r.color.g, r.colorv.g, r.colordir.g);
  r.color.b = animate(r.color.b, r.colorv.b, r.colordir.b);

  fill(r.color.r, r.color.g, r.color.b);
  rect(r.x, r.y, r.w, r.h);
}

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  drawRectangle(rectangle);
}
