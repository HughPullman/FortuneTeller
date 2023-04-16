const generateRand = (num) =>{
    //generate random number between 0 - num
    return Math.floor(Math.random()*(num+1))
}

const tarotMeanings = {
    theFool: 'innocence, new beginnings, free spirit',
    theMagician: 'willpower, desire, creation, manifestation',
    theHighPriestess: 'intuitive, unconscious, inner voice',
    theEmpress: 'motherhood, fertility, nature',
    theEmperor: 'authority, structure, control, fatherhood',
    theHierophant: 'tradition, conformity, mortality, ethics',
    theLovers: 'partnerships, duality, union',
    theHermit: 'contemplation, search for truth, inner guidance',
    theChariot: 'direction, control, willpower',
    theHangedMan: 'sacrifice, release, martyrdom',
    theStar: 'hope, faith, rejuvenation',
    theWheelOfFortune: 'change, cycles, inevitable fate',
    theTower: 'sudden upheaval, broken pride, disaster',
    theMoon: 'unconscious, illusions, intuition',
    theSun: 'joy, success, celebration',
    justice: 'cause and effect, clarity, truth',
    death: 'end of cycle, beginnings, change, metamorphosis',
    temperance: 'middle path, patience, finding meaning',
    judgement: 'reflection, reckoning, awakening',
    strength: 'inner strength, bravery, compassion, focus',
    theWorld: 'fulfillment, harmony, completion'
}

const tarotCards = {
    card_1: ['The Fool', 'The Magician', 'The High Priestess', 'The Empress','The Emperor', 'The Hierophant', 'The Lovers','The Hermit'],
    card_2: ['The Chariot', 'The Hanged Man' , 'The Star','The Wheel of Fortune', 'The Tower', 'The Moon', 'The Sun'],
    card_3: ['Justice', 'Death', 'Temperance', 'Judgement', 'Strength', 'The World'],

    chooseCards(){
        const chosenTarot =[];
        let num = this.card_1.length;
        chosenTarot.push(this.card_1[generateRand(num)-1]);
        num = this.card_2.length;
        chosenTarot.push(this.card_2[generateRand(num)-1]);
        num = this.card_3.length;
        chosenTarot.push(this.card_3[generateRand(num)-1]);

        return chosenTarot
    }
}

const tarotArray = tarotCards.chooseCards()


let fullReading =[];

for(i = 0; i < tarotArray.length; i++){
    switch(tarotArray[i]){
        case 'The Fool':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theFool}.`)
            break
        case 'The Magician':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theMagician}.`)
            break
        case 'The High Priestess':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theHighPriestess}.`)
            break
        case 'The Empress':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theEmpress}.`)
            break
        case 'The Hierophant':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theHierophant}.`)
            break
        case 'The Lovers':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theLovers}.`)
            break
        case 'The Hermit':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theHermit}.`)
            break
        case 'The Chariot':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theChariot}.`)
            break
        case 'The Hanged Man':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theHangedMan}.`)
            break
        case 'The Star':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theStar}.`)
            break
        case 'The Wheel of Fortune':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theWheelOfFortune}.`)
            break
        case 'The Tower':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theTower}.`)
            break
        case 'The Moon':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theMoon}.`)
            break
        case 'The Sun':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theSun}.`)
            break
        case 'Justice':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.justice}.`)
            break
        case 'Death':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.death}.`)
            break
        case 'Temperance':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.temperance}.`)
            break
        case 'Judgement':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.judgement}.`)
            break
        case 'Strength':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.strength}.`)
            break
        case 'The World':
            fullReading.push(`${tarotArray[i]} meaning ${tarotMeanings.theWorld}.`)
            break
        default:
            fullReading.push('There has been a mistake in the reading.')

    }
}

const formatReading = (reading) =>{
    const formattedReading = 'Your three tarot cards are: \n' + reading.join('\n')
    console.log(formattedReading)
}

formatReading(fullReading);

