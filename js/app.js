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
			antArray: ['Fire Ant', 'Meat Eating Ant', 'Argentine Ant', 'Bull Ant', 'Saifu Ant', 'Bullhorn Acacia Ant', 'Green Tree Ant', 'Army Ant'],
			spiderArray: ['Camel Spider', 'Fringed Ornamental Tarantula', 'Mouse Spider', 'Black Widow', 'Brown Recluse', 'Sydney Funnel Web', 'Brazilian Wandering Spider'],
			snakeArray: ['Rattle Snake', 'Death Adder', 'Viper', 'Black Mamba', 'Blue Krait', 'Inland Taipan' ],
			posionousArray: ['Box Jellyfish', 'King Cobra', 'Blue Ringed Octopus', 'Death Stalker Scorpion', 'Brazillian Wandering Spider', 'Puffer Fish'],
			largestInsectArray: ['Titan Beetle', 'Elephant Beetle', 'Giant Long-Legged Katydids', 'Goliath Beetle', 'Giant Camel Spiders', 'Giant Weta'],
		}
		
		var insectImages = {
			antImages: ['http://themysteriousworld.com/wp-content/uploads/2014/03/fireant-1024x708.jpg', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Meat_eater_ant_feeding_on_honey02.jpg/250px-Meat_eater_ant_feeding_on_honey02.jpg', 'http://cisr.ucr.edu/images/argentine_ant_01_small.jpg', 'http://themysteriousworld.com/wp-content/uploads/2014/03/bullet-ant.jpg', 'http://www.alexanderwild.com/Ants/Taxonomic-List-of-Ant-Genera/Dorylus/i-VXDZh2X/1/XL/siafu7-XL.jpg', 'http://science.kennesaw.edu/~jdirnber/Bio2108/Lecture/LecEcology/acacia-ants.jpg', 'https://upload.wikimedia.org/wikipedia/commons/1/12/Green_Tree_Ant_two_times_life_size.JPG', 'http://blogs.scientificamerican.com/compound-eye/files/2012/06/army_ant_nomamyrmex.jpg' ],
			spiderImages: ['http://www.planetdeadly.com/wp-content/uploads/camel-spider-720x463.jpg', 'http://www.planetdeadly.com/wp-content/uploads/ornamental-tarantula-720x444.jpg', 'http://www.planetdeadly.com/wp-content/uploads/mouse-spider-720x485.jpg', 'http://www.planetdeadly.com/wp-content/uploads/redback-spider-720x492.jpg', 'http://www.planetdeadly.com/wp-content/uploads/brown-recluse-720x495.jpg', 'http://www.planetdeadly.com/wp-content/uploads/sydney-funnel-web-720x531.jpg', 'http://www.planetdeadly.com/wp-content/uploads/brazilian-wandering-spider-720x480.jpg'],
			snakeImages: ['http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/rattlesnake.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/r260601_1083484.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/saw-scaled-viper.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/blackmamba.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/948918878_0b4799afdb_o.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/poisonous-snake.jpg', 'http://listverse.wpengine.netdna-cdn.com/wp-content/uploads/2011/03/poisonous-snake.jpg' ],
			poisonousImages: ['http://www.conservationinstitute.org/wp-content/uploads/2013/09/Box-Jellyfish-David-Lambert-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/King-Cobra-Michael-Allen-Smith-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Blue-Ringed-Octopus-Saspotato-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Death-Stalker-Scorpion-Anthony-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Brazilizn-Wandering-Spider-Andreas-Kay-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Puffer-Fish-LisaSabin-Wilson-Flickr.jpg'],
			largestInsectImages: ['http://s-ak.buzzfed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3415-1300812798-4.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3402-1300812938-8.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3420-1300812883-5.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/12/enhanced-buzz-3418-1300813082-11.jpg', 'http://s3-ak.buzzfeed.com/static/enhanced/terminal01/2011/3/22/13/enhanced-buzz-3418-1300813341-12.jpg', 'http://i.dailymail.co.uk/i/pix/2011/12/01/article-2068547-0F02AA4A00000578-492_634x370.jpg']	
		}

// -------- END QUESTIONS AND ANSWERS -------- //
	
	var score = 0;	
	var duplicateInsectQuestions = []; 	// getting copy of insect question array

	
	newGame();
//	getInsectQuestions();
//	console.log(duplicateInsectQuestions + " --- top ") -- verified it was returning array to top

//	console.log((duplicateInsectQuestions instanceof Array) + " ---- outside");
//	console.log((duplicateInsectQuestions[1]) + " ---- outside");
//	console.log(insectQuestions instanceof Array);
	
	function newGame() {
		
		$('.information-header').on('click', function() {
			
		})
		
		$('.question-container .submit').on('click', function() {
			getInsectQuestions();
			getQuestion();
		})
		
	}
	
	
	function getNumber(min, max) { // getting random number to use for question index 
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
	function getInsectQuestions() {	
		var prepInsectQuestionLength = insectQuestions.length;
		
		for (var i = 0; i < prepInsectQuestionLength; ) {
				duplicateInsectQuestions = insectQuestions;
				i++;
			}
		return duplicateInsectQuestions;
	}
	

	function getQuestion() { 
		
//		var prepDuplicateQuestions = duplicateInsectQuestions;
//		console.log(prepDuplicateQuestions);
		var questionNumber = 0; //getNumber(0, d.length );
		var activeInsectQuestion = duplicateInsectQuestions[questionNumber];
		
		$('.question-container h2').text(activeInsectQuestion);
		
		var prepAntImages = insectImages.antImages;
		var prepSpiderImages = insectImages.spiderImages;
		var prepSnakeImages = insectImages.snakeImages;
		var prepPoisonousImages = insectImages.poisonousImages;
		var prepLargestInsectImages = insectImages.largestInsectImages;
		
		var prepAntChoices = insectChoices.antArray;
		var prepSpiderChoices = insectChoices.spiderArray;
		var prepSnakeChoices = insectChoices.snakeArray;
		var prepPoisonousChoices = insectChoices.posionousArray;
		var prepLargestInsectChoices = insectChoices.largestInsectArray;
		
		var prepAntChoicesLength = insectChoices.antArray.length;
		var prepSpiderChoicesLength = insectChoices.spiderArray.length;
		var prepSnakeChoicesLength = insectChoices.snakeArray.length;
		var prepPoisonousChoicesLength = insectChoices.posionousArray.length;
		var prepLargestChoicesLength = insectChoices.largestInsectArray.length;
		
//		var array = duplicateInsectQuestions; // Don't think array length of question is needed. Just need the index number
		var imageOptions = 4;
		var choicesToLoad = [];
		var choicesToLoadLength = choicesToLoad.length;
		var imagesToLoad = [];
		var imagesToLoadLength = imagesToLoad.length;
		
		if(questionNumber === 0) {
			for(var i = 0; i < prepAntChoicesLength; i++) {
				choicesToLoad.push(prepAntChoices[i]);
				imagesToLoad.push(prepAntImages[i]);
				console.log(i + ' --- i value');
			}
			console.log(choicesToLoad);
			console.log(imagesToLoad);
			console.log(insectChoices.antArray.length)
			loadQuestion(imageOptions, choicesToLoad, choicesToLoadLength, imagesToLoad, imagesToLoadLength);
		}
		
	}
			
//	function loadQuestion(choicesToLoad, imagesToLoad, imageOptions, questionNumber) {
	function loadQuestion(io, ctl, ctll, itl, itll) {
		console.log(ctll);
		var linksToAppend = [];
		var prepLinkTags = '<li><span> </span></li>';
		var startIndex = 5;   //getNumber(0, ctll);

		if(startIndex > io) {
			var startIndex = (startIndex - io);
			var numLinks = (startIndex + io);

			for(var i = startIndex; i < numLinks; i++) {
			var $addUl = $('.active-question ul').append(prepLinkTags).appendTo('.active-question ul');
			var $addSpanText = $('.active-question span').last().text(ctl[i]);
			var $addLiImageStyle = $('.active-question li').last().css({'background-image': 'url('+itl[i]+')', 'background-size': 'cover'});
			var $addSpanStyle = $('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'});
				
				if(i === 0) {
						$addUl;
						$addSpanText;
						$addLiImageStyle;
						$addSpanStyle;
				} else if(i === 1) {
						$addUl;
						$addSpanText;
						$addLiImageStyle;
						$addSpanStyle;
				}	else if(i === 2) {
						$addUl;
						$addSpanText;
						$addLiImageStyle;
						$addSpanStyle;
				} else if(i === 3) {
						$addUl;
						$addSpanText;
						$addLiImageStyle;
						$addSpanStyle;
				} else {
						$addUl;
						$addSpanText;
						$addLiImageStyle;
						$addSpanStyle;
				}
			}
		}
			
	}	

			
//			
//		} else if(questionNumber === 2) {
//			var counter = 1;
//			for(var i = 0; i < duplicateInsectQuestions.length; i++) {
//				var propImage = insectImages.antImages; 
//				$('.active-question ul').append('<li>'+duplicateInsectQuestions[i]+'</li>');
//				$('.active-question ul li').addClass('option'+counter);
//				$('.option' + counter).css({'background-image': 'url(' + insectImages.antImages[i] + ')'});
//				counter++;
//			}  
//		} else if(questionNumber === 3) {
//			var counter = 1;
//			for(var i = 0; i < duplicateInsectQuestions.length; i++) {
//				var propImage = insectImages.antImages; 
//				$('.active-question ul').append('<li>'+duplicateInsectQuestions[i]+'</li>');
//				$('.active-question ul li').addClass('option'+counter);
//				$('.option' + counter).css({'background-image': 'url(' + insectImages.antImages[i] + ')'});
//				counter++;
//			}  
//		} else if(questionNumber === 4) {
//			var counter = 1;
//			for(var i = 0; i < duplicateInsectQuestions.length; i++) {
//				var propImage = insectImages.antImages; 
//				$('.active-question ul').append('<li>'+duplicateInsectQuestions[i]+'</li>');
//				$('.active-question ul li').addClass('option'+counter);
//				$('.option' + counter).css({'background-image': 'url(' + insectImages.antImages[i] + ')'});
//				counter++;
//			}  
//		}
		
		
		
		
//		d.splice(questionNumber, 1);
//		console.log(d + " ---- inside array");
//		console.log(questionNumber + " ---- question number")
//		return d;
//	}

//	function loadImages() {
//		console.log(questionNumber + " --- in load images"); 
//	}

	
})











	function isAnswerCorrect() {}
	
	function gameSummary() {}
	
	function updateGame() {}
	