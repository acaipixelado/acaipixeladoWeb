import colors from '@/assets/colors'

function RandomColorPick () {
  let color = {
    name: '',
    value: '',
    hex: ''
  }

  // color key
  const colorsObject = Object.entries(colors)

  const colorObject = colorsObject[Math.floor(Math.random() * colorsObject.length)]
  color.name = colorObject[0]
  
  const valuesObject = Object.entries(colorObject[1])

  const indice = Math.floor(Math.random() * valuesObject.length)
  color.value = valuesObject[indice][0]
  color.hex = valuesObject[indice][1]

  console.log(color)
}

function Card() {
  RandomColorPick()

  return (
    <div
      className='bg-slate-50  w-[14rem] h-[24rem] flex flex-col items-center justify-start p-4 drop-shadow-1rem-blue-500'
    >
      <div
        className='w-[12rem] h-[12rem]'
      >
        <img
          className='w-full h-full'
          src='https://picsum.photos/id/999/200/200'
          alt='https://picsum.photos/200/300'
        />
      </div>
    </div>
  )
}

export default Card