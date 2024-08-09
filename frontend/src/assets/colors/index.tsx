import tailwindColors from 'tailwindcss/colors';

function GetValidColors() {
  return Object.entries(tailwindColors)
    .filter(([key]) => !/[A-Z]/.test(key))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, any>)
}

export function GetSaturatedColors() {
  const colors = GetValidColors()
  const toRemove = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'black', 'white', 'current', 'inherit', 'transparent']

  return Object.entries(colors)
    .filter(([key]) => !toRemove.includes(key))
    .reduce((acc, [key, value]) => {
      acc[key] = value;
      return acc;
    }, {} as Record<string, any>)
}

const tailwindcolors = { ...tailwindColors }

export default tailwindcolors