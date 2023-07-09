export let callingA = (input) => {
    try {

        // if (input) {
        //console.log(input);
        // let searchBox = document.getElementById('searchInput')
        // searchBox.style.color = "#f4f4f4"

        let paraCaptureLabelA = document.getElementById("captureInputA")
        paraCaptureLabelA.innerHTML = input[0].word

        // let audioCaptureLabelB = document.getElementById("captureInputB")
        // audioCaptureLabelB.innerHTML = input[0].sourceUrls

        let paraCaptureLabelC = document.getElementById("captureInputC")
        paraCaptureLabelC.innerHTML = input[0].phonetic


        let visA = document.getElementById('nounLabel')
        visA.innerHTML = input[0].meanings[0].partOfSpeech
        visA.style.display = "block"

        let audioBegin = document.getElementById('startAudio')
        audioBegin.style.display = "block"

        let visB = document.getElementById('lineLabel')
        visB.style.display = "block"

        let visC = document.getElementById('meaningLabel')
        visC.style.display = "block"

        let unOrderedList = document.getElementById('listLabel')
        unOrderedList.innerHTML = ""

        let gotoLabel = document.getElementById('gotoContainer')
        gotoLabel.style.display = "block"

        let captureDesc = input[0].meanings[0].definitions
        //console.log(captureDesc)
        for (let out = 0; out < captureDesc.length; out++) {
            let li = document.createElement('li')
            li.setAttribute("class", "listContainer")
            li.innerHTML = captureDesc[out].definition
            unOrderedList.appendChild(li)
        }

        let captureSynonym = document.getElementById('synonymPart')
        captureSynonym.style.display = "block"

        let descSynonym = document.getElementById('synonymLabel')
        descSynonym.innerHTML = input[0].meanings[0].synonyms

        let visE = document.getElementById('verbLabel')
        visE.innerHTML = input[0].meanings[1].partOfSpeech
        visE.style.display = "block"

        let visF = document.getElementById('lineLabelA')
        visF.style.display = "block"

        let unOrderedListB = document.getElementById("listLabelB")
        unOrderedListB.innerHTML = ""

        let captureDescC = input[0].meanings[1].definitions[0].definition;
        let captureDescD = "<q>" + input[0].meanings[1].definitions[0].example + "</q>"

        let listA = document.createElement('li')
        listA.setAttribute("class", "listContainerB")
        listA.innerHTML = captureDescC
        unOrderedListB.appendChild(listA)

        // for (let inn = 1; inn < captureDescC.length; inn++) {
        //     let listA = document.createElement('li')
        //     listA.setAttribute("class", "listContainerB")
        //     listA.innerHTML = captureDescC

        //     unOrderedListB.appendChild(listA)
        // }

        let capturedescLabel = document.getElementById("paraContainerA")
        capturedescLabel.innerHTML = captureDescD

        let bottomline = document.getElementById('bottomLine')
        bottomline.style.display = "block"

        let bottomsource = document.getElementById('sourceBottom')
        bottomsource.style.display = "block"


        let capturelink = input[0].sourceUrls
        let bottomSourceLink = document.getElementById('sourceLink')
        bottomSourceLink.innerHTML = capturelink
        // }
        // else {
        //     alert("unable to browse it")
        // }
        gotoLabel.addEventListener('click', () => {
            let srcLink = document.getElementById('sourceLink')
        })

    } catch (error) {
        alert(`Your search did not match any documents ${error.message}`)
    }
}