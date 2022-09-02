package main

import (
	"log"
	"net/http"
  	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	r.PathPrefix("/").Handler(http.FileServer(http.Dir("./frontend/build")))

	err := http.ListenAndServe(":80", r)
	if err != nil {
		log.Fatal(err)
	}
}