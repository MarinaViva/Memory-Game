let currentPlayer = 1; // Start with player 1
const gameBoard = document.getElementById('game-board');
const winnerMessageElement = document.getElementById('winner-message');

const images = [
			'https://images.unsplash.com/photo-1480632563560-30f503c09195?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Länk till bild 1
			'https://images.unsplash.com/photo-1480930700499-dc44aa7cb2cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUMyJUI0Y2hyaXN0bWFzfGVufDB8fDB8fHww', // Länk till bild 2
			'https://images.unsplash.com/photo-1483373018724-770a096812ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 3
			'https://images.unsplash.com/photo-1544277879-42659615e478?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 4
			'https://plus.unsplash.com/premium_photo-1661767302582-dcd0c98adb0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 5
			'https://images.unsplash.com/photo-1512648151223-1e18b9fca794?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 6
			'https://plus.unsplash.com/premium_photo-1683121372345-cce0d85768a3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQxfHwlQzIlQjRjaHJpc3RtYXN8ZW58MHx8MHx8fDA%3D', // Länk till bild 7
			'https://plus.unsplash.com/premium_photo-1661761588863-3457b23faf2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 8
			'https://images.unsplash.com/photo-1511782976458-3c4b939c97f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 9
			'https://plus.unsplash.com/premium_photo-1661765277374-d48b4d8b152d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 10
			'https://images.unsplash.com/photo-1524753223054-4192b37b3a54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fCVDMiVCNGNocmlzdG1hc3xlbnwwfHwwfHx8MA%3D%3D', // Länk till bild 11
			'https://images.unsplash.com/photo-1603793303277-ed67787545e5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHwlQzIlQjRjaHJpc3RtYXN8ZW58MHx8MHx8fDA%3D', // Länk till bild 12

		];

