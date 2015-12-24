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

		
//					poisonousImages: ['http://www.conservationinstitute.org/wp-content/uploads/2013/09/Box-Jellyfish-David-Lambert-Flickr.jpg', 'http://cdn4.sci-news.com/images/2013/12/image_1595_1-King-cobra.jpg', 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2015/06/150623_WILD_Octopus.jpg.CROP.promo-mediumlarge.jpg', 'http://www.factzoo.com/sites/all/img/invertebrates/arachnid/yellow-isreali-scorpion.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Brazilizn-Wandering-Spider-Andreas-Kay-Flickr.jpg', 'http://www.conservationinstitute.org/wp-content/uploads/2013/09/Puffer-Fish-LisaSabin-Wilson-Flickr.jpg', 'http://www.slate.com/content/dam/slate/articles/health_and_science/wild_things/2015/06/150623_WILD_Octopus.jpg.CROP.promo-mediumlarge.jpg']
// -------- END QUESTIONS AND ANSWERS -------- //
	
	var score = 0;	
	var duplicateInsectQuestions = []; 	// getting copy of insect question array

	newGame();

	
	function newGame() {
		
		$('.information-header').on('click', function() {
			
		})
		
		$('.question-container .submit').on('click', function() {
//			getInsectQuestions();
			getQuestion();
		})
		
	}
	
	
	function getNumber(min, max) { // getting random number to use for question index 
		return Math.floor(Math.random() * (max - min)) + min;
	}
	
	
