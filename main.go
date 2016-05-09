/**
Reference at https://github.com/gin-gonic/gin/tree/master/examples/realtime-advanced
 */
package main

import (
  "fmt"
  "runtime"
  "os"
  "github.com/gin-gonic/gin"
  "github.com/thangchung/quizzer/utils"
)

var SERVER_PORT = os.Getenv("PORT")

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
  router.Use(utils.RateLimit, gin.Logger(), gin.Recovery())
  authMiddleware := utils.GetAuthMiddleware()

  // static resources
  router.LoadHTMLGlob("resources/*.html")
  router.Static("/dist", "dist")

  // authentication routing
  router.GET("/", index)
  router.POST("/login", authMiddleware.LoginHandler)
  router.NoRoute(index)

  // auth group
  auth := router.Group("/auth")
  auth.Use(authMiddleware.MiddlewareFunc())
  {
    auth.GET("/quizz", getQuizList)
    auth.GET("/quizz/:id", getQuizById)
  }

  // start server
  if len(SERVER_PORT) <= 0 {
    SERVER_PORT = ":6868"
  } else {
    SERVER_PORT = ":" + SERVER_PORT
  }
  fmt.Printf("Application is running at http://localhost%s/", SERVER_PORT)
  router.Run(SERVER_PORT)
}

func index(c *gin.Context) {
  c.HTML(200, "index.html", gin.H{
    "title": utils.GetTitle(),
  })
}

func getQuizList(c *gin.Context) {
  data := gin.H{
    "data1": "123",
    "data2": 2,
  }
  c.JSON(200, data)
}

func getQuizById(c *gin.Context) {
  c.JSON(200, c.Param("id"))
}
