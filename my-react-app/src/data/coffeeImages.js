const modules = import.meta.glob('../assets/**/*.{png,jpg,jpeg,webp,gif,svg}', {
  eager: true,
  import: 'default',
});

const coffeeImages = Object.keys(modules)
  .sort()
  .map((key) => modules[key])
  .filter(Boolean);

export const getImageForIndex = (i) => {
  if (!coffeeImages.length) return '';
  const index = Math.abs(Number(i) || 0) % coffeeImages.length;
  return coffeeImages[index];
};

export const getRandomImage = () => {
  if (!coffeeImages.length) return '';
  return coffeeImages[Math.floor(Math.random() * coffeeImages.length)];
};

export default coffeeImages;
export { coffeeImages };