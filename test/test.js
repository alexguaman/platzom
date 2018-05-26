const expect = require('chai').expect
const platzom = require('..').default

describe('#platzom', function(){
  it('Si la palabra termina con ar, se le quitan las ultimas dos letras', function(){
    const translation = platzom("programar")
    expect(translation).to.equal("program")
  })

  it('Si la palabra inicia con z, se le aniade pe al final', function(){
    const translation = platzom("zorro")
    expect(translation).to.equal("zorrope")
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function(){
    const translation = platzom("refrigerador")
    expect(translation).to.equal("refrig-erador")

    const translation2 = platzom("refrigeradoras")
    expect(translation2).to.equal("refrige-radoras")
  })

  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function(){
    const translation = platzom("radar")
    expect(translation).to.equal("RaDaR")
  })
})
