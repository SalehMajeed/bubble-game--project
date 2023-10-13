var path = null;

const canvas = document.getElementById('my-canvas');
paper.setup(canvas);
const { Path } = paper;

path = new Path.Rectangle({
  point: [75, 75],
  size: [75, 75],
  strokeColor: 'black',
});

console.log(path);

setInterval(() => {
  if (path === null) return;
  path.rotate(3);
  path.position.x += 1
}, 10);
