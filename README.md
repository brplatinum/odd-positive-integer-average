# Odd Positive Integer Average

This is a boilerplate project setup for students to setup an express server that exposes a POST endpoint `/odd-positive-average`. The endpoint is pretty self explanatory as it receives a given array of integers and returns the average of only the positive odd integers.

## Expected interfaces

The server is to handle requests using Content-Type `application/json`.

#### Input

You can expect request payloads to be in the following format.

```
[ <number array> ]
```

#### Output

Server responses are expected to adhere to the following format.

```
{
  "average": <number>
}
```

## Note

- This should be done using Typescript.
- This can be completed in many different ways. But for **YOUR** benefit using ES6 array functions would be best.
- You should write unit tests.
