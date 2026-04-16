# My App

A sample Node.js application with Docker and Kubernetes configuration.

## Overview

This project demonstrates a complete setup for a Node.js application with:
- Docker containerization
- Kubernetes deployment manifests
- CI/CD pipeline using Jenkins
- Production-ready configuration

## Prerequisites

- Node.js 18+
- npm or yarn
- Docker (for containerization)
- Kubernetes cluster (for deployment)
- Jenkins (for CI/CD)

## Getting Started

### Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the application:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:3000`

## Docker

### Build Docker Image

```bash
docker build -t my-app:latest .
```

### Run Docker Container

```bash
docker run -p 3000:3000 my-app:latest
```

## Kubernetes

### Prerequisites

- Kubernetes cluster running
- kubectl configured
- Docker image pushed to a registry

### Deploy to Kubernetes

1. Apply the deployment and service:
   ```bash
   kubectl apply -f k8s/deployment.yaml
   kubectl apply -f k8s/service.yaml
   ```

2. Verify deployment:
   ```bash
   kubectl get deployments
   kubectl get pods
   kubectl get svc
   ```

3. Access the service:
   ```bash
   kubectl port-forward svc/my-app 3000:80
   ```

## CI/CD Pipeline

This project includes a Jenkinsfile for automated:
- Building and testing
- Docker image creation and push
- Kubernetes deployment
- Rolling updates

## Project Structure

```
my-app/
├── src/                  # Application source code
│   ├── index.js
│   └── ...
├── package.json         # Dependencies
├── package-lock.json    # Locked versions
├── Dockerfile           # Docker build instructions
├── .dockerignore         # Docker ignore rules
├── k8s/                 # Kubernetes manifests
│   ├── deployment.yaml
│   └── service.yaml
├── Jenkinsfile          # CI/CD pipeline
├── README.md
└── .gitignore
```

## License

MIT
