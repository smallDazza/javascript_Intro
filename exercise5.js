const marks = [66, 34, 77, 88];

console.log(calMarks());

function calAverage(marks){
    let sum =0;

    for (let mark of marks) 
        sum += mark;

    const avg = sum / marks.length;
    return avg;
}

function calMarks(){
    const avg = calAverage(marks);

    if (avg < 50) return "F";
    if (avg < 60) return "E";
    if (avg < 70) return "D";
    if (avg < 80) return "C";
    if (avg < 90) return "B";
    return "A";

}