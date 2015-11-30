---
layout: post
title:  "Logic Exercises"
date:   2015-11-28 19:45:16 -0500
categories: javascript

description: A collection of ten logic exercises with solutions in Javascript.
---

I found these exercises perusing the [introduction pdf][pdf] from [Learn.Modern Developer][learn], a programming academy brought to you from the guy behind [Javascript Is Sexy][jis]. Keep in mind that the following solutions are the first thing that came to my mind and are not necessarily the best or easiest solution for the exercise.

### Exercise 1
Write a function *findLongestWord()* that takes an array of words and returns the length of the longest word.

So my initial thought is to go through each word in the array and note its length. If I find a longer word then I'll store its length.

{% highlight js %}
function findLongestWord(arrayOfWords) {
  var longestLength = 0;
  for (var i = 0; i < arrayOfWords.length; i++) {
    var currentLength = arrayOfWords[i].length;
    longestLength = currentLength > longestLength ? currentLength : longestLength; 
  }
  return longestLength;
}
{% endhighlight %}

### Exercise 2
Define a function *sum()* and a function *multiply()* that sums and multiplies, respectively, all the numbers in an array of numbers. For example, *sum([1,2,3,4])* should return *10*, and *multiply([1,2,3,4])* should return *24*.

For this one, my initial thought is just to keep a running total and iterate through the array. Easy enough so here it goes.

{% highlight js %}
function sum(arrayOfNums) {
  var sum = 0;
  for (var i = 0; i < arrayOfNums.length; i++) {
    sum += arrayOfNums[i];
  }
  return sum;
}

function multiply(arrayOfNums) {
  var product = 0;
  for (var i = 0; i < arrayOfNums.length; i++) {
    product *= arrayOfNums[i];
  }
  return product;
}
{% endhighlight %}

### Exercise 3
Create an expression using both Math.random and Math.floor to generate a random integer between two variables, high and low, where high is greater than low.

Heyy, finally some math! I decided to say fuck tests and write my own mathematical proof for this one.

Suppose we're given two natural numbers $H$ and $L$ where $H > L$. Notice that this implies $H - L > 0$. Since the rational numbers $\mathbb{R}$ are dense, there exists a rational number $y$ such that $L < y < H$. Our goal is to find this $y$.

Let $x$ be the rational number returned by *Math.Random()*. We know that $0 < x < 1$ by documentation. So then the product of $x$ and $H - L$ gives us a rational number $a$ such that $0 < a < H - L$.

Now, by documentation, *Math.floor()* returns the largest integer less than the given rational number. 

### Exercise 4
Write a function named evaluateExpression(), that takes three arguments: two operands and an operator, and returns the number that results from applying the operator to the operands. For example: evaluateExpression(5, 7, ‘+’).

### Exercise 5
Write a JavaScript program that accepts a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

### Exercise 6
Write a JavaScript program that accepts a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

### Exercise 7
Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.[ Formula : c/5 = f-32/9 [ where c = temperature in celsius and f = temperature in fahrenheit ] Expected Output : 60°C is 140 °F 45°F is 7.222222222222222°C

### Exercise 8
Write a JavaScript program to find the most frequent item of an array. Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; Sample Output : a ( 5 times ).

### Exercise 9
Write a JavaScript function to remove specified number of characters from a string. Test Data : console.log(truncate_string("Robin Singh”,4)); "Robi"

### Exercise 10
Complete the first thirteen programing challenges at [http://coderbyte.com/CodingArea/Challenges/](http://coderbyte.com/CodingArea/Challenges/)


[pdf]: https://learn.modern-developer.com/IntroToJavaScript_and_ModernWebDevelopment.pdf
[learn]:   https://learn.modern-developer.com/
[jis]: https://javascriptissexy.com/
