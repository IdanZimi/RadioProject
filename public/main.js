$('#one').on('click', function () {
    stop();
    let q = "housemusic"
    randomNum =Math.floor(Math.random() * 51);
    // const result = getvideo(randomNum);
    getvideo(randomNum , q).then((data)=>{
        console.log("hey im result----"+data.items[randomNum].id.videoId)
        let result =data.items[randomNum].id.videoId
        let videoName=data.items[randomNum].snippet.title
        let a=[result , videoName]
        return a 
    }).then((a)=>{
        $('.music').append('<iframe class="trance" width="300" height="250" src="https://www.youtube.com/embed/'+a[0]+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
        $('.trackName').append('<span id="span">'+a[1]+'</span>')
    })
})

$('#two').on('click', function () {
    stop();
    let q = "מזרחית"
    randomNum =Math.floor(Math.random() * 51);
    // const result = getvideo(randomNum);
    getvideo(randomNum , q).then((data)=>{
        console.log("hey im result----"+data.items[randomNum].id.videoId)
        let result =data.items[randomNum].id.videoId
        let videoName=data.items[randomNum].snippet.title
        let a=[result , videoName]
        return a 
    }).then((a)=>{
        $('.music').append('<iframe class="trance" width="300" height="250" src="https://www.youtube.com/embed/'+a[0]+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
        $('.trackName').append('<span id="span">'+a[1]+'</span>')

    })
})

$('#three').on('click', function () {
    stop();
    let q = "rapmusic"
    randomNum =Math.floor(Math.random() * 51);
    // const result = getvideo(randomNum);
    getvideo(randomNum , q).then((data)=>{
        console.log("hey im result----"+data.items[randomNum].id.videoId)
        let result =data.items[randomNum].id.videoId
        let videoName=data.items[randomNum].snippet.title
        let a=[result , videoName]
        return a 
    }).then((a)=>{
        $('.music').append('<iframe class="trance" width="300" height="250" src="https://www.youtube.com/embed/'+a[0]+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
        $('.trackName').append('<span id="span">'+a[1]+'</span>')

    })
})

$('#four').on('click', function () {
    stop();
    let q = "tranceparty"
    randomNum =Math.floor(Math.random() * 51);
    // const result = getvideo(randomNum);
    getvideo(randomNum , q).then((data)=>{
        console.log("hey im result----"+data.items[randomNum].id.videoId)
        let result =data.items[randomNum].id.videoId
        let videoName=data.items[randomNum].snippet.title
        let a=[result , videoName]
        return a 
    }).then((a)=>{
        $('.music').append('<iframe class="trance" width="300" height="250" src="https://www.youtube.com/embed/'+a[0]+'?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>')
        $('.trackName').append('<span id="span">'+a[1]+'</span>')

    })
})
$('#stopi').on('click', function () {
    $('.trance').remove()
    $('#span').remove()
    // $('.mizrahitmusic').remove()
    // $('.rapmusic').remove()
    // $('.trance').remove()
})
const stop = function(){
    $('.trance').remove()
    $('#span').remove()

}

const getvideo = function (randomNum , q) {
    return $.get({
        url:'https://www.googleapis.com/youtube/v3/search?q='+q+'&maxResults=50&type=video&part=snippet&key=AIzaSyAwdQ9uljCDhElI6q-aghVzT2UsPRmM3Eo',
        success: function (data) {
            const videoId = data.items[randomNum].id.videoId
            const videoName = data.items[randomNum].snippet.title
            const VideoImage = data.items[randomNum].snippet.thumbnails.medium.url
            
            console.log("this is the id:"+ " " +videoId + " "+ "and this is name:"+ videoName + "this is Image"+ " " +VideoImage)
            // return videoId 
            // renderView();
        },
        error: function () {
            console.log("error :(")
        },
    })
}
