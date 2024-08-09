const DropShadowSafelist = (colors) => {
  const safelistArray = []

  Object.keys(colors).forEach(colorName => {
    const colorShades = colors[colorName]
    if (typeof colorShades === 'object') {
      Object.keys(colorShades).forEach(shade => {
        safelistArray.push(`drop-shadow-1rem-${colorName}-${shade}`)
        safelistArray.push(`drop-shadow-4rem-${colorName}-${shade}`)
      })
    }
    else {
      safelistArray.push(`drop-shadow-1rem-${colorName}`)
      safelistArray.push(`drop-shadow-4rem-${colorName}`)
    }
  })

  return safelistArray
}

export default DropShadowSafelist