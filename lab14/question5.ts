class Student {
  answers: Question[] = []

  constructor(public studentId: number) {}

  addAnswer(question: Question) {
    this.answers.push(question)
  }
}

class Question {
  constructor(public qId: number, public answer: string) {}

  checkAnswer(answer: string) {
    return this.answer === answer
  }
}

class Quiz {
  questions

  constructor(questions: Question[], public students: Student[]) {
    this.questions = new Map()

    for (let i = 0; i < questions.length; i++) {
      this.questions.set(questions[i].qId, questions[i].answer)
    }
  }

  scoreStudentBySid(sid: number) {
    const student = this.students.find((s) => s.studentId === sid)
    let score = 0

    if (!student) {
      return null
    }

    student.answers.forEach((answer) => {
      if (this.questions.has(answer.qId)) {
        if (answer.checkAnswer(this.questions.get(answer.qId))) {
          score++
        }
      }
    })

    return score
  }

  getAverageScore() {
    let totalScore = 0
    let totalStudents = this.students.length

    for (let i = 0; i < totalStudents; i++) {
      totalScore += this.scoreStudentBySid(this.students[i].studentId) || 0
    }

    return totalScore / totalStudents
  }
}

const student1 = new Student(10)
student1.addAnswer(new Question(2, 'a'))
student1.addAnswer(new Question(3, 'b'))
student1.addAnswer(new Question(1, 'b'))
const student2 = new Student(11)
student2.addAnswer(new Question(3, 'b'))
student2.addAnswer(new Question(2, 'a'))
student2.addAnswer(new Question(1, 'd'))
const students = [student1, student2]
const questions = [
  new Question(1, 'b'),
  new Question(2, 'a'),
  new Question(3, 'b'),
]
const quiz = new Quiz(questions, students)
let scoreforStudent10 = quiz.scoreStudentBySid(10)
console.log(scoreforStudent10)
let scoreforStudent11 = quiz.scoreStudentBySid(11)
console.log(scoreforStudent11)
let average = quiz.getAverageScore()
console.log(average)
