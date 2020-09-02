export default function saveLocally(key, arrayOfObjects) {
  localStorage.setItem(key, JSON.stringify(arrayOfObjects))
}
