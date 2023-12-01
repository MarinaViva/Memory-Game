
		function startGame() {
				const player1Name = document.getElementById('player1').value || 'Spelare 1';
				const player2Name = document.getElementById('player2').value || 'Spelare 2';

				// Create a URL with parameters for the players' names
				const url = 'second-page.html' + '?player1=' + encodeURIComponent(player1Name) + '&player2=' + encodeURIComponent(player2Name);

				// Go to the other page
				window.location.href = url;
			}

