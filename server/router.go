package main

import "github.com/gorilla/mux"

func Router() *mux.Router {

	router := mux.NewRouter()
	router.HandleFunc("/get_gen_announcements", responseGetGeneralAnnouncements) //returns all general announcements
	//below request is same for students and lecturers (POLYMORPHISM)
	router.HandleFunc("/get_courses/{sessionHash}", responseGetCourses) //return courses if given hash is correct, false otherwise
	//TODO get announcements of a given course

	//Lecturer requests
	router.HandleFunc("/log_lecturer/{username}/{password}", responseLecturerLogIn) //returns session hash if successful, false otherwise
	router.HandleFunc("/change_course_status/{sessionHash}/{courseId}/{assignedStatus}", responseChangeActiveOfCourse)
	router.HandleFunc("/add_grade/{sessionHash}/{courseId}/{studentId}/{grade}", responseAddGrade)
	router.HandleFunc("/add_announcement/{sessionHash}/{courseId}/{title}/{content}", responseAddAnnouncement)
	router.HandleFunc("/add_announcement/{sessionHash}/{courseId}", responseGetStudentsOfCourse)

	//Student requests
	router.HandleFunc("/log_student/{username}/{password}", responseStudentLogIn)                 //returns session hash if successful, false otherwise
	router.HandleFunc("/time_table/{sessionHash}", responseGetTimeTable)                          //returns timetable if given hash is correct, false otherwise
	router.HandleFunc("get_department_of_student/{sessionToken}", responseGetDepartmentOfStudent) // responseGetPastCoursesOfStudent
	router.HandleFunc("get_past_courses/{sessionToken}", responseGetPastCoursesOfStudent)

	//Admin requests
	router.HandleFunc("/log_admin/{id}/{password}", responseAdminLogIn) //returns session hash if successful, false otherwise
	//TODO DELETE STUDENT
	//TODO DELETE LECTURER
	//TODO CREATE STUDENT
	//TODO CREATE LECTURER
	return router
}
