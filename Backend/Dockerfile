# Step 1: Use an official Maven image to build the application
FROM maven:3.8.5-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the Maven Wrapper files and pom.xml first (to leverage Docker caching)
COPY pom.xml ./
COPY mvnw ./
COPY mvnw.cmd ./

RUN mvn wrapper:wrapper

# Make the Maven Wrapper script executable
RUN chmod +x ./mvnw

# Download dependencies (to leverage Docker caching)
RUN ./mvnw dependency:go-offline -B

# Copy the entire project into the container
COPY . .

# Make the Maven Wrapper script executable
RUN chmod +x ./mvnw

# Build the application
RUN ./mvnw clean package -DskipTests

# Step 2: Use a lightweight JDK image to run the built application
FROM openjdk:17-jdk-slim

# Set the working directory
WORKDIR /app

# Copy the built JAR file from the previous stage
COPY --from=build /app/target/*.jar app.jar
# Expose the port the Spring Boot app will run on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]
