const URL_PARAMS = new URLSearchParams(window.location.search)

// GET URL PARAMETER KEY
const parameterEnabled = key => {
  const param = URL_PARAMS.get(key)

  if (param === null || param === 'false') {
    return false
  }
  else {
    return true
  }
}

// GET RANDOM FLOAT BETWEEN MIN AND MAX
const randomFloat = (min, max) => Math.random() * (max - min) + min

// MOUSE POINTER ICONS
const mouse_pointer = {
  over: () => document.body.style.cursor = 'pointer',
  out: () => document.body.style.cursor = 'default'
}

export { parameterEnabled, randomFloat, mouse_pointer }