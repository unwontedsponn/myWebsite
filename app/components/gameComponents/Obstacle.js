export default function Obstacle({ obstacleDetails, canvasDimensions }) {
  const { x, y, width, height } = obstacleDetails;

  const draw = (ctx) => {
    ctx.fillStyle = '#c15564';
    ctx.fillRect(x, y, width, height);
  };

  const update = () => {
    // Update obstacle position or any other properties
  };

  return { draw, update };
}
