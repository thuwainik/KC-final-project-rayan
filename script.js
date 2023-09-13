let score = 0;

function increase(name, score) {
  let scoreHTML = document.getElementById(name);
  score = parseInt(score) + 1;
  scoreHTML.innerHTML = score;
}
var navbar = `
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">صلاتي</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              تحديد الدول
            </a>
            <ul class="dropdown-menu dropdown-menu-dark">
              <li><a class="dropdown-item" href="./index.html">الكويت</a></li>
              <li><a class="dropdown-item" href="./saudi.html">الممكلة العربية السعودية</a></li>
              <li><a class="dropdown-item" href="./bahrain.html">مملكة البحرين</a></li>
              <li><a class="dropdown-item" href="./qatar.html">قطر</a></li>
              <li><a class="dropdown-item" href="./emrits.html">الامارات</a></li>
              <li><a class="dropdown-item" href="./oman.html">سلطنة عمان</a></li>
             
              
            </ul>
          </li>
          
          <li class="nav-item">
            <a class="nav-link" href="#title">السبحة</a>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>`;
document.body.insertAdjacentHTML("afterbegin", navbar);
