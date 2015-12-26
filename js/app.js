$(document).ready(function() {
	
//	-------- BEGIN QUESTIONS AND ANSWERS -------- //
	var insectQuestions = [ 
		'Which one is most dangerous ant in the world?', 
		'Which one is the most dangerous spider in the world?', 
		'Which one is the most dangerous snake in the world?',
		'Which one of these is the most poisonous?',
		'Which one of these is considered the largest insect in the world?'
	]
	
//	var insectQuestions = { // can't get random questions with objects?? //
//		questionAnt: 'Which ant is most dangerous ant in the world?',
//		questionSpider: 'Which spider is the most dangerous spider in the world?',
//		questionSnakes: 'Which snake is the most dangerous snake in the world?',
//		questionPoisonous: 'Which one of these is considered the most poisonous in the world?',
//		questionLargestInsect: 'Which one of these is considered the largest insect in the world?' 
//	}
		
		var correctAnswers = {
			correctAnt: ['Bull Ant', 'The most dangerous ant in the world is the bulldog ant (Myrmecia pyriformis) found in coastal regions in Australia. In attack it uses its sting and jaws simultaneously. There have been at least three human fatalities since 1936, the latest a Victorian farmer in 1988. The bull dog ant earned its name because of its ferocity and determination during an attack. It is extremely aggressive and shows little fear of human beings, stinging a number of times in quick succession and therefore injecting more venom with each bite. In an attack, the ant will hold on to its victim with long, toothed mandibles, curl its body underheath and thrust its long barbless sting into the skin. On a few occasions this sting has been enough to kill adults within 15 minutes.'],
			correctSpider: ['Brazilian Wandering Spiders', 'When a spider’s scientific name is derived from the Greek for murderess (Phoneutria) you can guess it’s going to be trouble and this is certainly the case for the wandering spiders. According to Guinness World Records the Brazilian wandering spider (Phoneutria fera) is officially the world’s most venomous spider. It is capable of injecting a powerful neurotoxin which is nearly 20 times more deadly that that of the Black Widow spider if it gets into the blood stream. That is as potent as the venom of many deadly snake species and the effects are similar. The symptoms of envenomation include a loss of muscle control leading to breathing problems which can result in complete respiratory paralysis and eventually asphyxiation.'],
			correctSnake: ['Inland Taipan', 'The inland taipan is considered the most venomous snake in the world. It is the most venomous when tested LD50 on mice and the most venomous when tested on human heart cell culture. eastern coast of the Malay Peninsula and Brunei, and in Halmahera, Indonesia.'],
			correctPoisonous: ['Box Jellyfish', 'This jellyfish is widely regarded as the most poisonous animal in the world. It floats in the waters surrounding Asia and Australia, and is so transparent that it is nearly invisible if you are not looking for it. The tentacles of the box jellyfish produce nematocysts. Once the toxin reaches the blood, blood pressure increases. This can lead to a heart attack, and ultimately death.'],
			correctLargestInsect: ['Giant Weta', 'the giant weta has been named the biggest insect in the world because of its weight. A female giant weta filled with eggs can reach up to 70g or more and the largest of the species are found on Little Barrier Island. They are usually less social and more passive than other weta. Their diet consists of plants, other small insects and fruit. Their size is an example of island gigantism, which is a biological phenomenon leading to a larger size than their mainland relatives because of their isolation and lack of large predators.']
		}
			
		var insectChoices = {
			antArray: [ 'Bull Ant' ,'Fire Ant', 'Meat Eating Ant', 'Argentine Ant', 'Saifu Ant', 'Bullhorn Acacia Ant', 'Green Tree Ant', 'Army Ant'],
			spiderArray: ['Brazilian Wandering Spider', 'Camel Spider', 'Fringed Ornamental Tarantula', 'Mouse Spider', 'Black Widow', 'Brown Recluse', 'Sydney Funnel Web' ],
			snakeArray: ['Inland Taipan', 'Rattle Snake', 'Death Adder', 'Viper', 'Black Mamba', 'Blue Krait' ],
			posionousArray: ['Box Jellyfish', 'King Cobra', 'Blue Ringed Octopus', 'Death Stalker Scorpion', 'Brazillian Wandering Spider', 'Puffer Fish'],
			largestInsectArray: [ 'Giant Weta', 'Titan Beetle', 'Elephant Beetle', 'Giant Long-Legged Katydids', 'Goliath Beetle', 'Giant Camel Spiders'],
		}
		
		var insectImages = {
			antImages: ['http://themysteriousworld.com/wp-content/uploads/2014/03/bullet-ant.jpg', 'http://themysteriousworld.com/wp-content/uploads/2014/03/fireant-1024x708.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Meat_eater_ant_feeding_on_honey02.jpg/250px-Meat_eater_ant_feeding_on_honey02.jpg', 'http://cisr.ucr.edu/images/argentine_ant_01_small.jpg', 'http://www.alexanderwild.com/Ants/Taxonomic-List-of-Ant-Genera/Dorylus/i-VXDZh2X/1/XL/siafu7-XL.jpg', 'http://science.kennesaw.edu/~jdirnber/Bio2108/Lecture/LecEcology/acacia-ants.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Green_Tree_Ant_two_times_life_size.JPG', 'http://blogs.scientificamerican.com/compound-eye/files/2012/06/army_ant_nomamyrmex.jpg' ],
			spiderImages: ['http://www.planetdeadly.com/wp-content/uploads/brazilian-wandering-spider-720x480.jpg', 'http://www.planetdeadly.com/wp-content/uploads/camel-spider-720x463.jpg', 'http://www.planetdeadly.com/wp-content/uploads/ornamental-tarantula-720x444.jpg', 'http://www.planetdeadly.com/wp-content/uploads/mouse-spider-720x485.jpg', 'http://www.planetdeadly.com/wp-content/uploads/redback-spider-720x492.jpg','http://www.planetdeadly.com/wp-content/uploads/brown-recluse-720x495.jpg', 'http://www.planetdeadly.com/wp-content/uploads/sydney-funnel-web-720x531.jpg'],
			snakeImages: [ 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/poisonous-snake.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/rattlesnake.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/r260601_1083484.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/saw-scaled-viper.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/blackmamba.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/948918878_0b4799afdb_o.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/poisonous-snake.jpg' ],
			poisonousImages: ['http://www.conservationinstitute.org/wp-content/uploads/2013/09/Box-Jellyfish-David-Lambert-Flickr.jpg', 'http://cdn4.sci-news.com/images/2013/12/image_1595_1-King-cobra.jpg', 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2015/06/150623_WILD_Octopus.jpg.CROP.promo-mediumlarge.jpg', 'http://www.factzoo.com/sites/all/img/invertebrates/arachnid/yellow-isreali-scorpion.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Brazilizn-Wandering-Spider-Andreas-Kay-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Puffer-Fish-LisaSabin-Wilson-Flickr.jpg', 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2015/06/150623_WILD_Octopus.jpg.CROP.promo-mediumlarge.jpg'],
			largestInsectImages: [ 'http://i.dailymail.co.uk/i/pix/2011/12/01/article-2068547-0F02AA4A00000578-492_634x370.jpg', 'http://s-ak.buzzfed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3415-1300812798-4.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3402-1300812938-8.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3420-1300812883-5.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3418-1300813082-11.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/13/enhanced-buzz-3418-1300813341-12.jpg']	
		}

// -------- END QUESTIONS AND ANSWERS -------- //
	
	var score = 0;
	var gameOverCount = 5;
	var gameTally = 0;
	var prepInsectQuestions;
	var prepAnswers;
	
	var prepAntImages;
	var prepSpiderImages;
	var prepSnakeImages;
	var prepPoisonousImages;
	var prepLargestInsectImages;

	var prepAntChoices;
	var prepSpiderChoices;
	var prepSnakeChoices;
	var prepPoisonousChoices;
	var prepLargestInsectChoices;

	var prepAntChoicesLength;
	var prepSpiderChoicesLength;
	var prepSnakeChoicesLength;
	var prepPoisonousChoicesLength;
	var prepLargestChoicesLength;

	var gameQuestionsLength;
	var useThisQuestionNumber;
	var gameQuestions;
	
	var count = 0;
	var imageOptions = 4;
	var imagesToLoad = [];
	var choicesToLoad = [];
	var choicesToLoadLength;
	var imagesToLoadLength;
	var prepLinkTags = '<li><span class="default"> </span></li>';
	var linkIndexForCorrectAnswer;
	
	var $answerH2 = $('.answer h2');
	var $answerH3 = $('.answer h3');
	var $answerH1 = $('.answer h1');
	
	
	newGame();
	nextQuestion();
	
	///////////////////// 	START OF FUNCTION
	
	function newGame() {
		
		$('.question-container .submit').on('click', function() {
			getQuestionNumber();
			compileQuestions();
			displayQuestion();
			console.log(gameQuestions + ' -- In new game question list');
			getQuestionImagesAndText();
			showQuestionImagesAndText();
			correctAnswer();
		})
	}
	
	function nextQuestion() {
		
		$('.next-question').on('click', function() {
			$('.active-question li').remove();
			updateQuestionList();
			console.log(gameQuestions + ' -- updated question list');
			hideAnswerReveal();
			getQuestionNumber();
			compileQuestions();
			displayQuestion();
			getQuestionImagesAndText();
			showQuestionImagesAndText();
			correctAnswer();
		})
		
	}
	
	
	///////////////////// 	START OF FUNCTION
	
	function getNumber(min, max) { // getting random number to use for question index 
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	///////////////////// 	START OF FUNCTION
	
	function getQuestionNumber() { 
		
		prepInsectQuestions = insectQuestions;

		prepAntImages = insectImages.antImages;
		prepSpiderImages = insectImages.spiderImages;
		prepSnakeImages = insectImages.snakeImages;
		prepPoisonousImages = insectImages.poisonousImages;
		prepLargestInsectImages = insectImages.largestInsectImages;

		prepAntChoices = insectChoices.antArray;
		prepSpiderChoices = insectChoices.spiderArray;
		prepSnakeChoices = insectChoices.snakeArray;
		prepPoisonousChoices = insectChoices.posionousArray;
		prepLargestInsectChoices = insectChoices.largestInsectArray;

		prepAntChoicesLength = insectChoices.antArray.length;
		prepSpiderChoicesLength = insectChoices.spiderArray.length;
		prepSnakeChoicesLength = insectChoices.snakeArray.length;
		prepPoisonousChoicesLength = insectChoices.posionousArray.length;
		prepLargestChoicesLength = insectChoices.largestInsectArray.length;

		gameQuestionsLength = prepInsectQuestions.length;
		
		// invoking getNumber() to get random number
		useThisQuestionNumber = getNumber(0, gameQuestionsLength);
		
	}
	
	
	function compileQuestions() {	
		gameQuestions = [];
		for(i in prepInsectQuestions) {
			gameQuestions.push(prepInsectQuestions[i]);
		}
	}
	
	
	function updateQuestionList() {
		
		gameQuestions = gameQuestions.splice(useThisQuestionNumber, 1);
		
	}
	
	
	
	function displayQuestion() {	
		$('.question-container h2').text(gameQuestions[useThisQuestionNumber]);
	}
	
	
	function getQuestionImagesAndText() {
		
		if(useThisQuestionNumber === 0 || useThisQuestionNumber === 1 || useThisQuestionNumber === 2 || useThisQuestionNumber === 3 || useThisQuestionNumber === 4) {
			
			imageOptions = 4;
			imagesToLoad = [];
			choicesToLoad = [];
			choicesToLoadLength = choicesToLoad.length;
			imagesToLoadLength = imagesToLoad.length;
			
			if(useThisQuestionNumber === 0) { 
				for(var i = 0; i < prepAntChoicesLength; i++) {
					choicesToLoad.push(prepAntChoices[i]);
					imagesToLoad.push(prepAntImages[i]);
				}
			} else if(useThisQuestionNumber === 1) { 
				for(var i = 0; i < prepSpiderChoicesLength; i++) {
					choicesToLoad.push(prepSpiderChoices[i]);
					imagesToLoad.push(prepSpiderImages[i]);
				}
			} else if(useThisQuestionNumber === 2) { 
				for(var i = 0; i < prepSnakeChoicesLength; i++) {
					choicesToLoad.push(prepSnakeChoices[i]);
					imagesToLoad.push(prepSnakeImages[i]);
//					gameQuestions.push(prepInsectQuestions[i]);
				}
			} else if(useThisQuestionNumber === 3) { 
				for(var i = 0; i < prepPoisonousChoicesLength; i++) {
					choicesToLoad.push(prepPoisonousChoices[i]);
					imagesToLoad.push(prepPoisonousImages[i]);
				}
			} else if(useThisQuestionNumber === 4) { 
				for(var i = 0; i < prepLargestChoicesLength; i++) {
					choicesToLoad.push(prepLargestInsectChoices[i]);
					imagesToLoad.push(prepLargestInsectImages[i]);
				}
			}
		}
	}
	
	function showQuestionImagesAndText() { 
		
		var startIndex = useThisQuestionNumber; // Deactivate to test 3 index
//		var startIndex = 2; // For debugging purposes
		linkIndexForCorrectAnswer = getNumber(0, 4);

		if(startIndex >= imageOptions) { // FOR 4 OR GREATER INDEX SITUATIONS
			var stop = startIndex - 3; 
			for(var start = startIndex; stop <= start; start--) {
				$('.active-question ul').append(prepLinkTags);// SETTING VARIABLES; HAVE TO BE PRIVATE TO THE LOOP. OTHERWISE THE 'ITERATOR' DOESN'T REGISTER DYNAMICALLY.
				$('.active-question span').last().text(choicesToLoad[start]); // ADDING TEXT TO THE LAST LINK CREATED.
				$('.active-question li').last().css({'background-image': 'url('+imagesToLoad[start]+')', 'background-size': 'cover'}); // APPLYING CSS TO NEW LINNK ELEMENT
				//$('.active-question li').last().addClass('option');
				//$('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS TO NEW SPAN ELEMENT

				if (stop ) {
					$('.active-question span').eq(linkIndexForCorrectAnswer).text(choicesToLoad[0]); // REPLACING TEXT WITH CORRECT ANSWER
					$('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+imagesToLoad[0]+')', 'background-size': 'cover'}); // APPLYING CSS STYLES
					$('.active-question li').eq(linkIndexForCorrectAnswer).addClass('optionC');
				}
			} // END 1ST FOR LOOP
		} // END OF 1ST "IF" STATEMENT
		
		if (startIndex < imageOptions && startIndex >= 1) { // FOR ONE TO 3 INDEX SITUATIONS
			var stop = startIndex + 3;
			for(var start = startIndex; start <= stop ; start++) {
				
				$('.active-question ul').append(prepLinkTags); // SETTING VARIABLES; HAVE TO BE PRIVATE TO THE LOOP. OTHERWISE THE 'ITERATOR' DOESN'T REGISTER DYNAMICALLY.				
				$('.active-question span').last().text(choicesToLoad[start-1]); // ADDING TEXT TO THE LAST LINK CREATED.
				$('.active-question li').last().css({'background-image': 'url('+imagesToLoad[start-1]+')', 'background-size': 'cover'}); // APPLYING CSS TO NEW LINNK ELEMENT
				//$('.active-question li').last().addClass('option');
				//$('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS TO NEW SPAN ELEMENT
				
				if(stop + 1) {
					$('.active-question span').eq(linkIndexForCorrectAnswer).text(choicesToLoad[0]); // REPLACING TEXT WITH CORRECT ANSWER
					$('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+imagesToLoad[0]+')', 'background-size': 'cover'});
					//$('.active-question span').eq(linkIndexForCorrectAnswer).css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS STYLES
					$('.active-question li').eq(linkIndexForCorrectAnswer).addClass('optionC');
				}

			} // END 2ND / CATCH LOOP
		} // END OF 2ND "IF" STATEMENT
		
		if (startIndex === 0) {  // FOR ZERO INDEX SITUATION
			var stop = startIndex + 4;	
			for(var start = startIndex; start <= stop ; start++) {				
				if(start < stop) {					
					$('.active-question ul').append(prepLinkTags);
					$('.active-question span').last().text(choicesToLoad[start + 1]);
					$('.active-question li').last().css({'background-image': 'url('+imagesToLoad[start + 1]+')', 'background-size': 'cover'});
					//$('.active-question li').last().addClass('option');
					//$('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'});
				} else if (stop) {
					$('.active-question span').eq(linkIndexForCorrectAnswer).text(choicesToLoad[0]); 
					$('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+imagesToLoad[0]+')', 'background-size': 'cover'});
					//$('.active-question span').eq(linkIndexForCorrectAnswer).css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'});
					$('.active-question li').eq(linkIndexForCorrectAnswer).addClass('optionC');
				} 
			} // END 3RD / CATCH LOOP
		} // END OF 3RD "IF" STATEMENT
		
	}
	
	///////////////////// 	START OF FUNCTION
	
	function correctAnswer() {
		
		console.log(useThisQuestionNumber + ' this is the question number');
		console.log(score + ' -- this is the current score' )
		console.log(linkIndexForCorrectAnswer + ' ++ correct Link');
		console.log($('.active-question li').eq(linkIndexForCorrectAnswer));
		
		var checkIndex0ForOptionC = $('.active-question li').eq(0).hasClass('optionC');
		var checkIndex1ForOptionC = $('.active-question li').eq(1).hasClass('optionC');
		var checkIndex2ForOptionC = $('.active-question li').eq(2).hasClass('optionC');
		var checkIndex3ForOptionC = $('.active-question li').eq(3).hasClass('optionC');
		
		console.log(checkIndex0ForOptionC + ' this is index 0');
		console.log(checkIndex1ForOptionC + ' this is index 1');
		console.log(checkIndex2ForOptionC + ' this is index 2');
		console.log(checkIndex3ForOptionC + ' this is index 3');
		
		$('.active-question li').on('click', function() {
			if (checkIndex0ForOptionC === false || checkIndex1ForOptionC === false || checkIndex2ForOptionC === false || checkIndex3ForOptionC === false) {
				$answerH2.text('Sorry');
				$answerH3.text('You got it wrong this time');
				showAnswerReveal();
				$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
			}
		})
		
		$('.active-question li').eq(0).on('click', function() {
			if (checkIndex0ForOptionC === true) {
				showAnswer(useThisQuestionNumber);
				showAnswerReveal();
				score++;
				$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
			}
		})
		
		$('.active-question li').eq(1).on('click', function() {
			if (checkIndex1ForOptionC === true) {
				showAnswer(useThisQuestionNumber);
				showAnswerReveal();
				score++;
				$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
			}
		})
		
		$('.active-question li').eq(2).on('click', function() {
			if (checkIndex2ForOptionC === true) {
				showAnswer(useThisQuestionNumber);
				score++;
				$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
			}
		})
		
		$('.active-question li').eq(3).on('click', function() {
			if (checkIndex3ForOptionC === true) {
				showAnswer(useThisQuestionNumber);
				showAnswerReveal();
				score++;
				$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
			}
		})
		
		gameTally++;
		
	}
	
	///////////////////// 	START OF FUNCTION
	
	
	function showAnswerReveal() {

		$('.answer').addClass('answer-reveal');
		
		$('.question-container').fadeOut(500, function() {
			$(this).css({'z-index': '90', 'display': 'block'});
				$('.answer-reveal').fadeIn(3000, function() {
			})
		})
	}
	
	function hideAnswerReveal() {
		
		$('.answer-reveal').fadeOut(1000, function() {
			$(this).css({ 'display': 'block'});
				$('.question-container').fadeIn(3000, function() {
					$('.answer').removeClass('answer-reveal');
			})
		})
		
	}
	
	///////////////////// 	START OF FUNCTION
	
	
	function showAnswer(utqn) {
		
		if(utqn === 0) { 
			$answerH2.text(correctAnswers.correctAnt[0]);
			$answerH3.text(correctAnswers.correctAnt[1]);
		}
		if(utqn === 1) { 
			$answerH2.text(correctAnswers.correctSpider[0]);
			$answerH3.text(correctAnswers.correctSpider[1]);
		} 
		if(utqn === 2) { 
			$answerH2.text(correctAnswers.correctSnake[0]);
			$answerH3.text(correctAnswers.correctSnake[1]);
		}
		if(utqn === 3) { 
			$answerH2.text(correctAnswers.correctPoisonous[0]);
			$answerH3.text(correctAnswers.correctPoisonous[1]);
		}
		if(utqn === 4) { 
			$answerH2.text(correctAnswers.correctLargestInsect[0]);
			$answerH3.text(correctAnswers.correctLargestInsect[1]);
//			score++;
//			gameTally = score + gameTally;
//			$answerH1.text('YOUR SCORE:  ' + score + ' of ' + gameTally);
		}

		
	}
	
	

	
	
	
	
	function hideActiveQuestion() {	}
	
})

////---------------------END OF JQUERY DOCUMENT READY

//			function loadQuestion(io, ctl, ctll, itl, itll, utqn) 
//
//	function updateGameQuestionArray(piq, utqn) {
//		var currentQuestionList = piq;
//		updateQuestionList = [];
//		
//		if(count === 0) {
//			for(i in currentQuestionList) {
//				updateQuestionList.push(piq[i]);
//			}
//			count++;
//		} else if (count > 0 ) {
//			updateQuestionList = currentQuestionList.splice(utqn, 1);
//		}
//		
//		console.log(updateQuestionList + ' -- in the updateGameQuestion function');
//		console.log(count + ' -- the current count');
//		return updateQuestionList;
//		
//	}
//



	
	function gameSummary() {}
	
	function updateGame() {}
	