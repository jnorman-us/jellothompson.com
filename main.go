package main

import (
	"os"
	"log"
	"net/http"
  	"github.com/gorilla/mux"
)

func main() {
	port := os.Getenv("PORT")

	r := mux.NewRouter()
	r.PathPrefix("/").HandlerFunc(handleFrontend)

	log.Printf("Running Server on port: %s\n", port)
	err := http.ListenAndServe(":" + port, r)
	if err != nil {
		log.Fatal(err)
	}
}

func handleFrontend(w http.ResponseWriter, r *http.Request) {
	url := r.URL.RequestURI()
	log.Printf("Received Request for jellothompson.com%s\n", url)
	server := http.FileServer(http.Dir("./frontend/build"))
	server.ServeHTTP(w, r)
}
