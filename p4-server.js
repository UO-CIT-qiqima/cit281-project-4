/*
    CIT 281 Project 4
    Name: Qiqi Ma
*/

const {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
    addQuestionAnswer
} = require('./p4-module.js');

const fastify = require("fastify")();
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});

fastify.get("/cit/question", function (request, reply) {
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "questions": getQuestions(),
    }); 
  });

  fastify.get("/cit/answer", function (request, reply) {
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "answers": getAnswers(),
    }); 
  });

  fastify.get("/cit/questionanswer", function (request, reply) {
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "questions_answers": getQuestionsAnswers(),
    })
  });

  fastify.get("/cit/question/:number", function (request, reply) {
    const {number} = request.params;
    let response = request.params.number
    console.log(request.params);
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "question": getQuestion(response),
    }); 
  });

  fastify.get("/cit/answer/:number", function (request, reply) {
    const {number} = request.params;
    let response = request.params.number
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "question": getAnswer(response),
    }); 
  });

  fastify.get("/cit/questionanswer/:number", function (request, reply) {
    const {number} = request.params;
    let response = request.params.number
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 200,
        "question": getQuestionAnswer(response),
    }); 
  });

  fastify.get("*", function (request, reply) {
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "Route not found",
        "statusCode": 404
    }); 
  });

  fastify.post("/cit/question", function (request, reply) {
    const {} = request.body; //{question: "Q4", answer: "A4"}
    let response = request.body
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 201,
        "number": addQuestionAnswer().length + 1,
    }); 
  });

  fastify.put("/cit/question", function (request, reply) {
    const {question, answer} = request.body; //{question: "Q4", answer: "A4"}
    let response = request.body
    reply
      .code(200) 
      .header("Content-Type", "application/json; charset=utf-8") 
      .send({
        "error": "",
        "statusCode": 201,
        "number": 1,
    }); 
  });