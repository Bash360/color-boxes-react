function generateRandom() {
  let max = parseInt('ffffff',16);
  return '#'+Math.floor(Math.random()*max);
}
export { generateRandom} ;