// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hyper Text Markup Language",
    options: [
      "Hyper Text Preprocessor",
      "Hyper Text Markup Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language"
    ]
  },
    {
    numb: 2,
    question: "Which of the following element is responsible for making the text bold in HTML?",
    answer: "br",
    options: [
      "pre ",
      "a",
      "b",
      "br"
    ]
  },
  {
    numb: 3,
    question: "Which of the following tag is used for inserting the largest heading in HTML?",
    answer: "h1",
    options: [
      "h3",
      "h1",
      "h5",
      "h6"
    ]
  },
  {
    numb: 4,
    question: " Which of the following tag is used to insert a line-break in HTML?",
    answer: "br",
    options: [
      "br",
      "a",
      "pre",
      "b"
    ]
  },
  {
    numb: 5,
    question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
    answer: "ul",
    options: [
      "ul",
      "ol",
      "li",
      "i"
    ]
  },
  {
    numb: 6,
    question: "Which of the following element is responsible for making the text italic in HTML?",
    answer: "i",
    options: [
      "italic",
      "it",
      "i",
      "pre"
    ]
  },
  {
    numb: 7,
    question: "input tag is -",
    answer: "an empty tag.",
    options: [
      "a format tag",
      "an empty tag.",
      "all the above ",
      "none of the above"
    ]
  },
  {
    numb: 8,
    question: "Which of the following tag is used to define options in a drop-down selection list?",
    answer: "option",
    options: [
      "select",
      "list",
      "dropdown",
      "option"
    ]
  },
  {
    numb: 9,
    question: "What are the types of unordered or bulleted list in HTML?",
    answer: "disc, circle, square",
    options: [
      "disc, square, triangle",
      "polygon, triangle, circle",
      "disc, circle, square",
      "All the above"
    ]
  },
  {
    numb: 10,
    question: "Which HTML tag is used to define strike a line through deleted text?",
    answer: "del",
    options: [
      "delete",
      "del",
      "deleted",
      "through"
    ]
  },
  {
    numb: 11,
    question: "If we want define style for an unique element, then which css selector will we use ?",
    answer: "Id",
    options: [
      "Id",
      "Text",
      "Class",
      "Name"
    ]
  },
  {
    numb: 12,
    question: "If we don't want to allow a floating div to the left side of an element, which css property will we use ?",
    answer: "clear",
    options: [
      "margin",
      "clear",
      "float",
      "padding"
    ]
  },
  {
    numb: 13,
    question: "Suppose we want to arragnge five nos. of DIVs so that DIV4 is placed above DIV1. Now, which css property will we use to control the order of stack?",
    answer: "z-index",
    options: [
      "d-index",
      "s-index",
      "x-index",
      "z-index"
    ]
  },
  {
    numb: 14,
    question: "If we want to wrap a block of text around an image, which css property will we use ?",
    answer: "float",
    options: [
      "wrap",
      "push",
      "float",
      "align"
    ]
  },
  {
    numb: 15,
    question: "If we want to show an Arrow as cursor, then which value we will use ?",
    answer: "default",
    options: [
      "pointer",
      "default",
      "arrow",
      "arr"
    ]
  },
  {
    numb: 16,
    question: "If we want to use a nice looking green dotted border around an image, which css property will we use?",
    answer: "border-style",
    options: [
      "border-color",
      "border-decoration",
      "border-style",
      "border-line"
    ]
  },
  {
    numb: 17,
    question: "Which of the following properties will we use to display border around a cell without any content ?",
    answer: "empty-cell",
    options: [
      "empty-cell",
      "blank-cell",
      "noncontent-cell",
      "void-cell"
    ]
  },
  {
    numb: 18,
    question: "Which element is used in the <HEAD> section on an HTML / XHTMLpage, if we want to use an external style sheet file to decorate the page ?",
    answer: "link>",
    options: [
      "src",
      "link",
      "style",
      "css"
    ]
  },
  {
    numb: 19,
    question: "Which attribute can be added to many HTML / XHTML elements to identify them as a member of a specific group ?",
    answer: "class",
    options: [
      "id",
      "div",
      "class",
      "span"
    ]
  },
  {
    numb: 20,
    question: "The default value of position attribute is _________.",
    answer: "relaive",
    options: [
      "fixed",
      "absolute",
      "inherit",
      "relative"
    ]
  },
  {
    numb: 21,
    question: "JavaScript is ______",
    answer: "scripting language",
    options: [
      "application language",
      "programming language",
      "scripting language",
      "both A and B"
    ]
  },
  {
    numb: 22,
    question: "An extension to HTML that can enclose any number of JavaScript statements",
    answer: "script",
    options: [
      "title",
      "head",
      "body",
      "script"
    ]
  },
  {
    numb:23 ,
    question: "What type of image map could be used with Java Script?",
    answer: "client-side image maps",
    options: [
      "server-side image map",
      "Localhost image maps",
      "client-side image maps",
      "None of the above"
    ]
  },
  {
    numb: 24,
    question: "Syntax of a blur method in a button object",
    answer: "Blur()",
    options: [
      "Blur()",
      "Blur(contrast)",
      "Blur(depth)",
      "Blur(value)"
    ]
  },
  {
    numb: 25,
    question: "Which of the following is correct about features of JavaScript?",
    answer: "Designed for creating network-centric applications.",
    options: [
      "Complementary to and integrated with Java.",
      "Designed for creating network-centric applications.",
      "Lightweight, interpreted programming language",
      "All the above"
    ]
  },
  {
    numb: 26,
    question: "Executable single line of Script is called as _______",
    answer: "Statement in JavaScript",
    options: [
      "Statement in JavaScript",
      "Line in JavaScript",
      "Breakpoint in JavaScript",
      "Both A & B"
    ]
  },
  {
    numb: 27,
    question: "The function and  var are known as:",
    answer: "Declaration statements",
    options: [
      "Data Types",
      "Keywords",
      "Declaration statements",
      "Prototypes"
    ]
  },
  {
    numb: 28,
    question: "How to write an if else statement in javascript?",
    answer: "condition if is true or else is false",
    options: [
      "condition if is true or else is false",
      "condition if is false or else is true",
      "condition .js is true",
      "None of the above"
    ]
  },
  {
    numb: 29,
    question: "When interpreter encounters an empty statements, what it will do:",
    answer: "Ignores the statements",
    options: [
      "shows a warning",
      "prompts to complete the statement",
      "throws an error",
      "Ignores the ststement"
    ]
  },
  {
    numb: 30,
    question: "_______ keyword is used to declare variables in",
    answer: "var",
    options: [
      "var",
      "Dim",
      "string",
      "All the above"
    ]
  },
  
    
  // you can uncomment the below codes and make duplicate as more as you want to add question
  // but remember you need to give the numb value serialize like 1,2,3,5,6,7,8,9.....
  //   {
  //   numb: 6,
  //   question: "Your Question is Here",
  //   answer: "Correct answer of the question is here",
  //   options: [
  //     "Option 1",
  //     "option 2",
  //     "option 3",
  //     "option 4"
  //   ]
  // },
];