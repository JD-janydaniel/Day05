// 1.Create your own resume data in JSON format
// Solution

let resume = {"name":"Jany Daniel",
"Age":27,
"Gender":"Male",
"Date-of-Birth":"01-01-1997",
"Nationality":"Indian",
"State":"Tamil Nadu",
"Qualification":"BE Computer Science",
"CGPA":7.2,
"Institution":"Thanthai Periyar Government Institute of Technology, Vellore",
"Diploma":"Diploma in Computer Science",
"Percentage":80,
"Institution":"Morning Star Polytechnich College,Chunkankadai,kanniyakumari",
"HSC":"Mother Theresa Mariculation Higher Secondary School,Mylacode,Kanniyakumari",
"Percantage":61,
"SSLC":"Mother Theresa Mariculation Higher Secondary School,Mylacode,Kanniyakumari",
"Percentage":80,
"Address":"Nagakuzhi villai,Mylacode,Alencode(p.o),kanniyakumari District,pin[629802]",
"Certfication":"MERN Full Stack Development",
"Skils":"JavaScript,MS Word,MS Excel,Power point",
"Languages Known":"English ,Tamil ,Malayalam",
"Phone no":8870275838,
"Email":"janydaniel59@gmail.com"}


// 2.For the above JSON ,iterate overall for loops(for,for in,for of,for each)
// Solution
// By Using For Loop
 var arr = [];
for(let[key,value] of Object.entries(resume)){
    arr.push(`${key} ${value}`);
}

for (let i=0;i<arr.length;i++)
console.log(arr[i]);

// Solution
// By using for in loop

for( i in resume){
    console.log(i,resume[i]);
}

// Solution
// BY using for of loop

for( let i of Object.keys(resume)){
   console.log(i,resume[i]);
}

// Solution
// By using for each loop


Object.keys(resume).forEach(i => {
    console.log(`${i} : ${resume[i]}`);
});