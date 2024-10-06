// We use the Objects below to control toggling like/unlike status
const glyphStates = {
	'♡': '♥', // Empty heart becomes a full heart
	'♥': '♡', // Full heart becomes an empty heart
};

const colorStates = {
	red: '', // Red heart turns back to default color
	'': 'red', // Default color turns to red when liked
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page.

const articleHearts = document.querySelectorAll('.like-glyph');

function likeCallback(e) {
	const heart = e.target;
	mimicServerCall()
		.then(function (serverMessage) {
			// STEP 2: Uncomment the 3 lines after the alert.
			// Here we're using Pillar 1 (DOM Manipulation) to update the screen and
			// mimicking Pillar 3 (Server Communication) to only update the screen if
			// the sending of information to the server succeeds.
			alert('You notified the server!');
			console.log(serverMessage); // Log the server message
			heart.innerText = glyphStates[heart.innerText]; // Toggle heart
			heart.style.color = colorStates[heart.style.color]; // Toggle color
		})
		.catch(function (error) {
			alert('Something went wrong!'); // Error handling for the server
		});
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:

for (const glyph of articleHearts) {
	glyph.addEventListener('click', likeCallback); // Add event listener
}

// STEP 4: When all the STEPs' code changes have been complete, you'll be able
// to see a working demonstration of our reference example.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			resolve('Pretend remote server notified of action!'); // Simulate server response
		}, 300);
	});
}
