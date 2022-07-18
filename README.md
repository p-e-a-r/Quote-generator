
# Quote generator

## Demo



https://user-images.githubusercontent.com/107425698/179558239-d1941ad7-c149-4f64-84f7-af4b234a51fa.mp4






## Features

- Quote api fetch
- textContent change based on quote
- Button glow and press effect





## Lessons Learned

I learned how to fetch API in basic application and what's an async function. 
There's a .then(response) and .catch(error) to handle both events of resolving the promise and not.
I learned that you can't access fetch data globally as it is asynchronous function and returns a response. You have to do all operations inside .then()
If you want, you can use multiple .then() to handle multiple operations. They stack.
Apparently using async, await keywords is the best practice.

I also added an if statement to only pass short quotes.

Obviously there's many more complex opperations and iterations of fetching an API but that's the basics.

I learned that changing textContent is faster than innerHTML as you don't reload the content.
## Acknowledgements

 - FrontEndMentor.io
 
