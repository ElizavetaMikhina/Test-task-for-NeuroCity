const shapes = document.querySelectorAll('.shape');
const animations = ['pulse', 'move', 'rotate', 'flip', 'none_animation'];

shapes.forEach(shape => {
  let currentAnimationIndex = 0;

  shape.addEventListener('click', () => {
    shape.classList.remove(...animations);
    shape.classList.add(animations[currentAnimationIndex]);

    currentAnimationIndex = (currentAnimationIndex + 1) % animations.length;
  });
});
