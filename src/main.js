import 'tachyons/css/tachyons.min.css'
import './sketch.js'
import './highlights.js'
import '../_annual-reports/2019/assets/css/highlights.css'
import '../_annual-reports/2019/assets/css/style.css'

if (typeof process.env.GOOGLE_ANALYTICS_ID !== 'undefined' && process.env.GOOGLE_ANALYTICS_ID !== '') {
  /* eslint-disable */
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', process.env.GOOGLE_ANALYTICS_ID, 'auto');
  ga('send', 'pageview');
  /* eslint-enable */
}

const getNextItem = (id) => {
  const ref = document.getElementById(id)
  let index = ref.dataset.index
  const current = data[id]
  if (index >= current.length - 1) {
    index = 0
  } else {
    index++
  }
  ref.dataset.index = index
  return (data[id][index])
}
const getPrevItem = (id) => {
  const ref = document.getElementById(id)
  let index = ref.dataset.index
  const current = data[id]
  if (index <= 0) {
    index = current.length - 1
  } else {
    index--
  }
  ref.dataset.index = index
  return (data[id][index])
}

// const setTitle = (containerId, title) => {
//   const parent = document.getElementById(containerId)
//   const ref = parent.querySelector('[data-type=title]')
//   if (typeof title !== 'undefined' && title !== '') {
//     ref.innerHTML = title
//     ref.parentElement.style.display = ''
//   } else {
//     ref.parentElement.style.display = 'none'
//   }
// }

const setImage = (containerId, image) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=media]')
  if (typeof image !== 'undefined' && image !== '') {
    ref.innerHTML = ref.innerHTML = '<div class="aspect-ratio aspect-ratio--3x4 mb3"><img data-type="image" src="/_annual-reports/2019/assets/img/' + image + '" class="fit-cover fit-top shadow-4 aspect-ratio--object"></div>'
    ref.parentElement.style.display = ''
  } else {
    ref.parentElement.style.display = 'none'
  }
}

const setVideo = (containerId, type, videoId) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=media]')
  if (type === 'youtube') {
    if (typeof videoId !== 'undefined' && videoId !== '') {
      ref.parentElement.style.display = ''
      ref.innerHTML = '<div class="aspect-ratio aspect-ratio--16x9 mb3"><iframe width="100%" class="aspect-ratio--object shadow-4" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    } else {
      ref.parentElement.style.display = 'none'
    }
  }
  // if (typeof image !== 'undefined' && image !== '') {
  //   ref.src = '/_annual-reports/2019/assets/img/' + image
  //   ref.parentElement.style.display = ''
  // } else {
  //   ref.parentElement.style.display = 'none'
  // }
}

const setText = (containerId, text) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=text]')
  if (typeof text !== 'undefined' && text !== '') {
    ref.innerHTML = text
    ref.parentElement.style.display = ''
  } else {
    ref.parentElement.style.display = 'none'
  }
}

const nextRefs = [...document.querySelectorAll('a.arrow-next')]
for (const ref of nextRefs) {
  ref.onclick = (e) => {
    e.preventDefault()
    const id = e.target.hash.split('#')[1]
    const current = getNextItem(id)
    // const title = current.title
    if (current.media.type === 'image') {
      const image = current.media.src
      setImage(id, image)
    } else if (current.media.type === 'youtube') {
      const videoId = current.media.id
      setVideo(id, 'youtube', videoId)
    }
    const text = current.text

    // setTitle(id, title)
    setText(id, text)
  }
}

const prevRefs = [...document.querySelectorAll('a.arrow-prev')]
for (const ref of prevRefs) {
  ref.onclick = (e) => {
    e.preventDefault()
    const id = e.target.hash.split('#')[1]
    const current = getPrevItem(id)

    // const title = current.title
    if (current.media.type === 'image') {
      const image = current.media.src
      setImage(id, image)
    } else if (current.media.type === 'youtube') {
      const videoId = current.media.id
      setVideo(id, 'youtube', videoId)
    }
    const text = current.text

    // setTitle(id, title)
    setText(id, text)
  }
}

// const prevItem = (id) => {
// }