//	function getInsectQuestions() {	
//		var prepInsectQuestionLength = insectQuestions.length;
//		
//		for (var i = 0; i < prepInsectQuestionLength; ) {
//				duplicateInsectQuestions = insectQuestions;
//				i++;
//			}
//		return duplicateInsectQuestions;
//	}
	

	function getQuestion() { 
		
		var prepInsectQuestions = insectQuestions;
		
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


		var gameQuestionsLength = prepInsectQuestions.length;
		var useThisQuestionNumber = selectQuestion(gameQuestionsLength);  // instantiating the questionNumber function to get random question number
	
		console.log(useThisQuestionNumber + ' -- use this question number');  // NEED A FUNCTION -- WILL NEED TO REMOVE THE INDEX NUMBER OF THE QUESTION ONLY -- ONCE IT HAS BEEN USED.		
		
		if(useThisQuestionNumber === 0 || useThisQuestionNumber === 1 || useThisQuestionNumber === 2 || useThisQuestionNumber === 3 || useThisQuestionNumber === 4) {
			var imageOptions = 4;
			var gameQuestions = [];
			var imagesToLoad = [];
			var choicesToLoad = [];
			var choicesToLoadLength = choicesToLoad.length;
			var imagesToLoadLength = imagesToLoad.length;
			if(useThisQuestionNumber === 0) { 
				for(var i = 0; i < prepAntChoicesLength; i++) {
					choicesToLoad.push(prepAntChoices[i]);
					imagesToLoad.push(prepAntImages[i]);
					gameQuestions.push(prepInsectQuestions[i]);
				}
			}
			if(useThisQuestionNumber === 1) { 
				for(var i = 0; i < prepSpiderChoicesLength; i++) {
					choicesToLoad.push(prepSpiderChoices[i]);
					imagesToLoad.push(prepSpiderImages[i]);
					gameQuestions.push(prepInsectQuestions[i]);
				}
			}
			if(useThisQuestionNumber === 2) { 
				for(var i = 0; i < prepSnakeChoicesLength; i++) {
					choicesToLoad.push(prepSnakeChoices[i]);
					imagesToLoad.push(prepSnakeImages[i]);
					gameQuestions.push(prepInsectQuestions[i]);
				}
			}
			if(useThisQuestionNumber === 3) { 
				for(var i = 0; i < prepPoisonousChoicesLength; i++) {
					choicesToLoad.push(prepPoisonousChoices[i]);
					imagesToLoad.push(prepPoisonousImages[i]);
					gameQuestions.push(prepInsectQuestions[i]);
				}
			}
			if(useThisQuestionNumber === 4) { 
				for(var i = 0; i < prepLargestChoicesLength; i++) {
					choicesToLoad.push(prepLargestInsectChoices[i]);
					imagesToLoad.push(prepLargestInsectImages[i]);
					gameQuestions.push(prepInsectQuestions[i]);
				}
			}
			console.log(gameQuestions + ' -- game questions')
			
			$('.question-container h2').text(gameQuestions[useThisQuestionNumber]); // display current question	
			loadQuestion(imageOptions, choicesToLoad, choicesToLoadLength, imagesToLoad, imagesToLoadLength, useThisQuestionNumber);
		}
		
	}
	
	function selectQuestion(gql) {
		var randomQuestionNumber = getNumber(0, gql);
//		console.log(randomQuestionNumber + ' --- in select question');
		
		return randomQuestionNumber;	
	}


	function loadQuestion(io, ctl, ctll, itl, itll, utqn) {  //	function loadQuestion(choicesToLoad, imagesToLoad, imageOptions, questionNumber)
		
		var prepLinkTags = '<li><span> </span></li>';
//		var startIndex = utqn; Deactivate to test 0 index
		var startIndex = 0;
		var linkIndexForCorrectAnswer = getNumber(0, 4);

		if(startIndex >= io) { // 1 > 4 -- false 
			
			console.log(startIndex + '---- First "IF" start index at top !!!!!!!!');
			
			var numLinks = (startIndex + io); // 1 + 4 = 5
			var start = startIndex; // 7
			var stop = start - 3; // 7 - 4 = 3 
														// 7 < 11 
			for(var i = start; i < numLinks; i--) {
				var $addUl = $('.active-question ul').append(prepLinkTags); //.appendTo('.active-question ul'); // SETTING VARIABLES; HAVE TO BE PRIVATE TO THE LOOP. OTHERWISE THE 'ITERATOR' DOESN'T REGISTER DYNAMICALLY.
				var $addSpanText = $('.active-question span').last().text(ctl[i]); // ADDING TEXT TO THE LAST LINK CREATED.
				var $addLiImageStyle = $('.active-question li').last().css({'background-image': 'url('+itl[i]+')', 'background-size': 'cover'}); // APPLYING CSS TO NEW LINNK ELEMENT
				var $addSpanStyle = $('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS TO NEW SPAN ELEMENT

				if (i === stop ) {
					
					if (linkIndexForCorrectAnswer < 5) { // WHEN I CREATE THE VARIABLES BELOW, IS IT AUTOMATICALLY REPLACING ONE OF THE ACTIVE LINK TAGS?
						var $addCorrectImage = $('.active-question span').eq(linkIndexForCorrectAnswer).text(ctl[0]); // REPLACING TEXT WITH CORRECT ANSWER
						var $addLiImageStyle = $('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+itl[0]+')', 'background-size': 'cover'}); // APPLYING CSS STYLES

						return;
					}
				} else {
					$addUl;
					$addSpanText;
					$addLiImageStyle;
					$addSpanStyle; 
				}
			} // END 1ST FOR LOOP
			return;
		} // END OF 1ST "IF" STATEMENT
		
		if (startIndex < io && startIndex >= 1) { // 1 < 4 -- true
			var stop = startIndex + 3; // 1 + 3 = 4  // SETTING STOP INDEX FOR LOOP
			
//			console.log(startIndex + ' ----- Second "IF" Start INDEX # at bottom')
//			console.log(start + ' ----- Second "IF" **** START ***  # at bottom')
											//	1 < 6 // LOOP IS TO INTERATE FOUR TIMES 1, 2, 3
			for(var start = startIndex; start <= stop ; start++) {
//				console.log (start + ' ---- Stop Starting Index Value')
					// 0        (0 + 3) + 1 = 4;
				if(start === (stop + 1)) {  // WHEN TRUE, STOPS LOOP -- PUT CORRECT ANSWER INTO ONE OF THE CLICKABLE LINKS
					console.log(' Second inner if true -- top');
					$('.active-question ul').append(prepLinkTags);
					$('.active-question span').eq(linkIndexForCorrectAnswer).text(ctl[0]); // REPLACING TEXT WITH CORRECT ANSWER
					$('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+itl[0]+')', 'background-size': 'cover'});
					$('.active-question span').eq(linkIndexForCorrectAnswer).css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS STYLES
					console.log(' Second inner if true -- bottom');
					return;
				}
				
				$('.active-question ul').append(prepLinkTags); //.appendTo('.active-question ul'); // SETTING VARIABLES; HAVE TO BE PRIVATE TO THE LOOP. OTHERWISE THE 'ITERATOR' DOESN'T REGISTER DYNAMICALLY.				
				$('.active-question span').last().text(ctl[start-1]); // ADDING TEXT TO THE LAST LINK CREATED.
				$('.active-question li').last().css({'background-image': 'url('+itl[start-1]+')', 'background-size': 'cover'}); // APPLYING CSS TO NEW LINNK ELEMENT
				$('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS TO NEW SPAN ELEMENT
			} // END 2ND / CATCH LOOP
		} // END OF 2ND "IF" STATEMENT
		
		if (startIndex === 0) { // 1 < 4 -- true
			var stop = startIndex + 4; // 1 + 3 = 4  // SETTING STOP INDEX FOR LOOP
			console.log(startIndex + ' ----- THIRD "IF" Start INDEX # at bottom')
	
			for(var start = startIndex; start <= stop ; start++) {
				console.log (start + ' ---- THIRD START Starting Index Value')
				
				if(start < stop) {
					console.log(' Third inner if true -- top');
					
					$('.active-question ul').append(prepLinkTags);
					$('.active-question span').last().text(ctl[start + 1]); // ADDING TEXT TO THE LAST LINK CREATED.
					$('.active-question li').last().css({'background-image': 'url('+itl[start + 1]+')', 'background-size': 'cover'}); // APPLYING CSS TO NEW LINNK ELEMENT
					$('.active-question span').last().css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS TO NEW SPAN ELEMENT
				} else if (stop) {
//					$('.active-question ul').append(prepLinkTags);
					$('.active-question span').eq(linkIndexForCorrectAnswer).text(ctl[0]); // REPLACING TEXT WITH CORRECT ANSWER
					$('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+itl[0]+')', 'background-size': 'cover'});
					$('.active-question span').eq(linkIndexForCorrectAnswer).css({'background': 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5))'}); // APPLYING CSS STYLES
					console.log(' Third inner if true -- bottom');
				} 
			} // END 3RD / CATCH LOOP
		} // END OF 3RD "IF" STATEMENT
		
	}	// END OF "LOAD QUESTION" FUNCTION

	function setIndexIfZero(si) {
		 if(si === 0) {
			 si = -1;
			 return si;
		 } else {
			return si; 
		 }	
	}

	
	
})

					
//					if(i === 0) { // IF TRUE, STOPS LOOP AND PREVENTS CORRECT IMAGE FROM SHOWING DUPLICATES
//						$addUl; 
//						$addSpanText;
//						$addLiImageStyle;
//						$addSpanStyle;
//						return;
					
//						var $addCorrectImage = $('.active-question span').eq(linkIndexForCorrectAnswer).text(ctl[0]); // REPLACING TEXT WITH CORRECT ANSWER
//						var $addLiImageStyle = $('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+itl[0]+')', 'background-size': 'cover'}); // APPLYING CSS STYLES
//						return;
//						} 
//					else {  // I don't understand how the below adds correct answer without first removing the link
//						var $addCorrectImage = $('.active-question span').eq(linkIndexForCorrectAnswer).text(ctl[0]); // REPLACING TEXT WITH CORRECT ANSWER
//						var $addLiImageStyle = $('.active-question li').eq(linkIndexForCorrectAnswer).css({'background-image': 'url('+itl[0]+')', 'background-size': 'cover'}); // APPLYING CSS STYLES
//						return;








	function isAnswerCorrect() {}
	
	function gameSummary() {}
	
	function updateGame() {}
	