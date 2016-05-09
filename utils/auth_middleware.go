package utils

import (
  "time"
  "github.com/appleboy/gin-jwt"
  "github.com/gin-gonic/gin"
)

func GetAuthMiddleware() *jwt.GinJWTMiddleware {
  return &jwt.GinJWTMiddleware{
    Realm:"OQA",
    Key:[]byte("secret for OQA"),
    Timeout: time.Hour,
    Authenticator: func(userId string, password string, c *gin.Context) (string, bool) {
      if (userId == "admin" && password == "123456") || (userId == "test" && password == "123456") {
        return userId, true
      }
      return userId, false
    },
    Authorizator:func(userId string, c *gin.Context) bool {
      if userId == "admin" {
        return true
      }
      return false
    },
  }
}