// for (title of titleRefs) title.innerText = data.title

const data = {
  milieuxbauhaus: [
    {
      title: '',
      media: {
        type: 'image',
        src: 'milieuxbauhaus-poster.jpg'
      },
      text: ''
    },
    {
      title: 'LePARC The Power of the Spill',
      media: {
        type: 'image',
        src: 'powerofthespill.jpg'
      },
      text: 'The Power of the Spill used live video feedback, creative coding and movement-choreography to agitates the visible borders of objects and bodies. Performers Csenge Kolozsvari and Rodrigo Velasco question habitual divisions between life and matter. The piece starts with a video recording and movement-choreography that is live-processed using pixelation-effects similar to white noise, and projected back into the same space.'
    },
    {
      title: 'Minecraft Bauhaus video from Gina',
      media: {
        type: 'youtube',
        id: '5_1NLIV45Xw'
      },
      text: 'Technoculture, Art and Games (TAG) brought Minecraft and Bauhaus together by reflexively building a custom modded multiplayer survival mode game lasting 30 days. Builders modernized a village in Minecraft by interpreting design principles from the historical Bauhaus, as they encountered the problems of resource extraction and exploitation, the politics of urban renewal, assumptions about material logistics and infrastructure, the negotiation of idealized plans and the situatedness of actions.'
    }
  ],
  modernmeetspostmoderncrisis: [
    {
      title: 'Video of IF Reformatted gallery opening',
      media: {
        type: 'youtube',
        id: '8sfBtqw0fMc'
      },
      text: 'AbTeC welcomed approximately 30 visitors to a vernissage in Second Life, and another 80 guests who livestreamed the event. The inaugural exhibition features artwork from 11 indigenous artists that were reformatted to be showcased online after COVID-19 shut down the Milieux Institute spaces.'
    },
    {
      title: 'Barbara sewing masks',
      media: {
        type: 'image',
        src: 'powerofthespill.jpg'
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris odio, ultrices et ligula id, tincidunt ornare ex. Pellentesque nec blandit urna. Phasellus viverra maximus orci, id dictum neque porttitor et. Aenean pharetra condimentum nisi, id congue nibh placerat sit amet. Nam eu lorem blandit, condimentum lacus quis, dictum nisi. Nunc eleifend est elementum ultrices euismod. Nunc pretium et est.'
    },
    {
      title: 'New Nature',
      media: {
        type: 'image',
        src: 'powerofthespill.jpg'
      },
      text: 'In May, the Milieux Institute partnered with the Geothe-Institut Montreal to launch a program of international exchange over the course of 2020 called New Nature. The series of encounters engage 25 leading climate scientists, artists and technologists from Canada, Germany, Mexico and the U.S. in conversation about immersive media and climate science. Two students and two faculty from Milieux participated in the event.'
    },
    {
      title: 'Olivia McGhilchrist Black Quantum Futurism adapted for online showcase',
      media: {
        type: 'youtube',
        id: '8sfBtqw0fMc'
      },
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mauris odio, ultrices et ligula id, tincidunt ornare ex. Pellentesque nec blandit urna. Phasellus viverra maximus orci, id dictum neque porttitor et. Aenean pharetra condimentum nisi, id congue nibh placerat sit amet. Nam eu lorem blandit, condimentum lacus quis, dictum nisi. Nunc eleifend est elementum ultrices euismod. Nunc pretium et est.'
    },
    {
      title: 'ACT elder abuse escape room',
      media: {
        type: 'image',
        src: 'powerofthespill.jpg'
      },
      text: 'Researchers from Ageing + Communication + Technologies (ACT), part of the Participatory Media Cluster, worked with activist from a Montreal-based advocacy group to build and operate an ‘escape room.’ Players were immersed in the perspective of an older person dealing with real issues of psychological abuse, the denial of rights, financial abuse, and physical abuse. Trained facilitators led debrief session after the game, during which players (who tended to be younger) raised a number of complex ethical questions and shared diverse perspectives. Their findings became extremely relevant as the pandemic placed systemic ageism and elder abuse at the center of public discourse.'
    }
  ]
}

// console.log(data)
