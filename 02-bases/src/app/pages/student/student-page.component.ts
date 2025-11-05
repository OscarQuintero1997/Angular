import { Component, computed, signal } from "@angular/core";


@Component ({
  templateUrl: './student-page.component.html'
})


export class StudentPageComponent {

studentName = signal ('Carlos');
grade = signal (4.5);
subject= signal ('Matemáticas');

getStudentDescription () {
 return `El nombre del estudiante es ${this.studentName()} y tiene una calificación de ${this.grade()} en la asignatura ${this.subject()}`;
}

changeSubject () {
  this.subject.set ('Historia');
  this.subject.set ('Matemáticas');
}

resetForm() {
  this.studentName.set ('Carlos');
  this.grade.set (4.5);
  this.subject.set ('Matemáticas');
}

changeStudent() {
  this.studentName.set ('Maria');
  this.grade.set (3.8);
  this.subject.set ('Ciencias');
}

studentSummary = computed (()=>{
  return `${this.studentName()} estudia ${this.subject()} y tine una nota de ${this.grade()}`;
})













}
