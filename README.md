# Getting Started with Fibonacci Api

## Requirements

- [Node JS](https://nodejs.org/)

## Steps to run the project

1. Run `npm install` in the root project folder.
2. Then, run `npm start`.
3. Finally open [http://localhost:3000](http://localhost:3000) in your browser.

## How to use it

Add `/n` to the URL string, where `n` returns the Fibonacci value that corresponds to the given index.

Example where n is 6: [http://localhost:3000/6](http://localhost:3000/6)

# Notes

I decided to add the .env file configuration in the project, it could be used in the future.

Although the project is still small, I decided to separate it into folders for better scalability.

In this project a validation could be implemented to verify that the input is a valid number, if the number is not valid handle errors in a proper and user-friendly way.