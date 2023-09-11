function toggleMode() {
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if (html.classList.contains('light')) {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/123918337?s=400&v=4"
    )
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/123918337?s=400&v=4"
    )
  }
}