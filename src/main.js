import 'tachyons/css/tachyons.min.css'
import './sketch.js'
import './highlights.js'
import '../_annual-reports/2019/assets/css/micromodal.css'
import '../_annual-reports/2019/assets/css/highlights.css'
import '../_annual-reports/2019/assets/css/nav.css'
import '../_annual-reports/2019/assets/css/style.css'
import MicroModal from 'micromodal'

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

const body = document.body
const imgDir = '/_annual-reports/2019/assets/img/highlights/'

window.onload = () => {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true,
    onShow: (modal, body, e) => {
      document.getElementsByTagName('html')[0].style.overflow = 'hidden'
      document.body.style.overflow = 'none'
      console.info(`${modal.id} is shown`)
      document.getElementById('highlights-sidebar').style.opacity = '1'
      console.log(modal)
      const dataset = e.path[1].dataset
      console.log(dataset)
      document.getElementById('highlights-modal-parent-title').innerHTML = dataset.cluster
      document.getElementById('highlights-modal-parent-url').href = dataset.parentUrl
      document.getElementById('highlights-modal-event-title').innerHTML = dataset.event
      document.getElementById('highlights-modal-image').src = imgDir + dataset.image
      document.getElementById('highlights-modal-description').innerHTML = dataset.description
      document.getElementById('modal-container').scrollTop = 0
      // for (const i in document.links) document.links[i].onfocus = document.links[i].blur
    },
    onClose: (modal) => {
      document.getElementsByTagName('html')[0].style.overflow = 'auto'
      document.body.style.overflow = 'auto'
      console.info(`${modal.id} is hidden`)
      document.getElementById('highlights-sidebar').style.opacity = null
    }
  })
}

const menuButton = document.getElementById('toggleMenu')
menuButton.onclick = (e) => {
  e.preventDefault()
  toggleMenu()
}

const menu = document.getElementById('menu')
const navLinks = menu.getElementsByTagName('a')

for (const link of navLinks) {
  link.onclick = (e) => {
    e.preventDefault()
    const id = e.target.hash.split('#')[1]
    const el = document.getElementById(id)
    scrollToElement(el)
    toggleMenu()
  }
}

function scrollToElement (el) {
  // const el = document.getElementById(id)
  const pos = el.offsetTop
  window.scroll({
    top: pos,
    behavior: 'smooth'
  })
}

function toggleMenu () {
  if (body.classList.contains('menu-open')) {
    body.classList.remove('menu-open')
  } else {
    body.classList.add('menu-open')
  }
  menuButton.blur()
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

const setTitle = (containerId, title) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=title]')
  if (typeof title !== 'undefined' && title !== '') {
    ref.innerHTML = title
    ref.parentElement.style.display = ''
  } else {
    ref.parentElement.style.display = 'none'
  }
}

const setImage = (containerId, image) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=media]')
  if (typeof image !== 'undefined' && image !== '') {
    ref.innerHTML = ref.innerHTML = '<div class="mb3"><img data-type="image" src="/_annual-reports/2019/assets/img/' + containerId + '/' + image + '" class="fit-cover fit-top shadow-4"></div>'
    ref.parentElement.style.display = ''
  } else {
    ref.parentElement.style.display = 'none'
  }
}

const setTweet = (containerId, tweet) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=media]')
  if (typeof tweet !== 'undefined' && tweet !== '') {
    ref.innerHTML = ref.innerHTML = '<div class="aspect-ratio aspect-ratio--16x9 mb3"><div class="aspect-ratio--object">' + tweet + '</div></div>'
    ref.parentElement.style.display = ''
  } else {
    ref.parentElement.style.display = 'none'
  }
}

