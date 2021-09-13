package main

import (
	"os"

	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.File("/", "build/index.html")
	e.File("/manifest.json", "build/manifest.json")
	e.File("/robots.txt", "build/robots.txt")
	e.File("/materialagora-icon.svg", "build/materialagora-icon.svg")
	// assets
	e.Static("/static", "build/static")
	e.Logger.Fatal(e.Start(":" + port()))
}

func port() (p string) {
	if p = os.Getenv("PORT"); p != "" {
		return
	}
	return "8080"
}