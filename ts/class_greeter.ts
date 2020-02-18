// ここでStudent classを定義する。
// 定義内容は 
// fullNameがstring型であること
// コンストラクタ内の引数はfirstName, middleInitial, lastNameとする
// それを用いてfullNameの中に入れる
// 

class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

// interface でPerson型を定義
// firstNameはstring
// lastNameはstring
interface Person {
  firstName: string,
  lastName: string
}

// greeterメソッドでPerson型のpersonを引数に入れて処理をする
// PersonはfirstNameとlastNameしか持っていないので、middleInitialを呼ぶとエラー
function greeter(person: Person) {
  return `hello ${person.firstName} ${person.lastName}`;
}

let user = new Student("masanari", "sample", "hori");

document.body.textContent = greeter(user);

