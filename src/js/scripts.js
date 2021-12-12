/******************************
 ****** Página Principal *******
 ******************************/

ScrollReveal({
  reset: false /*Caso queira que a animação do scroll fique tanto na descida quanto na subida, trocar para true */,
  distance: '60px',
  duration: 2500,
  delay: 400
})

ScrollReveal().reveal('.home', {
  delay: 100,
  origin: 'left'
})

ScrollReveal().reveal('.title-section, .sub-title', {
  delay: 100,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.caixa', {
  delay: 300,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.equipe', {
  delay: 300,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.links', {
  delay: 600,
  origin: 'top',
  interval: 100
})

ScrollReveal().reveal('.final', {
  delay: 400,
  origin: 'left',
  interval: 100
})

/******************************
 ****** Página Detalhes *******
 ******************************/

ScrollReveal().reveal('.descricao', {
  delay: 600,
  origin: 'left',
  interval: 100
})

ScrollReveal().reveal('.container-img', {
  delay: 600,
  origin: 'right',
  interval: 100
})
