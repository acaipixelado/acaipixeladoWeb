import { GetSaturatedColors } from '@/assets/colors'

function OneTonalityColorsObj(tonality: number) {
  const colors = GetSaturatedColors()

  return Object.entries(colors)
    .map(([key, value]) => ({
      name: key,
      tonality: tonality,
      hex: value[tonality]
    }))
}

const titles = {
  title1: "Cool Breeze",
  title2: "Bright Light",
  title3: "Silent Night",
  title4: "Starry Sky",
  title5: "Fresh Start",
  title6: "Golden Hour",
  title7: "Swift Move",
  title8: "Quiet Storm",
  title9: "Bold Venture"
}

function Card() {
  const colors = OneTonalityColorsObj(400)

  return (
    <div
      className='flex flex-row flex-wrap justify-between'
    >
      {
        Object.values(titles)
          .map((title, index) => {
            const rand_num = Math.floor(Math.random() * colors.length)

            const color = colors[rand_num]
            colors.splice(rand_num, 1)

            const dropShadow = `drop-shadow-1rem-${color.name}-${color.tonality}`
            const text = `text-${color.name}-${color.tonality}`

            return (
              <div
                key={index}
                className={`${dropShadow} bg-slate-50 w-[14rem] h-[24rem] flex flex-col items-center justify-start p-4 my-2 rounded`}
              >
                <div
                  className='w-[12rem] h-[12rem]'
                >
                  <img
                    className='w-full h-full'
                    src={`https://picsum.photos/id/${Math.floor(Math.random()*20)}/300/500`}
                    alt='random api picture'
                  />
                </div>

                <div
                  className='text-slate-800 mt-4 flex flex-col items-center justify-center w-full h-full'
                >
                  <div
                    className='font-bold text-xl'
                  >
                    {title}
                  </div>

                  <div
                    className='font-medium text-lg mb-2'
                  >
                    {color.name}-{color.tonality}
                  </div>

                  
                    <div
                      className={`${text} font-bold text-lg bg-slate-800 p-2 rounded`}
                    >
                      {color.hex}
                    </div>
                </div>
              </div>
            )
          })
      }
    </div>
  )
}

export default Card