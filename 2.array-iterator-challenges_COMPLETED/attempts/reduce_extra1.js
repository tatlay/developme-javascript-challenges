// Write a reduce function that returns the longest word:

['apple', 'cat', 'computer'] // 'computer'
['the', 'a', 'I'] // 'the'

// Write a reduce function that returns the shortest word

['apple', 'cat', 'computer'] // 'cat'
['the', 'a', 'I'] // 'a'

// N.B. make sure if there is more than one word of the same length that you return the first instance

// Write a reduce function that returns an object
// The object should be in this format:

{
	high: [],
	low: [],
}

// It should contain two keys, high and low, which contain arrays. If a number is higher than 5, put it in 'high', and if it is lower, put it in 'low'. If it is 5, don't put it in either.

[1, 5, 7, 6, 4, 8, 8, 7] 
// {
// 	high: [7, 6, 8, 8, 7],
//	low: [1, 4],
// }