let selectedCards = [];
let player1Score = 0;
let player2Score = 0;

	// Function to switch players
	function switchPlayer() {
	currentPlayer = currentPlayer === 1 ? 2 : 1;
	updatePlayerTurnText();
	}

	// Function to update the text showing whose turn it is
	function updatePlayerTurnText() {
	const currentPlayerName = currentPlayer === 1 ? getURLParameter('player1') : getURLParameter('player2');
	const currentPlayerTurnElement = document.getElementById('current-player-turn');
	currentPlayerTurnElement.textContent = `Det är ${currentPlayerName}s tur att välja ett kort.`;
	}

	updatePlayerTurnText();

	// Function to shuffle images randomly
	function shuffleImages(images) {
	for (let i = images.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[images[i], images[j]] = [images[j], images[i]];
	}
	return images;
	}

	// InitializeGame function, used to start the game by creating and placing cards on the game board
	function initializeGame() {
	const shuffledImages = shuffleImages(images.concat(images));

	for (let i = 0; i < shuffledImages.length; i++) {
		const cardElement = createCardElement(i, shuffledImages[i]);
		gameBoard.appendChild(cardElement);
	}
	}

	initializeGame();

	// Create an HTML div element representing the game card
	function createCardElement(index, imageUrl) {
	const cardElement = document.createElement('div');
	cardElement.classList.add('card', index % 2 === 0 ? 'player1' : 'player2');

	const frontImage = createImageElement('https://images.pexels.com/photos/1556679/pexels-photo-1556679.jpeg?auto=compress&cs=tinysrgb&w=1600', `Back Image ${index + 1}`, 'front');
	const backImage = createImageElement(imageUrl, `Front Image ${index + 1}`, 'back');

	cardElement.appendChild(frontImage);
	cardElement.appendChild(backImage);

	cardElement.addEventListener('click', handleCardClick);

	return cardElement;
	}

	// Create an HTML img element representing an image
	function createImageElement(src, alt, className) {
	const imageElement = document.createElement('img');
	imageElement.src = src;
	imageElement.alt = alt;
	imageElement.classList.add(className);
	return imageElement;
	}

	// Click event function for each card
	function handleCardClick(event) {
	console.log(event.currentTarget);
	const clickedCard = event.currentTarget;

	if (clickedCard.classList.contains('flipped')) return;

	clickedCard.classList.add('flipped');

	// Updated part to flip the card and change the image source
	const [frontImage, backImage] = clickedCard.querySelectorAll('img');
	frontImage.style.transform = 'rotateY(180deg)';
	backImage.style.transform = 'rotateY(0deg)';

	selectedCards.push(clickedCard);

	if (selectedCards.length === 2) {
		setTimeout(() => {
		checkForMatch();
		switchPlayer(); // Switch player after each move
		}, 1000);
	}
	}

	// Function to check if cards match
	function checkForMatch() {
	const [card1, card2] = selectedCards;
	const img1 = card1.querySelector('.back').src;
	const img2 = card2.querySelector('.back').src;

	if (img1 === img2) {
		// If the images match
		console.log('Match!');
		removeMatchedCards(card1, card2); // Call the function to remove matched cards
		increasePlayerScore(); // Call the function to increase the player's score
	} else {
		// If the images don't match
		setTimeout(() => {
		// Reset the rotation of the images
		const [frontImage1, backImage1] = card1.querySelectorAll('img');
		const [frontImage2, backImage2] = card2.querySelectorAll('img');
		frontImage1.style.transform = 'rotateY(0deg)';
		backImage1.style.transform = 'rotateY(180deg)';
		frontImage2.style.transform = 'rotateY(0deg)';
		backImage2.style.transform = 'rotateY(180deg)';

		// Remove the 'flipped' class
		card1.classList.remove('flipped');
		card2.classList.remove('flipped');
		}, 1000); // Wait longer before the cards are turned back

		console.log('No match!');
	}

	selectedCards = []; // Reset selected cards
	}

	function removeMatchedCards(card1, card2) {
	// Mark the cards as matched by adding a class
	card1.classList.add('matched');
	card2.classList.add('matched');

	// Check if the game is over (all cards are matched)
	if (document.querySelectorAll('.card:not(.matched)').length === 0) {
		endGame();
	}
	}

	// Compare players' scores
	function increasePlayerScore() {
	const player1ScoreElement = document.getElementById('player1-score');
	const player2ScoreElement = document.getElementById('player2-score');

	if (selectedCards[0].classList.contains('player1')) {
		player1Score++;
		player1ScoreElement.value = player1Score;
	} else if (selectedCards[0].classList.contains('player2')) {
		player2Score++;
		player2ScoreElement.value = player2Score;
	}
	}



	// Function to get parameters from the URL
	function getURLParameter(name) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(name);
	}

	// Function to get player names from the URL and update elements on the page
	function updatePlayerNames() {
	const player1NameElement = document.getElementById('player1Name');
	const player2NameElement = document.getElementById('player2Name');

	const player1Name = getURLParameter('player1') || 'Player 1';
	const player2Name = getURLParameter('player2') || 'Player 2';

	player1NameElement.textContent = player1Name;
	player2NameElement.textContent = player2Name;
	}

	updatePlayerNames();

	// Function to reset scores
	function resetScores() {
	document.getElementById('player1-score').value = '';
	document.getElementById('player2-score').value = '';
	}

	// Function to end the game
	function endGame() {
	const congratulationsMessageElement = document.getElementById('congratulations-message');
	const player1Score = parseInt(document.getElementById('player1-score').value) || 0;
	const player2Score = parseInt(document.getElementById('player2-score').value) || 0;
	const player1Name = getURLParameter('player1') || 'Player 1';
	const player2Name = getURLParameter('player2') || 'Player 2';

	if (player1Score > player2Score) {
		congratulationsMessageElement.textContent = `Grattis! ${player1Name} van!`;
	} else if (player2Score > player1Score) {
		congratulationsMessageElement.textContent = `Grattis! ${player2Name} van!`;
	} else {
		congratulationsMessageElement.textContent = 'Det blev oavgjord!';
	}

	// Hide the game board and scores
	gameBoard.style.display = 'none';
	document.getElementById('score-container').style.display = 'none';
	congratulationsMessageElement.style.display = 'flex';
	}

	function exitGame() {
	window.location.href ='first-page.html';
	}