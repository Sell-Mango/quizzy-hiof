import { quiz13 } from "./quiz13-fetch-med-arkitektur";
import { quiz14 } from "./quiz14-utvide-api-klient";

const quiz_webapp13 = {
  id: 'quiz-webapp-13',
  title: 'Webapps kap 13: Fetch med arkitektur',
  description:
    'Test din forståelse av av Webapplikasjoner kapittel 13, fetch med arkitektur.',
  questions: [
    ...quiz13
  ]
}

const quiz_webapp14 = {
  id: 'quiz-webapp-14',
  title: 'Webapps kapittel 14: Utvide api klient',
  description:
    'Test din forståelse av av Webapplikasjoner kapittel 13, utvide API-klient med AbortController, caching og logging.',
  questions: [
    ...quiz14
  ]
}

const quiz_webapp15 = {
  id: 'quiz-webapp-15',
  title: 'Webapps kapittel 15: REST API-teori og arkitektur-prinsipper',
  description:
    'Test din forståelse av av Webapplikasjoner kapittel 15, REST API-teori og arkitektur-prinsipper.',
  questions: [
    ...quiz14
  ]
}


export const quizzes = [quiz_webapp13, quiz_webapp14, quiz_webapp15];
