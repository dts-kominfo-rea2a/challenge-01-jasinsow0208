// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca
const firstUser = {};
const secondUser = {};

// First User
firstUser.name = "Monica";
firstUser.gender = "Female";
firstUser.age = 17;
firstUser.email = "monica@dingdong.com";

const colorUser1 = new Set();
colorUser1.add("Yellow");
colorUser1.add("Pink");
colorUser1.add("White");
colorUser1.add("Purple");
firstUser.favoriteColor = colorUser1;

firstUser.isHavePet = "Yes";

const eduFirstUser = [];
const eduFirstUser1 = { name: "SD 01", city: "Jakarta", graduate: 2016 };
const eduFirstUser2 = { name: "SMP 02", city: "Jakarta", graduate: 2019 };
const eduFirstUser3 = { name: "SMA 03", city: "Tangerang" };
eduFirstUser.push(eduFirstUser1);
eduFirstUser.push(eduFirstUser2);
eduFirstUser.push(eduFirstUser3);
firstUser.education = eduFirstUser;

const restUser1 = new Set();
restUser1.add("Bento");
restUser1.add("Sushi");
restUser1.add("Pancake");
restUser1.add("Eggy");
restUser1.add("Tempura");
restUser1.add("Bento");
restUser1.add("Eggy");
restUser1.add("Padang");
restUser1.add("Tteok");
restUser1.add("Sushi");
restUser1.add("Sushi");
firstUser.favoriteRestaurant = restUser1;

// Second User
secondUser.name = "Wendy";
secondUser.gender = "Male";
secondUser.age = 23;
secondUser.email = "wendy@dingdong.com";

const colorUser2 = new Set();
colorUser2.add("Blue");
colorUser2.add("Black");
colorUser2.add("Grey");
secondUser.favoriteColor = colorUser2;

secondUser.isHavePet = "No";

const eduSecondUser = [];
const eduSecondUser1 = { name: "SD 02", city: "Jakarta", graduate: 2010 };
const eduSecondUser2 = { name: "SMP 03", city: "Bogor", graduate: 2013 };
const eduSecondUser3 = { name: "SMA 01", city: "Surabaya", graduate: 2016 };
const eduSecondUser4 = { name: "Universitas Maju", city: "Tangerang" };
eduSecondUser.push(eduSecondUser1);
eduSecondUser.push(eduSecondUser2);
eduSecondUser.push(eduSecondUser3);
eduSecondUser.push(eduSecondUser4);
secondUser.education = eduSecondUser;

const restUser2 = new Set();
restUser2.add("Tempura");
restUser2.add("Bento");
restUser2.add("Sushi");
restUser2.add("Pancake");
restUser2.add("Padang");
restUser2.add("Katsu");
restUser2.add("Geprek");
restUser2.add("Pancake");
restUser2.add("Eggy");
secondUser.favoriteRestaurant = restUser2;

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [firstUser, secondUser];

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
  console.log(users.length || users.size);
  console.log(users);
}

main();

module.exports = {
  users,
};
