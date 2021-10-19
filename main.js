//https://teachablemachine.withgoogle.com/models/VJf9aF7On/

function StartClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/VJf9aF7On/model.json', modelReady);

}

    function modelReady()
    {
        console.log("Model Loaded!")
    }