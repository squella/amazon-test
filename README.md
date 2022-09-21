# Amazon tests
### Table of contents

- [Amazon tests](#amazon-tests)
    - [Table of contents](#table-of-contents)
  - [Description](#description)
    - [Organization](#organization)
  - [Prerequisites](#prerequisites)
  - [How to use](#how-to-use)
    - [Screenplay pattern diagram](#screenplay-pattern-diagram)
    - [Instalation](#instalation)
    - [Run test cases](#run-test-cases)
    - [Docker execution](#docker-execution)
  - [References](#references)

---
## Description

Acceptance testing with Cucumber and Playwright. The base of framework is built with Typscript programming language and Gherkin.

### Organization

 | Path | Description |
| :--- | :---: |
| data | It is where we will put all the data that we will need to execute the test cases such as payload, headers, etc. |
| facts| It is where we will put all the classes that we will need to initialize the execute of the test cases, we can say that it is associated with Given step|
|features | Features is the place where we will keep all our user stories written in Gherkins |
|interactions | It is where we will put all the classes related with the interactions with the SUT, such as navigating to websites, clicking buttons, entering values in form fields, or submitting HTTP requests to a REST API. This series of actions are composite a results in a facts, task or questions|
| questions | It is where we will put all the classes to check that the task was successful, we can say that it is associated with the Then step. Questions will consist of a series of interactions|
|selectos | It is where we will put all the selectors that we will need to localize some element like button, menu, etc|
|steps-definitions | The step definitions is where we will put all our steps that are written in the Features section |
| task | It is where we will put all the classes related with the business goal, I mean, with the action that i will do in the execute of the test case, we can say that it is associated with When step. Tasks will consist of a series of interactions|


## Prerequisites

You’ll need Node.js installed. Install at least v16.10.0 or higher as this is the oldest active LTS version.

--- 

## How to use 


### Screenplay pattern diagram

![image](https://drive.google.com/file/d/1vmdSq9QnPjPlLsi_L-o4nEXVRz6KW4BS/view?usp=sharing)



### Instalation
To install the framework, you must follow the following steps:   

1. ``` 
    git clone https://github.com/Gamestry1/website-qa.git
2. ```
    npm install
    
### Run test cases 

Now, time to run your tests!, but after all with need choose the device, for to do that we need to export as environment variables like:

``` 
    export DEVICE="Desktop Chrome" or "iPhone 12" or "Galaxy S8" and so on
```
more info about of [devices](https://playwright.dev/docs/emulation)

Now we are ready to run the tests, to do so, just run:
```
npm test
```

### Docker execution

we have to build the docker image and then we can create the containers with the different devices passed as a parameter when building the container, example:

1. ``` 
   docker build . -t test
2. ```
   docker run -it -e DEVICE="Galaxy S8" --name Galaxy_S8 test npm test
## References

[Playwright](https://playwright.dev/)