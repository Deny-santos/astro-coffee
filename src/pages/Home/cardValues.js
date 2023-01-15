import {jamesWeb, hubble, eelt1} from "../../assets"

const cards = {
    card1: {
        img: jamesWeb,
        title:"Telescópio James Web",
        description: "A principal caraterística do telescópio é que ele se trata de um instrumento que capta radiação na parte do infravermelho do espectro eletromagnético. Lembrando que a luz visível é radiação eletromagnética que vai dos 400 nm aos 700 nm de comprimento de onda (onde 1 nm representa um nanômetro, equivalente a 10-9 metro, ou 0,000000001 m). O James Webb capta radiação na faixa dos 5000 nm aos 28000 nm, ou, expresso em micrômetros (onde o micrômetro, simbolizado por μm equivale a 10-6 m), desde os 0,5 μm aos 28 μm."
    },
    card2: {
        img: hubble,
        title:"Telescópio Hubble",
        description: "Projetado nos anos 1970 e 1980, o telescópio espacial Hubble foi lançado em 1990 e proporcionou uma revolução na Astronomia. As imagens captadas por meio das lentes desse telescópio revelaram um universo muito maior e mais belo do que o ser humano havia imaginado"
    },
    card3: {
        img: eelt1,
        title:"E-ELT",
        description: "o European Extremely Large Telescope ou Telescópio Europeu Extremamente Grande, cuja construção avança no norte do Chile, será o mais poderoso instrumento de observação óptica inventado até hoje, capaz de ultrapassar os limites da ciência e aumentar a capacidade de observação existente em mais de 5.000 vezes."
    },
}

export const cardsArray = [cards.card1, cards.card2, cards.card3]

export const titles = {h4: "Qual Seu Telescópio Favorito?", h2: "Conheça o Top 3"}