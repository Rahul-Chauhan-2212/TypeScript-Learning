// const person: {
//   age: number;
//   name: string;
// } = { age: 30, name: "Rahul" };
const person = {
  age: 30,
  name: "Rahul",
  hobbies: ["Sports", "Cooking"],
};
let favoriteActivities :string[];
favoriteActivities=['Watching Movies','Coding','Playing Cricket'];

console.log(person);
for(const activity of favoriteActivities)
console.log(activity);
