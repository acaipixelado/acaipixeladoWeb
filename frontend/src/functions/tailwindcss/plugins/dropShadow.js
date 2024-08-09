const DropShadowPlugin = (theme) => {
  const colors = theme
  const newUtilities = {}

  Object.keys(colors).forEach(colorName => {
    const colorShades = colors[colorName]

    if (typeof colorShades === 'object') {
      Object.keys(colorShades).forEach(shade => {
        newUtilities[`.drop-shadow-1rem-${colorName}-${shade}`] = {
          filter: `drop-shadow(0 0 1rem ${colorShades[shade]})`
        }
        newUtilities[`.drop-shadow-4rem-${colorName}-${shade}`] = {
          filter: `drop-shadow(0 0 4rem ${colorShades[shade]})`
        }
      })
    }
    else {
      newUtilities[`.drop-shadow-1rem-${colorName}`] = {
        filter: `drop-shadow(0 0 1rem ${colorShades})`
      }
      newUtilities[`.drop-shadow-4rem-${colorName}`] = {
        filter: `drop-shadow(0 0 4rem ${colorShades})`
      }
    }
  })

  return newUtilities
}

export default DropShadowPlugin