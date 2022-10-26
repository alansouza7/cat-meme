const catsData = [
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody", "insomniac"],
        isGif: false,
        image: "angry2.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: false,
        image: "angry3.jpeg",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["confused", "sad"],
        isGif: false,
        image: "confused.jpeg",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant", "moody"],
        isGif: false,
        image: "dominant.jpeg",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy", "relaxed"],
        isGif: false,
        image: "happy.jpeg",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: false,
        image: "hungry1.jpeg",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["insomniac"],
        isGif: false,
        image: "insomnia1.jpeg",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: false,
        image: "lazy.jpeg",
        alt: "A cat looking lazy",
    },
    {
        emotionTags: ["scared"],
        isGif: false,
        image: "nervous.jpeg",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["sad"],
        isGif: false,
        image: "sad.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["sad", "moody"],
        isGif: false,
        image: "sad1.jpeg",
        alt: "A cat looking sad",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry.gif",
        alt: "A cat looking moody",
    },
    {
        emotionTags: ["moody"],
        isGif: true,
        image: "angry2.gif",
        alt: "A cat looking angry",
    },
    {
        emotionTags: ["confused"],
        isGif: true,
        image: "confused2.gif",
        alt: "A cat looking confused",
    },
    {
        emotionTags: ["dominant"],
        isGif: true,
        image: "dominant.gif",
        alt: "A cat looking dominant",
    },
    {
        emotionTags: ["happy"],
        isGif: true,
        image: "happy.gif",
        alt: "A cat looking happy",
    },
    {
        emotionTags: ["hungry", "sad", "confused"],
        isGif: true,
        image: "confused.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["hungry"],
        isGif: true,
        image: "hungry2.gif",
        alt: "A cat looking hungry",
    },
    {
        emotionTags: ["insomniac", "scared"],
        isGif: true,
        image: "insomnia2.gif",
        alt: "A cat looking insomniac",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "lazy.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["relaxed"],
        isGif: true,
        image: "relaxed2.gif",
        alt: "A cat looking relaxed",
    },
    {
        emotionTags: ["scared", "sad"],
        isGif: true,
        image: "nervous.gif",
        alt: "A cat looking nervous",
    },
    {
        emotionTags: ["scared"],
        isGif: true,
        image: "nervous2.gif",
        alt: "A cat looking scared",
    },
    {
        emotionTags: ["sad"],
        isGif: true,
        image: "sad.gif",
        alt: "A cat looking sad",
    },
]

const emotionRadioEl = document.getElementById('emotion-radios')
const getImageBtn = document.getElementById('get-image-btn')
const gifOption = document.getElementById('gifs-only-option')
const memeModalInner = document.getElementById('meme-modal-inner')
const memeModal = document.getElementById('meme-modal')

// every time we click on the getImageBtn, the function is called and runned
getImageBtn.addEventListener("click", renderCat)

// the querySelector method will get the value of the radio checked and store it into the variable 'chosenMood', that variable value will be one of the moods.
// the if statement is used to run the code only when an radio is clicked in order to avoid errors

//we save the gifOption.checked, which is the checkbox input into a variable. It return a boolean of true if the checkbox has been clicked

// third, we use the filter method array to go inside of the catsData array(inside the data.js) and filter the array that only includes the option we selected. The option has been previously saved in the chosenMood variable.
//The filter method will return an array of the option selected only

function getMatchingCatsArray(){
    if(document.querySelector('input[type=radio]:checked')){
        const chosenMood = document.querySelector('input[type=radio]:checked').value
        const isGif = gifOption.checked

        const getMatchingCats = catsData.filter(function(cats){
            if(isGif){
                return cats.emotionTags.includes(chosenMood) && cats.isGif === true
            } else {
                return cats.emotionTags.includes(chosenMood) && cats.isGif === false
            }
            
        })
       return getMatchingCats
    }
}

//first, we save the array returned from getMatchingCats and save it into a variable
// second, we check if there is only one object inside the array, using length === 1
// if so, the function will return that object
// if not it will generate a random number, returning a random object
function getSingleCatObject(){
    const catsArray = getMatchingCatsArray()
   if(catsArray.length === 1){
    return catsArray[0]
   } else {
    let randomNumber = Math.floor( Math.random() * catsArray.length ) 
    return catsArray[randomNumber]
   }
}


// first, we save the singleCatObject from the previous function and save it into a variable
// second, we render it out
// third, we change the display of the modal to flex
function renderCat(){
    const catObject = getSingleCatObject()
    memeModalInner.innerHTML = `<img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >`

    memeModal.style.display = 'flex'
}

document.getElementById('meme-modal-close-btn').addEventListener("click", function(){
    memeModal.style.display = 'none'
})

// every time we click ('change') the function is called and runned
emotionRadioEl.addEventListener("change", highlightCheckedOption)

// we get the divs rendered with the class 'radio' in it and save it to a variable
// we interate over the array and remove the class 'highlight' from all of them
// the next step will add the class highlight but only in the one clicked, which happens on the event listener above
function highlightCheckedOption(e){
    const radios = document.getElementsByClassName('radio')
    for (let radio of radios) {
        radio.classList.remove('highlight')
    }
    
    document.getElementById(e.target.id).parentElement.classList.add('highlight')
}

// first loop will iterate over the array and bring each object
// second loop will access the emotionTags of each element and push them into the empty array emotionsArray
// the conditional will check if emotionsArray includes the emotion, if so, it won't push into the array, if not, it will push into the array
// we return the value of the emotionsArray, so every time we call this functions, it returns the emotionsArray
function getEmotionsArray(cats) {
    const emotionsArray = []
    catsData.forEach(function (catsArray) {
        catsArray.emotionTags.forEach(function (emotion) {
            if(!emotionsArray.includes(emotion)){
                emotionsArray.push(emotion)
            }
        })
    })
    return emotionsArray
}



// first, we set up an empty string (radioItems)
// second, call the emotions array and save it into a variable (emotions)
// third, we interate over the array and save into the string
// fourth, we render them out using innerHTML
function renderEmotionsRadios(cats) {
    let radioItems = ``
    const emotions = getEmotionsArray(cats)
    emotions.forEach(function (emotion) {
        radioItems += `
            <div class='radio'>
            <label for='${emotion}'>${emotion}</label>
            <input
            type='radio'
            id='${emotion}'
            value='${emotion}'
            name='emotion-radio'
            >
            </div>
        `
    })

    emotionRadioEl.innerHTML = radioItems
}

renderEmotionsRadios(catsData)
