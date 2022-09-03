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
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend/build")))

	log.Printf("Running Server on port: %s\n", port)
	err := http.ListenAndServe(":" + port, r)
	if err != nil {
		log.Fatal(err)
	}
}