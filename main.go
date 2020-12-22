package main

import (
	"flag"
	"github.com/gorilla/mux"
	"github.com/joho/godotenv"
	"html/template"
	"log"
	"net/http"
	"os"
)

var tplIndex *template.Template

func index(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")
	if err := tplIndex.Execute(w, nil); err != nil {
		panic(err)
	}
}

func init() {
	// loads values from .env into the system
	if err := godotenv.Load(); err != nil {
		log.Print("No .env file found")
	}
}

func main() {
	var err error
	var dir string

	port := os.Getenv("PORT")
	if port == "" {
		log.Fatal("$PORT must be set")
	}

	tplIndex = template.Must(template.ParseFiles(
		"index.gohtml"))
	if err != nil {
		panic(err)
	}

	flag.StringVar(&dir, "dir", "dist", "the directory to serve files from")
	flag.Parse()

	r := mux.NewRouter()
	r.PathPrefix("/dist/").Handler(http.StripPrefix("/dist/", http.FileServer(http.Dir(dir))))
	r.HandleFunc("/{category}/{name}", index)
	r.HandleFunc("/{name}", index)
	r.HandleFunc("/", index).Methods("GET")

	log.Printf("Starting server on %s", port)

	http.ListenAndServe(":" + port, r)
}