const setVideo = (containerId, host, videoId) => {
  const parent = document.getElementById(containerId)
  const ref = parent.querySelector('[data-type=media]')
  if (host === 'youtube') {
    if (typeof videoId !== 'undefined' && videoId !== '') {
      ref.parentElement.style.display = ''
      ref.innerHTML = '<div class="aspect-ratio aspect-ratio--16x9 mb3"><iframe width="100%" class="aspect-ratio--object shadow-4" src="https://www.youtube.com/embed/' + videoId + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>'
    } else {
      ref.parentElement.style.display = 'none'
    }
  } else if (host === 'vimeo') {
    if (typeof videoId !== 'undefined' && videoId !== '') {
      ref.parentElement.style.display = ''
      ref.innerHTML = '<div class="aspect-ratio aspect-ratio--16x9 mb3"><iframe src="https://player.vimeo.com/video/' + videoId + '" class="aspect-ratio--object shadow-4" width="100%" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div>'
    } else {
      ref.parentElement.style.display = 'none'
    }
  } else if (host === 'facebook') {
    ref.parentElement.style.display = ''
    ref.innerHTML = '<div class="aspect-ratio aspect-ratio--16x9 mb3"><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FCU4thSpace%2Fvideos%2F' + videoId + '%2F&show_text=0&width=560" width="100%" height="315" class="aspect-ratio--object shadow-4" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></div>'
  } else {
    ref.parentElement.style.display = 'none'
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
    ref.style.display = ''
  } else {
    ref.style.display = 'none'
  }
}

const nextRefs = [...document.querySelectorAll('a.arrow-next')]
for (const ref of nextRefs) {
  ref.onclick = (e) => {
    e.preventDefault()
    const id = e.target.hash.split('#')[1]
    const parent = document.getElementById(id)
    if (window.innerWidth >= 960) {
      window.scrollTo(0, parent.offsetTop)
    }
    const current = getNextItem(id)
    const title = current.title
    if (current.media.type === 'image') {
      const image = current.media.src
      setImage(id, image)
    } else if (current.media.type === 'video') {
      const videoId = current.media.id
      setVideo(id, current.media.host, videoId)
    } else if (current.media.type === 'tweet') {
      const tweet = current.media.tweet
      setTweet(id, tweet)
    }
    const text = current.text

    setTitle(id, title)
    setText(id, text)
  }
}

const prevRefs = [...document.querySelectorAll('a.arrow-prev')]
for (const ref of prevRefs) {
  ref.onclick = (e) => {
    e.preventDefault()
    const id = e.target.hash.split('#')[1]
    const parent = document.getElementById(id)
    if (window.innerWidth >= 960) {
      window.scrollTo(0, parent.offsetTop)
    }
    const current = getPrevItem(id)
    const title = current.title
    if (current.media.type === 'image') {
      const image = current.media.src
      setImage(id, image)
    } else if (current.media.type === 'video') {
      const videoId = current.media.id
      setVideo(id, current.media.host, videoId)
    }

    const text = current.text

    setTitle(id, title)
    setText(id, text)
  }
}

// const prevItem = (id) => {
// }

// for (title of titleRefs) title.innerText = data.title

