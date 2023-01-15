import React from 'react'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import "./historyStyle.scss"

const Historia = () => {
  return (
    <>
    <Header className="header__history"/>
    <div id='history'>
      <section className='history__container'>
        <div className='history__content'>
              <h1>Historia Do Universo</h1>
          <div className='history__text'>
              <p>O Universo é tudo o que existe fisicamente, a soma do espaço e do tempo e as mais variadas formas de matéria, como planetas, estrelas, galáxias e os componentes do espaço intergaláctico. O termo Universo pode ser usado em sentidos contextuais ligeiramente diferentes, denotando conceitos como o cosmo, o mundo ou a natureza. O universo observável tem de raio cerca de 46 bilhões de anos-luz. A observação científica do Universo levou a inferências de suas fases anteriores. Estas observações sugerem que o Universo é governado pelas mesmas leis físicas e constantes durante a maior parte de sua extensão e história. A teoria do Big Bang é o modelo cosmológico prevalente que descreve como o Universo evoluiu desde os primeiros 10-44 segundos (Tempo de Planck) até hoje. Observações de supernovas têm mostrado que o Universo está se expandindo a uma velocidade acelerada</p>
              <p>Os valores anteriores para o número de galáxias no Universo giravam em, aproximadamente, cem bilhões de galáxias. Mas em outubro de 2016 dados reunidos em duas décadas de imagens colhidas pelo Hubble mostraram que o número de galáxias gira em torno de 20 vezes mais, saltando para 2 trilhões de galáxias, aproximadamente. Os espaços vazios do Universo podem estar repletos de matéria escura, de natureza ainda desconhecida. De acordo com o modelo científico vigente, conhecido como Big Bang, o Universo surgiu de um único ponto ou singularidade onde toda a matéria e energia do universo observável encontrava-se concentrada numa fase densa e extremamente quente chamada Era de Planck.</p>
              <p>A partir dessa era, o Universo vem-se expandindo, possivelmente em curtos períodos (menos que 10−32 segundos) de inflação cósmica. Diversas medições experimentais independentes apoiam teoricamente tal expansão e a teoria do Big Bang. Esta expansão tem-se acelerado por ação da energia escura, uma força contrária à gravidade que está agindo mais que esta devido ao fato das dimensões do Universo serem grandes o bastante para dissipar a força gravitacional. Porém, graças ao escasso conhecimento a respeito da energia escura, é ainda pequeno o entendimento do fenômeno e sua influência no destino do Universo</p>
          </div>
        </div>
        <Footer />
      </section>
    </div>
    </>
    
  )
}

export default Historia