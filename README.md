- [Part 1: Working with Docker](#part-1-working-with-docker)
- [Part 2: Working with CI/CD](#part-2-working-with-cicd)
- [Part 3: Working with Helm and Terraform](#part-3-working-with-helm-and-terraform)

```
project
│   README.md
│
└───App
│   └───tests
│          hello-world.test.js   
│   hello-world.js
│   Dockerfile
│   
└───Terraform
│   └───hello-world
│           main.tf
│           variables.tf      
└───Helm
│   └───hello-world
│       └───templates
│               deployment.yaml
│               service.yaml
│       Chart.yaml
│       values.yaml
│       
└───.github
    └───workflows
            node-cicd.yaml
```

## Part 1: Working with Docker

Simple Dockerfile for a Node.js application that outputs "Hello, World!".
Build a Docker image from this Dockerfile. 
- Workdirectory **App**
```
docker build -t hello-world .
docker images
```

Run a container from the created image and ensure the application works.
- Map 3000 port of host to the 8080 port off application and run docker container in detached mode with auto remove after stop it.

```
docker run -d -p 3000:8080 --name hello-world --rm hello-world
docker ps
```
- Open browser and got to the **localhost:3000**
- Or **curl -s localhost:3000**

Push the created Docker image to Docker Hub. Provide the link to the image.
- **adhocam** is the name of personal dockerhub account

```
docker image tag hello-world:latest adhocam/hello-world:latest
docker image push adhocam/hello-world:latest
```
- Image link [adhocam/hello-world](https://hub.docker.com/repository/docker/adhocam/hello-world/general)
```
docker pull adhocam/hello-world:latest
```

- Check
```
docker run -d -p 3000:8080 --name hello-world --rm adhocam/hello-world

curl -s localhost:3000
```

## Part 2: Working with CI/CD
Create a simple pipeline using GitHub Actions that:
- Clones the repository with the application (you can use the application from Part 1).
- Runs unit tests for the Node.js application.
- Builds the Docker image.
- Pushes the image to Docker Hub.
- Provide the YAML file for the GitHub Actions pipeline.

Github Actions workflow is created with manuall trigger. Go to the [node-cicd](https://github.com/adhoc-am/dr-devops-test/actions/workflows/node-cicd.yaml) and press **Run workflow** button in the top left corner to run workflow.

## Part 3: Working with Helm and Terraform
Create a simple Helm chart for deploying the Node.js application in Kubernetes.
(Include a values.yaml file for customization)
Use Terraform to create a Kubernetes cluster (you can use a local cluster with kind or minikube for simplicity).
Deploy the application using the created Helm chart in the created cluster.
Expose the application using a Kubernetes Service
Provide the configuration files for Helm and Terraform.

- Local minikube kubernetes cluster is used for Helm deployment.
- Go to the Terraform/hello-world directory and run
```
terrafrom init
terrafrom plan 
terraform apply
```
- Terraform state is stored localy