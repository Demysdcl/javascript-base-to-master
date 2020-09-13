type Student = {
  birthday?: Date
}

const student: Student = {}

console.log(student.birthday?.toDateString())
console.log(student.birthday?.toDateString() ?? `Didn't inform`)
