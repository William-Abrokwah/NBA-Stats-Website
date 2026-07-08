# --- Stage 1: Build stage ---

# Downloads an official Docker image pre-packaged with Maven 3.9.6 and Java 21
FROM maven:3.9.6-eclipse-temurin-21 AS build

# Creates a folder named /app inside the image and switches to it
WORKDIR /app

# Copies the project's pom.xml into the '/app' folder
COPY pom.xml .

# Download all the dependencies and lock them into a Docker cache layer
RUN mvn dependency:go-offline -B

# Copies the Java source code folder into the image
COPY src ./src

# Triggers Maven to compile the code and package it into a runnable JAR file (skips tests)
RUN mvn clean package -DskipTests -B

# --- Stage 2: Runtime stage ---

# Start with new image containing only JRE
FROM eclipse-temurin:21-jre-alpine

# Creates a '/app' folder in the new container and switches to it
WORKDIR /app

# Copies the finished .jar from Stage 1 into the new container
COPY --from=build /app/target/*.jar app.jar

# Tells Docker (and anyone running the container) that the app listens for network traffic on port 8080
EXPOSE 8080

# Executes when the container boots up
ENTRYPOINT ["java", "-jar", "app.jar"]