export default function saveLocally(arrayOfObjects) {
  localStorage.setItem('monsternames', JSON.stringify(arrayOfObjects))
}
