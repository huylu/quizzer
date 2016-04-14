export default [
  {
    name: 'Learning OWASP Top 10',
    description: 'This quiz is about online testing for OWASP TOp 10',
    id: 'fb92c451-eaf3-4995-bc29-f97efdd335a6',
    questions: [
      {
        id: 1,
        content: 'A user is able to pass malicious input that invokes control codes in your Web application. Which vulnerability is most likely to occur in your Web application?',
        type: 1, // single choice
        correct_answer: '',
        answers: [
          {
            id: 2,
            content: 'Injection'
          },
          {
            id: 3,
            content: 'Insecure direct object references'
          },
          {
            id: 4,
            content: 'Failure to restrict URL access'
          },
          {
            id: 5,
            content: 'Insufficient transport layer protection'
          }
        ]
      },
      {
        id: 6,
        content: 'Which of the following languages are the primary targets of cross-site scripting?',
        type: 1, // single choice
        correct_answer: '',
        answers: [
          {
            id: 7,
            content: 'HTML'
          },
          {
            id: 8,
            content: 'SQL'
          },
          {
            id: 9,
            content: 'XSLT'
          },
          {
            id: 10,
            content: 'XPath'
          }
        ]
      },
      {
        id: 11,
        content: 'Which of the following attacks occurs when a malicious user convinces a victim to send a request to a server with malicious input and the server echoes the input back to client?',
        type: 1, // single choice
        correct_answer: '',
        answers: [
          {
            id: 12,
            content: 'Reflected XSS'
          },
          {
            id: 13,
            content: 'Persistent XSS'
          },
          {
            id: 14,
            content: 'Insecure direct object references'
          },
          {
            id: 15,
            content: 'Failure to restrict URL access'
          }
        ]
      }
    ]
  },
  {
    name: '.NET Core exam',
    description: 'The examination about all new things in .NET core',
    id: '09f99182-a410-4541-8ab2-2efa2565040f',
    questions: []
  },
  {
    name: 'NodeJS exam',
    description: 'The examination about NodeJS core concepts',
    id: '6e2979c7-3617-4f43-ac7a-5e9c657b88fc',
    questions: []
  },
  {
    name: 'Golang concurrency exam',
    description: 'The examination about concurrency in golang',
    id: '27c4345c-a32d-4e1a-9412-bd3144a3782b',
    questions: []
  },
  {
    name: 'Microservices exam',
    description: 'What we need to know about Microservices',
    id: 'e54816d6-e5e3-4cc8-949c-f04f25c2b824',
    questions: []
  },
  {
    name: 'IOT exam',
    description: 'What is Internet of thing playing in the world',
    id: 'c16fbfb6-1f03-425f-8f25-9066dad1e7ff',
    questions: []
  }
]