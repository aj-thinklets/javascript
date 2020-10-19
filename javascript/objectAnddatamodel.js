var course = new Object();

// course.title = "Javascript Essential Training";
// course.instructor = "Morten";
// course.level = 1;
// course.published = true;
// course.views = 0;

//Short Hand
var course = {
    title: "Javascript Essential Training",
    instructor:  "Morten",
    level:  1,
    published:  true,
    views:  0,
    updateviews: function() {
        return ++course.views;
    }
}

console.log("Course object: ", course);
console.log("Course view count: ", course.views);
course.updateviews();
console.log("Course view count after: ", course.views);

function CourseV2 (title, instructor, level, published, views, updateViews) {
    this.title = title;  //this is reference to this object
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    }
}

var course01 = new CourseV2("Java", "Morsen", "1", true, 1)
var course02 = new CourseV2("C++", "Morsen", "1", true, 123)

console.log("course01: ", course01);
console.log("course02: ", course02);

//Array of courses
var courses = [
    new CourseV2("Java", "Morsen", "1", true, 1),
    new CourseV2("C++", "Morsen", "1", true, 123)
];

console.log(courses[1].updateViews());


//Accessing object DOT AND BRACKET NOTATION
//DOT NOTATION ==> course.tile
//BRACKET ==> course["title"]  ==> WORKS IN MOST CASE 