// Your Code Here+
let firstAnswer  = window.prompt('Do you head left or right?')
console.log(firstAnswer)
console.log(firstAnswer === 'left')
if(firstAnswer === 'left') {
    let secondAnswer = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path?`)
console.log(secondAnswer)
console.log(secondAnswer === 'follow it')

    if (secondAnswer === 'follow it') {
        let secondAnswer = window.prompt('You follow the cat to a colony of cats,nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(secondAnswer === 'stay') {
            let secondAnswer = window.alert('You live happily amongs the cats for the rest of your days.')
        } else if (secondAnswer === 'spread the word') {
            let secondAnswer = window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

    } 
        else if(secondAnswer === 'continue path') {
        let secondAnswer = window.prompt('You come accros a chamber that reacher upward to a shining liht above. Ther is a long, winding staricase, and a much quicker, but rickey-looking lader, that leads toward the light. Which do you take?')
       if(secondAnswer === 'ladder') {
           let secondAnswer = window.alert('After ascending a few feetup the lader, one of its rungs snaps, and you comedicalluy fall through each of the runs bellwo. shepish, you retun home.')
        }else if(secondAnswer === 'staircase') {
    let secondAnswer= window.alert('After ascending the staircase, you discover a shiny Shiny blue stone, which you take home and cherish for ever')
}
}
} else if(firstAnswer === 'right') {
    let secondAnswer = window.prompt(`You come across a snoring dragon. 
On the other side of him, you see a shiny chest of treasure. Another path would 
lead you away from the dragon altogether. Which path do you take?`)
    if(secondAnswer === 'past the dragon') {
        let secondAnswer = window.prompt('the dragon wake up and sits upright. you only have a moment to respond, stay or run') 
     
    if(secondAnswer === 'stay') {
        let secondAnswer = window.alert('you and teh dragon have an uplifting converstaion about loval politics adn become lifelong friends')
    } else if(secondAnswer === 'run') {
        let secondAnswer = window.alert('quickly, you run bac to the caves entrance. Sheepish, you return home.')
    }
}   else if(secondAnswer === 'away from the dragon') {
    let secondAnswer = window.prompt('after walking a while longer, you come across a shiny flower, it is so beautiful that you decie you must either draw ir or prick it. which do you do?')
    if(secondAnswer === 'draw it') {
        let secondAnswer = window.alert('draw a flower capturing only a fraction of its beauty with you quill. you bring the draing home, somewhat disappointeed, but over time, discover joy in sharing wiht your freinds and familym reciybtub tge story of your days as a sorcerrer with the aid of the sketch')
    } else if(secondAnswer === 'pick it') {
        let secondAnswer = window.alert('you pick flower adn bring it home, and ll marlvel at its brilliance. however, over time it fades adn eventually crumbles to dust')
    }
}
}