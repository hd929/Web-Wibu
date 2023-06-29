const albumDOM = document.querySelector('.album')
const template =
  '<div class="row-span-2"><img src="imgs/Ecchi/<filename>" class="w-full h-full object-cover" /></div>'

const filenames = [
  'IMG_1715.jpeg',
  'IMG_1721.jpeg',
  'IMG_1737.jpeg',
  'IMG_1738.jpeg',
  'IMG_1739.jpeg',
  'IMG_1740.jpeg',
  'IMG_1741.jpeg',
  'IMG_1742.jpeg',
]

const html = filenames
  .map((filename) => {
    return template.replace('<filename>', filename)
  })
  .join('')

albumDOM.innerHTML = html
