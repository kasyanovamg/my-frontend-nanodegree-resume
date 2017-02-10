//My resume build for Udacity's Intro to JavaScript course
var bio = {
    "name" : "Mariia Kasianova",
    "role" : "Web Developer",
    "contacts" : {
        "mobile" : "0123456789",
        "email" : "kasyanovamg@gmail.com",
        "github" : "kasyanovamg",
        "twitter" : "none",
        "location" : "Samara, Russia"
    },
    "welcomeMessage" : "Welcome welcome, welcome to my profile page!",
    "skills" : [
    "HTML", "CSS", "JavaScript"
    ],
    "bioPic" : "images/me.jpg"
}
bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#topContacts").append(formattedMobile);
    $("#topContacts").append(formattedEmail);
    $("#topContacts").append(formattedGitHub);
    $("#topContacts").append(formattedTwitter);
    $("#topContacts").append(formattedLocation);
    $("#header").append(formattedBioPic);
    $("#header").append(formattedWelcomeMsg);

    $("#header").append(HTMLskillsStart);
    for (skill in bio.skills) {
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
        $("#skills").append(formattedSkill);
    }
    //footers:
    $("#footerContacts").append(formattedMobile);
    $("#footerContacts").append(formattedEmail);
    $("#footerContacts").append(formattedGitHub);
    $("#footerContacts").append(formattedTwitter);
    $("#footerContacts").append(formattedLocation);
}

var education = {
    "schools" : [
    {
        "name" : "Samara State Medical University",
        "location" : "Gagarina St., Samara, Russia",
        "degree" : "BA",
        "majors" : "Clinical Psychology",
        "dates" : "2009-2014",
        "url" : "http://www.samsmu.ru/"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Udacity Nanodegree",
        "school" : "Udacity",
        "dates" : "2017",
        "url" : "http://excample.com"
    }
    ]
}
education.display = function() {
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedSchoolName =
            HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedSchoolDegree =
            HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        $(".education-entry:last").append(formattedSchoolName + formattedSchoolDegree);

        var formattedSchoolDates =
            HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedSchoolDates);

        var formattedSchoolLocation =
            HTMLschoolLocation.replace("%data%", education.schools[school].location);
        $(".education-entry:last").append(formattedSchoolLocation);

        var formattedSchoolMajor =
            HTMLschoolMajor.replace("%data%", education.schools[school].majors);
        $(".education-entry:last").append(formattedSchoolMajor);
    }
    $("#education").append(HTMLonlineClasses);
    for (course in education.onlineCourses) {
        $("#education").append(HTMLschoolStart);
        var formattedOnlineTitle =
            HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
            var formattedOnlineSchool =
            HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        $(".education-entry:last").append(formattedOnlineTitle + formattedOnlineSchool);
        var formattedOnlineDates =
            HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
            $(".education-entry:last").append(formattedOnlineDates);
        var formattedOnlineUrl =
            HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
            $(".education-entry:last").append(formattedOnlineUrl);
    }
}

var work = {
    "jobs" : [
    {
        "employer" : "Samara State Medical University",
        "title" : "Psychologist",
        "location" : "Tuhachevskogo St., Samara, Russia",
        "dates" : "2014-2017",
        "description" : "Research in understanding human's\
        mind and behavior, \
        personal consultations and group trainings."
    }
    ]
}
work.display = function() {
    for (job in work.jobs) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer =
            HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle =
            HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle =
            formattedEmployer + formattedTitle;

        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates =
            HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedLocation =
            HTMLworkLocation.replace("%data%", work.jobs[job].location);
        $(".work-entry:last").append(formattedLocation);

        var formattedDescription =
            HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
    }
}

var projects = {
    "projects" : [
    {
        "title" : "Udacity JavaScript course",
        "dates" : "2017",
        "description" : "Trying to build a portfolio",
        "images" : [
            "images/197x148.gif",
            "images/197x148.gif"
            ]
    }
    ]
}
projects.display = function() {
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle =
            HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates =
            HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription =
            HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        if (projects.projects[project].images.length > 0) {
            for (image in projects.projects[project].images) {
                var formattedImage =
                    HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }
    }
}

$("#mapDiv").append(googleMap);

bio.display(bio);
work.display(work);
projects.display(projects);
education.display(education);
