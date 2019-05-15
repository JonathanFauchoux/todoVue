import Firebase from 'firebase'

let config = {
  apiKey: "AIzaSyC2KwIQSqwaQq-kAl8aPKT3MAkE3r5bSac",
  authDomain: "listecourses-1950e.firebaseapp.com",
  databaseURL: "https://listecourses-1950e.firebaseio.com",
  projectId: "listecourses-1950e",
  storageBucket: "listecourses-1950e.appspot.com",
  messagingSenderId: "661600764114",
  appId: "1:661600764114:web:6b6bc1eeded5f794"
}

let app = Firebase.initializeApp(config)
let db = app.database()

let coursesRef = db.ref('courses')
export default {
  coursesRef
}