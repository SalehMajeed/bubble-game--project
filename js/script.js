document.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('my-canvas');
  paper.setup(canvas);
  const { Path, view } = paper;

  const circle = new Path.Circle({
    center: view.center,
    radius: 70,
    fillColor: 'red',
  });

  console.log(circle);

  setInterval(() => {
    circle.fillColor.hue += 1;
    circle.position.x += 1;
  }, 10);
});
