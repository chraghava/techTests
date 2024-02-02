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
      emailext body: 'Simple pipeline', subject: 'Status', to: 'chinnaraghs@gmail.com'
    }
  }
}
