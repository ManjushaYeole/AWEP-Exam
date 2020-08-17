var count = 0;

function like() {

    let likeCount = document.querySelector("#like");
    count++;
    likeCount.innerHTML = count;

}

function dislike() {

    let likeCount = document.querySelector("#dislike");
    count--;
    likeCount.innerHTML = count;

}

function comment() {

    let inpvalue = document.querySelector("#inp").value;
    let clonevalue = document.querySelector("#Placecomment").cloneNode(true);
    clonevalue.innerHTML = inpvalue;
    let commentDiv = document.querySelector("#commentDiv");

    commentDiv.insertBefore(clonevalue, commentDiv.firstChild);
}