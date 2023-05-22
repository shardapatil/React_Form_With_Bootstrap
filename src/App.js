import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body class="bg-success bg-opacity-10">
  <div class="mb-3 d-flex justify-content-center w-100">
    <div class="w-75">
  <div class="bg-success p-2 text-white text-center">Registration Form</div>

  <form class="border border-success-subtle bg-success p-2 text-dark bg-opacity-10 p-3 ">
  <div class="bg-success p-2 text-white bg-opacity-75 ">
  <div class="mb-3">
    <label for="exampleInputAdd" class="form-label">Name</label>
    <input type="textArea" class="form-control" id="exampleInputAdd" aria-describedby="emailHelp"></input>
  </div>
  </div>
<div class="bg-success p-2 text-dark bg-opacity-50 ">
<div class="mb-3">
    <label for="exampleInputAdd" class="form-label">Gender</label>
    <input type="textArea" class="form-control" id="exampleInputAdd" aria-describedby="emailHelp"></input>
  </div>
</div>
<div class="bg-success p-2 text-dark bg-opacity-25">
<div class="mb-3">
    <label for="exampleInputAdd" class="form-label">Hobbies</label>
    <input type="textArea" class="form-control" id="exampleInputAdd" aria-describedby="emailHelp"></input>
  </div></div>
<div class="bg-success p-2 text-dark bg-opacity-10 ">
<div class="mb-3">
    <label for="exampleInputAdd" class="form-label">Address</label>
    <input type="textArea" class="form-control" id="exampleInputAdd" aria-describedby="emailHelp"></input>
  </div>
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"></input>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
    </body>
  );
}

export default App;
