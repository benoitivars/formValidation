# Form validation

Great ! You got here !!!

We're gonna do some validation on a register form.

Here are some instructions :

You form should ask for :
username
email
password
confirmation of password
It should also have a button to submit the form.
Make it pretty ! Some styling in css will help. (That's a good opportunity to familiarize yourself with the styling of form inputs. It can be quite frustrating sometimes :()
Below each input, put a paragraph with class "msg". These paragraphs should only appear if there is an error or success on submit.
On submit, the text of a successful input should be green and red if there is an error.
The message should say something like : Must be at least 5 characters etc.
The validation should be as follow :
username must be only lowercase and at least 5 characters and at most 10 characters.
email should be a valid email adress (go learn about the concept of regex and find on google a regex that tests if a string is in a correct email format. Use the match method to test a string against a regex.)
password should be at least 8 characters and at most 15 characters.
password confirmation should be the same as password
After all the tests passed and everything is green, when you submit, the input values should be logged to the console.