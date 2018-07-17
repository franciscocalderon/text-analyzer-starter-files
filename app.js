// your code here!
var getTokens = function(fullText){
	return fullText.toLowerCase().split(/[\n ,!.";:-]+/).filter(Boolean).sort();
}

var countWords = function(tokens){
	var wordMap = {};
	tokens.forEach(function(token){
		if(typeof wordMap[token] === 'number')
			wordMap[token]++;
		else
			wordMap[token] = 1;
	});
	return wordMap;
}

var getCharCount = function(wordMap){
	var totalChars = 0;
	Object.keys(wordMap).forEach(function(word){
		totalChars += wordMap[word]*word.length;
	});
	return totalChars;
}

var analyzeHandler = function(){
	$(".js-analyze-form").submit(function(event){
		event.preventDefault();
		var words = getTokens($('textarea#user-text').val());
		var wordMap = countWords(words);
		$(".text-report").removeClass('hidden');
		$(".js-total-words").text(words.length);
		console.log(words);
		$(".js-unique-words").text(Object.keys(wordMap).length);
		$(".js-word-length").text((getCharCount(wordMap)/words.length).toFixed(2));
		console.log(getCharCount(wordMap));
	});
}

$(analyzeHandler);