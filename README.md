# revium-assestment

In this readme I will write all the informations regarding the development process.

I will use bootstrap and react-bootstrap packages to create the UI.

-Downgrade bootstrap and react-bootstrap to:
"bootstrap": "^4.5.3",
"react-bootstrap": "^1.3.0",
because of a UI bug in the slide change in the react-bootstrap Carousel component.
More informations about the bug at:
https://github.com/react-bootstrap/react-bootstrap/issues/5143

-React-bootstrap responsive Nav logs a Warning in console when it's opened or closed:
"findDOMNode is deprecated in StrictMode.".
On StackOverflow I've read that it's a common issue and can be fixed by setting the opening/closing animation to "false", but this solution seemed not to work on my project.
I implemented a little feature on the header to improve the UX: it shows/hide the Header depending on the scroll direction.
To do this I had to override a couple of default behaviours of react-bootstrap responsive Nav and by overriding these dafault behaviours I've also removed the warning. #serendipity 😃

-It wasn't requested but I've added a Logo component to simulate the behaviour of a brand logo in the header.
