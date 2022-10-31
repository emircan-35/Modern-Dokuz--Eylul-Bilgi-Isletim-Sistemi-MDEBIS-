package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

/*CONSTANTS CAME HERE
 */
var db *sql.DB

func main() {
	db_loc, err := sql.Open("mysql", "root:354152@tcp(127.0.0.1:3306)/mdebis")
	db = db_loc
	defer db.Close()
	// if there is an error opening the connection, handle it
	if err != nil {
		panic(err.Error())
	}
	succes, json_st, student := student_log_in("emir", "354152")
	if succes != false {
		fmt.Println("here is the student")
		fmt.Println(string(json_st))
		fmt.Println("\n\n")
		announcements := get_course_announcements(&student)
		fmt.Println(string(announcements))
	}
}