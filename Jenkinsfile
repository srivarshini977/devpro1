pipeline {
    agent any

    environment {
        IMAGE = "yourdockerhubusername/my-app"
    }

    stages {

        stage('Build') {
            steps {
                sh 'docker build -t $IMAGE:latest .'
            }
        }

        stage('Push') {
            steps {
                sh 'docker push $IMAGE:latest'
            }
        }

        stage('Deploy') {
            steps {
                sh 'kubectl apply -f k8s/'
            }
        }
    }
}
