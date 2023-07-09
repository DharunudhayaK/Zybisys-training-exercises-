export const voiceFunction = (input) => {
    // let audioSrc = new Audio();
    // for (let i = 0; i < response[0].phonetics.length; i++) {
    //     audioSrc.src = response[0].phonetics[i].audio
    //     audioSrc.play()
    // img.src = "./assets/Pause.png"
    // setTimeout(() => {
    //     img.src = "./assets/Play.png"
    // }, 1750);
    // for (let out = 0; out < input.length; out++) {
    const data = input[0]
    const audioFile = data.phonetics.filter((phonetic) => phonetic.audio)
        .map((phonetic) => phonetic.audio)
    const audioFormat = audioFile[0]
    let audioBegin = document.getElementById('startAudio')
    audioBegin.addEventListener('click', () => {
        console.log(audioFormat);
       // audioFormat.startAudio()
        //let imgPass = document.getElementById('startAudio')
        // let playBtn = document.getElementById('playAudio')

        // let containerFormat = document.getElementById('sectionB')
        // containerFormat.innerHTML = `<audio controls>
        // <source src="${audioFormat}" type="audio/ogg"></audio>`
        // let audioSTag = document.getElementById('startAudio')
        // audioSTag.src = audioFormat
        //}
        let audioSrc = new Audio()
        audioSrc.src = audioFormat
        audioSrc.play()
    })
}