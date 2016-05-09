FROM golang:1.6.2-alpine

MAINTAINER Thang Chung "thangchung@ymail.com"

# Define all environment variables
ENV PORT 6868
ENV DIR_PATH /go/src/github.com/thangchung/quizzer

# Install needed packages
RUN apk update && apk add curl git mercurial && rm -rf /var/cache/apk/*

# Create the directory where the application will reside
RUN mkdir -p $DIR_PATH

# Install dependency package
RUN go get github.com/gin-gonic/gin && go get github.com/appleboy/gin-jwt && go get github.com/manucorporat/stats

# Copy the application files (needed for production)
ADD ./dist $DIR_PATH/dist
ADD ./resources $DIR_PATH/resources
ADD ./utils $DIR_PATH/utils
ADD ./main.go $DIR_PATH/main.go

# Set the working directory to the app directory
WORKDIR $DIR_PATH

# Expose the 8080 port
EXPOSE $PORT

# Execute the command on the main.go
CMD ["go", "run", "main.go"]