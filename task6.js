// async function updateTweet() {
//     alert("hi");
//     try {
//         let TweetId = document.querySelector("#tweetId").value;
//         let TweetImageUrl = document.querySelector("#tweetImageUrl").value;
//         let TweetDescription = document.querySelector("#tweetDescription").value;

//         let res = await fetch(
//             "https://p2pclouds.up.railway.app/v1/learn/tweet/update",
//             {
//                 method: "PUT",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({
//                     tweetId: TweetId,
//                     tweetImage: TweetImageUrl,
//                     tweetDescription: TweetDescription,
//                 }),
//             }
//         );
//         let response = await res.json();
//         console.log(response);
//         alert("Tweet Updated Successfully");
//     } catch (err) {
//         console.log(err);
//     }
//     // return;
// };

// document.getElementById('tweetForm').addEventListener('submit', async function (event) {
//     event.preventDefault(); // Prevent the default form submission

//     await updateTweet(); // Call the updateTweet function
// });
function updateTweets() {
    event.preventDefault(); // Prevent the default form submission

    updateTweet();
    return false;
}

async function updateTweet() {
    alert("Processing update...");

    try {
        let TweetId = document.querySelector("#tweetId").value;
        let TweetImageUrl = document.querySelector("#tweetImageUrl").value;
        let TweetDescription = document.querySelector("#tweetDescription").value;

        let res = await fetch(
            "https://p2pclouds.up.railway.app/v1/learn/tweet/update",

            {

                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tweetId: TweetId,
                    tweetImage: TweetImageUrl,
                    tweetDescription: TweetDescription,
                }),
            });

        let response = await res.json();
        console.log(response);
        alert("Tweet Updated Successfully");
    } catch (err) {
        console.error("Error updating tweet:", err);
        alert("Failed to update tweet. Please try again.");
    }
}


function deleteTweets() {
    event.preventDefault(); // Prevent the default form submission

    deleteTweet();
    return false;
}


async function deleteTweet() {
    // alert("yes");
    try {
        let tweetId = document.querySelector("#tweetId").value;

        let res = await fetch(
            "https://p2pclouds.up.railway.app/v1/learn/tweet/delete",
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    tweetId: tweetId,
                }),
            }
        );
        let response = await res.json();
        console.log(response);

        alert("Tweet Deleted Successfully");
    } catch (err) {
        console.log(err);
        alert("Error!!!");
    }
    // return;
};





function saveTweets() {
    event.preventDefault(); // Prevent the default form submission

    saveTweet();
    return false;
}

const saveTweet = async () => {
    try {
      const tweetImage = document.querySelector("#tweetImageUrl").value;
      const tweetDescriptiion = document.querySelector("#tweetDescription").value;
  
      const res = await fetch(
        "https://p2pclouds.up.railway.app/v1/learn/tweet/save",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tweetImage: tweetImage,
            tweetDescription: tweetDescriptiion,
          }),
        }
      );
      const response = await res.json();
      console.log(response);
      alert("Tweet Saved Successfully");
    } catch (err) {
      console.log(err);
    }
};