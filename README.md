# Odd Positive Integer Average

This project exposes exposes a POST endpoint at /odd-positive-average using a REST API that accepts an array of integers and returns the average of the odd, positive elements of the array.

## Expected interfaces

The server handles requests using Content-Type `application/json`.

#### Input

You can expect request payloads to be in the following format.

```
[ <number array> ]
```

It is expected to validate the input as accepting integers only. If this is not the case then the server should respond with a 400 status code.

#### Output

For a valid request the server is expected to return the following format.

```
{
  "average": <number>
}
```

If the validation fails, then the server is to response with status code 400 and JSON structure below.

```
{
  "message": "<message about what caused error>"
}
```

## Why

- This project was created in order to improve both my Typescript skills and also to learn about how to build and how to use REST APIs.
- This project is also designed to be hosted on Heroku so it also acts as a learning tool for Heroku deployment.

> "Seek not to complete the problem - instead seek to understand the code you are writing and why it is necessary" - B Turner