const data = {
  milieuxbauhaus: [
    {
      title: 'MilieuXBauhaus - Nov 5-14, 2019',
      media: {
        type: 'image',
        src: 'bauhaus.gif'
      },
      text: ''
    },
    {
      title: 'LePARC’s Kaleidoscopic Dances',
      media: {
        type: 'image',
        src: 'danses.jpg'
      },
      text: 'In Pierre-Marc Ouellette\'s <strong>Kaleidoscopic Dances</strong>, people were invited into the open rehearsal of the installation-performance work-in-progress. The project, based on historical research on Oskar Schlemmer’s Triadic Ballet (1922), examined the links between body, image and technology.<br/><br/>[Photo by Manon De Pauw; Dancer: Natalie Zoey Gauld.]'
    },
    {
      title: 'The Ultimate Goal: A Bauhaus Adventure in Minecraft',
      media: {
        type: 'video',
        host: 'vimeo',
        id: '463997538'
      },
      text: '<strong>Technoculture, Art and Games (TAG)</strong> brought Minecraft and Bauhaus together by reflexively building a custom-modded multiplayer survival-mode game lasting 30 days. Builders modernized a village in Minecraft by interpreting design principles from the historical Bauhaus, as they encountered the problems of resource extraction and exploitation, the politics of urban renewal, assumptions about material logistics and infrastructure, the negotiation of idealized plans and the situatedness of actions.'
    },
    {
      title: 'Transitions: A field intensive at La Station',
      media: {
        type: 'image',
        src: 'transitions1.jpg'
      },
      text: '<em>Transitions</em> was a four-day field intensive inspired by Bauhaus. Members of the <strong>Speculative Life Cluster</strong> traveled to La Station, the decommissioned Nun’s Island gas station (1969) designed by Mies van Der Rohe (last principal of the Bauhaus), which has been recently converted into an intergenerational community centre (2011). There, they collectively imagined and proposed material and ecological transitions toward post-Anthropo-/Capitalo-cene futures.<br/><br/>Learn more <a href="https://speculativelife.com/transitions" target="_blank" class="link black underline dim">here</a>.<br/><br/>[Photo: ’Deep Listening soundwalk led by Tricia Tosco’ by Matthew-Robin Nye]'
    }
  ],
  modernmeetspostmoderncrisis: [
    {
      title: '#RubyCoders',
      media: {
        type: 'image',
        src: 'rubycoders.jpg'
      },
      text: ''
    },
    {
      title: 'Virtual Gallery Opening: <em>Reformatted</em>',
      media: {
        type: 'video',
        host: 'facebook',
        id: '227389378529117'
      },
      text: '<strong>AbTeC</strong> welcomed approximately 30 visitors to a vernissage in Second Life, and another 80 guests who livestreamed the event. The inaugural exhibition features artwork from 11 indigenous artists that were reformatted to be showcased online after COVID-19 shut everything down.<br/><br/>Read the <a href="https://milieux.concordia.ca/virtual-gallery-opening-works-from-11-indigenous-artists/" target="_blank" class="link black underline dim">full story</a>.'
    },
    {
      title: 'Research-Creation: Face Mask Edition',
      media: {
        type: 'image',
        src: 'masks.jpg'
      },
      text: 'In May, <strong>Barbara Layne</strong>, co-leader of the <strong>Textiles & Materiality Cluster</strong> organized a crew of 35 volunteers to sew more than 2,500 cloth face masks for donation. Meanwhile, <strong>Ann-Louise Davidson</strong>, leader of the <strong>Education Makers</strong>, launched a Face Mask Challenge, calling on students to create new face mask designs. They had the opportunity to work with world-class experts in fibres and filtration, and will present their final prototypes and discuss the challenges they faced and facts they uncovered next year.<br/><br/>Learn more <a href="https://milieux.concordia.ca/volunteers-sewing-masks-during-covid-19-pandemic/" target="_blank" class="link black underline dim">here</a> and <a href="https://www.facebook.com/1915567261898203/videos/1179647885751714" target="_blank" class="link black underline dim">here</a>.'
    },
    {
      title: 'New Nature',
      media: {
        type: 'image',
        src: 'newnature.jpg'
      },
      text: 'In May 2020, the Milieux Institute partnered with the <strong>Goethe-Institut Montreal</strong> to launch a program of international exchange over the course of 2020 called <strong><a href="https://www.goethe.de/ins/ca/en/kul/sup/nat/21905662.html" target="_blank" class="link black underline dim">New Nature</a></strong>. The series of encounters engage 25 leading climate scientists, artists and technologists from Canada, Germany, Mexico and the U.S. in conversation about immersive media and climate science. Two students and two faculty from Milieux participated in the event.<br/><br/>Learn more <a href="https://www.goethe.de/ins/ca/en/kul/sup/nat.html" target="_blank" class="link black underline dim">here</a>.'
    },
    {
      title: 'An ‘escape room’ from elder abuse',
      media: {
        type: 'image',
        src: 'escape.jpg'
      },
      text: 'Researchers from <strong>Ageing + Communication + Technologies (ACT)</strong>, part of the <strong>Participatory Media Cluster</strong>, worked with activist from a Montreal-based advocacy group to build and operate an ‘escape room’ on the idea of an older person dealing with psychological abuse, the denial of rights, financial abuse, and physical abuse. Their findings became extremely relevant as the pandemic placed systemic ageism and elder abuse at the center of public discourse. Read the <a href="https://doi.org/10.1007/s40869-020-00105-5" target="_blank" class="link black underline dim">paper</a> and the <a href="https://milieux.concordia.ca/building-an-escape-room-to-draw-attention-to-elder-abuse/" target="_blank" class="link black underline dim">full story</a>.'
    }
  ]
}

// console.log(data)
