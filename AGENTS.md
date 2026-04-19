# Repository Guidelines

A sample Node.js application containerized with Docker and deployed using Kubernetes and Jenkins.

## Project Structure & Module Organization

- **`my-app/src/`**: Main application logic using **Express**.
- **`k8s/`**: Kubernetes manifests for deployment and service configuration.
- **`Dockerfile`**: Container definition for production environments.
- **`Jenkinsfile`**: Automated CI/CD pipeline for building, testing, and deployment.

## Build, Test, and Development Commands

- **Install Dependencies**: `npm install`
- **Start Application**: `npm start` or `npm run dev`
- **Build Docker Image**: `docker build -t my-app:latest .`
- **Run Docker Container**: `docker run -p 3000:3000 my-app:latest`
- **Deploy to K8s**: `kubectl apply -f k8s/deployment.yaml && kubectl apply -f k8s/service.yaml`
- **Verify Deployment**: `kubectl get deployments`, `kubectl get pods`, `kubectl get svc`
- **Access Service**: `kubectl port-forward svc/my-app 3000:80`

## Coding Style & Naming Conventions

The project uses standard **Node.js/Express** conventions. No external linters or formatters are explicitly configured in the repository root.

## Commit Guidelines

Follow clear, descriptive commit messages. Recent history shows simple imperative style:
- `Initial commit: Add project files`
