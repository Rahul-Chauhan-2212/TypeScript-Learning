// const person: {
//   age: number;
//   name: string;
// } = { age: 30, name: "Rahul" };
enum RoleEnum {
  AUTHOR,
  READ_ONLY_USER,
}
const person: {
  age: number;
  name: string;
  hobbies: string[];
  role: [number, string]; //tuple
  roleEnum: number;
} = {
  age: 30,
  name: "Rahul",
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
  roleEnum: RoleEnum.READ_ONLY_USER
};
person.role.push("admin");
//person.role[1] = 10; error at this line with tuple
let favoriteActivities: string[];
favoriteActivities = ["Watching Movies", "Coding", "Playing Cricket"];

console.log(person);
for (const activity of favoriteActivities) console.log(activity);
