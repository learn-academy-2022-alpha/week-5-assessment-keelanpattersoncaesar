# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is a block in Ruby?

  Your answer: A block is basically just Ruby's version of a function. 

  Researched answer: Blocks are just anonymous functions in Ruby. They have always have a 'do' AND an 'end' OR a set of { curly braces }. They can be passed into methods and can have multiple arguments. Parameters are passed through a set of | pipes | after the 'do'. You can also use built-in methods on blocks (for example, .each can be ran on an array of numbers).



2. What is a gem?

  Your answer: A gem is a collection of files that is used to install apps and dependencies that can be used and built upon with Ruby. Basically, it allows the developer to customize their Ruby experience

  Researched answer: A ruby gem is a collection of files that add a lot of functionality to Ruby. Technically, you can just write the code and custom methods into your program yourself, but gems are an easier way to implement them. For example, Rails is a ruby gem. Another popular gem is devise; it seamlessly implements an authentication solution (think sign-in, sign-out) to your program or website. 



3. What is Ruby on Rails?

  Your answer: Ruby on Rails is a Ruby-like language that allows developers to easily make queries and interact with relational databases. It is a very sensitive language that likes to be in control of all changes in the db. For example, something as simple as changing the name of a file needs to be done through the rails console; doing it another way will more than likely break your application and require you to start over.

  Researched answer: Ruby on Rails is a gem. Rails is a server-side fullstack web development tool that is used to facilitate queries and commands between Ruby and the backend database. Rails uses the MvC (model view controller) framework to interact with the user and update data on the fly. 



4. What is a relational database? Are there other kinds of databases?

  Your answer: I have never heard of a relational database. Time to do some research.

  Researched answer: A relational database is a collection of data items that have relationships which have been established in advance. In relational databases, data is usually stored in multiple tables and or columns and usually relies on SQL to perform queries on it. Other types of databases include NoSQL databases (doesn't use SQL toa access data), wide column databases, object oriented databases, key-value data bases, and more.



5. What are primary keys? Why are they important?

  Your answer: A primary key is the UNIQUE value that is assigned to each database entry. This allows a database to carry multiple entries that have the same value and, at the same time, allows each other those entries to be discovered individually by calling upon their primary key.

  Researched answer: Just as I explained before, a primary key is a unique value used to identify each entry in a database entry. Primary keys cannot be shared between different entries. They cannot contain null values and every entry MUST have a primary key.



## Looking Ahead: Terms for Next Week
Research and define the following terms to the best of your ability.

1. RESTful routes: A restful route provides mapping between HTTP verbs (GET, POST, PUT, etc), controllers, CRUD operations when dealing with database entries.

2. JSON: Stands for JavaScript Object Notation; It is used for storing and transporting data when sending data from a server to a webpage

3. ERB: Stands for eRuby; simply just a template that embeds Ruby into a text file

4. Params: An alias of the parameters method; Allows us to pass a value to the controller, makes your code more dynamic

5. API: Stands for Application Programming Interface; Basically, the API is the connection between the server and the enduser's device. The API is what takes commands from the enduser, sends and gives direction to the server, then returns the result back to the enduser
