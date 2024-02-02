pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy app'
            }
        }
    }
  post {
    always
    {
      emailext body: 'summary', subject: 'Pipeline status', to: 'chinnaraghs@gmail.com'
    }
  }
}
