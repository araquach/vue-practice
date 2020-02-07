package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
	_ "github.com/jinzhu/gorm/dialects/postgres"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
)

type Holiday struct {
	ID uint `json:"id"`
	Name string `json:"name"`
}

var tplIndex *template.Template

func dbConn() (db *gorm.DB) {
	dbhost     := "localhost"
	dbport     := "5432"
	dbuser     := "postgres"
	dbpassword := ""
	dbname     := "vue"

	psqlInfo := fmt.Sprintf("host=%s port=%s user=%s "+
		"password=%s dbname=%s sslmode=disable",
		dbhost, dbport, dbuser, dbpassword, dbname)

	db, err := gorm.Open("postgres", psqlInfo)
	if err != nil {
		panic(err)
	}
	return db
}

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplIndex.Execute(w, nil); err != nil {
		panic(err)
	}
}

func apiHolidays(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	db := dbConn()
	holidays := []Holiday{}
	db.Find(&holidays)
	db.Close()

	json, err := json.Marshal(holidays)
	if err != nil {
		log.Println(err)
	}
	w.Write(json)
}

func apiCreateHoliday (w http.ResponseWriter, r *http.Request) {
	decoder := json.NewDecoder(r.Body)

	var data Holiday
	err := decoder.Decode(&data)
	if err != nil {
		panic(err)
	}

	db := dbConn()
	db.Create(&data)
	if err != nil {
		log.Fatal(err)
	}
	return
}

func main() {
	var err error

	port := "8080"

	db := dbConn()
	db.AutoMigrate(&Holiday{})
	db.Close()

	tplIndex = template.Must(template.ParseFiles(
		"views/main.gohtml"))
	if err != nil {
		panic(err)
	}

	r := mux.NewRouter()
	r.HandleFunc("/", index).Methods("GET")
	r.HandleFunc("/api/holidays", apiHolidays).Methods("GET")
	r.HandleFunc("/api/holiday", apiCreateHoliday).Methods("POST")

	// Assett Handler
	assetHandler := http.FileServer(http.Dir("./dist/"))
	assetHandler = http.StripPrefix("/dist/", assetHandler)
	r.PathPrefix("/dist/").Handler(assetHandler)

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(":" + port, r)
}


