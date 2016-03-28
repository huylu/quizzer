/**
Reference at https://github.com/gin-gonic/gin/tree/master/examples/realtime-advanced
 */
package main

import (
	"fmt"
	"runtime"
	"github.com/gin-gonic/gin"
	"github.com/thangchung/quiz-server/utils"
)

const SERVER_PORT = ":6868"

func main() {
	ConfigRuntime()
	StartWorkers()
	StartGin()
}

func ConfigRuntime() {
	numCPU := runtime.NumCPU()
	runtime.GOMAXPROCS(numCPU)
	fmt.Printf("Running with %d CPUs\n", numCPU)
}

func StartWorkers() {
	go utils.StatsWorker()
}

func StartGin() {
	gin.SetMode(gin.ReleaseMode)

	router := gin.Default()
	router.Use(utils.RateLimit, gin.Recovery())
	router.LoadHTMLGlob("resources/*.tmpl")

	router.GET("/", index)
	router.GET("/quiz", getQuizList)
	router.GET("/quiz/:id", getQuizById)

	router.Run(SERVER_PORT)
}

func index(c *gin.Context) {
	c.HTML(200, "index.tmpl", gin.H{
	})
}

func getQuizList(c *gin.Context) {
	data := gin.H {
		"data1": "123",
		"data2": 2,
	}
	c.JSON(200, data)
}

func getQuizById(c *gin.Context) {
	c.JSON(200, c.Param("id"))
}