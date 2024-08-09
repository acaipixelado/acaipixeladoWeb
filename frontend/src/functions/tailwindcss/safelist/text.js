const TextSafelist = (colors) => {
  const safelistArray = []

  Object.keys(colors).forEach(colorName => {
    const colorShades = colors[colorName]

    if (typeof colorShades === 'object') {
      Object.keys(colorShades).forEach(shade => {
        safelistArray.push(`text-${colorName}-${shade}`)
      })
    }
    else {
      safelistArray.push(`text-${colorName}`)
    }
  })

  return safelistArray
}

export default TextSafelist