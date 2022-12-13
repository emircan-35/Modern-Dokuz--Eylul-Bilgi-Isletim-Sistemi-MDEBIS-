package main

import (
	"database/sql"
	"fmt"
	"log"
	"math/rand"
	"net/http"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// DB CONSTANTS COME HERE
var DB *sql.DB
var ACTIVE_USERS = make(map[string]*user)

func main() {
	//Connect to the DB
	var err error
	DB, err = sql.Open("mysql", "root:354152@tcp(127.0.0.1:3306)/mdebis")
	if DB != nil {

	}
	//trying functions
	fmt.Println(getRealPasswordStudent(2015501167))
	sessionHash := generateRandomSession()
	fmt.Println(sessionHash)
	var user user
	ACTIVE_USERS[sessionHash] = &user
	user.Lecturer = getLecturer(2000506652)
	courses := getCoursesOfALecturer(user.Lecturer)
	for _, course := range courses {
		if course.Id != "" {
			fmt.Println(course)
		}
	}
	//try any back-end function here
	if err != nil {
		panic(err.Error())
	}

	//start to listen to port and response to the requests
	r := Router()
	fmt.Println("Starting server on the port 8080...")
	log.Fatal(http.ListenAndServe(":8080", r))
}

func enableCors(w *http.ResponseWriter) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type")

}

func getUser(sessionHash string) *user {
	user, found := ACTIVE_USERS[sessionHash]
	if found == false {
		return nil
	}
	return user

}

/*
This function returns randomly created hash
to hold the logged user's records
to be able to serve them later faster without a need to log in everytime
*/
func generateRandomSession() string {
	s1 := rand.NewSource(time.Now().UnixNano())
	r1 := rand.New(s1)
	return string(hashPassword(string(r1.Intn(100000))))

}
