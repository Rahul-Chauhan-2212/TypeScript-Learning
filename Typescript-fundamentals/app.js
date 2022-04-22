// const person: {
//   age: number;
//   name: string;
// } = { age: 30, name: "Rahul" };
var person = {
    age: 30,
    name: "Rahul",
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"]
};
person.role.push("admin");
//person.role[1] = 10; error at this line with tuple
var favoriteActivities;
favoriteActivities = ["Watching Movies", "Coding", "Playing Cricket"];
console.log(person);
for (var _i = 0, favoriteActivities_1 = favoriteActivities; _i < favoriteActivities_1.length; _i++) {
    var activity = favoriteActivities_1[_i];
    console.log(activity);
}
