
nose_x = 0

nose_y = 0

difference = 0

lwrist = 0

rwrist = 0

function setup () {
    canvas = createCanvas(450,450)
    canvas.position(500,200);
    captured = createCapture(VIDEO)
    captured.size(450,450)
    captured.position(10,200)
    
    pose1 = ml5.poseNet(captured,modeloaded)
    pose1.on("pose", gotpose)
}

function draw(){
    background("#E5F9FF")

    fill("#abc6db")
    stroke("#213d10")
    square(nose_x,nose_y,difference)
    document.getElementById("size_tag").innerHTML="The width and height of the square is: "+difference+" px."
}

function modeloaded (){
    console.log("modeloaded")
}

function gotpose (result){
    if (result.length > 0){
        console.log(result)

        nose_x = result[0].pose.nose.x
        
        nose_y = result[0].pose.nose.y

        console.log("nose x =" +nose_x+" nose y ="+nose_y+" .")

        lwrist = result[0].pose.leftWrist.x

        rwrist = result[0].pose.rightWrist.x

        difference =floor(lwrist - rwrist)
    }


}
